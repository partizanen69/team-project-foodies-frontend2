"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{1133:(e,t,a)=>{a.d(t,{P:()=>n});var s=a(6213),i=a(5656);const n=async()=>{try{return(await s.A.get("/areas")).data}catch(e){(0,i.r4)(e)}}},2279:(e,t,a)=>{a.d(t,{b:()=>i});var s=a(6213);const i=async function(){let{page:e=1,limit:t=11,all:a=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=a?{}:{page:e,limit:t};return(await s.A.get("/categories",{params:i})).data}},7653:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);const s="MainTitle_title__k2iVV";var i=a(579);const n=e=>{let{children:t}=e;return(0,i.jsx)("h2",{className:s,children:t})}},5823:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);const s="Subtitle_subtitle__Y5mSh";var i=a(579);const n=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:s,children:t})}},5520:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ve});var s=a(5043),i=a(3003),n=a(3216),r=a(2242),l=a(4506);const c={"visually-hidden":"NavigationButton_visually-hidden__Aoao+",recipes_navigation_button:"NavigationButton_recipes_navigation_button__gmcDC",recipes_navigation_button_icon:"NavigationButton_recipes_navigation_button_icon__FoFSj"};var o=a(6703),d=a(579);const _=e=>{let{title:t}=e;const a=(0,i.wA)();return(0,d.jsxs)("button",{type:"button",className:c.recipes_navigation_button,onClick:()=>{a((0,o.Qt)()),a((0,o.sz)()),a((0,o.h6)())},children:[(0,d.jsx)(l.A,{name:"icon-arrow-back",className:c.recipes_navigation_button_icon}),(0,d.jsx)("span",{className:c.recipes_navigation_button_text,children:t})]})};var m=a(7653),h=a(5823),u=a(9397),g=a(8958);const p="RecipeList_recipes_list__5uN95",x="RecipeList_recipe_item__va2Kn",w=e=>{let{recipesList:t,isLoading:a,errorMsg:i,scrollToRef:n}=e;return(0,s.useEffect)((()=>{n&&n.current&&n.current.scrollIntoView({behavior:"instant"})}),[n]),(0,d.jsx)(d.Fragment,{children:a?(0,d.jsx)(g.default,{}):i?(0,d.jsx)("div",{children:i}):t&&t.length>0?(0,d.jsx)("ul",{className:p,children:t.map((e=>(0,d.jsx)("li",{className:x,children:(0,d.jsx)(u.j,{recipe:e,scrollToTop:!1})},e._id)))}):(0,d.jsx)("div",{children:"No recipes were found"})})},j="RecipePagination_pagination_elements__coAmO",v="RecipePagination_pagination_element__9BYnI",f="RecipePagination_pagination_element_active__1lTqQ",y="RecipePagination_pagination_dots__fV6S2",C=e=>{let{total:t}=e;const a=(0,i.wA)(),n=(0,i.d4)((e=>e.filters)),[r,l]=(0,s.useState)([]),c=parseInt(t,10);return(0,s.useEffect)((()=>{const e=[...Array(c).keys()].map((e=>e+1));const t=[];if(c<=3)t.push(...e);else{t.push(1),n.page>3&&t.push("...");const e=Math.max(2,n.page-1),a=Math.min(c-1,n.page+1);for(let s=e;s<=a;s++)t.push(s);n.page<c-2&&t.push("..."),t.push(c)}l(t)}),[n.page,c]),(0,d.jsx)(d.Fragment,{children:r.length>1?(0,d.jsx)("ul",{className:j,children:r.map(((e,t)=>"..."===e?(0,d.jsx)("li",{className:y,children:e},"dots-".concat(t)):(0,d.jsx)("li",{className:"".concat(v," ").concat(e===n.page?f:""),onClick:()=>{return t=e,void(n.page!==t&&a((0,o.cs)(t)));var t},children:e},e)))}):null})},N="select_selectWrapper__JwQck",b="select_selectButton__w8Z6G",k="select_selectValue__H3pN8",A="select_arrow__ffapH",L="select_selectDropdown__eAgIZ",S="select_active__w7yKB";var E=a(7182);const T=e=>{let{options:t=[],value:a,onChange:i}=e;const[n,r]=(0,s.useState)(!1),[l,c]=(0,s.useState)(a),o=(0,s.useRef)(null),_=(0,s.useRef)(null),m=e=>{o.current&&!o.current.contains(e.target)&&_.current&&!_.current.contains(e.target)&&r(!1)};return(0,s.useEffect)((()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)})),[]),(0,d.jsxs)("div",{className:"".concat(N,"  ").concat(n?S:""),children:[(0,d.jsxs)("button",{className:b,role:"combobox","aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":n,"aria-controls":L,onClick:()=>{r(!n)},ref:_,tabIndex:0,children:[(0,d.jsx)("span",{className:k,children:l}),(0,d.jsx)("span",{children:(0,d.jsx)("svg",{className:A,children:(0,d.jsx)("use",{xlinkHref:"".concat(E.A,"#","icon-arrow-down")})})})]}),n&&(0,d.jsx)("ul",{className:L,role:"listbox",id:L,ref:o,children:t.map((e=>(0,d.jsxs)("li",{role:"option",onClick:()=>(e=>{e.name===l?(c(a),i({})):(c(e.name),i(e)),r(!1)})(e),children:[(0,d.jsx)("input",{type:"radio",id:e.name,name:a,value:e.name,checked:l===e.name,readOnly:!0}),(0,d.jsx)("label",{htmlFor:e.name,children:e.name})]},e._id)))})]})},R="RecipeFilters_recipeFilters__PafH2",z=()=>{const e=(0,i.wA)(),t=(0,i.d4)((e=>e.ingredients)),a=(0,i.d4)((e=>e.areas)),s=(0,i.d4)((e=>e.filters)),n=t=>{let{_id:a}=t;a===s.ingredients?e((0,o.sz)()):e((0,o.Pg)(a))},r=t=>{let{_id:a}=t;a===s.area?e((0,o.h6)()):e((0,o.iq)(a))};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:R,children:["ingredients","area"].map((e=>(e=>{let s,i,l;switch(e){case"ingredients":s=t,i=n,l="ingredients";break;case"area":s=a,i=r,l="area";break;default:return null}return(0,d.jsx)("li",{children:(0,d.jsx)(T,{options:s,onChange:i,value:e,className:l})},e)})(e)))})})};var F=a(7160),I=a(6213);var M=a(1133),B=a(9394),P=a(2656);const W="Recipes_content_wrapper__dUuWn",q="Recipes_recipes_wrapper__+D2g1",D="Recipes_recipes_container__XAn2y",H="Recipes_recipes_header_container__Fb78n",O=()=>{const e=(0,i.wA)(),t=(0,i.d4)((e=>e.filters)),a=(0,i.d4)((e=>e.category.category)),[n,l]=(0,s.useState)(null),[c,u]=(0,s.useState)(!0),[g,p]=(0,s.useState)(null),[x,j]=(0,s.useState)(window.innerWidth),[v,f]=(0,s.useState)(x>=1440?12:10),[y,N]=(0,s.useState)(window.innerWidth),b=(0,s.useRef)(null);return(0,s.useEffect)((()=>{(async()=>{try{u(!0);const e=await(0,F.qt)({page:t.page,limit:v,category:t.category,ingredients:t.ingredients,area:t.area});u(!1),l(e.recipes),f(x>=1440?12:10),N(e.total)}catch(e){u(!1),p(e.message)}})()}),[t.ingredients,t.area,x,t.page,v,t.category]),(0,s.useEffect)((()=>{(async()=>{try{u(!0);const t=await(async()=>(await I.A.get("ingredients")).data)();u(!1),e((0,B.D)(t))}catch(t){u(!1),p(t.message)}})()}),[e]),(0,s.useEffect)((()=>{(async()=>{try{u(!0);const t=await(0,M.P)();u(!1),e((0,P.V)(t))}catch(t){u(!1),p(t.message)}})()}),[e]),(0,s.useEffect)((()=>{e((0,o.hp)())}),[t.area,t.ingredients,e]),(0,s.useEffect)((()=>{const e=()=>{j(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useEffect)((()=>{const e=()=>{j(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,d.jsxs)(r.default,{className:D,children:[(0,d.jsxs)("div",{className:H,ref:b,children:[(0,d.jsx)(_,{title:"back"}),(0,d.jsx)(m.A,{children:a.name}),(0,d.jsx)(h.A,{children:"Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."})]}),(0,d.jsxs)("div",{className:W,children:[(0,d.jsx)(z,{}),(0,d.jsxs)("div",{className:q,children:[(0,d.jsx)(w,{recipesList:n,isLoading:c,errorMsg:g,scrollToRef:b}),(0,d.jsx)(C,{total:Math.ceil(y/v)})]})]})]})};var K=a(2279),V=a(4475);const Q="CategoryCard_card__IOFmd",U="CategoryCard_image__rDizQ",G="CategoryCard_content__+wDWS",Z="CategoryCard_titleHolder__qaAuv",J="CategoryCard_title__D62ZM",X="CategoryCard_smallCard__2iljz",Y="CategoryCard_largeCard__waJ9e",$=e=>{let{imgUrl:t,name:a,onClick:s,size:i}=e;const n="large"===i?Y:X;return(0,d.jsxs)("div",{className:"".concat(Q," ").concat(n),children:[(0,d.jsx)("img",{src:t,alt:a,className:U}),(0,d.jsxs)("div",{className:G,children:[(0,d.jsx)("div",{className:Z,children:(0,d.jsx)("p",{className:J,children:a})}),(0,d.jsx)(V.A,{size:44,iconName:"icon-arrow-up-right",className:"buttonLightStroke",iconClassName:"arrowLight",onClick:s})]})]})},ee="CategoryList_list__zoEli",te="CategoryList_allCategories__qPqOc",ae="https://team-project-foodies-backend.onrender.com/api".endsWith("api")?"https://team-project-foodies-backend.onrender.com/api".slice(0,-3):"http://localhost:3001/",se=e=>{let{categories:t,onCategoryClick:a,onAllCategoriesClick:i,allCategoriesLoaded:n}=e;const[r,l]=(0,s.useState)(window.innerWidth);(0,s.useEffect)((()=>{const e=()=>l(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const c=e=>{if(r<768)return"small";if(r>=768&&r<1440){if(e<3)return 2===e?"large":"small";return 4===(e-3)%5?"large":"small"}{const t=Math.floor(e/3),a=e%3;return t%3===0?2===a?"large":"small":t%3===1?0===a?"large":"small":1===a?"large":"small"}};return(0,d.jsxs)("ul",{className:ee,children:[t.map(((e,t)=>(0,d.jsx)("li",{children:(0,d.jsx)($,{imgUrl:ae+e.imgUrl,name:e.name,size:c(t),onClick:()=>a(e)})},e._id))),!n&&(0,d.jsx)("li",{className:te,children:(0,d.jsx)("button",{onClick:i,children:"ALL CATEGORIES"})})]})};var ie=a(3401);const ne="Categories_container__laatR",re="Categories_categories__k2b5z",le="Categories_categoriesHead__6EodN",ce="Categories_subtitle__ollav";var oe=a(6982);const de=()=>{const e=(0,i.wA)(),[t,a]=(0,s.useState)([]),[n,r]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!0);(0,s.useEffect)((()=>{(0,K.b)().then((e=>{a(e),c(!1)})).catch((e=>{ie.oR.error("Failed to fetch catagories. ".concat(e.message))}))}),[]);return(0,d.jsx)("section",{className:ne,children:(0,d.jsxs)("div",{className:re,children:[(0,d.jsxs)("div",{className:le,children:[(0,d.jsx)(m.A,{children:"Categories"}),(0,d.jsx)("div",{className:ce,children:(0,d.jsx)(h.A,{children:"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})})]}),!l&&(0,d.jsx)(se,{categories:t,onCategoryClick:t=>{e((0,o.Dz)(t.name)),e((0,oe.Fb)(t))},onAllCategoriesClick:async()=>{try{const e=await(0,K.b)({all:!0});a(e),r(!0)}catch(e){ie.oR.error("Failed to fetch all catagories. ".concat(e.message))}},allCategoriesLoaded:n})]})})};var _e=a(8654),me=a(5656);const he={"visually-hidden":"Testimonials_visually-hidden__10sN-",testimonial_container:"Testimonials_testimonial_container__wK7pS",testimonial_hightlight:"Testimonials_testimonial_hightlight__gXIkv",testimonial_title:"Testimonials_testimonial_title__qcFHw",loading:"Testimonials_loading__mBQtT",swiper:"Testimonials_swiper__HLe-K",swiperSlide:"Testimonials_swiperSlide__pgI-L",icon:"Testimonials_icon__MRglO",description:"Testimonials_description__gi-FU",owner:"Testimonials_owner__NgTn3",testimonial_highlight:"Testimonials_testimonial_highlight__FLk4L","swiper-pagination-bullet":"Testimonials_swiper-pagination-bullet__sL8Lu","swiper-pagination-bullet-active":"Testimonials_swiper-pagination-bullet-active__ai0Kw"};var ue=a(2896),ge=a(50),pe=a(4975);a(4014),a(5084);const xe=()=>{const[e,t]=(0,s.useState)([]),[a,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{return(await I.A.get("/testimonials")).data}catch(e){(0,me.r4)(e)}})().then((e=>{t(e),i(!1)})).catch()}),[]),(0,d.jsx)(r.default,{children:(0,d.jsx)("div",{className:he.testimonial_container,children:e.length>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:he.testimonial_hightlight,children:"What our customer say"}),(0,d.jsx)("h2",{className:he.testimonial_title,children:"TESTIMONIALS"}),(0,d.jsx)(pe.RC,{autoplay:{delay:6e3,disableOnInteraction:!0},spaceBetween:30,slidesPerView:1,pagination:{el:".".concat(he.paginationContainer),clickable:!0,dynamicBullets:!0,bulletClass:he.paginationBullet,bulletActiveClass:he.paginationBulletActive},modules:[ge.dK,ge.Ij],className:he.swiper,children:e.map((e=>(0,d.jsxs)(pe.qr,{className:he.swiperSlide,children:[(0,d.jsx)(ue.I,{id:"icon-quote",className:he.icon,width:24,height:24}),(0,d.jsx)("p",{className:he.description,children:e.testimonial}),(0,d.jsx)("h4",{className:he.owner,children:e.owner})]},e._id)))})]})})})},we="MainPage_main_container__GxHar",je=(0,s.lazy)((()=>a.e(665).then(a.bind(a,1665)))),ve=()=>{const{openModal:e}=(0,n.KC)(),{category:t}=(0,i.d4)((e=>e.filters));return(0,d.jsxs)(r.default,{className:we,children:[(0,d.jsx)(je,{openModal:e}),t?(0,d.jsx)(O,{}):(0,d.jsx)(de,{}),(0,d.jsx)(xe,{}),(0,d.jsx)(_e.A,{})]})}}}]);
//# sourceMappingURL=446.bbe4549a.chunk.js.map