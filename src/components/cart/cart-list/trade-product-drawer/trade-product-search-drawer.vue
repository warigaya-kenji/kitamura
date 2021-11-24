<template>
  <div :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-navigation-drawer class="drawer-layout" v-model="openedDrawer" fixed right temporary>
      <div class="drawer-layout-area">
        <div class="drawer-layout-back" @click="close()">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>

        <div class="drawer-layout-contents ec-back-color">
          <div class="pa-1">
            <h3 class="drawer-layout-section-title">検索して選ぶ<span class="drawer-layout-section-caption ml-3">※複数選択可</span></h3>

            <!-- ドロワーを開いたら初期化されるようにif文で制御している -->
            <trade-product-searcher :tokutoku="tokutoku" @onSearch="onSearch($event)" v-if="openedDrawer" />

            <!-- 検索結果 -->
            <div>
              <trade-product-list
                :items="tradeInProducts"
                :loading="!loaded.search"
                :tokutoku="tokutoku"
                emptyMsg="検索して依頼品を選択してください"
                @onDisplayMore="searchNextPage()"
              ></trade-product-list>

              <div class="ma-4 text-center">
                <v-btn
                  class="action-btn"
                  tile
                  color="rgba(255, 132, 0, 1)"
                  height="50px"
                  :disabled="selectingTrandeProductCount < 1"
                  @click="addSelectedTradeProducts()"
                >
                  選択
                </v-btn>
              </div>
            </div>

            <!-- 選択した商品一覧 -->
            <div class="my-4">
              <h3 class="drawer-layout-section-title">選択された下取り依頼品</h3>

              <trade-product-list
                :items="selectedTradeInProducts"
                :deletable="true"
                :selectable="false"
                @delete="deleteSelectedProduct($event)"
                @unselect="deleteSelectedProduct($event)"
              ></trade-product-list>

              <div class="ma-4 text-center">
                <v-btn
                  class="action-btn"
                  tile
                  color="rgba(255, 132, 0, 1)"
                  height="50px"
                  :disabled="selectedTradeInProducts.length < 1"
                  @click="addTradeProducts()"
                >
                  下取申込に追加
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import TradeProductList from '../trade-product-list.vue';
import { TradeProductItem } from '@/types/trade-product-list';
import TradeProductSearcher from '../trade-product-searcher.vue';
import SellService from '@/logic/sell.service';
import { roundDownSellPrice } from '@/logic/utils';

type Condition = {
  category: string;
  maker: string;
  keyword: string;
};

/** 検索する際の指定する結果の数 */
const SEARCH_RESULT_SIZE = 10;

export default Vue.extend({
  name: 'trade-product-search-drawer',
  components: {
    'trade-product-list': TradeProductList,
    'trade-product-searcher': TradeProductSearcher
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    tokutoku: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({
      // ページ数
      page: 1,
      // 検索条件
      condition: {
        category: '',
        maker: '',
        keyword: ''
      },
      // 検索結果の全体数
      totalSearchResultCount: 0,
      // 検索した下取り対象商品一覧
      tradeInProducts: [] as Array<TradeProductItem>,
      // 選択した下取り対象商品一覧
      selectedTradeInProducts: [] as Array<TradeProductItem>,
      // トクトク交換時に対象商品を絞り込むか
      enableTokutokuFilter: false,
      loaded: {
        search: true
      }
    });

    // v-model向けのダイアログ開閉状態
    const openedDrawer = computed({
      get: () => props.value as boolean,
      set: (newValue) => context.emit('change', newValue)
    });

    // ダイアログを閉じる
    const close = () => context.emit('change', false);

    /**
     * 選択された査定品を追加
     */
    const addSelectedTradeProducts = () => {
      let selectedTradeInProducts = state.tradeInProducts.filter((item) => item.selected);
      selectedTradeInProducts = JSON.parse(JSON.stringify(selectedTradeInProducts));
      state.selectedTradeInProducts.push(...selectedTradeInProducts);

      // チェックをOFFにする
      state.tradeInProducts.forEach((item) => (item.selected = false));
    };

    /**
     * 選択されていた査定品を削除
     */
    const deleteSelectedProduct = () => {
      state.selectedTradeInProducts = state.selectedTradeInProducts.filter((item) => item.selected);
    };

    /**
     * 下取り申込み商品に追加
     */
    const addTradeProducts = () => {
      const selectedProducts = state.selectedTradeInProducts.filter((item) => item.selected);
      context.emit('onSelected', selectedProducts);
      close();
    };

    /**
     * 選択中の査定品の数
     */
    const selectingTrandeProductCount = computed(() => state.tradeInProducts.filter((item) => item.selected).length);

    /**
     * 下取申込み商品を検索する
     */
    const searchProductList = async () => {
      // 初期検索時はローディングを表示する
      if (state.page < 2) {
        state.loaded.search = false;
      }

      try {
        const result = await SellService.searchProductList(state.condition, 'popularity', SEARCH_RESULT_SIZE, state.page, state.enableTokutokuFilter);
        const tradeInProducts = result.map((item) => {
          const tradeInProduct: TradeProductItem = {
            janCode: item.jan_code,
            itemName: item.title,
            imagePath: item.image,
            usedQuotesCode: item.goods_code,
            count: 1,
            selected: false,
            tradeinPriceS: Number(item.tradein_s),
            tradeinPriceC: Number(item.tradein_c),
            assessPriceS: roundDownSellPrice(Number(item.tradein_s)),
            assessPriceC: roundDownSellPrice(Number(item.tradein_c)),
            isPriceGuarantee: item.price_guarantee_flg === '1',
            canTokutoku: item.price_guarantee_flg !== '0'
          };

          return tradeInProduct;
        });

        if (state.page > 1) {
          state.tradeInProducts.push(...tradeInProducts);
        } else {
          // 全体数を取得する
          const countResult = await SellService.searchProductListCount(state.condition);
          state.totalSearchResultCount = countResult.total;
          state.tradeInProducts = tradeInProducts;
        }
      } catch (error) {
        console.error(error);
        state.totalSearchResultCount = 0;
        state.tradeInProducts = [];
      } finally {
        state.loaded.search = true;
      }
    };

    /**
     * 検索したとき、検索条件を保持する
     */
    const onSearch = (option: { condition: Condition; enableTokutokuFilter: boolean }) => {
      state.condition = option.condition;
      state.page = 1;
      state.enableTokutokuFilter = option.enableTokutokuFilter;
      searchProductList();
    };

    /**
     * 次のページを検索する
     */
    const searchNextPage = () => {
      // 検索結果の全体数より検索する数が多くなったら、検索をしない
      if (SEARCH_RESULT_SIZE * state.page > state.totalSearchResultCount) {
        return;
      }

      state.page++;
      searchProductList();
    };

    // ドロワーを開いたら初期化する
    watch(
      () => props.value as boolean,
      (newValue, oldValue) => {
        if (newValue && !oldValue) {
          state.page = 1;
          state.condition = {
            category: '',
            maker: '',
            keyword: ''
          };
          state.totalSearchResultCount = 0;
          state.tradeInProducts = [];
          state.selectedTradeInProducts = [];
        }
      }
    );

    return {
      ...toRefs(state),
      openedDrawer,
      close,
      addSelectedTradeProducts,
      deleteSelectedProduct,
      addTradeProducts,
      selectingTrandeProductCount,
      onSearch,
      searchNextPage
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品検索ドロワー 960px未満
------------------------------- */
.sp {
  // 共通：ドロワー
  .drawer-layout {
    z-index: 510;
    width: 100% !important;

    &-area {
      height: 100%;
    }

    $drawer-back-height: 45px;
    $drawer-back-border-b: 1px;
    &-back {
      padding: 0 12px;
      height: $drawer-back-height;
      line-height: calc(#{$drawer-back-height} - #{$drawer-back-border-b});
      border-bottom: solid $drawer-back-border-b $ec-light-grey2;

      &-icon {
        color: $ec-grey;
        margin-right: 8px;
      }

      &-text {
        vertical-align: middle;
      }
    }

    &-contents {
      min-height: calc(100% - #{$drawer-back-height});
    }

    &-section-caption {
      font-size: 0.8em;
      font-weight: normal;
    }

    &-search-form {
      &-area {
        .row {
          margin: 0;
        }
      }
    }
  }

  .action-btn {
    min-width: 100px;
    margin: 12px;
    font-weight: bold;
    text-transform: none;
    color: $text-white;
  }
}

/* v-comboboxで生成されるDOMのCSSを上書き */
.keyword-search-combobox {
  ::v-deep .v-input__control {
    z-index: 310;
  }
  ::v-deep .v-input__append-outer {
    width: 50px;
    height: 40px;
    margin: 0 0 0 -3px !important;
    background: $bg-grey;
    border-radius: 0 4px 4px 0;
    z-index: 310;

    .v-input__icon--append-outer {
      width: auto;
      height: auto;
    }
  }
}

/* 無駄に余白ができるため、v-text-fieldで生成されるDOMのCSSを上書き */
.keyword-search-combobox {
  ::v-deep .v-input__control {
    .v-text-field__details {
      margin: 0 !important;
      padding: 0 !important;
      min-height: 0;

      .v-messages {
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0;
      }
    }
  }
}
</style>
