"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[496],{1496:(e,n,t)=>{t.r(n),t.d(n,{getCLS:()=>S,getFCP:()=>w,getFID:()=>D,getINP:()=>J,getLCP:()=>Q,getTTFB:()=>V,onCLS:()=>S,onFCP:()=>w,onFID:()=>D,onINP:()=>J,onLCP:()=>Q,onTTFB:()=>V});var i,r,a,o,c,u=-1,f=function(e){addEventListener("pageshow",(function(n){n.persisted&&(u=n.timeStamp,e(n))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=s();return e&&e.activationStart||0},l=function(e,n){var t=s(),i="navigate";return u>=0?i="back-forward-cache":t&&(i=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},p=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},v=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},m=function(e,n,t,i){var r,a;return function(o){n.value>=0&&(o||i)&&((a=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},h=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},g=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(e){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===e.type?e.timeStamp:0,L())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},L=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},b=function(){return y<0&&(y=T(),C(),f((function(){setTimeout((function(){y=T(),C()}),0)}))),{get firstHiddenTime(){return y}}},w=function(e,n){n=n||{},g((function(){var t,i=[1800,3e3],r=b(),a=l("FCP"),o=p("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(a.value=Math.max(e.startTime-d(),0),a.entries.push(e),t(!0)))}))}));o&&(t=m(e,a,i,n.reportAllChanges),f((function(r){a=l("FCP"),t=m(e,a,i,n.reportAllChanges),h((function(){a.value=performance.now()-r.timeStamp,t(!0)}))})))}))},S=function(e,n){n=n||{},g((function(){var t,i=[.1,.25],r=l("CLS"),a=-1,o=0,c=[],u=function(n){a>-1&&e(n)},s=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=c[0],i=c[c.length-1];o&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(o+=e.value,c.push(e)):(o=e.value,c=[e]),o>r.value&&(r.value=o,r.entries=c,t())}}))},d=p("layout-shift",s);d&&(t=m(u,r,i,n.reportAllChanges),w((function(e){a=e.value,r.value<0&&(r.value=0,t())})),v((function(){s(d.takeRecords()),t(!0)})),f((function(){o=0,a=-1,r=l("CLS",0),t=m(u,r,i,n.reportAllChanges),h((function(){return t()}))})))}))},I={passive:!0,capture:!0},P=new Date,A=function(e,n){i||(i=n,r=e,a=new Date,M(removeEventListener),F())},F=function(){if(r>=0&&r<a-P){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(n){n(e)})),o=[]}},k=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){A(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,I),removeEventListener("pointercancel",i,I)};addEventListener("pointerup",t,I),addEventListener("pointercancel",i,I)}(n,e):A(n,e)}},M=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,k,I)}))},D=function(e,n){n=n||{},g((function(){var t,a=[100,300],c=b(),u=l("FID"),s=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),t(!0))},d=function(e){e.forEach(s)},h=p("first-input",d);t=m(e,u,a,n.reportAllChanges),h&&v((function(){d(h.takeRecords()),h.disconnect()}),!0),h&&f((function(){var c;u=l("FID"),t=m(e,u,a,n.reportAllChanges),o=[],r=-1,i=null,M(addEventListener),c=s,o.push(c),F()}))}))},B=0,x=1/0,R=0,H=function(e){e.forEach((function(e){e.interactionId&&(x=Math.min(x,e.interactionId),R=Math.max(R,e.interactionId),B=R?(R-x)/7+1:0)}))},N=function(){return c?B:performance.interactionCount||0},O=function(){"interactionCount"in performance||c||(c=p("event",H,{type:"event",buffered:!0,durationThreshold:0}))},_=0,q=function(){return N()-_},j=[],z={},G=function(e){var n=j[j.length-1],t=z[e.interactionId];if(t||j.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};z[i.id]=i,j.push(i)}j.sort((function(e,n){return n.latency-e.latency})),j.splice(10).forEach((function(e){delete z[e.id]}))}},J=function(e,n){n=n||{},g((function(){var t=[200,500];O();var i,r=l("INP"),a=function(e){e.forEach((function(e){e.interactionId&&G(e),"first-input"===e.entryType&&!j.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&G(e)}));var n,t=(n=Math.min(j.length-1,Math.floor(q()/50)),j[n]);t&&t.latency!==r.value&&(r.value=t.latency,r.entries=t.entries,i())},o=p("event",a,{durationThreshold:n.durationThreshold||40});i=m(e,r,t,n.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),v((function(){a(o.takeRecords()),r.value<0&&q()>0&&(r.value=0,r.entries=[]),i(!0)})),f((function(){j=[],_=N(),r=l("INP"),i=m(e,r,t,n.reportAllChanges)})))}))},K={},Q=function(e,n){n=n||{},g((function(){var t,i=[2500,4e3],r=b(),a=l("LCP"),o=function(e){var n=e[e.length-1];if(n){var i=Math.max(n.startTime-d(),0);i<r.firstHiddenTime&&(a.value=i,a.entries=[n],t())}},c=p("largest-contentful-paint",o);if(c){t=m(e,a,i,n.reportAllChanges);var u=function(){K[a.id]||(o(c.takeRecords()),c.disconnect(),K[a.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,u,{once:!0,capture:!0})})),v(u,!0),f((function(r){a=l("LCP"),t=m(e,a,i,n.reportAllChanges),h((function(){a.value=performance.now()-r.timeStamp,K[a.id]=!0,t(!0)}))}))}}))},U=function e(n){document.prerendering?g((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},V=function(e,n){n=n||{};var t=[800,1800],i=l("TTFB"),r=m(e,i,t,n.reportAllChanges);U((function(){var a=s();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;i.value=Math.max(o-d(),0),i.entries=[a],r(!0),f((function(){i=l("TTFB",0),(r=m(e,i,t,n.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.328cb08f.chunk.js.map