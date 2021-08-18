(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var s=c(14),i=c.n(s),n=c(3),a=c(1),r=c(0),l=function(e){return Object(r.jsx)("div",{className:"ui large top fixed  menu",style:{minHeight:"60px"},children:Object(r.jsxs)("div",{className:"ui container",children:[Object(r.jsx)("span",{onClick:function(){e.setActiveMenu("HOME")},className:"item",children:"Home"}),Object(r.jsx)("span",{onClick:function(){e.setActiveMenu("LORIPSUM")},className:"item text",children:"Loripsum API"}),Object(r.jsx)("span",{onClick:function(){e.setActiveMenu("OWNAPI")},className:"item",children:"Your own API"}),Object(r.jsx)("div",{className:"right menu  ",children:Object(r.jsx)("div",{style:{maxHeight:"55px"},children:Object(r.jsx)("img",{alt:"logo",src:"http://34.220.35.170/wp-content/uploads/2020/01/SwimLeft_SiteLogoDark.png",style:{marginTop:".7em"},className:" ui image "})})})]})})},d=c(5),j=c.n(d),h=c(15),u=c(16),o=c.n(u),b=function(){var e=Object(a.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!0),l=Object(n.a)(i,2),d=l[0],u=l[1],b=Object(a.useState)("short"),m=Object(n.a)(b,2),O=m[0],x=m[1],v=Object(a.useState)(!0),p=Object(n.a)(v,2),g=p[0],f=p[1],N=Object(a.useState)(2),k=Object(n.a)(N,2),y=k[0],S=k[1],M=Object(a.useState)(!0),C=Object(n.a)(M,2),w=C[0],A=C[1],P=Object(a.useState)({length:0}),H=Object(n.a)(P,2),I=H[0],L=H[1],R=Object(a.useState)(""),T=Object(n.a)(R,2),E=T[0],J=T[1],U=Object(a.useState)(!1),q=Object(n.a)(U,2),G=q[0],W=q[1];return Object(a.useEffect)((function(){G&&function(){var e=Object(h.a)(j.a.mark((function e(t,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://enigmatic-savannah-03269.herokuapp.com/proxy/words",e.prev=1,e.next=4,o.a.get("https://enigmatic-savannah-03269.herokuapp.com/proxy/words",{params:I});case 4:s=e.sent,J(s.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}()()}),[I]),Object(r.jsxs)("div",{className:"ui inverted segment",children:[Object(r.jsxs)("div",{className:"ui inverted form",children:[Object(r.jsx)("div",{className:"inline field",children:Object(r.jsxs)("div",{className:"ui checkbox",children:[Object(r.jsx)("input",{onChange:function(e){s(e.target.checked)},type:"checkbox",checked:c,tabindex:"0",className:""}),Object(r.jsx)("label",{children:"plaintext : check for true, uncheck for false"})]})}),Object(r.jsxs)("div",{className:"three fields",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Number of paragraphs"}),Object(r.jsx)("input",{value:y,placeholder:"integer",type:"number",onChange:function(e){S(e.target.value)}})]}),Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Length: short medium or long"}),Object(r.jsx)("input",{onChange:function(e){x(e.target.value)},value:O,placeholder:"length",type:"text"})]})]}),Object(r.jsx)("div",{className:"inline field",children:Object(r.jsxs)("div",{className:"ui checkbox",children:[Object(r.jsx)("input",{onChange:function(e){A(e.target.checked)},checked:w,type:"checkbox",tabindex:"0",className:""}),Object(r.jsx)("label",{children:"decorate : check for true, uncheck for false"})]})}),Object(r.jsx)("div",{className:"inline field",children:Object(r.jsxs)("div",{className:"ui checkbox",children:[Object(r.jsx)("input",{onChange:function(e){u(e.target.checked)},checked:d,type:"checkbox",tabindex:"0",className:""}),Object(r.jsx)("label",{children:"headers : check for true, uncheck for false"})]})}),Object(r.jsx)("div",{className:"inline field",children:Object(r.jsxs)("div",{className:"ui checkbox",children:[Object(r.jsx)("input",{onChange:function(e){f(e.target.checked)},checked:g,type:"checkbox",tabindex:"0",className:""}),Object(r.jsx)("label",{children:"dl : check for true, uncheck for false"})]})}),Object(r.jsx)("div",{onClick:function(){W(!0),function(){var e={};c&&(e.plaintext=!0),d&&(e.headers=!0),g&&(e.dl=!0),w&&(e.decorate=!0),e.number=y,e.length=O,L(e)}()},className:"ui submit button",children:"Submit"})]}),Object(r.jsx)("div",{className:"ui segment",children:G?E:"On submit results appear here"})]})},m=function(e){return Object(r.jsx)("div",{children:"HOME"===e.activeMenu?Object(r.jsx)("div",{className:"pusher",children:Object(r.jsx)("div",{className:"ui inverted vertical masthead center aligned segment",style:{minHeight:"90vh"},children:Object(r.jsxs)("div",{className:"ui text container",children:[Object(r.jsx)("h1",{className:"ui inverted header",children:"Proxy server API"}),Object(r.jsx)("h2",{children:"Get around anoying server side CORS issues."}),Object(r.jsxs)("div",{onClick:function(){e.setActiveMenu("LORIPSUM")},className:"ui huge primary button",children:["Get Started ",Object(r.jsx)("i",{className:"right arrow icon"})]})]})})}):"LORIPSUM"===e.activeMenu?Object(r.jsx)("div",{className:"pusher",children:Object(r.jsx)("div",{className:"ui inverted vertical masthead  aligned segment",style:{minHeight:"90vh"},children:Object(r.jsxs)("div",{className:"ui text container",children:[Object(r.jsxs)("h1",{style:{marginTop:"5em"},children:["Make a call to the API found here:",Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://loripsum.net/",target:"_blank",rel:"noreferrer",children:"Sorce"})]}),Object(r.jsx)("h2",{children:"Currently a call to this api will result in a CORS rejection because the header is not set as required by the browser"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:" This site proxides a proxy server that lets you make a call to https://enigmatic-savannah-03269.herokuapp.com/api/words and received back JSON loripsum according to the parameters you send."}),Object(r.jsx)("p",{children:"Supported parameters are:"}),Object(r.jsxs)("div",{class:"ui list",children:[Object(r.jsx)("div",{class:"item",children:"plaintext=true ... no html tags"}),Object(r.jsx)("div",{class:"item",children:"number=(integer) ... number of paragraphs to return"}),Object(r.jsx)("div",{class:"item",children:"decorate=true ... add html styling"}),Object(r.jsx)("div",{class:"item",children:"dl=true ... add description lists"}),Object(r.jsx)("div",{class:"item",children:"headers=true ... add html headers"}),Object(r.jsx)("div",{class:"item",children:"length= short medium or long  ... add length of each paragraph of content"})]})]}),Object(r.jsx)("div",{style:{paddingTop:"50px"},children:Object(r.jsx)(b,{})})]})})}):"OWNAPI"===e.activeMenu?Object(r.jsx)("div",{className:"pusher",children:Object(r.jsx)("div",{className:"ui inverted vertical masthead  aligned segment",style:{minHeight:"90vh"},children:Object(r.jsx)("div",{className:"ui text container",children:Object(r.jsx)("h1",{style:{marginTop:"5em"},children:"Comming soon ..."})})})}):void 0})},O=function(){return Object(r.jsx)("div",{className:"ui container",children:Object(r.jsx)("div",{className:"ui segment  center aligned",children:Object(r.jsx)("h4",{children:"Built by Swim Left Products "})})})},x=function(){var e=Object(a.useState)("HOME"),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{activeMenu:c,setActiveMenu:s}),Object(r.jsx)(m,{activeMenu:c,setActiveMenu:s}),Object(r.jsx)(O,{})]})};i.a.render(Object(r.jsx)(x,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c688c760.chunk.js.map