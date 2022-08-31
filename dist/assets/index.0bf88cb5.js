import{n as d,r as Ve,a as oe,w as Ue,N as De,v as re,M as qe,f as K,a1 as j,eV as gt,av as he,eW as bt,V as Xe,_ as g,a3 as We,a0 as ht,cN as Ze,bV as Y,Y as Ct,bI as Ce,a6 as Ee,X as Et,Z as ie,aZ as xe,dw as xt,au as ee,G as ce,a7 as _t,bQ as Ft,c3 as Bt,eX as Tt,b$ as Ie,b as Je,O as Ye,c7 as St,k as _e,ab as k,o as A,j as Q,z as P,h as V,ae as Qe,i as Fe,a$ as Dt,B as et,t as ae,l as Se,q as tt,b1 as Ot,J as wt}from"./index.27013bb4.js";import{T as Le}from"./index.b90f44dd.js";import{B as At}from"./index.58befacc.js";import{L as ne}from"./index.9222f784.js";import{A as ze}from"./index.c2d05780.js";import{T as Re}from"./transButton.81634161.js";import{C as kt}from"./CopyOutlined.ee7f2b63.js";import{E as Pt}from"./EditOutlined.560e9cce.js";import"./index.855c1df4.js";import"./useRefs.1f9270bc.js";import"./PlusOutlined.4e9172fe.js";import"./eagerComputed.5785a4b1.js";var Nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},jt=Nt;function Me(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){$t(e,r,a[r])})}return e}function $t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Oe=function(t,a){var n=Me({},t,a.attrs);return d(Ve,Me({},n,{icon:jt}),null)};Oe.displayName="BellOutlined";Oe.inheritAttrs=!1;var It=Oe,Lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},zt=Lt;function Ke(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){Rt(e,r,a[r])})}return e}function Rt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var we=function(t,a){var n=Ke({},t,a.attrs);return d(Ve,Ke({},n,{icon:zt}),null)};we.displayName="EnterOutlined";we.inheritAttrs=!1;var Mt=we,Kt=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},Gt=oe({name:"Editable",props:Kt(),setup:function(t,a){var n=a.emit,r=a.slots,l=Ue({current:t.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});De(function(){return t.value},function(m){l.current=m});var u=re();qe(function(){var m;if(u.value){var x=(m=u.value)===null||m===void 0?void 0:m.resizableTextArea,N=x==null?void 0:x.textArea;N.focus();var R=N.value.length;N.setSelectionRange(R,R)}});function f(m){u.value=m}function c(m){var x=m.target.value;l.current=x.replace(/[\r\n]/g,""),n("change",l.current)}function i(){l.inComposition=!0}function v(){l.inComposition=!1}function E(m){var x=m.keyCode;x===he.ENTER&&m.preventDefault(),!l.inComposition&&(l.lastKeyCode=x)}function p(m){var x=m.keyCode,N=m.ctrlKey,R=m.altKey,b=m.metaKey,C=m.shiftKey;l.lastKeyCode===x&&!l.inComposition&&!N&&!R&&!b&&!C&&(x===he.ENTER?(H(),n("end")):x===he.ESC&&(l.current=t.originContent,n("cancel")))}function G(){H(),n("end")}function H(){n("save",l.current.trim())}var z=K(function(){var m;return m={},j(m,"".concat(t.prefixCls),!0),j(m,"".concat(t.prefixCls,"-edit-content"),!0),j(m,"".concat(t.prefixCls,"-rtl"),t.direction==="rtl"),m});return function(){return d("div",{class:z.value},[d(gt,{ref:f,maxlength:t.maxlength,value:l.current,onChange:c,onKeydown:E,onKeyup:p,onCompositionstart:i,onCompositionend:v,onBlur:G,rows:1,autoSize:t.autoSize===void 0||t.autoSize},null),r.enterIcon?r.enterIcon({className:"".concat(t.prefixCls,"-edit-content-confirm")}):d(Mt,{class:"".concat(t.prefixCls,"-edit-content-confirm")},null)])}}}),Ht=Gt,Vt=3,Ut=8,D,Be={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function qt(e){var t=Array.prototype.slice.apply(e);return t.map(function(a){return"".concat(a,": ").concat(e.getPropertyValue(a),";")}).join("")}function nt(e,t){e.setAttribute("aria-hidden","true");var a=window.getComputedStyle(t),n=qt(a);e.setAttribute("style",n),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}function Xt(e){var t=document.createElement("div");nt(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var a=t.getBoundingClientRect().height;return document.body.removeChild(t),a}var Wt=function(e,t,a,n,r){D||(D=document.createElement("div"),D.setAttribute("aria-hidden","true"),document.body.appendChild(D));var l=t.rows,u=t.suffix,f=u===void 0?"":u,c=Xt(e),i=Math.round(c*l*100)/100;nt(D,e);var v=bt({render:function(){return d("div",{style:Be},[d("span",{style:Be},[a,f]),d("span",{style:Be},[n])])}});v.mount(D);function E(){var b=Math.round(D.getBoundingClientRect().height*100)/100;return b-.1<=i}if(E())return v.unmount(),{content:a,text:D.innerHTML,ellipsis:!1};var p=Array.prototype.slice.apply(D.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(b){var C=b.nodeType,S=b.data;return C!==Ut&&S!==""}),G=Array.prototype.slice.apply(D.childNodes[0].childNodes[1].cloneNode(!0).childNodes);v.unmount();var H=[];D.innerHTML="";var z=document.createElement("span");D.appendChild(z);var m=document.createTextNode(r+f);z.appendChild(m),G.forEach(function(b){D.appendChild(b)});function x(b){z.insertBefore(b,m)}function N(b,C){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.length,ye=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,U=Math.floor((S+w)/2),me=C.slice(0,U);if(b.textContent=me,S>=w-1)for(var q=w;q>=S;q-=1){var te=C.slice(0,q);if(b.textContent=te,E()||!te)return q===C.length?{finished:!1,vNode:C}:{finished:!0,vNode:te}}return E()?N(b,C,U,w,U):N(b,C,S,U,ye)}function R(b){var C=b.nodeType;if(C===Vt){var S=b.textContent||"",w=document.createTextNode(S);return x(w),N(w,S)}return{finished:!1,vNode:null}}return p.some(function(b){var C=R(b),S=C.finished,w=C.vNode;return w&&H.push(w),S}),{content:H,text:D.innerHTML,ellipsis:!0}},Zt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Jt=function(){return{prefixCls:String,direction:String,component:String}},Yt=oe({name:"ATypography",inheritAttrs:!1,props:Jt(),setup:function(t,a){var n=a.slots,r=a.attrs,l=Xe("typography",t),u=l.prefixCls,f=l.direction;return function(){var c,i=g(g({},t),r);i.prefixCls,i.class,i.direction;var v=i.component,E=v===void 0?"article":v,p=Zt(i,["prefixCls","class","direction","component"]);return d(E,We({class:ht(u.value,j({},"".concat(u.value,"-rtl"),f.value==="rtl"),r.class)},p),{default:function(){return[(c=n.default)===null||c===void 0?void 0:c.call(n)]}})}}}),O=Yt,Qt=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var a=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(l){t.addRange(l)}),a&&a.focus()}},en=Qt,Ge={"text/plain":"Text","text/html":"Url",default:"Text"},tn="Copy to clipboard: #{key}, Enter";function nn(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function an(e,t){var a,n,r,l,u,f=!1;t||(t={});var c=t.debug||!1;try{n=en(),r=document.createRange(),l=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(v){if(v.stopPropagation(),t.format)if(v.preventDefault(),typeof v.clipboardData=="undefined"){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var E=Ge[t.format]||Ge.default;window.clipboardData.setData(E,e)}else v.clipboardData.clearData(),v.clipboardData.setData(t.format,e);t.onCopy&&(v.preventDefault(),t.onCopy(v.clipboardData))}),document.body.appendChild(u),r.selectNodeContents(u),l.addRange(r);var i=document.execCommand("copy");if(!i)throw new Error("copy command was unsuccessful");f=!0}catch(v){c&&console.error("unable to copy using execCommand: ",v),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(E){c&&console.error("unable to copy using clipboardData: ",E),c&&console.error("falling back to prompt"),a=nn("message"in t?t.message:tn),window.prompt(a,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(r):l.removeAllRanges()),u&&document.body.removeChild(u),n()}return f}var rn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},on=Ze("webkitLineClamp"),ln=Ze("textOverflow"),He="...",le=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},un=oe({name:"Base",inheritAttrs:!1,props:le(),setup:function(t,a){var n=a.slots,r=a.attrs,l=a.emit,u=Xe("typography",t),f=u.prefixCls,c=u.direction,i=Ue({edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),v=re(),E=re(),p=K(function(){var o=t.ellipsis;return o?g({rows:1,expandable:!1},Y(o)==="object"?o:null):{}});qe(function(){i.clientRendered=!0}),Ct(function(){clearTimeout(i.copyId),Ce.cancel(i.rafId)}),De([function(){return p.value.rows},function(){return t.content}],function(){Ee(function(){S()})},{flush:"post",deep:!0,immediate:!0}),Et(function(){t.content===void 0&&(ie(!t.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),ie(!t.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function G(){var o,s;return t.ellipsis||t.editable?t.content:(s=(o=v.value)===null||o===void 0?void 0:o.$el)===null||s===void 0?void 0:s.innerText}function H(o){var s=p.value.onExpand;i.expanded=!0,s==null||s(o)}function z(o){o.preventDefault(),i.originContent=t.content,C(!0)}function m(o){x(o),C(!1)}function x(o){var s=b.value.onChange;o!==t.content&&(l("update:content",o),s==null||s(o))}function N(){var o,s;(s=(o=b.value).onCancel)===null||s===void 0||s.call(o),C(!1)}function R(o){o.preventDefault();var s=t.copyable,y=g({},Y(s)==="object"?s:null);y.text===void 0&&(y.text=G()),an(y.text||""),i.copied=!0,Ee(function(){y.onCopy&&y.onCopy(),i.copyId=setTimeout(function(){i.copied=!1},3e3)})}var b=K(function(){var o=t.editable;return o?g({editing:i.edit},Y(o)==="object"?o:null):{editing:i.edit}});function C(o){var s=b.value.onStart;o&&s&&s(),i.edit=o,Ee(function(){var y;o||(y=E.value)===null||y===void 0||y.focus()})}function S(){Ce.cancel(i.rafId),i.rafId=Ce(function(){ye()})}var w=K(function(){var o=p.value,s=o.rows,y=o.expandable,F=o.suffix,T=o.onEllipsis,h=o.tooltip;return F||h||t.editable||t.copyable||y||T?!1:s===1?ln:on}),ye=function(){var s,y,F=i.ellipsisText,T=i.isEllipsis,h=p.value,I=h.rows,$=h.suffix,B=h.onEllipsis;if(!(!I||I<0||!(!((s=v.value)===null||s===void 0)&&s.$el)||i.expanded||t.content===void 0)&&!w.value){var _=Wt((y=v.value)===null||y===void 0?void 0:y.$el,{rows:I,suffix:$},t.content,Ae(!0),He),X=_.content,W=_.text,M=_.ellipsis;(F!==W||i.isEllipsis!==M)&&(i.ellipsisText=W,i.ellipsisContent=X,i.isEllipsis=M,T!==M&&B&&B(M))}};function U(o,s){var y=o.mark,F=o.code,T=o.underline,h=o.delete,I=o.strong,$=o.keyboard,B=s;function _(X,W){if(!!X){var M=function(){return B}();B=d(W,null,{default:function(){return[M]}})}}return _(I,"strong"),_(T,"u"),_(h,"del"),_(F,"code"),_(y,"mark"),_($,"kbd"),B}function me(o){var s=p.value,y=s.expandable,F=s.symbol;if(!y||!o&&(i.expanded||!i.isEllipsis))return null;var T=(n.ellipsisSymbol?n.ellipsisSymbol():F)||i.expandStr;return d("a",{key:"expand",class:"".concat(f.value,"-expand"),onClick:H,"aria-label":i.expandStr},[T])}function q(){if(!!t.editable){var o=t.editable,s=o.tooltip,y=o.triggerType,F=y===void 0?["icon"]:y,T=n.editableIcon?n.editableIcon():d(Pt,{role:"button"},null),h=n.editableTooltip?n.editableTooltip():i.editStr,I=typeof h=="string"?h:"";return F.indexOf("icon")!==-1?d(xe,{key:"edit",title:s===!1?"":h},{default:function(){return[d(Re,{ref:E,class:"".concat(f.value,"-edit"),onClick:z,"aria-label":I},{default:function(){return[T]}})]}}):null}}function te(){if(!!t.copyable){var o=t.copyable.tooltip,s=i.copied?i.copiedStr:i.copyStr,y=n.copyableTooltip?n.copyableTooltip({copied:i.copied}):s,F=typeof y=="string"?y:"",T=i.copied?d(xt,null,null):d(kt,null,null),h=n.copyableIcon?n.copyableIcon({copied:!!i.copied}):T;return d(xe,{key:"copy",title:o===!1?"":y},{default:function(){return[d(Re,{class:["".concat(f.value,"-copy"),j({},"".concat(f.value,"-copy-success"),i.copied)],onClick:R,"aria-label":F},{default:function(){return[h]}})]}})}}function lt(){var o=r.class,s=r.style,y=b.value,F=y.maxlength,T=y.autoSize,h=y.onEnd;return d(Ht,{class:o,style:s,prefixCls:f.value,value:t.content,originContent:i.originContent,maxlength:F,autoSize:T,onSave:m,onChange:x,onCancel:N,onEnd:h,direction:c.value},{enterIcon:n.editableEnterIcon})}function Ae(o){return[me(o),q(),te()].filter(function(s){return s})}return function(){var o,s=b.value,y=s.editing,F=s.triggerType,T=F===void 0?["icon"]:F,h=t.ellipsis||t.editable?t.content!==void 0?t.content:(o=n.default)===null||o===void 0?void 0:o.call(n):n.default?n.default():t.content;return y?lt():d(Bt,{componentName:"Text",children:function($){var B,_=g(g({},t),r),X=_.type,W=_.disabled;_.content;var M=_.class,ke=_.style,Pe=rn(_,["type","disabled","content","class","style"]),ge=p.value,L=ge.rows,Ne=ge.suffix,be=ge.tooltip,ut=$.edit,st=$.copy,ct=$.copied,dt=$.expand;i.editStr=ut,i.copyStr=st,i.copiedStr=ct,i.expandStr=dt;var pt=ee(Pe,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),se=w.value,ft=L===1&&se,je=L&&L>1&&se,Z=h,vt;if(L&&i.isEllipsis&&!i.expanded&&!se){var $e=Pe.title,J=$e||"";!$e&&(typeof h=="string"||typeof h=="number")&&(J=String(h)),J=J==null?void 0:J.slice(String(i.ellipsisContent||"").length),Z=d(ce,null,[_t(i.ellipsisContent),d("span",{title:J,"aria-hidden":"true"},[He]),Ne])}else Z=d(ce,null,[h,Ne]);Z=U(t,Z);var yt=be&&L&&i.isEllipsis&&!i.expanded&&!se,mt=n.ellipsisTooltip?n.ellipsisTooltip():be;return d(Ft,{onResize:S,disabled:!L},{default:function(){return[d(O,We({ref:v,class:[(B={},j(B,"".concat(f.value,"-").concat(X),X),j(B,"".concat(f.value,"-disabled"),W),j(B,"".concat(f.value,"-ellipsis"),L),j(B,"".concat(f.value,"-single-line"),L===1&&!i.isEllipsis),j(B,"".concat(f.value,"-ellipsis-single-line"),ft),j(B,"".concat(f.value,"-ellipsis-multiple-line"),je),B),M],style:g(g({},ke),{WebkitLineClamp:je?L:void 0}),"aria-label":vt,direction:c.value,onClick:T.indexOf("text")!==-1?z:function(){}},pt),{default:function(){return[yt?d(xe,{title:be===!0?h:mt},{default:function(){return[d("span",null,[Z])]}}):Z,Ae()]}})]}})}},null)}}}),ue=un,sn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},cn=function(){return ee(g(g({},le()),{ellipsis:{type:Boolean,default:void 0}}),["component"])},de=function(t,a){var n=a.slots,r=a.attrs,l=g(g({},t),r),u=l.ellipsis,f=l.rel,c=sn(l,["ellipsis","rel"]);ie(Y(u)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var i=g(g({},c),{rel:f===void 0&&c.target==="_blank"?"noopener noreferrer":f,ellipsis:!!u,component:"a"});return delete i.navigate,d(ue,i,n)};de.displayName="ATypographyLink";de.inheritAttrs=!1;de.props=cn();var at=de,dn=function(){return ee(le(),["component"])},pe=function(t,a){var n=a.slots,r=a.attrs,l=g(g(g({},t),{component:"div"}),r);return d(ue,l,n)};pe.displayName="ATypographyParagraph";pe.inheritAttrs=!1;pe.props=dn();var rt=pe,pn=function(){return g(g({},ee(le(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}})},fe=function(t,a){var n=a.slots,r=a.attrs,l=t.ellipsis;ie(Y(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var u=g(g(g({},t),{ellipsis:l&&Y(l)==="object"?ee(l,["expandable","rows"]):l,component:"span"}),r);return d(ue,u,n)};fe.displayName="ATypographyText";fe.inheritAttrs=!1;fe.props=pn();var it=fe,fn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},vn=Tt(1,2,3,4,5),yn=function(){return g(g({},ee(le(),["component","strong"])),{level:Number})},ve=function(t,a){var n=a.slots,r=a.attrs,l=t.level,u=l===void 0?1:l,f=fn(t,["level"]),c;vn.indexOf(u)!==-1?c="h".concat(u):(ie(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),c="h1");var i=g(g(g({},f),{component:c}),r);return d(ue,i,n)};ve.displayName="ATypographyTitle";ve.inheritAttrs=!1;ve.props=yn();var ot=ve;O.Text=it;O.Title=ot;O.Paragraph=rt;O.Link=at;O.Base=ue;O.install=function(e){return e.component(O.name,O),e.component(O.Text.displayName,it),e.component(O.Title.displayName,ot),e.component(O.Paragraph.displayName,rt),e.component(O.Link.displayName,at),e};const Te=[{key:"1",name:"\u901A\u77E5",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u663E\u793A\u7701\u7565\u53F7\uFF0C\u672C\u4F8B\u4E2D\u6807\u9898\u884C\u6570\u5DF2\u8BBE\u4E3A1\u884C\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"\u6D88\u606F",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6807\u9898",description:"\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"\u5F85\u529E",list:[{id:"000000009",avatar:"",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8",datetime:"",extra:"\u672A\u5F00\u59CB",color:"",type:"3"},{id:"000000010",avatar:"",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716 \u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",datetime:"",extra:"\u9A6C\u4E0A\u5230\u671F",color:"red",type:"3"},{id:"000000011",avatar:"",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u5DF2\u8017\u65F6 8 \u5929",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u8FDB\u884C\u4E2D",color:"blue",type:"3"}]}];const mn=oe({components:{[ze.name]:ze,[ne.name]:ne,[ne.Item.name]:ne.Item,AListItemMeta:ne.Item.Meta,ATypographyParagraph:O.Paragraph,[Ie.name]:Ie},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(e,{emit:t}){const{prefixCls:a}=Je("header-notify-list"),n=re(e.currentPage||1),r=K(()=>{const{pageSize:c,list:i}=e;if(c===!1)return[];let v=St(c)?c:5;return i.slice(v*(_e(n)-1),v*_e(n))});De(()=>e.currentPage,c=>{n.value=c});const l=K(()=>!!e.onTitleClick),u=K(()=>{const{list:c,pageSize:i}=e;return i>0&&c&&c.length>i?{total:c.length,pageSize:i,current:_e(n),onChange(v){n.value=v,t("update:currentPage",v)}}:!1});function f(c){e.onTitleClick&&e.onTitleClick(c)}return{prefixCls:a,getPagination:u,getData:r,handleTitleClick:f,isTitleClickable:l}}}),gn={class:"title"},bn={key:0,class:"extra"},hn={key:1},Cn={key:0,class:"description"},En={class:"datetime"};function xn(e,t,a,n,r,l){const u=k("a-typography-paragraph"),f=k("a-tag"),c=k("a-avatar"),i=k("a-list-item-meta"),v=k("a-list-item"),E=k("a-list");return A(),Q(E,{class:tt(e.prefixCls),bordered:"",pagination:e.getPagination},{default:P(()=>[(A(!0),V(ce,null,Qe(e.getData,p=>(A(),Q(v,{key:p.id,class:"list-item"},{default:P(()=>[d(i,null,{title:P(()=>[Fe("div",gn,[d(u,{onClick:G=>e.handleTitleClick(p),style:Dt([{width:"100%","margin-bottom":"0 !important"},{cursor:e.isTitleClickable?"pointer":""}]),delete:!!p.titleDelete,ellipsis:e.$props.titleRows&&e.$props.titleRows>0?{rows:e.$props.titleRows,tooltip:!!p.title}:!1,content:p.title},null,8,["onClick","style","delete","ellipsis","content"]),p.extra?(A(),V("div",bn,[d(f,{class:"tag",color:p.color},{default:P(()=>[et(ae(p.extra),1)]),_:2},1032,["color"])])):Se("",!0)])]),avatar:P(()=>[p.avatar?(A(),Q(c,{key:0,class:"avatar",src:p.avatar},null,8,["src"])):(A(),V("span",hn,ae(p.avatar),1))]),description:P(()=>[Fe("div",null,[p.description?(A(),V("div",Cn,[d(u,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:e.$props.descRows&&e.$props.descRows>0?{rows:e.$props.descRows,tooltip:!!p.description}:!1,content:p.description},null,8,["ellipsis","content"])])):Se("",!0),Fe("div",En,ae(p.datetime),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class","pagination"])}var _n=Ye(mn,[["render",xn],["__scopeId","data-v-313258aa"]]);const Fn=oe({components:{Popover:Ot,BellOutlined:It,Tabs:Le,TabPane:Le.TabPane,Badge:At,NoticeList:_n},setup(){const{prefixCls:e}=Je("header-notify"),{createMessage:t}=wt(),a=re(Te),n=K(()=>{let l=0;for(let u=0;u<Te.length;u++)l+=Te[u].list.length;return l});function r(l){t.success("\u4F60\u70B9\u51FB\u4E86\u901A\u77E5\uFF0CID="+l.id),l.titleDelete=!l.titleDelete}return{prefixCls:e,listData:a,count:n,onNoticeClick:r,numberStyle:{}}}}),Bn={key:0};function Tn(e,t,a,n,r,l){const u=k("BellOutlined"),f=k("Badge"),c=k("NoticeList"),i=k("TabPane"),v=k("Tabs"),E=k("Popover");return A(),V("div",{class:tt(e.prefixCls)},[d(E,{title:"",trigger:"click",overlayClassName:`${e.prefixCls}__overlay`},{content:P(()=>[d(v,null,{default:P(()=>[(A(!0),V(ce,null,Qe(e.listData,p=>(A(),Q(i,{key:p.key},{tab:P(()=>[et(ae(p.name)+" ",1),p.list.length!==0?(A(),V("span",Bn,"("+ae(p.list.length)+")",1)):Se("",!0)]),default:P(()=>[p.key==="1"?(A(),Q(c,{key:0,list:p.list,onTitleClick:e.onNoticeClick},null,8,["list","onTitleClick"])):(A(),Q(c,{key:1,list:p.list},null,8,["list"]))]),_:2},1024))),128))]),_:1})]),default:P(()=>[d(f,{count:e.count,dot:"",numberStyle:e.numberStyle},{default:P(()=>[d(u)]),_:1},8,["count","numberStyle"])]),_:1},8,["overlayClassName"])],2)}var Kn=Ye(Fn,[["render",Tn]]);export{Kn as default};
