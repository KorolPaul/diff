import { _ as __nuxt_component_0 } from './subcategory-page-CeQwVyy_.mjs';
import { _ as __nuxt_component_0$1 } from './ui-page-preloader-f4jo8KnM.mjs';
import { ref, computed, withAsyncContext, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as useGtm, u as useRoute } from './server.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { u as useFilter, a as useFetchCategory } from './useFetchCategories-BYKjNStR.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import { f as formatArrayToQueryParams } from './format-array-to-query-params-BGUBpLWy.mjs';
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
import './product-C1qE55vu.mjs';
import './marketing-modal-aXAluzXe.mjs';
import './modal-light-Cz0YAIgT.mjs';
import './useDateFormatter-BM16RVpG.mjs';
import './product-badges-ahLlBnMK.mjs';
import './useFormatters-B4xJk29p.mjs';
import './cart-slider-CP5cff-4.mjs';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './ui-slider-button-ex5lF246.mjs';
import 'swiper/modules';
import './seo-content-9I8wssV3.mjs';
import './pages-CxSmVAwD.mjs';
import 'pinia';
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
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@vueuse/core';
import './ui-rotate-arrow-B7iS75rF.mjs';
import './products-grid-BtcpmAB9.mjs';
import './TextInput-HaUa076w.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './loading-CMY4YQWC.mjs';
import './pagination-DmJuDOkq.mjs';
import './index-r7vNs057.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const route = useRoute();
    const slugName = route.params.slug;
    const { setMetaToCatalogPage } = usePageMeta();
    const seoContent = ref(null);
    const isInitialLoading = ref(true);
    const { fetchError } = useFetchError();
    const { isLoading, startLoading, stopLoading } = useFormLoader(true);
    const { getQueryParams } = useFilter();
    const { fetchCategoryBySlug, categoryBySlug, allCategories, totalPages } = useFetchCategory();
    const currentPage = computed(() => {
      var _a;
      return Number((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.page) || 1;
    });
    const getSeoContent = (contents) => {
      const pageSeoContent = contents == null ? void 0 : contents.find(
        (content) => content.type === "seo_content" && content.data !== null
      );
      if (pageSeoContent) {
        return pageSeoContent.data;
      }
      return void 0;
    };
    const categoryPageData = computed(() => ({
      category: categoryBySlug.value
    }));
    const parentCategory = computed(() => {
      var _a;
      return ((_a = allCategories.value) == null ? void 0 : _a.find(
        (item) => {
          var _a2;
          return item.id === ((_a2 = categoryBySlug.value) == null ? void 0 : _a2.parentId);
        }
      )) || 0;
    });
    const fetchData = async ({ params: params2 }) => {
      var _a, _b;
      startLoading();
      const newParams = params2 ? formatArrayToQueryParams(params2) : {};
      try {
        await fetchCategoryBySlug(slugName, newParams, true);
      } catch (e) {
        console.error(e);
      }
      const pageSeoContent = getSeoContent((_a = categoryBySlug.value) == null ? void 0 : _a.contents);
      if (pageSeoContent) {
        seoContent.value = pageSeoContent;
      }
      setMetaToCatalogPage(categoryBySlug);
      pushGtmEvent("pageview", {
        title: (_b = categoryBySlug.value) == null ? void 0 : _b.name
      });
      stopLoading();
    };
    const params = { ...getQueryParams(currentPage.value) };
    [__temp, __restore] = withAsyncContext(() => fetchData({ params })), await __temp, __restore();
    isInitialLoading.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubcategoryPage = __nuxt_component_0;
      const _component_UiPagePreloader = __nuxt_component_0$1;
      const _component_AppError = resolveComponent("AppError");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
      if (!unref(fetchError)) {
        _push(`<div>`);
        if (!unref(isInitialLoading)) {
          _push(ssrRenderComponent(_component_SubcategoryPage, {
            data: unref(categoryPageData),
            "seo-content": unref(seoContent),
            "parent-category": unref(parentCategory),
            "total-pages": unref(totalPages),
            "current-page": unref(currentPage),
            loading: unref(isLoading),
            "with-categories-filter": "",
            onGetSubcategoryData: ($event) => fetchData($event)
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_AppError, {
          error: { statusCode: unref(fetchError) }
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/promotions/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-n1y4qT-5.mjs.map
