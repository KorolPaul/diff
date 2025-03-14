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
    width: "12",
    height: "22",
    viewBox: "0 0 12 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L0.292893 1.70711ZM1.70711 21.7071C1.31658 22.0976 0.683417 22.0976 0.292893 21.7071C-0.0976315 21.3166 -0.0976315 20.6834 0.292893 20.2929L1.70711 21.7071ZM1.70711 0.292893L10.2929 8.87868L8.87868 10.2929L0.292893 1.70711L1.70711 0.292893ZM10.2929 13.1213L1.70711 21.7071L0.292893 20.2929L8.87868 11.7071L10.2929 13.1213ZM10.2929 8.87868C11.4645 10.0503 11.4645 11.9497 10.2929 13.1213L8.87868 11.7071C9.2692 11.3166 9.2692 10.6834 8.87868 10.2929L10.2929 8.87868Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ArrowRightSliderIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrowRightSliderIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ArrowRightSliderIcon as default };
//# sourceMappingURL=ArrowRightSliderIcon-Dr2ez6mX.mjs.map
