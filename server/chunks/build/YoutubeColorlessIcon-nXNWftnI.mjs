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
    width: "22",
    height: "16",
    viewBox: "0 0 22 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.0701 0H11.1925C12.3228 0.004125 18.0496 0.0453753 19.5938 0.460625C20.0606 0.587357 20.4859 0.834381 20.8273 1.17701C21.1688 1.51964 21.4143 1.94588 21.5394 2.41313C21.6782 2.93563 21.7759 3.62725 21.8419 4.34088L21.8556 4.48388L21.8859 4.84137L21.8969 4.98438C21.9862 6.24113 21.9972 7.41812 21.9986 7.67525V7.77838C21.9972 8.04513 21.9849 9.30187 21.8859 10.6109L21.8749 10.7552L21.8625 10.8983C21.7937 11.6848 21.692 12.4658 21.5394 13.0405C21.4147 13.5079 21.1693 13.9344 20.8278 14.2771C20.4863 14.6198 20.0607 14.8666 19.5938 14.993C17.9988 15.422 11.9364 15.4523 11.0962 15.4536H10.901C10.4761 15.4536 8.71887 15.4454 6.87637 15.3821L6.64262 15.3739L6.523 15.3684L6.28788 15.3588L6.05275 15.3491C4.5265 15.2817 3.07313 15.1731 2.4035 14.9916C1.93667 14.8654 1.51121 14.6187 1.16975 14.2763C0.828277 13.9338 0.582789 13.5077 0.457875 13.0405C0.30525 12.4671 0.2035 11.6848 0.13475 10.8983L0.12375 10.7539L0.11275 10.6109C0.0448904 9.67917 0.00728732 8.74552 0 7.81137L0 7.64225C0.00275 7.34662 0.01375 6.325 0.088 5.1975L0.097625 5.05587L0.10175 4.98438L0.11275 4.84137L0.143 4.48388L0.15675 4.34088C0.22275 3.62725 0.320375 2.93425 0.45925 2.41313C0.583954 1.94569 0.829348 1.51925 1.17083 1.17656C1.51231 0.833874 1.93788 0.586977 2.40488 0.460625C3.0745 0.281875 4.52787 0.171875 6.05412 0.103125L6.28788 0.0934999L6.52437 0.0852502L6.64262 0.0811252L6.87775 0.0715002C8.18635 0.0293902 9.49548 0.00601269 10.8047 0.00137506H11.0701V0ZM8.8 4.41375V11.0385L14.5159 7.7275L8.8 4.41375Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/YoutubeColorlessIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YoutubeColorlessIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { YoutubeColorlessIcon as default };
//# sourceMappingURL=YoutubeColorlessIcon-nXNWftnI.mjs.map
