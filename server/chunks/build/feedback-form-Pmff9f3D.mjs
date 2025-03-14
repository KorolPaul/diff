import { _ as __nuxt_component_0 } from './Form-ZGQdgBok.mjs';
import { _ as __nuxt_component_2 } from './ui-preloader-C4Bi7ENY.mjs';
import { _ as __nuxt_component_2$1, a as _sfc_main$2 } from './policy-checkbox-GL5-7Kb3.mjs';
import { _ as _sfc_main$1 } from './TextInput-HaUa076w.mjs';
import { u as useFormUtils, _ as __nuxt_component_4 } from './useFormUtils-HyQgFuda.mjs';
import { _ as __nuxt_component_5 } from './UiTextarea-BGk3U8qq.mjs';
import { a as useI18n, l as useGtm, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$3 } from './result-modal-BVb52vY1.mjs';
import { ref, reactive, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, isRef, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { L as LeadApiService } from './LeadApiService-z9_BsZVX.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import './UiCheckbox-rg4DHWMb.mjs';
import 'maska/vue';
import 'maska';
import '@vuelidate/validators';
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
import './modal-light-Cz0YAIgT.mjs';
import './icon-_hjsSUWU.mjs';

const _sfc_main = {
  __name: "feedback-form",
  __ssrInlineRender: true,
  props: {
    nda: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const initialForm = {
      email: null,
      phone: null,
      name: null,
      personalAgreement: false,
      subscription: false,
      comment: null
    };
    const props = __props;
    const { t } = useI18n();
    const { pushGtmEvent } = useGtm();
    const {
      isLoading: isFormLoading,
      startLoading,
      stopLoading
    } = useFormLoader();
    const { getErrors, defaultRequiredMessage, emailPattern } = useFormUtils();
    const isResultModalOpened = ref(false);
    const isResultSuccess = ref(false);
    const formData = reactive({ ...initialForm });
    const formRules = computed(() => ({
      email: { emailPattern, defaultRequiredMessage },
      name: { defaultRequiredMessage },
      phone: { defaultRequiredMessage },
      comment: { defaultRequiredMessage }
    }));
    const formTitle = computed(() => {
      if (props.data && props.data.title) {
        return props.data.title;
      }
      return t("feedback_form_title");
    });
    const v$ = useVuelidate(formRules, formData);
    const isSubmitDisable = computed(() => {
      const isDisable = !formData.personalAgreement || isFormLoading.value;
      if (props.nda) {
        return isDisable || !formData.nda;
      }
      return isDisable;
    });
    const firstNameErrors = computed(() => getErrors(v$.value.name));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const emailErrors = computed(() => getErrors(v$.value.email));
    const commentErrors = computed(() => getErrors(v$.value.comment));
    const checkFormValid = () => {
      var _a, _b;
      (_a = v$.value) == null ? void 0 : _a.$touch();
      return !((_b = v$.value) == null ? void 0 : _b.$invalid);
    };
    const resetForm = () => {
      formData.name = null;
      formData.phone = null;
      formData.email = null;
      formData.comment = null;
      formData.personalAgreement = false;
      formData.subscription = false;
    };
    const submit = async () => {
      var _a, _b;
      if (formData.personalAgreement === true && checkFormValid()) {
        startLoading();
        const response = await LeadApiService.sendFeedbackData({
          ...formData,
          website: (void 0).location.href
        });
        if (((_a = response == null ? void 0 : response.status) == null ? void 0 : _a.value) === "success") {
          resetForm();
          (_b = v$.value) == null ? void 0 : _b.$reset();
          isResultModalOpened.value = true;
          isResultSuccess.value = true;
          pushGtmEvent("submitForm");
        } else {
          isResultModalOpened.value = true;
          isResultSuccess.value = false;
        }
        stopLoading();
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0;
      const _component_UiPreloader = __nuxt_component_2;
      const _component_FormRow = __nuxt_component_2$1;
      const _component_TextInput = _sfc_main$1;
      const _component_PhoneInput = __nuxt_component_4;
      const _component_UiTextarea = __nuxt_component_5;
      const _component_PolicyCheckbox = _sfc_main$2;
      const _component_Button = __nuxt_component_6;
      const _component_ResultModal = _sfc_main$3;
      _push(ssrRenderComponent(_component_Form, mergeProps({
        class: ["feedback-form", { loading: unref(isFormLoading) }],
        name: "landing-form",
        method: "POST"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="feedback-form_title"${_scopeId}>${ssrInterpolate(unref(formTitle))}</h2>`);
            if (unref(isFormLoading)) {
              _push2(`<div class="feedback-form_spinner"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPreloader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextInput, {
                    id: "user-name",
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    errors: unref(firstNameErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("name")}`,
                    "data-field": "name"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      id: "user-name",
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                      errors: unref(firstNameErrors),
                      disabled: unref(isFormLoading),
                      label: `${_ctx.$t("name")}`,
                      "data-field": "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PhoneInput, {
                    id: "user-phone",
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    disabled: unref(isFormLoading),
                    errors: unref(phoneErrors),
                    label: "write_phone_number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PhoneInput, {
                      id: "user-phone",
                      modelValue: unref(formData).phone,
                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                      disabled: unref(isFormLoading),
                      errors: unref(phoneErrors),
                      label: "write_phone_number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
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
                    disabled: unref(isFormLoading),
                    errors: unref(emailErrors),
                    label: "email",
                    type: "email"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextInput, {
                      modelValue: unref(formData).email,
                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                      disabled: unref(isFormLoading),
                      errors: unref(emailErrors),
                      label: "email",
                      type: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    id: "user-comment",
                    modelValue: unref(formData).comment,
                    "onUpdate:modelValue": ($event) => unref(formData).comment = $event,
                    errors: unref(commentErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("feedback_comment")}`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTextarea, {
                      id: "user-comment",
                      modelValue: unref(formData).comment,
                      "onUpdate:modelValue": ($event) => unref(formData).comment = $event,
                      errors: unref(commentErrors),
                      disabled: unref(isFormLoading),
                      label: `${_ctx.$t("feedback_comment")}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PolicyCheckbox, {
                    modelValue: unref(formData).personalAgreement,
                    "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                    disabled: unref(isFormLoading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PolicyCheckbox, {
                      modelValue: unref(formData).personalAgreement,
                      "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                      disabled: unref(isFormLoading)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
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
                    disabled: unref(isSubmitDisable),
                    loading: unref(isFormLoading),
                    onClick: submit
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
                      disabled: unref(isSubmitDisable),
                      loading: unref(isFormLoading),
                      onClick: submit
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
            _push2(ssrRenderComponent(_component_ResultModal, {
              modelValue: unref(isResultModalOpened),
              "onUpdate:modelValue": ($event) => isRef(isResultModalOpened) ? isResultModalOpened.value = $event : null,
              success: unref(isResultSuccess),
              "success-title": "feedback_send_success_title",
              "failure-title": "feedback_send_error_title",
              onInput: ($event) => isResultModalOpened.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "feedback-form_title" }, toDisplayString(unref(formTitle)), 1),
              unref(isFormLoading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "feedback-form_spinner"
              }, [
                createVNode(_component_UiPreloader)
              ])) : createCommentVNode("", true),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    id: "user-name",
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    errors: unref(firstNameErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("name")}`,
                    "data-field": "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PhoneInput, {
                    id: "user-phone",
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    disabled: unref(isFormLoading),
                    errors: unref(phoneErrors),
                    label: "write_phone_number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_TextInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    disabled: unref(isFormLoading),
                    errors: unref(emailErrors),
                    label: "email",
                    type: "email"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTextarea, {
                    id: "user-comment",
                    modelValue: unref(formData).comment,
                    "onUpdate:modelValue": ($event) => unref(formData).comment = $event,
                    errors: unref(commentErrors),
                    disabled: unref(isFormLoading),
                    label: `${_ctx.$t("feedback_comment")}`
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "disabled", "label"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_PolicyCheckbox, {
                    modelValue: unref(formData).personalAgreement,
                    "onUpdate:modelValue": ($event) => unref(formData).personalAgreement = $event,
                    disabled: unref(isFormLoading)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_FormRow, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    class: "feedback-form_button",
                    disabled: unref(isSubmitDisable),
                    loading: unref(isFormLoading),
                    onClick: submit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("send")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ]),
                _: 1
              }),
              createVNode(_component_ResultModal, {
                modelValue: unref(isResultModalOpened),
                "onUpdate:modelValue": ($event) => isRef(isResultModalOpened) ? isResultModalOpened.value = $event : null,
                success: unref(isResultSuccess),
                "success-title": "feedback_send_success_title",
                "failure-title": "feedback_send_error_title",
                onInput: ($event) => isResultModalOpened.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue", "success", "onInput"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/forms/feedback-form/feedback-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=feedback-form-Pmff9f3D.mjs.map
