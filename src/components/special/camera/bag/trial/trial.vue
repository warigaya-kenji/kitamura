<template>
  <v-app>
    <div class="trial">
      <!-- ↓ パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ パンくず -->
      <div class="main-contents-wrap">
        <!-- 960px以上 -->
        <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/bag/trial/bnr_950-255.png" max-width="100%" height="auto"></v-img>

        <h1 class="mt-2 text-body-1">カメラバッグトライアルサービス</h1>
        <p class="mt-2 text-h6">
          <v-icon color="red darken-4">fas fa-star</v-icon> お近くの<a href="http://sss.kitamura.jp/" target="_blank">カメラのキタムラ店舗</a
          >に取り寄せて、実物を手にとってお試しできます！
        </p>
        <p class="mt-2 text-h6"><v-icon color="red darken-4">fas fa-star</v-icon> お一人様2個まで同時注文・キャンセル可能！</p>
        <p class="mt-2 text-h6"><v-icon color="red darken-4">fas fa-star</v-icon> お店にないカメラバッグを、店頭で手にとってお試しできるチャンスです♪</p>
        <p class="text-body-1">（店頭でのお試しとなりますので、お持ちのカメラ・レンズを店頭にお持ちください）</p>
        <p class="mt-2 mb-0 text-h6 text-center">
          <v-icon color="orange accent-3">fas fa-long-arrow-alt-down</v-icon> 対象のカメラバッグは、こちらのハクバ＆ケンコーのカメラバッグ
          <v-icon color="orange accent-3">fas fa-long-arrow-alt-down</v-icon>
        </p>
        <v-container class="mt-1 mb-3"
          ><v-row dense>
            <v-col cols="12" sm="6" class="bg-tubu float-left">
              <a
                href="/ec/list?narrow18=0&keyword=%E3%83%8F%E3%82%AF%E3%83%90%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%AE%9F%E6%96%BD%E4%B8%AD&category=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20,Number17,Score&searchbox=1&q=%E3%83%8F%E3%82%AF%E3%83%90%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%AE%9F%E6%96%BD%E4%B8%AD&path=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9"
                ><v-img src="https://shop.kitamura.jp/ec/images2/special/camera/bag/trial/i-01.png" max-width="100%" height="auto"></v-img
              ></a>
              <v-col class="pa-1 float-left" cols="12"
                ><v-btn
                  block
                  class="white text-subtitle-1"
                  height="60px"
                  :href="`/ec/list?narrow18=0&keyword=%E3%83%8F%E3%82%AF%E3%83%90%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%AE%9F%E6%96%BD%E4%B8%AD&category=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20,Number17,Score&searchbox=1&q=%E3%83%8F%E3%82%AF%E3%83%90%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%AE%9F%E6%96%BD%E4%B8%AD&path=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9`"
                >
                  <span class="v-btn__content tx-bru font-weight-bold">ハクバ トライアルサービス対象商品 <v-icon>fas fa-angle-right</v-icon></span></v-btn
                ></v-col
              >
            </v-col>

            <v-col cols="12" sm="6" class="bg-tubu float-left">
              <a
                href="/ec/list?narrow18=0&keyword=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3&category=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&limit=100&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=all&index=all&searchbox=1&q=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3&path=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&y=0&x=0"
                ><v-img src="https://shop.kitamura.jp/ec/images2/special/camera/bag/trial/i-02.png" max-width="100%" height="auto"></v-img
              ></a>
              <v-col class="pa-1 float-left" cols="12"
                ><v-btn
                  block
                  class="white text-subtitle-1"
                  height="60px"
                  :href="`/ec/list?narrow18=0&keyword=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3&category=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&limit=100&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=all&index=all&searchbox=1&q=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3&path=%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%90%E3%83%83%E3%82%B0%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%B9&y=0&x=0`"
                >
                  <span class="v-btn__content tx-bru font-weight-bold">ケンコー トライアルサービス対象商品 <v-icon>fas fa-angle-right</v-icon></span></v-btn
                ></v-col
              ></v-col
            ></v-row
          >
        </v-container>
        <v-container class="mt-1">
          <v-row dense>
            <v-col>
              <h2 class="text-h6 font-weight-bold">おすすめ特集・サービス</h2>
              <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
            </v-col>
          </v-row>
        </v-container>
        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
export default Vue.extend({
  name: 'trial',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'カメラバッグトライアルサービス | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'カメラのキタムラ カメラバッグトライアルサービス 開催中！お店でカメラバッグをお試しいただけます♪合わなければキャンセルOK！カメラバッグ・カメラケースは、カメラのキタムラにおまかせください！')
    const state = reactive({
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/bag',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/bag/feature/trekking',
          img: 'https://shopimg.kitamura.jp/images/banner/2932.gif',
          alt: 'フォトトレッキング特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カメラバッグ・カメラケース特集',
          linkUrl: '/ec/special/camera/bag',
          disabled: false
        },
        {
          path: 'カメラバッグトライアルサービス',
          disabled: true
        }
      ],
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
}
a:hover .v-btn-text-color {
  color: #3e2723;
}
.trial {
  &-info {
    color: $text-primary;
  }
}
a .tx-bru {
  color: #3e2723 !important;
}
/*背景*/
.bg-whig {
  background: #ffffff;
}
.bg-tubu {
  background: url(https://shop.kitamura.jp/ec/images2/special/camera/bag/trial/bc_01.png) no-repeat left top;
  background-size: 100% auto;
}
</style>
