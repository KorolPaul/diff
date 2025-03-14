import { d as __nuxt_component_0$2 } from './server.mjs';
import { computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "UiLink",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const currentLinkTag = computed(() => {
      var _a, _b;
      if (props.link === void 0 || !props.link) {
        return "div";
      }
      return ((_a = props.link) == null ? void 0 : _a.includes("https://")) || ((_b = props.link) == null ? void 0 : _b.includes("http://")) ? "a" : __nuxt_component_0$2;
    });
    const linkParam = computed(() => {
      if (currentLinkTag.value === "a") {
        return {
          href: props.link
        };
      }
      return {
        to: props.link
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(currentLinkTag)), mergeProps({ ..._ctx.$attrs, ...unref(linkParam) }, {
        target: unref(currentLinkTag) === "a" ? "_blank" : ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiLink/UiLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UiLink-CpRzX3bY.mjs.map
