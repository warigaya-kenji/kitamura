import { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs';

import ApiService from '../api.service';
import { isLocalHost } from '../utils';

/**
 * TSVを解析する
 * @param tsv タブ区切りの文字列
 */
const _parseTsv = (tsv: string): any => {
  let lines = tsv.split('\n');
  lines = lines.map((line) => line.trim()).filter((line) => line); // 空白行を削除

  let headers = (lines.shift() || '').split('\t');
  headers = headers.map((header) => header.trim()); // 余分な空白を削除

  return lines.map((line) => {
    const data = line.split('\t');
    return headers.reduce((obj: any, nextKey: string, index: number) => {
      obj[nextKey] = data[index].trim();
      return obj;
    }, {});
  });
};

/**
 * 有効期限でフィルタする
 * @param list 一覧
 * @param timeAdd 指定した時間だけ現在時刻に加える
 */
const _filterValid = (list: Array<{ validFrom: string; validTo: string }>, timeAdd: number): Array<any> => {
  if (list && list.length > 0 && Object.prototype.hasOwnProperty.call(list[0], 'validFrom') && Object.prototype.hasOwnProperty.call(list[0], 'validTo')) {
    const now = dayjs().add(timeAdd, 'h');
    const filterList = list.filter((obj) => now.isBetween(obj.validFrom, obj.validTo));
    return filterList;
  }

  return list;
};

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

/**
 * 画像のドメインURLを付与する
 * @param list 一覧
 */
const _addImageDomainUrl = (list: Array<{ imageSrc: string }>): Array<any> => {
  return list.map((obj) => {
    if (obj.imageSrc) {
      obj.imageSrc = obj.imageSrc.replace('/ec/images2/', process.env.VUE_APP_BANNER_IMAGE_URL);
    }
    return obj;
  });
};

const TsvConfigService = {
  /**
   * TSVファイルを取得する
   * @param path TSVファイルのあるパス
   * @param config リクエスト設定
   * @param timeAdd 指定した時間だけ現在時刻に加える
   */
  async getTsv(path: string, config: AxiosRequestConfig = {}, timeAdd = 0): Promise<any> {
    const url = process.env.VUE_APP_TSV_BASE_URL + path;
    config.responseType = 'text';
    const response = await ApiService.get(url, config);

    const responseJson = _parseTsv(response);
    return this.getFilteredValues(responseJson, timeAdd);
  },

  /**
   * 公開期間内のデータを取得する
   * @param responseJson TSVの内容を保持するJSONオブジェクト
   * @param timeAdd 指定した時間だけ現在時刻に加える
   * @returns 公開期間内のデータ
   */
  getFilteredValues(responseJson: Array<any>, timeAdd = 0): Array<any> {
    let filteredJson = _filterValid(responseJson, timeAdd);
    filteredJson = _sort(filteredJson);

    // ローカル環境にて画像を表示するため
    if (isLocalHost()) {
      filteredJson = _addImageDomainUrl(filteredJson);
    }

    return filteredJson;
  }
};

export default TsvConfigService;
