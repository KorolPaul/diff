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
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M8.5 4.5C8.10444 4.5 7.71776 4.6173 7.38886 4.83706C7.05996 5.05682 6.80362 5.36918 6.65224 5.73463C6.50087 6.10009 6.46126 6.50222 6.53843 6.89018C6.6156 7.27814 6.80608 7.63451 7.08579 7.91421C7.36549 8.19392 7.72186 8.3844 8.10982 8.46157C8.49778 8.53874 8.89991 8.49913 9.26537 8.34776C9.63082 8.19638 9.94318 7.94004 10.1629 7.61114C10.3827 7.28224 10.5 6.89556 10.5 6.5C10.4994 5.96975 10.2885 5.46139 9.91355 5.08645C9.5386 4.71151 9.03025 4.5006 8.5 4.5ZM8.5 7.5C8.30222 7.5 8.10888 7.44135 7.94443 7.33147C7.77998 7.22159 7.65181 7.06541 7.57612 6.88268C7.50043 6.69996 7.48063 6.49889 7.51921 6.30491C7.5578 6.11093 7.65304 5.93275 7.79289 5.79289C7.93275 5.65304 8.11093 5.5578 8.30491 5.51921C8.49889 5.48063 8.69996 5.50043 8.88268 5.57612C9.06541 5.65181 9.22159 5.77998 9.33147 5.94443C9.44135 6.10888 9.5 6.30222 9.5 6.5C9.49969 6.76512 9.39424 7.0193 9.20677 7.20677C9.0193 7.39424 8.76512 7.49969 8.5 7.5Z" fill="currentColor"></path><path d="M12.7426 2.2414C11.6935 1.20188 10.2932 0.584359 8.8118 0.508026C7.33042 0.431693 5.87301 0.901957 4.72087 1.82806C3.56873 2.75415 2.80353 4.07044 2.57295 5.52286C2.34237 6.97528 2.66276 8.46087 3.47228 9.69292L7.64355 16.04C7.73637 16.1812 7.86329 16.2973 8.0128 16.3776C8.16231 16.4579 8.32968 16.5 8.49974 16.5C8.6698 16.5 8.83718 16.4579 8.98669 16.3776C9.1362 16.2973 9.26312 16.1812 9.35594 16.04L13.5273 9.69292C14.2785 8.55002 14.6104 7.18593 14.4676 5.82928C14.3247 4.47264 13.7157 3.20591 12.7426 2.2414ZM12.6023 9.09564L8.49976 15.338L4.39715 9.09564C3.14136 7.18484 3.4107 4.62772 5.03757 3.01513C5.49223 2.56448 6.03199 2.207 6.62603 1.9631C7.22008 1.71921 7.85677 1.59368 8.49976 1.59368C9.14275 1.59368 9.77945 1.71921 10.3735 1.9631C10.9675 2.207 11.5073 2.56448 11.9619 3.01513C13.5888 4.62772 13.8581 7.18484 12.6023 9.09564Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/LocationPinIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LocationPinIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LocationPinIcon as default };
//# sourceMappingURL=LocationPinIcon-CtukYTjE.mjs.map
