import { _ as __nuxt_component_0 } from './carousel-BYXolnD1.mjs';
import { withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';
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

const _sfc_main = {
  __name: "discover-services-slider",
  __ssrInlineRender: true,
  props: {
    data: {
      type: {
        title: {
          type: String,
          default: ""
        },
        items: {
          type: Array,
          default: () => []
        }
      },
      required: true
    }
  },
  setup(__props) {
    const swiperOptions = {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      breakpoints: {
        [gridBreakpoints.xxl]: {
          loop: false
        },
        [gridBreakpoints.xl]: {
          loop: false
        },
        [gridBreakpoints.lg]: {
          loop: false
        },
        [gridBreakpoints.md]: {
          slidesPerGroup: 1,
          loop: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Carousel = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b353bd48><div class="service-slider-container" data-v-b353bd48><h2 class="service-slider-container_title" data-v-b353bd48>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</h2></div><div class="service-slider_slider-holder" data-v-b353bd48>`);
      if ((_b = __props.data) == null ? void 0 : _b.items) {
        _push(ssrRenderComponent(_component_Carousel, { options: swiperOptions }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a2 = __props.data) == null ? void 0 : _a2.items, (item, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b3;
                    if (_push3) {
                      _push3(`<a${ssrRenderAttr("href", item.link)} class="service-slider_holder-item" target="_blank" data-v-b353bd48${_scopeId2}><div data-v-b353bd48${_scopeId2}><p class="service-slider_bage-text" data-v-b353bd48${_scopeId2}>${(_a3 = item.bageText) != null ? _a3 : ""}</p><p class="service-slider_holder-text" data-v-b353bd48${_scopeId2}>${(_b3 = item.text) != null ? _b3 : ""}</p></div></a>`);
                    } else {
                      return [
                        createVNode("a", {
                          href: item.link,
                          class: "service-slider_holder-item",
                          target: "_blank"
                        }, [
                          createVNode("div", null, [
                            createVNode("p", {
                              class: "service-slider_bage-text",
                              innerHTML: item.bageText
                            }, null, 8, ["innerHTML"]),
                            createVNode("p", {
                              class: "service-slider_holder-text",
                              innerHTML: item.text
                            }, null, 8, ["innerHTML"])
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
                (openBlock(true), createBlock(Fragment, null, renderList((_b2 = __props.data) == null ? void 0 : _b2.items, (item, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: item.link,
                        class: "service-slider_holder-item",
                        target: "_blank"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", {
                            class: "service-slider_bage-text",
                            innerHTML: item.bageText
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", {
                            class: "service-slider_holder-text",
                            innerHTML: item.text
                          }, null, 8, ["innerHTML"])
                        ])
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/sliders/discover-services-slider/discover-services-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discoverServicesSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b353bd48"]]);

export { discoverServicesSlider as default };
//# sourceMappingURL=discover-services-slider-BOTBmZzw.mjs.map
