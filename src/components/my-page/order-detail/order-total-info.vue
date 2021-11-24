<template>
  <v-card class="total-info mb-8" outlined tile>
    <!-- 購入履歴詳細 -->
    <template v-if="type === ORDER_DETAIL_TYPES.BUY_DELIVERY || type === ORDER_DETAIL_TYPES.BUY_SHOP">
      <div class="total-info-item">
        <span class="total-info-item-label"
          >商品合計<span v-if="totalInfo.count !== undefined && totalInfo.count <= 0">：-</span
          ><span v-else-if="totalInfo.count !== undefined">：{{ totalInfo.count }}点</span></span
        ><span class="total-info-item-val">{{ totalInfo.productTotalPrice | price() }}円</span>
      </div>
      <div class="total-info-item" v-if="totalInfo.usedPoint">
        <span class="total-info-item-label">利用Tポイント</span><span class="total-info-item-val">{{ totalInfo.usedPoint | price() }}pt</span>
      </div>
      <div class="total-info-item" v-if="totalInfo.shippingCharge">
        <span class="total-info-item-label">送料</span><span class="total-info-item-val">{{ totalInfo.shippingCharge | price() }}円</span>
      </div>
      <div class="total-info-item" v-if="totalInfo.tokutokuPrice || false">
        <span class="total-info-item-label">
          トクトク交換査定金額<router-link class="total-info-item-link ml-4" :to="`/ec/mypage/odr/tokutoku/${totalInfo.odrId}`">詳細を見る</router-link>
        </span>
        <span class="total-info-item-val">{{ totalInfo.tokutokuPrice | price(true) }}円</span>
      </div>
      <!-- トクトク交換で支払いより買取が多く、APIにお支払い合計のキーがない場合、受け取り合計を表示する -->
      <div class="total-info-item" v-if="totalInfo.totalPaymentIncTax == null && totalInfo.recievePrice != null">
        <span class="total-info-item-label">お受取合計</span>
        <span class="total-info-item-val primary--text">{{ totalInfo.recievePrice | price() }}円</span>
      </div>
      <!-- それ以外、支払い合計を表示する -->
      <div class="total-info-item" v-else>
        <span class="total-info-item-label two-line">合計</span>
        <span class="total-info-item-val primary--text">{{ totalInfo.totalPaymentIncTax | price() }}円</span>
        <span class="total-info-item-label">（内消費税）</span>
        <span class="total-info-item-val primary--text">（{{ totalInfo.taxAmount | price() }}円）</span>
      </div>
      <div class="total-info-item" v-if="totalInfo.gainedPoint">
        <span class="total-info-item-label">付与されるTポイント数</span><span class="total-info-item-val">{{ totalInfo.gainedPoint | price() }}pt</span>
      </div>
    </template>
    <!-- 買取申込み詳細 -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.SELL">
      <div class="total-info-item" v-if="totalInfo.totalPraice">
        <span class="total-info-item-label"
          >商品合計<span v-if="totalInfo.count !== undefined && totalInfo.count <= 0">：-</span
          ><span v-else-if="totalInfo.count !== undefined">：{{ totalInfo.count }}点</span></span
        ><span class="total-info-item-val primary--text"
          ><span v-if="(totalInfo.status !== 90 && totalInfo.status !== 900) || totalInfo.totalPraice === 0">-</span
          ><span v-else>{{ totalInfo.totalPraice | price() }}円</span></span
        >
      </div>
      <div class="total-info-item" v-if="totalInfo.gainedPoint">
        <span class="total-info-item-label">付与されるTポイント数</span><span class="total-info-item-val">{{ totalInfo.gainedPoint | price() }}pt</span>
      </div>
    </template>
    <!-- 下取申込み詳細 -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.TRADE">
      <div class="total-info-item" v-if="totalInfo.count !== undefined && totalInfo.count !== null">
        <span class="total-info-item-label">数量</span><span class="total-info-item-val" v-if="totalInfo.count <= 0">-</span
        ><span class="total-info-item-val" v-else>{{ totalInfo.count }}点</span>
      </div>
      <div class="total-info-item" v-if="false">
        <span class="total-info-item-label">下取合計：</span><span class="total-info-item-val">{{ '１' | price() }}円</span>
      </div>
    </template>
    <!-- 下取申込み詳細（トクトク交換） -->
    <template v-else-if="type === ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT || type === ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT">
      <div class="total-info-item" v-if="totalInfo.totalPraice">
        <span class="total-info-item-label"
          >下取合計<span v-if="totalInfo.count !== undefined && totalInfo.count <= 0">：-</span
          ><span v-else-if="totalInfo.count !== undefined">：{{ totalInfo.count }}点</span></span
        ><span class="total-info-item-val primary--text">{{ totalInfo.totalPraice | price() }}円</span>
      </div>
      <div class="total-info-item" v-if="totalInfo.gainedPoint">
        <span class="total-info-item-label">付与されるTポイント数</span><span class="total-info-item-val">{{ totalInfo.gainedPoint | price() }}pt</span>
      </div>
    </template>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';

export default Vue.extend({
  name: 'order-total-info',
  props: {
    type: {
      type: Number,
      required: true
    },
    totalInfo: {
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
  合計金額など
------------------------------- */
.total-info {
  border-color: $ec-grey;

  &-item {
    font-size: 0;

    &:not(:last-child) {
      border-bottom: dashed 1px $ec-grey;
    }

    &-label,
    &-val {
      display: inline-block;
      padding: 8px 20px;
      font-size: 14px;
      color: $text-black;
      text-align: right;
    }

    &-label {
      width: 80%;
      background: $bg-grey;

      &.two-line {
        padding-right: 6em;
      }
    }

    &-link {
      color: $text-blue;
    }

    &-val {
      width: 20%;
      padding-right: 40px;
    }
  }
}
/** -------------------------------
  合計金額など 960px以下
------------------------------- */
.container-narrow {
  .total-info {
    &-item {
      &-label,
      &-val {
        padding: 4px 12px;
        font-size: 12px;
      }

      &-label {
        width: 60%;

        &.two-line {
          padding-right: 5em;
        }
      }

      &-val {
        width: 40%;
      }
    }
  }
}
</style>
