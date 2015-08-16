(defproject automata "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [quil "2.2.6"]
                 [figwheel "0.3.6"]
                 [figwheel-sidecar "0.3.6"]
                 [org.clojure/clojurescript "1.7.48"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{:id "dev"
             :figwheel true
             :source-paths ["src"]
             :compiler
             {:output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/out"
              :asset-path "js/out"
              :main "automata.core"
              :optimizations :none
              :pretty-print true}}]})
