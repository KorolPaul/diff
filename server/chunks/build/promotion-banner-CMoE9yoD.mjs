import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "promotion-banner",
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
      var _a, _b, _c;
      const _component_UiImg = _sfc_main$1;
      if (__props.data) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "promotion-banner" }, _attrs))} data-v-2a70251e><div class="promotion-banner_container" data-v-2a70251e><div class="promotion-banner_text" data-v-2a70251e><div data-v-2a70251e><h2 class="promotion-banner_title" data-v-2a70251e>${(_a = unref(getSanitizeHtml)(__props.data.title)) != null ? _a : ""}</h2><h3 class="promotion-banner_subtitle" data-v-2a70251e>${(_b = unref(getSanitizeHtml)(__props.data.subtitle)) != null ? _b : ""}</h3></div>`);
        if (__props.data.buttonLink) {
          _push(`<a${ssrRenderAttr("href", __props.data.buttonLink)}${ssrRenderAttr("target", "_blank")} class="promotion-banner_button" data-v-2a70251e>${(_c = unref(getSanitizeHtml)(__props.data.buttonText)) != null ? _c : ""}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.data.imageEntity.path || __props.data.image) {
          _push(`<div class="promotion-banner_image-wrapper" data-v-2a70251e>`);
          _push(ssrRenderComponent(_component_UiImg, {
            src: __props.data.imageEntity.path || __props.data.image,
            class: "promotion-banner_image"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/promotion-banner/promotion-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const promotionBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a70251e"]]);

export { promotionBanner as default };
//# sourceMappingURL=promotion-banner-CMoE9yoD.mjs.map
