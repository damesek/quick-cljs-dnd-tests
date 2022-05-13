(ns dnd.views-new
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require [reagent.core :as r :refer [atom]]
            [react :as react]
            [dnd.dnd :as dnd]
            ["react-dnd" :as react-dnd :refer [DndProvider useDrag useDrop useDragLayer]]
            ["react-dnd-html5-backend" :as react-html5-backend]
            ["react-dnd-touch-backend" :as react-dnd-touch-backend]
            [cljs.core.async :refer (<!)]
            [goog.events :as events])
  (:import [goog.events EventType]))


(enable-console-print!)

(def dragged? (r/atom false))

;; ************** Borkdude DnD simple version, maybe the best approach  ********************

;; Constants and references

(def black-hole-pos {:x 400 :y 400})

(def draggable (atom {:x 200 :y 300 :alive? true}))


;; Utility functions

(defn close? [x y]
      (and (< (Math/abs (- x (:x black-hole-pos))) 50)
           (< (Math/abs (- y (:y black-hole-pos))) 50)))


(defn get-client-rect [evt]
      (let [r (.getBoundingClientRect (.-target evt))]
           {:left (.-left r), :top (.-top r)}))


;; Event handlers

(defn mouse-move-handler [offset]
      (fn [evt]
          (let [x (- (.-clientX evt) (:x offset))
                y (- (.-clientY evt) (:y offset))]
               (if (close? x y)
                 (reset! draggable {:alive? false})
                 (reset! draggable {:x      x
                                    :y      y
                                    :alive? true})))))


(defn mouse-up-handler [on-move]
      (fn me [evt]
          (events/unlisten js/window EventType.MOUSEMOVE
                           on-move)))


(defn mouse-down-handler [e]
      (let [{:keys [left top]} (get-client-rect e)
            offset {:x (- (.-clientX e) left)
                    :y (- (.-clientY e) top)}
            on-move (mouse-move-handler offset)]
           (events/listen js/window EventType.MOUSEMOVE
                          on-move)
           (events/listen js/window EventType.MOUSEUP
                          (mouse-up-handler on-move))))


(defn draggable-button []
      [:div
       [:h1 (pr-str @draggable)]
       [:button.bg-red-100.px-4.py-2.rounded-md.shadow-md
        {:style {:position   "absolute"
                 :left       (str (:x black-hole-pos) "px") ;
                 :top        (str (:y black-hole-pos) "px")
                 :background "color: black;"}}
        "Not here please"]
       (if (:alive? @draggable)
         [:div.py-3.px-5.shadow-lg.rounded-lg.bg-teal-700.text-white
          {:style         {:position "absolute"
                           :left     (str (:x @draggable) "px") ;
                           :top      (str (:y @draggable) "px")}
           :on-mouse-down mouse-down-handler}
          "Im flying around - Drag me!"])])


;; ****************** file drop to input field *************


(defn drag-and-drop []
      (let [content (r/atom false)]
           (r/create-class
             {:component-will-mount   (fn []
                                          (dnd/subscribe! js/document.documentElement ::picture
                                                          {:start (fn [e]
                                                                      (println "started something" e))

                                                           :drop  (fn [e file]
                                                                      (when e
                                                                            (reset! dragged? true)
                                                                            (println "dropped" e file)))

                                                           :end   (fn [_]
                                                                      (let [class-list (-> (js/document.querySelector ".picture")
                                                                                           (.-classList))]
                                                                           (.add class-list "none")
                                                                           (.remove class-list "block")))}))

              :component-will-unmount (fn []
                                          (dnd/unsubscribe! js/document.documentElement ::picture)
                                          (js/console.log "component will unmount"))
              :reagent-render         (fn []
                                          [:div.picture
                                           [:p "hello me"]
                                           [:p "dropped?" (str @dragged?)]])})))




;; ***************** react dnd html5 test *************************
; https://github.com/deckeraa/react-dnd-in-reagent/blob/master/src/cljs/react_dnd_in_reagent/core.cljs

;; -------------------------
;; Page components

(defn draggable-wrapper [item reagent-child-fn]
      [:>
       (fn []
           (let [[dnd-props ref preview-ref] (useDrag (clj->js {:type    :block
                                                                :item    item
                                                                :collect (fn [monitor]
                                                                             (let [is-dragging? (.isDragging ^js monitor)]
                                                                                  {:is-dragging? is-dragging?}))}))]
                (r/as-element
                  (reagent-child-fn ref preview-ref dnd-props))))])

(defn droppable-wrapper [can-drop-fn drop-fn reagent-child-fn]
      [:>
       (fn []
           (let [collect-cache-atm (atom nil)
                 [dnd-props ref] (useDrop (clj->js {:accept  :block
                                                    :drop    drop-fn
                                                    :canDrop can-drop-fn
                                                    :collect (fn [monitor]
                                                                 ;; this debounce function was inspired by https://github.com/react-dnd/react-dnd/issues/421
                                                                 (let [now (.now js/Date)
                                                                       [ms cache] @collect-cache-atm]
                                                                      (if (and cache
                                                                               (< (- now ms) 50))
                                                                        cache
                                                                        (let [is-over? (.isOver ^js monitor)
                                                                              can-drop? (.canDrop ^js monitor)
                                                                              ;; item (.getItem ^js monitor)
                                                                              ret {:is-over?  is-over?
                                                                                   :can-drop? can-drop?
                                                                                   ;;:item item
                                                                                   }]
                                                                             (reset! collect-cache-atm [now ret])
                                                                             ret))))}))]
                (r/as-element (reagent-child-fn ref dnd-props))))])



;; ************* UI ***********

(def dropped (r/atom nil))
(def ->menu (r/atom :wearebork))

(defn menu-selector [menu-elem]
      {:on-click #(reset! ->menu menu-elem)
       :class    (if (= @->menu menu-elem) "bg-gray-900.text-white")})

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
            [:a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium
             (menu-selector :react-dnd) "React-DND Test"]
            [:a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium
             (menu-selector :dnd-kit) "@DnD-Kit"]
            [:a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium
             (menu-selector :wearebork) "WeAreBork"]]]]]]])


(defn header []
      [:header.bg-white.shadow
       [:div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8
        [:h1.text-3xl.font-bold.text-gray-900 (case @->menu
                                                    :react-dnd "React-DnD Playground"
                                                    :dnd-kit "DnD-Kit Playground"
                                                    :wearebork "Bork Assimilate You!"
                                                    "What?")]]])


(defn draggable-main []
      (let [canDrop? (fn [] true)
            dropEvent (fn [] (println "drop"))]
           [:main
            [:div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
             [:div.px-4.py-6.sm:px-0
              [:div.border-2.border-dashed.border-gray-200.rounded-lg.h-96
               [:> DndProvider {:backend react-html5-backend/HTML5Backend}
                [:div.flex.grid.gap-4.grid-cols-8.p-3
                 [:div.col-span-5.bg-teal-50
                  [droppable-wrapper canDrop? dropEvent
                   (fn [ref dnd-props]
                       [:div.h-40.w-full.bg-teal-50.rounded-lg.shadow-md.content-center.flex.justify-center
                        {:ref ref}
                        [:p.text-gray-200.self-center.text-4xl.font-semibold "drop here"]])]]
                 [:div.col-span-3.border-2.border-dashed.border-gray-100
                  [draggable-wrapper {}
                   (fn [ref preview-ref dnd-props]
                       [:div.flex.py-3.px-5.m-2.w-48.rounded-md.shadow-md.bg-teal-700.text-white.justify-center.m-3
                        {:ref ref :style {:padding "4px"}} "Try me out Button!"]
                       )]]]]]]]]))

(defn bork-assimilated []
      [:main
       [:div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
        [:div.px-4.py-6.sm:px-0
         [:p "WE ARE BORK!"]
         [draggable-button]
         ]]])

(defn dnd-kit []
      [:main
       [:div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
        [:div.px-4.py-6.sm:px-0
         [:p "I don't have clue what I do :)"]
         ;[draggable-button]
         ]]])

(defn quick-dnd-test []
      [:div.min-h-full
       [menu]
       [header]
       (case @->menu
             :react-dnd [draggable-main]
             :dnd-kit [dnd-kit]
             :wearebork [bork-assimilated]
             [draggable-main])])


(defn app []
      [quick-dnd-test])
