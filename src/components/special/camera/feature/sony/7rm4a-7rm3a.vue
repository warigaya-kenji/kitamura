<template>
  <v-app>
    <div class="7rm4a-7rm3a">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/sony/7rm4a-7rm3a/bg_top.jpg" @error="noimage" />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>

        <subText :textItem="'ソニー α7R IV A & α7R III A 価格・ご購入'" />

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

        <!-- ↓ 作例画像 -->
        <subText :textItem="'オリンパス PEN E-P7 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/7rm4a-7rm3a/'" :count="7" />

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
import SubText from '@/components/common/subtext.vue';
import ExampleImages from '@/components/common/example-image.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: '7rm4a-7rm3a',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
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
      mainProductJanCode: ['4548736128477', '4548736128378'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736128477',
        '4548736105546',
        '4548736128378',
        '4548736047419',
        '4548736121249',
        '4548736064621',
        '4548736064522',
        '4548736109520',
        '4548736100664',
        '4548736067714',
        '4560376574360',
        '4560376577996'
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
</style>