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
  }, _attrs))}><path d="M1.97078 12.5516C1.33977 12.1701 1 11.7813 1 10.7321V4.92124C1 4.1582 1.2635 3.6813 1.8529 3.32913L6.75532 0.379686C7.59435 -0.126562 8.40565 -0.126562 9.24468 0.379686L14.154 3.32913C14.7365 3.6813 15 4.1582 15 4.92124V10.7321C15 11.7813 14.6672 12.1701 14.0292 12.5516L8.579 15.8239C8.18375 16.0587 7.81625 16.0587 7.42793 15.8239L1.97078 12.5516ZM11.2625 5.44216L13.3566 4.18755L8.78702 1.42887C8.24616 1.0987 7.75384 1.10604 7.21991 1.42887L5.88856 2.22859L11.2625 5.44216ZM8.00347 7.39379L10.1461 6.10982L4.79297 2.88891L2.65032 4.18755L8.00347 7.39379ZM2.59485 11.5832L7.45567 14.5106V8.42096L2.05399 5.15602V10.6954C2.05399 11.0989 2.19267 11.3484 2.59485 11.5832ZM13.4121 11.5832C13.8073 11.3484 13.946 11.0989 13.946 10.6954V5.15602L8.54433 8.42096V14.5106L13.4121 11.5832Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/OrderIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OrderIcon as default };
//# sourceMappingURL=OrderIcon-6_Y3eirc.mjs.map
