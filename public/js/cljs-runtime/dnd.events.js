goog.provide('dnd.events');
dnd.events.increment = (function dnd$events$increment(event){
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dnd.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});
dnd.events.decrement = (function dnd$events$decrement(event){
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dnd.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
});

//# sourceMappingURL=dnd.events.js.map
