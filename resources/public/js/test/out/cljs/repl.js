// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27207_27221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27208_27222 = null;
var count__27209_27223 = (0);
var i__27210_27224 = (0);
while(true){
if((i__27210_27224 < count__27209_27223)){
var f_27225 = cljs.core._nth.call(null,chunk__27208_27222,i__27210_27224);
cljs.core.println.call(null,"  ",f_27225);

var G__27226 = seq__27207_27221;
var G__27227 = chunk__27208_27222;
var G__27228 = count__27209_27223;
var G__27229 = (i__27210_27224 + (1));
seq__27207_27221 = G__27226;
chunk__27208_27222 = G__27227;
count__27209_27223 = G__27228;
i__27210_27224 = G__27229;
continue;
} else {
var temp__4425__auto___27230 = cljs.core.seq.call(null,seq__27207_27221);
if(temp__4425__auto___27230){
var seq__27207_27231__$1 = temp__4425__auto___27230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27207_27231__$1)){
var c__17224__auto___27232 = cljs.core.chunk_first.call(null,seq__27207_27231__$1);
var G__27233 = cljs.core.chunk_rest.call(null,seq__27207_27231__$1);
var G__27234 = c__17224__auto___27232;
var G__27235 = cljs.core.count.call(null,c__17224__auto___27232);
var G__27236 = (0);
seq__27207_27221 = G__27233;
chunk__27208_27222 = G__27234;
count__27209_27223 = G__27235;
i__27210_27224 = G__27236;
continue;
} else {
var f_27237 = cljs.core.first.call(null,seq__27207_27231__$1);
cljs.core.println.call(null,"  ",f_27237);

var G__27238 = cljs.core.next.call(null,seq__27207_27231__$1);
var G__27239 = null;
var G__27240 = (0);
var G__27241 = (0);
seq__27207_27221 = G__27238;
chunk__27208_27222 = G__27239;
count__27209_27223 = G__27240;
i__27210_27224 = G__27241;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27242 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16440__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27242);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27242)))?cljs.core.second.call(null,arglists_27242):arglists_27242));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27212 = null;
var count__27213 = (0);
var i__27214 = (0);
while(true){
if((i__27214 < count__27213)){
var vec__27215 = cljs.core._nth.call(null,chunk__27212,i__27214);
var name = cljs.core.nth.call(null,vec__27215,(0),null);
var map__27216 = cljs.core.nth.call(null,vec__27215,(1),null);
var map__27216__$1 = ((((!((map__27216 == null)))?((((map__27216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216):map__27216);
var doc = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27243 = seq__27211;
var G__27244 = chunk__27212;
var G__27245 = count__27213;
var G__27246 = (i__27214 + (1));
seq__27211 = G__27243;
chunk__27212 = G__27244;
count__27213 = G__27245;
i__27214 = G__27246;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27211);
if(temp__4425__auto__){
var seq__27211__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27211__$1)){
var c__17224__auto__ = cljs.core.chunk_first.call(null,seq__27211__$1);
var G__27247 = cljs.core.chunk_rest.call(null,seq__27211__$1);
var G__27248 = c__17224__auto__;
var G__27249 = cljs.core.count.call(null,c__17224__auto__);
var G__27250 = (0);
seq__27211 = G__27247;
chunk__27212 = G__27248;
count__27213 = G__27249;
i__27214 = G__27250;
continue;
} else {
var vec__27218 = cljs.core.first.call(null,seq__27211__$1);
var name = cljs.core.nth.call(null,vec__27218,(0),null);
var map__27219 = cljs.core.nth.call(null,vec__27218,(1),null);
var map__27219__$1 = ((((!((map__27219 == null)))?((((map__27219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27219):map__27219);
var doc = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27251 = cljs.core.next.call(null,seq__27211__$1);
var G__27252 = null;
var G__27253 = (0);
var G__27254 = (0);
seq__27211 = G__27251;
chunk__27212 = G__27252;
count__27213 = G__27253;
i__27214 = G__27254;
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
}
});

//# sourceMappingURL=repl.js.map