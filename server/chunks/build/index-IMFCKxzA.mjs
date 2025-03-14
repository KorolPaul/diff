import { _ as _export_sfc, l as useGtm, u as useRoute, C as useRouter, i as useCartStore, H as filterOutDeliveryProducts, G as CartApiService, F as useUserStore, d as __nuxt_component_0$2, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$3 } from './modal-light-Cz0YAIgT.mjs';
import { L as LoginModalContent } from './login-modal-content-D0aLq5B-.mjs';
import { computed, ref, withAsyncContext, resolveComponent, unref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './product-cross-sale-B52CrYWX.mjs';
import { _ as __nuxt_component_0$1 } from './ui-page-preloader-f4jo8KnM.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { watchOnce } from '@vueuse/core';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { P as ProductApiService } from './ProductApiService-BgJlybnL.mjs';
import { C as CartMainSectionContent } from './cart-main-section-content-k_W1aaZJ.mjs';
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
import 'humps';
import './icon-_hjsSUWU.mjs';
import './Form-ZGQdgBok.mjs';
import './useFormUtils-HyQgFuda.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
import './TextInput-HaUa076w.mjs';
import '@vuelidate/core';
import './personal-data-text-kJ244n-x.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './enter-code-content-D5GsStjK.mjs';
import './carousel-product-B_FnTkjy.mjs';
import './entity-card-BKC73J01.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './product-badges-ahLlBnMK.mjs';
import './credit-price-text-B9mrfME7.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './ui-slider-button-ex5lF246.mjs';
import './ui-preloader-C4Bi7ENY.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './index-r7vNs057.mjs';
import './UiRadio-hn8C_nHF.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './useProductPrice-CDseUihT.mjs';
import './useDateFormatter-BM16RVpG.mjs';
import './loading-CMY4YQWC.mjs';
import './trade-in-modal-content-B1OZG904.mjs';
import './Shop-VdCSyG8-.mjs';
import './shops-qmTazkSN.mjs';
import './pages-CxSmVAwD.mjs';

const _sfc_main$2 = {
  __name: "empty-cart",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthUser } = useUserStore();
    const isShowLoginModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Button = __nuxt_component_6;
      const _component_ModalLight = _sfc_main$3;
      const _component_LoginModalContent = LoginModalContent;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty-cart" }, _attrs))} data-v-6fef1575><span class="empty-cart_title" data-v-6fef1575>${ssrInterpolate(_ctx.$t("empty_cart"))}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("continue_shopping"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("continue_shopping")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(isAuthUser)) {
        _push(`<!--[--><span class="empty-cart_account" data-v-6fef1575>${ssrInterpolate(_ctx.$t("have_account"))}</span><div class="empty-cart_login" data-v-6fef1575><button class="empty-cart_login__accent" data-v-6fef1575>${ssrInterpolate(_ctx.$t("login"))}</button>\xA0<span data-v-6fef1575>${ssrInterpolate(_ctx.$t("check_faster"))}</span></div><!--]-->`);
      } else {
        _push(`<!---->`);
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/empty-cart/empty-cart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6fef1575"]]);
const _sfc_main$1 = {
  __name: "cart-main-section",
  __ssrInlineRender: true,
  props: {
    tradeInBlocks: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const {
      setCart,
      getCart,
      setCartProducts,
      transformProductsIdsToString,
      fetchCartProducts
    } = useCartStore();
    const productsInCart = ref([]);
    const { startLoading } = useFormLoader();
    const { pushGtmEvent } = useGtm();
    const isFirstCartRender = ref(true);
    const bundlesChecked = ref(false);
    const isProductDetailsLoaded = ref(false);
    startLoading();
    const prepareProductDetails = async (productsIds) => {
      var _a, _b;
      if (isProductDetailsLoaded.value && productsInCart.value) {
        return;
      }
      isProductDetailsLoaded.value = true;
      const productsIdsWithBundle = [];
      productsIds == null ? void 0 : productsIds.forEach((item) => {
        if (item.bundle_pairing) {
          item.bundle_pairing.products.forEach((bundle) => {
            productsIdsWithBundle.push(bundle);
          });
        }
        productsIdsWithBundle.push(item);
      });
      const productsQueryIds = transformProductsIdsToString(productsIdsWithBundle);
      const params = {
        search: `crm_id:${productsQueryIds}`,
        searchFields: "crm_id:in"
      };
      const products = await ProductApiService.getProducts(params);
      const productsList = (_a = products.data) == null ? void 0 : _a.data;
      const stockProducts = [];
      productsInCart.value = [];
      (_b = getCart.value) == null ? void 0 : _b.products.forEach((item) => {
        let product = Object.assign({}, item);
        productsList.forEach((el) => {
          if (item.crm_id === el.crm_id) {
            product = Object.assign(product, el);
            product.inStock = !!item.reservation || !!el.real_stock;
            if (item.name) {
              product.name = item.name;
            }
            if (item.bundle_pairing_cms_id) {
              product.bundle_pairing_cms_id = item.bundle_pairing_cms_id;
            }
            if (item.bundle_pairing) {
              product.bundle_pairing = item.bundle_pairing;
            }
          }
          stockProducts.push(el.stock);
        });
        if (product.bundle_pairing && product.bundle_pairing.products) {
          product.bundle_pairing.products.forEach((bundle) => {
            productsList.forEach((el) => {
              product.inStock = !!bundle.available_quantity;
              if (bundle.crm_id === el.crm_id) {
                Object.assign(bundle, {
                  ...el,
                  inStock: !!bundle.available_quantity
                });
              }
            });
          });
        }
        productsInCart.value.push(product);
      });
      bundlesChecked.value = true;
      isProductDetailsLoaded.value = false;
    };
    const getProductDataFromCart = (key) => {
      var _a;
      const keyId = getCart.value.products.filter(
        (el) => (el == null ? void 0 : el.product) ? el == null ? void 0 : el.product.crm_id : el.crm_id === key
      );
      return ((_a = keyId[0]) == null ? void 0 : _a.product) ? keyId[0].product.crm_id : keyId[0].crm_id;
    };
    const deleteProductFromCart = async ({ productData, isBundle }) => {
      var _a, _b;
      try {
        const key = isBundle ? productData.key : getProductDataFromCart(productData);
        const bundlePairingCmsId = isBundle ? productData.bundlePairingCmsId : null;
        const bundlePairingProductId = isBundle ? productData.bundlePairingProductId : null;
        const { data } = await CartApiService.deleteProductFromCart(
          key,
          bundlePairingCmsId,
          bundlePairingProductId
        );
        const cart = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.cart;
        const filteredProducts = filterOutDeliveryProducts(cart.products);
        setCart({ ...cart, products: filteredProducts });
        setCartProducts(filteredProducts);
        await prepareProductDetails(filteredProducts);
        fetchCartProducts();
      } catch (error) {
        console.error(error);
      }
    };
    watch(productsInCart, () => {
      var _a;
      if ((_a = productsInCart.value) == null ? void 0 : _a.length) {
        localStorage.setItem("products", JSON.stringify(productsInCart.value));
        if (isFirstCartRender.value) {
          isFirstCartRender.value = false;
        }
      }
    });
    watch(getCart, () => {
      var _a;
      if ((_a = getCart.value) == null ? void 0 : _a.products) {
        prepareProductDetails(getCart.value.products);
      }
    });
    watchOnce(productsInCart, () => {
      var _a;
      pushGtmEvent(
        "viewCart",
        (_a = productsInCart.value) == null ? void 0 : _a.map((product, index2) => {
          var _a2, _b;
          return {
            ...product,
            quantity: ((_b = (_a2 = getCart.value) == null ? void 0 : _a2.products[index2]) == null ? void 0 : _b.ordered_quantity) || 1
          };
        })
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPagePreloader = __nuxt_component_0$1;
      if (!unref(bundlesChecked)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(CartMainSectionContent, mergeProps({
          "products-in-cart": unref(productsInCart),
          "trade-in-blocks": __props.tradeInBlocks,
          onDeleteProductFromCart: deleteProductFromCart,
          onSearchProduct: prepareProductDetails
        }, _attrs), null, _parent));
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/cart-page/component/cart-main-section/cart-main-section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const route = useRoute();
    useRouter();
    const { getCart } = useCartStore();
    const filteredCartProducts = computed(
      () => {
        var _a2;
        return (_a2 = getCart.value) == null ? void 0 : _a2.products.filter((el) => el.type !== "delivery");
      }
    );
    const cartPageData = ref(null);
    const { fetchError, setFetchError } = useFetchError();
    const { setMetaToStaticPage } = usePageMeta();
    const showCrossSale = ref(false);
    const cartProducts = computed(() => {
      var _a2;
      return ((_a2 = getCart == null ? void 0 : getCart.value) == null ? void 0 : _a2.products) || [];
    });
    const orderProducts = computed(
      () => filterOutDeliveryProducts(cartProducts.value)
    );
    const productsIds = computed(
      () => orderProducts.value.map((product) => product.id)
    );
    const onCrossProductsHandler = (showSliderValue) => {
      showCrossSale.value = showSliderValue;
    };
    try {
      const slug = (_b = (_a = route == null ? void 0 : route.value) == null ? void 0 : _a.query) == null ? void 0 : _b.slug;
      if (slug) {
        const {
          data: { data: product }
        } = ([__temp, __restore] = withAsyncContext(() => ProductApiService.getProductBySlug(slug)), __temp = await __temp, __restore(), __temp);
        if (product) {
          [__temp, __restore] = withAsyncContext(() => CartApiService.addProductToCart(product.crm_id)), await __temp, __restore();
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const data = ([__temp, __restore] = withAsyncContext(() => PageApiService.getPageBySlug("cart")), __temp = await __temp, __restore(), __temp);
      if (data == null ? void 0 : data.data) {
        cartPageData.value = data.data;
      }
    } catch (e) {
      setFetchError(e.response.status);
    } finally {
      pushGtmEvent("pageview", {
        title: (_c = cartPageData.value) == null ? void 0 : _c.seo_title
      });
    }
    setMetaToStaticPage(cartPageData);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_EmptyCart = __nuxt_component_0;
      const _component_ProductCrossSale = __nuxt_component_4;
      const _component_UiPagePreloader = __nuxt_component_0$1;
      const _component_AppError = resolveComponent("AppError");
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-0502689d>`);
        if (unref(getCart)) {
          _push(`<div class="cart" data-v-0502689d><div data-v-0502689d>`);
          if ((_a2 = unref(filteredCartProducts)) == null ? void 0 : _a2.length) {
            _push(ssrRenderComponent(_sfc_main$1, {
              "trade-in-blocks": (_b2 = unref(cartPageData)) == null ? void 0 : _b2.blocks
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_EmptyCart, null, null, _parent));
          }
          _push(`</div><div style="${ssrRenderStyle(unref(showCrossSale) ? null : { display: "none" })}" class="cart_slider" data-v-0502689d><p class="cart_slider-title" data-v-0502689d>${ssrInterpolate(_ctx.$t("power_up"))}</p>`);
          _push(ssrRenderComponent(_component_ProductCrossSale, {
            "slider-key": "cart-slider",
            product: unref(orderProducts)[0] || null,
            "products-ids": unref(productsIds),
            "without-category": "",
            onOnCrossProductsReady: ($event) => onCrossProductsHandler(true),
            onOnCrossProductsEmpty: ($event) => onCrossProductsHandler(false)
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div data-v-0502689d>`);
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-0502689d>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0502689d"]]);

export { index as default };
//# sourceMappingURL=index-IMFCKxzA.mjs.map
