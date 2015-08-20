// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17486__auto__ = [];
var len__17479__auto___26959 = arguments.length;
var i__17480__auto___26960 = (0);
while(true){
if((i__17480__auto___26960 < len__17479__auto___26959)){
args__17486__auto__.push((arguments[i__17480__auto___26960]));

var G__26961 = (i__17480__auto___26960 + (1));
i__17480__auto___26960 = G__26961;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((2) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17487__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26951_26962 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26952_26963 = null;
var count__26953_26964 = (0);
var i__26954_26965 = (0);
while(true){
if((i__26954_26965 < count__26953_26964)){
var k_26966 = cljs.core._nth.call(null,chunk__26952_26963,i__26954_26965);
e.setAttribute(cljs.core.name.call(null,k_26966),cljs.core.get.call(null,attrs,k_26966));

var G__26967 = seq__26951_26962;
var G__26968 = chunk__26952_26963;
var G__26969 = count__26953_26964;
var G__26970 = (i__26954_26965 + (1));
seq__26951_26962 = G__26967;
chunk__26952_26963 = G__26968;
count__26953_26964 = G__26969;
i__26954_26965 = G__26970;
continue;
} else {
var temp__4425__auto___26971 = cljs.core.seq.call(null,seq__26951_26962);
if(temp__4425__auto___26971){
var seq__26951_26972__$1 = temp__4425__auto___26971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26951_26972__$1)){
var c__17224__auto___26973 = cljs.core.chunk_first.call(null,seq__26951_26972__$1);
var G__26974 = cljs.core.chunk_rest.call(null,seq__26951_26972__$1);
var G__26975 = c__17224__auto___26973;
var G__26976 = cljs.core.count.call(null,c__17224__auto___26973);
var G__26977 = (0);
seq__26951_26962 = G__26974;
chunk__26952_26963 = G__26975;
count__26953_26964 = G__26976;
i__26954_26965 = G__26977;
continue;
} else {
var k_26978 = cljs.core.first.call(null,seq__26951_26972__$1);
e.setAttribute(cljs.core.name.call(null,k_26978),cljs.core.get.call(null,attrs,k_26978));

var G__26979 = cljs.core.next.call(null,seq__26951_26972__$1);
var G__26980 = null;
var G__26981 = (0);
var G__26982 = (0);
seq__26951_26962 = G__26979;
chunk__26952_26963 = G__26980;
count__26953_26964 = G__26981;
i__26954_26965 = G__26982;
continue;
}
} else {
}
}
break;
}

var seq__26955_26983 = cljs.core.seq.call(null,children);
var chunk__26956_26984 = null;
var count__26957_26985 = (0);
var i__26958_26986 = (0);
while(true){
if((i__26958_26986 < count__26957_26985)){
var ch_26987 = cljs.core._nth.call(null,chunk__26956_26984,i__26958_26986);
e.appendChild(ch_26987);

var G__26988 = seq__26955_26983;
var G__26989 = chunk__26956_26984;
var G__26990 = count__26957_26985;
var G__26991 = (i__26958_26986 + (1));
seq__26955_26983 = G__26988;
chunk__26956_26984 = G__26989;
count__26957_26985 = G__26990;
i__26958_26986 = G__26991;
continue;
} else {
var temp__4425__auto___26992 = cljs.core.seq.call(null,seq__26955_26983);
if(temp__4425__auto___26992){
var seq__26955_26993__$1 = temp__4425__auto___26992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26955_26993__$1)){
var c__17224__auto___26994 = cljs.core.chunk_first.call(null,seq__26955_26993__$1);
var G__26995 = cljs.core.chunk_rest.call(null,seq__26955_26993__$1);
var G__26996 = c__17224__auto___26994;
var G__26997 = cljs.core.count.call(null,c__17224__auto___26994);
var G__26998 = (0);
seq__26955_26983 = G__26995;
chunk__26956_26984 = G__26996;
count__26957_26985 = G__26997;
i__26958_26986 = G__26998;
continue;
} else {
var ch_26999 = cljs.core.first.call(null,seq__26955_26993__$1);
e.appendChild(ch_26999);

var G__27000 = cljs.core.next.call(null,seq__26955_26993__$1);
var G__27001 = null;
var G__27002 = (0);
var G__27003 = (0);
seq__26955_26983 = G__27000;
chunk__26956_26984 = G__27001;
count__26957_26985 = G__27002;
i__26958_26986 = G__27003;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26948){
var G__26949 = cljs.core.first.call(null,seq26948);
var seq26948__$1 = cljs.core.next.call(null,seq26948);
var G__26950 = cljs.core.first.call(null,seq26948__$1);
var seq26948__$2 = cljs.core.next.call(null,seq26948__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26949,G__26950,seq26948__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17334__auto__,prefer_table__17335__auto__,method_cache__17336__auto__,cached_hierarchy__17337__auto__,hierarchy__17338__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17334__auto__,prefer_table__17335__auto__,method_cache__17336__auto__,cached_hierarchy__17337__auto__,hierarchy__17338__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17338__auto__,method_table__17334__auto__,prefer_table__17335__auto__,method_cache__17336__auto__,cached_hierarchy__17337__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27004 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27004.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27004.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27004.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27004);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27005,st_map){
var map__27010 = p__27005;
var map__27010__$1 = ((((!((map__27010 == null)))?((((map__27010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var container_el = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27010,map__27010__$1,container_el){
return (function (p__27012){
var vec__27013 = p__27012;
var k = cljs.core.nth.call(null,vec__27013,(0),null);
var v = cljs.core.nth.call(null,vec__27013,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27010,map__27010__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27014,dom_str){
var map__27017 = p__27014;
var map__27017__$1 = ((((!((map__27017 == null)))?((((map__27017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27017):map__27017);
var c = map__27017__$1;
var content_area_el = cljs.core.get.call(null,map__27017__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27019){
var map__27022 = p__27019;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var content_area_el = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (1))){
var inst_27050 = (state_27065[(7)]);
var inst_27050__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27051 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27052 = ["10px","10px","100%","68px","1.0"];
var inst_27053 = cljs.core.PersistentHashMap.fromArrays(inst_27051,inst_27052);
var inst_27054 = cljs.core.merge.call(null,inst_27053,style);
var inst_27055 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27050__$1,inst_27054);
var inst_27056 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27050__$1,msg);
var inst_27057 = cljs.core.async.timeout.call(null,(300));
var state_27065__$1 = (function (){var statearr_27067 = state_27065;
(statearr_27067[(7)] = inst_27050__$1);

(statearr_27067[(8)] = inst_27055);

(statearr_27067[(9)] = inst_27056);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27065__$1,(2),inst_27057);
} else {
if((state_val_27066 === (2))){
var inst_27050 = (state_27065[(7)]);
var inst_27059 = (state_27065[(2)]);
var inst_27060 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27061 = ["auto"];
var inst_27062 = cljs.core.PersistentHashMap.fromArrays(inst_27060,inst_27061);
var inst_27063 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27050,inst_27062);
var state_27065__$1 = (function (){var statearr_27068 = state_27065;
(statearr_27068[(10)] = inst_27059);

return statearr_27068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27065__$1,inst_27063);
} else {
return null;
}
}
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____0 = (function (){
var statearr_27072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27072[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__);

(statearr_27072[(1)] = (1));

return statearr_27072;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____1 = (function (state_27065){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27073){if((e27073 instanceof Object)){
var ex__18457__auto__ = e27073;
var statearr_27074_27076 = state_27065;
(statearr_27074_27076[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27077 = state_27065;
state_27065 = G__27077;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_27075 = f__18519__auto__.call(null);
(statearr_27075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_27075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27079 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27079,(0),null);
var ln = cljs.core.nth.call(null,vec__27079,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27082 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27082,(0),null);
var file_line = cljs.core.nth.call(null,vec__27082,(1),null);
var file_column = cljs.core.nth.call(null,vec__27082,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27082,file_name,file_line,file_column){
return (function (p1__27080_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27080_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27082,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16440__auto__ = file_line;
if(cljs.core.truth_(or__16440__auto__)){
return or__16440__auto__;
} else {
var and__16428__auto__ = cause;
if(cljs.core.truth_(and__16428__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16428__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27085 = figwheel.client.heads_up.ensure_container.call(null);
var map__27085__$1 = ((((!((map__27085 == null)))?((((map__27085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27085):map__27085);
var content_area_el = cljs.core.get.call(null,map__27085__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (1))){
var inst_27116 = (state_27133[(7)]);
var inst_27116__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27117 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27118 = ["0.0"];
var inst_27119 = cljs.core.PersistentHashMap.fromArrays(inst_27117,inst_27118);
var inst_27120 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27116__$1,inst_27119);
var inst_27121 = cljs.core.async.timeout.call(null,(300));
var state_27133__$1 = (function (){var statearr_27135 = state_27133;
(statearr_27135[(7)] = inst_27116__$1);

(statearr_27135[(8)] = inst_27120);

return statearr_27135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(2),inst_27121);
} else {
if((state_val_27134 === (2))){
var inst_27116 = (state_27133[(7)]);
var inst_27123 = (state_27133[(2)]);
var inst_27124 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27125 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27126 = cljs.core.PersistentHashMap.fromArrays(inst_27124,inst_27125);
var inst_27127 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27116,inst_27126);
var inst_27128 = cljs.core.async.timeout.call(null,(200));
var state_27133__$1 = (function (){var statearr_27136 = state_27133;
(statearr_27136[(9)] = inst_27127);

(statearr_27136[(10)] = inst_27123);

return statearr_27136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(3),inst_27128);
} else {
if((state_val_27134 === (3))){
var inst_27116 = (state_27133[(7)]);
var inst_27130 = (state_27133[(2)]);
var inst_27131 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27116,"");
var state_27133__$1 = (function (){var statearr_27137 = state_27133;
(statearr_27137[(11)] = inst_27130);

return statearr_27137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
return null;
}
}
}
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18454__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18454__auto____0 = (function (){
var statearr_27141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27141[(0)] = figwheel$client$heads_up$clear_$_state_machine__18454__auto__);

(statearr_27141[(1)] = (1));

return statearr_27141;
});
var figwheel$client$heads_up$clear_$_state_machine__18454__auto____1 = (function (state_27133){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27142){if((e27142 instanceof Object)){
var ex__18457__auto__ = e27142;
var statearr_27143_27145 = state_27133;
(statearr_27143_27145[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27146 = state_27133;
state_27133 = G__27146;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18454__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18454__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18454__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18454__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_27144 = f__18519__auto__.call(null);
(statearr_27144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_27144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18518__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18518__auto__){
return (function (){
var f__18519__auto__ = (function (){var switch__18453__auto__ = ((function (c__18518__auto__){
return (function (state_27178){
var state_val_27179 = (state_27178[(1)]);
if((state_val_27179 === (1))){
var inst_27168 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,(2),inst_27168);
} else {
if((state_val_27179 === (2))){
var inst_27170 = (state_27178[(2)]);
var inst_27171 = cljs.core.async.timeout.call(null,(400));
var state_27178__$1 = (function (){var statearr_27180 = state_27178;
(statearr_27180[(7)] = inst_27170);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,(3),inst_27171);
} else {
if((state_val_27179 === (3))){
var inst_27173 = (state_27178[(2)]);
var inst_27174 = figwheel.client.heads_up.clear.call(null);
var state_27178__$1 = (function (){var statearr_27181 = state_27178;
(statearr_27181[(8)] = inst_27173);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,(4),inst_27174);
} else {
if((state_val_27179 === (4))){
var inst_27176 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27178__$1,inst_27176);
} else {
return null;
}
}
}
}
});})(c__18518__auto__))
;
return ((function (switch__18453__auto__,c__18518__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____0 = (function (){
var statearr_27185 = [null,null,null,null,null,null,null,null,null];
(statearr_27185[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__);

(statearr_27185[(1)] = (1));

return statearr_27185;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____1 = (function (state_27178){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__.call(null,state_27178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e27186){if((e27186 instanceof Object)){
var ex__18457__auto__ = e27186;
var statearr_27187_27189 = state_27178;
(statearr_27187_27189[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27190 = state_27178;
state_27178 = G__27190;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__ = function(state_27178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____1.call(this,state_27178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__18518__auto__))
})();
var state__18520__auto__ = (function (){var statearr_27188 = f__18519__auto__.call(null);
(statearr_27188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18518__auto__);

return statearr_27188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18520__auto__);
});})(c__18518__auto__))
);

return c__18518__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map