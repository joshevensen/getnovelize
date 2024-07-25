import{c as y,E as d,G as O,a as _,o as j,e as q,H as b,I as A,J as H,K as B,F as J,f as C,g as L,h as l,j as g,w as S,n as V,m as $,t as Y,L as Z,C as Q}from"./DqgVjFjP.js";import{I as D,A as E,E as W,T as X,o as P,a as ee}from"./DoN4ifKi.js";import{s as te}from"./DsQs_jdk.js";import{k as le,f as ae,u as se}from"./DZdhUrao.js";import{_ as oe}from"./C3jvkOv_.js";import"./DlAUqK2U.js";function ne(e,s,n){let t=y(n==null?void 0:n.value),a=d(()=>e.value!==void 0);return[d(()=>a.value?e.value:t.value),function(i){return a.value||(t.value=i),s==null?void 0:s(i)}]}function ie(e){var s,n;let t=(s=e==null?void 0:e.form)!=null?s:e.closest("form");if(t){for(let a of t.elements)if(a!==e&&(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image")){a.click();return}(n=t.requestSubmit)==null||n.call(t)}}let F=Symbol("LabelContext");function I(){let e=A(F,null);if(e===null){let s=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(s,I),s}return e}function re({slot:e={},name:s="Label",props:n={}}={}){let t=y([]);function a(i){return t.value.push(i),()=>{let r=t.value.indexOf(i);r!==-1&&t.value.splice(r,1)}}return O(F,{register:a,slot:e,name:s,props:n}),d(()=>t.value.length>0?t.value.join(" "):void 0)}let ue=_({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{slots:s,attrs:n}){var t;let a=(t=e.id)!=null?t:`headlessui-label-${D()}`,i=I();return j(()=>q(i.register(a))),()=>{let{name:r="Label",slot:u={},props:c={}}=i,{passive:x,...f}=e,v={...Object.entries(c).reduce((m,[w,k])=>Object.assign(m,{[w]:b(k)}),{}),id:a};return x&&(delete v.onClick,delete v.htmlFor,delete f.onClick),E({ourProps:v,theirProps:f,slot:u,attrs:n,slots:s,name:r})}}}),U=Symbol("GroupContext"),de=_({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:s,attrs:n}){let t=y(null),a=re({name:"SwitchLabel",props:{htmlFor:d(()=>{var r;return(r=t.value)==null?void 0:r.id}),onClick(r){t.value&&(r.currentTarget.tagName==="LABEL"&&r.preventDefault(),t.value.click(),t.value.focus({preventScroll:!0}))}}}),i=le({name:"SwitchDescription"});return O(U,{switchRef:t,labelledby:a,describedby:i}),()=>E({theirProps:e,ourProps:{},slot:{},slots:s,attrs:n,name:"SwitchGroup"})}}),ce=_({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:s,attrs:n,slots:t,expose:a}){var i;let r=(i=e.id)!=null?i:`headlessui-switch-${D()}`,u=A(U,null),[c,x]=ne(d(()=>e.modelValue),o=>s("update:modelValue",o),d(()=>e.defaultChecked));function f(){x(!c.value)}let v=y(null),m=u===null?v:u.switchRef,w=te(d(()=>({as:e.as,type:n.type})),m);a({el:m,$el:m});function k(o){o.preventDefault(),f()}function K(o){o.key===P.Space?(o.preventDefault(),f()):o.key===P.Enter&&ie(o.currentTarget)}function z(o){o.preventDefault()}let h=d(()=>{var o,p;return(p=(o=ee(m))==null?void 0:o.closest)==null?void 0:p.call(o,"form")});return j(()=>{H([h],()=>{if(!h.value||e.defaultChecked===void 0)return;function o(){x(e.defaultChecked)}return h.value.addEventListener("reset",o),()=>{var p;(p=h.value)==null||p.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,value:p,form:G,tabIndex:T,...N}=e,M={checked:c.value},R={id:r,ref:m,role:"switch",type:w.value,tabIndex:T===-1?0:T,"aria-checked":c.value,"aria-labelledby":u==null?void 0:u.labelledby.value,"aria-describedby":u==null?void 0:u.describedby.value,onClick:k,onKeyup:K,onKeypress:z};return B(J,[o!=null&&c.value!=null?B(ae,W({features:se.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:c.value,form:G,disabled:N.disabled,name:o,value:p})):null,E({ourProps:R,theirProps:{...n,...X(N,["modelValue","defaultChecked"])},slot:M,attrs:n,slots:t,name:"Switch"})])}}}),me=ue;function pe(e,s){return C(),L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const ge={class:"isolate bg-white px-6 py-24 sm:py-32 lg:px-8"},fe=l("div",{class:"mx-auto max-w-2xl text-center"},[l("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," Contact sales "),l("p",{class:"mt-2 text-lg leading-8 text-gray-600"}," Aute magna irure deserunt veniam aliqua magna enim voluptate. ")],-1),ve={action:"#",method:"POST",class:"mx-auto mt-16 max-w-xl sm:mt-20"},be={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},ye=Z('<div><label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label><div class="mt-2.5"><input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div><label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label><div class="mt-2.5"><input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div class="sm:col-span-2"><label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label><div class="mt-2.5"><input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div class="sm:col-span-2"><label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label><div class="mt-2.5"><input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div>',4),xe={class:"sm:col-span-2"},he=l("label",{for:"phone-number",class:"block text-sm font-semibold leading-6 text-gray-900"},"Phone number",-1),_e={class:"relative mt-2.5"},we={class:"absolute inset-y-0 left-0 flex items-center"},ke=l("label",{for:"country",class:"sr-only"},"Country",-1),Se=l("select",{id:"country",name:"country",class:"h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"},[l("option",null,"US"),l("option",null,"CA"),l("option",null,"EU")],-1),Ce=l("input",{type:"tel",name:"phone-number",id:"phone-number",autocomplete:"tel",class:"block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,-1),Le=l("div",{class:"sm:col-span-2"},[l("label",{for:"message",class:"block text-sm font-semibold leading-6 text-gray-900"},"Message"),l("div",{class:"mt-2.5"},[l("textarea",{name:"message",id:"message",rows:"4",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})])],-1),Ee={class:"flex h-6 items-center"},Te=l("span",{class:"sr-only"},"Agree to policies",-1),Ne=l("a",{href:"#",class:"font-semibold text-indigo-600"},"privacy policy",-1),Be=l("div",{class:"mt-10"},[l("button",{type:"submit",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Let's talk ")],-1),Ve={__name:"FormContact",setup(e){const s=y(!1);return(n,t)=>(C(),L("div",ge,[fe,l("form",ve,[l("div",be,[ye,l("div",xe,[he,l("div",_e,[l("div",we,[ke,Se,g(b(pe),{class:"pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400","aria-hidden":"true"})]),Ce])]),Le,g(b(de),{as:"div",class:"flex gap-x-4 sm:col-span-2"},{default:S(()=>[l("div",Ee,[g(b(ce),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),class:V([s.value?"bg-indigo-600":"bg-gray-200","flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"])},{default:S(()=>[Te,l("span",{"aria-hidden":"true",class:V([s.value?"translate-x-3.5":"translate-x-0","h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"])]),g(b(me),{class:"text-sm leading-6 text-gray-600"},{default:S(()=>[$(" By selecting this, you agree to our "+Y(" ")+" "),Ne,$(". ")]),_:1})]),_:1})]),Be])]))}},Fe=_({__name:"contact",setup(e){return Q({title:"Contact | Novelize",ogTitle:"Novelize"}),(s,n)=>{const t=Ve,a=oe;return C(),L("div",null,[g(t),g(a)])}}});export{Fe as default};
