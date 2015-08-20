(defproject automata "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [quil "2.2.6"]
                 [rm-hull/monet "0.2.1"]
                 [figwheel "0.3.6"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [figwheel-sidecar "0.3.6"]
                 [org.clojure/clojurescript "1.7.48"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]]

  :hooks [leiningen.cljsbuild]

  :aliases {"test" ["cljsbuid" "test"]}

  :cljsbuild

  {:builds [
              {:id "dev"
             :figwheel true
             :source-paths ["src"]
             :compiler
             {:output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/out"
              :asset-path "js/out"
              :main "automata.core"
              :optimizations :none
              :source-map true
              :cache-analysis true
              :pretty-print true}}
            {:id "test"
             :source-paths ["test"]
             :compiler
             {:output-to "resources/public/js/test/main.js"
              :output-dir "resources/public/js/test/out"
              :asset-path "js/test/out"
              :main "automata.test-runner"
              :cache-analysis true
              :optimizations :none
              :pretty-print true}}

            {:id "min"
             :source-paths ["src"]
             :compiler
             {:output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/out"
              :main "automata.core"
              :optimizations :advanced}}

          ]})
