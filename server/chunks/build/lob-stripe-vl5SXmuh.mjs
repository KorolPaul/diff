import { _ as __nuxt_component_0 } from './carousel-BYXolnD1.mjs';
import { _ as _export_sfc, d as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as _sfc_main$2 } from './credit-price-text-B9mrfME7.mjs';
import { inject, computed, mergeProps, unref, withCtx, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { SwiperSlide } from 'swiper/vue';
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
  __name: "lob-stripe",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const swiperOptions = {
      spaceBetween: 40,
      slidesPerView: "auto"
    };
    const allCategories = inject("categories");
    const categories = computed(() => {
      var _a, _b;
      const preparedCategories = [];
      (_b = (_a = props.data) == null ? void 0 : _a.items) == null ? void 0 : _b.forEach((item) => {
        const compatableCategory = allCategories.value.find(
          (category) => Number(category.id) === Number(item.entity_id)
        );
        if (compatableCategory) {
          preparedCategories.push(compatableCategory);
        }
      });
      return preparedCategories;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$1;
      const _component_CreditPriceText = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lob-stripe" }, _attrs))} data-v-209466b4>`);
      if (__props.data && __props.data.title) {
        _push(`<h2 class="lob-stripe_title" data-v-209466b4>${ssrInterpolate(__props.data.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(categories) && unref(categories).length) {
        _push(`<div data-v-209466b4>`);
        _push(ssrRenderComponent(_component_Carousel, { options: swiperOptions }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(categories), (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  class: "lob-strip_slide"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        class: "lob-stripe_item",
                        to: _ctx.localePath(`/category/${item == null ? void 0 : item.slug}`)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b, _c, _d, _e, _f, _g, _h;
                          if (_push4) {
                            if ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) {
                              _push4(ssrRenderComponent(_component_UiImg, {
                                src: (_d = (_c = item.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.url,
                                loading: "lazy",
                                class: "lob-stripe_item-image",
                                alt: item.alt
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<span class="lob-stripe_item-title" data-v-209466b4${_scopeId3}>${ssrInterpolate(item.name)}</span><span class="lob-stripe_item-description" data-v-209466b4${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_CreditPriceText, {
                              price: item.price
                            }, null, _parent4, _scopeId3));
                            _push4(`</span>`);
                          } else {
                            return [
                              ((_f = (_e = item.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.url) ? (openBlock(), createBlock(_component_UiImg, {
                                key: 0,
                                src: (_h = (_g = item.images) == null ? void 0 : _g[0]) == null ? void 0 : _h.url,
                                loading: "lazy",
                                class: "lob-stripe_item-image",
                                alt: item.alt
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode("span", { class: "lob-stripe_item-title" }, toDisplayString(item.name), 1),
                              createVNode("span", { class: "lob-stripe_item-description" }, [
                                createVNode(_component_CreditPriceText, {
                                  price: item.price
                                }, null, 8, ["price"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          class: "lob-stripe_item",
                          to: _ctx.localePath(`/category/${item == null ? void 0 : item.slug}`)
                        }, {
                          default: withCtx(() => {
                            var _a, _b, _c, _d;
                            return [
                              ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) ? (openBlock(), createBlock(_component_UiImg, {
                                key: 0,
                                src: (_d = (_c = item.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.url,
                                loading: "lazy",
                                class: "lob-stripe_item-image",
                                alt: item.alt
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode("span", { class: "lob-stripe_item-title" }, toDisplayString(item.name), 1),
                              createVNode("span", { class: "lob-stripe_item-description" }, [
                                createVNode(_component_CreditPriceText, {
                                  price: item.price
                                }, null, 8, ["price"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: i,
                    class: "lob-strip_slide"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        class: "lob-stripe_item",
                        to: _ctx.localePath(`/category/${item == null ? void 0 : item.slug}`)
                      }, {
                        default: withCtx(() => {
                          var _a, _b, _c, _d;
                          return [
                            ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) ? (openBlock(), createBlock(_component_UiImg, {
                              key: 0,
                              src: (_d = (_c = item.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.url,
                              loading: "lazy",
                              class: "lob-stripe_item-image",
                              alt: item.alt
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                            createVNode("span", { class: "lob-stripe_item-title" }, toDisplayString(item.name), 1),
                            createVNode("span", { class: "lob-stripe_item-description" }, [
                              createVNode(_component_CreditPriceText, {
                                price: item.price
                              }, null, 8, ["price"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/program-partners/components/lob-stripe/lob-stripe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lobStripe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-209466b4"]]);

export { lobStripe as default };
//# sourceMappingURL=lob-stripe-vl5SXmuh.mjs.map
