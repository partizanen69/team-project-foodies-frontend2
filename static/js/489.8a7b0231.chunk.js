/*! For license information please see 489.8a7b0231.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{7182:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});i(5043);const a=i.p+"static/media/icons.b4b53982bb58f70738e39b174fd2a800.svg"},7160:(e,t,i)=>{"use strict";i.d(t,{HK:()=>u,Kk:()=>p,OV:()=>c,PS:()=>d,c1:()=>o,cX:()=>_,dU:()=>n,gv:()=>l,qt:()=>s});var a=i(6213),r=i(5656);const s=async function(){let{page:e,limit:t,category:i,area:r,ingredients:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(await a.A.get("recipes",{params:{...e?{page:e}:null,...t?{limit:t}:null,...i?{category:i}:null,...r?{area:r}:null,...s?{ingredients:s}:null}})).data},n=async e=>{let{id:t}=e;try{return(await a.A.get("/recipes/".concat(t))).data}catch(i){(0,r.r4)(i)}},c=async e=>{let{page:t=1,limit:i=10,recipeIds:s}=e;try{return(await a.A.get("/recipes/favorites",{params:{page:t,limit:i,...s&&s.length?{recipeIds:JSON.stringify(s)}:null}})).data}catch(n){(0,r.r4)(n)}},l=async e=>{let{recipeId:t}=e;try{return(await a.A.post("/recipes/".concat(t,"/favorites"))).data}catch(i){(0,r.r4)(i)}},o=async e=>{let{recipeId:t}=e;try{return(await a.A.delete("/recipes/".concat(t,"/favorites"))).data}catch(i){(0,r.r4)(i)}},d=async()=>{try{return(await a.A.get("/recipes/popular")).data}catch(e){(0,r.r4)(e)}},u=async e=>{let{owner:t,page:i=1,limit:s=10}=e;try{return(await a.A.get("/recipes/user-recipes",{params:{owner:t,page:i,limit:s}})).data}catch(n){(0,r.r4)(n)}},p=async e=>{try{return(await a.A.post("/recipes",e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(t){(0,r.r4)(t)}},_=async e=>{try{return(await a.A.delete("/recipes/".concat(e))).data}catch(t){(0,r.r4)(t)}}},4506:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});i(5043);var a=i(7182),r=i(579);const s=e=>{let{name:t,className:i=""}=e;return(0,r.jsx)("svg",{className:i,children:(0,r.jsx)("use",{xlinkHref:"".concat(a.A,"#").concat(t)})})}},4475:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});i(5043);const a={button:"RoundButton_button__gOFkP",icon:"RoundButton_icon__5EP-B",favorite:"RoundButton_favorite__WiVpE",arrowLight:"RoundButton_arrowLight__Rf8xn",buttonLightStroke:"RoundButton_buttonLightStroke__6kp+e"};var r=i(4506),s=i(8139),n=i.n(s),c=i(579);const l=e=>{let{iconName:t="icon-arrow-up-right",className:i="",iconClassName:s="",onClick:l}=e;return(0,c.jsx)("button",{className:n()(a.button,a[i]),onClick:l,children:(0,c.jsx)(r.A,{name:t,className:n()(a.icon,a[s])})})}},6087:(e,t,i)=>{"use strict";i.d(t,{A:()=>F});const a="UserCard_user_card__e2azl",r="UserCard_wrapper__SWV5A",s="UserCard_avatar__2m0Mf",n="UserCard_name__Rxd2K",c="UserCard_text__lYmlO",l="UserCard_follow_button__N4DIz",o="UserCard_disabled__PquMh",d="UserCard_recipe_list__gp986";var u=i(4475),p=i(8179),_=i(3216),m=i(3003),g=i(3719),h=i(5043),f=i(3775),w=i(5656);const v="RecipeImage_recipe_image__ZtrXN";var x=i(579);const y=e=>{const t=e.recipe,[i,a]=(0,h.useState)(t.thum);return(0,h.useEffect)((()=>{a((0,w.AE)(null===t||void 0===t?void 0:t.thumb))}),[t.thumb]),(0,x.jsx)("li",{children:(0,x.jsx)("img",{className:v,src:(0,w.AE)(i),alt:""})},t._id)},j=e=>{const[t,i]=(0,h.useState)(window.innerWidth),v=(0,m.d4)(f.s0),j=(0,m.d4)(f.SS),N=(0,_.zy)().pathname.split("/"),b=N[N.length-1],A=(0,_.Zp)(),C=(0,m.d4)(f.xu);(0,h.useEffect)((()=>{function e(){i(window.innerWidth)}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]);const S=(0,m.wA)(),{id:k}=(0,_.g)(),{_id:I,name:R,avatarURL:U,recipesCount:E,isFollowing:L=!0,recipes:F}=e.user,[P,O]=(0,h.useState)(L);return(0,x.jsx)(x.Fragment,{children:void 0!==R&&(0,x.jsxs)("li",{className:a,children:[(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("img",{className:s,src:(0,w.U9)(U),alt:"user avatar"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:n,children:R}),(0,x.jsxs)("p",{className:c,children:["Own recipes: ",E]}),P?(0,x.jsx)("button",{className:l,onClick:()=>{(async()=>{try{if(!k||!I)return;const e=await(0,p.Qt)(I);if("followers"===b){const e=await(0,p.ri)({id:k,page:v,limit:j});S((0,g.dT)(e.followers))}else if("following"===b){const e=await(0,p.Vf)({id:k,page:v,limit:j});S((0,g.dT)(e.following))}C.id===k&&S((0,g.Uy)(e.following.length)),O(!1)}catch(e){(0,w.Qg)(e.message)}})()},children:"Following"}):(0,x.jsx)("button",{className:"".concat(l," ").concat(C.id===I&&o),onClick:()=>{(async()=>{try{if(!k||!I)return;const e=await(0,p.pV)(I),t=await(0,p.ri)({id:k,page:v,limit:j});S((0,g.dT)(t.followers)),C.id===k&&S((0,g.Uy)(e.following.length)),O(!0)}catch(e){(0,w.Qg)(e.message)}})()},children:"Follow"})]})]}),t>=768&&t<1440&&(0,x.jsx)("ul",{className:d,children:F.slice(0,3).map((e=>(0,x.jsx)(y,{recipe:e},e._id)))}),t>=1440&&(0,x.jsx)("ul",{className:d,children:F.map((e=>(0,x.jsx)(y,{recipe:e},e._id)))}),(0,x.jsx)(u.A,{onClick:()=>A("/user/".concat(I,"/recipies"))})]})})};var N=i(7160);const b=e=>{let{recipeId:t,isFavorite:i=!1}=e;const a=(0,m.wA)(),r=(0,m.d4)(f.Cp),s=(0,m.d4)(f.s0),n=(0,m.d4)(f.ft);return(0,x.jsx)(u.A,{iconName:"icon-trash",className:"",onClick:i?async()=>{try{await(0,N.c1)({recipeId:t}),a((0,g.$z)(t));const e=r-1;a((0,g.CI)(e)),e%n===0&&e/n<r/n&&a((0,g.Ir)(s-1))}catch(e){(0,w.Qg)(e.message)}}:async()=>{try{if(!t)return;await(0,N.cX)(t),a((0,g.$z)(t))}catch(e){(0,w.Qg)(e.message)}}})},A="RecipeItem_recipe_card__iKs9j",C="RecipeItem_thumb_wrapper__xNhKD",S="RecipeItem_recipe_thumb__j5xwn",k="RecipeItem_recipe_info__H9cpu",I="RecipeItem_recipe_title__aqPJ6",R="RecipeItem_recipe_description__CixJW",U="RecipeItem_button_group__eFq1Y",E=e=>{let{recipe:t,isFavorite:i}=e;const a=(0,_.Zp)(),{id:r}=(0,_.g)(),{user:s}=(0,m.d4)((e=>e.auth)),[n,c]=(0,h.useState)(!1),[l,o]=(0,h.useState)(t.thumb);return(0,h.useEffect)((()=>{s&&s.id&&r&&c(s.id===r)}),[s,r]),(0,h.useEffect)((()=>{o((0,w.AE)(null===t||void 0===t?void 0:t.thumb))}),[t.thumb]),(0,x.jsxs)("li",{className:A,children:[(0,x.jsx)("div",{className:C,children:(0,x.jsx)("img",{src:l,alt:t.title,className:S,onError:()=>o("".concat("/team-project-foodies-frontend","/image-placeholder.svg"))})}),(0,x.jsxs)("div",{className:k,children:[(0,x.jsx)("p",{className:I,children:t.title}),(0,x.jsx)("p",{className:R,children:t.description})]}),(0,x.jsxs)("div",{className:U,children:[(0,x.jsx)(u.A,{onClick:()=>a("/recipe/".concat(t._id))}),n&&(0,x.jsx)(b,{recipeId:t._id,isFavorite:i})]})]})},L="ListItems_list_items__S0u1Q",F=e=>{let{isRecipeCard:t,list:i,isFavorite:a}=e;return(0,x.jsx)("ul",{className:t?L:"",children:t?i.map((e=>(0,x.jsx)(E,{recipe:e,isFavorite:a},e._id))):i.map((e=>(0,x.jsx)(j,{user:e},e._id)))})}},691:(e,t,i)=>{"use strict";i.d(t,{A:()=>d});var a=i(3003);const r="ListPagination_pagination_elements__8n2b3",s="ListPagination_pagination_element__gehMs",n="ListPagination_pagination_element_active__00LNg";var c=i(3775),l=i(3719),o=i(579);const d=e=>{let{total:t}=e;const i=(0,a.wA)(),d=(0,a.d4)(c.s0),u=(0,a.d4)(c.SS),p=Math.ceil(t/u),_=Array.from({length:p},((e,t)=>t+1)),m=e=>{i((0,l.Ir)(e))};return p>1&&(0,o.jsx)("ul",{className:r,children:_.map(((e,t)=>1===e||e===p||e>=d-1&&e<=d+1?(0,o.jsx)("li",{className:"".concat(s," ").concat(d===e?n:""),onClick:()=>m(e),children:e},e):2===e&&d>3||e===p-1&&d<p-2?2===e&&4===d||e===p-1&&d===p-3?null:(0,o.jsx)("li",{className:s,children:"..."},e):null))})}},3775:(e,t,i)=>{"use strict";i.d(t,{Cp:()=>n,Ef:()=>c,Oe:()=>l,SS:()=>d,TM:()=>u,fr:()=>r,ft:()=>p,s0:()=>o,tH:()=>s,xu:()=>a});const a=e=>e.auth.user,r=e=>e.list.list,s=e=>e.list.totalUsers,n=e=>e.list.favorites,c=e=>e.list.followers,l=e=>e.list.following,o=e=>e.list.page,d=e=>e.list.limit,u=e=>e.list.isLoading,p=e=>e.list.limit},8139:(e,t)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=n(e,s(i)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)a.call(e,i)&&e[i]&&(t=n(t,i));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=489.8a7b0231.chunk.js.map