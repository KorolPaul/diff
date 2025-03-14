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
    width: "48",
    height: "32",
    viewBox: "0 0 76 52",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.42009 24.9561L1.41995 24.9562C0.860018 25.5348 0.860018 26.4652 1.41995 27.0438L1.42009 27.0439L23.9759 50.3423C23.976 50.3423 23.976 50.3424 23.9761 50.3424C24.3637 50.7429 24.9133 51 25.5074 51H73.5197C74.3705 51 75 50.3016 75 49.5037V2.49632C75 1.69841 74.3705 1 73.5197 1H25.5074C24.9355 1 24.3757 1.23154 23.9698 1.66405L1.42009 24.9561Z" fill="#FF5C0B" stroke="white" stroke-width="2"></path><path d="M35.7372 20.8152V25.9272H43.8492V28.5672H35.7372V34.9992H32.6172V18.1992H44.8812V20.8152H35.7372Z" fill="white"></path><rect width="16" height="40" transform="translate(55 6)" fill="white"></rect><path d="M65.612 16.156H60.932L59.924 18.4H59L62.84 10H63.716L67.556 18.4H66.62L65.612 16.156ZM65.288 15.436L63.272 10.924L61.256 15.436H65.288Z" fill="#0A0A0A"></path><path d="M62.9273 30.4004C62.9273 30.5937 63.084 30.7504 63.2773 30.7504C63.4706 30.7504 63.6273 30.5937 63.6273 30.4004L62.9273 30.4004ZM63.5248 22.1529C63.3881 22.0162 63.1665 22.0162 63.0299 22.1529L60.8025 24.3803C60.6658 24.517 60.6658 24.7386 60.8025 24.8753C60.9392 25.0119 61.1608 25.0119 61.2974 24.8753L63.2773 22.8954L65.2572 24.8753C65.3939 25.0119 65.6155 25.0119 65.7522 24.8753C65.8889 24.7386 65.8889 24.517 65.7522 24.3803L63.5248 22.1529ZM63.6273 30.4004L63.6273 22.4004L62.9273 22.4004L62.9273 30.4004L63.6273 30.4004Z" fill="#0A0A0A"></path><path d="M66.1561 38.6724H67.0081V41.8764C66.6161 42.2204 66.1521 42.4844 65.6161 42.6684C65.0801 42.8524 64.5161 42.9444 63.9241 42.9444C63.0841 42.9444 62.3281 42.7604 61.6561 42.3924C60.9841 42.0244 60.4561 41.5164 60.0721 40.8684C59.6881 40.2124 59.4961 39.4804 59.4961 38.6724C59.4961 37.8644 59.6881 37.1364 60.0721 36.4884C60.4561 35.8324 60.9841 35.3204 61.6561 34.9524C62.3281 34.5844 63.0881 34.4004 63.9361 34.4004C64.5761 34.4004 65.1641 34.5044 65.7001 34.7124C66.2361 34.9124 66.6881 35.2124 67.0561 35.6124L66.5041 36.1764C65.8401 35.5204 64.9961 35.1924 63.9721 35.1924C63.2921 35.1924 62.6761 35.3444 62.1241 35.6484C61.5801 35.9444 61.1521 36.3604 60.8401 36.8964C60.5281 37.4244 60.3721 38.0164 60.3721 38.6724C60.3721 39.3284 60.5281 39.9204 60.8401 40.4484C61.1521 40.9764 61.5801 41.3924 62.1241 41.6964C62.6681 42.0004 63.2801 42.1524 63.9601 42.1524C64.8241 42.1524 65.5561 41.9364 66.1561 41.5044V38.6724Z" fill="#0A0A0A"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/EnergyEfficiencyF.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnergyEfficiencyF = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EnergyEfficiencyF as default };
//# sourceMappingURL=EnergyEfficiencyF-BYeXut0C.mjs.map
