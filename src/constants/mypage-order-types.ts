// マイページ：ご利用履歴 種類
export const BUY_ORDER_TYPES = [
  {
    text: '新品・中古',
    value: 0
  },
  {
    text: '新品のみ',
    value: 1
  },
  {
    text: '中古のみ',
    value: 2
  }
];

export const SELL_ORDER_TYPES = [
  {
    text: '買取・下取',
    value: 0
  }
];

/**
 * 区分
 * 1:トクトク交換
 * 2:下取り
 * 3:直送買取
 */
export const SELL_KIND = {
  TOKUTOKU: 1,
  TRADE_IN: 2,
  PURCHASE: 3
};
