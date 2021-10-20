<template>
  <v-app>
    <div class="highly_recommended-4872">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <h1 class="text-h6 font-weight-bold">800mm相当の撮影が手軽に楽しめる小型軽量超望遠ズームレンズ M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4872/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4872/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <h2 class="text-body-2">昆虫や花など小さな被写体も撮影可能</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS ブラック'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'超望遠撮影・望遠マクロ撮影を手軽に行いたい、マイクロフォーサーズユーザーにおすすめです！'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          200～800mm相当の超望遠撮影を実現する小型軽量ズームレンズなので、手軽に望遠撮影が楽しめます。<br />
          PROレンズ譲りの防塵・防滴性能も併せ持っており、幅広いフィールドで高画質な超望遠撮影が可能です。<br />
          レンズ内手ブレ補正搭載。<br />
          迫力のテレマクロ撮影も可能です。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          35mm換算で200～800mmをカバーする超望遠性能と小型軽量を両立した高性能なズームレンズ。<br />
          別売の2倍テレコンバーター MC-20を使用すれば最大1600mmでの驚異的な超望遠撮影が可能です。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          望遠域で威力を発揮するレンズ内手ブレ補正を搭載。<br />
          どのカメラボディーと組み合わせても、手ブレを抑えた安定した撮影が楽しめます。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS と他のレンズを比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/458/71c/7ce/931/fd6/a44/7cd/b70/a85/779/516/ydd/urp/4/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/790/11f/6e9/99c/c37/9ee/8f5/c0c/454/035/c56/rtw/vk2/s/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/d06/db1/cda/14f/eef/135/35e/432/333/b3d/103/qr1/wqa/v/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/dad/0f7/96b/e3f/f0e/813/7a5/9b7/90d/98f/14b/k03/ocz/h/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 174 : 59"
                      height="auto"
                    />
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
                  <td>72mm</td>
                  <td>58mm</td>
                  <td>67mm</td>
                  <td>72mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約1120g</td>
                  <td>約423g</td>
                  <td>約520g</td>
                  <td>約985g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>205.7mm</td>
                  <td>約116.5mm</td>
                  <td>約126mm</td>
                  <td>約171.5mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>15群21枚（EDレンズ4枚,スーパーHRレンズ2枚,HRレンズ2枚）</td>
                  <td>13群18枚</td>
                  <td>12群17枚</td>
                  <td>13群20枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】レンズ単体では200-800mm相当、望遠域をさらに拡大する別売のテレコンバーター「M.ZUIKO DIGITAL 1.4x Teleconverter MC-14」 「M.ZUIKO
                    DIGITAL 2...<a href="/ec/pd/4545350053055/">続きを読む</a>
                  </td>
                  <td>
                    【製品特徴】35mm判換算で150-600mm相当の超望遠域を、わずか423gの軽量設計で実現。ゴーストやフレアを徹底的に排除する...<a
                      href="/ec/pd/4545350043742/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】 スポーツシーンや遠くにいる被写体などをグッと引き寄せる200-600mm超望遠ズームレンズ。Dual I.S. 2対応＆防塵・防滴仕様...<a
                      href="/ec/pd/4549077890542/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】 ズーム全域で優れた描写特性を実現「LEICA DG VARIO-ELMAR」レンズ。野鳥・スポーツ等の被写体からマクロ撮影まで...<a
                      href="/ec/pd/4549077505309/"
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
        <subText :textItem="'ShaSha：PROレンズに肉薄する画質を誇る超望遠ズームレンズ オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS レビュー'" id="r03" />
        <shasha
          :txt="'マイクロフォーサーズ最長焦点距離のズームレンズが誕生。より遠くのものを大きく撮影することができる オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS。主なスペックと外観、実写にて画質を検証・・・・'"
          :href="'https://shasha.kitamura.jp/article/476806995.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4545350053055'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4872/shashabnr.png'"
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
  name: 'highly_recommended-4872',
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
    document.title = 'スタッフイチオシ！オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 ISは超望遠撮影・望遠マクロ撮影を手軽に行いたい、マイクロフォーサーズユーザーにおすすめ！')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS と他のレンズを比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：PROレンズに肉薄する画質を誇る オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS レビュー', href: '#r03' },
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
          alt: 'トクトク買取'
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
          path: 'スタッフイチオシ！ニコン D5600',
          disabled: true
        }
      ],
      mainProductJanCode: ['4545350053055'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350053055', '4545350043742', '4549077890542', '4549077505309'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350053055',
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

<style scoped>
.sen-gl {
    border: #B8B8B8 1px solid !important;
    box-sizing: border-box;
}
</style>