import{_ as ne}from"./QJ3VVsaT.js";import{_ as re}from"./1OVHT2GX.js";import{_ as he}from"./qKLLgZOX.js";import{d as Z,b as G,j as d,o as r,k as u,l as H,B as R,y as l,m as s,_ as x,u as le,x as C,t as y,c as L,F as A,L as K,O as X,z as ce,A as ie,r as F,av as ge,w as q,ad as ye}from"./Pd6RrLp1.js";import{_ as Se}from"./CCRCVzVF.js";import{u as de}from"./CyMuBQOc.js";import{u as ke}from"./ChnuYSVO.js";import"./B4ouTiC0.js";import{u as be}from"./wu6KqT4O.js";var b=(_=>(_[_.ALL_STORES=0]="ALL_STORES",_[_.FIVE=5]="FIVE",_[_.TEN=10]="TEN",_[_.TWENTY=20]="TWENTY",_[_.THIRTY=30]="THIRTY",_))(b||{});const Ce={class:"store-location-manager"},$e={class:"store-location-manager_info"},Ie={class:"store-location-manager_near-shops"},Te=Z({__name:"store-location-manager",props:{city:{},countShops:{},currentRange:{},cityName:{}},emits:["changeRange","changeLocation"],setup(_,{emit:p}){const{t:c}=G(),I=p,i={[b.ALL_STORES]:`${c("all_location_stores")}`,[b.FIVE]:`${b.FIVE}${c("km")}`,[b.TEN]:`${b.TEN}${c("km")}`,[b.TWENTY]:`${b.TWENTY}${c("km")}`,[b.THIRTY]:`${b.THIRTY}${c("km")}`},S=Object.entries(i).map(([a,n])=>({label:n,value:Number(a)})),v=a=>{I("changeLocation",a)},f=()=>{const a={latitude:0,longitude:0};if(!navigator.geolocation){v(a);return}navigator.geolocation.getCurrentPosition(n=>{a.latitude=n.coords.latitude,a.longitude=n.coords.longitude,v(a)},n=>{v(a),console.error(n)})};return(a,n)=>{const T=he,$=re;return r(),d("div",Ce,[u("button",{class:"store-location-manager_button",onClick:f},[H(T,{icon:"locationPin"}),R(" "+l(a.$t("use_current_location")),1)]),u("div",$e,[u("span",Ie,l(a.countShops)+" "+l(a.$t("near_stores_result",{value:a.cityName||""})),1),H($,{"model-value":a.currentRange,small:"","show-item-label":"",options:s(S),"show-active-icon":!1,class:"store-location-manager_range","onUpdate:modelValue":n[0]||(n[0]=V=>a.$emit("changeRange",V))},null,8,["model-value","options"])])])}}}),we=x(Te,[["__scopeId","data-v-52bf0c5d"]]),Ne={key:0,class:"store-card_label"},Re={class:"store-card_main"},Ve={class:"store-card_title-wrapper"},Be={class:"store-card_title"},Ee={class:"store-card_distance"},Me={class:"store-card_city"},De={key:0,class:"store-card_availibility"},Fe={class:"store-card_additional"},Ae={class:"store-card_data"},Oe=["href"],He={key:0,class:"store-card_data"},Le={key:0},Pe=["href"],We={key:1,class:"store-card_data"},Ye={key:0},Ue=["href"],ze={key:2,class:"store-card_data"},je=Z({__name:"store-card",props:{data:{},active:{type:Boolean},selected:{type:Boolean},static:{type:Boolean},full:{type:Boolean}},emits:["select"],setup(_){var n,T,$,V;const p=_,c=le(),I=C(()=>{var t;return(t=c.name)==null?void 0:t.toString().includes("product")}),{t:i}=G(),S=de(),v=C(()=>{var t;return S.getCities?(t=S.getCities.find(w=>w.id===p.data.addresses[0].cityId))==null?void 0:t.name:[]}),f=(T=(n=p.data.addresses[0])==null?void 0:n.workingHours[0])==null?void 0:T.start,a=(V=($=p.data.addresses[0])==null?void 0:$.workingHours[0])==null?void 0:V.end;return(t,w)=>{var h,M,D,P,W,Y,U,z;const J=ne,k=Se,Q=ie;return r(),d("div",{class:X(["store-card",{active:t.active,"store-card__static":t.static,"store-card__selected":t.full&&t.selected,"store-card__full":t.full}])},[t.selected&&t.full?(r(),d("span",Ne,l(s(i)("my_store")),1)):y("",!0),t.full&&t.data.image?(r(),L(J,{key:1,src:t.data.image,class:"store-card_image"},null,8,["src"])):y("",!0),u("div",Re,[u("div",Ve,[u("span",Be,l(t.data.name),1),u("span",Ee,l(t.data.distance)+" "+l(s(i)("km")),1)]),u("span",Me,l(s(v)),1),s(I)?(r(),d("span",De,l(s(i)("usually_ready_in_24_hours")),1)):y("",!0)]),u("div",Fe,[u("span",Ae,[R(l(s(i)("address"))+": ",1),u("a",{href:`https://www.google.com/maps/place/${(h=t.data.addresses[0])==null?void 0:h.lat}, ${(M=t.data.addresses[0])==null?void 0:M.lon}`,target:"_blank",rel:"norefferer"},l((D=t.data.addresses[0])==null?void 0:D.address),9,Oe)]),(P=t.data.addresses[0])!=null&&P.phone[0]?(r(),d("span",He,[R(l(s(i)("telephone"))+" ",1),(r(!0),d(A,null,K((W=t.data.addresses[0])==null?void 0:W.phone,(N,B)=>(r(),d(A,{key:B},[B>0?(r(),d("span",Le,", ")):y("",!0),u("a",{href:`tel:${N}`},l(N),9,Pe)],64))),128))])):y("",!0),(Y=t.data.addresses[0])!=null&&Y.email?(r(),d("span",We,[R(l(s(i)("email"))+" ",1),(r(!0),d(A,null,K((U=t.data.addresses[0])==null?void 0:U.email,(N,B)=>(r(),d(A,{key:B},[B>0?(r(),d("span",Ye,", ")):y("",!0),u("a",{href:`mailto:${N}`},l(N),9,Ue)],64))),128))])):y("",!0),s(f)&&s(a)?(r(),d("span",ze,[R(l(s(i)("hours"))+": ",1),u("span",null,l(s(f))+"-"+l(s(a)),1)])):y("",!0),(z=t.data.services)!=null&&z.length?(r(),L(k,{key:3,full:t.full,services:t.data.services,class:X(["store-card_services",{"store-card_services__big-indent":t.full}])},null,8,["full","services","class"])):y("",!0)]),t.full&&!t.selected?(r(),L(Q,{key:2,class:"store-card_select-button",secondary:"",onClick:w[0]||(w[0]=N=>t.$emit("select"))},{default:ce(()=>[R(l(s(i)("make_this_my_store")),1)]),_:1})):y("",!0)],2)}}}),qe=x(je,[["__scopeId","data-v-74bf9a3f"]]),Ke=()=>({calculateDistance:(p,c)=>{const i=n=>n*(Math.PI/180),S=i(c.latitude-p.latitude),v=i(c.longitude-p.longitude),f=Math.sin(S/2)*Math.sin(S/2)+Math.cos(i(p.latitude))*Math.cos(i(c.latitude))*Math.sin(v/2)*Math.sin(v/2),a=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));return Number((6371*a).toFixed(1))}}),Je=(_,p,c)=>{const{calculateDistance:I}=Ke(),i=v=>{const f=v.addresses[0],a={latitude:f.lat,longitude:f.lon};if(c!=null&&c.value.latitude&&(c!=null&&c.value.longitude)){const T=I(c.value,a);return{...v,distance:T}}const n=I(_.value,a)||0;return{...v,distance:n}};return{createShopsWithDistance:()=>(p==null?void 0:p.value.map(i))||[],createShopWithDistance:i}},Qe={key:0,class:"stores-sidebar_title"},Xe={key:1,class:"stores-sidebar_product"},Ze={class:"stores-sidebar_product-image-wrapper"},Ge={class:"stores-sidebar_product-name"},xe={key:3,class:"stores-sidebar_footer"},et=Z({__name:"stores-sidebar",props:{fullCards:{type:Boolean}},emits:["save","changeActiveShop"],setup(_,{emit:p}){var ee,te;const c=p,{trancateProductName:I}=be(),i=F(0),S=F(null),v=F({latitude:0,longitude:0}),f=F({latitude:0,longitude:0}),a=F(b.ALL_STORES),n=de(),{t:T}=G(),$=C(()=>n.getShops?n.getShops.filter(e=>e.types[0].key==="shop"):[]),{createShopsWithDistance:V}=Je(f,$,v),t=e=>e.filter(o=>+a.value===b.ALL_STORES?!0:+o.distance<=+a.value),w=C(()=>$.value.length===0?[]:(h.value===null,t(V()))),J=C(()=>n.selectedShop),k=C(()=>n.getCities?n.getCities:[]),Q=C(()=>n.countries?n.countries:[]),h=F(k.value?{label:(ee=k.value[0])==null?void 0:ee.name,value:(te=k.value[0])==null?void 0:te.id}:null),M=C(()=>{const e=new Set;return $.value.forEach(o=>{var g;(g=o.addresses[0])!=null&&g.cityId&&e.add(o.addresses[0].cityId)}),Array.from(e)}),D=C(()=>{const e=new Set;return $.value.forEach(o=>{var g;(g=o.addresses[0])!=null&&g.cityId&&e.add(o.addresses[0].countryId)}),Array.from(e)}),P=C(()=>k.value?k.value.map(e=>{var g,E;const o=(g=$.value.find(O=>O.addresses[0].cityId===e.id))==null?void 0:g.addresses[0].countryId;return{label:e.name,value:e.id,subtitle:o?(E=Q.value.find(O=>O.id===o))==null?void 0:E.name:void 0,icon:"markerIcon"}}):[]);function W(){const e=w.value.find(o=>o.id===i.value);c("save",e)}function Y(e){var o;S.value&&((o=S.value)==null||o.scroll(0,0),window.scrollTo(0,0)),c("save",e)}function U(e){i.value=e,c("changeActiveShop",e)}const{camelizeKeys:z}=ge,N=ke(),B=le(),j=C(()=>{var e;return(e=B.name)!=null&&e.toString().includes("product")?z(N.product):null}),ue=e=>{var o;return(o=e.items.find(g=>g.selected))==null?void 0:o.featureValue},_e=e=>{f.value.latitude=e.latitude,f.value.longitude=e.longitude},me=()=>{var o;const e=(o=k.value)==null?void 0:o.find(g=>{var E;return g.id===((E=h==null?void 0:h.value)==null?void 0:E.value)});e&&_e({latitude:e.lat||0,longitude:e.lon||0})};return q(()=>M.value,()=>{M.value.length&&n.getCitiesData(M.value)}),q(()=>D.value,()=>{D.value.length&&n.getCountriesData(D.value)}),q(()=>k.value,()=>{k.value&&(h.value={label:k.value[0].name,value:k.value[0].id})}),q(h,()=>{me()},{deep:!0,immediate:!0}),(e,o)=>{var se,ae;const g=ne,E=re,O=we,pe=qe,ve=ie;return r(),d("div",{class:X(["stores-sidebar",{"stores-sidebar__scroll":e.fullCards}])},[e.fullCards?y("",!0):(r(),d("h3",Qe,l(e.$t("stores")),1)),s(j)?(r(),d("div",Xe,[u("div",Ze,[H(g,{src:(se=s(j))==null?void 0:se.images[0]},null,8,["src"])]),u("div",null,[u("span",Ge,l(s(I)(s(j).name)),1),(r(!0),d(A,null,K(s(j).similarProducts,m=>(r(),d("span",{key:m.featureId,class:"stores-sidebar_product-feature"},[R(l(m.featureName)+": ",1),u("span",null,l(ue(m)),1)]))),128))])])):y("",!0),s(h)?(r(),L(E,{key:2,modelValue:s(h).value,"onUpdate:modelValue":o[0]||(o[0]=m=>s(h).value=m),"show-item-label":"",label:s(T)("city"),options:s(P)},null,8,["modelValue","label","options"])):y("",!0),H(O,{city:s(h),"city-name":(ae=s(h))==null?void 0:ae.label,"current-range":s(a),"count-shops":s(w).length,onChangeLocation:o[1]||(o[1]=m=>v.value=m),onChangeRange:o[2]||(o[2]=m=>a.value=m)},null,8,["city","city-name","current-range","count-shops"]),u("div",{ref_key:"cardsContainerRef",ref:S,class:"stores-sidebar_cards"},[(r(!0),d(A,null,K(s(w),m=>{var oe;return r(),L(pe,{key:m.id,data:m,active:s(i)===m.id,full:e.fullCards,selected:((oe=s(J))==null?void 0:oe.id)===m.id,onClick:fe=>U(m.id),onSelect:fe=>Y(m.id)},null,8,["data","active","full","selected","onClick","onSelect"])}),128))],512),e.fullCards?y("",!0):(r(),d("div",xe,[H(ve,{class:"stores-sidebar_button",disabled:s(i)===0,onClick:ye(W,["prevent"])},{default:ce(()=>[R(l(s(T)("select")),1)]),_:1},8,["disabled"])]))],2)}}}),dt=x(et,[["__scopeId","data-v-4c71f022"]]);export{dt as _,qe as a,Je as u};
