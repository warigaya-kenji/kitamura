<template>
  <v-app>
    <div class="d750">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/D750/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/D750/sp_img_top.jpg'"
          :topTitle="'ニコン D750'"
          :topTitleText="'FXフォーマット機ならではの高画質\n一眼レフカメラ'"
          :padding="'185px 0px 15px 40px'"
          :textPadding="'15px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">ニコン Nikon D750 </span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">ニコン Nikon D750</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><spnn class="white--text">≫ 話題の新製品バックナンバー</spnn></v-btn
          >
        </div>

        <subText :textItem="'FXフォーマット機ならではの高画質 一眼レフカメラ'" />

        <!--====== 価格・ご購入 ======-->

        <subText :textItem="'ニコン Nikon D750 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン D750 D810 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン D750 D810を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>2,432万画素</td>
                  <td>3,635万画素</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>FXフォーマット</td>
                  <td>FXフォーマット</td>
                </tr>
                <tr>
                  <th>映像エンジン</th>
                  <td>EXPEED4</td>
                  <td>EXPEED4</td>
                </tr>
                <tr>
                  <th>ローパスフィルター</th>
                  <td>有</td>
                  <td>無</td>
                </tr>
                <tr>
                  <th>液晶性能</th>
                  <td>3.2型122.9万ドットチルト式液晶</td>
                  <td>3.2型122.9万ドット固定式液晶</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>750g</td>
                  <td>980g</td>
                </tr>
                <tr>
                  <th>Wi-Fi</th>
                  <td>有</td>
                  <td>無</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約6.5コマ/秒</td>
                  <td>約5コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100－12800</td>
                  <td>64－12800</td>
                </tr>
                <tr>
                  <th>防塵・防滴</th>
                  <td>有</td>
                  <td>有</td>
                </tr>
                <tr>
                  <th>低輝度対応</th>
                  <td>‐3EV</td>
                  <td>‐2EV</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100%</td>
                  <td>約100%</td>
                </tr>
                <tr>
                  <th>対応メディア</th>
                  <td>SD</td>
                  <td>SD/CF</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>

        <!--比較-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="50%"
              :href="`https://www.nikon-image.com/products/slr/lineup/d750/`"
              >ニコン Nikon D750<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>

        <!--特徴-->
        <subText :textItem="'ニコン Nikon D750 の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->
        <!--スペック-->
        <subText :textItem="'ニコン Nikon D750 のスペック'" id="spec" />
        <characteristic :characteristics="characteristicList2" />
        <!--スペック-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'ニコン Nikon D750 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'ニコン Nikon D750  外観画像'" />
          <p class="text-subtitle-1">ニコン Nikon D750 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/D750'" />
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';


export default Vue.extend({
  name: 'd750',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,

  },
  setup: (props, context) => {
    document.title = 'ニコン Nikon D750 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Nikon D750！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: '特徴', href: '#point' },
        { naviItem: 'スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' }
      ],


      characteristicList: [
        {
          subtitle: 'ホールド性に優れた小型・軽量・薄型ボディ',
          contents: [
            '内部構造を大幅に見直し、チルト式液晶を搭載しながらもFXフォーマット機最薄・最軽量を実現※2014年9月現在',
          ]
        },
        {
          subtitle: 'FXフォーマット機ならではの高画質',
          contents: [
            '上位機種D810を上回る高感度性能、ワイドなダイナミックレンジ、最新のピクチャーコントロールで撮影シーンを選ばず高画質を実現',
          ]
        },
        {
          subtitle: '様々なシャッターチャンスを逃さない高い信頼性とWi-Fi内蔵',
          contents: [
            '肉眼で見えにくい-3EVの暗いシーンでも対応できるAF、最高約6.5コマ/秒のフルサイズ機トップクラスの連写速度、視野率約100％の光学ファインダーで最高の瞬間を逃しません。',
            '撮影後もストレスを感じないFXフォーマット機初の内蔵Wi-Fi機能搭載！'
          ]
        }
      ],
      characteristicList2: [
        {
          subtitle: '小型軽量ボディに高速性と高画質を兼ね揃えた新しいFXフォーマットモデル',
          contents: [
            '有効2432万画素、新開発のニコンFXフォーマットCMOSセンサーと画像処理エンジン「EXPEED 4」の組み合わせによって、高品位画質を実現',
            'ニコンFXフォーマットCMOSセンサーが、幅広いダイナミックレンジ、豊かで滑らかな階調表現、ノイズが少ない優れた高感度性能を実現',
            '高い鮮鋭感を保ったまま、暗部の黒浮き、静止画の色ノイズ、動画のランダムノイズを効果的に低減可能な画像処理エンジン「EXPEED 4」搭載',
            '暗所でも美しい写真が残せる、常用感度ISO 100～12800を実現',
            '撮影シーンの情報を分析し、自動制御機能の精度を高める、91KピクセルRGBセンサー(約91,000ピクセル)搭載',
            '最高約6.5コマ/秒、最大100コマの高速連続撮影が可能',
            '撮影画面を広くカバーする51点のフォーカスポイントで被写体を的確に捉えるAFシステム搭載',
            '自由なアングルで撮影できる、ニコンFXフォーマットモデル初採用のチルト式液晶モニター採用',
          ]
        },

      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
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
          path: 'ニコン Nikon D750',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759143846', '4960759144232', '4960759144553'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759143846', '4960759143532',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759143846',
        '4960759144232',
        '4960759144553',
        '4975981733291',
        '4961607252727',
        '4961607252772',
        '4960759144041',
        '4960759028792',
        '4960759128713',
        '4960759026002',
        '4960759029157',

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