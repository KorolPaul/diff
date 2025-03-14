import { _ as __nuxt_component_2$1 } from './ui-preloader-C4Bi7ENY.mjs';
import { _ as __nuxt_component_1$4 } from './icon-_hjsSUWU.mjs';
import { defineComponent, ref, mergeProps, unref, computed, shallowRef, useTemplateRef, withAsyncContext, reactive, watch, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, isRef, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, C as useRouter, c as useLocalePath, k as __nuxt_component_6, d as __nuxt_component_0$2$1, j as useProductStore } from './server.mjs';
import { _ as _sfc_main$e } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1$5 } from './currency-text-DJsP4_8P.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { _ as __nuxt_component_1$3 } from './ui-slider-button-ex5lF246.mjs';
import { Container, Draggable } from 'vue3-smooth-dnd';
import { useStorage, useIntersectionObserver, useScroll, watchDebounced } from '@vueuse/core';
import { u as useBreakpoint } from './useBreakpoints-8FE3JIb9.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { _ as __nuxt_component_1$2 } from './UiSelect-BqVOhDGy.mjs';
import { _ as _sfc_main$d } from './modal-light-Cz0YAIgT.mjs';
import { u as useHeaderState } from './useHeaderState-DEk9LBo0.mjs';
import { P as ProductApiService } from './ProductApiService-BgJlybnL.mjs';
import { camelizeKeys } from 'humps';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';
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
import 'zod';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import 'sanitize-html';

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "compare-product-tools",
  __ssrInlineRender: true,
  emits: ["remove"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-product-tools" }, _attrs))} data-v-bd13ab7a><div class="compare-product-tools_button-wrapper" data-v-bd13ab7a><button class="compare-product-tools_button compare-product-tools_button__drag" data-no-dragscroll data-v-bd13ab7a>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "compare-product-tools_icon",
        icon: "leftRightArrow"
      }, null, _parent));
      _push(`</button></div><div class="compare-product-tools_button-wrapper" data-v-bd13ab7a><button class="compare-product-tools_button" data-v-bd13ab7a>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "compare-product-tools_icon",
        icon: "trash",
        "container-size": ""
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-product/compare-product-tools.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-bd13ab7a"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "compare-product",
  __ssrInlineRender: true,
  props: {
    product: {},
    isHideImage: { type: Boolean }
  },
  emits: ["remove"],
  setup(__props) {
    const localePath = useLocalePath();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompareProductTools = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_UiImg = _sfc_main$e;
      const _component_CurrencyText = __nuxt_component_1$5;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-product" }, _attrs))} data-v-6249405b>`);
      _push(ssrRenderComponent(_component_CompareProductTools, {
        class: "compare-product_tools",
        onRemove: ($event) => _ctx.$emit("remove")
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "compare-product_link",
        to: unref(localePath)(`/product/${("product" in _ctx ? _ctx.product : unref(useProductStore)).slug}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiImg, {
              src: (_c = (_b = (_a = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _a.variations[0]) == null ? void 0 : _b.images) == null ? void 0 : _c[0],
              class: ["compare-product_image", {
                "compare-product_image__hide": _ctx.isHideImage
              }],
              alt: (_d = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _d.name
            }, null, _parent2, _scopeId));
            _push2(`<div class="compare-product_wrapper" data-v-6249405b${_scopeId}><h4 class="compare-product_name" data-v-6249405b${_scopeId}>${ssrInterpolate((_e = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _e.name)}</h4><span class="compare-product_price" data-v-6249405b${_scopeId}>${ssrInterpolate(unref(formatPriceWithSpaces)(("product" in _ctx ? _ctx.product : unref(useProductStore)).finalPrice))} `);
            _push2(ssrRenderComponent(_component_CurrencyText, {
              currency: ("product" in _ctx ? _ctx.product : unref(useProductStore)).currency
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "compare-product_button",
              href: unref(localePath)(`/product/${("product" in _ctx ? _ctx.product : unref(useProductStore)).slug}`)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("buy_now"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("buy_now")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UiImg, {
                src: (_h = (_g = (_f = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _f.variations[0]) == null ? void 0 : _g.images) == null ? void 0 : _h[0],
                class: ["compare-product_image", {
                  "compare-product_image__hide": _ctx.isHideImage
                }],
                alt: (_i = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _i.name
              }, null, 8, ["src", "class", "alt"]),
              createVNode("div", { class: "compare-product_wrapper" }, [
                createVNode("h4", { class: "compare-product_name" }, toDisplayString((_j = "product" in _ctx ? _ctx.product : unref(useProductStore)) == null ? void 0 : _j.name), 1),
                createVNode("span", { class: "compare-product_price" }, [
                  createTextVNode(toDisplayString(unref(formatPriceWithSpaces)(("product" in _ctx ? _ctx.product : unref(useProductStore)).finalPrice)) + " ", 1),
                  createVNode(_component_CurrencyText, {
                    currency: ("product" in _ctx ? _ctx.product : unref(useProductStore)).currency
                  }, null, 8, ["currency"])
                ]),
                createVNode(_component_Button, {
                  class: "compare-product_button",
                  href: unref(localePath)(`/product/${("product" in _ctx ? _ctx.product : unref(useProductStore)).slug}`)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("buy_now")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-product/compare-product.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-6249405b"]]);
var DirectionEnum = /* @__PURE__ */ ((DirectionEnum2) => {
  DirectionEnum2[DirectionEnum2["LEFT"] = 0] = "LEFT";
  DirectionEnum2[DirectionEnum2["RIGHT"] = 1] = "RIGHT";
  return DirectionEnum2;
})(DirectionEnum || {});
const useContainerScroll = (containerRef, callback) => {
  const { x } = useScroll(containerRef, {
    behavior: "smooth"
  });
  const scrollToLeft = (value) => {
    x.value = value != null ? value : 0;
  };
  const scrollToRight = (value) => {
    var _a;
    x.value = value != null ? value : (_a = containerRef.value) == null ? void 0 : _a.clientWidth;
  };
  const scrollTo = (options) => {
    const type = options.direction;
    const value = options.value;
    switch (type) {
      case 0:
        scrollToLeft(value);
        break;
      case 1:
        scrollToRight(value);
        break;
    }
  };
  watchDebounced(
    x,
    (value) => {
      callback(value);
    },
    {
      debounce: 100
    }
  );
  return {
    x,
    scrollTo
  };
};
const useArrowVisibility = (arrayRef) => {
  const isLeftArrowShown = ref(false);
  const isRightArrowShown = ref(false);
  const onIntersect = (entries) => {
    var _a, _b;
    for (const entry of entries) {
      const isFirstElement = ((_a = arrayRef.value[0]) == null ? void 0 : _a.$el) === entry.target;
      const isLastElement = ((_b = arrayRef.value[arrayRef.value.length - 1]) == null ? void 0 : _b.$el) === entry.target;
      const isIntersecting = entry.isIntersecting;
      if (isFirstElement) {
        isLeftArrowShown.value = !(isFirstElement && isIntersecting);
      }
      if (isLastElement) {
        isRightArrowShown.value = !(isLastElement && isIntersecting);
      }
    }
  };
  const { stop } = useIntersectionObserver(arrayRef, onIntersect);
  return {
    isLeftArrowShown,
    isRightArrowShown
  };
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "compare-list-items",
  __ssrInlineRender: true,
  props: {
    items: {},
    scrollPosition: {},
    isIntersectionWithTable: { type: Boolean }
  },
  emits: ["drop", "removeItem", "scroll"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const scrollContainerRef = useTemplateRef("scrollContainerRef");
    const compareProductsRef = ref([]);
    const { isMinWidthMd } = useBreakpoint();
    const { x, scrollTo } = useContainerScroll(
      scrollContainerRef,
      (value) => {
        if (value !== props.scrollPosition && isMinWidthMd.value) {
          emit("scroll", value);
        }
      }
    );
    const { isRightArrowShown, isLeftArrowShown } = useArrowVisibility(compareProductsRef);
    const isHideImage = computed(
      () => isMinWidthMd.value && props.isIntersectionWithTable
    );
    const onRightButtonClick = () => {
      scrollTo({ direction: DirectionEnum.RIGHT });
    };
    const onLeftButtonClick = () => {
      scrollTo({ direction: DirectionEnum.LEFT });
    };
    watch(
      () => props.scrollPosition,
      (value) => {
        if (x.value !== value) {
          x.value = value;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompareProduct = __nuxt_component_0$2;
      const _component_UiSliderButton = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["compare-list-items", {
          "compare-list-items__border": _ctx.isIntersectionWithTable
        }]
      }, _attrs))} data-v-24886884>`);
      if (unref(isMinWidthMd)) {
        _push(`<div class="compare-list-items_scroll" data-v-24886884>`);
        _push(ssrRenderComponent(unref(Container), {
          "drag-handle-selector": ".compare-product-tools_button__drag",
          class: "compare-list-items_list",
          orientation: "horizontal",
          onDrop: ($event) => _ctx.$emit("drop", $event)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (item) => {
                _push2(ssrRenderComponent(unref(Draggable), {
                  key: item.order,
                  tag: "div"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CompareProduct, {
                        ref_for: true,
                        ref_key: "compareProductsRef",
                        ref: compareProductsRef,
                        product: item,
                        "is-hide-image": unref(isHideImage),
                        onRemove: ($event) => _ctx.$emit("removeItem", item.id)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CompareProduct, {
                          ref_for: true,
                          ref_key: "compareProductsRef",
                          ref: compareProductsRef,
                          product: item,
                          "is-hide-image": unref(isHideImage),
                          onRemove: ($event) => _ctx.$emit("removeItem", item.id)
                        }, null, 8, ["product", "is-hide-image", "onRemove"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                  return openBlock(), createBlock(unref(Draggable), {
                    key: item.order,
                    tag: "div"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CompareProduct, {
                        ref_for: true,
                        ref_key: "compareProductsRef",
                        ref: compareProductsRef,
                        product: item,
                        "is-hide-image": unref(isHideImage),
                        onRemove: ($event) => _ctx.$emit("removeItem", item.id)
                      }, null, 8, ["product", "is-hide-image", "onRemove"])
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
        _push(`<div class="compare-list-items_list" data-v-24886884><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(ssrRenderComponent(_component_CompareProduct, {
            key: item.order,
            product: item,
            "is-hide-image": unref(isHideImage),
            onRemove: ($event) => _ctx.$emit("removeItem", item.id)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_UiSliderButton, {
        style: unref(isLeftArrowShown) ? null : { display: "none" },
        ref: "leftButtonRef",
        type: "left",
        class: "compare-list-items_arrow compare-list-items_arrow__left",
        onOnClick: onLeftButtonClick
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiSliderButton, {
        style: unref(isRightArrowShown) ? null : { display: "none" },
        ref: "rightButtonRef",
        type: "right",
        class: "compare-list-items_arrow compare-list-items_arrow__right",
        onOnClick: onRightButtonClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-list-items/compare-list-items.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-24886884"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "compare-table-characteristic",
  __ssrInlineRender: true,
  props: {
    items: {},
    feature: {}
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    useBreakpoint();
    const isExpanded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-table-characteristic" }, _attrs))} data-v-ee4b3aec><h4 class="compare-table-characteristic_title" data-v-ee4b3aec>${ssrInterpolate(_ctx.feature.name)} `);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "chevronIcon",
        class: ["compare-table-characteristic_icon", { "compare-table-characteristic_icon__rotated": unref(isExpanded) }]
      }, null, _parent));
      _push(`</h4><ul class="${ssrRenderClass([{
        "compare-table-characteristic_list__expanded": unref(isExpanded)
      }, "compare-table-characteristic_list"])}" data-v-ee4b3aec><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        var _a;
        _push(`<li class="compare-table-characteristic_item" data-v-ee4b3aec><span class="compare-table-characteristic_product-name" data-v-ee4b3aec>${ssrInterpolate(item.name)}</span>`);
        if (_ctx.feature.value[item.id]) {
          _push(`<span data-v-ee4b3aec>${(_a = unref(getSanitizeHtml)(_ctx.feature.value[item.id])) != null ? _a : ""}</span>`);
        } else {
          _push(`<span data-v-ee4b3aec>${ssrInterpolate(_ctx.$t("no_data"))}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-table/compare-table-characteristic.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ee4b3aec"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "compare-table-characteristics",
  __ssrInlineRender: true,
  props: {
    featuresGroup: {},
    items: {},
    isShowDifference: { type: Boolean },
    isShowCoincidence: { type: Boolean },
    scrollPosition: {}
  },
  emits: ["scroll"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const scrollContainerRef = useTemplateRef("scrollContainerRef");
    const { isMinWidthMd } = useBreakpoint();
    const { x } = useContainerScroll(scrollContainerRef, (value) => {
      if (value !== props.scrollPosition && isMinWidthMd.value) {
        emit("scroll", value);
      }
    });
    const getFeatureVisibility = (feature) => props.isShowDifference ? feature.isDifference : props.isShowCoincidence ? feature.isCoincidence : true;
    watch(
      () => props.scrollPosition,
      (value) => {
        if (x.value !== value) {
          x.value = value;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompareTableCharacteristic = __nuxt_component_0$1;
      const _directive_dragscroll = resolveDirective("dragscroll");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "scrollContainerRef",
        ref: scrollContainerRef,
        class: "compare-table-characteristics"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_dragscroll, void 0, void 0, { x: true })))} data-v-28f2759a><div class="compare-table-characteristics_wrapper" data-v-28f2759a><!--[-->`);
      ssrRenderList(_ctx.featuresGroup, (feature, featureIndex) => {
        _push(`<!--[-->`);
        if (getFeatureVisibility(feature)) {
          _push(ssrRenderComponent(_component_CompareTableCharacteristic, {
            items: _ctx.items,
            feature
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-table/compare-table-characteristics.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const CompareTableCharacteristics = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-28f2759a"]]);
var FilterVariantEnum = /* @__PURE__ */ ((FilterVariantEnum2) => {
  FilterVariantEnum2["ALL"] = "all";
  FilterVariantEnum2["DIFFERENCES"] = "differences";
  FilterVariantEnum2["COINCIDENCES"] = "coincidences";
  return FilterVariantEnum2;
})(FilterVariantEnum || {});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "compare-table",
  __ssrInlineRender: true,
  props: {
    table: {},
    items: {},
    option: {},
    scrollPosition: {}
  },
  emits: ["scroll"],
  setup(__props) {
    const props = __props;
    const isShowDifference = computed(
      () => props.option === FilterVariantEnum.DIFFERENCES && props.table.some((featureGroup) => featureGroup.isExistOtherDifference)
    );
    const isShowCoincidence = computed(
      () => props.option === FilterVariantEnum.COINCIDENCES && props.table.some((featureGroup) => featureGroup.isExistOtherCoincidence)
    );
    const determineVisibilityState = (featuresGroup) => featuresGroup.value.length && isShowDifference.value ? featuresGroup.isDifference : isShowCoincidence.value ? featuresGroup.isCoincidence : true;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-table" }, _attrs))} data-v-991d774c><!--[-->`);
      ssrRenderList(_ctx.table, (featuresGroup, index2) => {
        _push(`<div style="${ssrRenderStyle(determineVisibilityState(featuresGroup) ? null : { display: "none" })}" data-v-991d774c><h3 class="compare-table_title" data-v-991d774c>${ssrInterpolate(featuresGroup.name)}</h3>`);
        _push(ssrRenderComponent(CompareTableCharacteristics, {
          "is-show-difference": unref(isShowDifference),
          "is-show-coincidence": unref(isShowCoincidence),
          "features-group": featuresGroup.value,
          "scroll-position": _ctx.scrollPosition,
          items: _ctx.items,
          onScroll: ($event) => _ctx.$emit("scroll", $event)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-table/compare-table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-991d774c"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ui-message",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "message" }, _attrs))} data-v-5ec36f98>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "message_icon",
        icon: "warningWithBorderIcon"
      }, null, _parent));
      _push(`<span data-v-5ec36f98>${ssrInterpolate(_ctx.message)}</span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiMessage/ui-message.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5ec36f98"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "compare-filter-variant",
  __ssrInlineRender: true,
  props: {
    value: {},
    selectedValue: {}
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["compare-filter-variant", {
          "compare-filter-variant__active": _ctx.value === props.selectedValue
        }]
      }, _attrs))} data-v-e65bf518>${ssrInterpolate(_ctx.$t(_ctx.value))}</button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-options/compare-filter-variant.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e65bf518"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "compare-category-actions",
  __ssrInlineRender: true,
  props: {
    selectedCategory: {}
  },
  emits: ["deleteCategory"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const isShowConfirmCategoryDeleteDialog = ref(false);
    const onClear = () => {
      emit("deleteCategory");
      isShowConfirmCategoryDeleteDialog.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      const _component_ModalLight = _sfc_main$d;
      const _component_Icon = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-category-actions" }, _attrs))} data-v-6bb8bd27>`);
      _push(ssrRenderComponent(_component_Button, {
        secondary: "",
        class: "compare-category-actions_delete",
        onClick: ($event) => isShowConfirmCategoryDeleteDialog.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("compare_clear_category"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("compare_clear_category")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isShowConfirmCategoryDeleteDialog),
        "onUpdate:modelValue": ($event) => isRef(isShowConfirmCategoryDeleteDialog) ? isShowConfirmCategoryDeleteDialog.value = $event : null,
        "max-width": 604
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="compare-category-actions_wrapper" data-v-6bb8bd27${_scopeId}><div class="compare-category-actions_icon-wrapper" data-v-6bb8bd27${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "close",
              class: "compare-category-actions_icon"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="compare-category-actions_title" data-v-6bb8bd27${_scopeId}>${ssrInterpolate(_ctx.$t("compare_clear_category"))}</h3><p class="compare-category-actions_description" data-v-6bb8bd27${_scopeId}>${ssrInterpolate(_ctx.$t("clear_category_dialog_text"))}</p><div class="compare-category-actions_buttons" data-v-6bb8bd27${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => isShowConfirmCategoryDeleteDialog.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              secondary: "",
              onClick: onClear
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("clear"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("clear")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "compare-category-actions_wrapper" }, [
                createVNode("div", { class: "compare-category-actions_icon-wrapper" }, [
                  createVNode(_component_Icon, {
                    icon: "close",
                    class: "compare-category-actions_icon"
                  })
                ]),
                createVNode("h3", { class: "compare-category-actions_title" }, toDisplayString(_ctx.$t("compare_clear_category")), 1),
                createVNode("p", { class: "compare-category-actions_description" }, toDisplayString(_ctx.$t("clear_category_dialog_text")), 1),
                createVNode("div", { class: "compare-category-actions_buttons" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => isShowConfirmCategoryDeleteDialog.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    secondary: "",
                    onClick: onClear
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("clear")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-options/compare-category-actions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CompareCategoryActions = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6bb8bd27"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "compare-options",
  __ssrInlineRender: true,
  props: {
    categories: {},
    selectedCategory: {},
    hideCategorySelect: { type: Boolean }
  },
  emits: ["setOption", "changeCategory", "deleteCategory"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { isHidden: isHeaderHidden } = useHeaderState();
    const filterVariants = Object.values(FilterVariantEnum);
    const selectedFilterVariant = ref(FilterVariantEnum.ALL);
    const onClickFilter = (filterName) => {
      selectedFilterVariant.value = filterName;
      emit("setOption", filterName);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSelect = __nuxt_component_1$2;
      const _component_CompareFilterVariant = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["compare-options", {
          "compare-options__sticky-top": unref(isHeaderHidden)
        }]
      }, _attrs))} data-v-11f3b488><div class="compare-options_wrapper" data-v-11f3b488><div class="compare-options_filters" data-v-11f3b488>`);
      if (!_ctx.hideCategorySelect) {
        _push(ssrRenderComponent(_component_UiSelect, {
          class: "compare-options_category-select",
          "model-value": _ctx.selectedCategory,
          options: _ctx.categories,
          small: "",
          "onUpdate:modelValue": ($event) => _ctx.$emit("changeCategory", $event)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="compare-options_variants" data-v-11f3b488><!--[-->`);
      ssrRenderList(unref(filterVariants), (item, index2) => {
        _push(ssrRenderComponent(_component_CompareFilterVariant, {
          key: `filter-${item}-${index2}`,
          value: item,
          "selected-value": unref(selectedFilterVariant),
          onClick: onClickFilter
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(CompareCategoryActions, {
        "selected-category": _ctx.selectedCategory,
        onDeleteCategory: ($event) => _ctx.$emit("deleteCategory")
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-options/compare-options.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CompareOptions = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-11f3b488"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "compare-not-found",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-not-found" }, _attrs))} data-v-ecf81baf><h2 class="compare-not-found_title" data-v-ecf81baf>${ssrInterpolate(_ctx.$t("not_found_compare_title"))}</h2>`);
      _push(ssrRenderComponent(_component_Button, {
        href: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("add_item"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("add_item")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-not-found/compare-not-found.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CompareNotFound = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ecf81baf"]]);
const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  const result = [...arr];
  let itemToAdd = payload;
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};
const initializeCompareTable = () => {
  return /* @__PURE__ */ new Map();
};
const initializeCompareOptions = () => {
  return /* @__PURE__ */ new Map();
};
const initializeFeatureGroupIdAndName = () => {
  return {};
};
const processFeature = (product, featureGroup, feature, compareTable, currentGroup) => {
  const compareTableItem = compareTable.get(featureGroup.externalCfId);
  if (compareTableItem) {
    if (!compareTableItem.has(feature.name)) {
      compareTableItem.set(feature.name, {});
    }
    const featureValue = compareTableItem.get(feature.name);
    if (featureValue) {
      featureValue[product.id] = feature.value;
    }
  }
  if (currentGroup && !(currentGroup == null ? void 0 : currentGroup.has(feature.name))) {
    currentGroup.set(feature.name, {
      isDifference: true,
      isCoincidence: true,
      difference: /* @__PURE__ */ new Set([feature.value]),
      coincidence: feature.value,
      coincidenceCount: 1
    });
    return;
  }
  const currentFeature = currentGroup == null ? void 0 : currentGroup.get(feature.name);
  if (currentFeature) {
    if (currentFeature.difference.has(feature.value)) {
      currentFeature.isDifference = false;
    } else {
      currentFeature.difference.add(feature.value);
    }
    if (currentFeature.coincidence === feature.value) {
      currentFeature.coincidenceCount++;
    } else {
      currentFeature.isCoincidence = false;
    }
  }
};
const processFeatureGroup = (product, featureGroup, compareTable, compareOptions, featureGroupIdAndName) => {
  if (!compareTable.has(featureGroup.externalCfId)) {
    compareTable.set(featureGroup.externalCfId, /* @__PURE__ */ new Map());
    compareOptions.set(featureGroup.externalCfId, /* @__PURE__ */ new Map());
  }
  const currentGroup = compareOptions.get(featureGroup.externalCfId);
  if (!featureGroupIdAndName[featureGroup.externalCfId]) {
    featureGroupIdAndName[featureGroup.externalCfId] = featureGroup.name;
  }
  featureGroup.features.forEach((feature) => {
    processFeature(product, featureGroup, feature, compareTable, currentGroup);
  });
};
function useCompareTableProducts(productList) {
  const generateInitializeValues = () => {
    const compareTable = initializeCompareTable();
    const compareOptions = initializeCompareOptions();
    const featureGroupIdAndName = initializeFeatureGroupIdAndName();
    productList.value.forEach((product) => {
      product.featureGroups.forEach((featureGroup) => {
        processFeatureGroup(
          product,
          featureGroup,
          compareTable,
          compareOptions,
          featureGroupIdAndName
        );
      });
    });
    return {
      compareTable,
      compareOptions,
      featureGroupIdAndName
    };
  };
  const generateCharacteristicTable = (compareTable, compareOptions, featureGroupIdAndName) => {
    const sortedCompareTable = [];
    let isExistDifferenceFeatures = false;
    let isExistCoincidenceFeatures = false;
    for (const [featureGroupCfId, features] of compareTable) {
      let atLeastOneFeatureIsDifference = false;
      let atLeastOneFeatureIsCoincidence = false;
      const currentGroup = compareOptions.get(featureGroupCfId);
      const sortedFeatures = Array.from(
        features,
        ([name, value]) => {
          const compareOptionItem = currentGroup == null ? void 0 : currentGroup.get(name);
          const isFeaturesDifference = currentGroup && compareOptionItem ? compareOptionItem.difference.size === productList.value.length && compareOptionItem.isDifference : false;
          const isFeaturesCoincidence = currentGroup && compareOptionItem ? compareOptionItem.coincidenceCount === productList.value.length && compareOptionItem.isCoincidence : false;
          if (!atLeastOneFeatureIsDifference) {
            atLeastOneFeatureIsDifference = isFeaturesDifference;
          }
          if (!atLeastOneFeatureIsCoincidence) {
            atLeastOneFeatureIsCoincidence = isFeaturesCoincidence;
          }
          return {
            name,
            value,
            isDifference: isFeaturesDifference,
            isCoincidence: isFeaturesCoincidence
          };
        }
      ).sort((a, b) => {
        var _a;
        return (_a = a.name) == null ? void 0 : _a.localeCompare(b == null ? void 0 : b.name);
      });
      if (!isExistDifferenceFeatures) {
        isExistDifferenceFeatures = atLeastOneFeatureIsDifference;
      }
      if (!isExistCoincidenceFeatures) {
        isExistCoincidenceFeatures = atLeastOneFeatureIsCoincidence;
      }
      sortedCompareTable.push({
        name: featureGroupIdAndName[featureGroupCfId],
        value: sortedFeatures,
        isDifference: atLeastOneFeatureIsDifference,
        isCoincidence: atLeastOneFeatureIsCoincidence,
        isExistOtherDifference: false,
        isExistOtherCoincidence: false
      });
    }
    sortedCompareTable.sort((a, b) => {
      a.isExistOtherDifference = isExistDifferenceFeatures;
      b.isExistOtherCoincidence = isExistCoincidenceFeatures;
      return a.name.localeCompare(b.name);
    });
    return sortedCompareTable;
  };
  const characteristicTable = computed(() => {
    const { compareTable, compareOptions, featureGroupIdAndName } = generateInitializeValues();
    return generateCharacteristicTable(
      compareTable,
      compareOptions,
      featureGroupIdAndName
    );
  });
  return { characteristicTable };
}
const useCompareMap = () => {
  const compareMap = reactive(/* @__PURE__ */ new Map());
  const isCompatibleSize = computed(() => compareMap.size > 0);
  const hasCategory = (category) => compareMap.has(category);
  const addProductToCategory = (category, product) => {
    var _a;
    if (!hasCategory(category)) {
      compareMap.set(category, []);
    }
    (_a = compareMap.get(category)) == null ? void 0 : _a.push(product);
  };
  const removeCategory = (category) => {
    compareMap.delete(category);
  };
  const getProductsByCategory = (category) => compareMap.get(category) || [];
  const getFirstCategory = () => compareMap.entries().next().value;
  const setProductsToCategory = (category, products) => {
    compareMap.set(category, products);
  };
  return {
    addProductToCategory,
    removeCategory,
    getProductsByCategory,
    getFirstCategory,
    setProductsToCategory,
    hasCategory,
    isCompatibleSize
  };
};
const injectProductType = (product, productId) => productId === product.id ? product.id : null;
const DEFAULT_CATEGORY = "shared";
const useManageCategory = (selectedCategory, categories, productsList) => {
  const route = useRoute();
  const {
    getFirstCategory,
    getProductsByCategory,
    hasCategory,
    removeCategory,
    setProductsToCategory: setProductsToMapCategory,
    isCompatibleSize,
    addProductToCategory: addProductToMapCategory
  } = useCompareMap();
  const setFirstCategory = () => {
    const [key, value] = getFirstCategory();
    selectedCategory.value = key;
    productsList.value = value;
  };
  const addProductToCategory = (productType, productItem, order) => {
    if (!hasCategory(productType)) {
      categories.value.push({
        label: productType || DEFAULT_CATEGORY,
        value: productType
      });
    }
    addProductToMapCategory(productType, { ...productItem, order });
  };
  const removeCurrentCategory = () => {
    removeCategory(selectedCategory.value);
    categories.value = categories.value.filter(
      (category) => category.value !== selectedCategory.value
    );
    if (isCompatibleSize.value) {
      setCategory();
    } else {
      productsList.value = [];
    }
  };
  const makeCategories = (products) => {
    var _a, _b;
    const productId = (_a = route == null ? void 0 : route.query) == null ? void 0 : _a.productId;
    let selectedValue = null;
    products.forEach((productItem, index2) => {
      addProductToCategory(productItem.productType, productItem, index2);
      selectedValue = injectProductType(
        productItem,
        productId
      );
    });
    return selectedValue != null ? selectedValue : (_b = categories.value[0]) == null ? void 0 : _b.value;
  };
  const setCategory = (category) => {
    if (category) {
      selectedCategory.value = category;
      productsList.value = getProductsByCategory(selectedCategory.value);
    } else {
      setFirstCategory();
    }
  };
  const setProductsToCategory = (products) => {
    if (products.length) {
      setProductsToMapCategory(selectedCategory.value, products);
      productsList.value = products;
    } else {
      removeCurrentCategory();
    }
  };
  const getCategoryProducts = (category) => getProductsByCategory(category);
  return {
    removeCurrentCategory,
    makeCategories,
    setCategory,
    getCategoryProducts,
    setProductsToCategory
  };
};
const useCompareProducts = () => {
  const fetchProducts = async (productsIds) => {
    var _a;
    try {
      const joinedProductIds = productsIds.join(",");
      const productsRes = await ProductApiService.getProducts({
        search: `id:${joinedProductIds}`,
        searchFields: "id:in",
        "includes[]": "features",
        limit: 100
      });
      return camelizeKeys(((_a = productsRes == null ? void 0 : productsRes.data) == null ? void 0 : _a.data) || []);
    } catch (error) {
      return [];
    }
  };
  const mapProductIds = (array) => array.map((product) => product.id);
  return {
    fetchProducts,
    mapProductIds
  };
};
const useTableIntersection = (tableRef) => {
  const isIntersectionWithTable = ref(false);
  const { stop } = useIntersectionObserver(
    tableRef,
    ([entry]) => {
      isIntersectionWithTable.value = entry.isIntersecting;
    },
    {
      threshold: 0.15
    }
  );
  return {
    isIntersectionWithTable
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "compare-list",
  __ssrInlineRender: true,
  props: {
    ids: {}
  },
  emits: ["removeProduct", "actualIds"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const isLoading = ref(true);
    const isShowCompareTable = computed(() => productsList.value.length > 1);
    const scrollPosition = ref(0);
    const categories = ref([]);
    const productsList = shallowRef([]);
    const selectedCategory = ref("");
    const currentOption = ref(FilterVariantEnum.ALL);
    const compareOptionsRef = useTemplateRef("compareOptionsRef");
    const compareTableRef = useTemplateRef("compareTableRef");
    const { fetchProducts, mapProductIds } = useCompareProducts();
    const { isIntersectionWithTable } = useTableIntersection(compareTableRef);
    const { isHidden: isHeaderHidden } = useHeaderState();
    const { characteristicTable } = useCompareTableProducts(productsList);
    const {
      removeCurrentCategory,
      makeCategories,
      setCategory,
      getCategoryProducts,
      setProductsToCategory
    } = useManageCategory(selectedCategory, categories, productsList);
    const onDrop = async (dropResult) => {
      productsList.value = applyDrag(productsList.value, dropResult);
    };
    const onDeleteCategory = async () => {
      const currentProductsIds = mapProductIds(
        getCategoryProducts(selectedCategory.value)
      );
      removeCurrentCategory();
      emit("removeProduct", currentProductsIds);
    };
    const onRemoveItem = async (productId) => {
      const filteredArray = getCategoryProducts(selectedCategory.value).filter(
        (product) => product.id !== productId
      );
      setProductsToCategory(filteredArray);
      emit("removeProduct", productId);
    };
    const onCategoryChange = async (newCategory) => {
      selectedCategory.value = newCategory;
      const products = getCategoryProducts(newCategory);
      if (products) {
        productsList.value = products;
      }
    };
    async function loadData() {
      if (props.ids.length) {
        const allProducts = await fetchProducts(props.ids);
        const currentCategory = makeCategories(allProducts);
        if (currentCategory) {
          setCategory(currentCategory);
          emit("actualIds", mapProductIds(allProducts));
        }
      }
      isLoading.value = false;
    }
    [__temp, __restore] = withAsyncContext(() => loadData()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPreloader = __nuxt_component_2$1;
      const _component_CompareListItems = __nuxt_component_1$1;
      const _component_CompareTable = __nuxt_component_2;
      const _component_UiMessage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-list" }, _attrs))} data-v-05c34547>`);
      if (unref(isLoading)) {
        _push(`<div class="compare-list_loader" data-v-05c34547>`);
        _push(ssrRenderComponent(_component_UiPreloader, null, null, _parent));
        _push(`</div>`);
      } else if (unref(productsList).length) {
        _push(`<div data-v-05c34547><div class="${ssrRenderClass([{
          "compare-list_sticky-container__sticky-top": unref(isHeaderHidden),
          "compare-list_sticky-container__static": !unref(isShowCompareTable)
        }, "compare-list_sticky-container"])}" data-v-05c34547>`);
        _push(ssrRenderComponent(CompareOptions, {
          ref_key: "compareOptionsRef",
          ref: compareOptionsRef,
          categories: unref(categories),
          "selected-category": unref(selectedCategory),
          onSetOption: ($event) => currentOption.value = $event,
          onChangeCategory: onCategoryChange,
          onDeleteCategory
        }, null, _parent));
        _push(ssrRenderComponent(_component_CompareListItems, {
          items: unref(productsList),
          "scroll-position": unref(scrollPosition),
          "is-intersection-with-table": unref(isIntersectionWithTable),
          onRemoveItem,
          onDrop,
          onScroll: ($event) => scrollPosition.value = $event
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_CompareTable, {
          style: unref(isShowCompareTable) ? null : { display: "none" },
          ref_key: "compareTableRef",
          ref: compareTableRef,
          table: unref(characteristicTable),
          option: unref(currentOption),
          "scroll-position": unref(scrollPosition),
          items: unref(productsList),
          onScroll: ($event) => scrollPosition.value = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_UiMessage, {
          style: !unref(isShowCompareTable) ? null : { display: "none" },
          message: _ctx.$t("not_enough_compare_products"),
          class: "compare-list_tooltip"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(CompareNotFound, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compare-list/compare-list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-05c34547"]]);
const compareState = useStorage("compare", []);
const useCompareStore = (id = null) => {
  const isActive = computed(
    () => id ? compareState.value.includes(id) : false
  );
  const addToCompare = (productId) => {
    compareState.value.push(productId);
  };
  const removeFromCompare = (productId) => {
    if (Array.isArray(productId)) {
      compareState.value = compareState.value.filter(
        (compareItem) => !productId.includes(compareItem)
      );
    } else {
      compareState.value = compareState.value.filter(
        (compareItem) => compareItem !== productId
      );
    }
  };
  const handleProductToCompare = (productId) => {
    if (compareState.value.includes(productId)) {
      removeFromCompare(productId);
    } else {
      addToCompare(productId);
    }
  };
  return {
    handleProductToCompare,
    isActive,
    compareState,
    removeFromCompare
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { removeFromCompare } = useCompareStore();
    usePagesStore();
    const productsIds = ref([]);
    const isSharedCompare = ref(false);
    const mapRouteIds = (value) => {
      var _a;
      return (_a = value == null ? void 0 : value.split(",").map((item) => +item)) != null ? _a : [];
    };
    const onRemoveProduct = (productIds) => {
      if (isSharedCompare.value) {
        const ids = route.query.ids;
        const arrayIds = mapRouteIds(ids);
        let filteredArray;
        if (Array.isArray(productIds)) {
          const copyProductsIds = productsIds.value.map((productId) => +productId);
          filteredArray = arrayIds == null ? void 0 : arrayIds.filter(
            (id) => !copyProductsIds.includes(+id)
          );
        } else {
          filteredArray = arrayIds == null ? void 0 : arrayIds.filter((id) => +id !== +productIds);
        }
        router.replace({
          query: {
            ids: filteredArray == null ? void 0 : filteredArray.join(",")
          }
        });
      } else {
        removeFromCompare(productIds);
      }
    };
    const setActualIds = (actualIds) => {
      const notActualId = productsIds.value.filter(
        (productId) => !actualIds.includes(productId)
      );
      onRemoveProduct(notActualId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompareList = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-page" }, _attrs))} data-v-93e076bd><h1 class="compare-page_title-wrapper" data-v-93e076bd><span class="compare-page_title" data-v-93e076bd>${ssrInterpolate(_ctx.$t("comparison_of_products"))}</span></h1>`);
      _push(ssrRenderComponent(_component_CompareList, {
        ids: unref(productsIds),
        onRemoveProduct,
        onActualIds: setActualIds
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/compare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93e076bd"]]);

export { index as default };
//# sourceMappingURL=index-B4ytzlWZ.mjs.map
