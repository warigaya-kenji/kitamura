<template>
  <div
    id="my-page-review-post"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <!-- レビュー商品情報-->
      <div>
        <product
          :product="{
            janCode: reviewProduct.janCode,
            makerName: reviewProduct.makerName,
            itemName: reviewProduct.itemName,
            imagePath: reviewProduct.images && reviewProduct.images.length ? reviewProduct.images[0].imagePath : ''
          }"
          :isShowReview="false"
          :linkDisabled="reviewConfirming"
          v-if="reviewProduct"
        ></product>
      </div>

      <!-- レビュー評価-->
      <review-rating-table
        ref="reviewRatingTable"
        :value="reviewRating"
        :readonly="reviewConfirming || reviewed"
        class="review-post-rating-table"
        @change="onRatingChange"
      ></review-rating-table>

      <!-- レビュー内容-->
      <review-contents-form
        ref="reviewContentsForm"
        class="my-8"
        :nickname="nickname"
        :value="reviewContents"
        :readonly="reviewConfirming"
        :disabled="reviewed"
        @change="onFormChange"
      ></review-contents-form>

      <div class="review-post-footer-area">
        <!-- 投稿確認ページのフッターボタン -->
        <v-btn class="footer-btn footer-btn-combo" depressed @click="switchConfirming()" v-if="reviewConfirming">
          <v-icon left>fas fa-angle-left</v-icon>戻る
        </v-btn>
        <v-btn class="footer-btn footer-btn-combo" depressed @click="postReview()" v-if="reviewConfirming">
          投稿する<v-icon right>fas fa-angle-right</v-icon>
        </v-btn>

        <!-- 投稿ページ（投稿したことあり）のフッターボタン -->
        <v-btn class="footer-btn ec-link-btn" depressed :to="'/ec/pd/' + janCode" v-else-if="reviewed"><v-icon left>fas fa-angle-left</v-icon>戻る</v-btn>

        <!-- 投稿ページのフッターボタン -->
        <v-btn class="footer-btn" depressed @click="switchConfirming()" v-else>次へ<v-icon right>fas fa-angle-right</v-icon></v-btn>
      </div>

      <!-- ローディング -->
      <overlay-loading v-if="!loaded.review" />
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown">マイページトップへ戻る</back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, ref } from '@vue/composition-api';
import OverlayLoading from '@/components/common/overlay-loading.vue';
import MyPageLayout from '../common/my-page-layout.vue';
import Product from '@/components/common/product.vue';
import ReviewRatingTable, { Rating } from '@/components/my-page/review/review-rating-table.vue';
import ReviewContentsForm, { ReviewContents } from '@/components/my-page/review/review-contents-form.vue';
import BackButton from '@/components/common/back-button.vue';
import ProductService from '@/logic/product.service';
import { PostReview, ProductDetail } from '@/types/product';

type ReviewPartComponent = { enableValidation: () => void; validate: () => boolean };

export default Vue.extend({
  name: 'review-post',
  components: {
    'overlay-loading': OverlayLoading,
    'my-page-layout': MyPageLayout,
    product: Product,
    'review-rating-table': ReviewRatingTable,
    'review-contents-form': ReviewContentsForm,
    'back-button': BackButton
  },
  setup: (props, context) => {
    const { authorizer, errorStore } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: 'レビュー投稿',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'レビュー投稿', linkUrl: '' }
      ],
      // 子コンポーネント
      reviewRatingTable: ref<ReviewPartComponent>(),
      reviewContentsForm: ref<ReviewPartComponent>(),
      // JANコード
      janCode: '',
      // レビューID
      reviewId: ref<number>(),
      // 投稿レビュー商品情報
      reviewProduct: {} as ProductDetail,
      // レビュー内容
      reviewRating: {} as Rating,
      reviewContents: {} as ReviewContents,
      // ニックネーム
      nickname: authorizer.user?.nickname || '',
      // 確認ページへの切替フラグ
      reviewConfirming: false,
      // すでに投稿済みへの切替フラグ
      reviewed: false,
      // ロード状態
      loaded: {
        review: true
      }
    });

    /**
     * レビュー投稿したことがある商品であるかをチェックする
     * @param janCode 商品コード
     */
    const checkReviewedProduct = (janCode: string): void => {
      state.loaded.review = false;

      ProductService.fetchMemberProduct(janCode)
        .then((memberProduct) => {
          state.reviewed = memberProduct.isReviewed;
          if (state.reviewed) {
            errorStore.errorMessage = 'すでに投稿済みです。';
          }
        })
        .catch((error) => console.error(error))
        .finally(() => (state.loaded.review = true));
    };

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

    /**
     * 投稿されたレビューを取得する
     * @param reviewId レビューID
     * @param janCode 商品コード
     */
    const fetchReview = async (reviewId: number): Promise<void> => {
      state.loaded.review = false;

      try {
        const result = await ProductService.fetchReview(reviewId);
        const review = result.reviewInfo.find((rev) => rev.reviewId === reviewId);
        if (review) {
          // 投稿されていたレビュー情報を設定
          state.reviewRating = {
            totalRating: review.totalRating || 0,
            designRating: review.designRating || 0,
            priceRating: review.priceRating || 0,
            operationRating: review.operationRating || 0,
            imageRating: review.imageRating || 0
          };
          state.reviewContents = {
            title: review.title,
            pros: review.pros,
            cons: review.cons
          };
        }
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.review = true;
      }
    };

    /**
     * レビューを投稿する
     */
    const postReview = async () => {
      state.loaded.review = false;

      try {
        const review: PostReview = { ...state.reviewRating, ...state.reviewContents };

        if (state.reviewId) {
          await ProductService.updateReview(state.reviewId, state.janCode, review);
        } else {
          await ProductService.postReview(state.janCode, review);
        }
        context.root.$router.push({ name: 'my-page-review-post-completed' });
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.review = true;
      }
    };

    /**
     * 評価が変更された場合の処理
     * @param rating 評価
     */
    const onRatingChange = (rating: Rating) => {
      state.reviewRating = rating;
    };

    /**
     * レビュー投稿内容のフォームが更新された場合の処理
     */
    const onFormChange = (contents: ReviewContents) => {
      state.reviewContents = contents;
    };

    /**
     * バリデーションを行う
     */
    const validate = (): boolean => {
      const ratingValid = !!state.reviewRatingTable?.validate();
      const formValid = !!state.reviewContentsForm?.validate();

      return ratingValid && formValid;
    };

    /**
     * レビュー投稿と確認画面を切り替える
     */
    const switchConfirming = (): void => {
      if (state.reviewConfirming) {
        state.title = 'レビュー投稿';
        state.breadcrumbs[2].path = 'レビュー投稿';
        state.reviewConfirming = false;
      } else {
        state.reviewRatingTable?.enableValidation();
        state.reviewContentsForm?.enableValidation();

        // rulesの内容が画面に適用されてからバリデーションチェックする
        setTimeout(() => {
          if (validate()) {
            state.title = 'レビュー投稿確認';
            state.breadcrumbs[2].path = 'レビュー投稿確認';
            state.reviewConfirming = true;
          }
        });
      }
    };

    onMounted(() => {
      const params = context.root.$route.params;
      const reviewId = context.root.$route.query?.review_id;
      // janCodeが無い場合は、NotFoundPageに遷移させる
      if (params.janCode) {
        state.janCode = params.janCode;
        fetchProductDetail(state.janCode);

        if (authorizer.isLoggedIn) {
          state.nickname = authorizer.user?.nickname;

          if (reviewId) {
            // レビューIDがある場合、投稿されているレビュー情報を初期値として設定する
            state.reviewId = Number(reviewId);
            fetchReview(state.reviewId);
          } else {
            // レビュー投稿したことのある商品である場合、入力不可とする
            checkReviewedProduct(state.janCode);
          }
        }
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) {
          state.nickname = authorizer.user?.nickname;

          // レビューIDがある場合、投稿されているレビュー情報を初期値として設定する
          const reviewId = context.root.$route.query?.review_id;
          state.reviewId = Number(reviewId);
          if (state.reviewId) {
            fetchReview(state.reviewId);
          } else {
            // レビュー投稿したことのある商品である場合、入力不可とする
            checkReviewedProduct(state.janCode);
          }
        }
      }
    );

    return {
      ...toRefs(state),
      postReview,
      onRatingChange,
      onFormChange,
      switchConfirming
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  レビュー投稿 960px以上
------------------------------- */
.review-post {
  &-footer-area {
    display: flex;

    .footer-btn {
      color: $text-black;
      background-color: rgba(207, 207, 207, 1);
      font-size: 1.2em;
      font-weight: bold;
      height: 80px;
      width: 300px;
      margin: 24px 0;

      &:first-child {
        margin-right: auto;
      }
      &:last-child {
        margin-left: auto;
      }
    }
  }
}

/** -------------------------------
レビュー投稿 960px以下
------------------------------- */
.container-narrow {
  .review-post {
    &-footer-area {
      .footer-btn {
        width: 100%;

        &.footer-btn-combo {
          width: 150px;
        }
      }
    }
  }
}
</style>
