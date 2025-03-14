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
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M12.0312 8.59375H11.875C11.9609 8.59375 12.0312 8.52344 12.0312 8.4375V8.59375H17.9688V8.4375C17.9688 8.52344 18.0391 8.59375 18.125 8.59375H17.9688V10H19.375V8.4375C19.375 7.74805 18.8145 7.1875 18.125 7.1875H11.875C11.1855 7.1875 10.625 7.74805 10.625 8.4375V10H12.0312V8.59375ZM21.875 10H8.125C7.7793 10 7.5 10.2793 7.5 10.625V11.25C7.5 11.3359 7.57031 11.4062 7.65625 11.4062H8.83594L9.31836 21.6211C9.34961 22.2871 9.90039 22.8125 10.5664 22.8125H19.4336C20.1016 22.8125 20.6504 22.2891 20.6816 21.6211L21.1641 11.4062H22.3438C22.4297 11.4062 22.5 11.3359 22.5 11.25V10.625C22.5 10.2793 22.2207 10 21.875 10ZM19.2832 21.4062H10.7168L10.2441 11.4062H19.7559L19.2832 21.4062Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TrashIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrashIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TrashIcon as default };
//# sourceMappingURL=TrashIcon-DF2hFwZN.mjs.map
