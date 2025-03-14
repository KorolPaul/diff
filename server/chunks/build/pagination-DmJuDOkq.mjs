import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  name: "ArrowIcon",
  props: {
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-4a9add8a><path d="M10.649 8C10.649 8.0601 10.637 8.11619 10.613 8.16827C10.5889 8.21635 10.5549 8.26242 10.5108 8.30649L5.70913 12.8738C5.62901 12.9579 5.52885 13 5.40865 13C5.33654 13 5.26843 12.982 5.20433 12.9459C5.14022 12.9099 5.09014 12.8598 5.05409 12.7957C5.01803 12.7356 5 12.6655 5 12.5853C5 12.4772 5.03806 12.381 5.11418 12.2969L9.63341 8L5.11418 3.70313C5.03806 3.61899 5 3.52284 5 3.41466C5 3.33454 5.01803 3.26442 5.05409 3.20433C5.09014 3.14022 5.14022 3.09014 5.20433 3.05409C5.26843 3.01803 5.33654 3 5.40865 3C5.52885 3 5.62901 3.04006 5.70913 3.12019L10.5108 7.69351C10.5549 7.73758 10.5889 7.78566 10.613 7.83774C10.637 7.88582 10.649 7.9399 10.649 8Z"${ssrRenderAttr("fill", $props.fillColor)} data-v-4a9add8a></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/icons/arrow-icon/arrow-icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArrowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a9add8a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    start: {
      type: Number,
      default: 1
    },
    modelValue: {
      type: Number,
      default: (props) => props.start
    },
    disabled: Boolean,
    length: {
      type: Number,
      default: 1,
      validator: (val) => val % 1 === 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentPage = ref(props.modelValue);
    const items = computed(() => {
      if (props.length <= 0 || isNaN(props.length)) {
        return [];
      }
      const result = [];
      for (let i = props.start; i <= props.length; i++) {
        result.push({
          key: i,
          isActive: i === currentPage.value,
          page: i.toString(),
          props: {
            onClick: () => {
              currentPage.value = i;
            }
          }
        });
      }
      return result;
    });
    const controls = computed(() => ({
      prev: {
        onClick: () => {
          if (currentPage.value > props.start) {
            currentPage.value--;
          }
        },
        disabled: currentPage.value <= props.start
      },
      next: {
        onClick: () => {
          if (currentPage.value < props.length) {
            currentPage.value++;
          }
        },
        disabled: currentPage.value >= props.length
      }
    }));
    const shouldShowPageInMenu = (page) => {
      const isNextOrPreviousPage = (page2) => {
        return Math.abs(page2 - currentPage.value) <= 1;
      };
      const isFirstOrLastPage = (page2) => {
        return page2 === 1 || page2 === props.length;
      };
      return page === currentPage.value || isNextOrPreviousPage(page) || isFirstOrLastPage(page);
    };
    watch(
      () => props.modelValue,
      (value) => {
        currentPage.value = value;
      }
    );
    watch(currentPage, (newPage) => {
      emit("update:modelValue", newPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["pagination_items", { pagination__disabled: __props.disabled }]
      }, _attrs))}><button${ssrRenderAttrs(mergeProps({
        class: ["pagination_item pagination_button__prev", { disabled: unref(controls).prev.disabled }]
      }, unref(controls).prev))}>`);
      _push(ssrRenderComponent(ArrowIcon, null, null, _parent));
      _push(`</button><div class="pagination_pages"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div class="${ssrRenderClass([{
          active: item.isActive,
          hide: !shouldShowPageInMenu(item.key)
        }, "pagination_item"])}"><button${ssrRenderAttrs(mergeProps({
          class: "pagination_button",
          ref_for: true
        }, item.props))}>${ssrInterpolate(item.page)}</button></div>`);
      });
      _push(`<!--]--></div><button${ssrRenderAttrs(mergeProps({
        class: ["pagination_item pagination_button__next", { disabled: unref(controls).next.disabled }]
      }, unref(controls).next))}>`);
      _push(ssrRenderComponent(ArrowIcon, null, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/pagination/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=pagination-DmJuDOkq.mjs.map
