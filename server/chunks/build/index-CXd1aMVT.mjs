import { _ as __nuxt_component_0$1 } from './TabButtons-ChK5xK2I.mjs';
import { shallowRef, ref, mergeProps, unref, isRef, createVNode, resolveDynamicComponent, reactive, computed, watch, withCtx, createTextVNode, toDisplayString, defineComponent, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { u as useFormUtils, _ as __nuxt_component_4$1 } from './useFormUtils-HyQgFuda.mjs';
import { _ as __nuxt_component_1$3 } from './icon-_hjsSUWU.mjs';
import { _ as _sfc_main$c } from './TextInput-HaUa076w.mjs';
import { _ as _export_sfc, F as useUserStore, r as useNuxtApp, L as AccountApiService, a as useI18n, C as useRouter, J as useAuth, Y as modalGroups, k as __nuxt_component_6 } from './server.mjs';
import { Mask } from 'maska';
import { vMaska } from 'maska/vue';
import { _ as __nuxt_component_0$2 } from './UiRadio-hn8C_nHF.mjs';
import useVuelidate from '@vuelidate/core';
import { requiredIf } from '@vuelidate/validators';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { _ as _sfc_main$d } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_2$1 } from './enter-code-content-D5GsStjK.mjs';
import { u as useSeoMeta } from './index-r7vNs057.mjs';
import { _ as __nuxt_component_0$3 } from './Form-ZGQdgBok.mjs';
import { _ as __nuxt_component_1$4 } from './UiSelect-BqVOhDGy.mjs';
import './loading-CMY4YQWC.mjs';
import 'pinia';
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
import '@vueuse/core';
import 'zod';
import 'humps';

function filterName(name) {
  return name == null ? void 0 : name.replace(/[^\p{L}.,'"`\-–—:]/gu, "");
}
const _sfc_main$b = {
  __name: "profile-social-accounts",
  __ssrInlineRender: true,
  props: {
    socialAccounts: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const icons = ref({
      apple: "authApple",
      google: "authGoogle",
      facebook: "authFacebook"
    });
    const provider = computed(() => {
      var _a;
      const socialAccount = (_a = props.socialAccounts) == null ? void 0 : _a[0];
      if (!socialAccount) {
        return null;
      }
      const icon = icons.value[socialAccount.provider];
      return icon ? { ...socialAccount, icon } : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      if (unref(provider)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-social-accounts" }, _attrs))} data-v-0050a8b6>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: unref(provider).icon,
          class: "profile-social-accounts_icon"
        }, null, _parent));
        _push(`<span class="profile-social-accounts_title" data-v-0050a8b6>${ssrInterpolate(unref(provider).name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-social-accounts/profile-social-accounts.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-0050a8b6"]]);
const DAY_LENGTH = 2;
const MONTH_LENGTH = 2;
const YEAR_LENGTH = 4;
const defaultDateMask = "##.##.####";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DateInput",
  __ssrInlineRender: true,
  props: {
    label: {},
    modelValue: {},
    errors: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const emit = __emit;
    const errorsRef = ref(props.errors);
    const birthdayMask = ref(defaultDateMask);
    const birthdayValue = computed({
      get() {
        if (!props.modelValue) {
          return "";
        }
        const mask = birthdayMask.value;
        const maskaInstance = new Mask({ mask });
        return maskaInstance.masked(props.modelValue);
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    computed(() => {
      const dateParts = birthdayValue.value.split(".");
      const [dayString, monthString, yearString] = dateParts;
      const day = Number(dayString);
      const month = Number(monthString);
      const year = Number(yearString);
      const getDaysInMonth = (year2, month2) => new Date(year2, month2, 0).getDate();
      const isValidDay = () => {
        if (dayString.length < DAY_LENGTH) {
          return true;
        }
        if ((yearString == null ? void 0 : yearString.length) === YEAR_LENGTH && (monthString == null ? void 0 : monthString.length) === MONTH_LENGTH && (day < 1 || day > getDaysInMonth(year, month))) {
          return false;
        }
        return day >= 1 && day <= 31;
      };
      const isValidMonth = () => {
        if (!month) {
          return true;
        }
        if (monthString.length < MONTH_LENGTH) {
          return true;
        }
        return month >= 1 && month <= 12;
      };
      const isValidYear = () => {
        if (!year) {
          return true;
        }
        if (yearString.length < YEAR_LENGTH) {
          return true;
        }
        return year >= 1900 && year <= (/* @__PURE__ */ new Date()).getFullYear();
      };
      const isDateInPast = () => {
        if ((yearString == null ? void 0 : yearString.length) < YEAR_LENGTH || (monthString == null ? void 0 : monthString.length) < MONTH_LENGTH || (dayString == null ? void 0 : dayString.length) < DAY_LENGTH) {
          return true;
        } else {
          return new Date(year, month - 1, day) < /* @__PURE__ */ new Date();
        }
      };
      const datePartsLength = dateParts.join("").length;
      if (datePartsLength <= DAY_LENGTH) {
        return isValidDay();
      } else if (datePartsLength <= DAY_LENGTH + MONTH_LENGTH) {
        return isValidDay() && isValidMonth();
      } else {
        return isValidDay() && isValidMonth() && isValidYear() && isDateInPast();
      }
    });
    watch(
      () => props.errors,
      () => errorsRef.value = props.errors
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["text-input", { error: (_a = unref(errorsRef)) == null ? void 0 : _a.length }]
      }, _attrs))} data-v-46143b41><input${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        class: "text-input_input",
        type: "text",
        value: unref(birthdayValue),
        placeholder: " "
      }, ssrGetDirectiveProps(_ctx, unref(vMaska), unref(birthdayMask))))} data-v-46143b41><span class="text-input_label" data-v-46143b41>${ssrInterpolate(unref(t)(_ctx.label))}`);
      if (_ctx.required) {
        _push(`<!--[-->*<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
      if (unref(errorsRef)) {
        _push(`<div class="text-input_errors" data-v-46143b41><!--[-->`);
        ssrRenderList(unref(errorsRef), (error) => {
          _push(`<span data-v-46143b41>${ssrInterpolate(unref(t)(error))}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TextInput/DateInput.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-46143b41"]]);
const useProfile = () => {
  const popupSuccessText = ref("");
  const statusCode = ref(null);
  const profile = ref(null);
  const errorData = ref([]);
  const { setUser, getUser } = useUserStore();
  const saveAccountData = async (data) => {
    var _a, _b;
    const payload = {
      email: data.email,
      name: data.name,
      phone: data.phone,
      sex: data.sex,
      lastname: data.lastname,
      birth_date: data.birth_date || data.date,
      language: data.language,
      addresses: data.addresses
    };
    try {
      const userData = { ...getUser.value, ...payload };
      const res = await AccountApiService.patchProfile(userData);
      if ((res == null ? void 0 : res.status.value) === "success") {
        setUser(Object.assign(getUser.value, res.data.value.data, data));
        statusCode.value = res == null ? void 0 : res.status.value;
        popupSuccessText.value = "your_new_data_has_been_successfully_saved";
      }
      return {
        status: res == null ? void 0 : res.status.value,
        errors: (_b = (_a = res == null ? void 0 : res.error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.errors
      };
    } catch (error) {
      if (error.response) {
        const { data: responseData, status } = error.response;
        return { errors: responseData.errors, status };
      } else {
        return { errors: ["Unexpected error"] };
      }
    }
  };
  const clearErrorData = () => {
    errorData.value = [];
  };
  return {
    saveAccountData,
    popupSuccessText,
    statusCode,
    profile,
    errorData,
    clearErrorData
  };
};
const _sfc_main$9 = {
  __name: "confirm-delete-modal",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  emits: ["cancel", "confirm"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "confirm-delete-modal" }, _attrs))} data-v-c55529d4><span class="confirm-delete-modal_title" data-v-c55529d4>${ssrInterpolate(_ctx.$t(__props.title))}</span><p class="confirm-delete-modal_description" data-v-c55529d4>${ssrInterpolate(_ctx.$t(__props.description))}</p>`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: __props.loading,
        "full-width": "",
        onClick: ($event) => _ctx.$emit("cancel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        disabled: __props.loading,
        secondary: "",
        "full-width": "",
        onClick: ($event) => _ctx.$emit("confirm")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("delete"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("delete")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/confirm-delete-modal/confirm-delete-modal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c55529d4"]]);
const _sfc_main$8 = {
  __name: "profile-delete-data",
  __ssrInlineRender: true,
  props: {
    login: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { isLoading, startLoading, stopLoading } = useFormLoader();
    const app = useNuxtApp();
    const router = useRouter();
    const { setUser } = useUserStore();
    const { sendCode, deleteBearerToken, removeTokenInCookies } = useAuth();
    const isModalOpened = ref(false);
    const step = ref("");
    const code = ref("");
    const errors = ref([]);
    const logoutUserAfterDeletion = () => {
      removeTokenInCookies();
      deleteBearerToken();
      setUser(null);
      router.push(
        app.$localeRoute({
          path: `/`
        })
      );
    };
    const completeConfirmStep = async () => {
      var _a;
      if (isLoading.value) {
        return;
      }
      startLoading();
      const res = await sendCode(props.login);
      if (((_a = res == null ? void 0 : res.status) == null ? void 0 : _a.value) === "success") {
        step.value = "enter-code";
      } else {
        console.log(res);
      }
      stopLoading();
    };
    const completeCodeStep = () => {
      var _a, _b;
      try {
        step.value = "success";
        isModalOpened.value = false;
        logoutUserAfterDeletion();
      } catch (e) {
        if ((_b = (_a = e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.errors) {
          errors.value = Object.values(e.response.data.errors).flat();
        } else {
          errors.value = ["An unexpected error occurred. Please try again."];
        }
      }
    };
    const changeCode = (event) => {
      if (typeof event === "string") {
        code.value = event;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$d;
      const _component_ConfirmDeleteModal = __nuxt_component_1$2;
      const _component_EnterCodeContent = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-delete-data" }, _attrs))} data-v-8881c6d9><button class="profile-delete-data_title" data-v-8881c6d9>${ssrInterpolate(_ctx.$t("delete_account"))}</button>`);
      _push(ssrRenderComponent(_component_ModalLight, {
        modelValue: unref(isModalOpened),
        "onUpdate:modelValue": ($event) => isRef(isModalOpened) ? isModalOpened.value = $event : null,
        group: unref(modalGroups).main,
        "padding-modal": false,
        "close-btn": unref(step) === "enter-code",
        "max-width": 600,
        "full-height": "",
        onClose: ($event) => isModalOpened.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="profile-delete-data_content" data-v-8881c6d9${_scopeId}>`);
            if (unref(step) === "confirm-action") {
              _push2(ssrRenderComponent(_component_ConfirmDeleteModal, {
                loading: unref(isLoading),
                title: "deleting_account",
                description: "deleting_account_description",
                onConfirm: completeConfirmStep,
                onCancel: ($event) => isModalOpened.value = false
              }, null, _parent2, _scopeId));
            } else if (unref(step) === "enter-code") {
              _push2(`<div class="profile-delete-data_code" data-v-8881c6d9${_scopeId}>`);
              _push2(ssrRenderComponent(_component_EnterCodeContent, {
                "login-value": __props.login,
                code: unref(code),
                "delete-account-type": "",
                onChange: ($event) => changeCode($event),
                onSuccess: completeCodeStep
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "profile-delete-data_content" }, [
                unref(step) === "confirm-action" ? (openBlock(), createBlock(_component_ConfirmDeleteModal, {
                  key: 0,
                  loading: unref(isLoading),
                  title: "deleting_account",
                  description: "deleting_account_description",
                  onConfirm: completeConfirmStep,
                  onCancel: ($event) => isModalOpened.value = false
                }, null, 8, ["loading", "onCancel"])) : unref(step) === "enter-code" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "profile-delete-data_code"
                }, [
                  createVNode(_component_EnterCodeContent, {
                    "login-value": __props.login,
                    code: unref(code),
                    "delete-account-type": "",
                    onChange: ($event) => changeCode($event),
                    onSuccess: completeCodeStep
                  }, null, 8, ["login-value", "code", "onChange"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-delete-data/profile-delete-data.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ProfileDeleteData = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8881c6d9"]]);
const _sfc_main$7 = {
  __name: "profile-personal-data",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: null
    },
    errorData: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    var _a2, _b, _c, _d, _e, _f;
    var _a;
    const props = __props;
    const convertDateFormat = (dateString, targetFormat) => {
      if (!dateString) {
        return null;
      }
      const [sourceFormat, separator] = dateString.includes("-") ? ["dash", "-"] : ["dot", "."];
      if (sourceFormat === targetFormat) {
        return dateString;
      }
      return dateString.split(separator).reverse().join(targetFormat === "dash" ? "-" : ".");
    };
    const initialForm = {
      phone: (_a2 = props.profile.phone) != null ? _a2 : "",
      email: (_b = props.profile.email) != null ? _b : "",
      name: (_c = props.profile.name) != null ? _c : "",
      lastname: (_d = props.profile.lastname) != null ? _d : "",
      birth_date: (_e = props.profile.birth_date) != null ? _e : "",
      sex: (_f = props.profile.sex) != null ? _f : "",
      userType: "b2c",
      country: "PL"
    };
    const app = useNuxtApp();
    const i18n = app.$i18n;
    useUserStore();
    const isSaveDisabled = ref(true);
    const genderItems = ref(["male", "female"]);
    const gender = ref(((_a = props.profile) == null ? void 0 : _a.sex) || null);
    const birthDateFormatted = ref(
      convertDateFormat(props.profile.birth_date, "dash")
    );
    const { isLoading } = useFormLoader();
    const {
      getErrors,
      defaultRequiredMessage,
      defaultPhoneRequiredMessage,
      emailPattern
    } = useFormUtils();
    useProfile();
    const formData = reactive({ ...initialForm });
    const formKeys = Object.keys(formData);
    formKeys.forEach((fixedKey) => {
      if (props.profile[fixedKey]) {
        formData[fixedKey] = fixedKey === "birth_date" ? convertDateFormat(props.profile[fixedKey], "dot") : props.profile[fixedKey];
      }
    });
    const externalErrors = ref({});
    const handleInput = (name) => (val) => {
      if (formData[name]) {
        formData[name] = filterName(val);
      }
      return filterName(val);
    };
    const formRules = ref({
      email: { emailPattern, requiredIf: requiredIf(() => !formData.phone) },
      phone: {
        defaultPhoneRequiredMessage,
        requiredIf: requiredIf(() => !formData.email)
      },
      name: { defaultRequiredMessage },
      lastname: { requiredIf: requiredIf(false) },
      birth_date: { requiredIf: requiredIf(false) }
    });
    const setGender = (data) => {
      formData.sex = data.toLowerCase();
    };
    const v$ = useVuelidate(formRules, formData, {
      $externalResults: externalErrors
    });
    const firstNameErrors = computed(() => getErrors(v$.value.name));
    const secondNameErrors = computed(() => getErrors(v$.value.lastname));
    const dateBirthErrors = computed(() => getErrors(v$.value.birth_date));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const emailErrors = computed(() => getErrors(v$.value.email));
    const handleBlur = (fieldName) => {
      var _a22, _b2, _c2, _d2;
      (_b2 = (_a22 = v$.value) == null ? void 0 : _a22[fieldName]) == null ? void 0 : _b2.$touch();
      if (fieldName === "phone" || fieldName === "email") {
        (_d2 = (_c2 = v$.value) == null ? void 0 : _c2[fieldName === "phone" ? "email" : "phone"]) == null ? void 0 : _d2.$touch();
      }
    };
    const enabledValidations = reactive({
      personalData: true
    });
    const setServerSideErrors = (errors) => {
      externalErrors.value = errors;
    };
    const editUserData = (field, value) => {
      formData[field] = value;
      const remainingErrors = {};
      Object.keys(externalErrors.value).forEach((key) => {
        if (field !== key) {
          remainingErrors[key] = externalErrors.value[key];
        }
      });
      externalErrors.value = remainingErrors;
    };
    const removeExternalError = () => {
      setServerSideErrors([]);
    };
    removeExternalError();
    useSeoMeta({
      title: i18n.t("profile")
    });
    watch(
      () => [
        formData,
        phoneErrors,
        emailErrors,
        firstNameErrors,
        secondNameErrors,
        dateBirthErrors
      ],
      () => {
        const hasChanges = Object.keys(formData).some((key) => {
          var _a22;
          if (key === "userType" || key === "country") {
            return false;
          }
          if (key === "birth_date") {
            return convertDateFormat(formData[key], "dash") !== props.profile[key] && formData[key] !== null && formData[key] !== "" && ((_a22 = formData[key]) == null ? void 0 : _a22.length) === 10;
          }
          return formData[key] !== props.profile[key] && formData[key] !== null && formData[key] !== "";
        });
        const hasErrors = [
          phoneErrors,
          emailErrors,
          firstNameErrors,
          secondNameErrors,
          dateBirthErrors
        ].some((error) => error.value.length);
        isSaveDisabled.value = !hasChanges || hasErrors;
      },
      {
        deep: true
      }
    );
    watch(
      () => formData.birth_date,
      () => {
        if (formData.birth_date.length === 10) {
          birthDateFormatted.value = convertDateFormat(formData.birth_date, "dash");
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhoneInput = __nuxt_component_4$1;
      const _component_Icon = __nuxt_component_1$3;
      const _component_TextInput = _sfc_main$c;
      const _component_ProfileSocialAccounts = __nuxt_component_3;
      const _component_DateInput = __nuxt_component_4;
      const _component_UiRadio = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-personal-data" }, _attrs))} data-v-7c319ab8><div data-v-7c319ab8><span class="profile-personal-data_title" data-v-7c319ab8>${ssrInterpolate(_ctx.$t("personal_data"))}</span><div data-v-7c319ab8><div class="profile-personal-data_user-data" data-v-7c319ab8><div class="profile-personal-data_input-container" data-v-7c319ab8>`);
      _push(ssrRenderComponent(_component_PhoneInput, {
        modelValue: unref(formData).phone,
        "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
        "validation-enabled": unref(enabledValidations).personalData,
        errors: unref(phoneErrors),
        label: "write_phone_number",
        "data-attributes": { field: unref(formData).phone },
        type: "phone",
        disabled: unref(isLoading),
        onBlur: ($event) => handleBlur("phone")
      }, null, _parent));
      if (props.profile.statuses.is_phone_verified) {
        _push(`<div class="profile-personal-data_confirmed" data-v-7c319ab8>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "confirmedIcon",
          class: "profile-personal-data_confirmed-icon"
        }, null, _parent));
        _push(`<span class="profile-personal-data_confirmed-text" data-v-7c319ab8>${ssrInterpolate(_ctx.$t("confirmed"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="profile-personal-data_input-container" data-v-7c319ab8>`);
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(v$).email.$model,
        "onUpdate:modelValue": ($event) => unref(v$).email.$model = $event,
        errors: unref(emailErrors),
        "validation-enabled": unref(enabledValidations).personalData,
        label: "email",
        disabled: unref(isLoading),
        type: "email",
        onBlur: ($event) => handleBlur("email")
      }, null, _parent));
      if (props.profile.statuses.is_email_verified) {
        _push(`<div class="profile-personal-data_confirmed" data-v-7c319ab8>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "confirmedIcon",
          class: "profile-personal-data_confirmed-icon"
        }, null, _parent));
        _push(`<span class="profile-personal-data_confirmed-text" data-v-7c319ab8>${ssrInterpolate(_ctx.$t("confirmed"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ProfileSocialAccounts, {
        "social-accounts": __props.profile.social_accounts
      }, null, _parent));
      _push(`</div></div><div class="profile-personal-data_user-data-wrapper" data-v-7c319ab8><div class="profile-personal-data_user-data" data-v-7c319ab8>`);
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(formData).name,
        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
        errors: unref(firstNameErrors),
        label: "name",
        "validation-enabled": unref(enabledValidations).personalData,
        maxlength: "30",
        required: "",
        disabled: unref(isLoading),
        "handle-input": handleInput("name"),
        onChange: ($event) => editUserData("name", unref(filterName)($event.target.value)),
        onBlur: ($event) => handleBlur("name")
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(formData).lastname,
        "onUpdate:modelValue": ($event) => unref(formData).lastname = $event,
        errors: unref(secondNameErrors),
        label: "surname",
        maxlength: "30",
        "validation-enabled": unref(enabledValidations).personalData,
        disabled: unref(isLoading),
        "handle-input": handleInput("lastname"),
        onChange: ($event) => editUserData("lastname", unref(filterName)($event.target.value))
      }, null, _parent));
      _push(`</div><div class="profile-personal-data_user-data" data-v-7c319ab8>`);
      _push(ssrRenderComponent(_component_DateInput, {
        modelValue: unref(formData).birth_date,
        "onUpdate:modelValue": ($event) => unref(formData).birth_date = $event,
        label: "birthday",
        "validation-enabled": unref(enabledValidations).personalData,
        errors: unref(dateBirthErrors),
        "data-attributes": { field: unref(formData).birth_date },
        disabled: unref(isLoading),
        onChange: ($event) => editUserData("birth_date", $event.target.value)
      }, null, _parent));
      _push(`<div class="profile-personal-data_user-gender" data-v-7c319ab8><span class="profile-personal-data_user-gender-title" data-v-7c319ab8>${ssrInterpolate(_ctx.$t("gender"))}: </span><!--[-->`);
      ssrRenderList(unref(genderItems), (item, index2) => {
        _push(ssrRenderComponent(_component_UiRadio, {
          key: index2,
          modelValue: unref(gender),
          "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
          checked: unref(gender) === item,
          disabled: unref(isLoading),
          name: item,
          value: item,
          label: "",
          onChange: ($event) => setGender(item)
        }, {
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><button class="profile-personal-data_save-button"${ssrIncludeBooleanAttr(unref(isLoading) || unref(isSaveDisabled)) ? " disabled" : ""} data-v-7c319ab8>${ssrInterpolate(_ctx.$t("save"))}</button>`);
      _push(ssrRenderComponent(ProfileDeleteData, {
        login: unref(formData).email || unref(formData).phone
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-personal-data/profile-personal-data.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProfilePersonalData = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7c319ab8"]]);
const _sfc_main$6 = {
  __name: "remove-modal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    activeItem: {
      type: Object,
      default: () => ({})
    },
    removeEmptyDataModal: {
      type: Boolean,
      default: false
    },
    isRemoveModalOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "update", "update:remove-empty-data-modal"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { setUser, getUser, setMainUserAddress } = useUserStore();
    const { isLoading, startLoading, stopLoading } = useFormLoader();
    const profile = ref(getUser);
    const isOpened = computed(() => props.isRemoveModalOpened);
    const submit = async () => {
      var _a, _b, _c, _d, _e, _f;
      startLoading();
      try {
        const updatedItems = ((_b = (_a = profile.value) == null ? void 0 : _a[props.activeItem.type]) == null ? void 0 : _b.filter(
          (obj) => obj.id !== props.activeItem.id
        )) || [];
        if (updatedItems.length) {
          if (!updatedItems.find((el) => el.is_primary)) {
            updatedItems[0].is_primary = true;
          }
        }
        const updatedProfile = {
          ...profile.value,
          [props.activeItem.type]: updatedItems
        };
        const result = await AccountApiService.patchProfile(updatedProfile);
        if (props.activeItem.type === "addresses") {
          setMainUserAddress((_e = (_d = (_c = result == null ? void 0 : result.data) == null ? void 0 : _c.value) == null ? void 0 : _d.data) == null ? void 0 : _e.addresses);
        }
        if (((_f = result == null ? void 0 : result.status) == null ? void 0 : _f.value) === "success") {
          setUser(updatedProfile);
          emit("update", updatedProfile);
          emit("close");
        }
      } catch (e) {
        console.error(e);
      } finally {
        stopLoading();
      }
    };
    const closeAll = () => {
      if (props.removeEmptyDataModal === true) {
        emit("update:remove-empty-data-modal", false);
      }
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$d;
      const _component_ConfirmDeleteModal = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": [($event) => isRef(isOpened) ? isOpened.value = $event : null, ($event) => emit("close")],
        "max-width": 600,
        "full-height": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="remove-modal" data-v-b35fbe8b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ConfirmDeleteModal, {
              loading: unref(isLoading),
              title: __props.title,
              description: __props.description,
              onConfirm: submit,
              onCancel: closeAll
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "remove-modal" }, [
                createVNode(_component_ConfirmDeleteModal, {
                  loading: unref(isLoading),
                  title: __props.title,
                  description: __props.description,
                  onConfirm: submit,
                  onCancel: closeAll
                }, null, 8, ["loading", "title", "description"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/remove-modal/remove-modal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b35fbe8b"]]);
const _sfc_main$5 = {
  __name: "edit-modal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    activeItem: {
      type: Object,
      default: () => ({})
    },
    isEditModalOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "update", "openDeleteModal"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { setUser, getUser, setMainUserAddress } = useUserStore();
    const { isLoading, startLoading, stopLoading } = useFormLoader();
    const { getErrors, defaultRequiredMessage, defaultPhoneRequiredMessage } = useFormUtils();
    const isOpened = computed(() => props.isEditModalOpened);
    const profile = ref(getUser);
    const initialAddressesForm = ref({});
    const initialRecipientsForm = ref({});
    const formData = ref({});
    const formRules = ref({
      apartment_number: { requiredIf: requiredIf(false) },
      city: { defaultRequiredMessage },
      house_number: { defaultRequiredMessage },
      lastname: { requiredIf: requiredIf(false) },
      name: { requiredIf: requiredIf(false) },
      phone: { defaultPhoneRequiredMessage },
      street: { defaultRequiredMessage }
    });
    const v$ = useVuelidate(formRules, formData);
    const apartmentNumberErrors = computed(
      () => getErrors(v$.value.apartment_number)
    );
    const cityErrors = computed(() => getErrors(v$.value.city));
    const houseNumberErrors = computed(() => getErrors(v$.value.house_number));
    const lastNameErrors = computed(() => getErrors(v$.value.lastname));
    const nameErrors = computed(() => getErrors(v$.value.name));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const streetErrors = computed(() => getErrors(v$.value.street));
    const handleInput = (name) => (val) => {
      if (formData.value[name]) {
        formData.value[name] = filterName(val);
      }
      return filterName(val);
    };
    const handleBlur = (fieldName) => {
      var _a, _b;
      (_b = (_a = v$.value) == null ? void 0 : _a[fieldName]) == null ? void 0 : _b.$touch();
    };
    const validatePersonalData = () => {
      if (props.activeItem.type === "addresses") {
        return !v$.value.apartment_number.$error && !v$.value.city.$error && !v$.value.house_number.$error && !v$.value.street.$error;
      }
      return !v$.value.lastname.$error && !v$.value.name.$error && !v$.value.phone.$error;
    };
    const isFormChanged = computed(() => {
      if (props.activeItem.type === "addresses") {
        return formData.value.apartment_number !== initialAddressesForm.value.apartment_number || formData.value.city !== initialAddressesForm.value.city || formData.value.house_number !== initialAddressesForm.value.house_number || formData.value.street !== initialAddressesForm.value.street;
      }
      return formData.value.first_name !== initialRecipientsForm.value.first_name || formData.value.last_name !== initialRecipientsForm.value.last_name || formData.value.phone !== initialRecipientsForm.value.phone;
    });
    const submit = async () => {
      var _a, _b, _c, _d, _e;
      if (props.activeItem.type === "recipients" && !formData.value.first_name && !formData.value.last_name && !formData.value.phone) {
        emit("openDeleteModal");
        return;
      }
      try {
        startLoading();
        const items = ((_a = profile.value) == null ? void 0 : _a[props.activeItem.type]) || [];
        if (items.length) {
          const primaryCount = items.reduce(
            (count, item) => item.is_primary ? count + 1 : count,
            0
          );
          if (primaryCount > 1) {
            items.forEach((item) => item.is_primary = false);
            items[0].is_primary = true;
          } else if (!items.find((item) => item.is_primary)) {
            items[0].is_primary = true;
          }
        }
        const updatedItems = items.map(
          (item) => item.id === props.activeItem.id ? { ...item, ...formData.value } : item
        );
        const updatedProfile = {
          ...profile.value,
          [props.activeItem.type]: updatedItems
        };
        const result = await AccountApiService.patchProfile(updatedProfile);
        if (props.activeItem.type === "addresses") {
          setMainUserAddress((_d = (_c = (_b = result == null ? void 0 : result.data) == null ? void 0 : _b.value) == null ? void 0 : _c.data) == null ? void 0 : _d.addresses);
        }
        if (((_e = result == null ? void 0 : result.status) == null ? void 0 : _e.value) === "success") {
          setUser(updatedProfile);
          emit("update", updatedProfile);
          emit("close");
        }
      } catch (e) {
        console.error(e);
      } finally {
        stopLoading();
      }
    };
    watch(
      () => props.isEditModalOpened,
      (value) => {
        if (value) {
          initialAddressesForm.value = {
            apartment_number: props.activeItem.apartment_number,
            city: props.activeItem.city_name,
            house_number: props.activeItem.house_number,
            street: props.activeItem.street
          };
          initialRecipientsForm.value = {
            first_name: props.activeItem.first_name,
            last_name: props.activeItem.last_name,
            phone: props.activeItem.phone
          };
          formData.value = props.activeItem.type === "addresses" ? { ...initialAddressesForm.value } : { ...initialRecipientsForm.value };
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$d;
      const _component_Form = __nuxt_component_0$3;
      const _component_UiSelect = __nuxt_component_1$4;
      const _component_TextInput = _sfc_main$c;
      const _component_PhoneInput = __nuxt_component_4$1;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": [($event) => isRef(isOpened) ? isOpened.value = $event : null, ($event) => emit("close")],
        "max-width": 600,
        "full-height": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="edit-modal" data-v-fff47dd5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Form, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="edit-modal_title" data-v-fff47dd5${_scopeId2}>${ssrInterpolate(_ctx.$t(__props.title))}</span>`);
                  if (__props.activeItem.type === "addresses") {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(formData).city,
                      "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                      errors: unref(cityErrors),
                      label: "city",
                      required: "",
                      "with-icon": "",
                      icon: "searchIcon",
                      disabled: ""
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(formData).street,
                      "onUpdate:modelValue": ($event) => unref(formData).street = $event,
                      disabled: unref(isLoading),
                      errors: unref(streetErrors),
                      height: 55,
                      label: "street",
                      required: "",
                      onBlur: ($event) => handleBlur("street")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(formData).house_number,
                      "onUpdate:modelValue": ($event) => unref(formData).house_number = $event,
                      disabled: unref(isLoading),
                      errors: unref(houseNumberErrors),
                      height: 55,
                      label: "house_number",
                      required: "",
                      onBlur: ($event) => handleBlur("house_number")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(formData).apartment_number,
                      "onUpdate:modelValue": ($event) => unref(formData).apartment_number = $event,
                      disabled: unref(isLoading),
                      errors: unref(apartmentNumberErrors),
                      height: 55,
                      label: "apartment_number"
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(formData).first_name,
                      "onUpdate:modelValue": ($event) => unref(formData).first_name = $event,
                      disabled: unref(isLoading),
                      errors: unref(nameErrors),
                      "handle-input": handleInput("name"),
                      label: "name",
                      maxlength: "30",
                      onBlur: ($event) => handleBlur("name")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TextInput, {
                      modelValue: unref(formData).last_name,
                      "onUpdate:modelValue": ($event) => unref(formData).last_name = $event,
                      disabled: unref(isLoading),
                      errors: unref(lastNameErrors),
                      "handle-input": handleInput("lastname"),
                      label: "surname",
                      maxlength: "30",
                      onBlur: ($event) => handleBlur("lastname")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_PhoneInput, {
                      modelValue: unref(formData).phone,
                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                      "data-attributes": { field: unref(formData).phone },
                      disabled: unref(isLoading),
                      errors: unref(phoneErrors),
                      label: "write_phone_number",
                      onBlur: ($event) => handleBlur("phone")
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                  _push3(ssrRenderComponent(_component_Button, {
                    disabled: unref(isLoading) || !validatePersonalData || !unref(isFormChanged),
                    "full-width": "",
                    onClick: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("save"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("save")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "edit-modal_title" }, toDisplayString(_ctx.$t(__props.title)), 1),
                    __props.activeItem.type === "addresses" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(formData).city,
                        "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                        errors: unref(cityErrors),
                        label: "city",
                        required: "",
                        "with-icon": "",
                        icon: "searchIcon",
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errors"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).street,
                        "onUpdate:modelValue": ($event) => unref(formData).street = $event,
                        disabled: unref(isLoading),
                        errors: unref(streetErrors),
                        height: 55,
                        label: "street",
                        required: "",
                        onBlur: ($event) => handleBlur("street")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).house_number,
                        "onUpdate:modelValue": ($event) => unref(formData).house_number = $event,
                        disabled: unref(isLoading),
                        errors: unref(houseNumberErrors),
                        height: 55,
                        label: "house_number",
                        required: "",
                        onBlur: ($event) => handleBlur("house_number")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).apartment_number,
                        "onUpdate:modelValue": ($event) => unref(formData).apartment_number = $event,
                        disabled: unref(isLoading),
                        errors: unref(apartmentNumberErrors),
                        height: 55,
                        label: "apartment_number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).first_name,
                        "onUpdate:modelValue": ($event) => unref(formData).first_name = $event,
                        disabled: unref(isLoading),
                        errors: unref(nameErrors),
                        "handle-input": handleInput("name"),
                        label: "name",
                        maxlength: "30",
                        onBlur: ($event) => handleBlur("name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "handle-input", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).last_name,
                        "onUpdate:modelValue": ($event) => unref(formData).last_name = $event,
                        disabled: unref(isLoading),
                        errors: unref(lastNameErrors),
                        "handle-input": handleInput("lastname"),
                        label: "surname",
                        maxlength: "30",
                        onBlur: ($event) => handleBlur("lastname")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "handle-input", "onBlur"]),
                      createVNode(_component_PhoneInput, {
                        modelValue: unref(formData).phone,
                        "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                        "data-attributes": { field: unref(formData).phone },
                        disabled: unref(isLoading),
                        errors: unref(phoneErrors),
                        label: "write_phone_number",
                        onBlur: ($event) => handleBlur("phone")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                    ], 64)),
                    createVNode(_component_Button, {
                      disabled: unref(isLoading) || !validatePersonalData || !unref(isFormChanged),
                      "full-width": "",
                      onClick: submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("save")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "edit-modal" }, [
                createVNode(_component_Form, null, {
                  default: withCtx(() => [
                    createVNode("span", { class: "edit-modal_title" }, toDisplayString(_ctx.$t(__props.title)), 1),
                    __props.activeItem.type === "addresses" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(formData).city,
                        "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                        errors: unref(cityErrors),
                        label: "city",
                        required: "",
                        "with-icon": "",
                        icon: "searchIcon",
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errors"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).street,
                        "onUpdate:modelValue": ($event) => unref(formData).street = $event,
                        disabled: unref(isLoading),
                        errors: unref(streetErrors),
                        height: 55,
                        label: "street",
                        required: "",
                        onBlur: ($event) => handleBlur("street")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).house_number,
                        "onUpdate:modelValue": ($event) => unref(formData).house_number = $event,
                        disabled: unref(isLoading),
                        errors: unref(houseNumberErrors),
                        height: 55,
                        label: "house_number",
                        required: "",
                        onBlur: ($event) => handleBlur("house_number")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).apartment_number,
                        "onUpdate:modelValue": ($event) => unref(formData).apartment_number = $event,
                        disabled: unref(isLoading),
                        errors: unref(apartmentNumberErrors),
                        height: 55,
                        label: "apartment_number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors"])
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).first_name,
                        "onUpdate:modelValue": ($event) => unref(formData).first_name = $event,
                        disabled: unref(isLoading),
                        errors: unref(nameErrors),
                        "handle-input": handleInput("name"),
                        label: "name",
                        maxlength: "30",
                        onBlur: ($event) => handleBlur("name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "handle-input", "onBlur"]),
                      createVNode(_component_TextInput, {
                        modelValue: unref(formData).last_name,
                        "onUpdate:modelValue": ($event) => unref(formData).last_name = $event,
                        disabled: unref(isLoading),
                        errors: unref(lastNameErrors),
                        "handle-input": handleInput("lastname"),
                        label: "surname",
                        maxlength: "30",
                        onBlur: ($event) => handleBlur("lastname")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "errors", "handle-input", "onBlur"]),
                      createVNode(_component_PhoneInput, {
                        modelValue: unref(formData).phone,
                        "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                        "data-attributes": { field: unref(formData).phone },
                        disabled: unref(isLoading),
                        errors: unref(phoneErrors),
                        label: "write_phone_number",
                        onBlur: ($event) => handleBlur("phone")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "data-attributes", "disabled", "errors", "onBlur"])
                    ], 64)),
                    createVNode(_component_Button, {
                      disabled: unref(isLoading) || !validatePersonalData || !unref(isFormChanged),
                      "full-width": "",
                      onClick: submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("save")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/edit-modal/edit-modal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fff47dd5"]]);
const _sfc_main$4 = {
  __name: "profile-address",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: null
    },
    tab: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const i18n = nuxtApp.$i18n;
    const { mainUserAddress, getUser } = useUserStore();
    const newProfile = ref(props.profile);
    const isRemoveModalOpened = ref(false);
    const isEditModalOpened = ref(false);
    const removeEmptyDataModal = ref(false);
    const activeItem = ref({
      id: null,
      type: null
    });
    const address = ref(
      ((_a = newProfile.value.addresses) == null ? void 0 : _a.length) ? newProfile.value.addresses[0] : []
    );
    const removeModalTitle = computed(
      () => activeItem.value.type === "addresses" ? "remove_address_modal_title" : "remove_recipient_modal_title"
    );
    const removeModalDescription = computed(
      () => activeItem.value.type === "addresses" ? "remove_address_modal_text" : "remove_recipient_modal_text"
    );
    const savedRecipients = computed(() => {
      var _a3;
      var _a2, _b, _c, _d, _e;
      return [
        {
          id: (_a2 = getUser.value) == null ? void 0 : _a2.id,
          first_name: (_b = getUser.value) == null ? void 0 : _b.name,
          last_name: (_c = getUser.value) == null ? void 0 : _c.lastname,
          phone: (_d = getUser.value) == null ? void 0 : _d.phone,
          isMyProfile: true
        },
        ...(_a3 = (_e = props.profile) == null ? void 0 : _e.recipients) != null ? _a3 : []
      ];
    });
    const createAddressName = (address2) => {
      var _a2;
      const countryName = ((_a2 = getUser.value) == null ? void 0 : _a2.is_partner_company_employee) ? `${address2.country_name}, ` : "";
      const zipCode = address2.zip_code ? `${address2.zip_code}, ` : "";
      const apartmentNumber = address2.apartment_number ? `, ${address2.apartment_number}` : "";
      return `${countryName}${zipCode} ${address2.city_name}, ${i18n.t(
        "short_street"
      )} ${address2.street}, ${address2.house_number}${apartmentNumber}`;
    };
    const createRecipientName = (recipient) => {
      const firstName = (recipient == null ? void 0 : recipient.first_name) || recipient.name || "";
      const lastName = (recipient == null ? void 0 : recipient.last_name) || recipient.lastname || "";
      const phone = (recipient == null ? void 0 : recipient.phone) ? `| ${recipient.phone}` : "";
      return `${firstName} ${lastName} ${phone}`;
    };
    const handleOpenRemoveModal = () => {
      isEditModalOpened.value = false;
      isRemoveModalOpened.value = true;
      removeEmptyDataModal.value = true;
    };
    const updateProfileState = ($event) => {
      var _a2;
      newProfile.value = $event;
      if ((_a2 = $event.addresses) == null ? void 0 : _a2.length) {
        address.value = $event.addresses.find((el) => el.is_primary);
      }
    };
    if (newProfile.value.addresses) {
      address.value = mainUserAddress.value;
    }
    watch(
      () => props.tab,
      () => {
        newProfile.value = { ...props.profile };
      }
    );
    watch(
      () => removeEmptyDataModal.value,
      (value) => {
        if (!value) {
          isEditModalOpened.value = true;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      const _component_RemoveModal = __nuxt_component_1$1;
      const _component_EditModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-address" }, _attrs))} data-v-a850370f><div class="profile-address_content-wrapper" data-v-a850370f><span class="profile-address_title" data-v-a850370f>${ssrInterpolate(_ctx.$t("saved_delivery_addresses"))}</span>`);
      if (__props.profile.addresses.length) {
        _push(`<div class="profile-address_content" data-v-a850370f><!--[-->`);
        ssrRenderList(__props.profile.addresses, (address2, index2) => {
          _push(`<div class="profile-address_item" data-v-a850370f><div class="profile-address_item-header" data-v-a850370f>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "shippingBoldIcon",
            class: "profile-address_item-icon"
          }, null, _parent));
          _push(`<span class="profile-address_item-title" data-v-a850370f>${ssrInterpolate(_ctx.$t("shipping"))}</span></div><p class="profile-address_item-info" data-v-a850370f>${ssrInterpolate(createAddressName(address2))}</p><div class="profile-address_item-actions" data-v-a850370f><button class="profile-address_item-button" data-v-a850370f>${ssrInterpolate(_ctx.$t("remove"))}</button><button class="profile-address_item-button" data-v-a850370f>${ssrInterpolate(_ctx.$t("edit"))}</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="profile-address_empty-state" data-v-a850370f>${ssrInterpolate(_ctx.$t("no_data_for_address"))}</p>`);
      }
      _push(`</div><div class="profile-address_content-wrapper" data-v-a850370f><span class="profile-address_title" data-v-a850370f>${ssrInterpolate(_ctx.$t("recipient_data"))}</span>`);
      if (unref(savedRecipients).length) {
        _push(`<div class="profile-address_content" data-v-a850370f><!--[-->`);
        ssrRenderList(unref(savedRecipients), (recipient, index2) => {
          _push(`<div class="profile-address_item" data-v-a850370f><div class="profile-address_item-header" data-v-a850370f>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "loginIcon",
            class: "profile-address_item-icon"
          }, null, _parent));
          _push(`<span class="profile-address_item-title" data-v-a850370f>${ssrInterpolate(_ctx.$t("recipient_data"))}</span></div><p class="profile-address_item-info" data-v-a850370f>${ssrInterpolate(createRecipientName(recipient))}</p>`);
          if (!recipient.isMyProfile) {
            _push(`<div class="profile-address_item-actions" data-v-a850370f><button class="profile-address_item-button" data-v-a850370f>${ssrInterpolate(_ctx.$t("remove"))}</button><button class="profile-address_item-button" data-v-a850370f>${ssrInterpolate(_ctx.$t("edit"))}</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="profile-address_empty-state" data-v-a850370f>${ssrInterpolate(_ctx.$t("no_data_for_address"))}</p>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_RemoveModal, {
        "remove-empty-data-modal": unref(removeEmptyDataModal),
        "onUpdate:removeEmptyDataModal": ($event) => isRef(removeEmptyDataModal) ? removeEmptyDataModal.value = $event : null,
        "is-remove-modal-opened": unref(isRemoveModalOpened),
        title: unref(removeModalTitle),
        description: unref(removeModalDescription),
        "active-item": unref(activeItem),
        profile: unref(newProfile),
        onUpdate: updateProfileState,
        onClose: ($event) => isRemoveModalOpened.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_EditModal, {
        "is-edit-modal-opened": unref(isEditModalOpened),
        "active-item": unref(activeItem),
        profile: unref(newProfile),
        title: "editing_data",
        onUpdate: updateProfileState,
        onOpenDeleteModal: handleOpenRemoveModal,
        onClose: ($event) => isEditModalOpened.value = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-address/profile-address.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProfileAddress = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a850370f"]]);
const _sfc_main$3 = defineComponent({
  name: "ProfileTabTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-tab-title" }, _attrs))} data-v-0c8ea344><span class="text-subtitle-3 pr-5 mr-auto" data-v-0c8ea344>${ssrInterpolate(_ctx.title)}</span>`);
  if (_ctx.buttonText || _ctx.icon) {
    _push(`<button class="profile-tab-title__btn ml-auto" data-v-0c8ea344>`);
    if (_ctx.icon) {
      _push(ssrRenderComponent(_component_Icon, {
        icon: _ctx.icon,
        class: { "mr-2": _ctx.buttonText }
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.buttonText) {
      _push(`<span class="text-subtitle-3" data-v-0c8ea344>${ssrInterpolate(_ctx.buttonText)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-tab-title/profile-tab-title.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0c8ea344"]]);
const _sfc_main$2 = defineComponent({
  name: "ProfileOptions",
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      default: null
    },
    view: {
      type: String,
      required: true
    },
    optionsKey: {
      type: Number,
      default: 0
    },
    profile: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { setUser } = useUserStore();
    const activeOption = ref(props.value);
    const isPaymentView = ref(props.view === "payment");
    const profile = ref(props.profile);
    const thisActive = computed(() => {
      var _a;
      return (_a = props.value) == null ? void 0 : _a.id;
    });
    watch(
      () => props.optionsKey,
      () => {
        activeOption.value = { ...props.value };
      }
    );
    watch(activeOption, (value) => {
      profile.value = { ...props.profile };
      const newOptions = ref(props.options);
      for (let i = 0; i < profile.value.addresses.length; i++) {
        profile.value.addresses[i].is_primary = false;
        if (profile.value.addresses[i].id === value.id) {
          profile.value.addresses[i].is_primary = true;
        }
      }
      for (let j = 0; j < newOptions.value.length; j++) {
        newOptions.value[j].is_primary = false;
        if (newOptions.value[j].id === value.id) {
          newOptions.value[j].is_primary = true;
        }
      }
      setUser(profile.value);
      emit("onChangeDeliveryAdress", activeOption.value);
    });
    return {
      activeOption,
      isPaymentView,
      thisActive
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiRadio = __nuxt_component_0$2;
  const _component_Icon = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    key: _ctx.optionsKey,
    class: "profile-card"
  }, _attrs))} data-v-14d3b99e><div class="profile-card-inner" data-v-14d3b99e><!--[-->`);
  ssrRenderList(_ctx.options, (option, index2) => {
    _push(ssrRenderComponent(_component_UiRadio, {
      key: index2,
      modelValue: _ctx.activeOption,
      "onUpdate:modelValue": ($event) => _ctx.activeOption = $event,
      disabled: _ctx.disabled,
      value: option,
      onChange: ($event) => _ctx.$emit("input", option)
    }, {
      label: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="profile-card-label" data-v-14d3b99e${_scopeId}><h3 class="${ssrRenderClass([{ isActive: option.is_primary }, "text-subtitle-3"])}" data-v-14d3b99e${_scopeId}>${ssrInterpolate(option.address_name)}</h3><div class="mt-4" data-v-14d3b99e${_scopeId}>`);
          if (option.first_name && option.last_name) {
            _push2(`<p class="text-body-2 mb-0" data-v-14d3b99e${_scopeId}>${ssrInterpolate(option.first_name)} ${ssrInterpolate(option.last_name)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="mt-3" data-v-14d3b99e${_scopeId}>`);
          if (option.phone) {
            _push2(`<p class="text-body-3 mb-0 text-address" data-v-14d3b99e${_scopeId}>${ssrInterpolate(option.phone)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
          if (option.email) {
            _push2(`<div class="mt-3" data-v-14d3b99e${_scopeId}><p class="text-body-3 mb-0 text-address" data-v-14d3b99e${_scopeId}>${ssrInterpolate(option.email)}</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<h5 class="${ssrRenderClass([{ "mt-1": option.first_name }, "text-address subtitle font-weight-regular mb-0"])}" data-v-14d3b99e${_scopeId}>${ssrInterpolate(option.zip_code ? `${option.zip_code},` : "")} ${ssrInterpolate(option.city ? `${option.city},` : "")}${ssrInterpolate(option.street ? `${option.street},` : "")} ${ssrInterpolate(option.house_number)}${ssrInterpolate(option.apartment_number ? `-${option.apartment_number}` : "")}</h5></div></div>`);
        } else {
          return [
            createVNode("div", { class: "profile-card-label" }, [
              createVNode("h3", {
                class: ["text-subtitle-3", { isActive: option.is_primary }]
              }, toDisplayString(option.address_name), 3),
              createVNode("div", { class: "mt-4" }, [
                option.first_name && option.last_name ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-body-2 mb-0"
                }, toDisplayString(option.first_name) + " " + toDisplayString(option.last_name), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "mt-3" }, [
                  option.phone ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-body-3 mb-0 text-address"
                  }, toDisplayString(option.phone), 1)) : createCommentVNode("", true)
                ]),
                option.email ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mt-3"
                }, [
                  createVNode("p", { class: "text-body-3 mb-0 text-address" }, toDisplayString(option.email), 1)
                ])) : createCommentVNode("", true),
                createVNode("h5", {
                  class: ["text-address subtitle font-weight-regular mb-0", { "mt-1": option.first_name }]
                }, toDisplayString(option.zip_code ? `${option.zip_code},` : "") + " " + toDisplayString(option.city ? `${option.city},` : "") + toDisplayString(option.street ? `${option.street},` : "") + " " + toDisplayString(option.house_number) + toDisplayString(option.apartment_number ? `-${option.apartment_number}` : ""), 3)
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--><div class="profile-card-actions" data-v-14d3b99e>`);
  if (!_ctx.isPaymentView) {
    _push(`<button class="profile-card-action-btn mr-4" data-v-14d3b99e>`);
    _push(ssrRenderComponent(_component_Icon, { icon: "edit" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="profile-card-action-btn" data-v-14d3b99e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "close" }, null, _parent));
  _push(`</button></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-options/profile-options.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-14d3b99e"]]);
const _sfc_main$1 = defineComponent({
  name: "ProfilePayment",
  components: {
    ProfileTabTitle: __nuxt_component_0,
    ProfileOptions: __nuxt_component_1
  },
  setup() {
    const addressOptions = ref([
      {
        id: 1,
        title: "My salary bank",
        method: "visa"
      },
      {
        id: 2,
        title: "Online payment",
        method: "Dotpay"
      }
    ]);
    const address = ref(addressOptions.value[0]);
    return {
      addressOptions,
      address
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/profile-page/components/profile-payment/profile-payment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const menuItems = shallowRef([
      { tab: "personal_data_tab_name", component: ProfilePersonalData },
      { tab: "address_tab_name", component: ProfileAddress }
      // { tab: 'Payment', component: ProfilePayment },
    ]);
    const selectedTabIndex = ref(0);
    const { saveAccountData, errorData, clearErrorData } = useProfile();
    const clearError = () => {
      clearErrorData();
    };
    const patchAccountData = ($event) => {
      const result = { ...props.profile };
      Object.keys($event).forEach((key) => {
        result[key] = $event[key];
      });
      saveAccountData(result);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabButtons = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-fd8e2d80>`);
      _push(ssrRenderComponent(_component_TabButtons, {
        modelValue: unref(selectedTabIndex),
        "onUpdate:modelValue": ($event) => isRef(selectedTabIndex) ? selectedTabIndex.value = $event : null,
        "menu-items": unref(menuItems)
      }, null, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(menuItems)[unref(selectedTabIndex)].component), {
        profile: __props.profile,
        "error-data": unref(errorData),
        tab: unref(selectedTabIndex),
        onSaveAccountData: patchAccountData,
        onBlur: clearError
      }, null), _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/profile/info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd8e2d80"]]);

export { index as default };
//# sourceMappingURL=index-CXd1aMVT.mjs.map
