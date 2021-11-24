<template>
  <v-app>
    <div class="ricoh-thetasc">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'リコー RICOH THETA(シータ) SC2'"
          :topTitleText="'シンプルな操作と\n多彩な機能で気軽に使える360°カメラ'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">リコー RICOH THETA SC2 好評発売中！</span>
        </div>

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'新たに４K動画にも対応した気軽に撮影できる360°全天球カメラエントリーモデル「RICOH THETA SC2」'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'リコー RICOH THETA SC2'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>

        <v-container class="pa-0 mt-4">
          <v-row>
            <v-col cols="12" sm="3" v-for="(ricohLink, i) in ricohLinkList" :key="i">
              <router-link :to="ricohLink.href">
                <v-img :src="ricohLink.src" max-width="222" height="auto" class="mx-auto hover"></v-img>
              </router-link>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'リコー RICOH THETA SC2 価格/人気アクセサリー/お得な情報'" />
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

export default Vue.extend({
  name: 'ricoh-thetasc',
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
  },
  setup: () => {
    document.title = '発売中！リコー RICOH THETA（シータ） SC2'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'リコー RICOH THETA（シータ） SC2  好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/sp_img_top.jpg',
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
          path: 'リコー RICOH THETA SC2',
          disabled: true
        }
      ],
      characteristicList: [
        {
          subtitle: 'シンプル操作はそのままに、高画質・高品質な360°の全天球静止画/動画撮影を実現',
          contents: [
            '新イメージセンサーと画像処理エンジン搭載により、「高画質な4K動画の撮影」に対応',
            '露出精度やホワイトバランスのアルゴリズムを一新。オート撮影での正確で自然な描写を実現',
          ]
        },
        {
          subtitle: 'わかりやすく、使いやすい、気軽に使える多彩な機能',
          contents: [
            'ワンショットで360°の全天球イメージを撮影可能。難しい設定をしなくてもシーンに合わせて使える撮影モードを多数搭載',
            'セルフタイマーボタン搭載で、カメラ単体での撮影もより使いやすく進化',
            '本体下部に「設定モードを示すアイコン」「バッテリー残量」などを分かりやすく表示する「状態表示OLED」を搭載'
          ]
        },
      ],
      ricohLinkList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/ricoh0660-2.jpg', href: '/ec/pd/4961311947292' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/ricoh0692-2.jpg', href: '/ec/pd/4961311947315' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/ricoh0718-2.jpg', href: '/ec/pd/4961311947308' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/ricoh/thetasc/ricoh0741-2.jpg', href: '/ec/pd/4961311947285' },
      ],
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
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
      mainProductJanCode: ['4961311947285',],
      mainProductList: [] as Array<ProductDetail>,
      // 結果格納用
      productJanCodeList: [
        '4961311947308',
        '4961311947315',
        '4961311947285',
        '4961311947292',
        '4961311944154',
        '4961311944147',
        '4961311938955',
        '4961311919534',
        '4961311917325',
        '4961311904479',
        '4961311904462',
        '4961311892387',
        '4961311892370',
        '4961311892363',
        '4961311892356',
        '4961311892349',
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