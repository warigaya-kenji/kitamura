export const PRODUCT_FLAG = {
  /** 特別セール */
  SPECIAL_SALE: 1,
  /** 予約商品 */
  RESERVED_PRODUCT: 2,
  /** トクトク交換対象 */
  TOKUTOKU_EXCHANGE_TARGET: 3,
  /** 完了品である */
  FINISHED_PRODUCT: 4,
  /** ５年保証対象 */
  FIVE_YEAR_WARRANTY_COVERAGE: 5,
  /** 宅配限定 */
  DELIVERY_ONLY: 6,
  /** 店渡し限定 */
  STORE_DELIVERY_ONLY: 7,
  /** メーカー直送品 */
  DIRECT_SHIPMENT: 8,
  /** お店渡し可 */
  STORE_DELIVERY_AVAILABLE: 9,
  /** 新着 */
  NEW_ARRIVAL: 10,
  /** 値下がり */
  PRICE_DECLINE: 11,
  /** 送料無料 */
  FREE_SHIPPING: 12,
  /** ネコポス対応 */
  NEKOPOSU_TARGET: 13,
  /** 即納対象 */
  IMMEDIATE_DELIVERY_TARGET: 14,
  /** ギフト対応可 */
  GIFT_AVAILABLE: 15,
  /** 高価買取り対象 */
  HIGH_PURCHASE_PRICE_TARGET: 16,
  /** 高価下取り対象 */
  HIGH_VALUE_TRADE_IN_TARGET: 17,
  /** セット商品 */
  SET_PRODUCT: 18,
  /** ネット会員割引対象品 */
  ONLINE_MEMBER_DISCOUNT_TARGET: 19,
  /** 価格非表示品 */
  PRICE_NOT_SHOWN: 20,
  /** 何でも下取り対象 */
  TRADE_IN_ANYTHING_TARGET: 21,
  /** トクトク据置 */
  TOKUTOKU_DEFERRED: 22
} as const;
