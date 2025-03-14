import { _ as _export_sfc, c as useLocalePath, d as __nuxt_component_0$2, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';

const _sfc_main = {
  __name: "compare-banner",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object
    }
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Button = __nuxt_component_6;
      const _component_UiImg = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(localePath)(__props.data.href),
        class: "compare-banner"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="compare-banner_container" data-v-1c283948${_scopeId}><div class="compare-banner_info" data-v-1c283948${_scopeId}><h2 class="compare-banner_title" data-v-1c283948${_scopeId}>${ssrInterpolate(__props.data.title)}</h2>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "compare-banner_button",
              secondary: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("compare_all_models"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("compare_all_models")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="compare-banner_image-wrapper" data-v-1c283948${_scopeId}>`);
            if (__props.data.imageEntity && __props.data.imageEntity.path) {
              _push2(ssrRenderComponent(_component_UiImg, {
                src: __props.data.imageEntity.path,
                alt: __props.data.title,
                loading: "lazy",
                class: "compare-banner_image"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "compare-banner_container" }, [
                createVNode("div", { class: "compare-banner_info" }, [
                  createVNode("h2", { class: "compare-banner_title" }, toDisplayString(__props.data.title), 1),
                  createVNode(_component_Button, {
                    class: "compare-banner_button",
                    secondary: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("compare_all_models")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "compare-banner_image-wrapper" }, [
                  __props.data.imageEntity && __props.data.imageEntity.path ? (openBlock(), createBlock(_component_UiImg, {
                    key: 0,
                    src: __props.data.imageEntity.path,
                    alt: __props.data.title,
                    loading: "lazy",
                    class: "compare-banner_image"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/compare-banner/compare-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compareBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c283948"]]);

export { compareBanner as default };
//# sourceMappingURL=compare-banner-BJW32vBq.mjs.map
