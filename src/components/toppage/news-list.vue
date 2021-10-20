<template>
  <div
    :class="{
      'content-area-wide': $vuetify.breakpoint.mdAndUp,
      'content-area-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      class="content-title"
      :class="{
        'content-title-large': $vuetify.breakpoint.mdAndUp,
        'content-title-small': $vuetify.breakpoint.smAndDown
      }"
    >
      新着情報
    </div>

    <!-- 新着情報 960px以上・未満共通 -->
    <div class="news-list-area">
      <v-row>
        <v-col class="news-filter">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" outlined class="filter-btn">
                <span>絞り込み<v-icon class="right-btn-icon">fas fa-caret-down</v-icon></span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group v-model="selectedNewsType" mandatory @change="showNewsLength = 8">
                <v-list-item>
                  <v-list-item-title>すべて</v-list-item-title>
                </v-list-item>
                <v-list-item v-for="newsType in newsTypes" :key="newsType" :value="newsType">
                  <v-list-item-title v-text="newsType"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row v-if="getLoadedAll">
        <v-col xs="6" sm="6" md="4" lg="3" v-for="news in getShowNewsList" :key="news.newsTitle" class="news-item">
          <news-item :item="news" />
        </v-col>
        <v-col class="loading-area" v-if="!getLoadedAll">
          <section-loading />
          <p v-if="!getShowNewsList || getShowNewsList.length === 0">新着情報はありません。</p>
        </v-col>
      </v-row>
    </div>

    <!-- もっと見るボタン -->
    <v-btn
      color="rgba(122,118,118,1)"
      tile
      block
      class="more-items-button"
      :class="{
        'button-wide': $vuetify.breakpoint.mdAndUp,
        'button-narrow': $vuetify.breakpoint.smAndDown
      }"
      @click="showNewsLength = showNewsLength + 8"
      v-if="getNewsListLength > showNewsLength"
    >
      もっと見る
      <i class="more-items-button-icon fas fa-plus"></i>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, ref, toRefs } from '@vue/composition-api';
import NewsItem from '@/components/toppage/news-item.vue';
import NewsService from '@/logic/news.service';
import { CategoryTag, NewsOnScreen } from '@/types/news';
import TopConfigsService from '@/logic/tsv/top-configs.service';
import { getNewsLinkUrl, getYouTubeThumbnailUrl, getYouTubeUrl, isDebugMode } from '@/logic/utils';
import SectionLoading from '@/components/common/section-loading.vue';
import dayjs from 'dayjs';

const NEWS_TYPES = ['新製品', 'セール', 'おすすめ', '動画', 'ShaSha', '特集'];

export default Vue.extend({
  name: 'news-list',
  components: {
    'news-item': NewsItem,
    'section-loading': SectionLoading
  },
  setup: (props, context) => {
    // 表示する新着情報の最大個数
    const MAX_COUNT = 32;
    const state = reactive({
      // 選択された新着情報の種類
      selectedNewsType: '',
      // 表示する新着情報の長さ
      showNewsLength: 8,
      // 新着情報
      newsList: ref<Array<NewsOnScreen>>([]),

      // ロード状態
      loaded: {
        shasha: false,
        news: false,
        movieNews: false,
        specialSaleNew: false
      }
    });

    /**
     * Shashaを取得する
     */
    NewsService.searchShashaContent()
      .then((shashaResult) => {
        state.loaded.shasha = true;
        if (!shashaResult) {
          return;
        }

        // 表示に使う変数のみ抜き出す
        const shashaList: Array<NewsOnScreen> = shashaResult.map((item) => ({
          newsDate: new Date(item.pub_date),
          newsType: 'ShaSha',
          newsTitle: item.title,
          linkType: 1,
          linkTab: 2,
          linkUrl: item.link_url,
          newsContent: item.description,
          thumbnailUrl: item.thumbnail_url
        }));

        state.newsList = state.newsList.concat(shashaList);
      })
      .catch((error) => {
        state.loaded.shasha = true;
        console.log(error);
      });

    /**
     * 新製品・おすすめ・セールを取得する
     */
    const lastMonth = dayjs()
      .subtract(1, 'months')
      .format('YYYYMM');
    const thisMonth = dayjs().format('YYYYMM');

    NewsService.searchNews(false, {
      newsType: [1, 2, 3],
      limit: 32,
      from: lastMonth,
      to: thisMonth
    })
      .then((newsResult) => {
        state.loaded.news = true;
        if (!newsResult) {
          return;
        }

        /**
       * ニュースタイプ変換
       * 【新品】
          １：新商品
          ２：オススメ
          ３：セール
       */
        function convertNewsType(newsType: number): CategoryTag {
          switch (newsType) {
            case 1:
              return '新製品';
            case 2:
              return 'おすすめ';
            case 3:
              return 'セール';
            default:
              return 'おすすめ';
          }
        }

        /**
         * 表示に使う変数のみ抜き出す
         * ニュースAPIのレスポンスで遷移先URLが指定なしの場合は、
         * デフォルトで/news/display.html?id=＜お知らせ番号＞をリンク先に指定する
         */
        const _newsList: Array<NewsOnScreen> = newsResult.map((item) => ({
          newsDate: new Date(item.newsDate),
          newsType: convertNewsType(item.newsType),
          newsTitle: item.newsTitle,
          linkType: item.linkType,
          linkTab: item.linkTab,
          linkUrl: getNewsLinkUrl(item),
          newsContent: item.newsContent,
          thumbnailUrl: process.env.VUE_APP_BANNER_IMAGE_URL + 'top/news/' + item.newsNo + '.jpg'
        }));

        state.newsList = state.newsList.concat(_newsList);
      })
      .catch((error) => {
        state.loaded.news = true;
        console.log(error);
      });

    const tsvPlus = isDebugMode() ? parseInt((context.root.$route.query.tsv_plus as string) || '0') : 0;

    /**
     * 新着用動画を取得する
     */
    TopConfigsService.fetchMovieNews(tsvPlus)
      .then((movieResult) => {
        state.loaded.movieNews = true;
        if (!movieResult) {
          return;
        }

        // 表示に使う変数のみ抜き出す
        const movieList: Array<NewsOnScreen> = movieResult.map((item) => ({
          newsDate: new Date(item.validFrom),
          newsType: '動画',
          newsTitle: item.title,
          linkUrl: getYouTubeUrl(item.movieId),
          thumbnailUrl: getYouTubeThumbnailUrl(item.movieId),
          newsContent: item.caption
        }));

        state.newsList = state.newsList.concat(movieList);
      })
      .catch((error) => {
        state.loaded.movieNews = true;
        console.log(error);
      });

    /**
     * 特集を取得する
     */
    TopConfigsService.fetchSpecialSaleNews(tsvPlus)
      .then((seleResult) => {
        state.loaded.specialSaleNew = true;
        if (!seleResult) {
          return;
        }

        // 表示に使う変数のみ抜き出す
        const seleList: Array<NewsOnScreen> = seleResult.map((item) => ({
          newsDate: new Date(item.validFrom),
          newsType: item.tag,
          newsTitle: item.title,
          linkUrl: item.linkUrl,
          thumbnailUrl: item.imageSrc,
          newsContent: item.caption
        }));

        state.newsList = state.newsList.concat(seleList);
      })
      .catch((error) => {
        state.loaded.specialSaleNew = true;
        console.log(error);
      });

    /**
     * ロードが全て完了したかどうか確認する
     */
    const getLoadedAll = computed(() => {
      if (state.loaded.shasha && state.loaded.news && state.loaded.movieNews && state.loaded.specialSaleNew) {
        return true;
      } else {
        return false;
      }
    });

    /**
     * 表示する新着情報一覧を取得する
     */
    const getShowNewsList = computed(
      (): Array<NewsOnScreen> => {
        // 公開日で降順でソートする
        state.newsList.sort((a, b) => {
          // 日付型を数値に変換して引き算すればよい
          return b.newsDate.getTime() - a.newsDate.getTime();
        });

        let showNewsList = state.newsList;

        // 選択された
        if (state.selectedNewsType) {
          showNewsList = showNewsList.filter((news) => news.newsType === state.selectedNewsType);
        }

        // 表示する長さ分の配列にする
        // ただし、32個以上は表示しない。
        if (state.showNewsLength > MAX_COUNT) {
          state.showNewsLength = MAX_COUNT;
        }
        showNewsList = showNewsList.slice(0, state.showNewsLength);

        return showNewsList;
      }
    );

    /**
     * 新着情報の一覧の長さを取得する
     */
    const getNewsListLength = computed((): number => {
      if (state.selectedNewsType) {
        const filteredNewsList = state.newsList.filter((news) => news.newsType === state.selectedNewsType);
        return filteredNewsList.length > MAX_COUNT ? MAX_COUNT : filteredNewsList.length;
      } else {
        return state.newsList.length > MAX_COUNT ? MAX_COUNT : state.newsList.length;
      }
    });

    return {
      ...toRefs(state),
      newsTypes: NEWS_TYPES,
      getShowNewsList,
      getNewsListLength,
      getLoadedAll
    };
  }
});
</script>

<style lang="scss" scoped>
.loading-area {
  height: 20vh;
  width: 100%;
}

.news-list-area {
  padding: 12px;

  .news-filter {
    padding: 8px;

    .filter-btn {
      border-color: rgba(0, 0, 0, 0.38);
      height: 40px;
    }

    .right-btn-icon {
      color: rgba(0, 0, 0, 0.38);
      position: absolute;
      right: 0;
    }
  }

  .news-item {
    padding: 8px;
  }
}

/* 960px以上 override */
.content-area-wide {
  .news-filter {
    margin-top: -55px;
    text-align: right;

    .filter-btn {
      width: 200px;
    }
  }

  .news-item {
    max-height: 380px;
  }
}
/* 960px未満 override */
.content-area-narrow {
  .news-filter {
    text-align: center;

    .filter-btn {
      width: 100%;
    }
  }

  .news-item {
    max-height: 400px;
  }
}

.v-btn.more-items-button {
  margin-top: 12px;
  font-size: 18px;
  height: 60px;
  color: #fff;

  &.button-narrow {
    margin-top: 20px;
    font-size: 16px;
    height: 48px;
  }
}

.more-items-button-icon {
  margin-left: 20px;
}
</style>
