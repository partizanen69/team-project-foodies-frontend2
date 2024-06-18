/*! For license information please see 595.49e2ba04.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[595],{7160:(e,t,i)=>{"use strict";i.d(t,{HK:()=>u,Kk:()=>p,OV:()=>c,PS:()=>d,c1:()=>l,cX:()=>_,dU:()=>n,gv:()=>o,qt:()=>s});var r=i(6213),a=i(5656);const s=async function(){let{page:e,limit:t,category:i,area:a,ingredients:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(await r.A.get("recipes",{params:{...e?{page:e}:null,...t?{limit:t}:null,...i?{category:i}:null,...a?{area:a}:null,...s?{ingredients:s}:null}})).data},n=async e=>{let{id:t}=e;try{return(await r.A.get("/recipes/".concat(t))).data}catch(i){(0,a.r4)(i)}},c=async e=>{let{page:t=1,limit:i=10,recipeIds:s}=e;try{return(await r.A.get("/recipes/favorites",{params:{page:t,limit:i,...s&&s.length?{recipeIds:JSON.stringify(s)}:null}})).data}catch(n){(0,a.r4)(n)}},o=async e=>{let{recipeId:t}=e;try{return(await r.A.post("/recipes/".concat(t,"/favorites"))).data}catch(i){(0,a.r4)(i)}},l=async e=>{let{recipeId:t}=e;try{return(await r.A.delete("/recipes/".concat(t,"/favorites"))).data}catch(i){(0,a.r4)(i)}},d=async()=>{try{return(await r.A.get("/recipes/popular")).data}catch(e){(0,a.r4)(e)}},u=async e=>{let{owner:t,page:i=1,limit:s=10}=e;try{return(await r.A.get("/recipes/user-recipes",{params:{owner:t,page:i,limit:s}})).data}catch(n){(0,a.r4)(n)}},p=async e=>{try{return(await r.A.post("/recipes",e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(t){(0,a.r4)(t)}},_=async e=>{try{return(await r.A.delete("/recipes/".concat(e))).data}catch(t){(0,a.r4)(t)}}},4475:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});i(5043);const r={button:"RoundButton_button__gOFkP",icon:"RoundButton_icon__5EP-B",favorite:"RoundButton_favorite__WiVpE","delete-button":"RoundButton_delete-button__dtqMK","network-link-button":"RoundButton_network-link-button__BXgKs","delete-icon":"RoundButton_delete-icon__pf3vD","network-link-icon":"RoundButton_network-link-icon__6837r",arrowLight:"RoundButton_arrowLight__Rf8xn",buttonLightStroke:"RoundButton_buttonLightStroke__6kp+e"};var a=i(7382),s=i(8139),n=i.n(s),c=i(579);const o=e=>{let{iconName:t="icon-arrow-up-right",className:i="",iconClassName:s="",onClick:o}=e;return(0,c.jsx)("button",{className:n()(r.button,r[i]),onClick:o,children:(0,c.jsx)(a.A,{name:t,className:n()(r.icon,r[s])})})}},6087:(e,t,i)=>{"use strict";i.d(t,{A:()=>L});const r="UserCard_user_card__e2azl",a="UserCard_wrapper__SWV5A",s="UserCard_avatar__2m0Mf",n="UserCard_name__Rxd2K",c="UserCard_text__lYmlO",o="UserCard_follow_button__N4DIz",l="UserCard_disabled__PquMh",d="UserCard_recipe_list__gp986";var u=i(4475),p=i(8179),_=i(3216),m=i(3003),g=i(3719),h=i(5043),f=i(3775),w=i(5656);const v="RecipeImage_recipe_image__ZtrXN";var x=i(579);const y=e=>{const t=e.recipe,[i,r]=(0,h.useState)(null===t||void 0===t?void 0:t.thumb);return(0,h.useEffect)((()=>{r((0,w.AE)(null===t||void 0===t?void 0:t.thumb))}),[t.thumb]),(0,x.jsx)("li",{children:(0,x.jsx)("img",{className:v,src:i,onError:()=>r("".concat("/team-project-foodies-frontend","/image-placeholder.svg")),alt:t.title})},t._id)},j=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",N=e=>{const[t,i]=(0,h.useState)(j()),v=(0,m.d4)(f.s0),N=(0,m.d4)(f.SS),b=(0,_.zy)().pathname.split("/"),k=b[b.length-1],A=(0,_.Zp)(),C=(0,m.d4)(f.tH),S=(0,m.d4)(f.xu);(0,h.useEffect)((()=>{function e(){i(j())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]);const I=(0,m.wA)(),{id:R}=(0,_.g)(),{_id:U,name:E,avatarURL:F,recipesCount:P,isFollowing:L=!0,recipes:O}=e.user,[B,T]=(0,h.useState)(L),[K,z]=(0,h.useState)(F);(0,h.useEffect)((()=>{z((0,w.U9)(F))}),[F]);return(0,x.jsx)(x.Fragment,{children:void 0!==E&&(0,x.jsxs)("li",{className:r,children:[(0,x.jsxs)("div",{className:a,children:[(0,x.jsx)("img",{className:s,src:K,alt:"user avatar",onError:()=>z("".concat("/team-project-foodies-frontend","/avatar-placeholder.svg"))}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:n,children:E}),(0,x.jsxs)("p",{className:c,children:["Own recipes: ",P]}),B?(0,x.jsx)("button",{className:o,onClick:()=>{(async()=>{try{if(!R||!U)return;const e=await(0,p.Qt)(U);if("followers"===k){const e=await(0,p.ri)({id:R,page:v,limit:N});I((0,g.dT)(e.followers))}else if("following"===k){const e=await(0,p.Vf)({id:R,page:v,limit:N});I((0,g.UO)(e.following));const t=C-1;I((0,g.vP)(C-1)),t<=N*(v-1)&&0!==t&&I((0,g.Ir)(v-1))}S.id===R&&I((0,g.Uy)(e.following.length)),T(!1)}catch(e){(0,w.Qg)(e.message)}})()},children:"Following"}):(0,x.jsx)("button",{className:"".concat(o," ").concat(S.id===U&&l),onClick:()=>{(async()=>{try{if(!R||!U)return;const e=await(0,p.pV)(U),t=await(0,p.ri)({id:R,page:v,limit:N});I((0,g.dT)(t.followers)),S.id===R&&I((0,g.Uy)(e.following.length)),T(!0)}catch(e){(0,w.Qg)(e.message)}})()},children:"Follow"})]})]}),"tablet"===t&&(0,x.jsx)("ul",{className:d,children:O.slice(0,3).map((e=>(0,x.jsx)(y,{recipe:e},e._id)))}),"desktop"===t&&(0,x.jsx)("ul",{className:d,children:O.map((e=>(0,x.jsx)(y,{recipe:e},e._id)))}),(0,x.jsx)(u.A,{onClick:()=>A("/user/".concat(U,"/recipies"))})]})})};var b=i(7160);const k=e=>{let{recipeId:t,isFavorite:i=!1}=e;const r=(0,m.wA)(),{id:a}=(0,_.g)(),s=(0,m.d4)(f.s0),n=(0,m.d4)(f.ft);return(0,x.jsx)(u.A,{iconName:"icon-trash",className:"",onClick:i?async()=>{try{await(0,b.c1)({recipeId:t}),r((0,g.$z)(t));const e=await(0,b.OV)({page:s,limit:n});console.log(e),r((0,g.UO)(e.recipes));const i=e.total;r((0,g.CI)(i)),i<=n*(s-1)&&0!==i&&r((0,g.Ir)(s-1))}catch(e){(0,w.Qg)(e.message)}}:async()=>{try{if(!t)return;await(0,b.cX)(t),r((0,g.$z)(t));const e=await(0,b.HK)({owner:a,page:s,limit:n});r((0,g.UO)(e.recipes));const i=e.total;r((0,g.Yk)(i)),i<=n*(s-1)&&0!==i&&r((0,g.Ir)(s-1))}catch(e){(0,w.Qg)(e.message)}}})},A="RecipeItem_recipe_card__iKs9j",C="RecipeItem_thumb_wrapper__xNhKD",S="RecipeItem_recipe_thumb__j5xwn",I="RecipeItem_recipe_info__H9cpu",R="RecipeItem_recipe_title__aqPJ6",U="RecipeItem_recipe_description__CixJW",E="RecipeItem_button_group__eFq1Y",F=e=>{let{recipe:t,isFavorite:i}=e;const r=(0,_.Zp)(),{id:a}=(0,_.g)(),{user:s}=(0,m.d4)((e=>e.auth)),[n,c]=(0,h.useState)(!1),[o,l]=(0,h.useState)(t.thumb);return(0,h.useEffect)((()=>{s&&s.id&&a&&c(s.id===a)}),[s,a]),(0,h.useEffect)((()=>{l((0,w.AE)(null===t||void 0===t?void 0:t.thumb))}),[t.thumb]),(0,x.jsxs)("li",{className:A,children:[(0,x.jsx)("div",{className:C,children:(0,x.jsx)("img",{src:o,alt:t.title,className:S,onError:()=>l("".concat("/team-project-foodies-frontend","/image-placeholder.svg"))})}),(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("p",{className:R,children:t.title}),(0,x.jsx)("p",{className:U,children:t.description})]}),(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)(u.A,{onClick:()=>r("/recipe/".concat(t._id))}),n&&(0,x.jsx)(k,{recipeId:t._id,isFavorite:i})]})]})},P="ListItems_list_items__S0u1Q",L=e=>{let{isRecipeCard:t,list:i,isFavorite:r}=e;return(0,x.jsx)("ul",{className:t?P:"",children:t?i.map((e=>(0,x.jsx)(F,{recipe:e,isFavorite:r},e._id))):i.map((e=>(0,x.jsx)(N,{user:e},e._id)))})}},691:(e,t,i)=>{"use strict";i.d(t,{A:()=>d});var r=i(3003);const a="ListPagination_pagination_elements__8n2b3",s="ListPagination_pagination_element__gehMs",n="ListPagination_pagination_element_active__00LNg";var c=i(3775),o=i(3719),l=i(579);const d=e=>{let{total:t}=e;const i=(0,r.wA)(),d=(0,r.d4)(c.s0),u=(0,r.d4)(c.SS),p=Math.ceil(t/u),_=Array.from({length:p},((e,t)=>t+1)),m=e=>{i((0,o.Ir)(e))};return p>1&&(0,l.jsx)("ul",{className:a,children:_.map(((e,t)=>1===e||e===p||e>=d-1&&e<=d+1?(0,l.jsx)("li",{className:"".concat(s," ").concat(d===e?n:""),onClick:()=>m(e),children:e},e):2===e&&d>3||e===p-1&&d<p-2?2===e&&4===d||e===p-1&&d===p-3?null:(0,l.jsx)("li",{className:s,children:"..."},e):null))})}},1595:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var r=i(8179),a=i(6087),s=i(5043),n=i(3003),c=i(3775),o=i(3719),l=i(3216),d=i(5656),u=i(8958),p=i(691);const _="UserFollowers_empty_text__ffTDK";var m=i(579);const g=()=>{const e=(0,n.wA)(),{id:t}=(0,l.g)(),i=(0,n.d4)(c.TM),g=(0,n.d4)(c.fr),h=(0,n.d4)(c.s0),f=(0,n.d4)(c.tH),w=(0,n.d4)(c.SS);return(0,s.useEffect)((()=>(e((0,o.dT)([])),e((0,o.Ir)(1)),e((0,o.vP)(0)),()=>{e((0,o.dT)([])),e((0,o.Ir)(1)),e((0,o.vP)(0))})),[e]),(0,s.useEffect)((()=>{(async()=>{e((0,o.dT)([]));try{e((0,o.F6)(!0));const i=await(0,r.ri)({id:t,page:h,limit:w});e((0,o.vP)(Number(i.total))),e((0,o.dT)(i.followers))}catch(i){(0,d.Qg)(i.message)}finally{e((0,o.F6)(!1))}})()}),[t,h,w,e]),(0,m.jsx)(m.Fragment,{children:i?(0,m.jsx)(u.default,{}):g.length>0?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.A,{isRecipeCard:!1,list:g}),f>w&&(0,m.jsx)(p.A,{total:f})]}):(0,m.jsx)("p",{className:_,children:"There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."})})}},3775:(e,t,i)=>{"use strict";i.d(t,{Cp:()=>n,Ef:()=>o,Oe:()=>l,SS:()=>u,TM:()=>p,Ub:()=>c,fr:()=>a,ft:()=>_,s0:()=>d,tH:()=>s,xu:()=>r});const r=e=>e.auth.user,a=e=>e.list.list,s=e=>e.list.totalUsers,n=e=>e.list.favorites,c=e=>e.list.recipes,o=e=>e.list.followers,l=e=>e.list.following,d=e=>e.list.page,u=e=>e.list.limit,p=e=>e.list.isLoading,_=e=>e.list.limit},8139:(e,t)=>{var i;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=n(e,s(i)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)r.call(e,i)&&e[i]&&(t=n(t,i));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=595.49e2ba04.chunk.js.map