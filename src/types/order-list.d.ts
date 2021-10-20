// 注文一覧
export type OrderList = {
  totalPageCount: number;
  odrInfo: Array<OrderInfo>;
};

// 注文情報
export type OrderInfo = {
  // 番号
  rowNo: number;
  // 注文番号
  odrId: string;
  // 書式整形済注文番号
  formatedOdrNum: string;
  // 注文日時
  odrDttm: string;
  /**
   * 注文状況コード
   * 00: 注文受付
   * 02: 商品手配中
   * 03: 発送準備中
   * 05: 発送済
   * 10: お渡し準備完了
   * 11: お渡し済
   * 99: 注文取消し
   * 80: バッチキャンセル
   */
  deliveryOdrStatusId: string;
  // 商品画像パス
  imagePath: string;
  // 新品中古区分(1: 新品、2: 中古)
  isChuko: 1 | 2;
  // 注文商品点数
  orderedProductCount: number;
  /**
   * 受取方法コード
   * ０：店舗受取
   * １：メーカー直送
   * ２：ネコポス
   * ３：宅配便
   * ４：大型配送
   * ５：クロネコDM便
   * ６：ヤマト便
   */
  rcvMethodId: number;
  // 受取方法名
  rcvMethodName: string;
};
