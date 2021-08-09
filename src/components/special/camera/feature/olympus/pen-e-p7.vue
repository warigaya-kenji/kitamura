<template>
  <v-app>
    <div class="pen_e-p7">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/olympus/pen_e-p7/bg_top.jpg" @error="noimage" />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>オリンパス PEN E-P7</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'2000万画素Live MOSセンサー＆ボディー内5軸手ぶれ補正搭載ミラーレス一眼カメラ「オリンパス PEN E-P7」'" />
        <p class="text-sibtitle-2">PENならではの“持つ歓び”を感じさせるデザインにクリエイティブな写真表現を可能にする機能を満載</p>

        <subText :textItem="'オリンパス PEN E-P7 価格・ご購入'" />

        <!--====== 価格・ご購入 ======-->
        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <router-link :to="`/ec/pd/${product.janCode}`"><img :src="product.images[0].imagePath" class="mx100pr" /></router-link>
                <p>
                  <a :href="`/ec/pd/${product.janCode}`">{{ product.itemName }}</a>
                </p>
              </v-col>
              <v-col class="text-center mt-4" cols="12" sm="6">
                <p class="text-h6">
                  価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
                </p>
                <v-btn
                  elevation="3"
                  x-large
                  dark
                  color="orange lighten-1"
                  class="text-h5 font-weight-bold accent-4"
                  height="55px"
                  width="65%"
                  :href="`/ec/pd/${product.janCode}`"
                >
                  <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                  ご購入はこちら
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <subText :textItem="'キタムラなら24回まで分割金利手数料0円！'" />
        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4545350053574"
              ><img src="//shopimg.kitamura.jp/images/pd/a14/e5a/3b5/8c5/715/c61/596/1ee/140/2a4/653/nrh/iwd/r/M.jpg" width="80%"
            /></a>
            <br />
            <a href="ec/pd/4545350053574">オリンパス PEN E-P7 ボディ シルバー</a><br /><span class="red--text">{{}}</span>円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大24回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年6月25日時点の価格です</font>
            <contingencyTable :numberOfTimes="'24'" :amount="'3,507'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4545350053598"
              ><img src="//shopimg.kitamura.jp/images/pd/fcb/e11/669/0c7/15b/149/79f/808/691/6d3/adm/u8x/ag0/d/M.jpg" width="80%"
            /></a>
            <br />
            <a href="ec/pd/4545350053598">オリンパス PEN E-P7 14-42mm EZレンズキット シルバー</a><br /><span class="red--text">{{}}</span>円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2021年7月1日時点の価格です</font>
            <contingencyTable :numberOfTimes="'24'" :amount="'4,043'" :commission="'0'" />
            <div class="text-center">
              <v-btn
                elevation="3"
                x-large
                dark
                color="red"
                class="accent-4"
                height="40px"
                width="85%"
                :href="`https://shop.kitamura.jp/sitemap/s_credit_01.html`"
              >
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!--比較-->
        <subText :textItem="'オリンパス E-P7 / E-P5 / フジフイルム X-E4 / ソニー α6100 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">オリンパス E-P7 / E-P5 / フジフイルム X-E4 / ソニー α6100 を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td>オリンパス E-P7</td>
                <td>オリンパス E-P5</td>
                <td>フジフイルム X-E4</td>
                <td>ソニー α6100</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年6月25日 発売予定</td>
                <td>2013年6月28日</td>
                <td>2021年2月25日</td>
                <td>2019年10月25日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in comparisonDetailList" :key="product">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約2030万画素</td>
                <td>約1605万画素</td>
                <td>約2610万画素</td>
                <td>約2420万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>4/3型（17.3×13.0mm ）<br />Live MOSセンサー</td>
                <td>4/3型（17.3×13.0mm ）<br />Live MOSセンサー</td>
                <td>APS-Cサイズ（23.5 x 15.6mm）<br />X-Trans CMOS 4センサー</td>
                <td>APS-Cサイズ（23.5 x 15.6mm）<br />Exmor CMOSセンサー</td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>約8.7コマ/秒</td>
                <td>約5コマ/秒</td>
                <td>約8コマ/秒</td>
                <td>約11コマ/秒</td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1/4000～60秒、バルブ、ライブタイム、ライブコンポジット</td>
                <td>1/8000～60秒、バルブ、タイム撮影</td>
                <td>1/4000～15分、バルブ</td>
                <td>1/4000～30秒、バルブ</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>LOW（約100相当）～6400（200～25600まで拡張可能）</td>
                <td>LOW（約100相当）～1600（200～25600まで拡張可能）</td>
                <td>160～12800(拡張：80／100／125／25600／51200)</td>
                <td>100～32000(拡張：上限ISO51200)</td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>－</td>
                <td>電子ビューファインダー別売</td>
                <td>0.39型/約236万ドット</td>
                <td>0.39型/約144万ドット</td>
              </tr>
              <tr>
                <th>液晶モニター</th>
                <td>3.0型/約104万ドット<br />チルト式</td>
                <td>3.0型/約104万ドット<br />チルト式</td>
                <td>3.0型/約162万ドット<br />チルト式</td>
                <td>3.0型ワイド/約92万ドット<br />チルト式</td>
              </tr>
              <tr>
                <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
                <td>約360枚</td>
                <td>約400枚</td>
                <td>約460枚</td>
                <td>約420枚</td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>センサーシフト方式5軸補正</td>
                <td>センサーシフト方式5軸補正</td>
                <td>レンズ内手ブレのみ</td>
                <td>レンズ内手ブレのみ</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約118.3ｘ68.5ｘ38.1mm</td>
                <td>約122.3ｘ68.9ｘ37.2mm</td>
                <td>121.3ｘ72.9ｘ32.7mm</td>
                <td>約120.0ｘ66.9ｘ59.4mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>289g</td>
                <td>約366g</td>
                <td>約315g</td>
                <td>約352g</td>
              </tr>
              <tr>
                <th>カードスロット</th>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード</td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>4K/フルHD/HD</td>
                <td>フルHD/HD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!--動画で見る-->
        <subText :textItem="'動画で見る オリンパス PEN E-P7'" />
        <p class="text-center text-subtitle-2">【ミラーレス一眼レビュー】オリンパス PEN E-P7を徹底解説！</p>
        <div class="product-video-wrap text-center">
          <div class="">
            <iframe
              width="70%"
              height="350"
              src="https://www.youtube.com/embed/UEDz_xCfS20?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!--特徴-->
        <subText :textItem="'オリンパス PEN E-P7 の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:オリンパス PEN E-P7｜レビュー'" />
        <shasha :shashaData="shashaData" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'オリンパス PEN E-P7 価格/人気アクセサリー'" />
        <v-container>
          <v-row>
            <v-col cols="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" class="mx100pr" /></a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">&yen;{{ productDetail.price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'オリンパス PEN E-P7 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/olympus/pen_e-p7/'" :count="10" />

        <!--↓ 外観画像ー-->
        <subText :textItem="'オリンパス PEN E-P7 外観画像'" />
        <p class="text-subtitle-1">オリンパス PEN E-P7 の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 5" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/olympus/pen_e-p7/img_${n}.jpg`"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
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
import NaviBtn from '@/components/common/navi-btn.vue';
import SubText from '@/components/common/subtext.vue';
import ContingencyTable from '@/components/common/contingency-table.vue';
import Characteristic from '@/components/common/characteristic.vue';
import ShaSha from '@/components/common/shasha.vue';
import ExampleImages from '@/components/common/example-image.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'pen_e-p7',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    contingencyTable: ContingencyTable,
    characteristic: Characteristic,
    shasha: ShaSha,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      test: '',
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' },
        { naviItem: '作例画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'ミラーレスとニコンの伝統的なデザインの融合',
          contents: [
            'フロントとリアの各ダイヤルにはアルミ削り出しのパーツを採用。細部のディテールまで作り込まれた洗練されたデザイン',
            'ボディー単体で337g、標準ズームレンズと組み合わせてもわずか430g。気軽に持ち歩いて軽快に撮影が楽しめます'
          ]
        },
        {
          subtitle: 'クリエイティブな写真表現が楽しめる「プロファイルコントロール」、「アートフィルター」搭載',
          contents: [
            '瞬時に「プロファイルコントロール」に切り替えられる専用のスイッチをボディ前面に配置。自分好みのクリエイティブな写真表現が簡単に楽しめます',
            '個性的な写真表現を簡単に楽しめる「アートフィルター」には、モニターに表示されるスライダーを上下に動かすだけでフィルターの効果を調整できるファインチューンも搭載'
          ]
        },
        {
          subtitle: '「M.ZUIKO」の描写力を生かすLive MOSセンサーと画像処理エンジン、ボディー内5軸手ぶれ補正',
          contents: [
            '2000万画素Live MOSセンサーと、高速処理が可能な画像処理エンジン「TruePic VIII」を搭載。「M.ZUIKO」レンズの持つ高い描写力を最大限に引き出します',
            '最大4.5段分の補正効果を発揮するボディー内5軸手ぶれ補正を搭載。様々なシーンでぶれない高画質を楽しめます',
            'OM-Dシリーズのプロフェッショナル向けモデルで定評ある「顔優先／瞳優先AF」も採用。横顔やうつむいて顔の一部が隠れていても、顔や瞳を自動検出し、ピントを合わせ続けます'
          ]
        }
      ],
      shashaData: [
        {
          text: '2013年に発売されたPENのフラグシップ機E-P5の後継なのかと思われるが、デザインやサイズ感を見るとE-PLシリーズに近い。そして、PEN-Fに搭載されていたモノクロプロファイル、カラープロファイルを搭載している。まさに、E-Pシリーズの高級感と、E-PLシリーズの手軽さと、PEN-Fの表現力を...',
          href: 'https://shasha.kitamura.jp/article/482049434.html',
          src: '/ec/images2/special/camera/feature/olympus/pen-e-p7/shashabnr.jpg'
        }
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'http://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
    };
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'オリンパス PEN E-P7',
          disabled: true
        }
      ],
      mainProductJanCode: ['4545350053574', '4545350053581', '4545350053598', '4545350053604'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350053574', '4545350044350', '4547410442632', '4548736108486'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350053574',
        '4545350053598',
        '4545350053581',
        '4545350053604',
        '4545350044152',
        '4545350042189',
        '4545350053536',
        '4545350053536'
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