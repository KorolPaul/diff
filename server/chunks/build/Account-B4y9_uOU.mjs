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
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10.5996 20C5.13883 20 0.599609 15.4608 0.599609 10C0.599609 4.52941 5.12902 0 10.5898 0C16.0604 0 20.5996 4.52941 20.5996 10C20.5996 15.4608 16.0702 20 10.5996 20ZM10.5996 13.3333C13.5506 13.3333 15.8251 14.3922 16.8153 15.5686C18.1388 14.098 18.9329 12.1471 18.9329 10C18.9329 5.37255 15.2173 1.66667 10.5898 1.66667C5.96235 1.66667 2.27608 5.37255 2.27608 10C2.27608 12.1471 3.0702 14.0882 4.38392 15.5686C5.38392 14.3922 7.64863 13.3333 10.5996 13.3333ZM10.5996 11.6667C8.71726 11.6471 7.24667 10.0784 7.23686 7.97059C7.22706 5.9902 8.71726 4.35294 10.5996 4.35294C12.482 4.35294 13.9624 5.9902 13.9624 7.97059C13.9624 10.0784 12.4918 11.6863 10.5996 11.6667Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Account = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Account as default };
//# sourceMappingURL=Account-B4y9_uOU.mjs.map
