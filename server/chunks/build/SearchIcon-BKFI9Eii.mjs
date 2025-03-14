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
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M10.4955 3C6.36472 3 3 6.36472 3 10.4955C3 14.6262 6.36472 17.9909 10.4955 17.9909C12.2918 17.9909 13.9414 17.3531 15.2343 16.2942L19.7096 20.7695C19.7787 20.8415 19.8614 20.8989 19.953 20.9385C20.0445 20.978 20.143 20.9989 20.2427 21C20.3425 21.001 20.4414 20.9821 20.5337 20.9444C20.626 20.9067 20.7099 20.851 20.7804 20.7804C20.851 20.7099 20.9067 20.626 20.9444 20.5337C20.9821 20.4414 21.001 20.3425 21 20.2427C20.9989 20.143 20.978 20.0445 20.9385 19.953C20.8989 19.8614 20.8415 19.7787 20.7695 19.7096L16.2942 15.2343C17.3531 13.9414 17.9909 12.2918 17.9909 10.4955C17.9909 6.36472 14.6262 3 10.4955 3ZM10.4955 4.49909C13.8161 4.49909 16.4919 7.17489 16.4919 10.4955C16.4919 13.8161 13.8161 16.4919 10.4955 16.4919C7.17489 16.4919 4.49909 13.8161 4.49909 10.4955C4.49909 7.17489 7.17489 4.49909 10.4955 4.49909Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/SearchIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SearchIcon as default };
//# sourceMappingURL=SearchIcon-BKFI9Eii.mjs.map
