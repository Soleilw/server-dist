(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-184c31a7"],{"365c":function(e,t,a){"use strict";a("ac1f");var n=a("ade3"),s=a("be3b"),r=a("99b1"),l=a.n(r),o={students:function(e,t,a){return s["a"].get(l.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return s["a"].post(l.a.Student,e)},delStudent:function(e){return s["a"].del(l.a.DelStudent,{student_id:e})},search:function(e){return s["a"].get(l.a.Students,{number:e})},wxUser:function(e,t){return s["a"].get(l.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return s["a"].post(l.a.BindFamily,e)},familySearch:function(e){return s["a"].get(l.a.FamilySearch,{number:e})},studentFace:function(e){return s["a"].post(l.a.StudentFace,e)},grade:function(e){return s["a"].post(l.a.Grade,e)},grades:function(e,t){return s["a"].get(l.a.Grades,{page:e,limit:t})},delGrade:function(e){return s["a"].del(l.a.DelGrade,{grade_id:e})},_class:function(e){return s["a"].post(l.a.Class,e)},classes:function(e,t,a){var r;return s["a"].get(l.a.Classes,(r={page:e,limit:t},Object(n["a"])(r,"limit",t),Object(n["a"])(r,"grade_id",a),r))},delClass:function(e){return s["a"].del(l.a.DelClass,{class_id:e})},device:function(e){return s["a"].post(l.a.Device,e)},devices:function(e){return s["a"].post(l.a.Devices,{page:e})},family:function(e,t){return s["a"].get(l.a.Family,{page:e,limit:t})},announcement:function(e){return s["a"].get(l.a.Announcement,{page:e})},teacher:function(e,t,a,n){return s["a"].get(l.a.Teacher,{page:e,limit:t,state:a,worker:n})},delTeacher:function(e){return s["a"].del(l.a.DelTeacher,{id:e})},audit:function(e){return s["a"].post(l.a.Audit,e)},schools:function(e,t,a){return s["a"].get(l.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return s["a"].get(l.a.School,{id:e})},school:function(e){return s["a"].post(l.a.School,e)},banners:function(e,t){return s["a"].get(l.a.Banners,{page:e,limit:t})},banner:function(e){return s["a"].post(l.a.Banner,e)},message:function(e){return s["a"].post(l.a.Message,e)},messages:function(e,t){return s["a"].get(l.a.Messages,{page:e,limit:t})},messageType:function(e){return s["a"].post(l.a.MessageType,e)},messageTypes:function(e,t){return s["a"].get(l.a.MessageTypes,{page:e,limit:t})},documents:function(e,t){return s["a"].get(l.a.Documents,{page:e,limit:t})},delDocument:function(e){return s["a"].del(l.a.DelDocument,{id:e})},document:function(e){return s["a"].post(l.a.Document,e)},buys:function(e,t){return s["a"].get(l.a.Buys,{page:e,limit:t})},buy:function(e){return s["a"].post(l.a.Buy,e)},roles:function(e,t){return s["a"].get(l.a.Roles,{page:e,limit:t})},role:function(e){return s["a"].post(l.a.Role,e)},delRole:function(e){return s["a"].del(l.a.DelRole,{id:e})},user:function(e){return s["a"].post(l.a.User,e)},users:function(e,t){return s["a"].get(l.a.Users,{page:e,limit:t})},delUser:function(e){return s["a"].del(l.a.DelUser,{id:e})},resetPassword:function(e){return s["a"].post(l.a.ResetPassword,e)}};t["a"]=o},"380e":function(e,t,a){},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",ResetPassword:a+"/reset/password",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",DelDocument:a+"/help/doc",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",DelStudent:a+"/student",Grade:a+"/grade",Grades:a+"/grades",DelGrade:a+"/grade",Class:a+"/class",Classes:a+"/classes",DelClass:a+"/class",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/parents",WxUser:a+"/wx/users",BindFamily:a+"/pass/student",StudentFace:a+"/student/face",FamilySearch:a+"/parents",Teacher:a+"/user/infos",Audit:a+"/check/user/info",DelTeacher:a+"/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",Role:a+"/role",Roles:a+"/roles",DelRole:a+"/role",User:a+"/user",Users:a+"/users",DelUser:a+"/user"};e.exports=n},d14f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"welcome"},[e._v(" 管理员："),a("span",{staticStyle:{color:"#2a9f93"}},[e._v(e._s(e.username))]),e._v(" 当前时间："),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.nowDate+" "+e.nowTime+" "+e.nowWeek))])]),a("div",{staticClass:"box"},[a("div",{staticClass:"box-item"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/infomation"}},[e._v("更多学生信息")])],1),a("div",{staticClass:"btn total"},[e._v("总数："+e._s(e.studentTotal))]),a("el-table",{attrs:{data:e.studentData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/grade"}},[e._v("更多班级信息")])],1),a("div",{staticClass:"btn total"},[e._v("总数："+e._s(e.classTotal))]),a("el-table",{attrs:{data:e.classData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"grade",label:"年级",align:"center"}}),a("el-table-column",{attrs:{prop:"title",label:"班级",align:"center"}}),a("el-table-column",{attrs:{prop:"teacher.name",label:"班主任",align:"center"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/family"}},[e._v("更多家长信息")])],1),a("div",{staticClass:"btn total"},[e._v("总数："+e._s(e.familyTotal))]),a("el-table",{attrs:{data:e.familyData}},[a("el-table-column",{attrs:{prop:"student.name",label:"学生姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"UserInfo.name",label:"家长姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"UserInfo.phone",label:"手机号",align:"center"}}),a("el-table-column",{attrs:{prop:"WxUser.nickname",label:"微信名",align:"center"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/teacher"}},[e._v("更多教职工信息")])],1),a("div",{staticClass:"btn total"},[e._v("总数："+e._s(e.teacherTotal))]),a("el-table",{attrs:{data:e.teacherData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",align:"center"}}),a("el-table-column",{attrs:{prop:"state",label:"是否为班主任",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{"disable-transitions":""}},[e._v(e._s(t.row.worker))])]}}])}),a("el-table-column",{attrs:{prop:"sex",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{"disable-transitions":""}},[e._v(e._s(t.row.state))])]}}])})],1)],1)])])},s=[],r=(a("4160"),a("159b"),a("365c")),l={data:function(){return{username:localStorage.getItem("username"),studentData:[],classData:[],familyData:[],teacherData:[],studentTotal:"",classTotal:"",familyTotal:"",teacherTotal:"",nowDate:"",nowTime:"",nowWeek:"",permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getInfo(),this.currentTime()},methods:{currentTime:function(){setInterval(this.getDate,500)},getDate:function(){var e=this,t=(new Date).getFullYear(),a=(new Date).getMonth()+1,n=(new Date).getDate(),s=(new Date).getDay(),r=(new Date).getHours(),l=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),o=(new Date).getSeconds();switch(s){case 1:e.nowWeek="星期一";break;case 2:e.nowWeek="星期二";break;case 3:e.nowWeek="星期三";break;case 4:e.nowWeek="星期四";break;case 5:e.nowWeek="星期五";break;case 6:e.nowWeek="星期六";break;case 7:e.nowWeek="星期日"}e.nowTime=r+":"+l+":"+o,e.nowDate=t+"-"+a+"-"+n},getInfo:function(){var e=this;r["a"].students(1,5).then((function(t){e.studentData=t.data,e.studentTotal=t.total})),r["a"].classes(1,5).then((function(t){e.classData=t.data,e.classTotal=t.total})),r["a"].family(1,5).then((function(t){e.familyData=t.data,e.familyTotal=t.total})),r["a"].teacher(1,5).then((function(t){e.teacherData=t.data,e.teacherTotal=t.total,e.teacherData.forEach((function(e){switch(e.state){case 1:e.state="待审核";break;case 2:e.state="已通过";break;case 3:e.state="未通过"}switch(e.worker){case 0:e.worker="否";break;case 1:e.worker="否";break;case 2:e.worker="是";break;case 3:e.worker="否"}}))}))}},beforeDestroy:function(){this.getDate&&clearInterval(this.getDate)}},o=l,c=(a("f1c7"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"2c7fc480",null);t["default"]=i.exports},f1c7:function(e,t,a){"use strict";var n=a("380e"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-184c31a7.0eb7f8bb.js.map