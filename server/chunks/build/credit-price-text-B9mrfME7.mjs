import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { a as useI18n } from './server.mjs';

const _sfc_main = {
  __name: "credit-price-text",
  __ssrInlineRender: true,
  props: {
    mainPrice: {
      type: [Number, String],
      default: null
    },
    price: {
      type: [Number, String],
      default: null
    },
    terms: {
      type: [Number, String],
      default: null
    },
    type: {
      type: String,
      default: "priceText"
    }
  },
  setup(__props) {
    const props = __props;
    const { locale, t } = useI18n();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { currencyMark } = useCurrencyMark("", true);
    const isAzLocale = locale.value === "az";
    const creditText = computed(() => {
      const formatedMainPrice = formatPriceWithSpaces(Number(props.mainPrice));
      const formatedPrice = formatPriceWithSpaces(Math.round(Number(props.price)));
      const price = Number(props.price);
      const termsSubString = `${t(isAzLocale ? "" : "credit_for")} ${props.terms} ${t("credit_months")}`;
      const periodSubstring = `${t(isAzLocale ? "credit_period_text" : "")}`;
      const fromSubstrig = `${t(isAzLocale ? "" : "credit_from")}`;
      const mainPriceSubstring = `${props.mainPrice ? ` ${t(isAzLocale ? "" : "from_price")} ${formatedMainPrice} ${currencyMark.value}` : ""}${isAzLocale ? "" : " "}${formatedPrice ? t(isAzLocale ? "or_from" : "or") : ""}`;
      switch (props.type) {
        case "creditText":
          return `${fromSubstrig} ${formatedPrice}${currencyMark.value}${t(
            isAzLocale ? "or_from" : ""
          )}/${t("credit_mo")} ${termsSubString} ${periodSubstring}`;
        case "priceText":
          return `${t(isAzLocale ? "" : "from_price")} ${price} ${currencyMark.value}${isAzLocale ? t("or_from") : ""}`;
        case "creditTextProductPage":
          return `${formatedPrice} ${currencyMark.value}/${t(
            "credit_mo"
          )} ${termsSubString}* ${periodSubstring}`;
        case "creditTextProductCarousel":
          return `${mainPriceSubstring}${formatedPrice ? `${isAzLocale ? "" : " "} ${formatedPrice}/${t(
            "credit_mo"
          )} ${termsSubString} ${periodSubstring}` : ""}`;
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(creditText))}</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/texts/credit-price-text/credit-price-text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=credit-price-text-B9mrfME7.mjs.map
