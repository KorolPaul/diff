import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { defineComponent, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import 'sanitize-html';
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

const _sfc_main = defineComponent({
  name: "TilesNavigation",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { getSanitizeHtml } = useSanitize();
    return {
      getSanitizeHtml
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiContainer = __nuxt_component_0;
  const _component_UiImg = _sfc_main$1;
  _push(ssrRenderComponent(_component_UiContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.data) {
          _push2(`<div class="tiles-navigation-wrapper d-flex justify-center align-center flex-wrap" data-v-20bb7092${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.data.items, (item) => {
            var _a, _b;
            _push2(`<div class="tile-wrapper" data-v-20bb7092${_scopeId}><a${ssrRenderAttr("href", item.hrefImage)} target="_blank" class="grey-block" data-v-20bb7092${_scopeId}>`);
            if (item.image) {
              _push2(ssrRenderComponent(_component_UiImg, {
                src: `${item.image}`,
                class: "grey-block-image"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item.description) {
              _push2(`<div class="mark fontColor--text description" data-v-20bb7092${_scopeId}>${(_a = _ctx.getSanitizeHtml(item.description)) != null ? _a : ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a><div class="text-center title" data-v-20bb7092${_scopeId}>${(_b = _ctx.getSanitizeHtml(item.title)) != null ? _b : ""}</div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.data ? (openBlock(), createBlock("div", {
            key: 0,
            class: "tiles-navigation-wrapper d-flex justify-center align-center flex-wrap"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.items, (item) => {
              return openBlock(), createBlock("div", {
                key: item.title,
                class: "tile-wrapper"
              }, [
                createVNode("a", {
                  href: item.hrefImage,
                  target: "_blank",
                  class: "grey-block"
                }, [
                  item.image ? (openBlock(), createBlock(_component_UiImg, {
                    key: 0,
                    src: `${item.image}`,
                    class: "grey-block-image"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  item.description ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mark fontColor--text description",
                    innerHTML: _ctx.getSanitizeHtml(item.description)
                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                ], 8, ["href"]),
                createVNode("div", {
                  class: "text-center title",
                  innerHTML: _ctx.getSanitizeHtml(item.title)
                }, null, 8, ["innerHTML"])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/tiles-navigation/tiles-navigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tilesNavigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-20bb7092"]]);

export { tilesNavigation as default };
//# sourceMappingURL=tiles-navigation-DpEYUQU8.mjs.map
