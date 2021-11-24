<template>
  <div class="strap">
    <div class="main-contents-wrap">
      <!-- ↓ サンプル：パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ サンプル：パンくず -->
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1 text-body-1">おしゃれなカメラストラップ</h1>
        <p>
          デジタル一眼レフ/ミラーレス一眼/コンパクトデジカメ用のカメラストラップを、革(レザー)やレース柄などのデザインから選べます。<br />
          カメラ女子にも人気のカメラストラップ♪おすすめの機能的ストラップも♪
        </p>
        <!-- ↑ 看板：画像の読み込み -->

        <v-container class="v-container">
          <v-row justify="center">
            <v-col cols="6" md="2" v-for="(navi, index) in naviList" :key="`navi-${index}`" class="pa-1">
              <a v-scroll-to="{ el: navi.href }">
                <v-btn block class="amber darken-3 white--text including-line-breaks pa-0" height="55px" width="100%"
                  ><span class="white--text text-subtitle-1 lh14 w100pr">{{ navi.naviItem }}</span></v-btn
                >
              </a>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i01">人気のデザインのカメラストラップ</h2>
              <p class="text-center">
                【Goodデザイン受賞】サクラカメラスリング
                <a href="/ec/list?keyword=サクラスリング&narrow18=0">
                  <v-img class="banner-img mx-auto bd-g hover" src="/ec/images2/special/camera/strap/img_strap_sakura.jpg" alt="サクラカメラスリング"></v-img>
                </a>
              </p>

              <v-col cols="12" md="3" class="float-left"
                ><v-img
                  class="mx-auto"
                  src="/ec/images2/special/camera/strap/img_strap_01.jpg"
                  alt="ストラップイメージ"
                  max-width="196px"
                  max-height="auto"
                ></v-img
              ></v-col>
              <v-col cols="12" md="9" class="float-left">
                <v-col cols="12" md="4" class="float-left"
                  ><h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&narrow22=レザー・革&sort=popularity&limit=40"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_02.jpg"
                        alt="レザー・革"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >レザー・革</a
                    >
                  </h3>
                </v-col>
                <v-col cols="12" md="4" class="float-left">
                  <h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&narrow23=花&sort=popularity&limit=40"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_06.jpg"
                        alt="フラワー・花"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >フラワー・花</a
                    >
                  </h3>
                </v-col>
                <v-col cols="12" md="4" class="float-left">
                  <h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&narrow23=水玉&sort=popularity&limit=40"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_07.jpg"
                        alt="ドット・水玉"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >ドット・水玉</a
                    >
                  </h3>
                </v-col>
                <v-col cols="12" md="4" class="float-left">
                  <h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&narrow23=チェック&sort=popularity&limit=40"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_08.jpg"
                        alt="チェック"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >チェック</a
                    >
                  </h3>
                </v-col>
                <v-col cols="12" md="4" class="float-left">
                  <h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&narrow23=シンプル&sort=popularity&limit=40"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_10.jpg"
                        alt="シンプル"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >シンプル</a
                    >
                  </h3>
                </v-col>
                <v-col cols="12" md="4" class="float-left">
                  <h3 class="text-center lh14">
                    <a href="/ec/list?category=カメラストラップ&narrow18=0&n20c=完了商品は除く&sort=popularity&limit=100"
                      ><v-img
                        class="mb-1 mx-auto bd-g hover"
                        src="/ec/images2/special/camera/strap/img_strap_09.jpg"
                        alt="その他"
                        max-width="120px"
                        max-height="auto"
                      ></v-img
                      >その他</a
                    >
                  </h3>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i02">機能的な一眼レフ用 ストラップ&デジカメ用 フロートストラップ</h2>
              <v-col cols="12" md="6" class="float-left"
                ><h3 class="text-center lh14">
                  <router-link to="/ec/pd/0099461003767"
                    ><v-img
                      class="mb-1 mx-auto bd-g hover"
                      src="/ec/images2/special/camera/strap/img_strap_cottoncarrier.jpg"
                      alt="コットンキャリア ストラップショット"
                      max-width="282px"
                      max-height="auto"
                    ></v-img
                    >コットンキャリア ストラップショット</router-link
                  >
                </h3></v-col
              >
              <v-col cols="12" md="6" class="float-left"
                ><h3 class="text-center lh14">
                  <a href="/ec/special/camera/strap/380"
                    ><v-img
                      class="mb-1 mx-auto bd-g hover"
                      src="/ec/images2/special/camera/strap/img_strap_grip.jpg"
                      alt="一眼レフ用グリップハンドカメラストラップ"
                      max-width="282px"
                      max-height="auto"
                    ></v-img
                    >一眼レフ用グリップハンドカメラストラップ</a
                  >
                </h3></v-col
              >
              <v-col cols="12" md="6" class="float-left"
                ><h3 class="text-center lh14">
                  <a href="/ec/list?keyword=フロート&category=カメラストラップ&narrow18=0"
                    ><v-img
                      class="mb-1 mx-auto bd-g hover"
                      src="/ec/images2/special/camera/strap/img_strap_float.jpg"
                      alt="フローティングカメラストラップ"
                      max-width="282px"
                      max-height="auto"
                    ></v-img
                    >フローティングカメラストラップ</a
                  >
                </h3></v-col
              >
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i03">その他のカメラストラップ</h2>
              <v-col cols="12" md="6" class="float-left"
                ><h3 class="text-center lh14">
                  <a href="/ec/list?category=カメラストラップ&keyword=ネックストラップ（2点吊り）&narrow18=0&sort=popularity&limit=100"
                    ><v-img
                      class="mb-1 mx-auto bd-g hover"
                      src="/ec/images2/special/camera/strap/img_strap_25.jpg"
                      alt="2点吊りタイプのストラップ（デジカメ/ミラーレス一眼用）"
                      max-width="282px"
                      max-height="auto"
                    ></v-img
                    >2点吊りタイプのストラップ<br />（デジカメ/ミラーレス一眼用）</a
                  >
                </h3></v-col
              >
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i04">一眼レフ/ミラーレス用 おしゃれなストラップ</h2>
              <ul class="ctlist">
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ:一眼レフカメラ対応&narrow18=0&narrow22=レザー・革&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>レザー・革</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:ミラーレス一眼対応&narrow18=0&narrow23=水玉&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ドット・水玉</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ&narrow18=0&narrow23=花&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>フラワー・花</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ&narrow18=0&narrow23=チェック&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>チェック</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ&narrow18=0&narrow23=ミリタリー/デニム&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ミリタリー/デニム</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ&narrow18=0&narrow23=アニマル&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>アニマル</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ&narrow18=0&narrow23=和柄&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>和柄</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ:一眼レフカメラ対応:ネックストラップ&narrow18=0&sort=popularity&limit=100"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ネックストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ:一眼レフカメラ対応:ショルダーストラップ&narrow18=0&sort=popularity&limit=100"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ショルダーストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012?category=カメラストラップ:一眼レフカメラ対応:ハンドストラップ&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ハンドストラップ一覧</a
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i05">コンパクトデジカメ用 おしゃれなストラップ</h2>
              <ul class="ctlist">
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow22=レザー・革&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>レザー・革</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow22=ファブリック&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ファブリック</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow23=水玉&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ドット・水玉</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow23=和柄&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>和柄</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow23=シンプル&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>シンプル</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応&narrow18=0&narrow23=ミリタリー/デニム&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ミリタリー/デニム</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応:ネックストラップ&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ネックストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応:ネックストラップ（2点吊り）&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>２点吊ストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応:ショルダーストラップ&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ショルダーストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/?category=カメラストラップ:コンパクトデジカメ対応:ハンドストラップ&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ハンドストラップ一覧</a
                  >
                </li>
                <li>
                  <a href="/ec/ct/C012/003/?category=カメラストラップ:コンパクトデジカメ対応:ハンドストラップ&narrow18=0&sort=popularity&limit=40"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>フィンガーストラップ一覧</a
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="pa-2 cl" cols="12">
              <h2 class="heading cl" id="i06">おしゃれなブランドストラップ</h2>
              <ul class="ctlist">
                <li>
                  <a href="/ec/list?keyword=アルヌボ&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>アルヌボ（ARNUVO）</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=キング&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>キング/エスハイム</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=サンワサプライ&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>サンワサプライ</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=ハクバ&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ハクバ（HAKUBA）</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=ハクバ&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>エツミ</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=ユーエヌ&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ユーエヌ（UN）</a
                  >
                </li>
                <li>
                  <a href="/ec/list?keyword=ブラックラピッド&category=カメラストラップ&narrow18=0"
                    ><v-icon small left color="deep-orange">fas fa-caret-right</v-icon>ブラックラピッド</a
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="mt-1">
          <v-row dense>
            <v-col>
              <h2 class="heading cl">おすすめ特集・サービス</h2>
              <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
            </v-col>
          </v-row>
        </v-container>
        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'strap',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'おしゃれなカメラストラップ特集 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'おしゃれなカメラストラップ♪デジタル一眼レフやミラーレス、コンパクトデジカメ用のカメラストラップを、革(レザー)/レース柄などデザインから選べます。カメラ女子にも人気のかわいいストラップから、キタムラおすすめの機能的ストラップも♪'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おしゃれなカメラストラップ特集',
          linkUrl: '/ec/special/camera/strap',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: '人気デザイン', href: '#i01' },
        { naviItem: '機能的', href: '#i02' },
        { naviItem: 'その他', href: '#i03' },
        { naviItem: '一眼レフ\nミラーレス用', href: '#i04' },
        { naviItem: 'コンパクト\nデジカメ用', href: '#i05' },
        { naviItem: 'おしゃれな\nブランド', href: '#i06' }
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/bag',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/girlscamera/',
          img: 'https://shopimg.kitamura.jp/images/banner/1390.jpg',
          alt: '女子がきゅんとくる ミラーレス一眼カメラ'
        },
        {
          href: '/ec/special/general/pet',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          href: '/ec/special/camera/frame/shacolla',
          img: 'https://shopimg.kitamura.jp/images/banner/3099.gif',
          alt: 'フジフイルム シャコラで写真を壁に飾ろう！'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: 'カメラのキタムラネットプリント',
          target: 'blank'
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759028921'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
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

<style lang="scss" scoped>
.main-contents-wrap {
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }
  .banner-img {
    max-width: 100%;
    height: auto;
  }

  .cl {
    clear: both;
  }
  .tx-20 {
    font-size: 20px;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .h-1 {
    height: 1px;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  .line {
    border-bottom: dotted #9aced1 1px;
    box-sizing: border-box;
  }
  .bk-usg {
    background-color: #f8f7f3;
  }
  .mx100pr {
    max-width: 100%;
    height: auto;
  }
  .w100pr {
    width: 100%;
  }
  @media screen and (min-width: 668px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
    ul.ctlist li {
      width: 98%;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.strap {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
.heading {
  width: 100%;
  height: 45px;
  margin: 20px 0;
  padding: 2px 5.5555% 0px 39px;
  letter-spacing: 0.08em;
  box-sizing: border-box;
  color: #ff6600;
  background-image: url(/ec/images2/special/camera/strap/bg_title_02.jpg);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto auto;
}
.lh14 {
  line-height: 1.4em;
}
.bd-g {
  border: slategray 1px solid;
  box-sizing: border-box;
}
.d-bx {
  display: block;
}
ul.ctlist {
  width: 100%;
}
ul.ctlist li {
  float: left;
  width: 30%;
  list-style: none;
  padding: 0;
  margin: 10px 0 0 1%;
  border-bottom: 2px dotted #d1c19d;
  box-sizing: border-box;
}
ul.ctlist li a {
  display: block;
}
</style>
