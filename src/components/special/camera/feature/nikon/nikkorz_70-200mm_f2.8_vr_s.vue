<template>
  <v-app>
    <div class="nikon-nikkorz_70-200mm_f2.8_vr_s">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'ニコン NIKKOR Z 70-200mm f/2.8 VR S'"
          :topTitleText="'静止画、動画を問わない圧倒的な描写性能を発揮する\nニコン Z シリーズカメラ用望遠ズームレンズ'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン NIKKOR Z 70-200mm f/2.8 VR S 好評発売中！</span>
        </p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ニコン NIKKOR Z 70-200mm f/2.8 VR S'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :txt="'ニコン Z シリーズカメラ用望遠ズームレンズ'" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'5,982'"
          :targetDate="''"
          :isCreditBtn="true"
          :isMax60Txt="true"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン NIKKOR Z 70-200mm f/2.8 VR S 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ニコン NIKKOR Z 70-200mm f/2.8 VR S 作例画像'" />
          <exampleImages :path="exampleImagesPath" :count="4" :type="1" :ismb="false" />
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <exampleImages :path="exampleImagesPath" :count="1" :type="1" :target="8" :sm="12" :ismb="false" />
            </v-col>
            <v-col cols="12" sm="6">
              <exampleImages :path="exampleImagesPath" :count="2" :type="1" :target="4" :sm="12" :ismb="false" />
            </v-col>
          </v-row>
          <exampleImages :path="exampleImagesPath" :count="2" :type="1" :target="6" />
        </div>

        <!-- ↓ SNS -->
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
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SplitContent from '@/components/common/special/split-content.vue';
export default Vue.extend({
  name: 'nikon-nikkorz_70-200mm_f2.8_vr_s',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
  },
  setup: () => {
    document.title = 'NIKKOR Z 70-200mm f/2.8 VR S  | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン NIKKOR Z 70-200mm f/2.8 VR S 予約開始までまもなく！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s/sp_img_top.jpg',
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s/',
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
          path: 'ニコン NIKKOR Z 70-200mm f/2.8 VR S',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759902191'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759902191',
        '4955478179870',
        '4957638817134'
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
