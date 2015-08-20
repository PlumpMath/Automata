// Compiled by ClojureScript 1.7.48 {}
goog.provide('automata.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('automata.rules');
goog.require('quil.middleware');
automata.core.log = (function automata$core$log(thing){
return console.log(cljs.core.clj__GT_js.call(null,thing));
});
automata.core.build_world = (function automata$core$build_world(){
var args__17486__auto__ = [];
var len__17479__auto___18011 = arguments.length;
var i__17480__auto___18012 = (0);
while(true){
if((i__17480__auto___18012 < len__17479__auto___18011)){
args__17486__auto__.push((arguments[i__17480__auto___18012]));

var G__18013 = (i__17480__auto___18012 + (1));
i__17480__auto___18012 = G__18013;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((2) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((2)),(0))):null);
return automata.core.build_world.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17487__auto__);
});

automata.core.build_world.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__18008){
var map__18009 = p__18008;
var map__18009__$1 = ((((!((map__18009 == null)))?((((map__18009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18009):map__18009);
var rand = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"rand","rand",908504774),false);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.call(null,x,((function (map__18009,map__18009__$1,rand){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.call(null,y,(cljs.core.truth_(rand)?((function (map__18009,map__18009__$1,rand){
return (function (){
if(cljs.core._EQ_.call(null,(1),cljs.core.rand_int.call(null,(7)))){
return (1);
} else {
return (0);
}
});})(map__18009,map__18009__$1,rand))
:((function (map__18009,map__18009__$1,rand){
return (function (){
return cljs.core.identity.call(null,(0));
});})(map__18009,map__18009__$1,rand))
)));
});})(map__18009,map__18009__$1,rand))
));
});

automata.core.build_world.cljs$lang$maxFixedArity = (2);

automata.core.build_world.cljs$lang$applyTo = (function (seq18005){
var G__18006 = cljs.core.first.call(null,seq18005);
var seq18005__$1 = cljs.core.next.call(null,seq18005);
var G__18007 = cljs.core.first.call(null,seq18005__$1);
var seq18005__$2 = cljs.core.next.call(null,seq18005__$1);
return automata.core.build_world.cljs$core$IFn$_invoke$arity$variadic(G__18006,G__18007,seq18005__$2);
});
automata.core.world_x = (50);
automata.core.world_y = (50);
automata.core.sq_size = (function automata$core$sq_size(){
return (quil.core.width.call(null) / automata.core.world_x);
});
automata.core.row__GT_cords = (function automata$core$row__GT_cords(in_y,size){

return cljs.core.iterate.call(null,(function (p__18016){
var vec__18017 = p__18016;
var x = cljs.core.nth.call(null,vec__18017,(0),null);
var y = cljs.core.nth.call(null,vec__18017,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + size),y], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),in_y], null));
});
automata.core.row_starts = (function automata$core$row_starts(size){

return cljs.core.iterate.call(null,(function (p1__18018_SHARP_){
return (size + p1__18018_SHARP_);
}),(0));
});
automata.core.gen_rows = (function automata$core$gen_rows(cnt,size){

return cljs.core.mapv.call(null,(function (start_x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,cnt,automata.core.row__GT_cords.call(null,start_x,size)));
}),cljs.core.take.call(null,cnt,automata.core.row_starts.call(null,size)));
});
automata.core.zip_cells = (function automata$core$zip_cells(cells,size){

var rows = automata.core.gen_rows.call(null,cljs.core.count.call(null,cells),size);
return cljs.core.mapv.call(null,((function (rows){
return (function (cell_row,cord_row){
return cljs.core.mapv.call(null,((function (rows){
return (function (cell,cord){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cell","cell",764245084),cell,new cljs.core.Keyword(null,"cord","cord",2047221185),cord,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"width","width",-384071477),size], null);
});})(rows))
,cell_row,cord_row);
});})(rows))
,cells,rows);
});
automata.core.cell__GT_color = (function automata$core$cell__GT_color(cell){
var G__18020 = cell;
switch (G__18020) {
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cell)].join('')));

}
});
automata.core.offsets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null)], null);
automata.core.wrap = (function automata$core$wrap(min,max,x){
if((x < min)){
return max;
} else {
if((x > max)){
return min;
} else {
return x;

}
}
});
automata.core.do_offset = (function automata$core$do_offset(wrapper,off,cord){
var new_cord = cljs.core.mapv.call(null,cljs.core._PLUS_,off,cord);
return cljs.core.mapv.call(null,wrapper,new_cord);
});
automata.core.cord__GT_hood_cords = (function automata$core$cord__GT_hood_cords(offset_coll,wrapper,cord){
return cljs.core.map.call(null,(function (off_row){
return cljs.core.map.call(null,cljs.core.partial.call(null,automata.core.do_offset,wrapper),off_row,cljs.core.repeatedly.call(null,(function (){
return cljs.core.identity.call(null,cord);
})));
}),offset_coll);
});
automata.core.get_hood = (function automata$core$get_hood(world,hood){
return cljs.core.mapv.call(null,(function (p1__18022_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.get_in,world),p1__18022_SHARP_);
}),hood);
});
automata.core.world__GT_hoods = (function automata$core$world__GT_hoods(){
var args__17486__auto__ = [];
var len__17479__auto___18028 = arguments.length;
var i__17480__auto___18029 = (0);
while(true){
if((i__17480__auto___18029 < len__17479__auto___18028)){
args__17486__auto__.push((arguments[i__17480__auto___18029]));

var G__18030 = (i__17480__auto___18029 + (1));
i__17480__auto___18029 = G__18030;
continue;
} else {
}
break;
}

var argseq__17487__auto__ = ((((1) < args__17486__auto__.length))?(new cljs.core.IndexedSeq(args__17486__auto__.slice((1)),(0))):null);
return automata.core.world__GT_hoods.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17487__auto__);
});

automata.core.world__GT_hoods.cljs$core$IFn$_invoke$arity$variadic = (function (world,p__18025){
var map__18026 = p__18025;
var map__18026__$1 = ((((!((map__18026 == null)))?((((map__18026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18026):map__18026);
var min = cljs.core.get.call(null,map__18026__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__18026__$1,new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,world) - (1)));
var wrapper = cljs.core.get.call(null,map__18026__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),cljs.core.memoize.call(null,cljs.core.partial.call(null,automata.core.wrap,min,max)));
var getter = cljs.core.get.call(null,map__18026__$1,new cljs.core.Keyword(null,"getter","getter",84844855),cljs.core.partial.call(null,automata.core.get_hood,world));
var rows = automata.core.gen_rows.call(null,cljs.core.count.call(null,world),(1));
return cljs.core.map.call(null,((function (rows,map__18026,map__18026__$1,min,max,wrapper,getter){
return (function (row){
return cljs.core.map.call(null,((function (rows,map__18026,map__18026__$1,min,max,wrapper,getter){
return (function (cord){
return getter.call(null,automata.core.cord__GT_hood_cords.call(null,automata.core.offsets,wrapper,cord));
});})(rows,map__18026,map__18026__$1,min,max,wrapper,getter))
,row);
});})(rows,map__18026,map__18026__$1,min,max,wrapper,getter))
,rows);
});

automata.core.world__GT_hoods.cljs$lang$maxFixedArity = (1);

automata.core.world__GT_hoods.cljs$lang$applyTo = (function (seq18023){
var G__18024 = cljs.core.first.call(null,seq18023);
var seq18023__$1 = cljs.core.next.call(null,seq18023);
return automata.core.world__GT_hoods.cljs$core$IFn$_invoke$arity$variadic(G__18024,seq18023__$1);
});
automata.core._hood__GT_next_cell = (function automata$core$_hood__GT_next_cell(hood,rules){
var live = cljs.core.reduce.call(null,(function (last,this_rule){
var and__16428__auto__ = last;
if(cljs.core.truth_(and__16428__auto__)){
return this_rule.call(null,hood);
} else {
return and__16428__auto__;
}
}),true,rules);
if(cljs.core.truth_(live)){
return (1);
} else {
return (0);
}
});
automata.core.hood__GT_next_cell = cljs.core.memoize.call(null,automata.core._hood__GT_next_cell);
automata.core.hoods__GT_next_world = (function automata$core$hoods__GT_next_world(hoods,rules){

return cljs.core.mapv.call(null,(function (hood_row){
return cljs.core.mapv.call(null,(function (cur_hood){
return automata.core.hood__GT_next_cell.call(null,cur_hood,rules);
}),hood_row);
}),hoods);
});
automata.core.draw_cellcord = (function automata$core$draw_cellcord(p__18031){
var map__18035 = p__18031;
var map__18035__$1 = ((((!((map__18035 == null)))?((((map__18035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18035):map__18035);
var cell = cljs.core.get.call(null,map__18035__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var vec__18036 = cljs.core.get.call(null,map__18035__$1,new cljs.core.Keyword(null,"cord","cord",2047221185));
var x = cljs.core.nth.call(null,vec__18036,(0),null);
var y = cljs.core.nth.call(null,vec__18036,(1),null);
var height = cljs.core.get.call(null,map__18035__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__18035__$1,new cljs.core.Keyword(null,"width","width",-384071477));
cljs.core.apply.call(null,quil.core.fill,automata.core.cell__GT_color.call(null,cell));

return quil.core.rect.call(null,x,y,width,height);
});
automata.core.draw_cellcords = (function automata$core$draw_cellcords(cellcords){

return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,automata.core.draw_cellcord),cellcords);
});
automata.core.setup = (function automata$core$setup(){
quil.core.frame_rate.call(null,(1));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"world","world",-418292623),automata.core.build_world.call(null,automata.core.world_x,automata.core.world_y,new cljs.core.Keyword(null,"rand","rand",908504774),true),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"size","size",1098693007),automata.core.sq_size.call(null),new cljs.core.Keyword(null,"x","x",2099068185),automata.core.world_x,new cljs.core.Keyword(null,"y","y",-1757859776),automata.core.world_y], null);
});
automata.core.step_world = (function automata$core$step_world(world,rules){
return automata.core.hoods__GT_next_world.call(null,automata.core.world__GT_hoods.call(null,world),rules);
});
cljs.core.set_print_fn_BANG_.call(null,automata.core.log);
automata.core.update_state = (function automata$core$update_state(p__18038){
var map__18041 = p__18038;
var map__18041__$1 = ((((!((map__18041 == null)))?((((map__18041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18041):map__18041);
var state = map__18041__$1;
var world = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var new_world = automata.core.step_world.call(null,world,automata.rules.rules);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),new_world);
});
automata.core.draw_state = (function automata$core$draw_state(p__18043){
var map__18046 = p__18043;
var map__18046__$1 = ((((!((map__18046 == null)))?((((map__18046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18046):map__18046);
var state = map__18046__$1;
var world = cljs.core.get.call(null,map__18046__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var size = cljs.core.get.call(null,map__18046__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__18046__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__18046__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__18046__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.background.call(null,(240));

automata.core.draw_cellcords.call(null,automata.core.zip_cells.call(null,world,size));

return state;
});
automata.core.automata = (function automata$core$automata(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"automata",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,automata.core.update_state))?(function() { 
var G__18048__delegate = function (args){
return cljs.core.apply.call(null,automata.core.update_state,args);
};
var G__18048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18049__i = 0, G__18049__a = new Array(arguments.length -  0);
while (G__18049__i < G__18049__a.length) {G__18049__a[G__18049__i] = arguments[G__18049__i + 0]; ++G__18049__i;}
  args = new cljs.core.IndexedSeq(G__18049__a,0);
} 
return G__18048__delegate.call(this,args);};
G__18048.cljs$lang$maxFixedArity = 0;
G__18048.cljs$lang$applyTo = (function (arglist__18050){
var args = cljs.core.seq(arglist__18050);
return G__18048__delegate(args);
});
G__18048.cljs$core$IFn$_invoke$arity$variadic = G__18048__delegate;
return G__18048;
})()
:automata.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,automata.core.setup))?(function() { 
var G__18051__delegate = function (args){
return cljs.core.apply.call(null,automata.core.setup,args);
};
var G__18051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18052__i = 0, G__18052__a = new Array(arguments.length -  0);
while (G__18052__i < G__18052__a.length) {G__18052__a[G__18052__i] = arguments[G__18052__i + 0]; ++G__18052__i;}
  args = new cljs.core.IndexedSeq(G__18052__a,0);
} 
return G__18051__delegate.call(this,args);};
G__18051.cljs$lang$maxFixedArity = 0;
G__18051.cljs$lang$applyTo = (function (arglist__18053){
var args = cljs.core.seq(arglist__18053);
return G__18051__delegate(args);
});
G__18051.cljs$core$IFn$_invoke$arity$variadic = G__18051__delegate;
return G__18051;
})()
:automata.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,automata.core.draw_state))?(function() { 
var G__18054__delegate = function (args){
return cljs.core.apply.call(null,automata.core.draw_state,args);
};
var G__18054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18055__i = 0, G__18055__a = new Array(arguments.length -  0);
while (G__18055__i < G__18055__a.length) {G__18055__a[G__18055__i] = arguments[G__18055__i + 0]; ++G__18055__i;}
  args = new cljs.core.IndexedSeq(G__18055__a,0);
} 
return G__18054__delegate.call(this,args);};
G__18054.cljs$lang$maxFixedArity = 0;
G__18054.cljs$lang$applyTo = (function (arglist__18056){
var args = cljs.core.seq(arglist__18056);
return G__18054__delegate(args);
});
G__18054.cljs$core$IFn$_invoke$arity$variadic = G__18054__delegate;
return G__18054;
})()
:automata.core.draw_state));
});
goog.exportSymbol('automata.core.automata', automata.core.automata);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17561__17562__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__17561__17562__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),automata.core.automata,new cljs.core.Keyword(null,"host-id","host-id",742376279),"automata"], null));
}

//# sourceMappingURL=core.js.map