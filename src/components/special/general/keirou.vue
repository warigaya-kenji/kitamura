<template>
  <v-app>
    <div class="keirouhi">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-subtitle-2">
          敬老の日特集2018 プレゼントにおすすめランキング<br />
          <v-img
            src="/ec/images2/special/general/keirou/rec_gotop_off.gif"
            alt="敬老の日特集 敬老の日に贈りたい家電あります！"
            max-width="950"
            max-height="210"
          ></v-img>
        </h1>
        <p>
          「いつまでも元気でいてね｣
          「体を大切にね」そんな思いから健康家電やマッサージ器。「お出かけや趣味を楽しんでね」そんな思いからカメラなど、プレゼントにおすすめのアイテムをご紹介。メッセージや写真を添えてプレゼントすると、とても喜ばれますよ。
        </p>

        <!--==================== 健康家電 ====================-->
        <div class="line-g pa-4">
          <h2>
            「体を労わって欲しい」そんな気持ちを込めて贈る<br />
            敬老の日のプレゼント
          </h2>
          <v-sheet outlined elevation="6" class="px-2 py-4 mt-4 rounded-lg" color="#ffffff">
            <h3>マッサージチェア・マッサージ器 おすすめランキングTOP５</h3>
            <br />
            <orangeBtn :btntxt="'おすすめ商品をもっと見る'" :href="'/ec/special/general/keirou/1730'" :height="'50px'" :btnColor="'orange'" />
          </v-sheet>
        </div>

        <!--==================== ヘルスケア・健康管理グッズ ====================-->
        <div class="line-g pa-4">
          <h2>
            「健康に気をつけて欲しい」そんな気持ちを込めて贈る<br />
            敬老の日のプレゼント
          </h2>
          <v-sheet outlined elevation="6" class="px-2 py-4 mt-4 rounded-lg" color="#ffffff">
            <h3>ヘルスケア・健康管理グッズ おすすめランキングTOP５</h3>
            <v-row>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" v-for="(healthCare, index) in healthCareList" :key="index">
                <router-link :to="`/ec/pd/${healthCare.janCode}`"
                  ><v-img
                    :src="healthCare.images[0].imagePath.replace(/TN/g, 'M')"
                    :max-width="$vuetify.breakpoint.smAndDown ? 250 : 170"
                    height="auto"
                    class="mx-auto"
                  ></v-img>
                  <p class="main-product-name text-center">{{ healthCare.itemName }}</p>
                </router-link>
                <p class="text-center">
                  価格 : <span class="red--text font-weight-bold">{{ formatPrice(parseInt(healthCare.price)) }}&nbsp;</span><span class="font-small">円</span>
                </p>
              </v-col>
              <v-col cols="2" v-if="$vuetify.breakpoint.mdAndUp"></v-col>
            </v-row>
            <orangeBtn :btntxt="'おすすめ商品をもっと見る'" :href="'/ec/special/general/keirou/1732'" :height="'50px'" :btnColor="'orange'" />
          </v-sheet>
        </div>

        <!--==================== カメラ ====================-->
        <div class="line-g pa-4">
          <h2>
            「旅行やお出かけを楽しんで欲しい」そんな気持ちを込めて贈る<br />
            敬老の日のプレゼント
          </h2>
          <v-sheet outlined elevation="6" class="px-2 py-4 mt-4 rounded-lg" color="#ffffff">
            <h3>デジタルカメラおすすめランキングTOP５</h3>
            <v-row dense>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" v-for="(digitalCamera, index) in digitalCameraList" :key="index">
                <router-link :to="`/ec/pd/${digitalCamera.janCode}`"
                  ><v-img
                    :src="digitalCamera.images[0].imagePath.replace(/TN/g, 'M')"
                    :max-width="$vuetify.breakpoint.smAndDown ? 250 : 170"
                    height="auto"
                    class="mx-auto"
                  ></v-img>
                  <p class="main-product-name text-center">{{ digitalCamera.itemName }}</p>
                </router-link>
                <p class="text-center">
                  価格 : <span class="red--text font-weight-bold">{{ formatPrice(parseInt(digitalCamera.price)) }}&nbsp;</span
                  ><span class="font-small">円</span>
                </p>
              </v-col>
            </v-row>
            <orangeBtn :btntxt="'おすすめ商品をもっと見る'" :href="'/ec/special/general/keirou/1733'" :height="'50px'" :btnColor="'orange'" />
          </v-sheet>
        </div>

        <!--==================== プリントサービス ====================-->
        <div class="line-g pa-4">
          <h2>
            元気な姿は喜ばれるもの♪<br />
            メッセージを添えて「写真」を贈る敬老の日のプレゼント
          </h2>
          <div class="coment">
            <p>
              孫のあなたが大人になっても元気な姿は喜ばれるもの♪おすすめプリントサービス。<br />
              普段、あまり会えない人も、同居している人も「いつまでも元気でいてね」の気持ちを込めて贈りましょう。<br />
              (※プリントサービスページ・フォトブックページへ移動します）
            </p>
          </div>
          <v-row class="mb-2">
            <v-col cols="12" sm="6">
              <v-sheet outlined elevation="6" class="pa-2 mt-5 rounded-lg" color="#ffffff">
                <h3>「シャッフルプリント」をフレームに入れてプレゼント</h3>
                <a href="http://www.kitamura-print.com/shuffle_print/" target="_brank">
                  <v-img
                    src="/ec/images2/special/general/keirou/bnr_shuffle_350x130.png"
                    alt="デザインコラージュプリント"
                    max-width="350"
                    max-height="130"
                    class="mx-auto hover"
                  ></v-img>
                </a>
                <p class="mt-2">
                  たくさんの画像を1枚の写真に収めることができるので、 1枚飾ればお部屋もぱっと明るくなります！<br />
                  お孫さんのかわいい写真ををギュッと詰めて贈ってみませんか？ →<a href="http://www.kitamura-print.com/shuffle_print/" target="_blank"
                    >詳しくはコチラ</a
                  >
                </p>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="6">
              <v-sheet outlined elevation="6" class="pa-2 mt-5 rounded-lg" color="#ffffff">
                <h3>「フォトブック」に自分の写真を入れてプレゼント</h3>
                <a href="http://photobook.kitamura.jp/present/age.html" target="_brank">
                  <v-img
                    src="/ec/images2/special/general/keirou/bnr_ageday.jpg"
                    alt="デザインコラージュプリント"
                    max-width="350"
                    max-height="130"
                    class="mx-auto hover"
                  ></v-img>
                </a>
                <p class="mt-2">
                  近況が伝わる写真を入れて1冊にまとめてみませんか？<br />
                  敬老の日にフォトブックをおすすめするワケやフォトブックを作るコツをご紹介<br />
                  →<a href="http://photobook.kitamura.jp/present/age.html" target="_blank">詳しくはコチラ</a> ※フォトブックページへ移動します
                </p>
              </v-sheet>
            </v-col>
          </v-row>

          <div class="coment mt-5">
            <p>
              プリントと一緒に、購入するとフレーム・アルバム・フォト雑貨がお得です！<br />
              なかなか会えない人程、近況報告として日ごろのプリントした写真をアルバムやフレームに入れて、手紙を添えて贈ってみてはいかがでしょうか？
            </p>
          </div>
          <v-sheet outlined elevation="6" class="px-2 py-4 mt-4 rounded-lg" color="#ffffff">
            <h3>写真を贈るのにおすすめ！フォトフレーム</h3>
            <v-row dense>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" v-for="(photoFrame, index) in photoFrameList" :key="index">
                <router-link :to="`/ec/pd/${photoFrame.janCode}`"
                  ><v-img
                    :src="photoFrame.images[0].imagePath.replace(/TN/g, 'M')"
                    :max-width="$vuetify.breakpoint.smAndDown ? 250 : 170"
                    height="auto"
                    class="mx-auto"
                  ></v-img>
                  <p class="main-product-name text-center">{{ photoFrame.itemName }}</p>
                </router-link>
                <p class="text-center">
                  価格 : <span class="red--text font-weight-bold">{{ formatPrice(parseInt(photoFrame.price)) }}&nbsp;</span><span class="font-small">円</span>
                </p>
              </v-col>
              <v-col cols="2" v-if="$vuetify.breakpoint.mdAndUp"></v-col>
            </v-row>
            <orangeBtn :btntxt="'おすすめ商品をもっと見る'" :href="'/ec/special/general/keirou/1731'" :height="'50px'" :btnColor="'orange'" />
          </v-sheet>
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'keirou',
  components: {
    breadcrumbs: Breadcrumbs,
    orangeBtn: OrangeBtn,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: () => {
    document.title = '敬老の日特集2018 プレゼントにおすすめランキング | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '敬老の日プレゼント特集 |「いつまでも元気でいてね｣ 「体を大切にね」そんな思いから健康家電やマッサージ器。「旅行やお出かけを楽しんで欲しい」そんな思いからカメラ・カメラ用品など、プレゼントにおすすめランキングです。おじいちゃんおばあちゃんに、なかなか会えない人も。同居している人もちろんメッセージも添えて贈りましょう。'
      );
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '敬老の日特集2018 プレゼントにおすすめランキング',
          disabled: true
        }
      ],
      healthCareJanCode: ['4549077389909', '4975479415975', '4904785573628', '4904785630307'],
      healthCareList: [] as Array<ProductDetail>,
      digitalCameraJanCoed: ['4547410367669', '4549292056617', '4549292081053', '4545350051457', '4548736001664'],
      digitalCameraList: [] as Array<ProductDetail>,
      photoFrameJanCode: ['4902205237631', '4934122080977', '4974214175563', '4974214171855'],
      photoFrameList: [] as Array<ProductDetail>,
    });

    /**
    * 商品詳細を取得する
    */
    const fetchProduct = async () => {
      try {
        // ヘルスケア商品
        const healthCareResult = await ProductService.fetchProducts(state.healthCareJanCode, true);
        state.healthCareList = healthCareResult.items;
        // デジタルカメラ商品
        const digitalCameraResult = await ProductService.fetchProducts(state.digitalCameraJanCoed, true);
        state.digitalCameraList = digitalCameraResult.items;
        // フォトフレーム商品
        const photoFrameResult = await ProductService.fetchProducts(state.photoFrameJanCode, true);
        state.photoFrameList = photoFrameResult.items;
      } catch (error) {
        // ヘルスケア商品
        state.healthCareList = [] as Array<ProductDetail>;
        // デジタルカメラ商品
        state.digitalCameraList = [] as Array<ProductDetail>;
        // フォトフレーム商品
        state.photoFrameList = [] as Array<ProductDetail>;
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
.keirouhi {
  p {
    line-height: 1.5em;
  }
  h2 {
    width: 100%;
    border-left-width: 6px;
    border-left-style: solid;
    border-right-color: #d6d6d6;
    border-bottom-color: #fff;
    border-left-color: #333;
    font-size: 170%;
    font-weight: 500;
    margin: 10px 0;
    letter-spacing: 0.03em;
    line-height: 1.2em;
    padding: 5px;
    color: #333;
    box-sizing: border-box;
  }
  h3 {
    box-sizing: border-box;
    width: 100%;
    border-bottom: 3px solid #ff3791;
    border-right-color: #d6d6d6;
    color: #ff3791;
    font-size: 150%;
    font-weight: 300;
    margin: 0 0 20px 0;
    padding-right: 10px;
    line-height: 1.2em;
  }
  .coment {
    width: 100%;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    background-color: #696849;
    border-radius: 6px;
    color: #ffffff;
    ::after {
      position: absolute;
      top: 100%;
      left: 30px;
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top: 15px solid #696849;
    }
  }
  @media screen and (max-width: 509px) {
    h2 {
      font-size: 20px !important;
    }
  }
}
</style>

