import { mergeProps, resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { _ as _export_sfc } from './server.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
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
  __name: "stage-grid",
  __ssrInlineRender: true,
  props: {
    data: {
      type: {
        stage: {
          type: Array,
          default: []
        },
        image: {
          type: Array,
          default: []
        },
        btnRequest: {
          type: Boolean,
          default: false
        },
        btnName: {
          type: String,
          default: ""
        },
        btnLink: {
          type: String,
          default: ""
        }
      },
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiImg = _sfc_main$2;
      const _component_ui_btn = resolveComponent("ui-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stage-grid" }, _attrs))} data-v-196acd1c>`);
      if (__props.data.image.at(0).src) {
        _push(`<div class="stage-grid_image-wrapper" data-v-196acd1c>`);
        _push(ssrRenderComponent(_component_UiImg, {
          src: __props.data.image.at(0).src,
          alt: __props.data.image.at(0).alt,
          class: "stage-grid_image"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="stage-grid_content-wrapper" data-v-196acd1c><ul class="stage-grid_list" data-v-196acd1c><!--[-->`);
      ssrRenderList(__props.data.stage, (item, index) => {
        _push(`<li class="stage-grid_item" data-v-196acd1c><div class="stage-grid_content" data-v-196acd1c><p class="stage-grid_description" data-v-196acd1c><span data-v-196acd1c>${ssrInterpolate(index + 1)}.</span><span data-v-196acd1c>${ssrInterpolate(item.description)}</span></p>`);
        if (item.subdescription) {
          _push(`<p class="stage-grid_additional-description" data-v-196acd1c>${ssrInterpolate(item.subdescription)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.data.btnRequest) {
        _push(ssrRenderComponent(_component_ui_btn, {
          url: __props.data.btnLink,
          size: "l",
          class: "stage-grid_button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.data.btnName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.data.btnName), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/stage/components/stage-grid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const StageGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-196acd1c"]]);
const _sfc_main = {
  __name: "stage",
  __ssrInlineRender: true,
  props: {
    data: {
      type: {
        viewType: {
          type: String,
          default: "gridStage"
        },
        title: {
          type: String,
          default: ""
        },
        description: {
          type: String,
          default: ""
        },
        image: {
          type: Array,
          default: []
        },
        stage: {
          type: Array,
          default: []
        },
        btnRequest: {
          type: Boolean,
          default: false
        },
        btnName: {
          type: String,
          default: ""
        },
        btnLink: {
          type: String,
          default: ""
        }
      },
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stage" }, _attrs))} data-v-961a4285><div class="stage_title-container" data-v-961a4285><div class="stage_shell" data-v-961a4285>`);
      if (__props.data.title) {
        _push(`<h1 class="stage_title" data-v-961a4285>${ssrInterpolate(__props.data.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.data.description) {
        _push(`<p class="stage_description" data-v-961a4285>${ssrInterpolate(__props.data.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(StageGrid, { data: __props.data }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/stage/stage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-961a4285"]]);

export { stage as default };
//# sourceMappingURL=stage-BlwcKXQO.mjs.map
