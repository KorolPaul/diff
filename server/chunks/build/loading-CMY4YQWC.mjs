import { defineStore } from 'pinia';

const useLoadingStore = defineStore("loading", {
  state: () => ({
    isLoading: false
  }),
  getters: {
    getIsLoading: (state) => state.isLoading
  },
  actions: {
    setIsLoading(isLoading) {
      this.isLoading = isLoading;
    }
  }
});

export { useLoadingStore as u };
//# sourceMappingURL=loading-CMY4YQWC.mjs.map
