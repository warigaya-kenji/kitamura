<template>
  <v-app>
    <div class="television">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'設置サービス（テレビ）'" />

        <div class="w760 text-subtitle-2">
          <homeApplianceInstallation />
          <v-img src="/ec/images2/guide/setup/title_01.gif" max-width="100%" height="auto"></v-img>

          <!-- 1.お届け先ご住所が、配線設置可能地域か -->
          <subTitle :txt="'1.お届け先ご住所が、配線設置可能地域か、下記ボタンより「大型家電配送について」より、ご確認下さい'" :fontSize="'14px'" />
          <router-link to="/ec/guide/otodoke.html">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_oogata_delivery.gif" max-width="80%" height="auto" alt="大型家電の配送について"></v-img>
            </div>
          </router-link>
          <p class="grey--text mt-2">※お届け先ご住所によっては配線設置サービスをお受けできない地域がございます。予めご了承下さい。</p>

          <!-- 2. 設置サービスのご注文方法と料金 -->
          <subTitle :txt="'2. 設置サービスのご注文方法と料金'" :fontSize="'14px'" />
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文方法</p>
          <p>
            設置サービス対象商品をご購入の際に、一緒にご購入ください。対象商品にはチェックボックスがついております。チェックボックスにチェックを入れ、『買物カゴに入れる』ボタンを押してください。
          </p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_01_01.gif" max-width="auto" max-height="400px" alt="商品購入ページ"></v-img>
          </div>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>配線・設置料金</p>
          <p>テレビ配線・設置料 7,580円</p>

          <!-- 3.配送希望日について -->
          <subTitle :txt="'3.配送希望日について'" :fontSize="'14px'" />
          <p>
            ご注文確定時に在庫ありの商品につきましては、お届け日時をご指定いただけます。<br />
            納期の目安は、「大型家電配送について」をご確認ください。<br />
            在庫のない商品につきましては、入荷次第、最短日を指定して発送いたします。<br />
            予めご了承ください。
          </p>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文確定時に在庫ありの商品の場合</p>
          <p class="caption">
            「設置を希望する」にチェックを入れ、「買い物カゴに入れる」を押してください。 全ての項目を入力し、「次へ」を押してください。<br />
            お買い物カゴにお進みいただき、ステップ2.お届け日時指定にご記入ください。
          </p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_01_02.gif" max-width="auto" max-height="514px" alt="設置サービス入力ページ"></v-img>
          </div>
          <p class="grey--text mt-2">※納期の目安は、下記ボタンより「大型家電配送について」をご確認ください。</p>
          <router-link to="/ec/guide/otodoke.html">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_oogata_delivery.gif" max-width="80%" height="auto" alt="大型家電の配送について"></v-img>
            </div>
          </router-link>
          <p class="text-subtitle-1 font-weight-bold mt-2"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文確定時に在庫なしの商品の場合</p>
          <p class="caption">「設置を希望する」にチェックを入れ、「買い物カゴに入れる」を押してください。 全ての項目を入力し、「次へ」を押してください。</p>
          <p class="grey--text mt-2">
            ※商品発送時に、お荷物問い合わせ番号と連絡先をメールにてお送りいたします。<br />
            配送当日に配送ドライバーより、お届けの確認のお電話をいたします。
          </p>
          <p>入荷次第、最短日を指定して発送いたします。予めご了承ください。</p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_01_02-2.gif" max-width="auto" height="auto" alt="設置サービス入力ページ"></v-img>
          </div>

          <!-- 4.商品のお届けと設置サービス内容 -->
          <subTitle :txt="'4.商品のお届けと設置サービス内容'" :fontSize="'14px'" />
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>商品のお届けについて</p>
          <ul class="mt-2 listNormal">
            <li>ご自宅の設置場所まで、配送スタッフが2名でお持ちいたします。</li>
            <li>配線コードの接続や、チャンネル設定など、すぐにご覧いただけるように設置いたします。</li>
            <li>クロネコヤマト引越しセンターの「らくらく家財宅急便」でお届け可能地域に関しましては、商品のお届けと同日に配線・設置をいたします。</li>
            <li>ヤマト運輸配達地域の関しましては、別途協力会社にて配線設置作業を行います。</li>
            <li>配線設置の際の打ち合わせを、協力会社よりお電話にてご連絡いたします。</li>
            <li>37V型未満のテレビは、配送（玄関先まで）サービスのみとなっております。</li>
          </ul>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>サービス内容</p>
          <ul class="listNormal">
            <li>テレビの開梱と設置場所への配置</li>
            <li>付属テレビスタンドの取付け</li>
            <li>チューナー接続</li>
            <li>アンテナ線の接続（UHF/VHF/BS）</li>
            <li>各チャンネルの映像確認</li>
          </ul>

          <!-- 5.リサイクル回収の注文方法 -->
          <subTitle :txt="'5.リサイクル回収の注文方法'" :fontSize="'14px'" />
          <p>家電リサイクル回収がご必要な場合は、ご注文時に承ることが可能です。 詳しくは、家電リサイクル回収についてをご確認下さい。</p>

          <router-link to="/ec/guide/recycle">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_recycle.gif" max-width="80%" max-height="auto" alt="家電リサイクル回収はこちら"></v-img>
            </div>
          </router-link>

          <!-- テレビ設置サービスの注意事項 -->
          <subTitle :txt="'テレビ設置サービスの注意事項'" :fontSize="'14px'" />
          <v-row>
            <v-col cols="12" sm="8">
              <p class="caption">
                搬入経路をご確認ください<br />
                搬入経路によっては、通路を通れない場合や予定していた設置場所に入らない場合がございます。<br />
                お手数ですが、ご注文の際は事前に「搬入経路のサイズ」「障害物の有無」「設置場所のサイズ」をご確認ください。
              </p>
              <v-img src="/ec/images2/guide/setup/img_setup_03.gif" max-width="auto" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/guide/setup/img_01_03.gif" max-width="80%" height="auto"></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="4">
              <p>（1）ドアの幅を確認</p>
              <v-divider class="mb-6"></v-divider>
              <v-img src="/ec/images2/guide/setup/img_setup_04.gif" max-width="100%" height="auto"></v-img>
              <p class="text-center">玄関及び、搬入の際に出入りする<br />ドアのサイズをご確認ください。</p>
            </v-col>
            <v-col cols="12" sm="8">
              <p>（2）エレベーターの幅を確認</p>
              <v-divider></v-divider>
              <v-img src="/ec/images2/guide/setup/img_setup_05.gif" max-width="100%" height="auto"></v-img>
              <p>エレベーターを使う場合は入口の幅と高さに加え、エレベーター内の奥行もご確認ください。</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="4">
              <p>（3）通路の幅を確認</p>
              <v-divider class="mb-6"></v-divider>
              <v-img src="/ec/images2/guide/setup/img_setup_06.gif" max-width="100%" height="auto"></v-img>
              <p class="text-center">搬入する際の通路の幅をご確認ください。</p>
            </v-col>
            <v-col cols="12" sm="8">
              <p>（4）階段の幅を確認</p>
              <v-divider></v-divider>
              <v-img src="/ec/images2/guide/setup/img_setup_07.gif" max-width="100%" height="auto"></v-img>
              <p>階段を使う場合は、階段の幅と高さをご確認ください。途中で階段を折り返す場合は、踊り場の幅もご確認ください。</p>
              <p class="grey--text">※らせん階段の場合、搬入できない場合がありますので、別途お問い合わせくださいませ。</p>
            </v-col>
          </v-row>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_setup_08.gif" max-width="90%" height="auto"></v-img>
          </div>

          <!-- ご注文前にご確認ください -->
          <subTitle :txt="'ご注文前にご確認ください'" :fontSize="'14px'" />
          <ul class="listNormal mb-6">
            <li>設置サービス単体のご注文は承っておりません。必ず、対象商品と同時に購入をお願いいたします。</li>
            <li>大きなお荷物ですので、必ずご希望の配送日時をご指定ください。</li>
            <li>当店販売商品以外の配線設置や、当店出荷後のご依頼は承れません。</li>
            <li>クレーンなどを用いての配送は基本的に承っておりませんが、クレーン搬入になった場合は実費を現地で精算いただきます。</li>
            <li>
              モジュラーケーブルや分配器など、接続に必要なケーブルをご確認ください。一つのアンテナ端子から複数のテレビ(BS・CS放送など)を接続する場合に必要となります。（事前にご連絡いただければ、配送・設置業者にてご用意いたします。有料）
            </li>
            <li>
              アンテナ、受信環境をご確認ください。受信環境は下記のサイトでご確認いただけます。
              <ul class="allow-icon">
                <li><a href="http://www.dpa.or.jp/" class="icoOpen" target="_blank">Dpa 社団法人デジタル放送推進協会</a></li>
              </ul>
            </li>
            <li>
              事前に商品の大きさと合わせて、運搬経路をご確認ください。
              <ul>
                <li>（1）玄関の幅</li>
                <li>（2）設置場所のサイズ</li>
                <li>（3）運び込む通路（廊下・扉）の幅、高さ</li>
              </ul>
            </li>
            <li>必ず事前に商品が運び込めるかの確認をお願いいたします。</li>
            <li>買い替え時におかれましては、配送前に配線の取り外しをお願いいたします。</li>
          </ul>
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
import HomeApplianceInstallation from '@/components/common/guide/setup/home-appliance-installation.vue';
export default Vue.extend({
  name: 'television',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    homeApplianceInstallation: HomeApplianceInstallation
  },
  setup: (props, context) => {
    document.title = '設置サービス（テレビ）｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '設置サービス（テレビ）｜カメラのキタムラネットショップ',
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
ul.listNormal > li {
  margin: 0 3px 6px 0.5em;
  padding: 0 2px 0 10px;
}
</style>