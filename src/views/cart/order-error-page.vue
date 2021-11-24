<template>
  <div
    id="order-error-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-area-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <div
        :class="{
          'd-flex mt-5': $vuetify.breakpoint.mdAndUp,
          'mt-2': $vuetify.breakpoint.smAndDown
        }"
      >
        <div class="order-main-area">
          <!-- ページタイトル -->
          <div class="order-page-title mx-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
            注文内容の確認
          </div>

          <!-- ステップ -->
          <order-step :stepNo="2" />

          <!-- メッセージ -->
          <div class="order-error-message px-6 mt-6 mb-1">
            <b>注文処理に失敗しました。以下ご確認ください。</b>
          </div>

          <hr class="ec-hr mx-5 my-3" v-if="$vuetify.breakpoint.mdAndUp" />

          <div class="order-procedure-area mx-auto">
            <div class="order-procedure-message px-6">{{ paymentErrorMessage }}</div>

            <div class="pa-4" v-if="paymentError.isRetry">
              <v-form action="/process_order" method="post">
                <!-- 注文確定時に渡すパラメータ -->
                <input type="text" name="mode" hidden value="3" />
                <input type="text" name="regiId" hidden :value="paymentError.registerId" />
                <!-- ここまで -->

                <v-btn
                  type="submit"
                  class="order-procedure-link-btn ec-link-btn py-6 justify-start"
                  tile
                  :block="$vuetify.breakpoint.smAndDown"
                  color="rgba(216, 11, 36, 1)"
                >
                  <span v-if="`${paymentError.type}` === '1'">再度、クレジットカードの承認手続きを行う</span>
                  <span v-else>再度、ＰａｙＰａｙでの支払を行う</span>
                  <i class="order-procedure-link-btn-icon fas fa-arrow-circle-right"></i>
                </v-btn>
              </v-form>
            </div>
          </div>
        </div>

        <div class="order-btn-area">
          <order-action :floatable="false">
            <div class="order-btn-area-contents">
              <v-btn class="order-action-btn ec-link-btn mb-4" tile depressed block color="rgba(0, 0, 0, 0.12)" to="/">
                注文を取り消してトップページへ
              </v-btn>

              <v-btn class="order-action-btn ec-link-btn" tile depressed block color="rgba(0, 0, 0, 0.12)" href="/3Dsecure/secure.html" target="_blank">
                クレジットカードの承認とは<v-icon class="ml-2"> far fa-question-circle </v-icon>
              </v-btn>
            </div>
          </order-action>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, toRefs } from '@vue/composition-api';
import OrderStep from '@/components/cart/order/order-step.vue';
import OrderAction from '@/components/cart/order/order-action.vue';
import CartService from '@/logic/cart.service';
import { PaymentError } from '@/types/payment-error';
import { PAYMENT_ERROR_RETRY_AVAILABLE_LIST, PAYMENT_ERROR_RETRY_UNAVAILABLE_LIST } from '@/constants/payment-error';

export default Vue.extend({
  name: 'order-error-page',
  components: {
    'order-step': OrderStep,
    'order-action': OrderAction
  },
  setup: () => {
    document.title = '【カメラのキタムラ】注文内容の確認';

    const state = reactive({
      paymentError: {} as PaymentError,
      loaded: {
        paymentError: false
      }
    });

    /**
     * 決済エラー情報を取得
     */
    const fetchPaymentError = async () => {
      try {
        state.paymentError = await CartService.fetchPaymentError();
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.paymentError = true;
      }
    };

    onMounted(async () => {
      await fetchPaymentError();
    });

    // 支払いエラーメッセージ
    const paymentErrorMessage = computed(() => {
      const messageList = state.paymentError.isRetry ? PAYMENT_ERROR_RETRY_AVAILABLE_LIST : PAYMENT_ERROR_RETRY_UNAVAILABLE_LIST;
      const error = messageList.find((err) => err.code === state.paymentError.errorWarningCode);
      const errorMessage = error?.message || state.paymentError.errorWarningMsg;
      return errorMessage;
    });

    return {
      ...toRefs(state),
      paymentErrorMessage
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  レジ完了
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

$left-area-width: 70%;

.order {
  // タイトル
  &-page-title {
    font-size: 36px;
    font-weight: bold;
  }

  // レイアウト
  &-main-area {
    position: relative;
    width: $left-area-width;
  }
  &-btn-area {
    margin-left: 5px;
    width: calc(100% - #{$left-area-width} - 5px);

    &-contents {
      width: 100%;
    }
  }

  &-error-message {
    font-size: 1.5em;
    font-weight: bold;
  }

  &-id-area {
    padding: 24px;
    border: 1px solid $ec-black;
  }

  &-procedure {
    &-area {
      max-width: 80%;
    }

    &-message {
      padding: 16px 0;
      white-space: pre-wrap;
    }

    &-link-btn {
      max-width: 70%;
      width: 100%;
      position: relative;
      font-weight: bold;
      color: $text-white;
    }

    &-link-btn-icon {
      position: absolute;
      font-size: 1.5em;
      right: -8px;
    }

    &-param-area {
      border: 1px solid $bg-light-grey;
      border-bottom: none;

      > * {
        border-bottom: 1px solid $bg-light-grey;
      }
    }

    &-param-title {
      background-color: $bg-light-grey;
    }
  }
}

/** -------------------------------
  レジ完了 960px未満
------------------------------- */
.container-narrow {
  .order {
    // レイアウト
    &-main-area,
    &-btn-area {
      margin: 0;
      width: 100%;
    }

    &-error-message {
      font-size: 1em;
    }

    &-id-area {
      padding: 12px;
    }

    &-procedure {
      &-area {
        max-width: 100%;
      }

      &-message {
        padding: 8px 0;
      }

      &-link-btn {
        max-width: 100%;
      }
    }
  }
}
</style>
