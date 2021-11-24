<template>
  <v-app>
    <div class="highly_recommended-2020-4666">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">シグマのこだわりが詰まった単焦点レンズ シグマ 45mm F2.8 DG DN</h1>
        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4666/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4666/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>
        <h2 class="text-body-2">高い光学性能とコンパクトネスの両立で、幅広い撮影シーンに対応するハイパフォーマンスレンズ</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'シグマ 45mm F2.8 DG DN'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'高い光学性能とコンパクトネスの両立で、幅広い撮影シーンに対応するハイパフォーマンスレンズ。\nソニーフルサイズEマウントで、近接撮影や絞りリングの操作感を楽しみたい方におすすめ'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          高い光学性能とコンパクトネスの両立で、幅広い撮影シーンに対応するハイパフォーマンスレンズ。<br />
          ソニーフルサイズEマウントで、近接撮影や絞りリングの操作感を楽しみたい方におすすめ
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">開放F値が2.8ながらも、最短撮影距離が驚きの24cmと寄った撮影が得意です。</p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          レンズボディだけでなくレンズフードまで、メイン素材にアルミニウムを使用した上品なレンズです。<br />
          重量も約215gと軽量なので、スナップの撮影にもピッタリです。
        </p>

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
                  <td>55mm</td>
                  <td>49mm</td>
                  <td>49mm</td>
                  <td>55mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約215g</td>
                  <td>約162g</td>
                  <td>約186g</td>
                  <td>約236g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約46.2mm</td>
                  <td>約56.1mm</td>
                  <td>約59.5mm</td>
                  <td>約71mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>7群8枚</td>
                  <td>6群7枚</td>
                  <td>5群6枚</td>
                  <td>7群8枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】あらゆるシーンで楽しめる美しいボケと描写。開放時にはクラシカルともいえる柔らかなボケ味を楽しめる一方...<router-link
                      to="/ec/pd/0085126360658"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】35mmレンズより周辺部の歪みが少なく、50mmレンズより広い画角で撮影でき、多様なテーマの写真に...<router-link
                      to="/ec/pd/8809298885922/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】コンパクトなα7シリーズにマッチする、携帯性に優れた小型軽量デザイン。非球面レンズを使用した新規光学...<router-link
                      to="/ec/pd/4548736033078"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】等倍撮影が可能なフルサイズ対応標準マクロレンズ。コンパクトで気軽に持ち運び可能...<router-link to="/ec/pd/4548736043930"
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
        <subText :textItem="'ShaSha：シグマのこだわりが詰まった単焦点レンズ！「SIGMA 45mm F2.8 DG DN」'" id="r03" />
        <shasha
          :txt="'高性能で、スペックデータでは伝わりにくい上品さと使い勝手の良さを持つレンズです。\n今回はレンズ設計者が“絞りリングのクリック感までこだわった”というレンズをレビューしましたので、ぜひご覧ください・・・・'"
          :href="'https://shasha.kitamura.jp/article/470303991.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=0085126360658'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4666/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM おすすめアクセサリー関連商品一覧'" id="r04" />
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
    document.title = 'スタッフイチオシ！シグマ 45mm F2.8 DG DN | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '旅行、スナップショット、ファミリーフォト。いろんなシーンを撮影するなら、軽くて、小さくて、高性能な 単焦点レンズ、 SIGMA 45mm F2.8 DG DN がおすすめ。')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その２', href: '#r01' },
        { naviItem: 'シグマ 45mm F2.8 DG DN と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：シグマのこだわりが詰まった単焦点レンズ！「SIGMA 45mm F2.8 DG DN」', href: '#r03' },
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
          path: 'スタッフイチオシ！シグマ 45mm F2.8 DG DN',
          disabled: true
        }
      ],
      mainProductJanCode: ['0085126360658'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['0085126360658', '8809298885922', '4548736033078', '4548736043930'],
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '0085126360658',
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