<template>
  <div>
    <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
      <v-container>
        <v-row>
          <v-col class="text-center" cols="12" sm="5">
            <router-link :to="`/ec/pd/${product.janCode}`"><v-img :src="product.images[0].imagePath" max-width="80%" height="auto"></v-img></router-link><br />
            <a :href="`/ec/pd/${product.janCode}`" class="indigo--text">{{ product.itemName }}</a>
          </v-col>
          <v-col class="text-center mt-4" cols="12" sm="6">
            <p class="text-h6">
              価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
            </p>
            <v-btn
              elevation="3"
              x-large
              dark
              color="orange"
              class="text-h5 font-weight-bold accent-4"
              height="55px"
              width="65%"
              :href="`/ec/pd/${product.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              ご購入はこちら
            </v-btn>
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