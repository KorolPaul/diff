import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, defineComponent, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import 'sanitize-html';
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

const _sfc_main$1 = defineComponent({
  name: "CategoryBanner",
  props: {
    category: {
      type: Object,
      required: true
    },
    richBlock: {
      type: Boolean,
      default: false
    },
    type: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    isFullSize: {
      type: Boolean,
      default: false
    },
    mainCategorySlug: {
      type: String,
      default: ""
    },
    showPrefixSlug: {
      type: Boolean,
      default: true
    },
    isLinkBehavior: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { getSanitizeHtml } = useSanitize();
    return { getSanitizeHtml };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_UiImg = _sfc_main$2;
  const _component_Icon = __nuxt_component_1$1;
  if (_ctx.richBlock) {
    _push(`<a${ssrRenderAttrs(mergeProps({
      href: _ctx.category.hrefImage,
      target: "_blank",
      class: ["category-banner", {
        "category-banner__rich-block": _ctx.richBlock,
        "category-banner__square": _ctx.square
      }]
    }, _attrs))}><div class="${ssrRenderClass([{
      "category-banner_image-wrapper__full-size": _ctx.isFullSize
    }, "category-banner_image-wrapper"])}">`);
    if (_ctx.category.image || _ctx.category.imageEntity && _ctx.category.imageEntity.path) {
      _push(ssrRenderComponent(_component_UiImg, {
        src: _ctx.category.image || _ctx.category.imageEntity.path,
        loading: "lazy",
        class: "category-banner_image",
        alt: _ctx.category.alt
      }, null, _parent));
    } else {
      _push(`<div class="category-banner_no-image">`);
      _push(ssrRenderComponent(_component_Icon, { icon: "noImageIcon" }, null, _parent));
      _push(`</div>`);
    }
    _push(`</div><div class="category-banner_title">${(_a = _ctx.getSanitizeHtml(_ctx.category.title)) != null ? _a : ""}</div><div class="category-banner_description">${(_b = _ctx.getSanitizeHtml(_ctx.category.description)) != null ? _b : ""}</div>`);
    if (_ctx.category.title) {
      _push(`<p class="category-banner_see-all">${ssrInterpolate(_ctx.$t("see_all"))} `);
      _push(ssrRenderComponent(_component_Icon, { icon: "arrowRight" }, null, _parent));
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</a>`);
  } else {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.isLinkBehavior ? "nuxt-link" : "div"), mergeProps({
      to: _ctx.localePath(
        !_ctx.showPrefixSlug ? `/${_ctx.category.slug}` : `/${_ctx.mainCategorySlug ? _ctx.mainCategorySlug : "category"}/${_ctx.category.slug}`
      ),
      class: "category-banner"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([{
            "category-banner_image-wrapper__full-size": _ctx.isFullSize
          }, "category-banner_image-wrapper"])}"${_scopeId}>`);
          if (_ctx.category.image_url) {
            _push2(ssrRenderComponent(_component_UiImg, {
              src: `${_ctx.category.image_url}`,
              alt: _ctx.category.name,
              width: 209,
              loading: "lazy"
            }, null, _parent2, _scopeId));
          } else {
            _push2(ssrRenderComponent(_component_Icon, { icon: "noImageIcon" }, null, _parent2, _scopeId));
          }
          _push2(`</div><span class="category-banner_title"${_scopeId}>${ssrInterpolate(_ctx.category.name)}</span>`);
        } else {
          return [
            createVNode("div", {
              class: ["category-banner_image-wrapper", {
                "category-banner_image-wrapper__full-size": _ctx.isFullSize
              }]
            }, [
              _ctx.category.image_url ? (openBlock(), createBlock(_component_UiImg, {
                key: 0,
                src: `${_ctx.category.image_url}`,
                alt: _ctx.category.name,
                width: 209,
                loading: "lazy"
              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_Icon, {
                key: 1,
                icon: "noImageIcon"
              }))
            ], 2),
            createVNode("span", { class: "category-banner_title" }, toDisplayString(_ctx.category.name), 1)
          ];
        }
      }),
      _: 1
    }), _parent);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/category-banner/category-banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "private-categories-list",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    isSlider: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Number,
      default: 4
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const swiperRef = ref(null);
    const scrollRef = ref(null);
    useRoute();
    const { getSanitizeHtml } = useSanitize();
    const isSquare = computed(() => {
      if (props.data.static === true) {
        if (props.data.columns >= 4) {
          return true;
        }
        return false;
      }
      return props.data.items.length >= 4;
    });
    const isTripple = computed(() => {
      if (props.data.static === true) {
        if (props.data.columns === 3) {
          return true;
        }
        return false;
      }
      return props.data.items.length === 3;
    });
    const autoPlaySettings = {
      delay: props.data.sliderInterval,
      disableOnInteraction: true
    };
    const swiperOptions = {
      slidesPerView: (_a = props.data.columns) != null ? _a : 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
      spaceBetween: 12,
      autoplay: props.data.sliderInterval ? autoPlaySettings : false,
      loop: true
    };
    const toNext = () => {
      var _a2, _b;
      (_b = (_a2 = swiperRef.value) == null ? void 0 : _a2.$swiper) == null ? void 0 : _b.slideNext();
    };
    const toPrev = () => {
      var _a2, _b;
      (_b = (_a2 = swiperRef.value) == null ? void 0 : _a2.$swiper) == null ? void 0 : _b.slidePrev();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_0;
      const _component_CategoryBanner = __nuxt_component_1;
      const _component_UiSliderBtn = resolveComponent("UiSliderBtn");
      if (__props.data && __props.data.items.length) {
        _push(ssrRenderComponent(_component_UiContainer, mergeProps({
          ref_key: "scrollRef",
          ref: scrollRef,
          class: "private-categories-list"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3;
            var _a2, _b, _c, _d;
            if (_push2) {
              if (__props.isSlider) {
                _push2(`<div class="private-categories-list_slider"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Swiper), {
                  ref_key: "swiperRef",
                  ref: swiperRef,
                  options: swiperOptions
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(__props.data.items, (category, index) => {
                        _push3(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_CategoryBanner, {
                                category,
                                "is-full-size": __props.data.fullSize,
                                square: isSquare.value,
                                "rich-block": ""
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_CategoryBanner, {
                                  category,
                                  "is-full-size": __props.data.fullSize,
                                  square: isSquare.value,
                                  "rich-block": ""
                                }, null, 8, ["category", "is-full-size", "square"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.data.items, (category, index) => {
                          return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_CategoryBanner, {
                                category,
                                "is-full-size": __props.data.fullSize,
                                square: isSquare.value,
                                "rich-block": ""
                              }, null, 8, ["category", "is-full-size", "square"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UiSliderBtn, {
                  type: "left",
                  centered: "",
                  class: "private-categories-list_slider-btn",
                  onOnClick: toPrev
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UiSliderBtn, {
                  type: "right",
                  centered: "",
                  class: "private-categories-list_slider-btn",
                  onOnClick: toNext
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!--[-->`);
                if ((_a2 = __props.data) == null ? void 0 : _a2.title) {
                  _push2(`<div class="private-categories-list_title"${_scopeId}>${(_a3 = unref(getSanitizeHtml)((_b = __props.data) == null ? void 0 : _b.title)) != null ? _a3 : ""}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="${ssrRenderClass([{
                  "private-categories-list_program-category-banner-content__square-list": isSquare.value,
                  "private-categories-list_program-category-banner-content__tripple-list": isTripple.value
                }, "private-categories-list_program-category-banner-content"])}"${_scopeId}><!--[-->`);
                ssrRenderList(__props.data.items, (category, index) => {
                  _push2(ssrRenderComponent(_component_CategoryBanner, {
                    key: index,
                    category,
                    "is-full-size": __props.data.fullSize,
                    square: isSquare.value,
                    "rich-block": "",
                    class: "category-banner_columns-" + __props.columns
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div><!--]-->`);
              }
            } else {
              return [
                __props.isSlider ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "private-categories-list_slider"
                }, [
                  createVNode(unref(Swiper), {
                    ref_key: "swiperRef",
                    ref: swiperRef,
                    options: swiperOptions
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.data.items, (category, index) => {
                        return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_CategoryBanner, {
                              category,
                              "is-full-size": __props.data.fullSize,
                              square: isSquare.value,
                              "rich-block": ""
                            }, null, 8, ["category", "is-full-size", "square"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }, 512),
                  createVNode(_component_UiSliderBtn, {
                    type: "left",
                    centered: "",
                    class: "private-categories-list_slider-btn",
                    onOnClick: toPrev
                  }),
                  createVNode(_component_UiSliderBtn, {
                    type: "right",
                    centered: "",
                    class: "private-categories-list_slider-btn",
                    onOnClick: toNext
                  })
                ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  ((_c = __props.data) == null ? void 0 : _c.title) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "private-categories-list_title",
                    innerHTML: unref(getSanitizeHtml)((_d = __props.data) == null ? void 0 : _d.title)
                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["private-categories-list_program-category-banner-content", {
                      "private-categories-list_program-category-banner-content__square-list": isSquare.value,
                      "private-categories-list_program-category-banner-content__tripple-list": isTripple.value
                    }]
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.data.items, (category, index) => {
                      return openBlock(), createBlock(_component_CategoryBanner, {
                        key: index,
                        category,
                        "is-full-size": __props.data.fullSize,
                        square: isSquare.value,
                        "rich-block": "",
                        class: "category-banner_columns-" + __props.columns
                      }, null, 8, ["category", "is-full-size", "square", "class"]);
                    }), 128))
                  ], 2)
                ], 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/program-partners/components/private-categories-list/private-categories-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=private-categories-list-iCYK3N8k.mjs.map
