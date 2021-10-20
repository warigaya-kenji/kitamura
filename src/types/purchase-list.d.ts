// 買取一覧
export type PurchaseList = {
  totalPageCount: number;
  odrInfo: Array<PurchaseInfo>;
};

// 注文情報
export type PurchaseInfo = {
  // 番号
  rowNo: number;
  // 注文番号
  odrId: string;
  // 申込番号（表示用）
  formatedOdrNum: string;
  // 注文日時
  odrDttm: string;
  // 商品画像パス
  imagePath: string;
  // 合計商品点数
  quantity: number;
  /**
   * 区分
   * 1:トクトク交換
   * 2:下取り
   * 3:直送買取
   */
  kind: number;
  /**
   * 状況コード
   * 【区分:1の場合】
   * 0：未確定
   * 1：買取確定
   * 9：買取中止
   *
   * 【区分:2の場合】
   * なし
   *
   * 【区分:3の場合】
   * 10:買取申込中
   * 11:身分証明書NG 再度アップロード下さい
   * 12:－
   * 20:梱包キット発送準備中
   * 40:梱包キット発送済
   * 41:査定依頼品確認中
   * 50:査定準備中
   * 51:査定中
   * 60:査定結果連絡済（お客様ご承認待ち）
   * 70:振込準備中（振込口座確認中）
   * 71:振込準備中
   * 90:振込完了
   * 100:返却商品発送準備中
   * 810:キャンセル
   * 900:買取完了
   */
  status: string;
  // 相場表コード
  usedQuotesCode: string;
  // 商品コード
  janCode: string;
  // 商品名
  itemName: string;
  // メール名
  makerName: string;
};
