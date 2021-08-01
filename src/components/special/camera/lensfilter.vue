<template>
  <v-app>
    <div class="polarie">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <div class="text-right">
          <v-btn
            color="red darken-2"
            class="white--text body-2 mb-1"
            v-clipboard:copy="'https://shop.kitamura.jp/ec/special/camera/feature/canon/tripod'"
            v-clipboard:success="onCopy"
            height="30px"
            >≫ このページのURLをコピーする</v-btn
          >
          <p class="caption">
            <a href="/special/sale-fair/page/bookmark/" target="_blank"> (?)ブラウザ別 お気に入り・ブックマーク登録方法</a>
          </p>
        </div>

        <v-main class="">
          <v-container>
            <v-row>
              <v-col cols="3">
                <v-sheet rounded="lg">
                  <v-list color="transparent">
                    <v-list-item v-for="n in 5" :key="n" link>
                      <v-list-item-content>
                        <v-list-item-title> List Item {{ n }} </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider class="my-2"></v-divider>

                    <v-list-item link color="grey lighten-4">
                      <v-list-item-content>
                        <v-list-item-title> Refresh </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-sheet>
              </v-col>

              <v-col>
                <v-sheet min-height="70vh" rounded="lg" class="pa-2">
                  <p class="text-h5">こんな方におすすめ</p>

                  <div class="konnehito">
                    <p class="mb-0">
                      川の流れや滝、波を絹糸のように、霧状に、雲海のように撮影したい方<br />
                      明るい条件でも、背景をぼかして撮影したい方（動画撮影にもおすすめ<br />
                      車や電車・飛行機などの流し撮りに挑戦したい方
                    </p>
                  </div>
                  <p class="text-h5 my-4">キタムラがおすすめするNDフィルター</p>

                  <v-row class="grey lighten-3 mb-6">
                    <v-col cols="12" sm="6" class="pa-3 mt-6">
                      <router-link to="https://shop.kitamura.jp/special/sale-fair/page/news/2017/07/2956/?limit=40" class="routerLink"
                        >ケンコー（Kenko）<br />PRO1D プロNDシリーズ</router-link
                      >
                      <p class="my-4">試しに始めたい人におすすめ</p>
                      <v-img src="@/assets/special/img/lensfilter1.png" max-width="100%" height="auto"></v-img>
                      <v-btn
                        href="/special/sale-fair/page/news/2017/07/2956/?limit=40"
                        elevation="6"
                        block
                        rounded
                        color="orange"
                        class="white--text font-weight-bold"
                        >≫ 商品一覧を見る</v-btn
                      >
                    </v-col>

                    <v-col cols="12" sm="6" class="pa-3 mt-6">
                      <router-link
                        to="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%20PRO1D%20%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9%20ND%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%20&category=&limit=100&index=all&searchbox=1&sort=number20,Score&q=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%20PRO1D%20%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9%20ND%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%20&path=&y=0&x=0"
                        class="routerLink"
                        >ケンコー（Kenko）<br />PRO1D ロータス NDフィルター</router-link
                      >
                      <p class="my-4">試しに始めたい人におすすめ</p>
                      <v-img src="@/assets/special/img/lensfilter2.png" max-width="100%" height="auto"></v-img>
                      <v-btn
                        href="/pd/list.html?limit=100&index=all&searchbox=1&sort=number20%2CScore&q=ケンコー+PRO1D+ロータス+NDフィルター+&path=&y=0&x=0"
                        elevation="6"
                        block
                        rounded
                        color="orange"
                        class="white--text font-weight-bold"
                        >≫ 商品一覧を見る</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-btn
                    href="/pd/list.html?limit=100&index=all&searchbox=1&sort=number20%2CScore&q=ケンコー+PRO1D+ロータス+NDフィルター+&path=&y=0&x=0"
                    elevation="6"
                    block
                    height="50px"
                    color="orange"
                    class="white--text font-weight-bold"
                    >≫ 減光・NDフィルター 一覧を見る</v-btn
                  >

                  <p class="text-h5 my-4">NDフィルター・減光フィルターの選び方</p>
                  <p class="mt-2 pa-4 text--left line-height">
                    NDフィルターは、濃さによって減光量が異なります。<br />
                    ND4は光量を1/4で2絞り分、ND8は光量を1/8で3絞り分、調節できます。<br />
                    明るさは撮影場所まで行かないとわからないため、どれがおすすめという表現は難しいですが、濃すぎと感じた場合には、感度を上げることで必要な条件に設定できるので、手始めにはND8が幅広く使えます。<br />
                    また、三脚を据えて撮影する場合は、ライブビュー（液晶）撮影がおすすめです。モニターに表示されるのは「NDフィルター」の濃さに影響しない実際の写りに近い明るさのため、ファインダーを覗いたときと違い、暗くなりません。<br />
                    なお、ポートレートなど手持ち撮影でファインダーを覗いた際には、暗く見えてピントが合わせにくくなりますので、濃すぎないフィルターがおすすめです。
                  </p>
                  <v-divider class="my-6"></v-divider>
                  <p class="pa-2 black darken-2 white--text font-weight-black">
                    写りには影響せず、レンズの「掛け捨て保険」として必須アイテム<br />
                    レンズ保護フィルター・プロテクター
                  </p>

                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <v-img src="@/assets/special/img/lensfilter5.png" max-width="100%" height="auto"></v-img>
                      </v-col>
                      <v-col cols="6">
                        <v-img src="@/assets/special/img/lensfilter4.png" max-width="100%" height="auto"></v-img>
                      </v-col>
                    </v-row>
                  </v-container>

                  <p class="text-h5">こんな方におすすめ</p>

                  <div class="konnehito">
                    <p class="mb-0">
                      はじめてレンズを購入した方、カメラを始められる方<br />
                      レンズのお手入れを簡単にしたい方<br />
                      水辺での撮影など、しぶきがかかる状況で撮影される方
                    </p>
                  </div>

                  <p class="text-h6 my-6">キタムラがおすすめするレンズ保護フィルター・プロテクター</p>

                  <v-row class="grey lighten-3 mb-6">
                    <v-col cols="12" sm="6" class="pa-3 mt-6" v-for="LensProtectionFilter in LensProtectionFilterList" :key="LensProtectionFilter">
                      <router-link :to="LensProtectionFilter.herf" class="routerLink">{{ LensProtectionFilter.name }}</router-link>
                      <p class="my-4">{{ LensProtectionFilter.txt }}</p>
                      <router-link :to="LensProtectionFilter.herf">
                        <v-img :src="LensProtectionFilter.img" max-width="100%" height="auto"></v-img>
                      </router-link>
                      <v-btn :href="LensProtectionFilter.herf" elevation="6" block rounded color="orange" class="white--text font-weight-bold"
                        >≫ 商品一覧を見る</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-btn
                    href="https://shop.kitamura.jp/special/sale-fair/camera/lensfilter/346/?limit=100"
                    elevation="6"
                    block
                    height="50px"
                    color="orange"
                    class="white--text font-weight-bold my-4"
                    >≫ レンズ保護フィルター・プロテクター 一覧</v-btn
                  >
                  <p class="mt-8 line-height">
                    レンズを傷つけてしまった場合、高額な修理費用がかかってしまいます。レンズにしぶきがついた場合、自分でメンテナンスするにも慎重なレンズクリーニングが必要になります。メンテナンスを簡単にするためにも、保護フィルターを装着することをおすすめします。<br />
                    また、レンズをぶつけてしまっても、保護フィルターをつけていれば、レンズ自体は傷つかずにすむことがあります。雨や水しぶきなどの汚れからもレンズを保護します。<br />
                    最近では、高性能なレンズをお使いのユーザー様からの声を受け、より付けていない状態と変わらない「低反射率・高透過率・高解像度」の製品も登場し、今まで保護フィルターをつけなかったプロの方も利用されるようになってきました。<br />
                    高価なレンズを守るために、レンズと同時に買っておくと安心ですね。
                  </p>

                  <!-- <v-img src="@/assets/special/img/lensfilter3.png" max-width="50%" height="auto"></v-img> -->

                  <v-divider class="my-6"></v-divider>
                  <p class="pa-2 black darken-2 white--text font-weight-black">
                    反射をコントロールするフィルターで、風景撮影の必須アイテム！<br />
                    PLフィルター・偏光フィルター
                  </p>
                  <v-row class="mb-6">
                    <v-col cols="6">
                      <v-img src="@/assets/special/img/lensfilter10.png" max-width="100%" height="auto"></v-img>
                    </v-col>
                    <v-col cols="6">
                      <v-img src="@/assets/special/img/lensfilter11.png" max-width="100%" height="auto"></v-img>
                    </v-col>
                  </v-row>
                  <p class="text-h5">こんな方におすすめ</p>

                  <div class="konnehito">
                    <p class="mb-0">
                      風景写真で空の透き通るような青さや雲の白さを表現したい方<br />
                      テーマパークなどでガラスケースやショーウィンドーの中の展示物を反射を抑え撮影したい方<br />
                      紅葉や新緑などを色鮮やかに描写したい方
                    </p>
                  </div>
                  <p class="text-h5 my-6">キタムラがおすすめするPLフィルター</p>

                  <v-row class="grey lighten-3 mb-6">
                    <v-col cols="12" sm="6" class="pa-3 mt-6">
                      <router-link to="/pd/list.html?q=%E3%83%90%E3%83%AA%E3%82%A2%E3%83%96%E3%83%ABND%2BC-PL&searchbox=1" class="routerLink"
                        >K&F Concept NANO-X バリアブルND+C-PL 多機能フィルター</router-link
                      >
                      <p class="my-4">ND（光量調整）機能とC-PL（円偏光）機能を1つに凝縮したフィルター</p>
                      <router-link to="/pd/list.html?q=%E3%83%90%E3%83%AA%E3%82%A2%E3%83%96%E3%83%ABND%2BC-PL&searchbox=1">
                        <v-img src="@/assets/special/img/lensfilter12.png" max-width="100%" height="auto"></v-img>
                      </router-link>
                      <v-btn
                        href="/pd/list.html?q=%E3%83%90%E3%83%AA%E3%82%A2%E3%83%96%E3%83%ABND%2BC-PL&searchbox=1"
                        elevation="6"
                        block
                        rounded
                        color="orange"
                        class="white--text font-weight-bold"
                        >≫ 商品一覧を見る</v-btn
                      >
                    </v-col>

                    <v-col cols="12" sm="6" class="pa-3 mt-6">
                      <router-link to="/pd/list.html?q=%E3%83%90%E3%83%AA%E3%82%A2%E3%83%96%E3%83%ABND%2BC-PL&searchbox=1" class="routerLink"
                        >マルミ EXUS サーキュラーPL</router-link
                      >
                      <p class="my-4">低反射枠を採用し、最高の性能と機能を備え最高画質を追求したデジタルカメラ用フィルター</p>
                      <router-link
                        to="/pd/list.html?limit=40&index=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&sort=number20%2CScore&searchbox=1&s1[]=%E3%83%9E%E3%83%AB%E3%83%9F&q=EXUS+%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%BCPL&path="
                      >
                        <v-img src="@/assets/special/img/lensfilter13.png" max-width="100%" height="auto"></v-img>
                      </router-link>
                      <v-btn
                        href="/pd/list.html?limit=40&index=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&sort=number20%2CScore&searchbox=1&s1[]=%E3%83%9E%E3%83%AB%E3%83%9F&q=EXUS+%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%BCPL&path="
                        elevation="6"
                        block
                        rounded
                        color="orange"
                        class="white--text font-weight-bold"
                        >≫ 商品一覧を見る</v-btn
                      >
                    </v-col>
                  </v-row>

                  <v-btn
                    href="/special/sale-fair/camera/lensfilter/341/?limit=100"
                    elevation="6"
                    block
                    height="50px"
                    color="orange"
                    class="white--text font-weight-bold my-4"
                    >≫ PLフィルター・偏光フィルター 一覧</v-btn
                  >

                  <p class="my-2 line-height">
                    アプリを使えば空の青さを加工したり、色を鮮やかにすることは簡単にできるように思いがちですが、実は撮影時から、この「PLフィルター」を使うことで、より自然に、見たままの感動を描写することができます。
                    青い空を撮影した際、なんだかスッキリしないなぁと感じたことありませんか？
                    これは空気中のホコリなどに光が乱反射して白っぽく写ってしまうからなんです。白い雲、青い空。見たままのスッキリとした透き通るような青さを表現するには、この「PLフィルター」は必須です。
                  </p>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
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
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'polarie',
  components: {
    breadcrumbs: Breadcrumbs
    // facebookAndTwitter: FacebookAndTwitter,
    // recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      LensProtectionFilterList: [
        {
          name: "マルミ EXUS レンズプロテクト SOLID",
          txt: "従来品の7倍の強度の強化ガラス使用！無色透明なレンズ保護フィルター",
          herf: "/ec/list?keyword=マルミ EXUS SOLID LensProtect SOLID&narrow18=0&sort=price_desc&limit=40",
          img: require("@/assets/special/img/lensfilter6.png")
        },
        {
          name: "マルミ DHG スーパーレンズプロテクト 「My Color Filter」",
          txt: "カラーバリエーションが豊富！ 12種類。おしゃれなカラーで人気！",
          herf: "/pd/list.html?limit=100&index=all&searchbox=1&sort=number20%2CScore&q=My+Color+Filter&path=&y=0&x=0",
          img: require("@/assets/special/img/lensfilter7.png")
        },
        {
          name: "ケンコー PRO1D ロータス プロテクター 保護フィルター",
          txt: "水や油を強力に弾く撥水・撥油機能",
          herf: "https://shop.kitamura.jp/pd/list_dtl.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&searchbox=1&q=PRO1D+%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9+%E3%83%97%E3%83%AD%E3%83%86%E3%82%AF%E3%82%BF%E3%83%BC&path=",
          img: require("@/assets/special/img/lensfilter8.png")
        },
        {
          name: "ニコン ARCREST(アルクレスト)<br /> PROTECTION FILTER",
          txt: "つけていない！ を実感できる最高品質",
          herf: "/pd/list.html?index=&searchbox=1&sort=number20%2CNumber17%2CScore&q=%E3%83%8B%E3%82%B3%E3%83%B3+ARCREST+PROTECTION+FILTER&path=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F",
          img: require("@/assets/special/img/lensfilter9.png")
        },

      ],
      visible: false,
      index: 0 // default: 0
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
    showImg(index: number) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
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
          path: '星空総合ページ',
          linkUrl: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          disabled: false
        },
        {
          path: '星空を撮影しよう！ 星空撮影入門特集',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/polarie/',
          disabled: false
        }
      ],
      mainProductJanCode: [
        '8024221631142',
        '8024221647822',
        '4906752106969',
        '8024221668315',
        '8024221623178',
        '8024221623314',
        '4906752108345',
        '8024221623291',
        '4906752201688',
        '4907990407856',
        '8024221667189',
        '4906752204238',
        '4906752100448'
      ],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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
.konnehito {
  color: #668ad8;
  border: double 5px #668ad8;
  background: #f1f8ff;
  padding: 1em;
  box-sizing: border-box;
}

.routerLink {
  color: #1122cc;
}
</style>
