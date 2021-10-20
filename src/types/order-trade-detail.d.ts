// 下取申込み詳細
export type OrderTradeDetail = {
  // 申込番号
  odrId: string;
  // 申込番号（表示用）
  formatedOdrNum: string;
  // 申込日時
  odrYmd: string;
  // 明細情報
  detailInfo: Array<OrderTradeProductDetail>;
};

// 申込み商品
export type OrderTradeProductDetail = {
  // 商品コード
  janCode: string;
  // 商品名
  itemName: string;
  // 画像パス
  imagePath: string;
};
