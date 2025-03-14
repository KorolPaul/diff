import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, defineAsyncComponent, useSSRContext } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const Icons = {
  account: defineAsyncComponent(() => import('./Account-B4y9_uOU.mjs')),
  phone: defineAsyncComponent(() => import('./PhoneIcon-DVMnnjnM.mjs')),
  cart: defineAsyncComponent(() => import('./CartIcon-Dvlwkn-w.mjs')),
  compareLight: defineAsyncComponent(() => import('./CompareLight-HywmUvyD.mjs')),
  instagram: defineAsyncComponent(() => import('./InstragamIcon-C4kEG4lG.mjs')),
  twitter: defineAsyncComponent(() => import('./TwitterIcon-DPRUiPvN.mjs')),
  facebook: defineAsyncComponent(() => import('./FacebookIcon-YMaiKdfc.mjs')),
  user: defineAsyncComponent(() => import('./UserIcon-CfBhWOcm.mjs')),
  telegram: defineAsyncComponent(() => import('./TelegramIcon-QlQbEE4K.mjs')),
  viber: defineAsyncComponent(() => import('./ViberIcon-B61Eeja_.mjs')),
  watsup: defineAsyncComponent(() => import('./WatsupIcon-B250hvmQ.mjs')),
  linkedin: defineAsyncComponent(() => import('./LinkedinIcon-JcTmEpDG.mjs')),
  linkedinColored: defineAsyncComponent(
    () => import('./LinkedInColoredIcon-BqLepLmp.mjs')
  ),
  instagramColored: defineAsyncComponent(
    () => import('./InstagramColoredIcon-DnjuxqB_.mjs')
  ),
  facebookColored: defineAsyncComponent(
    () => import('./FacebookColoredIcon-D_2IbEZK.mjs')
  ),
  telegramColored: defineAsyncComponent(
    () => import('./TelegramColoredIcon-Dngv5ZX4.mjs')
  ),
  whatsappColored: defineAsyncComponent(
    () => import('./WhatsappColoredIcon-id1vSTNd.mjs')
  ),
  youtube: defineAsyncComponent(() => import('./YoutubeIcon-BA8bSsdR.mjs')),
  youtubeColorless: defineAsyncComponent(
    () => import('./YoutubeColorlessIcon-nXNWftnI.mjs')
  ),
  tiktok: defineAsyncComponent(() => import('./TikTokIcon-rgwMD6cP.mjs')),
  shop: defineAsyncComponent(() => import('./Shop-VdCSyG8-.mjs')),
  pickup: defineAsyncComponent(() => import('./Shop-VdCSyG8-.mjs')),
  share: defineAsyncComponent(() => import('./ShareIcon-BvD7hdBP.mjs')),
  lock: defineAsyncComponent(() => import('./LockIcon-BbsQYKbE.mjs')),
  car: defineAsyncComponent(() => import('./CarIcon-BjMIlTFp.mjs')),
  courier: defineAsyncComponent(() => import('./CarIcon-BjMIlTFp.mjs')),
  express_regional_courier: defineAsyncComponent(
    () => import('./CarIcon-BjMIlTFp.mjs')
  ),
  regional_courier: defineAsyncComponent(() => import('./CarIcon-BjMIlTFp.mjs')),
  checkoutWaitingIcon: defineAsyncComponent(
    () => import('./CheckoutWaitingIcon-BxluA5Lw.mjs')
  ),
  checkoutSuccessIcon: defineAsyncComponent(
    () => import('./CheckoutSuccessIcon-B4oAPz0f.mjs')
  ),
  checkoutErrorIcon: defineAsyncComponent(
    () => import('./CheckoutErrorIcon-Zi7RsHYp.mjs')
  ),
  loader: defineAsyncComponent(() => import('./LoaderIcon-DK5vp52J.mjs')),
  tradeIn: defineAsyncComponent(() => import('./TradeInIcon-CheiN19L.mjs')),
  tooltip: defineAsyncComponent(() => import('./Tooltip-Ckkz1GNh.mjs')),
  apple_pay: defineAsyncComponent(
    () => import('./PaymentApplePayIcon-D-DxMYTz.mjs')
  ),
  blik: defineAsyncComponent(() => import('./PaymentBlikIcon-BGolPDsZ.mjs')),
  cash: defineAsyncComponent(() => import('./PaymentCashIcon-CxubKsLi.mjs')),
  cashless_payment: defineAsyncComponent(
    () => import('./PaymentCashlessPaymentIcon-PI4NO1Ou.mjs')
  ),
  credit_and_installment: defineAsyncComponent(
    () => import('./PaymentCreditAndInstallmentIcon-buIaBRXb.mjs')
  ),
  credit_card: defineAsyncComponent(
    () => import('./PaymentCreditCardIcon-HeoqeTbM.mjs')
  ),
  link_payment: defineAsyncComponent(
    () => import('./PartialPayment-Dtuj-gK3.mjs')
  ),
  partial_payment: defineAsyncComponent(
    () => import('./PaymentLinkPaymentIcon-DURlO29V.mjs')
  ),
  kaspi_logo: defineAsyncComponent(() => import('./KaspiLogo-pAQkj5Q1.mjs')),
  google_pay: defineAsyncComponent(() => import('./GooglePay-BvNF-pLF.mjs')),
  online: defineAsyncComponent(() => import('./PaymentOnlineIcon-CFuMa_IQ.mjs')),
  pay_pal: defineAsyncComponent(() => import('./PaymentPayPalIcon-D7AfytBb.mjs')),
  credit: defineAsyncComponent(
    () => import('./PaymentCreditAndInstallmentIcon-buIaBRXb.mjs')
  ),
  tradeInSuccessIcon: defineAsyncComponent(
    () => import('./TradeInSuccessIcon-DAjYJI8i.mjs')
  ),
  failIcon: defineAsyncComponent(() => import('./ErrorIcon-C83xBsWq.mjs')),
  confirmedIcon: defineAsyncComponent(
    () => import('./ConfirmedIcon-E5WL1HmF.mjs')
  ),
  warningIcon: defineAsyncComponent(() => import('./WarningIcon-D5c5RxFI.mjs')),
  loginIcon: defineAsyncComponent(() => import('./LoginIcon-CW1ifQxr.mjs')),
  orderIcon: defineAsyncComponent(() => import('./OrderIcon-6_Y3eirc.mjs')),
  logoutIcon: defineAsyncComponent(() => import('./LogoutIcon-CXwC6gV6.mjs')),
  text: defineAsyncComponent(() => import('./Text-jmyfLZn8.mjs')),
  shippingBoldIcon: defineAsyncComponent(
    () => import('./ShippingBoldIcon-DR5Oo2RX.mjs')
  ),
  searchIcon: defineAsyncComponent(() => import('./SearchIcon-BKFI9Eii.mjs')),
  chevronIcon: defineAsyncComponent(() => import('./ChevronIcon-stsW8XJP.mjs')),
  chevronLeftIcon: defineAsyncComponent(
    () => import('./ChevronLeftIcon-DE1oG1Yo.mjs')
  ),
  chevronRightIcon: defineAsyncComponent(
    () => import('./ChevronRightIcon-DdCP7HuS.mjs')
  ),
  enterIcon: defineAsyncComponent(() => import('./EnterIcon-DhVsU2QP.mjs')),
  filterIcon: defineAsyncComponent(() => import('./FilterIcon-DBCvnODt.mjs')),
  plus: defineAsyncComponent(() => import('./Plus-BDvAdNPF.mjs')),
  dots: defineAsyncComponent(() => import('./DotsIcon-CDhW1hde.mjs')),
  close: defineAsyncComponent(() => import('./CloseIcon-DjnrhUuP.mjs')),
  sidebarClose: defineAsyncComponent(
    () => import('./SidebarCloseIcon-C0mx98n8.mjs')
  ),
  chevronCalendarIcon: defineAsyncComponent(
    () => import('./ChevronCalendarIcon-CNazKeI-.mjs')
  ),
  calendarIcon: defineAsyncComponent(() => import('./CalendarIcon-BX4FIKwb.mjs')),
  closeModalIcon: defineAsyncComponent(
    () => import('./CloseModalIcon-C53FQIf4.mjs')
  ),
  noImageIcon: defineAsyncComponent(() => import('./NoImageIcon-DC3XseNS.mjs')),
  markerIcon: defineAsyncComponent(() => import('./MarkerIcon-DiytCFjL.mjs')),
  warningWithBorderIcon: defineAsyncComponent(
    () => import('./WarningWithBorderIcon-DQpM1ILb.mjs')
  ),
  downloadIcon: defineAsyncComponent(() => import('./DownloadIcon-CNmOvlxA.mjs')),
  success: defineAsyncComponent(() => import('./SuccessIcon-CLbK7ca1.mjs')),
  copy: defineAsyncComponent(() => import('./CopyIcon-DAwF8EsY.mjs')),
  // old plaza ui icons
  arrowLeft: defineAsyncComponent(() => import('./ArrowLeftIcon-CBA35B8S.mjs')),
  arrowRight: defineAsyncComponent(() => import('./ArrowRightIcon-DxIE7j9i.mjs')),
  arrowLeftSlider: defineAsyncComponent(
    () => import('./ArrowLeftSliderIcon-CxFbk1LP.mjs')
  ),
  arrowRightSlider: defineAsyncComponent(
    () => import('./ArrowRightSliderIcon-Dr2ez6mX.mjs')
  ),
  doubleDown: defineAsyncComponent(() => import('./DoubleDownIcon-Brihj4sc.mjs')),
  trash: defineAsyncComponent(() => import('./TrashIcon-DF2hFwZN.mjs')),
  productShare: defineAsyncComponent(
    () => import('./ProductShareIcon-gHxbv0_O.mjs')
  ),
  email: defineAsyncComponent(() => import('./EmailIcon-C1sPGm5x.mjs')),
  longArrowDownIcon: defineAsyncComponent(
    () => import('./LongArrowDownIcon-CEOYZ629.mjs')
  ),
  clock: defineAsyncComponent(() => import('./ClockIcon-DPJCRrjY.mjs')),
  edit: defineAsyncComponent(() => import('./EditIcon-CUGieZvg.mjs')),
  hotSale: defineAsyncComponent(() => import('./HotSaleIcon-B4JigD7W.mjs')),
  arrowTop: defineAsyncComponent(() => import('./ArrowTopIcon-CEehhMj2.mjs')),
  favorite: defineAsyncComponent(() => import('./FavoriteIcon-p-KmCV9v.mjs')),
  dropdown: defineAsyncComponent(() => import('./DropdownIcon-Zxs_x2Yf.mjs')),
  check: defineAsyncComponent(() => import('./CheckIcon-ZoDov7f2.mjs')),
  energyEfficiencyA: defineAsyncComponent(
    () => import('./EnergyEfficiencyA-wSYOigWr.mjs')
  ),
  energyEfficiencyB: defineAsyncComponent(
    () => import('./EnergyEfficiencyB-C4lrdVgt.mjs')
  ),
  energyEfficiencyC: defineAsyncComponent(
    () => import('./EnergyEfficiencyC-BwQaZ_Gc.mjs')
  ),
  energyEfficiencyD: defineAsyncComponent(
    () => import('./EnergyEfficiencyD-CZLEhTtg.mjs')
  ),
  energyEfficiencyE: defineAsyncComponent(
    () => import('./EnergyEfficiencyE-DMQGk5tc.mjs')
  ),
  energyEfficiencyF: defineAsyncComponent(
    () => import('./EnergyEfficiencyF-BYeXut0C.mjs')
  ),
  energyEfficiencyG: defineAsyncComponent(
    () => import('./EnergyEfficiencyG-B7zPaowF.mjs')
  ),
  pin: defineAsyncComponent(() => import('./PinIcon-FkUpBBDs.mjs')),
  locationPin: defineAsyncComponent(
    () => import('./LocationPinIcon-CtukYTjE.mjs')
  ),
  catalogSearch: defineAsyncComponent(
    () => import('./CatalogSearchIcon-4wcxN8S0.mjs')
  ),
  cookies: defineAsyncComponent(() => import('./CookiesIcon-BgewNtML.mjs')),
  circledQuestionMark: defineAsyncComponent(
    () => import('./CircledQuestionMarkIcon-B3zipiKl.mjs')
  ),
  settings: defineAsyncComponent(() => import('./SettingsIcon-CIWw3FPO.mjs')),
  doubleCheck: defineAsyncComponent(
    () => import('./DoubleCheckIcon-BUbpizwM.mjs')
  ),
  closeThin: defineAsyncComponent(() => import('./CloseThinIcon-DCX3qCDL.mjs')),
  preorder: defineAsyncComponent(() => import('./PreorderIcon-C8ZHQOIV.mjs')),
  more: defineAsyncComponent(() => import('./MoreIcon-Cvkopvss.mjs')),
  leftRightArrow: defineAsyncComponent(
    () => import('./LeftRightArrowIcon-RWngycdG.mjs')
  ),
  recycle: defineAsyncComponent(() => import('./RecycleIcon-LY2ktjIj.mjs')),
  circledCheckMark: defineAsyncComponent(
    () => import('./CircledCheckMarkIcon-B4k59VRb.mjs')
  ),
  circledClose: defineAsyncComponent(
    () => import('./CircledCloseIcon-C2p77A9i.mjs')
  ),
  certicalDots: defineAsyncComponent(
    () => import('./VerticalDotsIcon-CEn3YU0n.mjs')
  ),
  editPen: defineAsyncComponent(() => import('./EditPenIcon-by6Bv-D0.mjs')),
  binTrash: defineAsyncComponent(() => import('./BinTrashIcon-RgTXMKg9.mjs')),
  authFacebook: defineAsyncComponent(
    () => import('./AuthFacebookIcon-BcoALhtb.mjs')
  ),
  authGoogle: defineAsyncComponent(() => import('./AuthGoogleIcon-yJQ6Zv_H.mjs')),
  authApple: defineAsyncComponent(() => import('./AuthAppleIcon-woD_GnuX.mjs'))
};
const _sfc_main = defineComponent({
  name: "Icon",
  components: Icons,
  props: {
    icon: {
      type: String,
      required: true
    },
    containerSize: {
      type: Boolean,
      default: false
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), mergeProps({
    class: { "container-size": _ctx.containerSize },
    "stroke-color": _ctx.strokeColor,
    "fill-color": _ctx.fillColor
  }, _attrs), null), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/icon/icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b5786612"]]);

export { Icons as I, __nuxt_component_1 as _ };
//# sourceMappingURL=icon-_hjsSUWU.mjs.map
