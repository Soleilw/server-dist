(function(e){function n(n){for(var c,o,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},r={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-048aca84":"c45226a6","chunk-07b1d5c4":"3129d92c","chunk-1638edbc":"b50dadba","chunk-1ea9468e":"f4467841","chunk-23780558":"289717a5","chunk-13380c66":"f447866d","chunk-2aa7d882":"0bf1f7ce","chunk-34aac225":"131055d3","chunk-364928c2":"88c587db","chunk-42c0dd02":"57039cde","chunk-46dff61a":"5c19c4fc","chunk-52c2aa3a":"52ed063d","chunk-52e350f6":"5b9f4631","chunk-58203baa":"4997bb1c","chunk-6382e0c6":"57e56dd4","chunk-65f38a0f":"90091f4a","chunk-6f948ee7":"e9547d52","chunk-e2bf3ecc":"0f34dac2","chunk-131b868d":"a2a8ce44","chunk-2c50aebb":"7ba9e09f","chunk-34fe6820":"bd5f8d34","chunk-795fbd8a":"d3e78af8","chunk-f315017e":"e058c2eb"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-23780558":1,"chunk-2aa7d882":1,"chunk-364928c2":1,"chunk-42c0dd02":1,"chunk-46dff61a":1,"chunk-58203baa":1,"chunk-65f38a0f":1,"chunk-6f948ee7":1,"chunk-131b868d":1,"chunk-2c50aebb":1,"chunk-34fe6820":1,"chunk-795fbd8a":1,"chunk-f315017e":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-048aca84":"31d6cfe0","chunk-07b1d5c4":"31d6cfe0","chunk-1638edbc":"31d6cfe0","chunk-1ea9468e":"31d6cfe0","chunk-23780558":"59e38391","chunk-13380c66":"31d6cfe0","chunk-2aa7d882":"71ae4ec8","chunk-34aac225":"31d6cfe0","chunk-364928c2":"0d4e8262","chunk-42c0dd02":"dac29695","chunk-46dff61a":"e7cc315b","chunk-52c2aa3a":"31d6cfe0","chunk-52e350f6":"31d6cfe0","chunk-58203baa":"2ff857f1","chunk-6382e0c6":"31d6cfe0","chunk-65f38a0f":"a436b5e9","chunk-6f948ee7":"042de9e9","chunk-e2bf3ecc":"31d6cfe0","chunk-131b868d":"ae6cbabd","chunk-2c50aebb":"21925030","chunk-34fe6820":"6e1835cb","chunk-795fbd8a":"b3790030","chunk-f315017e":"6f4e4083"}[e]+".css",r=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===c||l===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===c||l===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete o[e],h.parentNode.removeChild(h),t(a)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,t[1](d)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){t("db4d"),e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("45fc"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),o=(t("be3b"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.isRouterRefresh?t("router-view"):e._e()],1)}),r=[],a={provide:function(){return{reload:this.reload}},data:function(){return{isRouterRefresh:!0}},methods:{reload:function(){this.isRouterRefresh=!1,this.$nextTick((function(){this.isRouterRefresh=!0}))}}},u=a,i=(t("5c0b"),t("2877")),s=Object(i["a"])(u,o,r,!1,null,null,null),l=s.exports,d=(t("d3b7"),t("8c4f")),h=[{path:"/user",name:"user",component:function(){return t.e("chunk-34aac225").then(t.bind(null,"b843"))},meta:{title:"用户列表",icon:"el-icon-document"}},{path:"/student",name:"student",component:function(){return t.e("chunk-1ea9468e").then(t.bind(null,"ea99"))},meta:{title:"学生管理",icon:"el-icon-user-solid"},children:[{path:"/infomation",name:"infomation",component:function(){return Promise.all([t.e("chunk-e2bf3ecc"),t.e("chunk-131b868d")]).then(t.bind(null,"cfb1"))},meta:{title:"学生列表"}},{path:"/grade",name:"grade",component:function(){return Promise.all([t.e("chunk-e2bf3ecc"),t.e("chunk-795fbd8a")]).then(t.bind(null,"654d"))},meta:{title:"年级管理"}},{path:"/announcement",name:"announcement",component:function(){return t.e("chunk-6382e0c6").then(t.bind(null,"ede2"))},meta:{title:"公告管理"}},{path:"/achievement",name:"achievement",component:function(){return t.e("chunk-048aca84").then(t.bind(null,"7193"))},meta:{title:"成绩管理"}},{path:"/family",name:"family",component:function(){return t.e("chunk-f315017e").then(t.bind(null,"eea5"))},meta:{title:"家长信息"}}]},{path:"/teacher",name:"teacher",component:function(){return t.e("chunk-07b1d5c4").then(t.bind(null,"8893"))},meta:{title:"教职工管理",icon:"el-icon-user"}},{path:"/school",name:"school",component:function(){return t.e("chunk-1638edbc").then(t.bind(null,"6fc1"))},meta:{title:"学校管理",icon:"el-icon-school"}},{path:"/picture",name:"picture",component:function(){return t.e("chunk-52e350f6").then(t.bind(null,"0c7e"))},meta:{title:"图文管理",icon:"el-icon-picture-outline"},children:[{path:"/banner",name:"banner",component:function(){return Promise.all([t.e("chunk-e2bf3ecc"),t.e("chunk-34fe6820")]).then(t.bind(null,"60b0"))},meta:{title:"轮播图管理"}},{path:"/message",name:"message",component:function(){return Promise.all([t.e("chunk-e2bf3ecc"),t.e("chunk-23780558"),t.e("chunk-2c50aebb")]).then(t.bind(null,"9953"))},meta:{title:"资讯管理"}},{path:"/document",name:"document",component:function(){return Promise.all([t.e("chunk-23780558"),t.e("chunk-13380c66")]).then(t.bind(null,"58d5"))},meta:{title:"文档管理"}}]},{path:"/buy",name:"buy",component:function(){return t.e("chunk-58203baa").then(t.bind(null,"8649"))},meta:{title:"购买服务管理",icon:"el-icon-bank-card"}},{path:"/total",name:"total",component:function(){return t.e("chunk-52c2aa3a").then(t.bind(null,"3bf9"))},meta:{title:"统计",icon:"el-icon-pie-chart"},children:[{path:"/studentsTotal",name:"studentsTotal",component:function(){return t.e("chunk-2aa7d882").then(t.bind(null,"005c"))},meta:{title:"学生总统计"}}]},{path:"/permission",name:"permission",component:function(){return t.e("chunk-42c0dd02").then(t.bind(null,"b9e5"))},meta:{title:"权限管理",icon:"el-icon-setting"}}],f=h;c["default"].use(d["a"]);var m=new d["a"]({mode:"history",routes:[{path:"/login",name:"login",component:function(){return t.e("chunk-65f38a0f").then(t.bind(null,"dd7b"))},meta:{title:"登录"}}]}),p=[{path:"",component:function(){return t.e("chunk-46dff61a").then(t.bind(null,"e0f0"))},name:"container",redirect:"desktop",meta:{requiresAuth:!0,title:"首页"},children:[{path:"/desktop",component:function(){return t.e("chunk-6f948ee7").then(t.bind(null,"07c3"))},name:"desktop",meta:{title:"首页",icon:"el-icon-s-home"}}]},{path:"*",component:function(){return t.e("chunk-364928c2").then(t.bind(null,"8cdb"))}}],b=t("2f62"),k=(t("99af"),t("7db0"),t("2909")),g=(t("96cf"),t("1da1")),v=(t("4de4"),t("4160"),t("caad"),t("d81d"),t("b0c0"),t("2532"),t("159b"),t("5530"));function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=n.filter((function(n){return e.includes(n.name)})).map((function(n){return Object(v["a"])(Object(v["a"])({},n),{},{children:n.children?S(e,n.children):null})}));return t}var y=t("7ded"),w={namespaced:!0,state:{permissionList:null,sidebarMenu:[],currentMenu:"",control_list:[],permissions:[]},getters:{},mutations:{SET_PERMISSION:function(e,n){e.permissionList=n},CLEAR_PERMISSION:function(e){e.permissionList=null},SET_MENU:function(e,n){e.sidebarMenu=n},CLEAR_MENU:function(e){e.sidebarMenu=[]},SET_CURRENT_MENU:function(e,n){e.currentMenu=n},SET_CONTROL_LIST:function(e,n){e.control_list=n},SET_NICKNAME:function(e,n){e.nickname=n},SET_PERMISSIONS:function(e,n){e.permissions=n}},actions:{FETCH_PERMISSION:function(e){return Object(g["a"])(regeneratorRuntime.mark((function n(){var t,c,o,r,a,u,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,e.state,c=localStorage.getItem("token"),n.next=4,y["a"].userInfo(c);case 4:o=n.sent,t("SET_PERMISSIONS",o.permissions),r=S(o.permissions,f),a=p.find((function(e){return""===e.path})),u=a.children,t("SET_CONTROL_LIST",[].concat(Object(k["a"])(u),Object(k["a"])(f))),u.push.apply(u,Object(k["a"])(r)),t("SET_MENU",u),i=m.options.routes,m.addRoutes(p),t("SET_PERMISSION",[].concat(Object(k["a"])(i),Object(k["a"])(p)));case 15:case"end":return n.stop()}}),n)})))()}}},E={permission:w},P={collapse:!1,crumbList:[]},T={collapseChage:function(e){e.collapse=!e.collapse},setCrumbList:function(e,n){e.crumbList=n}};c["default"].use(b["a"]);var O=new b["a"].Store({state:P,modules:E,mutations:T}),_=t("5c96"),I=t.n(_),M=(t("0fae"),t("313e")),R=t.n(M);t("73718"),t("5aa7");c["default"].use(I.a),c["default"].prototype.$echarts=R.a,c["default"].use(R.a),c["default"].config.productionTip=!1,m.beforeEach((function(e,n,t){document.title="".concat(e.meta.title," - 图巴诺校园安全系统");var c=localStorage.getItem("token");c?O.state.permission.permissionList?"/login"!==e.path?t():t(n.fullPath):O.dispatch("permission/FETCH_PERMISSION").then((function(){t({path:e.path})})):e.matched.length>0&&!e.matched.some((function(e){return e.meta.requiresAuth}))?t():t({path:"/login"})})),m.afterEach((function(e,n,t){var c=e.matched;O.commit("setCrumbList",c),O.commit("permission/SET_CURRENT_MENU",e.path)})),new c["default"]({router:m,store:O,render:function(e){return e(l)}}).$mount("#app")},"5aa7":function(e,n,t){},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),o=t.n(c);o.a},73718:function(e,n,t){},"7ded":function(e,n,t){"use strict";var c=t("be3b"),o=t("99b1"),r=t.n(o),a={login:function(e){return c["a"].post(r.a.Login,e)},userInfo:function(e){return c["a"].get(r.a.Permissions,{token:e})},logout:function(){return c["a"].get(r.a.Logout)},resetPassword:function(e){return c["a"].post(r.a.ResetPassword,e)}};n["a"]=a},"99b1":function(e,n){var t="https://school.fengniaotuangou.cn",c={Login:t+"/login",Logout:t+"/logout",ResetPassword:t+"/reset/password",Permissions:t+"/permissions",School:t+"/school",Schools:t+"/api/schools",StudentInfo:t+"/student/info",SchoolUser:t+"/schoolUser/infos",Visitors:t+"/visitors",TeacherUser:t+"/teacher/infos",Orders:t+"/orders",Banner:t+"/banner",Banners:t+"/api/banners",Document:t+"/help/doc",Documents:t+"/help/docs",DelDocument:t+"/help/doc",Message:t+"/document",Messages:t+"/documents",MessageType:t+"/document/type",MessageTypes:t+"/document/types",DocumentDel:t+"/document",DelBanner:t+"/banner",DelDocumentType:t+"/document/types",Students:t+"/students",Search:t+"/student",Student:t+"/student",DelStudent:t+"/student",Grade:t+"/grade",Grades:t+"/grades",DelGrade:t+"/grade",Class:t+"/class",Classes:t+"/classes",DelClass:t+"/class",Announcement:t+"/announcement",Device:t+"/device",Devices:t+"/devices",Family:t+"/parents",MasterFamily:t+"/master/parents",DelFamily:t+"/parent",WxUser:t+"/wx/users",BindFamily:t+"/pass/student",StudentFace:t+"/student/face",StudentEditFace:t+"/student/editFace",FamilySearch:t+"/parents",StudentFaceLogs:t+"/student/face/logs",Teacher:t+"/user/infos",Audit:t+"/check/user/info",DelTeacher:t+"/user/info",Buy:t+"/product",Buys:t+"/products",Server:t+"/orders",Order:t+"/order",Statistical:t+"/statistical",Role:t+"/role",Roles:t+"/roles",DelRole:t+"/role",User:t+"/user",Users:t+"/users",DelUser:t+"/user",SchoolProduct:t+"/school/product",SetProduct:t+"/set/product",BanProduct:t+"/forbidden/product",BanProducts:t+"/forbidden/products",UserSearch:t+"/wx/users",JurisdictionSchool:t+"/api/schools",JurisdictionProducts:t+"/school/product",JurisdictionStudent:t+"/school/user/student",StudentsTatal:t+"/student/count",StudentGender:t+"/student/gender",ClassCheckCount:t+"/class/check/count",Statistics:t+"/statistics"};e.exports=c},"9c0c":function(e,n,t){},be3b:function(e,n,t){"use strict";t("d3b7"),t("ac1f"),t("5319");var c=t("bc3a"),o=t.n(c),r=t("5c96"),a=void 0,u=t("4328"),i={},s=o.a.create({timeout:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded"},validateStatus:function(e){var n=this;switch(e){case 400:r["Message"].error("请求出错");break;case 401:return r["Message"].warning({message:"授权失败，请重新登录"}),void setTimeout((function(){localStorage.removeItem("username"),localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("permissions"),window.location.reload(),n.$router.replace("/login")}),1e3);case 403:break;case 404:r["Message"].warning({message:"请求错误,未找到该资源"});break}return e>=200&&e<300}});s.interceptors.request.use((function(e){var n=localStorage.getItem("token");return n&&(e.headers.common["token"]="".concat(n)),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){if(200===e.status)return e.data}),(function(e){return e.response.status&&r["Message"].warning({message:e.response.data.msg}),"need login"===e.response.data.msg&&(r["Message"].warning({message:"请重新登录"}),localStorage.removeItem("username"),localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("permissions"),window.location.reload(),a.$router.replace("/login")),Promise.reject(e)})),i.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,c){s.get(e,{params:n}).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},i.del=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,c){s.delete(e,{params:n}).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},i.post=function(e,n){return new Promise((function(t,c){s.post(e,u.stringify(n)).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},i.put=function(e,n){return new Promise((function(t,c){s.put(e,u.stringify(n)).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},n["a"]=i}});
//# sourceMappingURL=app.b2683947.js.map