<template>
  <!-- 検索結果一覧 -->
  <div
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
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
        <v-btn class="conditions-sort-btn" outlined dark depressed color="rgba(112, 112, 112, 1)" @click.stop="sortDrawer = !sortDrawer">並び替え</v-btn>
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
          <v-select class="display-count-list form-text" v-model="currentDisplayCount" :items="displayCountList" outlined dense height="100%"></v-select>
        </div>
      </div>
    </div>

    <!-- 商品一覧 -->
    <div id="product-list-area" class="product-list" v-if="totalCount || !loaded.results">
      <!-- 商品 -->
      <template v-if="loaded.results && currentResult.length > 0">
        <template>
          <product v-for="item in currentResult" :key="item.itemid" :product="item" :display-price-type="displayProductPriceType" :isSpecial="true" />
        </template>
      </template>
      <div class="loading-products-list" v-if="!loaded.results">
        <section-loading />
      </div>
    </div>
    <!-- もっと見る -->
    <v-btn class="add-search-btn" v-show="currentResult.length < totalCount" block dark depressed tile color="rgba(112, 112, 112, 1)" @click="addSearch()">
      もっと見る
      <v-icon class="add-search-btn-icon" small color="rgba(255, 255, 255, 1)">fas fa-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, watch, computed } from '@vue/composition-api';
import Product from '@/components/product-list/product.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { SPECIAL_ITEM_SORT_LIST } from '@/constants/sort-list';
import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
import SpecialProductService from '@/logic/special-product.service';
import { ProductItem } from '@/types/product-list';

export default Vue.extend({
  name: 'product-list-by-jan-code',
  components: {
    product: Product,
    'section-loading': SectionLoading
  },
  props: {
    janCodes: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  setup: (props, context) => {
    const state = reactive({
      // 並び替え
      currentSort: SPECIAL_ITEM_SORT_LIST[0].value,
      sort: SPECIAL_ITEM_SORT_LIST,
      // 表示件数
      currentDisplayCount: 20,
      displayCountList: DISPLAY_COUNT_LIST,
      // 商品件数
      totalCount: -1,
      // 表示ページ
      page: 1,
      // スマホ用の表示制御
      sortDrawer: false,
      // 価格の表示制御
      displayProductPriceType: '0',
      // 商品リスト
      currentResult: [] as Array<ProductItem>, // 現在の表示
      results: [] as Array<ProductItem>, // 全量
      // ロード状態
      loaded: {
        results: false
      }
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
    const getSpecialProduct = async (janCodes: Array<string>) => {
      state.loaded.results = false;
      try {
        state.results = await SpecialProductService.getNewsSpecialProduct(janCodes);
        state.totalCount = state.results.length;
        setDispalySpecialproduct();
      } catch (error) {
        console.error(error);
        state.results = [] as Array<ProductItem>;
      } finally {
        state.loaded.results = true;
      }
    };

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */

    // バナーIDに基づく表示
    watch(
      () => [props.janCodes],
      () => {
        getSpecialProduct(props.janCodes as Array<string>);
      },
      { immediate: true }
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
      displayMaxCount,
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

/** -------------------------------
  960px未満
------------------------------- */
.container-narrow {
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

        ::v-deep .v-input__slot {
          background: $bg-white;
        }
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
