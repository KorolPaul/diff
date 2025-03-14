import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { u as useRoute, C as useRouter, r as useNuxtApp, _ as _export_sfc, c as useLocalePath, d as __nuxt_component_0$2, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$6 } from './ui-rotate-arrow-B7iS75rF.mjs';
import { ref, computed, watch, unref, withCtx, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, mergeProps, createTextVNode, toDisplayString, createVNode, defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useFilterUtils, _ as _sfc_main$4, a as useDeleteEmptyKeyFromObject, g as getFilterTag, b as _sfc_main$1$1, c as _sfc_main$2$1, d as _sfc_main$3$1 } from './products-grid-BtcpmAB9.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { C as CategoryApiService } from './CategoryApiService-CndB0tEv.mjs';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { _ as __nuxt_component_0$1 } from './carousel-product-B_FnTkjy.mjs';
import { _ as _sfc_main$5 } from './pagination-DmJuDOkq.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "filter-category",
  __ssrInlineRender: true,
  props: {
    category: {},
    activeCategory: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(false);
    const isCollapsed = ref(false);
    const filteredSubchildren = computed(() => {
      var _a;
      return isOpen.value ? props.category.subchildren : (_a = props.category.subchildren) == null ? void 0 : _a.slice(0, 10);
    });
    const isOnTopCategory = computed(() => props.activeCategory && props.category.type === "parent");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1;
      const _component_UiRotateArrow = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-category" }, _attrs))}>`);
      if (unref(isOnTopCategory)) {
        _push(`<button class="filter-category_back filter-category_back__main">`);
        _push(ssrRenderComponent(_component_Icon, { icon: "arrowLeft" }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.category.name)}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = unref(filteredSubchildren)) == null ? void 0 : _a.length) && ((_b = unref(filteredSubchildren)) == null ? void 0 : _b.length) > 0) {
        _push(`<!--[-->`);
        if ((_c = _ctx.category.subchildren) == null ? void 0 : _c.find((item) => item.id === _ctx.activeCategory)) {
          _push(`<button class="filter-category_back">`);
          _push(ssrRenderComponent(_component_Icon, { icon: "arrowLeft" }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.category.name)}</button>`);
        } else if (!unref(isOnTopCategory)) {
          _push(`<!--[-->`);
          if (_ctx.category.id === _ctx.activeCategory) {
            _push(`<button class="filter-category_parent-name filter-category_parent-name__inner">${ssrInterpolate(_ctx.category.name)} `);
            _push(ssrRenderComponent(_component_UiRotateArrow, {
              active: !unref(isCollapsed)
            }, null, _parent));
            _push(`</button>`);
          } else if (_ctx.category.type === "children") {
            _push(`<button class="filter-category_parent-name">${ssrInterpolate(_ctx.category.name)}</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div style="${ssrRenderStyle(!unref(isCollapsed) ? null : { display: "none" })}" class="filter-category_content"><!--[-->`);
          ssrRenderList(unref(filteredSubchildren), (subitem) => {
            _push(`<span class="${ssrRenderClass([{ "active": _ctx.activeCategory }, "filter-category_name"])}">${ssrInterpolate(subitem.name)}</span>`);
          });
          _push(`<!--]-->`);
          if (_ctx.category.subchildren && _ctx.category.subchildren.length > 10) {
            _push(`<div class="filter-category_action">${ssrInterpolate(unref(isOpen) ? `- ${_ctx.$t("show_less")}` : `+ ${_ctx.$t("show_more")}`)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/filter-category/filter-category.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "filter-categories",
  __ssrInlineRender: true,
  props: {
    filterItems: {},
    activeCategory: {},
    isLoadingOnChangePage: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["onFilterChange", "onDescriptionItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateModelChecked = (id) => {
      emit("onFilterChange", {
        id: "category_id",
        name: "Category",
        value: id ? [id] : null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FilterCategory = _sfc_main$3;
      _push(`<!--[-->`);
      ssrRenderList(props.filterItems, (item) => {
        _push(ssrRenderComponent(_component_FilterCategory, {
          key: item.id,
          category: item,
          "active-category": _ctx.activeCategory,
          onSelect: updateModelChecked
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/filter-categories/filter-categories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "filters",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => []
    },
    selectedFilters: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String,
      default: ""
    },
    categoryId: {
      type: Number,
      default: 0
    },
    isDefaultCollapsed: {
      type: Boolean,
      default: false
    },
    filterSelectedTags: {
      type: Array,
      default: () => []
    },
    minPrice: {
      type: [Number, null],
      default: null
    },
    maxPrice: {
      type: [Number, null],
      default: null
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  emits: [
    "onRemoveTag",
    "onFilterChange",
    "updateFiltersLength",
    "clearAllFilter",
    "clearPriceFilter",
    "updatePriceFilter"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const app = useNuxtApp();
    const localePath = useLocalePath();
    const i18n = app.$i18n;
    const { currencyMark } = useCurrencyMark("", true);
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const defaultMinPriceValue = ref(0);
    const defaultMaxPriceValue = ref(0);
    const selectedCategoryId = ref(props.categoryId);
    const mobFilterList = ref([]);
    const isLoadedFilter = ref(true);
    const isCategoryIdFilter = ref(false);
    ref([]);
    const isDiscountFilter = ref(false);
    const minGeneralPrice = ref(0);
    const maxGeneralPrice = ref(0);
    const isOpened = ref(false);
    const hasPrice = computed(
      () => props.minPrice !== null && props.maxPrice !== null && props.maxPrice !== 0
    );
    const getCategory = async () => {
      const { data } = await CategoryApiService.getCategoryById(
        selectedCategoryId.value,
        {
          limit: 20
        }
      );
      return data.data.aggs;
    };
    const clearPriceValue = () => {
      emit("clearPriceFilter");
    };
    const createFilterList = (filters) => {
      const newFilterArr = [];
      const localFilters = {
        defaultMinPriceValue: 0,
        defaultMaxPriceValue: 0,
        minGeneralPrice: 0,
        maxGeneralPrice: 0,
        isCategoryIdFilter: false,
        isDiscountFilter: false
      };
      if (Array.isArray(filters) && (filters == null ? void 0 : filters.length)) {
        filters.forEach((filter) => {
          if (filter.id === "min_price_general") {
            localFilters.defaultMinPriceValue = +filter.value;
          }
          if (filter.id === "max_price_general") {
            localFilters.defaultMaxPriceValue = +filter.value;
          }
          if (filter.id === "min_price") {
            localFilters.minGeneralPrice = +filter.value;
          }
          if (filter.id === "max_price") {
            localFilters.maxGeneralPrice = +filter.value;
          }
          if (filter.id !== "category_id" && !`${filter.id}`.includes("min_price") && !`${filter.id}`.includes("max_price") && filter.buckets && filter.buckets.length > 0) {
            if (filter.id === "color" || filter.id === "vendor") {
              const filterName = filter.name.toLowerCase();
              if (filterName === "color" || filterName === "brand") {
                filter.name = i18n.t(filterName);
              }
            }
            newFilterArr.push(filter);
          }
          if (filter.id === "category_id") {
            localFilters.isCategoryIdFilter = true;
          }
          if (filter.id === "discount" && filter.value > 0) {
            localFilters.isDiscountFilter = true;
          }
        });
      }
      defaultMinPriceValue.value = localFilters.defaultMinPriceValue;
      defaultMaxPriceValue.value = localFilters.defaultMaxPriceValue;
      minGeneralPrice.value = localFilters.minGeneralPrice;
      maxGeneralPrice.value = localFilters.maxGeneralPrice;
      isCategoryIdFilter.value = localFilters.isCategoryIdFilter;
      isDiscountFilter.value = localFilters.isDiscountFilter;
      updateFiltersLength(newFilterArr);
      if (minGeneralPrice.value <= 0) {
        minGeneralPrice.value = defaultMinPriceValue.value;
      }
      if (maxGeneralPrice.value <= 0) {
        maxGeneralPrice.value = defaultMaxPriceValue.value;
      }
      return newFilterArr;
    };
    const isPriceFilterVisible = computed(
      () => props.maxPrice > 0 || defaultMaxPriceValue.value > 0
    );
    const isCategoryFilterVisible = computed(() => isCategoryIdFilter.value);
    const sortFilter = (filters) => {
      mobFilterList.value = createFilterList(filters);
    };
    const actualFilters = computed(() => {
      if (props.categoryId) {
        getCategory().then((res) => {
          sortFilter(res);
        });
      } else {
        sortFilter(props.filters);
      }
      return createFilterList(props.filters);
    });
    const updateFiltersLength = (arr) => {
      let { length } = arr;
      if (isPriceFilterVisible.value) {
        length += 1;
      }
      if (isCategoryFilterVisible.value) {
        length += 1;
      }
      emit("updateFiltersLength", length);
    };
    const formatPrice = (price) => `${formatPriceWithSpaces(price)} ${currencyMark.value}`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FilterCategories = _sfc_main$2;
      const _component_FilterItemPrice = _sfc_main$3$1;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filters" }, _attrs))} data-v-ad86ea65><button class="filters_toggle" data-v-ad86ea65>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "filters_toggle-icon",
        icon: "filterIcon"
      }, null, _parent));
      _push(` Add filter </button><div class="${ssrRenderClass([{ opened: unref(isOpened) }, "filters_content"])}" data-v-ad86ea65><button class="filters_close" data-v-ad86ea65>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "close" }, null, _parent));
      _push(`</button><span class="filters_mobile-title" data-v-ad86ea65>${ssrInterpolate(_ctx.$t("filter"))}</span>`);
      if (__props.filterSelectedTags.length > 0 || unref(hasPrice)) {
        _push(`<div class="filters_header" data-v-ad86ea65><div class="filters_header-filter" data-v-ad86ea65><span class="filters_title" data-v-ad86ea65>${ssrInterpolate(_ctx.$t("filter_by"))}</span><button class="filters_clear" data-v-ad86ea65>${ssrInterpolate(_ctx.$t("clear_all"))}</button></div><div class="filters_tags" data-v-ad86ea65><!--[-->`);
        ssrRenderList(__props.filterSelectedTags, (item) => {
          _push(ssrRenderComponent(_sfc_main$1$1, {
            key: item.id,
            class: "filters_selected-tag",
            closable: "",
            "onClick:close": ($event) => _ctx.$emit("onRemoveTag", item.id)
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
          _push(ssrRenderComponent(_sfc_main$1$1, {
            class: "filters_selected-tag",
            closable: "",
            "onClick:close": clearPriceValue
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(`${formatPrice(__props.minPrice)} - ${formatPrice(__props.maxPrice)}`)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(`${formatPrice(__props.minPrice)} - ${formatPrice(__props.maxPrice)}`), 1)
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
      _push(`<div class="filters_items" data-v-ad86ea65><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        _push(`<div class="filters_item" data-v-ad86ea65>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(link.href),
          class: "filters_link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                icon: "chevronLeftIcon",
                class: "filters_icon"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-ad86ea65${_scopeId}>${ssrInterpolate(link.text)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  icon: "chevronLeftIcon",
                  class: "filters_icon"
                }),
                createVNode("span", null, toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (((_a = __props.categories) == null ? void 0 : _a.length) > 0) {
        _push(ssrRenderComponent(_component_FilterCategories, {
          "filter-items": __props.categories,
          "active-category": (_b = __props.selectedFilters.category_id) == null ? void 0 : _b[0],
          onOnFilterChange: ($event) => _ctx.$emit("onFilterChange", $event)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(actualFilters), (filter) => {
        _push(ssrRenderComponent(unref(_sfc_main$2$1), {
          key: filter.id,
          caption: filter.name,
          "filter-id": filter.id,
          "filter-name": filter.name,
          "filter-items": filter.buckets,
          checked: __props.selectedFilters[unref(getFilterTag)(filter.id, filter.name, true)],
          "is-default-collapsed": __props.isDefaultCollapsed,
          onOnFilterChange: ($event) => _ctx.$emit("onFilterChange", $event)
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(isPriceFilterVisible)) {
        _push(ssrRenderComponent(_component_FilterItemPrice, {
          "min-price": __props.minPrice,
          "default-min-price": unref(defaultMinPriceValue),
          "max-price": __props.maxPrice,
          "default-max-price": unref(defaultMaxPriceValue),
          "is-loading": __props.loading,
          onUpdatePriceFilter: ($event) => _ctx.$emit("updatePriceFilter", $event)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="filters_button" data-v-ad86ea65>`);
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/filters/filters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ad86ea65"]]);
const sortSettings = {
  cheap: {
    "order[price]": "asc",
    "order[total_popular]": "desc"
  },
  expensive: {
    "order[price]": "desc",
    "order[total_popular]": "desc"
  },
  in_stock: {
    "order[stock]": "desc",
    "order[total_popular]": "desc"
  },
  preorders: {
    "order[stock]": "asc",
    "order[total_popular]": "desc"
  },
  total_popular: {
    "order[total_popular]": "desc"
  }
};
const useFilter = () => {
  const route = useRoute();
  const router = useRouter();
  const selectedFilters = ref({});
  const sortValue = ref(sortSettings.total_popular);
  const sortName = ref("total_popular");
  const sortRouteQuery = ref({});
  const historyFilters = ref(null);
  const onlyDiscount = ref(null);
  const minPriceVal = ref(null);
  const maxPriceVal = ref(null);
  const queriesFromURL = ref({});
  const { addFilterPrefixToKey, getKeyWithoutPrefix, isExistFilterPrefix } = useFilterUtils();
  const changeSorting = (data) => {
    sortValue.value = sortSettings[data];
    sortName.value = data;
  };
  const setSortQuery = () => {
    sortRouteQuery.value = {
      sort: sortName.value
    };
  };
  const anotherQueriesForRoute = computed(
    () => Object.keys(route.query).filter((key) => {
      if (!isExistFilterPrefix(key) && key.toLowerCase() !== "text" && key.toLowerCase() !== "page")
        return route.query[key];
    }).reduce((acc, key) => {
      acc[key] = route.query[key];
      return acc;
    }, {})
  );
  watch(
    () => route.query,
    () => {
      Object.keys(route.query).forEach((key) => {
        if (isExistFilterPrefix(key) === false) return;
        const slicedKey = getKeyWithoutPrefix(key);
        if (slicedKey) {
          queriesFromURL.value[slicedKey] = route.query[key];
        }
        if (slicedKey === "price[to]") {
          maxPriceVal.value = route.query[key];
        }
        if (slicedKey === "price[from]") {
          minPriceVal.value = route.query[key];
        }
      });
    },
    { immediate: true }
  );
  const allFilters = ref(null);
  const limit = 20;
  const updateSelectedFilters = (payload) => {
    const filterName = typeof payload.id === "string" ? payload.id : payload.name;
    selectedFilters.value = {
      ...selectedFilters.value,
      [getFilterTag(filterName)]: payload.value
    };
  };
  const updateOnlyDiscount = (value) => {
    onlyDiscount.value = value.discount;
  };
  const updateSelectedFiltersMobile = (payload) => {
    Object.keys(payload).forEach((key) => {
      selectedFilters.value = {
        ...selectedFilters.value,
        [key]: payload[key]
      };
    });
  };
  const setAllFilters = (payload) => {
    allFilters.value = payload;
  };
  const setPriceFilterValue = (value) => {
    minPriceVal.value = value.min;
    maxPriceVal.value = value.max;
  };
  const createFiltersHistory = (isOpen) => {
    if (!isOpen) {
      selectedFilters.value = historyFilters.value;
      historyFilters.value = null;
      return;
    }
    historyFilters.value = selectedFilters.value;
  };
  const clearFilter = () => {
    onlyDiscount.value = null;
    selectedFilters.value = {};
  };
  const removeFilterById = (idFrom) => {
    let newObject = { ...selectedFilters.value };
    Object.keys(selectedFilters.value).forEach((key) => {
      newObject = {
        ...newObject,
        [key]: selectedFilters.value[key].filter((id) => Number(id) !== idFrom)
      };
    });
    selectedFilters.value = { ...newObject };
  };
  const getFilterQuery = (key) => {
    var _a;
    const queryValues = [];
    (_a = queriesFromURL.value[key]) == null ? void 0 : _a.split(",").forEach((query) => {
      if (+query) {
        queryValues.push(+query);
      }
    });
    if (queryValues.length) {
      return { [key]: queryValues };
    }
    return {};
  };
  const initFilter = () => {
    if (Object.keys(queriesFromURL.value).length !== 0) {
      const keys = Object.keys(queriesFromURL.value);
      keys.forEach((key) => {
        if (key.toLowerCase() !== "page" && key.toLowerCase() !== "text" && key.toLowerCase() !== "price[from]" && key.toLowerCase() !== "price[to]") {
          selectedFilters.value = {
            ...selectedFilters.value,
            ...getFilterQuery(key)
          };
          if (key.toLocaleLowerCase() === "discount") {
            onlyDiscount.value = queriesFromURL.value[key];
          }
        }
      });
    }
  };
  const filterIdsForFetch = computed(() => {
    const arrayIds = ref([]);
    Object.keys(selectedFilters.value).forEach((key) => {
      if (key !== "vendor" && key !== "max_price" && key !== "min_price") {
        arrayIds.value = arrayIds.value.concat(selectedFilters.value[key]);
      }
    });
    return arrayIds.value;
  });
  const vendorIdsForFetch = computed(() => {
    const arrayIds = ref([]);
    Object.keys(selectedFilters.value).forEach((key) => {
      if (key === "vendor") {
        arrayIds.value = arrayIds.value.concat(selectedFilters.value[key]);
      }
    });
    return arrayIds.value;
  });
  const categoriesIdsForFetch = computed(() => {
    const arrayIds = ref([]);
    Object.keys(selectedFilters.value).forEach((key) => {
      if (key === "category_id") {
        arrayIds.value = arrayIds.value.concat(selectedFilters.value[key]);
      }
    });
    return arrayIds.value;
  });
  const colorIdsForFetch = computed(() => {
    const arrayIds = ref([]);
    Object.keys(selectedFilters.value).forEach((key) => {
      if (key === "color") {
        arrayIds.value = arrayIds.value.concat(selectedFilters.value[key]);
      }
    });
    return arrayIds.value;
  });
  const filterSelectedTags = computed(() => {
    const result = [];
    Object.entries(selectedFilters.value).forEach(([key, ids]) => {
      var _a;
      const findInFilter = (_a = allFilters.value) == null ? void 0 : _a.find((item) => {
        const normalizedId = `${item.id}`.toLowerCase().replace(/\s+/g, "_");
        return normalizedId === key || item.additional && `${item.additional}`.toLowerCase().replace(/\s+/g, "_") === key;
      });
      if (findInFilter) {
        ids.forEach((id) => {
          var _a2;
          const bucket = (_a2 = findInFilter.buckets) == null ? void 0 : _a2.find((bucket2) => {
            return bucket2.id === Number(id);
          });
          if (bucket) {
            result.push(bucket);
          }
        });
      }
    });
    return result;
  });
  const filterQueryParamsForRoute = computed(() => {
    const arrayParams = ref({});
    Object.keys(selectedFilters.value).forEach((key) => {
      arrayParams.value = {
        ...arrayParams.value,
        ...selectedFilters.value[key] && {
          [addFilterPrefixToKey(key)]: selectedFilters.value[key].length ? selectedFilters.value[key].join() : selectedFilters.value[key]
        }
      };
    });
    return arrayParams.value;
  });
  const getQueryParams = (page = 1) => {
    const filtersData = [];
    Object.keys(selectedFilters.value).forEach((key) => {
      if (key !== "category_id" && key !== "vendor" && key !== "price[to]" && key !== "price[from]" && key !== "discount" && key !== "color") {
        filtersData.push(selectedFilters.value[key]);
      }
    });
    return {
      filtersData,
      ...vendorIdsForFetch.value.length !== 0 && {
        vendor: vendorIdsForFetch.value
      },
      ...categoriesIdsForFetch.value.length !== 0 && {
        category_id: categoriesIdsForFetch.value
      },
      ...colorIdsForFetch.value.length !== 0 && {
        color: colorIdsForFetch.value
      },
      page,
      limit,
      ...onlyDiscount.value && { discount: onlyDiscount.value },
      ...minPriceVal.value && { "price[from]": minPriceVal.value },
      ...maxPriceVal.value && { "price[to]": maxPriceVal.value }
    };
  };
  const addQueryToRoute = async (page = 1) => {
    var _a;
    if (!onlyDiscount.value) {
      selectedFilters.value.discount = [];
    }
    selectedFilters.value = useDeleteEmptyKeyFromObject(selectedFilters.value);
    const searchQuery = {};
    const priceFromKey = addFilterPrefixToKey("price[from]");
    const priceToKey = addFilterPrefixToKey("price[to]");
    const discountToKey = addFilterPrefixToKey("discount");
    const queryRouteParams = {
      ...searchQuery,
      ...((_a = Object.keys(anotherQueriesForRoute.value)) == null ? void 0 : _a.length) !== 0 && anotherQueriesForRoute.value,
      ...page !== 1 && { page },
      ...Object.keys(filterQueryParamsForRoute.value).length !== 0 && filterQueryParamsForRoute.value,
      ...minPriceVal.value && {
        [priceFromKey]: minPriceVal.value
      },
      ...maxPriceVal.value && {
        [priceToKey]: maxPriceVal.value
      },
      ...onlyDiscount.value && { [discountToKey]: onlyDiscount.value },
      ...sortRouteQuery.value
    };
    await router.push({
      query: queryRouteParams
    });
  };
  initFilter();
  return {
    onlyDiscount,
    allFilters,
    selectedFilters,
    filterSelectedTags,
    filterIdsForFetch,
    updateSelectedFilters,
    updateSelectedFiltersMobile,
    addQueryToRoute,
    setAllFilters,
    removeFilterById,
    createFiltersHistory,
    getQueryParams,
    clearFilter,
    minPriceVal,
    maxPriceVal,
    setPriceFilterValue,
    updateOnlyDiscount,
    changeSorting,
    sortValue,
    setSortQuery,
    sortName
  };
};
const _sfc_main = {
  __name: "subcategory-grid",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    },
    slug: {
      type: String,
      default: ""
    },
    subcategory: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    withCategoriesFilter: {
      type: Boolean,
      default: false
    }
  },
  emits: ["getSubcategoryData", "onChangePage"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const subcategorySidebarComponent = ref(null);
    const dropdownSortItems = ref([
      { label: i18n.t("search_sort_relevance"), value: "total_popular" },
      { label: i18n.t("search_sort_cheap"), value: "cheap" },
      { label: i18n.t("search_sort_expensive"), value: "expensive" }
    ]);
    const totalProducts = computed(
      () => props.subcategory.productsMetaCount || props.subcategory.products_meta_count
    );
    const currentPageModel = computed({
      get() {
        return props.currentPage;
      },
      set(value) {
        handleChangePage(Number(value));
      }
    });
    const {
      selectedFilters,
      filterSelectedTags,
      updateSelectedFilters,
      addQueryToRoute,
      setAllFilters,
      removeFilterById,
      clearFilter,
      getQueryParams,
      setPriceFilterValue,
      minPriceVal,
      maxPriceVal,
      changeSorting,
      sortName,
      sortValue
    } = useFilter();
    const handleChangePage = (page) => {
      addQueryToRoute(page);
      emit("getSubcategoryData", {
        params: { ...sortValue.value, ...getQueryParams(page) }
      });
    };
    const handleChangePriceFilter = ({ min, max }) => {
      setPriceFilterValue({ min, max });
      addQueryToRoute();
      emit("getSubcategoryData", {
        params: { ...sortValue.value, ...getQueryParams() }
      });
    };
    const handleClearPriceFilter = () => {
      handleChangePriceFilter({ min: null, max: null });
    };
    const handleChangeFilters = async (payload) => {
      if (!payload.id) {
        setPriceFilterValue(payload);
      } else {
        updateSelectedFilters(payload);
      }
      await addQueryToRoute();
      emit("getSubcategoryData", {
        params: { ...sortValue.value, ...getQueryParams() }
      });
    };
    const clearAllFilter = async () => {
      handleClearPriceFilter();
      await clearFilter();
      await addQueryToRoute();
      emit("getSubcategoryData", { params: getQueryParams() });
    };
    const handleRemoveTag = async (id) => {
      if (id !== "all") {
        removeFilterById(id);
      } else {
        const minMax = subcategorySidebarComponent.value.clearPriceValue();
        await setPriceFilterValue(minMax);
        await clearFilter();
      }
      await addQueryToRoute();
      emit("getSubcategoryData", { params: getQueryParams() });
    };
    const tempFilters = computed(() => {
      const featuresFilters = props.subcategory.features;
      featuresFilters.sort((a, b) => a.sort - b.sort);
      const tempFilters2 = featuresFilters.reduce((acc, current) => {
        const existing = acc.find((item) => item.additional === current.additional);
        if (existing) {
          const newBuckets = /* @__PURE__ */ new Set([...existing.buckets, ...current.buckets]);
          existing.buckets = Array.from(newBuckets);
        } else {
          acc.push(current);
        }
        return acc;
      }, []);
      return tempFilters2 || [];
    });
    const filters = computed(() => {
      const aggsFilters = props.subcategory.aggs;
      aggsFilters.sort((a, b) => a.sort - b.sort);
      if (tempFilters.value.length && !props.isParentCategory) {
        return [...aggsFilters, ...tempFilters.value];
      }
      return aggsFilters;
    });
    const handleSortChange = (value) => {
      changeSorting(value);
      addQueryToRoute(1);
      const querySort = {
        params: { ...sortValue.value, ...getQueryParams(), page: 1 }
      };
      emit("getSubcategoryData", querySort);
    };
    watch(
      () => filters.value,
      (value) => {
        setAllFilters(value);
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Filters = __nuxt_component_0;
      const _component_CarouselProduct = __nuxt_component_0$1;
      const _component_Pagination = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "subcategory-grid",
        products: __props.products,
        loading: __props.loading,
        total: unref(totalProducts),
        "dropdown-sort-items": unref(dropdownSortItems),
        "sort-name": unref(sortName),
        "filter-selected-tags": unref(filterSelectedTags),
        "min-price": unref(minPriceVal),
        "max-price": unref(maxPriceVal),
        onOnRemoveTag: handleRemoveTag,
        onClearAllFilter: clearAllFilter,
        onHandleSortChange: handleSortChange,
        onClearPriceFilter: handleClearPriceFilter
      }, {
        filter: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if (unref(filters)) {
              _push2(ssrRenderComponent(_component_Filters, {
                filters: unref(filters),
                categories: __props.withCategoriesFilter ? (_b = (_a = __props.subcategory) == null ? void 0 : _a.navigationMenuData) == null ? void 0 : _b.list : [],
                "selected-filters": unref(selectedFilters),
                "filter-selected-tags": unref(filterSelectedTags),
                loading: __props.loading,
                "is-default-collapsed": true,
                "min-price": unref(minPriceVal),
                "max-price": unref(maxPriceVal),
                links: __props.links,
                onOnRemoveTag: handleRemoveTag,
                onOnFilterChange: handleChangeFilters,
                onClearAllFilter: clearAllFilter,
                onClearPriceFilter: handleClearPriceFilter,
                onUpdatePriceFilter: handleChangePriceFilter
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(filters) ? (openBlock(), createBlock(_component_Filters, {
                key: 0,
                filters: unref(filters),
                categories: __props.withCategoriesFilter ? (_d = (_c = __props.subcategory) == null ? void 0 : _c.navigationMenuData) == null ? void 0 : _d.list : [],
                "selected-filters": unref(selectedFilters),
                "filter-selected-tags": unref(filterSelectedTags),
                loading: __props.loading,
                "is-default-collapsed": true,
                "min-price": unref(minPriceVal),
                "max-price": unref(maxPriceVal),
                links: __props.links,
                onOnRemoveTag: handleRemoveTag,
                onOnFilterChange: handleChangeFilters,
                onClearAllFilter: clearAllFilter,
                onClearPriceFilter: handleClearPriceFilter,
                onUpdatePriceFilter: handleChangePriceFilter
              }, null, 8, ["filters", "categories", "selected-filters", "filter-selected-tags", "loading", "min-price", "max-price", "links"])) : createCommentVNode("", true)
            ];
          }
        }),
        product: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.products, (product) => {
              _push2(ssrRenderComponent(_component_CarouselProduct, {
                key: product.id,
                product,
                type: "product"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product) => {
                return openBlock(), createBlock(_component_CarouselProduct, {
                  key: product.id,
                  product,
                  type: "product"
                }, null, 8, ["product"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.totalPages > 1) {
        _push(ssrRenderComponent(_component_Pagination, {
          modelValue: unref(currentPageModel),
          "onUpdate:modelValue": ($event) => isRef(currentPageModel) ? currentPageModel.value = $event : null,
          length: __props.totalPages,
          disabled: __props.loading,
          class: "subcategory-grid_pagination"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/subcategory-grid/subcategory-grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useFetchCategory = () => {
  const allCategories = ref(null);
  const categoryBySlug = ref(null);
  const brandBySlug = ref(null);
  const limit = ref(20);
  const fetchError = ref(null);
  const fetchCategories = async (params = {}) => {
    const categories = await CategoryApiService.getCategories(params);
    allCategories.value = categories;
  };
  const totalPages = computed(() => {
    if (!categoryBySlug.value) {
      return null;
    }
    return Math.ceil(Number(categoryBySlug.value.productsMetaCount) / Number(limit.value));
  });
  const getFilters = (filtersData) => {
    let result = "";
    if (filtersData) {
      filtersData.forEach((item) => {
        if (item) {
          result += `filters[]=${item.join(",")}&`;
        }
      });
    }
    return result;
  };
  const fetchBandsBySlug = async (slug, params, filtersData) => {
    const filters = getFilters(filtersData);
    const { data: brand, error } = await CategoryApiService.getBrandsBySlug(slug, filters, {
      ...params,
      limit: limit.value
    });
    if (error) {
      fetchError.value = error;
    }
    brandBySlug.value = brand.data;
  };
  const prepareParentData = (parent) => {
    if (parent && parent.length > 0) {
      parent == null ? void 0 : parent.forEach((item) => {
        item.type = "parent";
        item.isActiveCategory = false;
      });
      parent[parent.length - 1].isActiveCategory = true;
    }
    return parent;
  };
  const findCategoriesByIds = (categories = [], ids) => {
    if (!categories) {
      return [];
    }
    const idsSet = new Set(ids);
    const filteredCategories = categories.filter((category) => idsSet.has(category.id));
    filteredCategories.forEach((category) => {
      if (category.children && category.children.length > 0) {
        category.children = findCategoriesByIds(category.children, ids);
      }
    });
    return filteredCategories;
  };
  const findCategoryByIdInTree = (categories = [], id, parents = []) => {
    let result = { foundCategory: null, parents: null };
    if (!categories) {
      return result;
    }
    const foundCategory = categories.find((category) => category.id === id);
    if (foundCategory) {
      return { foundCategory, parents };
    }
    categories.some((category) => {
      if (category.children && category.children.length > 0) {
        const newResult = findCategoryByIdInTree(category.children, id, [
          ...parents,
          category
        ]);
        if (newResult.foundCategory) {
          result = newResult;
          return true;
        }
      }
      return false;
    });
    return result;
  };
  const extractIdsFromAggs = (aggs, aggId, parentIds = []) => {
    const argument = aggs.find((a) => a.id === aggId);
    if (!argument || !argument.buckets) {
      return [];
    }
    return argument.buckets.filter((bucket) => !parentIds.includes(bucket.id)).map((bucket) => bucket.id);
  };
  const prepareDataForPromo = (params, branchCategories, category) => {
    const { category_id: [filterCategoryId] = [] } = params;
    let activeFilterCategory = null;
    let activeFilterCategoryParents = [];
    if (filterCategoryId && filterCategoryId > 0) {
      const result = findCategoryByIdInTree(
        allCategories.value,
        filterCategoryId
      );
      if (result) {
        activeFilterCategory = result.foundCategory ? { ...result.foundCategory } : null;
        activeFilterCategoryParents = Array.isArray(result.parents) ? [...result.parents] : null;
      }
    }
    const parentIds = branchCategories.map((item) => item.id);
    const categoryIds = extractIdsFromAggs(
      category.aggs,
      "category_id",
      parentIds
    );
    const categoriesData = activeFilterCategory ? activeFilterCategory.children : allCategories.value;
    const filteredTreeOfCategories = findCategoriesByIds(categoriesData, [
      ...categoryIds,
      filterCategoryId != null ? filterCategoryId : -1
    ]);
    const children = filteredTreeOfCategories.map((child) => {
      var _a;
      return {
        ...child,
        type: "children",
        subchildren: ((_a = child.children) == null ? void 0 : _a.map((subChild) => ({
          ...subChild,
          type: "sub-children"
        }))) || []
      };
    });
    let updatedParent = branchCategories;
    if (activeFilterCategory && activeFilterCategoryParents) {
      activeFilterCategoryParents.forEach((item) => {
        item.actionType = "filter";
      });
      const parentLength = branchCategories.length;
      updatedParent = [
        ...branchCategories,
        ...activeFilterCategoryParents,
        activeFilterCategory
      ];
      if (parentLength > 0)
        updatedParent[parentLength - 1].actionType = "clear-filter";
    }
    return [
      ...prepareParentData(updatedParent),
      ...children
    ];
  };
  const fetchCategoryBySlug = async (slug, params, isPromo) => {
    var _a2;
    var _a;
    if (!allCategories.value || !allCategories.value.length) {
      await fetchCategories();
    }
    const { filtersData, ...otherParams } = params;
    const filters = getFilters(filtersData);
    const apiMethod = isPromo ? CategoryApiService.getPromoCategoryBySlug : CategoryApiService.getCategoryBySlug;
    const { data: category, error } = await apiMethod(slug, filters, {
      ...otherParams,
      limit: limit.value
    });
    if (error) {
      fetchError.value = error;
    }
    const branchCategories = (_a2 = (_a = category.branch) == null ? void 0 : _a.reverse().filter((item) => Boolean(item.catalogId))) != null ? _a2 : [];
    categoryBySlug.value = {
      ...category,
      navigationMenuData: {
        list: isPromo ? prepareDataForPromo(params, branchCategories, category) : category.children,
        childCount: category.children.length
      },
      "order[stock]": "desc"
    };
  };
  return {
    allCategories,
    fetchCategoryBySlug,
    categoryBySlug,
    brandBySlug,
    totalPages,
    fetchCategories,
    fetchBandsBySlug,
    fetchError
  };
};

export { _sfc_main as _, useFetchCategory as a, useFilter as u };
//# sourceMappingURL=useFetchCategories-BYKjNStR.mjs.map
