(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b1d5c4"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),r=a("99b1"),i=a.n(r),o={students:function(e,t,a){return n["a"].get(i.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(i.a.Student,e)},delStudent:function(e){return n["a"].del(i.a.DelStudent,{student_id:e})},search:function(e){return n["a"].get(i.a.Students,{number:e})},wxUser:function(e,t){return n["a"].get(i.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(i.a.BindFamily,e)},familySearch:function(e){return n["a"].get(i.a.FamilySearch,{number:e})},studentFace:function(e){return n["a"].post(i.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(i.a.StudentEditFace,e)},faceLogs:function(e,t,a){return n["a"].get(i.a.StudentFaceLogs,{page:e,limit:t,id:a})},grade:function(e){return n["a"].post(i.a.Grade,e)},grades:function(e,t){return n["a"].get(i.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(i.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(i.a.Class,e)},classes:function(e,t,a){return n["a"].get(i.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(i.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(i.a.Device,e)},devices:function(e){return n["a"].post(i.a.Devices,{page:e})},family:function(e,t){return n["a"].get(i.a.Family,{page:e,limit:t})},masterFamily:function(e){return n["a"].put(i.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(i.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(i.a.Announcement,{page:e})},teacher:function(e,t,a,r){return n["a"].get(i.a.Teacher,{page:e,limit:t,state:a,worker:r})},delTeacher:function(e){return n["a"].del(i.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(i.a.Audit,e)},schools:function(e,t,a){return n["a"].get(i.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return n["a"].get(i.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(i.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(i.a.SchoolUser,{page:e,limit:t,school_id:a})},visitors:function(e,t,a){return n["a"].get(i.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(i.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(i.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(i.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(i.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(i.a.School,e)},banners:function(e,t){return n["a"].get(i.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(i.a.Banner,e)},message:function(e){return n["a"].post(i.a.Message,e)},messages:function(e,t){return n["a"].get(i.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(i.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(i.a.MessageTypes,{page:e,limit:t})},documents:function(e,t){return n["a"].get(i.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(i.a.DelDocument,{id:e})},document:function(e){return n["a"].post(i.a.Document,e)},buys:function(e,t){return n["a"].get(i.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(i.a.Buy,e)},roles:function(e,t){return n["a"].get(i.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(i.a.Role,e)},delRole:function(e){return n["a"].del(i.a.DelRole,{id:e})},user:function(e){return n["a"].post(i.a.User,e)},users:function(e,t){return n["a"].get(i.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(i.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(i.a.ResetPassword,e)},goods:function(e){return n["a"].get(i.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(i.a.SetProduct,e)},banProduct:function(e){return n["a"].post(i.a.BanProduct,e)},banProducts:function(e){return n["a"].get(i.a.BanProducts,{user_id:e})},userSearch:function(e){return n["a"].get(i.a.UserSearch,{id:e})},jurisdictionSchool:function(e,t){return n["a"].get(i.a.JurisdictionSchool,{user_id:e,mode:t})},jurisdictionProducts:function(e){return n["a"].get(i.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(i.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(i.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,r){return n["a"].get(i.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:r})},classCheckCount:function(e){return n["a"].get(i.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(i.a.Statistics,{school_id:e,grade_id:t})}};t["a"]=o},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),l=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,a){var n=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var i,o;return r&&"function"==typeof(i=t.constructor)&&i!==a&&n(o=i.prototype)&&o!==a.prototype&&r(e,o),e}},"841c":function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),i=a("1d80"),o=a("129f"),s=a("14c3");n("search",1,(function(e,t,a){return[function(t){var a=i(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,e,this);if(n.done)return n.value;var i=r(e),l=String(this),u=i.lastIndex;o(u,0)||(i.lastIndex=0);var c=s(i,l);return o(i.lastIndex,u)||(i.lastIndex=u),null===c?-1:c.index}]}))},8893:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("span",[e._v("状态：")]),a("el-select",{attrs:{placeholder:"请选择状态"},on:{change:e.changeAudit},model:{value:e.auditState,callback:function(t){e.auditState=t},expression:"auditState"}},e._l(e.auditList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"btn"},[a("span",[e._v("职位：")]),a("el-select",{attrs:{placeholder:"请选择职位"},on:{change:e.changeWorker},model:{value:e.workerState,callback:function(t){e.workerState=t},expression:"workerState"}},e._l(e.workerList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"href",label:"人脸图形",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href}})]}}])}),a("el-table-column",{attrs:{prop:"worker",label:"是否为班主任",align:"center"}}),a("el-table-column",{attrs:{prop:"state",label:"状态",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleTeacher(t.$index,t.row)}}},[e._v("查看详情")]),"待审核"==t.row.state?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleAudit(t.$index,t.row)}}},[e._v("审核")]):e._e(),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该教师")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{visible:e.dialogTeacher,title:"教师详情",width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogTeacher=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),a("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea",disabled:e.disabled},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class",t)},expression:"form.class"}})],1)],1)],1),a("el-dialog",{attrs:{visible:e.dialogAudit,title:"审核",width:"20%",align:"center"},on:{"update:visible":function(t){e.dialogAudit=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否通过审核")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toAudit}},[e._v("通过")]),a("el-button",{attrs:{type:"danger"},on:{click:e.unAudit}},[e._v("不通过")])],1)])],1)},r=[],i=(a("4160"),a("a9e3"),a("ac1f"),a("841c"),a("159b"),a("365c")),o={name:"teacher",data:function(){return{auditState:4,state:"",auditList:[{value:4,label:"全部"},{value:1,label:"待审核"},{value:2,label:"已通过"},{value:3,label:"未通过"}],workerState:4,worker:"",workerList:[{value:4,label:"全部"},{value:1,label:"职工"},{value:2,label:"班主任"},{value:3,label:"保安员"}],tableData:[],dialogTeacher:!1,disabled:!1,form:{},dialogAudit:!1,dialogDel:!1,id:"",currentPage:1,totalPage:0,pageSize:10,info_id:"",permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.search()},methods:{changeAudit:function(){var e=this;switch(e.auditState){case 4:e.state=0;break;case 1:e.state=1;break;case 2:e.state=2;break;case 3:e.state=3}},changeWorker:function(){var e=this;switch(e.workerState){case 4:e.worker=0;break;case 1:e.worker=1;break;case 2:e.worker=2;break;case 3:e.worker=3}},getState:function(){var e=this;e.tableData.forEach((function(e){switch(e.state){case 1:e.state="待审核";break;case 2:e.state="已通过";break;case 3:e.state="未通过"}switch(e.worker){case 0:e.worker="否";break;case 1:e.worker="否";break;case 2:e.worker="是";break;case 3:e.worker="否"}}))},search:function(){var e=this;e.auditState&&e.workerState&&i["a"].teacher(1,e.pageSize,e.state,e.worker).then((function(t){e.$message.success("请求成功！"),e.tableData=t.data,e.totalPage=t.total,e.currentPage=1,e.getState()}))},handleTeacher:function(e,t){var a=this;a.disabled=!0,a.dialogTeacher=!0,t.sex=Number(t.sex),a.form=t},handleAudit:function(e,t){var a=this;a.info_id=t.id,console.log(a.info_id),a.dialogAudit=!0},toAudit:function(){var e=this,t={state:2,id:e.info_id};i["a"].audit(t).then((function(t){e.dialogAudit=!1,e.$message.success("提交成功"),e.search()}))},unAudit:function(){var e=this,t={state:3,id:e.info_id};i["a"].audit(t).then((function(t){e.dialogAudit=!1,e.$message.success("提交成功"),e.search()}))},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;i["a"].delTeacher(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.search(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;i["a"].teacher(e,t.pageSize,t.state,t.worker).then((function(e){t.$message.success("搜索成功！"),t.tableData=e.data,t.totalPage=e.total,t.getState()}))},handleSizeChange:function(e){var t=this,a=this;a.pageSize=e,a.auditState&&a.workerState&&i["a"].teacher(1,a.pageSize,a.state,a.worker).then((function(e){a.tableData=e.data,a.totalPage=e.total,a.currentPage=1,t.getState()}))}}},s=o,l=a("2877"),u=Object(l["a"])(s,n,r,!1,null,"71950b94",null);t["default"]=u.exports},a9e3:function(e,t,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),o=a("6eeb"),s=a("5135"),l=a("c6b6"),u=a("7156"),c=a("c04e"),d=a("d039"),f=a("7c73"),g=a("241c").f,p=a("06cf").f,h=a("9bf2").f,m=a("58a8").trim,b="Number",v=r[b],S=v.prototype,k=l(f(S))==b,_=function(e){var t,a,n,r,i,o,s,l,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(i=u.slice(2),o=i.length,s=0;s<o;s++)if(l=i.charCodeAt(s),l<48||l>r)return NaN;return parseInt(i,n)}return+u};if(i(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(k?d((function(){S.valueOf.call(a)})):l(a)!=b)?u(new v(_(t)),a,y):_(t)},x=n?g(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;x.length>D;D++)s(v,w=x[D])&&!s(y,w)&&h(y,w,p(v,w));y.prototype=S,S.constructor=y,o(r,b,y)}}}]);
//# sourceMappingURL=chunk-07b1d5c4.1570d2f0.js.map