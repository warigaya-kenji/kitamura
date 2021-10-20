<template>
  <v-app>
    <div class="tenpo">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img
          src="https://shop.kitamura.jp/files/syuuri/tenpo/images/title_syuuri_shop.gif"
          max-width="948px"
          max-height="50px"
          alt="店舗修理受付のご案内"
        ></v-img>

        <div class="w760 text-subtitle-2">
          <v-row class="mt-2 mb-8">
            <v-col cols="12" sm="6">
              <v-img
                src="https://shop.kitamura.jp/files/syuuri/images/img_shop.gif"
                max-width="360px"
                max-height="250px"
                alt="近くのお店で修理受付する"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="red--text">カメラのキタムラならどこでもＯＫ! 全国の店舗の窓口にて修理品をお預かりします。</p>
              <p>全国チェーンのカメラ専門店だから、アフターケアもバッチリ！</p>
              <p>受付店舗よりお電話で料金をご連絡致します！</p>
              <a href="https://sss.kitamura.jp/?ref=grpTFM" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img
                    src="https://shop.kitamura.jp/files/syuuri/tenpo/images/btn_shop.gif"
                    max-width="340px"
                    max-height="70px"
                    alt="カメラのキタムラ店舗検索"
                  ></v-img>
                </div>
              </a>
            </v-col>
          </v-row>
          <!-- 店舗修理の流れ -->
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">店舗修理の流れ</v-sheet>
          <v-img src="https://shop.kitamura.jp/files/syuuri/tenpo/images/img_flow.gif" max-width="750px" max-height="100px" alt="店舗修理の流れ"></v-img>
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">修理の前にご確認ください</v-sheet>
          <v-row class="mt-2 mb-8">
            <v-col cols="12" sm="6">
              <a href="https://shop.kitamura.jp/ec/guide/syuuri/syouhinQ&A" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img
                    src="https://shop.kitamura.jp/files/syuuri/images/btn_check.gif"
                    max-width="340px"
                    max-height="50px"
                    alt="修理に出す前に、ここをチェック"
                  ></v-img>
                </div>
              </a>
              <p class="mt-2">よくある症状と対処法をまとめてみました。修理に出す前にスピード解決できるかも！</p>
            </v-col>
            <v-col cols="12" sm="6">
              <a href="https://shop.kitamura.jp/ec/guide/syuuri/online/syuuriQ&A" target="_brank">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="https://shop.kitamura.jp/files/syuuri/images/btn_faq.gif" max-width="340px" max-height="50px" alt="Q&A よくある質問"></v-img>
                </div>
              </a>
              <p class="mt-2">オンライン修理に関して、お客様からいただいた質問をまとめております。</p>
            </v-col>
          </v-row>

          <!-- オンライン修理手順 -->
          <v-sheet color="#b0d246" class="pa-2 white--text font-weight-bold my-2">店舗修理手順</v-sheet>
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理依頼</v-sheet>
          <p>
            <a href="http://sss.kitamura.jp/?ref=grpTFM" class="icoOpen" target="_blank">お近くのカメラのキタムラ</a
            ><span class="red--text">へお持込下さい。</span>
          </p>
          <ul class="listNormal mb-6">
            <li>受付時に取次手数料(送料含む)1,000円（税込1,100円）を頂戴いたします。</li>
            <li>修理品をお預かりのうえ、簡単なご説明の後に受付控えをお渡しいたします。</li>
          </ul>
          <p class="grey--text mb-0">※保証書をお持ちの場合は、受付時にご提示ください。</p>
          <p class="grey--text">※データ保存など必要な物はあらかじめバックアップを取ってからお持ち下さい。</p>

          <!-- お見積-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">お見積</v-sheet>
          <p class="red--text">受付から約10日前後で、お電話またはハガキにてご連絡いたします。</p>
          <p class="grey--text mb-2">※故障の程度によっては、それ以上かかる場合もございます。予めご了承下さい。</p>
          <p class="red--text">保証対象品・設定金額内の場合は、ご連絡なく修理を進めさせて頂きます。</p>
          <p class="grey--text mb-2">※故障の内容によっては、保証対象外の場合もございます。その際は別途ご連絡させて頂きます。</p>
          <p class="red--text">見積り時点で未修理返却の場合は、取次手数料の返金はいたしませんので、あらかじめご了承ください。</p>
          <p class="grey--text">※保険適用のための見積書は、有料となる場合がございますので予めご了承下さい。</p>

          <!-- 修理-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理</v-sheet>
          <p class="red--text">メーカー保証内、設定金額内の修理は、受付より約2～3週間前後での仕上がりとなります。</p>
          <ul class="listNormal mb-6">
            <li>見積りが必要な修理は、<span class="red--text">進行のご返答を頂いてのち、約14日前後</span>での仕上がりとなります。</li>
            <li>故障の程度によっては、それ以上かかる場合もございます。予めご了承ください。</li>
            <li>クラシックカメラ等は一ヶ月前後修理日数をいただいております。</li>
            <li>修理不可能品と判断させていただく場合もございます。予めご了承ください。</li>
          </ul>

          <!-- 修理完了品の返却・精算-->
          <v-sheet color="#eee" class="pa-2 font-weight-bold my-2">修理完了品の返却・精算</v-sheet>
          <p class="red--text">修理完了品お引渡し方法</p>
          <ul class="listNormal mb-4">
            <li>店舗より完了・到着のご連絡をお電話にて差し上げます。</li>
            <li>受付店舗まで、お手数ですがご来店下さいますようお願い致します。</li>
            <li>修理内容を簡単にご説明させて頂き、ご返却させて頂きます。</li>
            <li>精算が必要な場合は、「Tカード」もご持参頂けるとポイントが貯まります。</li>
          </ul>
          <p class="grey--text">※修理完了日より、1年が経過した場合は廃棄処分とさせて頂きます。</p>

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
  name: 'tenpo',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = '店舗修理受付のご案内｜カメラのキタムラネットショップ'
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
          path: '店舗修理受付のご案内',
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