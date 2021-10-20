<template>
  <v-app>
    <div class="xf33f14">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf33f14/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf33f14/sp_img_top.jpg'"
          :topTitle="'フジフイルム XF33mm F1.4 R LM WR'"
          :topTitleText="'圧倒的な解像性能と開放F値1.4の明るさを実現する\n大口径標準単焦点レンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 40px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>
        <p class="text-left">フジフイルム XF33mm F1.4 R LM WR</p>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'画像中心部から周辺部まで 圧倒的な解像性能と開放F値1.4の明るさを実現する大口径標準単焦点レンズ'" />

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'フジフイルム XF33mm F1.4 R LM WR 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'フジフイルム XF33mm F1.4 R LM WRの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <!-- ↓ 30回まで分割ー -->
        <subText :textItem="'キタムラなら最大30回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'30'"
          :maximumInstallmentPayment="'30'"
          :amount="'3,140'"
          :targetDate="'2021年9月7日'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'フジフイルム XF33mm F1.4 R LM WR 価格・人気アクセサリー'" />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';


export default Vue.extend({
  name: 'fujifilm-xf33f14',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,


  },
  setup: (props, context) => {
    document.title = 'フジフイルム XF33mm F1.4 R LM WR | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム XF33mm F1.4 R LM WR ご予約受付中、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

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
      characteristicList: [
        {
          subtitle: '画像中心部から周辺部まで圧倒的な解像性能を発揮',
          contents: [
            '非球面レンズ2枚とEDレンズ3枚を採用した10群15枚のレンズ構成により、色収差や球面収差を徹底的に抑制。画像中心部から周辺部まで高い解像性能を発揮',
            '最後部に非球面レンズ1枚を配置するとともに、非球面レンズ1枚とEDレンズ2枚を含むフォーカス群を中間部に配置。フォーカス群を一度に駆動させることで収差変動を抑え、最短撮影距離から無限遠まで高画質撮影が可能',
            '浅い被写界深度を生かした豊かなボケ味と、ピント面の高精細な描写により、被写体を際立たせた立体的な表現が楽しめます'

          ]
        },
        {
          subtitle: '標準33mmの焦点距離を備え自然な遠近感を生かした撮影が可能',
          contents: [
            '人間の視野に近い標準33mm（35mm判換算：50mm相当）の焦点距離を備えているため、自然な遠近感を生かしたポートレート撮影やスナップ撮影が可能',
            '最短撮影距離約30cm、最大撮影倍率0.15倍（35mm判換算：約0.2倍相当）を実現。1本で多彩な写真表現を可能とする、汎用性の高いレンズです'
          ]
        },
        {
          subtitle: '高速・高精度AFとコンパクト設計により高い機動力を実現',
          contents: [
            'リニアモーターにより小型軽量なフォーカス群を駆動させるインナーフォーカス方式を採用。フォーカス群の移動する範囲を短く設計したことで、最短約0.04秒の高速・高精度AFを実現し、決定的瞬間を捕捉',
            '動画撮影で使用されることが多い「AF-C モード」設定時では、静かで滑らかなフォーカシングが可能。独自の光学設計技術により、フォーカシング時の画角変動（ブリージング）も徹底的に抑制しているため、静止画撮影のみならず、動画撮影にも最適',
            'フォーカスリングの回転量を検出する精度が高いため、指先の微細な動きを検知することが可能。精緻なフォーカシングが行えます'
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
          path: 'フジフイルム XF33mm F1.4 R LM WR',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410455465'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410455465', '4547410206296', '4961607237410', '4957638817097',],
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