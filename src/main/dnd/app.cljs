(ns dnd.app
   (:require [reagent.core :as r]
             [dnd.views :as views]))

(defn ^:dev/after-load start
  []
  (r/render-component [views/app]
                      (.getElementById js/document "app")))

(defn ^:export init!
  []
  (js/console.log "CLJS DND-kit Initialized!")
  (start))
