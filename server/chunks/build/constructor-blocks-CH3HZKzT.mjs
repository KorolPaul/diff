import { shallowRef, watch, computed, mergeProps, unref, defineComponent, createVNode, resolveDynamicComponent, defineAsyncComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, i as useCartStore, h as useDeviceStore, e as useApi, P as PUBLIC_PREFIX } from './server.mjs';
import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';

const resource = `${PUBLIC_PREFIX}products`;
const CatalogApiService = {
  async getProducts(params) {
    const { get } = useApi();
    const { data } = await get(`${resource}`, params);
    return {
      data: data.value
    };
  }
};
const productsKey = "catalogProducts";
const productKey = "catalogProduct";
const bannerGroupKey = "bannerGroup";
const bannerKey = "banner";
const useConstructorUtils = () => {
  const { locale } = useI18n();
  const generatePromotionsProducts = (promotionsProducts, catalogProducts = []) => {
    if (!promotionsProducts) return {};
    const promoTable = {};
    const catalogProductMap = catalogProducts == null ? void 0 : catalogProducts.reduce((map, product) => {
      if (product.id) {
        map[product.id.toString()] = product;
      }
      return map;
    }, {});
    promotionsProducts.forEach((promoProduct) => {
      var _a;
      if (catalogProducts == null ? void 0 : catalogProducts.length) {
        const catalogProduct = catalogProductMap[(_a = promoProduct.id) == null ? void 0 : _a.toString()];
        if (catalogProduct && catalogProduct.credits_data) {
          promoProduct.credits_data = catalogProduct.credits_data;
        }
      }
      promoProduct.promotion_ids.forEach((promoId) => {
        if (!promoTable[promoId]) {
          promoTable[promoId] = [promoProduct];
        } else {
          promoTable[promoId].push(promoProduct);
        }
      });
    });
    return promoTable;
  };
  const getBannersByLang = (banners, lang) => {
    if (!banners) return [];
    return banners.map((banner) => {
      const copyBanner = { ...banner };
      const content = banner.content[lang];
      copyBanner.content = content;
      return copyBanner;
    });
  };
  const findProductsByIds = (products, producdsIds) => {
    const findedProducts = [];
    producdsIds.forEach((productId) => {
      const findedProduct = products.find(
        (product) => product.id === productId
      );
      if (findedProduct) {
        findedProducts.push(findedProduct);
      }
    });
    return findedProducts;
  };
  const setBannerValues = (contentData, payloadData, value) => {
    var _a, _b, _c;
    if (!contentData) return;
    if ((_b = (_a = payloadData == null ? void 0 : payloadData.bannerGroups) == null ? void 0 : _a.banners) == null ? void 0 : _b.length) return;
    let bannerGroup = (_c = payloadData == null ? void 0 : payloadData.bannerGroups) == null ? void 0 : _c.find(
      (bannerGroupItem) => (bannerGroupItem == null ? void 0 : bannerGroupItem.key) === value
    );
    if (bannerGroup === void 0 && !contentData.bannerGroup) {
      if (contentData.bannerGroup) {
        bannerGroup = contentData.bannerGroup;
      } else {
        contentData.hidden = true;
        return;
      }
    }
    if (!bannerGroup || !contentData[bannerKey]) {
      contentData[bannerGroupKey] = bannerGroup;
      return;
    }
    if (Array.isArray(contentData[bannerKey])) {
      contentData[bannerKey] = contentData[bannerKey].map(
        (bannerTag) => bannerGroup == null ? void 0 : bannerGroup.banners.find((banner) => banner.tag === bannerTag)
      );
    } else {
      contentData[bannerKey] = bannerGroup == null ? void 0 : bannerGroup.banners.find(
        (banner) => contentData[bannerKey] === banner.tag
      );
    }
  };
  const setValuesOnKey = (contentData, payloadData) => {
    if (!contentData) return;
    for (const [key, value] of Object.entries(contentData)) {
      if (key === bannerGroupKey) {
        setBannerValues(contentData, payloadData, value);
      } else if (key === productsKey) {
        contentData[productsKey] = findProductsByIds(
          payloadData.products,
          value
        );
      } else if (key === productKey) {
        contentData[productKey] = payloadData == null ? void 0 : payloadData.products.find(
          (product) => value === product.id
        );
      } else {
        replaceKeyOnValue(value, payloadData);
      }
    }
  };
  function replaceKeyOnValue(contentData, payloadData) {
    if (typeof contentData !== "object") return contentData;
    if (Array.isArray(contentData)) {
      contentData.forEach((contentDataItem) => {
        replaceKeyOnValue(contentDataItem, payloadData);
      });
    } else {
      setValuesOnKey(contentData, payloadData);
    }
    return contentData;
  }
  const findReservationKeyValuesInContent = (contentData, reservationKeys) => {
    if (!contentData) return;
    if (typeof contentData !== "object") return;
    if (Array.isArray(contentData)) {
      contentData.forEach((contentDataItem) => {
        findReservationKeyValuesInContent(contentDataItem, reservationKeys);
      });
    } else {
      for (const [key, value] of Object.entries(contentData)) {
        if (key === bannerGroupKey) {
          reservationKeys.bannersNames.push(value);
        } else if (key === productsKey) {
          reservationKeys.productsIds.push(...value);
        } else if (key === productKey) {
          reservationKeys.productsIds.push(value);
        } else {
          findReservationKeyValuesInContent(value, reservationKeys);
        }
      }
    }
  };
  const findAllReservationKeys = (pageBlocks) => {
    const reservationKeys = {
      productsIds: [],
      bannersNames: []
    };
    pageBlocks.forEach((pageBlock) => {
      var _a;
      if (pageBlock.type === "promotion") {
        return;
      }
      if ((_a = pageBlock.content) == null ? void 0 : _a.useCatalogParser) {
        const contentData = pageBlock.content.data;
        findReservationKeyValuesInContent(contentData, reservationKeys);
      }
    });
    return reservationKeys;
  };
  const filterValueInItems = (items) => {
    const uniqItems = [];
    items.forEach((item) => {
      if (uniqItems.includes(item)) return;
      uniqItems.push(item);
    });
    return uniqItems;
  };
  const fetchProductsByIds = async (productsIds) => {
    var _a;
    try {
      const productsRes = await CatalogApiService.getProducts({
        search: `id:${productsIds.join(",")}`,
        searchFields: "id:in",
        limit: 0,
        lang: locale.value
      });
      return (_a = productsRes == null ? void 0 : productsRes.data) == null ? void 0 : _a.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchBannersByNames = async (bannersNames) => {
    try {
      const bannersRes = await BannerApiService.getGroupBy(
        bannersNames,
        locale.value
      );
      if (Array.isArray(bannersRes)) {
        return bannersRes;
      }
      return [bannersRes];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchPayloadData = async (payloadOptions) => {
    const { productsIds, bannersNames } = payloadOptions;
    const uniqProductsIds = filterValueInItems(productsIds);
    const uniqBannersNames = filterValueInItems(bannersNames);
    let productsPromise = null;
    let bannersPromise = null;
    if (uniqProductsIds.length) {
      productsPromise = fetchProductsByIds(uniqProductsIds);
    }
    if (uniqBannersNames.length) {
      bannersPromise = fetchBannersByNames(uniqBannersNames);
    }
    return {
      products: productsPromise ? await productsPromise : [],
      bannerGroups: bannersPromise ? await bannersPromise : []
    };
  };
  const fetchConstructorPayload = async (blocks) => {
    const payloadOptions = findAllReservationKeys(blocks);
    return fetchPayloadData(payloadOptions);
  };
  return {
    getBannersByLang,
    fetchConstructorPayload,
    replaceKeyOnValue,
    generatePromotionsProducts
  };
};
const useTileComponentsProvider = () => {
  const getBaseTileConfig = (contentData) => {
    if (contentData.type === 1) {
      return {
        component: "categoriesBlocks",
        data: {
          ...contentData,
          fullSize: contentData.isFullSizeImages,
          static: true
        }
      };
    }
    if (contentData.type === 2) {
      return {
        component: "aboutInTiles",
        data: { ...contentData }
      };
    }
    return null;
  };
  const getSequenceGridConfig = (contentData) => ({
    component: "gridCategory",
    data: contentData
  });
  const getAdvantagesConfig = (contentData) => ({
    component: "RequestAdvantages",
    data: contentData
  });
  const getTileComponent = (content, data = null) => {
    if (!(content == null ? void 0 : content.data)) return null;
    if (content.type === "sequenceGrid") {
      return {
        getConfigByDevice: (device) => getSequenceGridConfig({ ...content.data[device], ...data })
      };
    }
    if (content.type === "standartGrid") {
      return {
        getConfigByDevice: (device) => getBaseTileConfig(content.data[device])
      };
    }
    if (content.type === "requestAdvantages") {
      return {
        getConfigByDevice: (device) => getAdvantagesConfig(content.data[device])
      };
    }
    return null;
  };
  return {
    getTileComponent
  };
};
const _sfc_main$1 = defineComponent({
  name: "ConstructorBlock",
  components: {
    stage: defineAsyncComponent(
      () => import('./stage-BlwcKXQO.mjs')
    ),
    textImageBlock: defineAsyncComponent(
      () => import('./simple-text-image-block-Bbb431up.mjs')
    ),
    textImageBlocks: defineAsyncComponent(
      () => import('./simple-text-image-blocks-TEOxhjIN.mjs')
    ),
    textImageBlockWithBtn: defineAsyncComponent(
      () => import('./simple-text-image-with-btn-BmV5loxg.mjs')
    ),
    collapseTextImageBlock: defineAsyncComponent(
      () => import('./collapse-text-image-block-Brm3EXFW.mjs')
    ),
    categoriesBlocks: defineAsyncComponent(
      () => import('./private-categories-list-iCYK3N8k.mjs')
    ),
    seo: defineAsyncComponent(
      () => import('./seo-content-9I8wssV3.mjs')
    ),
    mainTextBlock: defineAsyncComponent(
      () => import('./main-text-block-D73cz3re.mjs')
    ),
    tilesNavigation: defineAsyncComponent(
      () => import('./tiles-navigation-DpEYUQU8.mjs')
    ),
    instructionList: defineAsyncComponent(
      () => import('./instruction-list-CAEkaYYB.mjs')
    ),
    aboutInTiles: defineAsyncComponent(
      () => import('./about-in-tiles-pkab6Pyg.mjs')
    ),
    contacts: defineAsyncComponent(
      () => import('./contacts-details-2Z2umr5g.mjs')
    ),
    googleMap: defineAsyncComponent(
      () => import('./google-map-vw_pQjPF.mjs')
    ),
    htmlBlock: defineAsyncComponent(
      () => import('./html-content-block-DMskX_GB.mjs')
    ),
    iframeHtmlContent: defineAsyncComponent(
      () => import('./iframe-html-content-CrIuTD0q.mjs')
    ),
    iframeAutoheightContent: defineAsyncComponent(
      () => import('./iframe-autoheight-content-Cva9f1kS.mjs')
    ),
    feedbackForm: defineAsyncComponent(
      () => import('./feedback-form-Pmff9f3D.mjs')
    ),
    fullwidthBanner: defineAsyncComponent(
      () => import('./fullwidth-banner-MP3NfZA2.mjs')
    ),
    faq: defineAsyncComponent(
      () => import('./faq-expansion-BrmmlwmX.mjs')
    ),
    contactsBlock: defineAsyncComponent(
      () => import('./contacts-block-CeQtf3IO.mjs')
    ),
    clockCounter: defineAsyncComponent(
      () => import('./contacts-block-CeQtf3IO.mjs')
    ),
    lobStripe: defineAsyncComponent(
      () => import('./lob-stripe-vl5SXmuh.mjs')
    ),
    productsCarousel: defineAsyncComponent(
      () => import('./products-carousel-DnoLvq2t.mjs')
    ),
    gridCategory: defineAsyncComponent(
      () => import('./grid-category-C9itXP9l.mjs')
    ),
    wpBlog: defineAsyncComponent(
      () => import('./wp-banners-DT-A8hEg.mjs')
    ),
    compareDevice: defineAsyncComponent(
      () => import('./compareDevice-sLYr2ufU.mjs')
    ),
    tradeInCalculator: defineAsyncComponent(
      () => import('./TradeInCalculator-Aes_i0PZ.mjs')
    ),
    valueProps: defineAsyncComponent(
      () => import('./value-props-CeIZ74Pf.mjs')
    ),
    discoverServicesSlider: defineAsyncComponent(
      () => import('./discover-services-slider-BOTBmZzw.mjs')
    ),
    conversionModule: defineAsyncComponent(
      () => import('./conversion-slider-Lt3uLQRa.mjs')
    ),
    exploreProducts: defineAsyncComponent(
      () => import('./explore-products-06wk7qKH.mjs')
    ),
    compareBanner: defineAsyncComponent(
      () => import('./compare-banner-BJW32vBq.mjs')
    ),
    dynamicBanner: defineAsyncComponent(
      () => import('./dynamic-banner-BlhPIsMI.mjs')
    ),
    discoverBlock: defineAsyncComponent(
      () => import('./discover-block-CK1YV0re.mjs')
    ),
    promotionBanner: defineAsyncComponent(
      () => import('./promotion-banner-CMoE9yoD.mjs')
    )
  },
  props: {
    block: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(props) {
    const isMounted = ref(false);
    const deviceStore = useDeviceStore();
    const currentBlock = computed(() => {
      if (isMounted.value && props.block.getConfigByDevice) {
        return props.block.getConfigByDevice(deviceStore.getCurrent);
      }
      if (isMounted.value === false && props.block.getConfigByDevice) {
        return props.block.getConfigByDevice(deviceStore.getInitial);
      }
      return props.block;
    });
    return { currentBlock };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.currentBlock.component), {
    content: (_a = _ctx.currentBlock.data) == null ? void 0 : _a.content,
    data: _ctx.currentBlock.data,
    class: _ctx.currentBlock.data ? _ctx.currentBlock.data.class : "",
    onAddToCart: ($event) => _ctx.$emit("addToCart", $event)
  }, null), _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/constructor-blocks/constructor-block.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConstructorBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const usePromotionComponents = () => {
  const getPromotionBaseConfig = (contentData, promotions) => {
    if (!promotions) return null;
    const promoId = contentData == null ? void 0 : contentData.promotion_id;
    const promoItems = promotions.filter(
      (item) => item.promotion_ids.includes(+promoId)
    );
    const products = promoItems.map((item) => ({
      ...item,
      isAddToCart: contentData == null ? void 0 : contentData.isAddToCart
    }));
    return {
      component: "conversionModule",
      data: {
        title: contentData == null ? void 0 : contentData.title,
        products,
        promoId: contentData == null ? void 0 : contentData.promotion_id
      }
    };
  };
  const getPromoComponent = (content, { promotions }) => {
    if (!(content == null ? void 0 : content.data)) return null;
    if (content.type === "promotion_base") {
      return getPromotionBaseConfig(content.data, promotions);
    }
    return null;
  };
  return {
    getPromoComponent
  };
};
const _sfc_main = {
  __name: "constructor-blocks",
  __ssrInlineRender: true,
  props: {
    pageData: {
      type: Object,
      required: true
    },
    payload: {
      type: Object,
      default: () => ({
        products: [],
        bannerGroups: []
      })
    }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useI18n();
    const { addProductToCart } = useCartStore();
    const { replaceKeyOnValue, generatePromotionsProducts, getBannersByLang } = useConstructorUtils();
    const { getPromoComponent } = usePromotionComponents();
    const { getTileComponent } = useTileComponentsProvider();
    const pageStructure = shallowRef(null);
    const initPageStructure = async () => {
      var _a, _b, _c, _d;
      if (props.pageData === null) {
        return null;
      }
      const copyPayload = JSON.parse(JSON.stringify(props.payload));
      const pageBlocks = [];
      generatePromotionsProducts(
        (_a = props.pageData) == null ? void 0 : _a.product_promotions,
        (_b = props.pageData) == null ? void 0 : _b.products_from_catalog
      );
      const banners = getBannersByLang((_c = props.pageData) == null ? void 0 : _c.banners, locale.value);
      (_d = props.pageData) == null ? void 0 : _d.blocks.forEach((pageBlock) => {
        var _a2, _b2, _c2, _d2, _e, _f, _g;
        switch (pageBlock.type) {
          case "textarea":
            pageBlocks.push({
              component: "htmlBlock",
              data: {
                content: pageBlock.content
              }
            });
            return;
          case "html":
            pageBlocks.push({
              component: "iframeHtmlContent",
              data: {
                content: pageBlock.content
              }
            });
            return;
        }
        if (!((_a2 = pageBlock.content) == null ? void 0 : _a2.data)) {
          return;
        }
        const contentData = (_b2 = pageBlock.content) == null ? void 0 : _b2.data;
        switch (pageBlock.type) {
          case "promotion": {
            const promoBlock = getPromoComponent(pageBlock.content, {
              promotions: (_c2 = props.pageData) == null ? void 0 : _c2.product_promotions,
              banners
            });
            if (promoBlock) {
              pageBlocks.push(promoBlock);
            }
            return;
          }
          case "tileAndLink": {
            const blockInfo = {
              category: ((_d2 = props.pageData) == null ? void 0 : _d2.categories) || [],
              products: ((_e = props.pageData) == null ? void 0 : _e.products) || []
            };
            const categoryBlock = getTileComponent(pageBlock.content, blockInfo);
            if (categoryBlock) {
              pageBlocks.push(categoryBlock);
            }
            return;
          }
          case "requestAdvantages": {
            const advantagesComponent = getTileComponent(
              pageBlock.content,
              copyPayload
            );
            if (advantagesComponent) {
              pageBlocks.push(advantagesComponent);
            }
            return;
          }
        }
        if (!((_f = pageBlock.content) == null ? void 0 : _f.component)) {
          return;
        }
        if (pageBlock.content.useCatalogParser) {
          const copyContentData = JSON.parse(JSON.stringify(contentData));
          const block = {
            component: pageBlock.content.component,
            data: replaceKeyOnValue(copyContentData, copyPayload)
          };
          if ((_g = block.data) == null ? void 0 : _g.hidden) {
            return;
          }
          pageBlocks.push(block);
          return;
        }
        pageBlocks.push({
          component: pageBlock.content.component,
          data: contentData
        });
      });
      pageStructure.value = pageBlocks;
      return null;
    };
    initPageStructure();
    watch(
      () => props.pageData,
      () => initPageStructure(),
      { immediate: true }
    );
    const deviceStore = useDeviceStore();
    const currentDevice = computed(() => deviceStore.getCurrent);
    return (_ctx, _push, _parent, _attrs) => {
      if (pageStructure.value && pageStructure.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "constructor-blocks" }, _attrs))} data-v-06b48c78><!--[-->`);
        ssrRenderList(pageStructure.value, (pageBlock, index) => {
          _push(ssrRenderComponent(ConstructorBlock, {
            key: `${pageBlock.getConfigByDevice ? index + currentDevice.value : index}`,
            "when-idle": index < 2,
            "when-visible": index >= 2,
            block: pageBlock,
            class: ["constructor-block-item", {
              [`constructor-block-item__${pageBlock.component}`]: pageBlock.component,
              "constructor-block-item__without-padding": !pageBlock.component
            }],
            onAddToCart: unref(addProductToCart)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich-blocks/constructor-blocks/constructor-blocks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06b48c78"]]);

export { __nuxt_component_2 as _, useConstructorUtils as u };
//# sourceMappingURL=constructor-blocks-CH3HZKzT.mjs.map
