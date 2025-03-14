import { _ as __nuxt_component_0 } from './ui-container-DmK1AhQu.mjs';
import __nuxt_component_2 from './app-logo-CTrjGh4b.mjs';
import { _ as _export_sfc, k as __nuxt_component_6, r as useNuxtApp, J as useAuth, C as useRouter, u as useRoute } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './ui-preloader-C4Bi7ENY.mjs';
import { withCtx, createTextVNode, toDisplayString, createBlock, openBlock, createVNode, Fragment, ref, computed, watch, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = defineComponent({
  name: "CheckoutPaymentRedirectForm",
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  setup() {
    const paymentForm = ref(null);
    return { paymentForm };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({
    ref: "paymentForm",
    method: _ctx.payment.method,
    action: _ctx.payment.url
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.payment.form_data, (value, name) => {
    _push(`<input type="hidden"${ssrRenderAttr("name", name)}${ssrRenderAttr("value", value)}>`);
  });
  _push(`<!--]--></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/checkout-page/components/checkout-payment-redirect-form/checkout-payment-redirect-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    CheckoutPaymentRedirectForm: __nuxt_component_4
  },
  setup() {
    useNuxtApp();
    useAuth();
    useRouter();
    useRoute();
    const submitPaymentForm = ref(null);
    const resData = ref(null);
    const counter = ref(6);
    const interval = ref(null);
    const isButtonDisabled = ref(false);
    const paymentType = computed(() => {
      var _a, _b;
      return (_b = (_a = resData.value) == null ? void 0 : _a.payment) == null ? void 0 : _b.type;
    });
    const goToPaymentPage = () => {
      clearInterval(interval.value);
      if (!resData.value || !paymentType.value) {
        return;
      }
      isButtonDisabled.value = true;
      if (paymentType.value === "submit_form") {
        submitPaymentForm.value = resData.value.payment;
      }
      if (paymentType.value === "redirect") {
        (void 0).location.replace(resData.value.payment.url);
      }
    };
    watch(counter, () => {
      if (!counter.value) {
        goToPaymentPage();
      }
    });
    return {
      counter,
      paymentType,
      submitPaymentForm,
      goToPaymentPage,
      isButtonDisabled,
      resData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiContainer = __nuxt_component_0;
  const _component_AppLogo = __nuxt_component_2;
  const _component_Button = __nuxt_component_6;
  const _component_UiPreloader = __nuxt_component_2$1;
  const _component_CheckoutPaymentRedirectForm = __nuxt_component_4;
  _push(`<!--[--><div class="redirect-wrapper" data-v-e9ffac8b>`);
  _push(ssrRenderComponent(_component_UiContainer, { class: "d-flex justify-center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.counter <= 5) {
          _push2(`<div class="redirect-inner" data-v-e9ffac8b${_scopeId}>`);
          _push2(ssrRenderComponent(_component_AppLogo, { class: "redirect-logo" }, null, _parent2, _scopeId));
          _push2(`<span class="text-subtitle-1 mb-4" data-v-e9ffac8b${_scopeId}>${ssrInterpolate(_ctx.$t("transition_to_payment"))}</span><span class="${ssrRenderClass([{ "text--darken-5": !$setup.counter }, "text-body-2 mb-7 gray--text gray--darken-1"])}" data-v-e9ffac8b${_scopeId}>`);
          if ($setup.counter && !$setup.isButtonDisabled) {
            _push2(`<!--[-->${ssrInterpolate(`${_ctx.$t("redirect_in")} ${$setup.counter} ${_ctx.$t("seconds")}`)}<!--]-->`);
          } else {
            _push2(`<!--[-->${ssrInterpolate(`${_ctx.$t("redirecting")}...`)}<!--]-->`);
          }
          _push2(`</span>`);
          _push2(ssrRenderComponent(_component_Button, {
            disabled: !$setup.counter || $setup.isButtonDisabled,
            "full-width": "",
            onClick: $setup.goToPaymentPage
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("go_to_payment"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("go_to_payment")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(ssrRenderComponent(_component_UiPreloader, null, null, _parent2, _scopeId));
        }
      } else {
        return [
          $setup.counter <= 5 ? (openBlock(), createBlock("div", {
            key: 0,
            class: "redirect-inner"
          }, [
            createVNode(_component_AppLogo, { class: "redirect-logo" }),
            createVNode("span", { class: "text-subtitle-1 mb-4" }, toDisplayString(_ctx.$t("transition_to_payment")), 1),
            createVNode("span", {
              class: ["text-body-2 mb-7 gray--text gray--darken-1", { "text--darken-5": !$setup.counter }]
            }, [
              $setup.counter && !$setup.isButtonDisabled ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(`${_ctx.$t("redirect_in")} ${$setup.counter} ${_ctx.$t("seconds")}`), 1)
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(`${_ctx.$t("redirecting")}...`), 1)
              ], 64))
            ], 2),
            createVNode(_component_Button, {
              disabled: !$setup.counter || $setup.isButtonDisabled,
              "full-width": "",
              onClick: $setup.goToPaymentPage
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("go_to_payment")), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])) : (openBlock(), createBlock(_component_UiPreloader, { key: 1 }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($setup.submitPaymentForm) {
    _push(ssrRenderComponent(_component_CheckoutPaymentRedirectForm, { payment: $setup.submitPaymentForm }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/checkout/_id/redirect/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e9ffac8b"]]);

export { index as default };
//# sourceMappingURL=index-KdyqFvI-.mjs.map
