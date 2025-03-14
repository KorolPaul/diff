import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import __nuxt_component_1 from './contacts-details-2Z2umr5g.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './ui-container-DmK1AhQu.mjs';
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

const _sfc_main$1 = defineComponent({
  name: "ContactsMapPointCard",
  components: {
    ContactsDetails: __nuxt_component_1
  },
  props: {
    map: {
      type: Object,
      required: true
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UiImg = _sfc_main$2;
  const _component_ContactsDetails = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pickup-point-card d-flex rounded-md pa-5 appBackground darken1" }, _attrs))} data-v-8f8c9ff8><div class="image rounded-md" data-v-8f8c9ff8>`);
  _push(ssrRenderComponent(_component_UiImg, {
    src: ((_a = _ctx.props) == null ? void 0 : _a.map.image) || "/img/contacts-pickup-point.jpg"
  }, null, _parent));
  _push(`</div><div class="content text-body-2" data-v-8f8c9ff8>`);
  if (_ctx.map && _ctx.map.name) {
    _push(`<div class="text-body-1 mb-4 content-name" data-v-8f8c9ff8>${ssrInterpolate(_ctx.map.name)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_ContactsDetails, { data: _ctx.map }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/contacts-page/components/contacts-map-point-card/contacts-map-point-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8f8c9ff8"]]);
const _sfc_main = defineComponent({
  name: "ContactsMap",
  components: {
    ContactsMapPointCard: __nuxt_component_0
  },
  props: {
    value: {
      type: Array,
      default: null
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactsMapPointCard = __nuxt_component_0;
  if (_ctx.value) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 contacts-points-wrapper" }, _attrs))} data-v-cc04b5a1><!--[-->`);
    ssrRenderList(_ctx.value, (map, index) => {
      _push(ssrRenderComponent(_component_ContactsMapPointCard, {
        key: index,
        map,
        class: "mb-3"
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/contacts-page/components/contacts-map/contacts-map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactsMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc04b5a1"]]);

export { contactsMap as default };
//# sourceMappingURL=contacts-map-yn-tynCX.mjs.map
