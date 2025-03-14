import { _ as _export_sfc, y as useConfigStore, E as defineNuxtLink, c as useLocalePath, V as hasProtocol } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createBlock, createCommentVNode, createVNode, openBlock, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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

const NuxtLinkLocale = defineNuxtLink({ componentName: "NuxtLinkLocale" });
const __nuxt_component_0 = defineComponent({
  name: "NuxtLinkLocale",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- FIXME
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath = useLocalePath();
    const resolvedPath = computed(() => {
      var _a;
      const destination = (_a = props.to) != null ? _a : props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
    });
    const isExternal = computed(() => {
      var _a;
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = (_a = props.to) != null ? _a : props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app-logo",
  __ssrInlineRender: true,
  props: {
    small: { type: Boolean }
  },
  setup(__props) {
    const configStore = useConfigStore();
    const src = computed(() => configStore.getLogoDesktop);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLinkLocale, mergeProps({
        class: "app-logo",
        to: "/"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.small) {
              _push2(`<img class="app-logo_image"${ssrRenderAttr("src", unref(src))} data-v-d15c3824${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<img class="${ssrRenderClass({ "app-logo_partner": _ctx.small })}"${ssrRenderAttr("src", `/img/${_ctx.small ? "apple-premium-partner-small" : "apple-premium-partner"}.svg`)} data-v-d15c3824${_scopeId}>`);
          } else {
            return [
              !_ctx.small ? (openBlock(), createBlock("img", {
                key: 0,
                class: "app-logo_image",
                src: unref(src)
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("img", {
                class: { "app-logo_partner": _ctx.small },
                src: `/img/${_ctx.small ? "apple-premium-partner-small" : "apple-premium-partner"}.svg`
              }, null, 10, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/logo/app-logo/app-logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d15c3824"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=app-logo-CTrjGh4b.mjs.map
