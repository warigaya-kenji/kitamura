<template>
  <v-app>
    <div class="3Dsecure">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <div class="w760 text-subtitle-2">
          <v-img
            src="https://shop.kitamura.jp/3Dsecure/images/3d_secure_title01.png"
            max-width="700px"
            max-height="46px"
            alt="当店はクレジットカード本人認証サービス（3Dセキュア）に対応しています"
            class="mt-10 mb-4 mx-auto"
          ></v-img>
          <div :class="$vuetify.breakpoint.smAndDown ? 'mx-4 mb-4' : 'mx-12 mb-6'">
            <p>
              当店では、お客様により安全なショッピングをお楽しみ頂くために、安全性の高いセキュリティを提供する【Visa Secure】、【MasterCard SecureCode】、【JCB
              J/Secure】、【American Express SafeKey】を導入しております。
            </p>
            <p>上記の各クレジットカード会社の公式ページにて、パスワード等を事前登録しているお客様が対象となります。</p>
            <p>
              《お買い物方法》<br />
              登録済みのお客様にはご決済画面にて、各カード会社の本人認証サービス画面が表示されます。<br />
              内容に誤りがないかをご確認頂き、カード会社に登録しているパスワードをご入力下さい。
            </p>
            <p>
              ※パスワードを入力する画面は、SSL128bitの暗号化が施されており、入力されたパスワードは、カード会社のシステムに直接送られますので、ご安心です。<br />
              ※セキュリティソフトなどでポップアップのブロック設定をしておりますと、3Dセキュアの画面が正しく表示されないことがございますのでご注意ください。
            </p>
          </div>
          <v-img
            src="https://shop.kitamura.jp/3Dsecure/images/3d_secure_title02.png"
            max-width="700px"
            max-height="46px"
            alt="クレジットカード決済の流れ"
            class="mb-2 mx-auto"
          ></v-img>
          <div class="w630">
            <v-img
              src="https://shop.kitamura.jp/3Dsecure/images/3d_secure_image_pc.png"
              max-width="100%"
              max-height="auto"
              alt="クレジットカード決済の流れ"
              class="mb-7 mx-auto"
            ></v-img>
            <p class="mb-7">
              クレジットカード決済する際に、事前に登録されたパスワードを直接カード会社の画面で入力確認するので、第三者のカード不正使用を防ぎ、より安全にショッピングを行うことができます！
            </p>
          </div>
          <div class="waku01 mb-6">
            <p class="mt-2 text-center">※詳細は各社のサービス案内ページをご確認ください</p>
            <v-row class="mt-10 text-center mx-2">
              <v-col cols="6" v-for="(serviceGuide, index) in serviceGuideList" :key="index">
                <p>{{ serviceGuide.name }}</p>
                <a :href="serviceGuide.href" target="_brank">
                  <v-img :src="serviceGuide.src" :max-width="serviceGuide.imgWidth" max-height="130px" alt="JCB JSECURE" class="mx-auto"></v-img>
                  <p><v-icon small left color="red">far fa-caret-square-right</v-icon>公式サイトへ</p>
                </a>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
export default Vue.extend({
  name: '3Dsecure',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: (props, context) => {
    document.title = 'より安全なショッピングをお楽しみいただくために｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'より安全なショッピングをお楽しみいただくために',
          disabled: true
        }
      ],
      serviceGuideList: [
        { name: 'JCB J/SECURE', src: 'https://shop.kitamura.jp/3Dsecure/images/jcb_jsecure.png', imgWidth: '210px', href: 'http://www.jcb.co.jp/Jsecure/whats.html' },
        { name: 'SECURE CODE', src: 'https://shop.kitamura.jp/3Dsecure/images/mastercard_securecode.png', imgWidth: '180px', href: 'https://www.mastercard.co.jp/ja-jp/consumers/features-benefits/securecode.html' },
        { name: 'VISA SECURE', src: 'https://shop.kitamura.jp/3Dsecure/images/visa_secure.png', imgWidth: '130px', href: 'https://www.visa.co.jp/pay-with-visa/security/secure-online-shopping.html' },
        { name: 'AMERICAN EXPRESS SafeKey', src: 'https://shop.kitamura.jp/3Dsecure/images/amex_safekey.jpg', imgWidth: '195px', href: 'https://www.americanexpress.com/jp/jp-home/service/safekey/japanese.html' },
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.w630 {
  max-width: 630px;
  margin: 0 auto;
}

.waku01 {
  max-width: 627px;
  border: 3px solid #e9f1e4;
  border-radius: 4px;
  margin: 0 auto;
}
</style>