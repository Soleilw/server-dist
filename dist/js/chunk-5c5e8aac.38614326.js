(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c5e8aac"],{"2bd9":function(e,s,t){"use strict";var o=t("ac3e"),n=t.n(o);n.a},"7ded":function(e,s,t){"use strict";var o=t("be3b"),n=t("99b1"),a=t.n(n),r={login:function(e){return o["a"].post(a.a.Login,e)},logout:function(){return o["a"].get(a.a.Logout)},resetPassword:function(e){return o["a"].post(a.a.ResetPassword,e)}};s["a"]=r},"99b1":function(e,s){var t="https://school.fengniaotuangou.cn",o={Login:t+"/login",Logout:t+"/logout",ResetPassword:t+"/reset/password",School:t+"/school",Schools:t+"/api/schools",Banner:t+"/banner",Banners:t+"/api/banners",Document:t+"/help/doc",Documents:t+"/help/docs",DelDocument:t+"/help/doc",Message:t+"/document",Messages:t+"/documents",MessageType:t+"/document/type",MessageTypes:t+"/document/types",Students:t+"/students",Search:t+"/student",Student:t+"/student",DelStudent:t+"/student",Grade:t+"/grade",Grades:t+"/grades",DelGrade:t+"/grade",Class:t+"/class",Classes:t+"/classes",DelClass:t+"/class",Announcement:t+"/announcement",Device:t+"/device",Devices:t+"/devices",Family:t+"/parents",WxUser:t+"/wx/users",BindFamily:t+"/pass/student",StudentFace:t+"/student/face",FamilySearch:t+"/parents",StudentFaceLogs:t+"/student/face/logs",Teacher:t+"/user/infos",Audit:t+"/check/user/info",DelTeacher:t+"/user/info",Buy:t+"/product",Buys:t+"/products",Order:t+"/order",Statistical:t+"/statistical",Role:t+"/role",Roles:t+"/roles",DelRole:t+"/role",User:t+"/user",Users:t+"/users",DelUser:t+"/user"};e.exports=o},ac3e:function(e,s,t){},dd7b:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"login"},[t("div",{staticClass:"title"},[e._v(" 图巴诺校园安全管理后台(小学版) ")]),t("div",{staticClass:"form-info"},[t("div",{staticClass:"form-info-item"},[t("el-input",{attrs:{placeholder:"username"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),t("div",{staticClass:"form-info-item"},[t("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submitForm(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}})],1),t("div",{staticClass:"form-info-item"},[t("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(s){return e.submitForm("loginForm")}}},[e._v("登录")])],1)])])])},n=[],a=(t("ac1f"),t("5319"),t("7ded")),r={name:"login",data:function(){return{loginForm:{username:"",password:""}}},methods:{submitForm:function(){var e=this;e.loginForm.username&&e.loginForm.password?a["a"].login(e.loginForm).then((function(s){localStorage.setItem("token",s.token),localStorage.setItem("role",s.role),localStorage.setItem("username",e.loginForm.username),localStorage.setItem("permissions",s.permissions),e.$router.replace("/")})):e.$message.error("请输入账号/密码")}}},i=r,l=(t("2bd9"),t("2877")),c=Object(l["a"])(i,o,n,!1,null,"4a232c69",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5c5e8aac.38614326.js.map