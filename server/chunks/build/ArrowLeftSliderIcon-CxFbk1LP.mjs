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
  }, _attrs))}><path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM10.2929 21.7071C10.6834 22.0976 11.3166 22.0976 11.7071 21.7071C12.0976 21.3166 12.0976 20.6834 11.7071 20.2929L10.2929 21.7071ZM10.2929 0.292893L1.70711 8.87868L3.12132 10.2929L11.7071 1.70711L10.2929 0.292893ZM1.70711 13.1213L10.2929 21.7071L11.7071 20.2929L3.12132 11.7071L1.70711 13.1213ZM1.70711 8.87868C0.535531 10.0503 0.535535 11.9497 1.70711 13.1213L3.12132 11.7071C2.7308 11.3166 2.7308 10.6834 3.12132 10.2929L1.70711 8.87868Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ArrowLeftSliderIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrowLeftSliderIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ArrowLeftSliderIcon as default };
//# sourceMappingURL=ArrowLeftSliderIcon-CxFbk1LP.mjs.map
