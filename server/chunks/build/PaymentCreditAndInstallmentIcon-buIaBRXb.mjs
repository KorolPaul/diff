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
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0516 21.7849C13.3884 21.9258 12.7021 22 12 22C6.52611 22 2 17.4739 2 12C2 6.52611 6.51644 2 11.9903 2C17.4739 2 22.0097 6.52611 22.0097 12C22.0097 12.7051 21.9346 13.3944 21.792 14.0604C21.3039 13.4521 20.689 12.9497 19.9875 12.5934C20.0014 12.3975 20.0082 12.1996 20.0077 12C19.9981 7.56093 16.4294 4.00193 11.9903 4.00193C7.56093 4.00193 4.01161 7.56093 4.01161 12C4.01161 16.4391 7.56093 20.0077 12 20.0077C12.1994 20.0077 12.3971 20.0005 12.5928 19.9864C12.9474 20.685 13.4469 21.2976 14.0516 21.7849ZM11.9903 13.2186H7.12573C6.69052 13.2186 6.35203 12.8801 6.35203 12.4449C6.35203 12.0097 6.69052 11.6712 7.12573 11.6712H11.2263V6.11992C11.2263 5.68472 11.5648 5.34623 11.9903 5.34623C12.4352 5.34623 12.7737 5.68472 12.7737 6.11992V12.4449C12.7737 12.8801 12.4352 13.2186 11.9903 13.2186Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22ZM18.9291 20.1205C19.5799 20.1205 20 19.6281 20 18.8636C20 18.0992 19.5833 17.6102 18.9291 17.6102C18.2748 17.6102 17.8512 18.1026 17.8512 18.8636C17.8512 19.6281 18.2748 20.1205 18.9291 20.1205ZM19.3698 18.8636C19.3698 19.3388 19.2011 19.635 18.9291 19.635C18.6536 19.635 18.4814 19.3354 18.4814 18.8636C18.4814 18.3919 18.6536 18.0992 18.9291 18.0992C19.208 18.0992 19.3698 18.3815 19.3698 18.8636ZM16.0778 17.5103C16.7287 17.5103 17.1488 17.0179 17.1488 16.2534C17.1488 15.489 16.7321 15 16.0778 15C15.4236 15 15 15.4924 15 16.2534C15 17.0179 15.4236 17.5103 16.0778 17.5103ZM16.5186 16.2534C16.5186 16.7287 16.3499 17.0248 16.0778 17.0248C15.8023 17.0248 15.6302 16.7252 15.6302 16.2534C15.6302 15.7817 15.8023 15.489 16.0778 15.489C16.3567 15.489 16.5186 15.7713 16.5186 16.2534ZM15.3202 20.0585H16.0227L19.6488 15.0895H18.9532L15.3202 20.0585Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PaymentCreditAndInstallmentIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentCreditAndInstallmentIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PaymentCreditAndInstallmentIcon as default };
//# sourceMappingURL=PaymentCreditAndInstallmentIcon-buIaBRXb.mjs.map
