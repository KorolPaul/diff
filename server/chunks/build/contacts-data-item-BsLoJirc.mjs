import { defineComponent, resolveComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const typesConfig = {
  email: {
    icon: "email",
    color: "darkOrange--text"
  },
  phone: {
    icon: "phone2",
    color: "violet--text"
  },
  address_point: {
    icon: "pin",
    size: "28px",
    color: "primary--text"
  },
  working_hours: {
    icon: "clock",
    color: "yellow--text text-lighten-1"
  }
};
const _sfc_main = defineComponent({
  name: "ContactsDataItem",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    name: {
      type: [String, Number],
      required: true
    },
    block: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const typeSize = computed(() => {
      var _a;
      if ((_a = typesConfig[props.name]) == null ? void 0 : _a.size) {
        return {
          width: typesConfig[props.name].size,
          height: typesConfig[props.name].size
        };
      }
      return {};
    });
    const isLink = computed(
      () => props.name === "email" || props.name === "phone"
    );
    const linkValue = computed(() => {
      switch (props.name) {
        case "email":
          return `mailto:${props.value}`;
        case "phone":
          return `tel:${props.value}`;
        default:
          return "";
      }
    });
    return {
      isLink,
      linkValue,
      typeSize,
      typeConfig: typesConfig[props.name]
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiIcon = resolveComponent("UiIcon");
  if (_ctx.value && _ctx.typeConfig) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: ["contact-item d-flex align-center", { block: _ctx.block }]
    }, _attrs))} data-v-8e4d77b4><div class="${ssrRenderClass([_ctx.typeConfig.color, "contacts-icon d-flex align-center justify-center rounded-circle mr-4"])}" data-v-8e4d77b4><span class="icon-wrapper" style="${ssrRenderStyle(_ctx.typeSize)}" data-v-8e4d77b4>`);
    _push(ssrRenderComponent(_component_UiIcon, {
      icon: _ctx.typeConfig.icon,
      "container-size": !!_ctx.typeConfig.size
    }, null, _parent));
    _push(`</span></div>`);
    if (_ctx.isLink) {
      _push(`<a${ssrRenderAttr("href", _ctx.linkValue)} class="contact-link" data-v-8e4d77b4>${ssrInterpolate(_ctx.value)}</a>`);
    } else {
      _push(`<span data-v-8e4d77b4>${ssrInterpolate(_ctx.value)}</span>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/contacts-page/components/contacts-data-item/contacts-data-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8e4d77b4"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=contacts-data-item-BsLoJirc.mjs.map
