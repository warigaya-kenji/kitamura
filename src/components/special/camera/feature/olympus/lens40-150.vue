<template>
  <v-app>
    <div class="olympus-lens40-150">
      <div class="w720">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <urlcopy />
        <v-card
          img="/ec/images2/special/camera/feature/olympus/lens40-150/bg_top.jpg"
          width="720"
          height="180"
          class="white--text"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <h1 class="pt-6 pl-8 text-h5">オリンパス M.ZUIKO DIGITAL<br />ED 40-150mm F2.8 PRO</h1>
          <h2 class="pt-3 pl-9 text-subtitle-1">レビュー＆作例写真</h2>
        </v-card>
        <v-img
          v-else
          src="/ec/images2/special/camera/feature/olympus/lens40-150/sp_img_top.jpg"
          max-width="100%"
          height="auto"
          alt="オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO マイクロフォーズレンズ新製品 レビュー＆作例写真"
        ></v-img>
        <naviBtn :naviList="naviList" :color="'grey'" />

        <!--レビュー-->
        <subText :textItem="'オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO レビュー'" id="revue" />
        <p class="pttex">
          待ちに待った、オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO 交換レンズを使ってみました！<br />
          <span class="marker"><strong>オリンパス M.ZUIKO DIGITAL ED 12-40mm F2.8 PROと組み合わせれば、35mm換算で、24mm-300mmまでF2.8でカバー</strong></span
          >。この2本があれば、ありとあらゆる撮影に対応できそうです。<br />まさに、気軽に使えるサンニッパ！<br />
          しかもマイクロフォーサーズならでは、ボディも含めて小型が嬉しい。<span class="marker"
            ><strong>小さめのカメラバックでも、ボディとレンズ2本を簡単に持ち運びできます</strong></span
          >。このメリットはすごい！<br />
          ミラーレス系のレンズとしては、重量系と言えますが、デジタル一眼レフ系から比べれば、やはり小型で軽量。しかも、<span class="marker"
            ><strong>コストパフォーマンスも いい</strong></span
          >。
        </p>
        <a href="/ec/images2/special/camera/feature/olympus/lens40-150/img_00.jpg" target="_blank">
          <v-img src="/ec/images2/special/camera/feature/olympus/lens40-150/img_00.jpg" max-width="100%" height="auto"></v-img>
        </a>
        <p class="pttex">
          さて、今回のM.ZUIKO DIGITAL ED 40-150mm F2.8 PROですが 何気ない街撮りから、スポーツ・鳥などの撮影もなんなくこなせる
          万能レンズ！なんせ機材が小さいから、フットワークも軽く撮影の フィールドも広がります。<br />
          今回、OM-D EM-1との組み合わせで40-150mmを装着。運よく、カワセミ を見つけたので、<span class="marker"
            ><strong>1.4xテレコンバーター</strong>も使ってみました。 <br />
            <span class="marker"><strong>35mm換算で420mm相当のF4になります</strong></span
            >。開放で使用しても非常にシャープな印象を受けました。
          </span>
        </p>

        <!-- ↓ 作例画像 -->
        <div id="image">
          <subText :textItem="'オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO 作例写真'" />
          <v-row>
            <v-col cols="12" v-for="(n, i) in 6" :key="i">
              <v-img :src="`${exampleImagesPath}img_0${n}.jpg`" max-width="100%" height="auto"></v-img>
            </v-col>
          </v-row>
        </div>

        <!--価格・人気アクセサリ-->
        <subText :textItem="'オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO 価格・商品一覧'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';

export default Vue.extend({
  name: 'olympus-lens40-150',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
    naviBtn: NaviBtn,
  },
  setup: () => {
    document.title = 'オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO レビュー＆作例写真 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'OLYMPUSの新製品交換レンズ｢オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO｣のレビューページ。テレコンバーターキットを使った作例写真や価格をチェック！全国1000店舗のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/olympus/lens40-150/',
      naviList: [
        { naviItem: 'レビュー', href: '#revue' },
        { naviItem: '作例写真', href: '#image' },
        { naviItem: '価格・商品一覧', href: '#price' },
      ],
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
          path: 'オリンパスM.ZUIKO ED40-150mmF2.8PRO レビュー＆作例写真',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350047726',
        '4545350047719',
        '4545350047535',
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
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
.olympus-lens40-150 {
  .w720 {
    max-width: 720px;
    margin: 0 auto;
  }
  p {
    font-size: 15px;
    line-height: 1.5em;
  }
}
</style>