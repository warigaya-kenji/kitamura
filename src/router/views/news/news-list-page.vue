<template>
  <div
    id="news-list-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- パンくず -->
    <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />

    <div class="news-layout">
      <!-- 年一覧エリア 960px以上 -->
      <div id="news-year-list" class="news-layout-year" v-if="$vuetify.breakpoint.mdAndUp">
        <!-- 年一覧 -->
        <div class="year-link-area">
          <v-btn
            class="year-link-btn"
            :class="{ active: year === currentYear }"
            v-for="year in yearList"
            :key="year"
            block
            tile
            depressed
            color="rgba(221, 221, 221, 1)"
            @click="changeYear(year)"
            >{{ year }}年</v-btn
          >
        </div>
        <!-- その他のリンク -->
        <div class="another-link-area">
          <v-btn
            class="another-link-btn"
            v-for="link in anotherLink"
            :key="link.name"
            block
            tile
            depressed
            color="rgba(221, 221, 221, 1)"
            @click="goAnotherLink(link.url)"
          >
            <span class="another-link-btn-type" :class="link.class">{{ link.name }}</span
            >はコチラ
            <v-icon class="another-link-btn-icon" small color="rgba(179, 179, 179, 1)">fas fa-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>

      <!-- お知らせ一覧エリア -->
      <div id="news-list-contents-area" class="news-layout-list">
        <div class="page-title" v-if="currentYear">新着情報&emsp;{{ currentYear }}年一覧</div>

        <!-- お知らせ一覧 -->
        <template v-if="loaded.newsList">
          <v-list-group class="news-group" v-for="(news, index) in newsList" :key="news.month" no-action :value="index === 0">
            <template v-slot:activator>
              <v-list-item class="news-month">
                <v-list-item-title>{{ news.month }}月</v-list-item-title>
              </v-list-item>
            </template>

            <!-- リスト表示 -->
            <template v-for="item in news.list">
              <v-list-item :key="item.newsNo" class="news-item">
                <a
                  class="news-item-link"
                  :href="item.linkType === 1 ? `${item.linkUrl}` : `/ec/news/detail/${item.newsNo}`"
                  :target="getLinkTarget(item.linkTab)"
                >
                  <span class="news-item-date">
                    {{ formatDate(item.newsDate) }}
                    <span
                      class="news-item-type"
                      :class="{
                        'new-prod-color': item.newsType === 1,
                        'recommended-color': item.newsType === 2,
                        'sale-color': item.newsType === 3,
                        'news-color': [4, 5].includes(item.newsType)
                      }"
                    >
                      {{ convertNewsTypetoText(item.newsType) }}
                    </span>
                  </span>
                  <span class="news-item-title">{{ item.newsTitle }}</span>
                </a>
              </v-list-item>
            </template>
          </v-list-group>
        </template>

        <!-- ローディング -->
        <div class="loading-news-list" v-if="!loaded.newsList">
          <section-loading />
        </div>
      </div>
    </div>

    <!-- その他のリンク -->
    <div class="another-link-area" v-if="$vuetify.breakpoint.smAndDown">
      <v-btn
        class="another-link-btn"
        v-for="link in anotherLink"
        :key="link.name"
        block
        outlined
        tile
        depressed
        color="rgba(112, 112, 112, 1)"
        @click="goAnotherLink(link.url)"
      >
        <span class="another-link-btn-type" :class="link.class">{{ link.name }}</span
        >はコチラ
        <v-icon class="another-link-btn-icon" small color="rgba(179, 179, 179, 1)">fas fa-chevron-right</v-icon>
      </v-btn>
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

type NewsListItem = {
  month: number;
  list: Array<News>;
};

export default Vue.extend({
  name: 'news-list-page',
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
      // その他のリンク一覧
      anotherLink: [
        {
          name: '動画',
          class: 'video-color',
          url: 'https://www.youtube.com/channel/UCuPvM83uruscoLX9Kz88yCw'
        },
        {
          name: 'ShaSha',
          class: 'shasha-color',
          url: 'https://shasha.kitamura.jp/'
        }
      ],
      // 現在表示している年
      currentYear: 0,
      // お知らせ一覧
      newsList: [] as Array<NewsListItem>,
      // ロード状態
      loaded: {
        newsList: false
      }
    });

    /**
     * news一覧をリセット
     */
    const resetNewsList = () => {
      state.newsList = [];
      const startMonth = state.currentYear === today.year() ? today.month() + 1 : 12;
      for (let index = startMonth; index > 0; index--) {
        state.newsList.push({
          month: index,
          list: []
        });
      }
    };

    /**
     * news一覧取得
     */
    const searchNewsList = async () => {
      state.loaded.newsList = false;
      resetNewsList();
      try {
        const newsResult = await NewsService.searchNews(false, {
          from: state.currentYear + '01',
          to: state.currentYear + '12',
          newsType: []
        });
        newsResult.forEach((news) => {
          const resultNewsMonth = dayjs(news.newsDate).month() + 1;
          const index = state.newsList.findIndex((stateNews) => stateNews.month === resultNewsMonth);
          if (index >= 0) state.newsList[index].list.push(news);
        });
      } catch (error) {
        state.newsList = [] as Array<NewsListItem>;
      } finally {
        state.loaded.newsList = true;
      }
    };

    const init = async () => {
      // 年一覧の生成
      for (let index = 0; index < NEWS_YEARS; index++) {
        state.yearList.push(today.year() - index);
      }

      // 表示年の制御
      const params = context.root.$route.params;
      if (params.year) {
        if (state.yearList.includes(+params.year)) {
          state.currentYear = +params.year;
        } else {
          context.root.$router.push({ name: 'not-found-page' });
        }
      } else {
        state.currentYear = today.year();
      }

      await searchNewsList();

      // 各種設定
      document.title = '【カメラのキタムラ】ニュース一覧';
      state.breadcrumbs = [
        {
          path: 'ネットショップ',
          linkUrl: '/'
        },
        {
          path: 'ニュース一覧',
          linkUrl: ''
        }
      ];
    };

    onMounted(() => {
      init();
      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function() {
        init();
      });
    });

    const changeYear = (year: number) => {
      state.currentYear = year;
      searchNewsList();
      window.history.pushState(null, document.title, `/ec/news/${year}`);
    };

    const convertNewsTypetoText = (type: number) => {
      return NEWS_TYPE_LIST[type - 1] ? NEWS_TYPE_LIST[type - 1] : '';
    };

    const goAnotherLink = (url: string) => {
      window.open(url, '_blank');
    };

    /**
     * リンクを開く際のタブの挙動方法を取得する
     * 1：別タブにする 2：同一タブ内
     */
    function getLinkTarget(linkTab: 1 | 2) {
      return linkTab === 2 ? '_self' : '_blank';
    }

    return {
      ...toRefs(state),
      formatDate,
      changeYear,
      convertNewsTypetoText,
      goAnotherLink,
      getLinkTarget
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
.loading-news-list {
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
  color: $text-white !important;
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
  お知らせ一覧 960px以上
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
  margin: 40px 0;

  &-year {
    width: $search-condition-width;
    margin-right: $search-condition-mr;
  }

  &-list {
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

// その他のリンク
.another-link {
  &-area {
    @extend %year-area;
  }

  &-btn {
    @extend %year-btn;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &-type {
      @extend %news-type;
      margin-right: 8px;
    }

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto;
    }
  }
}

// タイトル
.page-title {
  margin-bottom: 60px;
  padding-left: 12px;
  border-left: 12px solid $ec-red;
  font-size: 36px;
  font-weight: bold;
  line-height: 2;
}

// お知らせ一覧
.news {
  &-group {
    margin-bottom: 12px;

    ::v-deep .fa-chevron-down::before {
      content: '\f067';
    }
    &.v-list-group--active {
      ::v-deep .fa-chevron-down::before {
        content: '\f068';
      }
    }
    ::v-deep .v-list-group__header {
      background: $bg-grey;
    }
    ::v-deep .v-list-group__header__append-icon {
      color: $text-grey;
    }
  }
  &-month {
    font-weight: bold;
  }
  &-item {
    padding: 0 32px !important;

    &-link {
      display: flex;
    }

    &-date {
      display: inline-block;
      margin-right: 12px;
      flex: 0 0 auto;
    }

    &-type {
      @extend %news-type;
      margin-left: 12px;
    }

    &-title {
      @include ellipsis-lines(1);
      flex: 1 1 auto;
    }
  }
}

/** -------------------------------
  お知らせ一覧 960px未満
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

    &-list {
      display: block;
      width: 100%;
      max-width: 100%;
      padding-bottom: 12px;
    }
  }

  // タイトル
  .page-title {
    margin: 0 12px 20px;
    padding-left: 0;
    font-size: 24px;
    line-height: 1.5;
    border-left-width: 0;
  }

  // お知らせ一覧
  .news {
    &-item {
      padding: 12px !important;
      border-bottom: dashed 1px $ec-grey;

      &-link {
        flex-wrap: wrap;
      }

      &-date {
        display: block;
        margin-right: 0;
        margin-bottom: 12px;
        flex: 0 0 100%;
      }

      &-title {
        @include ellipsis-lines(2);
        flex: 1 1 100%;
      }
    }
  }

  // その他のリンク
  .another-link {
    &-area {
      padding: 0;
    }

    &-btn {
      @extend %year-btn;
      position: relative;
      border-left: none;
      border-right: none;
      background: $bg-white;

      &:not(:last-child) {
        margin-bottom: 0;
        border-bottom: none;
      }

      &-type {
        @extend %news-type;
        margin-right: 8px;
      }
    }
  }
}
</style>
