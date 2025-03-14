import { e as useApi, P as PUBLIC_PREFIX } from './server.mjs';

const resource = `${PUBLIC_PREFIX}pages`;
const PageApiService = {
  async getPageBySlug(slug, params) {
    const { get } = useApi();
    const { data } = await get(`${resource}/${encodeURI(slug)}`, params);
    return {
      data: data.value.data
    };
  },
  async getAggregatePageBySlug(slug, params) {
    const url = `${PUBLIC_PREFIX}aggregated/pages/${encodeURI(
      slug
    )}?includes[]=banner&includes[]=promotion&includes[]=product&includes[]=category`;
    const { get } = useApi();
    const { data, error } = await get(url, params);
    return {
      data: data.value,
      error: error.value
    };
  }
};

export { PageApiService as P };
//# sourceMappingURL=PageApiService-DEiJJG72.mjs.map
