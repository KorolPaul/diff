import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "iframe-autoheight-content",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "iframe-autoheight-content" }, _attrs))} data-v-95851141><iframe${ssrRenderAttr("src", `${props.data.src}`)} scrolling="no" frameborder="0" class="iframe-autoheight-content_content" data-v-95851141></iframe></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/iframe-autoheight-content/iframe-autoheight-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iframeAutoheightContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95851141"]]);

export { iframeAutoheightContent as default };
//# sourceMappingURL=iframe-autoheight-content-Cva9f1kS.mjs.map
