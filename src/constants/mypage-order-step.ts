// マイページ：状況

// 購入履歴（宅配）
export const BUY_DELIVERY_ORDER_STEP = [
  { no: 1, codeList: ['00'], text: '注文受付' },
  { no: 2, codeList: ['02'], text: '商品手配中' },
  { no: 3, codeList: ['03'], text: '発送準備中' },
  { no: 4, codeList: ['05'], text: '発送済' },
  { no: 0, codeList: ['99', '80'], text: 'キャンセル' }
];

// 購入履歴（店舗受取）
export const BUY_SHOP_ORDER_STEP = [
  { no: 1, codeList: ['00'], text: '注文受付' },
  { no: 2, codeList: ['02'], text: '商品手配中' },
  { no: 3, codeList: ['10'], text: 'お渡し\n準備完了' },
  { no: 4, codeList: ['11'], text: 'お渡し完了' },
  { no: 0, codeList: ['99', '80'], text: 'キャンセル' }
];

// 直送買取
export const SELL_ORDER_STEP = [
  { no: 1, codeList: ['0', '10', '11', '12', '20'], text: '状況確認中' },
  { no: 2, codeList: ['40'], text: '梱包キット\n発送済み' },
  { no: 3, codeList: ['41', '50', '51'], text: '査定依頼\n確認中' },
  { no: 4, codeList: ['60', '70', '71'], text: 'お客さま\n承認待ち' },
  { no: 5, codeList: ['90', '900'], text: '買取完了' },
  { no: 0, codeList: ['100'], text: '返却準備中' },
  { no: 0, codeList: ['810'], text: 'キャンセル' }
];

// トクトク交換（梱包キット希望あり）
export const SELL_TOKUTOKU_ORDER_NEED_KIT_STEP = [
  { no: 1, codeList: ['0', '10', '11', '12', '20'], text: '状況確認中' },
  { no: 2, codeList: ['40'], text: '梱包キット\n発送済み' },
  { no: 3, codeList: ['41', '50'], text: '査定依頼\n確認中' },
  { no: 4, codeList: ['51'], text: '査定済み' },
  { no: 5, codeList: ['90', '900'], text: '買取完了' },
  { no: 0, codeList: ['60'], text: 'お客さま\n承認待ち' },
  { no: 0, codeList: ['70', '71'], text: '振込準備中' },
  { no: 0, codeList: ['100'], text: '返却準備中' },
  { no: 0, codeList: ['810'], text: 'キャンセル' }
];

// トクトク交換（梱包キット希望なし）
export const SELL_TOKUTOKU_ORDER_NO_NEED_KIT_STEP = [
  { no: 1, codeList: ['0', '10', '11', '12', '20', '40'], text: '状況確認中' },
  { no: 2, codeList: ['41', '50', '51'], text: '査定依頼\n確認中' },
  { no: 3, codeList: ['90', '900'], text: '買取完了' },
  { no: 0, codeList: ['60'], text: 'お客さま\n承認待ち' },
  { no: 0, codeList: ['70', '71'], text: '振込準備中' },
  { no: 0, codeList: ['100'], text: '返却準備中' },
  { no: 0, codeList: ['810'], text: 'キャンセル' }
];
