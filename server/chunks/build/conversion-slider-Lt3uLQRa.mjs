import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';
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
  __name: "conversion-slider",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    ({
      navigation: {
        nextEl: `.promo-${props.data.promoId}-next`,
        prevEl: `.promo-${props.data.promoId}-prev`
      },
      pagination: ((_a = props.data) == null ? void 0 : _a.promoId) ? {
        el: `.promo-${props.data.promoId}`
      } : false,
      breakpoints: {
        [gridBreakpoints.xl]: {
          loop: ((_b = props.data.products) == null ? void 0 : _b.length) > 4
        },
        [gridBreakpoints.md]: {
          loop: ((_c = props.data.products) == null ? void 0 : _c.length) > 3
        },
        [gridBreakpoints.sm]: {
          loop: ((_d = props.data.products) == null ? void 0 : _d.length) > 2
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b2;
      const _component_ClientOnly = __nuxt_component_0;
      if (__props.data && __props.data.products.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "conversion-slider" }, _attrs))} data-v-fc9b8c67>`);
        if ((_a2 = __props.data) == null ? void 0 : _a2.title) {
          _push(`<h2 class="conversion-slider_title" data-v-fc9b8c67>${(_a3 = (_b2 = __props.data) == null ? void 0 : _b2.title) != null ? _a3 : ""}</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="conversion-slider_carousel" data-v-fc9b8c67>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div><div class="${ssrRenderClass([`promo-${__props.data.promoId}`, "conversion-slider_pagination"])}" data-v-fc9b8c67></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/conversion-slider/conversion-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const conversionSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc9b8c67"]]);

export { conversionSlider as default };
//# sourceMappingURL=conversion-slider-Lt3uLQRa.mjs.map
