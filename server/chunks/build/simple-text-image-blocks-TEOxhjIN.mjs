import __nuxt_component_0 from './simple-text-image-block-Bbb431up.mjs';
import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './UiLink-CpRzX3bY.mjs';
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
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';

const _sfc_main = {
  __name: "simple-text-image-blocks",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const items = computed(() => {
      var _a, _b;
      return (_b = (_a = props.data) == null ? void 0 : _a.items) == null ? void 0 : _b.slice(0, 2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_SimpleTextImageBlock = __nuxt_component_0;
      if ((_a = unref(items)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList((_b = __props.data) == null ? void 0 : _b.items, (item) => {
          _push(ssrRenderComponent(_component_SimpleTextImageBlock, {
            key: item == null ? void 0 : item.title,
            data: item
          }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/simple-text-image-blocks/simple-text-image-blocks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=simple-text-image-blocks-TEOxhjIN.mjs.map
