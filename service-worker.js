if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>i(e,n),r={module:{uri:n},exports:c,require:o};s[n]=Promise.all(l.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-070b8b00"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/blog/77b9371309e40923cc9d.png",revision:null},{url:"/blog/index.html",revision:"0ee5b56723f5b3917404f4c5aff7331e"},{url:"/blog/static/css/411.f81b15f6.chunk.css",revision:null},{url:"/blog/static/css/main.db549073.css",revision:null},{url:"/blog/static/js/411.3cdcee75.chunk.js",revision:null},{url:"/blog/static/js/411.3cdcee75.chunk.js.LICENSE.txt",revision:"f7b599e3f88bf94d2af5d3f60873a311"},{url:"/blog/static/js/444.6c0c1211.js",revision:null},{url:"/blog/static/js/444.6c0c1211.js.LICENSE.txt",revision:"9516fe546c5b070de606865ce4ae194b"},{url:"/blog/static/js/572.ff5e3c6e.chunk.js",revision:null},{url:"/blog/static/js/707.34123336.chunk.js",revision:null},{url:"/blog/static/js/707.34123336.chunk.js.LICENSE.txt",revision:"e81688a9cf3aa8a7481b976f81916512"},{url:"/blog/static/js/main.9aba0a15.js",revision:null},{url:"/blog/static/js/runtime~main.5fb6f3d9.js",revision:null},{url:"/blog/static/media/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74f.bin",revision:"aed5664e42105e46cf2a61b59786988d"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/blog/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
