import { ref } from 'vue';

const useFetchError = (res) => {
  const fetchError = ref(null);
  const setFetchError = (code) => {
    fetchError.value = code;
    res.statusCode = code;
  };
  const setFetchValue = (value) => {
    fetchError.value = value;
  };
  return { fetchError, setFetchError, setFetchValue };
};

export { useFetchError as u };
//# sourceMappingURL=useFetchError-2KxXJi3G.mjs.map
