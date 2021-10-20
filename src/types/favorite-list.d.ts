export type FavoriteList = {
  items: Array<FavoriteItem>;
  count: number;
};

export type FavoriteItem = {
  rowNo: number;
  janCode: string;
  itemName: string;
  imagePath: string;
  price: string;
  rating: string;
  isNoticePrice: boolean;
  isNoticeUsed: boolean;
  isNoticePriceSetting: boolean;
  isNoticeUsedSetting: boolean;
  makerName: string;
  isSalesEnd: boolean;
};
