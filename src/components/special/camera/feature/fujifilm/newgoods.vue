<template>
  <v-app>
    <div class="newgoods">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image広告 -->
        <div v-if="isShowAdvertisement" class="my-10">
          <topTitleImg
            :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/newgoods/bg_top.jpg'"
            :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/newgoods/sp_img_top.jpg'"
            :topTitle="'フジフイルム newgoods'"
            :topTitleText="'最短約0.02秒の高速・高精度AF搭載\n小型軽量クラシカルデザインミラーレス'"
            :titleColor="'#ffffff'"
            :textColor="'#FFFFFF'"
            :padding="'150px 0px 15px 40px'"
          />
          <div class="red darken-4 text-center mb-2">
            <span class="white--text text-h5 font-weight-bold">2021年9月13日10時よりご予約開始！</span>
          </div>
        </div>
        <!-- ↑top image -->

        <!-- ↓top image 予約開始 -->
        <div v-if="isShowReserve" class="my-10">
          <topTitleImg
            :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/newgoods/bg_top-c.jpg'"
            :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/newgoods/sp_img_top-c.jpg'"
            :topTitle="'フジフイルム newgoods'"
            :topTitleText="'最短約0.02秒の高速・高精度AF搭載\n小型軽量クラシカルデザインミラーレス'"
            :titleColor="'#ffffff'"
            :textColor="'#FFFFFF'"
            :padding="'150px 0px 15px 40px'"
          />
          <div class="red darken-4 text-center mb-2">
            <span class="white--text text-h5 font-weight-bold">ご予約受付中！</span>
          </div>
        </div>
        <!-- ↑top image -->

        <p class="text-left">フジフイルム newgoods</p>

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'フルサイズの約1.7倍ラージフォーマットセンサー採用「GFXシリーズ」ミラーレスデジタルカメラ'" />
        <p>小型軽量ボディに約5,140万画素センサー＆強力な手ブレ補正機構を搭載。圧倒的な機動力で中判デジタルカメラがより身近に！</p>

        <!-- ↓ 価格・ご購入 予約・発売 -->
        <div v-if="isShowReserve" class="my-10">
          <div id="price">
            <subText :textItem="'フジフイルム newgoods 価格・ご購入'" />
            <priceAndPurchase :mainProductList="mainProductList" />
          </div>
        </div>

        <!--特徴 広告・予約・発売-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'フジフイルム newgoodsの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <div v-if="isShowReserve" class="my-10">
          <!--↓ 価格・人気アクセサリー予約・発売-->
          <subText :textItem="'フジフイルム newgoods 価格・人気アクセサリー'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>
        <!--↓ SNSー-->
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import dayjs from 'dayjs';
import SpecialProductService from '@/logic/special-product.service';

export default Vue.extend({
  name: 'fujifilm-newgoods',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,

  },
  setup: (props, context) => {
    document.title = 'フジフイルム newgoods | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム newgoods ご予約受付中、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const query = context.root.$route.query;
    const state = reactive({
      // ↓ ---- 広告掲載期間 ----
      advertisementValidFrom: '2021/09/15 18:35',
      advertisementValidTo: '2021/09/16 10:00',
      // ↑ ---- 広告掲載期間 ----

      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/09/16 10:00',
      reserveValidTo: '2021/10/01 00:00',
      // ↑ ---- 予約掲載期間 ----

      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/10/01 00:00',
      releaseValidTo: '2999/10/25 23:59',
      // ↑ ---- 発売掲載期間 ----

      // ↓ ---- 広告コンテンツを表示するかどうか ----
      isShowAdvertisement: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,

      // 表示期間外メッセージ
      errorMsg: '',

      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images' },
        { naviItem: '作例画像', href: '#images2' }
      ],
      characteristicList: [
        {
          subtitle: '約5,140万画素ラージフォーマットセンサー搭載。超高画質を実現',
          contents: [
            'フルサイズの約1.7倍となるラージフォーマットセンサーを搭載。1画素あたりの受光面積が大きいため、広いダイナミックレンジと高いS/N比を実現。白飛びや黒つぶれを抑えた豊かな階調表現や、ノイズの少ないクリアな写真撮影を可能とし、被写体の質感や、その場の空気感まで描写が可能',
            'センサーの性能をフルに引き出す「フジノン GFレンズ」との組み合わせにより、被写体の細部まで余すことなく描写が可能',
            'ラージフォーマットセンサーならではの浅い被写界深度により、豊かなボケ味を実現。背景を美しくぼかすことで被写体を際立たせた立体的な表現が可能'

          ]
        },
        {
          subtitle: '多彩な色調を可能とする人気の「フィルムシミュレーション」を全19種類搭載',
          contents: [
            '高彩度かつ柔らかい階調表現を特長とする「ノスタルジックネガ」を含む全19種類の「フィルムシミュレーション」を搭載。被写体やシーンに合わせて、写真フィルムを選ぶ感覚で多彩な表現が可能',
            '色や階調などをライブビューで確認しながら撮影可能なので、撮影後の編集時間も大幅短縮できます'
          ]
        },
        {
          subtitle: '5軸・最大6.5段の強力な手ブレ補正機構と小型軽量ボディにより高い機動力を発揮',
          contents: [
            '高性能なジャイロセンサー・加速度センサーを採用した、5軸・最大6.5段の強力な手ブレ補正機構を搭載。光量が少ない場所での手持ち撮影をサポート',
            '質量約900g・高さ約104.2mm・奥行約87.2mmの小型軽量ボディに防滴・-10℃の耐低温構造による高いタフネス性能を実現',

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
          path: 'フジフイルム newgoods',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410452280', '4547410452297'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410452280', '4547410452297', '4547410428131', '4547410428155', '4547410449297', '4547410342963', '4523052024092', '4523052024108', '4547410437775', '4547410345445', '4547410341034', '4547410420333', '4961607734704', '4570046382041', '4547410322040', '4547410433531'],
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
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        console.log(response)
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

    onMounted(() => {
      fetchProduct();
      verifyDate();
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