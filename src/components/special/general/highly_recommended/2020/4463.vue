<template>
  <v-app>
    <div class="highly_recommended-4463">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="text-h6 font-weight-bold">おすすめ交換レンズ！超広角レンズ</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4463/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4463/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <h2 class="text-body-2">キヤノン RF15-35mm F2.8 L IS USM 表現の幅を広げるRFマウント大口径広角ズームレンズ</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'表現の幅を広げるRFマウント大口径広角ズームレンズ'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          RFマウント専用では初となる広角ズームレンズです。 ズーム全域で開放F2.8と明るく、広角側の15mmから解像感があり、
          手ブレ補正機構（IS）を搭載しているので、扱いやすいレンズです。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          15mmから35mmまでの幅広い焦点距離をカバーしながら全域で開放F2.8の明るいため、風景やスナップ、ポートレートなどの撮影にピッタリなレンズです！レンズ表面にねじ込み式のフィルター（82mm径）を使用することもできるので、各種フィルターによる表現の違いも楽しめます。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          静止画撮影では約5段分となるレンズ内手ブレ補正（IS）を搭載。風景撮影時のスローシャッターはもちろん、星景や夜景などの暗いシーンでも撮影がしやすくなります。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM とおすすめ交換レンズを比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">
                    <router-link :to="`/ec/pd/${product.janCode}`">{{ product.itemName }}</router-link>
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      <v-img
                        :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '220' : '83'"
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
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>15-35mm</td>
                  <td>14-24mm</td>
                  <td>15-30mm</td>
                </tr>
                <tr>
                  <th>レンズF値</th>
                  <td>F2.8</td>
                  <td>F2.8</td>
                  <td>F2.8</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>キヤノンRFマウント</td>
                  <td>キヤノン EFマウント</td>
                  <td>キヤノン EFマウント</td>
                </tr>
                <tr>
                  <th>防塵・防滴機能</th>
                  <td>有</td>
                  <td>有</td>
                  <td>有</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む）</th>
                  <td class="bg-kuri">840g</td>
                  <td>1150g</td>
                  <td>1110g</td>
                </tr>

                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 大口径・ショートバックフォーカスがもたらすレンズ設計の高い自由度により、高画質化と小型化を両立...<router-link
                      to="/ec/pd/4549292152272/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 5000万画素を超える高画素機での使用を前提に、ズーム全域で周辺まで高い性能を実現するため、FLD...<router-link
                      to="/ec/pd/0085126212544/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 単焦点レンズに劣らない高解像を超広角ズーム域で達成するために、XGMをはじめ、複数のLDレンズを...<router-link
                      href="/ec/pd/4960371006574/"
                      >続きを読む</router-link
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
        <subText :textItem="'ShaSha：実際に使ってみました！キヤノン RF15-35mm F2.8 L IS USM'" id="r03" />
        <shasha
          :txt="'カメラやレンズをみると解像力や高ISO感度特性、ダイナミックレンジ、ぼけディスク、周辺光量落ち、最短撮影距離などの実写チャートを撮影したくなるというマニアックな気質を持つ齋藤千歳です。 今回はキヤノン RF15-35mm F2.8 L IS USM について、電子書籍『キヤノン RF15-35mm F2.8 L IS USM EF 機種別レンズラボ』に掲載した解像力やぼけディスク、最短撮影距離、周辺光量落ちの実写チャートのデータを元に、実写の撮影写真をメインに解説していきます・・・・'"
          :href="'https://shasha.kitamura.jp/article/469368086.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549292152272'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4463/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM おすすめアクセサリー関連商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'表現の幅を広げるRFマウント大口径広角ズームレンズ'"
          :btntxt="'商品ページを見る'"
        />

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
  name: 'highly_recommended-4763',
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
    document.title = 'スタッフイチオシ！キヤノン RF15-35mm F2.8 L IS USM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！おすすめ広角レンズ、キヤノン RF15-35mm F2.8 L IS USM')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その２', href: '#r01' },
        { naviItem: 'キヤノン RF15-35mm F2.8 L IS USM と他おすすめレンズ比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：実際に使ってみました！キヤノン RF15-35mm F2.8 L IS USM 作例', href: '#r03' },
        { naviItem: '関連商品一覧', href: '#r04' }
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
          path: 'キヤノン RF15-35mm F2.8 L IS USM ・アクセサリー',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292152272'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292152272', '0085126212544', '4960371006574'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292152272',
        '4549292154535',
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