<template>
  <div
    id="news-detail-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- パンくず -->
    <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />

    <div class="news-layout">
      <!-- 年一覧エリア 960px以上 -->
      <div id="news-year-detail" class="news-layout-year" v-if="$vuetify.breakpoint.mdAndUp">
        <!-- 年一覧 -->
        <div class="year-link-area">
          <v-btn
            class="year-link-btn"
            :class="{ active: year === newsDetailYear }"
            v-for="year in yearList"
            :key="year"
            block
            tile
            depressed
            color="rgba(221, 221, 221, 1)"
            @click="goNewsList(year)"
            >{{ year }}年</v-btn
          >
        </div>
      </div>

      <!-- お知らせ詳細エリア -->
      <div id="news-detail-contents-area" class="news-layout-detail">
        <div class="news-detail">
          <div class="news-detail-title">{{ newsDetail.newsTitle }}</div>
          <div class="news-detail-belt">
            <span class="news-detail-date">{{ formatDate(newsDetail.newsDate) }}</span>
            <span
              class="news-detail-type"
              :class="{
                'new-prod-color': newsDetail.newsType === 1,
                'recommended-color': newsDetail.newsType === 2,
                'sale-color': newsDetail.newsType === 3,
                'news-color': [4, 5].includes(newsDetail.newsType)
              }"
            >
              {{ convertNewsTypetoText(newsDetail.newsType) }}
            </span>
          </div>
          <div class="news-detail-contents" v-html="newsDetail.newsContent"></div>
        </div>

        <div
          :class="{
            'text-right': $vuetify.breakpoint.mdAndUp,
            'text-center': $vuetify.breakpoint.smAndDown
          }"
        >
          <router-link class="news-list-link" to="/ec/news"
            >新着情報一覧へ戻る<v-icon class="news-list-link-icon" small>fas fa-chevron-right</v-icon></router-link
          >
        </div>

        <div class="loading-news-detail" v-if="!loaded.newsDetail">
          <section-loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { News } from '@/types/news';
import { formatDate } from '@/logic/utils';
import NewsService from '@/logic/news.service';
import { NEWS_TYPE_LIST, NEWS_YEARS } from '@/constants/news';

type BreadcrumbItem = {
  path: string;
  linkUrl: string;
};

export default Vue.extend({
  name: 'news-detail-page',
  components: {
    breadcrumbs: Breadcrumbs,
    'section-loading': SectionLoading
  },
  setup: (_, context) => {
    const today = dayjs(new Date());
    const state = reactive({
      // パンくず
      breadcrumbs: [] as Array<BreadcrumbItem>,
      // 年一覧
      yearList: [] as Array<number>,
      // 現在表示しているお知らせ
      currentNewsId: '',
      // お知らせ詳細
      newsDetail: {} as News,
      newsDetailYear: 0,
      // ロード状態
      loaded: {
        newsDetail: false
      }
    });

    /** -------------------------------------------------------------
     * news詳細取得
     ------------------------------------------------------------- */
    /**
     * news一覧取得
     */
    const searchNewsDetail = async () => {
      state.loaded.newsDetail = false;
      try {
        const newsResult = await NewsService.searchNews(false, {
          newsNo: state.currentNewsId,
          newsType: []
        });
        if (newsResult.length) {
          state.newsDetail = newsResult[0];
          state.newsDetailYear = dayjs(newsResult[0].newsDate).year();
          document.title = '【カメラのキタムラ】' + state.newsDetail.newsTitle;
          state.breadcrumbs = [
            {
              path: 'ネットショップ',
              linkUrl: '/'
            },
            {
              path: 'ニュース一覧',
              linkUrl: '/ec/news'
            },
            {
              path: state.newsDetail.newsTitle,
              linkUrl: ''
            }
          ];
        } else {
          throw 'newsResult.length 0';
        }
      } catch (error) {
        console.error(error);
        state.newsDetail = {} as News;
        context.root.$router.push({ name: 'not-found-page' });
      } finally {
        state.loaded.newsDetail = true;
      }
    };

    const init = async () => {
      const params = context.root.$route.params;
      // idが無い場合は、NotFoundPageに遷移させる
      if (params.id) {
        state.currentNewsId = `${params.id}`;
        await searchNewsDetail();
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }

      // 年一覧の生成
      for (let index = 0; index < NEWS_YEARS; index++) {
        state.yearList.push(today.year() - index);
      }
    };

    onMounted(() => {
      init();
    });

    const convertNewsTypetoText = (type: number) => {
      return NEWS_TYPE_LIST[type - 1] ? NEWS_TYPE_LIST[type - 1] : '';
    };

    const goNewsList = (year: string) => {
      context.root.$router.push({ path: `/ec/news/${year}` });
    };

    return {
      ...toRefs(state),
      formatDate,
      convertNewsTypetoText,
      goNewsList
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
.loading-news-detail {
  height: 20vh;
  width: 100%;
}

// 年一覧
%year-area {
  padding: 12px;
  background: $bg-light-grey2;
}
%year-btn {
  height: 58px !important;
  font-weight: bold;
  text-align: left;

  ::v-deep .v-btn__content {
    display: inline-block;
  }
}

// お知らせタイプ
%news-type {
  display: inline-block;
  width: 80px;
  font-weight: normal;
  text-align: center;
  color: $text-white;
  border-radius: 5px;

  /* カテゴリで分ける */
  &.new-prod-color {
    background: $new-prod-color;
  }
  &.recommended-color {
    background: $recommended-color;
  }
  &.sale-color {
    background: $sale-color;
  }
  &.news-color {
    background: $news-color;
  }
  &.video-color {
    background: $video-color;
  }
  &.shasha-color {
    background: $shasha-color;
  }
}

/** -------------------------------
  お知らせ詳細 960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// レイアウト
$search-condition-width: 350px;
$search-condition-mr: 20px;
.news-layout {
  display: flex;
  max-width: calc(100vw - 20px);
  margin: 20px 0 40px;

  &-year {
    width: $search-condition-width;
    margin-right: $search-condition-mr;
  }

  &-detail {
    width: calc(100% - #{$search-condition-width} - #{$search-condition-mr});
  }
}

// 年一覧
.year-link {
  &-area {
    @extend %year-area;
    margin-bottom: 20px;
  }

  &-btn {
    @extend %year-btn;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    &.active {
      background: $bg-light-red !important;
    }
  }
}

// お知らせ詳細
.news-detail {
  &-title {
    margin-bottom: 20px;
    padding-left: 12px;
    border-left: 12px solid $ec-red;
    font-size: 36px;
    font-weight: bold;
    line-height: 2;
  }

  &-belt {
    margin-bottom: 20px;
    padding: 12px;
    background: $bg-grey;
  }

  &-date {
    font-weight: bold;
  }

  &-type {
    @extend %news-type;
    margin-left: 12px;
  }

  &-contents {
    padding: 20px;
  }
}

// お知らせ一覧リンク
.news-list-link {
  color: $text-blue;

  &-icon {
    margin-left: 12px;
    vertical-align: baseline;
  }
}

/** -------------------------------
  お知らせ詳細 960px未満
------------------------------- */
.container-narrow {
  // レイアウト
  .news-layout {
    display: block;
    margin-top: 8px;
    margin-bottom: 0;
    max-width: 100%;

    &-year {
      display: block;
      width: 100%;
      margin: 0 0 12px;
      padding: 8px;
    }

    &-detail {
      display: block;
      width: 100%;
      max-width: 100%;
      padding-bottom: 12px;
    }
  }

  // お知らせ詳細
  .news-detail {
    margin-bottom: 20px;

    &-title {
      margin: 0 12px 20px;
      padding-left: 0;
      font-size: 24px;
      line-height: 1.5;
      border-left-width: 0;
    }

    &-belt {
      margin-bottom: 12px;
    }

    &-type {
      @extend %news-type;
      margin-left: 20px;
    }

    &-contents {
      padding: 8px;
    }
  }

  // お知らせ一覧リンク
  .news-list-link {
    display: block;
    padding: 20px 8px;
    border-top: 1px solid $ec-light-grey2;
    border-bottom: 1px solid $ec-light-grey2;
  }
}
</style>
