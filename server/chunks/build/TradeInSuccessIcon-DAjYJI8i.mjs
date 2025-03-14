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
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M32.1473 12.2928C32.3348 12.4803 32.4401 12.7346 32.4401 12.9998C32.4401 13.265 32.3348 13.5193 32.1473 13.7068L16.2673 29.5868C16.0798 29.7743 15.8255 29.8796 15.5603 29.8796C15.2951 29.8796 15.0408 29.7743 14.8533 29.5868L8.30529 23.0368C8.20978 22.9445 8.1336 22.8342 8.08119 22.7122C8.02878 22.5902 8.00119 22.459 8.00004 22.3262C7.99888 22.1934 8.02419 22.0617 8.07447 21.9388C8.12475 21.8159 8.199 21.7043 8.29289 21.6104C8.38679 21.5165 8.49844 21.4422 8.62133 21.392C8.74423 21.3417 8.87591 21.3164 9.00869 21.3175C9.14147 21.3187 9.27269 21.3463 9.39469 21.3987C9.5167 21.4511 9.62704 21.5273 9.71929 21.6228L15.5633 27.4668L30.7353 12.2928C30.9228 12.1053 31.1771 12 31.4423 12C31.7075 12 31.9618 12.1053 32.1493 12.2928H32.1473Z" fill="#008900"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TradeInSuccessIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TradeInSuccessIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TradeInSuccessIcon as default };
//# sourceMappingURL=TradeInSuccessIcon-DAjYJI8i.mjs.map
