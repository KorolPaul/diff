import { a as useI18n, y as useConfigStore, z as useRuntimeConfig, x as useRequestEvent } from './server.mjs';
import { A as getRequestURL } from '../_/nitro.mjs';
import { a as useHead } from './index-r7vNs057.mjs';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const usePageMeta = () => {
  const { t } = useI18n();
  const $config = useRuntimeConfig();
  const getCurrentUrl = () => {
    {
      const proto = "https";
      const url = useRequestURL();
      const path = url.path;
      return `${proto}://${url.host}${path}`;
    }
  };
  const getCanonicalLink = (url) => {
    let canonicalUrl;
    if (!url) canonicalUrl = getCurrentUrl();
    else if (url.startsWith("http://") || url.startsWith("https://"))
      canonicalUrl = url;
    else {
      const currentBaseUrl = getCurrentUrl().split("/").slice(0, 3).join("/");
      canonicalUrl = `${currentBaseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
    }
    return {
      hid: "i18n-can",
      rel: "canonical",
      href: canonicalUrl == null ? void 0 : canonicalUrl.split("?")[0]
    };
  };
  const getStandardSettings = (ogTitle, ogDescription, ogType = "website", description = null) => [
    {
      property: "og:title",
      hid: "og:title",
      content: ogTitle
    },
    {
      property: "og:description",
      hid: "og:description",
      content: ogDescription
    },
    {
      property: "og:url",
      hid: "og:url",
      content: getCurrentUrl()
    },
    {
      property: "og:type",
      hid: "og:type",
      content: ogType
    },
    {
      name: "description",
      hid: "description",
      content: description != null ? description : ogDescription
    }
  ];
  const getImageSettings = (image) => {
    var _a;
    const configStore = useConfigStore();
    let settings;
    if (image) {
      settings = [
        {
          property: "og:image",
          content: `${(_a = configStore.getCdnUrl) != null ? _a : $config.public.cdn}/s3${image}`
        }
      ];
    } else settings = [];
    return settings;
  };
  const getDefaultTitleForStaticPage = (pageName) => {
    if (!pageName) return "";
    return t("static_page_default_og_title", { name: pageName });
  };
  const getDefaultTitleForCatalogPage = (pageName) => {
    if (!pageName) return "";
    return t("catalog_page_default_og_title", { name: pageName });
  };
  const setMetaToStaticPage = (pageRef) => {
    var _a2;
    var _a, _b, _c, _d, _e, _f, _g;
    useHead({
      title: (_a = pageRef.value) == null ? void 0 : _a.seo_title,
      link: [getCanonicalLink((_b = pageRef.value) == null ? void 0 : _b.canonical_url)],
      meta: [
        ...getStandardSettings(
          (_a2 = (_c = pageRef.value) == null ? void 0 : _c.seo_og_title) != null ? _a2 : getDefaultTitleForStaticPage((_d = pageRef.value) == null ? void 0 : _d.title),
          (_e = pageRef.value) == null ? void 0 : _e.seo_description
        ),
        ...getImageSettings((_g = (_f = pageRef.value) == null ? void 0 : _f.image) == null ? void 0 : _g.path)
      ]
    });
  };
  const setMetaToCatalogPage = (pageRef) => {
    var _a2, _b2;
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    useHead({
      title: (_b = (_a = pageRef.value) == null ? void 0 : _a.seo) == null ? void 0 : _b.page_title,
      link: [getCanonicalLink((_c = pageRef.value) == null ? void 0 : _c.canonical_url)],
      meta: [
        ...getStandardSettings(
          (_a2 = (_e = (_d = pageRef.value) == null ? void 0 : _d.seo) == null ? void 0 : _e.og_title) != null ? _a2 : getDefaultTitleForCatalogPage((_f = pageRef.value) == null ? void 0 : _f.name),
          (_h = (_g = pageRef.value) == null ? void 0 : _g.seo) == null ? void 0 : _h.description,
          ((_i = pageRef.value) == null ? void 0 : _i.sku) ? "product" : "website"
        ),
        ...getImageSettings(
          (_b2 = (_k = (_j = pageRef.value) == null ? void 0 : _j.image) == null ? void 0 : _k.url) != null ? _b2 : (_o = (_n = (_m = (_l = pageRef.value) == null ? void 0 : _l.variations) == null ? void 0 : _m[0]) == null ? void 0 : _n.images) == null ? void 0 : _o[0]
        )
      ]
    });
  };
  return {
    setMetaToStaticPage,
    setMetaToCatalogPage
  };
};

export { usePageMeta as u };
//# sourceMappingURL=usePageMeta-fFtjylAO.mjs.map
