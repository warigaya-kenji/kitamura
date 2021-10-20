<template>
  <v-app>
    <div class="rf50f18">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/rf50f18/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/rf50f18/sp_img_top.jpg'"
          :topTitle="'キヤノン RF50mm F1.8 STM'"
          :topTitleText="'完成された光学系とF1.8のボケ味で様々なジャンルに\n対応するフルサイズミラーレス対応標準単焦点レンズ'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <div class="darken-2 text-left">
          <span>キヤノン RF50mm F1.8 STM</span>
        </div>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF50mm F1.8 STM 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/rf/lineup/rf50-f18/'"
          :height="'70px'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF50mm F1.8 STM 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'キヤノン RF50mm F1.8 STM 作例画像'" />
          <exampleImages :path="'/ec/images2/special/camera/feature/canon/rf50f18/'" :count="6" />
        </div>

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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
export default Vue.extend({
  name: 'rf50f18',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPopular: PriceAndPopular,
    exampleImages: ExampleImages,

  },
  setup: (props, context) => {
    document.title = 'キヤノン RF50mm F1.8 STM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン RF50mm F1.8 STM 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({

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
          href: '/ec/guide/s_credit_01l',
          img: 'http://shopimg.kitamura.jp/images/banner/1486.gif',
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
          path: '最新デジカメ新製品',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'キヤノン RF50mm F1.8 STM',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292181623'],
      mainProductList: [] as Array<ProductDetail>,

      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292181623', '4549292181678', '2500000146367', '4977187330878'],
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

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
  .credit_l {
    width: 35%;
    float: left;
    display: block;
    text-align: center;
    margin: 10px 10px 20px 0;
  }
  .credit_r {
    width: 60%;
    float: left;
    font-size: 14px;
  }
  .mt30 {
    margin-top: 30px;
  }
  .bgtypetitle {
    background-color: #ffffcc;
  }
  table.spec {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 80%;
    float: left;
    box-sizing: border-box;
    word-break: break-all;
  }
  .product-video {
    &-contents {
      height: 520px;
    }
  }
}
.height-20 {
  height: 4.8em;
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
</style>