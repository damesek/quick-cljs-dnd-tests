(ns dnd.views
  (:require [dnd.state :refer [app-state]]
            [dnd.events :refer [increment decrement]]))


(defn menu
  []
   [:nav.bg-gray-800
    [:div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8
     [:div.flex.items-center.justify-between.h-16
      [:div.flex.items-center
       [:div.flex-shrink-0
        [:img.h-8.w-8 {:src "img/compass-logo-gray-50.png" :alt "Measure and build"}]]
       [:div.hidden.md:block
        [:div.ml-10.flex.items-baseline.space-x-4
         [:a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium {:href "#" :aria-current "page"} "DND-kit Test"]
         #_[:a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium {:href "#"} "pff"]
         #_[:a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium {:href "#"} "pff 2"]]]]]]])


(defn header []
   [:header.bg-white.shadow
    [:div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8
     [:h1.text-3xl.font-bold.text-gray-900 "DND-kit Playground"]]])


(defn quick-dnd-test []
  [:div.min-h-full
   [menu]
   [header]

   [:main
    [:div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
     [:div.px-4.py-6.sm:px-0
      [:div.border-2.border-dashed.border-gray-200.rounded-lg.h-96
       [:div.flex.grid.gap-4.grid-cols-8.p-3
        [:div.col-span-5.bg-teal-50
         [:p] "dropable area"]
        [:div.col-span-3.bg-gray-50
         [:p "dragable"]]]]]]]])


(defn app []
  [quick-dnd-test])
