// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26158__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26159__i = 0, G__26159__a = new Array(arguments.length -  0);
while (G__26159__i < G__26159__a.length) {G__26159__a[G__26159__i] = arguments[G__26159__i + 0]; ++G__26159__i;}
  args = new cljs.core.IndexedSeq(G__26159__a,0);
} 
return G__26158__delegate.call(this,args);};
G__26158.cljs$lang$maxFixedArity = 0;
G__26158.cljs$lang$applyTo = (function (arglist__26160){
var args = cljs.core.seq(arglist__26160);
return G__26158__delegate(args);
});
G__26158.cljs$core$IFn$_invoke$arity$variadic = G__26158__delegate;
return G__26158;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26161){
var map__26164 = p__26161;
var map__26164__$1 = ((((!((map__26164 == null)))?((((map__26164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26164):map__26164);
var message = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16440__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16428__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16428__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16428__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18518__auto___26294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___26294,ch){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___26294,ch){
return (function (state_26268){
var state_val_26269 = (state_26268[(1)]);
if((state_val_26269 === (7))){
var inst_26264 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26270_26295 = state_26268__$1;
(statearr_26270_26295[(2)] = inst_26264);

(statearr_26270_26295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (1))){
var state_26268__$1 = state_26268;
var statearr_26271_26296 = state_26268__$1;
(statearr_26271_26296[(2)] = null);

(statearr_26271_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (4))){
var inst_26232 = (state_26268[(7)]);
var inst_26232__$1 = (state_26268[(2)]);
var state_26268__$1 = (function (){var statearr_26272 = state_26268;
(statearr_26272[(7)] = inst_26232__$1);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26232__$1)){
var statearr_26273_26297 = state_26268__$1;
(statearr_26273_26297[(1)] = (5));

} else {
var statearr_26274_26298 = state_26268__$1;
(statearr_26274_26298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (13))){
var state_26268__$1 = state_26268;
var statearr_26275_26299 = state_26268__$1;
(statearr_26275_26299[(2)] = null);

(statearr_26275_26299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (6))){
var state_26268__$1 = state_26268;
var statearr_26276_26300 = state_26268__$1;
(statearr_26276_26300[(2)] = null);

(statearr_26276_26300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (3))){
var inst_26266 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26268__$1,inst_26266);
} else {
if((state_val_26269 === (12))){
var inst_26239 = (state_26268[(8)]);
var inst_26252 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26239);
var inst_26253 = cljs.core.first.call(null,inst_26252);
var inst_26254 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26253);
var inst_26255 = console.warn("Figwheel: Not loading code with warnings - ",inst_26254);
var state_26268__$1 = state_26268;
var statearr_26277_26301 = state_26268__$1;
(statearr_26277_26301[(2)] = inst_26255);

(statearr_26277_26301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (2))){
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26268__$1,(4),ch);
} else {
if((state_val_26269 === (11))){
var inst_26248 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26278_26302 = state_26268__$1;
(statearr_26278_26302[(2)] = inst_26248);

(statearr_26278_26302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (9))){
var inst_26238 = (state_26268[(9)]);
var inst_26250 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26238,opts);
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26250)){
var statearr_26279_26303 = state_26268__$1;
(statearr_26279_26303[(1)] = (12));

} else {
var statearr_26280_26304 = state_26268__$1;
(statearr_26280_26304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (5))){
var inst_26238 = (state_26268[(9)]);
var inst_26232 = (state_26268[(7)]);
var inst_26234 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26235 = (new cljs.core.PersistentArrayMap(null,2,inst_26234,null));
var inst_26236 = (new cljs.core.PersistentHashSet(null,inst_26235,null));
var inst_26237 = figwheel.client.focus_msgs.call(null,inst_26236,inst_26232);
var inst_26238__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26237);
var inst_26239 = cljs.core.first.call(null,inst_26237);
var inst_26240 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26238__$1,opts);
var state_26268__$1 = (function (){var statearr_26281 = state_26268;
(statearr_26281[(9)] = inst_26238__$1);

(statearr_26281[(8)] = inst_26239);

return statearr_26281;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26282_26305 = state_26268__$1;
(statearr_26282_26305[(1)] = (8));

} else {
var statearr_26283_26306 = state_26268__$1;
(statearr_26283_26306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (14))){
var inst_26258 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26284_26307 = state_26268__$1;
(statearr_26284_26307[(2)] = inst_26258);

(statearr_26284_26307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (10))){
var inst_26260 = (state_26268[(2)]);
var state_26268__$1 = (function (){var statearr_26285 = state_26268;
(statearr_26285[(10)] = inst_26260);

return statearr_26285;
})();
var statearr_26286_26308 = state_26268__$1;
(statearr_26286_26308[(2)] = null);

(statearr_26286_26308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (8))){
var inst_26239 = (state_26268[(8)]);
var inst_26242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26243 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26239);
var inst_26244 = cljs.core.async.timeout.call(null,(1000));
var inst_26245 = [inst_26243,inst_26244];
var inst_26246 = (new cljs.core.PersistentVector(null,2,(5),inst_26242,inst_26245,null));
var state_26268__$1 = state_26268;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26268__$1,(11),inst_26246);
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
});})(c__18518__auto___26294,ch))
;
return ((function (switch__18453__auto__,c__18518__auto___26294,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____0 = (function (){
var statearr_26290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26290[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__);

(statearr_26290[(1)] = (1));

return statearr_26290;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____1 = (function (state_26268){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_26268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e26291){if((e26291 instanceof Object)){
var ex__18457__auto__ = e26291;
var statearr_26292_26309 = state_26268;
(statearr_26292_26309[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26310 = state_26268;
state_26268 = G__26310;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18454__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___26294,ch))
})();
var state__18520__auto__ = (function (){var statearr_26293 = f__18519__auto__.call(null);
(statearr_26293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___26294);

return statearr_26293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___26294,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26311_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26311_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26318 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26318){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26316 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26317 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26316,_STAR_print_newline_STAR_26317,base_path_26318){
return (function() { 
var G__26319__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26320__i = 0, G__26320__a = new Array(arguments.length -  0);
while (G__26320__i < G__26320__a.length) {G__26320__a[G__26320__i] = arguments[G__26320__i + 0]; ++G__26320__i;}
  args = new cljs.core.IndexedSeq(G__26320__a,0);
} 
return G__26319__delegate.call(this,args);};
G__26319.cljs$lang$maxFixedArity = 0;
G__26319.cljs$lang$applyTo = (function (arglist__26321){
var args = cljs.core.seq(arglist__26321);
return G__26319__delegate(args);
});
G__26319.cljs$core$IFn$_invoke$arity$variadic = G__26319__delegate;
return G__26319;
})()
;})(_STAR_print_fn_STAR_26316,_STAR_print_newline_STAR_26317,base_path_26318))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26317;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26316;
}}catch (e26315){if((e26315 instanceof Error)){
var e = e26315;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26318], null));
} else {
var e = e26315;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26318))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26322){
var map__26329 = p__26322;
var map__26329__$1 = ((((!((map__26329 == null)))?((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);
var opts = map__26329__$1;
var build_id = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26329,map__26329__$1,opts,build_id){
return (function (p__26331){
var vec__26332 = p__26331;
var map__26333 = cljs.core.nth.call(null,vec__26332,(0),null);
var map__26333__$1 = ((((!((map__26333 == null)))?((((map__26333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26333):map__26333);
var msg = map__26333__$1;
var msg_name = cljs.core.get.call(null,map__26333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26332,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26332,map__26333,map__26333__$1,msg,msg_name,_,map__26329,map__26329__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26332,map__26333,map__26333__$1,msg,msg_name,_,map__26329,map__26329__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26329,map__26329__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26339){
var vec__26340 = p__26339;
var map__26341 = cljs.core.nth.call(null,vec__26340,(0),null);
var map__26341__$1 = ((((!((map__26341 == null)))?((((map__26341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26341):map__26341);
var msg = map__26341__$1;
var msg_name = cljs.core.get.call(null,map__26341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26340,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26343){
var map__26353 = p__26343;
var map__26353__$1 = ((((!((map__26353 == null)))?((((map__26353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26353):map__26353);
var on_compile_warning = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26353,map__26353__$1,on_compile_warning,on_compile_fail){
return (function (p__26355){
var vec__26356 = p__26355;
var map__26357 = cljs.core.nth.call(null,vec__26356,(0),null);
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var msg = map__26357__$1;
var msg_name = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26356,(1));
var pred__26359 = cljs.core._EQ_;
var expr__26360 = msg_name;
if(cljs.core.truth_(pred__26359.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26360))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26359.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26360))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26353,map__26353__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__,msg_hist,msg_names,msg){
return (function (state_26561){
var state_val_26562 = (state_26561[(1)]);
if((state_val_26562 === (7))){
var inst_26495 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26563_26604 = state_26561__$1;
(statearr_26563_26604[(2)] = inst_26495);

(statearr_26563_26604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (20))){
var inst_26523 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26523)){
var statearr_26564_26605 = state_26561__$1;
(statearr_26564_26605[(1)] = (22));

} else {
var statearr_26565_26606 = state_26561__$1;
(statearr_26565_26606[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (27))){
var inst_26535 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26536 = figwheel.client.heads_up.display_warning.call(null,inst_26535);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(30),inst_26536);
} else {
if((state_val_26562 === (1))){
var inst_26483 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26483)){
var statearr_26566_26607 = state_26561__$1;
(statearr_26566_26607[(1)] = (2));

} else {
var statearr_26567_26608 = state_26561__$1;
(statearr_26567_26608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (24))){
var inst_26551 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26568_26609 = state_26561__$1;
(statearr_26568_26609[(2)] = inst_26551);

(statearr_26568_26609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (4))){
var inst_26559 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26561__$1,inst_26559);
} else {
if((state_val_26562 === (15))){
var inst_26511 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26512 = figwheel.client.format_messages.call(null,inst_26511);
var inst_26513 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26514 = figwheel.client.heads_up.display_error.call(null,inst_26512,inst_26513);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(18),inst_26514);
} else {
if((state_val_26562 === (21))){
var inst_26553 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26569_26610 = state_26561__$1;
(statearr_26569_26610[(2)] = inst_26553);

(statearr_26569_26610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (31))){
var inst_26542 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(34),inst_26542);
} else {
if((state_val_26562 === (32))){
var state_26561__$1 = state_26561;
var statearr_26570_26611 = state_26561__$1;
(statearr_26570_26611[(2)] = null);

(statearr_26570_26611[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (33))){
var inst_26547 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26571_26612 = state_26561__$1;
(statearr_26571_26612[(2)] = inst_26547);

(statearr_26571_26612[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (13))){
var inst_26501 = (state_26561[(2)]);
var inst_26502 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26503 = figwheel.client.format_messages.call(null,inst_26502);
var inst_26504 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26505 = figwheel.client.heads_up.display_error.call(null,inst_26503,inst_26504);
var state_26561__$1 = (function (){var statearr_26572 = state_26561;
(statearr_26572[(7)] = inst_26501);

return statearr_26572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(14),inst_26505);
} else {
if((state_val_26562 === (22))){
var inst_26525 = figwheel.client.heads_up.clear.call(null);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(25),inst_26525);
} else {
if((state_val_26562 === (29))){
var inst_26549 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26573_26613 = state_26561__$1;
(statearr_26573_26613[(2)] = inst_26549);

(statearr_26573_26613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (6))){
var inst_26491 = figwheel.client.heads_up.clear.call(null);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(9),inst_26491);
} else {
if((state_val_26562 === (28))){
var inst_26540 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26540)){
var statearr_26574_26614 = state_26561__$1;
(statearr_26574_26614[(1)] = (31));

} else {
var statearr_26575_26615 = state_26561__$1;
(statearr_26575_26615[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (25))){
var inst_26527 = (state_26561[(2)]);
var inst_26528 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26529 = figwheel.client.heads_up.display_warning.call(null,inst_26528);
var state_26561__$1 = (function (){var statearr_26576 = state_26561;
(statearr_26576[(8)] = inst_26527);

return statearr_26576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(26),inst_26529);
} else {
if((state_val_26562 === (34))){
var inst_26544 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26577_26616 = state_26561__$1;
(statearr_26577_26616[(2)] = inst_26544);

(statearr_26577_26616[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (17))){
var inst_26555 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26578_26617 = state_26561__$1;
(statearr_26578_26617[(2)] = inst_26555);

(statearr_26578_26617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (3))){
var inst_26497 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26497)){
var statearr_26579_26618 = state_26561__$1;
(statearr_26579_26618[(1)] = (10));

} else {
var statearr_26580_26619 = state_26561__$1;
(statearr_26580_26619[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (12))){
var inst_26557 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26581_26620 = state_26561__$1;
(statearr_26581_26620[(2)] = inst_26557);

(statearr_26581_26620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (2))){
var inst_26485 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26485)){
var statearr_26582_26621 = state_26561__$1;
(statearr_26582_26621[(1)] = (5));

} else {
var statearr_26583_26622 = state_26561__$1;
(statearr_26583_26622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (23))){
var inst_26533 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26533)){
var statearr_26584_26623 = state_26561__$1;
(statearr_26584_26623[(1)] = (27));

} else {
var statearr_26585_26624 = state_26561__$1;
(statearr_26585_26624[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (19))){
var inst_26520 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26521 = figwheel.client.heads_up.append_message.call(null,inst_26520);
var state_26561__$1 = state_26561;
var statearr_26586_26625 = state_26561__$1;
(statearr_26586_26625[(2)] = inst_26521);

(statearr_26586_26625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (11))){
var inst_26509 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26509)){
var statearr_26587_26626 = state_26561__$1;
(statearr_26587_26626[(1)] = (15));

} else {
var statearr_26588_26627 = state_26561__$1;
(statearr_26588_26627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (9))){
var inst_26493 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26589_26628 = state_26561__$1;
(statearr_26589_26628[(2)] = inst_26493);

(statearr_26589_26628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (5))){
var inst_26487 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(8),inst_26487);
} else {
if((state_val_26562 === (14))){
var inst_26507 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26590_26629 = state_26561__$1;
(statearr_26590_26629[(2)] = inst_26507);

(statearr_26590_26629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (26))){
var inst_26531 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26591_26630 = state_26561__$1;
(statearr_26591_26630[(2)] = inst_26531);

(statearr_26591_26630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (16))){
var inst_26518 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26518)){
var statearr_26592_26631 = state_26561__$1;
(statearr_26592_26631[(1)] = (19));

} else {
var statearr_26593_26632 = state_26561__$1;
(statearr_26593_26632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (30))){
var inst_26538 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26594_26633 = state_26561__$1;
(statearr_26594_26633[(2)] = inst_26538);

(statearr_26594_26633[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (10))){
var inst_26499 = figwheel.client.heads_up.clear.call(null);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26561__$1,(13),inst_26499);
} else {
if((state_val_26562 === (18))){
var inst_26516 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26595_26634 = state_26561__$1;
(statearr_26595_26634[(2)] = inst_26516);

(statearr_26595_26634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (8))){
var inst_26489 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26596_26635 = state_26561__$1;
(statearr_26596_26635[(2)] = inst_26489);

(statearr_26596_26635[(1)] = (7));


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
});})(c__18518__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18453__auto__,c__18518__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____0 = (function (){
var statearr_26600 = [null,null,null,null,null,null,null,null,null];
(statearr_26600[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__);

(statearr_26600[(1)] = (1));

return statearr_26600;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____1 = (function (state_26561){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_26561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e26601){if((e26601 instanceof Object)){
var ex__18457__auto__ = e26601;
var statearr_26602_26636 = state_26561;
(statearr_26602_26636[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26637 = state_26561;
state_26561 = G__26637;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__ = function(state_26561){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____1.call(this,state_26561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__,msg_hist,msg_names,msg))
})();
var state__18520__auto__ = (function (){var statearr_26603 = f__18519__auto__.call(null);
(statearr_26603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_26603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__,msg_hist,msg_names,msg))
);

return c__18518__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18518__auto___26700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto___26700,ch){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto___26700,ch){
return (function (state_26683){
var state_val_26684 = (state_26683[(1)]);
if((state_val_26684 === (1))){
var state_26683__$1 = state_26683;
var statearr_26685_26701 = state_26683__$1;
(statearr_26685_26701[(2)] = null);

(statearr_26685_26701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (2))){
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26683__$1,(4),ch);
} else {
if((state_val_26684 === (3))){
var inst_26681 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26683__$1,inst_26681);
} else {
if((state_val_26684 === (4))){
var inst_26671 = (state_26683[(7)]);
var inst_26671__$1 = (state_26683[(2)]);
var state_26683__$1 = (function (){var statearr_26686 = state_26683;
(statearr_26686[(7)] = inst_26671__$1);

return statearr_26686;
})();
if(cljs.core.truth_(inst_26671__$1)){
var statearr_26687_26702 = state_26683__$1;
(statearr_26687_26702[(1)] = (5));

} else {
var statearr_26688_26703 = state_26683__$1;
(statearr_26688_26703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (5))){
var inst_26671 = (state_26683[(7)]);
var inst_26673 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26671);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26683__$1,(8),inst_26673);
} else {
if((state_val_26684 === (6))){
var state_26683__$1 = state_26683;
var statearr_26689_26704 = state_26683__$1;
(statearr_26689_26704[(2)] = null);

(statearr_26689_26704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (7))){
var inst_26679 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26690_26705 = state_26683__$1;
(statearr_26690_26705[(2)] = inst_26679);

(statearr_26690_26705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (8))){
var inst_26675 = (state_26683[(2)]);
var state_26683__$1 = (function (){var statearr_26691 = state_26683;
(statearr_26691[(8)] = inst_26675);

return statearr_26691;
})();
var statearr_26692_26706 = state_26683__$1;
(statearr_26692_26706[(2)] = null);

(statearr_26692_26706[(1)] = (2));


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
});})(c__18518__auto___26700,ch))
;
return ((function (switch__18453__auto__,c__18518__auto___26700,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18454__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18454__auto____0 = (function (){
var statearr_26696 = [null,null,null,null,null,null,null,null,null];
(statearr_26696[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18454__auto__);

(statearr_26696[(1)] = (1));

return statearr_26696;
});
var figwheel$client$heads_up_plugin_$_state_machine__18454__auto____1 = (function (state_26683){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_26683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e26697){if((e26697 instanceof Object)){
var ex__18457__auto__ = e26697;
var statearr_26698_26707 = state_26683;
(statearr_26698_26707[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26708 = state_26683;
state_26683 = G__26708;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18454__auto__ = function(state_26683){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18454__auto____1.call(this,state_26683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18454__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18454__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto___26700,ch))
})();
var state__18520__auto__ = (function (){var statearr_26699 = f__18519__auto__.call(null);
(statearr_26699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto___26700);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto___26700,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_26729){
var state_val_26730 = (state_26729[(1)]);
if((state_val_26730 === (1))){
var inst_26724 = cljs.core.async.timeout.call(null,(3000));
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26729__$1,(2),inst_26724);
} else {
if((state_val_26730 === (2))){
var inst_26726 = (state_26729[(2)]);
var inst_26727 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26729__$1 = (function (){var statearr_26731 = state_26729;
(statearr_26731[(7)] = inst_26726);

return statearr_26731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26729__$1,inst_26727);
} else {
return null;
}
}
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____0 = (function (){
var statearr_26735 = [null,null,null,null,null,null,null,null];
(statearr_26735[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__);

(statearr_26735[(1)] = (1));

return statearr_26735;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____1 = (function (state_26729){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_26729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e26736){if((e26736 instanceof Object)){
var ex__18457__auto__ = e26736;
var statearr_26737_26739 = state_26729;
(statearr_26737_26739[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26740 = state_26729;
state_26729 = G__26740;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18454__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_26738 = f__18519__auto__.call(null);
(statearr_26738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26741){
var map__26748 = p__26741;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var ed = map__26748__$1;
var formatted_exception = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26750_26754 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26751_26755 = null;
var count__26752_26756 = (0);
var i__26753_26757 = (0);
while(true){
if((i__26753_26757 < count__26752_26756)){
var msg_26758 = cljs.core._nth.call(null,chunk__26751_26755,i__26753_26757);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26758);

var G__26759 = seq__26750_26754;
var G__26760 = chunk__26751_26755;
var G__26761 = count__26752_26756;
var G__26762 = (i__26753_26757 + (1));
seq__26750_26754 = G__26759;
chunk__26751_26755 = G__26760;
count__26752_26756 = G__26761;
i__26753_26757 = G__26762;
continue;
} else {
var temp__4425__auto___26763 = cljs.core.seq.call(null,seq__26750_26754);
if(temp__4425__auto___26763){
var seq__26750_26764__$1 = temp__4425__auto___26763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26750_26764__$1)){
var c__17224__auto___26765 = cljs.core.chunk_first.call(null,seq__26750_26764__$1);
var G__26766 = cljs.core.chunk_rest.call(null,seq__26750_26764__$1);
var G__26767 = c__17224__auto___26765;
var G__26768 = cljs.core.count.call(null,c__17224__auto___26765);
var G__26769 = (0);
seq__26750_26754 = G__26766;
chunk__26751_26755 = G__26767;
count__26752_26756 = G__26768;
i__26753_26757 = G__26769;
continue;
} else {
var msg_26770 = cljs.core.first.call(null,seq__26750_26764__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26770);

var G__26771 = cljs.core.next.call(null,seq__26750_26764__$1);
var G__26772 = null;
var G__26773 = (0);
var G__26774 = (0);
seq__26750_26754 = G__26771;
chunk__26751_26755 = G__26772;
count__26752_26756 = G__26773;
i__26753_26757 = G__26774;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26775){
var map__26778 = p__26775;
var map__26778__$1 = ((((!((map__26778 == null)))?((((map__26778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26778):map__26778);
var w = map__26778__$1;
var message = cljs.core.get.call(null,map__26778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16428__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16428__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16428__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26786 = cljs.core.seq.call(null,plugins);
var chunk__26787 = null;
var count__26788 = (0);
var i__26789 = (0);
while(true){
if((i__26789 < count__26788)){
var vec__26790 = cljs.core._nth.call(null,chunk__26787,i__26789);
var k = cljs.core.nth.call(null,vec__26790,(0),null);
var plugin = cljs.core.nth.call(null,vec__26790,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26792 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26786,chunk__26787,count__26788,i__26789,pl_26792,vec__26790,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26792.call(null,msg_hist);
});})(seq__26786,chunk__26787,count__26788,i__26789,pl_26792,vec__26790,k,plugin))
);
} else {
}

var G__26793 = seq__26786;
var G__26794 = chunk__26787;
var G__26795 = count__26788;
var G__26796 = (i__26789 + (1));
seq__26786 = G__26793;
chunk__26787 = G__26794;
count__26788 = G__26795;
i__26789 = G__26796;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26786);
if(temp__4425__auto__){
var seq__26786__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26786__$1)){
var c__17224__auto__ = cljs.core.chunk_first.call(null,seq__26786__$1);
var G__26797 = cljs.core.chunk_rest.call(null,seq__26786__$1);
var G__26798 = c__17224__auto__;
var G__26799 = cljs.core.count.call(null,c__17224__auto__);
var G__26800 = (0);
seq__26786 = G__26797;
chunk__26787 = G__26798;
count__26788 = G__26799;
i__26789 = G__26800;
continue;
} else {
var vec__26791 = cljs.core.first.call(null,seq__26786__$1);
var k = cljs.core.nth.call(null,vec__26791,(0),null);
var plugin = cljs.core.nth.call(null,vec__26791,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26801 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26786,chunk__26787,count__26788,i__26789,pl_26801,vec__26791,k,plugin,seq__26786__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26801.call(null,msg_hist);
});})(seq__26786,chunk__26787,count__26788,i__26789,pl_26801,vec__26791,k,plugin,seq__26786__$1,temp__4425__auto__))
);
} else {
}

var G__26802 = cljs.core.next.call(null,seq__26786__$1);
var G__26803 = null;
var G__26804 = (0);
var G__26805 = (0);
seq__26786 = G__26802;
chunk__26787 = G__26803;
count__26788 = G__26804;
i__26789 = G__26805;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args26806 = [];
var len__17479__auto___26809 = arguments.length;
var i__17480__auto___26810 = (0);
while(true){
if((i__17480__auto___26810 < len__17479__auto___26809)){
args26806.push((arguments[i__17480__auto___26810]));

var G__26811 = (i__17480__auto___26810 + (1));
i__17480__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26808 = args26806.length;
switch (G__26808) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26806.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17486__auto__ = [];
var len__17479__auto___26817 = arguments.length;
var i__17480__auto___26818 = (0);
while(true){
if((i__17480__auto___26818 < len__17479__auto___26817)){
args__17486__auto__.push((arguments[i__17480__auto___26818]));

var G__26819 = (i__17480__auto___26818 + (1));
i__17480__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((0) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17487__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26814){
var map__26815 = p__26814;
var map__26815__$1 = ((((!((map__26815 == null)))?((((map__26815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26815):map__26815);
var opts = map__26815__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26813){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26813));
});

//# sourceMappingURL=client.js.map