<template>
  <div>
    <div
      id="order-confirm-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="loaded.cart && loaded.cashRegister"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <v-form ref="orderForm" action="/process_order" method="post">
          <!-- 注文確定時に渡すパラメータ -->
          <input type="hidden" name="mode" :value="cashRegister.isReFixRegister ? 2 : 1" />
          <input type="hidden" name="registerId" :value="cashRegister.registerId" />
          <!-- ここまで -->
        </v-form>

        <div
          :class="{
            'd-flex mt-5': $vuetify.breakpoint.mdAndUp,
            'mt-2': $vuetify.breakpoint.smAndDown
          }"
        >
          <div class="order-main-area">
            <!-- ページタイトル -->
            <div
              class="order-page-title"
              :class="{
                'mx-5 mb-5': $vuetify.breakpoint.mdAndUp,
                'mx-3 mb-3': $vuetify.breakpoint.smAndDown
              }"
            >
              注文内容の確認
            </div>

            <!-- ステップ -->
            <order-step :stepNo="2" />

            <!-- 購入履歴ボタンおよび各種価格 960px未満 -->
            <div class="order-btn-area" v-if="$vuetify.breakpoint.smAndDown">
              <order-action
                :nextBtn="{ label: '注文確定' }"
                :order="orderSummary"
                :orderTradeSummary="orderTradeSummary"
                :tradeProducts="tradeProducts"
                floatable
                displayKiyaku
              >
                <v-btn
                  type="submit"
                  class="order-action-btn order-action-btn--white-text ec-link-btn"
                  tile
                  depressed
                  block
                  color="rgba(255, 132, 0, 1)"
                  @click="finalizeOrder()"
                >
                  注文確定
                </v-btn>
              </order-action>
            </div>

            <!-- 各種選択 -->
            <div class="order-contents-area">
              <!-- ご注文内容 -->
              <order-confirm-products :products="cart.cartItemInfo" />

              <!-- 受取方法 -->
              <order-confirm-recieve
                :receiveType="cashRegister.receivingMethodDiv"
                :shops="(cashRegister.shopInfo || {}).shops"
                :delivery="{
                  deliveryTypeInfo: cashRegister.deliveryTypeInfo,
                  selectDeliveryTypeCd: cashRegister.selectDeliveryTypeCd,
                  addressInfo: cashRegister.addressInfo,
                  deliveryDivInfo: cashRegister.deliveryDivInfo
                }"
              />

              <!-- お届け希望の日時指定 -->
              <order-confirm-delivery-date-time
                :selectArrivalDate="cashRegister.selectArrivalDate"
                :deliveryTimeZone="{
                  deliveryTimeZoneInfo: cashRegister.deliveryTimeZoneInfo,
                  selectDeliveryTimeZoneCd: cashRegister.selectDeliveryTimeZoneCd
                }"
                :deliverybox="{ useDeliverybox: cashRegister.useDeliverybox, deliveryBoxInfo: cashRegister.deliveryBoxInfo }"
                v-show="`${cashRegister.receivingMethodDiv}` === RECEIVE_TYPE.HOME"
              />

              <!-- お支払い方法 -->
              <order-confirm-payment
                :receiveType="cashRegister.receivingMethodDiv"
                :paymentMethod="{
                  selectPaymentMethod: cashRegister.selectPaymentMethod,
                  selectCardPaymentMethod: cashRegister.selectCardPaymentMethod,
                  cardPaymentCount: cashRegister.cardPaymentCount,
                  cardNumber: cardNumber,
                  cardExpired: cardExpired,
                  selectShoppingCredit: cashRegister.selectShoppingCredit,
                  paymentDestinationCVS: cashRegister.paymentDestinationCVS,
                  transferSourceHolder: cashRegister.transferSourceHolder
                }"
                v-show="cashRegister.selectPaymentMethod && `${cashRegister.selectPaymentMethod}` !== PAYMENT_TYPE.T_POINT"
              />

              <!-- ポイントの利用 -->
              <order-confirm-point :usePoint="cashRegister.usePoint" v-show="`${cashRegister.receivingMethodDiv}` === RECEIVE_TYPE.HOME" />

              <!-- クーポンの利用 -->
              <order-confirm-coupon :couponList="cart.couponInfo" />

              <!-- 代理注文用コメント -->
              <order-confirm-operator-memo v-if="cashRegister.isProxyAccount" :operatorMemo="cashRegister.operatorMemo" @changeComment="changeComment" />
            </div>
          </div>

          <!-- 購入履歴ボタンおよび各種価格 960px以上 -->
          <div ref="orderRightAreaRef" class="order-btn-area" v-if="$vuetify.breakpoint.mdAndUp">
            <order-action
              :nextBtn="{ label: '注文確定' }"
              :order="orderSummary"
              :orderTradeSummary="orderTradeSummary"
              :tradeProducts="tradeProducts"
              :parentElementWidth="orderRightAreaWidth"
              floatable
              displayKiyaku
            >
              <v-btn
                type="submit"
                class="order-action-btn order-action-btn--white-text ec-link-btn"
                tile
                depressed
                block
                color="rgba(255, 132, 0, 1)"
                :disabled="cashRegister.isReFixRegister == false"
                @click="finalizeOrder()"
              >
                注文確定
              </v-btn>
            </order-action>
          </div>
        </div>
      </div>
    </div>

    <!-- 全体ローディング表示 -->
    <div class="loading-order" v-else>
      <section-loading />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import OrderStep from '@/components/cart/order/order-step.vue';
import OrderAction, { OrderSummary, OrderTradeSummary } from '@/components/cart/order/order-action.vue';
import CartService from '@/logic/cart.service';
import { CartList } from '@/types/cart-list';
import OrderConfirmProducts from '@/components/cart/order-confirm/order-confirm-products.vue';
import { CashRegisterInfo } from '@/types/cash-register-info';
import OrderConfirmReceive from '@/components/cart/order-confirm/order-confirm-receive.vue';
import OrderConfirmDeliveryDateTime from '@/components/cart/order-confirm/order-confirm-delivery-date-time.vue';
import OrderConfirmPayment from '@/components/cart/order-confirm/order-confirm-payment.vue';
import OrderConfirmPoint from '@/components/cart/order-confirm/order-confirm-point.vue';
import OrderConfirmCoupon from '@/components/cart/order-confirm/order-confirm-coupon.vue';
import OrderConfirmOperatorMemo from '@/components/cart/order-confirm/order-confirm-operator-memo.vue';
import { TradeProductItem } from '@/types/trade-product-list';
import { PAYMENT_TYPE, RECEIVE_TYPE } from '@/constants/order-register-type';
import AuthService from '@/logic/auth.service';

export default Vue.extend({
  name: 'order-confirm-page',
  components: {
    'section-loading': SectionLoading,
    'order-step': OrderStep,
    'order-action': OrderAction,
    'order-confirm-products': OrderConfirmProducts,
    'order-confirm-recieve': OrderConfirmReceive,
    'order-confirm-delivery-date-time': OrderConfirmDeliveryDateTime,
    'order-confirm-payment': OrderConfirmPayment,
    'order-confirm-point': OrderConfirmPoint,
    'order-confirm-coupon': OrderConfirmCoupon,
    'order-confirm-operator-memo': OrderConfirmOperatorMemo
  },
  setup: (_, context) => {
    const { errorStore, order, authorizer, loader } = context.root.$store;

    const state = reactive({
      // form要素
      orderForm: ref<HTMLFormElement>(),
      // カート情報
      cart: {} as CartList,
      // カート情報:価格など
      orderSummary: {} as OrderSummary,
      // 下取り情報
      orderTradeSummary: {} as OrderTradeSummary,
      // レジ情報
      cashRegister: {} as CashRegisterInfo,
      // 下取り査定商品
      tradeProducts: [] as Array<TradeProductItem>,
      // クレジットカード情報
      cardNumber: '',
      cardExpired: '',
      // 代理注文用コメント
      operatorMemo: '',
      // 960px以上表示の際の右側要素（フローティング用）
      orderRightAreaRef: ref<HTMLElement>(),
      orderRightAreaWidth: '100%',
      // ロード状態
      loaded: {
        cart: false,
        cashRegister: false
      }
    });

    /**
     * カートを取得する
     */
    const searchCart = async () => {
      try {
        // カート一覧を取得する
        const result = await CartService.searchCartList();
        state.cart = result;

        // 査定情報
        state.tradeProducts = CartService.convertToTradeProducts(state.cart.assessmentInfo || []);
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.cart = true;
      }
    };

    /**
     * レジ情報を取得する
     */
    const fetchCashRegister = async () => {
      try {
        const result = await CartService.fetchCashRegisterInfo(true);
        state.cashRegister = result;
      } catch (error) {
        console.error(error);
        const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
        if (errorCode === 'EN003') {
          // セッションタイムアウト
          context.root.$router.push({ name: 'cart-list-page' });
          errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        }
      } finally {
        state.loaded.cashRegister = true;
      }
    };

    /**
     * 初期表示
     */
    onMounted(async () => {
      document.title = '【カメラのキタムラ】注文内容の確認';

      // カート情報を取得する
      await searchCart();

      // カートの中身がない場合、カート一覧ページに遷移させる
      if (state.cart?.cartItemInfo?.length < 1) {
        context.root.$router.push({ name: 'cart-list-page' });
        errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        return;
      }

      // レジ情報を取得する
      await fetchCashRegister();

      // クレジットカード情報をCookieから取得
      if (`${state.cashRegister.selectPaymentMethod}` === PAYMENT_TYPE.CREDIT_CARD) {
        const creditCard = order.creditCardInfo;
        state.cardNumber = creditCard?.cardNo;
        state.cardExpired = creditCard?.expiration;

        // クッキーにクレジットカード情報がない場合、レジページに遷移させる
        if (!state.cardNumber || !state.cardExpired) {
          errorStore.errorMessage =
            '入力頂いたクジレットカードの情報は２０分経過したので破棄されました。あらためてクレジットカード情報の入力をお願いいたします';
          context.root.$router.push({ name: 'order-page', hash: '#order-payment' });
          return;
        }
      }

      // 注文概要を作成
      state.orderSummary = {
        productCount: state.cart.cartItemInfo.reduce((sum, item) => sum + item.count, 0),
        productPrice: state.cashRegister.productPrice,
        paymentPrice: state.cashRegister.totalPrice,
        pickUpPrice: state.cashRegister.pickUpPrice,
        tax: state.cashRegister.internalTax,
        shippingCharge: state.cashRegister.shippingCharge,
        usePoint: state.cashRegister.usePoint,
        gainedPoint: state.cashRegister.gainedPoint
      };
      // 下取り概要を作成
      state.orderTradeSummary = {
        type: state.cart.assessmentCd,
        subTotal: state.cart.upperPrice,
        count: state.cart.assessmentInfo?.length || 0
      };
    });

    /**
     * 代理注文用コメント
     */
    const changeComment = (comment: string) => {
      state.operatorMemo = comment;
    };

    /**
     * 注文を確定する
     */
    const finalizeOrder = async () => {
      // ローディング表示（連打対策も含む）
      loader.routeUnset();

      // レジ情報のレジIDが無い or 注文可否フラグがfalseなら、警告してカート一覧に戻す
      if (!state.cashRegister.isOdrConfirm || !state.cashRegister.registerId) {
        context.root.$router.push({ name: 'cart-list-page' });
        errorStore.errorMessage = '予期しない操作が行われました。あらためて購入手続きをお願いいたします。';
        return;
      }

      // ログインしたままセッションが切れていないか確認し、切れていたら警告してカート一覧に戻す
      await AuthService.checkLoginStatus();
      if (!authorizer.user?.cartItemCount || authorizer.user.cartItemCount < 1) {
        context.root.$router.push({ name: 'cart-list-page' });
        errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        return;
      }

      // 支払い方法がクレジットカードの場合、トークンの有効期限が切れていないかクッキーから確認する
      const creditCard = order.creditCardInfo;
      if (`${state.cashRegister.selectPaymentMethod}` === PAYMENT_TYPE.CREDIT_CARD && (!creditCard || !Object.keys(creditCard).length)) {
        context.root.$router.push({ name: 'order-page', hash: '#order-payment' });
        errorStore.errorMessage = '入力頂いたクジレットカードの情報は２０分経過したので破棄されました。あらためてクレジットカード情報の入力をお願いいたします';
        return;
      }

      // 代理注文用コメントのレジ更新
      if (state.cashRegister.isProxyAccount) {
        try {
          const reqParam = {
            registerId: state.cashRegister.registerId,
            ptnNo: 8,
            operatorMemo: state.operatorMemo
          };
          await CartService.updateCashRegisterInfo(reqParam);

          // レジ情報を取得する
          await fetchCashRegister();
        } catch (error) {
          console.error(error);
          loader.routeLoaded();
          return;
        }
      }

      state.orderForm?.$el.submit();
    };

    // ログイン状況を監視する
    watch(
      () => [authorizer.isLoggedIn, authorizer.loginMenuOpenState],
      ([isLoggedIn, state]) => {
        if (isLoggedIn) {
          fetchCashRegister();
        } else if (!state) {
          // ログインが完了していない場合、カートページに戻す
          context.root.$router.push({ name: 'cart-list-page' });
        }
      }
    );

    /** -------------------------------------------------------------
     * フローティング
     ------------------------------------------------------------- */
    // 要素が生成されたことを検知する
    watch(
      () => state.orderRightAreaRef?.clientWidth,
      (width) => {
        state.orderRightAreaWidth = width ? `${width}px` : '100%';
      }
    );

    // 画面のリサイズはwatchでは検知できないので、resizeイベントで更新する
    window.addEventListener('resize', () => {
      state.orderRightAreaWidth = state.orderRightAreaRef ? `${state.orderRightAreaRef.clientWidth}px` : '100%';
    });

    return {
      RECEIVE_TYPE,
      PAYMENT_TYPE,
      ...toRefs(state),
      changeComment,
      finalizeOrder
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// ローディング
.loading-order {
  height: 20vh;
  width: 100%;
}

// 子コンポーネント共通部分 960px以上
.order-contents-area {
  ::v-deep .order-contents {
    &-title {
      padding: 0.5em 1em;
      font-size: 21px;
      font-weight: bold;
      line-height: 2;
      border: 1px solid $bg-grey;
      border-bottom: solid 2px $ec-primary;
    }

    &-area {
      table {
        th,
        td {
          border: 1px solid $bg-grey;
        }

        th,
        td.footer {
          background-color: $bg-light-grey3;
        }

        tr:hover {
          background-color: inherit !important;
        }

        th:first-child:not(.col-width-auto) {
          width: 30%;
        }
      }
    }

    &-item-title,
    &-item-value {
      font-weight: bold;
    }
  }
}

// 子コンポーネント共通部分 960px未満
.container-narrow {
  .order-contents-area {
    ::v-deep .order-contents {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &-title {
        padding: 0 1em;
        border-top: none;
        border-left: none;
        border-right: none;
      }
    }
  }
}

/** -------------------------------
  レジ確認
------------------------------- */
$left-area-width: 70%;

.order {
  // タイトル
  &-page-title {
    font-size: 36px;
    font-weight: bold;
  }

  // レイアウト
  &-main-area {
    width: $left-area-width;
  }
  &-btn-area {
    margin-left: 5px;
    width: calc(100% - #{$left-area-width} - 5px);
  }
}

/** -------------------------------
  レジ確認 960px以下
------------------------------- */
.container-narrow {
  .order {
    // タイトル
    &-page-title {
      font-size: 20px;
    }

    // レイアウト
    &-main-area {
      width: 100%;
    }
    &-btn-area {
      width: 100%;
      margin: 0 0 40px;
      border-bottom: dashed 1px $ec-light-grey2;
    }

    // メッセージ
    &-message-area {
      font-size: 0.8em;
    }
  }
}
</style>
