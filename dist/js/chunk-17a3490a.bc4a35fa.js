(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a3490a"],{"0cd8":function(t,e,a){"use strict";var n=a("ad5a"),i=a.n(n);i.a},"1bd0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{slot:"append",icon:"el-icon-refresh"},on:{click:t.refresh},slot:"append"})],1),a("div",{staticClass:"btn"},[a("span",[t._v("学校：")]),a("el-select",{attrs:{placeholder:"请选择学校"},on:{change:t.changeSchoolType},model:{value:t.school,callback:function(e){t.school=e},expression:"school"}},t._l(t.schoolList,(function(t){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1),a("div",{staticClass:"btn"},[a("span",[t._v("年级：")]),a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:t.changeGradeType},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}},t._l(t.gradeList,(function(t){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1)]),a("div",{attrs:{id:"bar-chart"}}),a("div",{attrs:{id:"bar-chart1"}})])},i=[],o=(a("4160"),a("b0c0"),a("159b"),a("365c"));a("313e");var s={inject:["reload"],data:function(){return{school:"",grade:"",schoolList:[],gradeList:[],school_id:"",grade_id:"",bar:{title:{text:"收费统计",left:"center"},tooltip:{},legend:{orient:"vertical",data:["学生总数","缴费总数"],left:"right"},xAxis:{data:[]},yAxis:{},series:[],dataZoom:[{type:"inside"}]},bar1:{title:{text:"收费统计",left:"center"},tooltip:{},legend:{orient:"vertical",data:["缴费一年人数","缴费两年人数"],left:"right"},xAxis:{data:[]},yAxis:{},series:[],dataZoom:[{type:"inside"}]},nameList:[],oneYear:[],twoYear:[],studentList:[],payList:[]}},mounted:function(){this.getSchool(),this.getTotal()},methods:{refresh:function(){this.reload()},getSchool:function(){var t=this;o["a"].schools(1,1e3).then((function(e){t.schoolList=e.data}))},getTotal:function(){var t=this,e=document.getElementById("bar-chart"),n=document.getElementById("bar-chart1"),i=a("313e").init(e),s=a("313e").init(n);i.setOption(t.bar),s.setOption(t.bar1),o["a"].payTotal().then((function(e){console.log(e),e.forEach((function(e){t.nameList.push(e.name),t.oneYear.push(e.count_48),t.twoYear.push(e.count_92),t.studentList.push(e.student_count),t.payList.push(e.count)}));var a=6;i.on("click",(function(e){console.log(t.nameList[Math.max(e.dataIndex-a/2,0)]),i.dispatchAction({type:"dataZoom",startValue:t.nameList[Math.max(e.dataIndex-a/2,0)],endValue:t.nameList[Math.min(e.dataIndex+a/2,t.nameList.length-1)]})})),s.on("click",(function(e){console.log(t.nameList[Math.max(e.dataIndex-a/2,0)]),s.dispatchAction({type:"dataZoom",startValue:t.nameList[Math.max(e.dataIndex-a/2,0)],endValue:t.nameList[Math.min(e.dataIndex+a/2,t.nameList.length-1)]})})),i.setOption(t.bar={xAxis:{data:t.nameList},series:[{name:"学生总数",type:"bar",label:{show:!0,position:"inside"},data:t.studentList},{name:"缴费总数",type:"bar",label:{show:!0,position:"inside"},data:t.payList}]}),s.setOption(t.bar1={xAxis:{data:t.nameList},series:[{name:"缴费一年人数",type:"bar",label:{show:!0,position:"inside"},data:t.oneYear},{name:"缴费两年人数",type:"bar",label:{show:!0,position:"inside"},data:t.twoYear}]})}))},changeSchoolType:function(t){var e=this;e.school_id=t;var n=document.getElementById("bar-chart"),i=document.getElementById("bar-chart1"),s=a("313e").init(n),r=a("313e").init(i);e.nameList=[],e.oneYear=[],e.twoYear=[],e.studentList=[],e.payList=[],s.setOption(e.bar),r.setOption(e.bar1),o["a"].statistics(e.school_id).then((function(t){e.gradeList=t.data})),o["a"].payTotal(e.school_id).then((function(t){console.log(1,t),t.forEach((function(t){e.nameList.push(t.name),e.oneYear.push(t.count_48),e.twoYear.push(t.count_92),e.studentList.push(t.student_count),e.payList.push(t.count)}));var a=6;s.on("click",(function(t){console.log(e.nameList[Math.max(t.dataIndex-a/2,0)]),s.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-a/2,0)],endValue:e.nameList[Math.min(t.dataIndex+a/2,e.nameList.length-1)]})})),r.on("click",(function(t){console.log(e.nameList[Math.max(t.dataIndex-a/2,0)]),r.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-a/2,0)],endValue:e.nameList[Math.min(t.dataIndex+a/2,e.nameList.length-1)]})})),s.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"学生总数",type:"bar",label:{show:!0,position:"inside"},data:e.studentList},{name:"缴费总数",type:"bar",label:{show:!0,position:"inside"},data:e.payList}]}),r.setOption(e.bar1={xAxis:{data:e.nameList},series:[{name:"缴费一年人数",type:"bar",label:{show:!0,position:"inside"},data:e.oneYear},{name:"缴费两年人数",type:"bar",label:{show:!0,position:"inside"},data:e.twoYear}]})}))},changeGradeType:function(t){var e=this;e.grade_id=t;var n=document.getElementById("bar-chart"),i=document.getElementById("bar-chart1"),s=a("313e").init(n),r=a("313e").init(i);e.nameList=[],e.oneYear=[],e.twoYear=[],e.studentList=[],e.payList=[],s.setOption(e.bar),r.setOption(e.bar1),o["a"].payTotal(e.school_id,e.grade_id).then((function(t){console.log(2,t),t.forEach((function(t){e.nameList.push(t.name),e.oneYear.push(t.count_48),e.twoYear.push(t.count_92),e.studentList.push(t.student_count),e.payList.push(t.count)}));var a=6;s.on("click",(function(t){console.log(e.nameList[Math.max(t.dataIndex-a/2,0)]),r.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-a/2,0)],endValue:e.nameList[Math.min(t.dataIndex+a/2,e.nameList.length-1)]})})),r.on("click",(function(t){console.log(e.nameList[Math.max(t.dataIndex-a/2,0)]),r.dispatchAction({type:"dataZoom",startValue:e.nameList[Math.max(t.dataIndex-a/2,0)],endValue:e.nameList[Math.min(t.dataIndex+a/2,e.nameList.length-1)]})})),s.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"学生总数",type:"bar",label:{show:!0,position:"inside"},data:e.studentList},{name:"缴费总数",type:"bar",label:{show:!0,position:"inside"},data:e.payList}]}),r.setOption(e.bar1={xAxis:{data:e.nameList},series:[{name:"缴费一年人数",type:"bar",label:{show:!0,position:"inside"},data:e.oneYear},{name:"缴费两年人数",type:"bar",label:{show:!0,position:"inside"},data:e.twoYear}]})}))}}},r=s,u=(a("0cd8"),a("2877")),c=Object(u["a"])(r,n,i,!1,null,"e0f49522",null);e["default"]=c.exports},"365c":function(t,e,a){"use strict";var n=a("be3b"),i=a("99b1"),o=a.n(i),s={students:function(t,e,a){return n["a"].get(o.a.Students,{page:t,limit:e,class_id:a})},choolStu:function(t,e,a){return n["a"].get(o.a.Students,{page:t,limit:e,school_id:a})},student:function(t){return n["a"].post(o.a.Student,t)},delStudent:function(t){return n["a"].del(o.a.DelStudent,{student_id:t})},searchName:function(t,e,a,i){return n["a"].get(o.a.Students,{page:t,limit:e,name:a,number:i})},seekUser:function(t){return n["a"].get(o.a.SeekUser,{keyword:t})},wxUser:function(t,e){return n["a"].get(o.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return n["a"].post(o.a.BindFamily,t)},familySearch:function(t,e,a){return n["a"].get(o.a.FamilySearch,{page:t,limit:e,number:a})},studentFace:function(t){return n["a"].post(o.a.StudentFace,t)},studentEditFace:function(t){return n["a"].put(o.a.StudentEditFace,t)},failFace:function(t,e){return n["a"].post(o.a.FailFace,{id:t,type:e})},pushFace:function(t,e){return n["a"].post(o.a.PushFace,{id:t,type:e})},pushFace1:function(t,e,a){return n["a"].post(o.a.PushFace,{id:t,type:e,uuid:a})},createFace:function(t){return n["a"].post(o.a.CreateFace,{id:t})},studentServe:function(t){return n["a"].get(o.a.StudentServe,{id:t})},faceLogs:function(t,e,a){return n["a"].get(o.a.StudentFaceLogs,{page:t,limit:e,id:a})},notice:function(t,e){return n["a"].get(o.a.Notice,{page:t,limit:e})},searchNotice:function(t,e){return n["a"].get(o.a.Notice,{grade_id:t,class_id:e})},grade:function(t){return n["a"].post(o.a.Grade,t)},grades:function(t,e){return n["a"].get(o.a.Grades,{page:t,limit:e})},delGrade:function(t){return n["a"].del(o.a.DelGrade,{grade_id:t})},_class:function(t){return n["a"].post(o.a.Class,t)},classes:function(t,e,a){return n["a"].get(o.a.Classes,{page:t,limit:e,grade_id:a})},delClass:function(t){return n["a"].del(o.a.DelClass,{class_id:t})},device:function(t){return n["a"].post(o.a.Device,t)},devices:function(t){return n["a"].post(o.a.Devices,{page:t})},family:function(t,e){return n["a"].get(o.a.Family,{page:t,limit:e})},masterFamily:function(t){return n["a"].put(o.a.MasterFamily,t)},delFamily:function(t){return n["a"].del(o.a.DelFamily,{id:t})},announcement:function(t){return n["a"].get(o.a.Announcement,{page:t})},exam:function(t){return n["a"].post(o.a.Exam,t)},exams:function(t,e){return n["a"].get(o.a.Exams,{page:t,limit:e})},examsDetail:function(t,e,a){return n["a"].get(o.a.ExamsDetail,{page:t,limit:e,exam_id:a})},delExam:function(t){return n["a"].del(o.a.Exam,{id:t})},subjects:function(){return n["a"].get(o.a.Subjects)},importsExam:function(t,e){return n["a"].post(o.a.ImportsExam,{exam_id:t,file:e})},imports:function(t,e,a){return n["a"].get(o.a.Imports,{page:t,limit:e,type:a})},delImport:function(t){return n["a"].del(o.a.DelImport,{id:t})},example:function(t){return n["a"].getExcel(o.a.Export,{subjects:t})},teacher:function(t,e,a,i){return n["a"].get(o.a.Teacher,{page:t,limit:e,state:a,worker:i})},delTeacher:function(t){return n["a"].del(o.a.DelTeacher,{id:t})},audit:function(t){return n["a"].post(o.a.Audit,t)},schools:function(t,e,a,i){return n["a"].get(o.a.Schools,{page:t,limit:e,mode:a,id:i})},oneSchool:function(t){return n["a"].get(o.a.School,{id:t})},studentInfo:function(t,e,a){return n["a"].get(o.a.StudentInfo,{page:t,limit:e,school_id:a})},schoolUser:function(t,e,a){return n["a"].get(o.a.SchoolUser,{page:t,limit:e,school_id:a})},visitors:function(t,e,a){return n["a"].get(o.a.Visitors,{page:t,limit:e,school_id:a})},teacherUser:function(t,e,a){return n["a"].get(o.a.TeacherUser,{page:t,limit:e,school_id:a})},orders:function(t,e,a){return n["a"].get(o.a.Orders,{page:t,limit:e,school_id:a})},server:function(t,e,a){return n["a"].get(o.a.Server,{page:t,limit:e,product_id:a})},schoolTeacher:function(t,e,a){return n["a"].get(o.a.Teacher,{page:t,limit:e,school_id:a})},school:function(t){return n["a"].post(o.a.School,t)},delSchool:function(t){return n["a"].del(o.a.DelSchool,{school_id:t})},pushSchFace:function(t){return n["a"].post(o.a.PushSchFace,{school_id:t})},banners:function(t,e){return n["a"].get(o.a.Banners,{page:t,limit:e})},banner:function(t){return n["a"].post(o.a.Banner,t)},message:function(t){return n["a"].post(o.a.Message,t)},messages:function(t,e){return n["a"].get(o.a.Messages,{page:t,limit:e})},messageType:function(t){return n["a"].post(o.a.MessageType,t)},messageTypes:function(t,e){return n["a"].get(o.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return n["a"].del(o.a.DelDocumentType,{id:t})},documents:function(t,e){return n["a"].get(o.a.Documents,{page:t,limit:e})},delDocument:function(t){return n["a"].del(o.a.DelDocument,{id:t})},document:function(t){return n["a"].post(o.a.Document,t)},documentDel:function(t){return n["a"].del(o.a.DocumentDel,{id:t})},delBanner:function(t){return n["a"].del(o.a.DelBanner,{id:t})},buys:function(t,e){return n["a"].get(o.a.Buys,{page:t,limit:e})},buy:function(t){return n["a"].post(o.a.Buy,t)},delBuy:function(t){return n["a"].del(o.a.Buy,{id:t})},roles:function(t,e){return n["a"].get(o.a.Roles,{page:t,limit:e})},role:function(t){return n["a"].post(o.a.Role,t)},delRole:function(t){return n["a"].del(o.a.DelRole,{id:t})},user:function(t){return n["a"].post(o.a.User,t)},users:function(t,e){return n["a"].get(o.a.Users,{page:t,limit:e})},delUser:function(t){return n["a"].del(o.a.DelUser,{id:t})},resetPassword:function(t){return n["a"].post(o.a.ResetPassword,t)},goods:function(t){return n["a"].get(o.a.Buys,{school_id:t})},setProduct:function(t){return n["a"].post(o.a.SetProduct,t)},banProduct:function(t){return n["a"].post(o.a.BanProduct,t)},banProducts:function(t){return n["a"].get(o.a.BanProducts,{user_id:t})},userSearch:function(t,e){return n["a"].get(o.a.UserSearch,{id:t,nickname:e})},jurisdictionSchool:function(t,e,a,i){return n["a"].get(o.a.JurisdictionSchool,{page:t,limit:e,user_id:a,mode:i})},jurisdictionProducts:function(t){return n["a"].get(o.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return n["a"].get(o.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return n["a"].get(o.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,a,i){return n["a"].get(o.a.StudentGender,{sex:t,type:e,school_id:a,grade_id:i})},classCheckCount:function(t){return n["a"].get(o.a.ClassCheckCount,{id:t})},statistics:function(t,e){return n["a"].get(o.a.Statistics,{school_id:t,grade_id:e})},payTotal:function(t,e){return n["a"].get(o.a.PayTotal,{school_id:t,grade_id:e})},getConfigs:function(){return n["a"].get(o.a.Configs)},delFaceSwitch:function(t){return n["a"].del(o.a.Configs,{id:t})},faceSwitch:function(t){return n["a"].post(o.a.Configs,t)},userOrder:function(t){return n["a"].get(o.a.UserOrder,{user_id:t})},refund:function(t,e){return n["a"].post(o.a.Refund,{id:t,price:e})},gainStuInfo:function(t,e,a){return n["a"].get(o.a.StuInfo,{page:t,limit:e,school_id:a})},serStuInfo:function(t,e,a,i){return n["a"].get(o.a.StuInfo,{page:t,limit:e,name:a,number:i})}};e["a"]=s},ad5a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-17a3490a.bc4a35fa.js.map