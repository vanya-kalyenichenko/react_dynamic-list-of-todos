(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(4)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.userInfo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})},u=function(e){var t=e.handleOption,c=e.handleText,s=e.value,a=e.text,n=e.hasClear;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return t(e)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",value:a,type:"text",className:"input",placeholder:"Search...",onChange:function(e){return c(e)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a.trim()&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n})})]})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));c(13);var b=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})};function h(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.close,s=Object(i.useState)(),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(!0),j=Object(l.a)(o,2),u=j[0],m=j[1];return Object(i.useEffect)((function(){h("/users.json").then((function(e){return e.find((function(e){return e.id===(null===t||void 0===t?void 0:t.userId)}))})).then(d).finally((function(){return setTimeout((function(){m(!1)}),1e3)}))}),[n]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:{".concat(null===n||void 0===n?void 0:n.email,"}"),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},O=function(e,t,c){var a=e,n=a;switch(t&&(a=e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c){case s.All:n=a;break;case s.Active:n=a.filter((function(e){return!e.completed}));break;default:n=a.filter((function(e){return e.completed}))}return n};var x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(s.All),d=Object(l.a)(n,2),o=d[0],x=d[1],f=Object(i.useState)(!0),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),k=g[0],C=g[1],S=Object(i.useState)(),T=Object(l.a)(S,2),w=T[0],A=T[1];return Object(i.useEffect)((function(){h("/todos.json").then(a).finally((function(){return N(!1)}))}),[o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{handleOption:function(e){var t=e.target.value;x(t)},value:o,handleText:function(e){var t=e.target.value;C(t)},text:k,hasClear:function(){C("")}})}),Object(r.jsxs)("div",{className:"block",children:[p&&Object(r.jsx)(b,{}),Object(r.jsx)(j,{todos:O(c,k,o),selectedTodo:w,userInfo:function(e){A(e)}})]})]})})}),!!w&&Object(r.jsx)(m,{selectedTodo:w,close:function(){A(void 0)}})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.66c137d1.chunk.js.map