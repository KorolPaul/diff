import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderList } from 'vue/server-renderer';
import { a as useI18n } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    label: {},
    modelValue: {},
    errors: {},
    type: {},
    required: { type: Boolean },
    handleInput: { type: Function }
  },
  emits: ["update:modelValue", "keyup"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const inputValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => {
        inputValue.value = props.modelValue;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      let _temp0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["text-input", { error: (_a = _ctx.errors) == null ? void 0 : _a.length }]
      }, _attrs))}><input${ssrRenderAttrs((_temp0 = mergeProps({ ..._ctx.$attrs }, {
        class: "text-input_input",
        type: _ctx.type || "text",
        placeholder: " "
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(inputValue)))))}><span class="text-input_label">${ssrInterpolate(unref(t)(_ctx.label))}`);
      if (_ctx.required) {
        _push(`<!--[-->*<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
      if ((_b = _ctx.errors) == null ? void 0 : _b.length) {
        _push(`<div class="text-input_errors"><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TextInput/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TextInput-HaUa076w.mjs.map
