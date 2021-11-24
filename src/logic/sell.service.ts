import ApiService from './api.service';
import { generateImagePath } from '@/logic/utils';
import { Category, Maker, ProductInfo, ProductListCount } from '@/types/sell';

const _convertSellSearchCondition = (conditions: { [key: string]: string }): { [key: string]: string } => {
  const query: { [key: string]: string } = {};
  Object.entries(conditions).forEach(([key, val]) => {
    if (!val) return;
    // トクトク対象は、別パラメータに変換
    if (key === 'tokutoku') {
      if (val === '1') query['price_guarantee_flg'] = '1';
    } else {
      query[key] = val;
    }
  });
  return query;
};

const SellService = {
  /**
   * 買い取り査定商品一覧の取得（検索条件）
   * @param conditions 検索条件
   * @param sort ソート
   * @param ipg 表示件数
   * @param page ページ数
   */
  async searchProductList(
    conditions: { [key: string]: string },
    sort: string,
    ipg: number,
    page: number,
    enableTokutokuFilter = false
  ): Promise<Array<ProductInfo>> {
    const url = process.env.VUE_APP_API_VIVACE_QUOTATION_BASE_URL + 'list';

    const query: { [key: string]: string | number } = _convertSellSearchCondition(conditions);
    query['sort'] = sort;
    query['ipg'] = ipg;
    query['page'] = page;

    if (enableTokutokuFilter) {
      query['price_guarantee_flg'] = 1;
    }

    const response = await ApiService.get(url, {
      params: query
    });

    // 画像指定がない場合、no imageに差し替え
    if (response.items) {
      response.items.forEach((product: ProductInfo) => {
        product.image = generateImagePath(product.image);
      });
    }

    return response.items;
  },

  /**
   * 買い取り査定商品一覧件数の取得
   * @param conditions 検索条件
   */
  async searchProductListCount(conditions: { [key: string]: string }): Promise<ProductListCount> {
    const url = process.env.VUE_APP_API_VIVACE_QUOTATION_BASE_URL + 'count';

    const query: { [key: string]: string | number } = _convertSellSearchCondition(conditions);

    const response = await ApiService.get(url, {
      params: query
    });

    return response;
  },

  /**
   * 表示用条件の生成（カテゴリー）
   * @param categories カテゴリー
   */
  getCategory(categories: { [key: string]: number }) {
    const categoryList: Category[] = [];
    for (const key in categories) {
      const isParentCategory = key.indexOf(':') === -1;
      if (isParentCategory && Object.prototype.hasOwnProperty.call(categories, key)) {
        const category: Category = {
          category: key,
          showText: key + ' (' + categories[key] + ')',
          items: categories[key]
        };
        if (key !== '0') {
          categoryList.push(category);
        }
      }
    }
    return categoryList.sort((firstItem, secondItem) => (firstItem.items > secondItem.items ? -1 : 1));
  },

  /**
   * 表示用条件の生成（メーカー）
   * @param makerData メーカー
   */
  getMakerList(makerData: { [key: string]: number }) {
    const makerList: Maker[] = [];
    if (makerData) {
      for (const key in makerData) {
        if (Object.prototype.hasOwnProperty.call(makerData, key)) {
          const maker: Maker = {
            name: key,
            showText: key + ' (' + makerData[key] + ')',
            items: makerData[key]
          };
          if (key !== '0') {
            makerList.push(maker);
          }
        }
      }
      return makerList.sort((firstItem, secondItem) => (firstItem.items > secondItem.items ? -1 : 1));
    }
    return makerList;
  },

  /**
   * 表示用の詳細条件の生成
   * @param optionCount 選択肢
   */
  getSelectOptionList(optionCount: { [key: string]: number }, countSort: boolean): Array<{ text: string; value: string; count: number }> {
    const optionList = [] as Array<{ text: string; value: string; count: number }>;
    Object.entries(optionCount).map(([val, count]) => {
      if (count > 0)
        optionList.push({
          text: val + ' (' + count + ')',
          value: val,
          count: count
        });
    });

    return countSort ? optionList.sort((a, b) => (a.count > b.count ? -1 : 1)) : optionList;
  },

  /**
   * 条件パラメーターの生成(空値条件は除外)
   * @param conditions 検索条件
   */
  deleteEmptyConditionParam(conditions: { [key: string]: string }): { [key: string]: string } {
    const param: { [key: string]: string } = {};
    Object.entries(conditions).forEach(([key, val]) => {
      // トクトク対象のみ別途処理
      if (val && !(key === 'tokutoku' && val === '0')) param[key] = val;
    });
    return param;
  },

  /**
   * 梱包キットを申し込み紐付け
   */
  async offerPackagingKit(goodsCodes: Array<string>): Promise<any> {
    const deleteUrl = '/sell/item-delete.do?ln=all';
    try {
      await ApiService.get(deleteUrl);
    } catch (error) {
      // APIからの応答でCORSエラーが起きても無視する
      console.error(error);
    }

    const addUrl = '/sell/item-add.do';
    for (const goodsCode of goodsCodes) {
      try {
        await ApiService.get(addUrl, {
          params: {
            gc: goodsCode
          }
        });
      } catch (error) {
        // APIからの応答でCORSエラーが起きても無視する
        console.error(error);
      }
    }
  }
};

export default SellService;
