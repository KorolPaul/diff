import { defineStore } from 'pinia';
import { K as CountriesApiService, e as useApi, P as PUBLIC_PREFIX, f as deserialize } from './server.mjs';
import { z } from 'zod';

const shopsPath = `${PUBLIC_PREFIX}shops`;
const workingHoursSchema = z.object({
  id: z.number(),
  start: z.string(),
  end: z.string(),
  days: z.array(z.string())
});
const addressSchema = z.object({
  id: z.number(),
  countryId: z.number(),
  cityId: z.number(),
  address: z.string(),
  lat: z.number(),
  lon: z.number(),
  url: z.string().nullable(),
  email: z.array(z.string()).nullable(),
  phone: z.array(z.string().nullable()),
  isMain: z.boolean(),
  sort: z.number(),
  workingHours: z.array(workingHoursSchema)
});
const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string()
});
const shopSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().nullable(),
  crmId: z.string(),
  sort: z.number(),
  addresses: z.array(addressSchema),
  services: z.array(serviceSchema),
  types: z.array(z.object({
    id: z.number(),
    key: z.string()
  }))
});
const shopsSchema = z.array(shopSchema);
const ShopsApiService = {
  async getShops(lang) {
    const { get } = useApi();
    const { data } = await get(shopsPath, { lang, limit: 220 });
    return deserialize(shopsPath, shopsSchema, data.value.data);
  },
  async getProductShops(productId) {
    const { get } = useApi();
    const { data } = await get(`${shopsPath}/product/${productId}`);
    return {
      data: data.value
    };
  }
};
const useShopsStore = defineStore("shops", {
  state: () => ({
    isSidebarOpened: false,
    shops: null,
    selectedShop: null,
    cities: null,
    countries: null
  }),
  getters: {
    getShops() {
      if (this.selectedShop && this.shops) {
        return [this.selectedShop, ...this.shops.filter((shop) => {
          var _a;
          return shop.id !== ((_a = this.selectedShop) == null ? void 0 : _a.id);
        })];
      }
      return this.shops;
    },
    getCities() {
      return this.cities;
    },
    getSelectedShop() {
      return this.selectedShop;
    },
    getIsSidebarOpened() {
      return this.isSidebarOpened;
    }
  },
  actions: {
    async getShopsData(lang) {
      const data = await ShopsApiService.getShops(lang);
      if (data) {
        this.shops = data;
      }
      const savedStore = localStorage.getItem("shop");
      if (savedStore) {
        const store = data.find((item) => item.id === Number(savedStore));
        if (store) {
          this.setSelectedShop(store);
        }
      }
    },
    async getCitiesData(ids) {
      const data = await CountriesApiService.getCitiesByIds(ids);
      if (data) {
        this.cities = data;
      }
    },
    async getCountriesData(ids) {
      const data = await CountriesApiService.getCountriesByIds(ids);
      if (data) {
        this.countries = data;
      }
    },
    setSelectedShop(shop) {
      this.selectedShop = shop;
    },
    setSidebarOpened(isOpened) {
      this.isSidebarOpened = isOpened;
    }
  }
});

export { useShopsStore as u };
//# sourceMappingURL=shops-qmTazkSN.mjs.map
