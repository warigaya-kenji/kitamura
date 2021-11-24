<template>
  <v-app>
    <div class="highly-recommended-2019-4194">
      <div class="main-contents-wrap text-body-2">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="pa-4 text-sm-h6 text-subtitle-1 font-weight-bold">おすすめコンパクトデジカメ リコー GR III</h1>
        <v-img src="/ec/images2/special/general/highly_recommended/2019/4194/bg_top.jpg" max-width="100%" height="auto"></v-img>

        <p class="pt-4">写真が趣味な人、ちょっと写真にこだわりたい人におすすめ高級コンパクトデジカメです</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'リコー GR III'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'プロユースにも応える高画質とスナップ写真に最適な小型軽量ボディを両立'"
          :btntxt="'商品ページを見る'"
        />

        <!-- ↓ トピック -->
        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height">
          写真が趣味な人、ちょっと写真にこだわりたい人におすすめ高級コンパクトデジカメ<br />
          ポケットに収まる"一眼画質"
          とろけるボケ味と、ストレスなく撮影できるレスポンスの速さで、撮影がより楽しくなります。一眼レフまではちょっと。。。でも高画質にこだわりたい。コンパクトでカメラを身近に使って写真生活を送りたい人に使ってもらいたいデジタルカメラです。
        </v-sheet>
        <br />

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" :title="'目次'" />

        <!--比較-->
        <div id="no1">
          <subText :textItem="'リコー GR III・リコー GR II 性能・比較'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年3月15日</td>
                  <td>2015年7月17日</td>
                </tr>

                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2424万画素</td>
                  <td>約1620万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>23.5mm x 15.6mm CMOS</td>
                  <td>23.7 x 15.7 mm CMOS</td>
                </tr>
                <tr></tr>
                <tr>
                  <th>光学ズーム</th>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>（35mm換算）：28mm</td>
                  <td>（35mm換算）：約28mm</td>
                </tr>
                <tr>
                  <th>撮影距離</th>
                  <td>標準: 約0.1m-∞ マクロ: 約0.06m-0.12m</td>
                  <td>標準：0.3m-∞ マクロ：0.1m-∞</td>
                </tr>
                <tr>
                  <th>レンズ開放F値</th>
                  <td>f/2.8-F16</td>
                  <td>f/2.8-F16</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約20.0コマ/秒</td>
                  <td>最高 約24.0コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒</td>
                  <td>1/4000-300秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100-25600</td>
                  <td>125-25600</td>
                </tr>
                <tr>
                  <th>内蔵メモリ</th>
                  <td>約2GB</td>
                  <td>54MB</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約200枚</td>
                  <td>約320枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約109.4 x 61.9 x 33.2 mm</td>
                  <td>約117 x 62.8 x 34.7 mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約257g(バッテリー、SDメモリーカード含む)、約227g(本体のみ)</td>
                  <td>約251g（電池、SDメモリーカード含む） 約221g(本体のみ)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：実際に使ってみました！リコー GR III作例'" id="no2" />
        <shasha
          :txt="'2018年9月、ニコンやキヤノンが初となるフルサイズミラーレスカメラを発表し、カメラ業界がお祭りのような熱がある中、リコーからも新しいカメラが発表されました。名前は「GRIII」。初めてのフルサイズミラーレスカメラではなく、代々受け継がれている“コンデジ”です。安いと思われがちなコンデジの市場において、比較的良いお値段に感じる方もいるかもしれない高級なコンデジです。「さぞいいカメラなんだろうな」と思いポケットの中へ入れ、いざ街へ出かけました。'"
          :href="'https://shasha.kitamura.jp/article/466446439.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549212300202'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4194/shashabnr.jpg'"
        />
        <shasha
          :txt="''"
          :href="'https://shasha.kitamura.jp/article/467692882.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549212300202'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4194/2shashabnr.jpg'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る キヤノン EOS R5！'" id="no3" />
        <watchInVideo :src="'https://www.youtube.com/embed/DGZWq-ZIlto'" :height="400" :sm="12" />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'リコー GR III 関連商品一覧'" id="no4" />
        <priceAndPopular :productDetailList="productDetailList" />

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
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'highly-recommended-2019-4194',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
    watchInVideo: WatchInVideo,
  },
  setup: (props, context) => {
    document.title = 'おすすめコンパクトデジカメ！リコーGRⅢ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真が趣味な人、ちょっと写真にこだわりたい人におすすめ 高級コンパクトデジカメ「リコー GR III」の紹介')
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
          path: 'リコー GR III',
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
        { naviItem: 'リコー GR III・リコー GR II 性能・比較', href: '#no1' },
        { naviItem: 'ShaSha：実際に使ってみました！リコー GR III 作例 ', href: '#no2' },
        { naviItem: '動画で見る「リコー GR III 」', href: '#no3' },
        { naviItem: '関連商品一覧', href: '#no4' },
      ],
      mainProductJanCode: ['4549212300202',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549212300202', '4961311902550'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4549212300202',
        '4549212300554',
        '4549212300387',
        '4549212300349',
        '4961607072936'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,

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
