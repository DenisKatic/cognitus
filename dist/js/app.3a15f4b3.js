(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({home:"home"}[t]||t)+"."+{"chunk-2d22d746":"e13fbb89","chunk-56cf2cfd":"03a039ec","chunk-48dce2a1":"c90e0d8a","chunk-48dd7952":"c6f022fb","chunk-48df4aad":"993fc635","chunk-48dfa47d":"e000f1d3","chunk-48f2cd90":"a09d3238",home:"d947c561"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={home:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({home:"home"}[t]||t)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-56cf2cfd":"31d6cfe0","chunk-48dce2a1":"31d6cfe0","chunk-48dd7952":"31d6cfe0","chunk-48df4aad":"31d6cfe0","chunk-48dfa47d":"31d6cfe0","chunk-48f2cd90":"31d6cfe0",home:"eb256edc"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("8a23"),a=n.n(r);a.a},3675:function(t,e,n){t.exports=n.p+"img/spar-logo.339e74b6.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticStyle:{"background-color":"white"}},[r("v-content",{staticClass:"background_image"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticStyle:{height:"100px"},attrs:{xs12:"","text-center":"","text-xs-center":"","justify-center":"","fill-height":"","align-center":""}},[r("div",{staticClass:"header_div"},[r("span",{staticClass:"header_span"},[t._v(" Welcome to Cognitus ")])])]),r("v-flex",{attrs:{xs12:""}},[r("Menu")],1),r("v-flex",{staticStyle:{background:"white","padding-bottom":"20px"},attrs:{xs12:""}},[r("router-view",{staticStyle:{"min-height":"800px"}})],1),r("v-flex",{staticStyle:{"margin-top":"20px"},attrs:{xs12:""}}),r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{wrap:"","text-center":"","text-xs-center":"","justify-center":"","fill-height":"","align-center":""}},[r("v-flex",{attrs:{xs1:""}}),r("v-flex",{attrs:{xs2:""}},[r("img",{attrs:{src:n("8d99"),height:"50px"}})]),r("v-flex",{attrs:{xs2:""}},[r("img",{attrs:{src:n("3675"),height:"50px"}})]),r("v-flex",{attrs:{xs2:""}},[r("img",{attrs:{src:n("9eb6"),height:"50px"}})]),r("v-flex",{attrs:{xs2:""}},[r("img",{attrs:{src:n("f12a"),height:"50px"}})]),r("v-flex",{attrs:{xs2:""}},[r("img",{attrs:{src:n("64df"),height:"50px"}})]),r("v-flex",{attrs:{xs1:""}})],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"margin-top":"20px"},attrs:{"grid-list-md":"","justify-center":"","fill-height":"","align-center":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"margin-left":"50px"},attrs:{xs12:""}},[n("v-card",{staticStyle:{background:"none"},attrs:{flat:"",height:"38px"}},[n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_home}},r),[t._v(" Home ")])]}}])}),n("v-menu",{attrs:{top:"","offset-y":t.offset},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""}},r),[t._v(" Topics ")])]}}])},[n("v-list",t._l(t.topics,(function(e,r){return n("v-list-item",{key:r,on:{click:function(t){return e.topic_func()}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_about}},r),[t._v(" About ")])]}}])})],1)],1)],1)],1)},c=[],u={data:function(){return{help_question:!1,interval_function:void 0,offset:!0,topics:[{title:"Step 1: Industry",topic_func:this.open_industry},{title:"Step 2: Data collection",topic_func:this.open_data_collection},{title:"Step 3: AI",topic_func:this.open_ai},{title:"Step 4: Maintenance",topic_func:this.open_maintenance},{title:"Step 5: Benefits",topic_func:this.open_benefits}]}},mounted:function(){},methods:{open_home:function(){this.$router.push({name:"home"})},open_industry:function(){this.$router.push({name:"industry"})},open_data_collection:function(){this.$router.push({name:"data_collection"})},open_ai:function(){this.$router.push({name:"ai"})},open_maintenance:function(){this.$router.push({name:"maintenance"})},open_benefits:function(){this.$router.push({name:"benefits"})},open_about:function(){this.$router.push({name:"about"})},help_interval:function(){this.help_question=!this.help_question}}},s=u,l=n("2877"),f=n("6544"),d=n.n(f),p=n("8336"),h=n("b0af"),m=n("a523"),A=n("0e8f"),v=n("a722"),b=n("8860"),g=n("da13"),y=n("5d23"),x=n("e449"),k=Object(l["a"])(s,i,c,!1,null,"b0ec5282",null),O=k.exports;d()(k,{VBtn:p["a"],VCard:h["a"],VContainer:m["a"],VFlex:A["a"],VLayout:v["a"],VList:b["a"],VListItem:g["a"],VListItemTitle:y["a"],VMenu:x["a"]});var S={name:"App",components:{Menu:O},data:function(){return{}}},E=S,w=(n("034f"),n("7496")),j=n("a75b"),V=Object(l["a"])(E,a,o,!1,null,null,null),I=V.exports;d()(V,{VApp:w["a"],VContent:j["a"],VFlex:A["a"],VLayout:v["a"]});var z=n("f309");r["a"].use(z["a"]);var L=new z["a"]({}),P=(n("d3b7"),n("8c4f"));r["a"].use(P["a"]);var Q=new P["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("home")]).then(n.bind(null,"bb51"))}},{path:"/industry",name:"industry",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("chunk-48df4aad")]).then(n.bind(null,"694a"))}},{path:"/data_collection",name:"data_collection",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("chunk-48dfa47d")]).then(n.bind(null,"7238"))}},{path:"/AI",name:"ai",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("chunk-48dd7952")]).then(n.bind(null,"295c"))}},{path:"/maintenance",name:"maintenance",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("chunk-48f2cd90")]).then(n.bind(null,"a5ed"))}},{path:"/benefits",name:"benefits",component:function(){return Promise.all([n.e("chunk-56cf2cfd"),n.e("chunk-48dce2a1")]).then(n.bind(null,"1027"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:Q,vuetify:L,render:function(t){return t(I)}}).$mount("#app")},"64df":function(t,e){t.exports="data:image/jpeg;base64,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"},"8a23":function(t,e,n){},"8d99":function(t,e,n){t.exports=n.p+"img/swarovski.07620ce6.png"},"9eb6":function(t,e,n){t.exports=n.p+"img/lm-logo-small-2.3fee56c4.png"},f12a:function(t,e,n){t.exports=n.p+"img/fraunhofer.14db2748.png"}});
//# sourceMappingURL=app.3a15f4b3.js.map