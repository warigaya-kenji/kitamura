<template>
  <v-card class="order-product" outlined tile>
    <div
      class="order-product-info d-flex"
      :class="{
        'pa-4': $vuetify.breakpoint.mdAndUp,
        'pa-2': $vuetify.breakpoint.smAndDown
      }"
    >
      <div class="order-product-info-1 text-center">
        <!-- 商品画像 -->
        <div class="order-product-img-area mb-3">
          <img class="order-product-img" contain :src="product.imagePath" @error="noimage" />
        </div>
        <!-- レビュー投稿:購入履歴詳細 -->
        <a
          class="order-product-review"
          :href="`/pd/review/entry.html?jan_cd=${product.janCode}`"
          v-if="(type === ORDER_DETAIL_TYPES.BUY_DELIVERY || type === ORDER_DETAIL_TYPES.BUY_SHOP) && completeCheck"
        >
          <v-icon class="mr-2" small>far fa-edit</v-icon>
          レビュー投稿
        </a>
        <!-- 状態:買取申込み詳細 -->
        <span class="order-product-used-status" v-else-if="type === ORDER_DETAIL_TYPES.SELL && convertToUsedStatesText(product.grade)"
          >程度：{{ convertToUsedStatesText(product.grade) }}</span
        >
      </div>
      <div class="order-product-info-2 justify-space-between">
        <router-link
          class="order-product-name mt-10"
          :class="{
            'mb-4': $vuetify.breakpoint.mdAndUp,
            'mb-6': $vuetify.breakpoint.smAndDown
          }"
          :to="product.isChuko === 2 ? `/ec/used/${product.janCode}` : `/ec/pd/${product.janCode}`"
          >{{ product.itemName }}</router-link
        >
        <!-- 購入履歴詳細 -->
        <template v-if="type === ORDER_DETAIL_TYPES.BUY_DELIVERY || type === ORDER_DETAIL_TYPES.BUY_SHOP">
          <div
            :class="{
              'text-right': $vuetify.breakpoint.smAndDown
            }"
            v-if="product.isChuko === 2 && product.reserveNo"
          >
            予約番号：
            <span
              :class="{
                'order-product-info-val': $vuetify.breakpoint.smAndDown
              }"
              >{{ product.reserveNo }}</span
            >
          </div>
          <div
            :class="{
              'text-right': $vuetify.breakpoint.smAndDown
            }"
            v-if="product.count !== undefined && product.count !== null"
          >
            数量：
            <span
              :class="{
                'order-product-info-val': $vuetify.breakpoint.smAndDown
              }"
              ><span v-if="product.count <= 0">-</span><span v-else>{{ product.count }}点</span></span
            >
          </div>
          <div
            :class="{
              'text-right': $vuetify.breakpoint.smAndDown
            }"
            v-if="product.unitPrice"
          >
            単価：
            <span
              :class="{
                'order-product-info-val': $vuetify.breakpoint.smAndDown
              }"
              >{{ product.unitPrice | price() }}円</span
            >
          </div>
          <div class="text-right">
            <div v-if="product.extWarrantyCharge">
              延長保証料：<span class="order-product-info-val">{{ product.extWarrantyCharge | price() }}円</span>
            </div>
            <div v-if="product.fieldSvcFee">
              設置・配線対応料金：<span class="order-product-info-val">{{ product.fieldSvcFee | price() }}円</span>
            </div>
            <div v-if="product.recycleFee">
              リサイクル料金：<span class="order-product-info-val">{{ product.recycleFee | price() }}円</span>
            </div>
            <div v-if="product.wrappingPrice">
              ラッピング金額：<span class="order-product-info-val">{{ product.wrappingPrice | price() }}円</span>
            </div>
            <div v-if="product.discountedValueByCoupon">
              クーポン利用：<span class="order-product-info-val">{{ product.discountedValueByCoupon | price(true) }}円</span>
            </div>
            <div v-if="product.isBundlePrice">
              まとめ買い割引：<span class="order-product-info-val">{{ product.isBundlePrice | price(true) }}円</span>
            </div>
            <div v-if="product.isSetDiscountPrice">
              ついで買い割引：<span class="order-product-info-val">{{ product.isSetDiscountPrice | price(true) }}円</span>
            </div>
            <div v-if="product.tradeInPrice">
              なんでも下取り：<span class="order-product-info-val">{{ product.tradeInPrice | price(true) }}円</span>
            </div>
          </div>
        </template>
        <!-- 買取申込み詳細 -->
        <template v-else-if="type === ORDER_DETAIL_TYPES.SELL">
          <div class="text-right">
            <div v-if="product.count !== undefined && product.count !== null">
              数量：
              <span class="order-product-info-val" v-if="product.count <= 0">-</span>
              <span class="order-product-info-val" v-else>{{ product.count }}点</span>
            </div>
            <div v-if="product.purchasePrice">
              買取価格：
              <span class="order-product-info-val" v-if="(status !== 90 && status !== 900) || product.purchasePrice === 0">-</span>
              <span class="order-product-info-val" v-else-if="product.purchasePrice < 0">（未査定）</span>
              <span class="order-product-info-val" v-else>{{ product.purchasePrice | price() }}円</span>
            </div>
            <div v-if="product.usedCoupon">
              クーポン利用：
              <span class="order-product-info-val">+{{ product.usedCoupon | price() }}円</span>
            </div>
          </div>
        </template>
        <!-- 下取申込み詳細（トクトク交換） -->
        <template v-else-if="type === ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT || type === ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT">
          <div class="text-right">
            <div v-if="product.onePrice">
              下取価格：
              <span class="order-product-info-val">{{ product.onePrice | price() }}円</span>
            </div>
            <!-- TODO:将来的に必要になれば(小計も) -->
            <div v-if="product.usedCoupon || false">
              クーポン利用：
              <span class="order-product-info-val">+{{ product.usedCoupon | price() }}円</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div
      class="order-product-total-info pa-4"
      v-if="type !== ORDER_DETAIL_TYPES.TRADE && type !== ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT && type !== ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT"
    >
      <div class="order-product-sub-total text-right" v-if="type === ORDER_DETAIL_TYPES.SELL">
        小計：
        <span v-if="(status !== 90 && status !== 900) || product.subtotal === 0">-</span>
        <span v-else-if="product.subtotal < 0">（未査定）</span>
        <span v-else>{{ product.subtotal | price() }}円</span>
      </div>
      <div class="order-product-sub-total text-right" v-else-if="product.subtotal !== undefined || product.subtotal !== null">
        小計：
        <span v-if="product.subtotal < 0">-</span>
        <span v-else>{{ product.subtotal | price() }}円</span>
      </div>
      <!-- 購入履歴詳細 -->
      <div
        class="order-product-status font-weight-bold"
        v-if="(type === ORDER_DETAIL_TYPES.BUY_DELIVERY || type === ORDER_DETAIL_TYPES.BUY_SHOP) && product.deliveryPrdStatusNote"
      >
        商品手配状況：{{ product.deliveryPrdStatusNote }}
        <a class="ml-2" :href="'/special/sale-fair/page/deliver/' + (type === ORDER_DETAIL_TYPES.BUY_SHOP ? '#a01' : '#a02')">
          <v-icon>far fa-question-circle</v-icon>
        </a>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, computed } from '@vue/composition-api';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';
import { noimage, convertToUsedStatesText } from '@/logic/utils';
import { BUY_DELIVERY_ORDER_STEP, BUY_SHOP_ORDER_STEP } from '@/constants/mypage-order-step';
import UserService from '@/logic/user.service';

export default Vue.extend({
  name: 'order-product',
  props: {
    type: {
      type: Number,
      required: true
    },
    status: {
      type: [String, Number],
      required: false,
      default: ''
    },
    product: {
      type: Object,
      required: true
    }
  },
  setup: (props) => {
    const state = reactive({});

    const completeCheck = computed(() => {
      let targetStatus;
      let completedStatus;
      if (props.type === ORDER_DETAIL_TYPES.BUY_DELIVERY) {
        targetStatus = UserService.convertStepStatus(BUY_DELIVERY_ORDER_STEP, `${props.status}`);
        completedStatus = BUY_DELIVERY_ORDER_STEP.find((step) => step.text === '発送済');
      } else {
        targetStatus = UserService.convertStepStatus(BUY_SHOP_ORDER_STEP, `${props.status}`);
        completedStatus = BUY_SHOP_ORDER_STEP.find((step) => step.text === 'お渡し完了');
      }
      return targetStatus.no === completedStatus?.no ? true : false;
    });

    return {
      ...toRefs(state),
      noimage,
      ORDER_DETAIL_TYPES,
      completeCheck,
      convertToUsedStatesText
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  商品
------------------------------- */
.order-product {
  font-size: 14px;
  border-color: $ec-grey;

  $img-size: 150px;
  $info-1-mr: 40px;
  &-info {
    &-1 {
      flex: 0 0 $img-size;
      margin-right: $info-1-mr;
    }

    &-2 {
      flex-basis: calc(100% - #{$img-size} - #{$info-1-mr});
      line-height: 2;
      display: flex;
      flex-direction: column;
    }

    &-val {
      display: inline-block;
      width: 7em;
    }
  }

  &-img-area {
    height: $img-size;
    max-width: $img-size;
  }
  &-img {
    width: 100%;
    margin: auto;
    object-fit: contain;
  }

  &-name {
    @include ellipsis-lines(2);
    color: $text-blue;
  }

  &-total-info {
    border-top: dashed 1px $ec-grey;
  }
}
/** -------------------------------
  商品 960px以下
------------------------------- */
.container-narrow {
  .order-product {
    font-size: 12px;

    $img-size-sp: 100px;
    $info-1-mr: 8px;
    &-info {
      &-1 {
        flex: 0 0 $img-size-sp;
        margin-right: $info-1-mr;
      }

      &-2 {
        flex-basis: calc(100% - #{$img-size-sp} - #{$info-1-mr});
        line-height: 1.5;
      }
    }

    &-img-area {
      height: $img-size-sp;
      max-width: $img-size-sp;
    }

    &-name {
      @include ellipsis-lines(3);
      color: $text-blue;
    }
  }
}
</style>
