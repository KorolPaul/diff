import { _ as __nuxt_component_1$1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, ref, inject, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderTeleport, ssrRenderStyle } from 'vue/server-renderer';
import { useWindowSize, useWindowScroll, onClickOutside } from '@vueuse/core';
import { _ as _export_sfc, a as useI18n } from './server.mjs';

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%3e%3cg%20id='icon/check'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4173%2013.1973C20.4855%2013.2655%2020.5238%2013.358%2020.5238%2013.4544C20.5238%2013.5508%2020.4855%2013.6433%2020.4173%2013.7115L14.6428%2019.486C14.5746%2019.5542%2014.4821%2019.5925%2014.3857%2019.5925C14.2892%2019.5925%2014.1968%2019.5542%2014.1286%2019.486L11.7475%2017.1042C11.7128%2017.0707%2011.6851%2017.0305%2011.666%2016.9862C11.6469%2016.9418%2011.6369%2016.8941%2011.6365%2016.8458C11.6361%2016.7975%2011.6453%2016.7496%2011.6636%2016.7049C11.6818%2016.6603%2011.7088%2016.6197%2011.743%2016.5855C11.7771%2016.5514%2011.8177%2016.5244%2011.8624%2016.5061C11.9071%2016.4878%2011.955%2016.4786%2012.0033%2016.479C12.0516%2016.4794%2012.0993%2016.4895%2012.1436%2016.5085C12.188%2016.5276%2012.2281%2016.5553%2012.2617%2016.59L14.3868%2018.7151L19.9039%2013.1973C19.972%2013.1291%2020.0645%2013.0908%2020.1609%2013.0908C20.2574%2013.0908%2020.3498%2013.1291%2020.418%2013.1973H20.4173Z'%20fill='%230071E3'%20/%3e%3c/g%3e%3c/svg%3e";
const useDropdownPosition = () => {
  const scrollPos = inject("scrollPos");
  const getPosition = (selectRef, dropdown, styleData) => {
    const OPTION_TOP_MARGIN = 10;
    const selectElement = selectRef == null ? void 0 : selectRef.getBoundingClientRect();
    const dropdownElement = dropdown == null ? void 0 : dropdown.getBoundingClientRect();
    const selectPosition = (scrollPos == null ? void 0 : scrollPos.value) || (selectElement == null ? void 0 : selectElement.y) || 0;
    const selectBottomPosition = (selectElement == null ? void 0 : selectElement.bottom) || 0;
    const maxListHeightPosition = (void 0).innerHeight || 0;
    const optionsHeight = (dropdownElement == null ? void 0 : dropdownElement.height) || 0;
    const currentSelectListheightPosition = optionsHeight + selectBottomPosition + 10;
    const difference = maxListHeightPosition - currentSelectListheightPosition;
    if (difference < 0) {
      if (scrollPos == null ? void 0 : scrollPos.value) {
        const selectHeight = (selectElement == null ? void 0 : selectElement.height) || 0;
        return {
          top: `${selectBottomPosition - selectHeight - optionsHeight - OPTION_TOP_MARGIN}px`,
          width: `${selectElement == null ? void 0 : selectElement.width}px`,
          left: `${selectElement == null ? void 0 : selectElement.x}px`
        };
      }
      return {
        top: `${selectPosition - optionsHeight - OPTION_TOP_MARGIN}px`,
        width: `${selectElement == null ? void 0 : selectElement.width}px`,
        left: `${selectElement == null ? void 0 : selectElement.x}px`
      };
    }
    return {
      top: `${selectBottomPosition + OPTION_TOP_MARGIN}px`,
      width: `${selectElement == null ? void 0 : selectElement.width}px`,
      left: `${selectElement == null ? void 0 : selectElement.x}px`
    };
  };
  return {
    getPosition
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSelect",
  __ssrInlineRender: true,
  props: {
    label: {},
    options: {},
    icon: {},
    modelValue: {},
    errors: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    ellipsis: { type: Boolean },
    showItemLabel: { type: Boolean, default: false },
    small: { type: Boolean },
    showActiveIcon: { type: Boolean, default: true },
    dropdownClassName: { default: "" },
    scrollPos: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const { getPosition } = useDropdownPosition();
    const isOpened = ref(false);
    const { width } = useWindowSize();
    const { y } = useWindowScroll();
    const selectRef = ref(null);
    const dropdown = ref(null);
    onClickOutside(selectRef, () => isOpened.value = false);
    const styleData = ref({});
    const scrollPos = inject("scrollPos");
    const styles = computed(
      () => getPosition(selectRef.value, dropdown.value, styleData.value)
    );
    watch([width, y, scrollPos == null ? void 0 : scrollPos.value], () => {
      if (isOpened.value) {
        styleData.value = getPosition(
          selectRef.value,
          dropdown.value,
          styleData.value
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["select", {
          opened: unref(isOpened),
          error: (_a = _ctx.errors) == null ? void 0 : _a.length,
          "select__with-icon": _ctx.icon
        }]
      }, _attrs))} data-v-00d29936>`);
      if (_ctx.icon) {
        _push(ssrRenderComponent(_component_Icon, {
          class: "select_with-icon",
          icon: _ctx.icon
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.label) {
        _push(`<label class="select_label" data-v-00d29936>${ssrInterpolate(unref(t)(_ctx.label))}`);
        if (_ctx.required) {
          _push(`<!--[-->*<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<select${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        class: "select_input",
        value: _ctx.modelValue
      }))} data-v-00d29936><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.value)} class="select_option" data-v-00d29936>${ssrInterpolate(option.label)} `);
        if (option == null ? void 0 : option.description) {
          _push(`<div data-v-00d29936>${ssrInterpolate(option.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select><div class="${ssrRenderClass([{
        disabled: _ctx.disabled,
        ellipsis: _ctx.ellipsis,
        small: _ctx.small
      }, "select_fake-input"])}" data-v-00d29936>${ssrInterpolate(_ctx.showItemLabel ? (_b = _ctx.options.find((option) => option.value === _ctx.modelValue)) == null ? void 0 : _b.label : _ctx.modelValue)}</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "select_arrow",
        icon: "chevronIcon"
      }, null, _parent));
      if (unref(isOpened)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(`<div class="${ssrRenderClass({
            select_dropdown: true,
            "select_dropdown__with-active-icon": _ctx.showActiveIcon,
            [_ctx.dropdownClassName]: true,
            ellipsis: _ctx.ellipsis,
            small: _ctx.small,
            select_dropdown__open: unref(isOpened)
          })}" style="${ssrRenderStyle({ ...unref(styles), ...unref(styleData) })}" data-v-00d29936><!--[-->`);
          ssrRenderList(_ctx.options, (option) => {
            _push2(`<div class="${ssrRenderClass([{ active: _ctx.modelValue === option.value }, "select_item"])}" data-v-00d29936>`);
            if (option == null ? void 0 : option.icon) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: "select_item-icon",
                icon: option == null ? void 0 : option.icon
              }, null, _parent));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="select_item-text" data-v-00d29936>`);
            if (option == null ? void 0 : option.subtitle) {
              _push2(`<span class="select_item-subtitle" data-v-00d29936>${ssrInterpolate(option.subtitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(option.label)} `);
            if (option == null ? void 0 : option.description) {
              _push2(`<span class="select_item-description" data-v-00d29936>${ssrInterpolate(option.description)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.showActiveIcon) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} class="select_item-arrow" data-v-00d29936>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        }, "body", false, _parent);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.errors) {
        _push(`<div class="text-input_errors" data-v-00d29936><!--[-->`);
        ssrRenderList(_ctx.errors, (error) => {
          _push(`<span data-v-00d29936>${ssrInterpolate(error)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiSelect/UiSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00d29936"]]);

export { __nuxt_component_1 as _, useDropdownPosition as u };
//# sourceMappingURL=UiSelect-BqVOhDGy.mjs.map
