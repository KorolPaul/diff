import{au as e,a6 as n,a7 as d,ay as h,az as u}from"./Pd6RrLp1.js";import{C as o}from"./B4ouTiC0.js";const r=`${d}shops`,l=e.object({id:e.number(),start:e.string(),end:e.string(),days:e.array(e.string())}),p=e.object({id:e.number(),countryId:e.number(),cityId:e.number(),address:e.string(),lat:e.number(),lon:e.number(),url:e.string().nullable(),email:e.array(e.string()).nullable(),phone:e.array(e.string().nullable()),isMain:e.boolean(),sort:e.number(),workingHours:e.array(l)}),S=e.object({id:e.string(),name:e.string(),url:e.string()}),g=e.object({id:e.number(),name:e.string(),image:e.string().nullable(),crmId:e.string(),sort:e.number(),addresses:e.array(p),services:e.array(S),types:e.array(e.object({id:e.number(),key:e.string()}))}),m=e.array(g),b={async getShops(t){const{get:s}=n(),{data:a}=await s(r,{lang:t,limit:220});return h(r,m,a.value.data)},async getProductShops(t){const{get:s}=n(),{data:a}=await s(`${r}/product/${t}`);return{data:a.value}}},I=u("shops",{state:()=>({isSidebarOpened:!1,shops:null,selectedShop:null,cities:null,countries:null}),getters:{getShops(){return this.selectedShop&&this.shops?[this.selectedShop,...this.shops.filter(t=>{var s;return t.id!==((s=this.selectedShop)==null?void 0:s.id)})]:this.shops},getCities(){return this.cities},getSelectedShop(){return this.selectedShop},getIsSidebarOpened(){return this.isSidebarOpened}},actions:{async getShopsData(t){const s=await b.getShops(t);s&&(this.shops=s);const a=localStorage.getItem("shop");if(a){const i=s.find(c=>c.id===Number(a));i&&this.setSelectedShop(i)}},async getCitiesData(t){const s=await o.getCitiesByIds(t);s&&(this.cities=s)},async getCountriesData(t){const s=await o.getCountriesByIds(t);s&&(this.countries=s)},setSelectedShop(t){this.selectedShop=t},setSidebarOpened(t){this.isSidebarOpened=t}}});export{I as u};
