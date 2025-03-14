import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ui-preloader" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.44444444444444 44.44444444444444"><circle class="ui-preloader_circle-underlay" fill="transparent" cx="50%" cy="50%" r="20" stroke-width="4.444444444444445" stroke-dasharray="125.66370614359172" stroke-dashoffset="0"></circle><circle class="ui-preloader_circle-overlay" fill="transparent" cx="50%" cy="50%" r="20" stroke-width="4.444444444444445" stroke-dasharray="125.66370614359172" stroke-dashoffset="125.66370614359172px"></circle></svg></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiPreloader/ui-preloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ui-preloader-C4Bi7ENY.mjs.map
