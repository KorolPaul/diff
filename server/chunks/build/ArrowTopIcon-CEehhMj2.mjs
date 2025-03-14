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
    width: "14",
    height: "8",
    viewBox: "0 0 14 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.519202 7.5192C0.787906 7.78791 1.22071 7.79689 1.50033 7.53956L6.30192 3.12074C6.68355 2.76953 7.27036 2.76838 7.65337 3.1181L12.4998 7.54325C12.7796 7.79879 13.211 7.789 13.479 7.52102C13.7634 7.23659 13.7544 6.77274 13.4592 6.49953L7.65795 1.13071C7.27367 0.775077 6.68012 0.776073 6.29704 1.13299L0.537223 6.49946C0.243645 6.77299 0.235471 7.23547 0.519202 7.5192Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ArrowTopIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrowTopIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ArrowTopIcon as default };
//# sourceMappingURL=ArrowTopIcon-CEehhMj2.mjs.map
