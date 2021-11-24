/**
 * レジ情報
 */
export type CashRegisterInfo = {
  /** レジID */
  registerId: string;
  /**
   * 注文確認可否フラグ
   * レジ画面から注文確認画面？に遷移できない理由を表現するもの。
   * （レジ画面そのものの入力が完成していない状況を返送）
   */
  isOdrConfirm: boolean;
  /**
   * レジ再確定可否フラグ
   * 注文確認画面？に戻ってきた時にエラーではなく警告等、
   * 再度注文確定が可能な場合、true
   */
  isReFixRegister: boolean;
  /** エラー警告情報 */
  errorWarningInfo: ErrorWarningInfo[];
  /** 小計 */
  subTotal: number;
  /** 送料 */
  shippingCharge: number;
  /** 商品代合計 */
  productPrice: number;
  /** 合計 */
  totalPrice: number;
  /** 内消費税 */
  internalTax: number;
  /** お受け取り合計 */
  pickUpPrice: number;
  /** クーポン値引き */
  discountCoupon: number;
  /** ポイント利用 */
  usePoint: number;
  /** 獲得ポイント */
  gainedPoint: number;
  /**
   * 受取方法制約
   * 1：宅配限定、2：店舗受取限定
   */
  receivingMethodRestrictions: 1 | 2;
  /**
   * 受取方法区分
   *   1：店舗受取、2：宅配
   */
  receivingMethodDiv: 1 | 2;
  /** 宅配種類情報 */
  deliveryTypeInfo: DeliveryTypeInfo[];
  /** 選択済み宅配種類コード */
  selectDeliveryTypeCd: number;
  /** 最短お届け日 */
  shortestDeliveryDate: string;
  /** お届け希望日情報 */
  arrivalDateInfo: ArrivalDateInfo[];
  /** 選択済みお届け希望日 */
  selectArrivalDate: string;
  /** 最短お届け時間帯コード */
  shortestDeliveryTimeZoneCd: string;
  /** お届け希望時間帯情報 */
  deliveryTimeZoneInfo: DeliveryTimeZoneInfo[];
  /** 選択済みお届け希望時間帯コード */
  selectDeliveryTimeZoneCd: string;
  /**
   * 宅配ボックス利用有無
   *   0:未選択、1:利用する、2:利用しない
   */
  useDeliverybox: number;
  /** 宅配ボックス情報 */
  deliveryBoxInfo: DeliveryBoxInfo[];
  /** お届け先区分情報 */
  deliveryDivInfo: DeliveryDivInfo;
  /** お届け先情報 */
  addressInfo: AddressInfo[];
  /** 利用可能Tポイント数 */
  canUsePoint: number;
  /**
   * 利用可能支払方法
   * 10：クレジットカード
   * 11：PayPay
   * 20：銀行振込
   * 30：コンビニ
   * 40：T_POINT
   * 50：Payeasy
   * 60：ショッピングクレジット
   * 70：代金引換
   */
  paymentMethods: number[];
  /**
   * 利用可能ショッピングクレジット
   * 1:オリコ
   * 2:jaccs
   * 3:トクトク据置
   * 4:SMBC
   */
  creditMethods: number[];
  /** ショッピングクレジット訴求無金利回数 */
  noInterestRate: number;
  /**
   * 選択済み支払方法
   * 10：クレジットカード
   * 11：PayPay
   * 20：銀行振込
   * 30：コンビニ
   * 40：T_POINT
   * 50：Payeasy
   * 60：ショッピングクレジット
   * 70：代金引換
   * 80：店舗受取
   */
  selectPaymentMethod: number;
  /** 選択済みショッピングクレジット */
  selectShoppingCredit: number;
  /**
   * クレジットカード支払い方法
   * 1:一括払い
   * 2:分割払い
   * 3:ボーナス一括払い
   * 5:リボ払い
   */
  cardPaymentMethod: number;
  /**
   * 選択済みクレジットカード支払い方法
   * 1:一括払い
   * 2:分割払い
   * 3:ボーナス一括払い
   * 5:リボ払い
   */
  selectCardPaymentMethod: number;
  /** 指定クレジットカード支払回数 */
  cardPaymentCount: number;
  /** 振込元名義人 */
  transferSourceHolder: string;
  /**
   * 利用可能コンビニ
   * 10001：ローソン
   * 10002：ファミリーマート
   * 10005：ミニストップ
   * 00006：デイリーヤマザキ
   * 00007：セブンイレブン
   */
  availableCVS: string[];
  /**
   * 支払先コンビニ
   * 10001：ローソン
   * 10002：ファミリーマート
   * 10005：ミニストップ
   * 00006：デイリーヤマザキ
   * 00007：セブンイレブン
   */
  paymentDestinationCVS: string;
  /** 受取店舗情報 */
  shopInfo: ShopInfo;
  /** 支払い方法不可理由情報 */
  impossibleReasonInfo: ImpossibleReasonInfo[];
  /**
   * 梱包キット希望有無
   * 0：なし、1：あり
   */
  usePacking: 0 | 1;
  /**
   * 代理注文アカウントである
   */
  isProxyAccount: boolean;
  /**
   * 代理注文用コメント
   */
  operatorMemo: string;
};

/**
 * エラー警告情報
 */
export type ErrorWarningInfo = {
  /** エラー警告コード */
  code: string;
  /** エラー警告コードメッセージ */
  message: string;
};

/**
 * 宅配種類情報
 */
export type DeliveryTypeInfo = {
  /** 宅配種類コード */
  deliveryTypeCd: number;
  /** 宅配種類名 */
  deliveryTypeName: string;
};

/**
 * お届け希望日情報
 */
export type ArrivalDateInfo = {
  /** お届け希望日 */
  arrivalDate: string;
};

/**
 * お届け希望時間帯情報
 */
export type DeliveryTimeZoneInfo = {
  /** お届け希望時間帯コード */
  deliveryTimeZoneCd: string;
  /** お届け希望時間帯 */
  deliveryTimeZone: string;
};

/**
 * 宅配ボックス情報
 */
export type DeliveryBoxInfo = {
  /** 宅配ボックスコード */
  deliveryBoxCd: number;
  /** 宅配ボックス選択肢 */
  deliveryBoxSelectName: string;
};

/**
 * お届け先区分情報
 */
export type DeliveryDivInfo = {
  /**
   * お届け先区分
   * 0:自宅、1:登録済み住所、2:新規登録先
   */
  deliveryDiv: 0 | 1 | 2;
  /** お届け先ID */
  delivAddressId?: string;
};

/**
 * お届け先情報
 */
export type AddressInfo = {
  /** お届け先区分 */
  deliveryDiv: 0 | 1 | 2;
  /** お届け先ID */
  delivAddressId?: string;
  /** 姓（漢字） */
  lastName: string;
  /** 名（漢字） */
  firstName: string;
  /** 姓（カナ） */
  lastNameKana: string;
  /** 名（カナ） */
  firstNameKana: string;
  /** 郵便番号 */
  zipcode: string;
  /** 都道府県コード */
  prefectureId: string;
  /** 市区群 */
  addr1: string;
  /** 町村名 */
  addr2: string;
  /** 番地･建物名 */
  addr3: string;
  /** 電話番号 */
  phone: string;
  /** 保存有無 */
  isSave: boolean;
};

/**
 * 受取店舗情報
 */
export type ShopInfo = {
  /**
   * ショッピングクレジット利用有無
   * ０：利用しない、１：利用する
   */
  useShoppingCredit: 0 | 1;
  /** 店舗 */
  shops: Shop[];
};

/**
 * 店舗
 */
export type Shop = {
  /**
   * 区分
   * 1:前回受け取った店舗
   * 2:お気に入り店舗
   * 3:今回選んだ店舗
   */
  type: 1 | 2 | 3;
  /** 選択済み */
  selectShop: boolean;
  /** 店舗コード */
  shopCd: string;
  /** 店舗名 */
  shopName: string;
  /** 電話番号 */
  shopTel: string;
  /**
   * 受取可否
   * ０：受取可、１：受取不可
   */
  acceptability: 0 | 1;
};

/**
 * 支払い方法不可理由情報
 */
export type ImpossibleReasonInfo = {
  /**
   * 支払方法
   * 10：クレジットカード
   * 11：PayPay
   * 20：銀行振込
   * 30：コンビニ
   * 40：T_POINT
   * 50：Payeasy
   * 60：ショッピングクレジット
   * 70：代金引換
   */
  paymentMethod: number;
  /** 不可理由 */
  impossibleReasonMessage: string;
};

/**
 * クレジットカード情報
 */
export type CreditCardInfo = {
  /** カード番号 */
  cardno: string;
  /** 有効期限(YYYYMM) */
  expire: string;
  /** セキュリティコード */
  securitycode: string;
  /** カード名義人 */
  holdername?: string;
  /** トークンを発行する数 */
  tokennumber?: number;
};

/**
 * GMO Multipayment：クレジットカードトークン
 */
export type MultipaymentToken = {
  /** 処理結果を表すコード */
  resultCode: string;

  /** 取得したトークン情報 */
  tokenObject: {
    /** トークン配列(tokennumberにて複数指定時) */
    token: Array<string>;
    /** トークン有効期限(yyyy-mm-dd-HH-MM-SS) */
    toBeExpiredAt: string;
    /** マスク済みカード番号 */
    maskedCardNo: string;
    /** セキュリティコード設定フラグ */
    isSecurityCodeSet: boolean;
  };
};

/**
 * 受取店舗検索
 */
export type SearchShopInfo = {
  /** 店舗 */
  shopInfo: Array<SearchShop>;
};

/**
 * 受取店舗
 */
export type SearchShop = {
  // 都道府県コード
  prefectureCd: string;
  // 都道府県名
  prefectureName: string;
  // 郵便番号
  zipCode: string;
  // 住所（市区まで）
  addr1: string;
  // 住所
  address: string;
  // 電話番号
  tel: string;
  // 店舗コード
  shopCd: string;
  // 店舗名
  shopName: string;
  // 屋号
  brand: string;
};
