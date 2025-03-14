import{a6 as o,a7 as c,ay as u,au as e}from"./Pd6RrLp1.js";const b=e.object({sku:e.string(),color:e.string(),images:e.array(e.string().url())}),g=e.object({review:e.boolean(),new:e.boolean(),bestPrice:e.boolean(),bestSeller:e.boolean()}),d=e.object({blockType:e.string(),externalCfId:e.string(),featureId:e.number(),featureName:e.string(),featureNameEn:e.string(),featureType:e.string().nullable(),items:e.array(e.object({id:e.number(),featureValue:e.string(),active:e.boolean(),selected:e.boolean()}))}),m=e.object({externalCfId:e.string(),name:e.string(),features:e.array(e.object({externalCfId:e.string(),name:e.string(),value:e.string()}))}),p=e.object({productId:e.number(),badge:e.string(),maxTerm:e.number(),minMonthlyPayment:e.number()}),P=e.object({review:e.boolean(),new:e.boolean(),bestPrice:e.boolean(),bestSeller:e.boolean()}),y=e.object({id:e.number().optional(),type:e.string().optional(),contentType:e.number().optional(),data:e.unknown()}),i=e.object({id:e.string(),name:e.string(),sku:e.string(),crmId:e.string(),slug:e.string(),price:e.number(),finalPrice:e.number(),discount:e.number().nullable(),discountType:e.number(),priceCat4:e.number().nullable(),priceCat5:e.number().nullable(),realStock:e.number(),getAQuote:e.boolean(),condition:e.number(),marks:g,customBadges:e.string().nullable(),currency:e.string(),content:e.array(y),variations:e.array(b),npiState:e.boolean(),realNpiState:e.boolean(),productType:e.string(),creditsData:p.optional()}),$=i.extend({brand:e.string(),canonicalUrl:e.string().nullable(),categoryIid:e.number(),contentMarketing:e.string().optional(),deliveryDate:e.string().optional(),describeNeedsButton:e.boolean(),energy_label:e.string().nullable(),externalCfId:e.string(),finalPriceDate:e.string(),images:e.array(e.string()),image:e.object({url:e.string().nullable(),alt:e.string().nullable(),title:e.string().nullable()}),kind:e.number(),minPrice:e.string().optional(),preorderDate:e.string().nullable(),priceDate:e.string(),reviewAverageRating:e.number().nullable(),reviewCount:e.number().nullable(),shopCount:e.number().nullable(),shopsEnabled:e.boolean(),slogan:e.string().optional(),status:e.number(),notB2c:e.boolean(),similarProducts:e.array(d),featureGroups:e.array(m)}),s=`${c}products`,S=`${c}brands`,h={async getProductBySlug(t,a){const{get:n}=o(),{data:r}=await n(`${s}/${t}`,a);return{data:r.value}},async getProductBundlesBySlug(t){const{get:a}=o(),{data:n}=await a(`${s}/${t}/bundles`);return{data:n.value}},async checkBundles(t){let a="";t.forEach(l=>{t.indexOf(l)<t.length-1?a+=`product_ids[]=${l}&`:a+=`product_ids[]=${l}`});const{get:n}=o(),{data:r}=n(`api/bundles-check?${a}`);return{data:r.value}},async getProducts(t){const{get:a}=o(),n=`${s}/`,{data:r}=await a(n,t);return u(n,i,r==null?void 0:r.value)},async getBrandForProductBySlug(t,a){const{get:n}=o(),{data:r}=await n(`${S}/${t}`,a);return{data:r.value}},async getCrossSaleCategories(t){const{get:a}=o(),{data:n}=await a(`${s}/${t}/cross-sells`);return{data:n.value}},async getCrossSaleCategoryProducts(t,a){const{get:n}=o(),{data:r}=await n(`${s}/${t}/cross-sells?category_id=${a}&limit=20&page=1`);return{data:r.value}}};export{h as P,y as a,p as c,$ as p,P as s};
