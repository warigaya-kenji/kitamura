<template>
  <div class="lens">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1>
          <img class="mb-1 banner-img" src="/ec/images2/special/camera/lens/950.png" alt="カメラレンズ人気ランキング" />
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <p>
          カメラのキタムラで人気のミラーレス/一眼用交換レンズを、マウント別にランキングでご紹介！<br />
          お買い替えを検討中の方必見です！
        </p>
        <!--↓マウント別アンカー-->
        <div class="h-1 mt-2 mb-5"></div>
        <v-container>
          <v-row>
            <v-card class="rounded d-block" tile width="100%">
              <v-toolbar color="light-blue darken-4" dark>
                <v-toolbar-title>マウント別</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-list dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in itemsank" :key="i" v-scroll-to="item.link">
                    <v-list-item-icon class="mr-2">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-row>
        </v-container>
        <!--↑一マウント別アンカー-->
        <!--↓レンズランキングー-->
        <v-container ontainer class="mt-8" v-for="(product, i) in productList" :key="i">
          <h3 class="midashi mb-2" :id="product.id"><span class="bg-kanmuri mr-2"></span>{{ product.type }}用マウント 人気レンズ TOP5</h3>
          <v-row>
            <v-col
              :cols="$vuetify.breakpoint.smAndDown ? 12 : ''"
              class="float-left w20pr"
              v-for="(mainProduct, index) in product.resultproductList"
              :key="index"
            >
              <router-link :to="`/ec/pd/${mainProduct.janCode}?items`">
                <p class="text-center mb-1"><img class="banner-img" :src="mainProduct.images[0].imagePath" /></p>
                <h4 class="text-body-1 text-left">{{ mainProduct.itemName }}</h4>
              </router-link>
              <p class="text-center mb-0">
                <span class="text-body-2">価格</span>
                <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProduct.price)) }}</span>
              </p>
              <v-btn
                class="main-product-btn text-subtitle-1 mb-2 none"
                dark
                block
                color="rgba(255, 132, 0, 1)"
                height="52px"
                :href="`/ec/pd/${mainProduct.janCode}?items`"
              >
                商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
              </v-btn>
              <p class="bd-reni" v-for="(feature, i) in product.featureList[index]" :key="i">{{ feature }}</p>
            </v-col>
          </v-row>
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="8">
              <v-btn
                class="main-product-btn text-subtitle-1 mb-2 text-center including-line-breaks"
                dark
                block
                color="rgba(255, 132, 0, 1)"
                height="52px"
                :href="product.btnhref"
              >
                {{ product.btntxt }}<v-icon>fas fa-angle-right fa-fw</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <!--↑レンズランキング-->

        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <p class="mb-1">交換レンズを買うなら、分割でお支払いラクラクのショッピングクレジット♪</p>
        <h2 class="bg-kni text-h6"><span class="bg-medaru mr-2"></span>ショッピングクレジット</h2>
        <p>
          カメラのキタムラおすすめの『ショッピングクレジット』なら、最長60回払いまで金利手数料が「0円」！<br />
          ショッピングクレジットをぜひご利用ください！
        </p>
        <h3 class="tx-bo tx-20 lsp01 mt-1">分割払い例</h3>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left ba-gr" cols="12">
              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例①</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>155,920<span>円</span></td>
                        <td>48<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,249<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>

              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例②</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>60,300<span>円</span></td>
                        <td>20<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,015<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
              <p class="mt-2 text-body-2">
                ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
              </p>
              <v-row align="center" justify="space-around">
                <v-col cols="12" sm="6">
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2 text-center w100pr"
                    dark
                    block
                    justify="center"
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/guide/s_credit_01l`"
                  >
                    ショッピングクレジット<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col></v-row
              >
            </v-col>
          </v-row>
        </v-container>
        <!--↑-->
        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <h3 class="midashi"><span class="bg-kanmuri mr-2"></span>関連おすすめ特集</h3>
        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/mzuiko/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/1034.gif"
                        alt="オリンパスレンズ for マイクロフォーサーズ"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/sonye/">
                      <v-img contain src="https://shopimg.kitamura.jp/images/banner/1785.jpg" alt="旅レンズ" max-height="130" width="auto"></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/fujifilm/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/2176.jpg"
                        alt="FUJINONレンズ特集"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/sonye/scene/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/2596.jpg"
                        alt="ソニーEマウントレンズ＆作例写真"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/ec/list?keyword=風塵&narrow18=0">
                      <v-img contain src="https://shopimg.kitamura.jp/images/banner/2001.jpg" alt="風塵" max-height="130" width="auto"></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/3808.gif"
                        alt="セール・特集一覧"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑-->
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
export default Vue.extend({
  name: 'lens',
  components: {
    breadcrumbs: Breadcrumbs
  },
  props: {},
  setup: (props, context) => {
    document.title = 'おすすめカメラレンズ人気ランキング | カメラのキタムラネットショップ';
    const state = reactive({
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カメラレンズ人気ランキング',
          linkUrl: '/ec/special/camera/lens',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      selectedItem: 0,
      itemsank: [
        { text: 'キヤノン用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#canon' },
        { text: 'ニコン用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#nikon' },
        { text: 'ソニー用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#sony' },
        { text: 'マイクロフォーサーズ用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#maicro' },
        { text: 'フジフイルム用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#fuji' },
        { text: 'ペンタックス用 マウント レンズランキング', icon: 'fa-chevron-circle-right', link: '#penta' }
      ],
      // ↓ ---- レンズランキング情報 ----
      productList: [
        {
          id: 'canon',
          type: 'キヤノン',
          JanCodeList: ['4549292181623', '4549292115611', '4549292168037', '4549292168075', '4549292037692'],
          featureList: [
            ['RFマウント', 'フルサイズ対応', '標準単焦点'],
            ['RFマウント', 'フルサイズ対応', '標準ズーム', '手ブレ補正機構搭載', '防塵防滴構造'],
            ['RFマウント', 'フルサイズ対応', '望遠ズーム', '手ブレ補正機構搭載', '防塵防滴構造'],
            ['RFマウント', 'フルサイズ対応', 'マクロ', '手ブレ補正機構搭載', '防塵防滴構造'],
            ['EFマウント', 'フルサイズ対応', '標準単焦点'],
          ],
          btntxt: 'キヤノン用マウント\n人気カメラレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itemcanon',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
        {
          id: 'nikon',
          type: 'ニコン',
          JanCodeList: ['4960759904850', '4960759902887', '4960759026316', '4960759902191', '4960759025821'],
          featureList: [
            ['Zマウント', 'フルサイズ対応', 'マクロ', '手ブレ補正機構搭載', '防塵防滴に配慮した設計'],
            ['Zマウント', 'フルサイズ対応', '高倍率ズーム', '手ブレ補正機構搭載', '防塵防滴に配慮した設計'],
            ['AF-S DXマウント', 'マクロ'],
            ['Zマウント', 'フルサイズ対応', '望遠ズーム', '手ブレ補正機構搭載', '防塵防滴に配慮した設計'],
            ['AF-S DXマウント', '標準単焦点'],
          ],
          btntxt: 'ニコン用マウント\n人気カメラレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itemnikon',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
        {
          id: 'sony',
          type: 'ソニー',
          JanCodeList: ['0085126592653', '4960371006734', '4960371006703', '4548736074125', '4548736123151'],
          featureList: [
            ['Eマウント', 'フルサイズ対応', '標準ズーム', '大口径', '簡易防塵防滴構造'],
            ['Eマウント', '標準ズーム', '大口径', '手ブレ補正機構搭載', '簡易防塵防滴構造'],
            ['Eマウント', 'フルサイズ対応', '高倍率ズーム', '簡易防滴構造'],
            ['Eマウント', 'フルサイズ対応', '標準ズーム', '防塵防滴に配慮した設計'],
            ['Eマウント', 'フルサイズ対応', '広角単焦点', '大口径', '防塵防滴に配慮した設計'],
          ],
          btntxt: 'ソニー用マウント\n人気カメラレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itemsony',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
        {
          id: 'maicro',
          type: 'マイクロフォーサーズ',
          JanCodeList: ['4545350043742', '4545350053055', '4545350029654', '4545350051051', '4545350052546'],
          featureList: [
            ['望遠ズーム'],
            ['望遠ズーム', '防塵防滴構造'],
            ['広角ズーム'],
            ['高倍率ズーム', '手ブレ補正機構搭載', '防塵防滴機構'],
            ['高倍率ズーム', '防塵防滴機構'],
          ],
          btntxt: 'マイクロフォーサーズ用\nおすすめレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itemmicroft',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
        {
          id: 'fuji',
          type: 'フジフイルム',
          JanCodeList: ['4547410437980', '4547410440386', '4547410206159', '4547410289879', '4547410442557'],
          featureList: [
            ['Xマウント', '望遠ズーム', '手ブレ補正機能', '防塵防滴仕様'],
            ['Xマウント', '標準単焦点', '手ブレ補正機能', '防塵防滴仕様'],
            ['Xマウント', '望遠ズーム', '大口径'],
            ['Xマウント', '標準ズーム', '大口径', '防塵防滴仕様'],
            ['Xマウント', '広角単焦点', '大口径', '防塵防滴仕様'],
          ],
          btntxt: 'フジフイルム用マウント\n人気カメラレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itemfuji',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
        {
          id: 'penta',
          type: 'ペンタックス',
          JanCodeList: ['4549212296642', '4549212274749', '4549212217609', '4549212300806', '4549212273728'],
          featureList: [
            ['Kマウント', '望遠ズーム', '防滴構造'],
            ['Kマウント', '標準ズーム', '防滴構造'],
            ['Kマウント', '標準単焦点'],
            ['Kマウント', 'フルサイズ対応', '望遠ズーム', '防滴構造'],
            ['Kマウント', 'マクロ'],
          ],
          btntxt: 'ペンタックス用マウント\n人気カメラレンズ 一覧を見る',
          btnhref: '/ec/special/camera/lens/itempentax',
          resultproductList: [] as Array<ProductDetail>//結果格納用
        },
      ],
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        for (let i = 0; i < state.productList.length; i++) {
          const mainResult = await ProductService.fetchProducts(state.productList[i].JanCodeList, true);
          state.productList[i].resultproductList = mainResult.items;
        }
      } catch (error) {
        console.log(error)
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
  },
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
    height: auto;
  }
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }

  /*アンカー*/
  .l-ankr {
    text-shadow: 0 -1px 0px #333, 0 1px 0px #555;
    box-sizing: border-box;
    background: #666;
    background-image: -moz-linear-gradient(top, #888 0%, #777 50%, #666 50%, #777 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(0.5, #777), color-stop(0.5, #666), color-stop(1, #777));
    border-left: 1px solid #444 !important;
    box-shadow: 1px 0px 0px rgba(225, 225, 225, 0.3) inset, -1px 0px 0px rgba(225, 225, 225, 0.3) inset, 0px 1px 1px rgba(0, 0, 0, 0.1) inset,
      0px -1px 1px rgba(0, 0, 0, 0.3) inset, 0px 1px 3px #666;
  }
  .bg-kni {
    background: #0c4165;
    color: #fff;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 10px;
  }
  .midashi {
    position: relative;
    padding: 0.5em 0.75em;
    background-color: #f0f0f0;
    border-radius: 6px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1) inset;
    color: #520509;
    font-weight: bold;
  }
  /*背景 画像*/
  .bg-naname {
    background: url(/ec/images2/special/camera/lens/bk_naname.gif) repeat left top;
  }
  .bkline-g {
    background: url(/ec/images2/special/camera/lens/bk_line.gif) repeat scroll top left;
  }
  .bg-kanmuri {
    float: left;
    background: url(/ec/images2/special/camera/lens/kanmuri.png) no-repeat scroll left;
    width: 24px;
    height: 24px;
  }
  .bg-medaru {
    float: left;
    background: url(/ec/images2/special/camera/lens/bk_medaru.png) no-repeat scroll left;
    width: 48px;
    height: 48px;
  }
  .red-delta {
    background: url(/ec/images2/special/camera/lens/red_delta.gif) no-repeat scroll left;
    text-indent: 1em;
    margin: 0 0 10px 0;
    font-weight: bold;
  }
  .lens p {
    line-height: 1.8em;
  }
  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }
  .tx-tya {
    color: #46280c !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .text-white {
    color: #ffffff;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .tx-bo {
    font-weight: bold;
  }
  .li12 {
    line-height: 1.2em;
  }
  .cl {
    clear: both;
  }
  .h-1 {
    height: 1px;
  }
  .none {
    display: none;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  .bd-reni {
    border: #0c4165 1px solid;
    color: #0c4165;
    margin: 8px 0px;
    padding: 7px;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
  }
  /*ショックレ*/
  .w50pr-re {
    width: 50%;
    padding: 12px;
    box-sizing: border-box;
  }
  div.s-credit {
    display: block;
    width: 100%;
  }
  div.s-credit table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
  }
  div.s-credit table th,
  div.s-credit table td {
    padding: 2px 0;
    vertical-align: middle;
    border: solid 1px #ffffff;
    box-sizing: border-box;
  }
  div.s-credit table th {
    background: #389c88 none repeat scroll 0 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: normal;
    box-sizing: border-box;
  }
  div.s-credit table td {
    background: #eee none repeat scroll 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0em;
    box-sizing: border-box;
  }
  div.s-credit table td span {
    font-size: 13px;
    margin-left: 3px;
  }

  @media screen and (min-width: 678px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
    .w20pr {
      width: 20%;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
    .w20pr {
      width: 100% !important;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.lens {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
</style>
<style lang="scss" scoped>
// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: calc((100% - (12px * 3)) / 4);

    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }

    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }

    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }

    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}

@media only screen and (max-width: 670px) {
  .product-list {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: calc((100% - (0px * 3)) / 1);

      &:not(:nth-child(1n)) {
        margin: 0 0 0px 0;
      }

      &:not(:nth-last-child(-n + 1)) {
        margin: 0 0 0px 0;
      }
    }
  }
  .product-list-item {
    margin: 0 0 20px 0 !important;
  }
}
</style>
