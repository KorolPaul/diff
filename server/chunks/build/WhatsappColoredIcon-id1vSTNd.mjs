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
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="0.200195" width="30" height="30" rx="15" fill="#00D95F"></rect><path d="M7.7002 21.9446L8.77641 17.943C7.90847 16.3842 7.63272 14.5651 7.99975 12.8197C8.36679 11.0743 9.35199 9.51952 10.7746 8.44074C12.1972 7.36197 13.9617 6.83154 15.7444 6.94679C17.5271 7.06203 19.2084 7.81522 20.4798 9.06815C21.7511 10.3211 22.5272 11.9897 22.6657 13.7678C22.8042 15.5459 22.2958 17.3142 21.2337 18.7483C20.1717 20.1824 18.6272 21.186 16.8838 21.575C15.1404 21.964 13.3149 21.7122 11.7424 20.866L7.7002 21.9446ZM11.9373 19.3685L12.1873 19.5166C13.3263 20.1906 14.6566 20.4695 15.971 20.3099C17.2854 20.1502 18.5099 19.561 19.4538 18.634C20.3977 17.707 21.008 16.4943 21.1895 15.1849C21.371 13.8756 21.1135 12.543 20.4572 11.395C19.8009 10.2469 18.7826 9.34785 17.561 8.83788C16.3395 8.32792 14.9833 8.2357 13.7037 8.57559C12.4242 8.91547 11.2932 9.66838 10.487 10.717C9.68084 11.7656 9.24476 13.051 9.24673 14.3728C9.24565 15.4689 9.54928 16.5437 10.1238 17.4777L10.2806 17.7357L9.67891 19.9692L11.9373 19.3685Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0045 15.4004C17.8579 15.2824 17.6864 15.1993 17.5028 15.1575C17.3192 15.1157 17.1285 15.1163 16.9452 15.1592C16.6698 15.2735 16.4919 15.7049 16.3139 15.9207C16.2764 15.9724 16.2212 16.0086 16.1588 16.0227C16.0964 16.0367 16.031 16.0275 15.9749 15.9968C14.9667 15.6025 14.1215 14.8795 13.5768 13.9452C13.5303 13.8869 13.5083 13.8129 13.5154 13.7387C13.5225 13.6646 13.5582 13.596 13.6149 13.5476C13.8134 13.3514 13.9591 13.1085 14.0386 12.8412C14.0562 12.5464 13.9886 12.2527 13.8437 11.9952C13.7317 11.6342 13.5185 11.3127 13.2293 11.0688C13.0802 11.0018 12.9148 10.9794 12.7532 11.0041C12.5915 11.0289 12.4405 11.0998 12.3183 11.2084C12.1063 11.3911 11.9379 11.6189 11.8257 11.8751C11.7135 12.1313 11.6604 12.4094 11.6701 12.6889C11.6707 12.8458 11.6907 13.0021 11.7294 13.1542C11.8278 13.5196 11.9791 13.8688 12.1785 14.1906C12.3224 14.4371 12.4794 14.6757 12.6488 14.9054C13.1995 15.6601 13.8916 16.3008 14.6869 16.792C15.0859 17.0417 15.5124 17.2446 15.958 17.3969C16.4208 17.6064 16.9318 17.6868 17.4367 17.6296C17.7244 17.5861 17.997 17.4727 18.2305 17.2994C18.4639 17.126 18.6511 16.8981 18.7756 16.6355C18.8488 16.4769 18.871 16.2996 18.8392 16.1279C18.7629 15.7768 18.2926 15.5696 18.0045 15.4004Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/WhatsappColoredIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhatsappColoredIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { WhatsappColoredIcon as default };
//# sourceMappingURL=WhatsappColoredIcon-id1vSTNd.mjs.map
