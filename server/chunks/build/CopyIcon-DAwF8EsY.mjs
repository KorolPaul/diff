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
  }, _attrs))}><path d="M2.66675 13.0033V5.64241C2.66675 4.53483 3.21789 3.97839 4.30957 3.97839H5.23697V2.998C5.23697 1.89572 5.7881 1.33398 6.87978 1.33398H8.90946C9.4765 1.33398 9.92165 1.47707 10.2979 1.86393L12.9741 4.58253C13.3716 4.99058 13.5041 5.40394 13.5041 6.05577V10.3589C13.5041 11.4612 12.9529 12.0229 11.8612 12.0229H10.9338V13.0033C10.9338 14.1056 10.388 14.6673 9.29102 14.6673H4.30957C3.21259 14.6673 2.66675 14.1109 2.66675 13.0033ZM10.4304 7.45481C10.8543 7.88936 10.9338 8.18613 10.9338 8.86446V11.1697H11.8135C12.3647 11.1697 12.6508 10.8729 12.6508 10.343V5.81199H10.1707C9.56129 5.81199 9.26452 5.52052 9.26452 4.90579V2.18719H6.92218C6.37104 2.18719 6.09017 2.48926 6.09017 3.0139V3.97839H6.18026C6.7738 3.97839 7.10766 4.06848 7.51042 4.48184L10.4304 7.45481ZM10.0329 4.77861C10.0329 4.96409 10.1071 5.04358 10.2926 5.04358H12.4283L10.0329 2.60584V4.77861ZM3.51995 12.9874C3.51995 13.5173 3.80082 13.8141 4.34666 13.8141H9.24862C9.79446 13.8141 10.0806 13.5173 10.0806 12.9874V8.90685H7.08646C6.42933 8.90685 6.09017 8.57299 6.09017 7.90526V4.8316H4.35196C3.80082 4.8316 3.51995 5.13367 3.51995 5.65301V12.9874ZM7.18715 8.10664H9.91635L6.89038 5.02768V7.80987C6.89038 8.02185 6.97517 8.10664 7.18715 8.10664Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CopyIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CopyIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CopyIcon as default };
//# sourceMappingURL=CopyIcon-DAwF8EsY.mjs.map
