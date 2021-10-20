<template>
  <div class="1869">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1 text-body-1">
          <img
            class="mb-1 banner-img"
            src="/ec/images2/special/camera/lensfilter/1869/cross_soft2015.jpg"
            alt="春の撮影におすすめ☆「PL(偏光)」「クローズアップレンズ」「ソフトフィルター」"
          />
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left" cols="12">
              <h2>春の撮影におすすめ☆「PL(偏光)」「クローズアップレンズ」「ソフトフィルター」</h2>
            </v-col>
          </v-row>
        </v-container>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1869" />

        <h2>おすすめの特集</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: '1869',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '春の撮影におすすめ☆「PL(偏光)」「クローズアップレンズ」「ソフトフィルター」';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'PL(偏光)フィルターやクローズアップレンズ、ソフトフィルターが、春の撮影におすすめ！桜や花・風景撮影をしてみませんか？偏光・PLフィルターならカメラのキタムラ ネットショップにお任せください'
      );
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
          path: 'レンズフィルター特集',
          linkUrl: '/ec/special/camera/lensfilter',
          disabled: false
        },
        {
          path: '春の撮影におすすめ☆「PL(偏光)」「クローズアップレンズ」「ソフトフィルター」 ',
          linkUrl: '/ec/special/camera/lensfilter/1869',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/salefair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759028921'],
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
}
</style>
