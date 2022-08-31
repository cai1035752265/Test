import{a as B,T as q,v as A,V as H,cn as J,f as K,co as U,bV as Y,cd as Z,N as G,a6 as I,M as ee,aD as M,a1 as o,n as c,_ as $,bQ as ae,a3 as h,cp as re,$ as te,bS as ne,b1 as le}from"./index.27013bb4.js";import{e as ie}from"./eagerComputed.5785a4b1.js";var oe=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:q.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},se=B({name:"AAvatar",inheritAttrs:!1,props:oe(),slots:["icon"],setup:function(e,S){var P=S.slots,l=S.attrs,g=A(!0),p=A(!1),x=A(1),i=A(null),y=A(null),j=H("avatar",e),m=j.prefixCls,k=J(),n=K(function(){return e.size==="default"?k.value:e.size}),E=U(),u=ie(function(){if(Y(e.size)==="object"){var a=Z.find(function(t){return E.value[t]}),r=e.size[a];return r}}),N=function(r){return u.value?{width:"".concat(u.value,"px"),height:"".concat(u.value,"px"),lineHeight:"".concat(u.value,"px"),fontSize:"".concat(r?u.value/2:18,"px")}:{}},v=function(){if(!(!i.value||!y.value)){var r=i.value.offsetWidth,t=y.value.offsetWidth;if(r!==0&&t!==0){var s=e.gap,z=s===void 0?4:s;z*2<t&&(x.value=t-z*2<r?(t-z*2)/r:1)}}},b=function(){var r=e.loadError,t=r==null?void 0:r();t!==!1&&(g.value=!1)};return G(function(){return e.src},function(){I(function(){g.value=!0,x.value=1})}),G(function(){return e.gap},function(){I(function(){v()})}),ee(function(){I(function(){v(),p.value=!0})}),function(){var a,r,t=e.shape,s=e.src,z=e.alt,V=e.srcset,w=e.draggable,F=e.crossOrigin,C=M(P,e,"icon"),f=m.value,L=(a={},o(a,"".concat(l.class),!!l.class),o(a,f,!0),o(a,"".concat(f,"-lg"),n.value==="large"),o(a,"".concat(f,"-sm"),n.value==="small"),o(a,"".concat(f,"-").concat(t),t),o(a,"".concat(f,"-image"),s&&g.value),o(a,"".concat(f,"-icon"),C),a),D=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:C?"".concat(n.value/2,"px"):"18px"}:{},R=(r=P.default)===null||r===void 0?void 0:r.call(P),_;if(s&&g.value)_=c("img",{draggable:w,src:s,srcset:V,onError:b,alt:z,crossorigin:F},null);else if(C)_=C;else if(p.value||x.value!==1){var O="scale(".concat(x.value,") translateX(-50%)"),Q={msTransform:O,WebkitTransform:O,transform:O},X=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};_=c(ae,{onResize:v},{default:function(){return[c("span",{class:"".concat(f,"-string"),ref:i,style:$($({},X),Q)},[R])]}})}else _=c("span",{class:"".concat(f,"-string"),ref:i,style:{opacity:0}},[R]);return c("span",h(h({},l),{},{ref:y,class:L,style:[D,N(!!C),l.style]}),[_])}}}),T=se,ce=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},ue=B({name:"AAvatarGroup",inheritAttrs:!1,props:ce(),setup:function(e,S){var P=S.slots,l=S.attrs,g=H("avatar-group",e),p=g.prefixCls,x=g.direction;return re(e),function(){var i,y=e.maxPopoverPlacement,j=y===void 0?"top":y,m=e.maxCount,k=e.maxStyle,n=e.maxPopoverTrigger,E=n===void 0?"hover":n,u=(i={},o(i,p.value,!0),o(i,"".concat(p.value,"-rtl"),x.value==="rtl"),o(i,"".concat(l.class),!!l.class),i),N=M(P,e),v=te(N).map(function(t,s){return ne(t,{key:"avatar-key-".concat(s)})}),b=v.length;if(m&&m<b){var a=v.slice(0,m),r=v.slice(m,b);return a.push(c(le,{key:"avatar-popover-key",content:r,trigger:E,placement:j,overlayClassName:"".concat(p.value,"-popover")},{default:function(){return[c(T,{style:k},{default:function(){return["+".concat(b-m)]}})]}})),c("div",h(h({},l),{},{class:u,style:l.style}),[a])}return c("div",h(h({},l),{},{class:u,style:l.style}),[v])}}}),W=ue;T.Group=W;T.install=function(d){return d.component(T.name,T),d.component(W.name,W),d};export{T as A};
