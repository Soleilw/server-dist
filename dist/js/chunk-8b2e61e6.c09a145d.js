(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b2e61e6"],{"3c80":function(t,e,a){"use strict";var n=a("a49a"),l=a.n(n);l.a},"774c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogBanner=!0}}},[t._v("添加轮播图")])],1),a("el-dialog",{attrs:{visible:t.dialogBanner,width:"460px",title:"添加轮播图"},on:{"update:visible":function(e){t.dialogBanner=e}}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","auto-upload":!1,limit:1,"on-success":t.handleAvatarSuccess,"on-exceed":t.handleExceed},scopedSlots:t._u([{key:"file",fn:function(e){var n=e.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[t.disabled?t._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(n)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.upload}},[t._v("上传图片")])],1)],1)]),a("el-table",{attrs:{data:t.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"轮播图ID",align:"center"}}),a("el-table-column",{attrs:{prop:"href",label:"缩略图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:t.row.href}})]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.totalPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},l=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("be3b")),i=a("99b1"),s=a.n(i),o={banners:function(t){return r["a"].get(s.a.Banners,{page:t})},banner:function(t){return r["a"].post(s.a.Banner,t)}},c=o,u={name:"banner",data:function(){return{dialogBanner:!1,disabled:!1,tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var t=this;c.banners(t.currentPage).then((function(e){console.log(e.data),t.tableDate=e.data,t.totalPage=e.total}))},handleDelete:function(){},upload:function(){this.$refs.upload.submit()},handleRemove:function(t,e){console.log(t,this.fileList)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传图片大小不能超过 2MB!"),e},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw),this.$message.success("上传成功"),this.dialogBanner=!1,this.getBanner()},handleExceed:function(t,e){this.$message.error("上传图片不能超过1张!")},handleCurrentChange:function(t){var e=this;e.getBanner()}}},d=u,p=(a("3c80"),a("2877")),g=Object(p["a"])(d,n,l,!1,null,"4d1db1a5",null);e["default"]=g.exports},a49a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8b2e61e6.c09a145d.js.map