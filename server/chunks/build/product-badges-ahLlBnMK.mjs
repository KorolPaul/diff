import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "product-badges",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const badges = computed(() => {
      var _a, _b;
      const { product } = props;
      const isCategory = product.categoryType;
      if (isCategory) {
        return (_b = (_a = product == null ? void 0 : product.contents) == null ? void 0 : _a.find((item) => item.type === "custom_badges")) == null ? void 0 : _b.data;
      }
      return (product == null ? void 0 : product.custom_badges) || (product == null ? void 0 : product.customBadges);
    });
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "product-badges" }, _attrs))} data-v-0157277f>`);
      if (((_b = (_a = __props.product) == null ? void 0 : _a.marks) == null ? void 0 : _b.new) || ((_c = __props.product) == null ? void 0 : _c.new)) {
        _push(`<span class="product-badges_new" data-v-0157277f>${ssrInterpolate(_ctx.$t("new"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(badges)) {
        _push(`<span class="product-badges_custom" data-v-0157277f>${(_a2 = unref(getSanitizeHtml)(unref(badges))) != null ? _a2 : ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/product-badges/product-badges.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0157277f"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=product-badges-ahLlBnMK.mjs.map
