<template>
  <div>
    <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
      <v-container>
        <v-row>
          <v-col class="text-center" cols="12" sm="5">
            <router-link :to="`/ec/pd/${product.janCode}`"><img :src="product.images[0].imagePath" class="mx100pr" /></router-link>
            <p>
              <a :href="`/ec/pd/${product.janCode}`">{{ product.itemName }}</a>
            </p>
          </v-col>
          <v-col class="text-center mt-4" cols="12" sm="6">
            <p class="text-h6">
              価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
            </p>
            <v-btn
              elevation="3"
              x-large
              dark
              color="red"
              class="text-h5 font-weight-bold accent-4"
              height="55px"
              width="65%"
              :href="`/ec/pd/${product.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              ご購入はこちら
            </v-btn>
            <div class="mt-4" v-if="index === 0">
              <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';

export default {
  props: {
    mainProductList: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const mainProductList = computed(() => props.mainProductList);

    return { mainProductList };
  }
};
</script>