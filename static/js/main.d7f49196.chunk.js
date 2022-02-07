(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),r=c(3),i=c(0),a=(c(20),c(21),c(2)),o=c(9),l=c.n(o),u=(c(22),c(12)),d=c(5),j=c(10),b=c(11),O="LOAD_TODOS",h="SET_USER_ID",f="LOAD_SELECTED_USER",p="SET_IS_USER_VALID",v="SET_FILTER_TITLE",m="SET_FILTER_STATUS",_={todos:[],selectedUserId:0,selectedUser:{id:0,name:"",email:"",phone:""},isUserValid:!0,filterByTitle:"",filterByStatus:""},x=function(e){return{type:h,value:e}},T=function(e){return{type:O,value:e}},U=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(a.a)(Object(a.a)({},e),{},{todos:Object(u.a)(t.value)});case h:return Object(a.a)(Object(a.a)({},e),{},{selectedUserId:t.value});case f:return Object(a.a)(Object(a.a)({},e),{},{selectedUser:Object(a.a)({},t.value)});case p:return Object(a.a)(Object(a.a)({},e),{},{isUserValid:t.value});case v:return Object(a.a)(Object(a.a)({},e),{},{filterByTitle:t.value});case m:return Object(a.a)(Object(a.a)({},e),{},{filterByStatus:t.value});default:return Object(a.a)({},e)}}),Object(j.composeWithDevTools)(Object(d.applyMiddleware)(b.a))),y=U,S=c(1),E=function(e){var t=e.todos,c=Object(r.b)();return Object(S.jsxs)("div",{className:"TodoList",children:[Object(S.jsx)("h2",{children:"Todos:"}),Object(S.jsx)("div",{className:"TodoList__list-container",children:Object(S.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(S.jsxs)("li",{className:l()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(S.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(S.jsx)("input",{type:"checkbox",id:"".concat(e.id),checked:e.completed,onChange:function(){return function(e){var n=t.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{completed:!t.completed}):t}));c(T(n))}(e.id)}}),Object(S.jsx)("p",{children:e.title})]}),Object(S.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return t=e.userId,void c(x(t));var t},children:["User\xa0#",e.userId]})]},e.id)}))})})]})};c(24);function N(e){return function(t){fetch("https://mate.academy/students-api/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:f,value:e})}))}}var L=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.selectedUserId})),c=Object(r.c)((function(e){return e.selectedUser})),n=Object(r.c)((function(e){return e.isUserValid}));Object(i.useEffect)((function(){e(N(t))}),[t]);return Object(S.jsx)("div",{className:"CurrentUser",children:n?Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{className:"CurrentUser__title",children:Object(S.jsxs)("span",{children:["Selected user:",c.id]})}),Object(S.jsx)("h3",{className:"CurrentUser__name",children:c.name}),Object(S.jsx)("p",{className:"CurrentUser__email",children:c.email}),Object(S.jsx)("p",{className:"CurrentUser__phone",children:c.phone}),Object(S.jsx)("button",{className:"button",type:"button",onClick:function(){e(x(0))},children:"Clear"})]}):Object(S.jsx)("h1",{children:"User not found"})})},I=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.todos})),c=Object(r.c)((function(e){return e.filterByStatus})),n=Object(r.c)((function(e){return e.filterByTitle})),s=Object(r.c)((function(e){return e.selectedUserId}));Object(i.useEffect)((function(){e((function(e){fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(t){return e(T(t))}))}))}),[c]);var a=function(e){switch(e){case"completed":return!0;case"active":return!1;default:return"all"}},o=t.filter((function(e){var t=e.title,s=e.completed;return"all"===a(c)?t.includes(n):t.includes(n)&&s===a(c)}));return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsxs)("div",{className:"App__sidebar",children:[Object(S.jsx)("span",{children:"Filter title"}),Object(S.jsx)("input",{type:"text",value:n,onChange:function(t){var c;e((c=t.target.value,{type:v,value:c}))}}),Object(S.jsxs)("select",{value:c,onChange:function(t){var c;e((c=t.target.value,{type:m,value:c}))},children:[Object(S.jsx)("option",{value:"all",children:"all"}),Object(S.jsx)("option",{value:"completed",children:"completed"}),Object(S.jsx)("option",{value:"active",children:"active"})]}),Object(S.jsx)(E,{todos:o})]}),Object(S.jsx)("div",{className:"App__content",children:Object(S.jsx)("div",{className:"App__content-container",children:s?Object(S.jsx)(L,{}):"No user selected"})})]})};s.a.render(Object(S.jsx)(r.a,{store:y,children:Object(S.jsx)(I,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d7f49196.chunk.js.map