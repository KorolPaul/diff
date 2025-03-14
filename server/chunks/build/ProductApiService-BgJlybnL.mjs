import { e as useApi, P as PUBLIC_PREFIX } from './server.mjs';

const resource = `${PUBLIC_PREFIX}products`;
const brandResource = `${PUBLIC_PREFIX}brands`;
const ProductApiService = {
  async getProductBySlug(slug, params) {
    const { get } = useApi();
    const { data, error } = await get(`${resource}/${slug}`, params);
    return {
      data: data.value,
      error: error.value
    };
  },
  async getProductBundlesBySlug(id) {
    const { get } = useApi();
    const { data } = await get(`${resource}/${id}/bundles`);
    return {
      data: data.value
    };
  },
  async checkBundles(ids) {
    let params = "";
    ids.forEach((id) => {
      const index = ids.indexOf(id);
      if (index < ids.length - 1) {
        params += `product_ids[]=${id}&`;
      } else {
        params += `product_ids[]=${id}`;
      }
    });
    const { get } = useApi();
    const { data } = get(`api/bundles-check?${params}`);
    return {
      data: data.value
    };
  },
  async getProducts(params) {
    const { get } = useApi();
    const { data } = await get(`${resource}/`, params);
    return {
      data: data.value
    };
  },
  async getBrandForProductBySlug(slug, params) {
    const { get } = useApi();
    const { data } = await get(`${brandResource}/${slug}`, params);
    return {
      data: data.value
    };
  },
  async getCrossSaleCategories(params) {
    const { get } = useApi();
    const { data } = await get(
      `${resource}/grouped-cross-sale?includes[]=similar_products`,
      params
    );
    return {
      data: data.value
    };
  },
  async getCrossSaleCategoryProducts(productId, categoryId) {
    const { get } = useApi();
    const { data } = await get(
      `${resource}/${productId}/grouped-cross-sale?category_id=${categoryId}&limit=20&page=1`
    );
    return {
      data: data.value
    };
  }
};

export { ProductApiService as P };
//# sourceMappingURL=ProductApiService-BgJlybnL.mjs.map
