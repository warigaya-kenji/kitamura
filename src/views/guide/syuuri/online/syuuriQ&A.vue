<template>
  <v-app>
    <div class="syuuriQ&A">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img
          src="https://shop.kitamura.jp/syuuri/online/syuuriQ&A/images/title_syuuri_online_faq.gif"
          max-width="100%"
          max-height="50"
          alt="オンライン送付修理サービス よくあるご質問"
        ></v-img>

        <div class="w760 text-subtitle-2">
          <v-main>
            <v-container>
              <!-- question navi -->
              <v-row class="section mt-4">
                <v-col cols="12" sm="6">
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>修理に関してのご質問</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(repairsQuestion, index) in repairsQuestionNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 1}`">{{ repairsQuestion }}</a>
                      </li>
                    </ul>
                  </li>
                </v-col>
                <v-col cols="12" sm="6">
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>カメラに関してのご質問</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(cameraQuestion, index) in cameraQuestionNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 13}`">{{ cameraQuestion }}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>レンズに関してのご質問</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(lensQuestion, index) in lensQuestionNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 17}`">{{ lensQuestion }}</a>
                      </li>
                    </ul>
                  </li>
                </v-col>
              </v-row>
              <!-- /question navi -->

              <!-- question List -->
              <div class="mt-6" v-for="(item, index) in questionList" :key="index">
                <v-sheet :id="`faq${index + 1}`" class="py-2 px-4 white--text font-weight-bold text-sm-subtitle-1" color="#b0d246"> Q.{{ item.q }} </v-sheet>
                <p class="mt-2 text-sm-subtitle-1" v-if="index === 9"><a href="/ec/guide/syuuri/online">「修理品の梱包・送付」</a>でご確認下さい。</p>
                <p class="including-line-breaks mt-2 text-sm-subtitle-1" v-else>
                  {{ item.a }}
                </p>
                <ul class="listAttention pl-0" v-if="item.asteriskList.length !== 0">
                  <li v-for="(asterisk, index) in item.asteriskList" :key="`asterisk-${index}`">{{ asterisk }}</li>
                </ul>
                <p class="text-right mt-2"><a href="#top" class="allow-top">ページトップへ</a></p>
              </div>
              <!-- /question List -->
              <userguide />
            </v-container>
          </v-main>
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
  name: 'syuuriQ&A',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = 'オンライン送付修理サービス よくあるご質問｜カメラのキタムラネットショップ'
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
          path: 'オンライン送付修理サービス よくあるご質問',
          disabled: true
        }
      ],
      repairsQuestionNaviList: [
        '他の販売店で購入したものでも修理可能ですか？',
        '修理日数はどのくらいかかりますか？',
        '修理保証は付いていますか？',
        '見積もりは無料ですか？',
        '発送料金は自己負担なのですか？',
        '見積後のキャンセルの場合、返却送料は自己負担ですか？',
        '自分のカメラは対象機種でしょうか？',
        'メーカーで修理を断られたカメラでも修理できますか？',
        '外国製カメラも修理ができますか？',
        '宅急便で送る際、よい梱包方法は？',
        '支払い方法を教えて下さい',
        'キタムラネットショップへ直接送ってもいいですか？',
      ],
      cameraQuestionNaviList: [
        'メーカー保証対象とならないものは？',
        'オーバーホールはできますか？',
        '代替機はありますか？',
        '修理遅延のために使用予定に支障が出た時、その補償は？',
      ],
      lensQuestionNaviList: [
        'レンズの曇りはきれいに取れますか？',
        'カビ取りはできますか？またその価格は？',
      ],
      questionList: [
        { q: '他の販売店で購入したものでも修理可能ですか？', a: 'はい、可能です。\n他の販売店で購入し、保証期間が経過してしまった商品なども、お受けできます。', asteriskList: ['オンライン対象機種に限らせていただきます。'] },
        { q: '修理日数はどのくらいかかりますか？ ', a: '修理日数は約14日前後（輸送時間除く）となります。', asteriskList: ['部品手配などによっては、それ以上かかる場合もございます。', 'クラシックカメラ等は一ヶ月前後修理日数を頂いております。', '修理不可能と判断させていただく場合もございます。予めご了承下さい。'] },
        { q: '修理保証は付いていますか？', a: '日研テクノによる修理後の再修理保証期間は1年となります。', asteriskList: ['メーカー修理の場合は、6ヶ月となる場合もございます。', '保証期間内の修理対象は自然故障のみ。（落下、ショック、水没は保証の対象となりません）'] },
        { q: '見積りは可能ですか？', a: 'オンライン修理の場合は、見積のみは受け付けておりません。\n予め上限金額をご選択頂き、その金額を越える場合のみ、修理続行の有無をご確認させていただきます。', asteriskList: [] },
        { q: '発送料金は自己負担なのですか？', a: '当方へお送りいただく場合の送料は全てお客様負担となっております。\n何卒ご了承下さい。', asteriskList: [] },
        { q: '見積後のキャンセルの場合、返却送料は自己負担なのですか？', a: '別途送料を請求させて頂きます。', asteriskList: [] },
        { q: '自分のカメラは対象機種でしょうか？', a: '国内主要カメラメーカーより修理業者の認定を受けております。\n気になる場合はお問い合わせ下さい。', asteriskList: [] },
        { q: 'メーカーで修理を断られたカメラでも修理できますか？', a: 'お問い合わせください。部品保有年月を超過したカメラ部品も保有している場合がございます。', asteriskList: [] },
        { q: '外国製カメラも修理ができますか？', a: '修理が可能な機種と不可能な機種がございます。お問い合わせ下さい。', asteriskList: [] },
        { q: '宅急便で送る際、よい梱包方法は？', a: '', asteriskList: [] },
        { q: '支払い方法を教えてください。', a: 'お支払いは代金引換のみとなります。', asteriskList: ['（修理料金＋送料＋代金引換手数料）でのご請求となります。', 'クレジットカードはご利用になれません。'] },
        { q: 'キタムラネットショップへ直接送ってもいいですか？', a: '可能です。事前に弊社にご連絡の上、ご送付下さい。\nただ、当社に到着後、修理会社へ送付となりますので、経由にお時間がかかります。', asteriskList: [] },
        { q: 'メーカー保証対象とならないものは？', a: 'ショック品、水没品、消耗品類や消耗部品の磨耗、社外（メーカー）分解品で完全分解・調整が必要な場合は保証対象外となります。', asteriskList: [] },
        { q: 'オーバーホールはできますか？', a: 'オーバーホールとは、完全に分解し消耗部品（シャッターや駆動関係部品）の交換を行うことを言います。旧製品の場合、部品の在庫がないため交換（オーバーホール）ができません。', asteriskList: [] },
        { q: '代替機はありますか？', a: 'ご用意しておりません。', asteriskList: [] },
        { q: '修理遅延のため、使用予定に支障が出た場合の補償は？', a: '補償はいたしておりません。故障の度合い、修理の混雑、部品の保有により期間が延びる場合がこざいます。修理はあらかじめ日程に余裕をもってご依頼ください。', asteriskList: ['代替品もお出しできませんので、予めご了承下さい。'] },
        { q: 'レンズの曇りはきれいに取れますか？', a: '曇りの程度の確認が必要です。詳しくは直接お問い合わせください。', asteriskList: [] },
        { q: 'カビ取りはできますか？またその価格は？', a: '可能です。分解清掃の修理料金となります。詳しくはお問い合わせ下さい。', asteriskList: ['但し、状態が悪いと侵食してカビ跡が残ってしまう場合がございます。予めご了承下さい。'] },
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.section ol > li {
  margin: 0 0 2px 2em;
  list-style-type: decimal;
  list-style-position: inherit;
}

.section ul li,
ol li {
  line-height: 1.6em;
}

.section li {
  list-style: none;
}

.section ul.listInnerlink li,
ul.listInnerlinkSide li {
  margin: 0 3px 4px 0.5em;
  padding: 0 2px 0 12px;
  background: url(https://shop.kitamura.jp/common/images/mkr_arrow_innerlink.gif) no-repeat left 0.5em;
}
</style>
