<template>
  <v-app>
    <div class="d6">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/d6/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/d6/sp_img_top.jpg'"
          :padding="'150px 0px 15px 40px'"
          :topTitle="'ニコン D6'"
          :topTitleText="'スポーツ・報道系のプロフェッショナルフォトグラファーの\nニーズに応えるフラッグシップモデルデジタル一眼'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン D6 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン D6</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'ニコン史上最強のAF性能を搭載したフラッグシップモデル「ニコン D6」登場！'" />
        <p class="mt-2 text-subtitle-1 font-weight-bold">スポーツ・報道系のプロフェッショナルフォトグラファーの最高のパフォーマンスをサポート</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ニコン D6'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'スポーツ・報道系のプロフェッショナルフォトグラファーのニーズに応えるフラッグシップモデルデジタル一眼'"
        />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ニコン D6の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.nikon-image.com/products/slr/lineup/d6/'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン D6/D5/EOS-1D X MarkIII /α9 II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-0">ニコン D6/D5/EOS-1D X MarkIII /α9 IIの性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年6月5日発売</td>
                  <td>2016年03月26日発売</td>
                  <td>2020年2月14日発売</td>
                  <td>2019年11月01日発売</td>
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
                  <td>約2082万画素</td>
                  <td>約2082万画素</td>
                  <td>約2010万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                  <td>
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ <br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>画像処理エンジン</th>
                  <td>EXPEED 6</td>
                  <td>EXPEED 5</td>
                  <td>DIGIC X</td>
                  <td>BIONZ X</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約14コマ/秒</td>
                  <td>
                    最高 約12コマ/秒<br />
                    (ミラーアップ時は<br />
                    最高 約14コマ/秒）
                  </td>
                  <td>ファインダー：最高約16コマ/秒 ライブビュー：最高約20コマ/秒</td>
                  <td>最高20コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW（ロスレス圧縮RAW/12ビット記録：L）約3500コマ</td>
                  <td>RAW（ロスレス圧縮RAW/12ビット記録：L）約1700コマ</td>
                  <td>1000枚以上 ※RAW+HEIF時は約350枚、C-RAW+HEIF時は、約420枚</td>
                  <td>RAW(非圧縮)：約239枚 JPEG：約361枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000～30秒、Bulb、Time、X250</td>
                  <td>1/8000～30秒、Bulb、Time、X250</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO 100～102400<br />
                    （ISO 50相当の減感/ISO 3280000相当の増感可能
                  </td>
                  <td>
                    ISO 100～102400<br />
                    （ISO 50相当の減感/ISO 3280000相当の増感可能
                  </td>
                  <td>ISO100-102400 （拡張ISO50相当、819200相当）</td>
                  <td>ISO100-51200 （拡張ISO50、204800）</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>
                    105点<br />
                    （105点クロスセンサー）
                  </td>
                  <td>
                    153点<br />
                    （99点クロスセンサー）
                  </td>
                  <td>191点</td>
                  <td>位相差検出方式:693点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約8670コマ（連続撮影モード）</td>
                  <td>約3780コマ</td>
                  <td>ファインダー使用時:約2850枚 ライブビュー撮影時:約610枚</td>
                  <td>ファインダー使用時:約500枚 モニター使用時:約690枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約160mm×163mm×92mm</td>
                  <td>約160mm×158.5mm×92mm</td>
                  <td>約158.0mm×167.6mm×82.6mm</td>
                  <td>約128.9mm×96.4mm×77.5mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>レンズ</td>
                  <td>レンズ</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>5軸補正 最大5.5段</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>約100%/約0.72倍</td>
                  <td>約100%/約0.72倍</td>
                  <td>約100% / 約0.76倍%</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>約236万ドット3.2型TFT液晶モニター（タッチパネル）</td>
                  <td>約236万ドット3.2型TFT液晶モニター（タッチパネル）</td>
                  <td>約210万ドット3.2型TFT式液晶モニター（タッチパネル）</td>
                  <td>3.0型/2軸可動式/約144万ドット3.0型TFT駆動（タッチパネル）</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約1270g</td>
                  <td>約1240g</td>
                  <td>約1250g</td>
                  <td>約593g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>ダブルスロット</td>
                  <td>ダブルスロット</td>
                  <td>デュアルスロット</td>
                  <td>デュアルスロット</td>
                </tr>
                <tr>
                  <th>記録媒体</th>
                  <td>CFexpressカード（Type B）、XQDカード</td>
                  <td>XQDカード（XQD Type）/CFカード（CF Type)</td>
                  <td>CFexpressメモリーカード（タイプB）</td>
                  <td>SD/SDHC/SDXCメモリーカード（UHS-I /II対応）</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <p class="mb-0 mt-8">ShaSha:ニコン D6 レビュー｜三井公一</p>
        <shasha
          :txt="'ニコンのプロフェッショナル向けデジタル一眼レフ「D6」がついに登場した。主に報道やスポーツの現場で活躍する「ニコン ひと桁番台」の最新鋭機だ。シャッターチャンスを確実にモノにでき、過酷な環境下でも正確無比に稼働することを求められる「闘うマシーン」である。先代モデル「D5」も素晴らしかったが、オートフォーカス性能などをブラッシュアップして正常進化を遂げた。そのニコン「D6」がいよいよ発売開始となる。\n...'"
          :href="'https://shasha.kitamura.jp/article/475458267.html'"
          :src="'/ec/images2/special/camera/feature/nikon/d6/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'ニコン Z 7・Z 6 価格/人気アクセサリー/お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'ニコン D6ご購入時、 ニコン D5 ボディ高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'18,440'" :isCreditBtn="true" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ニコン D6 外観画像'" />
          <p class="text-subtitle-1">ニコン D6の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/d6'" :count="2" />
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
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'd6',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    kitamuraService: KitamuraService,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    shasha: ShaSha,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = '好評発売中！ニコン D6 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン D6 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！ ニコン D6をご購入時、ニコン D5 ボディ ブラック高値下取り実施中')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ニコン D5 ボディ',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%E3%83%8B%E3%82%B3%E3%83%B3%20D5%20%E3%83%9C%E3%83%87%E3%82%A3%EF%BC%88&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: '/images/pd/840/032/7c3/1a3/b55/6b0/6b0/25a/eb7/713/a1j/rd5/7yf/3/L.jpg',
        txt: 'ニコンD６',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/d6/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: 'ニコン D5 ボディ', href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%E3%83%8B%E3%82%B3%E3%83%B3%20D5%20%E3%83%9C%E3%83%87%E3%82%A3%EF%BC%88&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=' },
          { name: 'D850', href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=D850&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=' },
          { name: 'D4s', href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=D4s&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=' },
        ]
      },
      characteristicList: [
        {
          subtitle: 'ニコン史上最強。高密度配置の全点クロスタイプセンサー105点AFシステム',
          contents: [
            '105点のフォーカスポイントはすべてクロスセンサーで、全点が選択可能。AFエリアをD5比約1.6倍の高密度でカバー',
            '新開発のAF専用エンジンにより、約14コマ/秒の高速連続撮影時にも全点同時測距を実現',
            '瞳を優先したAFも可能にするアドバンストシーン認識システム搭載で被写体の平面方向への動きの追尾性能が向上'
          ]
        },
        {
          subtitle: '撮影後のワークフローを効率化する多彩な機能と通信機能を搭載',
          contents: [
            '最も競争力のある画像をフリック操作で優先して送信できる「送信指定」で最重要な画像をいち早く送信可能',
            'D5で高い評価を受けてきた有線LANによる画像転送速度はD6でさらに向上。一段と高い競争力を発揮',
            '目的に応じて、撮影画像を効率的かつ安全に記録できるようCFexpressカード（Type B）/XQDカード対応ダブルスロットを搭載'
          ]
        },
        {
          subtitle: '安心して撮影に集中できる高画質と高い信頼性',
          contents: [
            '画像処理エンジンは最新のEXPEED 6を搭載。撮影後のレタッチなしで高品質な画像を実現',
            'CMOSセンサーと画像処理エンジンの連携により高感度でも効果的にノイズを抑制。ISO 100からISO 102400までの幅広い感度域で高画質を実現',
            'カメラに実装した状態で40万回にもおよぶレリーズテストをクリアーした、プロフェッショナルの過酷な使用に応える高い耐久性を誇るシャッターユニット搭載'
          ]
        },
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
          path: 'ニコン D6',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759903402'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759903402', '4960759146205', '4549292146851', '4548736108288'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759903402',
        '4960759144652',
        '4960759900197',
        '4960759146335',
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
.bgtypetitle {
  background-color: #ffffcc;
}
</style>