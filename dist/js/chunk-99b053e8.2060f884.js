(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99b053e8"],{"365c":function(e,t,n){"use strict";n("ac1f");var a=n("be3b"),i=n("99b1"),o=n.n(i),r={students:function(e,t){return a["a"].get(o.a.Students,{page:e,class_id:t})},student:function(e){return a["a"].post(o.a.Student,e)},search:function(e){return a["a"].get(o.a.Students,{number:e})},grade:function(e){return a["a"].post(o.a.Grade,e)},grades:function(e){return a["a"].get(o.a.Grades,{page:e})},delGrade:function(e){return a["a"].del(o.a.DelGrade,{grade_id:e})},_class:function(e){return a["a"].post(o.a.Class,e)},classes:function(e,t){return a["a"].get(o.a.Classes,{page:e,grade_id:t})},classes1:function(e,t){return a["a"].get(o.a.Classes,{grade_id:e,limit:t})},device:function(e){return a["a"].post(o.a.Device,e)},devices:function(e){return a["a"].post(o.a.Devices,{page:e})},family:function(e){return a["a"].get(o.a.Family,{page:e})},announcement:function(e){return a["a"].get(o.a.Announcement,{page:e})},bindFamily:function(e,t){return a["a"].get(o.a.BindFamily,{page:e,limit:t})},updateFace:function(e){return a["a"].post(o.a.UpFace,e)},teacher:function(e,t,n){return a["a"].get(o.a.Teacher,{page:e,state:t,worker:n})},audit:function(e){return a["a"].post(o.a.Audit,e)},schools:function(e,t){return a["a"].get(o.a.Schools,{page:e,limit:t})},school:function(e){return a["a"].post(o.a.School,e)},banners:function(e){return a["a"].get(o.a.Banners,{page:e})},banner:function(e){return a["a"].post(o.a.Banner,e)},message:function(e){return a["a"].post(o.a.Message,e)},messages:function(e){return a["a"].get(o.a.Messages,{page:e})},messageType:function(e){return a["a"].post(o.a.MessageType,e)},messageTypes:function(e){return a["a"].get(o.a.MessageTypes,{page:e})},documents:function(e){return a["a"].get(o.a.Documents,{page:e})},delDocument:function(e){return a["a"].del(o.a.DelDocument,{id:e})},document:function(e){return a["a"].post(o.a.Document,e)},buys:function(e){return a["a"].get(o.a.Buys,{page:e})},buy:function(e){return a["a"].post(o.a.Buy,e)},roles:function(e){return a["a"].get(o.a.Roles,{page:e})},role:function(e){return a["a"].post(o.a.Role,e)},delRole:function(e){return a["a"].del(o.a.DelRole,{id:e})},user:function(e){return a["a"].post(o.a.User,e)},users:function(e){return a["a"].get(o.a.Users,{page:e})},resetPassword:function(e){return a["a"].post(o.a.ResetPassword,e)}};t["a"]=r},"58d5":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addDocument}},[e._v("添加文档")])],1),n("el-dialog",{attrs:{visible:e.dialogDocument,title:"文档编辑"},on:{"update:visible":function(t){e.dialogDocument=t}}},[n("div",{staticClass:"box"},[n("div",{staticStyle:{margin:"0 10px"}},[n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("文档标题")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.title,expression:"form.title"}],staticStyle:{width:"100%",height:"30px","line-height":"30px","font-size":"15px"},attrs:{type:"text"},domProps:{value:e.form.title},on:{input:function(t){t.target.composing||e.$set(e.form,"title",t.target.value)}}}),n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("文档内容")]),n("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"430px",margin:"0 0 60px 0"},attrs:{options:e.editorOption},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}}),n("el-upload",{staticClass:"avatar-uploader quill-img",staticStyle:{display:"none"},attrs:{action:"https://api.fengniaotuangou.cn/api/upload","before-upload":e.beforeUpload,"on-success":e.quillImgSuccess}},[n("el-button",{attrs:{size:"small",type:"primary",id:"imgInput","element-loading-text":"插入中,请稍候"}},[e._v("点击上传")])],1),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:e.newDocument}},[e._v("提交")])],1)],1)])]),n("el-table",{attrs:{data:e.tableDate}},[n("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"文档ID",align:"center"}}),n("el-table-column",{attrs:{prop:"title",label:"文档标题",align:"center"}}),n("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[n("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该年级")]),n("span",[n("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogGrade=!1}}},[e._v("取消")])],1)]),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},o=[],r=n("365c"),l=n("953d"),u=(n("a753"),n("8096"),n("14e1"),{name:"document",components:{quillEditor:l["quillEditor"]},data:function(){return{dialogDocument:!1,form:{title:"",detail:""},editorOption:{placeholder:"请输入文档内容",theme:"snow",modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]],handlers:{image:function(e){e?document.querySelector(".quill-img input").click():this.quill.format("image",!1)}}}}},tableDate:[],dialogDel:!1,id:"",currentPage:1,totalPage:0}},mounted:function(){this.getDocument()},methods:{getDocument:function(){var e=this;r["a"].documents(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},newDocument:function(){var e=this;r["a"].document(e.form).then((function(t){e.$message.success("提交成功"),e.dialogDocument=!1,e.getDocument(),e.form={},e.currentPage=1}))},addDocument:function(){var e=this;e.dialogDocument=!0,e.form={}},beforeUpload:function(){a=this.$loading({lock:!0,text:"图片上传中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},quillImgSuccess:function(e,t){var n=this.$refs.myQuillEditor.quill;if(a.close(),e.data){var i=n.getSelection().index;n.insertEmbed(i,"image",e.data),n.setSelection(i+1)}else this.$message.error("图片插入失败")},handleEdit:function(e,t){var n=this;n.dialogDocument=!0,n.form=t},handleDelete:function(e,t){var n=this;n.dialogDel=!0,n.id=t.id},toDel:function(){var e=this;r["a"].delDocument(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getDocument(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.getDocument()}}}),s=u,c=n("2877"),d=Object(c["a"])(s,i,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-99b053e8.2060f884.js.map