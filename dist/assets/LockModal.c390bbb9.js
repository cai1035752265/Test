var f=(e,p,s)=>new Promise((m,r)=>{var d=o=>{try{a(s.next(o))}catch(n){r(n)}},t=o=>{try{a(s.throw(o))}catch(n){r(n)}},a=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,t);a((s=s.apply(e,p)).next())});import{O as w,a as y,b as $,s as F,f as _,ab as u,o as L,j as M,z as g,i,q as c,t as k,n as h,B as S,ac as b,c as I}from"./index.27013bb4.js";import{B as N,b as R}from"./index.93cba772.js";import{B as P,k as U}from"./useForm.c9af9988.js";import{u as V}from"./lock.e7970d45.js";import{h as q}from"./header.d801b988.js";import"./useWindowSizeFn.a00f0e8c.js";import"./FullscreenOutlined.dce6dc38.js";import"./index.6e38d89f.js";import"./index.98d02982.js";import"./DeleteOutlined.b1b0803e.js";import"./transButton.81634161.js";import"./useRefs.1f9270bc.js";import"./download.41360972.js";import"./index.d0772283.js";import"./uniqBy.359ac02a.js";const z=y({name:"LockModal",components:{BasicModal:N,BasicForm:P},setup(){const{t:e}=I(),{prefixCls:p}=$("header-lock-modal"),s=F(),m=V(),r=_(()=>{var l;return(l=s.getUserInfo)==null?void 0:l.realName}),[d,{closeModal:t}]=R(),[a,{validateFields:o,resetFields:n}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),m.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:l}=s.getUserInfo;return l||q});return{t:e,prefixCls:p,getRealName:r,register:d,registerForm:a,handleLock:v,avatar:B}}}),D=["src"];function j(e,p,s,m,r,d){const t=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return L(),M(o,b({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[i("div",{class:c(`${e.prefixCls}__entry`)},[i("div",{class:c(`${e.prefixCls}__header`)},[i("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,D),i("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),i("div",{class:c(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[S(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var se=w(z,[["render",j]]);export{se as default};
