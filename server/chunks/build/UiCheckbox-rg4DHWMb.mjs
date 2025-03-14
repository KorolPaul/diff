import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiCheckbox",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: [String, Number, Boolean] },
    name: {},
    errors: {},
    small: { type: Boolean },
    smallLabel: { type: Boolean }
  },
  emits: ["update:modelValue", "onChange"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkbox", {
          error: (_a = _ctx.errors) == null ? void 0 : _a.length,
          checkbox__small: _ctx.small
        }]
      }, _attrs))}><input${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        id: _ctx.name,
        class: "checkbox_input",
        type: "checkbox",
        checked: Boolean(_ctx.modelValue)
      }))}><label class="${ssrRenderClass([{
        "checkbox_label__small-label": _ctx.smallLabel
      }, "checkbox_label"])}"${ssrRenderAttr("for", _ctx.name)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
      if (_ctx.errors) {
        _push(`<div class="checkbox_errors"><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiCheckbox/UiCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UiCheckbox-rg4DHWMb.mjs.map
