<template>
  <div>
    <!-- バナー -->
    <div
      id="main-banner"
      class="main-banner-area"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <div
        :class="{
          'banner-area-outer-wide': $vuetify.breakpoint.mdAndUp,
          'banner-area-outer-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <!-- お知らせ -->
        <div
          v-if="announcements && announcements.length > 0"
          :class="{
            'attention-area': true,
            'attention-area-wide': $vuetify.breakpoint.mdAndUp,
            'attention-area-narrow': $vuetify.breakpoint.smAndDown
          }"
        >
          <div class="attention-item" v-for="(item, index) in announcements" :key="index">
            <i class="fas fa-caret-right red-icon"></i>
            <div class="attention-text-area">
              <a :href="item.linkUrl" :target="getAnnouncementsLinkTarget(item.linkTab)">{{ item.newsTitle }}</a>
            </div>
            <i class="fas fa-times-circle cancel" @click="announcements.splice(index, 1)"></i>
          </div>
        </div>
      </div>

      <div
        :class="{
          'banner-area-outer-wide': $vuetify.breakpoint.mdAndUp,
          'banner-area-outer-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <!-- バナー画像 960px以上 -->
        <div class="carousel-area-wide" v-if="$vuetify.breakpoint.mdAndUp">
          <v-carousel cycle hide-delimiter-background height="100%">
            <a v-for="(item, i) in carouselBannerList" :key="i" :href="item.linkUrl" :target="getBannerLinkTarget(item.isBlank)">
              <v-carousel-item eager :key="i">
                <v-img :src="item.imageSrc" height="100%" eager />
              </v-carousel-item>
            </a>
          </v-carousel>
        </div>

        <!-- バナー画像 960px未満 -->
        <v-responsive :aspect-ratio="1320 / 310" class="carousel-area-narrow" v-if="$vuetify.breakpoint.smAndDown">
          <v-carousel hide-delimiters cycle height="100%">
            <a v-for="(item, i) in carouselBannerList" :key="i" :href="item.linkUrl" :target="getBannerLinkTarget(item.isBlank)">
              <v-carousel-item eager :key="i">
                <v-img :src="item.imageSrc" height="100%" eager />
              </v-carousel-item>
            </a>
          </v-carousel>
        </v-responsive>
      </div>
    </div>

    <!-- メインコンテンツ -->
    <div
      id="main-content"
      class="main-content-area"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <!-- 最近チェックした商品 -->
      <div
        name="checked-products"
        class="ec-back-color"
        :class="{
          'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-outer-narrow full-width': $vuetify.breakpoint.smAndDown
        }"
        v-if="checkedProducts && checkedProducts.length > 0"
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
            >最近チェックした商品</span
          >
          <simple-product-slider :items="checkedProducts" rating-color="rgba(7, 141, 16,1)" />
        </div>
      </div>

      <!-- 新着情報 -->
      <div
        name="news-list"
        :class="{
          'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-outer-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <news-list />
      </div>

      <div
        name="recommend-products"
        class="ec-back-color"
        :class="{
          'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-outer-narrow full-width': $vuetify.breakpoint.smAndDown
        }"
        v-if="recommendProducts && recommendProducts.length > 0"
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
            >あなたにおすすめ</span
          >
          <simple-product-slider :items="recommendProducts" rating-color="rgba(7, 141, 16,1)" />
        </div>
      </div>

      <!-- カテゴリー 960px以上 -->
      <div name="product-category" class="content-area-outer-wide" v-if="$vuetify.breakpoint.mdAndUp">
        <div class="content-area-wide">
          <div class="content-title content-title-large category-title">カテゴリーで選ぶ</div>
          <div class="px-5 mt-2 content-subtitle-large">カメラ</div>
          <div>
            <v-row no-gutters>
              <v-col v-for="item in filterCameraCategories" :key="item.text" cols="12" sm="4" class="category-item">
                <v-card
                  :href="item.linkType === 'external' ? item.url : null"
                  :to="item.linkType === 'external' ? null : item.url"
                  tile
                  outlined
                  class="pa-2 ec-link-image"
                >
                  <img class="category-image" :src="loadImg(item.image)" />
                  <span class="category-text">{{ item.text }}</span>
                </v-card>
              </v-col>
            </v-row>
            <v-btn color="rgba(122,118,118,1)" width="100%" height="60" tile @click="isMoreCameraCategories = !isMoreCameraCategories" class="category-button">
              <span v-if="isMoreCameraCategories">
                閉じる
                <i class="category-button-icon fas fa-minus"></i>
              </span>
              <span v-else>
                もっと見る
                <i class="category-button-icon fas fa-plus"></i>
              </span>
            </v-btn>
          </div>
          <div class="px-5 mt-2 content-subtitle-large">家電</div>
          <div>
            <v-row no-gutters>
              <v-col v-for="item in filterAppliancesCategories" :key="item.text" cols="12" sm="4" class="category-item">
                <v-card
                  :href="item.linkType === 'external' ? item.url : null"
                  :to="item.linkType === 'external' ? null : item.url"
                  tile
                  outlined
                  class="pa-2 ec-link-image"
                >
                  <img class="category-image" :src="loadImg(item.image)" />
                  <span class="category-text">{{ item.text }}</span>
                </v-card>
              </v-col>
            </v-row>
            <v-btn
              color="rgba(122,118,118,1)"
              width="100%"
              height="60"
              tile
              @click="isMoreAppliancesCategories = !isMoreAppliancesCategories"
              class="category-button"
            >
              <span v-if="isMoreAppliancesCategories">
                閉じる
                <i class="category-button-icon fas fa-minus"></i>
              </span>
              <span v-else>
                もっと見る
                <i class="category-button-icon fas fa-plus"></i>
              </span>
            </v-btn>
          </div>
        </div>
      </div>

      <!-- カテゴリー 960px未満 -->
      <div name="product-category" class="content-area-outer-narrow product-category-narrow" v-if="$vuetify.breakpoint.smAndDown">
        <div class="content-area-narrow">
          <div class="content-title content-title-small category-title">商品カテゴリーから探す</div>
          <v-list>
            <v-list-item-group>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-title class="content-subtitle-small">カメラ</v-list-item-title>
                </template>
                <v-list-item
                  v-for="(item, i) in filterCameraCategories"
                  :key="i"
                  :href="item.linkType === 'external' ? item.url : null"
                  :to="item.linkType === 'external' ? null : item.url"
                  class="category-item ec-link-image"
                >
                  <img class="category-image" :src="loadImg(item.image)" />
                  <v-list-item-title v-text="item.text" class="category-text"></v-list-item-title>
                </v-list-item>
                <v-list-item @click="isMoreCameraCategories = !isMoreCameraCategories" class="category-list-button">
                  <v-list-item-title class="category-list-button-title" v-if="isMoreCameraCategories">
                    閉じる
                    <i class="category-button-icon fas fa-minus"></i>
                  </v-list-item-title>
                  <v-list-item-title class="category-list-button-title" v-else>
                    もっと見る
                    <i class="category-button-icon fas fa-plus"></i>
                  </v-list-item-title>
                </v-list-item>
              </v-list-group>
              <v-divider></v-divider>

              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-title class="content-subtitle-small">家電</v-list-item-title>
                </template>
                <v-list-item
                  v-for="(item, i) in filterAppliancesCategories"
                  :key="i"
                  :href="item.linkType === 'external' ? item.url : null"
                  :to="item.linkType === 'external' ? null : item.url"
                  class="category-item ec-link-image"
                >
                  <img class="category-image" :src="loadImg(item.image)" />
                  <v-list-item-title v-text="item.text" class="category-text"></v-list-item-title>
                </v-list-item>
                <v-list-item @click="isMoreAppliancesCategories = !isMoreAppliancesCategories" class="category-list-button">
                  <v-list-item-title class="category-list-button-title" v-if="isMoreAppliancesCategories">
                    閉じる
                    <i class="category-button-icon fas fa-minus"></i>
                  </v-list-item-title>
                  <v-list-item-title class="category-list-button-title" v-else>
                    もっと見る
                    <i class="category-button-icon fas fa-plus"></i>
                  </v-list-item-title>
                </v-list-item>
              </v-list-group>
              <v-divider></v-divider>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
    </div>
    <!-- メインコンテンツ end -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import SimpleProductSlider from '@/components/common/simple-product-slider.vue';
import NewsList from '@/components/toppage/news-list.vue';
import TopConfigsService from '@/logic/tsv/top-configs.service';
import { CarouselBanner } from '@/types/tsv-config';
import ProductService from '@/logic/product.service';
import { CAMERA_CATEGORY_LIST, APPLIANCES_CATEGORY_LIST } from '@/constants/categories';
import NewsService from '@/logic/news.service';
import { NewsOnScreen } from '@/types/news';
import { getNewsLinkUrl } from '@/logic/utils';

const CAMERA_CATEGORY_MIN_SIZE = 6;
const APPLIANCES_CATEGORY_MIN_SIZE = 3;

export default Vue.extend({
  name: 'top-page',
  components: {
    'simple-product-slider': SimpleProductSlider,
    'news-list': NewsList
  },
  metaInfo: () => {
    return {
      title: '【カメラのキタムラ】デジカメ・ビデオカメラ・プリンター等の通販'
    };
  },
  setup: () => {
    const state = reactive({
      model: null,
      selectedCamera: null,
      selectedAppliance: null,
      carouselBannerList: [] as CarouselBanner[],
      announcements: [] as Array<NewsOnScreen>,
      isMoreCameraCategories: false,
      isMoreAppliancesCategories: false,
      checkedProducts: [],
      recommendProducts: []
    });

    // カルーセルバナーを取得
    TopConfigsService.fetchCarouselBanners().then((carouselBanners) => {
      state.carouselBannerList = carouselBanners;
    });

    const getBannerLinkTarget = (isBlank: 'yes' | 'no') => {
      return isBlank === 'yes' ? '_blank' : '_self';
    };

    // TOPお知らせ一覧を取得する
    NewsService.searchNews(false, {
      limit: 5,
      newsType: [5]
    }).then((newsResult) => {
      if (!newsResult || newsResult.length === 0) {
        return;
      }
      /**
       * 表示に使う変数のみ抜き出す
       * ニュースAPIのレスポンスで遷移先URLが指定なしの場合は、
       * デフォルトで/news/display.html?id=＜お知らせ番号＞をリンク先に指定する
       */
      state.announcements = newsResult.map((news) => ({
        newsDate: new Date(news.newsDate),
        newsType: 'お知らせ',
        newsTitle: news.newsTitle,
        linkTab: news.linkTab,
        linkUrl: getNewsLinkUrl(news)
      }));
    });

    /**
     * お知らせのリンクを開く際のタブの挙動方法を取得する
     * 1：別タブにする 2：同一タブ内
     */
    function getAnnouncementsLinkTarget(linkTab: 1 | 2) {
      return linkTab === 2 ? '_self' : '_blank';
    }

    // 最近チェックした商品一覧を取得する
    const customerId = '35007';
    ProductService.searchRecommendProducts(customerId, '19', '', 'fetchRecentCheckedProducts').then((recResult) => {
      state.checkedProducts = recResult.items;
    });

    // レコメンド商品一覧を取得する
    ProductService.searchRecommendProducts(customerId, '1', '', 'fetchRecommenedProducts').then((recResult) => {
      state.recommendProducts = recResult.items;
    });

    /**
     * カメラカテゴリーリストをフィルタリングする
     */
    const filterCameraCategories = computed(() =>
      state.isMoreCameraCategories ? CAMERA_CATEGORY_LIST : CAMERA_CATEGORY_LIST.slice(0, CAMERA_CATEGORY_MIN_SIZE)
    );

    /**
     * 家電カテゴリーリストをフィルタリングする
     */
    const filterAppliancesCategories = computed(() =>
      state.isMoreAppliancesCategories ? APPLIANCES_CATEGORY_LIST : APPLIANCES_CATEGORY_LIST.slice(0, APPLIANCES_CATEGORY_MIN_SIZE)
    );

    /**
     * 画像読込
     */
    function loadImg(path: string) {
      return require('@/assets/categories/' + path);
    }
    return {
      ...toRefs(state),
      getBannerLinkTarget,
      getAnnouncementsLinkTarget,
      filterCameraCategories,
      filterAppliancesCategories,
      loadImg
    };
  }
});
</script>

<style lang="scss" scoped>
// IE11対応
.container-wide,
.content-area-outer-wide {
  max-width: $ec-contents-max-width;
}

/* override to common */
.banner-area-outer-wide {
  margin-top: 10px;
}
.banner-area-outer-narrow {
  padding-top: 0;
  padding-bottom: 0;
}

.attention-area {
  margin: 10px;
  padding: 10px;
  border: 2px solid $ec-primary;

  a {
    color: inherit;
    text-decoration: underline;
  }

  .attention-text-area {
    width: 100%;
  }
}

.attention-item {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.attention-area-wide {
  font-size: 20px;

  .red-icon {
    color: $text-red;
    margin: auto 20px;
  }

  .cancel {
    cursor: pointer;
    font-size: 1.5em;
    margin: auto 10px auto;
  }
}

.attention-area-narrow {
  margin: 0 10px 10px 10px;
  font-size: 16px;

  .red-icon {
    color: $text-red;
    margin: auto 5px;
    margin-right: 10px;
  }

  .cancel {
    cursor: pointer;
    font-size: 1.5em;
    margin: auto;
  }
}

.carousel-area-wide {
  width: 98vw;
  max-width: 1320px;
  margin: 0 auto;
}

.category-title {
  padding: 5px;
  border-bottom: solid 2px rgba(122, 118, 118, 1);
}

.category-button {
  margin-top: 12px;
  font-size: 18px;
  color: white;
}

.category-button-icon {
  margin-left: 20px;
}

.category-list-button {
  background-color: rgba(122, 118, 118);

  .category-list-button-title {
    color: white;
    text-align: center;
  }
}

.theme--light.v-list-item--active::before {
  opacity: 0;
}

.category-text {
  margin-left: 10px;
  padding-top: 8px;
  font-size: 1.1rem;
}

.category-item {
  padding: 4px;
  border: none;
}

.v-list-item.category-item {
  border: none;
  border-bottom: thin dotted #707070;
  .category-text {
    text-align: left;
  }

  &:nth-child(-n + 3) {
    border-top: thin dotted #707070;
  }
}

.category-item .v-card {
  display: flex;
  margin: 0 10px;
  border: none;
  border-bottom: thin dotted #707070;
}

.category-item:nth-child(-n + 3) .v-card {
  border-top: thin dotted #707070;
}

.category-image {
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 80px;
  margin: auto 0;
}

.card-layout {
  border: 2px solid rgba(183, 178, 178, 1);
}

.product-category-narrow {
  ::v-deep .fa-chevron-down:before {
    content: '\f067';
  }
  .v-list-group--active {
    ::v-deep .fa-chevron-down:before {
      content: '\f068';
    }
  }
}
</style>
