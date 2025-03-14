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
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.28668 5.90595C7.50857 6.2296 5.95342 6.89946 3.62126 7.91555C3.24256 8.06615 3.04417 8.21348 3.02611 8.35754C2.99559 8.601 3.30047 8.69687 3.71565 8.82741C3.77212 8.84517 3.83064 8.86357 3.89062 8.88307C4.29909 9.01585 4.84855 9.17118 5.13419 9.17735C5.3933 9.18295 5.68249 9.07613 6.00176 8.85689C8.18077 7.386 9.30559 6.64254 9.37621 6.62651C9.42603 6.6152 9.49507 6.60099 9.54184 6.64256C9.58862 6.68414 9.58402 6.76288 9.57907 6.784C9.54886 6.91276 8.35208 8.0254 7.73275 8.60119C7.53967 8.78069 7.40272 8.90801 7.37472 8.93709C7.312 9.00223 7.24809 9.06385 7.18665 9.12307C6.80718 9.48889 6.52261 9.76321 7.20241 10.2112C7.52909 10.4265 7.79051 10.6045 8.05131 10.7821C8.33612 10.9761 8.62019 11.1695 8.98774 11.4104C9.08139 11.4718 9.17082 11.5356 9.25793 11.5977C9.58938 11.834 9.88717 12.0463 10.2551 12.0124C10.4688 11.9928 10.6896 11.7917 10.8018 11.1922C11.0668 9.77543 11.5878 6.70564 11.7081 5.44065C11.7187 5.32982 11.7054 5.18798 11.6948 5.12572C11.6841 5.06345 11.6618 4.97474 11.5809 4.90907C11.4851 4.83129 11.3371 4.81489 11.2709 4.81606C10.97 4.82136 10.5084 4.98188 8.28668 5.90595Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TelegramIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TelegramIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TelegramIcon as default };
//# sourceMappingURL=TelegramIcon-QlQbEE4K.mjs.map
