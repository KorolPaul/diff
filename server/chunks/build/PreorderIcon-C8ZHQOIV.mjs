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
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M13.502 5C13.502 5.16931 13.4914 5.33616 13.471 5.49994H13.9772L12.2226 9.8002C12.1784 9.90833 12.1022 10.001 12.0037 10.0663C11.9053 10.1316 11.7892 10.1665 11.6703 10.1665H6.23167C6.10243 10.1663 5.97678 10.1249 5.8737 10.0485C5.77062 9.97206 5.69571 9.86485 5.6603 9.74303L4.42235 5.49994H5.53289C5.51247 5.33616 5.50195 5.16931 5.50195 5C5.50195 4.77284 5.52089 4.55011 5.55727 4.33329H4.08192L3.77124 3.26931C3.66473 2.90389 3.43975 2.58237 3.13029 2.35337C2.82083 2.12437 2.44372 2.00033 2.05596 2H1.76314C1.60529 2 1.45391 2.06146 1.34229 2.17085C1.23067 2.28025 1.16797 2.42862 1.16797 2.58332C1.16797 2.73803 1.23067 2.8864 1.34229 2.9958C1.45391 3.10519 1.60529 3.16665 1.76314 3.16665H2.05596C2.1852 3.16687 2.31085 3.20831 2.41393 3.28471C2.51701 3.36111 2.59191 3.46832 2.62732 3.59014L4.5152 10.065C4.62197 10.4304 4.84723 10.7518 5.15691 10.9806C5.46659 11.2094 5.84386 11.3332 6.23167 11.3332H11.6703C12.0272 11.3332 12.376 11.2284 12.6715 11.0323C12.9671 10.8362 13.1959 10.5578 13.3285 10.233L15.083 5.93277C15.1551 5.75582 15.182 5.56424 15.1611 5.37479C15.1402 5.18534 15.0724 5.00378 14.9634 4.84599C14.8544 4.68819 14.7076 4.55895 14.5359 4.46958C14.3642 4.38021 14.1728 4.33341 13.9784 4.33329H13.4466C13.483 4.55011 13.502 4.77284 13.502 5ZM6.16797 14.6667C6.72025 14.6667 7.16797 14.219 7.16797 13.6667C7.16797 13.1144 6.72025 12.6667 6.16797 12.6667C5.61568 12.6667 5.16797 13.1144 5.16797 13.6667C5.16797 14.219 5.61568 14.6667 6.16797 14.6667ZM12.168 14.6667C12.7203 14.6667 13.168 14.219 13.168 13.6667C13.168 13.1144 12.7203 12.6667 12.168 12.6667C11.6157 12.6667 11.168 13.1144 11.168 13.6667C11.168 14.219 11.6157 14.6667 12.168 14.6667Z" fill="currentColor"></path><path d="M9.5 8C11.1569 8 12.5 6.65685 12.5 5C12.5 3.34315 11.1569 2 9.5 2C7.84315 2 6.5 3.34315 6.5 5C6.5 6.65685 7.84315 8 9.5 8Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M9.5 3.3501V5.1501" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5009 5.66896L9.54688 5.23096" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PreorderIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PreorderIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PreorderIcon as default };
//# sourceMappingURL=PreorderIcon-C8ZHQOIV.mjs.map
