(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34aac225"],{"365c":function(e,t,n){"use strict";var a=n("be3b"),i=n("99b1"),o=n.n(i),r={students:function(e,t,n){return a["a"].get(o.a.Students,{page:e,limit:t,class_id:n})},student:function(e){return a["a"].post(o.a.Student,e)},delStudent:function(e){return a["a"].del(o.a.DelStudent,{student_id:e})},searchName:function(e,t,n,i){return a["a"].get(o.a.Students,{page:e,limit:t,name:n,number:i})},wxUser:function(e,t){return a["a"].get(o.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return a["a"].post(o.a.BindFamily,e)},familySearch:function(e,t,n){return a["a"].get(o.a.FamilySearch,{page:e,limit:t,number:n})},studentFace:function(e){return a["a"].post(o.a.StudentFace,e)},studentEditFace:function(e){return a["a"].put(o.a.StudentEditFace,e)},failFace:function(e){return a["a"].post(o.a.FailFace,{id:e})},pushFace:function(e){return a["a"].post(o.a.PushFace,{id:e})},createFace:function(e){return a["a"].post(o.a.CreateFace,{id:e})},studentServe:function(e){return a["a"].get(o.a.StudentServe,{id:e})},faceLogs:function(e,t,n){return a["a"].get(o.a.StudentFaceLogs,{page:e,limit:t,id:n})},notice:function(e,t){return a["a"].get(o.a.Notice,{page:e,limit:t})},searchNotice:function(e,t){return a["a"].get(o.a.Notice,{grade_id:e,class_id:t})},grade:function(e){return a["a"].post(o.a.Grade,e)},grades:function(e,t){return a["a"].get(o.a.Grades,{page:e,limit:t})},delGrade:function(e){return a["a"].del(o.a.DelGrade,{grade_id:e})},_class:function(e){return a["a"].post(o.a.Class,e)},classes:function(e,t,n){return a["a"].get(o.a.Classes,{page:e,limit:t,grade_id:n})},delClass:function(e){return a["a"].del(o.a.DelClass,{class_id:e})},device:function(e){return a["a"].post(o.a.Device,e)},devices:function(e){return a["a"].post(o.a.Devices,{page:e})},family:function(e,t){return a["a"].get(o.a.Family,{page:e,limit:t})},masterFamily:function(e){return a["a"].put(o.a.MasterFamily,e)},delFamily:function(e){return a["a"].del(o.a.DelFamily,{id:e})},announcement:function(e){return a["a"].get(o.a.Announcement,{page:e})},exam:function(e){return a["a"].post(o.a.Exam,e)},exams:function(e,t){return a["a"].get(o.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,n){return a["a"].get(o.a.ExamsDetail,{page:e,limit:t,exam_id:n})},delExam:function(e){return a["a"].del(o.a.Exam,{id:e})},subjects:function(){return a["a"].get(o.a.Subjects)},importsExam:function(e,t){return a["a"].post(o.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t,n){return a["a"].get(o.a.Imports,{page:e,limit:t,type:n})},delImport:function(e){return a["a"].del(o.a.DelImport,{id:e})},example:function(e){return a["a"].getExcel(o.a.Export,{subjects:e})},teacher:function(e,t,n,i){return a["a"].get(o.a.Teacher,{page:e,limit:t,state:n,worker:i})},delTeacher:function(e){return a["a"].del(o.a.DelTeacher,{id:e})},audit:function(e){return a["a"].post(o.a.Audit,e)},schools:function(e,t,n,i){return a["a"].get(o.a.Schools,{page:e,limit:t,mode:n,id:i})},oneSchool:function(e){return a["a"].get(o.a.School,{id:e})},studentInfo:function(e,t,n){return a["a"].get(o.a.StudentInfo,{page:e,limit:t,school_id:n})},schoolUser:function(e,t,n){return a["a"].get(o.a.SchoolUser,{page:e,limit:t,school_id:n})},visitors:function(e,t,n){return a["a"].get(o.a.Visitors,{page:e,limit:t,school_id:n})},teacherUser:function(e,t,n){return a["a"].get(o.a.TeacherUser,{page:e,limit:t,school_id:n})},orders:function(e,t,n){return a["a"].get(o.a.Orders,{page:e,limit:t,school_id:n})},server:function(e,t,n){return a["a"].get(o.a.Server,{page:e,limit:t,product_id:n})},schoolTeacher:function(e,t,n){return a["a"].get(o.a.Teacher,{page:e,limit:t,school_id:n})},school:function(e){return a["a"].post(o.a.School,e)},delSchool:function(e){return a["a"].del(o.a.DelSchool,{school_id:e})},banners:function(e,t){return a["a"].get(o.a.Banners,{page:e,limit:t})},banner:function(e){return a["a"].post(o.a.Banner,e)},message:function(e){return a["a"].post(o.a.Message,e)},messages:function(e,t){return a["a"].get(o.a.Messages,{page:e,limit:t})},messageType:function(e){return a["a"].post(o.a.MessageType,e)},messageTypes:function(e,t){return a["a"].get(o.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return a["a"].del(o.a.DelDocumentType,{id:e})},documents:function(e,t){return a["a"].get(o.a.Documents,{page:e,limit:t})},delDocument:function(e){return a["a"].del(o.a.DelDocument,{id:e})},document:function(e){return a["a"].post(o.a.Document,e)},documentDel:function(e){return a["a"].del(o.a.DocumentDel,{id:e})},delBanner:function(e){return a["a"].del(o.a.DelBanner,{id:e})},buys:function(e,t){return a["a"].get(o.a.Buys,{page:e,limit:t})},buy:function(e){return a["a"].post(o.a.Buy,e)},delBuy:function(e){return a["a"].del(o.a.Buy,{id:e})},roles:function(e,t){return a["a"].get(o.a.Roles,{page:e,limit:t})},role:function(e){return a["a"].post(o.a.Role,e)},delRole:function(e){return a["a"].del(o.a.DelRole,{id:e})},user:function(e){return a["a"].post(o.a.User,e)},users:function(e,t){return a["a"].get(o.a.Users,{page:e,limit:t})},delUser:function(e){return a["a"].del(o.a.DelUser,{id:e})},resetPassword:function(e){return a["a"].post(o.a.ResetPassword,e)},goods:function(e){return a["a"].get(o.a.Buys,{school_id:e})},setProduct:function(e){return a["a"].post(o.a.SetProduct,e)},banProduct:function(e){return a["a"].post(o.a.BanProduct,e)},banProducts:function(e){return a["a"].get(o.a.BanProducts,{user_id:e})},userSearch:function(e){return a["a"].get(o.a.UserSearch,{id:e})},jurisdictionSchool:function(e,t){return a["a"].get(o.a.JurisdictionSchool,{user_id:e,mode:t})},jurisdictionProducts:function(e){return a["a"].get(o.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return a["a"].get(o.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return a["a"].get(o.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,n,i){return a["a"].get(o.a.StudentGender,{sex:e,type:t,school_id:n,grade_id:i})},classCheckCount:function(e){return a["a"].get(o.a.ClassCheckCount,{id:e})},statistics:function(e,t){return a["a"].get(o.a.Statistics,{school_id:e,grade_id:t})}};t["a"]=r},b843:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[n("div",{staticClass:"handle-box"},[n("div",{staticClass:"btn"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入用户ID"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.user_id)}},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.user_id)}},slot:"append"})],1)],1)]),n("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[n("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),n("el-table-column",{attrs:{prop:"avatarUrl",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.avatarUrl}})]}}])}),n("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}])}),n("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),n("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleOpenPermission(t.$index,t.row)}}},[e._v("开通权限")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleBanUsePermission(t.$index,t.row)}}},[e._v("禁止使用权限")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.current,"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1),n("el-dialog",{attrs:{title:"开通权限",visible:e.dialogOpenPermission,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(t){e.dialogOpenPermission=t},close:e.closePermissionForm}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.openPermissionForm}},[e._l(e.openPermissionForm.service,(function(t,a){return n("div",{key:a},[n("el-form-item",{attrs:{label:"选择学校"}},[n("el-select",{attrs:{placeholder:"请选择学校"},on:{change:e.schoolChange},model:{value:t.school_id,callback:function(n){e.$set(t,"school_id",n)},expression:"item.school_id"}},e._l(e.schools,(function(e){return n("el-option",{key:e.index,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"选择商品"}},[n("el-select",{attrs:{placeholder:"选择商品"},model:{value:t.product_id,callback:function(n){e.$set(t,"product_id",n)},expression:"item.product_id"}},e._l(e.products,(function(e){return n("el-option",{key:e.index,attrs:{label:e.title,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"选择学生"}},[n("el-select",{attrs:{placeholder:"选择学生"},model:{value:t.student_id,callback:function(n){e.$set(t,"student_id",n)},expression:"item.student_id"}},e._l(e.students,(function(e){return n("el-option",{key:e.index,attrs:{label:e.name,value:e.id}})})),1)],1)],1)})),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.addopenPermissionForm}},[e._v("添加")]),n("el-button",{attrs:{type:"primary"},on:{click:e.delopenPermissionForm}},[e._v("删除")])],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newOpenPermission}},[e._v("提交")])],1)],1)],2)],1)]),n("el-dialog",{attrs:{title:"禁止使用权限",visible:e.dialogBanUsePermission,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogBanUsePermission=t}}},[n("div",{staticClass:"box"},[n("el-form",[n("el-form-item",{attrs:{label:"选择禁用的学校"}},[n("el-transfer",{attrs:{data:e.schoolList,titles:["选择学校","禁用学校"],"button-texts":["取消","禁用"]},on:{"left-check-change":e.changeLeft,"right-check-change":e.changeRight,change:e.newBanUsePermission},model:{value:e.banSchoolList,callback:function(t){e.banSchoolList=t},expression:"banSchoolList"}})],1),n("div",{staticClass:"submit"})],1)],1)])],1)},i=[],o=(n("4160"),n("b0c0"),n("159b"),n("365c")),r={name:"user",data:function(){return{loading:!0,tableData:[],dialogOpenPermission:!1,schools:[],products:[],students:[],schoolList:[],id:"",cancalSchool:[],banSchool:[],goodsList:[],banSchoolList:[],openPermissionForm:{user_id:"",service:[]},dialogBanUsePermission:!1,activeName:"school",user_id:"",current:1,total:0,size:10,mode:2}},mounted:function(){this.getWxUser()},methods:{getWxUser:function(){var e=this;e.loading=!0,o["a"].wxUser(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentChange:function(e){var t=this;t.current=e,t.loading=!0,o["a"].wxUser(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.size=e,t.loading=!0,o["a"].wxUser(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total,t.current=1})).catch((function(e){t.loading=!1}))},search:function(){var e=this;e.loading=!0,o["a"].userSearch(e.user_id).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total,e.user_id="",e.$message.success("搜索成功！")}))},handleBanUsePermission:function(e,t){var n=this;n.dialogBanUsePermission=!0,n.id=t.id,n.schoolList=[],n.banSchoolList=[],o["a"].banProducts(n.id).then((function(e){e.forEach((function(e){n.schoolList.push({label:e.name,key:e.id,type:e.type}),1===e.type&&n.banSchoolList.push(e.id)}))}))},changeLeft:function(e){var t=this;t.banSchool=e},changeRight:function(e){var t=this;t.cancalSchool=e},newBanUsePermission:function(e,t){var n=this,a={user_id:n.id,type:2,school_id:n.cancalSchool};"left"===t&&o["a"].banProduct(a).then((function(e){n.$message.success("提交成功")}));var i={user_id:n.id,type:1,school_id:n.banSchool};"right"===t&&o["a"].banProduct(i).then((function(e){n.$message.success("提交成功")})),n.dialogBanUsePermission=!1},handleOpenPermission:function(e,t){var n=this;n.dialogOpenPermission=!0,n.addopenPermissionForm(),n.user_id=t.id,o["a"].jurisdictionSchool(n.user_id,n.mode).then((function(e){e.data.forEach((function(t){n.schools=e.data}))}))},getGoods:function(e){var t=this;o["a"].goods(e).then((function(e){t.goodsList=e.data}))},schoolChange:function(e){var t=this;t.getGoods(t.openPermissionForm.school),t.school_id=e,o["a"].jurisdictionProducts(t.school_id).then((function(e){t.products=e})),o["a"].jurisdictionStudent(t.user_id,t.school_id).then((function(e){t.students=e}))},addopenPermissionForm:function(){var e=this;e.openPermissionForm.service.push({})},delopenPermissionForm:function(){var e=this;e.openPermissionForm.service.pop({})},closePermissionForm:function(){var e=this;e.delopenPermissionForm(),e.openPermissionForm.service=[]},newOpenPermission:function(){var e=this;e.openPermissionForm.user_id=e.user_id,o["a"].setProduct(e.openPermissionForm).then((function(t){e.$message.success("提交成功"),e.openPermissionForm={user_id:"",service:[]},e.dialogOpenPermission=!1}))}}},s=r,c=n("2877"),u=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-34aac225.658482c0.js.map