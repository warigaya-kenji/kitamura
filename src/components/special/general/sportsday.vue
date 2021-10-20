<template>
  <v-app>
    <div class="sportsday">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <v-container class="bk-pg text-subtitle-2">
          <!-- ↓top image -->
          <topTitleImg
            :pcBackgroundImg="'/ec/images2/special/general/sportsday/topimage_01.png'"
            :spBackgroundImg="'/ec/images2/special/general/sportsday/topimage_sp_01.png'"
            :type="2"
            :height="'185px'"
          />
          <!-- ↑top image -->
          <h1 class="mb-4">いよいよ運動会シーズンの到来です！ ビデオカメラ・一眼レフで運動会を上手に残そう</h1>
          <p>
            ビデオや一眼レフでしっかり撮影して残したい！ ・・・でも、どんなビデオやレンズを使えばいいの？ そんなパパさん必見です！<br />
            カメラのキタムラ イチオシのビデオやデジカメの、おすすめ理由をまとめました。
          </p>
          <p>お子様の年間最大のイベント★ 当日は撮影に集中できるよう、余裕を持って準備をすすめましょう♪</p>
          <div class="of-h h40">
            <img src="/ec/images2/special/general/sportsday/tuna2.gif" alt="プログラム" width="auto" min-height="40px" />
          </div>
          <div class="nav">
            <ul class="nl">
              <li id="li01">
                <a href="https://shop.kitamura.jp/ec/special/general/sportsday">運動会におすすめカメラ<span class="en">ビデオ・高倍率デジカメ</span></a>
              </li>
              <li id="li02">
                <a href="https://shop.kitamura.jp/ec/special/general/sportsday/photo-knowhow-1">撮影のコツ・機材お手入れ <span class="en">HOW TO</span></a>
              </li>
              <li id="li03">
                <a href="http://www.kitamura-print.com/special/sportsday/">写真の残し方 <span class="en">プリント・ビデオダビング</span></a>
              </li>
              <li id="li04">
                <a href="http://photobook.kitamura.jp/special/sportsday/">写真のまとめ方<span class="en">フォトブック・アルバム</span></a>
              </li>
            </ul>
          </div>
          <div style="clear: both"></div>
          <div class="of-h mb-5">
            <img src="/ec/images2/special/general/sportsday/tuna.gif" alt="プログラム" width="auto" min-height="35px" />
          </div>

          <!-- ↓運動会におすすめビデオ・一眼レフ・レンズ・デジタルカメラはコレ -->
          <h2 class="line-height">運動会におすすめビデオ・一眼レフ・レンズ・デジタルカメラはコレ</h2>
          <v-row no-gutters justify="center">
            <v-col :cols="$vuetify.breakpoint.smAndDown ? 10 : ''" v-for="(navi, index) in naviList" :key="index">
              <a v-scroll-to="navi.href">
                <v-img :src="navi.src" max-width="178px" height="auto" class="mx-auto hover" />
              </a>
            </v-col>
          </v-row>
          <v-row dense justify="center mb-6">
            <v-col cols="12" sm="6">
              <a v-scroll-to="'#camera'">
                <v-img
                  src="/ec/images2/special/general/sportsday/btn_camera.png"
                  max-width="100%"
                  height="auto"
                  class="mx-auto hover"
                  alt="おすすめカメラを見る"
                />
              </a>
            </v-col>
            <v-col cols="12" sm="6">
              <a v-scroll-to="'#point'">
                <v-img
                  src="/ec/images2/special/general/sportsday/btn_point.png"
                  max-width="100%"
                  height="auto"
                  class="mx-auto hover"
                  alt="カメラ選びのポイント"
                />
              </a>
            </v-col>
          </v-row>
          <!-- 旗の区切り線 -->
          <v-img src="/ec/images2/special/general/sportsday/line_flag.png" max-width="100%" height="auto" />

          <!-- ↓キタムラおすすめ一眼レフ・レンズ・デジタルカメラ -->
          <h2 id="camera" class="line-height mt-12">キタムラおすすめ一眼レフ・レンズ・デジタルカメラ</h2>
          <v-sheet :id="product.id" color="#ffffff" class="rounded-lg pa-5 mt-6" v-for="(product, index) in productList" :key="index">
            <v-row>
              <v-col cols="12" sm="4">
                <a :href="product.href">
                  <v-img :src="product.src" max-width="100%" height="auto" class="mx-auto hover" />
                </a>
              </v-col>
              <v-col cols="12" sm="8">
                <h3 class="cameratitle">{{ product.title }}</h3>
                <p class="mt-2">
                  {{ product.txt }}
                </p>
                <momoBtn :btntxt="product.momotxt" :href="product.href" :height="'35px'" />
                <orangeBtn :btntxt="product.orangetxt" :href="product.orangehref" :height="'35px'" :type="3" />
              </v-col>
            </v-row>
          </v-sheet>
          <!-- 旗の区切り線 -->
          <v-img src="/ec/images2/special/general/sportsday/line_flag.png" max-width="100%" height="auto" class="mt-4" />

          <!-- ↓長時間撮影の味方！便利アイテム -->
          <h4 class="star">長時間撮影の味方！便利アイテム</h4>
          <p class="mt-2">
            長時間撮影するビデオ動画は、手や腕がだるくなりやすいので、疲れにくい便利アイテムをご紹介！<br />
            しっかり固定する効果もあり、大きなテレビで見た際にあきらかに違いがわかります。
          </p>
          <p>メモリーカードは、500枚ほど撮れるメディアがあれば十分です。動画を撮ることも考えると、32GB以上の容量で、高速タイプのClass10以上がオススメです。</p>
          <v-row>
            <v-col cols="12" sm="4" v-for="(item, index) in convenientItemList" :key="index">
              <a :href="item.href">
                <v-img :src="item.src" max-width="100%" height="auto" :alt="item.alt" class="mb-4" />
              </a>
              <orangeBtn :btntxt="item.btntxt" :href="item.href" :height="'35px'" :type="3" :icon="false" />
            </v-col>
          </v-row>
          <!-- 旗の区切り線 -->
          <v-img src="/ec/images2/special/general/sportsday/line_flag.png" max-width="100%" height="auto" class="mt-4" />

          <!-- ↓運動会のカメラ選びのポイント-->
          <h2 id="point" class="line-height mt-12">運動会のカメラ選びのポイント</h2>
          <p class="mt-2">
            写真なら、一瞬の真剣な表情やゴールの後のほっとした笑顔など、印象的に残せます。写真やアルバムとして残しておけば、見る機会も多く、お子様が大きくなってからも喜ばれます。
          </p>
          <div class="balloon5point mb-5">
            <v-sheet color="#FFF8DA" class="pa-4 rounded-lg">
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">①ズーム機能を重視すれば、お子様のいい表情を残せます</p>
              <p class="mb-2">一眼カメラなら300mm前後のレンズ、デジカメなら30倍くらいあると、お子様の表情をアップで残せます</p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">
                ②ピント合わせが速く、ゴールの瞬間など一瞬の表情を残せます（一眼レフ・ミラーレスカメラ）
              </p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">③荷物をできるだけ減らしたい方は、高倍率のコンパクトデジカメ</p>
            </v-sheet>
          </div>

          <!-- ↓運動会のビデオ選びのポイント-->
          <h2 class="line-height mt-12">運動会のビデオ選びのポイント</h2>
          <p class="mt-2">
            動画なら、運動会の雰囲気をリアルに残せます！ また、お遊戯の音楽や歓声も残せるので、臨場感あふれます。
            当日は運動会に来られないおじいちゃん・おばあちゃんにも、勇姿を見せて喜んでもらえます。
          </p>
          <div class="balloon5pointv mb-5">
            <v-sheet color="#FFF8DA" class="pa-4 rounded-lg">
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">①手ブレに強い！ ズームにしても見やすい動画が撮れます</p>
              <p class="mb-2">ズームをすると、どうしても手ブレがおこりやすく、酔いそうな動画になるので、手ブレ補正機能は重要です</p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">②軽量コンパクトでママさんでも楽々持ち運び</p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">③広角からズームまで標準装備</p>
              <p>運動会の雰囲気全体からお子様の表情のアップまで残せます</p>
            </v-sheet>
          </div>

          <!-- ↓カメラのキタムラなら”新品”も”中古”も一緒に買えます-->
          <h2 class="line-height mt-12">運動会のビデオ選びのポイント</h2>
          <p class="mt-2">
            ご予算に合わせて、「中古」からカメラやレンズを探すのもおすすめです。<br />
            全国のカメラのキタムラ店舗からお取り寄せできます。（※中古サービスへ移動します）
          </p>
          <div class="balloon3pointv mb-5">
            <v-sheet color="#FFF8DA" class="pa-4 rounded-lg">
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">①中古で「交換レンズ」を探す</p>
              <p class="mb-0">
                運動会なら300mm程度の望遠レンズがおすすめ→<a
                  href="http://www.net-chuko.com/buy/list.do?kindName=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&keyword=300mm&ob=ud-&lc=40/?ref=sportsday"
                  target="_brank"
                  >詳しくはコチラ</a
                >
              </p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">②中古で「一眼レフ」を探す</p>
              <p class="mb-0">
                ダブルズームもおすすめです→<a
                  href="http://www.net-chuko.com/buy/list.do?kindName=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&keyword=%E3%83%80%E3%83%96%E3%83%AB%E3%82%BA%E3%83%BC%E3%83%A0&limit=20&o=0/?ref=sportsday"
                  target="_brank"
                  >詳しくはコチラ</a
                >
              </p>
              <p class="text-subtitle-1 blue--text text--darken-4 font-weight-bold mb-0">③中古で「ミラーレス」を探す</p>
              <p class="mb-0">
                小型で軽量♪ 女性にも使いやすい「OM-D」シリーズがおすすめ→<a
                  href="http://www.net-chuko.com/buy/list.do?kindName=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&keyword=%E3%83%80%E3%83%96%E3%83%AB%E3%82%BA%E3%83%BC%E3%83%A0&limit=20&o=0/?ref=sportsday"
                  target="_brank"
                  >詳しくはコチラ</a
                >
              </p>
            </v-sheet>
          </div>
          <!-- 旗の区切り線 -->
          <v-img src="/ec/images2/special/general/sportsday/line_flag.png" max-width="100%" height="auto" class="mt-4" />
        </v-container>

        <!-- ↓カメラのキタムラなら”新品”も”中古”も一緒に買えます-->
        <h2 class="line-height mt-12">キタムライチオシ！ 運動会におすすめ商品一覧</h2>
        <priceAndPopular :productDetailList="productDetailList" />
        <v-row class="mt-16">
          <v-col cols="12" sm="4" v-for="(item, index) in btnList" :key="index">
            <momoBtn :btntxt="item.txt" :href="item.href" :height="'35px'" />
          </v-col>
        </v-row>
        <!-- 旗の区切り線 -->
        <v-img src="/ec/images2/special/general/sportsday/line_flag.png" max-width="100%" height="auto" class="mt-4" />

        <!--↓ ショッピングクレジット-->
        <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <!-- ↓関連おすすめ特集-->
        <h2 class="line-height mt-12">関連おすすめ特集</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import MomoBtn from '@/components/common/special/momoBtn.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
export default Vue.extend({
  name: 'sportsday',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    momoBtn: MomoBtn,
    orangeBtn: OrangeBtn,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    shoppingCredit: ShoppingCredit
  },
  setup: (props, context) => {
    document.title = 'パパ・ママ応援運動会特集！おすすめ一眼カメラ・ビデオ（撮影準備編） | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'パパママ応援 運動会特集の撮影準備編！カメラのキタムライチオシのビデオやデジカメと、おすすめ理由をまとめました。ビデオカメラ・一眼レフで運動会を上手に残しましょう♪')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'パパ・ママ応援運動会特集！おすすめ一眼カメラ・ビデオ（撮影準備編）',
          disabled: true
        }
      ],
      programList: [
        { href: 'https://shop.kitamura.jp/ec/special/general/sportsday', txt: '運動会におすすめカメラ', subtxt: 'ビデオ・高倍率デジカメ' },
        { href: 'https://shop.kitamura.jp/ec/special/general/sportsday/photo-knowhow-1', txt: '撮影のコツ・機材お手入れ ', subtxt: 'HOW TO' },
        { href: 'http://www.kitamura-print.com/special/sportsday/', txt: '写真の残し方', subtxt: 'プリント・ビデオダビング' },
        { href: 'http://photobook.kitamura.jp/special/sportsday', txt: '写真のまとめ方', subtxt: 'フォトブック・アルバム' },
      ],
      naviList: [
        { src: '/ec/images2/special/general/sportsday/btn_topmirrorless.png', href: '#mirrorless' },
        { src: '/ec/images2/special/general/sportsday/btn_topdslr.png', href: '#dslr' },
        { src: '/ec/images2/special/general/sportsday/btn_toplens.png', href: '#lens' },
        { src: '/ec/images2/special/general/sportsday/btn_topcompact.png', href: '#compact' },
        { src: '/ec/images2/special/general/sportsday/btn_topvideo.png', href: '#video' }
      ],
      productList: [
        {
          id: 'mirrorless',
          src: '/ec/images2/special/general/sportsday/camera_a.jpg',
          href: 'https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=%E3%82%BD%E3%83%8B%E3%83%BC+%CE%B16400+%E3%83%80%E3%83%96%E3%83%AB%E3%82%BA%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%AD%E3%83%83%E3%83%88&path=',
          title: '「リアルタイム瞳AF」と「リアルタイムトラッキング」でお子様の活躍をしっかり撮影できる',
          txt: 'このカメラの「リアルタイム瞳AF」と「リアルタイムトラッキング」機能があれば、しっかりとお子様の瞳にピントを合わせ続けることができるので、「ピントが合わなかった…」といった失敗が少なくなるんです！',
          momotxt: 'ソニー α6400 \nダブルズームレンズキット ',
          orangetxt: 'キタムラおすすめ\nミラーレス・一眼レフ 一覧',
          orangehref: '/ec/special/general/sportsday/531'
        },
        {
          id: 'dslr',
          src: '/ec/images2/special/general/sportsday/camera_c.jpg',
          href: 'https://shop.kitamura.jp/ec/pd/4549292132694',
          title: '小型・軽量、なのに本格的！',
          txt: 'モニターが見えにくいときはファインダー撮影、お子様目線での撮影時はライブビュー撮影、といった具合に、ぜひ使い分けてください。どちらの撮影でもオートフォーカスが速く、思ったところにピントを合わせてくれます♪',
          momotxt: 'キヤノン EOS Kiss X10\n ダブルズームキット',
          orangetxt: '運動会におすすめ\nミラーレス・一眼レフ 一覧',
          orangehref: '/ec/special/general/sportsday/531'
        },
        {
          id: 'lens',
          src: '/ec/images2/special/general/sportsday/camera_b.jpg',
          href: 'https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=Model+B028&path=',
          title: 'どんなシーンでも1本で撮影できるオールマイティレンズ',
          txt: 'この競技はあのレンズで、次の競技はこのレンズ…と、プログラムとにらめっこする必要がありません。これ1本で運動会で考えられるすべてのシーンに対応できるんです♪ 競技中でもくるっとズームをまわすだけで全体の雰囲気からお子様のアップまでカンタンに撮影できます。',
          momotxt: 'タムロン 18-400mm F/3.5-6.3\n Di II VC HLD  (Model B028) ',
          orangetxt: '運動会におすすめ\n交換レンズ 一覧',
          orangehref: '/ec/special/general/sportsday/532'
        },
        {
          id: 'compact',
          src: '/ec/images2/special/general/sportsday/camera_d.jpg',
          href: 'https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=SX740&path=',
          title: 'できるだけ荷物を減らしたい！ とお考えの方におすすめ♪',
          txt: '超アップでの撮影もできる光学40倍ズーム搭載！ コンパクトなので持ち運びもラクチン。カメラが人物の顔を検出すると、自動でピントを合わせてくれる機能付きなので運動会撮影にピッタリ！',
          momotxt: 'キヤノン PowerShot\n SX740 HS',
          orangetxt: '運動会におすすめ\n高倍率ズームデジカメ 一覧',
          orangehref: '/ec/special/general/sportsday/485'
        },
        {
          id: 'video',
          src: '/ec/images2/special/general/sportsday/camera_e.jpg',
          href: 'https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=CX680&path=',
          title: '運動会でのおすすめ機能 超強力手ブレ補正で滑らかな撮影',
          txt: '運動会撮影時はズームアップで撮ったり動きながらの撮影も多く、手ブレを起こしやすい場面がたくさん・・・ このビデオカメラならソニー自慢の超強力手ブレ補正で、ブレの少ない滑らかな撮影が可能。 さらに他のビデオカメラよりもワイドに撮影できるので、お昼ご飯を食べているお子様を、近距離で無理なく撮れるんです♪',
          momotxt: 'ソニー デジタルHDビデオ\nカメラレコーダー HDR-CX680',
          orangetxt: '運動会におすすめ\nビデオカメラ 一覧',
          orangehref: '/ec/special/general/sportsday/486'
        },
      ],
      convenientItemList: [
        { src: '/ec/images2/special/general/sportsday/cameray_c.png', alt: '場所を取らない1つで3役の三脚', href: '/ec/special/general/sportsday/1196/', btntxt: 'ビデオ・デジカメ用三脚を見る' },
        { src: '/ec/images2/special/general/sportsday/videoy_b.png', alt: '三脚ねじ穴に取付ビデオグリップ', href: 'https://shop.kitamura.jp/pd/list.html?searchbox=1&sort=number20%2Crank%2CScore&index=all&path=%E3%82%AB%E3%83%A1%E3%83%A9%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC%E3%83%BB%E7%94%A8%E5%93%81&q=%E3%83%9C%E3%83%88%E3%83%A0%E3%82%B0%E3%83%AA%E3%83%83%E3%83%97&x=0&y=0', btntxt: 'ビデオ・デジカメ用グリップを見る' },
        { src: '/ec/images2/special/general/sportsday/cameray_a.png', alt: '32GB Class10 メモリーカード', href: '/ec/special/general/sportsday/memorycard/', btntxt: 'SDメモリーカードを見る' },
      ],
      installmentPaymentExampleList: [
        { productPrice: '152,300', numberOfDivisions: '48', monthlyPayment: '3,173' },
        { productPrice: '76,800', numberOfDivisions: '20', monthlyPayment: '3,840' },
      ],
      btnList: [
        { txt: '一眼・ミラーレス一覧', href: "https://shop.kitamura.jp/ec/special/general/sportsday/531" },
        { txt: '高倍率ズームレンズ一覧', href: "/ec/special/general/sportsday/532" },
        { txt: '高倍率ズームデジカメ一覧', href: "/ec/special/general/sportsday/485" },
        { txt: 'ビデオカメラ一覧', href: "/ec/special/general/sportsday/486" },
        { txt: '三脚一覧', href: "/ec/special/general/sportsday/1196" },
        { txt: '記録メディア一覧', href: "/ec/special/general/sportsday/memorycard" },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/camera/tripod',
          img: 'https://shopimg.kitamura.jp/images/banner/3253.gif',
          alt: 'おすすめ三脚の選び方'
        },
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest-nd',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/page/telephoneorder-info',
          img: 'https://shopimg.kitamura.jp/images/banner/1361.gif',
          alt: '電話注文のご案内'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292119060',
        '4548736012554',
        '4960759902443',
        '4548736100503',
        '4549292132694',
        '4548736055612',
        '4960371006277',
        '4960371006284',
        '0085126886547',
        '0085126886554',
        '4549292037708',
        '4960759148353',
        '4545350043742',
        '4907822082381',
        '4523052018121',
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
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.bk-pg {
  max-width: 950px;
  background: #cae3f7;
  border: 3px solid #fff;
  border-radius: 7px;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 20%);
  padding: 0 20px 15px;
  box-sizing: border-box;
}
.sportsday h1 {
  color: #666;
  font-size: 18px;
  line-height: 1.3em;
}
.sportsday h2 {
  width: 100%;
  background: transparent url(/ec/images2/special/general/sportsday/icon_check.gif) no-repeat scroll left 1px;
  color: #593432;
  font-size: 17px;
  font-weight: bold;
  padding: 5px 0 0 35px;
  box-sizing: border-box;
  margin: 15px 0;
}

div.nav ul.nl {
  width: 100% !important;
  height: auto;
  margin: 1px 0;
  padding: 0;
  background: url(/ec/images2/special/general/sportsday/hor_menu6_off.gif) repeat-x top;
  border-left: 1px #2c5170 solid;
  border-right: 1px #84aed2 solid;
  list-style-type: none;
  text-align: center;
  float: left;
}

div.nav ul.nl li#li01,
div.nav ul.nl li#li01 a:hover,
div.nav ul.nl li#li02 a:hover,
div.nav ul.nl li#li03 a:hover,
div.nav ul.nl li#li04 a:hover {
  background: url(/ec/images2/special/general/sportsday/hor_menu6_on.gif) repeat-x top;
}

div.nav ul.nl li a {
  color: #be1f33 !important;
  text-decoration: none !important;
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 7px 2px;
  text-decoration: none;
  font-weight: bold;
  font-size: 110%;
  line-height: 100%;
}

div.nav ul.nl li a span.en {
  display: block;
  margin-top: 2px;
  font-size: 85%;
  font-weight: normal;
  color: #4e83b3;
}

@media screen and (min-width: 857px) {
  div.nav ul.nl li {
    width: 25% !important;
    float: left;
    border-left: 1px #84aed2 solid;
    border-right: 1px #2c5170 solid;
    box-sizing: border-box;
  }
}

.border-style {
  border-left: 1px #84aed2 solid;
  border-right: 1px #2c5170 solid;
  box-sizing: border-box;
}
.of-h {
  overflow: hidden;
}
.cameratitle {
  background-image: url(/ec/images2/special/general/sportsday/bg_cameratitle.gif);
  background-repeat: no-repeat;
  font-size: 16px;
  font-weight: bold;
  height: auto;
  line-height: 1.3em;
  margin: 0;
  padding: 3px 0 5px 35px;
  color: #0e315a;
  box-sizing: border-box;
}
.star {
  background: url(/ec/images2/special/general/sportsday/icon_star.gif) no-repeat top left;
  padding: 3px 0 6px 35px;
  box-sizing: border-box;
  font-weight: bold;
  color: #593432;
}
.balloon5point {
  background: url(/ec/images2/special/general/sportsday/bg_point_camera.png) no-repeat left top;
  background-size: auto;
  width: 100%;
  height: auto;
  padding: 0 0 10px 150px;
  box-sizing: border-box;
}

.balloon5pointv {
  background: url(/ec/images2/special/general/sportsday/bg_point_camerav.png) no-repeat left top;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 0 10px 150px;
  box-sizing: border-box;
}

.balloon3pointv {
  background: url(/ec/images2/special/general/sportsday/bg_balloon_point.gif) no-repeat left top;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 0 10px 150px;
  box-sizing: border-box;
}

@media screen and (max-width: 500px) {
  .balloon5point {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 500px) {
  .balloon5pointv {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 500px) {
  .balloon3pointv {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

.h40 {
  height: 40px;
}
</style>
