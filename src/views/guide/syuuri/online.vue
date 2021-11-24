<template>
  <v-app>
    <div class="online">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img src="/ec/images2/guide/syuuri/online/title_syuuri_online.gif" max-width="948px" max-height="50px" alt="インターネット修理受付のご案内"></v-img>

        <div class="w760 text-subtitle-2">
          <v-row class="mt-2 mb-8">
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/guide/syuuri/img_online.gif" max-width="360px" max-height="250px" alt="インターネットで修理受付する"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="red--text">オンライン登録後、送付にて受付＆ご返却。 おうちにいながら簡単修理！</p>
              <p>お近くにキタムラ店舗がなくても、ご自宅にいながら 修理品をお送り頂くだけでOK。</p>
              <p>※キタムラ店舗で受付する修理と、納期・サービス内容が異なる場合がございます。(外部サイトへリンクします）</p>
              <a href="https://www.nikken-techno.co.jp/picon/index-2.shtml" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="/ec/images2/guide/syuuri/online/btn_online.gif" max-width="340px" max-height="70px" alt="オンライン修理登録窓口"></v-img>
                </div>
              </a>
            </v-col>
          </v-row>
          <!-- オンライン修理の流れ -->
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">オンライン修理の流れ</v-sheet>
          <v-img src="/ec/images2/guide/syuuri/online/img_flow.gif" max-width="750px" max-height="100px" alt="オンライン修理の流れ"></v-img>
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">修理の前にご確認ください</v-sheet>
          <v-row class="mt-2 mb-8">
            <v-col cols="12" sm="6">
              <a href="https://shop.kitamura.jp/ec/guide/syuuri/syouhinQ&A" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="/ec/images2/guide/syuuri/btn_check.gif" max-width="340px" max-height="50px" alt="修理に出す前に、ここをチェック"></v-img>
                </div>
              </a>
              <p class="mt-2">よくある症状と対処法をまとめてみました。修理に出す前にスピード解決できるかも！</p>
            </v-col>
            <v-col cols="12" sm="6">
              <a href="https://shop.kitamura.jp/ec/guide/syuuri/online/syuuriQ&A" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="/ec/images2/guide/syuuri/btn_faq.gif" max-width="340px" max-height="50px" alt="Q&A よくある質問"></v-img>
                </div>
              </a>
              <p class="mt-2">オンライン修理に関して、お客様からいただいた質問をまとめております。</p>
            </v-col>
          </v-row>

          <!-- オンライン修理手順 -->
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">オンライン修理手順</v-sheet>
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理依頼</v-sheet>
          <p class="red--text">オンライン修理登録窓口より、修理予約を行って下さい</p>
          <ul class="listNormal mb-6">
            <li>入力後、送信ボタンを押していただくと、すぐ受注メールが届きます。</li>
            <li>弊社送付用とお客様保存用として２部印刷して下さい。</li>
          </ul>

          <!-- 修理品の梱包・送付-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理品の梱包・送付</v-sheet>
          <p class="red--text">発送時の注意点</p>
          <v-img src="/ec/images2/guide/syuuri/online/img_package.gif" max-width="690px" max-height="170px" alt="Q&A よくある質問"></v-img>
          <p class="mt-2">
            [送付先] 〒550-0015 大阪市西区南堀江2-10-2 日研テクノ(株)内 カメラのキタムラ ネットショップ修理係 迄<br />
            Tel.06-6538-0506 Fax.06-6538-0509
          </p>
          <p>[送料について] 当方へお送り頂く際の送料に関しましては、お客様負担でお願い致します。</p>

          <!-- お見積-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">お見積</v-sheet>
          <p class="red--text">お見積のみは行っておりません</p>
          <p class="grey--text mb-2">※お見積りのみをご希望の方はお近くの店舗までお問い合わせ下さい。</p>
          <ul class="listNormal mb-2">
            <li>修理の代金の上限をご選択下さい。上限を越える場合のみご連絡させていただきます。</li>
          </ul>
          <p class="grey--text mb-2">上限以内での修理が可能と判断いたしましたら即、修理に取りかかります。</p>
          <ul class="listNormal mb-2">
            <li>修理不可能と判断させていただく場合もございます。予めご了承ください。</li>
          </ul>
          <p class="grey--text">その際は送料当社負担にて速やかにご返送いたします。</p>

          <!-- 修理-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理</v-sheet>
          <p class="red--text">修理日数は約14日前後となります</p>
          <ul class="listNormal mb-6">
            <li>故障の程度によっては、それ以上かかる場合もございます。予めご了承ください。</li>
            <li>クラシックカメラ等は一ヶ月前後修理日数をいただいております。</li>
            <li>修理不可能品と判断させていただく場合もございます。予めご了承ください。</li>
            <li>進行状況は<a href="http://www.ntweb.jp/cgi-bin/pc/index.pl" class="icoOpen" target="_blank">コチラ</a>からご確認いただけます。</li>
          </ul>

          <!-- 修理完了品発送・精算-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理完了品発送・精算</v-sheet>
          <p class="red--text">修理完了品お引渡し方法</p>
          <ul class="listNormal mb-4">
            <li>ゆうパックにて発送。</li>
            <li>お支払いは、ゆうパックの代金引換システムとなります。</li>
          </ul>
          <v-img
            src="/ec/images2/guide/syuuri/online/img_pay.gif"
            max-width="700px"
            max-height="40px"
            alt="お支払い金額：修理料金＋送料＋代金引換手数料"
          ></v-img>
          <p class="grey--text mt-4">※現金払いのみとなりますので、ご注意ください</p>
          <p class="red--text">修理票を同封いたします。大切に保管してください</p>
          <ul class="listNormal mb-4">
            <li>保証期間内での再修理が発生した際に必要となります。</li>
          </ul>

          <!-- 保証期間-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">保証期間</v-sheet>
          <p class="red--text">修理後の再修理保証期間：通常１年(メーカーや修理状況によって異なる場合がございます)</p>
          <ul class="listNormal mb-10">
            <li>自然故障などによる、メーカー保証の範囲内のみとなります。(落下・ショック・水没・消耗は除く)</li>
          </ul>
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
import Userguide from '@/components/common/guide/user-guide.vue';
export default Vue.extend({
  name: 'online',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = 'インターネット修理受付のご案内｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '修理のご案内',
          linkUrl: '/ec/guide/syuuri',
          disabled: false
        },
        {
          path: 'インターネット修理受付のご案内',
          disabled: true
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>