<template>
  <div>
    <!-- ↓ サンプル：価格・人気アクセサリー -->
    <v-container class="mb-6">
      <v-row>
        <v-col cols="6" sm="3" v-for="(productDetail, index) in productDetailList" :key="`productDetail-${index}`" class="text-left">
          <router-link :to="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" @error="noimage" /></router-link>
          <p class="font-small blue--text mb-2 height-20">
            <router-link :to="`/ec/pd/${productDetail.janCode}`" class="routerLink">{{ productDetail.itemName }}</router-link>
          </p>
          <p class="mt-2 mb-0" v-bind:class="{ 'font-weight-bold': productDetail.priceDiv === 3, exclusive: productDetail.priceDiv === 4 }">
            {{ productDetail.priceDiv === 1 ? '価格' : productDetail.priceDiv === 3 ? '特別価格' : '価格' }}:<span class="red--text font-small"
              >&yen;{{ productDetail.price }}&nbsp;</span
            ><span class="font-small">(税込)</span><br />
          </p>
          <p v-if="productDetail.isTrade" class="green--text darken-2 caption">下取りあればさらにお得</p>
          <v-img
            v-if="productDetail.ratingTotal > 0"
            :src="`https://shop.kitamura.jp/common/images/star${productDetail.ratingTotal}.gif`"
            width="50%"
            height="auto"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- ↑ サンプル：価格・人気アクセサリー -->
</template>

<script>
import { noimage } from '@/logic/utils';
export default {
  name: 'priceAndPopular',
  props: {
    productDetailList: {
      type: Array,
      required: true
    }
  },
  setup: (props, context) => {
    return {
      noimage
    };
  }
};
</script>

<style lang="scss" scoped>
// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: calc((100% - (12px * 3)) / 4);
    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }
    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }
    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }
    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}

.routerLink {
  color: #1122cc;
}
</style>