<template>
  <v-app>
    <div class="highly_recommended-4909">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <h1 class="text-h6 font-weight-bold">高画質・高機能を小型・軽量ボディに凝縮した動画に強いフルサイズミラーレス</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4909/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4909/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↑top image -->
        <h2 class="text-body-2">S1から継承するセンサー・エンジン、進化したAF性能</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'パナソニック LUMIX DC-S5-K ボディ ブラック'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'パナソニック LUMIX DC-S5は、フルサイズミラーレスで動画も静止画もきれいに撮影したい方におすすめです！'"
          :btntxt="'商品一覧を見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          機動性に優れた小型・軽量のコンパクトボディ、高精細OLEDファインダー＆フリーアングルモニター搭載でフルサイズ一眼を手軽に楽しめます。<br />
          高感度でも美しい描写を実現する静止画画質なので、撮影シーンを選びません。<br />
          多彩な動画記録モード搭載で、フルサイズ一眼動画をこれから始める方にも、ステップアップを考えている方にも満足いただけるカメラです。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          小型・軽量のコンパクトボディに加え、高精細な約236万ドットのファインダーと大型3.0型
          高精細約184万ドットのフリーアングルモニター採用で、静止画も動画も、長時間撮影を強力にサポートしてくれます。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          ハイエンド機“LUMIX S1H”の動画性能を可能な限り凝縮。<br />
          ダイナミックレンジ、高感度画質、編集耐性などの“優れた基本性能”が魅力です。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'パナソニック LUMIX DC-S5 と他のカメラを比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/f10/917/6d9/833/f5f/dac/d06/945/009/812/68h/ku6/eu7/f/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/5af/29a/6fd/4f3/c30/72b/4d3/f99/2e0/e03/12e/3to/gqq/n/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/355/0bc/0cb/b76/049/93a/d91/3ba/511/b87/6dv/qoq/187/p/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/1f9/116/2a3/e8a/686/ce2/3db/b0f/bef/ef8/ef6/80q/new/u/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
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
                  <th>本体質量</th>
                  <td>約714g(バッテリー、SDメモリーカード1枚含む)</td>
                  <td>約725g（バッテリー、メモリー含む）</td>
                  <td>約345g(バッテリー、メモリー含む)</td>
                  <td>約294g（電池及びメモリーカード含む）</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.0型 約184万ドット(可動 タッチパネル対応)</td>
                  <td>3.2型 約166万ドット(可動 タッチパネル対応)</td>
                  <td>3.0型 約184万ドット</td>
                  <td>3.0型 約92.16万ドット(可動、タッチパネル対応)</td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2420万画素</td>
                  <td>約2033万画素</td>
                  <td>約2030万画素</td>
                  <td>約2010万画素</td>
                </tr>
                <tr>
                  <th>撮影可能枚数目安</th>
                  <td>ファインダー使用時 約470枚、液晶モニター使用時 約440枚</td>
                  <td>約410枚(モニター時）</td>
                  <td>約270枚（モニター時）、約250枚（LVF時）</td>
                  <td>液晶モニタ使用時 約260枚、モニター自動オフ 2秒設定時 約410枚</td>
                </tr>
                <tr>
                  <th>スマホ接続</th>
                  <td>Wi-Fi、Bluetooth</td>
                  <td>Wi-Fi</td>
                  <td>Wi-Fi、Bluetooth</td>
                  <td>Wi-Fi、Bluetooth</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100～51200</td>
                  <td>ISO200～25600(拡張時ISO100)</td>
                  <td>ISO100～25600（1/3,1EVステップ）</td>
                  <td>ISO125-12800</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】デュアルネイティブISOテクノロジーで、美しい高感度画質を実現。24.2MフルサイズCMOSセンサー＆ヴィーナスエンジン搭載。機動性に優れた小型・軽量のコンパクトボディ、高精細...<a
                      href="/ec/pd/4549980624180/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】有効画素数約2033万画素の新開発Live
                    MOSセンサーを搭載。4K60pの動画記録に対応した高速読み出し（従来機GH4比で約1.66倍）によるローリングシャッター歪み現象の...<a
                      href="/ec/pd/4549077845511/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】Vlog撮影の表現の幅を広げる充実の動画性能。高音質・臨場感あふれる音声記録が可能なマイク「OZO Audio by
                    NOKIA」採用。業界初。顔・瞳認識AFに連動し、自動で収音範囲を...<router-link to="/ec/pd/4549980632253/">続きを読む</router-link>
                  </td>
                  <td>
                    【製品特徴】ボタン一つで自撮り時の背景を「ぼけ」または「くっきり」に切り替えられる背景ボケ切り換え機能を搭載。ボタン一つでオンにすることができる商品レビュー用設定は、顔と...<a
                      href="/ec/pd/4546821920890/"
                      >続きを読む</a
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
        <subText :textItem="'ShaSha：驚く程小さくなったSシリーズ！パナソニック LUMIX DC-S5 レビュー'" id="r03" />
        <shasha
          :txt="'今回新たに発表された同シリーズのS5はアマチュアからプロの方々まで幅広いクリエイターの方に向けてつくられたカメラとなり、Sシリーズの高性能はそのままに、とても小型化され・・・・'"
          :href="'https://shasha.kitamura.jp/article/477194138.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549980624180'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4909/shashabnr.png'"
        />

        <subText :textItem="'ShaSha：パナソニック LUMIX S5を動画と静止画でレビュー'" id="r04" />
        <shasha
          :txt="'今回は、テスト機をパナソニックさんからお借りしましたので、人物撮影をメインに、動画と静止画の両方で本機のレビューを・・・・'"
          :href="'https://shasha.kitamura.jp/article/477649197.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549980624180'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4909/shashabnr2.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r05" />
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
  name: 'highly_recommended-4909',
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
  setup: (props, context) => {
    document.title = 'スタッフイチオシ！パナソニック LUMIX DC-S5 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'アマチュアからプロの方々まで幅広いクリエイターの方に向けてつくられたカメラ、パナソニック LUMIX DC-S5のご紹介')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'パナソニック LUMIX DC-S5と他のカメラを比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：驚く程小さくなったSシリーズ！パナソニック LUMIX DC-S5', href: '#r03' },
        { naviItem: 'ShaSha：パナソニック LUMIX S5を 動画と静止画でレビュー！', href: '#r04' },
        { naviItem: '商品一覧', href: '#r05' }
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
          path: 'スタッフイチオシ！パナソニック LUMIX DC-S5',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980624180'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549980624180', '4549077845511', '4549980632253', '4546821920890'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549980624180',
        '4549980624197'
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