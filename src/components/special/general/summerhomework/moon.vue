<template>
  <v-app>
    <div class="summerhomework-moon">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-body-1">夏休み自由研究特集 【理科】天体観測 ~ 月の写真を撮ってみよう ~ 準備編</h1>
        <v-img src="https://shop.kitamura.jp/ts_rsc/484/images/moon_950-01.gif" alt="月の写真を撮ってみよう 準備編" max-width="950" max-height="79"></v-img>
        <p>
          夏休み♪理科の自由研究に天体観測がおすすめ★お父さんやお母さんに手伝ってもらって月の写真を撮ろう！<br />
          夏休みの自由研究は、簡単にできちゃう月の撮影にチャレンジ！
          <br />天体観測初心者におすすめなのが月。満月だったり三日月だったり、毎日見れる気がしているけれど いざ撮影しようと思うと、
          時間や方角も様々。意外に見れない日も多いことに気づきます。その秘密は、月の周期に関係があるようです・・・
        </p>

        <!--▼step1-->
        <v-container class="waku mt-10 pa-0">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/img_prepare.jpg"
                alt="天体望遠鏡編/デジタル一眼レフ編の準備物イメージ"
                max-width="320"
                max-height="380"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.1</span><span class="no-text">月の写真撮影に準備するもの</span></h2>
              <div class="txt01 mt-4">
                <p><b>準備物 ～ スマホ＆天体望遠鏡編 ～</b></p>
                <ol>
                  <li>天体望遠鏡</li>
                  <li>
                    <router-link to="/ec/pd/4955295391974" target="_blank">ユニバーサルデジタルカメラアダプター</router-link>
                  </li>
                  <li>スマホ</li>
                </ol>
                <p><b>準備物 ～ 簡単に撮れちゃう！一眼カメラ編 ～</b></p>
                <ol>
                  <li>デジタル一眼レフカメラやミラーレスカメラ</li>
                  <li>400mmくらいの望遠レンズ(35mm換算)<br />入門機のダブルズームレンズキットの望遠レンズでもOK</li>
                  <li>三脚</li>
                </ol>
                <p>※他にも、方位磁針があると便利</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!--▲step1-->
        <!--▼step2-->
        <v-container class="waku mt-7 pa-0">
          <v-row>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.2</span><span class="no-text">天体観測は、こんな風に進めよう！</span></h2>
              <div class="txt01 mt-4">
                <ol>
                  <li>月の撮影をする日を決める</li>
                  <p class="marLeft20px">撮影できる日は限られています。お天気が悪い場合もあるので、事前に観測・撮影する日を2、3日決めておきましょう。</p>
                  <p class="marLeft30px">
                    <font color="red">☆ポイント☆</font><br />
                    ・半月以上～満月の頃がおすすめ！
                    <br />2018年の夏休みは、7月下旬の観測がおすすめ！観測しやすい時期は 新月明けの7/21～8/5頃まで。
                  </p>
                  <p class="marLeft30px">
                    ・日の入・月の出時刻を確認すること<br />
                    お昼のうちに、月が沈んでしまう日もあります。月の満ち欠けや日の入・月の出時刻はネットかスマホで調べましょう。
                  </p>
                  <li>天体観測・月の撮影の当日は、明るいうちに障害物がないか確認しよう</li>
                  <p class="marLeft30px">
                    <font color="red">☆ポイント☆</font><br />
                    ・<a href="http://eco.mtk.nao.ac.jp/cgi-bin/koyomi/koyomix.cgi" target="_blank">国立天文台 天文情報センター 暦計算室</a
                    >で月の方位を調べておこう
                  </p>
                  <p class="marLeft30px">・方位磁針を使って、月の方位を見てみよう。木や建物などの障害物がないかを確認しよう</p>
                  <p class="marLeft30px">
                    ・<a
                      href="https://shop.kitamura.jp/pd/list.html?searchbox=1&sort=number20%2Crank%2CScore&index=all&path=&q=%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3+LED%E3%82%B3%E3%83%B3%E3%83%91%E3%82%B9&x=0&y=0"
                      target="_blank"
                      >ビクセン LEDコンパス</a
                    >なら、暗くなってからも 、<br />まぶしさの少ないライトで方位を確認できるので天体観測におすすめ
                  </p>
                  <li>天体観測・月の撮影当日の、日の入・月の出時刻に合わせて、月を探そう</li>
                  <p class="marLeft30px">
                    <font color="red">！注意！</font><br />
                    ・天体観測・月の撮影は、必ず大人の方と一緒にすること
                  </p>
                </ol>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/img_date.jpg"
                max-width="320"
                max-height="310"
                alt="ビクセン 天体カレンダーを見る"
                class="mx-auto mb-2"
              ></v-img>
              <v-img
                src="	https://shop.kitamura.jp/ts_rsc/484/images/img_compass.jpg"
                max-width="320"
                max-height="290"
                alt="月の方位の例"
                class="mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--▲step2-->
        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <a v-scroll-to="'#asttele'">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/moon_botan03.gif"
                max-width="398"
                max-height="93"
                alt="天体望遠鏡で月を撮ろう"
                class="mx-auto"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="6">
            <a v-scroll-to="'#dsl'">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/moon_botan04.gif"
                max-width="398"
                max-height="93"
                alt="デジタル一眼レフで月を撮ろう"
                class="mx-auto"
              ></v-img>
            </a>
          </v-col>
        </v-row>

        <!--▼step3 天体望遠鏡-->
        <v-container class="waku mt-7 pt-5" id="asttele">
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/484/images/mtitle_asttele.gif"
            max-width="484"
            max-height="40"
            alt="天体望遠鏡で月を撮ろう"
            class="mb-10"
          ></v-img>
          <v-row>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.2</span><span class="no-text">天体観測からの撮影、天体望遠鏡で月を撮ろう</span></h2>
              <div class="txt01 mt-4">
                <ol>
                  <li>前日までに、天体望遠鏡のピント合わせを練習しておこう</li>
                  <li>
                    当日の月の出時刻までに、天体望遠鏡に<a
                      href="https://shop.kitamura.jp/%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3%20%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AB%E3%83%A1%E3%83%A9%E3%82%A2%E3%83%80%E3%83%97%E3%82%BF%E3%83%BCII/pd/4955295391974/"
                      target="_blank"
                      >ユニバーサルデジタルカメラアダプター</a
                    >を装着して、スマホをセットしてみよう<br />動画を見ながらすすめてくださいね♪
                  </li>
                  <li>いよいよ月の出、スマホをセットして月にピントを合わせよう</li>
                </ol>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <watchInVideo :src="'//www.youtube.com/embed/TBHmUNBfonw'" :height="180" :sm="12" />
            </v-col>
          </v-row>
        </v-container>
        <!--▲step3 天体望遠鏡-->

        <!--▼step4 天体望遠鏡---->
        <v-container class="waku mt-7 pt-1 note">
          <h2 class="mt-8 mb-2"><span class="no">STEP.2</span><span class="no-text">天体望遠鏡＆スマホで、こんな写真が撮れました！</span></h2>
          <v-row no-gutters>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>
                  天体望遠鏡にスマホをセットして、撮影した写真では、<br />
                  クレーターまで写すことができました
                </h3>
                <p class="marLeft20px">天体望遠鏡のピント合わせは、少し難易度が高いですが、宇宙の神秘を<br />感じられました</p>
                <ul class="marLeft20px">
                  <font color="red">☆ポイント☆</font>
                  <li class="tum">撮影日時・方位をメモしよう</li>
                  <li class="tum">天体望遠鏡によっては、上下左右が逆に写るものがあるので<br />目で見た月の形もイラストで書いておこう</li>
                </ul>

                <p class="marLeft20px">感想などもメモしておくと、夏休みの宿題レポートを作成する時に役立ちます</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/img_photo-moon-asttele.jpg"
                max-width="370"
                max-height="250"
                alt="天体望遠鏡＆スマホで撮った月の写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--▲stepstep4 天体望遠鏡-->

        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <span class="font-weight-bold text-h6 mt-2">
              おつかれさまでした！<br />
              次は『天体望遠鏡で月を撮ろう』のまとめ編です
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <a href="https://www.kitamura-print.com/special/season/summerhomework/moon.html">
                <v-img
                  :src="`https://shop.kitamura.jp/ts_rsc/484/images/nextbotan_${hover ? 'on' : 'off'}.gif`"
                  class="ml-auto"
                  max-width="346"
                  max-height="89"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <p class="text-right"><a href="#top">▲ ページトップへ</a></p>

        <!--▼step3 一眼レフ-->
        <v-container class="waku mt-7 pa-0" id="dsl">
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/484/images/mtitle_dsl.gif"
            max-width="484"
            max-height="40"
            alt="天体望遠鏡で月を撮ろう"
            class="mb-10"
          ></v-img>
          <v-container class="note pt-4 px-0">
            <h2 class="pl-4"><span class="no">STEP.3</span><span class="no-text">天体観測からの撮影。簡単！一眼カメラで月を撮ろう</span></h2>
            <v-row class="mt-2" no-gutters>
              <v-col cols="12" sm="4" v-for="(slrCamera, index) in slrCameraList" :key="index" class="txt03">
                <h3>{{ slrCamera.subtitle }}</h3>
                <p class="mt-2 mb-0 including-line-breaks">{{ slrCamera.txt }}</p>
                <v-img :src="slrCamera.src" max-width="270" max-height="200" class="mx-auto"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
        <!--▲stepstep3 一眼レフ-->

        <!--▼stepstep4 一眼レフ-->
        <v-container class="waku mt-7 pt-1 note">
          <h2 class="mt-8 mb-2"><span class="no">STEP.4</span><span class="no-text">意外と簡単♪一眼カメラ＆望遠レンズで、こんな写真が撮れました！</span></h2>
          <v-row no-gutters>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <h3>
                  デジタル一眼レフ＆480mmの望遠レンズで撮った写真では<br />
                  ウサギ模様が分かりました
                </h3>
                <p class="marLeft20px">
                  オートで撮ると、白とびしがちですが、露出を変える毎に<br />
                  月の模様がくっきりしてきました
                </p>
                <ul class="marLeft20px">
                  <font color="red">☆ポイント☆</font>
                  <li class="tum">撮影日時・方位をメモしよう</li>
                  <li class="tum">
                    液晶を確認しながら、少しずつ露出を変えて撮っておき、プリントする時に一番くっきりしている写真を選べるようにしましょう<br />
                  </li>
                </ul>
                <p class="marLeft20px">ブレていると、拡大した時に月の模様がボヤっとしてしまうので注意してね</p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/484/images/img_photo-moon-dsl.jpg"
                max-width="370"
                max-height="250"
                alt="デジタル一眼レフ＆望遠レンズで撮った月の写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--▲stepstep4 一眼レフ-->

        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <span class="font-weight-bold text-h6 mt-2">
              おつかれさまでした！<br />
              次は『デジタル一眼レフで月を撮ろう』のまとめ編です
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <a href="https://www.kitamura-print.com/special/season/summerhomework/moon.html">
                <v-img
                  :src="`https://shop.kitamura.jp/ts_rsc/484/images/nextbotan_${hover ? 'on' : 'off'}.gif`"
                  class="ml-auto"
                  max-width="346"
                  max-height="89"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <p class="text-right"><a href="#top">▲ ページトップへ</a></p>

        <div class="itemran mb-2">準備編で紹介した商品・その他おすすめの商品一覧</div>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1137" />

        <a href="/ec/general/summerhomework">
          <v-img src="https://shop.kitamura.jp/ts_rsc/484/images/buckbotan02.gif" class="ml-auto" max-width="324" max-height="49"></v-img>
        </a>
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
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'summerhomework-moon',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = '夏休み自由研究特集 【理科】天体観測 ~ 月の写真を撮ってみよう ~ 準備編 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '夏休み♪理科の自由研究に天体観測★月の写真を撮ろう！天体観測入門におすすめ！月の満ち欠け・月齢を調べながら、天体望遠鏡や一眼レフカメラを使って月撮影にチャレンジ★意外と簡単に月の写真が撮れますよ♪まずは準備編からチェックしましょう。'
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
          path: '【理科】天体観測 ~ 月の写真を撮ってみよう ~ 準備編',
          disabled: true
        }
      ],
      slrCameraList: [
        { subtitle: '1.カメラを固定しよう', txt: '暗いので手ブレがおこりやすいです。\n三脚を使いましょう。ない場合は、脇をしっかりしめて撮りましょう\n\n※ブレると模様がモヤっとするので注意してね', src: 'https://shop.kitamura.jp/ts_rsc/484/images/img_kotei.jpg' },
        { subtitle: '2.カメラの設定の目安', txt: 'ISO：400\n絞り：F8\nシャッタースピード：1/500秒\n\n※露出を調整できる応用撮影モードなどを選びましょう', src: 'https://shop.kitamura.jp/ts_rsc/484/images/img_mode.jpg' },
        { subtitle: '3.露出を微調整しよう', txt: '撮った写真を液晶モニターで確認しながら進めよう。明るすぎて模様が見えない場合は、露出をマイナス側に補正\n\n※うさぎ模様が撮れるかどうかはココが大切', src: 'https://shop.kitamura.jp/ts_rsc/484/images/img_roshutu.jpg' },
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
.summerhomework-moon {
  p {
    font-size: 14px !important;
    margin: 10px 0 0 0;
    line-height: 1.4em;
  }
  p.p002 {
    line-height: 1.5em;
    letter-spacing: 0.05em;
    margin: 15px 0 0 50px;
  }
  .note {
    padding: 0 15px 15px 15px;
    background: url(https://shop.kitamura.jp/ts_rsc/484/images/note-01.gif) no-repeat top left;
    border-left: #cbcbcb 1px solid;
    border-bottom: #cbcbcb 1px solid;
    border-right: #cbcbcb 1px solid;
  }
  h2 {
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    padding: 6px 0;
    span.no {
      background: #8e369d;
      width: 14%;
      height: auto;
      color: #fff;
      text-align: center;
      font-weight: bold;
      margin: 15px 10px 10px 0;
      padding: 12px;
      z-index: 10;
    }
    span.no-text {
      border-bottom: dashed #8e369d 5px;
      width: 75%;
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
  .txt01 {
    line-height: 1.5em;
    background: url(https://shop.kitamura.jp/ts_rsc/484/images/line01.gif) repeat-y left;
    padding: 0 0 0 30px;
  }
  .txt02 {
    line-height: 1.5em;
    margin: 0 0 25px 0;
    background: url(https://shop.kitamura.jp/ts_rsc/484/images/line01.gif) repeat-y left;
    padding: 0 0 30px 10px;
  }
  .txt03 {
    line-height: 1.5em;
    margin: 0 0 25px 0;
    background: url(https://shop.kitamura.jp/ts_rsc/484/images/line01.gif) repeat-y left;
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
  li.tum {
    margin: 0 0 10px 20px;
    list-style-type: disc;
  }
  .itemran {
    letter-spacing: 0.05em;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 10px 0 0 20px;
    padding: 10px 0 0 40px;
    background: url(https://shop.kitamura.jp/ts_rsc/484/images/frag01.gif) no-repeat left;
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
</style>
