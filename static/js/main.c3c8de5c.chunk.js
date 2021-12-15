(this["webpackJsonpcoin-tracker"]=this["webpackJsonpcoin-tracker"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var c,o=n(0),i=n.n(o),r=n(22),a=n.n(r),l=n(33),s=n(10),b=n(12),d=n(11),j={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff"},u=n(5),f=n(8),O=n(3),g=n(24),h={ToDo:"ToDo",Doing:"Doing",Done:"Done"},x=Object(s.b)({key:"categories",default:localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")||""):h}),p=Object(s.b)({key:"board",default:localStorage.getItem("board")||h.ToDo}),m=Object(s.b)({key:"toDos",default:null!==localStorage.getItem("toDos")?JSON.parse(localStorage.getItem("toDos")||""):[]}),y=Object(s.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(m),c=t(p);return n.filter((function(e){return e.category===c}))}}),v=n(4),k=d.c.div(c||(c=Object(b.a)(["\n  margin-bottom: 20px;\n  display: flex;\n"])));var w,D,S,C=function(){var e=Object(g.a)(),t=e.register,n=e.handleSubmit,c=e.setValue,i=Object(s.e)(p),r=Object(s.d)(m),a=Object(O.a)(r,2),l=a[0],b=a[1];return Object(o.useEffect)((function(){localStorage.setItem("toDos",JSON.stringify(l))}),[l]),Object(v.jsx)(k,{children:Object(v.jsxs)("form",{onSubmit:n((function(e){var t=e.toDo;b((function(e){return[].concat(Object(f.a)(e),[{text:t,id:Date.now(),category:i}])})),c("toDo","")})),children:[Object(v.jsx)("input",Object(u.a)(Object(u.a)({},t("toDo",{required:!0,maxLength:20})),{},{type:"text",placeholder:"Add a ToDo..."})),Object(v.jsx)("button",{children:"Add"})]})})},q=d.c.div(w||(w=Object(b.a)([""]))),I=d.c.div(D||(D=Object(b.a)(["\n  width: 300px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  border: 1px solid white;\n  margin-bottom: 15px;\n  background-color: #081229;\n  font-size: 20px;\n"]))),N=d.c.div(S||(S=Object(b.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  button {\n    border: none;\n    cursor: pointer;\n  }\n"])));var T,A,J,z=function(){var e=Object(s.e)(y),t=Object(s.d)(m),n=Object(O.a)(t,2),c=n[0],i=n[1],r=Object(s.d)(x),a=Object(O.a)(r,2),l=a[0];return a[1],Object(o.useEffect)((function(){localStorage.setItem("toDos",JSON.stringify(c))}),[c]),Object(v.jsx)(q,{children:e.map((function(e){return Object(v.jsxs)(I,{children:[Object(v.jsx)("span",{children:e.text}),Object(v.jsxs)(N,{children:[Object.keys(l).map((function(t){if(e.category!==t)return Object(v.jsx)("button",{onClick:function(){return function(e,t){var n=c.findIndex((function(t){return t.id===e}));i((function(c){return[].concat(Object(f.a)(c.slice(0,n)),[{id:e,text:c[n].text,category:t}],Object(f.a)(c.slice(n+1)))}))}(e.id,t)},children:t},t)})),Object(v.jsx)("button",{onClick:function(){return function(e){var t=c.findIndex((function(t){return t.id===e}));i((function(e){return[].concat(Object(f.a)(e.slice(0,t)),Object(f.a)(e.slice(t+1)))}))}(e.id)},children:"Delete"})]})]},e.id)}))})},E=n(14),L=d.c.div(T||(T=Object(b.a)(["\n  display: flex;\n  position: absolute;\n  align-items: center;\n  top: 0;\n  bottom: 0;\n  right: -600px;\n"]))),V=d.c.div(A||(A=Object(b.a)(["\n  width: 30px;\n  height: 30px;\n  border: 2px solid white;\n  border-radius: 50%;\n  margin-right: 15px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  div {\n    position: absolute;\n    :first-child {\n      width: 20px;\n      height: 2px;\n      background-color: white;\n    }\n    :last-child {\n      display: ",";\n      width: 2px;\n      height: 20px;\n      background-color: white;\n    }\n  }\n"])),(function(e){return e.isActive?"none":"block"})),M=d.c.form(J||(J=Object(b.a)(["\n  transform: scaleX(0);\n  opacity: 0;\n  transition: all 0.5s ease;\n  transform-origin: center left;\n  margin-right: 20px;\n  &.active {\n    transform: scaleX(1);\n    opacity: 1;\n  }\n"])));var Q,X,B,F=function(){var e=Object(g.a)(),t=e.register,n=e.handleSubmit,c=e.setValue,i=Object(g.a)(),r=i.register,a=i.handleSubmit,l=i.setValue,b=Object(s.d)(x),d=Object(O.a)(b,2),j=d[0],h=d[1],p=Object(s.f)(m),y=Object(o.useState)(!1),k=Object(O.a)(y,2),w=k[0],D=k[1];return Object(o.useEffect)((function(){localStorage.setItem("categories",JSON.stringify(j))}),[j]),Object(v.jsxs)(L,{children:[Object(v.jsxs)(V,{isActive:w,onClick:function(){D((function(e){return!e}))},children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsxs)(M,{className:w?"active":"",onSubmit:n((function(e){var t=e.newCategory,n=Object(u.a)(Object(u.a)({},j),{},Object(E.a)({},t,t));h(n),c("newCategory","")})),children:[Object(v.jsx)("input",Object(u.a)(Object(u.a)({},t("newCategory",{required:!0,maxLength:15})),{},{type:"text",placeholder:"Add New Category..."})),Object(v.jsx)("button",{children:"Add"})]}),Object(v.jsxs)(M,{className:w?"active":"",onSubmit:a((function(e){var t=e.deleteCategory;Object.keys(j).find((function(e){return e===t}))?1!==Object.keys(j).length?window.confirm("All ToDos in this category will be lost.")&&(h((function(e){var n={};return Object.keys(e).map((function(c){c!==t&&(n[c]=e[c])})),Object(u.a)({},n)})),p((function(e){var n=e.filter((function(e){return e.category!==t}));return Object(f.a)(n)})),l("deleteCategory","")):window.alert("You must have at least one category."):window.alert("No such category exists.")})),children:[Object(v.jsx)("input",Object(u.a)(Object(u.a)({},r("deleteCategory",{required:!0,maxLength:15})),{},{type:"text",placeholder:"Delete Category..."})),Object(v.jsx)("button",{children:"Delete"})]})]})},H=d.c.div(Q||(Q=Object(b.a)(["\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),P=d.c.div(X||(X=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 200px;\n"]))),Y=d.c.label(B||(B=Object(b.a)(["\n  font-size: 20px;\n  color: white;\n"])));var G,K,R,U=function(){var e=Object(s.d)(p),t=Object(O.a)(e,2),n=t[0],c=t[1],i=Object(s.d)(x),r=Object(O.a)(i,2),a=r[0];return r[1],Object(o.useEffect)((function(){localStorage.setItem("board",n+"")}),[n]),Object(v.jsx)(H,{children:Object(v.jsxs)(P,{children:[Object(v.jsx)(Y,{htmlFor:"board",children:"Category: "}),Object(v.jsx)("select",{onChange:function(e){c(e.currentTarget.value)},name:"board",id:"board",value:n,children:Object.keys(a).map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))}),Object(v.jsx)(F,{})]})})},W=Object(d.b)(G||(G=Object(b.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n\tbackground-color: ",";\n}\n"])),(function(e){return e.theme.bgColor})),Z=d.c.div(K||(K=Object(b.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #212121;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),$=d.c.div(R||(R=Object(b.a)(["\n  color: whitesmoke;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 32px;\n"])));var _=function(){return Object(v.jsxs)(d.a,{theme:j,children:[Object(v.jsx)(W,{}),Object(v.jsxs)(Z,{children:[Object(v.jsx)($,{children:"To Do List"}),Object(v.jsx)(U,{}),Object(v.jsx)(C,{}),Object(v.jsx)(z,{})]})]})},ee=new l.QueryClient;a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(l.QueryClientProvider,{client:ee,children:Object(v.jsx)(s.a,{children:Object(v.jsx)(_,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c3c8de5c.chunk.js.map