<template>
  <v-app>
    <div class="rf100-500mm-f45-71l-is-usm">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm/sp_img_top.jpg'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中<br />RF100-500mm F4.5-7.1 L IS USM<br />エクステンダー RF1.4X & RF2X</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="mb-0">キヤノン RF100-500mm F4.5-7.1 L IS USM、エクステンダー RF1.4X & RF2X</p>
        <naviBtn :naviList="naviList" :color="'#00a273'" :hoverColor="'#aa0000'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF100-500mm F4.5-7.1 L IS USM 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n詳しく見る'" :url="'https://cweb.canon.jp/eos/rf/lineup/rf100-500-f45-71l/'" :height="'70px'" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF100-500mm F4.5-7.1 L IS USM、エクステンダー RF1.4X ＆ RF2X 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'キヤノン RF100-500mm F4.5-7.1 L IS USMご購入時、高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />
        </div>

        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'7,350'"
            :secondAmount="'6,910'"
            :targetDate="'2020年2月10日'"
            :isCreditBtn="true"
          />
        </div>

        <!--↓ 外観画像ー-->
        <div id="images" class="mb-6">
          <subText :textItem="'キヤノン RF100-500mm F4.5-7.1 L IS USM、エクステンダー外観画像'" />
          <p class="text-subtitle-1">キヤノン RF100-500mm F4.5-7.1 L IS USM、エクステンダーの外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm'" :count="1" />
          <p class="mb-0 text-center">キヤノン RF100-500mm F4.5-7.1 L IS USM</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm'" :count="1" :target="1" />
          <p class="mb-0 text-center">エクステンダー RF1.4X、エクステンダー RF2X</p>
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
export default Vue.extend({
  name: 'rf100-500mm_f4.5_7.1l_is_usm',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    splitContent: SplitContent,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = 'キヤノン RF100-500mm F4.5-7.1 L IS USM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン RF100-500mm F4.5-7.1 L IS USM！キヤノン エクステンダー RF1.4X & RF2X！比較や価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'キヤノン EF100-400mm F4.5-5.6L IS II USM',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4549292010350&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=40&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/907/6ae/371/a47/391/5e8/b02/627/a83/a07/1bb/qyv/z57/l/L.jpg',
        txt: 'キヤノン RF100-500mm F4.5-7.1 L IS USM',
        tradeInImg: '/ec/images2/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
      mainProductJanCode: ['4549292168037'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292168037', '4549292168051', '4549292168044'],
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