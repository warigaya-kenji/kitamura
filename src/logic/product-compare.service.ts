import ApiService from './api.service';
import { generateImagePath } from './utils';
import { CompareProductList } from '@/types/product-compare';

const ProductCompareService = {
  /**
   * 比較商品情報の取得
   * @param janCodes 比較対象JanCode
   */
  async featchCompareProductList(janCodes: Array<string>): Promise<CompareProductList> {
    const url = process.env.VUE_APP_API_PRODUCT_BASE_URL + 'quickcomp';
    let response = {} as CompareProductList;

    response = await ApiService.get(url, {
      params: {
        janCodes: janCodes
      }
    });

    // 画像パス生成
    if (response.compTargets) {
      response.compTargets.forEach((product) => {
        product.imagePath = generateImagePath(product.imagePath);
      });
    }

    return response;
  }
};

export default ProductCompareService;
