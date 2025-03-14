import { u as useLoadingStore } from './loading-CMY4YQWC.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabButtons",
  __ssrInlineRender: true,
  props: {
    menuItems: {},
    modelValue: {},
    loading: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    ref(null);
    const underlineStyle = ref({
      width: "0px",
      left: "0px"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-buttons" }, _attrs))} data-v-5c469a50><!--[-->`);
      ssrRenderList(_ctx.menuItems, (menuItem, index) => {
        _push(`<button${ssrIncludeBooleanAttr("loading" in _ctx ? _ctx.loading : unref(useLoadingStore)) ? " disabled" : ""} class="${ssrRenderClass([{ active: _ctx.modelValue === index }, "tab-buttons_tab"])}" data-v-5c469a50><span class="tab-buttons_tab-name" data-v-5c469a50>${ssrInterpolate(_ctx.$t(menuItem.tab))}</span>`);
        if (menuItem.quantity) {
          _push(`<div class="tab-buttons_counter-chip" data-v-5c469a50><span class="tab-buttons_counter-chip-label" data-v-5c469a50>${ssrInterpolate(menuItem.quantity)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--><div class="tab-buttons_tab-underline" style="${ssrRenderStyle(unref(underlineStyle))}" data-v-5c469a50></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TabButtons/TabButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c469a50"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TabButtons-ChK5xK2I.mjs.map
