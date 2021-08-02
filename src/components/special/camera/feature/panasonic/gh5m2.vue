<template>
  <v-app>
    <div class="pen_e-p7">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ サンプル：画像の読み込み -->
        <div class="newproduct pc">
          <h1 class="top-title">
            パナソニック LUMIX DC-GH5M2
            <p>5G対応端末と連携し手軽に無線ライブ配信が行える<br />次世代ミラーレス</p>
          </h1>
        </div>

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>オリンパス PEN E-P7</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'5G対応端末などと連携し、無線ライブ配信を実現したプロフェッショナル動画性能搭載ミラーレス'" />

        <subText :textItem="'パナソニック LUMIX DC-GH5M2 価格・ご購入'" />

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

        <div>
          <a href="https://panasonic.jp/dc/products/g_series/gh5m2/campaign_cashback.html" target="_blank"
            ><img src="/ec/images2/special/camera/feature/panasonic/gh5m2/camp.jpg"
          /></a>
        </div>

        <!--↓ショッピングクレジット -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <!-- <v-container>
          <v-row class="mb-10">
            <v-col class="text-center" cols="4">
              <a :href="`/ec/pd/${mainProductList[0].janCode}`"
                ><img src="//shopimg.kitamura.jp/images/pd/a14/e5a/3b5/8c5/715/c61/596/1ee/140/2a4/653/nrh/iwd/r/M.jpg" width="80%"
              /></a>
              <br />
              <a :href="`/ec/pd/${mainProductList[0].janCode}`">{{ mainProductList[0].itemName }}</a
              ><br /><span class="red--text">{{ mainProductList[0].price }}</span
              >円(税込)
            </v-col>
            <v-col col="6">
              <p>
                分割払いなら一度にかかるご負担を軽減する事ができます。<br />
                ショッピングクレジットの分割払いなら、最大24回分割払いまで分割金利手数料を当店が負担致します。
              </p>
              <font size="-1">※2021年6月25日時点の価格です</font>
              <contingencyTable :numberOfTimes="'48'" :amount="'4,061'" :commission="'0'" />
            </v-col>
          </v-row>
        </v-container> -->

        <!-- <v-row class="mb-10" v-if="Object.keys(mainProduct).length">
          <v-col class="text-center" cols="4">
            <a :href="`/ec/pd/${mainProductList[1].janCode}`"
              ><img src="//shopimg.kitamura.jp/images/pd/559/5f2/be3/62a/788/b47/3cc/17b/db5/5ee/32t/10f/ql2/w/M.jpg" width="80%"
            /></a>
            <br />
            <a :href="`/ec/pd/${mainProductList[1].janCode}`">{{ mainProductList[1].itemName }}</a
            ><br /><span class="red--text">{{ mainProductList[1].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2021年6月25日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'4,579'" :commission="'0'" />
          </v-col>
        </v-row> -->
        <!--↑ショッピングクレジット -->

        <!--特徴-->
        <subText :textItem="'パナソニック LUMIX GH5M2 の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:パナソニック LUMIX DC-GH5M2 レビュー'" />
        <shasha :shashaData="shashaData" />

        <subText :textItem="'ShaSha:パナソニック LUMIX DC-GH5M2 紹介記事'" />
        <shasha :shashaData="shashaData" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'パナソニック LUMIX DC-GH5M2 価格/人気アクセサリー'" />
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

        <!--↓ 外観画像ー-->
        <subText :textItem="'パナソニック LUMIX DC-GH5M2 外観画像'" />
        <p class="text-subtitle-1">パナソニック LUMIX DC-GH5M2 の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 4" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/panasonic/gh5m2/img_${n}.jpg`"> </v-img>
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
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'gh5m2',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    // contingencyTable: ContingencyTable,
    characteristic: Characteristic,
    shasha: ShaSha,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', herf: '#price' },
        { naviItem: '機種比較', herf: '#hikaku' },
        { naviItem: '外観画像', herf: '#images2' },
        { naviItem: '作例画像', herf: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '5G対応端末などと連携して、手軽に高品位な無線ライブ配信を実現',
          contents: ['専用アプリを使ってスマートデバイスからかんたん操作でライブ配信が可能']
        },
        {
          subtitle: 'クリエイターの表現の幅を広げる進化した基本性能',
          contents: [
            '高精細でリアルな解像力を実現する20.3MLiveMOSセンサー＆最新のヴィーナスエンジン搭載',
            '追従精度が向上したリアルタイム認識AF、6.5段の手ブレ補正システムDualI.S.2を搭載',
            'オーバーヒートを抑制する放熱システムにより、収録やライブ配信で動画撮影時間無制限を実現'
          ]
        },
        {
          subtitle: 'プロフェッショナルユースに応える動画撮影性能',
          contents: [
            'Cinema4K60p10bit、高解像アナモフィックモード（6K-A）記録などの多彩な動画記録モード',
            'スローモーションやクイックモーション撮影が可能なVFR（バリアブルフレームレート）',
            '自由度の高いカラーグレーディングを実現する10bitのV-Log L'
          ]
        }
      ],
      shashaData: [
        {
          text: 'ハイエンド、ハイブリッド、ハイパフォーマンスの意味を込めた「GH」を冠する同シリーズのカメラは動画撮影に強い「ハイブリット」としての側面が特に注目されているかと思います。今回のGH5IIでも注目すべきは動画性能かと思いますので、動画機として如何に進化しているかについて...',
          herf: 'https://shasha.kitamura.jp/article/482045857.html',
          src: '/ec/images2/special/camera/feature/panasonic/gh5m2/shashabnr2.jpg'
        }
      ],
      shashaData2: [
        {
          text: '前機種のLUMIX GH5の登場から約4年の歳月が流れ、本機では基本性能やプロユースに応える性能の向上に加え、5G環境下のスマホと連携して屋内外さまざまなシーンで無線LIVE配信を可能にするカメラになっているようです。今回はそのLUMIX GH5IIの進化や魅力について、パナソニック株式会社 商品企画担当の中西智紀（なかにしともき）氏にインタビューしました.',
          herf: 'https://shasha.kitamura.jp/article/481686135.html',
          src: '/ec/images2/special/camera/feature/panasonic/gh5m2/shashabnr.jpg'
        }
      ],
      recommendedFeaturesList: [
        {
          herf: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          herf: 'https://www.kitamura.jp/service/maintenance/',
          img: 'http://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラ・レンズ メンテナンスサービス'
        },
        {
          herf: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          herf: '/sitemap/s_credit_01.html',
          img: 'http://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          herf: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          herf: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
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
          path: 'パナソニック LUMIX DC-GH5M2',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980499771', '4549980499795'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350053574', '4545350044350', '4547410442632', '4548736108486'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549980499771',
        '4549980499795',
        '4549077834317',
        '4549980630761',
        '4549980208793',
        '4902704128881',
        '4549077834300',
        '4549980634783',
        '4975981735592',
        '4523052024719',
        '4523052024092',
        '4523052024108'
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

<style lang="scss" scoped>
.newproduct {
  width: 100%;
  height: 290px;
  margin: 0px 0px 15px 0px;
  padding: 0px 0px 0px 0px;
  background-image: url(/ec/images2/special/camera/feature/panasonic/gh5m2/bg_top.jpg);
  background-repeat: no-repeat;
  background-position: top right;
}

h1.top-title {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 145px 0px 15px 30px;
  color: #000000;
  font-size: 115%;
  font-weight: bold;
}

h1.top-title p {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 30px 0px 0px 0px;
  color: #000000;
  font-size: 100%;
  font-weight: 400;
}

@media screen and (min-width: 952px) {
  .pc {
    display: block;
  }
}
</style>