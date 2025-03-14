import { _ as __nuxt_component_0 } from './base-banner--pU7GRI3.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './UiLink-CpRzX3bY.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './useBreakpoints-8FE3JIb9.mjs';
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
  name: "FullwidthBanner",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  setup() {
    const bgOptions = {
      width: 1384,
      height: 200,
      format: "webp"
    };
    return { bgOptions };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseBanner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fullwidth-banner-wrapper" }, _attrs))} data-v-5b3bd383><div class="fullwidth-banner" data-v-5b3bd383>`);
  if (_ctx.data.banner) {
    _push(ssrRenderComponent(_component_BaseBanner, {
      banner: _ctx.data.banner,
      "banner-options": {
        width: 420,
        height: 200,
        loading: "lazy"
      },
      "background-options": _ctx.bgOptions
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/fullwidth-banner/fullwidth-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fullwidthBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5b3bd383"]]);

export { fullwidthBanner as default };
//# sourceMappingURL=fullwidth-banner-MP3NfZA2.mjs.map
