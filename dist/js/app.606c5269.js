(function(e){function n(n){for(var c,r,o=n[0],i=n[1],h=n[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&l.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(l.length)l.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06c24029":"c269302d","chunk-10ed1c72":"12ecf63c","chunk-1428bc59":"a1c4c82e","chunk-2ab654f2":"c5555266","chunk-2d20866d":"57844327","chunk-2d217319":"37b8a075","chunk-4ea01cb6":"29be19fb","chunk-521371cf":"57cc923c","chunk-53f7420e":"e16684b0","chunk-6090fced":"fb6f296b","chunk-722a59c8":"ef32ddd9","chunk-07dc8b82":"a1108a96","chunk-69b55d7d":"adda2ef0","chunk-8b2e61e6":"c09a145d","chunk-cb583cae":"2cc3583c","chunk-689450fc":"7dda4a61","chunk-79d65854":"1cdf17e4","chunk-997ee02c":"ae55cde4","chunk-c14c09c4":"fb2e9efc","chunk-c1ff8eda":"604c50b2","chunk-5fbec9f0":"4091364b","chunk-d732e38e":"38824635","chunk-e7de5212":"f0b39f68"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-10ed1c72":1,"chunk-1428bc59":1,"chunk-521371cf":1,"chunk-07dc8b82":1,"chunk-8b2e61e6":1,"chunk-cb583cae":1,"chunk-79d65854":1,"chunk-c14c09c4":1,"chunk-e7de5212":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-06c24029":"31d6cfe0","chunk-10ed1c72":"f205927a","chunk-1428bc59":"82f42dad","chunk-2ab654f2":"31d6cfe0","chunk-2d20866d":"31d6cfe0","chunk-2d217319":"31d6cfe0","chunk-4ea01cb6":"31d6cfe0","chunk-521371cf":"ba2571b1","chunk-53f7420e":"31d6cfe0","chunk-6090fced":"31d6cfe0","chunk-722a59c8":"31d6cfe0","chunk-07dc8b82":"943e94ad","chunk-69b55d7d":"31d6cfe0","chunk-8b2e61e6":"4916e544","chunk-cb583cae":"59e38391","chunk-689450fc":"31d6cfe0","chunk-79d65854":"b7e2f271","chunk-997ee02c":"31d6cfe0","chunk-c14c09c4":"a94bec3b","chunk-c1ff8eda":"31d6cfe0","chunk-5fbec9f0":"31d6cfe0","chunk-d732e38e":"31d6cfe0","chunk-e7de5212":"b8bd6df7"}[e]+".css",u=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===u))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){h=l[o],d=h.getAttribute("data-href");if(d===c||d===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;h=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,t[1](l)}u[e]=void 0}};var f=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=n,h=h.slice();for(var l=0;l<h.length;l++)n(h[l]);var f=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("c975"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=(t("be3b"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),u=[],a=(t("5c0b"),t("2877")),o={},i=Object(a["a"])(o,r,u,!1,null,null,null),h=i.exports,d=(t("d3b7"),t("2909")),l=t("8c4f"),f=[{path:"/user",component:function(){return t.e("chunk-2d20866d").then(t.bind(null,"a547"))},meta:{title:"用户列表"}},{path:"/studentlist",component:function(){return Promise.all([t.e("chunk-722a59c8"),t.e("chunk-07dc8b82")]).then(t.bind(null,"d932"))},meta:{title:"学生列表"}},{path:"/gradems",component:function(){return t.e("chunk-d732e38e").then(t.bind(null,"f371"))},meta:{title:"年级管理"}},{path:"/classms",component:function(){return t.e("chunk-06c24029").then(t.bind(null,"f184"))},meta:{title:"班别管理"}},{path:"/studentrecord",component:function(){return t.e("chunk-79d65854").then(t.bind(null,"8887"))},meta:{title:"学生录入信息"}},{path:"/announcement",component:function(){return t.e("chunk-53f7420e").then(t.bind(null,"ede2"))},meta:{title:"公告管理"}},{path:"/achievementinto",component:function(){return t.e("chunk-c1ff8eda").then(t.bind(null,"e428"))},meta:{title:"导入成绩"}},{path:"/achievementrecord",component:function(){return t.e("chunk-4ea01cb6").then(t.bind(null,"9b01"))},meta:{title:"导入记录"}},{path:"/devicems",component:function(){return t.e("chunk-2d217319").then(t.bind(null,"c64d"))},meta:{title:"设备管理"}},{path:"/devicerecord",component:function(){return t.e("chunk-6090fced").then(t.bind(null,"e377"))},meta:{title:"设备信息记录"}},{path:"/family",component:function(){return t.e("chunk-e7de5212").then(t.bind(null,"3102"))},meta:{title:"家长信息"}},{path:"/teacher",component:function(){return t.e("chunk-997ee02c").then(t.bind(null,"491b"))},meta:{title:"教职工管理"}},{path:"/school",component:function(){return t.e("chunk-2ab654f2").then(t.bind(null,"1320"))},meta:{title:"学校管理"}},{path:"/banner",component:function(){return Promise.all([t.e("chunk-722a59c8"),t.e("chunk-8b2e61e6")]).then(t.bind(null,"774c"))},meta:{title:"轮播图管理"}},{path:"/messagems",component:function(){return Promise.all([t.e("chunk-722a59c8"),t.e("chunk-cb583cae"),t.e("chunk-689450fc")]).then(t.bind(null,"3495"))},meta:{title:"资讯管理"}},{path:"/messagetype",component:function(){return Promise.all([t.e("chunk-722a59c8"),t.e("chunk-69b55d7d")]).then(t.bind(null,"eb65"))},meta:{title:"资讯类型"}},{path:"/document",component:function(){return Promise.all([t.e("chunk-cb583cae"),t.e("chunk-5fbec9f0")]).then(t.bind(null,"62b6"))},meta:{title:"文档管理"}},{path:"/permission",component:function(){return t.e("chunk-c14c09c4").then(t.bind(null,"b9e5"))},meta:{title:"角色管理"}},{path:"/permissionuser",component:function(){return t.e("chunk-1428bc59").then(t.bind(null,"b5d7"))},meta:{title:"权限用户管理"}}],s=f;c["default"].use(l["a"]);var p=[{path:"/",redirect:"/teacher"},{path:"/",component:function(){return t.e("chunk-521371cf").then(t.bind(null,"57da"))},meta:{title:"自述文件"},children:Object(d["a"])(s)},{path:"/login",component:function(){return t.e("chunk-10ed1c72").then(t.bind(null,"dd7b"))},meta:{title:"登录"}}],m=new l["a"]({mode:"history",base:"/",routes:p}),b=m,k=t("2f62");c["default"].use(k["a"]);var g=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=t("5c96"),y=t.n(v);t("0fae"),t("7371"),t("5aa7");c["default"].use(y.a),c["default"].config.productionTip=!1;var w=["/login"];b.beforeEach((function(e,n,t){document.title="".concat(e.meta.title," - 图巴诺校园安全系统");var c=localStorage.getItem("token");-1!==w.indexOf(e.path)&&t(),c||"/login"===e.path?c&&t():t({path:"/login"})})),new c["default"]({router:b,store:g,render:function(e){return e(h)}}).$mount("#app")},"5aa7":function(e,n,t){},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},7371:function(e,n,t){},"9c0c":function(e,n,t){},be3b:function(e,n,t){"use strict";t("d3b7");var c=t("bc3a"),r=t.n(c),u=t("5c96"),a=t("4328"),o={},i=r.a.create({timeout:5e3,baseURL:"https://school.fengniaotuangou.cn",headers:{"Content-Type":"application/x-www-form-urlencoded"},validateStatus:function(e){switch(e){case 400:u["Message"].error("请求出错");break;case 401:return u["Message"].warning({message:"授权失败，请重新登录"}),void setTimeout((function(){localStorage.removeItem("role"),localStorage.removeItem("token")}),1e3);case 403:u["Message"].warning({message:"拒绝访问"});break;case 404:u["Message"].warning({message:"请求错误,未找到该资源"});break;case 500:u["Message"].warning({message:"请重新登录"});break}return e>=200&&e<300}});i.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.common["token"]="".concat(n)),e}),(function(e){return Promise.reject(error)})),i.interceptors.response.use((function(e){if(200===e.status)return e.data}),(function(e){return Promise.reject(e)})),o.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,c){i.get(e,{params:n}).then((function(e){t(e.data)}))})).catch((function(e){reject(e)}))},o.post=function(e,n){return new Promise((function(t,c){i.post(e,a.stringify(n)).then((function(e){t(e.data)}))})).catch((function(e){reject(e)}))},n["a"]=o}});
//# sourceMappingURL=app.606c5269.js.map