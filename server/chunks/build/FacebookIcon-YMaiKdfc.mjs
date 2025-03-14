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
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.99984 0C3.58169 0 0 3.59492 0 8.02939C0 11.7948 2.58299 14.9546 6.0674 15.8224V10.4832H4.41783V8.02939H6.0674V6.97208C6.0674 4.2392 7.29969 2.97248 9.97292 2.97248C10.4798 2.97248 11.3543 3.07236 11.7121 3.17193V5.39607C11.5233 5.37616 11.1953 5.3662 10.7879 5.3662C9.47629 5.3662 8.96942 5.86499 8.96942 7.16157V8.02939H11.5825L11.1335 10.4832H8.96942V16C12.9306 15.5198 16 12.1347 16 8.02939C15.9997 3.59492 12.418 0 7.99984 0Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/FacebookIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FacebookIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FacebookIcon as default };
//# sourceMappingURL=FacebookIcon-YMaiKdfc.mjs.map
