<template>
  <div
    id="my-page-review-post-completed"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <div class="review-post-completed-area">
        <!-- レビュー商品情報-->
        <product
          :product="{
            janCode: reviewProduct.janCode,
            makerName: reviewProduct.makerName,
            itemName: reviewProduct.itemName,
            imagePath: reviewProduct.images && reviewProduct.images.length ? reviewProduct.images[0].imagePath : ''
          }"
          :isShowReview="false"
          v-if="reviewProduct"
        ></product>

        <div class="review-post-completed-message-area">
          <span class="d-inline-block">投稿が完了しました。</span><span class="d-inline-block">ありがとうございました。</span>
        </div>
      </div>

      <div class="review-post-completed-footer-area">
        <v-btn class="footer-btn ec-link-btn" depressed :to="'/ec/pd/' + janCode" v-if="$vuetify.breakpoint.mdAndUp">
          <v-icon left>fas fa-angle-left</v-icon>元の商品に戻る
        </v-btn>
      </div>
    </my-page-layout>

    <back-button :to="'/ec/pd/' + janCode" v-if="$vuetify.breakpoint.smAndDown">元の商品に戻る</back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, ref } from '@vue/composition-api';
import MyPageLayout from '../common/my-page-layout.vue';
import Product from '@/components/common/product.vue';
import BackButton from '@/components/common/back-button.vue';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';

export default Vue.extend({
  name: 'review-post-completed',
  components: {
    'my-page-layout': MyPageLayout,
    product: Product,
    'back-button': BackButton
  },
  setup: (_, context) => {
    const state = reactive({
      // 画面タイトル
      title: '投稿完了',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '投稿したレビュー', linkUrl: '/ec/mypage/review/list' },
        { path: '投稿完了', linkUrl: '' }
      ],
      // JANコード
      janCode: '',
      // レビューID
      reviewId: ref<number>(),
      // 投稿レビュー商品情報
      reviewProduct: {} as ProductDetail
    });

    /**
     * 商品詳細を取得する
     * @param janCode 商品コード
     */
    const fetchProductDetail = async (janCode: string): Promise<void> => {
      try {
        const result = await ProductService.fetchProducts([janCode], true);
        state.reviewProduct = result.items[0];
      } catch (error) {
        console.error(error);
        state.reviewProduct = {} as ProductDetail;
      }
    };

    onMounted(() => {
      const params = context.root.$route.params;
      const reviewId = context.root.$route.query?.review_id;
      // janCodeが無い場合は、NotFoundPageに遷移させる
      if (params.janCode) {
        state.janCode = params.janCode;
        fetchProductDetail(state.janCode);
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  レビュー投稿完了 960px以上
------------------------------- */
.review-post-completed {
  &-area {
    border: 1px solid $ec-grey;
  }

  &-message-area {
    font-size: 1.125em;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }

  &-footer-area {
    text-align: center;

    .footer-btn {
      color: $text-black;
      background-color: rgba(207, 207, 207, 1);
      font-size: 1.2em;
      font-weight: bold;
      height: 80px;
      width: 300px;
      margin: 24px 0;
    }
  }
}

/** -------------------------------
レビュー投稿完了 960px以下
------------------------------- */
.container-narrow {
  .review-post-completed {
    &-area {
      border: none;
    }
  }
}
</style>
