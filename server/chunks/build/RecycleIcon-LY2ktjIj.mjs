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
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.16621 3.75008L7.49954 7.08341L5.03047 5.90536L6.93863 2.17035M9.16621 3.75008C7.71482 2.12213 7.8984 2.06587 7.02354 2.16105M9.16621 3.75008L10.4931 5.65356L9.55768 6.57682H13.1869L14.1971 2.71591L13.1869 3.4713L11.5407 1.66675L7.02354 2.16105M6.93863 2.17035C6.96801 2.16713 6.99629 2.16402 7.02354 2.16105M6.93863 2.17035L7.02354 2.16105M15.8329 11.6667L14.1662 8.75008L15.8721 7.04797L18.0239 10.5209M15.8329 11.6667C17.8697 10.942 17.668 11.5115 18.0239 10.5209M15.8329 11.6667L13.5934 12.4607L13.2722 11.152L11.6231 14.6756L14.2848 17.3313L14.1332 16.0228L16.3399 15.2074L18.0239 10.5209M4.99954 13.7501H8.74954L8.8212 16.2693L4.92924 16.2971M4.99954 13.7501C4.61781 15.2969 4.45273 15.5071 4.58304 15.7825M4.99954 13.7501L5.83821 11.2646L7.03677 11.693L5.18565 8.28643L1.65332 9.21838L2.75888 9.79873L2.18841 12.2227L4.58304 15.7825M4.92924 16.2971C4.75315 16.0353 4.63994 15.9027 4.58304 15.7825M4.92924 16.2971L4.58304 15.7825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/RecycleIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RecycleIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { RecycleIcon as default };
//# sourceMappingURL=RecycleIcon-LY2ktjIj.mjs.map
