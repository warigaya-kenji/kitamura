<template>
  <div class="lumixg">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1 text-body-1">
          <v-img
            class="mx-auto"
            max-width="720"
            src="/ec/images2/special/camera/lens/lumixg/bnr01.jpg"
            alt="2本目にほしい！パナソニック マイクロフォーサーズレンズ"
          >
          </v-img>
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-btn block class="mb-4 mt-4" href="/ec/ct/C004/006/" color="black" x-large>
                <span class="white--text">マイクロフォーサーズレンズ一覧 </span>
              </v-btn>
              <h2>パナソニックレンズ for マイクロフォーサーズ 商品一覧</h2>
            </v-col>
          </v-row>
        </v-container>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="208" />
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
  name: 'lumixg',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'パナソニックレンズ for マイクロフォーサーズ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '2本目にほしい！パナソニック マイクロフォーサーズレンズ商品を集めました！ カメラ専門店 カメラのキタムラ ネットショップにおまかせください。'
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
          path: 'パナソニックレンズ for マイクロフォーサーズ',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----
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
