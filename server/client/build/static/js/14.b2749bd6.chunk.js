(this.webpackJsonpaeroclub=this.webpackJsonpaeroclub||[]).push([[14],{1062:function(e,t,c){"use strict";c.r(t);var s=c(15),a=c(0),l=c(35),i=c(30),n=(c(202),c(13)),r=c(172),d=c.n(r),o=c(28),j=c(241),b=c(1);t.default=function(){var e,t,c=Object(l.i)().shareId,r=(Object(l.i)().projectId,Object(a.useState)(void 0)),m=Object(s.a)(r,2),h=m[0],u=m[1],p=Object(l.g)(),x=Object(a.useState)(1),O=Object(s.a)(x,2),v=O[0],f=O[1];return Object(a.useEffect)((function(){d()(document).ready((function(){d()("#collapsebtn").on("click",(function(){"Read More"===d()("#collapsebtn").text()?d()(this).html("Read less"):d()(this).text("Read More")}))})),o.animateScroll.scrollToTop(),fetch("".concat(n.b,"/api/share/project/").concat(c),{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwtToken"))}}).then((function(e){return 200!==e.status&&p.push("/404"),e.json()})).then((function(e){document.title="".concat(e.title," | ").concat(n.a),u(e),f(0)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{time:1,fetching:v}),Object(b.jsxs)("div",{className:"my-5",children:[Object(b.jsxs)("div",{className:"mb-4",children:[Object(b.jsx)("h4",{className:"my-3",style:{marginBottom:"0px",textAlign:"center"},children:null===h||void 0===h?void 0:h.title}),Object(b.jsx)("div",{className:"miniSep",style:{marginBottom:"40px",background:"rgb(204, 67, 67)"}})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"my-3 subheaders",children:"Aim"}),Object(b.jsx)("p",{className:"px-5",children:null===h||void 0===h?void 0:h.objective})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"my-3 subheaders",children:"Components and Technologies Used"}),Object(b.jsx)("div",{className:"d-flex px-5 flex-wrap",children:null===h||void 0===h||null===(e=h.compTech)||void 0===e?void 0:e.map((function(e){return Object(b.jsx)("div",{className:"d-inline px-3 py-2 m-1",style:{border:"2px solid #dec3c3",borderRadius:"100px",background:"#fff7f7"},children:e})}))})]}),Object(b.jsxs)("div",{className:"my-5",children:[Object(b.jsx)("h3",{className:"mb-4 subheaders",children:"Overview"}),Object(b.jsx)("p",{className:"px-5 ql-editor",dangerouslySetInnerHTML:{__html:null===h||void 0===h?void 0:h.overview}})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"my-3 subheaders",children:"Project By: "}),Object(b.jsx)("ul",{className:"px-5",children:null===h||void 0===h||null===(t=h.members)||void 0===t?void 0:t.map((function(e){return e.accepted?Object(b.jsx)("li",{children:e.user.linkedin_url?Object(b.jsx)("a",{href:e.user.linkedin_url,target:"_blank",children:e.user.name}):Object(b.jsx)("span",{children:e.user.name})}):Object(b.jsx)(b.Fragment,{})}))})]})}),(null===h||void 0===h?void 0:h.ytID)?Object(b.jsx)("div",{className:"d-block iframe-container",children:Object(b.jsx)("iframe",{width:"889px",height:"500",src:"https://www.youtube.com/embed/".concat(Object(j.a)(null===h||void 0===h?void 0:h.ytID)),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"mx-auto d-block responsive-iframe"})}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(null===h||void 0===h?void 0:h.description)?Object(b.jsx)("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#collapse11","aria-expanded":"false","aria-controls":"collapse11",id:"collapsebtn",children:"Read More"}):Object(b.jsx)(b.Fragment,{})}),Object(b.jsx)("div",{class:"collapse collapsews",id:"collapse11",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"my-3 subheaders",children:"Description"}),Object(b.jsx)("p",{className:"px-3 ql-editor",dangerouslySetInnerHTML:{__html:null===h||void 0===h?void 0:h.description}})]})})]})]})]})]})}}}]);
//# sourceMappingURL=14.b2749bd6.chunk.js.map