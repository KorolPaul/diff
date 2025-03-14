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
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="0.799805" width="30" height="30" rx="15" fill="#337FFF"></rect><path d="M19.4699 15.9766L19.8973 13.2607H17.2643V11.4955C17.2643 10.7529 17.6319 10.0272 18.8073 10.0272H20.0213V7.71456C19.3143 7.60183 18.6 7.54084 17.8841 7.53209C15.7169 7.53209 14.3021 8.83483 14.3021 11.1899V13.2607H11.8999V15.9766H14.3021V22.5454H17.2643V15.9766H19.4699Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/FacebookColoredIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FacebookColoredIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FacebookColoredIcon as default };
//# sourceMappingURL=FacebookColoredIcon-D_2IbEZK.mjs.map
