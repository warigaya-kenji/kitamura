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
                          <router-link :to="serviceGuide.herf"
                            ><v-img :src="serviceGuide.src" max-width="100%" aspect-ratio: auto height="auto"></v-img>
                          </router-link>
                        </v-list-item-content>
                      </v-list-item>

                      <!--==================== 古物営業法に基づく表示 ====================-->
                      <v-list-item class="px-0 my-4">
                        <v-img src="/ec/images2/special/page/deliver/img_policy.png" max-width="100%" aspect-ratio: auto height="auto"></v-img>
                      </v-list-item>

                      <!--==================== 共通secure ====================-->
                      <v-list-item class="px-0">
                        <div class="frame">
                          <v-img src="/ec/images2/special/page/deliver/txt_creditcard.png" max-width="100%" height="auto" />
                          <v-img src="/ec/images2/special/page/deliver/img_creditcard.png" max-width="100%" height="auto" />
                          <v-list-item-title class="text-right mt-2">
                            <v-btn text color="indigo" href="/3Dsecure/secure.html">詳細はこちら</v-btn></v-list-item-title
                          >
                        </div>
                      </v-list-item>

                      <v-list-item class="px-0 mt-4">
                        <v-img src="/ec/images2/special/page/deliver/bnr_misrepresentation_warning.gif" max-width="100%" height="auto" />
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
                        <a :href="navi.herf">
                          <v-img :src="navi.src" @mouseover="changeImg(index)" @mouseleave="returnImg(index)"></v-img>
                        </a>
                      </v-col>
                    </v-row>

                    <!--==================== 商品のお届けまでの流れ（店舗受取の場合） ====================-->
                    <div class="mt-10">
                      <p class="text-h6" id="a01"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（店舗受取の場合）</p>
                      <v-img src="/ec/images2/special/page/deliver/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>店舗受取の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/02.png" max-width="100%"></v-img>
                      </div>
                    </div>

                    <!--==================== 商品のお届けまでの流れ（宅配受取の場合） ====================-->

                    <div class="mt-10">
                      <p class="text-h6" id="a02"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品のお届けまでの流れ（宅配受取の場合)</p>
                      <v-img src="/ec/images2/special/page/deliver/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>宅配受取の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/01.png" max-width="100%"></v-img>
                      </div>
                    </div>

                    <!--==================== 商品お届けまでの流れ（メーカー直送の場合） ====================-->

                    <div class="mt-10">
                      <p class="text-h6" id="a03"><v-icon color="orange" class="mx-1">fas fa-truck</v-icon>商品お届けまでの流れ（メーカー直送の場合）</p>
                      <v-img src="/ec/images2/special/page/deliver/line.png" class="my-2"></v-img>

                      <div class="px-8">
                        <div class="pa-2 white--text font-weight-black brown darken-4 rounded">
                          <v-icon color="orange" class="mx-1">fas fa-truck</v-icon>メーカー直送の場合
                        </div>
                        <p class="mt-2">
                          ・「納期未定」の商品は、 目安についてご案内させていただくことができません<br />
                          ・納期目安の記載がある商品は、目安どおりですが前後をする場合がございます
                        </p>
                        <v-img src="/ec/images2/special/page/deliver/03.png" max-width="100%"></v-img>
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
    breadcrumbs: Breadcrumbs,
  },
  data() {
    return {
      serviceGuideList: [
        { src: 'https://shop.kitamura.jp/common/images/btn_service_payment_off.gif', herf: '/sitemap/riyou_shiharai_index.html' },
        { src: '/ec/images2/special/page/deliver/btn_service_guarantee_off.gif', herf: "/sitemap/riyou_hoshou_index.html" },
        { src: '/ec/images2/special/page/deliver/btn_purchase_trade-in_off.gif', herf: "/special/sale-fair/page/sell/" },
        { src: '/ec/images2/special/page/deliver/btn_service_setup_off.gif', herf: "/files/setup/01.html" },
        { src: '/ec/images2/special/page/deliver/btn_service_recycling_off.gif', herf: "/files/recycle/index.html" },
        { src: '/ec/images2/special/page/deliver/btn_service_maker_off.gif', herf: "/files/m_support/index.html" },
        { src: '/ec/images2/special/page/deliver/btn_service_faq_off.gif', herf: "https://ecfaq.kitamura.jp/s/" },
        { src: '/ec/images2/special/page/deliver/btn_service_shop_off.gif', herf: "http://sss.kitamura.jp/" },
        { src: '/ec/images2/special/page/deliver/btn_shuri_off.gif', herf: "/files/syuuri/index.html" },
        { src: '/ec/images2/special/page/deliver/btn_toiawase_off.gif', herf: "/sitemap/otoiawase_index.html" },
      ],
      naviBtn: [
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn01_off.png', herf: '#a01' },
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn02_off.png', herf: '#a02' },
        { src: 'https://shop.kitamura.jp/ts_rsc/666/images/btn03_off.png', herf: '#a03' }
      ],
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
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
      ],
      productJanCodeList: [
        '4977187329704',
        '4975981525094',
        '4957638902229',
        '4977187330878',
        '4902520009609',
        '4975981503498',
        '4975981503597',
        '4957638900577',
        '4957638900614',
        '4977187330052'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
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
  background: #f3ebe1;
  // background-image: url(/ec/images2/special/page/deliver/bg03.jpg);
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
