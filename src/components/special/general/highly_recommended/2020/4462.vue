<template>
  <v-app>
    <div class="highly_recommended-4462">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="text-h6 font-weight-bold">おすすめ交換レンズ！超広角レンズ</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4462/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4462/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <h2 class="text-body-2">SAMYANG AF14mm F2.8 明るい低価格レンズでコスパ最強</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'SAMYANG AF14mm F2.8'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'ミラーレスカメラの特性を活かした専用設計の超広角AFレンズ'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          大人気のSAMYANG14mmシリーズにAFを搭載したモデルです。<br />フルサイズ対応の14mmに加えて開放F値2.8と明るいため、風景や星景をよく撮影される方におすすめの交換レンズです。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          35mmフルサイズ対応の14mmと広いので、目の前に広がる景色もワイドに切り取った撮影ができます！AFが使えるので、楽にピントを合わせることが可能です。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          開放F値が2.8と明るいため、星景や暗所などの暗いシーンでもより低い感度で撮影が可能です！14mmのレンズとしては比較的コンパクトなので、長時間露光中でもより安心して撮影に臨めます
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'SAMYANG AF14mm F2.8 とおすすめ交換レンズを比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">
                    <router-link :to="`/ec/pd/${product.janCode}`">{{ product.itemName }}</router-link>
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      <v-img :src="product.images[0].imagePath.replace(/TN/g, 'M')" max-width="220" height="auto" class="hover"></v-img>
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>14mm</td>
                  <td>14mm</td>
                  <td>15mm</td>
                </tr>
                <tr>
                  <th>レンズF値</th>
                  <td>F2.8</td>
                  <td>F2.4</td>
                  <td>F2</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>20cm</td>
                  <td>28cm</td>
                  <td>15cm</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む）</th>
                  <td class="bg-kiri">474g</td>
                  <td>791g</td>
                  <td>500g</td>
                </tr>
                <tr v-if="comparisonDetailList.length === 3">
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 中心から周辺まで優れた光学性能を維持しながらも474gと軽量...<router-link :to="comparisonDetailList[0].janCode"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 5000万画素、8K動画にマッチした最新のハイクオリティーレンズ..<router-link :to="comparisonDetailList[1].janCode"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 優れた仕様にもかかわらず、質量は約500g、全長は約8cmとコンパクト化に成功...<router-link :to="comparisonDetailList[2].janCode"
                      >続きを読む</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：実際に使ってみました！SAMYANG AF14mm F2.8'" id="r03" />
        <shasha
          :txt="'カメラやレンズをみると解像力や高ISO感度特性、ダイナミックレンジ、ぼけディスク、周辺光量落ち、最短撮影距離などの実写チャートを撮影したくなるというマニアックな気質を持つ齋藤千歳です。 今回はSAMYANG AF14mm F2.8について、電子書籍『SAMYANG AF14mm F2.8 EF 機種別レンズラボ』に掲載した解像力やぼけディスク、最短撮影距離、周辺光量落ちの実写チャートのデータを元に、実写の撮影写真をメインに解説していきます・・・・'"
          :href="'https://shasha.kitamura.jp/article/468984735.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298885618'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4462/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'SAMYANG AF14mm F2.8 おすすめアクセサリー関連商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ SNS -->
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
export default Vue.extend({
  name: 'highly_recommended-4722',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    tableOfContentsNavi: TableOfContentsNavi,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！SAMYANG AF14mm F2.8 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！おすすめ広角レンズ、SAMYANG AF14mm F2.8')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'SAMYANG AF14mm F2.8 と他おすすめレンズ比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：実際に使ってみました！SAMYANG AF14mm F2.8 作例 ', href: '#r03' },
        { naviItem: '関連商品一覧', href: '#r04' }
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
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフのイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'スタッフイチオシ！SAMYANG AF14mm F2.8',
          disabled: true
        }
      ],
      mainProductJanCode: ['8809298880316'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['8809298880316', '8809298880743', '4541607612600'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '8809298886158',
        '8809298885618',
        '8809298880316',
        '8809298884994'
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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