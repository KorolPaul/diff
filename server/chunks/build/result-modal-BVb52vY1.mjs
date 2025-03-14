import { _ as _sfc_main$1 } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { k as __nuxt_component_6 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "result-modal",
  __ssrInlineRender: true,
  props: {
    success: {
      type: Boolean,
      default: false
    },
    successTitle: {
      type: String,
      default: ""
    },
    failureTitle: {
      type: String,
      default: "somthing_went_wrong"
    }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const closeAll = () => {
      emit("input", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({ ..._ctx.$attrs }, { "max-width": 808 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="result-modal"${_scopeId}><div class="result-modal_icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              icon: __props.success ? "tradeInSuccessIcon" : "failIcon"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="result-modal_title"${_scopeId}>${ssrInterpolate(_ctx.$t(__props.success ? __props.successTitle : __props.failureTitle))}</span>`);
            _push2(ssrRenderComponent(_component_Button, {
              "full-width": "",
              class: "result-modal_button",
              onClick: closeAll
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("done"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("done")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "result-modal" }, [
                createVNode("div", { class: "result-modal_icon" }, [
                  createVNode(_component_Icon, {
                    icon: __props.success ? "tradeInSuccessIcon" : "failIcon"
                  }, null, 8, ["icon"])
                ]),
                createVNode("span", { class: "result-modal_title" }, toDisplayString(_ctx.$t(__props.success ? __props.successTitle : __props.failureTitle)), 1),
                createVNode(_component_Button, {
                  "full-width": "",
                  class: "result-modal_button",
                  onClick: closeAll
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("done")), 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals-content/preorder-modal-content/result-modals/success-modal/result-modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=result-modal-BVb52vY1.mjs.map
