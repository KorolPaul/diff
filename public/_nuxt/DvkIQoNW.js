import{_ as J}from"./BH5osbNv.js";import{_ as Q}from"./DONjoDhC.js";import{_ as T}from"./C1bY634J.js";import{u as V,r as w,s as x,x as y,p as z,j as l,m as t,c as f,F as H,l as K,q as O,v as W,o as n,J as X}from"./Pd6RrLp1.js";import{u as Y}from"./CiYsyl20.js";import{u as Z,a as tt}from"./D5A9IBSm.js";import{u as ot}from"./Cubs7ceE.js";import{u as et}from"./5Tbs7Tph.js";import{u as rt}from"./CNf1FbPc.js";import"./CanreSBL.js";import"./QJ3VVsaT.js";import"./Cuh519_O.js";import"./CAC9vlZT.js";import"./BSts32E-.js";import"./CasWryfL.js";import"./qKLLgZOX.js";import"./C84csLUY.js";import"./CJ3NDxRk.js";import"./B-l2-lBV.js";import"./BRd7Y3HP.js";import"./0zS85Q81.js";import"./D1YAISfT.js";import"./DcmtLR2x.js";import"./qGe41cgA.js";import"./CuVdlouH.js";import"./2WVDaFKk.js";import"./ChnuYSVO.js";import"./Defl8kng.js";import"./BrwUmeBJ.js";import"./wu6KqT4O.js";import"./DnrtWxdD.js";import"./C3MdYnyV.js";import"./DV533Gpo.js";import"./B4ouTiC0.js";import"./UMgXyzVE.js";import"./CcjC4gLZ.js";import"./B2Y8sI9p.js";import"./cdh4QgBc.js";import"./BJt_w7Hb.js";import"./DQObz2Ym.js";import"./BdleNovN.js";import"./CuRHY0aD.js";import"./CIVZYtEA.js";import"./9O3XjtsJ.js";import"./C3QHuKV1.js";import"./pvpDbLJt.js";import"./1OVHT2GX.js";import"./T4kW5CUp.js";import"./ckAQI_px.js";import"./CjGb2l7u.js";import"./DqO2dBIS.js";const at={class:"page-wrapper"},nt={key:0},st={key:1},no={__name:"index",async setup(pt){let v,k;const{pushGtmEvent:B}=O(),p=V(),F=p.params.slug,{setMetaToCatalogPage:G}=ot(),g=w(null),{fetchConstructorPayload:E}=rt(),{isLoading:L,startLoading:N,stopLoading:$}=Y(!0),_=w(!0),c=x({blocks:[]}),h=x(null),{getQueryParams:j}=Z(),{fetchCategoryBySlug:q,categoryBySlug:a,allCategories:D,totalPages:M,fetchError:d}=tt(),C=y(()=>{var o;return Number((o=p==null?void 0:p.query)==null?void 0:o.page)||1}),{bannersGroup:R,bannersSpeed:U}=et(),A=o=>{const e=o==null?void 0:o.find(r=>r.type==="seo_content"&&r.data!==null);if(e)return e.data},P=y(()=>({category:a.value,bannersGroup:R.value,bannersSpeed:U.value})),b=y(()=>{var o;return((o=D.value)==null?void 0:o.find(e=>{var r;return e.id===((r=a.value)==null?void 0:r.parentId)}))||0}),S=async({params:o})=>{var r,i,m,u;N();try{await q(F,o)}catch(s){console.error(s)}if(d.value)return;const e=A((r=a.value)==null?void 0:r.contents);e&&(g.value=e),G(a),B("pageview",{title:(i=a.value)==null?void 0:i.name}),(m=a.value)==null||m.contents.forEach(s=>{s.data&&c.value.blocks.push({type:"json",content:s.data})}),(u=c.value)!=null&&u.blocks.length&&(h.value=await E(c.value.blocks)),$()};_.value=!0;const I={...j(C.value)};return[v,k]=z(()=>S({params:I})),await v,k(),_.value=!1,X("category",a),(o,e)=>{const r=J,i=Q,m=T,u=W;return n(),l("div",at,[t(d)?(n(),l("div",st,[K(u,{error:t(d)},null,8,["error"])])):(n(),l("div",nt,[t(_)?(n(),f(m,{key:1})):(n(),l(H,{key:0},[t(b)?(n(),f(i,{key:1,data:t(P),"parent-category":t(b),"seo-content":t(g),"total-pages":t(M),"current-page":t(C),loading:t(L),onGetSubcategoryData:e[0]||(e[0]=s=>S(s))},null,8,["data","parent-category","seo-content","total-pages","current-page","loading"])):(n(),f(r,{key:0,data:t(P),"seo-content":t(g),"constructor-blocks":t(c),"constructor-payload":t(h)},null,8,["data","seo-content","constructor-blocks","constructor-payload"]))],64))]))])}}};export{no as default};
