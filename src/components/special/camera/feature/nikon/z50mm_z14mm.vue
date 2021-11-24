<template>
  <v-app>
    <div class="z50mmz14mm">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/z50mmz14mm/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/z50mmz14mm/sp_img_top.jpg'"
          :topTitle="'NIKKOR Z 50mm f/1.2 S\n NIKKOR Z 14-24mm f/2.8 S'"
          :topTitleText="'動画、静止画を問わず高い解像力を備えたレンズ2本が\nZマウント用レンズラインナップに追加'"
          :padding="'150px 0px 15px 40px'"
          :textPadding="'15px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><spnn class="white--text">≫ 話題の新製品バックナンバー</spnn></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ニコン NIKKOR Z 50mm f/1.2 S・Z 14-24mm f/2.8 S 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="80%"
              :href="`https://www.nikon-image.com/products/nikkor/zmount/nikkor_z_50mm_f12_s/`"
              >NIKKOR Z 50mm f/1.2 S<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>
        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="80%"
              :href="`https://www.nikon-image.com/products/nikkor/zmount/nikkor_z_14-24mm_f28_s/`"
              >NIKKOR Z 14-24mm f/2.8 S<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>
        <!-- ↓ 48回まで分割 -->
        <div id="price">
          <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[0]"
            :numberOfTimes="'48'"
            :amount="'5,219'"
            :targetDate="'2020年9月18日'"
          />

          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[1]"
            :numberOfTimes="'48'"
            :amount="'5,940'"
            :targetDate="'2020年9月18日'"
            :isText="false"
          />
        </div>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン NIKKOR Z 14-24mm f/2.8 S レビュー｜待ち焦がれた超広角ズームはモンスターレンズだった！'" />
        <shasha
          :txt="'「NIKKOR Z 14-24mm f/2.8 S」を手にするとそのサイズに驚かされる。「AF-S NIKKOR 14-24mm f/2.8G ED 」は約970gだったのが、同じ明るさと焦点距離で約650gと大幅な軽量化を果たしているのである。もちろんサイズ感も一回り、いや二回り程度小さくなっている。これはスゴい。大口径、ショートフランジバックのミラーレス一眼カメラ専用設計になったことによりこのようなサイズダウンに成功しているのだ。それでいて画質に妥協がない...'"
          :href="'https://shasha.kitamura.jp/article/478683172.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z50mmz14mm/shashabnr.jpg'"
        />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'NIKKOR Z 50mm f/1.2 S・NIKKOR Z 14-24mm f/2.8 S 作例画像 作例'" />
          <exampleImages :path="'/ec/images2/special/camera/feature/nikon/z50mmz14mm/'" :count="8" />
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
import ShaSha from '@/components/common/special/shasha.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
export default Vue.extend({
  name: 'z50mmz14mm',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    splitContent: SplitContent,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase
  },
  setup: (props, context) => {
    document.title = 'ニコン NIKKOR Z50mm /NIKKOR Z14-24mm | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'NIKKOR Z 50mm f/1.2 S・NIKKOR Z 14-24mm f/2.8 S 好評発売中！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！'
      );
    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' }
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
          path: 'NIKKOR Z 50mm f/1.2 S・Z 14-24mm f/2.8 S',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759903495', '4960759903570'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759903495'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759905697'],
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
