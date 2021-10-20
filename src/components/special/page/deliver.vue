<template>
  <v-app>
    <div class="deliver">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-container>
          <v-main class="">
            <v-container class="ma-0 pa-0">
              <div class="used-navi py-6 px-2">
                <h1>カメラのキタムラ 商品お届けまでの流れ</h1>
                <v-row class="my-4">
                  <v-col cols="12" sm="4" v-for="(navi, index) in naviBtn" :key="`second-${index}`">
                    <a :href="navi.href">
                      <div class="d-flex flex-column justify-space-between align-center">
                        <v-img :src="navi.src" @mouseover="changeImg(index)" @mouseleave="returnImg(index)" max-width="80%" height="auto"></v-img>
                      </div>
                    </a>
                  </v-col>
                </v-row>

                <!--==================== 商品のお届けまでの流れ（店舗受取の場合） ====================-->
                <div class="mt-10">
                  <p class="text-h6" id="a01"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（店舗受取の場合）</p>
                  <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                  <div :class="$vuetify.breakpoint.mdAndUp ? 'px-8' : ''">
                    <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                      <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>店舗受取の場合
                    </div>
                    <p class="mt-2">
                      ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                      ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                    </p>
                    <v-img src="/ec/images2/special/page/deliver/pc/02.png" max-width="100%"></v-img>
                  </div>
                </div>

                <!--==================== 商品のお届けまでの流れ（宅配受取の場合） ====================-->

                <div class="mt-10">
                  <p class="text-h6" id="a02"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（宅配受取の場合)</p>
                  <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                  <div :class="$vuetify.breakpoint.mdAndUp ? 'px-8' : ''">
                    <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                      <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>宅配受取の場合
                    </div>
                    <p class="mt-2">
                      ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                      ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                    </p>
                    <v-img src="/ec/images2/special/page/deliver/pc/01.png" max-width="100%"></v-img>
                  </div>
                </div>

                <!--==================== 商品お届けまでの流れ（メーカー直送の場合） ====================-->

                <div class="mt-10">
                  <p class="text-h6" id="a03"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品お届けまでの流れ（メーカー直送の場合）</p>
                  <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                  <div :class="$vuetify.breakpoint.mdAndUp ? 'px-8' : ''">
                    <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                      <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>メーカー直送の場合
                    </div>
                    <p class="mt-2">
                      ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                      ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                    </p>
                    <v-img src="/ec/images2/special/page/deliver/pc/03.png" max-width="100%"></v-img>
                  </div>
                </div>
              </div>
            </v-container>
          </v-main>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
export default Vue.extend({
  name: 'deliver',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
    document.title = '商品のお届けまでの流れ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '商品のお届けまでの流れ | 全国900店舗のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '商品のお届けまでの流れ',
          disabled: true
        }
      ],
      naviBtn: [
        { src: '/ec/images2/special/page/deliver/pc/btn01_off.png', href: '#a01' },
        { src: '/ec/images2/special/page/deliver/pc/btn02_off.png', href: '#a02' },
        { src: '/ec/images2/special/page/deliver/pc/btn03_off.png', href: '#a03' }
      ]
    });

    //mouseover時の処理
    const changeImg = (target: number) => {
      state.naviBtn[target].src = `/ec/images2/special/page/deliver/pc/btn0${target + 1}_on.png`;
    };
    //mouseleave時の処理
    const returnImg = (target: number) => {
      state.naviBtn[target].src = `/ec/images2/special/page/deliver/pc/btn0${target + 1}_off.png`;
    };

    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      changeImg,
      returnImg
    };
  }
});
</script>

<style scoped>
.used-navi {
  background: url(/ec/images2/special/page/deliver/pc/bg03.jpg);
}
.used-navi h1 {
  background: none repeat scroll 0 0 #b91329;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 10%);
  margin: 0 -20px;
  padding: 10px 20px;
  display: block;
  position: relative;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-align: center;
}

.used-navi h1:before {
  border-color: transparent #40220f transparent transparent;
  border-style: solid;
  border-width: 0 10px 10px 0;
  content: ' ';
  height: 0;
  left: 0;
  position: absolute;
  top: 100%;
  width: 0;
}
</style>