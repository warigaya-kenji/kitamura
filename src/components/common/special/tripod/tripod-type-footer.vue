<template>
  <div>
    <div class="my-4 text-center">
      <v-btn width="245" height="50" color="#FF940E" class="white--text text-subtitle-1">おすすめ三脚特集へ戻る</v-btn>
    </div>
    <div class="pa-2">
      <div class="sougo tx-18">おすすめ特集・プリントサービス</div>
      <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
    </div>
    <p class="mt-7">
      <a href="https://shop.kitamura.jp/">
        <v-img src="https://shop.kitamura.jp/ts_rsc/775/images/buck-ktop.gif" max-width="80px" height="80px" class="mx-auto"></v-img
      ></a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'tripod-type-footer',
  components: {
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    const state = reactive({
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest-nd',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/ec/special/camera/okamoto-yutaka',
          img: 'https://shopimg.kitamura.jp/images/banner/7678.jpg',
          alt: '航空写真家 岡本豊先生のレオフォト三脚講座'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/how-to/hanabi/',
          img: 'https://shopimg.kitamura.jp/images/banner/3043.jpg',
          alt: '花火特集'
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
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
.sougo {
  background: url(https://shop.kitamura.jp/ts_rsc/775/images/bgtitlcr.jpg) no-repeat left;
  border-bottom: 2px solid #ffcc00;
  box-sizing: border-box;
  font-family: 'メイリオ';
  font-weight: bold;
  height: 30px;
  margin: 10px 0 10px;
  padding: 0 0 5px 40px;
  width: 100%;
}

.tx-18 {
  font-size: 18px;
}

</style>
