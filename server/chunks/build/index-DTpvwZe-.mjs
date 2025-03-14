import { u as useConstructorUtils, _ as __nuxt_component_2 } from './constructor-blocks-CH3HZKzT.mjs';
import { _ as __nuxt_component_0 } from './ui-page-preloader-f4jo8KnM.mjs';
import { shallowRef, withAsyncContext, resolveComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as useGtm } from './server.mjs';
import { P as PageApiService } from './PageApiService-DEiJJG72.mjs';
import { u as usePageMeta } from './usePageMeta-fFtjylAO.mjs';
import { u as useFetchError } from './useFetchError-2KxXJi3G.mjs';
import './BannerApiService-o77k-wf8.mjs';
import 'zod';
import './ui-preloader-C4Bi7ENY.mjs';
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
import 'humps';
import './index-r7vNs057.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const { pushGtmEvent } = useGtm();
    const { fetchConstructorPayload } = useConstructorUtils();
    const pageData = shallowRef(null);
    const constructorPayload = shallowRef([]);
    const { fetchError, setFetchError } = useFetchError();
    const { setMetaToStaticPage } = usePageMeta();
    try {
      const asyncData = ([__temp, __restore] = withAsyncContext(() => PageApiService.getAggregatePageBySlug(
        "contacts"
      )), __temp = await __temp, __restore(), __temp);
      pageData.value = (_a = asyncData == null ? void 0 : asyncData.data) == null ? void 0 : _a.data;
      constructorPayload.value = ([__temp, __restore] = withAsyncContext(() => fetchConstructorPayload(
        pageData.value.blocks
      )), __temp = await __temp, __restore(), __temp);
    } catch (e) {
      setFetchError((_b = e.response) == null ? void 0 : _b.status);
    } finally {
      pushGtmEvent("pageview", {
        title: (_c = pageData.value) == null ? void 0 : _c.seo_title
      });
    }
    setMetaToStaticPage(pageData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConstructorBlocks = __nuxt_component_2;
      const _component_UiPagePreloader = __nuxt_component_0;
      const _component_AppError = resolveComponent("AppError");
      if (!unref(fetchError)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts-page" }, _attrs))}>`);
        if (unref(pageData) && unref(constructorPayload)) {
          _push(ssrRenderComponent(_component_ConstructorBlocks, {
            "page-data": unref(pageData),
            payload: unref(constructorPayload)
          }, null, _parent));
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_UiPagePreloader, null, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_AppError, {
          error: { statusCode: unref(fetchError) }
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pagesTemplates/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DTpvwZe-.mjs.map
