<template>
  <v-app>
    <div class="7rm4a-7rm3a">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/7rm4a-7rm3a/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/7rm4a-7rm3a/sp_img_top.jpg'"
          :topTitle="'ソニー α7R IV A & α7R III A'"
          :topTitleText="'液晶モニターが高画質化\n高画質と高速性能を両立したフルサイズミラーレス'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'190px 0px 15px 25px'"
          :textPadding="'20px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <subText :textItem="'ソニー α7R IV A & α7R III A 価格・ご購入'" />

        <!--↓ 価格・ご購入-->
        <priceAndPurchase :mainProductList="mainProductList" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'ソニー α7R IV A & α7R III A 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー α7R IV A & α7R III A 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/7rm4a-7rm3a/'" :count="7" />

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';

export default Vue.extend({
  name: 'sony-7rm4a-7rm3a',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    priceAndPopular: PriceAndPopular,
    urlcopy: Urlcopy
  },
  setup: (props, context) => {
    document.title = 'ソニー α7R IV A & α7R III A | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α7R IV A & α7R III A 好評発売中！価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
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
        },
        {
          path: 'ソニー α7R IV A & α7R III A',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736128477', '4548736128378'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736128477',
        '4548736105546',
        '4548736128378',
        '4548736047419',
        '4548736121249',
        '4548736064621',
        '4548736064522',
        '4548736109520',
        '4548736100664',
        '4548736067714',
        '4560376574360',
        '4560376577996'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取',
          target: 'blank'
        }
      ]
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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