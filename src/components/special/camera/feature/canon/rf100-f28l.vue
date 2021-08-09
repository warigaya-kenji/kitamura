<template>
  <v-app>
    <div class="rf100-f28l">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓ 画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/rf100-f28l/bg_top.jpg" @error="noimage" />
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <div class="darken-2 text-left">
          <span>キヤノン RF100mm F2.8 L MACRO IS USM</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="/ec/special/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'最大撮影倍率1.4倍を実現したRF本格マクロレンズ「RF100mm F2.8 L マクロ IS USM 」'" />
        <p>RF レンズとして等倍以上のマクロ機能を初めて搭載した「L (Luxury)」レンズ</p>
        <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 価格・ご購入'" />

        <!--====== キヤノン EOS R5 ======-->
        <!--====== キヤノン EOS R6 ======-->
        <!-- <priceAndPurchase :mainProductList="mainProductList" /> -->

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
                  color="red"
                  class="text-h5 font-weight-bold accent-4"
                  height="55px"
                  width="65%"
                  :href="`/ec/pd/${product.janCode}`"
                >
                  <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                  ご購入はこちら
                </v-btn>
                <div class="mt-4" v-if="index === 0">
                  <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-row class="mb-10" v-if="mainProductList.length !== 0">
          <v-col class="text-center" cols="4">
            <a :href="`/ec/pd/${mainProductList[0].janCode}`"
              ><v-img
                src="//shopimg.kitamura.jp/images/pd/b4d/b9c/97c/c64/14f/3de/756/843/ff6/bef/41g/ca5/3a3/r/M.jpg"
                class="hover"
                width="80%"
                height="auto"
              ></v-img
            ></a>
            <br />
            キヤノン RF100mm F2.8 L マクロ IS USM<br /><span class="red--text">{{ mainProductList[0].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年7月16日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'3,404'" :commission="'0'" />
            <div class="text-center">
              <v-btn width="80%" color="#E53935" class="white--text font-weight-bold" href="/sitemap/s_credit_01.html">
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!--比較-->
        <subText
          :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM / RF85mm F1.2 L USM DS/ EF100mm F2.8L マクロ IS USM / タムロン SP 90mm F/2.8 Di MACRO (Model F017) 比較'"
          id="hikaku"
        />
        <div class="product-comparison mb-5">
          <p class="mb-2">
            キヤノン RF100mm F2.8 L MACRO IS USM /RF85mm F1.2 L USM DS / EF100mm F2.8L マクロ IS USM / タムロン SP 90mm F/2.8 Di MACRO (Model
            F017)を比較しました
          </p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="product in comparisonDetailList" :key="product">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年7月15日発売</td>
                <td>2019年12月19日</td>
                <td>2009年10月02日</td>
                <td>2016年2月25日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in comparisonDetailList" :key="product">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>レンズ構成</th>
                <td>13群17枚</td>
                <td>11群12枚</td>
                <td>12群15枚</td>
                <td>11群14枚</td>
              </tr>
              <tr>
                <th>最短撮影距離</th>
                <td>26cm</td>
                <td>35cm</td>
                <td>30cm</td>
                <td>30cm</td>
              </tr>
              <tr>
                <th>最大撮影倍率</th>
                <td>1.4倍</td>
                <td>0.5倍</td>
                <td>1倍</td>
                <td>1倍</td>
              </tr>
              <tr>
                <th>フォーカス駆動</th>
                <td>超音波モーターナノUSM</td>
                <td>ステッピングモーターSTM</td>
                <td>超音波モーターUSM</td>
                <td>超音波モーターUSD</td>
              </tr>
              <tr>
                <th>絞り羽根（枚）</th>
                <td>9枚</td>
                <td>9枚（円形絞り）</td>
                <td>9枚</td>
                <td>9枚（円形絞り)</td>
              </tr>
              <tr>
                <th>フィルター径</th>
                <td>67mm</td>
                <td>67mm</td>
                <td>67mm</td>
                <td>62mm</td>
              </tr>
              <tr>
                <th>外寸 最大径ｘ長さ (mm)</th>
                <td>81.5mm×148mm</td>
                <td>78.0×90.5mm</td>
                <td>77.7mm×123mm</td>
                <td>79mm×117.1mm</td>
              </tr>
              <tr>
                <th>質量</th>
                <td>約730g</td>
                <td>約500g</td>
                <td>約625g</td>
                <td>約610g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/your-eos/product/eosr/')"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 価格・人気アクセサリー'" />
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
        <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 外観画像'" />
        <p class="text-subtitle-1">キヤノン RF100mm F2.8 L MACRO IS USM の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 2" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/canon/rf100-f28l/img_${n}.jpg`" max-width="100%" height="auto"> </v-img>
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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ContingencyTable from '@/components/common/special/contingency-table.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'rf100-f28l',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    contingencyTable: ContingencyTable,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '最大撮影倍率1.4倍によりマクロ撮影の表現領域を拡大',
          contents: [
            '「RF マウント」の特長のひとつであるショートバックフォーカスを生かし最大撮影倍率1.4倍、最短撮影距離0.26mのマクロ撮影を実現',
            '一般的なマクロレンズの最大撮影倍率である等倍（1.0倍）を超えることで、迫力ある描写や細部や質感の表現が可能'
          ]
        },
        {
          subtitle: '「SA コントロールリング」によるユーザーの好みに合わせた自由なボケ描写',
          contents: [
            'リングを回転するだけで球面収差を変化させることができる「SA コントロールリング」を採用',
            'ユーザーの好みに合わせて、フォーカス位置の輪郭を柔らかくしたり、フォーカス位置の前後のボケを変化させることが可能'
          ]
        },
        {
          subtitle: '新規光学設計と手ブレ補正機構により画面全域で高画質を実現',
          contents: [
            '最前面に凹面レンズを採用することで、至近撮影時の球面収差を抑制',
            '13群17枚の新規光学設計により、画質劣化の原因となる諸収差を低減し、画面全域で高画質な描写を実現',
            '「EOS R5」装着時は、ボディー内の手ブレ補正機構と協調制御することで、静止画撮影時に8.0段の手ブレ補正効果を実現動画撮影時も高い手ブレ補正効果を発揮'
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
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/sitemap/s_credit_01.html',
          img: 'http://shopimg.kitamura.jp/images/banner/1486.gif',
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
      ]
    };
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
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
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'キヤノン RF100mm F2.8 L MACRO IS USM',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292168075'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292168075', '4549292146691', '4960999635170', '4960371006031'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292168075', '4549292180893', '4957638817110'],
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

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
  .credit_l {
    width: 35%;
    float: left;
    display: block;
    text-align: center;
    margin: 10px 10px 20px 0;
  }
  .credit_r {
    width: 60%;
    float: left;
    font-size: 14px;
  }
  .mt30 {
    margin-top: 30px;
  }
  .bgtypetitle {
    background-color: #ffffcc;
  }
  table.spec {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 80%;
    float: left;
    box-sizing: border-box;
    word-break: break-all;
  }
  .product-video {
    &-contents {
      height: 520px;
    }
  }
}
.height-20 {
  height: 4.8em;
}
// サンプル：ShaSha
.product-shasha {
  &-wrap {
    background: #f8fbd1;
  }

  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}
</style>