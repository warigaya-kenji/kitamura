<template>
  <v-app>
    <div class="sel50f12gm">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/sel50f12gm/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/sel50f12gm/sp_img_top.jpg'"
          :topTitle="'ソニー FE 50mm F1.2 GM'"
          :topTitleText="'G Master初の開放F1.2大口径レンズ\n美しくやわらかなぼけ描写を実現した小型軽量レンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>ソニー FE 50mm F1.2 GM</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー FE 50mm F1.2 GM 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!--====== 高価下取り ======-->
        <subText :textItem="'ソニー FE 50mm F1.2 GM ご購入時、高価下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="3" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList" :amount="'5,239'" :targetDate="'2021年3月23日'" />
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー FE 50mm F1.2 GM'" />
        <watchInVideo :src="'https://www.youtube.com/embed/2ekVNA5litM'" :height="400" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL50F12GM/'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FE 50mm F1.2 GM / ソニー Planar T* FE 50mm F1.4 ZA 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FE 50mm F1.2 GM / ソニー Planar T* FE 50mm F1.4 ZA を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年4月23日</td>
                  <td>2016年7月29日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>10群14枚</td>
                  <td>9群12枚</td>
                </tr>
                <tr>
                  <th>非球面レンズ（枚）</th>
                  <td>XA 3</td>
                  <td>AA 1/normal 1</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>40cm</td>
                  <td>45cm</td>
                </tr>
                <tr>
                  <th>最大撮影倍率</th>
                  <td>0.17倍</td>
                  <td>0.15倍</td>
                </tr>
                <tr>
                  <th>フォーカス駆動</th>
                  <td>XDリニアモーター×4</td>
                  <td>リングドライブSSM</td>
                </tr>
                <tr>
                  <th>絞り羽根（枚）</th>
                  <td>11</td>
                  <td>11</td>
                </tr>
                <tr>
                  <th>レンズコーティング</th>
                  <td>ナノARコーティングII</td>
                  <td>T＊コーティング</td>
                </tr>
                <tr>
                  <th>フィルター径</th>
                  <td>72mm</td>
                  <td>72mm</td>
                </tr>
                <tr>
                  <th>外寸 最大径ｘ長さ (mm)</th>
                  <td>87 x 108</td>
                  <td>83.5 x 108</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約778g</td>
                  <td>約778g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ソニー FE 50mm F1.2 GM 外観画像'" />
          <p class="text-subtitle-1">ソニー FE 50mm F1.2 GM の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/sel50f12gm'" :count="2" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images2">
          <subText :textItem="'ソニー FE 50mm F1.2 GM 作例画像'" id="images" />
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel50f12gm/'" :count="11" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'sel50f12gm',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    expensiveTradeIn: ExpensiveTradeIn,
    splitContent: SplitContent,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'ソニー FE 50mm F1.2 GM | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 50mm F1.2 GM 好評発売中！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' },
        { naviItem: '作例画像', href: '#images2' }
      ],
      expensiveTradeInList: {
        name: 'ソニー Planar T* FE 50mm F1.4 ZA [SEL50F14Z]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&goodsname=4548736028357&pattern=1&_ga=2.134607473.16120489.1628554499-279164427.1627285160',
        nameImg: '//shopimg.kitamura.jp/images/pd/8d9/c63/bad/3e3/cdc/d99/030/9c8/ca4/9f3/07x/uhq/owi/6/M.jpg',
        txt: 'ソニー FE 50mm F1.2 GM',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel50f12gm/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー FE 50mm F1.2 GM',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736132016'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736132016', '4548736028357'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>
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