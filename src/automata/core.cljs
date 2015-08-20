(ns automata.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop ]])
  (:require [quil.core :as q :include-macros true]
            [monet.canvas :as canvas]
            [cljs.core.async :refer [put! chan alts! <! timeout]]
            [automata.rules :as rules]
            [quil.middleware :as m]))


(defn log [thing]
  (.log js/console (clj->js thing)))

(defn build-world [x y & {:keys [rand]
                          :or {rand false}}]
  (into []
        (repeatedly
          x
          (fn [] (into [] (repeatedly y
                                      (if rand
                                        #(if (= 1 (rand-int 7)) 1 0)
                                        #(identity 0))))))))


(def canvas-dom (.getElementById js/document "monet"))

(def monet-canvas (canvas/init canvas-dom "2d" ))

(def world-x 50)
(def world-y 50)


(def state (atom {:world         (build-world world-x world-y :rand true)
                  :update-ready? false}))

(defn sq-size [] (/ (q/width) world-x))



(defn row->cords [in-y size]
  "row->cords :: (in-y size) -> [[cords]]"
  (iterate (fn [[x y]]
           [(+ x size) y]) [0 in-y]))

(defn row-starts [size]
 " ;; row-starts :: size  -> [y] "
  (iterate #(+ size %) 0))

(defn gen-rows [cnt size]
  ";; cord :: [x y]
  ;; rows :: (cnt, size) -> [[[cords]]]"
  (mapv
    (fn [start-x]
      (into []
            (take cnt (row->cords start-x size))))
    (take cnt (row-starts size))))

(defn zip-cells [cells size]
  "zip-cells :: [[cells]] -> size -> [[ {cell:cell cord:cord}]] "
  (let [rows (gen-rows (count cells) size)]
    (mapv
      ;; fn :: [[cell]] ->[[cord]] -> [[cellcords]]
      (fn [cell-row cord-row]
        (mapv
          (fn [cell cord]
            {:cell cell
             :cord cord
             :height size
             :width size})
          cell-row cord-row))
      cells rows)))

(comment (log (zip-cells [[0 0]
                          [0 0]] 50)))

(defn cell->color [cell]
  (case cell
        0 [0 1 255]
        1 [0 0 0]))

(def offsets
  [[[-1 1]  [0 1]  [1 1]]
   [[-1 0]  [0 0]  [1 0]]
   [[-1 -1] [0 -1] [1 -1]]] )

(defn wrap [min max x]
  (cond (< x min) max
        (> x max) min
        :else x))

(defn do-offset [wrapper off cord ]
  (let [new-cord (mapv + off cord)]
    (mapv wrapper new-cord)))

(defn cord->hood-cords [offset-coll wrapper cord]
  (map
    (fn  [off-row]
      (map (partial do-offset wrapper)
            off-row
            (repeatedly #(identity cord))))
    offset-coll))


(defn get-hood [world hood]
  (mapv #(mapv (partial get-in world) %) hood))

(defn world->hoods [world & {:keys [min max wrapper getter]
                             :or   {min     0
                                    getter  (partial get-hood world)
                                    max     (dec (count world))
                                    wrapper (memoize (partial wrap min max))}}]
  (let [rows (gen-rows (count world) 1)]
    (map (fn [row]
        (map (fn [cord]
               (getter
                 (cord->hood-cords offsets wrapper cord))) row))
      rows)))



;; rule :: hood -> int
(defn -hood->next-cell [hood rules]
  (let [live (reduce (fn [last this-rule]
                  (and last (this-rule hood))) true rules)]
    (if live 1 0)))

(def hood->next-cell (memoize -hood->next-cell))

(defn hoods->next-world [hoods rules]
  "takes all of the hoods and returns a new world"
  (mapv (fn [hood-row]
          (mapv
            (fn [cur-hood]
              (hood->next-cell cur-hood rules))
            hood-row))
        hoods))

(defn draw-cellcord [{cell :cell
                      [x y] :cord
                      height :height
                      width :width}]
  (apply q/fill (cell->color cell))
  (q/rect x y width height))


(defn draw-cellcords [cellcords]
  "draw-cellcords :: [[cellcords]] -> CanvasIO"
  ; (log cellcords)
  (mapv (partial mapv draw-cellcord ) cellcords))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 1)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)

  ; setup function returns initial state. It contains
  ; circle color and position.
  {:world (build-world world-x world-y :rand true)
   :color :green
   :size  (sq-size)
   :x     world-x
   :y     world-y})

(defn step-world [world rules]
  (hoods->next-world (world->hoods world) rules)
  )

(set-print-fn! log)
(defn update-state [{:keys [world] :as state}]
  ; update changes things
  ; Update sketch state by changing circle color and position.

  ;(log (hoods->next-world (world->hoods world) rules/rules))
    (let [new-world (step-world world rules/rules)]
      (assoc state :world new-world)))


(defn draw-state [{:keys [world size color x y]  :as state}]

  (q/background 240)
  (draw-cellcords (zip-cells world size))
  ; Set circle color.
  state
 )


(q/defsketch automata
  :host "automata"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])

(def event-channel  (chan))

(defn start-update-looper []
  (go-loop []
           (<! (timeout 100))
           (>! event-channel {:event :update } )
           (recur)
           ))

(defmulti handle-event (fn [e] (:event e)))
(enable-console-print!)
(defmethod handle-event :update [{:keys [world ] :as state}]
  (let [new-world (step-world world rules/rules)]
      (assoc state :world new-world))
  )

(defn start-handler-loop []
  (go-loop [ev (<! event-channel)]
           (handle-event ev state)
           (recur (<! event-channel))
           ))

(start-update-looper)
(start-handler-loop)
(canvas/add-entity monet-canvas :backgroundColor
                   (canvas/entity {:x 0
                                   :y 9
                                   :w 599
                                   :h 488}
                                   nil
                                   (fn [ctx val]
                                     (-> ctx
                                         (canvas/fill-style "#191d21")
                                         (canvas/fill-rect val)))
                                   ))

