import { ref, inject, mergeProps, withCtx, createVNode, unref, defineComponent, computed, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, renderSlot, createTextVNode, withAsyncContext, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { onClickOutside } from '@vueuse/core';
import { _ as _export_sfc, F as useUserStore, i as useCartStore, y as useConfigStore, d as __nuxt_component_0$2, J as useAuth, H as filterOutDeliveryProducts, c as useLocalePath, a as useI18n, v as bannerGroupsNames, k as __nuxt_component_6, j as useProductStore } from './server.mjs';
import { T as ToolsListItem, _ as _sfc_main$a } from './default-DhY170Yj.mjs';
import { _ as _sfc_main$7 } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { _ as _sfc_main$8 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1$2 } from './currency-text-DJsP4_8P.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { _ as __nuxt_component_4 } from './product-cross-sale-B52CrYWX.mjs';
import humps from 'humps';
import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';
import { L as LoginModalContent } from './login-modal-content-D0aLq5B-.mjs';
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
import 'swiper/vue';
import 'swiper/modules';
import './client-only-Bwxzq3Sq.mjs';
import './local-cities-CykZaXGK.mjs';
import './shops-qmTazkSN.mjs';
import './app-logo-CTrjGh4b.mjs';
import './stores-sidebar-0sYphcfi.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './store-services-DdIHLKVb.mjs';
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
import './ui-rotate-arrow-B7iS75rF.mjs';
import './pages-CxSmVAwD.mjs';
import './useLoaderUtils-CiDWTT-C.mjs';
import './SearchApiService-BydxThEZ.mjs';
import './useHeaderState-DEk9LBo0.mjs';
import './ConfirmedIcon-E5WL1HmF.mjs';
import './WarningIcon-D5c5RxFI.mjs';
import './PageApiService-DEiJJG72.mjs';
import './index-r7vNs057.mjs';
import './personal-data-text-kJ244n-x.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './enter-code-content-D5GsStjK.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './product-badges-ahLlBnMK.mjs';
import './credit-price-text-B9mrfME7.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './ui-slider-button-ex5lF246.mjs';
import './ProductApiService-BgJlybnL.mjs';

const _sfc_main$6 = {
  __name: "menu-dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const configStore = useConfigStore();
    computed(() => {
      var _a;
      return (_a = configStore.getContactsInfo) != null ? _a : [];
    });
    const isOpened = ref(false);
    const selectRef = ref(null);
    onClickOutside(selectRef, () => isOpened.value = null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "selectRef",
        ref: selectRef,
        class: "menu-dropdown"
      }, _attrs))} data-v-d4246d66><button class="menu_dropdown_button" data-v-d4246d66>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</button><ul class="${ssrRenderClass([{ active: unref(isOpened) }, "menu-dropdown_content"])}" data-v-d4246d66>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/menu-dropdown/menu-dropdown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d4246d66"]]);
const _sfc_main$5 = {
  __name: "contacts-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const configStore = useConfigStore();
    const contactsArray = computed(() => {
      var _a;
      return (_a = configStore.getContactsInfo) != null ? _a : [];
    });
    const trim = (string) => string ? string.trim() : "";
    const isOpened = ref(false);
    const selectRef = ref(null);
    onClickOutside(selectRef, () => isOpened.value = null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuDropdown = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "selectRef",
        ref: selectRef,
        class: "contacts-menu"
      }, _attrs))} data-v-80e33be3>`);
      _push(ssrRenderComponent(_component_MenuDropdown, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(contactsArray), (contactsAdress, index) => {
              _push2(`<!--[-->`);
              if (trim(contactsAdress.phone)) {
                _push2(`<li class="menu-phone" data-v-80e33be3${_scopeId}><a${ssrRenderAttr("href", `tel:${trim(contactsAdress.phone)}`)} class="contacts-menu_link" data-v-80e33be3${_scopeId}>${ssrInterpolate(trim(contactsAdress.phone))}</a></li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(contactsArray), (contactsAdress, index) => {
                return openBlock(), createBlock(Fragment, {
                  key: index + "-email"
                }, [
                  trim(contactsAdress.phone) ? (openBlock(), createBlock("li", {
                    key: index + "-phone",
                    class: "menu-phone"
                  }, [
                    createVNode("a", {
                      href: `tel:${trim(contactsAdress.phone)}`,
                      class: "contacts-menu_link"
                    }, toDisplayString(trim(contactsAdress.phone)), 9, ["href"])
                  ])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/contacts-menu/contacts-menu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-80e33be3"]]);
const _sfc_main$4 = defineComponent({
  name: "ToolsListAuthItem",
  components: {
    ToolsListItem
  },
  props: {
    userName: {
      type: String,
      default: null
    }
  },
  setup() {
    const { logout } = useAuth();
    const isOpened = ref(false);
    const authRef = ref(null);
    onClickOutside(authRef, () => isOpened.value = null);
    return { authRef, isOpened, logout };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuDropdown = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "authRef",
    class: "tools-list-auth-item"
  }, _attrs))} data-v-3fc361c5>`);
  _push(ssrRenderComponent(_component_MenuDropdown, null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-3fc361c5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.localePath("/account/info"),
          class: "tools-list-auth-item_dropdown-item"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("profile"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("profile")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li data-v-3fc361c5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.localePath("/account/orders"),
          class: "tools-list-auth-item_dropdown-item"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("orders"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("orders")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li data-v-3fc361c5${_scopeId}><button class="tools-list-auth-item_dropdown-item" data-v-3fc361c5${_scopeId}>${ssrInterpolate(_ctx.$t("logout"))}</button></li>`);
      } else {
        return [
          createVNode("li", null, [
            createVNode(_component_NuxtLink, {
              to: _ctx.localePath("/account/info"),
              class: "tools-list-auth-item_dropdown-item"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("profile")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createVNode("li", null, [
            createVNode(_component_NuxtLink, {
              to: _ctx.localePath("/account/orders"),
              class: "tools-list-auth-item_dropdown-item"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("orders")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createVNode("li", null, [
            createVNode("button", {
              class: "tools-list-auth-item_dropdown-item",
              onClick: _ctx.logout
            }, toDisplayString(_ctx.$t("logout")), 9, ["onClick"])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/tools-list-auth-item/tools-list-auth-item.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3fc361c5"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cart-widget-item",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { locale } = useI18n();
    const getProductName = (product) => {
      var _a, _b;
      return ((_a = product == null ? void 0 : product.name) == null ? void 0 : _a[locale.value]) || ((_b = product == null ? void 0 : product.name) == null ? void 0 : _b["en"]) || (product == null ? void 0 : product.name);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiImg = _sfc_main$8;
      const _component_CurrencyText = __nuxt_component_1$2;
      _push(`<!--[--><div class="cart-widget-item" data-v-a7804dc7><div class="cart-widget-item_image-wrapper" data-v-a7804dc7>`);
      _push(ssrRenderComponent(_component_UiImg, {
        class: "cart-widget-item_image",
        src: ("product" in _ctx ? _ctx.product : unref(useProductStore)).photoUrl
      }, null, _parent));
      _push(`<span class="cart-widget-item_count" data-v-a7804dc7>${ssrInterpolate(("product" in _ctx ? _ctx.product : unref(useProductStore)).orderedQuantity)}</span></div><div data-v-a7804dc7><span class="cart-widget-item_title" data-v-a7804dc7>${ssrInterpolate(getProductName("product" in _ctx ? _ctx.product : unref(useProductStore)))}</span><span class="cart-widget-item_price" data-v-a7804dc7>${ssrInterpolate(unref(formatPriceWithSpaces)(("product" in _ctx ? _ctx.product : unref(useProductStore)).totalPriceWithDiscount))} `);
      _push(ssrRenderComponent(_component_CurrencyText, {
        currency: "",
        "use-default": ""
      }, null, _parent));
      _push(`</span></div></div>`);
      if ((_a = ("product" in _ctx ? _ctx.product : unref(useProductStore)).bundlePairing) == null ? void 0 : _a.products.length) {
        _push(`<!--[-->`);
        ssrRenderList(("product" in _ctx ? _ctx.product : unref(useProductStore)).bundlePairing.products, (bundledProduct) => {
          _push(`<div class="cart-widget-item cart-widget-item__inner" data-v-a7804dc7><div class="cart-widget-item_image-wrapper" data-v-a7804dc7>`);
          _push(ssrRenderComponent(_component_UiImg, {
            class: "cart-widget-item_image",
            src: bundledProduct.photoUrl
          }, null, _parent));
          _push(`<span class="cart-widget-item_count" data-v-a7804dc7>${ssrInterpolate(bundledProduct.orderedQuantity)}</span></div><div data-v-a7804dc7><span class="cart-widget-item_title" data-v-a7804dc7>${ssrInterpolate(getProductName(bundledProduct))}</span><span class="cart-widget-item_price" data-v-a7804dc7>${ssrInterpolate(unref(formatPriceWithSpaces)(bundledProduct.totalPriceWithDiscount))} `);
          _push(ssrRenderComponent(_component_CurrencyText, {
            currency: "",
            "use-default": ""
          }, null, _parent));
          _push(`</span></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-widget/components/cart-widget-item/cart-widget-item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a7804dc7"]]);
const _sfc_main$2 = {
  __name: "cart-widget-banners",
  __ssrInlineRender: true,
  props: {
    banners: {
      type: Array,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$8;
      if (__props.banners) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-widget-banners" }, _attrs))} data-v-fcf2c43a><!--[-->`);
        ssrRenderList(__props.banners.slice(0, 2), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.name,
            to: item.url,
            class: "cart-widget-banners_item",
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d;
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiImg, {
                  src: (_b = (_a = item.content.bannerSizes[0].image) == null ? void 0 : _a.file) == null ? void 0 : _b.path
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiImg, {
                    src: (_d = (_c = item.content.bannerSizes[0].image) == null ? void 0 : _c.file) == null ? void 0 : _d.path
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-widget/components/cart-widget-banners/cart-widget-banners.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fcf2c43a"]]);
const _sfc_main$1 = {
  __name: "cart-widget",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { camelizeKeys } = humps;
    const { getCart, isCartLoading, getCartPositionsQuantity } = useCartStore();
    const showCrossSale = ref(false);
    const cartProducts = computed(() => {
      var _a;
      return ((_a = getCart == null ? void 0 : getCart.value) == null ? void 0 : _a.products) || [];
    });
    const orderProducts = computed(
      () => filterOutDeliveryProducts(cartProducts.value)
    );
    const productsIds = computed(
      () => orderProducts.value.map((product) => product.id)
    );
    const isLoading = computed(() => isCartLoading.value);
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const toggleCartWidget = inject("toggleCartWidget");
    const cartWidgetState = inject("cartWidgetState");
    const bannersData = ([__temp, __restore] = withAsyncContext(() => BannerApiService.getGroupBy(
      bannerGroupsNames.cartWidgetBanner,
      locale
    )), __temp = await __temp, __restore(), __temp);
    const onCrossProductsHandler = (showSliderValue) => {
      showCrossSale.value = showSliderValue;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = _sfc_main$a;
      const _component_Icon = __nuxt_component_1$1;
      const _component_UiPreloader = __nuxt_component_2;
      const _component_CartWidgetItem = __nuxt_component_3$1;
      const _component_ProductCrossSale = __nuxt_component_4;
      const _component_CartWidgetBanners = __nuxt_component_5;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_Sidebar, mergeProps({
        opened: unref(cartWidgetState).opened,
        "max-width": 720,
        onClose: unref(toggleCartWidget)
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(cartProducts).length !== 0) {
              _push2(`<div class="cart-widget_footer" data-v-8799e832${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                class: "cart-widget_footer-button",
                href: unref(localePath)("/cart"),
                secondary: "",
                onClick: unref(toggleCartWidget)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("view_my_cart"))} (${ssrInterpolate(unref(getCartPositionsQuantity))}) `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("view_my_cart")) + " (" + toDisplayString(unref(getCartPositionsQuantity)) + ") ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: "cart-widget_footer-button",
                href: unref(localePath)("/checkout"),
                onClick: unref(toggleCartWidget)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("checkout"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("checkout")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(cartProducts).length !== 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "cart-widget_footer"
              }, [
                createVNode(_component_Button, {
                  class: "cart-widget_footer-button",
                  href: unref(localePath)("/cart"),
                  secondary: "",
                  onClick: unref(toggleCartWidget)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("view_my_cart")) + " (" + toDisplayString(unref(getCartPositionsQuantity)) + ") ", 1)
                  ]),
                  _: 1
                }, 8, ["href", "onClick"]),
                createVNode(_component_Button, {
                  class: "cart-widget_footer-button",
                  href: unref(localePath)("/checkout"),
                  onClick: unref(toggleCartWidget)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("checkout")), 1)
                  ]),
                  _: 1
                }, 8, ["href", "onClick"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="cart-widget" data-v-8799e832${_scopeId}><button class="cart-widget_back" data-v-8799e832${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "chevronLeftIcon",
              class: "cart-widget_back-icon"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("continue_shopping"))}</button>`);
            if (unref(isLoading) && unref(cartProducts).length === 0) {
              _push2(ssrRenderComponent(_component_UiPreloader, { class: "cart-widget_loading" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              if (unref(cartProducts).length === 0) {
                _push2(`<p class="cart-widget_title cart-widget_title__empty" data-v-8799e832${_scopeId}>${ssrInterpolate(_ctx.$t("your_cart_is_empty"))}</p>`);
              } else {
                _push2(`<!--[--><p class="cart-widget_title" data-v-8799e832${_scopeId}>`);
                if (unref(cartWidgetState).hasNewProducts) {
                  _push2(`<!--[-->`);
                  _push2(ssrRenderComponent(_component_Icon, { icon: "success" }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(_ctx.$t("items_added_to_cart"))}<!--]-->`);
                } else {
                  _push2(`<!--[-->${ssrInterpolate(_ctx.$t("your_cart"))}<!--]-->`);
                }
                _push2(`</p><div class="${ssrRenderClass([{ loading: unref(isLoading) }, "cart-widget_products"])}" data-v-8799e832${_scopeId}><!--[-->`);
                ssrRenderList(unref(orderProducts), (product) => {
                  _push2(ssrRenderComponent(_component_CartWidgetItem, {
                    key: product.id,
                    product: unref(camelizeKeys)(product)
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (unref(isLoading)) {
                  _push2(ssrRenderComponent(_component_UiPreloader, { class: "cart-widget_products-spinner" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div style="${ssrRenderStyle(unref(showCrossSale) ? null : { display: "none" })}" class="cart-widget_slider" data-v-8799e832${_scopeId}><p class="cart-widget_title" data-v-8799e832${_scopeId}>${ssrInterpolate(_ctx.$t("you_might_also_like"))}</p>`);
                _push2(ssrRenderComponent(_component_ProductCrossSale, {
                  "slider-key": unref(orderProducts)[0].brand,
                  product: unref(orderProducts)[0],
                  "products-ids": unref(productsIds),
                  small: "",
                  onOnCrossProductsReady: ($event) => onCrossProductsHandler(true),
                  onOnCrossProductsEmpty: ($event) => onCrossProductsHandler(false)
                }, null, _parent2, _scopeId));
                _push2(`</div><!--]-->`);
              }
              if ((_b = (_a = unref(bannersData)) == null ? void 0 : _a.banners) == null ? void 0 : _b.length) {
                _push2(`<div class="cart-widget_banners" data-v-8799e832${_scopeId}><p class="cart-widget_title" data-v-8799e832${_scopeId}>${ssrInterpolate(_ctx.$t("offers"))}</p>`);
                _push2(ssrRenderComponent(_component_CartWidgetBanners, {
                  banners: unref(bannersData).banners
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cart-widget" }, [
                createVNode("button", {
                  class: "cart-widget_back",
                  onClick: unref(toggleCartWidget)
                }, [
                  createVNode(_component_Icon, {
                    icon: "chevronLeftIcon",
                    class: "cart-widget_back-icon"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("continue_shopping")), 1)
                ], 8, ["onClick"]),
                unref(isLoading) && unref(cartProducts).length === 0 ? (openBlock(), createBlock(_component_UiPreloader, {
                  key: 0,
                  class: "cart-widget_loading"
                })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  unref(cartProducts).length === 0 ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "cart-widget_title cart-widget_title__empty"
                  }, toDisplayString(_ctx.$t("your_cart_is_empty")), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("p", { class: "cart-widget_title" }, [
                      unref(cartWidgetState).hasNewProducts ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_Icon, { icon: "success" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("items_added_to_cart")), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(_ctx.$t("your_cart")), 1)
                      ], 64))
                    ]),
                    createVNode("div", {
                      class: ["cart-widget_products", { loading: unref(isLoading) }]
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(orderProducts), (product) => {
                        return openBlock(), createBlock(_component_CartWidgetItem, {
                          key: product.id,
                          product: unref(camelizeKeys)(product)
                        }, null, 8, ["product"]);
                      }), 128)),
                      unref(isLoading) ? (openBlock(), createBlock(_component_UiPreloader, {
                        key: 0,
                        class: "cart-widget_products-spinner"
                      })) : createCommentVNode("", true)
                    ], 2),
                    withDirectives(createVNode("div", { class: "cart-widget_slider" }, [
                      createVNode("p", { class: "cart-widget_title" }, toDisplayString(_ctx.$t("you_might_also_like")), 1),
                      createVNode(_component_ProductCrossSale, {
                        "slider-key": unref(orderProducts)[0].brand,
                        product: unref(orderProducts)[0],
                        "products-ids": unref(productsIds),
                        small: "",
                        onOnCrossProductsReady: ($event) => onCrossProductsHandler(true),
                        onOnCrossProductsEmpty: ($event) => onCrossProductsHandler(false)
                      }, null, 8, ["slider-key", "product", "products-ids", "onOnCrossProductsReady", "onOnCrossProductsEmpty"])
                    ], 512), [
                      [vShow, unref(showCrossSale)]
                    ])
                  ], 64)),
                  ((_d = (_c = unref(bannersData)) == null ? void 0 : _c.banners) == null ? void 0 : _d.length) ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "cart-widget_banners"
                  }, [
                    createVNode("p", { class: "cart-widget_title" }, toDisplayString(_ctx.$t("offers")), 1),
                    createVNode(_component_CartWidgetBanners, {
                      banners: unref(bannersData).banners
                    }, null, 8, ["banners"])
                  ])) : createCommentVNode("", true)
                ], 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-widget/cart-widget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8799e832"]]);
const _sfc_main = {
  __name: "tools-list",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthUser, getUserName } = useUserStore();
    const { getCartPositionsQuantity } = useCartStore();
    const isOnMounted = ref(false);
    const isShowLoginModal = ref(false);
    const toggleCartWidget = inject("toggleCartWidget");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactsMenu = __nuxt_component_0;
      const _component_ToolsListAuthItem = __nuxt_component_1;
      const _component_ModalLight = _sfc_main$7;
      const _component_CartWidget = __nuxt_component_3;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "tools-list" }, _attrs))} data-v-4e44f90b><li class="tools-list_item" data-v-4e44f90b>`);
      _push(ssrRenderComponent(_component_ContactsMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ToolsListItem, {
              icon: "phone",
              "is-show-title": false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ToolsListItem, {
                icon: "phone",
                "is-show-title": false
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="tools-list_item tools-list_item__desktop" data-v-4e44f90b>`);
      if (unref(isAuthUser) && isOnMounted.value) {
        _push(ssrRenderComponent(_component_ToolsListAuthItem, { "user-name": unref(getUserName) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ToolsListItem, {
                icon: "account",
                "overflow-ellipsis": "",
                "is-show-title": false
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ToolsListItem, {
                  icon: "account",
                  "overflow-ellipsis": "",
                  "is-show-title": false
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(ToolsListItem, {
          title: _ctx.$t("login"),
          icon: "user",
          "is-show-title": false,
          onClick: ($event) => isShowLoginModal.value = true
        }, null, _parent));
        _push(ssrRenderComponent(_component_ModalLight, {
          modelValue: isShowLoginModal.value,
          "onUpdate:modelValue": ($event) => isShowLoginModal.value = $event,
          "max-width": 600
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(LoginModalContent, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(LoginModalContent)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</li><li class="tools-list_item" data-v-4e44f90b>`);
      _push(ssrRenderComponent(ToolsListItem, {
        counter: unref(getCartPositionsQuantity),
        "is-show-title": false,
        icon: "cart",
        onClick: unref(toggleCartWidget)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CartWidget, null, null, _parent));
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/header/components/tools-list/tools-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toolsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e44f90b"]]);

export { toolsList as default };
//# sourceMappingURL=tools-list-D9cfkwsV.mjs.map
