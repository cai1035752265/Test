import{bH as o,a9 as a,b6 as d}from"./index.27013bb4.js";function c(r,s=150,n){let e=()=>{r()};e=d(e,s);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},i=()=>{window.removeEventListener("resize",e)};return o(()=>{t()}),a(()=>{i()}),[t,i]}export{c as u};
