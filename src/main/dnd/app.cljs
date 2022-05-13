(ns dnd.app
   (:require [reagent.core :as r]
             [reagent.dom :as rdom]
             [dnd.views-new :as views]))

(defn ^:dev/after-load start
  []
  (rdom/render [views/app]
                      (.getElementById js/document "app")))

(defn ^:export init!
  []
  (tap> "CLJS DND-kit Initialized!")
  (start))



; memo
; https://gist.github.com/kwrooijen/f9d196afce631ae28261530bc9a0a860
