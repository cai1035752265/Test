var me=Object.defineProperty,de=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var oe=(t,o,e)=>o in t?me(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,F=(t,o)=>{for(var e in o||(o={}))ye.call(o,e)&&oe(t,e,o[e]);if(ne)for(var e of ne(o))_e.call(o,e)&&oe(t,e,o[e]);return t},Z=(t,o)=>de(t,ce(o));var K=(t,o,e)=>new Promise((E,k)=>{var T=b=>{try{C(e.next(b))}catch(A){k(A)}},U=b=>{try{C(e.throw(b))}catch(A){k(A)}},C=b=>b.done?E(b.value):Promise.resolve(b.value).then(T,U);C((e=e.apply(t,o)).next())});import{n as c,r as fe,cL as be,bE as ge,a as he,c as Ce,w as ie,a6 as re,cM as Ie,O as Fe,cI as Oe,cJ as we,cH as te,ab as O,o as f,j as I,z as _,i as pe,ac as Ee,h as q,ae as le,l as w,G as x,B as P,t as ae}from"./index.27013bb4.js";var ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},Se=ke;function ve(t){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?Object(arguments[o]):{},E=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(E=E.concat(Object.getOwnPropertySymbols(e).filter(function(k){return Object.getOwnPropertyDescriptor(e,k).enumerable}))),E.forEach(function(k){Be(t,k,e[k])})}return t}function Be(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var se=function(o,e){var E=ve({},o,e.attrs);return c(fe,ve({},E,{icon:Se}),null)};se.displayName="MinusCircleOutlined";se.inheritAttrs=!1;var Ae=se;function Me(t){return be.post({url:"/TestApi/DateProcess/getDate",data:t})}const Ue=ge({id:"app-test",state:()=>({previewData:[]}),getters:{getTest(){return this.previewData&&Object.keys(this.previewData).length>0?this.previewData:[]}},actions:{setPreviewInfo(t){this.previewData=t},getPreviewInfo(t){return K(this,null,function*(){try{const o=yield Me(t.newDates);return this.setPreviewInfo(o),o}catch(o){}})}}});const Ne=he({components:{MinusCircleOutlined:Ae},props:["datesOptions"],setup(t,o){const{t:e}=Ce(),E=Ue(),k=[{label:e("routes.test.interval"),value:0},{label:e("routes.test.complex"),value:1}],T=[{label:e("routes.test.type_include"),value:1},{label:e("routes.test.type_not_contain"),value:0}],U=[{label:e("routes.test.type_today"),value:410,level:"41"},{label:e("routes.test.type_this_week"),value:510,level:"51"},{label:e("routes.test.type_this_month"),value:610,level:"61"},{label:e("routes.test.type_this_quarter"),value:710,level:"71"},{label:e("routes.test.type_this_year"),value:810,level:"81"},{label:e("routes.test.type_every_year"),value:830,level:"82"}],C=[{label:e("routes.test.type_day"),value:400,level:"41"},{label:e("routes.test.type_week"),value:500,level:"51"},{label:e("routes.test.type_month"),value:600,level:"61"},{label:e("routes.test.type_quarter"),value:700,level:"71"},{label:e("routes.test.type_year"),value:800,level:"81"},{label:e("routes.test.type_day_to_day"),value:420,level:"40"},{label:e("routes.test.type_week_to_week"),value:520,level:"50"},{label:e("routes.test.type_month_to_month"),value:620,level:"60"},{label:e("routes.test.type_quarter_to_quarter"),value:720,level:"70"},{label:e("routes.test.type_year_to_year"),value:820,level:"80"}],b=[{label:e("routes.test.type_second"),value:100,level:"11"},{label:e("routes.test.type_minute"),value:200,level:"21"},{label:e("routes.test.type_hour"),value:300,level:"31"},{label:e("routes.test.type_day"),value:400,level:"41"},{label:e("routes.test.type_week"),value:500,level:"51"},{label:e("routes.test.type_month"),value:600,level:"61"},{label:e("routes.test.type_quarter"),value:700,level:"71"},{label:e("routes.test.type_year"),value:800,level:"81"},{label:e("routes.test.type_working_day"),value:501,level:"52"},{label:e("routes.test.type_off_day"),value:502,level:"52"},{label:e("routes.test.type_first_half_month"),value:601,level:"62"},{label:e("routes.test.type_second_half_month"),value:602,level:"62 "},{label:e("routes.test.type_early"),value:603,level:"62"},{label:e("routes.test.type_mid"),value:604,level:"62"},{label:e("routes.test.type_late"),value:605,level:"62 "},{label:e("routes.test.type_first_half_year"),value:801,level:"82"},{label:e("routes.test.type_second_half_year"),value:802,level:"82"},{label:e("routes.test.holidays"),value:803,level:"82"}],A=[{label:e("routes.test.new_year"),value:8030,level:"82"},{label:e("routes.test.spring_festival"),value:8031,level:"82"},{label:e("routes.test.ching_ming_festival"),value:8032,level:"82"},{label:e("routes.test.labor_day"),value:8033,level:"82"},{label:e("routes.test.dragon_boat_festival"),value:8034,level:"82"},{label:e("routes.test.moon_festival"),value:8035,level:"82"},{label:e("routes.test.national_day"),value:8036,level:"82"}],z={"800_700":{min:-4,max:4},"800_600":{min:-12,max:12},"800_500":{min:-53,max:53},"800_400":{min:-366,max:366},"700_600":{min:-6,max:6},"700_400":{min:-183,max:183},"600_500":{min:-5,max:5},"600_400":{min:-31,max:31},"500_400":{min:-7,max:7},"400_300":{min:-23,max:23},"300_200":{min:-59,max:59},"200_100":{min:-59,max:59}},B=[{label:e("routes.test.type_every"),value:1},{label:e("routes.test.type_the"),value:2}],S={isContain:1,type1:"",value1:0,type2:"",value2:0,type3:"",secondOptions:[],multipleItems:[]},s=ie({modalState:{editName:"",editIndex:0,type:"add",visible:!1},formDateDatas:[F({},S)],previewData:[],loading:!1,form:[]});let g=ie({name:"",dates:""});document.addEventListener("keydown",a=>{!s.modalState.visible||a.key==="Enter"&&a.target.nodeName==="INPUT"&&re(()=>{s.form.length===0&&(s.form=a.target.form);const n=[...s.form].indexOf(a.target);n+1===s.form.elements.length?document.getElementById("submit").focus():s.form.elements[n+1].focus(),a.preventDefault()})});const J=()=>{s.modalState={editName:"",editIndex:0,type:"add",visible:!0}},D=(a,n)=>{g.name=a.label,g.dates=a.value,JSON.parse(a.value).newDates.map((m,v)=>{const{isContain:r,type1:d,value1:M,type2:Q,value2:W,type3:X,multipleDate:Y}=m;R({isContain:r,type1:d,value1:M,type2:Q,value2:W,type3:X},Y,v)}),s.modalState={editName:a.label,editIndex:n,type:"edit",visible:!0}},l={name:[{required:!0,validator:(a,n)=>K(this,null,function*(){return n===""?Promise.reject(e("routes.test.requiredMessage")+e("routes.test.mode_name")):/^[a-zA-z]*$/.test(n)?Promise.resolve():Promise.reject("\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD")}),trigger:"change"}]};let{validate:h,validateInfos:H}=Ie(g,l,{onValidate:(...a)=>console.log("args",...a)});const i=()=>{s.formDateDatas=[...s.formDateDatas,F({},S)],re(()=>{const a=document.getElementById("form-box");a.scrollTop=a.scrollHeight,a.scrollTop,a.scrollHeight})},u=a=>{Oe.confirm({title:e("routes.test.are_sure_delete")+"?",icon:c(we),onOk(){s.formDateDatas=[...s.formDateDatas.slice(0,a),...s.formDateDatas.slice(a+1)],te.success(e("routes.test.delete")+e("routes.test.succeed"))},onCancel(){}})},R=(a,n,p)=>{let m=Z(F({},a),{multipleItems:[]});N(a.type1,U.filter(v=>v.value===a.type1)[0],"type1",p),a.type1!==830&&N(a.type2,C.filter(v=>v.value===a.type2)[0],"type2",p),n.forEach((v,r)=>{const d=v.split("_").map(M=>M!==""?+M:"");r>0&&j(+n[r-1].split("_")[2],r-1,2,p),m.multipleItems=[...m.multipleItems.slice(0,r),Z(F({},s.formDateDatas[p].multipleItems[r]),{value:d}),...s.formDateDatas[p].multipleItems.slice(r+1)]}),s.formDateDatas[p]=F(F({},s.formDateDatas[p]),m)},$=a=>s.formDateDatas.map(n=>{let p=[];if(n.multipleItems.length>0&&(p=n.multipleItems.reduce((m,v)=>{const r=v.value;return r[2]!==""&&(r[0]===1||r[0]===2&&r[1]!==""||r[2].toString()[2]>0)?m.concat(r[2].toString()[2]>0?`__${r[2]}`:r.join("_")):m},[])),a){const m={multipleDate:p};return["isContain","type1","value1","type2","value2","type3"].forEach(v=>{n[v]!==""&&(m[v]=n[v])}),m}else return{isContain:n.isContain,type1:n.type1,value1:n.value1,type2:n.type2,value2:n.value2,type3:n.type3,multipleDate:p}}),V=()=>{h().then(()=>{if(t.datesOptions.filter(n=>n.label===s.modalState.editName?!1:n.label===g.name).length>0)te.error((s.modalState.type==="add"?e("routes.test.add"):e("routes.test.edit"))+e("routes.test.failed")+",\u6A21\u677F\u540D\u79F0\u4E0D\u80FD\u91CD\u590D!");else{let n=$(!1),p=[];s.modalState.type==="edit"?p=[...t.datesOptions.slice(0,s.modalState.editIndex),{label:g.name,value:JSON.stringify({name:g.name,newDates:n})},...t.datesOptions.slice(s.modalState.editIndex+1)]:p=[...t.datesOptions,{label:g.name,value:JSON.stringify({name:g.name,newDates:n})}],o.emit("modalconfirm",p),window.localStorage.setItem("datesOptions",JSON.stringify(p)),te.success((s.modalState.type==="add"?e("routes.test.add"):e("routes.test.edit"))+e("routes.test.succeed")),s.modalState={editName:"",editIndex:0,type:"add",visible:!1},s.formDateDatas=[F({},S)],s.previewData=[],g.name="",g.dates=""}}).catch(a=>{document.getElementsByClassName("enter-input")[0].focus()})};function L(){return K(this,null,function*(){let a=$(!0).map(p=>JSON.stringify(p));const n=yield E.getPreviewInfo({newDates:a});n&&(s.previewData=n)})}const G=()=>{s.modalState={editName:"",editIndex:0,type:"add",visible:!1},s.formDateDatas=[F({},S)],s.previewData=[],g.name="",g.dates=""},N=(a,n,p,m)=>{let v=F({},s.formDateDatas[m]);if(p==="type1")if(a===830){let r=b.filter(d=>d.level[1]==="1"?d.value!==800:d.level[1]==="2"?d.value.toString()[0]==="8":!0);v.value1=0,v.type2="",v.type3="",v.multipleItems=[{options:r,value:[2,"",""]}]}else v.type2="",v.type3="",v.secondOptions=C.filter(r=>r.level[0]===n.level[0]);if(p==="type2"){let r=b.filter(d=>{if(d.level[1]==="1")return+d.level[0]<+n.level[0];if(d.level[1]==="2")return d.level[0]===n.level[0]});v.multipleItems=[{options:r,value:[2,"",""]}]}s.formDateDatas=[...s.formDateDatas.slice(0,m),F({},v),...s.formDateDatas.slice(m+1)]},j=(a,n,p,m)=>{let v=[];if(p===2){let r;+a.toString()[2]>0?r=a===803?[...A]:[]:r=b.filter(d=>{if(d.level[1]==="1")return d.level[0]<a.toString()[0];if(d.level[1]==="2")return d.level[0]===a.toString()[0]}),v=r.length>0?[...s.formDateDatas[m].multipleItems.slice(0,n+1),{options:r,value:[2,"",""]}]:s.formDateDatas[m].multipleItems.slice(0,n+1),s.formDateDatas=[...s.formDateDatas.slice(0,m),Z(F({},s.formDateDatas[m]),{multipleItems:v}),...s.formDateDatas.slice(m+1)]}};return{t:e,type0Options:T,typeOptions:k,type1Options:U,addOnBefore:B,state:s,addItem:J,editItem:D,addDateItem:i,deleteDateItem:u,modalFormChange:N,multipleChange:j,handleOk:V,handleCancel:G,handlePreview:L,validateInfos:H,rules:l,formState:g,limitMap:z,onFocusChange:(a,n,p,m)=>{s[n]=m,s[p]=m}}}}),Pe=P("\u65B0\u589E\u65E5\u671F\u8303\u56F4"),$e={key:1,style:{display:"inline-block",width:"60px"}},je=P("\u53D6\u6D88"),qe=P("\u9884\u89C8"),Te=P("\u786E\u5B9A");function ze(t,o,e,E,k,T){const U=O("a-alert"),C=O("a-col"),b=O("a-button"),A=O("a-input"),z=O("a-form-item"),B=O("a-select"),S=O("a-input-number"),s=O("a-select-option"),g=O("MinusCircleOutlined"),J=O("a-row"),D=O("a-form"),ue=O("a-modal");return f(),I(ue,{visible:t.state.modalState.visible,"onUpdate:visible":o[1]||(o[1]=l=>t.state.modalState.visible=l),title:(t.state.modalState.type==="add"?t.t("routes.test.add"):t.t("routes.test.edit"))+"\u590D\u5408\u65E5\u671F\u6A21\u677F",onOk:t.handleOk,onCancel:t.handleCancel,width:"720px"},{footer:_(()=>[c(b,{key:"back",onClick:t.handleCancel},{default:_(()=>[je]),_:1},8,["onClick"]),c(b,{key:"preview",type:"primary",loading:t.loading,onClick:t.handlePreview},{default:_(()=>[qe]),_:1},8,["loading","onClick"]),c(b,{id:"submit",key:"submit",type:"primary",onClick:t.handleOk},{default:_(()=>[Te]),_:1},8,["onClick"])]),default:_(()=>[c(J,{class:"add-modal"},{default:_(()=>[c(C,{span:24,class:"mg-10b"},{default:_(()=>[pe("div",null,[c(U,{message:"\u8282\u5047\u65E5\u3001\u5DE5\u4F5C\u65E5\u3001\u4F11\u606F\u65E5\u8BF7\u5728\u914D\u7F6E\u9875\u9762\u8FDB\u884C\u5177\u4F53\u65E5\u671F\u7684\u914D\u7F6E\u3002\u6BCF\u4E2A\u6A21\u677F\u53EF\u8BBE\u7F6E\u591A\u4E2A\u65E5\u671F\u8303\u56F4\uFF0C\u8BBE\u7F6E\u5B8C\u6210\u540E\u53EF\u901A\u8FC7\u9884\u89C8\u6765\u68C0\u67E5\u7ED3\u679C\u3002\u8F93\u5165\u5B8C\u6210\u540E\u53EF\u901A\u8FC7\u56DE\u8F66\u8FDB\u5230\u4E0B\u4E00\u4E2A\uFF0C\u82E5\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u4E2A\u5219\u4F1A\u805A\u7126\u786E\u5B9A\u6309\u94AE\uFF0C\u518D\u6B21\u56DE\u8F66\u5C06\u6267\u884C\u4FDD\u5B58\u64CD\u4F5C\u3002",type:"info"})])]),_:1}),c(C,{span:24,class:"mg-10b"},{default:_(()=>[pe("div",null,[c(b,{type:"primary",class:"fr",onClick:t.addDateItem},{default:_(()=>[Pe]),_:1},8,["onClick"])])]),_:1}),c(C,{span:24,class:"form-box",id:"form-box"},{default:_(()=>[c(D,{labelCol:{span:3},wrapperCol:{span:21}},{default:_(()=>[c(z,Ee({required:"",label:t.t("routes.test.mode_name"),name:"name"},t.validateInfos.name),{default:_(()=>[c(A,{class:"enter-input",value:t.formState.name,"onUpdate:value":o[0]||(o[0]=l=>t.formState.name=l)},null,8,["value"])]),_:1},16,["label"]),c(z,{label:t.t("routes.test.date"),name:"date"},{default:_(()=>[(f(!0),q(x,null,le(t.state.formDateDatas,(l,h)=>(f(),I(J,{key:h,class:"date-item"},{default:_(()=>{var H;return[c(C,{span:23},{default:_(()=>[c(B,{ref_for:!0,ref:"select",class:"enter-input",value:l.isContain,"onUpdate:value":i=>l.isContain=i,style:{width:"90px",position:"relative",top:"-0.5px"},options:t.type0Options,onChange:(i,u)=>t.modalFormChange(i,u,"isContain",h)},null,8,["value","onUpdate:value","options","onChange"]),c(B,{ref_for:!0,ref:"select",class:"enter-input",value:l.type1,"onUpdate:value":i=>l.type1=i,style:{width:"90px",position:"relative",top:"-0.5px"},options:t.type1Options,onChange:(i,u)=>t.modalFormChange(i,u,"type1",h)},null,8,["value","onUpdate:value","options","onChange"]),l.type1!==830?(f(),I(S,{key:0,class:"enter-input",value:l.value1,"onUpdate:value":i=>l.value1=i,precision:"0",style:{width:"57px !important"}},null,8,["value","onUpdate:value"])):w("",!0),l.type1!==830?(f(),I(B,{key:1,class:"enter-input",value:l.type2,"onUpdate:value":i=>l.type2=i,style:{width:"130px","vertical-align":"top"},options:l.secondOptions,onChange:(i,u)=>t.modalFormChange(i,u,"type2",h)},null,8,["value","onUpdate:value","options","onChange"])):w("",!0),l.type2.toString()[1]==="2"?(f(),I(S,{key:2,class:"enter-input",value:l.value2,"onUpdate:value":i=>l.value2=i,precision:"0",style:{width:"57px !important"}},null,8,["value","onUpdate:value"])):w("",!0),l.type2.toString()[1]==="2"?(f(),I(B,{key:3,class:"enter-input",value:l.type3,"onUpdate:value":i=>l.type3=i,style:{width:"74px","vertical-align":"top"}},{default:_(()=>[(f(!0),q(x,null,le(l.secondOptions.filter(i=>i.level+"0"===l.type1.toString()),i=>(f(),I(s,{value:i.value,key:i.value},{default:_(()=>[P(ae(i.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):w("",!0),l.type2.toString()[1]==="0"&&l.type2!==100||l.type1===830?(f(!0),q(x,{key:4},le(l.multipleItems,(i,u)=>{var R,$,V,L,G,N,j,ee,a,n,p,m,v,r,d,M,Q,W,X,Y;return f(),q(x,{key:u},[(l.multipleItems[u].value[2].toString()[2]==="0"||l.multipleItems[u].value[2]==="")&&!(u>0&&l.multipleItems[u-1].value[2]===803)?(f(),I(B,{key:0,class:"enter-input",value:l.multipleItems[u].value[0],"onUpdate:value":y=>l.multipleItems[u].value[0]=y,options:t.addOnBefore,style:{width:"60px",position:"relative",top:"-0.5px"},onChange:y=>t.multipleChange(y,u,0,h)},null,8,["value","onUpdate:value","options","onChange"])):w("",!0),(l.multipleItems[u].value[2].toString()[2]==="0"&&l.multipleItems[u].value[0]!==1||l.multipleItems[u].value[2]==="")&&!(u>0&&l.multipleItems[u-1].value[2]===803)?(f(),q("div",$e,[u===0&&l.type1===830?(f(),I(S,{key:0,class:"enter-input",value:l.multipleItems[u].value[1],"onUpdate:value":y=>l.multipleItems[u].value[1]=y,precision:"0",min:(V=($=t.limitMap["800_"+((R=l.multipleItems[u])==null?void 0:R.value[2])])==null?void 0:$.min)!=null?V:1/0,max:(N=(G=t.limitMap["800_"+((L=l.multipleItems[u])==null?void 0:L.value[2])])==null?void 0:G.max)!=null?N:1/0,onChange:y=>t.multipleChange(y,u,1,h)},null,8,["value","onUpdate:value","min","max","onChange"])):w("",!0),u===0&&l.type1!==830?(f(),I(S,{key:1,class:"enter-input",value:l.multipleItems[u].value[1],"onUpdate:value":y=>l.multipleItems[u].value[1]=y,precision:"0",min:(a=(ee=t.limitMap[l.type2+"_"+((j=l.multipleItems[u])==null?void 0:j.value[2])])==null?void 0:ee.min)!=null?a:1/0,max:(m=(p=t.limitMap[l.type2+"_"+((n=l.multipleItems[u])==null?void 0:n.value[2])])==null?void 0:p.max)!=null?m:1/0,onChange:y=>t.multipleChange(y,u,1,h)},null,8,["value","onUpdate:value","min","max","onChange"])):w("",!0),u!==0?(f(),I(S,{key:2,class:"enter-input",value:l.multipleItems[u].value[1],"onUpdate:value":y=>l.multipleItems[u].value[1]=y,precision:"0",min:(M=(d=t.limitMap[((v=l.multipleItems[u-1])==null?void 0:v.value[2])+"_"+((r=l.multipleItems[u])==null?void 0:r.value[2])])==null?void 0:d.min)!=null?M:1/0,max:(Y=(X=t.limitMap[((Q=l.multipleItems[u-1])==null?void 0:Q.value[2])+"_"+((W=l.multipleItems[u])==null?void 0:W.value[2])])==null?void 0:X.max)!=null?Y:1/0,onChange:y=>t.multipleChange(y,u,1,h)},null,8,["value","onUpdate:value","min","max","onChange"])):w("",!0)])):w("",!0),c(B,{class:"enter-input",value:l.multipleItems[u].value[2],"onUpdate:value":y=>l.multipleItems[u].value[2]=y,options:i.options,onChange:y=>t.multipleChange(y,u,2,h),style:{width:"84px",position:"relative",top:"-0.5px"}},null,8,["value","onUpdate:value","options","onChange"])],64)}),128)):w("",!0)]),_:2},1024),c(C,{span:1,class:"icon-box"},{default:_(()=>[h!==0?(f(),I(g,{key:0,class:"delete-dates-icon",onClick:i=>t.deleteDateItem(h)},null,8,["onClick"])):w("",!0)]),_:2},1024),(H=t.state.previewData[h])!=null&&H.date?(f(),I(C,{key:0,style:{color:"#52c41a"}},{default:_(()=>{var i;return[P(ae(l.isContain===1?t.t("routes.test.type_include"):t.t("routes.test.type_not_contain"))+"\xA0\xA0\xA0\xA0"+ae((i=t.state.previewData[h])==null?void 0:i.date.replaceAll("xx:xx:xx","")),1)]}),_:2},1024)):w("",!0)]}),_:2},1024))),128))]),_:1},8,["label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["visible","title","onOk","onCancel"])}var Re=Fe(Ne,[["render",ze]]);export{Re as default};
