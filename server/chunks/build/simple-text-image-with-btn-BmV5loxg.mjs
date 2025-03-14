import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "simple-text-image-with-btn",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiImg = _sfc_main$1;
      if (__props.data) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "block-container" }, _attrs))} data-v-6eb5159b><!--[-->`);
        ssrRenderList(__props.data.items, (item) => {
          var _a, _b, _c;
          _push(`<div class="${ssrRenderClass([item.imagePosition, "simple-text-image-with-btn"])}" data-v-6eb5159b>`);
          if (item.imageEntity.path || item.image) {
            _push(`<div class="simple-text-image-with-btn_image-wrapper" data-v-6eb5159b>`);
            _push(ssrRenderComponent(_component_UiImg, {
              src: item.imageEntity.path || item.image,
              class: "simple-text-image-with-btn_image"
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="simple-text-image-with-btn_text-block" data-v-6eb5159b><h3 class="title" data-v-6eb5159b>${(_a = unref(getSanitizeHtml)(item.title)) != null ? _a : ""}</h3><p class="description" data-v-6eb5159b>${(_b = unref(getSanitizeHtml)(item.text)) != null ? _b : ""}</p>`);
          if (item.btnLink) {
            _push(`<a${ssrRenderAttr("href", item.btnLink)}${ssrRenderAttr("target", "_blank")} class="block-btn" data-v-6eb5159b>${(_c = unref(getSanitizeHtml)(item.btnText)) != null ? _c : ""}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/simple-text-image-with-btn/simple-text-image-with-btn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const simpleTextImageWithBtn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6eb5159b"]]);

export { simpleTextImageWithBtn as default };
//# sourceMappingURL=simple-text-image-with-btn-BmV5loxg.mjs.map
