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
  }, _attrs))}><path d="M8.14435 10.603C8.02083 10.603 7.91585 10.566 7.78616 10.4425L5.69877 8.42302C5.60614 8.33038 5.55673 8.23157 5.55673 8.10188C5.55673 7.84868 5.742 7.66958 6.00138 7.66958C6.11872 7.66958 6.25458 7.71899 6.34104 7.8178L7.27357 8.81208L7.69352 9.25056L7.65647 8.3242V1.81502C7.65647 1.55564 7.87879 1.33331 8.14435 1.33331C8.4099 1.33331 8.6384 1.55564 8.6384 1.81502V8.3242L8.60135 9.25056L9.95383 7.8178C10.0403 7.71899 10.1638 7.66958 10.2873 7.66958C10.5405 7.66958 10.7381 7.84868 10.7381 8.10188C10.7381 8.23157 10.6826 8.33038 10.5899 8.42302L8.50254 10.4425C8.37902 10.566 8.27404 10.603 8.14435 10.603ZM4.60567 14.6666C3.31495 14.6666 2.6665 14.0244 2.6665 12.7522V6.58883C2.6665 5.31664 3.31495 4.67437 4.60567 4.67437H6.46456V5.66865H4.61802C4.00045 5.66865 3.66079 6.00214 3.66079 6.64441V12.6966C3.66079 13.3389 4.00045 13.6724 4.61802 13.6724H11.6707C12.2821 13.6724 12.6341 13.3389 12.6341 12.6966V6.64441C12.6341 6.00214 12.2821 5.66865 11.6707 5.66865H9.83031V4.67437H11.6892C12.9799 4.67437 13.6284 5.31664 13.6284 6.58883V12.7522C13.6284 14.0244 12.9799 14.6666 11.6892 14.6666H4.60567Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/DownloadIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DownloadIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DownloadIcon as default };
//# sourceMappingURL=DownloadIcon-CNmOvlxA.mjs.map
