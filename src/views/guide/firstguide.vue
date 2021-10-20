<template>
  <v-app>
    <div class="firstguide">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'カメラのキタムラネットショップへようこそ'" />
        <p class="pl-6">はじめての方へキタムラネットショップの特長をご紹介します</p>

        <v-container class="features">
          <v-card outlined tile class="pa-2 mb-8" elevation="4" v-for="(features, index) in FeaturesList" :key="index">
            <h2 :class="features.class">{{ features.title }}</h2>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img :src="features.src" max-width="100%" height="auto"> </v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <p v-if="index === 0" class="mb-16">店舗にて<span class="red--text">お受け取り・お支払い</span>が可能<br />店舗受取なら、送料無料です！</p>
                <p v-else class="mb-16">{{ features.text }}</p>
                <v-hover v-slot="{ hover }">
                  <v-btn :elevation="hover ? 8 : 2" block :color="features.btnColor" dark large @click="linkToOtherWindow(features.href)">
                    <span class="text-subtitle-1">{{ features.btntxt }}</span>
                    <v-icon dark right small>far fa-chevron-right</v-icon>
                  </v-btn>
                </v-hover>
                <div v-if="index === 4" class="mt-4">
                  <v-hover v-slot="{ hover }">
                    <v-btn :elevation="hover ? 8 : 2" block :color="features.btnColor" dark large @click="linkToOtherWindow(features.href2)">
                      <span class="text-subtitle-1">{{ features.btn2txt }}</span>
                      <v-icon dark right small>far fa-chevron-right</v-icon>
                    </v-btn>
                  </v-hover>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <userguide />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import Userguide from '@/components/common/guide/user-guide.vue';
import GuideTitle from '@/components/common/guide/title.vue';
export default Vue.extend({
  name: 'firstguide',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = 'ようこそネットショップへ！はじめての方へ｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ようこそネットショップへ！はじめての方へ',
          disabled: true
        }
      ],
      FeaturesList: [
        { class: 'welcome02', title: 'ネットで注文、お店で安心受け取り！', src: 'https://shop.kitamura.jp/files/miseuketori/images/anshin-uketori.jpg', href: "https://sss.kitamura.jp/", btntxt: 'お近くの店舗を探す', btnColor: '#d9760f' },
        { class: 'welcome03', title: '専門店だから安心！アフターフォロー', src: 'https://shop.kitamura.jp/files/miseuketori/images/senmonten.jpg', text: 'ご購入後も、お近くの店舗でサポート！\n使い方から、修理のお申し込みまでお気軽にご相談ください', href: "https://shop.kitamura.jp/sitemap/riyou_afterservice_index.html", btntxt: 'アフターフォローについて', btnColor: '#8ca114' },
        { class: 'welcome04', title: '5年間の長期保証', src: 'https://shop.kitamura.jp/files/miseuketori/images/tyoukihoshou.jpg', text: 'ご購入代金の5％のお支払いで自然故障なら何度でも使える、安心の5年間保証にご加入いただけます', href: "https://shop.kitamura.jp/ec/guide/hoshou", btntxt: 'キタムラ5年間保証について', btnColor: '#297364' },
        { class: 'welcome05', title: 'お支払い方法を多数ご用意', src: 'https://shop.kitamura.jp/files/miseuketori/images/shiharai.jpg', text: '店舗決済／クレジットカード／コンビニ決済\n代金引換（手数料無料！）／銀行振込\nPay-easy決済（インターネットバンク振込）\nショッピングクレジット（48回まで無金利！）\nPayPayオンライン決済', href: "https://shop.kitamura.jp/ec/guide/shiharai", btntxt: 'お支払い方法について', btnColor: '#205b85' },
        { class: 'welcome06', title: '下取りやTポイントでさらにおトク！', src: 'https://shop.kitamura.jp/files/miseuketori/images/shitadorit.jpg', text: '下取りのご利用で大幅値引き\nお買いものでTポイントが貯まる・使える！', href: "https://www.net-chuko.com/static/contents/page/sell-guide.html#a03", btntxt: '下取りについて', href2: 'https://www.kitamura.jp/service/tcard/', btn2txt: 'Tポイントについて', btnColor: '#d80b24' },
      ]
    });

    function linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
    return {
      ...toRefs(state),
      linkToOtherWindow
    };
  }
});
</script>

<style scoped>
.features h2 {
    font-size: 200%;
    font-weight: 800;
    text-align: center;
    margin-bottom: 16px;
}

.welcome02 {
color: #d9760f;
}

.welcome03 {
    color: #8ca114;
}

.welcome04 {
    color: #297364;
}

.welcome05 {
    color: #205b85;
}

.welcome06 {
    color: #d80b24;
}
</style>