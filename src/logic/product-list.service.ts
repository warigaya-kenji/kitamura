import ApiService from './api.service';
import { ProductList, ProductListCount, ShopResluts } from '@/types/product-list';
import { ConditionItem } from '@/types/conditions';
import { generateImagePath } from './utils';

const _convertCategoryConditions = (searchCondition: Array<ConditionItem>, enableNarrow18: boolean): { [key: string]: string | number } => {
  const query: { [key: string]: string | number } = {};
  searchCondition.forEach((condition) => {
    if (enableNarrow18 && condition.paramCode === 'narrow18') {
      if (condition.value === '2') query['narrow18'] = 2;
    } else if (condition.paramCode === 'category') {
      // カテゴリはコード値ではなく名称を用いる
      query[condition.paramCode] = condition.valueText;
    } else {
      query[condition.paramCode] = condition.value;
    }
  });
  return query;
};

const ProductListService = {
  /**
   * 「新品のみ」／「中古のみ」での商品検索
   * @param searchCondition 検索条件
   * @param ipg 表示件数
   * @param page ページ数
   */
  async searchNewItem(searchCondition: Array<ConditionItem>, sort: string, ipg: number, page: number): Promise<ProductList> {
    const url = process.env.VUE_APP_API_VIVACE_NEW_BASE_URL + 'list';
    let response = {} as ProductList;

    const query = _convertCategoryConditions(searchCondition, true);
    query['sort'] = sort;
    query['ipg'] = ipg;
    query['page'] = page;
    query['narrow19'] = 1;

    response = await ApiService.get(url, {
      params: query
    });

    // 画像パス生成
    if (response.items) {
      response.items.forEach((product) => {
        product.image = generateImagePath(product.image);
      });
    }

    return response;
  },

  /**
   * 「中古在庫」での商品検索
   * @param searchCondition 検索条件
   * @param ipg 表示件数
   * @param page ページ数
   */
  async searchUsedItem(searchCondition: Array<ConditionItem>, sort: string, ipg: number, page: number): Promise<ProductList> {
    const url = process.env.VUE_APP_API_VIVACE_USED_BASE_URL + 'list';
    let response = {} as ProductList;

    const query = _convertCategoryConditions(searchCondition, false);
    query['sort'] = sort;
    query['ipg'] = ipg;
    query['page'] = page;

    response = await ApiService.get(url, {
      params: query
    });

    // 画像パス生成
    if (response.items) {
      response.items.forEach((product) => {
        product.image = generateImagePath(product.image);
      });
    }

    return response;
  },

  /**
   * 「新品のみ」／「中古のみ」での商品件数を取得する。
   * @param searchCondition 検索条件
   */
  async searchNewItemCount(searchCondition: Array<ConditionItem>): Promise<ProductListCount> {
    const url = process.env.VUE_APP_API_VIVACE_NEW_BASE_URL + 'count';
    let response = {} as ProductListCount;

    const query = _convertCategoryConditions(searchCondition, false);
    query['narrow19'] = 1;

    response = await ApiService.get(url, {
      params: query
    });

    return response;
  },

  /**
   * 「中古在庫」での商品件数を取得する。
   * @param searchCondition 検索条件
   */
  async searchUsedItemCount(searchCondition: Array<ConditionItem>): Promise<ProductListCount> {
    const url = process.env.VUE_APP_API_VIVACE_USED_BASE_URL + 'count';
    let response = {} as ProductListCount;

    const query = _convertCategoryConditions(searchCondition, false);

    response = await ApiService.get(url, {
      params: query
    });

    return response;
  },

  /**
   * 店舗一覧の取得
   */
  async fetchShopList(): Promise<ShopResluts> {
    const url = process.env.VUE_APP_API_SHOP_BASE_URL + 'shop/shopsByWords';
    let response = {} as ShopResluts;
    const query: { [key: string]: string | number } = {};
    query['brand'] = 1;
    query['appid'] = 101;
    query['itemflg'] = 1;

    response = await ApiService.get(
      url,
      {
        params: query
      },
      false
    );

    return response;
  }
};

export default ProductListService;
