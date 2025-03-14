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
  }, _attrs))}><circle cx="24" cy="24" r="23" stroke="#DE3618" stroke-width="2"></circle><path d="M15.9272 15.9252C16.1045 15.7479 16.3198 15.6592 16.5731 15.6592C16.8264 15.6592 17.0385 15.7447 17.2095 15.9157L23.6306 22.3368L30.0422 15.9252C30.2132 15.7542 30.4221 15.6656 30.6691 15.6592C30.9224 15.6592 31.1377 15.7479 31.315 15.9252C31.4923 16.1025 31.581 16.3178 31.581 16.5711C31.581 16.8244 31.4955 17.0365 31.3245 17.2075L24.9129 23.6191L31.315 30.0212C31.4923 30.1985 31.581 30.4138 31.581 30.6671C31.581 30.9204 31.4923 31.1357 31.315 31.3131C31.1377 31.4904 30.9224 31.579 30.6691 31.579C30.4221 31.5727 30.21 31.4809 30.0327 31.3036L23.6306 24.9014L17.2095 31.3225C17.0385 31.4935 16.8264 31.579 16.5731 31.579C16.3198 31.579 16.1045 31.4904 15.9272 31.3131C15.7499 31.1357 15.6612 30.9204 15.6612 30.6671C15.6675 30.4202 15.7562 30.2112 15.9272 30.0402L22.3483 23.6191L15.9272 17.198C15.7562 17.027 15.6675 16.8181 15.6612 16.5711C15.6612 16.3178 15.7499 16.1025 15.9272 15.9252Z" fill="#DE3618"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CheckoutErrorIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutErrorIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CheckoutErrorIcon as default };
//# sourceMappingURL=CheckoutErrorIcon-Zi7RsHYp.mjs.map
