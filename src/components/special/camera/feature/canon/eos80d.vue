<template>
  <v-app>
    <div class="eos80d">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/80d/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/80d/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS 80D'"
          :topTitleText="'デジタル一眼レフカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'140px 0px 15px 30px'"
        />
        <!-- ↑top image -->
        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">キヤノン EOS 80D</p>
        <naviBtn :naviList="naviList" :hoverColor="'grey'" :color="'#D50003'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--特徴-->
        <div id="point">
          <subText :textItem="'キヤノン EOS 80D ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
          <characteristic :characteristics="characteristicList1" />
          <characteristic :characteristics="characteristicList2" />
          <characteristic :characteristics="characteristicList3" />
          <subText :textItem="'キヤノン EOS 80D スペック'" />
          <characteristic :characteristics="characteristicList4" />
        </div>
        <!--特徴-->
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS 80D/ EOS 70D /ニコン D7200 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">
              視野率約100％の光学ファインダーとオールクロス45点AFで快適なファインダー撮影を実現した「Canon EOS 80D」と「EOS 70D」、「Nikon
              D7200」を比較しました。
            </p>
            <v-container class="mt-8">
              <v-row>
                <v-col cols="12">
                  <router-link to="/ec/pd/compareproducts?prd=4549292060935-4960999979779-4960759145604">
                    <v-img
                      src="/ec/images2/special/camera/feature/canon/80d/btn_comparison.gif"
                      alt="比較"
                      max-width="720px"
                      max-height="100px"
                      class="mx-auto hover"
                    ></v-img>
                  </router-link>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <!--比較-->
        <!-- ↓ お得-->
        <div id="price">
          <subText :textItem="'キヤノン EOS 80D お得な情報'" />
          <v-container class="mt-8">
            <v-row>
              <v-col cols="12" sm="6">
                <a href="https://www.net-chuko.com/ec/sell/item-list?keyword=4960999679884">
                  <v-img
                    src="/ec/images2/special/camera/feature/canon/80d/bnr_shitadori_350-130.gif"
                    alt="高価買取実施中"
                    max-width="350px"
                    max-height="130px"
                    class="mx-auto hover"
                  ></v-img>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="/ec/guide/s_credit_01">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/banner/1486.gif"
                    alt="ショッピングクレジット"
                    max-width="350px"
                    max-height="130px"
                    class="mx-auto hover"
                  ></v-img>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!-- ↑お得-->
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'キヤノン EOS 80D 価格・人気アクセサリー'" />
        <product-list-by-special-id class="mb-5" :specialId="2023" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'キヤノン EOS 80D 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS 80D の外観画像。正面・背面・レンズ/アクセサリー装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/80d'" :sm="'6'" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'eos80d',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    characteristic: Characteristic,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'キヤノン EOS 80D | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'キヤノン EOS 80D 発売中！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！'
      );
    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '',
          contents: ['視野率約 100％。高画質および快適なファインダー撮影を実現した「Canon EOS 80D」']
        }
      ],
      characteristicList1: [
        {
          subtitle: '一眼レフカメラならではの高画質および快適なファインダー撮影',
          contents: ['新開発APS-C サイズ CMOS センサーとDIGIC 6の組み合わせにより質感・立体感をリアルに描写。被写体をより確実に捉えるオールクロス45点AF']
        }
      ],
      characteristicList2: [
        {
          subtitle: '独自のAF技術など快適な操作で高画質な動画撮影を実現',
          contents: [
            'CMOSセンサーの画素が撮像と位相差AFの両方を行う「デュアルピクセルCMOS AF」と、バリアングルのタッチパネル式液晶モニターとの組み合わせにより、手軽に一眼レフカメラならではの美しいボケ味のある動画撮影が可能'
          ]
        }
      ],
      characteristicList3: [
        {
          subtitle: '撮影後の付加価値を拡大するWi-Fi／NFC機能',
          contents: ['携帯端末などと近づけることで簡単に接続しカメラ内の静止画や動画などの画像を簡単に取り込むことが可能']
        }
      ],
      characteristicList4: [
        {
          subtitle: '視野率約100％の光学ファインダーとオールクロス45点AFで快適なファインダー撮影を実現',
          contents: [
            '有効画素約2420万画素のAPS-CサイズCMOSセンサーと、映像エンジンDIGIC 6の組み合わせにより、質感・立体感をリアルに描写する一眼レフならではの高画質を実現',
            'CMOSセンサーの画素が撮像と位相差AFの両方を行う「デュアルピクセルCMOS AF」と、バリアングルのタッチパネル式液晶モニターとの組み合わせにより、手軽に一眼レフカメラならではの美しいボケ味のある動画撮影が可能',
            '撮影後の付加価値を拡大するWi-Fi／NFC機能搭載',
            '撮影表現の幅を拡大するインターバル撮影機能やバルブタイマー機能等さまざまな撮影モードを搭載'
          ]
        }
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
          path: 'キヤノン EOS 80D',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759904485'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292138313'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292138313'],
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
