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
  }, _attrs))}><path d="M8 16C6.90462 16 5.87305 15.79 4.90528 15.3699C3.94284 14.9551 3.09206 14.3809 2.35294 13.6471C1.61914 12.9079 1.04221 12.0572 0.622134 11.0947C0.207378 10.127 0 9.09538 0 8C0 6.90462 0.207378 5.87571 0.622134 4.91326C1.04221 3.9455 1.61914 3.09472 2.35294 2.36092C3.08674 1.6218 3.93486 1.04487 4.89731 0.63011C5.86507 0.210037 6.89664 0 7.99202 0C9.0874 0 10.119 0.210037 11.0867 0.63011C12.0545 1.04487 12.9053 1.6218 13.6391 2.36092C14.3729 3.09472 14.9498 3.9455 15.3699 4.91326C15.79 5.87571 16 6.90462 16 8C16 9.09538 15.79 10.127 15.3699 11.0947C14.9498 12.0572 14.3729 12.9079 13.6391 13.6471C12.9053 14.3809 12.0545 14.9551 11.0867 15.3699C10.1243 15.79 9.09538 16 8 16ZM8 14.9711C8.96245 14.9711 9.86374 14.7903 10.7039 14.4287C11.5494 14.0671 12.2911 13.5673 12.9292 12.9292C13.5726 12.2911 14.0724 11.552 14.4287 10.7119C14.7903 9.8664 14.9711 8.96245 14.9711 8C14.9711 7.03755 14.7903 6.13626 14.4287 5.29611C14.0671 4.45065 13.5673 3.70887 12.9292 3.07079C12.2911 2.42738 11.5494 1.92755 10.7039 1.57129C9.86374 1.2097 8.95979 1.02891 7.99202 1.02891C7.02958 1.02891 6.12562 1.2097 5.28016 1.57129C4.44001 1.92755 3.7009 2.42738 3.06281 3.07079C2.43004 3.70887 1.93287 4.45065 1.57129 5.29611C1.21502 6.13626 1.03689 7.03755 1.03689 8C1.03689 8.96245 1.21502 9.8664 1.57129 10.7119C1.93287 11.552 2.4327 12.2911 3.07079 12.9292C3.70887 13.5673 4.44799 14.0671 5.28814 14.4287C6.12828 14.7903 7.03224 14.9711 8 14.9711ZM7.99202 9.42772C7.66766 9.42772 7.50282 9.2549 7.49751 8.90927L7.40977 4.64207C7.40445 4.47723 7.45497 4.34164 7.56132 4.23529C7.66766 4.12895 7.80857 4.07577 7.98405 4.07577C8.1542 4.07577 8.29511 4.1316 8.40678 4.24327C8.51844 4.34962 8.57162 4.48255 8.5663 4.64207L8.47059 8.90927C8.46527 9.2549 8.30575 9.42772 7.99202 9.42772ZM7.99202 11.9003C7.78465 11.9003 7.60917 11.8285 7.4656 11.6849C7.32203 11.5414 7.25025 11.3739 7.25025 11.1825C7.25025 10.9804 7.32203 10.8102 7.4656 10.672C7.60917 10.5337 7.78465 10.4646 7.99202 10.4646C8.19408 10.4646 8.3669 10.5337 8.51047 10.672C8.65404 10.8102 8.72582 10.9804 8.72582 11.1825C8.72582 11.3792 8.65138 11.5494 8.50249 11.6929C8.35892 11.8312 8.18877 11.9003 7.99202 11.9003Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/WarningWithBorderIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=WarningWithBorderIcon-DQpM1ILb.mjs.map
