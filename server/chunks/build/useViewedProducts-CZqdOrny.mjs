import { computed } from 'vue';
import { useStorage } from '@vueuse/core';

const useViewedProducts = () => {
  const maxCount = 6;
  const state = useStorage("viewed", []);
  const setViewedProduct = (payload) => {
    if (!state.value.includes(payload) && payload) {
      if (state.value.length >= maxCount) {
        state.value.shift();
        state.value.push(payload);
      } else {
        state.value.push(payload);
      }
    }
  };
  const getViewedProducts = computed(() => state.value);
  return {
    setViewedProduct,
    getViewedProducts
  };
};

export { useViewedProducts as u };
//# sourceMappingURL=useViewedProducts-CZqdOrny.mjs.map
