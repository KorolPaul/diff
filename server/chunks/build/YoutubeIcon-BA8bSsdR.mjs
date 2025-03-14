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
    height: "11",
    viewBox: "0 0 16 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M15.8126 2.27651C15.9375 3.10649 16 3.92461 16 4.73087V5.86913L15.8126 8.32349C15.7127 9.01119 15.5004 9.50917 15.1756 9.81745C14.8259 10.1494 14.3013 10.3629 13.6019 10.4577C12.9274 10.5051 12.1155 10.5407 11.1663 10.5644C10.242 10.5881 9.48009 10.6 8.88056 10.6H7.98126C5.20843 10.5763 3.39735 10.5289 2.54801 10.4577C2.54801 10.4577 2.44809 10.4459 2.24824 10.4221C2.0484 10.3984 1.88603 10.3747 1.76112 10.351C1.63622 10.3273 1.47385 10.268 1.274 10.1732C1.09914 10.0783 0.936768 9.95973 0.786885 9.81745C0.661983 9.67517 0.53708 9.48546 0.412178 9.24832C0.312256 8.98747 0.249805 8.76219 0.224824 8.57248L0.149883 8.32349C0.049961 7.49351 0 6.67539 0 5.86913V4.73087L0.149883 2.27651C0.249805 1.58881 0.462139 1.09083 0.786885 0.78255C1.13661 0.426846 1.67369 0.213423 2.39813 0.142282C3.0726 0.0948546 3.87197 0.0592841 4.79625 0.0355705C5.72053 0.0118568 6.48244 0 7.08197 0H7.98126C10.2295 0 12.103 0.0474273 13.6019 0.142282C14.3013 0.213423 14.8259 0.426846 15.1756 0.78255C15.2756 0.877405 15.363 0.995973 15.4379 1.13826C15.5129 1.25682 15.5753 1.38725 15.6253 1.52953C15.6753 1.6481 15.7127 1.76667 15.7377 1.88523C15.7627 2.0038 15.7877 2.09866 15.8126 2.1698V2.27651ZM10.1546 5.40671L10.6792 5.15772L6.37002 3.02349V7.29195L10.1546 5.40671Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/YoutubeIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YoutubeIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { YoutubeIcon as default };
//# sourceMappingURL=YoutubeIcon-BA8bSsdR.mjs.map
