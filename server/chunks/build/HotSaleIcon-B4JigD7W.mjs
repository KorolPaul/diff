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
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.71224 12.5696C8.72764 13.4855 7.39222 14 5.99978 14C4.94774 13.9999 3.91999 13.7058 3.04978 13.1559C2.17958 12.606 1.50706 11.8255 1.11941 10.9158C0.731766 10.006 0.646879 9.00895 0.875756 8.05379C1.10463 7.09864 1.63672 6.22947 2.40302 5.55898C3.34246 4.73656 5.64976 3.25581 5.29975 0C9.49993 2.60465 11.0365 4.55814 8.23987 9.11628C8.8468 9.11628 9.73304 8.58037 10.9 7.50791C11.089 8.01126 11.25 8.55237 11.25 9.11628C11.25 10.4115 10.6969 11.6537 9.71224 12.5696Z" fill="url(gradient)"></path><defs><linearGradient id="gradient" x1="6" y1="0" x2="6" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#FE585E"></stop><stop offset="1" stop-color="#BB529C"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/HotSaleIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HotSaleIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HotSaleIcon as default };
//# sourceMappingURL=HotSaleIcon-B4JigD7W.mjs.map
