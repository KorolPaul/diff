import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './UiCheckbox-rg4DHWMb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormRow",
  __ssrInlineRender: true,
  props: {
    smallIndent: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["form_row", { "form_row__small-indent": _ctx.smallIndent }]
      }, _attrs))} data-v-98cd6f1f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Form/FormRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-98cd6f1f"]]);
const _sfc_main = {
  __name: "policy-checkbox",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    errorMessages: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCheckbox = _sfc_main$2;
      _push(ssrRenderComponent(_component_UiCheckbox, mergeProps({
        disabled: __props.disabled,
        name: "policy",
        errors: __props.errorMessages,
        value: __props.value,
        "small-label": "",
        class: "policy-checkbox",
        onChange: ($event) => _ctx.$emit("input", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("agree_processing_personal_data"))} <a target="_blank"${ssrRenderAttr("href", _ctx.localePath("/" + _ctx.$t("privacy_policy_slug")))}${_scopeId}>${ssrInterpolate(_ctx.$t("processing_of_personal_data"))}, </a> ${ssrInterpolate(_ctx.$t("and"))} <a target="_blank"${ssrRenderAttr("href", _ctx.localePath("/" + _ctx.$t("conditions")))}${_scopeId}>${ssrInterpolate(_ctx.$t("terms_of_the_offer"))}</a></span>`);
          } else {
            return [
              createVNode("span", null, [
                createTextVNode(toDisplayString(_ctx.$t("agree_processing_personal_data")) + " ", 1),
                createVNode("a", {
                  target: "_blank",
                  href: _ctx.localePath("/" + _ctx.$t("privacy_policy_slug"))
                }, toDisplayString(_ctx.$t("processing_of_personal_data")) + ", ", 9, ["href"]),
                createTextVNode(" " + toDisplayString(_ctx.$t("and")) + " ", 1),
                createVNode("a", {
                  target: "_blank",
                  href: _ctx.localePath("/" + _ctx.$t("conditions")),
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, toDisplayString(_ctx.$t("terms_of_the_offer")), 9, ["href", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/checkbox/policy-checkbox/policy-checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_2 as _, _sfc_main as a };
//# sourceMappingURL=policy-checkbox-GL5-7Kb3.mjs.map
