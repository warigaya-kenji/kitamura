import { CarouselBanner, MovieNews, SpecialSaleNews } from '@/types/tsv-config';
import TsvConfigService from './tsv-config.service';

const TopConfigsService = {
  /**
   * カルーセルバナー設定を取得する
   * @param timeAdd 指定した時間だけ現在時刻に加える
   */
  async fetchCarouselBanners(timeAdd: number): Promise<CarouselBanner[]> {
    const path = 'top/carousel.tsv';
    const response = await TsvConfigService.getTsv(path, {}, timeAdd);
    return response;
  },

  /**
   * 新着用動画設定を取得する
   * @param timeAdd 指定した時間だけ現在時刻に加える
   */
  async fetchMovieNews(timeAdd: number): Promise<MovieNews[]> {
    const path = 'top/movie.tsv';
    const response = await TsvConfigService.getTsv(path, {}, timeAdd);
    return response;
  },

  /**
   * 特集設定を取得する
   * @param timeAdd 指定した時間だけ現在時刻に加える
   */
  async fetchSpecialSaleNews(timeAdd: number): Promise<SpecialSaleNews[]> {
    const path = 'top/sale.tsv';
    const response = await TsvConfigService.getTsv(path, {}, timeAdd);
    return response;
  }
};

export default TopConfigsService;
