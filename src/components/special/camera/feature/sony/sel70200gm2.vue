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

  },
  setup: (props, context) => {
    const query = context.root.$route.query;
    document.title = 'ソニー FE 70-200mm F2.8 GM OSS II | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 70-200mm F2.8 GM OSS II  価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      // ↓ ---- 画面自体の表示制御 ----
      isShow: false,
      // ↓ ---- プレ掲載期間 ----
      advertisementValidFrom: '2021/10/14 15:00',
      advertisementValidTo: '2021/10/26 10:00',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/10/26 10:00',
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
      commonCharacteristicList: [
        {
          subtitle: 'タイトル',
          contents: [
            '',
            '',
            ''
          ]
        },
        {
          subtitle: '「タイトル',
          contents: [
            '',
            '',
            ''
          ]
        },
        {
          subtitle: 'タイトル',
          contents: [
            '',
            '',
            ''
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
          linkUrl: '/ec/special/sale-fair/camera/feature',
          disabled: false
        },

        {
          path: 'ソニー FE 70-200mm F2.8 GM OSS II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736130876',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736121614', '4960759904485', '4548736079625', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130876',
        '4548736130975',
        '4548736130920',
        '4548736131026',

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