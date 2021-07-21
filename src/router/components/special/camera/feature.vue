<template>
  <div class="feature">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->

    <div class="main-contents-wrap">
      <!-- ↓ 看板：画像の読み込み -->
      <h1><img class="mb-5 banner-img" src="https://shop.kitamura.jp/ec/images2/special/camera/feature/bn_newproduct00.png" /></h1>
      <!-- ↑ 看板：画像の読み込み -->
      <p>最新デジタルカメラ、新製品が続々登場！スペックや価格をチェック★</p>
      <h2 class="title mb-2 font-weight-bold">話題の新製品 特集一覧</h2>

      <!--★ 下リスト-->
      <v-sheet class="mx-auto" elevation="0" id="app-template">
        <v-slide-group v-model="model" class="pa-1" active-class="success" show-arrows>
          <v-slide-item v-for="(slide, i) in slides" :key="i">
            <v-card class="ma-3" elevation="0" height="70" width="180">
              <a :href="slide.linkUrl"><v-img height="65px" contain :src="slide.image" :name="slide.name"></v-img></a>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <!--★ 下リスト-->

      <!-- ↓ サンプル：メイン商品-->
      <div class="main-product mb-5" v-if="Object.keys(mainProduct).length">
        <h2 class="title mb-2 font-weight-bold">{{ mainProduct.itemName }}</h2>
        <div class="main-product-area d-flex py-3 px-10">
          <div class="main-product-area-left">
            <router-link class="main-product-link" :to="`/ec/pd/${mainProduct.janCode}`">
              <img class="main-product-img" :src="mainProduct.images[0].imagePath" @error="noimage" />
              <p class="main-product-name">{{ mainProduct.itemName }}</p>
            </router-link>
          </div>
          <div class="main-product-area-right">
            <p class="main-product-price text-center">
              <span class="d-inline-block">価格</span><span class="text-h4 primary--text">¥{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
              ><span class="d-inline-block">(税込)</span>
            </p>
            <v-btn
              class="main-product-btn text-h5 font-weight-bold"
              dark
              block
              color="rgba(255, 132, 0, 1)"
              height="60px"
              :href="`/ec/pd/${mainProduct.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              ご購入はこちら
            </v-btn>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：メイン商品 -->

      <!-- ↓ サンプル：比較-->
      <div class="product-comparison mb-5" v-if="comparisonDetailList && comparisonDetailList.length">
        <table class="product-comparison-table">
          <tbody>
            <tr>
              <th>商品名</th>
              <td v-for="product in comparisonDetailList" :key="product.janCode">{{ product.itemName }}</td>
            </tr>
            <tr>
              <th>価格</th>
              <td v-for="product in comparisonDetailList" :key="product.janCode">
                <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                >（税込）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- ↑ サンプル：比較 -->

      <!-- ↓ サンプル：動画で見る -->
      <div class="product-video mb-5">
        <h2 class="title mb-2 font-weight-bold">動画で見る ソニー α1</h2>
        <div class="product-video-wrap mb-4">
          <p class="product-video-text">SONYのフラッグシップ機・ソニー α1を先行体験</p>
          <div class="product-video-contents">
            <iframe
              class="lozad"
              type="text/html"
              src="https://www.youtube.com/embed/2CFa12pvTu4#?rel=0"
              frameborder="0"
              allowfullscreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：動画で見る -->

      <!-- ↓ サンプル：ShaSha -->
      <div class="product-shasha mb-5">
        <h2 class="title mb-2 font-weight-bold">ShaSha:ソニー α1 レビュー｜スポーツ撮影現場で使ってみました！</h2>
        <v-card class="product-shasha-wrap pa-4" outlined>
          新しい型番の「α1」。発表されたスペックをみている段階では、すぐの導入を見送ろうと考えていました。しかし実際に手に取って触ってみると、その思いはすぐに変わりました。<br />
          今回は筆者が今まで使ってきたα9との比較を交えて、スポーツ撮影などの動体撮影をメインにα1を紹介します。...<a
            class="product-shasha-link"
            href="https://shasha.kitamura.jp/article/480653303.html "
            target="_blank"
            >続きを読む <img src="@/assets/special/img/sample1/shashabnr4.jpg" alt="イメージ" class="banner-img product-shasha-img mt-4"
          /></a>
        </v-card>
      </div>
      <!-- ↑ サンプル：ShaSha -->

      <!-- ↓ サンプル：価格・人気アクセサリー -->
      <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
        <h2 class="title mb-2 font-weight-bold">カテゴリーで見る キタムラおすすめ新製品！価格・商品一覧</h2>
        <div class="product-list-wrap">
          <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
            <div class="product-list-item-img mb-4 text-center">
              <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
              /></router-link>
            </div>
            <div class="product-list-item-name-wrap mb-2">
              <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
              >
            </div>
            <div class="product-list-item-price-wrap">
              特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
              >（税込）
            </div>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：価格・人気アクセサリー -->
      <!-- ↓ サンプル：検索APIでの表示 -->
      <div class="product-list mb-5" v-if="productDetailList && productDetailList.length">
        <h2 class="title mb-2 font-weight-bold">検索での表示</h2>
        <div class="product-list-wrap">
          <product
            v-for="item in results"
            :key="item.itemid"
            :product="item"
            :display-price-type="displayProductPriceType"
            :used-products-summary="usedProductsSummary.filter((summary) => summary.janCode === item.itemid)[0]"
            :isSpecial="true"
          />
        </div>
      </div>
      <!-- ↑ サンプル：検索APIでの表示 -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail, UsedProductsSummary } from '@/types/product';
import { ConditionItem } from '@/types/conditions';
import { ProductItem } from '@/types/product-list';
import { NEWER_SORT_LIST } from '@/constants/sort-list';
import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
import { SEARCH_STATE } from '@/constants/search-state';

export default Vue.extend({
  name: 'feature',
  components: {
    breadcrumbs: Breadcrumbs,
    product: Product
  },
  props: {},

  //★スライド
  template: '#app-template',
  data: () => ({
    slides: [{
      image: 'https://shop.kitamura.jp/images/banner/8406.png',
      linkUrl: '/special/camera/feature/sony/fe14f18gm/',
      name: 'ソニー FE 14mm F1.8 GM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8404.png',
      linkUrl: '/special/camera/feature/tamron/150-500mm-f5-6.7/',
      name: 'タムロン 150-500mm F/5-6.7 Di III VC VXD'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8399.png',
      linkUrl: '/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/',
      name: 'フジフイルム XF18mm F1.4 R LM WR'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8395.png',
      linkUrl: '/special/camera/feature/canon/rf100-f28l/',
      name: 'キヤノン RF100mm F2.8 L MACRO IS USM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8397.png',
      linkUrl: '/special/camera/feature/canon/rf400-f28l/',
      name: 'キヤノン RF400mm F2.8 L IS USM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8377.jpg',
      linkUrl: '/special/camera/feature/pentax/k-3mk3/',
      name: 'ペンタックス K-3 Mark III'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8381.jpg',
      linkUrl: '/special/camera/feature/sony/sel24f28g/',
      name: 'ソニー FE 24mm F2.8 G'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8369.jpg',
      linkUrl: '/special/camera/feature/sigma/fp_l/',
      name: 'シグマ fp L'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8355.jpg',
      linkUrl: '/special/camera/feature/sony/sel50f12gm/',
      name: 'ソニー FE 50mm F1.2 GM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8331.jpg',
      linkUrl: '/special/camera/feature/sony/cinemaline-fx3/',
      name: 'ソニー Cinema Line FX3'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8199.jpg',
      linkUrl: '/special/camera/feature/sony/a1/',
      name: 'ソニー α1'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8233.jpg',
      linkUrl: '/special/camera/feature/fujifilm/gfx100s/',
      name: 'フジフイルム GFX100S'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8210.jpg',
      linkUrl: '/special/camera/feature/fujifilm/x-e4/',
      name: 'フジフイルム X-E4'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8237.jpg',
      linkUrl: '/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr/',
      name: 'フジフイルム XF70-300mmF4-5.6 R LM OIS WR'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8187.jpg',
      linkUrl: '/special/camera/feature/sony/sel35f14gm/',
      name: 'ソニー FE 35mm F1.4 GM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8081.jpg',
      linkUrl: '/special/camera/feature/canon/rf50-f18/',
      name: 'キヤノン RF50mm F1.8 STM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8083.jpg',
      linkUrl: '/special/camera/feature/canon/rf70-200-f4l/',
      name: 'キヤノン RF70-200mm F4 L IS USM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8037.jpg',
      linkUrl: '/special/camera/feature/fujifilm/x-s10/',
      name: '富士フイルムX-S10'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8026.jpg',
      linkUrl: '/special/camera/feature/nikon/z6II_z7II/',
      name: 'ニコン Z 6II ・ Z 7II'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/8023.jpg',
      linkUrl: '/special/camera/feature/canon/eoskiss_m2/',
      name: 'キヤノン EOS Kiss M2'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7945.jpg',
      linkUrl: '/special/camera/feature/nikon/z50mm_z14-24mm/',
      name: 'NIKKOR Z 50mm f/1.2 S・ NIKKOR Z 14-24mm f/2.8 S'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7941.jpg',
      linkUrl: '/special/camera/feature/sony/7c/',
      name: 'ソニーα７C'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7899.jpg',
      linkUrl: '/special/camera/feature/fujifilm/xf50mmf1.0rwr/',
      name: 'XF50mm F1.0 R WR'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7771.jpg',
      linkUrl: '/special/camera/feature/sony/7sm3/',
      name: 'ソニー α7S III'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7757.jpg',
      linkUrl: '/special/camera/feature/nikon/z_5/',
      name: 'ニコン Z 5'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7727.jpg',
      linkUrl: '/special/camera/feature/panasonic/g100/',
      name: 'パナソニック LUMIX G100'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7719.jpg',
      linkUrl: '/special/camera/feature/canon/eosr5_r6/',
      name: 'キヤノン EOS R5 / EOS R6'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7717.jpg',
      linkUrl: '/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm/',
      name: 'キヤノン RF100-500mm F4.5-7.1 L IS USM エクステンダー RF1.4X & RF2X'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7730.jpg',
      linkUrl: '/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm/',
      name: 'キヤノン RF600mm/RF800mm F11 IS STM'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7860.jpg',
      linkUrl: '/special/camera/feature/sony/vlogcam_zv1_zv1g/',
      name: 'ソニー VLOGCAM ZV-1/ZV-1G'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7404.jpg',
      linkUrl: '/special/camera/feature/fujifilm/xt4/',
      name: '富士フイルム X-T4'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7401.jpg',
      linkUrl: '/special/camera/feature/nikon/d6/',
      name: 'ニコン D6'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7350.jpg',
      linkUrl: '/special/camera/feature/canon/eoskiss10I/',
      name: 'キヤノン EOS KISS 10i'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7331.jpg',
      linkUrl: '/special/camera/feature/olympus/em1m3/',
      name: 'オリンパス EM1mark3'
    },
    {
      image: 'https://shop.kitamura.jp/images/banner/7334.jpg',
      linkUrl: '/special/camera/feature/olympus/ed_12-45mm_f4.0pro/',
      name: 'オリンパス ED12-45'
    }
    ],
    model: null
  }),
  //スライド

  setup: (props, context) => {
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2024/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: '4548736130678',
      // 結果格納用
      mainProduct: {} as ProductDetail,
      // ↑ ---- メイン商品 ----

      // ↓ ---- 比較 ----
      // 取得するJancode
      comparisonJanCodeList: ['4548736130678', '4548736108288', '4549292146851', '4960759903402'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130678',
        '4548736108288',
        '4548736105546',
        '4548736064539',
        '4548736064621',
        '4548736055704',
        '4548736109520',
        '4548736121249'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----

      // ↓ ---- サンプル：検索APIでの表示 ----
      // 検索条件（項目は、仕様を参照）
      searchCondition: [
        // カテゴリー（valueTextに値を設定）
        {
          paramCode: 'category',
          paramText: '',
          value: '',
          valueText: 'ミラーレス一眼'
        },
        // キーワード
        {
          paramCode: 'keyword',
          paramText: '',
          value: 'EOS',
          valueText: ''
        },
        // メーカー
        {
          paramCode: 's3',
          paramText: '',
          value: 'シルバー',
          valueText: ''
        }
      ] as Array<ConditionItem>,
      // 並び替え (設定値は、NEWER_SORT_LIST参照)
      sort: NEWER_SORT_LIST[0].value,
      // 表示件数 (設定値は、DISPLAY_COUNT_LIST参照)
      displayCount: DISPLAY_COUNT_LIST[0].value,
      // 表示ページ
      page: 1,
      // 価格の表示制御 (option 0:新品・中古、 1:新品、 2:中古)
      displayProductPriceType: SEARCH_STATE.option[1].value,
      // 結果格納用
      results: [] as Array<ProductItem>,
      // 中古価格情報
      usedProductsSummary: [] as Array<UsedProductsSummary>
      // ↑ ---- サンプル：検索APIでの表示 ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProduct = {} as ProductDetail;
        // 比較
        state.comparisonDetailList = [] as Array<ProductDetail>;
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    /**
     * 検索結果の取得
     */
    const searchNewerProductList = async () => {
      let searchResult;
      // 新品・中古の価格表示情報を検索パラメーターに落とし込み
      state.searchCondition.push({
        paramCode: 'narrow18',
        paramText: '',
        value: state.displayProductPriceType,
        valueText: ''
      });

      // 検索結果取得
      try {
        searchResult = await ProductListService.searchNewItem(state.searchCondition, state.sort, state.displayCount, state.page);
        state.results = searchResult.items;
      } catch (err) {
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
        searchResult.items.length
      ) {
        const itemIds = [] as Array<string>;
        searchResult.items.forEach((item) => {
          itemIds.push(item.itemid);
        });
        try {
          const usedProductsResult = await ProductService.searchUsedProductsSummary(itemIds);
          state.usedProductsSummary = usedProductsResult.itemInfo;
        } catch (err) {
          state.usedProductsSummary = [];
        }
      }
    };

    onMounted(() => {
            // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
      searchNewerProductList();
    });

    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>


<style lang="scss">
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
}
/* Vuetifyで生成されるDomへのスタイル適用（※scopedなしのため、該当セレクタに適用される） */
// サンプル：メイン商品 v-btn:hoverの上書き
.main-product {
  clear: both;
  &-btn {
    &:hover {
      .v-btn__content {
        color: $text-white;
        text-decoration: underline;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.feature {
  &-info {
    color: $text-primary;
  }
}

.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}

// サンプル：メイン商品
.main-product {
  &-area {
    background: #ffffff;

    &-left {
      flex: 1 1 auto;
    }
    &-right {
      flex: 1 1 auto;
    }
  }

  &-link {
    &:hover {
      .main-product-img {
        opacity: 0.7;
      }
    }
  }

  &-name {
    color: $text-blue;
  }

  &-btn {
    position: relative;

    &-icon {
      position: absolute;
      left: 10px;
    }
  }
}

// サンプル：比較
.product-comparison {
  &-table {
    font-size: 12px;
    border-collapse: collapse;
    text-align: center;

    %cell {
      width: 16%;
      padding: 12px 8px;
      border: 1px solid $ec-light-grey2;
      vertical-align: middle;
    }

    th {
      @extend %cell;
      background-color: $bg-light-grey;
    }

    td {
      @extend %cell;
    }
  }
}

// サンプル：動画で見る
.product-video {
  &-contents {
    height: 520px;
  }
}

// サンプル：ShaSha
.product-shasha {
  &-wrap {
    background: #f8fbd1;
  }

  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}

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
</style>




