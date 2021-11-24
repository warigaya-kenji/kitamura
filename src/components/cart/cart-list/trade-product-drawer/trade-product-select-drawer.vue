<template>
  <div :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-navigation-drawer class="drawer-layout" v-model="openedDrawer" fixed right temporary>
      <div class="drawer-layout-area">
        <div class="drawer-layout-back" @click="close()">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>

        <div class="drawer-layout-contents ec-back-color">
          <div class="text-center">
            <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="50px" @click="openSearchDrawer()"> 検索して選ぶ </v-btn>
          </div>

          <div class="pa-1">
            <h3 class="drawer-layout-section-title">持っている商品一覧から選ぶ<span class="drawer-layout-section-caption ml-3">※複数選択可</span></h3>
            <template v-if="isLoggedIn">
              <trade-product-list
                :items="tradeInProducts"
                :loading="!loaded.products"
                :tokutoku="tokutoku"
                emptyMsg="持っている商品はありません"
              ></trade-product-list>

              <div class="ma-4 text-center">
                <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="50px" @click="addSelectedProducts()" :disabled="selectedProductsCount < 1">
                  下取申込に追加
                </v-btn>
              </div>
            </template>
            <div v-else class="pa-3">ログイン後、表示・選択できるようになります</div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import UserService from '@/logic/user.service';
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import Vue from 'vue';
import TradeProductList from '../trade-product-list.vue';
import { TradeProductItem } from '@/types/trade-product-list';

export default Vue.extend({
  name: 'trade-product-select-drawer',
  components: {
    'trade-product-list': TradeProductList
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
    const { authorizer } = context.root.$store;
    const state = reactive({
      checked: true,
      // 下取り対象商品一覧
      tradeInProducts: [] as Array<TradeProductItem>,
      isLoggedIn: false,
      loaded: {
        products: false
      }
    });

    // v-model向けのドロワー開閉状態
    const openedDrawer = computed({
      get: () => props.value as boolean,
      set: (newValue) => context.emit('change', newValue)
    });

    // ドロワーを閉じる
    const close = () => context.emit('change', false);

    // 申込みをキャンセルする
    const cancel = () => {
      context.emit('cancel');
      close();
    };

    /**
     * 持っている商品を取得
     */
    const searchOwnedProducts = async () => {
      state.loaded.products = false;
      try {
        const result = await UserService.fetchOwnedList(undefined, undefined, true);

        state.tradeInProducts = result.items.map((item) => {
          const product: TradeProductItem = {
            janCode: item.janCode,
            imagePath: item.imagePath,
            itemName: item.itemName,
            tradeinPriceS: item.tradeinPriceS,
            tradeinPriceC: item.tradeinPriceC,
            assessPriceS: item.assessPriceS,
            assessPriceC: item.assessPriceC,
            count: 1,
            selected: false,
            usedQuotesCode: item.usedQuotesCode,
            isPriceGuarantee: item.isPriceGuarantee,
            canTokutoku: item.canTokutoku
          };
          return product;
        });
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.products = true;
      }
    };

    // ドロワーの開閉状態を監視
    watch(
      () => props.value as boolean,
      (newValue, oldValue) => {
        if (newValue && !oldValue) {
          // ローディング状態にする
          state.loaded.products = false;
          state.checked = true;

          // ログインしている場合のみ
          state.isLoggedIn = authorizer.isLoggedIn;
          if (authorizer.isLoggedIn) {
            searchOwnedProducts();
          }
        }
      }
    );

    // ログイン状況を監視する
    watch(
      () => [authorizer.isLoggedIn, authorizer.loginMenuOpenState],
      ([isLoggedIn, loginMenuOpenState]) => {
        state.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
          searchOwnedProducts().then();
        } else if (!loginMenuOpenState) {
          // ログインドロワーが綴じたのにログインが完了していない場合、ローディングを停止する
          state.loaded.products = true;
        }
      }
    );

    // 検索して選ぶとき
    const openSearchDrawer = () => context.emit('onChangeDrawer', 'search');

    /**
     * 下取り申込み商品に追加
     */
    const addSelectedProducts = () => {
      const selectedProducts = state.tradeInProducts.filter((item) => item.selected);
      context.emit('onSelected', selectedProducts);
      close();
    };

    // 選択商品数
    const selectedProductsCount = computed(() => {
      const selectedProducts = state.tradeInProducts.filter((item) => item.selected);
      return selectedProducts.length;
    });

    return {
      ...toRefs(state),
      openedDrawer,
      close,
      cancel,
      openSearchDrawer,
      addSelectedProducts,
      selectedProductsCount
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品選択ドロワー 960px未満
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
  }

  .action-btn {
    margin: 12px;
    font-weight: bold;
    text-transform: none;
    color: $text-white;
  }
}
</style>
