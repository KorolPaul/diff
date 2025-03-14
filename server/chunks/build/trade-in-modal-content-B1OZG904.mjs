import { _ as _sfc_main$1 } from './modal-light-Cz0YAIgT.mjs';
import { _ as __nuxt_component_1 } from './icon-_hjsSUWU.mjs';
import { _ as __nuxt_component_2$1 } from './ui-preloader-C4Bi7ENY.mjs';
import { computed, ref, withAsyncContext, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, createVNode, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { u as useSanitize } from './useSanitize-B4Q-s4KN.mjs';
import { _ as _export_sfc, C as useRouter, r as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "trade-in-modal-content",
  __ssrInlineRender: true,
  props: {
    hasPreloadedBlocks: {
      type: Array,
      default: () => []
    },
    isCartPage: {
      type: Boolean,
      default: false
    },
    isProductPage: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["input", "start-trade-in"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const isOpened = computed(() => props.modelValue);
    const { getSanitizeHtml } = useSanitize();
    const modalContent = ref(null);
    const isLoading = ref(false);
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const navigateToRoute = (path) => {
      emit("input", false);
      router.push(nuxtApp.$localeRoute({ path }));
    };
    const handleLearnMoreClick = () => {
      navigateToRoute("/pages/trade-in");
    };
    const handleStartTradeInClick = () => {
      if (props.isProductPage) {
        emit("input", false);
        emit("start-trade-in");
      } else {
        emit("start-trade-in");
        navigateToRoute(props.isCartPage ? "/checkout" : "/pages/trade-in");
      }
    };
    try {
      const blocks = props.hasPreloadedBlocks.length ? props.hasPreloadedBlocks : ([__temp, __restore] = withAsyncContext(() => PageApiService.getAggregatePageBySlug("trade-in").then(
        (data) => {
          var _a, _b;
          return (_b = (_a = data.data) == null ? void 0 : _a.data) == null ? void 0 : _b.blocks;
        }
      )), __temp = await __temp, __restore(), __temp);
      const stageBlock = blocks == null ? void 0 : blocks.find(
        (block) => {
          var _a;
          return ((_a = block.content) == null ? void 0 : _a.component) === "stage";
        }
      );
      if (stageBlock) {
        modalContent.value = { ...stageBlock.content.data };
      }
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalLight = _sfc_main$1;
      const _component_ui_btn = resolveComponent("ui-btn");
      const _component_Icon = __nuxt_component_1;
      const _component_UiPreloader = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_ModalLight, mergeProps({
        modelValue: unref(isOpened),
        "onUpdate:modelValue": ($event) => isRef(isOpened) ? isOpened.value = $event : null
      }, { ..._ctx.$attrs }, {
        "max-width": 1024,
        "with-padding": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLoading)) {
              _push2(`<div class="trade-in-modal" data-v-5e522302${_scopeId}>`);
              if (unref(modalContent)) {
                _push2(`<div data-v-5e522302${_scopeId}><div class="trade-in-modal_content" data-v-5e522302${_scopeId}>`);
                if (unref(modalContent).title) {
                  _push2(`<h2 class="trade-in-modal_title" data-v-5e522302${_scopeId}>${ssrInterpolate(unref(modalContent).title)}</h2>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<ul class="trade-in-modal_list" data-v-5e522302${_scopeId}><!--[-->`);
                ssrRenderList(unref(modalContent).stage, (item, index) => {
                  var _a;
                  _push2(`<li class="trade-in-modal_list-item" data-v-5e522302${_scopeId}><p class="trade-in-modal_list-item-title" data-v-5e522302${_scopeId}>${ssrInterpolate(index + 1)}. ${ssrInterpolate(item.description)}</p>`);
                  if (item.subdescription) {
                    _push2(`<p data-v-5e522302${_scopeId}>${(_a = unref(getSanitizeHtml)(item.subdescription)) != null ? _a : ""}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul>`);
                if (unref(modalContent).btnRequest) {
                  _push2(ssrRenderComponent(_component_ui_btn, {
                    url: unref(modalContent).btnLink,
                    size: "l",
                    class: "btn"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(modalContent).btnName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(modalContent).btnName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="trade-in-modal_buttons" data-v-5e522302${_scopeId}>`);
                if (__props.isProductPage) {
                  _push2(`<button class="trade-in-modal_button" data-v-5e522302${_scopeId}>${ssrInterpolate(_ctx.$t("learn_about_tradein"))} `);
                  _push2(ssrRenderComponent(_component_Icon, { icon: "chevronRightIcon" }, null, _parent2, _scopeId));
                  _push2(`</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="trade-in-modal_button" data-v-5e522302${_scopeId}>${ssrInterpolate(_ctx.$t("start_tradein"))} `);
                _push2(ssrRenderComponent(_component_Icon, { icon: "chevronRightIcon" }, null, _parent2, _scopeId));
                _push2(`</button></div></div>`);
              } else {
                _push2(`<div data-v-5e522302${_scopeId}>Empty</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="trade-in-modal" data-v-5e522302${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPreloader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(isLoading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "trade-in-modal"
              }, [
                unref(modalContent) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "trade-in-modal_content" }, [
                    unref(modalContent).title ? (openBlock(), createBlock("h2", {
                      key: 0,
                      class: "trade-in-modal_title"
                    }, toDisplayString(unref(modalContent).title), 1)) : createCommentVNode("", true),
                    createVNode("ul", { class: "trade-in-modal_list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(modalContent).stage, (item, index) => {
                        return openBlock(), createBlock("li", {
                          key: item.id,
                          class: "trade-in-modal_list-item"
                        }, [
                          createVNode("p", { class: "trade-in-modal_list-item-title" }, toDisplayString(index + 1) + ". " + toDisplayString(item.description), 1),
                          item.subdescription ? (openBlock(), createBlock("p", {
                            key: 0,
                            innerHTML: unref(getSanitizeHtml)(item.subdescription)
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    unref(modalContent).btnRequest ? (openBlock(), createBlock(_component_ui_btn, {
                      key: 1,
                      url: unref(modalContent).btnLink,
                      size: "l",
                      class: "btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(modalContent).btnName), 1)
                      ]),
                      _: 1
                    }, 8, ["url"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "trade-in-modal_buttons" }, [
                    __props.isProductPage ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "trade-in-modal_button",
                      onClick: handleLearnMoreClick
                    }, [
                      createTextVNode(toDisplayString(_ctx.$t("learn_about_tradein")) + " ", 1),
                      createVNode(_component_Icon, { icon: "chevronRightIcon" })
                    ])) : createCommentVNode("", true),
                    createVNode("button", {
                      class: "trade-in-modal_button",
                      onClick: handleStartTradeInClick
                    }, [
                      createTextVNode(toDisplayString(_ctx.$t("start_tradein")) + " ", 1),
                      createVNode(_component_Icon, { icon: "chevronRightIcon" })
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, "Empty"))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "trade-in-modal"
              }, [
                createVNode(_component_UiPreloader)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/modals-content/trade-in-modal-content/trade-in-modal-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e522302"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=trade-in-modal-content-B1OZG904.mjs.map
