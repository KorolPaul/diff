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
  }, _attrs))}><path d="M12 22C6.48039 22 2 17.5196 2 12C2 6.48039 6.48039 2 12 2C17.5196 2 22 6.48039 22 12C22 17.5196 17.5196 22 12 22ZM12 20.3333C14.0784 20.3333 15.9706 19.5784 17.4314 18.3235L11.6863 12.7059C11.5 12.5294 11.451 12.3529 11.451 12.1373V3.68627C7.09804 3.97059 3.66667 7.57843 3.66667 12C3.66667 16.6078 7.39216 20.3333 12 20.3333ZM12.7647 11.1471L19.049 7.53922C17.6961 5.41176 15.4118 3.94118 12.7647 3.69608V11.1471ZM13.3137 12.3529L18.3824 17.3627C19.598 15.9118 20.3333 14.0392 20.3333 12C20.3333 10.8235 20.098 9.71569 19.6569 8.70588L13.3137 12.3529Z" fill="#1D1D1F"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PartialPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PartialPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PartialPayment as default };
//# sourceMappingURL=PartialPayment-Dtuj-gK3.mjs.map
