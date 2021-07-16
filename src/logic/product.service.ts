import Vue from 'vue';
import { ProductDetail, UsedProductDetail, RecommendProducts, UsedProductsSummary, MemberProduct, SimpleProduct } from '@/types/product';
import { FavoriteList } from '@/types/favorite';
import ApiService from './api.service';
import { generateImagePath } from './utils';
import { CART_ERROR_LIST } from '@/constants/cart-error';

/**
 * Windowのinterfaceにレコメンド (ppz.js) 関連のプロパティを追加する
 */
declare global {
  interface Window {
    _PPZ: any;
    ppzCallback: { [key: string]: (response: RecommendProducts) => void };
  }
}
window.ppzCallback = {};

/**
 * ppz.jsを用いてレコメンド商品一覧を取得する
 * @param customerId 顧客ID
 * @param recommendId レコメンドID
 * @param itemId 商品ID
 * @param callBackFunctionName コールバック関数名（他の呼び出しと被らないようにすること）
 * @param cateCode カートコード
 */
const _searchRecommendProducts = (
  customerId: string,
  recommendId: string,
  itemId: string,
  callBackFunctionName: string,
  cateCode?: string
): Promise<RecommendProducts> => {
  return new Promise((resolve, reject) => {
    const ppz = new window._PPZ();
    ppz.cid = customerId;
    ppz.rid = recommendId;
    // eslint-disable-next-line
    ppz.item_id = itemId;
    if (cateCode) ppz.cat = cateCode;
    ppz.cb = `ppzCallback.${callBackFunctionName}`;

    try {
      ppz.request();
    } catch (error) {
      reject(error);
    }

    window.ppzCallback[callBackFunctionName] = (response: RecommendProducts) => {
      resolve(response);
    };
  });
};

const ProductService = {
  /**
   * レコメンドの商品詳細一覧を取得する
   * - レコメンドAPIで商品一覧を取得
   * - 商品一覧からJANコードのみ一覧で取得する
   * - JANコードをもとに商品詳細APIで商品詳細取得
   * @param customerId 顧客ID
   * @param recommendId レコメンドID
   * @param itemId 商品ID
   * @param callBackFunctionName コールバック関数名（他の呼び出しと被らないようにすること）
   * @param cateCode カートコード
   */
  async searchRecommendProducts(customerId: string, recommendId: string, itemId: string, callBackFunctionName: string, cateCode?: string): Promise<any> {
    // レコメンドAPIで商品一覧を取得
    const recList = await _searchRecommendProducts(customerId, recommendId, itemId, callBackFunctionName, cateCode);
    let prodDetailList = {} as {
      itemCount: number;
      cartMaxCount: number;
      items: Array<SimpleProduct>;
    };

    //  商品一覧からJANコードのみ一覧で取得する
    if (recList.item_list?.length) {
      const janList = recList.item_list.map((item: { item_id: string }) => item.item_id);

      // JANコードをもとに商品詳細APIで商品詳細取得
      if (janList.length > 0) {
        prodDetailList = await this.fetchProducts(janList, true);

        // 画像パス生成
        if (prodDetailList.items) {
          prodDetailList.items.forEach((product) => {
            product.images.forEach((image) => {
              image.imagePath = generateImagePath(image.imagePath);
            });
          });
        }
      }
    }
    return prodDetailList;
  },

  /**
   * JANコード配列から、商品詳細を取得する
   * @param janCodes 取得したい商品のJANコード配列
   * @param isSimple 簡易取得かどうか
   * @param categoryCode カテゴリコード
   * @param isMemberDisplay 会員向けかどうか
   * @param secretId 限定販売ID
   */
  async fetchProducts(
    janCodes: Array<string>,
    isSimple: boolean,
    categoryCode?: string,
    isMemberDisplay?: boolean,
    secretId?: string
  ): Promise<{
    itemCount: number;
    cartMaxCount: number;
    items: Array<ProductDetail>;
  }> {
    const url = process.env.VUE_APP_API_PRODUCT_BASE_URL + 'product';
    let response = {} as {
      itemCount: number;
      cartMaxCount: number;
      items: Array<ProductDetail>;
    };
    response = await ApiService.get(url, {
      params: { janCodes, categoryCode, isMemberDisplay, secretId, isSimple }
    });

    // 画像パス変換
    response.items.forEach((product) => {
      product.images.forEach((image) => {
        image.imagePath = generateImagePath(image.imagePath);
      });
      // 簡易取得でないとき
      if (!isSimple) {
        product.sampleImages.forEach((image) => {
          image.sampleImageOrgPath = generateImagePath(image.sampleImageOrgPath);
          image.sampleImagePath = generateImagePath(image.sampleImagePath);
        });
        product.relatedItems.forEach((item) => {
          item.imagePath = generateImagePath(item.imagePath);
        });
      }
    });

    return response;
  },

  /**
   * 中古商品コードから、中古の商品詳細を取得する
   * @param itemCode 中古商品コード
   */
  async fetchUsedProducts(itemCode: string): Promise<UsedProductDetail> {
    const url = process.env.VUE_APP_API_PRODUCT_BASE_URL + 'used_product';
    let response = {} as UsedProductDetail;
    response = await ApiService.get(url, {
      params: { itemCode }
    });

    // 画像パス変換
    response.imageUrl1 = generateImagePath(response.imageUrl1);
    response.imageUrl2 = generateImagePath(response.imageUrl2);
    response.imageUrl3 = generateImagePath(response.imageUrl3);

    return response;
  },

  /**
   * 新品用中古情報を取得する関数
   * 新品商品の中古情報を取得
   * @param janCodes 中古情報を取得したい新品商品のJANコード配列
   */
  async searchUsedProductsSummary(janCodes: Array<string>): Promise<{ itemInfo: Array<UsedProductsSummary> }> {
    const url = process.env.VUE_APP_API_PRODUCT_BASE_URL + 'used_summary';
    const response = await ApiService.get(url, {
      params: { janCodes }
    });

    return response;
  },

  /**
   * 店舗情報を取得する関数
   * @param shopCode 店舗コード配列
   */
  async searchShop(shopCode: string): Promise<any> {
    const url = process.env.VUE_APP_API_SHOP_BASE_URL + 'shop/shopsByCodes';
    const response = await ApiService.get(
      url,
      {
        params: { shopCode }
      },
      false
    );
    return response;
  },

  /**
   * カート投入
   * @param janCode 商品コード
   * @param isChuko 中古かどうか
   * @param option オプション
   * @param displayPrice 表示価格
   * @param secretId 限定販売ID
   * @param count 数量
   */
  async addCart(
    janCode: string,
    isChuko: boolean,
    option: { addWarranty: boolean; addWrapping: boolean; applyTradeIn: boolean } | null,
    displayPrice: number,
    count = 1,
    secretId?: string
  ): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'cart';
    const config = {
      janCode,
      isChuko,
      isWarranty: !!option?.addWarranty,
      isWrapping: !!option?.addWrapping,
      wrappingJanCode: option?.addWrapping ? '2240480042741' : null, // ラッピング自体の商品コード
      isTrade: !!option?.applyTradeIn,
      displayPrice,
      secretId,
      count: count
    };

    try {
      const response = await ApiService.post(url, config);
      return response;
    } catch (error) {
      console.error(error.message);

      // タイムアウトエラー
      if (error.code === 'ECONNABORTED') {
        Vue.prototype.$store.errorStore.errorMessage = '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください（cart）';
      } else {
        // 5xxエラー
        const errorDetails = error.response.data?.details || [];
        const errorCode = errorDetails.length > 0 ? errorDetails[0].errorCode : '';
        const errorCodeMessage = errorCode ? '：' + errorCode : '';
        Vue.prototype.$store.errorStore.errorMessage =
          CART_ERROR_LIST.find((item) => item.code === errorCode)?.message ||
          '一部のシステムがご利用いただけない可能性があります。しばらく待ってからご利用ください（cart' + errorCodeMessage + '）';
      }

      throw error;
    }
  },

  /**
   * TODO: 仕様決定後、実装修正（一覧と詳細でAPIが異なる場合は、lise.serviceに移行）
   * 既にお気に入り商品の登録済か確認
   * @param janCode 商品コード
   */
  async isFavoriteByJanCode(janCode: string): Promise<FavoriteList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'favorite';
    const response = {} as FavoriteList;
    // response = await ApiService.get(url, { params: { janCode } });

    return response;
  },

  /**
   * TODO: 仕様決定後、実装修正（一覧と詳細でAPIが異なる場合は、lise.serviceに移行）
   * 一括取得：既にお気に入り商品の登録済か確認
   * @param janCode 商品コード
   */
  async isFavoriteByJanCodes(janCode: string[]): Promise<FavoriteList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'favorite';
    const response = {} as FavoriteList;
    // response = await ApiService.get(url, { params: { janCode } });

    return response;
  },

  /**
   * 会員商品の取得
   * @param janCode JANコード
   * @returns 会員商品
   */
  async fetchMemberProduct(janCode: string): Promise<MemberProduct> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'member_product';
    const configs = { params: { janCode } };
    const response = await ApiService.get(url, configs);

    return response;
  },

  /**
   * お気に入り商品登録
   * @param janCode 商品コード
   * @param noticePrice 安くなった通知
   * @param noticeUsed 同型商品の通知
   * @param isDelete 削除区分
   */
  async registerFavorite(janCode: string, noticePrice: boolean, noticeUsed: boolean, isDelete: boolean): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'add_favorite';
    const body = {
      janCode,
      noticePrice,
      noticeUsed,
      isDelete
    };
    const response = await ApiService.post(url, body, {}, true, { apiName: 'favorite' });

    return response;
  },

  /**
   * 持っている商品登録
   * @param janCode 持っている商品のJANコード
   */
  async registerHaving(janCode: string): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'add_owned';
    const response = await ApiService.post(url, { janCode }, {}, true, { apiName: 'have' });

    return response;
  },

  /**
   * フラグを含んでいるか確認する
   * @param productFlagList 商品の各種フラグリスト
   * @param flagNum 含んでいるかチェックしたいフラグ
   * @returns true：含んでいる false：含んでいない
   */
  includeFlag(productFlagList: Array<number>, flagNum: number): boolean {
    if (productFlagList && productFlagList.some((flag: number) => flag === flagNum)) {
      return true;
    } else {
      return false;
    }
  }
};

export default ProductService;
