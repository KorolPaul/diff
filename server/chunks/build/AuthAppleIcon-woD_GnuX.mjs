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
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#apple-icon-gradient)"><path d="M22.3638 0.016014C22.2959 -0.059986 19.8458 0.0460141 17.7139 2.36001C15.5819 4.67201 15.9099 7.32401 15.9579 7.39201C16.0059 7.46001 18.9979 7.56601 20.9079 4.87601C22.8179 2.18601 22.4319 0.094014 22.3638 0.016014ZM28.9918 23.482C28.8959 23.29 24.3419 21.014 24.7659 16.638C25.1898 12.26 28.1159 11.06 28.1618 10.93C28.2078 10.8 26.9678 9.35001 25.6538 8.61601C24.6891 8.09852 23.6213 7.80203 22.5278 7.74801C22.3118 7.74201 21.5619 7.55801 20.0198 7.98001C19.0039 8.25801 16.7139 9.15801 16.0838 9.19401C15.4518 9.23001 13.5719 8.15001 11.5499 7.86401C10.2559 7.61401 8.88385 8.12601 7.90185 8.52001C6.92185 8.91201 5.05785 10.028 3.75385 12.994C2.44985 15.958 3.13185 20.654 3.61985 22.114C4.10785 23.572 4.86985 25.962 6.16585 27.706C7.31785 29.674 8.84585 31.04 9.48385 31.504C10.1219 31.968 11.9219 32.276 13.1699 31.638C14.1739 31.022 15.9859 30.668 16.7018 30.694C17.4158 30.72 18.8239 31.002 20.2659 31.772C21.4079 32.166 22.4879 32.002 23.5698 31.562C24.6518 31.12 26.2178 29.444 28.0458 26.046C28.7398 24.466 29.0559 23.612 28.9918 23.482Z" fill="#0A0A0A"></path><path d="M22.3638 0.016014C22.2959 -0.059986 19.8458 0.0460141 17.7139 2.36001C15.5819 4.67201 15.9099 7.32401 15.9579 7.39201C16.0059 7.46001 18.9979 7.56601 20.9079 4.87601C22.8179 2.18601 22.4319 0.094014 22.3638 0.016014ZM28.9918 23.482C28.8959 23.29 24.3419 21.014 24.7659 16.638C25.1898 12.26 28.1159 11.06 28.1618 10.93C28.2078 10.8 26.9678 9.35001 25.6538 8.61601C24.6891 8.09852 23.6213 7.80203 22.5278 7.74801C22.3118 7.74201 21.5619 7.55801 20.0198 7.98001C19.0039 8.25801 16.7139 9.15801 16.0838 9.19401C15.4518 9.23001 13.5719 8.15001 11.5499 7.86401C10.2559 7.61401 8.88385 8.12601 7.90185 8.52001C6.92185 8.91201 5.05785 10.028 3.75385 12.994C2.44985 15.958 3.13185 20.654 3.61985 22.114C4.10785 23.572 4.86985 25.962 6.16585 27.706C7.31785 29.674 8.84585 31.04 9.48385 31.504C10.1219 31.968 11.9219 32.276 13.1699 31.638C14.1739 31.022 15.9859 30.668 16.7018 30.694C17.4158 30.72 18.8239 31.002 20.2659 31.772C21.4079 32.166 22.4879 32.002 23.5698 31.562C24.6518 31.12 26.2178 29.444 28.0458 26.046C28.7398 24.466 29.0559 23.612 28.9918 23.482Z" fill="#0A0A0A"></path></g><defs><clipPath id="apple-icon-gradient"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/AuthAppleIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthAppleIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AuthAppleIcon as default };
//# sourceMappingURL=AuthAppleIcon-woD_GnuX.mjs.map
