<template>
  <v-app>
    <div class="mannenhitsu-nenga">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <v-row v-if="$vuetify.breakpoint.mdAndUp">
          <v-col cols="6" sm="4" v-for="(navi, index) in naviList" :key="index">
            <v-hover v-slot="{ hover }">
              <a :href="navi.href">
                <v-card flat :img="hover ? navi.onImage : navi.offImage" height="85">
                  <p class="mb-0 pt-10 text-center text-h5">{{ navi.name }}</p>
                </v-card>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <!--背景-->
        <div class="nenga pb-15 pt-2 px-2 px-sm-4 mt-2">
          <!--看板-->
          <div class="nenga-title pc" v-if="$vuetify.breakpoint.mdAndUp">
            <div class="pull-auto">
              <h1 class="mt-7 text-h6">万年筆で年賀状(ハガキ)を書いてみよう</h1>
              <p class="mt-4 text-body-2 font-weight-bold">
                年賀状を作る際、宛名からメッセージまで、全てパソコンで書く方も近頃多いのではないでしょうか?<br />
                少し手間はかかるものの、相手の近況や自分へのメッセージが、丁寧に手書きされていると、とても温かな気持ちになります。
              </p>
              <p class="text-body-2 font-weight-bold">
                このページでは、年賀状を書くときのマナーや、書き方のコツを紹介しています。今年の年賀状は、万年筆で書いてみてはいかがでしょうか?
              </p>
            </div>
          </div>
          <!--ナビ-->
          <v-row no-gutters v-if="$vuetify.breakpoint.mdAndUp">
            <v-col cols="4" v-for="(navi, index) in naviList2" :key="index">
              <v-hover v-slot="{ hover }">
                <v-sheet :color="hover ? '#b12323' : '#624436'" class="pa-4 text-center">
                  <a v-scroll-to="navi.href">
                    <span class="white--text text-h6">{{ navi.name }}</span
                    ><v-icon right color="white">fas fa-chevron-right</v-icon>
                  </a>
                </v-sheet>
              </v-hover>
            </v-col>
          </v-row>

          <!--contens 1-->
          <h2 id="a01">年賀状を書くときのマナー</h2>
          <v-sheet color="#ffffff" class="pa-4 rounded-lg">
            <v-row>
              <v-col cols="12" md="6">
                <p class="mt-4">年賀状を書く際は、黒インクを使いましょう。 万年筆で年賀状を書く場合は、黒・濃紺・青はOKです。</p>
                <p>目上の方や取引先に送る年賀状では、カラーインクを避けた方が、無難でしょう。</p>
              </v-col>
              <v-col cols="12" md="6">
                <v-img src="	https://shop.kitamura.jp/ts_rsc/709/images/nenga_01.gif" max-width="435" max-height="204" class="mx-auto"></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <p class="mt-4">もし、書き損じてしまった際は、修正ペンや修正テープを使うのはNGです。相手にとって失礼にあたります。</p>
                <p>手間が掛かりますが、失敗した場合は新しいハガキに書き直しましょう。</p>
                <div class="well mt-4">
                  <dl>
                    <dt>【ポイント】</dt>
                    <dd class="mt-2">
                      書き損じた年賀状を郵便局に持っていくと、手数料を払って新しいハガキや切手に交換する事ができます。<br />
                      余った未使用の年賀状も、交換できますので、失敗した時の為に、余分を少し用意しておくと良いでしょう<br />
                      <span class="text-body-2">※ハガキの交換の際は、事前に郵便局に確認をしましょう。</span>
                    </dd>
                  </dl>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <v-img src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_02.gif" max-width="435" max-height="213" class="mx-auto"></v-img>
              </v-col>
            </v-row>
          </v-sheet>
          <!--/contens 1-->

          <!--contens 2-->
          <h2 id="a02">年賀状を書くときのマナー</h2>
          <v-sheet color="#ffffff" class="pa-4 rounded-lg">
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="mt-4">《 表書き 》</h3>
                <dl class="mb-5">
                  <dt class="font-weight-bold">① 宛名</dt>
                  <dd class="mt-2">
                    郵便はがきの中央に、宛名を書きます。 役職を入れる際は、宛名の3分の1程度。 苗字と名前は1文字分の余白を空けます。
                    中央から書き始める事で、全体の文字のバランスをとりやすくなります。
                  </dd>
                </dl>
                <dl class="mb-5">
                  <dt class="font-weight-bold">② 送り先住所</dt>
                  <dd class="mt-2">住所は2行に収まるように書きましょう。 縦書きで住所を書く際、番地などの数字は漢数字を使うのが一般的です。</dd>
                </dl>
                <div class="well mt-4">
                  <dl class="mb-5">
                    <dt class="font-weight-bold">【通常のハガキを使う場合】</dt>
                    <dd class="mt-2">通常のハガキを使う場合は、赤文字で「年賀」と記載してください。</dd>
                  </dl>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_03.gif"
                  max-width="435"
                  max-height="491"
                  class="mx-auto mt-4"
                  alt="年賀状表書き"
                ></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="mt-7">《 裏書き 》</h3>
                <dl class="mb-5">
                  <dt class="font-weight-bold">① 賀詞</dt>
                  <dd class="mt-3">新年の挨拶として賀詞を入れます。 相手にふさわしい賀詞を選びます。</dd>
                </dl>
                <dl class="mb-5">
                  <dt class="font-weight-bold">② 添え書き</dt>
                  <dd class="mt-3">
                    賀詞の後には添え書きを入れます。 賀詞と同様に、相手にふさわしい言葉を選びます。 新年も変わらぬお付き合いを願う文章が一般的です。
                  </dd>
                </dl>
                <dl class="mb-5">
                  <dt class="font-weight-bold">③ 差出人の住所・氏名</dt>
                  <dd class="mt-3">差出人の住所・氏名を記載します。 裏面に入らない場合は、表面に記載します。</dd>
                </dl>
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_04.gif"
                  max-width="435"
                  max-height="491"
                  class="mx-auto mt-7"
                  alt="年賀状裏書き"
                ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
          <!--/contens 2-->
          <!--contens 3-->
          <h2 id="a03">記憶に残る年賀状なら、カメラのキタムラにお任せ</h2>
          <v-sheet class="pa-4 rounded-lg" color="#ffffff">
            <v-row>
              <v-col cols="12" md="6">
                <p class="mt-4">
                  写真専門店だから、仕上がりに自信があります。
                  写真入り年賀状は、写真用紙にプリントしたものをハガキに貼り付けて仕上げるため、一般のインクジェットプリンター仕上げのハガキとは圧倒的な仕上がりの差がでます。
                </p>
                <p>圧倒的な年賀状のデザインの数で、イメージに合う年賀状がきっと見つかります。</p>
                <p>カメラのキタムラで、より印象的な年賀状を作ってみてはいかがでしょうか?</p>
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_05.jpg"
                  max-width="320"
                  max-height="220"
                  class="mx-auto mt-4"
                  alt="年賀状一言コメント"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <v-img src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_06.jpg" max-width="900" max-height="211" class="mt-7"></v-img>
                <v-btn block height="54" color="#e12b31" href="http://nenga.kitamura.jp/" target="_brank" class="mt-4">
                  <span class="white--text text-subtitle-1">カメラのキタムラ 年賀状を見る</span><v-icon small right color="white">fas fa-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
          <!--/contens 3-->
          <!--contens 4-->
          <h2 id="a04">年賀状作成の負担を和らげる、カメラのキタムラのサービス</h2>
          <v-sheet color="#ffffff" class="pa-4 rounded-lg">
            <h3 class="mt-4">宛名データ化サービス <small class="text-body-2">年賀状やハガキの整理方法、これで解決します</small></h3>
            <p>
              「毎年増え続ける年賀状の整理どうしよう･･･。」そんな悩みはございませんか？<br />
              カメラのキタムラに頼めば、一気に解決いたします！
              お客様の年賀状を宛名面・通信面の両方をデータ化（ＰＤＦ）し、さらに宛名データをＣＳＶファイルで住所録化するサービスです。
            </p>
            <v-img src="https://shop.kitamura.jp/ts_rsc/709/images/nenga_07.jpg" max-width="750" max-height="300" class="mt-7 mx-auto"></v-img>
            <v-btn block height="54" color="#e12b31" href="http://www.kitamura-print.com/postcard/atena/data/" target="_brank" class="mt-4">
              <span class="white--text text-subtitle-1">宛名データ化サービスを見る</span><v-icon small right color="white">fas fa-chevron-right</v-icon>
            </v-btn>
          </v-sheet>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'mannenhitsu-nenga',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: () => {
    document.title = '万年筆で年賀状(ハガキ)を書いてみよう | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '年賀状を書くときのマナーや、書き方のコツを紹介しています。今年の年賀状は、万年筆で書いてみてはいかがでしょうか?'
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
          path: '万年筆で年賀状(ハガキ)を書いてみよう',
          disabled: true
        }
      ],
      naviList: [
        { name: '万年筆の選び方', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen01_on.jpg', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen01_off.jpg', href: '/ec/special/general/stationery/mannenhitsu/how_to' },
        { name: '年賀状を書いてみよう', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen02_on.jpg', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen02_off.jpg', href: '/ec/special/general/stationery/mannenhitsu/nenga' },
        { name: 'よくある質問', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen03_on.jpg', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/stationery/mannenhitsu/nenga/navi_fusen03_off.jpg', href: '/ec/special/general/stationery/faq' }
      ],
      naviList2: [
        { name: '年賀状を書く時のマナー', href: '#a01' }, { name: '宛て名を書く時のコツ', href: '#a02' }, { name: 'キタムラの高品質年賀状', href: '#a03' },
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.mannenhitsu-nenga {
  .nenga {
    background: rgba(0, 0, 0, 0) url(https://shop.kitamura.jp/ts_rsc/709/images/bg_note.gif) scroll;
    color: #3c281e;
    h1 {
      color: #3c281e;
    }
    .nenga-title {
      width: 100%;
      min-height: 350px;
      background: rgba(0, 0, 0, 0) url(https://shop.kitamura.jp/ts_rsc/709/images/bg_title02.png) scroll top center no-repeat;
      line-height: 1.7;
      margin: 0 0 8px 0;
      padding: 0 4px 0 14px;
      font-weight: bold;
      div {
        padding-top: 140px;
        width: 850px;
        p {
          width: 500px;
        }
      }
      .pull-auto {
        margin-left: auto;
        margin-right: auto;
      }
    }
    h2 {
      padding: 10px 20px;
      margin: 60px 0 15px 0;
      background: #b12323;
      color: #fff;
      font-size: 160%;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      font-weight: normal;
    }
    .well {
      min-height: 20px;
      padding: 19px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
    }
    h3 {
      margin-bottom: 15px;
      padding: 10px 20px;
      background: #e9e9e9;
      color: #624436;
      font-size: 120%;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      font-weight: normal;
    }
  }
}
</style>
