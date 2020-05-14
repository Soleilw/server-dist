(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e055a83a"],{1679:function(e,t,a){"use strict";a.r(t);var l,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-delete",disabled:e.disabledDel},on:{click:function(t){return e.delSelection()}}},[e._v("全部删除")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogMessage=!0}}},[e._v("添加资讯")])],1),a("el-table",{ref:"multipleTable",staticClass:"aip-table",attrs:{data:e.tableDate},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"资讯ID",align:"center"}}),a("el-table-column",{attrs:{prop:"type_id",label:"资讯类型",align:"center"}}),a("el-table-column",{attrs:{prop:"detail",label:"资讯描述",align:"center"}}),a("el-table-column",{attrs:{prop:"cover",label:"资讯缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.cover}})]}}])}),a("el-table-column",{attrs:{prop:"detail",label:"资讯浏览量",align:"center"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{visible:e.dialogMessage,title:"文档编辑"},on:{"update:visible":function(t){e.dialogMessage=t}}},[a("div",[a("div",{staticStyle:{margin:"0 30px"}},[a("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("资讯标题")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.title,expression:"form.title"}],staticStyle:{width:"100%",height:"30px","line-height":"30px","font-size":"15px"},attrs:{type:"text"},domProps:{value:e.form.title},on:{input:function(t){t.target.composing||e.$set(e.form,"title",t.target.value)}}}),a("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("资讯分类")]),a("el-select",{attrs:{placeholder:"请选择资讯分类"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),a("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("资讯封面图")]),a("el-upload",{attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess,"on-exceed":e.handleExceed},scopedSlots:e._u([{key:"file",fn:function(t){var l=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:l.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(l)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("h3",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("资讯内容")]),a("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"500px",margin:"0 0 30px 0"},attrs:{options:e.editorOption},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}}),a("el-upload",{staticClass:"avatar-uploader quill-img",staticStyle:{display:"none"},attrs:{action:"https://api.fengniaotuangou.cn/api/upload","before-upload":e.beforeUpload,"on-success":e.quillImgSuccess}},[a("el-button",{attrs:{size:"small",type:"primary",id:"imgInput","element-loading-text":"插入中,请稍候"}},[e._v("点击上传")])],1),a("el-button",{staticClass:"editor-btn",attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)])])],1)},n=[],s=(a("4160"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("5252")),o=a("953d"),r=(a("a753"),a("8096"),a("14e1"),{components:{quillEditor:o["quillEditor"]},data:function(){return{dialogMessage:!1,tableDate:[],typeList:[],form:{type_id:"",title:"",detail:"",cover:""},disabled:!1,title:"",editorOption:{placeholder:"请输入文档内容",theme:"snow",modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]],handlers:{image:function(e){e?document.querySelector(".quill-img input").click():this.quill.format("image",!1)}}}}},disabledDel:!0,currentPage:1,totalPage:0}},mounted:function(){this.getMessageType(),this.getMessages()},methods:{getMessageType:function(){var e=this;s["a"].messageTypes(e.currentPage).then((function(t){e.typeList=t.data}))},getMessages:function(){var e=this;s["a"].messages(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},submit:function(){var e=this;if(e.title)for(var t=0;t<e.typeList.length;t++)e.form.type_id=e.typeList[t].id+1;s["a"].message(e.form).then((function(t){e.$message.success("提交成功"),e.dialogMessage=!1,e.getMessages(),e.currentPage=1}))},delSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.delSelection(e)})):this.$refs.multipleTable.clearSelection()},handleDelete:function(e,t){console.log(e,t)},beforeUpload:function(){l=this.$loading({lock:!0,text:"图片上传中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},quillImgSuccess:function(e,t){console.log(e);var a=this.$refs.myQuillEditor.quill;if(l.close(),e.data){var i=a.getSelection().index;a.insertEmbed(i,"image",e.data),a.setSelection(i+1)}else this.$message.error("图片插入失败")},handleRemove:function(e,t){console.log(e,t)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.$message.success("上传成功"),this.form.cover=t.response.data},handleExceed:function(e,t){this.$message.error("上传图片不能超过1张!")},handleSelectionChange:function(e){this.multipleSelection=e,this.disabledDel=!1,""==this.multipleSelection&&(this.disabledDel=!0)},handleCurrentChange:function(e){var t=this;t.getMessages()}}}),c=r,u=(a("7321"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"0421f0bd",null);t["default"]=d.exports},5252:function(e,t,a){"use strict";var l=a("be3b"),i=a("99b1"),n=a.n(i),s={message:function(e){return l["a"].post(n.a.Message,e)},messages:function(e){return l["a"].get(n.a.Messages,{page:e})},messageType:function(e){return l["a"].post(n.a.MessageType,e)},messageTypes:function(e){return l["a"].get(n.a.MessageTypes,{page:e})}};t["a"]=s},7321:function(e,t,a){"use strict";var l=a("fd30"),i=a.n(l);i.a},fd30:function(e,t,a){}}]);
//# sourceMappingURL=chunk-e055a83a.c79c5da5.js.map