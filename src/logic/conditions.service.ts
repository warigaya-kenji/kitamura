import { AxiosRequestConfig } from 'axios';
import ApiService from './api.service';
import { ConditionOption } from '@/types/conditions';

const ConditionsService = {
  /**
   * 「新品のみ」／「中古のみ」での検索条件の選択肢を取得
   */
  async fetchNewerConditionOption(): Promise<ConditionOption> {
    // TODO: Jsonの置き場未定のため決定後
    // const url = process.env.VUE_APP_TSV_BASE_URL + ’path’;
    const url = process.env.VUE_APP_JSON_BASE_URL + 'newer-condition.json';
    const config = {} as AxiosRequestConfig;
    config.responseType = 'json';
    const response = await ApiService.get(url, config);

    return response;
  },

  /**
   * 「中古在庫」での検索条件の選択肢を取得
   */
  async fetchUsedConditionOption(): Promise<ConditionOption> {
    // TODO: Jsonの置き場未定のため決定後
    // const url = process.env.VUE_APP_TSV_BASE_URL + ’path’;
    const url = process.env.VUE_APP_JSON_BASE_URL + 'used-condition.json';
    const config = {} as AxiosRequestConfig;
    config.responseType = 'json';
    const response = await ApiService.get(url, config);

    return response;
  }
};

export default ConditionsService;
