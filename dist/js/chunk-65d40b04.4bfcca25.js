(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d40b04"],{"5fff":function(e,t,a){},"60b0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogBanner=!0}}},[e._v("添加轮播图")])],1),a("el-dialog",{attrs:{visible:e.dialogBanner,width:"460px",title:"添加轮播图"},on:{"update:visible":function(t){e.dialogBanner=t}}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","auto-upload":!1,limit:1,"on-success":e.handleAvatarSuccess,"on-exceed":e.handleExceed},scopedSlots:e._u([{key:"file",fn:function(t){var n=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(n)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("上传图片")])],1)],1)]),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"轮播图ID",align:"center"}}),a("el-table-column",{attrs:{prop:"href",label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href}})]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},l=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),r={name:"banner",data:function(){return{dialogBanner:!1,disabled:!1,tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var e=this;i["a"].banners(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},handleDelete:function(){},upload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.$message.success("上传成功"),this.dialogBanner=!1,this.getBanner()},handleExceed:function(e,t){this.$message.error("上传图片不能超过1张!")},handleCurrentChange:function(e){var t=this;t.getBanner()},handleSizeChange:function(e){var t=this;i["a"].banners(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))}}},s=r,c=(a("d8bb"),a("2877")),o=Object(c["a"])(s,n,l,!1,null,"40e38344",null);t["default"]=o.exports},d8bb:function(e,t,a){"use strict";var n=a("5fff"),l=a.n(n);l.a}}]);
//# sourceMappingURL=chunk-65d40b04.4bfcca25.js.map