<template>
  <v-app>
    <div class="fe14f18gm">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/fe14f18gm/bg_top.png'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/fe14f18gm/sp_img_top.png'"
          :topTitle="'ソニー FE 14mm F1.8 GM [SEL14F18GM]'"
          :topTitleText="'Gマスターならではの高い解像性能と美しいぼけ描写を実現した\n大口径超広角単焦点レンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'190px 0px 15px 25px'"
          :textPadding="'20px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <p class="darken-2 text-left">ソニー FE 14mm F1.8 GM [SEL14F18GM]</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'blue lighten-1'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'高い解像性能と美しいぼけ描写を小型軽量化した本体サイズで実現'" />
        <p class="text-sibtitle-2">幅広い撮影用途においてあらゆるクリエーターの創造性に応える大口径超広角単焦点レンズ</p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'3,734'" :targetDate="'2021年5月28日'" />
        </div>

        <!--動画で見る-->
        <div id="hikaku">
          <subText :textItem="'動画で見る ソニー FE 14mm F1.8 GM [SEL14F18GM]'" />
          <watchInVideo :src="'https://www.youtube.com/embed/R3BP4YEkdas'" :height="315" />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL14F18GM/'"
          :height="'70px'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 外観画像'" />
          <p class="text-subtitle-1">ソニー FE 14mm F1.8 GM [SEL14F18GM] の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/fe14f18gm'" :count="1" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images2">
          <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 作例画像'" />
          <p>ソニー FE 14mm F1.8 GM 作例</p>
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/fe14f18gm/'" :count="11" :sm="4" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';

export default Vue.extend({
  name: 'sony-fe14f18gm',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
    watchInVideo: WatchInVideo,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage
  },
  setup: (props, context) => {
    document.title = 'ソニー α7R IV A & α7R III A | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α7R IV A & α7R III A  好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

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
      mainProductJanCode: ['4548736131187'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4548736131187', '4977187330878', '4902520009609', '4977187330045'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '動画', href: '#hikaku' },
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