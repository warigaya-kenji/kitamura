<template>
  <v-app>
    <div class="g100">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓ サンプル：画像の読み込み -->
        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/panasonic/g100/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/panasonic/g100/sp_img_top.jpg'"
          :topTitle="'パナソニック LUMIX G100'"
          :topTitleText="'顔・瞳AFに連動した音声記録が可能\nVlog撮影を快適に楽しめる小型・軽量のミラーレス一眼'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>パナソニック LUMIX DC-G100</span>
        </div>

        <div class="text-right mb-2">
          <v-btn href="/ec/special/camera/feature/backnumber" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'自分撮りもシネマティックな映像表現もVlog動画撮影を快適に楽しめる 小型・軽量のミラーレス一眼「G100」'" />

        <!--====== 価格・ご購入 ======-->
        <div id="price">
          <subText :textItem="'パナソニック LUMIX DC-G100 価格・ご購入'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>
        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://panasonic.jp/dc/products/g_series/g100.html'"
          :height="'70px'"
        />
        <!--特徴-->
        <div id="spec">
          <subText :textItem="'パナソニック LUMIX DC-G100 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'パナソニック LUMIX DC-G100K-K / LUMIX DC-G100V-K 同梱物の違い'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">パナソニック LUMIX DC-G100K-K / LUMIX DC-G100V-K 同梱物の違い</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>LUMIX DC-G100K-K 同梱物</th>
                  <th>LUMIX DC-G100V-K 同梱物</th>
                </tr>
                <tr>
                  <td>バッテリーパック(DMW-BLG10)</td>
                  <td>バッテリーパック(DMW-BLG10)</td>
                </tr>
                <tr>
                  <td>ACアダプター</td>
                  <td>ACアダプター</td>
                </tr>
                <tr>
                  <td>USB接続ケーブル</td>
                  <td>USB接続ケーブル</td>
                </tr>
                <tr>
                  <td>ショルダーストラップ</td>
                  <td>ショルダーストラップ</td>
                </tr>
                <tr>
                  <td>ホットシューカバー</td>
                  <td>ホットシューカバー</td>
                </tr>
                <tr>
                  <td>ー</td>
                  <td>トライポッドグリップ(DMW-SHGR1)</td>
                </tr>
                <tr>
                  <td>ー</td>
                  <td>ハンドストラップ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->
        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'パナソニック LUMIX DC-G100 価格/人気アクセサリー'" />
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="4816" />

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
import SubText from '@/components/common/special/subtext.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: 'g100',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    characteristic: Characteristic,
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    urlcopy: Urlcopy,
    'product-list-by-special-id': ProductListBySpecialId,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'パナソニック LUMIX DC-G100 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'パナソニック LUMIX DC-G100 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
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
          path: 'パナソニック LUMIX DC-G100',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980632239', '4549980632253'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549980632239'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----

      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: 'お得情報', href: '#price2' },
        { naviItem: '特徴', href: '#spec' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'Vlog撮影の表現の幅を広げる充実の動画性能',
          contents: ['高音質・臨場感あふれる音声記録が可能なマイク「OZO Audio by NOKIA」採用',
            '業界初「顔・瞳認識AF」に連動し、自動で収音範囲を調整する内蔵マイクモード搭載',
            '歩き撮りなどでおこる大きなブレの補正力を強化した、新たな5軸ハイブリッド手ブレ補正',
            '自分撮り時のピントや露出を自動調整する動画自撮りモード搭載']
        },
        {
          subtitle: '自分撮りなど日常の持ち歩きに便利な小型・軽量ボディ',
          contents: [
            '旅先でも軽快に持ち歩ける約412gの小型・軽量ボディ',
            '自分撮り時に便利に操作できるトライポッドグリップ付きセットも設定'
          ]
        },
        {
          subtitle: '一眼ならではの高画質撮影が可能な静止画性能',
          contents: [
            'ローパスフィルターレス2030万画素LiveMOSセンサー、ヴィーナスエンジン搭載',
            'Vlogカメラとしてだけでなく、ミラーレス一眼としても撮影を楽しめます',
            '多くの交換レンズが用意されており、撮影シーンによって最適なレンズを選択可能'
          ]
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'http://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラ・レンズ メンテナンスサービス'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/special/camera/lens',
          img: 'http://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
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
      ]
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
