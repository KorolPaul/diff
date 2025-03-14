import { _ as __nuxt_component_1 } from './slider-xVa-F3Rs.mjs';
import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { shallowRef, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { r as useNuxtApp, u as useRoute, t as useTradeInStore } from './server.mjs';
import { u as useFetchBannerGroup } from './useFetchBannerGroup-Dtpp6J4F.mjs';
import './UiLink-CpRzX3bY.mjs';
import './icon-_hjsSUWU.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './BannerApiService-o77k-wf8.mjs';
import 'zod';
import './ui-preloader-C4Bi7ENY.mjs';
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
import 'humps';

const _sfc_main = {
  __name: "trade-in",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.$i18n;
    useRoute();
    useConstructorUtils();
    const { bannersSpeed } = useFetchBannerGroup();
    const {
      addCatalogDevice,
      catalogDevices,
      getCatalogDeviceFromLC,
      addCatalogDeviceToLC
    } = useTradeInStore();
    const pageData = shallowRef(null);
    const constructorPayload = shallowRef(null);
    const isLoadedBanners = ref(false);
    const banners = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slider = __nuxt_component_1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_UiPagePreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="conditions-page_slider">`);
      _push(ssrRenderComponent(_component_Slider, {
        slides: unref(banners),
        frequency: unref(bannersSpeed) || 5e3,
        "is-loaded": unref(isLoadedBanners)
      }, null, _parent));
      _push(`</div>`);
      if (unref(pageData) && unref(constructorPayload)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ConstructorBlocks, {
          "page-data": unref(pageData),
          payload: unref(constructorPayload)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/trade-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=trade-in-pY3iIJJT.mjs.map
