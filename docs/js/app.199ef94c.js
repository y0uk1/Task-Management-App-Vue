(function(){"use strict";var t={5165:function(t,e,n){var o=n(9963),a=(n(7658),n(6252)),s=n(1457),i=n(6673),r=n(1669),d=n(9003),l=n(3379),c=n(941);function u(t,e,n,o,u,k){const f=(0,a.up)("TaskSection");return(0,a.wg)(),(0,a.j4)(s.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.o,{justify:"end","p-2":""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.T,{onClick:o.toggleTheme,icon:"mdi-theme-light-dark"},null,8,["onClick"])])),_:1}),(0,a.Wm)(d.o,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.sections,((e,n)=>((0,a.wg)(),(0,a.j4)(l.D,{key:n,"align-self":"start",cols:"3"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{sectionId:n,todos:t.todos,sections:t.sections,"onUpdate:section":k.sectionHandler,"onUpdate:taskSectionTaskTitle":k.taskHandler,"onUpdate:taskSectionTaskBody":k.taskHandler,onTaskSectionTaskLike:k.taskHandler,onTaskSectionTaskDelete:k.taskDeleteHandler,onTaskSectionTaskDone:k.taskHandler,onTaskSectionTaskSection:k.taskHandler,onTaskSectionAddTask:k.addTaskHandler},null,8,["sectionId","todos","sections","onUpdate:section","onUpdate:taskSectionTaskTitle","onUpdate:taskSectionTaskBody","onTaskSectionTaskLike","onTaskSectionTaskDelete","onTaskSectionTaskDone","onTaskSectionTaskSection","onTaskSectionAddTask"])])),_:2},1024)))),128)),(0,a.Wm)(i.T,{onClick:e[0]||(e[0]=t=>this.sections.push("")),class:"mt-3",color:"surface-varian",variant:"text","prepend-icon":"mdi-plus-thick"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add Section ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var k=n(6393);function f(t,e,n,o,s,r){const c=(0,a.up)("TaskCard");return(0,a.wg)(),(0,a.j4)(d.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(k.hw,{"bg-color":"blue-grey-lighten-2",value:n.sections[n.sectionId],onInput:e[0]||(e[0]=e=>t.$emit("update:section",e.target.value,n.sectionId))},null,8,["value"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.filteredTodos,((t,e)=>((0,a.wg)(),(0,a.j4)(l.D,{key:e},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{todo:t,sections:n.sections,"onUpdate:taskCardTaskTitle":r.taskTitleChangeHandler,"onUpdate:taskCardTaskBody":r.taskBodyChangeHandler,onTaskCardTaskLike:r.taskLikeChangeHandler,onTaskCardTaskDelete:r.taskDeleteChangeHandler,onTaskCardTaskDone:r.taskDoneChangeHandler,onTaskCardTaskSection:r.taskSectionChangeHandler},null,8,["todo","sections","onUpdate:taskCardTaskTitle","onUpdate:taskCardTaskBody","onTaskCardTaskLike","onTaskCardTaskDelete","onTaskCardTaskDone","onTaskCardTaskSection"])])),_:2},1024)))),128)),(0,a.Wm)(i.T,{onClick:e[1]||(e[1]=e=>t.$emit("task-section-add-task",n.sectionId)),class:"ml-2",size:"small",color:"surface-variant",variant:"text","prepend-icon":"mdi-plus-thick"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add Task ")])),_:1})])),_:1})])),_:1})}var p=n(3577),m=n(2915),h=n(5911),T=n(6334),g=n(4007),v=n(7737),b=n(9358),w=n(8471),y=n(1820);function C(t,e,n,o,s,r){return(0,a.wg)(),(0,a.j4)(m._,{class:"mx-auto"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k.hw,{style:{"font-weight":"bold"},value:n.todo.title,class:(0,p.C_)({"text-decoration-line-through":n.todo.isDone}),onInput:e[0]||(e[0]=e=>t.$emit("update:task-card-task-title",e.target.value,"title",n.todo.id))},null,8,["value","class"]),(0,a.Wm)(b.r,{items:n.sections,modelValue:s.selected,"onUpdate:modelValue":e[1]||(e[1]=t=>s.selected=t),label:"Section"},null,8,["items","modelValue"]),(0,a.Wm)(w.z,{value:n.todo.body,onInput:e[2]||(e[2]=e=>t.$emit("update:task-card-task-body",e.target.value,"body",n.todo.id)),variant:"filled","auto-grow":""},null,8,["value"])])),_:1}),(0,a.Wm)(T.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g.C),(0,a.Wm)(i.T,{onClick:e[3]||(e[3]=e=>t.$emit("task-card-task-delete",n.todo.id)),variant:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.t,{color:"surface-variant"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-trash-can ")])),_:1}),(0,a.Wm)(y.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Delete ")])),_:1})])),_:1}),(0,a.Wm)(i.T,{onClick:e[4]||(e[4]=e=>t.$emit("task-card-task-done",!n.todo.isDone,"isDone",n.todo.id)),variant:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.t,{color:n.todo.isDone?"green":""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-check-bold ")])),_:1},8,["color"]),(0,a.Wm)(y.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Done ")])),_:1})])),_:1}),(0,a.Wm)(i.T,{onClick:e[5]||(e[5]=e=>t.$emit("task-card-task-like",!n.todo.like,"like",n.todo.id)),variant:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.t,{color:n.todo.like?"yellow":""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-star ")])),_:1},8,["color"]),(0,a.Wm)(y.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Like ")])),_:1})])),_:1})])),_:1})])),_:1})}var _={name:"TaskCard",props:["todo","sections"],emits:["update:task-card-task-title","update:task-card-task-body","task-card-task-section","task-card-task-delete","task-card-task-done","task-card-task-like"],data(){return{localSections:this.sections,selected:this.sections[this.todo.sectionId]}},watch:{localSections:{handler:function(t){this.selected=t[this.todo.sectionId]},deep:!0},selected(){const t=this.sections.findIndex((t=>t===this.selected));this.$emit("task-card-task-section",t,"sectionId",this.todo.id)}}},S=n(3744);const D=(0,S.Z)(_,[["render",C]]);var H=D,W={name:"TaskSection",components:{TaskCard:H},props:["sectionId","todos","sections"],emits:["update:task-section-task-title","update:task-section-task-body","task-section-task-section","task-section-task-delete","task-section-task-done","task-section-task-like"],methods:{taskTitleChangeHandler(t,e,n){this.$emit("update:task-section-task-title",t,e,n)},taskBodyChangeHandler(t,e,n){this.$emit("update:task-section-task-body",t,e,n)},taskLikeChangeHandler(t,e,n){this.$emit("task-section-task-like",t,e,n)},taskDeleteChangeHandler(t){this.$emit("task-section-task-delete",t)},taskDoneChangeHandler(t,e,n){this.$emit("task-section-task-done",t,e,n)},taskSectionChangeHandler(t,e,n){this.$emit("task-section-task-section",t,e,n)}},computed:{filteredTodos(){let t=[];for(const e of this.todos)e.sectionId===this.sectionId&&t.push(e);return t}}};const j=(0,S.Z)(W,[["render",f]]);var O=j,U=n(2323),I={name:"App",setup(){const t=(0,U.Fg)();return{theme:t,toggleTheme:()=>t.global.name.value=t.global.current.value.dark?"light":"dark"}},components:{TaskSection:O},data:()=>({sections:[],todos:[]}),methods:{taskHandler(t,e,n){for(const o of this.todos)o["id"]===n&&(o[e]=t)},taskDeleteHandler(t){this.todos=this.todos.filter((e=>e.id!==t))},sectionHandler(t,e){this.sections[e]=t},addTaskHandler(t){let e=0;this.todos.length&&(e=this.todos.slice(-1)[0].id+1);const n={id:e,title:"",body:"",sectionId:t,like:!1,isDone:!1};this.todos.push(n)}}};const $=(0,S.Z)(I,[["render",u]]);var x=$,A=(n(9773),n(1291)),L=(0,A.Rd)();async function P(){const t=await n.e(461).then(n.t.bind(n,5933,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}P(),(0,o.ri)(x).use(L).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],s=t[c][2];for(var r=!0,d=0;d<o.length;d++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[d])}))?o.splice(d--,1):(r=!1,s<i&&(i=s));if(r){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,a,s]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var s=Object.create(null);n.r(s);var i={};t=t||[null,e({}),e([]),e(e)];for(var r=2&a&&o;"object"==typeof r&&!~t.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach((function(t){i[t]=function(){return o[t]}}));return i["default"]=function(){return o},n.d(s,i),s}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/webfontloader.5cb05b80.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task_management_app:";n.l=function(o,a,s,i){if(t[o])t[o].push(a);else{var r,d;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+s){r=u;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+s),r.src=o),t[o]=[a];var k=function(e,n){r.onerror=r.onload=null,clearTimeout(f);var a=t[o];if(delete t[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(k.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=k.bind(null,r.onerror),r.onload=k.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=s);var i=n.p+n.u(e),r=new Error,d=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",r.name="ChunkLoadError",r.type=s,r.request=i,a[1](r)}};n.l(i,d,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,i=o[0],r=o[1],d=o[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(d)var c=d(n)}for(e&&e(o);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunktask_management_app"]=self["webpackChunktask_management_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5165)}));o=n.O(o)})();
//# sourceMappingURL=app.199ef94c.js.map