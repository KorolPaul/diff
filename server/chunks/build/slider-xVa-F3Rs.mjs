import { _ as _sfc_main$1 } from './UiLink-CpRzX3bY.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createBlock, openBlock, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { _ as _export_sfc, c as useLocalePath } from './server.mjs';
import { u as useCdnImg } from './useCdnImg-5SGHhxDr.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "slider",
  __ssrInlineRender: true,
  props: {
    slides: {},
    frequency: {},
    navigation: { type: Boolean },
    pagination: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const localePath = useLocalePath();
    const { generateUrl } = useCdnImg();
    const preparedSlides = computed(
      () => props.slides.map((slide) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const src = ((_c = (_b = (_a = slide.content.bannerSizes.find((size) => size.size === "mobile")) == null ? void 0 : _a.image) == null ? void 0 : _b.file) == null ? void 0 : _c.path) || "";
        const srcTablet = ((_f = (_e = (_d = slide.content.bannerSizes.find((size) => size.size === "tab")) == null ? void 0 : _d.image) == null ? void 0 : _e.file) == null ? void 0 : _f.path) || "";
        const srcDesktop = ((_i = (_h = (_g = slide.content.bannerSizes.find((size) => size.size === "desktop")) == null ? void 0 : _g.image) == null ? void 0 : _h.file) == null ? void 0 : _i.path) || "";
        const isVideo = srcDesktop.includes(".mp4") || srcDesktop.includes(".webm");
        return {
          src: generateUrl(src, {}),
          srcTablet: generateUrl(srcTablet, {}),
          srcDesktop: generateUrl(srcDesktop, {}),
          type: isVideo ? "video" : "image",
          name: slide == null ? void 0 : slide.name,
          color: ((_k = (_j = slide == null ? void 0 : slide.content) == null ? void 0 : _j.bgColors) == null ? void 0 : _k[0]) || "transparent",
          url: (_l = slide.url) == null ? void 0 : _l.replaceAll('"', "")
        };
      })
    );
    const swiperOptions = {
      navigation: {
        nextEl: ".slider_next",
        prevEl: ".slider_prev"
      },
      pagination: props.pagination && props.slides.length > 1 ? {
        clickable: true
      } : false,
      spaceBetween: 24,
      autoplay: {
        delay: props.frequency,
        disableOnInteraction: false
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLink = _sfc_main$1;
      const _component_Icon = __nuxt_component_1$1;
      if (_ctx.slides) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-3930f47a><div class="slider_container" data-v-3930f47a>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ ...swiperOptions }, {
          loop: "",
          modules: [unref(Navigation), unref(Pagination), unref(Autoplay)]
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(preparedSlides), (slide) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: slide.name,
                  class: "slider_slide",
                  style: { backgroundColor: slide.color }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiLink, {
                        link: unref(localePath)(slide.url || ""),
                        class: "slider_link"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (slide.type === "video") {
                              _push4(`<video class="slider_image"${ssrRenderAttr("src", slide.srcDesktop)} autoplay playsinline loop muted data-v-3930f47a${_scopeId3}></video>`);
                            } else {
                              _push4(`<picture class="slider_image" data-v-3930f47a${_scopeId3}><source media="(min-width: 1024px)"${ssrRenderAttr("srcset", slide.srcDesktop)} type="image/webp" data-v-3930f47a${_scopeId3}><source media="(min-width: 768px)"${ssrRenderAttr("srcset", slide.srcTablet)} type="image/webp" data-v-3930f47a${_scopeId3}><img class="slider_image"${ssrRenderAttr("src", slide.src)} alt="" data-v-3930f47a${_scopeId3}></picture>`);
                            }
                          } else {
                            return [
                              slide.type === "video" ? (openBlock(), createBlock("video", {
                                key: 0,
                                class: "slider_image",
                                src: slide.srcDesktop,
                                autoplay: "",
                                playsinline: "",
                                loop: "",
                                muted: ""
                              }, null, 8, ["src"])) : (openBlock(), createBlock("picture", {
                                key: 1,
                                class: "slider_image"
                              }, [
                                createVNode("source", {
                                  media: "(min-width: 1024px)",
                                  srcset: slide.srcDesktop,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("source", {
                                  media: "(min-width: 768px)",
                                  srcset: slide.srcTablet,
                                  type: "image/webp"
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  class: "slider_image",
                                  src: slide.src,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiLink, {
                          link: unref(localePath)(slide.url || ""),
                          class: "slider_link"
                        }, {
                          default: withCtx(() => [
                            slide.type === "video" ? (openBlock(), createBlock("video", {
                              key: 0,
                              class: "slider_image",
                              src: slide.srcDesktop,
                              autoplay: "",
                              playsinline: "",
                              loop: "",
                              muted: ""
                            }, null, 8, ["src"])) : (openBlock(), createBlock("picture", {
                              key: 1,
                              class: "slider_image"
                            }, [
                              createVNode("source", {
                                media: "(min-width: 1024px)",
                                srcset: slide.srcDesktop,
                                type: "image/webp"
                              }, null, 8, ["srcset"]),
                              createVNode("source", {
                                media: "(min-width: 768px)",
                                srcset: slide.srcTablet,
                                type: "image/webp"
                              }, null, 8, ["srcset"]),
                              createVNode("img", {
                                class: "slider_image",
                                src: slide.src,
                                alt: ""
                              }, null, 8, ["src"])
                            ]))
                          ]),
                          _: 2
                        }, 1032, ["link"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(preparedSlides), (slide) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: slide.name,
                    class: "slider_slide",
                    style: { backgroundColor: slide.color }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiLink, {
                        link: unref(localePath)(slide.url || ""),
                        class: "slider_link"
                      }, {
                        default: withCtx(() => [
                          slide.type === "video" ? (openBlock(), createBlock("video", {
                            key: 0,
                            class: "slider_image",
                            src: slide.srcDesktop,
                            autoplay: "",
                            playsinline: "",
                            loop: "",
                            muted: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock("picture", {
                            key: 1,
                            class: "slider_image"
                          }, [
                            createVNode("source", {
                              media: "(min-width: 1024px)",
                              srcset: slide.srcDesktop,
                              type: "image/webp"
                            }, null, 8, ["srcset"]),
                            createVNode("source", {
                              media: "(min-width: 768px)",
                              srcset: slide.srcTablet,
                              type: "image/webp"
                            }, null, 8, ["srcset"]),
                            createVNode("img", {
                              class: "slider_image",
                              src: slide.src,
                              alt: ""
                            }, null, 8, ["src"])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["link"])
                    ]),
                    _: 2
                  }, 1032, ["style"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.navigation) {
          _push(`<!--[--><button class="slider_prev" data-v-3930f47a>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "arrowLeftSlider",
            color: "#fff"
          }, null, _parent));
          _push(`</button><button class="slider_next" data-v-3930f47a>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "arrowRightSlider",
            color: "#fff"
          }, null, _parent));
          _push(`</button><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/sliders/slider/slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3930f47a"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=slider-xVa-F3Rs.mjs.map
