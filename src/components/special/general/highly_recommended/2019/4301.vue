<template>
  <v-app>
    <div class="4301">
      <div class="main-contents-wrap line-height">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">おすすめ交換レンズ SAMYANG 12mm F2.0 NCS CS</h1>
        <a href="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2019/4357/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </a>
        <p class="pt-4">APS-Cミラーレスカメラユーザー・星景撮影や風景撮影におすすめの交換レンズです</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'超広角単焦点レンズ SAMYANG 12mm F2.0 NCS CS'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'APS-Cサイズのミラーレスカメラ専用に開発した、広い画角の低歪曲のマニュアルレンズ'"
          :btntxt="'商品ページを見る'"
        />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5">
            マニュアルフォーカスだけど、星景撮影や風景撮影におすすめ。フィルターが装着できるとってもリーズナブルな大口径超広角レンズ。サムヤンは単焦点マニュアルフォーカスレンズを主体とした（最近ではオートフォーカスレンズも作っています）韓国のレンズメーカーです
          </v-sheet>

          <!-- ↑ トピック -->
        </div>

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'超広角単焦点レンズとは'" id="no1" />
        <p class="my-2 pa-2">
          超広角レンズとは、広角レンズの中でも特に焦点距離が短いレンズです。明確な決まりはないのですが、一般的に24mm（35mm換算）よりも短い焦点距離のレンズを指します。<br />
          さらに、ズームがない単焦点構成にすることで画質が良いものになっています。被写体を広く写せるレンズであることはもちろん、ピントが合う奥行きが広く、遠近感がはっきり出るため迫力のある写真が撮れることが特徴です。
        </p>

        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'超広角単焦点レンズの選び方のポイント'" id="no2" />
        <p class="my-2 pa-2">
          超広角単焦点レンズは、撮りたい被写体や撮影する機材等の組み合わせが大事！<br />以下の点を踏まえてご検討ください<br /><br />
          ・単焦点レンズのため汎用性は低いです<br />
          ・焦点距離が短いほど、撮れる写真が歪んでいきます<br />
          ・1mm変わるだけで大きく写る範囲が変わります<br />
          ・星空や夜景、風景など開けた写真を撮りたい方は焦点距離が短いほどより迫力のある写真が撮れます<br />
          ・基本的に焦点距離が短いものを選びましょう！
        </p>
        <p class="my-2 pa-2">
          最近のデジタルカメラをお持ちなら、撮影後に画角を好みにトリミングしても画素数が高いため画質の劣化は少ないです。<br />
          不動産など仕事で建物を撮ることが多い方はできる限り歪みの少ないレンズを選ぶことが大事です。焦点距離が20mmを切るあたりから写真に歪みが目立つようになります。建物の場合はカメラや編集ソフトの歪み補正で不自然になることもあり、あらかじめ歪みの少ないレンズを検討ください。<br />
          また、以上の被写体は止まってる被写体のため、オートフォーカスを使う必要がないことが多いです。主導でピントをあわせるマニュアルフォーカスの超広角単焦点は価格が安く、選択肢も広がるのでおすすめ！<br /><br />
          スナップで広く全景を写しつつ主題を設ける写真は、思った瞬間にピントを合わせて写真が撮れるようオートフォーカスで、かつ主題が歪まない焦点距離を選びましょう！21mmや24mmといった焦点距離のレンズはスナップに使いやすくピントも合わせやすいのでおすすめです。
        </p>

        <!-- ↓おすすめ理由３ -->
        <!--比較-->
        <div id="no3">
          <subText :textItem="'SAMYANG 12mm F2.0 NCS CSと他おすすめレンズ比較'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      <v-img
                        :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '174' : '59'"
                        height="auto"
                        class="hover"
                      ></v-img>
                    </router-link>
                  </td>
                </tr>

                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>

                <tr>
                  <th>マウント</th>
                  <td>ソニー FEマウント</td>
                  <td>ソニー FEマウント</td>
                  <td>ソニー FEマウント</td>
                </tr>
                <tr></tr>
                <tr>
                  <th>タイプ</th>
                  <td>広角レンズ</td>
                  <td>広角レンズ</td>
                  <td>広角ズームレンズ</td>
                </tr>
                <tr>
                  <th>重さ</th>
                  <td>245g</td>
                  <td>500g</td>
                  <td>565g</td>
                </tr>
                <tr>
                  <th>焦点距離</th>
                  <td>18mm</td>
                  <td>15mm</td>
                  <td>12-24mm</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 APS-Cサイズのミラーレスカメラ専用に開発した、広い画角の低歪曲のマニュアルレンズ...<router-link to="/ec/pd/8809298881368"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 優れた仕様にもかかわらず、質量は約500g、全長は約8cmとコンパクト化に成功...<router-link to="/ec/pd/4541607612600"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 非球面レンズ4枚を含む新規光学設計により、超広角ながら絞り開放から高い解像性能を実現...<router-link to="/ec/pd/4548736058361"
                      >続きを読む</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--比較-->

        <!-- ↓おすすめ理由4 -->
        <subText :textItem="'ShaSha：実際に使ってみました！SAMYANG 12mm F2.0 NCS CS 作例'" id="no4" />
        <v-img
          src="/ec/images2/special/general/highly_recommended/2019/4301/1750.jpg"
          alt="作例イメージ"
          max-width="1000"
          max-height="auto"
          class="mx-auto"
        ></v-img>
        <shasha
          :txt="'今回はSAMYANG 12mm F2.0 NCS CSについてお話させていただきます。サムヤンは単焦点マニュアルフォーカスレンズを主体とした（最近ではオートフォーカスレンズも作っています）韓国のレンズメーカーです。\n日本に正規代理店がないころから、星と風景をいっしょに撮影する星景写真の分野で高い描写性能とコストパフォーマンスの高い価格によって、その分野への情報感度の高いユーザーから称賛されていました。現在では、日本国内の正規代理店はケンコー・トキナーが行っており、ユーザーサポートの面でも安心して購入できるレンズだと思います。\nそんなサムヤンのなかでも人気の高いSAMYANG 12mm F2.0 NCS CSはAPS-Cセンサー採用のミラーレス一眼向けで、キヤノン EF-M、ソニー E、フジフイルム X、マイクロフォーサーズ用のレンズがそれぞれ用意されています。価格もこれだけ明るい大口径超広角レンズとしては大変リーズナブルです。 APS-Cセンサーを採用したカメラを装着すると18mm相当（キヤノン EF-Mでは19mm相当、マイクロフォーサーズでは24mm相当）の画角※で開放F値2.0から撮影できます。それではSAMYANG 12mm F2.0 NCS CSの人気の秘密をみていきましょう...'"
          :href="'https://shasha.kitamura.jp/router-linkrticle/468820644.html'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4301/shashabnr.jpg'"
          class="shaim"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'SAMYANG 12mm F2.0 NCS CS関連商品一覧'" id="no5" />
        <product-list-by-special-id class="mb-5" :specialId="4301" />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'SAMYANG 12mm F2.0 NCS CS'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'SAMYANG 12mm F2.0 NCS CS APS-Cサイズのミラーレスカメラ専用に開発した、広い画角の低歪曲のマニュアルレンズ'"
          :btntxt="'商品ページを見る'"
        />
        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SubText from '@/components/common/special/subtext.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ShaSha from '@/components/common/special/shasha.vue';

export default Vue.extend({
  name: '4301',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId,
    shasha: ShaSha
  },
  setup: (props, context) => {
    document.title = 'イチオシ!交換レンズ！SAMYANG 12mm F2.0 NCS CS | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute('content', 'スタッフイチオシ！APS-Cミラーレスカメラユーザー・星景撮影や風景撮影におすすめの交換レンズです');
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'SAMYANG 12mm F2.0 NCS CS',
          disabled: true
        }
      ],
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/sale/shoppingcredit-campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
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
      // ↓ ---- ナビボタン ----

      naviList: [
        { naviItem: '超広角単焦点レンズとは', href: '#no1' },
        { naviItem: '超広角単焦点レンズの選び方のポイント', href: '#no2' },
        { naviItem: 'SAMYANG 12mm F2.0 NCS CSと他おすすめレンズ比較', href: '#no3' },
        { naviItem: 'ShaSha：実際に使ってみました！SAMYANG 12mm F2.0 NCS CS作例', href: '#no4' },
        { naviItem: '関連商品一覧', href: '#no5' }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['8809298881368', '4541607612600', '4548736058361'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['8809298881368'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      mainProductJanCode: ['8809298881368'],
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
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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
.line-g {
  background: url(/ec/images2/special/camera/bag/feature/trekking/bk_line.gif);
}
.product-waku {
  background: #f8fbd1;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.w50 {
  width: 50%;
}
.bg-kuri {
  background: #fff099;
}
.shaim img {
  max-width: 900px !important;
  max-height: auto;
}
</style>
