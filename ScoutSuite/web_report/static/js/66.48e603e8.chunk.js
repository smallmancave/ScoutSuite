(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[66],{592:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(640)),c=n(103),i=n(104),s=n(642);t.default=function(e){var t=e.data;return t?Object(a.jsxs)(r.a,{data:t,children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)(r.c,{label:"Title",valuePath:"title"}),Object(a.jsx)(r.c,{label:"Description",valuePath:"description",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Project ID",errorPath:"projet_id",valuePath:"project"}),Object(a.jsx)(r.c,{label:"Custom Role",valuePath:"custom_role",renderValue:c.n})]}),Object(a.jsxs)(i.b,{children:[Object(a.jsx)(i.a,{title:"Permissions"}),Object(a.jsxs)(i.a,{title:"Bindings",children:[Object(a.jsx)(r.c,{label:"Attached Users",valuePath:"members.users",renderValue:c.k}),Object(a.jsx)(r.c,{label:"Attached Groups",valuePath:"members.groups",renderValue:c.k}),Object(a.jsx)(r.c,{label:"Attached Service Accounts",valuePath:"members.service_accounts",renderValue:c.k})]})]})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),s=r.a.createContext(""),l=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),s=n(7),l=n.n(s),o=n(15),u=n.n(o),b=n(10),j=n.n(b),d=n(637),h=n(103),p=n(83),v=(n(641),n(624)),f=n(191),x=n.n(f),O=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,s=Object(c.useContext)(m.a),l=s.exceptions,o=s.addException,b=Object(O.b)().enqueueSnackbar,j=u()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(v.a,{disabled:j,size:"small",startIcon:Object(r.jsx)(x.a,{}),className:"exception-btn",onClick:function(){o(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),A=function(e){var t,n=e.label,s=e.separator,o=e.valuePath,b=e.errorPath,v=e.className,f=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,A=e.basePathOverwrite,C=Object(g.g)(),k=Object(c.useContext)(d.a),V=Object(c.useContext)(d.b),_=Object(c.useContext)(d.c),N=Object(h.a)(A||V,o),w=m(e.value||u()(k.item,N,e.value));("boolean"===typeof w&&(w=String(w)),b)?t=(j()(b)?b:[b]).map((function(e){return Object(h.a)(A||V,e)})):t=[N];var D=t.some((function(e){return k.path_to_issues.includes(e)})),I=k.level;if(Object(c.useEffect)((function(){D&&_(I)}),[I]),void 0===w||null===w)return null;var E=Object(r.jsx)(P,{service:C.service,finding:C.finding,path:"".concat(k.path,".").concat(t[0])}),S=Object(r.jsxs)("span",{className:l()(D&&l()("issue",I)),children:[w,D&&E]});return Object(r.jsx)(p.a,{className:l()(v,"partial-value",{inline:f}),label:n,separator:s,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},O),{},{children:S})):S})};A.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=A},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,s=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(s,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),s=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){}}]);
//# sourceMappingURL=66.48e603e8.chunk.js.map