import Vue from 'vue';
import axios, { AxiosRequestConfig } from 'axios';
import VueAxios from 'vue-axios';
import dayjs from 'dayjs';

/** APIのタイムアウト時間 */
const API_TIMEOUT_TIME = 30000;

/** APIキーに関するローカルストレージのキー */
const API_KEY_STORAGE_KEY = 'ec.api.key';
const API_KEY_UPDATED_TIMESTAMP_STORAGE_KEY = 'ec.api.key.updated.timestamp';

/** APIキーの有効期間（h） */
const API_KEI_LIMIT_HOUR = 24;

/**
 * 有効期限を超えているかどうか
 *
 * @param updatedTimestampStr 前回更新時間
 * @param limitHour 期限時間（h）
 * @returns 超えている場合：true, 超えていない場合：false
 */
const _isInvalidTimestamp = (updatedTimestampStr: string | null, limitHour: number) => {
  if (!updatedTimestampStr) {
    return true;
  }

  const now = dayjs();
  const updatedTimestamp = dayjs(updatedTimestampStr);
  const limitTimestamp = updatedTimestamp.add(limitHour, 'hours');

  return now.isAfter(limitTimestamp);
};

/**
 * APIキーを取得する
 *
 * @returns APIキー
 */
const _getApiKey = async (): Promise<string | null> => {
  let apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
  const updatedTimestampStr = localStorage.getItem(API_KEY_UPDATED_TIMESTAMP_STORAGE_KEY);

  if (!apiKey || _isInvalidTimestamp(updatedTimestampStr, API_KEI_LIMIT_HOUR)) {
    const url = process.env.VUE_APP_API_KEY_URL + 'api-key.txt';
    const config: AxiosRequestConfig = {
      responseType: 'text',
      timeout: API_TIMEOUT_TIME
    };

    const response = await Vue.axios.get(url, config);
    apiKey = response.data.replace('\n', '');

    if (apiKey) {
      localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
      localStorage.setItem(API_KEY_UPDATED_TIMESTAMP_STORAGE_KEY, dayjs().toISOString());
    }
  }

  return apiKey;
};

/**
 * ヘッダーに共通的な項目を追加する
 * @param headers ヘッダー
 */
const addCommonHeaders = async (headers: { [key: string]: string }): Promise<{ [key: string]: string }> => {
  if (headers == null) {
    headers = {};
  }

  if (process.env.VUE_APP_API_ID) {
    headers['X-Kitamura-App-Id'] = process.env.VUE_APP_API_ID;
  }

  let apiKey = process.env.VUE_APP_API_KEY;
  try {
    apiKey = await _getApiKey();
  } catch (error) {
    console.warn('Failed to get API KEY from sever.');
  }
  if (apiKey) {
    headers['X-Kitamura-Api-Key'] = apiKey;
  }

  if (process.env.VUE_APP_BASIC_AUTHORIZATION) {
    const user = window.btoa(process.env.VUE_APP_BASIC_AUTHORIZATION);
    headers['Authorization'] = 'Basic ' + user;
  }

  return headers;
};

const ApiService = {
  /**
   * 初期化
   */
  init() {
    Vue.use(VueAxios, axios);
  },

  /**
   * HTTP GET Method
   * @param url URL
   * @param config ヘッダーなどの設定
   * @param withCredentials 認証関連の情報をリクエストに付与するか
   * @param withErrorHandling 共通のエラーハンドリングを行うか
   * @param withReturnHeader レスポンスヘッダーを含めてリターンするか（デフォルト：false）
   */
  async get(
    url: string,
    config: AxiosRequestConfig = {},
    withCredentials = true,
    withErrorHandling: boolean | { apiName: string } = false,
    withReturnHeader = false
  ): Promise<any> {
    // タイムアウト設定
    config.timeout = API_TIMEOUT_TIME;

    // クレデンシャル情報
    if (withCredentials) {
      config.withCredentials = true;
      config.headers = await addCommonHeaders(config.headers);
    }

    try {
      const response = await Vue.axios.get(url, config);
      const responseBody = response.data;
      return withReturnHeader ? response : responseBody;
    } catch (error) {
      // 共通エラーハンドリング
      if (withErrorHandling) {
        // タイムアウト、または、5xxエラーの処理
        const status = error.response?.status || -1;
        if (error.code === 'ECONNABORTED' || (500 <= status && status < 600)) {
          let message = '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください';
          const apiName = typeof withErrorHandling === 'boolean' ? null : withErrorHandling?.apiName;
          message += apiName ? '（' + apiName + '）' : '。';
          Vue.prototype.$store.errorStore.errorMessage = message;
        }
      }

      throw error;
    }
  },

  /**
   * HTTP POST Method
   * @param url URL
   * @param body リクエストボディ
   * @param config ヘッダーやボディなどの設定
   * @param withCredentials 認証関連の情報をリクエストに付与するか
   * @param withErrorHandling 共通のエラーハンドリングを行うか
   * @param withReturnHeader レスポンスヘッダーを含めてリターンするか（デフォルト：false）
   */
  async post(
    url: string,
    body?: unknown,
    config: AxiosRequestConfig = {},
    withCredentials = true,
    withErrorHandling: boolean | { apiName: string } = false,
    withReturnHeader = false,
    useServerErrorMsg = false
  ): Promise<any> {
    // タイムアウト設定
    config.timeout = API_TIMEOUT_TIME;

    // クレデンシャル情報
    if (withCredentials) {
      config.withCredentials = true;
      config.headers = await addCommonHeaders(config.headers);
    }

    try {
      const response = await Vue.axios.post(url, body, config);
      const responseBody = response.data;
      return withReturnHeader ? response : responseBody;
    } catch (error) {
      // 共通エラーハンドリング
      if (withErrorHandling) {
        // タイムアウト、または、5xxエラーの処理
        const status = error.response?.status || -1;
        const errorMsg = error.response?.data?.details?.length ? error.response?.data?.details[0].message : '';
        if (useServerErrorMsg && errorMsg) {
          Vue.prototype.$store.errorStore.errorMessage = errorMsg;
        } else if (error.code === 'ECONNABORTED' || (500 <= status && status < 600)) {
          let message = '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください';
          const apiName = typeof withErrorHandling === 'boolean' ? null : withErrorHandling?.apiName;
          message += apiName ? '（' + apiName + '）' : '。';
          Vue.prototype.$store.errorStore.errorMessage = message;
        }
      }

      throw error;
    }
  }
};

export default ApiService;
