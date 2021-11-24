import ApiService from './api.service';
import { DeliveryAddressList, RegisterDeliveryAddress, SearchedAddressResult } from '@/types/address-list';
import { OrderList } from '@/types/order-list';
import { OrderBuyDetail, OrderBuyProductDetail } from '@/types/order-buy-detail';
import { OrderSellDetail, OrderSellProductDetail } from '@/types/order-sell-detail';
import { OrderTradeDetail, OrderTradeProductDetail } from '@/types/order-trade-detail';
import { OrderTokutokuDetail, OrderTokutokuProductDetail } from '@/types/order-tokutoku-detail';
import { FavoriteList } from '@/types/favorite-list';
import { OwnedList } from '@/types/owned-list';
import { ReviewList } from '@/types/review-list';
import { CouponList } from '@/types/coupon-list';
import { PurchaseList } from '@/types/purchase-list';
import { generateImagePath } from './utils';

const UserService = {
  /**
   * 注文一覧の取得
   *
   * @param pageNo ページ数。指定なしは1ページ目
   * @param year 年。指定なしは直近1年
   * @param goodsKind 新品中古。指定なしは新品中古両方。1：新品、2：中古
   * @param rcvMethodId 受け取り方法。指定なしはすべて
   * @param maxOdrCount 取得件数。指定なしは10（MAX 100）
   */
  async fetchOrderList(pageNo?: number, year?: number, goodsKind?: number, rcvMethodId?: number, maxOdrCount?: number): Promise<OrderList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'orderList';
    const response = await ApiService.get(url, {
      params: {
        pageNo,
        maxOdrCount,
        year,
        goodsKind,
        rcvMethodId
      }
    });

    return response;
  },

  /**
   * 買取一覧の取得
   *
   * @param pageNo ページ数。指定なしは1ページ目
   * @param year 年。指定なしは直近1年
   * @param kind 検索対象。指定なしはすべて。1:トクトク交換、2:下取り、3:直送買取
   * @param maxOdrCount 取得件数。指定なしは10（MAX 100）
   */
  async fetchPurchaseList(pageNo?: number, year?: number, kind?: number, maxOdrCount?: number): Promise<PurchaseList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'purchase_list';
    const response = await ApiService.get(url, {
      params: {
        pageNo,
        maxOdrCount,
        year,
        kind
      }
    });

    return response;
  },

  /**
   * 購入履歴詳細の取得
   *
   * @param odrId 注文番号
   */
  async fetchOrderDetail(odrId: string): Promise<OrderBuyDetail> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'order';
    const response = await ApiService.get(url, {
      params: {
        odrId
      }
    });

    // 画像パス生成
    if (response.detailInfo && response.detailInfo.length) {
      response.detailInfo.map((product: OrderBuyProductDetail) => {
        product.imagePath = generateImagePath(product.imagePath);
      });
    }

    return response;
  },

  /**
   * 買取申込み詳細の取得
   *
   * @param odrId 注文番号
   */
  async fetchSellOrderDetail(estimateEntryId: string): Promise<OrderSellDetail> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'direct_purchase';
    const response = await ApiService.get(url, {
      params: {
        estimateEntryId
      }
    });

    // 画像パス生成
    if (response.detailInfo && response.detailInfo.length) {
      response.detailInfo.map((product: OrderSellProductDetail) => {
        product.imagePath = generateImagePath(product.imagePath);
      });
    }

    return response;
  },

  /**
   * 下取申込み詳細の取得
   *
   * @param odrId 注文番号
   */
  async fetchTradeOrderDetail(odrId: string): Promise<OrderTradeDetail> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'assess';
    const response = await ApiService.get(url, {
      params: {
        odrId
      }
    });

    // 画像パス生成
    if (response.detailInfo && response.detailInfo.length) {
      response.detailInfo.map((product: OrderTradeProductDetail) => {
        product.imagePath = generateImagePath(product.imagePath);
      });
    }

    return response;
  },

  /**
   * トクトク交換詳細の取得
   *
   * @param odrId 注文番号
   */
  async fetchTokutokuOrderDetail(odrId: string): Promise<OrderTokutokuDetail> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'tokutoku';
    const response = await ApiService.get(url, {
      params: {
        odrId
      }
    });

    // 画像パス生成
    if (response.detailInfo && response.detailInfo.length) {
      response.detailInfo.map((product: OrderTokutokuProductDetail) => {
        product.imagePath = generateImagePath(product.imagePath);
      });
    }

    return response;
  },

  /**
   * 梱包キットを申し込み紐付け (削除のみ)
   */
  async offerPackagingKit(): Promise<any> {
    const deleteUrl = '/sell/item-delete.do?ln=all';
    try {
      await ApiService.get(deleteUrl);
    } catch (error) {
      // APIからの応答でCORSエラーが起きても無視する
      console.error(error);
    }
  },

  /**
   * お気に入り商品の取得
   * @param page ページ数
   * @param maxItemCount 取得件数
   */
  async fetchFavoriteList(page?: number, maxItemCount?: number): Promise<FavoriteList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'favorite';
    const response = await ApiService.get(url, {
      params: {
        page,
        maxItemCount
      }
    });

    return response;
  },

  /**
   * 持っている商品の取得
   * @param page ページ数
   * @param maxItemCount 取得件数
   */
  async fetchOwnedList(page?: number, maxItemCount?: number, isCart = false): Promise<OwnedList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'have';
    const response = await ApiService.get(url, {
      params: {
        page,
        maxItemCount,
        isCart
      }
    });

    return response;
  },

  /**
   * クーポン一覧の取得
   */
  async fetchCouponList(): Promise<CouponList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'coupon';
    const response = await ApiService.get(url);

    return response;
  },

  /**
   * マイページ向けレビュー一覧の取得
   * @param pageNo ページ数
   * @param sort ソート １：投稿の早い順, ２：遅い順
   */
  async fetchReviewList(pageNo?: number, sort = 2): Promise<ReviewList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'review';
    const response = await ApiService.get(url, {
      params: {
        pageNo,
        isMyPage: true,
        sort
      }
    });

    return response;
  },

  /**
   * レビューが参考になったことを登録する
   *
   * @param reviewId レビューID
   * @returns 200 OK以外の時のみメッセージ
   */
  async postHelpful(reviewId: number): Promise<{ message: string }> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'helpful';
    const response = await ApiService.post(url, { reviewId });

    return response;
  },

  /**
   * お届け先リストの取得
   */
  async fetchAddress(): Promise<DeliveryAddressList> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'address';
    const response = await ApiService.get(url);

    return response;
  },

  /**
   * お届け先の編集
   * @param address お届け先
   */
  async registerAddress(address: RegisterDeliveryAddress): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'address';
    const body = {
      mode: '1',
      ...address
    };
    const response = await ApiService.post(url, body, {}, true, { apiName: 'address' });

    return response;
  },

  /**
   * お届け先の変更
   * @param delivAddressId お届け先ID
   * @param address お届け先
   */
  async updateAddress(delivAddressId: string, address: RegisterDeliveryAddress): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'address';
    const body = {
      mode: '2',
      delivAddressId,
      ...address
    };
    const response = await ApiService.post(url, body, {}, true, { apiName: 'address' });

    return response;
  },

  /**
   * お届け先の削除
   * @param delivAddressId お届け先ID
   */
  async deleteAddress(delivAddressId: string): Promise<any> {
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'address';
    const body = {
      mode: '3',
      delivAddressId
    };
    const response = await ApiService.post(url, body, {}, true, { apiName: 'address' });

    return response;
  },

  /**
   * 住所の検索
   * @param zipCode 郵便番号
   * @returns 住所
   */
  async searchAddress(zipCode: string): Promise<SearchedAddressResult> {
    const url = process.env.VUE_APP_API_OTHER_URL + 'zipSearch';
    const config = {
      params: { zip: zipCode }
    };
    const response = await ApiService.get(url, config, false, { apiName: 'zipSearch' });

    return response;
  },

  /**
   * 状況コードをステップ表示用に変換
   * @param stepList 状況リスト
   * @param code 現在の状況値
   * @returns ステップ用の値
   */
  convertStepStatus(stepList: Array<{ no: number; codeList: Array<string>; text: string }>, currentCode: string): { no: number; text: string } {
    const target = stepList.find((step) => step.codeList.some((code) => code === currentCode));
    return target ? { no: target.no, text: target.text } : { no: 99, text: '' };
  }
};

export default UserService;
