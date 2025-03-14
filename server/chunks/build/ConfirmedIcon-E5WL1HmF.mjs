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
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8.36719 16.3281C3.97656 16.3281 0.398438 12.75 0.398438 8.35938C0.398438 3.96094 3.97656 0.390625 8.36719 0.390625C12.7656 0.390625 16.3359 3.96094 16.3359 8.35938C16.3359 12.75 12.7656 16.3281 8.36719 16.3281ZM7.49219 12.1797C7.75781 12.1797 7.98438 12.0547 8.14844 11.7969L11.8203 6.01562C11.9141 5.85156 12.0156 5.67188 12.0156 5.5C12.0156 5.13281 11.6953 4.89844 11.3516 4.89844C11.1484 4.89844 10.9453 5.02344 10.7969 5.25781L7.46094 10.6172L5.875 8.57031C5.67969 8.3125 5.50781 8.24219 5.28125 8.24219C4.92969 8.24219 4.65625 8.53125 4.65625 8.88281C4.65625 9.0625 4.72656 9.23438 4.84375 9.39062L6.80469 11.7969C7.00781 12.0703 7.22656 12.1797 7.49219 12.1797Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ConfirmedIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=ConfirmedIcon-E5WL1HmF.mjs.map
