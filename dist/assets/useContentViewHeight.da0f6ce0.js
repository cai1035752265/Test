var H=(t,i,e)=>new Promise((r,o)=>{var f=n=>{try{u(e.next(n))}catch(s){o(s)}},w=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(f,w);u((e=e.apply(t,i)).next())});import{aW as d,v as a,f as m,k as c}from"./index.27013bb4.js";import{u as v}from"./useWindowSizeFn.a00f0e8c.js";const l=Symbol();function p(t){return d(t,l,{native:!0})}const g=a(0),h=a(0);function k(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function F(){const t=a(window.innerHeight),i=a(window.innerHeight),e=m(()=>c(t)-c(g)-c(h)||0);v(()=>{t.value=window.innerHeight},100,{immediate:!0});function r(o){return H(this,null,function*(){i.value=o})}p({contentHeight:e,setPageHeight:r,pageHeight:i})}export{k as a,F as u};
