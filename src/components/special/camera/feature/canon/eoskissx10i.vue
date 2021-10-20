<template>
  <v-app>
    <div class="eoskiss10I">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'https://ns-stg.kitamura.shop/ec/images2/special/camera/feature/canon/eoskissx10i/bg_top.jpg'"
          :spBackgroundImg="'https://ns-stg.kitamura.shop/ec/images2/special/camera/feature/canon/eoskissx10i/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS KISS X10i'"
          :topTitleText="'高精度オートフォーカスにより\n快適な動体撮影を楽しめる小型軽量デジタル一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'40px 0px 15px 30px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キヤノン EOS KISS X10i 好評発売中！</span>
        </p>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'キヤノン EOS KISS X10i 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[0]" :btntxt="'商品詳細を見る'" :type="2" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'" :url="'https://cweb.canon.jp/eos/lineup/kissx10i/'" :height="'70px'" />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS KISS X10i 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <specificationsExamplesBtn :btntxt="'キヤノン EOS KISS X10i商品購入はこちら'" :url="'/ec/pd/4549292151251'" :color="'red darken-3'" :height="'60px'" />

        <!-- ↓ SNS -->
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
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';

export default Vue.extend({
  name: 'eoskiss10I',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPurchase: PriceAndPurchase,
    priceAndPopular: PriceAndPopular
  },
  setup: (props, context) => {
    document.title = '新製品！キヤノン EOS KISS X10i | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS KISS X10i 発売中！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({


      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/sale/shoppingcredit-campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
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
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'キヤノン EOS KISS X10i',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292151251', '4549292151237'],
      mainProductList: [] as Array<ProductDetail>,

      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292151251', '4549292151237'],
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