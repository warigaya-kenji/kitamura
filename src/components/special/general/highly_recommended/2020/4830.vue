<template>
  <v-app>
    <div class="highly_recommended-2020-4830">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">シグマ初の開放F1.2単焦点レンズ | シグマ 35mm F1.2 DG DN Art</h1>
        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4830/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4830/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>
        <h2 class="text-body-2">ポートレートや風景撮影など様々なジャンルで活躍するレンズ</h2>
        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'シグマ 35mm F1.2 DG DN Art'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'使い勝手の良い単焦点レンズをお探しの方、背景ボケを活かした写真を撮影したい方に、シグマ 35mm F1.2 DG DN Artがおすすめ。'"
        />
        <!-- ↓ トピック＆まとめ -->
        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          ピント面のシャープさは解像性能の高いシグマレンズならでは。<br />
          ピント合わせのシビアな開放F値1.2でも、高性能AFで安心して撮影することができます。<br />
          なにより使い勝手の良い焦点距離ですので、ポートレートや風景撮影など様々なジャンルで活躍するレンズです。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">使い勝手の良い焦点距離と開放F値1.2の組み合わせで、美しいボケ味を利用した立体感のある写真が撮影できます。</p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">被写界深度の浅いF1.2でも高性能AFでテンポよく、安心して撮影することができます。</p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'シグマ 35mm F1.2 DG DN Art と他レンズと比較してみました'" />
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
                  <td>82mm</td>
                  <td>67mm</td>
                  <td>72mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>1090g</td>
                  <td>約755g</td>
                  <td>約630g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>138.2mm</td>
                  <td>約120mm</td>
                  <td>約112mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>12群17枚</td>
                  <td>11群13枚</td>
                  <td>8群12枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】焦点距離35mmの大口径レンズとして最高性能を追求し、さらに開放値F1.2
                    を実現。5000万画素オーバーに耐えうる解像感を実現しつつ...<router-link to="/ec/pd/0085126341657">続きを読む</router-link>
                  </td>
                  <td>
                    【製品特徴】レンズごとにチューニングしたAF駆動制御プログラムと高速通信により、ミラーレスカメラ専用レンズと同等のAF性能を実現。コントラストAFのみ搭載の..<router-link
                      to="/ec/pd/0085126340650"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】カールツァイスレンズとして高コントラスト・解像度重視の設計を実施。F1.4大口径レンズ。画面全体で高解像度と高コントラストを実現...<router-link
                      to="/ec/pd/4548736001954"
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
        <subText :textItem="'ShaSha：シグマ初の開放F1.2単焦点レンズ！「シグマ 35mm F1.2 DG DN Art」レビュー'" id="r03" />
        <shasha
          :txt="'SIGMAのArtラインに属しているレンズで、SIGMAでは初となる開放F1.2の単焦点レンズです。今回は本レンズが、他の35mmレンズとどう違うのか？という点や、F1.2という開放F値がどのような描写なのかを・・・・'"
          :href="'https://shasha.kitamura.jp/article/470580182.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=0085126341657'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4830/shashabnr.png'"
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
export default Vue.extend({
  name: 'highly_recommended-4830',
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
    document.title = 'スタッフイチオシ！シグマ 35mm F1.2 DG DN Art | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '背景ボケを活かした写真を撮影したい方、ポートレートや風景を撮影したい方は、シグマ 35mm F1.2 DG DN Artがおすすめです')
    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'シグマ 35mm F1.2 DG DN Art と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：シグマ初の開放F1.2単焦点レンズ！「シグマ 35mm F1.2 DG DN Art」レビュー', href: '#r03' },
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
          path: 'スタッフイチオシ！シグマ 35mm F1.2 DG DN Art',
          disabled: true
        }
      ],
      mainProductJanCode: ['0085126341657'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['0085126341657', '0085126340650', '4548736001954'],
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '0085126341657',
        '0085126341695'
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