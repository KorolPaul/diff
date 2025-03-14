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
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.66955 20.743C2.88985 20.743 2 19.879 2 18.108V9.70194C2 7.93089 2.88985 7.06695 4.66955 7.06695H7.61555V6.38445C7.61555 4.76026 8.55724 4 10.0346 4H13.9568C15.5205 4 16.3758 4.76026 16.3758 6.38445V7.06695H19.3305C21.1188 7.06695 22 7.93089 22 9.70194V18.108C22 19.879 21.1188 20.743 19.3305 20.743H4.66955ZM8.95464 6.28942V7.06695H15.0367V6.28942C15.0367 5.63283 14.6566 5.26134 13.9827 5.26134H10.0173C9.34341 5.26134 8.95464 5.63283 8.95464 6.28942ZM3.39093 9.77106V10.73C5.93952 11.6631 8.85097 12.1209 11.9957 12.1209C15.149 12.1209 18.0518 11.6631 20.6091 10.7387V9.77106C20.6091 8.88985 20.1598 8.44924 19.3132 8.44924H4.68683C3.84017 8.44924 3.39093 8.88985 3.39093 9.77106ZM4.68683 19.3607H19.3132C20.1598 19.3607 20.6091 18.9287 20.6091 18.0389V12.1814C18.6566 12.8294 16.5313 13.2181 14.3024 13.3823V14.0821C14.3024 14.6868 13.9482 15.0238 13.3434 15.0238H10.6566C10.0518 15.0238 9.69762 14.6868 9.69762 14.0821V13.3823C7.46868 13.2181 5.34341 12.8294 3.39093 12.1814V18.0389C3.39093 18.9287 3.84017 19.3607 4.68683 19.3607Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PaymentCashlessPaymentIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentCashlessPaymentIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PaymentCashlessPaymentIcon as default };
//# sourceMappingURL=PaymentCashlessPaymentIcon-PI4NO1Ou.mjs.map
