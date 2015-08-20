// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28076 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28076 = (function (fn_handler,f,meta28077){
this.fn_handler = fn_handler;
this.f = f;
this.meta28077 = meta28077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28078,meta28077__$1){
var self__ = this;
var _28078__$1 = this;
return (new cljs.core.async.t28076(self__.fn_handler,self__.f,meta28077__$1));
});

cljs.core.async.t28076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28078){
var self__ = this;
var _28078__$1 = this;
return self__.meta28077;
});

cljs.core.async.t28076.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28077","meta28077",1879271636,null)], null);
});

cljs.core.async.t28076.cljs$lang$type = true;

cljs.core.async.t28076.cljs$lang$ctorStr = "cljs.core.async/t28076";

cljs.core.async.t28076.cljs$lang$ctorPrWriter = (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t28076");
});

cljs.core.async.__GT_t28076 = (function cljs$core$async$fn_handler_$___GT_t28076(fn_handler__$1,f__$1,meta28077){
return (new cljs.core.async.t28076(fn_handler__$1,f__$1,meta28077));
});

}

return (new cljs.core.async.t28076(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args28081 = [];
var len__17479__auto___28084 = arguments.length;
var i__17480__auto___28085 = (0);
while(true){
if((i__17480__auto___28085 < len__17479__auto___28084)){
args28081.push((arguments[i__17480__auto___28085]));

var G__28086 = (i__17480__auto___28085 + (1));
i__17480__auto___28085 = G__28086;
continue;
} else {
}
break;
}

var G__28083 = args28081.length;
switch (G__28083) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28081.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args28088 = [];
var len__17479__auto___28091 = arguments.length;
var i__17480__auto___28092 = (0);
while(true){
if((i__17480__auto___28092 < len__17479__auto___28091)){
args28088.push((arguments[i__17480__auto___28092]));

var G__28093 = (i__17480__auto___28092 + (1));
i__17480__auto___28092 = G__28093;
continue;
} else {
}
break;
}

var G__28090 = args28088.length;
switch (G__28090) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28088.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28095 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28095);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28095,ret){
return (function (){
return fn1.call(null,val_28095);
});})(val_28095,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args28096 = [];
var len__17479__auto___28099 = arguments.length;
var i__17480__auto___28100 = (0);
while(true){
if((i__17480__auto___28100 < len__17479__auto___28099)){
args28096.push((arguments[i__17480__auto___28100]));

var G__28101 = (i__17480__auto___28100 + (1));
i__17480__auto___28100 = G__28101;
continue;
} else {
}
break;
}

var G__28098 = args28096.length;
switch (G__28098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28096.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17324__auto___28103 = n;
var x_28104 = (0);
while(true){
if((x_28104 < n__17324__auto___28103)){
(a[x_28104] = (0));

var G__28105 = (x_28104 + (1));
x_28104 = G__28105;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28106 = (i + (1));
i = G__28106;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28110 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28110 = (function (alt_flag,flag,meta28111){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28111 = meta28111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28112,meta28111__$1){
var self__ = this;
var _28112__$1 = this;
return (new cljs.core.async.t28110(self__.alt_flag,self__.flag,meta28111__$1));
});})(flag))
;

cljs.core.async.t28110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28112){
var self__ = this;
var _28112__$1 = this;
return self__.meta28111;
});})(flag))
;

cljs.core.async.t28110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28110.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28111","meta28111",167970270,null)], null);
});})(flag))
;

cljs.core.async.t28110.cljs$lang$type = true;

cljs.core.async.t28110.cljs$lang$ctorStr = "cljs.core.async/t28110";

cljs.core.async.t28110.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t28110");
});})(flag))
;

cljs.core.async.__GT_t28110 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28110(alt_flag__$1,flag__$1,meta28111){
return (new cljs.core.async.t28110(alt_flag__$1,flag__$1,meta28111));
});})(flag))
;

}

return (new cljs.core.async.t28110(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28116 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28116 = (function (alt_handler,flag,cb,meta28117){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28117 = meta28117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28118,meta28117__$1){
var self__ = this;
var _28118__$1 = this;
return (new cljs.core.async.t28116(self__.alt_handler,self__.flag,self__.cb,meta28117__$1));
});

cljs.core.async.t28116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28118){
var self__ = this;
var _28118__$1 = this;
return self__.meta28117;
});

cljs.core.async.t28116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28117","meta28117",35868192,null)], null);
});

cljs.core.async.t28116.cljs$lang$type = true;

cljs.core.async.t28116.cljs$lang$ctorStr = "cljs.core.async/t28116";

cljs.core.async.t28116.cljs$lang$ctorPrWriter = (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t28116");
});

cljs.core.async.__GT_t28116 = (function cljs$core$async$alt_handler_$___GT_t28116(alt_handler__$1,flag__$1,cb__$1,meta28117){
return (new cljs.core.async.t28116(alt_handler__$1,flag__$1,cb__$1,meta28117));
});

}

return (new cljs.core.async.t28116(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28119_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28120_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28120_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16440__auto__ = wport;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28121 = (i + (1));
i = G__28121;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16440__auto__ = ret;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16428__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16428__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16428__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17486__auto__ = [];
var len__17479__auto___28127 = arguments.length;
var i__17480__auto___28128 = (0);
while(true){
if((i__17480__auto___28128 < len__17479__auto___28127)){
args__17486__auto__.push((arguments[i__17480__auto___28128]));

var G__28129 = (i__17480__auto___28128 + (1));
i__17480__auto___28128 = G__28129;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((1) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17487__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28124){
var map__28125 = p__28124;
var map__28125__$1 = ((((!((map__28125 == null)))?((((map__28125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28125):map__28125);
var opts = map__28125__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28122){
var G__28123 = cljs.core.first.call(null,seq28122);
var seq28122__$1 = cljs.core.next.call(null,seq28122);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28123,seq28122__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args28130 = [];
var len__17479__auto___28180 = arguments.length;
var i__17480__auto___28181 = (0);
while(true){
if((i__17480__auto___28181 < len__17479__auto___28180)){
args28130.push((arguments[i__17480__auto___28181]));

var G__28182 = (i__17480__auto___28181 + (1));
i__17480__auto___28181 = G__28182;
continue;
} else {
}
break;
}

var G__28132 = args28130.length;
switch (G__28132) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28130.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18518__auto___28184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___28184){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___28184){
return (function (state_28156){
var state_val_28157 = (state_28156[(1)]);
if((state_val_28157 === (7))){
var inst_28152 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28158_28185 = state_28156__$1;
(statearr_28158_28185[(2)] = inst_28152);

(statearr_28158_28185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (1))){
var state_28156__$1 = state_28156;
var statearr_28159_28186 = state_28156__$1;
(statearr_28159_28186[(2)] = null);

(statearr_28159_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (4))){
var inst_28135 = (state_28156[(7)]);
var inst_28135__$1 = (state_28156[(2)]);
var inst_28136 = (inst_28135__$1 == null);
var state_28156__$1 = (function (){var statearr_28160 = state_28156;
(statearr_28160[(7)] = inst_28135__$1);

return statearr_28160;
})();
if(cljs.core.truth_(inst_28136)){
var statearr_28161_28187 = state_28156__$1;
(statearr_28161_28187[(1)] = (5));

} else {
var statearr_28162_28188 = state_28156__$1;
(statearr_28162_28188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (13))){
var state_28156__$1 = state_28156;
var statearr_28163_28189 = state_28156__$1;
(statearr_28163_28189[(2)] = null);

(statearr_28163_28189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (6))){
var inst_28135 = (state_28156[(7)]);
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28156__$1,(11),to,inst_28135);
} else {
if((state_val_28157 === (3))){
var inst_28154 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,inst_28154);
} else {
if((state_val_28157 === (12))){
var state_28156__$1 = state_28156;
var statearr_28164_28190 = state_28156__$1;
(statearr_28164_28190[(2)] = null);

(statearr_28164_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (2))){
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(4),from);
} else {
if((state_val_28157 === (11))){
var inst_28145 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
if(cljs.core.truth_(inst_28145)){
var statearr_28165_28191 = state_28156__$1;
(statearr_28165_28191[(1)] = (12));

} else {
var statearr_28166_28192 = state_28156__$1;
(statearr_28166_28192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (9))){
var state_28156__$1 = state_28156;
var statearr_28167_28193 = state_28156__$1;
(statearr_28167_28193[(2)] = null);

(statearr_28167_28193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (5))){
var state_28156__$1 = state_28156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28168_28194 = state_28156__$1;
(statearr_28168_28194[(1)] = (8));

} else {
var statearr_28169_28195 = state_28156__$1;
(statearr_28169_28195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (14))){
var inst_28150 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28170_28196 = state_28156__$1;
(statearr_28170_28196[(2)] = inst_28150);

(statearr_28170_28196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (10))){
var inst_28142 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28171_28197 = state_28156__$1;
(statearr_28171_28197[(2)] = inst_28142);

(statearr_28171_28197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (8))){
var inst_28139 = cljs.core.async.close_BANG_.call(null,to);
var state_28156__$1 = state_28156;
var statearr_28172_28198 = state_28156__$1;
(statearr_28172_28198[(2)] = inst_28139);

(statearr_28172_28198[(1)] = (10));


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
});})(c__18518__auto___28184))
;
return ((function (switch__18453__auto__,c__18518__auto___28184){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null,null];
(statearr_28176[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_28156){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__18457__auto__ = e28177;
var statearr_28178_28199 = state_28156;
(statearr_28178_28199[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28200 = state_28156;
state_28156 = G__28200;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___28184))
})();
var state__18520__auto__ = (function (){var statearr_28179 = f__18519__auto__.call(null);
(statearr_28179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28184);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___28184))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28384){
var vec__28385 = p__28384;
var v = cljs.core.nth.call(null,vec__28385,(0),null);
var p = cljs.core.nth.call(null,vec__28385,(1),null);
var job = vec__28385;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18518__auto___28567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results){
return (function (state_28390){
var state_val_28391 = (state_28390[(1)]);
if((state_val_28391 === (1))){
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28390__$1,(2),res,v);
} else {
if((state_val_28391 === (2))){
var inst_28387 = (state_28390[(2)]);
var inst_28388 = cljs.core.async.close_BANG_.call(null,res);
var state_28390__$1 = (function (){var statearr_28392 = state_28390;
(statearr_28392[(7)] = inst_28387);

return statearr_28392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28390__$1,inst_28388);
} else {
return null;
}
}
});})(c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results))
;
return ((function (switch__18453__auto__,c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1 = (function (state_28390){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__18457__auto__ = e28397;
var statearr_28398_28568 = state_28390;
(statearr_28398_28568[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28569 = state_28390;
state_28390 = G__28569;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = function(state_28390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1.call(this,state_28390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results))
})();
var state__18520__auto__ = (function (){var statearr_28399 = f__18519__auto__.call(null);
(statearr_28399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28567);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___28567,res,vec__28385,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28400){
var vec__28401 = p__28400;
var v = cljs.core.nth.call(null,vec__28401,(0),null);
var p = cljs.core.nth.call(null,vec__28401,(1),null);
var job = vec__28401;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17324__auto___28570 = n;
var __28571 = (0);
while(true){
if((__28571 < n__17324__auto___28570)){
var G__28402_28572 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28402_28572) {
case "compute":
var c__18518__auto___28574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28571,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (__28571,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function (state_28415){
var state_val_28416 = (state_28415[(1)]);
if((state_val_28416 === (1))){
var state_28415__$1 = state_28415;
var statearr_28417_28575 = state_28415__$1;
(statearr_28417_28575[(2)] = null);

(statearr_28417_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (2))){
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(4),jobs);
} else {
if((state_val_28416 === (3))){
var inst_28413 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28415__$1,inst_28413);
} else {
if((state_val_28416 === (4))){
var inst_28405 = (state_28415[(2)]);
var inst_28406 = process.call(null,inst_28405);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28406)){
var statearr_28418_28576 = state_28415__$1;
(statearr_28418_28576[(1)] = (5));

} else {
var statearr_28419_28577 = state_28415__$1;
(statearr_28419_28577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (5))){
var state_28415__$1 = state_28415;
var statearr_28420_28578 = state_28415__$1;
(statearr_28420_28578[(2)] = null);

(statearr_28420_28578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (6))){
var state_28415__$1 = state_28415;
var statearr_28421_28579 = state_28415__$1;
(statearr_28421_28579[(2)] = null);

(statearr_28421_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (7))){
var inst_28411 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28422_28580 = state_28415__$1;
(statearr_28422_28580[(2)] = inst_28411);

(statearr_28422_28580[(1)] = (3));


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
});})(__28571,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
;
return ((function (__28571,switch__18453__auto__,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1 = (function (state_28415){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__18457__auto__ = e28427;
var statearr_28428_28581 = state_28415;
(statearr_28428_28581[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28582 = state_28415;
state_28415 = G__28582;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = function(state_28415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1.call(this,state_28415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__;
})()
;})(__28571,switch__18453__auto__,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
})();
var state__18520__auto__ = (function (){var statearr_28429 = f__18519__auto__.call(null);
(statearr_28429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28574);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(__28571,c__18518__auto___28574,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
);


break;
case "async":
var c__18518__auto___28583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28571,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (__28571,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function (state_28442){
var state_val_28443 = (state_28442[(1)]);
if((state_val_28443 === (1))){
var state_28442__$1 = state_28442;
var statearr_28444_28584 = state_28442__$1;
(statearr_28444_28584[(2)] = null);

(statearr_28444_28584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (2))){
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28442__$1,(4),jobs);
} else {
if((state_val_28443 === (3))){
var inst_28440 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28442__$1,inst_28440);
} else {
if((state_val_28443 === (4))){
var inst_28432 = (state_28442[(2)]);
var inst_28433 = async.call(null,inst_28432);
var state_28442__$1 = state_28442;
if(cljs.core.truth_(inst_28433)){
var statearr_28445_28585 = state_28442__$1;
(statearr_28445_28585[(1)] = (5));

} else {
var statearr_28446_28586 = state_28442__$1;
(statearr_28446_28586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (5))){
var state_28442__$1 = state_28442;
var statearr_28447_28587 = state_28442__$1;
(statearr_28447_28587[(2)] = null);

(statearr_28447_28587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (6))){
var state_28442__$1 = state_28442;
var statearr_28448_28588 = state_28442__$1;
(statearr_28448_28588[(2)] = null);

(statearr_28448_28588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (7))){
var inst_28438 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28449_28589 = state_28442__$1;
(statearr_28449_28589[(2)] = inst_28438);

(statearr_28449_28589[(1)] = (3));


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
});})(__28571,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
;
return ((function (__28571,switch__18453__auto__,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_28453 = [null,null,null,null,null,null,null];
(statearr_28453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__);

(statearr_28453[(1)] = (1));

return statearr_28453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1 = (function (state_28442){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28454){if((e28454 instanceof Object)){
var ex__18457__auto__ = e28454;
var statearr_28455_28590 = state_28442;
(statearr_28455_28590[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28591 = state_28442;
state_28442 = G__28591;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = function(state_28442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1.call(this,state_28442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__;
})()
;})(__28571,switch__18453__auto__,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
})();
var state__18520__auto__ = (function (){var statearr_28456 = f__18519__auto__.call(null);
(statearr_28456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28583);

return statearr_28456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(__28571,c__18518__auto___28583,G__28402_28572,n__17324__auto___28570,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28592 = (__28571 + (1));
__28571 = G__28592;
continue;
} else {
}
break;
}

var c__18518__auto___28593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___28593,jobs,results,process,async){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___28593,jobs,results,process,async){
return (function (state_28478){
var state_val_28479 = (state_28478[(1)]);
if((state_val_28479 === (1))){
var state_28478__$1 = state_28478;
var statearr_28480_28594 = state_28478__$1;
(statearr_28480_28594[(2)] = null);

(statearr_28480_28594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (2))){
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28478__$1,(4),from);
} else {
if((state_val_28479 === (3))){
var inst_28476 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28478__$1,inst_28476);
} else {
if((state_val_28479 === (4))){
var inst_28459 = (state_28478[(7)]);
var inst_28459__$1 = (state_28478[(2)]);
var inst_28460 = (inst_28459__$1 == null);
var state_28478__$1 = (function (){var statearr_28481 = state_28478;
(statearr_28481[(7)] = inst_28459__$1);

return statearr_28481;
})();
if(cljs.core.truth_(inst_28460)){
var statearr_28482_28595 = state_28478__$1;
(statearr_28482_28595[(1)] = (5));

} else {
var statearr_28483_28596 = state_28478__$1;
(statearr_28483_28596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (5))){
var inst_28462 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28478__$1 = state_28478;
var statearr_28484_28597 = state_28478__$1;
(statearr_28484_28597[(2)] = inst_28462);

(statearr_28484_28597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (6))){
var inst_28464 = (state_28478[(8)]);
var inst_28459 = (state_28478[(7)]);
var inst_28464__$1 = cljs.core.async.chan.call(null,(1));
var inst_28465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28466 = [inst_28459,inst_28464__$1];
var inst_28467 = (new cljs.core.PersistentVector(null,2,(5),inst_28465,inst_28466,null));
var state_28478__$1 = (function (){var statearr_28485 = state_28478;
(statearr_28485[(8)] = inst_28464__$1);

return statearr_28485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28478__$1,(8),jobs,inst_28467);
} else {
if((state_val_28479 === (7))){
var inst_28474 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28486_28598 = state_28478__$1;
(statearr_28486_28598[(2)] = inst_28474);

(statearr_28486_28598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (8))){
var inst_28464 = (state_28478[(8)]);
var inst_28469 = (state_28478[(2)]);
var state_28478__$1 = (function (){var statearr_28487 = state_28478;
(statearr_28487[(9)] = inst_28469);

return statearr_28487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28478__$1,(9),results,inst_28464);
} else {
if((state_val_28479 === (9))){
var inst_28471 = (state_28478[(2)]);
var state_28478__$1 = (function (){var statearr_28488 = state_28478;
(statearr_28488[(10)] = inst_28471);

return statearr_28488;
})();
var statearr_28489_28599 = state_28478__$1;
(statearr_28489_28599[(2)] = null);

(statearr_28489_28599[(1)] = (2));


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
});})(c__18518__auto___28593,jobs,results,process,async))
;
return ((function (switch__18453__auto__,c__18518__auto___28593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_28493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__);

(statearr_28493[(1)] = (1));

return statearr_28493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1 = (function (state_28478){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28494){if((e28494 instanceof Object)){
var ex__18457__auto__ = e28494;
var statearr_28495_28600 = state_28478;
(statearr_28495_28600[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28601 = state_28478;
state_28478 = G__28601;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = function(state_28478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1.call(this,state_28478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___28593,jobs,results,process,async))
})();
var state__18520__auto__ = (function (){var statearr_28496 = f__18519__auto__.call(null);
(statearr_28496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28593);

return statearr_28496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___28593,jobs,results,process,async))
);


var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__,jobs,results,process,async){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__,jobs,results,process,async){
return (function (state_28534){
var state_val_28535 = (state_28534[(1)]);
if((state_val_28535 === (7))){
var inst_28530 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
var statearr_28536_28602 = state_28534__$1;
(statearr_28536_28602[(2)] = inst_28530);

(statearr_28536_28602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (20))){
var state_28534__$1 = state_28534;
var statearr_28537_28603 = state_28534__$1;
(statearr_28537_28603[(2)] = null);

(statearr_28537_28603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (1))){
var state_28534__$1 = state_28534;
var statearr_28538_28604 = state_28534__$1;
(statearr_28538_28604[(2)] = null);

(statearr_28538_28604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (4))){
var inst_28499 = (state_28534[(7)]);
var inst_28499__$1 = (state_28534[(2)]);
var inst_28500 = (inst_28499__$1 == null);
var state_28534__$1 = (function (){var statearr_28539 = state_28534;
(statearr_28539[(7)] = inst_28499__$1);

return statearr_28539;
})();
if(cljs.core.truth_(inst_28500)){
var statearr_28540_28605 = state_28534__$1;
(statearr_28540_28605[(1)] = (5));

} else {
var statearr_28541_28606 = state_28534__$1;
(statearr_28541_28606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (15))){
var inst_28512 = (state_28534[(8)]);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28534__$1,(18),to,inst_28512);
} else {
if((state_val_28535 === (21))){
var inst_28525 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
var statearr_28542_28607 = state_28534__$1;
(statearr_28542_28607[(2)] = inst_28525);

(statearr_28542_28607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (13))){
var inst_28527 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28543 = state_28534;
(statearr_28543[(9)] = inst_28527);

return statearr_28543;
})();
var statearr_28544_28608 = state_28534__$1;
(statearr_28544_28608[(2)] = null);

(statearr_28544_28608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (6))){
var inst_28499 = (state_28534[(7)]);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(11),inst_28499);
} else {
if((state_val_28535 === (17))){
var inst_28520 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
if(cljs.core.truth_(inst_28520)){
var statearr_28545_28609 = state_28534__$1;
(statearr_28545_28609[(1)] = (19));

} else {
var statearr_28546_28610 = state_28534__$1;
(statearr_28546_28610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (3))){
var inst_28532 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28534__$1,inst_28532);
} else {
if((state_val_28535 === (12))){
var inst_28509 = (state_28534[(10)]);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(14),inst_28509);
} else {
if((state_val_28535 === (2))){
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(4),results);
} else {
if((state_val_28535 === (19))){
var state_28534__$1 = state_28534;
var statearr_28547_28611 = state_28534__$1;
(statearr_28547_28611[(2)] = null);

(statearr_28547_28611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (11))){
var inst_28509 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28548 = state_28534;
(statearr_28548[(10)] = inst_28509);

return statearr_28548;
})();
var statearr_28549_28612 = state_28534__$1;
(statearr_28549_28612[(2)] = null);

(statearr_28549_28612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (9))){
var state_28534__$1 = state_28534;
var statearr_28550_28613 = state_28534__$1;
(statearr_28550_28613[(2)] = null);

(statearr_28550_28613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (5))){
var state_28534__$1 = state_28534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28551_28614 = state_28534__$1;
(statearr_28551_28614[(1)] = (8));

} else {
var statearr_28552_28615 = state_28534__$1;
(statearr_28552_28615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (14))){
var inst_28514 = (state_28534[(11)]);
var inst_28512 = (state_28534[(8)]);
var inst_28512__$1 = (state_28534[(2)]);
var inst_28513 = (inst_28512__$1 == null);
var inst_28514__$1 = cljs.core.not.call(null,inst_28513);
var state_28534__$1 = (function (){var statearr_28553 = state_28534;
(statearr_28553[(11)] = inst_28514__$1);

(statearr_28553[(8)] = inst_28512__$1);

return statearr_28553;
})();
if(inst_28514__$1){
var statearr_28554_28616 = state_28534__$1;
(statearr_28554_28616[(1)] = (15));

} else {
var statearr_28555_28617 = state_28534__$1;
(statearr_28555_28617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (16))){
var inst_28514 = (state_28534[(11)]);
var state_28534__$1 = state_28534;
var statearr_28556_28618 = state_28534__$1;
(statearr_28556_28618[(2)] = inst_28514);

(statearr_28556_28618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (10))){
var inst_28506 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
var statearr_28557_28619 = state_28534__$1;
(statearr_28557_28619[(2)] = inst_28506);

(statearr_28557_28619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (18))){
var inst_28517 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
var statearr_28558_28620 = state_28534__$1;
(statearr_28558_28620[(2)] = inst_28517);

(statearr_28558_28620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (8))){
var inst_28503 = cljs.core.async.close_BANG_.call(null,to);
var state_28534__$1 = state_28534;
var statearr_28559_28621 = state_28534__$1;
(statearr_28559_28621[(2)] = inst_28503);

(statearr_28559_28621[(1)] = (10));


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
});})(c__18518__auto__,jobs,results,process,async))
;
return ((function (switch__18453__auto__,c__18518__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_28563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__);

(statearr_28563[(1)] = (1));

return statearr_28563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1 = (function (state_28534){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28564){if((e28564 instanceof Object)){
var ex__18457__auto__ = e28564;
var statearr_28565_28622 = state_28534;
(statearr_28565_28622[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28623 = state_28534;
state_28534 = G__28623;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__ = function(state_28534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1.call(this,state_28534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__,jobs,results,process,async))
})();
var state__18520__auto__ = (function (){var statearr_28566 = f__18519__auto__.call(null);
(statearr_28566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__,jobs,results,process,async))
);

return c__18518__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args28624 = [];
var len__17479__auto___28627 = arguments.length;
var i__17480__auto___28628 = (0);
while(true){
if((i__17480__auto___28628 < len__17479__auto___28627)){
args28624.push((arguments[i__17480__auto___28628]));

var G__28629 = (i__17480__auto___28628 + (1));
i__17480__auto___28628 = G__28629;
continue;
} else {
}
break;
}

var G__28626 = args28624.length;
switch (G__28626) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28624.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args28631 = [];
var len__17479__auto___28634 = arguments.length;
var i__17480__auto___28635 = (0);
while(true){
if((i__17480__auto___28635 < len__17479__auto___28634)){
args28631.push((arguments[i__17480__auto___28635]));

var G__28636 = (i__17480__auto___28635 + (1));
i__17480__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var G__28633 = args28631.length;
switch (G__28633) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28631.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args28638 = [];
var len__17479__auto___28691 = arguments.length;
var i__17480__auto___28692 = (0);
while(true){
if((i__17480__auto___28692 < len__17479__auto___28691)){
args28638.push((arguments[i__17480__auto___28692]));

var G__28693 = (i__17480__auto___28692 + (1));
i__17480__auto___28692 = G__28693;
continue;
} else {
}
break;
}

var G__28640 = args28638.length;
switch (G__28640) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28638.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18518__auto___28695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___28695,tc,fc){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___28695,tc,fc){
return (function (state_28666){
var state_val_28667 = (state_28666[(1)]);
if((state_val_28667 === (7))){
var inst_28662 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28668_28696 = state_28666__$1;
(statearr_28668_28696[(2)] = inst_28662);

(statearr_28668_28696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (1))){
var state_28666__$1 = state_28666;
var statearr_28669_28697 = state_28666__$1;
(statearr_28669_28697[(2)] = null);

(statearr_28669_28697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (4))){
var inst_28643 = (state_28666[(7)]);
var inst_28643__$1 = (state_28666[(2)]);
var inst_28644 = (inst_28643__$1 == null);
var state_28666__$1 = (function (){var statearr_28670 = state_28666;
(statearr_28670[(7)] = inst_28643__$1);

return statearr_28670;
})();
if(cljs.core.truth_(inst_28644)){
var statearr_28671_28698 = state_28666__$1;
(statearr_28671_28698[(1)] = (5));

} else {
var statearr_28672_28699 = state_28666__$1;
(statearr_28672_28699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (13))){
var state_28666__$1 = state_28666;
var statearr_28673_28700 = state_28666__$1;
(statearr_28673_28700[(2)] = null);

(statearr_28673_28700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (6))){
var inst_28643 = (state_28666[(7)]);
var inst_28649 = p.call(null,inst_28643);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28649)){
var statearr_28674_28701 = state_28666__$1;
(statearr_28674_28701[(1)] = (9));

} else {
var statearr_28675_28702 = state_28666__$1;
(statearr_28675_28702[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (3))){
var inst_28664 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28666__$1,inst_28664);
} else {
if((state_val_28667 === (12))){
var state_28666__$1 = state_28666;
var statearr_28676_28703 = state_28666__$1;
(statearr_28676_28703[(2)] = null);

(statearr_28676_28703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (2))){
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28666__$1,(4),ch);
} else {
if((state_val_28667 === (11))){
var inst_28643 = (state_28666[(7)]);
var inst_28653 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28666__$1,(8),inst_28653,inst_28643);
} else {
if((state_val_28667 === (9))){
var state_28666__$1 = state_28666;
var statearr_28677_28704 = state_28666__$1;
(statearr_28677_28704[(2)] = tc);

(statearr_28677_28704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (5))){
var inst_28646 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28647 = cljs.core.async.close_BANG_.call(null,fc);
var state_28666__$1 = (function (){var statearr_28678 = state_28666;
(statearr_28678[(8)] = inst_28646);

return statearr_28678;
})();
var statearr_28679_28705 = state_28666__$1;
(statearr_28679_28705[(2)] = inst_28647);

(statearr_28679_28705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (14))){
var inst_28660 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28680_28706 = state_28666__$1;
(statearr_28680_28706[(2)] = inst_28660);

(statearr_28680_28706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (10))){
var state_28666__$1 = state_28666;
var statearr_28681_28707 = state_28666__$1;
(statearr_28681_28707[(2)] = fc);

(statearr_28681_28707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (8))){
var inst_28655 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28655)){
var statearr_28682_28708 = state_28666__$1;
(statearr_28682_28708[(1)] = (12));

} else {
var statearr_28683_28709 = state_28666__$1;
(statearr_28683_28709[(1)] = (13));

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
});})(c__18518__auto___28695,tc,fc))
;
return ((function (switch__18453__auto__,c__18518__auto___28695,tc,fc){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_28687 = [null,null,null,null,null,null,null,null,null];
(statearr_28687[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_28687[(1)] = (1));

return statearr_28687;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_28666){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28688){if((e28688 instanceof Object)){
var ex__18457__auto__ = e28688;
var statearr_28689_28710 = state_28666;
(statearr_28689_28710[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28711 = state_28666;
state_28666 = G__28711;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_28666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_28666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___28695,tc,fc))
})();
var state__18520__auto__ = (function (){var statearr_28690 = f__18519__auto__.call(null);
(statearr_28690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___28695);

return statearr_28690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___28695,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_28758){
var state_val_28759 = (state_28758[(1)]);
if((state_val_28759 === (1))){
var inst_28744 = init;
var state_28758__$1 = (function (){var statearr_28760 = state_28758;
(statearr_28760[(7)] = inst_28744);

return statearr_28760;
})();
var statearr_28761_28776 = state_28758__$1;
(statearr_28761_28776[(2)] = null);

(statearr_28761_28776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (2))){
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28758__$1,(4),ch);
} else {
if((state_val_28759 === (3))){
var inst_28756 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28758__$1,inst_28756);
} else {
if((state_val_28759 === (4))){
var inst_28747 = (state_28758[(8)]);
var inst_28747__$1 = (state_28758[(2)]);
var inst_28748 = (inst_28747__$1 == null);
var state_28758__$1 = (function (){var statearr_28762 = state_28758;
(statearr_28762[(8)] = inst_28747__$1);

return statearr_28762;
})();
if(cljs.core.truth_(inst_28748)){
var statearr_28763_28777 = state_28758__$1;
(statearr_28763_28777[(1)] = (5));

} else {
var statearr_28764_28778 = state_28758__$1;
(statearr_28764_28778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (5))){
var inst_28744 = (state_28758[(7)]);
var state_28758__$1 = state_28758;
var statearr_28765_28779 = state_28758__$1;
(statearr_28765_28779[(2)] = inst_28744);

(statearr_28765_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (6))){
var inst_28744 = (state_28758[(7)]);
var inst_28747 = (state_28758[(8)]);
var inst_28751 = f.call(null,inst_28744,inst_28747);
var inst_28744__$1 = inst_28751;
var state_28758__$1 = (function (){var statearr_28766 = state_28758;
(statearr_28766[(7)] = inst_28744__$1);

return statearr_28766;
})();
var statearr_28767_28780 = state_28758__$1;
(statearr_28767_28780[(2)] = null);

(statearr_28767_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (7))){
var inst_28754 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28768_28781 = state_28758__$1;
(statearr_28768_28781[(2)] = inst_28754);

(statearr_28768_28781[(1)] = (3));


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
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18454__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18454__auto____0 = (function (){
var statearr_28772 = [null,null,null,null,null,null,null,null,null];
(statearr_28772[(0)] = cljs$core$async$reduce_$_state_machine__18454__auto__);

(statearr_28772[(1)] = (1));

return statearr_28772;
});
var cljs$core$async$reduce_$_state_machine__18454__auto____1 = (function (state_28758){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28773){if((e28773 instanceof Object)){
var ex__18457__auto__ = e28773;
var statearr_28774_28782 = state_28758;
(statearr_28774_28782[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28783 = state_28758;
state_28758 = G__28783;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18454__auto__ = function(state_28758){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18454__auto____1.call(this,state_28758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18454__auto____0;
cljs$core$async$reduce_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18454__auto____1;
return cljs$core$async$reduce_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_28775 = f__18519__auto__.call(null);
(statearr_28775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_28775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args28784 = [];
var len__17479__auto___28836 = arguments.length;
var i__17480__auto___28837 = (0);
while(true){
if((i__17480__auto___28837 < len__17479__auto___28836)){
args28784.push((arguments[i__17480__auto___28837]));

var G__28838 = (i__17480__auto___28837 + (1));
i__17480__auto___28837 = G__28838;
continue;
} else {
}
break;
}

var G__28786 = args28784.length;
switch (G__28786) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28784.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_28811){
var state_val_28812 = (state_28811[(1)]);
if((state_val_28812 === (7))){
var inst_28793 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28813_28840 = state_28811__$1;
(statearr_28813_28840[(2)] = inst_28793);

(statearr_28813_28840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (1))){
var inst_28787 = cljs.core.seq.call(null,coll);
var inst_28788 = inst_28787;
var state_28811__$1 = (function (){var statearr_28814 = state_28811;
(statearr_28814[(7)] = inst_28788);

return statearr_28814;
})();
var statearr_28815_28841 = state_28811__$1;
(statearr_28815_28841[(2)] = null);

(statearr_28815_28841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (4))){
var inst_28788 = (state_28811[(7)]);
var inst_28791 = cljs.core.first.call(null,inst_28788);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28811__$1,(7),ch,inst_28791);
} else {
if((state_val_28812 === (13))){
var inst_28805 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28816_28842 = state_28811__$1;
(statearr_28816_28842[(2)] = inst_28805);

(statearr_28816_28842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (6))){
var inst_28796 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
if(cljs.core.truth_(inst_28796)){
var statearr_28817_28843 = state_28811__$1;
(statearr_28817_28843[(1)] = (8));

} else {
var statearr_28818_28844 = state_28811__$1;
(statearr_28818_28844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (3))){
var inst_28809 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28811__$1,inst_28809);
} else {
if((state_val_28812 === (12))){
var state_28811__$1 = state_28811;
var statearr_28819_28845 = state_28811__$1;
(statearr_28819_28845[(2)] = null);

(statearr_28819_28845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (2))){
var inst_28788 = (state_28811[(7)]);
var state_28811__$1 = state_28811;
if(cljs.core.truth_(inst_28788)){
var statearr_28820_28846 = state_28811__$1;
(statearr_28820_28846[(1)] = (4));

} else {
var statearr_28821_28847 = state_28811__$1;
(statearr_28821_28847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (11))){
var inst_28802 = cljs.core.async.close_BANG_.call(null,ch);
var state_28811__$1 = state_28811;
var statearr_28822_28848 = state_28811__$1;
(statearr_28822_28848[(2)] = inst_28802);

(statearr_28822_28848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (9))){
var state_28811__$1 = state_28811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28823_28849 = state_28811__$1;
(statearr_28823_28849[(1)] = (11));

} else {
var statearr_28824_28850 = state_28811__$1;
(statearr_28824_28850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (5))){
var inst_28788 = (state_28811[(7)]);
var state_28811__$1 = state_28811;
var statearr_28825_28851 = state_28811__$1;
(statearr_28825_28851[(2)] = inst_28788);

(statearr_28825_28851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (10))){
var inst_28807 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28826_28852 = state_28811__$1;
(statearr_28826_28852[(2)] = inst_28807);

(statearr_28826_28852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (8))){
var inst_28788 = (state_28811[(7)]);
var inst_28798 = cljs.core.next.call(null,inst_28788);
var inst_28788__$1 = inst_28798;
var state_28811__$1 = (function (){var statearr_28827 = state_28811;
(statearr_28827[(7)] = inst_28788__$1);

return statearr_28827;
})();
var statearr_28828_28853 = state_28811__$1;
(statearr_28828_28853[(2)] = null);

(statearr_28828_28853[(1)] = (2));


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
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_28832 = [null,null,null,null,null,null,null,null];
(statearr_28832[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_28832[(1)] = (1));

return statearr_28832;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_28811){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_28811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object)){
var ex__18457__auto__ = e28833;
var statearr_28834_28854 = state_28811;
(statearr_28834_28854[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28855 = state_28811;
state_28811 = G__28855;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_28811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_28811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_28835 = f__18519__auto__.call(null);
(statearr_28835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_28835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17076__auto__ = (((_ == null))?null:_);
var m__17077__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,_);
} else {
var m__17077__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17077__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,ch);
} else {
var m__17077__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m);
} else {
var m__17077__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29081 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29081 = (function (mult,ch,cs,meta29082){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29082 = meta29082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29083,meta29082__$1){
var self__ = this;
var _29083__$1 = this;
return (new cljs.core.async.t29081(self__.mult,self__.ch,self__.cs,meta29082__$1));
});})(cs))
;

cljs.core.async.t29081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29083){
var self__ = this;
var _29083__$1 = this;
return self__.meta29082;
});})(cs))
;

cljs.core.async.t29081.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29081.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29081.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29082","meta29082",-150499599,null)], null);
});})(cs))
;

cljs.core.async.t29081.cljs$lang$type = true;

cljs.core.async.t29081.cljs$lang$ctorStr = "cljs.core.async/t29081";

cljs.core.async.t29081.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t29081");
});})(cs))
;

cljs.core.async.__GT_t29081 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29081(mult__$1,ch__$1,cs__$1,meta29082){
return (new cljs.core.async.t29081(mult__$1,ch__$1,cs__$1,meta29082));
});})(cs))
;

}

return (new cljs.core.async.t29081(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18518__auto___29302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___29302,cs,m,dchan,dctr,done){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___29302,cs,m,dchan,dctr,done){
return (function (state_29214){
var state_val_29215 = (state_29214[(1)]);
if((state_val_29215 === (7))){
var inst_29210 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29216_29303 = state_29214__$1;
(statearr_29216_29303[(2)] = inst_29210);

(statearr_29216_29303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (20))){
var inst_29115 = (state_29214[(7)]);
var inst_29125 = cljs.core.first.call(null,inst_29115);
var inst_29126 = cljs.core.nth.call(null,inst_29125,(0),null);
var inst_29127 = cljs.core.nth.call(null,inst_29125,(1),null);
var state_29214__$1 = (function (){var statearr_29217 = state_29214;
(statearr_29217[(8)] = inst_29126);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29218_29304 = state_29214__$1;
(statearr_29218_29304[(1)] = (22));

} else {
var statearr_29219_29305 = state_29214__$1;
(statearr_29219_29305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (27))){
var inst_29155 = (state_29214[(9)]);
var inst_29086 = (state_29214[(10)]);
var inst_29162 = (state_29214[(11)]);
var inst_29157 = (state_29214[(12)]);
var inst_29162__$1 = cljs.core._nth.call(null,inst_29155,inst_29157);
var inst_29163 = cljs.core.async.put_BANG_.call(null,inst_29162__$1,inst_29086,done);
var state_29214__$1 = (function (){var statearr_29220 = state_29214;
(statearr_29220[(11)] = inst_29162__$1);

return statearr_29220;
})();
if(cljs.core.truth_(inst_29163)){
var statearr_29221_29306 = state_29214__$1;
(statearr_29221_29306[(1)] = (30));

} else {
var statearr_29222_29307 = state_29214__$1;
(statearr_29222_29307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (1))){
var state_29214__$1 = state_29214;
var statearr_29223_29308 = state_29214__$1;
(statearr_29223_29308[(2)] = null);

(statearr_29223_29308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (24))){
var inst_29115 = (state_29214[(7)]);
var inst_29132 = (state_29214[(2)]);
var inst_29133 = cljs.core.next.call(null,inst_29115);
var inst_29095 = inst_29133;
var inst_29096 = null;
var inst_29097 = (0);
var inst_29098 = (0);
var state_29214__$1 = (function (){var statearr_29224 = state_29214;
(statearr_29224[(13)] = inst_29132);

(statearr_29224[(14)] = inst_29098);

(statearr_29224[(15)] = inst_29096);

(statearr_29224[(16)] = inst_29095);

(statearr_29224[(17)] = inst_29097);

return statearr_29224;
})();
var statearr_29225_29309 = state_29214__$1;
(statearr_29225_29309[(2)] = null);

(statearr_29225_29309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (39))){
var state_29214__$1 = state_29214;
var statearr_29229_29310 = state_29214__$1;
(statearr_29229_29310[(2)] = null);

(statearr_29229_29310[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (4))){
var inst_29086 = (state_29214[(10)]);
var inst_29086__$1 = (state_29214[(2)]);
var inst_29087 = (inst_29086__$1 == null);
var state_29214__$1 = (function (){var statearr_29230 = state_29214;
(statearr_29230[(10)] = inst_29086__$1);

return statearr_29230;
})();
if(cljs.core.truth_(inst_29087)){
var statearr_29231_29311 = state_29214__$1;
(statearr_29231_29311[(1)] = (5));

} else {
var statearr_29232_29312 = state_29214__$1;
(statearr_29232_29312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (15))){
var inst_29098 = (state_29214[(14)]);
var inst_29096 = (state_29214[(15)]);
var inst_29095 = (state_29214[(16)]);
var inst_29097 = (state_29214[(17)]);
var inst_29111 = (state_29214[(2)]);
var inst_29112 = (inst_29098 + (1));
var tmp29226 = inst_29096;
var tmp29227 = inst_29095;
var tmp29228 = inst_29097;
var inst_29095__$1 = tmp29227;
var inst_29096__$1 = tmp29226;
var inst_29097__$1 = tmp29228;
var inst_29098__$1 = inst_29112;
var state_29214__$1 = (function (){var statearr_29233 = state_29214;
(statearr_29233[(14)] = inst_29098__$1);

(statearr_29233[(15)] = inst_29096__$1);

(statearr_29233[(18)] = inst_29111);

(statearr_29233[(16)] = inst_29095__$1);

(statearr_29233[(17)] = inst_29097__$1);

return statearr_29233;
})();
var statearr_29234_29313 = state_29214__$1;
(statearr_29234_29313[(2)] = null);

(statearr_29234_29313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (21))){
var inst_29136 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29238_29314 = state_29214__$1;
(statearr_29238_29314[(2)] = inst_29136);

(statearr_29238_29314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (31))){
var inst_29162 = (state_29214[(11)]);
var inst_29166 = done.call(null,null);
var inst_29167 = cljs.core.async.untap_STAR_.call(null,m,inst_29162);
var state_29214__$1 = (function (){var statearr_29239 = state_29214;
(statearr_29239[(19)] = inst_29166);

return statearr_29239;
})();
var statearr_29240_29315 = state_29214__$1;
(statearr_29240_29315[(2)] = inst_29167);

(statearr_29240_29315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (32))){
var inst_29155 = (state_29214[(9)]);
var inst_29156 = (state_29214[(20)]);
var inst_29154 = (state_29214[(21)]);
var inst_29157 = (state_29214[(12)]);
var inst_29169 = (state_29214[(2)]);
var inst_29170 = (inst_29157 + (1));
var tmp29235 = inst_29155;
var tmp29236 = inst_29156;
var tmp29237 = inst_29154;
var inst_29154__$1 = tmp29237;
var inst_29155__$1 = tmp29235;
var inst_29156__$1 = tmp29236;
var inst_29157__$1 = inst_29170;
var state_29214__$1 = (function (){var statearr_29241 = state_29214;
(statearr_29241[(9)] = inst_29155__$1);

(statearr_29241[(20)] = inst_29156__$1);

(statearr_29241[(21)] = inst_29154__$1);

(statearr_29241[(12)] = inst_29157__$1);

(statearr_29241[(22)] = inst_29169);

return statearr_29241;
})();
var statearr_29242_29316 = state_29214__$1;
(statearr_29242_29316[(2)] = null);

(statearr_29242_29316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (40))){
var inst_29182 = (state_29214[(23)]);
var inst_29186 = done.call(null,null);
var inst_29187 = cljs.core.async.untap_STAR_.call(null,m,inst_29182);
var state_29214__$1 = (function (){var statearr_29243 = state_29214;
(statearr_29243[(24)] = inst_29186);

return statearr_29243;
})();
var statearr_29244_29317 = state_29214__$1;
(statearr_29244_29317[(2)] = inst_29187);

(statearr_29244_29317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (33))){
var inst_29173 = (state_29214[(25)]);
var inst_29175 = cljs.core.chunked_seq_QMARK_.call(null,inst_29173);
var state_29214__$1 = state_29214;
if(inst_29175){
var statearr_29245_29318 = state_29214__$1;
(statearr_29245_29318[(1)] = (36));

} else {
var statearr_29246_29319 = state_29214__$1;
(statearr_29246_29319[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (13))){
var inst_29105 = (state_29214[(26)]);
var inst_29108 = cljs.core.async.close_BANG_.call(null,inst_29105);
var state_29214__$1 = state_29214;
var statearr_29247_29320 = state_29214__$1;
(statearr_29247_29320[(2)] = inst_29108);

(statearr_29247_29320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (22))){
var inst_29126 = (state_29214[(8)]);
var inst_29129 = cljs.core.async.close_BANG_.call(null,inst_29126);
var state_29214__$1 = state_29214;
var statearr_29248_29321 = state_29214__$1;
(statearr_29248_29321[(2)] = inst_29129);

(statearr_29248_29321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (36))){
var inst_29173 = (state_29214[(25)]);
var inst_29177 = cljs.core.chunk_first.call(null,inst_29173);
var inst_29178 = cljs.core.chunk_rest.call(null,inst_29173);
var inst_29179 = cljs.core.count.call(null,inst_29177);
var inst_29154 = inst_29178;
var inst_29155 = inst_29177;
var inst_29156 = inst_29179;
var inst_29157 = (0);
var state_29214__$1 = (function (){var statearr_29249 = state_29214;
(statearr_29249[(9)] = inst_29155);

(statearr_29249[(20)] = inst_29156);

(statearr_29249[(21)] = inst_29154);

(statearr_29249[(12)] = inst_29157);

return statearr_29249;
})();
var statearr_29250_29322 = state_29214__$1;
(statearr_29250_29322[(2)] = null);

(statearr_29250_29322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (41))){
var inst_29173 = (state_29214[(25)]);
var inst_29189 = (state_29214[(2)]);
var inst_29190 = cljs.core.next.call(null,inst_29173);
var inst_29154 = inst_29190;
var inst_29155 = null;
var inst_29156 = (0);
var inst_29157 = (0);
var state_29214__$1 = (function (){var statearr_29251 = state_29214;
(statearr_29251[(9)] = inst_29155);

(statearr_29251[(20)] = inst_29156);

(statearr_29251[(27)] = inst_29189);

(statearr_29251[(21)] = inst_29154);

(statearr_29251[(12)] = inst_29157);

return statearr_29251;
})();
var statearr_29252_29323 = state_29214__$1;
(statearr_29252_29323[(2)] = null);

(statearr_29252_29323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (43))){
var state_29214__$1 = state_29214;
var statearr_29253_29324 = state_29214__$1;
(statearr_29253_29324[(2)] = null);

(statearr_29253_29324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (29))){
var inst_29198 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29254_29325 = state_29214__$1;
(statearr_29254_29325[(2)] = inst_29198);

(statearr_29254_29325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (44))){
var inst_29207 = (state_29214[(2)]);
var state_29214__$1 = (function (){var statearr_29255 = state_29214;
(statearr_29255[(28)] = inst_29207);

return statearr_29255;
})();
var statearr_29256_29326 = state_29214__$1;
(statearr_29256_29326[(2)] = null);

(statearr_29256_29326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (6))){
var inst_29146 = (state_29214[(29)]);
var inst_29145 = cljs.core.deref.call(null,cs);
var inst_29146__$1 = cljs.core.keys.call(null,inst_29145);
var inst_29147 = cljs.core.count.call(null,inst_29146__$1);
var inst_29148 = cljs.core.reset_BANG_.call(null,dctr,inst_29147);
var inst_29153 = cljs.core.seq.call(null,inst_29146__$1);
var inst_29154 = inst_29153;
var inst_29155 = null;
var inst_29156 = (0);
var inst_29157 = (0);
var state_29214__$1 = (function (){var statearr_29257 = state_29214;
(statearr_29257[(9)] = inst_29155);

(statearr_29257[(29)] = inst_29146__$1);

(statearr_29257[(20)] = inst_29156);

(statearr_29257[(30)] = inst_29148);

(statearr_29257[(21)] = inst_29154);

(statearr_29257[(12)] = inst_29157);

return statearr_29257;
})();
var statearr_29258_29327 = state_29214__$1;
(statearr_29258_29327[(2)] = null);

(statearr_29258_29327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (28))){
var inst_29173 = (state_29214[(25)]);
var inst_29154 = (state_29214[(21)]);
var inst_29173__$1 = cljs.core.seq.call(null,inst_29154);
var state_29214__$1 = (function (){var statearr_29259 = state_29214;
(statearr_29259[(25)] = inst_29173__$1);

return statearr_29259;
})();
if(inst_29173__$1){
var statearr_29260_29328 = state_29214__$1;
(statearr_29260_29328[(1)] = (33));

} else {
var statearr_29261_29329 = state_29214__$1;
(statearr_29261_29329[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (25))){
var inst_29156 = (state_29214[(20)]);
var inst_29157 = (state_29214[(12)]);
var inst_29159 = (inst_29157 < inst_29156);
var inst_29160 = inst_29159;
var state_29214__$1 = state_29214;
if(cljs.core.truth_(inst_29160)){
var statearr_29262_29330 = state_29214__$1;
(statearr_29262_29330[(1)] = (27));

} else {
var statearr_29263_29331 = state_29214__$1;
(statearr_29263_29331[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (34))){
var state_29214__$1 = state_29214;
var statearr_29264_29332 = state_29214__$1;
(statearr_29264_29332[(2)] = null);

(statearr_29264_29332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (17))){
var state_29214__$1 = state_29214;
var statearr_29265_29333 = state_29214__$1;
(statearr_29265_29333[(2)] = null);

(statearr_29265_29333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (3))){
var inst_29212 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29214__$1,inst_29212);
} else {
if((state_val_29215 === (12))){
var inst_29141 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29266_29334 = state_29214__$1;
(statearr_29266_29334[(2)] = inst_29141);

(statearr_29266_29334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (2))){
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29214__$1,(4),ch);
} else {
if((state_val_29215 === (23))){
var state_29214__$1 = state_29214;
var statearr_29267_29335 = state_29214__$1;
(statearr_29267_29335[(2)] = null);

(statearr_29267_29335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (35))){
var inst_29196 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29268_29336 = state_29214__$1;
(statearr_29268_29336[(2)] = inst_29196);

(statearr_29268_29336[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (19))){
var inst_29115 = (state_29214[(7)]);
var inst_29119 = cljs.core.chunk_first.call(null,inst_29115);
var inst_29120 = cljs.core.chunk_rest.call(null,inst_29115);
var inst_29121 = cljs.core.count.call(null,inst_29119);
var inst_29095 = inst_29120;
var inst_29096 = inst_29119;
var inst_29097 = inst_29121;
var inst_29098 = (0);
var state_29214__$1 = (function (){var statearr_29269 = state_29214;
(statearr_29269[(14)] = inst_29098);

(statearr_29269[(15)] = inst_29096);

(statearr_29269[(16)] = inst_29095);

(statearr_29269[(17)] = inst_29097);

return statearr_29269;
})();
var statearr_29270_29337 = state_29214__$1;
(statearr_29270_29337[(2)] = null);

(statearr_29270_29337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (11))){
var inst_29115 = (state_29214[(7)]);
var inst_29095 = (state_29214[(16)]);
var inst_29115__$1 = cljs.core.seq.call(null,inst_29095);
var state_29214__$1 = (function (){var statearr_29271 = state_29214;
(statearr_29271[(7)] = inst_29115__$1);

return statearr_29271;
})();
if(inst_29115__$1){
var statearr_29272_29338 = state_29214__$1;
(statearr_29272_29338[(1)] = (16));

} else {
var statearr_29273_29339 = state_29214__$1;
(statearr_29273_29339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (9))){
var inst_29143 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29274_29340 = state_29214__$1;
(statearr_29274_29340[(2)] = inst_29143);

(statearr_29274_29340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (5))){
var inst_29093 = cljs.core.deref.call(null,cs);
var inst_29094 = cljs.core.seq.call(null,inst_29093);
var inst_29095 = inst_29094;
var inst_29096 = null;
var inst_29097 = (0);
var inst_29098 = (0);
var state_29214__$1 = (function (){var statearr_29275 = state_29214;
(statearr_29275[(14)] = inst_29098);

(statearr_29275[(15)] = inst_29096);

(statearr_29275[(16)] = inst_29095);

(statearr_29275[(17)] = inst_29097);

return statearr_29275;
})();
var statearr_29276_29341 = state_29214__$1;
(statearr_29276_29341[(2)] = null);

(statearr_29276_29341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (14))){
var state_29214__$1 = state_29214;
var statearr_29277_29342 = state_29214__$1;
(statearr_29277_29342[(2)] = null);

(statearr_29277_29342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (45))){
var inst_29204 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29278_29343 = state_29214__$1;
(statearr_29278_29343[(2)] = inst_29204);

(statearr_29278_29343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (26))){
var inst_29146 = (state_29214[(29)]);
var inst_29200 = (state_29214[(2)]);
var inst_29201 = cljs.core.seq.call(null,inst_29146);
var state_29214__$1 = (function (){var statearr_29279 = state_29214;
(statearr_29279[(31)] = inst_29200);

return statearr_29279;
})();
if(inst_29201){
var statearr_29280_29344 = state_29214__$1;
(statearr_29280_29344[(1)] = (42));

} else {
var statearr_29281_29345 = state_29214__$1;
(statearr_29281_29345[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (16))){
var inst_29115 = (state_29214[(7)]);
var inst_29117 = cljs.core.chunked_seq_QMARK_.call(null,inst_29115);
var state_29214__$1 = state_29214;
if(inst_29117){
var statearr_29282_29346 = state_29214__$1;
(statearr_29282_29346[(1)] = (19));

} else {
var statearr_29283_29347 = state_29214__$1;
(statearr_29283_29347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (38))){
var inst_29193 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29284_29348 = state_29214__$1;
(statearr_29284_29348[(2)] = inst_29193);

(statearr_29284_29348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (30))){
var state_29214__$1 = state_29214;
var statearr_29285_29349 = state_29214__$1;
(statearr_29285_29349[(2)] = null);

(statearr_29285_29349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (10))){
var inst_29098 = (state_29214[(14)]);
var inst_29096 = (state_29214[(15)]);
var inst_29104 = cljs.core._nth.call(null,inst_29096,inst_29098);
var inst_29105 = cljs.core.nth.call(null,inst_29104,(0),null);
var inst_29106 = cljs.core.nth.call(null,inst_29104,(1),null);
var state_29214__$1 = (function (){var statearr_29286 = state_29214;
(statearr_29286[(26)] = inst_29105);

return statearr_29286;
})();
if(cljs.core.truth_(inst_29106)){
var statearr_29287_29350 = state_29214__$1;
(statearr_29287_29350[(1)] = (13));

} else {
var statearr_29288_29351 = state_29214__$1;
(statearr_29288_29351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (18))){
var inst_29139 = (state_29214[(2)]);
var state_29214__$1 = state_29214;
var statearr_29289_29352 = state_29214__$1;
(statearr_29289_29352[(2)] = inst_29139);

(statearr_29289_29352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (42))){
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29214__$1,(45),dchan);
} else {
if((state_val_29215 === (37))){
var inst_29086 = (state_29214[(10)]);
var inst_29173 = (state_29214[(25)]);
var inst_29182 = (state_29214[(23)]);
var inst_29182__$1 = cljs.core.first.call(null,inst_29173);
var inst_29183 = cljs.core.async.put_BANG_.call(null,inst_29182__$1,inst_29086,done);
var state_29214__$1 = (function (){var statearr_29290 = state_29214;
(statearr_29290[(23)] = inst_29182__$1);

return statearr_29290;
})();
if(cljs.core.truth_(inst_29183)){
var statearr_29291_29353 = state_29214__$1;
(statearr_29291_29353[(1)] = (39));

} else {
var statearr_29292_29354 = state_29214__$1;
(statearr_29292_29354[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29215 === (8))){
var inst_29098 = (state_29214[(14)]);
var inst_29097 = (state_29214[(17)]);
var inst_29100 = (inst_29098 < inst_29097);
var inst_29101 = inst_29100;
var state_29214__$1 = state_29214;
if(cljs.core.truth_(inst_29101)){
var statearr_29293_29355 = state_29214__$1;
(statearr_29293_29355[(1)] = (10));

} else {
var statearr_29294_29356 = state_29214__$1;
(statearr_29294_29356[(1)] = (11));

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
});})(c__18518__auto___29302,cs,m,dchan,dctr,done))
;
return ((function (switch__18453__auto__,c__18518__auto___29302,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18454__auto__ = null;
var cljs$core$async$mult_$_state_machine__18454__auto____0 = (function (){
var statearr_29298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29298[(0)] = cljs$core$async$mult_$_state_machine__18454__auto__);

(statearr_29298[(1)] = (1));

return statearr_29298;
});
var cljs$core$async$mult_$_state_machine__18454__auto____1 = (function (state_29214){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_29214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e29299){if((e29299 instanceof Object)){
var ex__18457__auto__ = e29299;
var statearr_29300_29357 = state_29214;
(statearr_29300_29357[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29358 = state_29214;
state_29214 = G__29358;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18454__auto__ = function(state_29214){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18454__auto____1.call(this,state_29214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18454__auto____0;
cljs$core$async$mult_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18454__auto____1;
return cljs$core$async$mult_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___29302,cs,m,dchan,dctr,done))
})();
var state__18520__auto__ = (function (){var statearr_29301 = f__18519__auto__.call(null);
(statearr_29301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___29302);

return statearr_29301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___29302,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args29359 = [];
var len__17479__auto___29362 = arguments.length;
var i__17480__auto___29363 = (0);
while(true){
if((i__17480__auto___29363 < len__17479__auto___29362)){
args29359.push((arguments[i__17480__auto___29363]));

var G__29364 = (i__17480__auto___29363 + (1));
i__17480__auto___29363 = G__29364;
continue;
} else {
}
break;
}

var G__29361 = args29359.length;
switch (G__29361) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29359.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,ch);
} else {
var m__17077__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,ch);
} else {
var m__17077__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m);
} else {
var m__17077__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,state_map);
} else {
var m__17077__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17076__auto__ = (((m == null))?null:m);
var m__17077__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,m,mode);
} else {
var m__17077__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17486__auto__ = [];
var len__17479__auto___29378 = arguments.length;
var i__17480__auto___29379 = (0);
while(true){
if((i__17480__auto___29379 < len__17479__auto___29378)){
args__17486__auto__.push((arguments[i__17480__auto___29379]));

var G__29380 = (i__17480__auto___29379 + (1));
i__17480__auto___29379 = G__29380;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((3) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17487__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29372){
var map__29373 = p__29372;
var map__29373__$1 = ((((!((map__29373 == null)))?((((map__29373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29373):map__29373);
var opts = map__29373__$1;
var statearr_29375_29381 = state;
(statearr_29375_29381[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29373,map__29373__$1,opts){
return (function (val){
var statearr_29376_29382 = state;
(statearr_29376_29382[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29373,map__29373__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29377_29383 = state;
(statearr_29377_29383[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29368){
var G__29369 = cljs.core.first.call(null,seq29368);
var seq29368__$1 = cljs.core.next.call(null,seq29368);
var G__29370 = cljs.core.first.call(null,seq29368__$1);
var seq29368__$2 = cljs.core.next.call(null,seq29368__$1);
var G__29371 = cljs.core.first.call(null,seq29368__$2);
var seq29368__$3 = cljs.core.next.call(null,seq29368__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29369,G__29370,G__29371,seq29368__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29547 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29547 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29548){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29548 = meta29548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29549,meta29548__$1){
var self__ = this;
var _29549__$1 = this;
return (new cljs.core.async.t29547(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29548__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29549){
var self__ = this;
var _29549__$1 = this;
return self__.meta29548;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29548","meta29548",413365148,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29547.cljs$lang$type = true;

cljs.core.async.t29547.cljs$lang$ctorStr = "cljs.core.async/t29547";

cljs.core.async.t29547.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t29547");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29547 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29547(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29548){
return (new cljs.core.async.t29547(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29548));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29547(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18518__auto___29710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29647){
var state_val_29648 = (state_29647[(1)]);
if((state_val_29648 === (7))){
var inst_29565 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
var statearr_29649_29711 = state_29647__$1;
(statearr_29649_29711[(2)] = inst_29565);

(statearr_29649_29711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (20))){
var inst_29577 = (state_29647[(7)]);
var state_29647__$1 = state_29647;
var statearr_29650_29712 = state_29647__$1;
(statearr_29650_29712[(2)] = inst_29577);

(statearr_29650_29712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (27))){
var state_29647__$1 = state_29647;
var statearr_29651_29713 = state_29647__$1;
(statearr_29651_29713[(2)] = null);

(statearr_29651_29713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (1))){
var inst_29553 = (state_29647[(8)]);
var inst_29553__$1 = calc_state.call(null);
var inst_29555 = (inst_29553__$1 == null);
var inst_29556 = cljs.core.not.call(null,inst_29555);
var state_29647__$1 = (function (){var statearr_29652 = state_29647;
(statearr_29652[(8)] = inst_29553__$1);

return statearr_29652;
})();
if(inst_29556){
var statearr_29653_29714 = state_29647__$1;
(statearr_29653_29714[(1)] = (2));

} else {
var statearr_29654_29715 = state_29647__$1;
(statearr_29654_29715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (24))){
var inst_29600 = (state_29647[(9)]);
var inst_29607 = (state_29647[(10)]);
var inst_29621 = (state_29647[(11)]);
var inst_29621__$1 = inst_29600.call(null,inst_29607);
var state_29647__$1 = (function (){var statearr_29655 = state_29647;
(statearr_29655[(11)] = inst_29621__$1);

return statearr_29655;
})();
if(cljs.core.truth_(inst_29621__$1)){
var statearr_29656_29716 = state_29647__$1;
(statearr_29656_29716[(1)] = (29));

} else {
var statearr_29657_29717 = state_29647__$1;
(statearr_29657_29717[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (4))){
var inst_29568 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29568)){
var statearr_29658_29718 = state_29647__$1;
(statearr_29658_29718[(1)] = (8));

} else {
var statearr_29659_29719 = state_29647__$1;
(statearr_29659_29719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (15))){
var inst_29594 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29594)){
var statearr_29660_29720 = state_29647__$1;
(statearr_29660_29720[(1)] = (19));

} else {
var statearr_29661_29721 = state_29647__$1;
(statearr_29661_29721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (21))){
var inst_29599 = (state_29647[(12)]);
var inst_29599__$1 = (state_29647[(2)]);
var inst_29600 = cljs.core.get.call(null,inst_29599__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29601 = cljs.core.get.call(null,inst_29599__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29602 = cljs.core.get.call(null,inst_29599__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29647__$1 = (function (){var statearr_29662 = state_29647;
(statearr_29662[(12)] = inst_29599__$1);

(statearr_29662[(9)] = inst_29600);

(statearr_29662[(13)] = inst_29601);

return statearr_29662;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29647__$1,(22),inst_29602);
} else {
if((state_val_29648 === (31))){
var inst_29629 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29629)){
var statearr_29663_29722 = state_29647__$1;
(statearr_29663_29722[(1)] = (32));

} else {
var statearr_29664_29723 = state_29647__$1;
(statearr_29664_29723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (32))){
var inst_29606 = (state_29647[(14)]);
var state_29647__$1 = state_29647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29647__$1,(35),out,inst_29606);
} else {
if((state_val_29648 === (33))){
var inst_29599 = (state_29647[(12)]);
var inst_29577 = inst_29599;
var state_29647__$1 = (function (){var statearr_29665 = state_29647;
(statearr_29665[(7)] = inst_29577);

return statearr_29665;
})();
var statearr_29666_29724 = state_29647__$1;
(statearr_29666_29724[(2)] = null);

(statearr_29666_29724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (13))){
var inst_29577 = (state_29647[(7)]);
var inst_29584 = inst_29577.cljs$lang$protocol_mask$partition0$;
var inst_29585 = (inst_29584 & (64));
var inst_29586 = inst_29577.cljs$core$ISeq$;
var inst_29587 = (inst_29585) || (inst_29586);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29587)){
var statearr_29667_29725 = state_29647__$1;
(statearr_29667_29725[(1)] = (16));

} else {
var statearr_29668_29726 = state_29647__$1;
(statearr_29668_29726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (22))){
var inst_29606 = (state_29647[(14)]);
var inst_29607 = (state_29647[(10)]);
var inst_29605 = (state_29647[(2)]);
var inst_29606__$1 = cljs.core.nth.call(null,inst_29605,(0),null);
var inst_29607__$1 = cljs.core.nth.call(null,inst_29605,(1),null);
var inst_29608 = (inst_29606__$1 == null);
var inst_29609 = cljs.core._EQ_.call(null,inst_29607__$1,change);
var inst_29610 = (inst_29608) || (inst_29609);
var state_29647__$1 = (function (){var statearr_29669 = state_29647;
(statearr_29669[(14)] = inst_29606__$1);

(statearr_29669[(10)] = inst_29607__$1);

return statearr_29669;
})();
if(cljs.core.truth_(inst_29610)){
var statearr_29670_29727 = state_29647__$1;
(statearr_29670_29727[(1)] = (23));

} else {
var statearr_29671_29728 = state_29647__$1;
(statearr_29671_29728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (36))){
var inst_29599 = (state_29647[(12)]);
var inst_29577 = inst_29599;
var state_29647__$1 = (function (){var statearr_29672 = state_29647;
(statearr_29672[(7)] = inst_29577);

return statearr_29672;
})();
var statearr_29673_29729 = state_29647__$1;
(statearr_29673_29729[(2)] = null);

(statearr_29673_29729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (29))){
var inst_29621 = (state_29647[(11)]);
var state_29647__$1 = state_29647;
var statearr_29674_29730 = state_29647__$1;
(statearr_29674_29730[(2)] = inst_29621);

(statearr_29674_29730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (6))){
var state_29647__$1 = state_29647;
var statearr_29675_29731 = state_29647__$1;
(statearr_29675_29731[(2)] = false);

(statearr_29675_29731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (28))){
var inst_29617 = (state_29647[(2)]);
var inst_29618 = calc_state.call(null);
var inst_29577 = inst_29618;
var state_29647__$1 = (function (){var statearr_29676 = state_29647;
(statearr_29676[(15)] = inst_29617);

(statearr_29676[(7)] = inst_29577);

return statearr_29676;
})();
var statearr_29677_29732 = state_29647__$1;
(statearr_29677_29732[(2)] = null);

(statearr_29677_29732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (25))){
var inst_29643 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
var statearr_29678_29733 = state_29647__$1;
(statearr_29678_29733[(2)] = inst_29643);

(statearr_29678_29733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (34))){
var inst_29641 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
var statearr_29679_29734 = state_29647__$1;
(statearr_29679_29734[(2)] = inst_29641);

(statearr_29679_29734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (17))){
var state_29647__$1 = state_29647;
var statearr_29680_29735 = state_29647__$1;
(statearr_29680_29735[(2)] = false);

(statearr_29680_29735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (3))){
var state_29647__$1 = state_29647;
var statearr_29681_29736 = state_29647__$1;
(statearr_29681_29736[(2)] = false);

(statearr_29681_29736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (12))){
var inst_29645 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29647__$1,inst_29645);
} else {
if((state_val_29648 === (2))){
var inst_29553 = (state_29647[(8)]);
var inst_29558 = inst_29553.cljs$lang$protocol_mask$partition0$;
var inst_29559 = (inst_29558 & (64));
var inst_29560 = inst_29553.cljs$core$ISeq$;
var inst_29561 = (inst_29559) || (inst_29560);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29561)){
var statearr_29682_29737 = state_29647__$1;
(statearr_29682_29737[(1)] = (5));

} else {
var statearr_29683_29738 = state_29647__$1;
(statearr_29683_29738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (23))){
var inst_29606 = (state_29647[(14)]);
var inst_29612 = (inst_29606 == null);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29612)){
var statearr_29684_29739 = state_29647__$1;
(statearr_29684_29739[(1)] = (26));

} else {
var statearr_29685_29740 = state_29647__$1;
(statearr_29685_29740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (35))){
var inst_29632 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
if(cljs.core.truth_(inst_29632)){
var statearr_29686_29741 = state_29647__$1;
(statearr_29686_29741[(1)] = (36));

} else {
var statearr_29687_29742 = state_29647__$1;
(statearr_29687_29742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (19))){
var inst_29577 = (state_29647[(7)]);
var inst_29596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29577);
var state_29647__$1 = state_29647;
var statearr_29688_29743 = state_29647__$1;
(statearr_29688_29743[(2)] = inst_29596);

(statearr_29688_29743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (11))){
var inst_29577 = (state_29647[(7)]);
var inst_29581 = (inst_29577 == null);
var inst_29582 = cljs.core.not.call(null,inst_29581);
var state_29647__$1 = state_29647;
if(inst_29582){
var statearr_29689_29744 = state_29647__$1;
(statearr_29689_29744[(1)] = (13));

} else {
var statearr_29690_29745 = state_29647__$1;
(statearr_29690_29745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (9))){
var inst_29553 = (state_29647[(8)]);
var state_29647__$1 = state_29647;
var statearr_29691_29746 = state_29647__$1;
(statearr_29691_29746[(2)] = inst_29553);

(statearr_29691_29746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (5))){
var state_29647__$1 = state_29647;
var statearr_29692_29747 = state_29647__$1;
(statearr_29692_29747[(2)] = true);

(statearr_29692_29747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (14))){
var state_29647__$1 = state_29647;
var statearr_29693_29748 = state_29647__$1;
(statearr_29693_29748[(2)] = false);

(statearr_29693_29748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (26))){
var inst_29607 = (state_29647[(10)]);
var inst_29614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29607);
var state_29647__$1 = state_29647;
var statearr_29694_29749 = state_29647__$1;
(statearr_29694_29749[(2)] = inst_29614);

(statearr_29694_29749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (16))){
var state_29647__$1 = state_29647;
var statearr_29695_29750 = state_29647__$1;
(statearr_29695_29750[(2)] = true);

(statearr_29695_29750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (38))){
var inst_29637 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
var statearr_29696_29751 = state_29647__$1;
(statearr_29696_29751[(2)] = inst_29637);

(statearr_29696_29751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (30))){
var inst_29600 = (state_29647[(9)]);
var inst_29607 = (state_29647[(10)]);
var inst_29601 = (state_29647[(13)]);
var inst_29624 = cljs.core.empty_QMARK_.call(null,inst_29600);
var inst_29625 = inst_29601.call(null,inst_29607);
var inst_29626 = cljs.core.not.call(null,inst_29625);
var inst_29627 = (inst_29624) && (inst_29626);
var state_29647__$1 = state_29647;
var statearr_29697_29752 = state_29647__$1;
(statearr_29697_29752[(2)] = inst_29627);

(statearr_29697_29752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (10))){
var inst_29553 = (state_29647[(8)]);
var inst_29573 = (state_29647[(2)]);
var inst_29574 = cljs.core.get.call(null,inst_29573,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29575 = cljs.core.get.call(null,inst_29573,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29576 = cljs.core.get.call(null,inst_29573,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29577 = inst_29553;
var state_29647__$1 = (function (){var statearr_29698 = state_29647;
(statearr_29698[(16)] = inst_29575);

(statearr_29698[(7)] = inst_29577);

(statearr_29698[(17)] = inst_29574);

(statearr_29698[(18)] = inst_29576);

return statearr_29698;
})();
var statearr_29699_29753 = state_29647__$1;
(statearr_29699_29753[(2)] = null);

(statearr_29699_29753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (18))){
var inst_29591 = (state_29647[(2)]);
var state_29647__$1 = state_29647;
var statearr_29700_29754 = state_29647__$1;
(statearr_29700_29754[(2)] = inst_29591);

(statearr_29700_29754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (37))){
var state_29647__$1 = state_29647;
var statearr_29701_29755 = state_29647__$1;
(statearr_29701_29755[(2)] = null);

(statearr_29701_29755[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29648 === (8))){
var inst_29553 = (state_29647[(8)]);
var inst_29570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29553);
var state_29647__$1 = state_29647;
var statearr_29702_29756 = state_29647__$1;
(statearr_29702_29756[(2)] = inst_29570);

(statearr_29702_29756[(1)] = (10));


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
});})(c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18453__auto__,c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18454__auto__ = null;
var cljs$core$async$mix_$_state_machine__18454__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29706[(0)] = cljs$core$async$mix_$_state_machine__18454__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var cljs$core$async$mix_$_state_machine__18454__auto____1 = (function (state_29647){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_29647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__18457__auto__ = e29707;
var statearr_29708_29757 = state_29647;
(statearr_29708_29757[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29758 = state_29647;
state_29647 = G__29758;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18454__auto__ = function(state_29647){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18454__auto____1.call(this,state_29647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18454__auto____0;
cljs$core$async$mix_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18454__auto____1;
return cljs$core$async$mix_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18520__auto__ = (function (){var statearr_29709 = f__18519__auto__.call(null);
(statearr_29709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___29710);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___29710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17076__auto__ = (((p == null))?null:p);
var m__17077__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17077__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17076__auto__ = (((p == null))?null:p);
var m__17077__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,p,v,ch);
} else {
var m__17077__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args29761 = [];
var len__17479__auto___29764 = arguments.length;
var i__17480__auto___29765 = (0);
while(true){
if((i__17480__auto___29765 < len__17479__auto___29764)){
args29761.push((arguments[i__17480__auto___29765]));

var G__29766 = (i__17480__auto___29765 + (1));
i__17480__auto___29765 = G__29766;
continue;
} else {
}
break;
}

var G__29763 = args29761.length;
switch (G__29763) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29761.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17076__auto__ = (((p == null))?null:p);
var m__17077__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,p);
} else {
var m__17077__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17076__auto__ = (((p == null))?null:p);
var m__17077__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17076__auto__)]);
if(!((m__17077__auto__ == null))){
return m__17077__auto__.call(null,p,v);
} else {
var m__17077__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17077__auto____$1 == null))){
return m__17077__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args29769 = [];
var len__17479__auto___29894 = arguments.length;
var i__17480__auto___29895 = (0);
while(true){
if((i__17480__auto___29895 < len__17479__auto___29894)){
args29769.push((arguments[i__17480__auto___29895]));

var G__29896 = (i__17480__auto___29895 + (1));
i__17480__auto___29895 = G__29896;
continue;
} else {
}
break;
}

var G__29771 = args29769.length;
switch (G__29771) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29769.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16440__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16440__auto__,mults){
return (function (p1__29768_SHARP_){
if(cljs.core.truth_(p1__29768_SHARP_.call(null,topic))){
return p1__29768_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29768_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16440__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29772 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29773){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29773 = meta29773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29774,meta29773__$1){
var self__ = this;
var _29774__$1 = this;
return (new cljs.core.async.t29772(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29773__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29774){
var self__ = this;
var _29774__$1 = this;
return self__.meta29773;
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29772.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29772.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29773","meta29773",398997752,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29772.cljs$lang$type = true;

cljs.core.async.t29772.cljs$lang$ctorStr = "cljs.core.async/t29772";

cljs.core.async.t29772.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t29772");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29772 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29772(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29773){
return (new cljs.core.async.t29772(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29773));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29772(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18518__auto___29898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___29898,mults,ensure_mult,p){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___29898,mults,ensure_mult,p){
return (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (7))){
var inst_29842 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29848_29899 = state_29846__$1;
(statearr_29848_29899[(2)] = inst_29842);

(statearr_29848_29899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (20))){
var state_29846__$1 = state_29846;
var statearr_29849_29900 = state_29846__$1;
(statearr_29849_29900[(2)] = null);

(statearr_29849_29900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
var statearr_29850_29901 = state_29846__$1;
(statearr_29850_29901[(2)] = null);

(statearr_29850_29901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (24))){
var inst_29825 = (state_29846[(7)]);
var inst_29834 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29825);
var state_29846__$1 = state_29846;
var statearr_29851_29902 = state_29846__$1;
(statearr_29851_29902[(2)] = inst_29834);

(statearr_29851_29902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (4))){
var inst_29777 = (state_29846[(8)]);
var inst_29777__$1 = (state_29846[(2)]);
var inst_29778 = (inst_29777__$1 == null);
var state_29846__$1 = (function (){var statearr_29852 = state_29846;
(statearr_29852[(8)] = inst_29777__$1);

return statearr_29852;
})();
if(cljs.core.truth_(inst_29778)){
var statearr_29853_29903 = state_29846__$1;
(statearr_29853_29903[(1)] = (5));

} else {
var statearr_29854_29904 = state_29846__$1;
(statearr_29854_29904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (15))){
var inst_29819 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29855_29905 = state_29846__$1;
(statearr_29855_29905[(2)] = inst_29819);

(statearr_29855_29905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (21))){
var inst_29839 = (state_29846[(2)]);
var state_29846__$1 = (function (){var statearr_29856 = state_29846;
(statearr_29856[(9)] = inst_29839);

return statearr_29856;
})();
var statearr_29857_29906 = state_29846__$1;
(statearr_29857_29906[(2)] = null);

(statearr_29857_29906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (13))){
var inst_29801 = (state_29846[(10)]);
var inst_29803 = cljs.core.chunked_seq_QMARK_.call(null,inst_29801);
var state_29846__$1 = state_29846;
if(inst_29803){
var statearr_29858_29907 = state_29846__$1;
(statearr_29858_29907[(1)] = (16));

} else {
var statearr_29859_29908 = state_29846__$1;
(statearr_29859_29908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (22))){
var inst_29831 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29831)){
var statearr_29860_29909 = state_29846__$1;
(statearr_29860_29909[(1)] = (23));

} else {
var statearr_29861_29910 = state_29846__$1;
(statearr_29861_29910[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (6))){
var inst_29827 = (state_29846[(11)]);
var inst_29777 = (state_29846[(8)]);
var inst_29825 = (state_29846[(7)]);
var inst_29825__$1 = topic_fn.call(null,inst_29777);
var inst_29826 = cljs.core.deref.call(null,mults);
var inst_29827__$1 = cljs.core.get.call(null,inst_29826,inst_29825__$1);
var state_29846__$1 = (function (){var statearr_29862 = state_29846;
(statearr_29862[(11)] = inst_29827__$1);

(statearr_29862[(7)] = inst_29825__$1);

return statearr_29862;
})();
if(cljs.core.truth_(inst_29827__$1)){
var statearr_29863_29911 = state_29846__$1;
(statearr_29863_29911[(1)] = (19));

} else {
var statearr_29864_29912 = state_29846__$1;
(statearr_29864_29912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (25))){
var inst_29836 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29865_29913 = state_29846__$1;
(statearr_29865_29913[(2)] = inst_29836);

(statearr_29865_29913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (17))){
var inst_29801 = (state_29846[(10)]);
var inst_29810 = cljs.core.first.call(null,inst_29801);
var inst_29811 = cljs.core.async.muxch_STAR_.call(null,inst_29810);
var inst_29812 = cljs.core.async.close_BANG_.call(null,inst_29811);
var inst_29813 = cljs.core.next.call(null,inst_29801);
var inst_29787 = inst_29813;
var inst_29788 = null;
var inst_29789 = (0);
var inst_29790 = (0);
var state_29846__$1 = (function (){var statearr_29866 = state_29846;
(statearr_29866[(12)] = inst_29812);

(statearr_29866[(13)] = inst_29790);

(statearr_29866[(14)] = inst_29788);

(statearr_29866[(15)] = inst_29789);

(statearr_29866[(16)] = inst_29787);

return statearr_29866;
})();
var statearr_29867_29914 = state_29846__$1;
(statearr_29867_29914[(2)] = null);

(statearr_29867_29914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (3))){
var inst_29844 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29846__$1,inst_29844);
} else {
if((state_val_29847 === (12))){
var inst_29821 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29868_29915 = state_29846__$1;
(statearr_29868_29915[(2)] = inst_29821);

(statearr_29868_29915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (2))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29846__$1,(4),ch);
} else {
if((state_val_29847 === (23))){
var state_29846__$1 = state_29846;
var statearr_29869_29916 = state_29846__$1;
(statearr_29869_29916[(2)] = null);

(statearr_29869_29916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (19))){
var inst_29827 = (state_29846[(11)]);
var inst_29777 = (state_29846[(8)]);
var inst_29829 = cljs.core.async.muxch_STAR_.call(null,inst_29827);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29846__$1,(22),inst_29829,inst_29777);
} else {
if((state_val_29847 === (11))){
var inst_29787 = (state_29846[(16)]);
var inst_29801 = (state_29846[(10)]);
var inst_29801__$1 = cljs.core.seq.call(null,inst_29787);
var state_29846__$1 = (function (){var statearr_29870 = state_29846;
(statearr_29870[(10)] = inst_29801__$1);

return statearr_29870;
})();
if(inst_29801__$1){
var statearr_29871_29917 = state_29846__$1;
(statearr_29871_29917[(1)] = (13));

} else {
var statearr_29872_29918 = state_29846__$1;
(statearr_29872_29918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (9))){
var inst_29823 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29873_29919 = state_29846__$1;
(statearr_29873_29919[(2)] = inst_29823);

(statearr_29873_29919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (5))){
var inst_29784 = cljs.core.deref.call(null,mults);
var inst_29785 = cljs.core.vals.call(null,inst_29784);
var inst_29786 = cljs.core.seq.call(null,inst_29785);
var inst_29787 = inst_29786;
var inst_29788 = null;
var inst_29789 = (0);
var inst_29790 = (0);
var state_29846__$1 = (function (){var statearr_29874 = state_29846;
(statearr_29874[(13)] = inst_29790);

(statearr_29874[(14)] = inst_29788);

(statearr_29874[(15)] = inst_29789);

(statearr_29874[(16)] = inst_29787);

return statearr_29874;
})();
var statearr_29875_29920 = state_29846__$1;
(statearr_29875_29920[(2)] = null);

(statearr_29875_29920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (14))){
var state_29846__$1 = state_29846;
var statearr_29879_29921 = state_29846__$1;
(statearr_29879_29921[(2)] = null);

(statearr_29879_29921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (16))){
var inst_29801 = (state_29846[(10)]);
var inst_29805 = cljs.core.chunk_first.call(null,inst_29801);
var inst_29806 = cljs.core.chunk_rest.call(null,inst_29801);
var inst_29807 = cljs.core.count.call(null,inst_29805);
var inst_29787 = inst_29806;
var inst_29788 = inst_29805;
var inst_29789 = inst_29807;
var inst_29790 = (0);
var state_29846__$1 = (function (){var statearr_29880 = state_29846;
(statearr_29880[(13)] = inst_29790);

(statearr_29880[(14)] = inst_29788);

(statearr_29880[(15)] = inst_29789);

(statearr_29880[(16)] = inst_29787);

return statearr_29880;
})();
var statearr_29881_29922 = state_29846__$1;
(statearr_29881_29922[(2)] = null);

(statearr_29881_29922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (10))){
var inst_29790 = (state_29846[(13)]);
var inst_29788 = (state_29846[(14)]);
var inst_29789 = (state_29846[(15)]);
var inst_29787 = (state_29846[(16)]);
var inst_29795 = cljs.core._nth.call(null,inst_29788,inst_29790);
var inst_29796 = cljs.core.async.muxch_STAR_.call(null,inst_29795);
var inst_29797 = cljs.core.async.close_BANG_.call(null,inst_29796);
var inst_29798 = (inst_29790 + (1));
var tmp29876 = inst_29788;
var tmp29877 = inst_29789;
var tmp29878 = inst_29787;
var inst_29787__$1 = tmp29878;
var inst_29788__$1 = tmp29876;
var inst_29789__$1 = tmp29877;
var inst_29790__$1 = inst_29798;
var state_29846__$1 = (function (){var statearr_29882 = state_29846;
(statearr_29882[(17)] = inst_29797);

(statearr_29882[(13)] = inst_29790__$1);

(statearr_29882[(14)] = inst_29788__$1);

(statearr_29882[(15)] = inst_29789__$1);

(statearr_29882[(16)] = inst_29787__$1);

return statearr_29882;
})();
var statearr_29883_29923 = state_29846__$1;
(statearr_29883_29923[(2)] = null);

(statearr_29883_29923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (18))){
var inst_29816 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29884_29924 = state_29846__$1;
(statearr_29884_29924[(2)] = inst_29816);

(statearr_29884_29924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (8))){
var inst_29790 = (state_29846[(13)]);
var inst_29789 = (state_29846[(15)]);
var inst_29792 = (inst_29790 < inst_29789);
var inst_29793 = inst_29792;
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29793)){
var statearr_29885_29925 = state_29846__$1;
(statearr_29885_29925[(1)] = (10));

} else {
var statearr_29886_29926 = state_29846__$1;
(statearr_29886_29926[(1)] = (11));

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
});})(c__18518__auto___29898,mults,ensure_mult,p))
;
return ((function (switch__18453__auto__,c__18518__auto___29898,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_29890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29890[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_29890[(1)] = (1));

return statearr_29890;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_29846){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_29846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e29891){if((e29891 instanceof Object)){
var ex__18457__auto__ = e29891;
var statearr_29892_29927 = state_29846;
(statearr_29892_29927[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29928 = state_29846;
state_29846 = G__29928;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___29898,mults,ensure_mult,p))
})();
var state__18520__auto__ = (function (){var statearr_29893 = f__18519__auto__.call(null);
(statearr_29893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___29898);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___29898,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args29929 = [];
var len__17479__auto___29932 = arguments.length;
var i__17480__auto___29933 = (0);
while(true){
if((i__17480__auto___29933 < len__17479__auto___29932)){
args29929.push((arguments[i__17480__auto___29933]));

var G__29934 = (i__17480__auto___29933 + (1));
i__17480__auto___29933 = G__29934;
continue;
} else {
}
break;
}

var G__29931 = args29929.length;
switch (G__29931) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29929.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args29936 = [];
var len__17479__auto___29939 = arguments.length;
var i__17480__auto___29940 = (0);
while(true){
if((i__17480__auto___29940 < len__17479__auto___29939)){
args29936.push((arguments[i__17480__auto___29940]));

var G__29941 = (i__17480__auto___29940 + (1));
i__17480__auto___29940 = G__29941;
continue;
} else {
}
break;
}

var G__29938 = args29936.length;
switch (G__29938) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29936.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args29943 = [];
var len__17479__auto___30014 = arguments.length;
var i__17480__auto___30015 = (0);
while(true){
if((i__17480__auto___30015 < len__17479__auto___30014)){
args29943.push((arguments[i__17480__auto___30015]));

var G__30016 = (i__17480__auto___30015 + (1));
i__17480__auto___30015 = G__30016;
continue;
} else {
}
break;
}

var G__29945 = args29943.length;
switch (G__29945) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29943.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18518__auto___30018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (7))){
var state_29984__$1 = state_29984;
var statearr_29986_30019 = state_29984__$1;
(statearr_29986_30019[(2)] = null);

(statearr_29986_30019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (1))){
var state_29984__$1 = state_29984;
var statearr_29987_30020 = state_29984__$1;
(statearr_29987_30020[(2)] = null);

(statearr_29987_30020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (4))){
var inst_29948 = (state_29984[(7)]);
var inst_29950 = (inst_29948 < cnt);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29950)){
var statearr_29988_30021 = state_29984__$1;
(statearr_29988_30021[(1)] = (6));

} else {
var statearr_29989_30022 = state_29984__$1;
(statearr_29989_30022[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (15))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29990_30023 = state_29984__$1;
(statearr_29990_30023[(2)] = inst_29980);

(statearr_29990_30023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (13))){
var inst_29973 = cljs.core.async.close_BANG_.call(null,out);
var state_29984__$1 = state_29984;
var statearr_29991_30024 = state_29984__$1;
(statearr_29991_30024[(2)] = inst_29973);

(statearr_29991_30024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var state_29984__$1 = state_29984;
var statearr_29992_30025 = state_29984__$1;
(statearr_29992_30025[(2)] = null);

(statearr_29992_30025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (3))){
var inst_29982 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else {
if((state_val_29985 === (12))){
var inst_29970 = (state_29984[(8)]);
var inst_29970__$1 = (state_29984[(2)]);
var inst_29971 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29970__$1);
var state_29984__$1 = (function (){var statearr_29993 = state_29984;
(statearr_29993[(8)] = inst_29970__$1);

return statearr_29993;
})();
if(cljs.core.truth_(inst_29971)){
var statearr_29994_30026 = state_29984__$1;
(statearr_29994_30026[(1)] = (13));

} else {
var statearr_29995_30027 = state_29984__$1;
(statearr_29995_30027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var inst_29947 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29948 = (0);
var state_29984__$1 = (function (){var statearr_29996 = state_29984;
(statearr_29996[(9)] = inst_29947);

(statearr_29996[(7)] = inst_29948);

return statearr_29996;
})();
var statearr_29997_30028 = state_29984__$1;
(statearr_29997_30028[(2)] = null);

(statearr_29997_30028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (11))){
var inst_29948 = (state_29984[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29984,(10),Object,null,(9));
var inst_29957 = chs__$1.call(null,inst_29948);
var inst_29958 = done.call(null,inst_29948);
var inst_29959 = cljs.core.async.take_BANG_.call(null,inst_29957,inst_29958);
var state_29984__$1 = state_29984;
var statearr_29998_30029 = state_29984__$1;
(statearr_29998_30029[(2)] = inst_29959);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (9))){
var inst_29948 = (state_29984[(7)]);
var inst_29961 = (state_29984[(2)]);
var inst_29962 = (inst_29948 + (1));
var inst_29948__$1 = inst_29962;
var state_29984__$1 = (function (){var statearr_29999 = state_29984;
(statearr_29999[(7)] = inst_29948__$1);

(statearr_29999[(10)] = inst_29961);

return statearr_29999;
})();
var statearr_30000_30030 = state_29984__$1;
(statearr_30000_30030[(2)] = null);

(statearr_30000_30030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29968 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_30001 = state_29984;
(statearr_30001[(11)] = inst_29968);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29984__$1,(12),dchan);
} else {
if((state_val_29985 === (14))){
var inst_29970 = (state_29984[(8)]);
var inst_29975 = cljs.core.apply.call(null,f,inst_29970);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(16),out,inst_29975);
} else {
if((state_val_29985 === (16))){
var inst_29977 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_30002 = state_29984;
(statearr_30002[(12)] = inst_29977);

return statearr_30002;
})();
var statearr_30003_30031 = state_29984__$1;
(statearr_30003_30031[(2)] = null);

(statearr_30003_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (10))){
var inst_29952 = (state_29984[(2)]);
var inst_29953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29984__$1 = (function (){var statearr_30004 = state_29984;
(statearr_30004[(13)] = inst_29952);

return statearr_30004;
})();
var statearr_30005_30032 = state_29984__$1;
(statearr_30005_30032[(2)] = inst_29953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (8))){
var inst_29966 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30006_30033 = state_29984__$1;
(statearr_30006_30033[(2)] = inst_29966);

(statearr_30006_30033[(1)] = (5));


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
});})(c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18453__auto__,c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30010[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30010[(1)] = (1));

return statearr_30010;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_29984){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_29984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30011){if((e30011 instanceof Object)){
var ex__18457__auto__ = e30011;
var statearr_30012_30034 = state_29984;
(statearr_30012_30034[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_29984;
state_29984 = G__30035;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18520__auto__ = (function (){var statearr_30013 = f__18519__auto__.call(null);
(statearr_30013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30018);

return statearr_30013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30018,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args30037 = [];
var len__17479__auto___30093 = arguments.length;
var i__17480__auto___30094 = (0);
while(true){
if((i__17480__auto___30094 < len__17479__auto___30093)){
args30037.push((arguments[i__17480__auto___30094]));

var G__30095 = (i__17480__auto___30094 + (1));
i__17480__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var G__30039 = args30037.length;
switch (G__30039) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30037.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30097,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30097,out){
return (function (state_30069){
var state_val_30070 = (state_30069[(1)]);
if((state_val_30070 === (7))){
var inst_30049 = (state_30069[(7)]);
var inst_30048 = (state_30069[(8)]);
var inst_30048__$1 = (state_30069[(2)]);
var inst_30049__$1 = cljs.core.nth.call(null,inst_30048__$1,(0),null);
var inst_30050 = cljs.core.nth.call(null,inst_30048__$1,(1),null);
var inst_30051 = (inst_30049__$1 == null);
var state_30069__$1 = (function (){var statearr_30071 = state_30069;
(statearr_30071[(9)] = inst_30050);

(statearr_30071[(7)] = inst_30049__$1);

(statearr_30071[(8)] = inst_30048__$1);

return statearr_30071;
})();
if(cljs.core.truth_(inst_30051)){
var statearr_30072_30098 = state_30069__$1;
(statearr_30072_30098[(1)] = (8));

} else {
var statearr_30073_30099 = state_30069__$1;
(statearr_30073_30099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (1))){
var inst_30040 = cljs.core.vec.call(null,chs);
var inst_30041 = inst_30040;
var state_30069__$1 = (function (){var statearr_30074 = state_30069;
(statearr_30074[(10)] = inst_30041);

return statearr_30074;
})();
var statearr_30075_30100 = state_30069__$1;
(statearr_30075_30100[(2)] = null);

(statearr_30075_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (4))){
var inst_30041 = (state_30069[(10)]);
var state_30069__$1 = state_30069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30069__$1,(7),inst_30041);
} else {
if((state_val_30070 === (6))){
var inst_30065 = (state_30069[(2)]);
var state_30069__$1 = state_30069;
var statearr_30076_30101 = state_30069__$1;
(statearr_30076_30101[(2)] = inst_30065);

(statearr_30076_30101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (3))){
var inst_30067 = (state_30069[(2)]);
var state_30069__$1 = state_30069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30069__$1,inst_30067);
} else {
if((state_val_30070 === (2))){
var inst_30041 = (state_30069[(10)]);
var inst_30043 = cljs.core.count.call(null,inst_30041);
var inst_30044 = (inst_30043 > (0));
var state_30069__$1 = state_30069;
if(cljs.core.truth_(inst_30044)){
var statearr_30078_30102 = state_30069__$1;
(statearr_30078_30102[(1)] = (4));

} else {
var statearr_30079_30103 = state_30069__$1;
(statearr_30079_30103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (11))){
var inst_30041 = (state_30069[(10)]);
var inst_30058 = (state_30069[(2)]);
var tmp30077 = inst_30041;
var inst_30041__$1 = tmp30077;
var state_30069__$1 = (function (){var statearr_30080 = state_30069;
(statearr_30080[(10)] = inst_30041__$1);

(statearr_30080[(11)] = inst_30058);

return statearr_30080;
})();
var statearr_30081_30104 = state_30069__$1;
(statearr_30081_30104[(2)] = null);

(statearr_30081_30104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (9))){
var inst_30049 = (state_30069[(7)]);
var state_30069__$1 = state_30069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30069__$1,(11),out,inst_30049);
} else {
if((state_val_30070 === (5))){
var inst_30063 = cljs.core.async.close_BANG_.call(null,out);
var state_30069__$1 = state_30069;
var statearr_30082_30105 = state_30069__$1;
(statearr_30082_30105[(2)] = inst_30063);

(statearr_30082_30105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (10))){
var inst_30061 = (state_30069[(2)]);
var state_30069__$1 = state_30069;
var statearr_30083_30106 = state_30069__$1;
(statearr_30083_30106[(2)] = inst_30061);

(statearr_30083_30106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30070 === (8))){
var inst_30041 = (state_30069[(10)]);
var inst_30050 = (state_30069[(9)]);
var inst_30049 = (state_30069[(7)]);
var inst_30048 = (state_30069[(8)]);
var inst_30053 = (function (){var cs = inst_30041;
var vec__30046 = inst_30048;
var v = inst_30049;
var c = inst_30050;
return ((function (cs,vec__30046,v,c,inst_30041,inst_30050,inst_30049,inst_30048,state_val_30070,c__18518__auto___30097,out){
return (function (p1__30036_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30036_SHARP_);
});
;})(cs,vec__30046,v,c,inst_30041,inst_30050,inst_30049,inst_30048,state_val_30070,c__18518__auto___30097,out))
})();
var inst_30054 = cljs.core.filterv.call(null,inst_30053,inst_30041);
var inst_30041__$1 = inst_30054;
var state_30069__$1 = (function (){var statearr_30084 = state_30069;
(statearr_30084[(10)] = inst_30041__$1);

return statearr_30084;
})();
var statearr_30085_30107 = state_30069__$1;
(statearr_30085_30107[(2)] = null);

(statearr_30085_30107[(1)] = (2));


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
});})(c__18518__auto___30097,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30097,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30089[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30089[(1)] = (1));

return statearr_30089;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30069){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30090){if((e30090 instanceof Object)){
var ex__18457__auto__ = e30090;
var statearr_30091_30108 = state_30069;
(statearr_30091_30108[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30109 = state_30069;
state_30069 = G__30109;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30097,out))
})();
var state__18520__auto__ = (function (){var statearr_30092 = f__18519__auto__.call(null);
(statearr_30092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30097);

return statearr_30092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args30110 = [];
var len__17479__auto___30159 = arguments.length;
var i__17480__auto___30160 = (0);
while(true){
if((i__17480__auto___30160 < len__17479__auto___30159)){
args30110.push((arguments[i__17480__auto___30160]));

var G__30161 = (i__17480__auto___30160 + (1));
i__17480__auto___30160 = G__30161;
continue;
} else {
}
break;
}

var G__30112 = args30110.length;
switch (G__30112) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30110.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30163,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30163,out){
return (function (state_30136){
var state_val_30137 = (state_30136[(1)]);
if((state_val_30137 === (7))){
var inst_30118 = (state_30136[(7)]);
var inst_30118__$1 = (state_30136[(2)]);
var inst_30119 = (inst_30118__$1 == null);
var inst_30120 = cljs.core.not.call(null,inst_30119);
var state_30136__$1 = (function (){var statearr_30138 = state_30136;
(statearr_30138[(7)] = inst_30118__$1);

return statearr_30138;
})();
if(inst_30120){
var statearr_30139_30164 = state_30136__$1;
(statearr_30139_30164[(1)] = (8));

} else {
var statearr_30140_30165 = state_30136__$1;
(statearr_30140_30165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (1))){
var inst_30113 = (0);
var state_30136__$1 = (function (){var statearr_30141 = state_30136;
(statearr_30141[(8)] = inst_30113);

return statearr_30141;
})();
var statearr_30142_30166 = state_30136__$1;
(statearr_30142_30166[(2)] = null);

(statearr_30142_30166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (4))){
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30136__$1,(7),ch);
} else {
if((state_val_30137 === (6))){
var inst_30131 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30143_30167 = state_30136__$1;
(statearr_30143_30167[(2)] = inst_30131);

(statearr_30143_30167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (3))){
var inst_30133 = (state_30136[(2)]);
var inst_30134 = cljs.core.async.close_BANG_.call(null,out);
var state_30136__$1 = (function (){var statearr_30144 = state_30136;
(statearr_30144[(9)] = inst_30133);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30136__$1,inst_30134);
} else {
if((state_val_30137 === (2))){
var inst_30113 = (state_30136[(8)]);
var inst_30115 = (inst_30113 < n);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30115)){
var statearr_30145_30168 = state_30136__$1;
(statearr_30145_30168[(1)] = (4));

} else {
var statearr_30146_30169 = state_30136__$1;
(statearr_30146_30169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (11))){
var inst_30113 = (state_30136[(8)]);
var inst_30123 = (state_30136[(2)]);
var inst_30124 = (inst_30113 + (1));
var inst_30113__$1 = inst_30124;
var state_30136__$1 = (function (){var statearr_30147 = state_30136;
(statearr_30147[(10)] = inst_30123);

(statearr_30147[(8)] = inst_30113__$1);

return statearr_30147;
})();
var statearr_30148_30170 = state_30136__$1;
(statearr_30148_30170[(2)] = null);

(statearr_30148_30170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (9))){
var state_30136__$1 = state_30136;
var statearr_30149_30171 = state_30136__$1;
(statearr_30149_30171[(2)] = null);

(statearr_30149_30171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (5))){
var state_30136__$1 = state_30136;
var statearr_30150_30172 = state_30136__$1;
(statearr_30150_30172[(2)] = null);

(statearr_30150_30172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (10))){
var inst_30128 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30151_30173 = state_30136__$1;
(statearr_30151_30173[(2)] = inst_30128);

(statearr_30151_30173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (8))){
var inst_30118 = (state_30136[(7)]);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30136__$1,(11),out,inst_30118);
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
});})(c__18518__auto___30163,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30163,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30155[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30155[(1)] = (1));

return statearr_30155;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30136){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30156){if((e30156 instanceof Object)){
var ex__18457__auto__ = e30156;
var statearr_30157_30174 = state_30136;
(statearr_30157_30174[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30175 = state_30136;
state_30136 = G__30175;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30163,out))
})();
var state__18520__auto__ = (function (){var statearr_30158 = f__18519__auto__.call(null);
(statearr_30158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30163);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30163,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30183 = (function (map_LT_,f,ch,meta30184){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30184 = meta30184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30185,meta30184__$1){
var self__ = this;
var _30185__$1 = this;
return (new cljs.core.async.t30183(self__.map_LT_,self__.f,self__.ch,meta30184__$1));
});

cljs.core.async.t30183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30185){
var self__ = this;
var _30185__$1 = this;
return self__.meta30184;
});

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30186 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30186 = (function (map_LT_,f,ch,meta30184,_,fn1,meta30187){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30184 = meta30184;
this._ = _;
this.fn1 = fn1;
this.meta30187 = meta30187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30188,meta30187__$1){
var self__ = this;
var _30188__$1 = this;
return (new cljs.core.async.t30186(self__.map_LT_,self__.f,self__.ch,self__.meta30184,self__._,self__.fn1,meta30187__$1));
});})(___$1))
;

cljs.core.async.t30186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30188){
var self__ = this;
var _30188__$1 = this;
return self__.meta30187;
});})(___$1))
;

cljs.core.async.t30186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30176_SHARP_){
return f1.call(null,(((p1__30176_SHARP_ == null))?null:self__.f.call(null,p1__30176_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30186.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30184","meta30184",-317167581,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t30183","cljs.core.async/t30183",-2042288947,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30187","meta30187",810632389,null)], null);
});})(___$1))
;

cljs.core.async.t30186.cljs$lang$type = true;

cljs.core.async.t30186.cljs$lang$ctorStr = "cljs.core.async/t30186";

cljs.core.async.t30186.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t30186");
});})(___$1))
;

cljs.core.async.__GT_t30186 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30186(map_LT___$1,f__$1,ch__$1,meta30184__$1,___$2,fn1__$1,meta30187){
return (new cljs.core.async.t30186(map_LT___$1,f__$1,ch__$1,meta30184__$1,___$2,fn1__$1,meta30187));
});})(___$1))
;

}

return (new cljs.core.async.t30186(self__.map_LT_,self__.f,self__.ch,self__.meta30184,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16428__auto__ = ret;
if(cljs.core.truth_(and__16428__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16428__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30184","meta30184",-317167581,null)], null);
});

cljs.core.async.t30183.cljs$lang$type = true;

cljs.core.async.t30183.cljs$lang$ctorStr = "cljs.core.async/t30183";

cljs.core.async.t30183.cljs$lang$ctorPrWriter = (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t30183");
});

cljs.core.async.__GT_t30183 = (function cljs$core$async$map_LT__$___GT_t30183(map_LT___$1,f__$1,ch__$1,meta30184){
return (new cljs.core.async.t30183(map_LT___$1,f__$1,ch__$1,meta30184));
});

}

return (new cljs.core.async.t30183(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30192 = (function (map_GT_,f,ch,meta30193){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30193 = meta30193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30194,meta30193__$1){
var self__ = this;
var _30194__$1 = this;
return (new cljs.core.async.t30192(self__.map_GT_,self__.f,self__.ch,meta30193__$1));
});

cljs.core.async.t30192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30194){
var self__ = this;
var _30194__$1 = this;
return self__.meta30193;
});

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30193","meta30193",1761183619,null)], null);
});

cljs.core.async.t30192.cljs$lang$type = true;

cljs.core.async.t30192.cljs$lang$ctorStr = "cljs.core.async/t30192";

cljs.core.async.t30192.cljs$lang$ctorPrWriter = (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t30192");
});

cljs.core.async.__GT_t30192 = (function cljs$core$async$map_GT__$___GT_t30192(map_GT___$1,f__$1,ch__$1,meta30193){
return (new cljs.core.async.t30192(map_GT___$1,f__$1,ch__$1,meta30193));
});

}

return (new cljs.core.async.t30192(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30198 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30198 = (function (filter_GT_,p,ch,meta30199){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30199 = meta30199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30200,meta30199__$1){
var self__ = this;
var _30200__$1 = this;
return (new cljs.core.async.t30198(self__.filter_GT_,self__.p,self__.ch,meta30199__$1));
});

cljs.core.async.t30198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30200){
var self__ = this;
var _30200__$1 = this;
return self__.meta30199;
});

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30199","meta30199",-1397362029,null)], null);
});

cljs.core.async.t30198.cljs$lang$type = true;

cljs.core.async.t30198.cljs$lang$ctorStr = "cljs.core.async/t30198";

cljs.core.async.t30198.cljs$lang$ctorPrWriter = (function (this__17019__auto__,writer__17020__auto__,opt__17021__auto__){
return cljs.core._write.call(null,writer__17020__auto__,"cljs.core.async/t30198");
});

cljs.core.async.__GT_t30198 = (function cljs$core$async$filter_GT__$___GT_t30198(filter_GT___$1,p__$1,ch__$1,meta30199){
return (new cljs.core.async.t30198(filter_GT___$1,p__$1,ch__$1,meta30199));
});

}

return (new cljs.core.async.t30198(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args30201 = [];
var len__17479__auto___30245 = arguments.length;
var i__17480__auto___30246 = (0);
while(true){
if((i__17480__auto___30246 < len__17479__auto___30245)){
args30201.push((arguments[i__17480__auto___30246]));

var G__30247 = (i__17480__auto___30246 + (1));
i__17480__auto___30246 = G__30247;
continue;
} else {
}
break;
}

var G__30203 = args30201.length;
switch (G__30203) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30201.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30249,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30249,out){
return (function (state_30224){
var state_val_30225 = (state_30224[(1)]);
if((state_val_30225 === (7))){
var inst_30220 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30226_30250 = state_30224__$1;
(statearr_30226_30250[(2)] = inst_30220);

(statearr_30226_30250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (1))){
var state_30224__$1 = state_30224;
var statearr_30227_30251 = state_30224__$1;
(statearr_30227_30251[(2)] = null);

(statearr_30227_30251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (4))){
var inst_30206 = (state_30224[(7)]);
var inst_30206__$1 = (state_30224[(2)]);
var inst_30207 = (inst_30206__$1 == null);
var state_30224__$1 = (function (){var statearr_30228 = state_30224;
(statearr_30228[(7)] = inst_30206__$1);

return statearr_30228;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30229_30252 = state_30224__$1;
(statearr_30229_30252[(1)] = (5));

} else {
var statearr_30230_30253 = state_30224__$1;
(statearr_30230_30253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (6))){
var inst_30206 = (state_30224[(7)]);
var inst_30211 = p.call(null,inst_30206);
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30211)){
var statearr_30231_30254 = state_30224__$1;
(statearr_30231_30254[(1)] = (8));

} else {
var statearr_30232_30255 = state_30224__$1;
(statearr_30232_30255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (3))){
var inst_30222 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30224__$1,inst_30222);
} else {
if((state_val_30225 === (2))){
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30224__$1,(4),ch);
} else {
if((state_val_30225 === (11))){
var inst_30214 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30233_30256 = state_30224__$1;
(statearr_30233_30256[(2)] = inst_30214);

(statearr_30233_30256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (9))){
var state_30224__$1 = state_30224;
var statearr_30234_30257 = state_30224__$1;
(statearr_30234_30257[(2)] = null);

(statearr_30234_30257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (5))){
var inst_30209 = cljs.core.async.close_BANG_.call(null,out);
var state_30224__$1 = state_30224;
var statearr_30235_30258 = state_30224__$1;
(statearr_30235_30258[(2)] = inst_30209);

(statearr_30235_30258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (10))){
var inst_30217 = (state_30224[(2)]);
var state_30224__$1 = (function (){var statearr_30236 = state_30224;
(statearr_30236[(8)] = inst_30217);

return statearr_30236;
})();
var statearr_30237_30259 = state_30224__$1;
(statearr_30237_30259[(2)] = null);

(statearr_30237_30259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (8))){
var inst_30206 = (state_30224[(7)]);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30224__$1,(11),out,inst_30206);
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
});})(c__18518__auto___30249,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30249,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30241 = [null,null,null,null,null,null,null,null,null];
(statearr_30241[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30241[(1)] = (1));

return statearr_30241;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30224){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30242){if((e30242 instanceof Object)){
var ex__18457__auto__ = e30242;
var statearr_30243_30260 = state_30224;
(statearr_30243_30260[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30261 = state_30224;
state_30224 = G__30261;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30249,out))
})();
var state__18520__auto__ = (function (){var statearr_30244 = f__18519__auto__.call(null);
(statearr_30244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30249);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30249,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args30262 = [];
var len__17479__auto___30265 = arguments.length;
var i__17480__auto___30266 = (0);
while(true){
if((i__17480__auto___30266 < len__17479__auto___30265)){
args30262.push((arguments[i__17480__auto___30266]));

var G__30267 = (i__17480__auto___30266 + (1));
i__17480__auto___30266 = G__30267;
continue;
} else {
}
break;
}

var G__30264 = args30262.length;
switch (G__30264) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30262.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_30434){
var state_val_30435 = (state_30434[(1)]);
if((state_val_30435 === (7))){
var inst_30430 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30436_30477 = state_30434__$1;
(statearr_30436_30477[(2)] = inst_30430);

(statearr_30436_30477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (20))){
var inst_30400 = (state_30434[(7)]);
var inst_30411 = (state_30434[(2)]);
var inst_30412 = cljs.core.next.call(null,inst_30400);
var inst_30386 = inst_30412;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30434__$1 = (function (){var statearr_30437 = state_30434;
(statearr_30437[(8)] = inst_30387);

(statearr_30437[(9)] = inst_30389);

(statearr_30437[(10)] = inst_30388);

(statearr_30437[(11)] = inst_30411);

(statearr_30437[(12)] = inst_30386);

return statearr_30437;
})();
var statearr_30438_30478 = state_30434__$1;
(statearr_30438_30478[(2)] = null);

(statearr_30438_30478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (1))){
var state_30434__$1 = state_30434;
var statearr_30439_30479 = state_30434__$1;
(statearr_30439_30479[(2)] = null);

(statearr_30439_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (4))){
var inst_30375 = (state_30434[(13)]);
var inst_30375__$1 = (state_30434[(2)]);
var inst_30376 = (inst_30375__$1 == null);
var state_30434__$1 = (function (){var statearr_30440 = state_30434;
(statearr_30440[(13)] = inst_30375__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30376)){
var statearr_30441_30480 = state_30434__$1;
(statearr_30441_30480[(1)] = (5));

} else {
var statearr_30442_30481 = state_30434__$1;
(statearr_30442_30481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (15))){
var state_30434__$1 = state_30434;
var statearr_30446_30482 = state_30434__$1;
(statearr_30446_30482[(2)] = null);

(statearr_30446_30482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (21))){
var state_30434__$1 = state_30434;
var statearr_30447_30483 = state_30434__$1;
(statearr_30447_30483[(2)] = null);

(statearr_30447_30483[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (13))){
var inst_30387 = (state_30434[(8)]);
var inst_30389 = (state_30434[(9)]);
var inst_30388 = (state_30434[(10)]);
var inst_30386 = (state_30434[(12)]);
var inst_30396 = (state_30434[(2)]);
var inst_30397 = (inst_30389 + (1));
var tmp30443 = inst_30387;
var tmp30444 = inst_30388;
var tmp30445 = inst_30386;
var inst_30386__$1 = tmp30445;
var inst_30387__$1 = tmp30443;
var inst_30388__$1 = tmp30444;
var inst_30389__$1 = inst_30397;
var state_30434__$1 = (function (){var statearr_30448 = state_30434;
(statearr_30448[(8)] = inst_30387__$1);

(statearr_30448[(9)] = inst_30389__$1);

(statearr_30448[(10)] = inst_30388__$1);

(statearr_30448[(14)] = inst_30396);

(statearr_30448[(12)] = inst_30386__$1);

return statearr_30448;
})();
var statearr_30449_30484 = state_30434__$1;
(statearr_30449_30484[(2)] = null);

(statearr_30449_30484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (22))){
var state_30434__$1 = state_30434;
var statearr_30450_30485 = state_30434__$1;
(statearr_30450_30485[(2)] = null);

(statearr_30450_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (6))){
var inst_30375 = (state_30434[(13)]);
var inst_30384 = f.call(null,inst_30375);
var inst_30385 = cljs.core.seq.call(null,inst_30384);
var inst_30386 = inst_30385;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30434__$1 = (function (){var statearr_30451 = state_30434;
(statearr_30451[(8)] = inst_30387);

(statearr_30451[(9)] = inst_30389);

(statearr_30451[(10)] = inst_30388);

(statearr_30451[(12)] = inst_30386);

return statearr_30451;
})();
var statearr_30452_30486 = state_30434__$1;
(statearr_30452_30486[(2)] = null);

(statearr_30452_30486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (17))){
var inst_30400 = (state_30434[(7)]);
var inst_30404 = cljs.core.chunk_first.call(null,inst_30400);
var inst_30405 = cljs.core.chunk_rest.call(null,inst_30400);
var inst_30406 = cljs.core.count.call(null,inst_30404);
var inst_30386 = inst_30405;
var inst_30387 = inst_30404;
var inst_30388 = inst_30406;
var inst_30389 = (0);
var state_30434__$1 = (function (){var statearr_30453 = state_30434;
(statearr_30453[(8)] = inst_30387);

(statearr_30453[(9)] = inst_30389);

(statearr_30453[(10)] = inst_30388);

(statearr_30453[(12)] = inst_30386);

return statearr_30453;
})();
var statearr_30454_30487 = state_30434__$1;
(statearr_30454_30487[(2)] = null);

(statearr_30454_30487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (3))){
var inst_30432 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30434__$1,inst_30432);
} else {
if((state_val_30435 === (12))){
var inst_30420 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30455_30488 = state_30434__$1;
(statearr_30455_30488[(2)] = inst_30420);

(statearr_30455_30488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (2))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(4),in$);
} else {
if((state_val_30435 === (23))){
var inst_30428 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30456_30489 = state_30434__$1;
(statearr_30456_30489[(2)] = inst_30428);

(statearr_30456_30489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (19))){
var inst_30415 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30457_30490 = state_30434__$1;
(statearr_30457_30490[(2)] = inst_30415);

(statearr_30457_30490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (11))){
var inst_30400 = (state_30434[(7)]);
var inst_30386 = (state_30434[(12)]);
var inst_30400__$1 = cljs.core.seq.call(null,inst_30386);
var state_30434__$1 = (function (){var statearr_30458 = state_30434;
(statearr_30458[(7)] = inst_30400__$1);

return statearr_30458;
})();
if(inst_30400__$1){
var statearr_30459_30491 = state_30434__$1;
(statearr_30459_30491[(1)] = (14));

} else {
var statearr_30460_30492 = state_30434__$1;
(statearr_30460_30492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (9))){
var inst_30422 = (state_30434[(2)]);
var inst_30423 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30434__$1 = (function (){var statearr_30461 = state_30434;
(statearr_30461[(15)] = inst_30422);

return statearr_30461;
})();
if(cljs.core.truth_(inst_30423)){
var statearr_30462_30493 = state_30434__$1;
(statearr_30462_30493[(1)] = (21));

} else {
var statearr_30463_30494 = state_30434__$1;
(statearr_30463_30494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (5))){
var inst_30378 = cljs.core.async.close_BANG_.call(null,out);
var state_30434__$1 = state_30434;
var statearr_30464_30495 = state_30434__$1;
(statearr_30464_30495[(2)] = inst_30378);

(statearr_30464_30495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (14))){
var inst_30400 = (state_30434[(7)]);
var inst_30402 = cljs.core.chunked_seq_QMARK_.call(null,inst_30400);
var state_30434__$1 = state_30434;
if(inst_30402){
var statearr_30465_30496 = state_30434__$1;
(statearr_30465_30496[(1)] = (17));

} else {
var statearr_30466_30497 = state_30434__$1;
(statearr_30466_30497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (16))){
var inst_30418 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30467_30498 = state_30434__$1;
(statearr_30467_30498[(2)] = inst_30418);

(statearr_30467_30498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (10))){
var inst_30387 = (state_30434[(8)]);
var inst_30389 = (state_30434[(9)]);
var inst_30394 = cljs.core._nth.call(null,inst_30387,inst_30389);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(13),out,inst_30394);
} else {
if((state_val_30435 === (18))){
var inst_30400 = (state_30434[(7)]);
var inst_30409 = cljs.core.first.call(null,inst_30400);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(20),out,inst_30409);
} else {
if((state_val_30435 === (8))){
var inst_30389 = (state_30434[(9)]);
var inst_30388 = (state_30434[(10)]);
var inst_30391 = (inst_30389 < inst_30388);
var inst_30392 = inst_30391;
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30392)){
var statearr_30468_30499 = state_30434__$1;
(statearr_30468_30499[(1)] = (10));

} else {
var statearr_30469_30500 = state_30434__$1;
(statearr_30469_30500[(1)] = (11));

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
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____0 = (function (){
var statearr_30473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__);

(statearr_30473[(1)] = (1));

return statearr_30473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____1 = (function (state_30434){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30474){if((e30474 instanceof Object)){
var ex__18457__auto__ = e30474;
var statearr_30475_30501 = state_30434;
(statearr_30475_30501[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30502 = state_30434;
state_30434 = G__30502;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__ = function(state_30434){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____1.call(this,state_30434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18454__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_30476 = f__18519__auto__.call(null);
(statearr_30476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args30503 = [];
var len__17479__auto___30506 = arguments.length;
var i__17480__auto___30507 = (0);
while(true){
if((i__17480__auto___30507 < len__17479__auto___30506)){
args30503.push((arguments[i__17480__auto___30507]));

var G__30508 = (i__17480__auto___30507 + (1));
i__17480__auto___30507 = G__30508;
continue;
} else {
}
break;
}

var G__30505 = args30503.length;
switch (G__30505) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30503.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args30510 = [];
var len__17479__auto___30513 = arguments.length;
var i__17480__auto___30514 = (0);
while(true){
if((i__17480__auto___30514 < len__17479__auto___30513)){
args30510.push((arguments[i__17480__auto___30514]));

var G__30515 = (i__17480__auto___30514 + (1));
i__17480__auto___30514 = G__30515;
continue;
} else {
}
break;
}

var G__30512 = args30510.length;
switch (G__30512) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30510.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args30517 = [];
var len__17479__auto___30568 = arguments.length;
var i__17480__auto___30569 = (0);
while(true){
if((i__17480__auto___30569 < len__17479__auto___30568)){
args30517.push((arguments[i__17480__auto___30569]));

var G__30570 = (i__17480__auto___30569 + (1));
i__17480__auto___30569 = G__30570;
continue;
} else {
}
break;
}

var G__30519 = args30517.length;
switch (G__30519) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30517.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30572,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30572,out){
return (function (state_30543){
var state_val_30544 = (state_30543[(1)]);
if((state_val_30544 === (7))){
var inst_30538 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30545_30573 = state_30543__$1;
(statearr_30545_30573[(2)] = inst_30538);

(statearr_30545_30573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (1))){
var inst_30520 = null;
var state_30543__$1 = (function (){var statearr_30546 = state_30543;
(statearr_30546[(7)] = inst_30520);

return statearr_30546;
})();
var statearr_30547_30574 = state_30543__$1;
(statearr_30547_30574[(2)] = null);

(statearr_30547_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (4))){
var inst_30523 = (state_30543[(8)]);
var inst_30523__$1 = (state_30543[(2)]);
var inst_30524 = (inst_30523__$1 == null);
var inst_30525 = cljs.core.not.call(null,inst_30524);
var state_30543__$1 = (function (){var statearr_30548 = state_30543;
(statearr_30548[(8)] = inst_30523__$1);

return statearr_30548;
})();
if(inst_30525){
var statearr_30549_30575 = state_30543__$1;
(statearr_30549_30575[(1)] = (5));

} else {
var statearr_30550_30576 = state_30543__$1;
(statearr_30550_30576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (6))){
var state_30543__$1 = state_30543;
var statearr_30551_30577 = state_30543__$1;
(statearr_30551_30577[(2)] = null);

(statearr_30551_30577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (3))){
var inst_30540 = (state_30543[(2)]);
var inst_30541 = cljs.core.async.close_BANG_.call(null,out);
var state_30543__$1 = (function (){var statearr_30552 = state_30543;
(statearr_30552[(9)] = inst_30540);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30543__$1,inst_30541);
} else {
if((state_val_30544 === (2))){
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30543__$1,(4),ch);
} else {
if((state_val_30544 === (11))){
var inst_30523 = (state_30543[(8)]);
var inst_30532 = (state_30543[(2)]);
var inst_30520 = inst_30523;
var state_30543__$1 = (function (){var statearr_30553 = state_30543;
(statearr_30553[(7)] = inst_30520);

(statearr_30553[(10)] = inst_30532);

return statearr_30553;
})();
var statearr_30554_30578 = state_30543__$1;
(statearr_30554_30578[(2)] = null);

(statearr_30554_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (9))){
var inst_30523 = (state_30543[(8)]);
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30543__$1,(11),out,inst_30523);
} else {
if((state_val_30544 === (5))){
var inst_30523 = (state_30543[(8)]);
var inst_30520 = (state_30543[(7)]);
var inst_30527 = cljs.core._EQ_.call(null,inst_30523,inst_30520);
var state_30543__$1 = state_30543;
if(inst_30527){
var statearr_30556_30579 = state_30543__$1;
(statearr_30556_30579[(1)] = (8));

} else {
var statearr_30557_30580 = state_30543__$1;
(statearr_30557_30580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (10))){
var inst_30535 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30558_30581 = state_30543__$1;
(statearr_30558_30581[(2)] = inst_30535);

(statearr_30558_30581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (8))){
var inst_30520 = (state_30543[(7)]);
var tmp30555 = inst_30520;
var inst_30520__$1 = tmp30555;
var state_30543__$1 = (function (){var statearr_30559 = state_30543;
(statearr_30559[(7)] = inst_30520__$1);

return statearr_30559;
})();
var statearr_30560_30582 = state_30543__$1;
(statearr_30560_30582[(2)] = null);

(statearr_30560_30582[(1)] = (2));


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
});})(c__18518__auto___30572,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30572,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30564[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30564[(1)] = (1));

return statearr_30564;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30543){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30565){if((e30565 instanceof Object)){
var ex__18457__auto__ = e30565;
var statearr_30566_30583 = state_30543;
(statearr_30566_30583[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30584 = state_30543;
state_30543 = G__30584;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30572,out))
})();
var state__18520__auto__ = (function (){var statearr_30567 = f__18519__auto__.call(null);
(statearr_30567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30572);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30572,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args30585 = [];
var len__17479__auto___30655 = arguments.length;
var i__17480__auto___30656 = (0);
while(true){
if((i__17480__auto___30656 < len__17479__auto___30655)){
args30585.push((arguments[i__17480__auto___30656]));

var G__30657 = (i__17480__auto___30656 + (1));
i__17480__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30587 = args30585.length;
switch (G__30587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30585.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30659,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30659,out){
return (function (state_30625){
var state_val_30626 = (state_30625[(1)]);
if((state_val_30626 === (7))){
var inst_30621 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30627_30660 = state_30625__$1;
(statearr_30627_30660[(2)] = inst_30621);

(statearr_30627_30660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (1))){
var inst_30588 = (new Array(n));
var inst_30589 = inst_30588;
var inst_30590 = (0);
var state_30625__$1 = (function (){var statearr_30628 = state_30625;
(statearr_30628[(7)] = inst_30590);

(statearr_30628[(8)] = inst_30589);

return statearr_30628;
})();
var statearr_30629_30661 = state_30625__$1;
(statearr_30629_30661[(2)] = null);

(statearr_30629_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (4))){
var inst_30593 = (state_30625[(9)]);
var inst_30593__$1 = (state_30625[(2)]);
var inst_30594 = (inst_30593__$1 == null);
var inst_30595 = cljs.core.not.call(null,inst_30594);
var state_30625__$1 = (function (){var statearr_30630 = state_30625;
(statearr_30630[(9)] = inst_30593__$1);

return statearr_30630;
})();
if(inst_30595){
var statearr_30631_30662 = state_30625__$1;
(statearr_30631_30662[(1)] = (5));

} else {
var statearr_30632_30663 = state_30625__$1;
(statearr_30632_30663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (15))){
var inst_30615 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30633_30664 = state_30625__$1;
(statearr_30633_30664[(2)] = inst_30615);

(statearr_30633_30664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (13))){
var state_30625__$1 = state_30625;
var statearr_30634_30665 = state_30625__$1;
(statearr_30634_30665[(2)] = null);

(statearr_30634_30665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (6))){
var inst_30590 = (state_30625[(7)]);
var inst_30611 = (inst_30590 > (0));
var state_30625__$1 = state_30625;
if(cljs.core.truth_(inst_30611)){
var statearr_30635_30666 = state_30625__$1;
(statearr_30635_30666[(1)] = (12));

} else {
var statearr_30636_30667 = state_30625__$1;
(statearr_30636_30667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (3))){
var inst_30623 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30625__$1,inst_30623);
} else {
if((state_val_30626 === (12))){
var inst_30589 = (state_30625[(8)]);
var inst_30613 = cljs.core.vec.call(null,inst_30589);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(15),out,inst_30613);
} else {
if((state_val_30626 === (2))){
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30625__$1,(4),ch);
} else {
if((state_val_30626 === (11))){
var inst_30605 = (state_30625[(2)]);
var inst_30606 = (new Array(n));
var inst_30589 = inst_30606;
var inst_30590 = (0);
var state_30625__$1 = (function (){var statearr_30637 = state_30625;
(statearr_30637[(10)] = inst_30605);

(statearr_30637[(7)] = inst_30590);

(statearr_30637[(8)] = inst_30589);

return statearr_30637;
})();
var statearr_30638_30668 = state_30625__$1;
(statearr_30638_30668[(2)] = null);

(statearr_30638_30668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (9))){
var inst_30589 = (state_30625[(8)]);
var inst_30603 = cljs.core.vec.call(null,inst_30589);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(11),out,inst_30603);
} else {
if((state_val_30626 === (5))){
var inst_30598 = (state_30625[(11)]);
var inst_30590 = (state_30625[(7)]);
var inst_30593 = (state_30625[(9)]);
var inst_30589 = (state_30625[(8)]);
var inst_30597 = (inst_30589[inst_30590] = inst_30593);
var inst_30598__$1 = (inst_30590 + (1));
var inst_30599 = (inst_30598__$1 < n);
var state_30625__$1 = (function (){var statearr_30639 = state_30625;
(statearr_30639[(11)] = inst_30598__$1);

(statearr_30639[(12)] = inst_30597);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30599)){
var statearr_30640_30669 = state_30625__$1;
(statearr_30640_30669[(1)] = (8));

} else {
var statearr_30641_30670 = state_30625__$1;
(statearr_30641_30670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (14))){
var inst_30618 = (state_30625[(2)]);
var inst_30619 = cljs.core.async.close_BANG_.call(null,out);
var state_30625__$1 = (function (){var statearr_30643 = state_30625;
(statearr_30643[(13)] = inst_30618);

return statearr_30643;
})();
var statearr_30644_30671 = state_30625__$1;
(statearr_30644_30671[(2)] = inst_30619);

(statearr_30644_30671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (10))){
var inst_30609 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30645_30672 = state_30625__$1;
(statearr_30645_30672[(2)] = inst_30609);

(statearr_30645_30672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (8))){
var inst_30598 = (state_30625[(11)]);
var inst_30589 = (state_30625[(8)]);
var tmp30642 = inst_30589;
var inst_30589__$1 = tmp30642;
var inst_30590 = inst_30598;
var state_30625__$1 = (function (){var statearr_30646 = state_30625;
(statearr_30646[(7)] = inst_30590);

(statearr_30646[(8)] = inst_30589__$1);

return statearr_30646;
})();
var statearr_30647_30673 = state_30625__$1;
(statearr_30647_30673[(2)] = null);

(statearr_30647_30673[(1)] = (2));


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
});})(c__18518__auto___30659,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30659,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30651[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30651[(1)] = (1));

return statearr_30651;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30625){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30652){if((e30652 instanceof Object)){
var ex__18457__auto__ = e30652;
var statearr_30653_30674 = state_30625;
(statearr_30653_30674[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30675 = state_30625;
state_30625 = G__30675;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30659,out))
})();
var state__18520__auto__ = (function (){var statearr_30654 = f__18519__auto__.call(null);
(statearr_30654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30659);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30659,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args30676 = [];
var len__17479__auto___30750 = arguments.length;
var i__17480__auto___30751 = (0);
while(true){
if((i__17480__auto___30751 < len__17479__auto___30750)){
args30676.push((arguments[i__17480__auto___30751]));

var G__30752 = (i__17480__auto___30751 + (1));
i__17480__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var G__30678 = args30676.length;
switch (G__30678) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30676.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18518__auto___30754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___30754,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___30754,out){
return (function (state_30720){
var state_val_30721 = (state_30720[(1)]);
if((state_val_30721 === (7))){
var inst_30716 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30722_30755 = state_30720__$1;
(statearr_30722_30755[(2)] = inst_30716);

(statearr_30722_30755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (1))){
var inst_30679 = [];
var inst_30680 = inst_30679;
var inst_30681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30720__$1 = (function (){var statearr_30723 = state_30720;
(statearr_30723[(7)] = inst_30681);

(statearr_30723[(8)] = inst_30680);

return statearr_30723;
})();
var statearr_30724_30756 = state_30720__$1;
(statearr_30724_30756[(2)] = null);

(statearr_30724_30756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (4))){
var inst_30684 = (state_30720[(9)]);
var inst_30684__$1 = (state_30720[(2)]);
var inst_30685 = (inst_30684__$1 == null);
var inst_30686 = cljs.core.not.call(null,inst_30685);
var state_30720__$1 = (function (){var statearr_30725 = state_30720;
(statearr_30725[(9)] = inst_30684__$1);

return statearr_30725;
})();
if(inst_30686){
var statearr_30726_30757 = state_30720__$1;
(statearr_30726_30757[(1)] = (5));

} else {
var statearr_30727_30758 = state_30720__$1;
(statearr_30727_30758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (15))){
var inst_30710 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30728_30759 = state_30720__$1;
(statearr_30728_30759[(2)] = inst_30710);

(statearr_30728_30759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (13))){
var state_30720__$1 = state_30720;
var statearr_30729_30760 = state_30720__$1;
(statearr_30729_30760[(2)] = null);

(statearr_30729_30760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (6))){
var inst_30680 = (state_30720[(8)]);
var inst_30705 = inst_30680.length;
var inst_30706 = (inst_30705 > (0));
var state_30720__$1 = state_30720;
if(cljs.core.truth_(inst_30706)){
var statearr_30730_30761 = state_30720__$1;
(statearr_30730_30761[(1)] = (12));

} else {
var statearr_30731_30762 = state_30720__$1;
(statearr_30731_30762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (3))){
var inst_30718 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30720__$1,inst_30718);
} else {
if((state_val_30721 === (12))){
var inst_30680 = (state_30720[(8)]);
var inst_30708 = cljs.core.vec.call(null,inst_30680);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30720__$1,(15),out,inst_30708);
} else {
if((state_val_30721 === (2))){
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30720__$1,(4),ch);
} else {
if((state_val_30721 === (11))){
var inst_30684 = (state_30720[(9)]);
var inst_30688 = (state_30720[(10)]);
var inst_30698 = (state_30720[(2)]);
var inst_30699 = [];
var inst_30700 = inst_30699.push(inst_30684);
var inst_30680 = inst_30699;
var inst_30681 = inst_30688;
var state_30720__$1 = (function (){var statearr_30732 = state_30720;
(statearr_30732[(11)] = inst_30698);

(statearr_30732[(12)] = inst_30700);

(statearr_30732[(7)] = inst_30681);

(statearr_30732[(8)] = inst_30680);

return statearr_30732;
})();
var statearr_30733_30763 = state_30720__$1;
(statearr_30733_30763[(2)] = null);

(statearr_30733_30763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (9))){
var inst_30680 = (state_30720[(8)]);
var inst_30696 = cljs.core.vec.call(null,inst_30680);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30720__$1,(11),out,inst_30696);
} else {
if((state_val_30721 === (5))){
var inst_30684 = (state_30720[(9)]);
var inst_30688 = (state_30720[(10)]);
var inst_30681 = (state_30720[(7)]);
var inst_30688__$1 = f.call(null,inst_30684);
var inst_30689 = cljs.core._EQ_.call(null,inst_30688__$1,inst_30681);
var inst_30690 = cljs.core.keyword_identical_QMARK_.call(null,inst_30681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30691 = (inst_30689) || (inst_30690);
var state_30720__$1 = (function (){var statearr_30734 = state_30720;
(statearr_30734[(10)] = inst_30688__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30691)){
var statearr_30735_30764 = state_30720__$1;
(statearr_30735_30764[(1)] = (8));

} else {
var statearr_30736_30765 = state_30720__$1;
(statearr_30736_30765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (14))){
var inst_30713 = (state_30720[(2)]);
var inst_30714 = cljs.core.async.close_BANG_.call(null,out);
var state_30720__$1 = (function (){var statearr_30738 = state_30720;
(statearr_30738[(13)] = inst_30713);

return statearr_30738;
})();
var statearr_30739_30766 = state_30720__$1;
(statearr_30739_30766[(2)] = inst_30714);

(statearr_30739_30766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (10))){
var inst_30703 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30740_30767 = state_30720__$1;
(statearr_30740_30767[(2)] = inst_30703);

(statearr_30740_30767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (8))){
var inst_30684 = (state_30720[(9)]);
var inst_30688 = (state_30720[(10)]);
var inst_30680 = (state_30720[(8)]);
var inst_30693 = inst_30680.push(inst_30684);
var tmp30737 = inst_30680;
var inst_30680__$1 = tmp30737;
var inst_30681 = inst_30688;
var state_30720__$1 = (function (){var statearr_30741 = state_30720;
(statearr_30741[(7)] = inst_30681);

(statearr_30741[(14)] = inst_30693);

(statearr_30741[(8)] = inst_30680__$1);

return statearr_30741;
})();
var statearr_30742_30768 = state_30720__$1;
(statearr_30742_30768[(2)] = null);

(statearr_30742_30768[(1)] = (2));


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
});})(c__18518__auto___30754,out))
;
return ((function (switch__18453__auto__,c__18518__auto___30754,out){
return (function() {
var cljs$core$async$state_machine__18454__auto__ = null;
var cljs$core$async$state_machine__18454__auto____0 = (function (){
var statearr_30746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30746[(0)] = cljs$core$async$state_machine__18454__auto__);

(statearr_30746[(1)] = (1));

return statearr_30746;
});
var cljs$core$async$state_machine__18454__auto____1 = (function (state_30720){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_30720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e30747){if((e30747 instanceof Object)){
var ex__18457__auto__ = e30747;
var statearr_30748_30769 = state_30720;
(statearr_30748_30769[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30770 = state_30720;
state_30720 = G__30770;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
cljs$core$async$state_machine__18454__auto__ = function(state_30720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18454__auto____1.call(this,state_30720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18454__auto____0;
cljs$core$async$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18454__auto____1;
return cljs$core$async$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___30754,out))
})();
var state__18520__auto__ = (function (){var statearr_30749 = f__18519__auto__.call(null);
(statearr_30749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___30754);

return statearr_30749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___30754,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map