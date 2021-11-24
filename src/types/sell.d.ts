export type ProductInfo = {
  product_index: number;
  title: string;
  description: string;
  image: string;
  title_link: string;
  content1: string;
  list_price: string;
  tradein_s: string;
  tradein_a: string;
  tradein_b: string;
  tradein_c: string;
  selling_price_s: string;
  selling_price_a: string;
  selling_price_b: string;
  selling_price_c: string;
  jan_code: string;
  goods_code: string;
  price_guarantee_flg: string;
  maker_name: string;
  category1: string;
  category2: string;
  update_date: string;
  hash?: string;
};

export type ProductListCount = {
  total: number;
  category: { [key: string]: number };
  maker: { [key: string]: number };
  n1c: { [key: string]: number };
  n2c: { [key: string]: number };
  n3c: { [key: string]: number };
  n4c: { [key: string]: number };
  n5c: { [key: string]: number };
  n6c: { [key: string]: number };
  price_guarantee_flg: { [key: string]: number };
  s2: { [key: string]: number };
  s3: { [key: string]: number };
  s4: { [key: string]: number };
  s5: { [key: string]: number };
  s7: { [key: string]: number };
  s8: { [key: string]: number };
};

export type Category = {
  category: string;
  showText: string;
  items: number;
};

export type Maker = {
  name: string;
  showText: string;
  items: number;
};