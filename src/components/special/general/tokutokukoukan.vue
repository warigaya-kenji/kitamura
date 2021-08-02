<template>
  <v-app>
    <div class="tokutokukoukan">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/general/tokutokukoukan/'" />

        <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-head01.jpg" max-width="100%" height="auto" />
        <p class="text-center">
          新しいデジカメ・カメラ・レンズの買替えをご検討のお客さまにおすすめ「トクトク交換」サービス<br />
          「ご購入予定の商品」と「お手持ちの下取り品」がトクトク交換対象品の場合、とってもお得に商品購入ができます
        </p>

        <v-row justify="center" align-content="center">
          <v-col cols="8" class="text-center">
            <router-link
              to="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&category=&index=all&sort=number20,Number17,Score&searchbox=1&q=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&path=&y=0&x=0"
            >
              <div class="white--text pa-4 green rounded-lg">
                <v-icon color="white">fas fa-search</v-icon><span class="text-h6">トクトク交換対象品を見る</span>
              </div></router-link
            >
          </v-col>
        </v-row>
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
  name: 'tokutokukoukan',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy
    // priceAndPopular: PriceAndPopular,
    // installmentPaymentExample: InstallmentPaymentExample,
    // facebookAndTwitter: FacebookAndTwitter,
    // recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      recommendedFeaturesList: [
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/strap/',
          img: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          alt: 'カメラストラップ特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/dslr/',
          img: 'https://shop.kitamura.jp/images/banner/1350.gif',
          alt: '今人気の一眼レフ＆ミラーレス特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/general/pet/',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          herf: '/ec/special/general/highly_recommended/2020/4867/',
          img: 'https://shopimg.kitamura.jp/images/banner/7803.png',
          alt: 'イチオシinstax mini LiPlay'
        },
        {
          herf: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          alt: 'インスタなどSNSで人気！今こそ使いたいフィルムカメラ'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          herf: 'https://shasha.kitamura.jp/',
          img: 'https://shop.kitamura.jp/images/banner/8235.png',
          alt: 'ShaSha'
        },
        {
          herf: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      navibtn: [
        { txt: 'パナソニック LUMIX GF10W ≫', herf: '#caa' },
        { txt: 'オリンパス PEN E-PL10 ≫', herf: '#cab' },
        { txt: 'vニコン Nikon1 J5 ≫', herf: '#cac' }
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
          path: 'デジカメ・レンズの買い替えは「トクトク交換」で下取り | カメラのキタムラ',
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
.w80 {
  width: 80%;
}
</style>
