goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14204 = arguments.length;
switch (G__14204) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14207 = (function (f,blockable,meta14208){
this.f = f;
this.blockable = blockable;
this.meta14208 = meta14208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14209,meta14208__$1){
var self__ = this;
var _14209__$1 = this;
return (new cljs.core.async.t_cljs$core$async14207(self__.f,self__.blockable,meta14208__$1));
}));

(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14209){
var self__ = this;
var _14209__$1 = this;
return self__.meta14208;
}));

(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14208","meta14208",1429469746,null)], null);
}));

(cljs.core.async.t_cljs$core$async14207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14207");

(cljs.core.async.t_cljs$core$async14207.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async14207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14207.
 */
cljs.core.async.__GT_t_cljs$core$async14207 = (function cljs$core$async$__GT_t_cljs$core$async14207(f__$1,blockable__$1,meta14208){
return (new cljs.core.async.t_cljs$core$async14207(f__$1,blockable__$1,meta14208));
});

}

return (new cljs.core.async.t_cljs$core$async14207(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14227 = arguments.length;
switch (G__14227) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14233 = arguments.length;
switch (G__14233) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14250 = arguments.length;
switch (G__14250) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17124 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17124) : fn1.call(null,val_17124));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17124) : fn1.call(null,val_17124));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14275 = arguments.length;
switch (G__14275) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___17151 = n;
var x_17152 = (0);
while(true){
if((x_17152 < n__4741__auto___17151)){
(a[x_17152] = x_17152);

var G__17154 = (x_17152 + (1));
x_17152 = G__17154;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14310 = (function (flag,meta14311){
this.flag = flag;
this.meta14311 = meta14311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14312,meta14311__$1){
var self__ = this;
var _14312__$1 = this;
return (new cljs.core.async.t_cljs$core$async14310(self__.flag,meta14311__$1));
}));

(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14312){
var self__ = this;
var _14312__$1 = this;
return self__.meta14311;
}));

(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14311","meta14311",-760746074,null)], null);
}));

(cljs.core.async.t_cljs$core$async14310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14310");

(cljs.core.async.t_cljs$core$async14310.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async14310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14310.
 */
cljs.core.async.__GT_t_cljs$core$async14310 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14310(flag__$1,meta14311){
return (new cljs.core.async.t_cljs$core$async14310(flag__$1,meta14311));
});

}

return (new cljs.core.async.t_cljs$core$async14310(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14343 = (function (flag,cb,meta14344){
this.flag = flag;
this.cb = cb;
this.meta14344 = meta14344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14345,meta14344__$1){
var self__ = this;
var _14345__$1 = this;
return (new cljs.core.async.t_cljs$core$async14343(self__.flag,self__.cb,meta14344__$1));
}));

(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14345){
var self__ = this;
var _14345__$1 = this;
return self__.meta14344;
}));

(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14344","meta14344",877861736,null)], null);
}));

(cljs.core.async.t_cljs$core$async14343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14343");

(cljs.core.async.t_cljs$core$async14343.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async14343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14343.
 */
cljs.core.async.__GT_t_cljs$core$async14343 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14343(flag__$1,cb__$1,meta14344){
return (new cljs.core.async.t_cljs$core$async14343(flag__$1,cb__$1,meta14344));
});

}

return (new cljs.core.async.t_cljs$core$async14343(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14355_SHARP_){
var G__14383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14383) : fret.call(null,G__14383));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14356_SHARP_){
var G__14384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14384) : fret.call(null,G__14384));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17167 = (i + (1));
i = G__17167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17168 = arguments.length;
var i__4865__auto___17169 = (0);
while(true){
if((i__4865__auto___17169 < len__4864__auto___17168)){
args__4870__auto__.push((arguments[i__4865__auto___17169]));

var G__17170 = (i__4865__auto___17169 + (1));
i__4865__auto___17169 = G__17170;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14394){
var map__14396 = p__14394;
var map__14396__$1 = cljs.core.__destructure_map(map__14396);
var opts = map__14396__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14391){
var G__14392 = cljs.core.first(seq14391);
var seq14391__$1 = cljs.core.next(seq14391);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14392,seq14391__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14403 = arguments.length;
switch (G__14403) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14120__auto___17182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14449){
var state_val_14453 = (state_14449[(1)]);
if((state_val_14453 === (7))){
var inst_14444 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14465_17188 = state_14449__$1;
(statearr_14465_17188[(2)] = inst_14444);

(statearr_14465_17188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (1))){
var state_14449__$1 = state_14449;
var statearr_14466_17191 = state_14449__$1;
(statearr_14466_17191[(2)] = null);

(statearr_14466_17191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (4))){
var inst_14421 = (state_14449[(7)]);
var inst_14421__$1 = (state_14449[(2)]);
var inst_14426 = (inst_14421__$1 == null);
var state_14449__$1 = (function (){var statearr_14472 = state_14449;
(statearr_14472[(7)] = inst_14421__$1);

return statearr_14472;
})();
if(cljs.core.truth_(inst_14426)){
var statearr_14473_17192 = state_14449__$1;
(statearr_14473_17192[(1)] = (5));

} else {
var statearr_14474_17193 = state_14449__$1;
(statearr_14474_17193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (13))){
var state_14449__$1 = state_14449;
var statearr_14478_17194 = state_14449__$1;
(statearr_14478_17194[(2)] = null);

(statearr_14478_17194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (6))){
var inst_14421 = (state_14449[(7)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14449__$1,(11),to,inst_14421);
} else {
if((state_val_14453 === (3))){
var inst_14446 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14449__$1,inst_14446);
} else {
if((state_val_14453 === (12))){
var state_14449__$1 = state_14449;
var statearr_14483_17197 = state_14449__$1;
(statearr_14483_17197[(2)] = null);

(statearr_14483_17197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (2))){
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14449__$1,(4),from);
} else {
if((state_val_14453 === (11))){
var inst_14437 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14437)){
var statearr_14484_17199 = state_14449__$1;
(statearr_14484_17199[(1)] = (12));

} else {
var statearr_14485_17200 = state_14449__$1;
(statearr_14485_17200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (9))){
var state_14449__$1 = state_14449;
var statearr_14486_17201 = state_14449__$1;
(statearr_14486_17201[(2)] = null);

(statearr_14486_17201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (5))){
var state_14449__$1 = state_14449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14487_17202 = state_14449__$1;
(statearr_14487_17202[(1)] = (8));

} else {
var statearr_14488_17203 = state_14449__$1;
(statearr_14488_17203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (14))){
var inst_14442 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14489_17205 = state_14449__$1;
(statearr_14489_17205[(2)] = inst_14442);

(statearr_14489_17205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (10))){
var inst_14434 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14493_17206 = state_14449__$1;
(statearr_14493_17206[(2)] = inst_14434);

(statearr_14493_17206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (8))){
var inst_14431 = cljs.core.async.close_BANG_(to);
var state_14449__$1 = state_14449;
var statearr_14495_17207 = state_14449__$1;
(statearr_14495_17207[(2)] = inst_14431);

(statearr_14495_17207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_14499 = [null,null,null,null,null,null,null,null];
(statearr_14499[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_14499[(1)] = (1));

return statearr_14499;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_14449){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14449);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14503){var ex__13984__auto__ = e14503;
var statearr_14504_17212 = state_14449;
(statearr_14504_17212[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14449[(4)]))){
var statearr_14505_17214 = state_14449;
(statearr_14505_17214[(1)] = cljs.core.first((state_14449[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17219 = state_14449;
state_14449 = G__17219;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_14449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_14449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14506 = f__14121__auto__();
(statearr_14506[(6)] = c__14120__auto___17182);

return statearr_14506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__14508){
var vec__14509 = p__14508;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(1),null);
var job = vec__14509;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14120__auto___17231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14521){
var state_val_14522 = (state_14521[(1)]);
if((state_val_14522 === (1))){
var state_14521__$1 = state_14521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14521__$1,(2),res,v);
} else {
if((state_val_14522 === (2))){
var inst_14517 = (state_14521[(2)]);
var inst_14518 = cljs.core.async.close_BANG_(res);
var state_14521__$1 = (function (){var statearr_14524 = state_14521;
(statearr_14524[(7)] = inst_14517);

return statearr_14524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14521__$1,inst_14518);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_14525 = [null,null,null,null,null,null,null,null];
(statearr_14525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__);

(statearr_14525[(1)] = (1));

return statearr_14525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1 = (function (state_14521){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14521);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14526){var ex__13984__auto__ = e14526;
var statearr_14527_17237 = state_14521;
(statearr_14527_17237[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14521[(4)]))){
var statearr_14531_17238 = state_14521;
(statearr_14531_17238[(1)] = cljs.core.first((state_14521[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17239 = state_14521;
state_14521 = G__17239;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = function(state_14521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1.call(this,state_14521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14532 = f__14121__auto__();
(statearr_14532[(6)] = c__14120__auto___17231);

return statearr_14532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14533){
var vec__14534 = p__14533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534,(1),null);
var job = vec__14534;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___17241 = n;
var __17242 = (0);
while(true){
if((__17242 < n__4741__auto___17241)){
var G__14537_17244 = type;
var G__14537_17245__$1 = (((G__14537_17244 instanceof cljs.core.Keyword))?G__14537_17244.fqn:null);
switch (G__14537_17245__$1) {
case "compute":
var c__14120__auto___17249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17242,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = ((function (__17242,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function (state_14551){
var state_val_14552 = (state_14551[(1)]);
if((state_val_14552 === (1))){
var state_14551__$1 = state_14551;
var statearr_14554_17250 = state_14551__$1;
(statearr_14554_17250[(2)] = null);

(statearr_14554_17250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (2))){
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(4),jobs);
} else {
if((state_val_14552 === (3))){
var inst_14549 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14551__$1,inst_14549);
} else {
if((state_val_14552 === (4))){
var inst_14541 = (state_14551[(2)]);
var inst_14542 = process(inst_14541);
var state_14551__$1 = state_14551;
if(cljs.core.truth_(inst_14542)){
var statearr_14558_17252 = state_14551__$1;
(statearr_14558_17252[(1)] = (5));

} else {
var statearr_14561_17253 = state_14551__$1;
(statearr_14561_17253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (5))){
var state_14551__$1 = state_14551;
var statearr_14563_17258 = state_14551__$1;
(statearr_14563_17258[(2)] = null);

(statearr_14563_17258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (6))){
var state_14551__$1 = state_14551;
var statearr_14564_17259 = state_14551__$1;
(statearr_14564_17259[(2)] = null);

(statearr_14564_17259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (7))){
var inst_14547 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14565_17261 = state_14551__$1;
(statearr_14565_17261[(2)] = inst_14547);

(statearr_14565_17261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17242,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
;
return ((function (__17242,switch__13980__auto__,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_14567 = [null,null,null,null,null,null,null];
(statearr_14567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__);

(statearr_14567[(1)] = (1));

return statearr_14567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1 = (function (state_14551){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14551);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14572){var ex__13984__auto__ = e14572;
var statearr_14573_17264 = state_14551;
(statearr_14573_17264[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14551[(4)]))){
var statearr_14574_17265 = state_14551;
(statearr_14574_17265[(1)] = cljs.core.first((state_14551[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17266 = state_14551;
state_14551 = G__17266;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__;
})()
;})(__17242,switch__13980__auto__,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
})();
var state__14122__auto__ = (function (){var statearr_14576 = f__14121__auto__();
(statearr_14576[(6)] = c__14120__auto___17249);

return statearr_14576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
});})(__17242,c__14120__auto___17249,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
);


break;
case "async":
var c__14120__auto___17267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17242,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = ((function (__17242,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function (state_14591){
var state_val_14592 = (state_14591[(1)]);
if((state_val_14592 === (1))){
var state_14591__$1 = state_14591;
var statearr_14595_17268 = state_14591__$1;
(statearr_14595_17268[(2)] = null);

(statearr_14595_17268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (2))){
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14591__$1,(4),jobs);
} else {
if((state_val_14592 === (3))){
var inst_14589 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14591__$1,inst_14589);
} else {
if((state_val_14592 === (4))){
var inst_14580 = (state_14591[(2)]);
var inst_14582 = async(inst_14580);
var state_14591__$1 = state_14591;
if(cljs.core.truth_(inst_14582)){
var statearr_14596_17275 = state_14591__$1;
(statearr_14596_17275[(1)] = (5));

} else {
var statearr_14597_17277 = state_14591__$1;
(statearr_14597_17277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (5))){
var state_14591__$1 = state_14591;
var statearr_14598_17279 = state_14591__$1;
(statearr_14598_17279[(2)] = null);

(statearr_14598_17279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (6))){
var state_14591__$1 = state_14591;
var statearr_14600_17280 = state_14591__$1;
(statearr_14600_17280[(2)] = null);

(statearr_14600_17280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (7))){
var inst_14587 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14601_17285 = state_14591__$1;
(statearr_14601_17285[(2)] = inst_14587);

(statearr_14601_17285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17242,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
;
return ((function (__17242,switch__13980__auto__,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_14606 = [null,null,null,null,null,null,null];
(statearr_14606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__);

(statearr_14606[(1)] = (1));

return statearr_14606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1 = (function (state_14591){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14591);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14610){var ex__13984__auto__ = e14610;
var statearr_14611_17293 = state_14591;
(statearr_14611_17293[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14591[(4)]))){
var statearr_14612_17294 = state_14591;
(statearr_14612_17294[(1)] = cljs.core.first((state_14591[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17297 = state_14591;
state_14591 = G__17297;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__;
})()
;})(__17242,switch__13980__auto__,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
})();
var state__14122__auto__ = (function (){var statearr_14617 = f__14121__auto__();
(statearr_14617[(6)] = c__14120__auto___17267);

return statearr_14617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
});})(__17242,c__14120__auto___17267,G__14537_17244,G__14537_17245__$1,n__4741__auto___17241,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14537_17245__$1)].join('')));

}

var G__17303 = (__17242 + (1));
__17242 = G__17303;
continue;
} else {
}
break;
}

var c__14120__auto___17305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14640){
var state_val_14641 = (state_14640[(1)]);
if((state_val_14641 === (7))){
var inst_14635 = (state_14640[(2)]);
var state_14640__$1 = state_14640;
var statearr_14664_17306 = state_14640__$1;
(statearr_14664_17306[(2)] = inst_14635);

(statearr_14664_17306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14641 === (1))){
var state_14640__$1 = state_14640;
var statearr_14677_17307 = state_14640__$1;
(statearr_14677_17307[(2)] = null);

(statearr_14677_17307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14641 === (4))){
var inst_14620 = (state_14640[(7)]);
var inst_14620__$1 = (state_14640[(2)]);
var inst_14621 = (inst_14620__$1 == null);
var state_14640__$1 = (function (){var statearr_14681 = state_14640;
(statearr_14681[(7)] = inst_14620__$1);

return statearr_14681;
})();
if(cljs.core.truth_(inst_14621)){
var statearr_14682_17309 = state_14640__$1;
(statearr_14682_17309[(1)] = (5));

} else {
var statearr_14686_17310 = state_14640__$1;
(statearr_14686_17310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14641 === (6))){
var inst_14625 = (state_14640[(8)]);
var inst_14620 = (state_14640[(7)]);
var inst_14625__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14627 = [inst_14620,inst_14625__$1];
var inst_14628 = (new cljs.core.PersistentVector(null,2,(5),inst_14626,inst_14627,null));
var state_14640__$1 = (function (){var statearr_14695 = state_14640;
(statearr_14695[(8)] = inst_14625__$1);

return statearr_14695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14640__$1,(8),jobs,inst_14628);
} else {
if((state_val_14641 === (3))){
var inst_14637 = (state_14640[(2)]);
var state_14640__$1 = state_14640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14640__$1,inst_14637);
} else {
if((state_val_14641 === (2))){
var state_14640__$1 = state_14640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14640__$1,(4),from);
} else {
if((state_val_14641 === (9))){
var inst_14632 = (state_14640[(2)]);
var state_14640__$1 = (function (){var statearr_14699 = state_14640;
(statearr_14699[(9)] = inst_14632);

return statearr_14699;
})();
var statearr_14701_17311 = state_14640__$1;
(statearr_14701_17311[(2)] = null);

(statearr_14701_17311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14641 === (5))){
var inst_14623 = cljs.core.async.close_BANG_(jobs);
var state_14640__$1 = state_14640;
var statearr_14705_17312 = state_14640__$1;
(statearr_14705_17312[(2)] = inst_14623);

(statearr_14705_17312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14641 === (8))){
var inst_14625 = (state_14640[(8)]);
var inst_14630 = (state_14640[(2)]);
var state_14640__$1 = (function (){var statearr_14706 = state_14640;
(statearr_14706[(10)] = inst_14630);

return statearr_14706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14640__$1,(9),results,inst_14625);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_14708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__);

(statearr_14708[(1)] = (1));

return statearr_14708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1 = (function (state_14640){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14640);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14711){var ex__13984__auto__ = e14711;
var statearr_14712_17316 = state_14640;
(statearr_14712_17316[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14640[(4)]))){
var statearr_14715_17317 = state_14640;
(statearr_14715_17317[(1)] = cljs.core.first((state_14640[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17318 = state_14640;
state_14640 = G__17318;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = function(state_14640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1.call(this,state_14640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14716 = f__14121__auto__();
(statearr_14716[(6)] = c__14120__auto___17305);

return statearr_14716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


var c__14120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14760){
var state_val_14762 = (state_14760[(1)]);
if((state_val_14762 === (7))){
var inst_14751 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14765_17321 = state_14760__$1;
(statearr_14765_17321[(2)] = inst_14751);

(statearr_14765_17321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (20))){
var state_14760__$1 = state_14760;
var statearr_14766_17322 = state_14760__$1;
(statearr_14766_17322[(2)] = null);

(statearr_14766_17322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (1))){
var state_14760__$1 = state_14760;
var statearr_14767_17324 = state_14760__$1;
(statearr_14767_17324[(2)] = null);

(statearr_14767_17324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (4))){
var inst_14719 = (state_14760[(7)]);
var inst_14719__$1 = (state_14760[(2)]);
var inst_14720 = (inst_14719__$1 == null);
var state_14760__$1 = (function (){var statearr_14771 = state_14760;
(statearr_14771[(7)] = inst_14719__$1);

return statearr_14771;
})();
if(cljs.core.truth_(inst_14720)){
var statearr_14772_17328 = state_14760__$1;
(statearr_14772_17328[(1)] = (5));

} else {
var statearr_14773_17329 = state_14760__$1;
(statearr_14773_17329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (15))){
var inst_14732 = (state_14760[(8)]);
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14760__$1,(18),to,inst_14732);
} else {
if((state_val_14762 === (21))){
var inst_14746 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14775_17333 = state_14760__$1;
(statearr_14775_17333[(2)] = inst_14746);

(statearr_14775_17333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (13))){
var inst_14748 = (state_14760[(2)]);
var state_14760__$1 = (function (){var statearr_14776 = state_14760;
(statearr_14776[(9)] = inst_14748);

return statearr_14776;
})();
var statearr_14777_17338 = state_14760__$1;
(statearr_14777_17338[(2)] = null);

(statearr_14777_17338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (6))){
var inst_14719 = (state_14760[(7)]);
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14760__$1,(11),inst_14719);
} else {
if((state_val_14762 === (17))){
var inst_14741 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
if(cljs.core.truth_(inst_14741)){
var statearr_14782_17340 = state_14760__$1;
(statearr_14782_17340[(1)] = (19));

} else {
var statearr_14783_17341 = state_14760__$1;
(statearr_14783_17341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (3))){
var inst_14753 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14760__$1,inst_14753);
} else {
if((state_val_14762 === (12))){
var inst_14729 = (state_14760[(10)]);
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14760__$1,(14),inst_14729);
} else {
if((state_val_14762 === (2))){
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14760__$1,(4),results);
} else {
if((state_val_14762 === (19))){
var state_14760__$1 = state_14760;
var statearr_14784_17342 = state_14760__$1;
(statearr_14784_17342[(2)] = null);

(statearr_14784_17342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (11))){
var inst_14729 = (state_14760[(2)]);
var state_14760__$1 = (function (){var statearr_14785 = state_14760;
(statearr_14785[(10)] = inst_14729);

return statearr_14785;
})();
var statearr_14787_17343 = state_14760__$1;
(statearr_14787_17343[(2)] = null);

(statearr_14787_17343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (9))){
var state_14760__$1 = state_14760;
var statearr_14790_17344 = state_14760__$1;
(statearr_14790_17344[(2)] = null);

(statearr_14790_17344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (5))){
var state_14760__$1 = state_14760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14793_17345 = state_14760__$1;
(statearr_14793_17345[(1)] = (8));

} else {
var statearr_14794_17346 = state_14760__$1;
(statearr_14794_17346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (14))){
var inst_14734 = (state_14760[(11)]);
var inst_14732 = (state_14760[(8)]);
var inst_14732__$1 = (state_14760[(2)]);
var inst_14733 = (inst_14732__$1 == null);
var inst_14734__$1 = cljs.core.not(inst_14733);
var state_14760__$1 = (function (){var statearr_14796 = state_14760;
(statearr_14796[(11)] = inst_14734__$1);

(statearr_14796[(8)] = inst_14732__$1);

return statearr_14796;
})();
if(inst_14734__$1){
var statearr_14797_17352 = state_14760__$1;
(statearr_14797_17352[(1)] = (15));

} else {
var statearr_14798_17354 = state_14760__$1;
(statearr_14798_17354[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (16))){
var inst_14734 = (state_14760[(11)]);
var state_14760__$1 = state_14760;
var statearr_14802_17355 = state_14760__$1;
(statearr_14802_17355[(2)] = inst_14734);

(statearr_14802_17355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (10))){
var inst_14726 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14804_17368 = state_14760__$1;
(statearr_14804_17368[(2)] = inst_14726);

(statearr_14804_17368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (18))){
var inst_14738 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14806_17372 = state_14760__$1;
(statearr_14806_17372[(2)] = inst_14738);

(statearr_14806_17372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14762 === (8))){
var inst_14723 = cljs.core.async.close_BANG_(to);
var state_14760__$1 = state_14760;
var statearr_14809_17373 = state_14760__$1;
(statearr_14809_17373[(2)] = inst_14723);

(statearr_14809_17373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_14814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__);

(statearr_14814[(1)] = (1));

return statearr_14814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1 = (function (state_14760){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14760);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14817){var ex__13984__auto__ = e14817;
var statearr_14818_17398 = state_14760;
(statearr_14818_17398[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14760[(4)]))){
var statearr_14820_17400 = state_14760;
(statearr_14820_17400[(1)] = cljs.core.first((state_14760[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17401 = state_14760;
state_14760 = G__17401;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__ = function(state_14760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1.call(this,state_14760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14821 = f__14121__auto__();
(statearr_14821[(6)] = c__14120__auto__);

return statearr_14821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

return c__14120__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14832 = arguments.length;
switch (G__14832) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14836 = arguments.length;
switch (G__14836) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14842 = arguments.length;
switch (G__14842) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14120__auto___17417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14877){
var state_val_14878 = (state_14877[(1)]);
if((state_val_14878 === (7))){
var inst_14872 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14882_17418 = state_14877__$1;
(statearr_14882_17418[(2)] = inst_14872);

(statearr_14882_17418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (1))){
var state_14877__$1 = state_14877;
var statearr_14888_17419 = state_14877__$1;
(statearr_14888_17419[(2)] = null);

(statearr_14888_17419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (4))){
var inst_14852 = (state_14877[(7)]);
var inst_14852__$1 = (state_14877[(2)]);
var inst_14854 = (inst_14852__$1 == null);
var state_14877__$1 = (function (){var statearr_14889 = state_14877;
(statearr_14889[(7)] = inst_14852__$1);

return statearr_14889;
})();
if(cljs.core.truth_(inst_14854)){
var statearr_14891_17421 = state_14877__$1;
(statearr_14891_17421[(1)] = (5));

} else {
var statearr_14893_17422 = state_14877__$1;
(statearr_14893_17422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (13))){
var state_14877__$1 = state_14877;
var statearr_14894_17423 = state_14877__$1;
(statearr_14894_17423[(2)] = null);

(statearr_14894_17423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (6))){
var inst_14852 = (state_14877[(7)]);
var inst_14859 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14852) : p.call(null,inst_14852));
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14859)){
var statearr_14895_17425 = state_14877__$1;
(statearr_14895_17425[(1)] = (9));

} else {
var statearr_14896_17426 = state_14877__$1;
(statearr_14896_17426[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (3))){
var inst_14875 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14877__$1,inst_14875);
} else {
if((state_val_14878 === (12))){
var state_14877__$1 = state_14877;
var statearr_14899_17427 = state_14877__$1;
(statearr_14899_17427[(2)] = null);

(statearr_14899_17427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (2))){
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14877__$1,(4),ch);
} else {
if((state_val_14878 === (11))){
var inst_14852 = (state_14877[(7)]);
var inst_14863 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14877__$1,(8),inst_14863,inst_14852);
} else {
if((state_val_14878 === (9))){
var state_14877__$1 = state_14877;
var statearr_14906_17428 = state_14877__$1;
(statearr_14906_17428[(2)] = tc);

(statearr_14906_17428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (5))){
var inst_14856 = cljs.core.async.close_BANG_(tc);
var inst_14857 = cljs.core.async.close_BANG_(fc);
var state_14877__$1 = (function (){var statearr_14907 = state_14877;
(statearr_14907[(8)] = inst_14856);

return statearr_14907;
})();
var statearr_14908_17430 = state_14877__$1;
(statearr_14908_17430[(2)] = inst_14857);

(statearr_14908_17430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (14))){
var inst_14870 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14909_17431 = state_14877__$1;
(statearr_14909_17431[(2)] = inst_14870);

(statearr_14909_17431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (10))){
var state_14877__$1 = state_14877;
var statearr_14910_17434 = state_14877__$1;
(statearr_14910_17434[(2)] = fc);

(statearr_14910_17434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (8))){
var inst_14865 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14865)){
var statearr_14915_17438 = state_14877__$1;
(statearr_14915_17438[(1)] = (12));

} else {
var statearr_14916_17439 = state_14877__$1;
(statearr_14916_17439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_14921 = [null,null,null,null,null,null,null,null,null];
(statearr_14921[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_14921[(1)] = (1));

return statearr_14921;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_14877){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14877);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14923){var ex__13984__auto__ = e14923;
var statearr_14924_17441 = state_14877;
(statearr_14924_17441[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14877[(4)]))){
var statearr_14926_17442 = state_14877;
(statearr_14926_17442[(1)] = cljs.core.first((state_14877[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17445 = state_14877;
state_14877 = G__17445;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_14877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_14877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14927 = f__14121__auto__();
(statearr_14927[(6)] = c__14120__auto___17417);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_14956){
var state_val_14957 = (state_14956[(1)]);
if((state_val_14957 === (7))){
var inst_14952 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
var statearr_14965_17446 = state_14956__$1;
(statearr_14965_17446[(2)] = inst_14952);

(statearr_14965_17446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (1))){
var inst_14928 = init;
var inst_14929 = inst_14928;
var state_14956__$1 = (function (){var statearr_14966 = state_14956;
(statearr_14966[(7)] = inst_14929);

return statearr_14966;
})();
var statearr_14967_17448 = state_14956__$1;
(statearr_14967_17448[(2)] = null);

(statearr_14967_17448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (4))){
var inst_14933 = (state_14956[(8)]);
var inst_14933__$1 = (state_14956[(2)]);
var inst_14938 = (inst_14933__$1 == null);
var state_14956__$1 = (function (){var statearr_14968 = state_14956;
(statearr_14968[(8)] = inst_14933__$1);

return statearr_14968;
})();
if(cljs.core.truth_(inst_14938)){
var statearr_14969_17451 = state_14956__$1;
(statearr_14969_17451[(1)] = (5));

} else {
var statearr_14970_17452 = state_14956__$1;
(statearr_14970_17452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (6))){
var inst_14929 = (state_14956[(7)]);
var inst_14933 = (state_14956[(8)]);
var inst_14941 = (state_14956[(9)]);
var inst_14941__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14929,inst_14933) : f.call(null,inst_14929,inst_14933));
var inst_14942 = cljs.core.reduced_QMARK_(inst_14941__$1);
var state_14956__$1 = (function (){var statearr_14971 = state_14956;
(statearr_14971[(9)] = inst_14941__$1);

return statearr_14971;
})();
if(inst_14942){
var statearr_14972_17453 = state_14956__$1;
(statearr_14972_17453[(1)] = (8));

} else {
var statearr_14974_17454 = state_14956__$1;
(statearr_14974_17454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (3))){
var inst_14954 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14956__$1,inst_14954);
} else {
if((state_val_14957 === (2))){
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14956__$1,(4),ch);
} else {
if((state_val_14957 === (9))){
var inst_14941 = (state_14956[(9)]);
var inst_14929 = inst_14941;
var state_14956__$1 = (function (){var statearr_14978 = state_14956;
(statearr_14978[(7)] = inst_14929);

return statearr_14978;
})();
var statearr_14981_17459 = state_14956__$1;
(statearr_14981_17459[(2)] = null);

(statearr_14981_17459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (5))){
var inst_14929 = (state_14956[(7)]);
var state_14956__$1 = state_14956;
var statearr_14983_17460 = state_14956__$1;
(statearr_14983_17460[(2)] = inst_14929);

(statearr_14983_17460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (10))){
var inst_14950 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
var statearr_14984_17463 = state_14956__$1;
(statearr_14984_17463[(2)] = inst_14950);

(statearr_14984_17463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (8))){
var inst_14941 = (state_14956[(9)]);
var inst_14946 = cljs.core.deref(inst_14941);
var state_14956__$1 = state_14956;
var statearr_14985_17466 = state_14956__$1;
(statearr_14985_17466[(2)] = inst_14946);

(statearr_14985_17466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13981__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13981__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$reduce_$_state_machine__13981__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$reduce_$_state_machine__13981__auto____1 = (function (state_14956){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_14956);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e14989){var ex__13984__auto__ = e14989;
var statearr_14990_17467 = state_14956;
(statearr_14990_17467[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_14956[(4)]))){
var statearr_14991_17468 = state_14956;
(statearr_14991_17468[(1)] = cljs.core.first((state_14956[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17472 = state_14956;
state_14956 = G__17472;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13981__auto__ = function(state_14956){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13981__auto____1.call(this,state_14956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13981__auto____0;
cljs$core$async$reduce_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13981__auto____1;
return cljs$core$async$reduce_$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_14998 = f__14121__auto__();
(statearr_14998[(6)] = c__14120__auto__);

return statearr_14998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

return c__14120__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_15010){
var state_val_15011 = (state_15010[(1)]);
if((state_val_15011 === (1))){
var inst_15005 = cljs.core.async.reduce(f__$1,init,ch);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15010__$1,(2),inst_15005);
} else {
if((state_val_15011 === (2))){
var inst_15007 = (state_15010[(2)]);
var inst_15008 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15007) : f__$1.call(null,inst_15007));
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15010__$1,inst_15008);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13981__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13981__auto____0 = (function (){
var statearr_15022 = [null,null,null,null,null,null,null];
(statearr_15022[(0)] = cljs$core$async$transduce_$_state_machine__13981__auto__);

(statearr_15022[(1)] = (1));

return statearr_15022;
});
var cljs$core$async$transduce_$_state_machine__13981__auto____1 = (function (state_15010){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_15010);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e15023){var ex__13984__auto__ = e15023;
var statearr_15024_17486 = state_15010;
(statearr_15024_17486[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_15010[(4)]))){
var statearr_15025_17487 = state_15010;
(statearr_15025_17487[(1)] = cljs.core.first((state_15010[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17488 = state_15010;
state_15010 = G__17488;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13981__auto__ = function(state_15010){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13981__auto____1.call(this,state_15010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13981__auto____0;
cljs$core$async$transduce_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13981__auto____1;
return cljs$core$async$transduce_$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_15026 = f__14121__auto__();
(statearr_15026[(6)] = c__14120__auto__);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

return c__14120__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15044 = arguments.length;
switch (G__15044) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_15070){
var state_val_15071 = (state_15070[(1)]);
if((state_val_15071 === (7))){
var inst_15052 = (state_15070[(2)]);
var state_15070__$1 = state_15070;
var statearr_15077_17497 = state_15070__$1;
(statearr_15077_17497[(2)] = inst_15052);

(statearr_15077_17497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (1))){
var inst_15046 = cljs.core.seq(coll);
var inst_15047 = inst_15046;
var state_15070__$1 = (function (){var statearr_15079 = state_15070;
(statearr_15079[(7)] = inst_15047);

return statearr_15079;
})();
var statearr_15080_17499 = state_15070__$1;
(statearr_15080_17499[(2)] = null);

(statearr_15080_17499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (4))){
var inst_15047 = (state_15070[(7)]);
var inst_15050 = cljs.core.first(inst_15047);
var state_15070__$1 = state_15070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15070__$1,(7),ch,inst_15050);
} else {
if((state_val_15071 === (13))){
var inst_15064 = (state_15070[(2)]);
var state_15070__$1 = state_15070;
var statearr_15090_17509 = state_15070__$1;
(statearr_15090_17509[(2)] = inst_15064);

(statearr_15090_17509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (6))){
var inst_15055 = (state_15070[(2)]);
var state_15070__$1 = state_15070;
if(cljs.core.truth_(inst_15055)){
var statearr_15091_17510 = state_15070__$1;
(statearr_15091_17510[(1)] = (8));

} else {
var statearr_15092_17511 = state_15070__$1;
(statearr_15092_17511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (3))){
var inst_15068 = (state_15070[(2)]);
var state_15070__$1 = state_15070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15070__$1,inst_15068);
} else {
if((state_val_15071 === (12))){
var state_15070__$1 = state_15070;
var statearr_15101_17512 = state_15070__$1;
(statearr_15101_17512[(2)] = null);

(statearr_15101_17512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (2))){
var inst_15047 = (state_15070[(7)]);
var state_15070__$1 = state_15070;
if(cljs.core.truth_(inst_15047)){
var statearr_15103_17514 = state_15070__$1;
(statearr_15103_17514[(1)] = (4));

} else {
var statearr_15104_17515 = state_15070__$1;
(statearr_15104_17515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (11))){
var inst_15061 = cljs.core.async.close_BANG_(ch);
var state_15070__$1 = state_15070;
var statearr_15105_17516 = state_15070__$1;
(statearr_15105_17516[(2)] = inst_15061);

(statearr_15105_17516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (9))){
var state_15070__$1 = state_15070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15110_17517 = state_15070__$1;
(statearr_15110_17517[(1)] = (11));

} else {
var statearr_15111_17518 = state_15070__$1;
(statearr_15111_17518[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (5))){
var inst_15047 = (state_15070[(7)]);
var state_15070__$1 = state_15070;
var statearr_15112_17519 = state_15070__$1;
(statearr_15112_17519[(2)] = inst_15047);

(statearr_15112_17519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (10))){
var inst_15066 = (state_15070[(2)]);
var state_15070__$1 = state_15070;
var statearr_15116_17521 = state_15070__$1;
(statearr_15116_17521[(2)] = inst_15066);

(statearr_15116_17521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15071 === (8))){
var inst_15047 = (state_15070[(7)]);
var inst_15057 = cljs.core.next(inst_15047);
var inst_15047__$1 = inst_15057;
var state_15070__$1 = (function (){var statearr_15117 = state_15070;
(statearr_15117[(7)] = inst_15047__$1);

return statearr_15117;
})();
var statearr_15119_17522 = state_15070__$1;
(statearr_15119_17522[(2)] = null);

(statearr_15119_17522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_15120 = [null,null,null,null,null,null,null,null];
(statearr_15120[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_15120[(1)] = (1));

return statearr_15120;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_15070){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_15070);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e15121){var ex__13984__auto__ = e15121;
var statearr_15122_17525 = state_15070;
(statearr_15122_17525[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_15070[(4)]))){
var statearr_15123_17526 = state_15070;
(statearr_15123_17526[(1)] = cljs.core.first((state_15070[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17533 = state_15070;
state_15070 = G__17533;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_15070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_15070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_15129 = f__14121__auto__();
(statearr_15129[(6)] = c__14120__auto__);

return statearr_15129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

return c__14120__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15142 = arguments.length;
switch (G__15142) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17537 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17537(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17538 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17538(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17539 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17539(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17548 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17548(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15163 = (function (ch,cs,meta15164){
this.ch = ch;
this.cs = cs;
this.meta15164 = meta15164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15165,meta15164__$1){
var self__ = this;
var _15165__$1 = this;
return (new cljs.core.async.t_cljs$core$async15163(self__.ch,self__.cs,meta15164__$1));
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15165){
var self__ = this;
var _15165__$1 = this;
return self__.meta15164;
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15164","meta15164",-246047895,null)], null);
}));

(cljs.core.async.t_cljs$core$async15163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15163");

(cljs.core.async.t_cljs$core$async15163.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15163.
 */
cljs.core.async.__GT_t_cljs$core$async15163 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15163(ch__$1,cs__$1,meta15164){
return (new cljs.core.async.t_cljs$core$async15163(ch__$1,cs__$1,meta15164));
});

}

return (new cljs.core.async.t_cljs$core$async15163(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14120__auto___17553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_15317){
var state_val_15318 = (state_15317[(1)]);
if((state_val_15318 === (7))){
var inst_15313 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15335_17554 = state_15317__$1;
(statearr_15335_17554[(2)] = inst_15313);

(statearr_15335_17554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (20))){
var inst_15213 = (state_15317[(7)]);
var inst_15229 = cljs.core.first(inst_15213);
var inst_15230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15229,(0),null);
var inst_15231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15229,(1),null);
var state_15317__$1 = (function (){var statearr_15346 = state_15317;
(statearr_15346[(8)] = inst_15230);

return statearr_15346;
})();
if(cljs.core.truth_(inst_15231)){
var statearr_15351_17555 = state_15317__$1;
(statearr_15351_17555[(1)] = (22));

} else {
var statearr_15352_17556 = state_15317__$1;
(statearr_15352_17556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (27))){
var inst_15267 = (state_15317[(9)]);
var inst_15260 = (state_15317[(10)]);
var inst_15262 = (state_15317[(11)]);
var inst_15179 = (state_15317[(12)]);
var inst_15267__$1 = cljs.core._nth(inst_15260,inst_15262);
var inst_15268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15267__$1,inst_15179,done);
var state_15317__$1 = (function (){var statearr_15353 = state_15317;
(statearr_15353[(9)] = inst_15267__$1);

return statearr_15353;
})();
if(cljs.core.truth_(inst_15268)){
var statearr_15354_17558 = state_15317__$1;
(statearr_15354_17558[(1)] = (30));

} else {
var statearr_15355_17559 = state_15317__$1;
(statearr_15355_17559[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (1))){
var state_15317__$1 = state_15317;
var statearr_15356_17560 = state_15317__$1;
(statearr_15356_17560[(2)] = null);

(statearr_15356_17560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (24))){
var inst_15213 = (state_15317[(7)]);
var inst_15236 = (state_15317[(2)]);
var inst_15237 = cljs.core.next(inst_15213);
var inst_15190 = inst_15237;
var inst_15191 = null;
var inst_15192 = (0);
var inst_15193 = (0);
var state_15317__$1 = (function (){var statearr_15360 = state_15317;
(statearr_15360[(13)] = inst_15192);

(statearr_15360[(14)] = inst_15236);

(statearr_15360[(15)] = inst_15190);

(statearr_15360[(16)] = inst_15191);

(statearr_15360[(17)] = inst_15193);

return statearr_15360;
})();
var statearr_15363_17566 = state_15317__$1;
(statearr_15363_17566[(2)] = null);

(statearr_15363_17566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (39))){
var state_15317__$1 = state_15317;
var statearr_15372_17567 = state_15317__$1;
(statearr_15372_17567[(2)] = null);

(statearr_15372_17567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (4))){
var inst_15179 = (state_15317[(12)]);
var inst_15179__$1 = (state_15317[(2)]);
var inst_15181 = (inst_15179__$1 == null);
var state_15317__$1 = (function (){var statearr_15373 = state_15317;
(statearr_15373[(12)] = inst_15179__$1);

return statearr_15373;
})();
if(cljs.core.truth_(inst_15181)){
var statearr_15374_17568 = state_15317__$1;
(statearr_15374_17568[(1)] = (5));

} else {
var statearr_15375_17569 = state_15317__$1;
(statearr_15375_17569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (15))){
var inst_15192 = (state_15317[(13)]);
var inst_15190 = (state_15317[(15)]);
var inst_15191 = (state_15317[(16)]);
var inst_15193 = (state_15317[(17)]);
var inst_15209 = (state_15317[(2)]);
var inst_15210 = (inst_15193 + (1));
var tmp15364 = inst_15192;
var tmp15365 = inst_15190;
var tmp15366 = inst_15191;
var inst_15190__$1 = tmp15365;
var inst_15191__$1 = tmp15366;
var inst_15192__$1 = tmp15364;
var inst_15193__$1 = inst_15210;
var state_15317__$1 = (function (){var statearr_15377 = state_15317;
(statearr_15377[(13)] = inst_15192__$1);

(statearr_15377[(15)] = inst_15190__$1);

(statearr_15377[(18)] = inst_15209);

(statearr_15377[(16)] = inst_15191__$1);

(statearr_15377[(17)] = inst_15193__$1);

return statearr_15377;
})();
var statearr_15382_17571 = state_15317__$1;
(statearr_15382_17571[(2)] = null);

(statearr_15382_17571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (21))){
var inst_15240 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15393_17572 = state_15317__$1;
(statearr_15393_17572[(2)] = inst_15240);

(statearr_15393_17572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (31))){
var inst_15267 = (state_15317[(9)]);
var inst_15271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15267);
var state_15317__$1 = state_15317;
var statearr_15408_17574 = state_15317__$1;
(statearr_15408_17574[(2)] = inst_15271);

(statearr_15408_17574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (32))){
var inst_15259 = (state_15317[(19)]);
var inst_15261 = (state_15317[(20)]);
var inst_15260 = (state_15317[(10)]);
var inst_15262 = (state_15317[(11)]);
var inst_15273 = (state_15317[(2)]);
var inst_15274 = (inst_15262 + (1));
var tmp15384 = inst_15259;
var tmp15385 = inst_15261;
var tmp15386 = inst_15260;
var inst_15259__$1 = tmp15384;
var inst_15260__$1 = tmp15386;
var inst_15261__$1 = tmp15385;
var inst_15262__$1 = inst_15274;
var state_15317__$1 = (function (){var statearr_15409 = state_15317;
(statearr_15409[(19)] = inst_15259__$1);

(statearr_15409[(21)] = inst_15273);

(statearr_15409[(20)] = inst_15261__$1);

(statearr_15409[(10)] = inst_15260__$1);

(statearr_15409[(11)] = inst_15262__$1);

return statearr_15409;
})();
var statearr_15410_17577 = state_15317__$1;
(statearr_15410_17577[(2)] = null);

(statearr_15410_17577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (40))){
var inst_15286 = (state_15317[(22)]);
var inst_15290 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15286);
var state_15317__$1 = state_15317;
var statearr_15412_17578 = state_15317__$1;
(statearr_15412_17578[(2)] = inst_15290);

(statearr_15412_17578[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (33))){
var inst_15277 = (state_15317[(23)]);
var inst_15279 = cljs.core.chunked_seq_QMARK_(inst_15277);
var state_15317__$1 = state_15317;
if(inst_15279){
var statearr_15425_17579 = state_15317__$1;
(statearr_15425_17579[(1)] = (36));

} else {
var statearr_15431_17580 = state_15317__$1;
(statearr_15431_17580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (13))){
var inst_15203 = (state_15317[(24)]);
var inst_15206 = cljs.core.async.close_BANG_(inst_15203);
var state_15317__$1 = state_15317;
var statearr_15437_17582 = state_15317__$1;
(statearr_15437_17582[(2)] = inst_15206);

(statearr_15437_17582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (22))){
var inst_15230 = (state_15317[(8)]);
var inst_15233 = cljs.core.async.close_BANG_(inst_15230);
var state_15317__$1 = state_15317;
var statearr_15442_17584 = state_15317__$1;
(statearr_15442_17584[(2)] = inst_15233);

(statearr_15442_17584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (36))){
var inst_15277 = (state_15317[(23)]);
var inst_15281 = cljs.core.chunk_first(inst_15277);
var inst_15282 = cljs.core.chunk_rest(inst_15277);
var inst_15283 = cljs.core.count(inst_15281);
var inst_15259 = inst_15282;
var inst_15260 = inst_15281;
var inst_15261 = inst_15283;
var inst_15262 = (0);
var state_15317__$1 = (function (){var statearr_15447 = state_15317;
(statearr_15447[(19)] = inst_15259);

(statearr_15447[(20)] = inst_15261);

(statearr_15447[(10)] = inst_15260);

(statearr_15447[(11)] = inst_15262);

return statearr_15447;
})();
var statearr_15453_17587 = state_15317__$1;
(statearr_15453_17587[(2)] = null);

(statearr_15453_17587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (41))){
var inst_15277 = (state_15317[(23)]);
var inst_15292 = (state_15317[(2)]);
var inst_15293 = cljs.core.next(inst_15277);
var inst_15259 = inst_15293;
var inst_15260 = null;
var inst_15261 = (0);
var inst_15262 = (0);
var state_15317__$1 = (function (){var statearr_15469 = state_15317;
(statearr_15469[(19)] = inst_15259);

(statearr_15469[(25)] = inst_15292);

(statearr_15469[(20)] = inst_15261);

(statearr_15469[(10)] = inst_15260);

(statearr_15469[(11)] = inst_15262);

return statearr_15469;
})();
var statearr_15470_17588 = state_15317__$1;
(statearr_15470_17588[(2)] = null);

(statearr_15470_17588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (43))){
var state_15317__$1 = state_15317;
var statearr_15471_17590 = state_15317__$1;
(statearr_15471_17590[(2)] = null);

(statearr_15471_17590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (29))){
var inst_15301 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15474_17592 = state_15317__$1;
(statearr_15474_17592[(2)] = inst_15301);

(statearr_15474_17592[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (44))){
var inst_15310 = (state_15317[(2)]);
var state_15317__$1 = (function (){var statearr_15475 = state_15317;
(statearr_15475[(26)] = inst_15310);

return statearr_15475;
})();
var statearr_15476_17593 = state_15317__$1;
(statearr_15476_17593[(2)] = null);

(statearr_15476_17593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (6))){
var inst_15250 = (state_15317[(27)]);
var inst_15249 = cljs.core.deref(cs);
var inst_15250__$1 = cljs.core.keys(inst_15249);
var inst_15251 = cljs.core.count(inst_15250__$1);
var inst_15252 = cljs.core.reset_BANG_(dctr,inst_15251);
var inst_15258 = cljs.core.seq(inst_15250__$1);
var inst_15259 = inst_15258;
var inst_15260 = null;
var inst_15261 = (0);
var inst_15262 = (0);
var state_15317__$1 = (function (){var statearr_15477 = state_15317;
(statearr_15477[(27)] = inst_15250__$1);

(statearr_15477[(19)] = inst_15259);

(statearr_15477[(28)] = inst_15252);

(statearr_15477[(20)] = inst_15261);

(statearr_15477[(10)] = inst_15260);

(statearr_15477[(11)] = inst_15262);

return statearr_15477;
})();
var statearr_15479_17595 = state_15317__$1;
(statearr_15479_17595[(2)] = null);

(statearr_15479_17595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (28))){
var inst_15277 = (state_15317[(23)]);
var inst_15259 = (state_15317[(19)]);
var inst_15277__$1 = cljs.core.seq(inst_15259);
var state_15317__$1 = (function (){var statearr_15484 = state_15317;
(statearr_15484[(23)] = inst_15277__$1);

return statearr_15484;
})();
if(inst_15277__$1){
var statearr_15485_17596 = state_15317__$1;
(statearr_15485_17596[(1)] = (33));

} else {
var statearr_15490_17597 = state_15317__$1;
(statearr_15490_17597[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (25))){
var inst_15261 = (state_15317[(20)]);
var inst_15262 = (state_15317[(11)]);
var inst_15264 = (inst_15262 < inst_15261);
var inst_15265 = inst_15264;
var state_15317__$1 = state_15317;
if(cljs.core.truth_(inst_15265)){
var statearr_15492_17599 = state_15317__$1;
(statearr_15492_17599[(1)] = (27));

} else {
var statearr_15493_17600 = state_15317__$1;
(statearr_15493_17600[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (34))){
var state_15317__$1 = state_15317;
var statearr_15494_17606 = state_15317__$1;
(statearr_15494_17606[(2)] = null);

(statearr_15494_17606[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (17))){
var state_15317__$1 = state_15317;
var statearr_15495_17608 = state_15317__$1;
(statearr_15495_17608[(2)] = null);

(statearr_15495_17608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (3))){
var inst_15315 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15317__$1,inst_15315);
} else {
if((state_val_15318 === (12))){
var inst_15245 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15496_17611 = state_15317__$1;
(statearr_15496_17611[(2)] = inst_15245);

(statearr_15496_17611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (2))){
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15317__$1,(4),ch);
} else {
if((state_val_15318 === (23))){
var state_15317__$1 = state_15317;
var statearr_15498_17613 = state_15317__$1;
(statearr_15498_17613[(2)] = null);

(statearr_15498_17613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (35))){
var inst_15299 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15499_17618 = state_15317__$1;
(statearr_15499_17618[(2)] = inst_15299);

(statearr_15499_17618[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (19))){
var inst_15213 = (state_15317[(7)]);
var inst_15217 = cljs.core.chunk_first(inst_15213);
var inst_15218 = cljs.core.chunk_rest(inst_15213);
var inst_15219 = cljs.core.count(inst_15217);
var inst_15190 = inst_15218;
var inst_15191 = inst_15217;
var inst_15192 = inst_15219;
var inst_15193 = (0);
var state_15317__$1 = (function (){var statearr_15504 = state_15317;
(statearr_15504[(13)] = inst_15192);

(statearr_15504[(15)] = inst_15190);

(statearr_15504[(16)] = inst_15191);

(statearr_15504[(17)] = inst_15193);

return statearr_15504;
})();
var statearr_15505_17625 = state_15317__$1;
(statearr_15505_17625[(2)] = null);

(statearr_15505_17625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (11))){
var inst_15213 = (state_15317[(7)]);
var inst_15190 = (state_15317[(15)]);
var inst_15213__$1 = cljs.core.seq(inst_15190);
var state_15317__$1 = (function (){var statearr_15510 = state_15317;
(statearr_15510[(7)] = inst_15213__$1);

return statearr_15510;
})();
if(inst_15213__$1){
var statearr_15511_17629 = state_15317__$1;
(statearr_15511_17629[(1)] = (16));

} else {
var statearr_15516_17630 = state_15317__$1;
(statearr_15516_17630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (9))){
var inst_15247 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15517_17633 = state_15317__$1;
(statearr_15517_17633[(2)] = inst_15247);

(statearr_15517_17633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (5))){
var inst_15188 = cljs.core.deref(cs);
var inst_15189 = cljs.core.seq(inst_15188);
var inst_15190 = inst_15189;
var inst_15191 = null;
var inst_15192 = (0);
var inst_15193 = (0);
var state_15317__$1 = (function (){var statearr_15519 = state_15317;
(statearr_15519[(13)] = inst_15192);

(statearr_15519[(15)] = inst_15190);

(statearr_15519[(16)] = inst_15191);

(statearr_15519[(17)] = inst_15193);

return statearr_15519;
})();
var statearr_15522_17657 = state_15317__$1;
(statearr_15522_17657[(2)] = null);

(statearr_15522_17657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (14))){
var state_15317__$1 = state_15317;
var statearr_15526_17662 = state_15317__$1;
(statearr_15526_17662[(2)] = null);

(statearr_15526_17662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (45))){
var inst_15307 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15527_17668 = state_15317__$1;
(statearr_15527_17668[(2)] = inst_15307);

(statearr_15527_17668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (26))){
var inst_15250 = (state_15317[(27)]);
var inst_15303 = (state_15317[(2)]);
var inst_15304 = cljs.core.seq(inst_15250);
var state_15317__$1 = (function (){var statearr_15528 = state_15317;
(statearr_15528[(29)] = inst_15303);

return statearr_15528;
})();
if(inst_15304){
var statearr_15529_17669 = state_15317__$1;
(statearr_15529_17669[(1)] = (42));

} else {
var statearr_15530_17670 = state_15317__$1;
(statearr_15530_17670[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (16))){
var inst_15213 = (state_15317[(7)]);
var inst_15215 = cljs.core.chunked_seq_QMARK_(inst_15213);
var state_15317__$1 = state_15317;
if(inst_15215){
var statearr_15531_17675 = state_15317__$1;
(statearr_15531_17675[(1)] = (19));

} else {
var statearr_15532_17677 = state_15317__$1;
(statearr_15532_17677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (38))){
var inst_15296 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15536_17679 = state_15317__$1;
(statearr_15536_17679[(2)] = inst_15296);

(statearr_15536_17679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (30))){
var state_15317__$1 = state_15317;
var statearr_15537_17682 = state_15317__$1;
(statearr_15537_17682[(2)] = null);

(statearr_15537_17682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (10))){
var inst_15191 = (state_15317[(16)]);
var inst_15193 = (state_15317[(17)]);
var inst_15202 = cljs.core._nth(inst_15191,inst_15193);
var inst_15203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15202,(0),null);
var inst_15204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15202,(1),null);
var state_15317__$1 = (function (){var statearr_15544 = state_15317;
(statearr_15544[(24)] = inst_15203);

return statearr_15544;
})();
if(cljs.core.truth_(inst_15204)){
var statearr_15545_17690 = state_15317__$1;
(statearr_15545_17690[(1)] = (13));

} else {
var statearr_15546_17691 = state_15317__$1;
(statearr_15546_17691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (18))){
var inst_15243 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15552_17692 = state_15317__$1;
(statearr_15552_17692[(2)] = inst_15243);

(statearr_15552_17692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (42))){
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15317__$1,(45),dchan);
} else {
if((state_val_15318 === (37))){
var inst_15277 = (state_15317[(23)]);
var inst_15286 = (state_15317[(22)]);
var inst_15179 = (state_15317[(12)]);
var inst_15286__$1 = cljs.core.first(inst_15277);
var inst_15287 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15286__$1,inst_15179,done);
var state_15317__$1 = (function (){var statearr_15553 = state_15317;
(statearr_15553[(22)] = inst_15286__$1);

return statearr_15553;
})();
if(cljs.core.truth_(inst_15287)){
var statearr_15554_17697 = state_15317__$1;
(statearr_15554_17697[(1)] = (39));

} else {
var statearr_15555_17698 = state_15317__$1;
(statearr_15555_17698[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15318 === (8))){
var inst_15192 = (state_15317[(13)]);
var inst_15193 = (state_15317[(17)]);
var inst_15196 = (inst_15193 < inst_15192);
var inst_15197 = inst_15196;
var state_15317__$1 = state_15317;
if(cljs.core.truth_(inst_15197)){
var statearr_15556_17706 = state_15317__$1;
(statearr_15556_17706[(1)] = (10));

} else {
var statearr_15566_17707 = state_15317__$1;
(statearr_15566_17707[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13981__auto__ = null;
var cljs$core$async$mult_$_state_machine__13981__auto____0 = (function (){
var statearr_15571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15571[(0)] = cljs$core$async$mult_$_state_machine__13981__auto__);

(statearr_15571[(1)] = (1));

return statearr_15571;
});
var cljs$core$async$mult_$_state_machine__13981__auto____1 = (function (state_15317){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_15317);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e15574){var ex__13984__auto__ = e15574;
var statearr_15575_17713 = state_15317;
(statearr_15575_17713[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_15317[(4)]))){
var statearr_15576_17715 = state_15317;
(statearr_15576_17715[(1)] = cljs.core.first((state_15317[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17722 = state_15317;
state_15317 = G__17722;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13981__auto__ = function(state_15317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13981__auto____1.call(this,state_15317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13981__auto____0;
cljs$core$async$mult_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13981__auto____1;
return cljs$core$async$mult_$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_15577 = f__14121__auto__();
(statearr_15577[(6)] = c__14120__auto___17553);

return statearr_15577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15581 = arguments.length;
switch (G__15581) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17735 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17735(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17738 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17738(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17742 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17742(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17772 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17772(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17781 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17781(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17796 = arguments.length;
var i__4865__auto___17797 = (0);
while(true){
if((i__4865__auto___17797 < len__4864__auto___17796)){
args__4870__auto__.push((arguments[i__4865__auto___17797]));

var G__17799 = (i__4865__auto___17797 + (1));
i__4865__auto___17797 = G__17799;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15605){
var map__15606 = p__15605;
var map__15606__$1 = cljs.core.__destructure_map(map__15606);
var opts = map__15606__$1;
var statearr_15607_17806 = state;
(statearr_15607_17806[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15608_17807 = state;
(statearr_15608_17807[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_15609_17811 = state;
(statearr_15609_17811[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15601){
var G__15602 = cljs.core.first(seq15601);
var seq15601__$1 = cljs.core.next(seq15601);
var G__15603 = cljs.core.first(seq15601__$1);
var seq15601__$2 = cljs.core.next(seq15601__$1);
var G__15604 = cljs.core.first(seq15601__$2);
var seq15601__$3 = cljs.core.next(seq15601__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15602,G__15603,G__15604,seq15601__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15624 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15625){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15625 = meta15625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15626,meta15625__$1){
var self__ = this;
var _15626__$1 = this;
return (new cljs.core.async.t_cljs$core$async15624(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15625__$1));
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15626){
var self__ = this;
var _15626__$1 = this;
return self__.meta15625;
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15625","meta15625",1779929143,null)], null);
}));

(cljs.core.async.t_cljs$core$async15624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15624");

(cljs.core.async.t_cljs$core$async15624.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15624.
 */
cljs.core.async.__GT_t_cljs$core$async15624 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15625){
return (new cljs.core.async.t_cljs$core$async15624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15625));
});

}

return (new cljs.core.async.t_cljs$core$async15624(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14120__auto___17886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_15715){
var state_val_15716 = (state_15715[(1)]);
if((state_val_15716 === (7))){
var inst_15675 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15675)){
var statearr_15721_17895 = state_15715__$1;
(statearr_15721_17895[(1)] = (8));

} else {
var statearr_15722_17897 = state_15715__$1;
(statearr_15722_17897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (20))){
var inst_15668 = (state_15715[(7)]);
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15715__$1,(23),out,inst_15668);
} else {
if((state_val_15716 === (1))){
var inst_15651 = calc_state();
var inst_15652 = cljs.core.__destructure_map(inst_15651);
var inst_15653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15656 = inst_15651;
var state_15715__$1 = (function (){var statearr_15728 = state_15715;
(statearr_15728[(8)] = inst_15656);

(statearr_15728[(9)] = inst_15654);

(statearr_15728[(10)] = inst_15655);

(statearr_15728[(11)] = inst_15653);

return statearr_15728;
})();
var statearr_15729_17905 = state_15715__$1;
(statearr_15729_17905[(2)] = null);

(statearr_15729_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (24))){
var inst_15659 = (state_15715[(12)]);
var inst_15656 = inst_15659;
var state_15715__$1 = (function (){var statearr_15730 = state_15715;
(statearr_15730[(8)] = inst_15656);

return statearr_15730;
})();
var statearr_15731_17914 = state_15715__$1;
(statearr_15731_17914[(2)] = null);

(statearr_15731_17914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (4))){
var inst_15668 = (state_15715[(7)]);
var inst_15670 = (state_15715[(13)]);
var inst_15667 = (state_15715[(2)]);
var inst_15668__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(0),null);
var inst_15669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(1),null);
var inst_15670__$1 = (inst_15668__$1 == null);
var state_15715__$1 = (function (){var statearr_15732 = state_15715;
(statearr_15732[(7)] = inst_15668__$1);

(statearr_15732[(13)] = inst_15670__$1);

(statearr_15732[(14)] = inst_15669);

return statearr_15732;
})();
if(cljs.core.truth_(inst_15670__$1)){
var statearr_15733_17921 = state_15715__$1;
(statearr_15733_17921[(1)] = (5));

} else {
var statearr_15734_17923 = state_15715__$1;
(statearr_15734_17923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (15))){
var inst_15660 = (state_15715[(15)]);
var inst_15689 = (state_15715[(16)]);
var inst_15689__$1 = cljs.core.empty_QMARK_(inst_15660);
var state_15715__$1 = (function (){var statearr_15740 = state_15715;
(statearr_15740[(16)] = inst_15689__$1);

return statearr_15740;
})();
if(inst_15689__$1){
var statearr_15741_17932 = state_15715__$1;
(statearr_15741_17932[(1)] = (17));

} else {
var statearr_15742_17933 = state_15715__$1;
(statearr_15742_17933[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (21))){
var inst_15659 = (state_15715[(12)]);
var inst_15656 = inst_15659;
var state_15715__$1 = (function (){var statearr_15743 = state_15715;
(statearr_15743[(8)] = inst_15656);

return statearr_15743;
})();
var statearr_15745_17935 = state_15715__$1;
(statearr_15745_17935[(2)] = null);

(statearr_15745_17935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (13))){
var inst_15682 = (state_15715[(2)]);
var inst_15683 = calc_state();
var inst_15656 = inst_15683;
var state_15715__$1 = (function (){var statearr_15750 = state_15715;
(statearr_15750[(8)] = inst_15656);

(statearr_15750[(17)] = inst_15682);

return statearr_15750;
})();
var statearr_15751_17938 = state_15715__$1;
(statearr_15751_17938[(2)] = null);

(statearr_15751_17938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (22))){
var inst_15709 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15752_17941 = state_15715__$1;
(statearr_15752_17941[(2)] = inst_15709);

(statearr_15752_17941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (6))){
var inst_15669 = (state_15715[(14)]);
var inst_15673 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15669,change);
var state_15715__$1 = state_15715;
var statearr_15753_17945 = state_15715__$1;
(statearr_15753_17945[(2)] = inst_15673);

(statearr_15753_17945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (25))){
var state_15715__$1 = state_15715;
var statearr_15754_17947 = state_15715__$1;
(statearr_15754_17947[(2)] = null);

(statearr_15754_17947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (17))){
var inst_15661 = (state_15715[(18)]);
var inst_15669 = (state_15715[(14)]);
var inst_15691 = (inst_15661.cljs$core$IFn$_invoke$arity$1 ? inst_15661.cljs$core$IFn$_invoke$arity$1(inst_15669) : inst_15661.call(null,inst_15669));
var inst_15692 = cljs.core.not(inst_15691);
var state_15715__$1 = state_15715;
var statearr_15756_17960 = state_15715__$1;
(statearr_15756_17960[(2)] = inst_15692);

(statearr_15756_17960[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (3))){
var inst_15713 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15715__$1,inst_15713);
} else {
if((state_val_15716 === (12))){
var state_15715__$1 = state_15715;
var statearr_15760_17974 = state_15715__$1;
(statearr_15760_17974[(2)] = null);

(statearr_15760_17974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (2))){
var inst_15656 = (state_15715[(8)]);
var inst_15659 = (state_15715[(12)]);
var inst_15659__$1 = cljs.core.__destructure_map(inst_15656);
var inst_15660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15715__$1 = (function (){var statearr_15763 = state_15715;
(statearr_15763[(15)] = inst_15660);

(statearr_15763[(12)] = inst_15659__$1);

(statearr_15763[(18)] = inst_15661);

return statearr_15763;
})();
return cljs.core.async.ioc_alts_BANG_(state_15715__$1,(4),inst_15662);
} else {
if((state_val_15716 === (23))){
var inst_15700 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15700)){
var statearr_15764_17984 = state_15715__$1;
(statearr_15764_17984[(1)] = (24));

} else {
var statearr_15765_17985 = state_15715__$1;
(statearr_15765_17985[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (19))){
var inst_15695 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15766_17989 = state_15715__$1;
(statearr_15766_17989[(2)] = inst_15695);

(statearr_15766_17989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (11))){
var inst_15669 = (state_15715[(14)]);
var inst_15679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15669);
var state_15715__$1 = state_15715;
var statearr_15767_17991 = state_15715__$1;
(statearr_15767_17991[(2)] = inst_15679);

(statearr_15767_17991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (9))){
var inst_15660 = (state_15715[(15)]);
var inst_15686 = (state_15715[(19)]);
var inst_15669 = (state_15715[(14)]);
var inst_15686__$1 = (inst_15660.cljs$core$IFn$_invoke$arity$1 ? inst_15660.cljs$core$IFn$_invoke$arity$1(inst_15669) : inst_15660.call(null,inst_15669));
var state_15715__$1 = (function (){var statearr_15772 = state_15715;
(statearr_15772[(19)] = inst_15686__$1);

return statearr_15772;
})();
if(cljs.core.truth_(inst_15686__$1)){
var statearr_15773_17998 = state_15715__$1;
(statearr_15773_17998[(1)] = (14));

} else {
var statearr_15775_18001 = state_15715__$1;
(statearr_15775_18001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (5))){
var inst_15670 = (state_15715[(13)]);
var state_15715__$1 = state_15715;
var statearr_15777_18005 = state_15715__$1;
(statearr_15777_18005[(2)] = inst_15670);

(statearr_15777_18005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (14))){
var inst_15686 = (state_15715[(19)]);
var state_15715__$1 = state_15715;
var statearr_15779_18007 = state_15715__$1;
(statearr_15779_18007[(2)] = inst_15686);

(statearr_15779_18007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (26))){
var inst_15705 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15780_18008 = state_15715__$1;
(statearr_15780_18008[(2)] = inst_15705);

(statearr_15780_18008[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (16))){
var inst_15697 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15697)){
var statearr_15785_18013 = state_15715__$1;
(statearr_15785_18013[(1)] = (20));

} else {
var statearr_15786_18015 = state_15715__$1;
(statearr_15786_18015[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (10))){
var inst_15711 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15787_18023 = state_15715__$1;
(statearr_15787_18023[(2)] = inst_15711);

(statearr_15787_18023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (18))){
var inst_15689 = (state_15715[(16)]);
var state_15715__$1 = state_15715;
var statearr_15788_18026 = state_15715__$1;
(statearr_15788_18026[(2)] = inst_15689);

(statearr_15788_18026[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (8))){
var inst_15668 = (state_15715[(7)]);
var inst_15677 = (inst_15668 == null);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15677)){
var statearr_15789_18027 = state_15715__$1;
(statearr_15789_18027[(1)] = (11));

} else {
var statearr_15790_18029 = state_15715__$1;
(statearr_15790_18029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13981__auto__ = null;
var cljs$core$async$mix_$_state_machine__13981__auto____0 = (function (){
var statearr_15791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15791[(0)] = cljs$core$async$mix_$_state_machine__13981__auto__);

(statearr_15791[(1)] = (1));

return statearr_15791;
});
var cljs$core$async$mix_$_state_machine__13981__auto____1 = (function (state_15715){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_15715);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e15793){var ex__13984__auto__ = e15793;
var statearr_15794_18040 = state_15715;
(statearr_15794_18040[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_15715[(4)]))){
var statearr_15795_18046 = state_15715;
(statearr_15795_18046[(1)] = cljs.core.first((state_15715[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18050 = state_15715;
state_15715 = G__18050;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13981__auto__ = function(state_15715){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13981__auto____1.call(this,state_15715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13981__auto____0;
cljs$core$async$mix_$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13981__auto____1;
return cljs$core$async$mix_$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_15799 = f__14121__auto__();
(statearr_15799[(6)] = c__14120__auto___17886);

return statearr_15799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18064 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18064(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18073 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18073(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18096 = (function() {
var G__18097 = null;
var G__18097__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18097__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18097 = function(p,v){
switch(arguments.length){
case 1:
return G__18097__1.call(this,p);
case 2:
return G__18097__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18097.cljs$core$IFn$_invoke$arity$1 = G__18097__1;
G__18097.cljs$core$IFn$_invoke$arity$2 = G__18097__2;
return G__18097;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18096(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18096(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15834 = arguments.length;
switch (G__15834) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15828_SHARP_){
if(cljs.core.truth_((p1__15828_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15828_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15828_SHARP_.call(null,topic)))){
return p1__15828_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15828_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15842 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15843){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15843 = meta15843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15844,meta15843__$1){
var self__ = this;
var _15844__$1 = this;
return (new cljs.core.async.t_cljs$core$async15842(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15843__$1));
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15844){
var self__ = this;
var _15844__$1 = this;
return self__.meta15843;
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15842.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15843","meta15843",635577432,null)], null);
}));

(cljs.core.async.t_cljs$core$async15842.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15842");

(cljs.core.async.t_cljs$core$async15842.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15842");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15842.
 */
cljs.core.async.__GT_t_cljs$core$async15842 = (function cljs$core$async$__GT_t_cljs$core$async15842(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15843){
return (new cljs.core.async.t_cljs$core$async15842(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15843));
});

}

return (new cljs.core.async.t_cljs$core$async15842(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14120__auto___18191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_15936){
var state_val_15937 = (state_15936[(1)]);
if((state_val_15937 === (7))){
var inst_15932 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15939_18195 = state_15936__$1;
(statearr_15939_18195[(2)] = inst_15932);

(statearr_15939_18195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (20))){
var state_15936__$1 = state_15936;
var statearr_15940_18197 = state_15936__$1;
(statearr_15940_18197[(2)] = null);

(statearr_15940_18197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (1))){
var state_15936__$1 = state_15936;
var statearr_15941_18201 = state_15936__$1;
(statearr_15941_18201[(2)] = null);

(statearr_15941_18201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (24))){
var inst_15915 = (state_15936[(7)]);
var inst_15924 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15915);
var state_15936__$1 = state_15936;
var statearr_15942_18209 = state_15936__$1;
(statearr_15942_18209[(2)] = inst_15924);

(statearr_15942_18209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (4))){
var inst_15867 = (state_15936[(8)]);
var inst_15867__$1 = (state_15936[(2)]);
var inst_15868 = (inst_15867__$1 == null);
var state_15936__$1 = (function (){var statearr_15944 = state_15936;
(statearr_15944[(8)] = inst_15867__$1);

return statearr_15944;
})();
if(cljs.core.truth_(inst_15868)){
var statearr_15946_18217 = state_15936__$1;
(statearr_15946_18217[(1)] = (5));

} else {
var statearr_15947_18218 = state_15936__$1;
(statearr_15947_18218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (15))){
var inst_15909 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15948_18220 = state_15936__$1;
(statearr_15948_18220[(2)] = inst_15909);

(statearr_15948_18220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (21))){
var inst_15929 = (state_15936[(2)]);
var state_15936__$1 = (function (){var statearr_15949 = state_15936;
(statearr_15949[(9)] = inst_15929);

return statearr_15949;
})();
var statearr_15950_18224 = state_15936__$1;
(statearr_15950_18224[(2)] = null);

(statearr_15950_18224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (13))){
var inst_15891 = (state_15936[(10)]);
var inst_15893 = cljs.core.chunked_seq_QMARK_(inst_15891);
var state_15936__$1 = state_15936;
if(inst_15893){
var statearr_15951_18226 = state_15936__$1;
(statearr_15951_18226[(1)] = (16));

} else {
var statearr_15952_18227 = state_15936__$1;
(statearr_15952_18227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (22))){
var inst_15921 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
if(cljs.core.truth_(inst_15921)){
var statearr_15953_18228 = state_15936__$1;
(statearr_15953_18228[(1)] = (23));

} else {
var statearr_15954_18229 = state_15936__$1;
(statearr_15954_18229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (6))){
var inst_15917 = (state_15936[(11)]);
var inst_15915 = (state_15936[(7)]);
var inst_15867 = (state_15936[(8)]);
var inst_15915__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15867) : topic_fn.call(null,inst_15867));
var inst_15916 = cljs.core.deref(mults);
var inst_15917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15916,inst_15915__$1);
var state_15936__$1 = (function (){var statearr_15955 = state_15936;
(statearr_15955[(11)] = inst_15917__$1);

(statearr_15955[(7)] = inst_15915__$1);

return statearr_15955;
})();
if(cljs.core.truth_(inst_15917__$1)){
var statearr_15956_18237 = state_15936__$1;
(statearr_15956_18237[(1)] = (19));

} else {
var statearr_15957_18238 = state_15936__$1;
(statearr_15957_18238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (25))){
var inst_15926 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15958_18244 = state_15936__$1;
(statearr_15958_18244[(2)] = inst_15926);

(statearr_15958_18244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (17))){
var inst_15891 = (state_15936[(10)]);
var inst_15900 = cljs.core.first(inst_15891);
var inst_15901 = cljs.core.async.muxch_STAR_(inst_15900);
var inst_15902 = cljs.core.async.close_BANG_(inst_15901);
var inst_15903 = cljs.core.next(inst_15891);
var inst_15877 = inst_15903;
var inst_15878 = null;
var inst_15879 = (0);
var inst_15880 = (0);
var state_15936__$1 = (function (){var statearr_15959 = state_15936;
(statearr_15959[(12)] = inst_15878);

(statearr_15959[(13)] = inst_15877);

(statearr_15959[(14)] = inst_15880);

(statearr_15959[(15)] = inst_15879);

(statearr_15959[(16)] = inst_15902);

return statearr_15959;
})();
var statearr_15960_18252 = state_15936__$1;
(statearr_15960_18252[(2)] = null);

(statearr_15960_18252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (3))){
var inst_15934 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15936__$1,inst_15934);
} else {
if((state_val_15937 === (12))){
var inst_15911 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15961_18256 = state_15936__$1;
(statearr_15961_18256[(2)] = inst_15911);

(statearr_15961_18256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (2))){
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15936__$1,(4),ch);
} else {
if((state_val_15937 === (23))){
var state_15936__$1 = state_15936;
var statearr_15962_18269 = state_15936__$1;
(statearr_15962_18269[(2)] = null);

(statearr_15962_18269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (19))){
var inst_15917 = (state_15936[(11)]);
var inst_15867 = (state_15936[(8)]);
var inst_15919 = cljs.core.async.muxch_STAR_(inst_15917);
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15936__$1,(22),inst_15919,inst_15867);
} else {
if((state_val_15937 === (11))){
var inst_15877 = (state_15936[(13)]);
var inst_15891 = (state_15936[(10)]);
var inst_15891__$1 = cljs.core.seq(inst_15877);
var state_15936__$1 = (function (){var statearr_15963 = state_15936;
(statearr_15963[(10)] = inst_15891__$1);

return statearr_15963;
})();
if(inst_15891__$1){
var statearr_15964_18276 = state_15936__$1;
(statearr_15964_18276[(1)] = (13));

} else {
var statearr_15965_18281 = state_15936__$1;
(statearr_15965_18281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (9))){
var inst_15913 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15968_18284 = state_15936__$1;
(statearr_15968_18284[(2)] = inst_15913);

(statearr_15968_18284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (5))){
var inst_15874 = cljs.core.deref(mults);
var inst_15875 = cljs.core.vals(inst_15874);
var inst_15876 = cljs.core.seq(inst_15875);
var inst_15877 = inst_15876;
var inst_15878 = null;
var inst_15879 = (0);
var inst_15880 = (0);
var state_15936__$1 = (function (){var statearr_15973 = state_15936;
(statearr_15973[(12)] = inst_15878);

(statearr_15973[(13)] = inst_15877);

(statearr_15973[(14)] = inst_15880);

(statearr_15973[(15)] = inst_15879);

return statearr_15973;
})();
var statearr_15974_18292 = state_15936__$1;
(statearr_15974_18292[(2)] = null);

(statearr_15974_18292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (14))){
var state_15936__$1 = state_15936;
var statearr_15978_18298 = state_15936__$1;
(statearr_15978_18298[(2)] = null);

(statearr_15978_18298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (16))){
var inst_15891 = (state_15936[(10)]);
var inst_15895 = cljs.core.chunk_first(inst_15891);
var inst_15896 = cljs.core.chunk_rest(inst_15891);
var inst_15897 = cljs.core.count(inst_15895);
var inst_15877 = inst_15896;
var inst_15878 = inst_15895;
var inst_15879 = inst_15897;
var inst_15880 = (0);
var state_15936__$1 = (function (){var statearr_15980 = state_15936;
(statearr_15980[(12)] = inst_15878);

(statearr_15980[(13)] = inst_15877);

(statearr_15980[(14)] = inst_15880);

(statearr_15980[(15)] = inst_15879);

return statearr_15980;
})();
var statearr_15982_18300 = state_15936__$1;
(statearr_15982_18300[(2)] = null);

(statearr_15982_18300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (10))){
var inst_15878 = (state_15936[(12)]);
var inst_15877 = (state_15936[(13)]);
var inst_15880 = (state_15936[(14)]);
var inst_15879 = (state_15936[(15)]);
var inst_15885 = cljs.core._nth(inst_15878,inst_15880);
var inst_15886 = cljs.core.async.muxch_STAR_(inst_15885);
var inst_15887 = cljs.core.async.close_BANG_(inst_15886);
var inst_15888 = (inst_15880 + (1));
var tmp15975 = inst_15878;
var tmp15976 = inst_15877;
var tmp15977 = inst_15879;
var inst_15877__$1 = tmp15976;
var inst_15878__$1 = tmp15975;
var inst_15879__$1 = tmp15977;
var inst_15880__$1 = inst_15888;
var state_15936__$1 = (function (){var statearr_15992 = state_15936;
(statearr_15992[(12)] = inst_15878__$1);

(statearr_15992[(17)] = inst_15887);

(statearr_15992[(13)] = inst_15877__$1);

(statearr_15992[(14)] = inst_15880__$1);

(statearr_15992[(15)] = inst_15879__$1);

return statearr_15992;
})();
var statearr_15994_18316 = state_15936__$1;
(statearr_15994_18316[(2)] = null);

(statearr_15994_18316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (18))){
var inst_15906 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15997_18317 = state_15936__$1;
(statearr_15997_18317[(2)] = inst_15906);

(statearr_15997_18317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (8))){
var inst_15880 = (state_15936[(14)]);
var inst_15879 = (state_15936[(15)]);
var inst_15882 = (inst_15880 < inst_15879);
var inst_15883 = inst_15882;
var state_15936__$1 = state_15936;
if(cljs.core.truth_(inst_15883)){
var statearr_15999_18318 = state_15936__$1;
(statearr_15999_18318[(1)] = (10));

} else {
var statearr_16000_18319 = state_15936__$1;
(statearr_16000_18319[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16009[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16009[(1)] = (1));

return statearr_16009;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_15936){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_15936);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16014){var ex__13984__auto__ = e16014;
var statearr_16015_18327 = state_15936;
(statearr_16015_18327[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_15936[(4)]))){
var statearr_16016_18328 = state_15936;
(statearr_16016_18328[(1)] = cljs.core.first((state_15936[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18334 = state_15936;
state_15936 = G__18334;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_15936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_15936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16020 = f__14121__auto__();
(statearr_16020[(6)] = c__14120__auto___18191);

return statearr_16020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16029 = arguments.length;
switch (G__16029) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16050 = arguments.length;
switch (G__16050) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16065 = arguments.length;
switch (G__16065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14120__auto___18363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16142){
var state_val_16143 = (state_16142[(1)]);
if((state_val_16143 === (7))){
var state_16142__$1 = state_16142;
var statearr_16144_18365 = state_16142__$1;
(statearr_16144_18365[(2)] = null);

(statearr_16144_18365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (1))){
var state_16142__$1 = state_16142;
var statearr_16146_18368 = state_16142__$1;
(statearr_16146_18368[(2)] = null);

(statearr_16146_18368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (4))){
var inst_16093 = (state_16142[(7)]);
var inst_16095 = (state_16142[(8)]);
var inst_16098 = (inst_16095 < inst_16093);
var state_16142__$1 = state_16142;
if(cljs.core.truth_(inst_16098)){
var statearr_16150_18369 = state_16142__$1;
(statearr_16150_18369[(1)] = (6));

} else {
var statearr_16151_18370 = state_16142__$1;
(statearr_16151_18370[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (15))){
var inst_16125 = (state_16142[(9)]);
var inst_16130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16125);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16142__$1,(17),out,inst_16130);
} else {
if((state_val_16143 === (13))){
var inst_16125 = (state_16142[(9)]);
var inst_16125__$1 = (state_16142[(2)]);
var inst_16126 = cljs.core.some(cljs.core.nil_QMARK_,inst_16125__$1);
var state_16142__$1 = (function (){var statearr_16156 = state_16142;
(statearr_16156[(9)] = inst_16125__$1);

return statearr_16156;
})();
if(cljs.core.truth_(inst_16126)){
var statearr_16158_18371 = state_16142__$1;
(statearr_16158_18371[(1)] = (14));

} else {
var statearr_16163_18372 = state_16142__$1;
(statearr_16163_18372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (6))){
var state_16142__$1 = state_16142;
var statearr_16174_18374 = state_16142__$1;
(statearr_16174_18374[(2)] = null);

(statearr_16174_18374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (17))){
var inst_16132 = (state_16142[(2)]);
var state_16142__$1 = (function (){var statearr_16181 = state_16142;
(statearr_16181[(10)] = inst_16132);

return statearr_16181;
})();
var statearr_16182_18378 = state_16142__$1;
(statearr_16182_18378[(2)] = null);

(statearr_16182_18378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (3))){
var inst_16137 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16142__$1,inst_16137);
} else {
if((state_val_16143 === (12))){
var _ = (function (){var statearr_16183 = state_16142;
(statearr_16183[(4)] = cljs.core.rest((state_16142[(4)])));

return statearr_16183;
})();
var state_16142__$1 = state_16142;
var ex16180 = (state_16142__$1[(2)]);
var statearr_16185_18382 = state_16142__$1;
(statearr_16185_18382[(5)] = ex16180);


if((ex16180 instanceof Object)){
var statearr_16186_18383 = state_16142__$1;
(statearr_16186_18383[(1)] = (11));

(statearr_16186_18383[(5)] = null);

} else {
throw ex16180;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (2))){
var inst_16092 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16093 = cnt;
var inst_16095 = (0);
var state_16142__$1 = (function (){var statearr_16187 = state_16142;
(statearr_16187[(11)] = inst_16092);

(statearr_16187[(7)] = inst_16093);

(statearr_16187[(8)] = inst_16095);

return statearr_16187;
})();
var statearr_16190_18384 = state_16142__$1;
(statearr_16190_18384[(2)] = null);

(statearr_16190_18384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (11))){
var inst_16100 = (state_16142[(2)]);
var inst_16101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16142__$1 = (function (){var statearr_16192 = state_16142;
(statearr_16192[(12)] = inst_16100);

return statearr_16192;
})();
var statearr_16193_18385 = state_16142__$1;
(statearr_16193_18385[(2)] = inst_16101);

(statearr_16193_18385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (9))){
var inst_16095 = (state_16142[(8)]);
var _ = (function (){var statearr_16194 = state_16142;
(statearr_16194[(4)] = cljs.core.cons((12),(state_16142[(4)])));

return statearr_16194;
})();
var inst_16110 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16095) : chs__$1.call(null,inst_16095));
var inst_16112 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16095) : done.call(null,inst_16095));
var inst_16113 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16110,inst_16112);
var ___$1 = (function (){var statearr_16195 = state_16142;
(statearr_16195[(4)] = cljs.core.rest((state_16142[(4)])));

return statearr_16195;
})();
var state_16142__$1 = state_16142;
var statearr_16196_18386 = state_16142__$1;
(statearr_16196_18386[(2)] = inst_16113);

(statearr_16196_18386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (5))){
var inst_16123 = (state_16142[(2)]);
var state_16142__$1 = (function (){var statearr_16197 = state_16142;
(statearr_16197[(13)] = inst_16123);

return statearr_16197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16142__$1,(13),dchan);
} else {
if((state_val_16143 === (14))){
var inst_16128 = cljs.core.async.close_BANG_(out);
var state_16142__$1 = state_16142;
var statearr_16198_18387 = state_16142__$1;
(statearr_16198_18387[(2)] = inst_16128);

(statearr_16198_18387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (16))){
var inst_16135 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16199_18390 = state_16142__$1;
(statearr_16199_18390[(2)] = inst_16135);

(statearr_16199_18390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (10))){
var inst_16095 = (state_16142[(8)]);
var inst_16116 = (state_16142[(2)]);
var inst_16117 = (inst_16095 + (1));
var inst_16095__$1 = inst_16117;
var state_16142__$1 = (function (){var statearr_16200 = state_16142;
(statearr_16200[(8)] = inst_16095__$1);

(statearr_16200[(14)] = inst_16116);

return statearr_16200;
})();
var statearr_16201_18391 = state_16142__$1;
(statearr_16201_18391[(2)] = null);

(statearr_16201_18391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16143 === (8))){
var inst_16121 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16202_18392 = state_16142__$1;
(statearr_16202_18392[(2)] = inst_16121);

(statearr_16202_18392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16203[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16203[(1)] = (1));

return statearr_16203;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16142){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16142);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16204){var ex__13984__auto__ = e16204;
var statearr_16205_18396 = state_16142;
(statearr_16205_18396[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16142[(4)]))){
var statearr_16206_18398 = state_16142;
(statearr_16206_18398[(1)] = cljs.core.first((state_16142[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18399 = state_16142;
state_16142 = G__18399;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16209 = f__14121__auto__();
(statearr_16209[(6)] = c__14120__auto___18363);

return statearr_16209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16214 = arguments.length;
switch (G__16214) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16266){
var state_val_16267 = (state_16266[(1)]);
if((state_val_16267 === (7))){
var inst_16230 = (state_16266[(7)]);
var inst_16231 = (state_16266[(8)]);
var inst_16230__$1 = (state_16266[(2)]);
var inst_16231__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16230__$1,(0),null);
var inst_16232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16230__$1,(1),null);
var inst_16233 = (inst_16231__$1 == null);
var state_16266__$1 = (function (){var statearr_16268 = state_16266;
(statearr_16268[(9)] = inst_16232);

(statearr_16268[(7)] = inst_16230__$1);

(statearr_16268[(8)] = inst_16231__$1);

return statearr_16268;
})();
if(cljs.core.truth_(inst_16233)){
var statearr_16269_18404 = state_16266__$1;
(statearr_16269_18404[(1)] = (8));

} else {
var statearr_16270_18405 = state_16266__$1;
(statearr_16270_18405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (1))){
var inst_16216 = cljs.core.vec(chs);
var inst_16218 = inst_16216;
var state_16266__$1 = (function (){var statearr_16271 = state_16266;
(statearr_16271[(10)] = inst_16218);

return statearr_16271;
})();
var statearr_16272_18406 = state_16266__$1;
(statearr_16272_18406[(2)] = null);

(statearr_16272_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (4))){
var inst_16218 = (state_16266[(10)]);
var state_16266__$1 = state_16266;
return cljs.core.async.ioc_alts_BANG_(state_16266__$1,(7),inst_16218);
} else {
if((state_val_16267 === (6))){
var inst_16262 = (state_16266[(2)]);
var state_16266__$1 = state_16266;
var statearr_16273_18407 = state_16266__$1;
(statearr_16273_18407[(2)] = inst_16262);

(statearr_16273_18407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (3))){
var inst_16264 = (state_16266[(2)]);
var state_16266__$1 = state_16266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16266__$1,inst_16264);
} else {
if((state_val_16267 === (2))){
var inst_16218 = (state_16266[(10)]);
var inst_16221 = cljs.core.count(inst_16218);
var inst_16222 = (inst_16221 > (0));
var state_16266__$1 = state_16266;
if(cljs.core.truth_(inst_16222)){
var statearr_16285_18412 = state_16266__$1;
(statearr_16285_18412[(1)] = (4));

} else {
var statearr_16286_18413 = state_16266__$1;
(statearr_16286_18413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (11))){
var inst_16218 = (state_16266[(10)]);
var inst_16255 = (state_16266[(2)]);
var tmp16282 = inst_16218;
var inst_16218__$1 = tmp16282;
var state_16266__$1 = (function (){var statearr_16289 = state_16266;
(statearr_16289[(11)] = inst_16255);

(statearr_16289[(10)] = inst_16218__$1);

return statearr_16289;
})();
var statearr_16290_18414 = state_16266__$1;
(statearr_16290_18414[(2)] = null);

(statearr_16290_18414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (9))){
var inst_16231 = (state_16266[(8)]);
var state_16266__$1 = state_16266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16266__$1,(11),out,inst_16231);
} else {
if((state_val_16267 === (5))){
var inst_16260 = cljs.core.async.close_BANG_(out);
var state_16266__$1 = state_16266;
var statearr_16293_18423 = state_16266__$1;
(statearr_16293_18423[(2)] = inst_16260);

(statearr_16293_18423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (10))){
var inst_16258 = (state_16266[(2)]);
var state_16266__$1 = state_16266;
var statearr_16294_18427 = state_16266__$1;
(statearr_16294_18427[(2)] = inst_16258);

(statearr_16294_18427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16267 === (8))){
var inst_16232 = (state_16266[(9)]);
var inst_16230 = (state_16266[(7)]);
var inst_16218 = (state_16266[(10)]);
var inst_16231 = (state_16266[(8)]);
var inst_16235 = (function (){var cs = inst_16218;
var vec__16226 = inst_16230;
var v = inst_16231;
var c = inst_16232;
return (function (p1__16212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16212_SHARP_);
});
})();
var inst_16251 = cljs.core.filterv(inst_16235,inst_16218);
var inst_16218__$1 = inst_16251;
var state_16266__$1 = (function (){var statearr_16302 = state_16266;
(statearr_16302[(10)] = inst_16218__$1);

return statearr_16302;
})();
var statearr_16303_18438 = state_16266__$1;
(statearr_16303_18438[(2)] = null);

(statearr_16303_18438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16304[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16304[(1)] = (1));

return statearr_16304;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16266){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16266);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16305){var ex__13984__auto__ = e16305;
var statearr_16306_18443 = state_16266;
(statearr_16306_18443[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16266[(4)]))){
var statearr_16307_18444 = state_16266;
(statearr_16307_18444[(1)] = cljs.core.first((state_16266[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18448 = state_16266;
state_16266 = G__18448;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16309 = f__14121__auto__();
(statearr_16309[(6)] = c__14120__auto___18403);

return statearr_16309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16315 = arguments.length;
switch (G__16315) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16339){
var state_val_16340 = (state_16339[(1)]);
if((state_val_16340 === (7))){
var inst_16321 = (state_16339[(7)]);
var inst_16321__$1 = (state_16339[(2)]);
var inst_16322 = (inst_16321__$1 == null);
var inst_16323 = cljs.core.not(inst_16322);
var state_16339__$1 = (function (){var statearr_16342 = state_16339;
(statearr_16342[(7)] = inst_16321__$1);

return statearr_16342;
})();
if(inst_16323){
var statearr_16343_18452 = state_16339__$1;
(statearr_16343_18452[(1)] = (8));

} else {
var statearr_16344_18453 = state_16339__$1;
(statearr_16344_18453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (1))){
var inst_16316 = (0);
var state_16339__$1 = (function (){var statearr_16346 = state_16339;
(statearr_16346[(8)] = inst_16316);

return statearr_16346;
})();
var statearr_16347_18457 = state_16339__$1;
(statearr_16347_18457[(2)] = null);

(statearr_16347_18457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (4))){
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16339__$1,(7),ch);
} else {
if((state_val_16340 === (6))){
var inst_16334 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16348_18459 = state_16339__$1;
(statearr_16348_18459[(2)] = inst_16334);

(statearr_16348_18459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (3))){
var inst_16336 = (state_16339[(2)]);
var inst_16337 = cljs.core.async.close_BANG_(out);
var state_16339__$1 = (function (){var statearr_16349 = state_16339;
(statearr_16349[(9)] = inst_16336);

return statearr_16349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16339__$1,inst_16337);
} else {
if((state_val_16340 === (2))){
var inst_16316 = (state_16339[(8)]);
var inst_16318 = (inst_16316 < n);
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16318)){
var statearr_16350_18463 = state_16339__$1;
(statearr_16350_18463[(1)] = (4));

} else {
var statearr_16351_18464 = state_16339__$1;
(statearr_16351_18464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (11))){
var inst_16316 = (state_16339[(8)]);
var inst_16326 = (state_16339[(2)]);
var inst_16327 = (inst_16316 + (1));
var inst_16316__$1 = inst_16327;
var state_16339__$1 = (function (){var statearr_16352 = state_16339;
(statearr_16352[(8)] = inst_16316__$1);

(statearr_16352[(10)] = inst_16326);

return statearr_16352;
})();
var statearr_16353_18465 = state_16339__$1;
(statearr_16353_18465[(2)] = null);

(statearr_16353_18465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (9))){
var state_16339__$1 = state_16339;
var statearr_16355_18466 = state_16339__$1;
(statearr_16355_18466[(2)] = null);

(statearr_16355_18466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (5))){
var state_16339__$1 = state_16339;
var statearr_16356_18468 = state_16339__$1;
(statearr_16356_18468[(2)] = null);

(statearr_16356_18468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (10))){
var inst_16331 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16357_18473 = state_16339__$1;
(statearr_16357_18473[(2)] = inst_16331);

(statearr_16357_18473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (8))){
var inst_16321 = (state_16339[(7)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16339__$1,(11),out,inst_16321);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16358[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16358[(1)] = (1));

return statearr_16358;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16339){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16339);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16359){var ex__13984__auto__ = e16359;
var statearr_16360_18478 = state_16339;
(statearr_16360_18478[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16339[(4)]))){
var statearr_16361_18479 = state_16339;
(statearr_16361_18479[(1)] = cljs.core.first((state_16339[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18480 = state_16339;
state_16339 = G__18480;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16363 = f__14121__auto__();
(statearr_16363[(6)] = c__14120__auto___18451);

return statearr_16363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16365 = (function (f,ch,meta16366){
this.f = f;
this.ch = ch;
this.meta16366 = meta16366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16367,meta16366__$1){
var self__ = this;
var _16367__$1 = this;
return (new cljs.core.async.t_cljs$core$async16365(self__.f,self__.ch,meta16366__$1));
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16367){
var self__ = this;
var _16367__$1 = this;
return self__.meta16366;
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16375 = (function (f,ch,meta16366,_,fn1,meta16376){
this.f = f;
this.ch = ch;
this.meta16366 = meta16366;
this._ = _;
this.fn1 = fn1;
this.meta16376 = meta16376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16377,meta16376__$1){
var self__ = this;
var _16377__$1 = this;
return (new cljs.core.async.t_cljs$core$async16375(self__.f,self__.ch,self__.meta16366,self__._,self__.fn1,meta16376__$1));
}));

(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16377){
var self__ = this;
var _16377__$1 = this;
return self__.meta16376;
}));

(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16364_SHARP_){
var G__16380 = (((p1__16364_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16364_SHARP_) : self__.f.call(null,p1__16364_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16380) : f1.call(null,G__16380));
});
}));

(cljs.core.async.t_cljs$core$async16375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16366","meta16366",-1346003111,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16365","cljs.core.async/t_cljs$core$async16365",1952521360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16376","meta16376",647476317,null)], null);
}));

(cljs.core.async.t_cljs$core$async16375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16375");

(cljs.core.async.t_cljs$core$async16375.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16375.
 */
cljs.core.async.__GT_t_cljs$core$async16375 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16375(f__$1,ch__$1,meta16366__$1,___$2,fn1__$1,meta16376){
return (new cljs.core.async.t_cljs$core$async16375(f__$1,ch__$1,meta16366__$1,___$2,fn1__$1,meta16376));
});

}

return (new cljs.core.async.t_cljs$core$async16375(self__.f,self__.ch,self__.meta16366,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16382 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16382) : self__.f.call(null,G__16382));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16366","meta16366",-1346003111,null)], null);
}));

(cljs.core.async.t_cljs$core$async16365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16365");

(cljs.core.async.t_cljs$core$async16365.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16365.
 */
cljs.core.async.__GT_t_cljs$core$async16365 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16365(f__$1,ch__$1,meta16366){
return (new cljs.core.async.t_cljs$core$async16365(f__$1,ch__$1,meta16366));
});

}

return (new cljs.core.async.t_cljs$core$async16365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16391 = (function (f,ch,meta16392){
this.f = f;
this.ch = ch;
this.meta16392 = meta16392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16393,meta16392__$1){
var self__ = this;
var _16393__$1 = this;
return (new cljs.core.async.t_cljs$core$async16391(self__.f,self__.ch,meta16392__$1));
}));

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16393){
var self__ = this;
var _16393__$1 = this;
return self__.meta16392;
}));

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16392","meta16392",-1672854843,null)], null);
}));

(cljs.core.async.t_cljs$core$async16391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16391");

(cljs.core.async.t_cljs$core$async16391.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16391.
 */
cljs.core.async.__GT_t_cljs$core$async16391 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16391(f__$1,ch__$1,meta16392){
return (new cljs.core.async.t_cljs$core$async16391(f__$1,ch__$1,meta16392));
});

}

return (new cljs.core.async.t_cljs$core$async16391(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16408 = (function (p,ch,meta16409){
this.p = p;
this.ch = ch;
this.meta16409 = meta16409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16410,meta16409__$1){
var self__ = this;
var _16410__$1 = this;
return (new cljs.core.async.t_cljs$core$async16408(self__.p,self__.ch,meta16409__$1));
}));

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16410){
var self__ = this;
var _16410__$1 = this;
return self__.meta16409;
}));

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16409","meta16409",-1556331413,null)], null);
}));

(cljs.core.async.t_cljs$core$async16408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16408");

(cljs.core.async.t_cljs$core$async16408.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16408.
 */
cljs.core.async.__GT_t_cljs$core$async16408 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16408(p__$1,ch__$1,meta16409){
return (new cljs.core.async.t_cljs$core$async16408(p__$1,ch__$1,meta16409));
});

}

return (new cljs.core.async.t_cljs$core$async16408(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16449 = arguments.length;
switch (G__16449) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16488){
var state_val_16489 = (state_16488[(1)]);
if((state_val_16489 === (7))){
var inst_16483 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16499_18572 = state_16488__$1;
(statearr_16499_18572[(2)] = inst_16483);

(statearr_16499_18572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (1))){
var state_16488__$1 = state_16488;
var statearr_16501_18573 = state_16488__$1;
(statearr_16501_18573[(2)] = null);

(statearr_16501_18573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (4))){
var inst_16465 = (state_16488[(7)]);
var inst_16465__$1 = (state_16488[(2)]);
var inst_16470 = (inst_16465__$1 == null);
var state_16488__$1 = (function (){var statearr_16504 = state_16488;
(statearr_16504[(7)] = inst_16465__$1);

return statearr_16504;
})();
if(cljs.core.truth_(inst_16470)){
var statearr_16505_18581 = state_16488__$1;
(statearr_16505_18581[(1)] = (5));

} else {
var statearr_16506_18582 = state_16488__$1;
(statearr_16506_18582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (6))){
var inst_16465 = (state_16488[(7)]);
var inst_16474 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16465) : p.call(null,inst_16465));
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16474)){
var statearr_16509_18585 = state_16488__$1;
(statearr_16509_18585[(1)] = (8));

} else {
var statearr_16511_18589 = state_16488__$1;
(statearr_16511_18589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (3))){
var inst_16485 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16488__$1,inst_16485);
} else {
if((state_val_16489 === (2))){
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(4),ch);
} else {
if((state_val_16489 === (11))){
var inst_16477 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16512_18593 = state_16488__$1;
(statearr_16512_18593[(2)] = inst_16477);

(statearr_16512_18593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (9))){
var state_16488__$1 = state_16488;
var statearr_16518_18595 = state_16488__$1;
(statearr_16518_18595[(2)] = null);

(statearr_16518_18595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (5))){
var inst_16472 = cljs.core.async.close_BANG_(out);
var state_16488__$1 = state_16488;
var statearr_16520_18596 = state_16488__$1;
(statearr_16520_18596[(2)] = inst_16472);

(statearr_16520_18596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (10))){
var inst_16480 = (state_16488[(2)]);
var state_16488__$1 = (function (){var statearr_16521 = state_16488;
(statearr_16521[(8)] = inst_16480);

return statearr_16521;
})();
var statearr_16522_18597 = state_16488__$1;
(statearr_16522_18597[(2)] = null);

(statearr_16522_18597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (8))){
var inst_16465 = (state_16488[(7)]);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16488__$1,(11),out,inst_16465);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16524 = [null,null,null,null,null,null,null,null,null];
(statearr_16524[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16488){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16488);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16525){var ex__13984__auto__ = e16525;
var statearr_16526_18599 = state_16488;
(statearr_16526_18599[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16488[(4)]))){
var statearr_16529_18606 = state_16488;
(statearr_16529_18606[(1)] = cljs.core.first((state_16488[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18608 = state_16488;
state_16488 = G__18608;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16536 = f__14121__auto__();
(statearr_16536[(6)] = c__14120__auto___18569);

return statearr_16536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16541 = arguments.length;
switch (G__16541) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16621){
var state_val_16622 = (state_16621[(1)]);
if((state_val_16622 === (7))){
var inst_16617 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16625_18623 = state_16621__$1;
(statearr_16625_18623[(2)] = inst_16617);

(statearr_16625_18623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (20))){
var inst_16584 = (state_16621[(7)]);
var inst_16598 = (state_16621[(2)]);
var inst_16599 = cljs.core.next(inst_16584);
var inst_16567 = inst_16599;
var inst_16568 = null;
var inst_16569 = (0);
var inst_16570 = (0);
var state_16621__$1 = (function (){var statearr_16626 = state_16621;
(statearr_16626[(8)] = inst_16570);

(statearr_16626[(9)] = inst_16569);

(statearr_16626[(10)] = inst_16568);

(statearr_16626[(11)] = inst_16598);

(statearr_16626[(12)] = inst_16567);

return statearr_16626;
})();
var statearr_16627_18630 = state_16621__$1;
(statearr_16627_18630[(2)] = null);

(statearr_16627_18630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (1))){
var state_16621__$1 = state_16621;
var statearr_16628_18634 = state_16621__$1;
(statearr_16628_18634[(2)] = null);

(statearr_16628_18634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (4))){
var inst_16553 = (state_16621[(13)]);
var inst_16553__$1 = (state_16621[(2)]);
var inst_16556 = (inst_16553__$1 == null);
var state_16621__$1 = (function (){var statearr_16631 = state_16621;
(statearr_16631[(13)] = inst_16553__$1);

return statearr_16631;
})();
if(cljs.core.truth_(inst_16556)){
var statearr_16632_18635 = state_16621__$1;
(statearr_16632_18635[(1)] = (5));

} else {
var statearr_16633_18636 = state_16621__$1;
(statearr_16633_18636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (15))){
var state_16621__$1 = state_16621;
var statearr_16642_18637 = state_16621__$1;
(statearr_16642_18637[(2)] = null);

(statearr_16642_18637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (21))){
var state_16621__$1 = state_16621;
var statearr_16648_18638 = state_16621__$1;
(statearr_16648_18638[(2)] = null);

(statearr_16648_18638[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (13))){
var inst_16570 = (state_16621[(8)]);
var inst_16569 = (state_16621[(9)]);
var inst_16568 = (state_16621[(10)]);
var inst_16567 = (state_16621[(12)]);
var inst_16580 = (state_16621[(2)]);
var inst_16581 = (inst_16570 + (1));
var tmp16634 = inst_16569;
var tmp16635 = inst_16568;
var tmp16636 = inst_16567;
var inst_16567__$1 = tmp16636;
var inst_16568__$1 = tmp16635;
var inst_16569__$1 = tmp16634;
var inst_16570__$1 = inst_16581;
var state_16621__$1 = (function (){var statearr_16661 = state_16621;
(statearr_16661[(8)] = inst_16570__$1);

(statearr_16661[(9)] = inst_16569__$1);

(statearr_16661[(14)] = inst_16580);

(statearr_16661[(10)] = inst_16568__$1);

(statearr_16661[(12)] = inst_16567__$1);

return statearr_16661;
})();
var statearr_16664_18646 = state_16621__$1;
(statearr_16664_18646[(2)] = null);

(statearr_16664_18646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (22))){
var state_16621__$1 = state_16621;
var statearr_16666_18650 = state_16621__$1;
(statearr_16666_18650[(2)] = null);

(statearr_16666_18650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (6))){
var inst_16553 = (state_16621[(13)]);
var inst_16565 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16553) : f.call(null,inst_16553));
var inst_16566 = cljs.core.seq(inst_16565);
var inst_16567 = inst_16566;
var inst_16568 = null;
var inst_16569 = (0);
var inst_16570 = (0);
var state_16621__$1 = (function (){var statearr_16667 = state_16621;
(statearr_16667[(8)] = inst_16570);

(statearr_16667[(9)] = inst_16569);

(statearr_16667[(10)] = inst_16568);

(statearr_16667[(12)] = inst_16567);

return statearr_16667;
})();
var statearr_16676_18652 = state_16621__$1;
(statearr_16676_18652[(2)] = null);

(statearr_16676_18652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (17))){
var inst_16584 = (state_16621[(7)]);
var inst_16590 = cljs.core.chunk_first(inst_16584);
var inst_16591 = cljs.core.chunk_rest(inst_16584);
var inst_16593 = cljs.core.count(inst_16590);
var inst_16567 = inst_16591;
var inst_16568 = inst_16590;
var inst_16569 = inst_16593;
var inst_16570 = (0);
var state_16621__$1 = (function (){var statearr_16690 = state_16621;
(statearr_16690[(8)] = inst_16570);

(statearr_16690[(9)] = inst_16569);

(statearr_16690[(10)] = inst_16568);

(statearr_16690[(12)] = inst_16567);

return statearr_16690;
})();
var statearr_16691_18656 = state_16621__$1;
(statearr_16691_18656[(2)] = null);

(statearr_16691_18656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (3))){
var inst_16619 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16621__$1,inst_16619);
} else {
if((state_val_16622 === (12))){
var inst_16607 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16692_18657 = state_16621__$1;
(statearr_16692_18657[(2)] = inst_16607);

(statearr_16692_18657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (2))){
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16621__$1,(4),in$);
} else {
if((state_val_16622 === (23))){
var inst_16615 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16695_18660 = state_16621__$1;
(statearr_16695_18660[(2)] = inst_16615);

(statearr_16695_18660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (19))){
var inst_16602 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16697_18662 = state_16621__$1;
(statearr_16697_18662[(2)] = inst_16602);

(statearr_16697_18662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (11))){
var inst_16584 = (state_16621[(7)]);
var inst_16567 = (state_16621[(12)]);
var inst_16584__$1 = cljs.core.seq(inst_16567);
var state_16621__$1 = (function (){var statearr_16699 = state_16621;
(statearr_16699[(7)] = inst_16584__$1);

return statearr_16699;
})();
if(inst_16584__$1){
var statearr_16700_18663 = state_16621__$1;
(statearr_16700_18663[(1)] = (14));

} else {
var statearr_16701_18664 = state_16621__$1;
(statearr_16701_18664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (9))){
var inst_16609 = (state_16621[(2)]);
var inst_16610 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16621__$1 = (function (){var statearr_16702 = state_16621;
(statearr_16702[(15)] = inst_16609);

return statearr_16702;
})();
if(cljs.core.truth_(inst_16610)){
var statearr_16703_18666 = state_16621__$1;
(statearr_16703_18666[(1)] = (21));

} else {
var statearr_16705_18669 = state_16621__$1;
(statearr_16705_18669[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (5))){
var inst_16558 = cljs.core.async.close_BANG_(out);
var state_16621__$1 = state_16621;
var statearr_16707_18670 = state_16621__$1;
(statearr_16707_18670[(2)] = inst_16558);

(statearr_16707_18670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (14))){
var inst_16584 = (state_16621[(7)]);
var inst_16588 = cljs.core.chunked_seq_QMARK_(inst_16584);
var state_16621__$1 = state_16621;
if(inst_16588){
var statearr_16708_18672 = state_16621__$1;
(statearr_16708_18672[(1)] = (17));

} else {
var statearr_16709_18673 = state_16621__$1;
(statearr_16709_18673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (16))){
var inst_16605 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16710_18674 = state_16621__$1;
(statearr_16710_18674[(2)] = inst_16605);

(statearr_16710_18674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (10))){
var inst_16570 = (state_16621[(8)]);
var inst_16568 = (state_16621[(10)]);
var inst_16578 = cljs.core._nth(inst_16568,inst_16570);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16621__$1,(13),out,inst_16578);
} else {
if((state_val_16622 === (18))){
var inst_16584 = (state_16621[(7)]);
var inst_16596 = cljs.core.first(inst_16584);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16621__$1,(20),out,inst_16596);
} else {
if((state_val_16622 === (8))){
var inst_16570 = (state_16621[(8)]);
var inst_16569 = (state_16621[(9)]);
var inst_16572 = (inst_16570 < inst_16569);
var inst_16573 = inst_16572;
var state_16621__$1 = state_16621;
if(cljs.core.truth_(inst_16573)){
var statearr_16715_18680 = state_16621__$1;
(statearr_16715_18680[(1)] = (10));

} else {
var statearr_16716_18681 = state_16621__$1;
(statearr_16716_18681[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____0 = (function (){
var statearr_16717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16717[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__);

(statearr_16717[(1)] = (1));

return statearr_16717;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____1 = (function (state_16621){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16621);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16718){var ex__13984__auto__ = e16718;
var statearr_16719_18682 = state_16621;
(statearr_16719_18682[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16621[(4)]))){
var statearr_16720_18684 = state_16621;
(statearr_16720_18684[(1)] = cljs.core.first((state_16621[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18686 = state_16621;
state_16621 = G__18686;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__ = function(state_16621){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____1.call(this,state_16621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13981__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16741 = f__14121__auto__();
(statearr_16741[(6)] = c__14120__auto__);

return statearr_16741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));

return c__14120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16746 = arguments.length;
switch (G__16746) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16756 = arguments.length;
switch (G__16756) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16762 = arguments.length;
switch (G__16762) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16788){
var state_val_16789 = (state_16788[(1)]);
if((state_val_16789 === (7))){
var inst_16783 = (state_16788[(2)]);
var state_16788__$1 = state_16788;
var statearr_16795_18692 = state_16788__$1;
(statearr_16795_18692[(2)] = inst_16783);

(statearr_16795_18692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (1))){
var inst_16765 = null;
var state_16788__$1 = (function (){var statearr_16797 = state_16788;
(statearr_16797[(7)] = inst_16765);

return statearr_16797;
})();
var statearr_16798_18697 = state_16788__$1;
(statearr_16798_18697[(2)] = null);

(statearr_16798_18697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (4))){
var inst_16768 = (state_16788[(8)]);
var inst_16768__$1 = (state_16788[(2)]);
var inst_16769 = (inst_16768__$1 == null);
var inst_16770 = cljs.core.not(inst_16769);
var state_16788__$1 = (function (){var statearr_16800 = state_16788;
(statearr_16800[(8)] = inst_16768__$1);

return statearr_16800;
})();
if(inst_16770){
var statearr_16801_18698 = state_16788__$1;
(statearr_16801_18698[(1)] = (5));

} else {
var statearr_16802_18701 = state_16788__$1;
(statearr_16802_18701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (6))){
var state_16788__$1 = state_16788;
var statearr_16807_18706 = state_16788__$1;
(statearr_16807_18706[(2)] = null);

(statearr_16807_18706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (3))){
var inst_16785 = (state_16788[(2)]);
var inst_16786 = cljs.core.async.close_BANG_(out);
var state_16788__$1 = (function (){var statearr_16809 = state_16788;
(statearr_16809[(9)] = inst_16785);

return statearr_16809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16788__$1,inst_16786);
} else {
if((state_val_16789 === (2))){
var state_16788__$1 = state_16788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16788__$1,(4),ch);
} else {
if((state_val_16789 === (11))){
var inst_16768 = (state_16788[(8)]);
var inst_16777 = (state_16788[(2)]);
var inst_16765 = inst_16768;
var state_16788__$1 = (function (){var statearr_16811 = state_16788;
(statearr_16811[(7)] = inst_16765);

(statearr_16811[(10)] = inst_16777);

return statearr_16811;
})();
var statearr_16812_18710 = state_16788__$1;
(statearr_16812_18710[(2)] = null);

(statearr_16812_18710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (9))){
var inst_16768 = (state_16788[(8)]);
var state_16788__$1 = state_16788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16788__$1,(11),out,inst_16768);
} else {
if((state_val_16789 === (5))){
var inst_16765 = (state_16788[(7)]);
var inst_16768 = (state_16788[(8)]);
var inst_16772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16768,inst_16765);
var state_16788__$1 = state_16788;
if(inst_16772){
var statearr_16814_18714 = state_16788__$1;
(statearr_16814_18714[(1)] = (8));

} else {
var statearr_16815_18717 = state_16788__$1;
(statearr_16815_18717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (10))){
var inst_16780 = (state_16788[(2)]);
var state_16788__$1 = state_16788;
var statearr_16816_18718 = state_16788__$1;
(statearr_16816_18718[(2)] = inst_16780);

(statearr_16816_18718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16789 === (8))){
var inst_16765 = (state_16788[(7)]);
var tmp16813 = inst_16765;
var inst_16765__$1 = tmp16813;
var state_16788__$1 = (function (){var statearr_16817 = state_16788;
(statearr_16817[(7)] = inst_16765__$1);

return statearr_16817;
})();
var statearr_16819_18722 = state_16788__$1;
(statearr_16819_18722[(2)] = null);

(statearr_16819_18722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16820[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16820[(1)] = (1));

return statearr_16820;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16788){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16788);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16822){var ex__13984__auto__ = e16822;
var statearr_16823_18724 = state_16788;
(statearr_16823_18724[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16788[(4)]))){
var statearr_16824_18725 = state_16788;
(statearr_16824_18725[(1)] = cljs.core.first((state_16788[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18726 = state_16788;
state_16788 = G__18726;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16825 = f__14121__auto__();
(statearr_16825[(6)] = c__14120__auto___18691);

return statearr_16825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16827 = arguments.length;
switch (G__16827) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16868){
var state_val_16869 = (state_16868[(1)]);
if((state_val_16869 === (7))){
var inst_16864 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16871_18731 = state_16868__$1;
(statearr_16871_18731[(2)] = inst_16864);

(statearr_16871_18731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (1))){
var inst_16830 = (new Array(n));
var inst_16831 = inst_16830;
var inst_16832 = (0);
var state_16868__$1 = (function (){var statearr_16872 = state_16868;
(statearr_16872[(7)] = inst_16832);

(statearr_16872[(8)] = inst_16831);

return statearr_16872;
})();
var statearr_16873_18733 = state_16868__$1;
(statearr_16873_18733[(2)] = null);

(statearr_16873_18733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (4))){
var inst_16835 = (state_16868[(9)]);
var inst_16835__$1 = (state_16868[(2)]);
var inst_16836 = (inst_16835__$1 == null);
var inst_16837 = cljs.core.not(inst_16836);
var state_16868__$1 = (function (){var statearr_16874 = state_16868;
(statearr_16874[(9)] = inst_16835__$1);

return statearr_16874;
})();
if(inst_16837){
var statearr_16875_18735 = state_16868__$1;
(statearr_16875_18735[(1)] = (5));

} else {
var statearr_16876_18736 = state_16868__$1;
(statearr_16876_18736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (15))){
var inst_16858 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16877_18738 = state_16868__$1;
(statearr_16877_18738[(2)] = inst_16858);

(statearr_16877_18738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (13))){
var state_16868__$1 = state_16868;
var statearr_16879_18739 = state_16868__$1;
(statearr_16879_18739[(2)] = null);

(statearr_16879_18739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (6))){
var inst_16832 = (state_16868[(7)]);
var inst_16854 = (inst_16832 > (0));
var state_16868__$1 = state_16868;
if(cljs.core.truth_(inst_16854)){
var statearr_16880_18740 = state_16868__$1;
(statearr_16880_18740[(1)] = (12));

} else {
var statearr_16882_18741 = state_16868__$1;
(statearr_16882_18741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (3))){
var inst_16866 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16868__$1,inst_16866);
} else {
if((state_val_16869 === (12))){
var inst_16831 = (state_16868[(8)]);
var inst_16856 = cljs.core.vec(inst_16831);
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16868__$1,(15),out,inst_16856);
} else {
if((state_val_16869 === (2))){
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16868__$1,(4),ch);
} else {
if((state_val_16869 === (11))){
var inst_16847 = (state_16868[(2)]);
var inst_16848 = (new Array(n));
var inst_16831 = inst_16848;
var inst_16832 = (0);
var state_16868__$1 = (function (){var statearr_16883 = state_16868;
(statearr_16883[(10)] = inst_16847);

(statearr_16883[(7)] = inst_16832);

(statearr_16883[(8)] = inst_16831);

return statearr_16883;
})();
var statearr_16885_18747 = state_16868__$1;
(statearr_16885_18747[(2)] = null);

(statearr_16885_18747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (9))){
var inst_16831 = (state_16868[(8)]);
var inst_16845 = cljs.core.vec(inst_16831);
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16868__$1,(11),out,inst_16845);
} else {
if((state_val_16869 === (5))){
var inst_16832 = (state_16868[(7)]);
var inst_16840 = (state_16868[(11)]);
var inst_16835 = (state_16868[(9)]);
var inst_16831 = (state_16868[(8)]);
var inst_16839 = (inst_16831[inst_16832] = inst_16835);
var inst_16840__$1 = (inst_16832 + (1));
var inst_16841 = (inst_16840__$1 < n);
var state_16868__$1 = (function (){var statearr_16886 = state_16868;
(statearr_16886[(12)] = inst_16839);

(statearr_16886[(11)] = inst_16840__$1);

return statearr_16886;
})();
if(cljs.core.truth_(inst_16841)){
var statearr_16887_18752 = state_16868__$1;
(statearr_16887_18752[(1)] = (8));

} else {
var statearr_16888_18753 = state_16868__$1;
(statearr_16888_18753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (14))){
var inst_16861 = (state_16868[(2)]);
var inst_16862 = cljs.core.async.close_BANG_(out);
var state_16868__$1 = (function (){var statearr_16890 = state_16868;
(statearr_16890[(13)] = inst_16861);

return statearr_16890;
})();
var statearr_16891_18754 = state_16868__$1;
(statearr_16891_18754[(2)] = inst_16862);

(statearr_16891_18754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (10))){
var inst_16851 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16896_18755 = state_16868__$1;
(statearr_16896_18755[(2)] = inst_16851);

(statearr_16896_18755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (8))){
var inst_16840 = (state_16868[(11)]);
var inst_16831 = (state_16868[(8)]);
var tmp16889 = inst_16831;
var inst_16831__$1 = tmp16889;
var inst_16832 = inst_16840;
var state_16868__$1 = (function (){var statearr_16902 = state_16868;
(statearr_16902[(7)] = inst_16832);

(statearr_16902[(8)] = inst_16831__$1);

return statearr_16902;
})();
var statearr_16907_18757 = state_16868__$1;
(statearr_16907_18757[(2)] = null);

(statearr_16907_18757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_16908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16908[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_16908[(1)] = (1));

return statearr_16908;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16868){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16868);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e16909){var ex__13984__auto__ = e16909;
var statearr_16910_18758 = state_16868;
(statearr_16910_18758[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16868[(4)]))){
var statearr_16911_18760 = state_16868;
(statearr_16911_18760[(1)] = cljs.core.first((state_16868[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18762 = state_16868;
state_16868 = G__18762;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_16914 = f__14121__auto__();
(statearr_16914[(6)] = c__14120__auto___18729);

return statearr_16914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16917 = arguments.length;
switch (G__16917) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14120__auto___18767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14121__auto__ = (function (){var switch__13980__auto__ = (function (state_16971){
var state_val_16972 = (state_16971[(1)]);
if((state_val_16972 === (7))){
var inst_16965 = (state_16971[(2)]);
var state_16971__$1 = state_16971;
var statearr_16975_18768 = state_16971__$1;
(statearr_16975_18768[(2)] = inst_16965);

(statearr_16975_18768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (1))){
var inst_16918 = [];
var inst_16919 = inst_16918;
var inst_16920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16971__$1 = (function (){var statearr_16976 = state_16971;
(statearr_16976[(7)] = inst_16919);

(statearr_16976[(8)] = inst_16920);

return statearr_16976;
})();
var statearr_16977_18771 = state_16971__$1;
(statearr_16977_18771[(2)] = null);

(statearr_16977_18771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (4))){
var inst_16923 = (state_16971[(9)]);
var inst_16923__$1 = (state_16971[(2)]);
var inst_16925 = (inst_16923__$1 == null);
var inst_16926 = cljs.core.not(inst_16925);
var state_16971__$1 = (function (){var statearr_16984 = state_16971;
(statearr_16984[(9)] = inst_16923__$1);

return statearr_16984;
})();
if(inst_16926){
var statearr_16987_18774 = state_16971__$1;
(statearr_16987_18774[(1)] = (5));

} else {
var statearr_16988_18775 = state_16971__$1;
(statearr_16988_18775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (15))){
var inst_16919 = (state_16971[(7)]);
var inst_16957 = cljs.core.vec(inst_16919);
var state_16971__$1 = state_16971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16971__$1,(18),out,inst_16957);
} else {
if((state_val_16972 === (13))){
var inst_16952 = (state_16971[(2)]);
var state_16971__$1 = state_16971;
var statearr_16994_18777 = state_16971__$1;
(statearr_16994_18777[(2)] = inst_16952);

(statearr_16994_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (6))){
var inst_16919 = (state_16971[(7)]);
var inst_16954 = inst_16919.length;
var inst_16955 = (inst_16954 > (0));
var state_16971__$1 = state_16971;
if(cljs.core.truth_(inst_16955)){
var statearr_17002_18778 = state_16971__$1;
(statearr_17002_18778[(1)] = (15));

} else {
var statearr_17003_18779 = state_16971__$1;
(statearr_17003_18779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (17))){
var inst_16962 = (state_16971[(2)]);
var inst_16963 = cljs.core.async.close_BANG_(out);
var state_16971__$1 = (function (){var statearr_17004 = state_16971;
(statearr_17004[(10)] = inst_16962);

return statearr_17004;
})();
var statearr_17005_18782 = state_16971__$1;
(statearr_17005_18782[(2)] = inst_16963);

(statearr_17005_18782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (3))){
var inst_16967 = (state_16971[(2)]);
var state_16971__$1 = state_16971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16971__$1,inst_16967);
} else {
if((state_val_16972 === (12))){
var inst_16919 = (state_16971[(7)]);
var inst_16945 = cljs.core.vec(inst_16919);
var state_16971__$1 = state_16971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16971__$1,(14),out,inst_16945);
} else {
if((state_val_16972 === (2))){
var state_16971__$1 = state_16971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16971__$1,(4),ch);
} else {
if((state_val_16972 === (11))){
var inst_16923 = (state_16971[(9)]);
var inst_16919 = (state_16971[(7)]);
var inst_16934 = (state_16971[(11)]);
var inst_16942 = inst_16919.push(inst_16923);
var tmp17010 = inst_16919;
var inst_16919__$1 = tmp17010;
var inst_16920 = inst_16934;
var state_16971__$1 = (function (){var statearr_17016 = state_16971;
(statearr_17016[(12)] = inst_16942);

(statearr_17016[(7)] = inst_16919__$1);

(statearr_17016[(8)] = inst_16920);

return statearr_17016;
})();
var statearr_17019_18788 = state_16971__$1;
(statearr_17019_18788[(2)] = null);

(statearr_17019_18788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (9))){
var inst_16920 = (state_16971[(8)]);
var inst_16938 = cljs.core.keyword_identical_QMARK_(inst_16920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16971__$1 = state_16971;
var statearr_17024_18794 = state_16971__$1;
(statearr_17024_18794[(2)] = inst_16938);

(statearr_17024_18794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (5))){
var inst_16923 = (state_16971[(9)]);
var inst_16935 = (state_16971[(13)]);
var inst_16920 = (state_16971[(8)]);
var inst_16934 = (state_16971[(11)]);
var inst_16934__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16923) : f.call(null,inst_16923));
var inst_16935__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16934__$1,inst_16920);
var state_16971__$1 = (function (){var statearr_17026 = state_16971;
(statearr_17026[(13)] = inst_16935__$1);

(statearr_17026[(11)] = inst_16934__$1);

return statearr_17026;
})();
if(inst_16935__$1){
var statearr_17029_18800 = state_16971__$1;
(statearr_17029_18800[(1)] = (8));

} else {
var statearr_17030_18801 = state_16971__$1;
(statearr_17030_18801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (14))){
var inst_16923 = (state_16971[(9)]);
var inst_16934 = (state_16971[(11)]);
var inst_16947 = (state_16971[(2)]);
var inst_16948 = [];
var inst_16949 = inst_16948.push(inst_16923);
var inst_16919 = inst_16948;
var inst_16920 = inst_16934;
var state_16971__$1 = (function (){var statearr_17036 = state_16971;
(statearr_17036[(7)] = inst_16919);

(statearr_17036[(14)] = inst_16949);

(statearr_17036[(8)] = inst_16920);

(statearr_17036[(15)] = inst_16947);

return statearr_17036;
})();
var statearr_17040_18809 = state_16971__$1;
(statearr_17040_18809[(2)] = null);

(statearr_17040_18809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (16))){
var state_16971__$1 = state_16971;
var statearr_17043_18810 = state_16971__$1;
(statearr_17043_18810[(2)] = null);

(statearr_17043_18810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (10))){
var inst_16940 = (state_16971[(2)]);
var state_16971__$1 = state_16971;
if(cljs.core.truth_(inst_16940)){
var statearr_17046_18814 = state_16971__$1;
(statearr_17046_18814[(1)] = (11));

} else {
var statearr_17050_18815 = state_16971__$1;
(statearr_17050_18815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (18))){
var inst_16959 = (state_16971[(2)]);
var state_16971__$1 = state_16971;
var statearr_17056_18817 = state_16971__$1;
(statearr_17056_18817[(2)] = inst_16959);

(statearr_17056_18817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16972 === (8))){
var inst_16935 = (state_16971[(13)]);
var state_16971__$1 = state_16971;
var statearr_17057_18819 = state_16971__$1;
(statearr_17057_18819[(2)] = inst_16935);

(statearr_17057_18819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13981__auto__ = null;
var cljs$core$async$state_machine__13981__auto____0 = (function (){
var statearr_17059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17059[(0)] = cljs$core$async$state_machine__13981__auto__);

(statearr_17059[(1)] = (1));

return statearr_17059;
});
var cljs$core$async$state_machine__13981__auto____1 = (function (state_16971){
while(true){
var ret_value__13982__auto__ = (function (){try{while(true){
var result__13983__auto__ = switch__13980__auto__(state_16971);
if(cljs.core.keyword_identical_QMARK_(result__13983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13983__auto__;
}
break;
}
}catch (e17060){var ex__13984__auto__ = e17060;
var statearr_17061_18828 = state_16971;
(statearr_17061_18828[(2)] = ex__13984__auto__);


if(cljs.core.seq((state_16971[(4)]))){
var statearr_17062_18829 = state_16971;
(statearr_17062_18829[(1)] = cljs.core.first((state_16971[(4)])));

} else {
throw ex__13984__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18830 = state_16971;
state_16971 = G__18830;
continue;
} else {
return ret_value__13982__auto__;
}
break;
}
});
cljs$core$async$state_machine__13981__auto__ = function(state_16971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13981__auto____1.call(this,state_16971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13981__auto____0;
cljs$core$async$state_machine__13981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13981__auto____1;
return cljs$core$async$state_machine__13981__auto__;
})()
})();
var state__14122__auto__ = (function (){var statearr_17064 = f__14121__auto__();
(statearr_17064[(6)] = c__14120__auto___18767);

return statearr_17064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14122__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
