<template>
  <v-app>
    <div class="summerhomework-observation-diary">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-body-1">夏休み【理科】自由研究特集 しょくぶつ観察日記 準備編</h1>
        <v-img
          src="/ec/images2/special/general/summerhomework/observation-diary/syokubutu_950-01.gif"
          alt="しょくぶつ観察日記 準備編"
          max-width="950"
          max-height="79"
        ></v-img>
        <p>
          長い夏休みには、植物や野菜の観察にぴったりですね。<br />
          理科の自由研究として、毎日少しずつ、育つ様子を観察していくと花が咲いたり、野菜が実る感動もあって食育にも。<br />
          でも、観察日記は毎日絵を描くのが大変。ついつい自由研究から避けてしまいがちな観察日記を簡単に作る方法を伝授します！<br /><br />
          ※ご紹介商品は2019年7月時点の商品です。イメージ画像とは異なる場合がございます。あらかじめご了承ください
        </p>

        <!--▼step1-->
        <v-container class="waku mt-10">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/item.jpg"
                alt="天体望遠鏡編/デジタル一眼レフ編の準備物イメージ"
                max-width="320"
                height="auto"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="note">
              <h2 class="mt-8"><span class="no">STEP.1</span><span class="no-text">しょくぶつ観察日記に必要なもの</span></h2>
              <div class="txt01 mt-4">
                <ol>
                  <li>
                    スマホorデジタルカメラ<br />
                    持っていないなら、お父さん、お母さんに借りよう！
                  </li>
                  <li><router-link to="/ec/pd/4547410356892/" target="_blank">フジフイルム スマホdeチェキ instax SHARE SP-3 ホワイト </router-link></li>
                  <li>
                    <router-link
                      to="/ec/pd/list.html?fmt=json&amp;limit=20&amp;path=%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%BB%E9%A1%8D&amp;q=%E9%A1%8D&amp;s19[]=1&amp;s9[]=A3&amp;sort=number20%2Crank%2CScore&amp;style=0"
                      target="_blank"
                      >A３サイズの額</router-link
                    >（スマホdeチェキの場合)
                  </li>
                  <li>
                    <router-link
                      to="/ec/pd/list.html?index=all&amp;searchbox=1&amp;q=%E3%83%94%E3%82%BF%E3%83%83%E3%83%88%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0&amp;path=&amp;y=0&amp;x=0"
                      target="_blank"
                      >フリーアルバム</router-link
                    >（プリントの場合）
                  </li>
                  <li>
                    <router-link
                      to="/ec/pd/list.html?searchbox=1&amp;sort=number20,rank,Score&amp;index=all&amp;path=&amp;q=%E3%83%9E%E3%82%B9%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%86%E3%83%BC%E3%83%97&amp;x=0&amp;y=0"
                      target="_blank"
                      >マスキングテープ</router-link
                    >
                  </li>
                  <li><router-link to="/ec/ct/C014015/" target="_blank">メモシール</router-link>・または、メモ</li>
                  <li>
                    文房具<br />
                    のり・ハサミ・ペン・画用紙
                  </li>
                  <li>
                    植物の苗<br />
                    今回はバジルの苗で観察します。（※写真は、かなり大きくなったバジルです。タネの方が育つ楽しみが多いですが、発芽に10日ぐらいかかります。夏休みが終わります。。。）
                  </li>
                </ol>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!--▲step1-->

        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <a v-scroll-to="'#cheki'">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/nikki_botan01.gif"
                max-width="398"
                height="auto"
                alt="スマホdeチェキで観察日記"
                class="mx-auto"
              >
              </v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="6">
            <a v-scroll-to="'#print'">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/nikki_botan02.gif"
                max-width="398"
                height="auto"
                alt="プリントで観察日記"
                class="mx-auto"
              >
              </v-img>
            </a>
          </v-col>
        </v-row>

        <!--▼step2-->
        <v-container class="waku mt-10 pa-0">
          <v-img
            id="cheki"
            src="/ec/images2/special/general/summerhomework/observation-diary/mtitle_cheki.gif"
            alt="スマホdeチェキで観察日記"
            max-width="484"
            height="auto"
            class="my-5"
          ></v-img>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" class="note">
                <h2 class="mt-8"><span class="no">STEP.2</span><span class="no-text">こんな風に進めよう! スマホdeチェキで観察日記</span></h2>
                <div class="txt01 mt-4">
                  <p>基本としては、たったこれだけ！</p>
                  <ol>
                    <li>スマホdeチェキをスマホのそばに置いて、電源を入れる</li>
                    <li>スマホから専用アプリを立ち上げて、リアルタイムテンプレートを選択</li>
                    <li>スマホで写真を撮る</li>
                    <li>気づいたことをメモに残す</li>
                  </ol>
                  <p>
                    <span class="red--text">☆ポイント☆</span> <br />
                    ポイントは、スマホdeチェキにあるリアルタイムテンプレート！ <br />
                    日付、天気、気温を一緒にプリントするから、とっても便利！！ <br />
                    選択を忘れてしまったときは、余白に日付を書きましょう
                  </p>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="/ec/images2/special/general/summerhomework/observation-diary/step_cheki.jpg"
                  alt="スマホdeチェキ観察日記の進め方"
                  max-width="320"
                  height="auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
        <!--▲step2-->

        <!--▼step3-->
        <v-container class="note waku mt-7 pt-5">
          <h2 class="mt-8 mb-2"><span class="no">STEP.3</span><span class="no-text">写真がたくさん撮れたら、観察日記にしましょう</span></h2>
          <v-row no-gutters>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <p>
                  ある程度写真がたまったら、観察日記を作りましょう。<br />
                  チェキの写真は、紙が厚いので大きなA3の額縁で観察日記にします。<br />
                  迫力のある仕上がりになりますよ。
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/photo_cheki.jpg"
                max-width="320"
                height="auto"
                alt="たくさんのチェキ写真"
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
              次は『スマホdeチェキで観察日記』の<br />
              まとめ編です
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <a href="/ec/special/general/summerhomework/observation-diary2">
                <v-img
                  :src="`/ec/images2/special/general/summerhomework/observation-diary/nextbotan_${hover ? 'on' : 'off'}.gif`"
                  class="ml-auto"
                  max-width="346"
                  max-height="89"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <p class="text-right"><a href="#top">▲ ページトップへ</a></p>

        <!--▼スマホからプリントstep2-->
        <v-container class="waku mt-7" id="print">
          <v-img
            src="/ec/images2/special/general/summerhomework/observation-diary/mtitle_print.gif"
            max-width="484"
            max-height="40"
            alt="プリントで観察日記"
            class="mb-10"
          ></v-img>
          <v-container class="pt-4 px-0">
            <v-row>
              <v-col cols="12" sm="8" class="note">
                <h2 class="mt-8"><span class="no">STEP.2</span><span class="no-text">こんな風に進めよう! プリントで観察日記</span></h2>
                <div class="txt01 mt-4">
                  <p>基本は２ステップ。でも、忘れちゃいけない肝心な事も</p>
                  <ol>
                    <li>写真を撮る</li>
                    <li>メモに日付と気づいたことを書く</li>
                  </ol>
                  <p>
                    <span class="red--text">☆ポイント☆</span> <br />
                    ポイントは、メモに日付を必ず残すこと！<br />
                    後で写真にした時にどの写真がどの日なのか分からなくなってしまいます。
                  </p>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="/ec/images2/special/general/summerhomework/observation-diary/step_print.jpg"
                  alt="スマホからプリントの進め方"
                  max-width="320"
                  height="auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <!--▼スマホからプリントstep3-->
        <v-container class="note waku mt-7 pt-5">
          <h2 class="mt-8 mb-2"><span class="no">STEP.3</span><span class="no-text">写真がたくさん撮れたら、観察日記にしましょう</span></h2>
          <v-row no-gutters>
            <v-col cols="12" sm="7">
              <div class="txt02 mt-2">
                <p>
                  ある程度写真がたまったら、観察日記を作りましょう。<br />
                  アルバムに写真とメモを貼ってまとめます。<br />
                  マスキングテープやペンを使って、おしゃれな観察日記にまとめましょう。
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/photo_print.jpg"
                max-width="320"
                height="auto"
                alt="たくさんの写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="waku mt-7 pt-5">
          <v-row no-gutters>
            <v-col cols="12" sm="5">
              <v-img
                src="/ec/images2/special/general/summerhomework/observation-diary/whenthis.jpg"
                max-width="320"
                height="auto"
                alt="バジルの写真"
                class="mt-2 mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="7">
              <div class="clip pt-2">
                <div class="clipInner">
                  <h3>こんな写真も撮ろう！</h3>
                  <div class="txt-b01">
                    <p>
                      植物の成長はゆっくりです。昨日と写真が変わらない。。 <br />
                      そんな時は、こんな写真を撮るといいですよ。<br />
                      <br />
                      お花編： <br />
                      ・お花のお手入れ前とお手入れ後の写真（花がしおれたのでつみましたなど） <br />
                      ・たくさん花が咲いたので、花瓶に活けました<br />
                      <br />
                      野菜編：<br />
                      ・困った写真を撮る（葉っぱが虫に食べられた！など）<br />
                      ・収穫して食べている写真も入れる
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="waku mt-7 pt-5">
          <v-row dense>
            <v-col cols="12" sm="7">
              <div class="clip pt-2">
                <div class="clipInner">
                  <h3>植物の観察日記にこんな便利な商品があります！</h3>
                  <div class="txt-b01">
                    <p>
                      <a href="/pd/4545350052690/" target="_blank">オリンパス Tough TG-6 </a><br />
                      <br />
                      顕微鏡モードあり！被写体距離1cmまで近づけます。<br />
                      液晶モニタで簡単に観察、撮影、新鮮な発見に出会えます。<br />
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="5">
              <router-link to="/ec/pd/4545350052690" target="_blank"
                ><v-img
                  src="/ec/images2/special/general/summerhomework/observation-diary/product.jpg"
                  alt="Tough TG-6"
                  max-width="320"
                  height="auto"
                  class="mx-auto"
              /></router-link>
            </v-col>
          </v-row>
        </v-container>

        <v-row class="mt-7">
          <v-col cols="12" sm="6">
            <span class="font-weight-bold text-h6 mt-2">
              おつかれさまでした！<br />
              次は『スマホからプリントで観察日記』の<br />
              まとめ編です
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <a href="https://www.kitamura-print.com/column/?_ga=2.30844927.1528625712.1636330339-1397937906.1635829418">
                <v-img
                  :src="`/ec/images2/special/general/summerhomework/observation-diary/nextbotan_${hover ? 'on' : 'off'}.gif`"
                  class="ml-auto"
                  max-width="346"
                  max-height="89"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
        <p class="text-right"><a href="#top">▲ ページトップへ</a></p>

        <div class="itemran my-6">準備編で紹介した商品・その他おすすめの商品一覧</div>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1138" />

        <a href="/ec/general/summerhomework">
          <v-img src="/ec/images2/special/general/summerhomework/observation-diary/buckbotan02.gif" class="ml-auto" max-width="324" max-height="49"></v-img>
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

export default Vue.extend({
  name: 'summerhomework-moon',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
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
          path: ' 【理科】植物観察日記 準備編',
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
.summerhomework-observation-diary {
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
      background: #6bd203;
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
      border-bottom: dashed #6bd203 5px;
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
  div.clip {
    background: url(/ec/images2/special/general/summerhomework/observation-diary/note-02.gif) no-repeat top left;
    .clipInner {
      margin: 20px 0 0 0;
      padding: 0 20px;
      border-left: #cbcbcb 1px solid;
      border-bottom: #cbcbcb 1px solid;
      border-right: #cbcbcb 1px solid;
      box-sizing: border-box;
    }
    h3 {
      margin: 30px 0 25px 0;
      border-bottom: dashed #ff0000 5px;
      letter-spacing: 0.09em;
      box-sizing: border-box;
    }
    .txt-b01 {
      line-height: 1.5em;
      text-align: left;
      margin: 0;
      background: url(/ec/images2/special/general/summerhomework/observation-diary/line01.gif) repeat-y left;
      padding: 0 20px 20px 20px;
      box-sizing: border-box;
    }
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
