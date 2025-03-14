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
  }, _attrs))}><path d="M4.75761 20C2.92213 20 2 19.0954 2 17.2863V7.72248C2 5.91335 2.92213 5 4.75761 5H19.8806C21.7248 5 22.6382 5.91335 22.6382 7.72248V17.2863C22.6382 19.0954 21.7248 20 19.8806 20H4.75761ZM3.41393 7.80152V8.49532H21.2242V7.80152C21.2242 6.88817 20.7237 6.41393 19.863 6.41393H4.77518C3.89696 6.41393 3.41393 6.88817 3.41393 7.80152ZM4.77518 18.5861H19.863C20.7237 18.5861 21.2242 18.1206 21.2242 17.2073V10.4889H3.41393V17.2073C3.41393 18.1206 3.89696 18.5861 4.77518 18.5861ZM5.94321 16.9262C5.42506 16.9262 5.08255 16.5749 5.08255 16.0831V14.4584C5.08255 13.9578 5.42506 13.6153 5.94321 13.6153H8.09485C8.613 13.6153 8.9555 13.9578 8.9555 14.4584V16.0831C8.9555 16.5749 8.613 16.9262 8.09485 16.9262H5.94321Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PaymentCreditCardIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentCreditCardIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PaymentCreditCardIcon as default };
//# sourceMappingURL=PaymentCreditCardIcon-HeoqeTbM.mjs.map
