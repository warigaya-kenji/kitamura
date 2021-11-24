<template>
  <div>
    <div
      id="review-list-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="loaded.product && reviewProduct.janCode"
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
        <div class="review-list-page-title mx-5">{{ pageTitle }}</div>

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
        <review-rating-table class="mx-5 mb-5" :value="ratingSummary"></review-rating-table>

        <!-- レビュー一覧 -->
        <div class="review-list-area ec-back-color" v-if="reviews && reviews.length > 0">
          <!-- 個々のレビュー -->
          <router-link :to="`/ec/review/${janCode}/${review.reviewId}`" v-for="review in getReviews" :key="review.reviewId">
            <v-card flat tile class="pa-3 pr-1 my-3 d-flex">
              <div>
                <!-- ヘッダー情報 960px以上 -->
                <div class="review-list-item-header-area pb-2" v-if="$vuetify.breakpoint.mdAndUp">
                  <span class="mr-8">{{ review.reviewDttm | date('YYYY/MM/DD HH:mm:ss') }}</span>
                  <span class="mx-8">{{ review.reviewer || 'ゲスト' }}さん投稿</span>
                  <span class="mx-8">参考になった人：{{ review.helpfulNum }}人</span>
                </div>
                <!-- ヘッダー情報 960px以下 -->
                <div class="review-list-item-header-area pb-2" v-else>
                  <div>
                    <span class="mr-3">{{ review.reviewDttm | date('YYYY/MM/DD HH:mm:ss') }}</span>
                    <span>参考になった人：{{ review.helpfulNum }}人</span>
                  </div>
                  <div>
                    <span>{{ review.reviewer || 'ゲスト' }}さん投稿</span>
                  </div>
                </div>

                <!-- 星評価 -->
                <div class="pb-2">
                  <v-rating
                    class="rating"
                    color="rgba(229, 130, 35, 1)"
                    background-color="rgba(229, 130, 35, 1)"
                    size="20"
                    readonly
                    dense
                    :value="review.totalRating"
                  >
                  </v-rating>
                </div>

                <!-- タイトル -->
                <div>
                  <b>{{ review.title }}</b>
                </div>
              </div>

              <!-- 矢印アイコン表示 -->
              <div class="ml-auto review-item-link-area">
                <v-icon class="review-item-link-icon">fas fa-angle-right</v-icon>
              </div>
            </v-card>
          </router-link>
        </div>

        <!-- レビュー一覧ローディング表示 -->
        <div v-if="!loaded.reviews">
          <section-loading />
        </div>

        <!-- もっと見るボタン -->
        <more-items-button @click="addShowReviewLength()" v-if="reviews.length > showReviewLength" />
      </div>
    </div>

    <!-- 商品が存在しない場合 -->
    <not-found errorMessage="この商品は販売が終了しているか、掲載がございません。" v-else-if="loaded.product" />

    <!-- 全体ローディング表示 -->
    <div v-else>
      <section-loading />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, toRefs } from '@vue/composition-api';
import { ReviewItem } from '@/types/review-list';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Product from '@/components/common/product.vue';
import NotFound from '@/components/common/not-found.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import ReviewRatingTable, { Rating } from '@/components/my-page/review/review-rating-table.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';

export default Vue.extend({
  name: 'review-list-page',
  components: {
    breadcrumbs: Breadcrumbs,
    product: Product,
    'not-found': NotFound,
    'section-loading': SectionLoading,
    'review-rating-table': ReviewRatingTable,
    'more-items-button': MoreItemsButton
  },
  setup: (_, context) => {
    const state = reactive({
      // 画面タイトル
      pageTitle: 'レビュー一覧',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: '商品名', linkUrl: '/' },
        { path: 'レビュー一覧', linkUrl: '' }
      ],
      // JANコード
      janCode: '',
      // レビューされた商品情報
      reviewProduct: {} as ProductDetail,
      // レビューリスト
      reviews: [] as Array<ReviewItem>,
      // 全体のレビュー概要
      ratingSummary: {} as Rating,
      // 取得した投稿レビューのページ番号
      reviewPage: 1,
      // 表示範囲
      showReviewAddLength: 10,
      showReviewLength: 10,
      // ロード状態
      loaded: {
        reviews: false,
        product: false
      }
    });

    /**
     * レビュー投稿リストの取得
     */
    const searchReviews = async (janCode: string, page?: number) => {
      state.loaded.reviews = false;

      try {
        const isInit = page == null;
        if (isInit) {
          // 初期化
          state.reviewPage = 1;
        }

        // 投稿したレビュー一覧を取得
        const result = await ProductService.searchReviews(janCode, page);
        const resultReviews: Array<ReviewItem> = result.reviewInfo;

        // 初期化の場合は配列を置き換える。追加の場合は配列を連結する。
        state.reviews = isInit ? resultReviews : state.reviews.concat(resultReviews);
      } catch (error) {
        console.error(error);
        // 追加取得時は、エラーになっても元の商品表示が消えないようにする
        if (page == null) {
          state.reviews = [] as Array<ReviewItem>;
        }
      } finally {
        state.loaded.reviews = true;
      }
    };

    /**
     * 商品情報を取得する
     * @param janCode 商品コード
     */
    const fetchProduct = async (janCode: string): Promise<void> => {
      state.loaded.product = false;
      try {
        const productDetail = await ProductService.fetchProducts([janCode], false);
        state.reviewProduct = productDetail.items[0];

        state.breadcrumbs[1].path = state.reviewProduct.itemName;
        state.breadcrumbs[1].linkUrl = `/ec/pd/${state.janCode}`;

        state.ratingSummary = {
          totalRating: state.reviewProduct.ratingTotal || 0,
          designRating: state.reviewProduct.ratingDesign || 0,
          priceRating: state.reviewProduct.ratingPrice || 0,
          operationRating: state.reviewProduct.ratingOpe || 0,
          imageRating: state.reviewProduct.ratingImage || 0
        };
      } catch (error) {
        console.error(error);
        state.reviewProduct = {} as ProductDetail;
      } finally {
        state.loaded.product = true;
      }
    };

    onMounted(() => {
      const { janCode } = context.root.$route.params;
      state.janCode = janCode;
      searchReviews(state.janCode);
      fetchProduct(state.janCode);
    });

    // 表示する投稿したレビューを増やす
    const addShowReviewLength = () => {
      state.showReviewLength += state.showReviewAddLength;

      // サーバーにまだ取得していない投稿したレビューがないか確認する
      if (state.reviews.length < state.showReviewLength) {
        state.reviewPage++;
        searchReviews(state.janCode, state.reviewPage);
      }
    };

    /**
     * 画面表示する投稿したレビューを取得する
     */
    const getReviews = computed(() => {
      const reviews = state.reviews.slice(0, state.showReviewLength);
      return reviews;
    });

    return {
      ...toRefs(state),
      addShowReviewLength,
      getReviews
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  一般レビュー一覧
------------------------------- */
.review {
  &-list-page-title {
    font-size: 36px;
    font-weight: bold;
    line-height: 2;
  }

  &-list-area {
    padding: 20px;
  }

  &-item-link-area {
    position: relative;
  }

  &-item-link-icon {
    font-size: 36px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
  }
}

/** -------------------------------
  一般レビュー一覧 960px以下
------------------------------- */
.review {
  &-list-area {
    padding: 20px 8px;
  }

  &-list-item-header-area {
    font-size: 0.9em;
  }
}
</style>
