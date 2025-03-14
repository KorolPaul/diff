import { d as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { defineComponent, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import 'sanitize-html';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "discover-block",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { currencyMark } = useCurrencyMark("", true);
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const formatPrice = (price) => `${formatPriceWithSpaces(price)} ${currencyMark.value}`;
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "discover-block" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data.items, (item, index) => {
        _push(`<div><h3 class="discover-block_header">${ssrInterpolate(item.header)}</h3><div class="discover-block_wrapper">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "discover-block_image-wrapper",
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.image) {
                _push2(ssrRenderComponent(_component_UiImg, {
                  class: "discover-block_image",
                  src: item.image,
                  alt: `product image ${index}`
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                item.image ? (openBlock(), createBlock(_component_UiImg, {
                  key: 0,
                  class: "discover-block_image",
                  src: item.image,
                  alt: `product image ${index}`
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "discover-block_content",
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(`<h4 class="discover-block_title"${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="discover-block_description"${_scopeId}>${(_a = unref(getSanitizeHtml)(item.description)) != null ? _a : ""}</p><p class="discover-block_price"${_scopeId}>${ssrInterpolate(formatPrice(item.price))}</p>`);
            } else {
              return [
                createVNode("h4", { class: "discover-block_title" }, toDisplayString(item.title), 1),
                createVNode("p", {
                  class: "discover-block_description",
                  innerHTML: unref(getSanitizeHtml)(item.description)
                }, null, 8, ["innerHTML"]),
                createVNode("p", { class: "discover-block_price" }, toDisplayString(formatPrice(item.price)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/discover-block/discover-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=discover-block-CK1YV0re.mjs.map
