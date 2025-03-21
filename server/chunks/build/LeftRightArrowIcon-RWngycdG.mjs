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
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10 17C6.13627 17 3 13.8637 3 10C3 6.13627 6.13627 3 10 3C13.8637 3 17 6.13627 17 10C17 13.8637 13.8637 17 10 17ZM10 15.8333C13.2255 15.8333 15.8333 13.2255 15.8333 10C15.8333 6.77451 13.2255 4.16667 10 4.16667C6.77451 4.16667 4.16667 6.77451 4.16667 10C4.16667 13.2255 6.77451 15.8333 10 15.8333ZM14.2549 10.0069C14.2549 10.151 14.1931 10.2608 14.0627 10.398L12.0794 12.3951C11.9902 12.4843 11.8667 12.5324 11.7225 12.5324C11.4412 12.5324 11.2284 12.3127 11.2284 12.0382C11.2284 11.8873 11.2902 11.7637 11.3794 11.6676L11.901 11.1529L12.7245 10.4667L11.2765 10.5147H8.69608L7.24804 10.4667L8.07843 11.1529L8.6 11.6676C8.68922 11.7637 8.75098 11.8873 8.75098 12.0382C8.75098 12.3127 8.53824 12.5324 8.25686 12.5324C8.11274 12.5324 7.98922 12.4843 7.9 12.3951L5.91667 10.398C5.78627 10.2608 5.72451 10.151 5.72451 10.0069C5.72451 9.84902 5.78627 9.73235 5.91667 9.60196L7.9 7.61863C7.98922 7.52255 8.11274 7.47451 8.25686 7.47451C8.53824 7.47451 8.75098 7.69412 8.75098 7.97549C8.75098 8.11961 8.69608 8.25 8.6 8.33922L8.07843 8.84706L7.24118 9.54706L8.69608 9.49216H11.2765L12.7314 9.54706L11.901 8.84706L11.3794 8.33922C11.2833 8.25 11.2284 8.11961 11.2284 7.97549C11.2284 7.69412 11.4412 7.47451 11.7225 7.47451C11.8667 7.47451 11.9902 7.52255 12.0794 7.61863L14.0627 9.60196C14.1931 9.73235 14.2549 9.84902 14.2549 10.0069Z" fill="currentColor" fill-opacity="0.74902"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LeftRightArrowIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LeftRightArrowIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LeftRightArrowIcon as default };
//# sourceMappingURL=LeftRightArrowIcon-RWngycdG.mjs.map
