<template>
  <div
    id="my-page-order-sell-detail"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <template v-if="loaded.detail">
        <!-- 申し込み情報 -->
        <order-info
          :type="type"
          :info="{
            entiryDttm: orderDetail.entiryDttm,
            estimateEntryId: orderDetail.formatedOdrNum || '発行準備中',
            totalPraice: orderDetail.totalPraice,
            transferAccountUrl: orderDetail.transferAccountUrl,
            estimateStatus: orderDetail.estimateStatus
          }"
        />

        <div
          :class="{
            'mx-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <!-- 注文状況 -->
          <order-step :type="type" :val="orderDetail.estimateStatus" v-if="orderDetail.estimateStatus" />

          <!-- 注文商品 -->
          <div class="order-product-list">
            <order-product
              :type="type"
              v-for="product in orderDetail.detailInfo"
              :key="product.janCode"
              :product="product"
              :status="orderDetail.estimateStatus"
            />
          </div>

          <!-- 合計金額 -->
          <order-total-info
            :type="type"
            :total-info="{
              count: pruductCount,
              totalPraice: orderDetail.totalPraice,
              gainedPoint: orderDetail.gainedPoint,
              status: orderDetail.estimateStatus
            }"
          />
        </div>
      </template>
      <div class="loading-detail" v-else-if="!loaded.detail">
        <section-loading />
      </div>
    </my-page-layout>

    <back-button to="/ec/mypage/odr/list?type=sell" v-if="$vuetify.breakpoint.smAndDown"> 買取・下取履歴へ戻る </back-button>
    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';
import OrderInfo from '@/components/my-page/order-detail/order-info.vue';
import OrderStep from '@/components/my-page/order-detail/order-step.vue';
import OrderProduct from '@/components/my-page/order-detail/order-product.vue';
import OrderTotalInfo from '@/components/my-page/order-detail/order-total-info.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { ORDER_DETAIL_TYPES } from '@/constants/mypage-order-detail-types';
import { sortByRowNo } from '@/logic/utils';
import UserService from '@/logic/user.service';
import { OrderSellDetail, OrderSellProductDetail } from '@/types/order-sell-detail';

export default Vue.extend({
  name: 'order-sell-detail',
  components: {
    'my-page-layout': MyPageLayout,
    'back-button': BackButton,
    'order-info': OrderInfo,
    'order-step': OrderStep,
    'order-product': OrderProduct,
    'order-total-info': OrderTotalInfo,
    'section-loading': SectionLoading
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: '買取申込み詳細',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '買取・下取履歴', linkUrl: '/ec/mypage/odr/list?type=sell' },
        { path: '直送買取詳細', linkUrl: '' }
      ],
      type: ORDER_DETAIL_TYPES.SELL,
      // 買取申込み番号
      orderId: '',
      // 買取申込み詳細
      orderDetail: {} as OrderSellDetail,
      // ロード状態
      loaded: {
        detail: false
      }
    });

    /**
     * 買取申込み詳細を取得
     * @param id 注文ID
     */
    const fetchOrderDetail = async (id: string) => {
      state.loaded.detail = false;
      try {
        const result = await UserService.fetchSellOrderDetail(id);
        state.orderDetail = result;

        // 「rowNo」を昇順にソートする
        // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
        state.orderDetail.detailInfo = sortByRowNo<OrderSellProductDetail>(state.orderDetail.detailInfo);
      } catch (error) {
        console.error(error);
        state.orderDetail = {} as OrderSellDetail;
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

    return {
      ...toRefs(state),
      pruductCount
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  買取申込み詳細 960px以上
------------------------------- */

/** -------------------------------
  買取申込み詳細 960px以下
------------------------------- */
</style>
