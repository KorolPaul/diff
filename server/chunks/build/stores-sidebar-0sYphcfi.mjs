import { _ as _sfc_main$3 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1$1 } from './UiSelect-BqVOhDGy.mjs';
import { _ as __nuxt_component_1$2 } from './icon-_hjsSUWU.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, j as useProductStore, u as useRoute, k as __nuxt_component_6 } from './server.mjs';
import { _ as __nuxt_component_1$3 } from './store-services-DdIHLKVb.mjs';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
import humps from 'humps';
import { u as useFormatters } from './useFormatters-B4xJk29p.mjs';

var RangeLocationEnum = /* @__PURE__ */ ((RangeLocationEnum2) => {
  RangeLocationEnum2[RangeLocationEnum2["ALL_STORES"] = 0] = "ALL_STORES";
  RangeLocationEnum2[RangeLocationEnum2["FIVE"] = 5] = "FIVE";
  RangeLocationEnum2[RangeLocationEnum2["TEN"] = 10] = "TEN";
  RangeLocationEnum2[RangeLocationEnum2["TWENTY"] = 20] = "TWENTY";
  RangeLocationEnum2[RangeLocationEnum2["THIRTY"] = 30] = "THIRTY";
  return RangeLocationEnum2;
})(RangeLocationEnum || {});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "store-location-manager",
  __ssrInlineRender: true,
  props: {
    city: {},
    countShops: {},
    currentRange: {},
    cityName: {}
  },
  emits: ["changeRange", "changeLocation"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const RangeLocationLabels = {
      [RangeLocationEnum.ALL_STORES]: `${t("all_location_stores")}`,
      [RangeLocationEnum.FIVE]: `${RangeLocationEnum.FIVE}${t("km")}`,
      [RangeLocationEnum.TEN]: `${RangeLocationEnum.TEN}${t("km")}`,
      [RangeLocationEnum.TWENTY]: `${RangeLocationEnum.TWENTY}${t("km")}`,
      [RangeLocationEnum.THIRTY]: `${RangeLocationEnum.THIRTY}${t("km")}`
    };
    const ranges = Object.entries(
      RangeLocationLabels
    ).map(([key, value]) => ({
      label: value,
      value: Number(key)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$2;
      const _component_UiSelect = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "store-location-manager" }, _attrs))} data-v-52bf0c5d><button class="store-location-manager_button" data-v-52bf0c5d>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "locationPin" }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("use_current_location"))}</button><div class="store-location-manager_info" data-v-52bf0c5d><span class="store-location-manager_near-shops" data-v-52bf0c5d>${ssrInterpolate(_ctx.countShops)} ${ssrInterpolate(_ctx.$t("near_stores_result", { value: _ctx.cityName || "" }))}</span>`);
      _push(ssrRenderComponent(_component_UiSelect, {
        "model-value": _ctx.currentRange,
        small: "",
        "show-item-label": "",
        options: unref(ranges),
        "show-active-icon": false,
        class: "store-location-manager_range",
        "onUpdate:modelValue": ($event) => _ctx.$emit("changeRange", $event)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/bopis/components/stores-sidebar/store-location-manager/store-location-manager.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-52bf0c5d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "store-card",
  __ssrInlineRender: true,
  props: {
    data: {},
    active: { type: Boolean },
    selected: { type: Boolean },
    static: { type: Boolean },
    full: { type: Boolean }
  },
  emits: ["select"],
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const route = useRoute();
    const isProductPage = computed(
      () => {
        var _a2;
        return (_a2 = route.name) == null ? void 0 : _a2.toString().includes("product");
      }
    );
    const { t } = useI18n();
    const shopsStore = useShopsStore();
    const cityName = computed(() => {
      var _a2;
      if (!shopsStore.getCities) {
        return [];
      }
      return (_a2 = shopsStore.getCities.find(
        (city) => city.id === props.data.addresses[0].cityId
      )) == null ? void 0 : _a2.name;
    });
    const workingHoursStart = (_b = (_a = props.data.addresses[0]) == null ? void 0 : _a.workingHours[0]) == null ? void 0 : _b.start;
    const workingHoursEnd = (_d = (_c = props.data.addresses[0]) == null ? void 0 : _c.workingHours[0]) == null ? void 0 : _d.end;
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h;
      const _component_UiImg = _sfc_main$3;
      const _component_StoreServices = __nuxt_component_1$3;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["store-card", {
          active: _ctx.active,
          "store-card__static": _ctx.static,
          "store-card__selected": _ctx.full && _ctx.selected,
          "store-card__full": _ctx.full
        }]
      }, _attrs))} data-v-74bf9a3f>`);
      if (_ctx.selected && _ctx.full) {
        _push(`<span class="store-card_label" data-v-74bf9a3f>${ssrInterpolate(unref(t)("my_store"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.full && _ctx.data.image) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: _ctx.data.image,
          class: "store-card_image"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="store-card_main" data-v-74bf9a3f><div class="store-card_title-wrapper" data-v-74bf9a3f><span class="store-card_title" data-v-74bf9a3f>${ssrInterpolate(_ctx.data.name)}</span><span class="store-card_distance" data-v-74bf9a3f>${ssrInterpolate(_ctx.data.distance)} ${ssrInterpolate(unref(t)("km"))}</span></div><span class="store-card_city" data-v-74bf9a3f>${ssrInterpolate(unref(cityName))}</span>`);
      if (unref(isProductPage)) {
        _push(`<span class="store-card_availibility" data-v-74bf9a3f>${ssrInterpolate(unref(t)("usually_ready_in_24_hours"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="store-card_additional" data-v-74bf9a3f><span class="store-card_data" data-v-74bf9a3f>${ssrInterpolate(unref(t)("address"))}: <a${ssrRenderAttr("href", `https://www.google.com/maps/place/${(_a2 = _ctx.data.addresses[0]) == null ? void 0 : _a2.lat}, ${(_b2 = _ctx.data.addresses[0]) == null ? void 0 : _b2.lon}`)} target="_blank" rel="norefferer" data-v-74bf9a3f>${ssrInterpolate((_c2 = _ctx.data.addresses[0]) == null ? void 0 : _c2.address)}</a></span>`);
      if ((_d2 = _ctx.data.addresses[0]) == null ? void 0 : _d2.phone[0]) {
        _push(`<span class="store-card_data" data-v-74bf9a3f>${ssrInterpolate(unref(t)("telephone"))} <!--[-->`);
        ssrRenderList((_e = _ctx.data.addresses[0]) == null ? void 0 : _e.phone, (phone, index) => {
          _push(`<!--[-->`);
          if (index > 0) {
            _push(`<span data-v-74bf9a3f>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<a${ssrRenderAttr("href", `tel:${phone}`)} data-v-74bf9a3f>${ssrInterpolate(phone)}</a><!--]-->`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = _ctx.data.addresses[0]) == null ? void 0 : _f.email) {
        _push(`<span class="store-card_data" data-v-74bf9a3f>${ssrInterpolate(unref(t)("email"))} <!--[-->`);
        ssrRenderList((_g = _ctx.data.addresses[0]) == null ? void 0 : _g.email, (email, index) => {
          _push(`<!--[-->`);
          if (index > 0) {
            _push(`<span data-v-74bf9a3f>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<a${ssrRenderAttr("href", `mailto:${email}`)} data-v-74bf9a3f>${ssrInterpolate(email)}</a><!--]-->`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(workingHoursStart) && unref(workingHoursEnd)) {
        _push(`<span class="store-card_data" data-v-74bf9a3f>${ssrInterpolate(unref(t)("hours"))}: <span data-v-74bf9a3f>${ssrInterpolate(unref(workingHoursStart))}-${ssrInterpolate(unref(workingHoursEnd))}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = _ctx.data.services) == null ? void 0 : _h.length) {
        _push(ssrRenderComponent(_component_StoreServices, {
          full: _ctx.full,
          services: _ctx.data.services,
          class: ["store-card_services", {
            "store-card_services__big-indent": _ctx.full
          }]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.full && !_ctx.selected) {
        _push(ssrRenderComponent(_component_Button, {
          class: "store-card_select-button",
          secondary: "",
          onClick: ($event) => _ctx.$emit("select")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("make_this_my_store"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("make_this_my_store")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/bopis/components/store-card/store-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-74bf9a3f"]]);
const useCalculation = () => {
  const calculateDistance = (pointA, pointB) => {
    const earthRadius = 6371;
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const dLat = toRadians(pointB.latitude - pointA.latitude);
    const dLon = toRadians(pointB.longitude - pointA.longitude);
    const haversineFormula = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(pointA.latitude)) * Math.cos(toRadians(pointB.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const centralAngle = 2 * Math.atan2(Math.sqrt(haversineFormula), Math.sqrt(1 - haversineFormula));
    return Number((earthRadius * centralAngle).toFixed(1));
  };
  return { calculateDistance };
};
const useShopDistance = (cityGeoLocation, shops, userGeoLocation) => {
  const { calculateDistance } = useCalculation();
  const createShopWithDistance = (shop) => {
    const address = shop.addresses[0];
    const location = {
      latitude: address.lat,
      longitude: address.lon
    };
    if ((userGeoLocation == null ? void 0 : userGeoLocation.value.latitude) && (userGeoLocation == null ? void 0 : userGeoLocation.value.longitude)) {
      const distance2 = calculateDistance(userGeoLocation.value, location);
      return {
        ...shop,
        distance: distance2
      };
    }
    const distance = calculateDistance(cityGeoLocation.value, location) || 0;
    return {
      ...shop,
      distance
    };
  };
  const createShopsWithDistance = () => {
    return (shops == null ? void 0 : shops.value.map(createShopWithDistance)) || [];
  };
  return { createShopsWithDistance, createShopWithDistance };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stores-sidebar",
  __ssrInlineRender: true,
  props: {
    fullCards: { type: Boolean }
  },
  emits: ["save", "changeActiveShop"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const emit = __emit;
    const { trancateProductName } = useFormatters();
    const activeCardId = ref(0);
    const cardsContainerRef = ref(null);
    const userGeoLocation = ref({
      latitude: 0,
      longitude: 0
    });
    const cityGeoLocation = ref({
      latitude: 0,
      longitude: 0
    });
    const currentRange = ref(RangeLocationEnum.ALL_STORES);
    const shopsStore = useShopsStore();
    const { t } = useI18n();
    const shops = computed(() => {
      if (!shopsStore.getShops) {
        return [];
      }
      return shopsStore.getShops.filter((shop) => shop.types[0].key === "shop");
    });
    const { createShopsWithDistance } = useShopDistance(
      cityGeoLocation,
      shops,
      userGeoLocation
    );
    const filterByRange = (shops2) => shops2.filter(
      (shop) => +currentRange.value === RangeLocationEnum.ALL_STORES ? true : +shop.distance <= +currentRange.value
    );
    const filteredShops = computed(() => {
      if (shops.value.length === 0) {
        return [];
      }
      if (selectedCity.value === null) {
        return filterByRange(createShopsWithDistance());
      }
      return filterByRange(createShopsWithDistance());
    });
    const selectedStop = computed(() => shopsStore.selectedShop);
    const cities = computed(() => {
      if (!shopsStore.getCities) {
        return [];
      }
      return shopsStore.getCities;
    });
    const countries = computed(() => {
      if (!shopsStore.countries) {
        return [];
      }
      return shopsStore.countries;
    });
    const selectedCity = ref(
      cities.value ? {
        label: (_a = cities.value[0]) == null ? void 0 : _a.name,
        value: (_b = cities.value[0]) == null ? void 0 : _b.id
      } : null
    );
    const citiesIds = computed(() => {
      const cities2 = /* @__PURE__ */ new Set();
      shops.value.forEach((shop) => {
        var _a2;
        if ((_a2 = shop.addresses[0]) == null ? void 0 : _a2.cityId) {
          cities2.add(shop.addresses[0].cityId);
        }
      });
      return Array.from(cities2);
    });
    const countriesIds = computed(() => {
      const countries2 = /* @__PURE__ */ new Set();
      shops.value.forEach((shop) => {
        var _a2;
        if ((_a2 = shop.addresses[0]) == null ? void 0 : _a2.cityId) {
          countries2.add(shop.addresses[0].countryId);
        }
      });
      return Array.from(countries2);
    });
    const citiesOptions = computed(() => {
      if (!cities.value) {
        return [];
      }
      return cities.value.map((city) => {
        var _a2, _b2;
        const countryId = (_a2 = shops.value.find(
          (shop) => shop.addresses[0].cityId === city.id
        )) == null ? void 0 : _a2.addresses[0].countryId;
        return {
          label: city.name,
          value: city.id,
          subtitle: countryId ? (_b2 = countries.value.find((country) => country.id === countryId)) == null ? void 0 : _b2.name : void 0,
          icon: "markerIcon"
        };
      });
    });
    function saveShop() {
      const shop = filteredShops.value.find(
        (shop2) => shop2.id === activeCardId.value
      );
      emit("save", shop);
    }
    function handleSaveOnCardClick(id) {
      var _a2;
      if (cardsContainerRef.value) {
        (_a2 = cardsContainerRef.value) == null ? void 0 : _a2.scroll(0, 0);
        (void 0).scrollTo(0, 0);
      }
      emit("save", id);
    }
    function handleCardClick(id) {
      activeCardId.value = id;
      emit("changeActiveShop", id);
    }
    const { camelizeKeys } = humps;
    const productStore = useProductStore();
    const route = useRoute();
    const product = computed(() => {
      var _a2;
      if (!((_a2 = route.name) == null ? void 0 : _a2.toString().includes("product"))) {
        return null;
      }
      return camelizeKeys(productStore.product);
    });
    const getFeatureValue = (feature) => {
      var _a2;
      return (_a2 = feature.items.find((item) => item.selected)) == null ? void 0 : _a2.featureValue;
    };
    const changeCityLocation = (location) => {
      cityGeoLocation.value.latitude = location.latitude;
      cityGeoLocation.value.longitude = location.longitude;
    };
    const manageCityLocation = () => {
      var _a2;
      const city = (_a2 = cities.value) == null ? void 0 : _a2.find(
        (city2) => {
          var _a3;
          return city2.id === ((_a3 = selectedCity == null ? void 0 : selectedCity.value) == null ? void 0 : _a3.value);
        }
      );
      if (city) {
        changeCityLocation({
          latitude: city.lat || 0,
          longitude: city.lon || 0
        });
      }
    };
    watch(
      () => citiesIds.value,
      () => {
        if (citiesIds.value.length) {
          shopsStore.getCitiesData(citiesIds.value);
        }
      }
    );
    watch(
      () => countriesIds.value,
      () => {
        if (countriesIds.value.length) {
          shopsStore.getCountriesData(countriesIds.value);
        }
      }
    );
    watch(
      () => cities.value,
      () => {
        if (cities.value) {
          selectedCity.value = {
            label: cities.value[0].name,
            value: cities.value[0].id
          };
        }
      }
    );
    watch(
      selectedCity,
      () => {
        manageCityLocation();
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_UiImg = _sfc_main$3;
      const _component_UiSelect = __nuxt_component_1$1;
      const _component_StoreLocationManager = __nuxt_component_2;
      const _component_StoreCard = __nuxt_component_1;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["stores-sidebar", { "stores-sidebar__scroll": _ctx.fullCards }]
      }, _attrs))} data-v-4c71f022>`);
      if (!_ctx.fullCards) {
        _push(`<h3 class="stores-sidebar_title" data-v-4c71f022>${ssrInterpolate(_ctx.$t("stores"))}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(product)) {
        _push(`<div class="stores-sidebar_product" data-v-4c71f022><div class="stores-sidebar_product-image-wrapper" data-v-4c71f022>`);
        _push(ssrRenderComponent(_component_UiImg, {
          src: (_a2 = unref(product)) == null ? void 0 : _a2.images[0]
        }, null, _parent));
        _push(`</div><div data-v-4c71f022><span class="stores-sidebar_product-name" data-v-4c71f022>${ssrInterpolate(unref(trancateProductName)(unref(product).name))}</span><!--[-->`);
        ssrRenderList(unref(product).similarProducts, (feature) => {
          _push(`<span class="stores-sidebar_product-feature" data-v-4c71f022>${ssrInterpolate(feature.featureName)}: <span data-v-4c71f022>${ssrInterpolate(getFeatureValue(feature))}</span></span>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedCity)) {
        _push(ssrRenderComponent(_component_UiSelect, {
          modelValue: unref(selectedCity).value,
          "onUpdate:modelValue": ($event) => unref(selectedCity).value = $event,
          "show-item-label": "",
          label: unref(t)("city"),
          options: unref(citiesOptions)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_StoreLocationManager, {
        city: unref(selectedCity),
        "city-name": (_b2 = unref(selectedCity)) == null ? void 0 : _b2.label,
        "current-range": unref(currentRange),
        "count-shops": unref(filteredShops).length,
        onChangeLocation: ($event) => userGeoLocation.value = $event,
        onChangeRange: ($event) => currentRange.value = $event
      }, null, _parent));
      _push(`<div class="stores-sidebar_cards" data-v-4c71f022><!--[-->`);
      ssrRenderList(unref(filteredShops), (shop) => {
        var _a3;
        _push(ssrRenderComponent(_component_StoreCard, {
          key: shop.id,
          data: shop,
          active: unref(activeCardId) === shop.id,
          full: _ctx.fullCards,
          selected: ((_a3 = unref(selectedStop)) == null ? void 0 : _a3.id) === shop.id,
          onClick: ($event) => handleCardClick(shop.id),
          onSelect: ($event) => handleSaveOnCardClick(shop.id)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (!_ctx.fullCards) {
        _push(`<div class="stores-sidebar_footer" data-v-4c71f022>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "stores-sidebar_button",
          disabled: unref(activeCardId) === 0,
          onClick: saveShop
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("select"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("select")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/bopis/components/stores-sidebar/stores-sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c71f022"]]);

export { __nuxt_component_4 as _, __nuxt_component_1 as a, useShopDistance as u };
//# sourceMappingURL=stores-sidebar-0sYphcfi.mjs.map
