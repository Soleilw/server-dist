(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b951ba6"],{"365c":function(e,t,a){"use strict";a("ac1f");var n=a("ade3"),s=a("be3b"),r=a("99b1"),u=a.n(r),i={students:function(e,t,a){return s["a"].get(u.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return s["a"].post(u.a.Student,e)},delStudent:function(e){return s["a"].del(u.a.DelStudent,{student_id:e})},search:function(e){return s["a"].get(u.a.Students,{number:e})},wxUser:function(e,t){return s["a"].get(u.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return s["a"].post(u.a.BindFamily,e)},familySearch:function(e){return s["a"].get(u.a.FamilySearch,{number:e})},studentFace:function(e){return s["a"].post(u.a.StudentFace,e)},grade:function(e){return s["a"].post(u.a.Grade,e)},grades:function(e,t){return s["a"].get(u.a.Grades,{page:e,limit:t})},delGrade:function(e){return s["a"].del(u.a.DelGrade,{grade_id:e})},_class:function(e){return s["a"].post(u.a.Class,e)},classes:function(e,t,a){var r;return s["a"].get(u.a.Classes,(r={page:e,limit:t},Object(n["a"])(r,"limit",t),Object(n["a"])(r,"grade_id",a),r))},delClass:function(e){return s["a"].del(u.a.DelClass,{class_id:e})},device:function(e){return s["a"].post(u.a.Device,e)},devices:function(e){return s["a"].post(u.a.Devices,{page:e})},family:function(e,t){return s["a"].get(u.a.Family,{page:e,limit:t})},announcement:function(e){return s["a"].get(u.a.Announcement,{page:e})},teacher:function(e,t,a,n){return s["a"].get(u.a.Teacher,{page:e,limit:t,state:a,worker:n})},delTeacher:function(e){return s["a"].del(u.a.DelTeacher,{id:e})},audit:function(e){return s["a"].post(u.a.Audit,e)},schools:function(e,t,a){return s["a"].get(u.a.Schools,{page:e,limit:t,id:a})},oneSchool:function(e){return s["a"].get(u.a.School,{id:e})},school:function(e){return s["a"].post(u.a.School,e)},banners:function(e,t){return s["a"].get(u.a.Banners,{page:e,limit:t})},banner:function(e){return s["a"].post(u.a.Banner,e)},message:function(e){return s["a"].post(u.a.Message,e)},messages:function(e,t){return s["a"].get(u.a.Messages,{page:e,limit:t})},messageType:function(e){return s["a"].post(u.a.MessageType,e)},messageTypes:function(e,t){return s["a"].get(u.a.MessageTypes,{page:e,limit:t})},documents:function(e,t){return s["a"].get(u.a.Documents,{page:e,limit:t})},delDocument:function(e){return s["a"].del(u.a.DelDocument,{id:e})},document:function(e){return s["a"].post(u.a.Document,e)},buys:function(e,t){return s["a"].get(u.a.Buys,{page:e,limit:t})},buy:function(e){return s["a"].post(u.a.Buy,e)},roles:function(e,t){return s["a"].get(u.a.Roles,{page:e,limit:t})},role:function(e){return s["a"].post(u.a.Role,e)},delRole:function(e){return s["a"].del(u.a.DelRole,{id:e})},user:function(e){return s["a"].post(u.a.User,e)},users:function(e,t){return s["a"].get(u.a.Users,{page:e,limit:t})},delUser:function(e){return s["a"].del(u.a.DelUser,{id:e})},resetPassword:function(e){return s["a"].post(u.a.ResetPassword,e)}};t["a"]=i},"48d3":function(e,t,a){"use strict";var n=a("a938"),s=a.n(n);s.a},"60b0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogBanner=!0}}},[e._v("添加轮播图")])],1),a("el-dialog",{attrs:{visible:e.dialogBanner,width:"460px",title:"添加轮播图"},on:{"update:visible":function(t){e.dialogBanner=t}}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"upload",attrs:{action:"https://api.fengniaotuangou.cn/api/upload","list-type":"picture-card","auto-upload":!1,limit:1,"on-success":e.handleAvatarSuccess,"on-exceed":e.handleExceed},scopedSlots:e._u([{key:"file",fn:function(t){var n=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(n)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("上传图片")])],1)],1)]),a("el-table",{attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{prop:"id",label:"轮播图ID",align:"center"}}),a("el-table-column",{attrs:{prop:"href",label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href}})]}}])}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},s=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),u={name:"banner",data:function(){return{dialogBanner:!1,disabled:!1,tableDate:[],currentPage:1,totalPage:0}},mounted:function(){this.getBanner()},methods:{getBanner:function(){var e=this;r["a"].banners(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total}))},handleDelete:function(){},upload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.$message.success("上传成功"),this.dialogBanner=!1,this.getBanner()},handleExceed:function(e,t){this.$message.error("上传图片不能超过1张!")},handleCurrentChange:function(e){var t=this;t.getBanner()},handleSizeChange:function(e){var t=this;r["a"].banners(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))}}},i=u,o=(a("48d3"),a("2877")),l=Object(o["a"])(i,n,s,!1,null,"4946a729",null);t["default"]=l.exports},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",ResetPassword:a+"/reset/password",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",DelDocument:a+"/help/doc",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",DelStudent:a+"/student",Grade:a+"/grade",Grades:a+"/grades",DelGrade:a+"/grade",Class:a+"/class",Classes:a+"/classes",DelClass:a+"/class",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/parents",WxUser:a+"/wx/users",BindFamily:a+"/pass/student",StudentFace:a+"/student/face",FamilySearch:a+"/parents",Teacher:a+"/user/infos",Audit:a+"/check/user/info",DelTeacher:a+"/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",Role:a+"/role",Roles:a+"/roles",DelRole:a+"/role",User:a+"/user",Users:a+"/users",DelUser:a+"/user"};e.exports=n},a938:function(e,t,a){}}]);
//# sourceMappingURL=chunk-9b951ba6.725dbff7.js.map