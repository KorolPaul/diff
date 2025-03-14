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
    width: "27",
    height: "12",
    viewBox: "0 0 27 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.92574 1.8388C4.60926 2.21857 4.1029 2.51922 3.59654 2.47175C3.52797 1.96012 3.78115 1.41683 4.07125 1.07925C4.38773 0.694208 4.94156 0.414653 5.38991 0.393555C5.44793 0.926291 5.24222 1.44848 4.92574 1.8388ZM5.38991 2.57197C4.65673 2.52977 4.02906 2.99394 3.68093 2.99394C3.32753 2.99394 2.7948 2.59307 2.21459 2.60889C1.46032 2.61944 0.758795 3.04669 0.379023 3.73766C-0.417444 5.11434 0.173313 7.15034 0.938132 8.26855C1.31263 8.82239 1.76097 9.42897 2.35173 9.41315C2.91084 9.39205 3.13237 9.04392 3.80752 9.04392C4.48795 9.04392 4.68311 9.41315 5.27386 9.39732C5.88572 9.38677 6.27077 8.84349 6.64526 8.28965C7.07251 7.66197 7.24657 7.04484 7.25712 7.0132C7.24657 6.99737 6.07561 6.54903 6.06506 5.1829C6.05451 4.03831 6.98811 3.49503 7.02504 3.46338C6.49758 2.67746 5.66946 2.59307 5.38991 2.57197ZM9.62542 1.02651V9.34458H10.9019V6.50156H12.6689C14.2829 6.50156 15.4169 5.38334 15.4169 3.76403C15.4169 2.14473 14.304 1.03178 12.7111 1.03178L9.62542 1.02651ZM10.9019 2.11835H12.3735C13.4812 2.11835 14.1141 2.71439 14.1141 3.76931C14.1141 4.82423 13.4812 5.42026 12.3629 5.42026H10.8966V2.11835H10.9019ZM17.7431 9.40787C18.5501 9.40787 19.2885 8.99645 19.6314 8.34767H19.6577V9.34458H20.8393V5.204C20.8393 4.00667 19.8898 3.2313 18.4235 3.2313C17.0679 3.2313 16.0657 4.01722 16.0341 5.09324H17.1839C17.2789 4.5816 17.7483 4.24402 18.3918 4.24402C19.1725 4.24402 19.6103 4.61325 19.6103 5.2884V5.74729L18.0173 5.84223C16.5299 5.9319 15.7334 6.54376 15.7334 7.6145C15.7334 8.6958 16.5615 9.40787 17.7431 9.40787ZM18.0912 8.42152C17.4108 8.42152 16.973 8.08922 16.973 7.58813C16.973 7.06594 17.3897 6.75474 18.1861 6.70727L19.605 6.6176V7.08704C19.6103 7.86768 18.9562 8.42152 18.0912 8.42152ZM22.4216 11.6074C23.6664 11.6074 24.2519 11.1221 24.7583 9.66633L27 3.31042H25.7024L24.1992 8.22108H24.1728L22.6695 3.31042H21.3351L23.4977 9.36567L23.3816 9.7349C23.1812 10.3573 22.87 10.5947 22.3056 10.5947C22.2054 10.5947 22.0102 10.5841 21.9311 10.5736V11.5705C22.0049 11.5916 22.3214 11.6021 22.4216 11.6074Z" fill="black"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/PaymentApplePayIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentApplePayIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PaymentApplePayIcon as default };
//# sourceMappingURL=PaymentApplePayIcon-D-DxMYTz.mjs.map
