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
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98444 0C10.2484 2.27047 11.5154 3.62412 13.7183 3.76812V6.32181C12.4417 6.44661 11.3234 6.029 10.0228 5.24177V10.0179C10.0228 16.0853 3.40944 17.9814 0.750647 13.6324C-0.957893 10.834 0.0883477 5.92339 5.56911 5.72659V8.41947C5.15158 8.48668 4.70524 8.59228 4.29731 8.73148C3.07829 9.1443 2.3872 9.91712 2.57917 11.2804C2.94871 13.8917 7.73838 14.6645 7.34004 9.56191V0.00480016H9.98444V0Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TikTokIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TikTokIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TikTokIcon as default };
//# sourceMappingURL=TikTokIcon-rgwMD6cP.mjs.map
