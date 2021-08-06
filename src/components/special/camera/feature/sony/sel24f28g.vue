<template>
  <v-app>
    <div class="sel24f28g">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/feature/pentax/k3mk3/'" />

        <!-- ↓ トップ画像 -->
        <div class="newproduct top-bg-img">
          <h1 class="top-title">
            ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G
            <p>高画質と美しいぼけを小型軽量設計で実現<br />撮影する楽しさが体験できる3本の高性能Gレンズ</p>
          </h1>
        </div>
        <!-- ↑ トップ画像 -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <subText :textItem="'高い解像性能と美しいぼけ、高性能AFを高品位ボディに搭載した単焦点Gレンズ'" />

        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 高価下取り -->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G ご購入時、高価下取り実施中！'" />
        <v-container class="mb-6">
          <v-row>
            <v-col class="text-center" cols="12" sm="4">
              <a
                href="https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001985&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=1"
                ><v-img src="//shopimg.kitamura.jp/images/pd/9ef/9ca/fc9/cd6/bc5/632/3c9/906/266/19b/a0q/qb4/2ba/o/M.jpg" max-width="100%" height="auto"></v-img
              ></a>
              <p>ソニー FE 28mm F2 [SEL28F20]</p>
            </v-col>
            <v-col class="text-center mt-4" cols="12" sm="8">
              <p class="ma-0 pa-0 text-left font-small">
                ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 Gをご購入時、<br />

                <a
                  href="https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001985&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=1&_ga=2.75800919.330135400.1628123922-279164427.1627285160"
                  target="_blank"
                  >・ソニー FE 28mm F2 [SEL28F20]</a
                ><br />
                <a
                  href="https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736099838&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=kw&lc=40&quick=&pattern=1&_ga=2.77581527.330135400.1628123922-279164427.1627285160"
                  target="_blank"
                  >・ソニー FE 35mm F1.8 [SEL35F18F]</a
                ><br />
                <a
                  href="https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736099838&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=kw&lc=40&quick=&pattern=1&_ga=2.77581527.330135400.1628123922-279164427.1627285160"
                  target="_blank"
                  >・ソニー FE 50mm F1.8 [SEL50F18F]</a
                >
                を高価下取り実施中です
              </p>
              <a
                href="https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001985&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=1&_ga=2.120180170.330135400.1628123922-279164427.1627285160"
              >
                <v-img src="/ec/images2/special/camera/feature/sony/sel24f28g/bnr_shitadori_350-130.png" alt="高値下取り実施中" @error="noimage"></v-img>
              </a>
              <p></p>
            </v-col>
          </v-row>
        </v-container>

        <div class="col-sm-12 text-center pa-4">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-subtitle-1"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://www.sony.jp/ichigan/products/SEL24F28G/index.html')"
            >メーカーサイトで FE 24mm F2.8 G<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <div class="col-sm-12 text-center pa-4">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-subtitle-1"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://www.sony.jp/ichigan/products/SEL40F25G/index.html')"
            >メーカーサイトで FE 40mm F2.5 G<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <div class="col-sm-12 text-center pa-4">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-subtitle-1"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://www.sony.jp/ichigan/products/SEL40F25G/index.html')"
            >メーカーサイトで FE 50mm F2.5 G<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--比較-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G / 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="product in mainProductList" :key="product.janCode">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>4月23日発売</td>
                <td>4月23日発売</td>
                <td>4月23日発売</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in mainProductList" :key="product.janCode">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>レンズ構成</th>
                <td>7群8枚</td>
                <td>9群9枚</td>
                <td>9群9枚</td>
              </tr>
              <tr>
                <th>非球面レンズ（枚）</th>
                <td>3</td>
                <td>3</td>
                <td>2</td>
              </tr>
              <tr>
                <th>最短撮影距離</th>
                <td>24cm（MF時18cm）</td>
                <td>28cm（MF時25cm）</td>
                <td>35cm（MF時31cm）</td>
              </tr>
              <tr>
                <th>最大撮影倍率</th>
                <td>0.13倍（MF時0.19倍）</td>
                <td>0.2倍（MF時0.23倍）</td>
                <td>0.18倍（MF時0.21倍）</td>
              </tr>
              <tr>
                <th>フォーカス駆動</th>
                <td>リニアモーター×2</td>
                <td>リニアモーター×2</td>
                <td>リニアモーター×2</td>
              </tr>
              <tr>
                <th>絞り羽根（枚）</th>
                <td>7</td>
                <td>7</td>
                <td>7</td>
              </tr>
              <tr>
                <th>フィルター径</th>
                <td>49mm</td>
                <td>49mm</td>
                <td>49mm</td>
              </tr>
              <tr>
                <th>外寸 最大径ｘ長さ (mm)</th>
                <td>68 x 45</td>
                <td>68 x 45</td>
                <td>68 x 45</td>
              </tr>
              <tr>
                <th>質量</th>
                <td>約162g</td>
                <td>約173g</td>
                <td>約174g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!-- ↓ 動画で見る -->
        <subText :textItem="'動画で見る ソニー FE 24mm F2.8 G'" />
        <p>ソニー FE 50mm F2.5 G・FE 40mm F2.5 G・FE 24mm F2.8 G ～動画撮影にもおすすめのレンズ～</p>
        <watchInVideo :src="'https://www.youtube.com/embed/xg1eZ6GhHdw?rel=0'" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="mainProductList" />

        <!--↓ 外観画像ー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 外観画像'" />
        <p class="text-subtitle-1">ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 3" :key="n" cols="12" align="center">
              <v-img :src="`/ec/images2/special/camera/feature/pentax/k-3mk3/img_${n}.jpg`" max-width="100%" height="auto"> </v-img>
              <p v-if="n === 1">↑ソニー FE 24mm F2.8 G</p>
              <p v-if="n === 2">↑ソニー FE 40mm F2.5 G</p>
              <p v-if="n === 3">↑ソニー FE 50mm F2.5 G</p>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ 作例画像ー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 作例画像'" />
        <p>ソニー FE 24mm F2.8 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="4" />
        <p>ソニー FE 40mm F2.5 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="3" :target="4" />
        <p>ソニー FE 50mm F2.5 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="5" :target="7" />

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
import PriceAndPopular from '@/components/common/price-and-popular.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/subtext.vue';
import ExampleImages from '@/components/common/example-image.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
export default Vue.extend({
  name: 'sel24f28g',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo
  },
  data() {
    return {
      recommendedFeaturesList: [
        {
          herf: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          herf: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
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
          path: 'ペンタックス K-3 Mark III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736130593', '4548736130623', '4548736130654'],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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
.top-bg-img {
  background-image: url(https://shop.kitamura.jp/ec/images2/special/camera/feature/sony/bg_top.jpg);
}

h1.top-title {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 190px 0px 15px 30px;
  color: #ffffff;
  font-size: 115%;
  font-weight: bold;
}

h1.top-title p {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 0px 0px;
  color: #ffffff;
  font-size: 100%;
  font-weight: 400;
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