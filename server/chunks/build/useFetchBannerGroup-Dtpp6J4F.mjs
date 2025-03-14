import { B as BannerApiService } from './BannerApiService-o77k-wf8.mjs';
import { a as useI18n, v as bannerGroupsNames } from './server.mjs';
import { ref } from 'vue';

const useFetchBannerGroup = () => {
  const bannersGroup = ref(null);
  const bannersSpeed = ref(3e3);
  const { locale } = useI18n();
  const setBannersGroup = (group) => {
    bannersGroup.value = group.banners;
    bannersSpeed.value = group.frequency_slider;
  };
  const fetchBannerGroup = async () => {
    const data = await BannerApiService.getGroupBy(
      bannerGroupsNames.subcategoryBanner,
      locale.value
    );
    if (data) {
      setBannersGroup(data);
    }
  };
  return {
    bannersGroup,
    bannersSpeed,
    fetchBannerGroup
  };
};

export { useFetchBannerGroup as u };
//# sourceMappingURL=useFetchBannerGroup-Dtpp6J4F.mjs.map
