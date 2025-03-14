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
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M12.1297 13.0797C13.7589 13.0797 15.0797 11.7589 15.0797 10.1297C15.0797 8.50045 13.7589 7.17969 12.1297 7.17969C10.5004 7.17969 9.17969 8.50045 9.17969 10.1297C9.17969 11.7589 10.5004 13.0797 12.1297 13.0797Z" stroke="currentColor" stroke-width="1.4"></path><path d="M16.6992 14.6492C17.8492 13.4892 18.5592 11.8892 18.5592 10.1292C18.5592 6.57922 15.6792 3.69922 12.1292 3.69922C8.57922 3.69922 5.69922 6.57922 5.69922 10.1292C5.69922 11.8692 6.38922 13.4492 7.50922 14.6092L12.1292 19.6692L16.6992 14.6492V14.6492Z" stroke="currentColor" stroke-width="1.4"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PinIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PinIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PinIcon as default };
//# sourceMappingURL=PinIcon-FkUpBBDs.mjs.map
