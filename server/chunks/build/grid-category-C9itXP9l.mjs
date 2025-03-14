import { computed, unref, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { _ as _sfc_main$3 } from './credit-price-text-B9mrfME7.mjs';
import { _ as _export_sfc, E as defineNuxtLink } from './server.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { u as useFormatters } from './useFormatters-B4xJk29p.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
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

const _sfc_main$1 = {
  __name: "grid-category-item",
  __ssrInlineRender: true,
  props: {
    category: {
      type: Object,
      required: true
    },
    height: {
      type: [String, Number],
      default: null
    },
    isFirstItem: {
      type: Boolean,
      default: false
    },
    fullSizeImage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      var _a, _b, _c, _d;
      const _component_UiImg = _sfc_main$2;
      const _component_Icon = __nuxt_component_1;
      const _component_CreditPriceText = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        link: __props.category.hrefImage ? __props.category.hrefImage : "",
        style: {
          height: __props.height ? __props.height + "px" : ""
        },
        class: "grid-category-item"
      }, _attrs))} data-v-aaabc313><div class="${ssrRenderClass([{ "grid-category-item_image-wrapper__first": __props.isFirstItem }, "grid-category-item_image-wrapper"])}" data-v-aaabc313>`);
      if (__props.category.image || __props.category.imageEntity && __props.category.imageEntity.path) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: __props.category.image || __props.category.imageEntity.path,
          class: "grid-category-item_image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid-category-item_info" data-v-aaabc313><div class="grid-category-item_badges" data-v-aaabc313>`);
      if (__props.category.is_new) {
        _push(`<span class="grid-category-item_badge" data-v-aaabc313>${ssrInterpolate(_ctx.$t("new"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.category.custom_badges) {
        _push(`<span class="grid-category-item_badge" data-v-aaabc313>${(_a2 = unref(getSanitizeHtml)(__props.category.custom_badges)) != null ? _a2 : ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="grid-category-item_title" data-v-aaabc313>${(_b2 = unref(getSanitizeHtml)(__props.category.title)) != null ? _b2 : ""}</h3>`);
      if (__props.category.description && __props.category.description !== "<p></p>") {
        _push(`<div class="grid-category-item_link" data-v-aaabc313>`);
        if (((_a = _ctx.cateory) == null ? void 0 : _a.entity_type) && ((_b = _ctx.cateory) == null ? void 0 : _b.entity_type) === "custom") {
          _push(`<div class="grid-category-item_description" data-v-aaabc313>${(_c2 = unref(getSanitizeHtml)(__props.category.description)) != null ? _c2 : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Icon, { icon: "arrowRight" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="grid-category-item_slogan" data-v-aaabc313>${ssrInterpolate((_c = __props.category) == null ? void 0 : _c.slogan)}</p><p class="grid-category-item_price" data-v-aaabc313>`);
      _push(ssrRenderComponent(_component_CreditPriceText, {
        price: ((_d = __props.category) == null ? void 0 : _d.price) || 0
      }, null, _parent));
      _push(`</p>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("defineNuxtLink" in _ctx ? _ctx.defineNuxtLink : unref(defineNuxtLink))("NuxtLink")), {
        to: _ctx.localePath(`${__props.category.hrefImage}`),
        class: "grid-category-item_button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("buy_now"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("buy_now")), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/grid-category/grid-category-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridCategoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aaabc313"]]);
const _sfc_main = {
  __name: "grid-category",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { trancateProductName } = useFormatters();
    const gridItems = computed(() => {
      const data = props.data.items.map((item) => {
        var _a, _b;
        if (item.entity_type === "category") {
          const findCat = props.data.category.find(
            (category) => category.id === +item.entity_id
          );
          item.image = ((_a = findCat == null ? void 0 : findCat.images) == null ? void 0 : _a.length) ? findCat.images[0].url : "";
          item.hrefImage = `/category/${findCat == null ? void 0 : findCat.slug}`;
          item.slogan = findCat == null ? void 0 : findCat.slogan;
          item.price = findCat == null ? void 0 : findCat.price;
          item.title = findCat == null ? void 0 : findCat.name;
          item.is_new = findCat == null ? void 0 : findCat.is_new;
          item.custom_badges = findCat == null ? void 0 : findCat.custom_badges;
          return item;
        }
        if (item.entity_type === "product") {
          const findProd = props.data.products.find(
            (product) => product.id === item.entity_id
          );
          item.image = (findProd == null ? void 0 : findProd.variations[0].images.length) ? findProd.variations[0].images[0] : "";
          item.hrefImage = `/product/${findProd == null ? void 0 : findProd.slug}`;
          item.slogan = findProd == null ? void 0 : findProd.slogan;
          item.custom_badges = findProd == null ? void 0 : findProd.custom_badges;
          item.price = findProd == null ? void 0 : findProd.price;
          item.title = trancateProductName(findProd == null ? void 0 : findProd.name);
          item.is_new = (_b = findProd == null ? void 0 : findProd.marks) == null ? void 0 : _b.new;
          item.custom_badge = findProd == null ? void 0 : findProd.custom_badge;
          return item;
        }
        return item;
      });
      return data.slice(0, 2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(gridItems).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-wrapper" }, _attrs))} data-v-cb93fc13>`);
        if (__props.data.isSlider === false) {
          _push(`<div class="${ssrRenderClass([`columns-${__props.data.columns}`, "grid-container"])}" data-v-cb93fc13><!--[-->`);
          ssrRenderList(__props.data.items, (category, index) => {
            _push(ssrRenderComponent(GridCategoryItem, {
              key: index,
              "is-first-item": index === 0,
              category
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/grid-category/grid-category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gridCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb93fc13"]]);

export { gridCategory as default };
//# sourceMappingURL=grid-category-C9itXP9l.mjs.map
