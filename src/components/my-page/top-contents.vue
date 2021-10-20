<template>
  <div
    id="my-page-top"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <div id="my-page-top-contents">
        <div class="d-flex my-3">
          <v-btn id="usage-history-btn" outlined depressed x-large class="flex-grow-1 mr-3 top-menu-btn focus" to="/ec/mypage/odr/list">
            <i class="far fa-history mr-1"></i>
            ご利用履歴
          </v-btn>
          <v-btn id="favorite-product-btn" outlined depressed x-large class="flex-grow-1 top-menu-btn" to="/ec/mypage/favorite/list">
            <i class="far fa-heart mr-1"></i>
            お気に入り商品
          </v-btn>
        </div>

        <!-- お知らせ -->
        <div class="my-news-area">
          <h2 class="my-news-title">{{ userName }}さまへお知らせ</h2>
          <div class="my-news-item-area">
            <!-- リスト表示 -->
            <news-list :newsList="newsList" />

            <!-- ローディング -->
            <div v-if="!loaded.news">
              <section-loading />
            </div>

            <div class="d-flex justify-end secondary-link">
              <router-link to="/ec/mypage/news" class="my-news-link">
                <span class="secondary-link-text">お知らせ一覧を見る</span>
                <i class="fas fa-chevron-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </my-page-layout>

    <!-- メニューエリア 960px未満 -->
    <div id="menu-list" class="my-page-layout-menu" v-if="$vuetify.breakpoint.smAndDown">
      <my-page-menu />
    </div>

    <!-- 最近チェックした商品 -->
    <div
      name="checked-products"
      class="ec-back-color"
      :class="{
        'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-outer-narrow full-width': $vuetify.breakpoint.smAndDown
      }"
      v-if="!loaded.checkedProducts || (checkedProducts && checkedProducts.length > 0)"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <span
          class="content-title"
          :class="{
            'content-title-large': $vuetify.breakpoint.mdAndUp,
            'content-title-small': $vuetify.breakpoint.smAndDown
          }"
        >
          最近チェックした商品
        </span>
        <product-slider :items="checkedProducts" :isUsed="false" :isRelatedProducts="false" cartButtonText="カートに入れる" v-if="loaded.checkedProducts" />
        <!-- ローディング -->
        <div v-else>
          <section-loading />
        </div>
      </div>
    </div>

    <!-- あなたにおすすめ -->
    <div
      name="recoomend-products"
      class="ec-back-color"
      :class="{
        'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-outer-narrow full-width': $vuetify.breakpoint.smAndDown
      }"
      v-if="!loaded.recommendProducts || (recommendProducts && recommendProducts.length > 0)"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <span
          class="content-title"
          :class="{
            'content-title-large': $vuetify.breakpoint.mdAndUp,
            'content-title-small': $vuetify.breakpoint.smAndDown
          }"
        >
          あなたにおすすめ
        </span>
        <product-slider :items="recommendProducts" :isUsed="false" :isRelatedProducts="false" cartButtonText="カートに入れる" v-if="loaded.recommendProducts" />
        <!-- ローディング -->
        <div v-else>
          <section-loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import ProductService from '@/logic/product.service';
import NewsService from '@/logic/news.service';
import { News } from '@/types/news';
import MyPageMenu from './common/my-page-menu.vue';
import NewsList from '@/components/news/news-list.vue';
import MyPageLayout from './common/my-page-layout.vue';
import { SimpleProduct, SliderProduct } from '@/types/product';
import ProductSlider from '../product-detail/product-slider.vue';

export default Vue.extend({
  name: 'top-contents',
  components: {
    'section-loading': SectionLoading,
    'product-slider': ProductSlider,
    'my-page-menu': MyPageMenu,
    'news-list': NewsList,
    'my-page-layout': MyPageLayout
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: 'マイページ',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '' }
      ],
      // ユーザー名
      userName: 'ゲスト',
      // お知らせ
      newsList: [] as Array<News>,
      // 最近チェックした商品
      checkedProducts: [] as Array<SliderProduct>,
      // あなたにおすすめ
      recommendProducts: [] as Array<SliderProduct>,
      // ロード状態
      loaded: {
        news: false,
        checkedProducts: false,
        recommendProducts: false
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
        const maxNewsList = context.root.$vuetify.breakpoint.mdAndUp ? 3 : 2;
        state.newsList = newsList.slice(0, maxNewsList);
      } catch (error) {
        console.error(error);
        state.newsList = [] as Array<News>;
      } finally {
        state.loaded.news = true;
      }

      // 最近チェックした商品一覧を取得する
      const customerId = '35007';
      try {
        const resultCheckedProducts = await ProductService.searchRecommendProducts(customerId, '18', '', 'fetchRecentCheckedProducts');
        const resultCheckedProductItems = resultCheckedProducts.items || [];
        resultCheckedProductItems.forEach((product: SimpleProduct) => {
          state.checkedProducts.push({
            janCode: product.janCode,
            itemName: product.itemName,
            imagePath: product.images[0].imagePath,
            price: product.price,
            priceDiv: product.priceDiv,
            ratingTotal: product.ratingTotal
          });
        });
      } catch (error) {
        console.error(error);
        state.checkedProducts = [] as Array<SliderProduct>;
      } finally {
        state.loaded.checkedProducts = true;
      }

      // レコメンド商品一覧を取得する
      try {
        const resultRecommenedProducts = await ProductService.searchRecommendProducts(customerId, '9', '', 'fetchRecommenedProducts');
        const resultRecommenedProductItems = resultRecommenedProducts.items || [];
        resultRecommenedProductItems.forEach((product: SimpleProduct) => {
          state.recommendProducts.push({
            janCode: product.janCode,
            itemName: product.itemName,
            imagePath: product.images[0].imagePath,
            price: product.price,
            priceDiv: product.priceDiv,
            ratingTotal: product.ratingTotal
          });
        });
      } catch (error) {
        console.error(error);
        state.recommendProducts = [] as Array<SliderProduct>;
      } finally {
        state.loaded.recommendProducts = true;
      }
    };

    onMounted(() => {
      init();

      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function() {
        init();
      });
    });

    watch(() => authorizer.isLoggedIn, init);

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  トップページコンテンツ 共通
------------------------------- */
// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

/** -------------------------------
  トップページコンテンツ 960px以上
------------------------------- */
.top-menu-btn {
  font-weight: 600;
  border-color: $bg-light-grey;

  &.focus {
    background-color: $bg-light-red;
    color: $text-red;
    border: none;
  }
}

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
  トップページコンテンツ 960px未満
------------------------------- */
.container-narrow {
  .my-news-title {
    font-size: 18px;
  }
}
</style>
