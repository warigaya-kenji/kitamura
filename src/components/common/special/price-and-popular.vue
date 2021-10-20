<template>
  <v-container class="mb-6 font-style">
    <v-row>
      <v-col cols="6" sm="3" v-for="(productDetail, index) in productDetailList" :key="`productDetail-${index}`" class="text-left h279">
        <router-link :to="`/ec/pd/${productDetail.janCode}`">
          <v-sheet height="125px" class="mb-1">
            <v-img :src="productDetail.images[0].imagePath" max-width="120" max-height="120" class="mx-auto" />
          </v-sheet>
        </router-link>
        <p class="font-small blue--text mb-2 height-20">
          <router-link :to="`/ec/pd/${productDetail.janCode}`" class="routerLink">{{ productDetail.itemName }}</router-link>
        </p>
        <p v-if="productDetail.price === 'NaN'">完了商品</p>
        <p v-else class="mt-2 mb-0 text-body-2">
          <span v-bind:class="{ 'font-weight-bold': productDetail.priceDiv === 3, exclusive: productDetail.priceDiv === 4 }"
            >{{ productDetail.priceDiv === 1 ? '価格' : productDetail.priceDiv === 3 ? '特別価格' : '価格' }} : </span
          ><span class="red--text">&yen;{{ formatPrice(parseInt(productDetail.price)) }}&nbsp;</span><span class="font-small">(税込)</span><br />
        </p>
        <p v-if="productDetail.isTrade" class="tx-green caption">下取りあればさらにお得</p>
        <v-img
          v-if="productDetail.ratingTotal > 0"
          :src="`https://shop.kitamura.jp/common/images/star${productDetail.ratingTotal}.gif`"
          width="50%"
          height="auto"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { formatPrice } from '@/logic/utils';
import { reactive, toRefs } from '@vue/composition-api';
export default Vue.extend({
  name: 'priceAndPopular',
  props: {
    productDetailList: {
      type: Array,
      required: true
    }
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

<style lang="scss" scoped>
.font-style {
  font-family: 'メイリオ', 'ヒラギノ角ゴ Pro W3', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
}

.h279 {
  height: 279px;
}
.tx-green {
  color: #008000;
}
</style>