import{a6 as c,a7 as m,ay as l,au as a}from"./Pd6RrLp1.js";import{s as y,p as h,a as b}from"./DcmtLR2x.js";const s=`${m}categories`,p=`${m}brands`,$=`${m}promo`,C=a.object({id:a.string(),name:a.string(),value:a.string(),type:a.string(),buckets:a.array(a.object({id:a.number(),name:a.string(),docCount:a.number(),docCountWithUserFilter:a.number()})).optional()}),g=a.object({id:a.number(),isShown:a.boolean(),sort:a.number(),parentId:a.number(),catalogId:a.number(),name:a.string(),slug:a.string(),isTradeIn:a.boolean(),imageUrl:a.string().nullable(),images:a.array(a.object({url:a.string(),alt:a.string()})).optional(),slogan:a.string().optional(),contents:a.array(b),minPrice:a.string().optional()}),S=g.merge(a.object({children:a.array(g).optional()})),u=a.object({id:a.number(),productsCount:a.number(),name:a.string(),slug:a.string(),contents:a.array(b),seo:y,parentId:a.number().nullable(),isPopular:a.boolean(),images:a.array(a.object({url:a.string(),alt:a.string().nullable()})),image:a.object({url:a.string().nullable(),alt:a.string().nullable()}),productsMetaCount:a.number().nullable(),products:a.array(h),children:a.array(S),branch:a.array(g),aggs:a.array(C)}),v=a.array(u),w={async getCategories(n){const{get:e}=c(),{data:r}=await e(`${s}`,n);return l(s,v,r==null?void 0:r.value.data)},async getCategoryBySlug(n,e,r){var d;const{get:o}=c(),{data:t,error:i}=await o(`${s}/${n}?includes[]=children&includes[]=promotions&includes[]=branch${e.length?`&${e}`:""}`,r);return{data:l(s,u,(d=t==null?void 0:t.value)==null?void 0:d.data),error:i.value}},async getCategoryById(n,e){var t;const{get:r}=c(),{data:o}=await r(`${s}/${n}`,e);return l(s,u,(t=o==null?void 0:o.value)==null?void 0:t.data)},async getCategoryPromotions(n){const{get:e}=c(),{data:r}=await e(`${s}/${n}?includes[]=promotions&includes[]=branch`);return{data:r.value}},async getBrandsBySlug(n,e,r){const{get:o}=c(),{data:t,error:i}=await o(`${p}/${n}?includes[]=children&includes[]=branch${e.length?`%${e}`:""}`,r);return{data:t.value,error:i.value}},async getPromoCategoryBySlug(n,e,r){const{get:o}=c(),{data:t,error:i}=await o(`${$}/${n}?includes[]=children&includes[]=promotions&includes[]=branch${e.length?`&${e}`:""}`,r);return{data:l(s,u,t==null?void 0:t.value.data),error:i}}};export{w as C,u as c};
