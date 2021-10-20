export type OwnedList = {
  items: Array<OwnedItem>;
  count: number;
};

export type OwnedItem = {
  rowNo: number;
  janCode: string;
  itemName: string;
  imagePath: string;
  maxPurchasePrice: string;
  rating: string;
  makerName: string;
};
