<template>
  <v-app>
    <div class="main-contents-wrap pt-10">
      <v-btn class="rounded-lg white--text" color="blue darken-4" width="500" height="65" @click="isShow = !isShow">
        <span class="mx-12">簡易ショッピングクレジット<br />金額シュミレーター</span>
        <v-icon color="white" right v-show="isShow" large>fas fa-angle-up</v-icon>
        <v-icon color="white" right v-show="!isShow" large>fas fa-angle-down</v-icon>
      </v-btn>
      <div v-show="isShow" class="mt-4">
        <v-card outlined class="pa-4" width="500">
          <p class="text-h6 font-weight-bold">商品代金(税込み)</p>
          <v-row dense>
            <v-col cols="11">
              <v-text-field
                v-if="productPrice === 0"
                clearable
                outlined
                label="金額を入力してください"
                color="blue darken-2"
                dense
                background-color="white"
                v-model="inputProductPrice"
                @blur="judgementRate(inputProductPrice)"
                :rules="[rules.halfWidthNumbers]"
              ></v-text-field>
              <p v-else class="text-right font-weight-bold text-h5">{{ formatPrice(productPrice) }}</p>
            </v-col>
            <v-col cols="1">
              <v-subheader class="black--text">円</v-subheader>
            </v-col>
          </v-row>
          <p class="text-h6 font-weight-bold mt-4">ショッピングクレジット回数</p>
          <v-select
            color="blue darken-2"
            item-color="blue darken-2"
            v-model.number="numberOfTimes"
            :items="items"
            item-text="txt"
            item-value="value"
            label="ご希望のローン回数を選択してください"
            outlined
            @change="simulation()"
          ></v-select>

          <p v-show="error !== ''" class="red--text text--darken-2">{{ error }}</p>

          <div v-show="isShowResult">
            <p class="text-subtitle-1 font-weight-bold mt-4 pl-2">
              <span class="red--text text--darken-2">{{ numberOfTimes }}回払い</span>の場合の1回のお支払額<br />
              ※1回目のみ端数が入ります。
            </p>
            <p v-show="error === ''" class="text-right font-weight-bold text-h5 red--text text--darken-2">約 {{ formatPrice(result) }} 円</p>
            <p v-show="error !== ''" class="text-right font-weight-bold text-h5 red--text text--darken-2">- - - 円</p>
            <p class="line-height">
              簡易シミュレーターのため、実際の金額とは異なります。詳細な金額は<a href="/ec/guide/s_credit_01">こちら</a
              >からご希望の会社を選択してお進みください。<br />
              <span class="font-weight-bold">※一度のご決済のお支払い総額30,000円(税込)以上</span>、かつ月々のお支払いが3,000円(税込)以上からご利用いただけます
            </p>
          </div>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'sample-amount-simulator',
  props: {
    productPrice: {
      type: Number,
      default: 0
    }
  },
  setup: (props) => {
    const state = reactive({
      // 簡易ショッピングクレジット金額シュミレーターを表示するかどうか
      isShow: false,
      // 計算結果を表示するかどうか
      isShowResult: false,
      // エラー文言
      error: '',
      // 商品代金
      inputProductPrice: '',
      // ショッピングクレジット回数
      numberOfTimes: '',
      // 計算結果
      result: 0,
      // ショッピングクレジット回数項目
      items: [
        { txt: '1回払い (実質年率0.0%)', value: 1 },
        { txt: '2回払い (実質年率0.0%)', value: 2 },
        { txt: '3回払い (実質年率0.0%)', value: 3 },
        { txt: '5回払い (実質年率0.0%)', value: 5 },
        { txt: '6回払い (実質年率0.0%)', value: 6 },
        { txt: '10回払い (実質年率0.0%)', value: 10 },
        { txt: '12回払い (実質年率0.0%)', value: 12 },
        { txt: '15回払い (実質年率0.0%)', value: 15 },
        { txt: '20回払い (実質年率0.0%)', value: 20 },
        { txt: '24回払い (実質年率0.0%)', value: 24 },
        { txt: '30回払い (実質年率0.0%)', value: 30 },
        { txt: '36回払い (実質年率0.0%)', value: 36 },
        { txt: '42回払い (実質年率0.0%)', value: 42 },
        { txt: '48回払い (実質年率0.0%)', value: 48 },
        { txt: '54回払い (実質年率0.0%)', value: 54 },
        { txt: '60回払い (実質年率0.0%)', value: 60 },
        { txt: '72回払い (実質年率7.0%)', value: 72 },
        { txt: '84回払い (実質年率7.0%)', value: 84 }
      ],
      // 商品代金に半角数字が入力されているかどうか
      rules: {
        halfWidthNumbers: (v: string) => {
          const pattern = /^\d+$/;
          return pattern.test(v) || '半角数字のみ入力してください';
        }
      }
    });

    // 金利ありの計算
    const interestPaymentCalc = () => {
      const interestPayment = (parseInt(state.inputProductPrice) * 10000 * (7.0 / 100 / 12) * (Math.pow(1 + (7.0 / 100 / 12), parseInt(state.numberOfTimes))) / (Math.pow(1 + (7.0 / 100 / 12), parseInt(state.numberOfTimes)) - 1));
      const formatPayment = Math.floor(interestPayment * 0.000001);
      if (formatPayment * 100 < 3000) state.error = '1回のお支払い金額が3,000円(税込)からお申込みいただけます。';
      return formatPayment * 100;
    };
    // 金利なしの計算
    const calc = () => {
      const payment = parseInt(state.inputProductPrice) / parseInt(state.numberOfTimes);
      const formatPayment = Math.floor(payment * 0.01);
      if (formatPayment * 100 < 3000) state.error = '1回のお支払い金額が3,000円(税込)からお申込みいただけます。';
      return formatPayment * 100;
    };
    // 金額シミュレーター(ショッピングクレジット回数選択時発火)
    const simulation = () => {
      if (props.productPrice !== 0) state.inputProductPrice = props.productPrice as string;
      if (!state.inputProductPrice || parseInt(state.inputProductPrice) < 30000) {
        state.error = '合計額30,000円(税込)からお申込みいただけます。';
        state.isShowResult = false;
      } else {
        state.error = '';
        if (parseInt(state.numberOfTimes) === 72 || parseInt(state.numberOfTimes) === 84) {
          state.result = interestPaymentCalc();
        } else if (parseInt(state.inputProductPrice) < 300000 && parseInt(state.numberOfTimes) === 54) {
          state.result = interestPaymentCalc();
        } else if (parseInt(state.inputProductPrice) < 300000 && parseInt(state.numberOfTimes) === 60) {
          state.result = interestPaymentCalc();
        } else {
          state.result = calc();
        }
        state.isShowResult = true;
      }
    };
    // 3万円以上30万円未満で54回を選択できる場合は金利7％
    const judgementRate = (value: string) => {
      if (parseInt(value) >= 30000 && parseInt(value) < 300000) {
        state.items[14].txt = '54回払い (実質年率7.0%)';
        state.items[15].txt = '60回払い (実質年率7.0%)';
      } else {
        state.items[14].txt = '54回払い (実質年率0.0%)';
        state.items[15].txt = '60回払い (実質年率0.0%)';
      }
    };

    return {
      ...toRefs(state),
      simulation,
      interestPaymentCalc,
      calc,
      judgementRate,
      formatPrice
    };
  }
});
</script>