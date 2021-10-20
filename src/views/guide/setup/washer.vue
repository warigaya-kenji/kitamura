<template>
  <v-app>
    <div class="washer">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓リサイクル回収 -->
        <guideTitle :txt="'設置サービス（洗濯機）'" />

        <div class="w760 text-subtitle-2">
          <homeApplianceInstallation />
          <v-img src="/ec/images2/guide/setup/title_03.gif" max-width="100%" height="auto"></v-img>

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
            <v-img src="/ec/images2/guide/setup/img_03_01.gif" max-width="auto" max-height="400px" alt="商品購入ページ"></v-img>
          </div>

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
            <v-img src="/ec/images2/guide/setup/img_03_01-2.gif" max-width="auto" max-height="514px" alt="設置サービス入力ページ"></v-img>
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
            <v-img src="/ec/images2/guide/setup/img_03_01-3.gif" max-width="auto" height="auto" alt="設置サービス入力ページ"></v-img>
          </div>

          <!-- 4.配線・設置の作業内容 -->
          <subTitle :txt="'4.配線・設置の作業内容'" :fontSize="'14px'" />
          <v-row>
            <v-col cols="12" sm="8">
              <p class="caption">
                設置場所への搬入、開梱配置作業。 特にドラム式洗濯機は80kg～ありますので、ご自身での設置は非常に大変です。是非、配線設置サービスをご依頼下さい。
              </p>
              <ul class="listNormal">
                <li>給水・排水ホースの接続</li>
                <li>アース線の取り付け</li>
                <li>水平の確認と試運転</li>
              </ul>
              <p class="caption">ドラム式洗濯機用のかさ上げキットなど、汎用品をお持ちしておりますので、必要な場合は、作業員にご相談下さい。（有料）</p>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/guide/setup/img_03_02.jpg" max-width="80%" height="auto"></v-img>
                <p>お持ちする設置部材の一例</p>
              </div>
            </v-col>
          </v-row>

          <!--5.配線・設置サービスの料金 -->
          <subTitle :txt="'5.配線・設置サービスの料金'" :fontSize="'14px'" />
          <p>縦型全自動洗濯機、縦型全自動洗濯乾燥機、二槽式洗濯機<br /><span class="red--text">4,980円（税込）</span></p>
          <p>ドラム式洗濯乾燥機<br /><span class="red--text">7,580円（税込）</span></p>

          <!-- 6.リサイクル回収の注文方法 -->
          <subTitle :txt="'6.リサイクル回収の注文方法'" :fontSize="'14px'" />
          <p>家電リサイクル回収がご必要な場合は、ご注文時に承ることが可能です。 詳しくは、家電リサイクル回収についてをご確認下さい。</p>

          <router-link to="/ec/guide/recycle">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img src="/ec/images2/guide/setup/btn_recycle.gif" max-width="80%" max-height="auto" alt="家電リサイクル回収はこちら"></v-img>
            </div>
          </router-link>

          <!-- 洗濯機 配線・設置の注意事項 -->
          <subTitle :txt="'洗濯機 配線・設置の注意事項'" :fontSize="'14px'" />
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
                <v-img src="/ec/images2/guide/setup/img_03_03.gif" max-width="80%" height="auto"></v-img>
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

          <p class="mb-0">防水パンのサイズをご確認ください</p>
          <v-divider></v-divider>
          <div class="d-flex flex-column justify-space-between align-center mt-2 mb-6">
            <v-img src="/ec/images2/guide/setup/img_03_04.gif" max-width="90%" height="auto"></v-img>
          </div>

          <v-row>
            <v-col cols="12" sm="7">
              <p>防水パンの大きさにより、置くことのできる洗濯機のサイズは限定されます。防水パンの標準的な規格サイズ（外寸）は次の3サイズです。</p>
              <v-img src="/ec/images2/guide/setup/img_03_05.gif" max-width="395px" max-height="140px"></v-img>
              <v-img src="/ec/images2/guide/setup/img_03_06.gif" max-width="395px" max-height="80px"></v-img>
            </v-col>
            <v-col cols="12" sm="5">
              <div class="d-flex flex-column justify-space-between align-center mt-2 mb-6">
                <v-img src="/ec/images2/guide/setup/img_03_07.gif" max-width="274px" max-height="376px"></v-img>
              </div>
            </v-col>
          </v-row>

          <v-sheet class="mt-2 mb-6 pa-2" color="#E7E7E7">
            <v-row>
              <v-col cols="12" sm="8">
                <v-img src="/ec/images2/guide/setup/img_03_08.gif" max-width="452px" max-height="48px"></v-img>
                <p class="caption pt-2 pl-2">
                  ベランダなど屋外に洗濯機を置く際には、防水パンがなくても設置が可能です。運転中は振動しますので、洗濯機のまわりは若干のスペースと、安定した場所が必要です。
                </p>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="d-flex flex-column justify-space-between align-center mt-2 mb-6">
                  <v-img src="/ec/images2/guide/setup/img_03_09.gif" max-width="190px" max-height="148px"></v-img>
                </div>
              </v-col>
            </v-row>
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
import { noimage, formatPrice } from '@/logic/utils';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
import HomeApplianceInstallation from '@/components/common/guide/setup/home-appliance-installation.vue';
export default Vue.extend({
  name: 'washer',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    homeApplianceInstallation: HomeApplianceInstallation
  },
  setup: (props, context) => {
    document.title = '設置サービス（洗濯機）｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '設置サービス（洗濯機）｜カメラのキタムラネットショップ',
          disabled: true
        }
      ],
      refrigeratorDoorList: [
        { type: '右開き', src: '/ec/images2/guide/setup/img_02_04.gif', txt: '右開きタイプです。\n前面に広めのスペースが\n必要です。' },
        { type: '左開き', src: '/ec/images2/guide/setup/img_02_05.gif', txt: '左開きタイプです。。\n前面に広めのスペースが\n必要です。' },
        { type: 'フレンチドア', src: '/ec/images2/guide/setup/img_02_06.gif', txt: '観音開きのタイプです。。\n開く半径が小さく、比較的場所を取りません。' }
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

<style scoped>
ul.listNormal > li {
  margin: 0 3px 6px 0.5em;
  padding: 0
   2px 0 10px;
}

.list-none {
  list-style: none;
  padding-left: 0px;
}
</style>