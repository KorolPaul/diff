import { _ as _sfc_main$1 } from './credit-price-text-B9mrfME7.mjs';
import { _ as __nuxt_component_1 } from './marketing-modal-aXAluzXe.mjs';
import { _ as _export_sfc, c as useLocalePath, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { ref, computed, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { C as CategoryApiService } from './CategoryApiService-CndB0tEv.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './icon-_hjsSUWU.mjs';
import './modal-light-Cz0YAIgT.mjs';
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
import 'sanitize-html';

const _sfc_main = {
  __name: "dynamic-banner",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { getSanitizeHtml } = useSanitize();
    const localePath = useLocalePath();
    const { startLoading, stopLoading, isLoading } = useFormLoader();
    const category = ref({});
    const marketingContent = computed(
      () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = category.value) == null ? void 0 : _a.contents) == null ? void 0 : _b.find((item) => item.type === "marketing_type")) == null ? void 0 : _c.data) || "";
      }
    );
    const slogan = computed(
      () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = category.value) == null ? void 0 : _a.contents) == null ? void 0 : _b.find((item) => item.type === "slogan")) == null ? void 0 : _c.data) || "";
      }
    );
    const inStock = computed(
      () => {
        var _a, _b;
        return (_b = (_a = category.value) == null ? void 0 : _a.products) == null ? void 0 : _b.find((product) => product.realStock > 0);
      }
    );
    startLoading();
    const response = ([__temp, __restore] = withAsyncContext(() => CategoryApiService.getCategoryById(
      props.data.entityId
    )), __temp = await __temp, __restore(), __temp);
    category.value = response;
    stopLoading();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_CreditPriceText = _sfc_main$1;
      const _component_MarketingModal = __nuxt_component_1;
      const _component_Button = __nuxt_component_6;
      const _component_UiImg = _sfc_main$2;
      _push(`<!--[-->`);
      if (__props.data && !unref(isLoading)) {
        _push(`<div class="dynamic-banner" data-v-0e69ec77>`);
        if ((_a = __props.data) == null ? void 0 : _a.tag) {
          _push(`<p class="dynamic-banner_badge" data-v-0e69ec77>${(_a2 = unref(getSanitizeHtml)((_b = __props.data) == null ? void 0 : _b.tag)) != null ? _a2 : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="dynamic-banner_title" data-v-0e69ec77>${ssrInterpolate(((_c = __props.data) == null ? void 0 : _c.title) || unref(category).name)}</h1><div class="dynamic-banner_slogan" data-v-0e69ec77><span data-v-0e69ec77>${ssrInterpolate(unref(slogan))}</span>`);
        if (unref(category).minPrice) {
          _push(`<div data-v-0e69ec77>`);
          _push(ssrRenderComponent(_component_CreditPriceText, {
            price: unref(category).minPrice
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="dynamic-banner_buttons" data-v-0e69ec77>`);
        if (unref(marketingContent)) {
          _push(ssrRenderComponent(_component_MarketingModal, { "popup-content": unref(marketingContent) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Button, {
          href: unref(localePath)(`/category/${unref(category).slug}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(unref(inStock) ? "credit_buy_now" : "notify_me"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(unref(inStock) ? "credit_buy_now" : "notify_me")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_e = (_d = __props.data) == null ? void 0 : _d.imageEntity) == null ? void 0 : _e.path) {
        _push(ssrRenderComponent(_component_UiImg, {
          src: (_g = (_f = __props.data) == null ? void 0 : _f.imageEntity) == null ? void 0 : _g.path,
          alt: unref(category).name,
          loading: "lazy",
          class: "dynamic-banner_image"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/products/dynamic-banner/dynamic-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dynamicBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e69ec77"]]);

export { dynamicBanner as default };
//# sourceMappingURL=dynamic-banner-BlhPIsMI.mjs.map
