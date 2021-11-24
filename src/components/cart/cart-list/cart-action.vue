<template>
  <div
    id="cart-action"
    ref="cartActionRef"
    class="cart-action"
    :class="{ sp: $vuetify.breakpoint.smAndDown, fixed: floatable && $vuetify.breakpoint.mdAndUp }"
    v-scroll="onScroll"
  >
    <div class="cart-action-area" :class="{ 'pa-3': $vuetify.breakpoint.mdAndUp }">
      <!-- 商品合計 -->
      <div ref="cartSummaryAmountAreaRef" class="cart-action-payment-price-area pa-4" :class="{ fixed: cartActionFixed }">
        <div class="mr-3" v-if="$vuetify.breakpoint.mdAndUp">
          <div class="cart-action-payment-price-title">商品合計</div>
          <div class="d-inline-block" v-if="cart.cartItemInfo">
            <span>（</span>
            <span class="red-font">{{ productCount }}</span>
            <span>個の商品）</span>
          </div>
        </div>
        <div v-else>
          <span class="cart-action-payment-price-title">商品合計</span>
          <span class="d-inline-block" v-if="cart.cartItemInfo">
            <span>（</span>
            <span class="red-font">{{ productCount }}</span>
            <span>個の商品）</span>
          </span>
        </div>
        <div class="ml-auto text-right">
          <div>
            <span class="red-font">
              <span class="cart-action-payment-price">{{ cart.productPrice | price() }}</span>
              <span>円</span>
            </span>
            <span class="d-inline-block">（税込）</span>
          </div>
        </div>
      </div>

      <!-- ボタン -->
      <div ref="cartActionBtnRef" class="cart-action-btn-area pa-4" :class="{ fixed: cartActionFixed }">
        <v-btn class="action-btn action-btn--white-text" tile block color="rgba(255, 132, 0, 1)" @click="toOrderPage()"> 購入手続きへ進む </v-btn>
      </div>

      <!-- クーポン入力 -->
      <div class="cart-action-btn-area px-4 pb-4">
        <div class="coupon-add-area px-6" ref="cartSummaryAreaRef">
          <div>クーポンコードをお持ちの場合は以下に番号を入力してから購入手続きへお進みください</div>
          <v-text-field class="coupon-add-input-text" v-model="couponCode" placeholder="クーポンコードを入力ください" outlined dense></v-text-field>
        </div>
      </div>

      <!-- 下取り申込み商品決定後 -->
      <div class="cart-action-selected-option-area" v-if="tradeProducts.length">
        <div class="pa-4">
          <v-checkbox hide-details class="ma-0" @click="cancelTradeProducts()" :input-value="true">
            <template v-slot:label>
              <span class="selected-option-text">
                <span>{{ tradeOptions.tradeIn ? '下取り' : 'トクトク交換' }}申込みあり</span>
                <span>（{{ tradeProductCount }}点）</span>
              </span>
            </template>
          </v-checkbox>
        </div>
        <div class="d-flex pa-4">
          <a class="ml-auto" @click="openDialog('confirm')">下取り依頼品の確認<v-icon right>fas fa-angle-right</v-icon></a>
        </div>
      </div>

      <!-- 下取りオプション -->
      <div class="cart-action-trade-option-area" v-else-if="canTradeInAnything || cart.canTradeRequest || cart.canTokutoku">
        <v-list class="pa-0">
          <v-list-item-group multiple v-model="selectedTradeOption">
            <v-list-item value="ROOT" class="cart-action-trade-option-item" v-model="tradeOptions.enable">
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <span class="cart-action-trade-option-checkbox-label">持っているカメラ・レンズを下取りに出す</span>
                </v-list-item-content>
              </template>
            </v-list-item>

            <template v-if="tradeOptions.enable">
              <!-- なんでも下取り -->
              <v-list-item
                value="TRADE_IN_ANYTHING"
                class="cart-action-trade-option-item"
                :disabled="tradeOptions.tokutoku"
                v-model="tradeOptions.tradeInAnything"
                v-if="canTradeInAnything"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" :disabled="tradeOptions.tokutoku"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title class="cart-action-trade-option-item-title">なんでも下取り</v-list-item-title>
                    <v-list-item-subtitle class="cart-action-trade-option-item-subtitle">※一律の金額で下取りするサービス</v-list-item-subtitle>

                    <a href="/sitemap/riyou_shitadori_index.html" target="_blank" class="cart-action-trade-option-item-help" @click.stop>
                      <v-icon> far fa-question-circle </v-icon>
                    </a>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <!-- 下取り申込 -->
              <v-list-item value="TRADE_IN" class="cart-action-trade-option-item" v-model="tradeOptions.tradeIn" v-if="cart.canTradeRequest">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title class="cart-action-trade-option-item-title">下取り申込</v-list-item-title>
                    <v-list-item-subtitle class="cart-action-trade-option-item-subtitle">※店頭限定サービス・複数下取申込可</v-list-item-subtitle>

                    <a class="cart-action-trade-option-item-help" @click.stop="tradeDialog = true">
                      <v-icon> far fa-question-circle </v-icon>
                    </a>
                  </v-list-item-content>
                </template>
              </v-list-item>
              <!-- 梱包キットについてのダイアログ -->
              <v-dialog class="cart-action-trade-dialog" max-width="640" v-model="tradeDialog">
                <v-card class="cart-action-trade-dialog-area">
                  <div class="cart-action-trade-dialog-discription">
                    商品をご購入時に下取査定を申込み頂ければ、お受取時に店舗で査定を行います<br />
                    <br />
                    <div class="ml-2">
                      ※下取品はお受取り当日に店舗へご持参ください<br />
                      （対象：カメラ・交換レンズ・ビデオカメラ）<br />
                      ※「何でも下取り」対象品の場合、査定額には何でも下取り値引額が含まれます<br />
                      ※下取品のモデル・状態によっては査定額が付かない場合もございます<br />
                      （何でも下取り対象品は設定された値引き額は保証されます）<br />
                      ※即日査定ができない店舗もございます。事前に受取店にご確認ください<br />
                      ※店舗受取限定のサービスとなり、宅配は対象外となります
                    </div>
                  </div>
                </v-card>
              </v-dialog>

              <!-- トクトク交換 -->
              <v-list-item
                value="TOKUTOKU"
                class="cart-action-trade-option-item"
                :disabled="disabledTokutoku"
                v-model="tradeOptions.tokutoku"
                v-if="cart.canTokutoku"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" :disabled="tradeOptions.tradeInAnything"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title class="cart-action-trade-option-item-title">トクトク交換</v-list-item-title>
                    <v-list-item-subtitle class="cart-action-trade-option-item-subtitle">※宅配限定サービス・複数下取申込可</v-list-item-subtitle>

                    <a href="/sitemap/faq_tokutokukoukan.html" target="_blank" class="cart-action-trade-option-item-help" @click.stop>
                      <v-icon> far fa-question-circle </v-icon>
                    </a>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { CartList } from '@/types/cart-list';
import { TradeProductItem } from '@/types/trade-product-list';

export type TradeOption = {
  enable: boolean;
  tradeInAnything: boolean;
  tradeIn: boolean;
  tokutoku: boolean;
};

export default Vue.extend({
  name: 'cart-action',
  props: {
    cart: {
      required: true,
      type: Object as PropType<CartList>
    },
    tradeProducts: {
      required: true,
      type: Array as PropType<Array<TradeProductItem>>
    },
    tradeOptions: {
      required: true,
      type: Object as PropType<TradeOption>
    },
    /** フローティング可能 */
    floatable: {
      type: Boolean,
      default: true
    },
    /** 親要素の幅 */
    parentElementWidth: {
      type: String,
      default: '100%'
    }
  },
  setup: (props, context) => {
    const { header, errorStore } = context.root.$store;

    const state = reactive({
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      selectedTradeOption: [] as Array<string>,
      // 下取りダイアログ
      tradeDialog: false,
      // クーポン
      couponCode: '',
      // fixed用
      cartActionRef: ref<HTMLElement>(),
      cartActionBtnRef: ref<HTMLElement>(),
      cartSummaryAmountAreaRef: ref<HTMLElement>(),
      cartSummaryAreaRef: ref<HTMLElement>(),
      cartActionFixed: false,
      // ロード状態
      loaded: {
        cart: true
      }
    });

    /**
     * スクロールイベント検出：ボタン・合計金額の固定表示
     */
    const onScroll = () => {
      if (props.floatable && context.root.$vuetify.breakpoint.smAndDown) {
        const headerHeight = header.headerHeight;
        if (state.cartActionRef && state.cartActionBtnRef && state.cartSummaryAmountAreaRef && state.cartSummaryAreaRef) {
          if (window.pageYOffset > state.cartSummaryAreaRef.getBoundingClientRect().top) {
            state.cartActionFixed = true;
            state.cartSummaryAmountAreaRef.style.top = headerHeight + 'px';
            const amountAreaTop = headerHeight + state.cartSummaryAmountAreaRef.clientHeight;
            state.cartActionBtnRef.style.top = amountAreaTop + 'px';
            const paddingTop = state.cartSummaryAmountAreaRef.clientHeight + state.cartActionBtnRef.clientHeight;
            state.cartActionRef.style.paddingTop = paddingTop + 'px';
          } else {
            state.cartActionFixed = false;
            state.cartActionBtnRef.style.top = '';
            state.cartSummaryAmountAreaRef.style.top = '';
            state.cartActionRef.style.paddingTop = '';
          }
        }
      }
    };

    // 全体の横幅を親の要素に合わせる 960px以上
    // position: fixedにすると、親要素基準ではなくなるため
    if (props.floatable && context.root.$vuetify.breakpoint.mdAndUp && state.cartActionRef) {
      state.cartActionRef.style.width = props.parentElementWidth as string;
    }

    /**
     * ダイアログを開く
     */
    const openDialog = (type: string) => {
      context.emit('openDialog', type);
    };

    /**
     * 下取り査定商品の設定をキャンセルする
     */
    const cancelTradeProducts = () => {
      const options = props.tradeOptions as TradeOption;
      options.tradeIn = false;
      options.tokutoku = false;
      context.emit('onChnageOptions', options);
    };

    /**
     * 下取りオプションの選択状態を適用する
     */
    const applySelectionTradeOptionState = (tradeOption: TradeOption) => {
      state.selectedTradeOption = [];
      if (tradeOption.enable) {
        state.selectedTradeOption.push('ROOT');
      }
      if (tradeOption.tradeInAnything) {
        state.selectedTradeOption.push('TRADE_IN_ANYTHING');
      }
      if (tradeOption.tradeIn) {
        state.selectedTradeOption.push('TRADE_IN');
      }
      if (tradeOption.tokutoku) {
        state.selectedTradeOption.push('TOKUTOKU');
      }
    };
    applySelectionTradeOptionState(props.tradeOptions as TradeOption);

    /**
     * なんでも下取り可能か
     */
    const canTradeInAnything = computed(() => (props.cart as CartList).cartItemInfo?.some((item) => item.canTrade));

    /**
     * トクトク交換が無効か
     */
    const disabledTokutoku = computed(() => {
      const tradableInItems = (props.cart as CartList).cartItemInfo.filter((item) => item.canTrade);
      const selectedAnyTradeIn = tradableInItems.some((item) => item.isTrade);
      return (props.tradeOptions as TradeOption).tradeInAnything || selectedAnyTradeIn;
    });

    /**
     * 商品数
     */
    const productCount = computed(() => (props.cart as CartList).cartItemInfo?.reduce((sum, item) => sum + item.count, 0));

    // 下取申込査定品の数
    const tradeProductCount = computed(() => (props.tradeProducts as TradeProductItem[]).reduce((sum, item) => sum + item.count, 0));

    /**
     * 下取りオプションが無効かどうか
     */
    const invalidTradeOptions = () => {
      // 3つのオプションすべて指定不可の場合は下取り希望に関わらず有効にする
      if (!canTradeInAnything.value && !(props.cart as CartList).canTradeRequest && !(props.cart as CartList).canTokutoku) {
        return false;
      }

      const tradeOptions = props.tradeOptions as TradeOption;
      const tradeProducts = props.tradeProducts as TradeProductItem[];
      const invalidTrade = tradeOptions.enable && !tradeOptions.tradeIn && !tradeOptions.tradeInAnything && !tradeOptions.tokutoku;
      const invalidTradeIn = tradeOptions.tradeIn && tradeProducts.length < 1;
      const invalidTokutoku = tradeOptions.tokutoku && tradeProducts.length < 1;

      return invalidTrade || invalidTradeIn || invalidTokutoku;
    };

    /**
     * 購入手続きに進む
     */
    const toOrderPage = async () => {
      if (invalidTradeOptions()) {
        errorStore.errorMessage =
          '下取り商品が選択されていません。以下の「下取り申込」か「トクトク交換」をチェックして、表示される商品から下取りの対象品をご指定ください。';
      } else {
        context.emit('toNextStep', state.couponCode);
      }
    };

    // tradeOptions が更新された際に、チェックボックスのリスト内の状態も更新する
    watch(
      () => props.tradeOptions as TradeOption,
      (tradeOption) => {
        applySelectionTradeOptionState(tradeOption);
      },
      { deep: true }
    );

    // 親要素の横幅がリサイズされたら、こちらの横幅も再設定する
    watch(
      () => props.parentElementWidth as string,
      (width) => {
        if (props.floatable && context.root.$vuetify.breakpoint.mdAndUp && !!state.cartActionRef) {
          state.cartActionRef.style.width = width;
        }
      }
    );

    return {
      ...toRefs(state),
      openDialog,
      cancelTradeProducts,
      toOrderPage,
      canTradeInAnything,
      disabledTokutoku,
      productCount,
      tradeProductCount,
      onScroll
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  カート操作 960px以上
------------------------------- */
%fixed {
  position: fixed;
  width: 100%;
  z-index: 300;
}

.cart-action {
  &-area {
    background-color: $ec-light-grey;
  }

  &.fixed {
    position: fixed;
  }

  &-payment-price {
    font-weight: bold;
    font-size: 1.5em;

    &-title {
      font-weight: bold;
      font-size: 1.5em;
    }

    &-area {
      display: flex;
      align-items: baseline;
      background-color: $bg-light-red3;

      &.fixed {
        @extend %fixed;
      }
    }
  }

  &-btn-area {
    background-color: $bg-white;

    .action-btn {
      color: $ec-black;
      font-size: 1.1em;
      font-weight: bold;
      text-transform: none;
      margin: 16px 0;

      &.v-btn {
        min-height: 60px;
      }

      &--white-text {
        color: $text-white;
      }
    }

    &.fixed {
      @extend %fixed;
    }
  }

  &-trade {
    &-option {
      &-area {
        background-color: $bg-white;
      }

      &-checkbox-label {
        font-size: 1.1em;
        font-weight: bold;
      }

      &-item {
        height: 65px;
        border-top: 1px solid $ec-grey;

        &:not(:first-child) {
          border-top: 1px dotted $ec-grey;
          padding-left: 40px;
        }

        ::v-deep .v-list-item__action {
          margin-right: 1em;
        }

        &.v-list-item--active {
          background-color: $bg-light-grey3;

          &::before {
            opacity: 0;
          }
        }

        &-title {
          font-weight: bold;
        }

        &-help {
          position: absolute;
          right: 5px;
        }
      }
    }

    &-dialog {
      z-index: 600;

      &-area {
        min-height: 200px;
      }

      &-discription {
        padding: 12px;
      }
    }
  }

  &-selected-option {
    &-area {
      background-color: $bg-light-grey3;

      .selected-option-text {
        color: $text-black;
        font-weight: bold;
      }

      > div {
        border-bottom: 1px dotted $ec-grey;
      }
    }
  }
}

.coupon-add {
  &-area {
    font-size: 0.9em;
  }

  &-input-text {
    margin-bottom: 8px;

    ::v-deep {
      .v-input__slot {
        margin-bottom: 0;
      }
      .v-text-field__details {
        margin: 8px 0 0;
      }
    }
  }
}

/** -------------------------------
  カート操作 960px未満
------------------------------- */
.sp {
  .cart-action {
    &-payment-price {
      font-size: 1.2em;

      &-title {
        font-weight: bold;
        font-size: 0.9em;
      }
    }

    &-btn-area {
      .reverse-flex {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }

      .action-btn {
        margin: 0;
        width: 48%;
        font-size: 1.3em;
      }
    }

    &-trade-option {
      &-checkbox-label {
        font-size: 0.95em;
      }
    }
  }
}
</style>
