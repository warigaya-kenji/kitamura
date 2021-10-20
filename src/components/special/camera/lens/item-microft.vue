<template>
  <div class="item-microft">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1 text-body-1">
          <a href="/ec/special/camera/lens">
            <img class="mb-1 banner-img" src="/ec/images2/special/camera/lens/950.png" alt="カメラレンズ人気ランキング" /><br />
            カメラレンズ人気ランキング TOPへ戻る</a
          >
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <div class="h-1 ma-0 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left" cols="12">
              <v-col cols="12" class="float-left">
                <h2>マイクロフォーサーズ用 おすすめカメラレンズ一覧</h2>
              </v-col>
              <!-- ↓ 特集IDでの商品一覧表示 -->
              <product-list-by-special-id class="mb-5" :specialId="1398" />
              <v-col class="pa-1 float-left">
                <v-btn block class="yellow darken-4 text-body-1 white--text wp" height="70px" :href="`/ec/special/camera/lens`"
                  ><span class="mt-2">カメラレンズ人気ランキング<br />TOPへ戻る</span></v-btn
                ></v-col
              >
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'item-microft',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'マイクロフォーサーズ用 人気カメラレンズ一覧 | カメラのキタムラネットショップ';
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カメラレンズ人気ランキング',
          linkUrl: '/ec/special/camera/lens',
          disabled: false
        },
        {
          path: 'マイクロフォーサーズ用 おすすめカメラレンズ一覧',
          linkUrl: '/ec/special/camera/lens/item-microft',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350051051',
        '4545350045487',
        '4549077845306',
        '4545350047726',
        '4545350043742',
        '4549077890542',
        '4549077174031',
        '4545350049966',
        '4545350045869',
        '4545350045876',
        '4984824926134'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }
  .banner-img {
    max-width: 100%;
    height: auto;
  }

  .cl {
    clear: both;
  }
  .item-microft ul {
    list-style: none;
  }
  .bg-kni {
    background: #0c4165;
    color: #fff;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 10px;
  }
  .bg-medaru {
    float: left;
    background: url(/ec/images2/special/camera/lens/bk_medaru.png) no-repeat scroll left;
    width: 48px;
    height: 48px;
  }
  .item-microft p {
    line-height: 1.8em;
  }
  .tx-tya {
    color: #603813 !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }
  .tx-tya {
    color: #46280c !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .tx-20 {
    font-size: 20px;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .h-1 {
    height: 1px;
  }
  .name2 {
    //行数制限
    display: -webkit-box;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    height: 3em !important;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  .line {
    border-bottom: dotted #9aced1 1px;
    box-sizing: border-box;
  }
  .bk-usg {
    background-color: #f8f7f3;
  }
  .mx100pr {
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 668px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.item-microft {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
</style>
<style lang="scss" scoped>
// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: calc((100% - (12px * 3)) / 4);

    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }

    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }

    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }

    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}

@media only screen and (max-width: 670px) {
  .product-list {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: calc((100% - (0px * 3)) / 1);

      &:not(:nth-child(1n)) {
        margin: 0 0 0px 0;
      }

      &:not(:nth-last-child(-n + 1)) {
        margin: 0 0 0px 0;
      }
    }
  }
  .product-list-item {
    margin: 0 0 20px 0 !important;
  }
}
</style>
