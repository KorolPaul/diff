import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import { defineComponent, withCtx, createVNode, resolveDynamicComponent, createBlock, createCommentVNode, openBlock, Fragment, renderList, defineAsyncComponent, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
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

const dynamicComponentsNames = [
  "block",
  "social_links",
  "address_point",
  "working_hours",
  "pick_up_point",
  "email",
  "phone",
  "facebook",
  "instagram",
  "twitter",
  "linkedin"
];
const _sfc_main = defineComponent({
  name: "ContactsDetails",
  components: {
    block: defineAsyncComponent(
      () => import('./contacts-list-RrEVBU72.mjs')
    ),
    address_point: defineAsyncComponent(
      () => import('./contacts-data-item-BsLoJirc.mjs')
    ),
    working_hours: defineAsyncComponent(
      () => import('./contacts-data-item-BsLoJirc.mjs')
    ),
    pick_up_point: defineAsyncComponent(
      () => import('./contacts-map-yn-tynCX.mjs')
    ),
    email: defineAsyncComponent(
      () => import('./contacts-data-item-BsLoJirc.mjs')
    ),
    phone: defineAsyncComponent(
      () => import('./contacts-data-item-BsLoJirc.mjs')
    )
  },
  props: {
    data: {
      type: Object,
      require: true,
      default: null
    }
  },
  setup(props) {
    const blocksKeys = computed(
      () => {
        var _a;
        return Object.keys((_a = props.data) != null ? _a : {}).filter(
          (blockName) => dynamicComponentsNames.includes(blockName)
        );
      }
    );
    return {
      blocksKeys
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiContainer = __nuxt_component_0;
  _push(ssrRenderComponent(_component_UiContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.data) {
          _push2(`<div class="contacts-details text-body-2" data-v-06e929e5${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.blocksKeys, (blockKey, index) => {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(blockKey), {
              key: blockKey + index,
              name: blockKey,
              value: _ctx.data[blockKey]
            }, null), _parent2, _scopeId);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.data ? (openBlock(), createBlock("div", {
            key: 0,
            class: "contacts-details text-body-2"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.blocksKeys, (blockKey, index) => {
              return openBlock(), createBlock(resolveDynamicComponent(blockKey), {
                key: blockKey + index,
                name: blockKey,
                value: _ctx.data[blockKey]
              }, null, 8, ["name", "value"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/contacts-page/components/contacts-details/contacts-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-06e929e5"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=contacts-details-2Z2umr5g.mjs.map
