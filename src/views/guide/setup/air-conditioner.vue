<template>
  <v-app>
    <div class="air-conditioner">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'設置サービス（エアコン）'" />

        <div class="w760 text-subtitle-2">
          <homeApplianceInstallation />
          <v-img src="/ec/images2/guide/setup/title_04.gif" max-width="100%" height="auto"></v-img>

          <!-- ご注文から設置工事の流れの例 -->
          <subTitle :txt="'1.お届け先ご住所が、配線設置可能地域か、下記ボタンより「大型家電配送について」より、ご確認下さい'" :fontSize="'14px'" />

          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_setup_09.gif" max-width="90%" height="auto" alt="フロー図"></v-img>
          </div>

          <p class="mb-0 mt-2">※7月8月の繁忙期に関しては、最大2週間程度お時間を頂く場合がございます。</p>
          <p>※お届け地域や商品在庫などにより、設置までのスケジュールは異なる場合がございます。</p>

          <!-- 設置工事のご注文方法 -->
          <subTitle :txt="'設置工事のご注文方法'" :fontSize="'14px'" />
          <p>エアコンご注文時には、「設置」にチェックを入れて「買い物かごに入れる」を押してください。</p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_setup_10.gif" max-width="720" max-height="auto" alt="ご注文画面"></v-img>
          </div>

          <!-- 設置工事の内容と料金 -->
          <subTitle :txt="'設置工事の内容と料金'" :fontSize="'14px'" />
          <v-sheet class="pa-2 text-center font-weight-bold text-h6 mt-2 mb-6" color="#eee"
            >エアコン新品 標準取付工事 <span class="mx-2 red--text">19,800円(税込)</span></v-sheet
          >
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>標準設置工事の内容</p>
          <ul class="mt-2 listNormal">
            <li>配管パイプ 4ｍまで（テープ巻仕上げ）</li>
            <li>穴あけ2か所まで（木造に限る）</li>
            <li>地面置き用プラスチックブロック</li>
            <li>アース線接続</li>
          </ul>

          <v-sheet class="pa-2 mt-2 mb-6 caption" color="#eee"
            >標準工事に含まれないオプションに関しましては、設置工事のお打合せの際にお伺いします。<br />
            オプション料金は、設置工事時に現金でご精算いただきます。</v-sheet
          >

          <p class="text-subtitle-1 font-weight-bold">
            <v-icon x-small left color="red">fas fa-square</v-icon>オプション工事の料金<a
              href="/ec/guide/setup/air-conditioner-option"
              target="_brank"
              class="icoOpen ml-2"
              >コチラからご確認下さい</a
            >
          </p>

          <!-- エアコン設置工事 よくあるお問い合わせ -->
          <subTitle :txt="'エアコン設置工事 よくあるお問い合わせ'" :fontSize="'14px'" />
          <p class="mb-16">
            エアコンの設置に関する、お問い合わせ内容をQ＆A方式でまとめました。<a href="/ec/guide/setup/air-conditioner-faq" target="_blank" class="icoOpen"
              >→詳しくはコチラをご確認ください</a
            >
          </p>
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
import HomeApplianceInstallation from '@/components/common/guide/setup/home-appliance-installation.vue';
export default Vue.extend({
  name: 'air-conditioner',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    homeApplianceInstallation: HomeApplianceInstallation
  },
  setup: (props, context) => {
    document.title = '設置サービス（エアコン）｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '設置サービス（エアコン）｜カメラのキタムラネットショップ',
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
ul.listNormal > li {
  margin: 0 3px 6px 0.5em;
  padding: 0 2px 0 10px;
}
</style>