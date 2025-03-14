import { useElementSize } from '@vueuse/core';
import { W as useState } from './server.mjs';
import { computed, watch } from 'vue';

const useHeaderState = (headerRef) => {
  const isHeaderHidden = useState("$aZ6m1lNG6K");
  const { height } = useElementSize(headerRef);
  const isHidden = computed(() => isHeaderHidden.value);
  const setHeightProperty = (value) => {
    (void 0).documentElement.style.setProperty("--header-height", `${value}px`);
  };
  const setHidden = (value) => {
    if (isHeaderHidden.value !== value) {
      isHeaderHidden.value = value;
    }
  };
  watch(height, (value) => {
    setHeightProperty(value);
  });
  return {
    setHidden,
    isHidden
  };
};

export { useHeaderState as u };
//# sourceMappingURL=useHeaderState-DEk9LBo0.mjs.map
