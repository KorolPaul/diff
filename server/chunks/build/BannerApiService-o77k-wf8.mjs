import { e as useApi, P as PUBLIC_PREFIX, f as deserialize } from './server.mjs';
import { z } from 'zod';

const groupUrl = `${PUBLIC_PREFIX}banner-groups`;
const banners = `${PUBLIC_PREFIX}banners`;
const bannerSchema = z.object({
  name: z.string().optional(),
  content: z.object({
    bgColors: z.array(z.string()).optional(),
    bannerSizes: z.array(z.object({
      id: z.number(),
      size: z.string(),
      image: z.object({
        file: z.object({
          id: z.number(),
          name: z.string().optional(),
          path: z.string()
        }).nullable()
      }),
      title: z.string().optional(),
      description: z.string().optional(),
      buttonText: z.string().optional()
    }))
  }),
  tag: z.string(),
  url: z.string().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  isTextShown: z.boolean()
});
const bannerGroupsSchema = z.object({
  name: z.string(),
  banners: z.array(bannerSchema),
  frequencySlider: z.number().optional()
});
const BannerApiService = {
  async getGroupBy(key, lang, category_id) {
    var _a;
    const { get } = useApi();
    const { data } = await get(groupUrl, { key, lang, category_id });
    return deserialize(groupUrl, bannerGroupsSchema, (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data);
  },
  async getBannerById(lang, bannerId) {
    var _a;
    const { get } = useApi();
    try {
      const { data } = await get(`${banners}/${bannerId}`, { lang });
      return (_a = data.value) == null ? void 0 : _a.data;
    } catch (e) {
      return { data: { data: null } };
    }
  },
  async searchBanner(params) {
    const { get } = useApi();
    const { data } = await get(`${banners}/search`, params);
    return {
      data: data.value
    };
  }
};

export { BannerApiService as B };
//# sourceMappingURL=BannerApiService-o77k-wf8.mjs.map
