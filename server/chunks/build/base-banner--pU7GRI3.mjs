import { _ as _sfc_main$2 } from './UiLink-CpRzX3bY.mjs';
import { _ as _sfc_main$3 } from './UiImg-CNj4xvxi.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, Fragment, createVNode, toDisplayString, renderSlot, reactive, ref, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, I as gridBreakpoints } from './server.mjs';
import { u as useBreakpoint } from './useBreakpoints-8FE3JIb9.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useCdnImg } from './useCdnImg-5SGHhxDr.mjs';

const _sfc_main$1 = defineComponent({
  name: "BannerBtn",
  props: {
    title: {
      type: String,
      default: null
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b09c82ed><button type="button" class="banner-btn" data-v-b09c82ed>${ssrInterpolate(_ctx.title)}</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/buttons/banner-button/banner-button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BannerBtn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b09c82ed"]]);
const _sfc_main = defineComponent({
  name: "BaseBanner",
  components: { BannerBtn },
  props: {
    banner: {
      type: Object,
      required: true
    },
    currentLang: {
      type: String,
      default: null
    },
    mobileBreakpoint: {
      type: Number,
      default: gridBreakpoints.md
    },
    tableBreakpoint: {
      type: Number,
      default: gridBreakpoints.xl
    },
    isLinkBanner: {
      type: Boolean,
      default: true
    },
    isAdaptiveHeight: {
      type: Boolean,
      default: false
    },
    btn: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      default: () => ({
        width: 175,
        height: 55
      })
    },
    title: {
      type: Object,
      default: () => ({})
    },
    subtitle: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Object,
      default: () => ({})
    },
    bannerOptions: {
      type: Object,
      default: () => ({})
    },
    backgroundOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup({
    banner,
    currentLang,
    mobileBreakpoint,
    tableBreakpoint,
    isLinkBanner,
    backgroundOptions,
    isAdaptiveHeight
  }) {
    var _a2;
    var _a, _b, _c;
    const { generateUrl } = useCdnImg();
    const imagePosition = (_a = banner == null ? void 0 : banner.styles) == null ? void 0 : _a.image_position;
    const textPosition = (_b = banner == null ? void 0 : banner.styles) == null ? void 0 : _b.text_position;
    const textAlign = (_c = banner == null ? void 0 : banner.styles) == null ? void 0 : _c.text_align;
    const bannerClassNames = reactive({
      [`banner-image-${imagePosition}`]: true,
      [`banner-text-position-${textPosition}`]: true,
      [`banner-text-align-${textAlign}`]: true,
      "adaptive-height": isAdaptiveHeight
    });
    const linkUrl = isLinkBanner ? (_a2 = banner == null ? void 0 : banner.url) != null ? _a2 : banner == null ? void 0 : banner.urls : null;
    const isAnimated = ref(false);
    const contentObj = (banner == null ? void 0 : banner.content) || banner;
    const bannerContent = currentLang ? contentObj[currentLang] : contentObj;
    const { bgColors, bannerSizes, bgImage, order, icon } = bannerContent != null ? bannerContent : {};
    const bgColor = computed(() => {
      if (!bgColors || (bgColors == null ? void 0 : bgColors.length) === 0) {
        return "";
      }
      if (bgColors.length > 1) {
        const colors = bgColors.join();
        return { background: `linear-gradient(to right, ${colors})` };
      }
      return { backgroundColor: bgColors[0] };
    });
    const { getCurrentSize } = useBreakpoint();
    const content = reactive({
      title: null,
      subtitle: null,
      btnText: null,
      image: null,
      isDefaultBackgroundImage: true,
      icon: null
    });
    const setContentBannerSize = (size) => {
      var _a22, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k;
      if (!(bannerSizes == null ? void 0 : bannerSizes.length)) {
        return;
      }
      const bannerSize = bannerSizes.find((b) => (b == null ? void 0 : b.size) === size) || bannerSizes[size === "desktop" ? 1 : 0];
      const src = ((_c2 = (_b2 = (_a22 = banner.content.bannerSizes.find((size2) => size2.size === "mobile")) == null ? void 0 : _a22.image) == null ? void 0 : _b2.file) == null ? void 0 : _c2.path) || "";
      const srcTablet = ((_f = (_e = (_d = banner.content.bannerSizes.find((size2) => size2.size === "tab")) == null ? void 0 : _d.image) == null ? void 0 : _e.file) == null ? void 0 : _f.path) || "";
      const srcDesktop = ((_i = (_h = (_g = banner.content.bannerSizes.find((size2) => size2.size === "desktop")) == null ? void 0 : _g.image) == null ? void 0 : _h.file) == null ? void 0 : _i.path) || "";
      content.src = generateUrl(src);
      content.srcTablet = generateUrl(srcTablet);
      content.srcDesktop = generateUrl(srcDesktop);
      content.image = (_j = bannerSize.image.file) == null ? void 0 : _j.path;
      content.title = bannerSize.isTextShown ? bannerSize.title : null;
      content.subtitle = bannerSize.isTextShown ? bannerSize.description : null;
      content.btnText = bannerSize.isButtonShown ? bannerSize.buttonText : null;
      content.icon = (icon == null ? void 0 : icon.is_active) && bannerSize.isIconShown ? icon.path : null;
      isAnimated.value = (_k = content.image) == null ? void 0 : _k.includes(".mp4");
    };
    const checkWindowSize = () => {
      const size = getCurrentSize();
      if (size <= mobileBreakpoint) {
        setContentBannerSize("mobile");
      } else if (size <= tableBreakpoint) {
        setContentBannerSize("tab");
      } else {
        setContentBannerSize("desktop");
      }
    };
    checkWindowSize();
    const setDefaultBackgroundStatus = (status) => {
      content.isDefaultBackgroundImage = status;
    };
    const getBackgroundStyles = (img, options) => {
      return {
        backgroundImage: `url('${img}')`
      };
    };
    const isContentEmpty = computed(
      () => !(content.icon || content.title || content.subtitle || content.btnText)
    );
    const backgroundStyles = computed(() => {
      if (content.image) {
        setDefaultBackgroundStatus(false);
        return getBackgroundStyles(content.image);
      }
      if ((bgImage == null ? void 0 : bgImage.path) && !content.image) {
        setDefaultBackgroundStatus(false);
        return { backgroundColor: "transparent" };
      }
      return "";
    });
    const contentOrder = reactive({
      icon: 0,
      text: 1,
      button: 2
    });
    order == null ? void 0 : order.forEach((item) => {
      switch (item.id) {
        case "icon":
          contentOrder.icon = item.position;
          break;
        case "text":
          contentOrder.text = item.position;
          break;
        case "button":
          contentOrder.button = item.position;
          break;
      }
    });
    return {
      linkUrl: (linkUrl == null ? void 0 : linkUrl.includes('"')) ? linkUrl.replaceAll('"', "") : linkUrl,
      isAnimated,
      bannerClassNames,
      bgColor,
      backgroundStyles,
      content,
      contentOrder,
      isContentEmpty
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiLink = _sfc_main$2;
  const _component_UiImg = _sfc_main$3;
  const _component_BannerBtn = resolveComponent("BannerBtn");
  if (_ctx.banner) {
    _push(ssrRenderComponent(_component_UiLink, mergeProps({
      link: _ctx.linkUrl,
      class: "base-banner"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b;
        if (_push2) {
          if (_ctx.isAnimated) {
            _push2(`<!--[-->`);
            if (_ctx.content.image) {
              _push2(`<video${ssrRenderAttr("src", _ctx.content.image)} autoplay muted loop playsinline${_scopeId}></video>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          if (!_ctx.isContentEmpty) {
            _push2(`<div style="${ssrRenderStyle(_ctx.backgroundStyles)}" class="${ssrRenderClass([_ctx.bannerClassNames, "banner-content-wrapper"])}"${_scopeId}><div class="banner-content"${_scopeId}>`);
            if (_ctx.content.icon) {
              _push2(ssrRenderComponent(_component_UiImg, mergeProps({
                loading: "lazy",
                class: "banner-icon"
              }, { ..._ctx.icon }, {
                style: { order: _ctx.contentOrder.icon },
                src: _ctx.content.icon
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.content.title) {
              _push2(`<h2${ssrRenderAttrs(mergeProps({ class: "banner-title" }, { ..._ctx.title }, {
                style: { order: _ctx.contentOrder.text }
              }))}${_scopeId}>${ssrInterpolate(_ctx.content.title)}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div style="${ssrRenderStyle({ order: _ctx.contentOrder.text })}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "between-text", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.content.subtitle) {
              _push2(`<p${ssrRenderAttrs(mergeProps({ class: "banner-subtitle" }, { ..._ctx.subtitle }, {
                style: { order: _ctx.contentOrder.text }
              }))}${_scopeId}>${ssrInterpolate(_ctx.content.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.content.btnText) {
              _push2(ssrRenderComponent(_component_BannerBtn, mergeProps({ ..._ctx.button }, {
                style: { order: _ctx.contentOrder.button },
                class: "banner-button",
                title: _ctx.content.btnText
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            _push2(`<div class="banner-wrapper"${_scopeId}>`);
            if ((_a = _ctx.content) == null ? void 0 : _a.image) {
              _push2(`<picture class="banner-image"${_scopeId}><source media="(min-width: 1024px)"${ssrRenderAttr("srcset", _ctx.content.srcDesktop)} type="image/webp"${_scopeId}><source media="(min-width: 768px)"${ssrRenderAttr("srcset", _ctx.content.srcTablet)} type="image/webp"${_scopeId}><img class="slider_image"${ssrRenderAttr("src", _ctx.content.src)} alt=""${_scopeId}></picture>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.btn && _ctx.content.btnText) {
              ssrRenderSlot(_ctx.$slots, "btn", {
                btnText: _ctx.content.btnText
              }, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          }
        } else {
          return [
            _ctx.isAnimated ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              _ctx.content.image ? (openBlock(), createBlock("video", {
                key: 0,
                src: _ctx.content.image,
                autoplay: "",
                muted: "",
                loop: "",
                playsinline: ""
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            !_ctx.isContentEmpty ? (openBlock(), createBlock("div", {
              key: 1,
              style: _ctx.backgroundStyles,
              class: ["banner-content-wrapper", _ctx.bannerClassNames]
            }, [
              createVNode("div", { class: "banner-content" }, [
                _ctx.content.icon ? (openBlock(), createBlock(_component_UiImg, mergeProps({
                  key: 0,
                  loading: "lazy",
                  class: "banner-icon"
                }, { ..._ctx.icon }, {
                  style: { order: _ctx.contentOrder.icon },
                  src: _ctx.content.icon
                }), null, 16, ["style", "src"])) : createCommentVNode("", true),
                _ctx.content.title ? (openBlock(), createBlock("h2", mergeProps({
                  key: 1,
                  class: "banner-title"
                }, { ..._ctx.title }, {
                  style: { order: _ctx.contentOrder.text }
                }), toDisplayString(_ctx.content.title), 17)) : createCommentVNode("", true),
                createVNode("div", {
                  style: { order: _ctx.contentOrder.text }
                }, [
                  renderSlot(_ctx.$slots, "between-text")
                ], 4),
                _ctx.content.subtitle ? (openBlock(), createBlock("p", mergeProps({
                  key: 2,
                  class: "banner-subtitle"
                }, { ..._ctx.subtitle }, {
                  style: { order: _ctx.contentOrder.text }
                }), toDisplayString(_ctx.content.subtitle), 17)) : createCommentVNode("", true),
                _ctx.content.btnText ? (openBlock(), createBlock(_component_BannerBtn, mergeProps({ key: 3 }, { ..._ctx.button }, {
                  style: { order: _ctx.contentOrder.button },
                  class: "banner-button",
                  title: _ctx.content.btnText
                }), null, 16, ["style", "title"])) : createCommentVNode("", true)
              ])
            ], 6)) : (openBlock(), createBlock("div", {
              key: 2,
              class: "banner-wrapper"
            }, [
              ((_b = _ctx.content) == null ? void 0 : _b.image) ? (openBlock(), createBlock("picture", {
                key: 0,
                class: "banner-image"
              }, [
                createVNode("source", {
                  media: "(min-width: 1024px)",
                  srcset: _ctx.content.srcDesktop,
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("source", {
                  media: "(min-width: 768px)",
                  srcset: _ctx.content.srcTablet,
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  class: "slider_image",
                  src: _ctx.content.src,
                  alt: ""
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true),
              _ctx.btn && _ctx.content.btnText ? renderSlot(_ctx.$slots, "btn", {
                key: 1,
                btnText: _ctx.content.btnText
              }) : createCommentVNode("", true)
            ]))
          ];
        }
      }),
      _: 3
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/banners/base-banner/base-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=base-banner--pU7GRI3.mjs.map
