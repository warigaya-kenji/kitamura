<template>
  <v-app>
    <div class="sel70200gm2" v-if="isShow">
      <!-- 表示期間外の場合 -->
      <notfound :errorMessage="errorMsg" v-if="errorMsg" />

      <div class="main-contents-wrap" v-if="!errorMsg">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓タイトル -->
        <topTitleImg
          :pcBackgroundImg="
            isShowAdvertisement
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/fan/bg_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/reserve/bg_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/release/bg_top.jpg'
              : ''
          "
          :spBackgroundImg="
            isShowAdvertisement
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/fan/sp_img_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/reserve/sp_img_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/sel70200gm2/release/sp_img_top.jpg'
              : ''
          "
          :topTitle="'ソニー FE 70-200mm F2.8 GM OSS II '"
          :topTitleText="'約435gの軽量化と最大約4倍のAF高速化を実現した\n『G Master』大口径望遠ズームレンズ'"
          :titleColor="'#000000'"
          :textColor="'#000000'"
          :padding="'170px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <!-- ↓予約か発売かでテキストを変更してます -->
          <span class="white--text text-h6 font-weight-bold">{{
            isShowAdvertisement ? '2021年10月26日10時 予約受付開始！' : isShowReserve ? 'ご予約受付中！' : isShowRelease ? '好評発売中' : ''
          }}</span>
        </p>
        <!--====== 予約・発売 ======-->
        <div v-if="!isShowAdvertisement">
          <!-- ↓ ナビボタン -->
          <naviBtn :naviList="naviList" />
          <!-- ↑ ナビボタン -->
          <!--====== 価格・ご購入 ======-->
          <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" :btntxt="isShowRelease ? 'ご購入はこちら' : 'ご予約はこちら'" />

          <!-- ↓ 高値下取り -->
          <div id="price">
            <div v-if="isShowReserve">
              <!-- 予約の時 -->
              <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ご購入時、高価下取り実施中'" />
              <expensiveTradeIn :expensiveTradeInList="reserveExpensiveTradeInList" />
            </div>
            <div v-if="isShowRelease">
              <!-- 発売の時 -->
              <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ご購入時、高価下取り実施中'" />
              <expensiveTradeIn :expensiveTradeInList="releaseExpensiveTradeInList" />
            </div>
          </div>
          <!-- ↓ 60回まで分割 -->
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'6,188'"
            :targetDate="'2021年10月26日'"
            :numberOfTimes="'48'"
            :maximumInstallmentPayment="'48'"
          />

          <!--特徴-->
          <div class="contents_inner" id="spec">
            <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS IIの特徴'" />
            <characteristic :characteristics="commonCharacteristicList" />
          </div>
          <!--特徴-->
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL70200GM2/'"
          :height="'70px'"
        />
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II / FE 70-200mm F2.8 GM OSS 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FE 70-200mm F2.8 GM OSS II / FE 70-200mm F2.8 GM OSS を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年11月26日発売予定</td>
                  <td>2016年9月30日</td>
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
                  <td>14群-17枚</td>
                  <td>18群-23枚</td>
                </tr>
                <tr>
                  <th>画角（35mm判）</th>
                  <td>34ﾟ-12ﾟ30'</td>
                  <td>34ﾟ-12ﾟ30'</td>
                </tr>
                <tr>
                  <th>開放絞り（F値)</th>
                  <td>2.8</td>
                  <td>2.8</td>
                </tr>
                <tr>
                  <th>最小絞り（F値)</th>
                  <td>22</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th>絞り羽根</th>
                  <td>11 枚</td>
                  <td>11 枚</td>
                </tr>
                <tr>
                  <th>円形絞り</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>0.4-0.82 m</td>
                  <td>0.96 m</td>
                </tr>
                <tr>
                  <th>最大撮影倍率</th>
                  <td>0.3 倍</td>
                  <td>0.25 倍</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>レンズ内手ブレ補正方式</td>
                  <td>レンズ内手ブレ補正方式</td>
                </tr>
                <tr>
                  <th>フィルター径</th>
                  <td>77 mm</td>
                  <td>77 mm</td>
                </tr>
                <tr>
                  <th>外形寸法 最大径ｘ長さ</th>
                  <td>88 x 200 mm</td>
                  <td>88 x 200 mm</td>
                </tr>
                <tr>
                  <th>質量（三脚座別）</th>
                  <td>1045g</td>
                  <td>1480g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2]'" />
        <watchInVideo :src="'https://www.youtube.com/embed/hsZnBaumeF0'" :height="315" />

        <!--====== 予約・発売 ======-->
        <div v-if="!isShowAdvertisement">
          <!-- ↓ 価格・人気アクセサリー -->
          <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II 価格・人気アクセサリー'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] 外観画像'" />
          <p class="text-subtitle-1">ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] 外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/sel70200gm2'" :sm="'6'" />
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice, isDebugMode, validationPeriod } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SpecialProductService from '@/logic/special-product.service';
import dayjs from 'dayjs';
import Notfound from '@/components/common/not-found.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SplitContent from '@/components/common/special/split-content.vue';



export default Vue.extend({
  name: 'sel70200gm2',
  components: {
    breadcrumbs: Breadcrumbs,
    appearanceImage: AppearanceImage,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    kitamuraService: KitamuraService,
    notfound: Notfound,
    characteristic: Characteristic,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    watchInVideo: WatchInVideo,
    naviBtn: NaviBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    splitContent: SplitContent,

  },
  setup: (props, context) => {
    const query = context.root.$route.query;
    document.title = 'ソニー FE 70-200mm F2.8 GM OSS II | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 70-200mm F2.8 GM OSS II  価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      // ↓ ---- 画面自体の表示制御 ----
      isShow: false,
      // ↓ ---- プレ掲載期間 ----
      advertisementValidFrom: '2021/10/28 11:30',
      advertisementValidTo: '2021/10/28 11:40',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/10/28 11:40',
      reserveValidTo: '2021/11/26 00:00',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/11/26 00:00',
      releaseValidTo: '2999/10/20 23:59',
      // ↓ ---- プレコンテンツを表示するかどうか ----
      isShowAdvertisement: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,
      // 表示期間外メッセージ
      errorMsg: '',

      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      reserveExpensiveTradeInList: {
        name: 'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736038400&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/90a/204/b4a/df6/645/f49/970/bbf/34a/490/5d5/ar9/vbt/x/M.jpg',
        txt: 'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel70200gm2/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: 'ソニー FE 70-200mm F2.8 GM OSS [SEL70200GM]', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736038400&pattern=1' },
          { name: 'ソニー FE 70-200mm F4 G OSS [SEL70200G]', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4905524951356&pattern=1' },
          { name: 'ソニー FE 100-400mm F4.5-5.6 GM OSS [SEL100400GM]', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736058415&pattern=1' },
          { name: 'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G]', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736099791&pattern=1' },
          { name: 'ソニー FE 70-300mm F4.5-5.6 G OSS [SEL70300G]', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736033047&pattern=1' }
        ]
      },
      releaseExpensiveTradeInList: {
        name: 'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736038400&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg',
        txt: 'ソニー FE 70-200mm F2.8 GM OSS II [SEL70200GM2] ',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel70200gm2/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      commonCharacteristicList: [
        {
          subtitle: 'フルサイズ用大口径望遠ズームで世界最軽量とズーム全域での高い解像性能を実現',
          contents: [
            '超高度非球面XA（extreme aspherical）レンズや、ED（特殊低分散）非球面レンズを採用した最新の光学設計で、焦点距離70mmから200mmのズーム全域で開放F値2.8から画面周辺部まで緻密に描写する高い解像性能を実現',
            '従来機種（SEL70200GM）より約435g軽い、質量約1,045gを実現。約29%の軽量化を達成。進化するボディの性能を最大限活かせる描写に加え、撮影自由度の向上・持ち運びの快適さを実現',
            'ED（特殊低分散）ガラスを2枚、スーパーEDガラスを2枚搭載。色収差を最小限に抑制し、美しく自然な画像を実現',
            '太陽光などの強い光が入りこむシーンでも、内面反射によるフレアやゴーストの発生を大幅に抑制し、ヌケの良いクリアな画質を実現する「ナノARコーティングII」を採用'
          ]
        },
        {
          subtitle: '「静止画・動画を問わずボディのスピード性能を引き出す最大約4倍のAF高速化を実現',
          contents: [
            'フローティングフォーカス機構に加え独自の4基の高推力なXD（extreme dynamic）リニアモーターを搭載。推力効率が従来機種より大幅に向上し最大約4倍の高速化を実現',
            '高速に近づいてくる被写体を連続撮影する際、ズーム中のフォーカス追随性能が従来機種より約30%と大幅に向上。一瞬のチャンスを逃さない撮影が可能',
            'シビアなピント合わせが求められる被写界深度の浅いスローモーションや、4K、8Kの高精細動画撮影においても、高速・高精度・高追随かつ静粛なAFを実現',
            '新開発絞り駆動機構の搭載で連写で流し撮りをする際や、より被写界深度を深くして被写体を深度に収めながら連写する際などでも絞り値に制限されることなく、動体を高速・高精度AF追随連写で捕捉が可能',
            'フォーカス時のブリージングやフォーカスシフト、ズーム操作に伴う軸ずれを従来よりも大幅に抑制。映像に残る画角の変動や揺れを最小限にし、動画に求められるなめらかな表現が可能',
          ]
        },
        {
          subtitle: '柔らかく美しいぼけ描写と最大撮影倍率0.3倍の高い近接撮影能力',
          contents: [
            '新開発11枚羽根の円形絞りユニットと超高度非球面XA（extreme aspherical）レンズの採用で、被写体に立体感を与える柔らかく美しいぼけ描写を実現',
            '最大撮影倍率0.3倍。70mmで最短0.4m、200mmで最短0.82mの高い近接撮影が可能。レンズが繰り出さないインナーズーム方式の採用で、使い勝手の良さも兼備',
            '1.4倍、2.0倍のテレコンバーター（別売）に対応。装着時も高い描写性能と高速・高精度なAF性能を発揮'
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
          linkUrl: '/ec/special/sale-fair/camera/feature',
          disabled: false
        },

        {
          path: 'ソニー FE 70-200mm F2.8 GM OSS II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736134119',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736134119', '4548736038400',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736134119',


      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 今日の日付が広告掲載期間よりも前かチェックする
     */
    const checkBeforePreperiod = async () => {
      const advertisementValidFrom = dayjs(state.advertisementValidFrom);
      console.log(advertisementValidFrom)
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        console.log(formatToday);

        if (formatToday.isBefore(advertisementValidFrom)) {
          state.errorMsg = '掲載準備中\n大変ご迷惑おかけしますが開始時間までお待ちください。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
    * 今日の日付が発売掲載期間よりも後かチェックする
    */
    const checkAfterReleaseperiod = async () => {
      const releaseValidTo = dayjs(state.releaseValidTo);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isAfter(releaseValidTo)) {
          state.errorMsg = '該当ページは掲載期間が終了いたしました。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        if (validationPeriod(today, state.advertisementValidFrom, state.advertisementValidTo)) {
          state.isShowAdvertisement = true
        }
        if (validationPeriod(today, state.reserveValidFrom, state.reserveValidTo)) {
          state.isShowReserve = true
        }
        if (validationPeriod(today, state.releaseValidFrom, state.releaseValidTo)) {
          state.isShowRelease = true
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
    onMounted(async () => {
      await checkBeforePreperiod();
      if (!state.errorMsg) await checkAfterReleaseperiod();
      if (!state.errorMsg) {
        await verifyDate();
        await fetchProduct();
      }
      state.isShow = true
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>