(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72ffdfa8"],{"365c":function(e,t,n){"use strict";n("ac1f");var a=n("be3b"),r=n("99b1"),s=n.n(r),o={students:function(e,t){return a["a"].get(s.a.Students,{page:e,class_id:t})},student:function(e){return a["a"].post(s.a.Student,e)},search:function(e){return a["a"].get(s.a.Students,{number:e})},grade:function(e){return a["a"].post(s.a.Grade,e)},grades:function(e){return a["a"].get(s.a.Grades,{page:e})},delGrade:function(e){return a["a"].del(s.a.DelGrade,{grade_id:e})},_class:function(e){return a["a"].post(s.a.Class,e)},classes:function(e,t){return a["a"].get(s.a.Classes,{page:e,grade_id:t})},classes1:function(e,t){return a["a"].get(s.a.Classes,{grade_id:e,limit:t})},device:function(e){return a["a"].post(s.a.Device,e)},devices:function(e){return a["a"].post(s.a.Devices,{page:e})},family:function(e){return a["a"].get(s.a.Family,{page:e})},announcement:function(e){return a["a"].get(s.a.Announcement,{page:e})},bindFamily:function(e,t){return a["a"].get(s.a.BindFamily,{page:e,limit:t})},updateFace:function(e){return a["a"].post(s.a.UpFace,e)},teacher:function(e,t,n){return a["a"].get(s.a.Teacher,{page:e,state:t,worker:n})},audit:function(e){return a["a"].post(s.a.Audit,e)},schools:function(e,t){return a["a"].get(s.a.Schools,{page:e,limit:t})},school:function(e){return a["a"].post(s.a.School,e)},banners:function(e){return a["a"].get(s.a.Banners,{page:e})},banner:function(e){return a["a"].post(s.a.Banner,e)},message:function(e){return a["a"].post(s.a.Message,e)},messages:function(e){return a["a"].get(s.a.Messages,{page:e})},messageType:function(e){return a["a"].post(s.a.MessageType,e)},messageTypes:function(e){return a["a"].get(s.a.MessageTypes,{page:e})},documents:function(e){return a["a"].get(s.a.Documents,{page:e})},delDocument:function(e){return a["a"].del(s.a.DelDocument,{id:e})},document:function(e){return a["a"].post(s.a.Document,e)},buys:function(e){return a["a"].get(s.a.Buys,{page:e})},buy:function(e){return a["a"].post(s.a.Buy,e)},roles:function(e){return a["a"].get(s.a.Roles,{page:e})},role:function(e){return a["a"].post(s.a.Role,e)},user:function(e){return a["a"].post(s.a.User,e)},users:function(e){return a["a"].get(s.a.Users,{page:e})},resetPassword:function(e){return a["a"].post(s.a.ResetPassword,e)}};t["a"]=o},"54f9":function(e,t,n){"use strict";var a=n("b518"),r=n.n(a);r.a},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,l=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),i=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||i;d&&(l=function(e){var t,n,r,l,d=this,f=i&&d.sticky,p=a.call(d),m=d.source,g=0,h=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,g++),n=new RegExp("^(?:"+m+")",p)),u&&(n=new RegExp("^"+m+"$(?!\\s)",p)),c&&(t=d.lastIndex),r=s.call(f?n:d,h),f?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:t),u&&r&&r.length>1&&o.call(r[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),e.exports=l},"99b1":function(e,t){var n="https://school.fengniaotuangou.cn",a={Login:n+"/login",Logout:n+"/logout",ResetPassword:n+"/reset/password",School:n+"/school",Schools:n+"/api/schools",Banner:n+"/banner",Banners:n+"/api/banners",Document:n+"/help/doc",Documents:n+"/help/docs",DelDocument:n+"/help/doc",Message:n+"/document",Messages:n+"/documents",MessageType:n+"/document/type",MessageTypes:n+"/document/types",Students:n+"/students",Search:n+"/student",Student:n+"/student",Grade:n+"/grade",Grades:n+"/grades",DelGrade:n+"/grade",Class:n+"/class",Classes:n+"/classes",Announcement:n+"/announcement",Device:n+"/device",Devices:n+"/devices",Family:n+"/parents",Teacher:n+"/user/infos",Audit:n+"/check/user/info",Buy:n+"/product",Buys:n+"/products",Order:n+"/order",Statistical:n+"/statistical",BindFamily:n+"/wx/users",UpFace:n+"/pass/student",Role:n+"/role",Roles:n+"/roles",User:n+"/user",Users:n+"/users"};e.exports=a},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b518:function(e,t,n){},cd84:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"btn"},[n("span",[e._v("学校：")]),n("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addBuy}},[e._v("添加购买服务")])],1),n("el-dialog",{attrs:{title:"添加购买服务",visible:e.dialogBuy},on:{"update:visible":function(t){e.dialogBuy=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择学校"}},[n("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"选择服务"}},[n("el-checkbox",{on:{change:e.handleCheckAllService},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),n("div",{staticClass:"service"},e._l(e.serviceList,(function(t,a){return n("div",{key:a},[n("el-checkbox-group",{staticClass:"service-item",model:{value:e.form.service,callback:function(t){e.$set(e.form,"service",t)},expression:"form.service"}},[n("el-checkbox",{attrs:{label:t},on:{change:e.oneChange}},[e._v(e._s(t.name))])],1)],1)})),0)],1),n("el-form-item",{attrs:{label:"商品名称"}},[n("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"商品价格"}},[n("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),n("el-form-item",{attrs:{label:"商品时长"}},[n("el-input",{model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),n("el-form-item",{attrs:{label:"商品描述"}},[n("el-input",{model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newBuy}},[e._v("提交")])],1)],1)],1)],1)]),n("el-table",{attrs:{data:e.tableDate}},[n("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"商品ID",align:"center",width:"100px"}}),n("el-table-column",{attrs:{prop:"title",label:"商品名称",align:"center"}}),n("el-table-column",{attrs:{prop:"price",label:"商品价格",align:"center"}}),n("el-table-column",{attrs:{prop:"time",label:"商品时长(天)",align:"center"}}),n("el-table-column",{attrs:{prop:"detail",label:"商品描述",align:"center"}}),n("el-table-column",{attrs:{prop:"service[0].name",label:"服务权限",align:"center"}}),n("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),n("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑服务")]),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleOrder(t.$index,t.row)}}},[e._v("服务订单")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},r=[],s=(n("4160"),n("b0c0"),n("159b"),n("365c")),o={name:"buy",data:function(){return{schoolList:[],school:"",dialogBuy:!1,checkAll:!1,serviceIdList:[],serviceList:[{title:"sendInfo",name:"消息推送"},{title:"classesNotice",name:"班级公告"},{title:"studentLocal",name:"学生定位"},{title:"out-inRecord",name:"学生进出记录"},{title:"markInquire",name:"成绩查询"},{title:"buyLocator",name:"购买定位器"}],form:{title:"测试",price:"12",detail:"测试商品",service:[],school:"",time:""},tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBuys(),this.getSchool()},methods:{getBuys:function(){var e=this;s["a"].buys(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},newBuy:function(){var e=this;e.form.price&&(e.form.price=100*e.form.price),s["a"].buy(e.form).then((function(t){e.dialogBuy=!1,e.$message.success("提交成功"),e.getBuys(),e.currentPage=1,e.form={},e.form.service=[]}))},addBuy:function(){var e=this;e.dialogBuy=!0},getSchool:function(){var e=this;s["a"].schools(e.currentPage,100).then((function(t){e.schoolList=t.data}))},handleCheckAllService:function(e){var t=this;t.form.service=e?t.serviceList:[],console.log(t.form.service)},oneChange:function(){var e=this;console.log(e.form.service)},handleEdit:function(e,t){console.log(t.service);var n=this;n.dialogBuy=!0,n.form=t,6===t.service.length&&(n.checkAll=!0,t.service.forEach((function(e){n.form.service.push({title:e.title,name:e.name})})))},handleCurrentChange:function(e){var t=this;t.getBuys()}}},l=o,c=(n("54f9"),n("2877")),i=Object(c["a"])(l,a,r,!1,null,"76517da1",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-72ffdfa8.506b5348.js.map