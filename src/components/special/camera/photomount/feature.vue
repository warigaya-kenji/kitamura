<template>
  <v-app>
    <div class="feature">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <v-sheet color="#fbf2e9">
          <v-img src="/ec/images2/special/camera/photomount/feature/bg_title_01.jpg" max-width="760" max-height="146" alt="写真台紙特集" class="my-1"></v-img>
        </v-sheet>
        <p>
          結婚式・七五三などの記念写真から、メッセージカードとして使える写真台紙まで!<br />
          写真台紙の使い方、写真の貼り方など、新しい写真台紙の楽しみ方が発見できるはず♪
        </p>
        <h2 class="tx-16 mt-7">写真台紙の使い道＆こんな方が購入しています</h2>
        <div class="pa-2">
          <v-img src="	/ec/images2/special/camera/photomount/feature/img_photo-mount_01.jpg" max-width="760" max-height="270" class="mx-auto my-2"></v-img>
        </div>

        <h2 class="tx-16 mt-10">プロに学ぶ！きれいに写真を貼る3つのポイント</h2>
        <v-row class="text-subtitle-2">
          <v-col cols="12" sm="3">
            <div class="point1">
              <p class="txtTop">・白手袋 ・写真台紙<br />・ブロアーorエアスプレー<br />・セロハンテープ<br />・両面テープ</p>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <div class="point2">
              <p class="txtTop">指紋がつかないように白手袋は必ず必要★<br /><br /></p>
              <p class="txtBtm">
                <a href="/ec/special/camera/photomount/feature/2414">台紙貼りのマストアイテム<br />白手袋の購入はコチラをクリック</a>
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <div class="point3">
              <p class="txtTop">中枠に、写真をおいて3箇所★止めましょう！<br /><br /></p>
              <p class="txtBtm">上下左右、全て止めちゃうと歪みが出たりするんです</p>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <div class="point4">
              <p class="txtTop">両面テープで台紙に貼付け仕上げに、ブロアorエアスプレーでホコリを払おう</p>
              <p class="txtBtm"><a href="/ec/ct/C007/020/003/">ブロアー・エアスプレーの購入はコチラをクリック</a></p>
            </div>
          </v-col>
        </v-row>

        <h2 class="tx-16 mt-14">担当U子のおすすめ写真台紙</h2>
        <v-row class="mt-6 mb-8">
          <v-col cols="12" sm="4" v-for="(recommendedPhotoMount, index) in recommendedPhotoMountList" :key="index">
            <p :class="$vuetify.breakpoint.smAndDown ? 'text-subtitle-2 text-center' : 'text-subtitle-2'">{{ recommendedPhotoMount.txt }}</p>
            <v-hover v-slot="{ hover }">
              <a :href="recommendedPhotoMount.href">
                <v-img
                  :src="`/ec/images2/special/camera/photomount/feature/btn_photo-mount_0${index + 1}_${hover ? 'on' : 'off'}.jpg`"
                  max-width="246"
                  max-height="220"
                  :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <h2 class="tx-16 mt-16">おすすめ特集</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <p class="mt-2kt">
          <a href="https://shop.kitamura.jp/">
            <v-img src="/ec/images2/special/camera/photomount/feature/buck-ktop.gif" max-width="80px" height="80px" class="mx-auto"></v-img
          ></a>
        </p>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import Urlcopy from '@/components/common/special/url-copy.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'feature',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = '写真台紙特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '結婚式・七五三などの記念写真から、メッセージカードとしても使える写真台紙を多数取り揃えております。写真台紙はカメラのキタムラにおまかせ下さい')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '写真台紙特集',
          disabled: true
        }
      ],
      recommendedPhotoMountList: [
        { txt: '婚礼やお祝い写真を贈るのにピッタリ', href: '/ec/special/camera/photomount/feature/316' },
        { txt: 'メッセージと一緒に贈るのにピッタリ', href: '/ec/special/camera/photomount/feature/317' },
        { txt: '保管するのにもピッタリな普通台紙', href: '/ec/special/camera/photomount/feature/318' },
      ],
      recommendedFeaturesList: [
        {
          href: "/ec/special/camera/photomount",
          img: "https://shop.kitamura.jp/images/banner/3611.gif",
          alt: "写真台紙 おすすめシリーズ紹介",
        },
        {
          href: '/ec/special/general/graduation_entrance',
          img: 'https://shop.kitamura.jp/images/banner/1929.gif',
          alt: '卒業・入学特集'
        },
        {
          href: 'ec/special/general/sportsday',
          img: 'https://shop.kitamura.jp/images/banner/2006.gif',
          alt: 'パパ・ママ応援！運動会特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.feature h2 {
  font-weight: normal;
  background: url(/ec/images2/special/camera/photomount/feature/bg_title_02.jpg) repeat-y left top;
  color: #ffffff;
  box-sizing: border-box;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
}
.tx-16 {
  font-size: 16px;
}
.point1 {
  background: url(/ec/images2/special/camera/photomount/feature/bg_point_01.jpg) no-repeat center top;
  padding: 15px;
  box-sizing: border-box;
  height: 260px;
}
.point2 {
  background: url(/ec/images2/special/camera/photomount/feature/bg_point_02.jpg) no-repeat center top;
  padding: 15px;
  box-sizing: border-box;
  height: 260px;
}
.point3 {
  background: url(/ec/images2/special/camera/photomount/feature/bg_point_03.jpg) no-repeat center top;
  padding: 15px;
  box-sizing: border-box;
  height: 260px;
}
.point4 {
  background: url(/ec/images2/special/camera/photomount/feature/bg_point_04.jpg) no-repeat center top;
  padding: 15px;
  box-sizing: border-box;
  height: 260px;
}
.txtTop {
  width: 100%;
  padding: 30px 0 0 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.4em !important;
}
.txtBtm {
  width: 100%;
  box-sizing: border-box;
  margin: 90px 0 0 0;
  padding: 0;
  line-height: 1.2em !important;
}
</style>
