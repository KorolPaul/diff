import { _ as __nuxt_component_0 } from './category-page-CetgXOOD.mjs';
import { resolveComponent, defineComponent, defineAsyncComponent, ref, watch, useSSRContext } from 'vue';
import { u as useLocalCitiesStore } from './local-cities-CykZaXGK.mjs';
import { _ as _export_sfc, u as useRoute, a as useI18n } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import './useFamilyStripeData-DI_qwE51.mjs';
import './carousel-BYXolnD1.mjs';
import './client-only-Bwxzq3Sq.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './credit-price-text-B9mrfME7.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './icon-_hjsSUWU.mjs';
import 'swiper/vue';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import 'zod';
import './CategoryApiService-CndB0tEv.mjs';
import 'humps';
import './constructor-blocks-CH3HZKzT.mjs';
import './BannerApiService-o77k-wf8.mjs';
import './product-C1qE55vu.mjs';
import './marketing-modal-aXAluzXe.mjs';
import './modal-light-Cz0YAIgT.mjs';
import './useDateFormatter-BM16RVpG.mjs';
import './product-badges-ahLlBnMK.mjs';
import './useFormatters-B4xJk29p.mjs';
import './seo-content-9I8wssV3.mjs';
import './pages-CxSmVAwD.mjs';
import 'pinia';
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
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@vueuse/core';

const _sfc_main$1 = defineComponent({
  components: {
    HomePage: defineAsyncComponent(() => import('./index-CqxrJC3o.mjs')),
    CategoryPage: defineAsyncComponent(() => import('./index-B251VOQq.mjs'))
  },
  setup() {
    const route = useRoute();
    const { locale, defaultLocale } = useI18n();
    const isHome = ref(true);
    const localCitiesStore = useLocalCitiesStore();
    const { slug: localCitySlug } = localCitiesStore.current;
    watch(
      route,
      () => {
        const langLocaleIndex = locale.value === defaultLocale ? 0 : 1;
        const possiblelocalVersionSlug = route.path.split("/")[1 + langLocaleIndex];
        const categorySlug = route.path.split("/")[2 + langLocaleIndex];
        if (route.path === "/" || route.path === "" || route.path === `/${locale.value}`) {
          isHome.value = true;
          return;
        }
        if (localCitySlug === possiblelocalVersionSlug) {
          if (categorySlug === void 0 || categorySlug === "") {
            isHome.value = true;
            return;
          }
          isHome.value = false;
          return;
        }
        isHome.value = false;
      },
      { immediate: true }
    );
    return {
      isHome
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomePage = resolveComponent("HomePage");
  const _component_CategoryPage = __nuxt_component_0;
  if (_ctx.isHome) {
    _push(ssrRenderComponent(_component_HomePage, _attrs, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_CategoryPage, _attrs, null, _parent));
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/local-city-version-provider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LocalCityVersionProvider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    LocalCityVersionProvider
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LocalCityVersionProvider = resolveComponent("LocalCityVersionProvider");
  _push(ssrRenderComponent(_component_LocalCityVersionProvider, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BouNpGOR.mjs.map
