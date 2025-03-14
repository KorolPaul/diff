import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiRadio",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    modelValue: {},
    name: {},
    type: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "radio" }, _attrs))} data-v-2b96426e><input${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        id: String(_ctx.value),
        class: "radio_input",
        type: "radio",
        name: _ctx.name,
        value: _ctx.value
      }))} data-v-2b96426e><label class="radio_label"${ssrRenderAttr("for", String(_ctx.value))} data-v-2b96426e>`);
      ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiRadio/UiRadio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b96426e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=UiRadio-hn8C_nHF.mjs.map
