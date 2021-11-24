<template>
  <div>
    <div
      id="review-detail-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="loaded.product && reviewProduct.janCode && loaded.review && review.reviewId"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <!-- パンくず -->
        <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />

        <!-- ページタイトル -->
        <div class="review-detail-page-title mx-5">{{ pageTitle }}</div>

        <!-- ヘッダー情報 960px以上 -->
        <div class="review-detail-header-area mx-7" v-if="$vuetify.breakpoint.mdAndUp">
          <span class="mr-8">{{ review.reviewDttm | date('YYYY/MM/DD HH:mm:ss') }}</span>
          <span class="mx-8">{{ review.reviewer || 'ゲスト' }}さん投稿</span>
          <span class="mx-8">参考になった人：{{ review.helpfulNum }}人</span>
        </div>
        <!-- ヘッダー情報 960px以下 -->
        <div class="review-detail-header-area mx-5" v-else>
          <div>
            <span class="mr-3">{{ review.reviewDttm | date('YYYY/MM/DD HH:mm:ss') }}</span>
            <span>参考になった人：{{ review.helpfulNum }}人</span>
          </div>
          <div>
            <span>{{ review.reviewer || 'ゲスト' }}さん投稿</span>
          </div>
        </div>

        <!-- レビュー商品情報-->
        <div class="mx-5">
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
        </div>

        <!-- レビュー評価-->
        <review-rating-table :value="getRating" class="mx-5 review-post-rating-table"></review-rating-table>

        <!-- レビュー内容-->
        <review-contents-form class="mx-5 my-8" :value="getContents"></review-contents-form>

        <div class="mx-5 review-detail-footer-area">
          <v-btn class="footer-btn" depressed :disabled="helpfuled" @click="postHelpful(reviewId)">参考になった</v-btn>
        </div>
        <div class="mx-5 review-detail-footer-area">
          <v-btn class="footer-btn ec-link-btn" depressed exact :to="`/ec/review/${janCode}`"><v-icon left>fas fa-angle-left</v-icon>一覧に戻る</v-btn>
        </div>
      </div>
    </div>

    <!-- 商品が存在しない場合 -->
    <not-found errorMessage="この商品は販売が終了しているか、掲載がございません。" v-else-if="loaded.product && !reviewProduct.janCode" />

    <!-- レビューが存在しない場合 -->
    <not-found errorMessage="このレビューは投稿がございません。" v-else-if="loaded.review" />

    <!-- ローディング表示 -->
    <div v-else>
      <section-loading />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, ref, toRefs } from '@vue/composition-api';
import { ReviewItem } from '@/types/review-list';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Product from '@/components/common/product.vue';
import NotFound from '@/components/common/not-found.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import ReviewRatingTable, { Rating } from '@/components/my-page/review/review-rating-table.vue';
import ReviewContentsForm, { ReviewContents } from '@/components/my-page/review/review-contents-form.vue';
import UserService from '@/logic/user.service';

export default Vue.extend({
  name: 'review-detail-page',
  components: {
    breadcrumbs: Breadcrumbs,
    product: Product,
    'not-found': NotFound,
    'section-loading': SectionLoading,
    'review-rating-table': ReviewRatingTable,
    'review-contents-form': ReviewContentsForm
  },
  setup: (_, context) => {
    const { authorizer } = context.root.$store;

    const state = reactive({
      // 画面タイトル
      pageTitle: 'レビュー詳細',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: '商品名', linkUrl: '/' },
        { path: 'レビュー詳細', linkUrl: '' }
      ],
      // JANコード
      janCode: '',
      // レビューID
      reviewId: ref<number>(),
      // レビューされた商品情報
      reviewProduct: {} as ProductDetail,
      // レビュー
      review: {} as ReviewItem,
      // 参考になった
      helpfuled: false,
      // ロード状態
      loaded: {
        review: false,
        product: false
      }
    });

    /**
     * 以前に「参考になった」かをチェックする
     * @param janCode 商品コード
     */
    const checkHelpful = (reviewId: number, janCode: string): void => {
      ProductService.fetchMemberProduct(janCode)
        .then((memberProduct) => {
          state.helpfuled = memberProduct.helpfulReviewId.some((id) => reviewId === id);
        })
        .catch((error) => console.error(error));
    };

    /**
     * レビュー投稿の取得
     */
    const fetchReview = async (reviewId: number) => {
      try {
        // 投稿したレビューを取得
        const result = await ProductService.fetchReview(reviewId);
        const review = result.reviewInfo.find((rev) => rev.reviewId === reviewId);
        if (review) {
          state.review = review;
        }
      } catch (error) {
        console.error(error);
        state.review = {} as ReviewItem;
      } finally {
        state.loaded.review = true;
      }
    };

    /**
     * 商品情報を取得する
     * @param janCode 商品コード
     */
    const fetchProduct = async (janCode: string): Promise<void> => {
      try {
        const productDetail = await ProductService.fetchProducts([janCode], true);
        state.reviewProduct = productDetail.items[0];

        state.breadcrumbs[1].path = state.reviewProduct.itemName;
        state.breadcrumbs[1].linkUrl = `/ec/pd/${state.janCode}`;
      } catch (error) {
        console.error(error);
        state.reviewProduct = {} as ProductDetail;
      } finally {
        state.loaded.product = true;
      }
    };

    /**
     * 参考になったことを登録
     */
    const postHelpful = (reviewId: number) => {
      if (authorizer.isLoggedIn) {
        UserService.postHelpful(reviewId).then(() => {
          // 参考なった人数および参考なったボタンの状態を更新
          fetchReview(reviewId);
          checkHelpful(reviewId, state.janCode);
        });
      } else {
        alert('参考になったレビューの登録にはログインが必要です。');
        const successCallback = () => {
          UserService.postHelpful(reviewId).then(() => {
            // 参考なった人数および参考なったボタンの状態を更新
            fetchReview(reviewId);
            checkHelpful(reviewId, state.janCode);
          });
        };
        authorizer.openLoginMenu(successCallback);
      }
    };

    onMounted(() => {
      const { janCode, reviewId } = context.root.$route.params;
      state.janCode = janCode;
      state.reviewId = Number(reviewId);
      fetchReview(state.reviewId);
      fetchProduct(state.janCode);
      checkHelpful(state.reviewId, state.janCode);
    });

    const getRating = computed(
      (): Rating => ({
        totalRating: state.review.totalRating || 0,
        designRating: state.review.designRating || 0,
        priceRating: state.review.priceRating || 0,
        operationRating: state.review.operationRating || 0,
        imageRating: state.review.imageRating || 0
      })
    );

    const getContents = computed(
      (): ReviewContents => ({
        title: state.review.title,
        pros: state.review.pros,
        cons: state.review.cons
      })
    );

    return {
      ...toRefs(state),
      getRating,
      getContents,
      postHelpful
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  一般レビュー詳細
------------------------------- */
.review-detail {
  &-page-title {
    font-size: 36px;
    font-weight: bold;
    line-height: 2;
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
      margin-bottom: 24px;
    }
  }
}

/** -------------------------------
  一般レビュー詳細 960px未満
------------------------------- */
.container-narrow {
  .review-detail {
    &-header-area {
      font-size: 0.9em;
    }

    &-footer-area {
      .footer-btn {
        width: 100%;
      }
    }
  }
}
</style>
