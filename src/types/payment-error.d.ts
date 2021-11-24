/**
 * 決済エラー情報
 */
export type PaymentError = {
  /**
   * エラー種別
   * 1：3D-Secure、2：PayPay
   */
  type: 1 | 2;
  /** エラーコード */
  errorWarningCode: string;
  /** エラーコードメッセージ */
  errorWarningMsg: string;
  /**
   * リトライ可否
   * true：リトライ可、false：リトライ不可
   */
  isRetry: boolean;
  /** レジID */
  registerId: string;
};
