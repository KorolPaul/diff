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
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_10167_33641)"><path d="M16.8661 12.3273V16.8667H14.3517V12.6306C14.3517 11.5673 13.988 10.8416 13.0775 10.8416C12.3828 10.8416 11.9687 11.3303 11.7868 11.8043C11.7211 11.9737 11.7035 12.2095 11.7035 12.4452V16.8667H9.18785C9.18785 16.8667 9.22188 9.6936 9.18785 8.95075H11.7035V10.0718L11.6871 10.0976H11.7035V10.073C12.0379 9.53275 12.6339 8.76411 13.9704 8.76411C15.6248 8.76411 16.8661 9.89619 16.8661 12.3273ZM6.55607 5.13336C5.69601 5.13336 5.13281 5.72519 5.13281 6.50119C5.13281 7.26245 5.67959 7.87024 6.52321 7.87024H6.53964C7.41729 7.87024 7.96289 7.26123 7.96289 6.50119C7.94647 5.72519 7.41729 5.13336 6.55607 5.13336ZM5.28183 16.8667H7.79745V8.95075H5.28183V16.8667Z" fill="currentColor"></path><rect x="1" y="1" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"></rect></g><defs><clipPath id="clip0_10167_33641"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LinkedinIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkedinIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LinkedinIcon as default };
//# sourceMappingURL=LinkedinIcon-JcTmEpDG.mjs.map
