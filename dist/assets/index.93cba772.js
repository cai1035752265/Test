var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ee=(e,o,a)=>o in e?me(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,M=(e,o)=>{for(var a in o||(o={}))be.call(o,a)&&ee(e,a,o[a]);if(x)for(var a of x(o))ve.call(o,a)&&ee(e,a,o[a]);return e},E=(e,o)=>he(e,ye(o));var V=(e,o,a)=>new Promise((i,l)=>{var c=u=>{try{n(a.next(u))}catch(d){l(d)}},t=u=>{try{n(a.throw(u))}catch(d){l(d)}},n=u=>u.done?i(u.value):Promise.resolve(u.value).then(c,t);n((a=a.apply(e,o)).next())});import{c as se,X as z,k as s,aO as Ce,a as R,aR as Me,ce as He,n as H,ew as Se,cf as Fe,cI as ke,aW as $e,aX as Be,bh as Oe,v as m,ex as Pe,f as S,N as re,M as Te,as as ie,a6 as B,O as j,ab as y,bt as we,o as v,j as P,z as g,x as Re,h as q,af as O,a$ as Ne,aZ as De,aE as We,b as ce,G as Ee,l as Y,q as _e,B as G,t as U,ac as _,dG as je,bg as Ie,c8 as X,aa as ue,ad as te,ae as ne,ag as oe,ah as le,a8 as J,ev as Le,w as de,cj as Ve,a7 as A,a5 as Ae,dI as fe,a9 as qe,S as ze}from"./index.27013bb4.js";import{u as Xe}from"./useWindowSizeFn.a00f0e8c.js";import{F as Ye,a as Ge}from"./FullscreenOutlined.dce6dc38.js";const{t:ae}=se(),Ue={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ae("common.cancelText")},okText:{type:String,default:ae("common.okText")},closeFunc:Function},K=Object.assign({},Ue,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ze(e){const o=(l,c)=>getComputedStyle(l)[c],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const c=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const u=n.clientX,d=n.clientY,f=document.body.clientWidth,p=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,F=t.offsetLeft,k=f-t.offsetLeft-h,$=t.offsetTop,I=p-t.offsetTop-C,T=o(t,"left"),N=o(t,"top");let D=+T,W=+N;T.includes("%")?(D=+document.body.clientWidth*(+T.replace(/%/g,"")/100),W=+document.body.clientHeight*(+N.replace(/%/g,"")/100)):(D=+T.replace(/px/g,""),W=+N.replace(/px/g,"")),document.onmousemove=function(L){let r=L.clientX-u,b=L.clientY-d;-r>F?r=-F:r>k&&(r=k),-b>$?b=-$:b>I&&(b=I),t.style.cssText+=`;left:${r+D}px;top:${b+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(l)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&a(c)}};z(()=>{!s(e.visible)||!s(e.draggable)||Ce(()=>{i()},30)})}function Je(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Fe(e)}var Ke=R({name:"Modal",inheritAttrs:!1,props:K,emits:["cancel"],setup(e,{slots:o,emit:a}){const{visible:i,draggable:l,destroyOnClose:c}=Me(e),t=He();Ze({visible:i,destroyOnClose:c,draggable:l});const n=u=>{a("cancel",u)};return()=>{let u;const d=E(M(M({},s(t)),e),{onCancel:n});return H(ke,d,Je(u=Se(o))?u:{default:()=>[u]})}}});const pe=Symbol();function Qe(e){return $e(e,pe)}function Mt(){return Be(pe)}const xe={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},et=R({name:"ModalWrapper",components:{ScrollContainer:Oe},inheritAttrs:!1,props:xe,emits:["height-change","ext-height"],setup(e,{emit:o}){const a=m(null),i=m(null),l=m(0),c=m(0);let t=0;Xe(d.bind(null,!1)),Pe(i,()=>{d()},{attributes:!0,subtree:!0}),Qe({redoModalHeight:d});const n=S(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));z(()=>{e.useWrapper&&d()}),re(()=>e.fullScreen,f=>{d(),f?c.value=l.value:l.value=c.value}),Te(()=>{const{modalHeaderHeight:f,modalFooterHeight:p}=e;o("ext-height",f+p)}),ie(()=>{});function u(){return V(this,null,function*(){B(()=>{var p;const f=s(a);!f||(p=f==null?void 0:f.scrollTo)==null||p.call(f,0)})})}function d(){return V(this,null,function*(){if(!e.visible)return;const f=s(a);if(!f)return;const p=f.$el.parentElement;if(!!p){p.style.padding="0",yield B();try{const h=p.parentElement&&p.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,F=Number.parseInt(C);let k=window.innerHeight-F*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;F<40&&(k-=26),yield B();const $=s(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t>k?k:t,o("height-change",s(l))}catch(h){}}})}return{wrapperRef:a,spinRef:i,spinStyle:n,scrollTop:u,setModalHeight:d}}}),tt=["loading-tip"];function nt(e,o,a,i,l,c){const t=y("ScrollContainer"),n=we("loading");return v(),P(t,{ref:"wrapperRef"},{default:g(()=>[Re((v(),q("div",{ref:"spinRef",style:Ne(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,tt)),[[n,e.loading]])]),_:3},512)}var ot=j(et,[["render",nt]]);const lt=R({name:"ModalClose",components:{Tooltip:De,FullscreenExitOutlined:Ye,FullscreenOutlined:Ge,CloseOutlined:We},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:a}=ce("basic-modal-close"),{t:i}=se(),l=S(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:l,prefixCls:a,handleCancel:c,handleFullScreen:t}}});function at(e,o,a,i,l,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),u=y("FullscreenOutlined"),d=y("CloseOutlined");return v(),q("div",{class:_e(e.getClass)},[e.canFullscreen?(v(),q(Ee,{key:0},[e.fullScreen?(v(),P(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:g(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(v(),P(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:g(()=>[H(u,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):Y("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:g(()=>[H(d,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}var st=j(lt,[["render",at]]);const rt=R({name:"BasicModalFooter",props:K,emits:["ok","cancel"],setup(e,{emit:o}){function a(l){o("ok",l)}function i(l){o("cancel",l)}return{handleOk:a,handleCancel:i}}});function it(e,o,a,i,l,c){const t=y("a-button");return v(),q("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(v(),P(t,_({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:g(()=>[G(U(e.cancelText),1)]),_:1},16,["onClick"])):Y("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(v(),P(t,_({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:g(()=>[G(U(e.okText),1)]),_:1},16,["type","onClick","loading"])):Y("",!0),O(e.$slots,"appendFooter")])}var ct=j(rt,[["render",it]]);const ut=R({name:"BasicModalHeader",components:{BasicTitle:je},props:{helpMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"]});function dt(e,o,a,i,l,c){const t=y("BasicTitle");return v(),P(t,{helpMessage:e.helpMessage},{default:g(()=>[G(U(e.title),1)]),_:1},8,["helpMessage"])}var ft=j(ut,[["render",dt]]);function pt(e){const o=m(!1),a=S(()=>{const l=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${l} `:s(l)});function i(l){l&&l.stopPropagation(),o.value=!s(o)}return{getWrapClassName:a,handleFullScreen:i,fullScreenRef:o}}const gt=R({name:"BasicModal",components:{Modal:Ke,ModalWrapper:ot,ModalClose:st,ModalFooter:ct,ModalHeader:ft},inheritAttrs:!1,props:K,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:a}){const i=m(!1),l=m(null),c=m(null),{prefixCls:t}=ce("basic-modal"),n=m(0),u={setModalProps:T,emitVisible:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},d=J();d&&o("register",u,d.uid);const f=S(()=>M(M({},e),s(l))),{handleFullScreen:p,getWrapClassName:h,fullScreenRef:C}=pt({modalWrapperRef:c,extHeightRef:n,wrapClassName:Ie(f.value,"wrapClassName")}),F=S(()=>{const r=E(M({},s(f)),{visible:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(M({},r),{wrapClassName:s(h)})}),k=S(()=>{const r=E(M(M({},a),s(f)),{visible:s(i),wrapClassName:s(h)});return s(C)?X(r,["height","title"]):X(r,"title")}),$=S(()=>{if(!s(C))return s(F).height});z(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),re(()=>s(i),r=>{var b;o("visible-change",r),o("update:visible",r),d&&((b=u.emitVisible)==null||b.call(u,r,d.uid)),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function I(r){return V(this,null,function*(){var b,Q;if(r==null||r.stopPropagation(),!((Q=(b=r.target)==null?void 0:b.classList)!=null&&Q.contains(t+"-close--custom"))){if(e.closeFunc&&ue(e.closeFunc)){const ge=yield e.closeFunc();i.value=!ge;return}i.value=!1,o("cancel",r)}})}function T(r){l.value=Le(s(l)||{},r),Reflect.has(r,"visible")&&(i.value=!!r.visible),Reflect.has(r,"defaultFullscreen")&&(C.value=!!r.defaultFullscreen)}function N(r){o("ok",r)}function D(r){o("height-change",r)}function W(r){n.value=r}function L(r){!e.canFullscreen||(r.stopPropagation(),p(r))}return{handleCancel:I,getBindValue:k,getProps:F,handleFullScreen:p,fullScreenRef:C,getMergeProps:f,handleOk:N,visibleRef:i,omit:X,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:D,handleTitleDbClick:L,getWrapperHeight:$}}});function mt(e,o,a,i,l,c){const t=y("ModalClose"),n=y("ModalHeader"),u=y("ModalFooter"),d=y("ModalWrapper"),f=y("Modal");return v(),P(f,_(e.getBindValue,{onCancel:e.handleCancel}),te({default:g(()=>[H(d,_({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:g(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:g(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])])},e.$slots.footer?void 0:{name:"footer",fn:g(()=>[H(u,_(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onOk","onCancel"])])},ne(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onCancel"])}var ht=j(gt,[["render",mt]]);const w=de({}),Z=de({});function Ht(){const e=m(null),o=m(!1),a=m("");function i(t,n){if(!J())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=n,ie(()=>{e.value=null,o.value=!1,w[s(a)]=null}),!(s(o)&&Ve()&&t===s(e))&&(e.value=t,o.value=!0,t.emitVisible=(u,d)=>{Z[d]=u})}const l=()=>{const t=s(e);return t||fe("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},getVisible:S(()=>Z[~~s(a)]),redoModalHeight:()=>{var t,n;(n=(t=l())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,u=!0)=>{var p;if((p=l())==null||p.setModalProps({visible:t}),!n)return;const d=s(a);if(u){w[d]=null,w[d]=A(n);return}Ae(A(w[d]),A(n))||(w[d]=A(n))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})}};return[i,c]}const St=e=>{const o=m(null),a=J(),i=m(""),l=()=>{const t=s(o);return t||fe("useModalInner instance is undefined!"),t},c=(t,n)=>{qe(()=>{o.value=null}),i.value=n,o.value=t,a==null||a.emit("register",t,n)};return z(()=>{const t=w[s(i)];!t||!e||!ue(e)||B(()=>{e(t)})}),[c,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({loading:t})},getVisible:S(()=>Z[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=l())==null?void 0:n.redoModalHeight;t&&t()}}]},Ft=ze(ht);export{Ft as B,Ht as a,St as b,Mt as u};
