<template>
  <v-app>
    <div class="service-guide">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'ご利用案内'" />
        <p class="pl-6">中古商品に関しては<router-link to="/ec/special/page/used-navi">コチラ</router-link></p>
        <userguide />

        <v-card outlined tile class="listInfo">
          <v-sheet color="#f2eedd" class="py-1 pa-2 font-weight-bold">カメラのキタムラネットショップの特徴</v-sheet>
          <ol class="pa-2">
            <li>
              お近くの店舗で安心受け取り・お支払いが可能<br />
              全国のカメラのキタムラ店舗受け取りで送料が無料になります（一部商品は対象外）
            </li>
            <li>
              安心のアフターフォロー<br />
              全国のカメラのキタムラ実店舗でサポートいたします<br />
            </li>
            <li>
              下取/会員登録でさらにお得<br />
              ネット会員に登録すると、会員特別価格でご購入いただけます（一部製品は対象外）<br />
              対象商品の場合下取りで大幅値引き、さらに『Tポイント』が貯まる！使える！
            </li>
            <li>
              5年間の長期保証<br />
              対象のフィルムカメラ、デジタル一眼レフ、デジタルカメラ、ビデオカメラ、レンズ、デジタルフォトフレームに<br />
              ご購入代金(税込)の5%のお支払いで5年間保証に加入することが可能です（一部商品は対象外）
            </li>
            <li>
              選べるお支払い方法<br />
              店舗決済/クレジットカード/代金引換/コンビニ決済/Pay-easy決済（インターネットバンク振込）/銀行振込/ショッピングクレジット/PayPayオンライン決済<br />
              宅配受け取りの際、代金引換手数料が無料になります
            </li>
          </ol>
        </v-card>

        <!-- /section -->
        <div class="section mt-4">
          <p class="text-subtitle-2 font-weight-bold mb-2">商品売買契約と個人情報取扱いについて</p>
          <p class="text-subtitle-2 mb-2">売買契約は、弊社担当者がご注文の内容を受理し、お客様に対して該当商品を発送した時点で成立いたします。</p>
          <p class="text-subtitle-2 mb-2">
            システムエラーや人為的なミスにより、商品の掲載内容に誤りがあった場合は、ご注文をキャンセルさせて頂きますので予めご了承頂けます様お願い申し上げます。
          </p>
          <p class="text-subtitle-2 mb-2">
            またメーカーにて生産完了、在庫切れにて完売、価格記述等の瑕疵などの理由によります場合は、誠に勝手ではございますがご注文をキャンセルさせていただく場合がございます。
          </p>
        </div>
        <!-- /section -->
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import Userguide from '@/components/common/guide/user-guide.vue';
import GuideTitle from '@/components/common/guide/title.vue';
export default Vue.extend({
  name: 'service-guide',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = 'ご利用案内｜カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '日本最大級のカメラ専門店カメラのキタムラのショッピングサイト。デジカメ・デジタルカメラ・ビデオカメラ・プリンター・フォトフレーム・カメラバッグ・インクなどは当サイトにお任せください。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご利用案内',
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

<style scoped>
.service-guide a {
  color: #1122cc;
}

ol > li {
    margin: 0 0 4px 2em;
    list-style-type: decimal;
    list-style-position: inherit;
}

ol li {
    line-height: 1.4em;
}
</style>