<template>
  <router-link
    class="product-review-item"
    :class="{
      'pa-4': $vuetify.breakpoint.mdAndUp,
      'pa-2': $vuetify.breakpoint.smAndDown
    }"
    :to="`/ec/pd/${productReviewInfo.janCode}?tab=3`"
  >
    <!-- 総合レビュー -->
    <div class="product-review-tatal mb-2">
      <v-rating
        class="product-review-tatal-rating d-inline-block mr-2"
        color="rgba(229, 130, 35, 1)"
        background-color="rgba(229, 130, 35, 1)"
        half-increments
        readonly
        dense
        small
        :value="productReviewInfo.ratingTotal"
      ></v-rating>
      <span class="product-review-tatal-text">{{ productReviewInfo.ratingTotal }}</span>
    </div>
    <!-- レビュー件数 -->
    <div class="product-review-count">{{ productReviewInfo.reviewNum }}件のレビュー</div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';

type ProductReviewInfo = {
  // 商品コード
  janCode: string;
  // レビュー件数
  reviewNum: number;
  // レビュー（総合評価）
  ratingTotal: number;
};

export default Vue.extend({
  name: 'product-review-item',
  components: {},
  props: {
    productReviewInfo: {
      type: Object as PropType<ProductReviewInfo>,
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
.product-review-item {
  &-title {
    font-weight: bold;
  }

  .product-review {
    &-tatal {
      &-text {
        font-size: 14px;
      }
    }
  }
}

/** -------------------------------
  商品価格情報 960px未満
------------------------------- */
.container-narrow {
  .product-review-item {
    .product-review {
    }
  }
}
</style>
