import { _ as _sfc_main$1 } from './credit-price-text-B9mrfME7.mjs';
import { _ as __nuxt_component_1$1 } from './marketing-modal-aXAluzXe.mjs';
import { _ as _export_sfc, c as useLocalePath, l as useGtm, j as useProductStore, k as __nuxt_component_6, d as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useDateFormatter } from './useDateFormatter-BM16RVpG.mjs';
import { _ as __nuxt_component_1 } from './product-badges-ahLlBnMK.mjs';
import { u as useFormatters } from './useFormatters-B4xJk29p.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "product",
  __ssrInlineRender: true,
  props: {
    product: {},
    category: {},
    buttonText: {}
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const props = __props;
    const localePath = useLocalePath();
    const { formatToDayAndMonth } = useDateFormatter();
    const { trancateProductName } = useFormatters();
    const isCategory = props.category;
    const productGeneration = computed(
      () => {
        var _a2, _b2, _c2, _d2, _e2;
        return (_e2 = (_d2 = (_c2 = (_b2 = (_a2 = props.product) == null ? void 0 : _a2.featureGroups) == null ? void 0 : _b2.find((group) => group.externalCfId === "SPECIFICATIONS")) == null ? void 0 : _c2.features) == null ? void 0 : _d2.find((feature) => feature.externalCfId === "GENERATION")) == null ? void 0 : _e2.value;
      }
    );
    const getShortName = () => {
      var _a2, _b2;
      const name = ((_a2 = props.product) == null ? void 0 : _a2.name) || ((_b2 = props.category) == null ? void 0 : _b2.name);
      if (!name) {
        return "";
      }
      return trancateProductName(name);
    };
    const imageSrc = isCategory ? props.category.imageUrl || ((_c = (_b = (_a = props.category) == null ? void 0 : _a.images) == null ? void 0 : _b[0]) == null ? void 0 : _c.url) : (_f = (_e = (_d = props.product) == null ? void 0 : _d.variations[0]) == null ? void 0 : _e.images) == null ? void 0 : _f[0];
    const slogan = computed(() => {
      var _a2, _b2, _c2, _d2, _e2;
      if ((_a2 = props.product) == null ? void 0 : _a2.slogan) {
        return (_b2 = props.product) == null ? void 0 : _b2.slogan;
      }
      const sloganFromContent = (_e2 = (_d2 = (_c2 = props.category) == null ? void 0 : _c2.contents) == null ? void 0 : _d2.find((item) => item.type === "slogan")) == null ? void 0 : _e2.data;
      if (sloganFromContent && typeof sloganFromContent === "string") {
        return sloganFromContent;
      }
      return "";
    });
    const slug = localePath(
      isCategory ? `/category/${props.category.slug}` : `/product/${(_g = props.product) == null ? void 0 : _g.slug}`
    );
    const isNpiProduct = computed(() => {
      var _a2;
      return (_a2 = props.product) == null ? void 0 : _a2.realNpiState;
    });
    const showCoomingSoon = computed(
      () => {
        var _a2, _b2, _c2;
        return isNpiProduct.value && !((_a2 = props.product) == null ? void 0 : _a2.finalPrice) || ((_b2 = props.product) == null ? void 0 : _b2.realStock) && !((_c2 = props.product) == null ? void 0 : _c2.finalPrice);
      }
    );
    const buyButtonText = computed(() => {
      if (!props.product) {
        return "";
      }
      const { realStock, notB2c, finalPrice } = props.product;
      if (finalPrice && !realStock && !notB2c && !isNpiProduct.value) {
        return "notify_me";
      }
      if (isNpiProduct.value && finalPrice) {
        return "preorder";
      }
      if (!realStock) {
        return finalPrice ? "purchase_order" : "notify_me";
      }
      if (realStock && !finalPrice) {
        return "notify_me";
      }
      return "credit_buy_now";
    });
    const { pushGtmEvent } = useGtm();
    function handleProductClick() {
      if (props.product) {
        pushGtmEvent("clickOnProductGA", props.product);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
      const _component_CreditPriceText = _sfc_main$1;
      const _component_MarketingModal = __nuxt_component_1$1;
      const _component_Button = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["product", { product__small: !unref(isCategory) }]
      }, _attrs))} data-v-7d007515><div class="product_container" data-v-7d007515><div class="product_info" data-v-7d007515>`);
      _push(ssrRenderComponent(__nuxt_component_1, {
        product: ("product" in _ctx ? _ctx.product : unref(useProductStore)) || _ctx.category,
        class: "product_badges"
      }, null, _parent));
      _push(`<span class="product_name" data-v-7d007515>${ssrInterpolate(getShortName())}</span>`);
      if (unref(productGeneration)) {
        _push(`<span class="product_generation" data-v-7d007515>${ssrInterpolate(unref(productGeneration))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="product_description" data-v-7d007515>${ssrInterpolate(unref(slogan))} `);
      if (((_a2 = _ctx.category) == null ? void 0 : _a2.minPrice) || ((_b2 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _b2.finalPrice)) {
        _push(ssrRenderComponent(_component_CreditPriceText, {
          price: ((_c2 = _ctx.category) == null ? void 0 : _c2.minPrice) || ((_d2 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _d2.finalPrice)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isNpiProduct) && ((_e2 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _e2.deliveryDate) && ((_f2 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _f2.finalPrice)) {
        _push(`<!--[-->${ssrInterpolate(` ${_ctx.$t("availible")} ${unref(formatToDayAndMonth)(("product" in _ctx ? _ctx.product : unref(useProductStore)).deliveryDate)}`)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showCoomingSoon)) {
        _push(`<!--[-->${ssrInterpolate(_ctx.$t("cooming_soon"))}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span><div class="product_buttons" data-v-7d007515>`);
      if ((_g2 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _g2.contentMarketing) {
        _push(ssrRenderComponent(_component_MarketingModal, {
          "popup-content": ("product" in _ctx ? _ctx.product : unref(useProductStore)).contentMarketing
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (Boolean(_ctx.category) && unref(slug)) {
        _push(ssrRenderComponent(_component_Button, {
          href: unref(slug),
          secondary: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.buttonText || _ctx.$t("credit_buy_now"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.buttonText || _ctx.$t("credit_buy_now")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (Boolean("product" in _ctx ? _ctx.product : unref(useProductStore)) && unref(slug)) {
        _push(ssrRenderComponent(_component_Button, {
          href: unref(slug),
          onClick: handleProductClick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(unref(buyButtonText)))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(unref(buyButtonText))), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(slug),
        class: "product_image-wrapper",
        onClick: handleProductClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3;
          if (_push2) {
            if (unref(imageSrc)) {
              _push2(ssrRenderComponent(_component_UiImg, {
                src: unref(imageSrc),
                loading: "lazy",
                class: "product_image",
                alt: (_a3 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _a3.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(imageSrc) ? (openBlock(), createBlock(_component_UiImg, {
                key: 0,
                src: unref(imageSrc),
                loading: "lazy",
                class: "product_image",
                alt: (_b3 = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _b3.name
              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/product/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d007515"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=product-C1qE55vu.mjs.map
