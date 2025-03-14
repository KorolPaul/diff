import{aY as y,r as w,b as k,i as W,w as x,j as E,o as R,Y as j}from"./Pd6RrLp1.js";import{u as B}from"./Cuh519_O.js";const z=()=>({lazyLoadScript:(u,f="async",i=0,r="body")=>{const o=document.createElement("script");o.type="text/javascript",o[f]=!0,o.src=u,setTimeout(()=>{document[r].appendChild(o)},i)}}),V={__name:"google-map",props:{data:{type:Object,required:!0},activeShopId:{type:Number},mapStyle:{type:Object,default:()=>y.googleMapStyleId.contacts}},emits:["init-map"],setup(h,{emit:u}){const f=w(null),i=w(null),r=w({}),o=h,L=u,{t:c}=k(),{generateUrl:S}=B(),{lazyLoadScript:b}=z(),C=j(),I=e=>!(e!=null&&e[0].start)||e!=null&&e[0].end?"":`${e[0].start} - ${e[0].end}`,$=(e,a)=>{let t="";return e==null||e.forEach((s,n)=>{s&&(n>0&&(t+=", "),t+=`<a href="${a}:${s}">${s}</a>`)}),t},v=e=>{let a=`${e.name?`<h2 class='google-map_point-title'>${e.name}</h2>`:""}`;e.city&&(a+=`<p class='google-map_point-subtitle'>${e.city}</p>`),e.address&&(a+=`
      <p class='google-map_point-info'>
        <span>${c("address")}:</span>
        <a href="https://www.google.com/maps/place/${e.lat},${e.lon}" target="_blank" rel="norefferer">${e.address}</a>
      </p>
    `);const t=$(e.phone,"tel");t&&(a+=`
      <p class='google-map_point-info'>
        <span>${c("telephone")}:</span>
        <span>${t}</span>
      </p>
    `);const s=$(e.email,"mailto");s&&(a+=`
      <p class='google-map_point-info'>
        <span>${c("email")}:</span>
        <span>${s}</span>
      </p>
    `);const n=I(e.worktime);return n&&(a+=`
      <p class='google-map_point-info'>
        <span>${c("hours")}:</span>
        <span>${n}</span>
      </p>
    `),e.address&&(a+=`
      <p class='google-map_point-info google-map_point-info__last'>
        <a href="https://www.google.com/maps/place/${e.lat},${e.lon}" target="_blank" rel="norefferer">
          ${c("get_directions")}
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46433 15L7.62598 14.1617L11.9493 9.8384L7.62598 5.51512L8.46433 4.67676L13.626 9.8384L8.46433 15Z" fill="currentColor"/>
          </svg>
        </a>
      </p>
    `),a},M=()=>{var s,n,p,g,_;if(!((n=(s=window.google)==null?void 0:s.maps)!=null&&n.Map))return;const e=S("/svg/map-marker-icon.svg",{format:"svg"});i.value=new window.google.maps.Map(f.value,{center:o.data.center||o.data.points[0],zoom:16,mapId:o.mapStyle[C.public.currentCountry]});const a=new window.google.maps.LatLngBounds,t=[];(p=o.data)!=null&&p.points&&((g=o.data)==null||g.points.forEach(l=>{const d=new window.google.maps.Marker({position:{lat:l.lat,lng:l.lng},googleMap:i.value,icon:e,title:l.content.title,animation:window.google.maps.Animation.DROP});a.extend({lat:l.lat,lng:l.lng});const m=new window.google.maps.InfoWindow({headerContent:null});d.addListener("click",()=>{m.close(),m.setContent(v(l.content)),m.open(d.getMap(),d)}),d.setMap(i.value),t.push({id:l.id,marker:d,infoWindow:m,content:v(l.content)})}),((_=o.data)==null?void 0:_.points.length)>1&&i.value.fitBounds(a)),r.value=t,L("init-map",i.value)};return W(()=>{var e,a;(a=(e=window.google)==null?void 0:e.maps)!=null&&a.Map&&window.initMap?M():(window.initMap=M,b(`https://maps.googleapis.com/maps/api/js?key=${y.googleApi.DEV}&callback=initMap`))}),x(()=>{var e;return[(e=o.data)==null?void 0:e.center]},()=>{var e,a,t,s;if((a=(e=window.google)==null?void 0:e.maps)!=null&&a.Map&&window.initMap&&((t=o.data)!=null&&t.center)){i.value.setZoom(15),i.value.setCenter((s=o.data)==null?void 0:s.center),r.value.forEach(p=>{var g;return(g=p==null?void 0:p.infoWindow)==null?void 0:g.close()});const n=r.value.find(p=>p.id===o.activeShopId);n&&(n.infoWindow.close(),n.infoWindow.setContent(n.content),n.infoWindow.open(n.marker.getMap(),n.marker))}}),(e,a)=>(R(),E("div",{id:"map",ref_key:"mapRef",ref:f,class:"google-map"},null,512))}};export{V as default};
