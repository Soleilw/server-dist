(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f2e27f"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),r=a("99b1"),i=a.n(r),o={students:function(e,t,a){return n["a"].get(i.a.Students,{page:e,limit:t,class_id:a})},choolStu:function(e,t,a){return n["a"].get(i.a.Students,{page:e,limit:t,school_id:a})},student:function(e){return n["a"].post(i.a.Student,e)},delStudent:function(e){return n["a"].del(i.a.DelStudent,{student_id:e})},searchName:function(e,t,a,r){return n["a"].get(i.a.Students,{page:e,limit:t,name:a,number:r})},seekUser:function(e){return n["a"].get(i.a.SeekUser,{keyword:e})},wxUser:function(e,t){return n["a"].get(i.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(i.a.BindFamily,e)},studentFace:function(e){return n["a"].post(i.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(i.a.StudentEditFace,e)},failFace:function(e,t){return n["a"].post(i.a.FailFace,{id:e,type:t})},pushFace:function(e,t){return n["a"].post(i.a.PushFace,{id:e,type:t})},pushFace1:function(e,t,a){return n["a"].post(i.a.PushFace,{id:e,type:t,uuid:a})},createFace:function(e){return n["a"].post(i.a.CreateFace,{id:e})},studentServe:function(e){return n["a"].get(i.a.StudentServe,{id:e})},faceLogs:function(e,t,a){return n["a"].get(i.a.StudentFaceLogs,{page:e,limit:t,id:a})},notice:function(e,t){return n["a"].get(i.a.Notice,{page:e,limit:t})},searchNotice:function(e,t){return n["a"].get(i.a.Notice,{grade_id:e,class_id:t})},grade:function(e){return n["a"].post(i.a.Grade,e)},grades:function(e,t){return n["a"].get(i.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(i.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(i.a.Class,e)},classes:function(e,t,a){return n["a"].get(i.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(i.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(i.a.Device,e)},devices:function(e){return n["a"].post(i.a.Devices,{page:e})},family:function(e,t,a){return n["a"].get(i.a.Family,{page:e,limit:t,number:a})},masterFamily:function(e){return n["a"].put(i.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(i.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(i.a.Announcement,{page:e})},exam:function(e){return n["a"].post(i.a.Exam,e)},exams:function(e,t){return n["a"].get(i.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,a){return n["a"].get(i.a.ExamsDetail,{page:e,limit:t,exam_id:a})},delExam:function(e){return n["a"].del(i.a.Exam,{id:e})},subjects:function(){return n["a"].get(i.a.Subjects)},importsExam:function(e,t){return n["a"].post(i.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t,a){return n["a"].get(i.a.Imports,{page:e,limit:t,type:a})},delImport:function(e){return n["a"].del(i.a.DelImport,{id:e})},example:function(e){return n["a"].getExcel(i.a.Export,{subjects:e})},teacher:function(e,t,a,r){return n["a"].get(i.a.Teacher,{page:e,limit:t,state:a,worker:r})},delTeacher:function(e){return n["a"].del(i.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(i.a.Audit,e)},schools:function(e,t,a,r){return n["a"].get(i.a.Schools,{page:e,limit:t,mode:a,id:r})},oneSchool:function(e){return n["a"].get(i.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(i.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(i.a.SchoolUser,{page:e,limit:t,school_id:a})},schoolAddresses:function(e,t){return n["a"].get(i.a.SchoolAddresses,{page:e,limit:t})},visitors:function(e,t,a){return n["a"].get(i.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(i.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(i.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(i.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(i.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(i.a.School,e)},delSchool:function(e){return n["a"].del(i.a.DelSchool,{school_id:e})},pushSchFace:function(e){return n["a"].post(i.a.PushSchFace,{school_id:e})},banners:function(e,t){return n["a"].get(i.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(i.a.Banner,e)},message:function(e){return n["a"].post(i.a.Message,e)},messages:function(e,t){return n["a"].get(i.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(i.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(i.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(i.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(i.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(i.a.DelDocument,{id:e})},document:function(e){return n["a"].post(i.a.Document,e)},documentDel:function(e){return n["a"].del(i.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(i.a.DelBanner,{id:e})},buys:function(e,t){return n["a"].get(i.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(i.a.Buy,e)},delBuy:function(e){return n["a"].del(i.a.Buy,{id:e})},roles:function(e,t){return n["a"].get(i.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(i.a.Role,e)},delRole:function(e){return n["a"].del(i.a.DelRole,{id:e})},user:function(e){return n["a"].post(i.a.User,e)},users:function(e,t){return n["a"].get(i.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(i.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(i.a.ResetPassword,e)},goods:function(e){return n["a"].get(i.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(i.a.SetProduct,e)},banProduct:function(e){return n["a"].post(i.a.BanProduct,e)},banProducts:function(e){return n["a"].get(i.a.BanProducts,{user_id:e})},userSearch:function(e,t){return n["a"].get(i.a.UserSearch,{id:e,nickname:t})},jurisdictionSchool:function(e,t,a,r){return n["a"].get(i.a.JurisdictionSchool,{page:e,limit:t,user_id:a,mode:r})},jurisdictionProducts:function(e){return n["a"].get(i.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(i.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(i.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,r){return n["a"].get(i.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:r})},classCheckCount:function(e){return n["a"].get(i.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(i.a.Statistics,{school_id:e,grade_id:t})},payTotal:function(e,t){return n["a"].get(i.a.PayTotal,{school_id:e,grade_id:t})},getConfigs:function(){return n["a"].get(i.a.Configs)},delFaceSwitch:function(e){return n["a"].del(i.a.Configs,{id:e})},faceSwitch:function(e){return n["a"].post(i.a.Configs,e)},userOrder:function(e){return n["a"].get(i.a.UserOrder,{user_id:e})},refund:function(e,t){return n["a"].post(i.a.Refund,{id:e,price:t})},gainStuInfo:function(e,t,a){return n["a"].get(i.a.StuInfo,{page:e,limit:t,school_id:a})},serStuInfo:function(e,t,a,r){return n["a"].get(i.a.StuInfo,{page:e,limit:t,name:a,number:r})},pushGradeFace:function(e){return n["a"].post(i.a.PushGradeFace,{grade_id:e})},pushClassFace:function(e){return n["a"].post(i.a.PushClassFace,{class_id:e})}};t["a"]=o},"6fc2":function(e,t,a){},"84f0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入学生学号/姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.student)}},model:{value:e.student,callback:function(t){e.student=t},expression:"student"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择搜索方式"},on:{change:e.changeType},slot:"prepend",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.student)}},slot:"append"})],1)],1),a("div",{staticClass:"btn"},[e._v(" 按学校筛选学生: "),a("el-select",{attrs:{placeholder:"请选择学校"},on:{change:e.selcScl},model:{value:e.school_name,callback:function(t){e.school_name=t},expression:"school_name"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"number",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"patriarch_count",label:"家长数量"}}),a("el-table-column",{attrs:{prop:"state",label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("未提交")]):2==t.row.state?a("span",[e._v("待审核")]):3==t.row.state?a("span",[e._v("审核通过")]):4==t.row.state?a("span",[e._v("审核未通过")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"products",label:"是否购买服务"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.products?a("span",[e._v("已购买服务")]):2==t.row.products?a("span",[e._v("未购买服务")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸信息"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face_image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face_image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFamily(t.$index,t.row)}}},[e._v("家长信息")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleRecord(t.$index,t.row)}}},[e._v("消息推送记录")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogFamily,title:"家长信息","close-on-click-modal":!1,width:"80%",align:"center"},on:{"update:visible":function(t){e.dialogFamily=t}}},[a("el-table",{attrs:{data:e.tableList,"max-height":"620",border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"student_id",label:"学生ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),a("el-table-column",{attrs:{prop:"accredit",label:"是否授权"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.accredit?a("span",[e._v("已授权")]):2==t.row.accredit?a("span",[e._v("未授权")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"master",label:"家长性质"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.master?a("span",[e._v("默认家长")]):2==t.row.master?a("span",[e._v("家庭成员")]):e._e()]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialogRecord,title:"消息推送记录","close-on-click-modal":!1,width:"80%",align:"center"},on:{"update:visible":function(t){e.dialogRecord=t}}},[a("el-table",{attrs:{data:e.recordList.slice((e.currentRec-1)*e.recSize,e.currentRec*e.recSize),"max-height":"620",border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"student_id",label:"学生ID"}}),a("el-table-column",{attrs:{prop:"remark",label:"推送内容"}}),a("el-table-column",{attrs:{prop:"state",label:"消息推送状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("待推送")]):2==t.row.state?a("span",[e._v("推送成功")]):3==t.row.state?a("span",[e._v("推送失败")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentRec,"page-sizes":[10,20,30,40,50],"page-size":e.recSize,layout:"sizes, prev, pager, next, jumper",total:e.recTotal},on:{"current-change":e.recCurrentChange,"update:currentPage":function(t){e.currentRec=t},"update:current-page":function(t){e.currentRec=t},"size-change":e.recSizeChange}})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,30,40,50],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},r=[],i=a("365c"),o={data:function(){return{loading:!0,tableData:[],dialogFamily:!1,dialogRecord:!1,tableList:[],stuInfo:{name:"",number:""},current:1,size:10,total:0,type:2,typeList:[{value:1,label:"按学生学号搜索"},{value:2,label:"按学生姓名搜索"}],student:"",recordList:[],school_name:"",schoolList:[],currentRec:1,recSize:10,recTotal:0}},mounted:function(){this.getInfo(this.current,this.size),this.getScl()},methods:{getInfo:function(e,t,a){var n=this;i["a"].gainStuInfo(e,t,a).then((function(e){n.loading=!1,n.tableData=e.data,n.total=e.total})).catch((function(e){n.loading=!1}))},currentChange:function(e){var t=this;if(t.current=e,t.loading=!0,t.student)switch(t.type){case 1:var a=t.student;t.fucSearch(e,t.size,n,a);break;case 2:var n=t.student;t.fucSearch(e,t.size,n,a);break}else t.school_id?t.getInfo(e,t.size,t.school_id):t.getInfo(e,t.size)},sizeChange:function(e){var t=this;if(t.size=e,t.loading=!0,t.student)switch(t.type){case 1:var a=t.student;t.fucSearch(1,e,n,a);break;case 2:var n=t.student;t.fucSearch(1,e,n,a);break}else t.school_id?t.getInfo(1,e,t.school_id):t.getInfo(1,e);t.current=1},changeType:function(e){var t=this;t.typeDisabled=!0,t.student=""},fucSearch:function(e,t,a,n){var r=this;i["a"].serStuInfo(e,t,a,n).then((function(e){r.loading=!1,r.$message.success("搜索成功！"),r.tableData=e.data,r.total=e.total}))},search:function(){var e=this;switch(e.loading=!0,e.school_id="",e.current=1,e.type){case 1:var t=e.student;e.fucSearch(e.current,e.size,a,t);break;case 2:var a=e.student;e.fucSearch(e.current,e.size,a,t);break}},getScl:function(){var e=this;i["a"].schools(1,1e3).then((function(t){e.schoolList=t.data}))},selcScl:function(e){var t=this;console.log(e),t.school_id=e,t.loading=!0,t.student="",t.getInfo(t.current,t.size,t.school_id)},handleFamily:function(e,t){var a=this;a.dialogFamily=!0,a.tableList=a.tableData[e].patriarch},handleRecord:function(e,t){var a=this;a.currentRec=1,a.dialogRecord=!0,a.recordList=a.tableData[e].access,a.recTotal=a.recordList.length},recCurrentChange:function(e){var t=this;t.currentRec=e,t.$message.success("切换成功! ")},recSizeChange:function(e){var t=this;t.recSize=e,t.$message.success("切换成功! ")}}},c=o,s=(a("fbc2"),a("2877")),u=Object(s["a"])(c,n,r,!1,null,"56c0eb59",null);t["default"]=u.exports},fbc2:function(e,t,a){"use strict";var n=a("6fc2"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-18f2e27f.e0377773.js.map