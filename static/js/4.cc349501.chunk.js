(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{390:function(e,a,t){e.exports={wrapper:"Dialogs_wrapper__1cRA8",button:"Dialogs_button__UnW0m",wrap:"Dialogs_wrap__3fA78",wrapButton:"Dialogs_wrapButton__3lW_t"}},391:function(e,a,t){"use strict";var s=t(7),n=t(127),c=(t(0),t(12)),r=t(20),o=t(1),i=function(e){return{isAuth:e.auth.isAuth}};a.a=function(e){return Object(r.b)(i)((function(a){var t=a.isAuth,r=Object(n.a)(a,["isAuth"]);return t?Object(o.jsx)(e,Object(s.a)({},r)):Object(o.jsx)(c.a,{to:"/login"})}))}},395:function(e,a,t){"use strict";var s=t(2),n=t(5),c=t(0),r=(t(3),t(8)),o=t(345),i=t(10),l=c.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.raised,d=void 0!==l&&l,u=Object(n.a)(e,["classes","className","raised"]);return c.createElement(o.a,Object(s.a)({className:Object(r.a)(t.root,i),elevation:d?8:1,ref:a},u))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},396:function(e,a,t){"use strict";var s=t(2),n=t(5),c=t(0),r=(t(3),t(8)),o=t(10),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,l=void 0===i?"div":i,d=Object(n.a)(e,["classes","className","component"]);return c.createElement(l,Object(s.a)({className:Object(r.a)(t.root,o),ref:a},d))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},406:function(e,a,t){"use strict";t.r(a);var s=t(138),n=t(20),c=t(390),r=t.n(c),o=t(36),i=t(1),l=function(e){var a="/dialogs/".concat(e.id);return Object(i.jsx)("div",{className:r.a.dialog,children:Object(i.jsx)(o.c,{to:a,children:e.name})})},d=(t(0),t(128)),u=t(169),b=t(68),j=t(92),m=Object(j.a)(50),p=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(i.jsx)("div",{className:r.a.wrap,children:Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)(d.a,{component:b.b,validate:[j.b,m],name:"newMessageBody",placeholder:"Message..."}),Object(i.jsx)("div",{className:r.a.wrapButton,children:Object(i.jsx)("button",{className:r.a.button,children:"Send"})})]})})})),O=t(395),f=t(396),g=t(106),h=t(373),v=Object(h.a)({root:{minWidth:275,margin:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var x=function(e){var a=v(),t=e.dialogsPage,s=(t.dialogs.map((function(e){return Object(i.jsx)(l,{name:e.name,id:e.id},e.id)})),t.messages.map((function(e){return Object(i.jsx)(O.a,{className:a.root,children:Object(i.jsxs)(f.a,{children:[Object(i.jsx)(g.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:"You message"}),Object(i.jsxs)(g.a,{variant:"body2",component:"p",children:[e.message,Object(i.jsx)("br",{})]})]})})})));return Object(i.jsxs)("div",{className:r.a.wrapper,children:[Object(i.jsx)("div",{className:r.a.dialogs,children:s}),Object(i.jsx)(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})]})},w=t(16),N=t(391);a.default=Object(w.d)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(a){e(Object(s.b)(a))}}})),N.a)(x)}}]);
//# sourceMappingURL=4.cc349501.chunk.js.map