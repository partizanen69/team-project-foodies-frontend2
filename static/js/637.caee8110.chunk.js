"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[637],{8312:(e,s,a)=>{a.d(s,{A:()=>f});var t=a(2242),i=a(8139),n=a.n(i);const r={icon:"Icons_icon__7UlIp"};var c=a(7182),o=a(579);const l=e=>{let{id:s,className:a,width:t,height:i}=e;return(0,o.jsx)("svg",{width:t,height:i,id:s,className:n()(r.icons,a),children:(0,o.jsx)("use",{xlinkHref:"".concat(c.A,"#").concat(s)})})},d=[{id:"facebook",link:"https://www.facebook.com/goITclub/"},{id:"instagram",link:"https://www.instagram.com/goitclub/"},{id:"youtube",link:"https://www.youtube.com/c/GoIT"}],_="NetworkLinks_networkLinks__BfmH8",h="NetworkLinks_networkLink__TnYOO",m=()=>(0,o.jsx)("ul",{className:_,children:d.map((e=>{let{id:s,link:a}=e;return(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:a,className:h,target:"_blank",rel:"nofollow noopener noreferrer",children:(0,o.jsx)(l,{id:s,width:20,height:20})})},s)}))}),g="CopyRight_copyright__rdjXI",u=()=>(0,o.jsx)("span",{className:g,children:"@2024, Foodies. All rights reserved"});var p=a(5475);const x="Logo_logo__n9+zU",j=()=>(0,o.jsx)(p.k2,{to:"/",className:x,children:"foodies"}),w="Footer_top__XfDGF",v="Footer_bottom__J7kjW",f=()=>(0,o.jsxs)("footer",{children:[(0,o.jsx)(t.default,{children:(0,o.jsxs)("div",{className:w,children:[(0,o.jsx)(j,{}),(0,o.jsx)(m,{})]})}),(0,o.jsx)("div",{className:v,children:(0,o.jsx)(u,{})})]})},4637:(e,s,a)=>{a.r(s),a.d(s,{default:()=>me});var t=a(5043),i=a(3003),n=a(3216),r=a(2242),c=a(4506);const o={"visually-hidden":"NavigationButton_visually-hidden__Aoao+",recipes_navigation_button:"NavigationButton_recipes_navigation_button__gmcDC",recipes_navigation_button_icon:"NavigationButton_recipes_navigation_button_icon__FoFSj"};var l=a(6703),d=a(579);const _=e=>{let{title:s}=e;const a=(0,i.wA)();return(0,d.jsxs)("button",{type:"button",className:o.recipes_navigation_button,onClick:()=>{a((0,l.Qt)())},children:[(0,d.jsx)(c.A,{name:"icon-arrow-back",className:o.recipes_navigation_button_icon}),(0,d.jsx)("span",{className:o.recipes_navigation_button_text,children:s})]})};var h=a(7653),m=a(5823),g=a(9397),u=a(8958);const p="RecipeList_recipes_list__5uN95",x="RecipeList_recipe_item__va2Kn",j=e=>{let{recipesList:s,isLoading:a,errorMsg:t}=e;return(0,d.jsx)(d.Fragment,{children:a?(0,d.jsx)(u.default,{}):t?(0,d.jsx)("div",{children:t}):s&&s.length>0?(0,d.jsx)("ul",{className:p,children:s.map((e=>(0,d.jsx)("li",{className:x,children:(0,d.jsx)(g.j,{recipe:e})},e._id)))}):(0,d.jsx)("div",{children:"No recipes were found"})})},w="RecipePagination_pagination_elements__coAmO",v="RecipePagination_pagination_element__9BYnI",f="RecipePagination_pagination_element_active__1lTqQ",C="RecipePagination_pagination_dots__fV6S2",N=e=>{let{total:s}=e;const a=(0,i.wA)(),t=(0,i.d4)((e=>e.filters)),n=parseInt(s,10),r=[...Array(n).keys()].map((e=>e+1));const c=[];return n<=3?c.push(...r):t.page<=4?c.push(...r.slice(0,5),"...",n):n-t.page<=3?c.push(1,"...",...r.slice(n-5)):c.push(1,"...",t.page-1,t.page,t.page+1,"...",n),(0,d.jsx)("ul",{className:w,children:c.map(((e,s)=>"..."===e?(0,d.jsx)("li",{className:C,children:e},"dots-".concat(s)):(0,d.jsx)("li",{className:"".concat(v," ").concat(e===t.page?f:""),onClick:()=>{return s=e,void(t.page!==s&&a((0,l.cs)(s)));var s},children:e},e)))})},k="select_selectWrapper__JwQck",b="select_selectButton__w8Z6G",y="select_selectValue__H3pN8",A="select_arrow__ffapH",L="select_selectDropdown__eAgIZ",E="select_active__w7yKB";var R=a(7182);const z=e=>{let{options:s=[],value:a,onChange:i}=e;const[n,r]=(0,t.useState)(!1),[c,o]=(0,t.useState)(a),l=(0,t.useRef)(null),_=(0,t.useRef)(null),h=e=>{l.current&&!l.current.contains(e.target)&&_.current&&!_.current.contains(e.target)&&r(!1)};return(0,t.useEffect)((()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)})),[]),(0,d.jsxs)("div",{className:"".concat(k,"  ").concat(n?E:""),children:[(0,d.jsxs)("button",{className:b,role:"combobox","aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":n,"aria-controls":L,onClick:()=>{r(!n)},ref:_,tabIndex:0,children:[(0,d.jsx)("span",{className:y,children:c}),(0,d.jsx)("span",{children:(0,d.jsx)("svg",{className:A,children:(0,d.jsx)("use",{xlinkHref:"".concat(R.A,"#","icon-arrow-down")})})})]}),n&&(0,d.jsx)("ul",{className:L,role:"listbox",id:L,ref:l,children:s.map((e=>(0,d.jsxs)("li",{role:"option",onClick:()=>(e=>{e.name===c?(o(a),i({})):(o(e.name),i(e)),r(!1)})(e),children:[(0,d.jsx)("input",{type:"radio",id:e.name,name:a,value:e.name,checked:c===e.name,readOnly:!0}),(0,d.jsx)("label",{htmlFor:e.name,children:e.name})]},e._id)))})]})},S="RecipeFilters_recipeFilters__PafH2",F=()=>{const e=(0,i.wA)(),s=(0,i.d4)((e=>e.ingredients)),a=(0,i.d4)((e=>e.areas)),t=(0,i.d4)((e=>e.filters)),n=s=>{let{_id:a}=s;a===t.ingredients?e((0,l.sz)()):e((0,l.Pg)(a))},r=s=>{let{_id:a}=s;a===t.area?e((0,l.h6)()):e((0,l.iq)(a))};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:S,children:["ingredients","area"].map((e=>(e=>{let t,i,c;switch(e){case"ingredients":t=s,i=n,c="ingredients";break;case"area":t=a,i=r,c="area";break;default:return null}return(0,d.jsx)("li",{children:(0,d.jsx)(z,{options:t,onChange:i,value:e,className:c})},e)})(e)))})})};var I=a(7160),W=a(6213);var D=a(1133),H=a(9394),P=a(2656);const M="Recipes_content_wrapper__dUuWn",q="Recipes_recipes_wrapper__+D2g1",B="Recipes_recipes_container__XAn2y",O="Recipes_recipes_header_container__Fb78n",G=()=>{const e=(0,i.wA)(),s=(0,i.d4)((e=>e.filters)),[a,n]=(0,t.useState)(null),[c,o]=(0,t.useState)(!0),[g,u]=(0,t.useState)(null),[p,x]=(0,t.useState)(window.innerWidth),[w,v]=(0,t.useState)(p>=1440?12:10),[f,C]=(0,t.useState)(window.innerWidth);return(0,t.useEffect)((()=>{(async()=>{try{o(!0);const e=await(0,I.qt)({page:s.page,limit:w,ingredients:s.ingredients,area:s.area});o(!1),n(e.recipes),v(p>=1440?12:10),C(e.total)}catch(e){o(!1),u(e.message)}})()}),[s.ingredients,s.area,p,s.page,w]),(0,t.useEffect)((()=>{(async()=>{try{o(!0);const s=await(async()=>(await W.A.get("ingredients")).data)();o(!1),e((0,H.D)(s))}catch(s){o(!1),u(s.message)}})()}),[e]),(0,t.useEffect)((()=>{(async()=>{try{o(!0);const s=await(0,D.P)();o(!1),e((0,P.V)(s))}catch(s){o(!1),u(s.message)}})()}),[e]),(0,t.useEffect)((()=>{e((0,l.hp)())}),[s.area,s.ingredients,e]),(0,t.useEffect)((()=>{const e=()=>{x(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,t.useEffect)((()=>{const e=()=>{x(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,d.jsxs)(r.default,{className:B,children:[(0,d.jsxs)("div",{className:O,children:[(0,d.jsx)(_,{title:"back"}),(0,d.jsx)(h.A,{children:"desserts"}),(0,d.jsx)(m.A,{children:"Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."})]}),(0,d.jsxs)("div",{className:M,children:[(0,d.jsx)(F,{}),(0,d.jsxs)("div",{className:q,children:[(0,d.jsx)(j,{recipesList:a,isLoading:c,errorMsg:g}),(0,d.jsx)(N,{total:Math.ceil(f/w)})]})]})]})};var U=a(2279),T=a(4475);const Q="CategoryCard_card__IOFmd",J="CategoryCard_image__rDizQ",K="CategoryCard_content__+wDWS",V="CategoryCard_titleHolder__qaAuv",X="CategoryCard_title__D62ZM",Z="CategoryCard_smallCard__2iljz",Y="CategoryCard_largeCard__waJ9e",$=e=>{let{imgUrl:s,name:a,onClick:t,size:i}=e;const n="large"===i?Y:Z;return(0,d.jsxs)("div",{className:"".concat(Q," ").concat(n),children:[(0,d.jsx)("img",{src:s,alt:a,className:J}),(0,d.jsxs)("div",{className:K,children:[(0,d.jsx)("div",{className:V,children:(0,d.jsx)("p",{className:X,children:a})}),(0,d.jsx)(T.A,{size:44,iconName:"icon-arrow-up-right",className:"buttonLightStroke",iconClassName:"arrowLight",onClick:t})]})]})},ee="CategoryList_list__zoEli",se="CategoryList_allCategories__qPqOc",ae="https://team-project-foodies-backend.onrender.com/api".endsWith("api")?"https://team-project-foodies-backend.onrender.com/api".slice(0,-3):"http://localhost:3001/",te=e=>{let{categories:s,onCategoryClick:a,onAllCategoriesClick:i,allCategoriesLoaded:n}=e;const[r,c]=(0,t.useState)(window.innerWidth);(0,t.useEffect)((()=>{const e=()=>c(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const o=e=>{if(r<768)return"small";if(r>=768&&r<1440){if(e<3)return 2===e?"large":"small";return 4===(e-3)%5?"large":"small"}{const s=Math.floor(e/3),a=e%3;return s%3===0?2===a?"large":"small":s%3===1?0===a?"large":"small":1===a?"large":"small"}};return(0,d.jsxs)("ul",{className:ee,children:[s.map(((e,s)=>(0,d.jsx)("li",{children:(0,d.jsx)($,{imgUrl:ae+e.imgUrl,name:e.name,size:o(s),onClick:()=>a(e.name)})},e._id))),!n&&(0,d.jsx)("li",{className:se,children:(0,d.jsx)("button",{onClick:i,children:"ALL CATEGORIES"})})]})};var ie=a(3401);const ne="Categories_container__laatR",re="Categories_categories__k2b5z",ce="Categories_categoriesHead__6EodN",oe="Categories_subtitle__ollav",le=()=>{const e=(0,i.wA)(),[s,a]=(0,t.useState)([]),[n,r]=(0,t.useState)(!1),[c,o]=(0,t.useState)(!0);(0,t.useEffect)((()=>{(0,U.b)().then((e=>{a(e),o(!1)})).catch((e=>{ie.oR.error("Failed to fetch catagories. ".concat(e.message))}))}),[]);return(0,d.jsx)("section",{className:ne,children:(0,d.jsxs)("div",{className:re,children:[(0,d.jsxs)("div",{className:ce,children:[(0,d.jsx)(h.A,{children:"Categories"}),(0,d.jsx)("div",{className:oe,children:(0,d.jsx)(m.A,{children:"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})})]}),!c&&(0,d.jsx)(te,{categories:s,onCategoryClick:s=>{e((0,l.Dz)(s))},onAllCategoriesClick:async()=>{try{const e=await(0,U.b)({all:!0});a(e),r(!0)}catch(e){ie.oR.error("Failed to fetch all catagories. ".concat(e.message))}},allCategoriesLoaded:n})]})})};var de=a(8312);const _e="MainPage_main_container__GxHar",he=(0,t.lazy)((()=>a.e(665).then(a.bind(a,1665)))),me=()=>{const{openModal:e}=(0,n.KC)(),{category:s}=(0,i.d4)((e=>e.filters));return(0,d.jsxs)(r.default,{className:_e,children:[(0,d.jsx)(he,{openModal:e}),s?(0,d.jsx)(G,{}):(0,d.jsx)(le,{}),(0,d.jsx)(de.A,{})]})}}}]);
//# sourceMappingURL=637.caee8110.chunk.js.map