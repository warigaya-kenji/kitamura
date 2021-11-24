<template>
  <div
    id="my-page-order-buy-detail"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <template v-if="loaded.detail">
        <!-- 明細書 -->
        <div class="statement mb-3 text-right" v-if="orderDetail.webReceiptURL">
          <a class="statement-link" :href="orderDetail.webReceiptURL">
            <v-icon class="statement-link-icon mr-2" small>far fa-print</v-icon>
            領収書兼お買い上げ明細書
          </a>
          <a class="statement-help ml-2" href="/sitemap/riyou_ryoushuusho_index.html">
            <v-icon>far fa-question-circle</v-icon>
          </a>
        </div>

        <!-- 注文情報 -->
        <order-info
          :type="type"
          :info="{
            odrDttm: orderDetail.odrDttm,
            odrId: orderDetail.formatedOdrNum,
            totalPaymentIncTax: orderDetail.totalPaymentIncTax,
            delivTrackingId: orderDetail.delivTrackingId,
            rcvMethodId: orderDetail.rcvMethodId,
            shippedDt: orderDetail.shippedDt
          }"
        />

        <div
          :class="{
            'px-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <!-- 注文状況 -->
          <order-step :type="type" :val="orderDetail.deliveryOdrStatusId" v-if="orderDetail.deliveryOdrStatusId" />

          <!-- 注文商品 -->
          <div class="order-product-list">
            <order-product
              :type="type"
              v-for="product in orderDetail.detailInfo"
              :key="product.janCode"
              :product="product"
              :status="orderDetail.deliveryOdrStatusId"
            />
          </div>

          <!-- 合計金額 -->
          <order-total-info
            :type="type"
            :total-info="{
              count: pruductCount,
              productTotalPrice: orderDetail.productTotalPrice,
              usedPoint: orderDetail.usedPoint,
              shippingCharge: orderDetail.shippingCharge,
              tokutokuPrice: orderDetail.tokutokuPrice,
              odrId: orderDetail.odrId,
              totalPaymentIncTax: orderDetail.totalPaymentIncTax,
              taxAmount: orderDetail.taxAmount,
              gainedPoint: orderDetail.gainedPoint,
              recievePrice: orderDetail.recievePrice
            }"
          />

          <!-- 注文者情報（お届け先など） -->
          <div class="order-customer">
            <!-- 宅配・メーカー直送 -->
            <template v-if="type === ORDER_DETAIL_TYPES.BUY_DELIVERY">
              <div class="order-customer-info" v-if="orderDetail.deliveryInfo && orderDetail.deliveryInfo.length">
                <div class="order-customer-info-title">お届け指定</div>
                <div>
                  <div class="order-customer-info-item"><span class="order-customer-info-item-label">受取方法</span>宅配</div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">お届け希望日</span
                    >{{ orderDetail.deliveryInfo[0].preferedDelivDt ? dayjs(orderDetail.deliveryInfo[0].preferedDelivDt).format('YYYY/MM/DD') : '指定なし' }}
                  </div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">お届け希望時間帯</span
                    >{{ convertDeliveryTimeZoneForText(orderDetail.deliveryInfo[0].deliveryTimeZone) }}
                  </div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">宅配BOX</span>{{ convertDeliveryBoxIdForText(orderDetail.deliveryInfo[0].delivBoxUseId) }}
                  </div>
                </div>
              </div>
              <div class="order-customer-info" v-if="orderDetail.deliveryInfo && orderDetail.deliveryInfo.length">
                <div class="order-customer-info-title">お届け先</div>
                <div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">氏名</span>
                    {{ `${orderDetail.deliveryInfo[0].delivLastName}&nbsp;${orderDetail.deliveryInfo[0].delivFirstName}` }}&emsp; （{{
                      `${orderDetail.deliveryInfo[0].delivLastNameKana}&nbsp;${orderDetail.deliveryInfo[0].delivFirstNameKana}`
                    }}）
                  </div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">住所</span>&#12306;{{ orderDetail.deliveryInfo[0].delivZipCode }}<br />{{
                      orderDetail.deliveryInfo[0].delivAddress1 + orderDetail.deliveryInfo[0].delivAddress2
                    }}<br />{{ orderDetail.deliveryInfo[0].delivAddress3 }}
                  </div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">連絡先電話番号</span>{{ orderDetail.deliveryInfo[0].delivPhone }}
                  </div>
                </div>
              </div>
              <div class="order-customer-info">
                <div class="order-customer-info-title">お支払い情報</div>
                <div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">お支払い方法</span
                    >{{ !orderDetail.paymentStatusName && orderDetail.paymentStatusId === +PAYMENT_TYPE.TOKUTOKU ? '信販' : orderDetail.paymentStatusName }}
                  </div>
                </div>
              </div>
            </template>
            <!-- 店舗受け取り -->
            <template v-else-if="type === ORDER_DETAIL_TYPES.BUY_SHOP">
              <div class="order-customer-info" v-if="orderDetail.rcvShopInfo && orderDetail.rcvShopInfo.length">
                <div class="order-customer-info-title">お届け指定</div>
                <div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">受取方法</span>店舗受取<br />
                    ({{ orderDetail.rcvShopInfo[0].shopName }})<br />
                    TEL:{{ orderDetail.rcvShopInfo[0].shopTel }}
                  </div>
                </div>
              </div>
              <div class="order-customer-info">
                <div class="order-customer-info-title">お支払い情報</div>
                <div>
                  <div class="order-customer-info-item">
                    <span class="order-customer-info-item-label">お支払い方法</span>{{ orderDetail.paymentStatusName }}
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
      <div class="loading-detail" v-else-if="!loaded.detail">
        <section-loading />
      </div>
    </my-page-layout>

    <!-- 関連商品 -->
    <div
      id="related-products-area"
      class="ec-back-color"
      :class="{
        'related-area-wide': $vuetify.breakpoint.mdAndUp,
        'related-area-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="relatedItems && relatedItems.length"
    >
      <div
        :class="{
          'slider-area-wide': $vuetify.breakpoint.mdAndUp,
          'slider-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <span
          :class="{
            'large-text-wide': $vuetify.breakpoint.mdAndUp,
            'large-text-narrow': $vuetify.breakpoint.smAndDown
          }"
          >関連商品</span
        >
        <product-slider v-if="relatedItems" :isUsed="false" :items="relatedItems" :isRelatedProducts="true" cartButtonText="カートに入れる" />
        <div class="loading-relative-list" v-if="!loaded.relatedItems">
          <section-loading />
        </div>
      </div>
    </div>

    <back-button to="/ec/mypage/odr/list" v-if="$vuetify.breakpoint.smAndDown"> ご利用履歴に戻る </back-button>
    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import dayjs from 'dayjs';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';
import OrderInfo from '@/components/my-page/order-detail/order-info.vue';
import OrderStep from '@/components/my-page/order-detail/order-step.vue';
import OrderProduct from '@/components/my-page/order-detail/order-product.vue';
import OrderTotalInfo from '@/components/my-page/order-detail/order-total-info.vue';
import ProductSlider from '@/components/product-detail/product-slider.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { ORDER_DETAIL_TYPES } from '@/constants/mypage-order-detail-types';
import { DELIVERY_TIME_ZONE, DELIVERY_BOX_TYPES } from '@/constants/mypage-order-detail-code';
import { PAYMENT_TYPE } from '@/constants/order-register-type';
import { sortByRowNo } from '@/logic/utils';
import UserService from '@/logic/user.service';
import ProductService from '@/logic/product.service';
import { OrderBuyDetail, OrderBuyProductDetail } from '@/types/order-buy-detail';
import { RelatedProduct } from '@/types/product';

export default Vue.extend({
  name: 'order-buy-detail',
  components: {
    'my-page-layout': MyPageLayout,
    'back-button': BackButton,
    'order-info': OrderInfo,
    'order-step': OrderStep,
    'order-product': OrderProduct,
    'order-total-info': OrderTotalInfo,
    'product-slider': ProductSlider,
    'section-loading': SectionLoading
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: '購入履歴詳細',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '注文履歴', linkUrl: '/ec/mypage/odr/list' },
        { path: '注文詳細', linkUrl: '' }
      ],
      // 表示タイプ
      type: ORDER_DETAIL_TYPES.BUY_DELIVERY,
      // 購入履歴番号
      orderId: '',
      // 購入履歴詳細
      orderDetail: {} as OrderBuyDetail,
      // 関連商品
      orderProductIds: [] as Array<string>,
      relatedItems: [] as Array<RelatedProduct>,
      // ロード状態
      loaded: {
        detail: false,
        relatedItems: false
      }
    });

    /**
     * 関連商品を取得
     */
    const fetchRelatedProduct = async () => {
      state.relatedItems = [];
      state.loaded.relatedItems = false;
      try {
        for (let index = 0; index < state.orderProductIds.length; index++) {
          const result = await ProductService.fetchProducts([state.orderProductIds[index]], false);
          state.relatedItems = state.relatedItems.concat(result.items[0].relatedItems);
        }
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.relatedItems = true;
      }
    };

    /**
     * 購入履歴詳細を取得
     * @param id 注文ID
     */
    const fetchOrderDetail = async (id: string) => {
      state.loaded.detail = false;
      try {
        const result = await UserService.fetchOrderDetail(id);
        state.orderDetail = result;

        // 「rowNo」を昇順にソートする
        // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
        state.orderDetail.detailInfo = sortByRowNo<OrderBuyProductDetail>(state.orderDetail.detailInfo);

        // 詳細表示タイプの設定
        if (state.orderDetail.rcvMethodId === 0) {
          state.type = ORDER_DETAIL_TYPES.BUY_SHOP;
        } else {
          state.type = ORDER_DETAIL_TYPES.BUY_DELIVERY;
        }

        // 関連商品の取得
        if (state.orderDetail.detailInfo && state.orderDetail.detailInfo.length) {
          state.orderDetail.detailInfo.map((product: OrderBuyProductDetail) => {
            if (product.isChuko !== 2) {
              // 新品
              state.orderProductIds.push(product.janCode);
            } else {
              // 中古
              ProductService.fetchUsedProducts(product.janCode).then((result) => {
                state.orderProductIds.push(result.janCode);
                // 画像パスの置き換え
                product.imagePath = result.imageUrl1;
              });
            }
          });
          await fetchRelatedProduct();
        }
      } catch (error) {
        console.error(error);
        state.orderDetail = {} as OrderBuyDetail;
      } finally {
        state.loaded.detail = true;
      }
    };

    onMounted(() => {
      const params = context.root.$route.params;
      // orderIdが無い場合は、NotFoundPageに遷移させる
      if (params.orderId) {
        state.orderId = `${params.orderId}`;
        if (authorizer.isLoggedIn) fetchOrderDetail(state.orderId);
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchOrderDetail(state.orderId);
      }
    );

    const pruductCount = computed(() => {
      let count = 0;
      let allUndefined = true;
      if (state.orderDetail.detailInfo && state.orderDetail.detailInfo.length) {
        state.orderDetail.detailInfo.forEach((product) => {
          if (product.count !== undefined && product.count !== null) {
            count += product.count;
            allUndefined = false;
          }
        });
      }
      return allUndefined ? undefined : count;
    });

    /**
     * 宅配ボックス利用コードをテキストに変換
     * @param id コード
     */
    const convertDeliveryBoxIdForText = (id: number) => {
      const target = DELIVERY_BOX_TYPES.find((type) => type.code === id);
      return target ? target.text : '';
    };

    /**
     * お届け希望時間帯コードをテキストに変換
     * @param id コード
     */
    const convertDeliveryTimeZoneForText = (id: string) => {
      const target = DELIVERY_TIME_ZONE.find((type) => type.code === id);
      return target ? target.text : '指定なし';
    };

    return {
      PAYMENT_TYPE,
      ...toRefs(state),
      dayjs,
      ORDER_DETAIL_TYPES,
      pruductCount,
      convertDeliveryBoxIdForText,
      convertDeliveryTimeZoneForText
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  購入履歴詳細 960px以上
------------------------------- */
// 明細書
.statement {
  &-link {
    color: $text-blue;

    &-icon {
      color: $text-black;
    }
  }
}

// 注文者情報（お届け先など）
$order-customer-border: solid 1px $ec-grey;
.order-customer {
  font-size: 12px;
  border: $order-customer-border;
  border-top: none;

  &-info {
    &-title {
      padding: 8px;
      background: $bg-grey;
      border-top: $order-customer-border;
      border-bottom: $order-customer-border;
      font-weight: bold;
    }

    &-item {
      display: flex;
      padding: 8px;
      &:not(:last-child) {
        border-bottom: $order-customer-border;
      }

      &-label {
        width: 40%;
        margin-right: 8px;
      }
    }
  }
}

// 関連商品
.related-area-wide {
  max-width: 100%;
  padding: 20px 50px;
}

.slider-area-wide {
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: $bg-white;
}

.large-text-wide {
  font-size: 28px;
  font-weight: bold;
  color: $text-black;
}

/** -------------------------------
  購入履歴詳細 960px以下
------------------------------- */
.container-narrow {
  // 明細書
  .statement {
    &-link {
      font-size: 14px;
    }
  }
}

// 関連商品
.related-area-narrow {
  width: 100%;
  padding: 16px 0 0;
}

.slider-area-narrow {
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  padding: 10px;
  background-color: $bg-white;
}

.large-text-narrow {
  font-size: 18px;
  color: $text-black;
}
</style>
