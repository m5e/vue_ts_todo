(function(t){function e(e){for(var o,u,c=e[0],i=e[1],s=e[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0f77a0a6"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="vue_ts_todo/ /",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"37cd":function(t,e,n){t.exports=n.p+"img/todo.b723b329.png"},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"8cd7":function(t,e,n){},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("37cd")}}),o("Todo",{attrs:{msg:"TODO LIST"}})],1)},a=[],u=n("d4ec"),c=n("262e"),i=n("2caf"),s=n("9ab4"),l=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[n("input",{staticClass:"newTask",attrs:{type:"text"}}),n("button",{attrs:{type:"submit"}},[t._v("ADD")])]),t._l(t.todoList,(function(e,o){return n("ul",{key:o},[n("li",{directives:[{name:"show",rawName:"v-show",value:""!==e.value,expression:"task.value !== ''"}]},[n("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.refreshCheckStatus(e)}}}),t._v(" "+t._s(e.value)+" "),n("button",{on:{click:function(n){return t.removeTask(e.id)}}},[t._v("DELETE")])])])}))],2)},d=[],p=(n("7db0"),n("a434"),n("a9e3"),n("bee2")),v=function(){var t=function(t){Object(c["a"])(n,t);var e=Object(i["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.newTask="",t.todoList=[{id:0,value:""}],t}return Object(p["a"])(n,[{key:"addTask",value:function(){var t=this.$el.getElementsByClassName("newTask")[0],e=this.todoList.find((function(t){return 0===t.id}));1===this.todoList.length&&""===(null===e||void 0===e?void 0:e.value)?e&&(e.value="".concat(t.value)):this.todoList.push({id:Number(this.todoList.length),value:t.value}),t.value=""}},{key:"removeTask",value:function(t){for(var e=this.todoList.length-1;e>=0;e--)this.todoList[e].id===t&&this.todoList.splice(e,1)}},{key:"refreshCheckStatus",value:function(t){var e=t.target;if(e){var n=e.parentElement;n&&n.classList.toggle("chacked-li")}}}]),n}(l["c"]);return Object(s["a"])([Object(l["b"])()],t.prototype,"msg",void 0),t=Object(s["a"])([l["a"]],t),t}(),h=v,b=h,m=(n("ec43"),n("2877")),g=Object(m["a"])(b,f,d,!1,null,"0e9843f8",null),y=g.exports,O=function(){var t=function(t){Object(c["a"])(n,t);var e=Object(i["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);return t=Object(s["a"])([Object(l["a"])({components:{Todo:y}})],t),t}(),j=O,_=j,k=(n("5c0b"),Object(m["a"])(_,r,a,!1,null,null,null)),w=k.exports,T=(n("d3b7"),n("8c4f")),L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("37cd")}}),o("Todo",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},x=[],E={name:"Home",components:{Todo:y}},P=E,S=Object(m["a"])(P,L,x,!1,null,null,null),C=S.exports;o["a"].use(T["a"]);var D=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new T["a"]({mode:"history",base:"vue_ts_todo/ /",routes:D}),A=$,M=n("2f62");o["a"].use(M["a"]);var N=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:A,store:N,render:function(t){return t(w)}}).$mount("#app")},ec43:function(t,e,n){"use strict";var o=n("8cd7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.99e3d409.js.map