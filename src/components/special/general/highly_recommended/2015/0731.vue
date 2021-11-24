<template>
  <v-app>
    <div class="highly-recommended-2015-0731">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <titleImage></titleImage>

        <div class="my-4 pa-6 line-g"></div>

        <!--↓①-->
        <div class="mt-8 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>可変式ND(減光)フィルターってなに？</h2>
          <p>
            NDフィルターは、減光フィルターとも呼ばれ、光の量を減らすことができるフィルターです。<br />光量を減らすことで、シャッタースピードを遅くすることが可能になり、表現の幅が広がります。<br />「ケンコー
            バリアブルNDX」は、可変式のNDフィルターで、自在に減光量を調整することができる画期的な撮影アイテムです！
          </p>
        </div>
        <!--↑①-->

        <!--↓③-->
        <div class="mt-8 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>可変式ND(減光)フィルター の特徴</h2>
          <h3 class="text-subtitle-1 font-weight-bold"><v-icon left small color="red darken-2">fas fa-star</v-icon>1枚で濃度の違うNDフィルター約5枚分の働き</h3>
          <p>ND2.5～ND450の範囲まで無段階に減光可能です。 絞り換算にすると約1段半～8段半まで、回転させるだけで自由自在に調節できます。</p>
          <v-img src="https://shop.kitamura.jp/ts_rsc/649/images/img-a.jpg" max-width="840" height="auto" class="mt-2 mx-auto" />
          <p class="my-2"><span class="marker">1枚なので持ち運びがラクラク♪手軽に写真や動画撮影ができますね。</span></p>
          <h3 class="text-subtitle-1 font-weight-bold mt-7 mb-5">
            <v-icon left small color="red darken-2">fas fa-star</v-icon>明るい状態でピントや構図を確認してから濃度を調節できる
          </h3>
          <p>
            濃度の濃いND400フィルターなどの場合、暗くて見ずらいため、構図やピント合わせのたびにフィルターの付け外しを行う必要がありました。<br />
            しかし、バリアブルNDXなら、ND2.5相当の薄い状態で構図を決定・ピント合わせをし、そのまま前枠を回転させて任意の濃度にセットできるので便利です。<br /><br />
            また、解像力を極力落さないように設計されていて、カラーバランスが一定にキープされています。さすがケンコーの高画質！
          </p>
          <v-img src="https://shop.kitamura.jp/ts_rsc/649/images/img-b.jpg" max-width="840" height="auto" class="mx-auto"></v-img>
          <p class="my-2"><span class="marker">付け替えの手間いらずで、シャッターチャンスを逃しません♪</span></p>
        </div>
        <!--↑③-->

        <!--↓②-->
        <div class="mt-8 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>可変式ND(減光)フィルターの魅力 モデル撮影・動画撮影・アート写真に！
          </h2>
          <p>例えば、「適正露出が125分の1の場合、バリアブルNDXを使えば、約3秒のスローシャッターで撮れる」ので、これまで出来なかったような表現を楽しめます♪</p>
          <h3 class="text-subtitle-1 font-weight-bold mt-7 mb-5">
            <v-icon left small color="red darken-2">fas fa-star</v-icon>明るい屋外でも開放値で背景をぼかせる
          </h3>
          <p>
            通常、晴天時の屋外撮影の場合、背景をボカしたくても開放F値では白飛びしていまいます。<br />
            白飛びを抑える為に絞りを絞り、露出を合わせると背景のボケ味を表現できず残念なことに・・・。<br /><br />
            そこで、バリアブルNDXを使うと光量を減らせ、F1.2などの明るいレンズでも適正露出を保てます。<br />
            <span class="marker">明るい屋外で、開放F値でも顔や背景を白飛びさせずに、背景をぼかした印象的な写真や動画が撮れる</span>のです。<br /><br />
            <span class="marker">ポートレートや一眼カメラでの動画撮影時に重宝</span>しますね♪
          </p>
          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/649/images/img-c.jpg"
                  alt="NG写真 → バリアブルNDX使うと・・・ → OK写真 女性作例"
                  max-width="440"
                  height="auto"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/649/images/img-d.jpg"
                  alt="NG写真 → バリアブルNDX使うと・・・ → OK写真 晴天時の白飛び"
                  max-width="440"
                  height="auto"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
          <h3 class="text-subtitle-1 font-weight-bold mt-7 mb-5">
            <v-icon left small color="red darken-2">fas fa-star</v-icon>長時間露光撮影で撮影の幅が広がる
          </h3>
          <p>
            通常、流れる滝や雲の様子などを表現したい場合は、スローシャッターや長時間露光で撮影します。しかし、明るい時間帯だと、露出がオーバーになるのでシャッタースピードを速くすると・・・ねらっている表現にならずガッカリ。<br /><br />
            そこで、バリアブルNDXを使うとスローシャッターや長時間露光が可能になります。<br /><span class="marker"
              >スローシャッターで撮った写真は、止まっている風景はくっきりと、波などの動きの速いものは なめらかに写ります。</span
            ><br />
            また、人の流れを撮るのもとても面白いです。<span class="marker">止まっている人はそのまま写り、動いている人は残像として残るアートな写真</span
            >に仕上がります。<br /><br />
            <span class="marker">自然の動きを表現するネイチャーフォトや、時の流れを表現するアート写真を撮る時</span>に使ってみたいですね♪
          </p>
          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/649/images/img-f.jpg"
                  alt="NG写真 → バリアブルNDX使うと・・・ → OK写真 人の残像作例"
                  max-width="440"
                  height="auto"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://shop.kitamura.jp/ts_rsc/649/images/img-e.jpg"
                  alt="NG写真 → バリアブルNDX使うと・・・ → OK写真 海作例"
                  max-width="440"
                  height="auto"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!--↑②-->

        <div class="my-4 pa-6 line-g"></div>

        <!--↓②-->
        <div class="mt-8 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>「ケンコー バリアブルNDX」「マルミ CREATION VARI ND 」におすすめアイテム
          </h2>
          <p>
            フィルターサイズは、58mm(マルミ)67mm(マルミ)77mm(ケンコー/マルミ)と82mm(ケンコー)の2種類です。<br />その他のフィルター径のレンズでは、ステップアップリングを使えば取り付け可能。関連用品よりお選びください♪
          </p>
          <v-img src="https://shop.kitamura.jp/ts_rsc/649/images/img-g.jpg" max-width="840" height="auto" class="mx-auto"></v-img>
        </div>

        <h2 class="text-h6 white--text font-weight-bold pa-2 red darken-2 mt-4 mt-sm-16">今週のイチオシ バックナンバー</h2>
        <p class="text-h5 font-weight-bold my-4">カメラ用品・家電</p>
        <v-row class="pa-2 mb-4">
          <v-col cols="12" sm="6" v-for="(backNumberCamera, i) in backNumberCameraList" :key="i">
            <v-row>
              <v-col cols="4">
                <a :href="backNumberCamera.href">
                  <v-img :src="backNumberCamera.src" max-width="100" max-height="100" class="mx-auto"></v-img>
                </a>
              </v-col>
              <v-col>
                <h3 class="text-subtitle-1 font-weight-bold">
                  <a :href="backNumberCamera.href">
                    {{ backNumberCamera.name }}
                  </a>
                </h3>
                <v-btn text :href="backNumberCamera.href">商品を詳しく見る<v-icon small right color="red">fas fa-caret-right</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <p class="text-h5 font-weight-bold my-4">スマホアクセサリー</p>
          </v-col>
          <v-col cols="12" sm="6" v-for="(backNumberSmartphone, i) in backNumberSmartphoneList" :key="i">
            <v-row>
              <v-col cols="4">
                <a :href="backNumberSmartphone.href">
                  <v-img :src="backNumberSmartphone.src" max-width="100" max-height="100" class="mx-auto"></v-img>
                </a>
              </v-col>
              <v-col>
                <h3 class="text-subtitle-1 font-weight-bold">
                  <a :href="backNumberSmartphone.href">
                    {{ backNumberSmartphone.name }}
                  </a>
                </h3>
                <v-btn text :href="backNumberSmartphone.href">商品を詳しく見る<v-icon small right color="red">fas fa-caret-right</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <a href="/ec/special/general/highly_recommended"><span class="red--text">→</span>その他バックナンバーを見る</a>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';
export default Vue.extend({
  name: 'highly-recommended-2015-0731',
  components: {
    breadcrumbs: Breadcrumbs,
    titleImage: TitleImage
  },
  setup: () => {
    document.title = '可変式ND(減光)フィルター「ケンコー バリアブルNDX」 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '絞り約8段分！1枚で5枚分のND(減光)フィルターの働きをする可変式NDフィルター。モデル撮影や一眼レフでの動画・アートな写真撮影におすすめ。フィルターなら日本最大級のカメラ専門店カメラのキタムラで受取り可能！')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '可変式ND(減光)フィルター「ケンコー バリアブルNDX」 | 今週のイチオシ',
          disabled: true
        }
      ],
      backNumberCameraList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item-coolshot20_350px.jpg', href: '/ec/special/general/highly_recommended/2015/0821', name: 'ゴルフで大活躍！ニコン携帯型レーザー距離計 COOLSHOT 20 ' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item-sarafit_350px.jpg', href: '/ec/special/general/highly_recommended/2015/0807', name: 'TVでお馴染み焦げ付かないセラミックフライパン「セラフィット」' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item_350px.jpg', href: '/ec/special/general/highly_recommended/2015/0731', name: '可変式ND(減光)フィルター「ケンコー バリアブルNDX」' },
      ],
      backNumberSmartphoneList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item-elecom_high-reso_350px.jpg', href: '/ec/special/general/highly_recommended/2015/0814', name: '「意外にいい音」、エレコム ハイレゾイヤホンシリーズ EHP-CH1000 他' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item-ztylus_500px.jpg', href: '/ec/special/general/highly_recommended/2015/0710', name: 'iPhone6用レンズアタッチメント ズタイラス RV-2 & ZIP-6LB' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0731/i-item-ct-wpip13_350px.jpg', href: '/ec/special/general/highly_recommended/2015/0619', name: '防水、耐衝撃の強靭なiPhoneケース Catalyst Case for iPhone 6' },
      ]
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
.highly-recommended-2015-0731 {
  p {
    line-height: 1.5em;
    font-size: 18px;
    color: #1a0708;
  }
  ul li {
    list-style: none;
    margin-bottom: 2px;
  }
}
</style>