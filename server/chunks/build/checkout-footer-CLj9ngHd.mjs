import { computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "checkout-footer",
  __ssrInlineRender: true,
  setup(__props) {
    const pagesStore = usePagesStore();
    const aboutSiteInfo = computed(() => pagesStore.getAboutSiteInfo);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = unref(aboutSiteInfo)) == null ? void 0 : _a.copyright) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-footer" }, _attrs))} data-v-1112df43><div class="checkout-footer_container" data-v-1112df43><p class="checkout-footer_copyright" data-v-1112df43>${ssrInterpolate(unref(aboutSiteInfo).copyright)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/footer/components/checkout-footer/checkout-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1112df43"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=checkout-footer-CLj9ngHd.mjs.map
