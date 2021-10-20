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
            odrYmd: orderDetail.odrYmd,
            odrId: orderDetail.formatedOdrNum,
            totalPraice: 0
          }"
        />

        <div
          :class="{
            'mx-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <!-- 注文状況 -->
          <!-- ステータスに0が含まれる可能があるため、nullとundefined以外は表示とする -->
          <order-step kindName="下取" :type="type" :val="orderDetail.headerStatus" v-if="orderDetail.headerStatus != null" />

          <!-- 梱包キット申し込み -->
          <v-btn class="apply-kit-btn my-8" dark depressed tile v-if="orderDetail.headerStatus === 0" @click="offerPackagingKit()">
            {{ orderDetail.isNeedPackKit ? '梱包キットを申し込む' : 'トクトク交換を申し込む' }}
            <v-icon class="apply-kit-btn-icon" small>fas fa-chevron-right</v-icon>
          </v-btn>

          <!-- 注文商品 -->
          <div class="order-product-list mb-8">
            <order-product :type="type" v-for="(product, index) in orderDetail.detailInfo" :key="index" :product="product" />
          </div>

          <!-- 合計金額 -->
          <!-- TODO:将来的にレスポンスの項目が追加されたら修正 -->
          <order-total-info
            :type="type"
            :total-info="{
              count: orderDetail.detailInfo.length,
              totalPraice: 0,
              gainedPoint: 0
            }"
            v-if="false"
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
import OrderStep from '@/components/my-page/order-detail/order-step.vue';
import OrderProduct from '@/components/my-page/order-detail/order-product.vue';
import OrderTotalInfo from '@/components/my-page/order-detail/order-total-info.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';
import UserService from '@/logic/user.service';
import { OrderTokutokuDetail } from '@/types/order-tokutoku-detail';
import GaService from '@/logic/ga.service';

export default Vue.extend({
  name: 'order-tokutoku-detail',
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
      title: '下取申込詳細',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '買取・下取履歴', linkUrl: '/ec/mypage/odr/list?type=sell' },
        { path: 'トクトク交換詳細', linkUrl: '' }
      ],
      type: ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT,
      // トクトク交換番号
      orderId: '',
      // トクトク交換詳細
      orderDetail: {} as OrderTokutokuDetail,
      // 梱包キット申込みURL
      packingKitLink: process.env.VUE_APP_NET_CHUKO_URL + 'sell/direct/index.do',
      // ロード状態
      loaded: {
        detail: false
      }
    });

    /**
     * GAクロスドメイン用にリンカーパラメータを設定する
     */
    const setLinkerParam = async () => {
      state.packingKitLink = await GaService.addLinkerParam(state.packingKitLink);
    };

    /**
     * 下取申込み詳細を取得
     * @param id 注文ID
     */
    const fetchOrderDetail = async (id: string) => {
      state.loaded.detail = false;
      try {
        const result = await UserService.fetchTokutokuOrderDetail(id);
        state.orderDetail = result;

        // 梱包キット申込希望あり/なしでタイプを切り替える
        state.type = state.orderDetail.isNeedPackKit ? ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT : ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT;
      } catch (error) {
        console.error(error);
        state.orderDetail = {} as OrderTokutokuDetail;
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

        // リンカーパラメータを設定する
        setLinkerParam();
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    // ログインがされたらAPIで取得する
    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchOrderDetail(state.orderId);
      }
    );

    /**
     * 梱包キットを申し込む押下処理
     */
    const offerPackagingKit = async () => {
      // TODO JSESSIONIDが切り替わってしまう問題が解決されるまでコメントアウトする
      // await UserService.offerPackagingKit();
      const boxFlgParam = state.orderDetail.isNeedPackKit === false ? '&boxFlg=1' : '';
      window.location.href = process.env.VUE_APP_NET_CHUKO_URL + `sell/direct/init.do?nsOrderNo=${state.orderDetail.formatedOdrNum}&serviceId=40${boxFlgParam}`;
    };

    return {
      ...toRefs(state),
      offerPackagingKit
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込み詳細（トクトク交換） 960px以上
------------------------------- */
// 梱包キット申し込み
.apply-kit-btn {
  position: relative;
  display: flex;
  width: 500px;
  height: 50px !important;
  margin: 0 auto;
  background-color: $bg-light-green !important;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;

    ::v-deep .v-btn__content {
      color: $text-white;
    }
  }

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
  }
}

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
  下取申込み詳細（トクトク交換） 960px以下
------------------------------- */
.container-narrow {
  // 梱包キット申し込み
  .apply-kit-btn {
    width: calc(100% - 24px);
  }

  // 購入履歴詳細へ戻る
  .order-list {
    &-link {
      font-size: 14px;
    }
  }
}
</style>
