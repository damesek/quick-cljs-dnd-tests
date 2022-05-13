goog.provide('dnd.views');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$dnd_kit$core$dist$index=shadow.js.require("module$node_modules$$dnd_kit$core$dist$index", {});
var module$node_modules$$dnd_kit$utilities$dist$index=shadow.js.require("module$node_modules$$dnd_kit$utilities$dist$index", {});
dnd.views.menu = (function dnd$views$menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.bg-gray-800","nav.bg-gray-800",1083995317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8",-1182075349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.h-16","div.flex.items-center.justify-between.h-16",1464393540),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-shrink-0","div.flex-shrink-0",114780493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.h-8.w-8","img.h-8.w-8",-1620774165),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/compass-logo-gray-50.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Measure and build"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:block","div.hidden.md:block",-1468927411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-10.flex.items-baseline.space-x-4","div.ml-10.flex.items-baseline.space-x-4",1803499297),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium","a.bg-gray-900.text-white.px-3.py-2.rounded-md.text-sm.font-medium",862994953),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),"page"], null),"DND-kit Test"], null)], null)], null)], null)], null)], null)], null);
});
dnd.views.header = (function dnd$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-white.shadow","header.bg-white.shadow",-2078482425),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.px-4.sm:px-6.lg:px-8",-657889243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-bold.text-gray-900","h1.text-3xl.font-bold.text-gray-900",443477210),"DND-kit Playground"], null)], null)], null);
});
dnd.views.dragged_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
dnd.views.drag_and_drop = (function dnd$views$drag_and_drop(){
var file_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(function (){
return dnd.dnd.subscribe_BANG_(document.documentElement,new cljs.core.Keyword("dnd.views","picture","dnd.views/picture",1013527350),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["started something",e], 0));
}),new cljs.core.Keyword(null,"drop","drop",364481611),(function (e,file){
if(cljs.core.truth_(e)){
cljs.core.reset_BANG_(dnd.views.dragged_QMARK_,true);

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
dnd.dnd.unsubscribe_BANG_(document.documentElement,new cljs.core.Keyword("dnd.views","picture","dnd.views/picture",1013527350));

return console.log("component will unmount");
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.picture","div.picture",721750731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello me"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dropped?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dnd.views.dragged_QMARK_))], null)], null);
})], null));
});
dnd.views.allow_drop = (function dnd$views$allow_drop(e){
return e.preventDefault();
});
dnd.views.drag_me_now = (function dnd$views$drag_me_now(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-10.w-20.rounded-md.shadow-md.bg-teal-700.text-white","div.h-10.w-20.rounded-md.shadow-md.bg-teal-700.text-white",-1503125498),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),dnd.views.allow_drop,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),dnd.views.allow_drop,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__15255_SHARP_){
return p1__15255_SHARP_.dataTransfer.setData("text/plain","IM ROBOT");
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["drag ended on dragger"], 0));
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["juhuuu dropped somewhere in the universe"], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"drag me now"], null)], null);
});
dnd.views.quick_dnd_test = (function dnd$views$quick_dnd_test(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-full","div.min-h-full",153894878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8","div.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8",22259493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-6.sm:px-0","div.px-4.py-6.sm:px-0",-675227481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-2.border-dashed.border-gray-200.rounded-lg.h-96","div.border-2.border-dashed.border-gray-200.rounded-lg.h-96",1002620595),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.grid.gap-4.grid-cols-8.p-3","div.flex.grid.gap-4.grid-cols-8.p-3",-71511892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-8.bg-gray-50","div.col-span-8.bg-gray-50",2051321781),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.drag_me_now], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.drag_and_drop], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-5.bg-teal-50","div.col-span-5.bg-teal-50",610946521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dropped into dropable area"], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dropable area"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.bg-gray-50","div.col-span-3.bg-gray-50",-444668634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dragable"], null)], null)], null)], null)], null)], null)], null)], null);
});
dnd.views.app = (function dnd$views$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.quick_dnd_test], null);
});

//# sourceMappingURL=dnd.views.js.map
