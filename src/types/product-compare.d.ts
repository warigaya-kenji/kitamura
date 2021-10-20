export type CompareProductList = {
  // 比較商品情報
  compTargets: Array<CompareProduct>;
};

export type CompareProduct = {
  // 行番号
  rowNo: string;
  // 商品コード
  janCode: string;
  // 画像PATH
  imagePath: string;
  // メーカ名
  makerName: string;
  // 商品名
  itemName: string;
  // 価格
  price: number;
  // カラー情報
  colorInfo: Array<{
    // 商品コード
    variationJanCode: string;
    // カラー名
    colorName: string;
  }>;
  // 発売日
  releaseDt: string;
  // 動画ID
  videoId: string;
  // 商品情報（商品特徴）
  prdInfo1: string;
  // 商品情報（製品仕様）
  prdInfo2: string;
  // 比較項目
  compItems: Array<CompareItem>;
};

export type CompareItem = {
  // 項目名
  itemName: string;
  // 値
  value: string;
  // グループ
  // １：画質性能
  // ２：基本性能
  // ３：動画性能
  // ４：撮影機能
  // ５：追加機能
  group: 1 | 2 | 3 | 4 | 5;
  // ハイライト
  // １：最小
  // ２：最大
  // ３：valueが〇のもの
  highLight?: 1 | 2 | 3;
  // 並び替え可否
  isSort: boolean;
};
