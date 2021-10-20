<template>
  <div
    class="order-info d-flex mb-3"
    :class="{
      'pa-4': $vuetify.breakpoint.mdAndUp,
      'pa-2': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- 購入履歴詳細 -->
    <template v-if="type === ORDER_DETAIL_TYPES.BUY_DELIVERY || type === ORDER_DETAIL_TYPES.BUY_SHOP">
      <div class="order-info-1">
        <div class="order-info-text">注文日：{{ info.odrDttm | date('YYYY/MM/DD') }}</div>
        <div class="order-info-text">注文番号：{{ info.odrId }}</div>
        <div class="order-info-text">注文合計：{{ info.totalPaymentIncTax | price() }}円</div>
      </div>
      <div
        class="order-info-2"
        :class="{
          'pt-8': $vuetify.breakpoint.mdAndUp
        }"
        v-if="type === ORDER_DETAIL_TYPES.BUY_DELIVERY"
      >
        <div
          class="order-info-text"
          v-if="
            (info.rcvMethodId === 2 || info.rcvMethodId === 3) &&
            info.delivTrackingId &&
            (info.delivTrackingId.length === 11 || info.delivTrackingId.length === 12)
          "
        >
          配送伝票番号：<a
            class="order-info-text-link"
            :href="`http://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id=${info.delivTrackingId}`"
            target="_blank"
            >{{ info.delivTrackingId }}</a
          >
        </div>
        <div class="order-info-text" v-else>配送伝票番号：{{ info.delivTrackingId }}</div>
        <div class="order-info-text">発送日：{{ info.shippedDt }}</div>
      </div>
    </template>
    <!-- 買取申込み詳細 -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.SELL">
      <div class="order-info-1">
        <div class="order-info-text">お申込み日：{{ info.entiryDttm | date('YYYY/MM/DD') }}</div>
        <div class="order-info-text">お申込みID：{{ info.estimateEntryId }}</div>
        <div class="order-info-text">
          買取合計：
          <span v-if="(info.estimateStatus !== 90 && info.estimateStatus !== 900) || info.totalPraice === 0">-</span>
          <span v-else-if="info.totalPraice < 0">（未査定）</span>
          <span v-else>{{ info.totalPraice | price() }}円</span>
        </div>
      </div>
      <div
        class="order-info-2"
        :class="{
          'pt-8': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="order-info-text" v-if="info.transferAccountUrl">
          査定結果の確認：<a class="order-info-link" :href="info.transferAccountUrl">確認ページ</a>
        </div>
      </div>
    </template>
    <!-- 下取申込み詳細 -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.TRADE">
      <div class="order-info-1">
        <div class="order-info-text">お申込み日：{{ info.odrYmd | date('YYYY/MM/DD') }}</div>
        <div class="order-info-text">お申込みID：{{ info.odrId }}</div>
      </div>
    </template>
    <!-- 下取申込み詳細（トクトク交換） -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT || type === ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT">
      <div class="order-info-1">
        <div class="order-info-text">お申込み日：{{ info.odrYmd | date('YYYY/MM/DD') }}</div>
        <div class="order-info-text">お申込みID：{{ info.odrId }}</div>
        <!-- TODO:将来的に必要になれば -->
        <!-- <div class="order-info-text">下取合計：{{ info.totalPraice | price() }}円</div> -->
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';

export default Vue.extend({
  name: 'order-info',
  props: {
    type: {
      type: Number,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state),
      ORDER_DETAIL_TYPES
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  注文情報
------------------------------- */
.order-info {
  background: $bg-grey;

  &-1,
  &-2 {
    flex: 1 1 50%;
  }

  &-text {
    line-height: 2;

    &-link {
      color: $text-blue;
    }
  }

  &-link {
    color: $text-blue;
  }
}
/** -------------------------------
  注文情報 960px以下
------------------------------- */
.container-narrow {
  .order-info {
    flex-direction: column;

    &-text {
      font-size: 12px;
      line-height: 1.5;
    }
  }
}
</style>
