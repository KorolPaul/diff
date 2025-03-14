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
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.46888 9.96894C2.53854 9.89909 2.62131 9.84368 2.71243 9.80587C2.80354 9.76806 2.90122 9.7486 2.99988 9.7486C3.09853 9.7486 3.19621 9.76806 3.28733 9.80587C3.37844 9.84368 3.46121 9.89909 3.53088 9.96894L11.9999 18.4394L20.4689 9.96894C20.6097 9.82811 20.8007 9.74899 20.9999 9.74899C21.199 9.74899 21.39 9.82811 21.5309 9.96894C21.6717 10.1098 21.7508 10.3008 21.7508 10.4999C21.7508 10.6991 21.6717 10.8901 21.5309 11.0309L12.5309 20.0309C12.4612 20.1008 12.3784 20.1562 12.2873 20.194C12.1962 20.2318 12.0985 20.2513 11.9999 20.2513C11.9012 20.2513 11.8035 20.2318 11.7124 20.194C11.6213 20.1562 11.5385 20.1008 11.4689 20.0309L2.46888 11.0309C2.39903 10.9613 2.34362 10.8785 2.30581 10.7874C2.268 10.6963 2.24854 10.5986 2.24854 10.4999C2.24854 10.4013 2.268 10.3036 2.30581 10.2125C2.34362 10.1214 2.39903 10.0386 2.46888 9.96894Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.46888 3.96894C2.53854 3.89909 2.62131 3.84368 2.71243 3.80587C2.80354 3.76806 2.90122 3.7486 2.99988 3.7486C3.09853 3.7486 3.19621 3.76806 3.28733 3.80587C3.37844 3.84368 3.46121 3.89909 3.53088 3.96894L11.9999 12.4394L20.4689 3.96894C20.5386 3.8992 20.6214 3.84389 20.7125 3.80615C20.8036 3.76841 20.9013 3.74899 20.9999 3.74899C21.0985 3.74899 21.1961 3.76841 21.2873 3.80615C21.3784 3.84389 21.4611 3.8992 21.5309 3.96894C21.6006 4.03867 21.6559 4.12145 21.6937 4.21256C21.7314 4.30367 21.7508 4.40132 21.7508 4.49994C21.7508 4.59855 21.7314 4.6962 21.6937 4.78731C21.6559 4.87842 21.6006 4.96121 21.5309 5.03094L12.5309 14.0309C12.4612 14.1008 12.3784 14.1562 12.2873 14.194C12.1962 14.2318 12.0985 14.2513 11.9999 14.2513C11.9012 14.2513 11.8035 14.2318 11.7124 14.194C11.6213 14.1562 11.5385 14.1008 11.4689 14.0309L2.46888 5.03094C2.39903 4.96127 2.34362 4.87851 2.30581 4.78739C2.268 4.69627 2.24854 4.59859 2.24854 4.49994C2.24854 4.40129 2.268 4.3036 2.30581 4.21249C2.34362 4.12137 2.39903 4.03861 2.46888 3.96894Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/DoubleDownIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DoubleDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DoubleDownIcon as default };
//# sourceMappingURL=DoubleDownIcon-Brihj4sc.mjs.map
