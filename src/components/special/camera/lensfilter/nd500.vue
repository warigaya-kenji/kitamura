<template>
  <div class="nd500">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!--風景写真の必需品 ND500フィルター-->
        <section>
          <h1>風景写真の必需品 ND500フィルター</h1>
          <p>
            NDフィルターは減光フィルターとも呼ばれ、色彩に影響を与えることなく光量を低下させるフィルターです。<br />
            NDフィルターを使うと、ワンステップアップしたアートでキレイな風景写真が残せます♪ その理由や撮影のポイントをまとめました。
          </p>
          <v-tabs background-color="grey lighten-4" grow height="60">
            <v-tab>
              <a v-scroll-to="'#reason'">NDフィルターが<br />必要な理由</a></v-tab
            >
            <v-tab>
              <a v-scroll-to="'#nd500ex'">ND500<br />作例写真</a></v-tab
            >
            <v-tab>
              <a v-scroll-to="'#point'">撮影方法<br />コツ・ポイント</a></v-tab
            >
            <v-tab>
              <a v-scroll-to="'#sguide'">シャッタースピード<br />目安表</a></v-tab
            >
            <v-tab>
              <a v-scroll-to="'#list'">おすすめフィルター<br />ND500</a></v-tab
            >
          </v-tabs>
        </section>
        <!--NDフィルター使用で、こんな写真が撮れます-->
        <section>
          <h2>NDフィルター使用で、こんな写真が撮れます</h2>
          <!--carousel-->
          <v-carousel class="sakurei-carouse" height="auto" hide-delimiters v-model="model">
            <v-carousel-item>
              <v-sheet tile>
                <img alt="作例" src="/ec/images2/special/camera/lensfilter/nd500/slide_01.jpg" />
                <span>by 羽仁嘉康 カメラのキタムラ</span>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet tile>
                <img alt="作例" src="/ec/images2/special/camera/lensfilter/nd500/slide_03.jpg" />
                <span>by ゴマくた Supported by PicTavern</span>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet tile>
                <img alt="作例" src="/ec/images2/special/camera/lensfilter/nd500/slide_04.jpg" />
                <span>by cozy Supported by PicTavern</span>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet tile>
                <img alt="作例" src="/ec/images2/special/camera/lensfilter/nd500/slide_05.jpg" />
                <span>by cozy Supported by PicTavern</span>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet tile>
                <img alt="作例" src="/ec/images2/special/camera/lensfilter/nd500/slide_06.jpg" />
                <span>by dkizm Supported by PicTavern</span>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <!--carousel-->
        </section>
        <!--NDフィルターが必要な理由-->
        <section id="reason">
          <h2>NDフィルターが必要な理由</h2>
          <p class="font-weight-bold yellow lighten-5 text-h6">キレイな画質で水の流れなどを撮影するにはNDフィルターが必須です</p>
          <v-sheet class="pa-4" outlined>
            <p>
              絞りをF8で固定すると、画質はいいけれどシャッタースピードを遅くできず、滝と紅葉などの水の流れる様子が撮れません。<br />
              <span class="yellow lighten-5">NDフィルターで光の量を落とすと、シャッタースピードを遅くでき</span>、水の流れなどの流し撮りを可能にします。
            </p>
          </v-sheet>
        </section>
        <!--ND500を使って、9絞りの減光効果。滝の流れの撮影に成功！-->
        <section id="nd500ex">
          <h2>ND500を使って、9絞りの減光効果。滝の流れの撮影に成功！</h2>
          <p class="font-weight-bold yellow lighten-5 text-h6">ISO100、F8で固定した作例写真</p>
          <v-sheet class="pa-4" outlined>
            <p>
              NDフィルター未使用時は、シャッタースピード1/50秒で、滝の流れは止まっています。<br />
              ND500を使用すると、シャッタースピードを6秒にでき、水の流れを表現できました。
            </p>
            <v-row class="mt-4">
              <v-col cols="12" sm="6">
                <v-img alt="NDフィルター未使用時 ｜ 作例" src="/ec/images2/special/camera/lensfilter/nd500/img_ba_b1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <!--dialog-->
                <v-row justify="space-around">
                  <v-col cols="auto">
                    <v-dialog max-width="800">
                      <template v-slot:activator="{ on, attrs }">
                        <v-img
                          alt="NDフィルター使用時 ｜ 作例"
                          class="mx-auto"
                          src="/ec/images2/special/camera/lensfilter/nd500/img_ba_a1.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                      </template>
                      <template v-slot:default="dialog">
                        <v-card>
                          <v-img
                            alt="NDフィルター使用時 ｜ 作例(拡大)"
                            class="mx-auto"
                            src="/ec/images2/special/camera/lensfilter/nd500/img_breforeafuter.jpg"
                            v-bind="attrs"
                            v-on="on"
                          ></v-img>
                          <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">閉じる</v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                </v-row>
                <!--dialog-->
              </v-col>
            </v-row>
          </v-sheet>
        </section>
        <!--撮影のポイント・撮影方法-->
        <section id="point">
          <h2>撮影のポイント・撮影方法</h2>
          <p class="font-weight-bold yellow lighten-5 text-h6">ご存知ですか？ 風景写真はF8くらいがキレイに撮れます</p>
          <v-sheet class="pa-4" outlined>
            <v-row>
              <v-col cols="12" sm="6">
                <p>
                  フィルム時代は、F16～F22が一番シャープに写りましたが、デジタル一眼レフでは、<span class="yellow lighten-5">
                    回折現象が起こるため、F8くらいが一番キレイ</span
                  >に撮れます。<br />
                  回折現象は、特にセンサーサイズの小さいマイクロフォーサーズ機などで起こりやすいです。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <!--dialog-->
                <v-row justify="space-around">
                  <v-col cols="auto">
                    <v-dialog max-width="800">
                      <template v-slot:activator="{ on, attrs }">
                        <v-img alt="作例" class="mx-auto" src="/ec/images2/special/camera/lensfilter/nd500/img_kaisetu.jpg" v-bind="attrs" v-on="on"></v-img>
                      </template>
                      <template v-slot:default="dialog">
                        <v-card>
                          <v-img
                            alt="作例(拡大)"
                            class="mx-auto"
                            src="/ec/images2/special/camera/lensfilter/nd500/img_kaisetsu.jpg"
                            v-bind="attrs"
                            v-on="on"
                          ></v-img>
                          <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">閉じる</v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                </v-row>
                <!--dialog-->
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-sheet class="pa-4 text-center" outlined>
                  F値<br />
                  F8～F11
                </v-sheet>
              </v-col>
              <v-col cols="12" sm="4">
                <v-sheet class="pa-4 text-center" outlined>
                  シャッタースピード<br />
                  2秒以上
                </v-sheet>
              </v-col>
              <v-col cols="12" sm="4">
                <v-sheet class="pa-4 text-center" outlined>
                  必須NDフィルター<br />
                  <span class="yellow lighten-5">ND500 (ND1000)</span>
                </v-sheet>
              </v-col>
            </v-row>
          </v-sheet>
          <p class="font-weight-bold mt-4 yellow lighten-5 text-h6">構図・ピントを合わせてからNDフィルターを付ける</p>
          <p>濃度が高いため、フィルターを付ける前に構図・ピントを決めるのがポイントです</p>
          <v-img alt="構図・ピント合わせ・NDフィルター装着 | イメージ" src="/ec/images2/special/camera/lensfilter/nd500/nd-way.jpg"></v-img>
        </section>
        <!--絞りとシャッタースピードの目安表-->
        <section id="sguide">
          <h2>絞りとシャッタースピードの目安表</h2>
          <v-img alt="絞りとシャッタースピード ｜ 表" src="/ec/images2/special/camera/lensfilter/nd500/hyou.gif"></v-img>
          <p class="mt-2">晴天時をISO100 1/125秒 F16と仮定（日差しの状況などで変化します）</p>
          <p>曇天時をISO100 1/125秒 F5.6と仮定（雲の状況で変化します）</p>
        </section>
        <!--風景写真におすすめ NDフィルター ケンコー PRO-ND500 / ND1000-->
        <section id="list">
          <h2>風景写真におすすめ NDフィルター ケンコー PRO-ND500 / ND1000</h2>

          <!-- ↓ 特集IDでの商品一覧表示 -->
          <product-list-by-special-id class="mb-5" :specialId="986" />
        </section>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <kitamuraService />

        <subText :textItem="'関連おすすめ特集・プリントサービス'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'nd500',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '風景写真におすすめND500フィルター | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '減光フィルターのND500を使うことで、キレイな風景写真が残せます♪その理由や撮影のポイントをまとめた特集ページ。レンズフィルターはカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----

      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/lensfilter/',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.gif',
          alt: '効果・種類が分かる！レンズフィルター特集'
        },
        {
          href: '/special/sale-fair/general/photocon-learn/',
          img: 'https://shopimg.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: 'https://www.kitamura-print.com/?_ga=2.244789260.807416356.1633936356-1982462568.1615969203',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'アートでキレイな風景写真のおすすめのND(減光)フィルター「ND500」',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759174680'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
    };

  }
});
</script>



<style lang="scss" scoped>
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
  h1 {
    color: #ff6600;
    font-size: 160%;
    margin: 16px 0 64px;
  }
  h2 {
    background: url(/ec/images2/special/camera/lensfilter/nd500/bg_title_sec_mein.gif) no-repeat;
    font-size: 140%;
    margin: 64px 0 32px;
    padding: 5px 5px 5px 30px;
  }
  .sakurei-carouse {
    img {
      width: 100%;
    }
    span {
      display: block;
      padding: 5px;
      text-align: center;
    }
  }
}
</style>