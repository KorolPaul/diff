import { ref } from 'vue';
import { a as useI18n } from './server.mjs';

const useCurrencyMark = (currency, useDefault = false) => {
  const { defaultLocale } = useI18n();
  const currencyMark = ref("");
  switch (currency == null ? void 0 : currency.toLowerCase()) {
    case "usd":
      currencyMark.value = " $";
      break;
    case "eur":
      currencyMark.value = " EUR";
      break;
    case "pln":
      currencyMark.value = " Z\u0142";
      break;
    case "kzt":
      currencyMark.value = " \u20B8";
      break;
    case "gel":
      currencyMark.value = " GEL";
      break;
    case "amd":
      currencyMark.value = " AMD";
      break;
    case "mdl":
      currencyMark.value = " MDL";
      break;
    case "uzs":
      currencyMark.value = " UZS";
      break;
    case "azn":
      currencyMark.value = " AZN";
      break;
    default:
      currencyMark.value = "";
  }
  if (useDefault) {
    switch (defaultLocale.toUpperCase()) {
      case "CY":
        currencyMark.value = " EUR";
        break;
      case "PL":
        currencyMark.value = " Z\u0142";
        break;
      case "AZ":
        currencyMark.value = " AZN";
        break;
      case "UZ":
        currencyMark.value = " UZS";
        break;
      case "KZ":
        currencyMark.value = " \u20B8";
        break;
      case "SA":
        currencyMark.value = " ZAR";
        break;
      case "GE":
        currencyMark.value = " GEL";
        break;
      case "AM":
        currencyMark.value = " AMD";
        break;
      case "MD":
        currencyMark.value = " MDL";
        break;
    }
  }
  return {
    currencyMark
  };
};

export { useCurrencyMark as u };
//# sourceMappingURL=useCurrencyMark-7LtpyYD6.mjs.map
