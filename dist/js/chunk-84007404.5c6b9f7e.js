(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84007404"],{"365c":function(e,t,n){"use strict";var a=n("be3b"),i=n("99b1"),r=n.n(i),o={students:function(e,t,n){return a["a"].get(r.a.Students,{page:e,limit:t,class_id:n})},student:function(e){return a["a"].post(r.a.Student,e)},delStudent:function(e){return a["a"].del(r.a.DelStudent,{student_id:e})},searchName:function(e,t,n,i){return a["a"].get(r.a.Students,{page:e,limit:t,name:n,number:i})},seekUser:function(e){return a["a"].get(r.a.SeekUser,{keyword:e})},wxUser:function(e,t){return a["a"].get(r.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return a["a"].post(r.a.BindFamily,e)},familySearch:function(e,t,n){return a["a"].get(r.a.FamilySearch,{page:e,limit:t,number:n})},studentFace:function(e){return a["a"].post(r.a.StudentFace,e)},studentEditFace:function(e){return a["a"].put(r.a.StudentEditFace,e)},failFace:function(e,t){return a["a"].post(r.a.FailFace,{id:e,type:t})},pushFace:function(e,t){return a["a"].post(r.a.PushFace,{id:e,type:t})},pushFace1:function(e,t,n){return a["a"].post(r.a.PushFace,{id:e,type:t,uuid:n})},createFace:function(e){return a["a"].post(r.a.CreateFace,{id:e})},studentServe:function(e){return a["a"].get(r.a.StudentServe,{id:e})},faceLogs:function(e,t,n){return a["a"].get(r.a.StudentFaceLogs,{page:e,limit:t,id:n})},notice:function(e,t){return a["a"].get(r.a.Notice,{page:e,limit:t})},searchNotice:function(e,t){return a["a"].get(r.a.Notice,{grade_id:e,class_id:t})},grade:function(e){return a["a"].post(r.a.Grade,e)},grades:function(e,t){return a["a"].get(r.a.Grades,{page:e,limit:t})},delGrade:function(e){return a["a"].del(r.a.DelGrade,{grade_id:e})},_class:function(e){return a["a"].post(r.a.Class,e)},classes:function(e,t,n){return a["a"].get(r.a.Classes,{page:e,limit:t,grade_id:n})},delClass:function(e){return a["a"].del(r.a.DelClass,{class_id:e})},device:function(e){return a["a"].post(r.a.Device,e)},devices:function(e){return a["a"].post(r.a.Devices,{page:e})},family:function(e,t){return a["a"].get(r.a.Family,{page:e,limit:t})},masterFamily:function(e){return a["a"].put(r.a.MasterFamily,e)},delFamily:function(e){return a["a"].del(r.a.DelFamily,{id:e})},announcement:function(e){return a["a"].get(r.a.Announcement,{page:e})},exam:function(e){return a["a"].post(r.a.Exam,e)},exams:function(e,t){return a["a"].get(r.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,n){return a["a"].get(r.a.ExamsDetail,{page:e,limit:t,exam_id:n})},delExam:function(e){return a["a"].del(r.a.Exam,{id:e})},subjects:function(){return a["a"].get(r.a.Subjects)},importsExam:function(e,t){return a["a"].post(r.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t,n){return a["a"].get(r.a.Imports,{page:e,limit:t,type:n})},delImport:function(e){return a["a"].del(r.a.DelImport,{id:e})},example:function(e){return a["a"].getExcel(r.a.Export,{subjects:e})},teacher:function(e,t,n,i){return a["a"].get(r.a.Teacher,{page:e,limit:t,state:n,worker:i})},delTeacher:function(e){return a["a"].del(r.a.DelTeacher,{id:e})},audit:function(e){return a["a"].post(r.a.Audit,e)},schools:function(e,t,n,i){return a["a"].get(r.a.Schools,{page:e,limit:t,mode:n,id:i})},oneSchool:function(e){return a["a"].get(r.a.School,{id:e})},studentInfo:function(e,t,n){return a["a"].get(r.a.StudentInfo,{page:e,limit:t,school_id:n})},schoolUser:function(e,t,n){return a["a"].get(r.a.SchoolUser,{page:e,limit:t,school_id:n})},visitors:function(e,t,n){return a["a"].get(r.a.Visitors,{page:e,limit:t,school_id:n})},teacherUser:function(e,t,n){return a["a"].get(r.a.TeacherUser,{page:e,limit:t,school_id:n})},orders:function(e,t,n){return a["a"].get(r.a.Orders,{page:e,limit:t,school_id:n})},server:function(e,t,n){return a["a"].get(r.a.Server,{page:e,limit:t,product_id:n})},schoolTeacher:function(e,t,n){return a["a"].get(r.a.Teacher,{page:e,limit:t,school_id:n})},school:function(e){return a["a"].post(r.a.School,e)},delSchool:function(e){return a["a"].del(r.a.DelSchool,{school_id:e})},pushSchFace:function(e){return a["a"].post(r.a.PushSchFace,{school_id:e})},banners:function(e,t){return a["a"].get(r.a.Banners,{page:e,limit:t})},banner:function(e){return a["a"].post(r.a.Banner,e)},message:function(e){return a["a"].post(r.a.Message,e)},messages:function(e,t){return a["a"].get(r.a.Messages,{page:e,limit:t})},messageType:function(e){return a["a"].post(r.a.MessageType,e)},messageTypes:function(e,t){return a["a"].get(r.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return a["a"].del(r.a.DelDocumentType,{id:e})},documents:function(e,t){return a["a"].get(r.a.Documents,{page:e,limit:t})},delDocument:function(e){return a["a"].del(r.a.DelDocument,{id:e})},document:function(e){return a["a"].post(r.a.Document,e)},documentDel:function(e){return a["a"].del(r.a.DocumentDel,{id:e})},delBanner:function(e){return a["a"].del(r.a.DelBanner,{id:e})},buys:function(e,t){return a["a"].get(r.a.Buys,{page:e,limit:t})},buy:function(e){return a["a"].post(r.a.Buy,e)},delBuy:function(e){return a["a"].del(r.a.Buy,{id:e})},roles:function(e,t){return a["a"].get(r.a.Roles,{page:e,limit:t})},role:function(e){return a["a"].post(r.a.Role,e)},delRole:function(e){return a["a"].del(r.a.DelRole,{id:e})},user:function(e){return a["a"].post(r.a.User,e)},users:function(e,t){return a["a"].get(r.a.Users,{page:e,limit:t})},delUser:function(e){return a["a"].del(r.a.DelUser,{id:e})},resetPassword:function(e){return a["a"].post(r.a.ResetPassword,e)},goods:function(e){return a["a"].get(r.a.Buys,{school_id:e})},setProduct:function(e){return a["a"].post(r.a.SetProduct,e)},banProduct:function(e){return a["a"].post(r.a.BanProduct,e)},banProducts:function(e){return a["a"].get(r.a.BanProducts,{user_id:e})},userSearch:function(e,t){return a["a"].get(r.a.UserSearch,{id:e,nickname:t})},jurisdictionSchool:function(e,t,n,i){return a["a"].get(r.a.JurisdictionSchool,{page:e,limit:t,user_id:n,mode:i})},jurisdictionProducts:function(e){return a["a"].get(r.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return a["a"].get(r.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return a["a"].get(r.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,n,i){return a["a"].get(r.a.StudentGender,{sex:e,type:t,school_id:n,grade_id:i})},classCheckCount:function(e){return a["a"].get(r.a.ClassCheckCount,{id:e})},statistics:function(e,t){return a["a"].get(r.a.Statistics,{school_id:e,grade_id:t})},payTotal:function(e,t){return a["a"].get(r.a.PayTotal,{school_id:e,grade_id:t})},getConfigs:function(){return a["a"].get(r.a.Configs)},delFaceSwitch:function(e){return a["a"].del(r.a.Configs,{id:e})},faceSwitch:function(e){return a["a"].post(r.a.Configs,e)},userOrder:function(e){return a["a"].get(r.a.UserOrder,{user_id:e})},refund:function(e,t){return a["a"].post(r.a.Refund,{id:e,price:t})},gainStuInfo:function(e,t){return a["a"].get(r.a.StuInfo,{page:e,limit:t})},serStuInfo:function(e,t,n,i){return a["a"].get(r.a.StuInfo,{page:e,limit:t,name:n,number:i})}};t["a"]=o},"5f7b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[n("div",{staticClass:"handle-box"},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-circle-plus-outline"},on:{click:e.addSwitch}},[e._v("添加开关信息")])],1)]),n("el-dialog",{attrs:{title:"添加开关信息",visible:e.dialogSwitch,width:"50%"},on:{"update:visible":function(t){e.dialogSwitch=t}}},[n("div",{staticClass:"box"},[n("el-form",{attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"开关名称"}},[n("el-input",{model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),n("el-form-item",{attrs:{label:"版本"}},[n("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),n("el-form-item",{attrs:{label:"开关值"}},[n("el-input",{model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),n("div",{staticClass:"submit"},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.newSwitch}},[e._v("提交")])],1)],1)],1)],1)]),n("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"config_key",label:"开关名称"}}),n("el-table-column",{attrs:{prop:"version",label:"版本"}}),n("el-table-column",{attrs:{prop:"config_value",label:"开关值"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogDel,title:"删除版本",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[n("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该版本")]),n("span",[n("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)])],1)},i=[],r=n("365c"),o={name:"gradems",data:function(){return{loading:!0,dialogSwitch:!1,dialogDel:!1,form:{key:"",version:"",value:"",id:""},tableData:[],id:""}},mounted:function(){this.getSwitch()},methods:{getSwitch:function(){var e=this,t=this;r["a"].getConfigs().then((function(e){console.log(e),t.loading=!1,t.tableData=e,t.total=e.total})).catch((function(t){e.loading=!1}))},addSwitch:function(){var e=this;e.dialogSwitch=!0,e.form={key:"",version:"",value:"",id:""}},newSwitch:function(){var e=this;r["a"].faceSwitch(e.form).then((function(t){e.dialogSwitch=!1,e.$message.success("提交成功"),e.getSwitch(),e.current=1,e.form={}})).catch((function(t){e.dialogSwitch=!1}))},handleDel:function(e,t){var n=this;console.log(t),n.id=t.id,n.dialogDel=!0},toDel:function(){var e=this;r["a"].delFaceSwitch(e.id).then((function(t){e.dialogDel=!1,e.$message.success("删除成功"),e.getSwitch()})).catch((function(t){e.loading=!1}))},handleEdit:function(e,t){var n=this;console.log(t),n.dialogSwitch=!0,n.form={key:t.config_key,version:t.version,value:t.config_value,id:t.id}}}},u=o,c=n("2877"),s=Object(c["a"])(u,a,i,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-84007404.5c6b9f7e.js.map