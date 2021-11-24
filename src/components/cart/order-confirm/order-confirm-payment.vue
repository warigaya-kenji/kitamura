<template>
  <div class="order-contents payment">
    <div class="order-contents-title d-flex">
      お支払い方法
      <v-btn class="ec-link-btn ml-auto" to="/ec/order#order-payment" color="rgba(0, 0, 0, 0.12)" tile depressed v-if="`${receiveType}` === RECEIVE_TYPE.HOME">
        変更
      </v-btn>
    </div>
    <!-- 支払い方法 960px以上 -->
    <div class="order-contents-area" v-if="$vuetify.breakpoint.mdAndUp">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">お支払い方法</th>
              <th class="text-center">指定詳細</th>
            </tr>
          </thead>
          <tbody class="order-product-info">
            <tr>
              <td class="text-center">
                <span v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">店舗レジ支払い</span>
                <span v-else>{{ selectedPaymentMethod }}</span>
              </td>
              <td>
                <!-- 店舗受取 -->
                <div v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">
                  <div>ご指定の店舗での受取時にご精算させていただきます<br />※店舗により支払い方法が異なる場合がございます</div>
                </div>
                <!-- 宅配 -->
                <div v-else>
                  <!-- クレジットカードの場合 -->
                  <div v-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.CREDIT_CARD">
                    <div>カード番号（下4桁）：{{ paymentMethod.cardNumber }}</div>
                    <div>有効期限：{{ paymentMethod.cardExpired }}</div>
                    <div>支払回数：{{ selectedCardMethod }}</div>
                  </div>

                  <!-- ショッピングクレジットの場合 -->
                  <div v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.SHOPPING_CREDIT">
                    <div>信販会社：{{ selectedShoppingCreditCompany }}</div>
                  </div>

                  <!-- コンビニ決済の場合 -->
                  <div v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.CSV">
                    <div>コンビニ：{{ selectedCSV }}</div>
                  </div>

                  <!-- モバイル決済の場合 -->
                  <div v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.PAYPAY">
                    <div>PayPay</div>
                  </div>

                  <!-- 銀行振込の場合 -->
                  <div v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.BANK_TRANSFER">
                    <div>お客さま名：{{ paymentMethod.transferSourceHolder }}</div>
                  </div>

                  <!-- その他 -->
                  <div v-else>-</div>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <!-- 支払い方法 960px未満 -->
    <div class="order-contents-area" v-else>
      <!-- 店舗で受取る -->
      <div class="payment-area shop" v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">
        <div class="payment-title-area">ご指定の店舗での受取時にご精算させていただきます<br />※店舗により支払い方法が異なる場合がございます</div>
      </div>

      <!-- 宅配で受取る -->
      <div class="payment-area home" v-else>
        <div class="payment-title-area order-contents-item-title">{{ selectedPaymentMethod }}</div>

        <!-- 以下、オプション表示 -->
        <!-- クレジットカードの場合 -->
        <div class="payment-option-area" v-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.CREDIT_CARD">
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">カード番号下4桁</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ paymentMethod.cardNumber }}</v-col>
          </v-row>
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">有効期限</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ paymentMethod.cardExpired }}</v-col>
          </v-row>
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">支払回数</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ selectedCardMethod }}</v-col>
          </v-row>
        </div>

        <!-- ショッピングクレジットの場合 -->
        <div class="payment-option-area" v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.SHOPPING_CREDIT">
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">信販会社</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ selectedShoppingCreditCompany }}</v-col>
          </v-row>
        </div>

        <!-- コンビニ決済の場合 -->
        <div class="payment-option-area" v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.CSV">
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">コンビニ</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ selectedCSV }}</v-col>
          </v-row>
        </div>

        <!-- モバイル決済の場合 -->
        <div class="payment-option-area" v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.PAYPAY">
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">決済サービス</v-col>
            <v-col cols="7" class="order-contents-item-value">PayPay</v-col>
          </v-row>
        </div>

        <!-- 銀行振込の場合 -->
        <div class="payment-option-area" v-else-if="`${paymentMethod.selectPaymentMethod}` === PAYMENT_TYPE.BANK_TRANSFER">
          <v-row dense>
            <v-col cols="5" class="order-contents-item-title">お客さま名</v-col>
            <v-col cols="7" class="order-contents-item-value">{{ paymentMethod.transferSourceHolder }}</v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import {
  RECEIVE_TYPE,
  PAYMENT_TYPE,
  PAYMENT_TYPE_LIST,
  CARD_PAYMENT_METHOD,
  CARD_PAYMENT_METHOD_LIST,
  SHOPPING_CREDIT_METHOD_LIST,
  CSV_PAYMENT_TYPE_NAME_LIST
} from '@/constants/order-register-type';

type PaymentMethod = {
  selectPaymentMethod: number;
  selectCardPaymentMethod?: number;
  cardPaymentCount?: number;
  cardNumber?: string;
  cardExpired?: string;
  selectShoppingCredit?: number;
  paymentDestinationCVS?: string;
  transferSourceHolder?: string;
};

export default Vue.extend({
  name: 'order-confirm-payment',
  components: {},
  props: {
    receiveType: {
      type: Number,
      required: true
    },
    paymentMethod: {
      type: Object as PropType<PaymentMethod>,
      required: true
    }
  },
  setup: (props) => {
    const state = reactive({});

    // 支払い方法
    const selectedPaymentMethod = computed(() => {
      const method = PAYMENT_TYPE_LIST.find((item) => `${item.id}` === `${(props.paymentMethod as PaymentMethod).selectPaymentMethod}`);
      return method?.label;
    });

    // クレジットカードの分割方法
    const selectedCardMethod = computed(() => {
      if ((props.paymentMethod as PaymentMethod).selectCardPaymentMethod == null) {
        return '';
      }
      const method = CARD_PAYMENT_METHOD_LIST.find((item) => `${item.id}` === `${(props.paymentMethod as PaymentMethod).selectCardPaymentMethod}`);
      let methodLabel = method?.label;

      // 分割払いの場合、回数を追加する
      if (`${(props.paymentMethod as PaymentMethod).selectCardPaymentMethod}` === CARD_PAYMENT_METHOD.PAY_IN_INSTALLMENTS) {
        const countMethod = CARD_PAYMENT_METHOD_LIST.find((item) => {
          const labelCount = item.id.split('-')[1];
          return labelCount === `${(props.paymentMethod as PaymentMethod).cardPaymentCount}`;
        });
        methodLabel = countMethod?.label;
      }

      return methodLabel || '';
    });

    // ショッピングクレジットの会社名
    const selectedShoppingCreditCompany = computed(() => {
      if ((props.paymentMethod as PaymentMethod).selectShoppingCredit == null) {
        return '';
      }
      const credit = SHOPPING_CREDIT_METHOD_LIST.find((item) => `${item.id}` === `${(props.paymentMethod as PaymentMethod).selectShoppingCredit}`);
      return credit?.label || '';
    });

    // 選択されたコンビニ名
    const selectedCSV = computed(() => {
      if ((props.paymentMethod as PaymentMethod).paymentDestinationCVS == null) {
        return '';
      }
      const csv = CSV_PAYMENT_TYPE_NAME_LIST.find((item) => `${item.code}` === `${(props.paymentMethod as PaymentMethod).paymentDestinationCVS}`);
      return csv?.text || '';
    });

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      PAYMENT_TYPE,
      selectedPaymentMethod,
      selectedCardMethod,
      selectedShoppingCreditCompany,
      selectedCSV
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.payment {
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .payment {
    &-title-area {
      padding: 12px 18px;
    }

    &-option-area {
      padding: 12px 18px;
      border-top: dashed 1px $ec-light-grey2;
    }
  }
}
</style>
