import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@vueuse/core';
import 'zod';
import 'humps';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "21",
    viewBox: "0 0 16 21",
    fill: "none"
  }, _attrs))}><path d="M8 5.5C7.50555 5.5 7.0222 5.64662 6.61108 5.92133C6.19995 6.19603 5.87952 6.58648 5.6903 7.04329C5.50108 7.50011 5.45157 8.00277 5.54804 8.48772C5.6445 8.97268 5.8826 9.41813 6.23223 9.76777C6.58186 10.1174 7.02732 10.3555 7.51227 10.452C7.99723 10.5484 8.49989 10.4989 8.95671 10.3097C9.41352 10.1205 9.80397 9.80005 10.0787 9.38892C10.3534 8.9778 10.5 8.49445 10.5 8C10.4992 7.33719 10.2356 6.70174 9.76693 6.23307C9.29826 5.76439 8.66281 5.50075 8 5.5ZM8 9.25C7.75277 9.25 7.5111 9.17669 7.30554 9.03934C7.09998 8.90198 6.93976 8.70676 6.84515 8.47835C6.75054 8.24995 6.72579 7.99861 6.77402 7.75614C6.82225 7.51366 6.9413 7.29093 7.11612 7.11612C7.29093 6.9413 7.51366 6.82225 7.75614 6.77402C7.99861 6.72579 8.24995 6.75054 8.47835 6.84515C8.70676 6.93976 8.90199 7.09998 9.03934 7.30554C9.17669 7.5111 9.25 7.75277 9.25 8C9.24962 8.3314 9.1178 8.64912 8.88346 8.88346C8.64912 9.1178 8.3314 9.24962 8 9.25Z" fill="#121212" fill-opacity="0.74902"></path><path d="M13.3032 2.67675C11.9919 1.37735 10.2415 0.605449 8.38975 0.510033C6.53802 0.414617 4.71627 1.00245 3.27609 2.16007C1.83591 3.31769 0.879411 4.96305 0.591187 6.77857C0.302963 8.5941 0.703449 10.4511 1.71535 11.9912L6.92943 19.925C7.04546 20.1016 7.20411 20.2466 7.391 20.347C7.57789 20.4474 7.78711 20.5 7.99968 20.5C8.21226 20.5 8.42147 20.4474 8.60836 20.347C8.79525 20.2466 8.9539 20.1016 9.06993 19.925L14.2842 11.9912C15.2231 10.5625 15.6381 8.85741 15.4595 7.1616C15.2809 5.4658 14.5196 3.88238 13.3032 2.67675ZM13.1279 11.2445L7.9997 19.0475L2.87144 11.2445C1.3017 8.85605 1.63838 5.65964 3.67196 3.64392C4.24029 3.0806 4.91499 2.63375 5.65754 2.32888C6.4001 2.02401 7.19596 1.8671 7.9997 1.8671C8.80344 1.8671 9.59931 2.02401 10.3419 2.32888C11.0844 2.63375 11.7591 3.0806 12.3274 3.64392C14.361 5.65964 14.6977 8.85605 13.1279 11.2445Z" fill="#121212" fill-opacity="0.74902"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/MarkerIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarkerIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { MarkerIcon as default };
//# sourceMappingURL=MarkerIcon-DiytCFjL.mjs.map
