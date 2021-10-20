<template>
  <v-app>
    <div class="5dmk4">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'https://ns-stg.kitamura.shop/ec/images2/special/camera/feature/canon/5dmk4/bg_tops.jpg'"
          :spBackgroundImg="'https://ns-stg.kitamura.shop/ec/images2/special/camera/feature/canon/5dmk4/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS 5D MarkIV'"
          :topTitleText="'フルサイズ デジタル一眼レフカメラ\nキヤノン 新製品'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">Canon EOS 5D Mark IV </span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>Canon EOS 5D Mark IV </span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS 5D MarkIV 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/lineup/5dmk4/index.html'"
          :height="'70px'"
        />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'キヤノン EOS 5D MarkIV ３大特徴'" />
          <p class="mb-2">高画素・高速連写・高感度などの基本性能がバランス良く向上。フラッグシップ機と同等の優れた機能を搭載した「Canon EOS 5D Mark IV」</p>
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS 5D MarkIV/ EOS-5D MarkIII /ニコン D810 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS 5D MarkIV/ EOS-5D MarkIII /ニコン D810 比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2016年9月8日</td>
                  <td>2012年3月22日</td>
                  <td>2014年7月17日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素</th>
                  <td>約3040万画素</td>
                  <td>約2230万画素</td>
                  <td>約3635万画素</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～32000</td>
                  <td>100～25600</td>
                  <td>64～12800</td>
                </tr>
                <tr>
                  <th>画像エンジン</th>
                  <td>DIGIC 6＋</td>
                  <td>DIGIC 5＋</td>
                  <td>EXPEED 4</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>フルサイズ</td>
                  <td>フルサイズ</td>
                  <td>フルサイズ</td>
                </tr>
                <tr>
                  <th>ローパスフィルター</th>
                  <td>×</td>
                  <td>×</td>
                  <td>●</td>
                </tr>
                <tr>
                  <th>シャッター速度</th>
                  <td>30-1/8000</td>
                  <td>30-1/8000</td>
                  <td>30-1/8000</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約７コマ/秒</td>
                  <td>約6コマ/秒</td>
                  <td>約5コマ/秒</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>視野率約100％、倍率約0.71倍</td>
                  <td>視野率約100％、倍率約0.71倍</td>
                  <td>視野率約100％、倍率約0.7倍</td>
                </tr>
                <tr>
                  <th>測距点（フォーカスポイント）</th>
                  <td>61点（クロス測距点：最大41点）</td>
                  <td>61点（クロス測距点：最大41点）</td>
                  <td>51点</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>ワイド3.2型</td>
                  <td>ワイド3.2型</td>
                  <td>ワイド3.2型</td>
                </tr>
                <tr>
                  <th>Wi-fi/NFC</th>
                  <td>搭載</td>
                  <td>非搭載</td>
                  <td>非搭載</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>890g</td>
                  <td>950g</td>
                  <td>980g</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>LP-E6N/LP-E6</td>
                  <td>LP-E6N/LP-E6</td>
                  <td>EN-EL15</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約900枚※LP-E6使用時</td>
                  <td>約950枚※LP-E6使用時</td>
                  <td>1200枚</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>CF（UDMAモード７対応）<br />SD/SDHC/SDXC</td>
                  <td>CF（UDMAモード７対応）<br />SD/SDHC/SDXC</td>
                  <td>CF/SDHC/SDHC(UHS-I対応）</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>４K/フルHD/HD/SD</td>
                  <td>フルHD/HD/SD</td>
                  <td>フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS 5D MarkIV 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'キヤノン EOS 5D MarkIV 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS 5D MarkIVの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'https://ns-stg.kitamura.shop/ec/images2/special/camera/feature/canon/5dmk4'" />
        </div>

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
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: '5dmk4',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    appearanceImage: AppearanceImage,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'Canon EOS 5D Mark IV キヤノン フルサイズ一眼レフカメラ| カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'Canon EOS 5D Mark IV キヤノン フルサイズ一眼レフカメラ！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '高画素・高速連写・高感度などの基本性能がバランス良く向上',
          contents: [
            '有効画素数約3040万画素35mmフルサイズCMOSセンサーおよび映像エンジン「DIGIC 6+」の搭載により、常用ISO感度ISO100～32000を実現',
            '新開発ミラー振動制御システムの採用により、最高約7コマ／秒の高速連写を実現',
            '「デュアルピクセルCMOS AF」の搭載により、ライブビュー撮影時にも高速で追従性に優れたAFを実現',

          ]
        },
        {
          subtitle: 'フラッグシップ機と同等の優れた機能を搭載',
          contents: [
            '「EOS-1D X Mark II」と同じ、「61点高密度レティクルAF II」を搭載。左右の測距エリアでは縦方向に約24％、中央の測距エリアでは縦方向に約8.6％測距エリアを拡大',
            '61点全点がF8光束に対応しており、エクステンダーを使用した超望遠撮影時に、レンズの開放絞り数値がF8までの明るさとなる場合でも、全測距点でAFが可能',
            '中央測距点ではEV-3の低輝度限界を達成し、暗い環境下でも高精度なAF合焦を実現',
          ]
        },
        {
          subtitle: '4K（4096×2160）動画を中心とした動画撮影機能の強化',
          contents: [
            '4Kでの動画撮影が可能。またデジタルシネマの標準規格の動画撮影も可能',
            '動画撮影時にもスムーズで滑らかなAFを可能とする「デュアルピクセルCMOS AF」とタッチパネル対応の液晶モニターにより、AFフレームを素早く選択',
            '4Kで記録した動画の1フレームを約880万画素の静止画として切り出し、JPEG画像として保存する「4Kフレームキャプチャー」機能を搭載',
            '「タイムラプス動画撮影」機能を搭載しており、一定間隔で撮影した静止画を自動でつなぎ合わせて動画を作成することが可能',
          ]
        }
      ],


      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
        },
        {
          href: '/ec/special/',
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'Canon EOS 5D Mark IV キヤノン フルサイズ一眼レフカメラ',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292075748',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292075748', '4960999810089', '4960759143532',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292075748',
        '4549292075854',
        '4549292075816',
        '4957792125335',
        '4549292037722',
        '4549292063615',
        '4549292008296',
        '4549292075946',

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
