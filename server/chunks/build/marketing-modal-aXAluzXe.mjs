import { _ as __nuxt_component_1$2 } from './icon-_hjsSUWU.mjs';
import { _ as _sfc_main$2 } from './modal-light-Cz0YAIgT.mjs';
import { defineComponent, ref, unref, isRef, withCtx, withDirectives, createVNode, vShow, mergeProps, renderSlot, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ModalLight = _sfc_main$2;
  _push(ssrRenderComponent(_component_ModalLight, mergeProps({ ..._ctx.$attrs }, { "max-width": 1024 }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="rich-modal" data-v-bc7f6bee${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "rich-modal" }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/rich-modal/rich-modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bc7f6bee"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "marketing-modal",
  __ssrInlineRender: true,
  props: {
    popupContent: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const isModalOpened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$2;
      const _component_RichModal = __nuxt_component_1$1;
      _push(`<!--[--><button class="marketing-modal_button" data-v-f288b21e>${ssrInterpolate(unref(t)("learn_more"))} `);
      _push(ssrRenderComponent(_component_Icon, { icon: "chevronRightIcon" }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_RichModal, {
        modelValue: unref(isModalOpened),
        "onUpdate:modelValue": ($event) => isRef(isModalOpened) ? isModalOpened.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle(unref(isModalOpened) ? null : { display: "none" })}" data-v-f288b21e${_scopeId}>${(_a = _ctx.popupContent) != null ? _a : ""}</div>`);
          } else {
            return [
              withDirectives(createVNode("div", { innerHTML: _ctx.popupContent }, null, 8, ["innerHTML"]), [
                [vShow, unref(isModalOpened)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/marketing-modal/marketing-modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f288b21e"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=marketing-modal-aXAluzXe.mjs.map
