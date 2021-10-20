<template>
  <v-app>
    <div class="square">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/general/print-service/square/bg_top.gif'"
          :spBackgroundImg="'/ec/images2/special/general/print-service/square/sp_img_top.gif'"
          :topTitle="'ましかくプリントにおすすめ商品を集めました！'"
          :topTitleText="'プレゼントや自分用に可愛いアルバム・フレーム'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 20px'"
        />
        <!-- ↑top image -->

        <div class="text-right">
          <v-btn tile href="/special/sale-fair/" color="black" class="kg-in main-product-btn"><span class="white--text">≫ セール・特集一覧</span></v-btn>
        </div>

        <subText :textItem="'ましかくプリントを“飾りたい”人におすすめ商品'" />
        <p class="text-left">
          イチオシは “シャコラ”。特殊な低粘着なので、貼りなおしも自由自在です。
          壁に穴を開けることなく写真を気軽に、手軽に壁に飾ることができます。賃貸のお部屋でも安心ですね
        </p>

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'イチオシ！商品。賃貸のお部屋でも安心！フジフイルム シャコラ（shacolla）'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>

        <!--↓ 商品一覧ー-->
        <subText :textItem="'ましかくプリントにおすすめ商品'" />
        <priceAndPopular :productDetailList="productDetailList" />

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
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';



export default Vue.extend({
  name: 'fujifilm-square',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,



  },
  setup: (props, context) => {
    document.title = 'ましかくプリントにおすすめ！おしゃれなフォトフレームや写真アルバム集めました | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ましかくプリントにおすすめ！おしゃれなフォトフレームや写真アルバム集めました!アルバム・フレームはカメラのキタムラにおまかせください！')

    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/09/07 10:00',
      validTo: '2999/09/29 00:00',
      // ↑ ---- 掲載期間 ----
      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images' },
        { naviItem: '作例画像', href: '#images2' }
      ],

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
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },

        {
          href: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'セール・特集一覧',
          linkUrl: '/special/sale-fair/',
          disabled: false
        },
        {
          path: ' ましかくプリントにおすすめ！おしゃれなフォトフレームや写真アルバム集めました',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410330625'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410330625', '4974214178854', '4974214178878', '4974214178892', '4974214175570', '4906238815835',],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
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