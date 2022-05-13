(ns dnd.views
  (:require [reagent.core :as r]
            [react :as react]

            ["@dnd-kit/core" :as dnd-kit :refer [DndContext useDraggable useDroppable]]
            ["@dnd-kit/utilities" :refer [CSS]]))



;; ******** DnD Kit ******************

(def dragged? (r/atom false))


;; need to find out

(defn quick-dnd-test []
  [:div.min-h-full
   [menu]
   [header]
   
      ;[DnD-Test]

   [:main
    [:div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
     [:div.px-4.py-6.sm:px-0
      [:div.border-2.border-dashed.border-gray-200.rounded-lg.h-96
       [:div.flex.grid.gap-4.grid-cols-8.p-3
        [:div.col-span-8.bg-gray-50


         ]
        [:div.col-span-5.bg-teal-50
         {:on-drop #(println "dropped into dropable area")}
         [:p "dropable area"] ]
        [:div.col-span-3.bg-gray-50
         [:p "dragable"]]]]]]]])


(defn app []
  [quick-dnd-test])

