<template>
  <v-app>
    <div class="sel24f28g">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/sel24f28g/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/sel24f28g/sp_img_top.jpg'"
          :topTitle="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G'"
          :topTitleText="'高画質と美しいぼけを小型軽量設計で実現\n撮影する楽しさが体験できる3本の高性能Gレンズ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'190px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <subText :textItem="'高い解像性能と美しいぼけ、高性能AFを高品位ボディに搭載した単焦点Gレンズ'" />

        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 高価下取り -->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G ご購入時、高価下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで FE 24mm F2.8 G\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL24F28G/index.html'"
          :height="'70px'"
        />

        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで FE 40mm F2.5 G\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL40F25G/index.html'"
          :height="'70px'"
        />

        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで FE 50mm F2.5 G\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL50F25G/index.html'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G / 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="product in mainProductList" :key="product.janCode">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>4月23日発売</td>
                  <td>4月23日発売</td>
                  <td>4月23日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="product in mainProductList" :key="product.janCode">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>7群8枚</td>
                  <td>9群9枚</td>
                  <td>9群9枚</td>
                </tr>
                <tr>
                  <th>非球面レンズ（枚）</th>
                  <td>3</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>24cm（MF時18cm）</td>
                  <td>28cm（MF時25cm）</td>
                  <td>35cm（MF時31cm）</td>
                </tr>
                <tr>
                  <th>最大撮影倍率</th>
                  <td>0.13倍（MF時0.19倍）</td>
                  <td>0.2倍（MF時0.23倍）</td>
                  <td>0.18倍（MF時0.21倍）</td>
                </tr>
                <tr>
                  <th>フォーカス駆動</th>
                  <td>リニアモーター×2</td>
                  <td>リニアモーター×2</td>
                  <td>リニアモーター×2</td>
                </tr>
                <tr>
                  <th>絞り羽根（枚）</th>
                  <td>7</td>
                  <td>7</td>
                  <td>7</td>
                </tr>
                <tr>
                  <th>フィルター径</th>
                  <td>49mm</td>
                  <td>49mm</td>
                  <td>49mm</td>
                </tr>
                <tr>
                  <th>外寸 最大径ｘ長さ (mm)</th>
                  <td>68 x 45</td>
                  <td>68 x 45</td>
                  <td>68 x 45</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約162g</td>
                  <td>約173g</td>
                  <td>約174g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 動画で見る -->
        <subText :textItem="'動画で見る ソニー FE 24mm F2.8 G'" />
        <p>ソニー FE 50mm F2.5 G・FE 40mm F2.5 G・FE 24mm F2.8 G ～動画撮影にもおすすめのレンズ～</p>
        <watchInVideo :src="'https://www.youtube.com/embed/xg1eZ6GhHdw?rel=0'" />

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="mainProductList" />

        <!--↓ 外観画像ー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 外観画像'" />
        <p class="text-subtitle-1">ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G の外観画像</p>
        <appearanceImage :src="'/ec/images2/special/camera/feature/sony/sel24f28g'" :count="1" />
        <p class="text-subtitle-2">↑ソニー FE 24mm F2.8 G</p>
        <appearanceImage :src="'/ec/images2/special/camera/feature/sony/sel24f28g'" :count="1" :target="1" />
        <p class="text-subtitle-2">↑ソニー FE 40mm F2.5 G</p>
        <appearanceImage :src="'/ec/images2/special/camera/feature/sony/sel24f28g'" :count="1" :target="2" />
        <p class="text-subtitle-2">↑ソニー FE 50mm F2.5 G</p>

        <!--↓ 作例画像ー-->
        <subText :textItem="'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G 作例画像'" />
        <p>ソニー FE 24mm F2.8 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="4" />
        <p>ソニー FE 40mm F2.5 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="3" :target="4" />
        <p>ソニー FE 50mm F2.5 G 作例</p>
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel24f28g/'" :count="5" :target="7" />

        <!--↓ SNSー-->
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'sel24f28g',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    subText: SubText,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    topTitleImg: TopTitleImg,
    expensiveTradeIn: ExpensiveTradeIn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    appearanceImage: AppearanceImage
  },
  setup: (props, context) => {
    document.title = 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G  好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      expensiveTradeInList: {
        name: 'ソニー FE 28mm F2 [SEL28F20]',
        href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001985&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=1&_ga=2.100577758.1712661879.1629071621-279164427.1627285160',
        nameImg: '	https://shopimg.kitamura.jp/images/pd/9ef/9ca/fc9/cd6/bc5/632/3c9/906/266/19b/a0q/qb4/2ba/o/M.jpg',
        txt: 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel24f28g/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          {
            name: 'ソニー FE 28mm F2 [SEL28F20]',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001985&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=1'
          },
          {
            name: 'ソニー FE 35mm F1.8 [SEL35F18F]',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736099838&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=kw&lc=40&quick=&pattern=1'
          },
          {
            name: 'ソニー FE 50mm F1.8 [SEL50F18F]',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736033078&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=kw&lc=40&quick=&pattern=1'
          }
        ]
      },
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
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
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736130593', '4548736130623', '4548736130654'],
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