import { CarouselBanner, MovieNews, SpecialSaleNews } from '@/types/tsv-config';
import TsvConfigService from './tsv-config.service';

const TopConfigsService = {
  /**
   * カルーセルバナー設定を取得する
   */
  async fetchCarouselBanners(): Promise<CarouselBanner[]> {
    const path = 'top/carousel.tsv';
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  /**
   * 新着用動画設定を取得する
   */
  async fetchMovieNews(): Promise<MovieNews[]> {
    const path = 'top/movie.tsv';
    const response = await TsvConfigService.getTsv(path);
    return response;
  },

  /**
   * 特集設定を取得する
   */
  async fetchSpecialSaleNews(): Promise<SpecialSaleNews[]> {
    const path = 'top/sale.tsv';
    const response = await TsvConfigService.getTsv(path);
    return response;
  }
};

export default TopConfigsService;
