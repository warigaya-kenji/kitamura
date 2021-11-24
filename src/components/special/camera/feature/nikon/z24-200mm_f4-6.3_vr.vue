<template>
  <v-app>
    <div class="nikon-z24-200mm_f4-6.3_vr">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR'"
          :topTitleText="'ポートレートから風景までの幅広いシーンでの撮影が可能な\nZマウント用8.3倍高倍率望遠ズームレンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン NIKKOR Z 24-200mm f/4-6.3 VR 好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン NIKKOR Z 24-200mm f/4-6.3 VR</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入 -->
        <div id="kakaku">
          <subText :textItem="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR'" />
          <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :txt="'ニコン Z シリーズカメラ用望遠ズームレンズ'" />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで仕様・作例を詳しく見る'"
          :url="'https://www.nikon-image.com/products/nikkor/zmount/nikkor_z_24-200mm_f4-63_vr/'"
          :height="'52px'"
        />

        <!-- ↓ 高値下取りー -->
        <div id="sitadori">
          <subText :textItem="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR をご購入時、ニコン AF-S NIKKOR 28-300mm F3.5-5.6G ED VR 高価下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" id="price" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'3,762'"
          :targetDate="'2020年2月14日'"
          :numberOfTimes="'30'"
          :isCreditBtn="true"
        />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR 外観画像'" />
          <p class="text-subtitle-1">NIKKOR Z 24-200mm f/4-6.3 VR の外観画像</p>
          <appearanceImage :src="appearanceImagePath" :count="2" />
        </div>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR 作例画像'" />
        <exampleImages :path="exampleImagesPath" :count="10" />

        <specificationsExamplesBtn
          :btntxt="'ニコン NIKKOR Z 24-200mm f/4-6.3 VR ご購入はこちら'"
          :url="'/ec/pd/4960759902887'"
          :height="'74px'"
          :color="'#ff0000'"
        />

        <!-- ↓ SNS -->
        <facebookAndTwitter class="mt-6" />

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
import SplitContent from '@/components/common/special/split-content.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'nikon-z24-200mm_f4-6.3_vr',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    appearanceImage: AppearanceImage,
  },
  setup: () => {
    document.title = 'ニコン NIKKOR Z 24-200mm f4-6.3VR | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン NIKKOR Z 24-200mm f/4-6.3 VR 好評発売中！価格・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/z24-200mm_f4-6.3_vr/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/z24-200mm_f4-6.3_vr/sp_img_top.jpg',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/z24-200mm_f4-6.3_vr',
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/z24-200mm_f4-6.3_vr/',
      naviList: [
        { naviItem: '商品価格', href: '#kakaku' },
        { naviItem: '高価下取り', href: '#sitadori' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ニコン AF-S NIKKOR 28-300mm F3.5-5.6G ED VR',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4960759026002&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=add_date',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/4fe/2ec/353/11f/f48/958/7ce/6a7/605/d32/cbr/7zc/gsb/v/L.jpg',
        txt: 'ニコン NIKKOR Z 24-200mm f/4-6.3 VR',
        tradeInImg: ' /ec/images2/special/camera/feature/nikon/z24-200mm_f4-6.3_vr/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
        },
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
          path: 'ニコン NIKKOR Z 24-200mm f/4-6.3 VR',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759902887'],
      mainProductList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4960759902887',
      ],
      productDetailList: [] as Array<ProductDetail>
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

<style scoped>
.bgtypetitle {
  background-color: #ffffcc;
}
</style>