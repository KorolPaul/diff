import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { _ as _export_sfc, u as useRoute, r as useNuxtApp, a as useI18n, O as useProductsUtils, l as useGtm, J as useAuth, F as useUserStore, C as useRouter, k as __nuxt_component_6, H as filterOutDeliveryProducts } from './server.mjs';
import { u as useSaveCheckout, _ as __nuxt_component_3$1, C as CheckoutApiService } from './repeat-payment-information-modal-Bxb7vbKQ.mjs';
import { _ as __nuxt_component_4 } from './checkout-footer-CLj9ngHd.mjs';
import { _ as _sfc_main$1, R as RepeatPaymentApiService } from './repeat-payment-modal-1Q4c0cKH.mjs';
import { ref, computed, watch, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useSeoMeta } from './index-r7vNs057.mjs';
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
import './currency-text-DJsP4_8P.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './checkout-product-price-CaEg0Gsb.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './useDateFormatter-BM16RVpG.mjs';
import './useProductPrice-CDseUihT.mjs';
import '@vuelidate/core';
import './useFormUtils-HyQgFuda.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
import './TextInput-HaUa076w.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './modal-light-Cz0YAIgT.mjs';
import './pages-CxSmVAwD.mjs';
import './WarningWithBorderIcon-DQpM1ILb.mjs';
import './useLoaderUtils-CiDWTT-C.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const app = useNuxtApp();
    const i18n = app.$i18n;
    const { t, defaultLocale } = useI18n();
    const { getLocale } = useSaveCheckout();
    getLocale();
    const { fetchProducts } = useProductsUtils();
    const { pushGtmEvent } = useGtm();
    const { logoutIfUserUnregister, autoAuth } = useAuth();
    const { isAuthUser } = useUserStore();
    const router = useRouter();
    const pageType = ref("failed");
    const brokerAgeShowError = ref(false);
    const brokerAgeFaildShowError = ref(false);
    ref("");
    const orderData = ref(null);
    const isLoading = ref(true);
    const isRepeatPaymentModalShown = ref(false);
    const checkoutProducts = ref([]);
    const checkoutID = ref("");
    const contactID = ref("");
    const order = computed(() => {
      var _a;
      return (_a = orderData == null ? void 0 : orderData.value) == null ? void 0 : _a.order;
    });
    const hasWaiting = computed(
      () => {
        var _a, _b, _c;
        return ((_a = order.value) == null ? void 0 : _a.payment_status) === "waiting" && ((_c = (_b = order.value) == null ? void 0 : _b.payment) == null ? void 0 : _c.type) !== "cash";
      }
    );
    const hasSuccess = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ["paid", "courier"].includes((_a = order.value) == null ? void 0 : _a.payment_status) || ((_c = (_b = order.value) == null ? void 0 : _b.payment) == null ? void 0 : _c.group) === "credit_and_installment" || ((_e = (_d = order.value) == null ? void 0 : _d.payment) == null ? void 0 : _e.type) === "cash";
      }
    );
    const hasError = computed(
      () => {
        var _a;
        return ((_a = order.value) == null ? void 0 : _a.payment_status) === "canceled" || brokerAgeShowError.value || brokerAgeFaildShowError.value;
      }
    );
    const delivery = computed(() => {
      var _a;
      return (_a = order.value) == null ? void 0 : _a.delivery;
    });
    const city = computed(() => {
      var _a, _b;
      return (_b = (_a = delivery.value) == null ? void 0 : _a.address) == null ? void 0 : _b.city;
    });
    const street = computed(() => {
      var _a, _b;
      return (_b = (_a = delivery.value) == null ? void 0 : _a.address) == null ? void 0 : _b.street;
    });
    const houseNumber = computed(() => {
      var _a, _b;
      return (_b = (_a = delivery.value) == null ? void 0 : _a.address) == null ? void 0 : _b.house_number;
    });
    const floor = computed(() => {
      var _a, _b;
      return (_b = (_a = delivery.value) == null ? void 0 : _a.address) == null ? void 0 : _b.floor;
    });
    const apartmentNumber = computed(
      () => {
        var _a, _b;
        return (_b = (_a = delivery.value) == null ? void 0 : _a.address) == null ? void 0 : _b.apartment_number;
      }
    );
    const deliveryType = computed(() => {
      var _a;
      return (_a = delivery.value) == null ? void 0 : _a.type;
    });
    const orderUserName = computed(() => {
      var _a, _b;
      return (_b = (_a = order.value) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
    });
    const userName = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = delivery.value) == null ? void 0 : _a.recipient) == null ? void 0 : _b.is_other_receiver) ? (_c = delivery.value.recipient) == null ? void 0 : _c.first_name : (_e = (_d = order.value) == null ? void 0 : _d.user) == null ? void 0 : _e.name;
      }
    );
    const userLastname = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = delivery.value) == null ? void 0 : _a.recipient) == null ? void 0 : _b.is_other_receiver) ? (_c = delivery.value.recipient) == null ? void 0 : _c.last_name : (_e = (_d = order.value) == null ? void 0 : _d.user) == null ? void 0 : _e.lastname;
      }
    );
    const userPhone = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = delivery.value) == null ? void 0 : _a.recipient) == null ? void 0 : _b.is_other_receiver) ? (_c = delivery.value.recipient) == null ? void 0 : _c.phone : (_e = (_d = order.value) == null ? void 0 : _d.user) == null ? void 0 : _e.phone;
      }
    );
    const userEmail = computed(() => {
      var _a, _b;
      return (_b = (_a = order.value) == null ? void 0 : _a.user) == null ? void 0 : _b.email;
    });
    const isPaid = computed(() => {
      var _a;
      return (_a = order.value) == null ? void 0 : _a.is_paid;
    });
    const deliveryAddress = computed(() => {
      const address = {
        city: city.value,
        street: street.value ? `, ${t("short_street")} ${street.value}` : null,
        houseNumber: houseNumber.value ? `, ${houseNumber.value}` : null,
        floor: floor.value ? `, ${t("short_street")} ${floor.value}` : null,
        apartmentNumber: apartmentNumber.value ? `, ${t("short_floor")} ${apartmentNumber.value}` : null
      };
      return Object.values(address).join("");
    });
    if (route.query.type) {
      pageType.value = route.query.type;
    }
    const orderPaymentStatus = {
      canceled: t("oder_status_canceled"),
      courier: t("order_status_courier"),
      installment: t("order_status_installment"),
      paid: t("oder_status_paid"),
      waiting: t("order_status_waiting")
    };
    const orderDescription = {
      canceled: t("order_description_error"),
      courier: t("order_description_courier"),
      installment: t("order_description_installment"),
      paid: t("order_description_success"),
      waiting: t("order_description_waiting")
    };
    const orderSubtitle = {
      canceled: t("order_subtitle_error"),
      courier: t("order_subtitle_courier"),
      installment: t("order_subtitle_installment"),
      paid: "",
      waiting: ""
      /* TODO раскомментить в задаче по повторной оплате */
      //waiting: t('order_subtitle_waiting'),
    };
    const paymentGroup = {
      card: "creditCard",
      cash: "banknote",
      cashless_payment: "cashless",
      credit_and_installment: "credit",
      link_payment: "link_payment",
      online: "online",
      waiting_payment: "waiting_payment"
    };
    const deliveryGroupIcon = {
      courier: "car",
      pickup: "shop",
      post: "shop"
    };
    const pageConfig = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
      let orderDescriptionStatusValue = ((_b = (_a = order.value) == null ? void 0 : _a.payment) == null ? void 0 : _b.group) === "credit_and_installment" && "installment" || ((_c = order.value) == null ? void 0 : _c.payment_status);
      if (((_e = (_d = order.value) == null ? void 0 : _d.payment) == null ? void 0 : _e.type) === "cash") {
        orderDescriptionStatusValue = "paid";
      }
      return {
        buttonPayStatus: ((_g = (_f = order.value) == null ? void 0 : _f.payment) == null ? void 0 : _g.is_online_payment) ? "repeat_payment" : "change_repeat_payment",
        isRepaymentAvailable: (_h = order.value) == null ? void 0 : _h.is_repayment_available,
        isTimeLeftForRepayment: (_i = order.value) == null ? void 0 : _i.is_time_left_for_repayment,
        deliveryGroup: (_k = (_j = order.value) == null ? void 0 : _j.delivery) == null ? void 0 : _k.group,
        deliveryGroupIcon: deliveryGroupIcon[(_m = (_l = order.value) == null ? void 0 : _l.delivery) == null ? void 0 : _m.group],
        deliveryType: deliveryType.value,
        orderPaymentStatus: orderPaymentStatus[((_o = (_n = order.value) == null ? void 0 : _n.payment) == null ? void 0 : _o.group) === "credit_and_installment" && "installment" || ((_p = order.value) == null ? void 0 : _p.payment_status)],
        orderDescription: orderDescription[orderDescriptionStatusValue],
        orderSubtitle: orderSubtitle[((_r = (_q = order.value) == null ? void 0 : _q.payment) == null ? void 0 : _r.group) === "credit_and_installment" && "installment" || ((_s = order.value) == null ? void 0 : _s.payment_status)],
        payment: (_t = order.value) == null ? void 0 : _t.crm_number,
        paymentGroup: paymentGroup[(_v = (_u = order.value) == null ? void 0 : _u.payment) == null ? void 0 : _v.group],
        paymentName: (_x = (_w = order.value) == null ? void 0 : _w.payment) == null ? void 0 : _x.type
      };
    });
    const hasDeliveryAddress = computed(
      () => city.value || street.value || houseNumber.value || floor.value || apartmentNumber.value
    );
    const hasAdditionalInfo = computed(
      () => deliveryType.value || city.value || street.value || houseNumber.value || floor.value || apartmentNumber.value || userName.value || userLastname.value || userPhone.value || userEmail.value
    );
    const repeatPaymentWarningMessage = computed(
      () => !pageConfig.value.isTimeLeftForRepayment ? "repeat_payment_not_available_message" : "repeat_payment_available_message"
    );
    const updateOrder = (newOrder) => {
      orderData.value = newOrder;
    };
    const fetchOrderData = async (apiService, config) => {
      var _a;
      try {
        const { data, error } = await apiService.getOrderData(config);
        if (error) {
          throw error;
        }
        return (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.checkout;
      } catch (e) {
        console.error(e);
        return null;
      }
    };
    const getOrderData = async () => {
      var _a, _b, _c;
      checkoutID.value = route.params.payment;
      contactID.value = (_a = route.query) == null ? void 0 : _a.contact_id;
      isLoading.value = true;
      const config = {
        checkoutID: checkoutID.value,
        contactID: contactID.value
      };
      const checkoutOrder = await fetchOrderData(CheckoutApiService, config);
      if ((_b = checkoutOrder == null ? void 0 : checkoutOrder.order) == null ? void 0 : _b.isRepaymentAvailable) {
        const orderResponse = await fetchOrderData(RepeatPaymentApiService, config);
        checkoutOrder.order.config = orderResponse.order.config;
      }
      const filteredProducts = filterOutDeliveryProducts(
        (_c = checkoutOrder == null ? void 0 : checkoutOrder.order) == null ? void 0 : _c.products
      );
      orderData.value = {
        ...checkoutOrder,
        order: {
          ...checkoutOrder.order,
          products: filteredProducts
        }
      };
      isLoading.value = false;
    };
    const goToPersonalAccount = async () => {
      localStorage.removeItem("broker");
      await autoAuth();
      router.push(
        app.$localeRoute({
          path: "/account/info"
        })
      );
    };
    watch(route, async () => {
      await getOrderData();
    });
    useSeoMeta({
      title: i18n.t("checkout_payment_page_title"),
      vmid: "description",
      name: "description",
      content: i18n.t("checkout_payment_page_description")
    });
    try {
      [__temp, __restore] = withAsyncContext(() => getOrderData()), await __temp, __restore();
      if (order.value) {
        checkoutProducts.value = ([__temp, __restore] = withAsyncContext(() => fetchProducts(order.value.products)), __temp = await __temp, __restore(), __temp);
      }
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
      logoutIfUserUnregister();
      pushGtmEvent("pageview");
      localStorage.removeItem("payment_type");
    }
    const checkoutIcon = computed(() => {
      if (pageConfig.value.paymentName === "cash") {
        return "checkoutSuccessIcon";
      }
      if (hasWaiting.value) {
        return "checkoutWaitingIcon";
      }
      if (hasSuccess.value) {
        return "checkoutSuccessIcon";
      }
      return "checkoutErrorIcon";
    });
    const pickupAddress = computed(
      () => {
        var _a, _b, _c, _d, _e, _f;
        return `${((_c = (_b = (_a = delivery.value) == null ? void 0 : _a.shop_address) == null ? void 0 : _b.shop) == null ? void 0 : _c.name) || ""} | ${((_f = (_e = (_d = delivery.value) == null ? void 0 : _d.shop_address) == null ? void 0 : _e.address) == null ? void 0 : _f.name) || ""}`;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UiPreloader = __nuxt_component_2;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = __nuxt_component_6;
      const _component_CheckoutProducts = __nuxt_component_3$1;
      const _component_CheckoutFooter = __nuxt_component_4;
      const _component_RepeatPaymentModal = _sfc_main$1;
      _push(`<!--[--><div class="payment-page" data-v-1c200e86>`);
      if (unref(isLoading)) {
        _push(`<div class="payment-page_loader-wrapper" data-v-1c200e86>`);
        _push(ssrRenderComponent(_component_UiPreloader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="payment-page_content" data-v-1c200e86><div class="payment-page_content-wrapper" data-v-1c200e86><div class="payment-page_wrapper-part" data-v-1c200e86><div class="payment-page_header" data-v-1c200e86><div class="payment-page_order-title" data-v-1c200e86>`);
        _push(ssrRenderComponent(_component_Icon, { icon: unref(checkoutIcon) }, null, _parent));
        _push(`<div data-v-1c200e86><p data-v-1c200e86>${ssrInterpolate(unref(t)("order_no"))} ${ssrInterpolate(unref(pageConfig).payment)}</p><h3 class="payment-page_order" data-v-1c200e86>${ssrInterpolate(`${unref(t)("thank_you")}${unref(orderUserName) ? `, ${unref(orderUserName)}!` : ""}`)}</h3></div></div><span class="${ssrRenderClass([{
          "payment-page_status-info__success": unref(hasSuccess),
          "payment-page_status-info__waiting": unref(hasWaiting),
          "payment-page_status-info__error": unref(hasError)
        }, "payment-page_status-info"])}" data-v-1c200e86>${ssrInterpolate(unref(t)(unref(pageConfig).orderDescription))}</span>`);
        if (unref(pageConfig).orderSubtitle && unref(pageConfig).deliveryType !== "pickup") {
          _push(`<div class="payment-page_header-text" data-v-1c200e86><span data-v-1c200e86>${ssrInterpolate(unref(pageConfig).orderSubtitle)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isPaid) && unref(pageConfig).isRepaymentAvailable) {
          _push(ssrRenderComponent(_component_Button, {
            class: "payment-page_repeat-button",
            onClick: ($event) => isRepeatPaymentModalShown.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)(unref(pageConfig).buttonPayStatus))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)(unref(pageConfig).buttonPayStatus)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(pageConfig).isRepaymentAvailable || !unref(pageConfig).isTimeLeftForRepayment) {
          _push(`<p class="payment-page_repeat-text" data-v-1c200e86>${ssrInterpolate(unref(t)(unref(repeatPaymentWarningMessage)))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="payment-page_info" data-v-1c200e86>`);
        if (unref(pageConfig).payment) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("order_id_no"))}</span><span class="payment-page_info-data" data-v-1c200e86>${ssrInterpolate(unref(pageConfig).payment)}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pageConfig).paymentName) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("payment_method"))}</span><span class="payment-page_info-data" data-v-1c200e86>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: unref(pageConfig).paymentGroup || unref(pageConfig).paymentName,
            class: "payment-page_info-data__icon"
          }, null, _parent));
          _push(` ${ssrInterpolate(unref(t)(`payment_${unref(pageConfig).paymentName}`))}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasAdditionalInfo)) {
          _push(`<span class="payment-page_line" data-v-1c200e86></span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pageConfig).deliveryType) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("delivery_method"))}</span><span class="payment-page_info-data" data-v-1c200e86>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "car",
            class: "payment-page_info-data__icon"
          }, null, _parent));
          _push(`<span data-v-1c200e86>${ssrInterpolate(unref(t)(`${unref(pageConfig).deliveryType}_group`))}</span></span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pageConfig).deliveryGroup === "pickup" || unref(hasDeliveryAddress)) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("delivery_address"))}</span>`);
          if (unref(pageConfig).deliveryGroup === "pickup") {
            _push(`<span class="payment-page_info-data" data-v-1c200e86>${ssrInterpolate(unref(pickupAddress))}</span>`);
          } else {
            _push(`<span class="payment-page_info-data payment-page_info-data__address" data-v-1c200e86><span data-v-1c200e86>${ssrInterpolate(unref(deliveryAddress))}</span></span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(userName) || unref(userLastname)) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("recipient"))}</span><span class="payment-page_info-data" data-v-1c200e86>${ssrInterpolate(unref(userName))} ${ssrInterpolate(unref(userLastname))}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(userPhone)) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("tel_number"))}</span><span class="payment-page_info-data" data-v-1c200e86>${ssrInterpolate(unref(userPhone))}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(userEmail)) {
          _push(`<!--[--><span class="payment-page_info-title" data-v-1c200e86>${ssrInterpolate(unref(t)("email"))}</span><span class="payment-page_info-data" data-v-1c200e86>${ssrInterpolate(unref(userEmail))}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(isAuthUser)) {
          _push(ssrRenderComponent(_component_Button, {
            secondary: "",
            class: "payment-page_account-button",
            onClick: goToPersonalAccount
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("watch_in_the_personal_account"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("watch_in_the_personal_account")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(order)) {
          _push(`<div class="payment-page_wrapper-part" data-v-1c200e86>`);
          _push(ssrRenderComponent(_component_CheckoutProducts, {
            order: unref(order),
            "is-trade-in": (_b = (_a = unref(order)) == null ? void 0 : _a.marks) == null ? void 0 : _b.is_trade_in
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_CheckoutFooter, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_RepeatPaymentModal, {
        "checkout-id": unref(checkoutID),
        "contact-id": unref(contactID),
        "is-repeat-modal-opened": unref(isRepeatPaymentModalShown),
        order: unref(order),
        products: unref(checkoutProducts),
        onClose: ($event) => isRepeatPaymentModalShown.value = false,
        onUpdateOrder: updateOrder
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/checkout/_payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c200e86"]]);

export { index as default };
//# sourceMappingURL=index-DYHpYjRZ.mjs.map
