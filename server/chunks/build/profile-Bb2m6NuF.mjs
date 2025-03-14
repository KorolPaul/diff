import { _ as __nuxt_component_0$3 } from './cart-slider-CP5cff-4.mjs';
import { ref, computed, watch, resolveComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { P as ProductApiService } from './ProductApiService-BgJlybnL.mjs';
import { u as useViewedProducts } from './useViewedProducts-CZqdOrny.mjs';
import { _ as _export_sfc, F as useUserStore, u as useRoute, r as useNuxtApp, C as useRouter, X as __nuxt_component_0$2, a as useI18n, J as useAuth, d as __nuxt_component_0$2$1 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './ui-page-preloader-f4jo8KnM.mjs';
import { u as useScrollTo } from './useScrollTo-GsIK4vXy.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './product-badges-ahLlBnMK.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './credit-price-text-B9mrfME7.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import 'humps';
import './ui-slider-button-ex5lF246.mjs';
import 'swiper/vue';
import 'swiper/modules';
import '@vueuse/core';
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
import 'zod';
import './ui-preloader-C4Bi7ENY.mjs';
import './index-r7vNs057.mjs';

const useFetchViewedProducts = () => {
  const { getViewedProducts } = useViewedProducts();
  const viewedProducts = ref([]);
  const fetchViewed = async () => {
    if (getViewedProducts.value.length < 1) return;
    const params = {
      searchFields: "slug:in",
      limit: 9999,
      search: `slug:${getViewedProducts.value.join()}`
    };
    const { data } = await ProductApiService.getProducts(params);
    viewedProducts.value = [...data.data];
  };
  return {
    viewedProducts,
    fetchViewed
  };
};
const _sfc_main$3 = {
  __name: "ViewedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewedProducts, fetchViewed } = useFetchViewedProducts();
    const { t } = useI18n();
    const productsSliderData = computed(
      () => viewedProducts.value ? {
        title: t("previously_viewed"),
        products: viewedProducts.value,
        promoId: "viewed"
      } : null
    );
    fetchViewed();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartSlider = __nuxt_component_0$3;
      if (unref(productsSliderData)) {
        _push(ssrRenderComponent(_component_CartSlider, mergeProps({
          data: unref(productsSliderData),
          class: "viewed-products",
          "without-padding": ""
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/subcategory-page/components/ViewedProducts/ViewedProducts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4cf4dbb8"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%3e%3ccircle%20cx='24'%20cy='24'%20r='24'%20fill='%23F2F2F2'%20/%3e%3cpath%20d='M16.3094%2034.4915C14.6363%2034.4915%2013.7998%2033.9195%2013.7998%2032.7757C13.7998%2032.0131%2014.0294%2031.2077%2014.4885%2030.3595C14.9554%2029.5035%2015.6246%2028.702%2016.4961%2027.955C17.3676%2027.2002%2018.422%2026.5854%2019.6593%2026.1108C20.8966%2025.6361%2022.2973%2025.3987%2023.8614%2025.3987C25.4177%2025.3987%2026.8145%2025.6361%2028.0517%2026.1108C29.289%2026.5854%2030.3434%2027.2002%2031.2149%2027.955C32.0865%2028.702%2032.7518%2029.5035%2033.2109%2030.3595C33.6778%2031.2077%2033.9112%2032.0131%2033.9112%2032.7757C33.9112%2033.9195%2033.0708%2034.4915%2031.39%2034.4915H16.3094ZM15.9592%2033.1375H31.7635C32.0281%2033.1375%2032.211%2033.0986%2032.3121%2033.0208C32.4211%2032.9507%2032.4755%2032.8223%2032.4755%2032.6356C32.4755%2032.0753%2032.2849%2031.4606%2031.9036%2030.7914C31.5223%2030.1221%2030.962%2029.4802%2030.2228%2028.8654C29.4913%2028.2507%2028.5886%2027.7488%2027.5148%2027.3597C26.4487%2026.9628%2025.2309%2026.7644%2023.8614%2026.7644C22.484%2026.7644%2021.2584%2026.9628%2020.1846%2027.3597C19.1185%2027.7488%2018.2158%2028.2507%2017.4766%2028.8654C16.7451%2029.4802%2016.1887%2030.1221%2015.8074%2030.7914C15.4261%2031.4606%2015.2355%2032.0753%2015.2355%2032.6356C15.2355%2032.8223%2015.2861%2032.9507%2015.3872%2033.0208C15.4962%2033.0986%2015.6868%2033.1375%2015.9592%2033.1375ZM23.873%2023.7996C22.9626%2023.7996%2022.1377%2023.5623%2021.3985%2023.0876C20.6592%2022.6052%2020.0678%2021.9593%2019.6243%2021.15C19.1885%2020.3407%2018.9706%2019.442%2018.9706%2018.4537C18.9706%2017.4888%2019.1885%2016.6095%2019.6243%2015.8158C20.0678%2015.0221%2020.6592%2014.3879%2021.3985%2013.9132C22.1455%2013.4385%2022.9704%2013.2012%2023.873%2013.2012C24.7757%2013.2012%2025.5966%2013.4346%2026.3359%2013.9015C27.0829%2014.3684%2027.6743%2014.9987%2028.1101%2015.7924C28.5536%2016.5861%2028.7754%2017.4655%2028.7754%2018.4304C28.7754%2019.4264%2028.5536%2020.333%2028.1101%2021.15C27.6743%2021.9593%2027.0829%2022.6052%2026.3359%2023.0876C25.5966%2023.5623%2024.7757%2023.7996%2023.873%2023.7996ZM23.873%2022.4457C24.5111%2022.4457%2025.0908%2022.2667%2025.6122%2021.9087C26.1413%2021.5508%2026.5577%2021.0683%2026.8611%2020.4614C27.1724%2019.8544%2027.328%2019.1774%2027.328%2018.4304C27.328%2017.7067%2027.1724%2017.053%2026.8611%2016.4694C26.5499%2015.878%2026.1336%2015.4111%2025.6122%2015.0687C25.0908%2014.7264%2024.5111%2014.5552%2023.873%2014.5552C23.2349%2014.5552%2022.6513%2014.7302%2022.1222%2015.0804C21.6008%2015.4228%2021.1845%2015.8897%2020.8732%2016.4811C20.562%2017.0725%2020.4063%2017.73%2020.4063%2018.4537C20.4063%2019.2007%2020.562%2019.8777%2020.8732%2020.4847C21.1845%2021.0839%2021.6008%2021.5624%2022.1222%2021.9204C22.6513%2022.2706%2023.2349%2022.4457%2023.873%2022.4457Z'%20fill='%236E6E73'%20/%3e%3c/svg%3e";
const _sfc_main$2 = {
  __name: "profile-sidebar",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: null
    }
  },
  emits: ["setLoadingLogout"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    useRouter();
    useNuxtApp();
    useAuth();
    const menuList = ref([
      {
        icon: "loginIcon",
        title: "profile",
        url: "/account/info"
      },
      {
        icon: "orderIcon",
        title: "orders",
        url: "/account/orders"
      }
    ]);
    const actualUrl = computed(() => route.fullPath);
    const isActive = (url) => {
      return actualUrl.value.includes(url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-sidebar" }, _attrs))} data-v-b728d078><div class="profile-sidebar_avatar" data-v-b728d078><img${ssrRenderAttr("src", _imports_0)} format="svg" preload data-v-b728d078><span class="profile-sidebar_name" data-v-b728d078>${ssrInterpolate((_a = __props.profile) == null ? void 0 : _a.name)} ${ssrInterpolate((_b = __props.profile) == null ? void 0 : _b.lastname)}</span></div><div class="profile-sidebar_menu" data-v-b728d078><!--[-->`);
      ssrRenderList(unref(menuList), (menuItem) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["profile-sidebar_button", { "profile-sidebar_button__active": isActive(menuItem.url) }],
          to: _ctx.localePath(menuItem.url)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: "profile-sidebar_button-icon",
                icon: menuItem.icon
              }, null, _parent2, _scopeId));
              _push2(`<span class="profile-sidebar_button-title" data-v-b728d078${_scopeId}>${ssrInterpolate(_ctx.$t(menuItem.title))}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  class: "profile-sidebar_button-icon",
                  icon: menuItem.icon
                }, null, 8, ["icon"]),
                createVNode("span", { class: "profile-sidebar_button-title" }, toDisplayString(_ctx.$t(menuItem.title)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><button class="profile-sidebar_button profile-sidebar_button__full-width" data-v-b728d078>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "profile-sidebar_button-icon profile-sidebar_button-icon__logout",
        icon: "logoutIcon"
      }, null, _parent));
      _push(`<span class="profile-sidebar_button-title" data-v-b728d078>${ssrInterpolate(_ctx.$t("logout"))}</span></button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-sidebar/profile-sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b728d078"]]);
const _sfc_main$1 = {
  __name: "profile-main-section",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: null
    }
  },
  emits: ["setLoadingLogout"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-main-section" }, _attrs))} data-v-3a330b8c>`);
      _push(ssrRenderComponent(ProfileSidebar, {
        profile: __props.profile,
        onSetLoadingLogout: ($event) => _ctx.$emit("setLoadingLogout")
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, { profile: __props.profile }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-main-section/profile-main-section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProfileMainSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a330b8c"]]);
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  emits: ["endScrollTop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { getUser, isAuthUser } = useUserStore();
    const route = useRoute();
    useNuxtApp();
    useRouter();
    const profilePageData = ref(null);
    const isLoadingLogout = ref(false);
    const { fetchError } = useFetchError();
    const { setMetaToStaticPage } = usePageMeta();
    const isOrderPage = computed(() => route.path.includes("order"));
    watch(
      () => route.path,
      () => {
        const onEndScrollTo = () => {
          emit("endScrollTop", false);
        };
        useScrollTo(0, onEndScrollTo);
      }
    );
    setMetaToStaticPage(profilePageData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ViewedProducts = __nuxt_component_0;
      const _component_UiPagePreloader = __nuxt_component_0$1;
      const _component_AppError = resolveComponent("AppError");
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-e95df475>`);
        if (unref(getUser) && unref(isAuthUser) && !unref(isLoadingLogout)) {
          _push(`<!--[--><span class="profile_title" data-v-e95df475>${ssrInterpolate(_ctx.$t("personal_account_title"))}</span>`);
          _push(ssrRenderComponent(ProfileMainSection, {
            profile: unref(getUser),
            onSetLoadingLogout: ($event) => isLoadingLogout.value = true
          }, null, _parent));
          if (unref(isOrderPage)) {
            _push(ssrRenderComponent(_component_ViewedProducts, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<div data-v-e95df475>`);
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-e95df475>`);
        _push(ssrRenderComponent(_component_AppError, {
          error: { statusCode: unref(fetchError) }
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e95df475"]]);

export { profile as default };
//# sourceMappingURL=profile-Bb2m6NuF.mjs.map
