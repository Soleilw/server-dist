(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d6f189"],{3161:function(e,t,a){"use strict";var n=a("9b1b"),r=a.n(n);r.a},"365c":function(e,t,a){"use strict";a("ac1f");var n=a("ade3"),r=a("be3b"),s=a("99b1"),l=a.n(s),o={students:function(e,t,a){return r["a"].get(l.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return r["a"].post(l.a.Student,e)},delStudent:function(e){return r["a"].del(l.a.DelStudent,{student_id:e})},search:function(e){return r["a"].get(l.a.Students,{number:e})},wxUser:function(e,t){return r["a"].get(l.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return r["a"].post(l.a.BindFamily,e)},familySearch:function(e){return r["a"].get(l.a.FamilySearch,{number:e})},studentFace:function(e){return r["a"].post(l.a.StudentFace,e)},faceLogs:function(e,t,a){return r["a"].get(l.a.StudentFaceLogs,{page:e,limit:t,id:a})},grade:function(e){return r["a"].post(l.a.Grade,e)},grades:function(e,t){return r["a"].get(l.a.Grades,{page:e,limit:t})},delGrade:function(e){return r["a"].del(l.a.DelGrade,{grade_id:e})},_class:function(e){return r["a"].post(l.a.Class,e)},classes:function(e,t,a){var s;return r["a"].get(l.a.Classes,(s={page:e,limit:t},Object(n["a"])(s,"limit",t),Object(n["a"])(s,"grade_id",a),s))},delClass:function(e){return r["a"].del(l.a.DelClass,{class_id:e})},device:function(e){return r["a"].post(l.a.Device,e)},devices:function(e){return r["a"].post(l.a.Devices,{page:e})},family:function(e,t){return r["a"].get(l.a.Family,{page:e,limit:t})},announcement:function(e){return r["a"].get(l.a.Announcement,{page:e})},teacher:function(e,t,a,n){return r["a"].get(l.a.Teacher,{page:e,limit:t,state:a,worker:n})},delTeacher:function(e){return r["a"].del(l.a.DelTeacher,{id:e})},audit:function(e){return r["a"].post(l.a.Audit,e)},schools:function(e,t,a){return r["a"].get(l.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return r["a"].get(l.a.School,{id:e})},school:function(e){return r["a"].post(l.a.School,e)},banners:function(e,t){return r["a"].get(l.a.Banners,{page:e,limit:t})},banner:function(e){return r["a"].post(l.a.Banner,e)},message:function(e){return r["a"].post(l.a.Message,e)},messages:function(e,t){return r["a"].get(l.a.Messages,{page:e,limit:t})},messageType:function(e){return r["a"].post(l.a.MessageType,e)},messageTypes:function(e,t){return r["a"].get(l.a.MessageTypes,{page:e,limit:t})},documents:function(e,t){return r["a"].get(l.a.Documents,{page:e,limit:t})},delDocument:function(e){return r["a"].del(l.a.DelDocument,{id:e})},document:function(e){return r["a"].post(l.a.Document,e)},buys:function(e,t){return r["a"].get(l.a.Buys,{page:e,limit:t})},buy:function(e){return r["a"].post(l.a.Buy,e)},roles:function(e,t){return r["a"].get(l.a.Roles,{page:e,limit:t})},role:function(e){return r["a"].post(l.a.Role,e)},delRole:function(e){return r["a"].del(l.a.DelRole,{id:e})},user:function(e){return r["a"].post(l.a.User,e)},users:function(e,t){return r["a"].get(l.a.Users,{page:e,limit:t})},delUser:function(e){return r["a"].del(l.a.DelUser,{id:e})},resetPassword:function(e){return r["a"].post(l.a.ResetPassword,e)}};t["a"]=o},8649:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("span",[e._v("学校：")]),a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addBuy}},[e._v("添加购买服务")])],1),a("el-dialog",{attrs:{title:"添加购买服务",visible:e.dialogBuy},on:{"update:visible":function(t){e.dialogBuy=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择学校"}},[a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择服务"}},[a("el-checkbox",{on:{change:e.handleCheckAllService},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"service"},e._l(e.serviceList,(function(t,n){return a("div",{key:n},[a("el-checkbox-group",{staticClass:"service-item",model:{value:e.form.service,callback:function(t){e.$set(e.form,"service",t)},expression:"form.service"}},[a("el-checkbox",{attrs:{label:t},on:{change:e.oneChange}},[e._v(e._s(t.name))])],1)],1)})),0)],1),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"商品价格"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),a("el-form-item",{attrs:{label:"商品时长"}},[a("el-input",{model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newBuy}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"商品ID",align:"center",width:"100px"}}),a("el-table-column",{attrs:{prop:"title",label:"商品名称",align:"center"}}),a("el-table-column",{attrs:{prop:"price",label:"商品价格",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"商品时长(天)",align:"center"}}),a("el-table-column",{attrs:{prop:"detail",label:"商品描述",align:"center"}}),a("el-table-column",{attrs:{prop:"service[0].name",label:"服务权限",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑服务")]),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleOrder(t.$index,t.row)}}},[e._v("服务订单")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},r=[],s=(a("4160"),a("b0c0"),a("159b"),a("365c")),l={name:"buy",data:function(){return{schoolList:[],school:"",dialogBuy:!1,checkAll:!1,serviceIdList:[],serviceList:[{title:"sendInfo",name:"消息推送"},{title:"classesNotice",name:"班级公告"},{title:"studentLocal",name:"学生定位"},{title:"out-inRecord",name:"学生进出记录"},{title:"markInquire",name:"成绩查询"},{title:"buyLocator",name:"购买定位器"}],form:{title:"测试",price:"12",detail:"测试商品",service:[],school:"",time:""},tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBuys(),this.getSchool()},methods:{getBuys:function(){var e=this;s["a"].buys(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},newBuy:function(){var e=this;e.form.price&&(e.form.price=100*e.form.price),s["a"].buy(e.form).then((function(t){e.dialogBuy=!1,e.$message.success("提交成功"),e.getBuys(),e.currentPage=1,e.form={},e.form.service=[]}))},addBuy:function(){var e=this;e.dialogBuy=!0},getSchool:function(){var e=this;s["a"].schools(e.currentPage,100).then((function(t){e.schoolList=t.data}))},handleCheckAllService:function(e){var t=this;t.form.service=e?t.serviceList:[],console.log(t.form.service)},oneChange:function(){var e=this;console.log(e.form.service)},handleEdit:function(e,t){console.log(t.service);var a=this;a.dialogBuy=!0,a.form=t,6===t.service.length&&(a.checkAll=!0,t.service.forEach((function(e){a.form.service.push({title:e.title,name:e.name})})))},handleCurrentChange:function(e){var t=this;t.getBuys()},handleSizeChange:function(e){var t=this;s["a"].buys(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))}}},o=l,i=(a("3161"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"77fae3c6",null);t["default"]=c.exports},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",ResetPassword:a+"/reset/password",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",DelDocument:a+"/help/doc",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",DelStudent:a+"/student",Grade:a+"/grade",Grades:a+"/grades",DelGrade:a+"/grade",Class:a+"/class",Classes:a+"/classes",DelClass:a+"/class",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/parents",WxUser:a+"/wx/users",BindFamily:a+"/pass/student",StudentFace:a+"/student/face",FamilySearch:a+"/parents",StudentFaceLogs:a+"/student/face/logs",Teacher:a+"/user/infos",Audit:a+"/check/user/info",DelTeacher:a+"/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",Role:a+"/role",Roles:a+"/roles",DelRole:a+"/role",User:a+"/user",Users:a+"/users",DelUser:a+"/user"};e.exports=n},"9b1b":function(e,t,a){}}]);
//# sourceMappingURL=chunk-79d6f189.bbc970c1.js.map