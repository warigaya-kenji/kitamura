<template>
  <div class="item02">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="title-box pc">
          <a href="/ec/special/camera/compact">
            <h1 class="tx-20 tx-bo txkg-whi01 tx-tya">おすすめデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ TOPへ戻る</h1></a
          >
        </h1>
        <h1 class="sp subtitle-2">
          <a href="/ec/special/camera/compact">
            <img class="mb-1 banner-img" src="/ec/images2/special/camera/compact/sp_top.jpg" alt="おすすめデジカメ（コンデジ）/デジタルカメラ特集" />
            <span class="text-body-2 tx-tya">おすすめデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ TOPへ戻る</span></a
          >
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <!-- ↓ サンプル：価格・人気アクセサリー -->
        <div class="h-1 ma-0 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left line" cols="12">
              <v-col cols="12" class="float-left bk-usg">
                <h2 class="osusume-title txkg-whi01">おすすめハイスペックデジカメ / デジタルカメラ</h2>
              </v-col>
              <v-col cols="12" class="float-left">
                <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
                  <div class="product-list-wrap">
                    <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
                      <div class="product-list-item-img mb-4 text-center">
                        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                          ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
                        /></router-link>
                      </div>
                      <div class="product-list-item-name-wrap mb-2">
                        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                          ><div class="product-list-item-name name2">
                            {{ product.itemName }}
                          </div></router-link
                        >
                      </div>
                      <div class="product-list-item-price-wrap">
                        価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
                        >（税込）
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col class="pa-1 float-left">
                <v-btn block class="ankr tx-tya text-body-1 wp" height="70px" :href="`/ec/special/camera/compact`"
                  ><span class="mt-2">おすすめデジカメ特集<br />TOPへ戻る</span></v-btn
                ></v-col
              >
            </v-col>
          </v-row>
        </v-container>
        <!-- ↑ サンプル：価格・人気アクセサリー -->
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
//import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
//import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
//import { ConditionItem } from '@/types/conditions';
//import { ProductItem } from '@/types/product-list';
//import { NEWER_SORT_LIST } from '@/constants/sort-list';
//import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
//import { SEARCH_STATE } from '@/constants/search-state';
export default Vue.extend({
  name: 'item02',
  components: {
    breadcrumbs: Breadcrumbs
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'おすすめハイスペックデジカメ | カメラのキタムラネットショップ';
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
          path: 'おすすめデジカメ（コンデジ）/デジタルカメラ特集',
          linkUrl: '/ec/special/camera/compact',
          disabled: false
        },
        {
          path: 'おすすめハイスペックデジカメ',
          linkUrl: '/ec/special/camera/compact/item02',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4905524893878',
        '4905524985917',
        '4548736047532',
        '4548736037670',
        '4549292051797',
        '4549292051865',
        '4549292081121',
        '4549292081053',
        '4549292056389',
        '4961311902550',
        '4549077630827',
        '4548182190004'
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
  /*背景*/
  h1.title-box {
    width: 100%;
    height: 85px;
    margin: 0;
    padding: 30px 0px 0px 100px;
    background-image: url(/ec/images2/special/camera/compact/bg_titletop.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    box-sizing: border-box;
  }
  .ankr {
    border: 2px #ffffff solid;
    box-sizing: border-box;
    background: linear-gradient(#b7e9e9, #a2d4d4);
  }
  .osusume-title {
    width: 100%;
    height: auto;
    margin: 0 0 10px 0;
    padding: 5px 0px 0px 40px;
    font-size: 18px;
    font-weight: 800;
    background-image: url(/ec/images2/special/camera/compact/camera_logo.jpg);
    background-repeat: no-repeat;
    float: left;
    color: #603813;
    box-sizing: border-box;
    line-height: 1.2em;
  }

  .blk-c {
    width: 100%;
    height: auto;
    margin: 0px 0px 20px 0px;
    padding: 20px 8px 20px 10px;
    background-image: url(/ec/images2/special/camera/compact/bg_titleb.jpg);
    background-repeat: no-repeat;
    clear: both;
    background-position: top right;
    box-sizing: border-box;
    background-color: #f8f7f3;
  }
  .sbtitle-cp {
    width: 100%;
    height: auto;
    margin: 30px 0 15px 0;
    padding: 5px 0px 8px 40px;
    font-size: 18px;
    font-weight: 800;
    color: #603813;
    clear: both;
    background-image: url(/ec/images2/special/camera/compact/denkyu_logo.jpg);
    background-repeat: no-repeat;
    box-sizing: border-box;
    line-height: 1.2em;
    float: left;
  }

  .item02 ul {
    list-style: none;
  }
  ul.ssz {
    padding: 0 !important;
  }
  ul.ssz li {
    width: 50%;
    list-style: none;
    float: left;
    line-height: 1.3em;
    padding: 3px;
    box-sizing: border-box;
    border-bottom: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
  ul.ssz ol {
    padding: 0px;
  }
  .item02 p {
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
  /*●品*/
  .maru {
    border-radius: 150px;
    border: 1px solid #999999;
  }
  /*ショックレ*/
  .w50pr-re {
    width: 50%;
    padding: 12px;
    box-sizing: border-box;
  }
  div.s-credit {
    display: block;
    width: 100%;
  }
  div.s-credit table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
  }
  div.s-credit table th,
  div.s-credit table td {
    padding: 2px 0;
    vertical-align: middle;
    border: solid 1px #ffffff;
    box-sizing: border-box;
  }
  div.s-credit table th {
    background: #389c88 none repeat scroll 0 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: normal;
    box-sizing: border-box;
  }
  div.s-credit table td {
    background: #eee none repeat scroll 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0em;
    box-sizing: border-box;
  }
  div.s-credit table td span {
    font-size: 13px;
    margin-left: 3px;
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
    .w20pr {
      width: 20%;
    }
    .blk-b {
      width: 100%;
      height: auto;
      padding: 20px 8px 20px 10px;
      background-image: url(/ec/images2/special/camera/compact/bg_title.jpg);
      background-repeat: no-repeat;
      clear: both;
      box-sizing: border-box;
      float: left;
      background-position: top right;
      background-color: #f8f7f3;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
    .w20pr {
      width: 50%;
    }
    .blk-b {
      width: 100%;
      height: auto;
      padding: 20px 8px 20px 10px;
      background-repeat: no-repeat;
      clear: both;
      box-sizing: border-box;
      float: left;
      background-position: top right;
      background-color: #f8f7f3;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.item02 {
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
