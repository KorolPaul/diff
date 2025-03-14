import { computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "price-text",
  __ssrInlineRender: true,
  props: {
    price: {
      type: [Number, String],
      default: null
    },
    currency: {
      type: String,
      default: ""
    },
    sale: {
      type: Boolean,
      default: false
    },
    credit: {
      type: Boolean,
      default: false
    },
    oldPrice: {
      type: Boolean,
      default: false
    },
    cat4: {
      type: Boolean,
      default: false
    },
    cat5: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    },
    isGray: {
      type: Boolean,
      default: true
    },
    offsetX: {
      type: Boolean,
      default: false
    },
    inheritColor: {
      type: Boolean,
      default: false
    },
    isBundle: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const formatPrice = computed(() => {
      if (props.price === null) {
        return null;
      }
      return formatPriceWithSpaces(props.price);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(formatPrice)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: ["price-text", {
            "price-text__sale": __props.sale,
            "price-text__credit": __props.credit,
            "price-text__subtitle": __props.subtitle,
            "price-text__offset-x": __props.offsetX,
            "price-text__inherit": __props.inheritColor,
            "price-text__red-text": __props.cat5,
            "price-text__bundle": __props.isBundle
          }]
        }, { ..._ctx.$attrs }, _attrs))} data-v-9bd0dbde><span class="${ssrRenderClass({
          "price-text__cat4": __props.cat4 && __props.isGray,
          "price-text_credit-wrapper": __props.credit
        })}" data-v-9bd0dbde><span class="${ssrRenderClass([{
          "price-text_old-price": __props.oldPrice
        }, "price-text_value"])}" data-v-9bd0dbde>${ssrInterpolate(unref(formatPrice))}</span>\xA0<span class="price-text_currency" data-v-9bd0dbde>${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : __props.currency)}</span></span></span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/texts/price-text/price-text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bd0dbde"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=price-text-DgwtCsuL.mjs.map
