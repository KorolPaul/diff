import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTextarea",
  __ssrInlineRender: true,
  props: {
    label: {},
    modelValue: {},
    errors: {},
    type: {},
    maxLength: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      let _temp0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["textarea", { error: (_a = _ctx.errors) == null ? void 0 : _a.length }]
      }, _attrs))} data-v-021371a3><textarea${ssrRenderAttrs(_temp0 = mergeProps({ ..._ctx.$attrs }, {
        class: "textarea_input",
        type: _ctx.type || "text",
        value: _ctx.modelValue,
        maxlength: _ctx.maxLength,
        placeholder: " "
      }), "textarea")} data-v-021371a3>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea><span class="textarea_label" data-v-021371a3>${ssrInterpolate(_ctx.label)}</span>`);
      if (_ctx.errors) {
        _push(`<div class="textarea_errors" data-v-021371a3><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span data-v-021371a3>${ssrInterpolate(error)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiTextarea/UiTextarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-021371a3"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=UiTextarea-BGk3U8qq.mjs.map
