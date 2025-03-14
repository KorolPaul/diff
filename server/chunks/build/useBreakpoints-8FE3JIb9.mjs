import { computed } from 'vue';
import { h as useDeviceStore, I as gridBreakpoints } from './server.mjs';

const useBreakpoint = () => {
  const deviceStore = useDeviceStore();
  const currentBreakpoint = computed(
    () => deviceStore.getCurrentBreakpoint
  );
  return {
    isMinWidthSm: computed(() => currentBreakpoint.value > gridBreakpoints.sm),
    isMinWidthMd: computed(() => currentBreakpoint.value > gridBreakpoints.md),
    isMinWidthLg: computed(() => currentBreakpoint.value > gridBreakpoints.lg),
    isMinWidthXl: computed(() => currentBreakpoint.value > gridBreakpoints.xl),
    isMinWidthXxl: computed(
      () => currentBreakpoint.value > gridBreakpoints.xxl
    ),
    isMinWidthXxxl: computed(
      () => currentBreakpoint.value > gridBreakpoints.xxxl
    ),
    getCurrentSize: () => currentBreakpoint.value
  };
};

export { useBreakpoint as u };
//# sourceMappingURL=useBreakpoints-8FE3JIb9.mjs.map
