<template>
  <div>
    <!-- ↓ Array -->
    <v-container v-if="type === 1">
      <v-card :id="index" class="line-g mt-10 pa-0" v-for="(mainProduct, index) in mainProductList" :key="index">
        <v-row justify="center">
          <v-col :class="$vuetify.breakpoint.mdAndUp ? 'pl-10' : ''" cols="10" sm="4">
            <router-link :to="`/ec/pd/${mainProduct.janCode}`"
              ><v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="100%" height="auto"></v-img>
              <p class="main-product-name text-center">{{ mainProduct.itemName }}</p>
            </router-link>
          </v-col>
          <v-spacer cols="0" sm="1" v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
          <v-col class="text-center mt-4" cols="12" sm="6">
            <p v-if="txt !== ''">{{ txt }}</p>
            <p class="text-h6 font-weight-bold" v-if="mainProduct.isSalesEnd">完了商品のため購入できません</p>
            <p class="text-h6" v-else>
              価格<span class="text-h4 red--text">{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span><span class="font-small">円</span>
            </p>
            <v-btn
              class="main-product-btn text-h5 font-weight-bold mb-6"
              dark
              width="300px"
              :color="btnColor"
              height="60px"
              :href="`/ec/pd/${mainProduct.janCode}`"
            >
              <v-icon class="main-product-btn-icon" color="white">fas fa-chevron-right</v-icon>
              <span class="white--text" v-if="mainProduct.isSalesEnd">商品詳細はこちら</span>
              <span v-else class="white--text">{{ btntxt }}</span>
            </v-btn>
          </v-col>
          <v-spacer cols="0" sm="1" v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        </v-row>
      </v-card>
    </v-container>

    <!-- ↓ Object -->
    <v-container v-if="type === 2">
      <v-card class="line-g mt-10 pa-0">
        <v-row justify="center">
          <v-col :class="$vuetify.breakpoint.mdAndUp ? 'pl-10' : ''" cols="10" sm="4">
            <router-link :to="`/ec/pd/${mainProduct.janCode}`"
              ><v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="100%" height="auto"></v-img>
              <p class="main-product-name text-center">{{ mainProduct.itemName }}</p>
            </router-link>
          </v-col>
          <v-spacer cols="0" sm="1" v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
          <v-col class="text-center mt-4" cols="12" sm="6">
            <p v-if="txt !== ''">{{ txt }}</p>
            <p class="text-h6">
              価格<span class="text-h4 red--text">&yen;{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span><span class="font-small">(税込)</span>
            </p>
            <v-btn
              class="main-product-btn text-h5 font-weight-bold mb-6"
              dark
              width="300px"
              :color="btnColor"
              height="60px"
              :href="`/ec/pd/${mainProduct.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              {{ btntxt }}
            </v-btn>
          </v-col>
          <v-spacer cols="0" sm="1" v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'price-purchase',
  components: {},
  props: {
    mainProductList: {
      type: Array,
      required: false
    },
    mainProduct: {
      type: Object,
      required: false
    },
    btnColor: {
      type: String,
      default: 'rgba(255, 132, 0, 1)'
    },
    txt: {
      type: String,
      default: ''
    },
    btntxt: {
      type: String,
      default: 'ご購入はこちら'
    },
    type: {
      type: Number,
      default: 1
    }
  },
  setup: () => {
    const state = reactive({
      test: 'https://shopimg.kitamura.jp/images/pd/ef5/034/215/d4e/e54/ad6/c8d/fbf/065/9ff/c88/9qe/7n1/l/TN.jpg'
    });

    return {
      formatPrice,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.main-product {
  &-name {
    color: $text-blue;
  }

  &-btn {
    position: relative;

    &-icon {
      position: absolute;
      left: 5px;
    }
  }
}

.line-g {
  background: url(/ec/images2/special/camera/bag/feature/trekking/bk_line.gif);
}
</style>
