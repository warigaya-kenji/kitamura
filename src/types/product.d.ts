export type RecommendProducts = {
  /** リコメンドID */
  rid: string;

  /** リコメンドアイテム一覧 */
  item_list: {
    /** アイテムID */
    item_id: string;
  }[];

  // 他にも属性があるが、リニューアルにより使わないため、記述不要
};

/** 新品の商品詳細APIで受け取れる値 */
export type ProductDetail = {
  applyCoupon: Array<ApplyCoupon>;
  isChuko: boolean;
  breadcrumbs: Array<{
    no: number;
    path: string;
    linkUrl?: string;
  }>;
  makerName: string;
  janCode: string;
  newItemJanCode: string;
  itemName: string;
  preModelJanCd: string;
  ddDesc: string;
  isSalesEnd: boolean;
  isTrade: boolean;
  images: Array<{
    rowNo: number;
    imageType: string;
    imagePath: string;
  }>;
  sampleImages: Array<{
    rowNo: number;
    comment: string;
    sampleImageOrgPath: string;
    sampleImagePath: string;
  }>;
  priceDiv: number;
  price: number;
  regularPrice: number;
  saleEndDttm: string;
  sellingEndDttm: string;
  isAlert: boolean;
  salesCopy: string;
  releaseDt: string;
  templateId: number;
  templateName: string;
  videoId: string;
  quantityParUnit: number;
  realSalesLimitNum: number;
  delivStockUrl: string;

  variationItems: Array<variationProduct>;

  flags: Array<number>;
  tradeInPrice: number;
  extWarrantyChargeIncludeTrade: number;
  extWarrantyCharge: number;
  paymentMethods: number;
  shopCreditChargeNum: number;
  shopCreditSimNum: number;
  shopCreditSimAmount: number;

  relatedItems: Array<RelatedProduct>;

  upperBannerInfo: Array<Banner>;

  underBannerInfo: Array<Banner>;

  itemFeatures: string;
  itemSpecifications: string;
  freeHtml: string;
  makerLinkUrl: string;

  isBundle: boolean;
  bundleInfo: Array<{
    bundleNum: number;
    bundlUnitPraice: number;
  }>;

  deptCode: number;
  classCode: number;
  lineCode: number;

  isReviewTarget: boolean;
  reviewNum: number;
  ratingTotal: number;
  ratingDesign: number;
  ratingPrice: number;
  ratingOpe: number;
  ratingImage: number;

  reviewInfo: Array<Review>;
};

export type variationProduct = {
  janCode: string;
  imagePath: string;
  itemName: string;
};

// 関連商品情報
export type RelatedProduct = {
  no: number;
  iconCode: string;
  janCode: string;
  itemName: string;
  priceDiv: number;
  isSetDiscount: boolean;
  setDiscountPrice: number;
  price: number;
  imagePath: string;
  isTradeForRel: boolean;
  isNetMemberTarget: boolean;
  ratingTotal: number;
};

// シンプルな商品詳細
export type SimpleProduct = {
  images: Array<{
    rowNo: number;
    imageType: string;
    imagePath: string;
  }>;

  isSalesEnd?: boolean;
  isTrade?: boolean;
  itemName: string;
  janCode: string;
  newItemJanCode?: string;
  price: number;
  priceDiv: number;
  ratingTotal: number;
};

// 商品スライダーで扱う変数
export type SliderProduct = {
  janCode: string;
  itemName: string;
  price: number;
  priceDiv: number;
  imagePath: string;
  ratingTotal: number;

  no?: number;
  iconCode?: string;
  isSetDiscount?: boolean;
  setDiscountPrice?: number;
  isTradeForRel?: boolean;
  isNetMemberTarget?: boolean;
};

// バナー情報
export type Banner = {
  no: number;
  imagePath: string;
  linkType: number;
  linkUrl: string;
};

// レビュー情報
export type Review = {
  reviewer: string;
  reviewDttm: string;
  reviewTitle: string;
  rating: number;
  helpfulNum: number;
  comment: number;
};

// 投稿するレビュー内容
export type PostReview = {
  totalRating: number;
  designRating: number;
  priceRating: number;
  operationRating: number;
  imageRating: number;
  title: string;
  pros: string;
  cons: string;
};

/** 新品の商品詳細APIで受け取れる値 */
export type UsedProductDetail = {
  itemCode: string;
  itemName: string;
  makerName: string;
  price: number;
  grade: string;
  accessory: string;
  note: string;
  purchasePrice: number;
  chukoCreatedDate: string;
  chukoUpdatedOn: string;
  bodyNo: number;
  stockShopCd: string;
  stockShopName: string;
  janCode: string;
  isAvailable: boolean;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  isDirect: boolean;
  isWarranty: boolean;
  mediaCd: 0 | 1 | 2 | 3 | 4;
  isSet: boolean;
  setJanCd: string;
  setItemCount: number;
  prdType: string;
  category2: string;
  category3: string;
  status: number;
  itemNameForSearch: string;
  salesStartDttm: string;
  isInetDisp: boolean;
  usedQuotesCode: string;
  shopCreditChargeNum: number;
  shopCreditSimNum: number;
  shopCreditSimAmount: number;
};

/** 新品用中古商品 */
export type UsedProductsSummary = {
  /** JAN */
  janCode: string;

  /** 中古件数 */
  itemCount: number;

  /** 価格最小値（税込） */
  minPrice: number;

  /** 買取価格最大値 */
  maxAssessPrice: number;

  /** 下取価格最大値 */
  maxTradeInPrice: number;
};

/** 会員商品 */
export type MemberProduct = {
  /** お気に入り登録済みか */
  isFavorite: boolean;

  /** 安くなった通知 */
  noticePrice: boolean;

  /** 同型商品の通知 */
  noticeUsed: boolean;

  /** もっている登録済みか */
  isHave: boolean;

  /** レビュー投稿済みか */
  isReviewed: boolean;

  /** 参考になったレビューID */
  helpfulReviewId: Array<any>;
};

/** 適用クーポン */
export type ApplyCoupon = {
  // クーポンコード必要かどうか
  isCouponCodeNeeded: string;
  // クーポンコード
  couponCode: string;
  // クーポン名
  couponName: string;
  // 併用可否
  isCombined: string;
  // 残り枚数
  couponRemainingNum: string;
  // クーポン説明文（フロント表示用）
  description: string;
  // クーポン種類
  couponType: string;
  // クーポン値引き額
  couponDiscountPrice: string;
  // クーポン値引き率
  couponDiscountRatio: string;
};
