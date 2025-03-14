import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { a0 as keys, a as useI18n } from './server.mjs';
import { u as useCdnImg } from './useCdnImg-5SGHhxDr.mjs';
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
import '@imgproxy/imgproxy-js-core';

const _sfc_main = {
  __name: "google-map",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    activeShopId: {
      type: Number
    },
    mapStyle: {
      type: Object,
      default: () => keys.googleMapStyleId.contacts
    }
  },
  emits: ["init-map"],
  setup(__props, { emit: __emit }) {
    const mapRef = ref(null);
    const googleMapRef = ref(null);
    const markersRef = ref({});
    const props = __props;
    const { t } = useI18n();
    useCdnImg();
    watch(
      () => {
        var _a;
        return [(_a = props.data) == null ? void 0 : _a.center];
      },
      () => {
        var _a, _b, _c, _d;
        if (((_b = (_a = (void 0).google) == null ? void 0 : _a.maps) == null ? void 0 : _b.Map) && (void 0).initMap && ((_c = props.data) == null ? void 0 : _c.center)) {
          googleMapRef.value.setZoom(15);
          googleMapRef.value.setCenter((_d = props.data) == null ? void 0 : _d.center);
          markersRef.value.forEach((marker2) => {
            var _a2;
            return (_a2 = marker2 == null ? void 0 : marker2.infoWindow) == null ? void 0 : _a2.close();
          });
          const marker = markersRef.value.find(
            (item) => item.id === props.activeShopId
          );
          if (marker) {
            marker.infoWindow.close();
            marker.infoWindow.setContent(marker.content);
            marker.infoWindow.open(marker.marker.getMap(), marker.marker);
          }
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "map",
        ref_key: "mapRef",
        ref: mapRef,
        class: "google-map"
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/maps/google-map/google-map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=google-map-vw_pQjPF.mjs.map
