import { _ as _sfc_main$2 } from './ui-rotate-arrow-B7iS75rF.mjs';
import { mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { _ as _export_sfc } from './server.mjs';
import './icon-_hjsSUWU.mjs';
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

const _sfc_main$1 = {
  __name: "faq-expansion-item",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { getSanitizeHtml } = useSanitize();
    const props = __props;
    const show = ref(props.isActive);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _component_UiRotateArrow = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-expansion-item" }, _attrs))} data-v-fb23b546><button class="faq-expansion-item_title-button" data-v-fb23b546><span class="${ssrRenderClass([{ "faq-expansion-item_title__active": unref(show) }, "faq-expansion-item_title"])}" data-v-fb23b546><span data-v-fb23b546>${ssrInterpolate(((_a = __props.item) == null ? void 0 : _a.name) || ((_b = __props.item) == null ? void 0 : _b.title))}</span><span class="faq-expansion-item_arrow" data-v-fb23b546>`);
      _push(ssrRenderComponent(_component_UiRotateArrow, { active: unref(show) }, null, _parent));
      _push(`</span></span></button>`);
      if (unref(show)) {
        _push(`<div class="faq-expansion-item_content" data-v-fb23b546>${(_a2 = unref(getSanitizeHtml)((_c = __props.item) == null ? void 0 : _c.text)) != null ? _a2 : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/expansions/faq-expansion/faq-expansion-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fb23b546"]]);
const _sfc_main = {
  __name: "faq-expansion",
  __ssrInlineRender: true,
  props: {
    data: {
      type: {
        link: {
          type: String,
          default: ""
        },
        name: {
          type: String,
          default: ""
        },
        linkText: {
          type: String,
          default: ""
        },
        items: {
          type: Array,
          default: () => []
        }
      },
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_FaqExpansionItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-expansion" }, _attrs))} data-v-8daa57b5>`);
      if ((_a = __props.data) == null ? void 0 : _a.name) {
        _push(`<p class="faq-expansion_title" data-v-8daa57b5>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList((_c = __props.data) == null ? void 0 : _c.items, (item, i) => {
        var _a2, _b2;
        _push(ssrRenderComponent(_component_FaqExpansionItem, {
          key: i,
          item,
          "is-active": i === 0,
          "is-last": i === ((_b2 = (_a2 = __props.data) == null ? void 0 : _a2.items) == null ? void 0 : _b2.length) - 1
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/expansions/faq-expansion/faq-expansion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqExpansion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8daa57b5"]]);

export { faqExpansion as default };
//# sourceMappingURL=faq-expansion-BrmmlwmX.mjs.map
