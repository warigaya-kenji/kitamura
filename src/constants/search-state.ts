// 検索条件：状態のリスト
// APIのqueryとしては、中古しか使用しない
export const SEARCH_STATE = {
  key: 'narrow18',
  text: '状態',
  option: [
    {
      text: '新品・中古',
      value: '0'
    },
    {
      text: '新品のみ',
      value: '1'
    },
    {
      text: '中古のみ',
      value: '2'
    },
    {
      text: '中古在庫',
      value: '3'
    },
    {
      text: '買取り',
      value: '4'
    }
  ]
};
