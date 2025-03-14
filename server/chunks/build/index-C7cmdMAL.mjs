import { _ as __nuxt_component_0$2 } from './ui-page-preloader-f4jo8KnM.mjs';
import { u as useSaveCheckout, _ as __nuxt_component_3$1, a as _sfc_main$1$1, b as _sfc_main$k, c as usePaymentFilter, C as CheckoutApiService, d as __nuxt_component_0$4, i as isEqual, e as useZipCodeUtils } from './repeat-payment-information-modal-Bxb7vbKQ.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_3$2, T as TradeInDeviceGrade } from './TradeInDeviceGrade-Dga3A_UC.mjs';
import { _ as __nuxt_component_1$1 } from './currency-text-DJsP4_8P.mjs';
import { a as useI18n, _ as _export_sfc, l as useGtm, F as useUserStore, r as useNuxtApp, C as useRouter, i as useCartStore, t as useTradeInStore, H as filterOutDeliveryProducts, L as AccountApiService, k as __nuxt_component_6, J as useAuth, z as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1$2 } from './icon-_hjsSUWU.mjs';
import { _ as _sfc_main$l } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_2$2 } from './trade-in-modal-content-B1OZG904.mjs';
import { ref, useTemplateRef, reactive, computed, watch, withAsyncContext, nextTick, provide, unref, mergeProps, isRef, defineComponent, getCurrentInstance, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, createSlots, Fragment, renderList, toRef, inject, withDirectives, vShow, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderTeleport, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$o } from './UiCheckbox-rg4DHWMb.mjs';
import { _ as __nuxt_component_4$1 } from './checkout-footer-CLj9ngHd.mjs';
import { useStorage, useDebounceFn, useWindowSize, useWindowScroll } from '@vueuse/core';
import useVuelidate$1, { useVuelidate } from '@vuelidate/core';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { u as useScrollTo } from './useScrollTo-GsIK4vXy.mjs';
import { _ as __nuxt_component_5$1 } from './UiTextarea-BGk3U8qq.mjs';
import { _ as __nuxt_component_0$3 } from './Form-ZGQdgBok.mjs';
import { _ as __nuxt_component_2$1, a as _sfc_main$n } from './policy-checkbox-GL5-7Kb3.mjs';
import { u as useFormUtils, _ as __nuxt_component_4$2 } from './useFormUtils-HyQgFuda.mjs';
import { _ as _sfc_main$m } from './TextInput-HaUa076w.mjs';
import { A as AppFormErrors, L as LoginModalContent } from './login-modal-content-D0aLq5B-.mjs';
import { _ as __nuxt_component_1$3, u as useDropdownPosition } from './UiSelect-BqVOhDGy.mjs';
import { _ as __nuxt_component_2$3 } from './ui-preloader-C4Bi7ENY.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './checkout-product-price-CaEg0Gsb.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './useDateFormatter-BM16RVpG.mjs';
import './useProductPrice-CDseUihT.mjs';
import 'humps';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './UiRadio-hn8C_nHF.mjs';
import 'pinia';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'zod';
import './PageApiService-DEiJJG72.mjs';
import './useSanitize-B4Q-s4KN.mjs';
import 'sanitize-html';
import './pages-CxSmVAwD.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
import './personal-data-text-kJ244n-x.mjs';
import './enter-code-content-D5GsStjK.mjs';

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "checkout-trade-in",
  __ssrInlineRender: true,
  props: {
    exchangeItems: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    currency: {
      type: String,
      default: ""
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const tradeInModalKeys = ref({
      header: "trade-in-checkout-modal-header",
      footer: "trade-in-checkout-modal-footer"
    });
    const showTradeInModal = localStorage.getItem("showCheckoutTradeIn") === "true";
    const isShowTradeInInfoModal = ref(false);
    const isShowTradeInModal = ref(showTradeInModal);
    const initialUserDevice = ref({});
    const { t } = useI18n();
    const { userDevices, userDevicesTotalPrice, removeUserDeviceByIndex } = useTradeInStore();
    const tradeInOptions = [
      { value: true, label: t("yes") },
      { value: false, label: t("no") }
    ];
    const selectedTradeIn = ref(showTradeInModal);
    const showDeviceGradeDialog = (userDevice = {}) => {
      initialUserDevice.value = userDevice;
      isShowTradeInModal.value = true;
    };
    const onCloseTradeInModal = () => {
      localStorage.removeItem("showCheckoutTradeIn");
    };
    const closeTradeInDeviceGrade = () => {
      isShowTradeInModal.value = false;
      localStorage.removeItem("showCheckoutTradeIn");
    };
    watch(
      () => selectedTradeIn.value,
      () => {
        isShowTradeInModal.value = selectedTradeIn.value;
        emit("change", selectedTradeIn.value);
      }
    );
    provide("modalKeys", tradeInModalKeys);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRadioAccordion = __nuxt_component_0$4;
      const _component_CheckoutTradeInItem = __nuxt_component_1;
      const _component_CurrencyText = __nuxt_component_1$1;
      const _component_Button = __nuxt_component_6;
      const _component_Icon = __nuxt_component_1$2;
      const _component_ModalLight = _sfc_main$l;
      const _component_TradeInModalContent = __nuxt_component_2$2;
      const _component_TradeInModal = __nuxt_component_3$2;
      const _component_TradeInDeviceGrade = TradeInDeviceGrade;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-trade-in" }, _attrs))} data-v-afc27b6a><p class="checkout-trade-in_title" data-v-afc27b6a>${ssrInterpolate(_ctx.$t("trade_in"))}</p><p class="checkout-trade-in_subtitle" data-v-afc27b6a>${ssrInterpolate(_ctx.$t("do_you_want_to_trade_your_old_device"))}</p><div data-v-afc27b6a><button class="checkout-trade-in_modal-button" data-v-afc27b6a>${ssrInterpolate(_ctx.$t("see_more"))}</button></div><div data-v-afc27b6a><!--[-->`);
      ssrRenderList(tradeInOptions, (option) => {
        _push(ssrRenderComponent(_component_UiRadioAccordion, {
          key: option.label,
          modelValue: unref(selectedTradeIn),
          "onUpdate:modelValue": ($event) => isRef(selectedTradeIn) ? selectedTradeIn.value = $event : null,
          name: "trade-in",
          value: option.value,
          checked: unref(selectedTradeIn) === option.value
        }, createSlots({
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(option.label), 1)
              ];
            }
          }),
          _: 2
        }, [
          unref(selectedTradeIn) && unref(userDevices).length ? {
            name: "content",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="checkout-trade-in_items" data-v-afc27b6a${_scopeId}><div data-v-afc27b6a${_scopeId}><!--[-->`);
                ssrRenderList(unref(userDevices), (device, index) => {
                  _push2(ssrRenderComponent(_component_CheckoutTradeInItem, {
                    key: `index-${index}`,
                    device,
                    onChange: () => showDeviceGradeDialog(device),
                    onRemove: () => unref(removeUserDeviceByIndex)(index)
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
                if (unref(userDevicesTotalPrice)) {
                  _push2(`<div class="checkout-trade-in_items-total" data-v-afc27b6a${_scopeId}><span class="checkout-trade-in_device-title" data-v-afc27b6a${_scopeId}>${ssrInterpolate(_ctx.$t("trade_in_benefit_hint"))}</span><span class="checkout-trade-in_device-price" data-v-afc27b6a${_scopeId}>${ssrInterpolate(unref(userDevicesTotalPrice) * -1)} `);
                  _push2(ssrRenderComponent(_component_CurrencyText, {
                    currency: "",
                    "use-default": ""
                  }, null, _parent2, _scopeId));
                  _push2(`</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_Button, {
                  class: "checkout-trade-in_add-button",
                  secondary: "",
                  onClick: ($event) => isShowTradeInModal.value = true
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, { icon: "plus" }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(_ctx.$t("trade_in_add_device"))}`);
                    } else {
                      return [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("trade_in_add_device")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "checkout-trade-in_items" }, [
                    createVNode("div", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(userDevices), (device, index) => {
                        return openBlock(), createBlock(_component_CheckoutTradeInItem, {
                          key: `index-${index}`,
                          device,
                          onChange: () => showDeviceGradeDialog(device),
                          onRemove: () => unref(removeUserDeviceByIndex)(index)
                        }, null, 8, ["device", "onChange", "onRemove"]);
                      }), 128))
                    ]),
                    unref(userDevicesTotalPrice) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "checkout-trade-in_items-total"
                    }, [
                      createVNode("span", { class: "checkout-trade-in_device-title" }, toDisplayString(_ctx.$t("trade_in_benefit_hint")), 1),
                      createVNode("span", { class: "checkout-trade-in_device-price" }, [
                        createTextVNode(toDisplayString(unref(userDevicesTotalPrice) * -1) + " ", 1),
                        createVNode(_component_CurrencyText, {
                          currency: "",
                          "use-default": ""
                        })
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_Button, {
                      class: "checkout-trade-in_add-button",
                      secondary: "",
                      onClick: ($event) => isShowTradeInModal.value = true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("trade_in_add_device")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isShowTradeInInfoModal),
        "onUpdate:modelValue": ($event) => isRef(isShowTradeInInfoModal) ? isShowTradeInInfoModal.value = $event : null,
        "max-width": 604
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TradeInModalContent, {
              modelValue: unref(isShowTradeInInfoModal),
              "onUpdate:modelValue": ($event) => isRef(isShowTradeInInfoModal) ? isShowTradeInInfoModal.value = $event : null,
              onInput: ($event) => isShowTradeInInfoModal.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TradeInModalContent, {
                modelValue: unref(isShowTradeInInfoModal),
                "onUpdate:modelValue": ($event) => isRef(isShowTradeInInfoModal) ? isShowTradeInInfoModal.value = $event : null,
                onInput: ($event) => isShowTradeInInfoModal.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TradeInModal, {
        modelValue: unref(isShowTradeInModal),
        "onUpdate:modelValue": [($event) => isRef(isShowTradeInModal) ? isShowTradeInModal.value = $event : null, onCloseTradeInModal],
        "max-width": 604
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TradeInDeviceGrade, {
              key: `${unref(isShowTradeInModal)}`,
              "exchange-items": __props.exchangeItems,
              "initial-user-device": unref(initialUserDevice),
              onClose: closeTradeInDeviceGrade
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_TradeInDeviceGrade, {
                key: `${unref(isShowTradeInModal)}`,
                "exchange-items": __props.exchangeItems,
                "initial-user-device": unref(initialUserDevice),
                onClose: closeTradeInDeviceGrade
              }, null, 8, ["exchange-items", "initial-user-device"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-trade-in/checkout-trade-in.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-afc27b6a"]]);
const _sfc_main$i = {
  __name: "checkout-callback",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["updateCallback"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isNoCallback = ref(props.value);
    const { saveBaseData, getBaseData } = useSaveCheckout();
    const callBackChange = () => {
      emit("updateCallback", isNoCallback.value);
      const data2 = getBaseData();
      saveBaseData({
        ...data2,
        isNoCallback: isNoCallback.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCheckbox = _sfc_main$o;
      _push(ssrRenderComponent(_component_UiCheckbox, mergeProps({
        modelValue: unref(isNoCallback),
        "onUpdate:modelValue": ($event) => isRef(isNoCallback) ? isNoCallback.value = $event : null,
        name: __props.name,
        disabled: __props.disabled,
        class: "checkout-callback",
        onChange: callBackChange
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("no_callback"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("no_callback")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/checkout-callback/checkout-callback.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-59120c71"]]);
const _sfc_main$h = {
  __name: "checkout-submit",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    showOnMobile: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const { isAuthUser } = useUserStore();
    const isUserExist = ref(false);
    watch(
      () => isAuthUser,
      () => {
        if (isAuthUser.value) {
          isUserExist.value = false;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkout-submit", { "checkout-submit__mobile-show": __props.showOnMobile }]
      }, _attrs))} data-v-4cb112ba>`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: __props.disabled || !unref(isAuthUser) && unref(isUserExist),
        "full-width": "",
        onClick: ($event) => _ctx.$emit("submit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("submit_your_order"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("submit_your_order")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/checkout-submit/checkout-submit.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-4cb112ba"]]);
const _sfc_main$g = {
  __name: "information-modal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    opened: {
      type: Boolean,
      default: true
    },
    redirectUrl: {
      type: String,
      default: ""
    }
  },
  emits: ["close", "actionAfterRedirect"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const router = useRouter();
    const thisInstance = getCurrentInstance();
    const isOpened = computed(() => props.isModalOpened);
    const closeModal = () => {
      var _a, _b;
      emit("close");
      if (redirectUrl && redirectUrl.length) {
        router.push(
          app.$localeRoute({
            path: redirectUrl
          })
        );
        if ((_b = (_a = thisInstance == null ? void 0 : thisInstance.vnode) == null ? void 0 : _a.props) == null ? void 0 : _b.actionAfterRedirect) {
          emit("actionAfterRedirect");
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$l;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": ($event) => isRef(isOpened) ? isOpened.value = $event : null
      }, { ..._ctx.$attrs }, {
        "full-height": "",
        "onUpdate:modelValue": closeModal
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="information-modal"${_scopeId}><span class="information-modal_title"${_scopeId}>${ssrInterpolate(__props.title)}</span><span class="information-modal_text"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "information-modal_button",
              "full-width": "",
              onClick: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.buttonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.buttonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "information-modal" }, [
                createVNode("span", { class: "information-modal_title" }, toDisplayString(__props.title), 1),
                createVNode("span", { class: "information-modal_text" }, toDisplayString(__props.text), 1),
                createVNode(_component_Button, {
                  class: "information-modal_button",
                  "full-width": "",
                  onClick: closeModal
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.buttonText), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/information-modal/information-modal.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const data = ref(null);
const delivery = ref(null);
const step = ref(0);
const useCheckoutStore = () => {
  const setCheckoutState = (value) => {
    data.value = value;
  };
  const setCheckoutDelivery = (value) => {
    delivery.value = value;
  };
  const setCheckoutStep = (value) => {
    step.value = value;
  };
  const getCheckoutState = computed(() => data.value);
  const getCheckoutDelivery = computed(() => delivery.value);
  const getCheckoutStep = computed(() => step.value);
  const getCheckoutDeliveryType = computed(
    () => {
      var _a, _b;
      return (_b = (_a = delivery.value) == null ? void 0 : _a.delivery) == null ? void 0 : _b.type;
    }
  );
  return {
    setCheckoutState,
    getCheckoutState,
    setCheckoutDelivery,
    getCheckoutDelivery,
    getCheckoutDeliveryType,
    setCheckoutStep,
    getCheckoutStep
  };
};
const _sfc_main$f = {
  __name: "checkout-sidebar-comment",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = ref(props.modelValue);
    const { getBaseData, saveBaseData } = useSaveCheckout();
    const onCommentChange = ($event) => {
      emit("update:modelValue", $event.target.value);
      const data2 = getBaseData();
      saveBaseData({
        ...data2,
        comment: $event.target.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTextarea = __nuxt_component_5$1;
      _push(ssrRenderComponent(_component_UiTextarea, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        label: _ctx.$t("write_comment_on_order"),
        "max-length": "200",
        onInput: onCommentChange
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-sidebar/checkout-sidebar-comment.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = defineComponent({
  name: "NewsletterCheckbox",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "newsletter"
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiCheckbox = _sfc_main$o;
  _push(ssrRenderComponent(_component_UiCheckbox, mergeProps({
    disabled: _ctx.disabled,
    name: _ctx.name,
    errors: _ctx.firstNameErrors,
    value: _ctx.value,
    "small-label": "",
    class: "remember-checkbox",
    onChange: ($event) => _ctx.$emit("input", $event)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("i_want_to_receive_a_newsletter"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("i_want_to_receive_a_newsletter")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/checkbox/newsletter-checkbox/newsletter-checkbox.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const NewsletterCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c791da99"]]);
const _sfc_main$d = {
  __name: "checkout-auth",
  __ssrInlineRender: true,
  emits: ["updateForm"],
  setup(__props, { emit: __emit }) {
    useAuth();
    const isShowLoginModal = ref(false);
    const emit = __emit;
    const initialForm = {
      email: null,
      phone: null,
      name: null,
      lastname: null,
      subscription: false,
      personalAgreement: false
    };
    const formData = reactive({ ...initialForm });
    const { getUser, isAuthUser } = useUserStore();
    const { pushGtmEvent } = useGtm();
    const { saveClientData } = useSaveCheckout();
    const {
      getErrors,
      defaultRequiredMessage,
      defaultRequiredCheckboxMessage,
      emailPattern,
      defaultPhoneRequiredMessage
    } = useFormUtils();
    const { isLoading: isFormLoading } = useFormLoader();
    const formRules = ref({
      email: { defaultRequiredMessage, emailPattern },
      phone: { defaultRequiredMessage, defaultPhoneRequiredMessage },
      name: { defaultRequiredMessage },
      personalAgreement: !isAuthUser.value ? {
        defaultRequiredCheckboxMessage
      } : {}
    });
    const v$ = useVuelidate$1(formRules, formData);
    const firstNameErrors = computed(() => getErrors(v$.value.name));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const emailErrors = computed(() => getErrors(v$.value.email));
    const personalAgreementErrors = computed(
      () => getErrors(v$.value.personalAgreement)
    );
    function handleNameChange(e) {
      pushGtmEvent("nameFilled", e.target.value);
      saveCurrentField("name");
    }
    const saveCurrentField = (key) => {
      var _a, _b, _c, _d, _e, _f;
      (_a = v$.value[key]) == null ? void 0 : _a.$touch();
      if (!((_b = v$.value[key]) == null ? void 0 : _b.$error)) {
        const { personalAgreement, subscription, ...updatedData } = formData;
        const nameValid = !((_c = firstNameErrors.value) == null ? void 0 : _c.length) && formData.name;
        const emailValid = !((_d = emailErrors.value) == null ? void 0 : _d.length) && formData.email;
        const phoneValid = !((_e = phoneErrors.value) == null ? void 0 : _e.length) && formData.phone;
        if (emailValid && phoneValid && nameValid) {
          emit("updateForm", {
            ...updatedData,
            phone: (_f = updatedData.phone) == null ? void 0 : _f.replace(/[\s-]/g, ""),
            userForm: true,
            client_type: isAuthUser.value ? "" : "unregistered"
          });
        }
      }
    };
    const userName = computed(() => {
      var _a;
      return (_a = getUser.value) == null ? void 0 : _a.name;
    });
    const userEmail = computed(() => {
      var _a;
      return (_a = getUser.value) == null ? void 0 : _a.email;
    });
    const userPhone = computed(() => {
      var _a;
      return (_a = getUser.value) == null ? void 0 : _a.phone;
    });
    const userLastName = computed(() => {
      var _a;
      return (_a = getUser.value) == null ? void 0 : _a.lastname;
    });
    const handleBlur = (fieldName) => {
      var _a, _b;
      (_b = (_a = v$.value) == null ? void 0 : _a[fieldName]) == null ? void 0 : _b.$touch();
      if (fieldName === "phone" && phoneErrors.value.length === 0) {
        pushGtmEvent("phoneFilled", formData[fieldName]);
      }
      if (fieldName === "email" && phoneErrors.value.length === 0) {
        pushGtmEvent("emailFilled", formData[fieldName]);
      }
    };
    watch(isAuthUser, () => {
      var _a, _b, _c, _d;
      if (isAuthUser.value && getUser.value) {
        formData.phone = (_a = userPhone.value) != null ? _a : formData.phone;
        formData.email = (_b = userEmail.value) != null ? _b : formData.email;
        formData.name = (_c = userName.value) != null ? _c : formData.name;
        formData.lastname = (_d = userLastName.value) != null ? _d : formData.lastname;
      }
    });
    watch(formData, () => {
      saveClientData({
        ...formData
      });
    });
    provide("isShowLoginModal", isShowLoginModal);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0$3;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_PhoneInput = __nuxt_component_4$2;
      const _component_TextInput = _sfc_main$m;
      const _component_PolicyCheckbox = _sfc_main$n;
      const _component_ModalLight = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["checkout-auth", { loading: unref(isFormLoading) }]
      }, _attrs))} data-v-01eac9b7><div class="checkout-auth_header" data-v-01eac9b7><p data-v-01eac9b7>${ssrInterpolate(_ctx.$t("contact"))}</p>`);
      if (!unref(isAuthUser)) {
        _push(`<button class="checkout-auth_login-button" data-v-01eac9b7>${ssrInterpolate(_ctx.$t("login"))}</button>`);
      } else {
        _push(`<button class="checkout-auth_login-button" data-v-01eac9b7>${ssrInterpolate(_ctx.$t("logout"))}</button>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Form, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PhoneInput, {
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    class: "checkout-input",
                    disabled: unref(isFormLoading),
                    errors: unref(phoneErrors),
                    label: "write_phone_number",
                    "data-attributes": { field: unref(formData).phone },
                    onBlur: ($event) => handleBlur("phone"),
                    onChange: ($event) => saveCurrentField("phone")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PhoneInput, {
                      modelValue: unref(formData).phone,
                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                      class: "checkout-input",
                      disabled: unref(isFormLoading),
                      errors: unref(phoneErrors),
                      label: "write_phone_number",
                      "data-attributes": { field: unref(formData).phone },
                      onBlur: ($event) => handleBlur("phone"),
                      onChange: ($event) => saveCurrentField("phone")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "onBlur", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    class: "checkout-input",
                    disabled: unref(isFormLoading) || unref(isAuthUser) && Boolean(unref(userEmail)),
                    errors: unref(emailErrors),
                    label: "email",
                    "data-attributes": { field: unref(formData).email },
                    type: "email",
                    onBlur: ($event) => handleBlur("email"),
                    onChange: ($event) => saveCurrentField("email")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).email,
                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                      class: "checkout-input",
                      disabled: unref(isFormLoading) || unref(isAuthUser) && Boolean(unref(userEmail)),
                      errors: unref(emailErrors),
                      label: "email",
                      "data-attributes": { field: unref(formData).email },
                      type: "email",
                      onBlur: ($event) => handleBlur("email"),
                      onChange: ($event) => saveCurrentField("email")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "onBlur", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    errors: unref(firstNameErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("name")}`,
                    required: "",
                    maxlength: "50",
                    "data-field": "name",
                    onBlur: ($event) => handleBlur("name"),
                    onChange: handleNameChange
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                      errors: unref(firstNameErrors),
                      disabled: unref(isFormLoading),
                      label: `${_ctx.$t("name")}`,
                      required: "",
                      maxlength: "50",
                      "data-field": "name",
                      onBlur: ($event) => handleBlur("name"),
                      onChange: handleNameChange
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(formData).lastname,
                    "onUpdate:modelValue": ($event) => unref(formData).lastname = $event,
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("surname")}`,
                    maxlength: "80",
                    "data-field": "lastname",
                    onBlur: ($event) => handleBlur("lastname"),
                    onChange: ($event) => saveCurrentField("lastname")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).lastname,
                      "onUpdate:modelValue": ($event) => unref(formData).lastname = $event,
                      disabled: unref(isFormLoading),
                      label: `${_ctx.$t("surname")}`,
                      maxlength: "80",
                      "data-field": "lastname",
                      onBlur: ($event) => handleBlur("lastname"),
                      onChange: ($event) => saveCurrentField("lastname")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "onBlur", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!unref(isAuthUser)) {
              _push2(ssrRenderComponent(_component_FormRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PolicyCheckbox, {
                      modelValue: unref(formData).personalAgreement,
                      "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                      "error-messages": unref(personalAgreementErrors),
                      disabled: unref(isFormLoading),
                      onChange: ($event) => unref(v$).personalAgreement.$touch(),
                      onBlur: ($event) => unref(v$).personalAgreement.$touch()
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PolicyCheckbox, {
                        modelValue: unref(formData).personalAgreement,
                        "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                        "error-messages": unref(personalAgreementErrors),
                        disabled: unref(isFormLoading),
                        onChange: ($event) => unref(v$).personalAgreement.$touch(),
                        onBlur: ($event) => unref(v$).personalAgreement.$touch()
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "disabled", "onChange", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_FormRow, { "small-indent": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(NewsletterCheckbox, {
                    modelValue: unref(formData).subscription,
                    "onUpdate:modelValue": ($event) => unref(formData).subscription = $event,
                    name: "checkout-newseller",
                    disabled: unref(isFormLoading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(NewsletterCheckbox, {
                      modelValue: unref(formData).subscription,
                      "onUpdate:modelValue": ($event) => unref(formData).subscription = $event,
                      name: "checkout-newseller",
                      disabled: unref(isFormLoading)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PhoneInput, {
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    class: "checkout-input",
                    disabled: unref(isFormLoading),
                    errors: unref(phoneErrors),
                    label: "write_phone_number",
                    "data-attributes": { field: unref(formData).phone },
                    onBlur: ($event) => handleBlur("phone"),
                    onChange: ($event) => saveCurrentField("phone")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "onBlur", "onChange"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    class: "checkout-input",
                    disabled: unref(isFormLoading) || unref(isAuthUser) && Boolean(unref(userEmail)),
                    errors: unref(emailErrors),
                    label: "email",
                    "data-attributes": { field: unref(formData).email },
                    type: "email",
                    onBlur: ($event) => handleBlur("email"),
                    onChange: ($event) => saveCurrentField("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "data-attributes", "onBlur", "onChange"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    errors: unref(firstNameErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("name")}`,
                    required: "",
                    maxlength: "50",
                    "data-field": "name",
                    onBlur: ($event) => handleBlur("name"),
                    onChange: handleNameChange
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label", "onBlur"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).lastname,
                    "onUpdate:modelValue": ($event) => unref(formData).lastname = $event,
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("surname")}`,
                    maxlength: "80",
                    "data-field": "lastname",
                    onBlur: ($event) => handleBlur("lastname"),
                    onChange: ($event) => saveCurrentField("lastname")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "onBlur", "onChange"])
                ]),
                _: 1
              }),
              !unref(isAuthUser) ? (openBlock(), createBlock(_component_FormRow, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_PolicyCheckbox, {
                    modelValue: unref(formData).personalAgreement,
                    "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                    "error-messages": unref(personalAgreementErrors),
                    disabled: unref(isFormLoading),
                    onChange: ($event) => unref(v$).personalAgreement.$touch(),
                    onBlur: ($event) => unref(v$).personalAgreement.$touch()
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "disabled", "onChange", "onBlur"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_FormRow, { "small-indent": "" }, {
                default: withCtx(() => [
                  createVNode(NewsletterCheckbox, {
                    modelValue: unref(formData).subscription,
                    "onUpdate:modelValue": ($event) => unref(formData).subscription = $event,
                    name: "checkout-newseller",
                    disabled: unref(isFormLoading)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isShowLoginModal),
        "onUpdate:modelValue": ($event) => isRef(isShowLoginModal) ? isShowLoginModal.value = $event : null,
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-auth/checkout-auth.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const CheckoutAuth = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-01eac9b7"]]);
const _sfc_main$c = {
  __name: "UiCitiesAutocomplete",
  __ssrInlineRender: true,
  props: {
    query: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selectedCity: {
      type: Object,
      default: null
    },
    countryValue: {
      type: Object,
      default: () => {
      },
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changeQuery", "select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectRef = ref(null);
    const dropdown = ref(null);
    const { width } = useWindowSize();
    const { y } = useWindowScroll();
    const { getPosition } = useDropdownPosition();
    const { fetchCitiesInCart, getCitiesMeta } = useCartStore();
    const { getErrors, defaultRequiredMessage } = useFormUtils();
    const { isLoading, startLoading, stopLoading } = useFormLoader();
    const searchQuery = ref(props.query);
    const v$ = useVuelidate$1(
      {
        searchQuery: { defaultRequiredMessage }
      },
      { searchQuery }
    );
    const defaultCityList = ref([]);
    const cities = ref([]);
    const currentPage = ref(1);
    const lastPage = ref(1);
    const isMenuOpen = ref(false);
    const isSearchEvent = ref(false);
    const searchErrors = computed(() => getErrors(v$.value.searchQuery));
    const excludeSelectedCity = (items, selectedValue) => items.filter((city) => city.id !== (selectedValue == null ? void 0 : selectedValue.id));
    const combineArrays = (...arrays) => {
      return Array.from(
        new Map(arrays.flat().map((item) => [item.id, item])).values()
      );
    };
    const updateCityList = async () => {
      var _a;
      if (props.selectedCity && props.selectedCity.name) {
        const matchedCitiesByName = await fetchCitiesInCart(
          props.countryValue.id,
          1,
          props.selectedCity.name
        );
        cities.value = excludeSelectedCity(
          combineArrays(matchedCitiesByName, cities.value),
          props.selectedCity
        );
      } else {
        defaultCityList.value = await fetchCitiesInCart(props.countryValue.id, 1);
        cities.value = excludeSelectedCity(
          defaultCityList.value,
          props.selectedCity
        );
      }
      lastPage.value = ((_a = getCitiesMeta.value) == null ? void 0 : _a.last_page) || 1;
    };
    const onClickOutside = () => {
      isMenuOpen.value = false;
      if (props.selectedCity && !isEqual(searchQuery.value, props.selectedCity.name)) {
        searchQuery.value = props.selectedCity.name;
      }
    };
    useDebounceFn(async (searchValue) => {
      var _a;
      if (!searchValue) {
        onReset();
        return;
      }
      isSearchEvent.value = true;
      startLoading();
      v$.value.$touch();
      emit("changeQuery", searchValue);
      currentPage.value = 1;
      const items = await fetchCitiesInCart(
        props.countryValue.id,
        currentPage.value,
        searchValue
      );
      lastPage.value = ((_a = getCitiesMeta.value) == null ? void 0 : _a.last_page) || 1;
      cities.value = excludeSelectedCity(items, props.selectedCity);
      isSearchEvent.value = false;
      stopLoading();
    }, 500);
    const onIntersect = async (_, __, isIntersect) => {
      if (isIntersect) {
        startLoading();
        currentPage.value += 1;
        if (currentPage.value <= lastPage.value) {
          const items = await fetchCitiesInCart(
            props.countryValue.id,
            currentPage.value,
            searchQuery.value || ""
          );
          cities.value = excludeSelectedCity(
            combineArrays(cities.value, items),
            props.selectedCity
          );
        }
        stopLoading();
      }
    };
    const onReset = () => {
      if (!searchQuery.value) {
        emit("select", null);
      }
    };
    watch(
      () => props.query,
      (v) => {
        searchQuery.value = v;
      }
    );
    watch(
      () => props.selectedCity,
      async (value, oldValue) => {
        if ((value == null ? void 0 : value.crm_id) !== (oldValue == null ? void 0 : oldValue.crm_id) && (value == null ? void 0 : value.id) !== (oldValue == null ? void 0 : oldValue.id) && (value == null ? void 0 : value.country_id) !== (oldValue == null ? void 0 : oldValue.country_id)) {
          if ((value == null ? void 0 : value.country_id) !== (oldValue == null ? void 0 : oldValue.country_id)) {
            cities.value = [];
          }
          await updateCityList();
        }
      }
    );
    const styleData = ref({});
    const scrollPos = inject("scrollPos");
    const styles = computed(
      () => getPosition(selectRef.value, dropdown.value, styleData.value)
    );
    watch([width, y, scrollPos == null ? void 0 : scrollPos.value], () => {
      if (isMenuOpen.value) {
        styleData.value = getPosition(
          selectRef.value,
          dropdown.value,
          styleData.value
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1$2;
      const _component_UiPreloader = __nuxt_component_2$3;
      const _directive_intersect = resolveDirective("intersect");
      const _directive_click_outside = resolveDirective("click-outside");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "selectRef",
        ref: selectRef,
        class: ["select select__with-icon", {
          select__error: (_a = unref(searchErrors)) == null ? void 0 : _a.length
        }]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, { handler: onClickOutside })))} data-v-6059478a>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "select_with-icon",
        icon: "searchIcon"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(searchQuery))} type="text" class="select_fake-input" data-v-6059478a><label class="select_label" data-v-6059478a>${ssrInterpolate(__props.label)}`);
      if (__props.required) {
        _push(`<!--[-->*<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      if (unref(isMenuOpen)) {
        ssrRenderTeleport(_push, (_push2) => {
          var _a2;
          _push2(`<div class="${ssrRenderClass([{ select_dropdown__open: unref(isMenuOpen) }, "select_dropdown"])}" style="${ssrRenderStyle({ ...unref(styles), ...unref(styleData) })}" data-v-6059478a><ul style="${ssrRenderStyle(!unref(isSearchEvent) ? null : { display: "none" })}" data-v-6059478a>`);
          if (__props.selectedCity && __props.selectedCity.name && __props.selectedCity.region) {
            _push2(`<li class="select_city-item" data-v-6059478a><div class="select_shell" data-v-6059478a>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "pin",
              class: "select_icon__primary"
            }, null, _parent));
            _push2(`<div class="select_content" data-v-6059478a><div class="select_name" data-v-6059478a>${ssrInterpolate(__props.selectedCity.name)}</div><div class="select_region" data-v-6059478a>${ssrInterpolate(__props.selectedCity.region.name)}</div></div></div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "check",
              class: "select_icon select_icon__primary"
            }, null, _parent));
            _push2(`</li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<!--[-->`);
          ssrRenderList(unref(cities), (city) => {
            _push2(`<li class="select_city-item" data-v-6059478a>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "pin",
              class: "select_icon select_icon__primary"
            }, null, _parent));
            _push2(`<div class="select_content" data-v-6059478a><div class="select_name" data-v-6059478a>${ssrInterpolate(city.name)}</div><div class="select_region" data-v-6059478a>${ssrInterpolate(city.region.name)}</div></div></li>`);
          });
          _push2(`<!--]--><li${ssrRenderAttrs(_temp0 = mergeProps({ class: "select_intersect" }, ssrGetDirectiveProps(_ctx, _directive_intersect, onIntersect)))} data-v-6059478a>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a2 = _temp0.innerHTML) != null ? _a2 : ""}</li><li style="${ssrRenderStyle(unref(isLoading) ? null : { display: "none" })}" data-v-6059478a>`);
          _push2(ssrRenderComponent(_component_UiPreloader, { class: "select_loading" }, null, _parent));
          _push2(`</li></ul>`);
          _push2(ssrRenderComponent(_component_UiPreloader, {
            style: unref(isLoading) && unref(isSearchEvent) ? null : { display: "none" },
            class: "select_loading"
          }, null, _parent));
          _push2(`<div style="${ssrRenderStyle(!unref(cities).length && !__props.selectedCity && !unref(isLoading) ? null : { display: "none" })}" class="select_empty" data-v-6059478a>${ssrInterpolate(_ctx.$t("results_not_found"))}</div></div>`);
        }, "body", false, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(searchErrors)) {
        _push(`<div class="select_errors" data-v-6059478a><!--[-->`);
        ssrRenderList(unref(searchErrors), (error) => {
          _push(`<span data-v-6059478a>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiSelect/UiCitiesAutocomplete.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6059478a"]]);
const _sfc_main$b = {
  __name: "checkout-add-user-address",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    city: {
      type: Object,
      default: () => {
      },
      required: false
    },
    country: {
      type: Object,
      default: () => {
      }
    },
    cityName: {
      type: String,
      default: ""
    },
    countryList: {
      type: Array,
      required: true
    },
    cityQuery: {
      type: String,
      default: ""
    }
  },
  emits: ["updateBillingForm"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const defaultForm = {
      crm_id: null,
      country: null,
      zip_code: "",
      city: null,
      street: null,
      house_number: null,
      apartment_number: null
    };
    const props = __props;
    const emit = __emit;
    const { getDeliveryData, saveDeliveryData } = useSaveCheckout();
    const { defaultRequiredMessage, getErrors } = useFormUtils();
    const billingForm = reactive({
      ...defaultForm,
      city_cms_id: ((_a = props.city) == null ? void 0 : _a.id) || null,
      country_cms_id: ((_b = props == null ? void 0 : props.country) == null ? void 0 : _b.id) || null,
      region_cms_id: ((_d = (_c = props.city) == null ? void 0 : _c.region) == null ? void 0 : _d.id) || null,
      city_crm_id: ((_e = props.city) == null ? void 0 : _e.crm_id) || null,
      country_crm_id: ((_f = props == null ? void 0 : props.country) == null ? void 0 : _f.crm_id) || null,
      region_crm_id: ((_h = (_g = props.city) == null ? void 0 : _g.region) == null ? void 0 : _h.crm_id) || null,
      city_name: ((_i = props == null ? void 0 : props.city) == null ? void 0 : _i.name) || props.cityName || null,
      country_name: ((_j = props == null ? void 0 : props.country) == null ? void 0 : _j.name) || null,
      region_name: ((_l = (_k = props.city) == null ? void 0 : _k.region) == null ? void 0 : _l.name) || null
    });
    const billingRules = computed(() => ({
      city_name: { defaultRequiredMessage },
      street: { defaultRequiredMessage },
      house_number: { defaultRequiredMessage }
    }));
    const countriesOptions = computed(() => props.countryList.map((country) => ({
      label: country.name,
      value: country.id
    })));
    const v$ = useVuelidate$1(billingRules, billingForm);
    const streetErrors = computed(() => getErrors(v$.value.street));
    const houseNumberErrors = computed(() => getErrors(v$.value.house_number));
    const handleBlur = (fieldName) => {
      var _a2, _b2;
      (_b2 = (_a2 = v$.value) == null ? void 0 : _a2[fieldName]) == null ? void 0 : _b2.$touch();
    };
    watch(
      () => props.cityName,
      () => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
        if (props.cityName) {
          billingForm.city_name = props.cityName;
        }
        if (props.city) {
          billingForm.city_cms_id = ((_a2 = props.city) == null ? void 0 : _a2.id) || null;
          billingForm.country_cms_id = ((_b2 = props == null ? void 0 : props.country) == null ? void 0 : _b2.id) || null;
          billingForm.region_cms_id = ((_d2 = (_c2 = props.city) == null ? void 0 : _c2.region) == null ? void 0 : _d2.id) || null;
          billingForm.city_crm_id = ((_e2 = props.city) == null ? void 0 : _e2.crm_id) || null;
          billingForm.country_crm_id = ((_f2 = props == null ? void 0 : props.country) == null ? void 0 : _f2.crm_id) || null;
          billingForm.region_crm_id = ((_h2 = (_g2 = props.city) == null ? void 0 : _g2.region) == null ? void 0 : _h2.crm_id) || null;
          billingForm.city_name = ((_i2 = props == null ? void 0 : props.city) == null ? void 0 : _i2.name) || props.cityName || null;
          billingForm.country_name = ((_j2 = props == null ? void 0 : props.country) == null ? void 0 : _j2.name) || null;
          billingForm.region_name = ((_l2 = (_k2 = props.city) == null ? void 0 : _k2.region) == null ? void 0 : _l2.name) || null;
        }
      }
    );
    watch(
      () => ({ ...billingForm }),
      (value, oldValue) => {
        if (!isEqual(value, oldValue)) {
          const data2 = getDeliveryData();
          saveDeliveryData({
            ...data2,
            address: {
              ...value
            }
          });
          emit("updateBillingForm", value);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0$3;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_UiSelect = __nuxt_component_1$3;
      const _component_UiCitiesAutocomplete = __nuxt_component_3;
      const _component_TextInput = _sfc_main$m;
      _push(ssrRenderComponent(_component_Form, mergeProps({ class: "add-address" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, { class: "add-address_row" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(`<div name="checkoutSearch" class="add-address_row" data-v-b385876e${_scopeId2}>`);
                  if (((_a2 = __props.countryList) == null ? void 0 : _a2.length) > 1) {
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(billingForm).country,
                      "onUpdate:modelValue": [($event) => unref(billingForm).country = $event, ($event) => _ctx.$emit("changeCountryBase", $event)],
                      options: unref(countriesOptions),
                      disabled: __props.disabled,
                      label: _ctx.$t("country"),
                      name: "country",
                      class: "checkout-delivery_country",
                      onBlur: ($event) => handleBlur("country")
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_b2 = __props.country) == null ? void 0 : _b2.id) {
                    _push3(ssrRenderComponent(_component_UiCitiesAutocomplete, {
                      ref: "checkoutSearchRef",
                      "with-search": "",
                      required: "",
                      query: __props.cityQuery || "",
                      "country-value": __props.country,
                      "selected-city": __props.city,
                      disabled: __props.disabled,
                      label: _ctx.$t("city"),
                      class: "checkout-delivery_city",
                      onSelect: ($event) => _ctx.$emit("selectCityBase", $event),
                      onChangeCountryBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="add-address_row" data-v-b385876e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(billingForm).street,
                    "onUpdate:modelValue": ($event) => unref(billingForm).street = $event,
                    label: "street",
                    "data-field": "street",
                    errors: unref(streetErrors),
                    required: "",
                    onBlur: ($event) => handleBlur("street")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      name: "checkoutSearch",
                      class: "add-address_row"
                    }, [
                      ((_c2 = __props.countryList) == null ? void 0 : _c2.length) > 1 ? (openBlock(), createBlock(_component_UiSelect, {
                        key: 0,
                        modelValue: unref(billingForm).country,
                        "onUpdate:modelValue": [($event) => unref(billingForm).country = $event, ($event) => _ctx.$emit("changeCountryBase", $event)],
                        options: unref(countriesOptions),
                        disabled: __props.disabled,
                        label: _ctx.$t("country"),
                        name: "country",
                        class: "checkout-delivery_country",
                        onBlur: ($event) => handleBlur("country")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled", "label", "onBlur"])) : createCommentVNode("", true),
                      ((_d2 = __props.country) == null ? void 0 : _d2.id) ? (openBlock(), createBlock(_component_UiCitiesAutocomplete, {
                        key: 1,
                        ref: "checkoutSearchRef",
                        "with-search": "",
                        required: "",
                        query: __props.cityQuery || "",
                        "country-value": __props.country,
                        "selected-city": __props.city,
                        disabled: __props.disabled,
                        label: _ctx.$t("city"),
                        class: "checkout-delivery_city",
                        onSelect: ($event) => _ctx.$emit("selectCityBase", $event),
                        onChangeCountryBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
                      }, null, 8, ["query", "country-value", "selected-city", "disabled", "label", "onSelect", "onChangeCountryBase"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "add-address_row" }, [
                      createVNode(_component_TextInput, {
                        modelValue: unref(billingForm).street,
                        "onUpdate:modelValue": ($event) => unref(billingForm).street = $event,
                        label: "street",
                        "data-field": "street",
                        errors: unref(streetErrors),
                        required: "",
                        onBlur: ($event) => handleBlur("street")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "onBlur"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, { class: "add-address_row" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(billingForm).house_number,
                    "onUpdate:modelValue": ($event) => unref(billingForm).house_number = $event,
                    "data-field": "house_number",
                    errors: unref(houseNumberErrors),
                    label: "house_number",
                    required: "",
                    onBlur: ($event) => handleBlur("house_number")
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(billingForm).apartment_number,
                    "onUpdate:modelValue": ($event) => unref(billingForm).apartment_number = $event,
                    label: "number_apartment",
                    "data-field": "apartment"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(billingForm).house_number,
                      "onUpdate:modelValue": ($event) => unref(billingForm).house_number = $event,
                      "data-field": "house_number",
                      errors: unref(houseNumberErrors),
                      label: "house_number",
                      required: "",
                      onBlur: ($event) => handleBlur("house_number")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "onBlur"]),
                    createVNode(_component_TextInput, {
                      modelValue: unref(billingForm).apartment_number,
                      "onUpdate:modelValue": ($event) => unref(billingForm).apartment_number = $event,
                      label: "number_apartment",
                      "data-field": "apartment"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormRow, { class: "add-address_row" }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode("div", {
                      name: "checkoutSearch",
                      class: "add-address_row"
                    }, [
                      ((_a2 = __props.countryList) == null ? void 0 : _a2.length) > 1 ? (openBlock(), createBlock(_component_UiSelect, {
                        key: 0,
                        modelValue: unref(billingForm).country,
                        "onUpdate:modelValue": [($event) => unref(billingForm).country = $event, ($event) => _ctx.$emit("changeCountryBase", $event)],
                        options: unref(countriesOptions),
                        disabled: __props.disabled,
                        label: _ctx.$t("country"),
                        name: "country",
                        class: "checkout-delivery_country",
                        onBlur: ($event) => handleBlur("country")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled", "label", "onBlur"])) : createCommentVNode("", true),
                      ((_b2 = __props.country) == null ? void 0 : _b2.id) ? (openBlock(), createBlock(_component_UiCitiesAutocomplete, {
                        key: 1,
                        ref: "checkoutSearchRef",
                        "with-search": "",
                        required: "",
                        query: __props.cityQuery || "",
                        "country-value": __props.country,
                        "selected-city": __props.city,
                        disabled: __props.disabled,
                        label: _ctx.$t("city"),
                        class: "checkout-delivery_city",
                        onSelect: ($event) => _ctx.$emit("selectCityBase", $event),
                        onChangeCountryBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
                      }, null, 8, ["query", "country-value", "selected-city", "disabled", "label", "onSelect", "onChangeCountryBase"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "add-address_row" }, [
                      createVNode(_component_TextInput, {
                        modelValue: unref(billingForm).street,
                        "onUpdate:modelValue": ($event) => unref(billingForm).street = $event,
                        label: "street",
                        "data-field": "street",
                        errors: unref(streetErrors),
                        required: "",
                        onBlur: ($event) => handleBlur("street")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "onBlur"])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_FormRow, { class: "add-address_row" }, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(billingForm).house_number,
                    "onUpdate:modelValue": ($event) => unref(billingForm).house_number = $event,
                    "data-field": "house_number",
                    errors: unref(houseNumberErrors),
                    label: "house_number",
                    required: "",
                    onBlur: ($event) => handleBlur("house_number")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "onBlur"]),
                  createVNode(_component_TextInput, {
                    modelValue: unref(billingForm).apartment_number,
                    "onUpdate:modelValue": ($event) => unref(billingForm).apartment_number = $event,
                    label: "number_apartment",
                    "data-field": "apartment"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-delivery-method/components/checkout-delivery-form/checkout-add-user-address/checkout-add-user-address.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CheckoutAddUserAddress = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-b385876e"]]);
const useDeliveryCreation = () => {
  const getDeliveryType = (deliveryType, delivery2) => {
    var _a, _b, _c;
    if ((delivery2 == null ? void 0 : delivery2.group) !== "pickup") {
      return delivery2;
    }
    return {
      ...delivery2,
      id: (_a = deliveryType.address) == null ? void 0 : _a.id,
      name: (_b = deliveryType.address) == null ? void 0 : _b.name,
      shopName: (_c = deliveryType.shop) == null ? void 0 : _c.name
    };
  };
  const getDeliveryRequest = (deliveryType, isPickup = false) => isPickup ? {
    type: deliveryType == null ? void 0 : deliveryType.group,
    name: deliveryType.name,
    id: (deliveryType == null ? void 0 : deliveryType.id) || null
  } : deliveryType.name;
  return {
    getDeliveryType,
    getDeliveryRequest
  };
};
const _sfc_main$a = {
  __name: "checkout-delivery-form",
  __ssrInlineRender: true,
  props: {
    delivery: {
      type: Array,
      required: true
    },
    cityName: {
      type: String,
      default: ""
    },
    city: {
      type: Object,
      default: () => {
      },
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isPickup: {
      type: Boolean,
      default: false
    },
    selectedValue: {
      type: String,
      default: ""
    },
    country: {
      type: Object,
      default: () => {
      }
    },
    cityQuery: {
      type: String,
      default: ""
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const pickupList = computed(() => props.isPickup ? props.delivery : []);
    const { getDeliveryRequest } = useDeliveryCreation();
    const changePickup = (value) => {
      const selectedPickup = pickupList.value.find(
        (pickup) => pickup.name === value
      );
      emit("change", getDeliveryRequest(selectedPickup, true));
    };
    const pickupOptions = (options) => options.map((item) => ({
      label: `${item.shopName || ""} | ${item.name || ""}`,
      value: item.name
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSelect = __nuxt_component_1$3;
      if (__props.isPickup) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-delivery-form" }, _attrs))} data-v-2f1beceb><div class="checkout-delivery-form_pickup-select" data-v-2f1beceb>`);
        _push(ssrRenderComponent(_component_UiSelect, mergeProps({ ..._ctx.$attrs }, {
          disabled: __props.disabled,
          icon: "shop",
          label: _ctx.$t("pickup_department"),
          options: pickupOptions(unref(pickupList)),
          "onUpdate:modelValue": ($event) => changePickup($event)
        }), null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-2f1beceb>`);
        _push(ssrRenderComponent(CheckoutAddUserAddress, {
          city: __props.city,
          "city-name": __props.cityName,
          country: __props.country,
          "city-query": __props.cityQuery,
          onUpdateBillingForm: ($event) => _ctx.$emit("updateBillingForm", $event),
          onChangeCountryBase: ($event) => _ctx.$emit("changeCountryBase", $event),
          onSelectCityBase: ($event) => _ctx.$emit("selectCityBase", $event),
          onChangeQueryCityBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-delivery-method/components/checkout-delivery-form/checkout-delivery-form.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CheckoutDeliveryForm = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-2f1beceb"]]);
const _sfc_main$9 = {
  __name: "checkout-delivery-method",
  __ssrInlineRender: true,
  props: {
    delivery: {
      type: Array,
      default: () => [],
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    cityName: {
      type: String,
      default: ""
    },
    city: {
      type: Object,
      default: () => {
      }
    },
    country: {
      type: Object,
      default: () => {
      }
    },
    isPickup: {
      type: Boolean,
      default: false
    },
    selectedValue: {
      type: String,
      default: ""
    },
    cityQuery: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const isShownCourierMessage = inject("isShownCourierMessage");
    const methodValue = ref(props.selectedValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fc138847>`);
      if (unref(isShownCourierMessage)) {
        _push(`<div class="delivery-method_message" data-v-fc138847>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "warningWithBorderIcon",
          class: "delivery-method_icon"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("warning_message_delivery_courier"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(CheckoutDeliveryForm, {
        modelValue: unref(methodValue),
        "onUpdate:modelValue": ($event) => isRef(methodValue) ? methodValue.value = $event : null,
        delivery: __props.delivery,
        "city-name": __props.cityName,
        city: __props.city,
        country: __props.country,
        disabled: __props.disabled,
        "is-pickup": __props.isPickup,
        "city-query": __props.cityQuery,
        onChange: ($event) => _ctx.$emit("change", $event),
        onUpdateBillingForm: ($event) => _ctx.$emit("updateBillingForm", $event),
        onChangeCountryBase: ($event) => _ctx.$emit("changeCountryBase", $event),
        onSelectCityBase: ($event) => _ctx.$emit("selectCityBase", $event),
        onChangeQueryCityBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-delivery-method/checkout-delivery-method.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CheckoutDeliveryMethod = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-fc138847"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "UiSwitch",
  __ssrInlineRender: true,
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["switch", {
          switch__active: _ctx.modelValue
        }]
      }, _attrs))} data-v-bbc69e0c><div class="switch_control" data-v-bbc69e0c><div class="switch_control-round" data-v-bbc69e0c></div></div><div class="switch_label" data-v-bbc69e0c>${ssrInterpolate(_ctx.label)}</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiSwitch/UiSwitch.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bbc69e0c"]]);
const _sfc_main$7 = {
  __name: "checkout-other-recipient",
  __ssrInlineRender: true,
  props: {
    spaceTop: {
      type: Boolean,
      default: false
    },
    isOtherRecipient: {
      type: Boolean,
      default: false
    },
    showOtherRecipient: {
      type: Boolean,
      default: true
    },
    isStateEmpty: {
      type: Boolean,
      default: true
    }
  },
  emits: ["changeShowRecipient", "updateOtherRecipient"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { isLoading: isFormLoading } = useFormLoader();
    const { saveDeliveryData, getDeliveryData } = useSaveCheckout();
    const isAnotherPeople = ref(props.isOtherRecipient || props.showOtherRecipient);
    const otherRecipientForm = reactive({
      first_name: null,
      last_name: null,
      phone: null
    });
    const { defaultRequiredMessage, getErrors, defaultPhoneRequiredMessage } = useFormUtils();
    const otherRecipientRules = computed(
      () => isAnotherPeople.value ? {
        first_name: {
          defaultRequiredMessage
        },
        last_name: {
          defaultRequiredMessage
        },
        phone: {
          defaultRequiredMessage,
          defaultPhoneRequiredMessage
        }
      } : {}
    );
    const v$ = useVuelidate$1(otherRecipientRules, otherRecipientForm);
    const firstNameErrors = computed(() => getErrors(v$.value.first_name));
    const lastNameErrors = computed(() => getErrors(v$.value.last_name));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const handleBlur = (fieldName) => {
      var _a, _b;
      (_b = (_a = v$.value) == null ? void 0 : _a[fieldName]) == null ? void 0 : _b.$touch();
    };
    const updateFormDebounce = useDebounceFn((data2) => {
      const deliveryData = getDeliveryData();
      if (deliveryData) {
        saveDeliveryData({
          ...deliveryData,
          user: {
            ...data2
          }
        });
      } else {
        saveDeliveryData({
          user: {
            ...data2
          }
        });
      }
    }, 3e3);
    const setOtherReceiver = (value) => {
      if (!value) {
        otherRecipientForm.first_name = null;
        otherRecipientForm.last_name = null;
        otherRecipientForm.phone = null;
        v$.value.$reset();
      }
    };
    watch(isAnotherPeople, (v) => {
      emit("changeShowRecipient", v);
    });
    watch(
      () => ({
        ...otherRecipientForm
      }),
      (value, oldValue) => {
        if (!isEqual(value, oldValue)) {
          emit("updateOtherRecipient", value);
          updateFormDebounce({
            ...value,
            is_other_recipient: isAnotherPeople.value
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSwitch = __nuxt_component_0$1;
      const _component_Form = __nuxt_component_0$3;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_TextInput = _sfc_main$m;
      const _component_PhoneInput = __nuxt_component_4$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-other-recipient" }, _attrs))} data-v-8259f0f6>`);
      if (__props.isStateEmpty || !__props.showOtherRecipient) {
        _push(`<div data-v-8259f0f6>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          modelValue: unref(isAnotherPeople),
          "onUpdate:modelValue": ($event) => isRef(isAnotherPeople) ? isAnotherPeople.value = $event : null,
          label: _ctx.$t("recipient_another_people"),
          onChange: ($event) => setOtherReceiver($event)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.isStateEmpty && __props.showOtherRecipient || unref(isAnotherPeople)) {
        _push(ssrRenderComponent(_component_Form, { class: "checkout-other-recipient_form" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(otherRecipientForm).first_name,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).first_name = $event,
                      "data-attributes": { field: unref(otherRecipientForm).first_name },
                      label: "name",
                      disabled: unref(isFormLoading),
                      errors: unref(firstNameErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("first_name")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(otherRecipientForm).last_name,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).last_name = $event,
                      "data-attributes": { field: unref(otherRecipientForm).last_name },
                      label: "surname",
                      disabled: unref(isFormLoading),
                      errors: unref(lastNameErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("last_name")
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TextInput, {
                        modelValue: unref(otherRecipientForm).first_name,
                        "onUpdate:modelValue": ($event) => unref(otherRecipientForm).first_name = $event,
                        "data-attributes": { field: unref(otherRecipientForm).first_name },
                        label: "name",
                        disabled: unref(isFormLoading),
                        errors: unref(firstNameErrors),
                        required: "",
                        onBlur: ($event) => handleBlur("first_name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(otherRecipientForm).last_name,
                        "onUpdate:modelValue": ($event) => unref(otherRecipientForm).last_name = $event,
                        "data-attributes": { field: unref(otherRecipientForm).last_name },
                        label: "surname",
                        disabled: unref(isFormLoading),
                        errors: unref(lastNameErrors),
                        required: "",
                        onBlur: ($event) => handleBlur("last_name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PhoneInput, {
                      modelValue: unref(otherRecipientForm).phone,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).phone = $event,
                      "data-attributes": { field: unref(otherRecipientForm).phone },
                      label: "write_phone_number",
                      disabled: unref(isFormLoading),
                      errors: unref(phoneErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("phone")
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PhoneInput, {
                        modelValue: unref(otherRecipientForm).phone,
                        "onUpdate:modelValue": ($event) => unref(otherRecipientForm).phone = $event,
                        "data-attributes": { field: unref(otherRecipientForm).phone },
                        label: "write_phone_number",
                        disabled: unref(isFormLoading),
                        errors: unref(phoneErrors),
                        required: "",
                        onBlur: ($event) => handleBlur("phone")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_FormRow, null, {
                  default: withCtx(() => [
                    createVNode(_component_TextInput, {
                      modelValue: unref(otherRecipientForm).first_name,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).first_name = $event,
                      "data-attributes": { field: unref(otherRecipientForm).first_name },
                      label: "name",
                      disabled: unref(isFormLoading),
                      errors: unref(firstNameErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("first_name")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"]),
                    createVNode(_component_TextInput, {
                      modelValue: unref(otherRecipientForm).last_name,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).last_name = $event,
                      "data-attributes": { field: unref(otherRecipientForm).last_name },
                      label: "surname",
                      disabled: unref(isFormLoading),
                      errors: unref(lastNameErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("last_name")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormRow, null, {
                  default: withCtx(() => [
                    createVNode(_component_PhoneInput, {
                      modelValue: unref(otherRecipientForm).phone,
                      "onUpdate:modelValue": ($event) => unref(otherRecipientForm).phone = $event,
                      "data-attributes": { field: unref(otherRecipientForm).phone },
                      label: "write_phone_number",
                      disabled: unref(isFormLoading),
                      errors: unref(phoneErrors),
                      required: "",
                      onBlur: ($event) => handleBlur("phone")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-delivery-methods/components/checkout-other-recipient.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CheckoutOtherRecipient = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8259f0f6"]]);
const _sfc_main$6 = {
  __name: "delivery-saved-items",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Object,
      required: true
    },
    createName: {
      type: Function,
      required: true
    },
    items: {
      type: Array,
      default: () => [],
      required: true
    },
    newType: {
      type: String,
      required: true
    },
    newIcon: {
      type: String,
      required: true
    },
    isShowItemIcon: {
      type: Boolean,
      default: true
    },
    isSubtitleShown: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedValue = ref(props.createName(props.modelValue) || null);
    const selectOptionWithMark = ref([]);
    const selectOptions = computed(() => {
      var _a;
      const newOptions = [
        ...(_a = props.items) == null ? void 0 : _a.map((item) => {
          const value = props.newType ? props.createName(item) : item.title;
          selectOptionWithMark.value.push({
            ...item,
            markValue: value
          });
          return {
            label: value,
            value
          };
        })
      ];
      selectOptionWithMark.value.push({
        label: props.newType,
        value: props.newType,
        markValue: props.newType
      });
      return [
        ...newOptions,
        {
          label: props.newType,
          value: props.newType
        }
      ];
    });
    const changeSelectedElement = (element) => {
      selectedValue.value = element;
      const selectedItem = selectOptionWithMark.value.find(
        (item) => item.markValue === element
      );
      emit("change", selectedItem);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSelect = __nuxt_component_1$3;
      _push(ssrRenderComponent(_component_UiSelect, mergeProps({
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": [($event) => isRef(selectedValue) ? selectedValue.value = $event : null, changeSelectedElement],
        options: unref(selectOptions)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-saved-elements/components/delivery-saved-items.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "checkout-saved-addresses",
  __ssrInlineRender: true,
  setup(__props) {
    const { getUser } = useUserStore();
    const { t } = useI18n();
    const createAddressName = (address) => {
      var _a;
      const countryName = ((_a = getUser.value) == null ? void 0 : _a.is_partner_company_employee) ? `${address == null ? void 0 : address.country_name}, ` : "";
      return `${countryName} ${address == null ? void 0 : address.city_name}, ${t("short_street")} ${address == null ? void 0 : address.street}, ${address == null ? void 0 : address.house_number}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ ..._ctx.$attrs }, {
        items: _ctx.userAddresses,
        "create-name": createAddressName,
        label: _ctx.$t("saved_addresses"),
        "new-icon": "newAddress",
        "new-type": "new_delivery",
        "is-subtitle-shown": "",
        onChange: ($event) => _ctx.$emit("change", $event)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-saved-elements/checkout-saved-addresses.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "checkout-saved-recipients",
  __ssrInlineRender: true,
  setup(__props) {
    const createRecipientsName = (recipient) => {
      const firstName = (recipient == null ? void 0 : recipient.first_name) || (recipient == null ? void 0 : recipient.name) || "";
      const lastName = (recipient == null ? void 0 : recipient.last_name) || (recipient == null ? void 0 : recipient.lastname) || "";
      const phone = (recipient == null ? void 0 : recipient.phone) ? `| ${recipient.phone}` : "";
      return `${firstName} ${lastName} ${phone}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ ..._ctx.$attrs }, {
        "create-name": createRecipientsName,
        label: _ctx.$t("saved_recipients"),
        "new-icon": "newRecipient",
        "is-show-item-icon": false,
        "new-type": "new_recipient",
        onChange: ($event) => _ctx.$emit("change", $event)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-saved-elements/checkout-saved-recipients.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useDeliveryFilter = () => {
  const { zipCodeMaxLength } = useZipCodeUtils();
  const isCourierDeliveryCarried = (zipCode) => {
    if (zipCode) {
      return zipCode.length < zipCodeMaxLength;
    }
    return true;
  };
  const getCityProperties = (groups = [], currentGroupCategory = "", currentTypeName = "") => {
    var _a, _b;
    if (!currentTypeName || !currentGroupCategory) {
      return null;
    }
    const currentGroup = groups == null ? void 0 : groups.find(
      (group) => currentGroupCategory === group.category
    );
    const currentItem = (_a = currentGroup == null ? void 0 : currentGroup.items) == null ? void 0 : _a.find(
      (item) => currentTypeName === item.name
    );
    if (currentGroup && currentItem) {
      return { item: null, group: null };
    }
    const isExpress = currentGroupCategory.includes("express");
    const isRegional = currentGroupCategory.includes("regional");
    const matchDeliveryCriteria = (item) => {
      const isIncludeRegional = item.includes("regional");
      const isIncludeExpress = item.includes("express");
      const isIncludeCourier = item.includes("courier");
      if (!isIncludeCourier) {
        return false;
      }
      if (isExpress && isRegional) {
        return isIncludeExpress;
      }
      if (isExpress && !isRegional) {
        return isIncludeExpress && isIncludeRegional;
      }
      if (!isExpress && isRegional) {
        return !isIncludeExpress && !isIncludeRegional;
      }
      if (!isExpress && !isRegional) {
        return isIncludeRegional && !isIncludeExpress;
      }
      return false;
    };
    const findingGroup = groups.find(
      (group) => matchDeliveryCriteria(group.category)
    );
    const findingItem = (_b = findingGroup == null ? void 0 : findingGroup.items) == null ? void 0 : _b.find(
      (item) => matchDeliveryCriteria(item.name)
    );
    if (findingGroup && findingItem) {
      return {
        item: findingItem,
        group: findingGroup
      };
    }
    const firstGroup = groups[0];
    const firstItem = firstGroup == null ? void 0 : firstGroup.items[0];
    return {
      item: firstItem,
      group: firstGroup
    };
  };
  return {
    isCourierDeliveryCarried,
    getCityProperties
  };
};
const _sfc_main$3 = {
  __name: "checkout-delivery-methods",
  __ssrInlineRender: true,
  props: {
    deliveries: {
      type: Array,
      required: true
    },
    countryList: {
      type: Array,
      required: true
    },
    cityQuery: {
      type: String,
      default: ""
    },
    deliveryMethodsState: {
      type: Object,
      required: true
    },
    cityName: {
      type: String,
      default: ""
    },
    city: {
      type: Object,
      default: () => {
      },
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    country: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["change", "changeCategory", "changeState"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d;
    const defaultRecipientForm = {
      first_name: null,
      last_name: null,
      phone: null
    };
    const props = __props;
    const emit = __emit;
    const { pushGtmEvent } = useGtm();
    const { t } = useI18n();
    const { saveDeliveryData, getDeliveryData } = useSaveCheckout();
    useUserStore();
    const { getCityProperties } = useDeliveryFilter();
    const { getDeliveryRequest, getDeliveryType } = useDeliveryCreation();
    const userRecipients = ref([]);
    const userAddresses = ref([]);
    const state = reactive({
      selectedAddress: ((_a = props.deliveryMethodsState) == null ? void 0 : _a.selectedAddress) || null,
      selectedRecipient: {
        ...(_b = props.deliveryMethodsState) == null ? void 0 : _b.selectedRecipient,
        markValue: (_d = (_c = props.deliveryMethodsState) == null ? void 0 : _c.selectedRecipient) == null ? void 0 : _d.first_name
      },
      isOtherRecipient: false,
      otherRecipient: {
        ...defaultRecipientForm
      },
      billingForm: null
    });
    const isAddressesEmpty = ref(true);
    const isRecipientsEmpty = ref(true);
    const showOtherRecipient = ref(false);
    const showDelivery = ref(false);
    const selectedDeliveryType = ref("");
    const selectedCategory = ref(null);
    const deliveryGroups = ref([]);
    const deliveryCosts = ref({});
    const isPickup = computed(() => selectedCategory.value === "pickup");
    const isTradeInProductSelected = inject("isTradeInProductSelected");
    const changeDeliveryMethod = (method) => {
      selectedDeliveryType.value = method.name || method;
      emit("change", method);
      const data2 = getDeliveryData();
      saveDeliveryData({
        ...data2,
        category: selectedCategory.value,
        type: selectedDeliveryType.value
      });
    };
    const changeDeliveryMethodDebounce = useDebounceFn((type) => {
      selectedDeliveryType.value = isPickup.value ? type.name : type;
      emit("change", type);
    }, 1e3);
    const createDeliveryGroups = (isMounted = false) => {
      var _a2;
      const editableDeliveryGroups = [];
      const editableCosts = {};
      if (!((_a2 = props.deliveries) == null ? void 0 : _a2.length)) {
        deliveryGroups.value = [];
      }
      props.deliveries.forEach((delivery2) => {
        var _a3;
        if ((delivery2 == null ? void 0 : delivery2.addresses) && Array.isArray(delivery2.addresses)) {
          ({ ...delivery2 });
          const items = delivery2.addresses.map(
            (item) => getDeliveryType(item, delivery2)
          );
          editableDeliveryGroups.push({
            category: delivery2.name,
            tradeInDisabled: !delivery2.is_trade_in,
            items
          });
          editableCosts[delivery2.name] = delivery2.cost;
        } else if (!((_a3 = delivery2.group) == null ? void 0 : _a3.includes("pickup"))) {
          editableDeliveryGroups.push({
            category: delivery2.name,
            tradeInDisabled: !delivery2.is_trade_in,
            items: [delivery2]
          });
          editableCosts[delivery2.name] = delivery2.cost;
        }
      });
      const deliveryProperty = getCityProperties(
        editableDeliveryGroups,
        selectedCategory.value,
        selectedDeliveryType.value
      );
      if (deliveryProperty && deliveryProperty.item && deliveryProperty.group) {
        selectedCategory.value = deliveryProperty.group.category;
        selectedDeliveryType.value = deliveryProperty.item.name;
        emit("changeCategory", deliveryProperty.group.category);
      } else if (deliveryProperty && !isMounted) {
        const deliveryType = editableDeliveryGroups.find((group) => group.category === selectedCategory.value).items.find((item) => item.name === selectedDeliveryType.value);
        if (deliveryType) {
          changeDeliveryMethod(getDeliveryRequest(deliveryType, isPickup.value));
        }
      }
      deliveryGroups.value = editableDeliveryGroups;
      deliveryCosts.value = { ...editableCosts };
    };
    const changeDeliverySavedAddress = (address) => {
      showDelivery.value = (address == null ? void 0 : address.markValue) === "new_delivery";
      if (!showDelivery.value) {
        state.billingForm = null;
      }
      state.selectedAddress = address;
    };
    const changeDeliverySavedRecipient = (recipient) => {
      showOtherRecipient.value = (recipient == null ? void 0 : recipient.markValue) === "new_recipient";
      if (showOtherRecipient.value) {
        state.otherRecipient = { ...defaultRecipientForm };
      } else {
        state.otherRecipient = { ...defaultRecipientForm };
        state.selectedRecipient = {
          ...recipient,
          markValue: recipient == null ? void 0 : recipient.first_name
        };
      }
    };
    watch(
      () => props.deliveries,
      (valueDeliveries, oldDeliveries) => {
        if (JSON.stringify(oldDeliveries) !== JSON.stringify(valueDeliveries)) {
          createDeliveryGroups();
        }
      }
    );
    watch(
      () => ({ ...state }),
      (value, oldValue) => {
        if (!isEqual(value, oldValue)) {
          emit("changeState", { ...value });
        }
      }
    );
    watch(selectedCategory, () => {
      var _a2;
      const items = (_a2 = deliveryGroups.value.find(
        (item) => (item == null ? void 0 : item.category) === selectedCategory.value
      )) == null ? void 0 : _a2.items;
      const findValue = items == null ? void 0 : items.find(
        (item) => item.shopName === selectedDeliveryType.value
      );
      const value = findValue || items[0];
      selectedDeliveryType.value = value.name;
      const data2 = getDeliveryData();
      pushGtmEvent("addShippingInfo", isPickup.value ? "pickup" : "delivery");
      saveDeliveryData({
        ...data2,
        category: selectedCategory.value,
        type: selectedDeliveryType.value
      });
      const replaceableMethod = getDeliveryRequest(value, isPickup.value);
      changeDeliveryMethodDebounce(replaceableMethod);
    });
    watch(
      () => isTradeInProductSelected.value,
      (value) => {
        if (value) {
          const activeGroup = deliveryGroups.value.find(
            (group) => !group.tradeInDisabled
          );
          if (activeGroup) {
            selectedCategory.value = activeGroup.category;
          }
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRadioAccordion = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery-methods" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(deliveryGroups), (category) => {
        _push(ssrRenderComponent(_component_UiRadioAccordion, {
          key: category.category,
          modelValue: unref(selectedCategory),
          "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
          value: category.category,
          disabled: category.tradeInDisabled && !!unref(isTradeInProductSelected),
          checked: unref(selectedCategory) === category.category
        }, createSlots({
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="delivery-methods_title"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t(category.category))}</span><div class="delivery-methods_icon"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                icon: category.category,
                "container-size": ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "delivery-methods_title" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t(category.category)), 1),
                  createVNode("div", { class: "delivery-methods_icon" }, [
                    createVNode(_component_Icon, {
                      icon: category.category,
                      "container-size": ""
                    }, null, 8, ["icon"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, [
          unref(selectedCategory) === category.category ? {
            name: "content",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="${ssrRenderClass([{
                  "delivery-methods__column": unref(showDelivery) || unref(isPickup) || !unref(isRecipientsEmpty) && unref(isAddressesEmpty)
                }, "delivery-methods_shell"])}"${_scopeId}>`);
                if (!unref(isAddressesEmpty)) {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    style: !unref(isPickup) ? null : { display: "none" },
                    modelValue: unref(state).selectedAddress,
                    "onUpdate:modelValue": ($event) => unref(state).selectedAddress = $event,
                    items: unref(userAddresses),
                    class: "delivery-methods_item__single",
                    onChange: changeDeliverySavedAddress
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(isAddressesEmpty) || unref(showDelivery) || unref(isPickup)) {
                  _push2(`<div class="delivery-methods_item delivery-methods_item__big-indent"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(deliveryGroups), (category2) => {
                    _push2(`<!--[-->`);
                    if (category2.category === unref(selectedCategory)) {
                      _push2(ssrRenderComponent(CheckoutDeliveryMethod, {
                        key: category2.category,
                        "is-pickup": category2.category === "pickup",
                        disabled: __props.disabled,
                        delivery: category2.items,
                        "selected-value": unref(selectedDeliveryType),
                        city: __props.city,
                        country: __props.country,
                        "city-name": __props.cityName,
                        "city-query": __props.cityQuery,
                        onChange: ($event) => changeDeliveryMethod($event),
                        onUpdateBillingForm: ($event) => unref(state).billingForm = $event,
                        onChangeCountryBase: ($event) => _ctx.$emit("changeCountryBase", $event),
                        onSelectCityBase: ($event) => _ctx.$emit("selectCityBase", $event),
                        onChangeQueryCityBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!unref(isAddressesEmpty) || !unref(isRecipientsEmpty)) {
                  _push2(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(state).selectedRecipient,
                    "onUpdate:modelValue": ($event) => unref(state).selectedRecipient = $event,
                    items: unref(userRecipients),
                    class: {
                      "delivery-methods_item__small-indent": unref(showOtherRecipient)
                    },
                    onChange: changeDeliverySavedRecipient
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(isRecipientsEmpty) && unref(isAddressesEmpty) || unref(showOtherRecipient)) {
                  _push2(ssrRenderComponent(CheckoutOtherRecipient, {
                    class: "delivery-methods_item",
                    "is-other-recipient": unref(state).isOtherRecipient,
                    "show-other-recipient": unref(showOtherRecipient),
                    "is-state-empty": unref(isRecipientsEmpty) && unref(isAddressesEmpty),
                    onChangeShowRecipient: ($event) => unref(state).isOtherRecipient = $event,
                    onUpdateOtherRecipient: ($event) => unref(state).otherRecipient = $event
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["delivery-methods_shell", {
                      "delivery-methods__column": unref(showDelivery) || unref(isPickup) || !unref(isRecipientsEmpty) && unref(isAddressesEmpty)
                    }]
                  }, [
                    !unref(isAddressesEmpty) ? withDirectives((openBlock(), createBlock(_sfc_main$5, {
                      key: 0,
                      modelValue: unref(state).selectedAddress,
                      "onUpdate:modelValue": ($event) => unref(state).selectedAddress = $event,
                      items: unref(userAddresses),
                      class: "delivery-methods_item__single",
                      onChange: changeDeliverySavedAddress
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])), [
                      [vShow, !unref(isPickup)]
                    ]) : createCommentVNode("", true),
                    unref(isAddressesEmpty) || unref(showDelivery) || unref(isPickup) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "delivery-methods_item delivery-methods_item__big-indent"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(deliveryGroups), (category2) => {
                        return openBlock(), createBlock(Fragment, null, [
                          category2.category === unref(selectedCategory) ? (openBlock(), createBlock(CheckoutDeliveryMethod, {
                            key: category2.category,
                            "is-pickup": category2.category === "pickup",
                            disabled: __props.disabled,
                            delivery: category2.items,
                            "selected-value": unref(selectedDeliveryType),
                            city: __props.city,
                            country: __props.country,
                            "city-name": __props.cityName,
                            "city-query": __props.cityQuery,
                            onChange: ($event) => changeDeliveryMethod($event),
                            onUpdateBillingForm: ($event) => unref(state).billingForm = $event,
                            onChangeCountryBase: ($event) => _ctx.$emit("changeCountryBase", $event),
                            onSelectCityBase: ($event) => _ctx.$emit("selectCityBase", $event),
                            onChangeQueryCityBase: ($event) => _ctx.$emit("changeQueryCityBase", $event)
                          }, null, 8, ["is-pickup", "disabled", "delivery", "selected-value", "city", "country", "city-name", "city-query", "onChange", "onUpdateBillingForm", "onChangeCountryBase", "onSelectCityBase", "onChangeQueryCityBase"])) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])) : createCommentVNode("", true),
                    !unref(isAddressesEmpty) || !unref(isRecipientsEmpty) ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 2,
                      modelValue: unref(state).selectedRecipient,
                      "onUpdate:modelValue": ($event) => unref(state).selectedRecipient = $event,
                      items: unref(userRecipients),
                      class: {
                        "delivery-methods_item__small-indent": unref(showOtherRecipient)
                      },
                      onChange: changeDeliverySavedRecipient
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "class"])) : createCommentVNode("", true),
                    unref(isRecipientsEmpty) && unref(isAddressesEmpty) || unref(showOtherRecipient) ? (openBlock(), createBlock(CheckoutOtherRecipient, {
                      key: 3,
                      class: "delivery-methods_item",
                      "is-other-recipient": unref(state).isOtherRecipient,
                      "show-other-recipient": unref(showOtherRecipient),
                      "is-state-empty": unref(isRecipientsEmpty) && unref(isAddressesEmpty),
                      onChangeShowRecipient: ($event) => unref(state).isOtherRecipient = $event,
                      onUpdateOtherRecipient: ($event) => unref(state).otherRecipient = $event
                    }, null, 8, ["is-other-recipient", "show-other-recipient", "is-state-empty", "onChangeShowRecipient", "onUpdateOtherRecipient"])) : createCommentVNode("", true)
                  ], 2)
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/components/checkout-delivery-methods/checkout-delivery-methods.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const map = {
  AZ: 8386,
  GE: 34338,
  AM: 1853,
  MD: 75207,
  CY: [
    { key: "DEVELOPMENT", value: 221392 },
    { key: "STAGE", value: 21892 },
    { key: "PRODUCTION", value: 221385 }
  ],
  BY: 8830,
  UA: 121946,
  UZ: 146883,
  SA: 107820,
  KZ: 221731
};
const useLocalCity = () => {
  const $config = useRuntimeConfig();
  const city = ref(null);
  const getCityIdByCountryId = (countryId) => {
    return countryId || (Array.isArray(map[$config == null ? void 0 : $config.public.iso]) ? map[$config.public.currentCountry].find(
      (item) => {
        var _a;
        return item.key === ((_a = $config == null ? void 0 : $config.public) == null ? void 0 : _a.nodeModel);
      }
    ).value : map[$config.public.currentCountry]);
  };
  const getCity = () => {
    Object.keys(map).forEach((key) => {
      var _a;
      if (($config == null ? void 0 : $config.public.iso) === key) {
        if (Array.isArray(map[key])) {
          city.value = (_a = map[key].find(
            (item) => {
              var _a2;
              return item.key === ((_a2 = $config.public) == null ? void 0 : _a2.nodeModel);
            }
          )) == null ? void 0 : _a.value;
        } else {
          city.value = map[key];
        }
      }
    });
  };
  getCity();
  return { city, getCityIdByCountryId };
};
const COURIER_MESSAGE_CONFIG = {
  AZ: 300
};
const useCourierMessageVisibility = (params) => {
  const activeTemplate = useNuxtApp().$config.public.iso;
  const { totalPrice, deliveryType } = params;
  const isShownCourierMessage = computed(() => {
    const visibilityThreshold = COURIER_MESSAGE_CONFIG[activeTemplate];
    return visibilityThreshold ? totalPrice.value <= visibilityThreshold && deliveryType.value === "courier" : false;
  });
  return {
    isShownCourierMessage
  };
};
const _sfc_main$2 = {
  __name: "checkout-delivery",
  __ssrInlineRender: true,
  props: {
    deliveries: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataUserErrors: {
      type: Array,
      default: () => []
    },
    currentCart: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["updateForm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getCountryList } = useCartStore();
    const { pushGtmEvent } = useGtm();
    const { t } = useI18n();
    const { getUser } = useUserStore();
    const { saveSearchData, getSearchData, getCountryData, saveCountryData } = useSaveCheckout();
    const { getCityIdByCountryId } = useLocalCity();
    const {
      fetchDefaultCountryCity,
      getDefaultCountryCity,
      fetchDeliveryPrimaryCity
    } = useCartStore();
    const { requiredMessage } = useFormUtils();
    const { setCheckoutDelivery } = useCheckoutStore();
    const { isAuthUser } = useUserStore();
    const deliveryForm = reactive({
      type: null,
      shop_address_id: null,
      savedData: {
        selectedUserAddress: null,
        selectedUserRecipient: null
      },
      billingForm: null,
      otherRecipient: null
    });
    const sendingDeliveryForm = ref({ delivery: null });
    const totalPrice = computed(
      () => props.currentCart.total.total_price_with_discount
    );
    const { isShownCourierMessage } = useCourierMessageVisibility({
      totalPrice,
      deliveryType: toRef(deliveryForm, "type")
    });
    const isFirstRender = ref(true);
    const isBlockUpdate = ref(true);
    const isTradeInProductSelected = inject("isTradeInProductSelected");
    const cityQuery = ref("");
    const selectedCity = ref(null);
    const selectedCountry = ref({
      name: "",
      crm_id: null,
      id: null
    });
    const deliveryCountryInfo = ref(null);
    const deliveryMethodsRef = ref(null);
    const deliveryFormRules = computed(() => ({
      type: {
        required: requiredMessage(t("delivery_method_must_been_selected"))
      }
    }));
    useVuelidate$1(deliveryFormRules, deliveryForm);
    const setDeliveryFormAddress = (city, updateChanges = true, updateWithDelivery = true) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const address = {
        city_cms_id: city == null ? void 0 : city.id,
        country_cms_id: city == null ? void 0 : city.country_id,
        region_cms_id: city == null ? void 0 : city.region.id,
        city_crm_id: city == null ? void 0 : city.crm_id,
        country_crm_id: (_a = selectedCountry.value) == null ? void 0 : _a.crm_id,
        region_crm_id: (_b = city == null ? void 0 : city.region) == null ? void 0 : _b.crm_id,
        city_name: city == null ? void 0 : city.name,
        country_name: (_c = selectedCountry.value) == null ? void 0 : _c.name,
        region_name: (_d = city == null ? void 0 : city.region) == null ? void 0 : _d.name,
        zip_code: "",
        street: "",
        house_number: "",
        apartment_number: ""
      };
      deliveryCountryInfo.value = {
        city_cms_id: city == null ? void 0 : city.id,
        country_cms_id: city == null ? void 0 : city.country_id,
        region_cms_id: (_e = city == null ? void 0 : city.region) == null ? void 0 : _e.id,
        city_crm_id: city == null ? void 0 : city.crm_id,
        country_crm_id: (_f = selectedCountry.value) == null ? void 0 : _f.crm_id,
        region_crm_id: (_g = city == null ? void 0 : city.region) == null ? void 0 : _g.crm_id,
        city_name: city == null ? void 0 : city.name,
        country_name: (_h = selectedCountry.value) == null ? void 0 : _h.name,
        region_name: (_i = city == null ? void 0 : city.region) == null ? void 0 : _i.name
      };
      sendingDeliveryForm.value.delivery = {
        address: { ...address }
      };
      if (deliveryForm.type && updateWithDelivery) {
        sendingDeliveryForm.value.delivery.type = deliveryForm.type;
        if (deliveryForm.shop_address_id) {
          sendingDeliveryForm.value.delivery.shop_address_id = deliveryForm.shop_address_id;
        }
      } else {
        sendingDeliveryForm.value.delivery.type = null;
        sendingDeliveryForm.value.delivery.shop_address_id = null;
      }
      if (updateChanges) {
        emit("updateForm", sendingDeliveryForm.value);
      }
    };
    const changeCity = (city) => {
      selectedCity.value = city;
      cityQuery.value = (city == null ? void 0 : city.name) || "";
      if (city && (city == null ? void 0 : city.id)) {
        saveSearchData(selectedCity.value);
        setDeliveryFormAddress(city, true, false);
      }
    };
    const changeCountry = async (event) => {
      if (event && event.id) {
        saveCountryData(event);
        const cityID = getCityIdByCountryId(event.id);
        const city = await fetchDefaultCountryCity(cityID);
        cityQuery.value = city == null ? void 0 : city.name;
        selectedCountry.value = { ...event };
        changeCity(city);
      }
    };
    const countryList = computed(
      () => {
        var _a;
        return !getCountryList.value && !((_a = getCountryList.value) == null ? void 0 : _a.length) ? [] : getCountryList.value;
      }
    );
    const updateForm = (updatedForm) => {
      emit("updateForm", {
        client_type: isAuthUser.value ? "" : "unregistered",
        delivery: {
          ...updatedForm
        }
      });
    };
    const setDeliveryForm = () => {
      var _a;
      const { savedData, type, shop_address_id } = deliveryForm;
      const delivery2 = sendingDeliveryForm.value.delivery || {};
      if (savedData && type !== "pickup" && savedData.selectedUserAddress) {
        delivery2.address = { ...savedData.selectedUserAddress };
      }
      if ((_a = savedData == null ? void 0 : savedData.recipient) == null ? void 0 : _a.id) {
        delivery2.recipient = {
          phone: savedData.recipient.phone || null,
          first_name: savedData.recipient.first_name || null,
          last_name: savedData.recipient.last_name || null
        };
      } else {
        delivery2.recipient = null;
      }
      delivery2.type = type;
      if (type === "pickup") {
        delivery2.shop_address_id = shop_address_id;
      }
      sendingDeliveryForm.value.delivery = delivery2;
      updateForm(delivery2);
      return sendingDeliveryForm.value;
    };
    const setDeliveryType = (deliveryTypeInfo) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      if ((deliveryTypeInfo == null ? void 0 : deliveryTypeInfo.type) && deliveryTypeInfo.type === "change") {
        return;
      }
      const isPickup = (deliveryTypeInfo == null ? void 0 : deliveryTypeInfo.type) === "pickup";
      if (isPickup && typeof deliveryTypeInfo !== "string") {
        deliveryForm.type = deliveryTypeInfo.type;
        deliveryForm.shop_address_id = deliveryTypeInfo.id;
      } else {
        deliveryForm.type = deliveryTypeInfo;
        deliveryForm.shop_address_id = null;
      }
      const isDeliveryPickup = typeof deliveryTypeInfo === "object" && typeof ((_c = (_b = (_a = props.currentCart) == null ? void 0 : _a.delivery) == null ? void 0 : _b.shop_address) == null ? void 0 : _c.address) === "object";
      const isDeliveryUpdated = isDeliveryPickup ? ((_g = (_f = (_e = (_d = props.currentCart) == null ? void 0 : _d.delivery) == null ? void 0 : _e.shop_address) == null ? void 0 : _f.address) == null ? void 0 : _g.id) !== deliveryTypeInfo.id : ((_i = (_h = props.currentCart) == null ? void 0 : _h.delivery) == null ? void 0 : _i.type) !== deliveryTypeInfo;
      if (!isFirstRender.value && isDeliveryUpdated) {
        pushGtmEvent(
          "shippingTier",
          (_k = (_j = props.currentCart) == null ? void 0 : _j.products) == null ? void 0 : _k.map((item) => ({
            ...item,
            quantity: (item == null ? void 0 : item.ordered_quantity) || 1
          })),
          {
            deliveryType: isPickup ? deliveryTypeInfo.name : `${t(deliveryTypeInfo)}`
          }
        );
      }
      if (selectedCity.value) {
        setDeliveryFormAddress(selectedCity.value, false);
      }
      setCheckoutDelivery(setDeliveryForm());
      isFirstRender.value = false;
    };
    const onChangeState = (state) => {
      var _a, _b, _c, _d;
      deliveryForm.savedData.selectedUserAddress = ((_b = (_a = state.selectedAddress) == null ? void 0 : _a.markValue) == null ? void 0 : _b.includes("new")) ? null : state.selectedAddress;
      deliveryForm.savedData.selectedUserRecipient = ((_d = (_c = state.selectedRecipient) == null ? void 0 : _c.markValue) == null ? void 0 : _d.includes("new")) ? null : state.selectedRecipient;
      deliveryForm.otherRecipient = state.otherRecipient;
      deliveryForm.billingForm = state.billingForm;
      if (deliveryForm.savedData.selectedUserAddress) {
        const address = state.selectedAddress;
        const country = {
          crm_id: address.country_crm_id,
          id: address.country_cms_id,
          name: address.country_name
        };
        const city = {
          country_id: address.country_cms_id,
          crm_id: address.city_crm_id,
          id: address.city_cms_id,
          name: address.city_name,
          region: {
            crm_id: address.region_crm_id,
            id: address.region_cms_id,
            name: address.region_name
          }
        };
        const isCountryEqual = isEqual(country, selectedCountry.value);
        const isCityEqual = isEqual(city, selectedCity.value);
        if (!isCountryEqual) {
          selectedCountry.value = country;
        }
        if (!isCityEqual) {
          selectedCity.value = city;
        }
        if (!isCityEqual && !isBlockUpdate.value) {
          changeCity(city);
        }
      }
    };
    const getLocationInfo = () => deliveryCountryInfo.value;
    const getDeliveryValue = () => deliveryForm;
    const takeInfoAboutAddress = () => deliveryForm.savedData.selectedUserAddress || deliveryForm.billingForm;
    const takeInfoAboutRecipient = () => {
      var _a, _b;
      const isOtherRecipient = !!(((_a = deliveryForm.otherRecipient) == null ? void 0 : _a.first_name) || ((_b = deliveryForm.otherRecipient) == null ? void 0 : _b.phone));
      return isOtherRecipient ? deliveryForm.otherRecipient : deliveryForm.savedData.selectedUserRecipient;
    };
    __expose({
      takeInfoAboutAddress,
      takeInfoAboutRecipient,
      getLocationInfo,
      getDeliveryValue
    });
    const createLocationConfig = () => {
      var _a, _b, _c, _d, _e, _f;
      const deliveryPrimaryAddress = (_b = (_a = getUser.value) == null ? void 0 : _a.addresses) == null ? void 0 : _b.find(
        (item) => item.is_primary
      );
      let country;
      const savedCountry = getCountryData();
      const isBelongsToCountryList = (_c = getCountryList.value) == null ? void 0 : _c.includes(
        (countryListValue) => (countryListValue == null ? void 0 : countryListValue.crm_id) === (savedCountry == null ? void 0 : savedCountry.crm_id)
      );
      if (deliveryPrimaryAddress) {
        country = {
          name: deliveryPrimaryAddress == null ? void 0 : deliveryPrimaryAddress.country_name,
          crm_id: deliveryPrimaryAddress.country_crm_id,
          id: deliveryPrimaryAddress.country_cms_id
        };
      } else if (savedCountry && isBelongsToCountryList) {
        country = {
          name: savedCountry == null ? void 0 : savedCountry.name,
          crm_id: savedCountry == null ? void 0 : savedCountry.crm_id,
          id: savedCountry == null ? void 0 : savedCountry.id
        };
      } else if ((_d = getUser.value) == null ? void 0 : _d.country) {
        country = (_e = getUser.value) == null ? void 0 : _e.country;
      } else {
        country = (_f = getCountryList.value) == null ? void 0 : _f.at(0);
      }
      if (!getCountryList.value) {
        return null;
      }
      return {
        country,
        cityID: getCityIdByCountryId(country == null ? void 0 : country.id)
      };
    };
    const fetchCity = async (cityID) => {
      var _a;
      const addresses = (_a = getUser.value) == null ? void 0 : _a.addresses;
      const savedData = getSearchData();
      const isCorrectCity = (city) => {
        var _a2;
        return city && selectedCountry.value ? (city == null ? void 0 : city.country_id) === ((_a2 = selectedCountry.value) == null ? void 0 : _a2.id) : true;
      };
      if (addresses && (addresses == null ? void 0 : addresses.length) > 0) {
        const deliveryPrimaryAddress = addresses.find((item) => item.is_primary) || (addresses == null ? void 0 : addresses[0]);
        if (deliveryPrimaryAddress) {
          const primaryCity = await fetchDeliveryPrimaryCity(
            deliveryPrimaryAddress.city_cms_id
          );
          if (primaryCity) {
            return primaryCity;
          }
        }
      }
      if (savedData && isCorrectCity(savedData)) {
        return (savedData == null ? void 0 : savedData.searchInput) ? savedData.searchInput : savedData;
      }
      if (!getDefaultCountryCity.value || !isCorrectCity(getDefaultCountryCity.value)) {
        const defaultCity = await fetchDefaultCountryCity(cityID);
        if (defaultCity) {
          return defaultCity;
        }
      } else {
        return getDefaultCountryCity.value;
      }
      return null;
    };
    watch(
      getUser,
      async (newUserValue, oldUserValue) => {
        var _a, _b;
        if (!isEqual(newUserValue, oldUserValue)) {
          const config = createLocationConfig();
          if (!config) {
            return;
          }
          selectedCountry.value.id = config.country.id;
          selectedCountry.value.name = config.country.name;
          selectedCountry.value.crm_id = config.country.crm_id;
          const city = await fetchCity(config.cityID);
          if (((_a = config.country) == null ? void 0 : _a.id) !== ((_b = selectedCountry.value) == null ? void 0 : _b.id) && oldUserValue) {
            changeCity(city);
          } else {
            selectedCity.value = city;
            cityQuery.value = (city == null ? void 0 : city.name) || "";
          }
          isBlockUpdate.value = false;
        }
      },
      { immediate: true }
    );
    watch(
      () => props.deliveries,
      (valueDeliveries, oldDeliveries) => {
        var _a, _b, _c, _d, _e;
        if (isEqual(valueDeliveries, oldDeliveries) && oldDeliveries.length === valueDeliveries.length && ((_c = (_b = (_a = props.currentCart) == null ? void 0 : _a.delivery) == null ? void 0 : _b.address) == null ? void 0 : _c.city) && !((_e = (_d = props.currentCart) == null ? void 0 : _d.delivery) == null ? void 0 : _e.type) && deliveryForm.type) {
          updateForm({
            ...sendingDeliveryForm.value.delivery,
            type: deliveryForm.type,
            shop_address_id: deliveryForm.shop_address_id
          });
        }
      }
    );
    const isChangeSearchView = computed(() => countryList.value.length >= 2);
    provide("isChangeSearchView", isChangeSearchView);
    provide("isShownCourierMessage", isShownCourierMessage);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-delivery" }, _attrs))} data-v-5f03f81f><h3 class="checkout-delivery_title" data-v-5f03f81f>${ssrInterpolate(_ctx.$t("delivery"))}</h3>`);
      if (unref(isTradeInProductSelected)) {
        _push(`<p class="checkout-delivery_hint" data-v-5f03f81f>${ssrInterpolate(_ctx.$t("delivery_trade_in_disabled"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.deliveries && unref(selectedCountry)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          ref_key: "deliveryMethodsRef",
          ref: deliveryMethodsRef,
          deliveries: __props.deliveries,
          "delivery-methods-state": unref(deliveryForm).savedData,
          city: unref(selectedCity),
          country: unref(selectedCountry),
          disabled: __props.disabled,
          "city-name": unref(selectedCity) && unref(selectedCity).name || "",
          "country-list": unref(countryList),
          "city-query": unref(cityQuery),
          onChange: ($event) => setDeliveryType($event),
          onChangeCategory: ($event) => _ctx.$emit("changeCategory", $event),
          onChangeState,
          onChangeCountryBase: ($event) => changeCountry($event),
          onSelectCityBase: ($event) => changeCity($event),
          onChangeQueryCityBase: ($event) => cityQuery.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-delivery/checkout-delivery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CheckoutDelivery = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5f03f81f"]]);
const usePrimaryArrayUtils = () => {
  const updatePrimaryStatus = (items, primaryId) => items.map((item) => ({ ...item, is_primary: item.id === primaryId }));
  const hasPrimaryStatusChanged = (originalItems, updatedItems) => {
    if (originalItems.length !== updatedItems.length) {
      return false;
    }
    return originalItems.some((originalItem, index) => {
      const updatedItem = updatedItems[index];
      return originalItem.is_primary && !updatedItem.is_primary;
    });
  };
  return {
    updatePrimaryStatus,
    hasPrimaryStatusChanged
  };
};
const _sfc_main$1 = {
  __name: "checkout-view",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const { getUser, setUser, isAuthUser } = useUserStore();
    const app2 = useNuxtApp();
    const { t, locale } = useI18n();
    const router = useRouter();
    const {
      isLoading: isLoadingComponent
    } = useFormLoader();
    const {
      isLoading: isLoadingForm,
      startLoading: startLoadingForm,
      stopLoading: stopLoadingForm
    } = useFormLoader();
    const {
      isLoading: isFormSubmitted,
      startLoading: startFormSubmitted,
      stopLoading: stopFormSubmitted
    } = useFormLoader();
    const { isLoading: isCheckreservation } = useFormLoader();
    const { fetchCart, fetchCartProducts, getCartProducts, getCart } = useCartStore();
    const { updatePrimaryStatus, hasPrimaryStatusChanged } = usePrimaryArrayUtils();
    useCheckoutStore();
    const {
      getBaseData,
      getClientData,
      saveBaseData,
      saveSearchData,
      saveClientData,
      savePaymentData,
      saveDeliveryData,
      getRedirectUrl
    } = useSaveCheckout();
    const { filterPayments } = usePaymentFilter();
    const deliveryCategory = ref(null);
    const tradeInProductForChange = ref(null);
    const { userDevices } = useTradeInStore();
    const dataUserErrors = ref([]);
    const deliveryConfig = ref([]);
    const paymentConfig = ref([]);
    const checkoutCart = ref(null);
    const authRef = ref("authRef");
    const paymentRef = useTemplateRef("paymentRef");
    const deliveryRef = useTemplateRef("deliveryRef");
    const patchErrors = ref([]);
    const currency = ref("");
    const redirectUrl2 = ref("");
    const submitStatus = ref("");
    const paymentStatus = ref("");
    const isRepeatPaymentModalShown = ref(false);
    const checkoutContainer = ref(null);
    const isInformationModalOpened = ref(false);
    const modalData = reactive({
      text: "",
      buttonText: "",
      title: "",
      redirectUrl: "",
      actionAfterRedirect: null,
      shouldBeAgreed: false
    });
    const checkoutForm = reactive({
      comment: null,
      credit: null,
      delivery: null,
      is_call_back: false,
      is_trade_in: false,
      payment_type: null,
      promocode: null,
      selectCredit: null,
      shipping: null
    });
    const isTradeInShown = computed(() => {
      var _a2;
      const cartProducts = (_a2 = getCart.value) == null ? void 0 : _a2.products;
      return !!(cartProducts == null ? void 0 : cartProducts.length) && !!(cartProducts == null ? void 0 : cartProducts.find((el) => el == null ? void 0 : el.is_trade_in)) && !!paymentConfig.value.find((el) => (el == null ? void 0 : el.name) === "cash") && !!deliveryConfig.value.find((el) => (el == null ? void 0 : el.group) === "pickup" && !!(el == null ? void 0 : el.enabled));
    });
    const isTradeInAble = computed(
      () => {
        var _a2;
        return deliveryCategory.value === "pickup" && ((_a2 = checkoutForm.payment_type) == null ? void 0 : _a2.type) === "cash";
      }
    );
    const isTradeInProductSelected = computed(
      () => checkoutForm.is_trade_in && !!userDevices.value.length
    );
    const initCart = async () => {
      await fetchCart();
      await fetchCartProducts();
    };
    const isInstallmentPaymentType = computed(
      () => {
        var _a2;
        return ((_a2 = checkoutForm.payment_type) == null ? void 0 : _a2.main_type) === "installment";
      }
    );
    const currentCart = computed(() => {
      var _a2;
      return (_a2 = checkoutCart.value) != null ? _a2 : getCart.value;
    });
    const computedExchangeProducts = computed(() => {
      var _a2, _b2;
      if (!((_a2 = currentCart == null ? void 0 : currentCart.value) == null ? void 0 : _a2.products)) {
        return [];
      }
      let productsWithSingleName = currentCart.value.products.map((product) => {
        var _a4, _b4, _c;
        var _a3, _b3;
        const name = (_c = (_b4 = (_a4 = (_a3 = product == null ? void 0 : product.name) == null ? void 0 : _a3[locale.value]) != null ? _a4 : (_b3 = product.name) == null ? void 0 : _b3.en) != null ? _b4 : product == null ? void 0 : product.name) != null ? _c : "";
        return {
          ...product,
          name
        };
      });
      const catalogProductForExchange = tradeInProductForChange.value ? productsWithSingleName.find(
        (product) => {
          var _a3;
          return (product == null ? void 0 : product.sku) === ((_a3 = tradeInProductForChange.value) == null ? void 0 : _a3.exchange_device_sku);
        }
      ) : [];
      if ((_b2 = userDevices.value) == null ? void 0 : _b2.length) {
        productsWithSingleName = productsWithSingleName.filter((product) => {
          var _a3;
          const similarExchangeDevicesLength = Number(
            (_a3 = userDevices.value.filter(
              (device) => {
                var _a4;
                return ((_a4 = device == null ? void 0 : device.exchangeProduct) == null ? void 0 : _a4.sku) === (product == null ? void 0 : product.sku);
              }
            )) == null ? void 0 : _a3.length
          );
          if (similarExchangeDevicesLength < product.available_quantity) {
            return true;
          }
          return !userDevices.value.find(
            (device) => (device == null ? void 0 : device.exchange_device_sku) === (product == null ? void 0 : product.sku)
          );
        });
      }
      if (tradeInProductForChange.value && catalogProductForExchange.length) {
        productsWithSingleName.unshift(catalogProductForExchange);
      }
      return productsWithSingleName.filter(
        (product) => Boolean(product == null ? void 0 : product.is_trade_in)
      );
    });
    const userName = computed(
      () => {
        var _a3;
        var _a2, _b2, _c;
        return (_a3 = (_a2 = getUser.value) == null ? void 0 : _a2.name) != null ? _a3 : (_c = (_b2 = currentCart.value) == null ? void 0 : _b2.user) == null ? void 0 : _c.name;
      }
    );
    const userEmail = computed(
      () => {
        var _a3;
        var _a2, _b2, _c;
        return (_a3 = (_a2 = getUser.value) == null ? void 0 : _a2.email) != null ? _a3 : (_c = (_b2 = currentCart.value) == null ? void 0 : _b2.user) == null ? void 0 : _c.email;
      }
    );
    const userPhone = computed(
      () => {
        var _a3;
        var _a2, _b2, _c;
        return (_a3 = (_a2 = getUser.value) == null ? void 0 : _a2.phone) != null ? _a3 : (_c = (_b2 = currentCart.value) == null ? void 0 : _b2.user) == null ? void 0 : _c.phone;
      }
    );
    const userLastName = computed(
      () => {
        var _a3;
        var _a2, _b2, _c;
        return (_a3 = (_a2 = getUser.value) == null ? void 0 : _a2.lastname) != null ? _a3 : (_c = (_b2 = currentCart.value) == null ? void 0 : _b2.user) == null ? void 0 : _c.lastname;
      }
    );
    const getDeliveryType = computed(
      () => {
        var _a2;
        return (_a2 = deliveryConfig.value.find(
          (delivery2) => {
            var _a3;
            return delivery2.name === ((_a3 = checkoutForm.delivery) == null ? void 0 : _a3.type);
          }
        )) == null ? void 0 : _a2.name;
      }
    );
    const changedTradeIn = (data2) => {
      if (checkoutForm) {
        checkoutForm.is_trade_in = data2;
      }
    };
    const setCheckoutCart = (cart) => {
      checkoutCart.value = cart;
    };
    const formattedComment = computed(() => {
      var _a2;
      const comment = checkoutForm.comment ? checkoutForm.comment : "";
      return ((_a2 = paymentRef.value) == null ? void 0 : _a2.getFormattedComment(comment)) || comment;
    });
    const setEnabledDeliveries = (delivery2) => {
      deliveryConfig.value = delivery2 == null ? void 0 : delivery2.filter((item) => item == null ? void 0 : item.enabled);
    };
    const setEnabledPayments = (payments) => {
      paymentConfig.value = filterPayments(payments);
    };
    const processPayment = (payment) => {
      setEnabledPayments(payment);
      const selectedPayment = paymentConfig.value.find(
        (paymentType) => paymentType.default && paymentType.enabled
      );
      checkoutForm.payment_type = {
        type: selectedPayment == null ? void 0 : selectedPayment.name,
        main_type: selectedPayment == null ? void 0 : selectedPayment.type
      };
    };
    const getCheckoutConfigs = async () => {
      var _a2;
      if (getCart.value === null) {
        await fetchCart();
      }
      const checkoutConfigs = (_a2 = getCart.value) == null ? void 0 : _a2.config;
      setEnabledDeliveries(checkoutConfigs.delivery_types);
    };
    const resetUserDataErrors = () => {
      dataUserErrors.value = [];
    };
    getCheckoutConfigs();
    const openDialog = (title, text, redirect, shouldBeAgreed = false) => {
      modalData.title = title;
      modalData.text = text;
      modalData.buttonText = t("service_error_btn_text");
      if (shouldBeAgreed) {
        modalData.shouldBeAgreed = true;
      }
      isRepeatPaymentModalShown.value = true;
    };
    const openErrorDialog = (isPushingErrorEvent = false, errorMessage = null) => {
      openDialog(t("service_error_title"), t("service_error_text"));
      if (isPushingErrorEvent) {
        pushGtmEvent("checkoutError", {
          message: errorMessage
        });
      }
    };
    const setDataUserErrors = (errors) => {
      const messages = {
        "user.email": t("email_is_not_valid"),
        "user.phone": t("enter_valid_phone_number")
      };
      dataUserErrors.value = [];
      Object.entries(messages).forEach(([key, message]) => {
        const errorKey = key === "user.phone" ? "user" : key;
        const fieldErrors = errors[errorKey] || [];
        if (fieldErrors.length) {
          dataUserErrors.value.push({
            key,
            message
          });
        }
      });
    };
    const updateForm = async (form, showLoading = true) => {
      var _a2, _b2, _c, _d, _e;
      dataUserErrors.value = [];
      if (showLoading) {
        startLoadingForm();
      }
      let updateRes = null;
      let requestData = null;
      const userComputedObj = {
        email: userEmail.value,
        name: userName.value,
        lastname: userLastName.value,
        phone: userPhone.value
      };
      requestData = (form == null ? void 0 : form.userForm) ? {
        user: {
          ...form
        }
      } : {
        ...form,
        user: userComputedObj
      };
      requestData.comment = formattedComment.value;
      try {
        updateRes = await CheckoutApiService.updateCheckout(requestData);
        if (form.client_type && form.client_type === "unregistered") {
          if (getUser.value) {
            setUser({ ...getUser.value, ...form });
          } else {
            setUser(form);
          }
        }
      } catch (e) {
        console.error(e);
        const { data: data2 } = e.response;
        setDataUserErrors(data2.errors);
      } finally {
        if (showLoading) {
          stopLoadingForm();
        }
      }
      if (((_a2 = updateRes == null ? void 0 : updateRes.status) == null ? void 0 : _a2.value) === "success") {
        const cart = (_d = (_c = (_b2 = updateRes == null ? void 0 : updateRes.data) == null ? void 0 : _b2.value) == null ? void 0 : _c.data) == null ? void 0 : _d.cart;
        const filteredProducts = filterOutDeliveryProducts(cart.products);
        setCheckoutCart({ ...cart, products: filteredProducts });
        if (cart.delivery) {
          checkoutForm.delivery = {
            address: { ...cart.delivery.address },
            type: cart.delivery.type
          };
        }
        setEnabledDeliveries(cart.config.delivery_types);
        setEnabledPayments(cart.config.payment_types);
      }
      return ((_e = updateRes == null ? void 0 : updateRes.status) == null ? void 0 : _e.value) === "success";
    };
    const formConfig = ref({});
    const updatePaymentState = (paymentForm) => {
      checkoutForm.payment_type = paymentForm.payment_type;
      checkoutForm.selectCredit = paymentForm.selectCredit;
      checkoutForm.credit = paymentForm.credit;
      formConfig.value = paymentForm.formConfig;
    };
    const submitValidation = useVuelidate();
    const scrollToErrorField = () => {
      var _a2;
      const erorrField = (_a2 = checkoutContainer.value) == null ? void 0 : _a2.querySelector(".error");
      useScrollTo(erorrField == null ? void 0 : erorrField.offsetTop);
    };
    const validateForm = () => {
      var _a2;
      (_a2 = paymentRef.value) == null ? void 0 : _a2.validateDefaultForm();
      submitValidation.value.$reset();
      submitValidation.value.$touch();
      if (submitValidation.value.$invalid) {
        setTimeout(() => {
          scrollToErrorField();
        });
        return false;
      }
      return true;
    };
    const handleError = (error) => {
      var _a2, _b2;
      const { errors, message } = ((_a2 = error == null ? void 0 : error.response) == null ? void 0 : _a2.data) || {};
      const isValidationError = ((_b2 = error == null ? void 0 : error.response) == null ? void 0 : _b2.status) === 422;
      if (isValidationError) {
        setDataUserErrors(errors);
      }
      const shouldShowDialog = isValidationError ? !dataUserErrors.value.length : true;
      if (shouldShowDialog) {
        openErrorDialog(true, message || t("something_went_wrong"));
      }
    };
    const submitCheckout = async () => {
      var _a3, _b3, _c2, _d2;
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      const clientData = getClientData();
      const isValidForm = validateForm();
      if (!isValidForm) {
        return;
      }
      const sortAdditionalFormFields = ((_a2 = paymentRef.value) == null ? void 0 : _a2.createSortAdditionalFields()) || {};
      if (!isFormSubmitted.value) {
        if (isInstallmentPaymentType.value) {
          const isValid = paymentRef.value.validateInstallmentForm();
          if (!isValid) {
            return;
          }
        }
        if (checkoutForm.payment_type.main_type === "credit" && !checkoutForm.credit) {
          return;
        }
        startLoadingForm();
        startFormSubmitted();
        try {
          const baseSavedData = getBaseData();
          const paymentType = checkoutForm.payment_type.type === "credit" ? {
            ...checkoutForm.selectCredit,
            form: {
              ...formConfig.value,
              values: sortAdditionalFormFields
            }
          } : {
            ...checkoutForm.payment_type,
            form: {
              ...formConfig.value,
              values: sortAdditionalFormFields
            }
          };
          let requestObj = {
            payment: {
              ...paymentType
            },
            marks: {
              is_call_back: typeof (baseSavedData == null ? void 0 : baseSavedData.isNoCallback) === "boolean" ? !baseSavedData.isNoCallback : true,
              is_trade_in: !!(checkoutForm == null ? void 0 : checkoutForm.is_trade_in)
            },
            comment: formattedComment.value,
            delivery: checkoutForm.delivery,
            user: {
              email: (_a3 = userEmail.value) != null ? _a3 : clientData == null ? void 0 : clientData.email,
              name: (_b3 = userName.value) != null ? _b3 : clientData == null ? void 0 : clientData.name,
              lastname: (_c2 = userLastName.value) != null ? _c2 : clientData == null ? void 0 : clientData.lastname,
              phone: (_d2 = userPhone.value) != null ? _d2 : clientData == null ? void 0 : clientData.phone
            },
            ...checkoutForm.userCart
          };
          if (((_b2 = requestObj == null ? void 0 : requestObj.marks) == null ? void 0 : _b2.is_trade_in) && ((_c = userDevices.value) == null ? void 0 : _c.length)) {
            const additionalData = {
              additional_data: {
                trade_in_sets: userDevices.value.map((el) => {
                  const { exchangeProduct, ...result } = el;
                  result.grade.price = result.totalPriceWithTopUp - result.totalPriceTopUp;
                  return result;
                })
              }
            };
            requestObj = { ...requestObj, ...additionalData };
          }
          const infoAboutAddress = deliveryRef.value.takeInfoAboutAddress();
          const infoAboutRecipient = deliveryRef.value.takeInfoAboutRecipient();
          const locationInfo = deliveryRef.value.getLocationInfo();
          requestObj.delivery.address = infoAboutAddress ? { ...locationInfo, ...infoAboutAddress } : { ...locationInfo };
          requestObj.delivery.recipient = !infoAboutRecipient || (infoAboutRecipient == null ? void 0 : infoAboutRecipient.id) === null ? null : { ...infoAboutRecipient };
          if ((_d = requestObj.delivery.type) == null ? void 0 : _d.includes("pickup")) {
            requestObj.delivery.address.floor = null;
            requestObj.delivery.address.street = null;
            requestObj.delivery.address.zip_code = null;
            requestObj.delivery.address.apartment_number = null;
            requestObj.delivery.address.house_number = null;
          }
          if (!requestObj.delivery.type || !requestObj.delivery.shop_address_id) {
            const info = deliveryRef.value.getDeliveryValue();
            requestObj.delivery.type = info.type;
            requestObj.delivery.shop_address_id = info == null ? void 0 : info.shop_address_id;
          }
          await updateForm(requestObj, false);
          const submitRes = await CheckoutApiService.submitCheckout(requestObj);
          const createArrayByPrimary = (updatedArray, key) => {
            let array = [...updatedArray];
            const { id, ...essence } = requestObj.delivery[key] || {};
            if (!id) {
              array = array.map((item) => ({ ...item, is_primary: false }));
              array.push({
                ...essence,
                is_primary: true
              });
            } else {
              array = hasPrimaryStatusChanged(array, id);
            }
            return array;
          };
          let updatedRecipients = ((_e = getUser.value) == null ? void 0 : _e.recipients) || [];
          let updatedAddresses = ((_f = getUser.value) == null ? void 0 : _f.addresses) || [];
          if (isAuthUser.value) {
            if (requestObj.delivery.recipient) {
              updatedRecipients = createArrayByPrimary(
                updatedRecipients,
                "recipient"
              );
            }
            if (!((_g = requestObj.delivery.type) == null ? void 0 : _g.includes("pickup"))) {
              updatedAddresses = createArrayByPrimary(updatedAddresses, "address");
            }
            const updatedData = {
              name: clientData == null ? void 0 : clientData.name,
              lastname: clientData == null ? void 0 : clientData.lastname,
              recipients: updatedRecipients,
              addresses: updatedAddresses
            };
            const preparedData = {
              name: getUser.value.name,
              lastname: getUser.value.lastname,
              recipients: ((_h = getUser.value) == null ? void 0 : _h.recipients) || [],
              addresses: ((_i = getUser.value) == null ? void 0 : _i.addresses) || []
            };
            const updateData = {};
            Object.keys(preparedData).forEach((key) => {
              const preparedValue = preparedData[key];
              const updatedValue = updatedData[key];
              const isArray = Array.isArray(preparedValue);
              if (isArray && (preparedValue.length !== updatedValue.length || updatePrimaryStatus(preparedValue, updatedValue)) || !isArray && preparedValue !== updatedValue) {
                updateData[key] = updatedValue;
              }
            });
            if (Object.keys(updateData).length) {
              AccountApiService.patchProfile(updateData).then((response) => {
                var _a32, _b32;
                if ((_a32 = response == null ? void 0 : response.data) == null ? void 0 : _a32.data) {
                  setUser((_b32 = response == null ? void 0 : response.data) == null ? void 0 : _b32.data);
                }
              }).catch((error) => {
                patchErrors.value = [error.response.data.message];
              });
            }
          }
          submitStatus.value = submitRes.status.value;
          paymentStatus.value = ((_m = (_l = (_k = (_j = submitRes == null ? void 0 : submitRes.data) == null ? void 0 : _j.value) == null ? void 0 : _k.data) == null ? void 0 : _l.payment) == null ? void 0 : _m.status) || "";
          if (submitRes.status.value === "success") {
            const submitData = (_o = (_n = submitRes == null ? void 0 : submitRes.data) == null ? void 0 : _n.value) == null ? void 0 : _o.data;
            const contactID = (_r = (_q = (_p = submitData == null ? void 0 : submitData.checkout) == null ? void 0 : _p.order) == null ? void 0 : _q.user) == null ? void 0 : _r.crm_id;
            redirectUrl2.value = getRedirectUrl(
              submitData == null ? void 0 : submitData.checkout.id,
              contactID,
              submitData.payment
            );
            useStorage("checkout", submitData.checkout);
            if (submitData.payment && submitData.payment.status === "success") {
              const cartProductsMap = new Map(
                getCart.value.products.map((product) => [product.id, product])
              );
              const analyticsProducts = (_s = getCartProducts.value) == null ? void 0 : _s.map((product) => {
                var _a4;
                var _a32;
                return {
                  ...product,
                  quantity: (_a4 = (_a32 = cartProductsMap.get(product.id)) == null ? void 0 : _a32.ordered_quantity) != null ? _a4 : 1
                };
              });
              pushGtmEvent("checkoutGA", analyticsProducts, {
                orderId: submitData.checkout.order.crm_id,
                deliveryType: getDeliveryType.value,
                paymentType: checkoutForm.payment_type.type,
                phone: (_v = (_u = (_t = submitData == null ? void 0 : submitData.checkout) == null ? void 0 : _t.order) == null ? void 0 : _u.user) == null ? void 0 : _v.phone,
                email: (_y = (_x = (_w = submitData == null ? void 0 : submitData.checkout) == null ? void 0 : _w.order) == null ? void 0 : _x.user) == null ? void 0 : _y.email,
                name: (_B = (_A = (_z = submitData == null ? void 0 : submitData.checkout) == null ? void 0 : _z.order) == null ? void 0 : _A.user) == null ? void 0 : _B.name
              });
              initCart();
            }
          }
          if (requestObj.delivery.type === "international_agreed" && submitRes.status.value === "success") {
            isInformationModalOpened.value = true;
            modalData.title = t("quote_succes_title");
            modalData.text = t("should_be_agreed");
            modalData.buttonText = t("quote_succes_text_btn");
            modalData.redirectUrl = "/program-partners";
            modalData.actionAfterRedirect = () => initCart();
            modalData.shouldBeAgreed = true;
          }
        } catch (error) {
          handleError(error);
          console.error(error);
        } finally {
          saveSearchData(null);
          saveClientData(null);
          savePaymentData(null);
          saveDeliveryData(null);
          saveBaseData(null);
          isFormSubmitted.value = false;
          stopLoadingForm();
          stopFormSubmitted();
          if (submitStatus.value === "success" && checkoutForm.delivery.type !== "international_agreed" && paymentStatus.value !== "error") {
            const queryParams = (url) => {
              var _a32, _b32, _c22;
              return (_c22 = (_b32 = (_a32 = url == null ? void 0 : url.split("?")) == null ? void 0 : _a32[1]) == null ? void 0 : _b32.split("&")) == null ? void 0 : _c22.reduce((acc, curr) => {
                const [key, value] = curr.split("=");
                acc[key] = value;
                return acc;
              }, {});
            };
            router.push(
              app2.$localeRoute({
                path: redirectUrl2.value,
                query: queryParams(redirectUrl2.value)
              })
            );
          }
          if (submitStatus.value === "success" && paymentStatus.value === "error") {
            isInformationModalOpened.value = true;
            modalData.title = t("payment_service_error_title");
            modalData.text = t("payment_service_error_text");
            modalData.buttonText = t("payment_service_error_btn");
            modalData.redirectUrl = "";
            modalData.actionAfterRedirect = null;
            modalData.shouldBeAgreed = false;
          }
        }
      }
    };
    const updateDeliveryData = async (deliveryForm, isUpdateDeliveryPrice = false) => {
      var _a2, _b2, _c;
      if (deliveryForm) {
        try {
          let data2 = { ...deliveryForm };
          if (data2.delivery.type.indexOf("pickup") !== -1) {
            data2.delivery.address.street = null;
            data2.delivery.address.apartment_number = null;
            data2.delivery.address.house_number = null;
            data2.delivery.address.zip_code = null;
          }
          const isSuccessUpdate = await updateForm({
            ...data2,
            ...checkoutForm.userCart,
            payment_type: null,
            comment: checkoutForm.comment
          });
          if (checkoutForm.payment_type === null) {
            processPayment((_a2 = currentCart.value) == null ? void 0 : _a2.config.payment_types);
          }
          if (isSuccessUpdate && !isUpdateDeliveryPrice) {
            if (((_b2 = deliveryForm == null ? void 0 : deliveryForm.delivery) == null ? void 0 : _b2.type) === "international_agreed") {
              processPayment((_c = currentCart.value) == null ? void 0 : _c.config.payment_types);
              submitCheckout();
              isInformationModalOpened.value = true;
              modalData.title = t("quote_succes_title");
              modalData.text = t("should_be_agreed");
              modalData.buttonText = t("quote_succes_text_btn");
              modalData.redirectUrl = "/program-partners";
              modalData.actionAfterRedirect = null;
              modalData.shouldBeAgreed = true;
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    const changeDeliveryPrice = async (form) => {
      updateDeliveryData(form, true);
    };
    watch(
      getCart,
      (cart, oldValue) => {
        var _a2, _b2, _c, _d, _e, _f;
        if ((cart == null ? void 0 : cart.products.length) === 0) {
          router.push(
            app2.$localeRoute({
              path: "/cart"
            })
          );
        }
        if ((cart == null ? void 0 : cart.products.toString()) !== (oldValue == null ? void 0 : oldValue.products.toString())) {
          fetchCartProducts();
        }
        if (((_b2 = (_a2 = getCart == null ? void 0 : getCart.value) == null ? void 0 : _a2.config) == null ? void 0 : _b2.delivery_types) && !((_c = deliveryConfig.value) == null ? void 0 : _c.length)) {
          setEnabledDeliveries([...getCart.value.config.delivery_types || []]);
        }
        if (((_e = (_d = getCart == null ? void 0 : getCart.value) == null ? void 0 : _d.config) == null ? void 0 : _e.payment_types) && !((_f = paymentConfig.value) == null ? void 0 : _f.length)) {
          setEnabledPayments([...getCart.value.config.payment_types || []]);
        }
      },
      { immediate: true, deep: true }
    );
    [__temp, __restore] = withAsyncContext(() => initCart()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => nextTick()), await __temp, __restore();
    if ((_a = getCartProducts.value) == null ? void 0 : _a.length) {
      const productsMap = new Map(
        (_b = currentCart == null ? void 0 : currentCart.value) == null ? void 0 : _b.products.map((product) => [product.crm_id, product])
      );
      const productsForGtm = getCartProducts.value.map((product) => {
        const matchingProduct = productsMap.get(product.crm_id);
        return { ...product, quantity: matchingProduct == null ? void 0 : matchingProduct.available_quantity };
      });
      pushGtmEvent("loadCheckoutPageGA", productsForGtm);
    }
    provide("isTradeInProductSelected", isTradeInProductSelected);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPagePreloader = __nuxt_component_0$2;
      const _component_CheckoutProducts = __nuxt_component_3$1;
      const _component_CheckoutTradeIn = __nuxt_component_2;
      const _component_CheckoutPaymentWrapper = _sfc_main$1$1;
      const _component_CheckoutCallback = __nuxt_component_4;
      const _component_CheckoutSubmit = __nuxt_component_5;
      const _component_CheckoutFooter = __nuxt_component_4$1;
      const _component_RepeatPaymentInformationModal = _sfc_main$k;
      const _component_InformationModal = _sfc_main$g;
      _push(`<!--[-->`);
      if (unref(isLoadingComponent)) {
        _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
      } else {
        _push(`<div class="checkout-view" data-v-393ce1ff><div class="checkout-view_order-summary-mobile" data-v-393ce1ff>`);
        _push(ssrRenderComponent(_component_CheckoutProducts, {
          order: unref(currentCart),
          "is-order-summary-top": true,
          "is-open-content": false,
          "show-header": true,
          "is-trade-in": unref(checkoutForm).is_trade_in
        }, null, _parent));
        _push(`</div><div class="checkout-view_container" data-v-393ce1ff><div class="checkout-view_main" data-v-393ce1ff><div class="checkout-view_main-content" data-v-393ce1ff>`);
        _push(ssrRenderComponent(CheckoutAuth, {
          ref_key: "authRef",
          ref: authRef,
          onUpdateForm: updateForm
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$f, {
          modelValue: unref(checkoutForm).comment,
          "onUpdate:modelValue": ($event) => unref(checkoutForm).comment = $event,
          class: "checkout-view_comment"
        }, null, _parent));
        if (unref(isAuthUser) && unref(patchErrors).length) {
          _push(ssrRenderComponent(AppFormErrors, { errors: unref(patchErrors) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(isTradeInShown)) {
          _push(ssrRenderComponent(_component_CheckoutTradeIn, {
            disabled: !unref(isTradeInAble),
            "exchange-items": unref(computedExchangeProducts),
            currency: unref(currency),
            onChangeProduct: ($event) => tradeInProductForChange.value = $event,
            onChange: changedTradeIn
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(isCheckreservation) && unref(currentCart)) {
          _push(ssrRenderComponent(CheckoutDelivery, {
            ref_key: "deliveryRef",
            ref: deliveryRef,
            deliveries: unref(deliveryConfig),
            disabled: unref(isLoadingForm),
            "data-user-errors": unref(dataUserErrors),
            "current-cart": unref(currentCart),
            onChangeDeliveryPrice: changeDeliveryPrice,
            onResetUserDataError: resetUserDataErrors,
            onUpdateForm: updateForm,
            onChangeCategory: ($event) => deliveryCategory.value = $event,
            onUpdateDeliveryData: ($event) => updateDeliveryData($event, false)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_CheckoutPaymentWrapper, {
          ref_key: "paymentRef",
          ref: paymentRef,
          currency: unref(currency),
          "current-cart": unref(currentCart),
          loading: unref(isLoadingForm),
          "payment-config": unref(paymentConfig),
          onUpdate: updateForm,
          onUpdateState: updatePaymentState
        }, null, _parent));
        _push(ssrRenderComponent(_component_CheckoutCallback, {
          value: unref(checkoutForm).is_call_back,
          name: "checkout-callback",
          disabled: unref(isLoadingForm),
          onUpdateCallback: ($event) => unref(checkoutForm).is_call_back = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_CheckoutSubmit, {
          disabled: unref(isLoadingForm),
          loading: unref(isFormSubmitted),
          "show-on-mobile": false,
          onSubmit: ($event) => submitCheckout()
        }, null, _parent));
        _push(`</div></div><div class="checkout-view_order-summary" data-v-393ce1ff><div class="checkout-view_order-summary-content" data-v-393ce1ff>`);
        _push(ssrRenderComponent(_component_CheckoutProducts, {
          order: unref(currentCart),
          "show-header": true,
          "is-trade-in": unref(checkoutForm).is_trade_in
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_CheckoutSubmit, {
          disabled: unref(isLoadingForm),
          loading: unref(isFormSubmitted),
          "show-on-mobile": true,
          onSubmit: ($event) => submitCheckout()
        }, null, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_CheckoutFooter, null, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_RepeatPaymentInformationModal, {
        "is-modal-opened": unref(isRepeatPaymentModalShown),
        "button-text": unref(modalData).buttonText,
        text: unref(modalData).text,
        title: unref(modalData).title,
        onClose: ($event) => isRepeatPaymentModalShown.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_InformationModal, {
        opened: unref(isInformationModalOpened),
        title: unref(modalData).title,
        text: unref(modalData).text,
        "button-text": unref(modalData).buttonText,
        "redirect-url": unref(modalData).redirectUrl,
        onActionAfterRedirect: unref(modalData).actionAfterRedirect,
        onClose: ($event) => isInformationModalOpened.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-view/checkout-view.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-393ce1ff"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getLocale } = useSaveCheckout();
    getLocale();
    const { locale: currentLocale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckoutView = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CheckoutView, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C7cmdMAL.mjs.map
