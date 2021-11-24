/**
 * カート一覧
 */
export type CartList = {
  /** カートID */
  cartId: number;
  /** カートの注文が実行可能か否か */
  isOrderEnable: boolean;
  /** Tポイントメンバーか否か */
  isTpointMember: boolean;
  /** 宅配が可能か否か */
  isDelivery: boolean;
  /** 店舗受取が可能か */
  isShopReceive: boolean;
  /** 時計部門の商品が含まれているか */
  haveClock?: boolean;
  /** トクトク交換が利用可能 */
  canTokutoku: boolean;
  /** トクトク交換選択有 */
  selectTokutoku: boolean;
  /** 下取り査定が利用可能 */
  canTradeRequest: boolean;
  /** 下取り査定選択有 */
  selectTrade: boolean;
  /** 下取り希望 */
  tradeInHope: boolean;
  /** カート商品情報 */
  cartItemInfo: CartItem[];
  /** 適用可能なクーポンが存在するか否か */
  isUsefulCoupon: boolean;
  /** 適用中クーポン情報 */
  couponInfo: CouponItem[];
  /** トクトク交換・下取査定レコメンド系情報 */
  tradeRecommendInfo: TradeRecommendItem[];
  /** 商品代合計 */
  productPrice: number;
  /** 送料 */
  shippingCharge: number;
  /** 査定額はすべて買取価格保証である */
  isAllWarranty: boolean;
  /** 査定額下限 */
  lowerPrice: number;
  /** 査定額上限 */
  upperPrice: number;
  /** 受取額 */
  recivePrice: number;
  /** 合計金額 */
  paymentPrice: number;
  /** 合計金額のうち税額 */
  tax: number;
  /** 付与予定Tポイント数 */
  grantTPoint: number;
  /**
   * 査定区分
   * 1：トクトク交換、2：下取り申込"
   */
  assessmentCd?: 1 | 2;
  /** 査定情報 */
  assessmentInfo?: AssessmentItem[];
};

/**
 * カート商品情報
 */
export type CartItem = {
  /** 行番号 */
  rowNo: number;
  /** 商品コード */
  janCode: string;
  /** 中古かどうか */
  isChuko: boolean;
  /** 商品名 */
  itemName: string;
  /** 画像パス */
  imagePath: string;
  /** 単価 */
  unitPrice: number;
  /** 注文あたりの購入制限数 */
  quantityParUnit: number;
  /** 数量 */
  count: number;
  /** 本体価格 */
  price: number;
  /** なんでも下取選択可否 */
  canTrade: boolean;
  /** なんでも下取り */
  isTrade?: boolean;
  /** なんでも下取り価格 */
  tradePrice?: number;
  /** ラッピング選択可否 */
  canWrapping?: boolean;
  /** ラッピング */
  isWrapping?: boolean;
  /** ラッピングJANコード */
  wrappingJanCode: string;
  /** ラッピング価格 */
  wrappingPrice: number;
  /** ５年保証選択可否 */
  canWarranty: boolean;
  /** ５年保証付き */
  isWarranty: boolean;
  /** ５年保証価格 */
  warrantyPrice?: number;
  /** まとめ買い値引き額 */
  bulkDiscountPrice?: number;
  /** ついで買い値引き額 */
  bundleDiscountPrice?: number;
  /** 小計 */
  subTotal: number;
  /** 価格非表示対象商品 */
  priceHide: unknown;
  /** トクトク交換対象 */
  canTokutoku: boolean;
  /** 下取査定対象 */
  canTradeInAssessment: boolean;
  /** サービス商品 */
  isService: boolean;
};

/**
 * 適用中クーポン情報
 */
export type CouponItem = {
  /** 行番号 */
  rowno: number;
  /** クーポンID */
  id: number;
  /** クーポン名称 */
  name: string;
  /** 送料無料クーポンか */
  isShippingFree: boolean;
  /** 削除可能 */
  canRemove: boolean;
  /** 値引き額 */
  discountPrice: number;
};

/**
 * トクトク交換・下取査定レコメンド系情報
 */
export type TradeRecommendItem = {
  /** 商品名 */
  itemName: string;
  /** 交換した場合の支払金額 */
  afterPrice?: number;
  /** 下取査定訴求額 */
  maxPurchasePrice: number;
};

/**
 * 査定情報
 */
export type AssessmentItem = {
  /** 行番号 */
  rowNo: number;
  /** 相場表コード */
  usedQuotesCode: string;
  /** 商品名 */
  itemName: string;
  /** 画像パス */
  imagePath: string;
  /** 査定額（low） */
  assessmentLowPrice: number;
  /** 査定額（high） */
  assessmentHighPrice: number;
};

/**
 * 更新するカート商品情報
 */
export type UpdatingCartItem = {
  /** 商品コード */
  janCode: string;
  /**
   * コマンド
   * 2：更新、3：削除
   */
  command: 2 | 3;
  /** 数量 */
  count: number;
  /** なんでも下取り */
  isTrade: boolean;
  /** ラッピング */
  isWrapping: boolean;
  /** ラッピングJANコード */
  wrappingJanCode?: string;
  /** 5年保証付き */
  isWarranty: boolean;
};

/**
 * 更新する下取り査定情報
 */
export type UpdatingAssessmentItem = {
  /** コマンド */
  command: 1;
  /** janコード */
  janCode?: string;
  /** 相場表コード */
  usedQuotesCode: string;
  /** 商品名 */
  itemName: string;
  /** 下取り価格S */
  tradeinPriceS: number;
  /** 下取り価格C */
  tradeinPriceC: number;
  /** 買取価格S */
  assessPriceS: number;
  /** 買取価格C */
  assessPriceC: number;
  /** 買取価格保証フラグ */
  isPriceGuarantee: boolean;
};

/**
 * 削除する下取り査定情報
 */
export type DeletingAssessmentItem = {
  /** コマンド */
  command: 2;
  /** 行番号 */
  rowNo: number;
};
