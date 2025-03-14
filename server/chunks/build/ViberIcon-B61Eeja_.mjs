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
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 15.6L1.09655 11.5941C0.419899 10.4215 0.0643499 9.0922 0.0649999 7.72915C0.0669499 3.46775 3.53469 0 7.79543 0C9.86308 0.00065 11.804 0.806 13.2639 2.2672C14.7231 3.7284 15.5265 5.6706 15.5259 7.7363C15.5239 11.9984 12.0562 15.4661 7.79543 15.4661C6.50194 15.4655 5.22729 15.1411 4.09824 14.5249L0 15.6ZM4.28804 13.1255C5.37744 13.7722 6.41744 14.1596 7.79283 14.1603C11.334 14.1603 14.2187 11.2782 14.2207 7.735C14.222 4.1847 11.3509 1.3065 7.79803 1.3052C4.25424 1.3052 1.3715 4.1873 1.3702 7.7298C1.36955 9.17605 1.79335 10.259 2.50509 11.3919L1.85575 13.7631L4.28804 13.1255ZM11.6896 9.57385C11.6415 9.49325 11.5128 9.44515 11.3191 9.3483C11.126 9.25145 10.1764 8.7841 9.99893 8.71975C9.82213 8.6554 9.69343 8.6229 9.56408 8.8166C9.43538 9.00965 9.06488 9.44515 8.95243 9.57385C8.83998 9.70255 8.72688 9.7188 8.53383 9.62195C8.34078 9.5251 7.71808 9.32165 6.98033 8.6632C6.40639 8.151 6.01834 7.51855 5.90589 7.32485C5.79344 7.1318 5.89419 7.02715 5.99039 6.93095C6.07749 6.8445 6.18344 6.7054 6.28029 6.5923C6.37844 6.4805 6.41029 6.3999 6.47529 6.27055C6.53964 6.14185 6.50779 6.02875 6.45904 5.9319C6.41029 5.8357 6.02419 4.88475 5.86364 4.498C5.70634 4.12165 5.54709 4.17235 5.42879 4.1665L5.05829 4.16C4.92959 4.16 4.72029 4.2081 4.54349 4.4018C4.36669 4.5955 3.86749 5.0622 3.86749 6.01315C3.86749 6.9641 4.55974 7.88255 4.65594 8.01125C4.75279 8.13995 6.01769 10.0913 7.95533 10.9278C8.41618 11.1267 8.77628 11.2457 9.05643 11.3347C9.51923 11.4816 9.94043 11.4608 10.2732 11.4114C10.6444 11.3562 11.4159 10.9441 11.5771 10.493C11.7383 10.0412 11.7383 9.65445 11.6896 9.57385Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ViberIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ViberIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ViberIcon as default };
//# sourceMappingURL=ViberIcon-B61Eeja_.mjs.map
