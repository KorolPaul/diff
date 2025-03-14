import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { r as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "personal-data-text",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const html = i18n.t("controller_of_personal_data");
    const { getSanitizeHtml } = useSanitize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (unref(html)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "personal-data" }, _attrs))}><p><span>${(_a = unref(getSanitizeHtml)(unref(html))) != null ? _a : ""}</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/texts/personal-data-text/personal-data-text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=personal-data-text-kJ244n-x.mjs.map
