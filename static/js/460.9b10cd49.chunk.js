/*! For license information please see 460.9b10cd49.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460,242],{1133:(e,t,r)=>{"use strict";r.d(t,{P:()=>i});var n=r(6213),a=r(5656);const i=async()=>{try{return(await n.A.get("/areas")).data.slice().sort(((e,t)=>e.name.localeCompare(t.name)))}catch(e){(0,a.r4)(e)}}},2279:(e,t,r)=>{"use strict";r.d(t,{b:()=>a});var n=r(6213);const a=async function(){let{page:e=1,limit:t=11,all:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=r?{}:{page:e,limit:t};return(await n.A.get("/categories",{params:a})).data.slice().sort(((e,t)=>e.name.localeCompare(t.name)))}},7160:(e,t,r)=>{"use strict";r.d(t,{HK:()=>l,Kk:()=>m,OV:()=>c,PS:()=>o,c1:()=>d,cX:()=>p,dU:()=>s,gv:()=>_,qt:()=>i});var n=r(6213),a=r(5656);const i=async function(){let{page:e,limit:t,category:r,area:a,ingredients:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(await n.A.get("recipes",{params:{...e?{page:e}:null,...t?{limit:t}:null,...r?{category:r}:null,...a?{area:a}:null,...i?{ingredients:i}:null}})).data},s=async e=>{let{id:t}=e;try{return(await n.A.get("/recipes/".concat(t))).data}catch(r){(0,a.r4)(r)}},c=async e=>{let{page:t=1,limit:r=10,recipeIds:i}=e;try{return(await n.A.get("/recipes/favorites",{params:{page:t,limit:r,...i&&i.length?{recipeIds:JSON.stringify(i)}:null}})).data}catch(s){(0,a.r4)(s)}},_=async e=>{let{recipeId:t}=e;try{return(await n.A.post("/recipes/".concat(t,"/favorites"))).data}catch(r){(0,a.r4)(r)}},d=async e=>{let{recipeId:t}=e;try{return(await n.A.delete("/recipes/".concat(t,"/favorites"))).data}catch(r){(0,a.r4)(r)}},o=async()=>{try{return(await n.A.get("/recipes/popular")).data}catch(e){(0,a.r4)(e)}},l=async e=>{let{owner:t,page:r=1,limit:i=10}=e;try{return(await n.A.get("/recipes/user-recipes",{params:{owner:t,page:r,limit:i}})).data}catch(s){(0,a.r4)(s)}},m=async e=>{try{return(await n.A.post("/recipes",e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(t){(0,a.r4)(t)}},p=async e=>{try{return(await n.A.delete("/recipes/".concat(e))).data}catch(t){(0,a.r4)(t)}}},2242:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});r(5043);var n=r(8139),a=r.n(n),i=r(579);function s(e){let{children:t,className:r}=e;const n=a()(r);return(0,i.jsx)("div",{className:n,children:t})}},8654:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});var n=r(2242),a=r(4475);const i=[{id:"facebook",link:"https://www.facebook.com/goITclub/"},{id:"instagram",link:"https://www.instagram.com/goitclub/"},{id:"youtube",link:"https://www.youtube.com/c/GoIT"}],s="NetworkLinks_networkLinks__BfmH8",c="NetworkLinks_networkLink__TnYOO";var _=r(579);const d=()=>(0,_.jsx)("ul",{className:s,children:i.map((e=>{let{id:t,link:r}=e;return(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:r,className:c,target:"_blank",rel:"nofollow noopener noreferrer",children:(0,_.jsx)(a.A,{iconName:"icon-".concat(t),className:"network-link-button",iconClassName:"network-link-icon"})})},t)}))}),o="CopyRight_copyright__rdjXI",l=()=>(0,_.jsx)("span",{className:o,children:"@2024, Foodies. All rights reserved"});var m=r(5475);const p="Logo_logo__n9+zU",u=()=>(0,_.jsx)(m.k2,{to:"/",className:p,children:"foodies"}),g="Footer_top__XfDGF",h="Footer_bottom__J7kjW",x=()=>(0,_.jsxs)("footer",{children:[(0,_.jsx)(n.default,{children:(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)(u,{}),(0,_.jsx)(d,{})]})}),(0,_.jsx)("div",{className:h,children:(0,_.jsx)(l,{})})]})},7653:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});r(5043);const n="MainTitle_title__k2iVV";var a=r(579);const i=e=>{let{children:t}=e;return(0,a.jsx)("h2",{className:n,children:t})}},80:(e,t,r)=>{"use strict";r.d(t,{M:()=>m});var n=r(5475),a=r(2242);const i="PathInfo_path_info_container__lKMh4",s="PathInfo_page_name__CWurv",c="PathInfo_home_name__qgTQS",_="PathInfo_current_page_name__Vlki3";var d=r(8139),o=r.n(d),l=r(579);const m=e=>{let{currentPageName:t}=e;return(0,l.jsxs)(a.default,{className:i,children:[(0,l.jsx)(n.k2,{className:o()(s,c),to:"/",children:"HOME"}),(0,l.jsx)("span",{className:o()(s,c),children:"/"}),(0,l.jsx)("span",{className:o()(s,_),children:t})]})}},4475:(e,t,r)=>{"use strict";r.d(t,{A:()=>_});r(5043);const n={button:"RoundButton_button__gOFkP",icon:"RoundButton_icon__5EP-B",favorite:"RoundButton_favorite__WiVpE","delete-button":"RoundButton_delete-button__dtqMK","network-link-button":"RoundButton_network-link-button__BXgKs","delete-icon":"RoundButton_delete-icon__pf3vD","network-link-icon":"RoundButton_network-link-icon__6837r",arrowLight:"RoundButton_arrowLight__Rf8xn",buttonLightStroke:"RoundButton_buttonLightStroke__6kp+e"};var a=r(7382),i=r(8139),s=r.n(i),c=r(579);const _=e=>{let{iconName:t="icon-arrow-up-right",className:r="",iconClassName:i="",onClick:_}=e;return(0,c.jsx)("button",{className:s()(n.button,n[r]),onClick:_,children:(0,c.jsx)(a.A,{name:t,className:s()(n.icon,n[i])})})}},5823:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});r(5043);const n="Subtitle_subtitle__Y5mSh";var a=r(579);const i=e=>{let{children:t}=e;return(0,a.jsx)("p",{className:n,children:t})}},4460:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ke});var n=r(5043),a=r(80),i=r(2242),s=r(8958),c=r(7653),_=r(5823),d=r(4858),o=r(8403),l=r(3216),m=r(3401),p=r(3003),u=(r(2342),r(899));const g=u.Ik().shape({image:u.gl().required("Please upload an image for the recipe"),title:u.Yj().required("Title is required"),description:u.Yj().max(200,"Description must be at most 200 characters").required("Description is required"),category:u.Yj().required("Category is required"),area:u.Yj().required("Area is required"),time:u.Yj().min(1,"Time must be at least 1 minute").required("Time is required"),ingredients:u.YO().of(u.Ik().shape({_id:u.Yj().required("Ingredient id is required"),measure:u.Yj().required("Measure is required")})).min(1,"At least one ingredient is required"),instructions:u.Yj().max(200,"Instructions must be at most 200 characters").required("Instructions are required")});var h=r(2279),x=r(1133),j=r(6213),f=r(5656);const v=async()=>{try{return(await j.A.get("/ingredients")).data.slice().sort(((e,t)=>e.name.localeCompare(t.name)))}catch(e){(0,f.r4)(e)}};var y=r(7160),N=r(4475);const w="ErrorMessage_error_message__CSeiA";var I=r(579);const A=e=>{let{error:t}=e;return t?(0,I.jsx)("p",{className:w,children:t.message}):null},b="ImageUpload_upload_container__1Fu+D",C="ImageUpload_recipe_image_container__8Mcqf",k="ImageUpload_recipe_image_input__1IViX",S="ImageUpload_recipe_image_preview_container__w0nL7",R="ImageUpload_recipe_image_preview__RLzmv",q="ImageUpload_recipe_upload_icon__-O+LG",P="ImageUpload_recipe_image_text__-UwoW",L="ImageUpload_upload_again__bor-W",T="ImageUpload_upload_again_container__u0vTe";var E=r(7382);const V=e=>{let{handleImageChange:t,imagePreview:r,errors:n}=e;return(0,I.jsxs)("div",{className:b,children:[(0,I.jsxs)("label",{htmlFor:"image-upload",className:C,children:[(0,I.jsx)("input",{type:"file",id:"image-upload",accept:"image/*",onChange:t,className:k}),r?(0,I.jsx)("div",{className:S,children:(0,I.jsx)("img",{src:r,alt:"Recipe",className:R})}):(0,I.jsxs)("div",{className:P,children:[(0,I.jsx)(E.A,{name:"icon-upload",className:q}),(0,I.jsx)("p",{children:"Upload a photo"})]})]}),r&&(0,I.jsx)("div",{className:T,children:(0,I.jsx)("label",{htmlFor:"image-upload",className:L,children:"Upload another photo"})}),!r&&(0,I.jsx)(A,{error:null===n||void 0===n?void 0:n.image})]})},D="TitleInput_input_container__mI1Ww",M="TitleInput_add_recipe_form_title__39o3u",U="TitleInput_typing_text__DdpQx",O=e=>{let{register:t,errors:r}=e;const[a,i]=(0,n.useState)(!1);return(0,I.jsxs)("div",{className:D,children:[(0,I.jsx)("input",{type:"text",...t("title",{onChange:()=>{i(!0)}}),placeholder:"The name of the recipe",className:"".concat(M," ").concat(a?U:"")}),(0,I.jsx)(A,{error:null===r||void 0===r?void 0:r.title})]})},F="DescriptionInput_add_recipe_form_description_wrap__tLkos",B="DescriptionInput_add_recipe_form_description__NrBxQ",Y="DescriptionInput_add_recipe_form_description_input__MVg6M",H="DescriptionInput_bottom_border__B9KyH",K="DescriptionInput_character_count__KJ5k4",X=e=>{let{register:t,name:r,errors:a,maxLength:i}=e;const[s,c]=(0,n.useState)(""),[_,d]=(0,n.useState)(!1);return(0,I.jsxs)("div",{className:F,children:[(0,I.jsxs)("div",{className:B,children:[(0,I.jsx)("input",{...t(r),type:"text",value:s,maxLength:i,onChange:e=>{const t=e.target.value;c(t.slice(0,i)),d(!0)},placeholder:"Enter a description of the dish",className:Y}),(0,I.jsxs)("div",{className:K,children:[(0,I.jsx)("span",{style:{color:s.length>0?"rgba(5, 5, 5, 1)":"rgba(5, 5, 5, 0.6)"},children:s.length}),(0,I.jsxs)("span",{children:["/",i]})]})]}),a[r]&&!_&&(0,I.jsx)(A,{error:a[r]}),(0,I.jsx)("div",{className:H})]})},W="AddRecipeFormLabel_add_recipe_form_label__YP-Ry",z=e=>{let{children:t}=e;return(0,I.jsx)("label",{className:W,children:t})},J={area_select_container:"AreaSelect_area_select_container__309tE",area_select:"AreaSelect_area_select__+Xgg2",area_select_wrapper:"AreaSelect_area_select_wrapper__fTop4",area_select_dropdown_icon:"AreaSelect_area_select_dropdown_icon__0KToD",area_select_option:"AreaSelect_area_select_option__nsWUK",area_placeholder:"AreaSelect_area_placeholder__EX6D8",area_selected_text:"AreaSelect_area_selected_text__SV8gt",area_is_open:"AreaSelect_area_is_open__+msMq",area_selected:"AreaSelect_area_selected__QZYot"},Z=e=>{let{control:t,areas:r,errors:a}=e;const[i,s]=(0,n.useState)(!1),[c,_]=(0,n.useState)(null),o=()=>s(!i);return(0,I.jsxs)("div",{className:J.area_select_container,children:[(0,I.jsx)(z,{children:"Area"}),(0,I.jsx)(d.xI,{name:"area",control:t,render:e=>{let{field:t}=e;return(0,I.jsxs)("div",{className:J.area_select_wrapper,children:[(0,I.jsxs)("div",{className:"".concat(J.area_select," ").concat(i?J.area_is_open:""),onClick:o,children:[c?(0,I.jsx)("span",{className:J.area_selected_text,children:c.name}):(0,I.jsx)("span",{className:J.area_placeholder,children:"Select an area"}),i?(0,I.jsx)(E.A,{name:"icon-chevron-down",className:J.area_select_dropdown_icon}):(0,I.jsx)(E.A,{name:"icon-arrow-drop-down",className:J.area_select_dropdown_icon})]}),i&&(0,I.jsx)("div",{className:J.area_select_option,children:r.map((e=>(0,I.jsx)("div",{className:"".concat(J.area_select__dropdown_item," ").concat(c&&c._id===e._id?J.area_selected:""),onClick:()=>{(e=>{_(e),s(!1)})(e),t.onChange(e.name)},children:e.name},e._id)))})]})}}),(0,I.jsx)(A,{error:null===a||void 0===a?void 0:a.area})]})},G={category_select_container:"CategorySelect_category_select_container__dRYHd",category_select:"CategorySelect_category_select__p4ayL",category_select_wrapper:"CategorySelect_category_select_wrapper__2KEp1",category_select_dropdown_icon:"CategorySelect_category_select_dropdown_icon__iKDUC",category_select_option:"CategorySelect_category_select_option__w7ckg",category_placeholder:"CategorySelect_category_placeholder__liBMi",category_selected_text:"CategorySelect_category_selected_text__Xxvt0",category_is_open:"CategorySelect_category_is_open__PyIUM",category_selected:"CategorySelect_category_selected__7Wglj"},Q=e=>{let{control:t,categories:r,errors:a}=e;const[i,s]=(0,n.useState)(!1),[c,_]=(0,n.useState)(null),o=()=>s(!i);return(0,I.jsxs)("div",{className:G.category_select_container,children:[(0,I.jsx)(z,{children:"Category"}),(0,I.jsx)(d.xI,{name:"category",control:t,render:e=>{let{field:t}=e;return(0,I.jsxs)("div",{className:G.category_select_wrapper,children:[(0,I.jsxs)("div",{className:"".concat(G.category_select," ").concat(i?G.category_is_open:""),onClick:o,children:[c?(0,I.jsx)("span",{className:G.category_selected_text,children:c.name}):(0,I.jsx)("span",{className:G.category_placeholder,children:"Select a category"}),i?(0,I.jsx)(E.A,{name:"icon-chevron-down",className:G.category_select_dropdown_icon}):(0,I.jsx)(E.A,{name:"icon-arrow-drop-down",className:G.category_select_dropdown_icon})]}),i&&(0,I.jsx)("div",{className:G.category_select_option,children:r.map((e=>(0,I.jsx)("div",{className:"".concat(G.category_select__dropdown_item," ").concat(c&&c._id===e._id?G.category_selected:""),onClick:()=>{(e=>{_(e),s(!1)})(e),t.onChange(e.name)},children:e.name},e._id)))})]})}}),(0,I.jsx)(A,{error:null===a||void 0===a?void 0:a.category})]})},$={add_recipe_form_time:"TimeInput_add_recipe_form_time__NyrDi",add_recipe_form_time_buttons:"TimeInput_add_recipe_form_time_buttons__S1vCH",add_recipe_form_time_button:"TimeInput_add_recipe_form_time_button__ZROqi",add_recipe_form_time_icon:"TimeInput_add_recipe_form_time_icon__iMOou",add_recipe_form_time_input:"TimeInput_add_recipe_form_time_input__Hdv93"},ee=e=>{var t;let{register:r,getValues:a,setValue:i,errors:s}=e;const[c,_]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=a("time")||0;_("".concat(e," min"))}),[a]);return(0,I.jsxs)("div",{className:$.add_recipe_form_time,children:[(0,I.jsx)(z,{children:"Cooking time"}),(0,I.jsxs)("div",{className:$.add_recipe_form_time_buttons,children:[(0,I.jsx)("button",{type:"button",onClick:()=>{const e=a("time");if(!e)return;const t=e-1>=0?e-1:0;i("time",t),_("".concat(t," min"))},className:$.add_recipe_form_time_button,children:(0,I.jsx)(E.A,{name:"icon-time-minus",className:$.add_recipe_form_time_icon})}),(0,I.jsx)("input",{type:"text",value:c,readOnly:!0,...r("time"),className:$.add_recipe_form_time_input}),(0,I.jsx)("button",{type:"button",onClick:()=>{const e=(a("time")||0)+1;i("time",e),_("".concat(e," min"))},className:$.add_recipe_form_time_button,children:(0,I.jsx)(E.A,{name:"icon-time-plus",className:$.add_recipe_form_time_icon})})]}),s&&(0,I.jsx)("p",{className:$.add_recipe_form_error,children:null===(t=s.time)||void 0===t?void 0:t.message})]})},te="InstructionsInput_add_recipe_form_instructions__MXYan",re="InstructionsInput_add_recipe_form_instructions_wrap__G+dYv",ne="InstructionsInput_add_recipe_form_instructions_input__TNVxq",ae="InstructionsInput_bottom_border__J+EOv",ie="InstructionsInput_add_recipe_form_counter__WvPzE",se="InstructionsInput_character_count__VFd1f",ce=e=>{let{register:t,name:r,errors:a,maxLength:i}=e;const[s,c]=(0,n.useState)(""),[_,d]=(0,n.useState)(!1);return(0,I.jsxs)("div",{className:te,children:[(0,I.jsx)(z,{children:"Recipe Preparation"}),(0,I.jsxs)("div",{className:re,children:[(0,I.jsxs)("div",{className:ie,children:[(0,I.jsx)("input",{...t(r),type:"text",value:s,maxLength:i,onChange:e=>{const t=e.target.value;c(t.slice(0,i)),d(!0)},placeholder:"Enter recipe",className:ne}),(0,I.jsxs)("div",{className:se,children:[(0,I.jsx)("span",{style:{color:s.length>0?"rgba(5, 5, 5, 1)":"rgba(5, 5, 5, 0.6)"},children:s.length}),(0,I.jsxs)("span",{children:["/",i]})]})]}),a[r]&&!_&&(0,I.jsx)(A,{error:a[r]}),(0,I.jsx)("div",{className:ae})]})]})},_e={add_recipe_form_ingredients:"AddIngredient_add_recipe_form_ingredients__Zyy6Y",add_recipe_form_ingredient_input:"AddIngredient_add_recipe_form_ingredient_input__xz-Qc",add_recipe_form_ingredient_select_wrap:"AddIngredient_add_recipe_form_ingredient_select_wrap__Hlf9u",ingredient_select:"AddIngredient_ingredient_select__e2aqy",ingredient_select_wrapper:"AddIngredient_ingredient_select_wrapper__hbcAh",add_recipe_select_dropdown_icon:"AddIngredient_add_recipe_select_dropdown_icon__Eztu5",ingredient_select_option:"AddIngredient_ingredient_select_option__HNBqe",ingredient_placeholder:"AddIngredient_ingredient_placeholder__Eeq2c",ingredient_selected_text:"AddIngredient_ingredient_selected_text__w0bCf",ingredient_is_open:"AddIngredient_ingredient_is_open__nXeMe",ingredient_selected:"AddIngredient_ingredient_selected__PcsWj",add_recipe_form_ingredient_input_select:"AddIngredient_add_recipe_form_ingredient_input_select__J0Hk8",add_recipe_form_ingredient_input_measure:"AddIngredient_add_recipe_form_ingredient_input_measure__JwHIJ",add_recipe_form_ingredient_input_button:"AddIngredient_add_recipe_form_ingredient_input_button__v6+bi",add_recipe_form_ingredient_input_button_icon:"AddIngredient_add_recipe_form_ingredient_input_button_icon__1dZu3"},de=e=>{let{control:t,ingredientsList:r,errors:a,isTyping:i,register:s,watch:c,addIngredient:_,handleMeasureChange:o}=e;const[l,p]=(0,n.useState)(!1),[u,g]=(0,n.useState)(null),h=()=>p(!l);return(0,I.jsx)("div",{className:_e.add_recipe_form_ingredients,children:(0,I.jsx)(d.xI,{name:"selectedIngredient",control:t,render:e=>{let{field:t}=e;return(0,I.jsxs)("div",{className:_e.add_recipe_form_ingredient_input,children:[(0,I.jsx)(z,{children:"Ingredients"}),(0,I.jsxs)("div",{className:_e.add_recipe_form_ingredient_select_wrap,children:[(0,I.jsxs)("div",{className:_e.ingredient_select_wrapper,children:[(0,I.jsxs)("div",{className:"".concat(_e.ingredient_select," ").concat(l?_e.ingredient_is_open:""),onClick:h,children:[u?(0,I.jsx)("span",{className:_e.ingredient_selected_text,children:u.name}):(0,I.jsx)("span",{className:_e.ingredient_placeholder,children:"Add the ingredient"}),(0,I.jsx)(E.A,{name:l?"icon-chevron-down":"icon-arrow-drop-down",className:_e.add_recipe_select_dropdown_icon})]}),l&&(0,I.jsx)("div",{className:_e.ingredient_select_option,children:r.map((e=>(0,I.jsx)("div",{className:"".concat(_e.ingredient_select__dropdown_item," ").concat(u&&u._id===e._id?_e.ingredient_selected:""),onClick:()=>{(e=>{g(e),p(!1)})(e),t.onChange(e._id)},children:e.name},e._id)))})]}),(0,I.jsx)("input",{type:"text",...s("measure"),placeholder:"Enter quantity",className:_e.add_recipe_form_ingredient_input_measure,onChange:o})]}),(0,I.jsxs)("button",{className:_e.add_recipe_form_ingredient_input_button,type:"button",onClick:()=>{const e=c("selectedIngredient"),t=r.find((t=>t._id===e)),n=c("measure");t&&n?_(t,n):m.oR.error("Please enter quantity and select ingredient")},children:[(0,I.jsx)("span",{children:"Add ingredient"}),(0,I.jsx)(E.A,{name:"icon-plus",className:_e.add_recipe_form_ingredient_input_button_icon})]}),(null===a||void 0===a?void 0:a.ingredients)&&!i&&(0,I.jsx)(A,{error:null===a||void 0===a?void 0:a.ingredients})]})}})})},oe="AddIngredientCard_add_recipe_form_ingredient_card_container__ZPVzo",le="AddIngredientCard_ingredient_card__H348F",me="AddIngredientCard_ingredient_info__6ddc8",pe="AddIngredientCard_add_recipe_form_ingredient_card_img__yDkPk",ue="AddIngredientCard_add_recipe_form_ingredient_card_text__nL7CO",ge="AddIngredientCard_ingredient_card_name__vZtox",he="AddIngredientCard_ingredient_card_measure__G+LzO",xe="AddIngredientCard_add_recipe_form_close_button__XCFaE",je="AddIngredientCard_add_recipe_form_close_icon__w-gGM",fe=e=>{let{removeIngredientCard:t,ingredientCards:r}=e;const n=e=>{e.target.src="".concat("/team-project-foodies-frontend","/image-placeholder.svg")};return(0,I.jsx)("div",{className:oe,children:r.map(((e,r)=>(0,I.jsxs)("div",{className:le,children:[(0,I.jsxs)("div",{className:me,children:[(0,I.jsx)("img",{src:e.img,className:pe,alt:e.name,onError:n}),(0,I.jsxs)("div",{className:ue,children:[(0,I.jsx)("h4",{className:ge,children:e.name}),(0,I.jsx)("p",{className:he,children:e.measure})]})]}),(0,I.jsx)("button",{type:"button",onClick:()=>t(r),className:xe,children:(0,I.jsx)(E.A,{name:"icon-close",className:je})})]},"ingredient-card-".concat(r))))})},ve="AddRecipeForm_add_recipe_form_inputs__-cPm2",ye="AddRecipeForm_add_recipe_form_actions__V4hnn",Ne="AddRecipeForm_add_recipe_form_publish_button__z69bB",we="AddRecipeForm_add_recipe_form_container__pOZbp",Ie=()=>{const{register:e,handleSubmit:t,control:r,setValue:a,getValues:i,watch:s,formState:{errors:c}}=(0,d.mN)({resolver:(0,o.t)(g),defaultValues:{image:null,title:"",description:"",area:"",category:"",time:0,ingredients:[],instructions:""}}),[_,u]=(0,n.useState)([]),[j,w]=(0,n.useState)([]),[A,b]=(0,n.useState)([]),[C,k]=(0,n.useState)(null),[S,R]=(0,n.useState)([]),[q,P]=(0,n.useState)(!1),{user:L}=(0,p.d4)((e=>e.auth)),T=(0,l.Zp)();(0,n.useEffect)((()=>{(async()=>{try{const[e,t,r]=await Promise.all([(0,h.b)(),(0,x.P)(),v()]);u(e),b(t),w(r)}catch(e){(0,f.Qg)("Error occurred while trying to get initial data: ".concat(e.message))}})()}),[]);return(0,I.jsx)("form",{onSubmit:t((async e=>{try{const t=new FormData,{image:r,title:n,description:a,category:i,area:s,time:c,instructions:_}=e;t.append("thumb",r[0]),t.append("title",n),t.append("description",a),t.append("category",i),t.append("area",s),t.append("time",c),t.append("instructions",_),t.append("ingredients",JSON.stringify(S.map((e=>({id:e._id,measure:e.measure}))))),await(0,y.Kk)(t),m.oR.success("Recipe added successfully"),L&&T("/user/".concat(L.id,"/recipies"))}catch(t){m.oR.error("Error occurred while adding new recipe: ".concat(t.message))}})),children:(0,I.jsxs)("div",{className:we,children:[(0,I.jsx)("div",{children:(0,I.jsx)(V,{imagePreview:C,handleImageChange:e=>{const t=e.target.files[0];t&&(k(URL.createObjectURL(t)),a("image",[t]))},errors:c})}),(0,I.jsxs)("div",{children:[(0,I.jsx)(O,{name:"title",register:e,errors:c,title:i("title")}),(0,I.jsx)(X,{name:"description",register:e,watch:s,errors:c,maxLength:200,description:i("description")}),(0,I.jsx)(Z,{name:"area",control:r,areas:A,errors:c,setValue:a}),(0,I.jsxs)("div",{className:ve,children:[(0,I.jsx)(Q,{name:"category",control:r,categories:_,errors:c,setValue:a}),(0,I.jsx)(ee,{name:"time",register:e,getValues:i,setValue:a,time:i("time"),errors:c})]}),(0,I.jsx)(de,{addIngredient:(e,t)=>{if(S.some((t=>t._id===e._id)))return void m.oR.error("This ingredient is already added");const r={_id:e._id,name:e.name,measure:t,img:e.img},n=[...S,r];a("ingredients",n),R(n)},ingredientsList:j,isTyping:q,handleMeasureChange:e=>{P(!0)},watch:s,errors:c,control:r,register:e}),(0,I.jsx)(fe,{removeIngredientCard:e=>{const t=[...S];t.splice(e,1),R(t)},ingredientCards:S}),(0,I.jsx)(ce,{name:"instructions",register:e,watch:s,errors:c,maxLength:200,description:i("instructions")}),(0,I.jsxs)("div",{className:ye,children:[(0,I.jsx)(N.A,{iconName:"icon-trash",onClick:()=>window.location.reload(),className:"delete-button",iconClassName:"delete-icon"}),(0,I.jsx)("button",{className:Ne,type:"submit",children:"Publish"})]})]})]})})};var Ae=r(8654);const be="AddRecipePage_add_title_container__DihU-",Ce=()=>{const[e,t]=(0,n.useState)(!0),[r,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{t(!1)}catch(r){t(!1),d(r.message)}})()}),[]),(0,I.jsxs)(i.default,{children:[(0,I.jsx)("div",{children:e?(0,I.jsx)(s.default,{}):r?(0,I.jsx)("div",{children:r}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.M,{currentPageName:"ADD RECIPE"}),(0,I.jsxs)("div",{className:be,children:[(0,I.jsx)(c.A,{children:"Add Recipe"}),(0,I.jsx)(_.A,{children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})]}),(0,I.jsx)(Ie,{})]})}),(0,I.jsx)(Ae.A,{})]})};Ce.prototype={};const ke=Ce},8139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,i(r)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=460.9b10cd49.chunk.js.map