import { _ as __nuxt_component_1 } from './slider-xVa-F3Rs.mjs';
import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { shallowRef, ref, withAsyncContext, resolveComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as useGtm, v as bannerGroupsNames } from './server.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const { fetchConstructorPayload } = useConstructorUtils();
    const { fetchError, setFetchError } = useFetchError();
    const pageData = shallowRef(null);
    const constructorPayload = shallowRef(null);
    const { setMetaToStaticPage } = usePageMeta();
    const { bannersGroup, bannersSpeed, fetchBannerGroup } = useFetchBannerGroup();
    const banners = ref(null);
    const isPageLoading = ref(true);
    try {
      const pageDataResult = ([__temp, __restore] = withAsyncContext(() => PageApiService.getAggregatePageBySlug(
        "brands"
      )), __temp = await __temp, __restore(), __temp);
      pageData.value = (_a = pageDataResult == null ? void 0 : pageDataResult.data) == null ? void 0 : _a.data;
      constructorPayload.value = ([__temp, __restore] = withAsyncContext(() => fetchConstructorPayload(
        pageData.value.blocks
      )), __temp = await __temp, __restore(), __temp);
      ;
      [__temp, __restore] = withAsyncContext(() => fetchBannerGroup(bannerGroupsNames.subcategoryBanner)), await __temp, __restore();
      const banner = bannersGroup.value.find((item) => item.name === "brands");
      if (banner) {
        banners.value = banner;
      }
      isPageLoading.value = false;
    } catch (e) {
      setFetchError(e.response.status);
    } finally {
      pushGtmEvent("pageview", {
        title: (_b = pageData.value) == null ? void 0 : _b.seo_title
      });
    }
    setMetaToStaticPage(pageData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slider = __nuxt_component_1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_UiPagePreloader = __nuxt_component_0;
      const _component_AppError = resolveComponent("AppError");
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (!unref(isPageLoading)) {
          _push(`<!--[--><div class="conditions-page_slider">`);
          _push(ssrRenderComponent(_component_Slider, {
            slides: unref(banners),
            frequency: unref(bannersSpeed) || 5e3,
            "is-loaded": _ctx.isLoadedBanners
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
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_AppError, {
          error: { statusCode: unref(fetchError) }
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/brands/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gS-3l3E0.mjs.map
