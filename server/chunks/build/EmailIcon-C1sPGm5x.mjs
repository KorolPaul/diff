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
  }, _attrs))}><path d="M1 8.4684V17.4C1 18.3548 1.38631 19.2705 2.07394 19.9456C2.76158 20.6207 3.69421 21 4.66667 21H19.3333C20.3058 21 21.2384 20.6207 21.9261 19.9456C22.6137 19.2705 23 18.3548 23 17.4V6.6C23 5.64522 22.6137 4.72955 21.9261 4.05442C21.2384 3.37928 20.3058 3 19.3333 3H4.66667C3.69421 3 2.76158 3.37928 2.07394 4.05442C1.38631 4.72955 1 5.64522 1 6.6V8.4684ZM4.66667 4.8H19.3333C19.8196 4.8 20.2859 4.98964 20.6297 5.32721C20.9735 5.66477 21.1667 6.12261 21.1667 6.6V7.932L12 12.7776L2.83333 7.932V6.6C2.83333 6.12261 3.02649 5.66477 3.3703 5.32721C3.71412 4.98964 4.18044 4.8 4.66667 4.8V4.8ZM2.83333 9.9768L11.5655 14.592C11.699 14.6626 11.8483 14.6995 12 14.6995C12.1517 14.6995 12.301 14.6626 12.4345 14.592L21.1667 9.9768V17.4C21.1667 17.8774 20.9735 18.3352 20.6297 18.6728C20.2859 19.0104 19.8196 19.2 19.3333 19.2H4.66667C4.18044 19.2 3.71412 19.0104 3.3703 18.6728C3.02649 18.3352 2.83333 17.8774 2.83333 17.4V9.9768Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/EmailIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmailIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EmailIcon as default };
//# sourceMappingURL=EmailIcon-C1sPGm5x.mjs.map
