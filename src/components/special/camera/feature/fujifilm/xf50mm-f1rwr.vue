<template>
  <v-app>
    <div class="xf50mm-f1rwr">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf50mm-f1rwr/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf50mm-f1rwr/sp_img_top.jpg'"
          :topTitle="'フジフイルム XF50mm F1.0 R WR'"
          :topTitleText="'開放F値1.0の明るさを実現しなめらかで\n美しいボケ味を活かした写真撮影が可能な大口径標準レンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 40px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>
        <p class="text-left">フジフイルム XF50mm F1.0 R WR</p>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入 -->
        <div>
          <subText :textItem="'フジフイルム XF50mm F1.0 R WR 価格・ご購入'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>
        <!-- ↓ 高値下取りー -->
        <div>
          <subText :textItem="'フジフイルム XF50mm F1.0 R WR ご購入時、高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />
        </div>

        <!-- ↓ 分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'48'"
          :amount="'3,712'"
          :targetDate="'2020年9月8日'"
        />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
export default Vue.extend({
  name: 'xf50mm-f1rwr',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    splitContent: SplitContent,
    expensiveTradeIn: ExpensiveTradeIn
  },
  setup: (props, context) => {
    document.title = 'フジフイルム XF50mm F1.0 R WR | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'フジフイルム XF50mm F1.0 R WR 好評発売中！価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/09/07 10:00',
      validTo: '2999/09/29 00:00',
      // ↑ ---- 掲載期間 ----
      expensiveTradeInList: {
        name: 'フジフイルム XF56mm F1.2 R',
        href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4547410266627',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/16e/e3c/428/212/c9b/93e/cbb/ce5/1c7/006/0d5/0ni/jzk/4/L.jpg',
        txt: 'フジフイルム XF50mm F1.0 R WR',
        tradeInImg: '/ec/images2/special/camera/feature/fujifilm/xf50mm-f1rwr/bnr_shitadori_350-130.jpg',
        tradeInProducts: [{ name: 'フジフイルム XF56mm F1.2 R', href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4547410266627' }]
      },
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/sale-fair',
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
          path: 'フジフイルム XF50mm F1.0 R WR',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410435856'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410435856'],
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
