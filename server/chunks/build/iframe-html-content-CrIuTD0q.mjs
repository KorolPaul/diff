import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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

const _sfc_main = {
  __name: "iframe-html-content",
  __ssrInlineRender: true,
  props: {
    data: {
      content: {
        type: String,
        default: ""
      }
    }
  },
  setup(__props) {
    const props = __props;
    const iframe = ref(null);
    const iframeHeight = ref(0);
    const blockContent = ref(props.data.content);
    const { getSanitizeHtml } = useSanitize();
    const setAutoHeight = () => {
      var _a, _b, _c, _d;
      const iframeOffsetHeight = (_d = (_c = (_b = (_a = iframe == null ? void 0 : iframe.value) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.document) == null ? void 0 : _c.firstElementChild) == null ? void 0 : _d.offsetHeight;
      iframeHeight.value = iframeOffsetHeight ? `${iframeOffsetHeight + 10}px` : `0px`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (blockContent.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "iframe-html-content" }, _attrs))} data-v-e881e5d4><iframe${ssrRenderAttr("srcdoc", unref(getSanitizeHtml)(blockContent.value))} class="iframe-html-content_content" style="${ssrRenderStyle({ "overflow": "hidden" })}" width="100%"${ssrRenderAttr("height", iframeHeight.value)} frameborder="0"${ssrRenderAttr("onLoad", setAutoHeight)} data-v-e881e5d4></iframe></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/iframe-html-content/iframe-html-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iframeHtmlContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e881e5d4"]]);

export { iframeHtmlContent as default };
//# sourceMappingURL=iframe-html-content-CrIuTD0q.mjs.map
