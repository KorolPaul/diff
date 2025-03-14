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
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M1.07102 1.07107C1.23398 0.908113 1.43185 0.826636 1.66464 0.826636C1.89743 0.826636 2.0924 0.905203 2.24953 1.06234L8.15082 6.96362L14.0434 1.07107C14.2005 0.913933 14.3926 0.832456 14.6195 0.826636C14.8523 0.826636 15.0502 0.908113 15.2132 1.07107C15.3761 1.23402 15.4576 1.4319 15.4576 1.66469C15.4576 1.89748 15.379 2.09244 15.2219 2.24958L9.32933 8.14214L15.2132 14.026C15.3761 14.1889 15.4576 14.3868 15.4576 14.6196C15.4576 14.8524 15.3761 15.0502 15.2132 15.2132C15.0502 15.3762 14.8523 15.4576 14.6195 15.4576C14.3926 15.4518 14.1976 15.3674 14.0346 15.2045L8.15082 9.32065L2.24953 15.2219C2.0924 15.3791 1.89743 15.4576 1.66464 15.4576C1.43185 15.4576 1.23398 15.3762 1.07102 15.2132C0.908068 15.0502 0.82659 14.8524 0.826591 14.6196C0.83241 14.3926 0.913887 14.2006 1.07102 14.0434L6.97231 8.14213L1.07102 2.24085C0.913888 2.08371 0.83241 1.89166 0.82659 1.66469C0.82659 1.4319 0.908068 1.23402 1.07102 1.07107Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CloseModalIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CloseModalIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CloseModalIcon as default };
//# sourceMappingURL=CloseModalIcon-C53FQIf4.mjs.map
