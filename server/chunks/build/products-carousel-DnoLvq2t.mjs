import { _ as __nuxt_component_0 } from './carousel-BYXolnD1.mjs';
import { _ as _export_sfc, c as useLocalePath, d as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as _sfc_main$2 } from './credit-price-text-B9mrfME7.mjs';
import { inject, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { SwiperSlide } from 'swiper/vue';
import { u as useDateFormatter } from './useDateFormatter-BM16RVpG.mjs';
import { u as useFormatters } from './useFormatters-B4xJk29p.mjs';
import './client-only-Bwxzq3Sq.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@vueuse/core';
import 'zod';
import 'humps';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';

const _sfc_main = {
  __name: "products-carousel",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { formatToDayAndMonth } = useDateFormatter();
    const { trancateProductName } = useFormatters();
    const localePath = useLocalePath();
    const swiperOptions = {
      spaceBetween: 24,
      slidesPerView: "auto"
    };
    const allCategories = inject("categories");
    const allProducts = inject("products");
    const products = computed(() => {
      const preparedProducts = [];
      props.data.items.forEach((product) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const isProductType = product.entity_type === "product";
        const entitySource = isProductType ? allProducts : allCategories;
        const compatableProduct = entitySource.value.find(
          (item) => Number(item.id) === Number(product.entity_id)
        );
        if (compatableProduct) {
          preparedProducts.push({
            title: (_b = (_a = compatableProduct.name) == null ? void 0 : _a.split(",")) == null ? void 0 : _b[0],
            tag: product.tag,
            tagColor: product.tagColor,
            subtitle: compatableProduct.slogan,
            price: compatableProduct.final_price || compatableProduct.price,
            lowestPrice: compatableProduct.lowest_price || null,
            href: compatableProduct.slug ? isProductType ? localePath(`/product/${compatableProduct.slug}`) : localePath(`/category/${compatableProduct.slug}`) : "",
            imageSrc: isProductType ? (_e = (_d = (_c = compatableProduct == null ? void 0 : compatableProduct.variations) == null ? void 0 : _c[0]) == null ? void 0 : _d.images) == null ? void 0 : _e[0] : (_g = (_f = compatableProduct == null ? void 0 : compatableProduct.images) == null ? void 0 : _f[0]) == null ? void 0 : _g.url,
            creditsData: compatableProduct.credits_data,
            isTradeIn: isProductType ? false : compatableProduct.is_trade_in,
            availibleDate: compatableProduct.delivery_date,
            npiState: compatableProduct.real_npi_state
          });
        }
      });
      return preparedProducts;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$1;
      const _component_CreditPriceText = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-carousel" }, _attrs))} data-v-f2988d01>`);
      if (__props.data && __props.data.title) {
        _push(`<h2 class="products-carousel_title" data-v-f2988d01>${ssrInterpolate(__props.data.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(products) && unref(products).length) {
        _push(`<div data-v-f2988d01>`);
        _push(ssrRenderComponent(_component_Carousel, { options: swiperOptions }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(products), (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  class: "lob-strip_slide"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        class: "products-carousel_item",
                        to: item.href
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b, _c, _d;
                          if (_push4) {
                            _push4(`<div class="products-carousel_item-image-wrapper" data-v-f2988d01${_scopeId3}>`);
                            if (item.imageSrc) {
                              _push4(ssrRenderComponent(_component_UiImg, {
                                src: item.imageSrc,
                                class: "products-carousel_item-image",
                                alt: item.alt
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><span class="products-carousel_item-tag" style="${ssrRenderStyle({ color: item.tagColor })}" data-v-f2988d01${_scopeId3}>${ssrInterpolate(item.tag)}</span><span class="products-carousel_item-title" data-v-f2988d01${_scopeId3}>${ssrInterpolate(unref(trancateProductName)(item.title))}</span><span class="products-carousel_item-subtitle" data-v-f2988d01${_scopeId3}>${ssrInterpolate(item.subtitle)}</span><span class="products-carousel_item-description" data-v-f2988d01${_scopeId3}>`);
                            if (item.npiState && (item == null ? void 0 : item.availibleDate)) {
                              _push4(`<span data-v-f2988d01${_scopeId3}>${ssrInterpolate(_ctx.$t("available_starting"))} ${ssrInterpolate(unref(formatToDayAndMonth)(item == null ? void 0 : item.availibleDate))}. </span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(ssrRenderComponent(_component_CreditPriceText, {
                              "main-price": item.lowestPrice || item.price,
                              price: (_a = item.creditsData) == null ? void 0 : _a.min_monthly_payment,
                              terms: (_b = item.creditsData) == null ? void 0 : _b.max_term,
                              type: "creditTextProductCarousel"
                            }, null, _parent4, _scopeId3));
                            _push4(` ${ssrInterpolate(item.isTradeIn ? _ctx.$t("before_trade_in") : "")}</span>`);
                          } else {
                            return [
                              createVNode("div", { class: "products-carousel_item-image-wrapper" }, [
                                item.imageSrc ? (openBlock(), createBlock(_component_UiImg, {
                                  key: 0,
                                  src: item.imageSrc,
                                  class: "products-carousel_item-image",
                                  alt: item.alt
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                              ]),
                              createVNode("span", {
                                class: "products-carousel_item-tag",
                                style: { color: item.tagColor }
                              }, toDisplayString(item.tag), 5),
                              createVNode("span", { class: "products-carousel_item-title" }, toDisplayString(unref(trancateProductName)(item.title)), 1),
                              createVNode("span", { class: "products-carousel_item-subtitle" }, toDisplayString(item.subtitle), 1),
                              createVNode("span", { class: "products-carousel_item-description" }, [
                                item.npiState && (item == null ? void 0 : item.availibleDate) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("available_starting")) + " " + toDisplayString(unref(formatToDayAndMonth)(item == null ? void 0 : item.availibleDate)) + ". ", 1)) : createCommentVNode("", true),
                                createVNode(_component_CreditPriceText, {
                                  "main-price": item.lowestPrice || item.price,
                                  price: (_c = item.creditsData) == null ? void 0 : _c.min_monthly_payment,
                                  terms: (_d = item.creditsData) == null ? void 0 : _d.max_term,
                                  type: "creditTextProductCarousel"
                                }, null, 8, ["main-price", "price", "terms"]),
                                createTextVNode(" " + toDisplayString(item.isTradeIn ? _ctx.$t("before_trade_in") : ""), 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          class: "products-carousel_item",
                          to: item.href
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("div", { class: "products-carousel_item-image-wrapper" }, [
                                item.imageSrc ? (openBlock(), createBlock(_component_UiImg, {
                                  key: 0,
                                  src: item.imageSrc,
                                  class: "products-carousel_item-image",
                                  alt: item.alt
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                              ]),
                              createVNode("span", {
                                class: "products-carousel_item-tag",
                                style: { color: item.tagColor }
                              }, toDisplayString(item.tag), 5),
                              createVNode("span", { class: "products-carousel_item-title" }, toDisplayString(unref(trancateProductName)(item.title)), 1),
                              createVNode("span", { class: "products-carousel_item-subtitle" }, toDisplayString(item.subtitle), 1),
                              createVNode("span", { class: "products-carousel_item-description" }, [
                                item.npiState && (item == null ? void 0 : item.availibleDate) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("available_starting")) + " " + toDisplayString(unref(formatToDayAndMonth)(item == null ? void 0 : item.availibleDate)) + ". ", 1)) : createCommentVNode("", true),
                                createVNode(_component_CreditPriceText, {
                                  "main-price": item.lowestPrice || item.price,
                                  price: (_a = item.creditsData) == null ? void 0 : _a.min_monthly_payment,
                                  terms: (_b = item.creditsData) == null ? void 0 : _b.max_term,
                                  type: "creditTextProductCarousel"
                                }, null, 8, ["main-price", "price", "terms"]),
                                createTextVNode(" " + toDisplayString(item.isTradeIn ? _ctx.$t("before_trade_in") : ""), 1)
                              ])
                            ];
                          }),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: i,
                    class: "lob-strip_slide"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        class: "products-carousel_item",
                        to: item.href
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", { class: "products-carousel_item-image-wrapper" }, [
                              item.imageSrc ? (openBlock(), createBlock(_component_UiImg, {
                                key: 0,
                                src: item.imageSrc,
                                class: "products-carousel_item-image",
                                alt: item.alt
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                            ]),
                            createVNode("span", {
                              class: "products-carousel_item-tag",
                              style: { color: item.tagColor }
                            }, toDisplayString(item.tag), 5),
                            createVNode("span", { class: "products-carousel_item-title" }, toDisplayString(unref(trancateProductName)(item.title)), 1),
                            createVNode("span", { class: "products-carousel_item-subtitle" }, toDisplayString(item.subtitle), 1),
                            createVNode("span", { class: "products-carousel_item-description" }, [
                              item.npiState && (item == null ? void 0 : item.availibleDate) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("available_starting")) + " " + toDisplayString(unref(formatToDayAndMonth)(item == null ? void 0 : item.availibleDate)) + ". ", 1)) : createCommentVNode("", true),
                              createVNode(_component_CreditPriceText, {
                                "main-price": item.lowestPrice || item.price,
                                price: (_a = item.creditsData) == null ? void 0 : _a.min_monthly_payment,
                                terms: (_b = item.creditsData) == null ? void 0 : _b.max_term,
                                type: "creditTextProductCarousel"
                              }, null, 8, ["main-price", "price", "terms"]),
                              createTextVNode(" " + toDisplayString(item.isTradeIn ? _ctx.$t("before_trade_in") : ""), 1)
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/program-partners/components/products-carousel/products-carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2988d01"]]);

export { productsCarousel as default };
//# sourceMappingURL=products-carousel-DnoLvq2t.mjs.map
