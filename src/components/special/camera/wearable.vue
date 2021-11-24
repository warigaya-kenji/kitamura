<template>
  <v-app>
    <div class="wearable">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-container class="ts-box-1">
          <v-sheet color="white" class="pa-5">
            <h1>ウェアラブル特集 カメラ・スマートウォッチ</h1>
            <p>
              ウェアラブル（wearable）とは腕時計型やメガネ型など直接身に付けて持ち歩くことができる端末のこと。両手が空き、あることをしながらも別のことができるので、たとえば寝ながら○○する、運動しながら○○することで、普段の生活ではわからないことがわかったり体験できたりします。<br />
              その中でも特に人気のカメラタイプ、腕時計タイプをご紹介します！
            </p>
          </v-sheet>
          <v-row class="pa-2">
            <v-col cols="12" sm="6">
              <a v-scroll-to="'#watch'">
                <v-sheet color="#000033" class="pa-2 text-center white--text font-weight-bold" rounded="rounded">
                  <v-img src="/ec/images2/special/camera/wearable/img_d.jpg" alt="スマートウォッチ" max-width="285" max-height="90" class="mx-auto"></v-img>
                  スマートウォッチ
                </v-sheet>
              </a>
            </v-col>
            <v-col cols="12" sm="6">
              <a v-scroll-to="'#camera'">
                <v-sheet color="#000033" class="pa-2 text-center white--text font-weight-bold" rounded="rounded">
                  <v-img src="/ec/images2/special/camera/wearable/img_c.jpg" alt="ウェアラブルカメラ" max-width="285" max-height="90" class="mx-auto"></v-img>
                  ウェアラブルカメラ
                </v-sheet>
              </a>
            </v-col>
          </v-row>

          <v-sheet id="watch" color="#000033" class="mt-sm-15 mt-7 mb-5 py-2 px-5 white--text font-weight-bold text-subtitle-1"
            >スマートウォッチ（腕時計型ウェアラブル）</v-sheet
          >
          <v-sheet color="white" class="pa-2">
            <p>
              スマートフォンと連動し、毎日を便利に楽しく。<br />
              生活のログを残したり、スマホの着信をアラートしてくれたり、とても便利なスマートウォッチが大人気。<br />
              睡眠記録や活動量計、歩数＆距離＆カロリー記録、GPSゴルフナビなど、機能は様々。自分にぴったりのスマートウォッチを見つけてください♪
            </p>
            <v-row no-gutters>
              <v-col cols="12" sm="4" v-for="(img, i) in smartWatchImgList" :key="i">
                <v-img :src="img" max-width="290" height="auto" class="mx-auto"></v-img>
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col cols="12" sm="6" v-for="(img2, i) in smartWatchImg2List" :key="i">
                <v-card outlined class="v-card-style text-center">
                  <a :href="img2.href">
                    <v-img :src="img2.src" max-width="200" height="auto" :alt="img2.alt" class="mx-auto"></v-img>
                    {{ img2.name }}
                  </a>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>

          <v-sheet id="camera" color="#000033" class="mt-sm-15 mt-7 mb-5 py-2 px-5 white--text font-weight-bold text-subtitle-1">ウェアラブルカメラ</v-sheet>
          <v-sheet color="white" class="pa-2">
            <p>小型・軽量が魅力のウェアラブルカメラは、アウトドアでの撮影におすすめです。</p>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/wearable/img_ca.jpg" max-width="290" height="auto" alt="イメージ" class="ml-sm-auto mx-auto"></v-img>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/wearable/img_cd.jpg" max-width="290" height="auto" alt="イメージ" class="mr-sm-auto mx-auto"></v-img>
              </v-col>
            </v-row>
            <p class="text-center">（画像はイメージです）</p>
            <v-row class="mb-1">
              <v-col cols="12" sm="6">
                <v-card outlined class="v-card-style text-center">
                  <a href="/ec/ct/C005/003/">
                    <v-img src="/ec/images2/special/camera/wearable/weaa.jpg" max-width="200" height="auto" class="mx-auto"></v-img>
                    ウェアラブルカメラ 一覧を見る ≫
                  </a>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter class="my-7" />

        <h5 class="spec2">人気・おすすめ特集</h5>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'wearable',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'ウェアラブル特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ウェアラブル特集！人気のウェアラブルカメラや腕時計型スマートウォッチをまとめました。キタムラネットショップなら全国で受け取り可能です')

    const state = reactive({
      smartWatchImgList: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/wearable/img_b.gif', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/wearable/img_wa.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/wearable/img_wb.jpg'],
      smartWatchImg2List: [
        { name: 'ガーミン ≫', href: '/ec/ct/E019/028/039/', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/wearable/gamin.jpg', alt: "ガーミン" },
        { name: 'フィットビット ≫', href: '/ec/ct/E019/028/043/', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/wearable/fitbit.jpg', alt: "フィットビット" },
      ],

      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/waterproof',
          img: 'https://shopimg.kitamura.jp/images/banner/1220.jpg',
          alt: '防水カメラ・ウェアラブルカメラ特集'
        },
        {
          href: '/ec/special/camera/feature',
          img: 'https://shop.kitamura.jp/images/banner/1341.jpg',
          alt: '話題の新製品'
        },
        {
          href: '/ec/special/camera/bag',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: 'カメラバッグ・カメラケース特集'
        },
        {
          href: "/ec/special/general/highly_recommended/2015/0821",
          img: "https://shop.kitamura.jp/images/banner/3576.png",
          alt: "COOLSHOT特集",
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント',
          target: 'blank'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ウェアラブル特集 カメラ・腕時計型',
          disabled: true
        }
      ],
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
.wearable {
  .ts-box-1 {
    box-sizing: border-box;
    padding: 15px;
    background-image: url(/ec/images2/special/camera/wearable/bg.gif);
    background-repeat: repeat;
    color: #333333;
  }
  h1 {
    margin: 0px 0px 10px 0px;
    font-size: 20px;
    line-height: 1.3em;
    font-weight: 800;
    color: #000033;
  }
  .spec2 {
    background: rgba(0, 0, 0, 0) url(/ec/images2/special/camera/wearable/bgtitlesum.gif) no-repeat scroll 0 0;
    border-bottom: 2px solid #ffcc00;
    font-weight: bold;
    color: #444444;
    font-size: 22px;
    height: auto;
    margin: 30px 0 15px;
    padding: 0 10px 0 35px;
    box-sizing: border-box;
  }
}
</style>

<style scoped>
.v-card-style {
  border: #000033 1px solid;
    display: block;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0 6px 4px #c1c1c1;
}
</style>
