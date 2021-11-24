<template>
  <v-app>
    <div class="rf100-f28l">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/rf100-f28l/bg_top.png'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/rf100-f28l/sp_img_top.png'"
          :topTitle="'キヤノン RF100mm F2.8 L MACRO IS USM'"
          :topTitleText="'最大撮影倍率1.4倍のマクロ機能と\n「SA コントロールリング」を搭載した本格マクロレンズ'"
        />
        <!-- ↑top image -->

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
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'最大撮影倍率1.4倍を実現したRF本格マクロレンズ「RF100mm F2.8 L マクロ IS USM 」'" />
        <p>RF レンズとして等倍以上のマクロ機能を初めて搭載した「L (Luxury)」レンズ</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'3,404'"
            :targetDate="'2021年7月16日'"
            :isCreditBtn="true"
          />
        </div>

        <!--比較-->
        <div id="hikaku">
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
                  <td v-for="(product, index) in comparisonDetailList" :key="`product-name-${index}`">{{ product.itemName }}</td>
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
                  <td v-for="(product, index) in comparisonDetailList" :key="`price-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
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
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/rf/lineup/rf100-f28l/'"
          :height="'70px'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'キヤノン RF100mm F2.8 L MACRO IS USM 外観画像'" />
          <p class="text-subtitle-1">キヤノン RF100mm F2.8 L MACRO IS USM の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/rf100-f28l'" :count="2" />
        </div>

        <!--↓ SNSー-->
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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'rf100-f28l',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    splitContent: SplitContent,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage
  },
  setup: (props, context) => {
    document.title = 'キヤノン RF100mm F2.8 L MACRO IS USM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン RF100mm F2.8 L MACRO IS USM 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
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
          href: '/ec/guide/s_credit_01l',
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