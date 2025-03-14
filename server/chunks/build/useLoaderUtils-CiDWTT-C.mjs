import { ref } from 'vue';

const useFormLoader = (defaultValue = false) => {
  const isLoading = ref(defaultValue);
  const startLoading = () => {
    isLoading.value = true;
  };
  const stopLoading = () => {
    isLoading.value = false;
  };
  return {
    isLoading,
    startLoading,
    stopLoading
  };
};

export { useFormLoader as u };
//# sourceMappingURL=useLoaderUtils-CiDWTT-C.mjs.map
