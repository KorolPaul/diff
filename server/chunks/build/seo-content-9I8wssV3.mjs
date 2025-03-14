import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import './server.mjs';
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
  __name: "seo-content",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    const isOpened = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["seo-content", { opened: unref(isOpened) }]
      }, _attrs))}><button class="seo-content_head">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "seo-content_head-icon",
        icon: "text"
      }, null, _parent));
      _push(`<div class="seo-content_title">${(_a = unref(getSanitizeHtml)(_ctx.data.title)) != null ? _a : ""}</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "seo-content_head-arrow",
        icon: "arrowTop"
      }, null, _parent));
      _push(`</button><div class="seo-content_description">`);
      ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent);
      _push(`<div>${(_b = unref(getSanitizeHtml)(_ctx.data.description)) != null ? _b : ""}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/texts/seo-content/seo-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=seo-content-9I8wssV3.mjs.map
