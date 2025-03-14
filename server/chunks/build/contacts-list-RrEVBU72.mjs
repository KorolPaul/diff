import __nuxt_component_0 from './contacts-data-item-BsLoJirc.mjs';
import { defineComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = defineComponent({
  name: "ContactsList",
  components: {
    ContactsDataItem: __nuxt_component_0
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const contactsKeys = computed(() => Object.keys(props.value));
    return {
      contactsKeys
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactsDataItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts-block" }, _attrs))} data-v-64b7af1b><!--[-->`);
  ssrRenderList(_ctx.contactsKeys, (contactKey, index) => {
    _push(ssrRenderComponent(_component_ContactsDataItem, {
      key: index,
      name: contactKey,
      value: _ctx.value[contactKey],
      block: false
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/contacts-page/components/contacts-list/contacts-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64b7af1b"]]);

export { contactsList as default };
//# sourceMappingURL=contacts-list-RrEVBU72.mjs.map
