import { defineStore } from 'pinia';

const blockType = "footer";
const getFooterBlock = (footerState) => {
  var _a;
  if (!footerState) return null;
  const footerBlock = (_a = footerState.blocks) == null ? void 0 : _a.find(
    (block) => block.content.type === blockType
  );
  if (footerBlock) {
    return footerBlock;
  }
  return null;
};
const usePagesStore = defineStore("pages", {
  state: () => ({
    footer: null,
    isAppleCategoryPage: true,
    isComparePage: false
  }),
  getters: {
    getAboutSiteInfo() {
      var _a;
      if (!this.footer) return null;
      const footerBlock = getFooterBlock(this.footer);
      if ((_a = footerBlock == null ? void 0 : footerBlock.content) == null ? void 0 : _a.data) {
        return footerBlock.content.data;
      }
      return null;
    },
    getIsAppleCategoryPage() {
      return this.isAppleCategoryPage;
    }
  },
  actions: {
    setFooterPage(footerPage) {
      this.footer = footerPage;
    },
    setIsAppleCategoryPage(value) {
      this.isAppleCategoryPage = value;
    }
  }
});

export { usePagesStore as u };
//# sourceMappingURL=pages-CxSmVAwD.mjs.map
