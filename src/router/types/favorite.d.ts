export type FavoriteList = {
  itemInfo: Array<FavoriteItem>;
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
};
