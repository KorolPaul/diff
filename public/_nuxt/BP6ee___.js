import{_ as T}from"./qKLLgZOX.js";import{_ as A}from"./C84csLUY.js";import{_ as H}from"./CuRHY0aD.js";import{a6 as j,_ as D,r as h,ab as c,j as d,o as r,t as y,k as e,m as b,l as _,z as x,F as G,L as M,c as V,y as m}from"./Pd6RrLp1.js";import{u as C}from"./0zS85Q81.js";import{S as I}from"./B-l2-lBV.js";import"./CJ3NDxRk.js";import"./BRd7Y3HP.js";const v="blog/wp-json/wp/v2/posts",z={async getWPLastArticles(l,n){const{get:t}=j();if(l){const{data:o}=await t(`${l}/${v}?per_page=${n}`);return{data:o.value}}const{data:p}=await t(`/${v}?per_page=${n}`);return{data:p.value}}},F={key:0},W={key:0,class:"container"},E=["innerHTML"],O={class:"word-press-slider"},U={class:"word-press-slider_container"},q=["href"],J={class:"wp-slider-item-image"},K={class:"wp-slider-item-image_picture"},Q=["srcset"],R=["srcset"],X=["srcset"],Y=["srcset"],Z=["srcset"],ee=["srcset"],se=["srcset"],te=["srcset"],oe=["srcset"],ie=["srcset"],ae=["srcset"],ne={class:"wp-slider-item-image_cover"},re={class:"wp-slide-description"},le={class:"wp-slide-description_badge"},de={class:"wp-slide-description_title"},ce={key:0,class:"wp-slide-description_subtitle"},pe={class:"wp-slide-description_content"},_e=["innerHTML"],me={key:1,class:"container mx-auto"},ue={__name:"wp-banners",props:{data:{blogLinkText:{type:String,default:""},blogLink:{type:String,default:""},blogTitle:{type:String,default:""},scrollDelay:{type:Number,default:0},postNumber:{type:Number,default:8},defaultLang:{type:String,default:""},onlyDefaultLang:{type:Boolean,default:!1},domain:{type:String,default:""}}},setup(l){const n=l,t=h(!0),{getSanitizeHtml:p}=C(),o=h([]),k=async()=>{t.value=!0,o.value=[];try{let i=n.data.postNumber;n.data.postNumber>16&&(i=16);const a=await z.getWPLastArticles(n.data.domain,i);a.data&&Array.isArray(a.data)&&(o.value=a.data),t.value=!1}catch{t.value=!1}},S=(i,a)=>`${i.slice(0,a)}${i.length>a?"...":""}`;k();const L={slidesPerView:"auto",spaceBetween:24,loop:!0,breakpoints:{[c.xxl]:{slidesPerGroup:4,loop:!1},[c.xl]:{slidesPerGroup:4,loop:!1},[c.lg]:{slidesPerGroup:2,loop:!1},[c.md]:{slidesPerGroup:1,loop:!0}}};return(i,a)=>{var u;const P=T,B=A,N=H;return t.value?(r(),d("div",me,[_(N)])):(r(),d("div",F,[o.value&&o.value.length?(r(),d("div",W,[e("h2",{class:"word-press-slider-title",innerHTML:b(p)((u=l.data)==null?void 0:u.blogTitle)},null,8,E),e("div",O,[e("div",U,[_(B,{options:L},{default:x(()=>[(r(!0),d(G,null,M(o.value,(s,$)=>(r(),V(b(I),{key:$,class:"word-press-slider_banner"},{default:x(()=>{var g,w,f;return[e("a",{href:s.link,target:"_blank",class:"word-press-slider_link"},[e("div",J,[e("picture",K,[e("source",{class:"wp-slider-item-image",media:"(min-width: 1460px)",srcset:s.frontimg,type:"image/webp"},null,8,Q),e("source",{class:"wp-slider-item-image",media:"(min-width: 1460px)",srcset:s.frontimg},null,8,R),e("source",{class:"wp-slider-item-image",media:"(min-width: 992px)",srcset:s.frontimg,type:"image/webp"},null,8,X),e("source",{class:"wp-slider-item-image",media:"(min-width: 992px)",srcset:s.frontimg},null,8,Y),e("source",{class:"wp-slider-item-image",media:"(min-width: 768px)",srcset:s.frontimg,type:"image/webp"},null,8,Z),e("source",{class:"wp-slider-item-image",media:"(min-width: 768px)",srcset:s.frontimg},null,8,ee),e("source",{class:"wp-slider-item-image",media:"(min-width: 576px)",srcset:s.frontimglarge,type:"image/webp"},null,8,se),e("source",{class:"wp-slider-item-image",media:"(min-width: 576px)",srcset:s.frontimglarge},null,8,te),e("source",{class:"wp-slider-item-image",media:"(max-width: 575px)",srcset:s.frontimglarge,type:"image/webp"},null,8,oe),e("source",{class:"wp-slider-item-image",media:"(max-width: 575px)",srcset:s.frontimglarge},null,8,ie),e("img",{class:"wp-slider-item-image_default-image",srcset:s.frontimg,alt:""},null,8,ae)]),e("div",ne,[_(P,{icon:"eyeIcon"})])]),e("div",re,[e("p",le,m((g=s==null?void 0:s.acf)==null?void 0:g.bage),1),e("p",de,m((w=s.yoast_head_json)==null?void 0:w.og_title),1),s.acf&&s.acf.subtitle?(r(),d("p",ce,m(s.acf.subtitle),1)):y("",!0),e("p",pe,[e("span",{innerHTML:S((f=s.yoast_head_json)==null?void 0:f.og_description,80)},null,8,_e)])])],8,q)]}),_:2},1024))),128))]),_:1})])])])):y("",!0)]))}}},ke=D(ue,[["__scopeId","data-v-a4ba8e2e"]]);export{ke as default};
