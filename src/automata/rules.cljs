(ns automata.rules)
;;hood :: List List cell 3 3 [[0 0 0] [0 0 0] [0 0 0]]]
;;hood -> cell
(defn subject [hood]
  (nth (nth hood 1) 1))

(defn hood-pop [hood]
  (- (reduce + (flatten hood)) (subject hood)))

(defn rule-under-pop [hood]
  (let [pop (hood-pop hood)]
    (cond  (= 1 pop) false
           (= 0 pop) false
           :else true)))

(defn rule-next-gen [hood]
  (let [pop (hood-pop hood)
        sub (subject hood)]
    (cond (and sub (= 2 pop)) true
          (and sub (= 3 pop)) true
          :else false)))

(defn rule-over-pop [hood]
  (let [pop (hood-pop hood)
        sub (subject hood)]
    (cond (and sub (> pop 3)) false
          :else true)))

(defn rule-repro [hood]
  (let [pop (hood-pop hood)
        sub (subject hood)]
    (cond (and (not sub) (= pop 3)) true
          sub true
          :else false)))

(def rules
  [rule-under-pop
   rule-next-gen
   rule-over-pop
   rule-repro])