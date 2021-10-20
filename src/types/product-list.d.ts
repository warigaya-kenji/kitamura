export type ProductList = {
  items: Array<ProductItem>;
  wordItems: Array<{
    keyword: string;
    items: Array<ProductItem>;
  }>;
};

export type ProductItem = {
  narrow1: string;
  itemid: string;
  title: string;
  image: string;
  price: string;
  data18: string; // レビュー評価
  isSalesEnd?: boolean;
};

export type ProductListCount = {
  total: number;
  price: Array<any>;
  category: { [key: string]: number };
  narrow1: { [key: string]: number };
};

export type ShopResluts = {
  result: string;
  shops: Array<Shop>;
};

export type Shop = {
  shopcode: number;
  shopname: string;
};
