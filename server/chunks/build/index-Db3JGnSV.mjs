import { _ as __nuxt_component_0 } from './base-banner--pU7GRI3.mjs';
import { defineComponent, ref, watch, resolveComponent, unref, computed, withCtx, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, mergeProps, createVNode, createTextVNode, toDisplayString, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useRoute, a as useI18n, l as useGtm, C as useRouter, r as useNuxtApp, d as __nuxt_component_0$2, k as __nuxt_component_6 } from './server.mjs';
import { S as SearchApiService } from './SearchApiService-BydxThEZ.mjs';
import { _ as _sfc_main$6 } from './entity-card-BKC73J01.mjs';
import { _ as __nuxt_component_1 } from './product-badges-ahLlBnMK.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { u as useLoadingStore } from './loading-CMY4YQWC.mjs';
import { _ as _sfc_main$5 } from './pagination-DmJuDOkq.mjs';
import { u as useFilterUtils, _ as _sfc_main$4, a as useDeleteEmptyKeyFromObject, b as _sfc_main$1$1, c as _sfc_main$2$1, d as _sfc_main$3$1, g as getFilterTag } from './products-grid-BtcpmAB9.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';
import { u as useScrollTo } from './useScrollTo-GsIK4vXy.mjs';
import { f as formatArrayToQueryParams } from './format-array-to-query-params-BGUBpLWy.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import './UiLink-CpRzX3bY.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './useBreakpoints-8FE3JIb9.mjs';
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
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './TextInput-HaUa076w.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './ui-page-preloader-f4jo8KnM.mjs';
import './ui-preloader-C4Bi7ENY.mjs';

const useFetchSearch = () => {
  const { locale } = useI18n();
  const endOffsetValue = 800;
  const isLoadingNewPage = ref(false);
  const currentPageMeta = ref(null);
  const currentPage = ref(1);
  const searchFilters = ref(null);
  let maxScrollTop = -Infinity;
  const isEndScroll = (event) => {
    const { scrollHeight, scrollTop, offsetHeight } = event.target;
    maxScrollTop = Math.max(maxScrollTop, offsetHeight + scrollTop);
    return maxScrollTop >= scrollHeight - endOffsetValue;
  };
  const setMaxScrollTop = (scrollTop) => {
    maxScrollTop = scrollTop;
  };
  const setLoadNewPageValue = (isLoad) => {
    isLoadingNewPage.value = isLoad;
  };
  const setPageMeta = (pageMeta) => {
    currentPageMeta.value = pageMeta;
  };
  const setCurrentPage = (page) => {
    currentPage.value = page;
  };
  const isLastPage = () => {
    if (currentPageMeta.value) {
      return currentPageMeta.value.currentPage === currentPageMeta.value.lastPage;
    }
    return true;
  };
  const loadNewPage = async (params, lang = locale.value) => {
    setLoadNewPageValue(true);
    try {
      const data = await SearchApiService.searchProducts({ ...params, lang });
      setPageMeta(data.meta);
      searchFilters.value = data.availableFilters;
      return data.data || [];
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      setLoadNewPageValue(false);
    }
  };
  const isLoading = computed(() => isLoadingNewPage.value);
  const getCurrentPage = computed(() => currentPage.value);
  const getSearchMeta = computed(() => currentPageMeta.value);
  const getSearchFilters = computed(() => searchFilters.value);
  return {
    isEndScroll,
    setPageMeta,
    setMaxScrollTop,
    setCurrentPage,
    isLastPage,
    setLoadNewPageValue,
    isLoading,
    getCurrentPage,
    getSearchMeta,
    getSearchFilters,
    loadNewPage
  };
};
const _sfc_main$3 = {
  __name: "search-product",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    },
    showColor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const { currencyMark } = useCurrencyMark("", true);
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const getImageLink = computed(() => {
      var _a;
      return (_a = props.product) == null ? void 0 : _a.images[0].url;
    });
    const priceForPriceCat4 = computed(
      () => props.product.price && props.product.finalPrice < props.product.price && props.product.priceCat4 ? props.product.finalPrice : props.product.price
    );
    const canBuyInCredit = computed(
      () => {
        var _a, _b;
        return ((_a = props.product) == null ? void 0 : _a.finalPrice) && props.product.featuredCredit && ((_b = props.product.featuredCredit) == null ? void 0 : _b.minMonthlyPayment);
      }
    );
    const buttonActionText = computed(() => {
      var _a, _b;
      if ((_a = props.product) == null ? void 0 : _a.realNpiState) {
        return t("preorder");
      }
      return t(((_b = props.product) == null ? void 0 : _b.realStock) > 0 ? "buy_now" : "notify_me");
    });
    const hasDiscountPrice = computed(
      () => {
        var _a, _b;
        return ((_a = props.product) == null ? void 0 : _a.finalPrice) < ((_b = props.product) == null ? void 0 : _b.price);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_EntityCard = _sfc_main$6;
      const _component_ProductBadges = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$2;
      if (__props.product) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-product" }, _attrs))}><div>`);
        _push(ssrRenderComponent(_component_EntityCard, {
          link: _ctx.localePath(`/product/${__props.product.slug}`),
          name: __props.product.name,
          "image-link": unref(getImageLink)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="search-product_badge"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ProductBadges, { product: __props.product }, null, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              return [
                createVNode("p", { class: "search-product_badge" }, [
                  createVNode(_component_ProductBadges, { product: __props.product }, null, 8, ["product"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="search-product_price-wrapper">`);
        if (__props.product.price && unref(hasDiscountPrice) && !__props.product.priceCat4) {
          _push(`<p class="search-product_action-price">${ssrInterpolate(__props.product.price)}\xA0 ${ssrInterpolate(unref(currencyMark))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.product.priceCat4) {
          _push(`<p class="search-product_action-price">${ssrInterpolate(unref(priceForPriceCat4))}\xA0 ${ssrInterpolate(unref(currencyMark))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="search-product_price">`);
        if (__props.product.finalPrice && !__props.product.priceCat4) {
          _push(`<span class="${ssrRenderClass([{
            "carousel-product_price-value__discount": unref(hasDiscountPrice)
          }, "search-product_price-value"])}">${ssrInterpolate(unref(formatPriceWithSpaces)(__props.product.finalPrice))}\xA0${ssrInterpolate(unref(currencyMark))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.product.finalPrice && __props.product.priceCat4) {
          _push(`<span class="${ssrRenderClass([{
            "carousel-product_price-value__discount": unref(hasDiscountPrice)
          }, "search-product_price-value"])}">${ssrInterpolate(unref(formatPriceWithSpaces)(__props.product.priceCat4))}\xA0${ssrInterpolate(unref(currencyMark))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasDiscountPrice)) {
          _push(`<span class="search-product_discount">${ssrInterpolate(__props.product.finalPrice - __props.product.price)}\xA0 ${ssrInterpolate(unref(currencyMark))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
        if (unref(canBuyInCredit)) {
          _push(`<p class="search-product_credit-text">${ssrInterpolate(_ctx.$t("credit_from"))} ${ssrInterpolate(unref(formatPriceWithSpaces)((_b = (_a = __props.product) == null ? void 0 : _a.featuredCredit) == null ? void 0 : _b.minMonthlyPayment))} ${ssrInterpolate(__props.product.currency)}/ ${ssrInterpolate(_ctx.$t("credit_mo"))} ${ssrInterpolate(_ctx.$t("credit_for"))} ${ssrInterpolate(__props.product.featuredCredit.maxTerm)} ${ssrInterpolate(_ctx.$t("credit_months"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.localePath(`/product/${__props.product.slug}`),
          class: "search-product_button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(buttonActionText))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(buttonActionText)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/search/components/search-product/search-product.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "search-filters",
  __ssrInlineRender: true,
  props: {
    filters: {},
    selectedFilters: {},
    loading: { type: Boolean },
    filterSelectedTags: {},
    minPrice: {},
    maxPrice: {}
  },
  emits: [
    "onRemoveTag",
    "onFilterChange",
    "clearAllFilter",
    "clearPriceFilter",
    "updatePriceFilter"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const { currencyMark } = useCurrencyMark("", true);
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const shopsStore = useShopsStore();
    const defaultMinPriceValue = ref(0);
    const defaultMaxPriceValue = ref(400);
    const isLoadedFilter = ref(true);
    const isOpened = ref(false);
    const selectedShop = computed(() => shopsStore.getSelectedShop);
    const hasPrice = computed(
      () => (props.minPrice !== null || props.maxPrice !== null) && props.maxPrice !== 0
    );
    const transformStockData = (data) => {
      if (data.stock) {
        const stockBuckets = Object.entries(data.stock).map(([key, value]) => ({
          id: key === "inStock" ? 1 : 0,
          name: t(key === "inStock" ? "in_stock" : "out_of_stock"),
          docCount: value
        }));
        return {
          id: "stock",
          name: t("available"),
          buckets: stockBuckets
        };
      }
    };
    const transformVendorsData = (data) => {
      if (data.vendors) {
        const vendorBuckets = data.vendors.items.map(({ value, count, name }) => ({
          id: value,
          name,
          docCount: count
        }));
        return {
          id: "vendors",
          name: t("brand"),
          buckets: vendorBuckets
        };
      }
    };
    const transformFeaturesData = (data) => {
      if (data.features.groups) {
        return data.features.groups.map((group) => {
          var _a, _b;
          return {
            id: "features",
            name: group.name,
            selectedFilters: ((_b = (_a = props.selectedFilters) == null ? void 0 : _a.features) == null ? void 0 : _b[group.name]) || [],
            buckets: group.values.map((value) => {
              return {
                id: value.key,
                name: value.name,
                docCount: value.count
              };
            })
          };
        });
      }
      return [];
    };
    const transformTopLevelCategoriesData = (data) => {
      if (data.topLevelCategories) {
        const topLevelCategoriesBuckets = data.topLevelCategories.items.map(
          ({ value, count, name }) => ({
            id: value,
            name,
            docCount: count
          })
        );
        return {
          id: "topLevelCategories",
          name: t("top_level_categories"),
          buckets: topLevelCategoriesBuckets
        };
      }
    };
    const actualFilters = computed(() => [
      transformStockData(props.filters),
      transformVendorsData(props.filters),
      transformTopLevelCategoriesData(props.filters)
    ]);
    const actualFeatureFilters = computed(
      () => transformFeaturesData(props.filters)
    );
    const getItFastFilter = computed(() => {
      var _a;
      return {
        id: "getItFast",
        name: t("get_it_fast"),
        buckets: [
          {
            id: 0,
            name: t("pickup"),
            description: ((_a = selectedShop.value) == null ? void 0 : _a.name) || t("select_your_store")
          },
          {
            id: 1,
            name: t("product_shipping")
          }
        ]
      };
    });
    const isPriceFilterVisible = computed(() => defaultMaxPriceValue.value > 0);
    const getSelectedFilter = (id, name) => {
      return props.selectedFilters ? props.selectedFilters[getFilterTag(id, name, true)] : [];
    };
    const clearPriceValue = () => {
      emit("clearPriceFilter");
    };
    const openStoresSidebar = () => {
      shopsStore.setSidebarOpened(true);
    };
    const formatPrice = (price) => `${formatPriceWithSpaces(price)} ${currencyMark.value}`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1$1;
      const _component_UiChip = _sfc_main$1$1;
      const _component_FilterItem = _sfc_main$2$1;
      const _component_FilterItemPrice = _sfc_main$3$1;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-filters" }, _attrs))}><button class="search-filters_toggle">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "search-filters_toggle-icon",
        icon: "filterIcon"
      }, null, _parent));
      _push(` Add filter </button><div class="${ssrRenderClass([{ opened: unref(isOpened) }, "search-filters_content"])}"><button class="search-filters_close">`);
      _push(ssrRenderComponent(_component_Icon, { icon: "close" }, null, _parent));
      _push(`</button><span class="search-filters_mobile-title">${ssrInterpolate(_ctx.$t("filter"))}</span>`);
      if (_ctx.filterSelectedTags && ((_a = _ctx.filterSelectedTags) == null ? void 0 : _a.length) > 0 || unref(hasPrice)) {
        _push(`<div class="search-filters_header"><div class="search-filters_header-filter"><span class="search-filters_filter-title">${ssrInterpolate(_ctx.$t("filter_by"))}</span><button class="search-filters_clear">${ssrInterpolate(_ctx.$t("clear_all"))}</button></div><div class="search-filters_tags"><!--[-->`);
        ssrRenderList(_ctx.filterSelectedTags, (item) => {
          _push(ssrRenderComponent(_component_UiChip, {
            key: item.id,
            class: "search-filters_selected-tag",
            closable: "",
            "onClick:close": ($event) => _ctx.$emit("onRemoveTag", item.id, item.key, item.name)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (unref(hasPrice)) {
          _push(ssrRenderComponent(_component_UiChip, {
            class: "search-filters_selected-tag",
            closable: "",
            "onClick:close": clearPriceValue
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(`${formatPrice(_ctx.minPrice)} - ${formatPrice(_ctx.maxPrice)}`)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(`${formatPrice(_ctx.minPrice)} - ${formatPrice(_ctx.maxPrice)}`), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="search-filters_items">`);
      _push(ssrRenderComponent(_component_FilterItem, {
        caption: unref(getItFastFilter).name,
        "filter-id": unref(getItFastFilter).id,
        "filter-name": unref(getItFastFilter).name,
        "filter-items": unref(getItFastFilter).buckets,
        disabled: ((_c = (_b = _ctx.selectedFilters) == null ? void 0 : _b.stock) == null ? void 0 : _c[0]) === 0,
        checked: getSelectedFilter(unref(getItFastFilter).id, unref(getItFastFilter).name),
        onOnFilterChange: ($event) => _ctx.$emit("onFilterChange", $event),
        onOnDescriptionItemClick: openStoresSidebar
      }, null, _parent));
      if (unref(actualFilters).length > 0) {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(unref(actualFilters), (filter) => {
          _push(ssrRenderComponent(_component_FilterItem, {
            key: `${filter == null ? void 0 : filter.id}${filter == null ? void 0 : filter.name}`,
            caption: filter == null ? void 0 : filter.name,
            "filter-id": filter == null ? void 0 : filter.id,
            "filter-name": filter == null ? void 0 : filter.name,
            "filter-items": filter == null ? void 0 : filter.buckets,
            "is-default-collapsed": true,
            checked: filter && getSelectedFilter(filter.id, filter.name),
            onOnFilterChange: ($event) => _ctx.$emit("onFilterChange", $event)
          }, null, _parent));
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(actualFeatureFilters), (filter) => {
          _push(ssrRenderComponent(_component_FilterItem, {
            key: `${filter == null ? void 0 : filter.id}${filter == null ? void 0 : filter.name}`,
            caption: filter == null ? void 0 : filter.name,
            "filter-id": filter == null ? void 0 : filter.id,
            "filter-name": filter == null ? void 0 : filter.name,
            "filter-items": filter == null ? void 0 : filter.buckets,
            "is-default-collapsed": true,
            checked: filter.selectedFilters,
            onOnFilterChange: ($event) => _ctx.$emit("onFilterChange", $event)
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (unref(isPriceFilterVisible)) {
          _push(ssrRenderComponent(_component_FilterItemPrice, {
            "min-price": _ctx.minPrice,
            "default-min-price": unref(defaultMinPriceValue),
            "max-price": _ctx.maxPrice,
            "default-max-price": unref(defaultMaxPriceValue),
            "is-loading": "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
            onUpdatePriceFilter: ($event) => _ctx.$emit("updatePriceFilter", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="search-filters_button">`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: !unref(isLoadedFilter),
        secondary: "",
        "full-width": "",
        onClick: ($event) => isOpened.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("apply"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("apply")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/search/components/search-filters/search-filters.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const sortSettings = {
  cheap: {
    sort_by: "final_price",
    sort_direction: "asc"
  },
  expensive: {
    sort_by: "final_price",
    sort_direction: "desc"
  },
  total_popular: {}
};
const FEATURES_FILTER_KEY = "features";
const useSearchFilter = () => {
  const { t } = useI18n();
  const route = useRoute();
  const router = useRouter();
  const selectedFilters = ref({});
  const sortValue = ref(sortSettings.total_popular);
  const sortName = ref("total_popular");
  const minPriceVal = ref(null);
  const maxPriceVal = ref(null);
  const queriesFromURL = ref({});
  const allFilters = ref(null);
  const limit = 21;
  const { addFilterPrefixToKey, getKeyWithoutPrefix, isExistFilterPrefix } = useFilterUtils();
  const changeSorting = (data) => {
    sortValue.value = sortSettings[data];
    sortName.value = data;
  };
  const setAllFilters = (payload) => {
    allFilters.value = payload;
  };
  const setPriceFilterValue = (value) => {
    minPriceVal.value = value.min;
    maxPriceVal.value = value.max;
  };
  const clearFilter = () => {
    selectedFilters.value = {};
    minPriceVal.value = null;
    maxPriceVal.value = null;
  };
  const removeFilterById = (idFrom, key, name) => {
    const currentFilter = selectedFilters.value[key];
    if (!currentFilter) {
      return;
    }
    const idsToRemove = new Set(Array.isArray(idFrom) ? idFrom : [idFrom]);
    const handleArrayFilter = (filterArray, idsToRemove2, key2) => {
      selectedFilters.value[key2] = filterArray.filter(
        (item) => Array.isArray(item) ? !item.every((i) => idsToRemove2.has(i)) : !idsToRemove2.has(item)
      );
    };
    const handleObjectFilter = (filterObj, idsToRemove2, key2, name2) => {
      const groupName = extractGroupName(name2);
      if (!groupName || !filterObj[groupName]) {
        return;
      }
      filterObj[groupName] = filterObj[groupName].filter(
        (item) => !idsToRemove2.has(item)
      );
      if (filterObj[groupName].length === 0) {
        delete filterObj[groupName];
      }
    };
    const extractGroupName = (name2) => {
      if (typeof name2 !== "string") {
        return null;
      }
      const [firstPart] = name2.split(":");
      return (firstPart == null ? void 0 : firstPart.trim().length) >= 2 ? firstPart.trim() : name2;
    };
    const cleanupEmptyFilter = (key2) => {
      const current = selectedFilters.value[key2];
      if (!current || Array.isArray(current) && current.length === 0 || typeof current === "object" && Object.keys(current).length === 0) {
        delete selectedFilters.value[key2];
      }
    };
    if (Array.isArray(currentFilter)) {
      handleArrayFilter(currentFilter, idsToRemove, key);
    } else {
      handleObjectFilter(currentFilter, idsToRemove, key, name);
    }
    cleanupEmptyFilter(key);
  };
  const getFilterQuery = (key) => {
    const query = queriesFromURL.value[key];
    if (!query) {
      return {};
    }
    const parseQueryValue = (value) => {
      return value.split(",").map(Number).filter((num) => !isNaN(num));
    };
    let queryValues = [];
    if (Array.isArray(query)) {
      queryValues = query.map(parseQueryValue);
    } else if (key.includes(FEATURES_FILTER_KEY)) ;
    else {
      queryValues = parseQueryValue(query);
    }
    return (queryValues == null ? void 0 : queryValues.length) > 0 ? { [key]: queryValues } : {};
  };
  const initFilter = () => {
    function transformFeatureToMap(input) {
      const result = {};
      for (const [key, value] of Object.entries(input)) {
        const match = key.match(/^features\[(.*?)\]$/);
        if (match) {
          const featureName = match[1];
          const values = String(value).split(",").map((v) => v.trim()).filter((v) => v !== "");
          result[featureName] = values;
        }
      }
      return result;
    }
    const queriesFromURLKeys = Object.keys(queriesFromURL.value);
    if (queriesFromURLKeys.length > 0) {
      const excludedKeys = /* @__PURE__ */ new Set([
        "page",
        "text",
        "filter_price[max]",
        "filter_price[min]"
      ]);
      let featuresFilters = {};
      if (queriesFromURLKeys.some((key) => key.includes(FEATURES_FILTER_KEY))) {
        featuresFilters = {
          [FEATURES_FILTER_KEY]: transformFeatureToMap(queriesFromURL.value)
        };
      }
      queriesFromURLKeys.forEach((key) => {
        if (!excludedKeys.has(key.toLowerCase())) {
          selectedFilters.value = {
            ...selectedFilters.value,
            ...getFilterQuery(key),
            ...featuresFilters
          };
        }
      });
    }
  };
  const updateSelectedFilters = (payload) => {
    const formatPayloadValue = (value) => {
      if (payloadKey === FEATURES_FILTER_KEY) {
        const object = {
          ...selectedFilters.value[FEATURES_FILTER_KEY],
          [payload.name]: payload.value
        };
        return object;
      }
      return value.map(Number);
    };
    const payloadKey = payload.id.toLowerCase();
    const updatedValue = formatPayloadValue(payload.value);
    selectedFilters.value = {
      ...selectedFilters.value,
      [payloadKey]: updatedValue
    };
  };
  const filterFeatureIdsForFetch = computed(() => {
    if (!allFilters.value || !selectedFilters.value[FEATURES_FILTER_KEY]) {
      return [];
    }
    const groupsMap = new Map(
      allFilters.value[FEATURES_FILTER_KEY].groups.map((group) => [
        group.name,
        group
      ])
    );
    return Object.entries(selectedFilters.value[FEATURES_FILTER_KEY]).map(([groupName, featureKeys]) => {
      const group = groupsMap.get(groupName);
      if (!group) {
        return null;
      }
      const featureValues = featureKeys.flatMap(
        (key) => {
          var _a;
          return ((_a = group.values.find((v) => v.key === key)) == null ? void 0 : _a.values) || [];
        }
      );
      return featureValues.length > 0 ? featureValues : null;
    }).filter(Boolean);
  });
  const filterSelectedTags = computed(() => {
    if (!allFilters.value) {
      return [];
    }
    const translateKeyMap = {
      toplevelcategories: "top_level_categories",
      vendors: "brand"
    };
    const createBucketValueMap = (items) => new Map((items == null ? void 0 : items.map((item) => [item.value, item])) || []);
    const handleDefaultFilter = (key, values, filter, result2) => {
      const valueMap = createBucketValueMap(filter.items);
      values.forEach((id) => {
        const bucket = valueMap.get(Number(id));
        if (bucket) {
          result2.push({
            id: bucket.value,
            name: `${t(translateKeyMap[key])}: ${bucket.name}`,
            key
          });
        }
      });
    };
    const handleStockFilter = (values, result2) => {
      values.forEach((id) => {
        result2.push({
          id,
          name: `${t("available")}: ${t(id ? "in_stock" : "out_of_stock")}`,
          key: "stock"
        });
      });
    };
    const handleFeaturesFilter = (values, result2) => {
      const featureItems = Object.entries(values).flatMap(
        ([category, ids]) => ids.map((id) => {
          const feature = findFeatureByNameAndId(category, id);
          return feature ? {
            id,
            name: `${category}: ${feature.name}`,
            key: FEATURES_FILTER_KEY
          } : null;
        }).filter(Boolean)
      );
      result2.push(...featureItems);
    };
    const result = [];
    const filtersMap = createLowerCaseMap(allFilters.value);
    for (const [key, values] of Object.entries(selectedFilters.value)) {
      const filter = filtersMap[key.toLowerCase()];
      if (!filter) continue;
      switch (true) {
        case key === "stock":
          handleStockFilter(values, result);
          break;
        case key.includes(FEATURES_FILTER_KEY):
          handleFeaturesFilter(values, result);
          break;
        default:
          handleDefaultFilter(key, values, filter, result);
      }
    }
    return result;
  });
  const createLowerCaseMap = (obj) => Object.entries(obj).reduce((acc, [k, v]) => {
    acc[k.toLowerCase()] = v;
    return acc;
  }, {});
  const findFeatureByNameAndId = (category, id) => {
    var _a, _b, _c;
    const featureGroup = (_b = (_a = allFilters.value[FEATURES_FILTER_KEY]) == null ? void 0 : _a.groups) == null ? void 0 : _b.find(
      (g) => g.name === category
    );
    return (_c = featureGroup == null ? void 0 : featureGroup.values) == null ? void 0 : _c.find((v) => v.key === id);
  };
  const filterQueryParamsForRoute = computed(() => {
    const arrayParams = {};
    Object.entries(selectedFilters.value).forEach(([key, value]) => {
      if (value) {
        if (key === "stock" && value.length === 2) {
          return;
        }
        if (key === FEATURES_FILTER_KEY) {
          const paramKey = addFilterPrefixToKey(key);
          Object.entries(value).forEach(([featureKey, featureValue]) => {
            const paramValue = Array.isArray(featureValue) && featureValue.length ? featureValue.join() : featureValue;
            arrayParams[`${paramKey}[${featureKey}]`] = paramValue;
          });
        } else {
          const paramKey = addFilterPrefixToKey(key);
          const paramValue = Array.isArray(value) && value.length ? value.join() : value;
          arrayParams[paramKey] = paramValue;
        }
      }
    });
    return arrayParams;
  });
  const getQueryParams = (page = 1) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const isInStock = Boolean((_b = (_a = selectedFilters.value) == null ? void 0 : _a.stock) == null ? void 0 : _b[0]);
    const isGetItFast = Boolean((_d = (_c = selectedFilters.value) == null ? void 0 : _c.getitfast) == null ? void 0 : _d[0]);
    return {
      page,
      limit,
      ...sortValue.value,
      ...((_e = selectedFilters.value) == null ? void 0 : _e.toplevelcategories) && {
        "filters[categories]": selectedFilters.value.toplevelcategories
      },
      ...((_f = selectedFilters.value) == null ? void 0 : _f.vendors) && {
        "filters[vendors]": selectedFilters.value.vendors
      },
      ...((_h = (_g = selectedFilters.value) == null ? void 0 : _g.stock) == null ? void 0 : _h.length) === 1 && {
        [`filters[stock][${isInStock ? "in_stock" : "out_of_stock"}]`]: 1
      },
      ...((_j = (_i = selectedFilters.value) == null ? void 0 : _i.getitfast) == null ? void 0 : _j.length) === 1 && {
        [`filters[get_it_fast][${isGetItFast ? "pickup" : "shipping"}]`]: 1
      },
      ...((_l = (_k = selectedFilters.value) == null ? void 0 : _k.getitfast) == null ? void 0 : _l.length) === 2 && {
        [`filters[get_it_fast][pickup]`]: 1,
        [`filters[get_it_fast][shipping]`]: 1
      },
      ...((_m = selectedFilters.value) == null ? void 0 : _m[FEATURES_FILTER_KEY]) && {
        "filters[features]": filterFeatureIdsForFetch.value
      },
      ...minPriceVal.value && { "filters[price][min]": minPriceVal.value },
      ...maxPriceVal.value && { "filters[price][max]": maxPriceVal.value }
    };
  };
  const addQueryToRoute = (page = 1) => {
    selectedFilters.value = useDeleteEmptyKeyFromObject(selectedFilters.value);
    const queryRouteParams = {
      ...queriesFromURL.value.text && { query: queriesFromURL.value.text },
      ...filterQueryParamsForRoute.value,
      ...minPriceVal.value && {
        ["filter_price[min]"]: minPriceVal.value
      },
      ...maxPriceVal.value && {
        ["filter_price[max]"]: maxPriceVal.value
      },
      ...page !== 1 && { page }
    };
    router.push({
      query: queryRouteParams
    });
  };
  watch(
    () => route.query,
    () => {
      var _a;
      if ((_a = route.query) == null ? void 0 : _a.query) {
        queriesFromURL.value.text = route.query.query;
      }
      for (const queryKey of Object.keys(route.query)) {
        if (!isExistFilterPrefix(queryKey)) {
          continue;
        }
        const slicedKey = getKeyWithoutPrefix(queryKey);
        if (slicedKey === "price[max]") {
          maxPriceVal.value = route.query[queryKey];
          continue;
        }
        if (slicedKey === "price[min]") {
          minPriceVal.value = route.query[queryKey];
          continue;
        }
        if (slicedKey) {
          queriesFromURL.value[slicedKey] = route.query[queryKey];
        }
      }
    },
    { immediate: true }
  );
  initFilter();
  return {
    allFilters,
    selectedFilters,
    minPriceVal,
    maxPriceVal,
    sortValue,
    sortName,
    filterSelectedTags,
    removeFilterById,
    setAllFilters,
    clearFilter,
    setPriceFilterValue,
    changeSorting,
    addQueryToRoute,
    updateSelectedFilters,
    getQueryParams
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "search-grid",
  __ssrInlineRender: true,
  props: {
    products: {},
    searchFilters: {},
    searchMeta: {},
    loading: { type: Boolean }
  },
  emits: ["getSearchData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const route = useRoute();
    const router = useRouter();
    const app = useNuxtApp();
    const { t, locale: currentLocale } = useI18n();
    const dropdownSortItems = ref([
      { label: t("search_sort_relevance"), value: "total_popular" },
      { label: t("search_sort_cheap"), value: "cheap" },
      { label: t("search_sort_expensive"), value: "expensive" }
    ]);
    const currentPageModel = computed({
      get() {
        var _a;
        return (_a = props.searchMeta) == null ? void 0 : _a.currentPage;
      },
      set(value) {
        handleChangePage(Number(value));
      }
    });
    const {
      minPriceVal,
      maxPriceVal,
      filterSelectedTags,
      setPriceFilterValue,
      addQueryToRoute,
      selectedFilters,
      updateSelectedFilters,
      setAllFilters,
      removeFilterById,
      clearFilter,
      changeSorting,
      sortName,
      getQueryParams
    } = useSearchFilter();
    const handleChangePriceFilter = ({
      min,
      max
    }) => {
      setPriceFilterValue({ min, max });
      addQueryToRoute();
      emit("getSearchData", {
        params: getQueryParams()
      });
    };
    const handleClearPriceFilter = () => {
      handleChangePriceFilter({ min: null, max: null });
    };
    const handleChangePage = (page) => {
      addQueryToRoute(page);
      emit("getSearchData", { params: getQueryParams(page) });
    };
    const handleSortChange = (value) => {
      changeSorting(value);
      emit("getSearchData", {
        params: getQueryParams(1)
      });
    };
    const handleRemoveTag = (id, key, name) => {
      removeFilterById(id, key, name);
      addQueryToRoute();
      emit("getSearchData", {
        params: getQueryParams(1)
      });
    };
    const handleChangeFilters = (payload) => {
      updateSelectedFilters(payload);
      addQueryToRoute();
      emit("getSearchData", { params: getQueryParams() });
    };
    const clearAllFilter = () => {
      clearFilter();
      addQueryToRoute();
      emit("getSearchData", { params: getQueryParams() });
    };
    watch(
      () => props.searchFilters,
      (value) => {
        setAllFilters(value);
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a;
        return (_a = route.query) == null ? void 0 : _a.query;
      },
      () => {
        clearFilter();
        emit("getSearchData", { params: getQueryParams() });
      }
    );
    watch(currentLocale, () => {
      var _a;
      router.push(
        app.$localeRoute({
          query: { query: (_a = route.query) == null ? void 0 : _a.query }
        })
      );
      clearFilter();
      emit("getSearchData", { params: getQueryParams() });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SearchProduct = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        products: _ctx.products,
        loading: "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
        total: ((_a = _ctx.searchMeta) == null ? void 0 : _a.total) || 0,
        "dropdown-sort-items": unref(dropdownSortItems),
        "sort-name": unref(sortName),
        "filter-selected-tags": unref(filterSelectedTags) || [],
        "min-price": unref(minPriceVal),
        "max-price": unref(maxPriceVal),
        onOnRemoveTag: handleRemoveTag,
        onClearAllFilter: clearAllFilter,
        onHandleSortChange: handleSortChange,
        onClearPriceFilter: handleClearPriceFilter
      }, {
        filter: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.searchFilters) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                "min-price": unref(minPriceVal),
                "max-price": unref(maxPriceVal),
                filters: _ctx.searchFilters,
                "selected-filters": unref(selectedFilters),
                "filter-selected-tags": unref(filterSelectedTags),
                onOnRemoveTag: handleRemoveTag,
                onClearAllFilter: clearAllFilter,
                onClearPriceFilter: handleClearPriceFilter,
                onUpdatePriceFilter: handleChangePriceFilter,
                onOnFilterChange: handleChangeFilters
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.searchFilters ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                "min-price": unref(minPriceVal),
                "max-price": unref(maxPriceVal),
                filters: _ctx.searchFilters,
                "selected-filters": unref(selectedFilters),
                "filter-selected-tags": unref(filterSelectedTags),
                onOnRemoveTag: handleRemoveTag,
                onClearAllFilter: clearAllFilter,
                onClearPriceFilter: handleClearPriceFilter,
                onUpdatePriceFilter: handleChangePriceFilter,
                onOnFilterChange: handleChangeFilters
              }, null, 8, ["min-price", "max-price", "filters", "selected-filters", "filter-selected-tags"])) : createCommentVNode("", true)
            ];
          }
        }),
        product: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.products, (product) => {
              _push2(ssrRenderComponent(_component_SearchProduct, {
                key: product.id,
                product
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products, (product) => {
                return openBlock(), createBlock(_component_SearchProduct, {
                  key: product.id,
                  product
                }, null, 8, ["product"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.searchMeta && _ctx.searchMeta.lastPage > 1) {
        _push(ssrRenderComponent(_sfc_main$5, {
          modelValue: unref(currentPageModel),
          "onUpdate:modelValue": ($event) => isRef(currentPageModel) ? currentPageModel.value = $event : null,
          length: _ctx.searchMeta.lastPage,
          disabled: "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
          class: "search-grid_pagination"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/search/components/search-grid/search-grid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const { pushGtmEvent } = useGtm();
    const searchCaptionRef = ref(null);
    const searchSuggestions = ref([]);
    const banner = ref(null);
    useSearchFilter();
    const {
      setLoadNewPageValue,
      getSearchMeta,
      loadNewPage,
      isLoading,
      getSearchFilters
    } = useFetchSearch();
    const { fetchError } = useFetchError();
    const scrollToSearchTitle = async () => {
      var _a;
      await nextTick();
      if (searchCaptionRef.value) {
        const captionRect = (_a = searchCaptionRef.value) == null ? void 0 : _a.getBoundingClientRect();
        useScrollTo(captionRect.top);
      }
    };
    const fetchSearchSuggestions = async ({
      searchQuery = ((_a) => (_a = route.query) == null ? void 0 : _a.query)(),
      params
    }) => {
      try {
        setLoadNewPageValue(true);
        const newParams = params ? formatArrayToQueryParams(params) : {};
        searchSuggestions.value = await loadNewPage({
          ...newParams,
          query: searchQuery
        });
        pushGtmEvent("viewSearchResults", [...searchSuggestions.value || []], {
          // TODO delete when pushGtmEvent is typed
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          search: searchQuery
        });
        scrollToSearchTitle();
      } catch (e) {
        console.error(e);
      } finally {
        setLoadNewPageValue(false);
      }
    };
    watch(
      () => {
        var _a;
        return (_a = route.query) == null ? void 0 : _a.query;
      },
      async () => {
        var _a;
        const { data } = await BannerApiService.searchBanner({
          query: (_a = route.query) == null ? void 0 : _a.query
        });
        banner.value = data == null ? void 0 : data.data;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBanner = __nuxt_component_0;
      const _component_AppError = resolveComponent("AppError");
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (unref(banner)) {
          _push(`<div class="search_banner-container">`);
          _push(ssrRenderComponent(_component_BaseBanner, {
            key: unref(banner).name,
            class: "search_banner",
            banner: unref(banner)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="search_title">${ssrInterpolate(unref(t)("search_results"))}</h2><div class="search_grid">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          products: unref(searchSuggestions),
          "search-filters": unref(getSearchFilters),
          "search-meta": unref(getSearchMeta),
          loading: unref(isLoading),
          onGetSearchData: ($event) => fetchSearchSuggestions($event)
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_AppError, {
          error: { statusCode: unref(fetchError) }
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Db3JGnSV.mjs.map
