<template>
  <div
    id="my-page-favorite-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <div class="favorite-list ec-back-color" v-if="!loaded.favoriteProducts || (favoriteProducts && favoriteProducts.length > 0)">
        <v-row>
          <!-- ローディング -->
          <v-col class="loading-favorite-list" v-if="!loaded.favoriteProducts">
            <section-loading />
          </v-col>

          <!-- お気に入り商品一覧 -->
          <template v-else>
            <v-col cols="12" md="4" class="favorite-item" v-for="product in getFavoriteProducts" :key="product.janCode">
              <product :product="product" :canFavorite="true" @onRegisterd="onFavoriteRegisterd()">
                <template v-slot:header>
                  <div class="product-header-area">
                    <div class="notion-area notion-new-used" v-if="product.isNoticeUsed"><i class="fas fa-exclamation-circle notion-icon"></i>新着中古あり</div>
                    <div class="notion-area notion-price-down" v-if="product.isNoticePrice">
                      <i class="fas fa-exclamation-circle notion-icon"></i>新品価格が下がりました
                    </div>
                  </div>
                </template>

                <template v-slot:price>
                  <div class="product-text">
                    価格:<span class="product-price">{{ product.price ? formatPrice(parseInt(product.price)) : '-' }}円</span>
                  </div>
                  <div class="product-text" v-show="getUsedProductsSummaryByJanCode(product.janCode).itemCount">
                    <span>中古:</span>
                    <span class="product-used-price">{{ formatPrice(getUsedProductsSummaryByJanCode(product.janCode).minPrice) }}円</span>
                    &nbsp;～&nbsp;
                    <span class="product-used-conut">
                      <span>(</span>
                      <router-link class="product-used-link" :to="`/ec/list/?type=u&keyword3=${product.janCode}`">
                        <span>{{ getUsedProductsSummaryByJanCode(product.janCode).itemCount }}点</span>
                      </router-link>
                      <span>)</span>
                    </span>
                  </div>
                </template>

                <template v-slot:operation>
                  <div class="product-operation-area">
                    <v-btn id="remove-favorite-btn" tile class="remove-favorite-btn" @click="removeFavorite(product)">削除</v-btn>
                    <v-tooltip top v-model="showCartAddedMap[product.janCode]">
                      <template v-slot:activator="{ attrs }">
                        <v-btn id="add-cart-btn" tile class="cart-btn" @click="addCart(product)" v-bind="attrs" :disabled="product.isSalesEnd">
                          <span v-if="product.isSalesEnd">販売終了</span>
                          <span v-else><i class="fas fa-shopping-cart mr-1"></i>カートに入れる</span>
                        </v-btn>
                      </template>
                      <span>カートに投入しました</span>
                    </v-tooltip>
                  </div>
                </template>
              </product>
            </v-col>
          </template>
        </v-row>
      </div>

      <!-- お気に入り商品がない場合 -->
      <div class="not-found-area" v-else>
        <i class="far fa-heart not-found-icon"></i>
        <p>お気に入り商品の登録はありません</p>
      </div>

      <!-- もっと見るボタン -->
      <more-items-button @click="addShowFavoriteLength()" v-if="favoriteProducts.length > showFavoriteLength" />
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import UserService from '@/logic/user.service';
import MyPageLayout from './common/my-page-layout.vue';
import { FavoriteItem } from '@/types/favorite-list';
import Product from '@/components/common/product.vue';
import { ProductDetail, UsedProductsSummary } from '@/types/product';
import ProductService from '@/logic/product.service';
import { formatPrice, sortByRowNo, splitList } from '@/logic/utils';
import BackButton from '@/components/common/back-button.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';

export default Vue.extend({
  name: 'favorite-list',
  components: {
    'section-loading': SectionLoading,
    'my-page-layout': MyPageLayout,
    product: Product,
    'back-button': BackButton,
    'more-items-button': MoreItemsButton
  },
  setup: (props, context) => {
    const { authorizer, errorStore, confirmDialogStore } = context.root.$store;

    const state = reactive({
      // 画面タイトル
      title: 'お気に入り商品',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'お気に入り商品', linkUrl: '' }
      ],
      // お気に入りリスト
      favoriteProducts: [] as Array<FavoriteItem>,
      showFavoriteAddLength: 9,
      showFavoriteLength: 9,
      // 取得したお気に入り商品のページ番号
      favoritePage: 1,
      // 中古価格情報
      usedProductsSummaries: [] as Array<UsedProductsSummary>,
      // ロード状態
      loaded: {
        favoriteProducts: false
      },
      // カートに入れた通知のマッピング
      showCartAddedMap: {} as { [key: string]: boolean }
    });

    /**
     * お気に入りリストの取得
     */
    const fetchFavoriteList = async (page?: number) => {
      try {
        const isInit = page == null;
        if (isInit) {
          // 初期化
          state.favoritePage = 1;
          state.showCartAddedMap = {};
        }

        // お気に入り商品一覧を取得
        const result = await UserService.fetchFavoriteList(page);
        let resultFavoriteProducts = result.items;

        // 「rowNo」を昇順にソートする
        // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
        resultFavoriteProducts = sortByRowNo<FavoriteItem>(resultFavoriteProducts);

        // 取得した商品のJANコード一覧
        const janCodeList = resultFavoriteProducts.map((product) => product.janCode);

        // 商品詳細より「メーカー名」と「完了商品であるか」を取得
        // 商品詳細取得APIはJANコード指定が最大20件のため、分割して取得する
        const splittedJanCodes = splitList(janCodeList, 20);
        const responses = splittedJanCodes.map((splittedJanCodes) => ProductService.fetchProducts(splittedJanCodes, true));
        const productDetails = (await Promise.all(responses)).reduce((list, value) => list.concat(value.items), new Array<ProductDetail>());
        for (const { janCode, makerName, isSalesEnd } of productDetails) {
          const product = resultFavoriteProducts.find((item) => item.janCode === janCode);
          if (product) {
            product.makerName = makerName;
            product.isSalesEnd = isSalesEnd;
          }
        }

        // 初期化の場合は配列を置き換える。追加の場合は配列を連結する。
        state.favoriteProducts = isInit ? resultFavoriteProducts : state.favoriteProducts.concat(resultFavoriteProducts);

        // 関連する中古商品情報を取得
        const usedProductsResult = await ProductService.searchUsedProductsSummary(janCodeList);
        state.usedProductsSummaries = isInit ? usedProductsResult.itemInfo : state.usedProductsSummaries.concat(usedProductsResult.itemInfo);

        // JANコードごとにカートに追加されたかのフラグを設定
        // $setを使用して動的に値を検知されるようにしている
        resultFavoriteProducts.forEach((product) => context.root.$set(state.showCartAddedMap, product.janCode, false));
      } catch (error) {
        console.error(error);
        // 追加取得時は、エラーになっても元の商品表示が消えないようにする
        if (page == null) {
          state.favoriteProducts = [] as Array<FavoriteItem>;
          state.usedProductsSummaries = [] as Array<UsedProductsSummary>;
        }
      } finally {
        state.loaded.favoriteProducts = true;
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchFavoriteList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchFavoriteList();
      }
    );

    /**
     * JANコードから新品用中古商品を取得する
     *
     * @param janCode JANコード
     */
    const getUsedProductsSummaryByJanCode = (janCode: string): UsedProductsSummary => {
      const usedProductsSummary = state.usedProductsSummaries.find((usedProduct) => usedProduct.janCode === janCode) as UsedProductsSummary;
      return usedProductsSummary || {};
    };

    // お気に入り設定変更時
    function onFavoriteRegisterd() {
      fetchFavoriteList();
    }

    // お気に入り削除
    const removeFavorite = async (product: FavoriteItem) => {
      // 削除確認
      const confirm = await confirmDialogStore.open('削除してよろしいですか？', '削除');
      if (!confirm) {
        return;
      }

      try {
        await ProductService.registerFavorite(product.janCode, false, false, true);
        await fetchFavoriteList();
      } catch (error) {
        console.error(error);
        errorStore.errorMessage =
          'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
      }
    };

    // カート投入
    const addCart = (product: FavoriteItem): void => {
      ProductService.addCart(product.janCode, false, null, Number(product.price), 1).then(() => {
        state.showCartAddedMap[product.janCode] = true;
        setTimeout(() => {
          // 3秒後に結果を非表示にする
          state.showCartAddedMap[product.janCode] = false;
        }, 3000);
      });
    };

    // 表示するお気に入り商品を増やす
    const addShowFavoriteLength = () => {
      state.showFavoriteLength += state.showFavoriteAddLength;

      // サーバーにまだ取得していないお気に入り商品がないか確認する
      if (state.favoriteProducts.length < state.showFavoriteLength) {
        state.favoritePage++;
        fetchFavoriteList(state.favoritePage);
      }
    };

    /**
     * 画面表示するお気に入り商品を取得する
     */
    const getFavoriteProducts = computed(() => {
      const favoriteProducts = state.favoriteProducts.slice(0, state.showFavoriteLength);
      return favoriteProducts;
    });

    return {
      ...toRefs(state),
      formatPrice,
      getUsedProductsSummaryByJanCode,
      addCart,
      onFavoriteRegisterd,
      removeFavorite,
      getFavoriteProducts,
      addShowFavoriteLength
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  お気に入り一覧
------------------------------- */
.loading-favorite-list {
  height: 20vh;
  width: 100%;
}

.favorite {
  &-list {
    padding: 8px;

    .row {
      margin: 0;
    }
  }

  &-item {
    padding: 8px;
  }
}

.product {
  &-header-area {
    display: flex;
    flex-wrap: wrap;
    padding-right: 30px;
    width: 100%;
  }

  &-operation-area {
    display: flex;
    flex-wrap: wrap;
  }

  &-price,
  &-used-price {
    color: $text-red;
  }
  &-used-conut {
    margin-left: 8px;
  }
}

.product-operation-area .v-btn {
  margin: 4px 0;

  &.remove-favorite-btn {
    padding: 0 8px;
    font-size: 0.8rem;
    background-color: $bg-light-grey;
    border-color: $bg-light-grey;
    margin-right: 6px;
  }
  &.cart-btn {
    padding: 0 4px;
    color: #fff;
    background-color: rgb(255, 132, 0);
    border-color: rgb(255, 132, 0);
    font-weight: bold;
    font-size: 0.8rem;

    &.v-btn--disabled {
      padding: 0 16px;
    }
  }
}

.notion {
  &-area {
    font-size: 0.8rem;
    vertical-align: middle;
  }

  &-icon {
    font-size: 1rem;
    margin-right: 5px;
    vertical-align: middle;
  }

  &-new-used {
    margin-right: 10px;
    color: #06a865;
  }
  &-price-down {
    color: $ec-red;
  }
}

.not-found {
  &-area {
    text-align: center;
  }

  &-icon {
    color: $ec-light-grey;
    font-size: 50px;
    margin-bottom: 4px;
  }
}

/** -------------------------------
  お気に入り一覧 960px未満
------------------------------- */
.container-narrow {
  .favorite {
    &-list {
      padding: 0;
    }
    &-item {
      padding: 1px 0;
    }
  }

  .product {
    &-used-conut {
      margin-left: 4px;
    }
  }

  .remove-favorite-btn {
    margin-right: 10px;
  }

  .cart-button {
    font-size: 0.9rem;
    font-weight: bold;
  }
}
</style>
