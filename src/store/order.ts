import { reactive } from '@vue/composition-api';
import Cookie from '@/logic/cookie';

export type ConfirmCreditCardInfo = {
  /** カード番号(下4桁) */
  cardNo: string;
  /** 有効期限(MM/YY) */
  expiration: string;
};

export default function orderStore() {
  const KEY = 'CreditCardInfo';
  const MAX_AGE = 1200;

  const state = reactive({
    // クレジットカード情報：確認ページでの表示用
    creditCardInfo: {} as ConfirmCreditCardInfo,
    // 代理注文アカウント
    proxyAccount: false
  });

  return {
    get creditCardInfo(): ConfirmCreditCardInfo {
      state.creditCardInfo = Cookie.getCookie(KEY);
      return state.creditCardInfo;
    },

    setCreditCardInfo(cardInfo: ConfirmCreditCardInfo) {
      Cookie.setCookie(KEY, cardInfo, MAX_AGE);
    },

    get proxyAccount(): boolean {
      return state.proxyAccount;
    },

    setProxyAccount(val: boolean) {
      state.proxyAccount = val;
    }
  };
}

export type OrderStore = ReturnType<typeof orderStore>;
