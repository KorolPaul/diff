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
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6 0.5C4.81331 0.5 3.65328 0.851894 2.66658 1.51118C1.67989 2.17047 0.910851 3.10754 0.456725 4.2039C0.0025997 5.30025 -0.11622 6.50665 0.115291 7.67054C0.346802 8.83443 0.918247 9.90352 1.75736 10.7426C2.59648 11.5818 3.66557 12.1532 4.82946 12.3847C5.99335 12.6162 7.19975 12.4974 8.2961 12.0433C9.39246 11.5891 10.3295 10.8201 10.9888 9.83342C11.6481 8.84672 12 7.68669 12 6.5C12 5.71207 11.8448 4.93185 11.5433 4.2039C11.2417 3.47594 10.7998 2.81451 10.2426 2.25736C9.68549 1.70021 9.02406 1.25825 8.2961 0.956723C7.56815 0.655195 6.78793 0.5 6 0.5ZM6 11.3C5.05065 11.3 4.12262 11.0185 3.33326 10.4911C2.54391 9.96362 1.92868 9.21396 1.56538 8.33688C1.20208 7.45979 1.10702 6.49467 1.29223 5.56357C1.47744 4.63246 1.9346 3.77718 2.60589 3.10589C3.27718 2.43459 4.13246 1.97744 5.06357 1.79223C5.99468 1.60702 6.9598 1.70208 7.83688 2.06538C8.71397 2.42868 9.46362 3.04391 9.99105 3.83326C10.5185 4.62262 10.8 5.55065 10.8 6.5C10.8 7.77304 10.2943 8.99394 9.39411 9.89411C8.49394 10.7943 7.27304 11.3 6 11.3Z" fill="currentColor"></path><path d="M6 2.9C5.44305 2.9 4.9089 3.12125 4.51508 3.51508C4.12125 3.9089 3.9 4.44304 3.9 5C3.9 5.15913 3.96322 5.31174 4.07574 5.42426C4.18826 5.53678 4.34087 5.6 4.5 5.6C4.65913 5.6 4.81174 5.53678 4.92427 5.42426C5.03679 5.31174 5.1 5.15913 5.1 5C5.1 4.822 5.15279 4.64799 5.25168 4.49999C5.35057 4.35198 5.49113 4.23663 5.65559 4.16851C5.82004 4.10039 6.001 4.08257 6.17558 4.11729C6.35017 4.15202 6.51053 4.23774 6.6364 4.3636C6.76227 4.48947 6.84798 4.64983 6.88271 4.82442C6.91744 4.999 6.89961 5.17996 6.83149 5.34441C6.76337 5.50887 6.64802 5.64943 6.50001 5.74832C6.35201 5.84721 6.17801 5.9 6 5.9C5.84087 5.9 5.68826 5.96321 5.57574 6.07573C5.46322 6.18826 5.4 6.34087 5.4 6.5V7.7C5.4 7.85913 5.46322 8.01174 5.57574 8.12426C5.68826 8.23678 5.84087 8.3 6 8.3C6.15913 8.3 6.31174 8.23678 6.42427 8.12426C6.53679 8.01174 6.6 7.85913 6.6 7.7V7.004C7.08486 6.8624 7.5022 6.55032 7.77509 6.12526C8.04799 5.70021 8.15804 5.19084 8.08497 4.69104C8.0119 4.19124 7.76063 3.73469 7.37748 3.40555C6.99432 3.07641 6.50511 2.89686 6 2.9Z" fill="currentColor"></path><path d="M6 10.1C6.33137 10.1 6.6 9.83137 6.6 9.5C6.6 9.16863 6.33137 8.9 6 8.9C5.66863 8.9 5.4 9.16863 5.4 9.5C5.4 9.83137 5.66863 10.1 6 10.1Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CircledQuestionMarkIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CircledQuestionMarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CircledQuestionMarkIcon as default };
//# sourceMappingURL=CircledQuestionMarkIcon-B3zipiKl.mjs.map
