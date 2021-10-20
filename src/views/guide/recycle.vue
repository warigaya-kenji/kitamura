<template>
  <v-app>
    <div class="recycle">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'リサイクル回収'" />
        <div class="w760">
          <div class="mt-4 d-flex flex-column justify-space-between align-center">
            <v-img src="https://shop.kitamura.jp/files/recycle/images/title_recycle.gif" max-width="100%" height="auto" class="hover"></v-img>
          </div>

          <subTitle :txt="'家電リサイクル回収とは'" />
          <p class="mb-6">
            特定家庭用機器再商品化法（家電リサイクル法）により、テレビ・冷蔵庫・洗濯機・エアコンの指定4品目の買い替え・廃棄の際には、法律に定められた方法にて適切に処理することが義務付けられています。
          </p>
          <!-- ↓家電リサイクル回収方法について -->
          <subTitle :txt="'家電リサイクル回収方法について'" />
          <p>家電リサイクル回収には、当店（販売事業者）にリサイクル回収を依頼する方法と、お客さまにて、リサイクル回収を行う方法の2つがあります</p>
          <p>
            当店でリサイクル回収を行う場合、リサイクル料金とは別に収集運搬料金：39,600円が必要になります
            お客さまにて、リサイクル回収を行う場合は、自治体へご依頼が必要です
          </p>

          <p>
            例）<a href="http://www.city.takamatsu.kagawa.jp/kurashi/kurashi/gomi/recycle/kaden/shori.html" target="_blank" class="mr-2"
              >香川県高松市の収集運搬料金：2,040円</a
            >
            <a href="https://kaden23rc.tokyokankyo.or.jp/Rc/Index" target="_blank">東京都23区の収集運搬料金：2,618円～3,157円</a><br />
            ※指定引取場所へ直接持ち込む場合は収集運搬料金は発生いたしません
          </p>
          <div class="recycl-method">
            <table class="table-02">
              <tr>
                <th></th>
                <th>当店にてリサイクル回収を行う場合</th>
                <th>お客さまにてリサイクル回収を行う場合</th>
              </tr>
              <tr>
                <td>リサイクル料金</td>
                <td>同一</td>
                <td>同一</td>
              </tr>
              <tr>
                <td>リサイクル券</td>
                <td>ご依頼・ご注文</td>
                <td>郵便局で購入</td>
              </tr>
              <tr>
                <td>収集運搬料金</td>
                <td>39,600円</td>
                <td>2,618円～3,157円*</td>
              </tr>
            </table>
            <span class="supplement">*東京都23区の収集運搬料金 自治体により異なる</span>
            <table class="table-02">
              <tr>
                <th>参考サイト</th>
              </tr>
              <tr>
                <td><a href="https://www.kaiketsukr.com/feelist/" target="_blank">リサイクル料金について</a></td>
              </tr>
              <tr>
                <td><a href="https://www.kaiketsukr.com/coupon/postoffice.pdf" target="_blank">リサイクル券の記入方法について</a></td>
              </tr>
              <tr>
                <td><a href="https://www.kaiketsukr.com/areasearch/" target="_blank">最寄りの指定引取場所・営業日検索について</a></td>
              </tr>
            </table>
          </div>

          <!-- ↓当店でのリサイクル回収方法 -->
          <subTitle :txt="'当店でのリサイクル回収方法'" />
          <p>
            お客様よりお申し出いただいた廃家電に合わせた家電リサイクル券を、当店がご用意し、商品のお届けとは別途にお引き取りにてお手配致します。
            商品のお届けと同時には承れません事、ご了承ください。
          </p>
          <p class="grey--text">※事前に廃家電の配線の取り外しや、洗濯機の排水（水抜き）などをお願いいたします</p>
          <v-row>
            <v-col cols="12" sm="6">
              右サンプルの形式の家電リサイクル券を、リサイクル回収の際に、配送業者に同券をお渡しいただき、排出者控えをお受け取り下さい。
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="https://shop.kitamura.jp/files/recycle/images/img_recycle_01.gif" max-width="80%" height="auto"></v-img>
              </div>
            </v-col>
          </v-row>
          <!-- ↓ご注文前にご注意ください -->
          <subTitle :txt="'ご注文前にご注意ください'" />
          <p class="red-title">家電リサイクル回収が承れない地域があります</p>
          <p>お届け地域によってはリサイクル回収が承れない場合があります。下の確認ボタンより、事前にご確認くださいませ。</p>
          <p class="grey--text">※当店で回収が承れない地域のお客様におかれましては、廃家電の排出の際は、お住まいの自治体にお問い合わせ下さい。</p>
          <p class="allow-icon"><a href="/ec/guide/otodoke.html">家電リサイクルが可能かどうか確認する</a></p>
          <p class="red-title">お客様の廃家電情報を確認次第のリサイクル回収のお手配となります</p>
          <p>
            廃家電情報の入力は正確にお願いいたします。<br />
            廃家電の情報（例：メーカー名など）に誤りがあった場合、回収ができませんので、事前にご確認をお願いいたします。
          </p>

          <!-- ↓ご注文方法 -->
          <subTitle :txt="'ご注文方法'" />
          <p class="mb-0">ステップ1. 回収対応地域を確認する</p>
          <v-divider></v-divider>
          <p>・当店で回収が承れない地域のお客様におかれましては、廃家電の排出の際は、お住まいの自治体にお問い合わせ下さい。</p>
          <p class="mb-0">ステップ2. リサイクル回収にかかる料金を確認する</p>
          <v-divider></v-divider>
          <p>・家電商品をご購入いただく前に、リサイクル回収にかかる料金をご確認ください。</p>
          <p class="mb-0">ステップ3. リサイクル回収の希望を当店へメールにてご連絡ください</p>
          <v-divider></v-divider>
          <p>・リサイクル回収をご購入頂けるページをご用意し、改めてご連絡いたします。</p>

          <!-- ↓料金 -->
          <subTitle :txt="'料金'" />
          <p>
            家電リサイクル回収料金は、排出される廃家電によって異なります。それぞれ、法律で定められた「再商品化等料金（家電リサイクル料金）」と、回収と指定廃棄所へ移動する「収集運搬料金」を合算した料金となります。下記の一覧より排出される家電をご確認下さい。
          </p>
          <p>
            <v-icon small color="red">fas fa-caret-right</v-icon
            ><a href="https://www.rkc.aeha.or.jp/recycle_price_compact.html" target="_brank">（財）家電製品協会 家電リサイクル料金一覧</a>
          </p>
          <v-sheet color="#eee" class="font-weight-bold pa-2">回収する廃家電を選んでください</v-sheet>
          <v-row class="mt-4" justify="center">
            <v-col cols="2" v-for="(navi, index) in naviList" :key="index">
              <a v-scroll-to="{ el: navi.href }">
                <v-img :src="navi.src" max-width="100%" height="auto" class="hover"></v-img>
              </a>
            </v-col>
          </v-row>

          <div v-for="(recyclingFee, index) in recyclingFeeList" :key="`recyclingFee-${index}`" class="mb-10">
            <p class="title-01" :id="recyclingFee.id">{{ recyclingFee.title }}</p>
            <p class="text-subtitle-2">
              家電リサイクル回収料金は、排出される廃家電のメーカーによって異なります。それぞれ、法律で定められた「再商品化等料金（家電リサイクル料金）」と、回収と指定廃棄所へ移動する「収集運搬料金：39,600円（税込）」を合算した料金となります。<br />
              ※<a href="http://www.rkc.aeha.or.jp/text/p_price.html" target="_blank">｢RKC｣のホームページ</a
              >よりお持ちのメーカーのリサイクル料金をご確認ください。
            </p>

            <!-- 料金表 -->
            <table class="table">
              <tbody>
                <tr>
                  <th width="32%">家電リサイクル料金</th>
                  <th width="2%"></th>
                  <th width="32%">収集運搬料金</th>
                  <th></th>
                  <th width="32%">お支払い金額</th>
                </tr>
                <tr v-for="(item, index) in recyclingFee.price" :key="`item-${index}`" class="caption text-sm-h6 font-weight-bold">
                  <td>{{ item.homeAppliance }}</td>
                  <td>＋</td>
                  <td>39,600円</td>
                  <td>＝</td>
                  <td class="red--text">{{ item.totalFee }}</td>
                </tr>
              </tbody>
            </table>
            <!-- /料金表 -->
            <p class="text-subtitle-2">
              ※メーカーによりリサイクル料金は異なります。<br />
              ※<a href="http://www.rkc.aeha.or.jp/text/p_price.html" target="_blank">｢RKC｣のホームページ</a
              >よりお持ちのメーカーのリサイクル料金をご確認ください。<br />
              ※リサイクル料金のほかに収集運搬料金：39,600円（税込）いただきます。<br />
              <span v-if="recyclingFee.id === 'air-con'"
                >※セパレートエアコンの家電リサイクル回収はエアコンをご購入時に設置工事をご依頼いただいた場合に承ります。<br />
                ※ご注文後、エアコン設置工事のお打ち合わせお電話の際に、家電リサイクル回収が必要な旨、お知らせ下さいませ。<br />
                ※エアコンの家電リサイクル料金は回収時に工事業者へ直接現金でお支払い下さい。</span
              >
            </p>
          </div>

          <!-- ↓お問い合わせ -->
          <subTitle :txt="'お問い合わせ'" />
          <p class="text-subtitle-2">家電リサイクル回収に関するお問い合わせ先</p>
          <p class="text-subtitle-2">
            【財団法人 家電製品協会 家電リサイクルセンター】<br />
            0120-319-640 受付時間 午前9時～午後5時（日・祝休）
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
import { noimage, formatPrice } from '@/logic/utils';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
export default Vue.extend({
  name: 'resycle',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle
  },
  setup: (props, context) => {
    document.title = 'リサイクル回収｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'リサイクル回収',
          disabled: true
        }
      ],
      naviList: [
        { src: 'https://shop.kitamura.jp/files/recycle/images/btn_recycle_01.gif', href: '#tv1' },
        { src: 'https://shop.kitamura.jp/files/recycle/images/btn_recycle_02.gif', href: '#tv2' },
        { src: 'https://shop.kitamura.jp/files/recycle/images/btn_recycle_03.gif', href: '#cold' },
        { src: 'https://shop.kitamura.jp/files/recycle/images/btn_recycle_04.gif', href: '#wash' },
        { src: 'https://shop.kitamura.jp/files/recycle/images/btn_recycle_05.gif', href: '#air-con' },
      ],
      recyclingFeeList: [
        {
          id: 'tv1',
          title: 'ブラウン管テレビの家電リサイクル料金',
          price: [
            { homeAppliance: '1,320円', totalFee: '40,920円' },
            { homeAppliance: '1,595円', totalFee: '41,195円' },
            { homeAppliance: '1,870円', totalFee: '41,470円' },
            { homeAppliance: '2,420円', totalFee: '42,020円' },
            { homeAppliance: '2,695円', totalFee: '42,295円' },
            { homeAppliance: '2,970円', totalFee: '42,570円' },
            { homeAppliance: '3,100円', totalFee: '42,700円' },
            { homeAppliance: '3,700円', totalFee: '43,300円' },
          ]
        },
        {
          id: 'tv2',
          title: '液晶・プラズマテレビの家電リサイクル料金',
          price: [
            { homeAppliance: '1,870円	', totalFee: '41,470円' },
            { homeAppliance: '2,970円	', totalFee: '41,470円' },
            { homeAppliance: '3,100円', totalFee: '42,700円' },
            { homeAppliance: '3,352円	', totalFee: '42,952円' },
            { homeAppliance: '3,700円	', totalFee: '43,300円' },
          ]
        },
        {
          id: 'wash',
          title: '冷凍庫・冷蔵庫の家電リサイクル料金',
          price: [
            { homeAppliance: '3,740円', totalFee: '43,340円' },
            { homeAppliance: '4,015円', totalFee: '43,615円' },
            { homeAppliance: '4,730円', totalFee: '44,330円' },
            { homeAppliance: '5,005円', totalFee: '44,605円' },
            { homeAppliance: '5,060円', totalFee: '44,660円' },
            { homeAppliance: '5,200円', totalFee: '44,800円' },
            { homeAppliance: '5,599円', totalFee: '45,199円' },
            { homeAppliance: '5,600円', totalFee: '45,200円' },
            { homeAppliance: '6,149円', totalFee: '45,749円' },
          ]
        },
        {
          id: 'cold',
          title: '洗濯機・乾燥機の家電リサイクル料金',
          price: [
            { homeAppliance: '2,530円', totalFee: '42,130円' },
            { homeAppliance: '2,640円', totalFee: '42,240円' },
            { homeAppliance: '2,805円', totalFee: '42,405円' },
            { homeAppliance: '3,300円	', totalFee: '42,900円' },
          ]
        },
        {
          id: 'air-con',
          title: 'エアコンの家電リサイクル料金',
          price: [
            { homeAppliance: '990円', totalFee: '40,590円' },
            { homeAppliance: '2,000円', totalFee: '41,600円' },
            { homeAppliance: '9,900円	', totalFee: '49,500円' },
          ]
        }
      ]

    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.w760 {
  max-width: 760px;
  margin: 0 auto;
}

.table-02 {
  border: 1px #bbb solid;
  border-collapse: collapse;
  margin: 30px auto 5px;
  width: 100%;
}

.table-02 th {
  background: #eee;
}

.table-02 th,
.table-02 td {
  border: 1px #bbb solid;
  color: #333;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}

table th {
  width: 10em;
  font-weight: inherit;
}

.red-title {
  line-height: 1.7;
  margin: 0 0 8px 0;
  padding: 0 4px 0 14px;
  font-weight: bold;
  background: url(https://shop.kitamura.jp/common/images/mkr_square_red.gif) no-repeat left 0.5em;
}

.allow-icon {
  margin: 0 0 4px 0;
  padding-left: 16px;
  background: url(https://shop.kitamura.jp/common/images/arrow_square.gif) no-repeat left 0.1em;
}

.title-01 {
  border-bottom: 5px #a8d271 solid;
  font-size: 120%;
  font-weight: bold;
  margin: 60px 0 10px;
}

table.table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 100%;
  border: 1px #bbb solid;
  border-bottom: 0;
  margin: 30px auto;
  width: 100%;
}

table.table tr {
  border: none;
}

table.table th {
  background: #eee;
  font-size: 14px;
}

// table.table td {
//   font-size: 150%;
//   font-weight: bold;
// }

table.table th,
table.table td {
  border-bottom: 1px #bbb solid;
  color: #333;
  font-family: sans-serif;
  padding: 10px;
  text-align: center;
}
</style>