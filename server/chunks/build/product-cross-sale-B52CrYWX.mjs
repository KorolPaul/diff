import { _ as __nuxt_component_0 } from './carousel-product-B_FnTkjy.mjs';
import { _ as __nuxt_component_1 } from './ui-slider-button-ex5lF246.mjs';
import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';
import { P as ProductApiService } from './ProductApiService-BgJlybnL.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

const _sfc_main = {
  __name: "product-cross-sale",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => {
      }
    },
    productsIds: {
      type: Array,
      default: () => []
    },
    sliderKey: {
      type: String,
      default: ""
    },
    productPage: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    withoutCategory: {
      type: Boolean,
      default: false
    }
  },
  emits: ["onCrossProductsReady", "onCrossProductsEmpty"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const crossSaleSlider = ref(null);
    const isLoadedProducts = ref(false);
    const crossSaleCategoryList = ref([]);
    const selectedCategoryProducts = ref([]);
    const selectedCrossTabId = ref(0);
    const swiperOptions = {
      autoHeight: false,
      slidesPerView: props.small ? 2.1 : "auto",
      slidesPerGroup: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      navigation: {
        nextEl: ".next-cross-slide-btn",
        prevEl: ".prev-cross-slide-btn"
      },
      pagination: props.small ? false : {
        el: `.cross-sale-carousel_pagination`,
        clickable: true
      },
      breakpoints: {
        [gridBreakpoints.xl]: {
          slidesPerView: props.small ? 3.8 : 3,
          spaceBetween: 75
        },
        [gridBreakpoints.md]: {
          slidesPerView: props.small ? 3.8 : 2.5,
          spaceBetween: 75
        },
        [gridBreakpoints.sm]: {
          slidesPerView: props.small ? 3.8 : 1.5,
          spaceBetween: 75
        }
      }
    };
    const getProductCrossCategory = async () => {
      var _a, _b, _c;
      if (!((_a = props.product) == null ? void 0 : _a.id)) {
        selectedCategoryProducts.value = [];
        emit("onCrossProductsEmpty");
        return;
      }
      const { data } = await ProductApiService.getCrossSaleCategories({
        "product_ids[]": ((_b = props.productsIds) == null ? void 0 : _b.length) ? props.productsIds : props.product.id
      });
      selectedCategoryProducts.value = data.data || [];
      selectedCategoryProducts.value.forEach((productItem) => {
        if (productItem.related_product) {
          Object.assign(productItem, productItem.related_product);
        }
        if (productItem.related_category) {
          Object.assign(productItem, productItem.related_category);
        }
      });
      if ((_c = selectedCategoryProducts.value) == null ? void 0 : _c.length) {
        emit("onCrossProductsReady");
      } else {
        emit("onCrossProductsEmpty");
      }
      isLoadedProducts.value = false;
    };
    getProductCrossCategory();
    watch(
      () => props.productsIds,
      () => {
        getProductCrossCategory();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CarouselProduct = __nuxt_component_0;
      const _component_UiSliderButton = __nuxt_component_1;
      const _component_UiPreloader = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cross-sale-carousel", {
          "cross-sale-carousel__small": __props.small,
          "cross-sale-carousel__with-category": (_a = unref(selectedCategoryProducts)) == null ? void 0 : _a.length
        }]
      }, _attrs))} data-v-4e2a1eee>`);
      if (!__props.small && !__props.withoutCategory) {
        _push(`<div class="cross-sale-carousel_categories" data-v-4e2a1eee><!--[-->`);
        ssrRenderList(unref(crossSaleCategoryList), (item, i) => {
          _push(`<div class="${ssrRenderClass([{ active: i === unref(selectedCrossTabId) }, "cross-sale-carousel_category-item"])}" data-v-4e2a1eee>${ssrInterpolate(item.name)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(!unref(isLoadedProducts) ? null : { display: "none" })}" class="cross-sale-carousel_products" data-v-4e2a1eee>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        ref_key: "crossSaleSlider",
        ref: crossSaleSlider
      }, { ...swiperOptions }, {
        modules: [unref(Pagination), unref(Navigation)]
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(selectedCategoryProducts), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CarouselProduct, {
                      product: item,
                      small: __props.small,
                      "add-to-cart": "",
                      "show-color": ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CarouselProduct, {
                        product: item,
                        small: __props.small,
                        "add-to-cart": "",
                        "show-color": ""
                      }, null, 8, ["product", "small"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCategoryProducts), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: i,
                  item
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CarouselProduct, {
                      product: item,
                      small: __props.small,
                      "add-to-cart": "",
                      "show-color": ""
                    }, null, 8, ["product", "small"])
                  ]),
                  _: 2
                }, 1032, ["item"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.small) {
        _push(`<div class="cross-sale-carousel_pagination" data-v-4e2a1eee></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="prev-cross-slide-btn" data-v-4e2a1eee>`);
      _push(ssrRenderComponent(_component_UiSliderButton, {
        type: "left",
        class: "cart-slider_btn"
      }, null, _parent));
      _push(`</div><div class="next-cross-slide-btn" data-v-4e2a1eee>`);
      _push(ssrRenderComponent(_component_UiSliderButton, {
        type: "right",
        class: "cart-slider_btn"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(isLoadedProducts)) {
        _push(`<div class="cross-sale-carousel_preloader" data-v-4e2a1eee>`);
        _push(ssrRenderComponent(_component_UiPreloader, { size: 34 }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/product-cross-sale/product-cross-sale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e2a1eee"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=product-cross-sale-B52CrYWX.mjs.map
