import Vue from 'vue';
import { AssessmentItem, CartItem, CartList, DeletingAssessmentItem, UpdatingAssessmentItem, UpdatingCartItem } from '@/types/cart-list';
import { CashRegisterInfo, CreditCardInfo, MultipaymentToken, SearchShopInfo } from '@/types/cash-register-info';
import { CashRegisterResult } from '@/types/cash-register-result';
import ApiService from './api.service';
import AuthService from './auth.service';
import { PaymentError } from '@/types/payment-error';
import { TradeProductItem } from '@/types/trade-product-list';

const BUY_LATER_STORAGE_KEY = 'ec.cart.buy_later';
/**
 * WindowのinterfaceにGMO (Multipayment) 関連のプロパティを追加する
 */
declare global {
  interface Window {
    Multipayment: any;
    multipaymentCallback: (response: MultipaymentToken) => void;
  }
}

/**
 * Multipaymentを用いてトークンを取得する
 * @param cardInfo クレジットカード情報
 */
const _getTokenForCreditCard = (cardInfo: CreditCardInfo): Promise<MultipaymentToken> => {
  return new Promise((resolve, reject) => {
    const multipayment = window.Multipayment;
    multipayment.init(process.env.VUE_APP_GMO_API_KEY);
    // トークン取得数
    cardInfo.tokennumber = 10;
    // getTokenのコールバック関数
    window.multipaymentCallback = (result: MultipaymentToken) => {
      resolve(result);
    };

    try {
      multipayment.getToken(cardInfo, window.multipaymentCallback);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * 同じ下取申込査定品であるか
 *
 * @param source 比較対象
 * @param target 比較対象
 * @returns 同じならTrue
 */
const _equalsAssessmentItem = (source: AssessmentItem, target: TradeProductItem): boolean => {
  return (
    source.itemName === target.itemName &&
    source.imagePath === target.imagePath &&
    source.assessmentHighPrice === target.tradeinPriceS &&
    source.assessmentLowPrice === target.tradeinPriceC &&
    source.usedQuotesCode === target.usedQuotesCode
  );
};

const CartService = {
  /**
   * カート一覧を取得する
   */
  async searchCartList(): Promise<CartList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cart_list';
    const response = await ApiService.get(url);
    return response;
  },

  /**
   * カート内容を更新する
   *
   * @param cartId カートID
   * @param tradeInHope 下取り希望
   * @param cartItems カート情報
   * @returns
   */
  async updateCartList(cartId: number, tradeInHope: boolean, cartItems?: UpdatingCartItem[]): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cart_update';
    const requestBody = { cartId, tradeInHope, updateInfo: cartItems };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'cart' });
    return response;
  },

  /**
   * カート内容を削除する
   *
   * @param cartId カートID
   * @param tradeInHope 下取り希望
   * @param cartItems カート情報
   * @returns
   */
  async deleteCartItems(cartId: number, janCodes: string[]): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cart_update';
    const updateInfo = janCodes.map((janCode) => ({ janCode, command: '3' }));
    const requestBody = { cartId, updateInfo };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'cart' });

    // ヘッダーに表示するカート内商品数を更新するため、セッション情報を取り直す。
    AuthService.checkLoginStatus();
    return response;
  },

  /**
   * レジ情報を取得する
   *
   * @param isConfirm 確認用
   */
  async fetchCashRegisterInfo(isConfirm?: boolean): Promise<CashRegisterInfo> {
    try {
      const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cash_register_info';
      const configs = { params: { isConfirm } };
      const response: CashRegisterInfo = await ApiService.get(url, configs, true);

      // エラー表示
      if (response.errorWarningInfo && response.errorWarningInfo.length > 0) {
        Vue.prototype.$store.errorStore.errorMessage = response.errorWarningInfo[0].message;
      }

      return response;
    } catch (error) {
      const status = (error as any).response?.status || -1;
      const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
      if (errorCode === 'EN003') {
        // ログインセッションタイムアウトエラーはコンポーネント側で処理する
        throw error;
      } else if ((error as any).code === 'ECONNABORTED' || (500 <= status && status < 600)) {
        // タイムアウト、または、5xxエラーの処理
        const message = '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください（cash_register_info）';
        Vue.prototype.$store.errorStore.errorMessage = message;
      }
      throw error;
    }
  },

  /**
   * レジ情報を更新する
   *
   * @param param 更新情報
   */
  async updateCashRegisterInfo(param: any): Promise<void | { message: string }> {
    try {
      const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cash_register_update';
      const response = await ApiService.post(url, param, {}, true);
      return response;
    } catch (error) {
      const status = (error as any).response?.status || -1;
      const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
      if (errorCode === 'EN003') {
        // ログインセッションタイムアウトエラーはコンポーネント側で処理する
        throw error;
      } else if ((error as any).code === 'ECONNABORTED' || (500 <= status && status < 600)) {
        // タイムアウト、または、5xxエラーの処理
        const message = '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください（cash_register_update）';
        Vue.prototype.$store.errorStore.errorMessage = message;
      }
      throw error;
    }
  },

  /**
   * レジ情報をクリアする
   *
   * @returns クリア結果
   */
  async clearCashRegisterInfo() {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cash_register_clear';
    const response = await ApiService.post(url, {}, {}, true, { apiName: 'cash_register_clear' });
    return response;
  },

  /**
   * クレジットカード決済によるトークン取得
   *
   * @param cardInfo クレジットカード情報
   */
  async getTokenForCreditCard(cardInfo: CreditCardInfo): Promise<MultipaymentToken> {
    const response = await _getTokenForCreditCard(cardInfo);
    return response;
  },

  /*
   * 受取可能店舗を取得
   */
  async fetchShop(): Promise<SearchShopInfo> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'shop_search';
    const response = await ApiService.get(url, {}, true, { apiName: 'shop_search' });
    return response;
  },

  /**
   * レジ処理結果を取得する
   */
  async fetchCashRegisterResult(): Promise<CashRegisterResult> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cash_register_result';
    const response = await ApiService.get(url, {}, true, { apiName: 'cash_register_result' });
    return response;
  },

  /**
   * 決済エラー情報を取得する
   *
   * @returns 決済エラー情報
   */
  async fetchPaymentError(): Promise<PaymentError> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'payment_error';
    const response = await ApiService.get(url, {}, true, { apiName: 'payment_error' });
    return response;
  },

  /**
   * 下取申込を更新する
   *
   * @param cartId カートID
   * @param assessmentCd 買取種別（1：トクトク交換、2：下取り査定申込）
   * @param assessmentItems 更新する査定情報
   */
  async updateAssessment(cartId: number, assessmentCd: 1 | 2, assessmentItems: UpdatingAssessmentItem[]): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'trade_in_update';
    const requestBody = { cartId, assessmentCd, assessmentInfo: assessmentItems };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'assessment' });
    return response;
  },

  /**
   * 下取申込を削除する
   *
   * @param cartId カートID
   * @param assessmentCd 買取種別（1：トクトク交換、2：下取り査定申込）
   * @param assessmentItems 更新する査定情報
   */
  async deleteAssessment(cartId: number, assessmentCd: 1 | 2, assessmentItems: DeletingAssessmentItem[]): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'trade_in_update';
    const requestBody = { cartId, assessmentCd, assessmentInfo: assessmentItems };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'assessment' });
    return response;
  },

  /**
   * 下取申込み依頼品の型を変換する
   *
   * @param assessmentItems 下取申込み依頼品
   * @returns 型変換された下取申込み依頼品
   */
  convertToTradeProducts(assessmentItems: AssessmentItem[]): TradeProductItem[] {
    const tradeProducts: TradeProductItem[] = [];
    for (const item of assessmentItems) {
      const pushedTradeProduct = tradeProducts.find((tradeProduct) => _equalsAssessmentItem(item, tradeProduct));
      if (pushedTradeProduct) {
        pushedTradeProduct.rowNo?.push(item.rowNo);
        pushedTradeProduct.count++;
      } else {
        tradeProducts.push({
          rowNo: [item.rowNo],
          itemName: item.itemName,
          imagePath: item.imagePath,
          tradeinPriceS: item.assessmentHighPrice,
          tradeinPriceC: item.assessmentLowPrice,
          count: 1,
          selected: true,
          usedQuotesCode: item.usedQuotesCode
        });
      }
    }
    return tradeProducts;
  },

  /**
   * 「あとで買う」に追加
   *
   * @param cartItem カート商品
   */
  async addBuyLater(cartId: number, cartItem: CartItem): Promise<void | { message: string }> {
    // カート商品を削除する
    const response = await this.deleteCartItems(cartId, [cartItem.janCode]);

    // ローカルストレージにある情報を取得して追加する
    const items = this.getBuyLaterItems();
    items.push(cartItem);

    // ローカルストレージに保存する
    localStorage.setItem(BUY_LATER_STORAGE_KEY, JSON.stringify(items));

    return response;
  },

  /**
   * 「あとで買う」とした商品を取得する
   *
   * @returns カート商品
   */
  getBuyLaterItems(): Array<CartItem> {
    const itemsStr = localStorage.getItem(BUY_LATER_STORAGE_KEY);
    const items = itemsStr ? JSON.parse(itemsStr) : [];

    return items;
  },

  /**
   * 「あとで買う」商品を更新する
   *
   * @param items カート内容
   */
  updateBuyLaterAll(items: CartItem[]): void {
    // ローカルストレージに保存する
    localStorage.setItem(BUY_LATER_STORAGE_KEY, JSON.stringify(items));
  },

  /**
   * クーポンを適用する
   *
   * @param cartId カートID
   * @param couponCode クーポンコード
   * @returns エラー時のメッセージ
   */
  async applyCoupon(cartId: number, couponCode: string): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'coupon_update';
    const requestBody = { cartId, command: 1, couponCd: couponCode };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'coupon_update' }, false, true);
    return response;
  },

  /**
   * クーポンを削除する
   *
   * @param cartId カートID
   * @param couponId クーポンID
   * @returns エラー時のメッセージ
   */
  async removeCoupon(cartId: number, couponId: number): Promise<void | { message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'coupon_update';
    const requestBody = { cartId, command: 2, couponId };
    const response = await ApiService.post(url, requestBody, {}, true, { apiName: 'coupon_update' }, false, true);
    return response;
  }
};

export default CartService;
