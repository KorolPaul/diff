import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { provide, ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "modal-light",
  __ssrInlineRender: true,
  props: {
    maxWidth: {
      type: [Number, String],
      default: 588
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    modalClass: {
      type: String,
      default: null
    },
    withPadding: {
      type: Boolean,
      default: false
    },
    fullHeight: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    withoutOverflow: {
      type: Boolean,
      default: false
    },
    scrollPosition: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const close = () => {
      emit("update:modelValue", false);
    };
    provide("closeModal", close);
    const scrollPos = ref(0);
    provide("scrollPos", scrollPos);
    const scrollContainerRef = ref(null);
    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) ;
      }
    );
    watch(
      () => props.scrollPosition,
      () => {
        var _a;
        if (props.scrollPosition) {
          (_a = scrollContainerRef.value) == null ? void 0 : _a.scrollTo(0, props.scrollPosition);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([{
          opened: __props.modelValue,
          [__props.modalClass]: __props.modalClass,
          "modal-light__overflow-visible": __props.withoutOverflow
        }, "modal-light"])}"><div class="modal-light_fade"></div><div class="modal-light_container"><div class="modal-light_close-wrapper" style="${ssrRenderStyle({ maxWidth: `${__props.maxWidth}px` })}"><button class="modal-light_close">`);
        _push2(ssrRenderComponent(_component_Icon, {
          icon: "closeModalIcon",
          class: "modal-light_close-icon"
        }, null, _parent));
        _push2(`</button></div><div style="${ssrRenderStyle({ maxWidth: `${__props.maxWidth}px` })}" class="${ssrRenderClass([{
          "modal-light_content__padding": __props.withPadding,
          "modal-light_content__full-height": __props.fullHeight,
          "modal-light_content__full-screen": __props.fullScreen
        }, "modal-light_content"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", { scrollPos: unref(scrollPos) }, null, _push2, _parent);
        _push2(`</div></div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals/modal-light/modal-light.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=modal-light-Cz0YAIgT.mjs.map
