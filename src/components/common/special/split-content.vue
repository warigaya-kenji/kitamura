<template>
  <v-container>
    <v-row class="mb-10" justify="center">
      <v-col cols="11" sm="4" class="px-0">
        <a :href="`/ec/pd/${ProductList.janCode}`" target="_blank">
          <div class="px-8"><v-img :src="ProductList.images[0].imagePath.replace(/TN/g, 'M')" class="hover" max-width="100%" height="auto"></v-img></div
        ></a>
        <p class="text-subtitle-2 text-center">
          {{ ProductList.itemName }}<br /><span class="primary--text">{{ formatPrice(parseInt(ProductList.price)) }}</span
          >円
        </p>
      </v-col>
      <v-col col="12" sm="8" :class="$vuetify.breakpoint.smAndDown ? 'mt-2 pa-0' : ''">
        <p v-if="isText">
          分割払いなら一度にかかるご負担を軽減する事ができます。<br />
          ショッピングクレジットの分割払いなら、最大{{ maximumInstallmentPayment }}回分割払いまで分割金利手数料を当店が負担致します。
        </p>
        <font size="-1" v-if="targetDate !== ''">※{{ targetDate }}時点の価格です</font>
        <table class="contingency_t text-subtitle-2">
          <tbody>
            <tr class="bg-gray">
              <th>分割回数</th>
              <th>月々のお支払額</th>
              <th>分割金利手数料</th>
            </tr>
            <tr>
              <th>
                <span class="red--text">{{ numberOfTimes }}</span
                >回
              </th>
              <th v-if="secondAmount === '0'">
                約<span class="red--text">{{ amount }}</span
                >円
              </th>
              <th v-else>
                初回<span class="red--text">{{ amount }}</span
                >円<br />
                ２回目以降<span class="red--text">{{ secondAmount }}</span
                >円
              </th>
              <th>
                <span class="red--text">{{ commission }}</span
                >円
              </th>
            </tr>
          </tbody>
        </table>
        <p class="caption" v-if="isMax60Txt">
          <span class="text-subtitle-2 red--text">★宅配受取限定★今ならショッピングクレジット最大60回まで分割金利手数料0円！</span><br />
          <span class="red--text">※</span>60回無金利はジャックスショッピングクレジットに限ります<br />
          <span class="red--text">※</span>ショッピングクレジット60回まで無金利キャンペーンは｢宅配受取限定｣のサービスです
        </p>
        <v-row v-if="isCreditBtn" justify="center">
          <v-col cols="10" sm="10">
            <v-hover v-slot="{ hover }">
              <v-btn
                :elevation="hover ? 12 : 2"
                block
                height="45px"
                color="#D73500"
                class="white--text text-center main-product-btn py-1"
                href="/ec/guide/s_credit_01"
              >
                ショッピングクレジットについて<br v-if="$vuetify.breakpoint.smAndDown" />詳細はこちら
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { formatPrice } from '@/logic/utils';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'split-content',
  props: {
    ProductList: {
      type: Object,
      required: true
    },
    numberOfTimes: {
      type: String,
      required: false,
      default: '48'
    },
    maximumInstallmentPayment: {
      type: String,
      required: false,
      default: '48'
    },
    amount: {
      type: String,
      required: true
    },
    secondAmount: {
      type: String,
      default: '0'
    },
    commission: {
      type: String,
      required: false,
      default: '0'
    },
    isText: {
      type: Boolean,
      required: false,
      default: true
    },
    targetDate: {
      type: String,
      required: true
    },
    isCreditBtn: {
      type: Boolean,
      required: false,
      default: false
    },
    isMax60Txt: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup: () => {
    const state = reactive({});

    return {
      formatPrice,
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
.contingency_t {
  border-collapse: collapse;
  text-align: center;
  margin: 0 0 20px 0;
  width: 100%;
}
.contingency_t th {
  text-align: center;
  vertical-align: top;
  color: #151515;
  border: 1px solid #b9b9b9;
  width: 30%;
  padding: 10px 6px;
  vertical-align: middle;
  font-weight: normal;
}
.bg-gray {
  background-color: #d1d1d1;
}
</style>