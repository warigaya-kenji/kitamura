<template>
  <v-app>
    <div class="xf18mmf14-r-lm-wr">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/special/sale-fair/camera/feature/fujifilm/xf18mmf14-r-lm-wr/'" />

        <!-- ↓ サンプル：画像の読み込み -->
        <div class="newproduct pc">
          <p class="top-title">フジフイルム XF18mm F1.4 R LM WR</p>
        </div>

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>
        <p class="text-left">フジフイルム XF18mm F1.4 R LM WR</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'「XFレンズ」最高クラスの解像性能を備えながらも携帯性に優れた大口径レンズ'" />
        <p>静音かつ高速・高精度なAFで決定的瞬間を逃さない</p>

        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'フジフイルム XF18mm F1.4 R LM WRの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/your-eos/product/eosr/')"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:フジフイルム XF18mm F1.4 R LM WR｜開発担当者インタビューから新レンズを紐解く'" />
        <shasha :shashaData="shashaData" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'パナソニック LUMIX DC-GH5M2 価格/人気アクセサリー'" />
        <v-container>
          <v-row>
            <v-col cols="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" class="mx100pr" /></a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">&yen;{{ productDetail.price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ 外観画像ー-->
        <subText :textItem="'パナソニック LUMIX DC-GH5M2 外観画像'" />
        <p class="text-subtitle-1">パナソニック LUMIX DC-GH5M2 の外観画像</p>
        <p>フジフイルム XF18mm F1.4 R LM WRの外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 3" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/panasonic/gh5m2/img_${n}.jpg`"> </v-img>
              <p v-if="n === 1">フジフイルム XF18mm F1.4 R LM WR / X-Pro3 装着外観画像</p>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'フジフイルム XF18mm F1.4 R LM WR 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/'" :count="5" />

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'fujifilm-xf18mmf14-r-lm-wr',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy
  },
  data() {
    return {
      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images2' },
        { naviItem: '作例画像', href: '#images' }
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
      shashaData: [
        {
          text: '富士フイルムから新たな交換レンズ「XF18mmF1.4 R LM WR」が発表されました。Xマウントを採用しているAPS-Cフォーマットのミラーレス一眼カメラ、Xシリーズ向けの大口径広角単焦点レンズであり、徹底的に追求された解像性能が大きな特徴です。\n今回は先行して製品に触れる機会を特別に設けていただきましたので、開発担当者への取材内容も交えつつ製品をご紹介して...',
          href: 'https://shasha.kitamura.jp/article/481083487.html',
          src: '/ec/images2/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr/shashabnr.jpg'
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
          href: 'https://shop.kitamura.jp/sitemap/s_credit_01.html',
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
      ]
    };
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature/',
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