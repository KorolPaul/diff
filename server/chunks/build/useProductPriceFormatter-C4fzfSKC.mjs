const formatPrice = (price) => Number(price).toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const formatPriceWithSpaces = (price) => price ? `${new Intl.NumberFormat("ru-Ru").format(price)}` : 0;
const useProductPriceFormatter = () => ({
  formatPrice,
  formatPriceWithSpaces
});

export { useProductPriceFormatter as u };
//# sourceMappingURL=useProductPriceFormatter-C4fzfSKC.mjs.map
