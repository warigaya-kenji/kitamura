import { Maker, SpecialBanner } from '@/types/tsv-config';
import TsvConfigService from './tsv-config.service';

const ProductListConfigsService = {
  /**
   * メーカー設定を取得する
   * @param categoryCode カテゴリコード
   */
  async fetchMakers(categoryCode: string): Promise<Maker[]> {
    const path = `list/${categoryCode}_maker.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  /**
   * 特集バナーの設定を取得する
   * @param categoryCode カテゴリコード
   */
  async fetchSpacialBanners(categoryCode: string): Promise<SpecialBanner[]> {
    const path = `list/${categoryCode}_banner.tsv`;
    const response = await TsvConfigService.getTsv(path);
    return response;
  }
};

export default ProductListConfigsService;
