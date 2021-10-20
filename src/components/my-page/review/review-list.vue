<template>
  <div
    id="my-page-review-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <div class="review-list ec-back-color" v-if="!loaded.reviews || (reviews && reviews.length > 0)">
        <v-row>
          <!-- ローディング -->
          <v-col class="loading-review-list" v-if="!loaded.reviews">
            <section-loading />
          </v-col>

          <!-- 投稿したレビュー一覧 -->
          <template v-else>
            <v-col cols="12" md="6" lg="4" class="review-item" v-for="review in getReviews" :key="review.reviewId">
              <div class="review-item-area">
                <product :product="review" :isShowReview="false">
                  <template v-slot:price>
                    <div>{{ review.reviewDttm | date('YYYY/MM/DD HH:mm:ss') }}</div>
                    <div>参考になった人：{{ review.helpfulNum }}人</div>
                  </template>
                </product>
                <review-rating-table :value="review" :combined="true"></review-rating-table>
                <div class="review-title-area">
                  <span class="review-title">{{ review.title }}</span>
                </div>
                <div class="review-operation-area">
                  <v-btn id="remove-review-btn" tile class="remove-review-btn" @click="removeReview(review)">削除</v-btn>
                  <v-btn
                    id="edit-review-btn"
                    :to="`/ec/mypage/review/post/${review.janCode}?review_id=${review.reviewId}`"
                    tile
                    class="edit-review-btn ec-link-btn"
                  >
                    <i class="far fa-edit"></i>編集
                  </v-btn>
                </div>
              </div>
            </v-col>
          </template>
        </v-row>
      </div>

      <!-- 投稿したレビューがない場合 -->
      <div class="not-found-area" v-else>
        <i class="far fa-edit not-found-icon"></i>
        <p>投稿したレビューはありません</p>
      </div>

      <!-- もっと見るボタン -->
      <more-items-button @click="addShowReviewLength()" v-if="reviews.length > showReviewLength" />
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import UserService from '@/logic/user.service';
import MyPageLayout from '../common/my-page-layout.vue';
import { ReviewItem } from '@/types/review-list';
import Product from '@/components/common/product.vue';
import ProductService from '@/logic/product.service';
import { formatPrice, splitList } from '@/logic/utils';
import BackButton from '@/components/common/back-button.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import { ProductDetail } from '@/types/product';
import ReviewRatingTable from './review-rating-table.vue';

type ReviewItemOnScreen = ReviewItem & { makerName?: string; imagePath?: string };

export default Vue.extend({
  name: 'review-list',
  components: {
    'section-loading': SectionLoading,
    'my-page-layout': MyPageLayout,
    product: Product,
    'back-button': BackButton,
    'more-items-button': MoreItemsButton,
    'review-rating-table': ReviewRatingTable
  },
  setup: (props, context) => {
    const { authorizer, errorStore, confirmDialogStore } = context.root.$store;

    const state = reactive({
      // 画面タイトル
      title: '投稿したレビュー',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '投稿したレビュー', linkUrl: '' }
      ],
      // レビュー投稿リスト
      reviews: [] as Array<ReviewItemOnScreen>,
      showReviewAddLength: 9,
      showReviewLength: 9,
      // 取得した投稿したレビューのページ番号
      reviewPage: 1,
      // ロード状態
      loaded: {
        reviews: false
      }
    });

    /**
     * レビュー投稿リストの取得
     */
    const fetchReviewList = async (page?: number) => {
      state.loaded.reviews = false;

      try {
        const isInit = page == null;
        if (isInit) {
          // 初期化
          state.reviewPage = 1;
        }

        // 投稿したレビュー一覧を取得
        const result = await UserService.fetchReviewList(page);
        const resultReviews: Array<ReviewItemOnScreen> = result.reviewInfo;

        // 取得した商品のJANコード一覧
        const janCodeList = resultReviews.map((product) => product.janCode);

        // 商品詳細より「メーカー名」と「画像パス」を取得
        // 商品詳細取得APIはJANコード指定が最大20件のため、分割して取得する
        const splittedJanCodes = splitList(janCodeList, 20);
        const responses = splittedJanCodes.map((splittedJanCodes) => ProductService.fetchProducts(splittedJanCodes, true));
        const productDetails = (await Promise.all(responses)).reduce((list, value) => list.concat(value.items), new Array<ProductDetail>());
        for (const { janCode, makerName, images } of productDetails) {
          const review = resultReviews.find((item) => item.janCode === janCode);
          if (review) {
            review.makerName = makerName;
            review.imagePath = images && images.length > 0 ? images[0].imagePath : undefined;
          }
        }

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

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchReviewList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchReviewList();
      }
    );

    // 投稿したレビューを削除
    const removeReview = async (review: ReviewItem) => {
      // 削除確認
      const confirm = await confirmDialogStore.open('削除してよろしいですか？', '削除');
      if (!confirm) {
        return;
      }

      try {
        await ProductService.deleteReview(review.reviewId, review.janCode);
        await fetchReviewList();
      } catch (error) {
        console.error(error);
        errorStore.errorMessage =
          'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
      }
    };

    // 表示する投稿したレビューを増やす
    const addShowReviewLength = () => {
      state.showReviewLength += state.showReviewAddLength;

      // サーバーにまだ取得していない投稿したレビューがないか確認する
      if (state.reviews.length < state.showReviewLength) {
        state.reviewPage++;
        fetchReviewList(state.reviewPage);
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
      formatPrice,
      removeReview,
      getReviews,
      addShowReviewLength
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  レビュー投稿一覧
------------------------------- */
.loading-review-list {
  height: 20vh;
  width: 100%;
}

.review {
  &-list {
    padding: 8px;

    .row {
      margin: 0;
    }
  }

  &-item {
    padding: 8px;
  }

  &-item-area {
    border: 1px solid $ec-grey;
    background-color: $bg-white;
  }

  &-title {
    @include ellipsis(48px);
  }

  &-title-area {
    font-weight: bold;
    padding: 8px 16px;
  }

  &-operation-area {
    text-align: right;
    padding: 8px 16px;
    margin-bottom: 8px;

    .remove-review-btn,
    .edit-review-btn {
      font-size: 0.9rem;
      background-color: $bg-light-grey;
      border-color: $bg-light-grey;
      color: $text-black;
      margin-left: 8px;
    }
  }
}

.not-found {
  &-area {
    text-align: center;
  }

  &-icon {
    color: $ec-light-grey;
    font-size: 50px;
    margin-bottom: 4px;
  }
}

/** -------------------------------
  レビュー投稿一覧 960px未満
------------------------------- */
.container-narrow {
  .review {
    &-list {
      padding: 0;
    }
    &-item {
      padding: 1px 0;
    }
  }

  .remove-review-btn {
    margin-right: 10px;
  }

  .request-button {
    font-size: 0.9rem;
    font-weight: bold;
  }
}
</style>
