// 下取申込み詳細（トクトク交換）
export type OrderTokutokuDetail = {
  // 申込日
  odrYmd: string;
  // 状況
  headerStatus: string;
  // 申込番号
  odrId: string;
  // 申込番号（表示用）
  formatedOdrNum: string;
  // 買取日
  purchaseDate: string;
  // 梱包キット希望
  isNeedPackKit: boolean;
  // 明細情報
  detailInfo: Array<OrderTokutokuProductDetail>;
};

// 申込み商品
export type OrderTokutokuProductDetail = {
  // 商品コード
  janCode: string;
  // 商品名
  itemName: string;
  // 画像パス
  imagePath: string;
  // 下取金額
  onePrice: string;
  // 状況
  detailStatus: 0 | 1 | 9;
};
