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
    width: "4",
    height: "17",
    viewBox: "0 0 4 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.33333 0.5C2.64275 0.5 2.9395 0.622916 3.15829 0.841709C3.37708 1.0605 3.5 1.35725 3.5 1.66667C3.5 1.97609 3.37708 2.27283 3.15829 2.49162C2.9395 2.71042 2.64275 2.83333 2.33333 2.83333C2.02391 2.83333 1.72717 2.71042 1.50838 2.49162C1.28958 2.27283 1.16667 1.97609 1.16667 1.66667C1.16667 1.35725 1.28958 1.0605 1.50838 0.841709C1.72717 0.622916 2.02391 0.5 2.33333 0.5ZM2.33333 7.16667C2.64275 7.16667 2.9395 7.28958 3.15829 7.50838C3.37708 7.72717 3.5 8.02392 3.5 8.33333C3.5 8.64275 3.37708 8.9395 3.15829 9.15829C2.9395 9.37708 2.64275 9.5 2.33333 9.5C2.02391 9.5 1.72717 9.37708 1.50838 9.15829C1.28958 8.9395 1.16667 8.64275 1.16667 8.33333C1.16667 8.02392 1.28958 7.72717 1.50838 7.50838C1.72717 7.28958 2.02391 7.16667 2.33333 7.16667ZM2.33333 13.8333C2.64275 13.8333 2.9395 13.9563 3.15829 14.175C3.37708 14.3938 3.5 14.6906 3.5 15C3.5 15.3094 3.37708 15.6062 3.15829 15.825C2.9395 16.0438 2.64275 16.1667 2.33333 16.1667C2.02391 16.1667 1.72717 16.0438 1.50838 15.825C1.28958 15.6062 1.16667 15.3094 1.16667 15C1.16667 14.6906 1.28958 14.3938 1.50838 14.175C1.72717 13.9563 2.02391 13.8333 2.33333 13.8333Z" fill="#141415" stroke="#818181"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/VerticalDotsIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerticalDotsIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { VerticalDotsIcon as default };
//# sourceMappingURL=VerticalDotsIcon-CEn3YU0n.mjs.map
