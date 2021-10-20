<template>
  <v-app>
    <div class="graduation_entrance">
      <div class="main-contents-wrap">
        <!-- ↓ パンくずはbreadcrumbsコンポーネントを使用してください -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ このページのURLをコピーするはurlcopyコンポーネントを使用してください -->
        <urlcopy />

        <!-- ↓ ピンク色の外枠を作ります。 -->
        <v-container id="fullContent">
          <!-- ↓トップタイトル画像はpcとspで分かれている場合はtopTitleImgコンポーネントを使用してください。
                オプションはコンポーネント先のpropsに記載されているので適宣対応できるかと思います。 -->
          <topTitleImg
            :pcBackgroundImg="'https://shop.kitamura.jp/ts_rsc/734/images/topimage_01.png'"
            :spBackgroundImg="'https://shop.kitamura.jp/ts_rsc/734/images/topimage_sp_01.png'"
            :type="2"
            :height="'189'"
          />

          <!-- ↓テキストのスタイルはvuetifyのTypographyヘルパークラスを参考に適宣対応できます(https://vuetifyjs.com/ja/styles/text-and-typography)/-->
          <!-- ただ複雑なスタイルもあるかと思いますのでその時は既存ページのスタイルをコピペでもいいです。-->
          <h1 class="text-h6 grey--text text--darken-2 font-weight-bold">卒業/卒園式・入園/入学式におすすめビデオ・カメラ</h1>

          <!-- ↓以下クラスpa-2みたいに要素にパディングやマージンを指定したい時はスペーシングヘルパーを使用してください。(https://vuetifyjs.com/ja/styles/spacing/)/-->
          <p class="pa-2">
            入学式・卒業式を迎えられるご家族のみなさま、おめでとうございます。<br />
            卒業/卒園式・入園/入学式で、カメラ撮影やビデオ撮影を考えている、パパさん ママさん必見です！<br />
            カメラのキタムラ イチオシのビデオやデジカメの、おすすめ理由をまとめました。
          </p>

          <!--↓区切り線 -->
          <hr />

          <h2 class="pl-4 text-h6 brown--text text--darken-2 font-weight-bold">
            卒業/卒園式・入園/入学式におすすめ ビデオ・一眼レフ・レンズ・デジタルカメラはコレ
          </h2>

          <p class="pa-2 mb-4">
            ビデオなら、体育館で長時間の撮影をするので、手ブレに強いものがおすすめです。
            カメラなら、コンパクトで持ちやすく、望遠ズーム＆体育館でも明るく撮れるものがおすすめです。
          </p>

          <!-- ↓ 新製品系のページの価格・人気アクセサリーのコンポーネントで代用できますのでpriceAndPopularコンポーネントを使用してください。 -->
          <priceAndPopular :productDetailList="productDetailList" />

          <!-- ↓ 基本的に要素を均等に並べたいときやレスポンシブ対応したい時はvuetifyのグリッドシステムがおすすめです。
                 VuefityのGrid Systemとは・・
                 VuetifyのGrid SystemはFlexboxを利用しており、主にv-container, v-row, v-colの3つのコンポーネントを利用して設定を行なっていきます。
                 v-containerはGrid Systemを利用するための元になる入れ物を作るタグでv-containerの中にv-rowを入れます。v-rowの中にさらにv-colを入れます。v-rowの中には最大v-colを12個入れることができます。
                 使い方が分からない場合は以下のサイトや以下のソースコードを参考にしてください。
                 https://vuetifyjs.com/ja/components/grids/
                 https://qiita.com/rubytomato@github/items/07fe07e64482f8f03ef3 -->
          <v-row class="mt-8 mb-4">
            <v-col cols="12" sm="6" v-for="(navi, index) in naviList" :key="index">
              <v-hover v-slot="{ hover }">
                <a v-scroll-to="navi.href">
                  <v-btn :elevation="hover ? 0 : 6" block dark height="55" class="text-subtitle-1 pink-btn">
                    <v-icon small left dark>fas fa-check</v-icon>{{ navi.naviItem }}
                  </v-btn>
                </a>
              </v-hover>
            </v-col>
          </v-row>

          <!--↓区切り線 -->
          <hr />

          <h2 id="camera" class="pl-4 mb-2 text-h6 brown--text text--darken-2 font-weight-bold">
            おすすめの理由！キタムラおすすめビデオカメラ・一眼レフ・レンズ・デジタルカメラ
          </h2>
          <!-- ↓ 同じ構成が６回続いているのでこういう時はデータを用意し、v-forで回して表示した方がコードがすっきりしていいです -->
          <v-card flat class="pa-4 mb-7 balloon" v-for="(recommendedCamera, index) in recommendedCameraList" :key="index">
            <v-row>
              <v-col cols="12" sm="5">
                <a :href="recommendedCamera.href">
                  <v-img :src="recommendedCamera.src" max-width="280" max-height="250" class="mx-auto"></v-img>
                </a>
              </v-col>
              <v-col cols="12" sm="7">
                <h3 class="itmtitle">{{ recommendedCamera.title }}</h3>
                <p class="mt-6 mt-sm-2 including-line-breaks">{{ recommendedCamera.txt }}</p>
                <intenseRedBtn :btntxt="recommendedCamera.intenseRedBtntxt" :href="recommendedCamera.href" :height="'55'" />
                <orangeBtn
                  v-if="recommendedCamera.orangeBtntxt !== ''"
                  :btntxt="recommendedCamera.orangeBtntxt"
                  :href="recommendedCamera.orangeBtnHref"
                  :height="'55'"
                  :type="3"
                  :iconItem="'fas fa-chevron-circle-right'"
                />
              </v-col>
            </v-row>
          </v-card>

          <!--↓区切り線 -->
          <hr />

          <!--↓便利な商品をご紹介 -->
          <h2 id="gitem" class="pl-4 mt-12 mb-2 text-h6 brown--text text--darken-2 font-weight-bold">便利な商品をご紹介</h2>
          <p class="pa-2 mb-2">
            長時間撮影するビデオ動画は、手や腕がだるくなりやすいので、疲れにくい便利アイテムをご紹介！<br />しっかり固定する効果もあり、大きなテレビで見た際にあきらかに違いがわかります。
          </p>
          <p class="pa-2 mb-2">
            メモリーカードは、500枚ほど撮れるメディアがあれば十分です。<br />動画を撮ることも考えると、32GB以上の容量で、高速タイプのClass10以上がおすすめです。
          </p>
          <p class="pa-2">実は便利なチェキ・チェキプリンター。その場で印刷できるから、友達同士で写真を撮ってプレゼントしてあげると喜ばれます＊</p>
          <!--↓便利な商品も同じ構成が４つ横に並んでいるのでグリッドシステムとv-forでデータを用意して回して表示してます。
              もし横に２つ並べたいときは下のsm="3"をsm="6"にすれば２個ずつ並びます。sp表示ではcols="10"にしているので1個ずつ縦に表示されます。-->
          <v-row justify="center">
            <v-col cols="10" sm="3" v-for="(convenientProduct, index) in convenientProductList" :key="index">
              <a :href="convenientProduct.href">
                <v-img :src="convenientProduct.src" max-width="209" max-height="190" class="mx-auto hover mb-2"></v-img>
                <intenseRedBtn :href="convenientProduct.href" :height="'55'" />
              </a>
            </v-col>
          </v-row>

          <!--↓入学の準備におすすめ！なまえラベル＆お弁当生活におすすめ商品 -->
          <h2 class="pl-4 mt-8 mb-4 text-h6 brown--text text--darken-2 font-weight-bold">入学の準備におすすめ！なまえラベル＆お弁当生活におすすめ商品</h2>
          <v-row>
            <v-col cols="12" sm="6" v-for="(preparationForAdmission, index) in preparationForAdmissionList" :key="index">
              <v-card flat class="pa-4 balloon">
                <h3 class="itmtitle">{{ preparationForAdmission.title }}</h3>
                <p class="mt-6 mt-sm-2">{{ preparationForAdmission.txt }}</p>
                <a :href="preparationForAdmission.href">
                  <v-img :src="preparationForAdmission.src" max-width="350" max-height="130" class="mx-auto hover mb-4"></v-img>
                </a>
                <intenseRedBtn :href="preparationForAdmission.href" :height="'55'" />
              </v-card>
            </v-col>
          </v-row>

          <!--↓卒園/卒業・入園/入学を撮影した写真の「 整理 」におすすめプリントサービス -->
          <h2 id="print" class="pl-4 mt-12 mb-4 text-h6 brown--text text--darken-2 font-weight-bold">
            卒園/卒業・入園/入学を撮影した写真の「 整理 」におすすめプリントサービス
          </h2>
          <v-row class="mb-2">
            <v-col cols="12" sm="6" v-for="(printService, index) in printServiceList" :key="index">
              <v-card flat class="pa-4 balloon">
                <h3 class="itmtitle">{{ printService.title }}</h3>
                <p class="mt-6 mt-sm-2 including-line-breaks">{{ printService.txt }}</p>
                <a :href="printService.href">
                  <!--↓画像のサイズが異なる時は三項演算子、又はv-ifを使い、動的に変更してください -->
                  <v-img :src="printService.src" :max-width="index === 0 ? '405' : '348'" height="auto" class="mx-auto hover"></v-img>
                  <v-img :src="printService.src2" max-width="405" height="auto" class="mx-auto hover mb-4"></v-img>
                </a>
                <intenseRedBtn :btntxt="'詳しく見る'" :href="printService.href" :height="'55'" :iconItem="'fas fa-external-link-alt'" />
              </v-card>
            </v-col>
          </v-row>

          <!--↓区切り線 -->
          <hr />

          <!--↓卒園/卒業・入園/入学撮影のコツや『 ビデオ・カメラ選び 』に関する疑問にお答えしますQ＆A -->
          <h2 id="point" class="pl-4 mt-8 mb-4 text-h6 brown--text text--darken-2 font-weight-bold">
            卒園/卒業・入園/入学撮影のコツや『 ビデオ・カメラ選び 』に関する疑問にお答えしますQ＆A
          </h2>
          <v-row>
            <v-col cols="12" sm="6" v-for="(shootingTipsAndCameraSelection, index) in shootingTipsAndCameraSelectionList" :key="index">
              <v-card flat class="pa-4 balloon">
                <h3 class="itmtitle">{{ shootingTipsAndCameraSelection.title }}</h3>
                <p class="mt-6 mt-sm-2 including-line-breaks">{{ shootingTipsAndCameraSelection.txt }}</p>
                <a :href="shootingTipsAndCameraSelection.href">
                  <v-img :src="shootingTipsAndCameraSelection.src" max-width="350" max-height="130" class="mx-auto hover mb-4"></v-img>
                </a>
                <intenseRedBtn
                  :btntxt="shootingTipsAndCameraSelection.btntxt"
                  :href="shootingTipsAndCameraSelection.href"
                  :height="'55'"
                  :iconItem="index === 0 ? 'fas fa-external-link-alt' : 'fas fa-chevron-circle-right'"
                />
                <p class="mb-0">{{ index === 0 ? '※プリントサービスページへ移動します' : '※特集へ移動します' }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ページトップへ-->
        <p class="mt-2">
          <a href="#top">
            <v-img src="https://shop.kitamura.jp/ts_rsc/734/images/btn_gotop.gif" alt="ページトップへ" max-width="120" max-height="35" class="ml-auto"></v-img>
          </a>
        </p>

        <!-- ↓ SNSボタンはfacebookAndTwitterコンポーネントを使用してください -->
        <facebookAndTwitter />

        <!-- ↓ おすすめ特集・プリントサービスはrecommendedFeaturesコンポーネントを使用してください -->
        <div class="sougo tx-18"><v-icon left small color="#ffcc00">fas fa-crown tx-ki</v-icon> おすすめ特集・プリントサービス</div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <!--↓ページトップへ-->
        <p class="mt-2">
          <a href="#top">
            <v-img src="https://shop.kitamura.jp/ts_rsc/734/images/btn_gotop.gif" alt="ページトップへ" max-width="120" max-height="35" class="ml-auto"></v-img>
          </a>
        </p>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import ProductService from '@/logic/product.service';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { noimage } from '@/logic/utils';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import IntenseRedBtn from '@/components/common/special/intenseRedBtn.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'graduation_entrance',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,
    intenseRedBtn: IntenseRedBtn,
    orangeBtn: OrangeBtn,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    // ページタイトル
    document.title = '卒業・入学特集！おすすめのビデオカメラ・カメラ大集合！ | カメラのキタムラネットショップ'
    // description
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '卒業・入学特集！おすすめのビデオカメラ・カメラ大集合！カメラのキタムライチオシのビデオやデジカメと、おすすめの理由をまとめました。ビデオカメラ・一眼レフで晴れ姿を上手に残しましょう♪')

    const state = reactive({
      // パンくず情報をbreadcrumbsにセットします
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '卒業・入学特集！おすすめのビデオカメラ・カメラ大集合！',
          disabled: true
        }
      ],
      // ナビボタンのデータをnaviListにセットします
      naviList: [
        { naviItem: ' おすすめの理由をチェック', href: '#camera' },
        { naviItem: ' 便利な商品をご紹介', href: '#gitem' },
        { naviItem: ' おすすめプリントサービス', href: '#print' },
        { naviItem: ' 撮影のコツやカメラ選び Q&A', href: '#point' }
      ],
      // おすすめの理由！キタムラおすすめビデオカメラ・一眼レフ・レンズ・デジタルカメラのリストをrecommendedCameraListにセットします
      recommendedCameraList: [
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_c.png',
          href: '/ec/special/general/graduation_entrance/942',
          title: '強力な手ブレ補正機能をもつ★ビデオカメラ',
          txt: 'ベストポジションを探すうちに無理な体勢になり手ブレが気になってしまう…。そんなときには強力な手ブレ補正機能を持つ、このビデオカメラがおすすめ！走りながらの撮影にも耐えられるほどの強力な手ブレ補正で、大切な思い出をキレイに残せます♪\nさらに広角での撮影が可能ですので、室内でも全体を撮影でき、その場の雰囲気も無理なく撮影できるんです！',
          intenseRedBtntxt: 'ソニー デジタルHDビデオカメラ\nレコーダー HDR-CX680 ',
          orangeBtntxt: 'キタムラおすすめビデオカメラ もっと見る',
          orangeBtnHref: '/ec/special/general/graduation_entrance/1441'
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_b.png',
          href: '/ec/special/general/graduation_entrance/941',
          title: '追いかける瞳AFが人気のミラーレス一眼',
          txt: 'カメラ初心者のママさんには、追いかける瞳AFが人気の、こちらのミラーレス一眼がおすすめ！ このモデルは、カメラまかせで瞳をずっと追いかけ続けてくれてるので、シャッターを押すだけで、ピントの合った素敵な表情の写真が残せます♪\n標準ズーム ＋ 望遠ズームの「 ダブルズームキット 」の他、レンズ交換なしでもアップで撮れる「 高倍率ズームキット 」もあります。',
          intenseRedBtntxt: 'ソニー α6400 ダブルズームレンズキット',
          orangeBtntxt: '卒業・入学におすすめミラーレス もっと見る',
          orangeBtnHref: '/ec/special/general/graduation_entrance/1442'
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_a.png',
          href: '/ec/special/general/graduation_entrance/940',
          title: 'キレイな写真で残したいならデジタル一眼レフ',
          txt: 'お子様の晴れ舞台はキレイな写真で残したい。それならやっぱり一眼レフ！ お子様の予想外の動きにも対応できる高性能なオートフォーカスで、プロのようなキレイで印象的な写真が簡単に撮影できます♪\nさらに液晶モニターは角度を変えて動かすことができるので、撮影するときに便利！人ごみの上から手を伸ばして撮影したり、背の低いお子様に合わせた写真を撮ることもできます♪',
          intenseRedBtntxt: 'キヤノン EOS Kiss X9i ダブルズームキット ',
          orangeBtntxt: '卒業・入学におすすめ一眼レフ もっと見る ',
          orangeBtnHref: '/ec/special/general/graduation_entrance/939'
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_d.png',
          href: '/ec/special/general/graduation_entrance/2017',
          title: '光学28倍ズームを搭載した高倍率ズームデジカメ',
          txt: '手荷物をできるだけ減らしたい…。それならコンパクトボディに光学24倍ズームを搭載した、こちらのモデル！ 瞳を検出してピント合わせをする「 瞳AF機能を搭載 」で、被写体がうつむいている状態や、逆光で顔が暗いシーンでも、ピントの合った写真が撮れちゃいます♪\n簡単操作なのに高画質「 プレミアムおまかせオート 」に加え、4K動画も撮れるので、写真も動画も高画質です！',
          intenseRedBtntxt: 'ソニー Cyber-shot DSC-WX800',
          orangeBtntxt: '卒業・入学におすすめデジカメ もっと見る',
          orangeBtnHref: '/ec/special/general/graduation_entrance/2012'
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_f.png',
          href: '/ec/special/general/graduation_entrance/938',
          title: '一度の撮影で360°撮影できる全天球カメラ',
          txt: 'その日の雰囲気も残すために、会場全体の様子を360°の静止画・４K動画で残してみるのはいかがでしょう？ 一度の撮影でグルッと360°記録できるので、お子様と桜、校舎などをまとめて記録することができるかも！お友達みんなでカメラを囲むのも楽しいですね。\n撮影した画像はLINEやFacebookに投稿すると、ぐるぐる回して見ることもできます。節目の思い出をいろいろな撮り方で残して楽しみましょう♪',
          intenseRedBtntxt: 'リコー RICOH THETA SC2 ',
          orangeBtntxt: '',
          orangeBtnHref: ''
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/734/images/camera_e.png',
          href: '/ec/special/general/graduation_entrance/2043',
          title: '交換レンズ1本でアップから広角まで撮影',
          txt: 'レンズを何本も持ち歩きたくない、そんな方にはこの高倍率ズームレンズがおすすめ。全体を写す広角撮影から、お子様をアップで写せる望遠ズームまで、これ１本で撮影できるので、レンズ交換が不要。\nさらに複数本レンズをもって行かなくてもいいので荷物が減らせるのも◎！',
          intenseRedBtntxt: 'タムロン 18-400mm F/3.5-6.3 Di II VC HLD',
          orangeBtntxt: '卒業・入学におすすめ交換レンズ もっと見る',
          orangeBtnHref: '/ec/special/general/graduation_entrance/2011'
        },
      ],
      // 便利な商品をご紹介の商品リストをconvenientProductListにセットします
      convenientProductList: [
        { href: '/ec/special/general/graduation_entrance/2044', src: 'https://shop.kitamura.jp/ts_rsc/734/images/cameray_c.png' },
        { href: '/ec/list?narrow18=0&keyword=スタビライザー&category=&limit=40&index=&searchbox=1&q=スタビライザー&path=&n20c=完了商品は除く', src: 'https://shop.kitamura.jp/ts_rsc/734/images/videoy_b.png' },
        { href: '/ec/special/general/graduation_entrance/3278', src: '	https://shop.kitamura.jp/ts_rsc/734/images/cameray_a.png' },
        { href: '/ec/special/general/graduation_entrance/2035', src: 'https://shop.kitamura.jp/ts_rsc/734/images/cheki.png' },
      ],
      // 入学の準備におすすめ！なまえラベル＆お弁当生活におすすめ商品リストをpreparationForAdmissionListにセットします
      preparationForAdmissionList: [
        { title: '「名前ラベル」を使って名前を貼ろう', txt: '持ち物に、ひとつひとつ名前を書くのは大変！ そんなときは、名前ラベルシールを使いましょう！', href: '/ec/special/general/graduation_entrance/2698', src: 'https://shop.kitamura.jp/ts_rsc/734/images/bnr_name.jpg' },
        { title: 'お弁当生活のスタートにおすすめの商品', txt: 'お弁当生活に便利でおすすめな商品を集めました！ 新生活のスタートに最適です！', href: '/ec/special/kaden/bento', src: 'https://shop.kitamura.jp/ts_rsc/734/images/bnr_sh350130.jpg' },
      ],
      // 卒園/卒業・入園/入学を撮影した写真の「 整理 」におすすめプリントサービスリストをprintServiceListにセットします
      printServiceList: [
        { title: 'フォトプラスブック', txt: '光沢表紙・マット表紙から選べます。\n中のページも厚みのある、丈夫な仕上がりのものがあります。', href: 'https://photobook.kitamura.jp/photoplus/', src: 'https://shop.kitamura.jp/ts_rsc/734/images/plus_logo.jpg', src2: '	https://shop.kitamura.jp/ts_rsc/734/images/plus.png' },
        { title: 'イヤーアルバム', txt: '人物の顔や写真の明るさを解析して、おすすめ写真を自動レイアウト。\nおしゃれな表紙デザイン・中ページデザインが人気。傷や色あせなどの耐久性にも優れています。', href: 'https://photobook.kitamura.jp/yearalbum/', src: 'https://shop.kitamura.jp/ts_rsc/734/images/year_logo.gif', src2: '	https://shop.kitamura.jp/ts_rsc/734/images/year.png' },
      ],
      // 卒園/卒業・入園/入学撮影のコツや『 ビデオ・カメラ選び 』に関する疑問にお答えしますQ＆AデータをshootingTipsAndCameraSelectionListにセットします
      shootingTipsAndCameraSelectionList: [
        { title: '卒園式・入学式の撮影のコツを伝授します', txt: '卒業式を撮影するのは実はとっても難しい…。\n失敗したくないパパ・ママ必見です♪', href: 'http://www.kitamura-print.com/special/knack/graduation.html', src: '	https://shop.kitamura.jp/ts_rsc/734/images/bot_kotu.gif', btntxt: '撮影のコツを詳しく見る', },
        { title: 'カメラ選びの疑問に関するQ＆A', txt: 'カメラのキタムラへ寄せられる『 ビデオ・カメラ選び 』に関する疑問にお答えします！', href: '/ec/special/general/graduation_entrance/faq', src: 'https://shopimg.kitamura.jp/images/banner/3645.gif', btntxt: '特集を詳しく見る ' },
      ],
      // おすすめ特集・プリントサービスリストをrecommendedFeaturesListにセットします
      recommendedFeaturesList: [
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        },
        {
          href: '/ec/special/camera/album/feature',
          img: 'https://shop.kitamura.jp/images/banner/3597.jpg',
          alt: '手作りアルバム特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/wirelessimageshare',
          img: 'https://shop.kitamura.jp/images/banner/2785.gif',
          alt: 'デジカメとスマホを無線でつないで写真を楽しもう'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/feature/',
          img: 'https://shop.kitamura.jp/images/banner/1341.jpg',
          alt: '話題の新製品'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736100503',
        '4548736100497',
        '4548736092204',
        '4960371006284',
        '4960371006277',
        '4549292083729',
        '4961311947285',
        '4961311947292',
        '4961311947308',
        '4961311947315',
        '4548736087989',
        '4548736055612',
        '4548736055605',
        '4548736079427',
        '4548736079410',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
// ピンクの外枠
#fullContent {
  width: 100%;
  border: 3px solid #f9d8e4;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
}
// sp時のpadding
@media screen and (max-width: 618px) {
  #fullContent {
    padding: 10px 6px !important;
  }
}
// pタグのスタイルを統一
#fullContent p {
  font-size: 16px;
  line-height: 1.9em;
}
//区切り線
#fullContent hr {
  background: url(https://shop.kitamura.jp/ts_rsc/734/images/line-sakura.png) no-repeat scroll left center;
  border: none;
  height: 50px;
  margin: 15px 0;
  width: 100%;
}
.pink-btn {
  background: rgba(255, 171, 202, 1);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 171, 202, 1)), to(rgba(249, 78, 140, 1)));
  background: -webkit-linear-gradient(top, rgba(255, 171, 202, 1) 0%, rgba(249, 78, 140, 1) 100%);
  background: linear-gradient(to bottom, rgba(255, 171, 202, 1) 0%, rgba(249, 78, 140, 1) 100%);
}
.pink-btn:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 171, 202, 1)), to(rgba(249, 78, 140, 1)));
  background: -webkit-linear-gradient(bottom, rgba(255, 171, 202, 1) 0%, rgba(249, 78, 140, 1) 100%);
  background: linear-gradient(to top, rgba(255, 171, 202, 1) 0%, rgba(249, 78, 140, 1) 100%);
}
//おすすめの理由！キタムラおすすめビデオカメラ・一眼レフ・レンズ・デジタルカメラの枠
.balloon {
  border-radius: 7px;
  border: solid 1px #ee7a81;
}
// おすすめの理由！キタムラおすすめビデオカメラ・一眼レフ・レンズ・デジタルカメラの花びら付きタイトル
h3.itmtitle {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  margin: 0;
  padding: 0px 0px 0px 35px;
  background-image: url(https://shop.kitamura.jp/ts_rsc/734/images/bg_cameratitle.gif);
  background-repeat: no-repeat;
  line-height: 1.5em;
  text-align: left;
  color: #0e315a;
  font-size: 18px;
  font-weight: bold;
}
// おすすめ特集・プリントサービス
.sougo {
  border-bottom: 2px solid #ffcc00;
  box-sizing: border-box;
  font-family: 'メイリオ';
  font-weight: bold;
  height: auto;
  width: 100%;
}
.tx-18 {
  font-size: 18px;
}
</style>
