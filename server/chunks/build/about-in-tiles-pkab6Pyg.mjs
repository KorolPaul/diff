import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { unref, createVNode, resolveDynamicComponent, withCtx, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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

const _sfc_main = {
  __name: "about-in-tiles",
  __ssrInlineRender: true,
  props: {
    data: {
      type: {
        data: {
          type: Object,
          required: true
        },
        items: {
          type: Array,
          default: () => []
        },
        columns: {
          type: Number,
          default: 4
        }
      },
      required: true
    }
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_UiImg = _sfc_main$1;
      if ((_a = __props.data) == null ? void 0 : _a.items.length) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-2cb460b7><div class="about-in-tiles" data-v-2cb460b7>`);
        if (__props.data.title) {
          _push(`<h3 class="about-in-tiles" data-v-2cb460b7>${(_a2 = unref(getSanitizeHtml)(__props.data.title)) != null ? _a2 : ""}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="about-in-tiles_list" data-v-2cb460b7><!--[-->`);
        ssrRenderList(__props.data.items, (item, index) => {
          var _a3, _b;
          _push(`<div data-v-2cb460b7><div class="about-in-tiles_item" data-v-2cb460b7>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.hrefImage ? "UiLink" : "div"), {
            link: item.hrefImage,
            class: "about-in-tiles_image-wrapper"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b2;
              if (_push2) {
                if (item.image && !item.imageEntity) {
                  _push2(ssrRenderComponent(_component_UiImg, {
                    src: item.image,
                    alt: item.title,
                    class: "about-in-tiles_icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if ((_a22 = item == null ? void 0 : item.imageEntity) == null ? void 0 : _a22.path) {
                  _push2(ssrRenderComponent(_component_UiImg, {
                    src: item.imageEntity.path,
                    alt: item.title,
                    class: "about-in-tiles_icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  item.image && !item.imageEntity ? (openBlock(), createBlock(_component_UiImg, {
                    key: 0,
                    src: item.image,
                    alt: item.title,
                    class: "about-in-tiles_icon"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                  ((_b2 = item == null ? void 0 : item.imageEntity) == null ? void 0 : _b2.path) ? (openBlock(), createBlock(_component_UiImg, {
                    key: 1,
                    src: item.imageEntity.path,
                    alt: item.title,
                    class: "about-in-tiles_icon"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent);
          if (item.title) {
            _push(`<h2 class="about-in-tiles_title" data-v-2cb460b7>${(_a3 = unref(getSanitizeHtml)(item.title)) != null ? _a3 : ""}</h2>`);
          } else {
            _push(`<!---->`);
          }
          if (item.description) {
            _push(`<p class="about-in-tiles_description" data-v-2cb460b7>${(_b = unref(getSanitizeHtml)(item.description)) != null ? _b : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/about-in-tiles/about-in-tiles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutInTiles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cb460b7"]]);

export { aboutInTiles as default };
//# sourceMappingURL=about-in-tiles-pkab6Pyg.mjs.map
