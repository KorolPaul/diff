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
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2256 5.70247L4.83425 14.104L2.89701 12.1667L11.2927 3.76954L13.2256 5.70247ZM13.751 5.17641L15.0367 3.88921C15.3266 3.59891 15.3245 3.12704 15.0331 2.83645L14.1559 1.96165C13.864 1.67052 13.3936 1.66826 13.1027 1.95928L11.8184 3.24376L13.751 5.17641ZM2.41541 12.7365L1.93991 15.0509L4.27072 14.5919L2.41541 12.7365ZM1.7435 12.2824L1 16L4.71752 15.2565L15.5579 4.41585C16.1409 3.83279 16.1423 2.88888 15.565 2.31158L14.6881 1.43459C14.109 0.855493 13.1732 0.852392 12.5839 1.44176L1.7435 12.2824Z" fill="#0A84FF" stroke="#0A84FF" stroke-width="0.1"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/EditPenIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditPenIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EditPenIcon as default };
//# sourceMappingURL=EditPenIcon-by6Bv-D0.mjs.map
