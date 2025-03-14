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
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _attrs))}><path d="M9.86008 18.2402C5.23837 18.2402 1.47192 14.4737 1.47192 9.85203C1.47192 5.22209 5.23837 1.46387 9.86008 1.46387C14.49 1.46387 18.2482 5.22209 18.2482 9.85203C18.2482 14.4737 14.49 18.2402 9.86008 18.2402ZM8.93903 13.8734C9.21863 13.8734 9.45712 13.7418 9.62982 13.4704L13.495 7.38492C13.5936 7.21222 13.7005 7.02308 13.7005 6.84216C13.7005 6.45564 13.3634 6.20893 13.0015 6.20893C12.7877 6.20893 12.5739 6.34051 12.4176 6.58722L8.90613 12.2287L7.23673 10.0741C7.03113 9.80268 6.85021 9.72867 6.61173 9.72867C6.24166 9.72867 5.95383 10.0329 5.95383 10.403C5.95383 10.5922 6.02784 10.7731 6.1512 10.9376L8.21534 13.4704C8.42916 13.7583 8.65942 13.8734 8.93903 13.8734Z" fill="#00AA00"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/SuccessIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuccessIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SuccessIcon as default };
//# sourceMappingURL=SuccessIcon-CLbK7ca1.mjs.map
