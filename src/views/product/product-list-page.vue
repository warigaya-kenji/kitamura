<template>
  <div
    id="product-list-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- インクルードエリア -->
    <div v-html="includeHtml.categoryCode" v-if="includeHtml.categoryCode"></div>
    <div v-html="includeHtml.keyword" v-if="includeHtml.keyword"></div>

    <!-- パンくず -->
    <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />
    <script type="application/ld+json">
      {{ jsonLd }}
    </script>

    <!-- 検索結果ゼロ件メッセージ -->
    <p class="none-result-message" v-if="!totalCount">条件に該当する商品は見つかりませんでした。</p>

    <!-- タイトル（新品；カテゴリー選択時） -->
    <h1 class="category-title" v-if="!isUsed && !isKeyword3 && currentCategoryInfo && totalCount">{{ currentCategoryInfo.concatenationCategoryName }}</h1>
    <!-- タイトル（中古在庫；同型商品選択時） -->
    <h1 class="category-title mt-2" v-else-if="isUsed && isKeyword3 && totalCount">{{ usedTitle }}</h1>
    <!-- タイトル（中古；カテゴリー選択時） -->
    <h1 class="category-title" v-else-if="isUsed && !isKeyword3 && totalCount">{{ usedTitle }}</h1>

    <!-- メーカーリスト 960px未満 -->
    <maker-slider
      v-if="$vuetify.breakpoint.smAndDown && !isUsed && currentCategoryInfo && totalCount"
      :categoryCode="currentCategoryInfo.code ? currentCategoryInfo.code : ''"
    />

    <div class="list-layout">
      <!-- 検索条件 960px以上 -->
      <div id="product-search-conditions" class="list-layout-search-conditions" v-if="$vuetify.breakpoint.mdAndUp">
        <!-- 選択中条件 -->
        <v-card outlined tile class="current-conditions">
          <div class="current-conditions-title">検索条件</div>
          <v-list dense class="current-conditions-list">
            <template v-for="(condition, index) in currentConditions">
              <v-list-item class="current-conditions-item" :key="condition.paramCode" v-if="condition.paramCode !== 'narrow18'">
                <v-list-item-content class="current-conditions-text">{{ condition.paramText }}:&nbsp;{{ condition.valueText }}</v-list-item-content>
                <v-btn
                  class="current-conditions-delete-btn"
                  v-if="!((condition.paramCode === 'category' && currentCategoryInfo.digit === '4') || condition.paramCode === 'narrow18')"
                  text
                  icon
                  color="rgba(0, 113, 133, 1)"
                  @click="removeCondition(index)"
                >
                  <v-icon>fas fa-times-circle</v-icon>
                </v-btn>
              </v-list-item>
            </template>
          </v-list>
        </v-card>

        <!-- 条件 -->
        <div class="conditions-wrap ec-back-color" v-if="totalCount">
          <div class="filter">
            <div class="filter-area" v-show="isActiveFilterButton">
              <span class="filter-text">絞り込み</span>
              <v-btn class="filter-btn" small outlined @click="resetCondition">リセット</v-btn>
            </div>
            <div class="filter-area">
              <span class="filter-text">絞り込み結果</span>
              <span class="filter-count" v-if="totalCount >= 0">{{ totalCount }}</span
              >件
            </div>
          </div>

          <!-- 条件リスト -->
          <conditions
            :is-used="isUsed"
            :current-category="currentCategoryInfo"
            :current-conditions="currentConditions"
            :condision-count-list="condisionsCount"
            @change-narrow18="changeNarrow18"
            @add="add"
          />
        </div>
      </div>

      <!-- 検索条件 960px未満 -->
      <div
        id="product-search-conditions"
        class="list-layout-search-conditions"
        v-if="$vuetify.breakpoint.smAndDown && totalCount"
        v-scroll="onScroll"
        ref="productSearchConditions"
      >
        <div class="conditions-btn-wrap" ref="conditionsBtnWrap" :class="{ fixed: productSearchConditionsFixed }">
          <v-btn class="conditions-btn" dark depressed color="rgba(0, 113, 133, 1)" @click.stop="condtionDrawer = !condtionDrawer"
            >絞り込み({{ currentConditions.length }})</v-btn
          >
          <v-btn class="conditions-sort-btn" dark depressed color="rgba(0, 113, 133, 1)" @click.stop="sortDrawer = !sortDrawer">並び替え</v-btn>
        </div>

        <!-- 条件リスト -->
        <v-navigation-drawer class="drawer-layout conditions-wrap ec-back-color" v-model="condtionDrawer" fixed right temporary>
          <div class="filter">
            <div class="filter-area">
              <v-btn class="filter-btn" :class="{ active: isActiveFilterButton }" small outlined @click="resetCondition">リセット</v-btn>
              <v-btn class="filter-btn" :class="{ active: isActiveFilterButton }" small outlined @click="condtionDrawer = !condtionDrawer">絞り込み</v-btn>
            </div>
            <div class="filter-area">
              <span class="filter-text">絞り込み結果</span>
              <span class="filter-text">
                <span class="filter-count">{{ totalCount }}</span
                >件
              </span>
            </div>
          </div>
          <conditions
            :is-used="isUsed"
            :current-category="currentCategoryInfo"
            :current-conditions="currentConditions"
            :condision-count-list="condisionsCount"
            @change-narrow18="changeNarrow18"
            @add="add"
          />
        </v-navigation-drawer>

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

        <!-- 選択中条件-->
        <div class="current-conditions">
          <v-slide-group class="current-conditions-area" max-width="100%">
            <v-slide-item v-for="(condition, index) in currentConditions" :key="condition.paramCode" class="current-conditions-item">
              <v-btn dark depressed color="rgba(0, 113, 133, 1)">
                <p class="current-conditions-text">{{ condition.paramText }}</p>
                <p class="current-conditions-text">{{ condition.valueText }}</p>
                <v-icon
                  v-if="!((condition.paramCode === 'category' && currentCategoryInfo.digit === '4') || condition.paramCode === 'narrow18')"
                  small
                  class="current-conditions-icon"
                  @click="removeCondition(index)"
                  >far fa-times-circle</v-icon
                >
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </div>

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
              @change="isChangedCond = true"
            ></v-select>
          </div>
        </div>
      </div>

      <!-- 検索結果一覧 -->
      <div
        id="product-list-contents-area"
        class="list-layout-result"
        :style="{
          background: $vuetify.breakpoint.smAndDown && !totalCount ? 'rgba(255, 255, 255, 1)' : ''
        }"
      >
        <!-- 検索結果ゼロ件 ヒント -->
        <div class="none-result-hint" v-if="!totalCount">
          <p class="none-result-hint-title">検索のヒント</p>
          <ul class="none-result-hint-list">
            <li class="none-result-hint-item">キーワード検索のカテゴリーを「全てのカテゴリから」に変更し、再検索してください</li>
            <li class="none-result-hint-item">条件を変えて再検索ください</li>
            <li class="none-result-hint-item">
              「下取り」について詳しく知りたい方は
              <a href="/sitemap/riyou_shitadori_index.html">コチラ</a>
            </li>
            <li class="none-result-hint-item">
              「中古カメラ」等をお探しの方は
              <router-link to="/ec/ct/used/list">コチラ</router-link>
            </li>
            <li class="none-result-hint-item">
              「商品の取扱いリクエスト」は
              <a href="https://member.kitamura.jp/inq/inqNs/" target="_blank">問い合わせフォーム</a>からご連絡ください
            </li>
          </ul>
        </div>

        <!-- メーカーリスト 960px以上 -->
        <maker-slider
          v-if="$vuetify.breakpoint.mdAndUp && !isUsed && currentCategoryInfo && totalCount"
          :categoryCode="currentCategoryInfo.code ? currentCategoryInfo.code : ''"
        />

        <!-- 表示条件 960px以上 -->
        <div class="display-condition-wrap" v-if="$vuetify.breakpoint.mdAndUp && totalCount">
          <div class="sort">
            <span class="sort-text">並び替え</span>
            <v-select
              id="product-sort-select"
              class="sort-list"
              v-model="currentSort"
              :items="sort"
              outlined
              dense
              height="100%"
              @change="isChangedCond = true"
            ></v-select>
          </div>
          <div class="comparison" :style="{ visibility: !isUsed ? 'visible' : 'hidden' }">
            <span class="comparison-text">比較</span>
            <div class="comparison-area">
              <span class="comparison-current-text">
                <span class="comparison-count">{{ comparison.comparisonList.length }}</span
                >件/{{ comparison.limit }}件中
              </span>
              <v-btn small dark depressed color="rgba(112, 112, 112, 1)" @click="toComparison">チェックした商品を比較する</v-btn>
              <v-btn small dark depressed color="rgba(112, 112, 112, 1)" @click="comparison.clear">リセット</v-btn>
            </div>
          </div>
          <div class="display-count">
            <span class="display-count-text">表示件数</span>
            <v-select
              class="display-count-list"
              v-model="currentDisplayCount"
              :items="displayCountList"
              outlined
              dense
              height="100%"
              @change="isChangedCond = true"
            ></v-select>
          </div>
        </div>
        <!-- 結果件数と表示件数 960px以上 -->
        <div class="result-count" v-if="$vuetify.breakpoint.mdAndUp && totalCount >= 0">{{ totalCount }}件中1-{{ displayMaxCount }}の結果</div>

        <!-- 商品一覧 -->
        <div id="product-list-area" class="product-list" v-if="totalCount || !loaded.results">
          <!-- 商品 -->
          <template v-if="loaded.results && results.length">
            <template v-if="!isUsed">
              <product
                v-for="item in results"
                :key="item.itemid"
                :product="item"
                :display-price-type="displayProductPriceType"
                :used-products-summary="usedProductsSummary.filter((summary) => summary.janCode === item.itemid)[0]"
              />
            </template>
            <template v-if="isUsed">
              <used-product v-for="item in results" :key="item.itemid" :product="item" :is-keyword3="isKeyword3" />
            </template>
          </template>
          <div class="loading-products-list" v-if="!loaded.results">
            <section-loading />
          </div>
        </div>
        <!-- もっと見る -->
        <!-- FIXME: コンポーネント化した方が良いかも -->
        <v-btn v-show="results.length < totalCount" class="add-search-btn" block dark depressed tile color="rgba(112, 112, 112, 1)" @click="addSearch()">
          もっと見る
          <v-icon class="add-search-btn-icon" small color="rgba(255, 255, 255, 1)">fas fa-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- 検索一覧下部List（新着、中古新着or新品人気、おすすめ） -->
    <div
      v-if="!isUsed && totalCount && currentCategoryInfo && Object.keys(currentCategoryInfo).length"
      class="suggest-product ec-back-color"
      :class="{ 'suggest-product-top': $vuetify.breakpoint.smAndDown }"
    >
      <div class="suggest-product-area" v-if="newerProducts.length">
        <span class="suggest-product-title">新着商品</span>
        <simple-product-slider :items="newerProducts" v-if="loaded.newerProducts" />
        <div class="loading-suggest-products-list" v-if="!loaded.newerProducts">
          <section-loading />
        </div>
      </div>
      <!-- 960px以上 -->
      <div class="suggest-product-area" v-if="$vuetify.breakpoint.mdAndUp && usedOrNewerPopularityProducts && usedOrNewerPopularityProducts.length">
        <span class="suggest-product-title">{{ usedOrNewerPopularityTitle }}</span>
        <simple-product-slider :items="usedOrNewerPopularityProducts" v-if="loaded.usedOrNewerPopularityProducts" />
        <div class="loading-suggest-products-list" v-if="!loaded.usedOrNewerPopularityProducts">
          <section-loading />
        </div>
      </div>
      <!-- 960px以上 -->
      <div class="suggest-product-area" v-if="$vuetify.breakpoint.mdAndUp && recommendProducts && recommendProducts.length">
        <span class="suggest-product-title">あなたにおすすめ</span>
        <simple-product-slider :items="recommendProducts" v-if="loaded.recommendProducts" />
        <div class="loading-suggest-products-list" v-if="!loaded.recommendProducts">
          <section-loading />
        </div>
      </div>
    </div>

    <!-- おすすめコンテンツ -->
    <div class="recommend-contents" v-if="!isUsed && recommendContents.length && totalCount">
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

    <!-- 検索一覧下部List（中古新着or新品人気、おすすめ） 960px未満 -->
    <div
      v-if="$vuetify.breakpoint.smAndDown && !isUsed && totalCount"
      class="suggest-product ec-back-color"
      :class="{ 'suggest-product-bottom': $vuetify.breakpoint.smAndDown }"
    >
      <div class="suggest-product-area" v-if="usedOrNewerPopularityProducts && usedOrNewerPopularityProducts.length">
        <span class="suggest-product-title">{{ usedOrNewerPopularityTitle }}</span>
        <simple-product-slider :items="usedOrNewerPopularityProducts" v-if="loaded.usedOrNewerPopularityProducts" />
        <div class="loading-suggest-products-list" v-if="!loaded.usedOrNewerPopularityProducts">
          <section-loading />
        </div>
      </div>
      <div class="suggest-product-area" v-if="recommendProducts && recommendProducts.length">
        <span class="suggest-product-title">あなたにおすすめ</span>
        <simple-product-slider :items="recommendProducts" v-if="loaded.recommendProducts" />
        <div class="loading-suggest-products-list" v-if="!loaded.recommendProducts">
          <section-loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, computed, watch, onMounted, ref } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Conditions from '@/components/product-list/conditions.vue';
import MakerSlider from '@/components/product-list/maker-slider.vue';
import Product from '@/components/product-list/product.vue';
import UsedProduct from '@/components/product-list/used-product.vue';
import SimpleProductSlider from '@/components/common/simple-product-slider.vue';
import SectionLoading from '@/components/common/section-loading.vue';

import { convertToUsedStatesText } from '@/logic/utils';
import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import IncludeFileService from '@/logic/include-file.service';
import ProductListConfigsService from '@/logic/tsv/product-list-configs.service';
import ProductListSysConfigsService from '@/logic/tsv/product-list-sys-configs.service';
import CanonicalService from '@/logic/canonical.service';

import { NewerCategory, UsedCategory, SpecialBanner } from '@/types/tsv-config';
import { ProductItem, ProductListCount } from '@/types/product-list';
import { UsedProductsSummary } from '@/types/product';
import { ConditionItem } from '@/types/conditions';

import { SEARCH_STATE } from '@/constants/search-state';
import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
import { NEWER_SORT_LIST, USED_SORT_LIST } from '@/constants/sort-list';

type BreadcrumbItem = {
  path: string;
  linkUrl: string;
};

// TODO: 共通スライダーのアイテムなので、共通化
type sliderItem = {
  isUsed?: boolean;
  janCode: string;
  images: object;
  itemName: string;
  price: number;
  ratingTotal: number;
};

const DEFAULT_TITLE = '【カメラのキタムラ】デジカメ・ビデオカメラ・プリンター等の通販';

export default Vue.extend({
  name: 'product-list-page',
  components: {
    breadcrumbs: Breadcrumbs,
    conditions: Conditions,
    'maker-slider': MakerSlider,
    product: Product,
    'used-product': UsedProduct,
    'simple-product-slider': SimpleProductSlider,
    'section-loading': SectionLoading
  },
  setup: (_, context) => {
    const { header, category, condition, shop, comparison } = context.root.$store;

    const state = reactive({
      // 検索とURL書き換え判定用
      isfinishedInit: false,
      isChangedCond: false,
      // ネット中古URL
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      // 中古表示判定用
      isUsed: false,
      usedTitle: '',
      // 同型商品絞り込み判定用
      isKeyword3: false,
      // 現在選択中のカテゴリ情報, キーワード
      currentCategoryInfo: {} as NewerCategory,
      currentKeyword: '',
      // パンくず
      breadcrumbs: [] as Array<BreadcrumbItem>,
      // 検索条件
      currentConditions: [] as Array<ConditionItem>,
      // スマホ用の表示制御
      condtionDrawer: false,
      sortDrawer: false,
      // 並び替え
      currentSort: NEWER_SORT_LIST[0].value,
      sort: NEWER_SORT_LIST,
      // 表示件数
      currentDisplayCount: context.root.$vuetify.breakpoint.mdAndUp ? DISPLAY_COUNT_LIST[1].value : DISPLAY_COUNT_LIST[0].value,
      displayCountList: DISPLAY_COUNT_LIST,
      // 表示ページ
      page: 1,
      // 商品件数
      totalCount: -1,
      condisionsCount: {} as ProductListCount,
      // 検索結果
      results: [] as Array<ProductItem>,
      // 価格の表示制御
      displayProductPriceType: '0',
      // 中古価格情報
      usedProductsSummary: [] as Array<UsedProductsSummary>,
      // 検索一覧下部List（新着、中古新着or新品人気、おすすめ）
      newerProducts: [] as Array<sliderItem>,
      usedOrNewerPopularityTitle: '',
      usedOrNewerPopularityProducts: [] as Array<sliderItem>,
      recommendProducts: [] as Array<sliderItem>,
      // おすすめコンテンツ
      recommendContents: [] as Array<SpecialBanner>,
      // ロード状態
      loaded: {
        results: false,
        newerProducts: false,
        usedOrNewerPopularityProducts: false,
        recommendProducts: false
      },
      // 検索条件部要素
      productSearchConditions: ref<HTMLElement>(),
      conditionsBtnWrap: ref<HTMLElement>(),
      productSearchConditionsFixed: false,
      // JSON-LD
      jsonLd: '' as string,
      // インクルードファイル
      includeHtml: {
        categoryCode: '',
        keyword: ''
      }
    });

    // FIXME: 冗長的なのでリファクタリングしたい
    const init = async () => {
      // 初期化
      state.currentCategoryInfo = {} as NewerCategory;
      state.currentKeyword = '';
      state.currentConditions = [] as Array<ConditionItem>;
      state.results = [] as Array<ProductItem>;
      state.isfinishedInit = false;
      state.isChangedCond = false;
      state.isKeyword3 = false;

      // パスとパラメーター取得
      const paths = context.root.$route.path;
      const query = context.root.$route.query;

      /** -------------------------------------------------------------
       * 中古在庫判定処理
       ------------------------------------------------------------- */
      if (query.type && query.type === 'u') {
        state.isUsed = true;
        state.sort = USED_SORT_LIST;

        // カノニカルを設定
        CanonicalService.set(window.location.origin + '/ec/list?type=u&sort=update_date');
      } else {
        state.isUsed = false;
        state.sort = NEWER_SORT_LIST;
      }

      /** -------------------------------------------------------------
       * 前提条件情報の取得
       ------------------------------------------------------------- */
      // 前提条件の取得
      if (!state.isUsed) {
        // カテゴリー
        if (!category.newerCategory.length) await category.fetchNewerCategories();
        // 検索条件
        if (!condition.newerConditions.length) await condition.fetchNewerConditions();
        // 検索条件の選択肢
        if (!Object.keys(condition.newerConditionOptions).length) await condition.fetchNewerConditionOptions();
        // 価格の表示用情報
        if (!condition.newerPrice.length) await condition.fetchNewerPrice();
      } else {
        // カテゴリー
        if (!category.usedCategory.length) await category.fetchUsedCategories();
        // 検索条件
        if (!condition.usedConditions.length) await condition.fetchUsedConditions();
        // 検索条件の選択肢
        if (!Object.keys(condition.usedConditionOptions).length) await condition.fetchUsedConditionOptions();
        // 価格の表示用情報
        if (!condition.usedPrice.length) await condition.fetchUsedPrice();
        // 店舗情報
        if (!shop.shopList.length) await shop.fetchShop();
      }

      /** -------------------------------------------------------------
       * 現在選択中の条件を設定
       ------------------------------------------------------------- */
      // URL:ec/ct/{カテゴリーコード}パターンのカテゴリーコードを取得
      let categoryCode = '';
      if (paths.search('list') === -1 && !query.category) {
        paths.split('/').forEach((path: string, index: number) => {
          if (index > 2) {
            categoryCode += path;
          }
        });
      }

      // 現在のカテゴリーを設定
      if (!state.isUsed) {
        if (categoryCode) {
          state.currentCategoryInfo = category.searchNewerCategoryByCode(categoryCode);
        } else {
          // URLパラメーターの場合、カテゴリーが名称になっている
          state.currentCategoryInfo = category.searchNewerCategoryByConcatenationName(query.category);
        }
      } else {
        let currentUsedCategory = {} as UsedCategory;
        if (categoryCode) {
          currentUsedCategory = category.searchUsedCategoryByCode(categoryCode);
        } else {
          // URLパラメーターの場合、カテゴリーが名称になっている
          currentUsedCategory = category.searchUsedCategoryByName(query.category);
        }
        // バンくずなどの処理のためにNewerCategoryに落とし込む
        if (Object.keys(currentUsedCategory).length) {
          state.currentCategoryInfo = {
            code: currentUsedCategory.newerCode,
            digit: `${currentUsedCategory.newerCode.length}`,
            parentCategoryName: currentUsedCategory.categoryName,
            childCategoryName: '',
            grandchildCategoryName: '',
            concatenationCategoryName: currentUsedCategory.categoryName,
            path: ''
          };
        }
      }

      // 後続の処理用にカテゴリーをqueryに格納
      if (Object.keys(state.currentCategoryInfo).length) query.category = state.currentCategoryInfo.concatenationCategoryName;

      // 状態：新品・中古の初期値を設定
      if (!state.isUsed && !query.narrow18) {
        query.narrow18 = '0';
      }

      // 検索条件TSVから取得できるクエリパラメーターのみをcurrentConditionsに追加
      Object.entries(query).forEach(([key, val]) => {
        const conditionInfo = condition.searchConditionByCode(key, state.isUsed);

        // 空の値,条件に存在しないもの(keywordは除く)はスキップ
        if (!val || (!Object.keys(conditionInfo).length && key !== 'keyword')) return;

        switch (key) {
          case 'category':
            if (Object.keys(state.currentCategoryInfo).length) {
              state.currentConditions.unshift({
                paramCode: key,
                paramText: conditionInfo.name,
                value: val as string,
                valueText: state.currentCategoryInfo.concatenationCategoryName
              });
            }
            break;
          case 'keyword':
            state.currentKeyword = val as string;
            state.currentConditions.push({
              paramCode: key,
              paramText: 'キーワード',
              value: val as string,
              valueText: val as string
            });
            break;
          // 状態：新品・中古
          case 'narrow18':
            state.displayProductPriceType = val as string;
            state.currentConditions.push({
              paramCode: SEARCH_STATE.key,
              paramText: SEARCH_STATE.text,
              value: val as string,
              valueText: SEARCH_STATE.option.filter((op) => op.value === (val as string))[0].text
            });
            break;
          // 価格
          case 'price':
          case 'member_price':
            state.currentConditions.push({
              paramCode: key,
              paramText: conditionInfo.name,
              value: val as string,
              valueText: conditionInfo.isConvert ? condition.convertToPriceText(val, state.isUsed) : (val as string)
            });
            break;
          // 中古在庫:商品状態
          case 'n1c':
            if (state.isUsed) {
              const targetStateText = convertToUsedStatesText(val as string);
              if (targetStateText) {
                state.currentConditions.push({
                  paramCode: key,
                  paramText: conditionInfo.name,
                  value: val as string,
                  valueText: conditionInfo.isConvert ? targetStateText : (val as string)
                });
              }
            }
            break;
          // 中古在庫:店舗
          case 'narrow2':
            if (state.isUsed && shop.shopList.length) {
              state.currentConditions.push({
                paramCode: key,
                paramText: conditionInfo.name,
                value: val as string,
                valueText: conditionInfo.isConvert ? shop.convertToShopText(val) : (val as string)
              });
            }
            break;
          // 中古在庫:JanCode指定
          case 'keyword3':
            // 同型商品ボタンを非表示にする
            state.isKeyword3 = true;
            state.currentConditions.push({
              paramCode: key,
              paramText: conditionInfo.name,
              value: val as string,
              valueText: val as string
            });
            break;
          default:
            state.currentConditions.push({
              paramCode: key,
              paramText: conditionInfo.name,
              value: val as string,
              valueText: val as string
            });
            break;
        }
      });

      // 並び替え、表示件数を設定
      const querySort = state.sort.filter((item) => item.value === query.sort)[0];
      const queryDisplayCount = state.displayCountList.filter((item) => item.value === +query.limit)[0];
      if (querySort) {
        state.currentSort = querySort.value;
      } else {
        state.currentSort = state.isKeyword3 ? state.sort[4].value : state.sort[0].value;
      }
      if (queryDisplayCount) {
        state.currentDisplayCount = queryDisplayCount.value;
      } else {
        state.currentDisplayCount = context.root.$vuetify.breakpoint.mdAndUp ? state.displayCountList[1].value : state.displayCountList[0].value;
      }

      state.isfinishedInit = true;
    };

    /**
     * タイトル・パンくずの生成(新品・中古)
     */
    const generateBreadcrumbs = () => {
      const breadcrumbs: Array<BreadcrumbItem> = [];
      const jsonLdList = new Array<string>();
      let position = 1;
      if (state.currentCategoryInfo && Object.keys(state.currentCategoryInfo).length) {
        // パンくずの作成（カテゴリー）
        breadcrumbs.push({
          path: 'ネットショップ',
          linkUrl: '/'
        });
        Object.entries(state.currentCategoryInfo).forEach(([key, val]) => {
          if ((key === 'parentCategoryName' || key === 'childCategoryName' || key === 'grandchildCategoryName') && val) {
            let linkCode = '';

            switch (key) {
              case 'parentCategoryName':
                linkCode = state.currentCategoryInfo.code.substr(0, 4);
                break;
              case 'childCategoryName':
                linkCode = state.currentCategoryInfo.code.substr(0, 4) + '/' + state.currentCategoryInfo.code.substr(4, 3);
                break;
              case 'grandchildCategoryName':
                linkCode =
                  state.currentCategoryInfo.code.substr(0, 4) +
                  '/' +
                  state.currentCategoryInfo.code.substr(4, 3) +
                  '/' +
                  state.currentCategoryInfo.code.substr(7, 3);
                break;
              default:
                break;
            }

            breadcrumbs.push({
              path: val,
              linkUrl: `/ec/ct/${linkCode}/`
            });

            // JSON-LDのデータ準備
            const concatenatedCategoryNames = breadcrumbs
              .slice(1, position + 1)
              .map((b) => b.path)
              .join(':');
            jsonLdList.push(
              `{"@type": "ListItem", "position": ${position}, "name": "${concatenatedCategoryNames}", "item": "https://shop.kitamura.jp/ec/ct/${linkCode}/"}`
            );

            position++;
          }
        });

        // パンくずの作成（キーワード）
        if (state.currentKeyword) {
          const keyword = state.currentKeyword;

          breadcrumbs.push({
            path: keyword as string,
            linkUrl: `/ec/list?keyword=${keyword}`
          });

          if (!state.isUsed) {
            // タイトルの設定（キーワード）
            document.title = `${keyword} の商品一覧 | カメラのキタムラ`;
          }

          // JSON-LDのデータ準備
          jsonLdList.push(
            `{"@type": "ListItem", "position": ${position}, "name": "${keyword}", "item": "https://shop.kitamura.jp/ec/list?keyword=${keyword}"}`
          );
        } else if (!state.isUsed) {
          // タイトルの設定（カテゴリー）
          const titleItem = breadcrumbs
            .slice(1)
            .map((b) => b.path)
            .join('の');

          if (breadcrumbs.length < 4) {
            document.title = `【カメラのキタムラ】${titleItem}の通販・商品一覧`;
          } else {
            document.title = `${titleItem}の通販・商品一覧`;
          }
        }

        if (!state.isUsed) {
          // パンくずの最後は、リンクなしとする
          breadcrumbs[breadcrumbs.length - 1].linkUrl = '';
          state.breadcrumbs = breadcrumbs;
        }

        // JSON-LD
        const combinedListElement = jsonLdList.join(',');
        state.jsonLd = `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [${combinedListElement}]}`;
      } else {
        document.title = DEFAULT_TITLE;
      }
    };

    /**
     * タイトル・パンくずの生成（中古在庫）
     * @param itemCode 商品コード
     */
    const generateUsedBreadcrumbs = async (itemCode: string, itemTitle: string): Promise<void> => {
      // カテゴリ指定時
      if (state.currentCategoryInfo.concatenationCategoryName) {
        state.breadcrumbs = [
          { path: 'TOP', linkUrl: '/' },
          { path: '中古商品', linkUrl: '/ec/ct/used/list' },
          { path: `${state.currentCategoryInfo.concatenationCategoryName}の中古在庫`, linkUrl: '' }
        ];

        // カテゴリ、マウント、タイプの順番で値があるところまでリストにしてタイトルに使用する
        const category = state.currentCategoryInfo.concatenationCategoryName;
        const mount = state.currentConditions.find((condition) => condition.paramCode === 's2');
        const categoryType = state.currentConditions.find((condition) => condition.paramCode === 's4');
        let categoryList = mount?.valueText ? [category, mount.valueText, categoryType?.valueText] : [category];
        categoryList = categoryList.filter((item) => !!item);
        const titleItem = categoryList.join('の');

        if (categoryList.length < 2) {
          document.title = `【カメラのキタムラ】中古の${titleItem}のおすすめ商品一覧`;
        } else if (categoryList.length < 3) {
          document.title = `【カメラのキタムラ】中古の${titleItem}の通販・商品一覧`;
        } else {
          document.title = `【中古】${titleItem}の通販・商品一覧`;
        }

        // h1タイトル
        state.usedTitle = categoryList.join('：') + 'の中古商品一覧';

        // 同型商品表示時
      } else if (state.isKeyword3) {
        try {
          const usedProduct = await ProductService.fetchUsedProducts(itemCode);

          const itemName = usedProduct.itemName.replace('【中古】', '');
          state.breadcrumbs = [
            { path: 'TOP', linkUrl: '/' },
            { path: usedProduct.prdType, linkUrl: `/ec/list?type=u&category=${usedProduct.prdType}` },
            { path: usedProduct.makerName, linkUrl: `/ec/list?type=u&category=${usedProduct.prdType}&narrow1=${usedProduct.makerName}` },
            { path: itemName, linkUrl: `/ec/pd/${usedProduct.janCode}` },
            { path: '中古在庫の一覧', linkUrl: '' }
          ];
          // titleの設定
          if (state.isKeyword3) {
            document.title = `【中古】${itemTitle} | ${usedProduct.prdType}`;
            state.usedTitle = `【中古】 ${itemTitle} の在庫一覧`;
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        state.breadcrumbs = [
          { path: 'TOP', linkUrl: '/' },
          { path: '中古商品', linkUrl: '/ec/ct/used/list' },
          { path: '中古在庫', linkUrl: '' }
        ];
      }
    };

    /**
     * 現在選択中のカテゴリーのみの条件を生成
     */
    const generateCategoryCondition = (): Array<ConditionItem> => {
      let currentCategoryCondition = [] as Array<ConditionItem>;
      if (Object.keys(state.currentCategoryInfo).length) {
        currentCategoryCondition = [
          {
            paramCode: 'category',
            paramText: '',
            value: state.currentCategoryInfo.code,
            valueText: state.currentCategoryInfo.concatenationCategoryName
          }
        ];
      }
      return currentCategoryCondition;
    };

    /**
     * 現在選択中の親カテゴリーを設定する
     */
    const setParentCategory = () => {
      if (Object.keys(state.currentCategoryInfo).length) {
        state.currentCategoryInfo = category.searchParentCategoryByCode(state.currentCategoryInfo.code);
        state.currentConditions.map((cond) => {
          if (cond.paramCode === 'category') {
            cond.value = state.currentCategoryInfo.code;
            cond.valueText = state.currentCategoryInfo.concatenationCategoryName;
          }
        });
      }
    };

    /**
     * 現在の検索条件でURLを更新
     */
    const applyParamToURL = () => {
      let param = '';

      // 条件
      state.currentConditions.forEach((cond, index) => {
        param = index === 0 ? param + '?' : param + '&';
        // カテゴリはコード値ではなく名称を用いる
        param = cond.paramCode === 'category' ? param + `${cond.paramCode}=${cond.valueText}` : param + `${cond.paramCode}=${cond.value}`;
      });
      if (state.isUsed) param = param ? param + '&type=u' : '?type=u';

      // 並び替え
      param = param ? param + '&sort=' + state.currentSort : '?sort=' + state.currentSort;
      // 表示件数
      param = param ? param + '&limit=' + state.currentDisplayCount : '?limit=' + state.currentDisplayCount;

      window.history.pushState(null, document.title, context.root.$route.path + param);
    };

    /** -------------------------------------------------------------
     * 検索結果
     ------------------------------------------------------------- */
    /**
     * 検索関連APIエラー時の処理
     */
    const searchError = () => {
      state.results = [] as Array<ProductItem>;
      state.totalCount = 0;
      state.condisionsCount = {} as ProductListCount;
    };

    /**
     * 検索結果の取得(新品)
     */
    const searchNewerProductList = async (serchCondition: Array<ConditionItem>, sort: string, displayCount: number, type: string, page: number) => {
      let searchResult;
      try {
        searchResult = await ProductListService.searchNewItem(serchCondition, sort, displayCount, page);
      } catch (error) {
        console.error(error);
        searchResult = {
          items: [] as Array<ProductItem>,
          wordItems: [] as Array<{
            keyword: string;
            items: Array<ProductItem>;
          }>
        };
      }

      // 新品用中古情報の取得
      if (
        (state.displayProductPriceType === SEARCH_STATE.option[0].value || state.displayProductPriceType === SEARCH_STATE.option[2].value) &&
        (type === 'search' || type === 'add') &&
        searchResult.items.length
      ) {
        const itemIds = [] as Array<string>;
        searchResult.items.forEach((item) => {
          itemIds.push(item.itemid);
        });

        // 画面描画を早くするため、APIを非同期でコールする
        ProductService.searchUsedProductsSummary(itemIds)
          .then((usedProductsResult) => (state.usedProductsSummary = usedProductsResult.itemInfo))
          .catch((error) => {
            console.error(error);
            state.usedProductsSummary = [];
          });
      }

      // 各種格納
      switch (type) {
        case 'search':
          if (searchResult.items.length) {
            state.results = searchResult.items;
          } else {
            searchError();
          }
          state.loaded.results = true;
          break;
        case 'add':
          if (searchResult.items.length) state.results = state.results.concat(searchResult.items);
          break;
        case 'newer':
          state.newerProducts = [];
          if (searchResult.items.length) {
            searchResult.items.forEach((product) => {
              state.newerProducts.push({
                janCode: product.itemid,
                images: [{ imagePath: product.image }],
                itemName: product.title,
                price: +product.price,
                ratingTotal: +product.data18
              });
            });
          }
          state.loaded.newerProducts = true;
          break;
        case 'popularity':
          state.usedOrNewerPopularityProducts = [];
          if (searchResult.items.length) {
            searchResult.items.forEach((product) => {
              state.usedOrNewerPopularityProducts.push({
                janCode: product.itemid,
                images: [{ imagePath: product.image }],
                itemName: product.title,
                price: +product.price,
                ratingTotal: +product.data18
              });
            });
          }
          state.loaded.usedOrNewerPopularityProducts = true;
          state.usedOrNewerPopularityTitle = '人気商品';
          break;
        default:
          break;
      }
    };

    /**
     * 検索結果の取得(中古在庫)
     */
    const searchUsedProductList = async (serchCondition: Array<ConditionItem>, sort: string, displayCount: number, type: string, page: number) => {
      let result;
      try {
        result = await ProductListService.searchUsedItem(serchCondition, sort, displayCount, page);
      } catch (error) {
        console.error(error);
        result = {
          items: [] as Array<ProductItem>,
          wordItems: [] as Array<{
            keyword: string;
            items: Array<ProductItem>;
          }>
        };
      }

      // パンくずを設定する
      if (state.isUsed && result.items.length) {
        generateUsedBreadcrumbs(result.items[0].itemid, result.items[0].title);
      }

      switch (type) {
        case 'search':
          if (result.items.length) {
            state.results = result.items;
          } else {
            searchError();
          }
          state.loaded.results = true;
          break;
        case 'add':
          if (result.items.length) state.results = state.results.concat(result.items);
          break;
        case 'newer':
          state.usedOrNewerPopularityProducts = [];
          if (result.items.length) {
            result.items.forEach((product) => {
              state.usedOrNewerPopularityProducts.push({
                isUsed: true,
                janCode: product.itemid,
                images: [{ imagePath: product.image }],
                itemName: product.title,
                price: +product.price,
                ratingTotal: +product.data18
              });
            });
            state.loaded.usedOrNewerPopularityProducts = true;
            state.usedOrNewerPopularityTitle = '中古新着商品';
          } else {
            searchNewerProductList(generateCategoryCondition(), 'popularity', 10, 'popularity', 1);
          }
          break;
        default:
          break;
      }
    };

    /**
     * 検索結果件数の取得(新品)
     */
    const searchNewerProductCount = async (serchCondition: Array<ConditionItem>) => {
      try {
        const result = await ProductListService.searchNewItemCount(serchCondition);
        state.totalCount = result.total;
        state.condisionsCount = result;
      } catch (error) {
        console.error(error);
        searchError();
      }
    };

    /**
     * 検索結果件数の取得(中古在庫)
     */
    const searchUsedProductCount = async (serchCondition: Array<ConditionItem>) => {
      try {
        const result = await ProductListService.searchUsedItemCount(serchCondition);
        state.totalCount = result.total;
        state.condisionsCount = result;
      } catch (error) {
        console.error(error);
        searchError();
      }
    };

    /** -------------------------------------------------------------
     * 検索一覧下部情報
     ------------------------------------------------------------- */
    /**
     * 検索一覧下部List（中古新着）
     * ※なければ、新品人気順
     * @param categoryCode カテゴリーコード
     */
    const fetchUsedOrNewerProductList = (categoryCode: string) => {
      // 中古カテゴリ情報の取得
      ProductListSysConfigsService.fetchUsedCategories().then((usedCategory) => {
        if (usedCategory.some((category) => category.newerCode === categoryCode)) {
          // 画像あり販売中のみのリスト
          const usedCondition = generateCategoryCondition();
          usedCondition.push({
            paramCode: 'number3',
            paramText: '',
            value: '1',
            valueText: ''
          });
          usedCondition.push({
            paramCode: 'status',
            paramText: '',
            value: '1',
            valueText: ''
          });
          searchUsedProductList(usedCondition, 'newer', 10, 'newer', 1);
        } else {
          searchNewerProductList(generateCategoryCondition(), 'popularity', 10, 'popularity', 1);
        }
      });
    };

    /**
     * 検索一覧下部List（あなたにおすすめ）
     * @param categoryCode カテゴリーコード
     */
    const fetchRecommendProductList = async (categoryCode: string) => {
      // レコメンド商品一覧を取得する
      const customerId = '35007';
      let recommendId = '';
      switch (categoryCode.length) {
        case 4:
          recommendId = '4';
          break;
        case 7:
          recommendId = '13';
          break;
        case 10:
          recommendId = '14';
          break;
        default:
          break;
      }

      try {
        const result = await ProductService.searchRecommendProducts(customerId, recommendId, '', 'searchReccomenedProducts', categoryCode);
        state.recommendProducts = result.items;
      } catch (error) {
        console.error(error);
        state.recommendProducts = [] as Array<sliderItem>;
      } finally {
        state.loaded.recommendProducts = true;
      }
    };

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */
    // 同一Vueへの遷移対応
    watch(
      () => context.root.$route,
      () => {
        init();
      }
    );

    // 検索条件情報に基づく表示
    watch(
      () => [state.isfinishedInit, state.currentConditions, state.currentSort, state.currentDisplayCount],
      () => {
        state.page = 1;
        if (state.isfinishedInit) {
          state.loaded.results = false;
          if (state.isChangedCond) applyParamToURL();
          if (!state.isUsed) {
            searchNewerProductList(state.currentConditions, state.currentSort, state.currentDisplayCount, 'search', 1);
            searchNewerProductCount(state.currentConditions);
          } else {
            searchUsedProductList(state.currentConditions, state.currentSort, state.currentDisplayCount, 'search', 1);
            searchUsedProductCount(state.currentConditions);
          }
        }
      },
      { deep: true }
    );

    // カテゴリー情報に基づく表示
    watch(
      () => state.currentCategoryInfo,
      () => {
        if (state.currentCategoryInfo && Object.keys(state.currentCategoryInfo).length) {
          if (!state.isUsed) {
            // 検索一覧下部List（新品新着）
            state.loaded.newerProducts = false;
            searchNewerProductList(generateCategoryCondition(), 'newer', 10, 'newer', 1);
            // 検索一覧下部List（中古新着or新品人気）
            state.loaded.usedOrNewerPopularityProducts = false;
            fetchUsedOrNewerProductList(state.currentCategoryInfo.code);
            // 検索一覧下部List（あなたにおすすめ）
            state.loaded.recommendProducts = false;
            fetchRecommendProductList(state.currentCategoryInfo.code);

            // おすすめコンテンツの取得
            ProductListConfigsService.fetchSpacialBanners(state.currentCategoryInfo.code).then((banners) => {
              state.recommendContents = banners;
            });
          }
        }
      },
      { deep: true }
    );

    // カテゴリー情報とキーワードに基づく表示
    watch(
      () => [state.currentCategoryInfo, state.currentKeyword],
      () => {
        // パンくず
        generateBreadcrumbs();

        /** インクルードファイルを取得 */
        if (state.currentCategoryInfo && Object.keys(state.currentCategoryInfo).length) {
          IncludeFileService.fetchIncludeFile(`list/${state.currentCategoryInfo.code}.html`)
            .then((response) => (state.includeHtml.categoryCode = response))
            .catch((error) => {
              state.includeHtml.categoryCode = '';
              console.log(error);
            });
        } else {
          state.includeHtml.categoryCode = '';
        }

        if (!state.isUsed) {
          if (state.currentKeyword) {
            IncludeFileService.fetchIncludeFile(`list/${state.currentKeyword}.html`)
              .then((response) => (state.includeHtml.keyword = response))
              .catch((error) => {
                state.includeHtml.keyword = '';
                console.log(error);
              });
          } else {
            state.includeHtml.keyword = '';
          }
        } else {
          if (state.currentKeyword) {
            IncludeFileService.fetchIncludeFile(`list/${state.currentKeyword}_chuko.html`)
              .then((response) => (state.includeHtml.keyword = response))
              .catch((error) => {
                state.includeHtml.keyword = '';
                console.log(error);
              });
          } else {
            state.includeHtml.keyword = '';
          }
        }
      },
      { deep: true }
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

    /**
     * リセット／絞り込みボタンの表示制御
     */
    const isActiveFilterButton = computed(() => {
      let isActive = false;
      if (!state.isUsed) {
        const currentNarrow18 = state.currentConditions.filter((cond) => cond.paramCode === 'narrow18')[0];
        const otherCond = state.currentConditions.filter((cond) => cond.paramCode !== 'category' && cond.paramCode !== 'narrow18');
        if (
          otherCond.length ||
          (currentNarrow18 && currentNarrow18.value !== SEARCH_STATE.option[0].value) ||
          (Object.keys(state.currentCategoryInfo).length && state.currentCategoryInfo.digit !== '4')
        ) {
          isActive = true;
        }
      } else {
        const otherCond = state.currentConditions.filter((cond) => cond.paramCode !== 'category');
        if (otherCond.length) {
          isActive = true;
        }
      }
      return isActive;
    });

    onMounted(() => {
      init();
      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function(e) {
        init();
      });
    });

    /**
     * リンクを開く際の挙動設定を取得する
     * @param isBlank 'yes'なら別タブで開く、'no'なら同じタブで開く
     */
    const getLinkTarget = (isBlank: 'yes' | 'no') => {
      return isBlank === 'yes' ? '_blank' : '_self';
    };

    /** -------------------------------------------------------------
     * イベント
     ------------------------------------------------------------- */
    /**
     * 選択条件のリセット
     */
    const resetCondition = () => {
      state.isChangedCond = true;
      let resetCond = [] as Array<ConditionItem>;
      if (!state.isUsed) {
        // カテゴリーは親のみにする
        setParentCategory();
        resetCond = state.currentConditions.filter((cond) => cond.paramCode === 'category' || cond.paramCode === 'narrow18');
        // 状態は「新品」「中古」選択状態にする
        resetCond.map((cond) => {
          if (cond.paramCode === 'narrow18') {
            cond.value = SEARCH_STATE.option[0].value;
            cond.valueText = SEARCH_STATE.option[0].text;
          }
        });
      } else {
        resetCond = state.currentConditions.filter((cond) => cond.paramCode === 'category');
      }
      state.currentKeyword = '';
      state.currentConditions = resetCond;
      state.isKeyword3 = false;
    };

    /**
     * 選択条件の削除
     * @param index 削除対象
     */
    const removeCondition = (index: number) => {
      state.isChangedCond = true;
      switch (state.currentConditions[index].paramCode) {
        case 'category':
          setParentCategory();
          break;
        case 'keyword':
          state.currentKeyword = '';
          state.currentConditions.splice(index, 1);
          break;
        case 'keyword3':
          state.isKeyword3 = false;
          state.currentConditions.splice(index, 1);
          break;
        default:
          state.currentConditions.splice(index, 1);
          break;
      }
    };

    /**
     * 既存の比較ページに遷移
     */
    const toComparison = () => {
      // storeに保存
      condition.saveRecentCondtion(state.currentConditions, state.currentSort, state.currentDisplayCount);

      // 遷移
      let url = '/ec/pd/compareproducts?prd=';
      comparison.comparisonList.forEach((janCode: string, index: number) => {
        url = index === 0 ? url + janCode : url + '-' + janCode;
      });
      context.root.$router.push({ path: url });
    };

    /**
     * もっと見る押下時の検索
     */
    const addSearch = () => {
      if (!state.isUsed) {
        searchNewerProductList(state.currentConditions, state.currentSort, state.currentDisplayCount, 'add', ++state.page);
      } else {
        searchUsedProductList(state.currentConditions, state.currentSort, state.currentDisplayCount, 'add', ++state.page);
      }
    };

    /**
     * SP用：ソート選択
     * @param val 削除対象
     */
    const selectedSort = (val: string) => {
      state.isChangedCond = true;
      state.currentSort = val;
      state.sortDrawer = !state.sortDrawer;
    };

    /** -------------------------------------------------------------
     * イベント(コンポーネント)
     ------------------------------------------------------------- */
    /**
     * 条件：状態の更新
     * @param value 現状態
     */
    const changeNarrow18 = (value: string) => {
      state.isChangedCond = true;
      state.currentConditions.forEach((cc) => {
        if (cc.paramCode === 'narrow18') {
          cc.value = value;
          cc.valueText = SEARCH_STATE.option.filter((op) => op.value === value)[0].text;
        }
        state.displayProductPriceType = value;
      });
    };

    /**
     * 条件：追加処理
     * @param addCondItem 追加する条件
     */
    const add = (addCondItem: ConditionItem) => {
      state.isChangedCond = true;
      if (addCondItem.paramCode === 'category') {
        // カテゴリーは登録と更新パターンあり
        const condCateIndex = state.currentConditions.findIndex((cond) => cond.paramCode === addCondItem.paramCode);
        if (condCateIndex >= 0) {
          state.currentConditions.map((cond) => {
            if (cond.paramCode == addCondItem.paramCode) {
              cond.value = addCondItem.value;
              cond.valueText = addCondItem.value;
            }
          });
        } else {
          state.currentConditions.unshift(addCondItem);
        }

        if (state.isUsed) {
          // 中古在庫の場合
          const currentUsedCategory = category.searchUsedCategoryByName(addCondItem.value);
          if (Object.keys(currentUsedCategory).length) {
            state.currentCategoryInfo = {
              code: currentUsedCategory.newerCode,
              digit: `${currentUsedCategory.newerCode.length}`,
              parentCategoryName: currentUsedCategory.categoryName,
              childCategoryName: '',
              grandchildCategoryName: '',
              concatenationCategoryName: currentUsedCategory.categoryName,
              path: ''
            };
          }
        } else {
          // 新品の場合
          state.currentCategoryInfo = category.searchNewerCategoryByConcatenationName(addCondItem.value);
        }
      } else {
        state.currentConditions.push(addCondItem);
      }
    };

    /**
     * スクロールイベント検出：「絞り込み」「並び替えボタン」の固定表示切り替え
     * @param addCondItem 追加する条件
     */
    const onScroll = () => {
      const headerHeight = header.headerHeight;
      if (state.productSearchConditions && state.conditionsBtnWrap) {
        if (headerHeight > state.productSearchConditions.clientHeight + state.productSearchConditions.getBoundingClientRect().top) {
          state.productSearchConditionsFixed = true;
          state.conditionsBtnWrap.style.top = headerHeight + 'px';
        } else {
          state.productSearchConditionsFixed = false;
          state.conditionsBtnWrap.style.top = '';
        }
      }
    };

    return {
      comparison,
      ...toRefs(state),
      displayMaxCount,
      isActiveFilterButton,
      getLinkTarget,
      resetCondition,
      removeCondition,
      toComparison,
      addSearch,
      selectedSort,
      changeNarrow18,
      add,
      onScroll
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

.loading-suggest-products-list {
  height: 200px;
  width: 100%;
}

/** -------------------------------
  商品一覧 960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// カテゴリタイトル
.category-title {
  padding-left: 8px;
  border-left: 12px solid $ec-red;
  font-size: 36px;
  line-height: 2;
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

  &-result {
    width: calc(100% - #{$search-condition-width} - #{$search-condition-mr});
  }
}

// 現在の検索条件
.current-conditions {
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid $ec-green;

  &-list {
    padding: 0;
  }

  &-title {
    font-size: 18px;
    font-weight: bold;
    color: $text-grey;
  }

  &-item {
    min-height: 32px;
  }

  &-text {
    padding: 0 !important;
    font-size: 16px;
    color: $text-grey;
  }

  &-delete-btn {
    width: 32px;
    height: 32px;
  }
}

// 絞り込み条件
.conditions-wrap {
  padding: 8px;

  .filter {
    margin: 20px;

    &-area:first-child {
      margin-bottom: 8px;
    }

    &-text {
      display: inline-block;
      min-width: 6em;
      margin-right: 16px;
    }

    &-btn {
      color: $text-grey;
      border-color: $ec-grey;
      background-color: $bg-white;

      &.active {
        color: $text-white;
        border-color: $ec-green;
        background-color: $ec-green;
      }
    }

    &-count {
      color: $text-red;
    }
  }
}

// 表示条件
.display-condition-wrap {
  display: flex;
  height: 40px;
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
    flex: 1 1 200px;
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

  .comparison {
    display: inline-flex;
    flex: 2 1 auto;
    margin-right: 12px;

    &-text {
      @extend %display-condition-text;
    }

    &-current-text {
      padding-top: 4px;
    }

    &-area {
      display: inline-flex;
      flex: 1 1 auto;
      padding: 5px 12px 5px 12px;
      border: 1px solid $ec-grey;
      border-radius: 5px;

      * {
        flex: 1 1 auto;
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }

  .display-count {
    display: inline-flex;
    flex: 1 1 100px;

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

// 新着、中古新着、おすすめ
.suggest-product {
  padding: 12px 16px 30px;

  &-area {
    padding: 10px 0;
    background-color: $bg-white;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &-title {
    padding: 0 30px;
    font-size: 20px;
    font-weight: bold;
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

// 検索結果ゼロ件
.none-result {
  &-message {
    margin-top: 12px;
    padding: 3em 0;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    border: solid 1px $ec-grey;
  }

  &-hint {
    font-size: 22px;
    color: $text-grey;
    padding: 12px;

    &-item:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}

/** -------------------------------
  商品一覧 960px未満
------------------------------- */
.container-narrow {
  // カテゴリタイトル
  .category-title {
    margin: 0 12px 8px;
    font-size: 24px;
    line-height: 1.5;
    border-left-width: 6px;
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
      margin: 0 0 12px;
      padding: 8px;
    }

    &-result {
      display: block;
      width: 100%;
      max-width: 100%;
      padding-bottom: 12px;
      background: $bg-light-grey;
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
    display: flex;
    margin-bottom: 8px;
    width: 100%;

    &.fixed {
      position: fixed;
      width: calc(100% - 16px);
      background: $bg-white;
      z-index: 5;
      padding: 10px 0;
    }

    .conditions-btn {
      flex: 2 1 calc((100% - #{$margin-r}) * (2 / 3));
      margin-right: $margin-r;
    }
    .conditions-sort-btn {
      flex: 2 1 calc((100% - #{$margin-r}) * (1 / 3));
    }
  }
  // 絞り込み条件
  .conditions-wrap {
    padding: 0;

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      border-bottom: solid 12px $bg-grey;
      z-index: 511;

      &-area {
        display: flex;
        justify-content: space-around;
        padding: 12px 20px;
        background: $bg-white;

        &:first-child {
          margin-bottom: 0;
          border-bottom: dashed 1px $ec-grey;
        }
      }

      &-text {
        min-width: auto;
        margin-right: 0;
      }
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

  // 現在の検索条件
  .current-conditions {
    margin-bottom: 12px;
    padding: 0;
    border: none;

    &-item {
      position: relative;
      display: block;
      height: auto;
      padding: 0;
      text-align: left;
      &:not(:last-child) {
        margin-right: 4px;
      }
    }
    &-text {
      font-size: 12px;
      color: inherit;
      margin: 0;
      &:first-child {
        margin-bottom: 4px;
      }
    }
    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 8px;
      margin: auto;
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
  // 新着、中古新着、おすすめ
  .suggest-product {
    padding: 0 0 12px;

    &-area {
      padding: 16px 16px 10px 16px;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    &-title {
      padding: 0 12px;
      font-size: 18px;
    }
  }
  // おすすめコンテンツ
  .recommend-contents {
    padding: 16px 0;
    border-bottom: solid 12px $bg-light-grey;

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

  // 検索結果ゼロ件
  .none-result {
    &-message {
      margin: 0 8px;
      padding: 2em 1em;
      font-size: 16px;
    }

    &-hint {
      font-size: 12px;
      padding: 8px;

      &-list {
        margin: 0 4px;
      }

      &-item:not(:last-child) {
        margin-bottom: 8px;
      }
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

<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-btnのCSSを上書き */
.container-narrow .current-conditions .current-conditions-item .v-btn__content {
  display: inline-block;
  padding: 4px 30px 4px 8px;
}
</style>
