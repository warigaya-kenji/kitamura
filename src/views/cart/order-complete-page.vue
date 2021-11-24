<template>
  <div
    id="order-complete-page"
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
          <div class="order-page-title mx-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">購入完了</div>

          <!-- ステップ -->
          <order-step :stepNo="3" />

          <!-- メッセージ -->
          <div class="order-complete-message px-6 mt-6 mb-1">
            <b class="mr-5">購入完了</b>
            <span>ご注文を受け付けました</span>
          </div>

          <hr class="ec-hr mx-5 my-3" v-if="$vuetify.breakpoint.mdAndUp" />

          <div class="order-procedure-area mx-auto">
            <div class="order-procedure-message px-6">{{ message }}</div>

            <!-- トクトク交換申込みありの場合 -->
            <div class="pa-4 text-center" v-if="cashRegisterResult.isTokutoku">
              <v-btn
                class="order-procedure-link-btn ec-link-btn py-6"
                tile
                :block="$vuetify.breakpoint.smAndDown"
                color="rgba(216, 11, 36, 1)"
                :href="tokutokuProcedureUrl"
                v-if="cashRegisterResult.usePacking"
              >
                梱包キットの申込み手続き<i class="order-procedure-link-btn-icon fas fa-arrow-circle-right"></i>
              </v-btn>
              <v-btn
                class="order-procedure-link-btn ec-link-btn py-6"
                tile
                :block="$vuetify.breakpoint.smAndDown"
                color="rgba(216, 11, 36, 1)"
                :href="tokutokuProcedureUrl"
                v-else
              >
                本人確認書類のご登録へ進む<i class="order-procedure-link-btn-icon fas fa-arrow-circle-right"></i>
              </v-btn>
            </div>

            <!-- ショッピングクレジットでのお支払いの場合 -->
            <div
              class="pa-4"
              v-else-if="
                (`${cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.SHOPPING_CREDIT || `${cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.TOKUTOKU) &&
                  shoppingCreditFormKey
              "
            >
              <!-- 注意喚起 -->
              <div class="order-procedure-caution red-font mb-4">24時間以内にお手続きが完了致しませんとキャンセルとなります。予めご了承ください。</div>

              <v-form class="text-center" :action="cashRegisterResult[shoppingCreditFormKey.url]" method="POST" accept-charset="Shift_JIS">
                <input
                  type="hidden"
                  :name="form[shoppingCreditFormKey.keyName]"
                  :value="form[shoppingCreditFormKey.value]"
                  v-for="form of cashRegisterResult[shoppingCreditFormKey.form]"
                  :key="form[shoppingCreditFormKey.keyName]"
                />
                <v-btn type="submit" class="order-procedure-link-btn ec-link-btn py-6" tile :block="$vuetify.breakpoint.smAndDown" color="rgba(216, 11, 36, 1)">
                  ショッピングクレジットお申込み手続きへ<i class="order-procedure-link-btn-icon fas fa-arrow-circle-right"></i>
                </v-btn>
              </v-form>
            </div>

            <!-- コンビニ決済でのお支払いの場合 -->
            <div class="pa-4" v-else-if="`${cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.CSV">
              <v-row dense class="order-procedure-param-area">
                <v-col cols="6" md="3" class="order-procedure-param-title">オンライン決済番号</v-col>
                <v-col cols="6" md="3" class="order-procedure-param-value">{{ cashRegisterResult.csvInfo.csvEntryNo }}</v-col>
                <v-col cols="6" md="3" class="order-procedure-param-title">確認番号</v-col>
                <v-col cols="6" md="3" class="order-procedure-param-value">{{ cashRegisterResult.csvInfo.cvsConfirmNo }}</v-col>
                <v-col cols="6" md="3" class="order-procedure-param-title">お支払い先</v-col>
                <v-col cols="6" md="9" class="order-procedure-param-value">{{ csvPaymentTypeName }}</v-col>
              </v-row>

              <div class="py-4">
                お支払いの前にお読みください
                <hr class="mb-1" />
                コンビニ決済時、領収書または受領書はコンビニ店頭にてご請求下さい。
              </div>

              <div class="text-center">
                <v-btn
                  class="order-procedure-link-btn ec-link-btn py-6"
                  tile
                  :block="$vuetify.breakpoint.smAndDown"
                  color="rgba(216, 11, 36, 1)"
                  href="/sitemap/riyou_shiharai_index.html#convenience"
                >
                  コンビニ決済の手順を確認する<i class="order-procedure-link-btn-icon fas fa-arrow-circle-right"></i>
                </v-btn>
              </div>
            </div>

            <!-- Pay-easyでのお支払いの場合 -->
            <div class="pa-4" v-else-if="`${cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.PAY_EASY">
              <v-row dense class="order-procedure-param-area">
                <v-col cols="5" md="2" class="order-procedure-param-title">お客様番号</v-col>
                <v-col cols="7" md="4" class="order-procedure-param-value">{{ cashRegisterResult.payeasyInfo.payeasyCustomerNo }}</v-col>
                <v-col cols="5" md="2" class="order-procedure-param-title">収納機関番号</v-col>
                <v-col cols="7" md="4" class="order-procedure-param-value">{{ cashRegisterResult.payeasyInfo.payeasyReceiverNo }}</v-col>
                <v-col cols="5" md="2" class="order-procedure-param-title">確認番号</v-col>
                <v-col cols="7" md="4" class="order-procedure-param-value">{{ cashRegisterResult.payeasyInfo.payeasyConfirmNo }}</v-col>
                <v-col cols="5" md="2" class="order-procedure-param-title">お支払い期限</v-col>
                <v-col cols="7" md="4" class="order-procedure-param-value">{{ cashRegisterResult.payeasyInfo.paymentDueDttm }}</v-col>
              </v-row>

              <div class="py-4">
                お支払いの前にお読みください
                <hr class="mb-1" />
                <ol>
                  <li>
                    以下の金融機関のATMでお支払いいただけます。<br />
                    <span class="d-inline-block">「みずほ銀行」</span>
                    <span class="d-inline-block">「りそな銀行」</span>
                    <span class="d-inline-block">「埼玉りそな銀行」</span>
                    <span class="d-inline-block">「三井純友銀行」</span>
                    <span class="d-inline-block">「ゆうちょ銀行」</span>
                    <span class="d-inline-block">「ちばぎん」</span><br />
                    <span class="order-procedure-annotation">
                      ※一部時間外手数料が発生する金融機関がございます。詳しくはお取引の金融機関にお問い合わせください。<br />
                      ※法令改正のため、ATMから10万円を超える現金の振込はできません。
                    </span>
                  </li>
                  <li>お支払の際、上記収納機関番号、お客様番号、確認番号が必要です。</li>
                  <li>ご利用明細票が領収書となります。お支払い後必ずお受け取りください。</li>
                </ol>
              </div>
            </div>

            <!-- 注文番号 -->
            <div class="order-id-area mx-3">
              <div>ご注文番号：{{ cashRegisterResult.formatedOdrNum }}</div>
              <div>確認メールが送信されます。</div>
            </div>
          </div>
        </div>

        <div class="order-btn-area">
          <!-- 購入履歴ボタンおよび各種価格 -->
          <order-action
            :order="orderSummary"
            :nextBtn="{ label: '購入履歴確認・マイページへ', to: `/ec/mypage/odr/${cashRegisterResult.odrId}` }"
            :floatable="false"
            :orderTradeSummary="orderTradeSummary"
          >
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
import { CashRegisterResult } from '@/types/cash-register-result';
import CartService from '@/logic/cart.service';
import { PAYMENT_TYPE, CSV_PAYMENT_TYPE_NAME_LIST } from '@/constants/order-register-type';
import OrderAction, { OrderSummary, OrderTradeSummary } from '@/components/cart/order/order-action.vue';
import GtmService from '@/logic/gtm.service';
import { SHOPPING_CREDIT_FROM_KEY_LIST } from '@/constants/shopping-credit-form';
import UserService from '@/logic/user.service';

// 手続きが必要な支払い方法
const PAYMENT_TYPES_REQUIRED_PROCEDURE = [PAYMENT_TYPE.SHOPPING_CREDIT, PAYMENT_TYPE.CSV, PAYMENT_TYPE.PAY_EASY];

export default Vue.extend({
  name: 'order-complete-page',
  components: {
    'order-step': OrderStep,
    'order-action': OrderAction
  },
  setup: (_, context) => {
    document.title = '【カメラのキタムラ】購入完了';

    const { authorizer } = context.root.$store;

    const state = reactive({
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      cashRegisterResult: {} as CashRegisterResult,
      orderSummary: {} as OrderSummary,
      orderTradeSummary: {} as OrderTradeSummary,
      loaded: {
        cashRegisterResult: false
      }
    });

    /**
     * レジ処理結果を取得する
     */
    const fetchCashRegisterResult = async () => {
      try {
        const result = await CartService.fetchCashRegisterResult();
        state.cashRegisterResult = result;

        // 注文概要
        state.orderSummary = {
          productCount: result.productDetailInfo.reduce((sum, item) => sum + item.count, 0),
          productPrice: result.productTotalPrice,
          paymentPrice: result.totalPrice,
          pickUpPrice: result.pickUpPrice,
          tax: result.internalTax,
          shippingCharge: result.shippingCharge,
          usePoint: result.usedPoint,
          gainedPoint: result.gaindPoint
        };

        // 下取り概要
        let orderTradeType: 1 | 2 | undefined;
        let orderTradeLink: string | undefined;
        let orderTradeCount = 0;
        if (result.isTokutoku) {
          orderTradeType = 1;
          orderTradeCount = result.tokutokuNum;
          orderTradeLink = `/ec/mypage/odr/tokutoku/${result.odrId}`;
        } else {
          const tradeOrder = await UserService.fetchTradeOrderDetail(result.odrId);
          orderTradeCount = tradeOrder.detailInfo?.length || 0;
          if (orderTradeCount > 0) {
            orderTradeType = 2;
            orderTradeLink = `/ec/mypage/odr/trade/${result.odrId}`;
          }
        }
        state.orderTradeSummary = {
          type: orderTradeType,
          subTotal: result.tokutokuPrice,
          count: orderTradeCount,
          link: orderTradeLink
        };
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.cashRegisterResult = true;
      }
    };

    // ショッピングクレジットの申込み情報のキー
    const shoppingCreditFormKey = computed(() => {
      // URLがあるフォーム情報をPOSTする
      const formKey = SHOPPING_CREDIT_FROM_KEY_LIST.find(
        (item) => state.cashRegisterResult && !!(state.cashRegisterResult as { [key: string]: unknown })[item.url]
      );
      return formKey;
    });

    onMounted(async () => {
      await fetchCashRegisterResult();

      // GTMの注文完了ページ用トリガーを発火する
      /* eslint-disable @typescript-eslint/camelcase */
      const orderItems = state.cashRegisterResult.productDetailInfo.map((item) => ({
        jan_cd: item.janCode,
        count: item.count,
        unit_price: item.unitPrice,
        category1: item.categoryCode?.slice(0, 4) || '',
        category2: item.categoryCode?.slice(0, 7) || '',
        category3: item.categoryCode?.slice(0, 10) || '',
        name: item.itemName
      }));
      const transactionProducts = state.cashRegisterResult.productDetailInfo.map((item) => ({
        sku: item.janCode,
        name: item.itemName,
        quantity: item.count,
        price: item.unitPrice,
        category: item.categoryName
      }));
      const totalPayment = state.cashRegisterResult.productTotalPrice + (state.cashRegisterResult.shippingCharge || 0);
      const totalPaymentExcTax = totalPayment - (state.cashRegisterResult.internalTax || 0);

      const dataLayer = {
        GA_activeCoreAccountId: 35007,
        GA_odrId: state.cashRegisterResult.formatedOdrNum,
        GA_odrItems: orderItems,
        GA_totalPaymentIncTax: totalPayment,
        GA_totalPaymentExcTax: totalPaymentExcTax,
        GA_totalProduct: state.cashRegisterResult.productTotalPrice,
        GA_mediaForgeMerchantId: context.root.$vuetify.breakpoint.mdAndUp ? 6764 : 6772,
        transactionId: state.cashRegisterResult.formatedOdrNum,
        transactionAffiliation: authorizer.user?.netMemberId,
        transactionTotal: totalPayment,
        transactionShipping: state.cashRegisterResult.shippingCharge,
        transactionProducts
      };
      /* eslint-enable @typescript-eslint/camelcase */

      GtmService.trackEvent('order-complete', dataLayer);
    });

    // 画面上に表示するメッセージ
    const message = computed(() => {
      if (state.cashRegisterResult.isTokutoku) {
        if (state.cashRegisterResult.usePacking) {
          return '引き続き梱包キットの申し込み手続きへお進みください。';
        } else {
          return '引き続きトクトク交換手続きに必要な本人書類のご登録へお進みください。';
        }
      } else if (
        `${state.cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.SHOPPING_CREDIT ||
        `${state.cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.TOKUTOKU
      ) {
        return '引き続きショッピングクレジットの手続きをお願いします。';
      } else if (`${state.cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.CSV) {
        return '引き続きコンビニ決済をお願いします。';
      } else if (`${state.cashRegisterResult.paymentMethod}` === PAYMENT_TYPE.PAY_EASY) {
        return '引き続きPay-easy決済をお願いします。';
      } else {
        let defaultMessage = 'ご購入ありがとうございました。';
        if (context.root.$vuetify.breakpoint.mdAndUp) {
          defaultMessage += 'ご注文内容はマイページでご確認いただけます。';
        }
        return defaultMessage;
      }
    });

    // 購入完了後のマイページリンクの無効状態
    const enabledMyPageLink = computed(() => {
      return !state.cashRegisterResult.isTokutoku && !PAYMENT_TYPES_REQUIRED_PROCEDURE.includes(`${state.cashRegisterResult.paymentMethod}`);
    });

    // トクトク交換手続きのURL
    const tokutokuProcedureUrl = computed(() => {
      const boxFlg = state.cashRegisterResult.usePacking ? 0 : 1;
      const formatedOdrNum = state.cashRegisterResult.formatedOdrNum;
      const url = `${state.netChukoUrl}sell/direct/init.do?nsOrderNo=${formatedOdrNum}&boxFlg=${boxFlg}&serviceId=40`;
      return url;
    });

    // コンビニ決済支払先
    const csvPaymentTypeName = computed(() => {
      const paymentType = CSV_PAYMENT_TYPE_NAME_LIST.find((csv) => csv.code === state.cashRegisterResult.csvInfo.cvsPaymentType);
      return paymentType?.text;
    });

    return {
      PAYMENT_TYPE,
      CSV_PAYMENT_TYPE_NAME_LIST,
      ...toRefs(state),
      message,
      tokutokuProcedureUrl,
      enabledMyPageLink,
      shoppingCreditFormKey,
      csvPaymentTypeName
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
  }

  &-complete-message {
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
    }

    &-link-btn {
      max-width: 70%;
      width: 100%;
      position: relative;
      font-weight: bold;
      color: $text-white;

      &:hover {
        color: $text-white;
      }

      ::v-deep .v-btn__content {
        padding-right: 16px;
      }
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

    &-param {
      &-title {
        background-color: $bg-light-grey;
      }

      &-value {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
    }

    &-annotation {
      color: $text-grey;
    }
  }

  &-check-link-btn {
    font-weight: bold;
    color: $text-white;
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

    &-complete-message {
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

      &-caution {
        font-size: 0.9em;
      }

      &-link-btn {
        max-width: 100%;
      }
    }
  }
}
</style>
