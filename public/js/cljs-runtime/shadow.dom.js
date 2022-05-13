goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18742 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18742(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18745 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18745(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17149 = coll;
var G__17150 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17149,G__17150) : shadow.dom.lazy_native_coll_seq.call(null,G__17149,G__17150));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17178 = arguments.length;
switch (G__17178) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17189 = arguments.length;
switch (G__17189) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17198 = arguments.length;
switch (G__17198) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17213 = arguments.length;
switch (G__17213) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17233 = arguments.length;
switch (G__17233) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17254 = arguments.length;
switch (G__17254) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17271){if((e17271 instanceof Object)){
var e = e17271;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17271;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17299 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17300 = null;
var count__17301 = (0);
var i__17302 = (0);
while(true){
if((i__17302 < count__17301)){
var el = chunk__17300.cljs$core$IIndexed$_nth$arity$2(null,i__17302);
var handler_18786__$1 = ((function (seq__17299,chunk__17300,count__17301,i__17302,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17299,chunk__17300,count__17301,i__17302,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18786__$1);


var G__18790 = seq__17299;
var G__18791 = chunk__17300;
var G__18792 = count__17301;
var G__18793 = (i__17302 + (1));
seq__17299 = G__18790;
chunk__17300 = G__18791;
count__17301 = G__18792;
i__17302 = G__18793;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17299);
if(temp__5753__auto__){
var seq__17299__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17299__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17299__$1);
var G__18795 = cljs.core.chunk_rest(seq__17299__$1);
var G__18796 = c__4679__auto__;
var G__18797 = cljs.core.count(c__4679__auto__);
var G__18798 = (0);
seq__17299 = G__18795;
chunk__17300 = G__18796;
count__17301 = G__18797;
i__17302 = G__18798;
continue;
} else {
var el = cljs.core.first(seq__17299__$1);
var handler_18799__$1 = ((function (seq__17299,chunk__17300,count__17301,i__17302,el,seq__17299__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17299,chunk__17300,count__17301,i__17302,el,seq__17299__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18799__$1);


var G__18802 = cljs.core.next(seq__17299__$1);
var G__18803 = null;
var G__18804 = (0);
var G__18805 = (0);
seq__17299 = G__18802;
chunk__17300 = G__18803;
count__17301 = G__18804;
i__17302 = G__18805;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17327 = arguments.length;
switch (G__17327) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17348 = cljs.core.seq(events);
var chunk__17349 = null;
var count__17350 = (0);
var i__17351 = (0);
while(true){
if((i__17351 < count__17350)){
var vec__17365 = chunk__17349.cljs$core$IIndexed$_nth$arity$2(null,i__17351);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18820 = seq__17348;
var G__18821 = chunk__17349;
var G__18822 = count__17350;
var G__18823 = (i__17351 + (1));
seq__17348 = G__18820;
chunk__17349 = G__18821;
count__17350 = G__18822;
i__17351 = G__18823;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17348);
if(temp__5753__auto__){
var seq__17348__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17348__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17348__$1);
var G__18824 = cljs.core.chunk_rest(seq__17348__$1);
var G__18825 = c__4679__auto__;
var G__18826 = cljs.core.count(c__4679__auto__);
var G__18827 = (0);
seq__17348 = G__18824;
chunk__17349 = G__18825;
count__17350 = G__18826;
i__17351 = G__18827;
continue;
} else {
var vec__17369 = cljs.core.first(seq__17348__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17369,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18831 = cljs.core.next(seq__17348__$1);
var G__18832 = null;
var G__18833 = (0);
var G__18834 = (0);
seq__17348 = G__18831;
chunk__17349 = G__18832;
count__17350 = G__18833;
i__17351 = G__18834;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17374 = cljs.core.seq(styles);
var chunk__17375 = null;
var count__17376 = (0);
var i__17377 = (0);
while(true){
if((i__17377 < count__17376)){
var vec__17390 = chunk__17375.cljs$core$IIndexed$_nth$arity$2(null,i__17377);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18835 = seq__17374;
var G__18836 = chunk__17375;
var G__18837 = count__17376;
var G__18838 = (i__17377 + (1));
seq__17374 = G__18835;
chunk__17375 = G__18836;
count__17376 = G__18837;
i__17377 = G__18838;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17374);
if(temp__5753__auto__){
var seq__17374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17374__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17374__$1);
var G__18839 = cljs.core.chunk_rest(seq__17374__$1);
var G__18840 = c__4679__auto__;
var G__18841 = cljs.core.count(c__4679__auto__);
var G__18842 = (0);
seq__17374 = G__18839;
chunk__17375 = G__18840;
count__17376 = G__18841;
i__17377 = G__18842;
continue;
} else {
var vec__17402 = cljs.core.first(seq__17374__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18844 = cljs.core.next(seq__17374__$1);
var G__18845 = null;
var G__18846 = (0);
var G__18847 = (0);
seq__17374 = G__18844;
chunk__17375 = G__18845;
count__17376 = G__18846;
i__17377 = G__18847;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17409_18848 = key;
var G__17409_18849__$1 = (((G__17409_18848 instanceof cljs.core.Keyword))?G__17409_18848.fqn:null);
switch (G__17409_18849__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18857 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_18857,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_18857,"aria-");
}
})())){
el.setAttribute(ks_18857,value);
} else {
(el[ks_18857] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17432){
var map__17433 = p__17432;
var map__17433__$1 = cljs.core.__destructure_map(map__17433);
var props = map__17433__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17435 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17440 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17440,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17440;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17444 = arguments.length;
switch (G__17444) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17455){
var vec__17456 = p__17455;
var seq__17457 = cljs.core.seq(vec__17456);
var first__17458 = cljs.core.first(seq__17457);
var seq__17457__$1 = cljs.core.next(seq__17457);
var nn = first__17458;
var first__17458__$1 = cljs.core.first(seq__17457__$1);
var seq__17457__$2 = cljs.core.next(seq__17457__$1);
var np = first__17458__$1;
var nc = seq__17457__$2;
var node = vec__17456;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17461 = nn;
var G__17462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17461,G__17462) : create_fn.call(null,G__17461,G__17462));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17464 = nn;
var G__17465 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17464,G__17465) : create_fn.call(null,G__17464,G__17465));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17469 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469,(1),null);
var seq__17473_18867 = cljs.core.seq(node_children);
var chunk__17474_18868 = null;
var count__17475_18869 = (0);
var i__17476_18870 = (0);
while(true){
if((i__17476_18870 < count__17475_18869)){
var child_struct_18871 = chunk__17474_18868.cljs$core$IIndexed$_nth$arity$2(null,i__17476_18870);
var children_18872 = shadow.dom.dom_node(child_struct_18871);
if(cljs.core.seq_QMARK_(children_18872)){
var seq__17527_18873 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18872));
var chunk__17529_18874 = null;
var count__17530_18875 = (0);
var i__17531_18876 = (0);
while(true){
if((i__17531_18876 < count__17530_18875)){
var child_18877 = chunk__17529_18874.cljs$core$IIndexed$_nth$arity$2(null,i__17531_18876);
if(cljs.core.truth_(child_18877)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18877);


var G__18878 = seq__17527_18873;
var G__18879 = chunk__17529_18874;
var G__18880 = count__17530_18875;
var G__18881 = (i__17531_18876 + (1));
seq__17527_18873 = G__18878;
chunk__17529_18874 = G__18879;
count__17530_18875 = G__18880;
i__17531_18876 = G__18881;
continue;
} else {
var G__18882 = seq__17527_18873;
var G__18883 = chunk__17529_18874;
var G__18884 = count__17530_18875;
var G__18885 = (i__17531_18876 + (1));
seq__17527_18873 = G__18882;
chunk__17529_18874 = G__18883;
count__17530_18875 = G__18884;
i__17531_18876 = G__18885;
continue;
}
} else {
var temp__5753__auto___18887 = cljs.core.seq(seq__17527_18873);
if(temp__5753__auto___18887){
var seq__17527_18888__$1 = temp__5753__auto___18887;
if(cljs.core.chunked_seq_QMARK_(seq__17527_18888__$1)){
var c__4679__auto___18889 = cljs.core.chunk_first(seq__17527_18888__$1);
var G__18891 = cljs.core.chunk_rest(seq__17527_18888__$1);
var G__18892 = c__4679__auto___18889;
var G__18893 = cljs.core.count(c__4679__auto___18889);
var G__18894 = (0);
seq__17527_18873 = G__18891;
chunk__17529_18874 = G__18892;
count__17530_18875 = G__18893;
i__17531_18876 = G__18894;
continue;
} else {
var child_18895 = cljs.core.first(seq__17527_18888__$1);
if(cljs.core.truth_(child_18895)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18895);


var G__18896 = cljs.core.next(seq__17527_18888__$1);
var G__18897 = null;
var G__18898 = (0);
var G__18899 = (0);
seq__17527_18873 = G__18896;
chunk__17529_18874 = G__18897;
count__17530_18875 = G__18898;
i__17531_18876 = G__18899;
continue;
} else {
var G__18900 = cljs.core.next(seq__17527_18888__$1);
var G__18901 = null;
var G__18902 = (0);
var G__18903 = (0);
seq__17527_18873 = G__18900;
chunk__17529_18874 = G__18901;
count__17530_18875 = G__18902;
i__17531_18876 = G__18903;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18872);
}


var G__18906 = seq__17473_18867;
var G__18907 = chunk__17474_18868;
var G__18908 = count__17475_18869;
var G__18909 = (i__17476_18870 + (1));
seq__17473_18867 = G__18906;
chunk__17474_18868 = G__18907;
count__17475_18869 = G__18908;
i__17476_18870 = G__18909;
continue;
} else {
var temp__5753__auto___18910 = cljs.core.seq(seq__17473_18867);
if(temp__5753__auto___18910){
var seq__17473_18911__$1 = temp__5753__auto___18910;
if(cljs.core.chunked_seq_QMARK_(seq__17473_18911__$1)){
var c__4679__auto___18912 = cljs.core.chunk_first(seq__17473_18911__$1);
var G__18913 = cljs.core.chunk_rest(seq__17473_18911__$1);
var G__18914 = c__4679__auto___18912;
var G__18915 = cljs.core.count(c__4679__auto___18912);
var G__18916 = (0);
seq__17473_18867 = G__18913;
chunk__17474_18868 = G__18914;
count__17475_18869 = G__18915;
i__17476_18870 = G__18916;
continue;
} else {
var child_struct_18917 = cljs.core.first(seq__17473_18911__$1);
var children_18918 = shadow.dom.dom_node(child_struct_18917);
if(cljs.core.seq_QMARK_(children_18918)){
var seq__17540_18919 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18918));
var chunk__17542_18920 = null;
var count__17543_18921 = (0);
var i__17544_18922 = (0);
while(true){
if((i__17544_18922 < count__17543_18921)){
var child_18924 = chunk__17542_18920.cljs$core$IIndexed$_nth$arity$2(null,i__17544_18922);
if(cljs.core.truth_(child_18924)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18924);


var G__18926 = seq__17540_18919;
var G__18927 = chunk__17542_18920;
var G__18928 = count__17543_18921;
var G__18929 = (i__17544_18922 + (1));
seq__17540_18919 = G__18926;
chunk__17542_18920 = G__18927;
count__17543_18921 = G__18928;
i__17544_18922 = G__18929;
continue;
} else {
var G__18930 = seq__17540_18919;
var G__18931 = chunk__17542_18920;
var G__18932 = count__17543_18921;
var G__18933 = (i__17544_18922 + (1));
seq__17540_18919 = G__18930;
chunk__17542_18920 = G__18931;
count__17543_18921 = G__18932;
i__17544_18922 = G__18933;
continue;
}
} else {
var temp__5753__auto___18935__$1 = cljs.core.seq(seq__17540_18919);
if(temp__5753__auto___18935__$1){
var seq__17540_18936__$1 = temp__5753__auto___18935__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17540_18936__$1)){
var c__4679__auto___18940 = cljs.core.chunk_first(seq__17540_18936__$1);
var G__18941 = cljs.core.chunk_rest(seq__17540_18936__$1);
var G__18942 = c__4679__auto___18940;
var G__18943 = cljs.core.count(c__4679__auto___18940);
var G__18944 = (0);
seq__17540_18919 = G__18941;
chunk__17542_18920 = G__18942;
count__17543_18921 = G__18943;
i__17544_18922 = G__18944;
continue;
} else {
var child_18945 = cljs.core.first(seq__17540_18936__$1);
if(cljs.core.truth_(child_18945)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18945);


var G__18946 = cljs.core.next(seq__17540_18936__$1);
var G__18947 = null;
var G__18948 = (0);
var G__18949 = (0);
seq__17540_18919 = G__18946;
chunk__17542_18920 = G__18947;
count__17543_18921 = G__18948;
i__17544_18922 = G__18949;
continue;
} else {
var G__18950 = cljs.core.next(seq__17540_18936__$1);
var G__18951 = null;
var G__18952 = (0);
var G__18953 = (0);
seq__17540_18919 = G__18950;
chunk__17542_18920 = G__18951;
count__17543_18921 = G__18952;
i__17544_18922 = G__18953;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18918);
}


var G__18954 = cljs.core.next(seq__17473_18911__$1);
var G__18955 = null;
var G__18956 = (0);
var G__18957 = (0);
seq__17473_18867 = G__18954;
chunk__17474_18868 = G__18955;
count__17475_18869 = G__18956;
i__17476_18870 = G__18957;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17562 = cljs.core.seq(node);
var chunk__17563 = null;
var count__17564 = (0);
var i__17565 = (0);
while(true){
if((i__17565 < count__17564)){
var n = chunk__17563.cljs$core$IIndexed$_nth$arity$2(null,i__17565);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18958 = seq__17562;
var G__18959 = chunk__17563;
var G__18960 = count__17564;
var G__18961 = (i__17565 + (1));
seq__17562 = G__18958;
chunk__17563 = G__18959;
count__17564 = G__18960;
i__17565 = G__18961;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17562);
if(temp__5753__auto__){
var seq__17562__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17562__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17562__$1);
var G__18962 = cljs.core.chunk_rest(seq__17562__$1);
var G__18963 = c__4679__auto__;
var G__18964 = cljs.core.count(c__4679__auto__);
var G__18965 = (0);
seq__17562 = G__18962;
chunk__17563 = G__18963;
count__17564 = G__18964;
i__17565 = G__18965;
continue;
} else {
var n = cljs.core.first(seq__17562__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18966 = cljs.core.next(seq__17562__$1);
var G__18967 = null;
var G__18968 = (0);
var G__18969 = (0);
seq__17562 = G__18966;
chunk__17563 = G__18967;
count__17564 = G__18968;
i__17565 = G__18969;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17586 = arguments.length;
switch (G__17586) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17591 = arguments.length;
switch (G__17591) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17614 = arguments.length;
switch (G__17614) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18980 = arguments.length;
var i__4865__auto___18981 = (0);
while(true){
if((i__4865__auto___18981 < len__4864__auto___18980)){
args__4870__auto__.push((arguments[i__4865__auto___18981]));

var G__18982 = (i__4865__auto___18981 + (1));
i__4865__auto___18981 = G__18982;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17651_18987 = cljs.core.seq(nodes);
var chunk__17652_18988 = null;
var count__17653_18989 = (0);
var i__17654_18990 = (0);
while(true){
if((i__17654_18990 < count__17653_18989)){
var node_18991 = chunk__17652_18988.cljs$core$IIndexed$_nth$arity$2(null,i__17654_18990);
fragment.appendChild(shadow.dom._to_dom(node_18991));


var G__18992 = seq__17651_18987;
var G__18993 = chunk__17652_18988;
var G__18994 = count__17653_18989;
var G__18995 = (i__17654_18990 + (1));
seq__17651_18987 = G__18992;
chunk__17652_18988 = G__18993;
count__17653_18989 = G__18994;
i__17654_18990 = G__18995;
continue;
} else {
var temp__5753__auto___18996 = cljs.core.seq(seq__17651_18987);
if(temp__5753__auto___18996){
var seq__17651_18997__$1 = temp__5753__auto___18996;
if(cljs.core.chunked_seq_QMARK_(seq__17651_18997__$1)){
var c__4679__auto___18998 = cljs.core.chunk_first(seq__17651_18997__$1);
var G__18999 = cljs.core.chunk_rest(seq__17651_18997__$1);
var G__19000 = c__4679__auto___18998;
var G__19001 = cljs.core.count(c__4679__auto___18998);
var G__19002 = (0);
seq__17651_18987 = G__18999;
chunk__17652_18988 = G__19000;
count__17653_18989 = G__19001;
i__17654_18990 = G__19002;
continue;
} else {
var node_19003 = cljs.core.first(seq__17651_18997__$1);
fragment.appendChild(shadow.dom._to_dom(node_19003));


var G__19004 = cljs.core.next(seq__17651_18997__$1);
var G__19005 = null;
var G__19006 = (0);
var G__19007 = (0);
seq__17651_18987 = G__19004;
chunk__17652_18988 = G__19005;
count__17653_18989 = G__19006;
i__17654_18990 = G__19007;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17646){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17646));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17683_19008 = cljs.core.seq(scripts);
var chunk__17684_19009 = null;
var count__17685_19010 = (0);
var i__17686_19011 = (0);
while(true){
if((i__17686_19011 < count__17685_19010)){
var vec__17699_19012 = chunk__17684_19009.cljs$core$IIndexed$_nth$arity$2(null,i__17686_19011);
var script_tag_19013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17699_19012,(0),null);
var script_body_19014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17699_19012,(1),null);
eval(script_body_19014);


var G__19015 = seq__17683_19008;
var G__19016 = chunk__17684_19009;
var G__19017 = count__17685_19010;
var G__19018 = (i__17686_19011 + (1));
seq__17683_19008 = G__19015;
chunk__17684_19009 = G__19016;
count__17685_19010 = G__19017;
i__17686_19011 = G__19018;
continue;
} else {
var temp__5753__auto___19019 = cljs.core.seq(seq__17683_19008);
if(temp__5753__auto___19019){
var seq__17683_19020__$1 = temp__5753__auto___19019;
if(cljs.core.chunked_seq_QMARK_(seq__17683_19020__$1)){
var c__4679__auto___19021 = cljs.core.chunk_first(seq__17683_19020__$1);
var G__19022 = cljs.core.chunk_rest(seq__17683_19020__$1);
var G__19023 = c__4679__auto___19021;
var G__19024 = cljs.core.count(c__4679__auto___19021);
var G__19025 = (0);
seq__17683_19008 = G__19022;
chunk__17684_19009 = G__19023;
count__17685_19010 = G__19024;
i__17686_19011 = G__19025;
continue;
} else {
var vec__17709_19026 = cljs.core.first(seq__17683_19020__$1);
var script_tag_19027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17709_19026,(0),null);
var script_body_19028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17709_19026,(1),null);
eval(script_body_19028);


var G__19029 = cljs.core.next(seq__17683_19020__$1);
var G__19030 = null;
var G__19031 = (0);
var G__19032 = (0);
seq__17683_19008 = G__19029;
chunk__17684_19009 = G__19030;
count__17685_19010 = G__19031;
i__17686_19011 = G__19032;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17717){
var vec__17718 = p__17717;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17749 = arguments.length;
switch (G__17749) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17782 = cljs.core.seq(style_keys);
var chunk__17783 = null;
var count__17784 = (0);
var i__17785 = (0);
while(true){
if((i__17785 < count__17784)){
var it = chunk__17783.cljs$core$IIndexed$_nth$arity$2(null,i__17785);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19040 = seq__17782;
var G__19041 = chunk__17783;
var G__19042 = count__17784;
var G__19043 = (i__17785 + (1));
seq__17782 = G__19040;
chunk__17783 = G__19041;
count__17784 = G__19042;
i__17785 = G__19043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17782);
if(temp__5753__auto__){
var seq__17782__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17782__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17782__$1);
var G__19044 = cljs.core.chunk_rest(seq__17782__$1);
var G__19045 = c__4679__auto__;
var G__19046 = cljs.core.count(c__4679__auto__);
var G__19047 = (0);
seq__17782 = G__19044;
chunk__17783 = G__19045;
count__17784 = G__19046;
i__17785 = G__19047;
continue;
} else {
var it = cljs.core.first(seq__17782__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19048 = cljs.core.next(seq__17782__$1);
var G__19049 = null;
var G__19050 = (0);
var G__19051 = (0);
seq__17782 = G__19048;
chunk__17783 = G__19049;
count__17784 = G__19050;
i__17785 = G__19051;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k17829,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__17864 = k17829;
var G__17864__$1 = (((G__17864 instanceof cljs.core.Keyword))?G__17864.fqn:null);
switch (G__17864__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17829,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__17866){
var vec__17870 = p__17866;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17828){
var self__ = this;
var G__17828__$1 = this;
return (new cljs.core.RecordIter((0),G__17828__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17830,other17831){
var self__ = this;
var this17830__$1 = this;
return (((!((other17831 == null)))) && ((((this17830__$1.constructor === other17831.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17830__$1.x,other17831.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17830__$1.y,other17831.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17830__$1.__extmap,other17831.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k17829){
var self__ = this;
var this__4509__auto____$1 = this;
var G__17946 = k17829;
var G__17946__$1 = (((G__17946 instanceof cljs.core.Keyword))?G__17946.fqn:null);
switch (G__17946__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17829);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__17828){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__17966 = cljs.core.keyword_identical_QMARK_;
var expr__17967 = k__4511__auto__;
if(cljs.core.truth_((pred__17966.cljs$core$IFn$_invoke$arity$2 ? pred__17966.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17967) : pred__17966.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17967)))){
return (new shadow.dom.Coordinate(G__17828,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17966.cljs$core$IFn$_invoke$arity$2 ? pred__17966.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17967) : pred__17966.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17967)))){
return (new shadow.dom.Coordinate(self__.x,G__17828,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__17828),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__17828){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17828,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17852){
var extmap__4542__auto__ = (function (){var G__18041 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17852,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18041);
} else {
return G__18041;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17852),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17852),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k18081,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__18105 = k18081;
var G__18105__$1 = (((G__18105 instanceof cljs.core.Keyword))?G__18105.fqn:null);
switch (G__18105__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18081,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__18116){
var vec__18132 = p__18116;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18132,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18132,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18080){
var self__ = this;
var G__18080__$1 = this;
return (new cljs.core.RecordIter((0),G__18080__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18082,other18083){
var self__ = this;
var this18082__$1 = this;
return (((!((other18083 == null)))) && ((((this18082__$1.constructor === other18083.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18082__$1.w,other18083.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18082__$1.h,other18083.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18082__$1.__extmap,other18083.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k18081){
var self__ = this;
var this__4509__auto____$1 = this;
var G__18232 = k18081;
var G__18232__$1 = (((G__18232 instanceof cljs.core.Keyword))?G__18232.fqn:null);
switch (G__18232__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18081);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__18080){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__18245 = cljs.core.keyword_identical_QMARK_;
var expr__18246 = k__4511__auto__;
if(cljs.core.truth_((pred__18245.cljs$core$IFn$_invoke$arity$2 ? pred__18245.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18246) : pred__18245.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18246)))){
return (new shadow.dom.Size(G__18080,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18245.cljs$core$IFn$_invoke$arity$2 ? pred__18245.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18246) : pred__18245.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18246)))){
return (new shadow.dom.Size(self__.w,G__18080,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__18080),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__18080){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18080,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18091){
var extmap__4542__auto__ = (function (){var G__18299 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18091,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18091)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18299);
} else {
return G__18299;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18091),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18091),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__19122 = (i + (1));
var G__19123 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19122;
ret = G__19123;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18373){
var vec__18375 = p__18373;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18381 = arguments.length;
switch (G__18381) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19145 = ps;
var G__19146 = (i + (1));
el__$1 = G__19145;
i = G__19146;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18428 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18428,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18428,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18428,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18431_19163 = cljs.core.seq(props);
var chunk__18432_19164 = null;
var count__18433_19165 = (0);
var i__18434_19166 = (0);
while(true){
if((i__18434_19166 < count__18433_19165)){
var vec__18460_19167 = chunk__18432_19164.cljs$core$IIndexed$_nth$arity$2(null,i__18434_19166);
var k_19168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460_19167,(0),null);
var v_19169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460_19167,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_19168);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19168),v_19169);


var G__19170 = seq__18431_19163;
var G__19171 = chunk__18432_19164;
var G__19172 = count__18433_19165;
var G__19173 = (i__18434_19166 + (1));
seq__18431_19163 = G__19170;
chunk__18432_19164 = G__19171;
count__18433_19165 = G__19172;
i__18434_19166 = G__19173;
continue;
} else {
var temp__5753__auto___19174 = cljs.core.seq(seq__18431_19163);
if(temp__5753__auto___19174){
var seq__18431_19180__$1 = temp__5753__auto___19174;
if(cljs.core.chunked_seq_QMARK_(seq__18431_19180__$1)){
var c__4679__auto___19181 = cljs.core.chunk_first(seq__18431_19180__$1);
var G__19182 = cljs.core.chunk_rest(seq__18431_19180__$1);
var G__19183 = c__4679__auto___19181;
var G__19184 = cljs.core.count(c__4679__auto___19181);
var G__19185 = (0);
seq__18431_19163 = G__19182;
chunk__18432_19164 = G__19183;
count__18433_19165 = G__19184;
i__18434_19166 = G__19185;
continue;
} else {
var vec__18470_19186 = cljs.core.first(seq__18431_19180__$1);
var k_19187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470_19186,(0),null);
var v_19188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470_19186,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_19187);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19187),v_19188);


var G__19190 = cljs.core.next(seq__18431_19180__$1);
var G__19191 = null;
var G__19192 = (0);
var G__19193 = (0);
seq__18431_19163 = G__19190;
chunk__18432_19164 = G__19191;
count__18433_19165 = G__19192;
i__18434_19166 = G__19193;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18483 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(1),null);
var seq__18486_19196 = cljs.core.seq(node_children);
var chunk__18488_19197 = null;
var count__18489_19198 = (0);
var i__18490_19199 = (0);
while(true){
if((i__18490_19199 < count__18489_19198)){
var child_struct_19200 = chunk__18488_19197.cljs$core$IIndexed$_nth$arity$2(null,i__18490_19199);
if((!((child_struct_19200 == null)))){
if(typeof child_struct_19200 === 'string'){
var text_19201 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19201),child_struct_19200].join(''));
} else {
var children_19202 = shadow.dom.svg_node(child_struct_19200);
if(cljs.core.seq_QMARK_(children_19202)){
var seq__18574_19203 = cljs.core.seq(children_19202);
var chunk__18576_19204 = null;
var count__18577_19205 = (0);
var i__18578_19206 = (0);
while(true){
if((i__18578_19206 < count__18577_19205)){
var child_19207 = chunk__18576_19204.cljs$core$IIndexed$_nth$arity$2(null,i__18578_19206);
if(cljs.core.truth_(child_19207)){
node.appendChild(child_19207);


var G__19208 = seq__18574_19203;
var G__19209 = chunk__18576_19204;
var G__19210 = count__18577_19205;
var G__19211 = (i__18578_19206 + (1));
seq__18574_19203 = G__19208;
chunk__18576_19204 = G__19209;
count__18577_19205 = G__19210;
i__18578_19206 = G__19211;
continue;
} else {
var G__19212 = seq__18574_19203;
var G__19213 = chunk__18576_19204;
var G__19214 = count__18577_19205;
var G__19215 = (i__18578_19206 + (1));
seq__18574_19203 = G__19212;
chunk__18576_19204 = G__19213;
count__18577_19205 = G__19214;
i__18578_19206 = G__19215;
continue;
}
} else {
var temp__5753__auto___19217 = cljs.core.seq(seq__18574_19203);
if(temp__5753__auto___19217){
var seq__18574_19218__$1 = temp__5753__auto___19217;
if(cljs.core.chunked_seq_QMARK_(seq__18574_19218__$1)){
var c__4679__auto___19219 = cljs.core.chunk_first(seq__18574_19218__$1);
var G__19220 = cljs.core.chunk_rest(seq__18574_19218__$1);
var G__19221 = c__4679__auto___19219;
var G__19222 = cljs.core.count(c__4679__auto___19219);
var G__19223 = (0);
seq__18574_19203 = G__19220;
chunk__18576_19204 = G__19221;
count__18577_19205 = G__19222;
i__18578_19206 = G__19223;
continue;
} else {
var child_19225 = cljs.core.first(seq__18574_19218__$1);
if(cljs.core.truth_(child_19225)){
node.appendChild(child_19225);


var G__19226 = cljs.core.next(seq__18574_19218__$1);
var G__19227 = null;
var G__19228 = (0);
var G__19229 = (0);
seq__18574_19203 = G__19226;
chunk__18576_19204 = G__19227;
count__18577_19205 = G__19228;
i__18578_19206 = G__19229;
continue;
} else {
var G__19230 = cljs.core.next(seq__18574_19218__$1);
var G__19231 = null;
var G__19232 = (0);
var G__19233 = (0);
seq__18574_19203 = G__19230;
chunk__18576_19204 = G__19231;
count__18577_19205 = G__19232;
i__18578_19206 = G__19233;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19202);
}
}


var G__19234 = seq__18486_19196;
var G__19235 = chunk__18488_19197;
var G__19236 = count__18489_19198;
var G__19237 = (i__18490_19199 + (1));
seq__18486_19196 = G__19234;
chunk__18488_19197 = G__19235;
count__18489_19198 = G__19236;
i__18490_19199 = G__19237;
continue;
} else {
var G__19238 = seq__18486_19196;
var G__19239 = chunk__18488_19197;
var G__19240 = count__18489_19198;
var G__19241 = (i__18490_19199 + (1));
seq__18486_19196 = G__19238;
chunk__18488_19197 = G__19239;
count__18489_19198 = G__19240;
i__18490_19199 = G__19241;
continue;
}
} else {
var temp__5753__auto___19242 = cljs.core.seq(seq__18486_19196);
if(temp__5753__auto___19242){
var seq__18486_19243__$1 = temp__5753__auto___19242;
if(cljs.core.chunked_seq_QMARK_(seq__18486_19243__$1)){
var c__4679__auto___19244 = cljs.core.chunk_first(seq__18486_19243__$1);
var G__19245 = cljs.core.chunk_rest(seq__18486_19243__$1);
var G__19246 = c__4679__auto___19244;
var G__19247 = cljs.core.count(c__4679__auto___19244);
var G__19248 = (0);
seq__18486_19196 = G__19245;
chunk__18488_19197 = G__19246;
count__18489_19198 = G__19247;
i__18490_19199 = G__19248;
continue;
} else {
var child_struct_19249 = cljs.core.first(seq__18486_19243__$1);
if((!((child_struct_19249 == null)))){
if(typeof child_struct_19249 === 'string'){
var text_19250 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19250),child_struct_19249].join(''));
} else {
var children_19251 = shadow.dom.svg_node(child_struct_19249);
if(cljs.core.seq_QMARK_(children_19251)){
var seq__18624_19252 = cljs.core.seq(children_19251);
var chunk__18626_19253 = null;
var count__18627_19254 = (0);
var i__18628_19255 = (0);
while(true){
if((i__18628_19255 < count__18627_19254)){
var child_19256 = chunk__18626_19253.cljs$core$IIndexed$_nth$arity$2(null,i__18628_19255);
if(cljs.core.truth_(child_19256)){
node.appendChild(child_19256);


var G__19257 = seq__18624_19252;
var G__19258 = chunk__18626_19253;
var G__19259 = count__18627_19254;
var G__19260 = (i__18628_19255 + (1));
seq__18624_19252 = G__19257;
chunk__18626_19253 = G__19258;
count__18627_19254 = G__19259;
i__18628_19255 = G__19260;
continue;
} else {
var G__19261 = seq__18624_19252;
var G__19262 = chunk__18626_19253;
var G__19263 = count__18627_19254;
var G__19264 = (i__18628_19255 + (1));
seq__18624_19252 = G__19261;
chunk__18626_19253 = G__19262;
count__18627_19254 = G__19263;
i__18628_19255 = G__19264;
continue;
}
} else {
var temp__5753__auto___19265__$1 = cljs.core.seq(seq__18624_19252);
if(temp__5753__auto___19265__$1){
var seq__18624_19266__$1 = temp__5753__auto___19265__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18624_19266__$1)){
var c__4679__auto___19267 = cljs.core.chunk_first(seq__18624_19266__$1);
var G__19268 = cljs.core.chunk_rest(seq__18624_19266__$1);
var G__19269 = c__4679__auto___19267;
var G__19270 = cljs.core.count(c__4679__auto___19267);
var G__19271 = (0);
seq__18624_19252 = G__19268;
chunk__18626_19253 = G__19269;
count__18627_19254 = G__19270;
i__18628_19255 = G__19271;
continue;
} else {
var child_19272 = cljs.core.first(seq__18624_19266__$1);
if(cljs.core.truth_(child_19272)){
node.appendChild(child_19272);


var G__19273 = cljs.core.next(seq__18624_19266__$1);
var G__19274 = null;
var G__19275 = (0);
var G__19276 = (0);
seq__18624_19252 = G__19273;
chunk__18626_19253 = G__19274;
count__18627_19254 = G__19275;
i__18628_19255 = G__19276;
continue;
} else {
var G__19277 = cljs.core.next(seq__18624_19266__$1);
var G__19278 = null;
var G__19279 = (0);
var G__19280 = (0);
seq__18624_19252 = G__19277;
chunk__18626_19253 = G__19278;
count__18627_19254 = G__19279;
i__18628_19255 = G__19280;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19251);
}
}


var G__19282 = cljs.core.next(seq__18486_19243__$1);
var G__19283 = null;
var G__19284 = (0);
var G__19285 = (0);
seq__18486_19196 = G__19282;
chunk__18488_19197 = G__19283;
count__18489_19198 = G__19284;
i__18490_19199 = G__19285;
continue;
} else {
var G__19286 = cljs.core.next(seq__18486_19243__$1);
var G__19287 = null;
var G__19288 = (0);
var G__19289 = (0);
seq__18486_19196 = G__19286;
chunk__18488_19197 = G__19287;
count__18489_19198 = G__19288;
i__18490_19199 = G__19289;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19291 = arguments.length;
var i__4865__auto___19292 = (0);
while(true){
if((i__4865__auto___19292 < len__4864__auto___19291)){
args__4870__auto__.push((arguments[i__4865__auto___19292]));

var G__19293 = (i__4865__auto___19292 + (1));
i__4865__auto___19292 = G__19293;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18667){
var G__18668 = cljs.core.first(seq18667);
var seq18667__$1 = cljs.core.next(seq18667);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18668,seq18667__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18685 = arguments.length;
switch (G__18685) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__14120__auto___19301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_18704){
var state_val_18705 = (state_18704[(1)]);
if((state_val_18705 === (1))){
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18704__$1,(2),once_or_cleanup);
} else {
if((state_val_18705 === (2))){
var inst_18700 = (state_18704[(2)]);
var inst_18702 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18704__$1 = (function (){var statearr_18712 = state_18704;
(statearr_18712[(7)] = inst_18700);

return statearr_18712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18704__$1,inst_18702);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13981__auto__ = null;
var shadow$dom$state_machine__13981__auto____0 = (function (){
var statearr_18715 = [null,null,null,null,null,null,null,null];
(statearr_18715[(0)] = shadow$dom$state_machine__13981__auto__);

(statearr_18715[(1)] = (1));

return statearr_18715;
});
var shadow$dom$state_machine__13981__auto____1 = (function (state_18704){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_18704);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e18719){var ex__13984__auto__ = e18719;
var statearr_18720_19303 = state_18704;
(statearr_18720_19303[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_18704[(4)]))){
var statearr_18721_19304 = state_18704;
(statearr_18721_19304[(1)] = cljs.core.first((state_18704[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19305 = state_18704;
state_18704 = G__19305;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
shadow$dom$state_machine__13981__auto__ = function(state_18704){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13981__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13981__auto____1.call(this,state_18704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13981__auto____0;
shadow$dom$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13981__auto____1;
return shadow$dom$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_18723 = f__14121__auto__();
(statearr_18723[(6)] = c__14120__auto___19301);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
