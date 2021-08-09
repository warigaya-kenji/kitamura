<template>
  <v-app>
    <div class="lensfilter">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/special/sale-fair/camera/feature/fujifilm/xf18mmf14-r-lm-wr/'" :color="'pink lighten-1'" />

        <v-img src="/ec/images2/special/camera/girlscamera/bg_title-box.jpg" max-width="95%" height="auto" />

        <!--↓アンカー-->
        <v-container>
          <p class="py-4">女子におすすめミラーレス一眼カメラ</p>
          <v-row class="mb-6">
            <v-col cols="12" sm="4" v-for="(navi, index) in navibtn" :key="navi">
              <router-link :to="navi.href">
                <div class="bk-pnk white--text text-center rounded-lg">
                  <v-img :src="`/ec/images2/special/camera/lensfilter/ic0${index + 1}.png`" max-width="100%" height="auto"></v-img><br />
                  {{ navi.txt }}
                </div>
              </router-link>
            </v-col>
          </v-row>

          <div class="text-right">
            <v-btn elevation="6" class="bk-pnk white--text pa-2" href="#citms" width="50%"> おすすめミラーレス一覧 ≫ </v-btn>
          </div>
        </v-container>
        <!--↑アンカー-->

        <!--↓女子におすすめ☆人気のミラーレス一眼カメラ-->
        <p class="spec my-8">女子におすすめ☆人気のミラーレス一眼カメラ</p>

        <div class="my-10 pa-2 bd-wk rounded-lg">
          <v-row>
            <v-col cols="12" sm="6">
              <p class="cameratitle">風景&人物の自分撮りも広角で楽しめるDC-GF10W♪</p>
              <p class="my-4 line-height brown--text lighten-2">
                ■進化した「4Kセルフィー」で最高の一枚を<br />
                ■「夜景&自分撮りモード」は、夜景のブレを抑えて明るく鮮やかに撮影できます☆<br />
                ■エレガントなデザインは、おしゃれな女子にピッタリ♪
              </p>
              <v-img src="/ec/images2/special/camera/girlscamera/gf10_img02.webp" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/girlscamera/gf10_img01.webp" max-width="100%" height="auto"></v-img>
              <v-btn
                block
                elevation="6"
                class="bk-pnk white--text pa-2 my-4"
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=DC-GF10W&category=&r=&index=&searchbox=1&q=DC-GF10W&path="
                height="60"
              >
                女子におすすめミラーレス一眼カメラ<br />パナソニック LUMIX DC-GF10W ≫
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div class="my-10 pa-2 bd-wk rounded-lg">
          <v-row>
            <v-col cols="12" sm="6">
              <p class="cameratitle">自分らしく撮影を楽しめる PEN E-PL10</p>
              <p class="my-4 line-height brown--text lighten-2">
                ■一眼カメラらしい自然で美しいボケのある写真を簡単に撮影できます<br />
                ■カメラとスマートフォンの接続設定がさらにわかりやすくなりました<br />
                ■夜景やカフェなどの暗い場所でもカメラまかせで細部まできれいに撮れます
              </p>
              <v-img src="/ec/images2/special/camera/girlscamera/epl10_img01.webp" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/girlscamera/epl10_img02.jpg" max-width="100%" height="auto"></v-img>
              <v-img src="/ec/images2/special/camera/girlscamera/epl10_img03.jpg" max-width="100%" height="auto"></v-img>
              <v-btn
                block
                elevation="6"
                class="bk-pnk white--text pa-2 my-4"
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=PEN%20E-PL10&category=&r=&index=&searchbox=1&q=PEN%20E-PL10&path="
                height="60"
              >
                女子におすすめミラーレス一眼カメラ<br />オリンパス PEN E-PL10 ≫
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div class="my-10 pa-2 bd-wk rounded-lg">
          <v-row>
            <v-col cols="12" sm="6">
              <p class="cameratitle">カメラ女子×Nikon１</p>
              <v-img src="/ec/images2/special/camera/girlscamera/camera-b.webp" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="my-4 line-height brown--text lighten-2">
                ■連写速度が速いので、子どもやペットなどの動く被写体も得意♪大切な瞬間を逃しません<br />
                ■コンパクトなので、お出かけのおともにピッタリ☆<br />
                ■自分撮りがしやすいモニターと、8つのメイクアップ効果でかんたんキレイに残せます♪
              </p>
              <v-btn
                block
                elevation="6"
                class="bk-pnk white--text pa-2 my-4"
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=PEN%20E-PL10&category=&r=&index=&searchbox=1&q=PEN%20E-PL10&path="
                height="60"
              >
                女子におすすめミラーレス一眼カメラ<br />ニコン Nikon1 J5 ≫
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!--↓ 価格・人気アクセサリー-->
        <p class="spec my-12">女子に人気のミラーレス・デジカメ 商品一覧</p>
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ ショッピングクレジット-->
        <p class="spec mt-12">
          <span class="text-subtitle-2">デジカメを買うなら、お支払いラクラク♪<br /></span>ショッピングクレジット
        </p>
        <p>
          カメラのキタムラおすすめの『ショッピングクレジット』なら、<span class="red--text amber lighten-3">最長48回払いまで金利手数料が「0円」</span
          >!<br />ショッピングクレジットをぜひご利用ください！
        </p>
        <h3>分割払い例</h3>
        <v-container class="ma-2 ba-gr">
          <v-row class="mb-4">
            <v-col cols="12" sm="6">
              <p class="mb-2 text-h6">分割払い例①</p>
              <installmentPaymentExample :productPrice="'84,910'" :numberOfDivisions="'20'" :monthlyPayment="'4,246'" />
            </v-col>
            <v-col cols="12" sm="6">
              <p class="mb-2 text-h6">分割払い例②</p>
              <installmentPaymentExample :productPrice="'58,310'" :numberOfDivisions="'10'" :monthlyPayment="'5,831'" />
            </v-col>
          </v-row>
        </v-container>

        <p class="mt-2 caption">
          ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
        </p>
        <h4 class="bg-momo my-8">
          <v-btn block href="https://shop.kitamura.jp/sitemap/s_credit_01.html" class="white--text text-subtitle-1 font-weight-bold"
            >→ショッピングクレジットを詳しく見る</v-btn
          >
        </h4>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <p class="spec mt-12">おすすめ特集・プリントサービス</p>
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPopular from '@/components/common/price-and-popular.vue';
import InstallmentPaymentExample from '@/components/common/special/installmentPaymentExample.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'girlscamera',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    installmentPaymentExample: InstallmentPaymentExample,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/strap/',
          img: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          alt: 'カメラストラップ特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/dslr/',
          img: 'https://shop.kitamura.jp/images/banner/1350.gif',
          alt: '今人気の一眼レフ＆ミラーレス特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/pet/',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4867/',
          img: 'https://shopimg.kitamura.jp/images/banner/7803.png',
          alt: 'イチオシinstax mini LiPlay'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          alt: 'インスタなどSNSで人気！今こそ使いたいフィルムカメラ'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://shasha.kitamura.jp/',
          img: 'https://shop.kitamura.jp/images/banner/8235.png',
          alt: 'ShaSha'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      navibtn: [
        { txt: 'パナソニック LUMIX GF10W ≫', href: '#caa' },
        { txt: 'オリンパス PEN E-PL10 ≫', href: '#cab' },
        { txt: 'vニコン Nikon1 J5 ≫', href: '#cac' }
      ]
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '女子がきゅんとくる ミラーレス一眼カメラ',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4549292109207',
        '4549292109399',
        '4549292109405',
        '4549292109191',
        '4549292109368',
        '4549292142433',
        '4549292142952',
        '4549292143010',
        '4549292146165',
        '4957792151648',
        '4549292142204',
        '4547410418484',
        '2500000222184',
        '4548736109087',
        '4548736108837',
        '4548736108523',
        '4548736122574',
        '4548736118584',
        '4546821921965',
        '4546821920890'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
.bk-pnk {
  background: rgb(255, 127, 149);
  background: linear-gradient(90deg, rgba(255, 127, 149, 1) 0%, rgba(231, 118, 199, 1) 100%);
  border: #f4c9d0 1px solid;
}

.v-btn {
  border-radius: 10px !important;
}

p.spec {
  background-image: url(/ec/images2/special/camera/girlscamera/bg_spec.gif);
  background-repeat: no-repeat;
  border-bottom: 2px solid #ff3366;
  font-size: 18px;
  font-weight: bold;
  height: auto;
  padding: 0 0 0px 35px;
  box-sizing: border-box;
  line-height: 1.3em;
  color: #603813;
}

.bd-wk {
  border: 1px solid #cba4b6;
}
.cameratitle {
  width: 100%;
  padding: 5px 0;
  background-image: url(/ec/images2/special/camera/girlscamera/bg_cameratitle.gif);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
</style>
