(this.webpackJsonpnedux=this.webpackJsonpnedux||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var c=a(0),n=(a(70),a(71),a(25)),s=a.n(n),r=(a(77),a(78),a(79),a(7),a(2),a(4)),i=a(9),l=a(3),o=a(32),d=a(114),j=a(113),m=a(39),u=a.n(m),b=a(10),h=a(36),p=a.n(h),O=p.a.create({baseURL:"https://services.staging.wayagram.ng/cms/api/"});O.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("user_data"));return t&&t.token&&(e.headers.Authorization="Bearer ".concat(t.token)),e})),O.interceptors.response.use(void 0,(function(e){var t=e.response;return console.log(e,t),t}));var x=O;function v(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.get(t).then((function(e){if(e){var t=e.data;if(e.status)return t}return!1})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=Object(b.c)({key:"getSocialLinks",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("social");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),N=Object(b.c)({key:"getAllContacts",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("contact");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),w=Object(b.c)({key:"getSettingsApi",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("settings");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),y=(Object(b.c)({key:"getContactContent",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("contents");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.b)({key:"homeRefresh",default:""})),T=(Object(b.b)({key:"fetching",default:!0}),Object(b.c)({key:"getHome",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,c,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.get,e.prev=1,c=a(y),console.log(c),e.next=6,v("home_page");case 6:return n=e.sent,e.abrupt("return",n.data||{});case 10:return e.prev=10,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()})),A=Object(b.c)({key:"getSettings",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("settings");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),_=(Object(b.c)({key:"getTermsAndCondition",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("terms_condition");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getPrivacyPolicy",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("policy");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getAboutContent",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("about/contents");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getFeatures",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,c,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.get,e.prev=1,c=a(y),console.log(c),e.next=6,v("features");case 6:return n=e.sent,e.abrupt("return",n.data||[]);case 10:return e.prev=10,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getHowItWorks",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("how_it_works");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getFaq",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("faqs");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getCareerTop",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("career/top");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.c)({key:"getCareer",get:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,v("career");case 4:return a=e.sent,e.abrupt("return",a.data||{});case 8:return e.prev=8,e.t0=e.catch(1),console.error("ERROR: \n".concat(e.t0)),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),a(102),a(1));var E=function(){var e=Object(b.e)(f),t=("hasValue"===e.state&&e.contents,Object(b.e)(A)),a=("hasValue"===t.state&&t.contents,Object(c.useState)("")),n=Object(l.a)(a,2),s=(n[0],n[1],Object(c.useState)(!1)),r=Object(l.a)(s,2),i=(r[0],r[1],Object(c.useState)({show:!1})),o=Object(l.a)(i,2),m=o[0];return o[1],Object(_.jsxs)("footer",{className:"w-100",children:[(null===m||void 0===m?void 0:m.show)&&Object(_.jsx)(d.a,{showIcon:!0,closable:!0,type:"success"===m.status?"success":"error",message:m.message||"an error occurred please try again!"}),Object(_.jsx)(u.a,{right:!0,cascade:!0,children:Object(_.jsxs)("div",{className:"bottom container pt-4",children:[Object(_.jsx)(j.a,{type:"horizontal",className:"bg-secondary"}),Object(_.jsxs)("div",{className:"row justify-content-between",children:[Object(_.jsxs)("p",{className:"col-md-5",children:["Copyright \xa9 NODEBITs ",(new Date).getFullYear(),"  All rights reserved"]}),Object(_.jsxs)("ul",{className:"col-md-7",children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"nav-link px-2",href:"https://fb.com/commercecom_hor",children:"Facebook"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"nav-link px-2",href:"https://twitter.com/commercecom_hor",children:"Twitter"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"nav-link px-2",href:"#",children:"Youtube"})})]})]})]})})]})},S=(a(105),a(16)),k=a.p+"static/media/nasslogo.77fd2fd3.png",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAfCAYAAABkitT1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7dbRCYAwDATQKziAI3SUjuIIruAGbuIIuom6QZ2g1r8iDRSEtMg9KIGjH/k6AhARfWbeQQjBxrFCnzPGnGnQCR8tGpBbzsc3Qd8FospyVdLHsUDfUFIlz3IODZB6boM+VglVJ1XJCH1zrBKfBtLJtEOfLT2ZDhAR/cMNq2oZfI2mreEAAAAASUVORK5CYII=";var M=function(e){var t=Object(b.e)(w);return"hasValue"===t.state&&t.contents,Object(_.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top",style:{backgroundImage:"url(/grain.png)",backgroundColor:"#00f900"},children:[Object(_.jsx)("a",{className:"navbar-brand ml-4 pl-1",href:"/",children:Object(_.jsx)("img",{src:k,className:" img-fluid",height:100,width:100,alt:"nedux Logo"})}),Object(_.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(_.jsxs)("span",{className:"",children:[Object(_.jsx)("img",{src:R})," "]})}),Object(_.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown",children:Object(_.jsxs)("ul",{className:"navbar-nav",children:[Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("a",{className:"nav-link",href:"/#/members",children:"MEMBERS"})}),Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("a",{className:"nav-link",href:"/",children:"SUBCOMMITTEES"})}),Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("a",{className:"nav-link",href:"/",children:"CALENDER"})}),Object(_.jsxs)("li",{className:"nav-item dropdown p-0",children:[Object(_.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarScrollingDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"NEWS & MEDIA"}),Object(_.jsxs)("ul",{className:"dropdown-menu p-0 w-200","aria-labelledby":"navbarScrollingDropdown",children:[Object(_.jsx)("li",{children:Object(_.jsx)(S.b,{className:"dropdown-item w-100",to:"/news",children:"PRESS RELEASE"})}),Object(_.jsx)("li",{children:Object(_.jsx)("hr",{className:"dropdown-divider m-0 p-0"})}),Object(_.jsx)("li",{children:Object(_.jsx)(S.b,{className:"dropdown-item w-100",to:"/news",children:"LETTERS"})}),Object(_.jsx)("li",{children:Object(_.jsx)("hr",{className:"dropdown-divider m-0 p-0"})}),Object(_.jsx)("li",{children:Object(_.jsx)(S.b,{className:"dropdown-item w-100",to:"/news",children:"BLOGS"})}),Object(_.jsx)("li",{children:Object(_.jsx)("hr",{className:"dropdown-divider m-0 p-0"})}),Object(_.jsx)("li",{children:Object(_.jsx)(S.b,{className:"dropdown-item w-100",to:"/news",children:"IN THE NEWS"})}),Object(_.jsx)("li",{children:Object(_.jsx)(S.b,{className:"dropdown-item w-100",to:"/news",children:"ON THE HOUSE FLOOR"})})]})]}),Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("a",{className:"nav-link",href:"/#/about",children:"ABOUT"})})]})})]})},I=a(14),C=a.n(I);a(60);var H=function(){var e=Object(b.e)(N),t=("hasValue"===e.state&&e.contents&&e.contents,Object(b.e)(f)),a=("hasValue"===t.state&&t.contents,Object(c.useState)({name:"",email:"",phone:"",subject:"",message:""})),n=Object(l.a)(a,2),s=(n[0],n[1],Object(c.useState)(!1)),r=Object(l.a)(s,2),i=(r[0],r[1],Object(c.useState)({show:!1})),d=Object(l.a)(i,2);return d[0],d[1],Object(c.useEffect)((function(){}),[]),Object(_.jsxs)("div",{id:"contactPage",children:[Object(_.jsx)(M,{}),Object(_.jsx)("div",{className:"pt-5",children:Object(_.jsx)("div",{className:"row pt-5 actual-content py-4 px-lg-4 justify-content-start",children:Object(_.jsx)("div",{className:"col-sm-10 col-md-12 text first pt-5",children:Object(_.jsx)(C.a,{right:!0,children:Object(_.jsxs)("div",{className:"",children:[Object(_.jsx)("h3",{className:"m-0",children:"Schedule Appointment with our Experts"}),Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(o.a,{url:"https://calendly.com/appointments-zc"})})]})})})})}),Object(_.jsx)(E,{})]})};a(106);a(107);var D=function(e){var t=e.img,a=e.title,c=e.text;return e.url,Object(_.jsxs)("div",{className:"w-100 h-100",children:[t?Object(_.jsx)("img",{alt:"com",src:t,className:"w-100 h-150p img-fluid"}):"",Object(_.jsxs)("div",{className:"text-secondary p-2",children:[Object(_.jsx)("p",{className:"fs-6 lh-base text-break",dangerouslySetInnerHTML:{__html:a}}),Object(_.jsx)("span",{className:"text-break",dangerouslySetInnerHTML:{__html:c}})]})]})},L=Object(b.b)({key:"generalPageLoading",default:!0});var B=function(){return Object(_.jsxs)("div",{className:"w-100 vh-100 position-relative py-5",children:[Object(_.jsx)("div",{className:"d-flex text-center justify-content-center pt-100p",children:Object(_.jsxs)("div",{className:"spinner-grow",style:{width:"0rem",height:"0rem"},role:"status",children:[Object(_.jsx)("span",{className:"visually-hidden",children:"Loading..."}),Object(_.jsx)("img",{alt:"com",src:"/nedux.png",width:200,height:200})]})}),Object(_.jsx)("div",{className:"w-100 mt-5",children:Object(_.jsx)("div",{className:"text-center"})})]})};a(31);var U=function(e){var t=e.isFooter,a=void 0===t||t,n=Object(b.d)(L),s=Object(l.a)(n,2),r=s[0],i=s[1],o=[{id:5,content:"CEO ",image_url:"",type:"team",title:"JOHN AG",created_at:"2021-09-12T21:41:32.000+00:00",updated_at:"2022-06-27T17:27:17.000+00:00"},{id:6,content:"Director Growth & Marketing",image_url:"",type:"team",title:"JANE BROWN,",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"}];return Object(c.useEffect)((function(){i(!Array.isArray(o)&&!Object.values(o).length)}),[o]),Object(_.jsx)("div",{className:"w-100",children:r?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"w-100",children:[Object(_.jsx)(M,{}),Object(_.jsx)("div",{className:"w-100 pt-70p",children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"container aboutTop pt-5",children:[Object(_.jsx)("div",{className:"text-center",children:Object(_.jsx)("p",{className:"fs-3 fw-900p",dangerouslySetInnerHTML:{__html:"ABOUT US"}})}),Object(_.jsx)("div",{className:"row",children:Object(_.jsx)("div",{className:"col-md-12",children:Object(_.jsx)("div",{className:"",children:Object(_.jsx)("p",{className:"text-center px-5 mx-5 ",children:'The committee was originally established on December 14, 1795, as the Committee on Commerce and Manufactures when the growing demands of the young nation required that Congress establish a permanent panel to exercise its constitutional authority to "regulate Commerce with foreign Nations, and among the several States'})})})})]})})})}),a?Object(_.jsx)(E,{}):""]})})},P=a.p+"static/media/n4.3709e412.png",F=a.p+"static/media/munir.ca1af60d.JPG";var G=function(e){var t=e.isFooter,a=void 0===t||t,n=Object(b.d)(L),s=Object(l.a)(n,2),r=s[0],i=s[1],o=[{id:1,content:"",url:"/committees",image_url:P,type:"team",title:"SUBCOMMITTEES",created_at:"2021-09-12T21:41:32.000+00:00",updated_at:"2022-06-27T17:27:17.000+00:00"},{id:2,content:"",url:"/members/munir",image_url:F,type:"team",title:"HON. AHMED MUNIR, THE CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:2,content:"",url:"/oversight",image_url:P,type:"team",title:"Oversigth & Investigations",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:3,content:"",url:"/members/deputy",image_url:P,type:"team",title:"HON. X Y, THE DEPUTY CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:4,content:"",url:"/memberS",image_url:P,type:"team",title:"MEET THE COMMITEE MEMBERS",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,content:"",image_url:P,url:"/mission",type:"team",title:"MISSION AND HISTORY",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,content:"",image_url:P,url:"/policies",type:"team",title:"POLICY DOCUMENTS",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"}],d=o;return Object(c.useEffect)((function(){i(!Array.isArray(d)&&!Object.values(d).length)}),[d]),Object(_.jsx)("div",{className:"w-100",children:r?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"w-100",children:[Object(_.jsx)("div",{className:"w-100 pt-70p",children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:null===o||void 0===o?void 0:o.map((function(e){return Object(_.jsx)("div",{className:"col-md-3 my-3",children:Object(_.jsx)(S.b,{to:"".concat(e.url),children:Object(_.jsx)("div",{className:"text-center",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{style:{height:200,width:200},alt:"com",src:e.image_url||"/images/fallback-sm.png",className:"rounded-15p object-cover h-30 w-30 shadow-sm img-fluid"}),Object(_.jsx)("h6",{className:"fs-5 fw-bold my-2",dangerouslySetInnerHTML:{__html:e.title}})]})})})},e.id)}))})})})})})}),a?Object(_.jsx)(E,{}):""]})})},Y=a.p+"static/media/n2.72260948.png",V=[{id:1,content:"The commuttiee on commerce has been inau",url:"/news/1",image_url:P,type:"team",title:"SUBCOMMITTESS",created_at:"2021-09-12T21:41:32.000+00:00",updated_at:"2022-06-27T17:27:17.000+00:00"},{id:2,content:"The commuttiee on commerce has been inau",url:"/members/munir",image_url:Y,type:"team",title:"HON. AHMED MUNIR, THE CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:3,content:"",url:"/members/deputy",image_url:P,type:"team",title:"HON. X Y, THE DEPUTY CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:4,content:"",url:"/memberS",image_url:Y,type:"team",title:"MEET THE COMMITEE MEMBERS",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,content:"",image_url:Y,url:"/mission",type:"team",title:"MISSION AND HISTORY",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"}],z=a(115),J=a(116),K=a(117);var Q=function(e){e.isFooter;var t=Object(b.d)(L),a=Object(l.a)(t,2),n=a[0],s=a[1],r=[{id:1,content:"",url:"/committees",image_url:"/images/news/n4.png",type:"team",title:"SUBCOMMITTESS",created_at:"2021-09-12T21:41:32.000+00:00",updated_at:"2022-06-27T17:27:17.000+00:00"},{id:2,content:"",url:"/members/munir",image_url:"/images/chair.png",type:"team",title:"HON. AHMED MUNIR, THE CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:3,content:"",url:"/members/deputy",image_url:"/images/news/n2.png",type:"team",title:"HON. X Y, THE DEPUTY CHAIR",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:4,content:"",url:"/memberS",image_url:"/images/news/n4.png",type:"team",title:"MEET THE COMMITEE MEMBERS",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,content:"",image_url:"/images/news/n4.png",url:"/mission",type:"team",title:"MISSION AND HISTORY",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,content:"",image_url:"/images/news/n4.png",url:"/policies",type:"team",title:"POLICY DOCUMENTS",created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"}];return Object(c.useEffect)((function(){s(!Array.isArray(r)&&!Object.values(r).length)}),[r]),Object(_.jsx)("div",{className:"w-100",children:n?Object(_.jsx)(B,{}):Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)("div",{className:"w-100 pt-70p",children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"w-100",children:[Object(_.jsx)("div",{className:""}),Object(_.jsx)("div",{className:"px-5 text-left",children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:"fs-2 fw-700p px-5",children:"Calender "}),Object(_.jsxs)("p",{className:"fs-5 fw-200p px-5",children:["Updated ",(new Date).getDate()+"-"+(new Date).getMonth()+" "+(new Date).getFullYear()]})]})}),Object(_.jsx)("p",{className:"fs-5 fw-200p px-5 text-center",children:"calender items not found"}),Object(_.jsx)("div",{className:"my-3 text-center",children:Object(_.jsxs)("p",{className:"fs-2 fw-900p btn",style:{background:"#00f900"},children:[Object(_.jsx)(z.a,{})," View Full Calender"]})})]})})})})})})},W=a.p+"static/media/commerce.fa12eaa4.png";var X=function(e){e.history;var t,a=Object(c.useState)({homeTopData:[],homeProductData:[],homePosData:[],homeProductListData:[]}),n=Object(l.a)(a,2),s=n[0],r=(n[1],Object(b.e)(T)),i=Object(b.d)(L),o=Object(l.a)(i,2),d=o[0],j=o[1],m="hasValue"===(null===r||void 0===r?void 0:r.state)?null===r||void 0===r?void 0:r.contents:{};return Object(c.useEffect)((function(){j(!1)}),[m]),s.homeTopData,s.homePosData,s.homeProductData,s.homeProductListData,Object(_.jsx)("div",{className:"w-100",children:d?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"w-100",id:"homesection",children:[Object(_.jsx)(M,{className:"mb-4"}),Object(_.jsx)("div",{className:"home-jumbotron pt-3",style:{backgroundImage:"url(/home-bg.png)"},children:Object(_.jsx)("div",{className:"container-fluid w-100 pt-5 px-lg-5",children:Object(_.jsxs)("div",{className:" row",children:[Object(_.jsx)("div",{className:"col-md-6 text-center md-m",children:Object(_.jsx)(C.a,{right:!0,children:Object(_.jsx)("div",{className:"pt-5",children:Object(_.jsx)("img",{src:W,className:"mt-5 p-0 w-100 ",alt:"jumbotron"})})})}),Object(_.jsx)("div",{className:"col-md-6 pt-100p",children:Object(_.jsxs)(C.a,{left:!0,className:"w-100",children:[Object(_.jsxs)("div",{className:"",children:[Object(_.jsx)("h1",{className:"text-dark my-lg-5",dangerouslySetInnerHTML:{__html:"Welcome to the Committee on Commerce."}}),Object(_.jsx)("p",{className:"fs-4 fw-bold pe-md-5",dangerouslySetInnerHTML:{__html:"The Commerce Committee is at the forefront of all issues and policies powering Nigeria's economy, including our global competitive edge in technology, trade and industries.\u200b"}})]}),Object(_.jsx)("div",{})]})}),Object(_.jsx)("div",{className:"col-md-12 pt-100p",children:Object(_.jsx)(C.a,{left:!0,className:"w-100",children:Object(_.jsx)(G,{isFooter:!1})})})]})})}),Object(_.jsx)(Q,{}),Object(_.jsxs)("div",{className:"w-100 row py-3",style:{background:"#00f100"},children:[Object(_.jsxs)("div",{className:"col-md-4 text-center md-m",children:[Object(_.jsx)(z.a,{style:{fontSize:"300%"}}),Object(_.jsx)("p",{className:"fs-1 text-white mb-2",children:"Established"}),Object(_.jsx)("p",{className:"fs-5 py-2 text-white",dangerouslySetInnerHTML:{__html:"Let's explore available opportunities."}})]}),Object(_.jsxs)("div",{className:"col-md-4 text-center md-m",children:[Object(_.jsx)(J.a,{style:{fontSize:"300%"}}),Object(_.jsx)("p",{className:"fs-1 py-2 mb-1 text-white",children:"20"}),Object(_.jsx)("p",{className:"fs-5 text-white mb-2",children:"Members"})]}),Object(_.jsxs)("div",{className:"col-md-4 text-center md-m",children:[Object(_.jsx)(K.a,{style:{fontSize:"300%"}}),Object(_.jsx)("p",{className:"fs-1 mb-1 py-2 text-white",children:" 6 "}),Object(_.jsx)("p",{className:"fs-5 text-white mb-2",children:"Specialized Subcommittee"})]})]}),Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"w-100 py-5 container",children:[Object(_.jsx)("div",{className:"my-3 text-center",children:(null===m||void 0===m||null===(t=m.news)||void 0===t?void 0:t.length)>=1&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:"fs-2 fw-500p",children:"Latest News "}),Object(_.jsx)("p",{className:"fs-2 fw-900p",children:"From the Committee"})]})}),Object(_.jsx)("div",{className:"row",children:null===V||void 0===V?void 0:V.map((function(e,t){return t<4?Object(_.jsx)("div",{className:"col-md-3 my-2 minH-200p",children:Object(_.jsx)(S.b,{to:"/news/".concat(e.id),children:Object(_.jsx)("div",{className:"rounded-5 shadow-sm h-100",children:Object(_.jsx)(D,{img:e.image_url,title:e.title,text:e.content})})})},e.id):""}))}),Object(_.jsx)("div",{className:"my-3 text-center",children:Object(_.jsx)("p",{className:"fs-2 fw-900p btn",style:{background:"#00f900"},children:"More News"})})]})})}),Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)("div",{className:"position-relative w-100 bg-orange-gradient py-5",children:Object(_.jsx)("div",{children:Object(_.jsx)("div",{children:Object(_.jsx)(u.a,{children:Object(_.jsx)("div",{className:"position-relative last-jumbotron pt-1 container my-5",style:{backgroundImage:"url(/grain.png)",background:"#00f900"},children:Object(_.jsx)("div",{className:"row",children:Object(_.jsxs)("div",{className:"container-fluid w-100 pt-5 px-lg-5 row",children:[Object(_.jsxs)("div",{className:"col-md-6 text-center md-m",children:[Object(_.jsx)("p",{className:"fs-1 text-white mb-2",children:"Commerce Committee"}),Object(_.jsx)("p",{className:"fs-5 py-2 text-white",dangerouslySetInnerHTML:{__html:"Let's explore available opportunities."}})]}),Object(_.jsxs)("div",{className:"col-md-4 text-center md-m",children:[Object(_.jsx)("p",{className:"fs-1 text-white mb-2",children:"Office Address"}),Object(_.jsx)("p",{className:"fs-4 mb-1 text-white",children:" Three Arms Zones"}),Object(_.jsx)("p",{className:"fs-5 mb-1  py-0  text-white",children:" Abuja"}),Object(_.jsx)("p",{className:"fs-5 py-0  text-white",children:" 08012345678"})]})]})})})})})})})}),Object(_.jsx)(E,{})]})})},Z=a(6),q=(a(108),a.p+"static/media/james.a9fd4260.jpg"),$=[{id:1,constituency:"Lere",state:"Kaduna",url:"munir",image_url:F,type:"team",title:"Ahmed Munir",officeNo:"1.52",phoneNumber:"08012345676",twitter:"munirtech",facebook:"",biography:"<p>Ahmed Mohammed Munir is Petroleum & Natural Gas Engineer.\n        \n        He was born on September 9th, 1980 in Kaduna state.</p>\n        <p>\n        He was Elected to repreresent Lere Federal constituency in the 9th assembly and also re-elected in the 10th assembly.\n        He was the former \n        Director General of Rural Water Supply and Sanitation Agency (RUWASSA) Kaduna state from August  2019 to March 2021.\n        </p>\n        <p>\n        Hon. Ahmed Munir attended \n        Middle East Technical University Ankara, Turkey 2000-2005,\n        \n        Central University of Venezuela, Caracas, Venezuela 1998-2000,\n        \n        Centro Venezuela-Americano. Caracas, Venezuela 1997-1998,\n        \n        Command Day Secondary school, Gado Nasko Barracks, Abuja 1994-1997,\n        \n        Government Secondary School, Zone 3, Abuja 1993-1994,\n        \n        merican International School, Tripoli, Libya 1988-1993 and\n        \n        1004 Primary School, Lagos 1986-1988.\n        </p>\n        <p>\n        Hon. Ahmed Munir was the Managing Director of \n        Munir Industries & Trade (Nig). Ltd from 2007 to 2021. He managed the engineering\n        & Construction of critical Infrastructure such as Railway, Buildings, Roads & Bridges and ensuring project timelines and highest engineering ethics and standards are met.\n        \n        Hon Ahmed Munir was also the CEO of Cascada Global Services Limited from 2008 to 2021. He \n        \n        coordinate over 1200 number personal across states that include Kebbi, Jigawa, Bauchi, Osun to apply robust technological solutions to block leakages and enhance on Internally Generated (IGR) of the States.\n        \n        Hon. Munir was also an Executive Director at Munir Agro-Allied Packaging Company from 2008 to Date. He is incharge of\n        \n        financial management of the factory situated in Lere LGA that employs over 50 people and produces over 300,000 polypropylene sacks a month for bagging of grains and fertilizer.\n        \n        Hon. Munir did his youth service (NYSC) at the Nigeria National Petroleum Corporation (NNPC) 2006-2007.\n        </p>\n        <p>\n        Hon Munir speaks English, Spanish, Hausa and Turkish fluently.\n        </p>\n        ",bills:["1. eduction","2. security","3. Medical centre Saminaka"],motion:["1. Power outage in Lere LGA","2. Evacuation of Nigerians in Ukrain"],created_at:"2021-09-12T21:41:32.000+00:00",updated_at:"2022-06-27T17:27:17.000+00:00"},{id:2,constituency:"Gombi/Hong",state:"Adamawa",url:"james",image_url:q,type:"team",title:"James Barka",biography:"",bills:[],motion:[],created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:3,constituency:"xxx kkd",state:"Rivers",url:"member1",image_url:P,type:"team",title:"member One",biography:"",bills:[],motion:[],created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:4,constituency:"Gombi/Hong",state:"Rivers",url:"member2",image_url:P,type:"team",title:"Member Two",biography:"",bills:[],motion:[],created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"},{id:5,constituency:"xxx kkd",state:"Rivers",url:"member3",image_url:P,type:"team",title:"Member Three",biography:"",bills:[],motion:[],created_at:"2022-06-27T16:00:44.000+00:00",updated_at:"2022-06-27T16:00:44.000+00:00"}];var ee=function(e){var t=e.isFooter,a=void 0===t||t,n=Object(b.d)(L),s=Object(l.a)(n,2),r=s[0],i=s[1],o=$;return Object(c.useEffect)((function(){i(!Array.isArray(o)&&!Object.values(o).length)}),[o]),Object(_.jsxs)("div",{className:"w-100",children:[Object(_.jsx)(M,{className:"mb-4"}),r?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"w-100 mt-5",children:[Object(_.jsx)("div",{className:"w-100 pt-70p",children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:null===$||void 0===$?void 0:$.map((function(e){return Object(_.jsx)("div",{className:"col-md-3 my-3",children:Object(_.jsx)(S.b,{to:"/members/".concat(e.url),children:Object(_.jsxs)("div",{className:"text-center",children:[Object(_.jsx)("img",{alt:"members",src:e.image_url||"/images/fallback-sm.png",style:{width:150,height:150},className:"rounded-15p object-cover h-30 w-30 shadow-sm img-fluid"}),Object(_.jsx)("h6",{className:"fs-5 fw-bold my-2",dangerouslySetInnerHTML:{__html:e.title}}),Object(_.jsxs)("p",{className:"mb-0",children:[null===e||void 0===e?void 0:e.constituency," Federal Constituency"]}),Object(_.jsxs)("p",{children:[null===e||void 0===e?void 0:e.state," "]})]})})},e.id)}))})})})})})}),a?Object(_.jsx)(E,{}):""]})]})},te=a(118),ae=a(119),ce=a(120),ne=a(121);var se=function(e){var t=e.isFooter,a=void 0===t||t,n=Object(b.d)(L),s=Object(l.a)(n,2),r=s[0],i=s[1],o=V;return Object(c.useEffect)((function(){i(!Array.isArray(o)&&!Object.values(o).length)}),[o]),Object(_.jsx)("div",{className:"w-100",children:r?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"w-100",children:[Object(_.jsx)(M,{}),Object(_.jsx)("div",{className:"w-100 pt-70p mt-5",children:Object(_.jsx)("div",{className:"w-100 mt-5",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:null===V||void 0===V?void 0:V.map((function(e){return Object(_.jsx)("div",{className:"col-md-2 my-3",children:Object(_.jsx)(S.b,{to:"/news/".concat(e.id),children:Object(_.jsx)("div",{className:"text-center",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{alt:"com",src:e.image_url||"/images/fallback-sm.png",className:"rounded-15p object-cover h-48 w-24 shadow-sm img-fluid"}),Object(_.jsx)("h6",{className:"fs-5 fw-bold my-2",dangerouslySetInnerHTML:{__html:e.title}})]})})})},e.id)}))})})})})})}),a?Object(_.jsx)(E,{}):""]})})};var re=function(){var e,t,a=Object(Z.p)().uname,n=Object(b.e)(N),s=("hasValue"===n.state&&n.contents&&n.contents,Object(b.e)(f)),r=("hasValue"===s.state&&s.contents,Object(c.useState)({name:"",email:"",phone:"",subject:"",message:""})),i=Object(l.a)(r,2),o=(i[0],i[1],Object(c.useState)(!1)),d=Object(l.a)(o,2),j=(d[0],d[1],Object(c.useState)({show:!1})),m=Object(l.a)(j,2),u=(m[0],m[1],Object(c.useState)({})),h=Object(l.a)(u,2),p=h[0],O=h[1];return Object(c.useEffect)((function(){var e=null===$||void 0===$?void 0:$.filter((function(e){return(null===e||void 0===e?void 0:e.url)===a}))[0];console.log("de",e),O(e)}),[]),Object(_.jsxs)("div",{id:"contactPage",children:[Object(_.jsx)("div",{className:"mb-5",children:Object(_.jsx)(M,{})}),Object(_.jsxs)("div",{className:"pt-5",children:[Object(_.jsx)("div",{className:" pt-3 mt-5 text-center",style:{backgroundImage:"url(/home-bg.png)"},children:Object(_.jsxs)("h3",{className:"m-0",children:["Hon. ",null===p||void 0===p?void 0:p.title]})}),Object(_.jsxs)("div",{className:"row pt-5 actual-content py-4 px-lg-4 justify-content-start",children:[Object(_.jsx)("div",{className:"col-sm-10 col-md-4 text first pt-5",children:Object(_.jsxs)(C.a,{right:!0,children:[Object(_.jsx)("div",{className:"",children:Object(_.jsx)("div",{className:"App",children:Object(_.jsx)("div",{className:"text-center",children:Object(_.jsx)("img",{alt:"member",src:null===p||void 0===p?void 0:p.image_url,style:{height:400},className:"rounded-15p shadow-sm img-fluid"})})})}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:"fs-2 mt-3 mb-1",children:"Contact"}),Object(_.jsxs)("p",{children:["Suit ",null===p||void 0===p?void 0:p.officeNo]}),Object(_.jsx)("p",{children:null===p||void 0===p?void 0:p.phoneNumber}),Object(_.jsx)("p",{className:"fs-2 mb-1 ",children:"Socials"}),Object(_.jsxs)("div",{className:"'w-100 row py-3",children:[Object(_.jsx)("div",{className:"col-md-2 text-center md-m",children:Object(_.jsx)("a",{href:"https://www.twitter.com/".concat(null===p||void 0===p?void 0:p.twitter),target:"_blank",children:Object(_.jsx)(te.a,{})})}),Object(_.jsx)("div",{className:"col-md-2 text-center md-m",children:Object(_.jsx)("a",{href:null!==p&&void 0!==p&&p.facebook?"https://www.fb.com/".concat(null===p||void 0===p?void 0:p.facebook):"#",target:"_blank",children:Object(_.jsx)(ae.a,{})})}),Object(_.jsx)("div",{className:"col-md-2 text-center md-m",children:Object(_.jsx)("a",{href:null!==p&&void 0!==p&&p.insta?"https://www.instagram.com/".concat(null===p||void 0===p?void 0:p.insta):"",target:"_blank",children:Object(_.jsx)(ce.a,{})})}),Object(_.jsx)("div",{className:"col-md-2 text-center md-m",children:Object(_.jsx)("a",{href:null!==p&&void 0!==p&&p.youtube?"https://www.youtube.com/".concat(null===p||void 0===p?void 0:p.youtube):"",target:"_blank",children:Object(_.jsx)(ne.a,{})})})]})]})]})}),Object(_.jsx)("div",{className:"col-sm-10 col-md-8 text-start pt-5",children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("p",{className:"fs-1 fw-900p",children:"Profile"}),Object(_.jsx)("h6",{className:"fs-5 fw-bold my-2",dangerouslySetInnerHTML:{__html:null===p||void 0===p?void 0:p.biography}}),Object(_.jsx)("p",{className:"fs-1 py-2 fw-900p",children:"Bills"}),Object(_.jsx)("ul",{children:null===p||void 0===p||null===(e=p.bills)||void 0===e?void 0:e.map((function(e){return Object(_.jsx)("li",{children:e})}))}),Object(_.jsx)("p",{className:"fs-1 fw-900p",children:"Motions"}),Object(_.jsx)("ul",{children:null===p||void 0===p||null===(t=p.motion)||void 0===t?void 0:t.map((function(e){return Object(_.jsx)("li",{children:e})}))})]})})]})]}),Object(_.jsx)("div",{className:"w-100",children:Object(_.jsx)(C.a,{bottom:!0,children:Object(_.jsxs)("div",{className:"w-100 py-5 container",children:[Object(_.jsx)("div",{className:"my-3 text-center",children:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("p",{className:"fs-2 fw-500p",children:"News & Announcement "})})}),Object(_.jsx)("div",{className:"row",children:null===V||void 0===V?void 0:V.map((function(e,t){return t<4?Object(_.jsx)("div",{className:"col-md-3 my-2 minH-200p",children:Object(_.jsx)(S.b,{to:"/news/".concat(e.id),children:Object(_.jsx)("div",{className:"rounded-5 shadow-sm h-100",children:Object(_.jsx)(D,{img:e.image_url,title:e.title,text:e.content})})})},e.id):""}))}),Object(_.jsx)("div",{className:"my-3 text-center",children:Object(_.jsx)("p",{className:"fs-2 fw-900p btn",style:{background:"#00f900"},children:"More News"})})]})})}),Object(_.jsx)(E,{})]})};var ie=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(S.a,{children:Object(_.jsxs)(Z.c,{children:[Object(_.jsx)(Z.a,{exact:!0,path:"/",element:Object(_.jsx)(X,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/about",element:Object(_.jsx)(U,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/testimonies",element:Object(_.jsx)(X,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/appointments",element:Object(_.jsx)(H,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/news",element:Object(_.jsx)(se,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/news/:id",element:Object(_.jsx)(se,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/members",element:Object(_.jsx)(ee,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/members/:uname",element:Object(_.jsx)(re,{})}),Object(_.jsx)(Z.a,{exact:!0,path:"/home",element:Object(_.jsx)(X,{})}),Object(_.jsx)(Z.a,{path:"/*",element:Object(_.jsx)(X,{})})]})})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};s.a.render(Object(_.jsx)(b.a,{children:Object(_.jsx)(ie,{})}),document.getElementById("root")),le()},31:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.696b9acb.chunk.js.map