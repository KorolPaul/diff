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
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M3.21868 16.8867C2.41787 16.8867 1.81453 16.6863 1.40864 16.2854C1.00275 15.8899 0.799805 15.2994 0.799805 14.5139V6.00607C0.799805 5.22056 1.00275 4.63007 1.40864 4.23461C1.81453 3.83373 2.41787 3.63329 3.21868 3.63329H12.6967C13.492 3.63329 14.0926 3.83373 14.4985 4.23461C14.9099 4.63549 15.1156 5.22598 15.1156 6.00607V14.5139C15.1156 15.2994 14.9181 15.8899 14.5232 16.2854C14.1338 16.6863 13.5771 16.8867 12.853 16.8867H3.21868ZM3.24336 15.8872H12.8284C13.2068 15.8872 13.514 15.768 13.7498 15.5297C13.9857 15.2913 14.1036 14.9365 14.1036 14.4652V6.05482C14.1036 5.58894 13.9775 5.23681 13.7252 4.99845C13.4783 4.75467 13.1273 4.63278 12.672 4.63278H3.24336C2.77714 4.63278 2.42062 4.75467 2.17379 4.99845C1.93245 5.23681 1.81178 5.58894 1.81178 6.05482V14.4652C1.81178 14.9365 1.93245 15.2913 2.17379 15.5297C2.42062 15.768 2.77714 15.8872 3.24336 15.8872ZM4.8724 3.9502C4.8724 3.37597 5.00678 2.85862 5.27555 2.39815C5.54979 1.93768 5.92003 1.57201 6.38625 1.30114C6.85248 1.02486 7.37629 0.886719 7.9577 0.886719C8.53911 0.886719 9.06292 1.02486 9.52915 1.30114C9.99537 1.57201 10.3629 1.93768 10.6316 2.39815C10.9059 2.85862 11.043 3.37597 11.043 3.9502H10.031C10.031 3.54391 9.94052 3.18365 9.75951 2.86945C9.58399 2.54983 9.33991 2.29793 9.02727 2.11374C8.71463 1.92955 8.3581 1.83746 7.9577 1.83746C7.5573 1.83746 7.20077 1.92955 6.88813 2.11374C6.57549 2.29793 6.32866 2.54983 6.14766 2.86945C5.97214 3.18365 5.88438 3.54391 5.88438 3.9502H4.8724Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/CartIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CartIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CartIcon as default };
//# sourceMappingURL=CartIcon-Dvlwkn-w.mjs.map
