export type TradeProductItem = {
  /** janコード */
  janCode?: string;
  /** 相場表コード */
  usedQuotesCode: string;
  /** 商品名 */
  itemName: string;
  /** 商品画像 */
  imagePath: string;
  /** 数量 */
  count: number;
  /** 選択されているか */
  selected: boolean;
  /** 下取り価格S */
  tradeinPriceS: number;
  /** 下取り価格C */
  tradeinPriceC?: number;
  /** 買取価格S */
  assessPriceS?: number;
  /** 買取価格C */
  assessPriceC?: number;
  /** 買取価格保証フラグ */
  isPriceGuarantee?: boolean;
  /** 番号 */
  rowNo?: number[];
  /** トクトク交換可能か */
  canTokutoku?: boolean;
};
