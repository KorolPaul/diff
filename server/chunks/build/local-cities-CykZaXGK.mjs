import { defineStore } from 'pinia';

const useLocalCitiesStore = defineStore("localCities", {
  state: () => ({
    currentLocalVersion: "",
    isConfirm: false
  }),
  getters: {
    current() {
      return this.currentLocalVersion;
    },
    getIsConfirm() {
      return this.isConfirm;
    }
  },
  actions: {
    setCurrent(localVersion) {
      this.currentLocalVersion = localVersion;
    },
    setConfirmStatus(isConfirm) {
      this.isConfirm = isConfirm;
    }
  }
});

export { useLocalCitiesStore as u };
//# sourceMappingURL=local-cities-CykZaXGK.mjs.map
