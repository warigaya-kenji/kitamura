export type DeliveryAddressList = {
  addrCount: number;
  addrInfo: Array<DeliveryAddressItem>;
};

export type DeliveryAddressItem = {
  delivAddressId: string;
  zipCode: string;
  prefectureId: number;
  prefectureName: string;
  addr1: string;
  addr2: string;
  addr3: string;
  lastName: string;
  firstName: string;
  lastNameKn: string;
  firstNameKn: string;
  phone: string;
};

// 登録するお届け先
export type RegisterDeliveryAddress = {
  zipCode: string;
  prefectureId: string;
  addr1: string;
  addr2: string;
  addr3: string;
  lastName: string;
  firstName: string;
  lastNameKn: string;
  firstNameKn: string;
  phone: string;
};

// 住所検索結果
export type SearchedAddressResult = {
  status: string;
  query: string;
  result: SearchedAddress;
};

// 検索した住所
export type SearchedAddress = {
  zip7: string;
  zip3: string;
  zip4: string;
  prefecture_id: 14;
  prefecture_nm: string;
  addr1: string;
  addr2: string;
};
