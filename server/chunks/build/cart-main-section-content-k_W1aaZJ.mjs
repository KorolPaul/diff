import { _ as _export_sfc, i as useCartStore, C as useRouter, r as useNuxtApp, k as __nuxt_component_6, d as __nuxt_component_0$2$1, G as CartApiService, l as useGtm, e as useApi, P as PUBLIC_PREFIX, a as useI18n, u as useRoute, H as filterOutDeliveryProducts } from './server.mjs';
import { _ as _sfc_main$k } from './UiImg-CNj4xvxi.mjs';
import { computed, mergeProps, unref, reactive, ref, watch, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, defineComponent, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_1$3 } from './icon-_hjsSUWU.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { _ as _sfc_main$l } from './credit-price-text-B9mrfME7.mjs';
import { _ as _sfc_main$j } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_0$2 } from './ui-page-preloader-f4jo8KnM.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { _ as __nuxt_component_0$3 } from './UiRadio-hn8C_nHF.mjs';
import { _ as __nuxt_component_1$4 } from './UiSelect-BqVOhDGy.mjs';
import { u as useProductPrice } from './useProductPrice-CDseUihT.mjs';
import { u as useDateFormatter } from './useDateFormatter-BM16RVpG.mjs';
import { u as useLoadingStore } from './loading-CMY4YQWC.mjs';
import { _ as __nuxt_component_2$3 } from './trade-in-modal-content-B1OZG904.mjs';
import __nuxt_component_0$1 from './Shop-VdCSyG8-.mjs';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';

const _sfc_main$i = {
  __name: "product-counter",
  __ssrInlineRender: true,
  props: {
    productInCart: {
      type: Number,
      default: 1
    },
    stock: {
      type: Number,
      default: 0
    },
    product: {
      type: Object,
      required: true
    },
    inStock: {
      type: Boolean,
      default: true
    },
    isProductPage: {
      type: Boolean,
      default: false
    },
    isLoadingGlobal: {
      type: Boolean,
      default: false
    }
  },
  emits: ["updatedCount", "stockIsEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const counter = reactive({ count: props.productInCart });
    ref(0);
    const showError = ref(false);
    ref(false);
    ref(false);
    watch(props.productInCart, () => {
      counter.count = props.productInCart;
    });
    watch(
      () => counter.count,
      () => {
        const parsedCount = parseInt(counter.count);
        const checkCount = parsedCount >= props.stock;
        showError.value = checkCount;
        if (checkCount) {
          counter.count = props.stock;
          setTimeout(() => {
            showError.value = false;
          }, 1500);
        } else if (isNaN(parsedCount) || parsedCount < 0) {
          counter.count = "";
        } else {
          counter.count = parsedCount;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{ "product-counter__with-wide-button": __props.isProductPage }, "product-counter"])}" data-v-7677285d><button class="${ssrRenderClass([{
        "product-counter_button__disabled": unref(counter).count === 1,
        "product-counter_button__loading": __props.isLoadingGlobal
      }, "product-counter_button"])}"${ssrIncludeBooleanAttr(__props.isLoadingGlobal || unref(counter).count === 1) ? " disabled" : ""} data-v-7677285d> - </button><input${ssrRenderAttr("value", unref(counter).count)} class="product-counter_value" name="quantity" min="1" step="1" max="stock"${ssrIncludeBooleanAttr(__props.isLoadingGlobal) ? " disabled" : ""} data-v-7677285d><button class="${ssrRenderClass([{
        "product-counter_button__disabled": unref(counter).count === __props.stock,
        "product-counter_button__loading": __props.isLoadingGlobal
      }, "product-counter_button"])}"${ssrIncludeBooleanAttr(__props.isLoadingGlobal || unref(counter).count === __props.stock) ? " disabled" : ""} data-v-7677285d> + </button></div>`);
      if (unref(showError)) {
        _push(`<p class="product-counter_error" data-v-7677285d>${ssrInterpolate(_ctx.$t("there_are"))} ${ssrInterpolate(__props.stock)} ${ssrInterpolate(_ctx.$t("products_available_for_ordering"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/counter/product-counter/product-counter.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-7677285d"]]);
const _sfc_main$h = {
  __name: "cart-product-price",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-product-price" }, _attrs))} data-v-74d81b5c>`);
      if (unref(hasSale)) {
        _push(`<!--[--><span class="cart-product-price__without-sale" data-v-74d81b5c>${ssrInterpolate(unref(formatPriceWithSpaces)(__props.totalPrice))} ${ssrInterpolate(unref(currencyMark))}</span><span class="cart-product-price__sale" data-v-74d81b5c>${ssrInterpolate(unref(formatPriceWithSpaces)(__props.totalPriceDiscount))} ${ssrInterpolate(unref(currencyMark))}</span><!--]-->`);
      } else {
        _push(`<span class="cart-product-price__default" data-v-74d81b5c>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(defaultPrice)))} ${ssrInterpolate(unref(currencyMark))}</span>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-product-price/cart-product-price.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-74d81b5c"]]);
const _sfc_main$g = {
  __name: "UiInfoText",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: "500"
    },
    containerSizeIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const width = computed(() => props.maxWidth);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["info-text", _ctx.color],
        style: { maxWidth: `${unref(width)}px` }
      }, _attrs))} data-v-aecec453>`);
      if (__props.icon) {
        _push(`<div class="${ssrRenderClass([_ctx.iconMargin, "info-text_icon"])}" data-v-aecec453>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: __props.icon,
          class: _ctx.color,
          "container-size": __props.containerSizeIcon
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiInfoText/UiInfoText.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-aecec453"]]);
const resource = `${PUBLIC_PREFIX}credits`;
const CreditApiService = {
  // products should be in a format of {id: ID, quantity: N}
  async getCreditProgramsForProducts(products, programID = null) {
    const params = new URLSearchParams();
    products.forEach((product, index) => {
      Object.entries(product).forEach(([key, value]) => {
        params.append(`products[${index}][${key}]`, value);
      });
    });
    if (programID !== null) {
      params.append("selected_credit_program_id", programID);
    }
    const { get } = useApi();
    const { data } = await get(
      `${resource}/calculate-for-products?${params.toString()}`
    );
    return {
      data: data.value
    };
  }
};
const _sfc_main$f = {
  __name: "cart-main-sandbox",
  __ssrInlineRender: true,
  props: {
    isLightVersion: {
      type: Boolean,
      default: false
    },
    additionalProducts: {
      type: Array,
      default: () => []
    },
    canRemoveLastProduct: {
      type: Boolean,
      default: true
    },
    productCount: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changed-products", "changed-count"],
  setup(__props, { emit: __emit }) {
    useCartStore();
    const productsInCart = ref([]);
    const { startLoading } = useFormLoader();
    const isAllProductsInStock = ref(false);
    const hideBundles = ref(false);
    const addetToFeature = ref(0);
    const bundlesChecked = ref(false);
    const paring = ref({});
    const productsForOrder = ref([]);
    const finalPrice = ref(0);
    const productsFromGetCartList = ref([]);
    ref([]);
    startLoading();
    const emit = __emit;
    const deleteProductFromCart = async ({ productData }) => {
      const deleteProduct = (productsList, crmID) => {
        const productIndex = productsList.findIndex(
          (product) => product.crm_id === crmID
        );
        if (productIndex !== -1) {
          productsList.splice(productIndex, 1);
        }
      };
      if (typeof productData === "object" && productData.key) {
        const productIndex = productsFromGetCartList.value.findIndex(
          (product2) => product2.bundle_pairing_cms_id === productData.bundlePairingCmsId
        );
        if (productIndex === -1) {
          return;
        }
        const product = productsFromGetCartList.value[productIndex];
        if (product.crm_id === productData.key) {
          deleteProduct(productsFromGetCartList.value, product.crm_id);
          deleteProduct(productsInCart.value, product.crm_id);
        } else if (product.bundle_pairing && product.bundle_pairing.products) {
          const bundleIndex = product.bundle_pairing.products.findIndex(
            (bundleProduct) => bundleProduct.crm_id === productData.key
          );
          if (bundleIndex !== -1) {
            product.bundle_pairing.products.splice(bundleIndex, 1);
            if (product.bundle_pairing.products.length === 0) {
              const {
                bundle_pairing: bundlePairing,
                bundle_pairing_cms_id: bundlePairingCmsId,
                ...updatedProduct
              } = product;
              productsFromGetCartList.value[productIndex] = updatedProduct;
            }
          }
        }
      } else {
        deleteProduct(productsFromGetCartList.value, productData);
        deleteProduct(productsInCart.value, productData);
      }
      productsInCart.value = [...productsInCart.value];
      productsFromGetCartList.value = [...productsFromGetCartList.value];
      emit("changed-products", productsFromGetCartList.value);
    };
    const updatedCount = async ({ count, key }) => {
      if (count === 0) {
        await deleteProductFromCart({ productData: key });
        return;
      }
      const productIndex = productsFromGetCartList.value.findIndex(
        (product) => product.crm_id === key
      );
      if (productIndex !== -1) {
        productsFromGetCartList.value[productIndex].ordered_quantity = count;
      }
      emit("changed-count", productsFromGetCartList.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPagePreloader = __nuxt_component_0$2;
      if (!unref(bundlesChecked) || !unref(productsInCart)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(CartMainSectionContent, mergeProps({
          "is-credits": "",
          "additional-products": __props.additionalProducts,
          "is-light-version": __props.isLightVersion,
          "products-in-cart": unref(productsInCart),
          "product-count": __props.productCount,
          paring: unref(paring),
          "bundles-checked": unref(bundlesChecked),
          "hide-bundles": unref(hideBundles),
          "is-all-products-in-stock": unref(isAllProductsInStock),
          "addet-to-feature": unref(addetToFeature),
          "final-price": unref(finalPrice),
          "products-for-order": unref(productsForOrder),
          "products-from-get-cart-list": unref(productsFromGetCartList),
          "can-remove-last-product": __props.canRemoveLastProduct,
          "is-in-cart": __props.isInCart,
          onDeleteProductFromCart: deleteProductFromCart,
          onUpdatedCount: updatedCount
        }, _attrs), null, _parent));
      }
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-main-sandox/cart-main-sandbox.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "product-credit-program",
  __ssrInlineRender: true,
  props: {
    program: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      required: true
    }
  },
  emits: ["changed-program"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const creditTypes = {
      1: i18n.t("Credit"),
      2: i18n.t("Installment")
    };
    const currentPaymentPrice = ref(0);
    const currentPercentage = ref(0);
    const selectedProgram = ref(null);
    const selectedProgramTest = ref(null);
    const onChangeChosenProgram = () => {
      var _a, _b, _c;
      const findProgram = props.program.programs.find(
        (program) => program.term === selectedProgramTest.value
      );
      if (!findProgram) {
        return;
      }
      selectedProgram.value = findProgram;
      currentPaymentPrice.value = (_a = selectedProgram.value) == null ? void 0 : _a.monthly_payment;
      currentPercentage.value = (_b = selectedProgram.value) == null ? void 0 : _b.yearly_percentage;
      emit("changed-program", {
        credit: (_c = props.program) == null ? void 0 : _c.id,
        program: selectedProgram.value
      });
    };
    const programOptions = computed(
      () => {
        var _a;
        return (_a = props == null ? void 0 : props.program.programs) == null ? void 0 : _a.map((program) => ({
          label: `${program.term} ${i18n.t("payments")}`,
          value: program.term
        }));
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRadio = __nuxt_component_0$3;
      const _component_UiImg = _sfc_main$k;
      const _component_UiSelect = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "credit-program" }, _attrs))} data-v-7008ca41><div class="credit-program_program-info" data-v-7008ca41>`);
      _push(ssrRenderComponent(_component_UiRadio, mergeProps({ ..._ctx.$attrs }, {
        value: __props.program.id,
        checked: +__props.modelValue === +__props.program.id,
        onChange: ($event) => _ctx.$emit("changeProgram")
      }), null, _parent));
      _push(`<div class="credit-program_image-wrapper" data-v-7008ca41>`);
      if (__props.program.logo && __props.program.logo.path) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: __props.program.logo.path,
          class: "credit-program_bank-image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="credit-program_bank-info" data-v-7008ca41><div class="credit-program_bank-tooltip" data-v-7008ca41><span class="credit-program_bank" data-v-7008ca41>${ssrInterpolate(__props.program.name)}</span></div><div class="credit-program_info" data-v-7008ca41><span class="credit-program_credit-info" data-v-7008ca41>${ssrInterpolate(creditTypes[__props.program.type])} `);
      if (selectedProgram.value) {
        _push(`<!--[-->${ssrInterpolate(selectedProgram.value.yearly_percentage)}% <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span><span class="credit-program_payments-count-info" data-v-7008ca41>`);
      if (__props.program.min_term !== __props.program.max_term) {
        _push(`<!--[-->${ssrInterpolate(__props.program.min_term)} - <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.program.max_term)} ${ssrInterpolate(_ctx.$t("payments"))}</span></div></div><div data-v-7008ca41></div></div><div class="credit-program_payments" data-v-7008ca41>`);
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: selectedProgramTest.value,
        "onUpdate:modelValue": [($event) => selectedProgramTest.value = $event, onChangeChosenProgram],
        label: _ctx.$t("credit_payments_count"),
        options: unref(programOptions)
      }, null, _parent));
      _push(`</div><div class="credit-program_monthly-payment" data-v-7008ca41><div class="credit-program_monthly-payment-price" data-v-7008ca41><span data-v-7008ca41><span data-v-7008ca41>${ssrInterpolate(unref(formatPriceWithSpaces)(currentPaymentPrice.value))} <span class="text-lowercase" data-v-7008ca41>${ssrInterpolate(__props.currency)}</span></span></span></div></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/product-credit-program/product-credit-program.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-7008ca41"]]);
const _sfc_main$d = defineComponent({
  name: "CreditPrograms",
  components: { ProductCreditProgram: __nuxt_component_0 },
  props: {
    currency: {
      type: String,
      required: true
    },
    programs: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const isLoading = ref(false);
    const chosenCredit = ref(null);
    const chosenProgramsInCredits = ref({});
    const creditTypes = {
      1: i18n.t("credit"),
      2: i18n.t("installment")
    };
    const changedProgram = ({ credit, program }) => {
      chosenProgramsInCredits.value[credit] = program;
      const foundCredit = props.programs.find((item) => item.id === credit);
      if (credit === Number(chosenCredit.value)) {
        emit("changed-program", { credit: foundCredit, program });
      }
    };
    watch(chosenCredit, () => {
      if (!chosenCredit.value) {
        return;
      }
      const selectedCredit = props.programs.find(
        (program) => program.id === Number(chosenCredit.value)
      ) || null;
      if (!selectedCredit) {
        return;
      }
      emit("changed-program", {
        credit: selectedCredit,
        program: chosenProgramsInCredits.value[selectedCredit == null ? void 0 : selectedCredit.id]
      });
    });
    return {
      chosenCredit,
      isLoading,
      creditTypes,
      changedProgram
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductCreditProgram = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "credit-programs" }, _attrs))} data-v-8afcc99e><p class="credit-programs_title" data-v-8afcc99e>${ssrInterpolate(_ctx.$t("credit_programs"))}</p><div class="credit-programs_credits-table" data-v-8afcc99e><div class="credit-programs_table-header" data-v-8afcc99e><span data-v-8afcc99e>${ssrInterpolate(_ctx.$t("bank_and_credit_product"))}</span><span data-v-8afcc99e>${ssrInterpolate(_ctx.$t("credit_conditions"))}</span><span class="credit-programs_payment-cell" data-v-8afcc99e>${ssrInterpolate(_ctx.$t("credit_payment"))}</span></div><div class="mt-4" data-v-8afcc99e><!--[-->`);
  ssrRenderList(_ctx.programs, (program, index) => {
    _push(`<div class="credit-programs_program" data-v-8afcc99e>`);
    _push(ssrRenderComponent(_component_ProductCreditProgram, {
      modelValue: _ctx.chosenCredit,
      "onUpdate:modelValue": ($event) => _ctx.chosenCredit = $event,
      currency: _ctx.currency,
      program,
      onChangedProgram: _ctx.changedProgram
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/blocks/credit-programs/credit-programs.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const CreditPrograms = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8afcc99e"]]);
const _sfc_main$c = {
  __name: "credits-modal",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    productCount: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean,
      default: false
    },
    showActionButtons: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { setCartFromApiResponse } = useCartStore();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const router = useRouter();
    const app = useNuxtApp();
    const isFirstRequest = ref(true);
    const isLoadForm = ref(false);
    const isCartLoading = ref(true);
    const isBundlesInCart = ref(false);
    const isCreditProgramsListLoading = ref(true);
    const isModalVisible = ref(props.value);
    const modalContentRef = ref(null);
    const productsInCartLength = ref(1);
    const newProductInCart = ref(null);
    const creditPrograms = ref(null);
    const isCartReplacementLoading = ref({
      withCredit: false,
      withoutCredit: false
    });
    const cartMainSandBox = ref(null);
    const productsForOrder = ref([]);
    const selectedProgram = ref(null);
    const selectedCredit = ref(null);
    const cartProducts = ref([]);
    const currency = ref((_a = props.product) == null ? void 0 : _a.currency);
    const cartPrice = ref(null);
    const scrollCartToBottom = () => {
      var _a2, _b;
      if (((_a2 = cartMainSandBox.value) == null ? void 0 : _a2.$el) && ((_b = modalContentRef.value) == null ? void 0 : _b.$el)) {
        const element = cartMainSandBox.value.$el;
        const modal = modalContentRef.value.$el;
        const rect = element.getBoundingClientRect();
        const containerRect = modal.getBoundingClientRect();
        const scrollAmount = rect.bottom - containerRect.bottom + 100;
        modal.scrollBy({
          top: scrollAmount,
          behavior: "smooth"
        });
      }
    };
    const prepareProductsForOrder = (products) => {
      isBundlesInCart.value = false;
      const preparedProducts = Array.from(
        products.reduce((map, product) => {
          const {
            id,
            ordered_quantity: productQuantity,
            bundle_pairing: bundlePairing
          } = product;
          const quantity = props.isInCart ? productQuantity : props.productCount;
          if (!map.has(product.id)) {
            map.set(product.id, {
              id,
              quantity
            });
          }
          if (bundlePairing == null ? void 0 : bundlePairing.products) {
            isBundlesInCart.value = true;
            bundlePairing.products.forEach((bundleProduct) => {
              if (!map.has(bundleProduct.id)) {
                map.set(bundleProduct.id, {
                  id: bundleProduct.id,
                  quantity: bundleProduct.ordered_quantity
                });
              }
            });
          }
          return map;
        }, /* @__PURE__ */ new Map()).values()
      );
      isFirstRequest.value = false;
      return preparedProducts;
    };
    const fetchCreditPrograms = async (creditProducts, updatePrograms = true) => {
      var _a2, _b, _c, _d, _e;
      if (updatePrograms) {
        isCreditProgramsListLoading.value = true;
      }
      try {
        const { data } = await CreditApiService.getCreditProgramsForProducts(
          creditProducts,
          (_a2 = selectedProgram.value) == null ? void 0 : _a2.id
        );
        if (updatePrograms) {
          creditPrograms.value = (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.credits;
        }
        cartPrice.value = (_e = (_d = (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.total) == null ? void 0 : _d.without_interest) == null ? void 0 : _e.final_price;
        isCreditProgramsListLoading.value = false;
      } catch (e) {
        if (updatePrograms) {
          creditPrograms.value = [];
        }
        isCreditProgramsListLoading.value = false;
      }
    };
    const changedCartProductCount = async (products) => {
      cartProducts.value = products;
      productsForOrder.value = prepareProductsForOrder(products);
      await fetchCreditPrograms(productsForOrder.value);
      if (isBundlesInCart.value) {
        creditPrograms.value = [];
      }
    };
    const changedCartProducts = async (products) => {
      cartProducts.value = products;
      productsInCartLength.value = products == null ? void 0 : products.length;
      isCartLoading.value = false;
      productsForOrder.value = prepareProductsForOrder(
        products,
        !isBundlesInCart.value
      );
      await fetchCreditPrograms(productsForOrder.value);
      if (isBundlesInCart.value) {
        creditPrograms.value = [];
      }
    };
    const changedProgram = ({ credit, program }) => {
      selectedCredit.value = credit;
      selectedProgram.value = program;
      fetchCreditPrograms(productsForOrder.value, false);
    };
    const redirectToCheckout = () => {
      router.push(
        app.$localeRoute({
          path: "/checkout"
        })
      );
    };
    const prepareProductsForCartReplacement = (products) => Array.from(
      products.reduce((map, product) => {
        if (!map.has(product.id)) {
          map.set(product.id, {
            available_quantity: product.ordered_quantity,
            product_id: product.crm_id,
            product_type: "physical",
            loyalty_card_number: "29904263163"
          });
        }
        return map;
      }, /* @__PURE__ */ new Map()).values()
    );
    const buyNow = async () => {
      if (isLoadForm.value) {
        return;
      }
      isLoadForm.value = true;
      const uniqueProducts = prepareProductsForCartReplacement(
        cartProducts.value || []
      );
      isCartReplacementLoading.value.withoutCredit = true;
      const cartData = await CartApiService.replaceCart(uniqueProducts);
      await setCartFromApiResponse(cartData);
      redirectToCheckout();
      isCartReplacementLoading.value.withoutCredit = false;
      isLoadForm.value = false;
    };
    const buyInCredit = async () => {
      var _a2, _b, _c, _d, _e;
      if (isLoadForm.value) {
        return;
      }
      isLoadForm.value = true;
      const uniqueProducts = prepareProductsForCartReplacement(
        cartProducts.value || []
      );
      localStorage.setItem("payment_type", "credit");
      isCartReplacementLoading.value.withCredit = true;
      const cartData = await CartApiService.replaceCart(uniqueProducts, {
        credit_program_id: selectedProgram.value.id,
        type: selectedCredit.value.slug,
        main_type: "credit"
      });
      await setCartFromApiResponse(cartData);
      const paymentTypes = (_e = (_d = (_c = (_b = (_a2 = cartData == null ? void 0 : cartData.data) == null ? void 0 : _a2.value) == null ? void 0 : _b.data) == null ? void 0 : _c.cart) == null ? void 0 : _d.config) == null ? void 0 : _e.payment_types;
      if (paymentTypes) {
        paymentTypes.forEach((payment) => {
          if (payment.name === selectedCredit.value.slug) {
            localStorage.setItem("paymentSaveData", JSON.stringify(payment));
          }
        });
      }
      redirectToCheckout();
      isCartReplacementLoading.value.withCredit = false;
      isLoadForm.value = false;
    };
    watch(
      () => props.value,
      (value) => {
        isModalVisible.value = value;
        if (!value) {
          creditPrograms.value = [];
          cartPrice.value = null;
        } else {
          productsInCartLength.value = 1;
        }
      }
    );
    watch(
      () => isCreditProgramsListLoading.value,
      (value) => {
        if (!value) {
          setTimeout(() => {
            var _a2, _b;
            (_b = (_a2 = newProductInCart.value) == null ? void 0 : _a2.$el) == null ? void 0 : _b.scrollIntoView({ behavior: "smooth" });
          }, 10);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$j;
      const _component_UiPagePreloader = __nuxt_component_0$2;
      const _component_UiInfoText = __nuxt_component_2$2;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({ ..._ctx.$attrs }, { "max-width": 1024 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="credits-modal" data-v-4398ed77${_scopeId}><p class="credits-modal_header" data-v-4398ed77${_scopeId}>${ssrInterpolate(_ctx.$t("purchase_on_credit"))}</p><div data-v-4398ed77${_scopeId}>`);
            if (unref(productsInCartLength) > 0 && unref(isModalVisible)) {
              _push2(ssrRenderComponent(_sfc_main$f, {
                ref_key: "cartMainSandBox",
                ref: cartMainSandBox,
                "is-light-version": "",
                "additional-products": [__props.product],
                "can-remove-last-product": false,
                "product-count": __props.productCount,
                "is-in-cart": __props.isInCart,
                onChangedProducts: changedCartProducts,
                onChangedCount: changedCartProductCount,
                onLoadedProducts: scrollCartToBottom
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isCreditProgramsListLoading)) {
              _push2(`<div data-v-4398ed77${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if ((_a2 = unref(creditPrograms)) == null ? void 0 : _a2.length) {
              _push2(ssrRenderComponent(CreditPrograms, {
                currency: unref(currency),
                programs: unref(creditPrograms),
                onChangedProgram: changedProgram
              }, null, _parent2, _scopeId));
            } else if (!unref(isCreditProgramsListLoading) && !unref(isCartLoading)) {
              _push2(ssrRenderComponent(_component_UiInfoText, {
                icon: "tooltip",
                class: "credits-modal_info-credit-text",
                "max-width": "100%",
                "container-size-icon": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-4398ed77${_scopeId2}>${ssrInterpolate(_ctx.$t("credit_cart_products_info"))}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(_ctx.$t("credit_cart_products_info")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(cartPrice) && unref(cartPrice) > 0 && !unref(isCartLoading) && !unref(isCreditProgramsListLoading)) {
              _push2(`<div class="credits-modal_bottom-bar" data-v-4398ed77${_scopeId}><div class="credits-modal_price-wrapper" data-v-4398ed77${_scopeId}><div data-v-4398ed77${_scopeId}>${ssrInterpolate(_ctx.$t("total"))}:</div><div data-v-4398ed77${_scopeId}>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(cartPrice)))} <span data-v-4398ed77${_scopeId}>${ssrInterpolate(unref(currency))}</span></div></div>`);
              if (__props.showActionButtons) {
                _push2(`<div class="${ssrRenderClass([
                  ((_b = unref(creditPrograms)) == null ? void 0 : _b.length) ? "credits-modal_buttons-wrapper__with-programs" : "credits-modal_buttons-wrapper__without-programs",
                  "credits-modal_buttons-wrapper"
                ])}" data-v-4398ed77${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Button, {
                  fullwidth: "",
                  class: "credits-modal_buy-button",
                  secondary: "",
                  loading: unref(isCartReplacementLoading).withoutCredit,
                  onClick: buyNow
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("credit_buy_now"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("credit_buy_now")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if ((_c = unref(creditPrograms)) == null ? void 0 : _c.length) {
                  _push2(ssrRenderComponent(_component_Button, {
                    fullwidth: "",
                    loading: unref(isCartReplacementLoading).withCredit,
                    class: "credits-modal_credit-button",
                    onClick: buyInCredit
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("credit_buy_in_credit"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("credit_buy_in_credit")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "credits-modal" }, [
                createVNode("p", { class: "credits-modal_header" }, toDisplayString(_ctx.$t("purchase_on_credit")), 1),
                createVNode("div", null, [
                  unref(productsInCartLength) > 0 && unref(isModalVisible) ? (openBlock(), createBlock(_sfc_main$f, {
                    key: 0,
                    ref_key: "cartMainSandBox",
                    ref: cartMainSandBox,
                    "is-light-version": "",
                    "additional-products": [__props.product],
                    "can-remove-last-product": false,
                    "product-count": __props.productCount,
                    "is-in-cart": __props.isInCart,
                    onChangedProducts: changedCartProducts,
                    onChangedCount: changedCartProductCount,
                    onLoadedProducts: scrollCartToBottom
                  }, null, 8, ["additional-products", "product-count", "is-in-cart"])) : createCommentVNode("", true),
                  unref(isCreditProgramsListLoading) ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_UiPagePreloader)
                  ])) : ((_d = unref(creditPrograms)) == null ? void 0 : _d.length) ? (openBlock(), createBlock(CreditPrograms, {
                    key: 2,
                    currency: unref(currency),
                    programs: unref(creditPrograms),
                    onChangedProgram: changedProgram
                  }, null, 8, ["currency", "programs"])) : !unref(isCreditProgramsListLoading) && !unref(isCartLoading) ? (openBlock(), createBlock(_component_UiInfoText, {
                    key: 3,
                    icon: "tooltip",
                    class: "credits-modal_info-credit-text",
                    "max-width": "100%",
                    "container-size-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(_ctx.$t("credit_cart_products_info")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(cartPrice) && unref(cartPrice) > 0 && !unref(isCartLoading) && !unref(isCreditProgramsListLoading) ? (openBlock(), createBlock("div", {
                    key: 4,
                    class: "credits-modal_bottom-bar"
                  }, [
                    createVNode("div", { class: "credits-modal_price-wrapper" }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("total")) + ":", 1),
                      createVNode("div", null, [
                        createTextVNode(toDisplayString(unref(formatPriceWithSpaces)(unref(cartPrice))) + " ", 1),
                        createVNode("span", null, toDisplayString(unref(currency)), 1)
                      ])
                    ]),
                    __props.showActionButtons ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: [
                        "credits-modal_buttons-wrapper",
                        ((_e = unref(creditPrograms)) == null ? void 0 : _e.length) ? "credits-modal_buttons-wrapper__with-programs" : "credits-modal_buttons-wrapper__without-programs"
                      ]
                    }, [
                      createVNode(_component_Button, {
                        fullwidth: "",
                        class: "credits-modal_buy-button",
                        secondary: "",
                        loading: unref(isCartReplacementLoading).withoutCredit,
                        onClick: buyNow
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("credit_buy_now")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      ((_f = unref(creditPrograms)) == null ? void 0 : _f.length) ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        fullwidth: "",
                        loading: unref(isCartReplacementLoading).withCredit,
                        class: "credits-modal_credit-button",
                        onClick: buyInCredit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("credit_buy_in_credit")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/credits-modal/credits-modal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CreditsModal = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4398ed77"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_ModalLight = _sfc_main$j;
  const _component_Button = __nuxt_component_6;
  _push(ssrRenderComponent(_component_ModalLight, mergeProps({ ..._ctx.$attrs }, {
    "max-width": 600,
    onInput: ($event) => _ctx.$emit("input", $event)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="remove-bundles-modal" data-v-850f9c75${_scopeId}><h1 class="remove-bundles-modal_title" data-v-850f9c75${_scopeId}>${ssrInterpolate(_ctx.$t("attention"))}</h1><p class="remove-bundles-modal_text" data-v-850f9c75${_scopeId}>${ssrInterpolate(_ctx.$t("delete_bundle_message"))}</p>`);
        _push2(ssrRenderComponent(_component_Button, {
          class: "remove-bundles-modal_button",
          onClick: ($event) => _ctx.$emit("delete-item", false)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("leave_item"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("leave_item")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          class: "remove-bundles-modal_button",
          secondary: "",
          onClick: ($event) => _ctx.$emit("delete-item", true)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("delete"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("delete")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "remove-bundles-modal" }, [
            createVNode("h1", { class: "remove-bundles-modal_title" }, toDisplayString(_ctx.$t("attention")), 1),
            createVNode("p", { class: "remove-bundles-modal_text" }, toDisplayString(_ctx.$t("delete_bundle_message")), 1),
            createVNode(_component_Button, {
              class: "remove-bundles-modal_button",
              onClick: ($event) => _ctx.$emit("delete-item", false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("leave_item")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_Button, {
              class: "remove-bundles-modal_button",
              secondary: "",
              onClick: ($event) => _ctx.$emit("delete-item", true)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("delete")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/bundles-modal/remove-bundles-modal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const RemoveBundlesModal = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-850f9c75"]]);
const _sfc_main$a = {
  __name: "product-bundles-cart-item",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: null
    },
    showInCart: {
      type: Boolean,
      default: false
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    showCounter: {
      type: Boolean,
      default: false
    },
    productCardData: {
      type: Object,
      default: () => ({})
    },
    stock: {
      type: Boolean,
      default: false
    },
    isLightVersion: {
      type: Boolean,
      default: false
    },
    isDeleteBtn: {
      type: Boolean,
      default: true
    },
    withStock: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "deleteProductFromCart",
    "searchProduct",
    "updatedCount"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { totalPrice, totalPriceDiscountValue, priceCat4 } = useProductPrice(props.product);
    const emit = __emit;
    const benefit = ref(null);
    const unit = ref(null);
    const openLeaveModal = ref(false);
    const isCreditModalShown = ref(false);
    const { locale } = useI18n();
    const optimizatedImg = computed(() => {
      var _a, _b, _c, _d;
      if ((_d = (_c = (_b = (_a = props.product) == null ? void 0 : _a.variations) == null ? void 0 : _b[0]) == null ? void 0 : _c.images) == null ? void 0 : _d[0]) {
        return props.product.variations[0].images[0];
      }
      return "";
    });
    const similarFeatures = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.product) == null ? void 0 : _a.similar_features) == null ? void 0 : _b.map((item) => ({
          [item.name]: item.value
        }));
      }
    );
    const productName = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = props.product) == null ? void 0 : _a.name) == null ? void 0 : _b[locale.value]) || ((_d = (_c = props.product) == null ? void 0 : _c.name) == null ? void 0 : _d["en"]) || ((_e = props.product) == null ? void 0 : _e.name);
      }
    );
    const canBuyInCredit = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_a = props.product) == null ? void 0 : _a.real_stock) && ((_b = props.product) == null ? void 0 : _b.final_price) && ((_d = (_c = props.product) == null ? void 0 : _c.credits_data) == null ? void 0 : _d.min_monthly_payment);
      }
    );
    const setStock = (realStock, reservationCount) => {
      if (!reservationCount) {
        return realStock + reservationCount;
      }
      return realStock;
    };
    const closeModal = (event) => {
      openLeaveModal.value = false;
      if (!event) {
        return;
      }
      emit("deleteProductFromCart");
    };
    watch(
      () => props.product,
      () => {
        var _a, _b;
        benefit.value = props.product.profit;
        unit.value = ((_b = (_a = props.product) == null ? void 0 : _a.discount_details) == null ? void 0 : _b.type) === 1 || props.product.discount_type === 1 ? props.product.currency : "%";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_UiImg = _sfc_main$k;
      const _component_ProductCounter = __nuxt_component_7;
      const _component_Icon = __nuxt_component_1$3;
      const _component_CartProductPrice = __nuxt_component_4;
      const _component_CreditPriceText = _sfc_main$l;
      const _component_CreditsModal = CreditsModal;
      _push(`<!--[--><tr class="${ssrRenderClass([{
        "product-bundles-cart-item__credits": __props.isCredits,
        "product-bundles-cart-item__out-of-stock": !__props.withStock
      }, "product-bundles-cart-item"])}"><td class="product-bundles-cart-item_media"><div class="product-bundles-cart-item_media-heading">${ssrInterpolate(unref(productName))} `);
      if ((_a = __props.product) == null ? void 0 : _a.real_npi_state) {
        _push(`<p class="product-bundles-cart-item_date">`);
        if (__props.product.preorder_date) {
          _push(`<span>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(_ctx.formatToDayAndMonth(__props.product.preorder_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = __props.product) == null ? void 0 : _b.delivery_date) {
          _push(`<span>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(_ctx.formatToDayAndMonth(__props.product.delivery_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${__props.product.slug}`),
        class: "product-bundles-cart-item_media-link"
      }, null, _parent));
      if (unref(optimizatedImg)) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: unref(optimizatedImg),
          class: "product-bundles-cart-item_media-image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td class="product-bundles-cart-item_details">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${__props.product.slug}`),
        class: "product-bundles-cart-item_details-name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(productName))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(productName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="product-bundles-cart-item_date">`);
      if (__props.product.real_npi_state) {
        _push(`<span>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(_ctx.formatToDayAndMonth(__props.product.preorder_date))}. </span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.product) == null ? void 0 : _c.delivery_date) {
        _push(`<span>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(_ctx.formatToDayAndMonth(__props.product.delivery_date))}. </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><div class="product-bundles-cart-item_details-list"><!--[-->`);
      ssrRenderList(unref(similarFeatures), (feature, index) => {
        _push(`<dl class="product-bundles-cart-item_details-list-option"><dt>${ssrInterpolate(Object.keys(feature)[0])}:</dt><dd>${ssrInterpolate(Object.values(feature)[0])}</dd></dl>`);
      });
      _push(`<!--]--></div></td>`);
      if (__props.product) {
        _push(`<td class="product-bundles-cart-item_quantity"><div class="product-bundles-cart-item_quantity-container"><div class="product-bundles-cart-item_quantity-counter">`);
        _push(ssrRenderComponent(_component_ProductCounter, {
          "product-in-cart": __props.product.ordered_quantity,
          stock: setStock(__props.product.real_stock, __props.product.reservation_quantity),
          "in-stock": __props.product.inStock,
          product: __props.product,
          onStockIsEnd: _ctx.stockIsEnd,
          onUpdatedCount: _ctx.updatedCount
        }, null, _parent));
        _push(`</div><button class="${ssrRenderClass([{
          "product-bundles-cart-item_quantity-remove__paring": _ctx.isParingProduct
        }, "product-bundles-cart-item_quantity-remove"])}"${ssrIncludeBooleanAttr(_ctx.isLoadingGlobal) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button></div></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="product-bundles-cart-item_totals">`);
      _push(ssrRenderComponent(_component_Icon, {
        style: _ctx.isLoading ? null : { display: "none" },
        icon: "loader",
        class: "product-bundles-cart-item_totals-loader"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass({
        "product-bundles-cart-item_totals-pricing-hidden": _ctx.isLoading
      })}">`);
      if (__props.product) {
        _push(ssrRenderComponent(_component_CartProductPrice, {
          currency: __props.product.currency,
          "total-price": unref(totalPrice),
          "total-price-discount": unref(totalPriceDiscountValue),
          cat4: unref(priceCat4)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(canBuyInCredit) && !__props.isCredits) {
        _push(`<div class="product-bundles-cart-item_totals-financing-wrapper"><span class="product-bundles-cart-item_totals-financing-text">${ssrInterpolate(_ctx.$t("or"))} `);
        _push(ssrRenderComponent(_component_CreditPriceText, {
          price: (_e = (_d = __props.product) == null ? void 0 : _d.credits_data) == null ? void 0 : _e.min_monthly_payment,
          terms: (_g = (_f = __props.product) == null ? void 0 : _f.credits_data) == null ? void 0 : _g.max_term,
          type: "creditText"
        }, null, _parent));
        _push(`</span><button class="product-bundles-cart-item_totals-financing-button">${ssrInterpolate(_ctx.$t("learn_about_financing"))} `);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "chevronRightIcon",
          class: "product-bundles-cart-item_totals-financing-icon"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="product-bundles-cart-item_totals-remove"${ssrIncludeBooleanAttr(_ctx.isLoadingGlobal) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button></td></tr>`);
      if (!__props.isCredits) {
        _push(ssrRenderComponent(_component_CreditsModal, {
          modelValue: unref(isCreditModalShown),
          "onUpdate:modelValue": ($event) => isRef(isCreditModalShown) ? isCreditModalShown.value = $event : null,
          value: unref(isCreditModalShown),
          product: __props.product,
          "is-in-cart": "",
          onInput: ($event) => isCreditModalShown.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!__props.isLightVersion) {
        _push(ssrRenderComponent(RemoveBundlesModal, {
          modelValue: unref(openLeaveModal),
          "onUpdate:modelValue": ($event) => isRef(openLeaveModal) ? openLeaveModal.value = $event : null,
          onDeleteItem: closeModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/product-bundles/product-bundles-cart-item.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "product-bundles-cart-inner-item",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: null
    },
    showInCart: {
      type: Boolean,
      default: false
    },
    showCounter: {
      type: Boolean,
      default: false
    },
    productCardData: {
      type: Object,
      default: () => ({})
    },
    stock: {
      type: Boolean,
      default: false
    },
    isLightVersion: {
      type: Boolean,
      default: false
    },
    isDeleteBtn: {
      type: Boolean,
      default: true
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    withStock: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "deleteProductFromCart",
    "searchProduct",
    "updatedCount"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { totalPrice, totalPriceDiscountValue, priceCat4 } = useProductPrice(props.product);
    const benefit = ref(null);
    const unit = ref(null);
    const openLeaveModal = ref(false);
    const { locale } = useI18n();
    const { formatToDayAndMonth } = useDateFormatter();
    const optimizatedImg = computed(() => {
      var _a, _b, _c, _d;
      if ((_d = (_c = (_b = (_a = props.product) == null ? void 0 : _a.variations) == null ? void 0 : _b[0]) == null ? void 0 : _c.images) == null ? void 0 : _d[0]) {
        return props.product.variations[0].images[0];
      }
      return "";
    });
    const similarFeatures = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.product) == null ? void 0 : _a.similar_features) == null ? void 0 : _b.map((item) => ({
          [item.name]: item.value
        }));
      }
    );
    const productName = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = props.product) == null ? void 0 : _a.name) == null ? void 0 : _b[locale.value]) || ((_d = (_c = props.product) == null ? void 0 : _c.name) == null ? void 0 : _d["en"]) || ((_e = props.product) == null ? void 0 : _e.name);
      }
    );
    const closeModal = (event) => {
      openLeaveModal.value = false;
      if (!event) {
        return;
      }
      emit("deleteProductFromCart");
    };
    watch(
      () => props.product,
      () => {
        var _a, _b;
        benefit.value = props.product.profit;
        unit.value = ((_b = (_a = props.product) == null ? void 0 : _a.discount_details) == null ? void 0 : _b.type) === 1 || props.product.discount_type === 1 ? props.product.currency : "%";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiImg = _sfc_main$k;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_Icon = __nuxt_component_1$3;
      const _component_CartProductPrice = __nuxt_component_4;
      _push(`<!--[--><tr class="${ssrRenderClass([{
        "product-bundles-cart-item__credits": __props.isCredits,
        "product-bundles-cart-item__out-of-stock": !__props.withStock
      }, "product-bundles-cart-item"])}"><td class="product-bundles-cart-item_media"></td><td class="product-bundles-cart-item_details"><div class="product-bundles-cart-item_details-content">`);
      if (unref(optimizatedImg)) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: unref(optimizatedImg),
          class: "product-bundles-cart-item_details-image product-bundles-cart-item_details-image__inner"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-bundles-cart-item_details-inner-info">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${__props.product.slug}`),
        class: "product-bundles-cart-item_details-name product-bundles-cart-item_details-name__inner"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(productName))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(productName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="product-bundles-cart-item_date">`);
      if (__props.product.real_npi_state) {
        _push(`<span>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.product.preorder_date))}. </span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = __props.product) == null ? void 0 : _a.delivery_date) {
        _push(`<span>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.product.delivery_date))}. </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><div class="product-bundles-cart-item_details-list"><!--[-->`);
      ssrRenderList(unref(similarFeatures), (feature, index) => {
        _push(`<dl class="product-bundles-cart-item_details-list-option"><dt>${ssrInterpolate(Object.keys(feature)[0])}:</dt><dd>${ssrInterpolate(Object.values(feature)[0])}</dd></dl>`);
      });
      _push(`<!--]--></div><div class="product-bundles-cart-item_details-totals">`);
      _push(ssrRenderComponent(_component_Icon, {
        style: _ctx.isLoading ? null : { display: "none" },
        icon: "loader",
        class: "product-bundles-cart-item_totals-loader"
      }, null, _parent));
      _push(`<div class="product-bundles-cart-item_totals-container product-bundles-cart-item_totals-container__inner"><p class="product-bundles-cart-item_totals-quantity">${ssrInterpolate(__props.product.ordered_quantity)} x </p><button class="product-bundles-cart-item_totals-remove"${ssrIncludeBooleanAttr(_ctx.isLoadingGlobal) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button></div><div class="${ssrRenderClass({
        "product-bundles-cart-item_totals-pricing-hidden": _ctx.isLoading
      })}">`);
      if (__props.product) {
        _push(ssrRenderComponent(_component_CartProductPrice, {
          currency: __props.product.currency,
          "total-price": unref(totalPrice),
          "total-price-discount": unref(totalPriceDiscountValue),
          cat4: unref(priceCat4)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></td>`);
      if (__props.product) {
        _push(`<td class="product-bundles-cart-item_quantity product-bundles-cart-item_quantity__inner"><div class="product-bundles-cart-item_quantity-container product-bundles-cart-item_quantity-container__inner"><p class="product-bundles-cart-item_paring-quantity">${ssrInterpolate(__props.product.ordered_quantity)} x </p>`);
        if (!__props.isCredits) {
          _push(`<button class="product-bundles-cart-item_quantity-remove"${ssrIncludeBooleanAttr(_ctx.isLoadingGlobal) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="product-bundles-cart-item_totals product-bundles-cart-item_totals__inner"><div class="product-bundles-cart-item_totals-container">`);
      _push(ssrRenderComponent(_component_Icon, {
        style: _ctx.isLoading ? null : { display: "none" },
        icon: "loader",
        class: "product-bundles-cart-item_totals-loader"
      }, null, _parent));
      _push(`<div class="product-bundles-cart-item_totals-container"><p class="product-bundles-cart-item_totals-quantity">${ssrInterpolate(__props.product.ordered_quantity)} x </p>`);
      if (!__props.isCredits) {
        _push(`<button class="product-bundles-cart-item_totals-remove"${ssrIncludeBooleanAttr(_ctx.isLoadingGlobal) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass({
        "product-bundles-cart-item_totals-pricing-hidden": _ctx.isLoading
      })}">`);
      if (__props.product) {
        _push(ssrRenderComponent(_component_CartProductPrice, {
          currency: __props.product.currency,
          "total-price": unref(totalPrice),
          "total-price-discount": unref(totalPriceDiscountValue),
          cat4: unref(priceCat4)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></td></tr>`);
      if (!__props.isLightVersion) {
        _push(ssrRenderComponent(RemoveBundlesModal, {
          modelValue: unref(openLeaveModal),
          "onUpdate:modelValue": ($event) => isRef(openLeaveModal) ? openLeaveModal.value = $event : null,
          onDeleteItem: closeModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/product-bundles/product-bundles-cart-inner-item.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const useThrottling = () => {
  const { setCart } = useCartStore();
  const productKey = ref(null);
  const bundleId = ref(null);
  const count = ref(null);
  const getDebounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(void 0, args);
      }, timeout);
    };
  };
  const saveCounter = async () => {
    var _a, _b;
    try {
      const { data } = await CartApiService.changeCountProductFromCart(
        productKey.value,
        count.value,
        bundleId.value
      );
      const cart = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.cart;
      const filteredProducts = filterOutDeliveryProducts(cart.products);
      setCart({ ...cart, products: filteredProducts });
    } catch (error) {
      console.error(error);
    }
  };
  const setDataToCart = (key, counter, id = null) => {
    productKey.value = key;
    count.value = counter;
    bundleId.value = id;
  };
  const processChange = () => {
    return new Promise((resolve) => {
      const debouncedSaveCounter = getDebounce(
        () => saveCounter().then(resolve)
      );
      debouncedSaveCounter();
    });
  };
  return { setDataToCart, processChange };
};
const _sfc_main$8 = {
  __name: "product-bundles-cart",
  __ssrInlineRender: true,
  props: {
    paring: {
      type: Object,
      default: () => ({})
    },
    showInCart: {
      type: Boolean,
      default: false
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    stock: {
      type: Boolean,
      default: false
    },
    isLightVersion: {
      type: Boolean,
      default: false
    },
    isDeleteBtn: {
      type: Boolean,
      default: true
    }
  },
  emits: ["deleteProductFromCart"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getCart } = useCartStore();
    const { setDataToCart, processChange } = useThrottling();
    const getProductDataFromCart = (key) => {
      const keyId = getCart.value.products.filter((el) => el.crm_id === key);
      return keyId[0].crm_id;
    };
    const updatedCount = async (count, key, bundleId) => {
      const productKey = getProductDataFromCart(key);
      setDataToCart(productKey, count, bundleId);
      processChange();
    };
    const deleteBundle = (paring) => {
      emit("deleteProductFromCart", {
        key: paring.crm_id,
        bundlePairingCmsId: paring.bundle_pairing_cms_id,
        bundlePairingProductId: paring.bundle_pairing_product_id
      });
    };
    const mainBundleProduct = computed(
      () => {
        var _a, _b;
        return (_b = (_a = getCart == null ? void 0 : getCart.value) == null ? void 0 : _a.products) == null ? void 0 : _b.find(
          (el) => {
            var _a2, _b2;
            return el.crm_id === ((_a2 = props == null ? void 0 : props.paring) == null ? void 0 : _a2.crm_id) && el.bundle_pairing_cms_id === ((_b2 = props == null ? void 0 : props.paring) == null ? void 0 : _b2.bundle_pairing_cms_id);
          }
        );
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductBundlesCartItem = _sfc_main$a;
      const _component_ProductBundlesCartInnerItem = _sfc_main$9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ProductBundlesCartItem, {
        stock: __props.stock,
        product: __props.paring,
        "product-card-data": unref(mainBundleProduct),
        "show-in-cart": __props.showInCart,
        "show-counter": true,
        "is-credits": __props.isCredits,
        "is-delete-btn": __props.isDeleteBtn,
        "with-stock": __props.paring.available_quantity,
        onUpdatedCount: ($event) => updatedCount($event, __props.paring.crm_id, __props.paring.bundle_pairing_cms_id),
        onDeleteProductFromCart: ($event) => deleteBundle(__props.paring)
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.paring.bundle_pairing.products, (product, index) => {
        var _a;
        _push(ssrRenderComponent(_component_ProductBundlesCartInnerItem, {
          key: `${product.id}-${index}-bundle`,
          "is-light-version": __props.isLightVersion,
          stock: __props.stock,
          product,
          "product-card-data": (_a = unref(getCart)) == null ? void 0 : _a.products.find((el) => el.crm_id === product.crm_id),
          index,
          "is-credits": __props.isCredits,
          "show-in-cart": __props.showInCart,
          "is-paring-product": "",
          "with-stock": __props.paring.available_quantity,
          onDeleteProductFromCart: ($event) => deleteBundle(product)
        }, null, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/product-bundles/product-bundles-cart.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "cart-item",
  __ssrInlineRender: true,
  props: {
    productInCart: {
      type: Object,
      default: null
    },
    stock: {
      type: Number,
      default: 0
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    productCount: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean,
      default: false
    },
    isMain: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "deleteProductFromCart",
    "searchProduct",
    "updatedCount"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { formatToDayAndMonth } = useDateFormatter();
    const { locale } = useI18n();
    const loadingStore = useLoadingStore();
    const { getCart } = useCartStore();
    const { setDataToCart, processChange } = useThrottling();
    const isStockEnd = ref(false);
    const isLoading = ref(false);
    const isCreditModalShown = ref(false);
    const isLoadingGlobal = computed(() => loadingStore.getIsLoading);
    const productCount = ref(
      props.isInCart ? props.productInCart.ordered_quantity + props.productCount : props.productCount
    );
    const realProductCount = ref(
      props.isCredits && props.isMain ? productCount.value : props.productInCart.ordered_quantity
    );
    const totalPriceValue = computed(
      () => props.isCredits ? props.productInCart.final_price * productCount.value : props.productInCart.price * props.productInCart.ordered_quantity
    );
    const totalPriceWithDiscountValue = computed(
      () => props.isCredits ? props.productInCart.price_with_discount * productCount.value : props.productInCart.price_with_discount * props.productInCart.ordered_quantity
    );
    const totalPriceCat4Value = computed(
      () => props.isCredits ? props.productInCart.price_cat_4 * productCount.value : props.productInCart.price_cat_4 * props.productInCart.ordered_quantity
    );
    const similarFeatures = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.productInCart) == null ? void 0 : _a.similar_features) == null ? void 0 : _b.map((item) => ({
          [item.name]: item.value
        }));
      }
    );
    const productName = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = props.productInCart) == null ? void 0 : _a.name) == null ? void 0 : _b[locale.value]) || ((_d = (_c = props.productInCart) == null ? void 0 : _c.name) == null ? void 0 : _d["en"]) || ((_e = props.productInCart) == null ? void 0 : _e.name);
      }
    );
    const canBuyInCredit = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_a = props.productInCart) == null ? void 0 : _a.real_stock) && ((_b = props.productInCart) == null ? void 0 : _b.final_price) && ((_d = (_c = props.productInCart) == null ? void 0 : _c.credits_data) == null ? void 0 : _d.min_monthly_payment);
      }
    );
    const optimizatedImg = computed(() => {
      var _a, _b, _c, _d;
      if ((_d = (_c = (_b = (_a = props.productInCart) == null ? void 0 : _a.variations) == null ? void 0 : _b[0]) == null ? void 0 : _c.images) == null ? void 0 : _d[0]) {
        return props.productInCart.variations[0].images[0];
      }
      return "";
    });
    const stockIsEnd = (stock, time = 5e3) => {
      if (!isStockEnd.value || !props.productInCart.inStock) {
        isStockEnd.value = true;
        setTimeout(() => {
          isStockEnd.value = false;
        }, time);
      }
    };
    const setStock = (realStock, reservationCount) => {
      if (!reservationCount) {
        return realStock + reservationCount;
      }
      return realStock;
    };
    const getProductDataFromCart = (key) => {
      var _a;
      const keyId = getCart.value.products.filter(
        (el) => (el == null ? void 0 : el.product) ? el == null ? void 0 : el.product.crm_id : el.crm_id === key
      );
      return ((_a = keyId[0]) == null ? void 0 : _a.product) ? keyId[0].product.crm_id : keyId[0].crm_id;
    };
    const updatedCount = async ({ count, key }) => {
      try {
        isLoading.value = true;
        loadingStore.setIsLoading(true);
        if (!props.isCredits) {
          const productKey = getProductDataFromCart(key);
          setDataToCart(productKey, count);
          await processChange();
          emit("searchProduct");
        } else {
          productCount.value = count;
          emit("updatedCount", { count, key });
        }
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
        loadingStore.setIsLoading(false);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_UiImg = _sfc_main$k;
      const _component_ProductCounter = __nuxt_component_7;
      const _component_Icon = __nuxt_component_1$3;
      const _component_CartProductPrice = __nuxt_component_4;
      const _component_CreditPriceText = _sfc_main$l;
      const _component_CreditsModal = CreditsModal;
      _push(`<!--[--><tr class="${ssrRenderClass([{
        "cart-item__credits": __props.isCredits,
        "cart-item__out-of-stock": !__props.stock
      }, "cart-item"])}" data-v-5134d9bc><td class="cart-item_media" data-v-5134d9bc><div class="cart-item_media-heading" data-v-5134d9bc>${ssrInterpolate(unref(productName))} `);
      if ((_a = __props.productInCart) == null ? void 0 : _a.real_npi_state) {
        _push(`<p class="cart-item_date" data-v-5134d9bc>`);
        if (__props.productInCart.preorder_date) {
          _push(`<span data-v-5134d9bc>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.productInCart.preorder_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = __props.productInCart) == null ? void 0 : _b.delivery_date) {
          _push(`<span data-v-5134d9bc>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.productInCart.delivery_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${__props.productInCart.slug}`),
        class: "cart-item_media-link"
      }, null, _parent));
      if (unref(optimizatedImg)) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: unref(optimizatedImg),
          class: "cart-item_media-image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td class="cart-item_details" data-v-5134d9bc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${__props.productInCart.slug}`),
        class: "cart-item_details-name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(productName))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(productName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if ((_c = __props.productInCart) == null ? void 0 : _c.real_npi_state) {
        _push(`<p class="cart-item_date" data-v-5134d9bc>`);
        if ((_d = __props.productInCart) == null ? void 0 : _d.preorder_date) {
          _push(`<span data-v-5134d9bc>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.productInCart.preorder_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_e = __props.productInCart) == null ? void 0 : _e.delivery_date) {
          _push(`<span data-v-5134d9bc>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.productInCart.delivery_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cart-item_details-list" data-v-5134d9bc><!--[-->`);
      ssrRenderList(unref(similarFeatures), (feature, index) => {
        _push(`<dl class="cart-item_details-list-option" data-v-5134d9bc><dt data-v-5134d9bc>${ssrInterpolate(Object.keys(feature)[0])}:</dt><dd data-v-5134d9bc>${ssrInterpolate(Object.values(feature)[0])}</dd></dl>`);
      });
      _push(`<!--]--></div></td>`);
      if (__props.productInCart) {
        _push(`<td class="cart-item_quantity" data-v-5134d9bc><div class="cart-item_quantity-container" data-v-5134d9bc>`);
        _push(ssrRenderComponent(_component_ProductCounter, {
          "product-in-cart": unref(realProductCount),
          stock: setStock(
            __props.productInCart.real_stock,
            __props.productInCart.reservation_quantity
          ),
          "in-stock": __props.productInCart.inStock,
          product: __props.productInCart,
          "is-loading-global": unref(isLoadingGlobal),
          onStockIsEnd: stockIsEnd,
          onUpdatedCount: updatedCount
        }, null, _parent));
        _push(`<button class="cart-item_quantity-remove"${ssrIncludeBooleanAttr(unref(isLoadingGlobal)) ? " disabled" : ""} data-v-5134d9bc>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button></div></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="cart-item_totals" data-v-5134d9bc>`);
      _push(ssrRenderComponent(_component_Icon, {
        style: unref(isLoading) ? null : { display: "none" },
        icon: "loader",
        class: "cart-item_totals-loader"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass({ "cart-item_totals-pricing-hidden": unref(isLoading) })}" data-v-5134d9bc>`);
      if (__props.productInCart) {
        _push(ssrRenderComponent(_component_CartProductPrice, {
          currency: __props.productInCart.currency,
          "total-price": unref(totalPriceValue),
          "total-price-discount": unref(totalPriceWithDiscountValue),
          cat4: unref(totalPriceCat4Value)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(canBuyInCredit) && !__props.isCredits) {
        _push(`<div class="cart-item_totals-financing-wrapper" data-v-5134d9bc><span class="cart-item_totals-financing-text" data-v-5134d9bc>${ssrInterpolate(_ctx.$t("or"))} `);
        _push(ssrRenderComponent(_component_CreditPriceText, {
          price: (_g = (_f = __props.productInCart) == null ? void 0 : _f.credits_data) == null ? void 0 : _g.min_monthly_payment,
          terms: (_i = (_h = __props.productInCart) == null ? void 0 : _h.credits_data) == null ? void 0 : _i.max_term,
          type: "creditText"
        }, null, _parent));
        _push(`</span><button class="cart-item_totals-financing-button" data-v-5134d9bc>${ssrInterpolate(_ctx.$t("learn_about_financing"))}`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "chevronRightIcon",
          class: "cart-item_totals-financing-icon"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="cart-item_totals-remove"${ssrIncludeBooleanAttr(unref(isLoadingGlobal)) ? " disabled" : ""} data-v-5134d9bc>${ssrInterpolate(_ctx.$t("remove_from_cart"))}</button></td></tr>`);
      if (!__props.isCredits) {
        _push(ssrRenderComponent(_component_CreditsModal, {
          modelValue: unref(isCreditModalShown),
          "onUpdate:modelValue": ($event) => isRef(isCreditModalShown) ? isCreditModalShown.value = $event : null,
          value: unref(isCreditModalShown),
          product: __props.productInCart,
          "is-in-cart": "",
          onInput: ($event) => isCreditModalShown.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-item/cart-item.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5134d9bc"]]);
const _sfc_main$6 = {
  __name: "trade-in-cart",
  __ssrInlineRender: true,
  props: {
    tradeInBlocks: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const isTradeInOpened = ref(false);
    const checkPageName = (val) => {
      var _a;
      return Boolean((_a = route == null ? void 0 : route.name) == null ? void 0 : _a.includes(val));
    };
    const isCartPage = computed(() => checkPageName("cart"));
    const setTradeIncheckout = () => {
      localStorage.setItem("showCheckoutTradeIn", true);
    };
    const handleStartTradeInClick = () => {
      setTradeIncheckout();
      router.push(nuxtApp.$localeRoute({ path: "/checkout" }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      const _component_Button = __nuxt_component_6;
      const _component_TradeInModalContent = __nuxt_component_2$3;
      _push(`<!--[--><tr class="trade-in-cart" data-v-5db8bc52><td class="trade-in-cart_empty-block" data-v-5db8bc52></td><td class="trade-in-cart_item" colspan="4" data-v-5db8bc52><div class="trade-in-cart_content" data-v-5db8bc52>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "tradeIn",
        class: "trade-in-cart_icon"
      }, null, _parent));
      _push(`<div class="trade-in-cart_description" data-v-5db8bc52><p class="trade-in-cart_title" data-v-5db8bc52>${ssrInterpolate(_ctx.$t("trade_in_title"))}</p><p class="trade-in-cart_subtitle" data-v-5db8bc52>${ssrInterpolate(_ctx.$t("trade_in_subtitle"))}</p><button class="trade-in-cart_button" data-v-5db8bc52>${ssrInterpolate(_ctx.$t("learn_more"))}`);
      _push(ssrRenderComponent(_component_Icon, { icon: "chevronRightIcon" }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_Button, {
        secondary: "",
        class: "trade-in-cart_trade-in-button",
        onClick: ($event) => handleStartTradeInClick()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("start_trade_in_checkout"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("start_trade_in_checkout")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></td></tr>`);
      _push(ssrRenderComponent(_component_TradeInModalContent, {
        modelValue: unref(isTradeInOpened),
        "onUpdate:modelValue": ($event) => isRef(isTradeInOpened) ? isTradeInOpened.value = $event : null,
        "has-preloaded-blocks": __props.tradeInBlocks,
        "is-cart-page": unref(isCartPage),
        onInput: ($event) => isTradeInOpened.value = $event,
        onStartTradeIn: setTradeIncheckout
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/trade-in-cart/trade-in-cart.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5db8bc52"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.89353 10.3465C1.43772 10.3465 1.09151 10.2282 0.854906 9.99158C0.618302 9.75498 0.5 9.40877 0.5 8.95296V2.24628C0.5 1.78699 0.618302 1.43904 0.854906 1.20244C1.09151 0.965836 1.43772 0.847534 1.89353 0.847534H9.40919C9.865 0.847534 10.2112 0.967576 10.4478 1.20766C10.6844 1.44774 10.8027 1.79395 10.8027 2.24628V9.52186L10.1608 9.89764V2.25672C10.1608 2.00272 10.0946 1.81309 9.96242 1.68783C9.8302 1.55909 9.64057 1.49472 9.39353 1.49472H1.90397C1.65344 1.49472 1.46381 1.55909 1.33507 1.68783C1.20633 1.81309 1.14196 2.00272 1.14196 2.25672V8.9373C1.14196 9.19131 1.20633 9.38268 1.33507 9.51142C1.46381 9.64016 1.65344 9.70453 1.90397 9.70453H2.89562V10.3465H1.89353ZM10.4322 4.38616V3.74419H12.2902C12.5303 3.74419 12.7356 3.77725 12.9061 3.84336C13.08 3.90947 13.2383 4.01907 13.381 4.17217L15.1555 6.17634C15.2843 6.32248 15.373 6.46688 15.4217 6.60954C15.4739 6.7522 15.5 6.93487 15.5 7.15756V8.95296C15.5 9.40877 15.3817 9.75498 15.1451 9.99158C14.9085 10.2282 14.5623 10.3465 14.1065 10.3465H13.3601V9.70453H14.0908C14.3413 9.70453 14.531 9.64016 14.6597 9.51142C14.7919 9.38268 14.858 9.19131 14.858 8.9373V7.1419C14.858 7.04099 14.8389 6.94009 14.8006 6.83918C14.7624 6.7348 14.7067 6.64085 14.6336 6.55735L12.9426 4.66277C12.8452 4.55491 12.7408 4.48184 12.6294 4.44357C12.5181 4.40529 12.3876 4.38616 12.238 4.38616H10.4322ZM11.7422 7.1419C11.6239 7.1419 11.5282 7.1071 11.4551 7.03751C11.3855 6.96792 11.3507 6.87398 11.3507 6.75568V4.91852H12.1284C12.2189 4.91852 12.2989 4.93765 12.3685 4.97593C12.4381 5.01072 12.5007 5.05769 12.5564 5.11685L14.1117 6.86528C14.15 6.90703 14.1795 6.94879 14.2004 6.99054C14.2248 7.03229 14.237 7.08275 14.237 7.1419H11.7422ZM4.27349 11.834C3.95338 11.834 3.6611 11.7557 3.39666 11.5991C3.1357 11.4425 2.92693 11.232 2.77035 10.9676C2.61378 10.7066 2.53549 10.4161 2.53549 10.096C2.53549 9.77586 2.61378 9.48532 2.77035 9.22436C2.92693 8.95992 3.1357 8.75115 3.39666 8.59806C3.6611 8.44148 3.95338 8.36319 4.27349 8.36319C4.5936 8.36319 4.88413 8.44148 5.14509 8.59806C5.40605 8.75115 5.61482 8.95992 5.7714 9.22436C5.92798 9.48532 6.00626 9.77586 6.00626 10.096C6.00626 10.4161 5.92798 10.7066 5.7714 10.9676C5.61482 11.232 5.40605 11.4425 5.14509 11.5991C4.88413 11.7557 4.5936 11.834 4.27349 11.834ZM4.27349 11.2755C4.48921 11.2755 4.6858 11.2216 4.86326 11.1137C5.04419 11.0093 5.18685 10.8667 5.29123 10.6857C5.39562 10.5083 5.44781 10.3117 5.44781 10.096C5.44781 9.87676 5.39562 9.67843 5.29123 9.50098C5.18685 9.32353 5.04419 9.18261 4.86326 9.07822C4.6858 8.97036 4.48921 8.91643 4.27349 8.91643C4.05428 8.91643 3.85595 8.97036 3.6785 9.07822C3.50104 9.18261 3.35839 9.32353 3.25052 9.50098C3.14266 9.67843 3.08873 9.87676 3.08873 10.096C3.08873 10.3117 3.14266 10.5083 3.25052 10.6857C3.35839 10.8667 3.50104 11.0093 3.6785 11.1137C3.85595 11.2216 4.05428 11.2755 4.27349 11.2755ZM11.8622 11.834C11.5456 11.834 11.255 11.7557 10.9906 11.5991C10.7262 11.4425 10.5157 11.232 10.3591 10.9676C10.2025 10.7066 10.1242 10.4161 10.1242 10.096C10.1242 9.77586 10.2025 9.48532 10.3591 9.22436C10.5157 8.95992 10.7262 8.75115 10.9906 8.59806C11.255 8.44148 11.5456 8.36319 11.8622 8.36319C12.1823 8.36319 12.4729 8.44148 12.7338 8.59806C12.9983 8.75115 13.207 8.95992 13.3601 9.22436C13.5167 9.48532 13.595 9.77586 13.595 10.096C13.595 10.4161 13.5167 10.7066 13.3601 10.9676C13.207 11.232 12.9983 11.4425 12.7338 11.5991C12.4729 11.7557 12.1823 11.834 11.8622 11.834ZM11.8622 11.2755C12.0814 11.2755 12.2797 11.2216 12.4572 11.1137C12.6347 11.0093 12.7756 10.8667 12.88 10.6857C12.9843 10.5083 13.0365 10.3117 13.0365 10.096C13.0365 9.87676 12.9826 9.67843 12.8747 9.50098C12.7704 9.32353 12.6294 9.18261 12.452 9.07822C12.2745 8.97036 12.0779 8.91643 11.8622 8.91643C11.6465 8.91643 11.4499 8.97036 11.2724 9.07822C11.095 9.18261 10.9523 9.32353 10.8445 9.50098C10.7366 9.67843 10.6827 9.87676 10.6827 10.096C10.6827 10.3117 10.7366 10.5083 10.8445 10.6857C10.9523 10.8667 11.095 11.0093 11.2724 11.1137C11.4499 11.2216 11.6465 11.2755 11.8622 11.2755ZM5.70355 10.3465V9.70453H10.4896V10.3465H5.70355Z" fill="black"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/assets/ShippingIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "product-delivery",
  __ssrInlineRender: true,
  props: {
    available: {
      type: Boolean,
      default: false
    },
    withTitle: {
      type: Boolean,
      default: false
    },
    directionRow: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const shopsStore = useShopsStore();
    const selectedShop = computed(() => shopsStore.getSelectedShop);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Shop = __nuxt_component_0$1;
      const _component_ShippingIcon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["product-delivery", {
          "product-delivery__without-margin": !__props.withTitle,
          "product-delivery__direction-row": __props.directionRow
        }]
      }, _attrs))}>`);
      if (__props.withTitle) {
        _push(`<p class="product-delivery_title">${ssrInterpolate(_ctx.$t("get_it_fast"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-delivery_item">`);
      _push(ssrRenderComponent(_component_Shop, { class: "product-delivery_item-icon" }, null, _parent));
      _push(`<div><p class="product-delivery_item-title">${ssrInterpolate(_ctx.$t("pickup"))}</p><p class="${ssrRenderClass([{ "product-delivery_item-text__availible": __props.available }, "product-delivery_item-text"])}">${ssrInterpolate(_ctx.$t(__props.available ? "usually_ready_in_24_hours" : "unavailible"))}</p><button class="product-delivery_item-button">${ssrInterpolate(((_a = unref(selectedShop)) == null ? void 0 : _a.name) || _ctx.$t("select_your_store"))}</button></div></div><div class="product-delivery_item">`);
      _push(ssrRenderComponent(_component_ShippingIcon, { class: "product-delivery_item-icon" }, null, _parent));
      _push(`<p class="product-delivery_item-title">${ssrInterpolate(_ctx.$t("product_shipping"))}</p></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/product-delivery/product-delivery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "submit-order-popup",
  __ssrInlineRender: true,
  props: {
    currency: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const router = useRouter();
    const app = useNuxtApp();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { pushGtmEvent } = useGtm();
    const { getCart } = useCartStore();
    const pageStore = usePagesStore();
    const sitePayments = computed(
      () => {
        var _a, _b;
        return (_b = (_a = pageStore.getAboutSiteInfo) == null ? void 0 : _a.payments) == null ? void 0 : _b.filter(Boolean);
      }
    );
    const popup = ref(null);
    ref(null);
    const goToCheckout = () => {
      var _a;
      if ((_a = getCart.value) == null ? void 0 : _a.products) {
        pushGtmEvent("loadCheckoutPageGA", getCart.value.products);
      }
      router.push(
        app.$localeRoute({
          path: "/checkout"
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1$3;
      const _component_UiImg = _sfc_main$k;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "submit-order-popup",
        ref_key: "popup",
        ref: popup,
        class: "submit-order-popup"
      }, _attrs))} data-v-1605ade0><div class="submit-order-popup_content" data-v-1605ade0><div class="submit-order-popup_payments submit-order-popup_payments___mobile-hidden" data-v-1605ade0><span class="submit-order-popup_payments-title" data-v-1605ade0>${ssrInterpolate(_ctx.$t("order_summary"))}</span><div class="submit-order-popup_payments-secure-checkout" data-v-1605ade0>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "lock",
        class: "submit-order-popup_payments-icon"
      }, null, _parent));
      _push(`<span class="submit-order-popup_payments-text" data-v-1605ade0>${ssrInterpolate(_ctx.$t("secure_checkout"))}</span></div>`);
      if (unref(sitePayments)) {
        _push(`<div class="submit-order-popup_payments-images" data-v-1605ade0><!--[-->`);
        ssrRenderList(unref(sitePayments), (paymentSrc) => {
          _push(ssrRenderComponent(_component_UiImg, {
            key: paymentSrc,
            class: "submit-order-popup_payment-icon",
            src: paymentSrc
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="submit-order-popup_submit" data-v-1605ade0><div class="submit-order-popup_submit-price" data-v-1605ade0><span class="submit-order-popup_submit-price-title" data-v-1605ade0>${ssrInterpolate(_ctx.$t("total_cost"))}: </span><span class="submit-order-popup_submit-price-value" data-v-1605ade0>${ssrInterpolate(unref(formatPriceWithSpaces)((_b = (_a = unref(getCart)) == null ? void 0 : _a.total) == null ? void 0 : _b.total_price_with_discount))} ${ssrInterpolate(__props.currency)}</span></div>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "submit-order-popup_submit-button",
        onClick: goToCheckout
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("submit_order_payment"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("submit_order_payment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/submit-order-popup/submit-order-popup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SubmitOrderPopup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1605ade0"]]);
const _sfc_main$2 = {
  __name: "cart-items",
  __ssrInlineRender: true,
  props: {
    productsInCart: {
      type: Array,
      default: () => []
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    tradeInBlocks: {
      type: Array,
      default: () => []
    },
    productCount: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const productCurrency = props.productsInCart.find(
      (product) => product.currency
    );
    const { currencyMark } = useCurrencyMark(productCurrency == null ? void 0 : productCurrency.currency);
    const inStockProducts = computed(
      () => props.productsInCart.filter((el) => el.inStock)
    );
    const outOfStockProducts = computed(
      () => props.productsInCart.filter((el) => !el.inStock)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductBundlesCart = _sfc_main$8;
      const _component_CartItem = __nuxt_component_1$2;
      const _component_TradeInCart = __nuxt_component_2$1;
      const _component_ProductDelivery = _sfc_main$4;
      _push(`<!--[--><table class="${ssrRenderClass([{ "cart-items__credits": __props.isCredits }, "cart-items"])}" data-v-b35cb0bc>`);
      if (!__props.isCredits) {
        _push(`<thead class="cart-items_head" data-v-b35cb0bc><tr class="cart-items_head-row" data-v-b35cb0bc><th class="cart-items_head-product" colspan="2" scope="col" data-v-b35cb0bc>${ssrInterpolate(_ctx.$t("product"))}</th><th class="cart-items_head-quantity" scope="col" data-v-b35cb0bc>${ssrInterpolate(_ctx.$t("quantity"))}</th><th class="cart-items_head-total" scope="col" data-v-b35cb0bc>${ssrInterpolate(_ctx.$t("total"))}</th></tr></thead>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<tbody class="cart-items_body" data-v-b35cb0bc><!--[-->`);
      ssrRenderList(unref(inStockProducts), (productInCart, index) => {
        _push(`<!--[-->`);
        if (productInCart.bundle_pairing_cms_id) {
          _push(ssrRenderComponent(_component_ProductBundlesCart, {
            "is-light-version": _ctx.isLightVersion,
            paring: productInCart,
            "product-count": __props.productCount,
            "is-credits": __props.isCredits,
            "show-in-cart": "",
            onDeleteProductFromCart: ($event) => _ctx.$emit("deleteProductFromCart", {
              productData: $event,
              isBundle: true
            })
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_CartItem, {
            "product-in-cart": productInCart,
            stock: productInCart.real_stock,
            "is-credits": __props.isCredits,
            "is-in-cart": __props.isInCart,
            "product-count": __props.productCount,
            "is-main": index === 0,
            onDeleteProductFromCart: ($event) => _ctx.$emit("deleteProductFromCart", {
              productData: productInCart.crm_id,
              isBundle: false
            }),
            onSearchProduct: ($event) => _ctx.$emit("searchProduct", __props.productsInCart),
            onUpdatedCount: ($event) => _ctx.$emit("updatedCount", $event)
          }, null, _parent));
        }
        if (!__props.isCredits && productInCart.is_trade_in) {
          _push(ssrRenderComponent(_component_TradeInCart, { "trade-in-blocks": __props.tradeInBlocks }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!__props.isCredits) {
          _push(`<tr data-v-b35cb0bc><td data-v-b35cb0bc></td><td class="cart-items_delivery" data-v-b35cb0bc>`);
          _push(ssrRenderComponent(_component_ProductDelivery, {
            available: "",
            "direction-row": ""
          }, null, _parent));
          _push(`</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(outOfStockProducts), (productInCart, index) => {
        _push(`<!--[-->`);
        if (productInCart.bundle_pairing_cms_id) {
          _push(ssrRenderComponent(_component_ProductBundlesCart, {
            "is-light-version": _ctx.isLightVersion,
            paring: productInCart,
            "product-count": __props.productCount,
            "is-credits": __props.isCredits,
            "show-in-cart": "",
            onDeleteProductFromCart: ($event) => _ctx.$emit("deleteProductFromCart", {
              productData: $event,
              isBundle: true
            })
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_CartItem, {
            "product-in-cart": productInCart,
            stock: productInCart.real_stock,
            "is-credits": __props.isCredits,
            "is-in-cart": __props.isInCart,
            "product-count": __props.productCount,
            "is-main": index === 0,
            onDeleteProductFromCart: ($event) => _ctx.$emit("deleteProductFromCart", {
              productData: productInCart.crm_id,
              isBundle: false
            }),
            onSearchProduct: ($event) => _ctx.$emit("searchProduct", __props.productsInCart),
            onUpdatedCount: ($event) => _ctx.$emit("updatedCount", $event)
          }, null, _parent));
        }
        if (!__props.isCredits && productInCart.is_trade_in) {
          _push(ssrRenderComponent(_component_TradeInCart, { "trade-in-blocks": __props.tradeInBlocks }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></tbody></table>`);
      if (!__props.isCredits) {
        _push(ssrRenderComponent(SubmitOrderPopup, { currency: unref(currencyMark) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-items/cart-items.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b35cb0bc"]]);
const _sfc_main$1 = {
  __name: "cart-payment",
  __ssrInlineRender: true,
  props: {
    productsInCart: {
      type: Array,
      default: () => []
    }
  },
  emits: ["deleteProductFromCart"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const router = useRouter();
    const app = useNuxtApp();
    const { pushGtmEvent } = useGtm();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { getCart } = useCartStore();
    const isCreditModalShown = ref(false);
    const productInCart = computed(() => {
      var _a;
      return (_a = props.productsInCart) == null ? void 0 : _a[0];
    });
    const creditData = computed(() => getCart.value.total.featured_credit);
    const productCurrency = props.productsInCart.find(
      (product) => product.currency
    );
    const { currencyMark } = useCurrencyMark(productCurrency == null ? void 0 : productCurrency.currency);
    const goToCheckout = () => {
      pushGtmEvent("loadCheckoutPageGA", getCart.value.products);
      router.push(
        app.$localeRoute({
          path: "/checkout"
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Button = __nuxt_component_6;
      const _component_CreditsModal = CreditsModal;
      _push(`<!--[--><div class="cart-payment" data-v-e4ea9e9e>`);
      if (unref(creditData)) {
        _push(`<div class="cart-payment_financing" data-v-e4ea9e9e><span class="cart-payment_financing-price" data-v-e4ea9e9e>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(creditData).min_monthly_payment))} ${ssrInterpolate(unref(currencyMark))}/${ssrInterpolate(_ctx.$t("credit_mo"))} ${ssrInterpolate(_ctx.$t("credit_for"))} ${ssrInterpolate((_a = unref(creditData)) == null ? void 0 : _a.max_term)} ${ssrInterpolate(_ctx.$t("credit_months"))}</span>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "cart-payment_button",
          onClick: ($event) => isCreditModalShown.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("start_financing"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("start_financing")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cart-payment_full" data-v-e4ea9e9e><span class="cart-payment_full-price" data-v-e4ea9e9e>${ssrInterpolate(_ctx.$t("pay_full"))} <br class="cart-payment_full-price-divider" data-v-e4ea9e9e> ${ssrInterpolate(unref(formatPriceWithSpaces)(unref(getCart).total.total_price_with_discount))} ${ssrInterpolate(unref(currencyMark))}</span>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "cart-payment_button",
        onClick: goToCheckout
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("submit_order_payment"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("submit_order_payment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_CreditsModal, {
        modelValue: unref(isCreditModalShown),
        "onUpdate:modelValue": ($event) => isRef(isCreditModalShown) ? isCreditModalShown.value = $event : null,
        value: unref(isCreditModalShown),
        "is-in-cart": "",
        product: unref(productInCart),
        onInput: ($event) => isCreditModalShown.value = $event
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-payment/cart-payment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e4ea9e9e"]]);
const _sfc_main = {
  __name: "cart-main-section-content",
  __ssrInlineRender: true,
  props: {
    productsInCart: {
      type: Array,
      default: () => []
    },
    isCredits: {
      type: Boolean,
      default: false
    },
    tradeInBlocks: {
      type: Array,
      default: () => []
    },
    productCount: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const shouldShowProductsList = computed(() => {
      var _a;
      return !!((_a = props.productsInCart) == null ? void 0 : _a.length);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_CartItems = __nuxt_component_1;
      const _component_CartPayment = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-main-section-content" }, _attrs))} data-v-a9adbec1>`);
      if (!__props.isCredits) {
        _push(`<div class="cart-main-section-content_header" data-v-a9adbec1><span class="cart-main-section-content_header-title" data-v-a9adbec1>${ssrInterpolate(_ctx.$t("your_cart"))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.localePath("/"),
          class: "cart-main-section-content_header-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("continue_shopping"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(shouldShowProductsList)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_CartItems, {
          "products-in-cart": __props.productsInCart,
          "product-count": __props.productCount,
          "is-credits": __props.isCredits,
          "trade-in-blocks": __props.tradeInBlocks,
          "is-in-cart": __props.isInCart,
          onDeleteProductFromCart: ($event) => _ctx.$emit("deleteProductFromCart", $event),
          onSearchProduct: ($event) => _ctx.$emit("searchProduct", $event),
          onUpdatedCount: ($event) => _ctx.$emit("updatedCount", $event)
        }, null, _parent));
        if (!__props.isCredits) {
          _push(ssrRenderComponent(_component_CartPayment, { "products-in-cart": __props.productsInCart }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-main-section-content/cart-main-section-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CartMainSectionContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9adbec1"]]);

export { CartMainSectionContent as C, __nuxt_component_7 as _, _sfc_main$4 as a, CreditsModal as b };
//# sourceMappingURL=cart-main-section-content-k_W1aaZJ.mjs.map
