(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-447767ad"],{"1e1c":function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),i=a("5899"),l="["+i+"]",o=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),r=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:r(1),end:r(2),trim:r(3)}},"6c11":function(e,t,a){"use strict";var n=a("1e1c"),i=a.n(n);i.a},"6ccf":function(e,t,a){"use strict";var n=a("91ff"),i=a.n(n);i.a},7156:function(e,t,a){var n=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var l,o;return i&&"function"==typeof(l=t.constructor)&&l!==a&&n(o=l.prototype)&&o!==a.prototype&&i(e,o),e}},"8d81":function(e,t,a){var n;(function(i){"use strict";function l(e,t){var a=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(a>>16);return n<<16|65535&a}function o(e,t){return e<<t|e>>>32-t}function s(e,t,a,n,i,s){return l(o(l(l(t,e),l(n,s)),i),a)}function r(e,t,a,n,i,l,o){return s(t&a|~t&n,e,t,i,l,o)}function c(e,t,a,n,i,l,o){return s(t&n|a&~n,e,t,i,l,o)}function d(e,t,a,n,i,l,o){return s(t^a^n,e,t,i,l,o)}function u(e,t,a,n,i,l,o){return s(a^(t|~n),e,t,i,l,o)}function f(e,t){var a,n,i,o,s;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var f=1732584193,g=-271733879,m=-1732584194,p=271733878;for(a=0;a<e.length;a+=16)n=f,i=g,o=m,s=p,f=r(f,g,m,p,e[a],7,-680876936),p=r(p,f,g,m,e[a+1],12,-389564586),m=r(m,p,f,g,e[a+2],17,606105819),g=r(g,m,p,f,e[a+3],22,-1044525330),f=r(f,g,m,p,e[a+4],7,-176418897),p=r(p,f,g,m,e[a+5],12,1200080426),m=r(m,p,f,g,e[a+6],17,-1473231341),g=r(g,m,p,f,e[a+7],22,-45705983),f=r(f,g,m,p,e[a+8],7,1770035416),p=r(p,f,g,m,e[a+9],12,-1958414417),m=r(m,p,f,g,e[a+10],17,-42063),g=r(g,m,p,f,e[a+11],22,-1990404162),f=r(f,g,m,p,e[a+12],7,1804603682),p=r(p,f,g,m,e[a+13],12,-40341101),m=r(m,p,f,g,e[a+14],17,-1502002290),g=r(g,m,p,f,e[a+15],22,1236535329),f=c(f,g,m,p,e[a+1],5,-165796510),p=c(p,f,g,m,e[a+6],9,-1069501632),m=c(m,p,f,g,e[a+11],14,643717713),g=c(g,m,p,f,e[a],20,-373897302),f=c(f,g,m,p,e[a+5],5,-701558691),p=c(p,f,g,m,e[a+10],9,38016083),m=c(m,p,f,g,e[a+15],14,-660478335),g=c(g,m,p,f,e[a+4],20,-405537848),f=c(f,g,m,p,e[a+9],5,568446438),p=c(p,f,g,m,e[a+14],9,-1019803690),m=c(m,p,f,g,e[a+3],14,-187363961),g=c(g,m,p,f,e[a+8],20,1163531501),f=c(f,g,m,p,e[a+13],5,-1444681467),p=c(p,f,g,m,e[a+2],9,-51403784),m=c(m,p,f,g,e[a+7],14,1735328473),g=c(g,m,p,f,e[a+12],20,-1926607734),f=d(f,g,m,p,e[a+5],4,-378558),p=d(p,f,g,m,e[a+8],11,-2022574463),m=d(m,p,f,g,e[a+11],16,1839030562),g=d(g,m,p,f,e[a+14],23,-35309556),f=d(f,g,m,p,e[a+1],4,-1530992060),p=d(p,f,g,m,e[a+4],11,1272893353),m=d(m,p,f,g,e[a+7],16,-155497632),g=d(g,m,p,f,e[a+10],23,-1094730640),f=d(f,g,m,p,e[a+13],4,681279174),p=d(p,f,g,m,e[a],11,-358537222),m=d(m,p,f,g,e[a+3],16,-722521979),g=d(g,m,p,f,e[a+6],23,76029189),f=d(f,g,m,p,e[a+9],4,-640364487),p=d(p,f,g,m,e[a+12],11,-421815835),m=d(m,p,f,g,e[a+15],16,530742520),g=d(g,m,p,f,e[a+2],23,-995338651),f=u(f,g,m,p,e[a],6,-198630844),p=u(p,f,g,m,e[a+7],10,1126891415),m=u(m,p,f,g,e[a+14],15,-1416354905),g=u(g,m,p,f,e[a+5],21,-57434055),f=u(f,g,m,p,e[a+12],6,1700485571),p=u(p,f,g,m,e[a+3],10,-1894986606),m=u(m,p,f,g,e[a+10],15,-1051523),g=u(g,m,p,f,e[a+1],21,-2054922799),f=u(f,g,m,p,e[a+8],6,1873313359),p=u(p,f,g,m,e[a+15],10,-30611744),m=u(m,p,f,g,e[a+6],15,-1560198380),g=u(g,m,p,f,e[a+13],21,1309151649),f=u(f,g,m,p,e[a+4],6,-145523070),p=u(p,f,g,m,e[a+11],10,-1120210379),m=u(m,p,f,g,e[a+2],15,718787259),g=u(g,m,p,f,e[a+9],21,-343485551),f=l(f,n),g=l(g,i),m=l(m,o),p=l(p,s);return[f,g,m,p]}function g(e){var t,a="",n=32*e.length;for(t=0;t<n;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);return a}function m(e){var t,a=[];for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return a}function p(e){return g(f(m(e),8*e.length))}function h(e,t){var a,n,i=m(e),l=[],o=[];for(l[15]=o[15]=void 0,i.length>16&&(i=f(i,8*e.length)),a=0;a<16;a+=1)l[a]=909522486^i[a],o[a]=1549556828^i[a];return n=f(l.concat(m(t)),512+8*t.length),g(f(o.concat(n),640))}function b(e){var t,a,n="0123456789abcdef",i="";for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),i+=n.charAt(t>>>4&15)+n.charAt(15&t);return i}function v(e){return unescape(encodeURIComponent(e))}function y(e){return p(v(e))}function _(e){return b(y(e))}function F(e,t){return h(v(e),v(t))}function k(e,t){return b(F(e,t))}function x(e,t,a){return t?a?F(t,e):k(t,e):a?y(e):_(e)}n=function(){return x}.call(t,a,t,e),void 0===n||(e.exports=n)})()},"91ff":function(e,t,a){},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),l=a("94ca"),o=a("6eeb"),s=a("5135"),r=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),f=a("7c73"),g=a("241c").f,m=a("06cf").f,p=a("9bf2").f,h=a("58a8").trim,b="Number",v=i[b],y=v.prototype,_=r(f(y))==b,F=function(e){var t,a,n,i,l,o,s,r,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(l=c.slice(2),o=l.length,s=0;s<o;s++)if(r=l.charCodeAt(s),r<48||r>i)return NaN;return parseInt(l,n)}return+c};if(l(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,x=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof x&&(_?u((function(){y.valueOf.call(a)})):r(a)!=b)?c(new v(F(t)),a,x):F(t)},C=n?g(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)s(v,k=C[w])&&!s(x,k)&&p(x,k,m(v,k));x.prototype=y,y.constructor=x,o(i,b,x)}},baa5:function(e,t,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},cfb1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.changeActive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"学生信息",name:"info"}},[a("student-list")],1),a("el-tab-pane",{attrs:{label:"批量导入学生",name:"more"}},[a("student-add")],1)],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("添加学生")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入学生学号/姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.student)}},model:{value:e.student,callback:function(t){e.student=t},expression:"student"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择搜索方式"},on:{change:e.changeType},slot:"prepend",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.student)}},slot:"append"})],1)],1)]),a("el-dialog",{attrs:{title:"添加学生",visible:e.dialogStudent,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStudent=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"年级"}},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeOnChange},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-select",{attrs:{placeholder:"请选择班级"},on:{change:e.classOnChange},model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}},e._l(e.classList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{placeholder:"请输入学号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),a("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newStudent}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学生ID"}}),a("el-table-column",{attrs:{prop:"number",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸信息"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face_image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face_image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("1"==t.row.sex?"男":"女")}})]}}])}),a("el-table-column",{attrs:{prop:"age",label:"年龄(岁)",width:"100px"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作 "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFace(t.$index,t.row)}}},[e._v("更换人脸")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFamily(t.$index,t.row)}}},[e._v("绑定家长")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handlePushFace(t.$index,t.row)}}},[e._v("推送人脸")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleForbidden(t.$index,t.row)}}},[e._v("禁用人脸")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleCreateFace(t.$index,t.row)}}},[e._v("创建人脸关系")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleServe(t.$index,t.row)}}},[e._v("已开通服务")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFaceLogs(t.$index,t.row)}}},[e._v("查看进出记录")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])],1),a("el-dropdown-item",[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])],1)],1)],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,30,40,50],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1),a("el-dialog",{attrs:{title:"绑定家长",visible:e.dialogFamily,"close-on-click-modal":!1,width:"900px"},on:{"update:visible":function(t){e.dialogFamily=t}}},[a("div",{staticClass:"input_box"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入家长姓名",width:"100"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFamily(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.searchFamily(e.keyword)}},slot:"append"})],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.familyList,"header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.bindFamily(t.$index,t.row)}}},[e._v("绑定")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"更换人脸",visible:e.dialogFace,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(t){e.dialogFace=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.familyForm}},[a("el-form-item",{attrs:{label:"只允许进校"}},[a("el-radio-group",{model:{value:e.familyForm.only_in,callback:function(t){e.$set(e.familyForm,"only_in",t)},expression:"familyForm.only_in"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),a("div",{staticClass:"tips"},[a("p",[a("span",[e._v("提示：")]),e._v("更换后的人脸照片会覆盖掉原有的人脸照片！")])]),a("el-form-item",{attrs:{label:"更换人脸图片"}},[a("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeAvatarUpload,"auto-upload":!1,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"on-change":e.handleChange,data:e.imgData}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择图片")])],1),e.hasNewImage?a("div",{staticStyle:{color:"red","font-size":"12px"}},[e._v(" * 点击文件名可删除所选图片 ")]):e._e(),e.old_href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#409eff"}},[e._v("原人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.old_href}})]):e._e(),e.familyForm.href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#67c23a"}},[e._v("新人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.familyForm.href}})]):a("div",{staticClass:"up-img"},[a("img",{staticClass:"pic-box",attrs:{src:e.change_href}})])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.changeFace}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{visible:e.dialogPushFace,title:"推送人脸",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogPushFace=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否推送人脸")]),e.hasUuid?a("el-input",{staticClass:"input-with-select input",attrs:{placeholder:"请输入uuid"},on:{change:e.inputUuid},model:{value:e.uuid,callback:function(t){e.uuid=t},expression:"uuid"}}):e._e(),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.pushFace}},[e._v("推送")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogPushFace=!1}}},[e._v("取消")])],1)],1),a("el-dialog",{attrs:{title:"进出记录",visible:e.dialogFaceLogs,"close-on-click-modal":!1,width:"700px"},on:{"update:visible":function(t){e.dialogFaceLogs=t}}},[a("div",{staticClass:"box"},[a("el-table",{attrs:{data:e.FaceLogsDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"timestamp",label:"时间"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度"}}),a("el-table-column",{attrs:{prop:"device.direction",label:"进出校"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("in"==t.row.device.direction?"进校":"出校")}})]}}])})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.logsCurrent,"page-sizes":[10,20,30,40,50],"page-size":e.logsSize,layout:"sizes, prev, pager, next, jumper",total:e.logsTotal},on:{"current-change":e.logsCurrentChange,"update:currentPage":function(t){e.logsCurrent=t},"update:current-page":function(t){e.logsCurrent=t},"size-change":e.logSizeChange}})],1)]),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该学生")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("el-dialog",{attrs:{visible:e.dialogForbidden,title:"禁用人脸",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogForbidden=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否禁用人脸")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.forbiddenFace}},[e._v("禁用")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogForbidden=!1}}},[e._v("取消")])],1)]),a("el-dialog",{attrs:{visible:e.dialogCreateFace,title:"创建人脸关系",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogCreateFace=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否创建人脸关系")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.createFace}},[e._v("创建")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogCreateFace=!1}}},[e._v("取消")])],1)]),a("el-dialog",{attrs:{title:"已开通服务",visible:e.dialogOpenedServe,width:"80%"},on:{"update:visible":function(t){e.dialogOpenedServe=t}}},[a("div",{staticClass:"box"},[a("el-table",{attrs:{data:e.serviceList,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"product_id",label:"服务ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"user_name",label:"购买用户名"}}),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"time",label:"商品有效期(天)"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1)],1)])],1)},o=[],s=(a("99af"),a("4160"),a("baa5"),a("b0c0"),a("a9e3"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("365c")),r=a("8d81"),c=a.n(r),d=a("bc3a"),u=a.n(d),f=(a("ac1f"),a("25f0"),a("5319"),{});function g(e){return e=e.toString(),e[1]?e:"0"+e}f.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],i=new Date(1e3*e);for(var l in n.push(i.getFullYear()),n.push(g(i.getMonth()+1)),n.push(g(i.getDate())),n.push(g(i.getHours())),n.push(g(i.getMinutes())),n.push(g(i.getSeconds())),n)t=t.replace(a[l],n[l]);return t};var m=f,p={name:"studentlist",data:function(){return{loading:!0,dialogStudent:!1,grade:"",gradeList:[],classValue:"",classList:[],form:{name:"",number:"",sex:1,age:"",class_id:"",grade_id:""},dialogFace:!1,dialogDel:!1,id:"",dialogFamily:!1,familyList:[],familyData:[],list:[],disabled:!1,imgData:{key:"",token:""},fileName:"",suffix:"",qiniuaddr:"https://tu.fengniaotuangou.cn",familyForm:{href:"",only_in:"",id:""},old_href:"",change_href:"",hasNewImage:!1,new_file:"",student:"",type:"",typeList:[{value:1,label:"按学生学号搜索"},{value:2,label:"按学生姓名搜索"}],typeDisabled:!1,bindFormFamily:{user_id:"",student_id:""},FaceLogsDate:[],dialogFaceLogs:!1,logsCurrent:1,logsSize:10,logsTotal:0,log_id:"",tableData:[],face_image:"",current:1,total:0,size:10,dialogPushFace:!1,dialogForbidden:!1,forbidden_id:"",openFace_id:"",dialogCreateFace:!1,dialogOpenedServe:!1,serviceList:[],keyword:"",uuid:"",hasUuid:!1,hasFace:!1,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getStudent(),this.getGrade(),this.getQiniuToken()},methods:{getStudent:function(){var e=this;s["a"].students(e.current).then((function(t){e.loading=!1,e.tableData=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentChange:function(e){var t=this;if(t.current=e,t.loading=!0,t.student)switch(t.type){case 1:var a=t.student;s["a"].searchName(e,t.size,n,a).then((function(e){t.loading=!1,t.$message.success("搜索成功！"),t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}));break;case 2:var n=t.student;s["a"].searchName(e,t.size,n,a).then((function(e){t.loading=!1,t.$message.success("搜索成功！"),t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))}else s["a"].students(e,t.size).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;if(t.size=e,t.loading=!0,t.student)switch(t.type){case 1:var a=t.student;s["a"].searchNumber(t.current,e,a).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total,t.$message.success("搜索成功！")})).catch((function(e){t.loading=!1}));break;case 2:var n=t.student;s["a"].searchName(t.current,e,n).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total,t.$message.success("搜索成功！")})).catch((function(e){t.loading=!1}))}else s["a"].students(t.current,e).then((function(e){t.loading=!1,t.tableData=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},changeType:function(e){var t=this;t.typeDisabled=!0,t.student=""},search:function(){var e=this;if(e.loading=!0,e.type){if(1==e.type){e.current=1;var t=e.student;s["a"].searchName(e.current,e.size,a,t).then((function(t){e.loading=!1,e.$message.success("搜索成功！"),e.tableData=t.data,e.total=t.total}))}if(2==e.type){var a=e.student;e.current=1,s["a"].searchName(e.current,e.size,a,t).then((function(t){e.loading=!1,e.$message.success("搜索成功！"),e.tableData=t.data,e.total=t.total}))}}else e.$message.error("请先选择搜索方式"),e.loading=!1},getGrade:function(){var e=this;s["a"].grades(e.current).then((function(t){e.gradeList=t.data}))},refresh:function(){var e=this;e.size=10,s["a"].students(1).then((function(t){e.tableData=t.data,e.total=t.total,e.current=1}))},getClass:function(e){var t=this;s["a"].classes(1,1e3,e).then((function(e){t.classList=e.data}))},gradeOnChange:function(e){var t=this;t.grade=e,t.getClass(e),t.form.grade_id=e},classOnChange:function(e){var t=this;t.form.class_id=e},addStudent:function(){var e=this;e.dialogStudent=!0,e.grade="",e.classValue="",e.form={name:"",number:"",sex:1,age:"",class_id:""}},newStudent:function(){var e=this;e.form.name&&e.form.number&&e.form.age&&e.grade&&e.form.class_id&&0!=e.form.age?s["a"].student(e.form).then((function(t){e.$message.success("提交成功"),e.getStudent(),e.dialogStudent=!1,e.grade="",e.classValue="",e.form={name:"",number:"",sex:1,age:"",class_id:""},e.current=1})):e.$message.warning("请填写正确信息")},handleFamily:function(e,t){var a=this;console.log(t),a.bindFormFamily.student_id=t.id,a.dialogFamily=!0,a.familyList=[]},searchFamily:function(e){var t=this;console.log(t.keyword),s["a"].seekUser(t.keyword).then((function(e){console.log(e),t.familyList=e}))},bindFamily:function(e,t){var a=this;console.log(t),a.bindFormFamily.user_id=t.user_id,console.log(a.bindFormFamily),s["a"].bindFamily(a.bindFormFamily).then((function(e){a.$message.success("绑定成功"),a.current=1,a.getStudent(),a.bindFormFamily.user_id="",a.dialogFamily=!1,a.familyList=[],a.keyword=""}))},handleFace:function(e,t){var a=this;a.dialogFace=!0,a.familyForm.id=t.id,a.familyForm.only_in=t.only_in,a.old_href=t.face_image},handleForbidden:function(e,t){var a=this;console.log(t),a.forbidden_id=t.id,a.dialogForbidden=!0,t.face_id&&t.face_image?a.hasFace=!0:a.hasFace=!1},forbiddenFace:function(){var e=this,t="student";if(e.hasFace){var a=e.$loading({lock:!0,text:"禁用中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});s["a"].failFace(e.forbidden_id,t).then((function(t){e.dialogForbidden=!1,a.close(),e.$message.success("禁用成功")})).catch((function(e){a.close()}))}else e.$message.error("没有人脸, 无法禁用!")},handlePushFace:function(e,t){var a=this;console.log(t),t.school&&1==t.school.offline&&(a.hasUuid=!0),a.dialogPushFace=!0,a.openFace_id=t.id,t.face_id&&t.face_image?a.hasFace=!0:a.hasFace=!1},inputUuid:function(e){console.log(e);var t=this;t.uuid=e},pushFace:function(){var e=this,t="student";if(e.uuid)if(e.hasFace){var a=e.$loading({lock:!0,text:"推送中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});s["a"].pushFace1(e.openFace_id,t,e.uuid).then((function(t){e.dialogPushFace=!1,e.uuid="",a.close(),e.$message.success("推送成功")})).catch((function(e){a.close()}))}else e.$message.error("没有人脸, 无法推送!");else if(e.hasFace){var n=e.$loading({lock:!0,text:"推送中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});s["a"].pushFace(e.openFace_id,t).then((function(t){e.dialogPushFace=!1,n.close(),e.$message.success("推送成功")})).catch((function(e){n.close()}))}else e.$message.error("没有人脸, 无法推送!")},handleCreateFace:function(e,t){var a=this;a.id=t.id,a.dialogCreateFace=!0,console.log(t),t.face_id&&t.face_image?a.hasFace=!0:a.hasFace=!1},createFace:function(){var e=this;if(e.hasFace){var t=e.$loading({lock:!0,text:"创建中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});s["a"].createFace(e.id).then((function(a){e.dialogCreateFace=!1,t.close(),e.$message.success("创建成功")})).catch((function(e){t.close()}))}else e.$message.error("没有人脸, 无法创建人脸关系!")},handleServe:function(e,t){var a=this;a.id=t.id,a.dialogOpenedServe=!0,s["a"].studentServe(a.id).then((function(e){console.log(e),a.$message.success("获取数据成功"),a.serviceList=e}))},handleEdit:function(e,t){var a=this;a.dialogStudent=!0,t.sex=Number(t.sex),a.form=t,a.grade=t.grade_id,a.classValue=t.class},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;s["a"].delStudent(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getStudent(),e.current=1}))},handleFaceLogs:function(e,t){var a=this;a.dialogFaceLogs=!0,a.log_id=t.id,a.logsCurrent=1,a.logsSize=10,s["a"].faceLogs(a.logsCurrent,a.logsSize,a.log_id).then((function(e){a.$message.success("获取数据成功!"),a.FaceLogsDate=e.data,a.logsTotal=e.total,a.FaceLogsDate.forEach((function(e){e.timestamp=m.formatTime(e.timestamp,"Y-M-D h:m:s")}))}))},logsCurrentChange:function(e){var t=this;t.logsCurrent=e,s["a"].faceLogs(e,t.logsSize,t.log_id).then((function(e){t.FaceLogsDate=e.data,t.logsTotal=e.total,t.FaceLogsDate.forEach((function(e){e.timestamp=m.formatTime(e.timestamp,"Y-M-D h:m:s")}))}))},logSizeChange:function(e){var t=this;t.logsSize=e,s["a"].faceLogs(t.logsCurrent,e,t.log_id).then((function(e){t.FaceLogsDate=e.data,t.logsTotal=e.total,t.FaceLogsDate.forEach((function(e){e.timestamp=m.formatTime(e.timestamp,"Y-M-D h:m:s")}))}))},handleChange:function(e){var t=this;t.change_href=URL.createObjectURL(e.raw),t.hasNewImage=!0},handleRemove:function(e){var t=this;t.change_href="",t.hasNewImage=!1},beforeAvatarUpload:function(e){var t=this;t.fileName=c()(e.name),t.suffix=e.name.substring(e.name.lastIndexOf(".")+1),t.imgData.key="tmp_".concat(t.fileName,".").concat(t.suffix)},changeFace:function(){var e=this;""===e.change_href?(e.familyForm.href=e.old_href,s["a"].studentFace(e.familyForm).then((function(t){e.$message.success("上传成功"),e.current=1,e.getStudent(),e.familyForm.href="",e.dialogFace=!1}))):this.$refs.upload.submit()},handleAvatarSuccess:function(e,t){var a=this;t.url="".concat(a.qiniuaddr,"/").concat(e.key),a.familyForm.href=t.url,s["a"].studentFace(a.familyForm).then((function(e){a.$message.success("上传成功"),a.current=1,a.getStudent(),a.$refs.upload.clearFiles(),a.familyForm.href="",a.change_href="",a.old_href="",a.imgData.key="",a.familyForm.user_id="",a.dialogFace=!1}))},handleExceed:function(e,t){var a=this;a.$message.error("上传图片不能超过1张!重新上传"),a.$refs.upload.clearFiles(),a.familyForm.href="",a.imgData.key="",a.familyForm.user_id=""},getQiniuToken:function(){var e=this;u.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.imgData.token=t.data.uptoken}))}}},h=p,b=(a("6c11"),a("2877")),v=Object(b["a"])(h,l,o,!1,null,"166ac5e9",null),y=v.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogStudent=!0}}},[e._v("批量录入学生（上传EXCEL文件）")])],1)]),a("el-dialog",{attrs:{title:"添加学生信息",visible:e.dialogStudent,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStudent=t}}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeOnChange},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.class_id,callback:function(t){e.class_id=t},expression:"class_id"}},e._l(e.classList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)]),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("点击下载文件示例")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"https://school.fengniaotuangou.cn/import/students",data:e.classData,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,"on-success":e.handleSuccess,headers:e.uploadHeader}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v(" 将文件拖到此处，或 "),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传EXCEL文件")])]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("导入数据")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"aip-table",attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"file_name",label:"文件名"}}),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间"}}),a("el-table-column",{attrs:{prop:"status",label:"导入情况"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",[e._v("成功")]):2==t.row.status?a("span",[e._v("失败")]):e._e()]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.current,"page-sizes":[10,20,30,40,50],"page-size":e.size,layout:"sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"size-change":e.sizeChange}})],1)],1)},F=[],k={name:"studentadd",data:function(){return{loading:!0,dialogStudent:!1,grade:"",gradeList:[],class_id:"",classList:[],fileList:[],classData:{class_id:""},tableDate:[],current:1,size:10,total:0}},computed:{uploadHeader:function(){return{token:localStorage.getItem("token")}}},mounted:function(){this.getGrade(),this.getList()},methods:{getList:function(){var e=this;s["a"].imports(e.current,e.size,2).then((function(t){console.log(t),e.loading=!1,e.tableDate=t.data,e.total=t.total})).catch((function(t){e.loading=!1}))},currentChange:function(e){var t=this;t.current=e,t.loading=!0,s["a"].imports(e,t.size,2).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},sizeChange:function(e){var t=this;t.size=e,t.loading=!0,s["a"].imports(t.current,e,2).then((function(e){t.loading=!1,t.tableDate=e.data,t.total=e.total})).catch((function(e){t.loading=!1}))},getGrade:function(){var e=this;s["a"].grades().then((function(t){e.gradeList=t.data}))},getClass:function(e){var t=this;s["a"].classes(1,1e3,e).then((function(e){t.classList=e.data}))},gradeOnChange:function(e){var t=this;t.grade=e,t.getClass(e)},upload:function(){this.classData.class_id=this.class_id,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleSuccess:function(e,t){this.dialogStudent=!1,this.$message.success("导入成功"),this.getList(),this.fileList=[]}}},x=k,C=(a("6ccf"),Object(b["a"])(x,_,F,!1,null,"17ebc6fd",null)),w=C.exports,S={name:"student",components:{studentList:y,studentAdd:w},data:function(){return{activeName:"info"}},methods:{changeActive:function(){"info"===this.activeName&&s["a"].students(1).then((function(e){})),"more"===this.activeName&&console.log(111)}}},D=S,z=Object(b["a"])(D,n,i,!1,null,null,null);t["default"]=z.exports},e58c:function(e,t,a){"use strict";var n=a("fc6a"),i=a("a691"),l=a("50c4"),o=a("a640"),s=a("ae40"),r=Math.min,c=[].lastIndexOf,d=!!c&&1/[1].lastIndexOf(1,-0)<0,u=o("lastIndexOf"),f=s("indexOf",{ACCESSORS:!0,1:0}),g=d||!u||!f;e.exports=g?function(e){if(d)return c.apply(this,arguments)||0;var t=n(this),a=l(t.length),o=a-1;for(arguments.length>1&&(o=r(o,i(arguments[1]))),o<0&&(o=a+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:c}}]);
//# sourceMappingURL=chunk-447767ad.d3967d50.js.map