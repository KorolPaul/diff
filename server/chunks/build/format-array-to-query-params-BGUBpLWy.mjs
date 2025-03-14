const formatArrayToQueryParams = (params) => {
  const queryParams = {};
  const buildQueryParams = (keyPrefix, value) => {
    if (!Array.isArray(value)) {
      queryParams[keyPrefix] = value;
      return;
    }
    value.forEach((item, index) => {
      if (Array.isArray(item)) {
        buildQueryParams(`${keyPrefix}[${index}]`, item);
      } else {
        queryParams[`${keyPrefix}[${index}]`] = item;
      }
    });
  };
  for (const key in params) {
    buildQueryParams(key.replace(/filters\[(.+?)\]/, "filters[$1]"), params[key]);
  }
  return queryParams;
};

export { formatArrayToQueryParams as f };
//# sourceMappingURL=format-array-to-query-params-BGUBpLWy.mjs.map
