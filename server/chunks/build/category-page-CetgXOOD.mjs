import { _ as __nuxt_component_0$1, g as getFamilyStripeData, C as CatalogService } from './useFamilyStripeData-DI_qwE51.mjs';
import { _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { _ as __nuxt_component_2$1 } from './product-C1qE55vu.mjs';
import _sfc_main$1 from './seo-content-9I8wssV3.mjs';
import { computed, ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, b as useMindbox } from './server.mjs';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';

const _sfc_main = {
  __name: "category-page",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    seoContent: {
      type: Object,
      default: () => {
      }
    },
    constructorBlocks: {
      type: Object,
      default: null
    },
    constructorPayload: {
      type: Object,
      default: () => {
      }
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const props = __props;
    const { locale } = useI18n();
    const { pushMindBoxEvent } = useMindbox();
    const categories = computed(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      const categoryBages = (_d = (_c = (_b = (_a2 = props.data) == null ? void 0 : _a2.category) == null ? void 0 : _b.contents) == null ? void 0 : _c.find(
        (item) => item.type === "category_badge"
      )) == null ? void 0 : _d.data;
      if (!categoryBages) {
        return (_f = (_e = props.data) == null ? void 0 : _e.category) == null ? void 0 : _f.children;
      }
      const categoriesWithbadge = (_i = (_h = (_g = props.data) == null ? void 0 : _g.category) == null ? void 0 : _h.children) == null ? void 0 : _i.map(
        (category) => {
          categoryBages.forEach((badge) => {
            if (badge.id === category.id) {
              category.customBadges = badge.content;
            }
          });
          return category;
        }
      );
      return categoriesWithbadge;
    });
    const familyStripData = ref([]);
    const categoryAccesoriesData = ref(null);
    const getFamilyStripeItems = async (category) => {
      const familyStripeItems = await getFamilyStripeData(category, locale);
      if (familyStripeItems) {
        familyStripData.value = familyStripeItems;
      }
    };
    const getAcessoriesData = async (category) => {
      var _a2, _b;
      const categoryContentData = (_b = (_a2 = category == null ? void 0 : category.contents) == null ? void 0 : _a2.find(
        (item) => item.type === "accesories_url"
      )) == null ? void 0 : _b.data;
      const accesoriesUrl = categoryContentData == null ? void 0 : categoryContentData.accessoryCategorySlug;
      const data = await CatalogService.getAccessories(accesoriesUrl);
      if (data) {
        categoryAccesoriesData.value = data;
      }
    };
    if (props.data.category) {
      pushMindBoxEvent("webCatalogCategoryView", (_a = props.data.category) == null ? void 0 : _a.id);
      [__temp, __restore] = withAsyncContext(() => getFamilyStripeItems(props.data.category)), await __temp, __restore();
      [__temp, __restore] = withAsyncContext(() => getAcessoriesData(props.data.category)), await __temp, __restore();
    }
    const { setIsAppleCategoryPage } = usePagesStore();
    const isAppleCategory = computed(
      () => {
        var _a2, _b;
        return (_b = (_a2 = props.data) == null ? void 0 : _a2.category) == null ? void 0 : _b.isOnlyMainProductsShown;
      }
    );
    setIsAppleCategoryPage(isAppleCategory.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      const _component_FamilyStripe = __nuxt_component_0$1;
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_Product = __nuxt_component_2$1;
      const _component_SeoContent = _sfc_main$1;
      _push(`<!--[-->`);
      if ((_a2 = unref(familyStripData)) == null ? void 0 : _a2.length) {
        _push(ssrRenderComponent(_component_FamilyStripe, {
          items: unref(familyStripData),
          "category-name": (_b = __props.data.category) == null ? void 0 : _b.name,
          "category-slug": (_c = __props.data.category) == null ? void 0 : _c.slug
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="category-page" data-v-04a5c3cf>`);
      if (__props.constructorBlocks.blocks.length && __props.constructorPayload) {
        _push(ssrRenderComponent(_component_ConstructorBlocks, {
          "page-data": __props.constructorBlocks,
          payload: __props.constructorPayload
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.data.category) {
        _push(`<div data-v-04a5c3cf>`);
        if (unref(categories)) {
          _push(`<!--[-->`);
          ssrRenderList(unref(categories), (category) => {
            _push(ssrRenderComponent(_component_Product, {
              key: category.id,
              category
            }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(categoryAccesoriesData)) {
          _push(ssrRenderComponent(_component_Product, {
            category: unref(categoryAccesoriesData),
            "button-text": _ctx.$t("view_collection")
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
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/category-page/category-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04a5c3cf"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=category-page-CetgXOOD.mjs.map
