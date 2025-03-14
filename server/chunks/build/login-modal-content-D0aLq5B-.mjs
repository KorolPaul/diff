import { defineComponent, mergeProps, inject, ref, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, reactive, computed, createTextVNode, toRef, watch, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { e as useApi, P as PUBLIC_PREFIX, _ as _export_sfc, r as useNuxtApp, C as useRouter, u as useRoute, l as useGtm, a as useI18n, J as useAuth, k as __nuxt_component_6 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Form-ZGQdgBok.mjs';
import { u as useFormUtils, _ as __nuxt_component_4 } from './useFormUtils-HyQgFuda.mjs';
import { _ as _sfc_main$8 } from './TextInput-HaUa076w.mjs';
import useVuelidate from '@vuelidate/core';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';
import { _ as _sfc_main$9 } from './personal-data-text-kJ244n-x.mjs';
import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_2$1 } from './enter-code-content-D5GsStjK.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "UiTabsWindow",
  __ssrInlineRender: true,
  props: {
    activeIndex: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui-tabs-window",
        "data-index": _ctx.activeIndex + 1
      }, _attrs))} data-v-89d93d02>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiTabsWindow/UiTabsWindow.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-89d93d02"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ui-tabs-window_item" }, _attrs))} data-v-4814852f>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiTabsWindow/UiTabsWindowItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4814852f"]]);
const _sfc_main$5 = {
  __name: "login-text-field",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ""
    },
    dataAttributes: {
      type: Object,
      default: () => ({})
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["input", "keyup"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { pushGtmEvent } = useGtm();
    const emit = __emit;
    const isShowLoginModal = inject("isShowLoginModal");
    const phoneRef = ref(null);
    const emailRef = ref(null);
    const isPhoneType = computed(() => {
      if ((props == null ? void 0 : props.type) === "email") {
        return false;
      }
      if ((props == null ? void 0 : props.type) === "phone") {
        return true;
      }
      const checkIsNumber = (string) => /^\d+$/.test(string);
      const { value } = props;
      return checkIsNumber(value[0]) || checkIsNumber(value[1]) || props.value[0] === "+";
    });
    const computedLabel = computed(() => {
      if (!props.value && !props.type) {
        return "phone_or_email";
      }
      return isPhoneType.value ? "phone_number" : "email_address";
    });
    const {
      defaultRequiredMessage,
      defaultPhoneRequiredMessage,
      emailPattern,
      getErrors
    } = useFormUtils();
    const handleBlur = (fieldName) => {
      var _a, _b;
      (_b = (_a = v$.value) == null ? void 0 : _a[fieldName]) == null ? void 0 : _b.$touch();
      if (fieldName === "phone" && phoneErrors.value.length === 0) {
        pushGtmEvent("phoneFilled", loginValue.value);
      }
      if (fieldName === "email" && phoneErrors.value.length === 0) {
        pushGtmEvent("emailFilled", loginValue.value);
      }
    };
    const formRules = computed(() => ({
      email: isPhoneType.value ? {} : { defaultRequiredMessage, emailPattern },
      phone: isPhoneType.value ? { defaultRequiredMessage, defaultPhoneRequiredMessage } : {}
    }));
    const v$ = useVuelidate(formRules, {
      email: toRef(props, "value"),
      phone: toRef(props, "value")
    });
    const emailErrors = computed(() => getErrors(v$.value.email));
    const phoneErrors = computed(() => getErrors(v$.value.phone));
    const loginValue = computed({
      get() {
        return props.value || "";
      },
      set(value) {
        emit("input", value);
      }
    });
    watch(isPhoneType, () => {
      if (isPhoneType.value) {
        setTimeout(() => {
          var _a;
          return (_a = phoneRef == null ? void 0 : phoneRef.value) == null ? void 0 : _a.$el.focus();
        });
      } else {
        setTimeout(() => {
          var _a;
          return (_a = emailRef == null ? void 0 : emailRef.value) == null ? void 0 : _a.$el.focus();
        });
      }
    });
    watch(
      () => isShowLoginModal == null ? void 0 : isShowLoginModal.value,
      () => {
        var _a, _b, _c, _d;
        if (!(isShowLoginModal == null ? void 0 : isShowLoginModal.value)) {
          (_b = (_a = v$.value) == null ? void 0 : _a.phone) == null ? void 0 : _b.$reset();
          (_d = (_c = v$.value) == null ? void 0 : _c.email) == null ? void 0 : _d.$reset();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhoneInput = __nuxt_component_4;
      const _component_TextInput = _sfc_main$8;
      if (unref(isPhoneType)) {
        _push(ssrRenderComponent(_component_PhoneInput, mergeProps({
          ref_key: "phoneRef",
          ref: phoneRef,
          modelValue: unref(loginValue),
          "onUpdate:modelValue": ($event) => isRef(loginValue) ? loginValue.value = $event : null,
          disabled: __props.disabled,
          errors: [...__props.errorMessages, ...unref(phoneErrors)],
          label: unref(computedLabel),
          "data-attributes": __props.dataAttributes,
          required: "",
          onBlur: ($event) => handleBlur("phone"),
          onKeyup: (event) => _ctx.$emit("keyup", event)
        }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(_component_TextInput, mergeProps({
          ref_key: "emailRef",
          ref: emailRef,
          modelValue: unref(loginValue),
          "onUpdate:modelValue": ($event) => isRef(loginValue) ? loginValue.value = $event : null,
          disabled: __props.disabled,
          errors: [...__props.errorMessages, ...unref(emailErrors)],
          label: unref(computedLabel),
          required: "",
          "data-attributes": __props.dataAttributes,
          type: "email",
          onBlur: ($event) => handleBlur("email"),
          onKeyup: (event) => _ctx.$emit("keyup", event)
        }, _attrs), null, _parent));
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/inputs/login-text-field/login-text-field.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = defineComponent({
  name: "AppFormErrors",
  props: {
    errors: {
      type: Array,
      default: null
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.errors) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-form-errors" }, _attrs))}><!--[-->`);
    ssrRenderList(_ctx.errors, (error, index) => {
      _push(`<div>${ssrInterpolate(_ctx.$t(error))}</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/forms/app-form-errors/app-form-errors.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppFormErrors = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "login-form",
  __ssrInlineRender: true,
  props: {
    defaultForm: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["change", "failed", "success", "change:loading"],
  setup(__props, { emit: __emit }) {
    const initialForm = {
      login: "",
      loginType: "email",
      nda: false,
      remember: true,
      personalAgreement: false,
      name: ""
    };
    const props = __props;
    const isRegistrationMode = ref(false);
    const emit = __emit;
    const { pushGtmEvent } = useGtm();
    const { locale } = useI18n();
    const responseErrors = ref([]);
    const loginErrors = ref([]);
    const { sendCode: send2, signUp } = useAuth();
    const { isLoading: isFormLoading, startLoading, stopLoading } = useFormLoader();
    const formData = reactive({
      ...Object.assign(initialForm, props.defaultForm)
    });
    const { getErrors, defaultRequiredMessage } = useFormUtils();
    const formRules = computed(() => ({
      name: isRegistrationMode.value ? { defaultRequiredMessage } : {}
    }));
    const v$ = useVuelidate(formRules, formData, {
      $stopPropagation: true
    });
    function handleNameBlur() {
      v$.value.name.$touch();
      pushGtmEvent("nameFilled", formData.name);
    }
    const isValidForm = () => {
      var _a, _b;
      (_a = v$.value) == null ? void 0 : _a.$touch();
      return !((_b = v$.value) == null ? void 0 : _b.$invalid);
    };
    const nameErrors = computed(() => getErrors(v$.value.name));
    const setFormErrors = (error) => {
      if (error.name === "email" || error.name === "login") {
        loginErrors.value.push(error.message);
      }
      if (error.length === 0) {
        loginErrors.value = [];
        nameErrors.value = [];
      }
    };
    const setResponseError = (errors) => {
      responseErrors.value = [];
      errors.forEach((error) => {
        if (error.includes("You don't have an account") || error.includes("Phone is not supported")) {
          isRegistrationMode.value = true;
        }
        if (typeof error === "object") {
          setFormErrors(error);
        } else {
          responseErrors.value.push(error);
        }
      });
    };
    const onChangeLogin = (value) => {
      if (typeof value !== "string") {
        return;
      }
      if (value.includes("+")) {
        formData.login = value.replaceAll(/[- ]/g, "");
      } else {
        formData.login = value;
      }
      setResponseError([]);
      setFormErrors([]);
    };
    const sendCode = async () => {
      var _a;
      if (isFormLoading.value) {
        return;
      }
      if (isValidForm()) {
        startLoading();
        emit("change:loading", true);
        const res = await send2(formData.login);
        if (((_a = res == null ? void 0 : res.status) == null ? void 0 : _a.value) === "success") {
          emit("success", formData);
        } else {
          emit("failed", formData);
          setResponseError(res);
        }
        stopLoading();
        emit("change:loading", false);
      }
    };
    const handleSignUp = async () => {
      var _a, _b, _c;
      if (isFormLoading.value) {
        return;
      }
      startLoading();
      emit("change:loading", true);
      const signUpForm = {
        name: formData.name,
        phone: formData.phone,
        country: formData.country,
        language: locale,
        login: formData.login
      };
      const signUpResult = await signUp(signUpForm);
      stopLoading();
      emit("change:loading", false);
      if (signUpResult.status.value === "success") {
        pushGtmEvent("registerNewUser");
        emit("success", formData);
      } else {
        setResponseError((_c = (_b = (_a = signUpResult.error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.errors) == null ? void 0 : _c.name);
        emit("failed", formData);
      }
    };
    function handleLoginKeyup(e) {
      e.preventDefault();
      if (e.key === "Enter") {
        sendCode();
      }
    }
    function handleNameKeyup(e) {
      e.preventDefault();
      if (e.key === "Enter") {
        handleSignUp();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0$1;
      const _component_LoginTextField = _sfc_main$5;
      const _component_TextInput = _sfc_main$8;
      const _component_AppFormErrors = AppFormErrors;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-form" }, _attrs))} data-v-c22470b6>`);
      _push(ssrRenderComponent(_component_Form, { class: "login-form_fields" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LoginTextField, {
              disabled: unref(isFormLoading),
              value: unref(formData).login,
              "error-messages": unref(loginErrors),
              "data-attributes": { field: unref(formData).loginType },
              onInput: onChangeLogin,
              onKeyup: handleLoginKeyup
            }, null, _parent2, _scopeId));
            if (unref(isRegistrationMode)) {
              _push2(ssrRenderComponent(_component_TextInput, {
                modelValue: unref(formData).name,
                "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                label: _ctx.$t("name"),
                errors: unref(nameErrors),
                name: "name",
                required: "",
                onBlur: handleNameBlur,
                onKeyup: handleNameKeyup
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LoginTextField, {
                disabled: unref(isFormLoading),
                value: unref(formData).login,
                "error-messages": unref(loginErrors),
                "data-attributes": { field: unref(formData).loginType },
                onInput: onChangeLogin,
                onKeyup: handleLoginKeyup
              }, null, 8, ["disabled", "value", "error-messages", "data-attributes"]),
              unref(isRegistrationMode) ? (openBlock(), createBlock(_component_TextInput, {
                key: 0,
                modelValue: unref(formData).name,
                "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                label: _ctx.$t("name"),
                errors: unref(nameErrors),
                name: "name",
                required: "",
                onBlur: handleNameBlur,
                onKeyup: handleNameKeyup
              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "errors"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(responseErrors).length > 0 && !unref(isRegistrationMode)) {
        _push(ssrRenderComponent(_component_AppFormErrors, {
          errors: unref(responseErrors),
          class: "login-form_errors"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="login-form_buttons" data-v-c22470b6>`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: unref(isFormLoading),
        loading: unref(isFormLoading),
        fullwidth: "",
        class: "login-form_submit",
        onClick: ($event) => unref(isRegistrationMode) ? handleSignUp() : sendCode()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("next"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("next")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isRegistrationMode)) {
        _push(`<div class="login-form_back" data-v-c22470b6>${ssrInterpolate(_ctx.$t("already_have_an_account"))} <button class="login-form_back-button" data-v-c22470b6>${ssrInterpolate(_ctx.$t("login"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/forms/login-form/login-form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c22470b6"]]);
const _sfc_main$2 = {
  __name: "auth-social-list",
  __ssrInlineRender: true,
  props: {
    authProviders: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const socialList = [
      {
        icon: "authApple",
        id: "apple",
        title: "Apple"
      },
      {
        icon: "authGoogle",
        id: "google",
        title: "Google"
      },
      {
        icon: "authFacebook",
        id: "facebook",
        title: "Facebook"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      if (socialList) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-social-list" }, _attrs))}><!--[-->`);
        ssrRenderList(socialList, (socialItem) => {
          _push(`<!--[-->`);
          if (__props.authProviders[socialItem.id]) {
            _push(`<div><button class="auth-social-list_item" type="button">`);
            _push(ssrRenderComponent(_component_Icon, {
              class: "auth-social-list_item-icon",
              icon: socialItem.icon
            }, null, _parent));
            _push(`</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/lists/auth-social-list/auth-social-list.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const resource = `${PUBLIC_PREFIX}site-info`;
const SiteInfoApiService = {
  async getSiteInfo() {
    const { get } = useApi();
    const { data } = await get(`${resource}`);
    return {
      data: data.value
    };
  }
};
const _sfc_main$1 = {
  __name: "auth-modal-content",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const authProviders = ref({});
    SiteInfoApiService.getSiteInfo().then((res) => {
      authProviders.value = res.data.data.auth_providers;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PersonalDataText = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-modal-content" }, _attrs))} data-v-7592152b>`);
      if (Object.values(unref(authProviders)).includes(true)) {
        _push(`<div class="auth-modal-content_divider" data-v-7592152b>${ssrInterpolate(_ctx.$t("or"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "auth-modal-content_social",
        "auth-providers": unref(authProviders)
      }, null, _parent));
      _push(`<div class="auth-modal-content_personal-data" data-v-7592152b>`);
      _push(ssrRenderComponent(_component_PersonalDataText, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals-content/auth-modal-content/auth-modal-content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7592152b"]]);
const _sfc_main = {
  __name: "login-modal-content",
  __ssrInlineRender: true,
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    signupDisabled: {
      type: Boolean,
      default: false
    },
    codeStep: {
      type: Boolean,
      default: false
    },
    showChangeMessage: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const app = useNuxtApp();
    const router = useRouter();
    const closeModal = inject("closeModal");
    const currentTab = ref(props.codeStep ? 1 : 0);
    const loginValue = ref(((_a = props.form) == null ? void 0 : _a.login) ? props.form.login : "");
    const code = ref("");
    const remember = ref(((_b = props.form) == null ? void 0 : _b.remember) ? props.form.remember : false);
    const route = useRoute();
    const checkPageName = (val) => {
      var _a2;
      return !!((_a2 = route == null ? void 0 : route.name) == null ? void 0 : _a2.includes(val));
    };
    const completeFirstStep = (event) => {
      var _a2;
      loginValue.value = (_a2 = event.login) != null ? _a2 : "";
      remember.value = event.remember;
      code.value = "";
      if (currentTab.value < 1) {
        currentTab.value += 1;
      }
    };
    const completeLastStep = () => {
      closeModal();
      if (!checkPageName("login")) {
        return;
      }
      router.push(
        app.$localeRoute({
          path: "/"
        })
      );
    };
    const changeCode = (event) => {
      if (typeof event !== "string") {
        return;
      }
      code.value = event;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTabsWindow = __nuxt_component_0;
      const _component_UiTabsWindowItem = __nuxt_component_1;
      const _component_LoginForm = __nuxt_component_2;
      const _component_AuthModalContent = __nuxt_component_3;
      const _component_EnterCodeContent = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-modal" }, _attrs))} data-v-cc33b44c>`);
      _push(ssrRenderComponent(_component_UiTabsWindow, { "active-index": unref(currentTab) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsWindowItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="login-modal_tab-item" data-v-cc33b44c${_scopeId2}><p class="login-modal_title" data-v-cc33b44c${_scopeId2}>${ssrInterpolate(__props.signupDisabled ? _ctx.$t("login") : _ctx.$t("login_or_register"))}</p>`);
                  _push3(ssrRenderComponent(_component_LoginForm, {
                    "default-form": __props.form,
                    "button-width": "100%",
                    onSuccess: ($event) => completeFirstStep($event)
                  }, null, _parent3, _scopeId2));
                  if (!__props.signupDisabled) {
                    _push3(ssrRenderComponent(_component_AuthModalContent, { mode: "login" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "login-modal_tab-item" }, [
                      createVNode("p", { class: "login-modal_title" }, toDisplayString(__props.signupDisabled ? _ctx.$t("login") : _ctx.$t("login_or_register")), 1),
                      createVNode(_component_LoginForm, {
                        "default-form": __props.form,
                        "button-width": "100%",
                        onSuccess: ($event) => completeFirstStep($event)
                      }, null, 8, ["default-form", "onSuccess"]),
                      !__props.signupDisabled ? (openBlock(), createBlock(_component_AuthModalContent, {
                        key: 0,
                        mode: "login"
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsWindowItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_EnterCodeContent, {
                    "login-value": unref(loginValue),
                    code: unref(code),
                    remember: unref(remember),
                    "show-change-message": __props.showChangeMessage,
                    onChange: ($event) => changeCode($event),
                    onSuccess: completeLastStep
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_EnterCodeContent, {
                      "login-value": unref(loginValue),
                      code: unref(code),
                      remember: unref(remember),
                      "show-change-message": __props.showChangeMessage,
                      onChange: ($event) => changeCode($event),
                      onSuccess: completeLastStep
                    }, null, 8, ["login-value", "code", "remember", "show-change-message", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsWindowItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "login-modal_tab-item" }, [
                    createVNode("p", { class: "login-modal_title" }, toDisplayString(__props.signupDisabled ? _ctx.$t("login") : _ctx.$t("login_or_register")), 1),
                    createVNode(_component_LoginForm, {
                      "default-form": __props.form,
                      "button-width": "100%",
                      onSuccess: ($event) => completeFirstStep($event)
                    }, null, 8, ["default-form", "onSuccess"]),
                    !__props.signupDisabled ? (openBlock(), createBlock(_component_AuthModalContent, {
                      key: 0,
                      mode: "login"
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsWindowItem, null, {
                default: withCtx(() => [
                  createVNode(_component_EnterCodeContent, {
                    "login-value": unref(loginValue),
                    code: unref(code),
                    remember: unref(remember),
                    "show-change-message": __props.showChangeMessage,
                    onChange: ($event) => changeCode($event),
                    onSuccess: completeLastStep
                  }, null, 8, ["login-value", "code", "remember", "show-change-message", "onChange"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals-content/login-modal-content/login-modal-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginModalContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc33b44c"]]);

export { AppFormErrors as A, LoginModalContent as L, SiteInfoApiService as S };
//# sourceMappingURL=login-modal-content-D0aLq5B-.mjs.map
