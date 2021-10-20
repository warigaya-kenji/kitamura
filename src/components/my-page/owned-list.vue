<template>
  <div
    id="my-page-owned-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs" :requireFetchOwned="false">
      <div class="owned-list ec-back-color" v-if="!loaded.ownedProducts || (ownedProducts && ownedProducts.length > 0)">
        <v-row>
          <!-- ローディング -->
          <v-col class="loading-owned-list" v-if="!loaded.ownedProducts">
            <section-loading />
          </v-col>

          <!-- 持っている商品一覧 -->
          <template v-else>
            <v-col cols="12" md="4" class="owned-item" v-for="product in getOwnedProducts" :key="product.janCode">
              <product :product="product" :canPostReview="true">
                <template v-slot:header>
                  <div class="product-header-area">
                    <!-- APIの対応が未定のため、非表示とする -->
                    <!-- <div class="notion-area notion-price-up"><i class="fas fa-exclamation-circle notion-icon"></i>買取上限額が上がりました</div> -->
                  </div>
                </template>

                <template v-slot:price>
                  <div class="product-text">
                    買取上限額:<span class="product-price">{{ product.maxPurchasePrice ? formatPrice(parseInt(product.maxPurchasePrice)) : '-' }}円</span>
                  </div>
                </template>

                <template v-slot:operation>
                  <div class="product-operation-area">
                    <v-btn id="remove-owned-btn" tile class="remove-owned-btn" @click="removeOwned(product)">削除</v-btn>
                    <v-btn
                      id="sell-request-btn"
                      class="request-btn ec-link-btn"
                      :href="`${netChukoUrl}ec/sell/item-price?goodsCode=${product.usedQuotesCode}&tradeinS=${product.maxPurchasePrice}`"
                      tile
                      v-if="product.usedQuotesCode && product.maxPurchasePrice"
                    >
                      <i class="far fa-file-alt mr-1"></i>買取申込
                    </v-btn>
                  </div>
                </template>
              </product>
            </v-col>
          </template>
        </v-row>
      </div>

      <!-- 持っている商品がない場合 -->
      <div class="not-found-area" v-else>
        <i class="far fa-hand-paper not-found-icon"></i>
        <p>持っている商品の登録はありません</p>
      </div>

      <!-- もっと見るボタン -->
      <more-items-button @click="addShowOwnedLength()" v-if="ownedProducts.length > showOwnedLength" />
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
import { OwnedItem } from '@/types/owned-list';
import Product from '../common/product.vue';
import ProductService from '@/logic/product.service';
import { formatPrice, sortByRowNo, splitList } from '@/logic/utils';
import BackButton from '@/components/common/back-button.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import { ProductDetail } from '@/types/product';

export default Vue.extend({
  name: 'owned-list',
  components: {
    'section-loading': SectionLoading,
    'my-page-layout': MyPageLayout,
    product: Product,
    'back-button': BackButton,
    'more-items-button': MoreItemsButton
  },
  setup: (_, context) => {
    const { authorizer, errorStore, confirmDialogStore, mypageMenuStore } = context.root.$store;

    const state = reactive({
      // ネット中古
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      // 画面タイトル
      title: '持っている商品',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '持っている商品', linkUrl: '' }
      ],
      // 持っているリスト
      ownedProducts: [] as Array<OwnedItem>,
      showOwnedAddLength: 9,
      showOwnedLength: 9,
      // 取得した持っている商品のページ番号
      ownedPage: 1,
      // ロード状態
      loaded: {
        ownedProducts: false
      }
    });

    /**
     * 持っているリストの取得
     */
    const fetchOwnedList = async (page?: number) => {
      try {
        const isInit = page == null;
        if (isInit) {
          // 初期化
          state.ownedPage = 1;
        }

        // 持っている商品一覧を取得
        const result = await UserService.fetchOwnedList(page);
        let resultOwnedProducts = result.items;
        mypageMenuStore.ownedCount = result.count;

        // 「rowNo」を昇順にソートする
        // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
        resultOwnedProducts = sortByRowNo<OwnedItem>(resultOwnedProducts);

        // 取得した商品のJANコード一覧
        const janCodeList = resultOwnedProducts.map((product) => product.janCode);

        // 商品詳細より「メーカー名」を取得
        // 商品詳細取得APIはJANコード指定が最大20件のため、分割して取得する
        const splittedJanCodes = splitList(janCodeList, 20);
        const responses = splittedJanCodes.map((splittedJanCodes) => ProductService.fetchProducts(splittedJanCodes, true));
        const productDetails = (await Promise.all(responses)).reduce((list, value) => list.concat(value.items), new Array<ProductDetail>());
        for (const { janCode, makerName } of productDetails) {
          const product = resultOwnedProducts.find((item) => item.janCode === janCode);
          if (product) {
            product.makerName = makerName;
          }
        }

        // 初期化の場合は配列を置き換える。追加の場合は配列を連結する。
        state.ownedProducts = isInit ? resultOwnedProducts : state.ownedProducts.concat(resultOwnedProducts);
      } catch (error) {
        console.error(error);
        // 追加取得時は、エラーになっても元の商品表示が消えないようにする
        if (page == null) {
          state.ownedProducts = [] as Array<OwnedItem>;
        }
      } finally {
        state.loaded.ownedProducts = true;
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchOwnedList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchOwnedList();
      }
    );

    // 持っている登録削除
    const removeOwned = async (product: OwnedItem) => {
      // 削除確認
      const confirm = await confirmDialogStore.open('削除してよろしいですか？', '削除');
      if (!confirm) {
        return;
      }

      try {
        await ProductService.registerHaving(product.janCode, true);
        await fetchOwnedList();
      } catch (error) {
        console.error(error);
        errorStore.errorMessage =
          'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
      }
    };

    // 表示する持っている商品を増やす
    const addShowOwnedLength = () => {
      state.showOwnedLength += state.showOwnedAddLength;

      // サーバーにまだ取得していない持っている商品がないか確認する
      if (state.ownedProducts.length < state.showOwnedLength) {
        state.ownedPage++;
        fetchOwnedList(state.ownedPage);
      }
    };

    /**
     * 画面表示する持っている商品を取得する
     */
    const getOwnedProducts = computed(() => {
      const ownedProducts = state.ownedProducts.slice(0, state.showOwnedLength);
      return ownedProducts;
    });

    return {
      ...toRefs(state),
      formatPrice,
      removeOwned,
      getOwnedProducts,
      addShowOwnedLength
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  持っている一覧
------------------------------- */
.loading-owned-list {
  height: 20vh;
  width: 100%;
}

.owned {
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

  &.remove-owned-btn {
    font-size: 0.8rem;
    background-color: $bg-light-grey;
    border-color: $bg-light-grey;
    margin-right: 10px;
  }
  &.request-btn {
    color: #fff;
    background-color: #06a865;
    border-color: #06a865;
    font-weight: bold;
    font-size: 0.8rem;
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

  &-price-up {
    color: #06a865;
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
  持っている一覧 960px未満
------------------------------- */
.container-narrow {
  .owned {
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

    &-operation-area {
      justify-content: normal;
    }
  }

  .remove-owned-btn {
    margin-right: 10px;
  }

  .request-button {
    font-size: 0.9rem;
    font-weight: bold;
  }
}
</style>
