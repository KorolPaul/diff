import { _ as __nuxt_component_0$1 } from './ui-container-DmK1AhQu.mjs';
import { mergeProps, withCtx, unref, createVNode, ref, computed, provide, createTextVNode, toDisplayString, isRef, createBlock, createCommentVNode, openBlock, Fragment, renderList, defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, l as useGtm, t as useTradeInStore, a4 as modalTypes, I as gridBreakpoints, r as useNuxtApp, k as __nuxt_component_6 } from './server.mjs';
import { a as __nuxt_component_3, T as TradeInDeviceGrade, b as TradeInCatalogDeviceView, c as TradeInCatalogDevice, d as TradeInThankYouDialog, e as _sfc_main$7$1, f as __nuxt_component_0$2, g as __nuxt_component_2 } from './TradeInDeviceGrade-Dga3A_UC.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_1 } from './price-text-DgwtCsuL.mjs';
import { _ as _sfc_main$a } from './modal-light-Cz0YAIgT.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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
import './Form-ZGQdgBok.mjs';
import './policy-checkbox-GL5-7Kb3.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import './UiSelect-BqVOhDGy.mjs';
import './currency-text-DJsP4_8P.mjs';
import './ui-preloader-C4Bi7ENY.mjs';
import './useProductPriceFormatter-C4fzfSKC.mjs';
import './UiImg-CNj4xvxi.mjs';
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import './checkout-product-price-CaEg0Gsb.mjs';
import './useCurrencyMark-7LtpyYD6.mjs';
import './TextInput-HaUa076w.mjs';
import './useFormUtils-HyQgFuda.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
import '@vuelidate/core';
import './UiRadio-hn8C_nHF.mjs';
import 'sanitize-html';

const _sfc_main$9 = {
  name: "UiStep",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["ui-step", { active: $props.active }]
  }, _attrs))} data-v-cf10242c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiStep/ui-step.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-cf10242c"]]);
const _sfc_main$8 = defineComponent({
  name: "TradeInStep"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-step" }, _attrs))} data-v-5ea53775>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInStep.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TradeInStep = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-5ea53775"]]);
const _sfc_main$7 = defineComponent({
  name: "TradeInStepTitle"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-9375c6ec>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInStepTitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TradeInStepTitle = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9375c6ec"]]);
const _sfc_main$6 = defineComponent({
  name: "TradeInStepDescription"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-body-3 description" }, _attrs))} data-v-32a56694>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInStepDescription.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TradeInStepDescription = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-32a56694"]]);
const _sfc_main$5 = {
  __name: "TradeInAddBtn",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "tertiary"
    },
    hiddenIcon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      const _component_Icon = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_Button, mergeProps({ ..._ctx.$attrs }, {
        size: "s",
        class: "trade-in-add-btn",
        variant: __props.variant,
        "min-width": 200,
        onClick: ($event) => _ctx.$emit("click")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!__props.hiddenIcon) {
              _push2(ssrRenderComponent(_component_Icon, {
                icon: "plus",
                width: "16px",
                height: "16px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="label" data-v-e7ed0366${_scopeId}>`);
            if (!__props.text) {
              _push2(`<!--[-->${ssrInterpolate(_ctx.$t("trade_in_add_device"))}<!--]-->`);
            } else {
              _push2(`<!--[-->${ssrInterpolate(__props.text)}<!--]-->`);
            }
            _push2(`</span>`);
          } else {
            return [
              !__props.hiddenIcon ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                icon: "plus",
                width: "16px",
                height: "16px"
              })) : createCommentVNode("", true),
              createVNode("span", { class: "label" }, [
                !__props.text ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.$t("trade_in_add_device")), 1)
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(__props.text), 1)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInAddBtn.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TradeInAddBtn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e7ed0366"]]);
const _sfc_main$4 = {
  __name: "TradeInUserDeviceView",
  __ssrInlineRender: true,
  props: {
    device: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const exchangeDevice = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = props.device) == null ? void 0 : _a.exchangeProduct) != null ? _a2 : null;
    });
    const option = computed(
      () => {
        var _a2;
        var _a, _b, _c, _d, _e;
        return (_a2 = (_e = (_d = (_c = (_b = (_a = props.device) == null ? void 0 : _a.initialGrade) == null ? void 0 : _b.data) == null ? void 0 : _c.buyoutTopUp) == null ? void 0 : _d.specialGrading[0]) == null ? void 0 : _e.options[0]) != null ? _a2 : null;
      }
    );
    const from = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = option.value) == null ? void 0 : _a.validFrom) != null ? _a2 : "";
    });
    const till = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = option.value) == null ? void 0 : _a.validTill) != null ? _a2 : "";
    });
    const computedDeviceName = computed(() => {
      var _a;
      if (!((_a = props.device) == null ? void 0 : _a.device)) {
        return "";
      }
      const { subcategory, storage, color } = props.device.device;
      return `${subcategory}, ${storage}, ${color}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiMoreActions = __nuxt_component_0$2;
      const _component_PriceText = __nuxt_component_1;
      const _component_TradeInPromoPeriod = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade-in-user-device-view" }, _attrs))} data-v-cd5bd184><div class="trade-in-user-device-view_item-wrapper" data-v-cd5bd184><div class="trade-in-user-device-view_item-info" data-v-cd5bd184><div class="trade-in-user-device-view_title" data-v-cd5bd184>${ssrInterpolate(_ctx.$t("trade_in_exchange_device"))}</div><span class="trade-in-user-device-view_item-name" data-v-cd5bd184>${ssrInterpolate(unref(computedDeviceName))}</span></div>`);
      _push(ssrRenderComponent(_component_UiMoreActions, {
        options: [
          { label: _ctx.$t("edit"), onClick: () => _ctx.$emit("change") },
          { label: _ctx.$t("delete"), onClick: () => _ctx.$emit("remove") }
        ]
      }, null, _parent));
      _push(`</div>`);
      if (unref(exchangeDevice)) {
        _push(`<div class="trade-in-user-device-view_item-wrapper" data-v-cd5bd184><div class="trade-in-user-device-view_item-info" data-v-cd5bd184><div class="trade-in-user-device-view_title" data-v-cd5bd184>${ssrInterpolate(_ctx.$t("trade_in_wanted_device"))}</div><span class="trade-in-user-device-view_item-name" data-v-cd5bd184>${ssrInterpolate(unref(exchangeDevice).name)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "trade-in-user-device-view_top-up-container__active": __props.device.isTopUpStatus
      }, "trade-in-user-device-view_top-up-container"])}" data-v-cd5bd184>`);
      if (__props.device.isTopUpStatus && unref(exchangeDevice)) {
        _push(`<div class="trade-in-user-device-view_title" data-v-cd5bd184>${ssrInterpolate(_ctx.$t("trade_in_top_up_exchange_device", { device: unref(exchangeDevice).name }))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PriceText, {
        price: __props.device.totalPriceWithTopUp,
        currency: __props.device.grade.currency
      }, null, _parent));
      _push(`<div class="trade-in-user-device-view_price-hint" data-v-cd5bd184> * ${ssrInterpolate(_ctx.$t("preliminary_benefit"))}</div><div class="trade-in-user-device-view_separator" data-v-cd5bd184></div>`);
      if (unref(from) && unref(till) && __props.device.isTopUpStatus) {
        _push(`<div class="trade-in-user-device-view_period" data-v-cd5bd184>`);
        _push(ssrRenderComponent(_component_TradeInPromoPeriod, {
          from: unref(from),
          till: unref(till)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/ui/TradeInUserDeviceView.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TradeInUserDeviceView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cd5bd184"]]);
const _sfc_main$3 = {
  __name: "TradeInUserDeviceStep",
  __ssrInlineRender: true,
  props: {
    stepNumber: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const { pushGtmEvent } = useGtm();
    const { userDevices, removeUserDeviceByIndex, resetStore, catalogDevices } = useTradeInStore();
    const isShowDeviceGrade = ref(false);
    const initialUserDevice = ref({});
    const tradeInUserDeviceStepKey = ref(0);
    const tradeInModalKeys = ref({
      header: "trade-in-header-select",
      footer: "trade-in-footer-select"
    });
    const showDeviceGradeDialog = (userDevice = {}) => {
      pushGtmEvent("tradeInSelectOld");
      initialUserDevice.value = userDevice;
      isShowDeviceGrade.value = true;
    };
    const computedCatalogDevices = computed(() => {
      const userDeviceSkus = new Set(
        userDevices.value.map((device) => {
          var _a;
          return (_a = device.exchangeProduct) == null ? void 0 : _a.sku;
        })
      );
      return catalogDevices.value.filter((el) => {
        var _a;
        return !userDeviceSkus.has((_a = el == null ? void 0 : el.product) == null ? void 0 : _a.sku);
      }).map((el) => el.product);
    });
    const getUserDeviceKey = (index) => {
      var _a;
      if (typeof index !== "number") {
        return "";
      }
      const userDevice = userDevices.value[index];
      if (!userDevice) {
        return "";
      }
      return `${index}_${(userDevice == null ? void 0 : userDevice.exchange_device_sku) ? userDevice.exchange_device_sku : ""}_${((_a = userDevice == null ? void 0 : userDevice.exchangeProduct) == null ? void 0 : _a.sku) ? userDevice.exchangeProduct.sku : ""}`;
    };
    provide("modalKeys", tradeInModalKeys);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiStep = __nuxt_component_0;
      const _component_TradeInModal = __nuxt_component_3;
      _push(ssrRenderComponent(TradeInStep, mergeProps({ class: "trade-in-user-device-step" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trade-in-user-device-step_title-wrapper"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiStep, {
              active: !!unref(userDevices).length
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.stepNumber)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TradeInStepTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trade_in_old_device_title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_old_device_title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(userDevices).length === 0) {
              _push2(ssrRenderComponent(TradeInStepDescription, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("trade_in_old_device_description"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("trade_in_old_device_description")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="user-devices"${_scopeId}><!--[-->`);
            ssrRenderList(unref(userDevices), (userDevice, index) => {
              _push2(ssrRenderComponent(TradeInUserDeviceView, {
                key: `${getUserDeviceKey(index)}-${unref(tradeInUserDeviceStepKey)}`,
                device: userDevice,
                onChange: ($event) => showDeviceGradeDialog(userDevice),
                onRemove: ($event) => unref(removeUserDeviceByIndex)(index)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(TradeInAddBtn, {
              secondary: "",
              onClick: showDeviceGradeDialog
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TradeInModal, {
              modelValue: unref(isShowDeviceGrade),
              "onUpdate:modelValue": ($event) => isRef(isShowDeviceGrade) ? isShowDeviceGrade.value = $event : null,
              "max-width": 604,
              "modal-class": "trade-in-user-device-step_grade"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isShowDeviceGrade)) {
                    _push3(ssrRenderComponent(unref(TradeInDeviceGrade), {
                      key: unref(isShowDeviceGrade),
                      "exchange-items": unref(computedCatalogDevices),
                      "initial-user-device": unref(initialUserDevice),
                      onClose: ($event) => isShowDeviceGrade.value = false
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(isShowDeviceGrade) ? (openBlock(), createBlock(unref(TradeInDeviceGrade), {
                      key: unref(isShowDeviceGrade),
                      "exchange-items": unref(computedCatalogDevices),
                      "initial-user-device": unref(initialUserDevice),
                      onClose: ($event) => isShowDeviceGrade.value = false
                    }, null, 8, ["exchange-items", "initial-user-device", "onClose"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "trade-in-user-device-step_title-wrapper" }, [
                createVNode(_component_UiStep, {
                  active: !!unref(userDevices).length
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ]),
                  _: 1
                }, 8, ["active"]),
                createVNode(TradeInStepTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_old_device_title")), 1)
                  ]),
                  _: 1
                })
              ]),
              unref(userDevices).length === 0 ? (openBlock(), createBlock(TradeInStepDescription, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("trade_in_old_device_description")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "user-devices" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(userDevices), (userDevice, index) => {
                  return openBlock(), createBlock(TradeInUserDeviceView, {
                    key: `${getUserDeviceKey(index)}-${unref(tradeInUserDeviceStepKey)}`,
                    device: userDevice,
                    onChange: ($event) => showDeviceGradeDialog(userDevice),
                    onRemove: ($event) => unref(removeUserDeviceByIndex)(index)
                  }, null, 8, ["device", "onChange", "onRemove"]);
                }), 128))
              ]),
              createVNode(TradeInAddBtn, {
                secondary: "",
                onClick: showDeviceGradeDialog
              }),
              createVNode(_component_TradeInModal, {
                modelValue: unref(isShowDeviceGrade),
                "onUpdate:modelValue": ($event) => isRef(isShowDeviceGrade) ? isShowDeviceGrade.value = $event : null,
                "max-width": 604,
                "modal-class": "trade-in-user-device-step_grade"
              }, {
                default: withCtx(() => [
                  unref(isShowDeviceGrade) ? (openBlock(), createBlock(unref(TradeInDeviceGrade), {
                    key: unref(isShowDeviceGrade),
                    "exchange-items": unref(computedCatalogDevices),
                    "initial-user-device": unref(initialUserDevice),
                    onClose: ($event) => isShowDeviceGrade.value = false
                  }, null, 8, ["exchange-items", "initial-user-device", "onClose"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInUserDeviceStep/TradeInUserDeviceStep.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TradeInCatalogDeviceStep",
  __ssrInlineRender: true,
  props: {
    stepNumber: {
      type: Number,
      default: 2
    }
  },
  setup(__props) {
    const { pushGtmEvent } = useGtm();
    const isShowCatalog = ref(false);
    const initialForm = ref({});
    const initialProduct = ref({});
    const initialId = ref("");
    const initialIndex = ref(null);
    const tradeInQuestionModalKeys = ref({
      header: "trade-in-catalog-modal-header",
      footer: "trade-in-catalog-modal-footer"
    });
    const {
      catalogDevices,
      removeCatalogDeviceByIndex,
      removeCatalogDeviceFromLC
    } = useTradeInStore();
    const changeCatalogDevice = ({ id, form, product }, index) => {
      initialId.value = id;
      initialForm.value = form;
      initialProduct.value = product;
      initialIndex.value = index;
      isShowCatalog.value = true;
    };
    const showCatalogDevices = () => {
      pushGtmEvent("tradeInSelectNew");
      initialId.value = "";
      initialForm.value = {};
      initialProduct.value = {};
      initialIndex.value = null;
      isShowCatalog.value = true;
    };
    provide("modalKeys", tradeInQuestionModalKeys);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiStep = __nuxt_component_0;
      const _component_TradeInModal = __nuxt_component_3;
      _push(ssrRenderComponent(unref(TradeInStep), mergeProps({ class: "trade-in-catalog-device-step" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trade-in-catalog-device-step_title-wrapper" data-v-1af8a5dd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiStep, {
              active: !!unref(catalogDevices).length
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.stepNumber)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TradeInStepTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trade_in_new_device_title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_new_device_title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(catalogDevices).length === 0) {
              _push2(ssrRenderComponent(TradeInStepDescription, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("trade_in_new_device_description"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("trade_in_new_device_description")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="trade-in-catalog-device-step_devices" data-v-1af8a5dd${_scopeId}><!--[-->`);
            ssrRenderList(unref(catalogDevices), (device, index) => {
              _push2(ssrRenderComponent(TradeInCatalogDeviceView, {
                key: index,
                product: device.product,
                onChange: ($event) => changeCatalogDevice(device, index),
                onRemove: ($event) => {
                  unref(removeCatalogDeviceByIndex)(index);
                  unref(removeCatalogDeviceFromLC)(device);
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(TradeInAddBtn, {
              secondary: "",
              onClick: showCatalogDevices
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TradeInModal, {
              modelValue: unref(isShowCatalog),
              "onUpdate:modelValue": ($event) => isRef(isShowCatalog) ? isShowCatalog.value = $event : null,
              "max-width": 604,
              "modal-class": "trade-in-catalog-device-step_dialog",
              "close-size": "s",
              fullscreen: {
                breakpoint: unref(gridBreakpoints).md,
                default: null,
                type: unref(modalTypes).fullscreen
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TradeInCatalogDevice, {
                    key: unref(isShowCatalog),
                    "initial-id": unref(initialId),
                    "initial-form": unref(initialForm),
                    "initial-index": unref(initialIndex),
                    "initial-product": unref(initialProduct),
                    "vertical-padding": "",
                    onClose: ($event) => isShowCatalog.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(TradeInCatalogDevice, {
                      key: unref(isShowCatalog),
                      "initial-id": unref(initialId),
                      "initial-form": unref(initialForm),
                      "initial-index": unref(initialIndex),
                      "initial-product": unref(initialProduct),
                      "vertical-padding": "",
                      onClose: ($event) => isShowCatalog.value = false
                    }, null, 8, ["initial-id", "initial-form", "initial-index", "initial-product", "onClose"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "trade-in-catalog-device-step_title-wrapper" }, [
                createVNode(_component_UiStep, {
                  active: !!unref(catalogDevices).length
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ]),
                  _: 1
                }, 8, ["active"]),
                createVNode(TradeInStepTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_new_device_title")), 1)
                  ]),
                  _: 1
                })
              ]),
              unref(catalogDevices).length === 0 ? (openBlock(), createBlock(TradeInStepDescription, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("trade_in_new_device_description")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "trade-in-catalog-device-step_devices" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(catalogDevices), (device, index) => {
                  return openBlock(), createBlock(TradeInCatalogDeviceView, {
                    key: index,
                    product: device.product,
                    onChange: ($event) => changeCatalogDevice(device, index),
                    onRemove: ($event) => {
                      unref(removeCatalogDeviceByIndex)(index);
                      unref(removeCatalogDeviceFromLC)(device);
                    }
                  }, null, 8, ["product", "onChange", "onRemove"]);
                }), 128))
              ]),
              createVNode(TradeInAddBtn, {
                secondary: "",
                onClick: showCatalogDevices
              }),
              createVNode(_component_TradeInModal, {
                modelValue: unref(isShowCatalog),
                "onUpdate:modelValue": ($event) => isRef(isShowCatalog) ? isShowCatalog.value = $event : null,
                "max-width": 604,
                "modal-class": "trade-in-catalog-device-step_dialog",
                "close-size": "s",
                fullscreen: {
                  breakpoint: unref(gridBreakpoints).md,
                  default: null,
                  type: unref(modalTypes).fullscreen
                }
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(TradeInCatalogDevice, {
                    key: unref(isShowCatalog),
                    "initial-id": unref(initialId),
                    "initial-form": unref(initialForm),
                    "initial-index": unref(initialIndex),
                    "initial-product": unref(initialProduct),
                    "vertical-padding": "",
                    onClose: ($event) => isShowCatalog.value = false
                  }, null, 8, ["initial-id", "initial-form", "initial-index", "initial-product", "onClose"]))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "fullscreen"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInCatalogDeviceStep/TradeInCatalogDeviceStep.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TradeInCatalogDeviceStep = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1af8a5dd"]]);
const _sfc_main$1 = {
  __name: "TradeInPaymentStep",
  __ssrInlineRender: true,
  props: {
    stepNumber: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const { pushGtmEvent } = useGtm();
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const { getSanitizeHtml } = useSanitize();
    const formKey = ref(1);
    const tradeInPaymentModalKeys = ref({
      header: "trade-in-payment-modal-header",
      footer: "trade-in-payment-modal-footer"
    });
    const { userDevices, catalogDevices, resetStore, resetLC } = useTradeInStore();
    const isShowInfoDialog = ref(false);
    const isShowTradeInForm = ref(false);
    const tradeInPaymentMessage = computed(
      () => getSanitizeHtml(i18n.t("trade_in_payment_message"))
    );
    const isProductWithoutPriceFound = computed(
      () => catalogDevices.value.length > 0 && catalogDevices.value.find(
        (el) => {
          var _a, _b;
          return !((_a = el.product) == null ? void 0 : _a.final_price) && !((_b = el.product) == null ? void 0 : _b.price);
        }
      )
    );
    const isShowCalculation = computed(
      () => userDevices.value.length > 0 && catalogDevices.value.length > 0
    );
    const currency = computed(
      () => {
        var _a2, _b2;
        var _a, _b, _c, _d, _e, _f;
        return (_b2 = (_a2 = (_b = (_a = catalogDevices.value[0]) == null ? void 0 : _a.product) == null ? void 0 : _b.currency) != null ? _a2 : (_f = (_e = (_d = (_c = userDevices.value) == null ? void 0 : _c[0]) == null ? void 0 : _d.initialGrade) == null ? void 0 : _e.data) == null ? void 0 : _f.currency) != null ? _b2 : "";
      }
    );
    const catalogDevicesPrice = computed(() => {
      let price = 0;
      catalogDevices.value.forEach(({ product }) => {
        if (product) {
          price += product.final_price;
        }
      });
      return price;
    });
    const userDevicesPrice = computed(
      () => userDevices.value.reduce((acc, current) => {
        const price = (current == null ? void 0 : current.totalPriceWithTopUp) ? Number(current.totalPriceWithTopUp) : 0;
        return acc + price;
      }, 0) * -1
    );
    const calculateTotalPrice = (getPriceCallback) => userDevices.value.reduce((acc, current) => {
      const price = getPriceCallback(current);
      return acc + (price ? Number(price) : 0);
    }, 0);
    const getUserRealDevicesPrice = () => calculateTotalPrice(
      (device) => {
        var _a;
        return (device == null ? void 0 : device.totalPriceWithTopUp) - ((_a = device == null ? void 0 : device.grade) == null ? void 0 : _a.price);
      }
    );
    const getUserDevicesGradePrice = () => calculateTotalPrice((device) => {
      var _a;
      return (_a = device == null ? void 0 : device.grade) == null ? void 0 : _a.price;
    });
    const profitPrice = computed(() => {
      var _a;
      const profit = ((_a = catalogDevicesPrice.value) != null ? _a : 0) - (userDevicesPrice.value || 0);
      if (profit > 0) {
        return profit;
      }
      return 1;
    });
    const showThankYouDialog = () => {
      isShowInfoDialog.value = true;
      isShowTradeInForm.value = false;
      formKey.value++;
      resetStore();
      resetLC();
    };
    function handleButtonClick() {
      pushGtmEvent("tradeInCheckout");
      isShowTradeInForm.value = true;
    }
    provide("modalKeys", tradeInPaymentModalKeys);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiStep = __nuxt_component_0;
      const _component_PriceText = __nuxt_component_1;
      const _component_ModalLight = _sfc_main$a;
      const _component_TradeInModal = __nuxt_component_3;
      _push(ssrRenderComponent(unref(TradeInStep), mergeProps({ class: "trade-in-payment-step" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trade-in-payment-step_title-wrapper" data-v-c82ce1f5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiStep, { active: unref(isShowCalculation) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.stepNumber)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TradeInStepTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trade_in_payment_title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_payment_title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(isProductWithoutPriceFound)) {
              _push2(ssrRenderComponent(TradeInStepDescription, { class: "trade-in-payment-step_step-description" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a;
                  if (_push3) {
                    _push3(`<span data-v-c82ce1f5${_scopeId2}>${(_a = unref(tradeInPaymentMessage)) != null ? _a : ""}</span><span class="trade-in-payment-step_hint" data-v-c82ce1f5${_scopeId2}>${ssrInterpolate(_ctx.$t("trade_in_payment_hint"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { innerHTML: unref(tradeInPaymentMessage) }, null, 8, ["innerHTML"]),
                      createVNode("span", { class: "trade-in-payment-step_hint" }, toDisplayString(_ctx.$t("trade_in_payment_hint")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(isShowCalculation) === false) {
              _push2(ssrRenderComponent(TradeInStepDescription, { class: "trade-in-payment-step_step-description" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("trade_in_payment_description"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("trade_in_payment_description")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div data-v-c82ce1f5${_scopeId}>`);
              if (unref(catalogDevicesPrice)) {
                _push2(`<div class="trade-in-payment-step_price" data-v-c82ce1f5${_scopeId}><div class="trade-in-payment-step_price-label" data-v-c82ce1f5${_scopeId}>${ssrInterpolate(_ctx.$t("trade_in_catalog_devices_price_label"))}</div>`);
                _push2(ssrRenderComponent(_component_PriceText, {
                  price: unref(catalogDevicesPrice),
                  currency: unref(currency)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="trade-in-payment-step_price trade-in-payment-step_price__small-margin" data-v-c82ce1f5${_scopeId}><div class="label" data-v-c82ce1f5${_scopeId}>${ssrInterpolate(_ctx.$t("trade_in_profit_price_label"))}</div>`);
              _push2(ssrRenderComponent(_component_PriceText, {
                price: `-${getUserDevicesGradePrice()}`,
                currency: unref(currency)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (getUserRealDevicesPrice()) {
                _push2(`<div class="trade-in-payment-step_price" data-v-c82ce1f5${_scopeId}><div class="label" data-v-c82ce1f5${_scopeId}>${ssrInterpolate(_ctx.$t("trade_in_top_up_price_label"))}</div>`);
                _push2(ssrRenderComponent(_component_PriceText, {
                  price: `-${getUserRealDevicesPrice()}`,
                  currency: unref(currency)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="trade-in-payment-step_separator" data-v-c82ce1f5${_scopeId}></div><div class="trade-in-payment-step_price" data-v-c82ce1f5${_scopeId}><div class="trade-in-payment-step_price-label" data-v-c82ce1f5${_scopeId}>${ssrInterpolate(_ctx.$t("trade_in_total_price_label"))}</div><div class="price" data-v-c82ce1f5${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PriceText, {
                price: unref(profitPrice),
                currency: unref(currency)
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            }
            _push2(ssrRenderComponent(TradeInAddBtn, {
              variant: "primary",
              "hidden-icon": "",
              text: _ctx.$t("trade_in_order_text"),
              onClick: handleButtonClick
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ModalLight, {
              modelValue: unref(isShowInfoDialog),
              "onUpdate:modelValue": ($event) => isRef(isShowInfoDialog) ? isShowInfoDialog.value = $event : null,
              "max-width": 604,
              "full-height": "",
              onClose: ($event) => isShowInfoDialog.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TradeInThankYouDialog), {
                    onClose: ($event) => isShowInfoDialog.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TradeInThankYouDialog), {
                      onClose: ($event) => isShowInfoDialog.value = false
                    }, null, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TradeInModal, {
              modelValue: unref(isShowTradeInForm),
              "onUpdate:modelValue": ($event) => isRef(isShowTradeInForm) ? isShowTradeInForm.value = $event : null,
              "max-width": 604,
              "modal-class": "trade-in-payment-step_form",
              fullscreen: {
                breakpoint: unref(gridBreakpoints).md,
                default: null,
                type: unref(modalTypes).fullscreen
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7$1, {
                    key: unref(formKey),
                    "profit-price": unref(profitPrice),
                    "catalog-devices-price": unref(catalogDevicesPrice),
                    discount: unref(userDevicesPrice),
                    "onSubmit:success": showThankYouDialog
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(_sfc_main$7$1, {
                      key: unref(formKey),
                      "profit-price": unref(profitPrice),
                      "catalog-devices-price": unref(catalogDevicesPrice),
                      discount: unref(userDevicesPrice),
                      "onSubmit:success": showThankYouDialog
                    }, null, 8, ["profit-price", "catalog-devices-price", "discount"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "trade-in-payment-step_title-wrapper" }, [
                createVNode(_component_UiStep, { active: unref(isShowCalculation) }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.stepNumber), 1)
                  ]),
                  _: 1
                }, 8, ["active"]),
                createVNode(TradeInStepTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("trade_in_payment_title")), 1)
                  ]),
                  _: 1
                })
              ]),
              unref(isProductWithoutPriceFound) ? (openBlock(), createBlock(TradeInStepDescription, {
                key: 0,
                class: "trade-in-payment-step_step-description"
              }, {
                default: withCtx(() => [
                  createVNode("span", { innerHTML: unref(tradeInPaymentMessage) }, null, 8, ["innerHTML"]),
                  createVNode("span", { class: "trade-in-payment-step_hint" }, toDisplayString(_ctx.$t("trade_in_payment_hint")), 1)
                ]),
                _: 1
              })) : unref(isShowCalculation) === false ? (openBlock(), createBlock(TradeInStepDescription, {
                key: 1,
                class: "trade-in-payment-step_step-description"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("trade_in_payment_description")), 1)
                ]),
                _: 1
              })) : (openBlock(), createBlock("div", { key: 2 }, [
                unref(catalogDevicesPrice) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "trade-in-payment-step_price"
                }, [
                  createVNode("div", { class: "trade-in-payment-step_price-label" }, toDisplayString(_ctx.$t("trade_in_catalog_devices_price_label")), 1),
                  createVNode(_component_PriceText, {
                    price: unref(catalogDevicesPrice),
                    currency: unref(currency)
                  }, null, 8, ["price", "currency"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "trade-in-payment-step_price trade-in-payment-step_price__small-margin" }, [
                  createVNode("div", { class: "label" }, toDisplayString(_ctx.$t("trade_in_profit_price_label")), 1),
                  createVNode(_component_PriceText, {
                    price: `-${getUserDevicesGradePrice()}`,
                    currency: unref(currency)
                  }, null, 8, ["price", "currency"])
                ]),
                getUserRealDevicesPrice() ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "trade-in-payment-step_price"
                }, [
                  createVNode("div", { class: "label" }, toDisplayString(_ctx.$t("trade_in_top_up_price_label")), 1),
                  createVNode(_component_PriceText, {
                    price: `-${getUserRealDevicesPrice()}`,
                    currency: unref(currency)
                  }, null, 8, ["price", "currency"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "trade-in-payment-step_separator" }),
                createVNode("div", { class: "trade-in-payment-step_price" }, [
                  createVNode("div", { class: "trade-in-payment-step_price-label" }, toDisplayString(_ctx.$t("trade_in_total_price_label")), 1),
                  createVNode("div", { class: "price" }, [
                    createVNode(_component_PriceText, {
                      price: unref(profitPrice),
                      currency: unref(currency)
                    }, null, 8, ["price", "currency"])
                  ])
                ])
              ])),
              createVNode(TradeInAddBtn, {
                variant: "primary",
                "hidden-icon": "",
                text: _ctx.$t("trade_in_order_text"),
                onClick: handleButtonClick
              }, null, 8, ["text"]),
              createVNode(_component_ModalLight, {
                modelValue: unref(isShowInfoDialog),
                "onUpdate:modelValue": ($event) => isRef(isShowInfoDialog) ? isShowInfoDialog.value = $event : null,
                "max-width": 604,
                "full-height": "",
                onClose: ($event) => isShowInfoDialog.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(TradeInThankYouDialog), {
                    onClose: ($event) => isShowInfoDialog.value = false
                  }, null, 8, ["onClose"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onClose"]),
              createVNode(_component_TradeInModal, {
                modelValue: unref(isShowTradeInForm),
                "onUpdate:modelValue": ($event) => isRef(isShowTradeInForm) ? isShowTradeInForm.value = $event : null,
                "max-width": 604,
                "modal-class": "trade-in-payment-step_form",
                fullscreen: {
                  breakpoint: unref(gridBreakpoints).md,
                  default: null,
                  type: unref(modalTypes).fullscreen
                }
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_sfc_main$7$1, {
                    key: unref(formKey),
                    "profit-price": unref(profitPrice),
                    "catalog-devices-price": unref(catalogDevicesPrice),
                    discount: unref(userDevicesPrice),
                    "onSubmit:success": showThankYouDialog
                  }, null, 8, ["profit-price", "catalog-devices-price", "discount"]))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "fullscreen"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInPaymentStep/TradeInPaymentStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TradeInPaymentStep = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c82ce1f5"]]);
const _sfc_main = {
  __name: "TradeInCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UiContainer, mergeProps({ class: "pt-0 trade-in-calculator" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trade-in-calculator_content"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TradeInCatalogDeviceStep), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TradeInPaymentStep, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "trade-in-calculator_content" }, [
                createVNode(unref(_sfc_main$3)),
                createVNode(unref(TradeInCatalogDeviceStep)),
                createVNode(TradeInPaymentStep)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/trade-in/components/TradeInCalculator/TradeInCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TradeInCalculator-Aes_i0PZ.mjs.map
