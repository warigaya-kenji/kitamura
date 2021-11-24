<template>
  <v-app>
    <div class="canon-fv100">
      <div class="main-contents-wrap">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <urlcopy />
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'キヤノン iNSPiC REC FV-100'"
          :topTitleText="'手のひらサイズとカラビナデザインで\n気軽に持ち運び撮影できる新コンセプトデジタルカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'40px 0px 15px 30px'"
          :titleFontsize="'180%'"
          :textFontsize="'60%'"
        />
        <p class="red darken-4 text-center mb-2 white--text text-h6 font-weight-bold">キヤノン iNSPiC REC FV-100 好評発売中！</p>
        <subText :textItem="'キヤノン iNSPiC REC FV-100'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :txt="'手のひらサイズとカラビナデザインで 気軽に持ち運び撮影できる'" />
        <v-container fluid class="pa-0 mt-4">
          <v-row dense>
            <v-col cols="12" sm="3" v-for="(item, i) in productColorImageList" :key="i">
              <router-link :to="item.href">
                <v-img :src="item.src" max-width="372" max-height="372" alt="イメージ" class="hover"> </v-img>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
        <specificationsExamplesBtn
          :btntxt="'メーカーHPで詳しく見る'"
          :color="'#ff0000'"
          :url="'https://cweb.canon.jp/camera/dcam/inspicrec/'"
          :height="'52px'"
        />
        <subText :textItem="'キヤノン iNSPiC REC FV-100 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: 'canon-fv100',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: () => {
    document.title = 'キヤノン iNSPiC REC FV-100 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン iNSPiC REC FV-100   発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/fv100/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/fv100/sp_img_top.jpg',
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
          path: 'キヤノン iNSPiC REC FV-100',
          disabled: true
        }
      ],
      productColorImageList: [
        { href: '/ec/pd/4549292167412', src: 'https://shopimg.kitamura.jp/images/pd/ae6/294/c92/fb1/6a8/306/bcf/fda/3e9/c43/c2s/t6d/d8s/c/L.jpg' },
        { href: '/ec/pd/4549292167405', src: 'https://shopimg.kitamura.jp/images/pd/eec/760/838/75d/d52/c68/47e/a52/600/951/8b9/wbb/2en/4/L.jpg' },
        { href: '/ec/pd/4549292167399', src: 'https://shopimg.kitamura.jp/images/pd/77c/e15/81a/c7c/890/d1f/640/b9a/a3e/b96/481/xuh/2nz/q/L.jpg' },
        { href: '/ec/pd/4549292167382', src: 'https://shopimg.kitamura.jp/images/pd/dd4/334/e36/d01/67a/b87/834/1f4/3c9/458/11o/4rl/wmb/4/L.jpg' },
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
      mainProductJanCode: ['4549292167412'],
      mainProductList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4549292167412',
        '4549292167405',
        '4549292167399',
        '4549292167382',
        '4523052021121'
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

