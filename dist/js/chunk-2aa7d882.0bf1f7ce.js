(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aa7d882"],{"005c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"btn"},[t.isAdmin?n("el-button",{attrs:{type:"primary"},on:{click:t.getTotal}},[t._v("全部")]):t._e()],1),n("div",{staticClass:"btn"},[t.isAdmin?t._e():n("el-button",{attrs:{type:"primary"},on:{click:t.getSclTotal}},[t._v("全部")])],1),t.isAdmin?n("div",{staticClass:"btn"},[n("span",[t._v("学校：")]),n("el-select",{attrs:{placeholder:"请选择学校"},on:{change:t.changeSchoolType},model:{value:t.school,callback:function(e){t.school=e},expression:"school"}},t._l(t.schoolList,(function(t){return n("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),t.isAdmin?n("div",{staticClass:"btn"},[n("span",[t._v("年级：")]),n("el-select",{attrs:{placeholder:"请选择年级"},on:{change:t.changeGradeType},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}},t._l(t.gradeList,(function(t){return n("el-option",{key:t.index,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),t.isAdmin?t._e():n("div",{staticClass:"btn"},[n("span",[t._v("年级：")]),n("el-select",{attrs:{placeholder:"请选择年级"},on:{change:t.changeSclGradeType},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}},t._l(t.gradeList,(function(t){return n("el-option",{key:t.index,attrs:{label:t.title,value:t.id}})})),1)],1),n("div",{attrs:{id:"bar-chart"}}),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pie-box"},[n("div",{attrs:{id:"pie-chart-user"}}),n("div",{attrs:{id:"pie-chart-student"}})])}],s=(n("4160"),n("b0c0"),n("159b"),n("365c"));n("313e");var o={name:"studentsTatal",data:function(){return{isAdmin:!0,school:"",grade:"",schoolList:[],gradeList:[],nameList:[],countList:[],existCount:[],school_id:"",grade_id:"",bar:{title:{text:"学生统计",left:"center"},tooltip:{},legend:{orient:"vertical",data:["总学生数","已注册人数"],left:"right"},xAxis:{data:[]},yAxis:{},series:[]},pie:{title:{},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:["男生人数","女生人数"]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],label:{normal:{formatter:"{d}%",position:"inside"}},data:[{value:0,name:"男生人数"},{value:0,name:"女生人数"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},title:{user:"用户男女比例",student:"学生男女比例"},username:localStorage.getItem("username")}},methods:{changeSchoolType:function(t){var e=this,a=document.getElementById("bar-chart"),i=document.getElementById("pie-chart-user"),o=document.getElementById("pie-chart-student"),r=n("313e").init(a),u=n("313e").init(i),c=n("313e").init(o);r.setOption(e.bar),u.setOption(e.pie),c.setOption(e.pie),e.nameList=[],e.countList=[],e.existCount=[],e.grade="",e.school_id=t,s["a"].statistics(e.school_id).then((function(t){e.gradeList=t.data,t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)})),r.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),s["a"].studentGender(0,1,e.school_id).then((function(t){u.setOption(e.pie={title:{text:e.title.user,left:"center"},series:[{name:e.title.user,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})})),s["a"].studentGender(0,2,e.school_id).then((function(t){c.setOption(e.pie={title:{text:e.title.student,left:"center"},series:[{name:e.title.student,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})}))}))},changeGradeType:function(t){var e=this,a=document.getElementById("bar-chart"),i=document.getElementById("pie-chart-user"),o=document.getElementById("pie-chart-student"),r=n("313e").init(a),u=n("313e").init(i),c=n("313e").init(o);r.setOption(e.bar),u.setOption(e.pie),c.setOption(e.pie),e.grade_id=t,e.nameList=[],e.countList=[],e.existCount=[],s["a"].statistics(e.school_id,e.grade_id).then((function(t){t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)})),r.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),s["a"].studentGender(0,1,e.school_id,e.grade_id).then((function(t){u.setOption(e.pie={title:{text:e.title.user,left:"center"},series:[{name:e.title.user,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})})),s["a"].studentGender(0,2,e.school_id,e.grade_id).then((function(t){c.setOption(e.pie={title:{text:e.title.student,left:"center"},series:[{name:e.title.student,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})}))}))},changeSclGradeType:function(t){var e=this,a=document.getElementById("bar-chart"),i=document.getElementById("pie-chart-user"),o=document.getElementById("pie-chart-student"),r=n("313e").init(a),u=n("313e").init(i),c=n("313e").init(o);r.setOption(e.bar),u.setOption(e.pie),c.setOption(e.pie),e.grade_id=t,e.nameList=[],e.countList=[],e.existCount=[],s["a"].statistics(0,e.grade_id).then((function(t){t.data.forEach((function(t){e.nameList.push(t.name),e.countList.push(t.count),e.existCount.push(t.exist_count)})),r.setOption(e.bar={xAxis:{data:e.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:e.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:e.existCount}]}),s["a"].studentGender(0,1,0,e.grade_id).then((function(t){u.setOption(e.pie={title:{text:e.title.user,left:"center"},series:[{name:e.title.user,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})})),s["a"].studentGender(0,2,0,e.grade_id).then((function(t){c.setOption(e.pie={title:{text:e.title.student,left:"center"},series:[{name:e.title.student,data:[{value:t.man_total,name:"男生人数"},{value:t.woman_total,name:"女生人数"}]}]})}))}))},getTotal:function(){var t=this,e=document.getElementById("bar-chart"),a=document.getElementById("pie-chart-user"),i=document.getElementById("pie-chart-student"),o=n("313e").init(e),r=n("313e").init(a),u=n("313e").init(i);o.setOption(t.bar),r.setOption(t.pie),u.setOption(t.pie),t.nameList=[],t.countList=[],t.existCount=[],t.gradeList=[],t.school="",t.grade="",t.isAdmin=!0,s["a"].statistics().then((function(e){e.data.forEach((function(e){t.nameList.push(e.name),t.countList.push(e.count),t.existCount.push(e.exist_count)})),o.setOption(t.bar={xAxis:{data:t.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:t.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:t.existCount}]})})),s["a"].studentGender(0,1).then((function(e){r.setOption(t.pie={title:{text:t.title.user,left:"center"},series:[{name:t.title.user,data:[{value:e.man_total,name:"男生人数"},{value:e.woman_total,name:"女生人数"}]}]})})),s["a"].studentGender(0,2).then((function(e){u.setOption(t.pie={title:{text:t.title.student,left:"center"},series:[{name:t.title.student,data:[{value:e.man_total,name:"男生人数"},{value:e.woman_total,name:"女生人数"}]}]})})),s["a"].schools().then((function(e){t.schoolList=e.data}))},getSclTotal:function(){var t=this;t.isAdmin=!1;var e=document.getElementById("bar-chart"),a=document.getElementById("pie-chart-user"),i=document.getElementById("pie-chart-student"),o=n("313e").init(e),r=n("313e").init(a),u=n("313e").init(i);o.setOption(t.bar),r.setOption(t.pie),u.setOption(t.pie),t.nameList=[],t.countList=[],t.existCount=[],t.school="",t.grade="",s["a"].grades().then((function(e){t.gradeList=e.data})),s["a"].statistics().then((function(e){e.data.forEach((function(e){t.nameList.push(e.name),t.countList.push(e.count),t.existCount.push(e.exist_count)})),o.setOption(t.bar={xAxis:{data:t.nameList},series:[{name:"总学生数",type:"bar",label:{show:!0,position:"inside"},data:t.countList},{name:"已注册人数",type:"bar",label:{show:!0,position:"inside"},data:t.existCount}]}),s["a"].studentGender(0,1).then((function(e){r.setOption(t.pie={title:{text:t.title.user,left:"center"},series:[{name:t.title.user,data:[{value:e.man_total,name:"男生人数"},{value:e.woman_total,name:"女生人数"}]}]})})),s["a"].studentGender(0,2).then((function(e){u.setOption(t.pie={title:{text:t.title.student,left:"center"},series:[{name:t.title.student,data:[{value:e.man_total,name:"男生人数"},{value:e.woman_total,name:"女生人数"}]}]})}))}))}},mounted:function(){"admin"==this.username?this.getTotal():this.getSclTotal()}},r=o,u=(n("0067"),n("2877")),c=Object(u["a"])(r,a,i,!1,null,"48a0d794",null);e["default"]=c.exports},"0067":function(t,e,n){"use strict";var a=n("d793"),i=n.n(a);i.a},"365c":function(t,e,n){"use strict";var a=n("be3b"),i=n("99b1"),s=n.n(i),o={students:function(t,e,n){return a["a"].get(s.a.Students,{page:t,limit:e,class_id:n})},student:function(t){return a["a"].post(s.a.Student,t)},delStudent:function(t){return a["a"].del(s.a.DelStudent,{student_id:t})},searchNumber:function(t,e,n){return a["a"].get(s.a.Students,{page:t,limit:e,number:n})},searchName:function(t,e,n){return a["a"].get(s.a.Students,{page:t,limit:e,name:n})},wxUser:function(t,e){return a["a"].get(s.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return a["a"].post(s.a.BindFamily,t)},familySearch:function(t){return a["a"].get(s.a.FamilySearch,{number:t})},studentFace:function(t){return a["a"].post(s.a.StudentFace,t)},studentEditFace:function(t){return a["a"].put(s.a.StudentEditFace,t)},faceLogs:function(t,e,n){return a["a"].get(s.a.StudentFaceLogs,{page:t,limit:e,id:n})},grade:function(t){return a["a"].post(s.a.Grade,t)},grades:function(t,e){return a["a"].get(s.a.Grades,{page:t,limit:e})},delGrade:function(t){return a["a"].del(s.a.DelGrade,{grade_id:t})},_class:function(t){return a["a"].post(s.a.Class,t)},classes:function(t,e,n){return a["a"].get(s.a.Classes,{page:t,limit:e,grade_id:n})},delClass:function(t){return a["a"].del(s.a.DelClass,{class_id:t})},device:function(t){return a["a"].post(s.a.Device,t)},devices:function(t){return a["a"].post(s.a.Devices,{page:t})},family:function(t,e){return a["a"].get(s.a.Family,{page:t,limit:e})},masterFamily:function(t){return a["a"].put(s.a.MasterFamily,t)},delFamily:function(t){return a["a"].del(s.a.DelFamily,{id:t})},announcement:function(t){return a["a"].get(s.a.Announcement,{page:t})},teacher:function(t,e,n,i){return a["a"].get(s.a.Teacher,{page:t,limit:e,state:n,worker:i})},delTeacher:function(t){return a["a"].del(s.a.DelTeacher,{id:t})},audit:function(t){return a["a"].post(s.a.Audit,t)},schools:function(t,e,n,i){return a["a"].get(s.a.Schools,{page:t,limit:e,mode:n,id:i})},oneSchool:function(t){return a["a"].get(s.a.School,{id:t})},studentInfo:function(t,e,n){return a["a"].get(s.a.StudentInfo,{page:t,limit:e,school_id:n})},schoolUser:function(t,e,n){return a["a"].get(s.a.SchoolUser,{page:t,limit:e,school_id:n})},visitors:function(t,e,n){return a["a"].get(s.a.Visitors,{page:t,limit:e,school_id:n})},teacherUser:function(t,e,n){return a["a"].get(s.a.TeacherUser,{page:t,limit:e,school_id:n})},orders:function(t,e,n){return a["a"].get(s.a.Orders,{page:t,limit:e,school_id:n})},server:function(t,e,n){return a["a"].get(s.a.Server,{page:t,limit:e,product_id:n})},schoolTeacher:function(t,e,n){return a["a"].get(s.a.Teacher,{page:t,limit:e,school_id:n})},school:function(t){return a["a"].post(s.a.School,t)},banners:function(t,e){return a["a"].get(s.a.Banners,{page:t,limit:e})},banner:function(t){return a["a"].post(s.a.Banner,t)},message:function(t){return a["a"].post(s.a.Message,t)},messages:function(t,e){return a["a"].get(s.a.Messages,{page:t,limit:e})},messageType:function(t){return a["a"].post(s.a.MessageType,t)},messageTypes:function(t,e){return a["a"].get(s.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return a["a"].del(s.a.DelDocumentType,{id:t})},documents:function(t,e){return a["a"].get(s.a.Documents,{page:t,limit:e})},delDocument:function(t){return a["a"].del(s.a.DelDocument,{id:t})},document:function(t){return a["a"].post(s.a.Document,t)},documentDel:function(t){return a["a"].del(s.a.DocumentDel,{id:t})},delBanner:function(t){return a["a"].del(s.a.DelBanner,{id:t})},buys:function(t,e){return a["a"].get(s.a.Buys,{page:t,limit:e})},buy:function(t){return a["a"].post(s.a.Buy,t)},roles:function(t,e){return a["a"].get(s.a.Roles,{page:t,limit:e})},role:function(t){return a["a"].post(s.a.Role,t)},delRole:function(t){return a["a"].del(s.a.DelRole,{id:t})},user:function(t){return a["a"].post(s.a.User,t)},users:function(t,e){return a["a"].get(s.a.Users,{page:t,limit:e})},delUser:function(t){return a["a"].del(s.a.DelUser,{id:t})},resetPassword:function(t){return a["a"].post(s.a.ResetPassword,t)},goods:function(t){return a["a"].get(s.a.Buys,{school_id:t})},setProduct:function(t){return a["a"].post(s.a.SetProduct,t)},banProduct:function(t){return a["a"].post(s.a.BanProduct,t)},banProducts:function(t){return a["a"].get(s.a.BanProducts,{user_id:t})},userSearch:function(t){return a["a"].get(s.a.UserSearch,{id:t})},jurisdictionSchool:function(t,e){return a["a"].get(s.a.JurisdictionSchool,{user_id:t,mode:e})},jurisdictionProducts:function(t){return a["a"].get(s.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return a["a"].get(s.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return a["a"].get(s.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,n,i){return a["a"].get(s.a.StudentGender,{sex:t,type:e,school_id:n,grade_id:i})},classCheckCount:function(t){return a["a"].get(s.a.ClassCheckCount,{id:t})},statistics:function(t,e){return a["a"].get(s.a.Statistics,{school_id:t,grade_id:e})}};e["a"]=o},d793:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2aa7d882.0bf1f7ce.js.map