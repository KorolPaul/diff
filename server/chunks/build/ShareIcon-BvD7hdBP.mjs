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
    width: "14",
    height: "17",
    viewBox: "0 0 14 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.85534 16.5002C2.1551 16.5002 1.62752 16.3228 1.27261 15.9679C0.917692 15.6178 0.740234 15.095 0.740234 14.3995V7.03981C0.740234 6.34437 0.917692 5.82159 1.27261 5.47147C1.62752 5.11655 2.1551 4.93909 2.85534 4.93909H5.27261V5.82399H2.87692C2.46925 5.82399 2.1575 5.9319 1.94167 6.14773C1.73064 6.35876 1.62513 6.67291 1.62513 7.09017V14.3492C1.62513 14.7664 1.73064 15.0806 1.94167 15.2916C2.1575 15.5074 2.46925 15.6154 2.87692 15.6154H11.1215C11.5196 15.6154 11.8266 15.5074 12.0424 15.2916C12.263 15.0806 12.3733 14.7664 12.3733 14.3492V7.09017C12.3733 6.67291 12.263 6.35876 12.0424 6.14773C11.8266 5.9319 11.5196 5.82399 11.1215 5.82399H8.72585V4.93909H11.1431C11.8434 4.93909 12.3709 5.11655 12.7258 5.47147C13.0808 5.82638 13.2582 6.34916 13.2582 7.03981V14.3995C13.2582 15.0854 13.0808 15.6058 12.7258 15.9607C12.3709 16.3204 11.8434 16.5002 11.1431 16.5002H2.85534ZM6.99923 10.9607C6.87932 10.9607 6.77621 10.9199 6.68987 10.8384C6.60354 10.752 6.56038 10.6489 6.56038 10.529V2.78082L6.59635 1.73046L5.94167 2.39952L4.71865 3.67291C4.64191 3.76403 4.54119 3.8096 4.41649 3.8096C4.30139 3.8096 4.20546 3.77123 4.12872 3.69449C4.05678 3.61775 4.02081 3.52422 4.02081 3.41391C4.02081 3.3084 4.06158 3.21247 4.14311 3.12614L6.68268 0.651323C6.73544 0.593769 6.7858 0.5554 6.83376 0.536215C6.88652 0.512235 6.94167 0.500244 6.99923 0.500244C7.05678 0.500244 7.10954 0.512235 7.1575 0.536215C7.21026 0.5554 7.26302 0.593769 7.31577 0.651323L9.84815 3.12614C9.93448 3.21247 9.97764 3.3084 9.97764 3.41391C9.97764 3.52422 9.93927 3.61775 9.86254 3.69449C9.7858 3.77123 9.68987 3.8096 9.57477 3.8096C9.45486 3.8096 9.35414 3.76403 9.27261 3.67291L8.04959 2.39952L7.4093 1.73046L7.43808 2.78082V10.529C7.43808 10.6489 7.39491 10.752 7.30858 10.8384C7.22225 10.9199 7.11913 10.9607 6.99923 10.9607Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ShareIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShareIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ShareIcon as default };
//# sourceMappingURL=ShareIcon-BvD7hdBP.mjs.map
