goog.provide('dnd.app');
dnd.app.start = (function dnd$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd.views_new.app], null),document.getElementById("app"));
});
dnd.app.init_BANG_ = (function dnd$app$init_BANG_(){
cljs.core.tap_GT_("CLJS DND-kit Initialized!");

return dnd.app.start();
});
goog.exportSymbol('dnd.app.init_BANG_', dnd.app.init_BANG_);

//# sourceMappingURL=dnd.app.js.map
