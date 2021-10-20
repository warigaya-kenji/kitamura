<template>
  <v-app>
    <div class="xf70-300mmf4-56rlm-ois-wr">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr/sp_img_top.jpg'"
          :topTitle="'XF70-300mmF4-5.6 R LM OIS WRXF27mmF2.8 R WR\nXF27mmF2.8 R WR'"
          :topTitleText="'待望の超望遠撮影が可能なズームレンズと\n操作性、タフネス性能が向上した単焦点レンズがXシリーズに追加'"
          :textColor="'#ffffff'"
          :padding="'100px 0px 15px 40px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'フジフイルム XF70-300mmF4-5.6 R LM OIS WR / XF27mmF2.8 R WR 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'フジフイルム XF70-300mmF4-5.6 R LM OIS\n WR メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/lenses/xf70-300mmf4-56-r-lm-ois-wr/'"
        />

        <specificationsExamplesBtn
          :btntxt="'フジフイルム XF27mmF2.8 R WR メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/lenses/xf27mmf28-r-wr/'"
        />

        <!--外観画像ー-->
        <subText :textItem="'フジフイルム XF70-300mmF4-5.6 R LM OIS WR / XF27mmF2.8 R WR 外観画像'" />
        <p class="text-subtitle-1">フジフイルム XF70-300mmF4-5.6 R LM OIS WR / XF27mmF2.8 R WR の外観画像</p>
        <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr'" :count="2" />

        <!-- ↓ 作例画像 -->
        <subText :textItem="'フジフイルム XF70-300mmF4-5.6 R LM OIS WR / XF27mmF2.8 R WR 作例画像'" />
        <p class="text-subtitle-1">フジフイルム XF70-300mmF4-5.6 R LM OIS WR の作例画像</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr/'" :count="11" />

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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'xf70-300mmf4-56rlm-ois-wr',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'フジフイルム XF70-300mmF4-5.6 R LM OIS WR | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム XF70-300mmF4-5.6 R LM OIS WR 好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
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
          href: '/ec/special/general/tokutokukoukan',
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
          path: 'フジフイルム XF70-300mmF4-5.6 R LM OIS WR',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410437980', '4547410440386'],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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