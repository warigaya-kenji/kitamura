<template>
  <div>
    <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
      <v-container v-if="mainProductList.length !== 0">
        <v-row>
          <v-col class="text-center" cols="12" sm="5">
            <router-link :to="`/ec/pd/${product.janCode}`"
              ><v-img :src="product.images[0].imagePath.replace(/TN/g, 'M')" max-width="80%" height="auto"></v-img></router-link
            ><br />
            <a :href="`/ec/pd/${product.janCode}`" class="indigo--text">{{ product.itemName }}</a>
          </v-col>
          <v-col class="text-center mt-4" cols="12" sm="6">
            <p class="text-h6">
              価格<span class="text-h4 red--text">{{ product.price }}&nbsp;</span><span class="font-small">円</span>
            </p>
            <v-btn
              elevation="3"
              x-large
              dark
              :color="btnColor"
              class="main-product-btn text-h5 font-weight-bold"
              height="55px"
              width="300px"
              :href="`/ec/pd/${product.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              ご予約はこちら
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  props: {
    mainProductList: {
      type: Array,
      required: true
    },
    btnColor: {
      type: String,
      default: 'rgba(255, 132, 0, 1)'
    }
  },
  setup: () => {
    return {
      formatPrice
    };
  }
});
</script>