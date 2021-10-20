<template>
  <div class="component4">
    <div class="component4-info">
      <div>テンプレートC</div>
      <div>コンポーネント : sample-component4.vue</div>
      <div class="main-contents-wrap">
        <!-- special(新製品系)ページで使用するコンポーネント一覧です。必要なコンポーネントをインポートして使用してください。-->

        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'https://shop.kitamura.jp/ts_rsc/1354/images/bg_top.jpg'"
          :spBackgroundImg="'https://shop.kitamura.jp/ts_rsc/1478/images/sp_img_top.jpg'"
          :topTitle="'タイトル'"
          :topTitleText="'タイトルテキスト'"
        />
        <!-- ↑top image -->

        <!-- ↓ 外観画像を表示したい場合 -->
        <subText :textItem="'外観画像(コンポーネント名:appearanceImage)'" />
        <appearanceImage :src="'https://shop.kitamura.jp/ts_rsc/1478/images'" :count="3" />

        <!-- ↓ 特徴を表示したい場合 -->
        <subText :textItem="'特徴(コンポーネント名:characteristic)'" id="spec" />
        <characteristic :characteristics="characteristicList" />

        <!-- ↓ 作例画像を表示したい場合 -->
        <subText :textItem="'作例画像(コンポーネント名:exampleImages)'" id="images" />
        <exampleImages :path="'https://shop.kitamura.jp/ts_rsc/1354/images/'" :count="6" />

        <!-- ↓ 高値下取りを表示したい場合 -->
        <subText :textItem="'高値下取り(コンポーネント名:expensiveTradeIn)'" id="price" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" />

        <!-- ↓ facebook,twitterを表示したい場合 -->
        <subText :textItem="'facebook,twitter(コンポーネント名:facebookAndTwitter)'" />
        <facebookAndTwitter />

        <!-- ↓ キタムラサービスを表示したい場合 -->
        <subText :textItem="'キタムラサービス(コンポーネント名:kitamuraService)'" />
        <kitamuraService />

        <!-- ↓ モモ色のボタンを表示したい場合 -->
        <subText :textItem="'モモ色のボタン(コンポーネント名:momoBtn)'" />
        <momoBtn :btntxt="'テキストの内容をがここにきます'" :href="'リンク先をここに指定してください'" :height="'40px'" />

        <!-- ↓ ナビボタンを表示したい場合 -->
        <subText :textItem="'ナビボタン(コンポーネント名:naviBtn)'" />
        <naviBtn :naviList="naviList" />

        <!-- ↓ オレンジ色のボタンを表示したい場合 -->
        <subText :textItem="'オレンジ色のボタン(3種類)(コンポーネント名:orangeBtn)'" />
        <orangeBtn :btntxt="'テキストの内容をがここにきます'" :href="'リンク先をここに指定してください'" :height="'40px'" :btnColor="'orange'" />
        <div class="my-2"></div>
        <orangeBtn :btntxt="'テキストの内容をがここにきます'" :href="'リンク先をここに指定してください'" :height="'40px'" :btnColor="'yellowish'" />
        <div class="my-2"></div>
        <orangeBtn :btntxt="'テキストの内容をがここにきます'" :href="'リンク先をここに指定してください'" :height="'40px'" :type="3" />

        <!-- ↓ 価格・人気アクセサリーを表示したい場合 -->
        <subText :textItem="'価格・人気アクセサリー(コンポーネント名:priceAndPopular)'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 価格・ご購入を表示したい場合 -->
        <subText :textItem="'価格・ご購入(コンポーネント名:priceAndPurchase)'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集(コンポーネント名:recommendedFeatures)'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <!-- ↓ ShaShaを表示したい場合 -->
        <subText :textItem="'ShaSha(コンポーネント名:shasha)'" />
        <shasha
          :txt="'テキスト内容をここに記載してください'"
          :href="'リンク先をここに指定してください'"
          :src="'https://shop.kitamura.jp/ts_rsc/1354/images/shashabnr.webp'"
        />

        <!--↓ ショッピングクレジットを表示したい場合-->
        <subText :textItem="'ショッピングクレジット(コンポーネント名:shoppingCredit)'" />
        <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" />

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <subText :textItem="'目次版ナビメニューを表示したい場合(コンポーネント名:tableOfContentsNavi)'" />
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓ 仕様・作例ボタンを表示したい場合 -->
        <subText :textItem="'仕様・作例ボタン(コンポーネント名:specificationsExamplesBtn)'" />
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'" :url="'リンク先をここに指定してください'" :height="'70px'" />

        <!-- ↓ 48回まで分割を表示したい場合 -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！(コンポーネント名:splitContent)'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'9,488'" :targetDate="'2020年7月10日'" />

        <!--動画で見るを表示したい場合-->
        <subText :textItem="'動画で見る(コンポーネント名:watchInVideo)'" />
        <watchInVideo :src="'https://www.youtube.com/embed/AxJYDPGlcvw?rel=0'" :height="315" />

        <!--価格控えめ訴求バージョンを表示したい場合-->
        <subText :textItem="'価格控えめ訴求バージョン(コンポーネント名:productAppeal)'" />
        <productAppeal :mainProductList="mainProductList" :sm="6"></productAppeal>

        <!--比較を表示したい場合-->
        <div id="hikaku">
          <subText :textItem="'比較サンプル'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">～比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年7月30日</td>
                  <td>2020年8月27日</td>
                  <td>2018年10月25日</td>
                  <td>2019年9月6日</td>
                  <td>2018年3月23日</td>
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
                  <td>約4500万画素</td>
                  <td>約2010万画素</td>
                  <td>約3030万画素</td>
                  <td>約6100万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー（デュアルピクセルCMOS AF II対応）
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー（デュアルピクセルCMOS AF II対応）
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー（デュアルピクセルCMOS AF対応）
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    Exmor R CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    ExmorR CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高約12コマ/秒</td>
                  <td>最高約12コマ/秒</td>
                  <td>最高約8.0コマ／秒</td>
                  <td>最高約10コマ/秒</td>
                  <td>最高約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    JPEG:約350枚<br />
                    RAW：約87枚
                  </td>
                  <td>
                    JPEG:約1000枚以上<br />
                    RAW：約240枚
                  </td>
                  <td>
                    JPEG:約100枚<br />
                    RAW：約34枚
                  </td>
                  <td>
                    JPEG:約68枚<br />
                    RAW：約68枚
                  </td>
                  <td>
                    JPEG:約163枚<br />
                    RAW：約89枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ストロボ同調速度</th>
                  <td>1／200秒</td>
                  <td>1／200秒</td>
                  <td>1／200秒</td>
                  <td>1/250秒</td>
                  <td>1/250秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100～51200<br />
                    （拡張：下限ISO50、上限ISO102400)
                  </td>
                  <td>
                    ISO100～102400<br />
                    （拡張：下限ISO50、上限ISO204800)
                  </td>
                  <td>
                    ISO100～12800<br />
                    （拡張：下限ISO50、上限ISO102400)
                  </td>
                  <td>
                    ISO100-32000<br />
                    （拡張：下限ISO50、上限ISO102400)
                  </td>
                  <td>
                    ISO100-51200<br />
                    （拡張：下限ISO50、上限ISO204800)
                  </td>
                </tr>
                <tr>
                  <th>測距輝度範囲</th>
                  <td>EV－6～20</td>
                  <td>EV－6.5～20</td>
                  <td>EV－6～18</td>
                  <td>EV-3 - EV20</td>
                  <td>EV-3-20</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    静止画：約200枚<br />
                    動画:合計約1時間10分
                  </td>
                  <td>
                    静止画：約250枚<br />
                    動画:合計約2時間25分
                  </td>
                  <td>
                    静止画：約350枚<br />
                    動画:合計約2時間20分
                  </td>
                  <td>
                    静止画：約530枚<br />
                    動画:合計約2時間40分
                  </td>
                  <td>
                    静止画：約610枚<br />
                    動画:合計約3時間10分
                  </td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5軸補正 最大8段</td>
                  <td>5軸補正 最大8段</td>
                  <td>レンズ補正のみ</td>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>液晶性能</th>
                  <td>
                    3.2型/約210万ドット<br />
                    バリアングル式液晶モニター
                  </td>
                  <td>
                    3.0型/約162万ドット<br />
                    バリアングル式液晶モニター
                  </td>
                  <td>
                    3.15型/約210万ドット<br />
                    バリアングル式液晶モニター
                  </td>
                  <td>
                    3.0型/144万ドット<br />
                    チルト式液晶モニター
                  </td>
                  <td>
                    3.0型/92万ドット<br />
                    チルト式液晶モニター
                  </td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.5型/576万ドット</td>
                  <td>0.5型/369万ドット</td>
                  <td>0.5型/369万ドット</td>
                  <td>0.5型/576万ドット</td>
                  <td>0.5型/236万ドット</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約138.5×97.5×88.0ｍｍ</td>
                  <td>約138.4×97.5×88.4ｍｍ</td>
                  <td>約135.8×98.3×84.4mm</td>
                  <td>約128.9×96.4×67.3mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約650g</td>
                  <td>約598g</td>
                  <td>約580g</td>
                  <td>約580g</td>
                  <td>約565g</td>
                </tr>
                <tr>
                  <th>記録メディア/スロット</th>
                  <td>
                    CFexpressカード（Type B）/<br />
                    SD(sUHS-II 対応)デュアルスロット
                  </td>
                  <td>
                    SDデュアルスロット<br />
                    slot1/slot12:UHS-II 対応
                  </td>
                  <td>
                    SDシングルスロット<br />
                    UHS-II 対応
                  </td>
                  <td>
                    SDデュアルスロット<br />
                    slot1/slot12:UHS-II 対応
                  </td>
                  <td>
                    SDデュアルスロット<br />
                    slot1のみUHS-II 対応
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>8K/4K/フルHD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!--カルーセルを表示したい場合-->
        <subText :textItem="'カルーセル(タイプ1）(コンポーネント名:carousels)'" />
        <carousels :carousels="carousels" />
        <subText :textItem="'カルーセル(タイプ2）'" />
        <carousels :carousels="carousels2" :type="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import { ProductDetail } from '@/types/product';
import ProductService from '@/logic/product.service';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import MomoBtn from '@/components/common/special/momoBtn.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import ProductAppeal from '@/components/common/special/productAppeal.vue';
import Carousels from '@/components/common/special/carousels.vue';
export default Vue.extend({
  name: 'sample-component4',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    appearanceImage: AppearanceImage,
    subText: SubText,
    characteristic: Characteristic,
    exampleImages: ExampleImages,
    expensiveTradeIn: ExpensiveTradeIn,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    momoBtn: MomoBtn,
    naviBtn: NaviBtn,
    orangeBtn: OrangeBtn,
    priceAndPopular: PriceAndPopular,
    priceAndPurchase: PriceAndPurchase,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
    shoppingCredit: ShoppingCredit,
    tableOfContentsNavi: TableOfContentsNavi,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    splitContent: SplitContent,
    watchInVideo: WatchInVideo,
    productAppeal: ProductAppeal,
    carousels: Carousels
  },

  setup: (props, context) => {
    const state = reactive({
      // ↓ ---- パンくず ----
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
          path: 'サンプルコンポーネント４',
          disabled: true
        }
      ],
      // ↓ ---- 特徴 ----
      characteristicList: [
        {
          subtitle: 'ボディ内5軸手ブレ補正機構搭載RFレンズ使用時最大8.0段の補正効果',
          contents: [
            'EOSシリーズで初めて、手ブレに連動して撮像素子を動かす補正機構をボディー内に採用。手ブレ補正機構が搭載されていないレンズでも手振れ補正が可能',
            'さらにIS（手振れ補正機構）搭載RFレンズなら最大8.0段分の手ブレ補正を実現。望遠撮影や手持ち撮影といった手ブレの発生しやすい撮影環境でも快適な撮影が可能',
            '動画撮影時には、ボディー内とレンズ内の手ブレ補正機構の協調制御に加え、動画電子ISの併用も可能で作品作りを強力にサポート'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      // ↓ ---- 高値下取り ----
      expensiveTradeInList: {
        name: 'キヤノン EOS 5D Mark IV ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.222765533.714669828.1626591933-721903692.1626267770&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg',
        txt: 'キヤノン EOS R5 / EOS R6',
        tradeInImg: 'https://shop.kitamura.jp/ts_rsc/1354/images/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292157345',
        '4549292157253',
        '4549292157512',
        '4549292157222',
        '4549292162813',
        '4549292162837',
        '4549292115710',
        '4549292115703',
        '4549292148381',
        '4549292115611',
        '4549292156263',
        '4549292168037',
        '4960999581569',
        '4960999581576',
        '4549292125405',
        '4960999530383',
        '4523052023392',
        '4523052023408',
        '4523052016639'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      mainProductJanCode: ['4549292157345', '4549292157253', '4549292157512'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292157345', '4549292157253', '4549292157512', '4548736108264', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー',
          target: 'brank',
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
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
      // ↓ ---- ショッピングクレジット ----
      installmentPaymentExampleList: [
        { productPrice: '84,910', numberOfDivisions: '20', monthlyPayment: '4,246' },
        { productPrice: '58,310', numberOfDivisions: '10', monthlyPayment: '5,831' },
      ],
      // ↓ ---- カルーセル(タイプ１) ----
      carousels: [
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga01.jpg',
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga02.jpg',
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga03.jpg',
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga04.jpg',
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga05.jpg',
        'https://shop.kitamura.jp/ts_rsc/1350/images/ga06.jpg',
      ],
      // ↓ ---- カルーセル(タイプ２) ----
      carousels2: [
        { src: 'https://shop.kitamura.jp/ts_rsc/285/images/touit-slide_01.jpg', txt: 'FUJIFILM X-E1 × Carl Zeiss Touit 2.8/12 （ f/11 ISO/200 1/500秒 ）' },
        { src: 'https://shop.kitamura.jp/ts_rsc/285/images/touit-slide_02.jpg', txt: 'FUJIFILM X-Pro1 × Carl Zeiss Touit 2.8/12 （ f/16 ISO/200 4秒 ）' },
        { src: 'https://shop.kitamura.jp/ts_rsc/285/images/touit-slide_03.jpg', txt: 'FUJIFILM X-E1 × Carl Zeiss Touit 2.8/12 （ f/13 ISO/640 18秒 ）' },
        { src: 'https://shop.kitamura.jp/ts_rsc/285/images/touit-slide_04.jpg', txt: 'SONY NEX-7 × Carl Zeiss Touit 1.8/32 （ f/1.8 ISO/100 1/640秒 ）' },
        { src: 'https://shop.kitamura.jp/ts_rsc/285/images/touit-slide_05.jpg', txt: 'SONY NEX-7 × Carl Zeiss Touit 1.8/32 （ f/1.8 ISO/100 1/2500秒 ）' },
      ]
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // // 比較
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
      formatPrice,
    };
  }
});
</script>


