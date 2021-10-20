<template>
  <v-app>
    <div class="xf18mmf14-r-lm-wr">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/bg_top.png'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/sp_img_top.png'"
          :topTitle="'フジフイルム XF18mm F1.4 R LM WR'"
          :titleColor="'#ffffff'"
          :padding="'200px 0px 15px 40px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>
        <p class="text-left">フジフイルム XF18mm F1.4 R LM WR</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#00A080'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'「XFレンズ」最高クラスの解像性能を備えながらも携帯性に優れた大口径レンズ'" />
        <p>静音かつ高速・高精度なAFで決定的瞬間を逃さない</p>

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 価格・ご購入'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'フジフイルム XF18mm F1.4 R LM WRの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/lenses/xf18mmf14-r-lm-wr/'"
          :height="'70px'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:フジフイルム XF18mm F1.4 R LM WR｜開発担当者インタビューから新レンズを紐解く'" />
        <shasha
          :txt="'富士フイルムから新たな交換レンズ「XF18mmF1.4 R LM WR」が発表されました。Xマウントを採用しているAPS-Cフォーマットのミラーレス一眼カメラ、Xシリーズ向けの大口径広角単焦点レンズであり、徹底的に追求された解像性能が大きな特徴です。\n今回は先行して製品に触れる機会を特別に設けていただきましたので、開発担当者への取材内容も交えつつ製品をご紹介して...'"
          :href="'https://shasha.kitamura.jp/article/481083487.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/shashabnr.png'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 外観画像'" />
          <p class="text-subtitle-1">フジフイルム XF18mm F1.4 R LM WRの外観画像</p>
          <p>フジフイルム XF18mm F1.4 R LM WRの外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr'" :count="1" />
          <p>フジフイルム XF18mm F1.4 R LM WR / X-Pro3 装着外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr'" :count="2" :target="1" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images2">
          <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 作例画像'" />
          <exampleImages :path="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/'" :count="5" />
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ShaSha from '@/components/common/special/shasha.vue';

export default Vue.extend({
  name: 'fujifilm-xf18mmf14-r-lm-wr',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    shasha: ShaSha
  },
  setup: (props, context) => {
    document.title = 'フジフイルム XF18mm F1.4 R LM WR | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム XF18mm F1.4 R LM WR 好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images' },
        { naviItem: '作例画像', href: '#images2' }
      ],
      characteristicList: [
        {
          subtitle: '高い解像性能と開放F値1.4の明るさを実現',
          contents: [
            '非球面レンズ3枚とEDレンズ1枚を含む9群15枚のレンズ構成を採用し、色収差やコマ収差を徹底的に抑制。画像中心部から周辺部まで高い解像性能を実現',
            '大口径レンズの搭載などにより開放F値1.4を実現。光量の少ないシーンでも、手ブレやノイズを抑制した高画質な写真撮影が可能'
          ]
        },
        {
          subtitle: '様々な撮影シーンに対応する広角単焦点レンズ',
          contents: [
            '広角焦点距離を生かして背景を大きく取り入れたスナップ撮影が可能。その場の空気感まで描写',
            'レンズ先端から最短約11cmまでの近接撮影能力を活用したテーブルフォトなど様々な撮影シーンに対応'
          ]
        },
        {
          subtitle: '静音かつ高速・高精度なAFとコンパクト設計',
          contents: [
            'リニアモーターにより駆動させるインナーフォーカス方式を採用。静音かつ高速・高精度なAFを実現',
            '金属製の鏡筒の厚みを最適にコントロール。コンパクト設計ながらも高い堅牢性と優れた携帯性を発揮',
            'v鏡筒の8ケ所にシーリングを施した防塵・防滴・-10℃の耐低温構造を採用'
          ]
        }
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'フジフイルム XF18mm F1.4 R LM WR',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410442557'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410442557', '4957638817103', '4547410206302', '4977187330878', '4977187330045', '4902520009609', '4547410443189'],
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