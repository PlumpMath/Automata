// Compiled by ClojureScript 1.7.48 {}
goog.provide('automata.rules');
goog.require('cljs.core');
automata.rules.subject = (function automata$rules$subject(hood){
return cljs.core.nth.call(null,cljs.core.nth.call(null,hood,(1)),(1));
});
automata.rules.hood_pop = (function automata$rules$hood_pop(hood){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.flatten.call(null,hood)) - automata.rules.subject.call(null,hood));
});
automata.rules.rule_under_pop = (function automata$rules$rule_under_pop(hood){
var pop = automata.rules.hood_pop.call(null,hood);
if(cljs.core._EQ_.call(null,(1),pop)){
return false;
} else {
if(cljs.core._EQ_.call(null,(0),pop)){
return false;
} else {
return true;

}
}
});
automata.rules.rule_next_gen = (function automata$rules$rule_next_gen(hood){
var pop = automata.rules.hood_pop.call(null,hood);
var sub = automata.rules.subject.call(null,hood);
if(cljs.core.truth_((function (){var and__16428__auto__ = sub;
if(cljs.core.truth_(and__16428__auto__)){
return cljs.core._EQ_.call(null,(2),pop);
} else {
return and__16428__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__16428__auto__ = sub;
if(cljs.core.truth_(and__16428__auto__)){
return cljs.core._EQ_.call(null,(3),pop);
} else {
return and__16428__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
automata.rules.rule_over_pop = (function automata$rules$rule_over_pop(hood){
var pop = automata.rules.hood_pop.call(null,hood);
var sub = automata.rules.subject.call(null,hood);
if(cljs.core.truth_((function (){var and__16428__auto__ = sub;
if(cljs.core.truth_(and__16428__auto__)){
return (pop > (3));
} else {
return and__16428__auto__;
}
})())){
return false;
} else {
return true;

}
});
automata.rules.rule_repro = (function automata$rules$rule_repro(hood){
var pop = automata.rules.hood_pop.call(null,hood);
var sub = automata.rules.subject.call(null,hood);
if((cljs.core.not.call(null,sub)) && (cljs.core._EQ_.call(null,pop,(3)))){
return true;
} else {
if(cljs.core.truth_(sub)){
return true;
} else {
return false;

}
}
});
automata.rules.rules = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [automata.rules.rule_under_pop,automata.rules.rule_next_gen,automata.rules.rule_over_pop,automata.rules.rule_repro], null);

//# sourceMappingURL=rules.js.map