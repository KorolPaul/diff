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
    width: "44",
    height: "44",
    viewBox: "0 0 44 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M25.9398 15.94L21.9998 19.878L18.0598 15.938C17.7784 15.6569 17.3968 15.4991 16.9991 15.4993C16.6013 15.4995 16.2199 15.6576 15.9388 15.939C15.6576 16.2204 15.4998 16.602 15.5 16.9997C15.5002 17.3975 15.6584 17.7789 15.9398 18.06L19.8798 22L15.9398 25.94C15.8006 26.0792 15.6902 26.2445 15.6148 26.4264C15.5395 26.6082 15.5007 26.8032 15.5007 27C15.5007 27.1969 15.5395 27.3918 15.6148 27.5737C15.6902 27.7556 15.8006 27.9208 15.9398 28.06C16.079 28.1992 16.2442 28.3097 16.4261 28.385C16.608 28.4603 16.8029 28.4991 16.9998 28.4991C17.1966 28.4991 17.3916 28.4603 17.5734 28.385C17.7553 28.3097 17.9206 28.1992 18.0598 28.06L21.9998 24.12L25.9398 28.06C26.0788 28.1995 26.244 28.3101 26.4259 28.3856C26.6078 28.4611 26.8028 28.5 26.9998 28.5C27.1967 28.5 27.3917 28.4611 27.5736 28.3856C27.7555 28.3101 27.9207 28.1995 28.0598 28.06C28.199 27.9208 28.3094 27.7556 28.3848 27.5737C28.4601 27.3918 28.4989 27.1969 28.4989 27C28.4989 26.8032 28.4601 26.6082 28.3848 26.4264C28.3094 26.2445 28.199 26.0792 28.0598 25.94L24.1218 22L28.0618 18.06C28.3429 17.7788 28.5008 17.3974 28.5007 16.9997C28.5006 16.602 28.3425 16.2207 28.0613 15.9395C27.78 15.6584 27.3986 15.5005 27.0009 15.5006C26.6032 15.5007 26.2219 15.6588 25.9408 15.94H25.9398Z" fill="#DE3618" stroke="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ErrorIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ErrorIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ErrorIcon as default };
//# sourceMappingURL=ErrorIcon-C83xBsWq.mjs.map
