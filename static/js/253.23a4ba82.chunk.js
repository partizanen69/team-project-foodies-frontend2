"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{1133:(e,t,a)=>{a.d(t,{P:()=>i});var s=a(6213),n=a(5656);const i=async()=>{try{return(await s.A.get("/areas")).data}catch(e){(0,n.r4)(e)}}},2279:(e,t,a)=>{a.d(t,{b:()=>n});var s=a(6213);const n=async function(){let{page:e=1,limit:t=11,all:a=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=a?{}:{page:e,limit:t};return(await s.A.get("/categories",{params:n})).data}},7653:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);const s="MainTitle_title__k2iVV";var n=a(579);const i=e=>{let{children:t}=e;return(0,n.jsx)("h2",{className:s,children:t})}},5823:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);const s="Subtitle_subtitle__Y5mSh";var n=a(579);const i=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:s,children:t})}},6341:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Se});var s=a(5043),n=a(3003),i=a(3216),r=a(2242),c=a(4506);const l={"visually-hidden":"NavigationButton_visually-hidden__Aoao+",recipes_navigation_button:"NavigationButton_recipes_navigation_button__gmcDC",recipes_navigation_button_icon:"NavigationButton_recipes_navigation_button_icon__FoFSj"};var o=a(6703),d=a(579);const _=e=>{let{title:t}=e;const a=(0,n.wA)();return(0,d.jsxs)("button",{type:"button",className:l.recipes_navigation_button,onClick:()=>{a((0,o.Qt)()),a((0,o.sz)()),a((0,o.h6)())},children:[(0,d.jsx)(c.A,{name:"icon-arrow-back",className:l.recipes_navigation_button_icon}),(0,d.jsx)("span",{className:l.recipes_navigation_button_text,children:t})]})};var h=a(7653),m=a(5823),u=a(9397),g=a(8958);const p="RecipeList_recipes_list__5uN95",x="RecipeList_recipe_item__va2Kn",j=e=>{let{recipesList:t,isLoading:a,errorMsg:n,scrollToRef:i}=e;return(0,s.useEffect)((()=>{i&&i.current&&i.current.scrollIntoView({behavior:"instant"})}),[i]),(0,d.jsx)(d.Fragment,{children:a?(0,d.jsx)(g.default,{}):n?(0,d.jsx)("div",{children:n}):t&&t.length>0?(0,d.jsx)("ul",{className:p,children:t.map((e=>(0,d.jsx)("li",{className:x,children:(0,d.jsx)(u.j,{recipe:e,scrollToTop:!1})},e._id)))}):(0,d.jsx)("div",{children:"No recipes were found"})})},w="RecipePagination_pagination_elements__coAmO",v="RecipePagination_pagination_element__9BYnI",f="RecipePagination_pagination_element_active__1lTqQ",y="RecipePagination_pagination_dots__fV6S2",N=e=>{let{total:t}=e;const a=(0,n.wA)(),i=(0,n.d4)((e=>e.filters)),[r,c]=(0,s.useState)([]),l=parseInt(t,10);return(0,s.useEffect)((()=>{const e=[...Array(l).keys()].map((e=>e+1));const t=[];if(l<=3)t.push(...e);else{t.push(1),i.page>3&&t.push("...");const e=Math.max(2,i.page-1),a=Math.min(l-1,i.page+1);for(let s=e;s<=a;s++)t.push(s);i.page<l-2&&t.push("..."),t.push(l)}c(t)}),[i.page,l]),(0,d.jsx)(d.Fragment,{children:r.length>1?(0,d.jsx)("ul",{className:w,children:r.map(((e,t)=>"..."===e?(0,d.jsx)("li",{className:y,children:e},"dots-".concat(t)):(0,d.jsx)("li",{className:"".concat(v," ").concat(e===i.page?f:""),onClick:()=>{return t=e,void(i.page!==t&&a((0,o.cs)(t)));var t},children:e},e)))}):null})},C="select_selectWrapper__JwQck",b="select_selectButton__w8Z6G",k="select_selectValue__H3pN8",A="select_arrow__ffapH",E="select_selectDropdown__eAgIZ",S="select_active__w7yKB";var L=a(7182);const R=e=>{let{options:t=[],value:a,onChange:n}=e;const[i,r]=(0,s.useState)(!1),[c,l]=(0,s.useState)(a),o=(0,s.useRef)(null),_=(0,s.useRef)(null),h=e=>{o.current&&!o.current.contains(e.target)&&_.current&&!_.current.contains(e.target)&&r(!1)};return(0,s.useEffect)((()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)})),[]),(0,d.jsxs)("div",{className:"".concat(C,"  ").concat(i?S:""),children:[(0,d.jsxs)("button",{className:b,role:"combobox","aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":i,"aria-controls":E,onClick:()=>{r(!i)},ref:_,tabIndex:0,children:[(0,d.jsx)("span",{className:k,children:c}),(0,d.jsx)("span",{children:(0,d.jsx)("svg",{className:A,children:(0,d.jsx)("use",{xlinkHref:"".concat(L.A,"#","icon-arrow-down")})})})]}),i&&(0,d.jsx)("ul",{className:E,role:"listbox",id:E,ref:o,children:t.map((e=>(0,d.jsxs)("li",{role:"option",onClick:()=>(e=>{e.name===c?(l(a),n({})):(l(e.name),n(e)),r(!1)})(e),children:[(0,d.jsx)("input",{type:"radio",id:e.name,name:a,value:e.name,checked:c===e.name,readOnly:!0}),(0,d.jsx)("label",{htmlFor:e.name,children:e.name})]},e._id)))})]})},T="RecipeFilters_recipeFilters__PafH2",z=()=>{const e=(0,n.wA)(),t=(0,n.d4)((e=>e.ingredients)),a=(0,n.d4)((e=>e.areas)),s=(0,n.d4)((e=>e.filters)),i=t=>{let{_id:a}=t;a===s.ingredients?e((0,o.sz)()):e((0,o.Pg)(a))},r=t=>{let{_id:a}=t;a===s.area?e((0,o.h6)()):e((0,o.iq)(a))};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:T,children:["ingredients","area"].map((e=>(e=>{let s,n,c;switch(e){case"ingredients":s=t,n=i,c="ingredients";break;case"area":s=a,n=r,c="area";break;default:return null}return(0,d.jsx)("li",{children:(0,d.jsx)(R,{options:s,onChange:n,value:e,className:c})},e)})(e)))})})};var F=a(7160),I=a(6213);var M=a(1133),P=a(9394),W=a(2656);const q="Recipes_content_wrapper__dUuWn",D="Recipes_recipes_wrapper__+D2g1",H="Recipes_recipes_container__XAn2y",O="Recipes_recipes_header_container__Fb78n",B=()=>{const e=(0,n.wA)(),t=(0,n.d4)((e=>e.filters)),a=(0,n.d4)((e=>e.category.category)),[i,c]=(0,s.useState)(null),[l,u]=(0,s.useState)(!0),[g,p]=(0,s.useState)(null),[x,w]=(0,s.useState)(window.innerWidth),[v,f]=(0,s.useState)(x>=1440?12:10),[y,C]=(0,s.useState)(window.innerWidth),b=(0,s.useRef)(null);return(0,s.useEffect)((()=>{(async()=>{try{u(!0);const e=await(0,F.qt)({page:t.page,limit:v,category:t.category,ingredients:t.ingredients,area:t.area});u(!1),c(e.recipes),f(x>=1440?12:10),C(e.total)}catch(e){u(!1),p(e.message)}})()}),[t.ingredients,t.area,x,t.page,v,t.category]),(0,s.useEffect)((()=>{(async()=>{try{u(!0);const t=await(async()=>(await I.A.get("ingredients")).data)();u(!1),e((0,P.D)(t))}catch(t){u(!1),p(t.message)}})()}),[e]),(0,s.useEffect)((()=>{(async()=>{try{u(!0);const t=await(0,M.P)();u(!1),e((0,W.V)(t))}catch(t){u(!1),p(t.message)}})()}),[e]),(0,s.useEffect)((()=>{e((0,o.hp)())}),[t.area,t.ingredients,e]),(0,s.useEffect)((()=>{const e=()=>{w(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useEffect)((()=>{const e=()=>{w(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,d.jsxs)(r.default,{className:H,children:[(0,d.jsxs)("div",{className:O,ref:b,children:[(0,d.jsx)(_,{title:"back"}),(0,d.jsx)(h.A,{children:a.name}),(0,d.jsx)(m.A,{children:"Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."})]}),(0,d.jsxs)("div",{className:q,children:[(0,d.jsx)(z,{}),(0,d.jsxs)("div",{className:D,children:[(0,d.jsx)(j,{recipesList:i,isLoading:l,errorMsg:g,scrollToRef:b}),(0,d.jsx)(N,{total:Math.ceil(y/v)})]})]})]})};var V=a(2279),K=a(4475);const U="CategoryCard_card__IOFmd",G="CategoryCard_image__rDizQ",Q="CategoryCard_content__+wDWS",Z="CategoryCard_titleHolder__qaAuv",J="CategoryCard_title__D62ZM",X="CategoryCard_smallCard__2iljz",Y="CategoryCard_largeCard__waJ9e",$=e=>{let{imgUrl:t,name:a,onClick:s,size:n}=e;const i="large"===n?Y:X,r="".concat((t||"").replace(/.jpg$/,""),"@2x.jpg");return(0,d.jsxs)("div",{className:"".concat(U," ").concat(i),children:[(0,d.jsx)("img",{srcSet:"".concat(r," 2x"),src:t,alt:a,className:G}),(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)("div",{className:Z,children:(0,d.jsx)("p",{className:J,children:a})}),(0,d.jsx)(K.A,{size:44,iconName:"icon-arrow-up-right",className:"buttonLightStroke",iconClassName:"arrowLight",onClick:s})]})]})},ee="CategoryList_list__zoEli",te="CategoryList_allCategories__qPqOc",ae="https://team-project-foodies-backend.onrender.com/api".endsWith("api")?"https://team-project-foodies-backend.onrender.com/api".slice(0,-3):"http://localhost:3001/",se=e=>{let{categories:t,onCategoryClick:a,onAllCategoriesClick:n,allCategoriesLoaded:i}=e;const[r,c]=(0,s.useState)(window.innerWidth);(0,s.useEffect)((()=>{const e=()=>c(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const l=e=>{if(r<768)return"small";if(r>=768&&r<1440){if(e<3)return 2===e?"large":"small";return 4===(e-3)%5?"large":"small"}{const t=Math.floor(e/3),a=e%3;return t%3===0?2===a?"large":"small":t%3===1?0===a?"large":"small":1===a?"large":"small"}};return(0,d.jsxs)("ul",{className:ee,children:[t.map(((e,t)=>(0,d.jsx)("li",{children:(0,d.jsx)($,{imgUrl:ae+e.imgUrl,name:e.name,size:l(t),onClick:()=>a(e)})},e._id))),!i&&(0,d.jsx)("li",{className:te,children:(0,d.jsx)("button",{onClick:n,children:"ALL CATEGORIES"})})]})};var ne=a(3401);const ie="Categories_container__laatR",re="Categories_categories__k2b5z",ce="Categories_categoriesHead__6EodN",le="Categories_subtitle__ollav";var oe=a(6982);const de=()=>{const e=(0,n.wA)(),[t,a]=(0,s.useState)([]),[i,r]=(0,s.useState)(!1),[c,l]=(0,s.useState)(!0);(0,s.useEffect)((()=>{(0,V.b)().then((e=>{a(e),l(!1)})).catch((e=>{ne.oR.error("Failed to fetch catagories. ".concat(e.message))}))}),[]);return(0,d.jsx)("section",{className:ie,children:(0,d.jsxs)("div",{className:re,children:[(0,d.jsxs)("div",{className:ce,children:[(0,d.jsx)(h.A,{children:"Categories"}),(0,d.jsx)("div",{className:le,children:(0,d.jsx)(m.A,{children:"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})})]}),!c&&(0,d.jsx)(se,{categories:t,onCategoryClick:t=>{e((0,o.Dz)(t.name)),e((0,oe.Fb)(t))},onAllCategoriesClick:async()=>{try{const e=await(0,V.b)({all:!0});a(e),r(!0)}catch(e){ne.oR.error("Failed to fetch all catagories. ".concat(e.message))}},allCategoriesLoaded:i})]})})};var _e=a(8654),he=a(5656);const me="Testimonials_testimonial_container__wK7pS",ue="Testimonials_testimonial_hightlight__gXIkv",ge="Testimonials_testimonial_title__qcFHw",pe="Testimonials_swiper__HLe-K",xe="Testimonials_swiperSlide__pgI-L",je="Testimonials_icon__MRglO",we="Testimonials_description__gi-FU",ve="Testimonials_owner__NgTn3";var fe=a(2896),ye=a(50),Ne=a(4975),Ce=(a(4014),a(5084),a(8179));const be=e=>{let{author:t}=e;const[a,n]=(0,s.useState)("");return(0,s.useEffect)((()=>{(async()=>{try{const{name:e}=await(async e=>{let{id:t}=e;try{return{name:(await(0,Ce.ON)({id:t})).name}}catch(a){throw console.error("Error fetching author details:",a),a}})({id:t});n(e)}catch(e){console.error("Error fetching author name:",e)}})()}),[t]),(0,d.jsx)("div",{children:a})},ke=()=>{const[e,t]=(0,s.useState)([]),[a,n]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{return(await I.A.get("/testimonials")).data}catch(e){(0,he.r4)(e)}})().then((e=>{t(e),n(!1)})).catch((e=>console.log(e)))}),[]),(0,d.jsx)(r.default,{children:(0,d.jsx)("div",{className:me,children:e.length>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:ue,children:"What our customer say"}),(0,d.jsx)("h2",{className:ge,children:"TESTIMONIALS"}),(0,d.jsx)(Ne.RC,{autoplay:{delay:6e3,disableOnInteraction:!0},spaceBetween:30,slidesPerView:1,pagination:{clickable:!0},modules:[ye.dK,ye.Ij],className:pe,children:e.map((e=>(0,d.jsxs)(Ne.qr,{className:xe,children:[(0,d.jsx)(fe.I,{id:"icon-quote",className:je,width:24,height:24}),(0,d.jsx)("p",{className:we,children:e.testimonial}),(0,d.jsx)("h4",{className:ve,children:(0,d.jsx)(be,{author:e.owner})})]},"".concat(e._id,"-").concat(e.index))))})]})})})},Ae="MainPage_main_container__GxHar",Ee=(0,s.lazy)((()=>a.e(665).then(a.bind(a,1665)))),Se=()=>{const{openModal:e}=(0,i.KC)(),{category:t}=(0,n.d4)((e=>e.filters));return(0,d.jsxs)(r.default,{className:Ae,children:[(0,d.jsx)(Ee,{openModal:e}),t?(0,d.jsx)(B,{}):(0,d.jsx)(de,{}),(0,d.jsx)(ke,{}),(0,d.jsx)(_e.A,{})]})}}}]);
//# sourceMappingURL=253.23a4ba82.chunk.js.map