<template>
  <div class="review">
    <div class="review-title">商品レビュー</div>
    <div>
      <!-- レビュー総評 -->
      <div class="review-summary">
        <v-card class="review-summary-area" tile outlined>
          <div class="review-summary-total">
            <!-- ボタン 960px未満 -->
            <v-btn class="review-summary-btn" outlined tile block v-if="$vuetify.breakpoint.smAndDown" @click="toReviewEntry()">
              レビューを投稿する
              <v-icon class="review-summary-btn-icon" small color="rgba(0, 0, 0, 1)">fas fa-chevron-right</v-icon>
            </v-btn>
            <div class="review-summary-total-area">
              <v-rating
                class="review-summary-total-rating"
                :value="ratingTotal"
                background-color="warning"
                color="warning accent-4"
                dense
                readonly
                half-increments
                :size="$vuetify.breakpoint.mdAndUp ? '18' : ''"
                :middle="$vuetify.breakpoint.smAndDown"
              >
              </v-rating>
              <span class="secondary-link ml-5" v-if="reviewNum > 0">
                <router-link :to="`/ec/review/${janCode}`">
                  <span class="secondary-link-text">{{ reviewNum }}件のレビュー</span>
                </router-link>
              </span>
              <span v-else class="secondary-link ml-5">{{ reviewNum }}件のレビュー</span>
            </div>
            <!-- ボタン 960px未満 -->
            <v-btn class="review-summary-btn" outlined tile block v-if="$vuetify.breakpoint.mdAndUp" @click="toReviewEntry()">
              レビューを投稿する
              <v-icon class="review-summary-btn-icon" small color="rgba(0, 0, 0, 1)">fas fa-chevron-right</v-icon>
            </v-btn>
          </div>
          <div class="review-summary-individual">
            <div v-for="summary in ratingSummary" :key="summary.rating" class="review-summary-individual-item">
              <v-rating
                :value="summary.rating"
                background-color="warning"
                color="warning accent-4"
                dense
                readonly
                half-increments
                :size="$vuetify.breakpoint.mdAndUp ? '18' : ''"
                :small="$vuetify.breakpoint.smAndDown"
              >
              </v-rating>
              <v-progress-linear :value="summary.percentage" color="warning" height="25" class="review-summary-individual-progress"> </v-progress-linear>
              <div class="review-summary-individual-text">{{ summary.percentage }}%</div>
            </div>
          </div>
        </v-card>
      </div>

      <!-- 個々のレビュー -->
      <div class="review-list" v-if="reviewNum">
        <v-card v-for="review in filterShowReview" :key="review.reviewDttm" class="review-item" width="100%" tile outlined>
          <div class="review-item-user">
            {{ review.reviewDttm }}
            <span class="ml-5">{{ review.reviewer }}さんの投稿</span>
          </div>
          <div class="review-item-title">
            <v-rating :value="review.rating" background-color="warning" color="warning accent-4" dense readonly half-increments size="18"></v-rating>
            <span class="review-item-title-text">{{ review.reviewTitle }}</span>
          </div>
          <div class="review-item-description">{{ review.comment }}</div>
        </v-card>

        <!-- もっと見る -->
        <v-btn class="review-list-more-btn" outlined tile :to="`/ec/review/${janCode}`"
          >もっと見る
          <v-icon class="review-list-more-btn-icon" small color="rgba(0, 0, 0, 1)">fas fa-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <div v-if="!reviewNum">レビューはまだ投稿されていません。</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import { Review } from '@/types/product';

export default Vue.extend({
  name: 'product-reviews',
  components: {},
  props: {
    // JANコード
    janCode: {
      required: true
    },
    reviewInfo: {
      // レビュー情報
      required: true // 必須かどうか
    },
    ratingTotal: {
      // レビュー平均星数（総合評価）
      required: true // 必須かどうか
    },
    reviewNum: {
      // レビュー件数
      required: true // 必須かどうか
    }
  },
  setup(props, context) {
    const { authorizer } = context.root.$store;

    const state = reactive({
      ratingSummary: [
        {
          rating: 5,
          percentage: ''
        },
        {
          rating: 4,
          percentage: ''
        },
        {
          rating: 3,
          percentage: ''
        },
        {
          rating: 2,
          percentage: ''
        },
        {
          rating: 1,
          percentage: ''
        }
      ]
    });

    /**
     * 表示するレビュー件数を最大10件に絞る
     */
    const filterShowReview = computed(() => (props.reviewInfo as Array<Review>).slice(0, 10));

    /**
     * 星ごとの割合を計算する
     */
    function calcPercentage(rating: number) {
      if (!props.reviewNum) {
        return 0;
      }

      const count = (props.reviewInfo as Array<Review>).filter((review) => review.rating === rating).length;
      return Math.round((count / (props.reviewNum as number)) * 100);
    }

    state.ratingSummary.forEach((item) => {
      item.percentage = `${calcPercentage(item.rating)}`;
    });

    /**
     * レビュー投稿ボタン押下処理
     */
    const toReviewEntry = () => {
      if (authorizer.isLoggedIn) {
        context.root.$router.push({ name: 'my-page-review-post', params: { janCode: props.janCode as string } });
      } else {
        alert('レビュー投稿にはログインが必要です。');
        authorizer.openLoginMenu();
      }
    };

    return {
      ...toRefs(state),
      toReviewEntry,
      filterShowReview
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// secondary色のリンク
.secondary-link {
  vertical-align: middle;

  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

/** -------------------------------
  商品レビュー 960px以上
------------------------------- */
.review {
  // タイトル
  &-title {
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 28px;
    color: rgba(0, 0, 0, 1);
  }

  // 総評
  &-summary {
    margin-bottom: 12px;

    &-area {
      display: flex;
      padding: 12px 20px;
    }

    // 総レビュー
    &-total {
      display: flex;
      align-content: space-between;
      flex: 1 1 auto;
      margin-right: 12px;
      padding: 20px 40px;
      flex-wrap: wrap;

      &-area {
        flex: 1 1 100%;
        margin-bottom: 12px;
      }

      &-rating {
        display: inline-block;
      }
    }

    &-btn {
      flex: 1 1 100%;
      position: relative;
      height: unset !important;
      padding: 12px 0 !important;

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
      }
    }

    // 各評価
    &-individual {
      display: flex;
      flex-wrap: wrap;
      flex: 2 2 auto;

      &-item {
        display: flex;
        flex: 1 1 50%;

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }

      &-progress {
        width: 300px;
        margin: 0 8px;
      }

      &-text {
        width: 3em;
        font-size: 18px;
        color: rgba(0, 113, 133, 1);
        word-wrap: normal;
      }
    }
  }

  // 個々のレビュー
  &-list {
    // もっと見る
    &-more-btn {
      display: block;
      width: 600px;
      height: unset !important;
      padding: 16px 0 !important;
      margin: 20px auto 0;

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
      }
    }
  }

  &-item {
    padding: 12px 20px;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &-title {
      display: flex;
      margin: 12px 0px 8px;

      &-text {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
      }
    }

    &-description {
      white-space: pre-wrap; // 改行コード「\r\n」に対応
    }
  }
}

/** -------------------------------
  商品レビュー 960px未満
------------------------------- */
.sp {
  .review {
    padding: 0 12px;

    // タイトル
    &-title {
      font-size: 18px;
    }

    // 総評
    &-summary {
      margin-bottom: 12px;

      &-area {
        flex-direction: column;
        padding: 12px 0;
        border: none;
      }

      // 総レビュー
      &-total {
        margin-right: 0;
        padding: 0;
      }

      &-btn {
        margin-bottom: 12px;
      }

      // 各評価
      &-individual {
        &-item {
          flex: 1 1 100%;
        }

        &-progress {
          width: unset;
          flex: 1 1 auto;
        }

        &-text {
          font-size: 14px;
        }
      }
    }

    // 個々のレビュー
    $item-padding-x: 12px;
    &-list {
      // もっと見る
      &-more-btn {
        width: 100%;
        padding: 12px 0 !important;
      }
    }
    &-item {
      padding: 12px 0px;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      &-user {
        padding: 0 $item-padding-x;
      }

      &-title {
        display: block;
        margin: 8px 0px 12px;
        padding: 0 $item-padding-x;
        border-bottom: dotted 1px $ec-grey;

        &-text {
          display: inline-block;
          margin: 8px 0;
          margin-left: 0;
          font-size: 16px;
        }
      }

      &-description {
        padding: 0 $item-padding-x;
        white-space: pre-wrap; // 改行コード「\r\n」に対応
      }
    }
  }
}
</style>
