import { z } from 'zod';
import { e as useApi, P as PUBLIC_PREFIX, f as deserialize, s as seoSchema, p as productSchema, m as contentSchema } from './server.mjs';

const resource = `${PUBLIC_PREFIX}categories`;
const brands = `${PUBLIC_PREFIX}brands`;
const promo = `${PUBLIC_PREFIX}promo`;
const argumentSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
  type: z.string(),
  buckets: z.array(z.object({
    id: z.number(),
    name: z.string(),
    docCount: z.number(),
    docCountWithUserFilter: z.number()
  })).optional()
});
const categoryItemSchema = z.object({
  id: z.number(),
  isShown: z.boolean(),
  sort: z.number(),
  parentId: z.number(),
  catalogId: z.number(),
  name: z.string(),
  slug: z.string(),
  isTradeIn: z.boolean(),
  imageUrl: z.string().nullable(),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string()
  })).optional(),
  slogan: z.string().optional(),
  contents: z.array(contentSchema),
  minPrice: z.string().optional()
});
const categoryItemWithChildrenSchema = categoryItemSchema.merge(z.object({
  children: z.array(categoryItemSchema).optional()
}));
const categorySchema = z.object({
  id: z.number(),
  productsCount: z.number(),
  name: z.string(),
  slug: z.string(),
  contents: z.array(contentSchema),
  seo: seoSchema,
  parentId: z.number().nullable(),
  isPopular: z.boolean(),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string().nullable()
  })),
  image: z.object({
    url: z.string().nullable(),
    alt: z.string().nullable()
  }),
  productsMetaCount: z.number().nullable(),
  products: z.array(productSchema),
  children: z.array(categoryItemWithChildrenSchema),
  branch: z.array(categoryItemSchema),
  aggs: z.array(argumentSchema)
});
const allCategoriesSchema = z.array(categorySchema);
const CategoryApiService = {
  async getCategories(params) {
    const { get } = useApi();
    const { data } = await get(`${resource}`, params);
    return deserialize(resource, allCategoriesSchema, data == null ? void 0 : data.value.data);
  },
  async getCategoryBySlug(slug, filters, params) {
    var _a;
    const { get } = useApi();
    const { data, error } = await get(
      `${resource}/${slug}?includes[]=children&includes[]=promotions&includes[]=branch${filters.length ? `&${filters}` : ""}`,
      params
    );
    return {
      data: deserialize(resource, categorySchema, (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data),
      error: error.value
    };
  },
  async getCategoryById(id, params) {
    var _a;
    const { get } = useApi();
    const { data } = await get(`${resource}/${id}`, params);
    return deserialize(resource, categorySchema, (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data);
  },
  async getCategoryPromotions(id) {
    const { get } = useApi();
    const { data } = await get(
      `${resource}/${id}?includes[]=promotions&includes[]=branch`
    );
    return {
      data: data.value
    };
  },
  async getBrandsBySlug(slug, filters, params) {
    const { get } = useApi();
    const { data, error } = await get(
      `${brands}/${slug}?includes[]=children&includes[]=branch${filters.length ? `%${filters}` : ""}`,
      params
    );
    return {
      data: data.value,
      error: error.value
    };
  },
  async getPromoCategoryBySlug(slug, filters, params) {
    const { get } = useApi();
    const { data, error } = await get(
      `${promo}/${slug}?includes[]=children&includes[]=promotions&includes[]=branch${filters.length ? `&${filters}` : ""}`,
      params
    );
    return {
      data: deserialize(resource, categorySchema, data == null ? void 0 : data.value.data),
      error
    };
  }
};

export { CategoryApiService as C, categorySchema as c };
//# sourceMappingURL=CategoryApiService-CndB0tEv.mjs.map
