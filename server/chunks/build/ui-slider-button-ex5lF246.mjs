import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ui-slider-button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: true
    },
    centered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const icon = computed(() => `arrow${capitalizeFirstLetter(props.type)}Slider`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["ui-slider-button", {
          small: __props.small,
          "left": __props.type === "left",
          "right": __props.type === "right"
        }]
      }, _attrs))} data-v-f9d4cde1>`);
      _push(ssrRenderComponent(_component_Icon, { icon: unref(icon) }, null, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiSliderButton/ui-slider-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9d4cde1"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ui-slider-button-ex5lF246.mjs.map
