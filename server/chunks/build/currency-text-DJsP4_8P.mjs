import { defineComponent, ref, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useI18n } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = defineComponent({
  name: "CurrencyText",
  props: {
    currency: {
      type: String,
      required: true
    },
    useDefault: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    var _a;
    const { defaultLocale } = useI18n();
    const currencyMark = ref("");
    switch ((_a = props.currency) == null ? void 0 : _a.toLowerCase()) {
      case "usd":
        currencyMark.value = " $";
        break;
      case "eur":
        currencyMark.value = " EUR";
        break;
      case "pln":
        currencyMark.value = " Z\u0142";
        break;
      case "kzt":
        currencyMark.value = " \u20B8";
        break;
      case "gel":
        currencyMark.value = " GEL";
        break;
      case "amd":
        currencyMark.value = " AMD";
        break;
      case "mdl":
        currencyMark.value = " MDL";
        break;
      case "uzs":
        currencyMark.value = " UZS";
        break;
      case "azn":
        currencyMark.value = " AZN";
        break;
      default:
        currencyMark.value = "";
    }
    if (props.useDefault) {
      switch (defaultLocale.toUpperCase()) {
        case "CY":
          currencyMark.value = " EUR";
          break;
        case "PL":
          currencyMark.value = " Z\u0142";
          break;
        case "AZ":
          currencyMark.value = " AZN";
          break;
        case "UZ":
          currencyMark.value = " UZS";
          break;
        case "KZ":
          currencyMark.value = " \u20B8";
          break;
        case "SA":
          currencyMark.value = " ZAR";
          break;
        case "GE":
          currencyMark.value = " GEL";
          break;
        case "AM":
          currencyMark.value = " AMD";
          break;
        case "RO":
          currencyMark.value = " MDL";
          break;
      }
    }
    return {
      currencyMark
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.currencyMark)}</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/texts/currency-text/currency-text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=currency-text-DJsP4_8P.mjs.map
