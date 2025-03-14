import { _ as _sfc_main$3 } from './entity-card-BKC73J01.mjs';
import { _ as __nuxt_component_1 } from './product-badges-ahLlBnMK.mjs';
import { ref, computed, inject, mergeProps, withCtx, createVNode, unref, resolveDynamicComponent, createTextVNode, toDisplayString, defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, i as useCartStore, a as useI18n, E as defineNuxtLink } from './server.mjs';
import { _ as _sfc_main$4 } from './credit-price-text-B9mrfME7.mjs';
import humps from 'humps';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';

const _sfc_main$2 = {
  __name: "product-card-color",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: ""
    },
    stroke: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const productColorStyle = computed(
      () => props.color.split(",").length > 1 ? `background: linear-gradient(to right, ${props.color.split(",")[0]}, ${props.color.split(",")[1]})` : "background-color: " + props.color
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-10590619><span class="${ssrRenderClass([{ "color-circle__white": __props.color === "#FFFFFF" }, "color-circle"])}" style="${ssrRenderStyle(unref(productColorStyle))}" data-v-10590619></span></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/product-card-color/product-card-color.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductCardColor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-10590619"]]);
const _sfc_main$1 = defineComponent({
  name: "ProductCardColorList",
  components: { ProductCardColor },
  props: {
    colors: {
      type: Array,
      required: true
    },
    activeColor: {
      type: String,
      default: null
    },
    isListItemColor: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["color-list", { "color-list__small": _ctx.small }]
  }, _attrs))} data-v-35b40444><!--[-->`);
  ssrRenderList(_ctx.colors, (color, i) => {
    _push(`<div class="${ssrRenderClass([{
      "color-list_color-wrapper__active": color.sku === _ctx.activeColor,
      "color-list_color-wrapper__empty": !color.color || !color
    }, "color-list_color-wrapper"])}" data-v-35b40444>`);
    if (color.color.split(",").length > 1) {
      _push(`<span class="${ssrRenderClass([{ "color-list_circle__white": color.color === "#FFFFFF" }, "color-list_color"])}" style="${ssrRenderStyle({
        backgroundImage: `linear-gradient(to right, ${color.color.split(",")[0]}, ${color.color.split(",")[1]})`
      })}" data-v-35b40444></span>`);
    } else {
      _push(`<span class="${ssrRenderClass([{
        "color-list_circle__white": (color == null ? void 0 : color.color) === "#FFFFFF"
      }, "color-list_color"])}" style="${ssrRenderStyle({ background: (color == null ? void 0 : color.color) || "#cecbcb" })}" data-v-35b40444></span>`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/product-card-color-list/product-card-color-list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-35b40444"]]);
const _sfc_main = {
  __name: "carousel-product",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    },
    addToCart: {
      type: Boolean,
      default: false
    },
    showColor: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { camelizeKeys } = humps;
    const productItem = ref(camelizeKeys({ ...props.product }));
    const { addProductToCart } = useCartStore();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { t } = useI18n();
    const activeColor = ref(((_a = productItem.value) == null ? void 0 : _a.sku) || "");
    const isAddToCart = computed(() => {
      var _a2;
      return ((_a2 = productItem.value) == null ? void 0 : _a2.isAddToCart) || props.addToCart;
    });
    const isButton = computed(
      () => {
        var _a2, _b, _c;
        return ((_a2 = productItem.value) == null ? void 0 : _a2.finalPrice) && isAddToCart.value && (((_b = productItem.value) == null ? void 0 : _b.realNpiState) || ((_c = productItem.value) == null ? void 0 : _c.realStock) > 0);
      }
    );
    const getImageLink = computed(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if (productItem.value.photoUrl) {
        return productItem.value.photoUrl;
      }
      if (((_a2 = productItem.value) == null ? void 0 : _a2.variations) && ((_c = (_b = productItem.value) == null ? void 0 : _b.variations[0]) == null ? void 0 : _c.images[0])) {
        return (_e = (_d = productItem.value) == null ? void 0 : _d.variations[0]) == null ? void 0 : _e.images[0];
      }
      if ((_g = (_f = productItem.value) == null ? void 0 : _f.images) == null ? void 0 : _g[0].url) {
        return (_h = props.product) == null ? void 0 : _h.images[0].url;
      }
      return "";
    });
    const findColor = (colors2, variations) => {
      variations == null ? void 0 : variations.forEach((color) => {
        const colorItem = color.color ? color.color : "#cecbcb";
        colors2.push({
          color: colorItem,
          disabled: false,
          sku: color.sku,
          stock: props.product.real_stock || props.product.realStock
        });
      });
    };
    const changeProductByColor = (sku) => {
      var _a2, _b, _c, _d;
      if (sku === props.product.sku) {
        activeColor.value = sku;
        productItem.value = camelizeKeys({ ...props.product });
        productItem.value.photoUrl = (_b = (_a2 = props.product) == null ? void 0 : _a2.variations[0]) == null ? void 0 : _b.images[0];
        return;
      }
      (_d = (_c = productItem.value) == null ? void 0 : _c.similarProducts) == null ? void 0 : _d.forEach((item) => {
        if (item.sku === sku) {
          const itemCamelise = camelizeKeys(item);
          activeColor.value = itemCamelise == null ? void 0 : itemCamelise.sku;
          productItem.value.slug = itemCamelise == null ? void 0 : itemCamelise.slug;
          productItem.value.crmId = itemCamelise == null ? void 0 : itemCamelise.crmId;
          productItem.value.photoUrl = itemCamelise == null ? void 0 : itemCamelise.photoUrl;
          productItem.value.finalPrice = itemCamelise == null ? void 0 : itemCamelise.finalPrice;
          productItem.value.price = itemCamelise == null ? void 0 : itemCamelise.price;
          productItem.value.priceCat4 = itemCamelise == null ? void 0 : itemCamelise.priceCat4;
          productItem.value.realStock = itemCamelise == null ? void 0 : itemCamelise.stock;
          productItem.value.creditsData = itemCamelise == null ? void 0 : itemCamelise.creditsData;
        }
      });
    };
    const colors = computed(() => {
      var _a2, _b;
      const productColors = [];
      if (!props.showColor) {
        return productColors;
      }
      (_b = (_a2 = productItem.value) == null ? void 0 : _a2.similarProducts) == null ? void 0 : _b.forEach((item) => {
        productColors.push({
          ...item,
          disabled: !!item.color
        });
      });
      if (!productColors.length) {
        findColor(productColors, productItem.value.variations);
      }
      return productColors;
    });
    const buttonActionText = computed(() => {
      var _a2, _b, _c, _d, _e;
      if (!((_a2 = productItem.value) == null ? void 0 : _a2.finalPrice)) {
        return t("cooming_soon");
      }
      if (isAddToCart.value) {
        if (((_b = productItem.value) == null ? void 0 : _b.realStock) > 0 || ((_c = productItem.value) == null ? void 0 : _c.realNpiState)) {
          return t("add_to_cart");
        }
        return t("notify_me");
      } else {
        if ((_d = productItem.value) == null ? void 0 : _d.realNpiState) {
          return t("preorder");
        }
        return ((_e = productItem.value) == null ? void 0 : _e.realStock) > 0 ? t("buy_now") : t("notify_me");
      }
    });
    const toggleCartWidget = inject("toggleCartWidget");
    const productBtnAction = () => {
      if (isButton.value) {
        addProductToCart(productItem.value);
        toggleCartWidget(true, true);
        return;
      }
    };
    const canBuyInCredit = computed(
      () => {
        var _a2, _b, _c;
        return ((_a2 = productItem.value) == null ? void 0 : _a2.realStock) && ((_b = productItem.value) == null ? void 0 : _b.finalPrice) && productItem.value.creditsData && ((_c = productItem.value.creditsData) == null ? void 0 : _c.minMonthlyPayment);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      const _component_EntityCard = _sfc_main$3;
      const _component_ProductBadges = __nuxt_component_1;
      const _component_ProductCardColorList = __nuxt_component_2;
      const _component_CreditPriceText = _sfc_main$4;
      if (productItem.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["carousel-product", { "carousel-product__small": __props.small }]
        }, _attrs))} data-v-1a266bb1><div data-v-1a266bb1>`);
        _push(ssrRenderComponent(_component_EntityCard, {
          link: _ctx.localePath(`/product/${productItem.value.slug}`),
          name: productItem.value.name,
          "image-link": getImageLink.value,
          small: __props.small
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="carousel-product_badge" data-v-1a266bb1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ProductBadges, { product: productItem.value }, null, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              return [
                createVNode("p", { class: "carousel-product_badge" }, [
                  createVNode(_component_ProductBadges, { product: productItem.value }, null, 8, ["product"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (colors.value.length > 1 && __props.showColor) {
          _push(`<div data-v-1a266bb1>`);
          _push(ssrRenderComponent(_component_ProductCardColorList, {
            colors: colors.value,
            "active-color": activeColor.value,
            small: "",
            onChangeProduct: changeProductByColor
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="carousel-product_price-wrapper" data-v-1a266bb1>`);
        if (productItem.value.price && productItem.value.finalPrice < productItem.value.price && !productItem.value.priceCat4) {
          _push(`<p class="carousel-product_action-price" data-v-1a266bb1>${ssrInterpolate(productItem.value.price)}\xA0 ${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : productItem.value.currency)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (productItem.value.priceCat4) {
          _push(`<p class="carousel-product_action-price" data-v-1a266bb1>${ssrInterpolate(productItem.value.price && productItem.value.finalPrice < productItem.value.price && productItem.value.priceCat4 ? productItem.value.finalPrice : productItem.value.price)}\xA0 ${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : productItem.value.currency)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="carousel-product_price" data-v-1a266bb1>`);
        if (productItem.value.finalPrice && !productItem.value.priceCat4) {
          _push(`<span class="${ssrRenderClass([{
            "carousel-product_price-value__discount": productItem.value.finalPrice < productItem.value.price
          }, "carousel-product_price-value"])}" data-v-1a266bb1>${ssrInterpolate(unref(formatPriceWithSpaces)(productItem.value.finalPrice))}\xA0${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : __props.product.currency)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (productItem.value.finalPrice && productItem.value.priceCat4) {
          _push(`<span class="${ssrRenderClass([{
            "carousel-product_price-value__discount": productItem.value.finalPrice < productItem.value.price
          }, "carousel-product_price-value"])}" data-v-1a266bb1>${ssrInterpolate(unref(formatPriceWithSpaces)(productItem.value.priceCat4))}\xA0${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : __props.product.currency)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (productItem.value.finalPrice < productItem.value.price) {
          _push(`<span class="carousel-product_discount" data-v-1a266bb1>${ssrInterpolate(productItem.value.finalPrice - productItem.value.price)}\xA0 ${ssrInterpolate(_ctx.$t("currency") !== "currency" ? _ctx.$t("currency") : productItem.value.currency)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
        if (canBuyInCredit.value) {
          _push(`<p class="carousel-product_credit-text" data-v-1a266bb1>`);
          _push(ssrRenderComponent(_component_CreditPriceText, {
            price: (_b = (_a2 = productItem.value) == null ? void 0 : _a2.creditsData) == null ? void 0 : _b.minMonthlyPayment,
            terms: (_c = productItem.value) == null ? void 0 : _c.creditsData.maxTerm,
            type: "creditText"
          }, null, _parent));
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(isButton.value ? "button" : ("defineNuxtLink" in _ctx ? _ctx.defineNuxtLink : unref(defineNuxtLink))("NuxtLink")), {
          to: isButton.value ? "" : _ctx.localePath(`/product/${productItem.value.slug}`),
          class: "carousel-product_button",
          onClick: ($event) => productBtnAction()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(buttonActionText.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(buttonActionText.value), 1)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/catalog/components/carousel-product/carousel-product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a266bb1"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=carousel-product-B_FnTkjy.mjs.map
