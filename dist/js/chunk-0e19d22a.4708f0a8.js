(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e19d22a"],{"365c":function(t,e,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),s={students:function(t,e,a){return n["a"].get(r.a.Students,{page:t,limit:e,class_id:a})},student:function(t){return n["a"].post(r.a.Student,t)},delStudent:function(t){return n["a"].del(r.a.DelStudent,{student_id:t})},searchNumber:function(t,e,a){return n["a"].get(r.a.Students,{page:t,limit:e,number:a})},searchName:function(t,e,a){return n["a"].get(r.a.Students,{page:t,limit:e,name:a})},wxUser:function(t,e){return n["a"].get(r.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return n["a"].post(r.a.BindFamily,t)},familySearch:function(t,e,a){return n["a"].get(r.a.FamilySearch,{page:t,limit:e,number:a})},studentFace:function(t){return n["a"].post(r.a.StudentFace,t)},studentEditFace:function(t){return n["a"].put(r.a.StudentEditFace,t)},faceLogs:function(t,e,a){return n["a"].get(r.a.StudentFaceLogs,{page:t,limit:e,id:a})},grade:function(t){return n["a"].post(r.a.Grade,t)},grades:function(t,e){return n["a"].get(r.a.Grades,{page:t,limit:e})},delGrade:function(t){return n["a"].del(r.a.DelGrade,{grade_id:t})},_class:function(t){return n["a"].post(r.a.Class,t)},classes:function(t,e,a){return n["a"].get(r.a.Classes,{page:t,limit:e,grade_id:a})},delClass:function(t){return n["a"].del(r.a.DelClass,{class_id:t})},device:function(t){return n["a"].post(r.a.Device,t)},devices:function(t){return n["a"].post(r.a.Devices,{page:t})},family:function(t,e){return n["a"].get(r.a.Family,{page:t,limit:e})},masterFamily:function(t){return n["a"].put(r.a.MasterFamily,t)},delFamily:function(t){return n["a"].del(r.a.DelFamily,{id:t})},announcement:function(t){return n["a"].get(r.a.Announcement,{page:t})},teacher:function(t,e,a,i){return n["a"].get(r.a.Teacher,{page:t,limit:e,state:a,worker:i})},delTeacher:function(t){return n["a"].del(r.a.DelTeacher,{id:t})},audit:function(t){return n["a"].post(r.a.Audit,t)},schools:function(t,e,a,i){return n["a"].get(r.a.Schools,{page:t,limit:e,mode:a,id:i})},oneSchool:function(t){return n["a"].get(r.a.School,{id:t})},studentInfo:function(t,e,a){return n["a"].get(r.a.StudentInfo,{page:t,limit:e,school_id:a})},schoolUser:function(t,e,a){return n["a"].get(r.a.SchoolUser,{page:t,limit:e,school_id:a})},visitors:function(t,e,a){return n["a"].get(r.a.Visitors,{page:t,limit:e,school_id:a})},teacherUser:function(t,e,a){return n["a"].get(r.a.TeacherUser,{page:t,limit:e,school_id:a})},orders:function(t,e,a){return n["a"].get(r.a.Orders,{page:t,limit:e,school_id:a})},server:function(t,e,a){return n["a"].get(r.a.Server,{page:t,limit:e,product_id:a})},schoolTeacher:function(t,e,a){return n["a"].get(r.a.Teacher,{page:t,limit:e,school_id:a})},school:function(t){return n["a"].post(r.a.School,t)},banners:function(t,e){return n["a"].get(r.a.Banners,{page:t,limit:e})},banner:function(t){return n["a"].post(r.a.Banner,t)},message:function(t){return n["a"].post(r.a.Message,t)},messages:function(t,e){return n["a"].get(r.a.Messages,{page:t,limit:e})},messageType:function(t){return n["a"].post(r.a.MessageType,t)},messageTypes:function(t,e){return n["a"].get(r.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return n["a"].del(r.a.DelDocumentType,{id:t})},documents:function(t,e){return n["a"].get(r.a.Documents,{page:t,limit:e})},delDocument:function(t){return n["a"].del(r.a.DelDocument,{id:t})},document:function(t){return n["a"].post(r.a.Document,t)},documentDel:function(t){return n["a"].del(r.a.DocumentDel,{id:t})},delBanner:function(t){return n["a"].del(r.a.DelBanner,{id:t})},buys:function(t,e){return n["a"].get(r.a.Buys,{page:t,limit:e})},buy:function(t){return n["a"].post(r.a.Buy,t)},roles:function(t,e){return n["a"].get(r.a.Roles,{page:t,limit:e})},role:function(t){return n["a"].post(r.a.Role,t)},delRole:function(t){return n["a"].del(r.a.DelRole,{id:t})},user:function(t){return n["a"].post(r.a.User,t)},users:function(t,e){return n["a"].get(r.a.Users,{page:t,limit:e})},delUser:function(t){return n["a"].del(r.a.DelUser,{id:t})},resetPassword:function(t){return n["a"].post(r.a.ResetPassword,t)},goods:function(t){return n["a"].get(r.a.Buys,{school_id:t})},setProduct:function(t){return n["a"].post(r.a.SetProduct,t)},banProduct:function(t){return n["a"].post(r.a.BanProduct,t)},banProducts:function(t){return n["a"].get(r.a.BanProducts,{user_id:t})},userSearch:function(t){return n["a"].get(r.a.UserSearch,{id:t})},jurisdictionSchool:function(t,e){return n["a"].get(r.a.JurisdictionSchool,{user_id:t,mode:e})},jurisdictionProducts:function(t){return n["a"].get(r.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return n["a"].get(r.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return n["a"].get(r.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,a,i){return n["a"].get(r.a.StudentGender,{sex:t,type:e,school_id:a,grade_id:i})},classCheckCount:function(t){return n["a"].get(r.a.ClassCheckCount,{id:t})},statistics:function(t,e){return n["a"].get(r.a.Statistics,{school_id:t,grade_id:e})}};e["a"]=s},"8f29":function(t,e,a){"use strict";var n=a("b9e4"),i=a.n(n);i.a},b9e4:function(t,e,a){},eea5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"btn"},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入学生学号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.number)}},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.search(t.number)}}},[t._v("搜索")])],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.refresh}},[t._v("刷新页面")])],1),a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"student.number",label:"学号",align:"center"}}),a("el-table-column",{attrs:{prop:"student.name",label:"学生姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"UserInfo.name",label:"家长姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"UserInfo.phone",label:"家长手机号",align:"center"}}),a("el-table-column",{attrs:{prop:"WxUser.nickname",label:"家长微信名",align:"center",width:"200px"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{prop:"master",label:"家长性质",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(1===e.row.master?"默认家长":"家庭成员")}})]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center",width:"150px"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"400px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleMore(e.$index,e.row)}}},[t._v("查看更多")]),1!=e.row.master?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleFamilyChange(e.$index,e.row)}}},[t._v("更换默认家长")]):t._e(),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("解除关系")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40,50],"page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.totalPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"更换默认家长",visible:t.dialogFamilyChange,width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFamilyChange=e}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("是否更换为默认家长")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:t.toChange}},[t._v("更换")]),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogFamilyChange=!1}}},[t._v("取消")])],1)]),a("el-dialog",{attrs:{visible:t.dialogDel,title:"解除关系",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDel=e}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("是否解除关系")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:t.toDel}},[t._v("解除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogDel=!1}}},[t._v("取消")])],1)]),a("el-dialog",{attrs:{title:"学生家庭成员列表",visible:t.dialogFamily,width:"90%",align:"center"},on:{"update:visible":function(e){t.dialogFamily=e}}},[a("table",{staticClass:"table",attrs:{border:"1",width:"1000px",model:t.studentList}},[a("tr",{staticClass:"trHeight"},[a("td",{attrs:{rowspan:"2",width:"150px"}},[t._v("学生信息")]),a("td",{staticClass:"bgcolor",attrs:{width:"250px"}},[t._v("学号")]),a("td",{staticClass:"bgcolor",attrs:{width:"150px"}},[t._v("学生姓名")]),a("td",{staticClass:"bgcolor",attrs:{width:"150px"}},[t._v("性别")]),a("td",{staticClass:"bgcolor",attrs:{width:"150px"}},[t._v("年龄")]),a("td",{staticClass:"bgcolor",attrs:{width:"150px"}},[t._v("班级")])]),a("tr",[a("td",[t._v(t._s(t.studentList.number))]),a("td",[t._v(t._s(t.studentList.name))]),a("td",[t._v(t._s(1===t.studentList.sex?"男":"女"))]),a("td",[t._v(t._s(t.studentList.age))]),a("td",[t._v(t._s(t.studentList.class))])])]),a("table",{staticClass:"table",attrs:{border:"1",width:"1000px",model:t.tableList}},[a("tr",{staticClass:"trHeight"},[1===t.master?a("td",{attrs:{rowspan:"2",width:"150px"}},[t._v("默认家长")]):t._e(),2===t.master?a("td",{attrs:{rowspan:"2",width:"150px"}},[t._v("家庭成员")]):t._e(),a("td",{staticClass:"bgcolor",attrs:{width:"90px"}},[t._v("家长ID")]),a("td",{staticClass:"bgcolor",attrs:{width:"90px"}},[t._v("家长名称")]),a("td",{staticClass:"bgcolor",attrs:{width:"90px"}},[t._v("性别")]),a("td",{staticClass:"bgcolor",attrs:{width:"130px"}},[t._v("电话")]),a("td",{staticClass:"bgcolor",attrs:{width:"150px"}},[t._v("身份证")]),a("td",{staticClass:"bgcolor",attrs:{width:"300px"}},[t._v("地址")])]),a("tr",[a("td",[t._v(t._s(t.tableList.id))]),a("td",[t._v(t._s(t.tableList.name))]),a("td",[t._v(t._s(1===t.tableList.sex?"男":"女"))]),a("td",[t._v(t._s(t.tableList.phone))]),a("td",[t._v(t._s("NONE"===t.tableList.id_card?"无":t.tableList.id_card))]),a("td",{staticStyle:{"text-align":"start",padding:"5px"}},[t._v(t._s(t.tableList.address))])])])])],1)},i=[],r=a("365c"),s={name:"family",inject:["reload"],data:function(){return{loading:!0,tableData:[],dialogFamily:!1,studentList:{},tableList:[],familyList:[],number:"",master:1,dialogFamilyChange:!1,dialogDel:!1,ID:{id:""},student_id:"",user_id:"",currentPage:1,totalPage:0,pageSize:10,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getFamily()},methods:{getFamily:function(){var t=this;t.pageSize=10,r["a"].family(1).then((function(e){t.loading=!1,t.tableData=e.data,t.totalPage=e.total})).catch((function(e){t.loading=!1}))},handleMore:function(t,e){var a=this;a.dialogFamily=!0,a.studentList=e.student,a.master=e.master,e.UserInfo?a.tableList=e.UserInfo:(a.dialogFamily=!1,a.$message.warning("暂无家长更多信息"))},handleFamilyChange:function(t,e){var a=this;a.dialogFamilyChange=!0,a.ID.id=e.id},toChange:function(){var t=this;r["a"].masterFamily(t.ID).then((function(e){t.$message.success("更换成功"),t.getFamily(),t.dialogFamilyChange=!1,t.currentPage=1}))},handleDel:function(t,e){var a=this;a.dialogDel=!0,a.student_id=e.student.id,a.user_id=e.student.id,a.ID.id=e.id},toDel:function(){var t=this;r["a"].delFamily(t.ID.id).then((function(e){t.$message.success("解除成功"),t.dialogDel=!1,t.getFamily(),t.currentPage=1})).catch((function(t){}))},search:function(){var t=this;t.number&&r["a"].familySearch(1,10,t.number).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}))},refresh:function(){this.reload()},handleCurrentChange:function(t){var e=this;r["a"].family(t,e.pageSize).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},handleSizeChange:function(t){var e=this;e.pageSize=t,e.number?r["a"].familySearch(e.number).then((function(t){e.tableData=t.data,e.totalPage=t.total,e.currentPage=1})):r["a"].family(1,e.pageSize).then((function(t){e.tableData=t.data,e.totalPage=t.total,e.currentPage=1}))}}},o=s,l=(a("8f29"),a("2877")),u=Object(l["a"])(o,n,i,!1,null,"50d7c1f0",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0e19d22a.4708f0a8.js.map