<template>
  <v-app>
    <div class="skillup-01">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="text-subtitle-2">
          カメラを買ったら最初にすべき設定とは？<br />
          <v-img src="/ec/images2/special/general/how-to/skillup/01/01.jpg" alt="カメラを買ったら最初にすべき設定とは？"></v-img>
        </h1>
        <p class="pa-5 line-height">
          一眼レフやミラーレスカメラを買ったはいいものの、設定がよくわからないという方、結構いるのではないでしょうか。<br />
          今回は、カメラを手に入れたばかりの方に、まず行って欲しいカメラの設定を解説していきたいと思います。
        </p>

        <!--↓アンカー-->
        <div class="line-height">
          <ul class="cp_list" title="目次">
            <li><v-icon color="#525252" left>fas fa-camera</v-icon><a v-scroll-to="'#r01'">撮影前に設定すべきカメラの設定</a></li>
            <li><v-icon color="#525252" left>fas fa-camera</v-icon><a v-scroll-to="'#r02'">初めて写真を撮るときは「Pモード」で</a></li>
            <li class="aft w100pr">
              <v-icon color="#525252" left>fas fa-hand-holding-heart</v-icon><a v-scroll-to="'#aft'">専門店だから安心！アフターサービス</a>
            </li>
          </ul>
        </div>

        <!--↓1-->
        <subText :textItem="'撮影前に設定すべきカメラの設定'" id="r01" />
        <v-img src="/ec/images2/special/general/how-to/skillup/01/02.jpg" alt="視度調整ダイヤル" max-width="581" height="auto" class="mx-auto mb-4"></v-img>
        <p class="pa-5 line-height">
          一眼レフやミラーレスカメラにはいろんなボタンがありますが、ファインダー（覗く窓）が付いているカメラをお持ちの方は、まず「視度調整」を行いましょう。<br /><br />
          「視度調整」とは、自分の目とファインダーの視度を調整する機能のことです。<br /><br />
          ピントを合わせたときに被写体がぼやけていたり、ファインダー内に表示される文字などが見づらい場合は、視度が合っていないことが原因です。<br /><br />
          視度調整の方法は、カメラ本体のファインダー近くにあるプラス（＋）とマイナス（－）のダイヤル式の視度調整ボタンを回して、ファインダー内の表示が鮮明に見えるように調整するだけです。<br /><br />
          遠視や老眼の場合はプラス（＋）方向に、近視の場合はマイナス（－）方向に回すと、はっきりと見えるようになります。
        </p>

        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="text-center">
              視度が合っている状態
              <v-img
                src="/ec/images2/special/general/how-to/skillup/01/finder_a.jpg"
                alt="合っている状態"
                max-width="437"
                height="auto"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              視度が合っていない状態
              <v-img
                src="/ec/images2/special/general/how-to/skillup/01/finder_b.jpg"
                alt="合っていない状態"
                max-width="437"
                height="auto"
                class="mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--↑1-->
        <!--↓2-->
        <subText :textItem="'初めて写真を撮る時は「Pモード」で'" id="r02" />
        <v-img src="/ec/images2/special/general/how-to/skillup/01/p.jpg" alt="Pモード 画像" max-width="500" height="auto" class="mx-auto mb-4"></v-img>
        <p class="pa-5 line-height">
          カメラには、目的別に使える4つの「モード」<br />
          ①P<br />
          ②A(Av)<br />
          ③S(Tv)<br />
          ④M<br />
          がありますが、初めて写真を撮る時は「Pモード（プログラムオート）」で撮りましょう！<br /><br />
          Pモードは、明るさ（露出）をカメラが判断して、適正なシャッタースピードと絞り値を、カメラが全て全自動（オート）でバランス良く設定をしてくれます。<br /><br />
          AUTOモードに似ていますが、Pモードでは露出補正や測光モード、ホワイトバランスなどを変更できるので、仕上がりの幅が広がります。
        </p>
        <v-container class="pa-0">
          <v-row>
            <v-col class="text-center" cols="12" sm="3" v-for="(mode, i) in modeList" :key="i">
              {{ mode.mode }}
              <v-img :src="mode.src" :alt="mode.mode" max-width="329" height="auto" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--↑2-->
        <!--↓アフター-->
        <subText :textItem="'専門店だから安心！アフターサービス'" id="aft" />
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                src="	/ec/images2/special/general/how-to/skillup/01/gaikan.png"
                alt="キタムラ店舗外観イメージ"
                max-width="100%"
                height="auto"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/general/how-to/skillup/01/afsv.png" alt="イメージ" max-width="100%" height="auto" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <p class="pa-5 line-height">
          カメラのキタムラでは、全国のカメラのキタムラ店舗でアフターサービスを行なっております。<br />
          「カメラの使い方や設定が分からない」など、利用中の問題から、故障時の修理のお申し込みまで、お気軽にご相談ください。
        </p>

        <orangeBtn :btntxt="'カメラのキタムラ 店舗一覧'" :href="'https://sss.kitamura.jp/'" :height="'50px'" :btnColor="'orange'" />
        <p class="pa-5 line-height">修理の申し込みはインターネット上でも行えます。</p>
        <orangeBtn :btntxt="'修理受付'" :href="'/ec/guide/syuuri'" :height="'50px'" :btnColor="'orange'" />
        <br />

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'skillup-01',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    orangeBtn: OrangeBtn,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: () => {
    document.title = 'カメラを買ったら最初にすべき設定とは？ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'カメラを買ったら最初にすべき設定とは？'
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
          path: 'カメラを買ったら最初にすべき設定とは？',
          disabled: true
        }
      ],
      modeList: [
        { mode: 'Pモード', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/skillup/01/p.jpg' },
        { mode: 'A(Av)モード', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/skillup/01/a.jpg' },
        { mode: 'S(Tv)モード', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/skillup/01/s.jpg' },
        { mode: 'Mモード', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/skillup/01/m.jpg' },
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
.skillup-01 {
  ul.cp_list {
    position: relative;
    padding: 0 0.5em;
    margin-top: 2em;
    list-style-type: none;
    border: solid 2px #525252;
    list-style: none;
    font-size: 150%;
    li {
      line-height: 1.5;
      padding: 0.5em 0 0.5em 0.1em;
      border-bottom: 1px dashed #525252;
    }
    &::after {
      position: absolute;
      content: attr(title);
      padding: 1px 7px;
      letter-spacing: 0.05em;
      font-weight: bold;
      font-size: 18px;
      background: #525252;
      color: #fff;
      bottom: 100%;
      left: -2px;
      border-radius: 4px 4px 0px 0px;
    }
    li:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
