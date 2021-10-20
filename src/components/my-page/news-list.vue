<template>
  <div
    id="my-page-news"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <!-- お知らせ一覧 -->
      <div class="my-news-area">
        <h2 class="my-news-title">{{ userName }}さまへお知らせ</h2>
        <div class="my-news-item-area">
          <!-- リスト表示 -->
          <news-list :newsList="getNewsList" />

          <!-- ローディング -->
          <div v-if="!loaded.news">
            <section-loading />
          </div>

          <!-- もっと見るボタン -->
          <more-items-button @click="showNewsLength = showNewsLength + 10" v-if="newsList.length > showNewsLength" />
        </div>
      </div>
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>

    <!-- メニューエリア 960px未満 -->
    <div id="menu-list" class="my-page-layout-menu" v-if="$vuetify.breakpoint.smAndDown">
      <my-page-menu />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import NewsService from '@/logic/news.service';
import { News } from '@/types/news';
import NewsList from '@/components/news/news-list.vue';
import MyPageLayout from './common/my-page-layout.vue';
import MyPageMenu from './common/my-page-menu.vue';
import BackButton from '@/components/common/back-button.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';

export default Vue.extend({
  name: 'my-page-news-list',
  components: {
    'section-loading': SectionLoading,
    'news-list': NewsList,
    'my-page-layout': MyPageLayout,
    'my-page-menu': MyPageMenu,
    'back-button': BackButton,
    'more-items-button': MoreItemsButton
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: 'お知らせ一覧',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'お知らせ一覧', linkUrl: '' }
      ],
      // ユーザー名
      userName: 'ゲスト',
      // お知らせ
      newsList: [] as Array<News>,
      // 表示するお知らせの長さ
      showNewsLength: 10,
      // ロード状態
      loaded: {
        news: false
      }
    });

    const init = async () => {
      // 未ログインの場合は初期表示処理を行わない
      if (!authorizer.isLoggedIn) return;

      // ユーザ名を取得する
      if (authorizer.user?.lastName && authorizer.user?.firstName) {
        state.userName = authorizer.user.lastName + ' ' + authorizer.user.firstName;
      } else {
        state.userName = 'ゲスト';
      }

      // お知らせを取得する
      try {
        const newsList = await NewsService.searchNews(true);
        state.newsList = newsList;
      } catch (error) {
        console.error(error);
        state.newsList = [] as Array<News>;
      } finally {
        state.loaded.news = true;
      }
    };

    const getNewsList = computed((): Array<News> => state.newsList.slice(0, state.showNewsLength));

    onMounted(() => {
      init();

      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function() {
        init();
      });
    });

    watch(() => authorizer.isLoggedIn, init);

    return {
      ...toRefs(state),
      getNewsList
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  お知らせ一覧 共通
------------------------------- */
.my-news {
  &-title {
    padding: 20px;
    background-color: $bg-light-grey;
  }

  &-item {
    &-area {
      padding: 10px;
      border: 4px solid $bg-light-grey;
    }
  }

  &-link {
    padding: 10px;
    font-size: 16px;
  }
}

/** -------------------------------
  お知らせ一覧 960px未満
------------------------------- */
.container-narrow {
  .my-news-title {
    font-size: 18px;
  }
}
</style>
