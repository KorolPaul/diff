import { _ as _sfc_main$1 } from './modal-light-Cz0YAIgT.mjs';
import __nuxt_component_1 from './WarningWithBorderIcon-DQpM1ILb.mjs';
import { c as usePaymentFilter, u as useSaveCheckout, a as _sfc_main$1$1, _ as __nuxt_component_3$1, b as _sfc_main$2, C as CheckoutApiService } from './repeat-payment-information-modal-Bxb7vbKQ.mjs';
import { r as useNuxtApp, a as useI18n, t as useTradeInStore, u as useRoute, k as __nuxt_component_6, e as useApi, M as setCartTokenHeader, P as PUBLIC_PREFIX, N as navigateTo, Q as userSchema, R as totalSchema, S as paymentSchema, T as productSchema$1, U as paymentTypeSchema } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './currency-text-DJsP4_8P.mjs';
import { reactive, ref, computed, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { u as useProductPriceFormatter } from './useProductPriceFormatter-C4fzfSKC.mjs';
import { z } from 'zod';

const BASE_REPEAT_LINK = `${PUBLIC_PREFIX}cart/checkout`;
const REPAYMENT_SLUG = "repayment";
const DEFAULT_OPTIONS = {
  contactID: "",
  checkoutID: ""
};
z.object({
  data: z.object({
    checkout: z.object({
      id: z.string(),
      order: z.object({
        config: z.object({ paymentTypes: z.array(paymentTypeSchema) }),
        crmId: z.string(),
        crmNumber: z.string(),
        isPaid: z.boolean(),
        isRepaymentAvailable: z.boolean(),
        isTimeLeftForRepayment: z.boolean(),
        orderStatus: z.string(),
        payment: paymentSchema,
        paymentStatus: z.string(),
        products: z.array(productSchema$1),
        total: totalSchema,
        user: userSchema
      })
    })
  })
});
const createLink = (checkoutId, path = "") => `${BASE_REPEAT_LINK}/${checkoutId}${path ? `/${path}` : ""}`;
const RepeatPaymentApiService = {
  async updateRepeatPayment(data, options = DEFAULT_OPTIONS) {
    var _a, _b;
    const { patch, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const link = createLink(options.checkoutID, REPAYMENT_SLUG);
    const params = options.contactID ? { contact_id: options.contactID } : {};
    const { data: result, error } = await patch(link, data, { params });
    return {
      data: result.value,
      error: (_b = (_a = error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.errors
    };
  },
  async getOrderData(options = DEFAULT_OPTIONS) {
    var _a, _b;
    const { get, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const link = createLink(options.checkoutID, REPAYMENT_SLUG);
    const params = options.contactID ? { contact_id: options.contactID } : {};
    const { data, error } = await get(link, { params });
    return {
      data: data.value,
      error: (_b = (_a = error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.errors
    };
  },
  async submitRepeatPayment(data, options = DEFAULT_OPTIONS) {
    var _a, _b;
    const { post, setHeader } = useApi();
    setCartTokenHeader(setHeader);
    const link = createLink(options.checkoutID, REPAYMENT_SLUG);
    const params = options.contactID ? { contact_id: options.contactID } : {};
    const { data: result, error } = await post(link, data, { params });
    return {
      data: result.value,
      error: (_b = (_a = error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.errors
    };
  }
};
const _sfc_main = {
  __name: "repeat-payment-modal",
  __ssrInlineRender: true,
  props: {
    checkoutId: {
      type: String,
      default: ""
    },
    contactId: {
      type: String,
      default: ""
    },
    isRepeatModalOpened: {
      type: Boolean,
      default: false
    },
    order: {
      type: Object,
      default: () => {
      },
      required: true
    },
    products: {
      type: Array,
      default: () => []
    }
  },
  emits: ["close", "updateOrder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const app = useNuxtApp();
    const { t } = useI18n();
    const { formatPriceWithSpaces } = useProductPriceFormatter();
    const { userDevicesTotalPrice } = useTradeInStore();
    const modalData = reactive({
      text: "",
      buttonText: "",
      title: "",
      redirectUrl: "",
      actionAfterRedirect: null,
      shouldBeAgreed: false,
      onClose: null
    });
    const isRepeatPaymentModalShown = ref(false);
    const currency = computed(() => {
      var _a, _b;
      return (_b = (_a = props.order) == null ? void 0 : _a.payment) == null ? void 0 : _b.currency;
    });
    const totalPriceWithDiscount = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_price_with_discount;
      }
    );
    const totalTradeInTopUp = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_trade_in_grade_price_with_topup) - ((_d = (_c = props.order) == null ? void 0 : _c.total) == null ? void 0 : _d.total_trade_in_grade_price);
      }
    );
    const totalTradeInGradePrice = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = props.order) == null ? void 0 : _a.total) == null ? void 0 : _b.total_trade_in_grade_price) || Number(userDevicesTotalPrice.value);
      }
    );
    const totalPrice = computed(() => {
      if (!totalTradeInGradePrice.value) {
        return totalPriceWithDiscount.value;
      }
      return totalPriceWithDiscount.value > totalTradeInGradePrice.value ? totalPriceWithDiscount.value - totalTradeInGradePrice.value - totalTradeInTopUp.value : 1;
    });
    const isOpened = computed(() => props.isRepeatModalOpened);
    const { savePaymentData } = useSaveCheckout();
    const { isLoading: isFormLoading, startLoading, stopLoading } = useFormLoader();
    const {
      isLoading: isFormUpdated,
      startLoading: startFormUpdated,
      stopLoading: stopFormUpdated
    } = useFormLoader();
    const route = useRoute();
    const { refactorPaymentData, filterPayments } = usePaymentFilter();
    const currentOrder = ref(props.order);
    const paymentRef = ref(null);
    const paymentForm = reactive({
      payment_type: null,
      selectCredit: null,
      credit: null
    });
    const isAvailableGroupType = ref(true);
    const isAvailableGroup = ref(true);
    const oldPaymentTypeName = ref("");
    const formConfig = ref({});
    const submitRepeatPayment = useVuelidate();
    const repeatPaymentTranslation = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = props.order) == null ? void 0 : _a.payment) == null ? void 0 : _b.is_online_payment) ? t("repeat_payment_online_title") : t("repeat_payment_title");
      }
    );
    const isThankYouPage = computed(() => {
      var _a;
      return (_a = route.name) == null ? void 0 : _a.includes("checkout");
    });
    const paymentConfig = computed(
      () => {
        var _a, _b;
        return filterPayments((_b = (_a = props.order) == null ? void 0 : _a.config) == null ? void 0 : _b.payment_types);
      }
    );
    const handleBaseRedirect = (newOrderData) => {
      if (isThankYouPage.value) {
        emit("updateOrder", newOrderData);
        emit("close");
      } else {
        navigateTo(
          app.$localeRoute({
            path: `/checkout/${props.checkoutId}`,
            query: { contact_id: props.contactId }
          })
        );
      }
    };
    const handlePaymentRedirect = (newOrderData, payment) => {
      if (!(payment == null ? void 0 : payment.url) || !(payment == null ? void 0 : payment.type)) {
        handleBaseRedirect(newOrderData);
      } else {
        const redirectUrl = `/checkout/${props.checkoutId}/redirect?contact_id=${props.contactId}`;
        navigateTo(
          app.$localeRoute({
            path: redirectUrl
          })
        );
      }
    };
    const handleOrderError = async () => {
      var _a;
      try {
        startLoading();
        const { data } = await CheckoutApiService.getOrderData({
          checkoutID: props.checkoutId,
          contactID: props.contactId
        });
        const updateOrderData = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.checkout;
        handleBaseRedirect(updateOrderData);
      } catch (error) {
        console.error(error);
      } finally {
        stopLoading();
        emit("close");
      }
    };
    const handleError = (type) => {
      switch (type) {
        case "order":
          handleOrderError();
          break;
      }
    };
    const handlePaymentError = (id = "", contactId = "") => {
      navigateTo(
        app.$localeRoute({
          path: `/checkout/${id}`,
          query: {
            contact_id: contactId
          }
        })
      );
    };
    const wrapPaymentRequest = async ({
      fetchData,
      checkoutID,
      contactID,
      config
    }) => {
      try {
        return await fetchData();
      } catch (errors) {
        console.error(errors);
        let type = "default";
        const customConfig = {
          ...config,
          onClose: () => (config == null ? void 0 : config.onClose) && config.onClose(type)
        };
        switch (true) {
          case (errors == null ? void 0 : errors.order):
            type = "order";
            modalData.title = t("repeat_payment_order_error_title");
            modalData.text = t("repeat_payment_order_error_text");
            modalData.buttonText = t("repeat_payment_order_error_btn_text");
            modalData.redirectUrl = `/checkout/${checkoutID}?contact_id=${contactID}`;
            modalData.onClose = customConfig == null ? void 0 : customConfig.onClose;
            isRepeatPaymentModalShown.value = true;
            break;
          case (errors == null ? void 0 : errors.payment):
            type = "payment";
            handlePaymentError(checkoutID, contactID);
            break;
          case (errors == null ? void 0 : errors.user):
            return null;
          default:
            modalData.title = t("service_error_title");
            modalData.text = t("service_error_text");
            modalData.buttonText = t("service_error_btn_text");
            modalData.onClose = customConfig == null ? void 0 : customConfig.onClose;
            isRepeatPaymentModalShown.value = true;
            break;
        }
        if (config.onError) {
          config == null ? void 0 : config.onError(type);
        }
        return null;
      } finally {
        if (config.onFinally) {
          config == null ? void 0 : config.onFinally();
        }
      }
    };
    const updateForm = (form) => {
      var _a;
      if ((_a = props.order) == null ? void 0 : _a.is_repayment_available) {
        return wrapPaymentRequest({
          fetchData: async () => {
            var _a2, _b;
            startFormUpdated();
            const { data, error } = await RepeatPaymentApiService.updateRepeatPayment(form, {
              checkoutID: props.checkoutId,
              contactID: props.contactId
            });
            if (error) {
              throw error;
            }
            currentOrder.value = (_b = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.checkout) == null ? void 0 : _b.order;
            return currentOrder.value;
          },
          checkoutID: props.checkoutId,
          contactID: props.contactId,
          config: { onFinally: () => stopFormUpdated(), onClose: handleError }
        });
      }
    };
    const submitRepeatOrder = () => wrapPaymentRequest({
      fetchData: async () => {
        var _a, _b, _c, _d, _e;
        if (isFormUpdated.value) {
          return;
        }
        (_a = paymentRef.value) == null ? void 0 : _a.validateDefaultForm();
        submitRepeatPayment.value.$reset();
        submitRepeatPayment.value.$touch();
        if (submitRepeatPayment.value.$invalid) {
          return;
        }
        startLoading();
        const sortAdditionalFormFields = ((_b = paymentRef.value) == null ? void 0 : _b.createSortAdditionalFields()) || {};
        const paymentTypeInfo = ((_c = paymentForm == null ? void 0 : paymentForm.payment_type) == null ? void 0 : _c.type) === "credit" ? paymentForm.selectCredit : paymentForm.payment_type;
        const payment = {
          ...paymentTypeInfo,
          form: {
            ...formConfig.value,
            values: sortAdditionalFormFields
          }
        };
        const { data, error } = await RepeatPaymentApiService.submitRepeatPayment(
          {
            payment
          },
          {
            checkoutID: props.checkoutId,
            contactID: props.contactId
          }
        );
        if (error) {
          throw error;
        }
        const newOrderData = (_d = data == null ? void 0 : data.data) == null ? void 0 : _d.checkout;
        const newPaymentData = (_e = data == null ? void 0 : data.data) == null ? void 0 : _e.payment;
        if ((newPaymentData == null ? void 0 : newPaymentData.status) === "error") {
          handlePaymentError();
          return;
        }
        handlePaymentRedirect(newOrderData, newPaymentData);
      },
      checkoutID: props.checkoutId,
      contactID: props.contactId,
      config: {
        onFinally: () => {
          stopLoading();
        },
        onClose: handleError
      }
    });
    const updatePaymentState = (form) => {
      paymentForm.payment_type = form.payment_type;
      paymentForm.selectCredit = form.selectCredit;
      paymentForm.credit = form.credit;
      formConfig.value = form.formConfig;
    };
    const updateOldPaymentType = () => {
      var _a, _b;
      isAvailableGroup.value = true;
      isAvailableGroupType.value = true;
      const currentPayment = props.order.payment;
      oldPaymentTypeName.value = t(`payment_${currentPayment == null ? void 0 : currentPayment.type}`);
      const availableType = (_a = paymentConfig.value) == null ? void 0 : _a.find(
        (payment) => (payment == null ? void 0 : payment.name) === (currentPayment == null ? void 0 : currentPayment.type)
      );
      if (!availableType) {
        const availableGroupItem = (_b = paymentConfig.value) == null ? void 0 : _b.find(
          (payment) => {
            var _a2, _b2;
            return (payment == null ? void 0 : payment.group) === (currentPayment == null ? void 0 : currentPayment.group) || ((_b2 = (_a2 = payment == null ? void 0 : payment.credit_params) == null ? void 0 : _a2.programs) == null ? void 0 : _b2.find(
              (program) => (program == null ? void 0 : program.id) === (currentPayment == null ? void 0 : currentPayment.credit_program_id)
            ));
          }
        );
        if (!availableGroupItem || !currentPayment.group) {
          isAvailableGroup.value = false;
        } else {
          isAvailableGroupType.value = false;
          savePaymentData(availableGroupItem);
        }
      }
    };
    watch(
      () => props.order,
      (value) => {
        currentOrder.value = value;
      }
    );
    watch(
      () => props.isRepeatModalOpened,
      () => {
        var _a;
        currentOrder.value = props.order;
        savePaymentData(refactorPaymentData((_a = props.order) == null ? void 0 : _a.payment));
        updateOldPaymentType();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$1;
      const _component_WarningWithBorderIcon = __nuxt_component_1;
      const _component_CheckoutPaymentWrapper = _sfc_main$1$1;
      const _component_CheckoutProducts = __nuxt_component_3$1;
      const _component_Button = __nuxt_component_6;
      const _component_CurrencyText = __nuxt_component_1$1;
      const _component_RepeatPaymentInformationModal = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": ($event) => isRef(isOpened) ? isOpened.value = $event : null
      }, { ..._ctx.$attrs }, {
        "full-height": "",
        "modal-class": "repeat-payment-modal",
        "max-width": 1060,
        "onUpdate:modelValue": ($event) => emit("close")
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="repeat-payment-modal_wrapper"${_scopeId}><p class="repeat-payment-modal_header"${_scopeId}>${ssrInterpolate(unref(t)(unref(repeatPaymentTranslation)))}</p><div class="repeat-payment-modal_content"${_scopeId}><div class="repeat-payment-modal_payment-groups"${_scopeId}><div class="repeat-payment-modal_payment-groups-content"${_scopeId}>`);
            if (!unref(isAvailableGroup)) {
              _push2(`<div class="repeat-payment-modal_tooltip"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_WarningWithBorderIcon, { class: "repeat-payment-modal_tooltip-icon" }, null, _parent2, _scopeId));
              _push2(`<span class="repeat-payment-modal_tooltip-text"${_scopeId}>${ssrInterpolate(unref(t)(unref(oldPaymentTypeName)))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_CheckoutPaymentWrapper, {
              ref_key: "paymentRef",
              ref: paymentRef,
              currency: unref(currency),
              "current-cart": unref(currentOrder),
              "is-available-group-type": unref(isAvailableGroupType),
              "is-opened": unref(isOpened),
              "is-title-shown": false,
              loading: unref(isFormUpdated),
              "old-payment-type-value": unref(oldPaymentTypeName),
              "payment-config": unref(paymentConfig),
              onUpdateState: updatePaymentState,
              onUpdate: updateForm
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="repeat-payment-modal_products"${_scopeId}><div class="repeat-payment-modal_products-content"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckoutProducts, {
              order: __props.order,
              "is-trade-in": Boolean(unref(totalTradeInGradePrice)),
              "show-total": false,
              "max-width": "",
              "no-margin-bottom": "",
              "is-repeat-payment": ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="repeat-payment-modal_bottom-bar"${_scopeId}><div class="repeat-payment-modal_submit"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "repeat-payment-modal_submit-button",
              loading: unref(isFormLoading),
              onClick: submitRepeatOrder
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("confirm"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("confirm")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="repeat-payment-modal_total"${_scopeId}><span class="repeat-payment-modal_total-text"${_scopeId}>${ssrInterpolate(_ctx.$t(
              Boolean(unref(totalTradeInGradePrice)) ? "preliminary_total_cost" : "total"
            ))}</span><span class="repeat-payment-modal_total-price"${_scopeId}>${ssrInterpolate(unref(formatPriceWithSpaces)(unref(totalPrice)))} `);
            _push2(ssrRenderComponent(_component_CurrencyText, {
              currency: "",
              "use-default": ""
            }, null, _parent2, _scopeId));
            _push2(`</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "repeat-payment-modal_wrapper" }, [
                createVNode("p", { class: "repeat-payment-modal_header" }, toDisplayString(unref(t)(unref(repeatPaymentTranslation))), 1),
                createVNode("div", { class: "repeat-payment-modal_content" }, [
                  createVNode("div", { class: "repeat-payment-modal_payment-groups" }, [
                    createVNode("div", { class: "repeat-payment-modal_payment-groups-content" }, [
                      !unref(isAvailableGroup) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "repeat-payment-modal_tooltip"
                      }, [
                        createVNode(_component_WarningWithBorderIcon, { class: "repeat-payment-modal_tooltip-icon" }),
                        createVNode("span", { class: "repeat-payment-modal_tooltip-text" }, toDisplayString(unref(t)(unref(oldPaymentTypeName))), 1)
                      ])) : createCommentVNode("", true),
                      createVNode(_component_CheckoutPaymentWrapper, {
                        ref_key: "paymentRef",
                        ref: paymentRef,
                        currency: unref(currency),
                        "current-cart": unref(currentOrder),
                        "is-available-group-type": unref(isAvailableGroupType),
                        "is-opened": unref(isOpened),
                        "is-title-shown": false,
                        loading: unref(isFormUpdated),
                        "old-payment-type-value": unref(oldPaymentTypeName),
                        "payment-config": unref(paymentConfig),
                        onUpdateState: updatePaymentState,
                        onUpdate: updateForm
                      }, null, 8, ["currency", "current-cart", "is-available-group-type", "is-opened", "loading", "old-payment-type-value", "payment-config"])
                    ])
                  ]),
                  createVNode("div", { class: "repeat-payment-modal_products" }, [
                    createVNode("div", { class: "repeat-payment-modal_products-content" }, [
                      createVNode(_component_CheckoutProducts, {
                        order: __props.order,
                        "is-trade-in": Boolean(unref(totalTradeInGradePrice)),
                        "show-total": false,
                        "max-width": "",
                        "no-margin-bottom": "",
                        "is-repeat-payment": ""
                      }, null, 8, ["order", "is-trade-in"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "repeat-payment-modal_bottom-bar" }, [
                  createVNode("div", { class: "repeat-payment-modal_submit" }, [
                    createVNode(_component_Button, {
                      class: "repeat-payment-modal_submit-button",
                      loading: unref(isFormLoading),
                      onClick: submitRepeatOrder
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  createVNode("div", { class: "repeat-payment-modal_total" }, [
                    createVNode("span", { class: "repeat-payment-modal_total-text" }, toDisplayString(_ctx.$t(
                      Boolean(unref(totalTradeInGradePrice)) ? "preliminary_total_cost" : "total"
                    )), 1),
                    createVNode("span", { class: "repeat-payment-modal_total-price" }, [
                      createTextVNode(toDisplayString(unref(formatPriceWithSpaces)(unref(totalPrice))) + " ", 1),
                      createVNode(_component_CurrencyText, {
                        currency: "",
                        "use-default": ""
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RepeatPaymentInformationModal, {
        "is-modal-opened": unref(isRepeatPaymentModalShown),
        "button-text": unref(modalData).buttonText,
        text: unref(modalData).text,
        title: unref(modalData).title,
        "redirect-url": unref(modalData).redirectUrl,
        "action-after-redirect": unref(modalData).actionAfterRedirect,
        "should-be-agreed": unref(modalData).shouldBeAgreed,
        onOnClose: unref(modalData).onClose,
        onClose: ($event) => isRepeatPaymentModalShown.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/repeat-payment-modal/repeat-payment-modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { RepeatPaymentApiService as R, _sfc_main as _ };
//# sourceMappingURL=repeat-payment-modal-1Q4c0cKH.mjs.map
