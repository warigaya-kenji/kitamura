/**
 * レジ処理結果
 */
export type CashRegisterResult = {
  /** 表示用注文番号 */
  formatedOdrNum: string;
  /** 注文番号 */
  odrId: string;
  /** トクトク交換注文かどうか */
  isTokutoku: boolean;
  /** 梱包キット有無 */
  usePacking: boolean;
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
   * 80：店舗受取
   */
  paymentMethod: string;
  /** コンビニ決済情報 */
  csvInfo: CsvInfo;
  /** Pay-easy決済情報 */
  payeasyInfo: PayeasyInfo;
  /** オリコ申込URL */
  oricoUrl: string;
  /** オリコフォーム情報 */
  oricoFormInfo: OricoFormInfo[];
  /** ジャックス申込Url */
  jaccsUrl: string;
  /** ジャックスフォーム情報 */
  jaccsFormInfo: JaccsFormInfo[];
  /** SMBC申込Url */
  smbcUrl: string;
  /** SMBCフォーム情報 */
  smbcFormInfo: SmbcFormInfo[];
  /** 合計金額 */
  totalPrice: number;
  /** 内消費税 */
  internalTax: number;
  /** 商品金額合計 */
  productTotalPrice: number;
  /** 獲得ポイント */
  gaindPoint: number;
  /** 送料 */
  shippingCharge: number;
  /** 利用ポイント */
  usedPoint: number;
  /** トクトク交換下取り額 */
  tokutokuPrice: number;
  /** トクトク交換下取り対象数 */
  tokutokuNum: number;
  /** お受け取り合計 */
  pickUpPrice: number;
  /** 明細商品情報 */
  productDetailInfo: ProductDetailInfo[];
};

/**
 * コンビニ決済情報
 */
export type CsvInfo = {
  /** オンライン決済番号 */
  csvEntryNo: string;
  /** 確認番号 */
  cvsConfirmNo: string;
  /**
   * お支払先
   * 10001：ローソン
   * 10002：ファミリーマート
   * 10005：ミニストップ
   * 00006：デイリーヤマザキ
   * 00007：セブンイレブン
   */
  cvsPaymentType: string;
};

/**
 * Pay-easy決済情報
 */
export type PayeasyInfo = {
  /** お客様番号 */
  payeasyCustomerNo: string;
  /** 収納機関番号 */
  payeasyReceiverNo: string;
  /** 確認番号 */
  payeasyConfirmNo: string;
  /** お支払期限 */
  paymentDueDttm: string;
};

/**
 * オリコフォーム情報
 */
export type OricoFormInfo = {
  /** キー名 */
  oricoKeyName: string;
  /** 値 */
  oricoValue: string;
};

/**
 * ジャックスフォーム情報
 */
export type JaccsFormInfo = {
  /** キー名 */
  jaccsKeyName: string;
  /** 値 */
  jaccsValue: string;
};

/**
 * SMBCフォーム情報
 */
export type SmbcFormInfo = {
  /** キー名 */
  smbcKeyName: string;
  /** 値 */
  smbcValue: string;
};

/**
 * 明細商品情報
 */
export type ProductDetailInfo = {
  /** 行番号 */
  rowNo: number;
  /** 商品コード */
  janCode: string;
  /** 中古かどうか */
  isChuko: boolean;
  /** 商品名 */
  itemName: string;
  /** 単価 */
  unitPrice: number;
  /** 数量 */
  count: number;
  /** 主カテゴリ名 */
  categoryName: string;
  /** カテゴリコード */
  categoryCode: string;
  /** メーカー名 */
  makerName: string;
};
