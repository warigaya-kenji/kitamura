import { SuggestItem } from '@/types/suggest.d';
import ApiService from './api.service';

const SuggestService = {
  /**
   * 「新品のみ」／「中古のみ」で検索するときの関数
   * また、「新品・中古」／「新品のみ」／「中古のみ」でサジェストするときにも使用
   * @param category 検索するときに絞り込み条件となるカテゴリ
   * @param keyword 検索キーワード
   * @param includeUsed 「新品のみ」：false 「中古のみ」：true。
   */
  async searchNewItem(category: string, keyword: string, includeUsed?: boolean): Promise<SuggestItem> {
    const url = process.env.VUE_APP_API_VIVACE_NEW_BASE_URL + 'suggest';
    let response = {} as SuggestItem;

    if (includeUsed) {
      response = await ApiService.get(url, {
        params: { category, keyword, narrow18: 2, sort: 'keyword' }
      });
    } else {
      response = await ApiService.get(url, { params: { category, keyword, sort: 'keyword' } });
    }

    return response;
  },

  /**
   * 「中古買取」で検索するときの関数
   * @param category 検索するときに絞り込み条件となるカテゴリ
   * @param keyword 検索キーワード
   */
  async searchUsedItem(category: string, keyword: string): Promise<SuggestItem> {
    const url = process.env.VUE_APP_API_VIVACE_USED_BASE_URL + 'suggest';
    const response = await ApiService.get(url, {
      params: { category, keyword, sort: 'keyword' }
    });
    return response;
  },

  /**
   * 「売却」で検索するときの関数
   * @param category 検索するときに絞り込み条件となるカテゴリ
   * @param keyword 検索キーワード
   */
  async searchSellItem(category: string, keyword: string): Promise<SuggestItem> {
    const url = process.env.VUE_APP_API_VIVACE_QUOTATION_BASE_URL + 'suggest';
    const response = await ApiService.get(url, {
      params: { category, keyword, sort: 'keyword' }
    });
    return response;
  }
};

export default SuggestService;
