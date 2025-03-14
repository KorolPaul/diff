import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, k as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$2 } from './UiImg-CNj4xvxi.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
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
import './useCdnImg-5SGHhxDr.mjs';
import '@imgproxy/imgproxy-js-core';
import 'sanitize-html';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiCompareSelect",
  __ssrInlineRender: true,
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-select" }, _attrs))} data-v-00f6705b><select${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, {
        class: "compare-select_dropdown",
        value: _ctx.modelValue
      }))} data-v-00f6705b><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(`<option class="compare-select_option"${ssrRenderAttr("value", option.value)} data-v-00f6705b>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "compare-select_arrow",
        icon: "chevronIcon"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UiSelect/UiCompareSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00f6705b"]]);
const _sfc_main = {
  __name: "compareDevice",
  __ssrInlineRender: true,
  props: {
    data: {
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      numberOfColums: {
        type: Number,
        default: 3
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { getSanitizeHtml } = useSanitize();
    const containerRef = ref(null);
    const selectConfig = ref({
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5
    });
    const selectorsDeviceNames = ref({});
    const samePosition = ref(false);
    const selectsItems = computed(() => {
      const devices = [];
      if (!props.data.items.length) {
        return devices;
      }
      props.data.items.forEach((item, index) => {
        devices.push({
          label: item.title,
          value: item.title
        });
        if (index < props.data.numberOfColums) {
          selectConfig.value[index + 1] = {
            label: item.title,
            value: index + 1
          };
          selectorsDeviceNames.value[index + 1] = item.title;
        }
      });
      return devices;
    });
    const changeSelectedValue = (deviceName, orderPosition) => {
      let devicePositonByName = selectsItems.value.findIndex(
        (device) => device.label === deviceName
      );
      if (!deviceName) {
        return;
      }
      devicePositonByName++;
      let findDoublePosition = 0;
      if (!containerRef.value) {
        return;
      }
      Object.keys(selectConfig.value).forEach((key) => {
        if (Number(selectConfig.value[key].value) === devicePositonByName) {
          samePosition.value = true;
          findDoublePosition = +key;
        }
      });
      if (samePosition.value) {
        const doubleValue = selectConfig.value[findDoublePosition];
        const currentVal = selectConfig.value[orderPosition];
        const nextVal = currentVal;
        const replaceVAlue = selectorsDeviceNames.value[orderPosition];
        selectorsDeviceNames.value[findDoublePosition] = replaceVAlue;
        selectorsDeviceNames.value[orderPosition] = deviceName;
        nextVal.label = replaceVAlue;
        selectConfig.value[findDoublePosition] = nextVal;
        selectConfig.value[orderPosition] = doubleValue;
        const doubleItems = containerRef.value.querySelectorAll(
          `.block-${doubleValue.value}`
        );
        const selectedItem = containerRef.value.querySelectorAll(
          `.block-${nextVal.value}`
        );
        doubleItems.forEach((item) => {
          item.classList.remove(`order-${findDoublePosition}`);
          item.classList.add(`order-${orderPosition}`);
        });
        selectedItem.forEach((item) => {
          item.classList.remove(`order-${orderPosition}`);
          item.classList.add(`order-${findDoublePosition}`);
        });
      } else {
        const configPositonIndex = selectConfig.value[orderPosition].value;
        selectorsDeviceNames.value[orderPosition] = deviceName;
        const defaultItems = containerRef.value.querySelectorAll(
          `.block-${configPositonIndex}`
        );
        const currentItems = containerRef.value.querySelectorAll(
          `.block-${devicePositonByName}`
        );
        defaultItems.forEach((item) => {
          item.classList.add("d-none");
          item.classList.remove(`order-${orderPosition}`);
        });
        currentItems.forEach((item) => {
          item.classList.remove("d-none");
          item.classList.add(`order-${orderPosition}`);
        });
        selectConfig.value[orderPosition] = {
          value: devicePositonByName,
          label: deviceName
        };
      }
      samePosition.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b;
      const _component_UiCompareSelect = __nuxt_component_0;
      const _component_UiImg = _sfc_main$2;
      const _component_Button = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "compare-models"
      }, _attrs))} data-v-5145bcf8><section class="header-page" data-v-5145bcf8><h2 class="compare-title" data-v-5145bcf8>${(_a2 = __props.data.title) != null ? _a2 : ""}</h2><p class="compare-description" data-v-5145bcf8>${(_b2 = __props.data.description) != null ? _b2 : ""}</p></section><section class="compare-device" data-v-5145bcf8><div class="compare-device_selects d-flex flex-row" data-v-5145bcf8><!--[-->`);
      ssrRenderList(__props.data.numberOfColums, (selectNumber, number) => {
        _push(`<div class="${ssrRenderClass([`order-${number + 1}`, "compare-device_item"])}" data-v-5145bcf8>`);
        _push(ssrRenderComponent(_component_UiCompareSelect, {
          modelValue: selectConfig.value[number + 1].label,
          "onUpdate:modelValue": [($event) => selectConfig.value[number + 1].label = $event, ($event) => changeSelectedValue($event, number + 1)],
          options: selectsItems.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="compare-device_row" data-v-5145bcf8><!--[-->`);
      ssrRenderList(__props.data.items, (device, deviceIndex) => {
        var _a22;
        _push(`<div class="${ssrRenderClass([`order-${deviceIndex + 1} block-${deviceIndex + 1} ${((_a22 = __props.data) == null ? void 0 : _a22.numberOfColums) < deviceIndex + 1 ? "d-none" : ""}`, "compare-device_item with-border"])}" data-v-5145bcf8>`);
        _push(ssrRenderComponent(_component_UiImg, {
          src: device.imageLink,
          class: "compare-device_image"
        }, null, _parent));
        if (device.colors) {
          _push(`<div class="compare-device_colors" data-v-5145bcf8><!--[-->`);
          ssrRenderList(device.colors, (color) => {
            _push(`<div class="compare-device_color" style="${ssrRenderStyle({ background: color })}" data-v-5145bcf8></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="compare-device_row" data-v-5145bcf8><!--[-->`);
      ssrRenderList(__props.data.items, (device, deviceIndex) => {
        var _a22;
        _push(`<div class="${ssrRenderClass([`order-${deviceIndex + 1} block-${deviceIndex + 1} ${((_a22 = __props.data) == null ? void 0 : _a22.numberOfColums) < deviceIndex + 1 ? "d-none" : ""}`, "compare-device_item"])}" data-v-5145bcf8>`);
        if (device.showBtn) {
          _push(ssrRenderComponent(_component_Button, {
            fullwidth: "",
            secondary: "",
            href: device.btnLink,
            target: "_blank",
            class: "compare-device_buy-button"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(device.btnName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(device.btnName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if ((_b = (_a = __props.data.items) == null ? void 0 : _a[0]) == null ? void 0 : _b.params) {
        _push(`<div data-v-5145bcf8><!--[-->`);
        ssrRenderList(__props.data.items[0].params, (param, index) => {
          _push(`<div class="compare-device_row" data-v-5145bcf8><!--[-->`);
          ssrRenderList(__props.data.items, (device, deviceIndex) => {
            var _a22, _b22, _c, _d, _e;
            _push(`<div class="${ssrRenderClass([`${((_a22 = __props.data) == null ? void 0 : _a22.numberOfColums) > deviceIndex ? `order-${deviceIndex + 1}` : ""} block-${deviceIndex + 1} ${((_b22 = __props.data) == null ? void 0 : _b22.numberOfColums) < deviceIndex + 1 ? "d-none" : ""}`, "compare-device_item"])}" data-v-5145bcf8>`);
            if (((_c = device.params[index]) == null ? void 0 : _c.iconImageLink) && ((_d = device.params[index]) == null ? void 0 : _d.iconImageLink) !== "/") {
              _push(ssrRenderComponent(_component_UiImg, {
                src: device.params[index].iconImageLink,
                class: "compare-device_icon"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--[-->`);
            ssrRenderList((_e = device.params[index]) == null ? void 0 : _e.text, (text, ind) => {
              var _a3;
              _push(`<p class="${ssrRenderClass([{ empty: text === "\u2014" }, "compare-device_text"])}" data-v-5145bcf8>${(_a3 = unref(getSanitizeHtml)(text)) != null ? _a3 : ""}</p>`);
            });
            _push(`<!--]--></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/compare/components/compareDevice/compareDevice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compareDevice = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5145bcf8"]]);

export { compareDevice as default };
//# sourceMappingURL=compareDevice-sLYr2ufU.mjs.map
