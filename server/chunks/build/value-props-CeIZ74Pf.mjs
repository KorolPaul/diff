import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as _export_sfc, c as useLocalePath, d as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "value-props",
  __ssrInlineRender: true,
  props: {
    data: {
      items: {
        type: Array,
        default: () => []
      }
    }
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "value-props" }, _attrs))} data-v-04016e38><!--[-->`);
      ssrRenderList((_a = __props.data) == null ? void 0 : _a.items, (item) => {
        _push(`<div class="value-props_item" data-v-04016e38><div data-v-04016e38>`);
        if (item.imageLink) {
          _push(ssrRenderComponent(_component_UiImg, {
            src: item.imageLink,
            loading: "lazy",
            class: "value-props_item-image"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.title) {
          _push(`<p class="value-props_item-title" data-v-04016e38>${ssrInterpolate(item.title)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.text) {
          _push(`<p class="value-props_item-text" data-v-04016e38>${ssrInterpolate(item.text)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (item.link) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.link),
            class: "value-props_item-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.linkText)} `);
                _push2(ssrRenderComponent(_component_Icon, { icon: "arrowRight" }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(toDisplayString(item.linkText) + " ", 1),
                  createVNode(_component_Icon, { icon: "arrowRight" })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/blocks/value-props/value-props.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const valueProps = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04016e38"]]);

export { valueProps as default };
//# sourceMappingURL=value-props-CeIZ74Pf.mjs.map
