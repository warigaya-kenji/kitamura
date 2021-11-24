<template>
  <v-app>
    <div class="x100v">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x100v/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x100v/sp_img_top.jpg'"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'富士フイルム X100V'"
          :topTitleText="'「ファインダーを覗いて撮る」を追求した\n高級コンパクトデジタルカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">富士フイルム X100V<br />好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">富士フイルム X100V</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'高級コンパクトデジタルカメラの原点「X100 シリーズ」がさらなる進化！'" />
        <p class="font-weight-bold mt-2 mb-6 text-h6">
          機能美溢れる洗練されたデザインのボディに、新開発の高性能レンズを搭載。「ファインダーを覗いて撮る」撮影スタイルを追求
        </p>

        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 8 : 2"
                color="#ff0000"
                class="main-product-btn"
                height="70px"
                href="/ec/special/camera/feature/fujifilm/x100v/4475"
              >
                <span class="white--text text-sm-subtitle-1 text-center">富士フイルム X100V<br />購入はこちら</span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'富士フイルム X100V'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'富士フイルム X100Vの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x100v/'"
          :height="'52px'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る！富士フイルム X100Vをタッチ＆トライ！'" />
        <p>
          2020年2月5日（水）11時からFUJIFILM Imaging Plazaにて展示されたフジフイルムの高級コンパクトデジタルカメラ「X100V」を早速タッチ&トライに行ってきました！
        </p>
        <watchInVideo :src="'https://www.youtube.com/embed/piATnEPdpsU?rel=0'" :height="315" />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:富士フイルム X100V・レビュー/作例を見る'" />
        <shasha
          :txt="'フジフイルムからコンパクトデジタルカメラ「X100シリーズ」の5代目となるX100Vのシルバーモデルが2020年2月27日に発売されました。というのも、カラーバリエーションはX100Fと同様のシルバーとブラックの2種類が用意されているものの、カラーバリエーションによって発売日が異なります。\n\nちなみに、もう一方のブラックモデルは、なんと本日（2020年3月12日）発売です！X100シリーズはレンズが固定式のカメラですが、製品名の最初に「X」とある通り、X-Pro3やX-T4、X-T30などが属しているXシリーズに属しています。\n高性能を追求したモデルであることから、ハイエンドに相当する「Xプレミアムコンパクトカメラ」に位置付けられています。\n.....'"
          :href="'https://shasha.kitamura.jp/article/479634542.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x100v/shashabnr.jpg'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'富士フイルム X100V / X100F / リコー GR III / X-Pro3 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">富士フイルム X100V / X100F / リコー GR III / X-Pro3 の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>
                    シルバー<br />2020年2月27日発売<br /><br />
                    ブラック<br />2020年3月12日発売
                  </td>
                  <td>2017年2月23日発売</td>
                  <td>2019年3月15日発売</td>
                  <td>2019年11月28日発売</td>
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
                  <td>約2610万画素</td>
                  <td>約2430万画素</td>
                  <td>約2424万画素</td>
                  <td>約2610万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    APS-Cサイズ<br />
                    X-Trans CMOS 4センサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    X-Trans CMOS IIIセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    X-Trans CMOS 4センサー
                  </td>
                </tr>
                <tr>
                  <th>焦点距離・F値</th>
                  <td>23mm(35mm判換算：約35mm相当)、F2～F16</td>
                  <td>23mm(35mm判換算：約35mm相当)、F2～F16</td>
                  <td>18.3mm (35ミリ判換算で約28mm相当)、F2.8～F16</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>撮影可能範囲</th>
                  <td>約10cm ～ ∞</td>
                  <td>約10cm ～ ∞</td>
                  <td>約6cm ～ ∞</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-15分、バルブ(最長60分)</td>
                  <td>1/4000-30秒、バルブ(最長60分)、TIME</td>
                  <td>1/4000-30秒、バルブ、TIME</td>
                  <td>1/4000-15分、バルブ(最長60分)</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO160-12800<br />
                    （拡張ISO80相当、51200相当）
                  </td>
                  <td>
                    ISO200-12800<br />
                    （拡張ISO100相当、51200相当）
                  </td>
                  <td>
                    ISO100-102400<br />
                    (下限値/上限値/低速限界値設定可能)
                  </td>
                  <td>
                    ISO160-12800<br />
                    （拡張ISO80相当、51200相当）
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    EVF使用時：約350枚<br />
                    OVF使用時：約420枚
                  </td>
                  <td>
                    EVF使用時：約270枚<br />
                    OVF使用時：約390枚
                  </td>
                  <td>約200枚</td>
                  <td>
                    EVF使用時：約370枚<br />
                    OVF使用時：約440枚
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約128.0×74.8×53.3mm</td>
                  <td>約126.5×74.8×52.4mm</td>
                  <td>約109.4×61.9×33.2mm</td>
                  <td>約140.5×82.8×46.1mm</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>
                    OVF：電子式ブライトフレームファインダー（逆ガリレオ式）<br />
                    EVF：0.5型有機ELファインダー 約369万ドット
                  </td>
                  <td>
                    OVF：電子式ブライトフレームファインダー（逆ガリレオ式）<br />
                    EVF：0.48型カラー液晶ファインダー、約236万ドット
                  </td>
                  <td>-</td>
                  <td>
                    OVF：電子式ブライトフレームファインダー（逆ガリレオ式）<br />
                    EVF：0.5型有機ELファインダー 約369万ドット
                  </td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.0型チルト式タッチパネル付き/約162万ドット</td>
                  <td>3.0型チルト式/約162万ドット</td>
                  <td>3.0型/約103.7万ドット</td>
                  <td>3.0型180度チルト式タッチパネル付き/約162万ドット</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約428g</td>
                  <td>約419g</td>
                  <td>約227g</td>
                  <td>約447g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-Ⅰ/UHS-Ⅱ対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>DCI4K/4K/フルHD</td>
                  <td>フルHD/HD</td>
                  <td>フルHD</td>
                  <td>DCI4K/4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'富士フイルム X100V 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'富士フイルム X100Vをご購入時、富士フイルム X100F高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'3,393'"
            :targetDate="'2020年２月7日'"
            :isCreditBtn="true"
          />
        </div>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'富士フイルム X100V 外観画像'" />
          <p class="text-subtitle-1">富士フイルム X100Vの外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/x100v'" />
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
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
export default Vue.extend({
  name: 'x100v',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = '好評発売中！富士フイルム X100V | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '富士フイルム X100V ご好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！ X100Vをご購入時、富士フイルム X100F高値下取り実施中')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: '富士フイルム X100F',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=X100F&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/23d/03a/38b/025/e97/5f1/92f/9d7/871/ee7/59b/8ob/laj/r/L.jpg',
        txt: '富士フイルム X100V',
        tradeInImg: ' /ec/images2/special/camera/feature/fujifilm/x100v/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: '富士フイルム X100F', href: '' },
          { name: 'リコーGRIII', href: '' },
          { name: 'Leica D-LUX7', href: '' },
        ]
      },
      characteristicList: [
        {
          subtitle: '高画質を実現する、新開発高性能レンズ・最新のイメージセンサー・画像処理エンジン',
          contents: [
            '新設計の23mmF2レンズを搭載。 絞り開放から高い解像力を発揮し、最短撮影距離から無限遠まで極めて鮮鋭な像を形成',
            '裏面照射型構造を採用した「X-Trans CMOS 4」と、高速処理&高い演算能力を誇る「X-Processor 4」を搭載。人間の記憶に残る鮮やかな色「記憶色」による高画質を実現',
          ]
        },
        {
          subtitle: '撮影に集中出来る、世界で唯一無二のファインダー',
          contents: [
            'X100シリーズの代名詞とも言える「ハイブリッドビューファインダー」で、「ファインダーを覗いて撮る」を追求',
            '肉眼で被写体を直接視認出来る「OVF」と露出やホワイトバランス、フィルムシミュレーションによる色再現などが全て反映される「EVF」をレバーひとつで切り替え可能'
          ]
        },
        {
          subtitle: '長年の写真フィルム開発の歴史と経験が生み出す伝統の色再現',
          contents: [
            '写真フィルムを開発してきた富士フイルムの技術と経験を詰め込んだ、「フィルムシミュレーション」を全17種類搭載',
            'VelviaやPROVIA、ACROSといった長年世界中で愛されている素晴らしいフィルム写真の世界を再現',
          ]
        },
        {
          subtitle: '新たに外装にアルミニウムを採用。機能美溢れる洗練されたデザインのボディと受け継がれる原体験',
          contents: [
            '塗装されたボディでは感じにくい金属の質感を指先に伝えてくれるアルミニウムを採用した外装',
            '操作するたびに信頼と安心を与える、アルミ切削加工によるシャッタースピードダイヤルと露出補正ダイヤル',
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
          href: 'ec/special/sale/shoppingcredit-campaign/',
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
        },
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
          path: '富士フイルム X100V',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410423419'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410423419', '4547410339017', '4549212300202', '4547410421767'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410423419',
        '4547410423433',
        '4547410429084',
        '4547410334128',
        '4547410378139',
        '4547410378122',
        '4547410160727',
        '4547410268201',
        '4547410339079',
        '4547410339055',
        '4547410339086',
        '4547410339062',
        '4547410160758',
        '4547410268102',
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