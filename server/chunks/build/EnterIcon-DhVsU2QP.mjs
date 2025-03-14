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
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _attrs))}><path d="M11.9212 4.76197C11.9605 4.66668 12.0227 4.58258 12.1023 4.51714C12.1819 4.45171 12.2765 4.40698 12.3776 4.38694C12.4787 4.36689 12.5832 4.37216 12.6817 4.40226C12.7803 4.43236 12.8699 4.48637 12.9425 4.55947L17.9425 9.55947C18.0007 9.61753 18.0469 9.6865 18.0784 9.76243C18.1099 9.83836 18.1261 9.91976 18.1261 10.002C18.1261 10.0842 18.1099 10.1656 18.0784 10.2415C18.0469 10.3174 18.0007 10.3864 17.9425 10.4445L12.9425 15.4445C12.8251 15.5618 12.666 15.6278 12.5 15.6278C12.334 15.6278 12.1749 15.5618 12.0575 15.4445C11.9401 15.3271 11.8742 15.1679 11.8742 15.002C11.8742 14.836 11.9401 14.6768 12.0575 14.5595L15.9913 10.627H2.5C2.33424 10.627 2.17527 10.5611 2.05806 10.4439C1.94085 10.3267 1.875 10.1677 1.875 10.002C1.875 9.83621 1.94085 9.67724 2.05806 9.56003C2.17527 9.44282 2.33424 9.37697 2.5 9.37697H15.9913L12.0575 5.44447C11.9697 5.35703 11.9098 5.24546 11.8856 5.12394C11.8613 5.00242 11.8737 4.87642 11.9212 4.76197Z" fill="\u0441urrentColor" fill-opacity="0.74902"></path><path d="M12.4985 5.00159L12.4991 5L12.5006 5.00141L17.5006 10.0014L17.5011 10.002L18.0784 9.76243L17.5011 10.002L18.0784 10.2415L17.5011 10.002L17.9425 10.4445L17.9423 10.4443L17.5011 10.002L17.5006 10.0025L12.5006 15.0025L12.9425 15.4445L12.5006 15.0025L12.5 15.0028L12.4994 15.0025L12.4992 15.002L12.4994 15.0014L16.4331 11.069L17.5005 10.002L16.4331 8.93496L12.4994 5.00246L12.4985 5.00159Z" stroke="\u0441urrentColor" stroke-opacity="0.74902" stroke-width="1.25"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/EnterIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnterIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EnterIcon as default };
//# sourceMappingURL=EnterIcon-DhVsU2QP.mjs.map
