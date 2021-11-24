<template>
  <div id="order-action" class="order-action" ref="orderActionRef" v-scroll="onScroll" :class="{ fixed: floatable && $vuetify.breakpoint.mdAndUp }">
    <!-- 規約確認 -->
    <div class="px-4 pt-4" v-if="displayKiyaku">
      <span>「{{ nextBtn.label }}」ボタンを押してご注文いただくことで、お客様は当サイトの</span>
      <span class="secondary-link">
        <a href="/ec/guide/kiyaku_summary.html" target="_blank"><span class="secondary-link-text">各種規約</span></a>
      </span>
      <span>に同意の上、商品をご注文されたことになります。</span>
    </div>

    <!-- ボタン類 -->
    <div class="order-action-btn-area pa-4" ref="orderActionBtnRef" :class="{ fixed: orderActionFixed }">
      <slot>
        <!-- 次へ進むボタン -->
        <v-btn
          class="order-action-btn order-action-btn--white-text ec-link-btn"
          tile
          depressed
          :block="!prevBtn || $vuetify.breakpoint.mdAndUp"
          color="rgba(255, 132, 0, 1)"
          :disabled="nextBtn.disabled"
          :to="nextBtn.to"
          @click="onClickNext()"
        >
          {{ nextBtn.label }}
        </v-btn>

        <!-- 前へ戻るボタン -->
        <v-btn
          class="order-action-btn ec-link-btn"
          :class="{ 'mt-3': $vuetify.breakpoint.mdAndUp, 'mr-3': $vuetify.breakpoint.smAndDown }"
          tile
          depressed
          :block="$vuetify.breakpoint.mdAndUp"
          color="rgba(0, 0, 0, 0.12)"
          :to="prevBtn.to"
          :disabled="prevBtn.disabled"
          v-if="prevBtn"
          @click="onClickPrev()"
        >
          {{ prevBtn.label }}
        </v-btn>
      </slot>
    </div>

    <div class="order-summary-container" v-show="order && Object.keys(order).length">
      <div class="order-summary-area" ref="orderSummaryAmountAreaRef" :class="{ fixed: orderActionFixed }">
        <!-- お支払い合計・お受取り合計 -->
        <v-row dense class="order-payment-amount-area">
          <v-col cols="5">
            <div>
              <span v-if="upperPickUpPrice">お受取り合計</span>
              <span v-else>お支払い合計</span>
            </div>
            <div>（{{ order.productCount }}個の商品）</div>
          </v-col>
          <v-col cols="7" class="order-summary-item-value">
            <!-- お受取り合計 -->
            <div v-if="upperPickUpPrice">
              <span class="order-payment-amount red-font">{{ order.pickUpPrice | price() }}</span>
              <span class="unit tax-notation">円</span>
            </div>
            <!-- 支払い合計 -->
            <div v-else>
              <div>
                <span class="order-payment-amount red-font" v-if="order.paymentPrice == null || order.paymentPrice === 0">0</span>
                <span class="order-payment-amount red-font" v-else>{{ order.paymentPrice | price(true) }}</span>
                <span class="unit tax-notation">円（税込）</span>
              </div>
              <div class="tax" v-if="order.tax">（内消費税{{ order.tax | price }}円）</div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="order-summary-area mt-1" ref="orderSummaryAreaRef">
        <!-- 商品小計 -->
        <v-row dense class="order-product-price-area">
          <v-col cols="4">商品小計</v-col>
          <v-col cols="8" class="order-summary-item-value">{{ order.productPrice | price() }}<span class="unit tax-notation">円（税込）</span></v-col>
        </v-row>

        <!-- 獲得ポイント -->
        <v-row dense class="order-gained-point-area" v-if="order.gainedPoint && userLinkedTPoint">
          <v-col cols="4">獲得ポイント</v-col>
          <v-col cols="8" class="order-summary-item-value">{{ order.gainedPoint | price }}<span class="unit">pt</span></v-col>
        </v-row>

        <!-- 送料 -->
        <v-row dense v-if="order.shippingCharge != null">
          <v-col cols="4">送料</v-col>
          <v-col cols="8" class="order-summary-item-value">
            <span v-if="`${order.shippingCharge}` === '0'">0</span>
            <span v-else>{{ order.shippingCharge | price }}</span>
            <span class="unit">円</span>
          </v-col>
        </v-row>

        <!-- ご利用ポイント -->
        <v-row dense v-if="order.usePoint">
          <v-col cols="5" class="d-flex">
            <img src="@/assets/header/t-point.svg" class="mr-2 t-point-img" />
            ご利用ポイント
          </v-col>
          <v-col cols="7" class="order-summary-item-value">{{ order.usePoint | price }}<span class="unit">pt</span></v-col>
        </v-row>

        <!-- トクトク交換小計 -->
        <v-row dense v-if="orderTradeSummary.type === 1 && (orderTradeSummary.count > 0 || !!orderTradeSummary.link)">
          <v-col cols="7">
            <div>
              トクトク交換小計<span class="d-inline-block">（{{ orderTradeSummary.count }}点）</span>
            </div>
            <span class="secondary-link">
              <router-link :to="orderTradeSummary.link" target="_blank" v-if="orderTradeSummary.link">
                <span class="secondary-link-text">詳細を見る</span>
              </router-link>
              <a @click="tradeProductDialog = true" v-else><span class="secondary-link-text">詳細を見る</span></a>
            </span>
          </v-col>
          <v-col cols="5" class="order-summary-item-value">{{ orderTradeSummary.subTotal | price(true) }}<span class="unit">円</span></v-col>
        </v-row>
      </div>
    </div>

    <div class="order-summary-area">
      <!-- 下取り点数（支払い合計の下に表示）-->
      <v-row dense v-if="orderTradeSummary.type === 2 && (orderTradeSummary.count > 0 || !!orderTradeSummary.link)">
        <v-col cols="7">
          <div>店舗での下取り予定</div>
          <span class="secondary-link">
            <router-link :to="orderTradeSummary.link" target="_blank" v-if="orderTradeSummary.link">
              <span class="secondary-link-text">詳細を見る</span>
            </router-link>
            <a @click="tradeProductDialog = true" v-else><span class="secondary-link-text">詳細を見る</span></a>
          </span>
        </v-col>
        <v-col cols="5" class="order-summary-item-value" v-if="orderTradeSummary.count">{{ orderTradeSummary.count }}<span class="unit">点</span></v-col>
      </v-row>
    </div>

    <!-- 下取り商品確認ダイアログ 960px以上 -->
    <trade-product-confirm-dialog
      v-model="tradeProductDialog"
      :tokutoku="orderTradeSummary.type === 1 ? true : false"
      :products="tradeProducts"
      readonly
      v-if="$vuetify.breakpoint.mdAndUp"
    />

    <!-- 下取り商品確認ドロワー 960px未満 -->
    <trade-product-confirm-drawer
      v-model="tradeProductDialog"
      :tokutoku="orderTradeSummary.type === 1 ? true : false"
      :products="tradeProducts"
      readonly
      v-else
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { reactive, toRefs, ref, computed, watch } from '@vue/composition-api';
import TradeProductConfirmDialog from '@/components/cart/cart-list/trade-product-dialog/trade-product-confirm-dialog.vue';
import TradeProductConfirmDrawer from '@/components/cart/cart-list/trade-product-drawer/trade-product-confirm-drawer.vue';
import { TradeProductItem } from '@/types/trade-product-list';

// 注文概要
export type OrderSummary = {
  /** 商品数 */
  productCount: number;
  /** 商品小計 */
  productPrice: number;
  /** 支払い額 */
  paymentPrice: number;
  /** 内消費税 */
  tax: number;
  /** 送料 */
  shippingCharge: number;
  /** ポイント利用 */
  usePoint: number;
  /** 獲得ポイント */
  gainedPoint: number;
  /** お受取り合計 */
  pickUpPrice: number;
};

// 下取り概要
export type OrderTradeSummary = {
  /** 下取り区分 1:トクトク交換、2:下取り申込 */
  type?: 1 | 2;
  /** 小計 */
  subTotal?: number;
  /** 数量 */
  count: number;
  /** 申込み履歴リンク */
  link?: string;
};

// 注文ボタン
export type OrderActionBtn = {
  label: string;
  to: string;
  disabled?: boolean;
};

export default Vue.extend({
  name: 'order-action',
  components: {
    'trade-product-confirm-dialog': TradeProductConfirmDialog,
    'trade-product-confirm-drawer': TradeProductConfirmDrawer
  },
  props: {
    order: {
      type: Object as PropType<OrderSummary>,
      default: () => ({})
    },
    nextBtn: {
      type: Object as PropType<OrderActionBtn>,
      default: () => ({})
    },
    prevBtn: {
      type: Object as PropType<OrderActionBtn>
    },
    /** フローティング可能 */
    floatable: {
      type: Boolean,
      default: true
    },
    /** 下取り概要（店舗下取り・トクトク交換） */
    orderTradeSummary: {
      type: Object as PropType<OrderTradeSummary>,
      default: () => ({})
    },
    /** 下取り申込み依頼品 */
    tradeProducts: {
      type: Array as PropType<Array<TradeProductItem>>,
      default: () => []
    },
    /** 親要素の幅 */
    parentElementWidth: {
      type: String,
      default: '100%'
    },
    /** 規約確認を表示するかどうか */
    displayKiyaku: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const { header, authorizer } = context.root.$store;
    const state = reactive({
      userLinkedTPoint: authorizer.user ? authorizer.user.linkedTPoint : false,
      // fixed用
      orderActionRef: ref<HTMLElement>(),
      orderActionBtnRef: ref<HTMLElement>(),
      orderSummaryAmountAreaRef: ref<HTMLElement>(),
      orderSummaryAreaRef: ref<HTMLElement>(),
      orderActionFixed: false,
      // 下取申込依頼品確認ダイアログ
      tradeProductDialog: false
    });

    /**
     * スクロールイベント検出：ボタン・合計金額の固定表示
     */
    const onScroll = () => {
      if (props.floatable && context.root.$vuetify.breakpoint.smAndDown) {
        const headerHeight = header.headerHeight;
        if (state.orderActionRef && state.orderActionBtnRef && state.orderSummaryAmountAreaRef && state.orderSummaryAreaRef) {
          if (window.pageYOffset > state.orderSummaryAreaRef.getBoundingClientRect().top) {
            state.orderActionFixed = true;
            state.orderActionBtnRef.style.top = headerHeight + 'px';
            const amountAreaTop = headerHeight + state.orderActionBtnRef.clientHeight;
            state.orderSummaryAmountAreaRef.style.top = amountAreaTop + 'px';
            const paddingTop = state.orderActionBtnRef.clientHeight + state.orderSummaryAmountAreaRef.clientHeight;
            state.orderActionRef.style.paddingTop = paddingTop + 'px';
          } else {
            state.orderActionFixed = false;
            state.orderActionBtnRef.style.top = '';
            state.orderSummaryAmountAreaRef.style.top = '';
            state.orderActionRef.style.paddingTop = '';
          }
        }
      }
    };

    // 全体の横幅を親の要素に合わせる 960px以上
    // position: fixedにすると、親要素基準ではなくなるため
    if (props.floatable && context.root.$vuetify.breakpoint.mdAndUp && state.orderActionRef) {
      state.orderActionRef.style.width = props.parentElementWidth as string;
    }

    // 次へボタンが押された時、親コンポーネントに伝える
    const onClickNext = () => context.emit('click:next');

    // 前へボタンが押された時、親コンポーネントに伝える
    const onClickPrev = () => context.emit('click:prev');

    // 支払い合計よりお受取り合計の方が多い
    const upperPickUpPrice = computed(() => {
      const order = props.order as OrderSummary;
      return (!order.paymentPrice || order.paymentPrice <= 0) && order.pickUpPrice != null && order.pickUpPrice > 0;
    });

    // 親要素の横幅がリサイズされたら、こちらの横幅も再設定する
    watch(
      () => props.parentElementWidth as string,
      (width) => {
        if (props.floatable && context.root.$vuetify.breakpoint.mdAndUp && !!state.orderActionRef) {
          state.orderActionRef.style.width = width;
        }
      }
    );

    // 下取り点数
    const tradeProductCount = computed(() => {
      let count = 0;
      const tradeProducts = props.tradeProducts as Array<TradeProductItem>;
      if (tradeProducts && tradeProducts.length) tradeProducts.forEach((item) => (count += item.count));
      return count;
    });

    return {
      ...toRefs(state),
      onScroll,
      onClickNext,
      onClickPrev,
      upperPickUpPrice,
      tradeProductCount
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  注文操作関連
------------------------------- */
.order-action {
  border: 10px solid $bg-light-grey3;

  &.fixed {
    position: fixed;
  }

  &-btn {
    color: $text-black;
    font-size: 1em;
    font-weight: bold;
    text-transform: none;

    &.v-btn {
      min-height: 60px;
    }

    &-area {
      background-color: $bg-white;
    }

    &--white-text {
      color: $text-white;
    }
  }
}

.order-summary {
  &-container {
    display: flex;
    flex-direction: column-reverse;
  }

  &-area .row {
    margin: 0;
    padding: 4px;
  }

  &-item-value {
    text-align: right;

    .tax {
      font-size: 0.9em;
      padding-right: 2.5em;
    }

    .unit {
      font-size: 0.8em;
      padding-left: 10px;

      &:not(.tax-notation) {
        padding-right: 4em;
      }
    }
  }
}

.order-payment-amount {
  font-size: 1.1em;
  font-weight: bold;

  &-area {
    background-color: $bg-light-red3;
  }
}

.order-product-price {
  &-area {
    background-color: $bg-light-grey3;
  }
}

.order-gained-point {
  &-area {
    background-color: $bg-light-grey3;
  }
}

// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

/** -------------------------------
  注文操作関連 960px以下
------------------------------- */
%fixed {
  position: fixed;
  width: 100%;
  background: $bg-white;
  z-index: 300;
}

.container-narrow {
  .order-action {
    border: none;

    &-btn {
      margin: 0;
      width: 48%;
      font-size: 1.2em;

      ::v-deep .v-btn__content {
        width: 100%;
        text-align: center;
        white-space: normal;
      }

      &-area {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;

        &.fixed {
          @extend %fixed;
        }
      }
    }
  }

  .order-summary {
    &-container {
      flex-direction: column;
    }

    &-area {
      font-size: 0.9em;

      &.fixed {
        @extend %fixed;
      }
    }
  }
}
</style>
