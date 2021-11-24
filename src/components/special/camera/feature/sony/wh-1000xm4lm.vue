<template>
  <v-app>
    <div class="wh-1000xm4lm" v-if="isShow">
      <!-- 表示期間外の場合 -->
      <notfound :errorMessage="errorMsg" v-if="errorMsg" />

      <div class="main-contents-wrap" v-else-if="!errorMsg">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓タイトル画像は三項演算子を使い表示期間に応じて動的に画像を変更してます -->
        <topTitleImg
          :pcBackgroundImg="
            isShowFan
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/fan/1bg_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/reserve/1bg_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/release/1bg_top.jpg'
              : ''
          "
          :spBackgroundImg="
            isShowFan
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/fan/1sp_img_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/reserve/1sp_img_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/wh-1000xm4lm/release/1sp_img_top.jpg'
              : ''
          "
          :topTitle="'ソニー ノイズキャンセリング機能搭載 密閉型 ワイヤレス ヘッドホン \nWH-1000XM4-LM ミッドナイトブルー'"
          :topTitleText="''"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <!-- ↓予約か発売かでテキストを変更してます -->
          <span class="white--text text-h6 font-weight-bold">{{
            isShowFan ? '2021年11月29日10時 予約受付開始！' : isShowReserve ? 'ご予約受付中！' : isShowRelease ? 'ご予約受付終了致しました' : ''
          }}</span>
        </p>

        <div v-if="!isShowFan">
          <!--====== 価格・ご購入 ======-->
          <subText :textItem="'ソニー ワイヤレスイヤホンヘッドホン WH-1000XM4 LM ミッドナイトブルー価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" :btntxt="isShowRelease ? '商品詳細はこちら' : 'ご予約はこちら'" />
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
import { noimage, formatPrice, isDebugMode, validationPeriod } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SpecialProductService from '@/logic/special-product.service';
import dayjs from 'dayjs';
import Notfound from '@/components/common/not-found.vue';



export default Vue.extend({
  name: 'wh-1000xm4lm',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    kitamuraService: KitamuraService,
    notfound: Notfound,

  },
  setup: (props, context) => {
    const query = context.root.$route.query;
    document.title = 'ソニー ワイヤレスイヤホンヘッドホン WH-1000XM4 LM ミッドナイトブルー | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー ワイヤレスイヤホンヘッドホン WH-1000XM4 LM ミッドナイトブルー 価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      // ↓ ---- 画面自体の表示制御 ----
      isShow: false,
      // ↓ ---- プレ掲載期間 ----
      fanValidFrom: '2021/11/24 10:00',
      fanValidTo: '2021/11/29 09:59',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/11/29 10:00',
      reserveValidTo: '2021/12/06 09:59',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/12/06 10:00',
      releaseValidTo: '2999/10/20 23:59',
      // ↓ ---- プレコンテンツを表示するかどうか ----
      isShowFan: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,
      // 表示期間外メッセージ
      errorMsg: '',


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
          path: 'ソニー ワイヤレスイヤホンヘッドホン WH-1000XM4 LM ミッドナイトブルー',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736132528',],
      mainProductList: [] as Array<ProductDetail>,


    });

    /**
     * 今日の日付が広告掲載期間よりも前かチェックする
     */
    const checkBeforePreperiod = async () => {
      const fanValidFrom = dayjs(state.fanValidFrom);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isBefore(fanValidFrom)) {
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
        if (validationPeriod(today, state.fanValidFrom, state.fanValidTo)) {
          state.isShowFan = true
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


      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;

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