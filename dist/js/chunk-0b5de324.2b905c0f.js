(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b5de324"],{"003b":function(t,e,a){"use strict";var n=a("e947"),i=a.n(n);i.a},"365c":function(t,e,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),s={students:function(t,e,a){return n["a"].get(r.a.Students,{page:t,limit:e,class_id:a})},choolStu:function(t,e,a){return n["a"].get(r.a.Students,{page:t,limit:e,school_id:a})},student:function(t){return n["a"].post(r.a.Student,t)},delStudent:function(t){return n["a"].del(r.a.DelStudent,{student_id:t})},searchName:function(t,e,a,i){return n["a"].get(r.a.Students,{page:t,limit:e,name:a,number:i})},seekUser:function(t){return n["a"].get(r.a.SeekUser,{keyword:t})},wxUser:function(t,e){return n["a"].get(r.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return n["a"].post(r.a.BindFamily,t)},studentFace:function(t){return n["a"].post(r.a.StudentFace,t)},studentEditFace:function(t){return n["a"].put(r.a.StudentEditFace,t)},failFace:function(t,e){return n["a"].post(r.a.FailFace,{id:t,type:e})},pushFace:function(t,e){return n["a"].post(r.a.PushFace,{id:t,type:e})},pushFace1:function(t,e,a){return n["a"].post(r.a.PushFace,{id:t,type:e,uuid:a})},createFace:function(t){return n["a"].post(r.a.CreateFace,{id:t})},studentServe:function(t){return n["a"].get(r.a.StudentServe,{id:t})},faceLogs:function(t,e,a){return n["a"].get(r.a.StudentFaceLogs,{page:t,limit:e,id:a})},notice:function(t,e){return n["a"].get(r.a.Notice,{page:t,limit:e})},searchNotice:function(t,e){return n["a"].get(r.a.Notice,{grade_id:t,class_id:e})},grade:function(t){return n["a"].post(r.a.Grade,t)},grades:function(t,e){return n["a"].get(r.a.Grades,{page:t,limit:e})},delGrade:function(t){return n["a"].del(r.a.DelGrade,{grade_id:t})},_class:function(t){return n["a"].post(r.a.Class,t)},classes:function(t,e,a){return n["a"].get(r.a.Classes,{page:t,limit:e,grade_id:a})},delClass:function(t){return n["a"].del(r.a.DelClass,{class_id:t})},device:function(t){return n["a"].post(r.a.Device,t)},devices:function(t){return n["a"].post(r.a.Devices,{page:t})},family:function(t,e,a){return n["a"].get(r.a.Family,{page:t,limit:e,number:a})},masterFamily:function(t){return n["a"].put(r.a.MasterFamily,t)},delFamily:function(t){return n["a"].del(r.a.DelFamily,{id:t})},announcement:function(t){return n["a"].get(r.a.Announcement,{page:t})},exam:function(t){return n["a"].post(r.a.Exam,t)},exams:function(t,e){return n["a"].get(r.a.Exams,{page:t,limit:e})},examsDetail:function(t,e,a){return n["a"].get(r.a.ExamsDetail,{page:t,limit:e,exam_id:a})},delExam:function(t){return n["a"].del(r.a.Exam,{id:t})},subjects:function(){return n["a"].get(r.a.Subjects)},importsExam:function(t,e){return n["a"].post(r.a.ImportsExam,{exam_id:t,file:e})},imports:function(t,e,a){return n["a"].get(r.a.Imports,{page:t,limit:e,type:a})},delImport:function(t){return n["a"].del(r.a.DelImport,{id:t})},example:function(t){return n["a"].getExcel(r.a.Export,{subjects:t})},teacher:function(t,e,a,i){return n["a"].get(r.a.Teacher,{page:t,limit:e,state:a,worker:i})},delTeacher:function(t){return n["a"].del(r.a.DelTeacher,{id:t})},audit:function(t){return n["a"].post(r.a.Audit,t)},schools:function(t,e,a,i){return n["a"].get(r.a.Schools,{page:t,limit:e,mode:a,id:i})},oneSchool:function(t){return n["a"].get(r.a.School,{id:t})},studentInfo:function(t,e,a){return n["a"].get(r.a.StudentInfo,{page:t,limit:e,school_id:a})},schoolUser:function(t,e,a){return n["a"].get(r.a.SchoolUser,{page:t,limit:e,school_id:a})},visitors:function(t,e,a){return n["a"].get(r.a.Visitors,{page:t,limit:e,school_id:a})},teacherUser:function(t,e,a){return n["a"].get(r.a.TeacherUser,{page:t,limit:e,school_id:a})},orders:function(t,e,a){return n["a"].get(r.a.Orders,{page:t,limit:e,school_id:a})},server:function(t,e,a){return n["a"].get(r.a.Server,{page:t,limit:e,product_id:a})},schoolTeacher:function(t,e,a){return n["a"].get(r.a.Teacher,{page:t,limit:e,school_id:a})},school:function(t){return n["a"].post(r.a.School,t)},delSchool:function(t){return n["a"].del(r.a.DelSchool,{school_id:t})},pushSchFace:function(t){return n["a"].post(r.a.PushSchFace,{school_id:t})},banners:function(t,e){return n["a"].get(r.a.Banners,{page:t,limit:e})},banner:function(t){return n["a"].post(r.a.Banner,t)},message:function(t){return n["a"].post(r.a.Message,t)},messages:function(t,e){return n["a"].get(r.a.Messages,{page:t,limit:e})},messageType:function(t){return n["a"].post(r.a.MessageType,t)},messageTypes:function(t,e){return n["a"].get(r.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return n["a"].del(r.a.DelDocumentType,{id:t})},documents:function(t,e){return n["a"].get(r.a.Documents,{page:t,limit:e})},delDocument:function(t){return n["a"].del(r.a.DelDocument,{id:t})},document:function(t){return n["a"].post(r.a.Document,t)},documentDel:function(t){return n["a"].del(r.a.DocumentDel,{id:t})},delBanner:function(t){return n["a"].del(r.a.DelBanner,{id:t})},buys:function(t,e){return n["a"].get(r.a.Buys,{page:t,limit:e})},buy:function(t){return n["a"].post(r.a.Buy,t)},delBuy:function(t){return n["a"].del(r.a.Buy,{id:t})},roles:function(t,e){return n["a"].get(r.a.Roles,{page:t,limit:e})},role:function(t){return n["a"].post(r.a.Role,t)},delRole:function(t){return n["a"].del(r.a.DelRole,{id:t})},user:function(t){return n["a"].post(r.a.User,t)},users:function(t,e){return n["a"].get(r.a.Users,{page:t,limit:e})},delUser:function(t){return n["a"].del(r.a.DelUser,{id:t})},resetPassword:function(t){return n["a"].post(r.a.ResetPassword,t)},goods:function(t){return n["a"].get(r.a.Buys,{school_id:t})},setProduct:function(t){return n["a"].post(r.a.SetProduct,t)},banProduct:function(t){return n["a"].post(r.a.BanProduct,t)},banProducts:function(t){return n["a"].get(r.a.BanProducts,{user_id:t})},userSearch:function(t,e){return n["a"].get(r.a.UserSearch,{id:t,nickname:e})},jurisdictionSchool:function(t,e,a,i){return n["a"].get(r.a.JurisdictionSchool,{page:t,limit:e,user_id:a,mode:i})},jurisdictionProducts:function(t){return n["a"].get(r.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return n["a"].get(r.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return n["a"].get(r.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,a,i){return n["a"].get(r.a.StudentGender,{sex:t,type:e,school_id:a,grade_id:i})},classCheckCount:function(t){return n["a"].get(r.a.ClassCheckCount,{id:t})},statistics:function(t,e){return n["a"].get(r.a.Statistics,{school_id:t,grade_id:e})},payTotal:function(t,e){return n["a"].get(r.a.PayTotal,{school_id:t,grade_id:e})},getConfigs:function(){return n["a"].get(r.a.Configs)},delFaceSwitch:function(t){return n["a"].del(r.a.Configs,{id:t})},faceSwitch:function(t){return n["a"].post(r.a.Configs,t)},userOrder:function(t){return n["a"].get(r.a.UserOrder,{user_id:t})},refund:function(t,e){return n["a"].post(r.a.Refund,{id:t,price:e})},gainStuInfo:function(t,e,a){return n["a"].get(r.a.StuInfo,{page:t,limit:e,school_id:a})},serStuInfo:function(t,e,a,i){return n["a"].get(r.a.StuInfo,{page:t,limit:e,name:a,number:i})}};e["a"]=s},7193:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"考试列表",name:"test"}},[a("achievement-test")],1),a("el-tab-pane",{attrs:{label:"导入成绩",name:"into"}},[a("achievement-into")],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogExam=!0}}},[t._v("批量上传成绩单（上传EXCEL文件）")])],1),a("div",{staticClass:"btn"},[a("el-popover",{attrs:{placement:"bottom",width:"400"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("div",{staticStyle:{"margin-bottom":"10px",color:"#2a9f93"}},[t._v("请选择科目生成成绩单示例模板")]),a("div",{staticClass:"permission"},t._l(t.subList,(function(e,n){return a("div",{key:n},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:t.subjects,callback:function(e){t.subjects=e},expression:"subjects"}},[a("el-checkbox",{attrs:{label:t.subList[n]}},[t._v(t._s(t.subList[n]))])],1)],1)})),0),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.downExample}},[t._v("确定")])],1),a("el-button",{attrs:{slot:"reference",type:"warning",icon:"el-icon-download"},slot:"reference"},[t._v("点击下载成绩单示例")])],1)],1)]),a("el-dialog",{attrs:{title:"添加成绩单",visible:t.dialogExam,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogExam=e}}},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择考试场次"},on:{change:t.examOnChange},model:{value:t.test,callback:function(e){t.test=e},expression:"test"}},t._l(t.testList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"https://school.fengniaotuangou.cn/import/exam",data:t.examData,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1,"on-success":t.handleSuccess,headers:t.uploadHeader}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),a("em",[t._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传EXCEL文件")])]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.upload}},[t._v("导入数据")])],1)],1),a("el-table",{staticClass:"aip-table",attrs:{data:t.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"file_name",label:"文件名"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"上传时间"}}),a("el-table-column",{attrs:{prop:"status",label:"导入情况"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("span",[t._v("成功")]):2==e.row.status?a("span",[t._v("失败")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:t.dialogDel,title:"删除成绩表",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDel=e}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("是否删除该成绩表")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:t.toDel}},[t._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogDel=!1}}},[t._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[10,20,30,40,50],"page-size":t.size,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"size-change":t.sizeChange}})],1)],1)},s=[],o=(a("4160"),a("b0c0"),a("159b"),a("365c")),l={name:"studentadd",data:function(){return{loading:!0,dialogDel:!1,dialogExam:!1,id:"",test:"",testList:[],exam_id:"",examList:[],fileList:[],examData:{exam_id:""},visible:!1,subList:[],subjects:[],tableDate:[],current:1,total:0,size:10}},computed:{uploadHeader:function(){return{token:localStorage.getItem("token")}}},mounted:function(){this.getSubjects(),this.getExams(),this.getList(this.current,this.size)},methods:{getList:function(t,e){var a=this;o["a"].imports(t,e,1).then((function(t){a.loading=!1,a.tableDate=t.data,a.total=t.total})).catch((function(t){a.loading=!1}))},currentChange:function(t){var e=this;e.current=t,e.loading=!0,e.getList(t,e.size)},sizeChange:function(t){var e=this;e.size=t,e.loading=!0,e.getList(1,t),e.current=1},examOnChange:function(t){var e=this;e.test=t},getSubjects:function(){var t=this;o["a"].subjects().then((function(e){e.forEach((function(e){t.subList.push(e.name)}))}))},downExample:function(){var t=this;o["a"].example(t.subjects).then((function(t){window.open(t.request.responseURL)}))},getExams:function(){var t=this;o["a"].exams(t.current).then((function(e){t.testList=e.data,e.data.forEach((function(e){t.exam_id=e.id}))}))},handleDel:function(t,e){var a=this;a.id=e.id,a.dialogDel=!0},toDel:function(){var t=this;o["a"].delImport(t.id).then((function(e){t.$message.success("删除成功"),t.dialogDel=!1,t.getList(t.current,t.size)}))},upload:function(){this.examData.exam_id=this.exam_id,this.$refs.upload.submit()},handleRemove:function(t,e){console.log(t,e)},handleSuccess:function(t,e){var a=this;a.dialogExam=!1,a.$message.success("导入成功"),a.getList(a.current,a.size),a.fileList=[],a.test=""}}},u=l,c=(a("ae54"),a("2877")),d=Object(c["a"])(u,r,s,!1,null,"39b0e3c3",null),m=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addTest}},[t._v("添加考试")])],1)]),a("el-dialog",{attrs:{title:"添加考试",visible:t.dialogTest},on:{"update:visible":function(e){t.dialogTest=e}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入标题(例:期中考试)"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.newTest}},[t._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:t.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleDetail(e.$index,e.row)}}},[t._v("考试详情")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[10,20,30,40,50],"page-size":t.size,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"size-change":t.sizeChange}})],1),a("el-dialog",{attrs:{visible:t.dialogDetail,title:"考试详情","close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(e){t.dialogDetail=e}}},[a("el-table",{attrs:{data:t.testDetail,"max-height":"620",border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"grade",label:"年级"}}),a("el-table-column",{attrs:{prop:"class",label:"班级"}}),a("el-table-column",{attrs:{prop:"number",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"学生姓名"}}),a("el-table-column",{attrs:{prop:"score",label:"总分"}}),a("el-table-column",{attrs:{prop:"class_ranking",label:"班级排名"}}),a("el-table-column",{attrs:{prop:"grade_ranking",label:"年级排名"}}),a("el-table-column",{attrs:{prop:"class_advance",label:"班级进退步"}}),a("el-table-column",{attrs:{prop:"grade_advance",label:"年级进退步"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleExam(e.$index,e.row)}}},[t._v("查看各科成绩")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.testDetailCurrent,"page-sizes":[10,20,30,40,50],"page-size":t.testDetailSize,layout:"sizes, prev, pager, next, jumper",total:t.testDetailTotal},on:{"current-change":t.testDetailCurrentChange,"update:currentPage":function(e){t.testDetailCurrent=e},"update:current-page":function(e){t.testDetailCurrent=e},"size-change":t.testDetailSizeChange}})],1)],1),a("el-dialog",{attrs:{visible:t.dialogExam,title:"各科成绩","close-on-click-modal":!1,width:"80%",align:"center"},on:{"update:visible":function(e){t.dialogExam=e}}},[a("table",{staticClass:"table",attrs:{border:"1",width:"1000px",model:t.examList}},[a("tr",{staticClass:"trHeight bg"},t._l(t.examList,(function(e,n){return a("td",{key:n,attrs:{width:"150px"}},[t._v(t._s(e.subject))])})),0),a("tr",{staticClass:"trHeight"},t._l(t.examList,(function(e,n){return a("td",{key:n},[t._v(t._s(e.score))])})),0)])]),a("el-dialog",{attrs:{visible:t.dialogDel,title:"删除资讯",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDel=e}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("是否删除")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:t.toDel}},[t._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogDel=!1}}},[t._v("取消")])],1)])],1)},p=[],f={name:"messagetype",data:function(){return{loading:!0,dialogTest:!1,id:"",dialogDel:!1,dialogDetail:!1,testDetail:[],testDetailCurrent:1,testDetailSize:10,testDetailTotal:0,form:{title:"",time:""},tableDate:[],current:1,size:10,total:0,exam_id:"",dialogExam:!1,examList:[]}},mounted:function(){this.getExams(this.current,this.size)},methods:{getExams:function(t,e){var a=this;o["a"].exams(t,e).then((function(t){a.loading=!1,a.tableDate=t.data,a.total=t.total})).catch((function(t){a.loading=!1}))},currentChange:function(t){var e=this;e.current=t,e.loading=!0,e.getExams(t,e.size)},sizeChange:function(t){var e=this;e.size=t,e.loading=!0,e.getExams(1,t),e.current=1},addTest:function(){var t=this;t.dialogTest=!0,t.form={title:"",time:""}},newTest:function(){var t=this;t.form.title=t.form.time+" "+t.form.title,o["a"].exam(t.form).then((function(e){t.$message.success("提交成功"),t.dialogTest=!1,t.getExams(t.current,t.size),t.form={title:"",time:""}}))},handleDetail:function(t,e){var a=this;a.testDetailCurrent=1,a.testDetailSize=10,a.dialogDetail=!0,a.exam_id=e.id,a.getDetail(a.testDetailCurrent,a.testDetailSize)},getDetail:function(t,e){var a=this;o["a"].examsDetail(t,e,a.exam_id).then((function(t){a.$message.success("获取数据成功"),a.testDetail=t.data,a.testDetailTotal=t.total}))},testDetailCurrentChange:function(t){var e=this;e.testDetailCurrent=t,e.getDetail(t,e.testDetailSize)},testDetailSizeChange:function(t){var e=this;e.testDetailSize=t,e.getDetail(1,t),e.testDetailCurrent=1},handleExam:function(t,e){var a=this;a.dialogExam=!0,a.examList=a.testDetail[t].scores},handleDelete:function(t,e){var a=this;a.dialogDel=!0,a.id=e.id},toDel:function(){var t=this;o["a"].delExam(t.id).then((function(e){t.$message.success("删除成功"),t.dialogDel=!1,t.getExams(t.current,t.size)}))}}},h=f,b=(a("003b"),Object(c["a"])(h,g,p,!1,null,"37181be9",null)),v=b.exports,x={components:{achievementTest:v,achievementInto:m},data:function(){return{activeName:"test"}}},_=x,D=Object(c["a"])(_,n,i,!1,null,null,null);e["default"]=D.exports},ae54:function(t,e,a){"use strict";var n=a("f4d1"),i=a.n(n);i.a},e947:function(t,e,a){},f4d1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0b5de324.2b905c0f.js.map