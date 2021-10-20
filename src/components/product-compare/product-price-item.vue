<template>
  <div class="product-price-item">
    <div
      class="product-price"
      :class="{
        'pa-4': $vuetify.breakpoint.mdAndUp,
        'pa-2': $vuetify.breakpoint.smAndDown
      }"
    >
      <div class="product-price-item-title mb-2">価格</div>
      <div class="product-price-cost mb-2">{{ productPriceInfo.price | price }}円</div>
      <div class="product-price-used" v-if="productPriceInfo.usedCount > 0">
        中古:<span>{{ productPriceInfo.usedPrice | price }}円</span>&nbsp;～&nbsp;<span class="product-used-conut"
          >(<router-link class="product-price-used-link" :to="`/ec/list/?type=u&keyword3=${productPriceInfo.janCode}`" target="_blank"
            >{{ productPriceInfo.usedCount }}点</router-link
          >)</span
        >
      </div>
    </div>

    <!-- 詳細・カートボタン -->
    <product-btn-item
      class="product-price-item-btn"
      :productBtnInfo="{
        janCode: productPriceInfo.janCode,
        isSalesEnd: productPriceInfo.isSalesEnd
      }"
      :borderDashed="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import ProductBtnItem from '@/components/product-compare/product-btn-item.vue';

type ProductPriceInfo = {
  // 商品コード
  janCode: string;
  // 価格
  price: number;
  // 中古価格
  usedPrice: number;
  // 中古商品数
  usedCount: number;
  // 完了品フラク
  isSalesEnd: boolean;
};

export default Vue.extend({
  name: 'product-price-item',
  components: {
    'product-btn-item': ProductBtnItem
  },
  props: {
    productPriceInfo: {
      type: Object as PropType<ProductPriceInfo>,
      required: true
    }
  },
  setup: (props, context) => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  商品価格情報 960px以上
------------------------------- */
.product-price-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-title {
    font-weight: bold;
  }

  .product {
    &-price {
      &-cost {
        color: $ec-primary;
        font-weight: bold;
      }

      &-used {
        &-link {
          color: $text-secondary;

          &:hover {
            color: $text-primary;
          }
        }
      }
    }

    &-detail-btn {
      position: relative;
      width: 100%;
      height: 40px;
      border-color: $ec-grey;
      font-size: 14px;
      font-weight: bold;

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}

/** -------------------------------
  商品価格情報 960px未満
------------------------------- */
.container-narrow {
  .product-price-item {
  }
}
</style>
