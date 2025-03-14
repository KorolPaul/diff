import { C as CatalogService, g as getFamilyStripeData, _ as __nuxt_component_0$1 } from './useFamilyStripeData-DI_qwE51.mjs';
import { _ as _sfc_main$1 } from './useFetchCategories-BYKjNStR.mjs';
import { _ as __nuxt_component_2 } from './product-C1qE55vu.mjs';
import { _ as __nuxt_component_0$2 } from './cart-slider-CP5cff-4.mjs';
import _sfc_main$2 from './seo-content-9I8wssV3.mjs';
import { ref, computed, withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, u as useRoute } from './server.mjs';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';

const _sfc_main = {
  __name: "subcategory-page",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    parentCategory: {
      type: Object,
      required: true
    },
    seoContent: {
      type: Object,
      default: () => {
      }
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    withCategoriesFilter: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "getSubcategoryData",
    "changeProductSort",
    "changeSubCategoryId"
  ],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const { locale, t } = useI18n();
    const route = useRoute();
    const queryParams = ref({});
    const isPromotionPage = route.name.includes("promotions");
    const getSubcategoryData = (data) => {
      queryParams.value = data;
      emit("getSubcategoryData", queryParams.value);
    };
    const { setIsAppleCategoryPage } = usePagesStore();
    const promoCarouselData = computed(
      () => {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = props.data) == null ? void 0 : _a.category) == null ? void 0 : _b.contents) == null ? void 0 : _c.find(
          (item) => item.type === "promo-carousel"
        )) == null ? void 0 : _d.data;
      }
    );
    const categoryPromotionUrl = computed(
      () => {
        var _a;
        return (_a = promoCarouselData.value) == null ? void 0 : _a.categoryPromo;
      }
    );
    const categoryPromoData = categoryPromotionUrl.value ? ([__temp, __restore] = withAsyncContext(() => CatalogService.getFamilyStripe(categoryPromotionUrl.value)), __temp = await __temp, __restore(), __temp) : null;
    const cartSliderData = computed(() => {
      var _a, _b;
      const products = (_a = categoryPromoData == null ? void 0 : categoryPromoData.data) == null ? void 0 : _a.map((product) => {
        var _a2;
        product.isAddToCart = ((_a2 = promoCarouselData.value) == null ? void 0 : _a2.isAddToCart) || false;
        return product;
      });
      return ((_b = categoryPromoData == null ? void 0 : categoryPromoData.data) == null ? void 0 : _b.length) ? {
        title: t("quick_checkout"),
        products,
        promoId: categoryPromoData == null ? void 0 : categoryPromoData.id
      } : null;
    });
    const familyStripeData = ref([]);
    const loadCategoryFS = ref(true);
    watch(
      () => {
        var _a;
        return (_a = props.data) == null ? void 0 : _a.category;
      },
      async (newValue, oldValue) => {
        if (loadCategoryFS.value) {
          const familyStripeItems = await getFamilyStripeData(newValue, locale);
          familyStripeData.value = familyStripeItems;
          loadCategoryFS.value = false;
        }
      },
      {
        immediate: true
      }
    );
    const isAppleCategory = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.data) == null ? void 0 : _a.category) == null ? void 0 : _b.isOnlyMainProductsShown;
      }
    );
    setIsAppleCategoryPage(isAppleCategory.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_FamilyStripe = __nuxt_component_0$1;
      const _component_SubcategoryGrid = _sfc_main$1;
      const _component_Product = __nuxt_component_2;
      const _component_CartSlider = __nuxt_component_0$2;
      const _component_SeoContent = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subcategory-page" }, _attrs))} data-v-b8e6364c>`);
      if (((_a = unref(familyStripeData)) == null ? void 0 : _a.length) && __props.parentCategory && !unref(loadCategoryFS)) {
        _push(ssrRenderComponent(_component_FamilyStripe, {
          items: unref(familyStripeData),
          "category-name": __props.parentCategory.name,
          "category-slug": __props.parentCategory.slug
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="subcategory-page_title" data-v-b8e6364c><div class="subcategory-page_container" data-v-b8e6364c>${ssrInterpolate(__props.data.category.name)}</div></h1>`);
      if (__props.data.category) {
        _push(`<div class="subcategory-page_container" data-v-b8e6364c>`);
        if (!unref(isAppleCategory) || unref(isPromotionPage)) {
          _push(ssrRenderComponent(_component_SubcategoryGrid, {
            products: __props.data.category.products,
            subcategory: __props.data.category,
            slug: __props.data.category.slug,
            "total-pages": __props.totalPages,
            "current-page": __props.currentPage,
            loading: __props.loading,
            "with-categories-filter": __props.withCategoriesFilter,
            onGetSubcategoryData: getSubcategoryData
          }, null, _parent));
        } else if (__props.data.category.products) {
          _push(`<!--[-->`);
          ssrRenderList(__props.data.category.products, (product) => {
            _push(ssrRenderComponent(_component_Product, {
              key: product.id,
              product
            }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(cartSliderData)) {
          _push(ssrRenderComponent(_component_CartSlider, {
            data: unref(cartSliderData),
            class: "subcategory-page_quick-checkout"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.seoContent) {
          _push(ssrRenderComponent(_component_SeoContent, { data: __props.seoContent }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/subcategory-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8e6364c"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=subcategory-page-CeQwVyy_.mjs.map
