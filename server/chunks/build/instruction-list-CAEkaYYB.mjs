import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
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

const _sfc_main = {
  __name: "instruction-list",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    const swiperOptions = {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true,
      navigation: {
        nextEl: ".next-slide-btn",
        prevEl: ".prev-slide-btn"
      },
      breakpoints: {
        [gridBreakpoints.xl]: {
          slidesPerView: 3
        },
        [gridBreakpoints.lg]: {
          slidesPerView: 3
        },
        [gridBreakpoints.md]: {
          slidesPerView: 2
        },
        [gridBreakpoints.sm]: {
          slidesPerView: 1
        },
        [gridBreakpoints.xs]: {
          slidesPerView: 1
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiImg = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      if (__props.data) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "instruction-list" }, _attrs))} data-v-75ddab64><p class="instruction-list_title" data-v-75ddab64>${(_a = unref(getSanitizeHtml)(__props.data.title)) != null ? _a : ""}</p><div class="info-slider" data-v-75ddab64>`);
        _push(ssrRenderComponent(unref(Swiper), {
          class: "swiper slider-main mb-3",
          options: swiperOptions
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data.items, (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  item,
                  class: "info-block"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2;
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiImg, {
                        src: `${item.image}`,
                        width: 150,
                        class: "steps"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="step-description" data-v-75ddab64${_scopeId2}>${(_a2 = unref(getSanitizeHtml)(item.description)) != null ? _a2 : ""}</div>`);
                    } else {
                      return [
                        createVNode(_component_UiImg, {
                          src: `${item.image}`,
                          width: 150,
                          class: "steps"
                        }, null, 8, ["src"]),
                        createVNode("div", {
                          class: "step-description",
                          innerHTML: unref(getSanitizeHtml)(item.description)
                        }, null, 8, ["innerHTML"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data.items, (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: i,
                    item,
                    class: "info-block"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiImg, {
                        src: `${item.image}`,
                        width: 150,
                        class: "steps"
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        class: "step-description",
                        innerHTML: unref(getSanitizeHtml)(item.description)
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 2
                  }, 1032, ["item"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="prev-slide-btn d-lg-none" data-v-75ddab64>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "arrowLeftSlider",
          color: "#f0f0f0"
        }, null, _parent));
        _push(`</div><div class="next-slide-btn d-lg-none" data-v-75ddab64>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "arrowRightSlider",
          color: "#f0f0f0"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/instruction-list/instruction-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const instructionList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75ddab64"]]);

export { instructionList as default };
//# sourceMappingURL=instruction-list-CAEkaYYB.mjs.map
