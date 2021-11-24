<template>
  <div class="mb-10">
    <span class="text-subtitle-2 grey--text">おすすめ三脚</span>
    <br />
    <v-sheet :color="color" class="white--text darken-2 pa-2">{{ name }}</v-sheet>
    <v-row class="mb-10">
      <v-col cols="12" sm="4" class="mt-1 pa-4" v-if="type === 1">
        <router-link :to="`/ec/pd/${itemList.janCode}`"><v-img :src="src" max-width="100%" height="auto"/></router-link>
      </v-col>
      <v-col cols="6" sm="2" class="mt-1 pa-4" v-if="type === 2">
        <router-link :to="`/ec/pd/${itemList.janCode}`"><v-img :src="src" max-width="100%" height="auto"/></router-link>
      </v-col>
      <v-col cols="6" sm="2" class="mt-1 pa-4" v-if="type === 2">
        <router-link :to="`/ec/pd/${itemList2.janCode}`"><v-img :src="src2" max-width="100%" height="auto"/></router-link>
      </v-col>
      <v-col cols="12" sm="4" class="mt-1" v-if="type === 3">
        <v-row justify="center" align-content="center" no-gutters>
          <v-col cols="6" sm="6" v-for="(image, index) in images" :key="index">
            <router-link :to="`/ec/pd/${itemList.janCode}`"
              ><v-img :src="image" max-width="100%" height="auto" :class="index == 1 ? 'mt-12' : ''"
            /></router-link>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="8">
        <p class="mt-4 mb-6">{{ txt }}</p>
        <h4>
          <router-link :to="`/ec/pd/${itemList.janCode}`"
            ><span class="main-product-name">{{ itemList.itemName }}</span></router-link
          >
        </h4>
        <p class="mt-2">
          価格:<span class="red--text font-weight-bold text-h6">{{ formatPrice(parseInt(itemList.price)) }}&nbsp;</span><span class="font-small">円</span>
        </p>
        <v-row justify="end" class="mb-2">
          <v-col cols="6">
            <v-hover v-slot="{ hover }">
              <v-btn block :elevation="hover ? 10 : 6" :to="`/ec/pd/${itemList.janCode}`" :color="hover ? '#4296e2' : '#1167b5'" height="45px"
                ><span class="white--text text-subtitle-1">商品詳細を見る</span></v-btn
              >
            </v-hover>
            <v-hover v-slot="{ hover }" v-if="isCartBtn">
              <v-btn block :elevation="hover ? 0 : 8" to="/ec/cart" color="#fcad26" height="45px" class="mt-2"
                ><span class="white--text text-subtitle-1"><v-icon class="mx-2">far fa-cart-arrow-down</v-icon>カートへ</span></v-btn
              >
            </v-hover>
          </v-col>
        </v-row>

        <div v-if="type === 2">
          <h4>
            <router-link :to="`/ec/pd/${itemList2.janCode}`"
              ><span class="main-product-name">{{ itemList2.itemName }}</span></router-link
            >
          </h4>
          <p class="mt-2">
            価格:<span class="red--text font-weight-bold text-h6">{{ formatPrice(parseInt(itemList2.price)) }}&nbsp;</span><span class="font-small">円</span>
          </p>
          <v-row justify="end">
            <v-col cols="6">
              <v-hover v-slot="{ hover }">
                <v-btn block :elevation="hover ? 10 : 6" :to="`/ec/pd/${itemList2.janCode}`" :color="hover ? '#4296e2' : '#1167b5'" height="45px"
                  ><span class="white--text text-subtitle-1">商品詳細を見る</span></v-btn
                >
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="isCartBtn">
                <v-btn block :elevation="hover ? 0 : 8" to="/ec/cart" color="#fcad26" height="45px" class="mt-2"
                  ><span class="white--text text-subtitle-1"><v-icon class="mx-2">far fa-cart-arrow-down</v-icon>カートへ</span></v-btn
                >
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'recommended-tripod',
  props: {
    itemList: {
      type: Array,
      required: true
    },
    itemList2: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    src2: {
      type: String,
      required: false
    },
    txt: {
      type: String,
      required: true
    },
    isCartBtn: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String,
      required: false,
      default: 'red'
    },
    type: {
      type: Number,
      default: 1
    },
    images: {
      type: Array
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state),
      formatPrice
    };
  }
});
</script>
