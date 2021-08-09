<template>
  <v-app>
    <div class="leica">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <h1 class="text-h6 grey--text">ライカ特集</h1>

        <!-- 960px以上 -->
        <div class="main pc">
          <p class="tx-siroi txpo white--text">憧れのカメラ、ライカ特集</p>
        </div>
        <v-img v-if="$vuetify.breakpoint.mdAndUp" src="/ec/images2/special/camera/feature/leica/main.jpg" max-width="95%" height="auto"></v-img>
        <!-- 960px未満 -->
        <v-img v-if="$vuetify.breakpoint.smAndDown" src="/ec/images2/special/camera/feature/leica/sp_main.jpg" max-width="95%" height="auto"></v-img>

        <v-main>
          <v-container>
            <!-- ドイツ最高の工学技術と、独特な写真文化の代名詞 『ライカ』 -->
            <p class="white--text grey darken-4 text-h6 py-2 px-6 my-6">ドイツ最高の工学技術と、独特な写真文化の代名詞 『ライカ』</p>
            <p class="line-height mb-10">
              ～写真にかける情熱～<br />
              ライカは約100年間にわたり、手作業で丁寧につくり上げた確かな品質と信頼を備えたカメラを世に送り出してきました。<br />
              ブランドの魅力の核心にあるのは、本当に必要なものだけを重視するというこの哲学です。<br />
              コンパクトなボディ、優れた耐久性、上品なデザイン、シンプルな操作性を兼ね備えながらも、光学系、メカニズム、機能のいずれにも妥協を許さないライカのカメラは、そのひとつひとつが小さな最高傑作と呼べるほどの仕上がり。<br />
              写真の魅力を知り、個性あふれる表現を好む方に理想的な撮影ツールです。
            </p>
            <v-row>
              <v-col cols="12" sm="4" class="pa-4">
                <router-link
                  to="/ec/list?narrow18=1&keyword=ライカ%20M10&category=ミラーレス一眼&r=&index=new&index=new&searchbox=1&sort=number20,Number17,Score&q=ライカ%20M10&path=ミラーレス一眼&n20c=完了商品は除く"
                >
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/c04/4a8/83e/014/79f/aee/815/fc3/515/0f9/f76/58d/07u/t/L.jpg"
                    max-width="100%"
                    height="auto"
                  ></v-img>
                </router-link>
              </v-col>
              <v-col cols="12" sm="8">
                <p class="white--text grey darken-4 text-subtitle-1 py-2 px-6 my-6">ライカのノウハウが詰まった1台『ライカMシステム』</p>
                <p class="line-height mb-10">
                  ライカが60年以上かけて培ってきたレンジファインダーカメラづくりの技術とノウハウにより、写真撮影の醍醐味を純粋に楽しめるカメラ。<br />
                  Mシステムの「M」は、ドイツ語で距離計（レンジファインダー）を意味する「Messsucher」に由来するもので、独特でユニークなシステムを象徴しています。<br />直感的に扱えるシンプルな操作性により、一眼レフユーザーでも手軽に撮影できるのも特長です。<br />
                  無駄な機能や複雑なメニューがないため、印象的な一瞬をとらえるという写真撮影の本質にしっかりと専念できます。
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" class="pa-4">
                <v-img src="/ec/images2/special/camera/feature/leica/q.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col cols="12" sm="8">
                <p class="white--text grey darken-4 text-subtitle-1 py-2 px-6 my-6">最新技術を取り入れた新時代のライカ『ライカQ』</p>
                <p class="line-height mb-10">
                  コンパクトなボディに35mmフルサイズセンサーと高品質で明るい単焦点レンズを搭載したデジタルカメラです。<br />
                  高速なオートフォーカスや高解像度のEVFなど、最新技術を取り入れながらもライカレンズならではの描写を味わうことのできる新時代のライカです。Wi-Fi機能を搭載していますので、撮影した写真や動画をスマートフォンやタブレットに転送してすぐにシェアすることもできます。
                </p>
              </v-col>
            </v-row>

            <!-- キタムラなら最大60回まで分割金利手数料0円 -->
            <p class="white--text grey darken-4 text-h6 py-2 px-6 mt-6 mb-4">キタムラなら最大60回まで分割金利手数料0円</p>
            <p class="line-height">
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大60回分割払いまで分割金利手数料を当店が負担致します。<br />
              <span class="red--text text-subtitle-2">※ショッピングクレジットは月々3,000円以上のお支払いからご利用いただけます。</span>
            </p>
            <v-container fluid fill-height>
              <v-layout wrap>
                <v-flex>
                  <v-row>
                    <v-col cols="12" sm="3" class="pa-2">
                      <p>
                        ライカ Q2<br />
                        <span v-if="Object.keys(mainProduct).length" class="red-t text-h4">{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
                        ><span class="d-inline-block">円（税込）</span><br />
                        <router-link class="main-product-link" :to="`/ec/pd/${mainProduct.janCode}`">
                          <img class="main-product-img" :src="mainProduct.images[0].imagePath" @error="noimage" />
                        </router-link>
                      </p>
                    </v-col>
                    <v-col cols="12" sm="9" class="mt-12">
                      <div class="pa-4">
                        <table class="contingency_t">
                          <tbody>
                            <tr class="bg-color">
                              <th class="pa-4 text-h6">分割回数</th>
                              <th class="pa-4 text-h6">月々のお支払額</th>
                              <th class="pa-4 text-h6">分割金利手数料</th>
                            </tr>
                            <tr>
                              <th class="pa-4 text-h6"><span class="red-t text-h4 font-weiht-bold">60</span>回</th>
                              <th class="pa-4 text-h6">約<span class="red-t text-h4 font-weiht-bold">12,018</span>円</th>
                              <th class="pa-4 text-h6"><span class="red-t text-h4 font-weiht-bold">0</span>円</th>
                            </tr>
                          </tbody>
                        </table>
                        <p class="my-6 text-subtitle-2">※2021年7月5日時点の価格です</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-flex>
              </v-layout>
            </v-container>

            <!-- ↓ 価格・人気アクセサリー -->
            <p class="white--text grey darken-4 text-subtitle-1 py-2 px-6 mt-12 mb-4">憧れのカメラ ライカ商品一覧</p>

            <!--↓ SNSー-->
            <facebookAndTwitter />

            <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'leica',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/feature/',
          img: 'https://shop.kitamura.jp/images/banner/1341.jpg',
          alt: '話題の新製品'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://shop.kitamura.jp/sitemap/s_credit_01.html',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        }
      ]
    };
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップトップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ライカ特集',
          disabled: true
        }
      ],
      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: '4548182190509',
      // 結果格納用
      mainProduct: {} as ProductDetail
      // ↑ ---- メイン商品 ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
      } catch (error) {
        // メイン商品
        state.mainProduct = {} as ProductDetail;
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
.leica .main {
  width: 100%;
  background: url(/ec/images2/special/camera/feature/leica/main.jpg);
  height: 250px;
}

.txpo {
  width: 100%;
  margin: 0;
  padding: 125px 0px 0px 90px;
  box-sizing: border-box;
  font-size: 22px;
}

.red-t {
  color: #d80b24;
}

.contingency_t {
  border-collapse: collapse;
  text-align: center;
  margin: 0 0 20px 0;
  width: 100%;
}

.contingency_t th {
  text-align: center;
  vertical-align: top;
  color: #151515;
  border: 1px solid #b9b9b9;
  width: 30%;
  vertical-align: middle;
}

.bg-color {
  background-color: #eee;
}
</style>