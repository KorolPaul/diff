import { d as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './UiImg-CNj4xvxi.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { defineComponent, mergeProps, withCtx, createBlock, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "entity-card",
  __ssrInlineRender: true,
  props: {
    link: {},
    name: {},
    imageLink: {},
    hasMinHeight: { type: Boolean, default: true },
    small: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UiImg = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["entity-card", { "entity-card__small": _ctx.small }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.link,
        class: "entity-card_image-wrapper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.imageLink) {
              _push2(ssrRenderComponent(_component_UiImg, {
                class: "entity-card_image",
                src: _ctx.imageLink,
                alt: _ctx.name,
                width: 209
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="entity-card_image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { icon: "noImageIcon" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.imageLink ? (openBlock(), createBlock(_component_UiImg, {
                key: 0,
                class: "entity-card_image",
                src: _ctx.imageLink,
                alt: _ctx.name,
                width: 209
              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "entity-card_image"
              }, [
                createVNode(_component_Icon, { icon: "noImageIcon" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.link,
        class: {
          "entity-card_name": true,
          "entity-card_name__minHeight": _ctx.hasMinHeight
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("domains/catalog/components/entity-card/entity-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=entity-card-BKC73J01.mjs.map
