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
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 22L1.54641 16.3506C0.592165 14.6969 0.0907498 12.8223 0.0916665 10.9001C0.0944165 4.89042 4.98482 0 10.9936 0C13.9095 0.000916667 16.6466 1.13667 18.7055 3.19733C20.7634 5.258 21.8964 7.997 21.8955 10.9102C21.8927 16.9208 17.0023 21.8112 10.9936 21.8112C9.1694 21.8103 7.37182 21.3528 5.77957 20.4838L0 22ZM6.04724 18.5103C7.58357 19.4223 9.05023 19.9687 10.9899 19.9696C15.9839 19.9696 20.052 15.9051 20.0548 10.9083C20.0566 5.9015 16.0077 1.8425 10.9972 1.84067C5.99957 1.84067 1.93416 5.90517 1.93233 10.901C1.93141 12.9406 2.52908 14.4677 3.53283 16.0655L2.61708 19.4095L6.04724 18.5103ZM16.4853 13.5016C16.4175 13.3879 16.236 13.3201 15.9628 13.1835C15.6905 13.0469 14.3513 12.3878 14.1011 12.2971C13.8517 12.2063 13.6702 12.1605 13.4878 12.4337C13.3063 12.7059 12.7838 13.3201 12.6252 13.5016C12.4666 13.6831 12.3071 13.706 12.0349 13.5694C11.7626 13.4328 10.8845 13.1459 9.84406 12.2173C9.03465 11.495 8.4874 10.6031 8.32881 10.3299C8.17023 10.0577 8.31231 9.91008 8.44798 9.77442C8.57081 9.6525 8.72023 9.45633 8.85681 9.29683C8.99523 9.13917 9.04015 9.0255 9.13181 8.84308C9.22256 8.66158 9.17765 8.50208 9.1089 8.3655C9.04015 8.22983 8.49565 6.88875 8.26923 6.34333C8.0474 5.81258 7.82282 5.88408 7.65598 5.87583L7.13348 5.86667C6.95198 5.86667 6.65682 5.9345 6.40749 6.20767C6.15815 6.48083 5.45415 7.139 5.45415 8.48008C5.45415 9.82117 6.4304 11.1164 6.56607 11.2979C6.70265 11.4794 8.48648 14.2313 11.2191 15.411C11.869 15.6915 12.3768 15.8593 12.7719 15.9848C13.4246 16.192 14.0186 16.1627 14.4879 16.093C15.0113 16.0151 16.0994 15.4339 16.3267 14.7978C16.554 14.1607 16.554 13.6153 16.4853 13.5016Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/WatsupIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WatsupIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { WatsupIcon as default };
//# sourceMappingURL=WatsupIcon-B250hvmQ.mjs.map
