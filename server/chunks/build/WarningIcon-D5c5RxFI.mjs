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
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none"
  }, _attrs))}><path d="M8.96875 16.9375C4.57812 16.9375 1 13.3594 1 8.96875C1 4.57031 4.57812 1 8.96875 1C13.3672 1 16.9375 4.57031 16.9375 8.96875C16.9375 13.3594 13.3672 16.9375 8.96875 16.9375Z" fill="\u0441urrentColor"></path><path d="M8.34712 10.5946C8.34763 10.6219 8.36986 10.6437 8.39711 10.6437H9.59567C9.62292 10.6437 9.64515 10.6219 9.64566 10.5946L9.7684 4.00093C9.76865 3.98751 9.7635 3.97455 9.75409 3.96498C9.74469 3.9554 9.73183 3.95 9.71841 3.95H8.27437C8.26095 3.95 8.24809 3.9554 8.23869 3.96498C8.22928 3.97455 8.22413 3.98751 8.22438 4.00093L8.34712 10.5946ZM7.95 13.0492C7.95 13.6334 8.39374 14.05 9.00361 14.05C9.61397 14.05 10.05 13.6329 10.05 13.0492C10.05 12.7561 9.94221 12.5034 9.75578 12.3241C9.56949 12.1449 9.30752 12.0417 9.00361 12.0417C8.3935 12.0417 7.95 12.4585 7.95 13.0492Z" fill="white" stroke="white" stroke-width="0.1" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/WarningIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=WarningIcon-D5c5RxFI.mjs.map
