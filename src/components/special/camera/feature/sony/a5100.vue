<template>
  <v-app>
    <div class="a5100">
      <div class="main-contents-wrap font-style">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="w720">
          <h1 class="py-6 pl-6 text-h5 font-weight-bold">ソニー α5100 ミラーレス一眼カメラ【生産完了】</h1>
          <v-card flat img="/ec/images2/special/camera/feature/sony/a5100/main.jpg" :height="$vuetify.breakpoint.mdAndUp ? '248' : '122'" class="mainvisual">
            <div class="inner">
              <strong>
                <v-img src="/ec/images2/special/camera/feature/sony/a5100/main_strong.png" max-width="163" max-height="42" alt="a5000"></v-img>
              </strong>
              <div class="h2">
                <v-img src="/ec/images2/special/camera/feature/sony/a5100/main_h2.png" max-width="363" max-height="97"></v-img>
              </div>
            </div>
          </v-card>
          <div class="txt-box bg-blue py-4 px-5" v-if="$vuetify.breakpoint.smAndDown">
            <h2 class="text-subtitle-1 text-center font-weight-bold">タッチで、いい瞬間をつかまえよう</h2>
            <p class="mt-2">子どもが見せる一瞬の表情だって逃さない。「いいな」と思った瞬間、画面にタッチ。思い通りの写真をかんたんに、キレイに撮ろう。</p>
          </div>

          <!-- ↓ product -->
          <v-sheet color="#e8eef4" class="py-6 px-4 mt-7">
            <ul class="content">
              <li>APS-Cサイズの有効約2430万画素 CMOSセンサー</li>
              <li>新世代の画像処理エンジン「BIONZ X（ビオンズ エックス）」</li>
              <li>タッチシャッター＆タッチフォーカス対応</li>
              <li>ファストハイブリッドAF搭載</li>
            </ul>
            <v-img src="/ec/images2/special/camera/feature/sony/a5100/Producttop_img.png" max-width="245" max-height="87" class="ml-auto mt-2"></v-img>
            <v-hover v-slot="{ hover }" v-for="(redBtn, index) in redBtnList" :key="index">
              <v-btn tile block :color="hover ? '#666' : '#e75a2f'" height="55" :href="redBtn.href" class="mt-6 text-subtitle-1 text-center">
                <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ redBtn.txt }}</span
                ><v-icon small right color="white">fal fa-chevron-right</v-icon>
              </v-btn>
            </v-hover>
          </v-sheet>

          <!-- ↓ TOUCH SHUTTER -->
          <v-sheet color="#f6f8e2" class="py-6 px-4 mt-7 mb-8">
            <div class="heading" v-if="$vuetify.breakpoint.smAndDown">
              <h3>いい瞬間をつかまえよう</h3>
            </div>
            <p class="text-body-1 mt-1">ファストハイブリッドAF / 最高約6コマ/秒＊の高速連写</p>
            <p class="line-height">
              走っている子どもにも瞬時にピントを合わせられる「ファストハイブリッドAF」を採用。AFエリアが画面のほぼ全域をカバーしているので、狙った被写体に瞬時に反応し、ピントを合わせ続けます。さらに、最高約6コマ/秒＊の高速連写機能を使えば、ベストショットをあとから選択でき、いい瞬間を切り取れます。<br />

              ＊「連続撮影」モード Hi 時 ※ 撮影速度は、撮影条件やメモリーカードにより異なります
            </p>
          </v-sheet>

          <v-card flat img="/ec/images2/special/camera/feature/sony/a5100/touch_hasbg.jpg" :height="$vuetify.breakpoint.mdAndUp ? '356' : '178'" class="Touch">
            <div class="inner">
              <strong>
                <v-img src="/ec/images2/special/camera/feature/sony/a5100/touch_strong.png" max-width="176" max-height="69" alt="TOUCH SHUTTER"></v-img>
              </strong>
              <div class="heading">
                <h3 v-if="$vuetify.breakpoint.mdAndUp">タッチで直感的に撮ろう</h3>
              </div>
            </div>
          </v-card>
          <v-sheet color="#f3fae1" class="py-6 px-4">
            <div class="heading">
              <h3 v-if="$vuetify.breakpoint.smAndDown">タッチで直感的に撮ろう</h3>
            </div>
            <p>タッチシャッター / タッチフォーカス</p>
            <p class="line-height">
              撮りたいところに画面にタッチするだけで、ピントを合わせてシャッターが切れる「タッチシャッター」機能を搭載。タッチするだけなので、迷わず撮りたい被写体を撮影できます。思い通りの位置にピントを合わせるタッチフォーカスも可能。
            </p>
          </v-sheet>
          <v-hover v-slot="{ hover }" v-for="(redBtn, index) in redBtnList" :key="index">
            <v-btn tile block :color="hover ? '#666' : '#e75a2f'" height="55" :href="redBtn.href" class="mt-6 text-subtitle-1 text-center">
              <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ redBtn.txt }}</span
              ><v-icon small right color="white">fal fa-chevron-right</v-icon>
            </v-btn>
          </v-hover>
          <!-- ↑ TOUCH SHUTTER -->
          <!-- ページトップ -->
          <a href="#top">
            <v-img
              src="https://shop.kitamura.jp/common/images/hf/btn_pagetop.gif"
              alt="このページの先頭へ"
              max-width="100"
              max-height="18"
              class="ml-auto mb-2"
            ></v-img>
          </a>
          <!-- ↓ QUALITY -->
          <v-card
            flat
            img="/ec/images2/special/camera/feature/sony/a5100/quality_hasbg.jpg"
            :height="$vuetify.breakpoint.mdAndUp ? '356' : '176'"
            class="Quality"
          >
            <div class="inner">
              <strong>
                <v-img src="/ec/images2/special/camera/feature/sony/a5100/quality_strong.png" max-width="202" max-height="33" alt="TOUCH SHUTTER"></v-img>
              </strong>
              <div class="heading">
                <h3 v-if="$vuetify.breakpoint.mdAndUp">一眼画質でキレイに写そう</h3>
              </div>
            </div>
          </v-card>
          <v-sheet color="#E5CCAE" class="py-6 px-4">
            <div class="heading">
              <h3 v-if="$vuetify.breakpoint.smAndDown">一眼画質でキレイに写そう</h3>
            </div>
            <p>有効約2430万画素CMOSセンサー / 画像処理エンジン「BIONZ X」</p>
            <p class="line-height">
              一般的なデジタル一眼カメラと同じAPS-Cサイズの大型センサーを採用。 さらに新世代の画像処理エンジン「BIONZ
              X」も搭載し、一眼ならでは高画質でキレイに描写できます。
            </p>
            <v-img src="/ec/images2/special/camera/feature/sony/a5100/quality_img_01.png" max-width="335" max-height="144" class="mx-auto"></v-img>
          </v-sheet>
          <!-- ↓ FEATURES -->
          <v-sheet color="#f8f2ea" class="pt-7 px-5 pb-10 my-7">
            <v-img src="/ec/images2/special/camera/feature/sony/a5100/feat_h3.png" alt="FEATURES" max-width="252" max-height="36" class="mx-auto"></v-img>
            <p class="mt-4 text-center">撮影をサポートする充実の機能</p>
            <div class="line mt-7 pb-7">
              <p class="text-subtitle-1 brown--text mb-2">画面を見ながら自分撮りもかんたん</p>
              <em>180度チルト可動式液晶モニター</em>
              <p class="mt-4">液晶モニターを180度反転できるので、画面で写りを確認しながら自分撮りがかんたんに楽しめます。</p>
            </div>
            <v-row class="mt-10" justify="end">
              <v-col cols="12" sm="6">
                <p class="text-subtitle-1 brown--text mb-2">撮ったその場で仲間と写真をシェア</p>
                <em>Wi-Fi対応ワイヤレス通信機能 / NFC対応</em>
                <p class="mt-4">「Wi-Fi対応ワイヤレス通信」機能を搭載。さらにNFC対応スマートフォンなら写真の転送もワンタッチです。</p>
              </v-col>
            </v-row>
            <v-hover v-slot="{ hover }" v-for="(redBtn, index) in redBtnList" :key="index">
              <v-btn tile block :color="hover ? '#666' : '#e75a2f'" height="55" :href="redBtn.href" class="mt-6 text-subtitle-1 text-center">
                <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ redBtn.txt }}</span
                ><v-icon small right color="white">fal fa-chevron-right</v-icon>
              </v-btn>
            </v-hover>
            <!-- ページトップ -->
            <a href="#top">
              <v-img
                src="https://shop.kitamura.jp/common/images/hf/btn_pagetop.gif"
                alt="このページの先頭へ"
                max-width="100"
                max-height="18"
                class="ml-auto"
              ></v-img>
            </a>
            <div class="line mt-7 pb-7">
              <p class="text-subtitle-1 brown--text mb-2">思い通りのイメージにつくれる</p>
              <em>マイフォトスタイル</em>
              <p class="mt-4">画面を見ながら背景をおおきくぼかしたり、色合いを調節したり、思い通りのイメージがかんたんにつくれます。</p>
            </div>
            <div class="line pb-7">
              <v-row class="mt-10 mb-7">
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/sony/a5100/feat_img_04.png" max-width="305" max-height="155" class="mx-auto"></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <p class="text-subtitle-1 brown--text mb-2">個性的なアート作品も楽しめる</p>
                  <em>ピクチャーエフェクト</em>
                  <p class="mt-4">トイカメラやミニチュア、イラスト調など、さまざまなエフェクトでアートのような写真を楽しめます。</p>
                </v-col>
              </v-row>
              <v-hover v-slot="{ hover }" v-for="(redBtn, index) in redBtnList" :key="index">
                <v-btn tile block :color="hover ? '#666' : '#e75a2f'" height="55" :href="redBtn.href" class="mt-6 text-subtitle-1 text-center">
                  <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ redBtn.txt }}</span
                  ><v-icon small right color="white">fal fa-chevron-right</v-icon>
                </v-btn>
              </v-hover>
              <!-- ページトップ -->
              <a href="#top">
                <v-img
                  src="https://shop.kitamura.jp/common/images/hf/btn_pagetop.gif"
                  alt="このページの先頭へ"
                  max-width="100"
                  max-height="18"
                  class="ml-auto"
                ></v-img>
              </a>
            </div>
            <div class="line pb-7">
              <v-row class="mt-10">
                <v-col cols="12" sm="6">
                  <p class="text-subtitle-1 brown--text mb-2">カメラまかせでキレイに撮れる</p>
                  <em>おまかせオート / プレミアムおまかせオート</em>
                  <p class="mt-4">
                    難しいシーンもカメラまかせでキレイに撮れる。<br />カメラがシーンに合わせて自動で設定するおまかせオートモードとプレミアムおまかせオートモードを搭載。
                  </p>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/sony/a5100/feat_img_05.png" max-width="355" max-height="129" class="mx-auto"></v-img>
                </v-col>
              </v-row>
            </div>
            <div class="line pb-7">
              <v-row class="mt-10">
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/sony/a5100/feat_img_06.png" max-width="325" max-height="138" class="mx-auto"></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <p class="text-subtitle-1 brown--text mb-2">コンパクトなボディに機能満載</p>
                  <em>フラッシュ内蔵 / ズームレバー搭載</em>
                  <p class="mt-4">軽量・コンパクトなボディにフラッシュを内蔵。さらにズームレバーを搭載し、ズーム撮影も気軽にできます。</p>
                </v-col>
              </v-row>
            </div>
          </v-sheet>

          <v-card
            flat
            img="/ec/images2/special/camera/feature/sony/a5100/product_hasbg.jpg"
            :height="$vuetify.breakpoint.mdAndUp ? '282' : '122'"
            class="Product mt-7"
          >
            <div class="inner">
              <h3>
                <v-img src="/ec/images2/special/camera/feature/sony/a5100/product_h3.png" max-width="245" max-height="82" alt="a5100"></v-img>
              </h3>
            </div>
          </v-card>
          <v-sheet color="#e8eef4" class="pa-4">
            <ul class="content">
              <li>APS-Cサイズの有効約2430万画素 CMOSセンサー</li>
              <li>新世代の画像処理エンジン「BIONZ X（ビオンズ エックス）」</li>
              <li>タッチシャッター＆タッチフォーカス対応</li>
              <li>ファストハイブリッドAF搭載</li>
            </ul>
          </v-sheet>
          <!-- ページトップ -->
          <a href="#top">
            <v-img
              src="https://shop.kitamura.jp/common/images/hf/btn_pagetop.gif"
              alt="このページの先頭へ"
              max-width="100"
              max-height="18"
              class="ml-auto"
            ></v-img>
          </a>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'a5100',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: (props, context) => {
    document.title = 'ソニー α5100 ミラーレス一眼カメラ【生産完了】 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α5100 ミラーレス一眼カメラ特集ページ。機能や価格をチェック！「タッチで、いい瞬間をつかまえよう」。SONY α（アルファ）シリーズ！')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ソニー α5100 ミラーレス一眼カメラ【生産完了】',
          disabled: true
        }
      ],
      redBtnList: [
        { href: '/ec/list?narrow18=0&keyword=α5100&category=ミラーレス一眼&index=&sort=number20,Number17,Score&searchbox=1&s1%5B%5D=ソニー&q=α5100&path=ミラーレス一眼', txt: 'ソニー α5100 商品一覧を見る' },
        { href: '/ec/ct/C002/001/003/', txt: 'ソニー ミラーレス一眼はこちら\n一覧を見る' },
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
.font-style {
  font-family: YuGothic, '游ゴシック', '\30D2\30E9\30AE\30CE\89D2\30B4\20\50\72\6F\20\57\33', 'Hiragino Kaku Gothic Pro', '\30E1\30A4\30EA\30AA', Meiryo,
    '\FF2D\FF33\20\FF30\30B4\30B7\30C3\30AF', 'Droid Sans', sans-serif;
}
.w720 {
  max-width: 720px;
  margin: 0 auto;
}
.bg-blue {
  background: #e8eef4;
}
.mainvisual {
  .inner {
    position: relative;
    strong {
      position: absolute;
      right: 26.181552%;
      top: 0;
      z-index: 1;
      display: block;
      padding-top: 5.1010248%;
      width: 22.5944363%;
    }
    .h2 {
      position: absolute;
      right: 12.7379209%;
      top: 0;
      z-index: 1;
      display: block;
      padding-top: 15.9590043%;
      width: 50.3601756%;
      max-width: 524px;
    }
  }
}
@media (max-width: 640px) {
  .mainvisual .inner {
    padding-top: 0;
  }
}
@media (max-width: 640px) {
  .mainvisual .inner strong {
    right: 12%;
    padding-top: 12%;
    width: 35%;
  }
}
@media (max-width: 640px) {
  .mainvisual .inner .h2 {
    display: none;
  }
}
.content li {
  margin-top: 5px;
  padding-left: 13px;
  font-size: 100%;
  line-height: 1.4;
  background: url(/ec/images2/special/camera/feature/sony/a5100/product_icon.png) no-repeat 0 0.2em;
  background-size: 8px 8px;
  list-style: none;
}
.Touch {
  .inner {
    position: relative;
    strong {
      position: absolute;
      top: 0;
      left: 0;
      padding: 18% 0 0 5%;
      width: 43%;
    }
    .heading {
      position: absolute;
      top: 0;
      left: 0;
      padding: 29% 0 0 5%;
      width: 43%;
      display: block;
    }
  }
}
.Quality {
  .inner {
    position: relative;
    strong {
      position: absolute;
      top: 0;
      right: 0;
      padding: 19% 5% 0 0;
      width: 41%;
    }
    .heading {
      position: absolute;
      top: 0;
      right: 0;
      padding: 25% 1% 0 0;
      width: 41%;
      display: block;
    }
  }
}
.heading h3 {
  display: block;
  font-size: 143.8%;
  line-height: 1.3;
  color: #6d420b;
}
.line {
  border-bottom: 1px solid #d0bea6;
}
.Product {
  .inner {
    position: relative;
    h3 {
      position: absolute;
      top: 0;
      left: 15px;
      padding-top: 15%;
      width: 37%;
    }
  }
}
</style>
