(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d737d808"],{"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),o=a("99b1"),s=a.n(o),l={students:function(e,t,a){return n["a"].get(s.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(s.a.Student,e)},delStudent:function(e){return n["a"].del(s.a.DelStudent,{student_id:e})},search:function(e){return n["a"].get(s.a.Students,{number:e})},grade:function(e){return n["a"].post(s.a.Grade,e)},grades:function(e,t){return n["a"].get(s.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(s.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(s.a.Class,e)},classes:function(e,t,a){return n["a"].get(s.a.Classes,{page:e,grade_id:t,limit:a})},delClass:function(e){return n["a"].del(s.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(s.a.Device,e)},devices:function(e){return n["a"].post(s.a.Devices,{page:e})},family:function(e){return n["a"].get(s.a.Family,{page:e})},announcement:function(e){return n["a"].get(s.a.Announcement,{page:e})},bindFamily:function(e,t){return n["a"].get(s.a.BindFamily,{page:e,limit:t})},updateFace:function(e){return n["a"].post(s.a.UpFace,e)},teacher:function(e,t,a){return n["a"].get(s.a.Teacher,{page:e,state:t,worker:a})},delTeacher:function(e){return n["a"].del(s.a.Teacher,{id:e})},audit:function(e){return n["a"].post(s.a.Audit,e)},schools:function(e,t,a){return n["a"].get(s.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return n["a"].get(s.a.School,{id:e})},school:function(e){return n["a"].post(s.a.School,e)},banners:function(e){return n["a"].get(s.a.Banners,{page:e})},banner:function(e){return n["a"].post(s.a.Banner,e)},message:function(e){return n["a"].post(s.a.Message,e)},messages:function(e){return n["a"].get(s.a.Messages,{page:e})},messageType:function(e){return n["a"].post(s.a.MessageType,e)},messageTypes:function(e){return n["a"].get(s.a.MessageTypes,{page:e})},documents:function(e){return n["a"].get(s.a.Documents,{page:e})},delDocument:function(e){return n["a"].del(s.a.DelDocument,{id:e})},document:function(e){return n["a"].post(s.a.Document,e)},buys:function(e){return n["a"].get(s.a.Buys,{page:e})},buy:function(e){return n["a"].post(s.a.Buy,e)},roles:function(e){return n["a"].get(s.a.Roles,{page:e})},role:function(e){return n["a"].post(s.a.Role,e)},delRole:function(e){return n["a"].del(s.a.DelRole,{id:e})},user:function(e){return n["a"].post(s.a.User,e)},users:function(e){return n["a"].get(s.a.Users,{page:e})},resetPassword:function(e){return n["a"].post(s.a.ResetPassword,e)}};t["a"]=l},"84ee":function(e,t,a){"use strict";var n=a("f0b9"),o=a.n(n);o.a},"89e7":function(e,t,a){"use strict";var n=a("f28f"),o=a.n(n);o.a},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",ResetPassword:a+"/reset/password",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",DelDocument:a+"/help/doc",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",DelStudent:a+"/student",Grade:a+"/grade",Grades:a+"/grades",DelGrade:a+"/grade",Class:a+"/class",Classes:a+"/classes",DelClass:a+"/class",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/parents",Teacher:a+"/user/infos",Audit:a+"/check/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",BindFamily:a+"/wx/users",UpFace:a+"/pass/student",Role:a+"/role",Roles:a+"/roles",DelRole:a+"/role",User:a+"/user",Users:a+"/users"};e.exports=n},ab0b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"角色管理",name:"role"}},[a("v-role")],1),a("el-tab-pane",{attrs:{label:"用户管理",name:"user"}},[a("v-user")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("添加角色")])],1),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"角色名",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑权限")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该年级")]),a("span",[e.hideDel?a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]):e._e(),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogGrade=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogRole,width:"90%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogRole=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"角色名称(中文)"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"角色名称(英文)"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"选择权限"}},[a("el-checkbox",{on:{change:e.AllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"student",border:""},on:{change:e.oneChange}},[e._v("学生管理")]),a("el-checkbox",{attrs:{label:"infomation"},on:{change:e.oneChange}},[e._v("学生列表")]),a("el-checkbox",{attrs:{label:"infomationAdd"},on:{change:e.oneChange}},[e._v("新增学生")]),a("el-checkbox",{attrs:{label:"infomationDel"},on:{change:e.oneChange}},[e._v("删除学生")]),a("el-checkbox",{attrs:{label:"infomationEdit"},on:{change:e.oneChange}},[e._v("编辑学生")]),a("el-checkbox",{attrs:{label:"infomationGet"},on:{change:e.oneChange}},[e._v("获取学生列表")]),a("el-checkbox",{attrs:{label:"infomationMore"},on:{change:e.oneChange}},[e._v("批量录入学生")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"grade",border:""},on:{change:e.oneChange}},[e._v("班级管理")]),a("el-checkbox",{attrs:{label:"gradeAdd"},on:{change:e.oneChange}},[e._v("新增年级")]),a("el-checkbox",{attrs:{label:"gradeDel"},on:{change:e.oneChange}},[e._v("删除年级")]),a("el-checkbox",{attrs:{label:"gradeGet"},on:{change:e.oneChange}},[e._v("获取年级列表")]),a("el-checkbox",{attrs:{label:"classAdd"},on:{change:e.oneChange}},[e._v("新增班级")]),a("el-checkbox",{attrs:{label:"classDel"},on:{change:e.oneChange}},[e._v("删除班级")]),a("el-checkbox",{attrs:{label:"classGet"},on:{change:e.oneChange}},[e._v("获取班级列表")]),a("el-checkbox",{attrs:{label:"studentDetail"},on:{change:e.oneChange}},[e._v("查看学生")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"family",border:""},on:{change:e.oneChange}},[e._v("家长信息")]),a("el-checkbox",{attrs:{label:"familyGet"},on:{change:e.oneChange}},[e._v("家长列表")]),a("el-checkbox",{attrs:{label:"familyMore"},on:{change:e.oneChange}},[e._v("查看更多家长")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"teacher",border:""},on:{change:e.oneChange}},[e._v("教职工管理")]),a("el-checkbox",{attrs:{label:"teacherDel"},on:{change:e.oneChange}},[e._v("删除教职工")]),a("el-checkbox",{attrs:{label:"teacherGet"},on:{change:e.oneChange}},[e._v("获取教职工列表")]),a("el-checkbox",{attrs:{label:"teacherDetail"},on:{change:e.oneChange}},[e._v("查看详情")]),a("el-checkbox",{attrs:{label:"teacherAudit"},on:{change:e.oneChange}},[e._v("教职工审核")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"permission",border:""},on:{change:e.oneChange}},[e._v("角色管理")]),a("el-checkbox",{attrs:{label:"roleAdd"},on:{change:e.oneChange}},[e._v("新增角色")]),a("el-checkbox",{attrs:{label:"roleDel"},on:{change:e.oneChange}},[e._v("删除角色")]),a("el-checkbox",{attrs:{label:"roleEdit"},on:{change:e.oneChange}},[e._v("编辑权限")]),a("el-checkbox",{attrs:{label:"roleGet"},on:{change:e.oneChange}},[e._v("获取角色列表")])],1)],1),a("div",{staticClass:"permission",staticStyle:{"margin-left":"140px"}},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"manageAdd"},on:{change:e.oneChange}},[e._v("新增管理员")]),a("el-checkbox",{attrs:{label:"manageDel"},on:{change:e.oneChange}},[e._v("删除管理员")]),a("el-checkbox",{attrs:{label:"manageEdit"},on:{change:e.oneChange}},[e._v("编辑管理员")]),a("el-checkbox",{attrs:{label:"manageGet"},on:{change:e.oneChange}},[e._v("管理员列表")])],1)],1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newRole}},[e._v("提交")])],1)],1)],1)],1)])],1)},l=[],r=(a("c975"),a("365c")),i={data:function(){return{dialogRole:!1,form:{name:"",title:"",permissions:[]},stateList:[{label:"启用",value:1},{label:"禁用",value:0}],tableDate:[],checkAll:!1,permissionList:["student","infomation","infomationGet","infomationAdd","infomationMore","infomationEdit","infomationDel","grade","gradeGet","gradeAdd","gradeDel","classGet","classAdd","studentDetail","classDel","family","familyGet","familyMore","teacher","teacherGet","teacherDetail","teacherDel","teacherAudit","permission","roleGet","roleAdd","roleEdit","roleDel","manageGet","manageAdd","manageEdit","manageDel"],dialogDel:!1,id:"",currentPage:1,totalPage:0,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role"),hideDel:!1}},mounted:function(){this.getRoles()},methods:{addRole:function(){var e=this;e.permissions.indexOf("roleAdd")>-1||"super"===e.role?(e.dialogRole=!0,e.form={name:"",permissions:[]}):e.$message.warning("无此权限")},getRoles:function(){var e=this;e.permissions.indexOf("roleGet")>-1||"super"===e.role?(e.permissions.indexOf("roleDel")>-1||"super"===e.role)&&r["a"].roles(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total})):e.$message.warning("无此权限")},newRole:function(){var e=this;r["a"].role(e.form).then((function(t){e.dialogRole=!1,e.$message.success("提交成功"),e.getRoles(),e.currentPage=1,e.form={},e.form.permissions=[]}))},handleEdit:function(e,t){var a=this;a.permissions.indexOf("roleEdit")>-1||"super"===a.role?(a.dialogRole=!0,a.form=t,a.form.permissions=t.permissions,a.checkAll=t.permissions.length===a.permissionList.length,t.permissions):a.$message.warning("无此权限")},AllChange:function(e){var t=this;t.form.permissions=e?t.permissionList:[]},oneChange:function(e){var t=this;t.form.permissions.push({title:e,name:"学生管理"}),t.checkAll=t.form.permissions.length===t.permissionList.length},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;r["a"].delRole(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getRoles(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.getRoles()}}},c=i,u=(a("84ee"),a("2877")),d=Object(u["a"])(c,s,l,!1,null,"21c3cb56",null),m=d.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加用户")])],1),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"username",label:"账号",align:"center"}}),a("el-table-column",{attrs:{prop:"role",label:"角色名",align:"center"}}),a("el-table-column",{attrs:{prop:"enable",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("1"==t.row.enable?"启用":"禁用")}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleReset(t.$index,t.row)}}},[e._v("重置密码")]),e.hideDel?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogUser,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogUser=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.rolesList,(function(e){return a("el-option",{key:e.title,attrs:{label:e.name,value:e.title}})})),1)],1),a("el-form-item",{attrs:{label:"选择学校"}},[a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school_id,callback:function(t){e.$set(e.form,"school_id",t)},expression:"form.school_id"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择状态"}},[a("el-select",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},e._l(e.stateList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newUser}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogResetPassWord,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogResetPassWord=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.pwdForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:e.pwdForm.old_password,callback:function(t){e.$set(e.pwdForm,"old_password",t)},expression:"pwdForm.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:e.pwdForm.new_password,callback:function(t){e.$set(e.pwdForm,"new_password",t)},expression:"pwdForm.new_password"}})],1),a("el-form-item",{attrs:{label:"再次确认新密码"}},[a("el-input",{model:{value:e.pwdForm.confirm_password,callback:function(t){e.$set(e.pwdForm,"confirm_password",t)},expression:"pwdForm.confirm_password"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangePassword}},[e._v("提交")])],1)],1)],1)],1)])],1)},p=[],f={data:function(){return{dialogUser:!1,form:{username:"",password:"",enable:"",role:"",school_id:""},stateList:[{label:"启用",value:1},{label:"禁用",value:2}],rolesList:[],schoolList:[],tableDate:[],dialogResetPassWord:!1,pwdForm:{new_password:"",old_password:"",confirm_password:"",id:""},currentPage:1,totalPage:0,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role"),hideDel:!1}},mounted:function(){this.getSchool(),this.getRoles(),this.getUsers()},methods:{getSchool:function(){var e=this;"super"===e.role?r["a"].schools(e.currentPage,100).then((function(t){e.schoolList=t.data})):r["a"].oneSchool(43).then((function(t){e.schoolList=[t]}))},getRoles:function(){var e=this;e.permissions.indexOf("roleGet")>-1||"super"===e.role?r["a"].roles(e.currentPage).then((function(t){e.rolesList=t.data})):e.$message.warning("无此权限")},getUsers:function(){var e=this;e.permissions.indexOf("manageGet")>-1||"super"===e.role?r["a"].users(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total})):e.$message.warning("无此权限")},addUser:function(){var e=this;e.permissions.indexOf("manageAdd")>-1||"super"===e.role?(e.dialogUser=!0,e.form={username:"",password:"",enable:"",title:"",school_id:""}):e.$message.warning("无此权限")},newUser:function(){var e=this;r["a"].user(e.form).then((function(t){e.dialogUser=!1,e.$message.success("提交成功"),e.getUsers(),e.currentPage=1,e.form={}}))},handleEdit:function(e,t){var a=this;a.permissions.indexOf("manageEdit")>-1||"super"===a.role?(a.dialogUser=!0,a.form=t):a.$message.warning("无此权限")},handleReset:function(e,t){var a=this;a.permissions.indexOf("manageEdit")>-1||"super"===a.role?(a.dialogResetPassWord=!0,a.pwdForm.id=t.id):a.$message.warning("无此权限")},ChangePassword:function(){var e=this;e.pwdForm.new_password===e.pwdForm.confirm_password?r["a"].resetPassword(e.pwdForm).then((function(t){e.dialogResetPassWord=!1,e.$message.success("修改成功"),e.getUsers(),e.currentPage=1,e.pwdForm={}})):e.$message.error("新密码与确认密码不一致")},handleCurrentChange:function(e){var t=this;t.getUsers()}}},h=f,b=(a("89e7"),Object(u["a"])(h,g,p,!1,null,"5c2ffab4",null)),v=b.exports,x={components:{vRole:m,vUser:v},data:function(){return{activeName:"role"}},methods:{handleClick:function(e,t){}}},k=x,_=Object(u["a"])(k,n,o,!1,null,null,null);t["default"]=_.exports},c975:function(e,t,a){"use strict";var n=a("23e7"),o=a("4d64").indexOf,s=a("a640"),l=a("ae40"),r=[].indexOf,i=!!r&&1/[1].indexOf(1,-0)<0,c=s("indexOf"),u=l("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:i||!c||!u},{indexOf:function(e){return i?r.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},f0b9:function(e,t,a){},f28f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-d737d808.fc2fa5e6.js.map