(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ceb58f7"],{"005c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box",attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{slot:"append",icon:"el-icon-refresh"},on:{click:t.refresh},slot:"append"})],1),"admin"==t.username?a("div",{staticClass:"btn"},[a("span",[t._v("学校：")]),a("el-select",{attrs:{placeholder:"请选择学校"},on:{change:t.changeSchoolType},model:{value:t.school,callback:function(e){t.school=e},expression:"school"}},t._l(t.schoolList,(function(t){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),"admin"==t.username?a("div",{staticClass:"btn"},[a("span",[t._v("年级：")]),a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:t.changeGradeType},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}},t._l(t.gradeList,(function(t){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),"admin"!==t.username?a("div",{staticClass:"btn"},[a("span",[t._v("年级：")]),a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:t.changeGradeType},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}},t._l(t.gradeList,(function(t){return a("el-option",{key:t.index,attrs:{label:t.title,value:t.id}})})),1)],1):t._e()]),a("div",{attrs:{id:"bar-chart"}}),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie-box"},[a("div",{attrs:{id:"pie-chart-user"}}),a("div",{attrs:{id:"pie-chart-student"}})])}],s=(a("4160"),a("b0c0"),a("159b"),a("365c"));a("313e");var o={name:"studentsTatal",inject:["reload"],data:function(){return{isAdmin:!0,school:"",grade:"",loading:!0,schoolList:[],gradeList:[],nameList:[],countList:[],existCount:[],school_id:"",grade_id:"",bar:{title:{text:"学生统计",left:"center"},tooltip:{},legend:{orient:"vertical",data:["总学生数","已注册人数"],left:"right"},xAxis:{data:[]},yAxis:{},series:[],dataZoom:[{type:"inside"}]},pie:{title:{},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:["男生人数","女生人数"]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],label:{normal:{formatter:"{d}%",position:"inside"}},data:[{value:0,name:"男生人数"},{value:0,name:"女生人数"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},title:{user:"用户男女比例",student:"学生男女比例"},username:localStorage.getItem("username")}},methods:{refresh:function(){this.reload()},fucBarUser:function(t,e,a,n){var i=this,o=i.$echarts.init(document.getElementById("pie-chart-user"));s["a"].studentGender(t,e,a,n).then((function(t){o.setOption(i.pie={title:{text:i.title.user,left:"center"},series:[{name:i.title.user,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]}),i.loading=!1}))},fucBarStu:function(t,e,a,n){var i=this,o=i.$echarts.init(document.getElementById("pie-chart-student"));s["a"].studentGender(t,e,a,n).then((function(t){o.setOption(i.pie={title:{text:i.title.student,left:"center"},series:[{name:i.title.student,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]}),i.loading=!1}))},changeSchoolType:function(t){var e=this;e.loading=!0;var a=e.$echarts.init(document.getElementById("bar-chart"));e.nameList=[],e.countList=[],e.existCount=[],e.grade="",e.school_id=t,s["a"].statistics(e.school_id).then((function(t){e.gradeList=t.data,t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)}));var n=6;a.on("click",(function(t){a.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-n/2,0)],endValue:e.nameList[Math.min(t.dataIndex+n/2,e.nameList.length-1)]})})),a.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),e.fucBarUser(0,1,e.school_id),e.fucBarStu(0,2,e.school_id),e.loading=!1}))},changeGradeType:function(t){var e=this;e.loading=!0;var a=e.$echarts.init(document.getElementById("bar-chart"));e.grade_id=t,e.nameList=[],e.countList=[],e.existCount=[];var n=6;a.on("click",(function(t){console.log(e.nameList[Math.max(t.dataIndex-n/2,0)]),a.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-n/2,0)],endValue:e.nameList[Math.min(t.dataIndex+n/2,e.nameList.length-1)]})})),"admin"==e.username?s["a"].statistics(e.school_id,e.grade_id).then((function(t){t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)})),a.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),e.fucBarUser(0,1,e.school_id,e.grade_id),e.fucBarStu(0,2,e.school_id,e.grade_id),e.loading=!1})):s["a"].statistics(0,e.grade_id).then((function(t){t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)})),a.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),e.fucBarUser(0,1,0,e.grade_id),e.fucBarStu(0,2,0,e.grade_id),e.loading=!1}))},getTotal:function(){var t=this,e=t.$echarts.init(document.getElementById("bar-chart")),a=t.$echarts.init(document.getElementById("pie-chart-user")),n=t.$echarts.init(document.getElementById("pie-chart-student"));e.setOption(t.bar),a.setOption(t.pie),n.setOption(t.pie),t.nameList=[],t.countList=[],t.existCount=[],t.gradeList=[],t.school="",t.grade="",t.isAdmin=!0,"admin"==t.username?s["a"].schools(1,1e3).then((function(e){t.schoolList=e.data})):s["a"].grades().then((function(e){t.gradeList=e.data})),s["a"].statistics().then((function(a){a.data.forEach((function(e){t.nameList.push(e.name),t.countList.push(e.count),t.existCount.push(e.exist_count)}));var n=6;e.on("click",(function(a){e.dispatchAction({type:"dataZoom",startValue:t.nameList[Math.max(a.dataIndex-n/2,0)],endValue:t.nameList[Math.min(a.dataIndex+n/2,t.nameList.length-1)]})})),e.setOption(t.bar={xAxis:{data:t.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:t.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:t.existCount}]}),t.loading=!1})),t.fucBarUser(0,1),t.fucBarStu(0,2)}},mounted:function(){this.getTotal()}},r=o,u=(a("0fa8"),a("2877")),c=Object(u["a"])(r,n,i,!1,null,"59c22192",null);e["default"]=c.exports},"0fa8":function(t,e,a){"use strict";var n=a("312e"),i=a.n(n);i.a},"312e":function(t,e,a){},"365c":function(t,e,a){"use strict";var n=a("be3b"),i=a("99b1"),s=a.n(i),o={students:function(t,e,a){return n["a"].get(s.a.Students,{page:t,limit:e,class_id:a})},choolStu:function(t,e,a){return n["a"].get(s.a.Students,{page:t,limit:e,school_id:a})},student:function(t){return n["a"].post(s.a.Student,t)},delStudent:function(t){return n["a"].del(s.a.DelStudent,{student_id:t})},searchName:function(t,e,a,i){return n["a"].get(s.a.Students,{page:t,limit:e,name:a,number:i})},seekUser:function(t){return n["a"].get(s.a.SeekUser,{keyword:t})},wxUser:function(t,e){return n["a"].get(s.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return n["a"].post(s.a.BindFamily,t)},studentFace:function(t){return n["a"].post(s.a.StudentFace,t)},studentEditFace:function(t){return n["a"].put(s.a.StudentEditFace,t)},failFace:function(t,e){return n["a"].post(s.a.FailFace,{id:t,type:e})},pushFace:function(t,e){return n["a"].post(s.a.PushFace,{id:t,type:e})},pushFace1:function(t,e,a){return n["a"].post(s.a.PushFace,{id:t,type:e,uuid:a})},createFace:function(t){return n["a"].post(s.a.CreateFace,{id:t})},studentServe:function(t){return n["a"].get(s.a.StudentServe,{id:t})},faceLogs:function(t,e,a){return n["a"].get(s.a.StudentFaceLogs,{page:t,limit:e,id:a})},notice:function(t,e){return n["a"].get(s.a.Notice,{page:t,limit:e})},searchNotice:function(t,e){return n["a"].get(s.a.Notice,{grade_id:t,class_id:e})},grade:function(t){return n["a"].post(s.a.Grade,t)},grades:function(t,e){return n["a"].get(s.a.Grades,{page:t,limit:e})},delGrade:function(t){return n["a"].del(s.a.DelGrade,{grade_id:t})},_class:function(t){return n["a"].post(s.a.Class,t)},classes:function(t,e,a){return n["a"].get(s.a.Classes,{page:t,limit:e,grade_id:a})},delClass:function(t){return n["a"].del(s.a.DelClass,{class_id:t})},device:function(t){return n["a"].post(s.a.Device,t)},devices:function(t){return n["a"].post(s.a.Devices,{page:t})},family:function(t,e,a){return n["a"].get(s.a.Family,{page:t,limit:e,number:a})},masterFamily:function(t){return n["a"].put(s.a.MasterFamily,t)},delFamily:function(t){return n["a"].del(s.a.DelFamily,{id:t})},announcement:function(t){return n["a"].get(s.a.Announcement,{page:t})},exam:function(t){return n["a"].post(s.a.Exam,t)},exams:function(t,e){return n["a"].get(s.a.Exams,{page:t,limit:e})},examsDetail:function(t,e,a){return n["a"].get(s.a.ExamsDetail,{page:t,limit:e,exam_id:a})},delExam:function(t){return n["a"].del(s.a.Exam,{id:t})},subjects:function(){return n["a"].get(s.a.Subjects)},importsExam:function(t,e){return n["a"].post(s.a.ImportsExam,{exam_id:t,file:e})},imports:function(t,e,a){return n["a"].get(s.a.Imports,{page:t,limit:e,type:a})},delImport:function(t){return n["a"].del(s.a.DelImport,{id:t})},example:function(t){return n["a"].getExcel(s.a.Export,{subjects:t})},teacher:function(t,e,a,i){return n["a"].get(s.a.Teacher,{page:t,limit:e,state:a,worker:i})},delTeacher:function(t){return n["a"].del(s.a.DelTeacher,{id:t})},audit:function(t){return n["a"].post(s.a.Audit,t)},schools:function(t,e,a,i){return n["a"].get(s.a.Schools,{page:t,limit:e,mode:a,id:i})},oneSchool:function(t){return n["a"].get(s.a.School,{id:t})},studentInfo:function(t,e,a){return n["a"].get(s.a.StudentInfo,{page:t,limit:e,school_id:a})},schoolUser:function(t,e,a){return n["a"].get(s.a.SchoolUser,{page:t,limit:e,school_id:a})},schoolAddresses:function(t,e){return n["a"].get(s.a.SchoolAddresses,{page:t,limit:e})},visitors:function(t,e,a){return n["a"].get(s.a.Visitors,{page:t,limit:e,school_id:a})},teacherUser:function(t,e,a){return n["a"].get(s.a.TeacherUser,{page:t,limit:e,school_id:a})},orders:function(t,e,a){return n["a"].get(s.a.Orders,{page:t,limit:e,school_id:a})},server:function(t,e,a){return n["a"].get(s.a.Server,{page:t,limit:e,product_id:a})},schoolTeacher:function(t,e,a){return n["a"].get(s.a.Teacher,{page:t,limit:e,school_id:a})},school:function(t){return n["a"].post(s.a.School,t)},delSchool:function(t){return n["a"].del(s.a.DelSchool,{school_id:t})},pushSchFace:function(t){return n["a"].post(s.a.PushSchFace,{school_id:t})},banners:function(t,e){return n["a"].get(s.a.Banners,{page:t,limit:e})},banner:function(t){return n["a"].post(s.a.Banner,t)},message:function(t){return n["a"].post(s.a.Message,t)},messages:function(t,e){return n["a"].get(s.a.Messages,{page:t,limit:e})},messageType:function(t){return n["a"].post(s.a.MessageType,t)},messageTypes:function(t,e){return n["a"].get(s.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return n["a"].del(s.a.DelDocumentType,{id:t})},documents:function(t,e){return n["a"].get(s.a.Documents,{page:t,limit:e})},delDocument:function(t){return n["a"].del(s.a.DelDocument,{id:t})},document:function(t){return n["a"].post(s.a.Document,t)},documentDel:function(t){return n["a"].del(s.a.DocumentDel,{id:t})},delBanner:function(t){return n["a"].del(s.a.DelBanner,{id:t})},buys:function(t,e){return n["a"].get(s.a.Buys,{page:t,limit:e})},buy:function(t){return n["a"].post(s.a.Buy,t)},delBuy:function(t){return n["a"].del(s.a.Buy,{id:t})},roles:function(t,e){return n["a"].get(s.a.Roles,{page:t,limit:e})},role:function(t){return n["a"].post(s.a.Role,t)},delRole:function(t){return n["a"].del(s.a.DelRole,{id:t})},user:function(t){return n["a"].post(s.a.User,t)},users:function(t,e){return n["a"].get(s.a.Users,{page:t,limit:e})},delUser:function(t){return n["a"].del(s.a.DelUser,{id:t})},resetPassword:function(t){return n["a"].post(s.a.ResetPassword,t)},goods:function(t){return n["a"].get(s.a.Buys,{school_id:t})},setProduct:function(t){return n["a"].post(s.a.SetProduct,t)},banProduct:function(t){return n["a"].post(s.a.BanProduct,t)},banProducts:function(t){return n["a"].get(s.a.BanProducts,{user_id:t})},userSearch:function(t,e){return n["a"].get(s.a.UserSearch,{id:t,nickname:e})},jurisdictionSchool:function(t,e,a,i){return n["a"].get(s.a.JurisdictionSchool,{page:t,limit:e,user_id:a,mode:i})},jurisdictionProducts:function(t){return n["a"].get(s.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return n["a"].get(s.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return n["a"].get(s.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,a,i){return n["a"].get(s.a.StudentGender,{sex:t,type:e,school_id:a,grade_id:i})},classCheckCount:function(t){return n["a"].get(s.a.ClassCheckCount,{id:t})},statistics:function(t,e){return n["a"].get(s.a.Statistics,{school_id:t,grade_id:e})},payTotal:function(t,e){return n["a"].get(s.a.PayTotal,{school_id:t,grade_id:e})},getConfigs:function(){return n["a"].get(s.a.Configs)},delFaceSwitch:function(t){return n["a"].del(s.a.Configs,{id:t})},faceSwitch:function(t){return n["a"].post(s.a.Configs,t)},userOrder:function(t){return n["a"].get(s.a.UserOrder,{user_id:t})},refund:function(t,e){return n["a"].post(s.a.Refund,{id:t,price:e})},gainStuInfo:function(t,e,a){return n["a"].get(s.a.StuInfo,{page:t,limit:e,school_id:a})},serStuInfo:function(t,e,a,i){return n["a"].get(s.a.StuInfo,{page:t,limit:e,name:a,number:i})},pushGradeFace:function(t){return n["a"].post(s.a.PushGradeFace,{grade_id:t})},pushClassFace:function(t){return n["a"].post(s.a.PushClassFace,{class_id:t})}};e["a"]=o}}]);
//# sourceMappingURL=chunk-2ceb58f7.1d9790be.js.map