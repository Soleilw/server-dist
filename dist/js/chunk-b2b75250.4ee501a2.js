(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2b75250"],{"07c3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"welcome"},[t._v(" 管理员： "),a("span",{staticStyle:{color:"#2a9f93"}},[t._v(t._s(t.username))]),t._v(" 当前时间： "),a("span",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.nowDate+" "+t.nowTime+" "+t.nowWeek))])]),a("div",{staticClass:"box"},[a("div",{staticClass:"box-item"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/infomation"}},[t._v("更多学生信息")])],1),a("div",{staticClass:"btn total"},[t._v("总数："+t._s(t.studentTotal))])]),a("el-table",{attrs:{data:t.studentData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"number",label:"学号"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(1==e.row.sex?"男":"女")}})]}}])}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/grade"}},[t._v("更多班级信息")])],1),a("div",{staticClass:"btn total"},[t._v("总数："+t._s(t.classTotal))])]),a("el-table",{attrs:{data:t.classData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"grade",label:"年级"}}),a("el-table-column",{attrs:{prop:"title",label:"班级"}}),a("el-table-column",{attrs:{prop:"teacher.name",label:"班主任"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/family"}},[t._v("更多家长信息")])],1),a("div",{staticClass:"btn total"},[t._v("总数："+t._s(t.familyTotal))])]),a("el-table",{attrs:{data:t.familyData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"student.name",label:"学生姓名"}}),a("el-table-column",{attrs:{prop:"UserInfo.name",label:"家长姓名"}}),a("el-table-column",{attrs:{prop:"UserInfo.phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"WxUser.nickname",label:"微信名"}})],1)],1),a("div",{staticClass:"box-item"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/teacher"}},[t._v("更多教职工信息")])],1),a("div",{staticClass:"btn total"},[t._v("总数："+t._s(t.teacherTotal))])]),a("el-table",{attrs:{data:t.teacherData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"state",label:"是否为班主任"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.worker||1==e.row.worker?a("el-tag",{attrs:{"disable-transitions":""}},[t._v("否")]):2==e.row.worker?a("el-tag",{attrs:{"disable-transitions":""}},[t._v("是")]):3==e.row.worker?a("el-tag",{attrs:{"disable-transitions":""}},[t._v(">否")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.state?a("el-tag",{attrs:{"disable-transitions":""}},[t._v("待审核")]):2==e.row.state?a("el-tag",{attrs:{"disable-transitions":""}},[t._v("已通过")]):3==e.row.state?a("el-tag",{attrs:{"disable-transitions":""}},[t._v(">未通过")]):t._e()]}}])})],1)],1)])])},r=[],o=a("365c"),i={data:function(){return{loading:!0,username:localStorage.getItem("username"),studentData:[],classData:[],familyData:[],teacherData:[],studentTotal:"",classTotal:"",familyTotal:"",teacherTotal:"",nowDate:"",nowTime:"",nowWeek:"",permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getInfo(),this.currentTime()},methods:{currentTime:function(){setInterval(this.getDate,500)},getDate:function(){var t=this,e=(new Date).getFullYear(),a=(new Date).getMonth()+1,n=(new Date).getDate(),r=(new Date).getDay(),o=(new Date).getHours(),i=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),s=(new Date).getSeconds();switch(r){case 1:t.nowWeek="星期一";break;case 2:t.nowWeek="星期二";break;case 3:t.nowWeek="星期三";break;case 4:t.nowWeek="星期四";break;case 5:t.nowWeek="星期五";break;case 6:t.nowWeek="星期六";break;case 7:t.nowWeek="星期日"}t.nowTime=o+":"+i+":"+s,t.nowDate=e+"-"+a+"-"+n},getInfo:function(){var t=this;o["a"].students(1,5).then((function(e){t.loading=!1,t.studentData=e.data,t.studentTotal=e.total})).catch((function(e){t.loading=!1})),o["a"].classes(1,5).then((function(e){t.loading=!1,t.classData=e.data,t.classTotal=e.total})).catch((function(e){t.loading=!1})),o["a"].family(1,5).then((function(e){t.loading=!1,t.familyData=e.data,t.familyTotal=e.total})).catch((function(e){t.loading=!1})),o["a"].teacher(1,5).then((function(e){t.loading=!1,t.teacherData=e.data,t.teacherTotal=e.total})).catch((function(e){t.loading=!1}))}},beforeDestroy:function(){this.getDate&&clearInterval(this.getDate)}},s=i,u=(a("dbd7"),a("2877")),l=Object(u["a"])(s,n,r,!1,null,"20397484",null);e["default"]=l.exports},"365c":function(t,e,a){"use strict";var n=a("be3b"),r=a("99b1"),o=a.n(r),i={students:function(t,e,a){return n["a"].get(o.a.Students,{page:t,limit:e,class_id:a})},choolStu:function(t,e,a){return n["a"].get(o.a.Students,{page:t,limit:e,school_id:a})},student:function(t){return n["a"].post(o.a.Student,t)},delStudent:function(t){return n["a"].del(o.a.DelStudent,{student_id:t})},searchName:function(t,e,a,r){return n["a"].get(o.a.Students,{page:t,limit:e,name:a,number:r})},seekUser:function(t){return n["a"].get(o.a.SeekUser,{keyword:t})},wxUser:function(t,e){return n["a"].get(o.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return n["a"].post(o.a.BindFamily,t)},studentFace:function(t){return n["a"].post(o.a.StudentFace,t)},studentEditFace:function(t){return n["a"].put(o.a.StudentEditFace,t)},failFace:function(t,e){return n["a"].post(o.a.FailFace,{id:t,type:e})},pushFace:function(t,e){return n["a"].post(o.a.PushFace,{id:t,type:e})},pushFace1:function(t,e,a){return n["a"].post(o.a.PushFace,{id:t,type:e,uuid:a})},createFace:function(t){return n["a"].post(o.a.CreateFace,{id:t})},studentServe:function(t){return n["a"].get(o.a.StudentServe,{id:t})},faceLogs:function(t,e,a){return n["a"].get(o.a.StudentFaceLogs,{page:t,limit:e,id:a})},notice:function(t,e){return n["a"].get(o.a.Notice,{page:t,limit:e})},searchNotice:function(t,e){return n["a"].get(o.a.Notice,{grade_id:t,class_id:e})},grade:function(t){return n["a"].post(o.a.Grade,t)},grades:function(t,e){return n["a"].get(o.a.Grades,{page:t,limit:e})},delGrade:function(t){return n["a"].del(o.a.DelGrade,{grade_id:t})},_class:function(t){return n["a"].post(o.a.Class,t)},classes:function(t,e,a){return n["a"].get(o.a.Classes,{page:t,limit:e,grade_id:a})},delClass:function(t){return n["a"].del(o.a.DelClass,{class_id:t})},device:function(t){return n["a"].post(o.a.Device,t)},devices:function(t){return n["a"].post(o.a.Devices,{page:t})},family:function(t,e,a){return n["a"].get(o.a.Family,{page:t,limit:e,number:a})},masterFamily:function(t){return n["a"].put(o.a.MasterFamily,t)},delFamily:function(t){return n["a"].del(o.a.DelFamily,{id:t})},announcement:function(t){return n["a"].get(o.a.Announcement,{page:t})},exam:function(t){return n["a"].post(o.a.Exam,t)},exams:function(t,e){return n["a"].get(o.a.Exams,{page:t,limit:e})},examsDetail:function(t,e,a){return n["a"].get(o.a.ExamsDetail,{page:t,limit:e,exam_id:a})},delExam:function(t){return n["a"].del(o.a.Exam,{id:t})},subjects:function(){return n["a"].get(o.a.Subjects)},importsExam:function(t,e){return n["a"].post(o.a.ImportsExam,{exam_id:t,file:e})},imports:function(t,e,a){return n["a"].get(o.a.Imports,{page:t,limit:e,type:a})},delImport:function(t){return n["a"].del(o.a.DelImport,{id:t})},example:function(t){return n["a"].getExcel(o.a.Export,{subjects:t})},teacher:function(t,e,a,r){return n["a"].get(o.a.Teacher,{page:t,limit:e,state:a,worker:r})},delTeacher:function(t){return n["a"].del(o.a.DelTeacher,{id:t})},audit:function(t){return n["a"].post(o.a.Audit,t)},schools:function(t,e,a,r){return n["a"].get(o.a.Schools,{page:t,limit:e,mode:a,id:r})},oneSchool:function(t){return n["a"].get(o.a.School,{id:t})},studentInfo:function(t,e,a){return n["a"].get(o.a.StudentInfo,{page:t,limit:e,school_id:a})},schoolUser:function(t,e,a){return n["a"].get(o.a.SchoolUser,{page:t,limit:e,school_id:a})},schoolAddresses:function(t,e){return n["a"].get(o.a.SchoolAddresses,{page:t,limit:e})},visitors:function(t,e,a){return n["a"].get(o.a.Visitors,{page:t,limit:e,school_id:a})},teacherUser:function(t,e,a){return n["a"].get(o.a.TeacherUser,{page:t,limit:e,school_id:a})},orders:function(t,e,a){return n["a"].get(o.a.Orders,{page:t,limit:e,school_id:a})},server:function(t,e,a){return n["a"].get(o.a.Server,{page:t,limit:e,product_id:a})},schoolTeacher:function(t,e,a){return n["a"].get(o.a.Teacher,{page:t,limit:e,school_id:a})},school:function(t){return n["a"].post(o.a.School,t)},delSchool:function(t){return n["a"].del(o.a.DelSchool,{school_id:t})},pushSchFace:function(t){return n["a"].post(o.a.PushSchFace,{school_id:t})},banners:function(t,e){return n["a"].get(o.a.Banners,{page:t,limit:e})},banner:function(t){return n["a"].post(o.a.Banner,t)},message:function(t){return n["a"].post(o.a.Message,t)},messages:function(t,e){return n["a"].get(o.a.Messages,{page:t,limit:e})},messageType:function(t){return n["a"].post(o.a.MessageType,t)},messageTypes:function(t,e){return n["a"].get(o.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return n["a"].del(o.a.DelDocumentType,{id:t})},documents:function(t,e){return n["a"].get(o.a.Documents,{page:t,limit:e})},delDocument:function(t){return n["a"].del(o.a.DelDocument,{id:t})},document:function(t){return n["a"].post(o.a.Document,t)},documentDel:function(t){return n["a"].del(o.a.DocumentDel,{id:t})},delBanner:function(t){return n["a"].del(o.a.DelBanner,{id:t})},buys:function(t,e){return n["a"].get(o.a.Buys,{page:t,limit:e})},buy:function(t){return n["a"].post(o.a.Buy,t)},delBuy:function(t){return n["a"].del(o.a.Buy,{id:t})},roles:function(t,e){return n["a"].get(o.a.Roles,{page:t,limit:e})},role:function(t){return n["a"].post(o.a.Role,t)},delRole:function(t){return n["a"].del(o.a.DelRole,{id:t})},user:function(t){return n["a"].post(o.a.User,t)},users:function(t,e){return n["a"].get(o.a.Users,{page:t,limit:e})},delUser:function(t){return n["a"].del(o.a.DelUser,{id:t})},resetPassword:function(t){return n["a"].post(o.a.ResetPassword,t)},goods:function(t){return n["a"].get(o.a.Buys,{school_id:t})},setProduct:function(t){return n["a"].post(o.a.SetProduct,t)},banProduct:function(t){return n["a"].post(o.a.BanProduct,t)},banProducts:function(t){return n["a"].get(o.a.BanProducts,{user_id:t})},userSearch:function(t,e){return n["a"].get(o.a.UserSearch,{id:t,nickname:e})},jurisdictionSchool:function(t,e,a,r){return n["a"].get(o.a.JurisdictionSchool,{page:t,limit:e,user_id:a,mode:r})},jurisdictionProducts:function(t){return n["a"].get(o.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return n["a"].get(o.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return n["a"].get(o.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,a,r){return n["a"].get(o.a.StudentGender,{sex:t,type:e,school_id:a,grade_id:r})},classCheckCount:function(t){return n["a"].get(o.a.ClassCheckCount,{id:t})},statistics:function(t,e){return n["a"].get(o.a.Statistics,{school_id:t,grade_id:e})},payTotal:function(t,e){return n["a"].get(o.a.PayTotal,{school_id:t,grade_id:e})},getConfigs:function(){return n["a"].get(o.a.Configs)},delFaceSwitch:function(t){return n["a"].del(o.a.Configs,{id:t})},faceSwitch:function(t){return n["a"].post(o.a.Configs,t)},userOrder:function(t){return n["a"].get(o.a.UserOrder,{user_id:t})},refund:function(t,e){return n["a"].post(o.a.Refund,{id:t,price:e})},gainStuInfo:function(t,e,a){return n["a"].get(o.a.StuInfo,{page:t,limit:e,school_id:a})},serStuInfo:function(t,e,a,r){return n["a"].get(o.a.StuInfo,{page:t,limit:e,name:a,number:r})}};e["a"]=i},"941c":function(t,e,a){},dbd7:function(t,e,a){"use strict";var n=a("941c"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-b2b75250.4ee501a2.js.map