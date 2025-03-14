import _sfc_main$1 from './google-map-vw_pQjPF.mjs';
import { _ as __nuxt_component_4 } from './stores-sidebar-0sYphcfi.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
import './server.mjs';
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
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './UiImg-CNj4xvxi.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './icon-_hjsSUWU.mjs';
import './store-services-DdIHLKVb.mjs';
import './modal-light-Cz0YAIgT.mjs';
import './Form-ZGQdgBok.mjs';
import './policy-checkbox-GL5-7Kb3.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './TextInput-HaUa076w.mjs';
import './useFormUtils-HyQgFuda.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
import '@vuelidate/core';
import './LeadApiService-z9_BsZVX.mjs';
import './useFormatters-B4xJk29p.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const shopsStore = useShopsStore();
    const mapRef = ref(null);
    const activeShopId = ref(0);
    const selectedShop = computed(() => shopsStore.getSelectedShop);
    const activeShop = computed(() => {
      var _a;
      return (_a = shopsStore.shops) == null ? void 0 : _a.find((shop) => shop.id === activeShopId.value);
    });
    const shops = computed(() => {
      if (!shopsStore.getShops) {
        return [];
      }
      return shopsStore.getShops.filter((shop) => shop.types[0].key === "shop");
    });
    const mapConfig = computed(() => {
      var _a, _b, _c, _d;
      if (shops.value.length === 0) {
        return {
          center: null,
          points: []
        };
      }
      const mapConfigSettings = [];
      shops.value.forEach((shop) => {
        shop.addresses.forEach((address) => {
          var _a2, _b2;
          if (address.lat && address.lon) {
            mapConfigSettings.push({
              lat: Number(address.lat),
              lng: Number(address.lon),
              title: shop.name,
              id: shop.id,
              content: {
                name: shop.name,
                worktime: address.workingHours,
                address: address.address,
                lat: address.lat,
                lon: address.lon,
                city: ((_b2 = (_a2 = shopsStore.getCities) == null ? void 0 : _a2.find((city) => city.id === address.cityId)) == null ? void 0 : _b2.name) || "",
                email: address.email || null,
                phone: address.phone
              }
            });
          }
        });
      });
      return {
        center: {
          lat: ((_a = activeShop.value) == null ? void 0 : _a.addresses[0].lat) || ((_b = selectedShop.value) == null ? void 0 : _b.addresses[0].lat),
          lng: ((_c = activeShop.value) == null ? void 0 : _c.addresses[0].lon) || ((_d = selectedShop.value) == null ? void 0 : _d.addresses[0].lon)
        },
        points: mapConfigSettings
      };
    });
    const onMapSelect = (coords) => {
      try {
        if (mapRef.value) {
          mapRef.value.setZoom(15);
          mapRef.value.setCenter(coords);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const setMap = (map) => {
      mapRef.value = map;
    };
    function saveShop(id) {
      const shop = shops.value.find((shop2) => shop2.id === id);
      if (shop) {
        shopsStore.setSelectedShop(shop);
        localStorage.setItem("shop", String(shop.id));
        onMapSelect({
          lat: Number(shop.addresses[0].lat),
          lng: Number(shop.addresses[0].lon)
        });
      }
    }
    function handleChangeShop(shopId) {
      activeShopId.value = shopId;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GoogleMap = _sfc_main$1;
      const _component_StoresSidebar = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "store-locator" }, _attrs))}><div class="store-locator_map">`);
      if (unref(mapConfig).points.length) {
        _push(ssrRenderComponent(_component_GoogleMap, {
          data: unref(mapConfig),
          "active-shop-id": unref(activeShopId),
          onInitMap: setMap
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="store-locator_shops"><h1 class="store-locator_title">${ssrInterpolate(_ctx.$t("stores"))}</h1><div class="store-locator_shops-holder">`);
      _push(ssrRenderComponent(_component_StoresSidebar, {
        "full-cards": "",
        onSave: saveShop,
        onChangeActiveShop: handleChangeShop
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/store-locator/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BXH4DFrR.mjs.map
