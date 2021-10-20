<template>
  <v-app>
    <div class="6600">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/6600/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/6600/sp_img_top.jpg'"
          :topTitle="'ソニー α6600'"
          :topTitleText="'光学式ボディ内手ブレ補正と長時間バッテリーライフを小型ボディに凝縮\n静止画・動画性能を極めたオールラウンド一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'50px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α6600</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー α6600 ボディ ブラック [ILCE-6600 B] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[0]" :btntxt="'商品詳細を見る'" :type="2" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/ILCE-6600/'"
          :height="'70px'"
        />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ソニー α6600 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'SONY α6600 / α6500 / フジフイルム X-T30 / キヤノンEOS M5 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">SONY α6600 / α6500 / フジフイルム X-T30 / キヤノンEOS M5 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年10月23日発売予定</td>
                  <td>2020年8月28日</td>
                  <td>2018年3月23日</td>
                  <td>2019年11月1日</td>
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
                  <td>約2420万画素</td>
                  <td>約2420万画素</td>
                  <td>約2610万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>Exmor CMOSセンサー</td>
                  <td>Exmor CMOSセンサー</td>
                  <td>X-Trans CMOS 4センサー</td>
                  <td>
                    CMOSセンサー<br />
                    （デュアルピクセルCMOS AF対応）
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高約11コマ/秒</td>
                  <td>最高約11コマ/秒</td>
                  <td>最高約30コマ/秒</td>
                  <td>最高約9コマ／秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    RAW：46枚<br />
                    JPEG：約116枚
                  </td>
                  <td>
                    RAW：約107枚<br />
                    JPEG：約233枚
                  </td>
                  <td>
                    RAW：約17枚<br />
                    JPEG：約26枚
                  </td>
                  <td>
                    RAW：約17枚<br />
                    JPEG：約26枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1／4000～30秒、バルブ</td>
                  <td>1／4000～30秒、バルブ</td>
                  <td>1／32000～15分、バルブ</td>
                  <td>1／4000～30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100-32000<br />(拡張ISO50-102400)</td>
                  <td>
                    ISO100-25600<br />
                    (拡張51200)
                  </td>
                  <td>
                    ISO100-12800<br />
                    (拡張80-51200)
                  </td>
                  <td>ISO100-25600</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>425点</td>
                  <td>425点</td>
                  <td>425点</td>
                  <td>
                    49点<br />
                    （顔＋追尾優先AF時の最大）
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約810枚</td>
                  <td>約350枚</td>
                  <td>約380枚</td>
                  <td>約295枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約120.0×66.9×69.3mm</td>
                  <td>約120.0×66.9×64.4mm</td>
                  <td>118.4ｘ82.8ｘ46.8mm</td>
                  <td>115.6ｘ89.2ｘ60.6mm</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>チルト式ワイド3.0型</td>
                  <td>チルト式ワイド3.0型</td>
                  <td>チルト式3.0型</td>
                  <td>チルト式ワイド3.2型</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約418g</td>
                  <td>約410g</td>
                  <td>約333g</td>
                  <td>約380g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    シングルスロット <br />
                    UHS-I 対応
                  </td>
                  <td>
                    シングルスロット <br />
                    UHS-I 対応
                  </td>
                  <td>
                    シングルスロット <br />
                    UHS-I 対応
                  </td>
                  <td>
                    シングルスロット <br />
                    UHS-I 対応
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α7S III 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価下取りー -->
        <subText :textItem="'SONY α6600をご購入時、ソニーα6500を高価下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'3,298'" :targetDate="'2020年9月18日'" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ソニー α6600  外観画像'" />
          <p class="text-subtitle-1">ソニー α6600の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/6600/'" :sm="'6'" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ソニー α6600 作例画像'" />
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/6600/'" :count="6" />
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';

export default Vue.extend({
  name: '6600',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'ソニー α6600 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α6600 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー α6500 ボディ [ILCE-6500]',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%E3%82%BD%E3%83%8B%E3%83%BC%20%CE%B16500%20%E3%83%9C%E3%83%87%E3%82%A3%20%5BILCE-6500%5D&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: 'https://shop.kitamura.jp/images/pd/b77/97e/fb1/943/797/42b/d6f/e99/57a/4e3/5cj/f5f/d4d/n/L.jpg',
        txt: 'ソニー α6500 ',
        tradeInImg: '/ec/images2/special/camera/feature/sony/6600/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      characteristicList: [
        {
          subtitle: '「リアルタイムトラッキング」×「高速連写」で、最高の一瞬を描写',
          contents: [
            'フラッグシップモデル『α9』で採用されている、AIを活用した「リアルタイムトラッキング」を搭載',
            '最高約11コマ/秒のアフタービュー方式での高速連写に加え、最高約8コマ/秒のライブビュー方式での高速連写が可能',
            '表示タイムラグを限りなく低減させることで、光学ファインダーに近い感覚で使用できる電子ビューファインダー',
          ]
        },
        {
          subtitle: '光学式5軸ボディ内手ブレ補正をコンパクトボディに搭載',
          contents: [
            'フルサイズ機で採用されている光学式5軸ボディ内手ブレ補正機構を、APS-Cセンサー用手ブレ補正ユニットとして搭載',
            '角度ブレ（Pitch/Yaw）、シフトブレ（X/Y）、回転ブレ（Roll）などさまざまなブレを高精度に検出し補正',
            '高精度ジャイロセンサーも搭載し、5.0段分の手ブレ補正効果を実現',
          ]
        },
        {
          subtitle: 'Super 35mmフォーマットによる本格的な4K動画記録をサポート',
          contents: [
            '画素加算のない全画素読み出しにより、4K映像に必要な画素数の約2.4倍（6K相当）の豊富な情報量を凝縮して4K映像を出力',
            'S-Log3、S-Log2にも対応し、撮影後のグレーディングによる幅広い映像表現が可能',
            'マイク端子に加え、ヘッドホン端子を新たに搭載したことで、収録音の正確なモニタリングが可能',
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー α6600',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736108417',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736108417', '4548736021662', '4547410399875', '4549292078657'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736108417',
        '4548736108561',
        '4548736064522',
        '4548736055704',
        '4548736100664',
        '4905524929379',
        '4548736008427',
        '4905524989960',
        '4905524894875',
        '4548736099661',
        '4548736099814',
        '4548736099838',
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