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
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_3221_2878)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.53 1.29287C7.89629 0.868482 8.35353 0.532116 8.86772 0.30878C9.38191 0.0854437 9.93983 -0.0191173 10.5 0.00287038C11.78 0.00287038 12.78 0.48287 13.47 1.29287C14.14 2.09287 14.47 3.16287 14.5 4.29287V7.00287H17.5C17.78 7.00287 18 7.22287 18 7.50287V19.5029C18 19.6355 17.9473 19.7627 17.8536 19.8564C17.7598 19.9502 17.6326 20.0029 17.5 20.0029H3.5C3.36739 20.0029 3.24021 19.9502 3.14645 19.8564C3.05268 19.7627 3 19.6355 3 19.5029V7.50287C3 7.22287 3.22 7.00287 3.5 7.00287H6.5V4.30287C6.5 3.20287 6.86 2.15287 7.53 1.29287ZM13.5 5.90287V6.99287H7.5V4.32287C7.53 3.33287 7.81 2.50287 8.3 1.92287C8.57318 1.61242 8.91286 1.36757 9.29376 1.20655C9.67466 1.04554 10.087 0.972498 10.5 0.99287C11.51 0.99287 12.23 1.36287 12.7 1.92287C13.19 2.50287 13.47 3.33287 13.5 4.32287V5.90287ZM4 7.99287V18.9929H17V7.99287H4ZM10.51 10.4929C10.1772 10.4956 9.85472 10.609 9.5934 10.8151C9.33208 11.0212 9.14673 11.3084 9.06655 11.6314C8.98636 11.9545 9.01589 12.295 9.15049 12.5994C9.28508 12.9038 9.5171 13.1548 9.81 13.3129V15.8129C9.81 15.9932 9.88164 16.1662 10.0092 16.2937C10.1367 16.4212 10.3097 16.4929 10.49 16.4929C10.6703 16.4929 10.8433 16.4212 10.9708 16.2937C11.0984 16.1662 11.17 15.9932 11.17 15.8129V13.3429C11.4713 13.1913 11.7127 12.9427 11.8553 12.637C11.9978 12.3314 12.0333 11.9867 11.9558 11.6584C11.8784 11.3302 11.6926 11.0377 11.4285 10.828C11.1643 10.6183 10.8372 10.5038 10.5 10.5029L10.51 10.4929Z" fill="#D0D0D0"></path></g><defs><clipPath id="clip0_3221_2878"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LockIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LockIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LockIcon as default };
//# sourceMappingURL=LockIcon-BbsQYKbE.mjs.map
