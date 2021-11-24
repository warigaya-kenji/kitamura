<template>
  <div>
    <!-- ↓ Array -->
    <v-container v-if="type === 1">
      <v-card :id="index" class="line-g mt-10 pa-0" v-for="(mainProduct, index) in mainProductList" :key="index">
        <v-row justify="center">
          <v-col class="pl-0 pl-sm-10" cols="10" sm="4">
            <router-link :to="`/ec/pd/${mainProduct.janCode}`"
              ><v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="250" height="auto" class="mx-auto"></v-img>
              <p class="text-body-2 main-product-name text-center">{{ mainProduct.itemName }}</p>
            </router-link>
          </v-col>
          <v-col class="text-center mt-4" cols="12" sm="8">
            <p v-if="txt !== ''" class="including-line-breaks text-left px-2 px-sm-16">{{ txt }}</p>
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
              <span class="white--text">{{ mainProduct.isSalesEnd ? '商品詳細はこちら' : btntxt }}</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <!-- ↓ Object -->
    <v-container v-if="type === 2">
      <v-card class="line-g mt-10 pa-0">
        <v-row justify="center">
          <v-col class="pl-sm-10 pl-0" cols="10" sm="4">
            <router-link :to="`/ec/pd/${mainProduct.janCode}`"
              ><v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="250" height="auto" class="mx-auto"></v-img>
              <p class="main-product-name text-center">{{ mainProduct.itemName }}</p>
            </router-link>
          </v-col>
          <v-col class="text-center mt-4" cols="12" sm="8">
            <p v-if="txt !== ''">{{ txt }}</p>
            <p class="text-h6 font-weight-bold" v-if="mainProduct.isSalesEnd">完了商品のため購入できません</p>
            <p class="text-h6" v-else>
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
              <v-icon class="main-product-btn-icon" color="white">fas fa-chevron-right</v-icon>
              <span class="white--text">{{ mainProduct.isSalesEnd ? '商品詳細はこちら' : btntxt }}</span>
            </v-btn>
          </v-col>
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
    // 配列で表示したい時
    mainProductList: {
      type: Array,
      required: false
    },
    // 配列の中のどれかを表示したい時
    mainProduct: {
      type: Object,
      required: false
    },
    // ボタンの色を指定
    btnColor: {
      type: String,
      default: 'rgba(255, 132, 0, 1)'
    },
    // 価格の上にテキストを表示したい時
    txt: {
      type: String,
      default: ''
    },
    // ボタンのテキストを指定
    btntxt: {
      type: String,
      default: 'ご購入はこちら'
    },
    // 配列なのかオブジェクトなのかの指定（デフォルトは配列)
    type: {
      type: Number,
      default: 1
    }
  },
  setup: () => {
    const state = reactive({
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
</style>
