import { _ as __nuxt_component_0 } from './carousel-BYXolnD1.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { ref, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, I as gridBreakpoints, e as useApi } from './server.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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
import 'sanitize-html';

const wpBanners$1 = `blog/wp-json/wp/v2/posts`;
const wordPressService = {
  async getWPLastArticles(domain, count) {
    const { get } = useApi();
    if (domain) {
      const { data: data2 } = await get(`${domain}/${wpBanners$1}?per_page=${count}`);
      return {
        data: data2.value
      };
    }
    const { data } = await get(`/${wpBanners$1}?per_page=${count}`);
    return {
      data: data.value
    };
  }
};
const _sfc_main = {
  __name: "wp-banners",
  __ssrInlineRender: true,
  props: {
    data: {
      blogLinkText: {
        type: String,
        default: ""
      },
      blogLink: {
        type: String,
        default: ""
      },
      blogTitle: {
        type: String,
        default: ""
      },
      scrollDelay: {
        type: Number,
        default: 0
      },
      postNumber: {
        type: Number,
        default: 8
      },
      defaultLang: {
        type: String,
        default: ""
      },
      onlyDefaultLang: {
        type: Boolean,
        default: false
      },
      domain: {
        type: String,
        default: ""
      }
    }
  },
  setup(__props) {
    const props = __props;
    const isLoadingPosts = ref(true);
    const { getSanitizeHtml } = useSanitize();
    const slides = ref([]);
    const getSlides = async () => {
      isLoadingPosts.value = true;
      slides.value = [];
      try {
        let postsNum = props.data.postNumber;
        if (props.data.postNumber > 16) {
          postsNum = 16;
        }
        const data = await wordPressService.getWPLastArticles(
          props.data.domain,
          postsNum
        );
        if (data.data && Array.isArray(data.data)) {
          slides.value = data.data;
        }
        isLoadingPosts.value = false;
      } catch (e) {
        isLoadingPosts.value = false;
      }
    };
    const setShortDesctiption = (description, size) => `${description.slice(0, size)}${description.length > size ? "..." : ""}`;
    getSlides();
    const swiperOptions = {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      breakpoints: {
        [gridBreakpoints.xxl]: {
          slidesPerGroup: 4,
          loop: false
        },
        [gridBreakpoints.xl]: {
          slidesPerGroup: 4,
          loop: false
        },
        [gridBreakpoints.lg]: {
          slidesPerGroup: 2,
          loop: false
        },
        [gridBreakpoints.md]: {
          slidesPerGroup: 1,
          loop: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_Carousel = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_UiPreloader = __nuxt_component_2;
      if (!isLoadingPosts.value) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-a4ba8e2e>`);
        if (slides.value && slides.value.length) {
          _push(`<div class="container" data-v-a4ba8e2e><h2 class="word-press-slider-title" data-v-a4ba8e2e>${(_a2 = unref(getSanitizeHtml)((_a = __props.data) == null ? void 0 : _a.blogTitle)) != null ? _a2 : ""}</h2><div class="word-press-slider" data-v-a4ba8e2e><div class="word-press-slider_container" data-v-a4ba8e2e>`);
          _push(ssrRenderComponent(_component_Carousel, { options: swiperOptions }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(slides.value, (article, index) => {
                  _push2(ssrRenderComponent(unref(SwiperSlide), {
                    key: index,
                    class: "word-press-slider_banner"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a3;
                      var _a22, _b, _c, _d, _e, _f;
                      if (_push3) {
                        _push3(`<a${ssrRenderAttr("href", article.link)} target="_blank" class="word-press-slider_link" data-v-a4ba8e2e${_scopeId2}><div class="wp-slider-item-image" data-v-a4ba8e2e${_scopeId2}><picture class="wp-slider-item-image_picture" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 1460px)"${ssrRenderAttr("srcset", article.frontimg)} type="image/webp" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 1460px)"${ssrRenderAttr("srcset", article.frontimg)} data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 992px)"${ssrRenderAttr("srcset", article.frontimg)} type="image/webp" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 992px)"${ssrRenderAttr("srcset", article.frontimg)} data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 768px)"${ssrRenderAttr("srcset", article.frontimg)} type="image/webp" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 768px)"${ssrRenderAttr("srcset", article.frontimg)} data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 576px)"${ssrRenderAttr("srcset", article.frontimglarge)} type="image/webp" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(min-width: 576px)"${ssrRenderAttr("srcset", article.frontimglarge)} data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(max-width: 575px)"${ssrRenderAttr("srcset", article.frontimglarge)} type="image/webp" data-v-a4ba8e2e${_scopeId2}><source class="wp-slider-item-image" media="(max-width: 575px)"${ssrRenderAttr("srcset", article.frontimglarge)} data-v-a4ba8e2e${_scopeId2}><img class="wp-slider-item-image_default-image"${ssrRenderAttr("srcset", article.frontimg)} alt="" data-v-a4ba8e2e${_scopeId2}></picture><div class="wp-slider-item-image_cover" data-v-a4ba8e2e${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, { icon: "eyeIcon" }, null, _parent3, _scopeId2));
                        _push3(`</div></div><div class="wp-slide-description" data-v-a4ba8e2e${_scopeId2}><p class="wp-slide-description_badge" data-v-a4ba8e2e${_scopeId2}>${ssrInterpolate((_a22 = article == null ? void 0 : article.acf) == null ? void 0 : _a22.bage)}</p><p class="wp-slide-description_title" data-v-a4ba8e2e${_scopeId2}>${ssrInterpolate((_b = article.yoast_head_json) == null ? void 0 : _b.og_title)}</p>`);
                        if (article.acf && article.acf.subtitle) {
                          _push3(`<p class="wp-slide-description_subtitle" data-v-a4ba8e2e${_scopeId2}>${ssrInterpolate(article.acf.subtitle)}</p>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<p class="wp-slide-description_content" data-v-a4ba8e2e${_scopeId2}><span data-v-a4ba8e2e${_scopeId2}>${(_a3 = setShortDesctiption(
                          (_c = article.yoast_head_json) == null ? void 0 : _c.og_description,
                          80
                        )) != null ? _a3 : ""}</span></p></div></a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: article.link,
                            target: "_blank",
                            class: "word-press-slider_link"
                          }, [
                            createVNode("div", { class: "wp-slider-item-image" }, [
                              createVNode("picture", { class: "wp-slider-item-image_picture" }, [
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 1460px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 1460px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 992px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 992px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 768px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 768px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 576px)",
                                  srcset: article.frontimglarge,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 576px)",
                                  srcset: article.frontimglarge
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(max-width: 575px)",
                                  srcset: article.frontimglarge,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(max-width: 575px)",
                                  srcset: article.frontimglarge
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  class: "wp-slider-item-image_default-image",
                                  srcset: article.frontimg,
                                  alt: ""
                                }, null, 8, ["srcset"])
                              ]),
                              createVNode("div", { class: "wp-slider-item-image_cover" }, [
                                createVNode(_component_Icon, { icon: "eyeIcon" })
                              ])
                            ]),
                            createVNode("div", { class: "wp-slide-description" }, [
                              createVNode("p", { class: "wp-slide-description_badge" }, toDisplayString((_d = article == null ? void 0 : article.acf) == null ? void 0 : _d.bage), 1),
                              createVNode("p", { class: "wp-slide-description_title" }, toDisplayString((_e = article.yoast_head_json) == null ? void 0 : _e.og_title), 1),
                              article.acf && article.acf.subtitle ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "wp-slide-description_subtitle"
                              }, toDisplayString(article.acf.subtitle), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "wp-slide-description_content" }, [
                                createVNode("span", {
                                  innerHTML: setShortDesctiption(
                                    (_f = article.yoast_head_json) == null ? void 0 : _f.og_description,
                                    80
                                  )
                                }, null, 8, ["innerHTML"])
                              ])
                            ])
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(slides.value, (article, index) => {
                    return openBlock(), createBlock(unref(SwiperSlide), {
                      key: index,
                      class: "word-press-slider_banner"
                    }, {
                      default: withCtx(() => {
                        var _a22, _b, _c;
                        return [
                          createVNode("a", {
                            href: article.link,
                            target: "_blank",
                            class: "word-press-slider_link"
                          }, [
                            createVNode("div", { class: "wp-slider-item-image" }, [
                              createVNode("picture", { class: "wp-slider-item-image_picture" }, [
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 1460px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 1460px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 992px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 992px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 768px)",
                                  srcset: article.frontimg,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 768px)",
                                  srcset: article.frontimg
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 576px)",
                                  srcset: article.frontimglarge,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(min-width: 576px)",
                                  srcset: article.frontimglarge
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(max-width: 575px)",
                                  srcset: article.frontimglarge,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  class: "wp-slider-item-image",
                                  media: "(max-width: 575px)",
                                  srcset: article.frontimglarge
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  class: "wp-slider-item-image_default-image",
                                  srcset: article.frontimg,
                                  alt: ""
                                }, null, 8, ["srcset"])
                              ]),
                              createVNode("div", { class: "wp-slider-item-image_cover" }, [
                                createVNode(_component_Icon, { icon: "eyeIcon" })
                              ])
                            ]),
                            createVNode("div", { class: "wp-slide-description" }, [
                              createVNode("p", { class: "wp-slide-description_badge" }, toDisplayString((_a22 = article == null ? void 0 : article.acf) == null ? void 0 : _a22.bage), 1),
                              createVNode("p", { class: "wp-slide-description_title" }, toDisplayString((_b = article.yoast_head_json) == null ? void 0 : _b.og_title), 1),
                              article.acf && article.acf.subtitle ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "wp-slide-description_subtitle"
                              }, toDisplayString(article.acf.subtitle), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "wp-slide-description_content" }, [
                                createVNode("span", {
                                  innerHTML: setShortDesctiption(
                                    (_c = article.yoast_head_json) == null ? void 0 : _c.og_description,
                                    80
                                  )
                                }, null, 8, ["innerHTML"])
                              ])
                            ])
                          ], 8, ["href"])
                        ];
                      }),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-a4ba8e2e>`);
        _push(ssrRenderComponent(_component_UiPreloader, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/wp-banners/wp-banners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wpBanners = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4ba8e2e"]]);

export { wpBanners as default };
//# sourceMappingURL=wp-banners-DT-A8hEg.mjs.map
