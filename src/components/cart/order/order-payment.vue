<template>
  <div class="order-contents payment" v-show="receiveType === RECEIVE_TYPE.SHOP || paymentTypeList.length">
    <div class="order-contents-title">お支払い方法</div>
    <!-- 選択コンテンツ -->
    <div class="order-contents-area">
      <!-- 店舗で受取る -->
      <div class="payment-area shop" v-if="receiveType === RECEIVE_TYPE.SHOP">
        ご指定の店舗での受取時にご精算させていただきます<br />※店舗により支払い方法が異なる場合がございます<br />【在庫・納期】受取店にご確認ください
      </div>
      <!-- 宅配で受取る -->
      <div class="payment-area home" v-else-if="receiveType === RECEIVE_TYPE.HOME">
        <!-- エラーメッセージ -->
        <div v-if="getErrorMessage('order-payment-type')" class="order-contents-error">
          {{ getErrorMessage('order-payment-type') }}
        </div>
        <div class="home-checkbox-area" :class="`${paymentType.class}`" v-for="(paymentType, index) in paymentTypeList" :key="`${paymentType.id}-${index}`">
          <v-checkbox
            id="order-payment-type"
            class="home-checkbox"
            :class="{
              'order-contents-checkbox': $vuetify.breakpoint.smAndDown,
              dashed: $vuetify.breakpoint.smAndDown && paymentType.id === selectedPaymentType && paymentType.id !== PAYMENT_TYPE.TOKUTOKU
            }"
            v-model="selectedPaymentType"
            :value="paymentType.id"
            :disabled="Boolean(paymentType.impossibleReason)"
            :hide-details="true"
            :rules="rules.paymentType"
          >
            <template slot="label">
              <div class="home-checkbox-text-area">
                <div :class="{ 'home-checkbox-text': $vuetify.breakpoint.mdAndUp }">{{ paymentType.label }}</div>
                <div class="home-checkbox-sub-text" v-if="$vuetify.breakpoint.mdAndUp">
                  <span v-if="paymentType.id === PAYMENT_TYPE.SHOPPING_CREDIT">{{ noInterestRate }}</span
                  >{{ paymentType.text }}
                </div>
              </div>
              <!-- クレジットカード -->
              <div class="home-checkbox-img-area" v-if="paymentType.id === PAYMENT_TYPE.CREDIT_CARD">
                <img class="home-checkbox-img" src="@/assets/cart/jcb.png" />
                <img class="home-checkbox-img" src="@/assets/cart/visa.png" />
                <img class="home-checkbox-img" src="@/assets/cart/master.png" />
                <img class="home-checkbox-img" src="@/assets/cart/american-express.png" />
              </div>
              <!-- ショッピングクレジット -->
              <div class="home-checkbox-img-area" v-else-if="paymentType.id === PAYMENT_TYPE.SHOPPING_CREDIT">
                <img class="home-checkbox-img" src="@/assets/cart/jaccs.png" />
                <img class="home-checkbox-img" src="@/assets/cart/orico.png" />
                <img class="home-checkbox-img" src="@/assets/cart/smbc_moji.png" v-if="displaySmbc" />
              </div>
              <!-- コンビニ決済 -->
              <div class="home-checkbox-img-area" v-else-if="paymentType.id === PAYMENT_TYPE.CSV">
                <img class="home-checkbox-img" src="@/assets/cart/seveneleven.jpeg" />
                <img class="home-checkbox-img" src="@/assets/cart/lawson.png" />
                <img class="home-checkbox-img-l" src="@/assets/cart/famima.png" />
                <img class="home-checkbox-img" src="@/assets/cart/ministop.gif" />
                <img class="home-checkbox-img" src="@/assets/cart/daily.png" />
              </div>
              <!-- モバイル決済 -->
              <div class="home-checkbox-img-area" v-else-if="paymentType.id === PAYMENT_TYPE.PAYPAY">
                <img class="home-checkbox-img" src="@/assets/cart/paypay.png" />
              </div>
              <!-- Pay-easy決済 -->
              <div class="home-checkbox-img-area" v-else-if="paymentType.id === PAYMENT_TYPE.PAY_EASY">
                <img class="home-checkbox-img" src="@/assets/cart/payeasy.png" />
              </div>
              <!-- トクトク据置 -->
              <div class="home-checkbox-img-area" v-else-if="paymentType.id === PAYMENT_TYPE.TOKUTOKU">
                <a href="/special/sale-fair/general/tokutokusueoki/" target="_blank" @click.stop>
                  <v-icon>far fa-question-circle</v-icon>
                </a>
              </div>
            </template>
          </v-checkbox>
          <!-- 選択不可理由 -->
          <div class="home-checkbox-overlay" v-show="paymentType.impossibleReason">
            <div class="home-checkbox-overlay-text">{{ paymentType.label }}は選択できません</div>
            <div class="home-checkbox-overlay-reason">{{ paymentType.impossibleReason }}</div>
          </div>
          <!-- クレジットカード -->
          <div
            class="order-contents-option-area home-sub-option"
            v-if="paymentType.id === PAYMENT_TYPE.CREDIT_CARD"
            v-show="selectedPaymentType === PAYMENT_TYPE.CREDIT_CARD"
          >
            <div class="home-sub-option-text">
              以下のクレジットカードをご利用いただけます。<br /><a class="home-sub-option-text-link" href="/sitemap/cart_card.html" target="_blank"
                >詳しくはコチラをご確認ください。</a
              ><br />以下の項目を入力してください。
            </div>
            <!-- 支払い方法 -->
            <div class="credit-card-input">
              <div class="credit-card-input-text">支払い方法</div>
              <v-select
                class="credit-card-input-select"
                :items="CARD_PAYMENT_METHOD_LIST"
                item-text="label"
                item-value="id"
                v-model="selectedCardPaymentType"
                append-icon="far fa-angle-down"
                outlined
                dense
                hide-details="auto"
                :rules="rules.creditCardCount"
              ></v-select>
            </div>
            <!-- カード番号 -->
            <div class="credit-card-input">
              <div class="credit-card-input-text">カード番号</div>
              <v-text-field
                class="credit-card-input-field"
                v-model="cardNumber"
                outlined
                dense
                type="number"
                hide-details="auto"
                :rules="rules.creditCardNumber"
              ></v-text-field>
            </div>
            <!-- 有効期限 -->
            <div class="credit-card-input">
              <div class="credit-card-input-text">有効期限</div>
              <div class="credit-card-input-expiration-date">
                <v-select
                  class="credit-card-input-select"
                  :items="cardExpirationMonthList"
                  v-model="selectedCardExpirationMonth"
                  append-icon="far fa-angle-down"
                  outlined
                  dense
                  hide-details="auto"
                  :rules="rules.creditCardMonth"
                ></v-select>
                <div class="credit-card-input-expiration-date-text mr-2">月/</div>
                <v-select
                  class="credit-card-input-select"
                  :items="cardExpirationYearList"
                  v-model="selectedCardExpirationYear"
                  append-icon="far fa-angle-down"
                  outlined
                  dense
                  hide-details="auto"
                  :rules="rules.creditCardYear"
                ></v-select>
                <div class="credit-card-input-expiration-date-text">年</div>
              </div>
            </div>
            <!-- セキュリティーコード -->
            <div class="credit-card-input">
              <div class="credit-card-input-text">セキュリティーコード</div>
              <v-text-field
                class="credit-card-input-field"
                v-model="cardSecurityCode"
                outlined
                dense
                type="number"
                hide-details="auto"
                :rules="rules.creditCardCode"
              ></v-text-field>
            </div>
          </div>
          <!-- 代金引換 -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.CASH_ON_DELIVERY"
            v-show="selectedPaymentType === PAYMENT_TYPE.CASH_ON_DELIVERY"
          >
            <div class="home-sub-option-text mb-0">大型配送（大型テレビ、冷蔵庫、洗濯機など）は電子マネーで決済できません。</div>
          </div>
          <!-- ショッピングクレジット -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.SHOPPING_CREDIT"
            v-show="selectedPaymentType === PAYMENT_TYPE.SHOPPING_CREDIT"
          >
            <div class="home-sub-option-text">
              当サイトでのご注文完了後、<br />別途、信販会社より審査の手続きがございます。<br /><a
                class="home-sub-option-text-link"
                href="/sitemap/s_credit_01.html"
                target="_blank"
                >審査方法に関しまして詳しくはこちらをご確認ください。</a
              ><br />（{{ noInterestRate }}回まで分割手数料無料）
            </div>
            <!-- エラーメッセージ -->
            <div v-if="getErrorMessage('order-shopping-credit')" class="order-contents-error">
              {{ getErrorMessage('order-shopping-credit') }}
            </div>
            <div class="shopping-credit-sub-option">
              <v-checkbox
                id="order-shopping-credit"
                class="order-contents-checkbox shopping-credit-sub-option-checkbox pa-3 none"
                v-for="shoppingCredit in shoppingCreditMethodList"
                :key="shoppingCredit.id"
                v-model="selectedShoppingCredit"
                :value="shoppingCredit.id"
                :hide-details="true"
                :rules="rules.shoppingCredit"
              >
                <template slot="label">
                  <img v-if="shoppingCredit.img" class="shopping-credit-sub-option-img" :src="require(`@/assets/cart/${shoppingCredit.img}`)" />
                  <div class="shopping-credit-sub-option-label" v-show="shoppingCredit.displayLabelWithImage">{{ shoppingCredit.label }}</div>
                </template>
              </v-checkbox>
            </div>
          </div>
          <!-- コンビニ決済 -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.CSV"
            v-show="selectedPaymentType === PAYMENT_TYPE.CSV"
          >
            <div class="home-sub-option-text">入金確認後に商品を発送します。</div>
            <!-- 支払い方法 -->
            <div class="csv-input">
              <div class="csv-input-text">お支払いのコンビニをお選びください<span class="csv-input-text-required">（必須）</span></div>
              <!-- 960px以上 -->
              <v-radio-group
                class="csv-input-radio-list"
                v-model="selectedCsvPayment"
                column
                hide-details="auto"
                :rules="rules.csv"
                v-if="$vuetify.breakpoint.mdAndUp"
              >
                <v-radio class="csv-input-radio" v-for="item in CSV_PAYMENT_TYPE_NAME_LIST" :key="item.code" :label="item.text" :value="item.code"></v-radio>
              </v-radio-group>
              <!-- 960px未満 -->
              <v-select
                v-else-if="$vuetify.breakpoint.smAndDown"
                class="csv-input-select"
                :items="CSV_PAYMENT_TYPE_NAME_LIST"
                item-text="text"
                item-value="code"
                v-model="selectedCsvPayment"
                placeholder="次からお選びください"
                append-icon="far fa-angle-down"
                outlined
                dense
                hide-details="auto"
                :rules="rules.csv"
              ></v-select>
            </div>
          </div>
          <!-- モバイル決済 -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.PAYPAY"
            v-show="selectedPaymentType === PAYMENT_TYPE.PAYPAY"
          >
            <div class="home-sub-option-text mb-0">PayPay内の残高登録金額内でご利用いただけます。</div>
          </div>
          <!-- 銀行振込 -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.BANK_TRANSFER"
            v-show="selectedPaymentType === PAYMENT_TYPE.BANK_TRANSFER"
          >
            <div class="home-sub-option-text">
              入金確認後に商品を発送します。<br />
              当店での入金確認のため、お振込される際の<br
                v-if="$vuetify.breakpoint.smAndDown"
              />お客さま名（口座名）をご記入ください。<br />振込口座番号は購入完了後、別途メールにてお知らせ いたします。
            </div>
            <!-- お客さま名 -->
            <div class="bank-transfer-input">
              <div class="bank-transfer-input-text">お客さま名</div>
              <v-text-field
                class="bank-transfer-input-field"
                v-model="bankUserName"
                outlined
                dense
                suffix="様"
                hide-details="auto"
                :rules="rules.bankUserName"
              ></v-text-field>
            </div>
            <div class="home-sub-option-text mb-0">※全角カタカナでご入力ください<br />※振込手数料はお客さまにてご負担ください</div>
          </div>
          <!-- Pay-easy決済 -->
          <div
            class="order-contents-option-area home-sub-option"
            v-else-if="paymentType.id === PAYMENT_TYPE.PAY_EASY"
            v-show="selectedPaymentType === PAYMENT_TYPE.PAY_EASY"
          >
            <div class="home-sub-option-text mb-0">
              入金確認後に商品を発送します。<br /><a class="home-sub-option-text-link" href="https://info.gmopg.jp/payeasy/org-list.html#second" target="_blank"
                >ご利用いただける銀行一覧はコチラ</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 未選択 -->
      <div class="payment-area no-select" v-else>受取方法を選択してください</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, computed, watch } from '@vue/composition-api';
import {
  RECEIVE_TYPE,
  PAYMENT_TYPE,
  PAYMENT_TYPE_LIST,
  CARD_PAYMENT_METHOD_LIST,
  SHOPPING_CREDIT_METHOD_LIST,
  CSV_PAYMENT_TYPE_NAME_LIST
} from '@/constants/order-register-type';
import dayjs from 'dayjs';
import { ImpossibleReasonInfo } from '@/types/cash-register-info';

export type OrderPaymentVal = {
  selectPaymentMethod?: number;
  selectShoppingCredit?: number;
  paymentDestinationCVS?: string;
  transferSourceHolder?: string;
};

export type CardInfo = {
  method: string;
  count?: number;
  number: string;
  expiration: string;
  code: string;
};

export default Vue.extend({
  name: 'order-payment',
  components: {},
  props: {
    // 受け取り方法
    receiveType: {
      type: String,
      required: true
    },
    // レジ情報取得値
    val: {
      type: Object as PropType<OrderPaymentVal>,
      required: false
    },
    // 有効なお支払い方法
    displayPaymentMethods: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: () => []
    },
    // お支払い方法不可理由
    impossibleReasonInfo: {
      type: Array as PropType<Array<ImpossibleReasonInfo>>,
      required: false,
      default: () => []
    },
    // 有効なショッピングクレジット
    displayShoppingCreditMethods: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: () => []
    },
    // 分割回数
    noInterestRate: {
      type: Number,
      required: false
    },
    // バリデーションルール
    rules: {
      type: Object,
      required: true
    },
    // チェックボックス用の表通エラーメッセージ
    getErrorMessage: {
      type: Function,
      required: true
    }
  },
  setup: (props, context) => {
    const thisYear = dayjs().year();
    const state = reactive({
      // お支払い方法
      selectedPaymentType: '',
      // クレジットカード
      selectedCardPaymentType: '',
      cardNumber: '',
      cardExpirationMonthList: [...Array(12).keys()].map((i) => ++i),
      selectedCardExpirationMonth: 0,
      cardExpirationYearList: [...Array(21).keys()].map((i) => thisYear + i),
      selectedCardExpirationYear: 0,
      cardSecurityCode: '',
      // ショッピングクレジット
      selectedShoppingCredit: '',
      displaySmbc: Boolean(process.env.VUE_APP_DISPLAY_SMBC === 'true'),
      // コンビニ決済
      selectedCsvPayment: '',
      // 銀行振り込み
      bankUserName: ''
    });

    /**
     * 宅配：お支払い方法リスト
     */
    const paymentTypeList = computed(() => {
      const displayPaymentTypeList: Array<{
        id: string;
        label: string;
        text: string;
        class: string;
      } & { impossibleReason?: string }> = PAYMENT_TYPE_LIST;
      const impossibleReasonInfo = props.impossibleReasonInfo as Array<ImpossibleReasonInfo>;
      displayPaymentTypeList.forEach((paymentType) => {
        const impossible = impossibleReasonInfo.find((impossible) => impossible.paymentMethod === +paymentType.id);
        paymentType.impossibleReason = impossible ? impossible.impossibleReasonMessage : '';
      });
      const displayPaymentMethods = props.displayPaymentMethods as Array<number>;
      return displayPaymentTypeList.filter((paymentType) => displayPaymentMethods.includes(+paymentType.id) || paymentType.impossibleReason);
    });

    /**
     * 宅配：ショッピングクレジットリスト
     */
    const shoppingCreditMethodList = computed(() => {
      const displayShoppingCreditMethods = (props.displayShoppingCreditMethods as Array<number>) || [];
      return SHOPPING_CREDIT_METHOD_LIST.filter((shoppingCredit) => {
        return displayShoppingCreditMethods.includes(+shoppingCredit.id) && (shoppingCredit.id === '4' ? state.displaySmbc : true);
      });
    });

    // レジ情報の値で更新
    watch(
      () => props.val,
      () => {
        const paymentVal = props.val as OrderPaymentVal;
        state.selectedPaymentType = paymentVal.selectPaymentMethod ? `${paymentVal.selectPaymentMethod}` : '';
        state.selectedShoppingCredit = paymentVal.selectShoppingCredit ? `${paymentVal.selectShoppingCredit}` : '';
        state.selectedCsvPayment = paymentVal.paymentDestinationCVS || '';
        state.bankUserName = paymentVal.transferSourceHolder || '';
      }
    );

    // 支払い方法の選択
    watch(
      () => state.selectedPaymentType,
      () => {
        context.emit('changePaymentType', state.selectedPaymentType || '');
      }
    );

    // クレジットカード情報
    watch(
      () => [state.selectedCardPaymentType, state.cardNumber, state.selectedCardExpirationMonth, state.selectedCardExpirationYear, state.cardSecurityCode],
      ([type, number, expirationMonth, expirationYear, code]) => {
        if (type && number && expirationMonth && expirationYear && code) {
          const splitType = (type as string).split('-');
          context.emit('changeCardInfo', {
            method: splitType[0],
            count: +splitType[1] || 0,
            number: number,
            expiration: `${expirationYear}${('00' + expirationMonth).slice(-2)}`,
            code: code
          } as CardInfo);
        }
      }
    );

    // ショッピングクレジット
    watch(
      () => state.selectedShoppingCredit,
      () => {
        if (state.selectedShoppingCredit) context.emit('changeShoppingCredit', state.selectedShoppingCredit);
      }
    );

    // コンビニ決済
    watch(
      () => state.selectedCsvPayment,
      () => {
        if (state.selectedCsvPayment) context.emit('changeCsvPayment', state.selectedCsvPayment);
      }
    );

    // 銀行振込名義
    watch(
      () => state.bankUserName,
      () => {
        if (state.bankUserName) context.emit('changeBankUserName', state.bankUserName);
      }
    );

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      PAYMENT_TYPE,
      CARD_PAYMENT_METHOD_LIST,
      CSV_PAYMENT_TYPE_NAME_LIST,
      paymentTypeList,
      shoppingCreditMethodList
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.container-wide {
  .payment {
    // 宅配で受取る
    // 共通
    .home {
      &-checkbox-area {
        position: relative;
      }

      &-checkbox {
        height: 80px;
        margin: 0;
        padding: 0 16px 0 32px;
        align-items: center;
        border-bottom: solid 1px $ec-light-grey2;

        &.v-input--is-label-active {
          background: linear-gradient(90deg, $bg-light-grey3 0%, $bg-light-grey3 290px, $bg-white 290px, $bg-white 100%);
        }

        ::v-deep {
          .v-input__slot {
            margin: 0;
          }
          .v-input--selection-controls__input .v-icon {
            font-size: 30px;
          }
          .v-label {
            display: flex !important;
            justify-content: space-between !important;
            margin-left: 12px;
            font-weight: bold;
            color: $ec-black;
          }
        }

        &-text-area {
          display: flex;
          align-items: center;
          margin-right: 8px;
          flex: 1 1 auto;
        }

        &-text {
          flex: 0 0 250px;
        }

        &-sub-text {
          font-weight: normal;
          white-space: break-spaces;
        }

        &-img-area {
          display: flex;
        }

        &-img {
          width: 100%;
        }

        &-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          margin: auto;
          padding: 8px 40px;
          height: 80px;
          color: $text-white;
          background-color: $bg-grey-transparent-9;

          &-text {
            margin-bottom: 4px;
            font-size: 14px;
            font-weight: bold;
          }

          &-reason {
            font-size: 12px;
          }
        }
      }

      &-sub-option {
        padding: 12px;
        border-bottom: solid 1px $ec-light-grey2;

        &-text {
          font-size: 12px;
          margin-bottom: 12px;

          &-link {
            color: $text-secondary;

            &:hover {
              color: $ec-primary;
            }
          }
        }
      }
    }

    // クレジット
    .credit-card {
      .home {
        &-checkbox {
          &-img-area {
            flex: 0 1 80px;
            flex-wrap: wrap;
          }

          &-img {
            width: 50%;
          }
        }
      }

      &-input {
        display: flex;
        align-items: center;
        padding: 0 20px !important;
        margin-bottom: 20px;

        &-text {
          flex: 0 1 200px;
          margin-right: 12px;
          font-weight: bold;
        }

        &-select,
        &-field {
          ::v-deep {
            input,
            .v-input__icon,
            .v-select__selection {
              font-size: inherit;
              transform: scale(calc(14 / 16));
            }
            .v-input__slot {
              margin-bottom: 0;
              padding: 0 8px !important;
            }
            .v-text-field__details {
              margin: 8px 0 0;
            }
          }
        }

        &-expiration-date {
          display: flex;
          flex: 0 1;

          .credit-card-input-select {
            flex: 0 0 94px;
            margin-right: 8px;
          }

          &-text {
            padding-top: 0.5em;
          }
        }
      }
    }

    // ショッピングクレジット
    .shopping-credit {
      .home {
        &-checkbox {
          &-img-area {
            width: 90px;
            flex-direction: column;
            align-items: center;
          }
          &-img {
            width: auto;
            height: 18px;
          }
        }
      }

      &-sub-option {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 20px;

        &-checkbox {
          width: auto !important;
          flex: 0 1 auto;

          ::v-deep .v-label {
            display: flex !important;
          }
        }

        &-img {
          height: 20px;
          margin-right: 12px;
        }
      }
    }

    // コンビニ決済
    .csv {
      .home {
        &-checkbox {
          &-img-area {
            align-items: center;
            flex: 0 1 auto;
          }

          &-img {
            width: 30px;
            &-l {
              width: 50px;
            }
          }
        }
      }

      &-input {
        &-text {
          margin-bottom: 8px;
          font-weight: bold;

          &-required {
            color: $text-primary;
          }
        }

        &-radio-list {
          padding: 0 100px !important;

          ::v-deep {
            .v-input--radio-group__input {
              flex-direction: row !important;
              flex-wrap: wrap;
            }
          }
        }

        &-radio {
          margin-bottom: 20px;
          flex: 0 1 calc((100% - (20px * 2)) / 3);

          &:not(:nth-child(3n)) {
            margin-right: 20px;
          }

          ::v-deep {
            .v-input--selection-controls__input .v-icon {
              font-size: 30px;
            }
          }
        }
      }
    }

    // モバイル決済
    .paypay {
      .home {
        &-checkbox {
          &-img-area {
            width: 74px;
          }
        }
      }
    }

    // 銀行振込
    .bank-transfer {
      &-input {
        display: flex;
        align-items: center;
        margin-bottom: 12px;

        &-text {
          flex: 0 1 auto;
          margin-right: 32px;
          font-weight: bold;
        }

        &-field {
          flex: 0 1 300px;
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
    }

    // Pay-easy決済
    .pay-easy {
      .home {
        &-checkbox {
          &-img-area {
            width: 64px;
          }
        }
      }
    }
  }
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .payment {
    &-area {
      &.no-select {
        padding: 45px 20px;
        text-align: center;
      }

      // 店舗で受取る
      &.shop {
        padding: 12px;
        font-size: 14px;
      }

      // 宅配で受取る
      // 共通
      .home {
        &-checkbox-area {
          position: relative;
        }

        &-checkbox {
          height: 88px;
          align-items: center;

          ::v-deep .v-label {
            display: flex !important;
            justify-content: space-between !important;
          }

          .order-contents-checkbox-sub-label {
            white-space: break-spaces;
          }

          &-img-area {
            display: flex;
          }

          &-img {
            width: 100%;
          }

          &-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            margin: auto;
            padding: 8px 40px;
            height: 88px;
            color: $text-white;
            background-color: $bg-grey-transparent-9;

            &-text {
              margin-bottom: 4px;
              font-size: 14px;
              font-weight: bold;
            }

            &-reason {
              font-size: 12px;
            }
          }
        }

        &-sub-option {
          padding: 12px;
          border-bottom: solid 1px $ec-light-grey2;

          &-text {
            font-size: 12px;
            margin-bottom: 12px;

            &-link {
              color: $text-secondary;
            }
          }
        }
      }

      // クレジット
      .credit-card {
        .home {
          &-checkbox {
            &-img-area {
              flex: 0 1 80px;
              flex-wrap: wrap;
            }

            &-img {
              width: 50%;
            }
          }
        }

        &-input {
          margin-bottom: 12px;

          &-text {
            margin-bottom: 8px;
            font-weight: bold;
          }

          &-select,
          &-field {
            ::v-deep {
              input,
              .v-input__icon,
              .v-select__selection {
                font-size: inherit;
                transform: scale(calc(14 / 16));
              }
              .v-input__slot {
                margin-bottom: 0;
                padding: 0 8px !important;
              }
              .v-text-field__details {
                margin: 8px 0 0;
              }
            }
          }

          &-expiration-date {
            display: flex;
            justify-content: center;

            .credit-card-input-select {
              flex: 0 0 94px;
              margin-right: 8px;
            }

            &-text {
              padding-top: 0.5em;
            }
          }
        }
      }

      // ショッピングクレジット
      .shopping-credit {
        .home {
          &-checkbox {
            &-img-area {
              width: 90px;
              flex-direction: column;
              align-items: center;
            }
            &-img {
              width: auto;
              height: 18px;
            }
          }
        }

        &-sub-option {
          padding-left: 10%;

          &-checkbox {
            ::v-deep .v-label {
              display: flex !important;
            }
          }

          &-img {
            height: 20px;
            margin-right: 12px;
          }
        }
      }

      // コンビニ決済
      .csv {
        .home {
          &-checkbox {
            &-img-area {
              align-items: center;
              flex: 0 1 auto;
            }

            &-img {
              width: 26px;
              &-l {
                width: 50px;
              }
            }
          }
        }

        &-input {
          margin-bottom: 12px;

          &-text {
            margin-bottom: 8px;
            font-weight: bold;

            &-required {
              color: $text-primary;
            }
          }

          &-select {
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
      }

      // モバイル決済
      .paypay {
        .home {
          &-checkbox {
            &-img-area {
              width: 74px;
            }
          }
        }
      }

      // 銀行振込
      .bank-transfer {
        &-input {
          margin-bottom: 12px;

          &-text {
            margin-bottom: 8px;
            font-weight: bold;
          }

          &-field {
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
      }

      // Pay-easy決済
      .pay-easy {
        .home {
          &-checkbox {
            &-img-area {
              width: 64px;
            }
          }
        }
      }
    }
  }
}
</style>
