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
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M21.8565 32C21.5758 32 21.3301 31.8664 21.1196 31.5993L16.2105 25.5695C16.1404 25.4804 16.0861 25.3946 16.0478 25.3119C16.0159 25.2228 16 25.1338 16 25.0447C16 24.8539 16.0638 24.6949 16.1914 24.5677C16.3254 24.4341 16.4912 24.3673 16.689 24.3673C16.925 24.3673 17.1324 24.485 17.311 24.7203L21.8278 30.3399L30.7368 16.353C30.8198 16.2258 30.9059 16.1368 30.9952 16.0859C31.0845 16.0286 31.2026 16 31.3493 16C31.5407 16 31.697 16.0604 31.8182 16.1813C31.9394 16.3021 32 16.4611 32 16.6583C32 16.7346 31.9872 16.8142 31.9617 16.8968C31.9362 16.9795 31.8915 17.0718 31.8278 17.1735L22.5646 31.6088C22.386 31.8696 22.1499 32 21.8565 32Z" fill="#008900"></path><circle cx="24" cy="24" r="23" stroke="#008900" stroke-width="2"></circle></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CheckoutSuccessIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutSuccessIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CheckoutSuccessIcon as default };
//# sourceMappingURL=CheckoutSuccessIcon-B4oAPz0f.mjs.map
