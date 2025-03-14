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
    width: "6",
    height: "11",
    viewBox: "0 0 6 11",
    fill: "none"
  }, _attrs))}><path d="M0.746809 0.62605L5.84043 5.17587C5.94681 5.26791 6 5.37595 6 5.5C6 5.56002 5.98511 5.61805 5.95532 5.67407C5.92553 5.73009 5.88511 5.78011 5.83404 5.82413L0.740425 10.3739C0.655319 10.458 0.553191 10.5 0.434042 10.5C0.348936 10.5 0.274468 10.48 0.210638 10.44C0.146808 10.404 0.0957447 10.3559 0.0574465 10.2959C0.0191489 10.2359 -4.22508e-07 10.1659 -4.1901e-07 10.0858C-4.13763e-07 9.96579 0.0404254 9.86775 0.121276 9.79172L5.21489 5.23589L5.21489 5.76411L0.121277 1.20228C0.0404257 1.13425 -2.34387e-08 1.03621 -1.78414e-08 0.908163C-1.4518e-08 0.832133 0.0191493 0.762105 0.0574469 0.698079C0.0957451 0.638055 0.146809 0.590036 0.210639 0.554021C0.274468 0.518007 0.348937 0.5 0.434043 0.5C0.493617 0.5 0.551064 0.510004 0.606383 0.530012C0.661702 0.554021 0.708511 0.586034 0.746809 0.62605Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ChevronCalendarIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ChevronCalendarIcon-CNazKeI-.mjs.map
