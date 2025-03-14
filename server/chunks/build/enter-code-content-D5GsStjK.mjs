import { ref, computed, watch, mergeProps, unref, isRef, defineComponent, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, F as useUserStore, J as useAuth } from './server.mjs';
import { u as useFormLoader } from './useLoaderUtils-CiDWTT-C.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiOtp",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    errors: {},
    change: { type: Function },
    submit: { type: Function }
  },
  emits: ["change", "submit", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    ref(null);
    const numbers = computed(() => {
      if (!props.modelValue) {
        return ["", "", "", ""];
      }
      return [
        props.modelValue[0] || "",
        props.modelValue[1] || "",
        props.modelValue[2] || "",
        props.modelValue[3] || ""
      ];
    });
    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue.length >= 4) {
          emit("submit");
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[--><label class="${ssrRenderClass([{ error: (_a = _ctx.errors) == null ? void 0 : _a.length }, "ui-otp"])}" data-v-e17b4836><!--[-->`);
      ssrRenderList(unref(numbers), (number, index) => {
        _push(`<input${ssrIncludeBooleanAttr(index === 0) ? " autofocus" : ""} class="ui-otp_input" type="text"${ssrRenderAttr("value", number)} placeholder=" " data-v-e17b4836>`);
      });
      _push(`<!--]--></label>`);
      if ((_b = _ctx.errors) == null ? void 0 : _b.length) {
        _push(`<div class="ui-otp_errors" data-v-e17b4836><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span data-v-e17b4836>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiOtp/UiOtp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e17b4836"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4993%2018.3327C15.1017%2018.3327%2018.8327%2014.6017%2018.8327%209.99935C18.8327%205.39698%2015.1017%201.66602%2010.4993%201.66602C5.89698%201.66602%202.16602%205.39698%202.16602%209.99935C2.16602%2014.6017%205.89698%2018.3327%2010.4993%2018.3327Z'%20stroke='%23121212'%20stroke-opacity='0.74902'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M13%2013.3333L10.9883%2011.3217C10.6758%2011.0092%2010.5001%2010.5853%2010.5%2010.1433V5'%20stroke='%23121212'%20stroke-opacity='0.74902'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const timer = reactive({
  resendSms: []
});
const useTimerCountdown = () => {
  const sendAgainTimer = ref(60);
  let countdownTimer = null;
  const startCountdown = (timerData) => {
    countdownTimer = setInterval();
  };
  const getResendCodeTimer = (value) => computed(
    () => {
      var _a;
      return (_a = timer.resendSms.find((data) => data.phoneNumber === value)) != null ? _a : 0;
    }
  );
  const resetResendCodeTimer = (value) => {
    clearInterval(countdownTimer);
    timer.resendSms = timer.resendSms.filter(
      (data) => data.phoneNumber !== value
    );
  };
  const setResendCodeTimer = (phoneNumber, initialTime = sendAgainTimer.value) => {
    const existPhoneNumber = timer.resendSms.find(
      (usedSms) => usedSms.phoneNumber === phoneNumber
    );
    if (existPhoneNumber === void 0) {
      timer.resendSms.push({
        phoneNumber,
        timer: initialTime
      });
      timer.resendSms.find(
        (usedSms) => usedSms.phoneNumber === phoneNumber
      );
      startCountdown();
    } else if (existPhoneNumber.timer === 0) {
      existPhoneNumber.timer = initialTime;
      startCountdown();
    }
  };
  const canResendCode = (phoneNumber) => {
    var _a;
    return ((_a = getResendCodeTimer(phoneNumber).value) == null ? void 0 : _a.timer) === 0;
  };
  const startLocalTimer = (time = sendAgainTimer.value) => {
    sendAgainTimer.value = time;
    return new Promise((resolve) => {
      setInterval();
    });
  };
  const getLocalTimer = computed(() => sendAgainTimer.value);
  return {
    resetResendCodeTimer,
    setResendCodeTimer,
    getResendCodeTimer,
    startLocalTimer,
    canResendCode,
    getLocalTimer
  };
};
const _sfc_main = {
  __name: "enter-code-content",
  __ssrInlineRender: true,
  props: {
    loginValue: {
      type: String,
      required: true
    },
    code: {
      type: String,
      default: ""
    },
    deleteAccountType: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getUser } = useUserStore();
    const { signIn, deleteAccount } = useAuth();
    const { isLoading, startLoading, stopLoading } = useFormLoader();
    const { setResendCodeTimer, resetResendCodeTimer, getResendCodeTimer } = useTimerCountdown();
    const otp = ref(props.code);
    const errors = ref([]);
    const codeInputKey = ref(0);
    const savedLoginValue = computed(() => {
      if (!props.loginValue && !getUser.value) {
        return "";
      }
      return props.loginValue || getUser.value.email || getUser.value.phone;
    });
    const resendTimer = computed(
      () => {
        var _a;
        return (_a = getResendCodeTimer(props.loginValue).value) == null ? void 0 : _a.timer;
      }
    );
    const submit = async () => {
      var _a;
      errors.value = [];
      if (isLoading.value) {
        return;
      }
      startLoading();
      try {
        let res;
        if (props.deleteAccountType) {
          res = await deleteAccount(props.code);
        } else {
          res = await signIn({
            verification_code: props.code,
            login: props.loginValue
          });
        }
        if ((res == null ? void 0 : res.status) === "success" || ((_a = res == null ? void 0 : res.status) == null ? void 0 : _a.value) === "success") {
          emit("success");
        } else {
          emit("change", "");
          codeInputKey.value += 1;
          errors.value = res;
          otp.value = "";
          resetResendCodeTimer(props.loginValue);
        }
      } catch (e) {
        console.error(e);
      } finally {
        stopLoading();
      }
    };
    const changeCodeValue = (event) => {
      emit("change", event);
    };
    watch(
      () => props.loginValue,
      () => {
        setResendCodeTimer(props.loginValue);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiOtp = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "enter-code" }, _attrs))} data-v-c4578167><p class="enter-code_title" data-v-c4578167>${ssrInterpolate(_ctx.$t("enter_the_code"))}</p><p class="enter-code_text" data-v-c4578167>${ssrInterpolate(_ctx.$t("enter_the_code_sent_to"))} ${ssrInterpolate(unref(savedLoginValue))}</p><div class="enter-code_code-wrapper" data-v-c4578167>`);
      _push(ssrRenderComponent(_component_UiOtp, {
        key: unref(codeInputKey),
        modelValue: unref(otp),
        "onUpdate:modelValue": [($event) => isRef(otp) ? otp.value = $event : null, ($event) => _ctx.$emit("change", unref(otp))],
        errors: unref(errors),
        onChange: ($event) => changeCodeValue($event),
        onSubmit: ($event) => submit()
      }, null, _parent));
      _push(`</div>`);
      if (unref(resendTimer)) {
        _push(`<p class="enter-code_code-description enter-code_timer" data-v-c4578167><img${ssrRenderAttr("src", _imports_0)} data-v-c4578167> ${ssrInterpolate(_ctx.$t("resending_after"))} 00:${ssrInterpolate(unref(resendTimer) < 10 ? `0${unref(resendTimer)}` : unref(resendTimer))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(resendTimer)) {
        _push(`<div class="enter-code_code-description enter-code_repeat-code" data-v-c4578167>${ssrInterpolate(_ctx.$t("did_not_get_a_code"))}? <button class="enter-code_resend" data-v-c4578167>${ssrInterpolate(_ctx.$t("send_again"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals-content/enter-code-content/enter-code-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4578167"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=enter-code-content-D5GsStjK.mjs.map
