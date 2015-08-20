(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [automata.test-runner]))
(figwheel.client/start {:build-id "test", :websocket-url "ws://localhost:3449/figwheel-ws"})

