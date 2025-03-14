import { _ as __nuxt_component_1 } from './slider-xVa-F3Rs.mjs';
import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { l as useGtm, u as useRoute, v as bannerGroupsNames, w as _sfc_main$2 } from './server.mjs';
import { shallowRef, ref, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
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
import './index-r7vNs057.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const route = useRoute();
    const pageSlug = route.params.slug;
    const constructorPayload = shallowRef(null);
    const pageData = shallowRef(null);
    const showPageTitle = ref(true);
    const { fetchConstructorPayload } = useConstructorUtils();
    const { setMetaToStaticPage } = usePageMeta();
    const fetchError = ref(null);
    const banners = ref([]);
    const isLoadedBanners = ref(false);
    const { bannersGroup, bannersSpeed, fetchBannerGroup } = useFetchBannerGroup();
    try {
      const { data, error } = ([__temp, __restore] = withAsyncContext(() => PageApiService.getAggregatePageBySlug(pageSlug)), __temp = await __temp, __restore(), __temp);
      if (error) {
        fetchError.value = error;
      }
      pageData.value = data == null ? void 0 : data.data;
      showPageTitle.value = (pageSlug == null ? void 0 : pageSlug.indexOf("compare")) === -1;
      constructorPayload.value = ([__temp, __restore] = withAsyncContext(() => fetchConstructorPayload(
        pageData.value.blocks
      )), __temp = await __temp, __restore(), __temp);
      [__temp, __restore] = withAsyncContext(() => fetchBannerGroup(bannerGroupsNames.subcategoryBanner)), await __temp, __restore();
      const banner = bannersGroup.value.find((item) => item.name === pageSlug);
      if (banner) {
        banners.value = banner;
      }
      isLoadedBanners.value = true;
    } catch (e) {
      console.error(e);
    } finally {
      pushGtmEvent("pageview", {
        title: (_a = pageData.value) == null ? void 0 : _a.seo_title
      });
    }
    setMetaToStaticPage(pageData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slider = __nuxt_component_1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_UiPagePreloader = __nuxt_component_0;
      const _component_ErrorPage = _sfc_main$2;
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "conditions-page" }, _attrs))}>`);
        if (unref(banners).length) {
          _push(`<div class="conditions-page_slider">`);
          _push(ssrRenderComponent(_component_Slider, {
            slides: unref(banners),
            frequency: unref(bannersSpeed) || 5e3,
            "is-loaded": unref(isLoadedBanners)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pageData) && unref(constructorPayload)) {
          _push(ssrRenderComponent(_component_ConstructorBlocks, {
            "page-data": unref(pageData),
            payload: unref(constructorPayload)
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_ErrorPage, { error: unref(fetchError) }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BtsD_wmN.mjs.map
