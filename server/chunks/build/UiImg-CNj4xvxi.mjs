import { defineComponent, unref, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useCdnImg, v as validateSize } from './useCdnImg-5SGHhxDr.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CdnImg",
  __ssrInlineRender: true,
  props: {
    src: {},
    width: {},
    height: {},
    format: {},
    loading: {}
  },
  setup(__props) {
    const props = __props;
    const { generateUrl } = useCdnImg();
    const width = computed(() => validateSize(props.width));
    const height = computed(() => validateSize(props.height));
    const imageSrc = computed(() => generateUrl(props.src, {
      width: width.value,
      height: height.value,
      format: props.format
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: imageSrc.value,
        width: width.value,
        height: height.value,
        loading: _ctx.loading
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@webplatform/cdn-image/dist/components/CdnImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiImg",
  __ssrInlineRender: true,
  props: {
    src: {},
    width: {},
    height: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.src) {
        _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ ..._ctx.$attrs }, {
          src: _ctx.src,
          width: _ctx.width,
          height: _ctx.height
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiImg/UiImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UiImg-CNj4xvxi.mjs.map
