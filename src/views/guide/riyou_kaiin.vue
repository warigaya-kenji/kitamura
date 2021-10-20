<template>
  <v-app>
    <div class="riyou_kaiin">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'キタムラネット会員'" />

        <div class="w760 text-subtitle-2">
          <p class="mt-4">
            <span class="red--text font-weight-bold">入会費・年会費無料</span
            >のキタムラネット会員は、あなたの写真生活にうれしいおトクがいっぱい。会員だけの限定割引きやクーポン付きメールの配信などを受けられます。
          </p>

          <!-- キタムラネット会員のメリット -->
          <subTitle :txt="'キタムラネット会員のメリット'" :fontSize="'14px'" />
          <v-row>
            <v-col cols="12" sm="4" v-for="(memberBenefit, index) in memberBenefitList" :key="index">
              <v-card outlined class="pa-2" elevation="3">
                <v-card-title class="pa-0 text-sm-subtitle-1 font-weight-bold mb-2">{{ memberBenefit.merit }}</v-card-title>
                <v-img :src="memberBenefit.src" max-width="151px" max-height="151px"></v-img>
                <p class="mt-2 including-line-breaks">{{ memberBenefit.txt }}</p>
              </v-card>
            </v-col>
          </v-row>

          <v-img src="https://shop.kitamura.jp/common/images/img_arrow_bottom.gif" max-width="152px" max-height="34px" class="mx-auto my-4"></v-img>

          <v-row class="mb-4">
            <v-col cols="12" sm="6" :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : 'd-flex justify-end'">
              <a href="https://member.kitamura.jp/account/regist/basic/input" target="_brank">
                <v-img
                  src="https://shop.kitamura.jp/common/images/btn_membership.gif"
                  max-width="226px"
                  max-height="48px"
                  alt="会員登録（無料）"
                  class="hover"
                ></v-img>
              </a>
            </v-col>
            <v-col cols="12" sm="6" :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''">
              <a href="https://member.kitamura.jp/sso/login.html?s=41&u=https%3A%2F%2Fshop.kitamura.jp%2Fsitemap%2Friyou_kaiin_index.html" target="_brank">
                <v-img src="https://shop.kitamura.jp/common/images/btn_login.gif" max-width="226px" max-height="48px" alt="ログイン" class="hover"></v-img>
              </a>
            </v-col>
          </v-row>

          <userguide />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
import Userguide from '@/components/common/guide/user-guide.vue';

export default Vue.extend({
  name: 'riyou_kaiin',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = 'キタムラネット会員｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご利用案内',
          linkUrl: 'service-guide',
          disabled: false
        },
        {
          path: 'キタムラネット会員',
          disabled: true
        }
      ],
      memberBenefitList: [
        { merit: '会員限定割引き', src: 'https://shop.kitamura.jp/sitemap/images/img_kaiin_01.gif', txt: '商品購入の際、会員だけの特別割引きを受けられる（一部対象外商品あり）' },
        { merit: 'クーポン付きメール配信', src: 'https://shop.kitamura.jp/sitemap/images/img_kaiin_02.gif', txt: '会員限定の割引き情報やクーポンがついたメールが配信される\n\n' },
        { merit: '面倒な入力が不要に', src: 'https://shop.kitamura.jp/sitemap/images/img_kaiin_03.gif', txt: '製品購入の際、氏名や住所など面倒な入力が不要\n\n' },
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>