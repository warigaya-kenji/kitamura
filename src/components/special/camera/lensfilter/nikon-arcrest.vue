<template>
  <v-app>
    <div class="lensfilter-nikon-arcrest">
      <div class="main-contents-wrap">
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/camera/lensfilter/nikon-arcrest/fan-fair_01.jpg'
              : '/ec/images2/special/camera/lensfilter/nikon-arcrest/fan-fair_01sp.jpg'
          "
          max-width="100%"
          height="auto"
          class="mt-4"
        ></v-img>

        <v-container class="pa-0 mt-5">
          <p class="pa-1 line-height float-right">
            <a href="/ec/special/camera/lensfilter/nikon-arcrest-nd" class="py-2 px-4 px-sm-6 bg-gly boxx">
              ARCREST ND(減光)フィルターはこちら<v-icon right color="white">fas fa-chevron-right</v-icon></a
            >
          </p>

          <h1>ナノクリスタルコート採用のNIKKORレンズにおすすめ保護フィルター</h1>

          <v-row class="mt-4">
            <v-col cols="12" sm="6">
              <p class="pa-4 text-body-1">
                レンズ本来の描写力に極限まで迫る、高性能レンズにぴったりな保護フィルター『ARCREST』がニコンから登場！<br />
                「せっかく購入した高性能レンズの保護用にフィルターは装着したいが、画質の劣化は避けたい」<br />
                そんなユーザーのご要望にお応えする、高性能プロテクションフィルターです。<br /><br />
                <b>特にナノクリスタルコート採用のNIKKORレンズにおすすめです！</b>
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image-item.png"
                alt="商品"
                max-width="376"
                max-height="224"
                class="mx-auto"
              ></v-img>
            </v-col>
          </v-row>

          <!--==================== おすすめポイント１ ====================-->
          <v-sheet color="#2b2929" class="mt-2 rounded-lg">
            <h2 id="type" class="white--text">
              おすすめPoint1<br />
              レンズ本来の描写力に極限まで迫る光学性能
            </h2>
          </v-sheet>
          <h3>解像力の比較</h3>
          <div class="px-7">
            <p class="mt-4 line-height">
              (赤枠内を拡大) ニコン「ARCREST」と各社同等クラスの保護フィルターの解像力を比較しました。
              風景撮影のディテール部分も、ARCRESTはレンズ本来の描写力に近い高い解像力で描写できます。
              ARCRESTであれば、レンズの保護をすると同時に高性能レンズの描写力を損なうことなく、本来の描写に迫る高画質を得ることが可能です。
            </p>
            <v-img src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image01.jpg" alt="image" max-width="736" max-height="491" class="mx-auto"></v-img>

            <v-row class="mt-2">
              <v-col cols="12" sm="4" v-for="(resolvingPower, i) in resolvingPowerList" :key="i">
                <v-card outlined class="pa-4" elevation="6">
                  <v-card-title class="pa-0 height-3"> {{ resolvingPower.txt }} </v-card-title>
                  <div class="zoom">
                    <v-img :src="resolvingPower.src" max-height="209" max-width="308" class="hover" @click="() => showImg(i)"> </v-img>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <h3 class="mt-12">ゴースト発生比較</h3>
          <div class="px-7">
            <p class="mt-4">
              (赤枠内を拡大) 強い光源のある夜景の都市風景でゴーストの出方を比較しました。<br />
              「フィルターなし」では、ほとんどゴーストの発生は確認できません。<br />
              ARCRESTでは、うっすらとゴーストの発生は確認できますが、ほとんど気にならない程度まで抑えられています。<br />
              一方、一般的な保護フィルターはじめ、A社B社保護フィルターでは、ほぼ同じ位置にゴーストの発生が確認できます。
            </p>
            <v-img
              src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image03.jpg"
              alt="ゴースト発生比較"
              max-width="736"
              max-height="491"
              class="mx-auto"
            ></v-img>
            <v-row class="mt-2">
              <v-col cols="12" sm="4" v-for="(ghostOccurrenceComparison, i) in ghostOccurrenceComparisonList" :key="i">
                <v-card outlined class="pa-4" elevation="6">
                  <v-card-title class="pa-0 height-3"> {{ ghostOccurrenceComparison.txt }} </v-card-title>
                  <div class="zoom">
                    <v-img :src="ghostOccurrenceComparison.src" max-height="209" max-width="308" class="hover" @click="() => showImg(i + 3)"> </v-img>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <h3 class="mt-12">点光源時の比較</h3>
          <div class="px-7">
            <p class="mt-4">
              (赤枠内を拡大) 保護フィルターの性能が影響しやすい天体撮影のジャンルで「フィルターなし」と「ARCREST装着」を比較しました。<br />
              天体撮影では、解像力低下やフレアの影響で小さい星が写らなくなったり、カラーバランスがくずれて星の色に影響が発生します。<br />
              「フィルターなし」と「ARCREST装着」を比較しても遜色のない画質を得られており、フィルターなしに匹敵する結果となっています。
            </p>
            <v-img
              src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image07.jpg"
              alt="点光源時の比較"
              max-width="736"
              max-height="491"
              class="mx-auto"
            ></v-img>
            <v-row class="mt-2">
              <v-col cols="12" sm="4" v-for="(spotlight, i) in spotlightList" :key="i">
                <v-card outlined class="pa-4" elevation="6">
                  <v-card-title class="pa-0 height-3"> {{ spotlight.txt }} </v-card-title>
                  <div class="zoom">
                    <v-img :src="spotlight.src" max-height="209" max-width="308" class="hover" @click="() => showImg(i + 8)"> </v-img>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <h3 class="mt-12">これほどの光学性能を実現できた理由</h3>
          <h4 class="py-2 px-5 text-h6">1.片面反射率0.1％の超低反射ARコート「ゼロワンARコート」採用</h4>
          <div class="px-7">
            <p class="mt-4">
              ※ARコート：Anti Reflectionコート(反射防止コート)<br />
              ARCRESTは”低反射”にこだわり、多層膜ARコート「ゼロワンコートARコート」採用で、業界初の片面反射率0.1％を実現していす。波長の違いによる反射率のばらつきが小さく、カラーバランスの乱れを極限まで抑え、ゴースト・フレアの発生を低減。
              フィルターを装着することで生じるレンズ本来の描写力の低下を最小限にとどめ、コントラストが高く階調豊かな映像表現を可能にしています。<br />
              「ゴーストの発生比較」や「点光源時の比較」でご紹介している通り、夜景・星景の撮影でも描写への影響がほとんどありません。
            </p>
            <v-img
              src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image04.jpg"
              alt="片面反射率0.1％の超低反射ARコート「ゼロワンARコート」採用"
              max-width="736"
              max-height="300"
              class="mx-auto"
            >
            </v-img>
          </div>
          <h4 class="py-2 px-5 text-h6">2.高度な研磨技術により実現した、極めて高い平面精度</h4>
          <div class="px-7">
            <p class="mt-4">
              新たに開発した高精度な研磨技術により、干渉縞が1本以下という極めて高い平面精度を実現。
              ガラス面の高精度な平面性により入射光の波面乱れを極限まで抑えており、レンズ本来の描写を損ないません。 夜景、星景、風景の撮影にもおすすめです！
            </p>
            <v-img
              src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image05.jpg"
              alt="高度な研磨技術により実現した、極めて高い平面精度"
              max-width="736"
              max-height="250"
              class="mx-auto"
            >
            </v-img>
          </div>

          <h4 class="py-2 px-5 text-h6">3.マウントによるガラスの歪みを低減する「フラットプレーンシステム」</h4>
          <div class="px-7">
            <p class="mt-4">
              フィルターのガラスをフレームにバネや金属リングでマウントするこれまでの方法では、ガラス面に応力が加わるため、ガラス面に歪みを引き起こす原因となっていました。しかし、ニコンの新規技術「フラットプレーンシステム」では、ガラスとフレームの間に特殊なエラストマーを挿入して、ガラスにかかる応力を大幅に軽減し、マウントによる歪みを最小限に抑えています。
              また高温・低温に耐えられるエラストマーで、酷暑・極寒の環境下においてもガラスの保持力は低下しません。
              フィルターフレームのガラス保持力は、400Gの耐衝撃試験※をクリアーするガラスの脱落やフィルターフレームの分解が発生しにくい設計です。<br /><br />※ARCREST試験条件による。ガラス保持力の試験であり、ガラス強度の試験ではありません。
            </p>
          </div>

          <!--==================== おすすめポイント2 ====================-->
          <v-sheet color="#2b2929" class="mt-15 rounded-lg">
            <h2 id="howto" class="white--text">
              おすすめPoint2<br />
              使い心地を考慮した機能と設計
            </h2>
          </v-sheet>
          <h3>1、優れた撥水・撥油コート採用</h3>
          <div class="px-7">
            <p>
              独自の撥水・撥油コートの採用により、水滴・油・指紋などの汚れが付着しにくく、万一付着しても容易に拭き取れる高い防汚性能を発揮します。試験荷重200gで1000回以上の拭き取りテスト※に合格した高い耐久性も兼ね備えています。
              <br /><br />※ARCREST試験条件による。NIKKORレンズのフッ素コートとは異なります。
            </p>
            <v-img
              src="/ec/images2/special/camera/lensfilter/nikon-arcrest/image06.jpg"
              alt="フラッシュ（ストロボ）を上手に活用しましょう"
              max-width="736"
              max-height="500"
              class="mx-auto"
            >
            </v-img>
          </div>

          <h3 class="mt-14">２、薄型フレーム設計、ガラス端面の黒塗り加工</h3>
          <div class="px-7">
            <p>
              一般的な保護フィルターに比べ約30％の厚さを削減した、3.4mm※1(95mmは3.9mm)の薄型フレーム設計。
              これにより、超広角レンズ使用時もケラレが発生しません。※2
              フィルターフレーム表面にはキズに強いブラックアルマイト処理を実施。さらにフィルターフレーム先端には、ローレット加工を施し、指がかりがよく、スムーズな取り外しが可能です。
              またフィルターフレームは光の反射を抑えるサテン仕上げとし、ガラス端面には斜めからの入射光の内面反射を軽減する黒塗り加工を施して、逆光時のゴースト・フレアの抑制をアシストします。
              <br /><br />※1 ねじ込み部分を除く <br />※2017年5月31日現在、発売中のNIKKORレンズ装着時
            </p>
            <v-img
              src="	/ec/images2/special/camera/lensfilter/nikon-arcrest/image10.jpg"
              alt="薄型フレーム設計、ガラス端面の黒塗り加工"
              max-width="736"
              max-height="150"
              class="mx-auto"
            >
            </v-img>
          </div>

          <!--==================== おすすめポイント３ ====================-->
          <v-sheet color="#2b2929" class="mt-15 rounded-lg">
            <h2 id="fun" class="white--text">
              おすすめPoint3<br />
              ニコン純正 Made in JAPAN
            </h2>
          </v-sheet>

          <div class="px-7">
            <h3>ニコン純正の高性能保護フィルターは信頼の日本製</h3>
            <p>
              ニコン一眼レフカメラを知り尽くした上での ニコン純正の高性能保護フィルターは信頼の日本製です。 ARCRESTの名前は、”AR”=「Anti
              Reflection(反射防止)」、 "CREST"=「頂点」に由来します。 「レンズの保護」と「高画質」を両立させたいユーザーにおすすめの レンズ保護フィルターです。
            </p>
            <h3>ナノクリスタルコート採用のNIKKORレンズにおすすめです！</h3>
            <div class="text-center">
              <v-hover v-slot="{ hover }">
                <v-btn
                  :color="hover ? '#de1b27' : '#660000'"
                  :width="$vuetify.breakpoint.mdAndUp ? '750' : '270'"
                  height="100"
                  href="/ec/list?narrow18=0&keyword=ナノクリスタルコート&category=交換レンズ&q=ナノクリスタルコート&path=交換レンズ&index=&sort=number20,Number17,Score&searchbox=1"
                  class="rounded-lg"
                >
                  <span class="white--text text-body-1"
                    >ナノクリスタルコート採用の<br v-if="$vuetify.breakpoint.smAndDown" />NIKKORレンズ一覧<br />詳しくはこちら</span
                  >
                </v-btn>
              </v-hover>
            </div>
          </div>

          <!--==================== ARCREST PROTECTION FILTER 商品一覧 ====================-->
          <v-sheet color="#2b2929" class="mt-15 rounded-lg">
            <h2 id="fun" class="white--text">ARCREST PROTECTION FILTER 商品一覧</h2>
          </v-sheet>
          <product-list-by-special-id class="mb-5" :specialId="2910" />
        </v-container>

        <div class="my-7 s-bnr">
          <p>おすすめ特集・サービス</p>
        </div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        <br />

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <vue-easy-lightbox :visible="visible" :imgs="images" :index="index" @hide="handleHide"></vue-easy-lightbox>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'lensfilter-nikon-arcrest',
  components: {
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: () => {
    document.title = 'ナノクリスタルコート搭載のニコンレンズにおすすめ保護フィルター ARCREST | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ナノクリスタルコート採用のNIKKORレンズにおすすめ保護フィルター ニコンARCRESTの購入はカメラのキタムラネットショップよりどうぞ！')

    const state = reactive({
      visible: false,
      index: 0, // default: 0
      images: [
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image02.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image02-a.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image02-b.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image03-00.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image03-01.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image03-02.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image03-03.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image03-04.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image07-00.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/image07-01.jpg',
      ],
      resolvingPowerList: [
        { txt: 'ARCREST', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-resolution.jpg' },
        { txt: 'A社保護フィルター\n(同等クラス品)', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-resolution-a.jpg' },
        { txt: 'B社保護フィルター\n(同等クラス品)', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-resolution-b.jpg' },
      ],
      ghostOccurrenceComparisonList: [
        { txt: 'フィルターなし', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-ghost00.jpg' },
        { txt: 'ARCREST', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-ghost01.jpg' },
        { txt: '一般的な保護フィルター', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-ghost02.jpg' },
        { txt: 'A社保護フィルター\n(同等クラス品)', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-ghost03.jpg' },
        { txt: 'B社保護フィルター\n(同等クラス品)', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-ghost04.jpg' },
      ],
      spotlightList: [
        { txt: 'フィルターなし', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-light00.jpg' },
        { txt: 'ARCREST', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lensfilter/nikon-arcrest/arcrest-light01.jpg' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest-nd',
          img: 'https://shop.kitamura.jp/images/banner/7485.png',
          alt: 'ニコン ARCREST NDフィルター'
        },
        {
          href: '/ec/special/sale-fair/camera/lensfilter',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.gif',
          alt: '効果・種類が分かる！レンズフィルター特集'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ]

    });

    // 画像を拡大して表示する
    const showImg = (index: number) => {
      state.index = index;
      state.visible = true;
    }

    // 拡大画像を閉じる
    const handleHide = () => {
      state.visible = false;
    }

    return {
      ...toRefs(state),
      noimage,
      showImg,
      handleHide
    };
  }
});
</script>

<style lang="scss" scoped>
.lensfilter-nikon-arcrest {
  .bg-gly {
    background: linear-gradient(45deg, #848788 0%, #fff 50%, #848788 100%);
    color: #2a2a2a !important;
  }
  .boxx {
    display: block;
  }
  h1,
  h2,
  h3 {
    clear: both;
    border-radius: 6px;
    font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
    font-size: 160%;
    padding: 10px 20px;
    line-height: 1.2;
    color: #333333;
    font-weight: normal;
    margin-bottom: 12px;
  }
  .zoom {
    display: block;
    position: relative;
    &::before {
      content: url(/ec/images2/special/camera/lensfilter/nikon-arcrest/icon-zoom.png);
      position: absolute;
      bottom: -5px;
      right: 0px;
      z-index: 9;
    }
  }
  .height-3 {
    height: 3em;
  }
  @media screen and (max-width: 950px) {
    h1,
    h2,
    h3 {
      clear: both;
      font-size: 130%;
    }
  }
}
</style>
