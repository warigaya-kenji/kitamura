<template>
  <v-app>
    <div class="g9">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓ サンプル：画像の読み込み -->
        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'https://shop.kitamura.jp/ec/images2/special/camera/feature/panasonic/g9/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/panasonic/g9/sp_img_top.jpg'"
          :topTitle="'パナソニック LUMIX DC-G9'"
          :topTitleText="'強力なボディ内手ブレ補正と超高速AFで\n決定的瞬間を美しく忠実に描写する静止画フラッグシップミラーレス一眼'"
          :padding="'140px 0px 0px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>パナソニック LUMIX DC-G9</span>
        </div>
        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#1122cc'" />
        <!-- ↑ ナビボタン -->
        <div class="text-right mb-2">
          <v-btn href="/ec/special/camera/feature/backnumber" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>
        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'パナソニック LUMIX DC-G9 価格/人気アクセサリー'" />
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <div id="price">
          <product-list-by-special-id class="mb-5" :specialId="3126" />
        </div>
        <!--↓お得な情報-->
        <div id="price2">
          <subText :textItem="'パナソニック LUMIX DC-G9 お得な情報'" />
          <v-row class="mt-8">
            <v-col cols="12" sm="6">
              <a href="https://www.net-chuko.com/ec/sell/item-list?keyword=4549077396242">
                <v-img
                  src="/ec/images2/special/camera/feature/panasonic/g9/bnr_shitadori_350-130.png"
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
        </div>
        <!-- ↓ ShaSha -->
        <subText :textItem="'パナソニック LUMIX DC-G9 レビュー'" />
        <shasha
          :txt="'写真を中心に、話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート……'"
          :href="'https://shop.kitamura.jp/ec/special/general/photo_mono/g9pro'"
          :src="'https://shopimg.kitamura.jp/images/banner/5091.jpg'"
        />
        <!-- ↑ ShaSha -->
        <!--特徴-->
        <div id="spec">
          <subText :textItem="'パナソニック LUMIX DC-G9 ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'48'"
          :maximumInstallmentPayment="'48'"
          :amount="'3,917'"
          :targetDate="'2018年1月25日'"
          :isCreditBtn="true"
        />
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'パナソニック G9 / オリンパス E-M1 MarkII / G8 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">前機種『パナソニック DMC-G8』と『オリンパス E-M1 MarkII』との性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td class="point">パナソニック DC-G9</td>
                  <td>オリンパス E-M1 MarkII</td>
                  <td>パナソニック DMC-G8</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2018年1月25日発売</td>
                  <td>2016年12月22日発売</td>
                  <td>2016年10月21日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2033万画素</td>
                  <td>約2037万画素</td>
                  <td>約1600万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>4/3型Live MOS センサー</td>
                  <td>4/3型Live MOS センサー</td>
                  <td>4/3型Live MOS センサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>AF追従20コマ/秒<br />AF固定60コマ/秒</td>
                  <td>最高 約60コマ/秒</td>
                  <td>最高 約40コマ/秒</td>
                </tr>
                <tr>
                  <th>最大撮影コマ数</th>
                  <td>RAW：60コマ以上</td>
                  <td>RAW：約148コマ</td>
                  <td>RAW：45コマ以上</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000～60秒<br />（電子シャッター1/32000～1秒）</td>
                  <td>1/8000～60秒<br />（電子シャッター1/32000～60秒）</td>
                  <td>1/4000～120秒<br />（電子シャッター1/16000～1秒）</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～25600</td>
                  <td>64相当～25600</td>
                  <td>100～25600</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>225点</td>
                  <td>121点</td>
                  <td>49点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約380枚<br />約890枚（省電力ファインダー撮影設定時）</td>
                  <td>約440枚<br />約950枚（低消費電力撮影モード）</td>
                  <td>約330枚<br />約800枚（省電力ファインダー撮影設定時）</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約136.9×97.3×91.6mm</td>
                  <td>約134.1×90.9×68.9mm</td>
                  <td>約128.4×89.0×74.3mm</td>
                </tr>
                <tr>
                  <th>手振れ補正</th>
                  <td>5軸補正 最大6.5段</td>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 5段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.83倍</td>
                  <td>約100% / 約1.30倍～約1.48倍</td>
                  <td>約100％ / 約1.48倍</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>約658g</td>
                  <td>約574g</td>
                  <td>約505g</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SD/SDHC/SDXCメモリーカード<br />ダブルUHS-II対応 SDカードスロット</td>
                  <td>SD/SDHC/SDXCメモリーカード<br />※UHS-I・UHS-II対応</td>
                  <td>SD/SDHC/SDXCメモリーカード<br />※UHS-I・UHS-II対応</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'パナソニック LUMIX DC-G9 外観画像'" />
          <p class="text-subtitle-1">パナソニック LUMIX DC-G9 の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/panasonic/g9'" :count="3" />
          <p class="text-subtitle-1">
            左／バッテリーグリップ DMW-BGG9 装着時<br />
            右／装着レンズ LEICA DG VARIO-ELMARIT 12-60mm F2.8-4.0 ASPH. POWER O.I.S.
          </p>
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'g9',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
    appearanceImage: AppearanceImage,
    urlcopy: Urlcopy,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'パナソニック DC-G9 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'パナソニック LUMIX DC-G9 販売中♪前機種からの進化点、オリンパス E-M1 MarkIIとの比較や、価格・スペック・お得な情報をチェック！DC-G9の実写レビューもご紹介。新製品ならカメラのキタムラにおまかせください！'
      );
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
          path: 'パナソニック LUMIX DC-G9',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980016695'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549980016695', '4545350050849', '4549077809575'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549980016695'],
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
          subtitle: '高精細20.3M Live MOSセンサー＆世界最高6.5段ボディ内手ブレ補正で、LUMIX史上最高画質を実現',
          contents: [
            'ローパスフィルターレス設計のセンサーと最新の画像処理エンジンにより、階調特性・色再現性などを向上',
            'センサーの表面にARコーティング処理を新たに施し、逆光の撮影時も効果的にフレアを抑制',
            '世界最高の6.5段分のボディ内手ブレ補正を実現。「Dual I.S. 2」で望遠域まで6.5段分補正効果',
            '約80M画素の高解像写真を生成する「ハイレゾモード」で、精細感や臨場感を最大限に記録'
          ]
        },
        {
          subtitle: '決定的瞬間を撮り逃さない機動力、世界最速AF約0.04秒と高速連写',
          contents: [
            'AF合焦速度は世界最速の約0.04秒を実現。手前に向かってくる被写体にもしっかりとフォーカス',
            '電子シャッター連写機能は、AF追従連写で約20コマ/秒、AF固定連写で約60コマ/秒の超高速連写',
            '約18Mの高画素で、秒間30コマ高速連写の「6Kフォト」機能を搭載。A1サイズまでプリント引き伸ばしが可能'
          ]
        },
        {
          subtitle: '直感的に操れ、撮影に集中できる優れた操作性＆デザイン',
          contents: [
            '倍率約0.83倍を備えた約368万ドット高精細OLEDファインダーを搭載。状況に応じて倍率の切換も可能',
            '本体天面にステータスLCDを新搭載。基本的な撮影設定などを素早く確認できよりスピーディな撮影をサポート',
            '「ファンクションレバー」をボディ正面に新搭載。モニターを確認することなく、設定の切換が可能'
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
