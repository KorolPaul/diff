import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_1$1 } from './store-services-DdIHLKVb.mjs';
import { computed, ref, watch, mergeProps, unref, defineComponent, useSSRContext } from 'vue';
import { _ as _export_sfc, r as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import _sfc_main$2 from './google-map-vw_pQjPF.mjs';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
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

const _sfc_main$1 = defineComponent({
  name: "ServiceContactCard",
  props: {
    service: {
      type: Object,
      default: null
    }
  },
  setup() {
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const workingTimeValue = (worktime) => {
      const times = [];
      if (!worktime) {
        return times;
      }
      worktime.forEach((time) => {
        const daysCount = time.days.length;
        if (daysCount >= 2) {
          const days = `${i18n.t(time.days[0])}-${i18n.t(
            time.days[daysCount - 1]
          )}, ${time.start}-${time.end}`;
          times.push(days);
        } else if (daysCount) {
          const days = `${i18n.t(time.days)}, ${time.start}-${time.end}`;
          times.push(days);
        }
      });
      return times;
    };
    return { workingTimeValue };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_1;
  const _component_StoreServices = __nuxt_component_1$1;
  if (_ctx.service) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-contact-card" }, _attrs))} data-v-3ea4418b><div class="service-name black--text text--darken-1 mb-6" data-v-3ea4418b>${ssrInterpolate(_ctx.service.name)}</div><!--[-->`);
    ssrRenderList(_ctx.service.addresses, (address, index) => {
      _push(`<!--[-->`);
      if (address.working_hours) {
        _push(`<div class="service-work-schedule text-body-3 gray--text text--lighten-4 mb-4" data-v-3ea4418b>${ssrInterpolate(_ctx.workingTimeValue(address.working_hours).join(", "))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (address.address) {
        _push(`<div class="d-flex align-center text-subtitle-4 gray--text text--darken-1 mb-4" data-v-3ea4418b>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "pin",
          class: "mr-3"
        }, null, _parent));
        _push(` ${ssrInterpolate(address.address)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (address.phone) {
        _push(`<div data-v-3ea4418b><!--[-->`);
        ssrRenderList(address.phone, (phone, ind) => {
          _push(`<a${ssrRenderAttr("href", `tel:${phone}`)} class="d-flex align-center text-subtitle-4 gray--text text--darken-1 mb-4 phone-number" data-v-3ea4418b>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "phone",
            class: "mr-3"
          }, null, _parent));
          _push(` ${ssrInterpolate(phone)}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (address.email) {
        _push(`<div data-v-3ea4418b><!--[-->`);
        ssrRenderList(address.email, (email, ind) => {
          _push(`<a${ssrRenderAttr("href", `mailto:${email}`)} class="d-flex align-center text-subtitle-4 gray--text text--darken-1 mb-6" data-v-3ea4418b>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "email",
            class: "mr-3"
          }, null, _parent));
          _push(` ${ssrInterpolate(email)}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (address.lat && address.lon || address.url) {
        _push(`<div class="d-flex flex-column flex-md-row flex-xl-column mb-8" data-v-3ea4418b>`);
        if (address.lat && address.lon) {
          _push(`<div class="text-body-2 primary--text card-link mb-3 mb-md-0 mb-xl-3 see-map" data-v-3ea4418b>${ssrInterpolate(_ctx.$t("see_on_map"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (address.url) {
          _push(`<a${ssrRenderAttr("href", address.url)} target="_blank" rel="noopener noreferrer" class="text-body-2 primary--text card-link" data-v-3ea4418b><span class="get-direction" data-v-3ea4418b>${ssrInterpolate(_ctx.$t("get_direction"))}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "longArrowDownIcon",
            class: "ml-2 arrow-icon"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (address.services) {
        _push(ssrRenderComponent(_component_StoreServices, {
          service: address.services
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/service-contact-card/service-contact-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3ea4418b"]]);
const _sfc_main = {
  __name: "contacts-block",
  __ssrInlineRender: true,
  props: {
    points: {
      type: Array,
      default: () => []
    },
    mapCenter: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const shopsStore = useShopsStore();
    const shops = computed(() => {
      if (!shopsStore) {
        return [];
      }
      const shopsData = [];
      shopsStore.getShops.forEach((shop) => {
        if (shop.types[0].key === "shop" || shop.types[0].key === "online-store") {
          shopsData.push(shop);
        }
      });
      return shopsData.sort((a, b) => a.sort - b.sort);
    });
    const mapConfig = ref({
      center: null,
      points: []
    });
    let googleMap = null;
    watch(
      () => shops.value,
      (newPoints) => {
        mapConfig.value.center = props.mapCenter || {
          lat: 34.7061,
          lng: 33.022613
        };
        const mapConfigSettings = [];
        if (!shops.value) {
          mapConfig.value.points = mapConfigSettings;
          return;
        }
        newPoints.forEach((newPoint) => {
          newPoint.addresses.forEach((address) => {
            if (address.lat && address.lon) {
              mapConfigSettings.push({
                lat: Number(address.lat),
                lng: Number(address.lon),
                title: newPoints.name,
                content: {
                  name: newPoint.name,
                  worktime: address.working_hours,
                  address: address.address,
                  phone: address.phone
                }
              });
            }
          });
        });
        mapConfig.value.points = mapConfigSettings;
      },
      { immediate: true }
    );
    const onMapSelect = (coords) => {
      try {
        if (googleMap) {
          googleMap.setZoom(15);
          googleMap.setCenter(coords);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const setMap = (map) => {
      googleMap = map;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceContactCard = __nuxt_component_0;
      const _component_GoogleMap = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts-block" }, _attrs))}><div class="contacts-block_addresses">`);
      if (unref(shops) && unref(shops).length) {
        _push(`<div class="services-card"><!--[-->`);
        ssrRenderList(unref(shops), (shop, index) => {
          _push(ssrRenderComponent(_component_ServiceContactCard, {
            service: shop,
            "onMap:select": onMapSelect
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(mapConfig).points.length) {
        _push(ssrRenderComponent(_component_GoogleMap, {
          class: "contacts-block_map",
          data: unref(mapConfig),
          onInitMap: setMap
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/blocks/contacts-block/contacts-block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacts-block-CeQtf3IO.mjs.map
