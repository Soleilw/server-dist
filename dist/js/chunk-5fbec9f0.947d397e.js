(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fbec9f0"],{"62b6":function(e,t,n){"use strict";n.r(t);var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addDocument}},[e._v("添加文档")])],1),n("el-dialog",{attrs:{visible:e.dialogDocument,title:"文档编辑"},on:{"update:visible":function(t){e.dialogDocument=t}}},[n("div",{staticClass:"box"},[n("div",{staticStyle:{margin:"0 10px"}},[n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("文档标题")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.title,expression:"form.title"}],staticStyle:{width:"100%",height:"30px","line-height":"30px","font-size":"15px"},attrs:{type:"text"},domProps:{value:e.form.title},on:{input:function(t){t.target.composing||e.$set(e.form,"title",t.target.value)}}}),n("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("文档内容")]),n("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"430px",margin:"0 0 60px 0"},attrs:{options:e.editorOption},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}}),n("el-upload",{staticClass:"avatar-uploader quill-img",staticStyle:{display:"none"},attrs:{action:"https://api.fengniaotuangou.cn/api/upload","before-upload":e.beforeUpload,"on-success":e.quillImgSuccess}},[n("el-button",{attrs:{size:"small",type:"primary",id:"imgInput","element-loading-text":"插入中,请稍候"}},[e._v("点击上传")])],1),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:e.newDocument}},[e._v("提交")])],1)],1)])]),n("el-table",{ref:"multipleTable",staticClass:"aip-table",attrs:{data:e.tableDate},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"文档ID",align:"center"}}),n("el-table-column",{attrs:{prop:"title",label:"文档标题",align:"center"}}),n("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},i=[],l=n("be3b"),s=n("99b1"),c=n.n(s),r={documents:function(e){return l["a"].get(c.a.Documents,{page:e})},document:function(e){return l["a"].post(c.a.Document,e)}},u=r,d=n("953d"),m=(n("a753"),n("8096"),n("14e1"),{name:"document",components:{quillEditor:d["quillEditor"]},data:function(){return{dialogDocument:!1,form:{title:"",detail:""},editorOption:{placeholder:"请输入文档内容",theme:"snow",modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]],handlers:{image:function(e){e?document.querySelector(".quill-img input").click():this.quill.format("image",!1)}}}}},tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getDocument()},methods:{getDocument:function(){var e=this;u.documents(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},newDocument:function(){var e=this;u.document(e.form).then((function(t){e.$message.success("提交成功"),e.dialogDocument=!1,e.getDocument(),e.form={},e.currentPage=1}))},addDocument:function(){var e=this;e.dialogDocument=!0,e.form={}},beforeUpload:function(){a=this.$loading({lock:!0,text:"图片上传中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},quillImgSuccess:function(e,t){var n=this.$refs.myQuillEditor.quill;if(a.close(),e.data){var o=n.getSelection().index;n.insertEmbed(o,"image",e.data),n.setSelection(o+1)}else this.$message.error("图片插入失败")},handleEdit:function(e,t){var n=this;n.dialogDocument=!0,n.form=t},handleCurrentChange:function(e){var t=this;t.getDocument()}}}),g=m,p=n("2877"),h=Object(p["a"])(g,o,i,!1,null,null,null);t["default"]=h.exports},"99b1":function(e,t){var n="https://school.fengniaotuangou.cn",a={Login:n+"/login",Logout:n+"/logout",School:n+"/school",Schools:n+"/api/schools",Banner:n+"/banner",Banners:n+"/api/banners",Document:n+"/help/doc",Documents:n+"/help/docs",Message:n+"/document",Messages:n+"/documents",MessageType:n+"/document/type",MessageTypes:n+"/document/types",Students:n+"/students",Search:n+"/student",Student:n+"/student",Grade:n+"/grade",Grades:n+"/grades",Class:n+"/class",Classes:n+"/classes",Announcement:n+"/announcement",Device:n+"/device",Devices:n+"/devices",Family:n+"/family",Teacher:n+"/user/infos",Audit:n+"/check/user/info",Buy:n+"/product",Buys:n+"/products",Order:n+"/order",Statistical:n+"/statistical",BindFamily:n+"/wx/users",UpFace:n+"/pass/student"};e.exports=a}}]);
//# sourceMappingURL=chunk-5fbec9f0.947d397e.js.map