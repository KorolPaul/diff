import{_ as z}from"./cdh4QgBc.js";import{_ as R}from"./DQObz2Ym.js";import{_ as T}from"./CuRHY0aD.js";import{_ as A,r as m,ab as y,w as D,j as c,o,t as v,H as F,F as k,L as b,O as B,m as t,y as H,I,k as C,l as f,z as x,c as U,Q as $}from"./Pd6RrLp1.js";import{P as E}from"./BMHaNUcL.js";import{S as G,a as K}from"./B-l2-lBV.js";import{N as M}from"./BRd7Y3HP.js";import{P as Q}from"./BdleNovN.js";const q={key:0,class:"cross-sale-carousel_categories"},J=["onClick"],W={class:"cross-sale-carousel_products"},X={key:0,class:"cross-sale-carousel_pagination"},Y={class:"prev-cross-slide-btn"},Z={class:"next-cross-slide-btn"},ee={key:1,class:"cross-sale-carousel_preloader"},se={__name:"product-cross-sale",props:{product:{type:Object,default:()=>{}},productsIds:{type:Array,default:()=>[]},sliderKey:{type:String,default:""},productPage:{type:Boolean,default:!1},small:{type:Boolean,default:!1},withoutCategory:{type:Boolean,default:!1}},emits:["onCrossProductsReady","onCrossProductsEmpty"],setup(n,{emit:V}){const e=n,i=V,N=m(null),u=m(!1),P=m([]),s=m([]),h=m(0),O={autoHeight:!1,slidesPerView:e.small?2.1:"auto",slidesPerGroup:1,spaceBetween:24,allowTouchMove:!0,navigation:{nextEl:".next-cross-slide-btn",prevEl:".prev-cross-slide-btn"},pagination:e.small?!1:{el:".cross-sale-carousel_pagination",clickable:!0},breakpoints:{[y.xl]:{slidesPerView:e.small?3.8:3,spaceBetween:75},[y.md]:{slidesPerView:e.small?3.8:2.5,spaceBetween:75},[y.sm]:{slidesPerView:e.small?3.8:1.5,spaceBetween:75}}},j=async r=>{var l;if(!e.product.id){s.value=[],i("onCrossProductsEmpty");return}const{data:d}=await E.getCrossSaleCategoryProducts(e.product.id,r);s.value=d.data||[],((l=s.value)==null?void 0:l.length)>=20&&(s.value=d.data.slice(0,19)),s.value.length?i("onCrossProductsReady"):i("onCrossProductsEmpty"),u.value=!1},w=async()=>{var d,l,_;if(!((d=e.product)!=null&&d.id)){s.value=[],i("onCrossProductsEmpty");return}const{data:r}=await E.getCrossSaleCategories({"product_ids[]":(l=e.productsIds)!=null&&l.length?e.productsIds:e.product.id});s.value=r.data||[],s.value.forEach(a=>{a.related_product&&Object.assign(a,a.related_product),a.related_category&&Object.assign(a,a.related_category)}),(_=s.value)!=null&&_.length?i("onCrossProductsReady"):i("onCrossProductsEmpty"),u.value=!1},L=r=>{h.value=r,u.value=!0,j(P.value[r].id)};return w(),D(()=>e.productsIds,()=>{w()}),(r,d)=>{var S;const l=z,_=R,a=T;return o(),c("div",{class:B(["cross-sale-carousel",{"cross-sale-carousel__small":n.small,"cross-sale-carousel__with-category":(S=t(s))==null?void 0:S.length}])},[!n.small&&!n.withoutCategory?(o(),c("div",q,[(o(!0),c(k,null,b(t(P),(p,g)=>(o(),c("div",{key:p.name,class:B(["cross-sale-carousel_category-item",{active:g===t(h)}]),onClick:te=>L(g)},H(p.name),11,J))),128))])):v("",!0),F(C("div",W,[f(t(K),$({ref_key:"crossSaleSlider",ref:N},{...O},{modules:[t(Q),t(M)]}),{default:x(()=>[(o(!0),c(k,null,b(t(s),(p,g)=>(o(),U(t(G),{key:g,item:p},{default:x(()=>[f(l,{product:p,small:n.small,"add-to-cart":"","show-color":""},null,8,["product","small"])]),_:2},1032,["item"]))),128))]),_:1},16,["modules"]),n.small?v("",!0):(o(),c("div",X)),C("div",Y,[f(_,{type:"left",class:"cart-slider_btn"})]),C("div",Z,[f(_,{type:"right",class:"cart-slider_btn"})])],512),[[I,!t(u)]]),t(u)?(o(),c("div",ee,[f(a,{size:34})])):v("",!0)],2)}}},ue=A(se,[["__scopeId","data-v-4e2a1eee"]]);export{ue as _};
