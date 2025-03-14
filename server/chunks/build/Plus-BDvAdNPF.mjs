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
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.492188 7.74609C0.492188 7.57893 0.55189 7.43564 0.671296 7.31623C0.790702 7.19683 0.931004 7.13712 1.0922 7.13712H7.14608V1.0922C7.14608 0.931004 7.2028 0.790702 7.31623 0.671296C7.43564 0.55189 7.57893 0.492188 7.74609 0.492188C7.91326 0.492188 8.05655 0.55189 8.17595 0.671296C8.29536 0.790702 8.35506 0.931004 8.35506 1.0922V7.13712H14.391C14.5582 7.13712 14.7015 7.19683 14.8209 7.31623C14.9403 7.43564 15 7.57893 15 7.74609C15 7.91326 14.9403 8.05655 14.8209 8.17595C14.7015 8.28939 14.5582 8.34611 14.391 8.34611H8.35506V14.4C8.35506 14.5612 8.29536 14.7015 8.17595 14.8209C8.05655 14.9403 7.91326 15 7.74609 15C7.57893 15 7.43564 14.9403 7.31623 14.8209C7.2028 14.7015 7.14608 14.5612 7.14608 14.4V8.34611H1.0922C0.931004 8.34611 0.790702 8.28939 0.671296 8.17595C0.55189 8.05655 0.492188 7.91326 0.492188 7.74609Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/Plus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Plus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Plus as default };
//# sourceMappingURL=Plus-BDvAdNPF.mjs.map
