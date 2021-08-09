<template>
  <v-app>
    <div class="deliver">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-container>
          <v-main class="">
            <v-container class="ma-0 pa-0">
              <v-row>
                <!--==================== サイドメニュー ====================-->
                <v-col cols="3">
                  <v-sheet rounded="lg">
                    <v-list color="transparent">
                      <!--==================== 各種サービス案内 ====================-->
                      <v-list-item-title class="rounded-t-xl text-center pa-2 red white--text font-weight-black">各種サービス案内</v-list-item-title>

                      <v-list-item v-for="(serviceGuide, index) in serviceGuideList" :key="`first-${index}`" link class="sidebar-border px-0">
                        <v-list-item-content class="ma-0 pa-0">
                          <router-link :to="serviceGuide.href"
                            ><v-img :src="serviceGuide.src" max-width="100%" aspect-ratio: auto height="auto"></v-img>
                          </router-link>
                        </v-list-item-content>
                      </v-list-item>

                      <!--==================== 古物営業法に基づく表示 ====================-->
                      <v-list-item class="px-0 my-4">
                        <v-img src="/ec/images2/special/page/deliver/pc/img_policy.png" max-width="100%" aspect-ratio: auto height="auto"></v-img>
                      </v-list-item>

                      <!--==================== 共通secure ====================-->
                      <v-list-item class="px-0">
                        <div class="frame">
                          <v-img src="/ec/images2/special/page/deliver/pc/txt_creditcard.png" max-width="100%" height="auto" />
                          <v-img src="/ec/images2/special/page/deliver/pc/img_creditcard.png" max-width="100%" height="auto" />
                          <v-list-item-title class="text-right mt-2">
                            <v-btn text color="indigo" href="/3Dsecure/secure.html">詳細はこちら</v-btn></v-list-item-title
                          >
                        </div>
                      </v-list-item>

                      <v-list-item class="px-0 mt-4">
                        <v-img src="/ec/images2/special/page/deliver/pc/bnr_misrepresentation_warning.gif" max-width="100%" height="auto" />
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-col>
                <!--==================== ↑サイドメニュー ====================-->

                <v-col cols="12" sm="9">
                  <div class="used-navi py-6 px-2">
                    <h1>カメラのキタムラ 商品お届けまでの流れ</h1>
                    <v-row class="my-4">
                      <v-col cols="4" v-for="(navi, index) in naviBtn" :key="`second-${index}`">
                        <a :href="navi.href">
                          <v-img :src="navi.src" @mouseover="changeImg(index)" @mouseleave="returnImg(index)"></v-img>
                        </a>
                      </v-col>
                    </v-row>

                    <!--==================== 商品のお届けまでの流れ（店舗受取の場合） ====================-->
                    <div class="mt-10">
                      <p class="text-h6" id="a01"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（店舗受取の場合）</p>
                      <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>店舗受取の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/pc/02.png" max-width="100%"></v-img>
                      </div>
                    </div>

                    <!--==================== 商品のお届けまでの流れ（宅配受取の場合） ====================-->

                    <div class="mt-10">
                      <p class="text-h6" id="a02"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（宅配受取の場合)</p>
                      <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>宅配受取の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/pc/01.png" max-width="100%"></v-img>
                      </div>
                    </div>

                    <!--==================== 商品お届けまでの流れ（メーカー直送の場合） ====================-->

                    <div class="mt-10">
                      <p class="text-h6" id="a03"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品お届けまでの流れ（メーカー直送の場合）</p>
                      <v-img src="/ec/images2/special/page/deliver/pc/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>メーカー直送の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/pc/03.png" max-width="100%"></v-img>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
export default Vue.extend({
  name: 'deliver',
  components: {
    breadcrumbs: Breadcrumbs
  },
  data() {
    return {
      serviceGuideList: [
        { src: '/ec/images2/special/page/deliver/pc/btn_service_payment_off.gif', href: '/sitemap/riyou_shiharai_index.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_guarantee_off.gif', href: '/sitemap/riyou_hoshou_index.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_purchase_trade-in_off.gif', href: '/special/sale-fair/page/sell/' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_setup_off.gif', href: '/files/setup/01.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_recycling_off.gif', href: '/files/recycle/index.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_maker_off.gif', href: '/files/m_support/index.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_faq_off.gif', href: 'https://ecfaq.kitamura.jp/s/' },
        { src: '/ec/images2/special/page/deliver/pc/btn_service_shop_off.gif', href: 'http://sss.kitamura.jp/' },
        { src: '/ec/images2/special/page/deliver/pc/btn_shuri_off.gif', href: '/files/syuuri/index.html' },
        { src: '/ec/images2/special/page/deliver/pc/btn_toiawase_off.gif', href: '/sitemap/otoiawase_index.html' }
      ],
      naviBtn: [
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn01_off.png', href: '#a01' },
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn02_off.png', href: '#a02' },
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn03_off.png', href: '#a03' }
      ]
    };
  },
  methods: {
    //mouseover時の処理
    changeImg(target: number) {
      this.naviBtn[target].src = `https://shop.kitamura.jp/ts_rsc/666/images/btn0${target + 1}_on.png`;
    },
    //mouseleave時の処理
    returnImg(target: number) {
      this.naviBtn[target].src = `https://shop.kitamura.jp/ts_rsc/666/images/btn0${target + 1}_off.png`;
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '商品のお届けまでの流れ',
          disabled: true
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
.sidebar-border {
  border-left: 1px solid #c3c3c3;
  border-right: 1px solid #c3c3c3;
  border-bottom: 1px solid #c3c3c3;
  border-radius: 0 0 3px 3px;
}
.frame {
  padding: 9px 10px 6px;
  border-radius: 3px;
  border: 1px solid #c3c3c3;
  box-shadow: inset 0 1px 1px #fff;
  background: #fff;
  background: linear-gradient(to bottom, #fff 58%, #e7e7e7 100%);
}
.used-navi {
  background-image: url(/ec/images2/special/page/deliver/pc/bg03.jpg);
}
.used-navi h1 {
  background: none repeat scroll 0 0 #b91329;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 10%);
  margin: 0 -10px;
  padding: 10px 20px;
  display: block;
  position: relative;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-align: center;
}
</style>