<template>
  <v-app>
    <div class="highly_recommended-4722">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <h1 class="text-h6 font-weight-bold">
          コンパクトなフルサイズミラーレス『EOS Rシリーズ』にピッタリサイズの大三元Lレンズ キヤノン RF70-200mm F2.8 L IS USM
        </h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4722/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4722/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↑top image -->
        <h2 class="text-body-2">従来の望遠ズームLレンズよりも大幅にコンパクト＆軽量化を実現しました</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF70-200mm F2.8 L IS USM'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'コンパクト＆軽量なキヤノン RF70-200mm F2.8 L IS USM は、キヤノンフルサイズミラーレスをお持ち、もしくは購入検討中のハイアマチュアユーザーにおすすめの望遠レンズ！'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          従来の望遠ズームLレンズよりも大幅にコンパクト＆軽量化を実現しました
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          大幅にコンパクト化されながらも中心部から周辺部まで高画質を実現！<br />今までの望遠ズームLレンズよりも軽量化されていますので持ち運びがしやすくなりました。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          最短撮影距離は0.7m、従来の望遠ズームLレンズよりも約0.5m短縮を実現！<br />
          それによりこのレンズ1本で幅広い撮影表現が可能になりました。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'キヤノン RF70-200mm F2.8 L IS USM と他レンズと比較してみました'" />
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
                        class="hover mx-auto"
                      ></v-img>
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>フィルターサイズ</th>
                  <td>77mm</td>
                  <td>77mm</td>
                  <td>82mm</td>
                  <td>77mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約1070g</td>
                  <td>約1480g</td>
                  <td>約1805g</td>
                  <td>約1500g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約89.9mm</td>
                  <td>199mm</td>
                  <td>約202.9mm</td>
                  <td>約193.8mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>13群17枚</td>
                  <td>19群23枚</td>
                  <td>22群24枚</td>
                  <td>17群23枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】RFマウントの大口径・ショートバックフォーカスを生かした、カメラ側の撮像面近くへの大口径レンズの配置と、全長が変わるズーム...<a
                      href="/ec/pd/4549292156263/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】特殊コーティング「ASC」を採用し、フレアやゴーストを大幅に抑制し、逆光性能を向上。さまざまな撮影環境下で高画質を実現。蛍石レンズ...<a
                      href="/ec/pd/4549292118513/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】軽量化と堅牢性を両立するためにマグネシウムを積極的に採用し、高い機動性を確保。過酷な撮影環境でも安心して使えるよう各部に...<a
                      href="/ec/pd/0085126590543/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】高い解像・コントラスト性能と美しいボケの両立、テレコンバーターにも対応。XLDレンズ、LDレンズを適切に配置することで、大口...<a
                      href="/ec/pd/4960371006246/"
                      >続きを読む</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：AF性能動画やメーカーコメントなど盛り沢山！「キヤノン RF70-200mm F2.8 L IS USM」レビュー'" id="r03" />
        <shasha
          :txt="'70-200mm F2.8のレンズといえば、AFスピードが速いため、スポーツや乗り物など動く被写体を撮影される方はもちろん、中望遠レンズならではの圧縮効果と、美しいボケ味からポートレートで使用する・・・・'"
          :href="'https://shasha.kitamura.jp/article/471106987.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549292156263'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4722/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
export default Vue.extend({
  name: 'highly_recommended-4722',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    tableOfContentsNavi: TableOfContentsNavi,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スポーツや乗り物、動物など、動く被写体の撮影をする人に、AFスピードが速いキヤノン RF70-200mm F2.8 L IS USMがおすすめ！')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'キヤノン RF70-200mm F2.8 L IS USM と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：AF性能動画やメーカーコメントなど盛り沢山！「キヤノン RF70-200mm F2.8 L IS USM」レビュー', href: '#r03' },
        { naviItem: '商品一覧', href: '#r04' }
      ],
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
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフのイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292156263'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292156263', '4549292118513', '0085126590543', '4960371006246'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292156263',
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
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