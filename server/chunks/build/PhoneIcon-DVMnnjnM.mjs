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
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M13.0171 17.1367C10.6009 17.1367 7.65237 15.6244 4.95732 12.9294C2.24537 10.2259 0.75 7.26895 0.75 4.8527C0.75 3.39112 1.14708 2.41955 2.10175 1.57471C2.16934 1.50712 2.24537 1.43953 2.31296 1.38039C2.879 0.873486 3.42815 0.628481 3.95196 0.63693C4.56024 0.645378 5.12629 0.991764 5.65009 1.74367L7.32288 4.14303C7.7453 4.75132 7.64392 5.46943 7.31443 5.99324L6.55407 7.18447C6.41045 7.41257 6.39355 7.57309 6.50338 7.76741C6.78218 8.24897 7.40736 9.01778 8.04945 9.65986C8.68308 10.3104 9.62085 11.0623 9.99259 11.2989C10.2376 11.4509 10.4572 11.4509 10.7107 11.3326L12.0202 10.6906C12.8313 10.3019 13.3804 10.3273 14.0309 10.7666L16.1515 12.2197C16.9034 12.7351 17.2498 13.3265 17.2498 13.9348C17.2498 14.4586 17.0132 15.0077 16.5063 15.5653C16.4387 15.6413 16.3796 15.7089 16.312 15.785C15.4587 16.7396 14.4872 17.1367 13.0171 17.1367ZM13.0256 15.8526C13.9633 15.8357 14.7659 15.5146 15.3489 14.8472C15.3911 14.7965 15.4334 14.7458 15.4756 14.6951C15.6953 14.4417 15.8136 14.1629 15.8136 13.9263C15.8136 13.6729 15.7206 13.4532 15.4672 13.2927L13.4902 11.9663C13.2199 11.7973 12.9664 11.7551 12.6454 11.8987L11.2261 12.5746C10.4404 12.9547 9.98414 12.8703 9.47723 12.4985C8.89429 12.093 7.82134 11.1806 7.17926 10.5385C6.52873 9.89641 5.79371 8.95864 5.3037 8.30811C4.93197 7.8012 4.86439 7.34499 5.23612 6.74515L6.08096 5.3934C6.24993 5.0977 6.25838 4.91184 6.11475 4.70063L4.59404 2.41955C4.42507 2.1661 4.21386 2.07316 3.9604 2.07316C3.72385 2.07316 3.44505 2.19144 3.1916 2.4111C3.14091 2.45334 3.09022 2.49559 3.03953 2.53783C2.3721 3.12077 2.05106 3.91492 2.03416 4.84425C1.99192 7.00705 3.72385 9.86262 5.92889 12.0592C8.11703 14.2389 10.8712 15.8948 13.0256 15.8526Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PhoneIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PhoneIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PhoneIcon as default };
//# sourceMappingURL=PhoneIcon-DVMnnjnM.mjs.map
