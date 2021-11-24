import { ProductDetail } from './product';

/**
 * クーポン一覧
 */
export type CouponList = {
  /** クーポン情報 */
  couponInfo: Array<CouponItem>;
};

/**
 * クーポン
 */
export type CouponItem = {
  /** 番号 */
  rowNo: number;

  /** クーポンコード必要かどうか */
  isCouponCodeNeeded: boolean;

  /** クーポンコード */
  couponCode?: string;

  /** クーポン名 */
  couponName: string;

  /** 残り枚数 */
  couponRemainingNum: number;

  /** クーポン説明文 */
  description: string;

  /** クーポン種類 */
  couponType: 1 | 2 | 3;

  /** 有効期間FROM */
  validStartDttm: string;

  /** 有効期間TO */
  validEndDttm: string;

  /**
   * 併用可否
   * true:併用不可、false:併用可
   */
  isCombined: boolean;

  /** 対象商品（JANコード) */
  targetItem: CouponTargetItem[];

  /** 対象商品の詳細 */
  targetItemDetails?: ProductDetail[];
};

/**
 * 対象商品
 */
export type CouponTargetItem = {
  janCode: string;
};
