(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34fe6820"],{"60b0":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[t("div",{staticClass:"btn"},[t("el-button",{attrs:{type:"primary"},on:{click:e.addBanner}},[e._v("添加轮播图")])],1),t("el-dialog",{attrs:{title:"上传图片",visible:e.dialogBanner,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(a){e.dialogBanner=a}}},[t("div",{staticClass:"box"},[t("el-form",{attrs:{model:e.form}},[t("el-form-item",[t("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload",limit:1,"before-upload":e.beforeAvatarUpload,"on-change":e.handleChange,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"auto-upload":!1}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择图片")])],1),e.hasNewImage?t("div",{staticStyle:{color:"red","font-size":"12px"}},[e._v("* 点击文件名可删除所选图片")]):e._e(),t("div",{staticClass:"up-img"},[t("img",{staticClass:"pic-box",attrs:{src:e.form.href}})])],1),t("div",{staticClass:"submit"},[t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("提交")])],1)],1)],1)],1)]),t("el-table",{attrs:{data:e.tableDate}},[t("el-table-column",{attrs:{prop:"id",label:"轮播图ID",align:"center"}}),t("el-table-column",{attrs:{prop:"href",label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href}})]}}])}),t("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a},"size-change":e.handleSizeChange}})],1),t("el-dialog",{attrs:{visible:e.dialogDel,title:"删除轮播图",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(a){e.dialogDel=a}}},[t("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除")]),t("span",[t("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),t("el-button",{attrs:{type:"danger"},on:{click:function(a){e.dialogDel=!1}}},[e._v("取消")])],1)])],1)},r=[],i=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("365c")),o=t("bc3a"),l=t.n(o),s={name:"banner",data:function(){return{loading:!0,dialogBanner:!1,disabled:!1,dialogDel:!1,tableDate:[],currentPage:1,totalPage:0,qiniuaddr:"https://tu.fengniaotuangou.cn",hasNewImage:!1,form:{href:"",id:""}}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var e=this;i["a"].banners(e.currentPage).then((function(a){e.tableDate=a.data,e.totalPage=a.total,e.loading=!1})).catch((function(a){e.loading=!1}))},handleDelete:function(e,a){var t=this;t.dialogDel=!0,t.id=a.id},toDel:function(){var e=this;e.dialogDel=!1,i["a"].delBanner(e.id).then((function(a){e.$message.success("删除成功"),e.dialogDel=!1,e.getBanner(),e.currentPage=1}))},upload:function(){this.$refs.upload.submit()},addBanner:function(){var e=this;e.dialogBanner=!0,e.hasNewImage=!1,e.form.href="",e.$refs.upload&&e.$refs.upload.clearFiles()},handleRemove:function(e,a){var t=this;t.form.href="",t.hasNewImage=!1},beforeAvatarUpload:function(e){var a=e.size/1024/1024<2;return a||this.$message.error("上传图片大小不能超过 2MB!"),a},handleChange:function(e){var a=this;a.form.href=URL.createObjectURL(e.raw),a.hasNewImage=!0},handleAvatarSuccess:function(e,a){var t=this;a.url=e.data,t.form.href=a.url,i["a"].banner(t.form).then((function(e){t.$message.success("上传成功"),t.currentPage=1,t.getBanner(),t.$refs.upload.clearFiles(),t.form.href="",t.form.id="",t.dialogBanner=!1}))},handleExceed:function(e,a){var t=this;t.$message.error("上传图片不能超过1张!"),t.$refs.upload.clearFiles(),t.form.href="",t.form.id=""},getQiniuToken:function(){var e=this;l.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(a){e.imgData.token=a.data.uptoken}))},handleCurrentChange:function(e){var a=this;a.getBanner()},handleSizeChange:function(e){var a=this;i["a"].banners(a.currentPage,e).then((function(e){a.tableDate=e.data,a.totalPage=e.total}))}}},c=s,d=(t("be88"),t("2877")),u=Object(d["a"])(c,n,r,!1,null,"515d2b20",null);a["default"]=u.exports},bc3d:function(e,a,t){},be88:function(e,a,t){"use strict";var n=t("bc3d"),r=t.n(n);r.a}}]);
//# sourceMappingURL=chunk-34fe6820.bd5f8d34.js.map