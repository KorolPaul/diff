import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiPreloader = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ui-page-wrapper" }, _attrs))} data-v-7079da79>`);
  _push(ssrRenderComponent(_component_UiPreloader, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiPreloader/ui-page-preloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7079da79"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ui-page-preloader-f4jo8KnM.mjs.map
