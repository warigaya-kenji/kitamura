<template>
  <v-app>
    <div class="summerhomework-camera">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-body-1">夏休み自由研究特集【工作】ピンホールカメラで光の実験（準備編）</h1>
        <v-img
          class="d-none d-sm-block"
          src="/ec/images2/special/general/summerhomework/camera/pinhole_950-01.gif"
          alt="ピンホールカメラで光の実験 準備編"
          max-width="950"
        ></v-img>

        <v-img
          class="d-block d-sm-none"
          src="/ec/images2/special/general/summerhomework/camera/pinhole_640x120-01.gif"
          alt="ピンホールカメラで光の実験 準備編"
          max-width="640"
        ></v-img>
        <p>
          「カメラってボタンを押すと写真がとれるけど、なんで写真がとれるんだろう?」そんな事を考えた事はありませんか?<br />
          実は光の性質を利用してカメラの外部の映像をカメラの内部へ写し、それをフィルムやデータに変えて残しています。<br />
          ここでは、そんな光の性質を調べるために、ピンホールカメラを工作して実験してみました。<br />
          夏休みの自由研究・工作に「光の性質」の研究はいかがでしょうか。
        </p>

        <!--▼step1-->
        <v-container class="waku mt-10 pa-0">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/pinhole_01.jpg"
                alt="ピンホールカメラ | イメージ"
                max-width="320"
                max-height="380"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.1</span><span class="no-text">ピンホールカメラの工作に必要なもの</span></h2>
              <div class="txt01 mt-4">
                <ol>
                  <li>厚紙（A3サイズ以上）</li>
                  <li>
                    <router-link to="/ec/pd/4949284035819">トレーシングペーパー</router-link>
                  </li>
                  <li>墨汁（ぼくじゅう）</li>
                  <li>はけ</li>
                  <li>ハサミ</li>
                  <li>のり</li>
                  <li>テープ・両面テープ</li>
                  <li>画びょう</li>
                  <li>
                    <a href="/ec/ct/C022/003/">A3プリンター</a>
                  </li>
                </ol>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!--▲step1-->

        <!--▼ヒント：ピンホールカメラって？---->
        <div class="clip mt-7">
          <v-container class="waku note pt-1">
            <h2 class="mt-2 mb-2"><span class="d-block no-text2">ヒント：ピンホールカメラって？</span></h2>
            <v-row no-gutters>
              <v-col cols="12">
                <div class="txt02 mt-2">
                  <p class="mt-4">
                    ピンホールカメラとは、針の先で開けたような小さな穴から光をとり込み、穴の向こう側の映像を映し出すカメラです。<br />
                    レンズを使わないため、光の性質が分かりやすいカメラです。
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!--ヒント：ピンホールカメラって？-->

        <!--▼step2---->
        <v-container class="waku mt-7 pt-1 note">
          <h2 class="mt-8 mb-2"><span class="no">STEP.2</span><span class="no-text">ピンホールカメラを工作してみよう</span></h2>
          <!--▼step2-1-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（1）厚紙に設計を描こう</h3>
                <p>
                  下の「設計図をダウンロードする」ボタンから設計をダウンロードして、厚紙に印刷しよう。<br />
                  厚紙が印刷できないプリンターであれば、A3普通紙に印刷してのりで厚紙に貼りつけよう。
                </p>
                <p class="mb-4">プリントができない場合も設計図を参考に、鉛筆で厚紙に書こう。</p>

                <a href="/ec/images2/special/general/summerhomework/camera/p-camela_plan.pdf" target="_blank">
                  <v-img
                    src="/ec/images2/special/general/summerhomework/camera/pinhole_botan01.gif"
                    class="hover mx-auto"
                    max-width="308"
                    alt="設計図をダウンロードする"
                  ></v-img>
                </a>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_01.jpg"
                max-width="370"
                max-height="250"
                alt="厚紙に設計を描こう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-1-->
          <!--▼step2-2-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（2）設計図にそって切ろう</h3>
                <p>
                  設計図にそってハサミで切っていこう。<br />
                  穴をあけるのが難しい時や、紙が硬くて切れない時は大人に手伝ってもらおう。
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_02.jpg"
                max-width="370"
                max-height="250"
                alt="設計図にそって切ろう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-2-->
          <!--▼step2-3-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（3）内側を黒く塗ろう</h3>
                <p>組み立てたとき内側になる大きな2つのパーツを、墨汁で黒く塗りつぶし乾燥させよう。</p>
                <p class="caption">※紙が墨汁の水分を吸って、変形する場合はパーツを新聞紙ではさみ、本などを乗せて平らにしよう</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_03.jpg"
                max-width="370"
                max-height="250"
                alt="内側を黒く塗ろう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-3-->
          <!--▼step2-4-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（4）パーツを折って、組み立てよう</h3>
                <p>点線を山折りにして、のりしろ部分に接着剤か両面テープをつけて組み立てよう。</p>
                <p class="caption">※スキマができる場合は、内側から黒いテープなどでスキマをふさごう。</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_04.jpg"
                max-width="370"
                max-height="250"
                alt="パーツを折って、組み立てよう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-4-->
          <!--▼step2-5-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（5）トレーシングペーパーをつけよう</h3>
                <p>のぞき穴のあるパーツにピンッと張ったトレーシングペーパーを、テープでくっつけよう。</p>
                <p class="caption">※トレーシングペーパーがシワにならないように気をつけよう。</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_05.jpg"
                max-width="370"
                max-height="250"
                alt="トレーシングペーパーをつけよう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-5-->
          <!--▼step2-6-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（6）ピンホールパーツに穴を開けよう</h3>
                <p>ピンホールパーツに画びょうやパンチを使って穴を開けよう。</p>
                <p class="caption">※まっすぐ穴が開いてない場合や、穴の大きさによってうまく写らない場合があります。</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_06.jpg"
                max-width="370"
                max-height="250"
                alt="ピンホールパーツに穴を開けよう | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-6-->
          <!--▼step2-7-->
          <v-row>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>（7）パーツを組み合わせて完成</h3>
                <p>組み立てた３つのパーツを組み合わせたら完成。</p>
                <p class="caption">
                  ※紙の厚さによってスキマが広かったり、きつくてスムーズに動かない時は、折り目の位置を調整してみてください<br />
                  ※参考は0.5mmの厚紙を使用しています。
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/step_07.jpg"
                max-width="370"
                max-height="250"
                alt="パーツを組み合わせて完成 | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <!--▲step2-7-->
        </v-container>
        <!--▲stepstep2-->

        <!--▼step3-->
        <v-container class="waku mt-7 pt-5" id="asttele">
          <v-row>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.3</span><span class="no-text">ピンホールカメラで見てみよう</span></h2>
              <div class="txt01 mt-4">
                <p>
                  ピンホールカメラののぞき穴から、明るいほうを見るとトレーシングペーパーに像が写ります。
                  うまくできると、右のように上下左右が反転した像になります。 なんで箱の外がトレーシングペーパーに写り、しかも上下左右が反転したのでしょうか？<br />
                  それは次のまとめ編で説明します。
                </p>
                <p class="caption red--text">
                  ※うまく像が写らない場合は、ピンホールパーツの穴のサイズや形が影響している場合があります。
                  また、暗いところから明るいところを見た方が、よりハッキリ像が写しだされます。
                  部屋を暗くして、LEDライトなどに黒いテープで文字をかくと分かりやすくなります。
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img
                src="/ec/images2/special/general/summerhomework/camera/pinhole_02.jpg"
                max-width="370"
                max-height="250"
                alt="ピンホールカメラに写る像 | 写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--▲step3-->

        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <span class="font-weight-bold text-h6 mt-2">
              おつかれさまでした！<br />
              次はピンホールカメラで光の実験まとめ編です
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <a href="https://www.kitamura-print.com/special/season/summerhomework/camera.html" target="_blank">
                <v-img
                  :src="`/ec/images2/special/general/summerhomework/camera/nextbotan_${hover ? 'on' : 'off'}.gif`"
                  class="ml-auto"
                  max-width="346"
                  max-height="89"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <p class="text-right"><a href="#top">▲ ページトップへ</a></p>

        <div class="itemran mb-4">準備編で紹介した商品・その他おすすめの商品一覧</div>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1136" />

        <a href="/ec/general/summerhomework">
          <v-img src="/ec/images2/special/general/summerhomework/camera/buckbotan02.gif" class="hover ml-auto" max-width="324" max-height="49"></v-img>
        </a>
      </div>
      <div class="fixed-navi">
        <span class="navi_1"></span>
        <a class="navi_2" href="/ec/special/general/summerhomework/camera"></a>
        <a class="navi_3" href="/ec/special/general/summerhomework/moon"></a>
        <a class="navi_4" href="/ec/special/general/summerhomework/recipe"></a>
        <a class="navi_6" href="/ec/special/general/summerhomework/observation-diary"></a>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'summerhomework-camera',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
  },
  setup: () => {
    document.title = '夏休み自由研究特集【工作】ピンホールカメラで光の実験（準備編） | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '夏休みの自由研究・工作に、ピンホールカメラを使って光の実験をしてみよう！【準備編】'
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
          path: '夏休み 自由研究特集',
          linkUrl: '/ec/special/general/summerhomework',
          disabled: false
        },
        {
          path: '【工作】ピンホールカメラで光の実験 ~ 準備編',
          disabled: true
        }
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
.summerhomework-camera {
  p {
    font-size: 14px !important;
    margin: 10px 0 0 0;
    line-height: 1.4em;
  }
  .note {
    padding: 0 15px 15px 15px;
    background: url(/ec/images2/special/general/summerhomework/camera/note-01.gif) no-repeat top left;
    border: #cbcbcb 1px solid;
    border-top: 0;
    box-sizing: border-box;
  }
  .clip {
    background: url(/ec/images2/special/general/summerhomework/camera/note-02.gif) no-repeat top left;
    padding: 20px 0;
  }
  .clip .note {
    background: none;
  }
  h2 {
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    padding: 6px 0;
    .no {
      background: #ff6403;
      width: 14%;
      height: auto;
      color: #fff;
      text-align: center;
      font-weight: bold;
      margin: 15px 10px 10px 0;
      padding: 12px;
      z-index: 10;
    }
    .no-text {
      border-bottom: dashed #ff6403 5px;
      width: 75%;
      height: auto;
      padding: 22px 0 10px 0;
      margin: 0;
      letter-spacing: 0.05em;
    }
    .no-text2 {
      border-bottom: dashed #ff0000 5px;
      width: 100%;
      height: auto;
      padding: 22px 0 10px 0;
      margin: 0;
      letter-spacing: 0.05em;
    }
  }
  h3 {
    font-size: 16px;
    margin: 15px 0 0 0;
  }
  .txt01,
  .txt02,
  .txt03 {
    line-height: 1.5em;
    background: url(/ec/images2/special/general/summerhomework/camera/line01.gif) repeat-y left;
  }
  .txt01 {
    padding: 0 0 0 30px;
  }
  .txt02 {
    margin: 0 0 25px 0;
    padding: 0 0 30px 10px;
  }
  .txt03 {
    margin: 0 0 25px 0;
    padding: 0 20px 30px 20px;
  }
  ol li {
    font-size: 14px !important;
    margin: 10px 0 0 0;
    list-style-type: decimal;
    margin-left: 20px;
  }
  .marLeft30px {
    padding: 0px 0 0px 20px;
  }
  .itemran {
    letter-spacing: 0.05em;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 10px 0 0 20px;
    padding: 10px 0 0 40px;
    background: url(/ec/images2/special/general/summerhomework/camera/frag01.gif) no-repeat left;
    border-bottom: dashed #ff0000 5px;
  }
  @media screen and (max-width: 655px) {
    .txt01 {
      padding: 0;
    }
    h2 {
      span.no-text {
        line-height: 3.1em;
      }
    }
  }
}
.fixed-navi {
  background-color: #fff;
  bottom: 10px;
  position: fixed;
  right: 0;
  width: 140px;
  z-index: 999999;
  a,
  span {
    border-bottom: 1px #1acfc7 solid;
    border-left: 1px #1acfc7 solid;
    box-sizing: border-box;
    display: block;
    height: 90px;
    &:hover {
      background-color: #ffff00;
    }
  }
  .navi_1 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_01.png) no-repeat;
    height: 40px;
  }
  .navi_2 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_02.png) no-repeat;
  }
  .navi_3 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_03.png) no-repeat;
  }
  .navi_4 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_04.png) no-repeat;
  }
  .navi_5 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_05.png) no-repeat;
  }
  .navi_6 {
    background: url(/ec/images2/special/general/summerhomework/camera/navi_06.png) no-repeat;
  }
  @media screen and (max-width: 1280px) {
    display: none;
  }
}
</style>
