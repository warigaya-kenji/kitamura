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
            odrId: orderDetail.formatedOdrNum,
            odrYmd: orderDetail.odrYmd
          }"
        />

        <div
          :class="{
            'mx-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <!-- 注文商品 -->
          <div class="order-product-list">
            <order-product :type="type" v-for="product in orderDetail.detailInfo" :key="product.janCode" :product="product" />
          </div>

          <!-- 合計金額 -->
          <order-total-info
            :type="type"
            :total-info="{
              count: orderDetail.detailInfo.length
            }"
          />

          <!-- ご利用履歴へ戻る -->
          <div class="mb-3" v-if="$vuetify.breakpoint.mdAndUp">
            <router-link class="order-list-link" to="/ec/mypage/odr/list?type=sell">
              <v-icon class="order-list-link-icon mr-2" small>far fa-chevron-left</v-icon>
              ご利用履歴へ戻る
            </router-link>
          </div>
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
import { reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';
import OrderInfo from '@/components/my-page/order-detail/order-info.vue';
import OrderProduct from '@/components/my-page/order-detail/order-product.vue';
import OrderTotalInfo from '@/components/my-page/order-detail/order-total-info.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';
import UserService from '@/logic/user.service';
import { OrderTradeDetail } from '@/types/order-trade-detail';

export default Vue.extend({
  name: 'order-trade-detail',
  components: {
    'my-page-layout': MyPageLayout,
    'back-button': BackButton,
    'order-info': OrderInfo,
    'order-product': OrderProduct,
    'order-total-info': OrderTotalInfo,
    'section-loading': SectionLoading
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: '下取申込詳細',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '買取・下取履歴', linkUrl: '/ec/mypage/odr/list?type=sell' },
        { path: '下取り詳細', linkUrl: '' }
      ],
      type: ORDER_DETAIL_TYPES.TRADE,
      // 下取申込み番号
      orderId: '',
      // 下取申込み詳細
      orderDetail: {} as OrderTradeDetail,
      // ロード状態
      loaded: {
        detail: false
      }
    });

    /**
     * 下取申込み詳細を取得
     * @param id 注文ID
     */
    const fetchOrderDetail = async (id: string) => {
      state.loaded.detail = false;
      try {
        const result = await UserService.fetchTradeOrderDetail(id);
        state.orderDetail = result;
      } catch (error) {
        console.error(error);
        state.orderDetail = {} as OrderTradeDetail;
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

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込詳細 960px以上
------------------------------- */
// 購入履歴詳細へ戻る
.order-list {
  &-link {
    color: $text-blue;

    &-icon {
      color: $text-black;
    }
  }
}

/** -------------------------------
  下取申込詳細 960px以下
------------------------------- */
.container-narrow {
  // 購入履歴詳細へ戻る
  .order-list {
    &-link {
      font-size: 14px;
    }
  }
}
</style>
