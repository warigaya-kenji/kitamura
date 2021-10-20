<template>
  <v-app>
    <div class="paypay">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/page/paypay/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/page/paypay/sp_img_top.jpg'"
          :topTitle="'宅配でもPayPayご利用可能!\nオンライン決済で簡単自宅受取！'"
          :padding="'170px 0px 15px 40px'"
          :titleFontsize="'200%'"
        />
        <!-- ↑top image -->

        <v-sheet color="#aa0000" class="pa-4 my-4">
          <p class="white--text text-h5 font-weight-bold text-center mb-0">
            カメラのキタムラ ネットショップの宅配受取でも<br />PayPayのオンライン決済をご利用いただけます！！
          </p>
        </v-sheet>

        <subText :textItem="'クレジットカードが無くても、簡単にネットでのお買い物をお楽しみいただけます。'" />
        <p class="my-4">新品カメラやレンズはもちろん、中古商品もPayPayでお支払い可能。是非ご利用ください！</p>

        <!-- ↓ PayPayの始め方はコチラ -->
        <specificationsExamplesBtn :btntxt="'PayPayの始め方はコチラ'" :url="'https://paypay.ne.jp/guide/start/'" :height="'55px'" />

        <specificationsExamplesBtn
          :btntxt="'スマートフォン、パソコンからの\nご注文時手続き方法はコチラ'"
          :url="'https://paypay.ne.jp/guide/net-service/'"
          :height="'60px'"
        />
        <br />

        <!--↓SNS-->
        <facebookAndTwitter />

        <kitamuraService />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import SubText from '@/components/common/special/subtext.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'payapay',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    topTitleImg: TopTitleImg,
    subText: SubText,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = '宅配受取りでもペイペイ！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '宅配でもPayPayご利用可能! オンライン決済で簡単自宅受取！カメラのキタムラネットショップ')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
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