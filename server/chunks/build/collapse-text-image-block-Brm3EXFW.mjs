import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, withCtx, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, ref, useSSRContext } from 'vue';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
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
  name: "CollapseTextImageBlock",
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    fullText: {
      type: String,
      default: ""
    }
  },
  setup({ data }) {
    const { getSanitizeHtml } = useSanitize();
    const image = ref(data.image || data.imageEntity.path);
    const isCollapseText = ref(true);
    const switchCollapseValue = () => {
      isCollapseText.value = !isCollapseText.value;
    };
    return {
      getSanitizeHtml,
      image,
      isCollapseText,
      switchCollapseValue
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiContainer = __nuxt_component_0;
  const _component_UiImg = _sfc_main$1;
  const _component_Icon = __nuxt_component_1;
  _push(ssrRenderComponent(_component_UiContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if (_ctx.data) {
          _push2(`<div class="${ssrRenderClass([_ctx.data.imagePosition, "collapse-text-image-block"])}" data-v-671beeb5${_scopeId}>`);
          if (_ctx.image) {
            _push2(`<div class="logo-wrapper" data-v-671beeb5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiImg, {
              src: _ctx.image,
              class: "image"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="text-wrapper" data-v-671beeb5${_scopeId}>`);
          if (_ctx.data.withH1) {
            _push2(`<div class="text-lg-subtitle-1 text-subtitle-2 mb-5 title" data-v-671beeb5${_scopeId}>${(_a = _ctx.getSanitizeHtml(_ctx.title)) != null ? _a : ""}</div>`);
          } else {
            _push2(`<div class="text-lg-subtitle-1 text-subtitle-2 mb-5 title" data-v-671beeb5${_scopeId}>${(_b = _ctx.getSanitizeHtml(_ctx.title)) != null ? _b : ""}</div>`);
          }
          if (_ctx.isCollapseText) {
            _push2(`<div class="description" data-v-671beeb5${_scopeId}>${(_c = _ctx.getSanitizeHtml(_ctx.text)) != null ? _c : ""}</div>`);
          } else {
            _push2(`<div class="description" data-v-671beeb5${_scopeId}>${(_d = _ctx.getSanitizeHtml(_ctx.fullText)) != null ? _d : ""}</div>`);
          }
          if (_ctx.fullText) {
            _push2(`<button data-v-671beeb5${_scopeId}><p class="d-flex justify-center align-center mb-0" data-v-671beeb5${_scopeId}><span class="collapse-btn-text" data-v-671beeb5${_scopeId}>${ssrInterpolate(!_ctx.isCollapseText ? _ctx.$t("collapse_btn") : _ctx.$t("expand_btn"))}</span><span class="collapse-icon-wrapper" data-v-671beeb5${_scopeId}><span class="${ssrRenderClass([{ collapsed: !_ctx.isCollapseText }, "collapse-icon"])}" data-v-671beeb5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "doubleDown",
              "container-size": ""
            }, null, _parent2, _scopeId));
            _push2(`</span></span></p></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.data ? (openBlock(), createBlock("div", {
            key: 0,
            class: ["collapse-text-image-block", _ctx.data.imagePosition]
          }, [
            _ctx.image ? (openBlock(), createBlock("div", {
              key: 0,
              class: "logo-wrapper"
            }, [
              createVNode(_component_UiImg, {
                src: _ctx.image,
                class: "image"
              }, null, 8, ["src"])
            ])) : createCommentVNode("", true),
            createVNode("div", { class: "text-wrapper" }, [
              _ctx.data.withH1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-lg-subtitle-1 text-subtitle-2 mb-5 title",
                innerHTML: _ctx.getSanitizeHtml(_ctx.title)
              }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-lg-subtitle-1 text-subtitle-2 mb-5 title",
                innerHTML: _ctx.getSanitizeHtml(_ctx.title)
              }, null, 8, ["innerHTML"])),
              _ctx.isCollapseText ? (openBlock(), createBlock("div", {
                key: 2,
                class: "description",
                innerHTML: _ctx.getSanitizeHtml(_ctx.text)
              }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("div", {
                key: 3,
                class: "description",
                innerHTML: _ctx.getSanitizeHtml(_ctx.fullText)
              }, null, 8, ["innerHTML"])),
              _ctx.fullText ? (openBlock(), createBlock("button", {
                key: 4,
                onClick: ($event) => _ctx.switchCollapseValue()
              }, [
                createVNode("p", { class: "d-flex justify-center align-center mb-0" }, [
                  createVNode("span", { class: "collapse-btn-text" }, toDisplayString(!_ctx.isCollapseText ? _ctx.$t("collapse_btn") : _ctx.$t("expand_btn")), 1),
                  createVNode("span", { class: "collapse-icon-wrapper" }, [
                    createVNode("span", {
                      class: ["collapse-icon", { collapsed: !_ctx.isCollapseText }]
                    }, [
                      createVNode(_component_Icon, {
                        icon: "doubleDown",
                        "container-size": ""
                      })
                    ], 2)
                  ])
                ])
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/collapse-text-image-block/collapse-text-image-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const collapseTextImageBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-671beeb5"]]);

export { collapseTextImageBlock as default };
//# sourceMappingURL=collapse-text-image-block-Brm3EXFW.mjs.map
