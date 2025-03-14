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
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.7278C1 17.4547 1.88022 18.3182 3.63227 18.3182H9.59091V16.9685H3.64903C2.81073 16.9685 2.34966 16.5242 2.34966 15.6524V9.23938H19.3504V12.5909H20.7001V6.59873C20.7001 4.87183 19.8282 4 18.0678 4H3.63227C1.88022 4 1 4.87183 1 6.59873V15.7278ZM2.34966 7.33644V6.67418C2.34966 5.80235 2.81073 5.34966 3.64903 5.34966H18.051C18.8726 5.34966 19.3504 5.80235 19.3504 6.67418V7.33644H2.34966ZM3.94244 14.5794C3.94244 15.0488 4.26937 15.3841 4.76397 15.3841H6.81781C7.31241 15.3841 7.63935 15.0488 7.63935 14.5794V13.0285C7.63935 12.5507 7.31241 12.2237 6.81781 12.2237H4.76397C4.26937 12.2237 3.94244 12.5507 3.94244 13.0285V14.5794Z" fill="currentColor"></path><path d="M11 20.6393C11 20.8532 11.1418 21 11.3586 21H21.6414C21.8582 21 22 20.8532 22 20.6393V14.3607C22 14.1426 21.8582 14 21.6414 14H11.3586C11.1418 14 11 14.1426 11 14.3607V20.6393ZM11.8298 20.0437V14.9563C11.8298 14.8724 11.8673 14.8346 11.9507 14.8346H21.0534C21.1368 14.8346 21.1702 14.8724 21.1702 14.9563V20.0437C21.1702 20.1276 21.1368 20.1612 21.0534 20.1612H11.9507C11.8673 20.1612 11.8298 20.1276 11.8298 20.0437ZM12.2384 19.5321C12.2384 19.6747 12.3177 19.7543 12.4553 19.7543H20.5489C20.6865 19.7543 20.7657 19.6747 20.7657 19.5321V15.4679C20.7657 15.3253 20.6865 15.2457 20.5489 15.2457H12.4553C12.3177 15.2457 12.2384 15.3253 12.2384 15.4679V19.5321ZM12.6804 19.2217V15.7783C12.6804 15.7196 12.7096 15.6902 12.768 15.6902H15.5284C15.1782 16.0803 14.953 16.7052 14.953 17.4937C14.953 18.2864 15.1782 18.9155 15.5326 19.3098H12.768C12.7096 19.3098 12.6804 19.2762 12.6804 19.2217ZM18.0512 17.4937C18.0512 16.7052 17.826 16.0803 17.4632 15.6902H20.2362C20.2904 15.6902 20.3237 15.7196 20.3237 15.7783V19.2217C20.3237 19.2762 20.2904 19.3098 20.2362 19.3098H17.4591C17.8218 18.9155 18.0512 18.2864 18.0512 17.4937ZM16.4833 19.2259C15.9287 19.2259 15.4575 18.559 15.4575 17.4937C15.4575 16.4368 15.9287 15.7741 16.4833 15.7741C17.0629 15.7741 17.5466 16.4368 17.5466 17.4937C17.5466 18.559 17.0629 19.2259 16.4833 19.2259Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PaymentCashIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentCashIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PaymentCashIcon as default };
//# sourceMappingURL=PaymentCashIcon-CxubKsLi.mjs.map
