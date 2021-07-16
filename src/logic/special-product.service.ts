import ApiService from './api.service';
import { AxiosRequestConfig } from 'axios';
import ProductService from './product.service';
import { ProductItem } from '@/types/product-list';
import { ProductDetail } from '@/types/product';
import TsvConfigService from './tsv/tsv-config.service';
import { isLocalHost, splitList } from '@/logic/utils';

const SpecialProductService = {
  convertProduct(productList: any[]): ProductItem[] {
    const updatedProductList: ProductItem[] = [];
    productList.forEach((element) => {
      const item: ProductItem = {
        title: element.itemName,
        data18: element.ratingTotal,
        price: element.price,
        image: element.images[0].imagePath,
        itemid: element.janCode,
        narrow1: element.makerName
      };
      updatedProductList.push(item);
    });
    return updatedProductList;
  },

  /**
   * テンプレートA 特集商品取得
   * @param id 特集ID
   * @param passCode パスコード
   */
  async getSaleSpecialProduct(id: string, passCode?: string): Promise<ProductItem[]> {
    const url = passCode ? process.env.VUE_APP_API_PRODUCT_BASE_URL + 'secret_product' : process.env.VUE_APP_API_PRODUCT_BASE_URL + 'special_product';
    const specialProduct = await ApiService.get(url, {
      params: { id }
    });

    const janCodes = specialProduct.results.map((item: any) => item.janCode);

    // 商品詳細取得APIはJANコード指定が最大20件のため、分割して取得する
    const splittedJanCodes = splitList(janCodes, 20);
    const responses = splittedJanCodes.map((splittedJanCodes) => ProductService.fetchProducts(splittedJanCodes, true, undefined, undefined, id));
    const items = (await Promise.all(responses)).reduce((list, value) => list.concat(value.items), new Array<ProductDetail>());

    const productList = this.convertProduct(items);
    return productList;
  },

  /**
   * テンプレートB 特集商品取得
   * @param janCodes 商品JanCode
   */
  async getNewsSpecialProduct(janCodes: Array<string>): Promise<ProductItem[]> {
    // 商品詳細取得APIはJANコード指定が最大20件のため、分割して取得する
    const splittedJanCodes = splitList(janCodes, 20);
    const responses = splittedJanCodes.map((splittedJanCodes) => ProductService.fetchProducts(splittedJanCodes, true));
    const items = (await Promise.all(responses)).reduce((list, value) => list.concat(value.items), new Array<ProductDetail>());

    const productList = this.convertProduct(items);
    return productList;
  },

  async fetchJsonFile(path: string): Promise<any> {
    const url = process.env.VUE_APP_STATIC_FILE_BASE_URL + 'json/sale/' + path;
    const response = await ApiService.get(url, {}, true, false, true);
    return response;
  },

  async getSpecialJson(path: string): Promise<any> {
    const response = await this.fetchJsonFile(path);
    response.data.footBanners = TsvConfigService.getFilteredValues(response.data.footBanners);
    return response;
  },

  /**
   * サーバー時間取得用
   */
  async getHealthCheck(): Promise<any> {
    const url = isLocalHost() ? 'https://nc-feature9.kitamura.shop/healthcheck' : '/healthcheck';
    const config: AxiosRequestConfig = {};
    config.responseType = 'text';
    const response = await ApiService.get(url, config, true, false, true);

    return response;
  }
};
export default SpecialProductService;
