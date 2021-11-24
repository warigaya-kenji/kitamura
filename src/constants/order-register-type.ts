// 購入手続き 登録情報タイプ

// 受け取り方法
export const RECEIVE_TYPE = {
  SHOP: '1',
  HOME: '2'
};

// 受け取り店舗タイプ
export const DELIVERY_SHOP_TYPE = {
  /** 前回受け取った店舗 */
  LAST_RECEIVED_SHOP: '1',
  /** お気に入り店舗 */
  FAVORITE_SHOP: '2',
  /** 今回選んだ店舗 */
  NEW_SHOP: '3'
};

// お届け先タイプ
export const DELIVERY_ADDRESS_TYPE = {
  /** 自宅 */
  HOME: '0',
  /** 登録済住所 */
  REGISTERED_ADDRESS: '1',
  /** 銀行振込 */
  NEW_ADDRESS: '2'
};

// 支払い方法
export const PAYMENT_TYPE = {
  /** クレジットカード */
  CREDIT_CARD: '10',
  /** PayPay */
  PAYPAY: '11',
  /** 銀行振込 */
  BANK_TRANSFER: '20',
  /** コンビニ決済 */
  CSV: '30',
  /** Tポイント */
  T_POINT: '40',
  /** Pay-easy決済 */
  PAY_EASY: '50',
  /** ショッピングクレジット */
  SHOPPING_CREDIT: '60',
  /** トクトク据置 */
  TOKUTOKU: '65',
  /** 代金引換 */
  CASH_ON_DELIVERY: '70',
  /** 店舗受取 */
  SHOP_PICKUP: '80'
};

// 支払い方法（表示用）
export const PAYMENT_TYPE_LIST = [
  {
    id: PAYMENT_TYPE.CREDIT_CARD,
    label: 'クレジットカード',
    text: 'クレジットカード番号と本人認証サービスにてお支払いいただけます',
    class: 'credit-card'
  },
  {
    id: PAYMENT_TYPE.CASH_ON_DELIVERY,
    label: '代金引換（現金・電子マネー）',
    text: '商品受け取り時に、現金やクレジットカード、電子マネーでお支払いいただけます',
    class: 'cash-on-delivery'
  },
  {
    id: PAYMENT_TYPE.SHOPPING_CREDIT,
    label: 'ショッピングクレジット',
    text: '回までの分割手数料を当社負担でご利用いただけます',
    class: 'shopping-credit'
  },
  {
    id: PAYMENT_TYPE.CSV,
    label: 'コンビニ決済',
    text: 'コンビニでお支払いいただけます',
    class: 'csv'
  },
  {
    id: PAYMENT_TYPE.PAYPAY,
    label: 'モバイル決済',
    text: 'PayPayがご利用いただけます',
    class: 'paypay'
  },
  {
    id: PAYMENT_TYPE.BANK_TRANSFER,
    label: '銀行振込',
    text: '当社口座へのお振り込みにてお支払いいただけます',
    class: 'bank-transfer'
  },
  {
    id: PAYMENT_TYPE.PAY_EASY,
    label: 'Pay-easy決済',
    text: 'ゆうちょATMや、ネットバンキングからお支払いいただけます',
    class: 'pay-easy'
  },
  {
    id: PAYMENT_TYPE.TOKUTOKU,
    label: 'トクトク据置',
    text: '月々のお支払いを低く抑えてお支払いいただけます',
    class: 'tokutoku'
  }
];

// コンビニ決済の支払先名
export const CSV_PAYMENT_TYPE_NAME_LIST = [
  {
    code: '10001',
    text: 'ローソン'
  },
  {
    code: '10002',
    text: 'ファミリーマート'
  },
  {
    code: '10005',
    text: 'ミニストップ'
  },
  {
    code: '00006',
    text: 'デイリーヤマザキ'
  },
  {
    code: '00007',
    text: 'セブンイレブン'
  }
];

// クレジットカード支払い方法
export const CARD_PAYMENT_METHOD = {
  // 一括払い
  PAY_IN_FULL: '1',
  // 分割払い
  PAY_IN_INSTALLMENTS: '2',
  // ボーナス一括払い
  PAY_IN_BONUS: '3',
  // リボ払い
  REVOLVING_CREDIT: '5'
};

// クレジットカード支払い方法（表示用）
export const CARD_PAYMENT_METHOD_LIST = [
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_FULL,
    label: '一括払い'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-3',
    label: '分割払い（３回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-5',
    label: '分割払い（５回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-6',
    label: '分割払い（６回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-10',
    label: '分割払い（１０回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-12',
    label: '分割払い（１２回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-15',
    label: '分割払い（１５回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-18',
    label: '分割払い（１８回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-20',
    label: '分割払い（２０回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS + '-24',
    label: '分割払い（２４回）'
  },
  {
    id: CARD_PAYMENT_METHOD.PAY_IN_BONUS,
    label: 'ボーナス一括払い'
  },
  {
    id: CARD_PAYMENT_METHOD.REVOLVING_CREDIT,
    label: 'リボ払い'
  }
];

// ショッピングクレジットの信販会社（表示用）
export const SHOPPING_CREDIT_METHOD_LIST = [
  {
    id: '1',
    label: 'オリコ',
    img: 'orico.png',
    displayLabelWithImage: true
  },
  {
    id: '2',
    label: 'ジャックス',
    img: 'jaccs.png',
    displayLabelWithImage: true
  },
  // 未使用（APIParamとしても欠番）
  {
    id: '3',
    label: 'トクトク据置',
    img: '',
    displayLabelWithImage: true
  },
  // 現在は未使用（環境設定変数にて表示制御中。2021/01以降に表示予定）
  {
    id: '4',
    label: 'SMBCファイナンスサービス',
    img: 'smbc_logo_moji.png',
    displayLabelWithImage: false // 画像が横長のため非表示にする
  }
];
