<template>
  <v-app>
    <div class="d500">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/D500/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/D500/sp_img_top.jpg'"
          :topTitle="'ニコン D500'"
          :topTitleText="'自由な映像表現の前に立ちはだかる数々の制約を打ち破るル\nD5 同等の最高性能と進化した機動力を融合したDX 最強モデル'"
          :padding="'50px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン D500</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ニコン D500 ボディ ブラック [ILCE-d500 B] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[0]" :btntxt="'商品詳細を見る'" :type="2" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ニコン D500 の特徴'" />
          <characteristic :characteristics="characteristicList" />
          <subText :textItem="'ニコン D500 スペック'" />
          <characteristic :characteristics="SpeccharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'「Nikon D500」と「Nikon D300S」「キヤノン EOS 7D MarkII」を比較しました'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">「Nikon D500」と「Nikon D300S」「キヤノン EOS 7D MarkII」を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2016年4月28日発売</td>
                  <td>2009年08月28日（金）</td>
                  <td>2014年10月30日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2088万画素</td>
                  <td>約1230万画素</td>
                  <td>約2020万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>CMOS</td>
                  <td>CMOS</td>
                  <td>CMOS</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                </tr>
                <tr>
                  <th>ローパスフィルターレス</th>
                  <td>○</td>
                  <td>‐</td>
                  <td>‐</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>ニコン Fマウント</td>
                  <td>ニコン Fマウント</td>
                  <td>キヤノン EFマウント</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒</td>
                  <td>30-1/8000</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約10コマ/秒</td>
                  <td>約7コマ/秒</td>
                  <td>約10コマ/秒</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>視野率約100%</td>
                  <td>視野率約100%</td>
                  <td>視野率約100%、倍率約1.00倍</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>3.2型</td>
                  <td>3型</td>
                  <td>ワイド3.0型</td>
                </tr>
                <tr>
                  <th>液晶可動/固定</th>
                  <td>可動</td>
                  <td>固定</td>
                  <td>固定</td>
                </tr>
                <tr>
                  <th>ライブビュー機能</th>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th>Wi-Fi/NFC</th>
                  <td>搭載</td>
                  <td>非搭載</td>
                  <td>非搭載</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む）</th>
                  <td>860g</td>
                  <td>840g</td>
                  <td>910g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン D500 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ニコン D500  外観画像'" />
          <p class="text-subtitle-1">ニコン D500の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/D500'" :count="3" />
        </div>

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
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'd500',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    kitamuraService: KitamuraService,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'ニコン D500 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン D500 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '新世代の153点AFシステム',
          contents: [
            'あらゆる状況で高い被写体捕捉力を発揮',

          ]
        },
        {
          subtitle: '約10コマ/秒、最大200コマまで',
          contents: [
            '約10コマ/秒で、200コマ（14ビット記録のロスレス圧縮RAW）まで撮影可能な高速連続撮影',
          ]
        },
        {
          subtitle: 'EXPEED 5が実現したISO 51200',
          contents: [
            '常用感度 ISO 51200を実現し、ISO 1640000相当(Hi 5)までの増感も可能にした新画像処理エンジン「EXPEED 5」',
          ]
        }
      ],
      SpeccharacteristicList: [
        {
          subtitle: '新世代のAFシステムと高速連続撮影であらゆる状況で高い被写体捕捉力を発揮する DXフォーマットフラッグシップモデル',
          contents: [
            'あらゆる状況で高い被写体捕捉力を発揮する、新世代の153点AFシステム',
            '約10コマ/秒で、200コマ（14ビット記録のロスレス圧縮RAW）まで撮影可能な高速連続撮影',
            '素材には炭素繊維複合素材とマグネシウム合金を採用し、構造はモノコック構造とすることで、耐久性を維持しながらも薄型ボディーを実現',
            'プロフェッショナルのニーズにも応える4K UHD（3840×2160）動画',
            '常用感度 ISO 51200を実現し、ISO 1640000相当(Hi 5)までの増感も可能にした新画像処理エンジン「EXPEED 5」採用',
            'より快適な撮影を実現する、タッチ操作･チルト可動の高精細3.2型画像モニター',
            'カメラとスマートデバイスをシームレスにつなぐアプリ「SnapBridge」に対応',
          ]
        },

      ],
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ニコン D500',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759146441', '4960759146458',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759146441', '4960759127105', '4549292001617',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759146441',
        '4960759146458',
        '4960759146496',
        '4975981734595',
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