<template>
  <v-app>
    <div class="highly_recommended-4724">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <h1 class="text-h6 font-weight-bold">Zマウントのポートレート定番レンズ ニコン NIKKOR Z 85mm f/1.8 S</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4724/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4724/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↑top image -->
        <h2 class="text-body-2">開放からシャープに！高品質S-Lineレンズ</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ニコン NIKKOR Z 85mm f/1.8 S'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'美しいボケ味とピント面のシャープさで自然な立体感が表現可能な ニコン NIKKOR Z 85mm f/1.8 S は、ポートレート撮影の頻度が高いニコンZユーザーにおすすめです！'"
          :btntxt="'商品一覧を見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          ポートレート定番の焦点距離と開放からシャープに写る高品質性能を備えたニコンS-Lineレンズ<br />
          美しいボケ味とピント面のシャープさで自然な立体感が表現可能<br />
          防塵防滴に配慮した設計ですので屋外でも安心して撮影できます
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          Zマウント専用に設計された高品質S-Lineレンズ。<br />
          防塵防滴に配慮した設計となっているので、屋外でも安心して撮影することができます。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          ポートレート定番の焦点距離と美しいボケ味＆シャープさを兼ねそろえたニコンこだわりの単焦点レンズ。<br />
          自然な立体感を表現できますので、被写体をより魅力的に美しく撮影することが可能です。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'ニコン NIKKOR Z 85mm f/1.8 S と他レンズと比較してみました'" />
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
                        :max-width="$vuetify.breakpoint.mdAndUp ? '220' : '77'"
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
                  <td>67mm（P=0.75mm）</td>
                  <td>67mm</td>
                  <td>86mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約470g</td>
                  <td>約350g</td>
                  <td>約1140g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約99mm</td>
                  <td>約73mm</td>
                  <td>約126.2mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>8群12枚（EDレンズ2枚、ナノクリスタルコートあり）</td>
                  <td>9群9枚</td>
                  <td>12群14枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】ニコン独自の設計指針と品質管理を高い基準でクリアーし、特に高いレベルで光学性能を発揮する「S-Line」に属する高性能レンズ。ボケの美しさにこだわり抜き...<router-link
                      to="/ec/pd/4960759902184/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】フルサイズFXフォーマット対応 ポートレート作品にオススメな85mm 大口径中望遠レンズ。（DXフォーマットでご使用の場合は約128mm相当）
                    美しいボケ味を...<router-link to="/ec/pd/4960759026477/">続きを読む</router-link>
                  </td>
                  <td>
                    【製品特徴】色収差補正を高いレベルで行ったことで、シャープさとボケの美しさを併せ持つ、卓越した性能を発揮。超高画素デジタル一眼レフカメラに対応する画質を実現...<router-link
                      to="/ec/pd/0085126321550/"
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
        <subText :textItem="'ShaSha：ニコンZマウントにポートレート定番レンズが登場！「ニコン NIKKOR Z 85mm f/1.8 S」レビュー'" id="r03" />
        <shasha
          :txt="'「NIKKOR Z 85mm f/1.8 S」はZマウント専用のレンズで、S-Lineに属するレンズです。\nS-LineとはZマウント専用レンズの中でも、高い基準を満たしたレンズにつけられる称号で、レンズ製品名の末尾に「S」がついています。ちなみにSには以下の3点の意味が・・・・'"
          :href="'https://shasha.kitamura.jp/article/469813454.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4960759902184'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4724/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="mainProductList" />

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
  name: 'highly_recommended-4724',
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
    document.title = 'スタッフイチオシ！ニコン NIKKOR Z 85mm f/1.8 S | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ポートレート撮影をするニコン Z 7、Z 6 ユーザーさんにおすすめ！AFが速く、描写・ボケが非常に美しい高性能レンズ ニコン NIKKOR Z 85mm f/1.8 S')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'ニコン NIKKOR Z 85mm f/1.8 S と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：ニコンZマウントにポートレート定番レンズが登場！「ニコン NIKKOR Z 85mm f/1.8 S」レビュー', href: '#r03' },
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
          path: 'スタッフイチオシ！ニコン NIKKOR Z 85mm f/1.8 S',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759902184'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759902184', '4960759026477', '0085126321550'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
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
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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