import { AxiosRequestConfig } from 'axios';
import ApiService from './api.service';

const IncludeFileService = {
  /**
   * インクルードファイルを取得
   */
  async fetchIncludeFile(path: string): Promise<string> {
    const url = process.env.VUE_APP_INCLUDE_FILE_BASE_URL + path;
    const config: AxiosRequestConfig = {};
    config.responseType = 'text';
    const response = await ApiService.get(url, config);

    return response;
  },

  /**
   * 静的HTMLファイルを取得
   */
  async fetchStaticHtmlFile(path: string): Promise<string> {
    const url = path;
    const config: AxiosRequestConfig = {};
    config.responseType = 'text';
    const response = await ApiService.get(url, config);

    return response;
  }
};

export default IncludeFileService;
