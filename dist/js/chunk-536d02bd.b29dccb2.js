(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-536d02bd"],{"0150":function(e,t,a){"use strict";var n=a("a876"),s=a.n(n);s.a},"365c":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),s=a("99b1"),r=a.n(s),u={students:function(e,t,a){return n["a"].get(r.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(r.a.Student,e)},delStudent:function(e){return n["a"].del(r.a.DelStudent,{student_id:e})},search:function(e){return n["a"].get(r.a.Students,{number:e})},grade:function(e){return n["a"].post(r.a.Grade,e)},grades:function(e,t){return n["a"].get(r.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(r.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(r.a.Class,e)},classes:function(e,t,a){return n["a"].get(r.a.Classes,{page:e,grade_id:t,limit:a})},delClass:function(e){return n["a"].del(r.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(r.a.Device,e)},devices:function(e){return n["a"].post(r.a.Devices,{page:e})},family:function(e){return n["a"].get(r.a.Family,{page:e})},announcement:function(e){return n["a"].get(r.a.Announcement,{page:e})},bindFamily:function(e,t){return n["a"].get(r.a.BindFamily,{page:e,limit:t})},updateFace:function(e){return n["a"].post(r.a.UpFace,e)},teacher:function(e,t,a){return n["a"].get(r.a.Teacher,{page:e,state:t,worker:a})},delTeacher:function(e){return n["a"].del(r.a.Teacher,{id:e})},audit:function(e){return n["a"].post(r.a.Audit,e)},schools:function(e,t,a){return n["a"].get(r.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return n["a"].get(r.a.School,{id:e})},school:function(e){return n["a"].post(r.a.School,e)},banners:function(e){return n["a"].get(r.a.Banners,{page:e})},banner:function(e){return n["a"].post(r.a.Banner,e)},message:function(e){return n["a"].post(r.a.Message,e)},messages:function(e){return n["a"].get(r.a.Messages,{page:e})},messageType:function(e){return n["a"].post(r.a.MessageType,e)},messageTypes:function(e){return n["a"].get(r.a.MessageTypes,{page:e})},documents:function(e){return n["a"].get(r.a.Documents,{page:e})},delDocument:function(e){return n["a"].del(r.a.DelDocument,{id:e})},document:function(e){return n["a"].post(r.a.Document,e)},buys:function(e){return n["a"].get(r.a.Buys,{page:e})},buy:function(e){return n["a"].post(r.a.Buy,e)},roles:function(e){return n["a"].get(r.a.Roles,{page:e})},role:function(e){return n["a"].post(r.a.Role,e)},delRole:function(e){return n["a"].del(r.a.DelRole,{id:e})},user:function(e){return n["a"].post(r.a.User,e)},users:function(e){return n["a"].get(r.a.Users,{page:e})},resetPassword:function(e){return n["a"].post(r.a.ResetPassword,e)}};t["a"]=u},"60b0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogBanner=!0}}},[e._v("添加轮播图")])],1),a("el-dialog",{attrs:{visible:e.dialogBanner,width:"460px",title:"添加轮播图"},on:{"update:visible":function(t){e.dialogBanner=t}}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","auto-upload":!1,limit:1,"on-success":e.handleAvatarSuccess,"on-exceed":e.handleExceed},scopedSlots:e._u([{key:"file",fn:function(t){var n=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(n)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("上传图片")])],1)],1)]),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"轮播图ID",align:"center"}}),a("el-table-column",{attrs:{prop:"href",label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href}})]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},s=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),u={name:"banner",data:function(){return{dialogBanner:!1,disabled:!1,tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var e=this;r["a"].banners(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},handleDelete:function(){},upload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.$message.success("上传成功"),this.dialogBanner=!1,this.getBanner()},handleExceed:function(e,t){this.$message.error("上传图片不能超过1张!")},handleCurrentChange:function(e){var t=this;t.getBanner()}}},o=u,i=(a("0150"),a("2877")),c=Object(i["a"])(o,n,s,!1,null,"58b7a243",null);t["default"]=c.exports},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",ResetPassword:a+"/reset/password",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",DelDocument:a+"/help/doc",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",DelStudent:a+"/student",Grade:a+"/grade",Grades:a+"/grades",DelGrade:a+"/grade",Class:a+"/class",Classes:a+"/classes",DelClass:a+"/class",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/parents",Teacher:a+"/user/infos",Audit:a+"/check/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",BindFamily:a+"/wx/users",UpFace:a+"/pass/student",Role:a+"/role",Roles:a+"/roles",DelRole:a+"/role",User:a+"/user",Users:a+"/users"};e.exports=n},a876:function(e,t,a){}}]);
//# sourceMappingURL=chunk-536d02bd.b29dccb2.js.map