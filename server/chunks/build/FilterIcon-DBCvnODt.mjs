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
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.06475 10.1425C3.96663 10.1425 3.88361 10.1085 3.81568 10.0406C3.75152 9.97264 3.71944 9.8915 3.71944 9.79716C3.71944 9.69904 3.75152 9.61601 3.81568 9.54808C3.88361 9.48015 3.96663 9.44619 4.06475 9.44619H9.62934C9.72746 9.44619 9.81048 9.48015 9.87841 9.54808C9.94634 9.61601 9.98031 9.69904 9.98031 9.79716C9.98031 9.8915 9.94634 9.97264 9.87841 10.0406C9.81048 10.1085 9.72746 10.1425 9.62934 10.1425H4.06475ZM2.80805 7.28375C2.70993 7.28375 2.6269 7.25168 2.55897 7.18752C2.49104 7.11959 2.45708 7.03657 2.45708 6.93844C2.45708 6.84032 2.49104 6.7573 2.55897 6.68937C2.6269 6.62144 2.70993 6.58747 2.80805 6.58747H10.8917C10.986 6.58747 11.0672 6.62144 11.1351 6.68937C11.203 6.7573 11.237 6.84032 11.237 6.93844C11.237 7.03657 11.203 7.11959 11.1351 7.18752C11.0672 7.25168 10.986 7.28375 10.8917 7.28375H2.80805ZM1.52304 4.42504C1.4287 4.42504 1.34756 4.39296 1.27963 4.32881C1.2117 4.26088 1.17773 4.17785 1.17773 4.07973C1.17773 3.98161 1.2117 3.89858 1.27963 3.83065C1.34756 3.76272 1.4287 3.72876 1.52304 3.72876H12.1541C12.2484 3.72876 12.3295 3.76272 12.3975 3.83065C12.4654 3.89858 12.4994 3.98161 12.4994 4.07973C12.4994 4.17785 12.4654 4.26088 12.3975 4.32881C12.3295 4.39296 12.2484 4.42504 12.1541 4.42504H1.52304Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/FilterIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FilterIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FilterIcon as default };
//# sourceMappingURL=FilterIcon-DBCvnODt.mjs.map
