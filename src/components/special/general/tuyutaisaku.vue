<template>
  <v-app>
    <div class="tuyutaisaku">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <p class="mb-0">梅雨の時期に！ 梅雨対策特集―梅雨の湿気対策におすすめのアイテムをご紹介―</p>
        <div class="mb-7 bg-kaba pd-mds" v-if="$vuetify.breakpoint.mdAndUp">
          <p class="le ma-0 tx-14">
            <!--いつ始まるかわからない梅雨入り。-->ジメジメする梅雨の時期を快適に過ごせる、湿気・カビなの対策におすすめのアイテムを厳選！<br />
            カメラ・レンズをカビや湿気から守る防湿庫や、防カビ剤などのカメラ保管用品のほか、「洗濯物が乾きにくい」「部屋干しが続いて生乾きが気持ち悪い」「髪がまとまらない」といった、梅雨の時期の悩みに応えるおすすめの家電製品もピックアップ！
          </p>
        </div>
        <v-img v-if="$vuetify.breakpoint.smAndDown" src="/ec/images2/special/general/tuyutaisaku/bk01sp.png" max-width="100%" height="auto"></v-img>

        <v-row class="mt-2">
          <v-col cols="12" :sm="index === 4 ? 12 : index === 7 ? 12 : 6" v-for="(rainySeasonMeasures, index) in rainySeasonMeasuresList" :key="index">
            <v-img v-if="index === 4" :src="rainySeasonMeasures.src" max-width="92" max-height="59" class="ml-auto"></v-img>
            <v-img v-else-if="index === 7" :src="rainySeasonMeasures.src" max-width="106" max-height="87" class="ml-auto"></v-img>
            <div v-else>
              <router-link :to="rainySeasonMeasures.href">
                <v-img
                  v-if="index === 5 || index === 6"
                  :src="`/ec/images2/special/general/tuyutaisaku/kt0${index}.png`"
                  max-width="452"
                  max-height="155"
                  class="hover"
                ></v-img>
                <v-img v-else :src="`/ec/images2/special/general/tuyutaisaku/kt0${index + 1}.png`" max-width="452" max-height="155" class="hover"></v-img>
              </router-link>
              <p class="mt-1 mb-0 bk-niku">{{ rainySeasonMeasures.txt }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <p class="mb-0 ml-4">おすすめ特集</p>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <p class="mt-7">
          <a href="https://shop.kitamura.jp/">
            <v-img src="https://shop.kitamura.jp/ts_rsc/775/images/buck-ktop.gif" max-width="80px" height="80px" class="mx-auto"></v-img
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

import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';



export default Vue.extend({
  name: 'tuyutaisaku',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = '梅雨対策特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '防湿庫、除湿機、ふとん乾燥機など、湿気・梅雨対策におすすめのアイテムを厳選。ジメジメする梅雨を快適に過ごしましょう。')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '梅雨対策特集',
          disabled: true
        }
      ],
      rainySeasonMeasuresList: [
        { href: '/ec/special/sale-fair/camera/storage', txt: 'カメラ、レンズの湿気・カビ対策に！ おすすめの防湿庫やドライボックス、乾燥剤などをまとめました' },
        { href: '/ec/special/sale-fair/camera/storage/368', txt: '突然雨が降っても安心！ カメラをしっかりガードして撮影できる、おすすめの「雨よけアイテム」をピックアップ！' },
        { href: '/ec/list?narrow18=0&keyword=&category=空調家電%3A除湿機&n20c=完了商品は除く&sort=number20,Price,Score&path=空調家電%3A除湿機', txt: '除湿機で、お部屋も部屋干しの衣類もカラッと快適に。冬は結露防止にも役立つ除湿機は、年中使えるおすすめ家電です' },
        { href: '/ec/ct/E004/002/001/', txt: 'なかなか布団を外に干せない梅雨の時期には「ふとん乾燥機」が便利。カビ対策やダニ対策にも効果的！ ふかふかのお布団で快適な睡眠を' },
        { src: '/ec/images2/special/general/tuyutaisaku/bk03.png' },
        { href: '/ec/special/general/tuyutaisaku/dish-dryer', txt: '洗った食器や布巾の水分が雑菌を増殖させる原因に！ 高温でしっかり乾燥して食の安全対策を' },
        { href: '/ec/list?narrow18=0&keyword=&category=理美容家電%3Aドライヤー%2Fヘアケア&path=理美容家電%3Aドライヤー%2Fヘアケア&n20c=完了商品は除く', txt: '湿気で髪がうねるのは、痛んで乾燥しているから。毎日のヘアケアで、梅雨でも広がらない、まとまりのある髪へ！' },
        { src: '/ec/images2/special/general/tuyutaisaku/bk04.png' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/waterproof',
          img: 'https://shopimg.kitamura.jp/images/banner/1220.jpg',
          alt: '防水カメラ・ウェアラブルカメラ特集'
        },
        {
          href: "/ec/special/kaden/fan-fair",
          img: "https://shop.kitamura.jp/images/banner/6597.jpg",
          alt: "おすすめ扇風機特集2019",
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
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
.pd-mds {
  padding: 120px 180px 0px 35px;
  box-sizing: border-box;
}
.bg-kaba {
  background: url(/ec/images2/special/general/tuyutaisaku/bk01.png) no-repeat left top;
}
.tx-14 {
  font-size: 14px;
}
.bk-niku {
  background: url(/ec/images2/special/general/tuyutaisaku/bk02.png) no-repeat left top;
  padding-left: 40px;
  padding-right: 25px;
  box-sizing: border-box;
}
</style>
