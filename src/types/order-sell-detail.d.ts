// 買取申込み詳細
export type OrderSellDetail = {
  // 申込番号
  estimateEntryId: string;
  // 申込番号（表示用）
  formatedOdrNum: string;
  // 申込日時
  entiryDttm: string;
  // 買取状況コード
  estimateStatus: number;
  // 買取合計金額
  totalPraice: string;
  // 買取合計金額の内税額
  totalPraiceIncTax: string;
  // 振込口座入力URL
  transferAccountUrl: string;
  // Tポイント付与数
  gainedPoint: string;
  // 明細情報
  detailInfo: Array<OrderSellProductDetail>;
};

// 申込み商品
export type OrderSellProductDetail = {
  // 行番号
  rowNo: number;
  // 商品コード
  janCode: string;
  // 画像パス
  imagePath: string;
  // 状態（AAやAなど）
  grade: string;
  // 商品名
  itemName: string;
  //  買取額
  purchasePrice: number;
  //  クーポン利用（割り増し）
  usedCoupon: number;
  // 数量
  count: number;
  // 小計
  subtotal: number;
};
