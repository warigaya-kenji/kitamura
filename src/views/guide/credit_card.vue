<template>
  <v-app>
    <div class="credit_card">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'クレジットカード払い請求について'" />

        <div class="w760 text-subtitle-2">
          <div class="d-flex flex-column justify-space-between align-center mt-8">
            <v-img src="https://shop.kitamura.jp/sitemap/images/img_card-ask_01.gif" max-width="100%" max-height="auto"></v-img>
          </div>

          <table class="card-ask caption">
            <tr>
              <th>クレジットカードご利用日</th>
              <th>決済代行会社データ締め日</th>
              <th>クレジットカード会社へのデータ送信日</th>
              <th>ご請求金額引き落とし日</th>
            </tr>
            <tr>
              <td>当ショップ商品配送日</td>
              <td>ご利用月の月末</td>
              <td>翌月4日～5日頃</td>
              <td>クレジットカード会社により異なります</td>
            </tr>
          </table>
          <p class="mt-4 font-weight-bold">【お引落し・お問合せに関するお知らせ】</p>
          <v-sheet class="pa-4 line-height" color="#f5f5f5">
            ご請求金額の引き落とし日は、各クレジットカード会社により異なります。<br />
            ご決済に関する詳細はカード裏面のご契約カード会社様にご確認くださいませ。<br />
            デビットカード等、お客さまの契約内容によって異なる場合がございます。
          </v-sheet>
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
export default Vue.extend({
  name: 'credit_card',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = 'クレジットカード払い請求について｜カメラのキタムラネットショップ'
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
          path: 'クレジットカード払い請求について',
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

<style scoped>

.card-ask {
  border-collapse: collapse;
  width: 90%;
  margin: 20px auto 0;
}
.card-ask th {
    color: #fff;
    font-weight: bold;
    background: #205b85;
    width: 10em;
}

.card-ask th, .card-ask td {
    text-align: center;
    border: 1px #bbb solid;
    padding: 5px;
}
</style>
