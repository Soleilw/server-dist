(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5e8ac5a"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),r=a("99b1"),i=a.n(r),o={students:function(e,t,a){return n["a"].get(i.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(i.a.Student,e)},delStudent:function(e){return n["a"].del(i.a.DelStudent,{student_id:e})},searchName:function(e,t,a,r){return n["a"].get(i.a.Students,{page:e,limit:t,name:a,number:r})},seekUser:function(e){return n["a"].get(i.a.SeekUser,{keyword:e})},wxUser:function(e,t){return n["a"].get(i.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(i.a.BindFamily,e)},familySearch:function(e,t,a){return n["a"].get(i.a.FamilySearch,{page:e,limit:t,number:a})},studentFace:function(e){return n["a"].post(i.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(i.a.StudentEditFace,e)},failFace:function(e,t){return n["a"].post(i.a.FailFace,{id:e,type:t})},pushFace:function(e,t){return n["a"].post(i.a.PushFace,{id:e,type:t})},pushFace1:function(e,t,a){return n["a"].post(i.a.PushFace,{id:e,type:t,uuid:a})},createFace:function(e){return n["a"].post(i.a.CreateFace,{id:e})},studentServe:function(e){return n["a"].get(i.a.StudentServe,{id:e})},faceLogs:function(e,t,a){return n["a"].get(i.a.StudentFaceLogs,{page:e,limit:t,id:a})},notice:function(e,t){return n["a"].get(i.a.Notice,{page:e,limit:t})},searchNotice:function(e,t){return n["a"].get(i.a.Notice,{grade_id:e,class_id:t})},grade:function(e){return n["a"].post(i.a.Grade,e)},grades:function(e,t){return n["a"].get(i.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(i.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(i.a.Class,e)},classes:function(e,t,a){return n["a"].get(i.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(i.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(i.a.Device,e)},devices:function(e){return n["a"].post(i.a.Devices,{page:e})},family:function(e,t){return n["a"].get(i.a.Family,{page:e,limit:t})},masterFamily:function(e){return n["a"].put(i.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(i.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(i.a.Announcement,{page:e})},exam:function(e){return n["a"].post(i.a.Exam,e)},exams:function(e,t){return n["a"].get(i.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,a){return n["a"].get(i.a.ExamsDetail,{page:e,limit:t,exam_id:a})},delExam:function(e){return n["a"].del(i.a.Exam,{id:e})},subjects:function(){return n["a"].get(i.a.Subjects)},importsExam:function(e,t){return n["a"].post(i.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t,a){return n["a"].get(i.a.Imports,{page:e,limit:t,type:a})},delImport:function(e){return n["a"].del(i.a.DelImport,{id:e})},example:function(e){return n["a"].getExcel(i.a.Export,{subjects:e})},teacher:function(e,t,a,r){return n["a"].get(i.a.Teacher,{page:e,limit:t,state:a,worker:r})},delTeacher:function(e){return n["a"].del(i.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(i.a.Audit,e)},schools:function(e,t,a,r){return n["a"].get(i.a.Schools,{page:e,limit:t,mode:a,id:r})},oneSchool:function(e){return n["a"].get(i.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(i.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(i.a.SchoolUser,{page:e,limit:t,school_id:a})},visitors:function(e,t,a){return n["a"].get(i.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(i.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(i.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(i.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(i.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(i.a.School,e)},delSchool:function(e){return n["a"].del(i.a.DelSchool,{school_id:e})},pushSchFace:function(e){return n["a"].post(i.a.PushSchFace,{school_id:e})},banners:function(e,t){return n["a"].get(i.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(i.a.Banner,e)},message:function(e){return n["a"].post(i.a.Message,e)},messages:function(e,t){return n["a"].get(i.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(i.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(i.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(i.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(i.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(i.a.DelDocument,{id:e})},document:function(e){return n["a"].post(i.a.Document,e)},documentDel:function(e){return n["a"].del(i.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(i.a.DelBanner,{id:e})},buys:function(e,t){return n["a"].get(i.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(i.a.Buy,e)},delBuy:function(e){return n["a"].del(i.a.Buy,{id:e})},roles:function(e,t){return n["a"].get(i.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(i.a.Role,e)},delRole:function(e){return n["a"].del(i.a.DelRole,{id:e})},user:function(e){return n["a"].post(i.a.User,e)},users:function(e,t){return n["a"].get(i.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(i.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(i.a.ResetPassword,e)},goods:function(e){return n["a"].get(i.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(i.a.SetProduct,e)},banProduct:function(e){return n["a"].post(i.a.BanProduct,e)},banProducts:function(e){return n["a"].get(i.a.BanProducts,{user_id:e})},userSearch:function(e,t){return n["a"].get(i.a.UserSearch,{id:e,nickname:t})},jurisdictionSchool:function(e,t,a,r){return n["a"].get(i.a.JurisdictionSchool,{page:e,limit:t,user_id:a,mode:r})},jurisdictionProducts:function(e){return n["a"].get(i.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(i.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(i.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,r){return n["a"].get(i.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:r})},classCheckCount:function(e){return n["a"].get(i.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(i.a.Statistics,{school_id:e,grade_id:t})},getConfigs:function(){return n["a"].get(i.a.Configs)},delFaceSwitch:function(e){return n["a"].del(i.a.Configs,{id:e})},faceSwitch:function(e){return n["a"].post(i.a.Configs,e)},userOrder:function(e){return n["a"].get(i.a.UserOrder,{user_id:e})},refund:function(e,t){return n["a"].post(i.a.Refund,{id:e,price:t})}};t["a"]=o},"6f46":function(e,t,a){"use strict";var n=a("a916"),r=a.n(n);r.a},8649:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addBuy}},[e._v("添加购买服务")])],1),a("div",{staticClass:"btn"},[a("span",[e._v("学校：")]),a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]),a("el-dialog",{attrs:{title:"添加购买服务",visible:e.dialogBuy},on:{"update:visible":function(t){e.dialogBuy=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择学校"}},[a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择服务"}},[a("el-checkbox",{on:{change:e.handleCheckAllService},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"service"},e._l(e.serviceList,(function(t,n){return a("div",{key:n},[a("el-checkbox-group",{staticClass:"service-item",model:{value:e.form.service,callback:function(t){e.$set(e.form,"service",t)},expression:"form.service"}},[a("el-checkbox",{attrs:{label:t},on:{change:e.oneChange}},[e._v(e._s(t.name))])],1)],1)})),0)],1),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"商品价格"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),a("el-form-item",{attrs:{label:"商品时长"}},[a("el-input",{model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[e.isAdd?a("el-button",{attrs:{type:"primary"},on:{click:e.newBuy}},[e._v("提交")]):e._e()],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"订单列表",visible:e.showServiceOrder,width:"80%"},on:{"update:visible":function(t){e.showServiceOrder=t}}},[a("div",{staticClass:"box"},[a("div",[a("el-table",{attrs:{data:e.orderData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"no",label:"订单ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"user_name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"商品价格"}}),a("el-table-column",{attrs:{prop:"status",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",[e._v("支付中")]):2==t.row.status?a("span",[e._v("已付款")]):3==t.row.status?a("span",[e._v("无效")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentOrderPage,"page-sizes":[10,20,30,40,50],"page-size":e.orderPageSize,layout:"sizes, prev, pager, next, jumper",total:e.orderTotalPage},on:{"current-change":e.handleOrderChange,"update:currentPage":function(t){e.currentOrderPage=t},"update:current-page":function(t){e.currentOrderPage=t},"size-change":e.handleOrderSizeChange}})],1)],1)])]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"商品ID",width:"100px"}}),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"商品价格"}}),a("el-table-column",{attrs:{prop:"time",label:"商品时长(天)"}}),a("el-table-column",{attrs:{prop:"detail",label:"商品描述"}}),a("el-table-column",{attrs:{prop:"service[0].name",label:"服务权限"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("查看服务")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleOrder(t.$index,t.row)}}},[e._v("服务订单")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除住户",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该服务")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,30,40,50],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},r=[],i=(a("4160"),a("b0c0"),a("159b"),a("365c")),o={name:"buy",data:function(){return{loading:!0,dialogDel:!1,schoolList:[],school:"",dialogBuy:!1,showServiceOrder:!1,checkAll:!1,serviceIdList:[],serviceList:[{title:"sendInfo",name:"消息推送"},{title:"classesNotice",name:"班级公告"},{title:"studentLocal",name:"学生定位"},{title:"out-inRecord",name:"学生进出记录"},{title:"markInquire",name:"成绩查询"},{title:"buyLocator",name:"购买定位器"}],form:{title:"",price:"",detail:"",service:[],school:"",time:""},financial:"订单列表",financialList:[{value:1,label:"订单列表"},{value:2,label:"财务统计"}],orderData:[],orderPageSize:10,orderTotalPage:0,currentOrderPage:1,tableDate:[],current:1,total:0,size:10,isAdd:!0,id:""}},mounted:function(){this.getBuys(),this.getSchool()},methods:{getBuys:function(){var e=this;i["a"].buys(e.current).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentChange:function(e){var t=this;t.current=e,t.loading=!0,i["a"].buys(e,t.size).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.size=e,t.loading=!0,i["a"].buys(t.current,e).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},newBuy:function(){var e=this;i["a"].buy(e.form).then((function(t){e.dialogBuy=!1,e.$message.success("提交成功"),e.getBuys(),e.current=1,e.form={},e.form.service=[]}))},addBuy:function(){var e=this;e.dialogBuy=!0,e.isAdd=!0,e.checkAll=!1,e.form={title:"",price:"",detail:"",service:[],school:"",time:""}},getSchool:function(){var e=this;i["a"].schools(e.current,100,2).then((function(t){e.schoolList=t.data}))},handleCheckAllService:function(e){var t=this;console.log("handleCheckAllService",e),t.form.service=e?t.serviceList:[]},oneChange:function(){var e=this;console.log(e.form.service),console.log(e.serviceList),6===e.form.service.length?e.checkAll=!0:e.checkAll=!1},handleEdit:function(e,t){var a=this;a.dialogBuy=!0,a.isAdd=!1,a.form=t;var n=[];t.service.forEach((function(e){n.push({title:e.title,name:e.name})})),a.form.service=n,console.log(t),6===t.service.length?a.checkAll=!0:a.checkAll=!1},handleOrder:function(e,t){var a=this;a.showServiceOrder=!0,a.product_id=t.id,i["a"].server(1,a.size,a.product_id).then((function(e){a.orderData=e.data,a.orderTotalPage=e.total,a.$message.success("获取数据成功")}))},handleOrderChange:function(e){var t=this;t.currentOrderPage=e,i["a"].server(e,t.orderPageSize,t.id).then((function(e){t.orderData=e.data,t.orderTotalPage=e.total}))},handleOrderSizeChange:function(e){var t=this;i["a"].server(e,t.currentOrderPage,t.id).then((function(e){t.orderData=e.data,t.orderTotalPage=e.total}))},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id,console.log(t)},toDel:function(){var e=this;i["a"].delBuy(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getBuys()}))}}},l=o,c=(a("6f46"),a("2877")),s=Object(c["a"])(l,n,r,!1,null,"6c1b4561",null);t["default"]=s.exports},a916:function(e,t,a){}}]);
//# sourceMappingURL=chunk-b5e8ac5a.65ceb87b.js.map