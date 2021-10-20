<template>
  <v-app>
    <div class="filmcamera-892">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓top image -->
        <div class="bunn">
          <topTitleImg
            :pcBackgroundImg="'/ec/images2/special/camera/filmcamera/bnr_topimg.jpg'"
            :spBackgroundImg="'/ec/images2/special/camera/filmcamera/bnrsp_topimg.jpg'"
            :topTitle="'おすすめ\n チェキアクセサリー大集合'"
            :titleColor="'#ff6600'"
            :padding="'60px 0px 0px 30px'"
            :titleFontsize="'150%'"
          />
        </div>
        <p class="pa-1 text-right mb-0"><a href="/ec/special/camera/filmcamera">特集ＴＯＰへ戻る</a></p>
        <!-- ↑top image -->
        <!--↓アンカー-->
        <v-container class="v-container">
          <v-row dense>
            <v-col cols="6" sm="3" v-for="navi in naviList" :key="navi">
              <v-btn block class="ank white--text text-center orange darken-4 text-body-1" :href="navi.href"
                ><span class="white--text mx100">{{ navi.naviItem }}<v-icon color="white" right>fa-arrow-circle-right</v-icon></span></v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'チェキアクセサリー 価格・商品一覧'" />
        <product-list-by-special-id class="mb-5 mt-5" :specialId="892" />
        <!-- ↓ 相互 -->
        <subText :textItem="'関連おすすめ特集・プリントサービス'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" class="pa-1" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import SubText from '@/components/common/special/subtext.vue';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'filmcamera-892',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    subText: SubText,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'チェキアクセサリー・電池 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '結婚式の二次会や歓迎会、送別会などのイベントに活躍するチェキ！アルバムやフィルム価格をチェック★チェキと一緒に、チェキアルバムやチェキフィルムのご購入もおすすめ！商品をご紹介！カメラのキタムラにおまかせください！'
      );
    const state = reactive({
      naviList: [
        { naviItem: 'チェキ\n商品一覧', href: '/ec/special/camera/filmcamera/889' },
        { naviItem: 'チェキアルバム\n商品一覧', href: '/ec/special/camera/filmcamera/890' },
        { naviItem: 'チェキフィルム\n商品一覧', href: '/ec/special/camera/filmcamera/891' },
        { naviItem: 'アクセサリー\n電池一覧', href: '/ec/special/camera/filmcamera/892' }
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント注文',
          target: 'blank'
        },
        {
          href: 'http://www.kitamura-print.com/special/mother/dispose/',
          img: 'https://shopimg.kitamura.jp/images/banner/1632.jpg',
          alt: '写真の整理術',
          target: 'blank'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'チェキ・チェキフィルム・チェキアルバムおすすめ商品',
          linkUrl: '/ec/special/camera/filmcamera',
          disabled: false
        },
        {
          path: 'チェキアクセサリー・電池',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960999635170'],
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
.newproduct {
  width: 100%;
  height: auto !important;
}
.ank {
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto !important;
  margin: 0px 0px 0px 0px;
  padding: 10px 0 !important;
  font-weight: 800;
  display: block;
}
.mx100 {
  padding: 0;
  width: 100%;
}
.v-container {
  a:hover .v-btn-text-color {
    color: $text-white;
  }
  a .v-btn-text-color {
    color: $text-white;
  }
}
@media screen and (min-width: 950px) {
  .bunn {
    white-space: pre-wrap;
    word-wrap: break-word;
    width: 100%;
    height: 160px !important;
    margin: 0px 0px 5px 0px;
    padding: 0px 0px 0px 0px;
    background-repeat: no-repeat;
    background-position: top right;
  }
}
</style>
