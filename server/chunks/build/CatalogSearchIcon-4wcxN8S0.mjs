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
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M21.9697 21.9698C22.2626 21.6769 22.2625 21.2021 21.9696 20.9093L18.9832 17.9235C19.9231 16.7139 20.3665 15.1915 20.2233 13.6664C20.08 12.1412 19.3609 10.728 18.2122 9.71457C17.0636 8.70109 15.5718 8.16353 14.0407 8.21134C12.5096 8.25915 11.0543 8.88875 9.97117 9.97192C8.888 11.0551 8.25841 12.5104 8.21059 14.0415C8.16278 15.5726 8.70035 17.0643 9.71382 18.213C10.7273 19.3616 12.1405 20.0808 13.6656 20.224C15.1907 20.3673 16.7131 19.9238 17.9227 18.984L20.9093 21.9699C21.2021 22.2627 21.6769 22.2626 21.9697 21.9698ZM14.25 18.75C13.36 18.75 12.49 18.4861 11.7499 17.9916C11.0099 17.4971 10.4331 16.7943 10.0925 15.9721C9.75195 15.1498 9.66283 14.245 9.83647 13.3721C10.0101 12.4992 10.4387 11.6974 11.068 11.068C11.6974 10.4387 12.4992 10.0101 13.3721 9.83647C14.245 9.66283 15.1498 9.75195 15.9721 10.0925C16.7943 10.4331 17.4971 11.0099 17.9916 11.7499C18.4861 12.49 18.75 13.36 18.75 14.25C18.7486 15.443 18.2741 16.5868 17.4304 17.4304C16.5868 18.2741 15.443 18.7486 14.25 18.75ZM1.5 9.75C1.5 9.33579 1.83579 9 2.25 9H6.75C7.16421 9 7.5 9.33579 7.5 9.75C7.5 10.1642 7.16421 10.5 6.75 10.5H2.25C1.83579 10.5 1.5 10.1642 1.5 9.75ZM1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25C13.5 2.66421 13.1642 3 12.75 3H2.25C1.83579 3 1.5 2.66421 1.5 2.25ZM1.5 6C1.5 5.58579 1.83579 5.25 2.25 5.25H12.75C13.1642 5.25 13.5 5.58579 13.5 6C13.5 6.41421 13.1642 6.75 12.75 6.75H2.25C1.83579 6.75 1.5 6.41421 1.5 6Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CatalogSearchIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CatalogSearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CatalogSearchIcon as default };
//# sourceMappingURL=CatalogSearchIcon-4wcxN8S0.mjs.map
