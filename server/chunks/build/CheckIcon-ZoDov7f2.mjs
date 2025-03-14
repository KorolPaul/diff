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
  }, _attrs))}><path d="M12.9078 5.45825C13.2534 5.12438 13.2534 4.58427 12.9078 4.2504C12.5622 3.91653 12.0031 3.91653 11.6575 4.2504L6.68457 9.0533L4.50951 6.95438C4.1639 6.62051 3.60481 6.62051 3.2592 6.95438C2.9136 7.28825 2.9136 7.82836 3.2592 8.16223L6.05941 10.8662C6.23163 11.0337 6.45928 11.1169 6.68457 11.1169C6.91104 11.1169 7.13751 11.0337 7.30972 10.8662L12.9078 5.45825Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CheckIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CheckIcon as default };
//# sourceMappingURL=CheckIcon-ZoDov7f2.mjs.map
