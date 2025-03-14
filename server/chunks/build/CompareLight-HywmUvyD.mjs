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
    width: "17.9",
    height: "15",
    viewBox: "0 0 17.9 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.55556 14.7778H13.4444M3.66667 2.33333H9H14.3333M3.66667 2.33333H14.3333M3.66667 2.33333L6.33333 7.66667C6.33333 8.37391 6.05238 9.05219 5.55229 9.55228C5.05219 10.0524 4.37391 10.3333 3.66667 10.3333C2.95942 10.3333 2.28115 10.0524 1.78105 9.55228C1.28095 9.05219 1 8.37391 1 7.66667L3.66667 2.33333ZM14.3333 2.33333L17 7.66667C17 8.37391 16.719 9.05219 16.219 9.55228C15.7189 10.0524 15.0406 10.3333 14.3333 10.3333C13.6261 10.3333 12.9478 10.0524 12.4477 9.55228C11.9476 9.05219 11.6667 8.37391 11.6667 7.66667L14.3333 2.33333ZM9 1V14.7778" stroke="#121212" stroke-opacity="0.74902" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CompareLight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompareLight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CompareLight as default };
//# sourceMappingURL=CompareLight-HywmUvyD.mjs.map
