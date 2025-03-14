import { computed } from 'vue';
import humps from 'humps';

const useProductPrice = (product) => {
  const { camelizeKeys } = humps;
  const camelizedProduct = camelizeKeys(product);
  const productCount = computed(() => camelizedProduct.orderedQuantity || 1);
  const totalPrice = computed(() => camelizedProduct.price * productCount.value);
  const totalPriceDiscount = computed(
    () => camelizedProduct.priceBundle || camelizedProduct.priceWithDiscount
  );
  const totalPriceDiscountValue = computed(
    () => totalPriceDiscount.value * productCount.value
  );
  const priceCat4 = computed(
    () => camelizedProduct.totalPriceCategory5 * productCount.value
  );
  return {
    productCount,
    totalPrice,
    totalPriceDiscountValue,
    priceCat4
  };
};

export { useProductPrice as u };
//# sourceMappingURL=useProductPrice-CDseUihT.mjs.map
