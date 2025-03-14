import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import { defineComponent, withCtx, createBlock, createCommentVNode, openBlock, withDirectives, createVNode, vShow, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  name: "MaintextBlock",
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
  _push(ssrRenderComponent(_component_UiContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        if (_ctx.data) {
          _push2(`<div class="mt-2 mt-lg-10 main-text-block" data-v-e48b8ef3${_scopeId}><div style="${ssrRenderStyle(_ctx.data.title ? null : { display: "none" })}" class="main-text-block_title" data-v-e48b8ef3${_scopeId}>${(_a = _ctx.getSanitizeHtml(_ctx.data.title)) != null ? _a : ""}</div><div style="${ssrRenderStyle(_ctx.data.description ? null : { display: "none" })}" class="main-text-block_text" data-v-e48b8ef3${_scopeId}>${(_b = _ctx.getSanitizeHtml(_ctx.data.description)) != null ? _b : ""}</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.data ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mt-2 mt-lg-10 main-text-block"
          }, [
            withDirectives(createVNode("div", {
              class: "main-text-block_title",
              innerHTML: _ctx.getSanitizeHtml(_ctx.data.title)
            }, null, 8, ["innerHTML"]), [
              [vShow, _ctx.data.title]
            ]),
            withDirectives(createVNode("div", {
              class: "main-text-block_text",
              innerHTML: _ctx.getSanitizeHtml(_ctx.data.description)
            }, null, 8, ["innerHTML"]), [
              [vShow, _ctx.data.description]
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/main-text-block/main-text-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mainTextBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e48b8ef3"]]);

export { mainTextBlock as default };
//# sourceMappingURL=main-text-block-D73cz3re.mjs.map
