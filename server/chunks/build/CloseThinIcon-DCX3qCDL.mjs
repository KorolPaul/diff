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
  }, _attrs))}><path d="M3.29377 20.7062C2.89642 20.3202 2.90777 19.6618 3.29377 19.2758L10.5596 11.9986L3.29377 4.73275C2.90777 4.34675 2.90777 3.69964 3.29377 3.30229C3.67977 2.89358 4.34959 2.90493 4.73558 3.30229L12.0014 10.5681L19.2673 3.30229C19.6533 2.90493 20.3117 2.90493 20.7091 3.30229C21.1064 3.68828 21.0951 4.34675 20.7091 4.73275L13.4432 11.9986L20.7091 19.2758C21.0951 19.6618 21.0951 20.3089 20.7091 20.7062C20.3231 21.1036 19.6533 21.0922 19.2673 20.7062L12.0014 13.4404L4.73558 20.7062C4.34959 21.0922 3.69112 21.0922 3.29377 20.7062Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CloseThinIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CloseThinIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CloseThinIcon as default };
//# sourceMappingURL=CloseThinIcon-DCX3qCDL.mjs.map
