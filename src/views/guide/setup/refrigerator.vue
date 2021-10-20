<template>
  <v-app>
    <div class="refrigerator">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'設置サービス（冷蔵庫）'" />

        <div class="w760 text-subtitle-2">
          <homeApplianceInstallation />
          <v-img :src="images" max-width="100%" height="auto"></v-img>

          <!-- 1. 設置サービスのご注文方法と料金 -->
          <subTitle :txt="'1. 設置サービスのご注文方法と料金'" :fontSize="'14px'" />
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文方法</p>
          <p>50L以上の冷蔵庫の配送・開梱・設置は、無料で承っております。 設置が不要の場合は、ご注文時にご要望ください。</p>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>配線・設置料金</p>
          <p>50L以上の冷蔵庫配送・設置料 <span class="red--text">無料</span></p>

          <!-- 2. 2.配送希望日について -->
          <subTitle :txt="'2.配送希望日について'" :fontSize="'14px'" />
          <p>
            ご注文確定時に在庫ありの商品につきましては、お届け日時をご指定いただけます。<br />
            納期の目安は、「大型家電配送について」をご確認ください。<br />
            在庫のない商品につきましては、入荷次第、最短日を指定して発送いたします。<br />
            予めご了承ください。
          </p>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文確定時に在庫ありの商品の場合</p>
          <p>
            「買い物カゴに入れる」を押してください。 全ての項目を入力し、「次へ」を押してください。<br />
            お買い物カゴにお進みいただき、ステップ2.お届け日時指定にご記入ください。<br />
          </p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_02_01.gif" max-width="auto" max-height="auto" alt="設置サービス入力ページ"></v-img>
          </div>
          <p class="grey--text mt-2">※納期の目安は、下記ボタンより「大型家電配送について」をご確認ください。</p>
          <router-link to="/ec/guide/otodoke.html">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_oogata_delivery.gif" max-width="80%" height="auto" alt="大型家電の配送について"></v-img>
            </div>
          </router-link>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>ご注文確定時に在庫なしの商品の場合</p>
          <p>「買い物カゴに入れる」を押してください。 全ての項目を入力し、「次へ」を押してください。</p>
          <p class="grey--text mt-2">
            ※商品発送時に、お荷物問い合わせ番号と連絡先をメールにてお送りいたします。<br />
            配送当日に配送ドライバーより、お届けの確認のお電話をいたします。
          </p>
          <p>入荷次第、最短日を指定して発送いたします。予めご了承ください。</p>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/guide/setup/img_02_01-2.gif" max-width="auto" max-height="auto" alt="設置サービス入力ページ"></v-img>
          </div>

          <!-- 3.商品のお届けと設置サービス内容 -->
          <subTitle :txt="'3.商品のお届けと設置サービス内容'" :fontSize="'14px'" />
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>商品のお届けについて</p>
          <ul class="mt-2 listNormal">
            <li>ご自宅の設置場所まで、配送スタッフが2名でお持ちいたします。</li>
            <li>50Ｌ未満の冷蔵庫は、配送（玄関先まで）サービスのみとなっております。</li>
          </ul>
          <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>サービス内容</p>
          <ul class="listNormal">
            <li>50L以上の冷蔵庫の開梱と設置</li>
            <li>製品の空き箱を無料で回収</li>
          </ul>

          <!-- 4.4.リサイクル回収の注文方法 -->
          <subTitle :txt="'4.リサイクル回収の注文方法'" :fontSize="'14px'" />
          <p>家電リサイクル回収がご必要な場合は、ご注文時に承ることが可能です。 詳しくは、家電リサイクル回収についてをご確認下さい。</p>
          <router-link to="/ec/guide/recycle">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_recycle.gif" max-width="80%" max-height="auto" alt="家電リサイクル回収はこちら"></v-img>
            </div>
          </router-link>

          <!-- 冷蔵庫設置サービスの注意事項 -->
          <subTitle :txt="'冷蔵庫設置サービスの注意事項'" :fontSize="'14px'" />
          <p>家電リサイクル回収がご必要な場合は、ご注文時に承ることが可能です。 詳しくは、家電リサイクル回収についてをご確認下さい。</p>
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
                <v-img src="/ec/images2/guide/setup/img_02_02.gif" max-width="80%" height="auto"></v-img>
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

          <!-- ご確認ください -->
          <subTitle :txt="'ご確認ください'" :fontSize="'14px'" />
          <v-row>
            <v-col cols="12" sm="7">
              <p class="caption">
                冷蔵庫を設置する場合、冷蔵庫そのものの大きさだけでなく、放熱スペースを確保する必要があります。<br />
                放熱スペースは、お選びいただく冷蔵庫にもよりますが、通常は冷蔵庫側面<span class="red--text">（1）</span>及び、冷蔵庫の上<span class="red--text"
                  >（2）</span
                >となります。<br />
                また、<span class="red--text">コンセントの有無</span>も確認してください。
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/guide/setup/img_02_03.gif" max-width="100%" height="auto"></v-img>
              </div>
            </v-col>
          </v-row>
          <p class="mb-0">冷蔵庫のドアの開き方をご確認ください</p>
          <v-divider></v-divider>
          <p>冷蔵庫のドアの開閉方法、ドアを開いた時の寸法をご確認ください。</p>
          <v-row>
            <v-col cols="12" sm="4" v-for="(refrigeratorDoor, index) in refrigeratorDoorList" :key="index">
              <v-card outlined class="pa-2" elevation="4">
                <v-card-subtitle class="pa-0 font-weight-bold">{{ refrigeratorDoor.type }}</v-card-subtitle>
                <v-divider></v-divider>
                <v-img :src="refrigeratorDoor.src" max-width="100%" height="auto"></v-img>
                <v-card-text class="pl-0 including-line-breaks">
                  {{ refrigeratorDoor.txt }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <p class="mb-0 mt-2">冷蔵庫の容量をご確認ください</p>
          <v-divider class="mb-2"></v-divider>
          <v-img src="/ec/images2/guide/setup/img_02_07.gif" max-width="100%" height="auto"></v-img>

          <!-- ご注文前にご確認ください -->
          <subTitle :txt="'ご注文前にご確認ください'" :fontSize="'14px'" />
          <ul class="listNormal mb-6">
            <li>設置サービス単体のご注文は承っておりません。必ず、対象商品と同時に購入をお願いいたします。</li>
            <li>大きなお荷物ですので、必ずご希望の配送日時をご指定ください。</li>
            <li>当店販売商品以外の配線設置や、当店出荷後のご依頼は承れません。</li>
            <li>クレーンなどを用いての配送は基本的に承っておりませんが、クレーン搬入になった場合は実費を現地精算いただきます。</li>
            <li>
              事前に商品の大きさと合わせて、運搬経路をご確認ください。
              <ul class="list-none">
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
  name: 'refrigerator',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    homeApplianceInstallation: HomeApplianceInstallation
  },
  setup: (props, context) => {
    document.title = '設置サービス（冷蔵庫）｜カメラのキタムラネットショップ';
    const state = reactive({
      images: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/guide/setup/title_02.gif',
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '設置サービス（冷蔵庫）｜カメラのキタムラネットショップ',
          disabled: true
        }
      ],
      refrigeratorDoorList: [
        {
          type: '右開き',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/guide/setup/img_02_04.gif',
          txt: '右開きタイプです。\n前面に広めのスペースが\n必要です。'
        },
        {
          type: '左開き',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/guide/setup/img_02_05.gif',
          txt: '左開きタイプです。。\n前面に広めのスペースが\n必要です。'
        },
        {
          type: 'フレンチドア',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/guide/setup/img_02_06.gif',
          txt: '観音開きのタイプです。。\n開く半径が小さく、比較的場所を取りません。'
        }
      ]
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
    };
  }
});
</script>

<style scoped>
ul.listNormal > li {
  margin: 0 3px 6px 0.5em;
  padding: 0 2px 0 10px;
}

.list-none {
  list-style: none;
  padding-left: 0px;
}
</style>
