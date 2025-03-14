import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ui-rotate-arrow",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_Icon, mergeProps({
        icon: "dropdown",
        class: ["ui-rotate-arrow", { active: __props.active, centered: __props.centered }]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiRotateArrow/ui-rotate-arrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ui-rotate-arrow-B7iS75rF.mjs.map
