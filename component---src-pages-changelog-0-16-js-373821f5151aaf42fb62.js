(self.webpackChunkpurify_website=self.webpackChunkpurify_website||[]).push([[243],{5244:function(e,t,l){"use strict";l.r(t);var n=l(7294),a=l(9),r=l(8902),i=l(5656),o=l(5681),c=a.ZP.h1.withConfig({displayName:"sc-016__Title",componentId:"sc-vg53-0"})(["margin-bottom:0;"]),u=a.ZP.div.withConfig({displayName:"sc-016__Subtitle",componentId:"sc-vg53-1"})(["padding-bottom:30px;"]),s=a.ZP.h2.withConfig({displayName:"sc-016__Topic",componentId:"sc-vg53-2"})(["font-weight:normal;"]);t.default=function(e){return n.createElement(i.Z,{location:e.location},n.createElement(c,null,"Purify v0.16"),n.createElement(u,null,"November 7, 2020"),n.createElement("div",null,"Not sure what purify is? Check out the"," ",n.createElement(r.ZP,{to:"/getting-started"},"Getting Started")," page. Also check out the ",n.createElement(r.ZP,{to:"/faq"},"FAQ")," page!",n.createElement("br",null),n.createElement("br",null),"This is a huge release with a lot of changes and I'm really exited! 0.16 will be the final 0.x version before the official 1.0.0 release, you can think of 0.16 as a Version 1 RC.",n.createElement(s,null,n.createElement("span",{style:{color:"#d22626"}},"Breaking:")," Codec"),n.createElement("ul",null,n.createElement("li",null,"Renamed ",n.createElement(o.HL,null,"GetInterface")," to ",n.createElement(o.HL,null,"GetType"),"."),n.createElement("li",null,"Running ",n.createElement(o.HL,null,"decode")," will not populate a field inside an object it's ",n.createElement(o.HL,null,"undefined"),", instead it will just leave it out.")),n.createElement(s,null,n.createElement("span",{style:{color:"#d22626"}},"Breaking:")," Either and Maybe"),n.createElement("ul",null,n.createElement("li",null,"Removed internal ",n.createElement(o.HL,null,"__value")," property inside both Either and Maybe. It was not supposed to be used anyway so there shouldn't be any breakages."),n.createElement("li",null,"Running ",n.createElement(o.HL,null,"Either#unsafeDecode")," used to throw a generic error if the value inside was Left. That error is still there, but if the value is an instance of ",n.createElement(o.HL,null,"Error"),", it will throw the value instead. This makes debugging and logging easier.")),n.createElement(s,null,n.createElement("span",{style:{color:"#d22626"}},"Breaking:")," EitherAsync and MaybeAsync"),n.createElement("ul",null,n.createElement("li",null,"Removed ",n.createElement(o.HL,null,"liftPromise")," from both EitherAsync and MaybeAsync. With the addition of ",n.createElement(o.HL,null,"PromiseLike")," support this utility is just an alias for the normal constructors, making it redundant."),n.createElement("li",null,"Since ",n.createElement(o.HL,null,"PromiseLike")," is now supported in both modules you should be using the special constructors ",n.createElement(o.HL,null,"liftEither"),","," ",n.createElement(o.HL,null,"liftMaybe")," and ",n.createElement(o.HL,null,"fromPromise")," way less now.",n.createElement("br",null),"Because of that they are now static methods (e.g. to use run"," ",n.createElement(o.HL,null,"EitherAsync.liftEither")," or ",n.createElement(o.HL,null,"MaybeAsync.fromPromise"),")")),n.createElement(s,null,n.createElement("span",{style:{color:"#0a9e1b"}},"Additions:")," EitherAsync and MaybeAsync (there are a lot)"),n.createElement("ul",null,n.createElement("li",null,"Both EitherAsync and MaybeAsync now extend and support the"," ",n.createElement(o.HL,null,"PromiseLike")," interface. This means you can await them and you can interchange *Async and PromiseLike in most utility methods. ",n.createElement("br",null),"This is a huge win for productivity and reducing boilerplate, I hope we get to see cool examples of how this helps people."),n.createElement("li",null,"Both EitherAsync and MaybeAsync are now fantasy-land compatible."),n.createElement("li",null,"Added static methods to EitherAsync - ",n.createElement(o.HL,null,"lefts"),", ",n.createElement(o.HL,null,"rights"),","," ",n.createElement(o.HL,null,"sequence"),", ",n.createElement(o.HL,null,"liftEither"),", ",n.createElement(o.HL,null,"fromPromise"),"."),n.createElement("li",null,"Added instance methods to EitherAsync - ",n.createElement(o.HL,null,"swap"),", ",n.createElement(o.HL,null,"ifLeft"),", ",n.createElement(o.HL,null,"ifRight"),", ",n.createElement(o.HL,null,"bimap"),", ",n.createElement(o.HL,null,"join"),", ",n.createElement(o.HL,null,"ap"),","," ",n.createElement(o.HL,null,"alt"),", ",n.createElement(o.HL,null,"extend"),", ",n.createElement(o.HL,null,"leftOrDefault"),","," ",n.createElement(o.HL,null,"orDefault"),"."),n.createElement("li",null,"Added static methods to MaybeAsync - ",n.createElement(o.HL,null,"catMaybes"),","," ",n.createElement(o.HL,null,"liftMaybe"),", ",n.createElement(o.HL,null,"fromPromise"),"."),n.createElement("li",null,"Added instance methods to EitherAsync - ",n.createElement(o.HL,null,"ifJust"),","," ",n.createElement(o.HL,null,"ifNothing"),", ",n.createElement(o.HL,null,"join"),", ",n.createElement(o.HL,null,"ap"),", ",n.createElement(o.HL,null,"alt"),","," ",n.createElement(o.HL,null,"extend"),", ",n.createElement(o.HL,null,"filter"),", ",n.createElement(o.HL,null,"orDefault"),"."),n.createElement("li",null,"EitherAsync now has a looser type definition for"," ",n.createElement(o.HL,null,"EitherAsync#chain")," as it will merge the two errors together in an union type instead of showing a compiler error if the error types are different.")),n.createElement(s,null,n.createElement("span",{style:{color:"#0a9e1b"}},"Additions:")," Either and Maybe"),n.createElement("ul",null,n.createElement("li",null,"Added static method to Maybe - ",n.createElement(o.HL,null,"isMaybe.")),n.createElement("li",null,"Added static methods to Either - ",n.createElement(o.HL,null,"isEither")," and"," ",n.createElement(o.HL,null,"sequence.")),n.createElement("li",null,"Either now has a looser type definition for ",n.createElement(o.HL,null,"Either#chain")," as it will merge the two errors together in an union type instead of showing a compiler error if the error types are different ."),n.createElement("li",null,"Either now has a runtime tag so that values are easier to debug (previously when you logged an Either you couldn't tell if it's Left or Right).")),n.createElement(s,null,n.createElement("span",{style:{color:"#0a9e1b"}},"Additions:")," Codec"),n.createElement("ul",null,n.createElement("li",null,"Added new codecs and combinators: ",n.createElement(o.HL,null,"nullable"),","," ",n.createElement(o.HL,null,"enumeration"),", ",n.createElement(o.HL,null,"intersect"),"."),n.createElement("li",null,"Added a new property of each codec - ",n.createElement(o.HL,null,"schema"),", it returns a JSON Schema V6 of that codec so that you can reuse validation in non-JavaScript environments (tools, other languages etc.)."),n.createElement("li",null,"Added a new utility type, ",n.createElement(o.HL,null,"FromType"),", that helps with creating codecs based on existing types."),n.createElement("li",null,"Added a new utility function - ",n.createElement(o.HL,null,"parseError"),", that takes an error string generated after running ",n.createElement(o.HL,null,"decode")," on a value and returns a meta object",n.createElement("br",null),"which you can use to create all kinds of stuff - from custom error reporters to recovery mechanisms."),n.createElement("li",null,"If you use the ",n.createElement(o.HL,null,"maybe")," codec combinator inside a"," ",n.createElement(o.HL,null,"Codec.interface")," it will handle optional properties just like"," ",n.createElement(o.HL,null,"optional"),".")),n.createElement(s,null,n.createElement("span",{style:{color:"#0a9e1b"}},"Additions:")," Other"),n.createElement("ul",null,n.createElement("li",null,"Added two new methods to Tuple - ",n.createElement(o.HL,null,"some")," and ",n.createElement(o.HL,null,"every")," that act like the Array methods of the same name."),n.createElement("li",null,"Added a new utility function to NonEmptyList - ",n.createElement(o.HL,null,"tail"),".")),n.createElement(s,null,n.createElement("span",{style:{color:"#efb022"}},"Bugfixes:")," Codec"),n.createElement("ul",null,n.createElement("li",null,"Fixed a critical bug in ",n.createElement(o.HL,null,"oneOf")," that caused encoding to fail."))))}}}]);
//# sourceMappingURL=component---src-pages-changelog-0-16-js-373821f5151aaf42fb62.js.map