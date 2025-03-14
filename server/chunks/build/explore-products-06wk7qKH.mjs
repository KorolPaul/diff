import { _ as _sfc_main$1 } from './entity-card-BKC73J01.mjs';
import { d as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import './UiImg-CNj4xvxi.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "explore-products",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _component_EntityCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "explore-products" }, _attrs))}>`);
      if ((_a = _ctx.data) == null ? void 0 : _a.title) {
        _push(`<p class="explore-products_title">${(_a2 = unref(getSanitizeHtml)((_b = _ctx.data) == null ? void 0 : _b.title)) != null ? _a2 : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="explore-products_products"><!--[-->`);
      ssrRenderList((_c = _ctx.data) == null ? void 0 : _c.items, (product) => {
        _push(`<div class="explore-products_product">`);
        _push(ssrRenderComponent(_component_EntityCard, {
          link: product.link,
          name: product.name,
          "image-link": product.image,
          "has-min-height": false
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: product.link,
          class: "explore-products_link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("see_all"))}</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                icon: "chevronRightIcon",
                class: "explore-products_icon"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("see_all")), 1),
                createVNode(_component_Icon, {
                  icon: "chevronRightIcon",
                  class: "explore-products_icon"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/explore-products/explore-products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=explore-products-06wk7qKH.mjs.map
