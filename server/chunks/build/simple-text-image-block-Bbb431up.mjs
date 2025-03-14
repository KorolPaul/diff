import { _ as _sfc_main$1 } from './UiLink-CpRzX3bY.mjs';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, ref, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "SimpleTextImageBlock",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup({ data }) {
    const { getSanitizeHtml } = useSanitize();
    const image = ref(data.image || data.imageEntity.path);
    return {
      getSanitizeHtml,
      image
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a2, _b, _c;
  var _a;
  const _component_UiLink = _sfc_main$1;
  const _component_UiImg = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "simple-text-image-block" }, _attrs))}>`);
  if ((_a = _ctx.data) == null ? void 0 : _a.block_title) {
    _push(`<h3 class="simple-text-image-block_header">${(_a2 = _ctx.getSanitizeHtml(_ctx.data.block_title)) != null ? _a2 : ""}</h3>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.data) {
    _push(`<div class="${ssrRenderClass([_ctx.data.imagePosition, "simple-text-image-block_content"])}">`);
    if (_ctx.image && _ctx.data.hrefImage) {
      _push(ssrRenderComponent(_component_UiLink, {
        link: _ctx.data.hrefImage,
        class: "simple-text-image-block_image-wrapper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiImg, {
              src: _ctx.image,
              class: "simple-text-image-block_image"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiImg, {
                src: _ctx.image,
                class: "simple-text-image-block_image"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else if (_ctx.image) {
      _push(`<div class="simple-text-image-block_image-wrapper">`);
      _push(ssrRenderComponent(_component_UiImg, {
        src: _ctx.image,
        class: "simple-text-image-block_image"
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="simple-text-image-block_text-wrapper"><h3 class="simple-text-image-block_title">${(_b = _ctx.getSanitizeHtml(_ctx.data.title)) != null ? _b : ""}</h3><p class="simple-text-image-block_description">${(_c = _ctx.getSanitizeHtml(_ctx.data.text)) != null ? _c : ""}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/simple-text-image-block/simple-text-image-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=simple-text-image-block-Bbb431up.mjs.map
