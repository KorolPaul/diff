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
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="0.399902" width="30" height="30" rx="15" fill="#34AADF"></rect><path d="M8.74596 14.4686C8.74596 14.4686 14.8494 11.898 16.9661 10.9928C17.7776 10.6307 20.5294 9.47209 20.5294 9.47209C20.5294 9.47209 21.7995 8.96523 21.6936 10.1962C21.6583 10.7032 21.3761 12.4772 21.0939 14.3962C20.6705 17.1117 20.2119 20.0807 20.2119 20.0807C20.2119 20.0807 20.1413 20.9134 19.5416 21.0583C18.9418 21.2031 17.954 20.5514 17.7776 20.4065C17.6364 20.2979 15.1316 18.6686 14.2143 17.8721C13.9674 17.6548 13.6851 17.2204 14.2496 16.7135C15.5197 15.5186 17.0367 14.0342 17.954 13.0928C18.3773 12.6583 18.8007 11.6445 17.0367 12.8755C14.5318 14.6497 12.0623 16.3152 12.0623 16.3152C12.0623 16.3152 11.4978 16.6772 10.4394 16.3514C9.38096 16.0255 8.14616 15.591 8.14616 15.591C8.14616 15.591 7.2995 15.048 8.74596 14.4686Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/TelegramColoredIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TelegramColoredIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TelegramColoredIcon as default };
//# sourceMappingURL=TelegramColoredIcon-Dngv5ZX4.mjs.map
