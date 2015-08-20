// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27257_SHARP_,p2__27258_SHARP_){
var and__16428__auto__ = p1__27257_SHARP_;
if(cljs.core.truth_(and__16428__auto__)){
return p2__27258_SHARP_;
} else {
return and__16428__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16440__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16440__auto__){
return or__16440__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16440__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16440__auto__){
return or__16440__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16440__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17338__auto__,method_table__17334__auto__,prefer_table__17335__auto__,method_cache__17336__auto__,cached_hierarchy__17337__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27259){
var map__27260 = p__27259;
var map__27260__$1 = ((((!((map__27260 == null)))?((((map__27260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27260):map__27260);
var file = cljs.core.get.call(null,map__27260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27262){
var map__27263 = p__27262;
var map__27263__$1 = ((((!((map__27263 == null)))?((((map__27263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27263):map__27263);
var namespace = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17338__auto__,method_table__17334__auto__,prefer_table__17335__auto__,method_cache__17336__auto__,cached_hierarchy__17337__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27265){if((e27265 instanceof Error)){
var e = e27265;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27265;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args27266 = [];
var len__17479__auto___27269 = arguments.length;
var i__17480__auto___27270 = (0);
while(true){
if((i__17480__auto___27270 < len__17479__auto___27269)){
args27266.push((arguments[i__17480__auto___27270]));

var G__27271 = (i__17480__auto___27270 + (1));
i__17480__auto___27270 = G__27271;
continue;
} else {
}
break;
}

var G__27268 = args27266.length;
switch (G__27268) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27266.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27273,callback){
var map__27276 = p__27273;
var map__27276__$1 = ((((!((map__27276 == null)))?((((map__27276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27276):map__27276);
var file_msg = map__27276__$1;
var request_url = cljs.core.get.call(null,map__27276__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27276,map__27276__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27276,map__27276__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27278){
var map__27281 = p__27278;
var map__27281__$1 = ((((!((map__27281 == null)))?((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var file_msg = map__27281__$1;
var namespace = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16440__auto__ = meta_data;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16428__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16428__auto__){
var or__16440__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
var or__16440__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16440__auto____$1)){
return or__16440__auto____$1;
} else {
var and__16428__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16428__auto____$1){
var or__16440__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16440__auto____$2){
return or__16440__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16428__auto____$1;
}
}
}
} else {
return and__16428__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27283,callback){
var map__27286 = p__27283;
var map__27286__$1 = ((((!((map__27286 == null)))?((((map__27286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27286):map__27286);
var file_msg = map__27286__$1;
var request_url = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18518__auto___27374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___27374,out){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___27374,out){
return (function (state_27356){
var state_val_27357 = (state_27356[(1)]);
if((state_val_27357 === (1))){
var inst_27334 = cljs.core.nth.call(null,files,(0),null);
var inst_27335 = cljs.core.nthnext.call(null,files,(1));
var inst_27336 = files;
var state_27356__$1 = (function (){var statearr_27358 = state_27356;
(statearr_27358[(7)] = inst_27335);

(statearr_27358[(8)] = inst_27336);

(statearr_27358[(9)] = inst_27334);

return statearr_27358;
})();
var statearr_27359_27375 = state_27356__$1;
(statearr_27359_27375[(2)] = null);

(statearr_27359_27375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (2))){
var inst_27336 = (state_27356[(8)]);
var inst_27339 = (state_27356[(10)]);
var inst_27339__$1 = cljs.core.nth.call(null,inst_27336,(0),null);
var inst_27340 = cljs.core.nthnext.call(null,inst_27336,(1));
var inst_27341 = (inst_27339__$1 == null);
var inst_27342 = cljs.core.not.call(null,inst_27341);
var state_27356__$1 = (function (){var statearr_27360 = state_27356;
(statearr_27360[(11)] = inst_27340);

(statearr_27360[(10)] = inst_27339__$1);

return statearr_27360;
})();
if(inst_27342){
var statearr_27361_27376 = state_27356__$1;
(statearr_27361_27376[(1)] = (4));

} else {
var statearr_27362_27377 = state_27356__$1;
(statearr_27362_27377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (3))){
var inst_27354 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else {
if((state_val_27357 === (4))){
var inst_27339 = (state_27356[(10)]);
var inst_27344 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27339);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(7),inst_27344);
} else {
if((state_val_27357 === (5))){
var inst_27350 = cljs.core.async.close_BANG_.call(null,out);
var state_27356__$1 = state_27356;
var statearr_27363_27378 = state_27356__$1;
(statearr_27363_27378[(2)] = inst_27350);

(statearr_27363_27378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (6))){
var inst_27352 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27364_27379 = state_27356__$1;
(statearr_27364_27379[(2)] = inst_27352);

(statearr_27364_27379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (7))){
var inst_27340 = (state_27356[(11)]);
var inst_27346 = (state_27356[(2)]);
var inst_27347 = cljs.core.async.put_BANG_.call(null,out,inst_27346);
var inst_27336 = inst_27340;
var state_27356__$1 = (function (){var statearr_27365 = state_27356;
(statearr_27365[(8)] = inst_27336);

(statearr_27365[(12)] = inst_27347);

return statearr_27365;
})();
var statearr_27366_27380 = state_27356__$1;
(statearr_27366_27380[(2)] = null);

(statearr_27366_27380[(1)] = (2));


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
});})(c__18518__auto___27374,out))
;
return ((function (switch__18453__auto__,c__18518__auto___27374,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____0 = (function (){
var statearr_27370 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27370[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__);

(statearr_27370[(1)] = (1));

return statearr_27370;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____1 = (function (state_27356){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27371){if((e27371 instanceof Object)){
var ex__18457__auto__ = e27371;
var statearr_27372_27381 = state_27356;
(statearr_27372_27381[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27382 = state_27356;
state_27356 = G__27382;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___27374,out))
})();
var state__18520__auto__ = (function (){var statearr_27373 = f__18519__auto__.call(null);
(statearr_27373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___27374);

return statearr_27373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___27374,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27383,p__27384){
var map__27389 = p__27383;
var map__27389__$1 = ((((!((map__27389 == null)))?((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var opts = map__27389__$1;
var url_rewriter = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27390 = p__27384;
var map__27390__$1 = ((((!((map__27390 == null)))?((((map__27390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27390):map__27390);
var file_msg = map__27390__$1;
var file = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27393,opts){
var map__27397 = p__27393;
var map__27397__$1 = ((((!((map__27397 == null)))?((((map__27397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27397):map__27397);
var eval_body__$1 = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16428__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16428__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16428__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27399){var e = e27399;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27404,p__27405){
var map__27633 = p__27404;
var map__27633__$1 = ((((!((map__27633 == null)))?((((map__27633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27633):map__27633);
var opts = map__27633__$1;
var before_jsload = cljs.core.get.call(null,map__27633__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27633__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27633__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27634 = p__27405;
var map__27634__$1 = ((((!((map__27634 == null)))?((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var msg = map__27634__$1;
var files = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27651 = (state_27775[(7)]);
var inst_27648 = (state_27775[(8)]);
var inst_27649 = (state_27775[(9)]);
var inst_27650 = (state_27775[(10)]);
var inst_27656 = cljs.core._nth.call(null,inst_27649,inst_27651);
var inst_27657 = figwheel.client.file_reloading.eval_body.call(null,inst_27656,opts);
var inst_27658 = (inst_27651 + (1));
var tmp27777 = inst_27648;
var tmp27778 = inst_27649;
var tmp27779 = inst_27650;
var inst_27648__$1 = tmp27777;
var inst_27649__$1 = tmp27778;
var inst_27650__$1 = tmp27779;
var inst_27651__$1 = inst_27658;
var state_27775__$1 = (function (){var statearr_27780 = state_27775;
(statearr_27780[(7)] = inst_27651__$1);

(statearr_27780[(8)] = inst_27648__$1);

(statearr_27780[(11)] = inst_27657);

(statearr_27780[(9)] = inst_27649__$1);

(statearr_27780[(10)] = inst_27650__$1);

return statearr_27780;
})();
var statearr_27781_27860 = state_27775__$1;
(statearr_27781_27860[(2)] = null);

(statearr_27781_27860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (20))){
var inst_27694 = (state_27775[(12)]);
var inst_27693 = (state_27775[(13)]);
var inst_27700 = (state_27775[(14)]);
var inst_27698 = (state_27775[(15)]);
var inst_27697 = (state_27775[(16)]);
var inst_27703 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27705 = (function (){var all_files = inst_27693;
var files_SINGLEQUOTE_ = inst_27694;
var res_SINGLEQUOTE_ = inst_27697;
var res = inst_27698;
var files_not_loaded = inst_27700;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27703,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p__27704){
var map__27782 = p__27704;
var map__27782__$1 = ((((!((map__27782 == null)))?((((map__27782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27782):map__27782);
var namespace = cljs.core.get.call(null,map__27782__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27703,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27706 = cljs.core.map.call(null,inst_27705,inst_27698);
var inst_27707 = cljs.core.pr_str.call(null,inst_27706);
var inst_27708 = figwheel.client.utils.log.call(null,inst_27707);
var inst_27709 = (function (){var all_files = inst_27693;
var files_SINGLEQUOTE_ = inst_27694;
var res_SINGLEQUOTE_ = inst_27697;
var res = inst_27698;
var files_not_loaded = inst_27700;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27703,inst_27705,inst_27706,inst_27707,inst_27708,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27703,inst_27705,inst_27706,inst_27707,inst_27708,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27710 = setTimeout(inst_27709,(10));
var state_27775__$1 = (function (){var statearr_27784 = state_27775;
(statearr_27784[(17)] = inst_27708);

(statearr_27784[(18)] = inst_27703);

return statearr_27784;
})();
var statearr_27785_27861 = state_27775__$1;
(statearr_27785_27861[(2)] = inst_27710);

(statearr_27785_27861[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (27))){
var state_27775__$1 = state_27775;
var statearr_27786_27862 = state_27775__$1;
(statearr_27786_27862[(2)] = false);

(statearr_27786_27862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (1))){
var inst_27640 = (state_27775[(19)]);
var inst_27637 = before_jsload.call(null,files);
var inst_27638 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27639 = (function (){return ((function (inst_27640,inst_27637,inst_27638,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p1__27400_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27400_SHARP_);
});
;})(inst_27640,inst_27637,inst_27638,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27640__$1 = cljs.core.filter.call(null,inst_27639,files);
var inst_27641 = cljs.core.not_empty.call(null,inst_27640__$1);
var state_27775__$1 = (function (){var statearr_27787 = state_27775;
(statearr_27787[(19)] = inst_27640__$1);

(statearr_27787[(20)] = inst_27638);

(statearr_27787[(21)] = inst_27637);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27641)){
var statearr_27788_27863 = state_27775__$1;
(statearr_27788_27863[(1)] = (2));

} else {
var statearr_27789_27864 = state_27775__$1;
(statearr_27789_27864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (24))){
var state_27775__$1 = state_27775;
var statearr_27790_27865 = state_27775__$1;
(statearr_27790_27865[(2)] = null);

(statearr_27790_27865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (39))){
var state_27775__$1 = state_27775;
var statearr_27791_27866 = state_27775__$1;
(statearr_27791_27866[(2)] = null);

(statearr_27791_27866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27685 = (state_27775[(2)]);
var inst_27686 = (function (){return ((function (inst_27685,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p1__27401_SHARP_){
var and__16428__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27401_SHARP_);
if(cljs.core.truth_(and__16428__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27401_SHARP_));
} else {
return and__16428__auto__;
}
});
;})(inst_27685,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27687 = cljs.core.filter.call(null,inst_27686,files);
var state_27775__$1 = (function (){var statearr_27792 = state_27775;
(statearr_27792[(22)] = inst_27687);

(statearr_27792[(23)] = inst_27685);

return statearr_27792;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27793_27867 = state_27775__$1;
(statearr_27793_27867[(1)] = (16));

} else {
var statearr_27794_27868 = state_27775__$1;
(statearr_27794_27868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (15))){
var inst_27675 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27795_27869 = state_27775__$1;
(statearr_27795_27869[(2)] = inst_27675);

(statearr_27795_27869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (21))){
var state_27775__$1 = state_27775;
var statearr_27796_27870 = state_27775__$1;
(statearr_27796_27870[(2)] = null);

(statearr_27796_27870[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (31))){
var inst_27732 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27797_27871 = state_27775__$1;
(statearr_27797_27871[(2)] = inst_27732);

(statearr_27797_27871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (32))){
var inst_27720 = (state_27775[(24)]);
var inst_27737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27720);
var state_27775__$1 = state_27775;
var statearr_27798_27872 = state_27775__$1;
(statearr_27798_27872[(2)] = inst_27737);

(statearr_27798_27872[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (40))){
var inst_27743 = (state_27775[(25)]);
var inst_27761 = (state_27775[(2)]);
var inst_27762 = cljs.core.not_empty.call(null,inst_27743);
var state_27775__$1 = (function (){var statearr_27799 = state_27775;
(statearr_27799[(26)] = inst_27761);

return statearr_27799;
})();
if(cljs.core.truth_(inst_27762)){
var statearr_27800_27873 = state_27775__$1;
(statearr_27800_27873[(1)] = (41));

} else {
var statearr_27801_27874 = state_27775__$1;
(statearr_27801_27874[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (33))){
var inst_27720 = (state_27775[(24)]);
var state_27775__$1 = state_27775;
var statearr_27802_27875 = state_27775__$1;
(statearr_27802_27875[(2)] = inst_27720);

(statearr_27802_27875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (13))){
var inst_27661 = (state_27775[(27)]);
var inst_27665 = cljs.core.chunk_first.call(null,inst_27661);
var inst_27666 = cljs.core.chunk_rest.call(null,inst_27661);
var inst_27667 = cljs.core.count.call(null,inst_27665);
var inst_27648 = inst_27666;
var inst_27649 = inst_27665;
var inst_27650 = inst_27667;
var inst_27651 = (0);
var state_27775__$1 = (function (){var statearr_27803 = state_27775;
(statearr_27803[(7)] = inst_27651);

(statearr_27803[(8)] = inst_27648);

(statearr_27803[(9)] = inst_27649);

(statearr_27803[(10)] = inst_27650);

return statearr_27803;
})();
var statearr_27804_27876 = state_27775__$1;
(statearr_27804_27876[(2)] = null);

(statearr_27804_27876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (22))){
var inst_27700 = (state_27775[(14)]);
var inst_27713 = (state_27775[(2)]);
var inst_27714 = cljs.core.not_empty.call(null,inst_27700);
var state_27775__$1 = (function (){var statearr_27805 = state_27775;
(statearr_27805[(28)] = inst_27713);

return statearr_27805;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27806_27877 = state_27775__$1;
(statearr_27806_27877[(1)] = (23));

} else {
var statearr_27807_27878 = state_27775__$1;
(statearr_27807_27878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (36))){
var state_27775__$1 = state_27775;
var statearr_27808_27879 = state_27775__$1;
(statearr_27808_27879[(2)] = null);

(statearr_27808_27879[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (41))){
var inst_27743 = (state_27775[(25)]);
var inst_27764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27743);
var inst_27765 = cljs.core.pr_str.call(null,inst_27764);
var inst_27766 = [cljs.core.str("not required: "),cljs.core.str(inst_27765)].join('');
var inst_27767 = figwheel.client.utils.log.call(null,inst_27766);
var state_27775__$1 = state_27775;
var statearr_27809_27880 = state_27775__$1;
(statearr_27809_27880[(2)] = inst_27767);

(statearr_27809_27880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (43))){
var inst_27770 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27810_27881 = state_27775__$1;
(statearr_27810_27881[(2)] = inst_27770);

(statearr_27810_27881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (29))){
var state_27775__$1 = state_27775;
var statearr_27811_27882 = state_27775__$1;
(statearr_27811_27882[(2)] = true);

(statearr_27811_27882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var inst_27682 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27812_27883 = state_27775__$1;
(statearr_27812_27883[(2)] = inst_27682);

(statearr_27812_27883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (28))){
var inst_27735 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27735)){
var statearr_27813_27884 = state_27775__$1;
(statearr_27813_27884[(1)] = (32));

} else {
var statearr_27814_27885 = state_27775__$1;
(statearr_27814_27885[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (25))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (34))){
var inst_27741 = (state_27775[(29)]);
var inst_27740 = (state_27775[(2)]);
var inst_27741__$1 = cljs.core.get.call(null,inst_27740,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27742 = cljs.core.get.call(null,inst_27740,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27743 = cljs.core.get.call(null,inst_27740,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27744 = cljs.core.not_empty.call(null,inst_27741__$1);
var state_27775__$1 = (function (){var statearr_27815 = state_27775;
(statearr_27815[(29)] = inst_27741__$1);

(statearr_27815[(25)] = inst_27743);

(statearr_27815[(30)] = inst_27742);

return statearr_27815;
})();
if(cljs.core.truth_(inst_27744)){
var statearr_27816_27886 = state_27775__$1;
(statearr_27816_27886[(1)] = (35));

} else {
var statearr_27817_27887 = state_27775__$1;
(statearr_27817_27887[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (17))){
var inst_27687 = (state_27775[(22)]);
var state_27775__$1 = state_27775;
var statearr_27818_27888 = state_27775__$1;
(statearr_27818_27888[(2)] = inst_27687);

(statearr_27818_27888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var state_27775__$1 = state_27775;
var statearr_27819_27889 = state_27775__$1;
(statearr_27819_27889[(2)] = null);

(statearr_27819_27889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (12))){
var inst_27678 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27820_27890 = state_27775__$1;
(statearr_27820_27890[(2)] = inst_27678);

(statearr_27820_27890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (2))){
var inst_27640 = (state_27775[(19)]);
var inst_27647 = cljs.core.seq.call(null,inst_27640);
var inst_27648 = inst_27647;
var inst_27649 = null;
var inst_27650 = (0);
var inst_27651 = (0);
var state_27775__$1 = (function (){var statearr_27821 = state_27775;
(statearr_27821[(7)] = inst_27651);

(statearr_27821[(8)] = inst_27648);

(statearr_27821[(9)] = inst_27649);

(statearr_27821[(10)] = inst_27650);

return statearr_27821;
})();
var statearr_27822_27891 = state_27775__$1;
(statearr_27822_27891[(2)] = null);

(statearr_27822_27891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (23))){
var inst_27720 = (state_27775[(24)]);
var inst_27694 = (state_27775[(12)]);
var inst_27693 = (state_27775[(13)]);
var inst_27700 = (state_27775[(14)]);
var inst_27698 = (state_27775[(15)]);
var inst_27697 = (state_27775[(16)]);
var inst_27716 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27719 = (function (){var all_files = inst_27693;
var files_SINGLEQUOTE_ = inst_27694;
var res_SINGLEQUOTE_ = inst_27697;
var res = inst_27698;
var files_not_loaded = inst_27700;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27720,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27716,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p__27718){
var map__27823 = p__27718;
var map__27823__$1 = ((((!((map__27823 == null)))?((((map__27823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27823):map__27823);
var meta_data = cljs.core.get.call(null,map__27823__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27720,inst_27694,inst_27693,inst_27700,inst_27698,inst_27697,inst_27716,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27720__$1 = cljs.core.group_by.call(null,inst_27719,inst_27700);
var inst_27722 = (inst_27720__$1 == null);
var inst_27723 = cljs.core.not.call(null,inst_27722);
var state_27775__$1 = (function (){var statearr_27825 = state_27775;
(statearr_27825[(24)] = inst_27720__$1);

(statearr_27825[(31)] = inst_27716);

return statearr_27825;
})();
if(inst_27723){
var statearr_27826_27892 = state_27775__$1;
(statearr_27826_27892[(1)] = (26));

} else {
var statearr_27827_27893 = state_27775__$1;
(statearr_27827_27893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (35))){
var inst_27741 = (state_27775[(29)]);
var inst_27746 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27741);
var inst_27747 = cljs.core.pr_str.call(null,inst_27746);
var inst_27748 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27747)].join('');
var inst_27749 = figwheel.client.utils.log.call(null,inst_27748);
var state_27775__$1 = state_27775;
var statearr_27828_27894 = state_27775__$1;
(statearr_27828_27894[(2)] = inst_27749);

(statearr_27828_27894[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (19))){
var inst_27694 = (state_27775[(12)]);
var inst_27693 = (state_27775[(13)]);
var inst_27698 = (state_27775[(15)]);
var inst_27697 = (state_27775[(16)]);
var inst_27697__$1 = (state_27775[(2)]);
var inst_27698__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27697__$1);
var inst_27699 = (function (){var all_files = inst_27693;
var files_SINGLEQUOTE_ = inst_27694;
var res_SINGLEQUOTE_ = inst_27697__$1;
var res = inst_27698__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27694,inst_27693,inst_27698,inst_27697,inst_27697__$1,inst_27698__$1,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p1__27403_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27403_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27694,inst_27693,inst_27698,inst_27697,inst_27697__$1,inst_27698__$1,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27700 = cljs.core.filter.call(null,inst_27699,inst_27697__$1);
var inst_27701 = cljs.core.not_empty.call(null,inst_27698__$1);
var state_27775__$1 = (function (){var statearr_27829 = state_27775;
(statearr_27829[(14)] = inst_27700);

(statearr_27829[(15)] = inst_27698__$1);

(statearr_27829[(16)] = inst_27697__$1);

return statearr_27829;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27830_27895 = state_27775__$1;
(statearr_27830_27895[(1)] = (20));

} else {
var statearr_27831_27896 = state_27775__$1;
(statearr_27831_27896[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (11))){
var state_27775__$1 = state_27775;
var statearr_27832_27897 = state_27775__$1;
(statearr_27832_27897[(2)] = null);

(statearr_27832_27897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (9))){
var inst_27680 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27833_27898 = state_27775__$1;
(statearr_27833_27898[(2)] = inst_27680);

(statearr_27833_27898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (5))){
var inst_27651 = (state_27775[(7)]);
var inst_27650 = (state_27775[(10)]);
var inst_27653 = (inst_27651 < inst_27650);
var inst_27654 = inst_27653;
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27654)){
var statearr_27834_27899 = state_27775__$1;
(statearr_27834_27899[(1)] = (7));

} else {
var statearr_27835_27900 = state_27775__$1;
(statearr_27835_27900[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (14))){
var inst_27661 = (state_27775[(27)]);
var inst_27670 = cljs.core.first.call(null,inst_27661);
var inst_27671 = figwheel.client.file_reloading.eval_body.call(null,inst_27670,opts);
var inst_27672 = cljs.core.next.call(null,inst_27661);
var inst_27648 = inst_27672;
var inst_27649 = null;
var inst_27650 = (0);
var inst_27651 = (0);
var state_27775__$1 = (function (){var statearr_27836 = state_27775;
(statearr_27836[(7)] = inst_27651);

(statearr_27836[(8)] = inst_27648);

(statearr_27836[(9)] = inst_27649);

(statearr_27836[(10)] = inst_27650);

(statearr_27836[(32)] = inst_27671);

return statearr_27836;
})();
var statearr_27837_27901 = state_27775__$1;
(statearr_27837_27901[(2)] = null);

(statearr_27837_27901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (26))){
var inst_27720 = (state_27775[(24)]);
var inst_27725 = inst_27720.cljs$lang$protocol_mask$partition0$;
var inst_27726 = (inst_27725 & (64));
var inst_27727 = inst_27720.cljs$core$ISeq$;
var inst_27728 = (inst_27726) || (inst_27727);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27728)){
var statearr_27838_27902 = state_27775__$1;
(statearr_27838_27902[(1)] = (29));

} else {
var statearr_27839_27903 = state_27775__$1;
(statearr_27839_27903[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (16))){
var inst_27687 = (state_27775[(22)]);
var inst_27689 = (function (){var all_files = inst_27687;
return ((function (all_files,inst_27687,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function (p1__27402_SHARP_){
return cljs.core.update_in.call(null,p1__27402_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27687,state_val_27776,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var inst_27690 = cljs.core.map.call(null,inst_27689,inst_27687);
var state_27775__$1 = state_27775;
var statearr_27840_27904 = state_27775__$1;
(statearr_27840_27904[(2)] = inst_27690);

(statearr_27840_27904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (38))){
var inst_27742 = (state_27775[(30)]);
var inst_27755 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27742);
var inst_27756 = cljs.core.pr_str.call(null,inst_27755);
var inst_27757 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27756)].join('');
var inst_27758 = figwheel.client.utils.log.call(null,inst_27757);
var state_27775__$1 = state_27775;
var statearr_27841_27905 = state_27775__$1;
(statearr_27841_27905[(2)] = inst_27758);

(statearr_27841_27905[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (30))){
var state_27775__$1 = state_27775;
var statearr_27842_27906 = state_27775__$1;
(statearr_27842_27906[(2)] = false);

(statearr_27842_27906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (10))){
var inst_27661 = (state_27775[(27)]);
var inst_27663 = cljs.core.chunked_seq_QMARK_.call(null,inst_27661);
var state_27775__$1 = state_27775;
if(inst_27663){
var statearr_27843_27907 = state_27775__$1;
(statearr_27843_27907[(1)] = (13));

} else {
var statearr_27844_27908 = state_27775__$1;
(statearr_27844_27908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (18))){
var inst_27694 = (state_27775[(12)]);
var inst_27693 = (state_27775[(13)]);
var inst_27693__$1 = (state_27775[(2)]);
var inst_27694__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27693__$1);
var inst_27695 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27694__$1);
var state_27775__$1 = (function (){var statearr_27845 = state_27775;
(statearr_27845[(12)] = inst_27694__$1);

(statearr_27845[(13)] = inst_27693__$1);

return statearr_27845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(19),inst_27695);
} else {
if((state_val_27776 === (42))){
var state_27775__$1 = state_27775;
var statearr_27846_27909 = state_27775__$1;
(statearr_27846_27909[(2)] = null);

(statearr_27846_27909[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (37))){
var inst_27742 = (state_27775[(30)]);
var inst_27752 = (state_27775[(2)]);
var inst_27753 = cljs.core.not_empty.call(null,inst_27742);
var state_27775__$1 = (function (){var statearr_27847 = state_27775;
(statearr_27847[(33)] = inst_27752);

return statearr_27847;
})();
if(cljs.core.truth_(inst_27753)){
var statearr_27848_27910 = state_27775__$1;
(statearr_27848_27910[(1)] = (38));

} else {
var statearr_27849_27911 = state_27775__$1;
(statearr_27849_27911[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var inst_27648 = (state_27775[(8)]);
var inst_27661 = (state_27775[(27)]);
var inst_27661__$1 = cljs.core.seq.call(null,inst_27648);
var state_27775__$1 = (function (){var statearr_27850 = state_27775;
(statearr_27850[(27)] = inst_27661__$1);

return statearr_27850;
})();
if(inst_27661__$1){
var statearr_27851_27912 = state_27775__$1;
(statearr_27851_27912[(1)] = (10));

} else {
var statearr_27852_27913 = state_27775__$1;
(statearr_27852_27913[(1)] = (11));

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
});})(c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
;
return ((function (switch__18453__auto__,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____0 = (function (){
var statearr_27856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27856[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__);

(statearr_27856[(1)] = (1));

return statearr_27856;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____1 = (function (state_27775){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27857){if((e27857 instanceof Object)){
var ex__18457__auto__ = e27857;
var statearr_27858_27914 = state_27775;
(statearr_27858_27914[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27915 = state_27775;
state_27775 = G__27915;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
})();
var state__18520__auto__ = (function (){var statearr_27859 = f__18519__auto__.call(null);
(statearr_27859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_27859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__,map__27633,map__27633__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27634,map__27634__$1,msg,files))
);

return c__18518__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27918,link){
var map__27921 = p__27918;
var map__27921__$1 = ((((!((map__27921 == null)))?((((map__27921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27921):map__27921);
var file = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27921,map__27921__$1,file){
return (function (p1__27916_SHARP_,p2__27917_SHARP_){
if(cljs.core._EQ_.call(null,p1__27916_SHARP_,p2__27917_SHARP_)){
return p1__27916_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27921,map__27921__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27927){
var map__27928 = p__27927;
var map__27928__$1 = ((((!((map__27928 == null)))?((((map__27928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27928):map__27928);
var match_length = cljs.core.get.call(null,map__27928__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27928__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27923_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27923_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args27930 = [];
var len__17479__auto___27933 = arguments.length;
var i__17480__auto___27934 = (0);
while(true){
if((i__17480__auto___27934 < len__17479__auto___27933)){
args27930.push((arguments[i__17480__auto___27934]));

var G__27935 = (i__17480__auto___27934 + (1));
i__17480__auto___27934 = G__27935;
continue;
} else {
}
break;
}

var G__27932 = args27930.length;
switch (G__27932) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27930.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27937){
var map__27940 = p__27937;
var map__27940__$1 = ((((!((map__27940 == null)))?((((map__27940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940):map__27940);
var f_data = map__27940__$1;
var file = cljs.core.get.call(null,map__27940__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__27940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16440__auto__ = request_url;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27942,files_msg){
var map__27965 = p__27942;
var map__27965__$1 = ((((!((map__27965 == null)))?((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27965):map__27965);
var opts = map__27965__$1;
var on_cssload = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27967_27987 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27968_27988 = null;
var count__27969_27989 = (0);
var i__27970_27990 = (0);
while(true){
if((i__27970_27990 < count__27969_27989)){
var f_27991 = cljs.core._nth.call(null,chunk__27968_27988,i__27970_27990);
figwheel.client.file_reloading.reload_css_file.call(null,f_27991);

var G__27992 = seq__27967_27987;
var G__27993 = chunk__27968_27988;
var G__27994 = count__27969_27989;
var G__27995 = (i__27970_27990 + (1));
seq__27967_27987 = G__27992;
chunk__27968_27988 = G__27993;
count__27969_27989 = G__27994;
i__27970_27990 = G__27995;
continue;
} else {
var temp__4425__auto___27996 = cljs.core.seq.call(null,seq__27967_27987);
if(temp__4425__auto___27996){
var seq__27967_27997__$1 = temp__4425__auto___27996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27967_27997__$1)){
var c__17224__auto___27998 = cljs.core.chunk_first.call(null,seq__27967_27997__$1);
var G__27999 = cljs.core.chunk_rest.call(null,seq__27967_27997__$1);
var G__28000 = c__17224__auto___27998;
var G__28001 = cljs.core.count.call(null,c__17224__auto___27998);
var G__28002 = (0);
seq__27967_27987 = G__27999;
chunk__27968_27988 = G__28000;
count__27969_27989 = G__28001;
i__27970_27990 = G__28002;
continue;
} else {
var f_28003 = cljs.core.first.call(null,seq__27967_27997__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28003);

var G__28004 = cljs.core.next.call(null,seq__27967_27997__$1);
var G__28005 = null;
var G__28006 = (0);
var G__28007 = (0);
seq__27967_27987 = G__28004;
chunk__27968_27988 = G__28005;
count__27969_27989 = G__28006;
i__27970_27990 = G__28007;
continue;
}
} else {
}
}
break;
}

var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload){
return (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (1))){
var inst_27971 = cljs.core.async.timeout.call(null,(100));
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27977__$1,(2),inst_27971);
} else {
if((state_val_27978 === (2))){
var inst_27973 = (state_27977[(2)]);
var inst_27974 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27975 = on_cssload.call(null,inst_27974);
var state_27977__$1 = (function (){var statearr_27979 = state_27977;
(statearr_27979[(7)] = inst_27973);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
return null;
}
}
});})(c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload))
;
return ((function (switch__18453__auto__,c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null,null];
(statearr_27983[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____1 = (function (state_27977){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__18457__auto__ = e27984;
var statearr_27985_28008 = state_27977;
(statearr_27985_28008[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28009 = state_27977;
state_27977 = G__28009;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload))
})();
var state__18520__auto__ = (function (){var statearr_27986 = f__18519__auto__.call(null);
(statearr_27986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__,map__27965,map__27965__$1,opts,on_cssload))
);

return c__18518__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map