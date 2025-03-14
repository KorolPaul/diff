import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, watch, mergeProps, withAsyncContext, ref, computed, provide, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, defineAsyncComponent, inject, isRef, reactive, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { _ as _export_sfc, u as useRoute, r as useNuxtApp, y as useConfigStore, a as useI18n, J as useAuth, F as useUserStore, i as useCartStore, C as useRouter, h as useDeviceStore, v as bannerGroupsNames, a2 as useCookie, e as useApi, P as PUBLIC_PREFIX, d as __nuxt_component_0$2$1, c as useLocalePath, k as __nuxt_component_6, a3 as useSwitchLocalePath, Z as __nuxt_component_1$3, L as AccountApiService } from './server.mjs';
import { _ as __nuxt_component_0$3 } from './client-only-Bwxzq3Sq.mjs';
import { u as useLocalCitiesStore } from './local-cities-CykZaXGK.mjs';
import { u as useShopsStore } from './shops-qmTazkSN.mjs';
import __nuxt_component_2$1 from './app-logo-CTrjGh4b.mjs';
import { u as useShopDistance, a as __nuxt_component_1$2, _ as __nuxt_component_4$1 } from './stores-sidebar-0sYphcfi.mjs';
import { useStorage, onClickOutside, watchDebounced } from '@vueuse/core';
import { _ as _sfc_main$f } from './ui-rotate-arrow-B7iS75rF.mjs';
import { u as usePagesStore } from './pages-CxSmVAwD.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';
import { S as SearchApiService } from './SearchApiService-BydxThEZ.mjs';
import { defineStore } from 'pinia';
import { _ as _sfc_main$h } from './modal-light-Cz0YAIgT.mjs';
import { S as SiteInfoApiService, L as LoginModalContent } from './login-modal-content-D0aLq5B-.mjs';
import { u as useHeaderState } from './useHeaderState-DEk9LBo0.mjs';
import { _ as _sfc_main$i } from './TextInput-HaUa076w.mjs';
import __nuxt_component_3$2 from './ConfirmedIcon-E5WL1HmF.mjs';
import __nuxt_component_4$2 from './WarningIcon-D5c5RxFI.mjs';
import useVuelidate from '@vuelidate/core';
import { u as useFormUtils } from './useFormUtils-HyQgFuda.mjs';
import { helpers, email, required } from '@vuelidate/validators';
import { _ as _sfc_main$g } from './UiImg-CNj4xvxi.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { a as useHead } from './index-r7vNs057.mjs';
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
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'zod';
import 'humps';
import './UiSelect-BqVOhDGy.mjs';
import './store-services-DdIHLKVb.mjs';
import './Form-ZGQdgBok.mjs';
import './policy-checkbox-GL5-7Kb3.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './LeadApiService-z9_BsZVX.mjs';
import './useFormatters-B4xJk29p.mjs';
import './personal-data-text-kJ244n-x.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './enter-code-content-D5GsStjK.mjs';
import 'maska/vue';
import 'maska';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';

const useBannerStore = defineStore("banners", {
  state: () => ({
    banners: {},
    topBarBanner: null
  }),
  getters: {
    getTopBarBanners() {
      return this.topBarBanner;
    },
    getBanners() {
      return this.banners;
    }
  },
  actions: {
    setTopBarBanners(banners) {
      this.topBarBanner = banners;
    },
    setBanners(banners) {
      this.banners = banners;
    }
  }
});

const MAX_CHARS = 70;
const _sfc_main$e = {
  __name: "ribbon-banner",
  __ssrInlineRender: true,
  props: {
    banners: {
      type: Array,
      default: null
    },
    frequency: {
      type: Number
    }
  },
  setup(__props) {
    const props = __props;
    function cropText(bannerItem) {
      var _a, _b, _c;
      const buttonTextLength = ((_a = bannerItem == null ? void 0 : bannerItem.description) == null ? void 0 : _a.length) || 0;
      const bannerTextLength = ((_b = bannerItem == null ? void 0 : bannerItem.title) == null ? void 0 : _b.length) || 0;
      if (bannerTextLength > MAX_CHARS - buttonTextLength) {
        return `${(_c = bannerItem.title) == null ? void 0 : _c.substring(0, MAX_CHARS - buttonTextLength)}...`;
      }
      return bannerItem.title;
    }
    const swiperOptions = {
      navigation: {
        nextEl: ".ribbon-banner_next",
        prevEl: ".ribbon-banner_prev"
      },
      loop: true,
      autoplay: {
        delay: props.frequency || 5e3,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (__props.banners) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "ribbon-banner" }, _attrs))} data-v-f8983dc0><div class="ribbon-banner_slider" data-v-f8983dc0>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ ...swiperOptions }, {
          modules: [unref(Navigation), unref(Autoplay)]
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.banners.slice(0, 3), (item) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: item.name,
                  class: "ribbon-banner_slide"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="ribbon-banner_slide-content" data-v-f8983dc0${_scopeId2}><span class="ribbon-banner_slide-text" data-v-f8983dc0${_scopeId2}>${ssrInterpolate(cropText(item.content.bannerSizes[0]))} <a${ssrRenderAttr("href", item.content.bannerSizes[0].buttonText)} class="ribbon-banner_slide-link" target="_blank" data-v-f8983dc0${_scopeId2}>${ssrInterpolate(item.content.bannerSizes[0].description)}</a></span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "ribbon-banner_slide-content" }, [
                          createVNode("span", { class: "ribbon-banner_slide-text" }, [
                            createTextVNode(toDisplayString(cropText(item.content.bannerSizes[0])) + " ", 1),
                            createVNode("a", {
                              href: item.content.bannerSizes[0].buttonText,
                              class: "ribbon-banner_slide-link",
                              target: "_blank"
                            }, toDisplayString(item.content.bannerSizes[0].description), 9, ["href"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.banners.slice(0, 3), (item) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: item.name,
                    class: "ribbon-banner_slide"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "ribbon-banner_slide-content" }, [
                        createVNode("span", { class: "ribbon-banner_slide-text" }, [
                          createTextVNode(toDisplayString(cropText(item.content.bannerSizes[0])) + " ", 1),
                          createVNode("a", {
                            href: item.content.bannerSizes[0].buttonText,
                            class: "ribbon-banner_slide-link",
                            target: "_blank"
                          }, toDisplayString(item.content.bannerSizes[0].description), 9, ["href"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="ribbon-banner_prev" data-v-f8983dc0>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "arrowLeftSlider",
          color: "#fff"
        }, null, _parent));
        _push(`</button><button class="ribbon-banner_next" data-v-f8983dc0>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "arrowRightSlider",
          color: "#fff"
        }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/ribbon-banner/ribbon-banner.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-f8983dc0"]]);
const _sfc_main$d = {
  __name: "tools-list-item",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    counter: {
      type: Number,
      default: null
    }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_client_only = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "tools-list-item",
        tabindex: "0"
      }, _attrs))} data-v-547c2ff1><div class="tools-list-item_icon-wrapper" data-v-547c2ff1>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "tools-list-item_icon",
        icon: __props.icon,
        "container-size": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
      if (__props.title) {
        _push(`<span class="tools-list-item_title" data-v-547c2ff1>${ssrInterpolate(__props.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/tools-list-item/tools-list-item.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ToolsListItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-547c2ff1"]]);
const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./app-logo-CTrjGh4b.mjs').then((c) => c.default || c));
const _sfc_main$c = {
  __name: "checkout-header",
  __ssrInlineRender: true,
  setup(__props) {
    const { getCartPositionsQuantity } = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyAppLogo = __nuxt_component_0_lazy;
      const _component_nuxt_link = __nuxt_component_0$2$1;
      const _component_ToolsListItem = ToolsListItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-header" }, _attrs))} data-v-d8bd7005><div class="checkout-header_container" data-v-d8bd7005>`);
      _push(ssrRenderComponent(_component_LazyAppLogo, null, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/cart")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ToolsListItem, {
              counter: unref(getCartPositionsQuantity),
              "is-show-title": false,
              icon: "cart"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ToolsListItem, {
                counter: unref(getCartPositionsQuantity),
                "is-show-title": false,
                icon: "cart"
              }, null, 8, ["counter"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/checkout-header/checkout-header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-d8bd7005"]]);
const useCitiesRouter = () => {
  const { locale, defaultLocale } = useI18n();
  const localCitiesStore = useLocalCitiesStore();
  const currentCity = localCitiesStore.current;
  const router = useRouter();
  const addLocaleCityToSlug = () => {
    var _a;
    const route = useRoute();
    if (route.params.localVersion === currentCity.slug || route.params.slug === currentCity.slug || !route.meta.localVersion && !route.name.includes("index__") || ((_a = currentCity == null ? void 0 : currentCity.pivot) == null ? void 0 : _a.is_default) === 1) {
      return;
    }
    if (locale.value === defaultLocale) {
      history.replaceState(
        {},
        null,
        `${(void 0).location.origin}/${currentCity.slug}${route.fullPath}`
      );
      return;
    }
    const pathWithoutLocale = route.fullPath.split("/");
    pathWithoutLocale.splice(1, 1);
    history.replaceState(
      {},
      null,
      `${(void 0).location.origin}/${locale.value}/${currentCity.slug}${pathWithoutLocale.join("/")}`
    );
  };
  addLocaleCityToSlug();
  router.beforeEach((to, from, next) => {
    if (!to.meta.localVersion && !to.name.includes("index__")) {
      next();
      return;
    }
    if (to.params.localVersion === currentCity.slug || to.params.slug === currentCity.slug || currentCity.pivot.is_default) {
      next();
      return;
    }
    if (locale.value === defaultLocale) {
      next({
        path: `/${currentCity.slug}${to.fullPath}`
      });
      return;
    }
    const splitPath = to.fullPath.split("/");
    splitPath.splice(2, 0, currentCity.slug);
    next({
      path: splitPath.join("/")
    });
  });
};
const _sfc_main$b = {
  __name: "burger",
  __ssrInlineRender: true,
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["burger", { "opened": __props.opened }]
      }, _attrs))} data-v-7006c5a5><div class="burger_line" data-v-7006c5a5></div><div class="burger_line" data-v-7006c5a5></div><div class="burger_line" data-v-7006c5a5></div><div class="burger_dioganal-line" data-v-7006c5a5></div><div class="burger_dioganal-line" data-v-7006c5a5></div></button>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/burger/burger.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7006c5a5"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "sidebar",
  __ssrInlineRender: true,
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: Number,
      default: 360
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    watch(
      () => props.opened,
      () => {
        if (props.opened) ;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([{ opened: __props.opened }, "sidebar"])}"><div class="sidebar_fade"></div><div class="sidebar_holder" style="${ssrRenderStyle({ maxWidth: `${__props.maxWidth}px` })}"><button class="sidebar_close">`);
        _push2(ssrRenderComponent(_component_Icon, {
          icon: "sidebarClose",
          class: "sidebar_close-icon"
        }, null, _parent));
        _push2(`</button><div class="sidebar_content">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        _push2(`</div><div class="sidebar_footer">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent);
        _push2(`</div></div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/sidebar/sidebar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "store-locator-widget",
  __ssrInlineRender: true,
  setup(__props) {
    const shopsStore = useShopsStore();
    const cityLocation = ref({
      latitude: 0,
      longitude: 0
    });
    const { createShopWithDistance } = useShopDistance(cityLocation);
    const selectedShop = computed(
      () => shopsStore.getSelectedShop ? createShopWithDistance(shopsStore.getSelectedShop) : shopsStore.getSelectedShop
    );
    const isSidebarOpened = computed(() => shopsStore.getIsSidebarOpened);
    const localePath = useLocalePath();
    const { t } = useI18n();
    const isPopupOpened = ref(false);
    const bopisRef = ref(null);
    onClickOutside(bopisRef, () => isPopupOpened.value = false);
    function saveShop(shop) {
      shopsStore.setSidebarOpened(false);
      shopsStore.setSelectedShop(shop);
      localStorage.setItem("shop", String(shop.id));
    }
    watch(
      [selectedShop, () => shopsStore.getCities],
      ([shop, cities]) => {
        if (shop && cities) {
          const city = cities.find((city2) => city2.id === shop.addresses[0].cityId);
          if (city) {
            cityLocation.value.latitude = city.lat || 0;
            cityLocation.value.longitude = city.lon || 0;
          }
        }
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1$1;
      const _component_StoreCard = __nuxt_component_1$2;
      const _component_Button = __nuxt_component_6;
      const _component_Sidebar = _sfc_main$a;
      const _component_StoresSidebar = __nuxt_component_4$1;
      _push(`<!--[--><div class="store-locator-widget" data-v-0b68e96f><button class="store-locator-widget_button" data-v-0b68e96f>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "shop",
        class: "store-locator-widget_button-icon"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_a = unref(selectedShop)) == null ? void 0 : _a.name) || unref(t)("select_your_store"))}</button>`);
      if (unref(selectedShop)) {
        _push(`<div class="${ssrRenderClass([{ active: unref(isPopupOpened) }, "store-locator-widget_popup"])}" data-v-0b68e96f><button class="store-locator-widget_popup-close" data-v-0b68e96f>`);
        _push(ssrRenderComponent(_component_Icon, { icon: "close" }, null, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_StoreCard, {
          data: unref(selectedShop),
          active: true,
          static: ""
        }, null, _parent));
        _push(`<div class="store-locator-widget_popup-buttons" data-v-0b68e96f>`);
        _push(ssrRenderComponent(_component_Button, {
          href: unref(localePath)("/store-locator"),
          secondary: "",
          class: "store-locator-widget_view-button",
          onClick: ($event) => isPopupOpened.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("view_store_map"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("view_store_map")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => unref(shopsStore).setSidebarOpened(true)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("select_another_store"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("select_another_store")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Sidebar, {
        opened: unref(isSidebarOpened),
        onClose: ($event) => unref(shopsStore).setSidebarOpened(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StoresSidebar, { onSave: saveShop }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_StoresSidebar, { onSave: saveShop })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/store-locator-widget/store-locator-widget.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0b68e96f"]]);
const _sfc_main$8 = {
  __name: "select-language",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale: currentLocale, locales: languages } = useI18n();
    const shopsStore = useShopsStore();
    const switchLocalePath = useSwitchLocalePath();
    const active = computed(
      () => languages.value.find((lang) => lang.code === currentLocale.value)
    );
    const isOpened = ref(false);
    const selectRef = ref(null);
    onClickOutside(selectRef, () => isOpened.value = null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRotateArrow = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      if (unref(languages).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          ref_key: "selectRef",
          ref: selectRef,
          class: ["select-language", {
            disabled: unref(languages).length <= 1
          }]
        }, _attrs))} data-v-43986c2d><button class="select-language_button" data-v-43986c2d>${ssrInterpolate(unref(active).name)} `);
        _push(ssrRenderComponent(_component_UiRotateArrow, {
          active: unref(isOpened),
          class: "select-language_button-icon"
        }, null, _parent));
        _push(`</button><div class="${ssrRenderClass([{ active: unref(isOpened) }, "select-language_dropdown"])}" data-v-43986c2d><!--[-->`);
        ssrRenderList(unref(languages), (language) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: language.code,
            to: unref(switchLocalePath)(language.code),
            class: ["select-language_link", { active: language.code === unref(currentLocale) }],
            onClick: ($event) => unref(shopsStore).getShopsData(language.code)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(language.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(language.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/selects/select-language/select-language.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-43986c2d"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "comparison-panel",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const compareState = useStorage("compare", []);
    const pageStore = usePagesStore();
    const isAppleCategoryPage = computed(() => pageStore.getIsAppleCategoryPage);
    const isComparePage = computed(() => pageStore.isComparePage);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      if (unref(compareState).length > 0 && !unref(isAppleCategoryPage) && !unref(isComparePage)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "comparison-panel" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "compareLight",
          class: "comparison-panel_icon"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(compareState).length)} ${ssrInterpolate(unref(t)("items_in_comparison"))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/compare",
          class: "comparison-panel_link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("go_check"))} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.83836 15L7 14.1617L11.3233 9.8384L7 5.51512L7.83836 4.67676L13 9.8384L7.83836 15Z" fill="currentColor"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("go_check")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M7.83836 15L7 14.1617L11.3233 9.8384L7 5.51512L7.83836 4.67676L13 9.8384L7.83836 15Z",
                    fill: "currentColor"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/comparison-panel/comparison-panel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const useFetchSuggestionsSearch = () => {
  const app = useNuxtApp();
  const router = useRouter();
  const route = useRoute();
  const { isLoading, startLoading, stopLoading } = useFormLoader();
  const searchValue = ref("");
  const showSuggestions = ref(false);
  const suggestions = ref(null);
  const categorySuggestions = ref(null);
  const isNoResultMessageShown = ref(false);
  const bannersSuggestions = ref(null);
  const resetSearchValue = () => {
    searchValue.value = "";
    stopLoading();
    showSuggestions.value = false;
  };
  const initAllSuggestions = (data, banners) => {
    var _a, _b;
    suggestions.value = (data == null ? void 0 : data.products) || [];
    categorySuggestions.value = (data == null ? void 0 : data.categories) || [];
    bannersSuggestions.value = banners == null ? void 0 : banners.data;
    showSuggestions.value = !!((_a = suggestions.value) == null ? void 0 : _a.length) || !!((_b = categorySuggestions.value) == null ? void 0 : _b.length);
    isNoResultMessageShown.value = !showSuggestions.value;
  };
  const submit = async () => {
    if (!searchValue.value || isLoading.value) return;
    startLoading();
    try {
      const [productResponse, bannerResponse] = await Promise.all([
        SearchApiService.suggestionSearch({ query: searchValue.value }),
        BannerApiService.searchBanner({ query: searchValue.value })
      ]);
      const { data } = productResponse;
      const { data: banners } = bannerResponse;
      if (isLoading.value === false) return;
      initAllSuggestions(data, banners);
    } catch (error) {
      console.error(error.message || error);
    } finally {
      stopLoading();
    }
  };
  const updateSearchHandler = ($event) => {
    searchValue.value = $event;
  };
  const goToSearchPage = (queryText) => {
    if (!queryText) return;
    showSuggestions.value = false;
    isNoResultMessageShown.value = false;
    stopLoading();
    router.push(
      app.$localeRoute({
        path: "/search",
        query: {
          query: queryText
        }
      })
    );
  };
  watch(
    () => route.path,
    () => {
      resetSearchValue();
    }
  );
  return {
    searchValue,
    showSuggestions,
    resetSearchValue,
    updateSearchHandler,
    submit,
    suggestions,
    categorySuggestions,
    isNoResultMessageShown,
    initAllSuggestions,
    goToSearchPage,
    isSearchLoading: isLoading,
    bannersSuggestions
  };
};
const MIN_INPUT_LENGTH = 2;
const _sfc_main$6 = {
  __name: "catalog-search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const {
      searchValue,
      showSuggestions,
      submit,
      suggestions,
      categorySuggestions,
      isNoResultMessageShown
    } = useFetchSuggestionsSearch();
    const target = ref(null);
    const isShowResetButton = ref(false);
    const isInputFocused = ref(false);
    onClickOutside(target, () => {
      isInputFocused.value = false;
      isNoResultMessageShown.value = false;
    });
    watchDebounced(
      searchValue,
      async () => {
        var _a;
        const value = (_a = searchValue.value) == null ? void 0 : _a.trim();
        if (!value || value.length < MIN_INPUT_LENGTH) {
          isNoResultMessageShown.value = false;
          showSuggestions.value = false;
          suggestions.value = null;
          categorySuggestions.value = null;
          return;
        }
        await submit();
      },
      { debounce: 1e3, maxWait: 3e3 }
    );
    watch(
      () => {
        var _a;
        return (_a = route.query) == null ? void 0 : _a.query;
      },
      (newQuery) => {
        isShowResetButton.value = false;
        isInputFocused.value = false;
        searchValue.value = newQuery;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_client_only = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "catalog-search"
      }, _attrs))} data-v-f9a6a1e0>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "catalog-search_icon",
        icon: "searchIcon"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(searchValue))} type="search" class="catalog-search_input"${ssrRenderAttr("placeholder", _ctx.$t("find_in_acean"))} data-v-f9a6a1e0><div style="${ssrRenderStyle(unref(isShowResetButton) || unref(searchValue) ? null : { display: "none" })}" class="catalog-search_clear" data-v-f9a6a1e0>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "close",
        "container-size": ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/search/components/catalog-search/catalog-search.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f9a6a1e0"]]);
const catalogSearch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "catalog-header-menu",
  __ssrInlineRender: true,
  props: {
    topBarAprMenu: {
      type: Object,
      default: () => ({})
    },
    catalogMenu: {
      type: Object,
      default: () => ({})
    },
    isMenuOpened: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const app = useNuxtApp();
    const router = useRouter();
    const { isAuthUser } = useUserStore();
    const props = __props;
    const isOnMounted = ref(false);
    const menuRef = ref(null);
    onClickOutside(menuRef, () => hoveredIndex.value = null);
    const closeMenu = inject("closeMenu");
    const isShowLoginModal = ref(false);
    const hoveredIndex = ref(null);
    const clickedIndex = ref(null);
    const menu = computed(
      () => {
        var _a;
        return (_a = props.topBarAprMenu) == null ? void 0 : _a.data.map((menuItem) => ({ ...menuItem }));
      }
    );
    function showLoginModal() {
      isShowLoginModal.value = true;
      closeMenu();
    }
    const redirectToProfile = () => {
      router.push(
        app.$localeRoute({
          path: "/account/info"
        })
      );
    };
    watch(
      () => props.isMenuOpened,
      () => clickedIndex.value = null
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CatalogSearch = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_Icon = __nuxt_component_1$1;
      const _component_SelectLanguage = __nuxt_component_3$1;
      const _component_ToolsListItem = ToolsListItem;
      const _component_ModalLight = _sfc_main$h;
      const _component_LoginModalContent = LoginModalContent;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "catalog-header-menu" }, _attrs))} data-v-40ba6938><div class="catalog-header-menu_search" data-v-40ba6938>`);
      _push(ssrRenderComponent(_component_CatalogSearch, null, null, _parent));
      _push(`</div><ul class="catalog-header-menu_list" data-v-40ba6938><!--[-->`);
      ssrRenderList(unref(menu), (menuItem, index) => {
        var _a, _b;
        _push(`<li class="${ssrRenderClass([{
          hovered: index === unref(hoveredIndex),
          clicked: index === unref(clickedIndex)
        }, "catalog-header-menu_item"])}" data-v-40ba6938>`);
        if ((_a = menuItem == null ? void 0 : menuItem.children) == null ? void 0 : _a.length) {
          _push(`<span class="catalog-header-menu_link" data-v-40ba6938>${ssrInterpolate(menuItem.name)}</span>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: _ctx.localePath(menuItem.url),
            class: ["catalog-header-menu_link", {
              "catalog-header-menu_link__divider": menuItem.name.length < 2
            }],
            onClick: unref(closeMenu)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(menuItem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(menuItem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        if ((_b = menuItem == null ? void 0 : menuItem.children) == null ? void 0 : _b.length) {
          _push(`<ul class="catalog-header-menu_sublist" data-v-40ba6938><button class="catalog-header-menu_link catalog-header-menu_link__back" data-v-40ba6938>`);
          _push(ssrRenderComponent(_component_Icon, { icon: "chevronLeftIcon" }, null, _parent));
          _push(` ${ssrInterpolate(menuItem.name)}</button><!--[-->`);
          ssrRenderList(menuItem.children, (childMenuItem) => {
            _push(`<li class="catalog-header-menu_item catalog-header-menu_item__inner" data-v-40ba6938>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: _ctx.localePath(childMenuItem.url),
              class: "catalog-header-menu_link catalog-header-menu_link__sublist",
              onClick: unref(closeMenu)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(childMenuItem.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(childMenuItem.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="catalog-header-menu_bottom" data-v-40ba6938><div class="catalog-header-menu_bottom-item" data-v-40ba6938>`);
      _push(ssrRenderComponent(_component_SelectLanguage, null, null, _parent));
      _push(`</div><div class="catalog-header-menu_bottom-item catalog-header-menu_bottom-item__indent" data-v-40ba6938>`);
      if (unref(isAuthUser) && unref(isOnMounted)) {
        _push(ssrRenderComponent(_component_ToolsListItem, {
          title: _ctx.$t("account"),
          icon: "user",
          "is-show-title": false,
          onClick: redirectToProfile
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_ToolsListItem, {
          title: _ctx.$t("login"),
          icon: "user",
          "is-show-title": false,
          onClick: showLoginModal
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isShowLoginModal),
        "onUpdate:modelValue": ($event) => isRef(isShowLoginModal) ? isShowLoginModal.value = $event : null,
        "max-width": 600
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LoginModalContent, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LoginModalContent)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/catalog/components/catalog-header-menu/catalog-header-menu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CatalogHeaderMenu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-40ba6938"]]);
const useMenuStore = defineStore("menu", {
  state: () => ({
    topBar: null,
    catalog: null,
    navBar: null,
    footer: null,
    footerBar: null,
    topBarApr: null
  }),
  getters: {
    getTopBar() {
      return this.topBar;
    },
    getTopBarApr() {
      return this.topBarApr;
    },
    getCatalog() {
      return this.catalog;
    },
    getNavbar() {
      return this.navBar;
    },
    getFooter() {
      return this.footer;
    },
    getFooterBar() {
      return this.footerBar;
    },
    getMenu() {
      return this;
    }
  },
  actions: {
    setMenus(menus) {
      var _a2;
      var _a, _b, _c, _d, _e, _f;
      if (!menus) return;
      const aprMenuWithDividerKey = "menu_header_3";
      this.topBar = (_a = menus.menu_header_1) == null ? void 0 : _a[0];
      this.navBar = (_b = menus.menu_header_2) == null ? void 0 : _b[0];
      this.footer = (_c = menus.menu_footer) == null ? void 0 : _c[0];
      this.footerBar = (_d = menus.menu_footer_2) == null ? void 0 : _d[0];
      this.catalog = (_a2 = (_f = (_e = menus.menu_catalog) == null ? void 0 : _e[0]) == null ? void 0 : _f.data) != null ? _a2 : [];
      if (menus[aprMenuWithDividerKey] && menus[aprMenuWithDividerKey].length > 0) {
        this.topBarApr = menus[aprMenuWithDividerKey][0];
        if (menus[aprMenuWithDividerKey].length > 1)
          this.topBarDividerApr = menus[aprMenuWithDividerKey][1];
      }
    }
  }
});
const _sfc_main$4 = {
  __name: "app-header",
  __ssrInlineRender: true,
  setup(__props) {
    const ToolsList = defineAsyncComponent(
      () => import('./tools-list-D9cfkwsV.mjs')
    );
    const CatalogSearch = defineAsyncComponent(
      () => Promise.resolve().then(function() {
        return catalogSearch;
      })
    );
    const headerRef = ref(null);
    const isSticky = ref(false);
    const isAnimated = ref(false);
    const isMenuOpened = ref(false);
    ref(false);
    const menuStore = useMenuStore();
    const catalogMenu = computed(() => menuStore.getCatalog);
    const topBarAprMenu = computed(() => menuStore.getTopBarApr);
    const route = useRoute();
    const { isHidden } = useHeaderState(headerRef);
    const toggleMenu = () => {
      isMenuOpened.value = !isMenuOpened.value;
      (void 0).querySelector("html").classList.toggle("menu-opened");
    };
    watch(
      () => route.path,
      () => {
        isMenuOpened.value = false;
        (void 0).querySelector("html").classList.remove("menu-opened");
      }
    );
    provide("closeMenu", toggleMenu);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Burger = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_StoreLocatorWidget = __nuxt_component_2;
      const _component_SelectLanguage = __nuxt_component_3$1;
      const _component_ComparisonPanel = _sfc_main$7;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "headerRef",
        ref: headerRef,
        class: ["header", {
          header__sticky: unref(isSticky),
          animated: unref(isAnimated),
          hidden: unref(isHidden)
        }]
      }, _attrs))} data-v-7de20da7><div class="header_container" data-v-7de20da7><div class="header_top" data-v-7de20da7>`);
      _push(ssrRenderComponent(_component_Burger, {
        opened: unref(isMenuOpened),
        onClick: toggleMenu
      }, null, _parent));
      _push(ssrRenderComponent(_component_AppLogo, null, null, _parent));
      _push(`<div class="header_search" data-v-7de20da7>`);
      _push(ssrRenderComponent(unref(CatalogSearch), null, null, _parent));
      _push(`</div><div class="header_top-menu" data-v-7de20da7><div class="header_store-locator" data-v-7de20da7>`);
      _push(ssrRenderComponent(_component_StoreLocatorWidget, null, null, _parent));
      _push(`</div><div class="header_tools" data-v-7de20da7><div class="header_languages" data-v-7de20da7>`);
      _push(ssrRenderComponent(_component_SelectLanguage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(ToolsList), { "list-order": _ctx.toolsListOrder }, null, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([{ opened: unref(isMenuOpened) }, "header_menu"])}" data-v-7de20da7>`);
      if ((_b = (_a = unref(topBarAprMenu)) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
        _push(ssrRenderComponent(CatalogHeaderMenu, {
          "top-bar-apr-menu": unref(topBarAprMenu),
          "catalog-menu": unref(catalogMenu),
          "is-menu-opened": unref(isMenuOpened)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ComparisonPanel, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/app-header/app-header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7de20da7"]]);
const subscibe = `${PUBLIC_PREFIX}subscription`;
const subscribeApiService = {
  async sendSubscribeData(email2) {
    try {
      const { post } = useApi();
      const { status } = await post(`${subscibe}`, { email: email2 });
      return status.value !== "error";
    } catch {
      return false;
    }
  }
};
const _sfc_main$3 = {
  __name: "footer-subscribe-form",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const { startLoading, stopLoading, isLoading } = useFormLoader();
    const { getErrors } = useFormUtils();
    const backendErrors = ref([]);
    const isSuccessResponse = ref(false);
    const emailErrors = computed(() => [
      ...getErrors(v$.value.email),
      ...backendErrors.value
    ]);
    const statusInfo = computed(
      () => isSuccessResponse.value ? [t("thanks_for_subscribing")] : emailErrors.value
    );
    const statusIcon = computed(
      () => isSuccessResponse.value ? "confirmedIcon" : "warningIcon"
    );
    const formData = reactive({
      email: null
    });
    const formRules = {
      email: {
        defaultRequiredMessage: helpers.withMessage(t("email_empty"), required),
        emailPattern: helpers.withMessage(t("email_invalid"), email)
      }
    };
    const v$ = useVuelidate(formRules, formData);
    const { getUser } = useUserStore();
    const clearInputField = () => {
      formData.email = null;
      v$.value.$reset();
    };
    const checkFormValid = () => {
      var _a, _b;
      (_a = v$.value) == null ? void 0 : _a.$touch();
      return !((_b = v$.value) == null ? void 0 : _b.$invalid);
    };
    const clearErrors = () => {
      backendErrors.value = [];
      isSuccessResponse.value = false;
      v$.value.$reset();
    };
    const sendEmail = async () => {
      var _a, _b, _c, _d, _e, _f;
      backendErrors.value = [];
      isSuccessResponse.value = false;
      if (!checkFormValid()) {
        return false;
      }
      try {
        startLoading();
        if (!getUser.value) {
          const response = await subscribeApiService.sendSubscribeData(
            formData.email
          );
          if (!response) {
            backendErrors.value = ["subscribe_error"];
          }
        } else {
          const response = await AccountApiService.patchProfile({
            subscribe: true,
            email: formData.email
          });
          if (((_c = (_b = (_a = response.error) == null ? void 0 : _a.value) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || ((_f = (_e = (_d = response.error) == null ? void 0 : _d.value) == null ? void 0 : _e.data) == null ? void 0 : _f.error)) {
            backendErrors.value = [
              response.error.value.data.message || response.error.value.data.error
            ];
          }
        }
        if (!backendErrors.value.length) {
          clearInputField();
          isSuccessResponse.value = true;
        }
      } catch (error) {
        console.error(error);
      } finally {
        stopLoading();
      }
    };
    watch(route, () => {
      clearInputField();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_TextInput = _sfc_main$i;
      const _component_UILoader = __nuxt_component_1$3;
      const _component_Icon = __nuxt_component_1$1;
      const _component_ConfirmedIcon = __nuxt_component_3$2;
      const _component_WarningIcon = __nuxt_component_4$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-subscribe-form" }, _attrs))} data-v-ad9f20f2><span class="footer-subscribe-form_title" data-v-ad9f20f2>${ssrInterpolate(_ctx.$t("subscribe_to_our_emails"))}</span><div class="footer-subscribe-form_input-wrapper" data-v-ad9f20f2>`);
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(v$).email.$model,
        "onUpdate:modelValue": ($event) => unref(v$).email.$model = $event,
        label: "email",
        disabled: unref(isLoading),
        type: "email",
        class: "footer-subscribe-form_input",
        onFocus: clearErrors
      }, null, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UILoader, {
          class: "footer-subscribe-form_icon",
          "inherit-color": "",
          small: ""
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          icon: "enterIcon",
          class: ["footer-subscribe-form_icon", { disabled: unref(isLoading) }],
          onClick: sendEmail
        }, null, _parent));
      }
      if ((_a = unref(statusInfo)) == null ? void 0 : _a.length) {
        _push(`<div class="footer-subscribe-form_errors" data-v-ad9f20f2>`);
        if (unref(statusIcon) === "confirmedIcon") {
          _push(ssrRenderComponent(_component_ConfirmedIcon, { class: "footer-subscribe-form_success-icon" }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_WarningIcon, { class: "footer-subscribe-form_error-icon" }, null, _parent));
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(statusInfo), (status) => {
          _push(`<span data-v-ad9f20f2>${ssrInterpolate(status)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/forms/footer-subscribe-form/footer-subscribe-form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ad9f20f2"]]);
const _sfc_main$2 = {
  __name: "social-media-list",
  __ssrInlineRender: true,
  props: {
    alignLeft: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const configStore = useConfigStore();
    const socialLinks = configStore.getSocialLinks;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (unref(socialLinks).length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({
          class: ["social-media-list", { alignLeft: "social-media-list__align-left" }]
        }, _attrs))} data-v-2f5b4497><!--[-->`);
        ssrRenderList(unref(socialLinks), (link, index) => {
          _push(`<li class="social-media-list_item" data-v-2f5b4497><a class="social-media-list_icon"${ssrRenderAttr("href", link.href)} target="_blank" data-v-2f5b4497>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: link.name
          }, null, _parent));
          _push(`</a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/lists/social-media-list/social-media-list.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f5b4497"]]);
const _sfc_main$1 = {
  __name: "app-footer",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const sortMenuItems = (menuItems) => {
      const sortedItems = menuItems.sort((a, b) => (a.sort || 0) - (b.sort || 0));
      sortedItems.forEach((item) => {
        if (item.children && item.children.length) {
          item.children = sortMenuItems(item.children);
        }
      });
      return sortedItems;
    };
    const menuStore = useMenuStore();
    const footerMenu = computed(() => {
      var _a;
      const menu = { ...menuStore.getFooter };
      if ((_a = menu == null ? void 0 : menu.data) == null ? void 0 : _a.length) {
        menu.data = sortMenuItems(menu.data);
      }
      if (!menu.data) {
        return [];
      }
      return menu.data.slice(0, 4);
    });
    const menusOpenedState = ref(
      Array.from(Array(footerMenu.value.length).fill(false))
    );
    const pageStore = usePagesStore();
    const submitOrderPopupHeight = computed(
      () => {
        var _a;
        return (_a = pageStore.footer) == null ? void 0 : _a.submitOrderPopupHeight;
      }
    );
    const aboutSiteInfo = computed(() => pageStore.getAboutSiteInfo);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UiRotateArrow = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_0$2$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_FooterSubscribeForm = __nuxt_component_3;
      const _component_SocialMediaList = __nuxt_component_4;
      const _component_UiImg = _sfc_main$g;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        style: {
          marginBottom: unref(submitOrderPopupHeight) ? `${unref(submitOrderPopupHeight)}px` : ""
        }
      }, _attrs))} data-v-2e6cbacd><div class="footer_container" data-v-2e6cbacd><div class="footer_sections" data-v-2e6cbacd>`);
      if (unref(footerMenu)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(footerMenu), (menuItem, index) => {
          _push(`<div class="${ssrRenderClass([{ active: unref(menusOpenedState)[index] }, "footer_section"])}" data-v-2e6cbacd><span class="footer_menu-title" data-v-2e6cbacd>${ssrInterpolate(menuItem.name)} <div class="footer_menu-title-icon" data-v-2e6cbacd>`);
          _push(ssrRenderComponent(_component_UiRotateArrow, {
            active: unref(menusOpenedState)[index]
          }, null, _parent));
          _push(`</div></span><ul class="footer_menu" data-v-2e6cbacd><!--[-->`);
          ssrRenderList(menuItem.children, (submenuItem, index2) => {
            _push(`<li class="footer_menu-item" data-v-2e6cbacd>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)(submenuItem.url),
              class: "footer_menu-link"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(submenuItem.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(submenuItem.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer_section" data-v-2e6cbacd><span class="footer_menu-title footer_menu-title__logo" data-v-2e6cbacd>${ssrInterpolate(_ctx.$t("apple_premium_partner"))}</span>`);
      _push(ssrRenderComponent(_component_AppLogo, { small: "" }, null, _parent));
      _push(`</div></div><div class="footer_bottom" data-v-2e6cbacd>`);
      _push(ssrRenderComponent(_component_FooterSubscribeForm, null, null, _parent));
      _push(`<div data-v-2e6cbacd><div class="footer_social" data-v-2e6cbacd>`);
      _push(ssrRenderComponent(_component_SocialMediaList, null, null, _parent));
      _push(`</div>`);
      if ((_a = unref(aboutSiteInfo)) == null ? void 0 : _a.payments) {
        _push(`<div class="footer_payments" data-v-2e6cbacd><!--[-->`);
        ssrRenderList(unref(aboutSiteInfo).payments, (paymentSrc) => {
          _push(`<div class="footer_payment" data-v-2e6cbacd>`);
          if (paymentSrc) {
            _push(ssrRenderComponent(_component_UiImg, {
              class: "footer_payment-icon",
              src: paymentSrc
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(aboutSiteInfo)) == null ? void 0 : _b.copyright) {
        _push(`<p class="footer_copyright" data-v-2e6cbacd>${ssrInterpolate(unref(aboutSiteInfo).copyright)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/footer/components/app-footer/app-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2e6cbacd"]]);
const useProductAnalyticsPage = () => {
  const checkRoute = (route) => {
    const keys = ["category", "brands", "index"];
    return keys.some((key) => route == null ? void 0 : route.includes(key));
  };
  return {
    checkRoute
  };
};
const LIMIT_PRODUCTS = 50;
const useProductViewStore = defineStore("productView", {
  state: () => ({
    viewProductsMap: /* @__PURE__ */ new Map(),
    isAnalyticsPage: false
  }),
  getters: {
    getViewProducts() {
      return Array.from(this.viewProductsMap.values());
    }
  },
  actions: {
    setViewProductsMap(product) {
      if (this.viewProductsMap.size < LIMIT_PRODUCTS && this.isAnalyticsPage && product && product.id && !this.viewProductsMap.has(product.id)) {
        this.viewProductsMap.set(product.id, product);
      }
    },
    setIsAnalyticsPage(isAnalyticsPage) {
      this.isAnalyticsPage = isAnalyticsPage;
    },
    resetProduct() {
      this.viewProductsMap = /* @__PURE__ */ new Map();
      this.isAnalyticsPage = false;
    }
  }
});
const resource = `${PUBLIC_PREFIX}menus`;
const MenuApiService = {
  async getMenusByKeys(keys, lang) {
    const { get } = useApi();
    const { data } = await get(`${resource}`, { "key[]": keys, lang });
    return {
      data: data.value
    };
  }
};
const initStore = async ({ i18n, route, $device }) => {
  var _a, _b, _c, _d, _e;
  const deviceStore = useDeviceStore();
  const initBreakpoint = () => {
    {
      deviceStore.setDefaultBreakpoint(true);
    }
  };
  initBreakpoint();
  const cities = [{
    id: 1,
    slug: "kyiv",
    iso_3166_2_code: "UA-30",
    translations: {
      city_name: "cityNameKyiv",
      city_name_in: "cityNameInKyiv"
    },
    selected: false,
    pivot: {
      site_id: 19,
      site_city_id: 1,
      is_default: 1
    }
  }];
  const { locale } = i18n;
  const promisesRes = await Promise.allSettled([
    MenuApiService.getMenusByKeys(
      [
        "menu_footer",
        "menu_footer_2",
        "menu_header_1",
        "menu_header_2",
        "menu_header_3",
        "menu_catalog"
      ],
      locale.value
    ),
    SiteInfoApiService.getSiteInfo(),
    PageApiService.getPageBySlug("footer", {
      lang: locale,
      type: "footer"
    }),
    BannerApiService.getGroupBy(bannerGroupsNames.topBar, locale)
  ]);
  const menuStore = useMenuStore();
  const menusRes = promisesRes[0];
  menuStore.setMenus((_b = (_a = menusRes.value) == null ? void 0 : _a.data) == null ? void 0 : _b.data);
  const siteInfo = promisesRes[1];
  const configStore = useConfigStore();
  configStore.setConfig((_d = (_c = siteInfo.value) == null ? void 0 : _c.data) == null ? void 0 : _d.data);
  const footerPageRes = promisesRes[2];
  if ((_e = footerPageRes.value) == null ? void 0 : _e.data) {
    const pagesStore = usePagesStore();
    pagesStore.setFooterPage(footerPageRes.value.data);
  }
  const topBarBanners = promisesRes[3];
  const bannersStore = useBannerStore();
  bannersStore.setTopBarBanners(topBarBanners.value);
  const localCitiesStore = useLocalCitiesStore();
  const localCityCookie = useCookie("local-city");
  localCitiesStore.setConfirmStatus(localCityCookie != null ? localCityCookie : false);
  const langLocaleIndex = i18n.locale.value === i18n.defaultLocale ? 0 : 1;
  const possiblelocalVersionSlug = route.path.split("/")[1 + langLocaleIndex];
  const selectedLocalCity = cities.find(
    (city) => city.slug === possiblelocalVersionSlug
  );
  if (selectedLocalCity) {
    localCitiesStore.setCurrent(selectedLocalCity);
    localCityCookie.value = selectedLocalCity.id;
    return;
  }
  const foundCity = cities.find((city) => city.id === localCityCookie);
  if (foundCity) {
    localCitiesStore.setCurrent(foundCity);
    return;
  }
  localCitiesStore.setCurrent(cities[0]);
  localCityCookie.value = cities[0].id;
};
const useInitBreakpointQueries = () => {
  useDeviceStore();
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const app = useNuxtApp();
    const configStore = useConfigStore();
    const i18n = useI18n();
    function geti18nHeads() {
      const i18nHead = app.$localeHead({ addSeoAttributes: true });
      i18nHead.link = i18nHead.link.reduce((acc, val) => {
        var _a;
        const isNotAlternateRel = (val == null ? void 0 : val.rel) !== "alternate";
        const isUniqAccEl = !acc.find((el) => el.hreflang === val.hreflang);
        const isUniqEl = ((_a = i18nHead.link.filter((el) => {
          var _a2;
          return (_a2 = el.hreflang) == null ? void 0 : _a2.includes(val.hreflang);
        })) == null ? void 0 : _a.length) < 2;
        const alternativeEl = i18nHead.link.find(
          (el) => {
            var _a2, _b, _c;
            return ((_a2 = el.hreflang) == null ? void 0 : _a2.includes(val.hreflang)) && ((_b = el.hreflang) == null ? void 0 : _b.length) > ((_c = val.hreflang) == null ? void 0 : _c.length);
          }
        );
        if (isNotAlternateRel || isUniqEl && isUniqAccEl) {
          acc.push(val);
          return acc;
        }
        if (!alternativeEl) {
          return acc;
        }
        acc.push(alternativeEl);
        return acc;
      }, []);
      i18nHead.link.forEach((el) => {
        el.href = route.fullPath + el.href;
      });
      i18nHead.link.push({
        rel: "icon",
        type: "image/x-icon",
        href: configStore.getFavicon
      });
      i18nHead.meta.push({
        name: "google-site-verification",
        content: "v_g1wvNmBybTw0z5R2ZnlwJRSUgM-a56RsaAJGQK5o8"
      });
      return i18nHead;
    }
    useCitiesRouter();
    [__temp, __restore] = withAsyncContext(() => initStore({
      i18n,
      route,
      $device: {}
    })), await __temp, __restore();
    useHead({
      ...geti18nHeads()
    });
    useInitBreakpointQueries();
    useAuth();
    const checkPageName = (val) => {
      var _a;
      return !!((_a = route == null ? void 0 : route.name) == null ? void 0 : _a.includes(val));
    };
    useUserStore();
    useCartStore();
    useShopsStore();
    const { checkRoute } = useProductAnalyticsPage();
    ref(false);
    const bannerStore = useBannerStore();
    const topbarBannerGroup = computed(() => bannerStore.getTopBarBanners);
    const isCheckoutPage = computed(() => checkPageName("checkout"));
    watch(
      () => route.path,
      () => {
        const productViewStore = useProductViewStore();
        productViewStore.setIsAnalyticsPage(checkRoute(route.name));
      }
    );
    const cartWidgetState = ref({
      opened: false,
      hasNewProducts: false
    });
    function toggleCartWidget(hasNewProducts = false, state) {
      cartWidgetState.value = {
        opened: state || !cartWidgetState.value.opened,
        hasNewProducts
      };
    }
    provide("toggleCartWidget", toggleCartWidget);
    provide("cartWidgetState", cartWidgetState);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RibbonBanner = __nuxt_component_0$2;
      const _component_CheckoutHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(topbarBannerGroup) && unref(topbarBannerGroup).banners.length && !unref(isCheckoutPage)) {
        _push(ssrRenderComponent(_component_RibbonBanner, {
          banners: unref(topbarBannerGroup).banners,
          frequency: unref(topbarBannerGroup).frequencySlider
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isCheckoutPage)) {
        _push(ssrRenderComponent(_component_CheckoutHeader, null, null, _parent));
      } else {
        _push(ssrRenderComponent(AppHeader, null, null, _parent));
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      if (!unref(isCheckoutPage)) {
        _push(ssrRenderComponent(AppFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div name="app-outer"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { ToolsListItem as T, _sfc_main$a as _, _default as a };
//# sourceMappingURL=default-DhY170Yj.mjs.map
