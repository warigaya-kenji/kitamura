<template>
  <v-app>
    <div class="graduation-entrance-faq">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-subtitle-2">【卒園式・入学式】ビデオ・カメラ選びのお悩みごと解決します！</h1>
        <!--↓桃↓-->
        <v-sheet color="#FDEEEE" class="pb-5 text-body-1">
          <v-card img="/ec/images2/special/general/graduation_entrance/faq/grd_001.gif" height="200" flat v-if="$vuetify.breakpoint.mdAndUp">
            <v-card-text class="po-botm"
              >もうすぐ卒園・卒業を迎えられるご家族の皆さま、おめでとうございます。わが子の成長をかみしめつつ、<br />
              「学校イベントを上手に残すには、ビデオやカメラが必要かなぁ？」と考える時期かもしれませんね。<br />
              そんなパパママ必見！ カメラのキタムラへ寄せられる『ビデオ・カメラ選び』に関する疑問にお答えします！</v-card-text
            >
          </v-card>

          <div v-if="$vuetify.breakpoint.smAndDown">
            <v-img src="/ec/images2/special/general/graduation_entrance/faq/grd_sp001.gif" alt="【卒園式・入学式】ビデオ・カメラ選びのお悩みごと解決します！">
            </v-img>
            <p class="mb-5 text-body-2 text-sm-body-1">
              もうすぐ卒園・卒業を迎えられるご家族の皆さま、おめでとうございます。<br />
              わが子の成長をかみしめつつ、「学校イベントを上手に残すには、ビデオやカメラが必要かなぁ？」と考える時期かもしれませんね。<br />
              そんなパパママ必見！ カメラのキタムラへ寄せられる『ビデオ・カメラ選び』に関する疑問にお答えします！
            </p>
          </div>
          <!--↓アンカー↓-->
          <div class="pa-sm-5">
            <v-img src="/ec/images2/special/general/graduation_entrance/faq/qa-img01.gif" max-width="467" height="auto"></v-img>
            <v-container class="pa-0">
              <v-row no-gutters>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/general/graduation_entrance/faq/qa-00.gif"
                    alt="卒園式・入学式の疑問にお答えします！Q&Aコーナー"
                    max-width="449"
                    height="auto"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="white">
                    <ul class="qabox pa-4 text-subtitle-1">
                      <li class="red-delta text-body-2 text-sm-body-1 text-sm-subtitle-1">
                        <a v-scroll-to="'#q1'">Q.1…撮影はビデオとカメラ、どっちがいい？</a>
                      </li>
                      <li class="red-delta text-body-2 text-sm-body-1 text-sm-subtitle-1">
                        <a v-scroll-to="'#q2'">Q.2…卒園式や入学式におすすめのビデオ・カメラは？</a>
                      </li>
                      <li class="red-delta text-body-2 text-sm-body-1 text-sm-subtitle-1">
                        <a v-scroll-to="'#q3'">Q.3…卒園式・入学式を失敗せずに撮影するコツは？</a>
                      </li>
                      <li class="red-delta text-body-2 text-sm-body-1 text-sm-subtitle-1"><a v-scroll-to="'#q4'">Q.4…撮ったデータの保存・整理方法は？</a></li>
                      <li class="red-delta text-body-2 text-sm-body-1 text-sm-subtitle-1"><a v-scroll-to="'#q5'">Q.5…お祝い返しで喜ばれるものって？</a></li>
                    </ul>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <!--▼Q1-->
          <div class="qa pa-2 pa-sm-5 w95 bsz" id="q1">
            <h2 class="bg-green font-weight-bold f20px bordd bsz w90 m0">
              <span class="f40px mr-5">Q.1</span><br v-if="$vuetify.breakpoint.smAndDown" />卒園式や学校イベントの撮影は、ビデオとカメラ、どっちがいい？
            </h2>
            <div class="white box-lg pa-2 pa-sm-5 bsz">
              <p class="font-weight-bold f18px lh14">
                <span class="f40px red--text boox mr-5 mb-5 py-2">A.1<br v-if="$vuetify.breakpoint.smAndDown" /></span>
                せっかくの晴れ姿なので、ビデオとカメラの両方で、動く姿や写真を<br />
                残しておきたいですね。
              </p>
              <p class="lh14 f110p text-body-2 text-sm-body-1">
                雰囲気をリアルに残せるビデオ動画は、おじいちゃんおばあちゃんに見せると喜んでもらえます。<br />
                一瞬の表情を印象的に残せる写真は、見る機会も多く、お子様が大きくなってからも喜ばれます。<br />
                役割分担は、長時間の撮影が大変なビデオはパパが、よい瞬間を残すカメラはママが撮影するパターンが<br />
                多い傾向です。
              </p>
            </div>
          </div>
          <!--▲Q1-->
          <!--▼Q2-->
          <div class="pa-2 pa-sm-5 w95 bsz" id="q2">
            <h2 class="bg-green font-weight-bold f20px bordd bsz w90">
              <span class="f40px mr-5">Q.2<br v-if="$vuetify.breakpoint.smAndDown" /></span>卒園式や入学式におすすめのビデオ・カメラは？
            </h2>
            <div class="white pa-2 pa-sm-5 bsz box-lg">
              <p class="font-weight-bold f18px lh14">
                <span class="f40px red--text boox mr-5 mb-5 py-2">A.2<br v-if="$vuetify.breakpoint.smAndDown" /></span>
                ビデオなら、体育館で長時間の撮影をするので、手ブレに強いものがおすすめです。<br />
                カメラなら、コンパクトで持ちやすく、望遠ズーム＆体育館でも明るく撮れるものが<br />
                おすすめです。
              </p>
              <p class="text-center text-body-2 text-sm-body-1">
                卒業・入学におすすめのカメラを集めました。
                <a href="/ec/special/general/graduation_entrance">詳しくはコチラ↓</a> <br />
                <a href="/ec/special/general/graduation_entrance"
                  ><v-img
                    src="http://shopimg.kitamura.jp/images/banner/1841.gif"
                    alt="卒業・入学におすすめのカメラ"
                    class="mt-3 hover mx-auto"
                    max-width="708"
                    height="auto"
                /></a>
              </p>
            </div>
          </div>
          <!--▲Q2-->
          <!--▼Q3-->
          <div class="pa-2 pa-sm-5 w95 bsz" id="q3">
            <h2 class="bg-green font-weight-bold f20px bordd bsz w90">
              <span class="f40px mr-5">Q.3<br v-if="$vuetify.breakpoint.smAndDown" /></span>卒園式・入学式を失敗せずに撮影するコツは？
            </h2>
            <div class="white pa-2 pa-sm-5 bsz box-lg">
              <p class="font-weight-bold f20px mb-5">
                <span class="f40px red--text boox mr-5">A.3<br v-if="$vuetify.breakpoint.smAndDown" /></span>
                事前準備、当日準備をしっかりと。撮影のコツを伝授します!
              </p>
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" sm="6">
                    <p class="text-body-2 text-sm-body-1">
                      卒業式を撮影するのは実はとっても難しい...。<br />
                      失敗したくないパパ・ママ必見です♪
                    </p>
                    <v-btn width="320" height="50" color="red darken-2" href="http://www.kitamura-print.com/special/knack/graduation.html"
                      ><v-icon left color="white">fas fa-angle-right</v-icon><span class="white--text text-subtitle-1">撮影のコツを詳しく見る</span></v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="6">
                    <a href="http://www.kitamura-print.com/special/knack/graduation.html"
                      ><v-img src="/ec/images2/special/general/graduation_entrance/faq/bot_kotu.gif" alt="撮影のコツ" class="hover mx-auto"
                    /></a>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <!--▲Q3-->
          <!--▼Q4-->
          <div class="pa-2 pa-sm-5 w95 bsz" id="q4">
            <h2 class="bg-green font-weight-bold f20px bordd bsz w90">
              <span class="f40px mr-5 boox">Q.4<br v-if="$vuetify.breakpoint.smAndDown" /></span>撮影した画像データや、動画データ。<br />
              どうやって保存・整理すればいい？
            </h2>
            <div class="white pa-2 pa-sm-5 bsz box-lg">
              <p class="font-weight-bold f20px w100 lh14">
                <span class="f40px red--text boox mr-5 py-2">A.4<br v-if="$vuetify.breakpoint.smAndDown" /></span>
                ビデオ動画データ保存ならビデオダビングサービス。<br />
                写真の整理ならプリントしてポケットアルバムへ入れるのがおすすめです。
              </p>
              <div class="bsz">
                <h3 class="f18px font-weight-bold my-5 bordd-u">ビデオで撮った動画データは、ビデオダビングサービスにおまかせ！</h3>
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <p class="pr-3 bsz text-body-2 text-sm-body-1">
                        ビデオカメラ本体またはメディアをカメラのキタムラ店頭へお持ちください。<br />
                        DVD・ブルーレイにダビングできます。タイトルを入れたり、ひと目で分かるインデックスプリントや、見たいシーンが探しやすいチャプターが付いて、後からでも見やすく、おすすめです。
                      </p>
                      <v-btn width="320" height="50" color="red darken-2" href="http://www.kitamura-print.com/video_copy/videocamera_copy/"
                        ><v-icon left color="white">fas fa-angle-right</v-icon
                        ><span class="white--text text-subtitle-1">ダビングサービスを詳しく見る </span></v-btn
                      >
                    </v-col>
                    <v-col cols="12" sm="6">
                      <a href="http://www.kitamura-print.com/video_copy/videocamera_copy/"
                        ><v-img src="	/ec/images2/special/general/graduation_entrance/faq/q4-1.gif" alt="ダビングサービス" class="hover mx-auto"
                      /></a>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="bsz">
                <h3 class="f18px font-weight-bold my-5 bordd-u">カメラで撮った後は、プリントしてポケットアルバムへ！</h3>
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="12" sm="4" v-for="(pocketAlbum, i) in pocketAlbumList" :key="i">
                      <p class="font-weight-bold mb-0">■{{ pocketAlbum.subtitle }}</p>
                      <a :href="pocketAlbum.href">
                        <v-img :src="pocketAlbum.src" max-height="200" max-width="200" class="mx-auto hover mb-2"></v-img>
                      </a>
                      <p class="mb-2 including-line-breaks text-body-2 text-sm-body-1">
                        {{ pocketAlbum.txt }}
                      </p>
                      <v-btn block height="50" color="red darken-2" :href="pocketAlbum.href"
                        ><v-icon left color="white">fas fa-angle-right</v-icon><span class="white--text text-subtitle-1">{{ pocketAlbum.btntxt }}</span></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </div>
          <!--▲Q4-->
          <!--▼Q5-->
          <div class="pa-2 pa-sm-5 w95 bsz" id="q5">
            <h2 class="bg-green font-weight-bold f20px bordd bsz">
              <span class="f40px mr-5">Q.5<br v-if="$vuetify.breakpoint.smAndDown" /></span>お祝い返しもしなきゃ…！ どんなものが喜ばれますか？
            </h2>
            <div class="white pa-2 pa-sm-5 bsz box-lg">
              <p class="font-weight-bold f20px w100 lh14">
                <span class="f40px red--text boox mr-5 py-2">A.5<br v-if="$vuetify.breakpoint.smAndDown" /></span> 写真をお祝い返しにすると喜ばれます。
              </p>
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" sm="6">
                    <h3 class="f18px font-weight-bold my-5 bordd-u">フォトプラスブック</h3>
                    <a href="http://photobook.kitamura.jp/photoplus/">
                      <v-img
                        src="/ec/images2/special/general/graduation_entrance/faq/q5-1.gif"
                        max-height="181"
                        max-width="354"
                        class="mx-auto hover mb-2"
                      ></v-img>
                    </a>
                    <p class="text-body-2">
                      本のようにやわらかいソフトと、見開きで写真が大きくなるハードの2種類からお選びいただけます。豊富なデザインから、お好みのものを選べます。<br />
                    </p>
                    <v-btn block height="50" color="red darken-2" href="http://photobook.kitamura.jp/photoplus/"
                      ><v-icon left color="white">fas fa-angle-right</v-icon><span class="white--text text-subtitle-1">フォトプラスブックを見る</span></v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="6">
                    <h3 class="f18px font-weight-bold my-5 bordd-u">シャッフルプリント</h3>
                    <a href="http://www.kitamura-print.com/shuffle_print/">
                      <v-img
                        src="/ec/images2/special/general/graduation_entrance/faq/q5-2.gif"
                        max-height="181"
                        max-width="354"
                        class="mx-auto hover mb-2"
                      ></v-img>
                    </a>
                    <p class="text-body-2">
                      シャッフルプリントなら、たくさんの写真を残せます。<br />
                      フレームで飾ると豪華な仕上がりに。<br />
                      イベントのたびにプレゼントするのもいいですね。
                    </p>
                    <v-btn block height="50" color="red darken-2" href="http://www.kitamura-print.com/shuffle_print/"
                      ><v-icon left color="white">fas fa-angle-right</v-icon
                      ><span class="white--text text-subtitle-1">シャッフルプリントサービスを見る</span></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-sheet>
        <!--/↑桃↑-->
        <div class="spec mt-5 mb-3">関連おすすめ特集</div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'graduation-entrance-faq',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = '【卒園式・入学式】ビデオ・カメラ選びのお悩みごと解決します！  | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'カメラのキタムラへ寄せられる、卒園式・入学式のビデオ・カメラ選びに関する疑問にお答えします!'
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
          path: '【卒園式・入学式】ビデオ・カメラ選びのお悩みごと解決します！',
          disabled: true
        }
      ],
      pocketAlbumList: [
        {
          subtitle: 'まずは写真プリント',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/graduation_entrance/faq/q4-2.gif',
          href: 'http://www.kitamura-print.com/digicameprint/',
          txt: '専門店ならではの早くて高品質。\nネット注文がオトク！',
          btntxt: 'プリントサービスを見る'
        },
        {
          subtitle: '大量収納OKのポケットアルバム',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/graduation_entrance/faq/q4-3.gif',
          href: '/ec/special/camera/album/1439',
          txt: '写真を入れるだけのお手軽アルバム。そのときの気持ちをメモすれば、いい思い出アルバムになります♪',
          btntxt: 'ポケットアルバムを見る'
        },
        {
          subtitle: '写真を配る時に人気♪ 写真袋',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/graduation_entrance/faq/q4-4.gif',
          href: '/ec/special/camera/album/1440',
          txt: 'お友達に配るときに便利でかわいい♪ ちょっと送るのに、ちょうどいい写真袋です。',
          btntxt: '写真袋を見る'
        },
      ],
      recommendedFeaturesList: [
        {
          href: 'http://photobook.kitamura.jp/campaign/graduation/',
          img: '/ec/images2/special/general/graduation_entrance/faq/sogo_01.gif',
          alt: '卒業×フォトブック',
          target: 'blank'
        },
        {
          href: 'http://www.kitamura-print.com/special/season/graduation/',
          img: '/ec/images2/special/general/graduation_entrance/faq/sogo_02.gif',
          alt: '卒業生に贈るプレゼント',
          target: 'blank'
        },
        {
          href: '/ec/special/camera/album/feature',
          img: '/ec/images2/special/general/graduation_entrance/faq/sogo_03.gif',
          alt: '手作り卒園アルバム',
          target: 'blank'
        },
      ],
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.graduation-entrance-faq {
  .po-botm {
    width: 750px;
    height: auto;
    position: relative;
    top: 125px;
    left: 20px;
    line-height: 1.5em !important;
    box-sizing: border-box;
  }
  .qabox {
    border: #999 solid 1px !important;
    background: url(/ec/images2/special/general/graduation_entrance/faq/buck_hatena.gif) no-repeat scroll right bottom;
    background-position: 390px 140px;
  }
  .red-delta {
    background: url(/ec/images2/special/general/graduation_entrance/faq/red_delta.gif) no-repeat scroll left;
    text-indent: 1em;
    margin: 0 0 10px 0;
    font-weight: bold;
  }
  ul li {
    list-style: none;
  }
  .w90 {
    width: 90%;
  }
  .w95 {
    width: 95%;
  }
  .bg-green {
    background: #053704;
  }
  .bordd {
    border-left: solid 7px #845d0d;
    border-top: solid 7px #845d0d;
    border-right: solid 7px #845d0d;
  }
  .bsz {
    box-sizing: border-box;
  }
  .f18px {
    font-size: 18px;
  }
  .f20px {
    font-size: 20px;
  }
  .f40px {
    font-size: 40px;
  }
  .box-lg {
    border: #999 solid 1px !important;
  }
  .lh14 {
    line-height: 1.4em !important;
  }
  h2 {
    color: #fff;
    padding: 20px 20px 20px 30px;
  }
  h3 {
    height: 35px;
    padding: 10px 0 5px 0;
    background: url(/ec/images2/special/general/graduation_entrance/faq/ico-osusume.gif) no-repeat scroll top left;
    text-indent: 4em;
    color: #1e0000;
    letter-spacing: 0.05em;
  }
  .bordd-u {
    border-bottom: #999 1px dashed;
  }
  .spec {
    background: url(/ec/images2/special/general/graduation_entrance/faq/bgtitlesum.jpg) no-repeat scroll;
    border-bottom: 2px solid #ffcc00;
    font-size: 22px;
    padding: 0 10px 0 35px;
  }
  @media screen and (max-width: 655px) {
    .w90 {
      width: 100%;
    }
    .w95 {
      width: 100%;
    }
    .f18px {
      font-size: 16px !important;
    }
    .f20px {
      font-size: 16px !important;
    }
    .f40px {
      font-size: 26px !important;
    }
    h3 {
      height: 60px;
    }
  }
}
</style>
