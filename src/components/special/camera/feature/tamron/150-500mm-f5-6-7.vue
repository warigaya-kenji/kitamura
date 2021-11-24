<template>
  <v-app>
    <div class="150500mmf567">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/bg_top.png'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/sp_img_top.png'"
          :topTitle="'タムロン 150-500mm F/5-6.7 Di III VC VXD (Model A057)\nタムロン 11-20mm F/2.8 Di III-A RXD (Model B060)'"
          :topTitleText="'新たな撮影領域をカバーする\n趣向の異なる2本のEマウント用ズームレンズ'"
          :padding="'170px 0px 15px 40px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">Model A057 / Model B060 好評発売中！</span>
        </div>

        <p class="darken-2 text-left">タムロン 150-500mm F/5-6.7 Di III VC VXD・タムロン 11-20mm F/2.8 Di III-A RXD</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'teal accent-4'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'今までカバーできなかった撮影領域に対応する趣向の異なる2本のズームレンズ'" />
        <p class="text-sibtitle-2">手軽に超望遠撮影が楽しめるフルサイズ対応望遠ズームレンズ&コンパクトなボディにマッチするAPS-C対応大口径広角ズームレンズ</p>

        <!--====== ↓ 価格・ご購入ー ======-->
        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD・タムロン 11-20mm F/2.8 Di III-A RXD 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD ご購入時、高価下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!--動画で見る-->
        <div id="move">
          <subText :textItem="'動画で見る タムロン 150-500mm F/5-6.7 Di III VC VXD'" />
          <p class="text-center mb-0">タムロン 150-500mm F/5-6.7 Di III VC VXD</p>
          <watchInVideo :src="'https://www.youtube.com/embed/f38JPyFqLCs#?rel=0'" />
        </div>

        <div id="move2">
          <subText :textItem="'動画で見る タムロン 11-20mm F/2.8 Di III-A RXDD'" />
          <p class="text-center mb-0">タムロン 11-20mm F/2.8 Di III-A RXD</p>
          <watchInVideo :src="'https://www.youtube.com/embed/_x_MVa-pFWE#?rel=0'" />
        </div>
        <!--動画で見る-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトでModel A057の\n仕様・作例を詳しく見る'"
          :url="'https://www.tamron.jp/product/lenses/a057.html'"
          :height="'70px'"
        />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトでModel B060の\n仕様・作例を詳しく見る'"
          :url="'https://www.tamron.jp/product/lenses/B060.html'"
          :height="'70px'"
        />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'タムロン 150-500mm F/5-6.7 Di III VC VXD ・タムロン 11-20mm F/2.8 Di III-A RXD 作例画像'" />
          <p>▼タムロン 150-500mm F/5-6.7 Di III VC VXD 作例画像</p>
          <v-container>
            <v-row>
              <v-col :cols="12" :sm="3" class="ma-0 pa-0" v-for="exampleImage in exampleImagesList" :key="exampleImage">
                <a :href="exampleImage"><v-img class="mb-5" :src="exampleImage" max-width="100%"></v-img></a>
              </v-col>
            </v-row>
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'tamron-150500mmf567',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    watchInVideo: WatchInVideo,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPurchase: PriceAndPurchase,
    expensiveTradeIn: ExpensiveTradeIn,
    priceAndPopular: PriceAndPopular,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'タムロン 150-500mm F/5-6.7 Di III VC VXD | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'タムロン 150-500mm F/5-6.7 Di III VC VXD 好評発売中！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
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
          href: '/ec/guide/s_credit_01',
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
          alt: 'トクトク買取',
          target: 'blank'
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
      ],
      expensiveTradeInList: {
        name: 'タムロン 70-300mm F/4.5-6.3 Di III RXD ソニーEマウント用（Model A047）',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006727&pattern=1&_ga=2.199073647.1712661879.1629071621-279164427.1627285160',
        nameImg: '	https://shopimg.kitamura.jp/images/pd/84c/80e/94d/0b7/28c/ed5/c00/ecf/d2d/cba/9c3/dwm/e9p/k/M.jpg',
        txt: 'タムロン 150-500mm F/5-6.7 Di III VC VXD',
        tradeInImg: '/ec/images2/special/camera/feature/tamron/150-500mm-f5-6.7/bnr_shitadori_350-130.png',
        tradeInProducts: [
          {
            name: 'タムロン 70-300mm F/4.5-6.3 Di III RXD ソニーEマウント用（Model A047）',
            href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006727&pattern=1&_ga=2.171406048.1712661879.1629071621-279164427.1627285160'
          },
          {
            name: 'タムロン 17-28mm F/2.8DiIII RXD ソニーEマウント用（Model A046）',
            href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960371006635&pattern=1&_ga=2.171406048.1712661879.1629071621-279164427.1627285160'
          }
        ]
      },
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