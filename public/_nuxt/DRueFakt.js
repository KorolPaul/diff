import{u as E,_ as x}from"./CNf1FbPc.js";import{_ as C}from"./C1bY634J.js";import{s as m,p as u,P as w,q as A,j as n,m as a,c as B,l as d,f as S,o as s}from"./Pd6RrLp1.js";import{u as F}from"./Cubs7ceE.js";import{u as G}from"./Cc_MbB92.js";import"./C3MdYnyV.js";import"./DV533Gpo.js";import"./DcmtLR2x.js";import"./B4ouTiC0.js";import"./UMgXyzVE.js";import"./CcjC4gLZ.js";import"./DqO2dBIS.js";import"./CuRHY0aD.js";const M={key:0,class:"contacts-page"},U={key:1},b={key:1},W={__name:"index",async setup(j){var _,l,i;let t,r;const{pushGtmEvent:g}=A(),{fetchConstructorPayload:f}=E(),o=m(null),c=m([]),{fetchError:p,setFetchError:h}=G(),{setMetaToStaticPage:y}=F();try{const e=([t,r]=u(()=>w.getAggregatePageBySlug("contacts")),t=await t,r(),t);o.value=(_=e==null?void 0:e.data)==null?void 0:_.data,c.value=([t,r]=u(()=>f(o.value.blocks)),t=await t,r(),t)}catch(e){h((l=e.response)==null?void 0:l.status)}finally{g("pageview",{title:(i=o.value)==null?void 0:i.seo_title})}return y(o),(e,q)=>{const v=x,k=C,P=S("AppError");return a(p)?(s(),n("div",b,[d(P,{error:{statusCode:a(p)}},null,8,["error"])])):(s(),n("div",M,[a(o)&&a(c)?(s(),B(v,{key:0,"page-data":a(o),payload:a(c)},null,8,["page-data","payload"])):(s(),n("div",U,[d(k)]))]))}}};export{W as default};
