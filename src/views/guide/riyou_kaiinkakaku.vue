<template>
  <v-app>
    <div class="riyou_kaiinkakaku">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'キタムラネット会員割引きとは'" />

        <div class="w760 text-subtitle-2">
          <p class="mt-4">
            <span class="red--text font-weight-bold">「キタムラネット会員」に登録（無料）</span
            >をしていただき、ログインしていただきますと、会員価格で購入出来る商品もございます。
          </p>

          <!-- キタムラネット会員割引き適応例 -->
          <subTitle :txt="'キタムラネット会員割引き適応例'" :fontSize="'14px'" />
          <v-card outlined class="py-4 px-2 my-2">
            <v-img src="https://shop.kitamura.jp/sitemap/images/img_kaiinkakaku_01.gif" max-width="594px" max-height="386px" class="mx-auto mb-4"></v-img>
            <p class="red--text font-weight-bold">
              ※製品により割引き率は異なります。<br />
              ※一部製品は割引き適応の対象外になります。製品詳細ページにおいて「さらにお得！！」のアイコンがある製品が割引き適応の対象となります。
            </p>
          </v-card>

          <!-- キタムラネット会員割引き適応までの流れ -->
          <subTitle :txt="'キタムラネット会員割引き適応までの流れ'" :fontSize="'14px'" />
          <v-card outlined class="pa-4 my-2">
            <p>1.キタムラネット会員に登録する（無料）</p>
            <ul class="allow-icon">
              <li><a href="https://member.kitamura.jp/group/account/regist.do?rs=41" class="icoOpen" target="_blank">会員登録（無料）はこちら</a></li>
            </ul>
          </v-card>

          <v-img src="https://shop.kitamura.jp/sitemap/images/img_kaiinkakaku_02.gif" max-width="38px" max-height="14px" class="mx-auto my-4"></v-img>

          <v-card outlined class="pa-4 my-2">
            <p>2.キタムラネット会員にログインする</p>
            <ul class="allow-icon">
              <li>
                <a href="https://member.kitamura.jp/sso/login.html?s=41&u=https%3A%2F%2Fshop.kitamura.jp%2Fsitemap%2Friyou_kaiinkakaku_index.html"
                  >ログインはこちら</a
                >
              </li>
            </ul>
          </v-card>

          <v-img src="https://shop.kitamura.jp/sitemap/images/img_kaiinkakaku_02.gif" max-width="38px" max-height="14px" class="mx-auto my-4"></v-img>

          <v-card outlined class="pa-4 my-2">
            <p class="mb-0">3.ログインした状態で商品を購入すると、会員割引きが適応される（一部対象外の商品あり）</p>
          </v-card>

          <v-row class="my-4">
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
  name: 'riyou_kaiinkakaku',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = 'キタムラネット会員割引とは｜カメラのキタムラネットショップ'
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
          path: 'キタムラネット会員割引とは',
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
</style>