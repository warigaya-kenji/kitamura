<template>
  <v-app>
    <div class="fe14f18gm">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/sony/fe14f18gm/bg_top.jpg" @error="noimage" />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <p class="darken-2 text-left">オリンパス PEN E-P7</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'高い解像性能と美しいぼけ描写を小型軽量化した本体サイズで実現'" />
        <p class="text-sibtitle-2">幅広い撮影用途においてあらゆるクリエーターの創造性に応える大口径超広角単焦点レンズ</p>

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

        <!--↓ショッピングクレジット -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-container v-if="mainProductList.length != 0">
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
              <splitContent :numberOfTimes="'48'" :amount="'4,061'" :commission="'0'" />
            </v-col>
          </v-row>
        </v-container>

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー FE 14mm F1.8 GM [SEL14F18GM]'" />

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
        <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 価格・人気アクセサリー'" />
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
        <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 外観画像'" />
        <p class="text-subtitle-1">ソニー FE 14mm F1.8 GM [SEL14F18GM] の外観画像</p>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/olympus/pen_e-p7/img_1.jpg`"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー FE 14mm F1.8 GM [SEL14F18GM] 作例画像'" />
        <p>ソニー FE 14mm F1.8 GM 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/fe14f18gm/'" :count="11" :sm="4" />

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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'sony-fe14f18gm',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
    // watchInVideo: WatchInVideo
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '動画', href: '#hikaku' },
        { naviItem: '外観', href: '#images' },
        { naviItem: '作例画像', href: '#images2' }
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
          path: 'ソニー α7R IV A & α7R III A',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736131187'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4548736131187', '4977187330878', '4902520009609', '4977187330045'],
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