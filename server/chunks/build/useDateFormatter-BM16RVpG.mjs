const useDateFormatter = () => {
  const formatToDayAndMonth = (date) => {
    const dateValue = new Date(date);
    return `${dateValue.getDate()}.${dateValue.getMonth() + 1}`;
  };
  return {
    formatToDayAndMonth
  };
};

export { useDateFormatter as u };
//# sourceMappingURL=useDateFormatter-BM16RVpG.mjs.map
