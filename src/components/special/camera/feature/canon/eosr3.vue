<template>
  <div class="eosr3">
    <div class="main-contents-wrap">
      <!-- ↓ パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />

      <!-- ↓url copy -->
      <urlcopy />

      <!-- ↓タイトル画像は三項演算子を使い表示期間に応じて動的に画像を変更してます -->
      <topTitleImg
        :pcBackgroundImg="
          isShowFan
            ? '/ec/images2/special/camera/feature/canon/eosr3/fan/bg_top.jpg'
            : isShowReserve
            ? '/ec/images2/special/camera/feature/canon/eosr3/reserve/bg_top.jpg'
            : '/ec/images2/special/camera/feature/canon/eosr3/release/bg_top.jpg'
        "
        :spBackgroundImg="
          isShowFan
            ? '/ec/images2/special/camera/feature/canon/eosr3/fan/sp_img_top.jpg'
            : isShowReserve
            ? '/ec/images2/special/camera/feature/canon/eosr3/reserve/sp_img_top.jpg'
            : '/ec/images2/special/camera/feature/canon/eosr3/release/sp_img_top.jpg'
        "
        :topTitle="'キヤノン EOS R3'"
        :topTitleText="'新開発裏面照射積層型CMOSセンサー&視線入力搭載\n直観や反射神経に限りなく呼応するハイスペック・フルサイズミラーレス'"
        :padding="'175px 0px 15px 30px'"
      />
      <!-- ↑top image -->

      <p class="red darken-4 text-center mb-2">
        <!-- ↓予約か発売かでテキストを変更してます -->
        <span class="white--text text-h6 font-weight-bold">{{
          isShowFan ? 'キャノン EOS R3 2021年9月16日10時 予約受付開始！' : isShowReserve ? 'ご予約受付中！' : '好評発売中'
        }}</span>
      </p>

      <!-- ↓ ナビボタン -->
      <p class="mb-0">キヤノン EOS R3</p>
      <naviBtn v-if="!isShowFan" :naviList="naviList" /><!--煽りの時は非表示 -->

      <div class="text-right">
        <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
          ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
        >
      </div>

      <subText :textItem="'新開発35mmフルサイズ裏面照射積層型CMOSセンサーと視線入力機能搭載を搭載したハイスペック・フルサイズミラーレス'" />
      <p class="mt-2">撮影者と一体化し、直観や反射神経に限りなく呼応。高速・高感度・高信頼性によりユーザーの撮影領域を拡大</p>

      <!-- ↓ 価格・ご購入 or ご予約 -->
      <div v-if="!isShowFan">
        <subText :textItem="isShowRelease ? 'キヤノン EOS R3 価格・ご購入' : 'キヤノン EOS R3 価格・予約'" />
        <!-- 予約か発売かでテキストを変更してます -->
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :btntxt="isShowRelease ? 'ご購入はこちら' : 'ご予約はこちら'" />

        <!-- ↓ 高値下取り -->
        <div id="price">
          <div v-if="isShowReserve">
            <!-- 予約の時 -->
            <subText :textItem="'ご予約特典①：キヤノン EOS R3 ご購入時、高価下取り実施中！'" />
            <expensiveTradeIn :expensiveTradeInList="reserveExpensiveTradeInList" />
          </div>
          <div v-if="isShowRelease">
            <!-- 発売の時 -->
            <subText :textItem="'キヤノン EOS R3 ご購入時、高価下取り実施中！'" />
            <expensiveTradeIn :expensiveTradeInList="releaseExpensiveTradeInList" />
          </div>
        </div>

        <!-- ↓ 60回まで分割 -->
        <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'11,220'"
          :targetDate="'2021年9月15日'"
          :numberOfTimes="'60'"
          :maximumInstallmentPayment="'60'"
        />

        <!--動画で見る-->
        <subText :textItem="'【先行体験】キヤノン EOS R3をタッチ&トライ！'" />
        <p class="mb-2 text-center">キヤノン EOS R3</p>
        <watchInVideo :src="'https://www.youtube.com/embed/a1zg7dCJFnQ?rel=0'" :height="428" />

        <subText :textItem="'【先行体験】キヤノン EOS R3をタッチ&トライ！'" />
        <p class="mb-2 text-center">キヤノン EOS R3</p>
        <watchInVideo :src="'https://www.youtube.com/embed/KvrNAiPMXdk'" :height="428" />
      </div>

      <!-- ↓ 仕様・作例ボタンー -->
      <specificationsExamplesBtn
        :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
        :url="'https://cweb.canon.jp/eos/your-eos/product/eosr/r3/'"
        :height="'70px'"
      />

      <!--比較-->
      <div id="hikaku">
        <subText :textItem="'キヤノン EOS R3 / EOS R5 / EOS-1D X MarkIII / ソニー α1 比較'" />
        <div class="product-comparison mb-5">
          <p class="mb-2">キヤノン EOS R3 / EOS R5 / EOS-1D X MarkIII / ソニー α1 を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年11月下旬発売予定</td>
                <td>2020年7月30日発売</td>
                <td>2020年2月14日発売</td>
                <td>2021年3月19日発売</td>
              </tr>
              <tr v-if="!isShowFan">
                <th>価格</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                  <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                  >（円）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約2410万画素</td>
                <td>約4500万画素</td>
                <td>約2010万画素</td>
                <td>約5010万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>
                  35mmフルサイズ<br />
                  裏面照射積層型CMOSセンサー
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー
                </td>
                <td>
                  35mmフルサイズ<br />
                  積層型CMOSセンサー
                </td>
              </tr>
              <tr>
                <th>
                  AFフレーム<br />
                  測距点
                </th>
                <td>1053点（Dual Pixel CMOS AFⅡ）</td>
                <td>1053点（Dual Pixel CMOS AFⅡ）</td>
                <td>191点（クロス測距点：最大155点）</td>
                <td>759点 (位相差検出方式)/425点 (コントラスト検出方式)</td>
              </tr>
              <tr>
                <th>AF低輝度限界</th>
                <td>EV-7.5</td>
                <td>EV-6</td>
                <td>EV-4</td>
                <td>EV-4</td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>
                  メカシャッター:最高約12コマ/秒<br />
                  電子シャッター:最高約30コマ/秒
                </td>
                <td>
                  メカシャッター:最高約12コマ/秒<br />
                  電子シャッター:最高約20コマ/秒
                </td>
                <td>
                  ファインダー：最高約16コマ/秒<br />
                  ライブビュー：最高約20コマ/秒
                </td>
                <td>
                  メカシャッター:最高約10コマ/秒<br />
                  電子シャッター:最高約30コマ/秒
                </td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>
                  メカシャッター：1/8000-30秒、バルブ<br />
                  電子シャッター：1/64000-30秒、バルブ
                </td>
                <td>
                  メカシャッター：1/8000-30秒、バルブ<br />
                  電子シャッター：1/8000-0.5秒
                </td>
                <td>
                  メカシャッター：1/8000-30秒、バルブ<br />
                  電子シャッター：1/8000-0.5秒
                </td>
                <td>
                  メカシャッター：1/8000-30秒、バルブ<br />
                  電子シャッター：1/32000-30秒
                </td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>ISO100～102400（拡張：下限ISO50、上限ISO204800)</td>
                <td>ISO100～51200（拡張：下限ISO50、上限ISO102400)</td>
                <td>ISO100-102400(拡張：下限ISO50、上限ISO819200)</td>
                <td>ISO100-32000 (拡張: 下限ISO50、上限ISO102400)</td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>
                  576万ドット<br />
                  0.5型電子ビューファインダー<br />
                  OVFビューアシスト搭載
                </td>
                <td>
                  576万ドット<br />
                  0.5型電子ビューファインダー
                </td>
                <td>ペンタプリズム使用、アイレベル式</td>
                <td>
                  943万ドット<br />
                  1.6cm (0.64型) 電子式ビューファインダー
                </td>
              </tr>
              <tr>
                <th>視野率/倍率</th>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.76倍</td>
                <td>100%/約0.76倍</td>
                <td>100%/約0.90倍</td>
              </tr>
              <tr>
                <th>液晶モニター</th>
                <td>
                  約415万ドット<br />
                  3.2型バリアングル式
                </td>
                <td>
                  約210万ドット<br />
                  3.2型バリアングル式
                </td>
                <td>
                  約210万ドット<br />
                  3.2型非可動
                </td>
                <td>
                  約144万ドット<br />
                  3.0型チルト式
                </td>
              </tr>
              <tr>
                <th>
                  静止画撮影可能枚数/時間<br />
                  (CIPA規格基準)
                </th>
                <td>
                  ファインダー使用時: 約620枚<br />
                  液晶モニター使用時: 約860枚
                </td>
                <td>
                  ファインダー使用時: 約320枚<br />
                  液晶モニター使用時: 約320枚
                </td>
                <td>
                  ファインダー撮影：約2850枚<br />
                  ライブビュー撮影：約610枚
                </td>
                <td>
                  ファインダー使用時: 約430枚<br />
                  液晶モニター使用時: 約530枚
                </td>
              </tr>
              <tr>
                <th>連続動画撮影時</th>
                <td>約3時間10分</td>
                <td>約80分</td>
                <td>約4時間40分</td>
                <td>
                  ファインダー使用時: 約145分<br />
                  液晶モニター使用時: 約150分
                </td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>5軸補正 最大8段</td>
                <td>5軸補正 最大8段</td>
                <td>
                  静止画:レンズ内手振れ補正のみ<br />
                  動画:電子IS可能
                </td>
                <td>5軸補正 5.5段</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約150.0×142.6×87.2mm</td>
                <td>約138.5×97.5×88.0mm</td>
                <td>約158.0×167.6×82.6 mm</td>
                <td>約128.9 x 96.9 x 80.8 mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約822g</td>
                <td>約650g</td>
                <td>約1250g</td>
                <td>約652g</td>
              </tr>
              <tr>
                <th>カードスロット</th>
                <td>
                  デュアルスロット<br />
                  CFexpressカード（Type B）/SD(sUHS-II 対応)
                </td>
                <td>
                  デュアルスロット<br />
                  CFexpressカード（Type B）/SD(sUHS-II 対応)
                </td>
                <td>
                  デュアルスロット<br />
                  CFexpressメモリーカード(タイプB)
                </td>
                <td>
                  両対応デュアルスロット<br />
                  CFexpress(タイプA)<br />
                  SDカード
                </td>
              </tr>
              <tr>
                <th>動画</th>
                <td>6K 60P/4K 120P</td>
                <td>8K 30P/4K 120P</td>
                <td>4K 60P</td>
                <td>8K 30P/4K 120P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="clear: both"></div>
      </div>
      <!--比較-->

      <!--特徴-->
      <div id="spec">
        <subText :textItem="'キヤノン EOS R3 の特徴'" />
        <characteristic :characteristics="characteristicList" />
      </div>

      <!-- ↓ 価格・人気アクセサリー -->
      <div v-if="!isShowFan">
        <subText :textItem="'キヤノン EOS R3 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />
      </div>

      <!-- ↓ 作例画像 -->
      <div id="images">
        <subText :textItem="'EOS R5 / EOS R6 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/canon/eosr3/reserve/'" :count="10" />
      </div>

      <!-- ↓ SNS -->
      <facebookAndTwitter />

      <kitamuraService />

      <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
      <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import { ProductDetail } from '@/types/product';
import ProductService from '@/logic/product.service';
import dayjs from 'dayjs';
import SpecialProductService from '@/logic/special-product.service';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'eosr3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    watchInVideo: WatchInVideo,
    characteristic: Characteristic,
    expensiveTradeIn: ExpensiveTradeIn,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  props: {},
  setup: (props, context) => {
    const query = context.root.$route.query;
    const state = reactive({
      // ↓ ---- 煽り掲載期間 ----
      fanValidFrom: '2021/09/22 00:00',
      fanValidTo: '2021/09/25 23:59',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/09/26 00:00',
      reserveValidTo: '2021/09/28 23:59',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/09/29 00:00',
      releaseValidTo: '2099/12/31 23:59',
      // ↓ ---- 煽りコンテンツを表示するかどうか ----
      isShowFan: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,
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
          path: 'キヤノン EOS R3',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '作例', href: '#images' }
      ],
      reserveExpensiveTradeInList: {
        name: 'キヤノン EOS 5D Mark IV ボディ',
        href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292075748&_ga=2.265478278.806725313.1632355099-279164427.1627285160',
        nameImg: '	https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg',
        txt: 'キヤノン EOS R3',
        tradeInImg: '/ec/images2/special/camera/feature/canon/eosr3/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: 'キヤノン EOS 5D Mark IV ボディ', href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292075748' },
          { name: 'キヤノン EOS-1D X MarkIII ボディ', href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292146851' },
          { name: 'キヤノン EOS R6 ボディ', href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292157345&_ga=2.56772259.806725313.1632355099-279164427.1627285160' },
          { name: 'キヤノン EOS R5 ボディ', href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292157253' }
        ]
      },
      releaseExpensiveTradeInList: {
        name: 'キヤノン EOS 5D Mark IV ボディ',
        href: 'https://www.net-chuko.com/ec/sell/item-list?keyword=4549292075748&_ga=2.265478278.806725313.1632355099-279164427.1627285160',
        nameImg: '	https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg',
        txt: 'キヤノン EOS R3',
        tradeInImg: '/ec/images2/special/camera/feature/canon/eosr3/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      characteristicList: [
        {
          subtitle: '進化した高速・高感度・高信頼性と直感的に撮影可能な機能を余すことなく搭載',
          contents: [
            '新開発の有効画素数約2410万画素35mmフルサイズ裏面照射積層型CMOSセンサーによる高速読み出しと、映像エンジン「DIGIC X」の高速画像処理により高速連写と高感度を両立。室内や夜景など暗いシーンでもノイズを抑えた動体撮影を実現',
            '電子シャッター撮影時においてAF／AE追従で最高約30コマ/秒の高速連写と、連続撮影中のブラックアウトフリー撮影を実現。加えて、電子シャッターによる像の歪みの大幅な抑制を実現',
            'RFレンズ使用時、レンズ側の光学式手ブレ補正機構と、ボディー内の手ブレ補正機構の協調制御により、世界最高8.0段の手ブレ補正を実現',
            '各画素が撮像と位相差AFの両方の機能を兼ねる「デュアルピクセル CMOS AF AF」を採用。高速・高精度・広範囲なAFを実現',
            'ディープラーニング技術を活用したアルゴリズムの強化で、人物の頭部・瞳の検出機能の向上と新たに胴体の検出を実現。ポートレートや動きが大きいスポーツなどの撮影シーンでも高い被写体追尾性能を発揮。また、人物、動物（犬・猫・鳥）検出に加えて、乗り物（モータースポーツにおける車・バイク）検出にも対応。検出機能の向上を実現',
            '視線入力機能をキヤノンデジタルカメラ初搭載。静止画撮影時、ファインダーを覗いた瞳の動きに合わせてAFフレームを動かすことができるため、ピントを合わせる被写体を素早く切り換えながら快適な撮影が可能',
          ]
        },
        {
          subtitle: '高い信頼性と操作性を踏襲し、過酷なシーンの撮影も安心して行える信頼感',
          contents: [
            '高精細バリアングル液晶モニターを採用しながら、フラッグシップモデル「EOS 1D X Mark III」と同等の防じん・防滴性能を実現',
            '耐衝撃性、耐久性が高く、電磁シールド効果にも優れたマグネシウム合金を外装に採用。高い剛性と「EOS 1D X Mark III」よりも71%程度軽量な質量約1,015gという軽量化も実現',
            '「EOS 1D X Mark III」との共用が可能な「バッテリーパック LP-E19」を採用。CFexpressカード（Type B）とSDメモリーカード（UHS-II対応）のデュアルスロットを搭載',
            '音に関する一括設定を行える「サイレントシャッター機能」を搭載。液晶モニターを常時消灯することもでき、すばやく音と光に配慮した撮影を行うことが可能'
          ]
        },
        {
          subtitle: '多様な制作ニーズに対応する動画性能を搭載',
          contents: [
            '新CMOSセンサーの高速信号読み出しと、映像エンジン「DIGIC X」の高速処理により、6K 60P 動画のRAWデータ（12bit）による内部記録を実現',
            '4K 120P ハイフレームレート動画撮影を実現。滑らかな映像を撮影することができ、4Kの鮮明さはそのままに、きめ細やかで自然なスローモーション効果を得ることが可能',
            '6Kの豊富なデータから、高画質な4K動画を生成可能。クロップ（切り出し）なしのオーバーサンプリングによる 4K 60P 動画を実現し、モアレやノイズを低減した繊細な映像表現が可能'
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
      mainProductJanCode: ['4549292181661'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['4549292181661', '4549292157345', '4549292146851', '4548736130678'],
      comparisonDetailList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '4549292181661',
        '4549292060553',
        '4549292087864',
        '4960999581569',
        '4549292148381',
        '4549292156263',
        '4549292125405',
        '4549292195378',
        '4549292185782',
        '4549292184556',
        '4549292184549',
        '4549292181197',
        '4523052024092',
        '4523052024108',
        '4548736100268',
        '4548736100275'
      ],
      productDetailList: [] as Array<ProductDetail>
    });

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        console.log(response)
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        if (validationPeriod(today, state.fanValidFrom, state.fanValidTo)) {
          state.isShowFan = true
          document.title = '新製品！キヤノン EOS R3 2021年9月16日10時 予約受付開始 ！ | カメラのキタムラネットショップ'
          document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS R3 2021年9月16日10時 予約受付開始 ！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
        }
        if (validationPeriod(today, state.reserveValidFrom, state.reserveValidTo)) {
          state.isShowReserve = true
          document.title = '新製品！キヤノン EOS R3  ご予約受付中 | カメラのキタムラネットショップ'
          document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS R3 ご予約受付中！ ！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
        }
        if (validationPeriod(today, state.releaseValidFrom, state.releaseValidTo)) {
          state.isShowRelease = true
          document.title = '新製品！キヤノン EOS R3 | カメラのキタムラネットショップ'
          document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS R3 好評発売中！ ！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
        }
      } catch (error) {
        console.error(error);
        today = dayjs().toString();
      }
    };

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
      verifyDate();
      fetchProduct();
    });

    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      verifyDate
    };
  }
});
</script>


