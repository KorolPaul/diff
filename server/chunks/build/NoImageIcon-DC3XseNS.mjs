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
    width: "81",
    height: "60",
    viewBox: "0 0 81 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M31.4978 17.8187C31.4015 13.4896 27.8514 10 23.5 10C19.0881 10 15.5 13.5881 15.5 18C15.5 22.3425 18.9785 25.8881 23.2963 25.9978V26H29.0087H31.4754H31.5V17.8187H31.4978ZM18.0003 17.9978C18.0003 14.9647 20.467 12.498 23.5 12.498C26.533 12.498 28.9997 14.9647 28.9997 17.9978C28.9997 21.0308 26.533 23.4975 23.5 23.4975C20.467 23.4975 18.0003 21.0308 18.0003 17.9978Z" fill="currentColor"></path><path d="M23.5 21C25.1569 21 26.5 19.6569 26.5 18C26.5 16.3431 25.1569 15 23.5 15C21.8431 15 20.5 16.3431 20.5 18C20.5 19.6569 21.8431 21 23.5 21Z" fill="currentColor"></path><path d="M8 0C6.01088 0 4.10322 0.790177 2.6967 2.1967C1.29018 3.60322 0.5 5.51088 0.5 7.5L0.5 52.5C0.5 54.4891 1.29018 56.3968 2.6967 57.8033C4.10322 59.2098 6.01088 60 8 60H73C74.9891 60 76.8968 59.2098 78.3033 57.8033C79.7098 56.3968 80.5 54.4891 80.5 52.5V7.5C80.5 5.51088 79.7098 3.60322 78.3033 2.1967C76.8968 0.790177 74.9891 0 73 0H8ZM73 5C73.663 5 74.2989 5.26339 74.7678 5.73223C75.2366 6.20107 75.5 6.83696 75.5 7.5V37.5L56.625 27.765C56.1561 27.5301 55.6252 27.4486 55.1075 27.5321C54.5897 27.6155 54.1113 27.8597 53.74 28.23L35.19 46.78L21.89 37.92C21.4098 37.6003 20.8338 37.4565 20.2597 37.513C19.6856 37.5695 19.1487 37.8228 18.74 38.23L5.51 50C5.51069 50.0668 5.50402 49.9335 5.51 50L5.5 7.5C5.5 6.83696 5.76339 6.20107 6.23223 5.73223C6.70107 5.26339 7.33696 5 8 5H73Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/NoImageIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NoImageIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { NoImageIcon as default };
//# sourceMappingURL=NoImageIcon-DC3XseNS.mjs.map
