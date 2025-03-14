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
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.80581 10.8157L6.70953 10.9277C6.35637 11.2824 5.80261 11.3157 5.41171 11.027L5.29969 10.9307L0.666065 6.31703C0.310297 5.9628 0.277955 5.40699 0.569038 5.01611L0.666065 4.90416L5.29969 0.290469C5.68985 -0.0980072 6.32105 -0.0966461 6.70953 0.293509C7.06269 0.648196 7.09367 1.2021 6.80326 1.59174L6.70649 1.70335L2.78335 5.60927L6.70649 9.51784C7.06118 9.871 7.09455 10.4248 6.80581 10.8157Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ArrowLeftIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrowLeftIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ArrowLeftIcon as default };
//# sourceMappingURL=ArrowLeftIcon-CBA35B8S.mjs.map
