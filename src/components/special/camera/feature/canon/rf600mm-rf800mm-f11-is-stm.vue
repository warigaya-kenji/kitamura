<template>
  <v-app>
    <div class="rf600mm-rf800mm-f11-is-stm">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'キヤノン RF600mm F11 IS STM\n キヤノン RF800mm F11 IS STM'"
          :topTitleText="'軽量ボディとお手頃価格で新たな撮影の楽しみが体験できる\n新コンセプト超望遠単焦点レンズ'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中！<br />キヤノン RF600mm F11 IS STM<br />キヤノン RF800mm F11 IS STM</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p>キヤノン RF600mm F11 IS STM／キヤノン RF800mm F11 IS STM</p>
        <naviBtn :naviList="naviList" :color="'#00A273'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF600mm F11 IS STM／RF800mm F11 IS STM 価格・ご予約'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'軽量ボディとお手頃価格で新たな撮影の楽しみが体験できる新コンセプト超望遠単焦点レンズ'"
        />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'RF800mm F11 IS STM メーカーサイトを見る'"
          :url="'https://cweb.canon.jp/eos/rf/lineup/rf800-f11/'"
          :height="'52px'"
          :color="'black'"
        />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'RF600mm F11 IS STM メーカーサイトを見る'"
          :url="'https://cweb.canon.jp/eos/rf/lineup/rf600-f11/'"
          :height="'52px'"
          :color="'black'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF600mm F11 IS STM／RF800mm F11 IS STM 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="productDetailList[0]"
            :maximumInstallmentPayment="'48'"
            :numberOfTimes="'36'"
            :amount="'3,370'"
            :secondAmount="'約3,100'"
            :targetDate="'2020年2月10日'"
          />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="productDetailList[1]"
            :numberOfTimes="'24'"
            :amount="'4,320'"
            :secondAmount="'約3,600'"
            :targetDate="'2020年2月10日'"
            :isCreditBtn="true"
            :isText="false"
          />
        </div>

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'キヤノン RF600mm F11 IS STM／RF800mm F11 IS STM外観画像'" />
          <p class="text-subtitle-2">キヤノン RF600mm F11 IS STM／RF800mm F11 IS STMの外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm'" :count="1" />
          <p class="text-subtitle-1 text-center mb-0">キヤノン RF600mm F11 IS STM</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm'" :count="1" :target="1" />
          <p class="text-subtitle-1 text-center">キヤノン RF800mm F11 IS STM</p>
        </div>

        <!--↓ SNSー-->
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'rf600mm-rf800mm-f11-is-stm',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    naviBtn: NaviBtn,
    subText: SubText,
    splitContent: SplitContent,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    topTitleImg: TopTitleImg,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    appearanceImage: AppearanceImage,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = 'キヤノンRF600mm/RF800mm F11 IS STM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン RF600mm F11 IS STM！キヤノン キヤノン RF800mm F11 IS STM！比較や価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm/sp_img_top.jpg',
      naviList: [
        { naviItem: '外観画像', href: '#images' }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
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
          path: 'キヤノン',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292162042'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292162059', '4549292162042'],
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