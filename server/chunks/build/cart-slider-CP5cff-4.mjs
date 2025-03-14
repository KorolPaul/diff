import { _ as __nuxt_component_0$1 } from './carousel-product-B_FnTkjy.mjs';
import { _ as __nuxt_component_1 } from './ui-slider-button-ex5lF246.mjs';
import { mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';

const _sfc_main = {
  __name: "cart-slider",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    withoutPadding: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e;
    const props = __props;
    const modules = [Pagination, Navigation];
    const swiperOptions = {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      allowTouchMove: true,
      navigation: {
        nextEl: `.promo-${props.data.promoId}-next`,
        prevEl: `.promo-${props.data.promoId}-prev`
      },
      loop: true,
      pagination: ((_a = props.data) == null ? void 0 : _a.promoId) ? {
        el: `.promo-${props.data.promoId}`,
        clickable: true
      } : false,
      breakpoints: {
        [gridBreakpoints.lg]: {
          slidesPerView: 3,
          loop: ((_b = props.data.products) == null ? void 0 : _b.length) > 4,
          spaceBetween: 75
        },
        [gridBreakpoints.md]: {
          slidesPerView: 2.2,
          loop: ((_c = props.data.products) == null ? void 0 : _c.length) > 3,
          spaceBetween: 75
        },
        [gridBreakpoints.sm]: {
          slidesPerView: 1.7,
          loop: ((_d = props.data.products) == null ? void 0 : _d.length) > 2,
          spaceBetween: 75
        },
        [gridBreakpoints.xs]: {
          slidesPerView: 1.3,
          loop: ((_e = props.data.products) == null ? void 0 : _e.length) > 2,
          spaceBetween: 24
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      const _component_CarouselProduct = __nuxt_component_0$1;
      const _component_UiSliderButton = __nuxt_component_1;
      if ((_b2 = (_a2 = __props.data) == null ? void 0 : _a2.products) == null ? void 0 : _b2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["cart-slider", {
            "cart-slider__without-padding": __props.withoutPadding
          }]
        }, _attrs))} data-v-a39d2ce0>`);
        if ((_c2 = __props.data) == null ? void 0 : _c2.title) {
          _push(`<span class="cart-slider_title" data-v-a39d2ce0>${ssrInterpolate(_ctx.$t((_d2 = __props.data) == null ? void 0 : _d2.title))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="cart-slider_carousel" data-v-a39d2ce0>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ ...swiperOptions }, { modules }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data.products, (product, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  item: product
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CarouselProduct, { product }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CarouselProduct, { product }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data.products, (product, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: i,
                    item: product
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CarouselProduct, { product }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1032, ["item"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="${ssrRenderClass([`promo-${__props.data.promoId}-prev`, "cart-slider_btn cart-slider_btn-prev"])}" data-v-a39d2ce0>`);
        _push(ssrRenderComponent(_component_UiSliderButton, {
          type: "left",
          class: "cart-slider_btn"
        }, null, _parent));
        _push(`</div><div class="${ssrRenderClass([`promo-${__props.data.promoId}-next`, "cart-slider_btn cart-slider_btn-next"])}" data-v-a39d2ce0>`);
        _push(ssrRenderComponent(_component_UiSliderButton, {
          type: "right",
          class: "cart-slider_btn"
        }, null, _parent));
        _push(`</div></div><div class="${ssrRenderClass([`promo-${__props.data.promoId}`, "cart-slider_pagination"])}" data-v-a39d2ce0></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-slider/cart-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a39d2ce0"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=cart-slider-CP5cff-4.mjs.map
