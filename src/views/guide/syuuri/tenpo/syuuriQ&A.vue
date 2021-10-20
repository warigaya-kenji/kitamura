<template>
  <v-app>
    <div class="tenpo-syuuriQ&A">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img
          src="https://shop.kitamura.jp/syuuri/tenpo/syuuriQ&A/images/title_syuuri_shop_faq.gif"
          max-width="100%"
          max-height="50"
          alt="店舗持込み修理サービス よくあるご質問"
        ></v-img>

        <div class="w760 text-subtitle-2">
          <v-main>
            <v-container>
              <!-- question navi -->
              <v-row class="section mt-4">
                <v-col cols="12" sm="6">
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>修理に関して</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(repairsQuestion, index) in repairsQuestionNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 1}`">{{ repairsQuestion }}</a>
                      </li>
                    </ul>
                  </li>
                </v-col>
                <v-col cols="12" sm="6">
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>5年間保証に関して</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(fiveYearWarrantyQuestion, index) in fiveYearWarrantyQuestionNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 9}`">{{ fiveYearWarrantyQuestion }}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>中古カメラ6ヶ月保証</p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(sixMonthsWarranty, index) in sixMonthsWarrantyNaviList" :key="index">
                        <a v-scroll-to="`#faq${index + 14}`">{{ sixMonthsWarranty }}</a>
                      </li>
                    </ul>
                  </li>
                </v-col>
              </v-row>
              <!-- /question navi -->

              <!-- question List -->
              <div class="mt-6" v-for="(item, index) in questionList" :key="index">
                <v-sheet :id="`faq${index + 1}`" class="py-2 px-4 white--text font-weight-bold text-sm-subtitle-1" color="#b0d246"> Q.{{ item.q }} </v-sheet>
                <p class="mt-2 text-sm-subtitle-1" v-if="index === 8">
                  自然故障の際、メーカー保証1年に加わえ、カメラのキタムラの保証で最長4年間、合計5年間メーカー保証と同等の保証が受けられます。<br />
                  <a href="/ec/guide/hoshou">詳しくはコチラ</a>
                </p>
                <div class="mt-2 text-sm-subtitle-1" v-else-if="index === 13">
                  <p>
                    保証対象となる中古カメラには、キタムラ中古カメラ6ヶ月保証書をおつけします。<br />
                    ただし、以下のカメラには、6ヶ月保証がつきませんのでご注意ください。
                  </p>
                  <ul class="listNormal">
                    <li>販売価格（税別）が1万円未満の中古商品</li>
                    <li>ライカ、ハッセルブラッド、ローライ、ジナー、リンホフなどの舶来カメラ</li>
                    <li>弊社が、保証なし（現状渡し）を明示して販売した商品</li>
                  </ul>
                  <p class="red--text font-weight-bold mt-2">※中古6ヶ月保証は、1回限り有効とさせていただきます。</p>
                </div>
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
  name: 'tenpo-syuuriQ&A',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = '店舗持込み修理サービス よくあるご質問｜カメラのキタムラネットショップ'
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
          path: '店舗持込み修理サービス よくあるご質問',
          disabled: true
        }
      ],
      repairsQuestionNaviList: [
        '他の販売店で購入したものでも修理可能ですか？',
        'どんな修理品が対象ですか？',
        '修理日数は？',
        '見積り後のキャンセルは可能ですか？料金はかかりますか？',
        'オーバーホールできますか？',
        '見積後のキャンセルの場合、返却送料は自己負担ですか？',
        '代替機はありますか？',
        '修理遅延のため、使用予定に支障が出た場合の補償は？',
        '他の店舗での受け渡しは可能ですか？',
      ],
      fiveYearWarrantyQuestionNaviList: [
        '保証の内容について、教えて下さい',
        '落下や水没の際も保証されるのですか？',
        '有償修理になる場合もあるのですか？',
        '保証書を紛失したのですが…',
        '引越するのですが、他店でも使えますか？'
      ],
      sixMonthsWarrantyNaviList: [
        '中古カメラの保証について',
      ],
      questionList: [
        { q: '他の販売店で購入したものでも修理可能ですか？', a: 'はい、可能です。\n他の販売店で購入し、保証期間が経過してしまった商品なども、お近くの店舗までお問い合わせ下さい。', asteriskList: [] },
        { q: 'どんな修理品が対象ですか？', a: 'デジタルカメラ全般・ビデオカメラ・フィルムカメラ・レンズ・プリンターなど様々な物をお受けしてします。', asteriskList: ['一部対応できない品もございますので、あらかじめご確認のうえ、お持ち込み下さい。'] },
        { q: '修理日数はどのくらいかかりますか？', a: '修理品の種類や、状況によって異なりますが、約2～3週間を目安としていただけるとよいかと思います。', asteriskList: ['部品手配などによっては、それ以上かかる場合もございます。', 'クラシックカメラ等は一ヶ月前後修理日数を頂いております。', '修理不可能と判断させていただく場合もございます。予めご了承下さい。'] },
        { q: '見積もり後のキャンセルは可能ですか?料金は掛かりますか？', a: 'お見積りだけも可能です。この場合、取次手数料の返金はいたしませんので、あらかじめご了承ください。\n未修理返却の品を新しく購入される際の「なんでも下取り値引き品」としてお得にお使い頂けます。', asteriskList: ['対象商品はお近くの店舗までお問い合わせ下さい。'] },
        { q: 'オーバーホールできますか？', a: 'オーバーホールとは、完全に分解し消耗部品（シャッターや駆動関係部品）の交換を行うことを言います。\n旧製品の場合、部品の在庫がないため交換（オーバーホール）ができません。', asteriskList: ['詳しくはお近くの店舗までお問い合わせ下さい 。'] },
        { q: '代替機はありますか？', a: 'ご用意しておりません。', asteriskList: [] },
        { q: '修理遅延のため、使用予定に支障が出た場合の補償は？', a: '補償はいたしておりません。故障の度合い、修理の混雑、部品の保有により期間が延びる場合がこざいます。修理はあらかじめ日程に余裕をもってご依頼ください。', asteriskList: [] },
        { q: '他の店舗での受け渡しは可能でしょうか？', a: '申し訳ございません。受付店舗でのお渡しとなります。', asteriskList: [] },
        { q: '保証の内容について、教えてください', a: '', asteriskList: [] },
        { q: '落下や水没の際も保証されるのですか？', a: 'この保証制度は、自然故障によるものだけを保証修理の対象とさせていただいております。落下や水没など、ショック品と判断された修理については保証制度は適用されません。', asteriskList: [] },
        { q: '有償修理になる場合もあるのですか？', a: '保証対象商品についての保証サービスの提供は、1回を限度とさせていただいております。\n一度、保証サービスを利用された場合は、該当商品に対しての保証サービスは終了します。それ以後に再度、故障が発生した場合の修理については有料修理となります。', asteriskList: ['同一箇所の再修理に関しては保証制度があります。再修理保証期間内での修理代金はかかりません。', 'また、保証限度金額を超える高額修理になったときも、不足部分での修理代金が発生する場合がございます。'] },
        { q: '5年間保証を紛失したのですが…', a: '再発行はできませんので、ケースに入れて大切に保管いただくようお願い申し上げます。', asteriskList: [] },
        { q: '引越しするのですが、他店でも使えますか？', a: 'すべてのキタムラ、キタムラ店舗でご利用いただけます。北海道から沖縄までの全国チェーンならではの安心をお約束します。', asteriskList: [] },
        { q: '中古カメラの保証について', a: '', asteriskList: [] },
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
