<template>
  <v-app>
    <div class="7dmk2">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/7dmk2/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/7dmk2/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS 7D Mark II'"
          :topTitleText="'新次元の高速性能を実現した撮影表現の可能性を広げる\n小型軽量 フルサイズデジタル一眼'"
          :padding="'10px 0px 15px 30px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン EOS 7D Mark II </span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>キャノン EOS 7D Mark II</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS 7D Mark II 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/lineup/7dmk2/index.html'"
          :height="'70px'"
        />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'EOS 7D Mark II ３大特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />

          <subText :textItem="'EOS 7D Mark II スペック'" />
          <characteristic :characteristics="speccommonCharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS 7D Mark II EOS 7D 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">連写・AF性能をさらに向上させたAPS-Cサイズフラッグシップ機「EOS 7D Mark II」と、人気の「EOS 7D」を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2014年11月</td>
                  <td>2009年10月</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素</th>
                  <td>約2020万画素</td>
                  <td>約1791万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>CMOS</td>
                  <td>CMOS</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>APS-C</td>
                  <td>APS-C</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒</td>
                  <td>30-1/8000</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約10コマ/秒</td>
                  <td>約8コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100-16000</td>
                  <td>ISO100-6400</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>ワイド3.0型</td>
                  <td>3型</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む</th>
                  <td>910g</td>
                  <td>910g</td>
                </tr>
                <tr>
                  <th>動画最大フレームレート</th>
                  <td>59.94fps</td>
                  <td>30fps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'EOS 7D Mark II 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'キヤノン EOS 7D Mark II 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS 7D Mark IIの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/7dmk2'" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: '7dmk2',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    appearanceImage: AppearanceImage,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = '！キヤノンEOS 7D Mark II | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS 7D Mark II ！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '卓越した連写・ＡＦ性能を誇る「スピードEOS」',
          contents: [
            '最高約１０コマ/秒の高速連写でスポーツ、動物、乗物の撮影でも最高の瞬間を写せます',
          ]
        },
        {
          subtitle: '妥協のない「高画質」と「基本性能」',
          contents: [
            '夜景撮影や室内撮影でもジャンルを選ばず圧倒的なクオリティの写真が撮影できます',

          ]
        },
        {
          subtitle: '撮影意欲を刺激する「EOS MOVIE」',
          contents: [
            '動画撮影時も常用感度ISO16000、撮影シーンを選ばず高画質動画が楽しめます',
          ]
        }
      ],
      speccommonCharacteristicList: [
        {
          subtitle: 'デュアルDIGIC6搭載、連写・AF性能をさらに向上させたAPS-Cサイズフラッグシップ機',
          contents: [
            '最高約10コマ／秒の高速連続撮影',
            'EOS初 新65点オールクロスAF',
            '約20.2M新CMOSセンサー、デュアルDIGIC6搭載',
            '常用ISO感度100～16000',
            'EOS初 新インテリジェントビューファインダー',
            '最高約6.5コマ/秒、最大100コマの高速連続撮影が可能',
            'EOS初 フリッカーレス撮影',
            'EOS初 Dual Pixel COMS AF搭載、動画サーボAFのスピードカスタマイズ可',
          ]
        },
      ],

      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
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
          alt: 'トクトク買取',
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'キャノン EOS 7D Mark II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292091489', '4549292001716', '4957792114193'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292001617', '4960999654621',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292001617',
        '4549292001716',
        '4957792114193',
        '4975981733390',

      ],
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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
