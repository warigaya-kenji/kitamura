<template>
  <v-app>
    <div class="rf400f28l">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/feature/canon/rf400-f28l/'" />

        <!-- ↓ 画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/rf400-f28l/bg_top.jpg" @error="noimage" />
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <div class="darken-2 text-left">
          <span>キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="/ec/special/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'高画質と機動性を両立したRFマウント初の大口径超望遠\n「 RF400mm F2.8 L IS USM/RF600mm F4 L IS USM 」'" />
        <p>「L レンズ」にふさわしい耐久性と信頼性を追求</p>
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-row class="mb-10" v-if="mainProductList.length !== 0">
          <v-col class="text-center" cols="4">
            <router-link :to="`/ec/pd/${mainProductList[0].janCode}`"
              ><v-img
                src="//shopimg.kitamura.jp/images/pd/4a5/a28/32b/c41/c9d/524/e0a/89b/a4d/47e/969/7t8/82d/n/M.jpg"
                class="hover"
                width="80%"
                height="auto"
              ></v-img
            ></router-link>
            <br />
            キヤノン RF400mm F2.8 L IS USM<br /><span class="red--text">{{ mainProductList[0].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年7月15日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'33,938'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10" v-if="mainProductList.length !== 0">
          <v-col class="text-center" cols="4">
            <router-link :to="`/ec/pd/${mainProductList[1].janCode}`"
              ><v-img
                src="//shopimg.kitamura.jp/images/pd/397/f31/685/b03/270/75a/a1d/47b/ca3/c3e/7bq/mw9/4of/l/M.jpg"
                class="hover"
                width="80%"
                height="auto"
              ></v-img
            ></router-link>
            <br />
            キヤノン RF600mm F4 L IS USM<br /><span class="red--text">{{ mainProductList[1].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年7月16日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'31,219'" :commission="'0'" />
            <div class="text-center">
              <v-btn width="80%" color="#E53935" class="white--text font-weight-bold" href="/sitemap/s_credit_01.html">
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!--比較-->
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">RF400mm F2.8 L IS USM / RF600mm F4 L IS USM を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td>キヤノン RF400mm F2.8 L IS USM</td>
                <td>キヤノン RF600mm F4 L IS USM</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年7月15日発売</td>
                <td>2021年7月15日発売</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in mainProductList" :key="product">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>レンズ構成</th>
                <td>13群17枚</td>
                <td>13群17枚</td>
              </tr>
              <tr>
                <th>最短撮影距離</th>
                <td>2.5m</td>
                <td>4.2m</td>
              </tr>
              <tr>
                <th>最大撮影倍率</th>
                <td>0.17倍</td>
                <td>0.15倍</td>
              </tr>
              <tr>
                <th>フォーカス駆動</th>
                <td>超音波モーターリングUSM</td>
                <td>超音波モーターリングUSM</td>
              </tr>
              <tr>
                <th>絞り羽根（枚）</th>
                <td>9枚</td>
                <td>9枚</td>
              </tr>
              <tr>
                <th>フィルター径</th>
                <td>差し込み52mm</td>
                <td>差し込み52mm</td>
              </tr>
              <tr>
                <th>外寸 最大径ｘ長さ (mm)</th>
                <td>163mm×367mm</td>
                <td>168mm×472mm</td>
              </tr>
              <tr>
                <th>質量</th>
                <td>約2890g</td>
                <td>約3090g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <div class="col-sm-12 text-center pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/rf/lineup/rf400-f28l/')"
            >メーカーサイトでRF400mm F2.8 L IS USM<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <div class="col-sm-12 text-center pa-4">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/rf/lineup/rf600-f4l/')"
            >メーカーサイトでRF600mm F4 L IS USM<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 外観画像'" />
        <p class="text-subtitle-1">キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 2" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/canon/rf400-f28l/img_${n}.jpg`" max-width="100%" height="auto"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 作例画像'" />
        <p class="py-2">↓キヤノン RF400mm F2.8 L IS USM 作例画像</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/canon/rf400-f28l/'" :count="5" />
        <p class="py-2">↓キヤノン RF600mm F4 L IS USM 作例画像</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/canon/rf400-f28l/'" :count="4" :target="5" />

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
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ContingencyTable from '@/components/common/special/split-content.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'rf400-f28l',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    naviBtn: NaviBtn,
    subText: SubText,
    exampleImages: ExampleImages,
    characteristic: Characteristic,
    contingencyTable: ContingencyTable,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase
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
          subtitle: '高画質と機動性を両立した「RFマウント」の超望遠レンズ',
          contents: [
            '蛍石レンズ2枚とスーパーUD レンズ１枚を含む13群17枚の光学設計により、レンズの大きさや重さを抑えながら高解像・高コントラストを実現',
            '特殊コーティング「ASC（Air Sphere Coating）」を採用し、画質劣化の原因となるフレア・ゴーストを抑制',
            '最短撮影距離は、“RF400mm F2.8 L IS USM”が2.5m、“RF600mm F4 L IS USM”が4.2mをそれぞれ実現',
            'RFマウント化にともない、手ブレ補正制御の最適化を図り、5.5段の手ブレ補正効果を実現'
          ]
        },
        {
          subtitle: '「EOS R システム」の高性能を生かすRF レンズ共通の機能',
          contents: [
            'レンズの絞り駆動制御の最適化により、開発中の「EOS R3」との組み合わせでは、電子シャッター撮影時におけるAF／AE 追従最高30コマ/秒の高速連写に対応',
            '動画撮影時の絞り制御を1/8段の分解能で設定することが可能。明るさの移り変わりを滑らかに表現'
          ]
        },
        {
          subtitle: '「L レンズ」にふさわしい耐久性と信頼性を追求',
          contents: [
            '太陽光に含まれる赤外線の反射率を高めた遮熱塗料を採用。炎天下での長時間撮影でもレンズの温度上昇を低減',
            'マウント部、スイッチ部、フォーカスリングなどの防じん・防滴構造に加え、鏡筒内の繰り出し部に耐久性と耐振動衝撃性に配慮した構造を採用',
            'レンズ最前面と最後面に油や水滴が付着しにくいフッ素コーティングを採用。レンズに付着した油分なども乾いた布などで簡単に取り除くことが可能'
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
          path: 'キヤノン RF400mm F2.8 L IS USM',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292184440', '4549292184457'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292184440', '4549292184457', '4560376577996', '4560376578009'],
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

  table.spec {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 80%;
    float: left;
    box-sizing: border-box;
    word-break: break-all;
  }
}
</style>