import { _ as __nuxt_component_0 } from './category-page-CetgXOOD.mjs';
import { _ as __nuxt_component_0$1 } from './subcategory-page-CeQwVyy_.mjs';
import { _ as __nuxt_component_0$2 } from './ui-page-preloader-f4jo8KnM.mjs';
import { l as useGtm, u as useRoute, w as _sfc_main$2 } from './server.mjs';
import { ref, shallowRef, computed, withAsyncContext, provide, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { u as useFilter, a as useFetchCategory } from './useFetchCategories-BYKjNStR.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { u as useFetchBannerGroup } from './useFetchBannerGroup-Dtpp6J4F.mjs';
import { u as useConstructorUtils } from './constructor-blocks-CH3HZKzT.mjs';
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
import './seo-content-9I8wssV3.mjs';
import './pages-CxSmVAwD.mjs';
import 'pinia';
import './cart-slider-CP5cff-4.mjs';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './ui-slider-button-ex5lF246.mjs';
import 'swiper/modules';
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
import './BannerApiService-o77k-wf8.mjs';

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
    const { fetchConstructorPayload } = useConstructorUtils();
    const { isLoading, startLoading, stopLoading } = useFormLoader(true);
    const isLoadingNewPage = ref(true);
    const constructorBlocks = shallowRef({
      blocks: []
    });
    const constructorPayload = shallowRef(null);
    const { getQueryParams } = useFilter();
    const {
      fetchCategoryBySlug,
      categoryBySlug,
      allCategories,
      totalPages,
      fetchError
    } = useFetchCategory();
    const currentPage = computed(() => {
      var _a;
      return Number((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.page) || 1;
    });
    const { bannersGroup, bannersSpeed } = useFetchBannerGroup();
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
      category: categoryBySlug.value,
      bannersGroup: bannersGroup.value,
      bannersSpeed: bannersSpeed.value
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
    const fetchCategory = async ({ params: params2 }) => {
      var _a, _b, _c, _d;
      startLoading();
      try {
        await fetchCategoryBySlug(slugName, params2);
      } catch (e) {
        console.error(e);
      }
      if (fetchError.value) {
        return;
      }
      const pageSeoContent = getSeoContent((_a = categoryBySlug.value) == null ? void 0 : _a.contents);
      if (pageSeoContent) {
        seoContent.value = pageSeoContent;
      }
      setMetaToCatalogPage(categoryBySlug);
      pushGtmEvent("pageview", {
        title: (_b = categoryBySlug.value) == null ? void 0 : _b.name
      });
      (_c = categoryBySlug.value) == null ? void 0 : _c.contents.forEach((content) => {
        if (content.data) {
          constructorBlocks.value.blocks.push({
            type: "json",
            content: content.data
          });
        }
      });
      if ((_d = constructorBlocks.value) == null ? void 0 : _d.blocks.length) {
        constructorPayload.value = await fetchConstructorPayload(
          constructorBlocks.value.blocks
        );
      }
      stopLoading();
    };
    isLoadingNewPage.value = true;
    const params = { ...getQueryParams(currentPage.value) };
    [__temp, __restore] = withAsyncContext(() => fetchCategory({ params })), await __temp, __restore();
    isLoadingNewPage.value = false;
    provide("category", categoryBySlug);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoryPage = __nuxt_component_0;
      const _component_SubcategoryPage = __nuxt_component_0$1;
      const _component_UiPagePreloader = __nuxt_component_0$2;
      const _component_ErrorPage = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
      if (!unref(fetchError)) {
        _push(`<div>`);
        if (!unref(isLoadingNewPage)) {
          _push(`<!--[-->`);
          if (!unref(parentCategory)) {
            _push(ssrRenderComponent(_component_CategoryPage, {
              data: unref(categoryPageData),
              "seo-content": unref(seoContent),
              "constructor-blocks": unref(constructorBlocks),
              "constructor-payload": unref(constructorPayload)
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_SubcategoryPage, {
              data: unref(categoryPageData),
              "parent-category": unref(parentCategory),
              "seo-content": unref(seoContent),
              "total-pages": unref(totalPages),
              "current-page": unref(currentPage),
              loading: unref(isLoading),
              onGetSubcategoryData: ($event) => fetchCategory($event)
            }, null, _parent));
          }
          _push(`<!--]-->`);
        } else {
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ErrorPage, { error: unref(fetchError) }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/category/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B251VOQq.mjs.map
