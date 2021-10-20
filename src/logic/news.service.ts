import { ShaSha, News } from '@/types/news';
import ApiService from './api.service';

const NewsService = {
  /**
   * SHASHAコンテンツを取得する関数
   */
  async searchShashaContent(): Promise<Array<ShaSha>> {
    const url = process.env.VUE_APP_API_OTHER_URL + 'shashafeed';
    const response = await ApiService.get(url);
    return response.result;
  },

  /**
   * ニュースを取得する関数
   * @param isMyPage
   * @param option
   */
  async searchNews(
    isMyPage: boolean,
    option?: {
      limit?: number;
      from?: string;
      to?: string;
      newsNo?: string;
      newsType?: Array<number>;
    }
  ): Promise<Array<News>> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'news';

    const response = await ApiService.get(url, {
      params: {
        isMyPage,
        limit: option?.limit,
        from: option?.from,
        to: option?.to,
        newsNo: option?.newsNo,
        newsType: option?.newsType?.join(',')
      }
    });

    if (!response) {
      throw new Error('Failure to get news.');
    }

    return response.news;
  }
};

export default NewsService;
