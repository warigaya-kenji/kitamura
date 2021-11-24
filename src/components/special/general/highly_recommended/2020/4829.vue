<template>
  <v-app>
    <div class="highly_recommended-2020-4829">
      <div class="main-contents-wrap">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">明るく寄れて、小さく軽い！LAOWA 15mm F2 Zero-D</h1>
        <titleImage></titleImage>
        <h2 class="text-body-2">明るさF2.0を実現し、フィルターも装着可能！</h2>

        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'LAOWA 15mm F2 Zero-D'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'小さくて軽い大口径超広角レンズ LAOWA 15mm F2 Zero-Dは、風景・星景写真を撮影される方、フルサイズ用大口径広角レンズをお探しの方におすすめです！'"
        />

        <!-- ↓ トピック＆まとめ -->
        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          大口径超広角レンズとは思えない小型・軽量を実現したレンズですので、屋外撮影での持ち運びも苦になりません。<br />
          「フルマニュアルレンズ」ながらも他の超広角レンズでは珍しく72mmの丸型フィルターが装着でき、さらに最短撮影距離が15cmとなっていますので、様々な表現が楽しめるレンズです。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">大口径広角レンズながらも小型軽量を実現したレンズですので、持ち運びの不安を感じることもなく屋外撮影に集中することができます。</p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">超広角レンズとしては珍しい72mmサイズの丸型フィルターが装着可能ですので、フィルターワークに制限を受けず、様々な表現が可能です。</p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'LAOWA 15mm F2 Zero-D と他レンズと比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      <v-img
                        :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '220' : '77'"
                        height="auto"
                        class="hover mx-auto"
                      ></v-img>
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
                  <th>フィルターサイズ</th>
                  <td>72mm</td>
                  <td>67mm</td>
                  <td>―</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約500g</td>
                  <td>373g</td>
                  <td>約1230g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約82mm</td>
                  <td>約84.7mm</td>
                  <td>約152mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>9群12枚</td>
                  <td>12群14枚</td>
                  <td>11群16枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】優れた仕様にもかかわらず、質量は約500g、全長は約8cmとコンパクト化に成功。特許取得済の光学設計により、ディストーションと色収差を最小限に抑え、なおかつ画面の周辺に至るまで優れた光学性能を実現...<router-link
                      to="/ec/pd/4541607612600"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】開放絞りF1.8から画面全域で高い解像力を発揮。レンズのフォーカス駆動部には、ソニー独自の高推力なXD（eXtreme
                    Dynamic）リニアモーターを2基搭載し、高速・高精度・高追従かつ静粛な高性能AFを実現...<router-link to="/ec/pd/4548736099852"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】レンズごとにチューニングしたAF駆動制御プログラムと高速通信により、ミラーレスカメラ専用レンズと同等のAF性能を実現。コントラストAFのみ搭載のボディにおいても、精度の高いAFでの撮影が可能...<router-link
                      to="/ec/pd/0085126450656"
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
        <subText :textItem="'ShaSha：明るく寄れて、小さく軽い！万能超広角レンズ「LAOWA 15mm F2 FE ZERO-D」レビュー'" id="r03" />
        <shasha
          :txt="'本レンズは、カメラ本体と情報のやりとりをする電子接点などをもたない「フルマニュアルレンズ」で、焦点距離15mmという超広角でありながら、絞り開放F2.0という明るさを実現しています。しかも・・・・'"
          :href="'https://shasha.kitamura.jp/article/470059004.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4541607612600'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4829/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r04" />
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
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';
export default Vue.extend({
  name: 'highly_recommended-4829',
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
    titleImage: TitleImage,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！LAOWA 15mm F2 Zero-D | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '明るい、寄れる、小さく軽い！フィルターも装着できるLAOWA 15mm F2 Zero-Dは、風景・星景写真の撮影におすすめです')
    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'LAOWA 15mm F2 Zero-D と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：明るく寄れて、小さく軽い！万能超広角レンズ「LAOWA 15mm F2 FE ZERO-D」レビュー', href: '#r03' },
        { naviItem: '商品一覧', href: '#r04' }
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
          href: '/ec/special/camera/polarie',
          img: 'https://shop.kitamura.jp/images/banner/1488.gif',
          alt: '星空を撮影しよう！ 星空撮影入門特集'
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
          path: 'スタッフイチオシ！LAOWA 15mm F2 Zero-D',
          disabled: true
        }
      ],
      mainProductJanCode: ['4541607612600'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['4541607612600', '4548736099852', '0085126450656'],
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4541607612600',
        '4541607613331',
        '4541607613324'
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