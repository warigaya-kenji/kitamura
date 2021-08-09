<template>
  <v-container class="mb-5">
    <v-row class="mb-10">
      <v-col class="text-center" cols="12" sm="4">
        <a :href="`/ec/pd/${ProductList.janCode}`" target="_blank"
          ><v-img :src="ProductList.images[0].imagePath" class="hover" max-width="100%" height="auto"></v-img
        ></a>
        <br />
        {{ ProductList.itemName }}<br /><span class="primary--text">{{ formatPrice(parseInt(ProductList.price)) }}</span
        >円(税込)
      </v-col>
      <v-spacer sm="1"></v-spacer>
      <v-col col="12" sm="7" class="mt-2">
        <p v-if="isText">
          分割払いなら一度にかかるご負担を軽減する事ができます。<br />
          ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
        </p>
        <font size="-1">※{{ targetDate }}時点の価格です</font>
        <table class="contingency_t">
          <tbody>
            <tr class="bg-gray">
              <th class="text-subtitle-1">分割回数</th>
              <th class="text-subtitle-1">月々のお支払額</th>
              <th class="text-subtitle-1">分割金利手数料</th>
            </tr>
            <tr>
              <th class="text-subtitle-1">
                <span class="red--text">{{ numberOfTimes }}</span
                >回
              </th>
              <th class="text-subtitle-1">
                約<span class="red--text">{{ amount }}</span
                >円
              </th>
              <th class="text-subtitle-1">
                <span class="red--text">{{ commission }}</span
                >円
              </th>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-if="isCreditBtn">
          <v-btn color="#D73500" class="white--text" href="https://shop.kitamura.jp/sitemap/s_credit_01.html">
            ショッピングクレジットについて詳細はこちら
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'split-content',
  props: {
    ProductList: {
      type: Object,
      required: true,
    },
    numberOfTimes: {
      type: String,
      required: false,
      default: '48'
    },
    amount: {
      type: String,
      required: true
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
      required: true,
    },
    isCreditBtn: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup: () => {
    return {
      formatPrice
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
}
.bg-gray {
  background-color: #d1d1d1;
}
</style>