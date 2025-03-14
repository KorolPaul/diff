import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "checkout-product-price",
  __ssrInlineRender: true,
  props: {
    currency: {
      type: String,
      default: ""
    },
    totalPrice: {
      type: [Number, String],
      default: null
    },
    totalPriceDiscount: {
      type: [Number, String],
      default: null
    },
    cat4: {
      type: [Number, String],
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const hasSale = computed(() => props.totalPriceDiscount < props.totalPrice);
    const defaultPrice = computed(() => props.cat4 || props.totalPriceDiscount);
    const { currencyMark } = useCurrencyMark(props.currency);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-product-price" }, _attrs))} data-v-1308f0a0>`);
      if (unref(hasSale)) {
        _push(`<!--[--><span class="checkout-product-price_value checkout-product-price_value__without-sale" data-v-1308f0a0>${ssrInterpolate(unref(formatPriceWithSpaces)(__props.totalPrice))} ${ssrInterpolate(unref(currencyMark))}</span><span class="checkout-product-price_value checkout-product-price_value__sale" data-v-1308f0a0>${ssrInterpolate(unref(formatPriceWithSpaces)(__props.totalPriceDiscount))} ${ssrInterpolate(unref(currencyMark))}</span><!--]-->`);
      } else {
        _push(`<span class="checkout-product-price_value" data-v-1308f0a0>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(defaultPrice)))} ${ssrInterpolate(unref(currencyMark))}</span>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-product-price/checkout-product-price.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1308f0a0"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=checkout-product-price-CaEg0Gsb.mjs.map
