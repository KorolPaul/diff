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
  }, _attrs))}><g clip-path="url(#clip0)"><path d="M10.8454 6.15918C10.6255 6.15918 10.4473 6.3374 10.4473 6.55731V14.0819C10.4473 14.3016 10.6255 14.48 10.8454 14.48C11.0653 14.48 11.2435 14.3016 11.2435 14.0819V6.55731C11.2435 6.3374 11.0653 6.15918 10.8454 6.15918Z" fill="currentColor"></path><path d="M6.14617 6.15918C5.92627 6.15918 5.74805 6.3374 5.74805 6.55731V14.0819C5.74805 14.3016 5.92627 14.48 6.14617 14.48C6.36608 14.48 6.5443 14.3016 6.5443 14.0819V6.55731C6.5443 6.3374 6.36608 6.15918 6.14617 6.15918Z" fill="currentColor"></path><path d="M2.72254 5.06106V14.87C2.72254 15.4498 2.93513 15.9943 3.30651 16.3849C3.67617 16.7767 4.19062 16.9991 4.72903 17H12.2617C12.8002 16.9991 13.3147 16.7767 13.6842 16.3849C14.0556 15.9943 14.2682 15.4498 14.2682 14.87V5.06106C15.0064 4.86511 15.4848 4.15191 15.386 3.39438C15.2871 2.63701 14.6419 2.07046 13.878 2.0703H11.8396V1.57265C11.8419 1.15415 11.6765 0.752291 11.3802 0.456652C11.0839 0.161169 10.6815 -0.00336908 10.263 5.23104e-05H6.72774C6.30924 -0.00336908 5.90676 0.161169 5.6105 0.456652C5.31424 0.752291 5.14877 1.15415 5.1511 1.57265V2.0703H3.11273C2.34883 2.07046 1.70359 2.63701 1.60468 3.39438C1.50592 4.15191 1.9843 4.86511 2.72254 5.06106ZM12.2617 16.2037H4.72903C4.04833 16.2037 3.51879 15.619 3.51879 14.87V5.09606H13.4719V14.87C13.4719 15.619 12.9424 16.2037 12.2617 16.2037ZM5.94735 1.57265C5.94471 1.36534 6.0262 1.16581 6.17332 1.01947C6.32028 0.873129 6.52028 0.792726 6.72774 0.796303H10.263C10.4704 0.792726 10.6704 0.873129 10.8174 1.01947C10.9645 1.16566 11.046 1.36534 11.0434 1.57265V2.0703H5.94735V1.57265ZM3.11273 2.86655H13.878C14.2738 2.86655 14.5946 3.18739 14.5946 3.58318C14.5946 3.97897 14.2738 4.2998 13.878 4.2998H3.11273C2.71694 4.2998 2.39611 3.97897 2.39611 3.58318C2.39611 3.18739 2.71694 2.86655 3.11273 2.86655Z" fill="currentColor"></path><path d="M8.49578 6.15918C8.27588 6.15918 8.09766 6.3374 8.09766 6.55731V14.0819C8.09766 14.3016 8.27588 14.48 8.49578 14.48C8.71568 14.48 8.8939 14.3016 8.8939 14.0819V6.55731C8.8939 6.3374 8.71568 6.15918 8.49578 6.15918Z" fill="currentColor"></path></g><defs><clipPath id="clip0"><rect width="17" height="17" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/BinTrashIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BinTrashIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { BinTrashIcon as default };
//# sourceMappingURL=BinTrashIcon-RgTXMKg9.mjs.map
