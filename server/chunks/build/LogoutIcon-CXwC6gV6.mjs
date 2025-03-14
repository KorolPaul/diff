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
    fill: "currentColor"
  }, _attrs))}><path d="M-9.24543e-08 3.85534C-6.18458e-08 3.1551 0.177458 2.62752 0.532373 2.27261C0.882494 1.91769 1.40528 1.74023 2.10072 1.74023L9.46043 1.74023C10.1559 1.74023 10.6787 1.91769 11.0288 2.27261C11.3837 2.62752 11.5612 3.1551 11.5612 3.85534L11.5612 6.27261L10.6763 6.27261L10.6763 3.87692C10.6763 3.46925 10.5683 3.1575 10.3525 2.94167C10.1415 2.73064 9.82734 2.62513 9.41007 2.62513L2.15108 2.62513C1.73381 2.62513 1.41966 2.73064 1.20863 2.94167C0.992805 3.1575 0.884891 3.46925 0.884891 3.87692L0.884891 12.1215C0.884891 12.5196 0.992805 12.8266 1.20863 13.0424C1.41966 13.263 1.73381 13.3733 2.15108 13.3733L9.41007 13.3733C9.82734 13.3733 10.1415 13.263 10.3525 13.0424C10.5683 12.8266 10.6763 12.5196 10.6763 12.1215L10.6763 9.72585L11.5612 9.72585L11.5612 12.1431C11.5612 12.8434 11.3837 13.3709 11.0288 13.7258C10.6739 14.0808 10.1511 14.2582 9.46043 14.2582L2.10072 14.2582C1.41487 14.2582 0.894484 14.0808 0.539567 13.7258C0.179855 13.3709 -4.85333e-07 12.8434 -4.54724e-07 12.1431L-9.24543e-08 3.85534ZM5.53957 7.99923C5.53957 7.87932 5.58034 7.7762 5.66187 7.68987C5.7482 7.60354 5.85132 7.56038 5.97122 7.56038L13.7194 7.56038L14.7698 7.59635L14.1007 6.94167L12.8273 5.71865C12.7362 5.64191 12.6906 5.54119 12.6906 5.41649C12.6906 5.30139 12.729 5.20546 12.8058 5.12872C12.8825 5.05678 12.976 5.02081 13.0863 5.02081C13.1918 5.02081 13.2878 5.06158 13.3741 5.14311L15.8489 7.68268C15.9065 7.73544 15.9448 7.7858 15.964 7.83376C15.988 7.88652 16 7.94167 16 7.99923C16 8.05678 15.988 8.10954 15.964 8.1575C15.9448 8.21026 15.9065 8.26302 15.8489 8.31577L13.3741 10.8481C13.2878 10.9345 13.1918 10.9776 13.0863 10.9776C12.976 10.9776 12.8825 10.9393 12.8058 10.8625C12.729 10.7858 12.6906 10.6899 12.6906 10.5748C12.6906 10.4549 12.7362 10.3541 12.8273 10.2726L14.1007 9.04959L14.7698 8.4093L13.7194 8.43808L5.97122 8.43808C5.85132 8.43808 5.7482 8.39491 5.66187 8.30858C5.58034 8.22225 5.53957 8.11913 5.53957 7.99923Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LogoutIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogoutIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LogoutIcon as default };
//# sourceMappingURL=LogoutIcon-CXwC6gV6.mjs.map
