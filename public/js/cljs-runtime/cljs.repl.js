goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20039){
var map__20040 = p__20039;
var map__20040__$1 = cljs.core.__destructure_map(map__20040);
var m = map__20040__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20040__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20047_20265 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20048_20266 = null;
var count__20049_20267 = (0);
var i__20050_20268 = (0);
while(true){
if((i__20050_20268 < count__20049_20267)){
var f_20269 = chunk__20048_20266.cljs$core$IIndexed$_nth$arity$2(null,i__20050_20268);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20269], 0));


var G__20274 = seq__20047_20265;
var G__20275 = chunk__20048_20266;
var G__20276 = count__20049_20267;
var G__20277 = (i__20050_20268 + (1));
seq__20047_20265 = G__20274;
chunk__20048_20266 = G__20275;
count__20049_20267 = G__20276;
i__20050_20268 = G__20277;
continue;
} else {
var temp__5753__auto___20278 = cljs.core.seq(seq__20047_20265);
if(temp__5753__auto___20278){
var seq__20047_20279__$1 = temp__5753__auto___20278;
if(cljs.core.chunked_seq_QMARK_(seq__20047_20279__$1)){
var c__4679__auto___20280 = cljs.core.chunk_first(seq__20047_20279__$1);
var G__20281 = cljs.core.chunk_rest(seq__20047_20279__$1);
var G__20282 = c__4679__auto___20280;
var G__20283 = cljs.core.count(c__4679__auto___20280);
var G__20284 = (0);
seq__20047_20265 = G__20281;
chunk__20048_20266 = G__20282;
count__20049_20267 = G__20283;
i__20050_20268 = G__20284;
continue;
} else {
var f_20286 = cljs.core.first(seq__20047_20279__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20286], 0));


var G__20287 = cljs.core.next(seq__20047_20279__$1);
var G__20288 = null;
var G__20289 = (0);
var G__20290 = (0);
seq__20047_20265 = G__20287;
chunk__20048_20266 = G__20288;
count__20049_20267 = G__20289;
i__20050_20268 = G__20290;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20292 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20292], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20292)))?cljs.core.second(arglists_20292):arglists_20292)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20052_20294 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20053_20295 = null;
var count__20054_20296 = (0);
var i__20055_20297 = (0);
while(true){
if((i__20055_20297 < count__20054_20296)){
var vec__20066_20298 = chunk__20053_20295.cljs$core$IIndexed$_nth$arity$2(null,i__20055_20297);
var name_20299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066_20298,(0),null);
var map__20069_20300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066_20298,(1),null);
var map__20069_20301__$1 = cljs.core.__destructure_map(map__20069_20300);
var doc_20302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069_20301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069_20301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20299], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20303], 0));

if(cljs.core.truth_(doc_20302)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20302], 0));
} else {
}


var G__20309 = seq__20052_20294;
var G__20310 = chunk__20053_20295;
var G__20311 = count__20054_20296;
var G__20312 = (i__20055_20297 + (1));
seq__20052_20294 = G__20309;
chunk__20053_20295 = G__20310;
count__20054_20296 = G__20311;
i__20055_20297 = G__20312;
continue;
} else {
var temp__5753__auto___20313 = cljs.core.seq(seq__20052_20294);
if(temp__5753__auto___20313){
var seq__20052_20314__$1 = temp__5753__auto___20313;
if(cljs.core.chunked_seq_QMARK_(seq__20052_20314__$1)){
var c__4679__auto___20315 = cljs.core.chunk_first(seq__20052_20314__$1);
var G__20316 = cljs.core.chunk_rest(seq__20052_20314__$1);
var G__20317 = c__4679__auto___20315;
var G__20318 = cljs.core.count(c__4679__auto___20315);
var G__20319 = (0);
seq__20052_20294 = G__20316;
chunk__20053_20295 = G__20317;
count__20054_20296 = G__20318;
i__20055_20297 = G__20319;
continue;
} else {
var vec__20072_20320 = cljs.core.first(seq__20052_20314__$1);
var name_20321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072_20320,(0),null);
var map__20075_20322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072_20320,(1),null);
var map__20075_20323__$1 = cljs.core.__destructure_map(map__20075_20322);
var doc_20324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20075_20323__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20075_20323__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20321], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20325], 0));

if(cljs.core.truth_(doc_20324)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20324], 0));
} else {
}


var G__20326 = cljs.core.next(seq__20052_20314__$1);
var G__20327 = null;
var G__20328 = (0);
var G__20329 = (0);
seq__20052_20294 = G__20326;
chunk__20053_20295 = G__20327;
count__20054_20296 = G__20328;
i__20055_20297 = G__20329;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20076 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20077 = null;
var count__20078 = (0);
var i__20079 = (0);
while(true){
if((i__20079 < count__20078)){
var role = chunk__20077.cljs$core$IIndexed$_nth$arity$2(null,i__20079);
var temp__5753__auto___20330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20330__$1)){
var spec_20331 = temp__5753__auto___20330__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20331)], 0));
} else {
}


var G__20333 = seq__20076;
var G__20334 = chunk__20077;
var G__20335 = count__20078;
var G__20336 = (i__20079 + (1));
seq__20076 = G__20333;
chunk__20077 = G__20334;
count__20078 = G__20335;
i__20079 = G__20336;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__20076);
if(temp__5753__auto____$1){
var seq__20076__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20076__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20076__$1);
var G__20337 = cljs.core.chunk_rest(seq__20076__$1);
var G__20338 = c__4679__auto__;
var G__20339 = cljs.core.count(c__4679__auto__);
var G__20340 = (0);
seq__20076 = G__20337;
chunk__20077 = G__20338;
count__20078 = G__20339;
i__20079 = G__20340;
continue;
} else {
var role = cljs.core.first(seq__20076__$1);
var temp__5753__auto___20341__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20341__$2)){
var spec_20342 = temp__5753__auto___20341__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20342)], 0));
} else {
}


var G__20343 = cljs.core.next(seq__20076__$1);
var G__20344 = null;
var G__20345 = (0);
var G__20346 = (0);
seq__20076 = G__20343;
chunk__20077 = G__20344;
count__20078 = G__20345;
i__20079 = G__20346;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20349 = cljs.core.ex_cause(t);
via = G__20348;
t = G__20349;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20092 = datafied_throwable;
var map__20092__$1 = cljs.core.__destructure_map(map__20092);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20092__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20092__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20092__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20093 = cljs.core.last(via);
var map__20093__$1 = cljs.core.__destructure_map(map__20093);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20094 = data;
var map__20094__$1 = cljs.core.__destructure_map(map__20094);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20094__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20094__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20094__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20095 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20095__$1 = cljs.core.__destructure_map(map__20095);
var top_data = map__20095__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20098 = phase;
var G__20098__$1 = (((G__20098 instanceof cljs.core.Keyword))?G__20098.fqn:null);
switch (G__20098__$1) {
case "read-source":
var map__20099 = data;
var map__20099__$1 = cljs.core.__destructure_map(map__20099);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20099__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20099__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20100__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20100,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20100);
var G__20100__$2 = (cljs.core.truth_((function (){var fexpr__20102 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20102.cljs$core$IFn$_invoke$arity$1 ? fexpr__20102.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20102.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20100__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20100__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20100__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20100__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20103 = top_data;
var G__20103__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20103,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20103);
var G__20103__$2 = (cljs.core.truth_((function (){var fexpr__20104 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20104.cljs$core$IFn$_invoke$arity$1 ? fexpr__20104.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20104.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20103__$1);
var G__20103__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20103__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20103__$2);
var G__20103__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20103__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20103__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20103__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20103__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20106 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(3),null);
var G__20111 = top_data;
var G__20111__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20111,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20111);
var G__20111__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20111__$1);
var G__20111__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20111__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20111__$2);
var G__20111__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20111__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20111__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20111__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20111__$4;
}

break;
case "execution":
var vec__20120 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20090_SHARP_){
var or__4253__auto__ = (p1__20090_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__20123 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20123.cljs$core$IFn$_invoke$arity$1 ? fexpr__20123.cljs$core$IFn$_invoke$arity$1(p1__20090_SHARP_) : fexpr__20123.call(null,p1__20090_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__20124 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20124__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20124,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20124);
var G__20124__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20124__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20124__$1);
var G__20124__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20124__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20124__$2);
var G__20124__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20124__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20124__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20124__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20124__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20098__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20138){
var map__20139 = p__20138;
var map__20139__$1 = cljs.core.__destructure_map(map__20139);
var triage_data = map__20139__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20156 = phase;
var G__20156__$1 = (((G__20156 instanceof cljs.core.Keyword))?G__20156.fqn:null);
switch (G__20156__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20157 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20159 = loc;
var G__20160 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20173_20367 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20174_20368 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20175_20369 = true;
var _STAR_print_fn_STAR__temp_val__20176_20370 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20175_20369);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20176_20370);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20127_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20127_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20174_20368);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20173_20367);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20157,G__20158,G__20159,G__20160) : format.call(null,G__20157,G__20158,G__20159,G__20160));

break;
case "macroexpansion":
var G__20190 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20191 = cause_type;
var G__20192 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20193 = loc;
var G__20194 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20190,G__20191,G__20192,G__20193,G__20194) : format.call(null,G__20190,G__20191,G__20192,G__20193,G__20194));

break;
case "compile-syntax-check":
var G__20209 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20210 = cause_type;
var G__20211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20212 = loc;
var G__20213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20209,G__20210,G__20211,G__20212,G__20213) : format.call(null,G__20209,G__20210,G__20211,G__20212,G__20213));

break;
case "compilation":
var G__20214 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20215 = cause_type;
var G__20216 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20217 = loc;
var G__20218 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20214,G__20215,G__20216,G__20217,G__20218) : format.call(null,G__20214,G__20215,G__20216,G__20217,G__20218));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20219 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20220 = symbol;
var G__20221 = loc;
var G__20222 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20227_20376 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20228_20377 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20229_20378 = true;
var _STAR_print_fn_STAR__temp_val__20230_20379 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20229_20378);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20230_20379);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20128_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20128_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20228_20377);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20227_20376);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20219,G__20220,G__20221,G__20222) : format.call(null,G__20219,G__20220,G__20221,G__20222));
} else {
var G__20238 = "Execution error%s at %s(%s).\n%s\n";
var G__20239 = cause_type;
var G__20240 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20241 = loc;
var G__20243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20238,G__20239,G__20240,G__20241,G__20243) : format.call(null,G__20238,G__20239,G__20240,G__20241,G__20243));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20156__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
