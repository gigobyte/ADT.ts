!function(){"use strict";var e,t,n,r,o,c={},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return c[e](n,n.exports,s),n.exports}s.m=c,e=[],s.O=function(t,n,r,o){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(a=!1,o<c&&(c=o));a&&(e.splice(f--,1),t=r())}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return{34:"component---src-pages-utils-list-js",91:"component---src-pages-getting-started-js",138:"component---src-pages-adts-either-js",243:"component---src-pages-changelog-0-16-js",329:"component---src-pages-faq-js",344:"component---src-pages-adts-tuple-js",351:"commons",364:"component---src-pages-changelog-js",531:"component---src-pages-adts-maybe-async-js",532:"styles",678:"component---src-pages-index-js",699:"component---src-pages-adts-non-empty-list-js",730:"component---src-pages-changelog-0-15-js",767:"component---src-pages-changelog-0-12-js",769:"component---src-pages-adts-either-async-js",797:"component---src-pages-utils-function-js",856:"component---src-pages-utils-codec-js",904:"component---src-pages-changelog-0-13-js",923:"component---src-pages-adts-maybe-js",935:"component---src-pages-guides-maybeasync-eitherasync-for-haskellers-js",950:"component---src-pages-changelog-0-14-js",970:"component---src-pages-changelog-0-11-js"}[e]+"-"+{34:"ed59a911e756fb544361",91:"be8145e76e2c377296af",138:"626397e3af51858ac568",243:"373821f5151aaf42fb62",329:"b33c1c1d623547a58ffd",344:"b5b5721f7e9e0e2face5",351:"e3f638bd5e6f0784389f",364:"7f69c7c0f42a5a7b7e42",531:"f394ab72842545a3681f",532:"d258485951191aa11723",678:"e7fceda65600ec6116d5",699:"3db8a48a9cd3d51d768d",730:"56c207903139e789cd34",767:"c7afbead9f46595c4dce",769:"fa8204061e997662d2e5",797:"ae1c4aa5ac8def78e108",856:"960bc7f510437f3f1b66",904:"c3f8da7defbe241ced7a",923:"52fa6a921b0d81ad3312",935:"d1e927656d58a983c188",950:"b0378e37e2c2a0deecbc",970:"a14cb860f459ff1920fb"}[e]+".js"},s.miniCssF=function(e){return"styles.ab0d47a6a3726a63a4e5.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="purify-website:",s.l=function(e,r,o,c){if(t[e])t[e].push(r);else{var a,i;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var d=f[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var l=function(n,r){a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),i&&document.head.appendChild(a)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/purify/",r=function(e){return new Promise((function(t,n){var r=s.miniCssF(e),o=s.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var a;if((o=(a=c[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var a=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=s,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},s.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=s.p+s.u(t),a=new Error;s.l(c,(function(n){if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],i=n[2],f=0;for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(i)var u=i(s);for(t&&t(n);f<c.length;f++)o=c[f],s.o(e,o)&&e[o]&&e[o][0](),e[c[f]]=0;return s.O(u)},n=self.webpackChunkpurify_website=self.webpackChunkpurify_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-926c63caeafd8248b9fe.js.map