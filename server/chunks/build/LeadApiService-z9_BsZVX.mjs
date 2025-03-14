import { e as useApi, P as PUBLIC_PREFIX } from './server.mjs';

const feedback = `${PUBLIC_PREFIX}crm/leads/feedback`;
const store = `${PUBLIC_PREFIX}crm/leads/store`;
const LeadApiService = {
  async sendFeedbackData(data) {
    const { post } = useApi();
    return post(`${feedback}`, data);
  },
  async sendStoreData(data) {
    const { post } = useApi();
    return post(`${store}`, data);
  }
};

export { LeadApiService as L };
//# sourceMappingURL=LeadApiService-z9_BsZVX.mjs.map
