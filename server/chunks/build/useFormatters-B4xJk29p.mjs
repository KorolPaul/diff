const useFormatters = () => {
  const truncate = (content, length, clamp) => {
    clamp = clamp || "...";
    return content.length > length ? content.slice(0, length) + clamp : content;
  };
  const capitalize = (value) => value.toString().charAt(0).toUpperCase() + value.slice(1);
  const removeLastParentheses = (value) => {
    const lastParenthesesIndex = value.lastIndexOf("(");
    if (lastParenthesesIndex !== -1) {
      return value.substring(0, lastParenthesesIndex);
    }
    return value;
  };
  const truncateByFirstComma = (value) => value.split(/,/)[0];
  const trancateProductName = (value) => removeLastParentheses(truncateByFirstComma(value));
  return {
    capitalize,
    truncate,
    removeLastParentheses,
    truncateByFirstComma,
    trancateProductName
  };
};

export { useFormatters as u };
//# sourceMappingURL=useFormatters-B4xJk29p.mjs.map
