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
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20"
  }, _attrs))}><path d="M6.31104 9.13574C6.31104 8.99767 6.42296 8.88574 6.56104 8.88574H13.7464C13.8844 8.88574 13.9964 8.99767 13.9964 9.13574C13.9964 9.27381 13.8844 9.38574 13.7464 9.38574H6.56104C6.42296 9.38574 6.31104 9.27381 6.31104 9.13574Z" fill="currentColor"></path><path d="M6.31104 14.0544C6.31104 13.9164 6.42296 13.8044 6.56104 13.8044H13.439C13.577 13.8044 13.689 13.9164 13.689 14.0544C13.689 14.1925 13.577 14.3044 13.439 14.3044H6.56104C6.42296 14.3044 6.31104 14.1925 6.31104 14.0544Z" fill="currentColor"></path><path d="M6.92587 11.5952C6.92587 11.4571 7.0378 11.3452 7.17587 11.3452H12.8241C12.9622 11.3452 13.0741 11.4571 13.0741 11.5952C13.0741 11.7333 12.9622 11.8452 12.8241 11.8452H7.17587C7.0378 11.8452 6.92587 11.7333 6.92587 11.5952Z" fill="currentColor"></path><path d="M5.19623 1.77832C5.19623 0.949892 5.8678 0.27832 6.69623 0.27832H13.3038C14.1322 0.27832 14.8038 0.949893 14.8038 1.77832V3.46728C14.8038 4.29571 14.1322 4.96728 13.3038 4.96728H6.69623C5.8678 4.96728 5.19623 4.29571 5.19623 3.46728V1.77832ZM6.69623 1.27832C6.42009 1.27832 6.19623 1.50218 6.19623 1.77832V3.46728C6.19623 3.74342 6.42009 3.96728 6.69623 3.96728H13.3038C13.5799 3.96728 13.8038 3.74342 13.8038 3.46728V1.77832C13.8038 1.50218 13.5799 1.27832 13.3038 1.27832H6.69623Z" fill="currentColor"></path><path d="M3.73691 2.50806V18.7232H16.2631V2.50806H14.4981V1.50806H16.2631C16.8154 1.50806 17.2631 1.95577 17.2631 2.50806V18.7232C17.2631 19.2755 16.8154 19.7232 16.2631 19.7232H3.73691C3.18462 19.7232 2.73691 19.2755 2.73691 18.7232V2.50806C2.73691 1.95577 3.18462 1.50806 3.73691 1.50806H5.75974V2.50806L3.73691 2.50806Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/Text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Text as default };
//# sourceMappingURL=Text-jmyfLZn8.mjs.map
