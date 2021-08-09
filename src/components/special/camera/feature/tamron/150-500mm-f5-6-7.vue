<template>
  <v-app>
    <div class="150500mmf567">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 画像の読み込み -->
        <v-card class="mb-4">
          <v-img
            src="/ec/images2/special/camera/tamron/150-500mm-f5-6.7/bg_top.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
            max-width="950px"
          >
            <v-card-title>タムロン 150-500mm F/5-6.7 Di III VC VXD (Model A057)<br />タムロン 11-20mm F/2.8 Di III-A RXD (Model B060)</v-card-title>
            <v-card-text
              >新たな撮影領域をカバーする<br />
              趣向の異なる2本のEマウント用ズームレンズ<br />
            </v-card-text>
          </v-img>
        </v-card>
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">Model A057 / Model B060 好評発売中！</span>
        </div>

        <p class="darken-2 text-left">タムロン 150-500mm F/5-6.7 Di III VC VXD・タムロン 11-20mm F/2.8 Di III-A RXD</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'今までカバーできなかった撮影領域に対応する趣向の異なる2本のズームレンズ'" />
        <p class="text-sibtitle-2">手軽に超望遠撮影が楽しめるフルサイズ対応望遠ズームレンズ&コンパクトなボディにマッチするAPS-C対応大口径広角ズームレンズ</p>

        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD・タムロン 11-20mm F/2.8 Di III-A RXD 価格・ご購入'" />

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

        <!--====== 高価下取り ======-->
        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD ご購入時、高価下取り実施中！'" />

        <v-container class="credit mb-6 float-left">
          <v-row>
            <v-col class="text-center" cols="12" sm="4">
              <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006727&pattern=1&_ga=2.97290847.1902037495.1627264363-279164427.1627285160"
                ><v-img
                  src="https://shopimg.kitamura.jp/images/pd/84c/80e/94d/0b7/28c/ed5/c00/ecf/d2d/cba/9c3/dwm/e9p/k/M.jpg"
                  max-width="100%"
                  height="auto"
                ></v-img
              ></a>
              <p>タムロン 70-300mm F/4.5-6.3 Di III RXD ソニーEマウント用（Model A047）</p>
            </v-col>
            <v-col class="text-center mt-4" cols="12" sm="8">
              <p class="ma-0 pa-0 text-left font-small">
                タムロン 150-500mm F/5-6.7 Di III VC VXDをご購入時、<br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006727&pattern=1" target="_blank"
                  >・タムロン 70-300mm F/4.5-6.3 Di III RXD ソニーEマウント用（Model A047）</a
                ><br />
                <a
                  href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006635&pattern=1&_ga=2.201748305.1902037495.1627264363-279164427.1627285160"
                  target="_blank"
                  >・タムロン 17-28mm F/2.8DiIII RXD ソニーEマウント用（Model A046）</a
                ><br />
                を高価下取り実施中です
              </p>
              <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006727&pattern=1&_ga=2.97290847.1902037495.1627264363-279164427.1627285160">
                <v-img
                  src="/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/bnr_shitadori_350-130.png"
                  alt="高値下取り実施中"
                  @error="noimage"
                ></v-img>
              </a>
              <p></p>
            </v-col>
          </v-row>
        </v-container>

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
              <contingencyTable :numberOfTimes="'48'" :amount="'4,061'" :commission="'0'" />
            </v-col>
          </v-row>
        </v-container>

        <!--動画で見る-->
        <subText :textItem="'動画で見る タムロン 11-20mm F/2.8 Di III-A RXDD'" />
        <p class="text-center">タムロン 11-20mm F/2.8 Di III-A RXD</p>
        <div class="pa-4">
          <watchInVideo :src="'https://www.youtube.com/embed/_x_MVa-pFWE#?rel=0'" :width="'80%'" />
        </div>
        <!--動画で見る-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://www.tamron.jp/product/lenses/a057.html')"
            >メーカーサイトでModel A057の<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://www.tamron.jp/product/lenses/B060.html')"
            >メーカーサイトでModel B060の<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD 価格・人気アクセサリー'" />
        <v-container>
          <v-row>
            <v-col cols="6" sm="4" md="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
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
        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD 作例画像'" />
        <p>ソニー FE 14mm F1.8 GM 作例</p>
        <v-container>
          <v-row>
            <v-col :cols="12" :sm="3" class="ma-0 pa-0" v-for="exampleImage in exampleImagesList" :key="exampleImage">
              <a :href="exampleImage"><v-img class="mb-5" :src="exampleImage" max-width="100%"></v-img></a>
            </v-col>
          </v-row>
          <!-- <exampleImages :path="'/ec/images2/special/camera/feature/sony/fe14f18gm/'" :count="11" :sm="4" /> -->
          <v-row>
            <v-col :cols="12" :sm="3" class="ma-0 pa-0" v-for="exampleImage in exampleImagesList2" :key="exampleImage">
              <a :href="exampleImage"><v-img class="mb-5" :src="exampleImage" max-width="100%"></v-img></a>
            </v-col>
          </v-row>
          <p class="my-4">▼タムロン 11-20mm F/2.8 Di III-A RXD 作例画像</p>

          <v-row>
            <v-col :cols="12" :sm="3" class="ma-0 pa-0" v-for="exampleImage in exampleImagesList3" :key="exampleImage">
              <a :href="exampleImage"><v-img class="mb-5" :src="exampleImage" max-width="100%"></v-img></a>
            </v-col>
          </v-row>

          <v-row>
            <v-col :cols="12" :sm="3" class="ma-0 pa-0" v-for="exampleImage in exampleImagesList4" :key="exampleImage">
              <a :href="exampleImage"><v-img class="mb-5" :src="exampleImage" max-width="100%"></v-img></a>
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
import ExampleImages from '@/components/common/example-image.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'tamron-150500mmf567',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    // exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    watchInVideo: WatchInVideo
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: 'Model A057 動画', href: '#move' },
        { naviItem: 'Model B060 動画', href: '#move2' },
        { naviItem: '作例画像', href: '#images' }
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
          href: 'https://shop.kitamura.jp/sitemap/s_credit_01.html',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
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
      ],
      exampleImagesList: [
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_01.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_02.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_03.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_04.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_06.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_07.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_08.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_09.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_010.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_011.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_012.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_013.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_015.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_016.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_017.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_018.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_020.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_021.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_022.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_023.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_024.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_025.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_026.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_027.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_028.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_029.jpg'
      ],
      exampleImagesList2: [
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_05.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_014.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pic_019.jpg'
      ],
      exampleImagesList3: [
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_01.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_02.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_04.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_05.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_06.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_07.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_09.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_010.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_011.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_012.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_013.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_015.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_016.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_017.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_018.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_020.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_022.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_023.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_024.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_025.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_027.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_028.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_029.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_030.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_031.jpg'
      ],
      exampleImagesList4: [
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_03.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_08.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_021.jpg',
        '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/pi_026.jpg'
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
          path: 'タムロン 150-500mm F/5-6.7 Di III VC VXD',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960371006741', '4960371006758'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960371006741',
        '4957638817141',
        '4960371006758',
        '4957638817110',
        '4906238819697',
        '4977187330878',
        '4977187330045',
        '4902520009609'
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