(this["webpackJsonphooks-todo"]=this["webpackJsonphooks-todo"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),o=c.n(a),s=c(8),r=c(2),d=c(5),j=c.p+"static/media/delete.99740830.svg",l=c.p+"static/media/edit.94bca752.svg",u=c(0),b=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),o=Object(d.a)(a,2),b=o[0],O=o[1],v=Object(n.useState)(function(){var e=localStorage.getItem("todolist");return e?JSON.parse(e):[]}()),f=Object(d.a)(v,2),m=f[0],h=f[1],x=function(){if(c)if(b){var e=m.map((function(e){return e.id===b?Object(r.a)(Object(r.a)({},e),{},{name:c,active:!1}):Object(r.a)(Object(r.a)({},e),{},{active:!1})}));h(e),i(""),O("")}else{var t={id:(new Date).getTime().toString(),name:c};h([t].concat(Object(s.a)(m))),i(""),O("")}},p=function(e){h((function(t){return t.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{active:!0}):Object(r.a)(Object(r.a)({},t),{},{active:!1})}))})),i(e.name),O(e.id)};Object(n.useEffect)((function(){localStorage.setItem("todolist",JSON.stringify(m))}),[m]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"addinputData",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"Add Todo",value:c,onKeyDown:function(e){13===e.keyCode&&x()}}),Object(u.jsx)("button",{onClick:x,children:"Add"})]}),Object(u.jsx)("div",{className:"content",children:m.map((function(e){return Object(u.jsxs)("div",{className:"item ".concat(e.active?"active":""),children:[Object(u.jsx)("div",{className:"value",onClick:function(){return p(e)},children:e.name}),Object(u.jsx)("div",{className:"edit",children:Object(u.jsx)("img",{src:l,alt:"edit",onClick:function(){return p(e)}})}),Object(u.jsx)("div",{className:"trash",children:Object(u.jsx)("img",{src:j,alt:"delete",onClick:function(){return function(e){var t=m.filter((function(t){return e!==t.id}));h(t)}(e.id)}})})]},e.id)}))}),Object(u.jsx)("div",{className:"removeall",children:Object(u.jsx)("button",{onClick:function(){return h([]),void i("")},children:"Remove All"})})]})},O=(c(14),function(){return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("h2",{children:"Todo List"}),Object(u.jsx)(b,{})]})});function v(){return Object(u.jsx)("div",{children:Object(u.jsx)(O,{})})}o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e868f205.chunk.js.map