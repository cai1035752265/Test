import{O as i,a as r,aZ as l,b as c,ab as d,o as s,h as a,G as _,ae as u,q as o,j as f,z as m,i as n,cE as y,cF as v}from"./index.27013bb4.js";const C=r({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(y("data-v-119d0732"),e=e(),v(),e),k=["onClick"],$=h(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function g(e,b,x,B,I,S){const p=d("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:F=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,k)]),_:2},1032,["title"]))),128))],2)}var P=i(C,[["render",g],["__scopeId","data-v-119d0732"]]);export{P as default};
