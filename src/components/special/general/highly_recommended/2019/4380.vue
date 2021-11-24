<template>
  <v-app>
    <div class="highly_recommended-2019-4380">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">おすすめ交換レンズ！開放F値2.8、軽量・コンパクト、そして寄れる交換レンズ</h1>
        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2019/4380/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2019/4380/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>
        <h2 class="text-body-2">軽量・コンパクトでソニーα7シリーズとの相性もバッチリ。ローコストを実現したF2.8大口径標準ズームレンズです</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'シグマ 45mm F2.8 DG DN'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'ソニーα7シリーズユーザー全般、常用レンズを小型化したい方におすすめ'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          軽量・コンパクトでソニーα7シリーズとの相性もバッチリ。ローコストを実現したF2.8大口径標準ズームレンズです。<br />
          ソニーα7シリーズユーザー全般、常用レンズを小型化したい方におすすめ交換レンズです
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          軽量・コンパクトなのでボディに装着した際のバランスもバッチリ！タムロンならではのコストパフォーマンスで常用レンズとして多くのユーザーに選ばれている人気大口径標準ズームレンズです
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">広角側での最短撮影距離は驚きの0.19mを実現。望遠側も0.39mまで寄れますのでマクロレンズのような使い方も可能です。</p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'シグマ 45mm F2.8 DG DN と他レンズと比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">
                    {{ product.itemName }}
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <v-img
                      :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                      :max-width="$vuetify.breakpoint.mdAndUp ? '220' : '83'"
                      height="auto"
                      class="mx-auto"
                    ></v-img>
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
                  <td>67mm</td>
                  <td class="">82mm</td>
                  <td>82mm</td>
                  <td>55mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td class="">約550g</td>
                  <td>約835g</td>
                  <td>約886g</td>
                  <td>約295g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td class="">約117.8mm</td>
                  <td>約122.9mm</td>
                  <td>約136mm</td>
                  <td>約83mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td class="">12群15枚</td>
                  <td>15群19枚</td>
                  <td>13群18枚</td>
                  <td>8群9枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 美しいボケ味と高画質を両立するため、12群15枚のレンズ構成の中に、特殊硝材XLDレンズ、LDレンズを.....<router-link
                      to="/ec/pd/4960371006543"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 ミラーレス専用による光学設計の優位性を活かしつつ、硝材にはFLD ガラスを6枚、SLD ガラスを2枚と特..<router-link
                      to="/ec/pd/0085126578657"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 新開発の超高度非球面XA（extreme aspherical）レンズ1枚を含む計3枚の非球面レンズを採用。絞り開放...<router-link
                      to="/ec/pd/4548736019515"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 35mmフルサイズ対応のコストパフォーマンスの高い小型軽量標準ズームレンズ...<router-link to="/ec/pd/4548736019515"
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
        <subText :textItem="'ShaSha：実際に使ってみました！タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用'" id="r03" />
        <shasha
          :txt="'今回はその大人気の「TAMRON 28-75mm F/2.8 Di III RXD」が、ソニーフルサイズEマウントカメラの1本目にオススメな理由を考えてみたのでぜひご覧ください・・・・'"
          :href="'https://shasha.kitamura.jp/article/469020016.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298883683'"
          :src="'https://shop.kitamura.jp/ts_rsc/1279/images/shashabnr.jpg'"
        />
        <a href="https://shasha.kitamura.jp/article/469020016.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298883683" target="_blank">
          <v-img src="https://shop.kitamura.jp/ts_rsc/1279/images/photo_1.jpg" max-width="888" height="auto" class="mx-auto hover"></v-img>
        </a>

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用 関連商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="mainProductList" />

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
  name: 'highly_recommended-2020-4666',
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
    document.title = 'スタッフイチオシ！おすすめ交換レンズ！タムロン 28-75mm | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'おすすめ交換レンズ！開放F値2.8、軽量・コンパクト、そして寄れる交換レンズ。ソニーα7シリーズと相性バッチリです！タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その２', href: '#r01' },
        { naviItem: 'タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用 と他レンズ比較', href: '#r02' },
        { naviItem: 'ShaSha：実際に使ってみました！タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用 作例', href: '#r03' },
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
          path: 'タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960371006543'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['4960371006543', '0085126578657', '4548736019515', '4905524956931'],
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4960371006543',
        '0085126360696  '
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
        // 商品一覧
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
        // 商品一覧
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