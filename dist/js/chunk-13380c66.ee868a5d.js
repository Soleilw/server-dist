(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13380c66"],{"365c":function(t,e,n){"use strict";var a=n("be3b"),i=n("99b1"),o=n.n(i),r={students:function(t,e,n){return a["a"].get(o.a.Students,{page:t,limit:e,class_id:n})},student:function(t){return a["a"].post(o.a.Student,t)},delStudent:function(t){return a["a"].del(o.a.DelStudent,{student_id:t})},searchName:function(t,e,n,i){return a["a"].get(o.a.Students,{page:t,limit:e,name:n,number:i})},seekUser:function(t){return a["a"].get(o.a.SeekUser,{keyword:t})},wxUser:function(t,e){return a["a"].get(o.a.WxUser,{page:t,limit:e})},bindFamily:function(t){return a["a"].post(o.a.BindFamily,t)},familySearch:function(t,e,n){return a["a"].get(o.a.FamilySearch,{page:t,limit:e,number:n})},studentFace:function(t){return a["a"].post(o.a.StudentFace,t)},studentEditFace:function(t){return a["a"].put(o.a.StudentEditFace,t)},failFace:function(t){return a["a"].post(o.a.FailFace,{id:t})},pushFace:function(t){return a["a"].post(o.a.PushFace,{id:t})},pushFace1:function(t,e){return a["a"].post(o.a.PushFace,{id:t,uuid:e})},createFace:function(t){return a["a"].post(o.a.CreateFace,{id:t})},studentServe:function(t){return a["a"].get(o.a.StudentServe,{id:t})},faceLogs:function(t,e,n){return a["a"].get(o.a.StudentFaceLogs,{page:t,limit:e,id:n})},notice:function(t,e){return a["a"].get(o.a.Notice,{page:t,limit:e})},searchNotice:function(t,e){return a["a"].get(o.a.Notice,{grade_id:t,class_id:e})},grade:function(t){return a["a"].post(o.a.Grade,t)},grades:function(t,e){return a["a"].get(o.a.Grades,{page:t,limit:e})},delGrade:function(t){return a["a"].del(o.a.DelGrade,{grade_id:t})},_class:function(t){return a["a"].post(o.a.Class,t)},classes:function(t,e,n){return a["a"].get(o.a.Classes,{page:t,limit:e,grade_id:n})},delClass:function(t){return a["a"].del(o.a.DelClass,{class_id:t})},device:function(t){return a["a"].post(o.a.Device,t)},devices:function(t){return a["a"].post(o.a.Devices,{page:t})},family:function(t,e){return a["a"].get(o.a.Family,{page:t,limit:e})},masterFamily:function(t){return a["a"].put(o.a.MasterFamily,t)},delFamily:function(t){return a["a"].del(o.a.DelFamily,{id:t})},announcement:function(t){return a["a"].get(o.a.Announcement,{page:t})},exam:function(t){return a["a"].post(o.a.Exam,t)},exams:function(t,e){return a["a"].get(o.a.Exams,{page:t,limit:e})},examsDetail:function(t,e,n){return a["a"].get(o.a.ExamsDetail,{page:t,limit:e,exam_id:n})},delExam:function(t){return a["a"].del(o.a.Exam,{id:t})},subjects:function(){return a["a"].get(o.a.Subjects)},importsExam:function(t,e){return a["a"].post(o.a.ImportsExam,{exam_id:t,file:e})},imports:function(t,e,n){return a["a"].get(o.a.Imports,{page:t,limit:e,type:n})},delImport:function(t){return a["a"].del(o.a.DelImport,{id:t})},example:function(t){return a["a"].getExcel(o.a.Export,{subjects:t})},teacher:function(t,e,n,i){return a["a"].get(o.a.Teacher,{page:t,limit:e,state:n,worker:i})},delTeacher:function(t){return a["a"].del(o.a.DelTeacher,{id:t})},audit:function(t){return a["a"].post(o.a.Audit,t)},schools:function(t,e,n,i){return a["a"].get(o.a.Schools,{page:t,limit:e,mode:n,id:i})},oneSchool:function(t){return a["a"].get(o.a.School,{id:t})},studentInfo:function(t,e,n){return a["a"].get(o.a.StudentInfo,{page:t,limit:e,school_id:n})},schoolUser:function(t,e,n){return a["a"].get(o.a.SchoolUser,{page:t,limit:e,school_id:n})},visitors:function(t,e,n){return a["a"].get(o.a.Visitors,{page:t,limit:e,school_id:n})},teacherUser:function(t,e,n){return a["a"].get(o.a.TeacherUser,{page:t,limit:e,school_id:n})},orders:function(t,e,n){return a["a"].get(o.a.Orders,{page:t,limit:e,school_id:n})},server:function(t,e,n){return a["a"].get(o.a.Server,{page:t,limit:e,product_id:n})},schoolTeacher:function(t,e,n){return a["a"].get(o.a.Teacher,{page:t,limit:e,school_id:n})},school:function(t){return a["a"].post(o.a.School,t)},delSchool:function(t){return a["a"].del(o.a.DelSchool,{school_id:t})},pushSchFace:function(t){return a["a"].post(o.a.PushSchFace,{school_id:t})},banners:function(t,e){return a["a"].get(o.a.Banners,{page:t,limit:e})},banner:function(t){return a["a"].post(o.a.Banner,t)},message:function(t){return a["a"].post(o.a.Message,t)},messages:function(t,e){return a["a"].get(o.a.Messages,{page:t,limit:e})},messageType:function(t){return a["a"].post(o.a.MessageType,t)},messageTypes:function(t,e){return a["a"].get(o.a.MessageTypes,{page:t,limit:e})},delDocumentType:function(t){return a["a"].del(o.a.DelDocumentType,{id:t})},documents:function(t,e){return a["a"].get(o.a.Documents,{page:t,limit:e})},delDocument:function(t){return a["a"].del(o.a.DelDocument,{id:t})},document:function(t){return a["a"].post(o.a.Document,t)},documentDel:function(t){return a["a"].del(o.a.DocumentDel,{id:t})},delBanner:function(t){return a["a"].del(o.a.DelBanner,{id:t})},buys:function(t,e){return a["a"].get(o.a.Buys,{page:t,limit:e})},buy:function(t){return a["a"].post(o.a.Buy,t)},delBuy:function(t){return a["a"].del(o.a.Buy,{id:t})},roles:function(t,e){return a["a"].get(o.a.Roles,{page:t,limit:e})},role:function(t){return a["a"].post(o.a.Role,t)},delRole:function(t){return a["a"].del(o.a.DelRole,{id:t})},user:function(t){return a["a"].post(o.a.User,t)},users:function(t,e){return a["a"].get(o.a.Users,{page:t,limit:e})},delUser:function(t){return a["a"].del(o.a.DelUser,{id:t})},resetPassword:function(t){return a["a"].post(o.a.ResetPassword,t)},goods:function(t){return a["a"].get(o.a.Buys,{school_id:t})},setProduct:function(t){return a["a"].post(o.a.SetProduct,t)},banProduct:function(t){return a["a"].post(o.a.BanProduct,t)},banProducts:function(t){return a["a"].get(o.a.BanProducts,{user_id:t})},userSearch:function(t){return a["a"].get(o.a.UserSearch,{id:t})},jurisdictionSchool:function(t,e,n,i){return a["a"].get(o.a.JurisdictionSchool,{page:t,limit:e,user_id:n,mode:i})},jurisdictionProducts:function(t){return a["a"].get(o.a.JurisdictionProducts,{school_id:t})},jurisdictionStudent:function(t,e){return a["a"].get(o.a.JurisdictionStudent,{user_id:t,school_id:e})},studentsTatal:function(t,e){return a["a"].get(o.a.StudentsTatal,{type:t,id:e})},studentGender:function(t,e,n,i){return a["a"].get(o.a.StudentGender,{sex:t,type:e,school_id:n,grade_id:i})},classCheckCount:function(t){return a["a"].get(o.a.ClassCheckCount,{id:t})},statistics:function(t,e){return a["a"].get(o.a.Statistics,{school_id:t,grade_id:e})},getConfigs:function(){return a["a"].get(o.a.Configs)},delFaceSwitch:function(t){return a["a"].del(o.a.Configs,{id:t})},faceSwitch:function(t){return a["a"].post(o.a.Configs,t)},userOrder:function(t){return a["a"].get(o.a.UserOrder,{user_id:t})}};e["a"]=r},"58d5":function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[n("div",{staticClass:"handle-box"},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.addDocument}},[t._v("添加文档")])],1)]),n("el-dialog",{attrs:{visible:t.dialogDocument,title:"文档编辑"},on:{"update:visible":function(e){t.dialogDocument=e}}},[n("div",{staticClass:"box"},[n("div",{staticStyle:{margin:"0 10px"}},[n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[t._v("文档标题")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticStyle:{width:"100%",height:"30px","line-height":"30px","font-size":"15px"},attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[t._v("文档内容")]),n("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"430px",margin:"0 0 60px 0"},attrs:{options:t.editorOption},model:{value:t.form.detail,callback:function(e){t.$set(t.form,"detail",e)},expression:"form.detail"}}),n("el-upload",{staticClass:"avatar-uploader quill-img",staticStyle:{display:"none"},attrs:{action:"https://api.fengniaotuangou.cn/api/upload","before-upload":t.beforeUpload,"on-success":t.quillImgSuccess}},[n("el-button",{attrs:{size:"small",type:"primary",id:"imgInput","element-loading-text":"插入中,请稍候"}},[t._v("点击上传")])],1),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:t.newDocument}},[t._v("提交")])],1)],1)])]),n("el-table",{attrs:{data:t.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[n("el-table-column",{attrs:{prop:"id",label:"文档ID"}}),n("el-table-column",{attrs:{prop:"title",label:"文档标题"}}),n("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:t.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDel=e}}},[n("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("是否删除该文档")]),n("span",[n("el-button",{attrs:{type:"primary"},on:{click:t.toDel}},[t._v("删除")]),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogDel=!1}}},[t._v("取消")])],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[10,20,30,40,50],"page-size":t.size,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"size-change":t.sizeChange}})],1)],1)},o=[],r=n("365c"),u=n("953d"),c=(n("a7539"),n("8096"),n("14e1"),{name:"document",components:{quillEditor:u["quillEditor"]},data:function(){return{loading:!0,dialogDocument:!1,form:{title:"",detail:""},editorOption:{placeholder:"请输入文档内容",theme:"snow",modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]],handlers:{image:function(t){t?document.querySelector(".quill-img input").click():this.quill.format("image",!1)}}}}},tableDate:[],dialogDel:!1,id:"",current:1,size:10,total:0}},mounted:function(){this.getDocument()},methods:{getDocument:function(){var t=this;r["a"].documents(t.current).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},currentChange:function(t){var e=this;e.current=t,e.loading=!0,r["a"].documents(t,e.size).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},sizeChange:function(t){var e=this;e.size=t,e.loading=!0,r["a"].documents(e.current,t).then((function(t){e.loading=!1,e.tableDate=t.data,e.total=t.total}))},newDocument:function(){var t=this;r["a"].document(t.form).then((function(e){t.$message.success("提交成功"),t.dialogDocument=!1,t.getDocument(),t.form={},t.current=1}))},addDocument:function(){var t=this;t.dialogDocument=!0,t.form={title:"",detail:""}},beforeUpload:function(){a=this.$loading({lock:!0,text:"图片上传中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},quillImgSuccess:function(t,e){var n=this.$refs.myQuillEditor.quill;if(a.close(),t.data){var i=n.getSelection().index;n.insertEmbed(i,"image",t.data),n.setSelection(i+1)}else this.$message.error("图片插入失败")},handleEdit:function(t,e){var n=this;n.dialogDocument=!0,n.form=e},handleDelete:function(t,e){var n=this;n.dialogDel=!0,n.id=e.id},toDel:function(){var t=this;r["a"].delDocument(t.id).then((function(e){t.$message.success("删除成功"),t.dialogDel=!1,t.getDocument(),t.current=1}))}}}),l=c,s=n("2877"),d=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-13380c66.ee868a5d.js.map