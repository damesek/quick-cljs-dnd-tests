goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12019__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12020__i = 0, G__12020__a = new Array(arguments.length -  0);
while (G__12020__i < G__12020__a.length) {G__12020__a[G__12020__i] = arguments[G__12020__i + 0]; ++G__12020__i;}
  args = new cljs.core.IndexedSeq(G__12020__a,0,null);
} 
return G__12019__delegate.call(this,args);};
G__12019.cljs$lang$maxFixedArity = 0;
G__12019.cljs$lang$applyTo = (function (arglist__12021){
var args = cljs.core.seq(arglist__12021);
return G__12019__delegate(args);
});
G__12019.cljs$core$IFn$_invoke$arity$variadic = G__12019__delegate;
return G__12019;
})()
);

(o.error = (function() { 
var G__12022__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12023__i = 0, G__12023__a = new Array(arguments.length -  0);
while (G__12023__i < G__12023__a.length) {G__12023__a[G__12023__i] = arguments[G__12023__i + 0]; ++G__12023__i;}
  args = new cljs.core.IndexedSeq(G__12023__a,0,null);
} 
return G__12022__delegate.call(this,args);};
G__12022.cljs$lang$maxFixedArity = 0;
G__12022.cljs$lang$applyTo = (function (arglist__12024){
var args = cljs.core.seq(arglist__12024);
return G__12022__delegate(args);
});
G__12022.cljs$core$IFn$_invoke$arity$variadic = G__12022__delegate;
return G__12022;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
