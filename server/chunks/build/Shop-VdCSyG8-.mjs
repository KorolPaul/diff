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
  }, _attrs))}><path d="M13.6345 16.2622H3.91226C3.08885 16.2622 2.41906 15.5923 2.41906 14.7689L2.41895 8.35645H3.15263V14.7689C3.15263 15.1877 3.49339 15.5284 3.91215 15.5284H13.6347C14.0534 15.5284 14.3942 15.1878 14.3942 14.7689L14.3943 8.35645H15.128V14.7689C15.128 15.5923 14.4581 16.2622 13.6347 16.2622H13.6345Z" fill="currentColor"></path><path d="M7.05632 8.92888C5.90522 8.92888 4.96875 7.99229 4.96875 6.84131H5.70244C5.70244 7.58775 6.30976 8.19508 7.05632 8.19508C7.80288 8.19508 8.41021 7.58775 8.41021 6.84131H9.14389C9.14389 7.99229 8.20742 8.92888 7.05632 8.92888Z" fill="currentColor"></path><path d="M10.4977 8.93068C9.34663 8.93068 8.41016 7.9941 8.41016 6.84311V5.31885H9.14384V6.84311C9.14384 7.58956 9.75117 8.19688 10.4977 8.19688C11.2443 8.19688 11.8516 7.58956 11.8516 6.84311H12.5853C12.5853 7.9941 11.6488 8.93068 10.4977 8.93068Z" fill="currentColor"></path><path d="M13.9396 8.92958C12.7885 8.92958 11.8521 7.99299 11.8521 6.84201V5.31774H12.5857V6.84201C12.5857 7.58845 13.1931 8.19578 13.9396 8.19578C14.6862 8.19578 15.2936 7.58845 15.2936 6.84201V5.42846L14.0914 3.62064H3.4633L2.26103 5.42834V6.84189C2.26103 7.58834 2.86847 8.19566 3.61503 8.19566C4.36159 8.19566 4.96891 7.58834 4.96891 6.84189V5.31763H5.7026V6.84189C5.7026 7.99299 4.76613 8.92947 3.61503 8.92947C2.46382 8.92947 1.52734 7.99288 1.52734 6.84189V5.31763C1.52734 5.24534 1.54868 5.17462 1.58868 5.1144L2.9611 3.05051C3.02903 2.94817 3.14377 2.88672 3.26656 2.88672H14.2879C14.4107 2.88672 14.5254 2.94817 14.5934 3.05051L15.966 5.11451C16.0061 5.17473 16.0273 5.24545 16.0273 5.31774V6.84201C16.0273 7.99299 15.0909 8.92958 13.9397 8.92958H13.9396Z" fill="currentColor"></path><path d="M1.89355 4.94727H15.6601V5.68107H1.89355V4.94727Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4416 11.6258H6.87582C6.77735 11.6258 6.69753 11.7056 6.69753 11.804V15.3698C6.69753 15.4683 6.77735 15.5481 6.87582 15.5481H10.4416C10.54 15.5481 10.6199 15.4683 10.6199 15.3698V11.804C10.6199 11.7056 10.54 11.6258 10.4416 11.6258ZM6.87582 10.9126C6.38349 10.9126 5.98438 11.3117 5.98438 11.804V15.3698C5.98438 15.8621 6.38349 16.2612 6.87582 16.2612H10.4416C10.9339 16.2612 11.333 15.8621 11.333 15.3698V11.804C11.333 11.3117 10.9339 10.9126 10.4416 10.9126H6.87582Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/Shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Shop-VdCSyG8-.mjs.map
