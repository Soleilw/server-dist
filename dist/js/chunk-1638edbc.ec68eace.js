(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1638edbc"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),r=a("99b1"),o=a.n(r),l={students:function(e,t,a){return n["a"].get(o.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(o.a.Student,e)},delStudent:function(e){return n["a"].del(o.a.DelStudent,{student_id:e})},searchName:function(e,t,a,r){return n["a"].get(o.a.Students,{page:e,limit:t,name:a,number:r})},seekUser:function(e){return n["a"].get(o.a.SeekUser,{keyword:e})},wxUser:function(e,t){return n["a"].get(o.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(o.a.BindFamily,e)},familySearch:function(e,t,a){return n["a"].get(o.a.FamilySearch,{page:e,limit:t,number:a})},studentFace:function(e){return n["a"].post(o.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(o.a.StudentEditFace,e)},failFace:function(e,t){return n["a"].post(o.a.FailFace,{id:e,type:t})},pushFace:function(e,t){return n["a"].post(o.a.PushFace,{id:e,type:t})},pushFace1:function(e,t,a){return n["a"].post(o.a.PushFace,{id:e,type:t,uuid:a})},createFace:function(e){return n["a"].post(o.a.CreateFace,{id:e})},studentServe:function(e){return n["a"].get(o.a.StudentServe,{id:e})},faceLogs:function(e,t,a){return n["a"].get(o.a.StudentFaceLogs,{page:e,limit:t,id:a})},notice:function(e,t){return n["a"].get(o.a.Notice,{page:e,limit:t})},searchNotice:function(e,t){return n["a"].get(o.a.Notice,{grade_id:e,class_id:t})},grade:function(e){return n["a"].post(o.a.Grade,e)},grades:function(e,t){return n["a"].get(o.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(o.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(o.a.Class,e)},classes:function(e,t,a){return n["a"].get(o.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(o.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(o.a.Device,e)},devices:function(e){return n["a"].post(o.a.Devices,{page:e})},family:function(e,t){return n["a"].get(o.a.Family,{page:e,limit:t})},masterFamily:function(e){return n["a"].put(o.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(o.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(o.a.Announcement,{page:e})},exam:function(e){return n["a"].post(o.a.Exam,e)},exams:function(e,t){return n["a"].get(o.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,a){return n["a"].get(o.a.ExamsDetail,{page:e,limit:t,exam_id:a})},delExam:function(e){return n["a"].del(o.a.Exam,{id:e})},subjects:function(){return n["a"].get(o.a.Subjects)},importsExam:function(e,t){return n["a"].post(o.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t,a){return n["a"].get(o.a.Imports,{page:e,limit:t,type:a})},delImport:function(e){return n["a"].del(o.a.DelImport,{id:e})},example:function(e){return n["a"].getExcel(o.a.Export,{subjects:e})},teacher:function(e,t,a,r){return n["a"].get(o.a.Teacher,{page:e,limit:t,state:a,worker:r})},delTeacher:function(e){return n["a"].del(o.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(o.a.Audit,e)},schools:function(e,t,a,r){return n["a"].get(o.a.Schools,{page:e,limit:t,mode:a,id:r})},oneSchool:function(e){return n["a"].get(o.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(o.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(o.a.SchoolUser,{page:e,limit:t,school_id:a})},visitors:function(e,t,a){return n["a"].get(o.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(o.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(o.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(o.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(o.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(o.a.School,e)},delSchool:function(e){return n["a"].del(o.a.DelSchool,{school_id:e})},pushSchFace:function(e){return n["a"].post(o.a.PushSchFace,{school_id:e})},banners:function(e,t){return n["a"].get(o.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(o.a.Banner,e)},message:function(e){return n["a"].post(o.a.Message,e)},messages:function(e,t){return n["a"].get(o.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(o.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(o.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(o.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(o.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(o.a.DelDocument,{id:e})},document:function(e){return n["a"].post(o.a.Document,e)},documentDel:function(e){return n["a"].del(o.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(o.a.DelBanner,{id:e})},buys:function(e,t){return n["a"].get(o.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(o.a.Buy,e)},delBuy:function(e){return n["a"].del(o.a.Buy,{id:e})},roles:function(e,t){return n["a"].get(o.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(o.a.Role,e)},delRole:function(e){return n["a"].del(o.a.DelRole,{id:e})},user:function(e){return n["a"].post(o.a.User,e)},users:function(e,t){return n["a"].get(o.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(o.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(o.a.ResetPassword,e)},goods:function(e){return n["a"].get(o.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(o.a.SetProduct,e)},banProduct:function(e){return n["a"].post(o.a.BanProduct,e)},banProducts:function(e){return n["a"].get(o.a.BanProducts,{user_id:e})},userSearch:function(e,t){return n["a"].get(o.a.UserSearch,{id:e,nickname:t})},jurisdictionSchool:function(e,t,a,r){return n["a"].get(o.a.JurisdictionSchool,{page:e,limit:t,user_id:a,mode:r})},jurisdictionProducts:function(e){return n["a"].get(o.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(o.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(o.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,r){return n["a"].get(o.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:r})},classCheckCount:function(e){return n["a"].get(o.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(o.a.Statistics,{school_id:e,grade_id:t})},payTotal:function(e,t){return n["a"].get(o.a.PayTotal,{school_id:e,grade_id:t})},getConfigs:function(){return n["a"].get(o.a.Configs)},delFaceSwitch:function(e){return n["a"].del(o.a.Configs,{id:e})},faceSwitch:function(e){return n["a"].post(o.a.Configs,e)},userOrder:function(e){return n["a"].get(o.a.UserOrder,{user_id:e})},refund:function(e,t){return n["a"].post(o.a.Refund,{id:e,price:t})},gainStuInfo:function(e,t){return n["a"].get(o.a.StuInfo,{page:e,limit:t})},serStuInfo:function(e,t,a,r){return n["a"].get(o.a.StuInfo,{page:e,limit:t,name:a,number:r})}};t["a"]=l},"6fc1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addSchool}},[e._v("添加学校")])],1)]),a("el-dialog",{attrs:{title:"添加学校",visible:e.dialogSchool,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogSchool=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学校名称"}},[a("el-input",{attrs:{placeholder:"请输入学校名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"学校地址"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入学校地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"人脸库(进)"}},[a("el-input",{attrs:{placeholder:"请输入人脸库(进)"},model:{value:e.form.in_group,callback:function(t){e.$set(e.form,"in_group",t)},expression:"form.in_group"}})],1),a("el-form-item",{attrs:{label:"人脸库(出)"}},[a("el-input",{attrs:{placeholder:"请输入人脸库(出)"},model:{value:e.form.out_group,callback:function(t){e.$set(e.form,"out_group",t)},expression:"form.out_group"}})],1),a("el-form-item",{attrs:{label:"收费模式"}},[a("el-input",{model:{value:e.form.mode,callback:function(t){e.$set(e.form,"mode",t)},expression:"form.mode"}})],1),e._l(e.form.grades,(function(t,n){return a("div",{key:n},[a("el-form-item",{attrs:{label:"年级选择"}},[a("el-select",{attrs:{placeholder:"请选择年级"},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}},e._l(e.grade,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-transfer",{attrs:{data:e.classList,titles:["班级","选中班级"],"button-texts":["取消","确定"]},model:{value:t.classes,callback:function(a){e.$set(t,"classes",a)},expression:"item.classes"}})],1)],1)})),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"success"},on:{click:e.addGrade}},[e._v("添加年级")]),a("el-button",{attrs:{type:"success"},on:{click:e.delGrade}},[e._v("删除年级")])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newSchool}},[e._v("提交")])],1)],1)],2)],1)]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学校ID"}}),a("el-table-column",{attrs:{prop:"name",label:"学校名称"}}),a("el-table-column",{attrs:{prop:"address",label:"学校地址"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a("el-table-column",{attrs:{label:"操作",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作 "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowUser(t.$index,t.row)}}},[e._v("查看用户")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowFinancial(t.$index,t.row)}}},[e._v("查看财务")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFace(t.$index,t.row)}}},[e._v("全库推送")])],1),a("el-dropdown-item",[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除学校")])],1)],1)],1)]}}])})],1),a("el-dialog",{attrs:{title:"查看学校所有",visible:e.dialogUser,width:"80%"},on:{"update:visible":function(t){e.dialogUser=t},close:e.closeShowUser}},[a("div",{staticClass:"box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleUser},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}},e._l(e.userList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"用户"==e.user?[a("el-table",{attrs:{data:e.userData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"href",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"worker",label:"是否老师"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"worker",label:"是否班主任"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"worker",label:"是否教职工"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.userCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.userSize,layout:"sizes, prev, pager, next, jumper",total:e.userTotal},on:{"current-change":e.userChange,"update:currentPage":function(t){e.userCurrent=t},"update:current-page":function(t){e.userCurrent=t},"size-change":e.userSizeChange}})],1)]:e._e(),"学生"==e.user?[a("el-table",{attrs:{data:e.studentData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"grades.title",label:"年级"}}),a("el-table-column",{attrs:{prop:"class.title",label:"班级"}}),a("el-table-column",{attrs:{prop:"face_id",label:"生活头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.face_id,alt:""}})]}}],null,!1,124218351)}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.face_image,alt:""}})]}}],null,!1,2704994181)}),a("el-table-column",{attrs:{prop:"userInfo.user_id",label:"默认家长ID"}}),a("el-table-column",{attrs:{prop:"userInfo.name",label:"默认家长姓名"}}),a("el-table-column",{attrs:{prop:"userInfo.phone",label:"默认家长手机"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.studentCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.studentSize,layout:"sizes, prev, pager, next, jumper",total:e.studentTotal},on:{"current-change":e.studentChange,"update:currentPage":function(t){e.studentCurrent=t},"update:current-page":function(t){e.studentCurrent=t},"size-change":e.studentSizeChange}})],1)]:e._e(),"教师"==e.user?[a("el-table",{attrs:{data:e.teacherData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"wxUser.nickname",label:"昵称"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"grades.title",label:"年级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(null==t.row.grades.title?"无":t.row.grades.title)}})]}}],null,!1,2374875946)}),a("el-table-column",{attrs:{prop:"class.title",label:"班级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(null==t.row.class.title?"无":t.row.class.title)}})]}}],null,!1,3237301482)}),a("el-table-column",{attrs:{prop:"href",label:"人脸头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)}),a("el-table-column",{attrs:{prop:"worker",label:"是否是班主任"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"state",label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("待审核")]):2==t.row.state?a("span",[e._v("已通过")]):3==t.row.state?a("span",[e._v("未通过")]):e._e()]}}],null,!1,3037457847)}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.teacherCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.teacherSize,layout:"sizes, prev, pager, next, jumper",total:e.teacherTotal},on:{"current-change":e.teacherChange,"update:currentPage":function(t){e.teacherCurrent=t},"update:current-page":function(t){e.teacherCurrent=t},"size-change":e.teacherSizeChange}})],1)]:e._e(),"访客"==e.user?[a("el-table",{attrs:{data:e.visitorData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"访客ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"user_name",label:"拜访人"}}),a("el-table-column",{attrs:{prop:"reason",label:"拜访理由"}}),a("el-table-column",{attrs:{prop:"href",label:"访客人脸"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.visitorCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.visitorSize,layout:"sizes, prev, pager, next, jumper",total:e.visitorTotal},on:{"current-change":e.visitorChange,"update:currentPage":function(t){e.visitorCurrent=t},"update:current-page":function(t){e.visitorCurrent=t},"size-change":e.visitorSizeChange}})],1)]:e._e()],2)]),a("el-dialog",{attrs:{title:"查看财务",visible:e.dialogFinancial,width:"80%"},on:{"update:visible":function(t){e.dialogFinancial=t},close:e.closeFinancial}},[a("div",{staticClass:"box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleFinancial},model:{value:e.financial,callback:function(t){e.financial=t},expression:"financial"}},e._l(e.financialList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"订单列表"===e.financial?a("div",[a("el-table",{attrs:{data:e.orderData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"school_id",label:"学校ID"}}),a("el-table-column",{attrs:{prop:"no",label:"订单ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"user_name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"商品价格"}}),a("el-table-column",{attrs:{prop:"time",label:"商品时长"}}),a("el-table-column",{attrs:{prop:"status",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",[e._v("提交")]):2==t.row.status?a("span",[e._v("已付款")]):3==t.row.status?a("span",[e._v("无效")]):e._e()]}}],null,!1,1300003384)}),a("el-table-column",{attrs:{prop:"created_id",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.orderCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.orderSize,layout:"sizes, prev, pager, next, jumper",total:e.orderTotal},on:{"current-change":e.orderChange,"update:currentPage":function(t){e.orderCurrent=t},"update:current-page":function(t){e.orderCurrent=t},"size-change":e.orderSizeChange}})],1)],1):e._e(),"财务统计"===e.financial?a("div",[a("el-table",{attrs:{data:e.financialData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"周总额"}}),a("el-table-column",{attrs:{prop:"name",label:"月总额"}}),a("el-table-column",{attrs:{prop:"address",label:"季度总额"}}),a("el-table-column",{attrs:{prop:"created_at",label:"上一季度总额"}}),a("el-table-column",{attrs:{prop:"id",label:"年总额"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentFinancePage,"page-sizes":[10,20,30,40,50],"page-size":e.financePageSize,layout:"sizes, prev, pager, next, jumper",total:e.financeTotalPage},on:{"current-change":e.handleFinanceChange,"update:currentPage":function(t){e.currentFinancePage=t},"update:current-page":function(t){e.currentFinancePage=t},"size-change":e.handleFinanceSizeChange}})],1)],1):e._e()])]),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除学校",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该学校")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("el-dialog",{attrs:{visible:e.dialogFace,title:"全库推送人脸",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFace=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否全库推送人脸")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.pushFace}},[e._v("推送")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogFace=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,30,40,50],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.handleSizeChange}})],1)],1)},r=[],o=(a("4160"),a("b0c0"),a("159b"),a("365c")),l={name:"school",data:function(){return{loading:!0,dialogSchool:!1,dialogDel:!1,form:{name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[],id:""},grade:[{value:1,label:"一年级"},{value:"二年级",label:"二年级"},{value:"三年级",label:"三年级"},{value:"四年级",label:"四年级"},{value:"五年级",label:"五年级"},{value:"六年级",label:"六年级"},{value:"初一",label:"初一"},{value:"初二",label:"初二"},{value:"初三",label:"初三"},{value:"高一",label:"高一"},{value:"高二",label:"高二"},{value:"高三",label:"高三"},{value:"小班",label:"小班"},{value:"中班",label:"中班"},{value:"大班",label:"大班"}],classList:[],dialogUser:!1,user:"访客",userList:[{value:1,label:"用户"},{value:2,label:"学生"},{value:3,label:"教师"},{value:4,label:"访客"}],id:"",userData:[],userSize:10,userTotal:0,userCurrent:1,teacherData:[],teacherSize:10,teacherTotal:0,teacherCurrent:1,studentData:[],studentSize:10,studentTotal:0,studentCurrent:1,visitorData:[],visitorSize:10,visitorTotal:0,visitorCurrent:1,dialogFinancial:!1,financial:"订单列表",financialList:[{value:1,label:"订单列表"},{value:2,label:"财务统计"}],orderData:[],orderSize:10,orderTotal:0,orderCurrent:1,financialData:[],financePageSize:10,financeTotalPage:0,currentFinancePage:1,tableDate:[],current:1,size:10,total:0,school_id:"",dialogFace:!1}},mounted:function(){this.generateData(),this.getSchool()},methods:{getSchool:function(){var e=this;o["a"].schools(e.current).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentChange:function(e){var t=this;t.current=e,t.loading=!0,o["a"].schools(e,t.size).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},handleSizeChange:function(e){var t=this;t.size=e,t.loading=!0,o["a"].schools(t.current,e).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},newSchool:function(){var e=this;e.form.grades.forEach((function(e){for(var t=0;t<e.classes.length;t++)e.classes[t]={title:e.classes[t]}})),o["a"].school(e.form).then((function(t){e.dialogSchool=!1,e.getSchool(),e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[]},e.$message.success("提交成功"),e.current=1}))},handleEdit:function(e,t){var a=this;a.dialogSchool=!0,a.form={name:t.name,address:t.address,in_group:t.in_group,out_group:t.out_group,mode:t.mode,user:{username:"",password:""},grades:[],id:t.id}},handleShowUser:function(e,t){var a=this;a.dialogUser=!0,a.id=t.id},closeShowUser:function(){var e=this;e.user="访客",e.userSize=10,e.teacherSize=10,e.visitorSize=10,e.studentSize=10,e.userCurrent=1,e.teacherCurrent=1,e.visitorCurrent=1,e.studentCurrent=1,e.userData=[],e.studentData=[],e.teacherData=[],e.visitorData=[]},handleUser:function(e){var t=this;switch(e){case 1:t.$nextTick((function(){t.user="用户",o["a"].schoolUser(t.userCurrent,t.userSize,t.id).then((function(e){t.userData=e.data,t.userTotal=e.total,t.$message.success("获取数据成功")}))}));break;case 2:t.$nextTick((function(){t.user="学生",o["a"].studentInfo(t.studentCurrent,t.studentSize,t.id).then((function(e){t.studentData=e.data,t.studentTotal=e.total,t.$message.success("获取数据成功")}))}));break;case 3:t.$nextTick((function(){t.user="教师",o["a"].teacherUser(t.teacherCurrent,t.teacherSize,t.id).then((function(e){t.teacherData=e.data,t.teacherTotal=e.total,t.$message.success("获取数据成功")}))}));break;case 4:t.$nextTick((function(){t.user="访客",o["a"].visitors(t.visitorCurrent,t.visitorSize,t.id).then((function(e){t.visitorData=e.data,t.visitorTotal=e.total,t.$message.success("获取数据成功")}))}));break}},userChange:function(e){var t=this;t.userCurrent=e,o["a"].schoolUser(e,t.userSize,t.id).then((function(e){t.userData=e.data,t.userTotal=e.total}))},userSizeChange:function(e){var t=this;t.userSize=e,o["a"].schoolUser(t.userCurrent,e,t.id).then((function(e){t.userData=e.data,t.userTotal=e.total}))},studentChange:function(e){var t=this;t.studentCurrent=e,o["a"].studentInfo(e,t.studentSize,t.id).then((function(e){t.studentData=e.data,t.studentTotal=e.total}))},studentSizeChange:function(e){var t=this;t.studentSize=e,o["a"].studentInfo(t.studentCurrent,e,t.id).then((function(e){t.studentData=e.data,t.studentTotal=e.total}))},teacherChange:function(e){var t=this;t.teacherCurrent=e,o["a"].teacherUser(e,t.teacherSize,t.id).then((function(e){t.teacherData=e.data,t.teacherTotal=e.total}))},teacherSizeChange:function(e){var t=this;t.teacherSize=e,o["a"].teacherUser(t.teacherCurrent,e,t.id).then((function(e){t.teacherData=e.data,t.teacherTotal=e.total}))},visitorChange:function(e){var t=this;t.visitorCurrent=e,o["a"].visitors(e,t.visitorSize,t.id).then((function(e){t.visitorData=e.data,t.visitorTotal=e.total}))},visitorSizeChange:function(e){var t=this;t.visitorSize=e,o["a"].visitors(t.visitorCurrent,e,t.id).then((function(e){t.visitorData=e.data,t.visitorTotal=e.total}))},handleShowFinancial:function(e,t){var a=this;a.dialogFinancial=!0,a.id=t.id,a.orderCurrent=1,a.orderSize=10},handleFinancial:function(e){var t=this;switch(e){case 1:t.$nextTick((function(){t.financial="订单列表",o["a"].orders(1,10,t.id).then((function(e){t.orderData=e.data,t.orderTotal=e.total,t.$message.success("获取数据成功")}))}));break;case 2:t.financial="财务统计",o["a"].orders(1,10,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total,t.$message.success("获取数据成功")}));break}},orderChange:function(e){var t=this;t.orderCurrent=e,o["a"].orders(e,t.orderSize,t.id).then((function(e){t.orderData=e.data,t.orderTotal=e.total}))},orderSizeChange:function(e){var t=this;t.orderSize=e,o["a"].orders(t.orderCurrent,e,t.id).then((function(e){t.orderData=e.data,t.orderTotal=e.total}))},handleFinanceChange:function(e){var t=this;t.currentFinancePage=e,o["a"].orders(e,t.financePageSize,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total}))},handleFinanceSizeChange:function(e){var t=this;o["a"].orders(e,t.currentFinancePage,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total}))},closeFinancial:function(){var e=this;e.financial="订单列表",e.orderData=[],e.financialData=[]},handleDelete:function(e,t){var a=this;console.log(t),a.school_id=t.id,a.dialogDel=!0},toDel:function(){var e=this;o["a"].delSchool(e.school_id).then((function(t){e.dialogDel=!1,e.$message.success("删除成功"),e.getSchool()}))},handleFace:function(e,t){var a=this;a.dialogFace=!0,a.school_id=t.id,console.log(t)},pushFace:function(){var e=this,t=this.$loading({lock:!0,text:"推送中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});o["a"].pushSchFace(e.school_id).then((function(a){t.close(),e.$message.success("推送成功"),e.dialogFace=!1})).catch((function(e){console.log(e),t.close()}))},addSchool:function(){var e=this;e.dialogSchool=!0,e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[]}},addGrade:function(){var e=this;e.form.grades.push({})},delGrade:function(){var e=this;e.form.grades.pop({})},generateData:function(e){for(var t=this,a=["一班","二班","三班","四班","五班","六班","七班","八班","九班","十班"],n=0;n<a.length;n++)t.classList.push({key:a[n],label:a[n]});return t.classList}}},i=l,s=a("2877"),u=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1638edbc.ec68eace.js.map