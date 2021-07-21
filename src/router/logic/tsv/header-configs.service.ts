import { CategoryLink } from '@/types/tsv-config';
import TsvConfigService from './tsv-config.service';

const HeaderConfigsService = {
  /**
   * 買いたいタブのカテゴリリンクを取得する
   */
  async fetchCategoryLinks(): Promise<CategoryLink[]> {
    const path = 'header/category.tsv';
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  /**
   * 売りたいタブのバナーを取得する
   */
  async fetchChukoBanners(): Promise<CategoryLink[]> {
    const path = 'header/chuko_banner.tsv';
    const response = await TsvConfigService.getTsv(path);
    return response;
  }
};

export default HeaderConfigsService;
