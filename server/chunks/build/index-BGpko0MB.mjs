import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { _ as __nuxt_component_1 } from './slider-xVa-F3Rs.mjs';
import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { u as useFilter, a as useFetchCategory, _ as _sfc_main$1 } from './useFetchCategories-BYKjNStR.mjs';
import { u as useRoute, a as useI18n, v as bannerGroupsNames, w as _sfc_main$2 } from './server.mjs';
import { ref, computed, shallowRef, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { u as useFetchBannerGroup } from './useFetchBannerGroup-Dtpp6J4F.mjs';
import { f as formatArrayToQueryParams } from './format-array-to-query-params-BGUBpLWy.mjs';
import './ui-preloader-C4Bi7ENY.mjs';
import './UiLink-CpRzX3bY.mjs';
import './icon-_hjsSUWU.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './BannerApiService-o77k-wf8.mjs';
import 'zod';
import './ui-rotate-arrow-B7iS75rF.mjs';
import './products-grid-BtcpmAB9.mjs';
import './TextInput-HaUa076w.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './UiSelect-BqVOhDGy.mjs';
import '@vueuse/core';
import './loading-CMY4YQWC.mjs';
import 'pinia';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './CategoryApiService-CndB0tEv.mjs';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './UiImg-CNj4xvxi.mjs';
import './product-badges-ahLlBnMK.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './credit-price-text-B9mrfME7.mjs';
import 'humps';
import './pagination-DmJuDOkq.mjs';
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
import './index-r7vNs057.mjs';

const CATEGORIES_WITH_DETAILED_VIEW = "bang-and-olufsen, bang-n-olufsen, loewe, aeno, logitech, devialet";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const slugName = route.params.slug;
    const isLoading = ref(false);
    const { t } = useI18n();
    const { setMetaToCatalogPage } = usePageMeta();
    const { getQueryParams } = useFilter();
    const currentPage = computed(() => {
      var _a2;
      return Number((_a2 = route == null ? void 0 : route.query) == null ? void 0 : _a2.page) || 1;
    });
    const banners = ref([]);
    const isCategoryTypeOne = computed(
      () => CATEGORIES_WITH_DETAILED_VIEW.indexOf(slugName) !== -1
    );
    const { fetchConstructorPayload } = useConstructorUtils();
    const constructorPayload = shallowRef(null);
    const pageData = shallowRef(null);
    const { bannersGroup, bannersSpeed, fetchBannerGroup } = useFetchBannerGroup();
    const { fetchBandsBySlug, brandBySlug, totalPages, fetchError } = useFetchCategory();
    const links = [
      {
        text: t("brands"),
        href: "/brands"
      }
    ];
    const fetchData = async ({ params }) => {
      isLoading.value = true;
      const newParams = params ? formatArrayToQueryParams(params) : {};
      await fetchBandsBySlug(slugName, {
        ...newParams
      });
      isLoading.value = false;
    };
    try {
      if (isCategoryTypeOne.value) {
        const data = ([__temp, __restore] = withAsyncContext(() => PageApiService.getAggregatePageBySlug(slugName)), __temp = await __temp, __restore(), __temp);
        pageData.value = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.data;
        constructorPayload.value = ([__temp, __restore] = withAsyncContext(() => fetchConstructorPayload(
          pageData.value.blocks
        )), __temp = await __temp, __restore(), __temp);
        setMetaToCatalogPage(brandBySlug);
        ;
        [__temp, __restore] = withAsyncContext(() => fetchBannerGroup(bannerGroupsNames.subcategoryBanner)), await __temp, __restore();
        const banner = bannersGroup.value.find((item) => item.name === slugName);
        if (banner) {
          banners.value.push(banner);
        }
      } else {
        const params = { ...getQueryParams(currentPage.value) };
        fetchData({ params });
      }
    } catch (e) {
      console.error(e);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_UiPagePreloader = __nuxt_component_0;
      const _component_Slider = __nuxt_component_1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_SubcategoryGrid = _sfc_main$1;
      const _component_ErrorPage = _sfc_main$2;
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (unref(isLoading)) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isCategoryTypeOne)) {
          _push(`<div><div class="conditions-page_slider">`);
          _push(ssrRenderComponent(_component_Slider, {
            slides: unref(banners),
            frequency: unref(bannersSpeed) || 5e3,
            "is-loaded": _ctx.isLoadedBanners
          }, null, _parent));
          _push(`</div>`);
          if (unref(pageData) && unref(constructorPayload)) {
            _push(ssrRenderComponent(_component_ConstructorBlocks, {
              "page-data": unref(pageData),
              payload: unref(constructorPayload)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div><h1 class="brands_title"><div class="brands_container">${ssrInterpolate(((_a2 = unref(brandBySlug)) == null ? void 0 : _a2.name) || "")}</div></h1><div class="brands_container">`);
          if (unref(brandBySlug)) {
            _push(ssrRenderComponent(_component_SubcategoryGrid, {
              products: unref(brandBySlug).products,
              subcategory: unref(brandBySlug),
              slug: unref(brandBySlug).slug,
              "total-pages": unref(totalPages),
              "current-page": unref(currentPage),
              links,
              loading: unref(isLoading),
              onGetSubcategoryData: ($event) => fetchData($event)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/brands/_slug/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BGpko0MB.mjs.map
