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
  }, _attrs))}><g clip-path="url(#google-icon-gradient)  "><path d="M7.09187 19.3369L5.978 23.4951L1.90681 23.5812C0.690125 21.3246 0 18.7426 0 15.9989C0 13.3457 0.64525 10.8437 1.789 8.64062H1.78987L5.41437 9.30512L7.00212 12.9079C6.66981 13.8767 6.48869 14.9167 6.48869 15.9989C6.48881 17.1734 6.70156 18.2987 7.09187 19.3369Z" fill="#FBBB00"></path><path d="M31.7203 13.0117C31.904 13.9796 31.9998 14.9792 31.9998 16.0007C31.9998 17.1462 31.8794 18.2636 31.6499 19.3414C30.8711 23.0091 28.8359 26.2117 26.0166 28.4781L26.0157 28.4772L21.4504 28.2443L20.8043 24.2108C22.6751 23.1137 24.1371 21.3968 24.9072 19.3414H16.3516V13.0117H25.032H31.7203Z" fill="#518EF8"></path><path d="M26.0153 28.4763L26.0161 28.4772C23.2742 30.6812 19.7911 31.9998 15.9994 31.9998C9.90625 31.9998 4.60869 28.5941 1.90625 23.5823L7.09131 19.3379C8.4425 22.944 11.9212 25.5111 15.9994 25.5111C17.7524 25.5111 19.3946 25.0372 20.8038 24.21L26.0153 28.4763Z" fill="#28B446"></path><path d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01537 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8822 0 23.4418 1.38287 26.2128 3.6835Z" fill="#F14336"></path></g><defs><clipPath id="google-icon-gradient"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/AuthGoogleIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthGoogleIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AuthGoogleIcon as default };
//# sourceMappingURL=AuthGoogleIcon-yJQ6Zv_H.mjs.map
