import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  name: "HtmlContentBlock",
  props: {
    content: {
      type: String,
      default: ""
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
  var _a;
  if (_ctx.content) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "html-content-block" }, _attrs))} data-v-eb75ef75><div data-v-eb75ef75>${(_a = _ctx.getSanitizeHtml(_ctx.content)) != null ? _a : ""}</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/html-content-block/html-content-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const htmlContentBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb75ef75"]]);

export { htmlContentBlock as default };
//# sourceMappingURL=html-content-block-DMskX_GB.mjs.map
