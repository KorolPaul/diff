import { _ as _sfc_main$5 } from './TextInput-HaUa076w.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, watch, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { u as useCurrencyMark } from './useCurrencyMark-7LtpyYD6.mjs';
import { _ as _sfc_main$4 } from './UiCheckbox-rg4DHWMb.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_1 } from './UiSelect-BqVOhDGy.mjs';
import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { u as useLoadingStore } from './loading-CMY4YQWC.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';

const _sfc_main$3 = {
  __name: "filter-item-price",
  __ssrInlineRender: true,
  props: {
    minPrice: {
      type: [Number, null],
      default: null
    },
    maxPrice: {
      type: [Number, null],
      default: null
    },
    defaultMinPrice: {
      type: Number,
      default: 0
    },
    defaultMaxPrice: {
      type: Number,
      default: 0
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["updatePriceFilter"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isCollapsed = ref(false);
    const filterPriceRange = ref({
      min: props.minPrice,
      max: props.maxPrice
    });
    const { currencyMark } = useCurrencyMark("", true);
    const checkDigit = (e) => {
      if (e.key.length === 1 && isNaN(Number(e.key))) {
        e.preventDefault();
      }
    };
    const changePriceByTextField = ($event, priceKey) => {
      if (!filterPriceRange.value.min && !filterPriceRange.value.max) {
        emit("updatePriceFilter", { min: null, max: null });
        return;
      }
      const priceValue = $event.target.value ? parseInt($event.target.value, 10) : 0;
      const isPriceKeyMin = priceKey === "min";
      const priceInner = {
        min: Number(filterPriceRange.value.min),
        max: Number(filterPriceRange.value.max)
      };
      const isOutOfBounds = priceValue > props.defaultMaxPrice;
      if (isOutOfBounds) {
        const priceKeyValue = isPriceKeyMin ? props.defaultMinPrice : props.defaultMaxPrice;
        priceInner[priceKey] = priceKeyValue;
        filterPriceRange.value[priceKey] = priceKeyValue;
      }
      if (filterPriceRange.value.min && filterPriceRange.value.max === null) {
        priceInner.max = props.defaultMaxPrice;
      }
      if (priceInner.min >= priceInner.max) {
        if (priceInner.max) {
          priceInner.min = priceInner.max;
          filterPriceRange.value = priceInner;
        } else {
          priceInner.max = props.defaultMaxPrice;
        }
      }
      emit("updatePriceFilter", { ...priceInner });
    };
    watch([() => props.minPrice, () => props.maxPrice], () => {
      if (props.maxPrice === null && props.maxPrice === null) {
        filterPriceRange.value = { min: null, max: null };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TextInput = _sfc_main$5;
      _push(`<!--[--><button class="filter-item-price_caption">${ssrInterpolate(_ctx.$t("price"))}, ${ssrInterpolate(unref(currencyMark))}</button><div style="${ssrRenderStyle(!unref(isCollapsed) ? null : { display: "none" })}"><p class="filter-item-price_description">${ssrInterpolate(_ctx.$t("highest_price"))} ${ssrInterpolate(__props.defaultMaxPrice)} ${ssrInterpolate(unref(currencyMark))}</p><div class="filter-item-price_inputs">`);
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(filterPriceRange).min,
        "onUpdate:modelValue": ($event) => unref(filterPriceRange).min = $event,
        class: "filter-item-price_input",
        label: _ctx.$t("from"),
        disabled: __props.isLoading,
        onKeydown: checkDigit,
        onBlur: ($event) => changePriceByTextField($event, "min"),
        onKeyup: ($event) => changePriceByTextField($event, "min")
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(filterPriceRange).max,
        "onUpdate:modelValue": ($event) => unref(filterPriceRange).max = $event,
        class: "filter-item-price_input",
        label: _ctx.$t("to"),
        disabled: __props.isLoading,
        onKeydown: checkDigit,
        onBlur: ($event) => changePriceByTextField($event, "max"),
        onKeyup: ($event) => changePriceByTextField($event, "max")
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/filter-item/filter-item-price.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const containsAlphabetic = (str) => new RegExp("\\p{L}", "u").test(str);
const getFilterTag = (caption, auxiliaryCaption = "", findAlphabeticValue = false) => {
  let valueToUse = `${caption}`;
  if (findAlphabeticValue) {
    const captionHasAlphabetic = containsAlphabetic(`${caption}`);
    const auxiliaryHasAlphabetic = auxiliaryCaption && containsAlphabetic(`${auxiliaryCaption}`);
    if (auxiliaryHasAlphabetic && !captionHasAlphabetic) {
      valueToUse = `${auxiliaryCaption}`;
    }
  }
  return valueToUse.toLowerCase().split(" ").join("_");
};
const _sfc_main$2 = {
  __name: "filter-item",
  __ssrInlineRender: true,
  props: {
    caption: {
      type: String,
      default: ""
    },
    filterId: {
      type: [String, Number],
      default: ""
    },
    filterName: {
      type: String,
      default: ""
    },
    filterItems: {
      type: Array,
      default: () => []
    },
    checked: {
      type: Array,
      default: () => []
    },
    isLoadingOnChangePage: {
      type: Boolean,
      default: false
    },
    isDefaultCollapsed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["onFilterChange", "onDescriptionItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    const isCollapsed = ref(props.isDefaultCollapsed);
    const isDocCountEmpty = (item) => {
      return !item.docCountWithUserFilter && typeof item.docCountWithUserFilter === "number" && !modelChecked.value[item.id];
    };
    const updateModelChecked = (checked) => {
      const checkedItems = checked.map(String) ? checked.map(String) : [String(checked)];
      const checkedSet = new Set(checkedItems);
      return props.filterItems.reduce((acc, item) => {
        const itemId = String(item.id);
        acc[item.id] = checkedSet.has(itemId);
        return acc;
      }, {});
    };
    const modelChecked = ref(updateModelChecked(props.checked));
    const checkedCount = computed(() => props.checked.length || 0);
    const filterItemsComputed = computed(
      () => isOpen.value ? props.filterItems : props.filterItems.slice(0, 10)
    );
    const setCountItems = (item) => typeof item.docCount === "number" ? `(${item.docCountWithUserFilter || item.docCount})` : "";
    watch(
      () => modelChecked.value,
      (newValue) => {
        const selectedValues = Object.keys(newValue).filter((key) => newValue[key]);
        if (selectedValues.length !== props.checked.length) {
          emit("onFilterChange", {
            id: props.filterId,
            name: props.filterName,
            value: selectedValues
          });
        }
      },
      { deep: true }
    );
    watch(
      () => props.checked,
      () => {
        modelChecked.value = updateModelChecked(props.checked);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCheckbox = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-item" }, _attrs))}><button class="filter-item_caption">${ssrInterpolate(__props.caption)} ${ssrInterpolate(Boolean(unref(checkedCount)) ? `(${unref(checkedCount)})` : "")}</button><div style="${ssrRenderStyle(!unref(isCollapsed) ? null : { display: "none" })}" class="filter-item_content"><!--[-->`);
      ssrRenderList(unref(filterItemsComputed), (item) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiCheckbox, {
          modelValue: unref(modelChecked)[item.id],
          "onUpdate:modelValue": ($event) => unref(modelChecked)[item.id] = $event,
          name: `${__props.caption}-${item.id}`,
          disabled: __props.isLoadingOnChangePage || isDocCountEmpty(item) || __props.disabled,
          small: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass({
                "filter-item_label": isDocCountEmpty(item) || __props.disabled
              })}"${_scopeId}>${ssrInterpolate(item.name)} ${ssrInterpolate(setCountItems(item))}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: {
                    "filter-item_label": isDocCountEmpty(item) || __props.disabled
                  }
                }, toDisplayString(item.name) + " " + toDisplayString(setCountItems(item)), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.description) {
          _push(`<button class="filter-item_description" type="button">${ssrInterpolate(item.description)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (__props.filterItems.length > 10) {
        _push(`<div class="filter-item_action">${ssrInterpolate(unref(isOpen) ? `- ${_ctx.$t("show_less")}` : `+ ${_ctx.$t("show_more")}`)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/filter-item/filter-item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiChip",
  __ssrInlineRender: true,
  props: {
    closable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true }
  },
  emits: ["click:close", "update:modelValue", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    computed(() => !props.disabled);
    const canClose = computed(() => Boolean(props.closable));
    const chipClasses = computed(() => ({
      chip: true,
      chip__disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (_ctx.modelValue) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(chipClasses),
          disabled: props.disabled
        }, _attrs))}><div class="chip_content">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
        if (unref(canClose)) {
          _push(`<button class="chip_close-button" type="button">`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "chip_close-icon",
            icon: "closeThin"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UIChip/UiChip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useDeleteEmptyKeyFromObject = (object) => {
  const currentObject = { ...object };
  Object.keys(currentObject).forEach((key) => {
    if (currentObject[key] === null || currentObject[key] === void 0 || currentObject[key].length === 0) {
      delete currentObject[key];
    }
  });
  return currentObject;
};
const filterPrefix = "filter_";
const useFilterUtils = () => {
  const addFilterPrefixToKey = (key) => `${filterPrefix}${key}`;
  const isExistFilterPrefix = (key) => key.includes(filterPrefix) && key.length > filterPrefix.length;
  const getKeyWithoutPrefix = (key) => key.slice(filterPrefix.length);
  return {
    getKeyWithoutPrefix,
    isExistFilterPrefix,
    addFilterPrefixToKey
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products-grid",
  __ssrInlineRender: true,
  props: {
    products: {},
    loading: { type: Boolean },
    total: {},
    dropdownSortItems: {},
    filterSelectedTags: {},
    sortName: {},
    minPrice: {},
    maxPrice: {}
  },
  emits: [
    "onRemoveTag",
    "clearAllFilter",
    "clearPriceFilter",
    "handleSortChange"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { currencyMark } = useCurrencyMark("", true);
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const currentSortName = ref(props.sortName);
    const computedSortName = computed({
      get() {
        return currentSortName.value;
      },
      set(value) {
        currentSortName.value = value;
        emit("handleSortChange", value);
      }
    });
    const hasPrice = computed(
      () => (props.minPrice !== null || props.maxPrice !== null) && props.maxPrice !== 0
    );
    const formatPrice = (price) => `${formatPriceWithSpaces(price)} ${currencyMark.value}`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UiChip = _sfc_main$1;
      const _component_UiSelect = __nuxt_component_1;
      const _component_UiPagePreloader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-grid" }, _attrs))}><div class="products-grid_filter">`);
      ssrRenderSlot(_ctx.$slots, "filter", {}, null, _push, _parent);
      _push(`</div><div class="products-grid_content"><div class="products-grid_top-filter"><span class="products-grid_total">${ssrInterpolate(`${_ctx.total || 0} ${_ctx.$t("products")}`)}</span>`);
      if (((_a = _ctx.filterSelectedTags) == null ? void 0 : _a.length) > 0 || unref(hasPrice)) {
        _push(`<div class="products-grid_tags"><!--[-->`);
        ssrRenderList(_ctx.filterSelectedTags, (item) => {
          _push(ssrRenderComponent(_component_UiChip, {
            key: item.id,
            closable: "",
            disabled: "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
            "onClick:close": ($event) => _ctx.$emit("onRemoveTag", item.id, item.key)
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
            class: "filters_selected-tag",
            closable: "",
            disabled: "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
            "onClick:close": ($event) => _ctx.$emit("clearPriceFilter")
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = _ctx.dropdownSortItems) == null ? void 0 : _b.length) {
        _push(ssrRenderComponent(_component_UiSelect, {
          "model-value": unref(computedSortName),
          class: "products-grid_sort",
          "dropdown-class-name": "products-grid_sort-dropdown",
          options: _ctx.dropdownSortItems,
          disabled: "loading" in _ctx ? _ctx.loading : unref(useLoadingStore),
          "show-item-label": "",
          ellipsis: "",
          "show-active-icon": false,
          small: "",
          "onUpdate:modelValue": ($event) => computedSortName.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!("loading" in _ctx ? _ctx.loading : unref(useLoadingStore))) {
        _push(`<!--[-->`);
        if (_ctx.products.length) {
          _push(`<div class="products-grid_grid">`);
          ssrRenderSlot(_ctx.$slots, "product", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<div class="products-grid_empty"><span>${ssrInterpolate(_ctx.$t("product_not_found"))}</span><span>${ssrInterpolate(_ctx.$t("use_fewer_filters"))}</span> ${ssrInterpolate(" ")} <button class="products-grid_empty-button">${ssrInterpolate(_ctx.$t("clear_all"))}</button></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/product/components/products-grid/products-grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useDeleteEmptyKeyFromObject as a, _sfc_main$1 as b, _sfc_main$2 as c, _sfc_main$3 as d, getFilterTag as g, useFilterUtils as u };
//# sourceMappingURL=products-grid-BtcpmAB9.mjs.map
