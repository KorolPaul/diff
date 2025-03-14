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
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M5.6 15.9695C7.58822 15.9695 9.2 14.3578 9.2 12.3695C9.2 10.3813 7.58822 8.76953 5.6 8.76953C3.61177 8.76953 2 10.3813 2 12.3695C2 14.3578 3.61177 15.9695 5.6 15.9695Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4004 22.3704C20.3886 22.3704 22.0004 20.7586 22.0004 18.7704C22.0004 16.7822 20.3886 15.1704 18.4004 15.1704C16.4122 15.1704 14.8004 16.7822 14.8004 18.7704C14.8004 20.7586 16.4122 22.3704 18.4004 22.3704Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4004 9.57012C20.3886 9.57012 22.0004 7.95834 22.0004 5.97012C22.0004 3.98189 20.3886 2.37012 18.4004 2.37012C16.4122 2.37012 14.8004 3.98189 14.8004 5.97012C14.8004 7.95834 16.4122 9.57012 18.4004 9.57012Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.80042 10.7698L15.2004 7.56982M8.80042 13.9698L15.2004 17.1698L8.80042 13.9698Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ProductShareIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductShareIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProductShareIcon as default };
//# sourceMappingURL=ProductShareIcon-gHxbv0_O.mjs.map
