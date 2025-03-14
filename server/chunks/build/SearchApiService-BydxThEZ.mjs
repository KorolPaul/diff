import { z } from 'zod';
import { e as useApi, f as deserialize, $ as creditsDataSchema } from './server.mjs';

const metaSchema = z.object({
  currentPage: z.number(),
  from: z.number(),
  lastPage: z.number(),
  links: z.array(z.object({
    url: z.string().nullable(),
    label: z.string(),
    active: z.boolean()
  })),
  path: z.string(),
  perPage: z.number(),
  to: z.number(),
  total: z.number()
});
z.object({
  id: z.string(),
  name: z.string(),
  docCount: z.number(),
  docCountWithUserFilter: z.number().optional()
});
const productSearchLinksSchema = z.object({
  first: z.string().nullable(),
  last: z.string().nullable(),
  prev: z.string().nullable(),
  next: z.string().nullable()
});
const productSearchFiltersSchema = z.object({
  minPrice: z.object({ minPrice: z.string().nullable() }),
  maxPrice: z.object({ maxPrice: z.string().nullable() }),
  stock: z.object({
    inStock: z.number(),
    outOfStock: z.number()
  }),
  topLevelCategories: z.object({
    count: z.number(),
    items: z.array(
      z.object({
        value: z.number(),
        count: z.number(),
        name: z.string()
      })
    )
  }),
  vendors: z.object({
    count: z.number(),
    items: z.array(
      z.object({
        value: z.number(),
        count: z.number(),
        name: z.string()
      })
    )
  }),
  features: z.object({
    count: z.number(),
    groups: z.array(
      z.object({
        count: z.number(),
        name: z.string(),
        values: z.array(
          z.object({
            count: z.number(),
            name: z.string(),
            key: z.string(),
            values: z.array(z.number())
          })
        )
      })
    )
  })
});
const productSearchSchema = z.object({
  id: z.string(),
  name: z.string(),
  sku: z.string(),
  slug: z.string(),
  price: z.number(),
  finalPrice: z.number(),
  realStock: z.number(),
  realNpiState: z.boolean(),
  discountType: z.number(),
  priceCat1: z.number().nullable(),
  priceCat2: z.number().nullable(),
  priceCat3: z.number().nullable(),
  priceCat4: z.number().nullable(),
  priceCat5: z.number().nullable(),
  customBadges: z.string().nullable(),
  images: z.object({ url: z.string(), lang: z.string().nullable() }).nullable(),
  featuredData: creditsDataSchema.optional()
});
const productSearchResponseSchema = z.object({
  meta: metaSchema,
  data: z.array(productSearchSchema),
  links: productSearchLinksSchema,
  availableFilters: productSearchFiltersSchema
});
const suggestionCategorySchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string()
});
const suggestionProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  sku: z.string(),
  price: z.number(),
  finalPrice: z.number(),
  images: z.array(z.object({ url: z.string(), lang: z.string() }))
});
const suggestionSearchSchema = z.object({
  data: z.object({
    categories: z.array(
      suggestionCategorySchema
    ),
    products: z.array(
      suggestionProductSchema
    )
  })
});
const SearchApiService = {
  async searchProducts(params) {
    const url = "api/v2/search/products";
    const { get } = useApi();
    const { data } = await get(url, params);
    return deserialize(url, productSearchResponseSchema, data == null ? void 0 : data.value);
  },
  async suggestionSearch(params) {
    const url = "api/v2/search/suggests";
    const { get } = useApi();
    const { data } = await get(url, params);
    return deserialize(url, suggestionSearchSchema, data == null ? void 0 : data.value);
  }
};

export { SearchApiService as S };
//# sourceMappingURL=SearchApiService-BydxThEZ.mjs.map
