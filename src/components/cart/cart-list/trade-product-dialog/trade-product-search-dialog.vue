<template>
  <v-dialog v-model="openedDialog" max-width="70%" fixed class="trade-product-search-dialog">
    <v-card class="trade-product-search-dialog-body  pt-8 pb-1" :class="{ sp: $vuetify.breakpoint.smAndDown }">
      <!-- 閉じるアイコンボタン -->
      <v-btn icon class="dialog-close-button" @click="close()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <!-- 検索入力欄 -->
      <div class="mt-4">
        <h1 class="dialog-section-title pl-8">検索して選ぶ<span class="dialog-section-caption ml-3">※複数選択可</span></h1>
        <trade-product-searcher :tokutoku="tokutoku" @onSearch="onSearch($event)" v-if="openedDialog" />
      </div>

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
            height="60px"
            :disabled="selectingTrandeProductCount < 1"
            @click="addSelectedTradeProducts()"
          >
            選択
          </v-btn>
        </div>
      </div>

      <!-- 選択した商品一覧 -->
      <div class="my-4">
        <h1 class="dialog-section-title pl-8">選択された下取り依頼品</h1>
        <trade-product-list
          :items="selectedTradeInProducts"
          :deletable="true"
          :selectable="false"
          :tokutoku="tokutoku"
          @delete="deleteSelectedProduct($event)"
          @unselect="deleteSelectedProduct($event)"
        ></trade-product-list>

        <div class="ma-4 text-center">
          <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="60px" :disabled="selectedTradeInProducts.length < 1" @click="addTradeProducts()">
            下取申込に追加
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
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
  name: 'trade-product-search-dialog',
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
    const openedDialog = computed({
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
      openedDialog,
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
  下取申込査定品検索ダイアログ 960px以上
------------------------------- */
.trade-product-search-dialog {
  z-index: 600;

  &-body {
    min-height: 200px;
  }
}

.dialog {
  &-close-button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &-section-title {
    background-color: $bg-light-grey;
  }

  &-section-caption {
    font-size: 1rem;
    font-weight: normal;
  }
}

.action-btn {
  margin: 12px;
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  text-transform: none;
  color: $text-white;
}
</style>
