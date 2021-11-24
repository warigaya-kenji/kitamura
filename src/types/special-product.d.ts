export type SecretProductList = {
  itemCount: number;
  results: Array<SecretProductItem>;
};

export type SecretProductItem = {
  // 番号
  rowNo: number;
  // 商品コード
  janCode: string;
  // 商品名
  itemName: string;
  // 画像パス
  imagePath: string;
  // 価格
  secretPrice: number;
};

export type SecretInfo = {
  // 限定特集ID
  secret: string;
  // パスコード
  passcode: string;
};
