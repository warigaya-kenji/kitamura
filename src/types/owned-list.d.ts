export type OwnedList = {
  items: Array<OwnedItem>;
  count: number;
};

export type OwnedItem = {
  rowNo: number;
  janCode: string;
  itemName: string;
  imagePath: string;
  /** 買取上限額 */
  assessPriceS: number;
  /** 買取下限額 */
  assessPriceC: number;
  /** 下取上限額 */
  tradeinPriceS: number;
  /** 下取下限額 */
  tradeinPriceC: number;
  rating: string;
  makerName: string;
  usedQuotesCode: string;
  canTokutoku: boolean;
  isPriceGuarantee: boolean;
};
