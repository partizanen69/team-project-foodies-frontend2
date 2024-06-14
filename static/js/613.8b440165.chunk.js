"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{4613:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a,r,i=n(5043),l=n(3003),s=n(4858),o=n(8403),c=n(899),d=n(4564);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(null,arguments)}function p(e,t){let{title:n,titleId:l,...s}=e;return i.createElement("svg",m({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),n?i.createElement("title",{id:l},n):null,a||(a=i.createElement("g",{clipPath:"url(#clip0_127_2620)"},i.createElement("path",{d:"M14.9499 14.9499C13.5254 16.0358 11.7908 16.6373 9.99992 16.6666C4.16659 16.6666 0.833252 9.99994 0.833252 9.99994C1.86983 8.06819 3.30753 6.38045 5.04992 5.04994M8.24992 3.53327C8.82353 3.39901 9.41081 3.33189 9.99992 3.33327C15.8333 3.33327 19.1666 9.99994 19.1666 9.99994C18.6607 10.9463 18.0575 11.8372 17.3666 12.6583M11.7666 11.7666C11.5377 12.0122 11.2617 12.2092 10.955 12.3459C10.6484 12.4825 10.3173 12.556 9.98166 12.5619C9.64599 12.5678 9.31256 12.5061 9.00126 12.3803C8.68997 12.2546 8.40719 12.0675 8.16979 11.8301C7.9324 11.5927 7.74525 11.3099 7.61951 10.9986C7.49377 10.6873 7.43202 10.3539 7.43795 10.0182C7.44387 9.68252 7.51734 9.35148 7.65398 9.04481C7.79062 8.73815 7.98763 8.46215 8.23325 8.23327",stroke:"#050505",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M0.833252 0.833252L19.1666 19.1666",stroke:"#050505",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}))),r||(r=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_127_2620"},i.createElement("rect",{width:20,height:20,fill:"white"})))))}const u=i.forwardRef(p);n.p;var h,_;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(null,arguments)}function w(e,t){let{title:n,titleId:a,...r}=e;return i.createElement("svg",g({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,h||(h=i.createElement("g",{clipPath:"url(#clip0_127_2594)"},i.createElement("path",{d:"M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99968 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99968 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z",stroke:"#050505",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z",stroke:"#050505",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}))),_||(_=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_127_2594"},i.createElement("rect",{width:20,height:20,fill:"white"})))))}const f=i.forwardRef(w);n.p;var S=n(3401),j=(n(2342),n(8958));const k="SignInSignUpForm_modal_title__+AMEA",C="SignInSignUpForm_modal_input__3hXoo",v="SignInSignUpForm_modal_btn__Y9x82",b="SignInSignUpForm_modal_btn__active__9BPIi",x="SignInSignUpForm_modal_text__Ru18Z",E="SignInSignUpForm_modal_text_button__r5BaP",I="SignInSignUpForm_password_input_wrapper__vOMk7",N="SignInSignUpForm_eye_icon__lUzG2",y="SignInSignUpForm_loader_overlay__c32xw";var M=n(579);const P=e=>{let{isModalSignInOpen:t,isModalSignUpOpen:n,closeModal:a,openModal:r}=e;const m=(0,l.wA)(),{loading:p}=(0,l.d4)((e=>e.auth)),[h,_]=(0,i.useState)(!1),[g,w]=(0,i.useState)(""),[P,U]=(0,i.useState)(""),[O,F]=(0,i.useState)(""),L=c.Ik().shape({name:n?c.Yj().required("Name is required"):c.Yj().nullable(),email:c.Yj().required("Email is required").email("Email is invalid"),password:c.Yj().required("Password is required").min(6,"Password must be at least 6 characters")}),{register:q,handleSubmit:R,watch:Y,formState:{errors:A}}=(0,s.mN)({resolver:(0,o.t)(L)}),B=Y();(0,i.useEffect)((()=>{B.name&&w(B.name),B.email&&U(B.email),B.password&&F(B.password)}),[B]),(0,i.useEffect)((()=>{Object.keys(A).length>0&&Object.values(A).forEach((e=>{S.oR.error(e.message)}))}),[A]);return(0,M.jsxs)("div",{className:"sign-in-form",children:[(0,M.jsx)("h2",{className:k,children:t?"SIGN IN":"SIGN UP"}),(0,M.jsxs)("form",{onSubmit:R(t?e=>{m((0,d.iD)(e.email,e.password)).then((()=>{a()}))}:e=>{m((0,d.kz)(e.name,e.email,e.password)).then((()=>{a()}))}),children:[n&&(0,M.jsx)("input",{className:C,type:"text",name:"name",placeholder:"Name*",...q("name")}),(0,M.jsx)("input",{className:C,type:"email",name:"email",placeholder:"Email*",...q("email")}),(0,M.jsxs)("div",{className:I,children:[(0,M.jsx)("input",{className:C,type:h?"text":"password",name:"password",placeholder:"Password*",...q("password")}),h?(0,M.jsx)(f,{className:N,onClick:()=>_(!1)}):(0,M.jsx)(u,{className:N,onClick:()=>_(!0)})]}),(0,M.jsx)("button",{className:t&&P&&O.length>=6||n&&g&&P&&O.length>=6?b:v,type:"submit",disabled:p,children:t?"SIGN IN":"CREATE"})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)("p",{className:x,children:t?"Don't have an account? ":"I already have an account? "}),(0,M.jsx)("button",{type:"button",className:E,onClick:()=>{a(),r(t?"sign up":"sign in")},children:t?"Create an account":"Sign in"})]}),p&&(0,M.jsx)("div",{className:y,children:(0,M.jsx)(j.default,{})})]})}}}]);
//# sourceMappingURL=613.8b440165.chunk.js.map