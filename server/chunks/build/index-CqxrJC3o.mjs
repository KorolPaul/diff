import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { _ as __nuxt_component_1 } from './slider-xVa-F3Rs.mjs';
import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { defineComponent, shallowRef, ref, computed, provide, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, l as useGtm, v as bannerGroupsNames } from './server.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import './ui-preloader-C4Bi7ENY.mjs';
import './UiLink-CpRzX3bY.mjs';
import './icon-_hjsSUWU.mjs';
import 'swiper/vue';
import 'swiper/modules';
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
import './index-r7vNs057.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    useSeo: { type: Boolean, default: true }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { locale } = useI18n();
    const { pushGtmEvent } = useGtm();
    const { isLoading, startLoading, stopLoading } = useFormLoader(true);
    const { fetchConstructorPayload } = useConstructorUtils();
    const { setMetaToStaticPage } = usePageMeta();
    const pageData = shallowRef(null);
    const constructorPayload = shallowRef({});
    const previewBannersGroup = shallowRef([]);
    const previewSliderSpeed = ref(5e3);
    const isLoadedBanners = ref(false);
    const setPreviewBanner = (group) => {
      if (!group) {
        return;
      }
      previewBannersGroup.value = group.banners;
      previewSliderSpeed.value = group.frequencySlider || 5e3;
    };
    const isShowPreviewBanner = computed(() => {
      if (isLoadedBanners.value) {
        return !!previewBannersGroup.value;
      }
      return true;
    });
    const fetchPageData = async () => {
      var _a, _b, _c;
      try {
        const pageDataRes = await PageApiService.getAggregatePageBySlug(
          "main",
          {
            type: "main page"
          }
        );
        pageData.value = (_a = pageDataRes == null ? void 0 : pageDataRes.data) == null ? void 0 : _a.data;
        if ((_b = pageData.value) == null ? void 0 : _b.blocks) {
          constructorPayload.value = await fetchConstructorPayload(
            pageData.value.blocks
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        pushGtmEvent("pageview", {
          title: (_c = pageData.value) == null ? void 0 : _c.seo_title
        });
      }
    };
    const categories = computed(() => {
      var _a;
      return (_a = pageData.value) == null ? void 0 : _a.categories;
    });
    provide("categories", categories);
    const products = computed(() => {
      var _a;
      return (_a = pageData.value) == null ? void 0 : _a.products;
    });
    provide("products", products);
    const fetchSliderBanners = async () => {
      try {
        const bannersRes = await BannerApiService.getGroupBy(
          bannerGroupsNames.homePreviewSlider,
          locale.value
        );
        if (bannersRes) {
          setPreviewBanner(bannersRes);
        }
        isLoadedBanners.value = true;
        return bannersRes;
      } catch (error) {
        return [];
      }
    };
    startLoading();
    const pageDataPromise = fetchPageData();
    const sliderBannersPromise = fetchSliderBanners();
    [__temp, __restore] = withAsyncContext(() => pageDataPromise), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => sliderBannersPromise), await __temp, __restore();
    stopLoading();
    if (props.useSeo) {
      setMetaToStaticPage(pageData);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPagePreloader = __nuxt_component_0;
      const _component_Slider = __nuxt_component_1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UiPagePreloader, _attrs, null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-wrapper" }, _attrs))} data-v-0ed5c425>`);
        if (unref(isShowPreviewBanner) && !unref(isLoading)) {
          _push(`<div class="main-slider" data-v-0ed5c425>`);
          _push(ssrRenderComponent(_component_Slider, {
            slides: unref(previewBannersGroup),
            pagination: true,
            frequency: unref(previewSliderSpeed),
            "is-loaded": unref(isLoadedBanners)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pageData)) {
          _push(ssrRenderComponent(_component_ConstructorBlocks, {
            "page-data": unref(pageData),
            payload: unref(constructorPayload)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ed5c425"]]);

export { index as default };
//# sourceMappingURL=index-CqxrJC3o.mjs.map
