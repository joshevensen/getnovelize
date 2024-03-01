import{_ as et}from"./nuxt-link.BH5chF1p.js";import{L as H,r as g,D as p,d as _,o as O,a as N,J as w,F as le,I as K,W as tt,E as Z,H as D,ai as nt,aj as lt,$ as ot,P as rt,b as P,c as S,e as c,g as T,w as B,B as ue,G as U,j as xe,t as oe,O as at}from"./entry.DBDf4X7E.js";import{f as de,s as ce,k as it}from"./description.wGONbxq7.js";import{a as x,u as Y,A as I,I as Pe,N as Ee,o as st}from"./keyboard.SSuBoWyW.js";import{l as ut,i as J}from"./open-closed.BUtW0UKA.js";import{_ as dt}from"./_plugin-vue_export-helper.DlAUqK2U.js";var ct=Object.defineProperty,ft=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_e=(e,t,n)=>(ft(e,typeof t!="symbol"?t+"":t,n),n);let vt=class{constructor(){_e(this,"current",this.detect()),_e(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},re=new vt;function j(e){if(re.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}let fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var k=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(k||{}),Se=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Se||{}),mt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(mt||{});function pt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{});function ht(e,t=0){var n;return e===((n=j(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(fe)},1(){let l=e;for(;l!==null;){if(l.matches(fe))return!0;l=l.parentElement}return!1}})}var gt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(gt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let wt=["textarea","input"].join(",");function yt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,wt))!=null?n:!1}function bt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),o=t(l);if(r===null||o===null)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ne(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?n?bt(e):e:pt(e);r.length>0&&a.length>1&&(a=a.filter(f=>!r.includes(f))),l=l??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(l))-1;if(t&4)return Math.max(0,a.indexOf(l))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},y=0,v=a.length,m;do{if(y>=v||y+v<=0)return 0;let f=d+y;if(t&16)f=(f+v)%v;else{if(f<0)return 3;if(f>=v)return 1}m=a[f],m==null||m.focus(u),y+=s}while(m!==i.activeElement);return t&6&&yt(m)&&m.select(),2}function Ae(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function xt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Ae()||xt()}function ee(e,t,n){re.isServer||H(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Ce(e,t,n){re.isServer||H(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function _t(e,t,n=p(()=>!0)){function l(o,i){if(!n.value||o.defaultPrevented)return;let a=i(o);if(a===null||!a.getRootNode().contains(a))return;let s=function d(u){return typeof u=="function"?d(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let d of s){if(d===null)continue;let u=d instanceof HTMLElement?d:x(d);if(u!=null&&u.contains(a)||o.composed&&o.composedPath().includes(u))return}return!ht(a,ke.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let r=g(null);ee("pointerdown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ee("mousedown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ee("click",o=>{Et()||r.value&&(l(o,()=>r.value),r.value=null)},!0),ee("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ce("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Lt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let A=[];Lt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&A[0]!==t.target&&(A.unshift(t.target),A=A.filter(n=>n!=null&&n.isConnected),A.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function he(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ge(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return he(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=ge();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}function Me(e,t,n,l){re.isServer||H(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}var G=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(G||{});function Ft(){let e=g(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Oe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=x(n);l instanceof HTMLElement&&t.add(l)}return t}var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});let W=Object.assign(_({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=g(null);l({el:r,$el:r});let o=p(()=>j(r)),i=g(!1);O(()=>i.value=!0),N(()=>i.value=!1),Tt({ownerDocument:o},p(()=>i.value&&!!(e.features&16)));let a=Pt({ownerDocument:o,container:r,initialFocus:p(()=>e.initialFocus)},p(()=>i.value&&!!(e.features&2)));St({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:a},p(()=>i.value&&!!(e.features&8)));let s=Ft();function d(m){let f=x(r);f&&(E=>E())(()=>{Y(s.value,{[G.Forwards]:()=>{ne(f,k.First,{skipElements:[m.relatedTarget]})},[G.Backwards]:()=>{ne(f,k.Last,{skipElements:[m.relatedTarget]})}})})}let u=g(!1);function y(m){m.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function v(m){if(!i.value)return;let f=Oe(e.containers);x(r)instanceof HTMLElement&&f.add(x(r));let E=m.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(De(f,E)||(u.value?ne(x(r),Y(s.value,{[G.Forwards]:()=>k.Next,[G.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&M(m.target)))}return()=>{let m={},f={ref:r,onKeydown:y,onFocusout:v},{features:E,initialFocus:L,containers:z,...R}=e;return w(le,[!!(E&4)&&w(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ce.Focusable}),I({ourProps:f,theirProps:{...t,...R},slot:m,attrs:t,slots:n,name:"FocusTrap"}),!!(E&4)&&w(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ce.Focusable})])}}}),{features:Ne});function $t(e){let t=g(A.slice());return K([e],([n],[l])=>{l===!0&&n===!1?he(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=A.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Tt({ownerDocument:e},t){let n=$t(t);O(()=>{H(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&M(n())},{flush:"post"})}),N(()=>{t.value&&M(n())})}function Pt({ownerDocument:e,container:t,initialFocus:n},l){let r=g(null),o=g(!1);return O(()=>o.value=!0),N(()=>o.value=!1),O(()=>{K([t,n,l],(i,a)=>{if(i.every((d,u)=>(a==null?void 0:a[u])===d)||!l.value)return;let s=x(t);s&&he(()=>{var d,u;if(!o.value)return;let y=x(n),v=(d=e.value)==null?void 0:d.activeElement;if(y){if(y===v){r.value=v;return}}else if(s.contains(v)){r.value=v;return}y?M(y):ne(s,k.First|k.NoScroll)===Se.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),r}function St({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;Me((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!r.value)return;let a=Oe(n);x(t)instanceof HTMLElement&&a.add(x(t));let s=l.value;if(!s)return;let d=i.target;d&&d instanceof HTMLElement?De(a,d)?(l.value=d,M(d)):(i.preventDefault(),i.stopPropagation(),M(s)):M(l.value)},!0)}function De(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function kt(e){let t=tt(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function At(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let i=t[r].call(n,...o);i&&(n=i,l.forEach(a=>a()))}}}function Ct(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function Mt(){return Ae()?{before({doc:e,d:t,meta:n}){function l(r){return n.containers.flatMap(o=>o()).some(o=>o.contains(r))}t.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=ge();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(r=window.scrollY)!=null?r:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=e.querySelector(d);u&&!l(u)&&(i=u)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let s=a.target;for(;s.parentElement&&l(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let s=a.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),t.add(()=>{var a;let s=(a=window.scrollY)!=null?a:window.pageYOffset;o!==s&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Ot(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Nt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=At(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ge(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Nt(n)},r=[Mt(),Ct(),Ot()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function Dt(e,t,n){let l=kt(C),r=p(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return K([e,t],([o,i],[a],s)=>{if(!o||!i)return;C.dispatch("PUSH",o,n);let d=!1;s(()=>{d||(C.dispatch("POP",a??o,n),d=!0)})},{immediate:!0}),r}let se=new Map,q=new Map;function Le(e,t=g(!0)){H(n=>{var l;if(!t.value)return;let r=x(e);if(!r)return;n(function(){var i;if(!r)return;let a=(i=q.get(r))!=null?i:1;if(a===1?q.delete(r):q.set(r,a-1),a!==1)return;let s=se.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,se.delete(r))});let o=(l=q.get(r))!=null?l:0;q.set(r,o+1),o===0&&(se.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function Ht({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=g(null),r=j(l);function o(){var i,a,s;let d=[];for(let u of e)u!==null&&(u instanceof HTMLElement?d.push(u):"value"in u&&u.value instanceof HTMLElement&&d.push(u.value));if(t!=null&&t.value)for(let u of t.value)d.push(u);for(let u of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(x(l))||u.contains((s=(a=x(l))==null?void 0:a.getRootNode())==null?void 0:s.host)||d.some(y=>u.contains(y))||d.push(u));return d}return{resolveContainers:o,contains(i){return o().some(a=>a.contains(i))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:w(de,{features:ce.Hidden,ref:l})}}}let He=Symbol("ForcePortalRootContext");function Rt(){return D(He,!1)}let Fe=_({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return Z(He,e.force),()=>{let{force:l,...r}=e;return I({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),Re=Symbol("StackContext");var ve=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ve||{});function Bt(){return D(Re,()=>{})}function It({type:e,enabled:t,element:n,onUpdate:l}){let r=Bt();function o(...i){l==null||l(...i),r(...i)}O(()=>{K(t,(i,a)=>{i?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&o(1,e,n)}),Z(Re,o)}function jt(e){let t=j(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let zt=_({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=g(null),r=p(()=>j(l)),o=Rt(),i=D(Be,null),a=g(o===!0||i==null?jt(l.value):i.resolveTarget()),s=g(!1);O(()=>{s.value=!0}),H(()=>{o||i!=null&&(a.value=i.resolveTarget())});let d=D(me,null),u=!1,y=ot();return K(l,()=>{if(u||!d)return;let v=x(l);v&&(N(d.register(v),y),u=!0)}),N(()=>{var v,m;let f=(v=r.value)==null?void 0:v.getElementById("headlessui-portal-root");f&&a.value===f&&a.value.children.length<=0&&((m=a.value.parentElement)==null||m.removeChild(a.value))}),()=>{if(!s.value||a.value===null)return null;let v={ref:l,"data-headlessui-portal":""};return w(nt,{to:a.value},I({ourProps:v,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),me=Symbol("PortalParentContext");function Vt(){let e=D(me,null),t=g([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let i=t.value.indexOf(o);i!==-1&&t.value.splice(i,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,_({name:"PortalWrapper",setup(o,{slots:i}){return Z(me,r),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let Be=Symbol("PortalGroupContext"),Wt=_({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=lt({resolveTarget(){return e.target}});return Z(Be,l),()=>{let{target:r,...o}=e;return I({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qt||{});let pe=Symbol("DialogContext");function Ie(e){let t=D(pe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ie),n}return t}let te="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ut=_({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:te},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o,i;let a=(o=e.id)!=null?o:`headlessui-dialog-${Pe()}`,s=g(!1);O(()=>{s.value=!0});let d=!1,u=p(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),y=g(0),v=ut(),m=p(()=>e.open===te&&v!==null?(v.value&J.Open)===J.Open:e.open),f=g(null),E=p(()=>j(f));if(r({el:f,$el:f}),!(e.open!==te||v!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof m.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value===te?void 0:e.open}`);let L=p(()=>s.value&&m.value?0:1),z=p(()=>L.value===0),R=p(()=>y.value>1),we=D(pe,null)!==null,[ze,Ve]=Vt(),{resolveContainers:ae,mainTreeNodeRef:ye,MainTreeNode:We}=Ht({portals:ze,defaultContainers:[p(()=>{var h;return(h=V.panelRef.value)!=null?h:f.value})]}),qe=p(()=>R.value?"parent":"leaf"),be=p(()=>v!==null?(v.value&J.Closing)===J.Closing:!1),Ue=p(()=>we||be.value?!1:z.value),Ge=p(()=>{var h,b,F;return(F=Array.from((b=(h=E.value)==null?void 0:h.querySelectorAll("body > *"))!=null?b:[]).find($=>$.id==="headlessui-portal-root"?!1:$.contains(x(ye))&&$ instanceof HTMLElement))!=null?F:null});Le(Ge,Ue);let Ye=p(()=>R.value?!0:z.value),Ke=p(()=>{var h,b,F;return(F=Array.from((b=(h=E.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find($=>$.contains(x(ye))&&$ instanceof HTMLElement))!=null?F:null});Le(Ke,Ye),It({type:"Dialog",enabled:p(()=>L.value===0),element:f,onUpdate:(h,b)=>{if(b==="Dialog")return Y(h,{[ve.Add]:()=>y.value+=1,[ve.Remove]:()=>y.value-=1})}});let Ze=it({name:"DialogDescription",slot:p(()=>({open:m.value}))}),Q=g(null),V={titleId:Q,panelRef:g(null),dialogState:L,setTitleId(h){Q.value!==h&&(Q.value=h)},close(){t("close",!1)}};Z(pe,V);let Qe=p(()=>!(!z.value||R.value));_t(ae,(h,b)=>{V.close(),rt(()=>b==null?void 0:b.focus())},Qe);let Xe=p(()=>!(R.value||L.value!==0));Me((i=E.value)==null?void 0:i.defaultView,"keydown",h=>{Xe.value&&(h.defaultPrevented||h.key===st.Escape&&(h.preventDefault(),h.stopPropagation(),V.close()))});let Je=p(()=>!(be.value||L.value!==0||we));return Dt(E,Je,h=>{var b;return{containers:[...(b=h.containers)!=null?b:[],ae]}}),H(h=>{if(L.value!==0)return;let b=x(f);if(!b)return;let F=new ResizeObserver($=>{for(let ie of $){let X=ie.target.getBoundingClientRect();X.x===0&&X.y===0&&X.width===0&&X.height===0&&V.close()}});F.observe(b),h(()=>F.disconnect())}),()=>{let{open:h,initialFocus:b,...F}=e,$={...n,ref:f,id:a,role:u.value,"aria-modal":L.value===0?!0:void 0,"aria-labelledby":Q.value,"aria-describedby":Ze.value},ie={open:L.value===0};return w(Fe,{force:!0},()=>[w(zt,()=>w(Wt,{target:f.value},()=>w(Fe,{force:!1},()=>w(W,{initialFocus:b,containers:ae,features:z.value?Y(qe.value,{parent:W.features.RestoreFocus,leaf:W.features.All&~W.features.FocusLock}):W.features.None},()=>w(Ve,{},()=>I({ourProps:$,theirProps:{...F,...n},slot:ie,attrs:n,slots:l,visible:L.value===0,features:Ee.RenderStrategy|Ee.Static,name:"Dialog"})))))),w(We)])}}}),Gt=_({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let o=(r=e.id)!=null?r:`headlessui-dialog-panel-${Pe()}`,i=Ie("DialogPanel");l({el:i.panelRef,$el:i.panelRef});function a(s){s.stopPropagation()}return()=>{let{...s}=e,d={id:o,ref:i.panelRef,onClick:a};return I({ourProps:d,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Yt(e,t){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Kt(e,t){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const je=""+new URL("logo.B74nby8Z.png",import.meta.url).href,Zt={class:"bg-white z-50"},Qt={class:"mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8","aria-label":"Global"},Xt={class:"flex lg:flex-1"},Jt=c("span",{class:"sr-only"},"Novelize",-1),en=c("img",{class:"h-8 w-auto",src:je,alt:"Novelize Logo"},null,-1),tn={class:"hidden lg:flex lg:gap-x-12"},nn={class:"flex lg:hidden"},ln=c("span",{class:"sr-only"},"Open main menu",-1),on=c("div",{class:"fixed inset-0 z-10"},null,-1),rn={class:"flex items-center gap-x-6"},an=c("span",{class:"sr-only"},"Novelize",-1),sn=c("img",{class:"h-8 w-auto",src:je,alt:"Novelize"},null,-1),un=c("span",{class:"sr-only"},"Close menu",-1),dn={class:"mt-6 flow-root"},cn={class:"-my-6 divide-y divide-gray-500/10"},fn={class:"space-y-2 py-6"},$e="https://app.getnovelize.com/login",Te="https://app.getnovelize.com/register",vn={__name:"PageHeader",setup(e){const t=[{name:"Features",href:"/features"},{name:"Pricing",href:"/pricing"},{name:"FAQ",href:"/faq"},{name:"Blog",href:"/blog"}],n=g(!1);return(l,r)=>{const o=et;return P(),S("header",Zt,[c("nav",Qt,[c("div",Xt,[T(o,{href:"/",class:"-m-1.5 p-1.5"},{default:B(()=>[Jt,en]),_:1})]),c("div",tn,[(P(),S(le,null,ue(t,i=>T(o,{key:i.name,href:i.href,class:"text-sm font-semibold leading-6 text-gray-900"},{default:B(()=>[xe(oe(i.name),1)]),_:2},1032,["href"])),64))]),c("div",{class:"flex flex-1 items-center justify-end gap-x-6"},[c("a",{href:$e,target:"_blank",class:"hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"},"Log in"),c("a",{href:Te,target:"_blank",class:"rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"},"Sign up")]),c("div",nn,[c("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:r[0]||(r[0]=i=>n.value=!0)},[ln,T(U(Yt),{class:"h-6 w-6","aria-hidden":"true"})])])]),T(U(Ut),{as:"div",class:"lg:hidden",onClose:r[2]||(r[2]=i=>n.value=!1),open:n.value},{default:B(()=>[on,T(U(Gt),{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:B(()=>[c("div",rn,[T(o,{href:"/",class:"-m-1.5 p-1.5"},{default:B(()=>[an,sn]),_:1}),c("a",{href:Te,target:"_blank",class:"ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Sign up"),c("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:r[1]||(r[1]=i=>n.value=!1)},[un,T(U(Kt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",dn,[c("div",cn,[c("div",fn,[(P(),S(le,null,ue(t,i=>T(o,{key:i.name,href:i.href,class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:B(()=>[xe(oe(i.name),1)]),_:2},1032,["href"])),64))]),c("div",{class:"py-6"},[c("a",{href:$e,target:"_blank",class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Log in")])])])]),_:1})]),_:1},8,["open"])])}}},mn=vn,pn={class:"bg-white"},hn={class:"mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"},gn={class:"-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-10","aria-label":"Footer"},wn=["href"],yn={class:"mt-10 text-center text-xs leading-5 text-gray-500"},bn={__name:"PageFooter",setup(e){const t=new Date().getFullYear(),n={main:[{name:"Home",href:"/"},{name:"Features",href:"/features"},{name:"Pricing",href:"/pricing"},{name:"FAQ",href:"/faq"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"},{name:"Privacy",href:"/privacy"},{name:"Terms",href:"/terms"}],social:[{name:"Facebook",href:"#",icon:_({render:()=>w("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[w("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])})},{name:"Instagram",href:"#",icon:_({render:()=>w("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[w("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})])})},{name:"X",href:"#",icon:_({render:()=>w("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[w("path",{d:"M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"})])})},{name:"YouTube",href:"#",icon:_({render:()=>w("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[w("path",{"fill-rule":"evenodd",d:"M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z","clip-rule":"evenodd"})])})}]};return(l,r)=>(P(),S("footer",pn,[c("div",hn,[c("nav",gn,[(P(!0),S(le,null,ue(n.main,o=>(P(),S("div",{key:o.name,class:"pb-6"},[c("a",{href:o.href,class:"text-sm leading-6 text-gray-600 hover:text-gray-900"},oe(o.name),9,wn)]))),128))]),c("p",yn," © 2016-"+oe(U(t))+" Novelize. All rights reserved. ",1)])]))}},xn=bn,En={};function _n(e,t){const n=mn,l=xn;return P(),S("div",null,[T(n),at(e.$slots,"default"),T(l)])}const An=dt(En,[["render",_n]]);export{An as default};