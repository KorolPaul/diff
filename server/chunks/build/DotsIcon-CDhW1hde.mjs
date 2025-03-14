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
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M1.58559 9.57107C1.29129 9.57107 1.02402 9.499 0.783784 9.35486C0.54955 9.21071 0.36036 9.01852 0.216216 8.77828C0.0720721 8.53804 0 8.27378 0 7.98549C0 7.69119 0.0720721 7.42393 0.216216 7.18369C0.36036 6.94345 0.54955 6.75426 0.783784 6.61612C1.02402 6.47197 1.29129 6.3999 1.58559 6.3999C1.87988 6.3999 2.14715 6.47197 2.38739 6.61612C2.62763 6.75426 2.81682 6.94345 2.95496 7.18369C3.0991 7.42393 3.17117 7.69119 3.17117 7.98549C3.17117 8.27378 3.0991 8.53804 2.95496 8.77828C2.81682 9.01852 2.62763 9.21071 2.38739 9.35486C2.14715 9.499 1.87988 9.57107 1.58559 9.57107ZM8 9.57107C7.70571 9.57107 7.43844 9.499 7.1982 9.35486C6.95796 9.21071 6.76577 9.01852 6.62162 8.77828C6.48348 8.53804 6.41441 8.27378 6.41441 7.98549C6.41441 7.69119 6.48348 7.42393 6.62162 7.18369C6.76577 6.94345 6.95796 6.75426 7.1982 6.61612C7.43844 6.47197 7.70571 6.3999 8 6.3999C8.28829 6.3999 8.55255 6.47197 8.79279 6.61612C9.03904 6.75426 9.23123 6.94345 9.36937 7.18369C9.51351 7.42393 9.58559 7.69119 9.58559 7.98549C9.58559 8.27378 9.51351 8.53804 9.36937 8.77828C9.23123 9.01852 9.03904 9.21071 8.79279 9.35486C8.55255 9.499 8.28829 9.57107 8 9.57107ZM14.4144 9.57107C14.1201 9.57107 13.8529 9.499 13.6126 9.35486C13.3724 9.21071 13.1802 9.01852 13.036 8.77828C12.8919 8.53804 12.8198 8.27378 12.8198 7.98549C12.8198 7.69119 12.8919 7.42393 13.036 7.18369C13.1802 6.94345 13.3724 6.75426 13.6126 6.61612C13.8529 6.47197 14.1201 6.3999 14.4144 6.3999C14.7027 6.3999 14.967 6.47197 15.2072 6.61612C15.4474 6.75426 15.6396 6.94345 15.7838 7.18369C15.9279 7.42393 16 7.69119 16 7.98549C16 8.27378 15.9279 8.53804 15.7838 8.77828C15.6396 9.01852 15.4474 9.21071 15.2072 9.35486C14.967 9.499 14.7027 9.57107 14.4144 9.57107Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/DotsIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DotsIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DotsIcon as default };
//# sourceMappingURL=DotsIcon-CDhW1hde.mjs.map
