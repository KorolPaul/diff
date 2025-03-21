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
    width: "23",
    height: "18",
    viewBox: "0 0 23 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M22.9609 2.11613C22.1428 2.475 21.2711 2.71288 20.3622 2.82838C21.2972 2.27013 22.0108 1.39287 22.3463 0.3355C21.4746 0.85525 20.5121 1.22238 19.4863 1.42725C18.6586 0.545875 17.4788 0 16.1918 0C13.6948 0 11.6846 2.02675 11.6846 4.51137C11.6846 4.86888 11.7148 5.21263 11.7891 5.53988C8.03944 5.357 4.72156 3.55988 2.49269 0.82225C2.10356 1.49738 1.87531 2.27012 1.87531 3.102C1.87531 4.664 2.67969 6.04862 3.87869 6.85025C3.15406 6.8365 2.44319 6.62613 1.84094 6.29475C1.84094 6.3085 1.84094 6.32638 1.84094 6.34425C1.84094 8.536 3.40431 10.3565 5.45444 10.7759C5.08731 10.8763 4.68719 10.9244 4.27194 10.9244C3.98319 10.9244 3.69169 10.9079 3.41806 10.8474C4.00244 12.6335 5.66069 13.9466 7.63244 13.9893C6.09794 15.1896 4.14956 15.9129 2.04031 15.9129C1.67044 15.9129 1.31569 15.8964 0.960938 15.851C2.95881 17.1394 5.32656 17.875 7.87994 17.875C16.1794 17.875 20.7169 11 20.7169 5.04075C20.7169 4.84137 20.7101 4.64887 20.7004 4.45775C21.5956 3.8225 22.3477 3.02913 22.9609 2.11613Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TwitterIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwitterIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TwitterIcon as default };
//# sourceMappingURL=TwitterIcon-DPRUiPvN.mjs.map
