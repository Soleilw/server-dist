(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1638edbc"],{"365c":function(e,a,t){"use strict";t("ac1f");var l=t("ade3"),n=t("be3b"),r=t("99b1"),o=t.n(r),s={students:function(e,a,t){return n["a"].get(o.a.Students,{page:e,limit:a,class_id:t})},student:function(e){return n["a"].post(o.a.Student,e)},delStudent:function(e){return n["a"].del(o.a.DelStudent,{student_id:e})},search:function(e){return n["a"].get(o.a.Students,{number:e})},wxUser:function(e,a){return n["a"].get(o.a.WxUser,{page:e,limit:a})},bindFamily:function(e){return n["a"].post(o.a.BindFamily,e)},familySearch:function(e){return n["a"].get(o.a.FamilySearch,{number:e})},studentFace:function(e){return n["a"].post(o.a.StudentFace,e)},faceLogs:function(e,a,t){return n["a"].get(o.a.StudentFaceLogs,{page:e,limit:a,id:t})},grade:function(e){return n["a"].post(o.a.Grade,e)},grades:function(e,a){return n["a"].get(o.a.Grades,{page:e,limit:a})},delGrade:function(e){return n["a"].del(o.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(o.a.Class,e)},classes:function(e,a,t){var r;return n["a"].get(o.a.Classes,(r={page:e,limit:a},Object(l["a"])(r,"limit",a),Object(l["a"])(r,"grade_id",t),r))},delClass:function(e){return n["a"].del(o.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(o.a.Device,e)},devices:function(e){return n["a"].post(o.a.Devices,{page:e})},family:function(e,a){return n["a"].get(o.a.Family,{page:e,limit:a})},announcement:function(e){return n["a"].get(o.a.Announcement,{page:e})},teacher:function(e,a,t,l){return n["a"].get(o.a.Teacher,{page:e,limit:a,state:t,worker:l})},delTeacher:function(e){return n["a"].del(o.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(o.a.Audit,e)},schools:function(e,a,t){return n["a"].get(o.a.Schools,{page:e,limit:a,id:t})},oneSchool:function(e){return n["a"].get(o.a.School,{id:e})},schoolTeacher:function(e,a,t){return n["a"].get(o.a.Teacher,{page:e,limit:a,school_id:t})},school:function(e){return n["a"].post(o.a.School,e)},banners:function(e,a){return n["a"].get(o.a.Banners,{page:e,limit:a})},banner:function(e){return n["a"].post(o.a.Banner,e)},message:function(e){return n["a"].post(o.a.Message,e)},messages:function(e,a){return n["a"].get(o.a.Messages,{page:e,limit:a})},messageType:function(e){return n["a"].post(o.a.MessageType,e)},messageTypes:function(e,a){return n["a"].get(o.a.MessageTypes,{page:e,limit:a})},documents:function(e,a){return n["a"].get(o.a.Documents,{page:e,limit:a})},delDocument:function(e){return n["a"].del(o.a.DelDocument,{id:e})},document:function(e){return n["a"].post(o.a.Document,e)},buys:function(e,a){return n["a"].get(o.a.Buys,{page:e,limit:a})},buy:function(e){return n["a"].post(o.a.Buy,e)},roles:function(e,a){return n["a"].get(o.a.Roles,{page:e,limit:a})},role:function(e){return n["a"].post(o.a.Role,e)},delRole:function(e){return n["a"].del(o.a.DelRole,{id:e})},user:function(e){return n["a"].post(o.a.User,e)},users:function(e,a){return n["a"].get(o.a.Users,{page:e,limit:a})},delUser:function(e){return n["a"].del(o.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(o.a.ResetPassword,e)},goods:function(e){return n["a"].get(o.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(o.a.SetProduct,e)},banProduct:function(e){return n["a"].post(o.a.BanProduct,e)},banProducts:function(e,a){return n["a"].get(o.a.BanProducts,{user_id:e,type:a})},userSearch:function(e){return n["a"].get(o.a.UserSearch,{id:e})}};a["a"]=s},"6fc1":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"btn"},[t("el-button",{attrs:{type:"primary"},on:{click:e.addSchool}},[e._v("添加学校")])],1),t("el-dialog",{attrs:{title:"添加学校",visible:e.dialogSchool,"close-on-click-modal":!1},on:{"update:visible":function(a){e.dialogSchool=a}}},[t("div",{staticClass:"box"},[t("el-form",{attrs:{model:e.form,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"学校名称"}},[t("el-input",{attrs:{placeholder:"请输入学校名称"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"学校地址"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入学校地址"},model:{value:e.form.address,callback:function(a){e.$set(e.form,"address",a)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"人脸库(进)"}},[t("el-input",{attrs:{placeholder:"请输入人脸库(进)"},model:{value:e.form.in_group,callback:function(a){e.$set(e.form,"in_group",a)},expression:"form.in_group"}})],1),t("el-form-item",{attrs:{label:"人脸库(出)"}},[t("el-input",{attrs:{placeholder:"请输入人脸库(出)"},model:{value:e.form.out_group,callback:function(a){e.$set(e.form,"out_group",a)},expression:"form.out_group"}})],1),t("el-form-item",{attrs:{label:"收费模式"}},[t("el-input",{model:{value:e.form.mode,callback:function(a){e.$set(e.form,"mode",a)},expression:"form.mode"}})],1),e._l(e.form.grades,(function(a,l){return t("div",{key:l},[t("el-form-item",{attrs:{label:"年级选择"}},[t("el-select",{attrs:{placeholder:"请选择年级"},model:{value:a.title,callback:function(t){e.$set(a,"title",t)},expression:"item.title"}},e._l(e.grade,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"班级"}},[t("el-transfer",{attrs:{data:e.classList,titles:["班级","选中班级"],"button-texts":["取消","确定"]},model:{value:a.classes,callback:function(t){e.$set(a,"classes",t)},expression:"item.classes"}})],1)],1)})),t("el-form-item",{attrs:{label:"操作"}},[t("el-button",{attrs:{type:"success"},on:{click:e.addGrade}},[e._v("添加年级")]),t("el-button",{attrs:{type:"success"},on:{click:e.delGrade}},[e._v("删除年级")])],1),t("div",{staticClass:"submit"},[t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.newSchool}},[e._v("提交")])],1)],1)],2)],1)]),t("el-table",{attrs:{data:e.tableDate}},[t("el-table-column",{attrs:{prop:"id",label:"学校ID",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"学校名称",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"学校地址",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleShowUser(a.$index,a.row)}}},[e._v("查看用户")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleShowFinancial(a.$index,a.row)}}},[e._v("查看财务")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除学校")])]}}])})],1),t("el-dialog",{attrs:{title:"查看学校所有",visible:e.dialogUser,width:"80%"},on:{"update:visible":function(a){e.dialogUser=a}}},[t("div",{staticClass:"box"},[t("div",{staticClass:"btn"},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleUser},model:{value:e.user,callback:function(a){e.user=a},expression:"user"}},e._l(e.userList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"用户"===e.user?t("div",[t("el-table",{attrs:{data:e.userData}},[t("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center"}}),t("el-table-column",{attrs:{prop:"avatarUrl",label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.avatarUrl,alt:""}})]}}],null,!1,297470886)}),t("el-table-column",{attrs:{prop:"nickname",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{domProps:{textContent:e._s(1==a.row.sex?"男":"女")}})]}}],null,!1,1909753546)}),t("el-table-column",{attrs:{prop:"phone",label:"手机号码",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"身份证",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"是否老师",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"是否班主任",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"是否教职工",align:"center"}})],1)],1):e._e(),"学生"===e.user?t("div",[t("el-table",{attrs:{data:e.studentData}},[t("el-table-column",{attrs:{prop:"id",label:"学号",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"年龄",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"年级",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"班级",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"生活头像",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"人脸头像",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"默认家长ID",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"默认家长姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"默认家长手机",align:"center"}})],1)],1):e._e(),"老师"===e.user?t("div",[t("el-table",{attrs:{data:e.teacherData}},[t("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"头像",align:"center"}}),t("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"phone",label:"手机号码",align:"center"}}),t("el-table-column",{attrs:{prop:"id_card",label:"身份证",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"年级",align:"center"}}),t("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"学科",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"人脸头像",align:"center"}}),t("el-table-column",{attrs:{prop:"worker",label:"是否是班主任",align:"center"}}),t("el-table-column",{attrs:{prop:"state",label:"待审核",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}})],1)],1):e._e(),"访客"===e.user?t("div",[t("el-table",{attrs:{data:e.userData}},[t("el-table-column",{attrs:{prop:"id",label:"访客ID",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"用户ID",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"手机号",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"拜访人",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"拜访理由",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"访客人脸",align:"center"}})],1)],1):e._e(),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a}}})],1)])]),t("el-dialog",{attrs:{title:"查看财务",visible:e.dialogFinancial,width:"80%"},on:{"update:visible":function(a){e.dialogFinancial=a}}},[t("div",{staticClass:"box"},[t("div",{staticClass:"btn"},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleFinancial},model:{value:e.financial,callback:function(a){e.financial=a},expression:"financial"}},e._l(e.financialList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"订单列表"===e.financial?t("div",[t("el-table",{attrs:{data:e.financialData}},[t("el-table-column",{attrs:{prop:"id",label:"学校ID",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"订单ID",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"用户ID",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"用户名",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"商品名称",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"商品价格",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"商品时长",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"订单状态",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"创建时间",align:"center"}})],1)],1):e._e(),"财务统计"===e.financial?t("div",[t("el-table",{attrs:{data:e.financialData}},[t("el-table-column",{attrs:{prop:"id",label:"周总额",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"月总额",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"季度总额",align:"center"}}),t("el-table-column",{attrs:{prop:"created_at",label:"上一季度总额",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"年总额",align:"center"}})],1)],1):e._e(),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a}}})],1)])]),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a},"size-change":e.handleSizeChange}})],1)],1)},n=[],r=(t("4160"),t("b0c0"),t("159b"),t("365c")),o={name:"school",data:function(){return{dialogSchool:!1,form:{name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[]},grade:[{value:"一年级",label:"一年级"},{value:"二年级",label:"二年级"},{value:"三年级",label:"三年级"},{value:"四年级",label:"四年级"},{value:"五年级",label:"五年级"},{value:"六年级",label:"六年级"},{value:"初一",label:"初一"},{value:"初二",label:"初二"},{value:"初三",label:"初三"}],classList:[],dialogUser:!1,user:"访客",userList:[{value:1,label:"用户"},{value:2,label:"学生"},{value:3,label:"老师"},{value:4,label:"访客"}],id:"",userData:[],teacherData:[],dialogFinancial:!1,financial:"订单列表",financialList:[{value:1,label:"订单列表"},{value:2,label:"财务统计"}],financialData:[],tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.generateData(),this.getSchool()},methods:{getSchool:function(){var e=this;r["a"].schools(e.currentPage).then((function(a){e.tableDate=a.data,e.totalPage=a.total}))},newSchool:function(){var e=this;e.form.grades.forEach((function(e){for(var a=0;a<e.classes.length;a++)e.classes[a]={title:e.classes[a]}})),r["a"].school(e.form).then((function(a){e.dialogSchool=!1,e.getSchool(),e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[]},e.$message.success("提交成功"),e.currentPage=1}))},handleEdit:function(e,a){var t=this;t.dialogSchool=!0,t.form={name:a.name,address:a.address,in_group:a.in_group,out_group:a.out_group,mode:a.mode,user:{username:"",password:""},grades:[]}},handleShowUser:function(e,a){var t=this;t.dialogUser=!0,t.id=a.id},handleUser:function(e){var a=this;1===e&&(a.user="用户",r["a"].schoolTeacher(1,10).then((function(e){a.userData=e.data}))),2===e&&(a.user="学生"),3===e&&(a.user="老师",r["a"].schoolTeacher(1,10,a.id).then((function(e){a.teacherData=e.data}))),4===e&&(a.user="访客")},handleShowFinancial:function(e,a){var t=this;t.dialogFinancial=!0},handleFinancial:function(e){var a=this;1===e&&(a.financial="订单列表"),2===e&&(a.financial="财务统计")},handleDelete:function(e,a){},addSchool:function(){var e=this;e.dialogSchool=!0,e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[]}},addGrade:function(){var e=this;e.form.grades.push({})},delGrade:function(){var e=this;e.form.grades.pop({})},generateData:function(e){for(var a=this,t=["一班","二班","三班","四班","五班","六班","七班","八班","九班","十班"],l=0;l<t.length;l++)a.classList.push({key:t[l],label:t[l]});return a.classList},handleCurrentChange:function(e){var a=this;a.getSchool()},handleSizeChange:function(e){var a=this;r["a"].schools(a.currentPage,e).then((function(e){a.tableDate=e.data,a.totalPage=e.total}))}}},s=o,i=t("2877"),c=Object(i["a"])(s,l,n,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1638edbc.ed3223c9.js.map