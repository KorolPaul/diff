import { _ as __nuxt_component_0$1 } from './carousel-BYXolnD1.mjs';
import { _ as _export_sfc, g as ProductService, e as useApi, P as PUBLIC_PREFIX, f as deserialize, c as useLocalePath, d as __nuxt_component_0$2, p as productSchema } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as _sfc_main$2 } from './credit-price-text-B9mrfME7.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { SwiperSlide } from 'swiper/vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { z } from 'zod';
import { c as categorySchema } from './CategoryApiService-CndB0tEv.mjs';
import humps from 'humps';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "family-stripe",
  __ssrInlineRender: true,
  props: {
    items: {},
    categoryName: {},
    categorySlug: {}
  },
  setup(__props) {
    const localePath = useLocalePath();
    const swiperOptions = {
      spaceBetween: 16,
      slidesPerView: "auto"
    };
    const getShortName = (name) => {
      var _a;
      return (_a = name == null ? void 0 : name.split(",")[0]) != null ? _a : "";
    };
    const getImageurl = (image) => {
      if (typeof image === "object") {
        return image == null ? void 0 : image.url;
      }
      return image;
    };
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$1;
      const _component_CreditPriceText = _sfc_main$2;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "family-stripe" }, _attrs))} data-v-1f267b02>`);
      _push(ssrRenderComponent(_component_Carousel, { options: swiperOptions }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.items, (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      class: "family-stripe_item",
                      to: unref(localePath)(
                        `/${(item == null ? void 0 : item.isCategory) ? "category" : "product"}/${item == null ? void 0 : item.slug}`
                      )
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2;
                        var _a, _b, _c, _d, _e, _f;
                        if (_push4) {
                          _push4(`<div class="family-stripe_item-image-wrapper" data-v-1f267b02${_scopeId3}>`);
                          if ((_a = item == null ? void 0 : item.images) == null ? void 0 : _a[0]) {
                            _push4(ssrRenderComponent(_component_UiImg, {
                              src: getImageurl((_b = item == null ? void 0 : item.images) == null ? void 0 : _b[0]),
                              class: "family-stripe_item-image",
                              alt: item.name
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="family-stripe_item-content" data-v-1f267b02${_scopeId3}><p class="family-stripe_badges" data-v-1f267b02${_scopeId3}>`);
                          if ((_c = item == null ? void 0 : item.marks) == null ? void 0 : _c.new) {
                            _push4(`<span class="family-stripe_item-tag" data-v-1f267b02${_scopeId3}>${ssrInterpolate(_ctx.$t("new"))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (item == null ? void 0 : item.customBadges) {
                            _push4(`<span class="family-stripe_item-tag" data-v-1f267b02${_scopeId3}>${(_a2 = unref(getSanitizeHtml)(item == null ? void 0 : item.customBadges)) != null ? _a2 : ""}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</p><span class="family-stripe_item-title" data-v-1f267b02${_scopeId3}>${ssrInterpolate(getShortName(item.name))}</span>`);
                          if (item.itemPrice) {
                            _push4(ssrRenderComponent(_component_CreditPriceText, {
                              price: (item == null ? void 0 : item.itemPrice) || 0,
                              class: "family-stripe_item-price"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "family-stripe_item-image-wrapper" }, [
                              ((_d = item == null ? void 0 : item.images) == null ? void 0 : _d[0]) ? (openBlock(), createBlock(_component_UiImg, {
                                key: 0,
                                src: getImageurl((_e = item == null ? void 0 : item.images) == null ? void 0 : _e[0]),
                                class: "family-stripe_item-image",
                                alt: item.name
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "family-stripe_item-content" }, [
                              createVNode("p", { class: "family-stripe_badges" }, [
                                ((_f = item == null ? void 0 : item.marks) == null ? void 0 : _f.new) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "family-stripe_item-tag"
                                }, toDisplayString(_ctx.$t("new")), 1)) : createCommentVNode("", true),
                                (item == null ? void 0 : item.customBadges) ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "family-stripe_item-tag",
                                  innerHTML: unref(getSanitizeHtml)(item == null ? void 0 : item.customBadges)
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                              ]),
                              createVNode("span", { class: "family-stripe_item-title" }, toDisplayString(getShortName(item.name)), 1),
                              item.itemPrice ? (openBlock(), createBlock(_component_CreditPriceText, {
                                key: 0,
                                price: (item == null ? void 0 : item.itemPrice) || 0,
                                class: "family-stripe_item-price"
                              }, null, 8, ["price"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        class: "family-stripe_item",
                        to: unref(localePath)(
                          `/${(item == null ? void 0 : item.isCategory) ? "category" : "product"}/${item == null ? void 0 : item.slug}`
                        )
                      }, {
                        default: withCtx(() => {
                          var _a, _b, _c;
                          return [
                            createVNode("div", { class: "family-stripe_item-image-wrapper" }, [
                              ((_a = item == null ? void 0 : item.images) == null ? void 0 : _a[0]) ? (openBlock(), createBlock(_component_UiImg, {
                                key: 0,
                                src: getImageurl((_b = item == null ? void 0 : item.images) == null ? void 0 : _b[0]),
                                class: "family-stripe_item-image",
                                alt: item.name
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "family-stripe_item-content" }, [
                              createVNode("p", { class: "family-stripe_badges" }, [
                                ((_c = item == null ? void 0 : item.marks) == null ? void 0 : _c.new) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "family-stripe_item-tag"
                                }, toDisplayString(_ctx.$t("new")), 1)) : createCommentVNode("", true),
                                (item == null ? void 0 : item.customBadges) ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "family-stripe_item-tag",
                                  innerHTML: unref(getSanitizeHtml)(item == null ? void 0 : item.customBadges)
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                              ]),
                              createVNode("span", { class: "family-stripe_item-title" }, toDisplayString(getShortName(item.name)), 1),
                              item.itemPrice ? (openBlock(), createBlock(_component_CreditPriceText, {
                                key: 0,
                                price: (item == null ? void 0 : item.itemPrice) || 0,
                                class: "family-stripe_item-price"
                              }, null, 8, ["price"])) : createCommentVNode("", true)
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
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "family-stripe_item family-stripe_item__more",
                    to: unref(localePath)(`/category/${_ctx.categorySlug}`)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="family-stripe_item-more" data-v-1f267b02${_scopeId3}>${ssrInterpolate(_ctx.$t("view_all"))} ${ssrInterpolate(_ctx.categoryName)} `);
                        _push4(ssrRenderComponent(_component_Icon, {
                          class: "family-stripe_item-more-icon",
                          icon: "chevronRightIcon"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "family-stripe_item-more" }, [
                            createTextVNode(toDisplayString(_ctx.$t("view_all")) + " " + toDisplayString(_ctx.categoryName) + " ", 1),
                            createVNode(_component_Icon, {
                              class: "family-stripe_item-more-icon",
                              icon: "chevronRightIcon"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      class: "family-stripe_item family-stripe_item__more",
                      to: unref(localePath)(`/category/${_ctx.categorySlug}`)
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "family-stripe_item-more" }, [
                          createTextVNode(toDisplayString(_ctx.$t("view_all")) + " " + toDisplayString(_ctx.categoryName) + " ", 1),
                          createVNode(_component_Icon, {
                            class: "family-stripe_item-more-icon",
                            icon: "chevronRightIcon"
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      class: "family-stripe_item",
                      to: unref(localePath)(
                        `/${(item == null ? void 0 : item.isCategory) ? "category" : "product"}/${item == null ? void 0 : item.slug}`
                      )
                    }, {
                      default: withCtx(() => {
                        var _a, _b, _c;
                        return [
                          createVNode("div", { class: "family-stripe_item-image-wrapper" }, [
                            ((_a = item == null ? void 0 : item.images) == null ? void 0 : _a[0]) ? (openBlock(), createBlock(_component_UiImg, {
                              key: 0,
                              src: getImageurl((_b = item == null ? void 0 : item.images) == null ? void 0 : _b[0]),
                              class: "family-stripe_item-image",
                              alt: item.name
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "family-stripe_item-content" }, [
                            createVNode("p", { class: "family-stripe_badges" }, [
                              ((_c = item == null ? void 0 : item.marks) == null ? void 0 : _c.new) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "family-stripe_item-tag"
                              }, toDisplayString(_ctx.$t("new")), 1)) : createCommentVNode("", true),
                              (item == null ? void 0 : item.customBadges) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "family-stripe_item-tag",
                                innerHTML: unref(getSanitizeHtml)(item == null ? void 0 : item.customBadges)
                              }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                            ]),
                            createVNode("span", { class: "family-stripe_item-title" }, toDisplayString(getShortName(item.name)), 1),
                            item.itemPrice ? (openBlock(), createBlock(_component_CreditPriceText, {
                              key: 0,
                              price: (item == null ? void 0 : item.itemPrice) || 0,
                              class: "family-stripe_item-price"
                            }, null, 8, ["price"])) : createCommentVNode("", true)
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    class: "family-stripe_item family-stripe_item__more",
                    to: unref(localePath)(`/category/${_ctx.categorySlug}`)
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "family-stripe_item-more" }, [
                        createTextVNode(toDisplayString(_ctx.$t("view_all")) + " " + toDisplayString(_ctx.categoryName) + " ", 1),
                        createVNode(_component_Icon, {
                          class: "family-stripe_item-more-icon",
                          icon: "chevronRightIcon"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/catalog/components/family-stripe/family-stripe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f267b02"]]);
const familyStripeSchema = z.object({
  data: z.array(productSchema),
  id: z.number(),
  name: z.string()
});
const CatalogService = {
  async getFamilyStripe(slug) {
    const url = `${PUBLIC_PREFIX}promotions/${slug}`;
    const { get } = useApi();
    const { data } = await get(url);
    return deserialize(url, familyStripeSchema, data == null ? void 0 : data.value);
  },
  async getAccessories(slug) {
    var _a;
    const url = `${PUBLIC_PREFIX}categories/${slug}`;
    const { get } = useApi();
    const { data } = await get(url);
    return deserialize(url, categorySchema, (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data);
  },
  async getCategories(params) {
    var _a;
    const url = `${PUBLIC_PREFIX}categories-search`;
    const { get } = useApi();
    const { data } = await get(url, params);
    return deserialize(url, categorySchema, (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data);
  }
};
const getFamilyStripeData = async (familyStripeData, locale) => {
  var _a, _b, _c, _d;
  const { camelizeKeys } = humps;
  const camelizeData = camelizeKeys(familyStripeData);
  let productContentData = null;
  if ((camelizeData == null ? void 0 : camelizeData.content) || (camelizeData == null ? void 0 : camelizeData.contents)) {
    productContentData = (_b = (_a = (camelizeData == null ? void 0 : camelizeData.content) || (camelizeData == null ? void 0 : camelizeData.contents)) == null ? void 0 : _a.find(
      (item) => item.type === "family-stripe"
    )) == null ? void 0 : _b.data;
  }
  const familyStripeDataCategories = (_c = productContentData == null ? void 0 : productContentData.items) == null ? void 0 : _c.filter(
    (item) => item.entityType === "category"
  );
  const familyStripeDataCategoriesIds = (familyStripeDataCategories == null ? void 0 : familyStripeDataCategories.map((item) => item.entityId)) || null;
  const familyStripeDataProducts = (_d = productContentData == null ? void 0 : productContentData.items) == null ? void 0 : _d.filter(
    (item) => item.entityType === "product"
  );
  const familyStripeDataProductsIds = (familyStripeDataProducts == null ? void 0 : familyStripeDataProducts.map((item) => item.entityId)) || null;
  const familyStripeDataCategoriesData = familyStripeDataCategoriesIds ? await CatalogService.getCategories({
    "category_ids[]": [...familyStripeDataCategoriesIds]
  }) : null;
  const familyStripeDataProductsData = familyStripeDataProductsIds ? await ProductService.getProducts({
    search: `id:${familyStripeDataProductsIds.join(",")}`,
    searchFields: "id:in",
    lang: locale
  }) : null;
  const newItems = [];
  if (productContentData == null ? void 0 : productContentData.items) {
    productContentData.items.forEach((item) => {
      var _a2;
      if (familyStripeDataCategoriesData) {
        familyStripeDataCategoriesData.forEach((category) => {
          var _a3, _b2;
          if (item.entityId == category.id) {
            const item2 = {
              isCategory: true,
              images: category == null ? void 0 : category.images,
              customBadges: (_b2 = (_a3 = category == null ? void 0 : category.contents) == null ? void 0 : _a3.find((item3) => item3.type === "custom_badges")) == null ? void 0 : _b2.data,
              itemPrice: category == null ? void 0 : category.minPrice,
              slug: category == null ? void 0 : category.slug,
              name: category == null ? void 0 : category.name,
              marks: category == null ? void 0 : category.marks
            };
            newItems.push(item2);
          }
        });
      }
      if (familyStripeDataProductsData == null ? void 0 : familyStripeDataProductsData.data) {
        (_a2 = familyStripeDataProductsData == null ? void 0 : familyStripeDataProductsData.data) == null ? void 0 : _a2.forEach((product) => {
          if (item.entityId == product.id) {
            const item2 = {
              isCategory: false,
              images: product == null ? void 0 : product.images,
              customBadges: product == null ? void 0 : product.customBadges,
              itemPrice: product == null ? void 0 : product.finalPrice,
              slug: product == null ? void 0 : product.slug,
              name: product == null ? void 0 : product.name,
              marks: product == null ? void 0 : product.marks
            };
            newItems.push(item2);
          }
        });
      }
    });
  }
  return newItems;
};

export { CatalogService as C, __nuxt_component_0 as _, getFamilyStripeData as g };
//# sourceMappingURL=useFamilyStripeData-DI_qwE51.mjs.map
