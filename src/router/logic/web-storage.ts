/**
 * ソートする
 * @param list 一覧
 */
const _sort = (list: Array<{ index: number }>): Array<any> => {
  if (list && list.length > 0 && Object.prototype.hasOwnProperty.call(list[0], 'index')) {
    const sortList = list.sort((a, b) => {
      if (+a.index < +b.index) return -1;
      if (+a.index > +b.index) return 1;
      return 0;
    });
    return sortList;
  }
  return list;
};

const WebStorage = {
  /**
   * SessionStorageへの格納
   * @param key キー名
   * @param value 値
   */
  setSessionStorage(key: string, value: any) {
    const convertJson = JSON.stringify(value);
    sessionStorage.setItem(key, convertJson);
  },

  /**
   * SessionStorageへの格納
   * @param key キー名
   * @param value 値
   */
  getSessionStorage(key: string): any {
    const jsonVal = sessionStorage.getItem(key);
    const val = jsonVal ? JSON.parse(jsonVal) : undefined;
    return Array.isArray(val) ? _sort(val) : val;
  }
};

export default WebStorage;
