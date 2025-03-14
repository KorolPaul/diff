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
  }, _attrs))}><path d="M5.84301 0C2.60624 0 0 2.60623 0 5.843V26.157C0 29.3937 2.60624 32 5.84301 32H16.853V19.49H13.545V14.986H16.853V11.138C16.853 8.1148 18.8076 5.339 23.31 5.339C25.133 5.339 26.481 5.514 26.481 5.514L26.375 9.72001C26.375 9.72001 25.0002 9.70702 23.5 9.70702C21.8764 9.70702 21.616 10.4551 21.616 11.697V14.986H26.504L26.291 19.49H21.616V32H26.157C29.3938 32 32 29.3938 32 26.157V5.84303C32 2.60627 29.3938 3.19999e-05 26.157 3.19999e-05H5.84298L5.84301 0Z" fill="url(#fb-icon-gradient)"></path><defs><linearGradient id="fb-icon-gradient" x1="16" y1="40" x2="16" y2="5.39831e-07" gradientUnits="userSpaceOnUse"><stop stop-color="#0062DA"></stop><stop offset="1" stop-color="#009FF7"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/AuthFacebookIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthFacebookIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AuthFacebookIcon as default };
//# sourceMappingURL=AuthFacebookIcon-BcoALhtb.mjs.map
