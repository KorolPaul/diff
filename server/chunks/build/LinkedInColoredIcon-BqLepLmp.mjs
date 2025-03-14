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
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="30" height="30" rx="15" fill="#006699"></rect><path d="M11.5491 21.079V12.9752H8.85785V21.079H11.5493H11.5491ZM10.204 11.8689C11.1423 11.8689 11.7264 11.2466 11.7264 10.469C11.7089 9.67356 11.1423 9.06865 10.2219 9.06865C9.30079 9.06865 8.69922 9.67356 8.69922 10.4689C8.69922 11.2466 9.28315 11.8688 10.1864 11.8688H10.2038L10.204 11.8689ZM13.0387 21.079H15.7297V16.554C15.7297 16.3121 15.7472 16.0696 15.8183 15.8968C16.0128 15.4127 16.4556 14.9116 17.1992 14.9116C18.1728 14.9116 18.5624 15.6546 18.5624 16.7442V21.079H21.2534V16.4325C21.2534 13.9435 19.9259 12.7852 18.1553 12.7852C16.7037 12.7852 16.0662 13.5972 15.712 14.1503H15.7299V12.9755H13.0388C13.0739 13.7357 13.0386 21.0793 13.0386 21.0793L13.0387 21.079Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LinkedInColoredIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkedInColoredIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LinkedInColoredIcon as default };
//# sourceMappingURL=LinkedInColoredIcon-BqLepLmp.mjs.map
