<template>
  <v-dialog v-model="openedDialog" max-width="70%" fixed class="trade-product-dialog">
    <v-card class="trade-product-dialog-body py-1" :class="{ sp: $vuetify.breakpoint.smAndDown }">
      <!-- 閉じるアイコンボタン -->
      <v-btn icon class="dialog-close-button" @click="close()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <!-- ヘッダー -->
      <div class="py-4 px-8">
        <v-checkbox hide-details class="dialog-header-checkbox d-inline-block" v-model="checked" @click="cancel()">
          <template v-slot:label>
            <span class="px-2" v-if="tokutoku">
              トクトク交換
              <span class="dialog-header-checkbox-caption">※宅配限定サービス</span>
            </span>
            <span class="px-2" v-else>
              下取り申込
              <span class="dialog-header-checkbox-caption">※店頭限定サービス</span>
            </span>
          </template>
        </v-checkbox>
      </div>

      <!-- 商品選択 -->
      <div v-if="!loaded.products || tradeInProducts.length">
        <h1 class="dialog-section-title pl-8">持っている商品一覧から選ぶ<span class="dialog-section-caption ml-3">※複数選択可</span></h1>
        <template v-if="isLoggedIn">
          <trade-product-list
            :items="tradeInProducts"
            :loading="!loaded.products"
            :tokutoku="tokutoku"
            emptyMsg="持っている商品はありません"
          ></trade-product-list>

          <div class="ma-4 text-center">
            <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="60px" @click="addSelectedProducts()" :disabled="selectedProductsCount < 1">
              下取申込に追加
            </v-btn>
          </div>
        </template>
        <div v-else class="px-10 py-3">ログイン後、表示・選択できるようになります</div>
      </div>

      <!-- 商品検索 -->
      <div>
        <h1 class="dialog-section-title pl-8">検索して選ぶ</h1>
        <div class="ma-4 text-center">
          <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="60px" @click="openSearchDialog()"> 検索して選ぶ </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import UserService from '@/logic/user.service';
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import Vue from 'vue';
import TradeProductList from '../trade-product-list.vue';
import { TradeProductItem } from '@/types/trade-product-list';

export default Vue.extend({
  name: 'trade-product-select-dialog',
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

    // v-model向けのダイアログ開閉状態
    const openedDialog = computed({
      get: () => props.value as boolean,
      set: (newValue) => context.emit('change', newValue)
    });

    // ダイアログを閉じる
    const close = () => context.emit('change', false);

    // 申込みをキャンセルする
    const cancel = () => {
      context.emit('cancel');
      context.emit('change', false);
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

    // ダイアログが開いた際に、初期化を行う。
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
        if (props.value && isLoggedIn) {
          searchOwnedProducts().then();
        } else if (props.value && !loginMenuOpenState) {
          // ログインダイアログが綴じたのにログインが完了していない場合、ローディングを停止する
          state.loaded.products = true;
        }
      }
    );

    // 検索して選ぶとき
    const openSearchDialog = () => context.emit('onChangeDialog', 'search');

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
      openedDialog,
      close,
      cancel,
      openSearchDialog,
      addSelectedProducts,
      selectedProductsCount
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品選択ダイアログ 960px以上
------------------------------- */
.trade-product-dialog {
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

  &-header-checkbox {
    ::v-deep .v-input--selection-controls__input .v-icon {
      font-size: 2em;
      color: $text-black;
    }

    ::v-deep .v-input__slot .v-label {
      font-size: 1.8em;
      font-weight: bold;
      line-height: 1em;
      color: $text-black;
    }

    &-caption {
      font-size: 1rem;
      font-weight: normal;
    }
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

/** -------------------------------
  下取申込査定品選択ダイアログ 960px未満
------------------------------- */
.sp {
  .action-btn {
    margin: 12px 2px;
    width: auto;
    font-size: 1rem;
    padding: 4px;
  }
}
</style>
