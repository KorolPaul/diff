import { _ as __nuxt_component_1, I as Icons } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_1$1 } from './currency-text-DJsP4_8P.mjs';
import { _ as _sfc_main$a } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_2$2 } from './checkout-product-price-CaEg0Gsb.mjs';
import { reactive, ref, computed, watch, mergeProps, unref, getCurrentInstance, isRef, withCtx, createTextVNode, toDisplayString, createVNode, defineComponent, inject, createSlots, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSlots, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrGetDirectiveProps } from 'vue/server-renderer';
import { u as useDateFormatter } from './useDateFormatter-BM16RVpG.mjs';
import { u as useProductPrice } from './useProductPrice-CDseUihT.mjs';
import { _ as _export_sfc, a as useI18n, r as useNuxtApp, k as __nuxt_component_6, t as useTradeInStore, H as filterOutDeliveryProducts, e as useApi, M as setCartTokenHeader, P as PUBLIC_PREFIX, N as navigateTo, l as useGtm, z as useRuntimeConfig } from './server.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { useVuelidate } from '@vuelidate/core';
import { u as useFormUtils, _ as __nuxt_component_4$1 } from './useFormUtils-HyQgFuda.mjs';
import { _ as _sfc_main$b } from './TextInput-HaUa076w.mjs';
import { _ as __nuxt_component_1$2 } from './UiSelect-BqVOhDGy.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { _ as _sfc_main$9 } from './modal-light-Cz0YAIgT.mjs';

const _sfc_main$8 = {
  __name: "checkout-product",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => {
      }
    },
    currency: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { formatToDayAndMonth } = useDateFormatter();
    const { totalPrice, totalPriceDiscountValue, priceCat4 } = useProductPrice(props.product);
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_UiImg = _sfc_main$a;
      const _component_CheckoutProductPrice = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkout-product", {
          "checkout-product__out-of-stock": !__props.product.available_quantity
        }]
      }, _attrs))} data-v-3dba85d7><div class="checkout-product_info" data-v-3dba85d7><div class="checkout-product_image-container" data-v-3dba85d7>`);
      if ((_a = __props.product) == null ? void 0 : _a.photo_url) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: (_b = __props.product) == null ? void 0 : _b.photo_url,
          alt: ((_d = (_c = __props.product) == null ? void 0 : _c.name) == null ? void 0 : _d[unref(locale)]) || ((_f = (_e = __props.product) == null ? void 0 : _e.name) == null ? void 0 : _f["en"]),
          class: "checkout-product_image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="checkout-product_quantity" data-v-3dba85d7>${ssrInterpolate((_g = __props.product) == null ? void 0 : _g.ordered_quantity)}</span></div><div data-v-3dba85d7><p class="checkout-product_name" data-v-3dba85d7>${ssrInterpolate(((_i = (_h = __props.product) == null ? void 0 : _h.name) == null ? void 0 : _i[unref(locale)]) || ((_k = (_j = __props.product) == null ? void 0 : _j.name) == null ? void 0 : _k["en"]))}</p>`);
      if ((_l = __props.product) == null ? void 0 : _l.is_npi_state) {
        _push(`<p class="checkout-product_date" data-v-3dba85d7>`);
        if ((_m = __props.product) == null ? void 0 : _m.preorder_date) {
          _push(`<span data-v-3dba85d7>${ssrInterpolate(_ctx.$t("preorder"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.product.preorder_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_n = __props.product) == null ? void 0 : _n.delivery_date) {
          _push(`<span data-v-3dba85d7>${ssrInterpolate(_ctx.$t("availible"))} ${ssrInterpolate(unref(formatToDayAndMonth)(__props.product.delivery_date))}. </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="checkout-product_price-container" data-v-3dba85d7><div class="checkout-product_price" data-v-3dba85d7>`);
      _push(ssrRenderComponent(_component_CheckoutProductPrice, {
        currency: __props.currency,
        "total-price": unref(totalPrice),
        "total-price-discount": unref(totalPriceDiscountValue),
        cat4: unref(priceCat4)
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-products/checkout-product.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3dba85d7"]]);
const _sfc_main$7 = {
  __name: "checkout-products",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      default: () => {
      }
    },
    isOrderSummaryTop: {
      type: Boolean,
      default: false
    },
    isOpenContent: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: Boolean,
      default: false
    },
    noMarginBottom: {
      type: Boolean,
      default: false
    },
    isRepeatPayment: {
      type: Boolean,
      default: false
    },
    isTradeIn: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { userDevicesTotalPrice, userDevicesTopUp, resetStore } = useTradeInStore();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const showProducts = ref(true);
    const showContent = ref(props.isOpenContent);
    const orderProducts = computed(
      () => {
        var _a;
        return filterOutDeliveryProducts((_a = props.order) == null ? void 0 : _a.products);
      }
    );
    const getCartPositionsQuantity = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.ordered_quantity;
      }
    );
    const currency = computed(() => {
      var _a, _b;
      return (_b = (_a = props.order) == null ? void 0 : _a.payment) == null ? void 0 : _b.currency;
    });
    const totalPriceWithDiscount = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_price_with_discount;
      }
    );
    const totalTradeInTopUp = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_trade_in_grade_price_with_topup) - ((_d = (_c = props.order) == null ? void 0 : _c.total) == null ? void 0 : _d.total_trade_in_grade_price) || userDevicesTopUp.value;
      }
    );
    const totalTradeInGradePrice = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_trade_in_grade_price) || userDevicesTotalPrice.value - userDevicesTopUp.value;
      }
    );
    const formattedTradeInPrice = computed(
      () => totalTradeInGradePrice.value ? `-${formatPriceWithSpaces(totalTradeInGradePrice.value)}` : 0
    );
    const totalPrice = computed(() => {
      if (!props.isTradeIn) {
        return totalPriceWithDiscount.value;
      }
      return totalPriceWithDiscount.value > totalTradeInGradePrice.value ? totalPriceWithDiscount.value - totalTradeInGradePrice.value - totalTradeInTopUp.value : 1;
    });
    const deliveryType = computed(() => {
      var _a, _b;
      return (_b = (_a = props.order) == null ? void 0 : _a.delivery) == null ? void 0 : _b.type;
    });
    const deliveryPrice = computed(() => {
      var _a, _b;
      return (_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.delivery_price;
    });
    const deliveryPriceWithDiscountWithoutDelivery = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_price_with_discount_without_delivery;
      }
    );
    const buttonText = computed(() => {
      if (props.isOrderSummaryTop) {
        return showContent.value ? "hide_order_summary" : "show_order_summary";
      }
      return showProducts.value ? "hide" : "show";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_CurrencyText = __nuxt_component_1$1;
      const _component_CheckoutProduct = __nuxt_component_2$1;
      if (unref(orderProducts)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["checkout-products", {
            "checkout-products__border": __props.isOrderSummaryTop && unref(showContent)
          }]
        }, _attrs))} data-v-92424cef>`);
        if (__props.showHeader) {
          _push(`<div class="${ssrRenderClass([{
            "checkout-products_header__show-border": __props.isOrderSummaryTop,
            "checkout-products_header__vertical-padding": __props.isOrderSummaryTop
          }, "checkout-products_header"])}" data-v-92424cef><div class="${ssrRenderClass([{
            "checkout-products_header-wrapper__with-padding": __props.isOrderSummaryTop
          }, "checkout-products_header-wrapper"])}" data-v-92424cef><button class="checkout-products_header-content" data-v-92424cef>`);
          if (!__props.isOrderSummaryTop) {
            _push(`<span class="checkout-products_title" data-v-92424cef>${ssrInterpolate(_ctx.$t("order_summary"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="checkout-products_button" data-v-92424cef><span class="checkout-products_button-text" data-v-92424cef>${ssrInterpolate(_ctx.$t(unref(buttonText)))}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: ["checkout-products_button-icon", {
              rotate: __props.isOrderSummaryTop ? !unref(showContent) : !unref(showProducts)
            }],
            icon: "arrowTop"
          }, null, _parent));
          _push(`</div>`);
          if (__props.isOrderSummaryTop) {
            _push(`<span class="checkout-products_header-price" data-v-92424cef>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(totalPrice)))} `);
            _push(ssrRenderComponent(_component_CurrencyText, {
              currency: unref(currency),
              "use-default": ""
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{
          "checkout-products_content__show": unref(showContent),
          "checkout-products_content__hide": !unref(showContent),
          "checkout-products_content__max-width": __props.maxWidth
        }, "checkout-products_content"])}" data-v-92424cef><div class="${ssrRenderClass([{
          "checkout-products_content-wrapper__padding": __props.isOrderSummaryTop
        }, "checkout-products_content-wrapper"])}" data-v-92424cef><div class="${ssrRenderClass([{
          "checkout-products_list-products__show": unref(showProducts),
          "checkout-products_list-products__hide": !unref(showProducts)
        }, "checkout-products_list-products"])}" data-v-92424cef><!--[-->`);
        ssrRenderList(unref(orderProducts), (product) => {
          _push(`<div data-v-92424cef>`);
          _push(ssrRenderComponent(_component_CheckoutProduct, {
            product,
            currency: unref(currency)
          }, null, _parent));
          if (product.bundle_pairing_cms_id && product.bundle_pairing.products) {
            _push(`<!--[-->`);
            ssrRenderList(product.bundle_pairing.products, (bundleProduct, bundleKey) => {
              _push(ssrRenderComponent(_component_CheckoutProduct, {
                key: `bundle-${product.crm_id}-${bundleKey}`,
                product: bundleProduct,
                currency: unref(currency)
              }, null, _parent));
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="${ssrRenderClass([{
          "checkout-products_additional-prices__no-margin-bottom": __props.noMarginBottom
        }, "checkout-products_additional-prices"])}" data-v-92424cef><p class="checkout-products_prices-text" data-v-92424cef>${ssrInterpolate(_ctx.$t("subtotal"))} `);
        if (unref(getCartPositionsQuantity) > 1) {
          _push(`<!--[--> \u2022 ${ssrInterpolate(unref(getCartPositionsQuantity))} ${ssrInterpolate(_ctx.$t("subtotal_pieces"))}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(deliveryPriceWithDiscountWithoutDelivery)))} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: unref(currency),
          "use-default": ""
        }, null, _parent));
        _push(`</span></p>`);
        if (__props.isTradeIn) {
          _push(`<!--[--><p class="checkout-products_prices-text" data-v-92424cef>${ssrInterpolate(_ctx.$t("trade_in_benefit"))} <span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(unref(formattedTradeInPrice))} `);
          _push(ssrRenderComponent(_component_CurrencyText, {
            currency: unref(currency),
            "use-default": ""
          }, null, _parent));
          _push(`</span></p>`);
          if (unref(totalTradeInTopUp) > 0) {
            _push(`<p class="checkout-products_prices-text" data-v-92424cef>${ssrInterpolate(_ctx.$t("trade_in_additional_benefit"))} <span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(`-${unref(formatPriceWithSpaces)(unref(totalTradeInTopUp))}`)} `);
            _push(ssrRenderComponent(_component_CurrencyText, {
              currency: unref(currency),
              "use-default": ""
            }, null, _parent));
            _push(`</span></p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="checkout-products_prices-text" data-v-92424cef>${ssrInterpolate(_ctx.$t("shipping"))} `);
        if (unref(deliveryType) || __props.isRepeatPayment) {
          _push(`<!--[-->`);
          if (unref(deliveryPrice)) {
            _push(`<span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(deliveryPrice)))} `);
            _push(ssrRenderComponent(_component_CurrencyText, {
              currency: unref(currency),
              "use-default": ""
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(_ctx.$t("free"))}</span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<span data-v-92424cef>${ssrInterpolate(_ctx.$t("enter_shipping_address"))}</span>`);
        }
        _push(`</p></div>`);
        if (__props.showTotal) {
          _push(`<p class="checkout-products_prices-text checkout-products_price-total" data-v-92424cef>${ssrInterpolate(_ctx.$t(__props.isTradeIn ? "preliminary_total_cost" : "total"))} <span class="checkout-products_prices-value" data-v-92424cef>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(totalPrice)))} `);
          _push(ssrRenderComponent(_component_CurrencyText, {
            currency: unref(currency),
            "use-default": ""
          }, null, _parent));
          _push(`</span></p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.isTradeIn) {
          _push(`<p class="checkout-products_trade-in-hint" data-v-92424cef>${ssrInterpolate(_ctx.$t("trade_in_benefit_message"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-products/checkout-products.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-92424cef"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "UiRadioAccordion",
  __ssrInlineRender: true,
  props: {
    value: {},
    modelValue: {},
    name: {},
    errors: {},
    disabled: { type: Boolean },
    type: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const slots = useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["radio-accordion", { error: (_a = _ctx.errors) == null ? void 0 : _a.length }]
      }, _attrs))} data-v-bf44a8db><input${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        id: String(_ctx.value),
        class: "radio-accordion_input",
        type: "radio",
        name: _ctx.name,
        disabled: _ctx.disabled,
        value: _ctx.value
      }))} data-v-bf44a8db><label class="radio-accordion_label"${ssrRenderAttr("for", String(_ctx.value))} data-v-bf44a8db>`);
      ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
      _push(`</label>`);
      if (slots.content) {
        _push(`<div class="radio-accordion_content" data-v-bf44a8db>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.errors) {
        _push(`<div class="radio-accordion_errors" data-v-bf44a8db><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span data-v-bf44a8db>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiRadioAccordion/UiRadioAccordion.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bf44a8db"]]);
const _sfc_main$5 = {
  __name: "checkout-tooltip",
  __ssrInlineRender: true,
  props: {
    paymentsLength: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const showTooltip = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkout-tooltip", { "checkout-tooltip_one-payment": __props.paymentsLength === 1 }]
      }, _attrs))} data-v-b616ae03><div class="${ssrRenderClass([{ active: unref(showTooltip) }, "checkout-tooltip_wrapper"])}" data-v-b616ae03><div class="checkout-tooltip_content" data-v-b616ae03>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div><div class="checkout-tooltip_arrow-down" data-v-b616ae03></div></div><div class="checkout-tooltip_button" data-v-b616ae03>`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment/components/checkout-tooltip/checkout-tooltip.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b616ae03"]]);
const checkoutPath = `${PUBLIC_PREFIX}cart/checkout`;
const configPath = `${PUBLIC_PREFIX}cart/config`;
const pickupPointsPath = `${PUBLIC_PREFIX}cart/checkout/delivery/pickup-points`;
const citiesPath = `${PUBLIC_PREFIX}cities/zipcode`;
const deliveryTypesPath = `${PUBLIC_PREFIX}cart/checkout/delivery/types`;
const uploadCartDocumentsPath = `${PUBLIC_PREFIX}files/upload-cart-documents`;
const CheckoutApiService = {
  async updateCheckout(form) {
    const { patch, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    return patch(checkoutPath, form);
  },
  async submitCheckout(form) {
    const { post, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    return post(checkoutPath, form);
  },
  async checkPayment(id) {
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const { data } = await get(`${checkoutPath}/${id}/payment`);
    return {
      data: data.value
    };
  },
  async getCheckoutConfigs(params) {
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const { data } = await get(configPath, params);
    return {
      data: data.value
    };
  },
  async getCitiesByZipCode(zipCode, params = {}) {
    const { get } = useApi();
    const { data } = await get(`${citiesPath}/${zipCode}`, params);
    return {
      data: data.value
    };
  },
  async getPickupPoints(params) {
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const { data } = await get(pickupPointsPath, params);
    return {
      data: data.value
    };
  },
  async getDeliveryTypes(params) {
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const { data } = await get(deliveryTypesPath, params);
    return {
      data: data.value
    };
  },
  async uploadCartDocuments(params) {
    const { post } = useApi();
    return post(uploadCartDocumentsPath, {
      type: "shopping_cart",
      project_id: 4,
      site_ids: [1],
      file: {
        type: params.type,
        name: params.name,
        content: params.content
      }
    });
  },
  async getOrderData(params = { checkoutID: "", contactID: "" }) {
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const link = `${checkoutPath}/${params.checkoutID}`;
    const { data } = await get(link, {
      contact_id: params.contactID
    });
    return {
      data: data.value
    };
  }
};
const zipCodeMaxLength = {
  CY: [4, 5],
  PL: [5],
  UZ: [5, 6],
  KZ: [5, 6]
};
const zipCodeMask = {
  CY: "#####",
  PL: "##-###",
  UZ: "######",
  KZ: "######",
  AZ: "######"
};
const useZipCodeUtils = () => {
  var _a;
  const $config = useRuntimeConfig();
  const { currentCountry } = $config.public;
  const zipIsMaxLength = (zipCode) => zipCodeMaxLength[currentCountry].includes(zipCode == null ? void 0 : zipCode.length);
  const getCityByZipCode = async (zip) => {
    if (zipIsMaxLength(zip) === false) {
      return null;
    }
    const zipCode = zip.replace(/[^+\d]/g, "");
    try {
      const { data } = await CheckoutApiService.getCitiesByZipCode(zipCode);
      const cities = data.data;
      if (cities.length) {
        const cityName = cities[0].name;
        if (cityName === void 0) return null;
        return cityName;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return {
    getCityByZipCode,
    zipCodeMask: zipCodeMask[currentCountry],
    zipCodeMaxLength: ((_a = zipCodeMaxLength[currentCountry]) == null ? void 0 : _a.length) ? Math.max(...zipCodeMaxLength[currentCountry]) : Infinity
  };
};
const _sfc_main$4 = {
  __name: "checkout-payment-form",
  __ssrInlineRender: true,
  props: {
    defaultForm: {
      type: Object,
      default: () => {
      }
    },
    formConfig: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getErrors } = useFormUtils();
    const fieldErrors = (name) => getErrors(props.validate[name]);
    const { zipCodeMask: zipCodeMask2 } = useZipCodeUtils();
    const formData = ref({ ...props.defaultForm });
    const inputField = ($event, name) => {
      emit("input", { value: $event.target.value, name });
    };
    const checkRequiredField = (field) => {
      var _a;
      if ((_a = field.validations) == null ? void 0 : _a.length) {
        return field.validations.some((rule) => (rule == null ? void 0 : rule.rule) === "required");
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhoneInput = __nuxt_component_4$1;
      const _component_TextInput = _sfc_main$b;
      const _directive_maska = resolveDirective("maska");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-payment-form" }, _attrs))} data-v-b15e19f7><!--[-->`);
      ssrRenderList(__props.formConfig.fields, (field) => {
        _push(`<div data-v-b15e19f7>`);
        if (field.name === "phone") {
          _push(ssrRenderComponent(_component_PhoneInput, {
            modelValue: unref(formData)[field.name],
            "onUpdate:modelValue": ($event) => unref(formData)[field.name] = $event,
            type: "phone",
            label: field.name,
            disabled: __props.loading,
            errors: fieldErrors(field.name),
            height: 55,
            required: checkRequiredField(field),
            onBlur: ($event) => {
              var _a;
              return (_a = __props.validate[field.name]) == null ? void 0 : _a.$touch();
            },
            onInput: ($event) => inputField($event, field.name)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (field.name === "email") {
          _push(ssrRenderComponent(_component_TextInput, {
            modelValue: unref(formData)[field.name],
            "onUpdate:modelValue": ($event) => unref(formData)[field.name] = $event,
            type: "email",
            label: field.name,
            errors: fieldErrors(field.name),
            height: 55,
            disabled: __props.loading,
            required: checkRequiredField(field),
            onBlur: ($event) => {
              var _a;
              return (_a = __props.validate[field.name]) == null ? void 0 : _a.$touch();
            },
            onInput: ($event) => inputField($event, field.name)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (field.name === "post_index") {
          _push(ssrRenderComponent(_component_TextInput, mergeProps({
            modelValue: unref(formData)[field.name],
            "onUpdate:modelValue": ($event) => unref(formData)[field.name] = $event,
            height: 55,
            maxlength: "6",
            autocomplete: field.name,
            errors: fieldErrors(field.name),
            type: "number",
            label: field.name,
            disabled: __props.loading,
            required: checkRequiredField(field),
            onBlur: ($event) => {
              var _a;
              return (_a = __props.validate[field.name]) == null ? void 0 : _a.$touch();
            },
            onInput: ($event) => inputField($event, field.name)
          }, ssrGetDirectiveProps(_ctx, _directive_maska, unref(zipCodeMask2))), null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (field.name !== "email" && field.name !== "phone" && field.name !== "post_index") {
          _push(ssrRenderComponent(_component_TextInput, {
            modelValue: unref(formData)[field.name],
            "onUpdate:modelValue": ($event) => unref(formData)[field.name] = $event,
            height: 55,
            label: field.name,
            autocomplete: field.name,
            errors: fieldErrors(field.name),
            disabled: __props.loading,
            type: "text",
            maxlength: 100,
            required: checkRequiredField(field),
            onBlur: ($event) => {
              var _a;
              return (_a = __props.validate[field.name]) == null ? void 0 : _a.$touch();
            },
            onInput: ($event) => inputField($event, field.name)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment/components/checkout-payment-form/checkout-payment-form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b15e19f7"]]);
const _sfc_main$3 = {
  __name: "checkout-payment-item",
  __ssrInlineRender: true,
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { t, te } = useI18n();
    const minPercent = computed(
      () => {
        var _a, _b, _c;
        return Math.min(
          ...(_c = (_b = (_a = props.payment) == null ? void 0 : _a.credit_params) == null ? void 0 : _b.programs) == null ? void 0 : _c.map(
            (program) => program == null ? void 0 : program.bank_commission_percent
          )
        );
      }
    );
    const formattedCreditDetails = computed(() => {
      const isCreditPercentDefined = te("credit_percent");
      const percentValue = isCreditPercentDefined ? `${minPercent.value}${t("credit_percent")}` : "";
      return `${t(`payment_credit`)} ${percentValue}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-payment-item" }, _attrs))} data-v-948f93df><span class="checkout-payment-item_label" data-v-948f93df>`);
      if (__props.payment.type === "credit") {
        _push(`<!--[-->${ssrInterpolate(unref(formattedCreditDetails))}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.$t(`payment_${__props.payment.name}`))}</span>`);
      if (unref(Icons)[__props.payment.name]) {
        _push(`<div class="checkout-payment-item_icon" data-v-948f93df>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: __props.payment.name,
          "container-size": ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment/components/checkout-payment-item/checkout-payment-item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-948f93df"]]);
const useSaveCheckout = () => {
  const getter = (key) => {
    const data = typeof localStorage !== "undefined" ? localStorage.getItem(key) : null;
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };
  const saveCountryData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("countrySaveData", JSON.stringify(data));
  };
  const getCountryData = () => getter("countrySaveData");
  const saveClientData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("clientSaveData", JSON.stringify(data));
  };
  const getClientData = () => getter("clientSaveData");
  const saveDeliveryData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("deliverySaveData", JSON.stringify(data));
  };
  const getDeliveryData = () => getter("deliverySaveData");
  const saveBaseData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("baseSaveData", JSON.stringify(data));
  };
  const getBaseData = () => getter("baseSaveData");
  const savePaymentData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("paymentSaveData", JSON.stringify(data));
  };
  const getPaymentData = () => getter("paymentSaveData");
  const getSearchData = () => getter("searchSaveData");
  const saveSearchData = (data) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("searchSaveData", JSON.stringify(data));
  };
  const saveLocale = (value) => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("locale", JSON.stringify(value));
  };
  const getLocale = () => getter("locale");
  const getRedirectUrl = (checkoutId, contactID, payment) => {
    if (!payment || typeof payment !== "object" || (payment == null ? void 0 : payment.status) === "error") {
      return `/checkout/${checkoutId}?contact_id=${contactID}`;
    }
    switch (payment.type) {
      case null:
      case "init_brokerage_kz_widget":
        return `/checkout/${checkoutId}?contact_id=${contactID}`;
      case "generate_qr_with_logo":
        return `/checkout/${checkoutId}?contact_id=${contactID}`;
      case "liq_apple_pay":
        return `/checkout/${checkoutId}/apple?contact_id=${contactID}`;
      default:
        return `/checkout/${checkoutId}/redirect?contact_id=${contactID}`;
    }
  };
  return {
    saveCountryData,
    saveSearchData,
    saveDeliveryData,
    saveClientData,
    saveBaseData,
    savePaymentData,
    getSearchData,
    getBaseData,
    getPaymentData,
    getDeliveryData,
    getClientData,
    getCountryData,
    getRedirectUrl,
    saveLocale,
    getLocale
  };
};
function isSafariOnIOS() {
  return /iPhone|iPad|iPod/.test((void 0).userAgent) && /^((?!chrome|android).)*safari/i.test((void 0).userAgent);
}
const APPLE_PAY = "apple_pay";
const usePaymentFilter = () => {
  const getDefaultProgramValue = (programs, cart) => {
    if (cart == null ? void 0 : cart.payment.credit_program_id) {
      const data = programs.filter(
        (item) => item.id === cart.payment.credit_program_id
      );
      if (data.length) {
        return data[0];
      }
      return programs[0];
    }
    return programs[0];
  };
  const refactorPaymentData = (payment) => ({
    credit_program_id: payment == null ? void 0 : payment.credit_program_id,
    currency: payment == null ? void 0 : payment.currency,
    group: (payment == null ? void 0 : payment.group) || (payment == null ? void 0 : payment.type),
    main_type: payment == null ? void 0 : payment.main_type,
    name: payment == null ? void 0 : payment.type,
    type: payment == null ? void 0 : payment.type
  });
  const filterPayments = (payments) => payments == null ? void 0 : payments.filter((paymentValue) => {
    if (paymentValue.name === APPLE_PAY) {
      return isSafariOnIOS() && paymentValue.enabled;
    }
    return paymentValue.enabled;
  });
  return {
    filterPayments,
    getDefaultProgramValue,
    refactorPaymentData
  };
};
const _sfc_main$2 = {
  __name: "checkout-payment",
  __ssrInlineRender: true,
  props: {
    creditValue: {
      type: Object,
      default: () => {
      }
    },
    currency: {
      type: String,
      required: true
    },
    currentCart: {
      type: Object,
      default: () => {
      }
    },
    defaultForm: {
      type: Object,
      default: () => {
      }
    },
    formConfig: {
      type: Object,
      default: () => {
      }
    },
    formRules: {
      type: Object,
      default: () => {
      }
    },
    installmentErrors: {
      type: Object,
      default: () => {
      }
    },
    installmentForm: {
      type: Object,
      default: () => {
      }
    },
    isTitleShown: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    payments: {
      type: Array,
      required: true
    },
    validate: {
      type: Object,
      default: () => {
      }
    },
    value: {
      type: Object,
      default: () => {
      }
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changeCredit", "change", "selectCredit", "input"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d;
    const props = __props;
    const emit = __emit;
    const isTradeInProductSelected = inject("isTradeInProductSelected");
    if (props.value) {
      emit("change", props.value);
    }
    const defaultCredits = ref({});
    const defaultCreditsTerm = ref(
      (_c = (_b = (_a = props.currentCart.total) == null ? void 0 : _a.credit) == null ? void 0 : _b.schedule) == null ? void 0 : _c.length
    );
    const { pushGtmEvent } = useGtm();
    const { savePaymentData } = useSaveCheckout();
    const { getDefaultProgramValue } = usePaymentFilter();
    const { currencyMark } = useCurrencyMark(props.currency);
    const filteredPaymentsSliced = (payments, sliceStart = 2, sliceEnd) => payments == null ? void 0 : payments.slice(sliceStart, sliceEnd);
    const cartPaymentGroups = computed(() => {
      const paymentGroups = {};
      props.payments.forEach((payment) => {
        var _a2;
        const key = payment.group || payment.name;
        if (!paymentGroups[key]) {
          paymentGroups[key] = [];
        }
        paymentGroups[key].push(payment);
        if (payment.group === "credit_and_installment") {
          defaultCredits.value[payment.name] = getDefaultProgramValue(
            ((_a2 = payment == null ? void 0 : payment.credit_params) == null ? void 0 : _a2.programs) || [],
            props.currentCart
          );
        }
      });
      return Object.keys(paymentGroups).map((group) => ({
        groupName: group,
        tradeInDisabled: !paymentGroups[group][0].is_trade_in,
        payments: paymentGroups[group]
      }));
    });
    const selectedPaymentGroup = ref((_d = cartPaymentGroups.value[0]) == null ? void 0 : _d.groupName);
    watch(
      () => props.isOpened,
      (value) => {
        var _a2;
        if (value) {
          selectedPaymentGroup.value = (_a2 = props.currentCart.payment.group) != null ? _a2 : props.currentCart.payment.type;
        }
      }
    );
    const creditPayment = computed({
      get() {
        return props.creditValue;
      },
      set(value) {
        savePaymentData(value);
        emit("changeCredit", value);
      }
    });
    const creditType = ref({});
    watch(
      () => creditType.value,
      (value) => {
        const paymentGroup = cartPaymentGroups.value.find(
          (item) => item.groupName === selectedPaymentGroup.value
        );
        if (paymentGroup) {
          const payment = paymentGroup.payments.find(
            (payment2) => payment2.name === value
          );
          if (payment) {
            currentPayment.value = payment;
          }
        }
      }
    );
    const currentPayment = computed({
      get() {
        return props.value;
      },
      set(value) {
        var _a2, _b2, _c2;
        if (value.type === "credit") {
          creditPayment.value = value;
        } else {
          emit("change", value);
          savePaymentData({
            group: selectedPaymentGroup.value,
            ...value
          });
        }
        if (((_b2 = (_a2 = props.currentCart) == null ? void 0 : _a2.payment) == null ? void 0 : _b2.type) !== value.type) {
          pushGtmEvent(
            "addPaymentInfo",
            (_c2 = props.currentCart) == null ? void 0 : _c2.products.map((product) => ({
              ...product,
              quantity: (product == null ? void 0 : product.ordered_quantity) || 1
            })),
            {
              paymentType: value.type
            }
          );
        }
      }
    });
    watch(selectedPaymentGroup, () => {
      var _a2, _b2;
      const payments = (_a2 = cartPaymentGroups.value.find(
        (item) => (item == null ? void 0 : item.groupName) === selectedPaymentGroup.value
      )) == null ? void 0 : _a2.payments;
      const foundedPayment = payments == null ? void 0 : payments.find(
        (payment) => {
          var _a3, _b3;
          return payment.name === ((_a3 = currentPayment.value) == null ? void 0 : _a3.type) || payment.name === ((_b3 = currentPayment.value) == null ? void 0 : _b3.name);
        }
      );
      const value = foundedPayment || (payments == null ? void 0 : payments[0]);
      if (selectedPaymentGroup.value !== "credit_and_installment" || value.type === "payment") {
        if (((_b2 = currentPayment.value) == null ? void 0 : _b2.type) !== value.name) {
          currentPayment.value = { main_type: value.type, type: value.name };
        }
      } else if (!creditPayment.value) {
        currentPayment.value = value;
      }
    });
    const changePaymentType = (group) => {
      var _a2;
      if ((group == null ? void 0 : group.groupName) && ((_a2 = group.payments) == null ? void 0 : _a2.length) <= 1) {
        selectedPaymentGroup.value = group.groupName;
      }
    };
    watch(
      () => {
        var _a2, _b2;
        return (_b2 = (_a2 = props.currentCart.total) == null ? void 0 : _a2.credit) == null ? void 0 : _b2.schedule;
      },
      (value) => {
        var _a2, _b2, _c2;
        if (value) {
          defaultCreditsTerm.value = (_c2 = (_b2 = (_a2 = props.currentCart.total) == null ? void 0 : _a2.credit) == null ? void 0 : _b2.schedule) == null ? void 0 : _c2.length;
        }
      }
    );
    watch(
      () => defaultCreditsTerm.value,
      (value) => {
        var _a2, _b2;
        if (value) {
          emit("selectCredit", {
            credit_program_id: (_b2 = (_a2 = currentPayment.value.credit_params) == null ? void 0 : _a2.programs.find(
              (item) => item.term === value
            )) == null ? void 0 : _b2.id,
            main_type: currentPayment.value.type,
            type: currentPayment.value.name
          });
        }
      }
    );
    watch(
      () => isTradeInProductSelected == null ? void 0 : isTradeInProductSelected.value,
      (value) => {
        if (value) {
          const activeGroup = cartPaymentGroups.value.find(
            (group) => !group.tradeInDisabled
          );
          if (activeGroup) {
            selectedPaymentGroup.value = activeGroup.groupName;
          }
        }
      }
    );
    const formatMonthlyPayment = (monthlyPayment) => `${new Intl.NumberFormat("ru-Ru").format(monthlyPayment)}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRadioAccordion = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_CheckoutTooltip = __nuxt_component_2;
      const _component_CheckoutPaymentForm = __nuxt_component_3;
      const _component_CheckoutPaymentItem = __nuxt_component_4;
      const _component_UiSelect = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-payment" }, _attrs))} data-v-7c2e09ac>`);
      if (__props.isTitleShown) {
        _push(`<!--[--><h3 class="checkout-payment_title" data-v-7c2e09ac>${ssrInterpolate(_ctx.$t("payment"))}</h3><p class="checkout-payment_description" data-v-7c2e09ac>${ssrInterpolate(_ctx.$t("payment_description"))}</p>`);
        if (unref(isTradeInProductSelected)) {
          _push(`<p class="checkout-payment_hint" data-v-7c2e09ac>${ssrInterpolate(_ctx.$t("payment_trade_in_disabled"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="checkout-payment_groups" data-v-7c2e09ac><!--[-->`);
      ssrRenderList(unref(cartPaymentGroups), (paymentGroup) => {
        var _a2, _b2, _c2, _d2, _e;
        _push(ssrRenderComponent(_component_UiRadioAccordion, {
          key: paymentGroup.groupName,
          modelValue: unref(selectedPaymentGroup),
          "onUpdate:modelValue": ($event) => isRef(selectedPaymentGroup) ? selectedPaymentGroup.value = $event : null,
          name: paymentGroup.groupName,
          value: paymentGroup.groupName,
          disabled: __props.loading || paymentGroup.tradeInDisabled && !!unref(isTradeInProductSelected),
          checked: unref(selectedPaymentGroup) === paymentGroup.groupName
        }, createSlots({
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`payment_${paymentGroup.groupName}`))} <div class="checkout-payment_icons" data-v-7c2e09ac${_scopeId}><!--[-->`);
              ssrRenderList(filteredPaymentsSliced(
                paymentGroup.payments,
                0,
                2
              ), (payment) => {
                _push2(`<!--[-->`);
                if (unref(Icons)[payment == null ? void 0 : payment.name]) {
                  _push2(`<div class="checkout-payment_icon" data-v-7c2e09ac${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    icon: payment.name,
                    "container-size": ""
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
              if (((_a3 = paymentGroup == null ? void 0 : paymentGroup.payments) == null ? void 0 : _a3.length) > 2) {
                _push2(ssrRenderComponent(_component_CheckoutTooltip, {
                  "payments-length": filteredPaymentsSliced(paymentGroup.payments).length
                }, {
                  button: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b4;
                    if (_push3) {
                      _push3(`<div class="checkout-payment_icon checkout-payment_icon__cursor-pointer" data-v-7c2e09ac${_scopeId2}><span class="checkout-payment_icon-text" data-v-7c2e09ac${_scopeId2}> +${ssrInterpolate(((_a4 = paymentGroup == null ? void 0 : paymentGroup.payments) == null ? void 0 : _a4.length) - 2)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "checkout-payment_icon checkout-payment_icon__cursor-pointer" }, [
                          createVNode("span", { class: "checkout-payment_icon-text" }, " +" + toDisplayString(((_b4 = paymentGroup == null ? void 0 : paymentGroup.payments) == null ? void 0 : _b4.length) - 2), 1)
                        ])
                      ];
                    }
                  }),
                  content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(filteredPaymentsSliced(
                        paymentGroup.payments
                      ), (payment) => {
                        _push3(`<div class="checkout-payment_icon" data-v-7c2e09ac${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          icon: payment.name,
                          "container-size": ""
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredPaymentsSliced(
                          paymentGroup.payments
                        ), (payment) => {
                          return openBlock(), createBlock("div", {
                            key: payment.name,
                            class: "checkout-payment_icon"
                          }, [
                            createVNode(_component_Icon, {
                              icon: payment.name,
                              "container-size": ""
                            }, null, 8, ["icon"])
                          ]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`payment_${paymentGroup.groupName}`)) + " ", 1),
                createVNode("div", { class: "checkout-payment_icons" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredPaymentsSliced(
                    paymentGroup.payments,
                    0,
                    2
                  ), (payment) => {
                    return openBlock(), createBlock(Fragment, {
                      key: payment.name
                    }, [
                      unref(Icons)[payment == null ? void 0 : payment.name] ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "checkout-payment_icon"
                      }, [
                        createVNode(_component_Icon, {
                          icon: payment.name,
                          "container-size": ""
                        }, null, 8, ["icon"])
                      ])) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  ((_b3 = paymentGroup == null ? void 0 : paymentGroup.payments) == null ? void 0 : _b3.length) > 2 ? (openBlock(), createBlock(_component_CheckoutTooltip, {
                    key: 0,
                    "payments-length": filteredPaymentsSliced(paymentGroup.payments).length
                  }, {
                    button: withCtx(() => {
                      var _a4;
                      return [
                        createVNode("div", { class: "checkout-payment_icon checkout-payment_icon__cursor-pointer" }, [
                          createVNode("span", { class: "checkout-payment_icon-text" }, " +" + toDisplayString(((_a4 = paymentGroup == null ? void 0 : paymentGroup.payments) == null ? void 0 : _a4.length) - 2), 1)
                        ])
                      ];
                    }),
                    content: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredPaymentsSliced(
                        paymentGroup.payments
                      ), (payment) => {
                        return openBlock(), createBlock("div", {
                          key: payment.name,
                          class: "checkout-payment_icon"
                        }, [
                          createVNode(_component_Icon, {
                            icon: payment.name,
                            "container-size": ""
                          }, null, 8, ["icon"])
                        ]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["payments-length"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, [
          unref(selectedPaymentGroup) === "cashless_payment" && ((_a2 = __props.formConfig) == null ? void 0 : _a2.fields) || paymentGroup.payments.length > 1 || ((_e = (_d2 = (_c2 = (_b2 = paymentGroup.payments) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.credit_params) == null ? void 0 : _d2.programs) == null ? void 0 : _e.length) > 1 ? {
            name: "content",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3, _c3, _d3, _e2, _f, _g, _h, _i, _j;
              if (_push2) {
                if (unref(selectedPaymentGroup) === "cashless_payment" && ((_a3 = __props.formConfig) == null ? void 0 : _a3.fields)) {
                  _push2(`<div class="checkout-payment_content" data-v-7c2e09ac${_scopeId}><div class="checkout-payment_content-wrapper checkout-payment_content-wrapper__padding" data-v-7c2e09ac${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_CheckoutPaymentForm, {
                    "default-form": __props.defaultForm,
                    "form-config": __props.formConfig,
                    "form-rules": __props.formRules,
                    loading: __props.loading,
                    validate: __props.validate,
                    onInput: ($event) => _ctx.$emit("input", $event)
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (paymentGroup.payments.length > 1 || ((_e2 = (_d3 = (_c3 = (_b3 = paymentGroup.payments) == null ? void 0 : _b3[0]) == null ? void 0 : _c3.credit_params) == null ? void 0 : _d3.programs) == null ? void 0 : _e2.length) > 1) {
                  _push2(`<div class="checkout-payment_radio-item" data-v-7c2e09ac${_scopeId}><!--[-->`);
                  ssrRenderList(paymentGroup.payments, (payment) => {
                    var _a4;
                    _push2(ssrRenderComponent(_component_UiRadioAccordion, {
                      key: payment.name,
                      modelValue: unref(creditType),
                      "onUpdate:modelValue": ($event) => isRef(creditType) ? creditType.value = $event : null,
                      name: payment.name,
                      disabled: __props.loading,
                      value: payment.name,
                      checked: ((_a4 = unref(currentPayment)) == null ? void 0 : _a4.name) === payment.name,
                      onChange: ($event) => changePaymentType(paymentGroup)
                    }, createSlots({
                      label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_CheckoutPaymentItem, { payment }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_CheckoutPaymentItem, { payment }, null, 8, ["payment"])
                          ];
                        }
                      }),
                      _: 2
                    }, [
                      payment.type === "credit" ? {
                        name: "content",
                        fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          var _a5, _b4, _c4, _d4, _e3, _f2;
                          if (_push3) {
                            _push3(`<div class="checkout-payment_content" data-v-7c2e09ac${_scopeId2}><div class="checkout-payment_content-wrapper" data-v-7c2e09ac${_scopeId2}>`);
                            if (((_a5 = __props.currentCart.total) == null ? void 0 : _a5.credit) && payment.credit_params.programs) {
                              _push3(ssrRenderComponent(_component_UiSelect, {
                                modelValue: unref(defaultCreditsTerm),
                                "onUpdate:modelValue": ($event) => isRef(defaultCreditsTerm) ? defaultCreditsTerm.value = $event : null,
                                disabled: __props.loading,
                                label: "term_number",
                                options: payment.credit_params.programs.map((program) => ({
                                  label: `${program.term} ${_ctx.$t("payments")}`,
                                  value: program.term
                                }))
                              }, null, _parent3, _scopeId2));
                            } else {
                              _push3(`<!---->`);
                            }
                            if ((_b4 = __props.formConfig) == null ? void 0 : _b4.fields) {
                              _push3(`<div class="checkout-payment_content-wrapper checkout-payment_content-wrapper__padding-top" data-v-7c2e09ac${_scopeId2}>`);
                              _push3(ssrRenderComponent(_component_CheckoutPaymentForm, {
                                "default-form": __props.defaultForm,
                                "form-config": __props.formConfig,
                                "form-rules": __props.formRules,
                                loading: __props.loading,
                                validate: __props.validate,
                                onInput: ($event) => _ctx.$emit("input", $event)
                              }, null, _parent3, _scopeId2));
                              _push3(`</div>`);
                            } else {
                              _push3(`<!---->`);
                            }
                            if ((_c4 = __props.currentCart.total) == null ? void 0 : _c4.credit) {
                              _push3(`<div class="checkout-payment_credit" data-v-7c2e09ac${_scopeId2}><div class="checkout-payment_credit-month" data-v-7c2e09ac${_scopeId2}><p class="checkout-payment_credit-month-title" data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(_ctx.$t("montly_payment"))}</p><p class="checkout-payment_credit-month-price" data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(formatMonthlyPayment(
                                __props.currentCart.total.credit.monthly_payment
                              ))} <span class="payment-credit_currency" data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(unref(currencyMark))}</span></p></div><div class="checkout-payment_credit-total" data-v-7c2e09ac${_scopeId2}><p data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(_ctx.$t("total_cost_in_credit"))}</p><p data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(formatMonthlyPayment(
                                __props.currentCart.total.credit.total_amount_with_interest
                              ))} <span class="payment-credit_currency" data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(unref(currencyMark))}</span></p></div><div class="checkout-payment_credit-total" data-v-7c2e09ac${_scopeId2}><p data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(_ctx.$t("order_cost_in_credit"))}</p><p data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(formatMonthlyPayment(
                                __props.currentCart.total.credit.total_amount_without_interest
                              ))} <span class="payment-credit_currency" data-v-7c2e09ac${_scopeId2}>${ssrInterpolate(unref(currencyMark))}</span></p></div></div>`);
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "checkout-payment_content" }, [
                                createVNode("div", { class: "checkout-payment_content-wrapper" }, [
                                  ((_d4 = __props.currentCart.total) == null ? void 0 : _d4.credit) && payment.credit_params.programs ? (openBlock(), createBlock(_component_UiSelect, {
                                    key: 0,
                                    modelValue: unref(defaultCreditsTerm),
                                    "onUpdate:modelValue": ($event) => isRef(defaultCreditsTerm) ? defaultCreditsTerm.value = $event : null,
                                    disabled: __props.loading,
                                    label: "term_number",
                                    options: payment.credit_params.programs.map((program) => ({
                                      label: `${program.term} ${_ctx.$t("payments")}`,
                                      value: program.term
                                    }))
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "options"])) : createCommentVNode("", true),
                                  ((_e3 = __props.formConfig) == null ? void 0 : _e3.fields) ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "checkout-payment_content-wrapper checkout-payment_content-wrapper__padding-top"
                                  }, [
                                    createVNode(_component_CheckoutPaymentForm, {
                                      "default-form": __props.defaultForm,
                                      "form-config": __props.formConfig,
                                      "form-rules": __props.formRules,
                                      loading: __props.loading,
                                      validate: __props.validate,
                                      onInput: ($event) => _ctx.$emit("input", $event)
                                    }, null, 8, ["default-form", "form-config", "form-rules", "loading", "validate", "onInput"])
                                  ])) : createCommentVNode("", true),
                                  ((_f2 = __props.currentCart.total) == null ? void 0 : _f2.credit) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "checkout-payment_credit"
                                  }, [
                                    createVNode("div", { class: "checkout-payment_credit-month" }, [
                                      createVNode("p", { class: "checkout-payment_credit-month-title" }, toDisplayString(_ctx.$t("montly_payment")), 1),
                                      createVNode("p", { class: "checkout-payment_credit-month-price" }, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.monthly_payment
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "checkout-payment_credit-total" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("total_cost_in_credit")), 1),
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.total_amount_with_interest
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "checkout-payment_credit-total" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("order_cost_in_credit")), 1),
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.total_amount_without_interest
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ];
                          }
                        }),
                        key: "0"
                      } : void 0
                    ]), _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(selectedPaymentGroup) === "cashless_payment" && ((_f = __props.formConfig) == null ? void 0 : _f.fields) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "checkout-payment_content"
                  }, [
                    createVNode("div", { class: "checkout-payment_content-wrapper checkout-payment_content-wrapper__padding" }, [
                      createVNode(_component_CheckoutPaymentForm, {
                        "default-form": __props.defaultForm,
                        "form-config": __props.formConfig,
                        "form-rules": __props.formRules,
                        loading: __props.loading,
                        validate: __props.validate,
                        onInput: ($event) => _ctx.$emit("input", $event)
                      }, null, 8, ["default-form", "form-config", "form-rules", "loading", "validate", "onInput"])
                    ])
                  ])) : createCommentVNode("", true),
                  paymentGroup.payments.length > 1 || ((_j = (_i = (_h = (_g = paymentGroup.payments) == null ? void 0 : _g[0]) == null ? void 0 : _h.credit_params) == null ? void 0 : _i.programs) == null ? void 0 : _j.length) > 1 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "checkout-payment_radio-item"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(paymentGroup.payments, (payment) => {
                      var _a4;
                      return openBlock(), createBlock(_component_UiRadioAccordion, {
                        key: payment.name,
                        modelValue: unref(creditType),
                        "onUpdate:modelValue": ($event) => isRef(creditType) ? creditType.value = $event : null,
                        name: payment.name,
                        disabled: __props.loading,
                        value: payment.name,
                        checked: ((_a4 = unref(currentPayment)) == null ? void 0 : _a4.name) === payment.name,
                        onChange: ($event) => changePaymentType(paymentGroup)
                      }, createSlots({
                        label: withCtx(() => [
                          createVNode(_component_CheckoutPaymentItem, { payment }, null, 8, ["payment"])
                        ]),
                        _: 2
                      }, [
                        payment.type === "credit" ? {
                          name: "content",
                          fn: withCtx(() => {
                            var _a5, _b4, _c4;
                            return [
                              createVNode("div", { class: "checkout-payment_content" }, [
                                createVNode("div", { class: "checkout-payment_content-wrapper" }, [
                                  ((_a5 = __props.currentCart.total) == null ? void 0 : _a5.credit) && payment.credit_params.programs ? (openBlock(), createBlock(_component_UiSelect, {
                                    key: 0,
                                    modelValue: unref(defaultCreditsTerm),
                                    "onUpdate:modelValue": ($event) => isRef(defaultCreditsTerm) ? defaultCreditsTerm.value = $event : null,
                                    disabled: __props.loading,
                                    label: "term_number",
                                    options: payment.credit_params.programs.map((program) => ({
                                      label: `${program.term} ${_ctx.$t("payments")}`,
                                      value: program.term
                                    }))
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "options"])) : createCommentVNode("", true),
                                  ((_b4 = __props.formConfig) == null ? void 0 : _b4.fields) ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "checkout-payment_content-wrapper checkout-payment_content-wrapper__padding-top"
                                  }, [
                                    createVNode(_component_CheckoutPaymentForm, {
                                      "default-form": __props.defaultForm,
                                      "form-config": __props.formConfig,
                                      "form-rules": __props.formRules,
                                      loading: __props.loading,
                                      validate: __props.validate,
                                      onInput: ($event) => _ctx.$emit("input", $event)
                                    }, null, 8, ["default-form", "form-config", "form-rules", "loading", "validate", "onInput"])
                                  ])) : createCommentVNode("", true),
                                  ((_c4 = __props.currentCart.total) == null ? void 0 : _c4.credit) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "checkout-payment_credit"
                                  }, [
                                    createVNode("div", { class: "checkout-payment_credit-month" }, [
                                      createVNode("p", { class: "checkout-payment_credit-month-title" }, toDisplayString(_ctx.$t("montly_payment")), 1),
                                      createVNode("p", { class: "checkout-payment_credit-month-price" }, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.monthly_payment
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "checkout-payment_credit-total" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("total_cost_in_credit")), 1),
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.total_amount_with_interest
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "checkout-payment_credit-total" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("order_cost_in_credit")), 1),
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(formatMonthlyPayment(
                                          __props.currentCart.total.credit.total_amount_without_interest
                                        )) + " ", 1),
                                        createVNode("span", { class: "payment-credit_currency" }, toDisplayString(unref(currencyMark)), 1)
                                      ])
                                    ])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ];
                          }),
                          key: "0"
                        } : void 0
                      ]), 1032, ["modelValue", "onUpdate:modelValue", "name", "disabled", "value", "checked", "onChange"]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment/checkout-payment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CheckoutPayment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7c2e09ac"]]);
const usePaymentValidationUtils = () => {
  const {
    defaultRequiredMessage,
    maxLengthMessage,
    lengthMessage,
    regExpMessage
  } = useFormUtils();
  const getValidationRules = (config) => {
    const rules = {};
    if (config && config.fields) {
      config.fields.forEach((field) => {
        field.validations.forEach((rule) => {
          switch (rule.rule) {
            case "required":
              rules[field.name] = {
                ...rules[field.name],
                defaultRequiredMessage
              };
              break;
            case "max":
              rules[field.name] = {
                ...rules[field.name],
                maxLength: maxLengthMessage(rule.value)
              };
              break;
            case "email":
              rules[field.name] = {
                ...rules[field.name],
                defaultRequiredMessage
              };
              break;
            case "min":
              rules[field.name] = {
                ...rules[field.name],
                minLength: lengthMessage(rule.value)
              };
              break;
            case "regex":
              rules[field.name] = {
                ...rules[field.name],
                regex: regExpMessage(rule.error_message, rule.value)
              };
              break;
          }
        });
      });
    }
    return rules;
  };
  return {
    getValidationRules
  };
};
const isEqual = (firstValue, secondValue) => {
  if (typeof firstValue !== "object" && typeof secondValue !== "object") {
    return Object.is(firstValue, secondValue);
  }
  if (firstValue === null || secondValue === null) {
    return firstValue === secondValue;
  }
  if (typeof firstValue !== typeof secondValue) {
    return false;
  }
  if (firstValue === secondValue) {
    return true;
  }
  if (firstValue instanceof Map && secondValue instanceof Map) {
    if (firstValue.size !== secondValue.size) {
      return false;
    }
    for (const [key, value] of firstValue) {
      if (!secondValue.has(key) || !isEqual(value, secondValue.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (firstValue instanceof Set && secondValue instanceof Set) {
    if (firstValue.size !== secondValue.size) {
      return false;
    }
    const newValueArray = Array.from(firstValue);
    const oldValueArray = Array.from(secondValue);
    for (let i = 0; i < newValueArray.length; i++) {
      if (!oldValueArray.some((item) => isEqual(newValueArray[i], item))) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    if (firstValue.length !== secondValue.length) {
      return false;
    }
    for (let i = 0; i < firstValue.length; i++) {
      if (!isEqual(firstValue[i], secondValue[i])) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(firstValue) || Array.isArray(secondValue)) {
    return false;
  }
  if (Object.keys(firstValue).length !== Object.keys(secondValue).length) {
    return false;
  }
  for (const [k, v] of Object.entries(firstValue)) {
    if (!(k in secondValue)) {
      return false;
    }
    if (!isEqual(v, secondValue[k])) {
      return false;
    }
  }
  return true;
};
const useCommentUtils = () => {
  const { t } = useI18n();
  const getLinkMarkup = (installmentForm, key, title = key) => `
<a href="${installmentForm[key]}" target="_blank">${title}</a>
        `;
  const getMarkup = (installmentForm, key, title = key) => {
    const isPhotoKey = key.toLowerCase().includes("photo");
    return `
${!isPhotoKey ? `${t(title)} : ` : ""}${isPhotoKey ? getLinkMarkup(key, title) : installmentForm[key]}
        `;
  };
  const getInstallmentComment = (installmentForm) => Object.keys(installmentForm).reduce((acc, key) => {
    switch (key) {
      case "name":
      case "surname":
      case "pinfl":
        acc += getMarkup(installmentForm, key);
        break;
      case "phone":
        acc += getMarkup(key, "phone_number");
        break;
      case "passport":
        acc += getMarkup(installmentForm, key, "passport_number");
        break;
      case "card":
        acc += getMarkup(installmentForm, key, "card_number");
        break;
      case "term":
        acc += getMarkup(installmentForm, key, "card_term");
        break;
      case "photoAdditional":
        acc += getMarkup(
          installmentForm,
          key,
          "checkout_installment_reg_document_title"
        );
        break;
      case "photoMain":
        acc += getMarkup(
          installmentForm,
          key,
          "checkout_installment_passport_image_title"
        );
        break;
      case "photoSelfie":
        acc += getMarkup(
          installmentForm,
          key,
          "checkout_installment_passport_selfie_title"
        );
        break;
    }
    return acc;
  }, "");
  return {
    getInstallmentComment
  };
};
const DEFAULT_FORM = {
  account_number: null,
  address: "",
  agreement: null,
  bank_account: "",
  bank_name: null,
  bank_service: null,
  bank: "",
  based_on: "",
  bic_personal: null,
  bill_to_address: null,
  business_date: "",
  business_unp: "",
  checking_account: null,
  company_legal_name: null,
  company_name: "",
  company_registration_number: null,
  egrpoy: "",
  email: "",
  entity_address: "",
  entity_phone: "",
  first_name: "",
  full_company_name: null,
  iban: "",
  inn: "",
  ipn: "",
  last_name: "",
  mfo: "",
  name: "",
  pan: "",
  passport: "",
  phone: "",
  position: "",
  post_index: "",
  postal_code: null,
  promo_code: "",
  promocode: "",
  registration: "",
  registration_country: "",
  selfie: "",
  ship_to_address: null,
  social_card: "",
  surname: "",
  swift: null,
  tin: "",
  unp: null,
  user_type: "1",
  vat_registration_number: null
};
const _sfc_main$1 = {
  __name: "checkout-payment-wrapper",
  __ssrInlineRender: true,
  props: {
    currentCart: {
      type: Object,
      default: () => {
      }
    },
    paymentConfig: {
      type: Array,
      required: true,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    currency: {
      type: String,
      default: ""
    },
    isAvailableGroupType: {
      type: Boolean,
      default: true
    },
    isTitleShown: {
      type: Boolean,
      default: true
    },
    oldPaymentTypeValue: {
      type: String,
      default: ""
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update", "updateState"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const defaultInstalmentFormData = {
      name: "",
      surname: "",
      phone: null,
      passport: "",
      pinfl: "",
      card: "",
      term: "",
      photoMain: null,
      photoSelfie: null,
      photoAdditional: null
    };
    const props = __props;
    const emit = __emit;
    const {
      defaultRequiredMessage,
      cardMinLengthMessage,
      getErrors,
      cardTermMinLengthMessage
    } = useFormUtils();
    const { getValidationRules } = usePaymentValidationUtils();
    const { t } = useI18n();
    const { getInstallmentComment } = useCommentUtils();
    const { getDefaultProgramValue } = usePaymentFilter();
    const paymentForm = reactive({
      payment_type: null,
      selectCredit: null,
      credit: null
    });
    const installmentForm = reactive({ ...defaultInstalmentFormData });
    const defaultForm = reactive(DEFAULT_FORM);
    const isPaymentUpdate = ref(false);
    const formConfig = computed(() => {
      var _a, _b, _c, _d, _e;
      if (isPaymentUpdate.value) {
        return {};
      }
      const form = (_b = (_a = props.currentCart) == null ? void 0 : _a.payment) == null ? void 0 : _b.form;
      const values = ((_e = (_d = (_c = props.currentCart) == null ? void 0 : _c.payment) == null ? void 0 : _d.form) == null ? void 0 : _e.values) || {};
      Object.keys(values).forEach((key) => {
        const value = values[key];
        if (Object.hasOwn(defaultForm, key)) {
          defaultForm[key] = value;
        }
      });
      return form || {};
    });
    const formRules = computed(() => getValidationRules(formConfig.value));
    const isInstallmentPaymentType = computed(
      () => {
        var _a;
        return ((_a = paymentForm.payment_type) == null ? void 0 : _a.main_type) === "installment";
      }
    );
    const installmentFormRules = computed(
      () => isInstallmentPaymentType.value ? {
        name: { defaultRequiredMessage },
        surname: { defaultRequiredMessage },
        passport: { defaultRequiredMessage },
        pinfl: { defaultRequiredMessage },
        photoMain: { defaultRequiredMessage },
        photoSelfie: { defaultRequiredMessage },
        photoAdditional: { defaultRequiredMessage },
        card: {
          required: defaultRequiredMessage,
          minLength: cardMinLengthMessage
        },
        term: {
          required: defaultRequiredMessage,
          minLength: cardTermMinLengthMessage
        }
      } : {}
    );
    const v$ = useVuelidate(installmentFormRules, installmentForm);
    const installmentErrors = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return {
        name: getErrors((_a = v$.value) == null ? void 0 : _a.name),
        card: getErrors((_b = v$.value) == null ? void 0 : _b.card),
        passport: getErrors((_c = v$.value) == null ? void 0 : _c.passport),
        surname: getErrors((_d = v$.value) == null ? void 0 : _d.surname),
        pinfl: getErrors((_e = v$.value) == null ? void 0 : _e.pinfl),
        term: getErrors((_f = v$.value) == null ? void 0 : _f.term),
        photoSelfie: (_h = (_g = v$.value) == null ? void 0 : _g.photoSelfie) == null ? void 0 : _h.$error,
        photoAdditional: (_j = (_i = v$.value) == null ? void 0 : _i.photoAdditional) == null ? void 0 : _j.$error
      };
    });
    const isInstallmentFormValid = computed(() => {
      var _a;
      const validationStatusData = Object.keys(v$.value).reduce((acc, key) => {
        if (!key.includes("$") && !key.includes("_")) {
          acc[key] = v$.value[key];
        }
        return acc;
      }, {});
      return !((_a = Object.keys(validationStatusData).filter(
        (key) => validationStatusData[key].$invalid
      )) == null ? void 0 : _a.length);
    });
    const defForm$ = useVuelidate(formRules, defaultForm);
    const blurField = (name) => {
      var _a;
      if ((_a = defForm$.value[name]) == null ? void 0 : _a.$touch) {
        defForm$.value[name].$touch();
      }
    };
    const inputField = (value) => {
      var _a, _b, _c, _d;
      (_b = (_a = defForm$.value) == null ? void 0 : _a[value.name]) == null ? void 0 : _b.$reset();
      (_d = (_c = defForm$.value) == null ? void 0 : _c[value.name]) == null ? void 0 : _d.$touch();
      defaultForm[value.name] = value.value;
    };
    const resetInstallmentForm = () => {
      var _a;
      Object.keys(defaultInstalmentFormData).forEach((key) => {
        var _a2;
        const el = defaultInstalmentFormData[key];
        if (Object.is(el, null)) {
          installmentForm[key] = el;
        } else if (typeof el === "object" && ((_a2 = Object.keys(el)) == null ? void 0 : _a2.length)) {
          installmentForm[key] = { ...defaultInstalmentFormData[key] };
        } else {
          installmentForm[key] = el;
        }
      });
      (_a = v$.value) == null ? void 0 : _a.$reset();
    };
    const savePaymentTypeToStorage = (payment) => {
      localStorage.setItem("payment_type", payment.type);
    };
    const onChangePayment = async (payment, isCredit = false) => {
      var _a, _b, _c, _d;
      if (!payment) {
        return;
      }
      isPaymentUpdate.value = true;
      if (isCredit && !payment.credit_program_id) {
        paymentForm.credit = payment;
        paymentForm.payment_type = payment;
        const data = getDefaultProgramValue(
          payment.credit_params.programs,
          props.currentCart
        );
        paymentForm.selectCredit = {
          credit_program_id: data.id,
          main_type: payment.type,
          type: payment.name
        };
        if (((_b = (_a = props.currentCart) == null ? void 0 : _a.payment) == null ? void 0 : _b.type) !== (payment == null ? void 0 : payment.type)) {
          emit("update", {
            payment: {
              credit_program_id: data.id,
              main_type: payment.type,
              type: payment.name
            }
          });
        }
        savePaymentTypeToStorage(payment);
        return;
      }
      if (!isCredit) {
        paymentForm.selectCredit = null;
        paymentForm.credit = null;
        paymentForm.payment_type = payment;
        if (payment.main_type !== "credit" && ((_d = (_c = props.currentCart) == null ? void 0 : _c.payment) == null ? void 0 : _d.type) !== (payment == null ? void 0 : payment.type)) {
          emit("update", {
            payment: {
              ...paymentForm.payment_type
            }
          });
        }
      }
      savePaymentTypeToStorage(payment);
    };
    const onChangeSelectCredit = async (credit) => {
      var _a, _b;
      paymentForm.selectCredit = credit;
      if (credit && ((_b = (_a = props.currentCart) == null ? void 0 : _a.payment) == null ? void 0 : _b.credit_program_id) !== (credit == null ? void 0 : credit.credit_program_id)) {
        emit("update", {
          payment: {
            ...credit
          }
        });
      }
    };
    const validateDefaultForm = () => {
      defForm$.value.$reset();
      defForm$.value.$touch();
    };
    const validateInstallmentForm = () => {
      v$.value.$touch();
      return isInstallmentFormValid.value;
    };
    const getFormattedComment = (comment) => {
      const isInstallmentDataReady = isInstallmentFormValid.value && isInstallmentPaymentType.value;
      const divider = comment && isInstallmentDataReady || isInstallmentDataReady ? `
=== === === ${t("installment")} === === ===
          ` : "";
      const installmentString = isInstallmentDataReady ? getInstallmentComment(installmentForm) : "";
      return `
        ${comment}
        ${divider}
        ${installmentString}`;
    };
    const createSortAdditionalFields = () => Object.keys(defaultForm).reduce((sortedFields, formKey) => {
      var _a;
      if ((_a = formRules.value) == null ? void 0 : _a[formKey]) {
        sortedFields[formKey] = defaultForm[formKey];
      }
      return sortedFields;
    }, {});
    __expose({
      validateDefaultForm,
      getFormattedComment,
      createSortAdditionalFields,
      validateInstallmentForm
    });
    watch(
      () => paymentForm.payment_type,
      () => {
        if (paymentForm.payment_type !== "installment") {
          resetInstallmentForm();
        }
      }
    );
    watch(
      () => props.loading,
      (value) => {
        if (!value) {
          isPaymentUpdate.value = false;
        }
      }
    );
    watch(
      () => ({ ...paymentForm }),
      (value, oldValue) => {
        if (!isEqual(value, oldValue)) {
          emit("updateState", {
            ...value,
            formConfig: { ...formConfig.value }
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.paymentConfig && __props.currentCart) {
        _push(ssrRenderComponent(CheckoutPayment, mergeProps({
          ref: "paymentRef",
          "checkout-form": unref(paymentForm),
          "credit-value": unref(paymentForm).credit,
          currency: __props.currency,
          "current-cart": __props.currentCart,
          "default-form": unref(defaultForm),
          "form-config": unref(formConfig),
          "form-rules": unref(formRules),
          "installment-errors": unref(installmentErrors),
          "installment-form": unref(installmentForm),
          "is-available-group-type": __props.isAvailableGroupType,
          "is-opened": __props.isOpened,
          "is-title-shown": __props.isTitleShown,
          loading: __props.loading && unref(isPaymentUpdate),
          "old-payment-type-name": __props.oldPaymentTypeValue,
          payments: __props.paymentConfig,
          validate: unref(defForm$),
          value: unref(paymentForm).payment_type,
          onBlurInstallment: ($event) => unref(v$)[$event].$touch(),
          onBlur: blurField,
          onChangeCredit: ($event) => onChangePayment($event, true),
          onChange: ($event) => onChangePayment($event),
          onInput: inputField,
          onInstallmentValueInput: ($event) => unref(installmentForm)[$event.name] = $event.value,
          onSelectCredit: ($event) => onChangeSelectCredit($event)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment-wrapper/checkout-payment-wrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "repeat-payment-information-modal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    isModalOpened: {
      type: Boolean,
      default: true
    },
    shouldBeAgreed: {
      type: Boolean,
      default: false
    },
    redirectUrl: {
      type: String,
      default: ""
    },
    actionAfterRedirect: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["close", "onClose"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const thisInstance = getCurrentInstance();
    const app = useNuxtApp();
    const isOpened = computed(() => props.isModalOpened);
    const closeModal = () => {
      var _a, _b;
      if ((_b = (_a = thisInstance == null ? void 0 : thisInstance.vnode) == null ? void 0 : _a.props) == null ? void 0 : _b.onOnClose) {
        emit("onClose");
      }
      emit("close");
      if (props.shouldBeAgreed || props.redirectUrl) {
        if (typeof redirectUrl === "string") {
          navigateTo(
            app.$localeRoute({
              path: redirectUrl
            })
          );
          props.actionAfterRedirect();
        }
        return;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$9;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": ($event) => isRef(isOpened) ? isOpened.value = $event : null
      }, { ..._ctx.$attrs }, {
        "full-height": "",
        "onUpdate:modelValue": closeModal
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="repeat-payment-information-modal"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { icon: "failIcon" }, null, _parent2, _scopeId));
            _push2(`<span class="repeat-payment-information-modal_title"${_scopeId}>${ssrInterpolate(__props.title)}</span><span class="repeat-payment-information-modal_text"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "repeat-payment-information-modal_button",
              "full-width": "",
              onClick: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.buttonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.buttonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "repeat-payment-information-modal" }, [
                createVNode(_component_Icon, { icon: "failIcon" }),
                createVNode("span", { class: "repeat-payment-information-modal_title" }, toDisplayString(__props.title), 1),
                createVNode("span", { class: "repeat-payment-information-modal_text" }, toDisplayString(__props.text), 1),
                createVNode(_component_Button, {
                  class: "repeat-payment-information-modal_button",
                  "full-width": "",
                  onClick: closeModal
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.buttonText), 1)
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/repeat-payment-information-modal/repeat-payment-information-modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { CheckoutApiService as C, __nuxt_component_3$1 as _, _sfc_main$1 as a, _sfc_main as b, usePaymentFilter as c, __nuxt_component_0 as d, useZipCodeUtils as e, isEqual as i, useSaveCheckout as u };
//# sourceMappingURL=repeat-payment-information-modal-Bxb7vbKQ.mjs.map
