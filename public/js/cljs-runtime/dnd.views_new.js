goog.provide('dnd.views_new');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dnd$dist$index=shadow.js.require("module$node_modules$react_dnd$dist$index", {});
var module$node_modules$react_dnd_html5_backend$dist$index=shadow.js.require("module$node_modules$react_dnd_html5_backend$dist$index", {});
var module$node_modules$react_dnd_touch_backend$dist$index=shadow.js.require("module$node_modules$react_dnd_touch_backend$dist$index", {});
cljs.core.enable_console_print_BANG_();
dnd.views_new.dragged_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
dnd.views_new.black_hole_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null);
dnd.views_new.draggable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"alive?","alive?",-372447621),true], null));
dnd.views_new.close_QMARK_ = (function dnd$views_new$close_QMARK_(x,y){
return (((Math.abs((x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dnd.views_new.black_hole_pos))) < (50))) && ((Math.abs((y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dnd.views_new.black_hole_pos))) < (50))));
});
dnd.views_new.get_client_rect = (function dnd$views_new$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
dnd.views_new.mouse_move_handler = (function dnd$views_new$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
if(dnd.views_new.close_QMARK_(x,y)){
return cljs.core.reset_BANG_(dnd.views_new.draggable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alive?","alive?",-372447621),false], null));
} else {
return cljs.core.reset_BANG_(dnd.views_new.draggable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"alive?","alive?",-372447621),true], null));
}
});
});
dnd.views_new.mouse_up_handler = (function dnd$views_new$mouse_up_handler(on_move){
return (function dnd$views_new$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
dnd.views_new.mouse_down_handler = (function dnd$views_new$mouse_down_handler(e){
var map__15277 = dnd.views_new.get_client_rect(e);
var map__15277__$1 = cljs.core.__destructure_map(map__15277);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15277__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15277__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = dnd.views_new.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,dnd.views_new.mouse_up_handler(on_move));
});
dnd.views_new.draggable_button = (function dnd$views_new$draggable_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(dnd.views_new.draggable)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-red-100.px-4.py-2.rounded-md.shadow-md","button.bg-red-100.px-4.py-2.rounded-md.shadow-md",-294994711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dnd.views_new.black_hole_pos)),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dnd.views_new.black_hole_pos)),"px"].join(''),new cljs.core.Keyword(null,"background","background",-863952629),"color: black;"], null)], null),"Not here please"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"alive?","alive?",-372447621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dnd.views_new.draggable)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-3.px-5.shadow-lg.rounded-lg.bg-teal-700.text-white","div.py-3.px-5.shadow-lg.rounded-lg.bg-teal-700.text-white",1294544344),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dnd.views_new.draggable))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dnd.views_new.draggable))),"px"].join('')], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),dnd.views_new.mouse_down_handler], null),"Im flying around - Drag me!"], null):null)], null);
});
dnd.views_new.drag_and_drop = (function dnd$views_new$drag_and_drop(){
var content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(function (){
return dnd.dnd.subscribe_BANG_(document.documentElement,new cljs.core.Keyword("dnd.views-new","picture","dnd.views-new/picture",-1680773145),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["started something",e], 0));
}),new cljs.core.Keyword(null,"drop","drop",364481611),(function (e,file){
if(cljs.core.truth_(e)){
cljs.core.reset_BANG_(dnd.views_new.dragged_QMARK_,true);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dropped",e,file], 0));
} else {
return null;
}
}),new cljs.core.Keyword(null,"end","end",-268185958),(function (_){
var class_list = document.querySelector(".picture").classList;
class_list.add("none");

return class_list.remove("block");
})], null));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
dnd.dnd.unsubscribe_BANG_(document.documentElement,new cljs.core.Keyword("dnd.views-new","picture","dnd.views-new/picture",-1680773145));

return console.log("component will unmount");
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.picture","div.picture",721750731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello me"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dropped?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dnd.views_new.dragged_QMARK_))], null)], null);
})], null));
});
dnd.views_new.draggable_wrapper = (function dnd$views_new$draggable_wrapper(item,reagent_child_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){
var vec__15278 = module$node_modules$react_dnd$dist$index.useDrag(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"collect","collect",-284321549),(function (monitor){
var is_dragging_QMARK_ = monitor.isDragging();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-dragging?","is-dragging?",140856336),is_dragging_QMARK_], null);
})], null)));
var dnd_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(1),null);
var preview_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(2),null);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((reagent_child_fn.cljs$core$IFn$_invoke$arity$3 ? reagent_child_fn.cljs$core$IFn$_invoke$arity$3(ref,preview_ref,dnd_props) : reagent_child_fn.call(null,ref,preview_ref,dnd_props)));
})], null);
});
dnd.views_new.droppable_wrapper = (function dnd$views_new$droppable_wrapper(can_drop_fn,drop_fn,reagent_child_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){
var collect_cache_atm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var vec__15281 = module$node_modules$react_dnd$dist$index.useDrop(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"drop","drop",364481611),drop_fn,new cljs.core.Keyword(null,"canDrop","canDrop",420521645),can_drop_fn,new cljs.core.Keyword(null,"collect","collect",-284321549),(function (monitor){
var now = Date.now();
var vec__15284 = cljs.core.deref(collect_cache_atm);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cache;
if(cljs.core.truth_(and__4251__auto__)){
return ((now - ms) < (50));
} else {
return and__4251__auto__;
}
})())){
return cache;
} else {
var is_over_QMARK_ = monitor.isOver();
var can_drop_QMARK_ = monitor.canDrop();
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-over?","is-over?",-228432368),is_over_QMARK_,new cljs.core.Keyword(null,"can-drop?","can-drop?",-1770906846),can_drop_QMARK_], null);
cljs.core.reset_BANG_(collect_cache_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [now,ret], null));

return ret;
}
})], null)));
var dnd_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(1),null);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((reagent_child_fn.cljs$core$IFn$_invoke$arity$2 ? reagent_child_fn.cljs$core$IFn$_invoke$arity$2(ref,dnd_props) : reagent_child_fn.call(null,ref,dnd_props)));
})], null);
});
dnd.views_new.dropped = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dnd.views_new.__GT_menu = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wearebork","wearebork",1584314196));
dnd.views_new.menu_selector = (function dnd$views_new$menu_selector(menu_elem){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(dnd.views_new.__GT_menu,menu_elem);
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dnd.views_new.__GT_menu),menu_elem))?"bg-gray-900.text-white":null)], null);
});
dnd.views_new.menu = (function dnd$views_new$menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.bg-gray-800","nav.bg-gray-800",1083995317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8",-1182075349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.h-16","div.flex.items-center.justify-between.h-16",1464393540),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-shrink-0","div.flex-shrink-0",114780493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.h-8.w-8","img.h-8.w-8",-1620774165),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/compass-logo-gray-50.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Measure and build"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:block","div.hidden.md:block",-1468927411),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-10.flex.items-baseline.space-x-4","div.ml-10.flex.items-baseline.space-x-4",1803499297),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium","a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium",862994953),dnd.views_new.menu_selector(new cljs.core.Keyword(null,"react-dnd","react-dnd",-948022292)),"React-DND Test"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium","a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium",1287116673),dnd.views_new.menu_selector(new cljs.core.Keyword(null,"dnd-kit","dnd-kit",244320768)),"@DnD-Kit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium","a.text-gray-300.hover:bg-gray-700.hover:text-white.px-3.py-2.rounded-md.text-sm.font-medium",1287116673),dnd.views_new.menu_selector(new cljs.core.Keyword(null,"wearebork","wearebork",1584314196)),"WeAreBork"], null)], null)], null)], null)], null)], null)], null);
});
dnd.views_new.header = (function dnd$views_new$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-white.shadow","header.bg-white.shadow",-2078482425),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8",-657889243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-bold.text-gray-900","h1.text-3xl.font-bold.text-gray-900",443477210),(function (){var G__15287 = cljs.core.deref(dnd.views_new.__GT_menu);
var G__15287__$1 = (((G__15287 instanceof cljs.core.Keyword))?G__15287.fqn:null);
switch (G__15287__$1) {
case "react-dnd":
return "React-DnD Playground";

break;
case "dnd-kit":
return "DnD-Kit Playground";

break;
case "wearebork":
return "Bork Assimilate You!";

break;
default:
return "What?";

}
})()], null)], null)], null);
});
dnd.views_new.draggable_main = (function dnd$views_new$draggable_main(){
var canDrop_QMARK_ = (function (){
return true;
});
var dropEvent = (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["drop"], 0));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8",22259493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-6.sm:px-0","div.px-4.py-6.sm:px-0",-675227481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-2.border-dashed.border-gray-200.rounded-lg.h-96","div.border-2.border-dashed.border-gray-200.rounded-lg.h-96",1002620595),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_dnd$dist$index.DndProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backend","backend",-847489124),module$node_modules$react_dnd_html5_backend$dist$index.HTML5Backend], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.grid.gap-4.grid-cols-8.p-3","div.flex.grid.gap-4.grid-cols-8.p-3",-71511892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-5.bg-teal-50","div.col-span-5.bg-teal-50",610946521),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.droppable_wrapper,canDrop_QMARK_,dropEvent,(function (ref,dnd_props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-40.w-full.bg-teal-50.rounded-lg.shadow-md.content-center.flex.justify-center","div.h-40.w-full.bg-teal-50.rounded-lg.shadow-md.content-center.flex.justify-center",1368893396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-200.self-center.text-4xl.font-semibold","p.text-gray-200.self-center.text-4xl.font-semibold",1307023978),"drop here"], null)], null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.border-2.border-dashed.border-gray-100","div.col-span-3.border-2.border-dashed.border-gray-100",-94300212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.draggable_wrapper,cljs.core.PersistentArrayMap.EMPTY,(function (ref,preview_ref,dnd_props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.py-3.px-5.m-2.w-48.rounded-md.shadow-md.bg-teal-700.text-white.justify-center.m-3","div.flex.py-3.px-5.m-2.w-48.rounded-md.shadow-md.bg-teal-700.text-white.justify-center.m-3",-1924307550),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null)], null),"Try me out Button!"], null);
})], null)], null)], null)], null)], null)], null)], null)], null);
});
dnd.views_new.bork_assimilated = (function dnd$views_new$bork_assimilated(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8",22259493),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-6.sm:px-0","div.px-4.py-6.sm:px-0",-675227481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"WE ARE BORK!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.draggable_button], null)], null)], null)], null);
});
dnd.views_new.dnd_kit = (function dnd$views_new$dnd_kit(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8",22259493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-6.sm:px-0","div.px-4.py-6.sm:px-0",-675227481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I don't have clue what I do :)"], null)], null)], null)], null);
});
dnd.views_new.quick_dnd_test = (function dnd$views_new$quick_dnd_test(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-full","div.min-h-full",153894878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.header], null),(function (){var G__15288 = cljs.core.deref(dnd.views_new.__GT_menu);
var G__15288__$1 = (((G__15288 instanceof cljs.core.Keyword))?G__15288.fqn:null);
switch (G__15288__$1) {
case "react-dnd":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.draggable_main], null);

break;
case "dnd-kit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.dnd_kit], null);

break;
case "wearebork":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.bork_assimilated], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.draggable_main], null);

}
})()], null);
});
dnd.views_new.app = (function dnd$views_new$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.quick_dnd_test], null);
});

//# sourceMappingURL=dnd.views_new.js.map
