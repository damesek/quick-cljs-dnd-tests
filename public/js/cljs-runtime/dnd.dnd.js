goog.provide('dnd.dnd');
goog.scope(function(){
  dnd.dnd.goog$module$goog$object = goog.module.get('goog.object');
});
dnd.dnd.kill_timer_BANG_ = (function dnd$dnd$kill_timer_BANG_(_STAR_timer){
var temp__5757__auto__ = cljs.core.deref(_STAR_timer);
if((temp__5757__auto__ == null)){
return null;
} else {
var t = temp__5757__auto__;
clearTimeout(t);

return cljs.core.reset_BANG_(_STAR_timer,null);
}
});
dnd.dnd.dom_key = (function dnd$dnd$dom_key(key){
return ["cljs-drag-n-drop.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
dnd.dnd.noop = (function dnd$dnd$noop(var_args){
var G__15247 = arguments.length;
switch (G__15247) {
case 1:
return dnd.dnd.noop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dnd.dnd.noop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dnd.dnd.noop.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(dnd.dnd.noop.cljs$core$IFn$_invoke$arity$2 = (function (_,___$1){
return null;
}));

(dnd.dnd.noop.cljs$lang$maxFixedArity = 2);

dnd.dnd.subscribe_BANG_ = (function dnd$dnd$subscribe_BANG_(el,key,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(500),new cljs.core.Keyword(null,"start","start",-355208981),dnd.dnd.noop,new cljs.core.Keyword(null,"enter","enter",1792452624),dnd.dnd.noop,new cljs.core.Keyword(null,"drop","drop",364481611),dnd.dnd.noop,new cljs.core.Keyword(null,"leave","leave",1022579443),dnd.dnd.noop,new cljs.core.Keyword(null,"end","end",-268185958),dnd.dnd.noop], null),opts], 0));
var _STAR_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_ignore_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_enters = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var dragstart = (function (_){
return cljs.core.reset_BANG_(_STAR_ignore_QMARK_,true);
});
var dragend = (function (_){
return cljs.core.reset_BANG_(_STAR_ignore_QMARK_,false);
});
var end_BANG_ = (function (e){
dnd.dnd.kill_timer_BANG_(_STAR_timer);

if((cljs.core.deref(_STAR_enters) > (0))){
cljs.core.reset_BANG_(_STAR_enters,(0));

var fexpr__15249_15258 = new cljs.core.Keyword(null,"leave","leave",1022579443).cljs$core$IFn$_invoke$arity$1(opts__$1);
(fexpr__15249_15258.cljs$core$IFn$_invoke$arity$1 ? fexpr__15249_15258.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15249_15258.call(null,e));
} else {
}

var fexpr__15250 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(opts__$1);
return (fexpr__15250.cljs$core$IFn$_invoke$arity$1 ? fexpr__15250.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15250.call(null,e));
});
var dragover = (function (e){
if(cljs.core.truth_(cljs.core.deref(_STAR_ignore_QMARK_))){
return null;
} else {
e.preventDefault();

if(((((0) === cljs.core.deref(_STAR_enters))) && ((cljs.core.deref(_STAR_timer) == null)))){
setTimeout((function (){
var fexpr__15251 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(opts__$1);
return (fexpr__15251.cljs$core$IFn$_invoke$arity$1 ? fexpr__15251.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15251.call(null,e));
}),(0));
} else {
}

dnd.dnd.kill_timer_BANG_(_STAR_timer);

return cljs.core.reset_BANG_(_STAR_timer,setTimeout((function (){
cljs.core.reset_BANG_(_STAR_timer,null);

return end_BANG_(e);
}),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(opts__$1)));
}
});
var drop = (function (e){
if(cljs.core.truth_(cljs.core.deref(_STAR_ignore_QMARK_))){
return null;
} else {
e.preventDefault();

var files_15259 = dnd.dnd.goog$module$goog$object.get(dnd.dnd.goog$module$goog$object.get(e,"dataTransfer"),"files");
var fexpr__15252_15260 = new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(opts__$1);
(fexpr__15252_15260.cljs$core$IFn$_invoke$arity$2 ? fexpr__15252_15260.cljs$core$IFn$_invoke$arity$2(e,files_15259) : fexpr__15252_15260.call(null,e,files_15259));

return end_BANG_(e);
}
});
var dragenter = (function (e){
if((cljs.core.deref(_STAR_timer) == null)){
setTimeout((function (){
var fexpr__15253 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(opts__$1);
return (fexpr__15253.cljs$core$IFn$_invoke$arity$1 ? fexpr__15253.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15253.call(null,e));
}),(0));
} else {
}

if(((0) === cljs.core.deref(_STAR_enters))){
var fexpr__15254_15261 = new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(opts__$1);
(fexpr__15254_15261.cljs$core$IFn$_invoke$arity$1 ? fexpr__15254_15261.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15254_15261.call(null,e));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_enters,cljs.core.inc);
});
var dragleave = (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_enters,(function (p1__15248_SHARP_){
var x__4336__auto__ = (0);
var y__4337__auto__ = (p1__15248_SHARP_ - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}));

if(((0) === cljs.core.deref(_STAR_enters))){
var fexpr__15255 = new cljs.core.Keyword(null,"leave","leave",1022579443).cljs$core$IFn$_invoke$arity$1(opts__$1);
return (fexpr__15255.cljs$core$IFn$_invoke$arity$1 ? fexpr__15255.cljs$core$IFn$_invoke$arity$1(e) : fexpr__15255.call(null,e));
} else {
return null;
}
});
document.documentElement.addEventListener("dragstart",dragstart);

document.documentElement.addEventListener("drag",dragstart);

document.documentElement.addEventListener("dragend",dragend);

document.documentElement.addEventListener("dragover",dragover);

el.addEventListener("drop",drop);

el.addEventListener("dragenter",dragenter);

el.addEventListener("dragleave",dragleave);

return dnd.dnd.goog$module$goog$object.set(el,dnd.dnd.dom_key(key),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dragover","dragover",-1169536926),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dragenter","dragenter",-237546900),new cljs.core.Keyword(null,"enters","enters",-845092721),new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),new cljs.core.Keyword(null,"dragend","dragend",1096302264),new cljs.core.Keyword(null,"dragstart","dragstart",955864218),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"dragleave","dragleave",-624601572)],[dragover,_STAR_timer,drop,dragenter,_STAR_enters,_STAR_ignore_QMARK_,dragend,dragstart,end_BANG_,dragleave]));
});
dnd.dnd.unsubscribe_BANG_ = (function dnd$dnd$unsubscribe_BANG_(el,key){
var s = dnd.dnd.goog$module$goog$object.get(el,dnd.dnd.dom_key(key));
dnd.dnd.goog$module$goog$object.remove(el,dnd.dnd.dom_key(key));

if((!((cljs.core.deref(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(s)) == null)))){
var fexpr__15256_15262 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(s);
(fexpr__15256_15262.cljs$core$IFn$_invoke$arity$1 ? fexpr__15256_15262.cljs$core$IFn$_invoke$arity$1(null) : fexpr__15256_15262.call(null,null));
} else {
}

document.documentElement.removeEventListener("dragstart",new cljs.core.Keyword(null,"dragstart","dragstart",955864218).cljs$core$IFn$_invoke$arity$1(s));

document.documentElement.removeEventListener("drag",new cljs.core.Keyword(null,"dragstart","dragstart",955864218).cljs$core$IFn$_invoke$arity$1(s));

document.documentElement.removeEventListener("dragend",new cljs.core.Keyword(null,"dragend","dragend",1096302264).cljs$core$IFn$_invoke$arity$1(s));

document.documentElement.removeEventListener("dragover",new cljs.core.Keyword(null,"dragover","dragover",-1169536926).cljs$core$IFn$_invoke$arity$1(s));

el.removeEventListener("drop",new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(s));

el.removeEventListener("dragenter",new cljs.core.Keyword(null,"dragenter","dragenter",-237546900).cljs$core$IFn$_invoke$arity$1(s));

return el.removeEventListener("dragleave",new cljs.core.Keyword(null,"dragleave","dragleave",-624601572).cljs$core$IFn$_invoke$arity$1(s));
});

//# sourceMappingURL=dnd.dnd.js.map
