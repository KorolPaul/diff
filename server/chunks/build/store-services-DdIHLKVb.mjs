import { _ as _export_sfc, a as useI18n, k as __nuxt_component_6, F as useUserStore } from './server.mjs';
import { _ as _sfc_main$3 } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, createCommentVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, unref, isRef, createTextVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Form-ZGQdgBok.mjs';
import { _ as __nuxt_component_2, a as _sfc_main$5 } from './policy-checkbox-GL5-7Kb3.mjs';
import { _ as _sfc_main$4 } from './TextInput-HaUa076w.mjs';
import { u as useFormUtils, _ as __nuxt_component_4 } from './useFormUtils-HyQgFuda.mjs';
import useVuelidate from '@vuelidate/core';
import { L as LeadApiService } from './LeadApiService-z9_BsZVX.mjs';

var StoreServiceStatusEnum = /* @__PURE__ */ ((StoreServiceStatusEnum2) => {
  StoreServiceStatusEnum2[StoreServiceStatusEnum2["SUCCESS"] = 0] = "SUCCESS";
  StoreServiceStatusEnum2[StoreServiceStatusEnum2["ERROR"] = 1] = "ERROR";
  return StoreServiceStatusEnum2;
})(StoreServiceStatusEnum || {});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "uiCollapsedContent",
  __ssrInlineRender: true,
  props: {
    actionText: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "collapsed-content" }, _attrs))} data-v-796fd62c><button class="collapsed-content_button" data-v-796fd62c>${ssrInterpolate(_ctx.actionText)} <span class="collapsed-content_icon-wrapper" data-v-796fd62c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "chevronIcon",
        class: ["collapsed-content_icon", { "collapsed-content_icon__rotated": unref(isOpen) }]
      }, null, _parent));
      _push(`</span></button><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" data-v-796fd62c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiCollapsedContent/uiCollapsedContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UiCollapsedContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-796fd62c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "store-service-form",
  __ssrInlineRender: true,
  emits: ["result"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useUserStore();
    const { emailPattern, defaultRequiredMessage, getErrors } = useFormUtils();
    const isLoading = ref(false);
    const scheduleAppointmentForm = reactive({
      name: "",
      phone: "",
      email: "",
      personalAgreement: false
    });
    const formRules = computed(() => ({
      name: { defaultRequiredMessage },
      phone: { defaultRequiredMessage },
      email: { emailPattern, defaultRequiredMessage },
      personalAgreement: { defaultRequiredMessage }
    }));
    const v$ = useVuelidate(formRules, scheduleAppointmentForm);
    const isSubmitDisabled = computed(
      () => !scheduleAppointmentForm.personalAgreement
    );
    const nameErrors = computed(() => getErrors(v$.value.name));
    const emailErrors = computed(() => getErrors(v$.value.email));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const personalAgreementErrors = computed(
      () => getErrors(v$.value.personalAgreement)
    );
    const onSubmit = async () => {
      try {
        isLoading.value = true;
        await LeadApiService.sendStoreData(scheduleAppointmentForm);
        emit("result", StoreServiceStatusEnum.SUCCESS);
      } catch (error) {
        console.error(error);
        emit("result", StoreServiceStatusEnum.ERROR);
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0;
      const _component_FormRow = __nuxt_component_2;
      const _component_TextInput = _sfc_main$4;
      const _component_PhoneInput = __nuxt_component_4;
      const _component_PolicyCheckbox = _sfc_main$5;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_Form, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(scheduleAppointmentForm).name,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).name = $event,
                    label: _ctx.$t("name"),
                    name: "name",
                    required: "",
                    errors: unref(nameErrors),
                    disabled: unref(isLoading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(scheduleAppointmentForm).name,
                      "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).name = $event,
                      label: _ctx.$t("name"),
                      name: "name",
                      required: "",
                      errors: unref(nameErrors),
                      disabled: unref(isLoading)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PhoneInput, {
                    modelValue: unref(scheduleAppointmentForm).phone,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).phone = $event,
                    label: _ctx.$t("phone"),
                    errors: unref(phoneErrors),
                    name: "phone",
                    required: "",
                    disabled: unref(isLoading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PhoneInput, {
                      modelValue: unref(scheduleAppointmentForm).phone,
                      "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).phone = $event,
                      label: _ctx.$t("phone"),
                      errors: unref(phoneErrors),
                      name: "phone",
                      required: "",
                      disabled: unref(isLoading)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    modelValue: unref(scheduleAppointmentForm).email,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).email = $event,
                    label: _ctx.$t("email"),
                    errors: unref(emailErrors),
                    name: "email",
                    type: "email",
                    required: "",
                    disabled: unref(isLoading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(scheduleAppointmentForm).email,
                      "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).email = $event,
                      label: _ctx.$t("email"),
                      errors: unref(emailErrors),
                      name: "email",
                      type: "email",
                      required: "",
                      disabled: unref(isLoading)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PolicyCheckbox, {
                    modelValue: unref(scheduleAppointmentForm).personalAgreement,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).personalAgreement = $event,
                    disabled: unref(isLoading),
                    "error-messages": unref(personalAgreementErrors)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PolicyCheckbox, {
                      modelValue: unref(scheduleAppointmentForm).personalAgreement,
                      "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).personalAgreement = $event,
                      disabled: unref(isLoading),
                      "error-messages": unref(personalAgreementErrors)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-messages"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "feedback-form_button",
                    disabled: unref(isSubmitDisabled),
                    loading: unref(isLoading),
                    onClick: onSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("send"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("send")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      class: "feedback-form_button",
                      disabled: unref(isSubmitDisabled),
                      loading: unref(isLoading),
                      onClick: onSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("send")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
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
                    modelValue: unref(scheduleAppointmentForm).name,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).name = $event,
                    label: _ctx.$t("name"),
                    name: "name",
                    required: "",
                    errors: unref(nameErrors),
                    disabled: unref(isLoading)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PhoneInput, {
                    modelValue: unref(scheduleAppointmentForm).phone,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).phone = $event,
                    label: _ctx.$t("phone"),
                    errors: unref(phoneErrors),
                    name: "phone",
                    required: "",
                    disabled: unref(isLoading)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(scheduleAppointmentForm).email,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).email = $event,
                    label: _ctx.$t("email"),
                    errors: unref(emailErrors),
                    name: "email",
                    type: "email",
                    required: "",
                    disabled: unref(isLoading)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PolicyCheckbox, {
                    modelValue: unref(scheduleAppointmentForm).personalAgreement,
                    "onUpdate:modelValue": ($event) => unref(scheduleAppointmentForm).personalAgreement = $event,
                    disabled: unref(isLoading),
                    "error-messages": unref(personalAgreementErrors)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-messages"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    class: "feedback-form_button",
                    disabled: unref(isSubmitDisabled),
                    loading: unref(isLoading),
                    onClick: onSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("send")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/forms/store-service-form/store-service-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store-services",
  __ssrInlineRender: true,
  props: {
    services: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const isModalOpened = ref(false);
    const isResultModalOpened = ref(false);
    const resultConfig = reactive({
      title: "",
      icon: "",
      buttonText: "",
      status: StoreServiceStatusEnum.SUCCESS
    });
    const handleResult = (status) => {
      if (status === StoreServiceStatusEnum.SUCCESS) {
        resultConfig.title = t("request_store_accepted");
        resultConfig.icon = "successIcon";
      }
      if (status === StoreServiceStatusEnum.ERROR) {
        resultConfig.title = t("something_went_wrong");
        resultConfig.icon = "closeIcon";
      }
      resultConfig.buttonText = t("done");
      resultConfig.status = status;
      isModalOpened.value = false;
      isResultModalOpened.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      const _component_ModalLight = _sfc_main$3;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))} data-v-868e49d7>`);
      _push(ssrRenderComponent(UiCollapsedContent, {
        "action-text": _ctx.$t("view_store_services")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="services_list" data-v-868e49d7${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.services, (service) => {
              _push2(`<li class="services_item" data-v-868e49d7${_scopeId}><a${ssrRenderAttr("href", service.url)} class="services_link" data-v-868e49d7${_scopeId}>${ssrInterpolate(service.name)}</a></li>`);
            });
            _push2(`<!--]--></ul>`);
            {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("ul", { class: "services_list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.services, (service) => {
                  return openBlock(), createBlock("li", {
                    key: service.id,
                    class: "services_item"
                  }, [
                    createVNode("a", {
                      href: service.url,
                      class: "services_link"
                    }, toDisplayString(service.name), 9, ["href"])
                  ]);
                }), 128))
              ]),
              createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isModalOpened),
        "onUpdate:modelValue": ($event) => isRef(isModalOpened) ? isModalOpened.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="services_title" data-v-868e49d7${_scopeId}>${ssrInterpolate(_ctx.$t("schedule_appointment"))}</h2>`);
            _push2(ssrRenderComponent(_sfc_main$1, { onResult: handleResult }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "services_title" }, toDisplayString(_ctx.$t("schedule_appointment")), 1),
              createVNode(_sfc_main$1, { onResult: handleResult })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isResultModalOpened),
        "onUpdate:modelValue": ($event) => isRef(isResultModalOpened) ? isResultModalOpened.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services_result" data-v-868e49d7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: unref(resultConfig).icon,
              class: "services_icon"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="services_title services_title__little-indent" data-v-868e49d7${_scopeId}>${ssrInterpolate(unref(resultConfig).title)}</h2>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => isResultModalOpened.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(resultConfig).buttonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(resultConfig).buttonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "services_result" }, [
                createVNode(_component_Icon, {
                  icon: unref(resultConfig).icon,
                  class: "services_icon"
                }, null, 8, ["icon"]),
                createVNode("h2", { class: "services_title services_title__little-indent" }, toDisplayString(unref(resultConfig).title), 1),
                createVNode(_component_Button, {
                  onClick: ($event) => isResultModalOpened.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(resultConfig).buttonText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/store-services/store-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-868e49d7"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=store-services-DdIHLKVb.mjs.map
