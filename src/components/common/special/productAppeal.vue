<template>
  <div>
    <v-container>
      <v-card class="line-g pa-4" v-if="type === 1">
        <v-row class="mt-4">
          <v-col cols="12" :sm="sm" v-for="(mainProduct, index) in mainProductList" :key="index" class="text-center my-2">
            <router-link :to="`/ec/pd/${mainProduct.janCode}`">
              <p class="mb-0 text-subtitle-1 font-weight-bold text-left">{{ mainProduct.itemName }}</p>
              <v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" :max-width="maxWidth" :max-height="maxHeight" class="mx-auto mb-2"></v-img>
            </router-link>
            <p class="text-h6 font-weight-bold" v-if="mainProduct.isSalesEnd">完了商品のため購入できません</p>
            <p v-else>
              価格<span class="red--text text--darken-2 font-weight-bold">{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
              ><span class="font-small">円</span>
            </p>
            <v-hover v-slot="{ hover }">
              <a :href="`/ec/pd/${mainProduct.janCode}`">
                <v-btn block :elevation="hover ? 6 : 2" class="text-h6 mb-6 rounded-lg" dark :color="hover ? 'black' : '#da1f31'" height="55px">
                  <span class="white--text">{{ mainProduct.price === 'NaN' ? '商品詳細はこちら' : btntxt }}</span>
                </v-btn>
              </a>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-row v-if="type === 2">
      <v-col cols="12" :sm="sm" v-for="(mainProduct, index) in mainProductList" :key="index" class="text-center">
        <router-link :to="`/ec/pd/${mainProduct.janCode}`">
          <v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" :max-width="maxWidth" :max-height="maxHeight" class="mx-auto mb-2"></v-img>
        </router-link>
        <p class="text-h6 font-weight-bold" v-if="mainProduct.isSalesEnd">完了商品のため購入できません</p>
        <p v-else>
          価格<span class="red--text text--darken-2 font-weight-bold">{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
          ><span class="font-small">円</span>
        </p>
        <v-hover v-slot="{ hover }">
          <a :href="`/ec/pd/${mainProduct.janCode}`">
            <v-btn
              :elevation="hover ? 6 : 2"
              class="text-h6 mb-6 rounded-lg"
              dark
              :color="hover ? 'black' : '#da1f31'"
              :width="$vuetify.breakpoint.mdAndUp ? '382px' : '282px'"
              height="55px"
            >
              <span class="white--text">{{ mainProduct.price === 'NaN' ? '商品詳細はこちら' : btntxt }}</span>
            </v-btn>
          </a>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'product-appeal',
  components: {},
  props: {
    mainProductList: {
      type: Array,
      required: false
    },
    btnColor: {
      type: String,
      default: 'rgba(255, 132, 0, 1)'
    },
    btntxt: {
      type: String,
      default: '商品を見る'
    },
    type: {
      type: Number,
      default: 1
    },
    sm: {
      type: Number,
      required: false,
      default: 12
    },
    maxWidth: {
      type: String,
      required: false,
      default: '254'
    },
    maxHeight: {
      type: String,
      required: false,
      default: '254'
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
.line-g {
  background: url(https://shop.kitamura.jp/ts_rsc/1016/images/bk_line.gif);
}
</style>
