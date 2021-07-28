<template>
  <v-app>
    <div class="polarie">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <div class="text-right">
          <v-btn
            color="red darken-2"
            class="white--text body-2 mb-1"
            v-clipboard:copy="'https://shop.kitamura.jp/ec/special/camera/feature/canon/tripod'"
            v-clipboard:success="onCopy"
            height="30px"
            >≫ このページのURLをコピーする</v-btn
          >
          <p class="caption">
            <a href="/special/sale-fair/page/bookmark/" target="_blank"> (?)ブラウザ別 お気に入り・ブックマーク登録方法</a>
          </p>
        </div>

        <!-- ↓ 画像の読み込み -->
        <div class="topimg">
          <h1 class="text-center white--text">星空を撮影しよう！ 星空撮影入門特集</h1>
        </div>
        <!-- ↑ 画像の読み込み -->

        <!--↓アンカー-->
        <v-container class="bk-kn mb-4">
          <v-row class="">
            <v-col cols="4" class="lin my-2" v-for="navi in naviList" :key="navi">
              <a :href="navi.herf" class="white--text">{{ navi.naviItem }}<v-icon color="white">fas fa-arrow-circle-right</v-icon></a>
            </v-col>
          </v-row>
        </v-container>

        <h2 class="text-left ntitle white--text pa-2">星空撮影に最低限必要なアイテム！</h2>
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
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'polarie',
  components: {
    breadcrumbs: Breadcrumbs
    // facebookAndTwitter: FacebookAndTwitter,
    // recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: '星空撮影に最低限必要なもの ', herf: '#no1' },
        { naviItem: 'ポラリエで星空撮影 ', herf: '#no3' },
        { naviItem: '星空撮影おすすめカメラ ', herf: '#no4' },
        { naviItem: '星空撮影おすすめレンズ ', herf: '#no5' },
        { naviItem: '星空撮影おすすめカメラ用品 ', herf: '#no6' },
        { naviItem: '星空写真ギャラリー ', herf: '#no7' }
      ],
      toyoMoistureProofList: [
        { text: '東洋リビング ED-55CAT(BW) 防湿庫 ブラック＆ホワイト', herf: '/ec/pd/4945931015050' },
        { text: '東洋リビング ED-80CATP2(B) オートクリーンドライ防湿庫', herf: '/ec/pd/4945931019010' },
        { text: '東洋リビング ED-120CATP2(B) オートクリーンドライ防湿庫', herf: '/ec/pd/4945931019027' },
        { text: '東洋リビング ED-165CATP2（B） オートクリーンドライ防湿庫', herf: '/ec/pd/4945931019041' }
      ],
      toriMoistureProofList: [
        { text: 'トーリ・ハン NT-33-MIII ドライ・キャビ', herf: '/ec/pd/4930381440088' },
        { text: 'トーリ・ハン NT-83-MIII ドライ・キャビ', herf: '/ec/pd/4930381440095' },
        { text: 'トーリ・ハン NT-103-MIII ドライ・キャビ', herf: '/ec/pd/4930381440101' },
        { text: 'トーリ・ハン PH-110 ドライ・キャビ', herf: '/ec/pd/4930381440033' }
      ],
      hakubaMoistureProofList: [
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 25L', herf: '/ec/pd/4977187403503' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 40L', herf: '/ec/pd/4977187403510' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 60L', herf: '/ec/pd/4977187403527' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 100L', herf: '/ec/pd/4977187403534' }
      ],
      storageCapacityList: [
        { amount: '50L以下', type: '（小型）', criterion: '一眼カメラが4～5台、レンズ数本が目安。\nギナーさん向け' },
        { amount: '550L～120L', type: '（中型）', criterion: '一眼カメラが10～20数台、比較的多くのレンズやアクセサリーをお持ちの人向け' },
        { amount: '140L以上', type: '（大型）', criterion: '一眼カメラが30～80台、横型防湿庫なら大口径のレンズも、らくらく収納可能' }
      ],
      recommendedFeaturesList: [
        {
          herf: 'https://shop.kitamura.jp/special/sale-fair/general/tuyutaisaku/',
          img: 'https://shopimg.kitamura.jp/images/banner/5422.png',
          alt: '梅雨対策特集'
        },
        {
          herf: '/special/sale-fair/camera/bag/trial/',
          img: 'https://shopimg.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          herf: '/special/sale-fair/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: 'カメラバッグ・カメラケース特集'
        },
        {
          herf: '/special/sale-fair/sale/lotbuying/',
          img: 'https://shopimg.kitamura.jp/images/banner/3773.gif',
          alt: 'まとめ買いコーナー'
        },
        {
          herf: 'https://shop.kitamura.jp/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          herf: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      visible: false,
      index: 0 // default: 0
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
    showImg(index: number) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '星空総合ページ',
          linkUrl: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          disabled: false
        },
        {
          path: '星空を撮影しよう！ 星空撮影入門特集',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/polarie/',
          disabled: false
        }
      ],
      mainProductJanCode: [
        '8024221631142',
        '8024221647822',
        '4906752106969',
        '8024221668315',
        '8024221623178',
        '8024221623314',
        '4906752108345',
        '8024221623291',
        '4906752201688',
        '4907990407856',
        '8024221667189',
        '4906752204238',
        '4906752100448'
      ],
      mainProductList: [] as Array<ProductDetail>
    });
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

<style lang="scss" scoped>
.topimg {
  background-image: url('/ec/images2/special/camera/polarie/bn-000.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0px -140px;
  display: block;
  padding: 40px 0 70px 0;
}
.bk-kn {
  background-color: #09093f;
}
.lin {
  border: #f1ff63 1px dotted;
}
h2.ntitle {
  background: rgb(6, 103, 125);
  background: linear-gradient(90deg, rgba(6, 103, 125, 1) 0%, rgba(7, 146, 147, 1) 100%);
}
</style>
