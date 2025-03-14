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
  }, _attrs))}><circle cx="24" cy="24" r="23" stroke="#336E7B" stroke-width="2"></circle><path d="M24 34C29.4836 34 34.0097 29.4739 34.0097 24C34.0097 18.5261 29.4739 14 23.9903 14C18.5164 14 14 18.5261 14 24C14 29.4739 18.5261 34 24 34ZM24 32.0077C19.5609 32.0077 16.0116 28.4391 16.0116 24C16.0116 19.5609 19.5609 16.0019 23.9903 16.0019C28.4294 16.0019 31.9981 19.5609 32.0077 24C32.0174 28.4391 28.4391 32.0077 24 32.0077ZM19.1257 25.2186H23.9903C24.4352 25.2186 24.7737 24.8801 24.7737 24.4449V18.1199C24.7737 17.6847 24.4352 17.3462 23.9903 17.3462C23.5648 17.3462 23.2263 17.6847 23.2263 18.1199V23.6712H19.1257C18.6905 23.6712 18.352 24.0097 18.352 24.4449C18.352 24.8801 18.6905 25.2186 19.1257 25.2186Z" fill="#336E7B"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CheckoutWaitingIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutWaitingIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CheckoutWaitingIcon as default };
//# sourceMappingURL=CheckoutWaitingIcon-BxluA5Lw.mjs.map
