<template>
  <v-container>
    <p v-if="isTitle" class="text-subtitle-2 mb-0">{{ title }}を買うなら、お支払いラクラク♪</p>
    <p v-if="isTitle" class="text-h6">
      <v-img src="/ec/images2/special/general/sportsday/sitaya.gif" max-width="13px" max-height="22px" class="float-left mt-2 mr-2" />ショッピングクレジット
    </p>
    <p style="clear: both">
      カメラのキタムラおすすめの『ショッピングクレジット』なら、<span class="poins">最長48回払いまで金利手数料が「0円」</span
      >!<br />ショッピングクレジットをぜひご利用ください！
    </p>
    <h3>分割払い例</h3>
    <v-container class="ma-2 ba-gr">
      <v-row class="mb-4">
        <v-col cols="12" sm="6" v-for="(installmentPaymentExample, index) in installmentPaymentExampleList" :key="index">
          <p class="mb-2 text-h6 red--text">分割払い例{{ index === 0 ? '①' : '②' }}</p>
          <div class="s-credit">
            <table cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <th>商品価格</th>
                  <th>分割回数</th>
                  <th>月々の<br />お支払額</th>
                  <th>分割<br />手数料</th>
                </tr>
                <tr>
                  <td>{{ installmentPaymentExample.productPrice }}<span>円</span></td>
                  <td>{{ installmentPaymentExample.numberOfDivisions }}<span>回</span></td>
                  <td class="txt-org"><span>約</span>{{ installmentPaymentExample.monthlyPayment }}<span>円</span></td>
                  <td>{{ installmentPaymentExample.splitFee }}<span>円</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <p class="mt-2 caption mb-6">
      ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
    </p>

    <momoBtn v-if="isMomoBtn" :btntxt="'→ショッピングクレジットを詳しく見る'" :href="'/ec/guide/s_credit_01'" :height="'40px'" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import MomoBtn from '@/components/common/special/momoBtn.vue';

export default Vue.extend({
  name: 'shopping-credit',
  components: {
    momoBtn: MomoBtn,
  },
  props: {
    installmentPaymentExampleList: {
      type: Array,
      required: true
    },
    isTitle: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: false,
      default: 'デジカメ'
    },
    isMomoBtn: {
      type: Boolean,
      required: false,
      default: true
    },
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.txt-org {
  color: #dd6717;
}

.poins {
  background-color: #fff1a8;
  padding: 0 3px;
  color: #d80b24;
}
</style>
