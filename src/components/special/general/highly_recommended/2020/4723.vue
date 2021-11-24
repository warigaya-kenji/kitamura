<template>
  <v-app>
    <div class="highly_recommended-4723">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="text-h6 font-weight-bold">近接撮影可能な新世代の万能レンズ</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4723/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4723/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'カールツァイス ZEISS Batis 2/40 CF E-mount'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'Batisシリーズ初となる単焦点レンズ カールツァイス ZEISS Batis 2/40 CF は、従来の標準単焦点では物足りないソニー フルサイズミラーレスユーザーさんにおすすめです！'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          一般的な標準レンズよりもわずかに短い焦点距離を搭載<br />
          CF（クローズドフォーカス）搭載で標準レンズでありながらも近接撮影にも対応<br />
          通常の標準レンズよりも表現の幅が広がった新時代の標準単焦点レンズ
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
          <subText :textItem="'カールツァイス ZEISS Batis 2/40 CF と他レンズと比較してみました'" />
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
                  <th>フィルターサイズ</th>
                  <td>67mm</td>
                  <td>72mm</td>
                  <td>77mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約361g</td>
                  <td>約778g</td>
                  <td>約910g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約93mm</td>
                  <td>約108mm</td>
                  <td>約125.9mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>8群9枚</td>
                  <td>9群12枚</td>
                  <td>8群13枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】最短撮影距離が24cmでクローズフォーカス撮影が可能なこのレンズは、様々な撮影用途に適しています。マイクロコントラストの高い開放F値2.0の...<a
                      href="/pd/4047865800686/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】中心から周辺まで高解像で高コントラストな優れた描写性能。明るい大口径
                    開放F値1.4のプレミアムレンズ。リングドライブSSMによる高精度で...<a href="/pd/4548736028357/">続きを読む</a>
                  </td>
                  <td>
                    【製品特徴】レンズごとにチューニングしたAF駆動制御プログラムと高速通信により、ミラーレスカメラ専用レンズと同等のAF性能を実現。コントラストAF...<a
                      href="/pd/0085126311650/"
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
        <subText :textItem="'ShaSha：Batisシリーズ最新作単焦点レンズは「CF」が凄い！「カールツァイス ZEISS Batis 2/40 CF」レビュー'" id="r03" />
        <shasha
          :txt="'ZEISS Batisシリーズは、マニュアルフォーカス（MF）のシリーズであるLoxiaとともに、ソニーαシリーズの35mm判フルサイズに対応したEマウント用のレンズです。標準域の焦点距離はZEISS Batis 2/40 CFが初で、ZEISSの公式HPでは「新世代の万能レンズ」と解説されて・・・・'"
          :href="'https://shasha.kitamura.jp/article/469163183.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4047865800686'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4723/shashabnr.png'"
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
  name: 'highly_recommended-4723',
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
    document.title = 'スタッフイチオシ！カールツァイス ZEISS Batis 2/40 CF | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ポイントは40mmの焦点距離とCF。標準単焦点レンズ ZEISS Batis 2/40 CFはマクロ撮影にも強い☆ソニー フルサイズミラーレスにおすすめのレンズです')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'カールツァイス ZEISS Batis 2/40 CF と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：Batisシリーズ最新作単焦点レンズは「CF」が凄い！「カールツァイス ZEISS Batis 2/40 CF」レビュー', href: '#r03' },
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
          path: 'スタッフイチオシ！カールツァイス ZEISS Batis 2/40 CF',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292156263'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4047865800686', '4548736028357', '0085126311650'],
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