<template>
  <v-app>
    <div class="zfc">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/zfc/bg_top2.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/zfc/sp_img_top2.jpg'"
          :topTitle="'ニコン Z fc'"
          :topTitleText="'ニコンの伝統的なデザインを身にまとった\nクラシックデザインミラーレス一眼'"
          :padding="'185px 0px 15px 40px'"
          :textPadding="'15px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold"
            >Z fc ボディ・Z fc 16-50 VR SLレンズキット好評発売中！<br />Z fc 28mm f/2.8 Special Edition キットご予約受付中！</span
          >
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">ニコン Z fc</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'撮っている時間も持っている時間も楽しくなるクラシックデザインミラーレスカメラ「Z fc」'" />
        <p class="text-subtitle-2">
          多くの人々に愛されたニコンFM2にインスパイアされた、精緻に作り込まれた外観デザインを身にまとったDXフォーマットミラーレスカメラ
        </p>

        <!--====== 価格・ご購入 ======-->

        <subText :textItem="'ニコン Z fc 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <v-row>
          <v-col cols="12">
            <a href="https://www.nikon-image.com/event/campaign/zfc_premiumexterior/">
              <v-img src="/ec/images2/special/camera/feature/nikon/zfc/8504.jpg" max-width="100%" height="auto" class="hover" alt="キャンペーン" />
            </a>
          </v-col>
        </v-row>

        <!--====== 高価下取り ======-->
        <div id="price">
          <subText :textItem="'ニコン Z fc 28mm f/2.8 Special Edition キット ご購入時、高価下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" />
        </div>
        <!--====== 高価下取り ======-->

        <!-- ↓ 42回まで分割ー -->
        <subText :textItem="'キタムラなら42回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'36'"
          :maximumInstallmentPayment="'42'"
          :amount="'3,245'"
          :targetDate="'2021年7月1日'"
        />

        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[1]"
          :numberOfTimes="'42'"
          :amount="'3,206'"
          :targetDate="'2021年7月1日'"
          :isText="false"
        />

        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[2]"
          :numberOfTimes="'42'"
          :amount="'3,418'"
          :targetDate="'2021年7月1日'"
          :isText="false"
          :isCreditBtn="true"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン Z fc/ Z 50 / オリンパス PEN E-P7 / フジフイルム X-S10'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン Z fc/ Z 50 / オリンパス PEN E-P7 / フジフイルム X-S10 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年7月23日<br />28mm f/2.8 Special Edition キット発売日未定</td>
                  <td>2019年11月22日</td>
                  <td>2021年6月25日</td>
                  <td>2020年11月19日</td>
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
                  <td>約2088万画素</td>
                  <td>約2088万画素</td>
                  <td>約2030万画素</td>
                  <td>約2610万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>23.5×15.7mm（ニコンDXフォーマット）<br />CMOSセンサー</td>
                  <td>23.5×15.7mm（ニコンDXフォーマット）<br />CMOSセンサー</td>
                  <td>17.3×13.0mm4/3型（4/3型 ）<br />Live MOSセンサー</td>
                  <td>23.5mm×15.6mm（APS-Cサイズ）<br />X-Trans CMOS 4センサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>約5コマ/秒</td>
                  <td>約5コマ/秒</td>
                  <td>約8.7コマ/秒</td>
                  <td>約8コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000秒～30秒、バルブ</td>
                  <td>1/4000秒～30秒、バルブ</td>
                  <td>1/4000～60秒、バルブ、ライブタイム、ライブコンポジット</td>
                  <td>1/4000秒～15分、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100～51200<br />(拡張時ISO204800)</td>
                  <td>ISO100～51200<br />(拡張時ISO204800)</td>
                  <td>LOW（約100相当）～25600</td>
                  <td>ISO160～12800<br />拡張ISO80/100/125/25600/51200</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.39型/約236万ドット（視野率約100%）</td>
                  <td>0.39型/約236万ドット（視野率約100%）</td>
                  <td>－</td>
                  <td>0.39型/約236万ドット（視野率約100%）</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.0型/約104万ドット<br />バリアングル式</td>
                  <td>3.2型/約104万ドット<br />チルト式</td>
                  <td>3.0型/約104万ドット<br />チルト式</td>
                  <td>3.0型/約104万ドット<br />バリアングル式</td>
                </tr>
                <tr>
                  <th>静止画撮影可能枚数<br />(CIPA規格基準)</th>
                  <td>ファインダー使用時：約310コマ<br />画像モニター使用時：約360コマ</td>
                  <td>ファインダー使用時：約280コマ<br />画像モニター使用時：約320コマ</td>
                  <td>約360枚</td>
                  <td>約325枚</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>レンズ内手振れ補正</td>
                  <td>レンズ内手振れ補正</td>
                  <td>センサーシフト方式5軸補正</td>
                  <td>センサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約134.5×93.5×43.5mm</td>
                  <td>約126.5ｘ93.5ｘ60.0mm</td>
                  <td>約118.3ｘ68.5ｘ38.1mm</td>
                  <td>約126.0ｘ85.1ｘ65.4mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約390g</td>
                  <td>約395g</td>
                  <td>289g</td>
                  <td>415g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>シングルスロット<br />SDメモリーカード</td>
                  <td>シングルスロット<br />SDメモリーカード</td>
                  <td>シングルスロット<br />SDメモリーカード</td>
                  <td>シングルスロット<br />SDメモリーカード(UHS-I 対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>

        <!--比較-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="50%"
              :href="`https://www.nikon-image.com/sp/zfc/`"
              >ニコン Z fc<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>

        <!--特徴-->
        <subText :textItem="'ニコン Z fc の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'ニコン Z fc 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'ニコン Z fc 外観画像'" />
          <p class="text-subtitle-1">ニコン Z fc の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/zfc'" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ニコン Z fc 作例画像'" />
          <p class="text-subtitle-1">▼ニコン Z fc 作例</p>
          <exampleImages :path="'/ec/images2/special/camera/feature/nikon/zfc/'" :count="10" :type="2" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';

export default Vue.extend({
  name: 'zfc',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    expensiveTradeIn: ExpensiveTradeIn
  },
  setup: (props, context) => {
    document.title = 'ニコン Z fc | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z fc 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' },
        { naviItem: '作例画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ニコン Df ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/bb7/625/a35/d8f/953/5c6/1a5/27e/9b7/e04/f9e/7wu/vmp/d/M.jpg',
        txt: 'ニコン Z fc 28mm f/2.8 Special Edition キット',
        tradeInProducts: [
          { name: 'ニコン Df ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1' },
          { name: 'ニコン Z 50 ボディD', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759903617&pattern=1' },
          { name: 'ニコン D500 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759146441&pattern=1' },
          { name: 'ニコン D7500 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759149084&pattern=1' },
          { name: 'ニコン D7200 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759145604&pattern=1' }
        ],
        tradeInImg: '/ec/images2/special/camera/feature/nikon/zfc/bnr_shitadori_350-130.jpg'
      },
      characteristicList: [
        {
          subtitle: 'ミラーレスとニコンの伝統的なデザインの融合',
          contents: [
            'ボディーのサイズだけでなく、ペンタプリズム部のデザインや黒とシルバーの色バランスなどもFM2に近い印象で再現',
            'モニター背面にはフィルムカメラを想起させる革シボ風の加工を採用。一つ一つのダイヤルは、アルミ削りだしで丁寧に作り込み、天面の表示は全て刻印',
            '1970-80年代のカメラに使用されていたNikonの刻印文字や、円形の接眼目当てを採用。細部までこだわり抜いたデザイン'
          ]
        },
        {
          subtitle: '指先に機械の感触を感じながら楽しみながら撮影できる操作感',
          contents: [
            'ボディーの天面にシャッタースピード、ISO感度、露出補正の３つのダイヤル、そしてF値を表示する小窓を搭載。一目で基本的なカメラ設定を視認することが可能',
            '手応えのあるダイヤルで、一つ一つの設定を丁寧に調節し、シャッターをきるという撮影スタイルが楽しめる操作感を実現'
          ]
        },
        {
          subtitle: '薄型・⼩型軽量システムに充実した基本性能と高画質を凝縮',
          contents: [
            '標準キットレンズで600mlのペットボトルと、ほぼ同等の重さ。いつでも持ち歩けるので、より気軽に、特別な瞬間を切り取ることが可能',
            '動画撮影時にも人物、犬、猫の顔や瞳を検出する瞳AFと動物AFが可能。静止画同様［オートエリアAF］［ワイドエリアAF］に対応',
            '高感度性能が優れた撮像素子と、上位機種にも採用している画像処理エンジン EXPEED 6のノイズ低減よって、静止画、動画を問わずノイズを効果的に抑制。細部や質感も鮮明に描写が可能'
          ]
        }
      ],
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
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
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
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ニコン Z fc',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759906311', '4960759906335', '4960759906328'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759906311', '4960759906335', '4545350053598', '4547410440362'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759906311',
        '4960759906328',
        '4960759906335',
        '4960759909268',
        '4960759909275',
        '4960759903969',
        '4955478183037',
        '4960759148940',
        '4955478182603',
        '4960759909053',
        '4523052022722',
        '4523052022739'
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
        console.log(productListResult);
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