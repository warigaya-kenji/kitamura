<template>
  <!-- ↓ サンプル：価格・人気アクセサリー -->
  <div class="product-list mb-10">
    <div class="product-list-wrap">
      <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
        <div class="product-list-item-img mb-4 text-center">
          <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
            ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
          /></router-link>
        </div>
        <div class="product-list-item-name-wrap mb-2">
          <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
            ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
          >
        </div>
        <div class="product-list-item-price-wrap">
          特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
          >（税込）
        </div>
      </div>
    </div>
  </div>
  <!-- ↑ サンプル：価格・人気アクセサリー -->
</template>

<script>
export default {
  name: 'priceAndPopular',
  props: ['productDetailList']
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
</style>