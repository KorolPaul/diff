import{_ as q}from"./DONjoDhC.js";import{_ as I}from"./C1bY634J.js";import{u as M,r as C,x as c,p as Q,j as u,m as r,c as h,l as T,q as j,f as R,o as n}from"./Pd6RrLp1.js";import{u as U}from"./CiYsyl20.js";import{u as V,a as $}from"./D5A9IBSm.js";import{u as z}from"./Cubs7ceE.js";import{u as H}from"./Cc_MbB92.js";import{f as J}from"./C3hfG10U.js";import"./CanreSBL.js";import"./QJ3VVsaT.js";import"./Cuh519_O.js";import"./CAC9vlZT.js";import"./BSts32E-.js";import"./CasWryfL.js";import"./qKLLgZOX.js";import"./C84csLUY.js";import"./CJ3NDxRk.js";import"./B-l2-lBV.js";import"./BRd7Y3HP.js";import"./0zS85Q81.js";import"./D1YAISfT.js";import"./DcmtLR2x.js";import"./qGe41cgA.js";import"./CuVdlouH.js";import"./2WVDaFKk.js";import"./ChnuYSVO.js";import"./Defl8kng.js";import"./BrwUmeBJ.js";import"./wu6KqT4O.js";import"./B2Y8sI9p.js";import"./cdh4QgBc.js";import"./BJt_w7Hb.js";import"./C3MdYnyV.js";import"./DV533Gpo.js";import"./B4ouTiC0.js";import"./UMgXyzVE.js";import"./CcjC4gLZ.js";import"./DQObz2Ym.js";import"./BdleNovN.js";import"./DnrtWxdD.js";import"./CuRHY0aD.js";import"./CIVZYtEA.js";import"./9O3XjtsJ.js";import"./C3QHuKV1.js";import"./pvpDbLJt.js";import"./1OVHT2GX.js";import"./T4kW5CUp.js";import"./ckAQI_px.js";import"./CjGb2l7u.js";const K={class:"page-wrapper"},O={key:0},W={key:1},Jt={__name:"index",async setup(X){let l,g;const{pushGtmEvent:P}=j(),s=M(),k=s.params.slug,{setMetaToCatalogPage:w}=z(),_=C(null),d=C(!0),{fetchError:f}=H(),{isLoading:x,startLoading:S,stopLoading:E}=U(!0),{getQueryParams:B}=V(),{fetchCategoryBySlug:L,categoryBySlug:a,allCategories:A,totalPages:F}=$(),y=c(()=>{var t;return Number((t=s==null?void 0:s.query)==null?void 0:t.page)||1}),b=t=>{const e=t==null?void 0:t.find(o=>o.type==="seo_content"&&o.data!==null);if(e)return e.data},D=c(()=>({category:a.value})),G=c(()=>{var t;return((t=A.value)==null?void 0:t.find(e=>{var o;return e.id===((o=a.value)==null?void 0:o.parentId)}))||0}),v=async({params:t})=>{var p,i;S();const e=t?J(t):{};try{await L(k,e,!0)}catch(m){console.error(m)}const o=b((p=a.value)==null?void 0:p.contents);o&&(_.value=o),w(a),P("pageview",{title:(i=a.value)==null?void 0:i.name}),E()},N={...B(y.value)};return[l,g]=Q(()=>v({params:N})),await l,g(),d.value=!1,(t,e)=>{const o=q,p=I,i=R("AppError");return n(),u("div",K,[r(f)?(n(),u("div",W,[T(i,{error:{statusCode:r(f)}},null,8,["error"])])):(n(),u("div",O,[r(d)?(n(),h(p,{key:1})):(n(),h(o,{key:0,data:r(D),"seo-content":r(_),"parent-category":r(G),"total-pages":r(F),"current-page":r(y),loading:r(x),"with-categories-filter":"",onGetSubcategoryData:e[0]||(e[0]=m=>v(m))},null,8,["data","seo-content","parent-category","total-pages","current-page","loading"]))]))])}}};export{Jt as default};
