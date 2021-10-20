<template>
  <v-app>
    <div class="pen_e-p7">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓ サンプル：画像の読み込み -->
        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/panasonic/gh5m2/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/panasonic/gh5m2/sp_img_top.jpg'"
          :topTitle="'パナソニック LUMIX DC-GH5M2'"
          :topTitleText="'5G対応端末と連携し手軽に無線ライブ配信が行える\n次世代ミラーレス'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>パナソニック LUMIX DC-GH5M2</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#1122cc'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'5G対応端末などと連携し、無線ライブ配信を実現したプロフェッショナル動画性能搭載ミラーレス'" />

        <!--====== 価格・ご購入 ======-->
        <div id="price">
          <subText :textItem="'パナソニック LUMIX DC-GH5M2 価格・ご購入'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>

        <div>
          <a href="https://panasonic.jp/dc/products/g_series/gh5m2/campaign_cashback.html" target="_blank"
            ><v-img src="/ec/images2/special/camera/feature/panasonic/gh5m2/camp.jpg" max-width="100%" height="auto"
          /></a>
        </div>

        <!--↓キタムラなら最大48回まで分割金利手数料0円！ -->
        <div id="price2">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'4,061'" :targetDate="'2021年6月25日'" />
          <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[1]" :amount="'4,579'" :targetDate="'2021年6月25日'" :isText="false" />
        </div>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'パナソニック LUMIX GH5M2 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:パナソニック LUMIX DC-GH5M2 レビュー'" />
        <shasha
          :txt="'ハイエンド、ハイブリッド、ハイパフォーマンスの意味を込めた「GH」を冠する同シリーズのカメラは動画撮影に強い「ハイブリット」としての側面が特に注目されているかと思います。\n今回のGH5IIでも注目すべきは動画性能かと思いますので、動画機として如何に進化しているかについて...'"
          :href="'https://shasha.kitamura.jp/article/482045857.html'"
          :src="'/ec/images2/special/camera/feature/panasonic/gh5m2/shashabnr2.jpg'"
        />

        <subText :textItem="'ShaSha:パナソニック LUMIX DC-GH5M2 紹介記事'" />
        <shasha
          :txt="'前機種のLUMIX GH5の登場から約4年の歳月が流れ、本機では基本性能やプロユースに応える性能の向上に加え、5G環境下のスマホと連携して屋内外さまざまなシーンで無線LIVE配信を可能にするカメラになっているようです。\n今回はそのLUMIX GH5IIの進化や魅力について、パナソニック株式会社 商品企画担当の中西智紀（なかにしともき）氏にインタビューしました...'"
          :href="'https://shasha.kitamura.jp/article/481686135.html'"
          :src="'/ec/images2/special/camera/feature/panasonic/gh5m2/shashabnr.jpg'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'パナソニック LUMIX DC-GH5M2 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'パナソニック LUMIX DC-GH5M2 外観画像'" />
          <p class="text-subtitle-1">パナソニック LUMIX DC-GH5M2 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/panasonic/gh5m2'" />
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
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';

export default Vue.extend({
  name: 'gh5m2',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    appearanceImage: AppearanceImage,
    priceAndPopular: PriceAndPopular,
    urlcopy: Urlcopy
  },
  setup: (props, context) => {
    document.title = 'パナソニック LUMIX DC-GH5M2 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'パナソニック LUMIX DC-GH5M2 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

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
          path: 'パナソニック LUMIX DC-GH5M2',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980499771', '4549980499795'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350053574', '4545350044350', '4547410442632', '4548736108486'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549980499771',
        '4549980499795',
        '4549077834317',
        '4549980630761',
        '4549980208793',
        '4902704128881',
        '4549077834300',
        '4549980634783',
        '4975981735592',
        '4523052024719',
        '4523052024092',
        '4523052024108'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: 'お得情報', href: '#price2' },
        { naviItem: '特徴', href: '#spec' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '5G対応端末などと連携して、手軽に高品位な無線ライブ配信を実現',
          contents: ['専用アプリを使ってスマートデバイスからかんたん操作でライブ配信が可能']
        },
        {
          subtitle: 'クリエイターの表現の幅を広げる進化した基本性能',
          contents: [
            '高精細でリアルな解像力を実現する20.3MLiveMOSセンサー＆最新のヴィーナスエンジン搭載',
            '追従精度が向上したリアルタイム認識AF、6.5段の手ブレ補正システムDualI.S.2を搭載',
            'オーバーヒートを抑制する放熱システムにより、収録やライブ配信で動画撮影時間無制限を実現'
          ]
        },
        {
          subtitle: 'プロフェッショナルユースに応える動画撮影性能',
          contents: [
            'Cinema4K60p10bit、高解像アナモフィックモード（6K-A）記録などの多彩な動画記録モード',
            'スローモーションやクイックモーション撮影が可能なVFR（バリアブルフレームレート）',
            '自由度の高いカラーグレーディングを実現する10bitのV-Log L'
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'http://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラ・レンズ メンテナンスサービス'
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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