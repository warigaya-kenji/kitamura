<template>
  <v-app>
    <div class="okamoto-yutaka">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy :color="'#3eabd2'" />
        <div class="leofoto">
          <h1 class="mb-5 tx-24 li-h2 font-weight-bold">
            航空写真家 <span class="tx-46">岡本豊</span>先生の<br class="sp" /><span class="tx-46">レオフォト三脚講座</span>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/qr_pc.png" max-width="57" max-height="57" class="mx-w100 rig pc"></v-img>
          </h1>
          <div class="cl qr-bx mb-2">
            <v-img
              src="/ec/images2/special/camera/okamoto-yutaka/it02.webp"
              alt="航空写真家 岡本豊先生のレオフォト三脚講座"
              max-width="893"
              max-height="596"
            ></v-img>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/qr_sp.png" max-width="114" max-height="114" class="qr sp"></v-img>
          </div>

          <!-- ↓プロフィール -->
          <h2 class="tx-28 li-h15 cl"><v-icon color="#42bcd1" left>far fa-comment-dots</v-icon> プロフィール</h2>
          <v-container class="cl">
            <v-row dense>
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/okamoto-yutaka/okamoto.webp" max-width="337" max-height="506" alt="岡本 豊さん"></v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p class="mb-0 text-h6">岡本 豊さん</p>
                <p>
                  1972年 兵庫県生まれ 大阪芸術大学卒業後、企業の広告写真やポートレートを中心に撮影。<br />
                  ボーイング787に魅了され、活躍の場を本格的に航空機撮影にスイッチ。<br />
                  現在、月刊エアライン誌にて「Go! Go! 787」の連載、航空会社の撮影、セミナー等で活動中。<br />
                  年間50回以上ボーイング787に搭乗。魅力を追う旅へ飛んでいます。 <br />Canon CPS会員 EOS学園講師
                </p>
                <v-btn
                  block
                  dark
                  color="#3b5998"
                  height="47"
                  class="text-transform mb-2"
                  @click="linkToOtherWindow('https://www.facebook.com/okamoto.yutaka1/')"
                >
                  <v-icon left small>fab fa-facebook</v-icon> Facebook <v-icon right small>fas fa-chevron-right</v-icon>
                </v-btn>
                <v-btn
                  block
                  dark
                  color="#d23072"
                  height="47"
                  class="text-transform mb-2"
                  @click="linkToOtherWindow('https://www.instagram.com/yutaka_okamoto/')"
                >
                  <v-icon left small>fab fa-instagram</v-icon> Instagram <v-icon right small>fas fa-chevron-right</v-icon>
                </v-btn>
                <v-btn block dark color="#1da1f2" height="47" v-scroll-to="'#gallery'">
                  <v-icon left small>fas fa-plane</v-icon> ギャラリー <v-icon right small>fas fa-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <!-- ↓はじめに... -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>はじめに...</h2>
          <p class="pa-sm-4 pa-2 cl">
            最新のデジタルカメラは、超高感度で撮影してもノイズが少なくなり、レンズによっては手ブレ補正機能も搭載され、日中の撮影での三脚の必要性は以前に比べると低くなりました。<br /><br />
            とはいえ、旅先などで出会ったきれいな夜景や夕陽、友人や家族との記念撮影など、三脚があるとさらにいいものが撮れるシーンは数多くあります。<br /><br />
            私は、低速シャッターでの被写体のブレを生かして動感ある写真撮影をする時は、必ず三脚を使用するようにしています。機材と一緒に大きく重い三脚を実際に持ち歩くことは本当に大変でしたが、軽量カーボン三脚「
            <span class="poins">レオフォト LS–284CEX</span> 」の登場によって、撮影時の三脚の使用回数が以前より格段に増えました。<br /><br />
            今回は、私が使用しているお気に入りのカーボン三脚「 <span class="poins">レオフォト LS–284CEX</span> 」の魅力をご紹介したいと思います。
          </p>
          <h3 class="mt-5 tx-22 li-h15 tx-mei pa-sm-4 pa-2 tx-no">
            岡本豊先生のお気に入りカーボン三脚<br />
            レオフォト LS-284CEX ＋ BV-10 LSレンジャーシリーズ三脚
          </h3>

          <v-row class="pa-sm-4 pa-2">
            <v-col cols="12" sm="7">
              <p class="tx-22 bd-pt">★特徴★ とにかく軽量でコンパクトな三脚！</p>
              <p class="mt-5">
                私は、ボーイング787をメインに日本全国で撮影しています。撮影を始めた頃は、自動車での遠征が主だったため、三脚の重量や大きさは、さほど気にせず大型の三脚を使っていました。<br /><br />
                日本各地への撮影が増えていくにつれ、飛行機での移動が多くなり、手荷物の制限、空港からの公共交通機関での移動を考慮した小型軽量の三脚の必要性を感じるようになりました。<br /><br />
                スーツケースに入る小型のカーボン三脚「
                <span class="poins">レオフォト LS–284CEX</span> 」の登場で、手荷物を減らすことができ、電車やバスでの移動も楽になりました。<br />
                また、飛行機撮影では、足元の悪い場所を30分かけての登山や、海岸沿いの砂浜、雪道を歩くことも多々あります。<br />
                そんな時も、気軽に持って行くことができるようになり、手持ち撮影が難しい日没後の撮影・夜の撮影も楽しくなりました。
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="/ec/images2/special/camera/okamoto-yutaka/it06.webp" max-width="327" max-height="491" alt="レオフォト LS-284CEX"></v-img>
            </v-col>
          </v-row>
          <div class="pa-sm-4 pa-2">
            <v-img
              src="/ec/images2/special/camera/okamoto-yutaka/it001.webp"
              max-width="863"
              max-height="576"
              alt="レオフォト LS–284CEXと岡本豊先生 日没後の撮影"
            ></v-img>
          </div>

          <div class="pa-sm-4 pa-2 bd-buy mt-7">
            <h3 class="tx-18 pa-sm-4 pa-2 li-h15 tx-no">
              岡本 豊先生ご愛用の<span class="poins">レオフォト LS-284CEX ＋ BV-10 LSレンジャー三脚</span> ご購入はこちら！
            </h3>
            <div class="w50pr mx-auto pa-sm-4 pa-2">
              <orangeBtn :btntxt="'購入ページへ行く'" :href="'/ec/special/camera/okamoto-yutaka/leofoto'" :height="'65px'" :btnColor="'orange'" />
            </div>

            <div class="mt-5 mb-2 pa-sm-4 pa-2">
              <h2 class="tx-24 li-h12"><v-icon color="#42bcd1" left>fas fa-plane</v-icon>岡本豊先生監修 レオフォト オリジナル三脚セット</h2>
              <p class="pa-sm-4 pa-2 mb-0">
                岡本豊先生監修の「レオフォト
                オリジナルアクセサリーキット」をご紹介しています。飛行機撮影や夜の撮影、三脚初心者の方におすすめです。ぜひご覧ください！
              </p>
              <a href="https://shop.kitamura.jp/ec/special/camera/okamoto-yutaka/set" target="_brank">
                <v-img
                  src="/ec/images2/special/camera/okamoto-yutaka/sougo.webp"
                  max-width="580"
                  max-height="325"
                  alt="レオフォト オリジナル三脚セット"
                  class="mx-auto"
                ></v-img>
              </a>
              <div class="w50pr mx-auto pa-sm-4 pa-2">
                <orangeBtn :btntxt="'ページを見る'" :href="'/ec/special/camera/okamoto-yutaka/set'" :height="'65px'" :btnColor="'orange'" />
              </div>
            </div>
          </div>

          <!-- ↓撮影現場での活用法 -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>撮影現場での活用法</h2>
          <p class="pa-sm-4 pa-2 mb-0 cl">
            私の場合、500mmや600mmと言った超望遠レンズを使って撮影することが多く、レンズをしっかり支えてくれる強度がある三脚が必要になります。<br />
            高画素のカメラと超望遠レンズの組み合わせでは、日中時でもブレを拾ってしまうので、必ず三脚を使用しています。<br /><br />
            この「 <span class="poins">レオフォト LS–284CEX</span> 」と、ビデオ雲台「
            <span class="poins">BV-10</span>
            」のセットは、軽量にも関わらず、重いカメラとレンズをしっかりと支えてくれるので、風の強い日でも安心してシャープな画質を狙えます。<br />
            重いレンズもしっかりと水平をキープでき、積極的に流し撮りにも挑戦できます。
          </p>
          <div class="pa-sm-4 pa-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt01.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOS 1DX Mark III ＋ EF500mm F4L IS II | photo by.岡本 豊</p>
          </div>

          <!-- ↓長時間露光撮影編 -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>長時間露光撮影編</h2>
          <p class="pa-sm-4 pa-2 mb-0 cl">
            長時間露光撮影では、三脚は望遠レンズとカメラの重さに耐える必要があるので、ある程度しっかりとしたものを選ぶ必要があります。<br />
            「
            <span class="poins">レオフォト LS–284CEX</span>
            」は軽量コンパクトなカーボン三脚なので、その辺りが大丈夫なのかと、１時間３０分かけてテストをしてみました。
          </p>
          <div class="pa-sm-4 pa-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt02.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOSR ＋ EF16-35mm F4L IS | photo by.岡本 豊</p>
          </div>
          <p class="pa-sm-4 pa-2">
            この写真は、１カット30秒露光した写真を100カット撮影しています。<br />
            その後、CANONの「DPP4」で比較明合成を行い、一枚ずつ重ねました。<br />
            100カットの中に１枚でもブレがあると光跡がずれてしまい、ピントがボケた写真になってしまいます。<br />
            「 <span class="poins">レオフォト LS–284CEX</span> 」と「
            <span class="poins">BV-10</span> 」の素晴らしい精度が、この作品を見事に完成させてくれました。
          </p>
          <div class="w50pr ml-auto pa-sm-4 pa-2">
            <orangeBtn :btntxt="'購入ページへ行く'" :href="'/ec/special/camera/okamoto-yutaka/leofoto'" :height="'65px'" :btnColor="'orange'" />
          </div>

          <!-- ↓三脚を使った長時間露光撮影のポイント -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>三脚を使った長時間露光撮影のポイント</h2>
          <p class="pa-sm-4 pa-2 mb-0 cl">
            <v-icon small left color="black">fas fa-star</v-icon>ポイント１<br />
            なるべく風の影響を受けないようにするために、写真のように三脚の設置に工夫が必要です。<br />
            とてもコンパクトなので、設置がしやすいのも、この「 <span class="poins">レオフォト LS–284CEX</span> 」の魅力の一つです。
          </p>
          <div class="pa-sm-4 pa-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/it002.webp" max-width="863" max-height="575" alt="国際デッキで三脚設置"></v-img>
            <p class="text-body-2">photo by.岡本 豊</p>
          </div>
          <p class="pa-sm-4 pa-2 mb-0">
            <v-icon small left color="black">fas fa-star</v-icon>ポイント２<br />
            飛行機がスポットに駐機中と、プッシュバックからエンジンスタートまで停止する数分間が撮影チャンス。<br />
            背景に、通過する機体や車を入れることで、華やかな写真になります。
          </p>
          <div class="pa-sm-4 pa-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/ga01.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">photo by.岡本 豊</p>
          </div>
          <p class="pa-sm-4 pa-2 mb-0">
            ISOをあげると目立ってくるのがノイズ。<br />
            ここはISO感度を下げて三脚を使い、露光時間で明るさを調整。<br />
            風が強い時や、少しカメラを離れる際は、ストラップ (Strap-28LS) を利用することで、万が一、機材が倒れるのを防ぐことができるのでおすすめです。
          </p>
          <div class="px-4 py-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt03-1.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOSR ＋ EF500mm F4L IS II | photo by.岡本 豊</p>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt03-2.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOSR ＋ EF16-35mm F4L IS | photo by.岡本 豊</p>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt03-3.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOS 1DX Mark III ＋ EF500mm F4L IS II | photo by.岡本 豊</p>
          </div>
          <div class="w50pr ml-auto pa-sm-4 pa-2">
            <orangeBtn :btntxt="'購入ページへ行く'" :href="'/ec/special/camera/okamoto-yutaka/leofoto'" :height="'65px'" :btnColor="'orange'" />
          </div>

          <!-- ↓流し撮り撮影編 -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>流し撮り撮影編</h2>
          <v-container class="cl">
            <v-row>
              <v-col cols="12" sm="6">
                <p>
                  「
                  <span class="poins">レオフォト LS–284CEX</span>
                  」はコンパクトなので、空港の展望デッキなど、他の撮影者や見学者が多い混雑時でも、迷惑になりにくいのが特徴です。<br /><br />
                  まずは、しっかりと三脚を設置すること。<br />
                  次に、三脚付属のレベライザーで水平を確認することも大切です。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/camera/okamoto-yutaka/it05.webp" max-width="417" max-height="278" alt="三脚付属のレベライザー"></v-img>
                photo by.岡本 豊
              </v-col>
            </v-row>
          </v-container>
          <p class="pa-sm-4 pa-2">
            きちんと調整してからカメラを取り付けて、飛行機がいない状態でカメラを横方向にスイングさせ、光跡がまっすぐに撮影できているか確認してからが本番です。<br /><br />
            風向きによって、飛行機の離着陸の方向が変わってしまった場合など、急いで他のポイントへ移動する際も「
            <span class="poins">レオフォト LS–284CEX</span> 」は軽量なので楽々です。
          </p>
          <div class="px-4 py-2">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt04-1.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOSR ＋ EF70-200mm F2.8 | photo by.岡本 豊</p>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/pt04-2.webp" max-width="863" max-height="575" alt="ボーイング787 | photo by.岡本 豊"></v-img>
            <p class="text-body-2">Canon EOS 1DX-Mark III ＋ EF500mm F4L IS II | photo by.岡本 豊</p>
          </div>

          <!-- ↓航空写真ギャラリー -->
          <h2 class="mt-10 mb-5 tx-24 li-h2" id="gallery">
            <v-icon color="#42bcd1" left>fas fa-plane</v-icon> 航空写真家 岡本 豊先生 撮影<br /><span class="tx-46">航空写真ギャラリー</span>
          </h2>
          <div class="cl"></div>
          <carousels :carousels="carousels" />

          <!-- ↓最後に... -->
          <h2 class="mt-15 mb-2 tx-28 li-h12"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>最後に...</h2>
          <p class="pa-sm-4 pa-2 mb-0 cl">
            ご紹介させていただいた「 <span class="poins">レオフォト LS–284CEX</span> 」ですが、私が気に入っているのは、性能だけではありません。<br />
            なんと言ってもカーボン柄の外観は見た目にも美しいです。<br />
            また脚の開脚もスムーズで、加工精度の高さを感じます。<br /><br />
            アルミの素材は7075と呼ばれる航空機用のものとのこと、飛行機をメインに撮影する僕には嬉しい響きです。<br />
            表面もアルマイト塗装により、握った感じが心地良くて、持ちやすく傷がつきにくいのも特徴。<br /><br />
            僕の三脚には、オプションで三脚用ストラップ (Strap-28LS)・レンズサポート(VR-250) ・三脚用ハンドグリップ(LW-28)
            、また雨上がりや、滑りやすい斜面時には三脚用石突ゴム（LF-28) に交換して、場面に応じてカスタマイズしています。<br /><br />
            今後もアクセサリーが続々と予定されているとのことで、Leofotoから目が離せません。
          </p>
          <div class="px-4 py-2">
            <v-img
              src="/ec/images2/special/camera/okamoto-yutaka/it01.webp"
              max-width="863"
              max-height="575"
              alt="レオフォト LS-284CEX | photo by.岡本 豊"
            ></v-img>
            <p class="text-body-2">photo by.岡本 豊</p>
          </div>

          <div class="pa-sm-4 pa-2 bd-buy mt-7">
            <h3 class="tx-18 pa-sm-4 pa-2 li-h15 tx-no">
              岡本 豊先生ご愛用の<span class="poins">レオフォト LS-284CEX ＋ BV-10 LSレンジャー三脚</span> ご購入はこちら！
            </h3>
            <div class="w50pr mx-auto pa-sm-4 pa-2">
              <orangeBtn :btntxt="'購入ページへ行く'" :href="'/ec/special/camera/okamoto-yutaka/leofoto'" :height="'65px'" :btnColor="'orange'" />
            </div>
          </div>

          <!-- ↓おすすめ レオフォト レンジャーシリーズ三脚 -->
          <h2 class="mt-8 mb-2 tx-20 ls-08"><v-icon color="#42bcd1" left>fas fa-shopping-cart</v-icon> おすすめ レオフォト レンジャーシリーズ三脚 など</h2>
          <div class="cl mb-2"></div>
          <product-list-by-special-id class="mb-5" :specialId="4749" />

          <!-- ↓ショッピングクレジット -->
          <h2 class="mt-4 mb-5 tx-20 ls-06 lin-h12">
            <span class="tx-14">レオフォト三脚を買うなら お支払いラクラク</span><br /><v-icon color="#42bcd1" left>fas fa-shopping-cart</v-icon>
            ショッピングクレジット
          </h2>
          <div class="cl"></div>
          <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" :isTitle="false" />

          <snsShare :title="'航空写真家 岡本豊先生のレオフォト三脚講座'" />

          <!-- ↓おすすめ特集・プリントサービス -->
          <h2 class="tx-20 ls-08 cl mb-5 mt-10"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>おすすめ特集・プリントサービス</h2>
          <div class="cl"></div>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import Carousels from '@/components/common/special/carousels.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
import SnsShare from '@/components/common/special/sns-share.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'okamoto-yutaka',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    orangeBtn: OrangeBtn,
    carousels: Carousels,
    'product-list-by-special-id': ProductListBySpecialId,
    shoppingCredit: ShoppingCredit,
    snsShare: SnsShare,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = '航空写真家 岡本豊先生のレオフォト三脚講座 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '飛行機撮影におすすめカーボン三脚をご紹介！航空写真家 岡本豊先生のレオフォト三脚講座｜カメラのキタムラネットショップ');
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '航空写真家 岡本豊先生のレオフォト三脚講座',
          disabled: true
        }
      ],
      carousels: [
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga01.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga02.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga03.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga04.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga05.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ga06.jpg',
      ],
      installmentPaymentExampleList: [
        { productPrice: '74,250', numberOfDivisions: '24', monthlyPayment: '3,094' },
        { productPrice: '68,310', numberOfDivisions: '20', monthlyPayment: '3,416' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/tripod',
          img: '	https://shopimg.kitamura.jp/images/banner/3253.gif',
          alt: 'おすすめ三脚特集'
        },
        {
          href: '/ec/special/general/photocon-learn',
          img: 'https://shop.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
    });

    const linkToOtherWindow = (url: string | undefined) => {
      window.open(url, '_blank');
    };

    return {
      ...toRefs(state),
      noimage,
      linkToOtherWindow
    };
  }
});
</script>

<style lang="scss" scoped>
.leofoto {
  margin: 20px 0 60px 0;
  padding: 0 3%;
  box-sizing: border-box;
}
.okamoto-yutaka h1,
.okamoto-yutaka h2 {
  width: 100%;
  font-weight: bold;
  font-family: '游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif;
  float: left;
  clear: both;
  background: linear-gradient(to right, rgba(66, 188, 209, 1) 3%, rgba(43, 102, 212, 1) 50%, rgba(6, 58, 101, 1) 96%);
  -webkit-background-clip: text;
  color: transparent;
}
.okamoto-yutaka p {
  line-height: 1.9em;
  font-size: 16px;
}
.li-h2 {
  line-height: 2em;
}
.li-h12 {
  line-height: 1.2em !important;
}
.li-h15 {
  line-height: 1.5em;
}
.tx-14 {
  font-size: 14px !important;
}
.tx-18 {
  font-size: 18px !important;
}
.tx-20 {
  font-size: 20px !important;
}
.tx-22 {
  font-size: 22px !important;
}
.tx-24 {
  font-size: 24px;
}
.tx-28 {
  font-size: 28px !important;
}
.tx-46 {
  font-size: 46px;
}
.rig {
  float: right;
}
.cl {
  clear: both;
}
.poins {
  background-color: #e6feff;
  color: #144ea7;
  font-weight: bold;
  padding: 0 3px;
}
.tx-mei {
  font-family: 'メイリオ', 'ヒラギノ角ゴ Pro W3', 'ＭＳ Ｐゴシック', Osaka, sans-serif !important;
}
.bd-pt {
  border-bottom: 5px solid #0a30aa;
}
.tx-no {
  font-weight: normal !important;
  text-decoration: none;
}
.bd-buy {
  border: 1px dashed #897f76;
}
.w50pr {
  width: 50%;
}
.ls-08 {
  letter-spacing: 0.08em;
}
.ls-06 {
  letter-spacing: 0.06em;
}
@media screen and (min-width: 950px) {
  .sp {
    display: none;
  }
}
@media screen and (max-width: 655px) {
  .li-h2 {
    line-height: 1.2em;
  }
  .tx-46 {
    font-size: 24px;
  }
  .sp {
  }
  .pc {
    display: none;
  }
  .qr {
    position: relative;
    width: auto;
    z-index: 200;
    bottom: 130px;
    left: 0px;
  }
  .w40pr,
  .w50pr,
  .w60pr {
    width: 100%;
  }
  .pd15 {
    padding: 0px;
  }
}
@media screen and (max-width: 414px) {
  .qr-bx {
    position: static;
    max-height: 250px !important;
  }
}
</style>


