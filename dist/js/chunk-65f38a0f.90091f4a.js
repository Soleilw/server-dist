(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65f38a0f"],{"0a73":function(e,o,n){"use strict";var t=n("5e7e"),a=n.n(t);a.a},"5e7e":function(e,o,n){},dd7b:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"login"},[n("div",{staticClass:"title"},[e._v(" 图巴诺校园安全管理后台 ")]),n("div",{staticClass:"form-info"},[n("div",{staticClass:"form-info-item"},[n("el-input",{attrs:{placeholder:"username"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),n("div",{staticClass:"form-info-item"},[n("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.submitForm(o)}},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}})],1),n("div",{staticClass:"form-info-item"},[n("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(o){return e.submitForm("loginForm")}}},[e._v("登录")])],1)])])])},a=[],r=(n("ac1f"),n("5319"),n("7ded")),s={name:"login",data:function(){return{loginForm:{username:"",password:""}}},methods:{submitForm:function(){var e=this;e.loginForm.username&&e.loginForm.password?(r["a"].login(e.loginForm).then((function(o){localStorage.setItem("token",o),localStorage.setItem("username",e.loginForm.username),e.$router.replace("/")})),window.addEventListener("storage",(function(){localStorage.clear(),window.location.replace("/login")}))):e.$message.error("请输入账号/密码")}}},i=s,l=(n("0a73"),n("2877")),c=Object(l["a"])(i,t,a,!1,null,"5b65f8ab",null);o["default"]=c.exports}}]);
//# sourceMappingURL=chunk-65f38a0f.90091f4a.js.map