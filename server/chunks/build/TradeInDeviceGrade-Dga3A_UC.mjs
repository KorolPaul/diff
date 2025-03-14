import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$h } from './modal-light-Cz0YAIgT.mjs';
import { inject, ref, mergeProps, withCtx, unref, createVNode, renderSlot, computed, watch, toDisplayString, createTextVNode, withDirectives, vShow, isRef, shallowRef, createBlock, createCommentVNode, openBlock, reactive, defineComponent, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderTeleport, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useI18n, t as useTradeInStore, k as __nuxt_component_6, e as useApi, l as useGtm } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_0$1 } from './Form-ZGQdgBok.mjs';
import { _ as __nuxt_component_2$1, a as _sfc_main$k } from './policy-checkbox-GL5-7Kb3.mjs';
import { _ as __nuxt_component_1$2 } from './UiSelect-BqVOhDGy.mjs';
import { _ as __nuxt_component_1$3 } from './currency-text-DJsP4_8P.mjs';
import { _ as __nuxt_component_2$2 } from './ui-preloader-C4Bi7ENY.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { _ as _sfc_main$l } from './UiImg-CNj4xvxi.mjs';
import { onClickOutside } from '@vueuse/core';
import { _ as __nuxt_component_2$3 } from './checkout-product-price-CaEg0Gsb.mjs';
import { _ as _sfc_main$i } from './TextInput-HaUa076w.mjs';
import { u as useFormUtils, _ as __nuxt_component_4 } from './useFormUtils-HyQgFuda.mjs';
import { _ as _sfc_main$j } from './UiCheckbox-rg4DHWMb.mjs';
import useVuelidate from '@vuelidate/core';
import { _ as __nuxt_component_0$2 } from './UiRadio-hn8C_nHF.mjs';

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "UiMoreActions",
  __ssrInlineRender: true,
  props: {
    options: {}
  },
  setup(__props) {
    const isOpened = ref(false);
    const menuRef = ref(null);
    onClickOutside(menuRef, () => isOpened.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "menuRef",
        ref: menuRef,
        class: ["more-actions", { active: unref(isOpened) }]
      }, _attrs))} data-v-8bdceb29><button class="more-actions_button" data-v-8bdceb29>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "dots" }, null, _parent));
      _push(`</button><div class="more-actions_dropdown" data-v-8bdceb29><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(`<div class="more-actions_dropdown-item" data-v-8bdceb29>${ssrInterpolate(option.label)}</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiMoreActions/UiMoreActions.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-8bdceb29"]]);
const _sfc_main$f = {
  __name: "checkout-trade-in-item",
  __ssrInlineRender: true,
  props: {
    device: Object,
    change: Function,
    remove: Function,
    showOptions: {
      type: Boolean,
      default: true
    },
    showTotalBenefit: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "remove"],
  setup(__props) {
    const props = __props;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const option = computed(
      () => {
        var _a2;
        var _a, _b, _c, _d, _e;
        return (_a2 = (_e = (_d = (_c = (_b = (_a = props.device) == null ? void 0 : _a.initialGrade) == null ? void 0 : _b.data) == null ? void 0 : _c.buyoutTopUp) == null ? void 0 : _d.specialGrading[0]) == null ? void 0 : _e.options[0]) != null ? _a2 : null;
      }
    );
    const till = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = option.value) == null ? void 0 : _a.validTill) != null ? _a2 : "";
    });
    const formatPeriodDate = (date) => {
      const splitDateValue = date.split("-").reverse();
      if (splitDateValue.length < 2) {
        return "";
      }
      return `${splitDateValue == null ? void 0 : splitDateValue[0]}.${splitDateValue == null ? void 0 : splitDateValue[1]}`;
    };
    const exchangeProduct = computed(() => {
      var _a;
      return (_a = props.device.device) == null ? void 0 : _a.exchangeProduct;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_UiMoreActions = __nuxt_component_0;
      const _component_CurrencyText = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkout-trade-in-item", {
          "checkout-trade-in-item__without-padding": !((_a = __props.device.device) == null ? void 0 : _a.subcategory)
        }]
      }, _attrs))} data-v-147a11ea>`);
      if ((_b = __props.device.device) == null ? void 0 : _b.subcategory) {
        _push(`<div class="checkout-trade-in-item_device" data-v-147a11ea><div class="checkout-trade-in-item_device-header" data-v-147a11ea><span class="checkout-trade-in-item_device-title" data-v-147a11ea>${ssrInterpolate(_ctx.$t("trade_in_exchange_device"))}</span>`);
        if (__props.showOptions) {
          _push(ssrRenderComponent(_component_UiMoreActions, {
            options: [
              { label: _ctx.$t("edit"), onClick: () => _ctx.$emit("change") },
              { label: _ctx.$t("delete"), onClick: () => _ctx.$emit("remove") }
            ]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="checkout-trade-in-item_device-data" data-v-147a11ea><span class="checkout-trade-in-item_device-name" data-v-147a11ea>${ssrInterpolate(__props.device.device.subcategory)}, ${ssrInterpolate((_c = __props.device.device) == null ? void 0 : _c.storage)}, ${ssrInterpolate((_d = __props.device.device) == null ? void 0 : _d.color)}</span><span class="checkout-trade-in-item_device-price" data-v-147a11ea>${ssrInterpolate(unref(formatPriceWithSpaces)(Number((_e = __props.device.grade) == null ? void 0 : _e.price)))} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: "",
          "use-default": ""
        }, null, _parent));
        _push(`</span></div><div class="checkout-trade-in-item_item-hint" data-v-147a11ea> * ${ssrInterpolate(_ctx.$t("preliminary_purchase_price"))}</div>`);
        if (__props.device.totalPriceTopUp) {
          _push(`<div class="checkout-trade-in-item_device-additional-data" data-v-147a11ea><span class="checkout-trade-in-item_item-additional-hint" data-v-147a11ea>${ssrInterpolate(`${_ctx.$t("additional_checkout_benefit")} ${unref(till) ? `${_ctx.$t("till")} ${formatPeriodDate(unref(till))}` : ""}`)}</span><span class="checkout-trade-in-item_additional_benefit" data-v-147a11ea> +${ssrInterpolate(unref(formatPriceWithSpaces)(__props.device.totalPriceTopUp))} `);
          _push(ssrRenderComponent(_component_CurrencyText, {
            currency: "",
            "use-default": ""
          }, null, _parent));
          _push(`</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(exchangeProduct)) {
        _push(`<div class="checkout-trade-in-item_device" data-v-147a11ea><span class="checkout-trade-in-item_device-title" data-v-147a11ea>${ssrInterpolate(_ctx.$t("trade_in_wanted_device"))}</span><div class="checkout-trade-in-item_device-data" data-v-147a11ea><span class="checkout-trade-in-item_device-name" data-v-147a11ea>${ssrInterpolate(unref(exchangeProduct).name)}</span><span class="checkout-trade-in-item_device-price" data-v-147a11ea>${ssrInterpolate(unref(formatPriceWithSpaces)(
          unref(exchangeProduct).price_with_discount < Number(unref(exchangeProduct).price) ? unref(exchangeProduct).price_with_discount : Number(unref(exchangeProduct).price)
        ))} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: "",
          "use-default": ""
        }, null, _parent));
        _push(`</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showTotalBenefit && ((_f = __props.device.grade) == null ? void 0 : _f.price)) {
        _push(`<div class="checkout-trade-in-item_total-benefit" data-v-147a11ea><span class="checkout-trade-in-item_benefit-title" data-v-147a11ea>${ssrInterpolate(_ctx.$t("trade_in_benefit_hint"))}</span><span class="checkout-trade-in-item_benefit-price" data-v-147a11ea> -${ssrInterpolate(unref(formatPriceWithSpaces)(
          Number(__props.device.grade.price) + Number(__props.device.totalPriceTopUp)
        ))} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: "",
          "use-default": ""
        }, null, _parent));
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-trade-in/components/checkout-trade-in-item.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-147a11ea"]]);
const _sfc_main$e = {
  __name: "trade-in-modal",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Boolean,
      required: true
    },
    maxWidth: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const modalKeys = inject("modalKeys");
    ref(null);
    const modalRef = ref(null);
    const isHeaderShadowToggle = ref(false);
    const isFooterShadowToggle = ref(false);
    const onScroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      isHeaderShadowToggle.value = scrollTop > 0;
      isFooterShadowToggle.value = scrollTop + clientHeight < scrollHeight;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$h;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({ ..._ctx.$attrs, ..._ctx.$props }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="trade-in-modal" data-v-eb0dbc9e${_scopeId}><div class="${ssrRenderClass([{
              "trade-in-modal_header__shadow": unref(isHeaderShadowToggle)
            }, "trade-in-modal_header"])}"${ssrRenderAttr("id", (_a = unref(modalKeys)) == null ? void 0 : _a.header)} data-v-eb0dbc9e${_scopeId}></div><div data-v-eb0dbc9e${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="${ssrRenderClass([{
              "trade-in-modal_footer__shadow": unref(isFooterShadowToggle)
            }, "trade-in-modal_footer"])}" data-v-eb0dbc9e${_scopeId}><div${ssrRenderAttr("id", (_b = unref(modalKeys)) == null ? void 0 : _b.footer)} data-v-eb0dbc9e${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "trade-in-modal",
                ref_key: "modalRef",
                ref: modalRef,
                onScroll
              }, [
                createVNode("div", {
                  class: ["trade-in-modal_header", {
                    "trade-in-modal_header__shadow": unref(isHeaderShadowToggle)
                  }],
                  id: (_c = unref(modalKeys)) == null ? void 0 : _c.header
                }, null, 10, ["id"]),
                createVNode("div", null, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                createVNode("div", {
                  class: ["trade-in-modal_footer", {
                    "trade-in-modal_footer__shadow": unref(isFooterShadowToggle)
                  }]
                }, [
                  createVNode("div", {
                    id: (_d = unref(modalKeys)) == null ? void 0 : _d.footer
                  }, null, 8, ["id"])
                ], 2)
              ], 544)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/trade-in-modal/trade-in-modal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-eb0dbc9e"]]);
const _sfc_main$d = {
  __name: "TradeInPromoPeriod",
  __ssrInlineRender: true,
  props: {
    from: {
      type: String,
      default: ""
    },
    till: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const formatPeriodDate = (date) => date.split("-").reverse().join(".");
    const computedPromoPeriod = computed(
      () => props.from && props.till ? `${formatPeriodDate(props.from)} - ${formatPeriodDate(props.till)}` : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(computedPromoPeriod)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, { class: "trade-in-promo-period" }, _attrs))} data-v-f4b645ee><span data-v-f4b645ee>${ssrInterpolate(`${_ctx.$t("promotion_period")}: `)}</span><span data-v-f4b645ee>${ssrInterpolate(unref(computedPromoPeriod))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInPromoPeriod/TradeInPromoPeriod.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-f4b645ee"]]);
const _sfc_main$c = {
  __name: "TradeInTopUpBanner",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: ""
    },
    currency: {
      type: String,
      default: ""
    },
    gradings: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const computedPeriodArray = computed(() => {
      var _a, _b, _c;
      if (!((_a = props.gradings) == null ? void 0 : _a.length) && !((_c = (_b = props.gradings) == null ? void 0 : _b.options) == null ? void 0 : _c.length)) {
        return ["", ""];
      }
      const option = props.gradings[0].options[0];
      const dateFrom = (option == null ? void 0 : option.validFrom) ? option.validFrom : "";
      const dateTill = (option == null ? void 0 : option.validTill) ? option.validTill : "";
      return [dateFrom, dateTill];
    });
    const from = ref(computedPeriodArray.value[0]);
    const till = ref(computedPeriodArray.value[1]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-topup-banner" }, { ..._ctx.$attrs }, _attrs))} data-v-41e0253b><div class="trade-in-topup-banner_row" data-v-41e0253b><p class="trade-in-topup-banner_title" data-v-41e0253b>${ssrInterpolate(_ctx.$t("trade_in_top_up_banner_title"))}</p></div><div class="trade-in-topup-banner_row" data-v-41e0253b><div class="trade-in-topup-banner_column" data-v-41e0253b><!--[-->`);
      ssrRenderList(__props.gradings, (grading, index) => {
        _push(`<!--[-->`);
        if (grading.name && grading.initialFinalPrice) {
          _push(`<div class="trade-in-topup-banner_price-info" data-v-41e0253b><div class="trade-in-topup-banner_text" data-v-41e0253b>${ssrInterpolate(grading.name)}</div><div class="trade-in-topup-banner_price-text" data-v-41e0253b>${ssrInterpolate(unref(formatPriceWithSpaces)(grading.initialFinalPrice))} ${ssrInterpolate(__props.currency)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(__nuxt_component_2, {
        class: "trade-in-topup-banner_promo",
        from: unref(from),
        till: unref(till)
      }, null, _parent));
      _push(`</div>`);
      if (__props.image) {
        _push(`<div class="trade-in-topup-banner_column trade-in-topup-banner_column__with-image" data-v-41e0253b><img${ssrRenderAttr("src", __props.image)} alt="topup-banner-image" class="trade-in-topup-banner_image" data-v-41e0253b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInTopUpBanner/TradeInTopUpBanner.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-41e0253b"]]);
function isEmpty(obj) {
  var _a;
  if (!obj) return true;
  return !((_a = Object.keys(obj)) == null ? void 0 : _a.length);
}
function generate() {
  return (/* @__PURE__ */ new Date()).getTime().toString(36);
}
const useCatalogApiService = () => {
  const getAllCategories = async () => {
    const { get } = useApi();
    const { data } = await get("api/categories?is_trade_in=1");
    return {
      data: data.value
    };
  };
  const getSubcategory = async (subcategory, params = {}) => {
    var _a;
    const { get } = useApi();
    const { data } = await get(`api/categories/${subcategory}`, {
      ...params,
      is_trade_in: 1
    });
    return (_a = data.value) == null ? void 0 : _a.data;
  };
  return {
    getAllCategories,
    getSubcategory
  };
};
const _sfc_main$b = {
  __name: "TradeInCatalogDeviceView",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    },
    settings: {
      type: Boolean,
      default: true
    },
    productCount: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const props = __props;
    const image = computed(() => {
      var _a2;
      var _a, _b, _c;
      return (_a2 = (_c = (_b = (_a = props.product) == null ? void 0 : _a.variations[0]) == null ? void 0 : _b.images) == null ? void 0 : _c[0]) != null ? _a2 : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiImg = _sfc_main$l;
      const _component_UiMoreActions = __nuxt_component_0;
      const _component_CheckoutProductPrice = __nuxt_component_2$3;
      if (__props.product) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-catalog-device-view" }, _attrs))} data-v-d6a0afec><div class="trade-in-catalog-device-view_device" data-v-d6a0afec><div class="trade-in-catalog-device-view_device-image-wrapper" data-v-d6a0afec>`);
        _push(ssrRenderComponent(_component_UiImg, {
          src: unref(image),
          width: 200,
          height: 200,
          loading: "lazy",
          class: "trade-in-catalog-device-view_device-image"
        }, null, _parent));
        _push(`<span class="trade-in-catalog-device-view_device-quantity" data-v-d6a0afec>${ssrInterpolate(__props.productCount)}</span></div><div class="trade-in-catalog-device-view_device-info" data-v-d6a0afec><span class="trade-in-catalog-device-view_device-name" data-v-d6a0afec>${ssrInterpolate(__props.product.name)}</span><span class="trade-in-catalog-device-view_device-article" data-v-d6a0afec>${ssrInterpolate(_ctx.$t("art"))}: ${ssrInterpolate(__props.product.sku)}</span></div></div>`);
        if (!__props.product.final_price) {
          _push(`<div data-v-d6a0afec>${ssrInterpolate(_ctx.$t("purchase_order_text"))}</div>`);
        } else {
          _push(`<div class="trade-in-catalog-device-view_prices" data-v-d6a0afec>`);
          if (__props.settings) {
            _push(ssrRenderComponent(_component_UiMoreActions, {
              options: [
                { label: _ctx.$t("edit"), onClick: () => _ctx.$emit("change") },
                { label: _ctx.$t("delete"), onClick: () => _ctx.$emit("remove") }
              ]
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_CheckoutProductPrice, {
            currency: __props.product.currency,
            "total-price": __props.product.price,
            "total-price-discount": __props.product.final_price,
            cat4: __props.product.price_cat_4
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInCatalogDeviceStep/TradeInCatalogDeviceView.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TradeInCatalogDeviceView = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d6a0afec"]]);
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "trade-in-dialog-title" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInDialogTitle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const TradeInDialogTitle = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = {
  __name: "TradeInCatalogDevice",
  __ssrInlineRender: true,
  props: {
    initialId: {
      type: String,
      default: () => ""
    },
    initialForm: {
      type: Object,
      default: () => {
      }
    },
    initialProduct: {
      type: Object,
      default: () => {
      }
    },
    initialIndex: {
      type: Number,
      required: true
    },
    isTradeInUserDeviceView: {
      type: Boolean,
      default: false
    },
    isShownTopUpBanner: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ""
    },
    currency: {
      type: String,
      default: ""
    },
    gradings: {
      type: Array,
      default: () => []
    },
    verticalPadding: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isLoading = ref(false);
    const formData = ref({
      vendor: "",
      category: "",
      feature: "",
      subcategory: "",
      storage: "",
      color: "",
      product: ""
    });
    const deviceForm = ref({
      vendor: "",
      category: "",
      feature: "",
      subcategory: "",
      storage: "",
      color: "",
      product: "",
      productId: "",
      exchangeProduct: null
    });
    const categories = shallowRef([]);
    const features = shallowRef([]);
    const configurations = shallowRef([]);
    const colors = shallowRef([]);
    const products = shallowRef([]);
    const tradeInModalKeys = inject("modalKeys");
    const isMounted = ref(false);
    const isRequiredFilters = computed(
      () => props.initialForm.notRequiredFilters !== true
    );
    const {
      addCatalogDevice,
      changeCatalogDevice,
      addCatalogDeviceToLC,
      changeCatalogDeviceToLC
    } = useTradeInStore();
    const { getAllCategories, getSubcategory } = useCatalogApiService();
    const isNewDevice = () => !(props.initialForm && props.initialProduct && isEmpty(props.initialForm) === false && isEmpty(props.initialProduct) === false);
    const findColorAgg = (aggs) => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = aggs == null ? void 0 : aggs.find((agg) => agg.id === "color")) == null ? void 0 : _a.buckets) == null ? void 0 : _b.sort((a, b) => a.sort - b.sort)) != null ? _a2 : [];
    };
    const selectProduct = (product) => {
      const isNew = isNewDevice();
      deviceForm.value.product = product;
      formData.value.product = product.name;
      const deviceData = {
        id: isNew || props.isTradeInUserDeviceView ? generate() : props.initialId,
        product: deviceForm.value.product,
        form: deviceForm.value
      };
      emit("rememberNewDevice", deviceData);
    };
    const selectColor = async (color) => {
      var _a;
      deviceForm.value.color = color;
      formData.value.color = color.name;
      if (!color) {
        products.value = [];
        deviceForm.value.product = "";
        formData.value.product = "";
        return;
      }
      const params = {};
      if (deviceForm.value.configuration) {
        params["filters[]"] = deviceForm.value.configuration.id;
      }
      if (deviceForm.value.color) {
        params["color[]"] = deviceForm.value.color.id;
      }
      isLoading.value = true;
      const colorRes = await getSubcategory(
        deviceForm.value.subcategory.slug,
        params
      );
      isLoading.value = false;
      products.value = colorRes == null ? void 0 : colorRes.products;
      if ((colorRes == null ? void 0 : colorRes.products.length) === 1) {
        deviceForm.value.product = products.value[0];
        formData.value.product = (_a = products.value[0]) == null ? void 0 : _a.name;
      } else {
        deviceForm.value.product = "";
        formData.value.product = "";
      }
    };
    const selectConfiguration = async (configuration, autoSelect = true) => {
      deviceForm.value.configuration = configuration;
      formData.value.configuration = configuration.name;
      if (!configuration) {
        colors.value = [];
        selectColor("");
        return;
      }
      isLoading.value = true;
      const configurationRes = await getSubcategory(
        deviceForm.value.subcategory.slug,
        {
          "filters[]": configuration.id
        }
      );
      isLoading.value = false;
      colors.value = findColorAgg(configurationRes == null ? void 0 : configurationRes.aggs);
      if (autoSelect === false) {
        if (colors.value.length === 0) {
          products.value = configurationRes.products;
        }
        return;
      }
      if (colors.value.length === 1) {
        selectColor(colors.value[0]);
      } else {
        await selectColor("");
      }
      if (colors.value.length === 0) {
        products.value = configurationRes.products;
      }
    };
    const selectFeature = (feature, autoSelect = true) => {
      deviceForm.value.feature = feature;
      formData.value.feature = feature.name;
      if (!feature) {
        configurations.value = [];
        selectConfiguration("");
        return;
      }
      configurations.value = feature.buckets.sort((a, b) => a.sort - b.sort);
      if (autoSelect === false) {
        return;
      }
      if (configurations.value.length === 1) {
        selectConfiguration(configurations.value[0]);
      } else {
        selectConfiguration("");
      }
    };
    const selectSubcategory = async (subcategory, autoSelect = true) => {
      var _a, _b, _c, _d, _e, _f;
      deviceForm.value.subcategory = subcategory;
      formData.value.subcategory = subcategory.name;
      if (!subcategory) {
        features.value = [];
        selectFeature("");
        return;
      }
      isLoading.value = true;
      const subcategoryRes = await getSubcategory(subcategory.slug);
      const newFeatures = subcategoryRes == null ? void 0 : subcategoryRes.features;
      newFeatures.sort((a, b) => a.sort - b.sort);
      features.value = newFeatures;
      isLoading.value = false;
      const subcategoryColors = findColorAgg((_b = (_a = subcategoryRes == null ? void 0 : subcategoryRes.data) == null ? void 0 : _a.data) == null ? void 0 : _b.aggs);
      if (autoSelect === false) {
        if (subcategoryColors.length === 0 && features.value.length === 0) {
          products.value = subcategoryRes.products;
        }
        return;
      }
      if (features.value.length === 1) {
        selectFeature(features.value[0]);
      } else {
        await selectFeature("");
      }
      if (features.value.length === 0) {
        if (!subcategoryColors.length) {
          products.value = (_d = (_c = subcategoryRes == null ? void 0 : subcategoryRes.data) == null ? void 0 : _c.data) == null ? void 0 : _d.products;
          if (((_e = products.value) == null ? void 0 : _e.length) === 1) {
            deviceForm.value.product = products.value[0];
            formData.value.product = (_f = products.value[0]) == null ? void 0 : _f.name;
          }
          return;
        }
        colors.value = subcategoryColors;
        if (subcategoryColors.length === 1) {
          selectColor(subcategoryColors[0]);
        }
      }
    };
    const selectCategory = (category) => {
      deviceForm.value.category = category;
      if (category.children.length === 1) {
        deviceForm.value.subcategory = category.children[0];
        selectSubcategory(category.children[0]);
      } else {
        selectSubcategory("");
      }
    };
    const initData = async () => {
      var _a2;
      var _a, _b, _c, _d;
      isLoading.value = true;
      const categoriesRes = await getAllCategories();
      categories.value = (_a = categoriesRes == null ? void 0 : categoriesRes.data) == null ? void 0 : _a.data.filter(
        (category) => {
          var _a22;
          return !!(category == null ? void 0 : category.children) && ((_a22 = category.children) == null ? void 0 : _a22.length);
        }
      );
      if (isNewDevice() === false) {
        const isAutoSelect = isRequiredFilters.value === false;
        deviceForm.value.category = props.initialForm.category;
        formData.value.category = props.initialForm.category.name;
        if (props.initialForm.notRequiredFilters || props.initialForm.isAddedByProductPageBanner) {
          deviceForm.value.category.children = (_c = (_b = categoriesRes == null ? void 0 : categoriesRes.data) == null ? void 0 : _b.data.find(
            (category) => category.id === props.initialForm.category.id
          )) == null ? void 0 : _c.children;
        }
        await selectSubcategory(props.initialForm.subcategory, isAutoSelect);
        if (props.initialForm.feature) {
          await selectFeature(props.initialForm.feature, isAutoSelect);
          await selectConfiguration(props.initialForm.configuration, isAutoSelect);
        }
        if (props.initialForm.color) {
          await selectColor(props.initialForm.color);
        }
        const foundProduct = products.value.find(
          (product) => Number(product.id) === Number(props.initialProduct.id)
        );
        deviceForm.value.product = isAutoSelect ? props.initialForm.product : foundProduct != null ? foundProduct : props.initialForm.product;
        formData.value.product = isAutoSelect ? (_d = props.initialForm.product) == null ? void 0 : _d.name : (_a2 = foundProduct == null ? void 0 : foundProduct.name) != null ? _a2 : props.initialForm.product.name;
      }
      isLoading.value = false;
    };
    initData();
    const categoriesOptions = computed(
      () => categories.value.map((category) => ({
        label: category.name,
        value: category.name
      }))
    );
    const subcategoryOptions = computed(
      () => {
        var _a, _b;
        return (_b = (_a = deviceForm.value.category) == null ? void 0 : _a.children) == null ? void 0 : _b.map((children) => ({
          label: children.name,
          value: children.name
        }));
      }
    );
    const featuresOptions = computed(
      () => {
        var _a;
        return (_a = features.value) == null ? void 0 : _a.map((feature) => ({
          label: feature.name,
          value: feature.name
        }));
      }
    );
    const configurationOptions = computed(
      () => {
        var _a;
        return (_a = configurations.value) == null ? void 0 : _a.map((configuration) => ({
          label: configuration.name,
          value: configuration.name
        }));
      }
    );
    const colorOptions = computed(
      () => {
        var _a;
        return (_a = colors.value) == null ? void 0 : _a.map((color) => ({
          label: color.name,
          value: color.name
        }));
      }
    );
    const productOptions = computed(
      () => {
        var _a;
        return (_a = products.value) == null ? void 0 : _a.map((product) => ({
          label: product.name,
          value: product.name
        }));
      }
    );
    const nextStep = () => {
      const isNew = isNewDevice();
      const deviceData = {
        id: isNew || props.isTradeInUserDeviceView ? generate() : props.initialId,
        product: deviceForm.value.product,
        form: deviceForm.value
      };
      if (props.isTradeInUserDeviceView) {
        emit("rememberNewDevice", deviceData);
        emit("close");
        return;
      }
      if (isNew) {
        addCatalogDevice(deviceData);
        addCatalogDeviceToLC(deviceData);
      } else {
        changeCatalogDevice(deviceData, props.initialIndex);
        changeCatalogDeviceToLC(deviceData, props.initialIndex);
      }
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0$1;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_UiSelect = __nuxt_component_1$2;
      const _component_UiPreloader = __nuxt_component_2$2;
      const _component_TradeInTopUpBanner = __nuxt_component_7;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["trade-in-catalog-device", { "trade-in-catalog-device__trade-in": __props.isTradeInUserDeviceView }]
      }, _attrs))} data-v-03f0e1c8><div class="${ssrRenderClass([{
        "trade-in-catalog-device_content__vertical-padding": __props.verticalPadding
      }, "trade-in-catalog-device_content"])}" data-v-03f0e1c8>`);
      if (unref(isMounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          if (!__props.isTradeInUserDeviceView) {
            _push2(ssrRenderComponent(unref(TradeInDialogTitle), { class: "trade-in-catalog-device_title" }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trade_in_new_device_title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_new_device_title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push2(`<!---->`);
          }
        }, `#${unref(tradeInModalKeys).header}`, !unref(isMounted), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Form, { class: "trade-in-catalog-device_form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).category,
                    "onUpdate:modelValue": [($event) => unref(formData).category = $event, ($event) => selectCategory(unref(categories).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_category"),
                    options: unref(categoriesOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).category,
                      "onUpdate:modelValue": [($event) => unref(formData).category = $event, ($event) => selectCategory(unref(categories).find((item) => item.name === $event))],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_category"),
                      options: unref(categoriesOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).subcategory,
                    "onUpdate:modelValue": [($event) => unref(formData).subcategory = $event, ($event) => selectSubcategory(
                      unref(deviceForm).category.children.find(
                        (item) => item.name === $event
                      )
                    )],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_subcategory"),
                    options: unref(subcategoryOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).subcategory,
                      "onUpdate:modelValue": [($event) => unref(formData).subcategory = $event, ($event) => selectSubcategory(
                        unref(deviceForm).category.children.find(
                          (item) => item.name === $event
                        )
                      )],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_subcategory"),
                      options: unref(subcategoryOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, {
              style: unref(features).length ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).feature,
                    "onUpdate:modelValue": [($event) => unref(formData).feature = $event, ($event) => selectFeature(unref(features).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_features"),
                    options: unref(featuresOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).feature,
                      "onUpdate:modelValue": [($event) => unref(formData).feature = $event, ($event) => selectFeature(unref(features).find((item) => item.name === $event))],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_features"),
                      options: unref(featuresOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, {
              style: unref(features).length ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).configuration,
                    "onUpdate:modelValue": [($event) => unref(formData).configuration = $event, ($event) => selectConfiguration(
                      unref(configurations).find((item) => item.name === $event)
                    )],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_configuration"),
                    options: unref(configurationOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).configuration,
                      "onUpdate:modelValue": [($event) => unref(formData).configuration = $event, ($event) => selectConfiguration(
                        unref(configurations).find((item) => item.name === $event)
                      )],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_configuration"),
                      options: unref(configurationOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, {
              style: unref(colors).length ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).color,
                    "onUpdate:modelValue": [($event) => unref(formData).color = $event, ($event) => selectColor(unref(colors).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_color"),
                    options: unref(colorOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).color,
                      "onUpdate:modelValue": [($event) => unref(formData).color = $event, ($event) => selectColor(unref(colors).find((item) => item.name === $event))],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_color"),
                      options: unref(colorOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, {
              style: unref(products) && unref(products).length ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(formData).product,
                    "onUpdate:modelValue": [($event) => unref(formData).product = $event, ($event) => selectProduct(unref(products).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_product"),
                    options: unref(productOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelect, {
                      modelValue: unref(formData).product,
                      "onUpdate:modelValue": [($event) => unref(formData).product = $event, ($event) => selectProduct(unref(products).find((item) => item.name === $event))],
                      disabled: unref(isLoading),
                      label: _ctx.$t("trade_in_select_product"),
                      options: unref(productOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).category,
                    "onUpdate:modelValue": [($event) => unref(formData).category = $event, ($event) => selectCategory(unref(categories).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_category"),
                    options: unref(categoriesOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).subcategory,
                    "onUpdate:modelValue": [($event) => unref(formData).subcategory = $event, ($event) => selectSubcategory(
                      unref(deviceForm).category.children.find(
                        (item) => item.name === $event
                      )
                    )],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_subcategory"),
                    options: unref(subcategoryOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }),
              withDirectives(createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).feature,
                    "onUpdate:modelValue": [($event) => unref(formData).feature = $event, ($event) => selectFeature(unref(features).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_features"),
                    options: unref(featuresOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }, 512), [
                [vShow, unref(features).length]
              ]),
              withDirectives(createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).configuration,
                    "onUpdate:modelValue": [($event) => unref(formData).configuration = $event, ($event) => selectConfiguration(
                      unref(configurations).find((item) => item.name === $event)
                    )],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_configuration"),
                    options: unref(configurationOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }, 512), [
                [vShow, unref(features).length]
              ]),
              withDirectives(createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).color,
                    "onUpdate:modelValue": [($event) => unref(formData).color = $event, ($event) => selectColor(unref(colors).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_color"),
                    options: unref(colorOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }, 512), [
                [vShow, unref(colors).length]
              ]),
              withDirectives(createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelect, {
                    modelValue: unref(formData).product,
                    "onUpdate:modelValue": [($event) => unref(formData).product = $event, ($event) => selectProduct(unref(products).find((item) => item.name === $event))],
                    disabled: unref(isLoading),
                    label: _ctx.$t("trade_in_select_product"),
                    options: unref(productOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "options"])
                ]),
                _: 1
              }, 512), [
                [vShow, unref(products) && unref(products).length]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(formData).product) {
        _push(`<div class="trade-in-catalog-device_device-view" data-v-03f0e1c8>`);
        _push(ssrRenderComponent(TradeInCatalogDeviceView, {
          product: unref(deviceForm).product,
          settings: false
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading)) {
        _push(`<div class="trade-in-catalog-device_preloader" data-v-03f0e1c8>`);
        _push(ssrRenderComponent(_component_UiPreloader, { size: 30 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isShownTopUpBanner) {
        _push(ssrRenderComponent(_component_TradeInTopUpBanner, {
          class: "trade-in-catalog-device_top-up",
          image: __props.image,
          currency: __props.currency,
          gradings: __props.gradings
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isMounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(ssrRenderComponent(_component_Button, {
            disabled: !unref(deviceForm).product || unref(isLoading),
            "full-width": "",
            onClick: nextStep
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("next"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("next")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        }, `#${unref(tradeInModalKeys).footer}`, !unref(isMounted), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInCatalogDeviceStep/TradeInCatalogDevice.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TradeInCatalogDevice = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-03f0e1c8"]]);
const _sfc_main$8 = {
  __name: "TradeInAddDevice",
  __ssrInlineRender: true,
  emits: ["nextStep", "addDevice"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-add-device" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(TradeInDialogTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("add_trade_in_device"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("add_trade_in_device")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="trade-in-add-device_description">${ssrInterpolate(_ctx.$t("add_trade_in_device_description"))}</p>`);
      _push(ssrRenderComponent(_component_Button, {
        "full-width": "",
        onClick: ($event) => _ctx.$emit("addDevice")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("add_device"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("add_device")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        secondary: "",
        "full-width": "",
        onClick: ($event) => _ctx.$emit("nextStep")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("skip"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("skip")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/questions/TradeInAddDevice.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const BASE_IT4 = "https://api.it4profit.com/api/tin/v1/";
const useBreezyApiService = (token) => {
  const { locale } = useI18n();
  const { get, post } = useApi();
  const addProductToTree = (product, rootTree) => {
    const { vendor, category, subcategory, storage, color, productId } = product;
    if (!vendor || !category || !subcategory || !storage || !color || !productId)
      return;
    if (!rootTree[vendor]) {
      rootTree[vendor] = {};
    }
    if (!rootTree[vendor][category]) {
      rootTree[vendor][category] = {};
    }
    if (!rootTree[vendor][category][subcategory]) {
      rootTree[vendor][category][subcategory] = {};
    }
    if (!rootTree[vendor][category][subcategory][storage]) {
      rootTree[vendor][category][subcategory][storage] = {};
    }
    if (!rootTree[vendor][category][subcategory][storage][color]) {
      rootTree[vendor][category][subcategory][storage][color] = {
        productId
      };
    }
  };
  const createTradeInLead = async (payload) => {
    try {
      const { data } = await post("api/crm/leads/trade-in", payload);
      return data == null ? void 0 : data.data;
    } catch (error) {
      console.error(error);
      return "";
    }
  };
  const getToken = async () => {
    var _a;
    try {
      const { data } = await get("api/tokens/trade-in");
      return (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data.token;
    } catch (error) {
      console.error(error);
      return "";
    }
  };
  const getProductsTree = async () => {
    try {
      const response = await get(
        `${BASE_IT4}site/quest/products?token=${unref(token)}`
      );
      const rootTree = {};
      response.data.value.products.forEach((product) => {
        addProductToTree(product, rootTree);
      });
      return rootTree;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  const getDeviceById = async (productId) => {
    try {
      const response = await post(`${BASE_IT4}site/quest/device`, null, {
        params: {
          token: unref(token),
          productId
        }
      });
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const getFirstQuestion = async (deviceId) => {
    try {
      const response = await get(`${BASE_IT4}site/quest/question`, {
        token: unref(token),
        deviceId,
        lang: locale.value
      });
      return response == null ? void 0 : response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const getNextQuestion = async (questionParams = {}) => {
    try {
      const response = await post(
        `${BASE_IT4}site/quest/question`,
        null,
        {
          params: {
            token: unref(token),
            lang: locale.value,
            c: "",
            ans: "",
            ...questionParams
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return {
    getToken,
    getFirstQuestion,
    getNextQuestion,
    getDeviceById,
    getProductsTree,
    createTradeInLead
  };
};
const _sfc_main$7 = {
  __name: "TradeInForm",
  __ssrInlineRender: true,
  props: {
    stepNumber: {
      type: Number,
      default: 3
    },
    profitPrice: {
      type: Number,
      default: void 0
    },
    catalogDevicesPrice: {
      type: Number,
      default: void 0
    },
    discount: {
      type: Number,
      default: void 0
    },
    showUserDevices: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit:success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { pushGtmEvent } = useGtm();
    const { getErrors, defaultRequiredMessage } = useFormUtils();
    const { createTradeInLead } = useBreezyApiService();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const isLoading = ref(false);
    const isMounted = ref(false);
    const paymentModalKeys = inject("modalKeys");
    const { userDevices, catalogDevices, userDevicesTotalPrice, userDevicesTopUp } = useTradeInStore();
    const updatedCatalogDevices = catalogDevices.value.map((item) => ({
      device: {
        exchangeProduct: item.product
      }
    }));
    const combinedDevices = ref([
      ...userDevices.value,
      ...updatedCatalogDevices.slice(userDevices.value.length)
    ]);
    const totalTradeInGradePrice = computed(
      () => userDevicesTotalPrice.value - userDevicesTopUp.value
    );
    const totalPrice = computed(
      () => props.catalogDevicesPrice > totalTradeInGradePrice.value ? props.catalogDevicesPrice - userDevicesTotalPrice.value : 1
    );
    const firstNameErrors = computed(() => getErrors(v$.value.name));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const emailErrors = computed(() => getErrors(v$.value.email));
    const formData = reactive({
      name: null,
      phone: null,
      email: null,
      dontCallMe: false,
      personalAgreement: true
    });
    const formRules = computed(() => ({
      name: { defaultRequiredMessage },
      phone: { defaultRequiredMessage },
      email: { defaultRequiredMessage }
    }));
    const v$ = useVuelidate(formRules, formData);
    const isValidForm = () => {
      var _a, _b;
      (_a = v$.value) == null ? void 0 : _a.$touch();
      return !((_b = v$.value) == null ? void 0 : _b.$invalid);
    };
    const handleBlur = (fieldName) => {
      var _a, _b;
      (_b = (_a = v$.value) == null ? void 0 : _a[fieldName]) == null ? void 0 : _b.$touch();
    };
    const submitForm = async () => {
      var _a, _b;
      if (isLoading.value) {
        return;
      }
      if (!isValidForm() || !formData.personalAgreement) {
        return;
      }
      const form = {
        user: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        },
        marks: {
          is_call_back: !formData.dontCallMe
        },
        trade_in_sets: userDevices.value.map(({ grade, ...rest }) => ({
          ...rest,
          grade: {
            ...grade,
            price: rest.totalPriceWithTopUp - rest.totalPriceTopUp
          }
        })),
        crm_ids: catalogDevices.value.map((el) => {
          var _a3;
          var _a2;
          return (_a3 = (_a2 = el == null ? void 0 : el.product) == null ? void 0 : _a2.crm_id) != null ? _a3 : null;
        }).filter((el) => !!el)
      };
      pushGtmEvent("tradeInSubmit", {
        currency: (_b = (_a = userDevices.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.exchangeProduct.currency,
        value: props.profitPrice,
        items: userDevices.value.map((device) => {
          var _a2;
          return {
            old_item_name: device.device.name || device.device.subcategory,
            new_item_name: (_a2 = device.exchangeProduct) == null ? void 0 : _a2.name,
            discount: props.discount,
            trade_value: device.totalPriceWithTopUp
          };
        })
      });
      try {
        isLoading.value = true;
        await createTradeInLead(form);
        emit("submit:success");
      } catch (e) {
        console.error(e);
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_TradeInDialogTitle = TradeInDialogTitle;
      const _component_CheckoutTradeInItem = __nuxt_component_1;
      const _component_CurrencyText = __nuxt_component_1$3;
      const _component_Form = __nuxt_component_0$1;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_TextInput = _sfc_main$i;
      const _component_PhoneInput = __nuxt_component_4;
      const _component_UiCheckbox = _sfc_main$j;
      const _component_UiPreloader = __nuxt_component_2$2;
      const _component_Button = __nuxt_component_6;
      const _component_PolicyCheckbox = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-form" }, _attrs))}><div class="trade-in-form_content">`);
      if (unref(isMounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(ssrRenderComponent(_component_TradeInDialogTitle, null, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("trade_in_form_title"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("trade_in_form_title")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        }, `#${unref(paymentModalKeys).header}`, false, _parent);
      } else {
        _push(`<!---->`);
      }
      if (__props.showUserDevices) {
        _push(`<div class="trade-in-form_products"><!--[-->`);
        ssrRenderList(unref(combinedDevices), (device, index) => {
          _push(`<div class="trade-in-form_product">`);
          _push(ssrRenderComponent(_component_CheckoutTradeInItem, {
            device,
            "show-options": false,
            "show-total-benefit": true
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="trade-in-form_total-trade-in"><div class="trade-in-form_total-trade-in-benefit"><p class="trade-in-form_total-trade-in-benefit-text">${ssrInterpolate(_ctx.$t("trade_in_benefit"))} <span>${ssrInterpolate(`-${unref(formatPriceWithSpaces)(unref(totalTradeInGradePrice))}`)} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: (_b = (_a = unref(userDevices)) == null ? void 0 : _a[0].exchangeProduct) == null ? void 0 : _b.currency,
          "use-default": ""
        }, null, _parent));
        _push(`</span></p>`);
        if (unref(userDevicesTopUp) > 0) {
          _push(`<p class="trade-in-form_total-trade-in-benefit-text">${ssrInterpolate(_ctx.$t("trade_in_additional_benefit"))} <span>${ssrInterpolate(`-${unref(formatPriceWithSpaces)(unref(userDevicesTopUp))}`)} `);
          _push(ssrRenderComponent(_component_CurrencyText, {
            currency: (_d = (_c = unref(userDevices)) == null ? void 0 : _c[0].exchangeProduct) == null ? void 0 : _d.currency,
            "use-default": ""
          }, null, _parent));
          _push(`</span></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="trade-in-form_total-trade-in-price">${ssrInterpolate(_ctx.$t("preliminary_total_cost"))} <span>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(totalPrice)))} `);
        _push(ssrRenderComponent(_component_CurrencyText, {
          currency: (_f = (_e = unref(userDevices)) == null ? void 0 : _e[0].exchangeProduct) == null ? void 0 : _f.currency,
          "use-default": ""
        }, null, _parent));
        _push(`</span></p><p class="trade-in-form_total-trade-in-hint">${ssrInterpolate(_ctx.$t("trade_in_benefit_message"))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Form, { class: "trade-in-form_fields" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: _ctx.$t("full_name"),
                    disabled: unref(isLoading),
                    errors: unref(firstNameErrors),
                    "data-attributes": { field: unref(formData).name },
                    name: "name",
                    required: "",
                    onBlur: ($event) => handleBlur("name")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                      label: _ctx.$t("full_name"),
                      disabled: unref(isLoading),
                      errors: unref(firstNameErrors),
                      "data-attributes": { field: unref(formData).name },
                      name: "name",
                      required: "",
                      onBlur: ($event) => handleBlur("name")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled", "errors", "data-attributes", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PhoneInput, {
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    class: "checkout-input",
                    disabled: unref(isLoading),
                    errors: unref(phoneErrors),
                    "data-attributes": { field: unref(formData).phone },
                    required: "",
                    label: _ctx.$t("phone"),
                    name: "phone",
                    onBlur: ($event) => handleBlur("phone")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PhoneInput, {
                      modelValue: unref(formData).phone,
                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                      class: "checkout-input",
                      disabled: unref(isLoading),
                      errors: unref(phoneErrors),
                      "data-attributes": { field: unref(formData).phone },
                      required: "",
                      label: _ctx.$t("phone"),
                      name: "phone",
                      onBlur: ($event) => handleBlur("phone")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "label", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    disabled: unref(isLoading),
                    errors: unref(emailErrors),
                    label: _ctx.$t("email"),
                    required: "",
                    "data-attributes": { field: unref(formData).email },
                    name: "email",
                    type: "email",
                    onBlur: ($event) => handleBlur("email")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).email,
                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                      disabled: unref(isLoading),
                      errors: unref(emailErrors),
                      label: _ctx.$t("email"),
                      required: "",
                      "data-attributes": { field: unref(formData).email },
                      name: "email",
                      type: "email",
                      onBlur: ($event) => handleBlur("email")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "label", "data-attributes", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: _ctx.$t("full_name"),
                    disabled: unref(isLoading),
                    errors: unref(firstNameErrors),
                    "data-attributes": { field: unref(formData).name },
                    name: "name",
                    required: "",
                    onBlur: ($event) => handleBlur("name")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled", "errors", "data-attributes", "onBlur"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PhoneInput, {
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    class: "checkout-input",
                    disabled: unref(isLoading),
                    errors: unref(phoneErrors),
                    "data-attributes": { field: unref(formData).phone },
                    required: "",
                    label: _ctx.$t("phone"),
                    name: "phone",
                    onBlur: ($event) => handleBlur("phone")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "label", "onBlur"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    disabled: unref(isLoading),
                    errors: unref(emailErrors),
                    label: _ctx.$t("email"),
                    required: "",
                    "data-attributes": { field: unref(formData).email },
                    name: "email",
                    type: "email",
                    onBlur: ($event) => handleBlur("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "label", "data-attributes", "onBlur"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCheckbox, {
        modelValue: unref(formData).dontCallMe,
        "onUpdate:modelValue": ($event) => unref(formData).dontCallMe = $event,
        disabled: unref(isLoading),
        name: "callback",
        "hide-details": "",
        class: "trade-in-form_call-back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("dont_call_me"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("dont_call_me")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UiPreloader, {
          size: 30,
          class: "trade-in-form_preloader"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isMounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(ssrRenderComponent(_component_Button, {
            disabled: unref(isLoading) || !unref(formData).personalAgreement,
            onClick: submitForm,
            "full-width": ""
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("next"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("next")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_PolicyCheckbox, {
            modelValue: unref(formData).personalAgreement,
            "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
            disabled: unref(isLoading),
            name: "personalAgreement",
            class: "trade-in-form_form-agree"
          }, null, _parent));
        }, `#${unref(paymentModalKeys).footer}`, false, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInPaymentStep/TradeInForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("trade-in-qr.CFiWf_Ia.svg");
const _sfc_main$6 = {
  __name: "TradeInThankYouDialog",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "thank-you-info" }, _attrs))} data-v-d865d44b><div class="thank-you-info_content" data-v-d865d44b><div class="thank-you-info_icon" data-v-d865d44b>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "tradeInSuccessIcon" }, null, _parent));
      _push(`</div><div class="thank-you-info_title" data-v-d865d44b>${ssrInterpolate(_ctx.$t("trade_in_thank_you_dialog_title"))}</div><div class="thank-you-info_qr-info" data-v-d865d44b><img${ssrRenderAttr("src", _imports_0)} class="thank-you-info_qr-image" data-v-d865d44b><a href="https://diag.nsystools.com/Links/Get" target="_blank" class="thank-you-info_qr-link" data-v-d865d44b>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "downloadIcon" }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("download_app_title"))}</a><span class="thank-you-info_subtitle" data-v-d865d44b>${ssrInterpolate(_ctx.$t("download_app_description"))}</span></div>`);
      _push(ssrRenderComponent(_component_Button, {
        "full-width": "",
        onClick: ($event) => emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("trade_in_thank"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("trade_in_thank")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInThankYouDialog.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TradeInThankYouDialog = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d865d44b"]]);
const useDeviceForm = (initialDevice) => {
  const productsTree = shallowRef({});
  const deviceForm = ref({
    vendor: "",
    category: "",
    subcategory: "",
    storage: "",
    color: "",
    productId: "",
    exchangeProduct: ""
  });
  const setTradeInProducts = (products) => {
    productsTree.value = products;
  };
  const selectColor = (color) => {
    var _a2;
    var _a, _b, _c, _d;
    deviceForm.value.color = color;
    const { vendor, category, subcategory, storage: storage2 } = deviceForm.value;
    const product = (_a2 = (_d = (_c = (_b = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) == null ? void 0 : _b[subcategory]) == null ? void 0 : _c[storage2]) == null ? void 0 : _d[color]) != null ? _a2 : {};
    if (product) {
      deviceForm.value.productId = product.productId;
    } else {
      deviceForm.value.productId = "";
    }
  };
  const selectStorage = (storage2) => {
    var _a2;
    var _a, _b, _c;
    deviceForm.value.storage = storage2;
    const { vendor, category, subcategory } = deviceForm.value;
    const colors2 = Object.keys(
      (_a2 = (_c = (_b = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) == null ? void 0 : _b[subcategory]) == null ? void 0 : _c[storage2]) != null ? _a2 : {}
    );
    if (colors2.length === 1) {
      selectColor(colors2[0]);
    } else {
      selectColor("");
    }
  };
  const selectSubcategory = (subcategory) => {
    var _a2;
    var _a, _b;
    deviceForm.value.subcategory = subcategory;
    const { vendor, category } = deviceForm.value;
    const storage2 = Object.keys(
      (_a2 = (_b = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) == null ? void 0 : _b[subcategory]) != null ? _a2 : {}
    );
    if (storage2.length === 1) {
      selectStorage(storage2[0]);
    } else {
      selectStorage("");
    }
  };
  const selectCategory = (category) => {
    var _a2;
    var _a;
    deviceForm.value.category = category;
    const { vendor } = deviceForm.value;
    const subcategories2 = Object.keys(
      (_a2 = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) != null ? _a2 : {}
    );
    if (subcategories2.length === 1) {
      selectSubcategory(subcategories2[0]);
    } else {
      selectSubcategory("");
    }
  };
  const selectVendor = (vendor) => {
    deviceForm.value.vendor = vendor;
    const categories2 = Object.keys(productsTree.value[vendor]);
    if (categories2.length === 1) {
      selectCategory(categories2[0]);
    } else {
      selectCategory("");
    }
  };
  const colors = computed(() => {
    var _a, _b, _c;
    if (isEmpty(productsTree.value)) return [];
    const { vendor, category, subcategory, storage: storage2 } = deviceForm.value;
    if (!((_c = (_b = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) == null ? void 0 : _b[subcategory]) == null ? void 0 : _c[storage2]))
      return [];
    const colorsKeys = Object.keys(
      productsTree.value[vendor][category][subcategory][storage2]
    );
    return colorsKeys;
  });
  const storage = computed(() => {
    var _a, _b;
    if (isEmpty(productsTree.value)) return [];
    const { vendor, category, subcategory } = deviceForm.value;
    if (!((_b = (_a = productsTree.value[vendor]) == null ? void 0 : _a[category]) == null ? void 0 : _b[subcategory])) return [];
    const storageKeys = Object.keys(
      productsTree.value[vendor][category][subcategory]
    );
    return storageKeys;
  });
  const subcategories = computed(() => {
    var _a;
    if (isEmpty(productsTree.value)) return [];
    const { vendor, category } = deviceForm.value;
    if (!((_a = productsTree.value[vendor]) == null ? void 0 : _a[category])) return [];
    const subcategoriesKeys = Object.keys(productsTree.value[vendor][category]);
    return subcategoriesKeys;
  });
  const categories = computed(() => {
    if (isEmpty(productsTree.value)) return [];
    const { vendor } = deviceForm.value;
    if (!productsTree.value[vendor]) return [];
    const categoriesKeys = Object.keys(productsTree.value[vendor]);
    return categoriesKeys;
  });
  const vendors = computed(() => {
    if (isEmpty(productsTree.value)) return [];
    const vendorsKeys = Object.keys(productsTree.value);
    return vendorsKeys;
  });
  const resetExchangeProduct = () => {
    deviceForm.value.exchangeProduct = null;
  };
  const resetDeviceForm = () => {
    deviceForm.value = {
      vendor: "",
      category: "",
      subcategory: "",
      storage: "",
      color: "",
      productId: "",
      exchangeProduct: ""
    };
  };
  watch(
    () => initialDevice,
    (newVal) => {
      if (newVal) {
        deviceForm.value = {
          ...deviceForm.value,
          ...newVal
        };
      }
    },
    {
      immediate: true
    }
  );
  return {
    selectVendor,
    selectCategory,
    selectSubcategory,
    selectStorage,
    selectColor,
    vendors,
    categories,
    subcategories,
    storage,
    colors,
    deviceForm,
    setTradeInProducts,
    resetExchangeProduct,
    resetDeviceForm
  };
};
const useUserDeviceGradeQuestions = (token, deviceId) => {
  const isLoading = ref(false);
  const question = ref(null);
  const finishDeviceGrade = ref(null);
  const answers = ref([]);
  const currentQuestionIndex = ref(0);
  const isRequestError = ref(false);
  const lastQuestionIndex = ref(null);
  const isLastQuestion = ref(false);
  let newQuestion = null;
  const { getFirstQuestion, getNextQuestion } = useBreezyApiService(token);
  const isDifferentAnswerOnTheSameQuestion = (newAnswer) => {
    if (answers.value[currentQuestionIndex.value] === void 0) return true;
    const prevQuestion = answers.value[currentQuestionIndex.value].question;
    let prevOptions = answers.value[currentQuestionIndex.value].answer;
    let newOptions = newAnswer;
    if (prevQuestion.answerType === "MULTISELECT") {
      newOptions = newAnswer.map((option) => option.cid).join();
      prevOptions = prevQuestion.answer.map((option) => option.cid).join();
    }
    if (prevQuestion.answerType === "SINGLESELECT") {
      newOptions = newAnswer.cid;
      prevOptions = prevOptions.cid;
    }
    if (newOptions === prevOptions) {
      if (lastQuestionIndex.value !== currentQuestionIndex.value) {
        currentQuestionIndex.value++;
      }
      if (answers.value[currentQuestionIndex.value] === void 0) {
        question.value = newQuestion;
        newQuestion = null;
        return false;
      }
      question.value = answers.value[currentQuestionIndex.value].question;
      return false;
    }
    question.value = prevQuestion;
    answers.value = answers.value.slice(0, currentQuestionIndex.value);
    newQuestion = null;
    return true;
  };
  const backQuestion = () => {
    if (currentQuestionIndex.value === 0) {
      return;
    }
    if (newQuestion === null) {
      newQuestion = question.value;
    }
    currentQuestionIndex.value--;
    question.value = answers.value[currentQuestionIndex.value].question;
  };
  const onSingleSelect = async (selectedOption) => {
    if (lastQuestionIndex.value === currentQuestionIndex.value) {
      isLastQuestion.value = true;
    }
    if (isLoading.value) {
      return;
    }
    if (isDifferentAnswerOnTheSameQuestion(selectedOption) === false) {
      return;
    }
    answers.value.push({
      question: question.value,
      answer: selectedOption
    });
    isLoading.value = true;
    const newQuestionRes = await getNextQuestion({
      deviceId: unref(deviceId),
      questionId: question.value.questionId,
      c: selectedOption.cid
    });
    if (!newQuestionRes.value.hasOwnProperty("last")) {
      finishDeviceGrade.value = newQuestionRes.value;
      isLoading.value = false;
      lastQuestionIndex.value = currentQuestionIndex.value;
      isLastQuestion.value = true;
      return;
    }
    question.value = newQuestionRes.value;
    isLoading.value = false;
    currentQuestionIndex.value++;
  };
  const onAnswer = async (isYes) => {
    if (lastQuestionIndex.value === currentQuestionIndex.value) {
      isLastQuestion.value = true;
    }
    if (isLoading.value) {
      return;
    }
    const answerType = isYes ? "Y" : "N";
    if (isDifferentAnswerOnTheSameQuestion(answerType) === false) {
      return;
    }
    answers.value.push({
      question: question.value,
      answer: answerType
    });
    isLoading.value = true;
    const newQuestionRes = await getNextQuestion({
      deviceId: unref(deviceId),
      questionId: question.value.questionId,
      ans: answerType
    });
    if (!newQuestionRes.value.hasOwnProperty("last")) {
      finishDeviceGrade.value = newQuestionRes.value;
      isLoading.value = false;
      lastQuestionIndex.value = currentQuestionIndex.value;
      isLastQuestion.value = true;
      return;
    }
    question.value = newQuestionRes.value;
    isLoading.value = false;
    currentQuestionIndex.value++;
  };
  const onMultiselect = async (selectedOptions) => {
    if (lastQuestionIndex.value === currentQuestionIndex.value) {
      isLastQuestion.value = true;
    }
    if (isLoading.value) {
      return;
    }
    if (isDifferentAnswerOnTheSameQuestion(selectedOptions) === false) {
      return;
    }
    answers.value.push({
      question: question.value,
      answer: selectedOptions
    });
    isLoading.value = true;
    const answersString = selectedOptions.map((option) => option.cid).join(",");
    const newQuestionRes = await getNextQuestion({
      deviceId: unref(deviceId),
      questionId: question.value.questionId,
      c: answersString
    });
    if (!newQuestionRes.value.hasOwnProperty("last")) {
      finishDeviceGrade.value = newQuestionRes.value;
      isLoading.value = false;
      lastQuestionIndex.value = currentQuestionIndex.value;
      isLastQuestion.value = true;
      return;
    }
    question.value = newQuestionRes.value;
    isLoading.value = false;
    currentQuestionIndex.value++;
  };
  const initQuestions = async () => {
    currentQuestionIndex.value = 0;
    answers.value = [];
    const firstQuestion = await getFirstQuestion(unref(deviceId));
    question.value = firstQuestion.value;
    if (!question.value) {
      isRequestError.value = true;
    }
  };
  const resetIsLastQuestion = () => {
    isLastQuestion.value = false;
  };
  const resetLastQuestionIndex = () => {
    lastQuestionIndex.value = null;
  };
  return {
    answers,
    question,
    isLoading,
    onMultiselect,
    onAnswer,
    onSingleSelect,
    backQuestion,
    initQuestions,
    finishDeviceGrade,
    lastQuestionIndex,
    isLastQuestion,
    resetIsLastQuestion,
    currentQuestionIndex,
    isRequestError,
    resetLastQuestionIndex
  };
};
const _sfc_main$5 = {
  __name: "TradeInQuestionDescription",
  __ssrInlineRender: true,
  props: {
    description: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-question-description" }, _attrs))}>${(_a = __props.description) != null ? _a : ""}</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInQuestionDescription.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "TradeInAnswer",
  __ssrInlineRender: true,
  props: {
    question: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0$1;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_Form, mergeProps({ class: "trade-in-answer" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TradeInDialogTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.question.question)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.question.question), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TradeInDialogTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.question.question), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.question.description) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      description: __props.question.description
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.question.description ? (openBlock(), createBlock(_sfc_main$5, {
                      key: 0,
                      description: __props.question.description
                    }, null, 8, ["description"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="trade-in-answer_buttons" data-v-be898a7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              secondary: "",
              "full-width": "",
              loading: __props.loading,
              onClick: ($event) => _ctx.$emit("yes")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("yes"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("yes")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              secondary: "",
              "full-width": "",
              loading: __props.loading,
              onClick: ($event) => _ctx.$emit("no")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("no"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("no")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(TradeInDialogTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.question.question), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  __props.question.description ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 0,
                    description: __props.question.description
                  }, null, 8, ["description"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode("div", { class: "trade-in-answer_buttons" }, [
                createVNode(_component_Button, {
                  secondary: "",
                  "full-width": "",
                  loading: __props.loading,
                  onClick: ($event) => _ctx.$emit("yes")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("yes")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"]),
                createVNode(_component_Button, {
                  secondary: "",
                  "full-width": "",
                  loading: __props.loading,
                  onClick: ($event) => _ctx.$emit("no")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("no")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/questions/TradeInAnswer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TradeInAnswer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-be898a7c"]]);
const _sfc_main$3 = {
  __name: "TradeInSingleSelect",
  __ssrInlineRender: true,
  props: {
    question: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const selectedOption = ref(null);
    const answerValue = ref(null);
    const tradeInModalKeys = inject("modalKeys");
    const changeSelectedValue = () => {
      selectedOption.value = props.question.options.find(
        (option) => option.cid === answerValue.value
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRadio = __nuxt_component_0$2;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-single-select" }, _attrs))}>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(TradeInDialogTitle), null, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`${ssrInterpolate(__props.question.question)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.question.question), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, `#${unref(tradeInModalKeys).header}`, false, _parent);
      if (__props.question.description) {
        _push(ssrRenderComponent(unref(_sfc_main$5), {
          description: __props.question.description
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="trade-in-single-select_options"><!--[-->`);
      ssrRenderList(__props.question.options, (option, key) => {
        _push(ssrRenderComponent(_component_UiRadio, {
          key,
          modelValue: unref(answerValue),
          "onUpdate:modelValue": ($event) => isRef(answerValue) ? answerValue.value = $event : null,
          checked: unref(answerValue) === option.cid,
          disabled: _ctx.isLoading,
          name: option.cname,
          value: option.cid,
          class: "trade-in-single-select_option",
          onChange: ($event) => changeSelectedValue(option.cid)
        }, {
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(`<div class="trade-in-single-select_option-label"${_scopeId}><h4 class="trade-in-single-select_option-name"${_scopeId}>${ssrInterpolate(option.cname)}</h4>`);
              if (option.description) {
                _push2(`<p class="trade-in-single-select_option-description"${_scopeId}>${(_a = option.description) != null ? _a : ""}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "trade-in-single-select_option-label" }, [
                  createVNode("h4", { class: "trade-in-single-select_option-name" }, toDisplayString(option.cname), 1),
                  option.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "trade-in-single-select_option-description",
                    innerHTML: option.description
                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_Button, {
          disabled: !unref(selectedOption),
          "full-width": "",
          loading: __props.loading,
          class: "trade-in-single-select_next-button",
          onClick: ($event) => _ctx.$emit("update:modelValue", unref(selectedOption))
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("next"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("next")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, `#${unref(tradeInModalKeys).footer}`, false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/questions/TradeInSingleSelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = defineComponent({
  name: "TradeInQuestionContent"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-content" }, _attrs))} data-v-d312f3b6>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInQuestionContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TradeInQuestionContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d312f3b6"]]);
const _sfc_main$1 = {
  __name: "TradeInMultiselect",
  __ssrInlineRender: true,
  props: {
    question: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const checkSelectedOption = (cid) => selectedOptions.value.find((item) => item.cid === cid);
    const selectedOptions = ref([]);
    const setSelectedOptions = (option) => {
      if (checkSelectedOption(option.cid)) {
        selectedOptions.value = selectedOptions.value.filter(
          (item) => item.cname !== option.cname
        );
      } else {
        selectedOptions.value.push(option);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCheckbox = _sfc_main$j;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-multi-select" }, _attrs))} data-v-f9a2dd82>`);
      _push(ssrRenderComponent(unref(TradeInDialogTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.question.question)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.question.question), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.question.description) {
        _push(ssrRenderComponent(unref(_sfc_main$5), {
          description: __props.question.description
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(TradeInQuestionContent), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.question.options, (option) => {
              _push2(ssrRenderComponent(_component_UiCheckbox, {
                key: option.cid,
                disabled: __props.loading,
                name: option.cname,
                value: checkSelectedOption(option.cid),
                onOnChange: ($event) => setSelectedOptions(option)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(option.cname)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(option.cname), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.question.options, (option) => {
                return openBlock(), createBlock(_component_UiCheckbox, {
                  key: option.cid,
                  disabled: __props.loading,
                  name: option.cname,
                  value: checkSelectedOption(option.cid),
                  onOnChange: ($event) => setSelectedOptions(option)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option.cname), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "name", "value", "onOnChange"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        disabled: !unref(selectedOptions).length,
        "full-width": "",
        loading: __props.loading,
        onClick: ($event) => _ctx.$emit("next", unref(selectedOptions))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("next"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("next")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/questions/TradeInMultiselect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TradeInMultiselect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f9a2dd82"]]);
const _sfc_main = {
  __name: "TradeInDeviceGrade",
  __ssrInlineRender: true,
  props: {
    initialUserDevice: {
      type: Object,
      default: () => {
      }
    },
    exchangeItems: {
      type: Array,
      default: () => []
    },
    showUserDevices: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const route = useRoute();
    const { t } = useI18n();
    const token = ref("");
    const formKey = ref(1);
    const initialDeviceGrade = ref(null);
    const productCounter = ref(props.initialUserDevice.productCounter);
    const existingProduct = ref(false);
    const deviceId = ref(null);
    const isLoadingDeviceInfo = ref(false);
    const step = ref("device");
    const isErrorMessageShown = ref(false);
    const isTradeInPage = route.name.includes("trade-in");
    const isProductPage = route.name.includes("product");
    const isMounted = ref(false);
    const cachedNewCatalogDevice = ref(null);
    const selectedExchangeProduct = ref(null);
    const tradeInModalKeys = inject("modalKeys");
    const {
      addUserDevice,
      changeUserDevice,
      addCatalogDevice,
      addCatalogDeviceToLC,
      setExternalProductsTree,
      externalProductsTree,
      userDevices,
      resetUserDevices,
      catalogDevices
    } = useTradeInStore();
    const {
      answers,
      currentQuestionIndex,
      isLoading: isLoadingQuestion,
      initQuestions,
      question,
      onMultiselect,
      onAnswer,
      onSingleSelect,
      backQuestion,
      finishDeviceGrade,
      isRequestError,
      isLastQuestion,
      resetIsLastQuestion,
      resetLastQuestionIndex
    } = useUserDeviceGradeQuestions(token, deviceId);
    const { getToken, getProductsTree, getDeviceById } = useBreezyApiService(token);
    const specialGrading = computed(
      () => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = initialDeviceGrade.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.buyoutTopUp) == null ? void 0 : _c.specialGrading) == null ? void 0 : _d.filter(
          (el) => el.name
        )) || [];
      }
    );
    const userDevicesPrice = computed(
      () => userDevices.value.reduce((acc, current) => {
        const price = (current == null ? void 0 : current.totalPriceWithTopUp) ? Number(current.totalPriceWithTopUp) : 0;
        return acc + price;
      }, 0)
    );
    const catalogDevicesPrice = computed(
      () => props.initialUserDevice.product.final_price * props.initialUserDevice.productCounter
    );
    const showTradeInMainContent = computed(
      () => step.value !== "select_device" && step.value !== "form_step" && step.value !== "success_step"
    );
    const profitPrice = computed(() => {
      var _a2;
      const profit = ((_a2 = catalogDevicesPrice.value) != null ? _a2 : 0) - (userDevicesPrice.value || 0);
      if (profit > 0) {
        return profit;
      }
      return 1;
    });
    const showThankYouDialog = () => {
      resetUserDevices();
      step.value = "success_step";
      formKey.value++;
    };
    const setInitialDeviceGradePrices = () => {
      var _a3, _b2;
      var _a2, _b;
      const deviceGrade = (_a2 = initialDeviceGrade.value) == null ? void 0 : _a2.data;
      const gradings = (_b = deviceGrade == null ? void 0 : deviceGrade.buyoutTopUp) == null ? void 0 : _b.specialGrading;
      if (!gradings) {
        deviceGrade.buyoutTopUp.specialGrading = [];
        return;
      }
      const price = Number((_a3 = deviceGrade == null ? void 0 : deviceGrade.instantAmount) != null ? _a3 : 0);
      const benefit = Number((_b2 = deviceGrade == null ? void 0 : deviceGrade.price) != null ? _b2 : 0);
      gradings.forEach((el) => {
        var _a4;
        var _a32;
        const topUpDiscount = Number((_a4 = (_a32 = el.grades[0]) == null ? void 0 : _a32.price) != null ? _a4 : 0);
        el.initialFinalPrice = price + benefit + topUpDiscount;
      });
    };
    const {
      selectVendor,
      selectCategory,
      selectSubcategory,
      selectStorage,
      selectColor,
      vendors,
      categories,
      subcategories,
      storage,
      colors,
      setTradeInProducts,
      deviceForm,
      resetExchangeProduct,
      resetDeviceForm
    } = useDeviceForm((_a = props.initialUserDevice) == null ? void 0 : _a.device);
    const createOptions = (data) => data.map((item) => ({ label: item, value: item }));
    const vendorOptions = computed(() => createOptions(vendors.value));
    const categoriesOptions = computed(() => createOptions(categories.value));
    const subcategoriesOptions = computed(() => createOptions(subcategories.value));
    const storageOptions = computed(() => createOptions(storage.value));
    const colorsOptions = computed(() => createOptions(colors.value));
    const getComputedExchangeItems = () => {
      var _a2, _b, _c, _d;
      const result = [...props.exchangeItems];
      if (((_a2 = props.initialUserDevice) == null ? void 0 : _a2.exchangeProduct) && ((_b = props.initialUserDevice) == null ? void 0 : _b.exchange_device_sku)) {
        result.unshift({ ...(_c = props.initialUserDevice) == null ? void 0 : _c.exchangeProduct });
        deviceForm.value.exchangeProduct = (_d = props.initialUserDevice) == null ? void 0 : _d.exchangeProduct;
      } else {
        resetExchangeProduct();
      }
      if (isTradeInPage) {
        result.push({
          name: `+ ${t("trade_in_new_device_title")}`,
          id: "add_new_device"
        });
      }
      return result;
    };
    const computedExchangeItems = ref(getComputedExchangeItems());
    const computedExchangeOptions = computed(
      () => computedExchangeItems.value.map((item) => ({
        label: item == null ? void 0 : item.name,
        value: item == null ? void 0 : item.name
      }))
    );
    const initDeviceInfo = async (productId) => {
      var _a2, _b;
      initialDeviceGrade.value = await getDeviceById(productId);
      deviceId.value = (_b = (_a2 = initialDeviceGrade.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.deviceId;
      setInitialDeviceGradePrices();
      await initQuestions();
    };
    const initData = async () => {
      token.value = await getToken();
      if (!token.value) {
        isErrorMessageShown.value = true;
      }
      if (!isEmpty(externalProductsTree.value)) {
        setTradeInProducts(externalProductsTree.value);
        if (deviceForm.value.productId) {
          isLoadingDeviceInfo.value = true;
          await initDeviceInfo(deviceForm.value.productId);
          isLoadingDeviceInfo.value = false;
        }
        return;
      }
      isLoadingDeviceInfo.value = true;
      const productsTree = await getProductsTree();
      if (!productsTree) {
        isErrorMessageShown.value = true;
      }
      setExternalProductsTree(productsTree);
      setTradeInProducts(productsTree);
      isLoadingDeviceInfo.value = false;
    };
    initData();
    const addDevice = () => {
      step.value = "device";
      productCounter.value--;
      existingProduct.value = false;
      resetDeviceForm();
      resetIsLastQuestion();
      resetLastQuestionIndex();
    };
    const nextStep = async () => {
      var _a2;
      if (step.value === "device") {
        if ((((_a2 = props.exchangeItems) == null ? void 0 : _a2.length) || isTradeInPage) && !isProductPage) {
          step.value = "exchange";
          return;
        }
        isLoadingDeviceInfo.value = true;
        await initDeviceInfo(deviceForm.value.productId);
        isLoadingDeviceInfo.value = false;
        step.value = "questions";
      }
      if (step.value === "exchange") {
        step.value = "questions";
        isLoadingDeviceInfo.value = true;
        await initDeviceInfo(deviceForm.value.productId);
        isLoadingDeviceInfo.value = false;
      }
      if (step.value === "add_device") {
        step.value = "form_step";
      }
    };
    const prevStep = () => {
      var _a2;
      if (((_a2 = props.exchangeItems) == null ? void 0 : _a2.length) && step.value === "questions" && currentQuestionIndex.value === 0) {
        step.value = "exchange";
        return;
      }
      if (step.value === "add_device") {
        step.value = "questions";
        existingProduct.value = true;
        resetIsLastQuestion();
        return;
      }
      if (step.value === "exchange" || currentQuestionIndex.value === 0) {
        step.value = "device";
      } else {
        backQuestion();
      }
    };
    const isLoading = computed(
      () => isLoadingDeviceInfo.value || isLoadingQuestion.value
    );
    const isShownTopUpBanner = computed(
      () => {
        var _a2;
        return !!(((_a2 = specialGrading.value) == null ? void 0 : _a2.length) && !isLoading.value);
      }
    );
    const rememberNewDevice = ($event) => {
      cachedNewCatalogDevice.value = $event;
    };
    const changeExchangeProduct = (productName) => {
      var _a2;
      deviceForm.value.exchangeProduct = (_a2 = computedExchangeItems.value) == null ? void 0 : _a2.find(
        (product) => product.name === productName
      );
    };
    watch(
      () => {
        var _a2;
        return (_a2 = deviceForm.value) == null ? void 0 : _a2.productId;
      },
      async (productId) => {
        if (productId) {
          isLoadingDeviceInfo.value = true;
          await initDeviceInfo(productId);
          isLoadingDeviceInfo.value = false;
        } else {
          initialDeviceGrade.value = null;
          deviceId.value = null;
        }
      }
    );
    watch(step, (value) => {
      if (value === "questions" && isProductPage) {
        changeExchangeProduct(props.initialUserDevice.product.name);
        selectedExchangeProduct.value = props.initialUserDevice.product.name;
      }
    });
    watch(isRequestError, (value) => {
      if (value) {
        isErrorMessageShown.value = true;
      }
    });
    watch(
      () => finishDeviceGrade.value,
      (finishDevice) => {
        var _a2, _b, _c, _d, _e, _f, _g;
        if (!finishDevice) {
          return;
        }
        let storedExchangeDeviceSku = null;
        let storedExchangeProduct = null;
        let processedDeviceForm = null;
        if (props.showUserDevices) {
          storedExchangeDeviceSku = productCounter.value ? (_b = (_a2 = deviceForm.value) == null ? void 0 : _a2.exchangeProduct) == null ? void 0 : _b.sku : null;
          storedExchangeProduct = productCounter.value ? (_c = deviceForm.value) == null ? void 0 : _c.exchangeProduct : null;
          processedDeviceForm = productCounter.value ? deviceForm.value : { ...deviceForm.value, exchangeProduct: null };
        } else {
          const exchangeProduct = ((_d = cachedNewCatalogDevice.value) == null ? void 0 : _d.product) || ((_e = deviceForm.value) == null ? void 0 : _e.exchangeProduct);
          storedExchangeDeviceSku = exchangeProduct == null ? void 0 : exchangeProduct.sku;
          storedExchangeProduct = exchangeProduct;
          processedDeviceForm = deviceForm.value;
        }
        const deviceSchema = {
          grade: finishDevice.device,
          device: processedDeviceForm,
          exchange_device_sku: storedExchangeDeviceSku,
          exchangeProduct: storedExchangeProduct,
          initialGrade: initialDeviceGrade.value,
          answers: answers.value
        };
        if (((_g = (_f = deviceSchema.device) == null ? void 0 : _f.exchangeProduct) == null ? void 0 : _g.id) === "add_new_device" && (deviceSchema == null ? void 0 : deviceSchema.exchangeProduct)) {
          deviceSchema.device.exchangeProduct = deviceSchema.exchangeProduct;
        }
        const lastDevice = userDevices.value[userDevices.value.length - 1];
        if (props.showUserDevices) {
          if (existingProduct.value) {
            changeUserDevice({
              ...deviceSchema,
              id: lastDevice.id
            });
          } else {
            addUserDevice({
              ...deviceSchema,
              id: generate()
            });
          }
          if (!catalogDevices.value.length) {
            const newDevice = {
              id: generate(),
              product: props.initialUserDevice.product
            };
            addCatalogDevice(newDevice, props.initialUserDevice.productCounter);
          }
        } else if (isEmpty(props.initialUserDevice)) {
          addUserDevice({
            ...deviceSchema,
            id: generate()
          });
        } else {
          changeUserDevice({
            ...deviceSchema,
            id: props.initialUserDevice.id
          });
        }
        if (cachedNewCatalogDevice.value) {
          addCatalogDevice(cachedNewCatalogDevice.value);
          addCatalogDeviceToLC(cachedNewCatalogDevice.value);
        }
        cachedNewCatalogDevice.value = null;
        if (!isProductPage) {
          emit("close");
        }
      }
    );
    watch(isLastQuestion, (value) => {
      if (value && isProductPage) {
        step.value = "add_device";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
      const _component_Button = __nuxt_component_6;
      const _component_Icon = __nuxt_component_1$1;
      const _component_Form = __nuxt_component_0$1;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_UiSelect = __nuxt_component_1$2;
      const _component_CurrencyText = __nuxt_component_1$3;
      const _component_UiPreloader = __nuxt_component_2$2;
      const _component_TradeInTopUpBanner = __nuxt_component_7;
      const _component_TradeInCatalogDevice = TradeInCatalogDevice;
      const _component_TradeInAddDevice = _sfc_main$8;
      const _component_TradeInForm = _sfc_main$7;
      const _component_TradeInThankYouDialog = TradeInThankYouDialog;
      _push(`<!--[-->`);
      if (unref(showTradeInMainContent)) {
        _push(`<div class="trade-in-device-grade" data-v-77396ef2><div class="trade-in-device-grade_content" data-v-77396ef2>`);
        if (unref(isMounted)) {
          ssrRenderTeleport(_push, (_push2) => {
            _push2(ssrRenderComponent(_component_Button, {
              style: unref(step) !== "device" ? null : { display: "none" },
              class: "trade-in-device-grade_back-button",
              onClick: prevStep
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { icon: "chevronLeftIcon" }, null, _parent2, _scopeId));
                  _push3(`<span class="trade-in-device-grade_back-button-text" data-v-77396ef2${_scopeId}>${ssrInterpolate(_ctx.$t("back"))}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, { icon: "chevronLeftIcon" }),
                    createVNode("span", { class: "trade-in-device-grade_back-button-text" }, toDisplayString(_ctx.$t("back")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          }, `#${unref(tradeInModalKeys).header}`, false, _parent);
        } else {
          _push(`<!---->`);
        }
        if (unref(step) === "device") {
          _push(`<!--[-->`);
          if (unref(isMounted)) {
            ssrRenderTeleport(_push, (_push2) => {
              _push2(ssrRenderComponent(unref(TradeInDialogTitle), { class: "trade-in-device-grade_title" }, {
                default: withCtx((_, _push3, _parent2, _scopeId) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("trade_in_old_device_title"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("trade_in_old_device_title")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }, `#${unref(tradeInModalKeys).header}`, false, _parent);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_Form, { class: "trade-in-device-grade_form" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_FormRow, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a32, _b2;
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiSelect, {
                        modelValue: unref(deviceForm).vendor,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).vendor = $event, ($event) => unref(selectVendor)($event)],
                        label: _ctx.$t("trade_in_select_vendor"),
                        options: unref(vendorOptions),
                        disabled: ((_a32 = unref(vendorOptions)) == null ? void 0 : _a32.length) === 0
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).vendor,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).vendor = $event, ($event) => unref(selectVendor)($event)],
                          label: _ctx.$t("trade_in_select_vendor"),
                          options: unref(vendorOptions),
                          disabled: ((_b2 = unref(vendorOptions)) == null ? void 0 : _b2.length) === 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options", "disabled"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormRow, {
                  style: unref(deviceForm).vendor ? null : { display: "none" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiSelect, {
                        modelValue: unref(deviceForm).category,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).category = $event, ($event) => unref(selectCategory)($event)],
                        label: _ctx.$t("trade_in_select_category"),
                        options: unref(categoriesOptions)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).category,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).category = $event, ($event) => unref(selectCategory)($event)],
                          label: _ctx.$t("trade_in_select_category"),
                          options: unref(categoriesOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormRow, {
                  style: unref(deviceForm).vendor ? null : { display: "none" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiSelect, {
                        modelValue: unref(deviceForm).subcategory,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).subcategory = $event, ($event) => unref(selectSubcategory)($event)],
                        label: _ctx.$t("trade_in_select_subcategory"),
                        options: unref(subcategoriesOptions)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).subcategory,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).subcategory = $event, ($event) => unref(selectSubcategory)($event)],
                          label: _ctx.$t("trade_in_select_subcategory"),
                          options: unref(subcategoriesOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormRow, {
                  style: unref(deviceForm).category ? null : { display: "none" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiSelect, {
                        modelValue: unref(deviceForm).storage,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).storage = $event, ($event) => unref(selectStorage)($event)],
                        label: _ctx.$t("trade_in_select_configuration"),
                        options: unref(storageOptions)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).storage,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).storage = $event, ($event) => unref(selectStorage)($event)],
                          label: _ctx.$t("trade_in_select_configuration"),
                          options: unref(storageOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormRow, {
                  style: unref(deviceForm).subcategory ? null : { display: "none" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiSelect, {
                        modelValue: unref(deviceForm).color,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).color = $event, ($event) => unref(selectColor)($event)],
                        label: _ctx.$t("trade_in_select_color"),
                        options: unref(colorsOptions)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).color,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).color = $event, ($event) => unref(selectColor)($event)],
                          label: _ctx.$t("trade_in_select_color"),
                          options: unref(colorsOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_FormRow, null, {
                    default: withCtx(() => {
                      var _a32;
                      return [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(deviceForm).vendor,
                          "onUpdate:modelValue": [($event) => unref(deviceForm).vendor = $event, ($event) => unref(selectVendor)($event)],
                          label: _ctx.$t("trade_in_select_vendor"),
                          options: unref(vendorOptions),
                          disabled: ((_a32 = unref(vendorOptions)) == null ? void 0 : _a32.length) === 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options", "disabled"])
                      ];
                    }),
                    _: 1
                  }),
                  withDirectives(createVNode(_component_FormRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(deviceForm).category,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).category = $event, ($event) => unref(selectCategory)($event)],
                        label: _ctx.$t("trade_in_select_category"),
                        options: unref(categoriesOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(deviceForm).vendor]
                  ]),
                  withDirectives(createVNode(_component_FormRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(deviceForm).subcategory,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).subcategory = $event, ($event) => unref(selectSubcategory)($event)],
                        label: _ctx.$t("trade_in_select_subcategory"),
                        options: unref(subcategoriesOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(deviceForm).vendor]
                  ]),
                  withDirectives(createVNode(_component_FormRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(deviceForm).storage,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).storage = $event, ($event) => unref(selectStorage)($event)],
                        label: _ctx.$t("trade_in_select_configuration"),
                        options: unref(storageOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(deviceForm).category]
                  ]),
                  withDirectives(createVNode(_component_FormRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(deviceForm).color,
                        "onUpdate:modelValue": [($event) => unref(deviceForm).color = $event, ($event) => unref(selectColor)($event)],
                        label: _ctx.$t("trade_in_select_color"),
                        options: unref(colorsOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(deviceForm).subcategory]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          if (unref(initialDeviceGrade)) {
            _push(`<div class="trade-in-device-grade_device-info" data-v-77396ef2><div class="trade-in-device-grade_device-name" data-v-77396ef2>${ssrInterpolate(unref(deviceForm).subcategory)}, ${ssrInterpolate(unref(deviceForm).storage)}, ${ssrInterpolate(unref(deviceForm).color)}</div><span class="trade-in-device-grade_device-price" data-v-77396ef2>${ssrInterpolate(unref(formatPriceWithSpaces)(
              Number((_a3 = (_b = (_a2 = unref(initialDeviceGrade)) == null ? void 0 : _a2.data) == null ? void 0 : _b.price) != null ? _a3 : 0)
            ))} `);
            _push(ssrRenderComponent(_component_CurrencyText, {
              currency: (_d = (_c = unref(initialDeviceGrade)) == null ? void 0 : _c.data) == null ? void 0 : _d.currency,
              "use-default": ""
            }, null, _parent));
            _push(`</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_e = unref(initialDeviceGrade)) == null ? void 0 : _e.data) {
            _push(`<div class="trade-in-device-grade_device-hint" data-v-77396ef2>${ssrInterpolate(_ctx.$t("trade_in_old_device_hint"))}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isLoading)) {
            _push(`<div class="trade-in-device-grade_preloader" data-v-77396ef2>`);
            _push(ssrRenderComponent(_component_UiPreloader, { size: 30 }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isShownTopUpBanner)) {
            _push(ssrRenderComponent(_component_TradeInTopUpBanner, {
              class: "trade-in-device-grade_top-up",
              image: (_g = (_f = unref(initialDeviceGrade)) == null ? void 0 : _f.data) == null ? void 0 : _g.tradeinThumbnail,
              currency: (_i = (_h = unref(initialDeviceGrade)) == null ? void 0 : _h.data) == null ? void 0 : _i.currency,
              gradings: unref(specialGrading)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(isMounted)) {
            ssrRenderTeleport(_push, (_push2) => {
              _push2(ssrRenderComponent(_component_Button, {
                disabled: !unref(initialDeviceGrade),
                "full-width": "",
                onClick: nextStep
              }, {
                default: withCtx((_, _push3, _parent2, _scopeId) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("next"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("next")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }, `#${unref(tradeInModalKeys).footer}`, unref(step) !== "device", _parent);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(step) === "exchange") {
          _push(`<!--[-->`);
          if (unref(isMounted)) {
            ssrRenderTeleport(_push, (_push2) => {
              _push2(ssrRenderComponent(unref(TradeInDialogTitle), { class: "trade-in-device-grade_exchange-title" }, {
                default: withCtx((_, _push3, _parent2, _scopeId) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("trade_in_exchange_title"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("trade_in_exchange_title")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }, `#${unref(tradeInModalKeys).header}`, false, _parent);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UiSelect, {
            modelValue: unref(selectedExchangeProduct),
            "onUpdate:modelValue": [($event) => isRef(selectedExchangeProduct) ? selectedExchangeProduct.value = $event : null, changeExchangeProduct],
            label: _ctx.$t("trade_in_exchange_product_label"),
            options: unref(computedExchangeOptions)
          }, null, _parent));
          if (((_k = (_j = unref(deviceForm)) == null ? void 0 : _j.exchangeProduct) == null ? void 0 : _k.id) === "add_new_device") {
            _push(ssrRenderComponent(_component_TradeInCatalogDevice, {
              key: unref(deviceForm).exchangeProduct || "",
              "is-shown-top-up-banner": unref(isShownTopUpBanner),
              image: (_m = (_l = unref(initialDeviceGrade)) == null ? void 0 : _l.data) == null ? void 0 : _m.tradeinThumbnail,
              currency: (_o = (_n = unref(initialDeviceGrade)) == null ? void 0 : _n.data) == null ? void 0 : _o.currency,
              gradings: unref(specialGrading),
              "initial-index": -1,
              "is-trade-in-user-device-view": "",
              onRememberNewDevice: rememberNewDevice,
              onClose: nextStep
            }, null, _parent));
          } else {
            _push(`<!--[-->`);
            if (unref(isShownTopUpBanner)) {
              _push(ssrRenderComponent(_component_TradeInTopUpBanner, {
                class: "trade-in-device-grade_exchange-top-up",
                image: (_q = (_p = unref(initialDeviceGrade)) == null ? void 0 : _p.data) == null ? void 0 : _q.tradeinThumbnail,
                currency: (_s = (_r = unref(initialDeviceGrade)) == null ? void 0 : _r.data) == null ? void 0 : _s.currency,
                gradings: unref(specialGrading)
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            if (unref(isMounted)) {
              ssrRenderTeleport(_push, (_push2) => {
                _push2(ssrRenderComponent(_component_Button, {
                  disabled: !unref(initialDeviceGrade),
                  "full-width": "",
                  class: "trade-in-device-grade_next-button",
                  onClick: nextStep
                }, {
                  default: withCtx((_, _push3, _parent2, _scopeId) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("next"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("next")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent));
              }, `#${unref(tradeInModalKeys).footer}`, false, _parent);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(step) === "questions" && unref(question) && !unref(isErrorMessageShown)) {
          _push(`<!--[-->`);
          if (unref(question) && unref(question).answerType === "SINGLESELECT") {
            _push(ssrRenderComponent(unref(_sfc_main$3), {
              key: unref(question).questionId,
              question: unref(question),
              loading: unref(isLoading),
              "onUpdate:modelValue": unref(onSingleSelect)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(question) && unref(question).answerType === "YN") {
            _push(ssrRenderComponent(unref(TradeInAnswer), {
              key: unref(question).questionId,
              loading: unref(isLoading),
              question: unref(question),
              onYes: ($event) => unref(onAnswer)(true),
              onNo: ($event) => unref(onAnswer)(false)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(question) && unref(question).answerType === "MULTISELECT") {
            _push(ssrRenderComponent(TradeInMultiselect, {
              key: unref(question).questionId,
              loading: unref(isLoading),
              question: unref(question),
              onNext: unref(onMultiselect)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(step) === "add_device") {
          _push(ssrRenderComponent(_component_TradeInAddDevice, {
            onAddDevice: addDevice,
            onNextStep: nextStep
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div style="${ssrRenderStyle(unref(isErrorMessageShown) ? null : { display: "none" })}" class="trade-in-device-grade_error-message" data-v-77396ef2><span data-v-77396ef2>${ssrInterpolate(_ctx.$t("request_later"))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === "select_device") {
        _push(ssrRenderComponent(_component_TradeInCatalogDevice, {
          key: unref(deviceForm).exchangeProduct || "",
          "initial-id": __props.initialUserDevice.id,
          "initial-form": __props.initialUserDevice.form,
          "initial-product": __props.initialUserDevice.product,
          "initial-index": -1,
          "is-shown-top-up-banner": unref(isShownTopUpBanner),
          image: (_u = (_t = unref(initialDeviceGrade)) == null ? void 0 : _t.data) == null ? void 0 : _u.tradeinThumbnail,
          currency: (_w = (_v = unref(initialDeviceGrade)) == null ? void 0 : _v.data) == null ? void 0 : _w.currency,
          gradings: unref(specialGrading),
          "vertical-padding": "",
          onRememberNewDevice: rememberNewDevice,
          onClose: nextStep
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === "form_step") {
        _push(ssrRenderComponent(_component_TradeInForm, {
          key: unref(formKey),
          "profit-price": unref(profitPrice),
          "catalog-devices-price": unref(catalogDevicesPrice),
          discount: unref(userDevicesPrice),
          "show-user-devices": __props.showUserDevices,
          "onSubmit:success": showThankYouDialog
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === "success_step") {
        _push(ssrRenderComponent(_component_TradeInThankYouDialog, {
          onClose: ($event) => emit("close")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/TradeInDeviceGrade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TradeInDeviceGrade = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-77396ef2"]]);

export { TradeInDeviceGrade as T, __nuxt_component_1 as _, __nuxt_component_3 as a, TradeInCatalogDeviceView as b, TradeInCatalogDevice as c, TradeInThankYouDialog as d, _sfc_main$7 as e, __nuxt_component_0 as f, __nuxt_component_2 as g };
//# sourceMappingURL=TradeInDeviceGrade-Dga3A_UC.mjs.map
