goog.provide('dnd.app');
dnd.app.start = (function dnd$app$start(){
var G__13681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views.app], null);
var G__13682 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13681,G__13682) : reagent.core.render_component.call(null,G__13681,G__13682));
});
dnd.app.init_BANG_ = (function dnd$app$init_BANG_(){
console.log("CLJS DND-kit Initialized!");

return dnd.app.start();
});
goog.exportSymbol('dnd.app.init_BANG_', dnd.app.init_BANG_);

//# sourceMappingURL=dnd.app.js.map
