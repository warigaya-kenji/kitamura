<template>
  <div
    id="special-sale-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <template v-if="isPassCodeNeed">
      <!-- パスコード入力画面 -->
      <div class="passcode-area">
        <div class="passcode-item">パスワード入力 :</div>
        <div class="passcode-item"><v-text-field solo dense type="password" v-model="passCode"></v-text-field></div>
        <div class="passcode-item"><v-btn @click="validatePassCode()">認証</v-btn></div>
      </div>
      <div class="text-center primary--text font-weight-bold mb-2" v-if="errorPassMsg">{{ errorPassMsg }}</div>
    </template>

    <template v-else>
      <template v-if="!errorMsg">
        <!-- パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <div class="sale-container">
          <!-- タイトル -->
          <h1 class="sale-title mb-2" v-if="jsonConfig.parent && jsonConfig.parent.title">{{ jsonConfig.parent.title }}</h1>

          <!-- メインバナー -->
          <div class="mb-4">
            <div class="text-center" v-if="jsonConfig.parent && jsonConfig.parent.bannerImagePath">
              <img
                class="banner-img"
                :class="{ link: jsonConfig.children && jsonConfig.children.length }"
                :src="jsonConfig.parent.bannerImagePath"
                :alt="jsonConfig.parent.title"
                @click="clickMainBanner()"
              />
            </div>
            <div class="text-right" v-if="jsonConfig.parent && jsonConfig.parent.backLinkTitle">
              <router-link :to="`${jsonConfig.parent.backLinkUrl}`">{{ jsonConfig.parent.backLinkTitle }}</router-link>
            </div>
          </div>

          <!-- インクルード表示 -->
          <div id="include-contents" v-html="includeHtml"></div>

          <!-- テキスト -->
          <div class="sale-text mb-4 including-line-breaks" v-if="jsonConfig.content">{{ jsonConfig.content }}</div>

          <!-- 子バナー 960px以上 -->
          <v-container class="mb-6" v-if="$vuetify.breakpoint.mdAndUp && jsonConfig.children">
            <v-row>
              <template v-for="(bannerInfo, index) in jsonConfig.children">
                <v-col class="text-center" cols="4" :key="bannerInfo.title"
                  ><img class="banner-img" :src="bannerInfo.bannerImagePath" :alt="bannerInfo.title" @click="clickChildBanner(index)"
                /></v-col>
              </template>
            </v-row>
          </v-container>
          <!-- 子バナー 960px未満 -->
          <v-container class="mb-6" v-if="$vuetify.breakpoint.smAndDown && jsonConfig.childrensp">
            <v-row>
              <template v-for="(bannerInfo, index) in jsonConfig.childrensp">
                <v-col class="text-center smp" cols="4" :key="bannerInfo.title"
                  ><img class="banner-img" :src="bannerInfo.bannerImagePath" :alt="bannerInfo.title" @click="clickChildBanner(index)"
                /></v-col>
              </template>
            </v-row>
          </v-container>

          <!-- 検索結果一覧 -->
          <div
            id="product-list-contents-area"
            :style="{
              background: $vuetify.breakpoint.smAndDown ? 'rgba(249, 248, 248, 1)' : ''
            }"
          >
            <!-- 表示条件 960px以上 -->
            <div class="display-condition-wrap" v-if="$vuetify.breakpoint.mdAndUp && totalCount >= 0">
              <div class="sort">
                <span class="sort-text">並び替え</span>
                <v-select id="product-sort-select" class="sort-list" v-model="currentSort" :items="sort" outlined dense height="100%"></v-select>
              </div>
              <div class="display-count">
                <span class="display-count-text">表示件数</span>
                <v-select class="display-count-list" v-model="currentDisplayCount" :items="displayCountList" outlined dense height="100%"></v-select>
              </div>
            </div>
            <!-- 結果件数と表示件数 960px以上 -->
            <div class="result-count" v-if="$vuetify.breakpoint.mdAndUp && totalCount >= 0">{{ totalCount }}件中1-{{ displayMaxCount }}の結果</div>

            <!-- 表示条件 960px未満 -->
            <div id="product-search-conditions" class="list-layout-search-conditions" v-if="$vuetify.breakpoint.smAndDown && totalCount">
              <div class="conditions-btn-wrap">
                <v-btn class="conditions-sort-btn" outlined dark depressed color="rgba(112, 112, 112, 1)" @click.stop="sortDrawer = !sortDrawer"
                  >並び替え</v-btn
                >
              </div>

              <!-- 並び替えリスト -->
              <v-navigation-drawer class="drawer-layout sort-wrap" v-model="sortDrawer" fixed right temporary>
                <div class="fixed-sort">
                  <div class="fixed-sort-title" @click="sortDrawer = !sortDrawer">
                    <v-icon class="fixed-sort-title-icon" small>fas fa-chevron-left</v-icon>
                    <span class="fixed-sort-title-text">並び替え</span>
                  </div>
                  <div class="fixed-sort-list">
                    <div class="fixed-sort-item" v-for="item in sort" :key="item.value" @click="selectedSort(item.value)">{{ item.text }}</div>
                  </div>
                </div>
              </v-navigation-drawer>

              <!-- 表示件数 -->
              <div class="display-condition-wrap">
                <div class="result-count" v-if="totalCount >= 0">{{ totalCount }}件中1-{{ displayMaxCount }}の結果</div>
                <div class="display-count">
                  <span class="display-count-text">表示件数</span>
                  <v-select
                    class="display-count-list form-text"
                    v-model="currentDisplayCount"
                    :items="displayCountList"
                    outlined
                    dense
                    height="100%"
                  ></v-select>
                </div>
              </div>
            </div>

            <!-- 商品一覧 -->
            <div id="product-list-area" class="product-list" v-if="totalCount || !loaded.results">
              <!-- 商品 -->
              <template v-if="loaded.results && currentResult.length > 0">
                <template>
                  <product
                    v-for="item in currentResult"
                    :key="item.itemid"
                    :product="item"
                    :display-price-type="displayProductPriceType"
                    :isSpecial="true"
                    :secretInfo="secretInfo"
                  />
                </template>
              </template>
              <div class="loading-products-list" v-if="!loaded.results">
                <section-loading />
              </div>
            </div>
            <!-- もっと見る -->
            <v-btn
              class="add-search-btn"
              v-show="currentResult.length < totalCount"
              block
              dark
              depressed
              tile
              color="rgba(112, 112, 112, 1)"
              @click="addSearch()"
            >
              もっと見る
              <v-icon class="add-search-btn-icon" small color="rgba(255, 255, 255, 1)">fas fa-plus</v-icon>
            </v-btn>
          </div>
        </div>

        <!-- おすすめコンテンツ -->
        <div class="recommend-contents" v-if="recommendContents.length && totalCount">
          <div class="recommend-contents-title">おすすめコンテンツ</div>
          <!-- 960px以上 -->
          <div class="recommend-contents-list" v-if="$vuetify.breakpoint.mdAndUp">
            <a :href="item.linkUrl" v-for="item in recommendContents" :key="item.index" :target="getLinkTarget(item.isBlank)">
              <img :src="item.imageSrc" />
            </a>
          </div>
          <!-- 960px未満 -->
          <v-slide-group v-if="$vuetify.breakpoint.smAndDown" class="recommend-contents-group">
            <v-slide-item v-for="item in recommendContents" :key="item.index" class="recommend-contents-item">
              <a :href="item.linkUrl" :target="getLinkTarget(item.isBlank)">
                <img :src="item.imageSrc" class="recommend-contents-img" />
              </a>
            </v-slide-item>
          </v-slide-group>
        </div>
      </template>

      <!-- 表示期間外の場合 -->
      <not-found :errorMessage="errorMsg" v-else-if="errorMsg" />
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, ref, toRefs, computed, watch, onMounted, onUpdated } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import Product from '@/components/product-list/product.vue';
import NotFound from '@/components/common/not-found.vue';
import { SPECIAL_ITEM_SORT_LIST } from '@/constants/sort-list';
import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import SpecialProductService from '@/logic/special-product.service';
import IncludeFileService from '@/logic/include-file.service';
import { SpecialBanner } from '@/types/tsv-config';
import { ProductItem } from '@/types/product-list';
import { SecretInfo } from '@/types/special-product';

type BreadcrumbItem = {
  path: string;
  linkUrl: string;
};

export default Vue.extend({
  name: 'special-sale-page',
  components: {
    breadcrumbs: Breadcrumbs,
    product: Product,
    'section-loading': SectionLoading,
    'not-found': NotFound
  },
  setup: (props, context) => {
    const route = context.root.$route;
    const query = context.root.$route.query;
    const includeHtml = ref<string>('');

    const state = reactive({
      // パスコード
      isPassCodeNeed: false,
      passCode: '',
      errorPassMsg: '',
      // 表示期間外メッセージ
      errorMsg: '',
      // パンくず
      breadcrumbs: [] as Array<BreadcrumbItem>,
      // 並び替え
      currentSort: SPECIAL_ITEM_SORT_LIST[0].value,
      sort: SPECIAL_ITEM_SORT_LIST,
      // 表示件数
      currentDisplayCount: 40,
      displayCountList: DISPLAY_COUNT_LIST,
      // 商品件数
      totalCount: -1,
      // 表示ページ
      page: 1,
      // スマホ用の表示制御
      sortDrawer: false,
      // 価格の表示制御
      displayProductPriceType: '0',
      // Json結果
      jsonConfig: {} as any,
      // バナー
      defaultBannerId: '',
      // 商品リスト
      currentResult: [] as Array<ProductItem>, // 現在の表示
      results: [] as Array<ProductItem>, // 全量
      // おすすめコンテンツ
      recommendContents: [] as Array<SpecialBanner>,
      // ロード状態
      loaded: {
        results: false
      },
      // 限定特集用データ
      secretInfo: {} as SecretInfo
    });

    /**
     * 商品リストの表示件数とソート処理
     */
    const setDispalySpecialproduct = (count = state.currentDisplayCount) => {
      // 一旦、「人気・おすすめ順」を設定
      state.currentResult = state.results.slice(0, count);
      if (state.currentSort === 'price_asc') {
        state.currentResult.sort((firstItem, secondItem) => (firstItem.price > secondItem.price ? 1 : secondItem.price > firstItem.price ? -1 : 0));
      } else if (state.currentSort === 'price_desc') {
        state.currentResult.sort((firstItem, secondItem) => (firstItem.price > secondItem.price ? -1 : secondItem.price > firstItem.price ? 1 : 0));
      }
    };

    /**
     * 特集商品の取得
     */
    const getSpecialProduct = async () => {
      state.loaded.results = false;
      try {
        if (state.passCode) {
          state.results = await SpecialProductService.getSaleSecretProduct(state.defaultBannerId, state.passCode);
          state.secretInfo = {
            secret: `${state.defaultBannerId}`,
            passcode: state.passCode
          };
        } else {
          state.results = await SpecialProductService.getSaleSpecialProduct(state.defaultBannerId);
        }
        state.totalCount = state.results.length;
        setDispalySpecialproduct();
      } catch (error) {
        console.error(error);
        state.results = [] as Array<ProductItem>;
      } finally {
        state.loaded.results = true;
      }
    };

    /**
     * v:htmlだとスクリプトが実行されないため、個別に実行する。
     */
    const runScript = () => {
      const scripts = document.getElementById('include-contents')?.querySelectorAll('script');
      if (scripts) {
        scripts.forEach((script) => {
          const parentNode = script.parentNode;
          const alternativeNode = document.createElement('script');
          if (parentNode) {
            if (script.src) {
              alternativeNode.src = script.src;
            } else {
              alternativeNode.textContent = script.textContent;
            }
            parentNode.replaceChild(alternativeNode, script);
          }
        });
      }
    };

    const init = async () => {
      try {
        // Jsonの取得
        const result = await SpecialProductService.getSpecialJson(route.params.name + '.json');
        state.jsonConfig = result.data;

        // パスコードの有無による制御
        if (state.jsonConfig.limitedPassCode) {
          if (query.passcode && state.jsonConfig.limitedPassCode === query.passcode) {
            state.passCode = state.jsonConfig.limitedPassCode;
            state.defaultBannerId = isDebugMode() ? state.jsonConfig.parent.stagingId : state.jsonConfig.parent.productionId;
          } else {
            state.isPassCodeNeed = true;
          }
        } else {
          state.defaultBannerId = isDebugMode() ? state.jsonConfig.parent.stagingId : state.jsonConfig.parent.productionId;
        }

        // 表示期間の制御
        if (state.jsonConfig.displayPeriod && Object.keys(state.jsonConfig.displayPeriod).length) {
          const today = isDebugMode() && query.date ? `${query.date}` : result.headers.date;
          const from = isDebugMode() ? state.jsonConfig.displayPeriod.stagingValidFrom : state.jsonConfig.displayPeriod.productionValidFrom;
          const to = isDebugMode() ? state.jsonConfig.displayPeriod.stagingValidTo : state.jsonConfig.displayPeriod.productionValidTo;
          if (!validationPeriod(today, from, to)) {
            state.errorMsg = '該当ページは掲載期間が終了いたしました。';
          }
        }

        // インクルードファイルの取得
        if (state.jsonConfig.includeFilePath) {
          IncludeFileService.fetchStaticHtmlFile(state.jsonConfig.includeFilePath).then((response) => {
            const dom = new DOMParser().parseFromString(response, 'text/html');

            const styles = dom.querySelectorAll('style');
            let style = '';
            styles.forEach((elem) => (style += elem.outerHTML));
            const html = dom.getElementById('contents')?.innerHTML || '';

            includeHtml.value = style + html;
          });
        }

        // 各種設定
        document.title = state.jsonConfig.parent.title;
        state.breadcrumbs = [
          {
            path: 'ネットショップ',
            linkUrl: '/'
          },
          {
            path: state.jsonConfig.parent.title,
            linkUrl: ''
          }
        ];
        state.recommendContents = state.jsonConfig.footBanners;
      } catch (error) {
        console.error(error);
        // 取得できない場合は、NotFoundPageに遷移させる
        context.root.$router.push({ name: 'not-found-page' });
      }
    };

    /**
     * リンクを開く際の挙動設定を取得する
     * @param isBlank 'yes'なら別タブで開く、'no'なら同じタブで開く
     */
    const getLinkTarget = (isBlank: 'yes' | 'no') => {
      return isBlank === 'yes' ? '_blank' : '_self';
    };

    init();

    onMounted(() => runScript());
    onUpdated(() => runScript());

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */

    // バナーIDに基づく表示
    watch(
      () => [state.defaultBannerId],
      () => {
        getSpecialProduct();
      }
    );

    // 検索条件情に基づく表示
    watch(
      () => [state.currentSort, state.currentDisplayCount],
      () => {
        state.page = 1;
        setDispalySpecialproduct();
      }
    );

    /**
     * 表示している件数の表示制御
     */
    const displayMaxCount = computed(() => {
      if (state.totalCount > state.currentDisplayCount * state.page) {
        return state.currentDisplayCount * state.page;
      } else {
        return state.totalCount;
      }
    });

    /** -------------------------------------------------------------
     * イベント
     ------------------------------------------------------------- */

    /**
     * パスコード判定
     */
    const validatePassCode = () => {
      if (state.passCode === state.jsonConfig.limitedPassCode) {
        state.isPassCodeNeed = false;
        state.defaultBannerId = isDebugMode() ? state.jsonConfig.parent.stagingId : state.jsonConfig.parent.productionId;
      } else {
        state.errorPassMsg = 'パスワードが違います。もう一度試して下さい。';
      }
    };

    /**
     * メインバナー押下時の処理
     */
    const clickMainBanner = () => {
      state.defaultBannerId = isDebugMode() ? state.jsonConfig.parent.stagingId : state.jsonConfig.parent.productionId;
    };

    /**
     * 子バナー押下時の処理
     */
    const clickChildBanner = (index: number) => {
      state.defaultBannerId = isDebugMode() ? state.jsonConfig.children[index].stagingId : state.jsonConfig.children[index].productionId;
      state.defaultBannerId = isDebugMode() ? state.jsonConfig.childrensp[index].stagingId : state.jsonConfig.childrensp[index].productionId;
    };

    /**
     * もっと見る押下時の検索
     */
    const addSearch = () => {
      state.page += 1;
      setDispalySpecialproduct(state.page * state.currentDisplayCount);
    };

    /**
     * SP用：ソート選択
     * @param val 削除対象
     */
    const selectedSort = (val: string) => {
      state.currentSort = val;
      state.sortDrawer = !state.sortDrawer;
    };

    return {
      ...toRefs(state),
      includeHtml,
      getLinkTarget,
      displayMaxCount,
      validatePassCode,
      clickMainBanner,
      clickChildBanner,
      addSearch,
      selectedSort
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
.loading-products-list {
  height: 20vh;
  width: 100%;
}

/** -------------------------------
  960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// パスコードに入力
.passcode {
  &-area {
    margin: 250px 0;
    text-align: center;
  }

  &-item {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}
// コンテンツ枠
.sale-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 70px;
}

// タイトル
.sale-title {
  font-size: 16px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// バナー
.banner-img {
  max-width: 100% !important;

  &.link:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
.smp {
  padding: 3px !important;
  box-sizing: border-box;
}

// 一覧レイアウト
$search-condition-width: 350px;
$search-condition-mr: 20px;
.list-layout {
  display: flex;
  max-width: calc(100vw - 20px);
  margin-top: 20px;
  margin-bottom: 40px;

  &-search-conditions {
    width: $search-condition-width;
    margin-right: $search-condition-mr;
  }

  &-resulut {
    max-width: calc(100% - #{$search-condition-width} - #{$search-condition-mr});
  }
}

// 表示条件
.display-condition-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: $text-grey;

  @at-root %display-condition-text {
    flex: 0 0 auto;
    margin-right: 8px;
    padding-top: 8px;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
  }

  .sort {
    display: inline-flex;
    flex: 0 0 260px;
    margin-right: 12px;

    &-text {
      @extend %display-condition-text;
    }

    &-list {
      display: inline-block;
      flex: 1 1 auto;
      color: $text-grey;
    }
  }

  .display-count {
    display: inline-flex;
    flex: 0 0 200px;

    &-text {
      @extend %display-condition-text;
    }
    &-list {
      display: inline-block;
      flex: 1 1 auto;
      color: $text-grey;
    }
  }
}

// 検索結果件数
.result-count {
  margin-bottom: 20px;
  font-size: 18px;
  color: $text-grey;
}

// 商品一覧
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

// もっと見る
.add-search-btn {
  height: 65px !important;
  font-size: 16px;

  &-icon {
    margin-left: 50px;
  }
}

// おすすめコンテンツ
.recommend-contents {
  padding: 10px 16px;

  &-title {
    margin-bottom: 20px;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      margin-bottom: 15px;
    }
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.container-narrow {
  // パスコードに入力
  .passcode {
    &-area {
      margin: 100px 0;
    }
  }

  // コンテンツ枠
  .sale-container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  // タイトル
  .sale-title {
    padding: 0 8px;
  }

  // テキスト
  .sale-text {
    padding: 0 8px;
  }

  // 一覧レイアウト
  .list-layout {
    display: block;
    margin-top: 8px;
    margin-bottom: 0;
    max-width: 100%;

    &-search-conditions {
      display: block;
      width: 100%;
      margin: 0;
      padding: 20px 8px;
    }

    &-resulut {
      display: block;
      width: 100%;
      max-width: 100%;
      padding-bottom: 12px;
      background: $bg-light-grey2;
    }
  }

  // 共通：ドロワーのサイズ
  .drawer-layout {
    z-index: 510;
    width: 80% !important;
    max-width: 310px !important;
  }

  // 絞り込み条件（ボタン領域）
  $margin-r: 8px;
  .conditions-btn-wrap {
    width: 100%;
    margin-bottom: 8px;
    text-align: right;

    &.fixed {
      position: fixed;
      width: calc(100% - 16px);
      background: $bg-white;
      z-index: 5;
      padding: 10px 0;
    }

    .conditions-sort-btn {
      display: inline-block;
      font-size: 16px;
      background: $bg-white;
    }
  }

  // 並び替えリスト
  .sort-wrap {
    background: $bg-grey;

    .fixed-sort {
      &-title {
        margin-bottom: 12px;
        padding: 0 12px;
        line-height: 60px;
        background: $bg-white;

        &-icon {
          color: $ec-grey;
          margin-right: 8px;
        }

        &-text {
          vertical-align: middle;
        }
      }

      &-item {
        padding: 0 12px;
        line-height: 60px;
        border-bottom: solid 1px $ec-light-grey;
        background: $bg-white;
      }
    }
  }

  // 表示件数
  .display-condition-wrap {
    height: 40px;
    margin-bottom: 0;
    justify-content: space-between;

    .result-count {
      flex: 0 0 auto;
      align-self: center;
      margin-right: 8px;
      margin-bottom: 0;
      font-size: 16px;
    }

    .display-count {
      display: block;
      flex: 0 0 auto;

      &-text {
        flex: unset;
        margin-right: 4px;
        white-space: nowrap;
        font-size: 14px;
        font-weight: normal;
      }
      &-list {
        flex: unset;
        width: 95px;
        font-size: 16px;
      }
    }
  }

  // 商品一覧
  .product-list {
    margin-bottom: 4px;
  }

  // もっと見る
  .add-search-btn {
    position: relative;
    width: calc(100% - 16px);
    min-width: auto !important;
    margin: 0 auto;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 20px;
    }
  }
  // おすすめコンテンツ
  .recommend-contents {
    padding: 16px 0;
    border-bottom: solid 12px $bg-light-grey2;

    &-group {
      padding: 0 12px;
    }

    &-title {
      margin-bottom: 12px;
      padding: 0 12px;
      font-size: 18px;
    }

    &-item {
      width: 170px;

      &:not(:last-child) {
        margin-right: 12px;
      }
    }

    &-img {
      width: 100%;
    }
  }
}

/* SPサイズの場合に表示が大きすぎるため縮小 */
/* iOSで拡大されないようフォントサイズは変えない */
.container-narrow .form-text {
  ::v-deep input,
  ::v-deep .v-input__icon,
  ::v-deep .v-select__selection {
    font-size: inherit;
    transform: scale(calc(14 / 16));
  }

  ::v-deep .v-input__slot {
    padding: 0 4px !important;
  }
}
</style>

<style lang="scss">
/* 並び替えのv-input__slotのCSSを上書き */
.container-narrow .display-count-list .v-input__slot {
  background: $bg-white;
}
</style>
