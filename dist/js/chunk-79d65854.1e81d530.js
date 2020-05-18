(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d65854"],{"49e5":function(e,t,a){"use strict";a("ac1f");var n=a("be3b"),s=a("99b1"),l=a.n(s),i={teacher:function(e,t){return n["a"].get(l.a.Teacher,{page:e,state:t})},students:function(e){return n["a"].get(l.a.Students,{page:e})},student:function(e){return n["a"].post(l.a.Student,e)},search:function(e){return n["a"].get(l.a.Students,{number:e})},grade:function(e){return n["a"].post(l.a.Grade,e)},grades:function(e){return n["a"].get(l.a.Grades,{page:e})},_class:function(e){return n["a"].post(l.a.Class,e)},classes:function(e){return n["a"].get(l.a.Classes,{page:e})},classes1:function(e,t){return n["a"].get(l.a.Classes,{grade_id:e,limit:t})},device:function(e){return n["a"].post(l.a.Device,e)},devices:function(e){return n["a"].post(l.a.Devices,{page:e})},family:function(e){return n["a"].get(l.a.Family,{page:e})},announcement:function(e){return n["a"].get(l.a.Announcement,{page:e})},bindFamily:function(e,t){return n["a"].get(l.a.BindFamily,{page:e,limit:t})},qiniu:function(){return n["a"].get("https://api.fengniaotuangou.cn/api/upload/token")},updateFace:function(e){return n["a"].post(l.a.UpFace,e)}};t["a"]=i},"6d3b":function(e,t,a){},8887:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogStudent=!0}}},[e._v("批量录入学生（上传EXCEL文件）")])],1),a("el-dialog",{attrs:{title:"添加学生信息",visible:e.dialogStudent,width:"500px"},on:{"update:visible":function(t){e.dialogStudent=t}}},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeOnChange},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.class_id,callback:function(t){e.class_id=t},expression:"class_id"}},e._l(e.classList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("点击下载文件示例")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"https://school.fengniaotuangou.cn/import/students",data:e.classData,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,"on-success":e.handleSuccess,headers:e.uploadHeader}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传EXCEL文件")])]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("导入数据")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"aip-table",attrs:{data:e.tableDate}},[a("el-table-column",{attrs:{label:"名称",type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"文件名",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"上传时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},s=[],l=a("49e5"),i={name:"studentadd",data:function(){return{dialogStudent:!1,grade:"",gradeList:[],class_id:"",classList:[],fileList:[],classData:{class_id:""},tableDate:[],currentPage:1,totalPage:0}},computed:{uploadHeader:function(){return{token:localStorage.getItem("token")}}},mounted:function(){this.getGrade(),this.getClass()},methods:{getGrade:function(){var e=this;l["a"].grades(e.currentPage).then((function(t){e.gradeList=t.data}))},getClass:function(e){var t=this;l["a"].classes1(e,30).then((function(e){t.classList=e.data}))},gradeOnChange:function(e){var t=this;t.grade=e,t.getClass(e)},handleDel:function(){},upload:function(){this.classData.class_id=this.class_id,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleSuccess:function(e,t){this.dialogStudent=!1,this.$message.success("导入成功"),this.fileList=[]},handleCurrentChange:function(){}}},c=i,r=(a("d8e8"),a("2877")),o=Object(r["a"])(c,n,s,!1,null,"03f01790",null);t["default"]=o.exports},9263:function(e,t,a){"use strict";var n=a("ad6d"),s=a("9f7f"),l=RegExp.prototype.exec,i=String.prototype.replace,c=l,r=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=r||u||o;d&&(c=function(e){var t,a,s,c,d=this,p=o&&d.sticky,g=n.call(d),f=d.source,h=0,v=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,h++),a=new RegExp("^(?:"+f+")",g)),u&&(a=new RegExp("^"+f+"$(?!\\s)",g)),r&&(t=d.lastIndex),s=l.call(p?a:d,v),p?s?(s.input=s.input.slice(h),s[0]=s[0].slice(h),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:r&&s&&(d.lastIndex=d.global?s.index+s[0].length:t),u&&s&&s.length>1&&i.call(s[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s}),e.exports=c},"99b1":function(e,t){var a="https://school.fengniaotuangou.cn",n={Login:a+"/login",Logout:a+"/logout",School:a+"/school",Schools:a+"/api/schools",Banner:a+"/banner",Banners:a+"/api/banners",Document:a+"/help/doc",Documents:a+"/help/docs",Message:a+"/document",Messages:a+"/documents",MessageType:a+"/document/type",MessageTypes:a+"/document/types",Students:a+"/students",Search:a+"/student",Student:a+"/student",Grade:a+"/grade",Grades:a+"/grades",Class:a+"/class",Classes:a+"/classes",Announcement:a+"/announcement",Device:a+"/device",Devices:a+"/devices",Family:a+"/family",Teacher:a+"/user/infos",Audit:a+"/check/user/info",Buy:a+"/product",Buys:a+"/products",Order:a+"/order",Statistical:a+"/statistical",BindFamily:a+"/wx/users",UpFace:a+"/pass/student"};e.exports=n},"9f7f":function(e,t,a){"use strict";var n=a("d039");function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),s=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},d8e8:function(e,t,a){"use strict";var n=a("6d3b"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-79d65854.1e81d530.js.map